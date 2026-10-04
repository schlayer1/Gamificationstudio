import { GameDefinition } from '../types/game';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw8oGZp4y-1MeeuNJJyw5Fa2Atfq9jrNqUfFNuQGl7qmZcwBMRRf440rLeoOTpz5ZWKfA/exec';
const FOLDER_ID = '1HMsm3Bl6WziQdpMZK1t3FypCsQHs22jG';

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

  /**
   * Save a complete game to its dedicated subfolder on Google Drive
   */
  public async saveGameToDrive(game: GameDefinition, code: string): Promise<CloudSyncResult> {
    try {
      const payload = {
        action: 'saveGame',
        code: code.trim().toUpperCase(),
        title: game.title,
        folderId: this.folderId,
        game: game,
      };

      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Plain text avoids CORS preflight blockage in Google Apps Script
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.success) {
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
      // Strip base64 prefix if present (e.g. data:image/jpeg;base64,...)
      const cleanBase64 = base64Data.includes(',') ? base64Data.split(',')[1] : base64Data;

      const payload = {
        action: 'uploadImage',
        code: code.trim().toUpperCase(),
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
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.success && data.imageUrl) {
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
  public async fetchGameByCode(code: string): Promise<GameDefinition | null> {
    try {
      const cleanCode = code.trim().toUpperCase();
      const targetUrl = `${this.url}?action=getGame&code=${encodeURIComponent(cleanCode)}&folderId=${this.folderId}`;

      const response = await fetch(targetUrl);
      const data = await response.json();

      if (data && !data.error && data.id) {
        return data as GameDefinition;
      }
      return null;
    } catch (err) {
      console.error('Drive fetch error:', err);
      return null;
    }
  }

  /**
   * List all published games available on Google Drive
   */
  public async listAllGames(): Promise<Array<{ code: string; title: string; era: string }>> {
    try {
      const targetUrl = `${this.url}?folderId=${this.folderId}`;
      const response = await fetch(targetUrl);
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (err) {
      console.error('Drive list error:', err);
      return [];
    }
  }
}

export const googleDriveSyncService = new GoogleDriveSyncService();
