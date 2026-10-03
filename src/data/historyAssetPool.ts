export interface PredefinedAsset {
  id: string;
  topic: string; // e.g. "Ägypten & Nil", "Rom & Antike", "Mittelalter & Ritter", "Reformation", "Steinzeit & Urgeschichte"
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  suggestedPrompt: string;
}

export const PREDEFINED_HISTORY_ASSETS: PredefinedAsset[] = [
  // 1. Altes Ägypten & Nil
  {
    id: "egypt_aswan",
    topic: "Altes Ägypten & Hochkulturen",
    title: "Granitbrüche von Assuan & Nilkatarakt",
    description: "Steinmetzarbeiten am 1. Katarakt, monumentale Felsen und Transportschiffe auf dem Nil.",
    imageUrl: "/assets/aswan_quarry.jpg",
    tags: ["Assuan", "Steinmetze", "Nil", "Katarakt", "Pyramidenbau"],
    suggestedPrompt: "16-bit pixel art style ancient Egyptian stone quarry in Aswan near the Nile cataract, workers carving massive rose granite blocks, felucca cargo boats, retro adventure game aesthetic, warm desert sunset lighting",
  },
  {
    id: "egypt_kom_ombo",
    topic: "Altes Ägypten & Hochkulturen",
    title: "Krokodile & Tempel von Kom Ombo",
    description: "Doppeltempel von Sobek und Haroeris direkt am Ufer mit Nilkrokodilen und Priestern.",
    imageUrl: "/assets/kom_ombo.jpg",
    tags: ["Kom Ombo", "Sobek", "Nilkrokodile", "Priester", "Opfer"],
    suggestedPrompt: "16-bit pixel art style ancient Egyptian river temple of Kom Ombo, sacred crocodiles swimming at riverbank, priests holding offerings, papyrus reeds, retro adventure game aesthetic",
  },
  {
    id: "egypt_karnak",
    topic: "Altes Ägypten & Hochkulturen",
    title: "Säulenhalle von Karnak (Theben)",
    description: "Monumentale Papyrus-Säulen, Weihrauchdampf und goldene Götterbarken in Theben.",
    imageUrl: "/assets/thebes_karnak.jpg",
    tags: ["Theben", "Karnak", "Amun", "Säulen", "Priesterschaft"],
    suggestedPrompt: "16-bit pixel art style magnificent Great Hypostyle Hall of Karnak temple in Thebes, towering painted stone columns, sunlight rays through clerestory, priests carrying golden barque, retro RPG perspective",
  },
  {
    id: "egypt_saqqara",
    topic: "Altes Ägypten & Hochkulturen",
    title: "Stufenpyramide von Sakkara & Imhotep",
    description: "Erste Steinpyramide von Pharao Djoser, Baumeister und Kalksteinblöcke in Memphis.",
    imageUrl: "/assets/saqqara.jpg",
    tags: ["Sakkara", "Djoser", "Imhotep", "Stufenpyramide", "Architektur"],
    suggestedPrompt: "16-bit pixel art style Step Pyramid of Djoser in Saqqara desert plateau, architect Imhotep reviewing papyrus plans, limestone ramps, retro video game landscape, warm golden hour palette",
  },
  {
    id: "egypt_giza",
    topic: "Altes Ägypten & Hochkulturen",
    title: "Die großen Pyramiden von Gizeh",
    description: "Monumentale Baustelle der Cheops-Pyramide mit Hebeln, Schlitten und Rampen.",
    imageUrl: "/assets/giza_site.jpg",
    tags: ["Gizeh", "Cheops", "Pyramiden", "Baustelle", "Nilflut"],
    suggestedPrompt: "16-bit pixel art style panoramic view of Great Pyramids of Giza under construction, workers dragging stone blocks on wooden sleds with water sled lubricants, Nile flood in distance, retro graphic adventure style",
  },
  {
    id: "egypt_sphinx",
    topic: "Altes Ägypten & Hochkulturen",
    title: "Die Große Sphinx auf dem Plateau von Gizeh",
    description: "Monolithischer Wächter mit Löwenkörper und Pharaonenkopf vor Sonnenuntergang.",
    imageUrl: "/assets/sphinx.jpg",
    tags: ["Sphinx", "Gizeh", "Khafre", "Wächter", "Wüste"],
    suggestedPrompt: "16-bit pixel art style Great Sphinx of Giza with vibrant ceremonial nemes headdress colors, desert sand dunes, limestone temple foreground, retro adventure game art, dramatic evening sky",
  },
  {
    id: "egypt_coronation",
    topic: "Altes Ägypten & Hochkulturen",
    title: "Krönungszeremonie des Pharao in Memphis",
    description: "Thronbesteigung mit Doppelkrone Pschent, Geißel und Krummstab im Palast.",
    imageUrl: "/assets/coronation.jpg",
    tags: ["Krönung", "Doppelkrone", "Memphis", "Pschent", "Thron"],
    suggestedPrompt: "16-bit pixel art style grand coronation ceremony of new Pharaoh, wearing pschent double crown of Upper and Lower Egypt, golden flail and crook, cheering courtiers, retro 16-bit SNES game cutscene",
  },

  // 2. Antikes Rom & Römisches Reich
  {
    id: "rome_forum",
    topic: "Antikes Rom & Weltreich",
    title: "Forum Romanum & Römischer Senat",
    description: "Politisches Herzstück des Römischen Reiches mit Senatoren in Togen und Rostra-Rednertribüne.",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80",
    tags: ["Rom", "Senat", "Forum Romanum", "Senatoren", "Republik"],
    suggestedPrompt: "16-bit pixel art style Forum Romanum in ancient Rome, marble basilicas, senators in white togas gathered before the Curia, rostrums, banners of SPQR, bustling republican assembly, retro adventure style",
  },
  {
    id: "rome_colosseum",
    topic: "Antikes Rom & Weltreich",
    title: "Kolosseum & Brot und Spiele (Panem et Circenses)",
    description: "Das flavische Amphitheater mit jubelnden Plebejern, Gladiatoren und kaiserlicher Loge.",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80",
    tags: ["Kolosseum", "Gladiatoren", "Brot und Spiele", "Plebejer", "Kaiser"],
    suggestedPrompt: "16-bit pixel art style Colosseum arena floor, Roman gladiators in armor saluting the emperor, crowded grandstands under red velarium canopy, retro 16-bit arcade fighting aesthetic",
  },
  {
    id: "rome_limes",
    topic: "Antikes Rom & Weltreich",
    title: "Der römische Limes & Wachturm am Rhein",
    description: "Grenzbefestigung gegen germanische Stämme mit Palisaden, Wachtürmen und römischen Legionären.",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    tags: ["Limes", "Legionäre", "Germanien", "Grenze", "Wachturm"],
    suggestedPrompt: "16-bit pixel art style Roman Limes border fortification in Germanic dense pine forest, wooden watchtower with legionaries in lorica segmentata armor, palisade wall, mist rising, retro RPG style",
  },
  {
    id: "rome_aqueduct",
    topic: "Antikes Rom & Weltreich",
    title: "Römisches Aquädukt & Wasserbaukunst",
    description: "Meisterhafte Ingenieurskunst: Mehrstöckige Steinbögen leiten frisches Bergwasser in die Stadt.",
    imageUrl: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1000&q=80",
    tags: ["Aquädukt", "Ingenieurkunst", "Thermen", "Wasser", "Architektur"],
    suggestedPrompt: "16-bit pixel art style ancient Roman aqueduct bridging across green Italian valley, clear water channel on top arch, stone masons and surveying dioptra, retro landscape game background",
  },

  // 3. Antikes Griechenland & Alexander der Große
  {
    id: "greece_akropolis",
    topic: "Griechische Antike & Alexander",
    title: "Akropolis & Parthenon-Tempel in Athen",
    description: "Demokratische Volksversammlung auf der Pnyx mit Blick auf den Tempel der Göttin Athene.",
    imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1000&q=80",
    tags: ["Athen", "Akropolis", "Demokratie", "Parthenon", "Philosophie"],
    suggestedPrompt: "16-bit pixel art style Athenian Acropolis with Parthenon temple atop rocky citadel, citizens debating in agorá with scrolls, olive trees, bright Aegean sky, retro pixel adventure art",
  },
  {
    id: "alexander_issos",
    topic: "Griechische Antike & Alexander",
    title: "Schlacht von Issos & makedonische Phalanx",
    description: "Alexander auf Bukephalos an der Spitze der Sarissa-Heeresformation gegen das Perserreich.",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80",
    tags: ["Alexander", "Phalanx", "Sarissa", "Schlacht", "Perserreich"],
    suggestedPrompt: "16-bit pixel art style Battle of Issus, young Alexander the Great on black horse Bucephalus leading Macedonian phalanx with long sarissa spears against Persian royal guard, retro strategy game style",
  },

  // 4. Mittelalter, Ritter & Ständegesellschaft
  {
    id: "medieval_castle",
    topic: "Mittelalter & Feudalismus",
    title: "Ritterburg & Leben auf dem Feudalsitz",
    description: "Burg mit Wehrmauer, Zugbrücke, Rittersaal und Hofdamen in der Dreifelderwirtschaft-Landschaft.",
    imageUrl: "https://images.unsplash.com/photo-1533158307587-828f0a76ef96?auto=format&fit=crop&w=1000&q=80",
    tags: ["Ritterburg", "Feudalismus", "Adel", "Burggraben", "Lehnswesen"],
    suggestedPrompt: "16-bit pixel art style medieval stone castle on hilltop with moat, drawbridge, knights in chainmail armor, colorful heraldic pennants fluttering, retro RPG fantasy village background",
  },
  {
    id: "medieval_peasant",
    topic: "Mittelalter & Feudalismus",
    title: "Dorfleben, Frondienst & Dreifelderwirtschaft",
    description: "Bauern beim Pflügen mit Ochsen, Abgaben an den Grundherrn und Dorfgemeinschaft.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    tags: ["Bauern", "Dreifelderwirtschaft", "Frondienst", "Zehnt", "Dorf"],
    suggestedPrompt: "16-bit pixel art style medieval peasant village with thatched roof cottages, farmers plowing fields with oxen using heavy wheeled plow, grain mill by stream, retro farming sim look",
  },
  {
    id: "medieval_monastery",
    topic: "Mittelalter & Feudalismus",
    title: "Klosterbibliothek & Skriptorium",
    description: "Mönche beim mühevollen Abschreiben von Pergament-Handschriften mit Federkiel und Tinte.",
    imageUrl: "https://images.unsplash.com/photo-1507842229451-7f01be8510ab?auto=format&fit=crop&w=1000&q=80",
    tags: ["Kloster", "Skriptorium", "Mönche", "Pergament", "Bücher"],
    suggestedPrompt: "16-bit pixel art style Benedictine monastery scriptorium room, medieval monks in brown habits writing on parchment books by candlelight, tall arched stone windows, retro narrative game feel",
  },

  // 5. Reformation, Renaissance & Buchdruck
  {
    id: "reformation_wittenberg",
    topic: "Reformation & Frühe Neuzeit",
    title: "Martin Luther schlägt die 95 Thesen an",
    description: "Schlosskirche zu Wittenberg 1517: Protest gegen Ablasshandel und päpstliche Geldgier.",
    imageUrl: "https://images.unsplash.com/photo-1548625361-16a9a08e6f1c?auto=format&fit=crop&w=1000&q=80",
    tags: ["Luther", "Wittenberg", "95 Thesen", "Ablasshandel", "Reformation"],
    suggestedPrompt: "16-bit pixel art style Martin Luther nailing 95 theses paper to wooden door of Wittenberg Castle Church in autumn 1517, citizens and students gathering around, cobblestone square, retro history game art",
  },
  {
    id: "gutenberg_press",
    topic: "Reformation & Frühe Neuzeit",
    title: "Johannes Gutenbergs Buchdrucker-Werkstatt",
    description: "Bewegliche Bleilettern, Spindelpresse und die Revolution der Massenkommunikation.",
    imageUrl: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1000&q=80",
    tags: ["Gutenberg", "Buchdruck", "Bleilettern", "Wissen", "Buchpresse"],
    suggestedPrompt: "16-bit pixel art style Gutenberg printing press workshop, wooden screw press, metal movable type trays, freshly printed Bible pages hanging to dry on cords, retro educational game visual",
  },

  // 6. Steinzeit & Neolithische Revolution
  {
    id: "stoneage_hunter",
    topic: "Steinzeit & Neolithische Revolution",
    title: "Altsteinzeit: Mammutjagd & Lagerfeuer",
    description: "Jäger und Sammler der Eiszeit mit Speerschleudern vor einer Höhle mit Höhlenmalerei.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    tags: ["Altsteinzeit", "Mammut", "Höhlenmalerei", "Feuer", "Jäger"],
    suggestedPrompt: "16-bit pixel art style Paleolithic camp in snowy ice age tundra, hunter-gatherers with spears around fire outside painted cave shelter, woolly mammoth herd in distant snowy mountains, retro game aesthetic",
  },
  {
    id: "neolithic_village",
    topic: "Steinzeit & Neolithische Revolution",
    title: "Jungsteinzeit: Erste Bauern & Langhäuser",
    description: "Sesshaftwerdung, Getreideanbau, Tongefäße und Haustierdomestikation.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    tags: ["Jungsteinzeit", "Sesshaftwerdung", "Langhaus", "Ackerbau", "Keramik"],
    suggestedPrompt: "16-bit pixel art style early Neolithic farming settlement, long wooden houses with straw roofs, primitive wheat fields harvested with flint sickles, domesticated sheep pen, retro adventure scene",
  },
];
