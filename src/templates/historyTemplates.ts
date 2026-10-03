import { GameDefinition } from '../types/game';

export interface PredefinedTemplate {
  id: string;
  title: string;
  era: string;
  archetype: import('../types/game').GameMechanicArchetype;
  tagline: string;
  defaultTopics: string[];
  suggestedPillars: [
    { key: string; label: string; icon: string; description: string },
    { key: string; label: string; icon: string; description: string },
    { key: string; label: string; icon: string; description: string },
    { key: string; label: string; icon: string; description: string }
  ];
  specialResource: { name: string; emoji: string };
  skills: { skill1: string; skill2: string; skill3: string };
  historicalContext: string;
  eraThemeId: import('../utils/themeManager').EraThemeId;
}

export const PREDEFINED_TEMPLATES: PredefinedTemplate[] = [
  // 1. Ägypten
  {
    id: "aegypten_trail",
    title: "Aufstieg zum Pharao – Helfer des Pharaos",
    era: "Altes Ägypten (ca. 2600 v. Chr.)",
    eraThemeId: "egypt_gold",
    archetype: "reigns_balance",
    tagline: "Expedition auf dem Nil von Elephantine nach Gizeh",
    defaultTopics: [
      "Nilflut & Nilometer",
      "Pyramidenbau & Transportlogistik",
      "Imhotep & Medizin",
      "Priestermacht vs. Krone",
      "Ma'at (Gerechtigkeit) & Totengericht"
    ],
    suggestedPillars: [
      { key: "goetter", label: "Götter ⚡", icon: "⚡", description: "Kosmische Harmonie (Ma'at) und Segen" },
      { key: "priester", label: "Priester 🙏", icon: "🙏", description: "Einfluss der Tempel von Karnak und Memphis" },
      { key: "adel", label: "Adel 👑", icon: "👑", description: "Nomarchen, Generäle und Fürsten" },
      { key: "volk", label: "Volk 😊", icon: "😊", description: "Bauern, Fischer und Pyramidenhandwerker" }
    ],
    specialResource: { name: "Erfahrungspunkte (EP)", emoji: "🧠" },
    skills: {
      skill1: "Göttliche Auserwähltheit 🌟",
      skill2: "Politische Geschicklichkeit 🗣️",
      skill3: "Militärische Stärke ⚔️"
    },
    historicalContext: "Reise eines Thronfolgers auf dem Nil, der Ressourcen beschaffen und 4 Stände balancieren muss."
  },

  // 2. Alexander der Große (Conquest Campaign)
  {
    id: "alexander_der_grosse",
    title: "Alexander der Große und seine Eroberungszüge",
    era: "Antikes Griechenland & Persien (334 v. Chr.)",
    eraThemeId: "greece_aegean",
    archetype: "conquest_campaign",
    tagline: "Vom Hellespont und Granikos bis nach Indien (26 Stationen)",
    defaultTopics: [
      "Schlacht am Granikos & Issos",
      "Belagerung von Tyros",
      "Gründung von Alexandria & Orakel von Siwa",
      "Schlacht von Gaugamela & Fall von Persepolis",
      "Makedonische Phalanx & Heeresmeuterei am Hyphasis"
    ],
    suggestedPillars: [
      { key: "truppenstaerke", label: "Truppenstärke ⚔️", icon: "⚔️", description: "Makedonische Phalanx und Hetairoi-Reiterei" },
      { key: "vorraete", label: "Vorräte 🍖", icon: "🍖", description: "Nahrung, Wasser und Tross auf langen Wüstenmärschen" },
      { key: "soldatenmoral", label: "Soldatenzufriedenheit 😊", icon: "😊", description: "Kriegsmüdigkeit und Loyalität des Heeres" },
      { key: "reichskontrolle", label: "Reichskontrolle 🏛️", icon: "🏛️", description: "Akzeptanz der unterworfenen Völker und Satrapen" }
    ],
    specialResource: { name: "Strategie-Punkte", emoji: "🧠" },
    skills: {
      skill1: "Kriegsführung ⚔️",
      skill2: "Diplomatie 🤝",
      skill3: "Verwaltung 📜"
    },
    historicalContext: "Als junger Berater begleitest du Alexander auf seinem 10-jährigen Feldzug gegen das Perserreich."
  },

  // 3. Luther & Bauernkriege (Reformation Balance)
  {
    id: "luther_reformation",
    title: "Luthers Reformationsreise & die Bauernkriege",
    era: "Heiliges Römisches Reich (1517–1525)",
    eraThemeId: "luther_ink",
    archetype: "reigns_balance",
    tagline: "Vom Thesenanschlag in Wittenberg bis zu den Bauernaufständen",
    defaultTopics: [
      "95 Thesen & Kritik am Ablasshandel",
      "Leipziger Disputation mit Johannes Eck",
      "Reichstag zu Worms 1521 (Hier stehe ich)",
      "Bibelübersetzung auf der Wartburg & Druckerpresse",
      "Thomas Müntzer & die 12 Artikel der Bauern"
    ],
    suggestedPillars: [
      { key: "fuersten", label: "Fürstengunst 👑", icon: "👑", description: "Schutz durch Friedrich den Weisen und Reichsfürsten" },
      { key: "druckerpresse", label: "Druckerpresse 🖨️", icon: "🖨️", description: "Verbreitung von Flugschriften und deutscher Bibel" },
      { key: "buerger", label: "Stadtbevölkerung 😊", icon: "😊", description: "Gelehrte, Studenten und Ratsherren" },
      { key: "bauern", label: "Bauernschaft 🌾", icon: "🌾", description: "Forderungen nach Frondienstsenkung und Freiheit" }
    ],
    specialResource: { name: "Theologische Schärfe", emoji: "📜" },
    skills: {
      skill1: "Bibelfestigkeit 📖",
      skill2: "Rhetorik & Disputation 🗣️",
      skill3: "Soziale Weitsicht ⚖️"
    },
    historicalContext: "Als junger Gelehrter in Wittenberg begleitest du Martin Luther durch religiöse Debatten und soziale Umbrüche."
  },

  // 4. Steinzeit (Survival & Settlement)
  {
    id: "steinzeit_neolithikum",
    title: "Die Reise in die Steinzeit – Auf dem Weg zur Sesshaftwerdung",
    era: "Neolithische Revolution (vor ca. 10.000 Jahren)",
    eraThemeId: "stoneage_earth",
    archetype: "survival_settlement",
    tagline: "Vom Jäger und Sammler zur ersten dauerhaften Dorfsiedlung",
    defaultTopics: [
      "Nomadische Großwildjagd vs. feste Wasserquellen",
      "Domestikation von Schaf, Ziege und Getreide (Emmer)",
      "Erfindung von Keramik, Webstuhl und polierten Steinbeilen",
      "Bau erster Langhäuser & Vorratshaltung",
      "Krankheiten, Hygiene und Arbeitsteilung in Siedlungen"
    ],
    suggestedPillars: [
      { key: "nahrung", label: "Nahrung & Vorrat 🍖", icon: "🍖", description: "Gejagtes Wild, gesammelte Nüsse und erstes Getreide" },
      { key: "werkzeuge", label: "Werkzeuge 🛠️", icon: "🛠️", description: "Feuerstein, Knochennadeln und Steinhacken" },
      { key: "zusammenhalt", label: "Gruppenzusammenhalt 😊", icon: "😊", description: "Harmonie, Fürsorge für Schwache und Tradition" },
      { key: "siedlungsbau", label: "Siedlungsbau 🏠", icon: "🏠", description: "Zäune gegen Raubtiere, Lehmhütten und Speichergruben" }
    ],
    specialResource: { name: "Wissenspunkte", emoji: "🧠" },
    skills: {
      skill1: "Jagdgeschick 🏹",
      skill2: "Landwirtschaft 🌱",
      skill3: "Gemeinschaftsorganisation 🏠"
    },
    historicalContext: "Du begleitest einen Sippenverband beim existenziellen Wandel vom nomadischen Jagen zum Ackerbau."
  },

  // 5. Antikes Rom (Schnitzeljagd & Metropole)
  {
    id: "antikes_rom_kaiser",
    title: "Aufstieg zum Caesar – Der Weg zur Herrschaft über Rom",
    era: "Römische Republik & Kaiserzeit (44 v. Chr. – 14 n. Chr.)",
    eraThemeId: "rome_imperial",
    archetype: "city_scavenger_hunt",
    tagline: "Vom Senat und Forum Romanum zum Prinzipat des Augustus",
    defaultTopics: [
      "Forum Romanum & Senatsintrigen (Curia Julia)",
      "Brot und Spiele im Circus Maximus & Colosseum",
      "Wasserversorgung über Aquädukte & Thermenkultur",
      "Legionen an den Reichsgrenzen (Limes)",
      "Pax Romana & Ara Pacis"
    ],
    suggestedPillars: [
      { key: "goetter", label: "Götter & Orakel ⚡", icon: "⚡", description: "Jupiter Optimus Maximus und Vestalinnen" },
      { key: "senat", label: "Senat 🏛️", icon: "🏛️", description: "Patrizier und alte Republikaner" },
      { key: "legionen", label: "Legionen ⚔️", icon: "⚔️", description: "Loyalität der Veteranen und Prätorianer" },
      { key: "plebejer", label: "Plebejer 🌾", icon: "🌾", description: "Das Volk von Rom (Getreidespenden und Circus)" }
    ],
    specialResource: { name: "Imperium-Punkte", emoji: "🦅" },
    skills: {
      skill1: "Feldherrenkunst ⚔️",
      skill2: "Römische Rhetorik 🗣️",
      skill3: "Staatsverwaltung 📜"
    },
    historicalContext: "Führe deinen Charakter durch die Wirren der späten Republik vom Konsul zur Herrschaft über das Imperium Romanum."
  },

  // 6. Römische & Germanische Mythologie (Mythology Duel & Quiz-Prüfungen)
  {
    id: "mythologie_rom_germanen",
    title: "Götterdämmerung am Limes: Römer vs. Germanen",
    era: "Mythologie der Antike (1. Jh. n. Chr.)",
    eraThemeId: "mythology_rune",
    archetype: "mythology_duel",
    tagline: "Wähle deinen Helden (🏛️ Rom oder 🌳 Germanien) – Quiz-Prüfungen, Göttergunst & Artefakte",
    defaultTopics: [
      "Jupiter & Mars vs. Odin (Wodan) & Thor (Donar)",
      "Römische Staatsreligion vs. Heilige Haine und Irminsul",
      "Unterwelt: Pluto & Tartaros vs. Hel & Walhall",
      "Schicksalsmächte: Parzen vs. Nornen",
      "Mythologische Wesen: Zentauren & Sirenen vs. Lindwürmer & Walküren"
    ],
    suggestedPillars: [
      { key: "goettergunst", label: "Göttliche Gunst ✨", icon: "✨", description: "Beistand von Jupiter/Odin für Heilung & Wunder" },
      { key: "gesundheit", label: "Lebenskraft (HP) ❤️", icon: "❤️", description: "Körperliche Gesundheit gegen Ungeheuer und Prüfungen" },
      { key: "moral", label: "Moral & Mut 😊", icon: "😊", description: "Seelische Standhaftigkeit gegen Flüche und Zweifel" },
      { key: "wissen", label: "Mythologie-Wissen 📜", icon: "📜", description: "Verständnis der alten Mythen, Riten und Götterbündnisse" }
    ],
    specialResource: { name: "Götter-Amulett (Gunst)", emoji: "🔮" },
    skills: {
      skill1: "Körperliche Stärke 💪",
      skill2: "Göttliche Weisheit 🧠",
      skill3: "Helden-Charisma 🗣️"
    },
    historicalContext: "Wähle zu Beginn, ob du als römischer Held (🏛️) mit Disziplin und Tempelriten oder als germanischer Recke (🌳) aus dem heiligen Hain antrittst!"
  }
];

