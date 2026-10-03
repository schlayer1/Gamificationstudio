import { GameDefinition } from '../types/game';

export interface PredefinedTemplate {
  id: string;
  title: string;
  era: string;
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
}

export const PREDEFINED_TEMPLATES: PredefinedTemplate[] = [
  // 1. Ägypten (Bereits fertig)
  {
    id: "aegypten_trail",
    title: "Aufstieg zum Pharao – Helfer des Pharaos",
    era: "Altes Ägypten (ca. 2600 v. Chr.)",
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

  // 2. Alexander der Große (Aus Prompt 1)
  {
    id: "alexander_der_grosse",
    title: "Alexander der Große und seine Eroberungszüge",
    era: "Antikes Griechenland & Persien (334 v. Chr.)",
    tagline: "Vom Hellespont und Granikos bis nach Indien",
    defaultTopics: [
      "Schlacht am Granikos & Issos",
      "Belagerung von Tyros",
      "Gründung von Alexandria & Orakel von Siwa",
      "Schlacht von Gaugamela & Fall von Persepolis",
      "Makedonische Phalanx & Heeresmeuterei am Hyphasis"
    ],
    suggestedPillars: [
      { key: "truppenstaerke", label: "Truppenstärke ⚔️", icon: "⚔️", description: "Makedonische Phalanx und Reiterei" },
      { key: "vorraete", label: "Vorräte 🍖", icon: "🍖", description: "Nahrung, Wasser und Tross auf langen Märschen" },
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

  // 3. Luther & Bauernkriege (Aus Prompt 2)
  {
    id: "luther_reformation",
    title: "Luthers Reformationsreise & die Bauernkriege",
    era: "Heiliges Römisches Reich Deutscher Nation (1517–1525)",
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

  // 4. Steinzeit – Auf dem Weg zur Sesshaftwerdung (Aus Prompt 3)
  {
    id: "steinzeit_neolithikum",
    title: "Die Reise in die Steinzeit – Auf dem Weg zur Sesshaftwerdung",
    era: "Neolithische Revolution (vor ca. 10.000 Jahren)",
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

  // 5. Antikes Rom – Schnitzeljagd & Bürgerkrieg (Aus Prompt 4 & 5)
  {
    id: "antikes_rom_kaiser",
    title: "Aufstieg zum Caesar – Der Weg zur Herrschaft über Rom",
    era: "Römische Republik & Kaiserzeit (44 v. Chr. – 14 n. Chr.)",
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
  }
];
