export type GradeLevel = 'unterstufe' | 'mittelstufe' | 'oberstufe';

export interface PlayerProfile {
  name: string;
  gradeLevel: GradeLevel;
  gender: 'prinz' | 'prinzessin' | 'neutral';
  throneName: string;
}

export interface Stats {
  goetter: number;   // ⚡ Götter (0-100%)
  priester: number;  // 🙏 Priester (0-100%)
  adel: number;      // 👑 Adel (0-100%)
  volk: number;      // 😊 Volk (0-100%)
  ep: number;        // 🧠 Erfahrungspunkte (EP)
}

export interface Skills {
  goettlicheAuserwaehltheit: number; // 🌟
  politischeGeschicklichkeit: number; // 🗣️
  militaerischeStaerke: number;       // ⚔️
}

export interface DecisionChoice {
  id: 'A' | 'B' | 'C' | 'D';
  label: string;
  description: string;
  epCost?: number; // Only for Option D
  isLocked?: boolean;
  statChanges: Partial<Stats>;
  skillChanges?: Partial<Skills>;
  consequenceText: {
    unterstufe: string;
    mittelstufe: string;
    oberstufe: string;
  };
}

export interface RoundStory {
  id: string; // unique event id, e.g. "assuan_start", "thebes_priest_path", "thebes_revolt_path"
  roundNumber: number; // 1 to 20
  locationKey: string; // e.g. 'aswan', 'kom_ombo', 'edfu', 'thebes', 'abydos', 'amarna', 'fayum', 'saqqara', 'giza'
  locationName: string;
  milestoneTitle: string;
  imagePath?: string; // e.g. '/assets/thebes_karnak.jpg'
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

