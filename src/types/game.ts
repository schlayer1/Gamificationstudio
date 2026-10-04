export type GradeLevel = 'unterstufe' | 'mittelstufe' | 'oberstufe';

export type GameMechanicArchetype = 
  | 'reigns_balance'      // 4-Mächte Balance (Ägypten / Luther / Rom)
  | 'conquest_campaign'   // Heer, Vorräte, Soldatenmoral, Konsequenzenbaum (Alexander)
  | 'survival_settlement' // Nahrung, Werkzeuge, Sippenzusammenhalt, Fähigkeiten (Steinzeit)
  | 'mythology_duel'      // Held-Wahl, Gunst, Quiz-Prüfungen, Inventar, Gesundheit & Moral (Mythologie)
  | 'city_scavenger_hunt';// Schnitzeljagd, Rätsel-Hinweise, Stadtführer (Romulus)

export type ArtStyleType =
  | 'pixel_art'      // 16-Bit Pixel Art Retro Videospiel (Oregon Trail)
  | 'photorealistic' // Fotorealistisch / Historisches Dokumentar-Film Still
  | 'comic_bd'       // Franko-Belgischer Comic / Graphic Novel (z.B. Asterix, Alix, Ligne Claire)
  | 'oil_painting'   // Klassisches Historien-Ölgemälde (19. Jhdt / Barock)
  | 'papyrus_ink';   // Antike Papyrus-Tuschezeichnung / Buchmalerei

export interface QuizQuestion {
  question: string;
  hint: string; // Tipp-Button (💡)
  options: { id: 'A' | 'B' | 'C' | 'D'; text: string; isCorrect: boolean }[];
  rewardText: string;
  explanation: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  icon: string; // e.g. 🗡️, 🔮, 📜
  description: string;
  obtainedInRound: number;
}

export interface PlayerProfile {
  name: string;
  gradeLevel: GradeLevel;
  gender: 'prinz' | 'prinzessin' | 'neutral';
  throneName: string;
  heroOrigin?: 'roemisch' | 'germanisch' | 'makedonisch' | 'siedler'; // For mythology & campaigns
}

export interface Stats {
  goetter: number;   // ⚡ Götter / Gunst / Truppenstärke (0-100%)
  priester: number;  // 🙏 Priester / Vorräte / Werkzeuge (0-100%)
  adel: number;      // 👑 Adel / Gesundheit / Fürsten (0-100%)
  volk: number;      // 😊 Volk / Moral / Zusammenhalt (0-100%)
  ep: number;        // 🧠 Erfahrungspunkte / Strategie / Wissen
}

export interface Skills {
  goettlicheAuserwaehltheit: number; // 🌟 Stärke / Kriegsführung / Jagd
  politischeGeschicklichkeit: number; // 🗣️ Weisheit / Diplomatie / Landwirtschaft
  militaerischeStaerke: number;       // ⚔️ Charisma / Verwaltung / Gemeinschaft
}

export interface DecisionChoice {
  id: 'A' | 'B' | 'C' | 'D';
  label: string;
  description: string;
  epCost?: number; // Only for Option D
  isLocked?: boolean;
  statChanges: Partial<Stats>;
  skillChanges?: Partial<Skills>;
  consequenceTree?: {
    immediate: string;
    longterm: string;
  };
  itemReward?: InventoryItem;
  consequenceText: {
    unterstufe: string;
    mittelstufe: string;
    oberstufe: string;
  };
}

export interface StationHotspot {
  id: string;
  x: number; // percentage from left (0-100)
  y: number; // percentage from top (0-100)
  label: string;
  description: string;
  icon?: string;
}

export interface RoundStory {
  id: string; // unique event id
  roundNumber: number; // 1 to 20/26
  locationKey: string;
  locationName: string;
  milestoneTitle: string;
  imagePath?: string;
  imagePrompt?: string; // Pre-configured image generation prompt for Gemini Imagen / Midjourney / DALL-E
  hotspots?: StationHotspot[];
  quiz?: QuizQuestion; // Optional Quiz Prüfstein (Mythologie/Schnitzeljagd)
  scavengerClue?: string; // Optionaler Rätsel-Hinweis (Rom-Schnitzeljagd)
  branchCondition?: {
    requiredStatHigher?: 'goetter' | 'priester' | 'adel' | 'volk';
    preferredSkill?: 'goettlicheAuserwaehltheit' | 'politischeGeschicklichkeit' | 'militaerischeStaerke';
    minStatThreshold?: { stat: 'goetter' | 'priester' | 'adel' | 'volk'; min: number };
  };
  situation: {
    unterstufe: string;
    mittelstufe: string;
    oberstufe: string;
  };
  choices: DecisionChoice[];
  lexiconEntry: {
    title: string;
    term: string;
    explanation: {
      unterstufe: string;
      mittelstufe: string;
      oberstufe: string;
    };
    curiosityFact: string;
  };
}

export interface PillarConfig {
  key: string; // e.g. "goetter", "truppenstaerke", "druckerpresse"
  label: string; // e.g. "Götter ⚡" or "Truppenstärke ⚔️"
  icon: string; // emoji or icon
  description: string;
}

export interface GameDefinition {
  id: string;
  title: string;
  subtitle: string;
  era: string; // e.g. "Altes Ägypten", "Alexander der Große", "Reformation 1517", "Steinzeit"
  archetype?: GameMechanicArchetype; // Dynamic mechanic mode
  artStyle?: ArtStyleType; // Visual style of the station illustrations
  eraThemeId?: import('../utils/themeManager').EraThemeId; // Color theme for UI surfaces
  gradeLevel?: GradeLevel; // Assigned grade level set by the teacher
  description: string;
  targetGrades: string;
  coreTopics: string[]; // Teacher curriculum topics: e.g. ["Kanalbau", "95 Thesen", "Sesshaftwerdung"]
  pillars: [PillarConfig, PillarConfig, PillarConfig, PillarConfig];
  specialResourceName: string; // e.g. "Erfahrungspunkte (EP)", "Strategie-Punkte", "Wissenspunkte"
  specialResourceEmoji: string;
  skillNames: {
    skill1: string; // e.g. "Göttliche Auserwähltheit" or "Kriegsführung"
    skill2: string; // e.g. "Politische Geschicklichkeit" or "Diplomatie"
    skill3: string; // e.g. "Militärische Stärke" or "Verwaltung"
  };
  heroImage?: string; // Custom cover/hero banner image
  heroPrompt?: string; // AI image generation prompt for the main game cover/hero
  rounds: RoundStory[]; // Array of 20 rounds or dynamic branch pairs
}

export interface GameLogEntry {
  round: number;
  location: string;
  choiceMade: string;
  consequence: string;
  statDeltas: Partial<Stats>;
  lexicon: {
    term: string;
    title: string;
    content: string;
  };
}

