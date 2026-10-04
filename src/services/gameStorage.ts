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
   * Load all games published by the teacher (with EGY01 seeded if none exists)
   */
  public getPublishedGames(): PublishedGameRecord[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY_PUBLISHED_GAMES);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Error loading published games:", e);
    }

    // Default Seed: Ägypten Meisterspiel EGY01
    const defaultEgypt: PublishedGameRecord = {
      id: 'game_egypt_original',
      shareCode: 'EGY01',
      publishedAt: 'Offizielles Spiel',
      isPublic: true,
      game: {
        id: 'game_egypt_original',
        title: 'Helfer des Pharaos – Nil-Expedition',
        subtitle: 'Von Elephantine nach Gizeh',
        era: 'Altes Ägypten',
        archetype: 'reigns_balance',
        artStyle: 'pixel_art',
        gradeLevel: 'mittelstufe',
        eraThemeId: 'egypt_gold',
        targetGrades: 'Klassenstufe 5/6 (Gymnasium & Sekundarstufe)',
        coreTopics: ['Nilhochwasser', 'Ma\'at & Pharaonentum', 'Pyramidenbau', 'Hieroglyphen', 'Götterwelt'],
        description: 'Reise auf dem Nil von Elephantine nach Gizeh, meistere 20 historische Runden und balanciere die 4 Mächte Ägyptens.',
        pillars: [
          { key: 'goetter', label: 'Götter / Ma\'at', icon: '⚡', description: 'Gunst der Götter und kosmische Ordnung' },
          { key: 'priester', label: 'Priester / Kult', icon: '🙏', description: 'Einfluss der Tempel und Rituale' },
          { key: 'adel', label: 'Adel / Hofstaat', icon: '👑', description: 'Macht der Nomarchen und Beamten' },
          { key: 'volk', label: 'Volk / Bauern', icon: '😊', description: 'Zufriedenheit der Bauern und Steinmetze' },
        ],
        specialResourceName: 'Göttliche Gnade',
        specialResourceEmoji: '🌟',
        skillNames: {
          skill1: 'Göttliche Auserwähltheit',
          skill2: 'Politische Geschicklichkeit',
          skill3: 'Militärische Stärke',
        },
        rounds: [], // Dynamic rounds resolved via storyData engine
      },
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_PUBLISHED_GAMES, JSON.stringify([defaultEgypt]));
    }
    return [defaultEgypt];
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
   * Update an existing game while keeping its share code and publication metadata
   */
  public updateGame(updatedGame: GameDefinition): void {
    const existing = this.getPublishedGames();
    const updated = existing.map((rec) => {
      if (rec.id === updatedGame.id || rec.game.id === updatedGame.id) {
        return {
          ...rec,
          game: updatedGame,
        };
      }
      return rec;
    });
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_PUBLISHED_GAMES, JSON.stringify(updated));
    }
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
