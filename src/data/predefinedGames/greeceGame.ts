import { GameDefinition, RoundStory } from '../../types/game';

export const GREECE_ROUNDS: RoundStory[] = [
  // =========================================================================
  // STATION 1: Die Geografie der Ägäis & die Große Kolonisation (ca. 750 v. Chr.)
  // Bild: /assets/greece_station_01.jpg
  // =========================================================================
  {
    "id": "gre_r01",
    "roundNumber": 1,
    "locationKey": "aegaeis_kolonisation",
    "locationName": "Naturhafen in Attika (ca. 750 v. Chr.)",
    "milestoneTitle": "Runde 1: Der Abschied am Kai – Karge Böden & Enge",
    "imagePath": "/assets/greece_station_01.jpg",
    "hotspots": [
      { "id": "hs_r1_bireme", "x": 45, "y": 55, "label": "Pentecontere (Fünfzigruderer)", "description": "Das schmale, seetüchtige Langschiff der frühen Griechen für Kolonisationsfahrten.", "icon": "⛵" },
      { "id": "hs_r1_feuer", "x": 28, "y": 65, "label": "Das Heilige Herdfeuer (Hestia)", "description": "Glut aus dem Prytaneion der Mutterstadt, die den Bund mit der neuen Siedlung weiht.", "icon": "🔥" },
      { "id": "hs_r1_amphoren", "x": 70, "y": 70, "label": "Öl- & Weinamphoren", "description": "Wertvolles Vorratsgut und Handelsware für die Fahrt über das offene Meer.", "icon": "🏺" }
    ],
    "situation": {
      "unterstufe": "Um 750 v. Chr.: Auf den steinigen Hängen deiner Heimatpolis wächst nicht genug Korn für alle Familien. Der Ältestenrat hat beschlossen: Jüngere Söhne müssen aufbrechen, um jenseits des Meeres fruchtbares Land zu finden. Du stehst am Kai, das heilige Herdfeuer ist an Bord gebracht. Wie führst du die Auswanderer an?",
      "mittelstufe": "Die Große Griechische Kolonisation (ca. 750–550 v. Chr.) begann aus Landnot (Stenochoria), Überbevölkerung und politischen Streitigkeiten. Als Oikist (Gründungsführer) musst du die Expedition durch die stürmische Ägäis leiten und über Bündnisse mit der Mutterstadt entscheiden.",
      "oberstufe": "Strukturelle Agrarkrise und Erbteilung führten zur Apoikie-Welle im Mittelmeerraum. Die Auswanderer gründeten autonome Poleis, die über sakrale Bande (Hestia-Kult) und Handelsrouten mit der Metropolis verbunden blieben. Dies legte das Fundament für die panhellenische Kultur."
    },
    "hefterEintrag": "Die Große Kolonisation (ab 750 v. Chr.): Aus Landnot und Überbevölkerung segelten Griechen über das Mittelmeer und gründeten neue, unabhängige Tochterstädte (Apoikien).",
    "choices": [
      {
        "id": "A",
        "label": "Nur jüngere Söhne armer Bauernfamilien einschiffen, um di...",
        "description": "Nur jüngere Söhne armer Bauernfamilien einschiffen, um die Heimatstadt sofort zu entlasten.",
        "consequenceText": {
          "unterstufe": "Die Daheimgebliebenen haben mehr Brot, doch auf dem Schiff fehlt es an wohlhabenden Geldgebern für gute Ausrüstung.",
          "mittelstufe": "Die Stenochoria (Landnot) wird gelindert, allerdings fehlt den Kolonisten das nötige Kapital für den schnellen Aufbau befestigter Mauern.",
          "oberstufe": "Demographische Druckentlastung des Demos, jedoch Mangel an hoplitischen Rüstungsträgern unter den Auswanderern."
        },
        "statChanges": { "goetter": 10, "priester": -10, "adel": -5, "volk": 15 }
      },
      {
        "id": "B",
        "label": "Den Adel verpflichten, erfahrene Seeleute, Waffen und Eis...",
        "description": "Den Adel verpflichten, erfahrene Seeleute, Waffen und Eisengeräte großzügig zu finanzieren.",
        "consequenceText": {
          "unterstufe": "Die Flotte sticht bestens ausgerüstet in See, aber der Adel verlangt dafür die besten Ländereien in der neuen Stadt.",
          "mittelstufe": "Hervorragende maritime Logistik, doch der Geburtsadel sichert sich im Vorfeld die Vorherrschaft in der neuen Kolonie.",
          "oberstufe": "Aristokratische Patronage sichert Wehrkraft und Schiffsbau, zementiert jedoch oligarchische Strukturen im Übersee-Staat."
        },
        "statChanges": { "goetter": -10, "priester": 15, "adel": 15, "volk": -10 }
      },
      {
        "id": "C",
        "label": "Vor der Abfahrt das Orakel von Delphi um göttliche Wegwei...",
        "description": "Vor der Abfahrt das Orakel von Delphi um göttliche Wegweisung und Schutz bitten.",
        "consequenceText": {
          "unterstufe": "Die Priesterin Pythia verspricht reiche Ernten im fernen Westen. Die Siedler schöpfen neuen Mut für die gefährliche Fahrt.",
          "mittelstufe": "Das delphische Orakel spendet religiöse Legitimation und nennt eine geschützte Bucht auf Sizilien als Zielort.",
          "oberstufe": "Panhellenische Weihe durch das Orakelwesen stärkt den Zusammenhalt, kostet jedoch wertvolle Weihegaben aus der Stadtkasse."
        },
        "statChanges": { "goetter": 15, "priester": 5, "adel": -10, "volk": 5 }
      },
      {
        "id": "D",
        "label": "Gleichberechtigte Landverteilung durch Losentscheid unter...",
        "description": "Gleichberechtigte Landverteilung durch Losentscheid unter allen Auswanderern festschreiben.",
        "consequenceText": {
          "unterstufe": "Jeder Auswanderer erhält ein gleich großes Stück fruchtbares Land. Ein Geist von Freiheit und Brüderlichkeit erfüllt die Kolonie!",
          "mittelstufe": "Das Losverfahren (Kleros) verhindert Frühfeudalismus und macht die Kolonie zu einer blühenden, selbstbewussten Handelsstadt.",
          "oberstufe": "Egalitäre Bodenreform begründet eine wehrhafte Bürgerschaft gleicher Hoplitenbauern – ein Vorläufer demokratischer Verfassungsformen."
        },
        "statChanges": { "goetter": 20, "priester": -5, "adel": 15, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Die Apoikia (Kolonie)",
      "term": "Die Apoikia (Kolonie)",
      "explanation": {
        "unterstufe": "Eine neu gegründete griechische Stadt in der Ferne. Sie war völlig unabhängig von der Heimatstadt, blieb ihr aber freundschaftlich verbunden.",
        "mittelstufe": "Im Gegensatz zu neuzeitlichen Kolonien waren Apoikien völkerrechtlich souveräne Staaten mit eigener Verfassung, Münzprägung und Bürgerversammlung.",
        "oberstufe": "Die Apoikie bildete das Rückgrat der hellenischen Oikumene vom Schwarzen Meer bis nach Südfrankreich (Massalia) und Unteritalien (Magna Graecia)."
      },
      "curiosityFact": "Auswanderer nahmen mit Kohlenbecken das heilige Herdfeuer der Göttin Hestia aus der Heimat mit, um den neuen Altar der Tochterstadt zu entzünden."
    }
  },

  {
    "id": "gre_r02",
    "roundNumber": 2,
    "locationKey": "apoikia_gruendung",
    "locationName": "Küste von Unteritalien / Sizilien (ca. 730 v. Chr.)",
    "milestoneTitle": "Runde 2: Die Gründung der Tochterstadt",
    "imagePath": "/assets/greece_station_01.jpg",
    "hotspots": [
      { "id": "hs_r2_altar", "x": 50, "y": 60, "label": "Gründungsaltar des Oikisten", "description": "Hier opfert der Expeditionsleiter den Göttern für das Gedeihen der Siedlung.", "icon": "🕊️" },
      { "id": "hs_r2_strand", "x": 20, "y": 75, "label": "Gelandete Galeeren", "description": "Auf den Kiesstrand gezogene Schiffe dienen anfangs als Schutzwall.", "icon": "⚓" },
      { "id": "hs_r2_mauer", "x": 75, "y": 45, "label": "Erste Zyklopenmauer", "description": "Trockenmauerwerk schützt vor Angriffen einheimischer Völker aus dem Landesinneren.", "icon": "🧱" }
    ],
    "situation": {
      "unterstufe": "Nach wochenlanger Seefahrt landet eure Flotte in einer weiten, fruchtbaren Bucht im heutigen Süditalien. Weizen wächst hier doppelt so hoch wie daheim! Doch aus den Bergen beobachten euch die einheimischen Stämme misstrauisch. Wie sicherst du das Überleben der Siedlung?",
      "mittelstufe": "Die Gründung einer Kolonie in Magna Graecia erfordert diplomatische Klugheit und militärische Wachsamkeit. Die einheimischen Italiker sind zahlreich, doch sie schätzen griechische Töpferwaren, Olivenöl und Wein. Wie ordnest du die Beziehungen?",
      "oberstufe": "Kulturkontakt jenseits der Adria: Der Oikist muss zwischen Verdrängung, Tributpflicht oder friedlicher Akkulturation entscheiden. Gleichzeitig droht Zwietracht unter den griechischen Siedlern über den Verlauf der ersten Stadtmauer."
    },
    "hefterEintrag": "Die griechischen Kolonien brachten Schrift (Alphabet), Olivenanbau, Philosophie und die Münzwirtschaft nach Italien, Spanien und bis ans Schwarze Meer.",
    "choices": [
      {
        "id": "A",
        "label": "Den einheimischen Stammesfürsten wertvolle Bronzevasen un...",
        "description": "Den einheimischen Stammesfürsten wertvolle Bronzevasen und Purpurgewänder zum Tausch anbieten.",
        "consequenceText": {
          "unterstufe": "Die Fürsten freuen sich über die prächtigen Geschenke. Ein friedlicher Wochenmarkt entsteht am Strand.",
          "mittelstufe": "Erfolgreicher Tauschhandel sichert die Getreideversorgung der Kolonie und verhindert einen frühen Grenzkrieg.",
          "oberstufe": "Handelsvertrag schafft friedliche Koexistenz, stärkt jedoch vor allem die Händlerfraktion im jungen Stadtrat."
        },
        "statChanges": { "goetter": 5, "priester": -5, "adel": -5, "volk": 15 }
      },
      {
        "id": "B",
        "label": "Sofort eine wuchtige Wehrmauer aus Steinblöcken errichten...",
        "description": "Sofort eine wuchtige Wehrmauer aus Steinblöcken errichten und Wachtposten aufstellen.",
        "consequenceText": {
          "unterstufe": "Die Siedler müssen schwerste Steine schleppen, doch nachts schläft die Stadt hinter sicheren Zinnen.",
          "mittelstufe": "Die Befestigung trotzt ersten Überfällen, kostet aber immense Kraft und verstimmt die Einheimischen nachhaltig.",
          "oberstufe": "Militärische Abschreckung schützt das Territorium, erzwingt jedoch permanente Hoplitenbereitschaft der Bauern."
        },
        "statChanges": { "goetter": -10, "priester": 10, "adel": 15, "volk": -10 }
      },
      {
        "id": "C",
        "label": "Dem Meeresgott Poseidon und Apollon ein prächtiges Weihfe...",
        "description": "Dem Meeresgott Poseidon und Apollon ein prächtiges Weihfest mit Stieropfern ausrichten.",
        "consequenceText": {
          "unterstufe": "Dank der Rituale fühlen sich die Siedler geborgen und voller Zuversicht im fremden Land.",
          "mittelstufe": "Die Priesterschaft festigt die religiöse Einheit der Bürgerschaft und beruhigt abergläubische Ängste.",
          "oberstufe": "Kultische Stiftung stiftet kollektive Identität, verbraucht aber wertvolle Zugochsen als Schlachtopfer."
        },
        "statChanges": { "goetter": 15, "priester": 15, "adel": -10, "volk": -5 }
      },
      {
        "id": "D",
        "label": "Einen schachbrettartigen Bebauungsplan mit zentraler Agor...",
        "description": "Einen schachbrettartigen Bebauungsplan mit zentraler Agora für freien Bürgerhandel anlegen.",
        "consequenceText": {
          "unterstufe": "Breite Straßen und ein offener Marktplatz machen eure Stadt zur modernsten Metropole im ganzen Westen!",
          "mittelstufe": "Die rationale Stadtplanung (hippodamisches Prinzip) zieht Kaufleute aus dem gesamten Mittelmeer magisch an.",
          "oberstufe": "Pionierhafte Stadtbaukunst begründet ein florierendes Emporium, in dem Demokratie und Reichtum rasch aufblühen."
        },
        "statChanges": { "goetter": 15, "priester": 5, "adel": 15, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Der Oikist",
      "term": "Der Oikist",
      "explanation": {
        "unterstufe": "Der vom Orakel bestimmte Anführer der Auswanderer. Nach seinem Tod wurde er oft wie ein Halbgott auf dem Marktplatz verehrt.",
        "mittelstufe": "Der Oikist trug die volle Verantwortung für Schiffsnavigation, Landvermessung, Stadtmauerbau und die kultischen Schutzrituale.",
        "oberstufe": "Als charismatischer Gründer stand der Oikist an der Schnittstelle zwischen sakralem Priestertum und archaischer Führerschaft."
      },
      "curiosityFact": "Süditalien war so dicht von griechischen Städten besiedelt, dass die Römer das Gebiet später 'Magna Graecia' (Großgriechenland) nannten."
    }
  },

  // =========================================================================
  // STATION 2: Der Kriegerstaat Sparta – Die eiserne Ordnung des Lykurg
  // Bild: /assets/greece_station_02.jpg
  // =========================================================================
  {
    "id": "gre_r03",
    "roundNumber": 3,
    "locationKey": "sparta_agoge",
    "locationName": "Eurotas-Tal bei Sparta (ca. 650 v. Chr.)",
    "milestoneTitle": "Runde 3: Die Agoge – Stählung für den Staat",
    "imagePath": "/assets/greece_station_02.jpg",
    "hotspots": [
      { "id": "hs_r3_knaben", "x": 35, "y": 65, "label": "Spartanische Knaben beim Ringen", "description": "Ab dem 7. Lebensjahr werden Jungen der Familie entzogen und gemeinsam militärisch gedrillt.", "icon": "🤼" },
      { "id": "hs_r3_aufseher", "x": 65, "y": 50, "label": "Der Paidonomos (Zuchtmeister)", "description": "Ein angesehener Bürger mit Peitsche, der bedingungslosen Gehorsam und Schmerzresistenz einfordert.", "icon": "🧔" },
      { "id": "hs_r3_berg", "x": 80, "y": 25, "label": "Das Taygetos-Gebirge", "description": "Schneebedeckte Bergriesen schirmen das unbefestigte Sparta wie eine natürliche Festung ab.", "icon": "🏔️" }
    ],
    "situation": {
      "unterstufe": "In Sparta gelten andere Gesetze als im restlichen Griechenland. Die Stadt hat keine Mauern, denn ihre Krieger sind die Mauer! Ab sieben Jahren schlafen die Jungen auf selbstgeschnittenem Schilf, barfuß im Winter, mit nur einem dünnen Umhang im Jahr. Du begleitest den Ältestenrat bei der Inspektion der Knaben. Wie förderst du die Disziplin?",
      "mittelstufe": "Die sagenhaften Gesetze des Lykurg machten Sparta zur stärksten Landmacht Griechenlands. In der 'Agoge' lernen Jungen Abhärtung, Knappheit im Reden ('lakonisch') und absolute Unterordnung unter die Phalanx. Wie bewertest du den harten Drill?",
      "oberstufe": "Spartas Eunomia (Wohlordnung) beruhte auf totalitärer Erziehung und militärischer Homogenität ('Homoioi' = die Gleichen). Jeder Individualismus wurde im Keim erstickt, um die militärische Schlagkraft gegen äußere Feinde und innere Unruhen zu garantieren."
    },
    "hefterEintrag": "Die spartanische Erziehung (Agoge): Ab dem 7. Lebensjahr wurden spartanische Jungen fern der Familie zu furchtlosen, gehorsamen Kriegern für die Phalanx gedrillt.",
    "choices": [
      {
        "id": "A",
        "label": "Strenges Verbot von Klagen und Weinen bei Prügelstrafen d...",
        "description": "Strenges Verbot von Klagen und Weinen bei Prügelstrafen durchsetzen.",
        "consequenceText": {
          "unterstufe": "Kein Junge verzieht eine Miene. Die Krieger lernen, jeden Schmerz stumm zu ertragen.",
          "mittelstufe": "Erhöhte Schmerzresistenz und eiserner Korpsgeist, doch jede menschliche Regung wird rücksichtslos unterdrückt.",
          "oberstufe": "Konditionierung zur bedingungslosen Affektkontrolle festigt Spartas Ruf der Unbesiegbarkeit bei Nachbarstaaten."
        },
        "statChanges": { "goetter": -10, "priester": 10, "adel": 15, "volk": -10 }
      },
      {
        "id": "B",
        "label": "Kriegslieder, Chorgesang und lakonische Redekunst neben d...",
        "description": "Kriegslieder, Chorgesang und lakonische Redekunst neben dem Waffenlauf trainieren.",
        "consequenceText": {
          "unterstufe": "Im Takt der Flöten lernen die Jungen, gemeinsam zu marschieren und auf den Punkt zu antworten.",
          "mittelstufe": "Chorgesänge stärken den Rhythmus der Phalanx beim Vorrücken und heben den Zusammenhalt der Sippen.",
          "oberstufe": "Traditionelle Musik stiftet sakral-militärische Bindung und fördert das legendäre lakonische Sprachtempo."
        },
        "statChanges": { "goetter": 10, "priester": 10, "adel": 5, "volk": -5 }
      },
      {
        "id": "C",
        "label": "Den Knaben erlauben, mehr Essen zu stehlen, um List und P...",
        "description": "Den Knaben erlauben, mehr Essen zu stehlen, um List und Pirschkunst zu lernen.",
        "consequenceText": {
          "unterstufe": "Wer geschickt stiehlt, wird gelobt – wer sich aber erwischen lässt, wird streng ausgepeitscht!",
          "mittelstufe": "Die Knaben trainieren Heimlichkeit und Überlebenstaktik für spätere verdeckte Einsätze.",
          "oberstufe": "Legitimierter Nahrungsmundraub schärft die Sinne, untergräbt jedoch das Eigentumsbewusstsein."
        },
        "statChanges": { "goetter": -5, "priester": -10, "adel": 15, "volk": 10 }
      },
      {
        "id": "D",
        "label": "Gemeinsame Männergemeinschaften (Syssitien) fördern, in d...",
        "description": "Gemeinsame Männergemeinschaften (Syssitien) fördern, in denen König und Soldat das gleiche Mahl teilen.",
        "consequenceText": {
          "unterstufe": "Vom einfachen Soldaten bis zum König essen alle die berühmte spartanische 'Schwarze Suppe'. Niemand ist besser gestellt!",
          "mittelstufe": "Die Syssitien erzeugen eine unverbrüchliche Kameradschaft, die in der Schlacht jede Panik unmöglich macht.",
          "oberstufe": "Die Tischgemeinschaft der 'Homoioi' zementiert die soziale Gleichheit der Vollbürger und bildet das Herzstück spartanischer Wehrverfassung."
        },
        "statChanges": { "goetter": 15, "priester": 10, "adel": 20, "volk": 15 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Lakonisch sprechen",
      "term": "Lakonisch sprechen",
      "explanation": {
        "unterstufe": "Sehr kurz, treffend und ohne viele Worte antworten – benannt nach der Heimatregion der Spartaner (Lakonien).",
        "mittelstufe": "Die Spartaner verachteten langes Redegeschwätz. Als ein Feind drohte: 'Wenn ich siege, zerstöre ich eure Stadt', antwortete Sparta nur mit einem Wort: 'Wenn!'.",
        "oberstufe": "Die lakonische Rhetorik war bewusster Gegenentwurf zur athenischen Gerichts- und Volksversammlungsberedsamkeit."
      },
      "curiosityFact": "Spartanische Münzen bestanden aus schweren, unhandlichen Eisenbarren, die in Essig getaucht wurden – damit niemand nach Gold und Luxus gierte!"
    }
  },

  {
    "id": "gre_r04",
    "roundNumber": 4,
    "locationKey": "sparta_heloten",
    "locationName": "Felder von Messenien (ca. 600 v. Chr.)",
    "milestoneTitle": "Runde 4: Die Heloten – Unterdrückung für die Freiheit",
    "imagePath": "/assets/greece_station_02.jpg",
    "hotspots": [
      { "id": "hs_r4_bauern", "x": 25, "y": 70, "label": "Messenische Heloten", "description": "Unterworfene Ureinwohner, die als Staatssklaven auf den Feldern schuften und die Hälfte der Ernte abgeben müssen.", "icon": "🌾" },
      { "id": "hs_r4_spartiat", "x": 60, "y": 55, "label": "Berittener Aufseher", "description": "Krypten-Wächter überwachen die Landarbeiter scharf auf Waffen und Aufruhr.", "icon": "🗡️" },
      { "id": "hs_r4_getreide", "x": 80, "y": 65, "label": "Kornspeicher für Sparta", "description": "Hier lagern die Abgaben, von denen die spartanischen Bürgerfamilien sorglos leben.", "icon": "🛖" }
    ],
    "situation": {
      "unterstufe": "Spartas Krieger können nur deshalb rund um die Uhr trainieren, weil andere für sie schuften: die Heloten. Sie sind unterworfene Bauern, die an den Boden gebunden sind. Auf jeden Spartiaten kommen zehn Heloten! Die Angst vor einem Aufstand sitzt tief. Jedes Jahr erklären die Magistrate den Heloten rituell den Krieg. Wie sicherst du die Getreideernte?",
      "mittelstufe": "Das Helotensystem war Spartas wirtschaftliche Lebensader und zugleich seine größte Schwachstelle. Während die Spartaner als Herrenkaste lebten, waren sie ständig durch Sklavenaufstände bedroht. Wie reagierst du auf Gerüchte über geheime Waffenlager in Messenien?",
      "oberstufe": "Die Helotie als kollektive Staatssklaverei bildete das sozioökonomische Fundament der spartanischen Militärmaschine. Die ständige latente Bürgerkriegsgefahr (Stasis) zwang Sparta zu permanenter Mobilmachung und außenpolitischer Vorsicht."
    },
    "hefterEintrag": "Die Heloten waren rechtlose Staatssklaven Spartas. Ihre harte Feldarbeit ermöglichte es den Spartiaten erst, als reine Berufskrieger zu leben.",
    "choices": [
      {
        "id": "A",
        "label": "Die geheime Jugendpolizei (Krypteia) nachts aussenden, um...",
        "description": "Die geheime Jugendpolizei (Krypteia) nachts aussenden, um verdächtige Anführer lautlos zu beseitigen.",
        "consequenceText": {
          "unterstufe": "Die Heloten ducken sich voll Schrecken. Ein drohender Aufstand wird erstickt, doch der Hass wächst weiter.",
          "mittelstufe": "Grausame Abschreckung schlägt den Widerstand nieder, vertieft aber den Graben zwischen Herren und Sklaven.",
          "oberstufe": "Terrorinstrumente der Krypteia stabilisieren kurzfristig die Herrschaft, zerstören jedoch jede dauerhafte Befriedung."
        },
        "statChanges": { "goetter": -15, "priester": 10, "adel": 15, "volk": -15 }
      },
      {
        "id": "B",
        "label": "Den Heloten einen festen Ernteanteil garantieren, den sie...",
        "description": "Den Heloten einen festen Ernteanteil garantieren, den sie selbst auf Märkten verkaufen dürfen.",
        "consequenceText": {
          "unterstufe": "Die Bauern arbeiten fleißiger, denn Überschüsse gehören ihnen. Die Kornspeicher füllen sich rasch.",
          "mittelstufe": "Ökonomischer Anreiz dämpft die Aufstandsbereitschaft, stößt aber bei reaktionären Spartiaten auf Misstrauen.",
          "oberstufe": "Pragmatische Abgabenbegrenzung sichert die Versorgungslage, weckt jedoch Emanzipationshoffnungen bei den Unterworfenen."
        },
        "statChanges": { "goetter": 10, "priester": -10, "adel": -10, "volk": 15 }
      },
      {
        "id": "C",
        "label": "Besonders treuen Heloten die Aussicht auf Freiheit und de...",
        "description": "Besonders treuen Heloten die Aussicht auf Freiheit und den Dienst als Leichtbewaffnete im Heer versprechen.",
        "consequenceText": {
          "unterstufe": "Tausende junge Heloten melden sich freiwillig zum Schilddienst. Das spartanische Heer wächst beträchtlich.",
          "mittelstufe": "Die 'Neodamoden' (Neubürger) stärken die militärische Reserve, verändern aber das starre Gesellschaftsgefüge.",
          "oberstufe": "Selektive Manumission rekrutiert treue Hilfstruppen, löst jedoch Existenzängste beim konservativen Erbadelsadel aus."
        },
        "statChanges": { "goetter": 5, "priester": -5, "adel": 15, "volk": 10 }
      },
      {
        "id": "D",
        "label": "Die Periöken (freie Bürger der Randstädte) mit Steuerpriv...",
        "description": "Die Periöken (freie Bürger der Randstädte) mit Steuerprivilegien belohnen, damit sie die Grenze streng bewachen.",
        "consequenceText": {
          "unterstufe": "Die freien Handwerker und Händler schmieden Rüstungen und stehen als treue Pufferzone zwischen Sparta und den Heloten!",
          "mittelstufe": "Die Einbindung der Periöken sichert Spartas Waffenschmieden und entlastet die Vollbürger von Grenzkontrollen.",
          "oberstufe": "Stärkung des loyalen zweiten Standes stabilisiert den lakedaimonischen Staat ohne Verwässerung des Bürgerrechts."
        },
        "statChanges": { "goetter": 15, "priester": 10, "adel": 15, "volk": 15 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Die Heloten",
      "term": "Die Heloten",
      "explanation": {
        "unterstufe": "Die unterjochten Ureinwohner von Lakonien und Messenien. Sie durften nicht verkauft werden, gehörten aber dem Staat Sparta und mussten die Felder bestellen.",
        "mittelstufe": "Im Gegensatz zu den gekauften Haussklaven Athens bildeten die Heloten ein geschlossenes Volk im eigenen Land, was ständige Aufstandsangst erzeugte.",
        "oberstufe": "Die Helotie war der Preis für Spartas Wehrmacht: Die permanente Furcht vor der Überzahl der Versklavten prägte das gesamte spartanische Staatswesen."
      },
      "curiosityFact": "Um die Heloten einzuschüchtern, zwang man sie, sich betrunken zu machen und lächerliche Tänze aufzuführen – als warnendes Vorbild für spartanische Knaben."
    }
  },

  // =========================================================================
  // STATION 3: Athen in der Krise – Solons Reformen (594 v. Chr.)
  // Bild: /assets/greece_station_03.jpg
  // =========================================================================
  {
    "id": "gre_r05",
    "roundNumber": 5,
    "locationKey": "athen_schuldknechtschaft",
    "locationName": "Athen vor Solons Reformen (ca. 600 v. Chr.)",
    "milestoneTitle": "Runde 5: Athen am Abgrund – Die Schuldknechtschaft",
    "imagePath": "/assets/greece_station_03.jpg",
    "hotspots": [
      { "id": "hs_r5_grenzstein", "x": 30, "y": 70, "label": "Schuldstein (Horos)", "description": "Stein auf dem Feld, der anzeigt, dass Boden und Familie dem adligen Gläubiger verpfändet sind.", "icon": "🪨" },
      { "id": "hs_r5_sklaven", "x": 55, "y": 65, "label": "Verarmte Hektemorioi", "description": "Sechstlerbauern, die ein Sechstel ihrer Ernte abliefern müssen oder in die Sklaverei verkauft werden.", "icon": "⛓️" },
      { "id": "hs_r5_areopag", "x": 75, "y": 35, "label": "Der Areopag-Hügel", "description": "Sitz des adligen Ältestenrates, der die Rechtsprechung unerbittlich kontrolliert.", "icon": "🏛️" }
    ],
    "situation": {
      "unterstufe": "Um 600 v. Chr. herrscht in Athen tiefe Verzweiflung. Missernten haben tausende Kleinbauern in den Ruin getrieben. Wer seine Schulden beim Adligen nicht zahlen kann, wird mitsamt Frau und Kindern als Sklave ins Ausland verkauft! Auf den Äckern stehen schwere Schuldsteine. Bauern rotten sich zusammen, Steine fliegen. Wie verhinderst du ein Blutbad?",
      "mittelstufe": "Die drakonischen Gesetze hatten zuvor jeden Diebstahl mit dem Tod bedroht. Doch gegen den ökonomischen Zerfall half keine Härte. Der Demos droht, sich einem Tyrannen anzuschließen, um die Schulden gewaltsam auszulöschen. Die Not verlangt nach einem neutralen Schlichter.",
      "oberstufe": "Strukturelle Krise der früharchaischen Polis: Konzentration des Landbesitzes bei den Eupatriden (Geburtsadel) und Verelendung der bäuerlichen Masse führten zur Stasis. Die Schuldknechtschaft verletzte das archaische Selbstverständnis freier athenischer Bürger."
    },
    "hefterEintrag": "Vor Solons Reformen wurden verschuldete athenische Bauern als Sklaven verkauft. Die wachsende Wut des Volkes brachte Athen an den Rand eines Bürgerkriegs.",
    "choices": [
      {
        "id": "A",
        "label": "Die adligen Gläubiger mit Waffengewalt schützen und aufrü...",
        "description": "Die adligen Gläubiger mit Waffengewalt schützen und aufrührerische Bauernführer verhaften.",
        "consequenceText": {
          "unterstufe": "Auf den Straßen herrscht gespenstische Ruhe, doch der Zorn in den Hütten wächst zur unberechenbaren Glut.",
          "mittelstufe": "Kurzfristige Wiederherstellung der Ordnung stärkt die Aristokratie, macht aber eine gewaltsame Revolution unvermeidlich.",
          "oberstufe": "Repression sichert Gläubigeransprüche, zerstört jedoch den staatsbürgerlichen Burgfrieden vollends."
        },
        "statChanges": { "goetter": -15, "priester": 15, "adel": 15, "volk": -15 }
      },
      {
        "id": "B",
        "label": "Den angesehenen Dichter und Kaufmann Solon mit unbeschrän...",
        "description": "Den angesehenen Dichter und Kaufmann Solon mit unbeschränkter Schlichtervollmacht ausstatten.",
        "consequenceText": {
          "unterstufe": "Beide Seiten atmen auf: Solon ist weise, unbestechlich und versteht sowohl Händler als auch Bauern.",
          "mittelstufe": "Solons Ernennung zum Archonten verhindert das Blutvergießen und eröffnet den Weg für friedliche Reformen.",
          "oberstufe": "Konsensuale Berufung eines Aisymneten (Schlichters) rettet Athen vor der Errichtung einer blutigen Tyrannis."
        },
        "statChanges": { "goetter": 15, "priester": 5, "adel": 10, "volk": 15 }
      },
      {
        "id": "C",
        "label": "Notgetreide aus den staatlichen Silos kostenlos an die hu...",
        "description": "Notgetreide aus den staatlichen Silos kostenlos an die hungernden Familien verteilen.",
        "consequenceText": {
          "unterstufe": "Frauen und Kinder jubeln. Für ein paar Wochen hat der Hunger ein Ende, doch die Schulden bleiben bestehen.",
          "mittelstufe": "Akute Linderung der Not dämpft die Wut des Demos, löst aber nicht das eigentliche Problem der verpfändeten Felder.",
          "oberstufe": "Palliative Hilfsmaßnahme verhindert die Hungerrevolte, lässt die feudalen Eigentumsverhältnisse jedoch intakt."
        },
        "statChanges": { "goetter": 5, "priester": -5, "adel": -10, "volk": 15 }
      },
      {
        "id": "D",
        "label": "Ein umfassendes Verbot der Verpfändung des eigenen Körper...",
        "description": "Ein umfassendes Verbot der Verpfändung des eigenen Körpers und aller Schuldversklavung verkünden.",
        "consequenceText": {
          "unterstufe": "Kein freier Athener darf jemals wieder als Sklave für seine Schulden verkauft werden! Das Fundament der Freiheit ist gelegt.",
          "mittelstufe": "Die Abschaffung der Leibhaftung begründet die unantastbare persönliche Freiheit aller Bürger Athens.",
          "oberstufe": "Grundlegender zivilrechtlicher Meilenstein: Freiheit wird zum unveräußerlichen Geburtsrecht jedes Bürgers erhoben."
        },
        "statChanges": { "goetter": 20, "priester": 10, "adel": -5, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Drakonische Gesetze",
      "term": "Drakonische Gesetze",
      "explanation": {
        "unterstufe": "Ein Gesetzgeber namens Drakon führte um 621 v. Chr. extrem harte Strafen ein. Selbst für den Diebstahl eines Apfels gab es oft die Todesstrafe!",
        "mittelstufe": "Man sagte sprichwörtlich, Drakons Gesetze seien 'mit Blut statt Tinte' geschrieben worden. Bis heute nennt man überharte Regeln 'drakonisch'.",
        "oberstufe": "Drakons Verdienst war dennoch die erstmalige schriftliche Fixierung des Rechts, was der willkürlichen Adelsjustiz Schranken setzte."
      },
      "curiosityFact": "Solon verließ Athen nach seinen Reformen für zehn Jahre auf Reisen – damit die Bürger gezwungen waren, die neuen Gesetze selbst zu leben, statt ihn ständig um Änderungen anzubetteln!"
    }
  },

  {
    "id": "gre_r06",
    "roundNumber": 6,
    "locationKey": "solon_seisachtheia",
    "locationName": "Agora von Athen (594 v. Chr.)",
    "milestoneTitle": "Runde 6: Die Seisachtheia – Die Lastenabschüttelung",
    "imagePath": "/assets/greece_station_03.jpg",
    "hotspots": [
      { "id": "hs_r6_steine", "x": 45, "y": 70, "label": "Zerbrochene Schuldsteine", "description": "Unter dem Jubel des Volkes werden die Horoi-Schuldsteine aus den Äckern gerissen und zerschlagen.", "icon": "💥" },
      { "id": "hs_r6_axones", "x": 25, "y": 55, "label": "Die Axones (Holztafeln)", "description": "Drehbare, vierseitige Holzpfeiler mit den neuen Gesetzen Solons auf der Agora.", "icon": "📜" },
      { "id": "hs_r6_volk", "x": 75, "y": 60, "label": "Die vier Vermögensklassen", "description": "Pentakosiomedimnoi, Hippeis (Ritter), Zeugiten und Theten – Rechte nach Einkommen statt Adelstitel.", "icon": "⚖️" }
    ],
    "situation": {
      "unterstufe": "Im Jahr 594 v. Chr. tritt Solon vor das Volk. Mit einem kühnen Federstrich erlässt er die 'Seisachtheia' – die Lastenabschüttelung: Alle Schulden werden gestrichen, versklavte Athener auf Staatskosten aus dem Ausland freigekauft! Zugleich teilt er die Bürger in vier Klassen nach ihrem Ernteertrag ein: Wer mehr besitzt, darf mehr mitbestimmen, muss aber auch teurere Waffen stellen. Wie festigst du diesen Kompromiss?",
      "mittelstufe": "Solons Timokratie (Herrschaft nach Vermögen statt Abstammung) entmachtete den reinen Geburtsadel. Selbst die ärmste Schicht, die Theten, erhielten Sitz und Stimme in der Volksversammlung (Ekklesia) und dem Volksgericht (Heliaia). Doch der Adel schäumt über verlorene Gelder.",
      "oberstufe": "Die solonische Verfassungsreform etablierte eine gestufte politische Partizipation: Zugang zu Archontat und Areopag blieb den oberen Klassen vorbehalten, doch das Bürgerrecht wurde entfeudalisiert. Es war ein historischer Mittelweg zwischen Oligarchie und Volksherrschaft."
    },
    "hefterEintrag": "Solons Reformen (594 v. Chr.): Abschaffung aller Schulden ('Seisachtheia') und Einteilung der Bürger in 4 Vermögensklassen. Fortan zählte Leistung und Besitz statt adliger Geburt.",
    "choices": [
      {
        "id": "A",
        "label": "Die adligen Großgrundbesitzer beruhigen, indem ihnen alle...",
        "description": "Die adligen Großgrundbesitzer beruhigen, indem ihnen alle höchsten Richterämter im Areopag garantiert bleiben.",
        "consequenceText": {
          "unterstufe": "Der Adel verzichtet auf Gewalt, behält aber die Kontrolle über die wichtigsten Urteile der Stadt.",
          "mittelstufe": "Der Areopag bleibt adliges Bollwerk, was den konservativen Flügel versöhnt, aber die Reformfreunde enttäuscht.",
          "oberstufe": "Traditionelle Elitenintegration verhindert den Gegenputsch, verlangsamt jedoch die Demokratisierung der Justiz."
        },
        "statChanges": { "goetter": -5, "priester": 15, "adel": 15, "volk": -10 }
      },
      {
        "id": "B",
        "label": "Das Volksgericht (Heliaia) stärken, bei dem Bürger über E...",
        "description": "Das Volksgericht (Heliaia) stärken, bei dem Bürger über Einsprüche gegen adlige Beamte abstimmen.",
        "consequenceText": {
          "unterstufe": "Kein reicher Beamter kann mehr willkürlich Strafen verhängen, ohne dass einfache Bürger das Urteil prüfen!",
          "mittelstufe": "Die Heliaia wird zum Schutzschild des Demos gegen behördliche Willkür und stärkt das Bürgerbewusstsein.",
          "oberstufe": "Etablierung der gerichtlichen Rechenschaftspflicht (Dokimasia/Euthyne) bricht die aristokratische Immunität."
        },
        "statChanges": { "goetter": 15, "priester": -10, "adel": -5, "volk": 15 }
      },
      {
        "id": "C",
        "label": "Verkauf von attischem Olivenöl ins Ausland fördern, Getre...",
        "description": "Verkauf von attischem Olivenöl ins Ausland fördern, Getreideexporte jedoch streng verbieten.",
        "consequenceText": {
          "unterstufe": "Das Brot im Land bleibt billig und das Öl bringt wertvolles Silber nach Athen.",
          "mittelstufe": "Kluge Agrar- und Handelspolitik schützt die Grundversorgung und macht Athens Töpfer und Ölbauern wohlhabend.",
          "oberstufe": "Gezielte Außenhandelsregulierung stimuliert den maritimen Exportsektor und sichert die Ernährungssouveränität."
        },
        "statChanges": { "goetter": 10, "priester": -5, "adel": 10, "volk": 15 }
      },
      {
        "id": "D",
        "label": "Die Gesetze auf drehbaren Holztafeln (Axones) für jeden B...",
        "description": "Die Gesetze auf drehbaren Holztafeln (Axones) für jeden Bürger lesbar und verbindlich auf der Agora aufstellen.",
        "consequenceText": {
          "unterstufe": "Gesetze sind kein adliges Geheimwissen mehr! Jeder kann auf dem Markt lesen, was Recht und Gesetz ist.",
          "mittelstufe": "Öffentliches, geschriebenes Recht schafft beispiellose Rechtssicherheit und macht das Gesetz zum wahren König Athens.",
          "oberstufe": "Isonomie im Keim: Die Veröffentlichung der Normen unterwirft alle Stände gleichermaßen dem Rechtsstaat."
        },
        "statChanges": { "goetter": 20, "priester": 10, "adel": 15, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Die Timokratie",
      "term": "Die Timokratie",
      "explanation": {
        "unterstufe": "Eine Herrschaftsform, in der die politischen Rechte nicht vom adligen Familienstammbaum, sondern vom Einkommen und Vermögen abhängen.",
        "mittelstufe": "Solon teilte Athen in 4 Klassen: Pentakosiomedimnoi (über 500 Scheffel Ernte), Hippeis (Ritter mit Pferd), Zeugiten (Hopliten) und Theten (einfache Arbeiter).",
        "oberstufe": "Die Timokratie war der entscheidende evolutionäre Schritt von der Geburtsaristokratie zur bürgerlichen Leistungs- und Abgabengemeinschaft."
      },
      "curiosityFact": "Solons Begriff 'Seisachtheia' bedeutet wörtlich übersetzt 'Lasten-Abschüttelung' – wie wenn ein Esel seine drückenden Säcke abwirft!"
    }
  },

  // =========================================================================
  // STATION 4: Kleisthenes & die Wiege der Demokratie (508 v. Chr.)
  // Bild: /assets/greece_station_04.jpg
  // =========================================================================
  {
    "id": "gre_r07",
    "roundNumber": 7,
    "locationKey": "kleisthenes_phylen",
    "locationName": "Die Pnyx in Athen (508 v. Chr.)",
    "milestoneTitle": "Runde 7: Kleisthenes & die zehn Phylen",
    "imagePath": "/assets/greece_station_04.jpg",
    "hotspots": [
      { "id": "hs_r7_bema", "x": 48, "y": 50, "label": "Die Bema (Rednertribüne)", "description": "Aus dem gewachsenen Kalkfelsen gehauenes Podest auf der Pnyx für freie Reden der Bürger.", icon: "🗣️" },
      { "id": "hs_r7_los", "x": 75, "y": 65, "label": "Kleroterion (Losmaschine)", "description": "Steinernes Gerät, mit dem Richter und Ratsherren unbestechlich durch Zufall ausgelost werden.", icon: "🎲" },
      { "id": "hs_r7_volk", "x": 25, "y": 60, "label": "Die Bürger der 10 Phylen", "description": "Bauern aus dem Binnenland, Fischer der Küste und Städter beraten erstmals gemeinsam.", icon: "👥" }
    ],
    "situation": {
      "unterstufe": "Nach der Vertreibung der Tyrannen wagt Kleisthenes im Jahr 508 v. Chr. einen genialen Schritt: Er zerschlägt die alten adligen Sippenbünde! Ganz Attika wird in 10 künstliche Stämme (Phylen) eingeteilt. In jeder Phyle sitzen Bauern aus den Bergen, Fischer von der Küste und Handwerker aus der Stadt zusammen. Wie organisierst du die erste gemeinsame Bürgerversammlung auf dem Pnyx-Hügel?",
      "mittelstufe": "Die kleisthenische Phylenreform begründete die Isonomie (Gleichheit aller Bürger vor dem Gesetz). Der neue 'Rat der 500' (Boule) wird nun jährlich durch das Los bestimmt – 50 Männer aus jeder Phyle. Dadurch hat Bestechung keine Chance mehr. Doch konservative Kreise wittern Chaos durch ungebildete Losgewinner.",
      "oberstufe": "Kleisthenes schuf eine geometrisch-rationale Bürgerschaftsorganisation (Trittyen-System), die lokale Klientelbeziehungen des Adels neutralisierte. Das Losverfahren (Klerosis) galt den Griechen als wahrhaft demokratisch, während Wahlen als oligarchisch angesehen wurden."
    },
    "hefterEintrag": "Kleisthenes' Reform (508 v. Chr.): Einteilung Attikas in 10 Phylen und Einführung des Losverfahrens für Ämter. Dies gilt als die eigentliche Geburtsstunde der Attischen Demokratie.",
    "choices": [
      {
        "id": "A",
        "label": "Für wichtige Ratsentscheidungen weiterhin ein Veto des ad...",
        "description": "Für wichtige Ratsentscheidungen weiterhin ein Veto des adligen Areopags vorschreiben.",
        "consequenceText": {
          "unterstufe": "Die Adligen fühlen sich respektiert, blockieren aber immer wieder Beschlüsse der einfachen Bürger.",
          "mittelstufe": "Das Veto stabilisiert das System kurzfristig, bremst jedoch den demokratischen Aufbruch empfindlich aus.",
          "oberstufe": "Institutioneller Dualismus zwischen Boule und Areopag erhält oligarchische Kontrollhebel aufrecht."
        },
        "statChanges": { "goetter": -10, "priester": 15, "adel": 15, "volk": -10 }
      },
      {
        "id": "B",
        "label": "Das Losverfahren für den 'Rat der 500' konsequent anwende...",
        "description": "Das Losverfahren für den 'Rat der 500' konsequent anwenden, um Bestechung völlig auszuschließen.",
        "consequenceText": {
          "unterstufe": "Jeder Bürger kann Ratsherr werden! Vom Schuster bis zum Gutsbesitzer regieren alle abwechselnd die Stadt.",
          "mittelstufe": "Das Los verhindert Seilschaften und bindet die breite Bevölkerung aktiv in die tägliche Politik ein.",
          "oberstufe": "Radikaldemokratisches Kleroterion-Prinzip bricht die Dominanz vermögender Berufspolitiker nachhaltig."
        },
        "statChanges": { "goetter": 15, "priester": -10, "adel": -5, "volk": 20 }
      },
      {
        "id": "C",
        "label": "Redezeit auf der Pnyx streng mit einer Wasseruhr (Klepsyd...",
        "description": "Redezeit auf der Pnyx streng mit einer Wasseruhr (Klepsydra) begrenzen, damit jeder zu Wort kommt.",
        "consequenceText": {
          "unterstufe": "Kein reicher Schwätzer kann stundenlang reden. Die Debatten werden sachlich, kurz und fair.",
          "mittelstufe": "Die Klepsydra garantiert Chancengleichheit am Rednerpult und verhindert parlamentarische Verzögerungstaktik.",
          "oberstufe": "Formale Redezeitdisziplin sichert die Handlungsfähigkeit der mehrere tausend Bürger umfassenden Ekklesia."
        },
        "statChanges": { "goetter": 10, "priester": 5, "adel": 5, "volk": 15 }
      },
      {
        "id": "D",
        "label": "Den Schwur der Isegoria ablegen: Jeder Bürger hat das hei...",
        "description": "Den Schwur der Isegoria ablegen: Jeder Bürger hat das heilige Recht, vor dem ganzen Volk frei zu sprechen.",
        "consequenceText": {
          "unterstufe": "Vor dem Rednerpult zählt kein Adelstitel, sondern nur das beste Argument. Athen wird zum Leuchtturm der Meinungsfreiheit!",
          "mittelstufe": "Die Isegoria macht Athen zur Wiege der europäischen Redekultur und entfacht ungeheure geistige Schöpferkraft.",
          "oberstufe": "Etablierung der unbeschränkten Redefreiheit als demokratisches Grundrecht transformiert die Bürgerschaft in mündige Souveräne."
        },
        "statChanges": { "goetter": 20, "priester": -5, "adel": 15, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Isonomie & Isegoria",
      "term": "Isonomie & Isegoria",
      "explanation": {
        "unterstufe": "Isonomie bedeutet: Gleiches Recht für alle vor dem Gesetz. Isegoria bedeutet: Jeder Bürger darf in der Versammlung aufstehen und seine Meinung sagen.",
        "mittelstufe": "Die Griechen nannten ihre frühe Demokratie noch gar nicht 'Demokratie', sondern stolz 'Isonomia' (Gleichheit der Gesetze).",
        "oberstufe": "Isonomie und Isegoria bildeten das ideelle Wertefundament, das die Tyrannis moralisch delegitimierte und Bürgertugend zur Staatsräson erhob."
      },
      "curiosityFact": "Der Redner auf der Pnyx setzte sich vor seiner Ansprache einen Myrtenkranz auf den Kopf – dadurch galt er als sakral unverletzlich und durfte nicht beschimpft werden!"
    }
  },

  {
    "id": "gre_r08",
    "roundNumber": 8,
    "locationKey": "ostrakismos_scherbengericht",
    "locationName": "Agora von Athen (ca. 495 v. Chr.)",
    "milestoneTitle": "Runde 8: Das Scherbengericht (Ostrakismos)",
    "imagePath": "/assets/greece_station_04.jpg",
    "hotspots": [
      { "id": "hs_r8_scherbe", "x": 50, "y": 70, label: "Ostrakon (Tonscherbe)", "description": "Mit einer Nadel geritzte Tonscherbe mit dem Namen des Bürgers, den man für zu mächtig hält.", icon: "🏺" },
      { "id": "hs_r8_urne", "x": 25, "y": 65, label: "Abstimmungsurnen", "description": "Hier werfen mindestens 6.000 versammelte Bürger ihre Scherben ein.", icon: "🗳️" },
      { "id": "hs_r8_verbannt", "x": 75, "y": 55, label: "Verbannung für 10 Jahre", "description": "Der Verurteilte verliert kein Vermögen und keine Ehre, muss aber sofort die Stadt verlassen.", icon: "🚶" }
    ],
    "situation": {
      "unterstufe": "Einmal im Jahr stellt der Ratsvorsitzende auf der Agora die Frage: 'Gibt es einen Mann in unserer Stadt, der zu mächtig, zu stolz oder zu reich geworden ist und die Demokratie gefährden könnte?' Wenn 6.000 Bürger zustimmen, findet das Scherbengericht statt. Jeder ritzt einen Namen in eine Tonscherbe. Wer die meisten Stimmen hat, muss für 10 Jahre ins Exil! Wie leitest du diese schwere Entscheidung?",
      "mittelstufe": "Der Ostrakismos war ein präventives Instrument gegen die Rückkehr einer Tyrannis. Doch die Gefahr des Missbrauchs ist groß: Ehrgeizige Politiker nutzen die Scherben, um fähige Konkurrenten kaltzustellen. Auf einer Scherbe liest du den Namen des integren Feldherrn Aristeides. Wie reagierst du?",
      "oberstufe": "Verfassungsrechtliches Paradoxon des Scherbengerichts: Es schützte die Isonomie vor charismatischen Autokraten, funktionierte aber ohne Anklage, Beweisaufnahme oder Verteidigung. Der Demos nutzte es zunehmend als Instrument der plebiszitären Richtungsentscheidung."
    },
    "hefterEintrag": "Das Scherbengericht (Ostrakismos): Zum Schutz vor Tyrannen konnten athenische Bürger auf Tonscherben abstimmen. Wer die meisten Stimmen erhielt, wurde für 10 Jahre ohne Vermögensverlust verbannt.",
    "choices": [
      {
        "id": "A",
        "label": "Einem ungebildeten Bauern helfen, der dich bittet: 'Schre...",
        "description": "Einem ungebildeten Bauern helfen, der dich bittet: 'Schreib Aristeides auf meine Scherbe – ich kann es nicht mehr hören, dass alle ihn den Gerechten nennen!'",
        "consequenceText": {
          "unterstufe": "Wie in der berühmten Legende schreibt der Feldherr Aristeides ruhig seinen eigenen Namen auf die Scherbe des Bauern.",
          "mittelstufe": "Der Neid der Masse triumphiert über historische Verdienste – Aristeides geht erhobenen Hauptes ins Exil.",
          "oberstufe": "Das Anekdotische belegt die Verwundbarkeit der attischen Demokratie durch Demagogie und Ressentiment."
        },
        "statChanges": { "goetter": -10, "priester": 10, "adel": 10, "volk": 10 }
      },
      {
        "id": "B",
        "label": "Streng kontrollieren, dass keine vorgefertigten Scherben ...",
        "description": "Streng kontrollieren, dass keine vorgefertigten Scherben von politischen Klubs heimlich verteilt werden.",
        "consequenceText": {
          "unterstufe": "Fälscherbanden werden verjagt. Jede Stimme stammt aus dem freien Willen des einzelnen Bürgers.",
          "mittelstufe": "Wahlbeobachtung verhindert organisierte Manipulationen durch oligarchische Zirkel (Hetairien).",
          "oberstufe": "Verfahrensintegrität stärkt das Vertrauen in die plebiszitäre Institution des Ostrakismos."
        },
        "statChanges": { "goetter": 15, "priester": 5, "adel": -10, "volk": 15 }
      },
      {
        "id": "C",
        "label": "Die Verbannungsstrafe aussetzen, falls drohende Kriegsgef...",
        "description": "Die Verbannungsstrafe aussetzen, falls drohende Kriegsgefahr die Rückkehr aller erfahrenen Feldherren erfordert.",
        "consequenceText": {
          "unterstufe": "Die Bürger stimmen zu: Wenn die Heimat bedroht ist, muss jeder Patriot an Bord der Schiffe stehen!",
          "mittelstufe": "Pragmatische Amnestie eint die Bürgerschaft im Angesicht der heranziehenden persischen Bedrohung.",
          "oberstufe": "Ausnahmezustand bricht Verfassungsroutine und stellt nationale Wehrkraft über innenpolitische Rivalitäten."
        },
        "statChanges": { "goetter": 10, "priester": -5, "adel": 15, "volk": 5 }
      },
      {
        "id": "D",
        "label": "Festschreiben, dass Verbannten ihr volles Eigentum erhalt...",
        "description": "Festschreiben, dass Verbannten ihr volles Eigentum erhalten bleibt und ihre Familien unberührt geschützt sind.",
        "consequenceText": {
          "unterstufe": "Niemand wird vernichtet oder entrechtet! Nach zehn Jahren kehrt der Verbannte als geachteter Bürger zurück.",
          "mittelstufe": "Die Humanität des Ostrakismos unterscheidet die athenische Demokratie von grausamen orientalischen Despotien.",
          "oberstufe": "Rechtsstaatliche Sicherung des Eigentums verhindert Rachefeldzüge und dynastische Blutfehden nach dem Exil."
        },
        "statChanges": { "goetter": 20, "priester": 10, "adel": 15, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Das Ostrakon",
      "term": "Das Ostrakon",
      "explanation": {
        "unterstufe": "Eine abgebrochene Tonscherbe von kaputten Krügen. Ton gab es im antiken Athen überall umsonst – so konnte jeder arme Bürger mitstimmen, ohne Papier kaufen zu müssen.",
        "mittelstufe": "Archäologen fanden auf der Agora tausende dieser beschrifteten Scherben. Viele trugen Schmähverse oder Karikaturen gegen Politiker.",
        "oberstufe": "Der Ostrakismos verhütete Bürgerkriege, indem er politische Konflikte durch den zeitweisen Abzug einer Führungsfigur unblutig deeskalierte."
      },
      "curiosityFact": "Archäologen fanden einen Brunnen voll mit 190 Tonscherben, die alle dieselbe Handschrift trugen – der früheste Beweis für einen versuchten Wahlbetrug in der Weltgeschichte!"
    }
  },

  // =========================================================================
  // STATION 5: Die Perser kommen! – Die Schlacht bei Marathon (490 v. Chr.)
  // Bild: /assets/greece_station_05.jpg
  // =========================================================================
  {
    "id": "gre_r09",
    "roundNumber": 9,
    "locationKey": "perser_gesandte",
    "locationName": "Vor den Toren Athens (491 v. Chr.)",
    "milestoneTitle": "Runde 9: Erde und Wasser – Die persische Drohung",
    "imagePath": "/assets/greece_station_05.jpg",
    "hotspots": [
      { "id": "hs_r9_perser", "x": 25, "y": 60, "label": "Persische Herolde", "description": "Gesandte des Großkönigs Dareios I. im kostbaren Seidengewand fordern Unterwerfung.", icon: "👑" },
      { "id": "hs_r9_hoplit", "x": 55, "y": 55, "label": "Athenische Hopliten", "description": "Bürger mit Speer (Dory) und bronzenem Rundschild (Aspis) stellen sich den Gesandten entgegen.", icon: "🛡️" },
      { "id": "hs_r9_schlucht", "x": 78, "y": 68, label: "Die Hinrichtungsschlucht (Barathron)", "description": "Tiefe Felsspalte, in die die Athener die Gesandten stürzen: 'Holt euch dort Erde und Wasser!'", icon: "⛰️" }
    ],
    "situation": {
      "unterstufe": "491 v. Chr.: Das persische Riesenreich, das von Ägypten bis Indien reicht, will Griechenland unterwerfen. Boten des Großkönigs Dareios fordern von allen Städten 'Erde und Wasser' als Zeichen der Knechtschaft. Viele Inseln geben vor Angst nach. Doch vor der athenischen Volksversammlung rufen die Bürger nach Freiheit. Wie antwortest du dem persischen Boten?",
      "mittelstufe": "Weil Athen den Ionischen Aufstand gegen Persien mit Schiffen unterstützt hatte, schwor Dareios Rache. Seine Gesandten fordern die bedingungslose Unterwerfung der Polis. Ein Nachgeben bedeutet Verlust aller mühsam erkämpften Freiheiten. Doch Persiens Armee zählt hunderttausende Krieger.",
      "oberstufe": "Kollision zweier unvereinbarer Weltordnungen: Auf der einen Seite das universalmonarchische Achämenidenreich mit göttlicher Legitimation des Großkönigs, auf der anderen Seite das egalitäre Konzept der freien, selbstverwalteten Polis-Gemeinschaft."
    },
    "hefterEintrag": "Die Perserkriege begannen, als Großkönig Dareios die Unterwerfung Griechenlands forderte ('Erde und Wasser'). Athen und Sparta verweigerten den Gehorsam und wählten den Kampf um die Freiheit.",
    "choices": [
      {
        "id": "A",
        "label": "Den persischen Boten mit diplomatischer Höflichkeit abwei...",
        "description": "Den persischen Boten mit diplomatischer Höflichkeit abweisen und reiche Ehrengeschenke für die Heimreise mitgeben.",
        "consequenceText": {
          "unterstufe": "Das Völkerrecht wird gewahrt, doch der Großkönig sieht die Ablehnung als Kriegserklärung an.",
          "mittelstufe": "Besonnene Diplomatie verschafft Zeit, verhindert aber nicht die Ausrüstung der persischen Invasionsflotte.",
          "oberstufe": "Formaler diplomatischer Anstand wahrt das Gesicht, wird am persischen Hof jedoch als Zeichen von Schwäche gewertet."
        },
        "statChanges": { "goetter": 5, "priester": 10, "adel": -5, "volk": 5 }
      },
      {
        "id": "B",
        "label": "Die Gesandten empört in die Hinrichtungsschlucht (Barathr...",
        "description": "Die Gesandten empört in die Hinrichtungsschlucht (Barathron) stürzen: 'Dort habt ihr Erde und Wasser!'",
        "consequenceText": {
          "unterstufe": "Ein Aufschrei der Entschlossenheit geht durch Athen! Es gibt kein Zurück mehr – nur noch Sieg oder Untergang.",
          "mittelstufe": "Bruch des Gesandtenrechts schweißt die Bürgerschaft fanatisch zusammen, macht aber jede Friedensverhandlung unmöglich.",
          "oberstufe": "Radikaler Tabubruch signalisiert unbedingten Widerstandswillen und zwingt die gesamte Bürgerschaft zum totalen Krieg."
        },
        "statChanges": { "goetter": -15, "priester": -10, "adel": 20, "volk": 20 }
      },
      {
        "id": "C",
        "label": "Sofort einen Eilboten (Hemerodromos) nach Sparta schicken...",
        "description": "Sofort einen Eilboten (Hemerodromos) nach Sparta schicken, um das versprochene Schutzbündnis einzufordern.",
        "consequenceText": {
          "unterstufe": "Der Läufer Pheidippides rennt Tag und Nacht über 240 Kilometer durch das Gebirge nach Sparta!",
          "mittelstufe": "Sparta sagt Hilfe zu, zögert den Abmarsch jedoch wegen eines religiösen Mondfestes (Karneia) um Tage hinaus.",
          "oberstufe": "Panhellenische Bündnispolitik stößt an die Grenzen sakraler spartanischer Ritualvorschriften."
        },
        "statChanges": { "goetter": 10, "priester": 10, "adel": 10, "volk": 5 }
      },
      {
        "id": "D",
        "label": "Den kleinen Nachbarstaat Plataiai als treue Bundesgenosse...",
        "description": "Den kleinen Nachbarstaat Plataiai als treue Bundesgenossen ehren und ihnen ewigen Bürgerschutz garantieren.",
        "consequenceText": {
          "unterstufe": "Tausend tapfere Krieger aus Plataiai marschieren heran. Als einzige Stadt Griechenlands stehen sie treu zu Athen!",
          "mittelstufe": "Die heroische Loyalität der Plataier stärkt den linken Flügel der Phalanx entscheidend und rührt ganz Athen.",
          "oberstufe": "Waffenbrüderschaft begründet eine historische Symmachie, die den Mut der athenischen Bürger vervielfacht."
        },
        "statChanges": { "goetter": 20, "priester": 5, "adel": 20, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Erde und Wasser",
      "term": "Erde und Wasser",
      "explanation": {
        "unterstufe": "Die persische Formel für die vollständige Unterwerfung. Wer dem persischen König eine Handvoll Heimaterde und Wasser überreichte, gab sein Land bedingungslos auf.",
        "mittelstufe": "Die Spartaner warfen die Gesandten in einen tiefen Brunnen und spotteten: 'Schöpft euch euer Wasser und eure Erde selbst herauf!'",
        "oberstufe": "Das Ritual symbolisierte die Oberhoheit des Großkönigs über die Elemente des Kosmos, was dem griechischen Freiheitsbegriff diametral widersprach."
      },
      "curiosityFact": "Der Bote Pheidippides lief die 246 Kilometer von Athen nach Sparta in unter 36 Stunden zu Fuß durch unwegsames Felsengebirge!"
    }
  },

  {
    "id": "gre_r10",
    "roundNumber": 10,
    "locationKey": "schlacht_marathon",
    "locationName": "Ebene von Marathon (September 490 v. Chr.)",
    "milestoneTitle": "Runde 10: Der Laufschritt bei Marathon",
    "imagePath": "/assets/greece_station_05.jpg",
    "hotspots": [
      { "id": "hs_r10_phalanx", "x": 40, "y": 55, "label": "Die Hoplitenphalanx", "description": "Schild an Schild stürmen 10.000 Athener und 1.000 Plataier im vollen Laufschritt voran.", icon: "🛡️" },
      { "id": "hs_r10_bogen", "x": 75, "y": 45, "label": "Persische Bogenschützen", "description": "Ihre Pfeilhagel verfehlen die Hopliten, weil die Griechen das Todesfeld im Sprint überwinden.", icon: "🏹" },
      { "id": "hs_r10_graeber", "x": 18, "y": 70, "label": "Der Soros (Grabhügel)", "description": "Der monumentale Hügel, unter dem die 192 gefallenen athenischen Helden direkt vor Ort bestattet wurden.", icon: "🏺" }
    ],
    "situation": {
      "unterstufe": "September 490 v. Chr.: In der Bucht von Marathon sind 25.000 Perser gelandet. Die Spartaner sind wegen ihres Mondfestes noch nicht da. Feldherr Miltiades weiß: Wenn die persischen Bogenschützen einschießen, ist alles verloren. Er gibt den unfassbaren Befehl: 'Phalanx im Laufschritt vorwärts!' Mit dröhnenden Schilden stürmen die Griechen die letzten 1.500 Meter im Sprint auf den Feind zu. Wie führst du den Ansturm?",
      "mittelstufe": "Die Taktik von Miltiades ging in die Militärgeschichte ein: Er schwächte bewusst das Zentrum und verstärkte beide Flügel. Als die Perser das Zentrum eindrückten, klappten die Flügel wie eine Zange zu. Der Jubel über den Sieg rettete die junge Demokratie vor der Vernichtung.",
      "oberstufe": "Marathon war der erste Beweis für die operative Überlegenheit der schweren Bürgerhopliten gegenüber asiatischen Kontingenten. Das Selbstbewusstsein der 'Marathonomachoi' begründete den athenischen Patriotismus und sicherte das Überleben des demokratischen Experiments."
    },
    "hefterEintrag": "Schlacht bei Marathon (490 v. Chr.): Die Athener besiegten die persische Übermacht durch den überraschenden Sturmlauf der Hoplitenphalanx. Athen rettete damit seine Unabhängigkeit.",
    "choices": [
      {
        "id": "A",
        "label": "Im Schutz der Nacht angreifen, um das Überraschungsmoment...",
        "description": "Im Schutz der Nacht angreifen, um das Überraschungsmoment voll auszunutzen.",
        "consequenceText": {
          "unterstufe": "In der Dunkelheit bricht Verwirrung aus. Einige Schilde kollidieren, doch die persischen Wachen geraten in Panik.",
          "mittelstufe": "Nächtlicher Ansturm minimiert Pfeilverluste, erschwert aber die taktische Koordination der Phalanxflügel.",
          "oberstufe": "Riskanter Nachtangriff bricht die persische Ordnung, fordert jedoch Opfer durch Friendly Fire."
        },
        "statChanges": { "goetter": -5, "priester": -5, "adel": 15, "volk": 10 }
      },
      {
        "id": "B",
        "label": "Die Flanken der Phalanx doppelt tief staffeln und die Per...",
        "description": "Die Flanken der Phalanx doppelt tief staffeln und die Perser in eine Zange nehmen.",
        "consequenceText": {
          "unterstufe": "Miltiades' genialer Plan geht auf! Die Flügel zermalmen die persischen Truppen und treiben sie ins Meer.",
          "mittelstufe": "Die klassische Umfassungstaktik führt zur Vernichtung der persischen Landungstruppen bei minimalen eigenen Verlusten.",
          "oberstufe": "Taktisches Meisterstück: Schwaches Zentrum fängt den Stoß ab, starke Flügel kesseln das persische Elitekorps ein."
        },
        "statChanges": { "goetter": 15, "priester": 10, "adel": 20, "volk": 15 }
      },
      {
        "id": "C",
        "label": "Sofort nach dem Sieg den Eilschritt zurück nach Athen bef...",
        "description": "Sofort nach dem Sieg den Eilschritt zurück nach Athen befehlen, da die persische Flotte die ungeschützte Stadt ansegelt.",
        "consequenceText": {
          "unterstufe": "Völlig erschöpft erreichen die Hopliten noch vor den persischen Schiffen die Mauern Athens. Die Flotte dreht ab!",
          "mittelstufe": "Der legendäre Gewaltmarsch vereitelt die persische Landung am Phaleron und sichert den Gesamtsieg.",
          "oberstufe": "Operativer Parforce-Rückmarsch der Bürgerwehr verhindert den persischen Coup de Main auf die unbefestigte Stadt."
        },
        "statChanges": { "goetter": 10, "priester": 5, "adel": 15, "volk": 20 }
      },
      {
        "id": "D",
        "label": "Einen monumentalen Grabhügel (Soros) direkt auf dem Schla...",
        "description": "Einen monumentalen Grabhügel (Soros) direkt auf dem Schlachtfeld errichten und die 192 Gefallenen als ewige Helden ehren.",
        "consequenceText": {
          "unterstufe": "Der Grabhügel von Marathon wird zum Heiligtum ganz Griechenlands. Tränen des Stolzes füllen die Augen der Bürger!",
          "mittelstufe": "Die Bestattung vor Ort bricht mit der Tradition und begründet den legendären Mythos der 'Kämpfer von Marathon'.",
          "oberstufe": "Stiftung des heroischen Staatskults der Marathonomachoi als unsterbliches Vorbild staatsbürgerlicher Opferbereitschaft."
        },
        "statChanges": { "goetter": 20, "priester": 15, "adel": 20, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Der Marathonlauf",
      "term": "Der Marathonlauf",
      "explanation": {
        "unterstufe": "Der Sage nach lief der Bote Eucles nach der Schlacht die rund 40 Kilometer nach Athen, rief auf dem Marktplatz 'Freut euch, wir haben gesiegt!' und brach tot zusammen.",
        "mittelstufe": "Zur Erinnerung an diese Tat wurde bei den ersten modernen Olympischen Spielen 1896 in Athen der Marathonlauf über genau diese historische Distanz erfunden.",
        "oberstufe": "Der Marathonlauf ist das weltweite Symbol für zähe Ausdauer und die Bereitschaft, für die Freiheit der Gemeinschaft bis an die absolute Grenze zu gehen."
      },
      "curiosityFact": "Bei der Schlacht fielen nur 192 athenische Bürger, während die Perser über 6.400 Krieger und 7 Schiffe verloren!"
    }
  },

  // =========================================================================
  // STATION 6: Die Thermopylen – König Leonidas & die 300 (480 v. Chr.)
  // Bild: /assets/greece_station_06.jpg
  // =========================================================================
  {
    "id": "gre_r11",
    "roundNumber": 11,
    "locationKey": "thermopylen_engpass",
    "locationName": "Der Engpass der Thermopylen (August 480 v. Chr.)",
    "milestoneTitle": "Runde 11: An den Heißen Quellen – Die 300 Spartiaten",
    "imagePath": "/assets/greece_station_06.jpg",
    "hotspots": [
      { "id": "hs_r11_leonidas", "x": 48, "y": 55, "label": "König Leonidas I.", "description": "Der spartanische Heerkönig führt seine 300 Leibwächter an, die alle bereits Söhne gezeugt haben.", icon: "👑" },
      { "id": "hs_r11_mauer", "x": 25, "y": 65, label: "Die phokische Wehrmauer", "description": "Antike Steinmauer, die den nur wenige Meter breiten Engpass zwischen Felswand und Meer riegelt.", icon: "🧱" },
      { "id": "hs_r11_unsterbliche", "x": 75, "y": 50, label: "Die 'Unsterblichen'", "description": "Die 10.000 Elite-Leibgardisten des Großkönigs Xerxes mit silbernen Granatäpfeln an den Speeren.", icon: "⚔️" }
    ],
    "situation": {
      "unterstufe": "Zehn Jahre nach Marathon kehren die Perser zurück – diesmal mit Großkönig Xerxes und einer gigantischen Armee! Um Griechenland Zeit für die Flotte zu verschaffen, zieht Spartas König Leonidas mit nur 300 Elitekriegern und wenigen Bundesgenossen an den Engpass der Thermopylen. Zwischen steilem Fels und Meer ist der Weg so schmal, dass nur ein Wagen hindurchpasst. Xerxes fordert: 'Gebt eure Waffen ab!' Leonidas antwortet unsterblich: 'Molon labe' – 'Komm und hol sie dir!' Wie organisierst du die Abwehr?",
      "mittelstufe": "Am Engpass der Thermopylen verpuffte die persische Zahlenübermacht. Die spartanische Phalanx stand wie eine Bronzemauer. Zwei Tage lang bissen sich selbst die königlichen 'Unsterblichen' die Zähne an den Schilden aus. Doch wie hältst du die Moral aufrecht, als die Pfeile die Sonne verdunkeln?",
      "oberstufe": "Strategisch war die Verteidigung der Thermopylen eine Verzögerungsoperation zur Deckung der Flotte am Kap Artemision. Psychologisch wuchs das Gefecht zum Gründungsmythos abendländischer Wehrhaftigkeit gegen Despotie heran."
    },
    "hefterEintrag": "Schlacht an den Thermopylen (480 v. Chr.): König Leonidas und 300 Spartiaten hielten tagelang den schmalen Engpass gegen das persische Riesenheer, um Griechenland Zeit zur Rüstung zu verschaffen.",
    "choices": [
      {
        "id": "A",
        "label": "Den Kriegern zurufen: 'Die Perser schießen so viele Pfeil...",
        "description": "Den Kriegern zurufen: 'Die Perser schießen so viele Pfeile, dass sie die Sonne verdunkeln!' und lachen: 'Herrlich, dann kämpfen wir eben im Schatten!'",
        "consequenceText": {
          "unterstufe": "Schallendes Gelächter geht durch die spartanischen Reihen. Furcht vor dem Tod gibt es hier nicht mehr!",
          "mittelstufe": "Der berühmte Ausspruch des Dienekes bricht jede Panik und erfüllt die Krieger mit heiterer Todesverachtung.",
          "oberstufe": "Lakonischer Fatalismus und Humor als wirksamste psychologische Waffen gegen überwältigende Feindübermacht."
        },
        "statChanges": { "goetter": 15, "priester": 5, "adel": 20, "volk": 10 }
      },
      {
        "id": "B",
        "label": "Verstärkung von den thebanischen und phokischen Bundesgen...",
        "description": "Verstärkung von den thebanischen und phokischen Bundesgenossen anfordern, um die Phalanx aufzufüllen.",
        "consequenceText": {
          "unterstufe": "Die Linien werden dichter, doch das Misstrauen zwischen Spartiaten und zögerlichen Nachbarstädten wächst.",
          "mittelstufe": "Mehr Schilde an der Mauer, doch einige Bundestruppen blicken ängstlich auf Fluchtwege im Hinterland.",
          "oberstufe": "Heterogene Truppenzusammensetzung erschwert das blinde Einvernehmen der gedrillten lakedaimonischen Phalanx."
        },
        "statChanges": { "goetter": -5, "priester": 5, "adel": 10, "volk": -5 }
      },
      {
        "id": "C",
        "label": "Täuschende Scheinrückzüge anwenden: Zurückweichen vortäus...",
        "description": "Täuschende Scheinrückzüge anwenden: Zurückweichen vortäuschen und die stürmenden Perser dann zerschellen lassen.",
        "consequenceText": {
          "unterstufe": "Die Perser wittern leichte Beute, rennen ungeordnet vor – und rennen direkt in die blitzschnell gewendete Phalanx!",
          "mittelstufe": "Meisterhafte Bewegungskontrolle: Tausende persische Angreifer fallen der taktischen Falle zum Opfer.",
          "oberstufe": "Disziplinierte Phalanxtäuschung demonstriert die professionelle Überlegenheit über unstrukturierte Heeresmassen."
        },
        "statChanges": { "goetter": 10, "priester": 10, "adel": 20, "volk": 15 }
      },
      {
        "id": "D",
        "label": "Den Bergpfad Anopaia mit den loyalen Phokern lückenlos be...",
        "description": "Den Bergpfad Anopaia mit den loyalen Phokern lückenlos besetzen lassen, um jede Umgehung im Rücken zu verhindern.",
        "consequenceText": {
          "unterstufe": "Die Flanke im Gebirge ist gesichert! Jeder persische Späher wird frühzeitig im Wald abgefangen.",
          "mittelstufe": "Vorausschauende Sicherung des geheimen Ziegenpfades verhindert zunächst die tödliche Einkesselung.",
          "oberstufe": "Taktische Rundumsicherung schließt die einzige geografische Schwachstelle der Thermopylen-Stellung."
        },
        "statChanges": { "goetter": 15, "priester": 10, "adel": 15, "volk": 15 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Molon Labe",
      "term": "Molon Labe",
      "explanation": {
        "unterstufe": "Griechisch für 'Komm und hol sie dir!' – die trotzige Antwort von König Leonidas, als Xerxes verlangte, die Waffen niederzulegen.",
        "mittelstufe": "Dieser Ausruf wurde zum weltweiten Symbol für den unerschütterlichen Widerstand gegen eine erdrückende Übermacht.",
        "oberstufe": "Die Formel fasst das spartanische Gesetz zusammen: Ein Spartiat weicht niemals zurück und ergibt sich niemals lebend."
      },
      "curiosityFact": "Leonidas wählte für die Thermopylen nur Männer aus, die bereits Söhne hatten – damit keine spartanische Familie durch seinen Tod für immer ausstarb!"
    }
  },

  {
    "id": "gre_r12",
    "roundNumber": 12,
    "locationKey": "thermopylen_heldentod",
    "locationName": "Der Kolonos-Hügel bei den Thermopylen (August 480 v. Chr.)",
    "milestoneTitle": "Runde 12: Der Verrat des Ephialtes & das Denkmal",
    "imagePath": "/assets/greece_station_06.jpg",
    "hotspots": [
      { "id": "hs_r12_loewe", "x": 50, "y": 60, "label": "Der steinerne Löwe", "description": "Denkmal für König Leonidas am Kolonos-Hügel, wo die letzten Krieger fielen.", icon: "🦁" },
      { "id": "hs_r12_stein", "x": 25, "y": 70, label: "Die Grabinschrift des Simonides", "description": "'Wanderer, kommst du nach Sparta, verkündige dorten, du habest uns hier liegen gesehn, wie das Gesetz es befahl.'", icon: "📜" },
      { "id": "hs_r12_pfad", "x": 80, "y": 30, label: "Der geheime Bergpfad", "description": "Hier führte der Verräter Ephialtes die persische Garde des Nachts durch die Eichenwälder in den Rücken der Griechen.", icon: "🥾" }
    ],
    "situation": {
      "unterstufe": "Am dritten Tag geschieht das Furchtbare: Ein einheimischer Hirte namens Ephialtes verrät den Persern für Gold den geheimen Bergpfad durch die Wälder. Als die Wachen im Morgengrauen den Feind im Rücken bemerken, weiß Leonidas, dass alles verloren ist. Er schickt alle Bundesgenossen nach Hause, um ihr Leben zu retten. Er selbst bleibt mit seinen 300 Spartiaten und 700 Thespiern, um den Rückzug zu decken. Wie begegnest du dem unausweichlichen Schicksal?",
      "mittelstufe": "Leonidas' Selbstopfer war kein sinnloser Tod, sondern ein berechneter Fanal. Das Opfer sicherte den geordneten Rückzug der griechischen Hauptarmee und entfachte einen heiligen Zorn in ganz Hellas. Auf dem Kolonos-Hügel kämpften die verbliebenen Krieger, als ihre Lanzen brachen, mit Schwertern, Fäusten und Zähnen weiter.",
      "oberstufe": "Das Thermopylen-Opfer begründete die ethische Norm der bedingungslosen Hingabe an die Polis. Das Epigramm des Simonides wurde zum berühmtesten Grabgedicht der Weltgeschichte und definierte Pflichtgefühl als höchste Bürgertugend."
    },
    "hefterEintrag": "Der Heldentod der 300 an den Thermopylen wurde zum weltweiten Symbol für Tapferkeit und Pflichterfüllung: 'Wanderer, kommst du nach Sparta, verkündige dorten...'",
    "choices": [
      {
        "id": "A",
        "label": "Den Verräter Ephialtes vor dem persischen Großkönig öffen...",
        "description": "Den Verräter Ephialtes vor dem persischen Großkönig öffentlich verfluchen und ein Kopfgeld auf ihn aussetzen.",
        "consequenceText": {
          "unterstufe": "Ephialtes flieht voll Furcht. Jahre später wird er erkannt und für seinen Verrat gerichtet.",
          "mittelstufe": "Die Ächtung des Verräters festigt die moralische Verachtung gegen Kollaborateure in ganz Griechenland.",
          "oberstufe": "Symbolische Ausgrenzung des Verräters schützt die ideologische Reinheit des Widerstandskampfes."
        },
        "statChanges": { "goetter": 10, "priester": 10, "adel": -5, "volk": 10 }
      },
      {
        "id": "B",
        "label": "Die thespischen Freiwilligen feierlich an die Seite Spart...",
        "description": "Die thespischen Freiwilligen feierlich an die Seite Spartas stellen, damit ihr Opfer niemals vergessen wird.",
        "consequenceText": {
          "unterstufe": "Nicht nur Sparta kämpft: 700 Bürger aus Thespiai bleiben freiwillig und sterben Seite an Seite mit Leonidas!",
          "mittelstufe": "Die Thespier beweisen, dass auch freie Bürgerstädte ohne Kriegerdrill zu übermenschlichem Mut fähig sind.",
          "oberstufe": "Historische Gerechtigkeit: Die Würdigung der thespischen Bürger bricht das exklusive spartanische Heldenmonopol."
        },
        "statChanges": { "goetter": 15, "priester": 5, "adel": 15, "volk": 20 }
      },
      {
        "id": "C",
        "label": "Bis zum letzten Atemzug um den Leichnam des gefallenen Kö...",
        "description": "Bis zum letzten Atemzug um den Leichnam des gefallenen Königs Leonidas ringen, damit er nicht geschändet wird.",
        "consequenceText": {
          "unterstufe": "Vier Mal schlagen die Spartaner die Perser zurück, bis sie den toten König bergen können. Wahre Treue bis in den Tod!",
          "mittelstufe": "Der heroische Kampf um den gefallenen König bindet tausende Perser und rettet den fliehenden Bundestruppen das Leben.",
          "oberstufe": "Archaisches Epos im Stile Homers: Der Kampf um den toten Fürsten mobilisiert letzte übermenschliche Kräfte."
        },
        "statChanges": { "goetter": 10, "priester": 15, "adel": 20, "volk": -5 }
      },
      {
        "id": "D",
        "label": "Die unsterbliche Inschrift des Simonides auf dem Steinden...",
        "description": "Die unsterbliche Inschrift des Simonides auf dem Steindenkmal meißeln lassen.",
        "consequenceText": {
          "unterstufe": "'Wanderer, kommst du nach Sparta...' – Noch 2.500 Jahre später lernen Schulkinder auf der ganzen Welt diese Zeilen!",
          "mittelstufe": "Die Verse des Simonides verewigen das Opfer als ewigen Sieg des Geistes über die rohe Übermacht.",
          "oberstufe": "Verdichtung von Erinnerungskultur in klassischer Dichtung: Ein Monument, das die moralische Vormachtstellung Spartas besiegelt."
        },
        "statChanges": { "goetter": 20, "priester": 15, "adel": 20, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Das Simonides-Epigramm",
      "term": "Das Simonides-Epigramm",
      "explanation": {
        "unterstufe": "Der berühmteste Grabspruch der Antike: 'Wanderer, kommst du nach Sparta, verkündige dorten, du habest uns hier liegen gesehn, wie das Gesetz es befahl.'",
        "mittelstufe": "Gedichtet vom Poeten Simonides von Keos. Es rühmt keine Einzeltat, sondern den schlichten Gehorsam gegenüber dem Gesetz der Polis.",
        "oberstufe": "Das Epigramm formuliert das Ideal der antiken Bürgergemeinschaft: Das Individuum findet seine höchste Erfüllung im Schutz des Ganzen."
      },
      "curiosityFact": "Der Name 'Ephialtes' wurde im Neugriechischen zum allgemeinen Wort für 'Albtraum' – so tief saß das Trauma des Verrats!"
    }
  },

  // =========================================================================
  // STATION 7: Die Seeschlacht bei Salamis – Die hölzernen Mauern (480 v. Chr.)
  // Bild: /assets/greece_station_07.jpg
  // =========================================================================
  {
    "id": "gre_r13",
    "roundNumber": 13,
    "locationKey": "delphi_hoelzerne_mauern",
    "locationName": "Die Akropolis in Flammen & der Rat der Flotte (September 480 v. Chr.)",
    "milestoneTitle": "Runde 13: Das Orakel der hölzernen Mauern",
    "imagePath": "/assets/greece_station_07.jpg",
    "hotspots": [
      { "id": "hs_r13_brand", "x": 75, "y": 30, "label": "Athen in Flammen", "description": "Xerxes hat das verlassene Athen eingenommen und die alten Tempel auf der Akropolis niedergebrannt.", icon: "🔥" },
      { "id": "hs_r13_themistokles", "x": 45, "y": 60, "label": "Themistokles im Kriegsrat", "description": "Der weitsichtige Politiker überzeugt die zweifelnden Peloponnesier, nicht zu fliehen, sondern bei Salamis zu fechten.", icon: "🗣️" },
      { "id": "hs_r13_trireme", "x": 20, "y": 70, "label": "Athenische Trireme", "description": "Mit drei Ruderreihen und Rammsporn aus gegossener Bronze – Athens 'hölzerne Mauer'.", icon: "⛵" }
    ],
    "situation": {
      "unterstufe": "Nach den Thermopylen flutet das persische Heer nach Attika. Die Bürger Athens müssen fliehen! Frauen und Kinder werden auf Inseln evakuiert, während Xerxes die Stadt und die Akropolis in Brand steckt. Doch der Politiker Themistokles erinnert an das Orakel von Delphi: 'Gott schenkt euch hölzerne Mauern, die unbesiegbar bleiben!' Themistokles weiß: Das Orakel meint keine Holzzäune, sondern die Schiffe der Flotte! Wie hältst du die verbündeten Kapitäne bei der Stange?",
      "mittelstufe": "Die Bundesgenossen aus Sparta und Korinth wollen mit ihren Schiffen fliehen, um die Landenge von Korinth zu befestigen. Doch Themistokles weiß: Auf dem offenen Meer vor dem Peloponnes wird die persische Übermacht die Griechen einkreisen und zersplittern. Nur in der engen Meerenge von Salamis haben die wendigen Triremen eine Chance. Er droht sogar: 'Wenn ihr flieht, segeln wir Athener nach Italien und gründen dort eine neue Stadt!'",
      "oberstufe": "Themistokles' maritimes Strategiekonzept basierte auf den Silberfunden von Laureion, die er gegen den Widerstand der Aristokratie in den Bau von 200 Triremen investiert hatte. Dies stärkte zugleich die unterste Klasse der Theten, die als Ruderer zum militärischen Rückgrat der Demokratie wurden."
    },
    "hefterEintrag": "Das Orakel von Delphi riet den Athenern, auf 'hölzerne Mauern' zu vertrauen. Themistokles erkannte, dass damit die Kriegsschiffe (Triremen) gemeint waren, und evakuierte ganz Athen auf die Flotte.",
    "choices": [
      {
        "id": "A",
        "label": "Dem korinthischen Flottenführer nachgeben und sich an die...",
        "description": "Dem korinthischen Flottenführer nachgeben und sich an die Landenge von Korinth zurückziehen.",
        "consequenceText": {
          "unterstufe": "Die Flotte zerstreut sich in alle Winde. Ohne geschützte Bucht werden die Schiffe leichte Beute der Perser.",
          "mittelstufe": "Rückzug zerstört das Bündnis: Athen ist verloren und die Peloponnesier werden vom offenen Meer her umsegelt.",
          "oberstufe": "Defensiver Partikularismus scheitert kläglich an der maritimen Überlegenheit der phönizischen Perserflotte."
        },
        "statChanges": { "goetter": -15, "priester": 5, "adel": -10, "volk": -15 }
      },
      {
        "id": "B",
        "label": "Einen geheimen Boten zu Xerxes schicken und vortäuschen, ...",
        "description": "Einen geheimen Boten zu Xerxes schicken und vortäuschen, die Griechen seien zerstritten und wollten fliehen.",
        "consequenceText": {
          "unterstufe": "Xerxes tappt voll in die Falle! Er lässt seine Schiffe nachts die Meerenge abriegeln – seine Ruderer sind todmüde.",
          "mittelstufe": "Themistokles' Kriegslist zwingt beide Seiten zur Schlacht in der Enge und nimmt den eigenen Verbündeten die Fluchtmöglichkeit.",
          "oberstufe": "Genialer diplomatischer Coup: Themistokles diktiert dem persischen Großkönig Ort und Stunde des entscheidenden Gefechts."
        },
        "statChanges": { "goetter": 15, "priester": -5, "adel": 20, "volk": 20 }
      },
      {
        "id": "C",
        "label": "Auf der Akropolis ausharren und die alten Holzzäune des T...",
        "description": "Auf der Akropolis ausharren und die alten Holzzäune des Tempels verteidigen.",
        "consequenceText": {
          "unterstufe": "Einige Priester und Alte bleiben stur auf dem Felsen und verbrennen im persischen Pfeilhagel. Ein furchtbares Schicksal.",
          "mittelstufe": "Wörtliche Orakeldeutung erweist sich als tödlicher Irrtum; die Heiligtümer gehen in Flammen auf.",
          "oberstufe": "Religiöser Fundamentalismus scheitert an militärischen Realitäten und führt zum Untergang der Tempelwächter."
        },
        "statChanges": { "goetter": -10, "priester": 15, "adel": -15, "volk": -10 }
      },
      {
        "id": "D",
        "label": "Die armen Ruderer (Theten) mit gleichen Bürgerrechten und...",
        "description": "Die armen Ruderer (Theten) mit gleichen Bürgerrechten und doppeltem Seesold für ihren Einsatz belohnen.",
        "consequenceText": {
          "unterstufe": "Mit brennendem Herzen greifen die Ruderer in die Riemen. Nicht Sklaven rudern hier, sondern freie Männer für ihre Heimat!",
          "mittelstufe": "Die Aufwertung der Theten macht die athenische Flotte unschlagbar und begründet die radikale Demokratie.",
          "oberstufe": "Sozialpolitische Emanzipation der Unterschicht: Wer mit den Riemen den Sieg erkämpft, fordert zu Recht volle politische Teilhabe."
        },
        "statChanges": { "goetter": 20, "priester": -5, "adel": 15, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Die Trireme (Dreiruderer)",
      "term": "Die Trireme (Dreiruderer)",
      "explanation": {
        "unterstufe": "Das schnellste Kriegsschiff der Antike. Auf drei Etagen saßen 170 Ruderer übereinander. Vorne am Bug saß ein spitzer Rammsporn aus massiver Bronze.",
        "mittelstufe": "Triremen schossen nicht mit Kanonen, sondern rammen feindliche Schiffe mit voller Wucht in die Seite, um sie zu versenken oder zu entern.",
        "oberstufe": "Der Bau und Unterhalt der Triremenflotte erforderte ungeheure Finanzmittel (Trierarchien durch vermögende Bürger) und schuf Athens Seeherrschaft."
      },
      "curiosityFact": "Eine Trireme erreichte beim Rammstoß Geschwindigkeiten von fast 10 Knoten (über 18 km/h) – angetrieben nur von der Muskelkraft freier athenischer Bürger!"
    }
  },

  {
    "id": "gre_r14",
    "roundNumber": 14,
    "locationKey": "seeschlacht_salamis",
    "locationName": "Meerenge von Salamis (28. September 480 v. Chr.)",
    "milestoneTitle": "Runde 14: Das Rammsporn-Konzert bei Salamis",
    "imagePath": "/assets/greece_station_07.jpg",
    "hotspots": [
      { "id": "hs_r14_ramme", "x": 45, "y": 65, "label": "Bronzerammsporn im Holz", "description": "Mit dumpfem Krachen bohrt sich der athenische Rammsporn in die Flanke einer phönizischen Galeere.", "icon": "💥" },
      { "id": "hs_r14_xerxes", "x": 80, "y": 20, "label": "Xerxes goldener Thron", "description": "Am Hang des Berges Aigaleo beobachtet der persische Großkönig entsetzt den Untergang seiner Flotte.", "icon": "👑" },
      { "id": "hs_r14_paian", "x": 20, "y": 55, "label": "Der Schlachtruf (Paian)", "description": "Vorwärts, Söhne der Hellenen! Befreit das Vaterland, befreit Kinder und Frauen, die Heiligtümer der Götter!", "icon": "🎺" }
    ],
    "situation": {
      "unterstufe": "28. September 480 v. Chr.: Der Morgen graut über der Meerenge von Salamis. Im engen Fahrwasser drängen sich 800 persische Schiffe – sie behindern sich gegenseitig und können kaum wenden! Da ertönt aus den Kehlen der Griechen der heilige Schlachtgesang (Paian). 370 wendige Triremen schießen vor. Wie steuerst du den Rammstoß ins Getümmel?",
      "mittelstufe": "Salamis war die größte Seeschlacht der Antike. Die Griechen nutzten den aufkommenden Morgensurfwasserwind, der die hohen persischen Schiffe querlegte. Rammstoß um Rammstoß zersplittern die Rumpfwände. Auf dem Felsen thront Xerxes mit Schreibern – doch statt Triumphen muss er notieren, wie seine Admirale im Meer ertrinken.",
      "oberstufe": "Mit der Niederlage bei Salamis verlor Xerxes die Seeherrschaft und die logistische Sicherung seines Riesenheeres. Aus Angst, die Griechen könnten die Brücken am Hellespont zerstören, trat er mit der Hauptmacht die Flucht nach Asien an. Europa war gerettet."
    },
    "hefterEintrag": "Seeschlacht bei Salamis (480 v. Chr.): In der engen Meerenge zerschellte die persische Riesenflotte an den wendigen griechischen Triremen. Es war der rettende Wendepunkt der Perserkriege.",
    "choices": [
      {
        "id": "A",
        "label": "Den Ruderern befehlen: 'Volle Kraft voraus auf die Ruderr...",
        "description": "Den Ruderern befehlen: 'Volle Kraft voraus auf die Ruderreihen des Feindes!' – um ihre Riemen abzuscheren.",
        "consequenceText": {
          "unterstufe": "Mit kreischendem Krachen brechen hunderte persische Ruder entzwei! Das feindliche Schiff treibt manövrierunfähig im Wasser.",
          "mittelstufe": "Das elegante 'Diekplus'-Manöver macht die persischen Flaggschiffe wehrlos, ohne das eigene Schiff zu gefährden.",
          "oberstufe": "Taktisches Scheren der Ruder beraubt den Gegner seiner kinetischen Energie und ermöglicht müheloses Entern."
        },
        "statChanges": { "goetter": 10, "priester": 5, "adel": 20, "volk": 15 }
      },
      {
        "id": "B",
        "label": "Athenische Hopliten an Bord mit Enterbrücken auf die pers...",
        "description": "Athenische Hopliten an Bord mit Enterbrücken auf die persischen Schiffe stürmen lassen.",
        "consequenceText": {
          "unterstufe": "Schwert und Schild entscheiden das Deckgefecht. Die schwer gepanzerten Griechen werfen die Feinde über Bord.",
          "mittelstufe": "Blutiger Nahkampf auf schwankenden Planken bringt den Sieg, kostet aber vielen tapferen Bürgern das Leben.",
          "oberstufe": "Klassisches Entergefecht nutzt die physische Überlegenheit der Hopliten, birgt jedoch Kenterrisiken."
        },
        "statChanges": { "goetter": -5, "priester": 10, "adel": 15, "volk": 5 }
      },
      {
        "id": "C",
        "label": "Nach dem Seesieg sofort die Insel Psyttaleia besetzen und...",
        "description": "Nach dem Seesieg sofort die Insel Psyttaleia besetzen und die dort gestrandeten persischen Adligen gefangen nehmen.",
        "consequenceText": {
          "unterstufe": "Feldherr Aristeides landet mit Bürgern und nimmt die Elitegarde des Großkönigs gefangen!",
          "mittelstufe": "Der Schlag auf Psyttaleia vollendet den Triumph und liefert wertvolle Geiseln für künftige Verhandlungen.",
          "oberstufe": "Bereinigung der Inselflanke eliminiert die letzte persische Operationsbasis vor dem athenischen Hafen."
        },
        "statChanges": { "goetter": 15, "priester": 10, "adel": 15, "volk": 10 }
      },
      {
        "id": "D",
        "label": "Den Dank an Athene und Poseidon mit einem erbeuteten Drei...",
        "description": "Den Dank an Athene und Poseidon mit einem erbeuteten Dreiruderer als Weihgeschenk in Delphi besiegeln.",
        "consequenceText": {
          "unterstufe": "Ganz Griechenland feiert den Sieg der Freiheit! Eine vergoldete Trireme wird als ewiges Denkmal gestiftet.",
          "mittelstufe": "Das Weihgeschenk festigt Athens Ruf als Vorkämpfer und Befreier der gesamten hellenischen Welt.",
          "oberstufe": "Panhellenische Monumentalisierung des Sieges begründet Athens moralischen Anspruch auf die Führung im Seebund."
        },
        "statChanges": { "goetter": 20, "priester": 15, "adel": 15, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Der Paian",
      "term": "Der Paian",
      "explanation": {
        "unterstufe": "Der feierliche Kampfgesang der Griechen vor der Schlacht. Er rief den Gott Apollon um Beistand an und vertrieb jede Angst aus den Herzen.",
        "mittelstufe": "Der Dichter Aischylos, der selbst bei Salamis mitkämpfte, beschrieb den Gesang: 'O Söhne Hellas', auf! Befreit die Heimat, befreit die Tempel eurer Götter!'",
        "oberstufe": "Der Paian war akustischer Ausdruck der staatbürgerlichen Harmonie und rhythmischer Taktgeber für Ruderschlag und Phalanxmarsch."
      },
      "curiosityFact": "Großkönig Xerxes floh nach der Schlacht so hastig nach Asien zurück, dass er aus Furcht vor griechischen Schiffen in einem einfachen Fischerboot den Hellespont überquerte!"
    }
  },

  // =========================================================================
  // STATION 8: Das Goldene Zeitalter – Perikles & die Akropolis (ca. 450 v. Chr.)
  // Bild: /assets/greece_station_08.jpg
  // =========================================================================
  {
    "id": "gre_r15",
    "roundNumber": 15,
    "locationKey": "perikles_diaeten",
    "locationName": "Die Pnyx unter Perikles (ca. 450 v. Chr.)",
    "milestoneTitle": "Runde 15: Taggelder für Bürger – Wahre Teilhabe",
    "imagePath": "/assets/greece_station_08.jpg",
    "hotspots": [
      { "id": "hs_r15_perikles", "x": 48, "y": 50, "label": "Perikles mit Helm", "description": "Der führende Staatsmann Athens trägt stets den Helm des Strategen, um eine Kopfform zu kaschieren.", icon: "🏛️" },
      { "id": "hs_r15_diaeten", "x": 25, "y": 65, label: "Taggelder (Diäten)", "description": "Erstmals erhalten Richter und Ratsherren zwei Obolen Entschädigung für ihren Verdienstausfall.", icon: "🪙" },
      { "id": "hs_r15_seebund", "x": 75, "y": 60, label: "Die Kasse von Delos", "description": "Silbermünzen der Bundesgenossen, die Athen zur Sicherung der Ägäis verwaltet – und selbst nutzt.", icon: "💰" }
    ],
    "situation": {
      "unterstufe": "Um 450 v. Chr. erlebt Athen unter Staatsmann Perikles seine glanzvollste Zeit. Doch Perikles bemerkt: Arme Bauern und Handwerker können nicht zur Bürgerversammlung kommen, weil sie sonst keinen Lohn für ihre Kinder verdienen! Kühn führt er 'Diäten' ein: Wer einen Tag lang als Richter dient oder im Rat sitzt, erhält Geld vom Staat. Der Adel schimpft über 'Verschwendung'. Wie verteidigst du diese Reform?",
      "mittelstufe": "Perikles vollendete die attische Demokratie: Durch die Einführung von Taggeldern (Misthoi) wurde Politik nicht länger zum Hobby reicher Müßiggänger. Auch der ärmste Tagelöhner konnte nun das Richteramt ausüben. Finanziert wurde dies maßgeblich aus den Beiträgen des Attischen Seebundes. Ist das gerechte Demokratie oder Ausbeutung der Bundesgenossen?",
      "oberstufe": "Struktureller Zusammenhang von innerer Demokratie und äußerem Imperialismus: Die Vollendung der Isonomie für alle Bürgerschichten war nur möglich, weil Athen den Delisch-Attischen Seebund in ein tributpflichtiges athenisches Seereich (Arche) transformiert hatte."
    },
    "hefterEintrag": "Unter Perikles (ab 450 v. Chr.) erhielten Bürger erstmals Taggelder (Diäten) für politische Ämter. So konnten auch arme Handwerker und Bauern aktiv an der Demokratie teilhaben.",
    "choices": [
      {
        "id": "A",
        "label": "Die Taggelder nur für die 6.000 Geschworenen des Volksger...",
        "description": "Die Taggelder nur für die 6.000 Geschworenen des Volksgerichts (Heliaia) auszahlen, nicht für die Versammlung.",
        "consequenceText": {
          "unterstufe": "Die Gerichte sind voll von gewissenhaften Bürgern, während die Staatskasse geschont wird.",
          "mittelstufe": "Solide Justizreform stärkt den Rechtsstaat, hält aber die Kosten im erträglichen Rahmen.",
          "oberstufe": "Fokussierung auf die Rechtspflege sichert die Unabhängigkeit der Volksrichter von adliger Schmiergeldzahlung."
        },
        "statChanges": { "goetter": 10, "priester": 5, "adel": 5, "volk": 15 }
      },
      {
        "id": "B",
        "label": "Den Schatz des Seebundes von der heiligen Insel Delos dir...",
        "description": "Den Schatz des Seebundes von der heiligen Insel Delos direkt nach Athen auf die Akropolis verlegen.",
        "consequenceText": {
          "unterstufe": "Tausende Silbertalente liegen nun sicher in Athen. Die Stadt wird zur reichsten Metropole der Welt!",
          "mittelstufe": "Athen verfügt frei über die Bundeskasse, doch die Bundesgenossen fühlen sich zu rechtlosen Untertanen degradiert.",
          "oberstufe": "Offener Übergang von der freiwilligen Eidgenossenschaft zum athenischen Hegemonial-Imperium."
        },
        "statChanges": { "goetter": -15, "priester": 15, "adel": 15, "volk": 20 }
      },
      {
        "id": "C",
        "label": "Ein Bürgerrechtsgesetz erlassen: Nur wer von zwei athenis...",
        "description": "Ein Bürgerrechtsgesetz erlassen: Nur wer von zwei athenischen Eltern abstammt, ist Vollbürger.",
        "consequenceText": {
          "unterstufe": "Das Bürgerrecht wird zum kostbaren Schatz. Fremde Händler und Metöken sind empört.",
          "mittelstufe": "Schutz des Bürgerprivilegs vor Überfremdung, schließt aber treue Zuwanderer von der Mitbestimmung aus.",
          "oberstufe": "Exklusivität des Demos: Die Perikleische Bürgerrechtsreform verengt den Souverän zur privilegierten Kaste."
        },
        "statChanges": { "goetter": 10, "priester": -5, "adel": 10, "volk": -10 }
      },
      {
        "id": "D",
        "label": "Freien Eintritt für alle Bürger zu den großen Theaterfest...",
        "description": "Freien Eintritt für alle Bürger zu den großen Theaterfestspielen der Dionysien stiften (Theorikon).",
        "consequenceText": {
          "unterstufe": "Jeder Bürger kann die großen Tragödien von Sophokles sehen! Bildung und Kultur werden zum Allgemeingut aller.",
          "mittelstufe": "Das Theater wird zur moralischen und philosophischen Schule der Bürgerschaft – Demokratie durch Bildung.",
          "oberstufe": "Kulturpolitische Pionierleistung: Theater als staatlich geförderter Reflexionsraum über Macht, Hybris und Gerechtigkeit."
        },
        "statChanges": { "goetter": 20, "priester": 10, "adel": 15, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Die Diäten (Misthoi)",
      "term": "Die Diäten (Misthoi)",
      "explanation": {
        "unterstufe": "Geldentschädigung vom Staat für einen Arbeitstag, an dem ein Bürger ein politisches Amt ausübt. Bis heute erhalten Abgeordnete im Bundestag Diäten!",
        "mittelstufe": "Ohne Diäten konnten nur Reiche in die Politik gehen. Perikles machte mit 2 bis 3 Obolen pro Tag Politik zum Beruf auch für den Ärmsten.",
        "oberstufe": "Diäten waren die unverzichtbare materielle Voraussetzung für das Funktionieren einer direkten Präsenzdemokratie."
      },
      "curiosityFact": "Perikles wurde 15 Jahre lang jedes Jahr vom Volk wiedergewählt – allein durch die Kraft seiner unbestechlichen Reden und Ideen!"
    }
  },

  {
    "id": "gre_r16",
    "roundNumber": 16,
    "locationKey": "bau_parthenon",
    "locationName": "Die Akropolis von Athen (ca. 440 v. Chr.)",
    "milestoneTitle": "Runde 16: Der Bau des Parthenon – Marmor & Maße",
    "imagePath": "/assets/greece_station_08.jpg",
    "hotspots": [
      { "id": "hs_r16_parthenon", "x": 55, "y": 45, label: "Der Parthenon-Tempel", "description": "Meisterwerk der dorischen Architektur aus weißem pentelischem Marmor für die Stadtgöttin Athene.", icon: "🏛️" },
      { "id": "hs_r16_phidias", "x": 28, "y": 65, label: "Bildhauer Phidias & die Gold-Elfenbein-Statue", "description": "Die 12 Meter hohe Athena Parthenos mit Goldplatten, die im Notfall als Finanzreserve abnehmbar sind.", icon: "🗿" },
      { "id": "hs_r16_kran", "x": 78, "y": 50, label: "Holzkräne & Flaschenzüge", "description": "Antike Hebegeräte bewegen bis zu 10 Tonnen schwere Marmorblöcke mit Millimeterpräzision.", icon: "🏗️" }
    ],
    "situation": {
      "unterstufe": "Auf dem heiligen Burgberg soll das größte Bauwerk der Antike entstehen: der Parthenon! Perikles beauftragt die Architekten Iktinos und Kallikrates sowie den Bildhauer Phidias. Tausende Steinmetze, Bildhauer, Zimmerleute und Fuhrleute finden auf Jahre hinaus Lohn und Brot. Aus dem Pentelikon-Gebirge werden weiße Marmorblöcke herangeschafft. Doch Kritiker murren: 'Athen putzt sich heraus wie eine eitle Frau!' Wie rechtfertigst du das Riesenprojekt?",
      "mittelstufe": "Der Bau der Akropolis war ein gigantisches staatliches Konjunkturprogramm. Zugleich demonstrierte der Parthenon die Herrlichkeit Athens gegenüber ganz Griechenland. Die dorischen Säulen sind mit bloßem Auge unmerklich nach innen geneigt und bauchig gewölbt (Entasis), um für das menschliche Auge vollkommen gerade zu wirken. Wie verteilst du die Aufträge?",
      "oberstufe": "Synthese aus sakraler Frömmigkeit, imperialem Selbstbewusstsein und bürgerlicher Vollbeschäftigung. Die Athena Parthenos barg 1.100 Kilogramm reines Gold als sakral-staatliche Notfallreserve. Der Bau zementierte Athens Rolle als 'Schule Griechenlands'."
    },
    "hefterEintrag": "Der Bau des Parthenon auf der Akropolis (ab 447 v. Chr.) unter Perikles schuf Arbeitsplätze für tausende Handwerker und machte Athen zur strahlenden Kulturhauptstadt der antiken Welt.",
    "choices": [
      {
        "id": "A",
        "label": "Strenge Buchprüfung über jedes Pfund Gold und Elfenbein a...",
        "description": "Strenge Buchprüfung über jedes Pfund Gold und Elfenbein auf steinernen Stelen öffentlich eingravieren lassen.",
        "consequenceText": {
          "unterstufe": "Jeder Bürger kann nachlesen, wo jede Drachme hinging. Kein Neider kann Korruption vorwerfen!",
          "mittelstufe": "Maximale Transparenz sichert das Vertrauen des Volkes und schützt die Baumeister vor Verleumdungsklagen.",
          "oberstufe": "Bürgerliche Rechenschaftslegung (Apophora) auf Stein als vorbildliche demokratische Haushaltskontrolle."
        },
        "statChanges": { "goetter": 15, "priester": 5, "adel": 10, "volk": 20 }
      },
      {
        "id": "B",
        "label": "Die Goldplatten der Athena-Statue abnehmbar konstruieren,...",
        "description": "Die Goldplatten der Athena-Statue abnehmbar konstruieren, um im Kriegsfall flüssige Mittel zu haben.",
        "consequenceText": {
          "unterstufe": "Phidias konstruiert das Gold so, dass es im Notfall als Schatzreserve eingeschmolzen werden kann.",
          "mittelstufe": "Kluge ökonomische Weitsicht verbindet Frömmigkeit mit der ultimativen Kriegsreserve der Polis.",
          "oberstufe": "Funktionale Sakralökonomie: Die Götterstatue fungiert als letzte unantastbare Staatsbank Athens."
        },
        "statChanges": { "goetter": 10, "priester": 15, "adel": 15, "volk": 5 }
      },
      {
        "id": "C",
        "label": "Die Bundesgenossen des Seebundes zwingen, jährliche Opfer...",
        "description": "Die Bundesgenossen des Seebundes zwingen, jährliche Opfertiere und Weihegaben zur Akropolis zu entsenden.",
        "consequenceText": {
          "unterstufe": "Die Panathenäischen Festspiele glänzen im Prunk, doch der Groll der unterjochten Städte vertieft sich.",
          "mittelstufe": "Athen demonstriert imperiale Macht, isoliert sich jedoch zunehmend diplomatisch in Griechenland.",
          "oberstufe": "Erpresserische Kultverpflichtung schürt den Hass der Alliierten und nährt den Nährboden für Aufstände."
        },
        "statChanges": { "goetter": -15, "priester": 15, "adel": 15, "volk": -10 }
      },
      {
        "id": "D",
        "label": "Die optischen Korrekturen (Entasis & Krümmung) perfektion...",
        "description": "Die optischen Korrekturen (Entasis & Krümmung) perfektionieren, um ewige architektonische Vollkommenheit zu schaffen.",
        "consequenceText": {
          "unterstufe": "Der Tempel wirkt lebendig, leicht und majestätisch wie ein atmendes Wunderwerk aus weißem Stein!",
          "mittelstufe": "Die optische Raffinesse der athenischen Baumeister setzt Maßstäbe, die die Architektur für Jahrtausende prägen.",
          "oberstufe": "Triumph der Mathematik und Ästhetik: Die Akropolis wird zur unvergänglichen Ikone abendländischer Kultur."
        },
        "statChanges": { "goetter": 20, "priester": 10, "adel": 15, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Die Entasis",
      "term": "Die Entasis",
      "explanation": {
        "unterstufe": "Ein genialer Trick der griechischen Baumeister: Säulen wurden in der Mitte ganz leicht bauchig gebaut. Wären sie schnurgerade, würden sie für das menschliche Auge dünn und hohl wirken!",
        "mittelstufe": "Am Parthenon gibt es fast keine einzige wirklich gerade Linie: Sogar die Stufen des Bodens sind zur Mitte hin um wenige Zentimeter aufgewölbt.",
        "oberstufe": "Die Verbindung von mathematischer Präzision und optischer Täuschung erzeugte jene organische Harmonie, die als Inbegriff der Klassik gilt."
      },
      "curiosityFact": "Der Parthenon wurde ohne jeden Mörtel erbaut – die tonnenschweren Marmorquader hielten allein durch perfekte Passgenauigkeit und eiserne Dübel mit Blei!"
    }
  },

  // =========================================================================
  // STATION 9: Der Peloponnesische Krieg – Der Bruderkampf (431 v. Chr.)
  // Bild: /assets/greece_station_09.jpg
  // =========================================================================
  {
    "id": "gre_r17",
    "roundNumber": 17,
    "locationKey": "peloponnes_krieg_ausbruch",
    "locationName": "Die Langen Mauern Athens (431 v. Chr.)",
    "milestoneTitle": "Runde 17: Die Langen Mauern & Spartas Einmarsch",
    "imagePath": "/assets/greece_station_09.jpg",
    "hotspots": [
      { "id": "hs_r17_mauern", "x": 45, "y": 60, "label": "Die Langen Mauern (Makra Teiche)", "description": "Vier Kilometer langer befestigter Korridor, der Athen sicher mit dem Hafen Piräus verbindet.", icon: "🧱" },
      { "id": "hs_r17_fluechtlinge", "x": 25, "y": 70, label: "Flüchtende Bauernfamilien", "description": "Zehntausende Landbewohner müssen ihre brennenden Höfe verlassen und lagern auf engstem Raum.", icon: "⛺" },
      { "id": "hs_r17_sparta_heer", "x": 80, "y": 35, label: "Spartas Heer in Attika", "description": "König Archidamos II. verwüstet die Olivenhaine und Weizenfelder vor den Toren der Stadt.", icon: "🔥" }
    ],
    "situation": {
      "unterstufe": "431 v. Chr.: Der verhängnisvolle Bruderkrieg bricht aus! Sparta fürchtet Athens wachsende Seemacht und marschiert mit seinen Peloponnesiern in Attika ein. Vor den Augen der Athener brennen die spartanischen Krieger die jahrhundertealten Olivenbäume und Dörfer nieder. Doch Perikles verbietet jeden Ausfall zu Lande: 'Spartas Phalanx ist zu stark! Zieht euch alle hinter die Langen Mauern zurück. Unsere Schiffe bringen uns Korn aus dem Schwarzen Meer!' Wie hältst du das verzweifelte Volk zurück?",
      "mittelstufe": "Der Peloponnesische Krieg (431–404 v. Chr.) war der antike 'Weltkrieg' zwischen der Seemacht Athen und der Landmacht Sparta. Perikles' Defensivstrategie war mathematisch kühl, aber psychologisch verheerend: Die Bauern mussten zusehen, wie ihr Lebenswerk zerstört wurde, während sie dicht gedrängt in Zelten und Weintürmen innerhalb der Stadtmauern hausten.",
      "oberstufe": "Thukydides analysierte die Kriegsursache messerscharf: Das unausweichliche Gesetz der Furcht (Thukydides-Falle). Das Anwachsen der athenischen Hegemonie flößte den Lakedaimoniern eine Existenzangst ein, die den Waffengang unausweichlich machte."
    },
    "hefterEintrag": "Der Peloponnesische Krieg (431–404 v. Chr.): Ein 27 Jahre währender Bruderkrieg zwischen Seemacht Athen und Landmacht Sparta, der die griechische Welt in den Ruin trieb.",
    "choices": [
      {
        "id": "A",
        "label": "Den wütenden Bauern nachgeben und mit der gesamten atheni...",
        "description": "Den wütenden Bauern nachgeben und mit der gesamten athenischen Phalanx zur Feldschlacht ausrücken.",
        "consequenceText": {
          "unterstufe": "Eine schwere Katastrophe! Gegen Spartas drillgeübte Berufskrieger hat die athenische Miliz keine Chance.",
          "mittelstufe": "Verheerende Niederlage im offenen Feld: Hunderte Bürger fallen und Athen verliert seine Landstreitmacht.",
          "oberstufe": "Emotional gesteuerter Strategiewechsel beweist die Richtigkeit von Perikles' ursprünglicher Vorsicht."
        },
        "statChanges": { "goetter": -15, "priester": -10, "adel": -20, "volk": -15 }
      },
      {
        "id": "B",
        "label": "Eisern an Perikles' Mauern-Strategie festhalten und mit d...",
        "description": "Eisern an Perikles' Mauern-Strategie festhalten und mit der Flotte die Küsten des Peloponnes verwüsten.",
        "consequenceText": {
          "unterstufe": "Athen bleibt uneinnehmbar! Während die Spartaner draußen schwitzen, stechen athenische Schiffe überraschend an Spartas Küsten zu.",
          "mittelstufe": "Asymmetrische Kriegsführung: Athens maritime Nadelstiche treffen Spartas Verbündete empfindlich.",
          "oberstufe": "Erfolgreiche Umsetzung der Perikleischen Ermattungsstrategie, zerrt jedoch an den Nerven der eingesperrten Bevölkerung."
        },
        "statChanges": { "goetter": 10, "priester": 5, "adel": 15, "volk": 10 }
      },
      {
        "id": "C",
        "label": "Getreidefrachter aus dem Schwarzen Meer und Ägypten mit S...",
        "description": "Getreidefrachter aus dem Schwarzen Meer und Ägypten mit Seesoldaten massiv sichern.",
        "consequenceText": {
          "unterstufe": "Die Getreideschiffe laufen sicher in den Piräus ein. Niemand muss hinter den Mauern hungern!",
          "mittelstufe": "Die Lebensader der Getreideroute über den Hellespont bleibt offen und sichert die Ernährung der Metropole.",
          "oberstufe": "Sicherung der maritimen Versorgungslogistik ist das Fundament athenischer Durchhaltefähigkeit."
        },
        "statChanges": { "goetter": 10, "priester": -5, "adel": 10, "volk": 20 }
      },
      {
        "id": "D",
        "label": "Friedensfühler nach Sparta ausstrecken und einen 30-jähri...",
        "description": "Friedensfühler nach Sparta ausstrecken und einen 30-jährigen Waffenstillstand auf Basis des Status quo vorschlagen.",
        "consequenceText": {
          "unterstufe": "Besonnene Bürger atmen auf, doch die Kriegstreiber auf beiden Seiten fordern den Kampf bis zum Letzten.",
          "mittelstufe": "Diplomatischer Vorstoß scheitert an Spartas Forderung, den Seebund sofort aufzulösen.",
          "oberstufe": "Fehlendes gegenseitiges Vertrauen und unversöhnliche Kriegsziele machen jeden frühen Kompromissfrieden zunichte."
        },
        "statChanges": { "goetter": 15, "priester": 10, "adel": -5, "volk": 10 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Die Langen Mauern",
      "term": "Die Langen Mauern",
      "explanation": {
        "unterstufe": "Zwei mächtige parallele Schutzmauern, die Athen mit seinem vier Kilometer entfernten Hafen Piräus verbanden. So konnte Athen selbst bei einer Belagerung niemals vom Meer abgeschnitten werden.",
        "mittelstufe": "Die Langen Mauern machten Athen quasi zu einer befestigten Insel auf dem Festland, die vollkommen über Schiffe versorgt werden konnte.",
        "oberstufe": "Militärisch ein Meisterwerk, hygienisch jedoch eine Todesfalle: Die Enge der hunderttausend Flüchtlinge bot Nährboden für Seuchen."
      },
      "curiosityFact": "Der berühmte Geschichtsschreiber Thukydides kämpfte selbst als Flottenkommandant im Krieg und schrieb das erste wissenschaftliche Geschichtswerk der Welt!"
    }
  },

  {
    "id": "gre_r18",
    "roundNumber": 18,
    "locationKey": "pest_in_athen",
    "locationName": "Die Straßen Athens während der Seuche (430 v. Chr.)",
    "milestoneTitle": "Runde 18: Die Pest in Athen & der Tod des Perikles",
    "imagePath": "/assets/greece_station_09.jpg",
    "hotspots": [
      { "id": "hs_r18_kranke", "x": 30, "y": 70, label: "Seuchenkranke an den Brunnen", "description": "Tausende Verzweifelte mit hohem Fieber und unstillbarem Durst stürzen sich in die öffentlichen Zisternen.", icon: "🤒" },
      { "id": "hs_r18_feuer", "x": 75, "y": 55, label: "Leichenverbrennungen", "description": "Tag und Nacht rauchen die Scheiterhaufen; die alten Bräuche der würdevollen Bestattung brechen zusammen.", icon: "🔥" },
      { "id": "hs_r18_perikles_tod", "x": 50, "y": 45, label: "Das Krankenbett des Perikles", "description": "Auch der große Staatsmann erliegt nach seinen Söhnen der Seuche – Athen verliert seinen weisen Steuermann.", icon: "🕊️" }
    ],
    "situation": {
      "unterstufe": "430 v. Chr.: Das Schrecklichste geschieht. Über Handelsschiffe aus Ägypten wird eine tödliche Seuche in den überfüllten Hafen Piräus eingeschleppt. Innerhalb von Wochen füllen sich die Gassen mit Sterbenden. Ein Drittel der Einwohner Athens kommt ums Leben! Alle Ordnung bricht zusammen, niemand achtet mehr auf Gesetze oder Götter. Schließlich stirbt auch Perikles an der Krankheit. Nun ergreifen skrupellose Demagogen wie Kleon das Wort. Wie bewahrst du den Rest an Menschlichkeit?",
      "mittelstufe": "Der Historiker Thukydides beschrieb die 'Pest von Athen' (vermutlich Typhus) als Zusammenbruch aller Sitten (Anomia). Die Menschen gaben sich hemmungslosem Vergnügen hin, weil niemand erwartete, den nächsten Tag zu erleben. Der Tod des Perikles hinterließ ein Machtvakuum, das von radikalen Scharfmachern gefüllt wurde.",
      "oberstufe": "Tiefgreifende Traumatisierung und soziologische Zersetzung des demokratischen Gemeinwesens. Der Verlust der charismatischen Integrationsfigur Perikles öffnete das Tor zur Pöbelherrschaft (Ochlokratie) und einer rücksichtslosen imperialen Kriegspolitik."
    },
    "hefterEintrag": "Die 'Pest von Athen' (430 v. Chr.) tötete ein Drittel der Bevölkerung, darunter Perikles. Die Tragödie führte zum Zerfall der Gesetze und lähmte Athens militärische Kraft.",
    "choices": [
      {
        "id": "A",
        "label": "Strenge Quarantäne über das Seuchenviertel am Hafen verhä...",
        "description": "Strenge Quarantäne über das Seuchenviertel am Hafen verhängen und Tote sofort außerhalb der Mauern verbrennen.",
        "consequenceText": {
          "unterstufe": "Harte Maßnahmen retten Leben. Die Ausbreitung der Seuche verlangsamt sich spürbar.",
          "mittelstufe": "Medizinisch vernünftige Isolation dämmt den Infektionsherd ein, führt aber zu Verzweiflungsszenen an den Toren.",
          "oberstufe": "Hygienische Seuchenkontrolle verhindert die völlige Auslöschung der Besatzungstruppen."
        },
        "statChanges": { "goetter": 10, "priester": -5, "adel": 10, "volk": 10 }
      },
      {
        "id": "B",
        "label": "Demagogen wie Kleon auf der Pnyx die Stirn bieten und vor...",
        "description": "Demagogen wie Kleon auf der Pnyx die Stirn bieten und vor blinder Kriegswut gegen Bundesgenossen warnen.",
        "consequenceText": {
          "unterstufe": "Besonnene Bürger hören zu, doch die aufgepeitschte Menge schreit nach Rache und Vergeltung.",
          "mittelstufe": "Einsamer Kampf für die Vernunft verlangsamt das Abgleiten in den totalen Radikalismus.",
          "oberstufe": "Standhafter Widerstand gegen die Demagogie bewahrt die Reste rechtsstaatlichen Bewusstseins."
        },
        "statChanges": { "goetter": 15, "priester": 5, "adel": -10, "volk": 10 }
      },
      {
        "id": "C",
        "label": "Dem Gott der Heilkunst, Asklepios, einen neuen Altar weih...",
        "description": "Dem Gott der Heilkunst, Asklepios, einen neuen Altar weihen und Kranke in heiligen Hainen pflegen.",
        "consequenceText": {
          "unterstufe": "Die Kranken finden Trost im Gebet und sanfte Pflege bei den Priestern des Asklepios.",
          "mittelstufe": "Stiftung des Asklepios-Kultes spendet seelischen Halt in einer Zeit völliger Ausweglosigkeit.",
          "oberstufe": "Kultische Kanalisierung der Massenpanik lindert die seelische Verwahrlosung der Überlebenden."
        },
        "statChanges": { "goetter": 15, "priester": 20, "adel": -5, "volk": 5 }
      },
      {
        "id": "D",
        "label": "Ein Not-Waisengesetz erlassen: Der Staat übernimmt Unterh...",
        "description": "Ein Not-Waisengesetz erlassen: Der Staat übernimmt Unterhalt und Erziehung aller Seuchenwaisen bis zum Mannesalter.",
        "consequenceText": {
          "unterstufe": "Kein Kind bleibt im Elend allein! Athen beweist inmitten des Todes seine unvergängliche Größe.",
          "mittelstufe": "Fürsorge für die Krieger- und Seuchenwaisen stiftet neue Hoffnung und festigt den Zusammenhalt der Überlebenden.",
          "oberstufe": "Großartige sozialstaatliche Tat im Angesicht der Apokalypse: Die Polis garantiert das Überleben der nächsten Generation."
        },
        "statChanges": { "goetter": 20, "priester": 10, "adel": 15, "volk": 20 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Der Demagoge",
      "term": "Der Demagoge",
      "explanation": {
        "unterstufe": "Wörtlich 'Volksführer'. Damals meinte man Politiker, die mit lauter Stimme, Lügen und Wutreden das Volk aufhetzten, um an die Macht zu kommen.",
        "mittelstufe": "Nach Perikles übernahmen Männer wie Kleon (ein reicher Gerbereibesitzer) die Führung, die nicht mehr durch Weisheit, sondern durch Schmeichelei und Aggression regierten.",
        "oberstufe": "Die Herrschaft der Demagogen offenbarte die Achillesferse der direkten Demokratie: Wenn Emotionen und Populismus die rationale Debatte verdrängen."
      },
      "curiosityFact": "Moderne Forscher untersuchten DNA aus einem Massengrab in Athen und fanden heraus: Die 'Pest' war mit hoher Wahrscheinlichkeit ein verheerender Ausbruch von Typhus!"
    }
  },

  // =========================================================================
  // STATION 10: Die Sizilien-Katastrophe & der Fall Athens (415–404 v. Chr.)
  // Bild: /assets/greece_station_10.jpg
  // =========================================================================
  {
    "id": "gre_r19",
    "roundNumber": 19,
    "locationKey": "sizilien_expedition",
    "locationName": "Der Hafen von Syrakus auf Sizilien (413 v. Chr.)",
    "milestoneTitle": "Runde 19: Hybris auf Sizilien – Der Untergang der Flotte",
    "imagePath": "/assets/greece_station_10.jpg",
    "hotspots": [
      { "id": "hs_r19_wracks", "x": 40, "y": 65, label: "Zerschellte Triremen", "description": "Über 200 athenische Kriegsschiffe liegen brennend oder zerschellt im Großen Hafen von Syrakus.", icon: "💥" },
      { "id": "hs_r19_latomien", "x": 75, "y": 45, label: "Die Steinbrüche (Latomien)", "description": "7.000 gefangene Athener schmachten ohne Wasser und Schutz vor der sengenden Sonne in tiefen Felsgruben.", icon: "⛓️" },
      { "id": "hs_r19_alkibiades", "x": 20, "y": 55, label: "Der Verrat des Alkibiades", "description": "Der eitle Feldherr flieht nach Sparta und verrät alle Angriffspläne an den Feind.", icon: "🗡️" }
    ],
    "situation": {
      "unterstufe": "415 v. Chr.: Vom Größenwahn (Hybris) getrieben, beschließt die athenische Volksversammlung das Unfassbare: Eine Riesenflotte aus 134 Triremen und zehntausenden Soldaten soll das ferne Sizilien erobern! Der schöne, eitle Jüngling Alkibiades verspricht unendliches Gold. Doch vor der Festung Syrakus wendet sich das Blatt: Sparta schickt Hilfe, die Athener werden im Hafen eingekesselt. 413 v. Chr. geht die gesamte Flotte unter! 7.000 Gefangene sterben elend in den Steinbrüchen. Wie reagierst du auf die Katastrophe?",
      "mittelstufe": "Die Sizilische Expedition war der verhängnisvollste Fehler der athenischen Geschichte. Der alte Feldherr Nikias hatte verzweifelt gewarnt, wurde aber von der kriegsbesoffenen Volksversammlung überstimmt. Mit dem Verlust der Flotte verlor Athen seine erfahrensten Kapitäne, Ruderer und Hopliten auf einen Schlag. Der persische Großkönig wittert die Chance und finanziert nun Spartas Flotte mit Gold.",
      "oberstufe": "Klassisches Drama der Hybris: Maßlose imperiale Überdehnung (Imperial Overstretch) ruinierte Athens militärisches Rückgrat. Die Niederlage besiegelte das Schicksal des Seebundes und leitete die finale Phase des Peloponnesischen Krieges (Dekeleischer Krieg) ein."
    },
    "hefterEintrag": "Die Sizilien-Expedition (415–413 v. Chr.): Aus maßlosem Übermut versuchte Athen, Sizilien zu erobern. Der totale Untergang der Flotte vor Syrakus besiegelte das Ende der athenischen Vormachtstellung.",
    "choices": [
      {
        "id": "A",
        "label": "Die letzten Notreserven an Silber für den Bau von 50 neue...",
        "description": "Die letzten Notreserven an Silber für den Bau von 50 neuen Schiffen mobilisieren und die Bürger abermals an die Riemen rufen.",
        "consequenceText": {
          "unterstufe": "Mit unglaublicher Zähigkeit baut Athen neue Schiffe. Die Stadt weigert sich aufzugeben!",
          "mittelstufe": "Letzte Kraftanstrengung verlängert den Widerstand um fast ein Jahrzehnt, leert aber die Kassen bis auf die letzte Münze.",
          "oberstufe": "Bewundernswerte Resilienz der attischen Demokratie, kann die strategische Wende jedoch nicht mehr erzwingen."
        },
        "statChanges": { "goetter": 10, "priester": -10, "adel": 15, "volk": 10 }
      },
      {
        "id": "B",
        "label": "Den gefangenen athenischen Soldaten in den Steinbrüchen v...",
        "description": "Den gefangenen athenischen Soldaten in den Steinbrüchen von Syrakus helfen, die Verse von Euripides aufzusagen.",
        "consequenceText": {
          "unterstufe": "Wie durch ein Wunder lassen die Bürger von Syrakus jene Gefangenen frei, die ihnen die Dichtkunst Athens vorsingen!",
          "mittelstufe": "Die Macht der griechischen Dichtung schenkt hunderten Überlebenden mitten in der Hölle die Freiheit.",
          "oberstufe": "Triumph der Kultur über die Barbarei des Krieges: Bildung als letzte Währung des Überlebens."
        },
        "statChanges": { "goetter": 15, "priester": 10, "adel": 5, "volk": 20 }
      },
      {
        "id": "C",
        "label": "Die Demokratie kurzzeitig durch einen 'Rat der 400' Adlig...",
        "description": "Die Demokratie kurzzeitig durch einen 'Rat der 400' Adligen ersetzen, um das Kriegschaos zu bändigen.",
        "consequenceText": {
          "unterstufe": "Kurzer oligarchischer Putsch führt zu Straßenkämpfen in Athen – das Volk stürzt die Despoten rasch wieder.",
          "mittelstufe": "Der Staatsstreich von 411 v. Chr. spaltet Athen innerlich zutiefst und lähmt die Flotte am Hellespont.",
          "oberstufe": "Verfassungskrise offenbart die Instabilität des Systems unter existenzieller militärischer Bedrohung."
        },
        "statChanges": { "goetter": -15, "priester": 15, "adel": 10, "volk": -15 }
      },
      {
        "id": "D",
        "label": "Ein Bündnis aller freien Poleis gegen die persische Gold-...",
        "description": "Ein Bündnis aller freien Poleis gegen die persische Gold-Einmischung beschwören: 'Griechen dürfen sich nicht von Persern kaufen lassen!'",
        "consequenceText": {
          "unterstufe": "Ein Aufschrei der Scham geht durch Hellas, doch Spartas Generäle nehmen das persische Gold trotzdem.",
          "mittelstufe": "Moralischer Appell deckt Spartas unheilige Allianz mit dem alten persischen Erbfeind schonungslos auf.",
          "oberstufe": "Tragische Einsicht: Spartas Sieg wird mit dem Verrat der ionischen Griechenstädte an den persischen Großkönig erkauft."
        },
        "statChanges": { "goetter": 20, "priester": 10, "adel": 10, "volk": 15 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Die Hybris",
      "term": "Die Hybris",
      "explanation": {
        "unterstufe": "Das griechische Wort für maßlose Selbstüberschätzung, Hochmut und Frevel gegen die Götter. Wer Hybris beging, wurde nach antikem Glauben von der Rachegöttin Nemesis unweigerlich bestraft.",
        "mittelstufe": "Athens Glaube, nach den Siegen über Persien die ganze Welt beherrschen zu können, trieb die Stadt in das sizilische Verderben.",
        "oberstufe": "Die Hybris ist das zentrale Thema aller großen griechischen Tragödien und mahnt bis heute vor imperialem Übermut."
      },
      "curiosityFact": "Der Verräter Alkibiades wechselte im Krieg dreimal die Seiten: Erst führte er Athen, floh dann nach Sparta und beriet schließlich den persischen Statthalter!"
    }
  },

  {
    "id": "gre_r20",
    "roundNumber": 20,
    "locationKey": "fall_athens_erbe",
    "locationName": "Die Schleifung der Langen Mauern (404 v. Chr.)",
    "milestoneTitle": "Runde 20: Das Ende einer Epoche & das ewige Erbe",
    "imagePath": "/assets/greece_station_10.jpg",
    "hotspots": [
      { "id": "hs_r20_mauern", "x": 48, "y": 60, "label": "Abriss der Langen Mauern", "description": "Zu den Klängen von Flötenspielerinnen reißen spartanische Soldaten die Mauern Athens nieder.", icon: "⛏️" },
      { "id": "hs_r20_flotte", "x": 20, "y": 65, label: "Die verbleibenden 12 Schiffe", "description": "Nur zwölf Kriegsschiffe werden Athen zugestanden – das Seereich existiert nicht mehr.", icon: "⛵" },
      { "id": "hs_r20_akropolis", "x": 75, "y": 30, label: "Die ewige Akropolis", "description": "Die Tempel stehen unberührt im Sonnenlicht – der Geist der Demokratie und Philosophie überlebt alle Kriege.", icon: "🏛️" }
    ],
    "situation": {
      "unterstufe": "Frühjahr 404 v. Chr.: Nach monatelanger Belagerung und furchtbarem Hunger muss Athen bedingungslos kapitulieren. Korinth und Theben fordern: 'Zerstört Athen völlig, schlachtet die Männer ab und verkauft Frauen und Kinder in die Sklaverei!' Doch Sparta weigert sich, die Stadt zu vernichten, die Griechenland einst bei Marathon und Salamis gerettet hatte. Die Bedingungen sind dennoch hart: Die Flotte wird auf zwölf Schiffe begrenzt, und zu den Tönen von Flötenmusik reißen die Sieger die Langen Mauern nieder. Welche Lehre ziehst du aus dem Aufstieg und Fall?",
      "mittelstufe": "Mit dem Fall Athens endete das klassische Zeitalter der Polis. Weder Sparta noch später Theben konnten eine dauerhafte friedliche Ordnung stiften. Doch während Mauern und Schiffe vergingen, blieb etwas Unzerstörbares zurück: Die Idee der Bürgerdemokratie, die Philosophie des Sokrates, das geschriebene Gesetz und die Theaterkunst. Sie wurden zum unsterblichen Fundament Europas.",
      "oberstufe": "Die Epoche der klassischen Polis scheiterte an ihrer inneren Zerrissenheit und Hegemonialblindheit, ebnete jedoch den Weg für den Hellenismus und die Rezeption durch Rom. Athens wahrer Sieg war kein militärischer, sondern ein zivilisatorischer: Die Entdeckung des freien, selbstbestimmten Bürgers."
    },
    "hefterEintrag": "Kapitulation Athens (404 v. Chr.): Athen verlor den Krieg und seine Mauern, doch seine Kultur – Demokratie, Philosophie, Theater und Olympische Spiele – wurde zum ewigen Fundament Europas.",
    "choices": [
      {
        "id": "A",
        "label": "Die Demokratie nach dem Sturz der spartanischen 'Dreißig ...",
        "description": "Die Demokratie nach dem Sturz der spartanischen 'Dreißig Tyrannen' durch ein feierliches Amnestie-Gesetz erneuern.",
        "consequenceText": {
          "unterstufe": "Athen schwört: 'Niemand darf wegen alter Taten angeklagt werden!' Bürger versöhnen sich und bauen die Demokratie wieder auf.",
          "mittelstufe": "Die erste große Generalamnestie der Weltgeschichte (403 v. Chr.) verhindert Rachejustiz und heilt die Wunden der Polis.",
          "oberstufe": "Staatsmännische Meisterleistung: Das Prinzip 'Mede mnesikakein' (kein Unrecht nachtragen) rettet die athenische Verfassung."
        },
        "statChanges": { "goetter": 20, "priester": 10, "adel": 15, "volk": 20 }
      },
      {
        "id": "B",
        "label": "Sokrates auf der Agora bitten, junge Bürger weiterhin im ...",
        "description": "Sokrates auf der Agora bitten, junge Bürger weiterhin im kritischen Denken und Tugendstreben zu unterrichten.",
        "consequenceText": {
          "unterstufe": "Auf dem Marktplatz diskutiert Sokrates unermüdlich mit Schustern und Feldherren über das Gute und Gerechte.",
          "mittelstufe": "Die sokratische Philosophie wird zum geistigen Kompass einer verunsicherten Zeit und begründet das abendländische Denken.",
          "oberstufe": "Geistige Neugeburt im Angesicht des politischen Niedergangs: Philosophie löst Politik als Sinnträger ab."
        },
        "statChanges": { "goetter": 15, "priester": -5, "adel": 10, "volk": 20 }
      },
      {
        "id": "C",
        "label": "Spartas Großmut würdigen, dass es die Vernichtung Athens ...",
        "description": "Spartas Großmut würdigen, dass es die Vernichtung Athens gegen den Willen von Theben und Korinth verhinderte.",
        "consequenceText": {
          "unterstufe": "Selbst die Sieger verneigen sich vor den großen Verdiensten Athens in den Perserkriegen.",
          "mittelstufe": "Historisches Ehrgefühl bewahrt das architektonische und kulturelle Herz Griechenlands vor der Auslöschung.",
          "oberstufe": "Panhellenisches Bewusstsein setzt selbst im bittersten Moment des Kriegsendes der totalen Zerstörung Schranken."
        },
        "statChanges": { "goetter": 10, "priester": 15, "adel": 15, "volk": 5 }
      },
      {
        "id": "D",
        "label": "Die Lehre für alle Zeiten festhalten: Wahre Größe einer S...",
        "description": "Die Lehre für alle Zeiten festhalten: Wahre Größe einer Stadt liegt nicht in Mauern oder Schiffen, sondern in Freiheit und Geist.",
        "consequenceText": {
          "unterstufe": "Dein Name wird unsterblich! Athen hat den Krieg verloren, aber die Herzen aller künftigen Generationen gewonnen.",
          "mittelstufe": "Perikles' Vision vollendet sich im Geistigen: Athen bleibt für alle Zeiten die strahlende Schule der Menschheit.",
          "oberstufe": "Kulturelle Unsterblichkeit: Der Übergang von der militärischen Hegemonie zum ewigen geistigen Erbe der freien Welt."
        },
        "statChanges": { "goetter": 25, "priester": 15, "adel": 20, "volk": 25 },
        "epCost": 2
      }
    ],
    "lexiconEntry": {
      "title": "Das Vermächtnis der Polis",
      "term": "Das Vermächtnis der Polis",
      "explanation": {
        "unterstufe": "Obwohl die alten griechischen Städte untergingen, leben ihre Ideen bis heute weiter: Unsere Demokratie, unser Sport, unsere Theaterstücke, unsere Philosophie und unser Alphabet stammen von ihnen!",
        "mittelstufe": "Wörter wie Politik, Demokratie, Monarchie, Theater, Philosophie, Schule, Musik und Geschichte sind griechische Wörter, die wir jeden Tag benutzen.",
        "oberstufe": "Die athenische Polis schuf das Ideal des mündigen Bürgers (Polites), der sein Gemeinwesen in eigener Verantwortung und Freiheit gestaltet."
      },
      "curiosityFact": "Spartas Feldherr Lysander befahl, die Langen Mauern zu den heiteren Melodien von Flötenspielerinnen abzureißen – als Beginn eines neuen 'Tages der Freiheit' für Hellas!"
    }
  }
];

export const GREECE_MASTER_GAME: GameDefinition = {
  id: 'game_greece_polis',
  title: 'Polis, Freiheit & Demokratie – Der Weg der Griechen',
  subtitle: 'Von der Kolonisation über Sparta & Marathon bis zum Parthenon (750–404 v. Chr.)',
  era: 'Klassisches Griechenland (Archaisch bis Klassik)',
  archetype: 'reigns_balance',
  artStyle: 'pixel_art',
  eraThemeId: 'greece_aegean',
  gradeLevel: 'unterstufe',
  targetGrades: 'Klassenstufe 5/6 & Vertiefung 7/8 (Regelschule & Gymnasium)',
  coreTopics: [
    'Geografie Griechenlands, Ägäis & Große Kolonisation',
    'Der Kriegerstaat Sparta, Agoge & Heloten',
    'Athen in der Krise, Schuldknechtschaft & Solons Reformen',
    'Kleisthenes, Phylenreform & Scherbengericht (Ostrakismos)',
    'Perserkriege: „Erde und Wasser“ & die Schlacht bei Marathon (490 v. Chr.)',
    'Die Thermopylen: König Leonidas & die 300 Spartiaten (480 v. Chr.)',
    'Seeschlacht bei Salamis & die „hölzernen Mauern“ des Themistokles',
    'Das Goldene Zeitalter: Perikles, Diäten & die Akropolis (Parthenon)',
    'Der Peloponnesische Krieg, die Langen Mauern & die Pest in Athen',
    'Die Sizilien-Katastrophe & das unvergängliche Vermächtnis der Polis'
  ],
  description: 'Tauche ein in das Geburtsland der Demokratie! Erlebe 20 dramatische Runden von den ersten Kolonieschiffen über Spartas eiserne Disziplin und die Feuertaufe bei Marathon bis zum Glanz der Akropolis und den Lehren aus dem Peloponnesischen Krieg.',
  pillars: [
    { key: 'goetter', label: 'Bürgerversammlung (Demos)', icon: '🏛️', description: 'Volksentscheide auf der Pnyx, Rednerfreiheit (Isegoria) und Gleichheit' },
    { key: 'priester', label: 'Adel & Areopag-Rat', icon: '👑', description: 'Traditionelle Adelsgeschlechter, Reichtum, Archonten und Richter' },
    { key: 'adel', label: 'Hopliten & Flotte', icon: '⚔️', description: 'Schlagkraft der Phalanx, Ruderer der Triremen und Bündnistreue' },
    { key: 'volk', label: 'Bauern, Metöken & Handel', icon: '🌾', description: 'Brot- und Olivenversorgung, Hafen Piräus, Handwerker und Markt' },
  ],
  specialResourceName: 'Drachmen & Stimmsteine',
  specialResourceEmoji: '🗳️',
  skillNames: {
    skill1: 'Pnyx-Redekunst',
    skill2: 'Verfassungswissen',
    skill3: 'Phalanxtaktik',
  },
  skillIcons: {
    skill1: '🗣️',
    skill2: '📜',
    skill3: '🛡️',
  },
  heroImage: '/assets/greece_hero.jpg',
  rounds: GREECE_ROUNDS,
  shareCode: 'GRE01',
};
