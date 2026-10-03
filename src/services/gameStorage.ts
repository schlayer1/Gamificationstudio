import { GameDefinition } from '../types/game';

const STORAGE_KEY_PUBLISHED_GAMES = 'history_trail_published_games';
const STORAGE_KEY_ACTIVE_PIN = 'history_trail_teacher_pin';
const DEFAULT_PIN = '1234'; // Default Teacher PIN for easy school setup

export interface PublishedGameRecord {
  id: string;
  shareCode: string; // e.g. "ROM10", "AEGY20"
  game: GameDefinition;
  publishedAt: string;
  isPublic: boolean;
}

export class GameStorageService {
  /**
   * Get teacher access PIN (defaults to 1234)
   */
  public getTeacherPin(): string {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY_ACTIVE_PIN) || DEFAULT_PIN;
    }
    return DEFAULT_PIN;
  }

  /**
   * Set a custom teacher PIN
   */
  public setTeacherPin(newPin: string): void {
    if (typeof window !== 'undefined' && newPin.trim()) {
      localStorage.setItem(STORAGE_KEY_ACTIVE_PIN, newPin.trim());
    }
  }

  /**
   * Verify teacher PIN
   */
  public verifyPin(enteredPin: string): boolean {
    const currentPin = this.getTeacherPin();
    return enteredPin.trim() === currentPin.trim();
  }

  /**
   * Load all games published by the teacher
   */
  public getPublishedGames(): PublishedGameRecord[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY_PUBLISHED_GAMES);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.error("Error loading published games:", e);
    }
    return [];
  }

  /**
   * Publish / Freigeben a game so students can join via share code or selection
   */
  public publishGame(game: GameDefinition): PublishedGameRecord {
    const existing = this.getPublishedGames();
    
    // Generate clean 4-6 char share code, e.g., "ROM44" or "NIL20"
    const prefix = (game.era.slice(0, 3) || 'HIS').toUpperCase().replace(/[^A-Z]/g, 'G');
    const randomSuffix = Math.floor(10 + Math.random() * 90);
    const shareCode = `${prefix}${randomSuffix}`;

    const record: PublishedGameRecord = {
      id: game.id,
      shareCode,
      game,
      publishedAt: new Date().toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      isPublic: true,
    };

    // Filter out previous version if overwriting
    const updated = [record, ...existing.filter((g) => g.id !== game.id)];
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_PUBLISHED_GAMES, JSON.stringify(updated));
    }
    return record;
  }

  /**
   * Unpublish / Delete a game from student view
   */
  public unpublishGame(gameId: string): void {
    const existing = this.getPublishedGames();
    const updated = existing.filter((g) => g.id !== gameId);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_PUBLISHED_GAMES, JSON.stringify(updated));
    }
  }

  /**
   * Find game by share code (e.g. entered by student)
   */
  public findGameByShareCode(code: string): GameDefinition | null {
    const cleanCode = code.trim().toUpperCase();
    const games = this.getPublishedGames();
    const match = games.find((g) => g.shareCode.toUpperCase() === cleanCode);
    return match ? match.game : null;
  }
}

export const gameStorageService = new GameStorageService();
