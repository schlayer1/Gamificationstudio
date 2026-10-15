import { GameDefinition } from '../types/game';
import { PortalUser } from '../types/user';
import { teacherAuthService } from './teacherAuth';
import { WW1_MASTER_GAME } from '../data/predefinedGames/ww1Game';
import { STONEAGE_MASTER_GAME } from '../data/predefinedGames/stoneageGame';
import { ROME_MASTER_GAME } from '../data/predefinedGames/romeGame';
import { ROME_CULTURE_MASTER_GAME } from '../data/predefinedGames/romeCultureGame';

const STORAGE_KEY_PUBLISHED_GAMES = 'history_trail_published_games';

export interface PublishedGameRecord {
  id: string;
  shareCode: string; // e.g. "ROM10", "AEGY20"
  game: GameDefinition;
  publishedAt: string;
  isPublic: boolean;
  authorId?: string; // e.g. "t-keller" or "official"
  authorName?: string; // e.g. "Keller"
  isDraft?: boolean; // true = private draft, false = published for students
  sharedWithKollegium?: boolean; // true = visible to colleagues in the pool
}

export class GameStorageService {
  /**
   * Verify teacher PIN against central user list
   */
  public verifyPin(enteredPin: string): boolean {
    const res = teacherAuthService.loginWithPin(enteredPin);
    return res.success;
  }

  /**
   * Load all games published by teachers & official master games
   */
  public getPublishedGames(): PublishedGameRecord[] {
    if (typeof window === 'undefined') return [];

    // 1. Offizielles Ägypten Meisterspiel (EGY01)
    const defaultEgypt: PublishedGameRecord = {
      id: 'game_egypt_original',
      shareCode: 'EGY01',
      publishedAt: 'Offizielles Meisterspiel',
      isPublic: true,
      authorId: 'official',
      authorName: 'Meisterspiel',
      isDraft: false,
      sharedWithKollegium: true,
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
        authorId: 'official',
        authorName: 'Meisterspiel',
        isDraft: false,
        sharedWithKollegium: true
      },
    };

    // 2. Offizielles Erster Weltkrieg Meisterspiel (WW101)
    const defaultWW1: PublishedGameRecord = {
      id: WW1_MASTER_GAME.id,
      shareCode: 'WW101',
      publishedAt: 'Offizielles Meisterspiel',
      isPublic: true,
      authorId: 'official',
      authorName: 'Meisterspiel',
      isDraft: false,
      sharedWithKollegium: true,
      game: {
        ...WW1_MASTER_GAME,
        authorId: 'official',
        authorName: 'Meisterspiel',
        isDraft: false,
        sharedWithKollegium: true
      },
    };

    // 3. Offizielles Steinzeit Meisterspiel (STN01)
    const defaultStoneAge: PublishedGameRecord = {
      id: STONEAGE_MASTER_GAME.id,
      shareCode: 'STN01',
      publishedAt: 'Offizielles Meisterspiel',
      isPublic: true,
      authorId: 'official',
      authorName: 'Meisterspiel',
      isDraft: false,
      sharedWithKollegium: true,
      game: {
        ...STONEAGE_MASTER_GAME,
        authorId: 'official',
        authorName: 'Meisterspiel',
        isDraft: false,
        sharedWithKollegium: true
      },
    };

    // 4. Offizielles Antikes Rom Meisterspiel (ROM01)
    const defaultRome: PublishedGameRecord = {
      id: ROME_MASTER_GAME.id,
      shareCode: 'ROM01',
      publishedAt: 'Offizielles Meisterspiel',
      isPublic: true,
      authorId: 'official',
      authorName: 'Meisterspiel',
      isDraft: false,
      sharedWithKollegium: true,
      game: {
        ...ROME_MASTER_GAME,
        authorId: 'official',
        authorName: 'Meisterspiel',
        isDraft: false,
        sharedWithKollegium: true
      },
    };

    // 5. Offizielles Antikes Rom: Kultur & Religion Meisterspiel (ROM02)
    const defaultRomeCulture: PublishedGameRecord = {
      id: ROME_CULTURE_MASTER_GAME.id,
      shareCode: 'ROM02',
      publishedAt: 'Offizielles Meisterspiel',
      isPublic: true,
      authorId: 'official',
      authorName: 'Meisterspiel',
      isDraft: false,
      sharedWithKollegium: true,
      game: {
        ...ROME_CULTURE_MASTER_GAME,
        authorId: 'official',
        authorName: 'Meisterspiel',
        isDraft: false,
        sharedWithKollegium: true
      },
    };

    const officialDefaults: PublishedGameRecord[] = [defaultEgypt, defaultWW1, defaultStoneAge, defaultRome, defaultRomeCulture];

    try {
      const raw = localStorage.getItem(STORAGE_KEY_PUBLISHED_GAMES);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge: ensure all official defaults exist with the latest content
          const result = [...parsed];
          for (const off of officialDefaults) {
            const idx = result.findIndex((g) => g.shareCode === off.shareCode || g.id === off.id);
            if (idx === -1) {
              result.push(off);
            } else {
              result[idx] = { 
                ...result[idx], 
                game: off.game, 
                publishedAt: 'Offizielles Meisterspiel',
                authorId: 'official',
                authorName: 'Meisterspiel',
                isDraft: false,
                sharedWithKollegium: true
              };
            }
          }
          return result;
        }
      }
    } catch (e) {
      console.error("Error loading published games:", e);
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_PUBLISHED_GAMES, JSON.stringify(officialDefaults));
    }
    return officialDefaults;
  }

  /**
   * Save a game as a private draft in the teacher's account
   */
  public saveDraftGame(game: GameDefinition, author: PortalUser): PublishedGameRecord {
    const existing = this.getPublishedGames();
    const existingRec = existing.find((g) => g.id === game.id);

    const authorId = author.id;
    const authorName = author.name;

    game.authorId = authorId;
    game.authorName = authorName;
    game.isDraft = true;
    game.updatedAt = Date.now();
    if (!game.createdAt) game.createdAt = Date.now();

    const record: PublishedGameRecord = {
      id: game.id,
      shareCode: game.shareCode || existingRec?.shareCode || 'ENTWURF',
      game,
      publishedAt: new Date().toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      isPublic: false,
      authorId,
      authorName,
      isDraft: true,
      sharedWithKollegium: game.sharedWithKollegium ?? false
    };

    const updated = [record, ...existing.filter((g) => g.id !== game.id)];
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_PUBLISHED_GAMES, JSON.stringify(updated));
    }
    return record;
  }

  /**
   * Publish / Freigeben a game so students can join via share code.
   * If a shareCode is already present in the game/imported JSON or passed explicitly, it is preserved!
   */
  public publishGame(
    game: GameDefinition, 
    preferredShareCode?: string, 
    author?: PortalUser,
    shareWithKollegium: boolean = true
  ): PublishedGameRecord {
    const existing = this.getPublishedGames();
    
    // Check if an existing published record already had a code for this game id
    const existingRec = existing.find((g) => g.id === game.id);

    let shareCode = preferredShareCode || game.shareCode || (existingRec?.shareCode !== 'ENTWURF' ? existingRec?.shareCode : undefined);

    // If still no share code or placeholder, generate a clean 4-6 char code, e.g. "ROM44" or "NIL20"
    if (!shareCode || !shareCode.trim() || shareCode === 'ENTWURF') {
      const prefix = (game.era.slice(0, 3) || 'HIS').toUpperCase().replace(/[^A-Z]/g, 'G');
      const randomSuffix = Math.floor(10 + Math.random() * 90);
      shareCode = `${prefix}${randomSuffix}`;
    } else {
      shareCode = shareCode.trim().toUpperCase();
    }

    // Keep author information
    const authorId = author?.id || game.authorId || existingRec?.authorId || 't-lehrer';
    const authorName = author?.name || game.authorName || existingRec?.authorName || 'Lehrkraft';

    game.shareCode = shareCode;
    game.authorId = authorId;
    game.authorName = authorName;
    game.isDraft = false;
    game.sharedWithKollegium = shareWithKollegium;
    game.updatedAt = Date.now();
    if (!game.createdAt) game.createdAt = Date.now();

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
      authorId,
      authorName,
      isDraft: false,
      sharedWithKollegium: shareWithKollegium
    };

    // Filter out previous version if overwriting
    const updated = [record, ...existing.filter((g) => g.id !== game.id)];
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_PUBLISHED_GAMES, JSON.stringify(updated));
    }
    return record;
  }

  /**
   * Filter games into categorized pools for the Teacher Studio:
   * - myGames: Drafts and published games owned by the logged-in teacher
   * - kollegiumGames: Published games by colleagues (clonable)
   * - masterGames: Official school curriculum master games
   */
  public getGamesForTeacher(teacher: PortalUser | null): {
    myGames: PublishedGameRecord[];
    kollegiumGames: PublishedGameRecord[];
    masterGames: PublishedGameRecord[];
  } {
    const all = this.getPublishedGames();
    const masterGames = all.filter((r) => r.authorId === 'official' || r.shareCode === 'EGY01' || r.shareCode === 'WW101' || r.shareCode === 'STN01' || r.shareCode === 'ROM01' || r.shareCode === 'ROM02');

    if (!teacher) {
      return {
        myGames: [],
        kollegiumGames: all.filter((r) => !masterGames.includes(r) && !r.isDraft),
        masterGames
      };
    }

    const isAdmin = teacher.role === 'admin';

    // If Admin, they see all games in myGames as editable
    const myGames = all.filter((r) => {
      if (masterGames.includes(r)) return false;
      if (isAdmin) return true;
      return r.authorId === teacher.id;
    });

    const kollegiumGames = all.filter((r) => {
      if (masterGames.includes(r)) return false;
      if (r.authorId === teacher.id) return false;
      return !r.isDraft || r.sharedWithKollegium;
    });

    return {
      myGames,
      kollegiumGames,
      masterGames
    };
  }

  /**
   * Duplicate / Fork a game (master game or colleague game) into teacher's personal account
   */
  public duplicateGame(gameId: string, targetTeacher: PortalUser): PublishedGameRecord | null {
    const all = this.getPublishedGames();
    const sourceRec = all.find((r) => r.id === gameId || r.game.id === gameId);
    if (!sourceRec) return null;

    const newId = `game_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const clonedGame: GameDefinition = JSON.parse(JSON.stringify(sourceRec.game));
    
    clonedGame.id = newId;
    clonedGame.title = `${clonedGame.title} (Kopie ${targetTeacher.name})`;
    clonedGame.authorId = targetTeacher.id;
    clonedGame.authorName = targetTeacher.name;
    clonedGame.isDraft = true;
    delete clonedGame.shareCode;

    return this.saveDraftGame(clonedGame, targetTeacher);
  }

  /**
   * Permission check: can the current teacher edit this game?
   */
  public canEditGame(game: GameDefinition, teacher: PortalUser | null): boolean {
    if (!teacher) return false;
    if (teacher.role === 'admin') return true;
    if (game.authorId === 'official') return false; // Masters are protected templates
    if (!game.authorId) return true; // Legacy unassigned game
    return game.authorId === teacher.id;
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
          authorId: updatedGame.authorId || rec.authorId,
          authorName: updatedGame.authorName || rec.authorName,
          isDraft: updatedGame.isDraft ?? rec.isDraft,
          sharedWithKollegium: updatedGame.sharedWithKollegium ?? rec.sharedWithKollegium
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
    // Only published games (not private drafts) can be joined by code
    const match = games.find((g) => g.shareCode.toUpperCase() === cleanCode && !g.isDraft);
    return match ? match.game : null;
  }

  /**
   * Export a single game definition as downloadable .json file
   */
  public exportGameToJson(game: GameDefinition, shareCode?: string): void {
    const finalCode = shareCode || game.shareCode || 'CUSTOM';
    game.shareCode = finalCode;

    const exportData = {
      format: 'history-trail-game-v1',
      exportedAt: new Date().toISOString(),
      shareCode: finalCode,
      game: game,
    };

    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Clean safe filename
    const cleanTitle = (game.title || 'spiel')
      .toLowerCase()
      .replace(/[^a-z0-9äöüß]+/gi, '_')
      .replace(/^_+|_+$/g, '');
    const a = document.createElement('a');
    a.href = url;
    a.download = `${cleanTitle}_${finalCode}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Parse and validate an imported game JSON object
   */
  public parseGameFromJson(jsonString: string): { game: GameDefinition; shareCode?: string } {
    const data = JSON.parse(jsonString);
    const game = data.game || data;

    if (!game.title || !game.rounds || !Array.isArray(game.rounds)) {
      throw new Error('Ungültiges Spielformat: Titel oder Spielrunden fehlen in der JSON-Datei.');
    }

    // Extract original share code from root level (exported files) or inner game level (drive game.json)
    const code = data.shareCode || game.shareCode;
    if (code) {
      game.shareCode = code;
    }

    return {
      game: game,
      shareCode: code,
    };
  }
}

export const gameStorageService = new GameStorageService();
