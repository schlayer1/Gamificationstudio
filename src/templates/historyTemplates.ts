import { GameDefinition } from '../types/game';

export interface PredefinedTemplate {
  id: string;
  title: string;
  era: string;
  archetype: import('../types/game').GameMechanicArchetype;
  tagline: string;
  defaultGradeLevel: import('../types/game').GradeLevel; // Lehrplan-Zuordnung: 'unterstufe' (5/6), 'mittelstufe' (7/8), 'oberstufe' (9/10)
  defaultTargetGrades: string; // e.g. "Unterstufe (5.–6. Klasse)", "Mittelstufe (7.–8. Klasse)", "Oberstufe (9.–10. Klasse)"
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
  // =========================================================================
  // KLASSENSTUFE 5 / 6 (Unterstufe)
  // =========================================================================

  // 1. Ägypten
  {
    id: "aegypten_trail",
    title: "Aufstieg zum Pharao – Helfer des Pharaos",
    era: "Altes Ägypten (ca. 2600 v. Chr.)",
    eraThemeId: "egypt_gold",
    archetype: "reigns_balance",
    defaultGradeLevel: "unterstufe",
    defaultTargetGrades: "Unterstufe (5.–6. Klasse)",
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
    historicalContext: "Reise eines Thronfolgers auf dem Nil, der Ressourcen beschaffen und 4 Stände balancieren muss (Thüringer Lehrplan Kl. 5/6, LB III: Frühe Hochkulturen)."
  },

  // 2. Steinzeit
  {
    id: "steinzeit_neolithikum",
    title: "Die Reise in die Steinzeit – Auf dem Weg zur Sesshaftwerdung",
    era: "Urgeschichte & Neolithische Revolution (vor ca. 10.000 Jahren)",
    eraThemeId: "stoneage_earth",
    archetype: "survival_settlement",
    defaultGradeLevel: "unterstufe",
    defaultTargetGrades: "Unterstufe (5.–6. Klasse)",
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
    historicalContext: "Du begleitest einen Sippenverband beim existenziellen Wandel vom nomadischen Jagen zum Ackerbau (Thüringer Lehrplan Kl. 5/6, LB II: Menschen in vorgeschichtlicher Zeit)."
  },

  // 3. Antikes Griechenland: Polis & Demokratie
  {
    id: "griechenland_demokratie",
    title: "Die Welt der Griechen: Polis, Demokratie & Götterberg Olymp",
    era: "Klassisches Griechenland (ca. 500–400 v. Chr.)",
    eraThemeId: "greece_aegean",
    archetype: "reigns_balance",
    defaultGradeLevel: "unterstufe",
    defaultTargetGrades: "Unterstufe (5.–6. Klasse)",
    tagline: "Von der Volksversammlung auf der Pnyx zum Orakel von Delphi",
    defaultTopics: [
      "Geografie Griechenlands & Entstehung der Stadtstaaten (Poleis)",
      "Attische Demokratie: Volksversammlung, Scherbengericht & Bürgerrechte",
      "Götterwelt auf dem Olymp: Zeus, Athene, Poseidon & Orakel von Delphi",
      "Olympische Spiele: Waffenruhe & Wettkämpfe",
      "Sparta vs. Athen: Unterschiedliche Lebensweisen & Erziehung"
    ],
    suggestedPillars: [
      { key: "goetter", label: "Olymp-Götter ⚡", icon: "⚡", description: "Gunst von Zeus und Athene durch Opfergaben" },
      { key: "buerger", label: "Freie Bürger 🏛️", icon: "🏛️", description: "Zustimmung der Volksversammlung und Bürgerrechte" },
      { key: "strategen", label: "Strategen & Adel 👑", icon: "👑", description: "Flottenführer, Ratsherren und Magistrate" },
      { key: "metoeken", label: "Handwerker & Volk 😊", icon: "😊", description: "Hafenarbeiter am Piräus, Töpfer und Fischer" }
    ],
    specialResource: { name: "Drachmen & Stimmsteine", emoji: "🗳️" },
    skills: {
      skill1: "Rhetorik & Debatte 🗣️",
      skill2: "Philosophische Einsicht 📜",
      skill3: "Seefahrerkunst ⛵"
    },
    historicalContext: "Als Bürger Athens gestaltest du die junge Demokratie, berätst die Volksversammlung und wahrst die Harmonie mit den Göttern (Thüringer Lehrplan Kl. 5/6, LB IV: Die Welt der alten Griechen)."
  },

  // 4. Antikes Rom: Aufstieg zum Caesar
  {
    id: "antikes_rom_kaiser",
    title: "Aufstieg zum Caesar – Der Weg zur Herrschaft über Rom",
    era: "Römische Republik & Kaiserzeit (44 v. Chr. – 14 n. Chr.)",
    eraThemeId: "rome_imperial",
    archetype: "city_scavenger_hunt",
    defaultGradeLevel: "unterstufe",
    defaultTargetGrades: "Unterstufe (5.–6. Klasse)",
    tagline: "Vom Senat und Forum Romanum zum Prinzipat des Augustus",
    defaultTopics: [
      "Forum Romanum & Senatsintrigen (Curia Julia)",
      "Brot und Spiele im Circus Maximus & Kolosseum",
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
    historicalContext: "Führe deinen Charakter durch die Wirren der späten Republik vom Konsul zur Herrschaft über das Imperium Romanum (Thüringer Lehrplan Kl. 5/6, LB V: Aufstieg und Fall des Römischen Reiches)."
  },

  // 5. Mythologie & Germanen am Limes
  {
    id: "mythologie_rom_germanen",
    title: "Götterdämmerung am Limes: Römer vs. Germanen",
    era: "Mythologie & Grenzkontakt der Antike (1. Jh. n. Chr.)",
    eraThemeId: "mythology_rune",
    archetype: "mythology_duel",
    defaultGradeLevel: "unterstufe",
    defaultTargetGrades: "Unterstufe (5.–6. Klasse)",
    tagline: "Wähle deinen Helden (🏛️ Rom oder 🌳 Germanien) – Quiz-Prüfungen & Limes",
    defaultTopics: [
      "Jupiter & Mars vs. Odin (Wodan) & Thor (Donar)",
      "Römische Staatsreligion vs. Heilige Haine und Irminsul",
      "Der Limes als Grenze und Handelszone zwischen Imperium und Stämmen",
      "Varusschlacht & der Cheruskerfürst Arminius",
      "Mythologische Wesen: Zentauren vs. Lindwürmer & Walküren"
    ],
    suggestedPillars: [
      { key: "goettergunst", label: "Göttliche Gunst ✨", icon: "✨", description: "Beistand von Jupiter/Odin für Heilung & Wunder" },
      { key: "gesundheit", label: "Lebenskraft (HP) ❤️", icon: "❤️", description: "Körperliche Gesundheit gegen Gefahren und Prüfungen" },
      { key: "moral", label: "Moral & Mut 😊", icon: "😊", description: "Seelische Standhaftigkeit gegen Zweifel" },
      { key: "wissen", label: "Mythologie-Wissen 📜", icon: "📜", description: "Verständnis der alten Mythen, Riten und Götterbündnisse" }
    ],
    specialResource: { name: "Götter-Amulett", emoji: "🔮" },
    skills: {
      skill1: "Körperliche Stärke 💪",
      skill2: "Göttliche Weisheit 🧠",
      skill3: "Helden-Charisma 🗣️"
    },
    historicalContext: "Kulturkontakt und Mythen an der Grenze des Römischen Reiches – entscheide zwischen römischer Zivilisation und germanischem Naturkult (Thüringer Lehrplan Kl. 5/6, LB V: Römer und Germanen)."
  },

  // 6. Frankenreich & Karl der Große
  {
    id: "frankenreich_karl",
    title: "Karl der Große & das Frankenreich: Pfalzen, Glaube & Kaiserkrone",
    era: "Frühmittelalter (768–814 n. Chr.)",
    eraThemeId: "franks_charlemagne",
    archetype: "reigns_balance",
    defaultGradeLevel: "unterstufe",
    defaultTargetGrades: "Unterstufe (5.–6. Klasse)",
    tagline: "Reisekönigtum von Pfalz zu Pfalz bis zur Kaiserkrönung in Rom 800",
    defaultTopics: [
      "Chlodwig & Taufe der Franken zum Christentum",
      "Karl der Große: Reisekönigtum, Pfalzen & Königsboten (Missi Dominici)",
      "Bonifatius & Christianisierung Thüringens (Mönchsorden)",
      "Karolingische Bildungsreform: Schrift (Minuskel), Domschulen & Gelehrte",
      "Kaiserkrönung zu Rom am Weihnachtstag 800 durch Papst Leo III."
    ],
    suggestedPillars: [
      { key: "kirche", label: "Kirche & Papst 🙏", icon: "🙏", description: "Bischöfe, Klöster und der Segen des Papstes in Rom" },
      { key: "adel", label: "Grafen & Herzöge 👑", icon: "👑", description: "Gefolgschaft der fränkischen Stammesadeligen" },
      { key: "krieger", label: "Panzerreiter & Heer ⚔️", icon: "⚔️", description: "Militärische Schlagkraft gegen Sachsen und Awaren" },
      { key: "volk", label: "Hörige & Bauern 🌾", icon: "🌾", description: "Ernte der Königsgüter, Abgaben und Frondienste" }
    ],
    specialResource: { name: "Kaiserliche Kapitularien", emoji: "📜" },
    skills: {
      skill1: "Reichsgesetzgebung 📜",
      skill2: "Feldherrnmut ⚔️",
      skill3: "Bildungsförderung 📖"
    },
    historicalContext: "Reite mit Karl dem Großen von Aachen durch Thüringen, einige das christliche Europa und empfange die Kaiserwürde (Thüringer Lehrplan Kl. 5/6, LB VI & Lehrplan 1999: Das Frankenreich)."
  },

  // =========================================================================
  // KLASSENSTUFE 7 / 8 (Mittelstufe)
  // =========================================================================

  // 7. Mittelalter & Feudalismus
  {
    id: "mittelalter_staende",
    title: "Burg, Kloster, Stadtluft: Alltag & Ständegesellschaft im Mittelalter",
    era: "Hoch- und Spätmittelalter (ca. 1000–1400 n. Chr.)",
    eraThemeId: "luther_ink",
    archetype: "reigns_balance",
    defaultGradeLevel: "mittelstufe",
    defaultTargetGrades: "Mittelstufe (7.–8. Klasse)",
    tagline: "Vom Lehnseid des Ritters zur freien Reichsstadt ('Stadtluft macht frei')",
    defaultTopics: [
      "Die Dreiständegesellschaft: Klerus, Adel und Bauernstand",
      "Lehnswesen & Grundherrschaft: Frondienst, Zehnt und Dreifelderwirtschaft",
      "Klosterleben: 'Ora et labora', Skriptorium und Heilkräutergärten",
      "Rittertum: Burg, Erziehung zum Ritter, Turnier und Minne",
      "Entstehung der Städte: Hanse, Zünfte, Marktrecht & jüdische Gemeinden"
    ],
    suggestedPillars: [
      { key: "klerus", label: "Klerus 🙏", icon: "🙏", description: "Mönche, Äbte und kirchlicher Zehnt" },
      { key: "adel", label: "Ritter & Burgherren 👑", icon: "👑", description: "Feudalherren und landadlige Lehnsnehmer" },
      { key: "buerger", label: "Stadtbürger & Zünfte ⚖️", icon: "⚖️", description: "Kaufleute, Handwerker und Stadtrat" },
      { key: "bauern", label: "Bauernstand 🌾", icon: "🌾", description: "Frondienstleistende Dorfgemeinschaft und Hörige" }
    ],
    specialResource: { name: "Zunft-Groschen", emoji: "🪙" },
    skills: {
      skill1: "Feudales Lehnsrecht 📜",
      skill2: "Handelsgeschick ⚖️",
      skill3: "Ritterliche Tugend 🛡️"
    },
    historicalContext: "Meistere das Geflecht aus Lehnsherrschaft, klösterlicher Frömmigkeit und emanzipierten Städten im mittelalterlichen Thüringen und Europa (Thüringer Lehrplan Kl. 7/8, LB I: Europa im Mittelalter)."
  },

  // 8. Alexander der Große (Conquest Campaign)
  {
    id: "alexander_der_grosse",
    title: "Alexander der Große und seine Eroberungszüge",
    era: "Antikes Griechenland & Persien (334 v. Chr.)",
    eraThemeId: "greece_aegean",
    archetype: "conquest_campaign",
    defaultGradeLevel: "mittelstufe",
    defaultTargetGrades: "Mittelstufe (7.–8. Klasse)",
    tagline: "Vom Hellespont und Granikos bis nach Indien",
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
    historicalContext: "Als junger Berater begleitest du Alexander auf seinem 10-jährigen Feldzug gegen das Perserreich (Thüringer Lehrplan: Transnationale Kulturbegegnungen & Alterität)."
  },

  // 9. Luther & Reformation
  {
    id: "luther_reformation",
    title: "Luthers Reformationsreise & die Bauernkriege",
    era: "Heiliges Römisches Reich (1517–1525)",
    eraThemeId: "luther_ink",
    archetype: "reigns_balance",
    defaultGradeLevel: "mittelstufe",
    defaultTargetGrades: "Mittelstufe (7.–8. Klasse)",
    tagline: "Vom Thesenanschlag in Wittenberg bis zu den Bauernaufständen",
    defaultTopics: [
      "95 Thesen & Kritik am Ablasshandel",
      "Gutenbergs Buchdruck & Flugschriften als neue Medien",
      "Reichstag zu Worms 1521 ('Hier stehe ich')",
      "Bibelübersetzung auf der Wartburg (Junker Jörg)",
      "Thomas Müntzer & die 12 Artikel der Bauern in Frankenhausen"
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
    historicalContext: "Als junger Gelehrter in Wittenberg und Erfurt begleitest du Martin Luther durch religiöse Debatten und soziale Umbrüche (Thüringer Lehrplan Kl. 7/8, LB I: Herausbildung moderner Staaten & Reformation)."
  },

  // 10. Französische Revolution & Napoleon
  {
    id: "franzoesische_revolution",
    title: "Freiheit, Gleichheit, Brüderlichkeit: Die Französische Revolution & Napoleon",
    era: "Zeitalter der Aufklärung & Revolution (1789–1815)",
    eraThemeId: "revolution_tricolore",
    archetype: "reigns_balance",
    defaultGradeLevel: "mittelstufe",
    defaultTargetGrades: "Mittelstufe (7.–8. Klasse)",
    tagline: "Vom Sturm auf die Bastille bis zum Ende Napoleons",
    defaultTopics: [
      "Die Krise des Absolutismus unter Ludwig XVI. & der Dritte Stand",
      "Sturm auf die Bastille (14. Juli 1789) & Erklärung der Menschenrechte",
      "Radikalisierung: Jakobinerdiktatur, Robespierre & die Guillotine",
      "Aufstieg Napoleons, Code Civil & Untergang des Heiligen Römischen Reiches",
      "Preußische Reformen, Völkerschlacht bei Leipzig & Wiener Kongress 1815"
    ],
    suggestedPillars: [
      { key: "aufklaerung", label: "Ideale der Freiheit 🕊️", icon: "🕊️", description: "Menschenrechte, Verfassung und Pressefreiheit" },
      { key: "nationalkonvent", label: "Nationalkonvent & Jakobiner ⚖️", icon: "⚖️", description: "Revolutionstribunal und revolutionäre Ordnung" },
      { key: "armee", label: "Revolutionsarmee ⚔️", icon: "⚔️", description: "Freiwilligenheere, Levée en masse und Napoleon" },
      { key: "sansculotten", label: "Sansculotten & Volk 🍞", icon: "🍞", description: "Pariser Kleinbürger, Brotpreise und Gleichheitsstreben" }
    ],
    specialResource: { name: "Revolutions-Kokarden", emoji: "🇫🇷" },
    skills: {
      skill1: "Debattenführung 🗣️",
      skill2: "Verfassungsanalyse 📜",
      skill3: "Militärtaktik ⚔️"
    },
    historicalContext: "Erlebe den epochalen Umsturz in Paris: Schütze die Errungenschaften der Aufklärung, ohne der Schreckensherrschaft zu verfallen (Thüringer Lehrplan Kl. 7/8, LB II: Französische Revolution und Napoleon I.)."
  },

  // 11. Industrielle Revolution & Soziale Frage
  {
    id: "industrielle_revolution",
    title: "Rauchende Schlote & Arbeiterelend: Die Industrielle Revolution",
    era: "Industriezeitalter & 19. Jahrhundert (1835–1890)",
    eraThemeId: "industrial_steam",
    archetype: "reigns_balance",
    defaultGradeLevel: "mittelstufe",
    defaultTargetGrades: "Mittelstufe (7.–8. Klasse)",
    tagline: "Dampfmaschine, Fabriken und der Kampf um Arbeiterrechte & Soziale Frage",
    defaultTopics: [
      "Erfindung der Dampfmaschine (James Watt) & die erste Eisenbahn 1835",
      "Verstädterung, Mietskasernen & harte Fabrikarbeit (14-Stunden-Tag)",
      "Kinderarbeit & Frauenarbeit in Kohlegruben und Webereien",
      "Lösungsansätze der Sozialen Frage: Gewerkschaften, Karl Marx & Kirchen",
      "Bismarcks Sozialgesetzgebung (Kranken-, Unfall-, Rentenversicherung)"
    ],
    suggestedPillars: [
      { key: "wirtschaft", label: "Industrielle Produktion ⚙️", icon: "⚙️", description: "Fabriken, Eisenbahnstrecken und Kohleförderung" },
      { key: "arbeiter", label: "Arbeiterschaft & Gewerkschaften 👥", icon: "👥", description: "Gerechte Löhne, 8-Stunden-Tag und Menschenwürde" },
      { key: "unternehmer", label: "Fabrikbesitzer & Kapital 💰", icon: "💰", description: "Investitionen in Maschinen, Kredite und Gewinne" },
      { key: "staat", label: "Staat & Sozialreform 🏛️", icon: "🏛️", description: "Schulgesetze, Fabrikinspektoren und Sozialversicherungen" }
    ],
    specialResource: { name: "Erfinder-Patente", emoji: "💡" },
    skills: {
      skill1: "Ingenieurgeist ⚙️",
      skill2: "Soziale Empathie ❤️",
      skill3: "Wirtschaftsplanung 📊"
    },
    historicalContext: "Als Fabrikinspektor im thüringischen oder englischen Industriegebiet ringst du um technischen Fortschritt bei Wahrung der Menschenrechte (Thüringer Lehrplan Kl. 7/8, LB IV: Industrialisierung und soziale Frage)."
  },

  // =========================================================================
  // KLASSENSTUFE 9 / 10 (Oberstufe)
  // =========================================================================

  // 12. Weimarer Republik
  {
    id: "weimarer_republik",
    title: "Tanz auf dem Vulkan: Die Weimarer Republik zwischen Krise & Moderne",
    era: "Weimarer Republik (1918–1933)",
    eraThemeId: "weimar_cabaret",
    archetype: "reigns_balance",
    defaultGradeLevel: "oberstufe",
    defaultTargetGrades: "Oberstufe (9.–10. Klasse)",
    tagline: "Vom Nationaltheater Weimar und den Goldenen Zwanzigern zum Schicksalsjahr 1929",
    defaultTopics: [
      "Novemberrevolution 1918 & Ausrufung der Republik",
      "Die Weimarer Reichsverfassung (Nationalversammlung im Weimarer Theater)",
      "Krisenjahre 1920–1923: Versailler Vertrag, Ruhrbesetzung & Hyperinflation",
      "Die Goldenen Zwanziger: Bauhaus Weimar, Radio, Film & Frauenwahlrecht",
      "Weltwirtschaftskrise 1929, Notverordnungen & das Ringen um die Demokratie"
    ],
    suggestedPillars: [
      { key: "demokratie", label: "Demokratische Parteien 🏛️", icon: "🏛️", description: "Weimarer Koalition, Parlament und Reichsverfassung" },
      { key: "wirtschaft", label: "Wirtschaft & Währung 💵", icon: "💵", description: "Stabilität von Mark und Rentenmark, Beschäftigung" },
      { key: "kultur", label: "Kultur & Moderne 🎭", icon: "🎭", description: "Bauhaus, Pressefreiheit, Kunst und Wissenschaft" },
      { key: "bevoelkerung", label: "Bürger & Soziale Ruhe 😊", icon: "😊", description: "Vertrauen der Bevölkerung in den Rechtsstaat" }
    ],
    specialResource: { name: "Reichstags-Mandate", emoji: "🗳️" },
    skills: {
      skill1: "Verfassungstreue 📜",
      skill2: "Finanzdiplomatie 💼",
      skill3: "Krisenmanagement ⚖️"
    },
    historicalContext: "Als junger Abgeordneter im Weimarer Nationaltheater musst du die erste deutsche Demokratie gegen Krisen, Inflation und Radikale verteidigen (Thüringer Lehrplan Kl. 7/8, LB VI & Kl. 9/10, LB I: Die Weimarer Republik)."
  }
];

