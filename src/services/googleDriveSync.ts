import { GameDefinition } from '../types/game';

const env = (typeof import.meta !== 'undefined' && (import.meta as any).env) ? (import.meta as any).env : {} as any;
const APPS_SCRIPT_URL =
  (env.VITE_GOOGLE_DRIVE_SCRIPT_URL as string)?.trim() ||
  'https://script.google.com/macros/s/AKfycbw8oGZp4y-1MeeuNJJyw5Fa2Atfq9jrNqUfFNuQGl7qmZcwBMRRf440rLeoOTpz5ZWKfA/exec';
const FOLDER_ID =
  (env.VITE_GOOGLE_DRIVE_FOLDER_ID as string)?.trim() ||
  '1HMsm3Bl6WziQdpMZK1t3FypCsQHs22jG';

const GAME_CACHE_TTL_MS = 5 * 60_000;
const LIST_CACHE_TTL_MS = 2 * 60_000;
const FETCH_TIMEOUT_MS = 20_000;
const UPLOAD_TIMEOUT_MS = 30_000;

async function parseAppsScriptResponse(response: Response, contextLabel: string): Promise<any> {
  if (!response.ok) {
    throw new Error(`Google Apps Script HTTP ${response.status} (${contextLabel}).`);
  }
  const text = await response.text();
  const trimmed = text.trim();
  if (!trimmed) {
    throw new Error(`Leere Antwort von Google Apps Script (${contextLabel}).`);
  }
  if (trimmed.startsWith('<')) {
    throw new Error(
      'Google Apps Script hat HTML statt JSON geliefert (Anmeldung/Berechtigung prüfen: Bereitstellung auf "Jeder" setzen).'
    );
  }
  try {
    return JSON.parse(trimmed);
  } catch {
    throw new Error(`Ungültige JSON-Antwort von Google Apps Script (${contextLabel}).`);
  }
}

export interface CloudSyncResult {
  success: boolean;
  code?: string;
  folderName?: string;
  error?: string;
}

export interface CloudImageUploadResult {
  success: boolean;
  imageUrl?: string;
  fileId?: string;
  error?: string;
}

export class GoogleDriveSyncService {
  private url: string = APPS_SCRIPT_URL;
  private folderId: string = FOLDER_ID;
  private gameCache = new Map<string, { game: GameDefinition; cachedAt: number }>();
  private inFlightGameFetches = new Map<string, Promise<GameDefinition | null>>();
  private listCache: { items: Array<{ code: string; title: string; era: string }>; cachedAt: number } | null = null;
  private inFlightListFetch: Promise<Array<{ code: string; title: string; era: string }>> | null = null;

  public invalidateCache(code?: string): void {
    if (code) {
      this.gameCache.delete(code.trim().toUpperCase());
    } else {
      this.gameCache.clear();
    }
    this.listCache = null;
  }

  /**
   * Save a complete game to its dedicated subfolder on Google Drive
   */
  public async saveGameToDrive(game: GameDefinition, code: string): Promise<CloudSyncResult> {
    try {
      const cleanCode = code.trim().toUpperCase();
      const payload = {
        action: 'saveGame',
        code: cleanCode,
        title: game.title,
        author: game.authorName || 'Lehrkraft',
        authorId: game.authorId || '',
        folderId: this.folderId,
        game: game,
      };

      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Plain text avoids CORS preflight blockage in Google Apps Script
        },
        signal: AbortSignal.timeout(UPLOAD_TIMEOUT_MS),
        body: JSON.stringify(payload),
      });

      const data = await parseAppsScriptResponse(response, 'saveGame');
      if (data.success) {
        this.gameCache.set(cleanCode, { game, cachedAt: Date.now() });
        this.listCache = null;
        return {
          success: true,
          code: data.code,
          folderName: data.folderName,
        };
      } else {
        return {
          success: false,
          error: data.error || 'Fehler beim Speichern auf Google Drive.',
        };
      }
    } catch (err: any) {
      console.error('Drive save error:', err);
      return {
        success: false,
        error: err.message || 'Verbindungsfehler zu Google Drive.',
      };
    }
  }

  /**
   * Upload an image (base64) into the game's specific subfolder on Google Drive
   */
  public async uploadImageToDrive(
    code: string,
    gameTitle: string,
    fileName: string,
    base64Data: string,
    mimeType: string = 'image/jpeg'
  ): Promise<CloudImageUploadResult> {
    try {
      const cleanCode = code.trim().toUpperCase();
      // Strip base64 prefix if present (e.g. data:image/jpeg;base64,...)
      const cleanBase64 = base64Data.includes(',') ? base64Data.split(',')[1] : base64Data;

      const payload = {
        action: 'uploadImage',
        code: cleanCode,
        title: gameTitle,
        fileName: fileName,
        folderId: this.folderId,
        base64Data: cleanBase64,
        mimeType: mimeType,
      };

      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        signal: AbortSignal.timeout(UPLOAD_TIMEOUT_MS),
        body: JSON.stringify(payload),
      });

      const data = await parseAppsScriptResponse(response, 'uploadImage');
      if (data.success && data.imageUrl) {
        this.invalidateCache(cleanCode);
        return {
          success: true,
          imageUrl: data.imageUrl,
          fileId: data.fileId,
        };
      } else {
        return {
          success: false,
          error: data.error || 'Bild-Upload fehlgeschlagen.',
        };
      }
    } catch (err: any) {
      console.error('Drive image upload error:', err);
      return {
        success: false,
        error: err.message || 'Verbindungsfehler beim Bild-Upload.',
      };
    }
  }

  /**
   * Fetch game from Google Drive by share code (e.g. "ROM44")
   */
  public async fetchGameByCode(code: string, forceRefresh = false): Promise<GameDefinition | null> {
    const cleanCode = code.trim().toUpperCase();
    if (!cleanCode) return null;

    const cached = this.gameCache.get(cleanCode);
    if (!forceRefresh && cached && Date.now() - cached.cachedAt < GAME_CACHE_TTL_MS) {
      return cached.game;
    }

    const existing = this.inFlightGameFetches.get(cleanCode);
    if (existing) {
      return existing;
    }

    const promise = (async () => {
      try {
        const targetUrl = `${this.url}?action=getGame&code=${encodeURIComponent(cleanCode)}&folderId=${this.folderId}`;
        const response = await fetch(targetUrl, {
          signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
        });
        const data = await parseAppsScriptResponse(response, 'getGame');

        if (data && !data.error && data.id) {
          const game = data as GameDefinition;
          this.gameCache.set(cleanCode, { game, cachedAt: Date.now() });
          return game;
        }
        return null;
      } catch (err) {
        console.error('Drive fetch error:', err);
        return null;
      } finally {
        this.inFlightGameFetches.delete(cleanCode);
      }
    })();

    this.inFlightGameFetches.set(cleanCode, promise);
    return promise;
  }

  /**
   * List all published games available on Google Drive
   */
  public async listAllGames(forceRefresh = false): Promise<Array<{ code: string; title: string; era: string }>> {
    if (!forceRefresh && this.listCache && Date.now() - this.listCache.cachedAt < LIST_CACHE_TTL_MS) {
      return this.listCache.items;
    }

    if (this.inFlightListFetch) {
      return this.inFlightListFetch;
    }

    this.inFlightListFetch = (async () => {
      try {
        const targetUrl = `${this.url}?folderId=${this.folderId}`;
        const response = await fetch(targetUrl, {
          signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
        });
        const data = await parseAppsScriptResponse(response, 'listGames');
        if (Array.isArray(data)) {
          this.listCache = { items: data, cachedAt: Date.now() };
          return data;
        }
        return [];
      } catch (err) {
        console.error('Drive list error:', err);
        return [];
      } finally {
        this.inFlightListFetch = null;
      }
    })();

    return this.inFlightListFetch;
  }
}

export const googleDriveSyncService = new GoogleDriveSyncService();
