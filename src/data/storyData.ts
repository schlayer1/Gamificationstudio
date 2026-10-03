import { RoundStory, Stats, Skills } from '../types/game';

// Fixed Start: Runde 1, 2, 3 (Assuan, Kom Ombo, Edfu)
const FIXED_START_STORIES: RoundStory[] = [
  // 1. Assuan - Granitbrüche
  {
    id: "r1_aswan_quarry",
    roundNumber: 1,
    locationKey: "aswan",
    locationName: "Elephantine & die Granitbrüche von Assuan",
    milestoneTitle: "Runde 1: Die erste Bewährungsprobe am Nil",
    imagePath: "/assets/aswan_quarry.jpg",
    hotspots: [
      {
        id: "hs_aswan_keile",
        x: 32,
        y: 68,
        label: "Holzkeil-Spalttechnik",
        description: "Steinmetze treiben trockene Sykomorenholzkeile in Bohrlöcher und tränken sie mit Nilwasser. Das Quellholz sprengt den härtesten Rosengranit geradlinig ab.",
        icon: "⛏️"
      },
      {
        id: "hs_aswan_felswand",
        x: 64,
        y: 38,
        label: "Granit-Abbaustelle",
        description: "Aus diesen massiven Felswänden wurden Kolossalstatuen und Obelisken für Karnak und Gizeh herausgehauen.",
        icon: "🏛️"
      },
      {
        id: "hs_aswan_nilufer",
        x: 82,
        y: 72,
        label: "Verladestelle am 1. Katarakt",
        description: "Hier warten robuste Lastkähne mit Rollbalken, um die tonnenschwere Fracht bei Hochwasser nilabwärts zu transportieren.",
        icon: "⛵"
      }
    ],
    situation: {
      unterstufe: "Deine Reise beginnt ganz im Süden Ägyptens. Du sollst riesige Granitblöcke für den königlichen Tempel beschaffen. Doch die Steinmetze klagen über brennende Hitze und zu wenig Wasser.",
      mittelstufe: "Am ersten Nilkatarakt bei Syene (Assuan) bist du verantwortlich für den Granitabbau. Die Arbeiter fordern zusätzliche Rationen Bier und Brot, während die Steuereintreiber des Adels auf strikte Sparsamkeit pochen.",
      oberstufe: "Am südlichen Grenzposten Elephantine kollidieren imperiale Prestigeprojekte mit handfester Arbeitslogistik. Unterernährte Zwangsarbeiter und Steinmetze drohen mit Sabotage, während lokale Statthalter des Adels die Ressourcenkürzung rechtfertigen."
    },
    choices: [
      {
        id: 'A',
        label: "Brot, Bier und Wasser großzügig austeilen",
        description: "Versorge die Steinmetze mit doppelten Rationen aus den königlichen Vorräten.",
        statChanges: { volk: 15, adel: -5, ep: 1 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Die Arbeiter jubeln dir zu! Gestärkt schlagen sie makellose Granitsteine aus dem Fels.",
          mittelstufe: "Die Produktivität steigt rasant. Das Volk preist deine Weitsicht, auch wenn der Adel die Kosten rügt.",
          oberstufe: "Eine kluge Investition in das Humankapital: Trotz adeliger Kritik an der Hofverschwendung wird die Quote übererfüllt."
        }
      },
      {
        id: 'B',
        label: "Die Priester um eine Opferzeremonie für Chnum bitten",
        description: "Opfere den Göttern des Katarakts, damit die Hitze nachlässt und der Stein leicht bricht.",
        statChanges: { goetter: 15, priester: 10, volk: -5 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Der Duft von Weihrauch steigt auf. Die Priester loben deine Frömmigkeit zu Gott Chnum.",
          mittelstufe: "Chnum, der Schöpfergott der Nilquellen, wird besänftigt. Die Priesterkaste stärkt dein Ansehen.",
          oberstufe: "Sakrale Legitimation festigt deinen Anspruch. Die Priesterschaft sichert dir religiösen Rückhalt zu."
        }
      },
      {
        id: 'C',
        label: "Aufseher mit Peitschen und Strafen antreiben",
        description: "Befehle militärische Disziplin: Wer trödelt, verliert seinen Lohn.",
        statChanges: { adel: 15, volk: -15, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Die Steine werden schneller verladen, aber in den Augen der Arbeiter siehst du Zorn und Tränen.",
          mittelstufe: "Die Aristokratie lobt deine Entschlossenheit, doch in den Arbeiterdörfern brodelt gefährliche Unruhe.",
          oberstufe: "Militärische Härte imponiert den regionalen Nomarchen, erhöht aber das Risiko subversiver Revolten."
        }
      },
      {
        id: 'D',
        label: "Geheimwissen der Hebeltechnik & Schattensystem anwenden",
        description: "Nutze raffinierte Sonnensegel und Wasserkanalschwemmung zur Arbeitserleichterung.",
        epCost: 3,
        statChanges: { volk: 20, adel: 10, goetter: 10, ep: -1 },
        skillChanges: { politischeGeschicklichkeit: 2, goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Mit genialen Holzkonstruktionen gleiten die Steine mühelos auf die Nil-Lastkähne. Alle staunen über deine Klugheit!",
          mittelstufe: "Deine architektonische Innovation minimiert Verluste und maximiert den Ertrag. Adel und Volk sind gleichermaßen tief beeindruckt.",
          oberstufe: "Ein meisterhafter Synergieeffekt: Technische Überlegenheit reduziert Verschleiß, wahrt adlige Budgets und begründet deinen Ruf als gottbegnadetes Genie."
        }
      }
    ],
    lexiconEntry: {
      title: "Chnum & die Granitbrüche von Assuan",
      term: "Granit & Nilkatarakte",
      explanation: {
        unterstufe: "In Assuan gab es den besten harten Stein für Pyramiden und Statuen. Der Gott Chnum wurde hier als Schöpfer der Menschen verehrt.",
        mittelstufe: "Die Nilkatarakte waren unwegsame Stromschnellen, die den Schiffen das Weiterkommen erschwerten. Assuan lieferte den wertvollen Rosengranit für Tempelportale.",
        oberstufe: "Elephantine markierte den geopolitischen Grenzraum zu Nubien. Die Kontrolle über den Rohstofffluss (Granit, Gold, Elfenbein) sicherte dem Pharao absolute Vormacht."
      },
      curiosityFact: "Wusstest du, dass die alten Ägypter riesige Granitblöcke mit nassen Holzkeilen spalteten? Das aufquellende Holz sprengte den Fels!"
    }
  },

  // 2. Kom Ombo - Krokodile des Sobek
  {
    id: "r2_kom_ombo_crocs",
    roundNumber: 2,
    locationKey: "kom_ombo",
    locationName: "Kom Ombo – Die Sandbänke der Krokodile",
    milestoneTitle: "Runde 2: Die Zähne des Sobek",
    imagePath: "/assets/kom_ombo.jpg",
    hotspots: [
      {
        id: "hs_kom_krokodil",
        x: 48,
        y: 65,
        label: "Heilige Nilkrokodile",
        description: "Die Reptilien sonnen sich auf Sandbänken. Das Volk fürchtet und verehrt sie zugleich als Boten des Schöpfergottes Sobek.",
        icon: "🐊"
      },
      {
        id: "hs_kom_tempel",
        x: 75,
        y: 35,
        label: "Doppeltempel von Kom Ombo",
        description: "Einzigartige Doppelanlage: Die rechte Hälfte ist Sobek geweiht, die linke dem Falkengott Haroeris.",
        icon: "🏛️"
      },
      {
        id: "hs_kom_sandbank",
        x: 22,
        y: 55,
        label: "Flussbiegung & Untiefe",
        description: "Gefährliche Strömung zwingt Schiffe nah ans Ufer. Ein Ruderfehler kann die Ladung zum Kentern bringen.",
        icon: "🌊"
      }
    ],
    situation: {
      unterstufe: "Eure Schiffe nähern sich einer Flussbiegung. Auf den Sandbänken sonnen sich Dutzende riesige Nilkrokodile. Die Ruderer haben furchtbare Angst, weiterzufahren.",
      mittelstufe: "Bei Kom Ombo blockiert ein Krokodilrudel das Fahrwasser. Die Schiffer sehen darin ein Omen des Gottes Sobek. Eine Umrundung würde kostbare Zeit und Rationen kosten.",
      oberstufe: "Naturgefahr trifft auf sakrale Mythologie: Die Steuerleute weigern sich aus Furcht vor Sobeks Zorn, die Sandbänke zu passieren. Jeder Tag Verzögerung gefährdet den königlichen Zeitplan."
    },
    choices: [
      {
        id: 'A',
        label: "Bogenschützen schießen lassen, um den Weg freizumachen",
        description: "Befehle den Soldaten, die Tiere mit Pfeilen vom Ufer zu vertreiben.",
        statChanges: { adel: 10, priester: -15, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Die Krokodile flüchten zischend ins Wasser. Doch die Priester schimpfen: 'Sobek ist heilig!'",
          mittelstufe: "Der Fluss ist frei, die Krieger jubeln. Doch die Priester von Kom Ombo verfluchen die Entweihung.",
          oberstufe: "Militärisch pragmatisch gelöst, doch die religiöse Sanktionierung wiegt schwer: Der Klerus brandmarkt dich als Frevler."
        }
      },
      {
        id: 'B',
        label: "Dem Gott Sobek kostbares Fleisch und Honig opfern",
        description: "Die Priester vollziehen ein Beruhigungsritual und füttern die Tiere ehrerbietig.",
        statChanges: { goetter: 15, priester: 15, adel: -5 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Die Krokodile gleiten satt und friedlich ins tiefe Wasser. Die Priester segnen dein Schiff!",
          mittelstufe: "Die Priesterschaft feiert den Beweis deiner Frömmigkeit. Die Krokodile weichen ohne Verluste.",
          oberstufe: "Traditionelle religiöse Deeskalation: Du sicherst dir die Gunst des lokalen Sobek-Kults auf Kosten geringer Proviantverluste."
        }
      },
      {
        id: 'C',
        label: "Die Ruderer mit Gesang und zusätzlichem Bier anspornen",
        description: "Fahrt zügig und beherzt in der Strömungsmitte an den Raubtieren vorbei.",
        statChanges: { volk: 15, adel: -5, ep: 1 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Mit kräftigen Ruderschlägen und lautem Gesang rauscht die Flotte sicher vorbei!",
          mittelstufe: "Die Besatzung fasst Mut. Deine Nähe zur Mannschaft stärkt ihren Glauben an deine Führungsstärke.",
          oberstufe: "Psychologische Mobilisierung der Mannschaft beweist deine Charismatik. Das Volk vertraut deiner Entschlossenheit."
        }
      },
      {
        id: 'D',
        label: "Sobek-Hymne anstimmen & Priester mit Flötenklängen leiten",
        description: "Kombiniere Priesterrituale mit geschickter Flottenformation im ruhigen Wasser.",
        epCost: 3,
        statChanges: { goetter: 15, volk: 10, priester: 15, ep: -1 },
        skillChanges: { goettlicheAuserwaehltheit: 1, politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Unglaublich! Wie verzaubert teilen sich die Tiere. Die Mannschaft singt mit den Priestern im Chor!",
          mittelstufe: "Eine triumphale Passage. Priester und Ruderer sehen in dir bereits die wahre Verkörperung göttlicher Harmonie (Ma'at).",
          oberstufe: "Vollkommene Synthese aus theologischem Taktgefühl und nautischer Exzellenz. Deine göttliche Aura wächst beträchtlich."
        }
      }
    ],
    lexiconEntry: {
      title: "Sobek – Herrscher der Sümpfe",
      term: "Sobek & Tierkulte",
      explanation: {
        unterstufe: "Sobek war der Krokodilgott. Die Ägypter verehrten ihn, damit die Tiere sie im Wasser beschützten statt bissen.",
        mittelstufe: "Sobek galt als Beherrscher der Nilfluten und Fruchtbarkeit. In Kom Ombo wurden zahme Krokodile in Tempelbecken gehalten und mumifiziert.",
        oberstufe: "Tierkulte spiegelten die Ambivalenz der ägyptischen Naturerfahrung wider: Bedrohung und lebendige Schöpfungskraft verschmolzen zur Gottheit."
      },
      curiosityFact: "In Kom Ombo fanden Archäologen über 300 mumifizierte Krokodile, manche sogar mit Goldschmuck behängt!"
    }
  },

  // 3. Edfu - Horus & die Kornkammern
  {
    id: "r3_edfu_granary",
    roundNumber: 3,
    locationKey: "edfu",
    locationName: "Edfu – Das Reich des Himmelsfalken Horus",
    milestoneTitle: "Runde 3: Die Bewachung der Kornkammern",
    imagePath: "/assets/nile_banner.jpg",
    hotspots: [
      {
        id: "hs_edfu_pylon",
        x: 52,
        y: 40,
        label: "Monumentaler Tempelpylon",
        description: "Riesige Reliefs zeigen den Pharao beim Erschlagen von Feinden unter dem Schutz der Falkenflügel von Horus.",
        icon: "🦅"
      },
      {
        id: "hs_edfu_silo",
        x: 24,
        y: 65,
        label: "Königliche Rundsilos",
        description: "Lehmziegelspeicher für Emmer und Gerste. Von oben befüllbar, unten mit Schiebetüren für die Notrationierung.",
        icon: "🌾"
      },
      {
        id: "hs_edfu_schreiber",
        x: 78,
        y: 70,
        label: "Kornschreiber-Station",
        description: "Beamte wiegen Getreidesäcke und notieren jede Ration auf Tonscherben (Ostraka) und Papyrus.",
        icon: "📜"
      }
    ],
    situation: {
      unterstufe: "In Edfu lagern riesige Berge von Getreide. Eine Dürrewelle in den Nachbardörfern treibt hungernde Familien vor die Mauern der Festung.",
      mittelstufe: "Die Kornkammern von Edfu sind prall gefüllt für den Hofstaat des Pharaos. Bauern aus verdorrten Nachbargaue bitten verzweifelt um Notsaatgut.",
      oberstufe: "Staatliche Bevorratung gegen subsistenzwirtschaftliche Krisen: Ein Notstand im Umland zwingt dich zu einer Entscheidung über das Staatsmonopol des Getreidespeichers."
    },
    choices: [
      {
        id: 'A',
        label: "Die Speicher öffnen und Korn an alle Hungrigen verteilen",
        description: "Rette das Volk vor dem Hungertod, auch wenn die Abgaben an Theben fehlen werden.",
        statChanges: { volk: 20, adel: -15, ep: 1 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Die Kinder jubeln, Mütter weinen vor Dankbarkeit. Dein Name wird im ganzen Land gesegnet!",
          mittelstufe: "Du verhinderst eine humanitäre Katastrophe. Die Bauern preisen dich als Retter, der Adel ist erzürnt.",
          oberstufe: "Moralisch erhaben und sozial stabilisierend; die Aristokratie wirft dir jedoch verhängnisvolle Schwäche vor."
        }
      },
      {
        id: 'B',
        label: "Streng rationieren und Getreide nur gegen Frondienst ausgeben",
        description: "Jeder Hungrige erhält Nahrung, muss dafür aber 10 Tage Schiffe beladen.",
        statChanges: { adel: 10, volk: 5, ep: 1 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Ein harter, aber gerechter Tausch. Die Menschen arbeiten fleißig für ihr tägliches Brot.",
          mittelstufe: "Ein bürokratischer Mittelweg. Die Arbeiten schreiten voran und der Hunger wird gelindert.",
          oberstufe: "Pragmatische Staatsräson: Arbeitsleistung gegen Lebensunterhalt sichert Ordnung und Baufortschritt."
        }
      },
      {
        id: 'C',
        label: "Tore verriegeln und alles Korn für die königliche Expedition sichern",
        description: "Befehl ist Befehl: Kein einziges Korn verlässt das Lager ohne königliches Siegel.",
        statChanges: { adel: 15, volk: -20, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Die Tore bleiben zu. Wütendes Wehklagen hallt durch die Nacht.",
          mittelstufe: "Die Staatskasse und der Adel jubeln, doch der Hass in den Herzen des einfachen Volkes wächst.",
          oberstufe: "Kühle bürokratische Unerbittlichkeit. Du sicherst deinen Auftrag, verlierst aber das Herz deines Volkes."
        }
      },
      {
        id: 'D',
        label: "Horus-Fest ausrufen & Ausgleich mit Tempelreserven stiften",
        description: "Aktiviere ungenutzte Tempeldepots und mache die Speisung zu einem frommen Volksfest.",
        epCost: 3,
        statChanges: { volk: 20, priester: 15, adel: 10, ep: -1 },
        skillChanges: { politischeGeschicklichkeit: 2, goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Was für ein Fest! Priester, Adlige und Bauern feiern gemeinsam unter dem Schutz von Horus!",
          mittelstufe: "Ein Geniestreich der Diplomatie: Tempelopfer speisen die Bedürftigen, ohne die königlichen Reserven anzutasten.",
          oberstufe: "Glänzendes politisches Kalkül: Du verknüpfst Sakralfest mit sozialer Fürsorge. Niemand verliert sein Gesicht."
        }
      }
    ],
    lexiconEntry: {
      title: "Horus & die ägyptischen Kornkammern",
      term: "Kornspeicher & Bürokratie",
      explanation: {
        unterstufe: "Getreide war im alten Ägypten wie Geld. Wer Getreide besaß, hatte die Macht. Horus beschützte den Herrscher.",
        mittelstufe: "Ägyptens Reichtum basierte auf der zentralen Speicherung von Emmer und Gerste in riesigen Rundsilos für Notjahre.",
        oberstufe: "Die Schreiber und Silo-Inspektoren bildeten das administrative Rückgrat des Pharaonenstaates, unverzichtbar für Steuereinzug und Heeresversorgung."
      },
      curiosityFact: "Kornschreiber trugen stets Papyrus, Binsenrohr und Farbkasten bei sich und zählten jeden einzelnen Korb Getreide!"
    }
  }
];

// Branching Pool for Rounds 4 to 19 (Paired by region and triggered dynamically)
const DYNAMIC_BRANCH_STORIES: { [roundNumber: number]: { branchA: RoundStory; branchB: RoundStory } } = {
  // RUNDE 4: Theben / Karnak
  // Branch A: Sakraler Weg (Wenn Priester/Götter stark) | Branch B: Politischer Aufruhr am Flusshafen (Wenn Volk/Adel unruhig)
  4: {
    branchA: {
      id: "r4_thebes_priest_sanctuary",
      roundNumber: 4,
      locationKey: "thebes",
      locationName: "Waset (Theben) – Das goldene Allerheiligste von Karnak",
      milestoneTitle: "Runde 4 [Weg der Götter]: Die Forderung des Amun-Klerus",
      imagePath: "/assets/thebes_karnak.jpg",
      hotspots: [
        {
          id: "hs_karnak_amun",
          x: 50,
          y: 42,
          label: "Das Allerheiligste von Amun-Re",
          description: "Nur der Pharao und der Hohepriester durften den Schrein mit der goldenen Statue des Reichsgottes betreten.",
          icon: "⚡"
        },
        {
          id: "hs_karnak_saeulen",
          x: 28,
          y: 52,
          label: "Monumentaler Säulensaal (Hypostyl)",
          description: "Über 130 gigantische Papyrus-Säulen symbolisieren den Ursumpf der ägyptischen Schöpfungsgeschichte.",
          icon: "🏛️"
        },
        {
          id: "hs_karnak_opfer",
          x: 74,
          y: 68,
          label: "Opfertische & Rauchfässer",
          description: "Rinder, Gänse, Weihrauch und Lotosblüten werden täglich als Speiseopfer für die Götter dargebracht.",
          icon: "🏺"
        }
      ],
      branchCondition: { requiredStatHigher: 'priester' },
      situation: {
        unterstufe: "Ihr erreicht die Tempelstadt Theben! Der Hohepriester empfängt dich im tiefsten Inneren des Tempels und verlangt einen gewaltigen Goldschatz als Tempelspende.",
        mittelstufe: "In Karnak fordert der mächtige Amun-Klerus ein Viertel deiner Schiffsladung für neue Pylone. Die Priester drohen, deinen Thronanspruch andernfalls nicht sakral zu beglaubigen.",
        oberstufe: "Theokratischer Machtanspruch im Zentrum der Amun-Theologie: Die thebanische Priesterschaft verlangt Fiskalautonomie und monumentale Zuwendungen als Bedingung königlicher Investitur."
      },
      choices: [
        {
          id: 'A',
          label: "Das Gold weihen und die Priester uneingeschränkt besänftigen",
          description: "Sichere dir die bedingungslose Gunst der Hohepriester.",
          statChanges: { goetter: 20, priester: 20, adel: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Die Priester salben dein Haupt mit teurem Myrrhenöl und rufen Amuns Segen herab!",
            mittelstufe: "Deine sakrale Position ist unantastbar. Der Klerus verbürgt sich für deinen Thron.",
            oberstufe: "Vollständige theokratische Legitimation festigt dein Fundament im thebanischen Reichsteil."
          }
        },
        {
          id: 'B',
          label: "Einen festen Gegendienst fordern: Tempelgetreide & Geleitschutz",
          description: "Kein Gold ohne vertragliche Gegenleistung der Tempelspeicher.",
          statChanges: { adel: 15, priester: 5, volk: 5, ep: 1 },
          consequenceText: {
            unterstufe: "Die Priester willigen ein. Deine Flotte bekommt frische Vorräte und Schutz!",
            mittelstufe: "Ein meisterhafter diplomatischer Kompromiss schont die Reichskasse.",
            oberstufe: "Strategische Fiskalteilung wahrt deine Unabhängigkeit gegenüber dem Tempelstaat."
          }
        },
        {
          id: 'C',
          label: "Die Forderung brüsk zurückweisen: 'Der Pharao bestimmt das Gold!'",
          description: "Mache klar, dass die Krone über dem Tempel steht.",
          statChanges: { adel: 15, priester: -20, goetter: -15, ep: 1 },
          consequenceText: {
            unterstufe: "Düstere Blicke. Die Priester flüstern Verwünschungen hinter Säulen.",
            mittelstufe: "Der Hofadel triumphiert, aber im Klerus keimt gefährlicher Groll.",
            oberstufe: "Ein offener Affront gegen Theben: Du riskierst künftigen religiösen Widerstand."
          }
        },
        {
          id: 'D',
          label: "Das göttliche Sonnenbarken-Orakel anrufen",
          description: "Lass Amun selbst in einer Prozession vor versammeltem Hofstaat entscheiden.",
          epCost: 3,
          statChanges: { goetter: 20, priester: 15, adel: 15, volk: 10, ep: -1 },
          consequenceText: {
            unterstufe: "Das goldene Götterbild neigt sich! Das Orakel bestätigt dich als Auserwählten!",
            mittelstufe: "Die versammelte Priesterschaft wirft sich ehrfürchtig in den Staub.",
            oberstufe: "Sakralpolitische Genialität: Du instrumentalisierst das Orakelwesen zur Herrschaftssicherung."
          }
        }
      ],
      lexiconEntry: {
        title: "Das Allerheiligste & Amun-Re",
        term: "Karnak & Hohepriester",
        explanation: {
          unterstufe: "Nur der Pharao und der Hohepriester durften das Allerheiligste betreten, wo die goldene Statue des Gottes stand.",
          mittelstufe: "Die Priester von Karnak kontrollierten Ländereien, Goldminen und zehntausende Tempelbauern.",
          oberstufe: "Das thebanische Großpriestertum entwickelte sich in der 18. Dynastie zu einem fiskalischen Gegenpol zur Residenz des Pharaos."
        },
        curiosityFact: "Die Statue des Gottes wurde jeden Morgen von Priestern gewaschen, mit edlen Salben eingeölt und frisch angekleidet!"
      }
    },
    branchB: {
      id: "r4_thebes_harbor_revolt",
      roundNumber: 4,
      locationKey: "thebes",
      locationName: "Waset (Theben) – Aufruhr an den Docks von Luxor",
      milestoneTitle: "Runde 4 [Weg des Volkes]: Die Blockade der Nilschiffer",
      imagePath: "/assets/nile_banner.jpg",
      branchCondition: { requiredStatHigher: 'volk' },
      situation: {
        unterstufe: "Tumult an den Docks von Theben! Die Ruderer und Lastenträger weigern sich weiterzufahren. Sie behaupten, die Fracht sei überladen und sie hätten seit Tagen keinen gerechten Lohn erhalten.",
        mittelstufe: "Streik der Schiffergilde an den Kaianlagen von Theben. Die Hafenmeister fordern militärische Niederschlagung, doch die Menge blockiert mit ihren Kähnen die gesamte Fahrrinne.",
        oberstufe: "Logistischer Engpass und soziale Revolte im Umschlaghafen Luxor: Ein ungelöster Tarifstreit der Frachtschiffer droht die Versorgungskette der künftigen Pyramidenbaustelle lahmzulegen."
      },
      choices: [
        {
          id: 'A',
          label: "Die Löhne sofort auszahlen und Zusatzrationen Bier verteilen",
          description: "Beende die Blockade friedlich durch königliche Großzügigkeit.",
          statChanges: { volk: 20, adel: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Jubel an den Docks! Die Schiffer hissen sofort die Segel und rudern mit voller Kraft.",
            mittelstufe: "Sozialer Frieden hergestellt. Die Schiffergilde schwört dir unbedingte Treue.",
            oberstufe: "Pragmatischer Konsens: Geringe finanzielle Zugeständnisse sichern den reibungslosen Frachtfluss."
          }
        },
        {
          id: 'B',
          label: "Mit den Ältesten der Schiffergilde ein neues Schiedsabkommen schließen",
          description: "Verhandele gerechte Arbeitszeiten gegen verlässliche Transportgarantien.",
          statChanges: { volk: 10, adel: 10, ep: 2 },
          consequenceText: {
            unterstufe: "Beide Seiten nicken zufrieden. Die Schiffe fahren geordnet und zügig weiter.",
            mittelstufe: "Ein diplomatischer Erfolg, der sowohl Kosten begrenzt als auch die Arbeiter achtet.",
            oberstufe: "Früheste Form administrativer Tarifverhandlung stärkt dein Image als gerechter Regent."
          }
        },
        {
          id: 'C',
          label: "Die Palastgarde entsenden und die Anführer der Blockade verhaften",
          description: "Befehle strikte Ordnung: Aufruhr auf dem Nil wird nicht geduldet.",
          statChanges: { adel: 15, volk: -20, ep: 1 },
          consequenceText: {
            unterstufe: "Die Soldaten räumen den Hafen mit Lanzen. Bitteres Schweigen liegt über dem Wasser.",
            mittelstufe: "Die Schiffe fahren wieder, doch unter Deck schwelen Wut und Sabotagegefahr.",
            oberstufe: "Autoritäre Durchsetzung sichert Zeitpläne, beschädigt jedoch die Loyalität der Unterschichten."
          }
        },
        {
          id: 'D',
          label: "Die königliche Flottenordnung von Theben stiften",
          description: "Schaffe feste Rechte und Schutzgesetze für alle Flussschiffer des Reiches.",
          epCost: 3,
          statChanges: { volk: 25, adel: 15, goetter: 10, ep: -1 },
          consequenceText: {
            unterstufe: "Ein historisches Dekret! Tausende Schiffer singen deinen Namen den ganzen Fluss hinab!",
            mittelstufe: "Ein Meilenstein ägyptischer Gesetzgebung: Die Binnenschifffahrt floriert wie nie zuvor.",
            oberstufe: "Staatsmännische Institutionalisierung von Transportrechten bindet die Arbeiterklasse fest an die Krone."
          }
        }
      ],
      lexiconEntry: {
        title: "Die Schiffer & Lastkähne auf dem Nil",
        term: "Nilbarken & Transportgilden",
        explanation: {
          unterstufe: "Der Nil war die Autobahn des alten Ägyptens! Ohne Lastschiffe und Ruderer konnte kein einziger Pyramidenstein bewegt werden.",
          mittelstufe: "Die Kapitäne und Steuerleute schlossen sich in Gilden zusammen und besaßen beträchtlichen Einfluss auf den Warentransport.",
          oberstufe: "Die Flusslogistik verband das Reich von Nubien bis zum Mittelmeer; logistische Störungen hatten sofortige Reichskrisen zur Folge."
        },
        curiosityFact: "Ägyptische Schiffe hatten oft zwei riesige Steuerruder am Heck, die mit Seilwinden synchron bewegt wurden!"
      }
    }
  },

  // RUNDE 5: Reflexionsrunde I (Westufer von Theben)
  5: {
    branchA: {
      id: "r5_reflection_west_thebes_maat",
      roundNumber: 5,
      locationKey: "thebes_west",
      locationName: "Das Westufer von Theben – Tal der Könige",
      milestoneTitle: "Runde 5: MEILENSTEIN & REFLEXION I (Gleichgewicht)",
      imagePath: "/assets/thebes_karnak.jpg",
      situation: {
        unterstufe: "Halte inne, tapferer Reisender! Du hast das erste Viertel deiner Reise gemeistert. Wie steht es um dein Reich und deine Werte?",
        mittelstufe: "Erste Zäsur der Reise bei den Königsgräbern des Westufers: Prüfe die Balance deiner Macht zwischen Volk, Adel, Priestern und den Göttern.",
        oberstufe: "Staatstheoretische Zwischenbilanz im Angesicht der ewigen Nekropole: Herrschen heißt Ausgleichen. Wo droht Schieflage im Gefüge von Ma'at?"
      },
      choices: [
        {
          id: 'A',
          label: "Ein Dankopfer an Ma'at für Gerechtigkeit stiften",
          description: "Harmonisiere deine Werte und bringe Ruhe in die Gemeinschaft.",
          statChanges: { goetter: 10, volk: 10, priester: 10, adel: 10, ep: 1 },
          consequenceText: {
            unterstufe: "Ein Gefühl von Harmonie breitet sich aus. Alle Stände spüren deinen gerechten Geist.",
            mittelstufe: "Ma'at durchdringt deine Regentschaft. Ein solider Ausgleich der Stände.",
            oberstufe: "Du festigst die Fundamente der Herrschaft durch ausgewogene Integration aller Mächte."
          }
        },
        {
          id: 'B',
          label: "Die Mannschaft im Waffenhandwerk und Drill schulen",
          description: "Fokussiere dich auf Stärke, Wehrhaftigkeit und Tempo.",
          statChanges: { adel: 15, ep: 2 },
          consequenceText: {
            unterstufe: "Deine Soldaten marschieren im Gleichschritt. Deine Flotte ist unbezwingbar!",
            mittelstufe: "Disziplinierte Reihen und gestählte Muskeln erhöhen deine Schlagkraft.",
            oberstufe: "Professionalisierung der Truppen für kommende geopolitische Herausforderungen."
          }
        },
        {
          id: 'C',
          label: "Mit den Schreibern alte Papyri und Baupläne studieren",
          description: "Gewinne tiefes historisches und diplomatisches Wissen.",
          statChanges: { priester: 10, ep: 3 },
          consequenceText: {
            unterstufe: "In den Schriftrollen entdeckst du erstaunliche Geheimnisse über die Sterne!",
            mittelstufe: "Wissen ist die stärkste Waffe: Du erlernst die Feinheiten der Diplomatie.",
            oberstufe: "Verwaltungstechnische Vertiefung in Gesetzestexte und Steuermodelle."
          }
        },
        {
          id: 'D',
          label: "Die Weihe des Pharaonen-Auges (Wadjet) vollziehen",
          description: "Erhalte die göttliche Erleuchtung zur Schärfung aller Sinne.",
          epCost: 3,
          statChanges: { goetter: 25, priester: 15, volk: 15, adel: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Ein goldenes Leuchten umhüllt dich! Das Horusauge beschützt deine Expedition!",
            mittelstufe: "Das Wadjet-Auge verleiht dir Weisheit. Dein Ruf als künftiger Sonnenkönig strahlt.",
            oberstufe: "Vollkommener sakraler Schub: Deine Herrschaft gilt als kosmische Vorsehung."
          }
        }
      ],
      lexiconEntry: {
        title: "Das Prinzip der Ma'at – Ordnung gegen Chaos",
        term: "Ma'at & Feder der Wahrheit",
        explanation: {
          unterstufe: "Ma'at ist die Göttin der Wahrheit und Ordnung. Ihre Feder wog beim Totengericht gegen das Herz des Menschen.",
          mittelstufe: "Ma'at war das oberste Gesetz: Gerechtigkeit und kosmische Balance. Verfiel das Reich in Chaos (Isfet), hatte der König versagt.",
          oberstufe: "Staatsphilosophisches Fundament: Der Pharao ist Garant der universalen Ma'at zur Abwehr von Anarchie."
        },
        curiosityFact: "Die Feder auf dem Kopf der Ma'at war eine Straußenfeder – wog das Herz schwerer als sie, fraß das Krokodilmonster Ammit die Seele!"
      }
    },
    branchB: {
      id: "r5_reflection_west_thebes_military",
      roundNumber: 5,
      locationKey: "thebes_west",
      locationName: "Das Westufer von Theben – Die Wachtürme der Wüste",
      milestoneTitle: "Runde 5: MEILENSTEIN & REFLEXION I (Krieg & Schutz)",
      imagePath: "/assets/thebes_karnak.jpg",
      situation: {
        unterstufe: "An den Wachtürmen am Wüstenrand brennen Wachfeuer. Beduinenreiter beobachten eure Flotte aus der Ferne. Wie richtest du deine Expedition für die Weiterfahrt aus?",
        mittelstufe: "Zwischenstation bei den westlichen Grenzfestungen Thebens: Militärische Späher melden Karawanenüberfälle. Setzt du auf Aufrüstung, Diplomatie oder religiösen Schutz?",
        oberstufe: "Geostrategische Weichenstellung am Rande der thebanischen Nekropole: Grenzraumüberwachung gegen Libyer fordert Prioritätensetzung in Etat und Führungsstil."
      },
      choices: [
        {
          id: 'A',
          label: "Einen diplomatischen Waffenstillstand mit den Wüstenstämmen schließen",
          description: "Schenke Getreide und Tücher gegen freies Geleit auf dem Fluss.",
          statChanges: { volk: 15, adel: 10, ep: 2 },
          consequenceText: {
            unterstufe: "Die Wüstenreiter recken die Hände zum Gruß und ziehen friedlich ab.",
            mittelstufe: "Frieden durch Handel und Geschenke sichert die Ufer vor Überfällen.",
            oberstufe: "Pragmatische Einbindung von Grenzvölkern stabilisiert den Korridor dauerhaft."
          }
        },
        {
          id: 'B',
          label: "Die Bogenschützen auf den Schiffen in Gefechtsbereitschaft versetzen",
          description: "Militärische Härte absichern und patrouillieren.",
          statChanges: { adel: 15, ep: 1 },
          consequenceText: {
            unterstufe: "Die Schilde blitzen in der Sonne. Kein Angreifer wagt sich heran!",
            mittelstufe: "Abschreckung durch Stärke zeigt den regionalen Fürsten deine eiserne Hand.",
            oberstufe: "Klassische Demonstration militärischer Abschreckung sichert die Passage."
          }
        },
        {
          id: 'C',
          label: "Den Kriegsgott Month von Theben anrufen",
          description: "Opfere dem falkenköpfigen Gott des Krieges für Siegeskraft.",
          statChanges: { goetter: 15, priester: 15, volk: -5 },
          consequenceText: {
            unterstufe: "Die Priester weihen die Waffen. Die Soldaten fühlen sich unbesiegbar!",
            mittelstufe: "Der Month-Kult verleiht den Truppen heiligen Kampfesmut.",
            oberstufe: "Kultische Mobilisierung festigt den Zusammenhalt im Angesicht äußerer Bedrohung."
          }
        },
        {
          id: 'D',
          label: "Die goldene Friedensstele der Zwei Länder stiften",
          description: "Schaffe einen ewigen Friedensbund zwischen Oasenvölkern und Niltal.",
          epCost: 3,
          statChanges: { volk: 20, adel: 15, priester: 15, goetter: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Beide Völker feiern gemeinsam ein Fest der Brüderlichkeit am Ufer!",
            mittelstufe: "Ein historisches Dokument des Friedens, das die Grenzen für Generationen sichert.",
            oberstufe: "Höchste Staatskunst: Du verwandelst potentielle Invasoren in loyale Grenzwächter."
          }
        }
      ],
      lexiconEntry: {
        title: "Month – Der thebanische Kriegsgott",
        term: "Month & Grenzsicherung",
        explanation: {
          unterstufe: "Month war der Gott des Krieges mit Falkenkopf und zwei langen Federn auf der Krone.",
          mittelstufe: "Die Pharaonen verglichen sich in Schlachten oft mit 'Month in seiner Wut', um Stärke zu demonstrieren.",
          oberstufe: "Die Month-Tempel in Nord-Theben dienten der sakralen Einsegnung königlicher Feldzüge nach Vorderasien und Nubien."
        },
        curiosityFact: "In Theben wurde ein heiliger weißer Stier namens Buchis verehrt, der als lebendige Verkörperung des Month galt!"
      }
    }
  },

  // RUNDE 6: Dendera
  6: {
    branchA: {
      id: "r6_dendera_astronomy",
      roundNumber: 6,
      locationKey: "dendera",
      locationName: "Dendera – Das Haus der Sternengöttin Hathor",
      milestoneTitle: "Runde 6 [Weg der Sterne]: Der Himmelskalender von Dendera",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "Ihr macht Halt in Dendera. Es ist Neujahr! Die Priesterinnen der Hathor tanzen mit Sistren und laden das Volk zu Musik und Feier ein.",
        mittelstufe: "Im Hathor-Tempel von Dendera wird der Aufgang des Sterns Sirius beobachtet, der die Nilflut ankündigt. Die Priesterinnen bitten um edle Öle für das Spiegelritual.",
        oberstufe: "Kalenderastronomie und Festkultur: Das Neujahrsfest zu Ehren Hathors erfordert diplomatischen Aufwand, um sowohl sakrale Frömmigkeit als auch Hofzeremoniell zu wahren."
      },
      choices: [
        {
          id: 'A',
          label: "Das Volk zum Neujahrsfest einladen und Freibier spendieren",
          description: "Lass alle Ägypter singen, tanzen und das neue Niljahr feiern.",
          statChanges: { volk: 20, goetter: 10, adel: -5, ep: 1 },
          consequenceText: {
            unterstufe: "Lauter Jubel! Tausende Menschen preisen deine Güte bis zum Morgengrauen.",
            mittelstufe: "Die Volksseele kocht vor Begeisterung. Große Nähe zu den Untertanen.",
            oberstufe: "Gezielter Populismus stärkt die Massenloyalität und dämpft aufkeimenden Unmut."
          }
        },
        {
          id: 'B',
          label: "Die Astronominnen mit feinstem Zedernöl unterstützen",
          description: "Investiere in die Wissenschaft der Sternenforscher und Priesterinnen.",
          statChanges: { priester: 20, goetter: 15, adel: -5, ep: 1 },
          consequenceText: {
            unterstufe: "Die Priesterinnen zeigen dir den funkelnden Stern Sirius und prophezeien Segen!",
            mittelstufe: "Präzise Datierung der Nilflut rettet künftige Ernten. Gelehrte stehen hinter dir.",
            oberstufe: "Wissenschaftsförderung im sakralen Rahmen sichert exakte astrologisch-agrarische Prognosen."
          }
        },
        {
          id: 'C',
          label: "Das Fest meiden und sofort weitersegeln: Zeit ist Gold!",
          description: "Keine Feierlichkeiten! Die Schiffe müssen die Strömung nutzen.",
          statChanges: { adel: 15, volk: -15, goetter: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Enttäuschte Gesichter am Ufer, doch ihr seid zwei Tage schneller als geplant.",
            mittelstufe: "Effizient, aber kaltblütig. Der Adel schätzt das Tempo, das Volk fühlt sich übergangen.",
            oberstufe: "Priorisierung logistischer Deadlines gegenüber sozialer Kohäsion birgt Risiken."
          }
        },
        {
          id: 'D',
          label: "Sothis-Tierkreiszeremonie selbst leiten & Festkasse stiften",
          description: "Verknüpfe königliche Repräsentation mit astronomischer Weisheit.",
          epCost: 3,
          statChanges: { goetter: 20, volk: 15, priester: 15, adel: 10, ep: -1 },
          consequenceText: {
            unterstufe: "Ein unvergesslicher Moment! Sternenbilder erstrahlen und ganz Ägypten huldigt dir!",
            mittelstufe: "Du verschmilzt Wissenschaft, Mythos und Volksnähe zu einem triumphalen Staatsakt.",
            oberstufe: "Exzellente Herrscherinszenierung: Der Aufgang von Sirius wird mit deinem Namen verknüpft."
          }
        }
      ],
      lexiconEntry: {
        title: "Hathor, Sirius & das ägyptische Neujahr",
        term: "Sirius (Sothis) & Nilflut",
        explanation: {
          unterstufe: "Wenn der hellste Stern Sirius am Morgenhimmel erschien, wussten die Ägypter: Das lebenswichtige Nilwasser kommt bald!",
          mittelstufe: "Das Jahr der Ägypter hatte 365 Tage und war in drei Jahreszeiten unterteilt: Achet (Überschwemmung), Peret (Aussaat) und Schemu (Ernte).",
          oberstufe: "Der heliakische Aufgang des Sirius (Sothis-Zyklus) ermöglichte den Priester-Astronomen eine erstaunlich exakte Kalenderberechnung."
        },
        curiosityFact: "Hathor wurde oft als wunderschöne Kuh mit Sonnenscheibe dargestellt – die Kuh stand für Fürsorge und Nahrung."
      }
    },
    branchB: {
      id: "r6_dendera_healing",
      roundNumber: 6,
      locationKey: "dendera",
      locationName: "Dendera – Das Sanatorium der heilenden Wasser",
      milestoneTitle: "Runde 6 [Weg der Heilung]: Das Seuchen-Lazarett",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "Im Sanatorium von Dendera liegen kranke Ruderer und Fischer mit Nilfieber. Die Ärzte bitten dich um Heilkräuter und sauberes Wasser aus den königlichen Vorräten.",
        mittelstufe: "Ein Ausbruch von Wasserfieber schwächt die Hafenbevölkerung von Dendera. Teure Medizin aus Nubien könnte Leben retten, kostet aber Schätze deiner Expedition.",
        oberstufe: "Epidemie-Management an den Nilufern: Sanitäre Notlagen erfordern konsequente Quarantäne und Ressourcenallokation gegen den Rat geiziger Hofbeamter."
      },
      choices: [
        {
          id: 'A',
          label: "Die königlichen Heilkräuter und Salben vollständig spenden",
          description: "Rette die Kranken um jeden Preis vor dem Fiebertod.",
          statChanges: { volk: 25, adel: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Das Fieber bricht! Die Geheilten danken dir mit Tränen in den Augen.",
            mittelstufe: "Humanitäre Weitsicht stärkt deine Beliebtheit im Niltal enorm.",
            oberstufe: "Erfolgreiche Seucheneindämmung bewahrt die Arbeitskraft der Flussregion."
          }
        },
        {
          id: 'B',
          label: "Strikte Quarantäne anordnen und Schiffe desinfizieren",
          description: "Schütze deine Mannschaft und die Fracht vor Ansteckung.",
          statChanges: { adel: 15, volk: 5, ep: 1 },
          consequenceText: {
            unterstufe: "Räucherwerk und Essig reinigen die Kähne. Deine Mannschaft bleibt gesund!",
            mittelstufe: "Vernünftige Seuchenhygiene verhindert die Ausbreitung stromabwärts.",
            oberstufe: "Administrativer Infektionsschutz nach bewährten altägyptischen Methoden."
          }
        },
        {
          id: 'C',
          label: "Gebete im Hathor-Tempel anordnen und weiterfahren",
          description: "Die Götter entscheiden über Leben und Tod der Erkrankten.",
          statChanges: { goetter: 15, priester: 15, volk: -15 },
          consequenceText: {
            unterstufe: "Glocken klingen, doch die Kranken bleiben am Ufer zurück.",
            mittelstufe: "Fromm, aber wenig hilfreich für die Leidenden; Trauer in den Gassen.",
            oberstufe: "Kultische Pflichterfüllung ohne praktische Hilfe beschädigt das Volksvertrauen."
          }
        },
        {
          id: 'D',
          label: "Das Brunnen- und Filtersystem der Hathor-Priester erneuern",
          description: "Baue saubere Sandfilteranlagen für klares Quellwasser für die Stadt.",
          epCost: 3,
          statChanges: { volk: 25, adel: 15, priester: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Klares Wasser sprudelt! Die Krankheit ist für immer aus Dendera vertrieben!",
            mittelstufe: "Eine Meisterleistung sanitärer Infrastruktur. Dein Ruhm als Heiler verbreitet sich.",
            oberstufe: "Nachhaltige Strukturreform im Gesundheitswesen nach dem Vorbild großer Reformkönige."
          }
        }
      ],
      lexiconEntry: {
        title: "Medizin & Sanatorien im Alten Ägypten",
        term: "Ägyptische Heilkunde & Sanatorien",
        explanation: {
          unterstufe: "Tempel hatten oft Sanatorien mit Badebecken. Statuen mit magischen Inschriften wurden mit Wasser übergossen, das Kranke tranken.",
          mittelstufe: "Ägyptische Ärzte kannten Hunderte Heilpflanzen, darunter Knoblauch, Wacholder, Koriander und Honig als natürliches Antibiotikum.",
          oberstufe: "Die ägyptische Medizin kombinierte empirische Naturbeobachtung (Chirurgie, Hygiene) mit magisch-religiösen Heilritualen."
        },
        curiosityFact: "Ärzte im alten Ägypten waren oft auf ein einziges Körperteil spezialisiert – es gab eigene 'Augenärzte' und 'Zahnärzte'!"
      }
    }
  },

  // RUNDE 7: Abydos (Osiris-Mysterien)
  7: {
    branchA: {
      id: "r7_abydos_pilgrims",
      roundNumber: 7,
      locationKey: "abydos",
      locationName: "Abydos – Die Grabstätte des Osiris",
      milestoneTitle: "Runde 7 [Weg der Ahnen]: Die Mysterien von Abydos",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "Ihr erreicht den heiligsten Pilgerort: Abydos! Hier soll der Gott Osiris begraben sein. Pilger aus allen Landesteilen ziehen mit kleinen Opfergaben den Hügel hinauf.",
        mittelstufe: "In Abydos finden die jährlichen Osiris-Mysterien statt. Ein Streit zwischen Schauspielern und Tempelwächtern droht zu eskalieren.",
        oberstufe: "Kultische Kernstätte des Königtums: Abydos legitimiert die Sukzession. Religiöse Unruhen verlangen ein Schiedsgericht."
      },
      choices: [
        {
          id: 'A',
          label: "Als Schiedsrichter auftreten und Versöhnung stiften",
          description: "Höre beiden Seiten zu und stifte gerechten Frieden im Namen von Osiris.",
          statChanges: { volk: 15, priester: 15, adel: 5, ep: 1 },
          consequenceText: {
            unterstufe: "Beide Seiten reichen sich die Hände. Die Menschen preisen dein weises Urteil!",
            mittelstufe: "Dein Urteil stellt den Frieden her. Das Volk sieht in dir einen gerechten Richter.",
            oberstufe: "Richteramt im Geiste der Ma'at erfüllt: Deine juristische Autorität wächst immens."
          }
        },
        {
          id: 'B',
          label: "Eine prunkvolle Stele für die königlichen Ahnen stiften",
          description: "Lass deinen Namen und frühere Könige in weißen Kalkstein meißeln.",
          statChanges: { goetter: 20, adel: 15, volk: -5, ep: 1 },
          consequenceText: {
            unterstufe: "Die Stele funkelt in der Sonne. Die Adligen bewundern deine Treue zu den Ahnen.",
            mittelstufe: "Deine Ahnengalerie sichert deinen Thronanspruch für alle künftigen Generationen.",
            oberstufe: "Propagandistische Meisterleistung zur dynastischen Legitimation nach Vorbild der Königsliste."
          }
        },
        {
          id: 'C',
          label: "Wachen entsenden und den Tempelplatz militärisch räumen",
          description: "Sorge für Ruhe mit harter Hand: Pilger dürfen den Ablauf nicht stören.",
          statChanges: { adel: 15, volk: -20, priester: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Die Pilger weichen verstört zurück. Ein bitterer Nachgeschmack bleibt.",
            mittelstufe: "Ordnung hergestellt, doch die frommen Bürger sind zutiefst gekränkt.",
            oberstufe: "Militärische Härte an einem sakralen Ort erzeugt gefährlichen Groll."
          }
        },
        {
          id: 'D',
          label: "In die Rolle des Horus im Mysterienspiel schlüpfen",
          description: "Spiele den Rächer des Vaters vor Zehntausenden jubelnden Pilgern.",
          epCost: 3,
          statChanges: { goetter: 25, volk: 20, priester: 15, adel: 10, ep: -1 },
          consequenceText: {
            unterstufe: "Gänsehaut! Als du die Falkenmaske aufsetzt, fällt die Menge auf die Knie: 'Heil Horus!'",
            mittelstufe: "Ein elektrisierender Auftritt. Du bist die lebende Verkörperung des Horus.",
            oberstufe: "Theatrale Theokratie: Die Identifikation deiner Person mit Horus wird im Volk verankert."
          }
        }
      ],
      lexiconEntry: {
        title: "Osiris, Isis & die Wiedergeburt",
        term: "Osiris-Mythos & Königsliste",
        explanation: {
          unterstufe: "Osiris war der Gott der Toten und des ewigen Lebens. Sein böser Bruder Seth ermordete ihn, doch seine Frau Isis rettete ihn.",
          mittelstufe: "Der Osiris-Mythos versprach jedem Ägypter ein Weiterleben nach dem Tod. Abydos war der Pilgerort schlechthin für das Jenseits.",
          oberstufe: "In Abydos fand man berühmte Königslisten, die historische Dynastien zur Herrschaftslegitimation kanonisierten."
        },
        curiosityFact: "Millionen Tontöpfe mit Opfergaben wurden in Abydos hinterlassen – der Hügel hieß 'Topfhügel' (Umm el-Qa'ab)!"
      }
    },
    branchB: {
      id: "r7_abydos_tomb_robbery",
      roundNumber: 7,
      locationKey: "abydos",
      locationName: "Abydos – Die Nekropolenwache der Urkönige",
      milestoneTitle: "Runde 7 [Weg des Rechts]: Der Grabräuber-Prozess",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "Aufregung in den Grabhügeln von Abydos! Die Wächter haben Grabräuber gefasst, die goldenen Schmuck der allerersten Pharaonen stehlen wollten.",
        mittelstufe: "Ein spektakulärer Prozess in Abydos: Handwerker und korrupte Wachmänner wurden beim Aufbrechen uralter Königsgräber ertappt. Die Richter bitten dich um das Urteil.",
        oberstufe: "Rechtsstaatlichkeit und Sakrileg in der Urkönigs-Nekropole: Wie ahndest du Grabraub, wenn soziale Verelendung die Täter trieb, aber die Unantastbarkeit der Ahnen auf dem Spiel steht?"
      },
      choices: [
        {
          id: 'A',
          label: "Die Beute dem Volksschatz spenden und Milde walten lassen",
          description: "Bestrafe die Drahtzieher, doch schone verarmte Mitläufer.",
          statChanges: { volk: 20, adel: -10, priester: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Die armen Familien danken dir unter Tränen für deine Gnade.",
            mittelstufe: "Ein differenziertes Urteil beweist Menschlichkeit, auch wenn Priester murren.",
            oberstufe: "Pragmatische Sozialjustiz vermeidet unnötige Märtyrer in der Unterschicht."
          }
        },
        {
          id: 'B',
          label: "Das volle Strafmaß nach Gesetz verhängen und Wachen verdoppeln",
          description: "Statuiere ein Exempel zum Schutz der heiligen Totenruhe.",
          statChanges: { adel: 15, priester: 15, volk: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Die Grabräuber werden verbannt. Niemand wagt mehr einen Frevel.",
            mittelstufe: "Eiserne Gesetzesstrenge stellt die Autorität der Krone und der Priester wieder her.",
            oberstufe: "Rechtsdogmatismus sichert den Respekt vor sakralem Staatseigentum."
          }
        },
        {
          id: 'C',
          label: "Die Ahnenopfer im Namen der reuigen Sünder erneuern",
          description: "Lass die Verurteilten die Gräber mit Frondienst eigenhändig restaurieren.",
          statChanges: { goetter: 15, priester: 15, volk: 10, ep: 1 },
          consequenceText: {
            unterstufe: "Eine weise Strafe: Die Täter reparieren die Schäden und bitten die Ahnen um Verzeihung.",
            mittelstufe: "Wiedergutmachung durch Arbeit stellt die kosmische Ordnung wieder her.",
            oberstufe: "Didaktisch und restaurativ exzellente Justizpolitik im Sinne der Ma'at."
          }
        },
        {
          id: 'D',
          label: "Den Kodex der Ewigen Ruhe stiften & Nekropolen-Gilde gründen",
          description: "Schaffe ein fest besoldetes Wächter-Korps mit unbestechlichen Statuten.",
          epCost: 3,
          statChanges: { adel: 15, priester: 15, volk: 15, goetter: 20, ep: -1 },
          consequenceText: {
            unterstufe: "Die Gräber sind sicher für die Ewigkeit! Ganz Ägypten preist dein weises Gesetz!",
            mittelstufe: "Ein unbestechliches Wachsystem verhindert Raub für kommende Dynastien.",
            oberstufe: "Strukturelle Rechtsreform: Du bekämpfst die Wurzeln der Korruption institutionell."
          }
        }
      ],
      lexiconEntry: {
        title: "Gräber, Totengericht & Grabraub",
        term: "Nekropolenrecht & Ahnenkult",
        explanation: {
          unterstufe: "Gräber waren für die Ewigkeit gebaut. Wer ein Grab bestahl, beleidigte die Götter und verlor das Recht aufs Jenseits.",
          mittelstufe: "Historische Papyri aus Theben berichten von großen Grabräuber-Prozessen, bei denen Richter genaue Verhöre führten.",
          oberstufe: "Die Grabarchitektur reagierte ständig auf Plünderer mit Falltüren, Sackgassen und massiven Steinpfropfen."
        },
        curiosityFact: "Ägyptische Flüche an Grabwänden drohten Plünderern oft: 'Ein Krokodil sei gegen ihn im Wasser, eine Schlange gegen ihn auf Erden!'"
      }
    }
  },

  // RUNDE 8: Asyut
  8: {
    branchA: {
      id: "r8_asyut_caravan",
      roundNumber: 8,
      locationKey: "asyut",
      locationName: "Asyut – Die Festung des Wegeöffners Upuaut",
      milestoneTitle: "Runde 8 [Weg des Handels]: Karawanen aus den Oasen",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "Bei Asyut treffen Wüstenkarawanen aus den tiefen Oasen ein. Sie bringen geheimnisvolle Steine, Weihrauch und wilde Tiere, aber auch Gerüchte über Beduinen-Überfälle auf Händler.",
        mittelstufe: "Asyut bewacht den Knotenpunkt zwischen Nil und den Karawanenrouten der Westwüste. Nomadenstämme bitten um Handelsrechte, doch der lokale Adel will sie vertreiben.",
        oberstufe: "Geostrategische Weichenstellung: Grenzsicherung gegen Libyer und Beduinen oder Integration durch Handel? Asyuts Lage verlangt staatsmännische Weitsicht."
      },
      choices: [
        {
          id: 'A',
          label: "Einen gerechten Handelsvertrag mit den Oasenvölkern schließen",
          description: "Garantiere Schutz gegen Zölle und Nahrungsmittel.",
          statChanges: { volk: 15, adel: 10, ep: 1 },
          consequenceText: {
            unterstufe: "Frische Datteln, wohlriechender Weihrauch und bunte Stoffe füllen die Marktplätze!",
            mittelstufe: "Wirtschaftlicher Aufschwung für alle Beteiligten. Die Händler loben deine Vertragstreue.",
            oberstufe: "Pazifizierung durch wirtschaftliche Verflechtung – eine weitsichtige Außenhandelspolitik."
          }
        },
        {
          id: 'B',
          label: "Die Festungsmauern verstärken und Soldaten an den Rand schicken",
          description: "Sichere das Niltal mit Wachtürmen und Bogenschützen.",
          statChanges: { adel: 15, volk: -5, ep: 1 },
          consequenceText: {
            unterstufe: "Die Grenzposten stehen felsenfest. Kein Räuber wagt einen Angriff.",
            mittelstufe: "Sicherheit geht vor: Der Adel und die Gutsbesitzer atmen erleichtert auf.",
            oberstufe: "Militärische Abschreckung sichert den Status quo, bindet aber Truppenkontingente."
          }
        },
        {
          id: 'C',
          label: "Dem Wegeöffner Upuaut ein Wolfsbildnis weihen",
          description: "Bete zum Schutzgott der Straßen für sichere Geleitbriefe.",
          statChanges: { goetter: 15, priester: 15, adel: -5 },
          consequenceText: {
            unterstufe: "Die Standarte des Schakalgottes Upuaut wird feierlich vor eurer Flotte getragen.",
            mittelstufe: "Der Upuaut-Kult gewährt seinen rituellen Schutz. Die Besatzung schöpft Vertrauen.",
            oberstufe: "Sakraler Geleitschutz stärkt das Gemüt der Bevölkerung und schmeichelt der Geistlichkeit."
          }
        },
        {
          id: 'D',
          label: "Das Beduinen-Regiment in die königliche Palastgarde aufnehmen",
          description: "Wirb die besten Fährtenleser der Wüste als Ehrengarde an.",
          epCost: 3,
          statChanges: { adel: 15, volk: 10, goetter: 10, ep: -1 },
          consequenceText: {
            unterstufe: "Die Wüstenreiter schwören dir ewige Treue! Deine Eskorte ist nun gefürchtet!",
            mittelstufe: "Aus potenziellen Feinden werden unersetzliche Elitetruppen.",
            oberstufe: "Brillante imperiale Einbindung von Hilfstruppen zur Absicherung der Westflanke."
          }
        }
      ],
      lexiconEntry: {
        title: "Upuaut – Der Wegeöffner & die Oasen",
        term: "Upuaut & Karawanenwege",
        explanation: {
          unterstufe: "Upuaut war ein schakalköpfiger Kriegsgott. Sein Name bedeutet 'Der, der die Wege öffnet'. Er beschützte Reisende.",
          mittelstufe: "Asyut war das Tor zu den Oasen Charga und Dachla mit Hunderten Eseln beladen mit seltenen Gütern.",
          oberstufe: "Die Grenzverteidigung Ägyptens stützte sich auf befestigte Posten an Wadis, um Einfälle abzufangen."
        },
        curiosityFact: "Kamele gab es im alten Ägypten erst sehr spät! Bis dahin wurden alle Lasten mit Eseln transportiert."
      }
    },
    branchB: {
      id: "r8_asyut_sandstorm",
      roundNumber: 8,
      locationKey: "asyut",
      locationName: "Asyut – Der Rote Sandsturm (Chamsin)",
      milestoneTitle: "Runde 8 [Weg der Elemente]: Der Zorn des Wüstengottes Seth",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "Der Himmel färbt sich unheilvoll blutrot! Ein gewaltiger Chamsin-Sandsturm rast aus der Libyschen Wüste auf eure Schiffe zu. Sandkörner peitschen wie Nadeln ins Gesicht.",
        mittelstufe: "Ein verheerender Staubsturm droht eure Lastkähne auf die felsigen Untiefen des Nils zu drücken. Segel reißen, Ruderer sehen kaum die eigene Hand vor Augen.",
        oberstufe: "Naturkatastrophe im Niltal: Der Chamsin erfordert sofortige seemännische Notfallmanöver. Ein falscher Befehl versenkt die schwere Fracht im Nil."
      },
      choices: [
        {
          id: 'A',
          label: "Sofort alle Schiffe in eine geschützte Bucht steuern und Anker werfen",
          description: "Befehle der Mannschaft, Schutz hinter den Felsvorsprüngen zu suchen.",
          statChanges: { volk: 15, adel: 10, ep: 1 },
          consequenceText: {
            unterstufe: "In der Bucht liegt ihr sicher. Der Sturm braust über euch hinweg, ohne Schaden anzurichten!",
            mittelstufe: "Besonnene Seemannschaft rettet die gesamte Flotte unversehrt.",
            oberstufe: "Kluge Risikovermeidung schützt Personal und das königliche Transportgut."
          }
        },
        {
          id: 'B',
          label: "Dem Wüstengott Seth ein Rind opfern und um Windstille flehen",
          description: "Besänftige den Herrn der Stürme mit frommen Zeremonien.",
          statChanges: { goetter: 20, priester: 10, volk: -5 },
          consequenceText: {
            unterstufe: "Als das Gebet verstummt, flaut der beißende Sandwind spürbar ab!",
            mittelstufe: "Die Mannschaft schöpft Mut aus dem religiösen Beistand.",
            oberstufe: "Sakrale Beruhigung der Mannschaft in existenziellen Gefahrensituationen."
          }
        },
        {
          id: 'C',
          label: "Weiterrudern mit aller Gewalt: Keine Pause im Zeitplan!",
          description: "Kämpft euch gegen die Sandböen durch die Strömung.",
          statChanges: { adel: 10, volk: -20, ep: 1 },
          consequenceText: {
            unterstufe: "Die Ruderer keuchen mit blutigen Händen. Ihr kommt voran, aber alle sind erschöpft.",
            mittelstufe: "Zielstrebig, doch teuer bezahlt mit verletzten Ruderern und beschädigten Tauen.",
            oberstufe: "Skrupellose Disziplinierung birgt die Gefahr von Arbeitsverlusten."
          }
        },
        {
          id: 'D',
          label: "Flechtmatten-Schutzwand spannen & Flotte zu einem Katamaran koppeln",
          description: "Verbinde die Schiffe mit Querbalken zur unkentbaren Festung gegen Wellen.",
          epCost: 3,
          statChanges: { volk: 20, adel: 15, goetter: 10, ep: -1 },
          consequenceText: {
            unterstufe: "Genial! Die Schiffe trotzen den Wellen wie eine einzige unzerstörbare Burg!",
            mittelstufe: "Eine nautische Meisterleistung altägyptischer Ingenieure trotzt den Elementen.",
            oberstufe: "Technologische Überlegenheit und Führungsstärke verwandeln Gefahr in Triumph."
          }
        }
      ],
      lexiconEntry: {
        title: "Seth – Gott der Wüste, Stürme & des Chaos",
        term: "Seth & der Wüstensturm Chamsin",
        explanation: {
          unterstufe: "Seth war der Gott der roten Wüste und der Stürme. Obwohl er gefürchtet war, beschützte er auch die Sonnenbarke des Re vor der Riesenschlange Apophis.",
          mittelstufe: "Der Chamsin ist ein heißer Wüstenwind, der 50 Tage im Frühling Sand aus der Sahara ins Niltal bläst.",
          oberstufe: "Seth verkörperte das notwendige wilde Chaos (Isfet), das durch Ma'at gebändigt werden musste, aber unentbehrlich für die kosmische Dynamik war."
        },
        curiosityFact: "Seths heiliges Tier konnte bis heute kein Zoologe genau identifizieren – es hat lange Ohren, einen Krummschnabel und einen aufrechten Pfeilschwanz!"
      }
    }
  },

  // RUNDE 9: Amarna
  9: {
    branchA: {
      id: "r9_amarna_aton",
      roundNumber: 9,
      locationKey: "amarna",
      locationName: "Achet-Aton (Amarna) – Die Stadt der Sonnenscheibe",
      milestoneTitle: "Runde 9 [Weg der Sonne]: Die Sonnenrevolution Echnatons",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "Ihr fahrt an den Ruinen einer seltsamen Stadt vorbei: Hier betete ein früherer Pharao nur noch die Sonnenscheibe Aton an und verbot alle anderen Götter. Doch die alten Priester hassen diese Erinnerung.",
        mittelstufe: "Bei Amarna liegt das Erbe der religiösen Revolution Echnatons. Einige Gelehrte wollen die verbotenen Hymnen retten, während Amun-Priester fordern, jeden Stein zu zerschlagen.",
        oberstufe: "Das Trauma des Monotheismus: Echnatons Aton-Häresie spaltet das theologische Denken noch immer. Fanatische Bilderstürmer stehen kulturinteressierten Denkern gegenüber."
      },
      choices: [
        {
          id: 'A',
          label: "Die Tempelsteine unberührt lassen und Geschichte bewahren",
          description: "Erkläre, dass auch vergangene Fehler Teil von Ägyptens Erbe sind.",
          statChanges: { volk: 15, priester: -10, ep: 2 },
          consequenceText: {
            unterstufe: "Die Gelehrten danken dir im Stillen für deinen Mut und deine Weitsicht.",
            mittelstufe: "Geschichtsbewusstsein statt Zerstörungswut. Denkern imponiert das sehr.",
            oberstufe: "Kulturhistorische Mäßigung beweist reife Staatsführung jenseits religiöser Hetze."
          }
        },
        {
          id: 'B',
          label: "Die Aton-Inschriften tilgen, um den Priestern zu gefallen",
          description: "Lass Hammer und Meißel sprechen: Nur die alten Götter zählen!",
          statChanges: { priester: 20, goetter: 15, volk: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Der Staub fliegt. Die Priester von Amun feiern dich als Verteidiger des Glaubens.",
            mittelstufe: "Restauration der Orthodoxie. Das Priestertum stellt sich fest an deine Seite.",
            oberstufe: "Schulterschluss mit dem Klerus zur Absicherung traditionalistischer Eliten."
          }
        },
        {
          id: 'C',
          label: "Die Steine als Baumaterial für den Weitertransport verladen",
          description: "Pragmatisch denken: Guter Kalkstein gehört in nützliche Fundamente!",
          statChanges: { adel: 15, ep: 1 },
          consequenceText: {
            unterstufe: "Die Lastkähne sinken tiefer ins Wasser. Randvoll mit bestem Werkstein!",
            mittelstufe: "Hofbaumeister loben deine Sparsamkeit und Zielstrebigkeit.",
            oberstufe: "Pragmatische Spolienverwertung: Wirtschaftlicher Nutzen triumphiert."
          }
        },
        {
          id: 'D',
          label: "Den Sonnenhymnus in die Lehre der Ma'at integrieren",
          description: "Zeige, dass die Sonne jedem Lebewesen scheint – und vereine Licht mit Ordnung.",
          epCost: 3,
          statChanges: { goetter: 20, volk: 20, priester: 10, adel: 10, ep: -1 },
          consequenceText: {
            unterstufe: "Worte voller Poesie berühren alle: 'Die Sonne erwärmt jedermann!'",
            mittelstufe: "Eine theologische Meisterleistung: Du entfernst das Gift des Fanatismus.",
            oberstufe: "Philosophische Synthese auf höchstem Niveau heilt die Reichsspaltung."
          }
        }
      ],
      lexiconEntry: {
        title: "Echnaton, Nofretete & der Sonnengott Aton",
        term: "Amarna-Zeit & Monotheismus",
        explanation: {
          unterstufe: "Pharao Echnaton schaffte fast alle Götter ab und betete nur noch die Sonnenscheibe Aton an. Seine schöne Frau war Königin Nofretete.",
          mittelstufe: "Nach Echnatons Tod machten spätere Pharaonen seine Reformen rückgängig und verließen die Stadt Amarna wieder.",
          oberstufe: "Die Amarna-Epoche markiert eine revolutionäre Zäsur in Kunst, Theologie und Literatur."
        },
        curiosityFact: "In Amarna fand man 1912 die weltberühmte Büste der Königin Nofretete – heute im Neuen Museum in Berlin!"
      }
    },
    branchB: {
      id: "r9_amarna_artists",
      roundNumber: 9,
      locationKey: "amarna",
      locationName: "Achet-Aton (Amarna) – Die Werkstatt des Bildhauers Thutmosis",
      milestoneTitle: "Runde 9 [Weg der Kunst]: Die geretteten Meisterwerke",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "In einer verlassenen Bildhauerwerkstatt am Ufer entdeckt ihr wunderschöne Skulpturen und bunte Wandmalereien aus Gips und Kalkstein. Die Künstler flehen dich an, ihre Kunstwerke auf deinen Schiffen nach Norden zu retten.",
        mittelstufe: "Kulturgüter in Gefahr: Die lebensechten Porträts der Amarna-Künstler sollen von Tempelwächtern zertrümmert werden. Rettest du die Kunst oder fürchtest du den Bann der Orthodoxie?",
        oberstufe: "Kulturpolitik zwischen Zensur und Ästhetik: Die revolutionäre naturalistische Bildsprache der Amarna-Kunst fasziniert die Hofelite, birgt aber theologische Sprengkraft."
      },
      choices: [
        {
          id: 'A',
          label: "Die Bildwerke heimlich einladen und den Museen des Palastes schenken",
          description: "Rette die unersetzlichen Porträts für die Nachwelt.",
          statChanges: { adel: 15, volk: 10, ep: 2 },
          consequenceText: {
            unterstufe: "Sorgfältig in Stroh verpackt gleiten die Kunstschätze an Bord. Die Künstler jubeln!",
            mittelstufe: "Kulturbewusstsein par excellence: Du rettest Meisterwerke von Weltruhm.",
            oberstufe: "Mäzenatentum adelt deine Regentschaft als Beschützer von Kunst und Geist."
          }
        },
        {
          id: 'B',
          label: "Nur Statuen ohne religiöse Inschriften zulassen",
          description: "Reine Natur- und Tierbilder dürfen mitreisen, religiöse Porträts bleiben zurück.",
          statChanges: { priester: 10, adel: 10, ep: 1 },
          consequenceText: {
            unterstufe: "Schöne Lotus-Reliefs und Pferdeskulpturen schmücken nun euer Hauptschiff.",
            mittelstufe: "Ein vorsichtiger Mittelweg vermeidet Konflikte mit der Geistlichkeit.",
            oberstufe: "Diplomatische Selektion bewahrt das Kunstgut ohne theologische Provokation."
          }
        },
        {
          id: 'C',
          label: "Den Priestern gehorchen und keine ketzerische Kunst an Bord dulden",
          description: "Kein einziges Bildnis aus Amarna betritt die Flotte.",
          statChanges: { priester: 20, volk: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Die Bildhauer weinen, doch die Tempelwächter nicken dir anerkennend zu.",
            mittelstufe: "Streng orthodox; der Hofklerus dankt dir für die bedingungslose Treue.",
            oberstufe: "Bedingungslose Unterwerfung unter das theologische Diktat."
          }
        },
        {
          id: 'D',
          label: "Die Schule der Naturwahrheit unter königlichem Siegel eröffnen",
          description: "Erkläre lebensechte Malerei zum neuen königlichen Hofstil von Memphis.",
          epCost: 3,
          statChanges: { adel: 20, volk: 20, goetter: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Ein ästhetischer Triumph! Ganz Ägypten staunt über die lebendige Schönheit der Bilder!",
            mittelstufe: "Du revolutionierst die ägyptische Kunst und begründest ein neues goldenes Zeitalter.",
            oberstufe: "Synthese aus Tradition und Innovation: Dein Hof wird zum Magneten der weltbesten Meister."
          }
        }
      ],
      lexiconEntry: {
        title: "Die Bildhauer von Amarna & Nofretete",
        term: "Amarna-Kunst & Bildhauer Thutmosis",
        explanation: {
          unterstufe: "In Amarna malten die Künstler Menschen zum ersten Mal ganz echt mit Falten und Gefühlen, statt immer steif und fehlerfrei.",
          mittelstufe: "In der Werkstatt des Hofbildhauers Thutmosis fand man Porträtbüsten der königlichen Familie von unübertroffener Schönheit.",
          oberstufe: "Der amarnazeitliche Naturalismus brach mit dem 1000-jährigen Kanon der idealisierten Monumentalplastik."
        },
        curiosityFact: "Bei der berühmten Büste der Nofretete fehlt die linke Augeneinlage aus Bergkristall – vermutlich diente sie dem Bildhauer als Lehrmodell!"
      }
    }
  },

  // RUNDE 10: Hermopolis (Halbzeit)
  10: {
    branchA: {
      id: "r10_hermopolis_thot",
      roundNumber: 10,
      locationKey: "hermopolis",
      locationName: "Hermopolis Magna (Chmunu) – Die Stadt des Thot",
      milestoneTitle: "Runde 10: MEILENSTEIN & REFLEXION II (Halbzeit der Reise)",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "Halbzeit der Expedition! Ihr erreicht Hermopolis, die Stadt des Gottes Thot – Schutzherr aller Schreiber, Zahlen und Weisheit. Wie klug führst du deine Expedition bisher?",
        mittelstufe: "Die Schiffe legen bei Chmunu an. Die Schriftgelehrten fordern dich auf, Rechenschaft abzulegen über deine Erfolge, Vorräte und Werte.",
        oberstufe: "Kardinale Zwischenprüfung am Sitz der kosmischen Urgötter: Die Chronik deiner Entscheidungen wird mit den Waagschalen des Thot gemessen."
      },
      choices: [
        {
          id: 'A',
          label: "Einen philosophischen Disput mit den Weisen führen",
          description: "Beweise deine Urteilskraft über Gerechtigkeit und Staatskunst.",
          statChanges: { ep: 4, priester: 10, adel: 10 },
          consequenceText: {
            unterstufe: "Die Schreiber nicken anerkennend: Dein Verstand ist schärfer als eine Schilffeder!",
            mittelstufe: "Große Anerkennung. Deine Argumente überzeugen selbst skeptische Richter.",
            oberstufe: "Intellektueller Triumph: Du beweist staatsphilosophische Reife vor den Denkern."
          }
        },
        {
          id: 'B',
          label: "Das Gold für das Volk spenden und Festmahl ausrichten",
          description: "Teile den Reichtum der Expedition mit den Ärmsten der Stadt.",
          statChanges: { volk: 25, adel: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Freudentränen und Musik erfüllen die Gassen. Das Volk liebt dich!",
            mittelstufe: "Ungebrochene Zuneigung der Massen. Dein Ruf als 'Gütiger Hirte' eilt dir voraus.",
            oberstufe: "Tiefe Verankerung im Volk stärkt deine Krisenfestigkeit gegen Intrigen."
          }
        },
        {
          id: 'C',
          label: "Die Flotte von Grund auf überholen und Segel setzen",
          description: "Nutze den Halt zur technischen Instandsetzung der Schiffe.",
          statChanges: { adel: 15, goetter: 10, ep: 2 },
          consequenceText: {
            unterstufe: "Frisches Teer und weiße Leinen: Eure Boote sehen aus wie neu!",
            mittelstufe: "Hervorragende Logistikarbeit garantiert eine zügige Weiterfahrt.",
            oberstufe: "Materielle Werterhaltung und nautische Einsatzbereitschaft sichern Führung."
          }
        },
        {
          id: 'D',
          label: "Die Papyrusrolle der vollkommenen Weisheit entschlüsseln",
          description: "Lies die heiligen Schriften des Thot für übernatürliche Einsichten.",
          epCost: 3,
          statChanges: { goetter: 20, priester: 20, adel: 20, volk: 20, ep: -1 },
          consequenceText: {
            unterstufe: "Erleuchtung durchströmt dich! Die Geheimnisse der Sterne liegen vor dir!",
            mittelstufe: "Thot segnet deine Stirn mit Weisheit. Alle Stände erkennen dich an.",
            oberstufe: "Göttlicher Wissenssprung: Vollkommene Einheit von Macht und Weisheit."
          }
        }
      ],
      lexiconEntry: {
        title: "Thot – Gott der Schreiber, Magie & des Mondes",
        term: "Thot & Schreiberhandwerk",
        explanation: {
          unterstufe: "Thot wurde als Pavian oder Ibis mit langem Schnabel dargestellt. Er erfand die Hieroglyphen und hielt beim Totengericht alles genau fest.",
          mittelstufe: "Schreiber zu sein war der angesehenste Beruf: Man musste keine schwere Feldarbeit leisten und regierte mit dem Stift.",
          oberstufe: "Das Haus des Lebens (Per Anch) in Hermopolis war zugleich Archiv, Bibliothek und Zentrum sakraler Wissensüberlieferung."
        },
        curiosityFact: "Ägyptische Schüler mussten hunderte Hieroglyphen auf Scherben üben – der Spruch lautete: 'Das Ohr des Knaben ist auf seinem Rücken!'"
      }
    },
    branchB: {
      id: "r10_hermopolis_treasury",
      roundNumber: 10,
      locationKey: "hermopolis",
      locationName: "Hermopolis – Der Schatzkammer-Audit des Wesirs",
      milestoneTitle: "Runde 10: MEILENSTEIN & REFLEXION II (Die Schatzprüfung)",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "Der oberste Schatzmeister des Reiches betritt euer Schiff mit Papyrusrollen und Waagschalen. Er will genau wissen, wie sparsam oder verschwenderisch du bisher regiert hast!",
        mittelstufe: "Reichsfinanzprüfung zur Halbzeit: Der Wesir verlangt eine genaue Gegenüberstellung deiner Abgaben, Ausgaben und Vorräte. Wie bilanzierst du deine bisherige Reise?",
        oberstufe: "Fiskalische Rechenschaft vor dem Hofgesandten: Ein rigoroser Haushaltstest prüft deine Eignung als künftiger Staatslenker."
      },
      choices: [
        {
          id: 'A',
          label: "Vollkommene Transparenz: Alle Kontobücher offenlegen",
          description: "Zeige dem Schatzmeister jeden Getreidesack und jedes Goldstück.",
          statChanges: { adel: 15, priester: 10, ep: 3 },
          consequenceText: {
            unterstufe: "Der Schatzmeister nickt begeistert: Vorbildliche Ordnung und Disziplin!",
            mittelstufe: "Reichsweite Anerkennung deiner redlichen und unbestechlichen Haushaltsführung.",
            oberstufe: "Bürokratische Integrität festigt deine Autorität bei den staatlichen Kontrollorganen."
          }
        },
        {
          id: 'B',
          label: "Einen Sonderzoll auf importierte Luxusgüter erheben",
          description: "Fülle die Staatskasse durch Abgaben reicher Kaufleute auf.",
          statChanges: { adel: -10, volk: 15, ep: 2 },
          consequenceText: {
            unterstufe: "Frisches Gold strömt ein! Das Volk freut sich über günstige Grundnahrungsmittel.",
            mittelstufe: "Progressive Besteuerung sichert finanzielle Reserven für die Pyramidenbaustelle.",
            oberstufe: "Wirtschaftspolitische Umverteilung schont die Staatskasse zu Lasten von Handelsoligarchien."
          }
        },
        {
          id: 'C',
          label: "Den Prüfern mit königlichem Prunk imponieren und Geschenke machen",
          description: "Diplomatische Großzügigkeit glättet manche Ungereimtheit im Etat.",
          statChanges: { adel: 20, ep: 1 },
          consequenceText: {
            unterstufe: "Feinster Wein und Goldschalen überzeugen die Inspektoren restlos.",
            mittelstufe: "Der Prüfbericht fällt glänzend aus, auch wenn es die Expeditionskasse schmälerte.",
            oberstufe: "Klassisches Hofklientelsystem: Du sicherst dir Wohlwollen durch Geschenke."
          }
        },
        {
          id: 'D',
          label: "Das königliche Steuersystem der Gerechten Ma'at stiften",
          description: "Führe gerechte Steuersätze ein, die sich automatisch an die Nilfluthöhe anpassen.",
          epCost: 3,
          statChanges: { volk: 25, adel: 15, priester: 15, goetter: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Ein Jahrhundertgesetz! Wenn der Nil niedrig steht, zahlt niemand Steuern!",
            mittelstufe: "Ein revolutionäres Steuermodell: Volk und Adel preisen deine wirtschaftliche Genialität.",
            oberstufe: "Antizyklische Finanzpolitik der Antike: Du sicherst dauerhaften Staatswohlstand."
          }
        }
      ],
      lexiconEntry: {
        title: "Das ägyptische Steuersystem & die Zählung",
        term: "Viehzählung & Abgabenwesen",
        explanation: {
          unterstufe: "Alle zwei Jahre fand die große Viehzählung statt. Schreiber reisten durchs Land und zählten jede Kuh, jedes Schaf und jedes Getreidefeld.",
          mittelstufe: "Steuern wurden in Naturalien bezahlt: Getreide, Leinen, Rinder und Bier. Münzgeld existierte im Alten Reich noch nicht.",
          oberstufe: "Die Steuererfassung über die Nilometerstände ermöglichte dem Schatzhaus eine exakte Ernteprognose und Steuerfestsetzung."
        },
        curiosityFact: "Wer seine Steuern nicht zahlte, wurde vor die Schreiber geführt und mit Palmstöcken auf die Fußsohlen geschlagen!"
      }
    }
  },

  // RUNDE 11: Fayum & See Moeris
  11: {
    branchA: {
      id: "r11_fayum_flood",
      roundNumber: 11,
      locationKey: "fayum",
      locationName: "Fajum & See Moeris – Das Grüne Paradies",
      milestoneTitle: "Runde 11 [Weg des Wassers]: Der Dammbruch am Moeris-See",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "Ihr nähert euch der Fayum-Oase. Durch Kanäle wurde die Wüste in Weizenfelder verwandelt. Doch ein Dammbruch bedroht die Bauernhöfe!",
        mittelstufe: "Am Moeris-See droht eine Deichkatastrophe. Wenn die Schleusentore nicht gestützt werden, ersaufen tausende Morgen wertvoller Ackerfläche.",
        oberstufe: "Wasserwirtschaft als Staatsräson: Der Bahr-Yusuf-Kanal erfordert krisenfesten Einsatz. Zögern vernichtet die Kornkammer Unterägyptens."
      },
      choices: [
        {
          id: 'A',
          label: "Alle Soldaten sofort zum Deichbau abkommandieren",
          description: "Schaufelt Erde und Steine, um das Wasser zu stoppen.",
          statChanges: { volk: 20, adel: 10, ep: 1 },
          consequenceText: {
            unterstufe: "Gemeinsam schaffen es Soldaten und Bauern! Der Damm hält und die Ernte ist gerettet!",
            mittelstufe: "Ein glänzender Rettungseinsatz. Die Bauern singen Lieder auf deine Hilfe.",
            oberstufe: "Militäreinsatz im Katastrophenschutz festigt die Loyalität der Bevölkerung."
          }
        },
        {
          id: 'B',
          label: "Den Adligen befehlen, private Ressourcen zu schicken",
          description: "Lass die reichen Gutsbesitzer für den Schutz ihrer Güter zahlen.",
          statChanges: { volk: 15, adel: -15, ep: 1 },
          consequenceText: {
            unterstufe: "Das Volk ist erleichtert, doch die Landbesitzer murren über die Kosten.",
            mittelstufe: "Soziale Lastenteilung erzürnt die lokale Oberschicht.",
            oberstufe: "Progressive Pflichtenbürde für den Adel – populär, aber heikel am Hof."
          }
        },
        {
          id: 'C',
          label: "Die Priester um eine Wasser-Bannung anrufen",
          description: "Bete zum Herrn des Moeris-Sees, die Fluten zu beruhigen.",
          statChanges: { goetter: 15, priester: 15, volk: -10 },
          consequenceText: {
            unterstufe: "Der Rauch der Opfertiere steigt empor. Doch das Wasser weicht nur langsam.",
            mittelstufe: "Kultische Pflichterfüllung, doch praktische Flutschäden blieben nicht aus.",
            oberstufe: "Theologischer Ritualismus reicht in akuten Ingenieurskrisen selten aus."
          }
        },
        {
          id: 'D',
          label: "Geniales Schleusen-Bypass-System anlegen",
          description: "Leite Hochwasser in ein neues Becken zur Fischzucht um.",
          epCost: 3,
          statChanges: { volk: 20, adel: 15, goetter: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Ein Wunderwerk! Statt Zerstörung gibt es neue Fischteiche und Obstgärten!",
            mittelstufe: "Aus einer Katastrophe machst du einen dauerhaften wirtschaftlichen Segen.",
            oberstufe: "Hydraulische Ingenieurskunst nach Vorbild der Könige des Mittleren Reiches."
          }
        }
      ],
      lexiconEntry: {
        title: "Wasserbau & die Fayum-Urbarmachung",
        term: "Bahr Yusuf & Kanalbau",
        explanation: {
          unterstufe: "Die Könige bauten Kanäle, um Nilwasser in den See Moeris zu leiten. So wurde Sumpfland zu fruchtbarem Weizenboden.",
          mittelstufe: "Pharao Amenemhet III. verwandelte das Fayum-Becken durch Schleusenanlagen in das größte Agrarprojekt der Antike.",
          oberstufe: "Zentrale Wasserwirtschaft (Kanalnetze, Nilometer) war existenzielle Bedingung für Ägypten."
        },
        curiosityFact: "Das Nilometer war eine Steintreppe ins Wasser – bei 16 Ellen jubelte das Volk über perfekte Ernte!"
      }
    },
    branchB: {
      id: "r11_fayum_granary_expansion",
      roundNumber: 11,
      locationKey: "fayum",
      locationName: "Fajum – Die Jagdgründe des Krokodilsgottes",
      milestoneTitle: "Runde 11 [Weg der Wildnis]: Die Jagd im Papyrusdickicht",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "In den Schilfwäldern des Fayum wimmelt es von Vögeln, Flusspferden und Fischen. Adlige Jäger wollen mit Wurfhölzern jagen, doch Bauern warnen vor zerstörten Brutstätten.",
        mittelstufe: "Konflikt im Naturschutzgebiet des Fajum: Die höfische Jagdgesellschaft beansprucht die Sümpfe, während lokale Fischer um ihre Existenzgrundlage bangen.",
        oberstufe: "Ressourcennutzung gegen aristokratische Freizeitkultur: Wer kontrolliert die ertragreichen Feuchtgebiete der Oase?"
      },
      choices: [
        {
          id: 'A',
          label: "Fischereirechte für die Bauern sichern und Jagdzonen beschränken",
          description: "Schütze die Nahrungsmittelversorgung der einfachen Bevölkerung.",
          statChanges: { volk: 20, adel: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Reiche Fischfänge füllen die Körbe. Die Fischer danken dir herzlich!",
            mittelstufe: "Soziale Absicherung der Subsistenzwirtschaft stärkt die Ernährungssicherheit.",
            oberstufe: "Schutz von Gemeingütern gegen feudale Übergriffe festigt inneren Frieden."
          }
        },
        {
          id: 'B',
          label: "Die Jagdgesellschaft der Adligen mit königlichem Gefolge leiten",
          description: "Gewinne die Sympathie des Hofadels durch gemeinsame Jagderfolge.",
          statChanges: { adel: 20, volk: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Fette Enten und Gänse hängen an den Lanzen. Die Adligen loben deine Treffsicherheit!",
            mittelstufe: "Aristokratische Kontaktpflege auf höchstem Niveau festigt deine Hofallianzen.",
            oberstufe: "Symbolische Herrschaftsdemonstration über die ungezähmte Natur."
          }
        },
        {
          id: 'C',
          label: "Den Sumpfgöttern heilige Schutzbezirke weihen",
          description: "Erkläre weite Schilfgürtel zum unantastbaren Tempelrevier.",
          statChanges: { goetter: 15, priester: 15, ep: 1 },
          consequenceText: {
            unterstufe: "Die Reiher nisten ungestört. Die Priester loben deinen Respekt vor der Natur.",
            mittelstufe: "Sakraler Naturschutz sichert die biologische Vielfalt der Oase.",
            oberstufe: "Kultische Heiligsprechung von Ökosystemen als frühe Umweltpolitik."
          }
        },
        {
          id: 'D',
          label: "Die Papyrus-Manufaktur des Nordens gründen",
          description: "Ernte das Schilf nachhaltig zur massenhaften Herstellung von Schreibrollen.",
          epCost: 3,
          statChanges: { volk: 20, adel: 15, priester: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Goldgelber, makelloser Papyrus für alle Schulen und Ämter des Reiches!",
            mittelstufe: "Ein neuer Industriezweig bringt Wohlstand für Fischer und Schreiber gleichermaßen.",
            oberstufe: "Industrielle Veredelung heimischer Rohstoffe schafft ein staatliches Schreibmonopol."
          }
        }
      ],
      lexiconEntry: {
        title: "Papyrus & die Jagd im Schilf",
        term: "Papyrus & Sumpfwelt",
        explanation: {
          unterstufe: "Aus Papyrus machten die Ägypter nicht nur Schreibpapier, sondern auch Boote, Seile, Sandalen und Körbe!",
          mittelstufe: "Die Vogeljagd mit dem Wurfholz war ein beliebtes Motiv in Gräbern: Sie symbolisierte den Sieg über das Chaos der Wildnis.",
          oberstufe: "Das Schilfdickicht galt als Rückzugsort der Göttin Isis, die hier ihren Sohn Horus vor dem bösen Seth versteckte."
        },
        curiosityFact: "Papyrusblätter wurden hergestellt, indem man das weiße Mark in Streifen schnitt, kreuzweise legte und mit Holzhämmern presste!"
      }
    }
  },

  // RUNDE 12: Meidum (Die Knick- & Einsturzpyramide)
  12: {
    branchA: {
      id: "r12_meidum_collapse",
      roundNumber: 12,
      locationKey: "meidum",
      locationName: "Meidum – Der Kollaps der falschen Pyramide",
      milestoneTitle: "Runde 12 [Weg der Statik]: Die Warnung der Architekten",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "Am Horizont ragt ein seltsamer Felsturm empor: Die Pyramide von Meidum! Frühere Bauherren machten Fehler beim Bauwinkel. Die Baumeister streiten über den besten Winkel für Gizeh.",
        mittelstufe: "In Meidum siehst du die Überreste kühner architektonischer Experimente. Der Oberbaumeister bittet dich um eine Richtungsentscheidung für die Neigung der Pyramidenflanken.",
        oberstufe: "Statik gegen Größenwahn: Meidums Teilschaden mahnt zur Vorsicht. Willst du monumentale Steilheit oder bewährte solide Bauweisen fördern?"
      },
      choices: [
        {
          id: 'A',
          label: "Sicherheit zuerst: Den flacheren 43-Grad-Winkel befehlen",
          description: "Bauen für die Ewigkeit ohne Einsturzrisiko.",
          statChanges: { adel: 15, ep: 2 },
          consequenceText: {
            unterstufe: "Die Architekten atmen auf. Deine Vernunft schützt vor Steinschlag.",
            mittelstufe: "Pragmatische Sicherheitspolitik. Das Bauwerk wird Jahrtausende stehen.",
            oberstufe: "Ingenieurtechnische Vernunft triumphiert über eitle Prunksucht."
          }
        },
        {
          id: 'B',
          label: "Höchste Höhe fordern: 'Die Pyramide berührt den Himmel!'",
          description: "Riskiere steilere Hänge für unendlichen Ruhm.",
          statChanges: { goetter: 15, volk: -15, ep: 1 },
          consequenceText: {
            unterstufe: "Ein atemberaubender Turm entsteht, doch Arbeiter schuften in Lebensgefahr.",
            mittelstufe: "Majestätischer Anblick – erkauft mit harter Mühsal.",
            oberstufe: "Monumentalismus schüchtert Untertanen und Nachbarn ein."
          }
        },
        {
          id: 'C',
          label: "Die Priester um Orakelbefragung bitten",
          description: "Lass die Götter über den richtigen Neigungswinkel entscheiden.",
          statChanges: { priester: 20, goetter: 15, adel: -5 },
          consequenceText: {
            unterstufe: "Die Priester deuten Vogelflüge und geben ihren göttlichen Segen.",
            mittelstufe: "Sakrale Absicherung nimmt den Bauleitern die Last der Verantwortung ab.",
            oberstufe: "Religiöse Risikoverlagerung sichert kosmische Legitimation."
          }
        },
        {
          id: 'D',
          label: "Goldenen Schnitt & Doppelkammer-Entlastungsbögen nutzen",
          description: "Mathematische Innovationen zur perfekten Balance.",
          epCost: 3,
          statChanges: { adel: 20, goetter: 15, volk: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Die Lösung verblüfft alle! Schlank, hoch und stabil wie Diamant!",
            mittelstufe: "Architekturgeschichte: Das Vorbild für Cheops ist geboren.",
            oberstufe: "Synthese aus Mathematik und Mystik erschafft ein Weltwunder."
          }
        }
      ],
      lexiconEntry: {
        title: "Die Pyramidenentwicklung von Meidum nach Dahschur",
        term: "Knickpyramide & Statik",
        explanation: {
          unterstufe: "Die Ägypter bauten nicht sofort perfekte Pyramiden. In Meidum und Dahschur probierten sie aus, bis der richtige Winkel gefunden war.",
          mittelstufe: "König Snofru baute drei riesige Pyramiden. Bei der Knickpyramide musste der Winkel von 54 auf 43 Grad verflacht werden!",
          oberstufe: "Die Evolution vom Stufenbau zur echten Glattpyramide zeugt von empirischem Ingenieursgeist."
        },
        curiosityFact: "Pharao Snofru ließ mehr Stein verbauen als jeder andere Pharao – sogar mehr als sein Sohn Cheops!"
      }
    },
    branchB: {
      id: "r12_meidum_quarry_strike",
      roundNumber: 12,
      locationKey: "meidum",
      locationName: "Meidum – Die Rampenbauer des Snofru",
      milestoneTitle: "Runde 12 [Weg der Logistik]: Der Kampf um die Ziehrampen",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "An den gigantischen Erdrampen von Meidum ist eine schwere Holzstrebe gebrochen. Ein tonnenschwerer Steinblock rutscht ab und blockiert den Hauptzugang für die Transportschlitten.",
        mittelstufe: "Kritischer Rampenschaden: Ohne sofortige Stabilisierung droht die gesamte hölzerne Ziehrampe abzustürzen. Hunderte Arbeiter müssten wochenlang im Schlamm warten.",
        oberstufe: "Logistischer Engpass an der Haupttransportrampe: Riskierst du einen schnellen Behelfseinsatz unter Lebensgefahr oder verlierst du wertvolle Flutmonate?"
      },
      choices: [
        {
          id: 'A',
          label: "Die Baustelle sofort evakuieren und solide neue Stützbalken einziehen",
          description: "Sicherheit der Arbeiter hat absoluten Vorrang.",
          statChanges: { volk: 20, adel: -5, ep: 1 },
          consequenceText: {
            unterstufe: "Kein Mensch kommt zu Schaden! Die Arbeiter danken dir für deine Fürsorge.",
            mittelstufe: "Kluge Vorsicht verhindert eine Katastrophe; die Baustelle arbeitet bald sicher weiter.",
            oberstufe: "Verantwortungsvolle Bauleitung schont die wichtigste Ressource: qualifizierte Fachkräfte."
          }
        },
        {
          id: 'B',
          label: "Freiwillige mit doppelter Goldprämie zur Schnellreparatur anspornen",
          description: "Belohne Mut und Schnelligkeit zur Rettung des Zeitplans.",
          statChanges: { adel: 15, volk: 10, ep: 2 },
          consequenceText: {
            unterstufe: "Wagemutige Zimmerleute keilen die Rampe fest! Der Weg ist frei!",
            mittelstufe: "Finanzieller Anreiz mobilisiert Höchstleistungen ohne Zwang.",
            oberstufe: "Leistungsbasierte Motivation sichert Termintreue unter Hochdruck."
          }
        },
        {
          id: 'C',
          label: "Die Soldaten mit Hebeln und Seilen zur Sicherung kommandieren",
          description: "Militärische Muskelkraft soll die Rampe mit Gewalt halten.",
          statChanges: { adel: 15, volk: -15, ep: 1 },
          consequenceText: {
            unterstufe: "Mit Stöhnen und Schweiß halten die Soldaten das Holz. Es hält knapp.",
            mittelstufe: "Erfolgreich, doch Erschöpfung und Unmut unter den Truppen steigen.",
            oberstufe: "Militärischer Notfalleinsatz erfüllt seinen Zweck, strapaziert aber die Moral."
          }
        },
        {
          id: 'D',
          label: "Das Rollen- und Gegengewichtssystem der königlichen Ingenieure nutzen",
          description: "Setze Hebelgesetze und Sandgleitbahnen ein, um den Block spielend zu heben.",
          epCost: 3,
          statChanges: { volk: 20, adel: 20, goetter: 10, ep: -1 },
          consequenceText: {
            unterstufe: "Wie von Geisterhand hebt sich der Riesenblock an seinen Platz! Jubel bricht aus!",
            mittelstufe: "Physikalische Meisterschaft setzt neue Maßstäbe für alle Baustellen des Reiches.",
            oberstufe: "Mechanische Innovation revolutioniert die Baustellenlogistik für Generationen."
          }
        }
      ],
      lexiconEntry: {
        title: "Pyramidenrampen & Hebetechnik",
        term: "Bau-Rampen & Schlittenzüge",
        explanation: {
          unterstufe: "Kräne gab es damals nicht! Die Ägypter schütteten riesige Rampen aus Schlamm, Schotter und Holz, über die sie die Steine zogen.",
          mittelstufe: "Forscher debattieren bis heute über Geradrampen, Zickzack-Rampen oder Innenrampen im Pyramidenkörper.",
          oberstufe: "Rampenbau erforderte fast so viel Material wie die Pyramide selbst und wurde nach Fertigstellung vollständig abgetragen."
        },
        curiosityFact: "In Hatnub entdeckten Archäologen eine 4500 Jahre alte Rampe mit Treppenstufen und Pfostenlöchern für Seilwinden!"
      }
    }
  },

  // RUNDE 13: Dahschur (Rote Pyramide & Minen)
  13: {
    branchA: {
      id: "r13_dahshur_copper",
      roundNumber: 13,
      locationKey: "dahshur",
      locationName: "Dahschur – Das Glänzen der Roten Pyramide",
      milestoneTitle: "Runde 13 [Weg des Metalls]: Die Kupferwerkzeuge der Steinmetze",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "In Dahschur glänzt der rötliche Kalkstein. Doch es gibt ein Problem: Tausende Meißel aus Kupfer sind stumpf oder verbogen, und die Minen auf dem Sinai senden keine Lieferungen!",
        mittelstufe: "Akute Ressourcenkrise bei Dahschur: Ohne frisches Sinai-Kupfer stockt das Glätten der Verkleidungssteine. Eine Expedition in die Wüste Sinai ist teuer.",
        oberstufe: "Rohstoffpolitik im Alten Reich: Die Abhängigkeit von den Kupfer- und Türkisminen des Sinai verlangt Schutz für Karawanen oder Tauschhandel."
      },
      choices: [
        {
          id: 'A',
          label: "Schmiede anweisen, Härtungstechniken zu verfeinern",
          description: "Nutze Glühhämmern, um Werkzeuge haltbarer zu machen.",
          statChanges: { adel: 15, volk: 10, ep: 2 },
          consequenceText: {
            unterstufe: "Die Meißel halten doppelt so lange! Mühelos perfekte Kanten.",
            mittelstufe: "Technologische Effizienz senkt den Rohstoffverbrauch deutlich.",
            oberstufe: "Metallurgischer Innovationsschub federt Importabhängigkeit ab."
          }
        },
        {
          id: 'B',
          label: "Straftruppen zum Sinai schicken und Minen sichern",
          description: "Militärische Eskorte beendet Überfälle auf Transporte.",
          statChanges: { adel: 15, volk: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Schwere Kupferbarren treffen ein. Der Sinai ist unter Kontrolle.",
            mittelstufe: "Imperiale Machtdemonstration sichert die Rohstoffrouten.",
            oberstufe: "Projektion königlicher Gewalt in die Peripherie festigt Handelswege."
          }
        },
        {
          id: 'C',
          label: "Die Steine vorerst nur grob behauen und Zeit sparen",
          description: "Hauptsache die Pyramide wächst, glätten kann man später.",
          statChanges: { volk: 10, goetter: -10, adel: -10 },
          consequenceText: {
            unterstufe: "Es geht schneller voran, doch Baumeister blicken besorgt.",
            mittelstufe: "Termintreue auf Kosten der Perfektion; Ästheten sind enttäuscht.",
            oberstufe: "Qualitätsabstriche gefährden das Prestige des Grabmonuments."
          }
        },
        {
          id: 'D',
          label: "Hathor, Herrin des Türkis, weihen & Sinai-Pakt schließen",
          description: "Binde Nomadenführer mit Geschenken und Schutz friedlich ein.",
          epCost: 3,
          statChanges: { goetter: 20, adel: 15, volk: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Karawanen voller Kupfer und Türkis strömen herbei!",
            mittelstufe: "Friedliche Koexistenz verwandelt Feinde in treue Partner.",
            oberstufe: "Höchste Diplomatie: Nachschub gesichert ohne Pfeilschuss."
          }
        }
      ],
      lexiconEntry: {
        title: "Kupfer, Türkis & die Minen des Sinai",
        term: "Sinai-Expeditionen & Werkzeuge",
        explanation: {
          unterstufe: "Eisen kannten die Pyramidenbauer noch nicht! Alle riesigen Steine wurden mit einfachen Meißeln aus Kupfer bearbeitet.",
          mittelstufe: "Der Sinai war reich an Kupfererz und Türkis. Göttin Hathor wurde dort als Schutzpatronin der Minen verehrt.",
          oberstufe: "Königliche Inschriften an Felswänden zeigen den Pharao beim 'Erschlagen der Beduinen' als Warnung für Angreifer."
        },
        curiosityFact: "Um Kupfer härter zu machen, hämmerten die Ägypter es kalt – das verdichtete das Metall!"
      }
    },
    branchB: {
      id: "r13_dahshur_white_casing",
      roundNumber: 13,
      locationKey: "dahshur",
      locationName: "Dahschur – Der weiße Tura-Kalkstein",
      milestoneTitle: "Runde 13 [Weg der Verkleidung]: Das weiße Leuchten",
      imagePath: "/assets/nile_banner.jpg",
      situation: {
        unterstufe: "Aus den Steinbrüchen von Tura auf der anderen Nilseite treffen weiße Kalksteinblöcke ein. Sie sind so glatt poliert, dass sie wie Schnee in der Wüstensonne strahlen. Doch ein Frachter hat Leck geschlagen!",
        mittelstufe: "Havarie eines Schwertransporters vor Dahschur: Kostbare Verkleidungsblöcke aus schneeweißem Tura-Kalkstein drohen im Schlamm des Nils zu versinken.",
        oberstufe: "Schadensbegrenzung auf dem Fluss: Tura-Kalkstein ist das teuerste Baumaterial des Alten Reiches. Gelingt die Bergung oder verliert das Bauwerk seine Verkleidung?"
      },
      choices: [
        {
          id: 'A',
          label: "Taucher und Flöße mit Hebebalken zur Rettung der Blöcke entsenden",
          description: "Befehle erfahrenen Fischern, die Steine mit Tauen zu bergen.",
          statChanges: { volk: 15, adel: 15, ep: 2 },
          consequenceText: {
            unterstufe: "Mit gemeinsamen Kräften werden die weißen Steine ans Ufer gehoben!",
            mittelstufe: "Erfolgreiche Bergung ohne Verluste. Die Steinmetze jubeln erleichtert.",
            oberstufe: "Exzellente Krisenlogistik rettet unersetzliches Fassadenmaterial."
          }
        },
        {
          id: 'B',
          label: "Das gesunkene Schiff aufgeben und sofort Ersatz aus Tura anfordern",
          description: "Verliere keine Zeit mit Bergungsarbeiten im Fluss.",
          statChanges: { adel: 10, ep: 1 },
          consequenceText: {
            unterstufe: "Neue Lastkähne werden beladen. Die Reise geht ohne Verzug weiter.",
            mittelstufe: "Kostenintensiv, aber zeitlich effizient. Der Terminplan hält.",
            oberstufe: "Finanzielle Kompensation vor Ort priorisiert Baugeschwindigkeit."
          }
        },
        {
          id: 'C',
          label: "Den Nilgott Hapi um Vergebung und ruhigen Strom anrufen",
          description: "Spende Opfertüten mit Getreide und Blumen an den Fluss.",
          statChanges: { goetter: 20, priester: 15, adel: -5 },
          consequenceText: {
            unterstufe: "Die Wellen glätten sich sanft. Die Bergung gelingt im ruhigen Wasser.",
            mittelstufe: "Der Segen des Hapi stärkt das Vertrauen der abergläubischen Schiffer.",
            oberstufe: "Kultische Beruhigung beugt Panik unter den Flussmannschaften vor."
          }
        },
        {
          id: 'D',
          label: "Luftgefüllte Ziegenlederschläuche als Auftriebsheber einsetzen",
          description: "Nutze physikalischen Auftrieb zur mühelosen Bergung schwerster Lasten.",
          epCost: 3,
          statChanges: { volk: 20, adel: 20, goetter: 10, ep: -1 },
          consequenceText: {
            unterstufe: "Wie Bojen steigen die tonnenschweren Blöcke an die Oberfläche! Alle staunen!",
            mittelstufe: "Geniale Hebelogistik: Antike Tauchertechnologie versetzt den Hofstaat in Erstaunen.",
            oberstufe: "Pionierleistung unterwassertechnischer Bergung im Alten Reich."
          }
        }
      ],
      lexiconEntry: {
        title: "Tura-Kalkstein & die Verkleidung",
        term: "Tura-Kalkstein & Politur",
        explanation: {
          unterstufe: "Die Pyramiden waren früher nicht stufig und braun, sondern spiegelglatt und strahlend weiß verkleidet!",
          mittelstufe: "Der feinste Kalkstein stammte aus den unterirdischen Stollen von Tura östlich des Nils.",
          oberstufe: "Die Fugen zwischen den Verkleidungssteinen waren so eng, dass nicht einmal eine Messerklinge dazwischen passte."
        },
        curiosityFact: "Im Mittelalter wurden fast alle weißen Verkleidungssteine abgerissen, um damit Moscheen und Paläste in Kairo zu bauen!"
      }
    }
  },

  // RUNDE 14: Sakkara (Djoser & Imhotep)
  14: {
    branchA: {
      id: "r14_saqqara_imhotep",
      roundNumber: 14,
      locationKey: "saqqara",
      locationName: "Sakkara – Das Meisterwerk des Imhotep",
      milestoneTitle: "Runde 14 [Weg der Weisheit]: Auf den Spuren des ersten Genies",
      imagePath: "/assets/saqqara.jpg",
      situation: {
        unterstufe: "Ihr steht vor der ältesten Steinpyramide: Der Stufenpyramide von Sakkara! Hier erfand der Arzt und Architekt Imhotep das Bauen mit Stein. Ein junger Schreiber bittet dich um Rat.",
        mittelstufe: "In Sakkara begegnen sich Medizin, Baukunst und Totenkult. Der Hohepriesterrat streitet über die Zulassung neuer medizinischer Papyrusrollen.",
        oberstufe: "Paradigmenwechsel in Sakkara: Der Imhotep-Kult steht für empirische Heilkunde und Statik. Förderst du Forschung oder Tradition?"
      },
      choices: [
        {
          id: 'A',
          label: "Die neuen medizinischen Schriftrollen offiziell approbieren",
          description: "Unterstütze Ärzte, die Wunden nähen und Kräuter erforschen.",
          statChanges: { volk: 20, adel: 10, priester: -10, ep: 2 },
          consequenceText: {
            unterstufe: "Kranke Arbeiter werden schnell gesund! Große Weitsicht.",
            mittelstufe: "Riesenschritt für die Heilkunde. Seuchen werden eingedämmt.",
            oberstufe: "Empirische Medizin senkt die Sterblichkeit unter Arbeitskräften."
          }
        },
        {
          id: 'B',
          label: "Kräuterärzte und Schutzzauberer gleichberechtigt zulassen",
          description: "Der Körper braucht Salben, die Seele Gebete.",
          statChanges: { priester: 15, volk: 15, goetter: 10, ep: 1 },
          consequenceText: {
            unterstufe: "Perfekter Trost: Salbe auf die Wunde und ein Amulett um den Hals!",
            mittelstufe: "Tradition und Innovation im Gleichklang. Priester und Heiler vereint.",
            oberstufe: "Ganzheitlicher Ansatz schont religiöse Befindlichkeiten."
          }
        },
        {
          id: 'C',
          label: "Nur uralte rituelle Zaubersprüche der Vorfahren gelten lassen",
          description: "Wer an Götter glaubt, braucht keine neumodischen Tränke.",
          statChanges: { goetter: 15, priester: 20, volk: -15 },
          consequenceText: {
            unterstufe: "Die Priester segnen dich, doch manche Bauarbeiter erholen sich nicht.",
            mittelstufe: "Traditionalismus sichert Ansehen bei Konservativen, schwächt Arbeiter.",
            oberstufe: "Dogmatismus blockiert den medizinischen Fortschritt."
          }
        },
        {
          id: 'D',
          label: "Die Imhotep-Akademie für Baukunst und Medizin stiften",
          description: "Baue ein neues Lehrhaus für die klügsten Köpfe des Niltals.",
          epCost: 3,
          statChanges: { volk: 20, adel: 15, priester: 15, goetter: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Ägyptens Zukunft erstrahlt! Die besten Meister strömen herbei!",
            mittelstufe: "Ein ewiges Denkmal: Dein Bildungszentrum prägt die Blütezeit.",
            oberstufe: "Staatsmännische Institutionalisierung von Bildung und Wissenschaft."
          }
        }
      ],
      lexiconEntry: {
        title: "Imhotep – Der erste Baumeister & Universalgelehrte",
        term: "Imhotep & Papyrus Edwin Smith",
        explanation: {
          unterstufe: "Imhotep war so klug, dass die Ägypter ihn später als Gott verehrten! Er baute für König Djoser die erste Pyramide.",
          mittelstufe: "Imhotep war Baumeister, Wesir und Arzt. Der 'Papyrus Edwin Smith' zeigt, dass Ärzte Gehirn und Puls untersuchten.",
          oberstufe: "Imhoteps Stufenkomplex übersetzte vergängliche Schilfbauten erstmals in monumentalen Stein."
        },
        curiosityFact: "Imhotep ist der erste nicht-königliche Mensch der Geschichte, dessen Name schriftlich überliefert wurde!"
      }
    },
    branchB: {
      id: "r14_saqqara_serapeum",
      roundNumber: 14,
      locationKey: "saqqara",
      locationName: "Sakkara – Das Serapeum & der Heilige Apis-Stier",
      milestoneTitle: "Runde 14 [Weg des Heiligen Stiers]: Die Weihe des Apis",
      imagePath: "/assets/saqqara.jpg",
      situation: {
        unterstufe: "In den unterirdischen Hallen von Sakkara wird der heilige Apis-Stier verehrt. Doch der bisherige Stier ist friedlich entschlafen. Die Priester suchen im ganzen Niltal nach dem neuen Kälbchen mit den heiligen Merkmalen.",
        mittelstufe: "Kultische Nachfolgekrise in Sakkara: Die Wahl des neuen Apis-Stiers entscheidet über das Wohlwollen der Götter für die nahende Krönungszeremonie.",
        oberstufe: "Sakrale Repräsentation des Fruchtbarkeits- und Schöpferkults: Du musst die kostspielige Bestattung des alten Apis im Riesensarkophag finanzieren."
      },
      choices: [
        {
          id: 'A',
          label: "Die Staatskasse für ein prunkvolles Apis-Begräbnis öffnen",
          description: "Stifte den gewaltigen schwarzen Granitsarkophag im Serapeum.",
          statChanges: { goetter: 25, priester: 20, adel: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Die Priester tragen den heiligen Stier feierlich zu Grabe. Segen erfüllt das Land!",
            mittelstufe: "Der memphitische Klerus ist tief bewegt von deiner Frömmigkeit.",
            oberstufe: "Traditionelle Großinvestition festigt den Priesterkonsens vor den Toren der Hauptstadt."
          }
        },
        {
          id: 'B',
          label: "Einen sparsamen Ritus befehlen und Gold für Baustellen sparen",
          description: "Die Pyramide von Gizeh braucht jeden Cent mehr als ein Stiergrab.",
          statChanges: { adel: 15, priester: -15, ep: 1 },
          consequenceText: {
            unterstufe: "Die Kasse bleibt voll, doch die Priester schütteln missbilligend die Köpfe.",
            mittelstufe: "Finanzielle Nüchternheit erfreut den Adel, erzürnt aber die Priesterschaft.",
            oberstufe: "Pragmatischer Säkularismus birgt theologische Risiken am Vorabend der Krönung."
          }
        },
        {
          id: 'C',
          label: "Das neue Apis-Kälbchen persönlich im Nildelta ausrufen",
          description: "Reise zu den Bauern und bestätige das heilige Tier vor Ort.",
          statChanges: { volk: 20, goetter: 15, ep: 2 },
          consequenceText: {
            unterstufe: "Jubel im Delta! Ein weißes Dreieck auf der Stirn bestätigt das Wunder!",
            mittelstufe: "Volksnahe Bestätigung des Sakraltiers stärkt die Bindung des Deltas an deine Krone.",
            oberstufe: "Geschickte Verknüpfung lokaler Bauernkulte mit der Zentralmacht."
          }
        },
        {
          id: 'D',
          label: "Die Apis-Stiftung für Tierwohl und Fruchtbarkeit ins Leben rufen",
          description: "Verbinde Stierkult mit einem Reichsprogramm zur Rinderzucht.",
          epCost: 3,
          statChanges: { volk: 25, adel: 15, priester: 20, goetter: 20, ep: -1 },
          consequenceText: {
            unterstufe: "Gesunde Herden auf allen Weiden! Priester und Bauern feiern den doppelten Segen!",
            mittelstufe: "Eine geniale Synthese aus Agrarökonomie und sakraler Frömmigkeit.",
            oberstufe: "Wirtschafts- und Religionspolitik im vollendeten Gleichklang der Ma'at."
          }
        }
      ],
      lexiconEntry: {
        title: "Der Apis-Stier & das Serapeum",
        term: "Apis-Stier & Serapeum",
        explanation: {
          unterstufe: "Der Apis-Stier war das heiligste Tier Ägyptens. Er durfte im Palast wie ein Fürst leben und wurde nach dem Tod wie ein Pharao mumifiziert.",
          mittelstufe: "Er musste besondere Zeichen tragen: Ein weißes Dreieck auf der Stirn und die Zeichnung eines Falken auf dem Rücken.",
          oberstufe: "Im Serapeum von Sakkara entdeckte Auguste Mariette riesige, bis zu 70 Tonnen schwere Basaltsarkophage für die Stiermumien."
        },
        curiosityFact: "Wenn ein Apis-Stier starb, trauerte ganz Ägypten 70 Tage lang und aß kein Fleisch, bis der Nachfolger gefunden war!"
      }
    }
  },

  // RUNDE 15: Memphis (Reflexion III)
  15: {
    branchA: {
      id: "r15_memphis_gates",
      roundNumber: 15,
      locationKey: "memphis",
      locationName: "Memphis (Ineb-Hedj) – Die Weiße Mauer der Hauptstadt",
      milestoneTitle: "Runde 15: MEILENSTEIN & REFLEXION III (Vor den Toren)",
      imagePath: "/assets/giza_site.jpg",
      situation: {
        unterstufe: "Du stehst vor Memphis, der uralten Hauptstadt mit ihren gewaltigen weißen Mauern! Drei Viertel deiner Reise sind vollbracht. Nun trennen dich nur noch wenige Meilen von Gizeh. Prüfe deine Werte!",
        mittelstufe: "Das Hauptquartier des Reiches empfängt deine Expeditionsflotte. Vor dem Einzug verlangt der Hofstaat eine Überprüfung deiner Regentschaftsfähigkeit.",
        oberstufe: "Staatspolitischer Wendepunkt in der Reichshauptstadt Ineb-Hedj: Nur wer das Gleichgewicht gehalten hat, wird in Gizeh als Herrscher anerkannt."
      },
      choices: [
        {
          id: 'A',
          label: "Die Stadtkasse öffnen und Festzug anführen",
          description: "Stärke die Kampfmoral für das letzte Wegstück.",
          statChanges: { volk: 20, adel: 10, ep: 2 },
          consequenceText: {
            unterstufe: "Fahnen wehen, Pauken dröhnen! Ein unvergesslicher Tag in Memphis!",
            mittelstufe: "Die Moral von Truppe und Bürgern erreicht den Höhepunkt.",
            oberstufe: "Populäre Repräsentanz erzeugt einen unaufhaltsamen Sog der Unterstützung."
          }
        },
        {
          id: 'B',
          label: "Treffen mit den Fürsten (Nomarchen) zur Absicherung",
          description: "Sichere dir Truppenzusagen des Hochadels.",
          statChanges: { adel: 20, priester: 10, volk: -5, ep: 1 },
          consequenceText: {
            unterstufe: "Die Fürsten versprechen dir ihre besten Krieger und Schiffe.",
            mittelstufe: "Solide Bündnispolitik garantiert politische Stabilität.",
            oberstufe: "Konsolidierung der Feudaleliten verhindert Sezessionsbestrebungen."
          }
        },
        {
          id: 'C',
          label: "Im Tempel des Gottes Ptah die Nacht im Gebet verbringen",
          description: "Erbitte die geistige Weihe des Gottes der Handwerker.",
          statChanges: { goetter: 20, priester: 20, adel: -5 },
          consequenceText: {
            unterstufe: "Im stillen Tempel scheint Ptah selbst zu dir zu sprechen.",
            mittelstufe: "Der memphitische Klerus bezeugt deine tiefe spirituelle Würde.",
            oberstufe: "Vollkommene theologische Weihe am memphitischen Schöpfungszentrum."
          }
        },
        {
          id: 'D',
          label: "Das Konzil der Drei Kronen einberufen",
          description: "Versammle Priester, Adel und Volk an einem Verhandlungstisch.",
          epCost: 3,
          statChanges: { volk: 20, adel: 20, priester: 20, goetter: 20, ep: -1 },
          consequenceText: {
            unterstufe: "Ein historischer Moment! Alle Schichten schwören auf deine Krone!",
            mittelstufe: "Meisterwerk des Friedens: Ober- und Unterägypten verschmelzen.",
            oberstufe: "Gipfelpunkt diplomatischer Staatskunst: Unerschütterlicher Konsens."
          }
        }
      ],
      lexiconEntry: {
        title: "Memphis – Die Weiße Mauer (Ineb-Hedj)",
        term: "Memphis & Gott Ptah",
        explanation: {
          unterstufe: "Memphis war die erste Hauptstadt des vereinigten Ägyptens. König Menes baute sie an die Grenze zwischen Ober- und Unterägypten.",
          mittelstufe: "Der Gott Ptah schuf der memphitischen Theologie zufolge die Welt durch Denken im Herzen und Sprechen mit der Zunge.",
          oberstufe: "Memphis blieb über Jahrtausende das administrative Nervenzentrum des Pharaonenreiches."
        },
        curiosityFact: "Memphis hieß ursprünglich 'Ineb-Hedj' – was 'Weiße Mauer' bedeutet, wegen der weiß gekalkten Palastmauern!"
      }
    },
    branchB: {
      id: "r15_memphis_army_review",
      roundNumber: 15,
      locationKey: "memphis",
      locationName: "Memphis – Die Große Heerschau vor der Residenz",
      milestoneTitle: "Runde 15: MEILENSTEIN & REFLEXION III (Die Parade der Streitwagen)",
      imagePath: "/assets/giza_site.jpg",
      situation: {
        unterstufe: "Vor den Mauern von Memphis paradieren Regimenter mit Bronzeäxten, Bogen und Leopardenfell-Standarten. Die Generäle salutieren vor deinem Schiff. Wie stellst du die Armee für die Krönung auf?",
        mittelstufe: "Große Militärparade in der Reichshauptstadt: Die Streitkräfte verlangen die Bestätigung ihrer Privilegien und ihres Anteils an den Bauressourcen.",
        oberstufe: "Militärpolitische Standortbestimmung vor Gizeh: Bindest du die Militärführung durch Beförderungen ein oder betonst du das zivile Primat der Verwaltung?"
      },
      choices: [
        {
          id: 'A',
          label: "Die Krieger mit doppelten Fleisch- und Weinrationen belohnen",
          description: "Festige die bedingungslose Treue der Soldaten.",
          statChanges: { adel: 15, volk: 10, ep: 1 },
          consequenceText: {
            unterstufe: "Zehntausende Schilde dröhnen im Takt: 'Lang lebe unser Feldherr!'",
            mittelstufe: "Die Armee steht wie eine Mauer hinter deinem Thronanspruch.",
            oberstufe: "Sicherung der bewaffneten Gewalt als Rückgrat der Thronsukzession."
          }
        },
        {
          id: 'B',
          label: "Einen Teil der Soldaten als Ingenieure für die Pyramide abstellen",
          description: "Wandle militärische Muskelkraft in zivilen Baufortschritt um.",
          statChanges: { volk: 15, adel: 10, ep: 2 },
          consequenceText: {
            unterstufe: "Soldaten und Handwerker packen gemeinsam an. Die Baugeschwindigkeit verdoppelt sich!",
            mittelstufe: "Effiziente Nutzung von Heeresteilen für zivile Großprojekte des Staates.",
            oberstufe: "Staatswirtschaftliche Optimierung: Streitkräfte im Dienst der Infrastruktur."
          }
        },
        {
          id: 'C',
          label: "Die Tempelwachen zur Sicherung der Heiligtümer verstärken",
          description: "Stelle das Heer in den Dienst des Schutzes der Götter.",
          statChanges: { goetter: 20, priester: 20, adel: -5 },
          consequenceText: {
            unterstufe: "Die Priester segnen die Banner. Ein heiliger Schutz umgibt Memphis.",
            mittelstufe: "Stärkung der sakralen Sicherheit beruhigt die konservativen Stände.",
            oberstufe: "Kultische Schutzerklärung festigt das Bündnis zwischen Krone und Altar."
          }
        },
        {
          id: 'D',
          label: "Die Königs-Charta des Gerechten Heeres stiften",
          description: "Erkläre, dass Waffen nur der Verteidigung und dem Schutz des Friedens dienen.",
          epCost: 3,
          statChanges: { volk: 25, adel: 15, goetter: 15, priester: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Ein Tag des Jubels! Soldaten schwören, Beschützer der Schwachen zu sein!",
            mittelstufe: "Ein Meilenstein ethischer Militärdoktrin im Zeichen der Ma'at.",
            oberstufe: "Philosophische Zähmung der Militärmacht zu einem Garanten der Stabilität."
          }
        }
      ],
      lexiconEntry: {
        title: "Das altägyptische Heer & seine Waffen",
        term: "Ägyptische Kriegskunst & Regimenter",
        explanation: {
          unterstufe: "Soldaten kämpften barfuß mit Speeren, Krummdolchen und großen Schilden aus Rinderfell. Streitwagen kamen erst später durch die Hyksos nach Ägypten.",
          mittelstufe: "Die Regimenter wurden nach Göttern benannt: Das Amun-Regiment, das Re-Regiment, das Ptah-Regiment und das Seth-Regiment.",
          oberstufe: "In Friedenszeiten wurden Soldaten bei Ernteeinsätzen, im Kanalbau und bei Steinbruchexpeditionen eingesetzt."
        },
        curiosityFact: "Soldaten erhielten als Tapferkeitsmedaille den 'Orden der goldenen Fliege' – Fliegen galten wegen ihrer Hartnäckigkeit als Vorbild für Krieger!"
      }
    }
  },

  // RUNDE 16: Gizeh Plateau
  16: {
    branchA: {
      id: "r16_giza_harbor_flood",
      roundNumber: 16,
      locationKey: "giza",
      locationName: "Das Plateau von Gizeh – Am Fuße der Pyramiden",
      milestoneTitle: "Runde 16: Die Schatten der Riesen",
      imagePath: "/assets/giza_site.jpg",
      situation: {
        unterstufe: "Du hast es geschafft: Vor dir erheben sich die unvorstellbar riesigen Pyramiden! Schiffe ankern im Hafenbecken. Zehntausende Arbeiter transportieren Blöcke.",
        mittelstufe: "Ankunft am Bauplatz von Gizeh. Eine Flutwelle hat Kaianlagen beschädigt; Schiffe drohen zu zerschellen, wenn nicht gehandelt wird.",
        oberstufe: "Logistischer Kulminationspunkt: Die Infrastruktur von Gizeh benötigt Krisenkoordination zur Entladung der Schwertransporter."
      },
      choices: [
        {
          id: 'A',
          label: "Die Granitschiffe mit Flutpoldern sichern",
          description: "Befehle erfahrenen Schiffern, Kähne kontrolliert in Docks zu ziehen.",
          statChanges: { volk: 15, adel: 15, ep: 1 },
          consequenceText: {
            unterstufe: "Perfektes Manöver! Jeder Felsblock wird unbeschädigt entladen.",
            mittelstufe: "Nautische Meisterleistung: Entladung gelingt ohne Verluste.",
            oberstufe: "Exzellente Logistikführung unter erschwerten Bedingungen."
          }
        },
        {
          id: 'B',
          label: "Soldaten ins Wasser schicken, um Schiffe mit bloßen Händen zu halten",
          description: "Kraft und Einsatzbereitschaft um jeden Preis!",
          statChanges: { adel: 15, volk: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Mit letzter Kraft stemmen sich die Männer gegen das Wasser. Es hält!",
            mittelstufe: "Erfolgreich, doch einige Männer werden verletzt. Hoher Blutzoll.",
            oberstufe: "Rücksichtslose Durchsetzung sichert Sachgut, hinterlässt Blessuren."
          }
        },
        {
          id: 'C',
          label: "Dem Nilgott Hapi ein Rind opfern",
          description: "Bitte den Gott des Hochwassers um sanfte Strömung im Hafen.",
          statChanges: { goetter: 20, priester: 15, adel: -5 },
          consequenceText: {
            unterstufe: "Das Gebet hallt über das Wasser. Die Strömung beruhigt sich zusehends.",
            mittelstufe: "Religiöse Zuversicht verleiht den Arbeitern neue Kraft.",
            oberstufe: "Sakraler Ausgleich zur Beruhigung der abergläubischen Arbeitskräfte."
          }
        },
        {
          id: 'D',
          label: "Schlittenbahn mit Nilschlammschmierung nutzen",
          description: "Verwende die fortschrittlichste Entladetechnik der Ingenieure.",
          epCost: 3,
          statChanges: { volk: 20, adel: 20, goetter: 10, ep: -1 },
          consequenceText: {
            unterstufe: "Wie von Zauberhand gleiten die 15-Tonnen-Blöcke über Schlamm an Land!",
            mittelstufe: "Physikalische Perfektion: Schlamm verringert Reibung um 50%.",
            oberstufe: "Ein technologisches Triumphat der Ingenieurskunst."
          }
        }
      ],
      lexiconEntry: {
        title: "Der Hafen von Gizeh & der Niltransport",
        term: "Hafen von Gizeh & Schlammschmierung",
        explanation: {
          unterstufe: "Archäologen entdeckten, dass der Nil damals direkt bis an die Pyramiden reichte! Über Kanäle fuhren Schiffe bis an die Baustelle.",
          mittelstufe: "Riesige Schlitten zogen die Steine. Wenn man Nilschlamm davor befeuchtete, glitten Steine viel leichter.",
          oberstufe: "Die Papyri des Bauleiters Merer belegen die minutiöse Schiffslogistik für Tura-Kalkstein nach Gizeh."
        },
        curiosityFact: "Das 43 Meter lange Sonnenboot des Cheops wurde komplett ohne einen einzigen Eisennagel zusammengebaut!"
      }
    },
    branchB: {
      id: "r16_giza_sandstorm_hazard",
      roundNumber: 16,
      locationKey: "giza",
      locationName: "Das Plateau von Gizeh – Die Vermessung der Nordachse",
      milestoneTitle: "Runde 16: Die Sterne der Ewigkeit",
      imagePath: "/assets/giza_site.jpg",
      situation: {
        unterstufe: "Auf dem Felsplateau stehen Hofastronomen mit Peilstöcken und Senkbleien. Sie müssen die Grundlinien der Pyramide exakt nach den vier Himmelsrichtungen ausrichten, bevor das Fundament gegossen wird.",
        mittelstufe: "Präzisionsvermessung auf dem Gizeh-Plateau: Die Ausrichtung nach dem unvergänglichen Polarstern entscheidet über die kosmische Vollkommenheit des Bauwerks.",
        oberstufe: "Astronomische Sakralgeometrie: Ein winziger Messfehler von wenigen Zentimetern würde auf 230 Meter Basislänge die gesamte Pyramidenflucht ruinieren."
      },
      choices: [
        {
          id: 'A',
          label: "Die Nacht durchwachen und die Ausrichtung nach den Polsternen vollziehen",
          description: "Warte auf den Aufgang der unvergänglichen Zirkumpolarsterne.",
          statChanges: { goetter: 20, adel: 15, ep: 2 },
          consequenceText: {
            unterstufe: "Die Peilung gelingt fehlerfrei! Die Kante weicht kaum ein Haarbreit von Norden ab!",
            mittelstufe: "Eine Meisterleistung altägyptischer Astronomie sichert ewige Perfektion.",
            oberstufe: "Mathematische Exaktheit festigt den Mythos unvergänglicher Herrschaftsordnung."
          }
        },
        {
          id: 'B',
          label: "Die Priester von Heliopolis das Horizont-Ritual leiten lassen",
          description: "Verbinde die Vermessung mit der Weihe an den Sonnengott Re.",
          statChanges: { goetter: 25, priester: 20, adel: -5 },
          consequenceText: {
            unterstufe: "Der Rauch des Weihrauchs steigt senkrecht in den Nachthimmel. Die Götter nicken!",
            mittelstufe: "Der Sonnenklerus segnet den Bauplatz als irdisches Abbild des Schöpfungsberges.",
            oberstufe: "Kosmologische Einbindung garantiert theologische Unanfechtbarkeit."
          }
        },
        {
          id: 'C',
          label: "Die Vermessung beschleunigen und sofort mit dem Mauern beginnen",
          description: "Kleine Abweichungen spielen keine Rolle, Hauptsache die Arbeit beginnt.",
          statChanges: { adel: 15, volk: 10, goetter: -10 },
          consequenceText: {
            unterstufe: "Die Steine fliegen an ihren Platz, doch die Astronomen blicken skeptisch.",
            mittelstufe: "Tempo vor Präzision; der Zeitplan hält, aber Gelehrte murren.",
            oberstufe: "Pragmatischer Zeitgewinn auf Kosten millimetergenauer Perfektion."
          }
        },
        {
          id: 'D',
          label: "Das Instrument des 'Merkhet' (Schattenschnitt) feierlich weihen",
          description: "Führe das präziseste Winkelmessgerät der Antike offiziell ein.",
          epCost: 3,
          statChanges: { adel: 20, goetter: 20, volk: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Unglaubliche Präzision! Die vier Seiten schauen exakt in die vier Himmelsrichtungen!",
            mittelstufe: "Wissenschaftliche Höchstleistung: Diese Genauigkeit wird erst Jahrtausende später wieder erreicht.",
            oberstufe: "Synthese aus empirischer Wissenschaft und kosmologischer Herrscherweihe."
          }
        }
      ],
      lexiconEntry: {
        title: "Die Ausrichtung der Cheopspyramide",
        term: "Merkhet & Polarsterne",
        explanation: {
          unterstufe: "Die Seiten der Cheopspyramide weichen nur um winzige Bruchteile eines Grades von den echten Himmelsrichtungen ab!",
          mittelstufe: "Sie nutzten das 'Merkhet', eine Peilgabel mit Senklot, um Sterne genau im Zenit zu beobachten.",
          oberstufe: "Die unvergänglichen Sterne im Norden galten als Heimat der seligen Götter, zu denen die Seele des Pharaos aufstieg."
        },
        curiosityFact: "Auf der Spitze der Cheopspyramide könnte man die Ausrichtung selbst mit modernstem GPS kaum genauer messen als die alten Baumeister!"
      }
    }
  },

  // RUNDE 17: Arbeiterstadt Heit el-Ghurab
  17: {
    branchA: {
      id: "r17_workers_strike",
      roundNumber: 17,
      locationKey: "giza_workers",
      locationName: "Heit el-Ghurab – Die Stadt der Pyramidenbauer",
      milestoneTitle: "Runde 17: Fleisch, Bier oder Streik?",
      imagePath: "/assets/giza_site.jpg",
      situation: {
        unterstufe: "Im Arbeiterdorf riecht es nach Brot und Knoblauch. Doch heute gibt es Streit: Die Bäcker haben kein Getreide für Starkbier, und die Maurer weigern sich weiterzuarbeiten!",
        mittelstufe: "In der Arbeitersiedlung droht der erste dokumentierte Arbeiterstreik. Die Verpflegung mit proteinreicher Nahrung und Bier ist ins Stocken geraten.",
        oberstufe: "Arbeitskampf im Schatten des Monumentalismus: Pyramidenbauer waren freie Fachkräfte. Ohne vertragliche Verpflegung ruht der Bau."
      },
      choices: [
        {
          id: 'A',
          label: "Rinderherden schlachten und Festbier brauen",
          description: "Verdopple die Rationen und versorge die Handwerker königlich.",
          statChanges: { volk: 25, adel: -15, ep: 1 },
          consequenceText: {
            unterstufe: "Die Handwerker stimmen ein Freudenlied an! Frisch gestärkt packen sie an.",
            mittelstufe: "Streik abgewendet. Die Loyalität der Elitemaurer gehört uneingeschränkt dir.",
            oberstufe: "Investition in Hochleistungsarbeiter sichert termingerechte Fertigstellung."
          }
        },
        {
          id: 'B',
          label: "Aufseher schicken und mit Lohnabzug drohen",
          description: "Disziplin muss sein: Wer nicht arbeitet, bekommt gar nichts.",
          statChanges: { adel: 15, volk: -20, ep: 1 },
          consequenceText: {
            unterstufe: "Grollende Blicke. Die Arbeit geht langsam weiter, Stimmung ist eisig.",
            mittelstufe: "Autoritäre Durchsetzung erzeugt verdeckten Bummelstreik.",
            oberstufe: "Gefährlicher Prestigeverlust bei unverzichtbaren Fachhandwerkern."
          }
        },
        {
          id: 'C',
          label: "Streikführer zu einer formellen Anhörung empfangen",
          description: "Höre ihre Beschwerden an und vereinbare einen Versorgungsplan.",
          statChanges: { volk: 15, adel: 10, ep: 2 },
          consequenceText: {
            unterstufe: "Die Maurer nicken zufrieden: Dein Wort gilt als verlässlich.",
            mittelstufe: "Konstruktive Partnerschaft: Ein gerechtes Abkommen schafft Arbeitsruhe.",
            oberstufe: "Früheste Form institutionalisierter Tarifverhandlung – meisterhaft."
          }
        },
        {
          id: 'D',
          label: "Den 'Orden der goldenen Fliege' stiften & Heldenmahl stiften",
          description: "Verleihe Orden an die fleißigsten Bautrupps und ehre sie als Helden.",
          epCost: 3,
          statChanges: { volk: 25, adel: 15, goetter: 10, ep: -1 },
          consequenceText: {
            unterstufe: "Freudentränen und Stolz! Die Trupps wetteifern begeistert um den Sieg!",
            mittelstufe: "Geniale Motivationspsychologie: Aus Frust wird unbändiger Ehrgeiz.",
            oberstufe: "Höchste Führungskunst: Durch Anerkennung erreichst du Höchstleistungen."
          }
        }
      ],
      lexiconEntry: {
        title: "Die Pyramidenbauer – Freie Bürger statt Sklaven",
        term: "Arbeiterstadt & Pyramidenstreik",
        explanation: {
          unterstufe: "Pyramidenbauer waren KEINE Sklaven! Es waren geachtete Arbeiter, die reichlich Fleisch, Bier und ärztliche Versorgung bekamen.",
          mittelstufe: "Ausgrabungen von Mark Lehner zeigten riesige Bäckereien und Rinderknochen.",
          oberstufe: "Die Rekrutierung erfolgte über saisonale Arbeitsdienste, die sozialen Zusammenhalt festigten."
        },
        curiosityFact: "Arbeiter gaben ihren Gruppen lustige Namen wie 'Die Trunkenbolde des Menkaure'!"
      }
    },
    branchB: {
      id: "r17_workers_medical_crisis",
      roundNumber: 17,
      locationKey: "giza_workers",
      locationName: "Heit el-Ghurab – Das Baustellenlazarett von Gizeh",
      milestoneTitle: "Runde 17: Gebrochene Knochen & Salbentöpfe",
      imagePath: "/assets/giza_site.jpg",
      situation: {
        unterstufe: "Im Lazarett der Arbeiterstadt liegen Steinmetze mit gebrochenen Armen und staubigen Lungen. Die leitenden Ärzte bitten um teures Zedernharz und Leinenbinden für Notoperationen.",
        mittelstufe: "Schwere Arbeitsunfälle auf den oberen Pyramidenstufen fordern die medizinische Versorgung heraus. Spare an Verbandsstoffen oder investiere in das Wohlergehen der Baumeister?",
        oberstufe: "Betriebliche Gesundheitsfürsorge auf der größten Baustelle der Weltgeschichte: Die Genesungsquote entscheidet über den Fortgang der Arbeiten."
      },
      choices: [
        {
          id: 'A',
          label: "Alle königlichen Leinenballen und Arzneien den Ärzten bereitstellen",
          description: "Kein Arbeiter soll an mangelnder Behandlung sterben.",
          statChanges: { volk: 25, adel: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Geschiente Knochen heilen sauber! Die Arbeiter preisen deine Güte.",
            mittelstufe: "Hohe Heilungsraten sprechen sich im ganzen Land herum; Loyalität steigt rasant.",
            oberstufe: "Vorbildliche Arbeitsschutz- und Versorgungsstandards sichern Baufortschritt."
          }
        },
        {
          id: 'B',
          label: "Ersatzarbeiter aus den Nachbardörfern heranziehen",
          description: "Kranke nach Hause schicken und frische Kräfte an die Seile stellen.",
          statChanges: { adel: 15, volk: -15, ep: 1 },
          consequenceText: {
            unterstufe: "Neue Männer ziehen an den Seilen, doch im Arbeiterdorf herrscht Trauer.",
            mittelstufe: "Baudruck aufrechterhalten, aber das Vertrauen der Stammbelegschaft schwindet.",
            oberstufe: "Kalte arbeitsökonomische Austauschbarkeit untergräbt das Betriebsklima."
          }
        },
        {
          id: 'C',
          label: "Schutzamulette der Göttin Sachmet an alle Trupps verteilen",
          description: "Bitte die löwenköpfige Göttin der Heilung um Schutz vor Unfällen.",
          statChanges: { goetter: 20, priester: 15, adel: -5 },
          consequenceText: {
            unterstufe: "Jeder Arbeiter trägt ein Amulett. Die Angst vor bösen Geistern weicht.",
            mittelstufe: "Psychologischer Rückhalt und kultischer Schutz senken die Nervosität.",
            oberstufe: "Sakrale Unfallprävention zur Stärkung der psychischen Resilienz."
          }
        },
        {
          id: 'D',
          label: "Die erste staatliche Unfall- und Invalidenkasse stiften",
          description: "Garantiere verletzten Arbeitern lebenslange Brotversorgung und Ehrenbegräbnis.",
          epCost: 3,
          statChanges: { volk: 30, adel: 15, goetter: 15, ep: -1 },
          consequenceText: {
            unterstufe: "Unglaublicher Jubel! Die Arbeiter weinen vor Rührung: Ein König, der für sie sorgt!",
            mittelstufe: "Ein weltweit einzigartiges Sozialprogramm: Die Arbeiter geben ihr Herzblut für das Monument.",
            oberstufe: "Staatssoziologischer Quantensprung: Wohlfahrtspflege als Fundament imperialer Loyalität."
          }
        }
      ],
      lexiconEntry: {
        title: "Medizinische Versorgung der Pyramidenbauer",
        term: "Baustellenmedizin & Knochenchirurgie",
        explanation: {
          unterstufe: "Skelettfunde in Gizeh bewiesen: Gebrochene Knochen von Pyramidenarbeitern waren fachmännisch geschient und perfekt verheilt!",
          mittelstufe: "Ärzte führten sogar Gehirnoperationen (Trepanationen) durch, die Patienten um Jahre überlebten.",
          oberstufe: "Verletzte Arbeiter erhielten Lohnfortzahlung und wurden im Ehrenfriedhof direkt neben der Königspyramide bestattet."
        },
        curiosityFact: "Bauarbeiter erhielten tägliche Rationen an Zwiebeln und Knoblauch – diese dienten damals als natürliches Schutzmittel gegen Mageninfektionen!"
      }
    }
  },

  // RUNDE 18: Große Sphinx
  18: {
    branchA: {
      id: "r18_sphinx_sand_oath",
      roundNumber: 18,
      locationKey: "sphinx",
      locationName: "Vor den Pranken der Großen Sphinx (Hor-em-achet)",
      milestoneTitle: "Runde 18: Der Blick des Löwenmenschen",
      imagePath: "/assets/sphinx.jpg",
      situation: {
        unterstufe: "Ihr steht vor der gigantischen Sphinx! Der Löwenkörper mit dem Gesicht des Königs blickt zur aufgehenden Sonne. Der Wüstenwind hat den Leib halb mit Sand zugeweht.",
        mittelstufe: "Vor der Sphinx versammeln sich Priester. Der Sonnengott fordert ein Gelöbnis: Welches Symbol prägt deine Identität als Herrscher?",
        oberstufe: "Initiation vor der Sphinx (Horus im Horizont): Das Monument fordert Rechenschaft über deine Regierungsmaxime vor der Krönung."
      },
      choices: [
        {
          id: 'A',
          label: "Schwören, Beschützer der Schwachen und Armen zu sein",
          description: "Lege deine Hand auf die Pranke der Sphinx und gelobe soziale Fürsorge.",
          statChanges: { volk: 25, goetter: 15, adel: -5, ep: 1 },
          consequenceText: {
            unterstufe: "Ein warmer Wind streicht über das Plateau. Die Menge jubelt ergriffen!",
            mittelstufe: "Das Ideal des 'Guten Hirten' berührt die Herzen von Millionen Untertanen.",
            oberstufe: "Tief humanistische Herrschaftsphilosophie sichert moralische Unsterblichkeit."
          }
        },
        {
          id: 'B',
          label: "Schwören, die Feinde mit dem Krummschwert zu zerschmettern",
          description: "Beteure militärische Unbesiegbarkeit und Größe.",
          statChanges: { adel: 20, volk: -5, ep: 1 },
          consequenceText: {
            unterstufe: "Soldaten recken Bronzelanzen in die Höhe und rufen deinen Namen!",
            mittelstufe: "Die Kriegerkaste schwört dir unbedingten Gehorsam.",
            oberstufe: "Militärische Wehrhaftigkeit signalisiert Stärke an die Reichsgrenzen."
          }
        },
        {
          id: 'C',
          label: "Den Sand im Rahmen eines Gottesdienstes freischaufeln",
          description: "Verbinde körperliche Frömmigkeit mit der Befreiung des Monuments.",
          statChanges: { goetter: 20, priester: 20, adel: 5, ep: 1 },
          consequenceText: {
            unterstufe: "Unter goldenem Weihrauchrauch tritt der Löwenkörper wieder hervor!",
            mittelstufe: "Priester verkünden, dass die Götter dir eine endlose Regentschaft schenken.",
            oberstufe: "Sakrale Monumentalrestaurierung nach Vorbild der Traumstele."
          }
        },
        {
          id: 'D',
          label: "Die Traumstele der Harmonie errichten: Glaube, Macht & Volk",
          description: "Meißle das Manifest der vollkommenen Einheit aller drei Säulen.",
          epCost: 3,
          statChanges: { goetter: 20, volk: 20, adel: 20, priester: 20, ep: -1 },
          consequenceText: {
            unterstufe: "Die Inschrift erstrahlt in Gold! Die Sphinx scheint dir zuzunicken!",
            mittelstufe: "Ein Manifest, das die Einheit Ägyptens für Äonen besiegelt.",
            oberstufe: "Vollendete Herrschaftsarchitektur: Dein goldenes Zeitalter beginnt."
          }
        }
      ],
      lexiconEntry: {
        title: "Die Große Sphinx & die Traumstele",
        term: "Sphinx (Harmachis) & Traumstele",
        explanation: {
          unterstufe: "Die Sphinx ist die größte Skulptur der Antike, aus einem Felsen gehauen! Sie hat den Körper eines Löwen und den Kopf eines Königs.",
          mittelstufe: "Zwischen den Pranken steht die 'Traumstele': Prinz Thutmosis träumte, er werde König, wenn er den Sand wegräume.",
          oberstufe: "Die Sphinx personifiziert 'Hor-em-achet' als solaren Sonnengott und unbezwingbaren Beschützer."
        },
        curiosityFact: "Die Sphinx war früher bunt bemalt: Das Gesicht strahlte in kräftigem Rot, das Kopftuch in blau-gelben Streifen!"
      }
    },
    branchB: {
      id: "r18_sphinx_solar_alignment",
      roundNumber: 18,
      locationKey: "sphinx",
      locationName: "Vor der Sphinx – Die Tagundnachtgleiche (Äquinoktium)",
      milestoneTitle: "Runde 18: Der Schatten des Horizonts",
      imagePath: "/assets/sphinx.jpg",
      situation: {
        unterstufe: "Es ist der Tag der Tagundnachtgleiche! Wenn die Sonne genau im Osten aufgeht, versinkt sie am Abend exakt zwischen den Pyramiden von Cheops und Chephren. Die Menge hält den Atem an.",
        mittelstufe: "Kosmisches Schattenspiel vor der Sphinx: Der König muss das Ritual der Vereinigung von Licht und Schatten leiten, um die Harmonie der Welt zu bekräftigen.",
        oberstufe: "Solarastronomie und Königsritual: Die präzise Ausrichtung der Sphinx zum Sonnenuntergang am Frühlingsanfang markiert den kosmischen Beginn eines neuen Zeitalters."
      },
      choices: [
        {
          id: 'A',
          label: "Die Zeremonie der aufgehenden Sonne Re persönlich anführen",
          description: "Hebe die Arme gen Osten und empfange das erste Licht des Sonnengottes.",
          statChanges: { goetter: 25, volk: 15, ep: 1 },
          consequenceText: {
            unterstufe: "Goldenes Licht flutet über dein Gesicht! Das ganze Volk fällt ergriffen auf die Knie!",
            mittelstufe: "Ein überwältigender Moment kosmischer Erleuchtung festigt deine göttliche Legitimation.",
            oberstufe: "Solare Selbstinszenierung im Einklang mit der Heliopolitanischen Schöpfungstheologie."
          }
        },
        {
          id: 'B',
          label: "Das Volk zu einem festlichen Mahl vor den Pfoten der Sphinx einladen",
          description: "Verteile gebratenes Geflügel, Feigen und süßen Dattelwein.",
          statChanges: { volk: 25, adel: -5, ep: 1 },
          consequenceText: {
            unterstufe: "Tausende Menschen speisen friedlich im Schatten des Löwenriesen. Was für ein Fest!",
            mittelstufe: "Volksnähe an heiligster Stätte verbindet Glaube und Gemeinschaftssinn.",
            oberstufe: "Soziale Kohäsionspolitik im Rahmen traditioneller Festkultur."
          }
        },
        {
          id: 'C',
          label: "Die königlichen Leibwachen in Paradeformation aufstellen",
          description: "Lass die Bronzewaffen im letzten Sonnenstrahl blitzen.",
          statChanges: { adel: 20, ep: 1 },
          consequenceText: {
            unterstufe: "Ein Bild erhabener Macht und Disziplin schüchtert jeden Zweifler ein.",
            mittelstufe: "Die militärische Präsenz demonstriert Stärke vor Gesandten fremder Völker.",
            oberstufe: "Militärische Machtprojektion am heiligsten Punkt des Reiches."
          }
        },
        {
          id: 'D',
          label: "Die Weihe der Ewigen Sonne (Horus-im-Horizont) vollziehen",
          description: "Verschmilz Tempel, Sphinx und Pyramiden zu einem harmonischen Gesamtmonument.",
          epCost: 3,
          statChanges: { goetter: 25, adel: 20, volk: 20, priester: 20, ep: -1 },
          consequenceText: {
            unterstufe: "Die Sonne versinkt genau zwischen den Spitzen der Pyramiden! Ein vollkommenes Wunder!",
            mittelstufe: "Ein göttliches Omen: Himmel und Erde bezeugen, dass du der wahre Pharao bist.",
            oberstufe: "Höchste kosmologische Krönungsvorbereitung im ewigen Zyklus des Sonnengottes Re."
          }
        }
      ],
      lexiconEntry: {
        title: "Die Ausrichtung der Sphinx nach den Sternen",
        term: "Äquinoktium & Sonnenkult",
        explanation: {
          unterstufe: "Die Sphinx schaut genau nach Osten, wo jeden Morgen die Sonne aufgeht. Zur Tagundnachtgleiche geht die Sonne genau zwischen den beiden großen Pyramiden unter!",
          mittelstufe: "Die Sphinx bildete mit den Pyramiden einen riesigen kosmischen Kalender, der den Wechsel der Jahreszeiten anzeigte.",
          oberstufe: "Der Sonnenkult von Heliopolis erhob den Pharao zum leiblichen 'Sohn des Re' (Sa Re), der das Sonnenlicht auf Erden repräsentiert."
        },
        curiosityFact: "Zwischen den Pfoten der Sphinx stand früher ein kleiner Tempel, in dem Pharaonen persönliche Dankopfer darbrachten!"
      }
    }
  },

  // RUNDE 19: Das Pyramidion
  19: {
    branchA: {
      id: "r19_pyramidion_gold",
      roundNumber: 19,
      locationKey: "pyramid_top",
      locationName: "Die Spitze der Großen Pyramide – 146 Meter Höhe",
      milestoneTitle: "Runde 19: Das Pyramidion aus Elektron",
      imagePath: "/assets/giza_site.jpg",
      situation: {
        unterstufe: "Der feierlichste Moment ist da! Der letzte Schlussstein – das spitze Pyramidion aus glänzendem Elektron (Gold und Silber) – soll auf die Spitze gehoben werden. Alle halten den Atem an.",
        mittelstufe: "Das Pyramidion steht auf der obersten Plattform bereit. Wer soll die Ehre haben, den Schlussstein an seinen Platz zu setzen?",
        oberstufe: "Finaler Höhepunkt des Staatsbaus: Das Setzen des Benben-Steins verbindet Himmel und Erde vor der morgigen Krönung."
      },
      choices: [
        {
          id: 'A',
          label: "Gemeinsam mit einem Vertreter der Arbeiter den Stein platzieren",
          description: "Ehre das Volk, dessen Hände dieses Weltwunder erbaut haben.",
          statChanges: { volk: 25, adel: -5, goetter: 10, ep: 1 },
          consequenceText: {
            unterstufe: "Die Menge unten bricht in Jubel aus! Tränen der Rührung fließen.",
            mittelstufe: "Historisches Zeichen der Dankbarkeit gegenüber den Arbeitern.",
            oberstufe: "Tiefste volksnahe Verbundenheit sichert dir ewigen Ehrenplatz."
          }
        },
        {
          id: 'B',
          label: "Dem Hohepriester das Weiheritual überlassen",
          description: "Stelle die Götter und den Sonnenkult von Re an erste Stelle.",
          statChanges: { goetter: 25, priester: 20, adel: -5, ep: 1 },
          consequenceText: {
            unterstufe: "Rauch steigt auf und das Gold blitzt im ersten Sonnenstrahl auf!",
            mittelstufe: "Der Re-Kult segnet das Bauwerk als Abbild des Schöpfungshügels.",
            oberstufe: "Kosmologische Vollendung im Geiste der Theokratie."
          }
        },
        {
          id: 'C',
          label: "Gemeinsam mit Generälen und Adligen den Stein setzen",
          description: "Festige das Bündnis mit der Führungsriege des Staates.",
          statChanges: { adel: 25, volk: -10, ep: 1 },
          consequenceText: {
            unterstufe: "Schwerter klirren im Takt. Der Adel verspricht Loyalität.",
            mittelstufe: "Ein Bekenntnis zur Machtelite kettet den Adel an deine Dynastie.",
            oberstufe: "Stärkung der Feudalhierarchie zur Sicherung stabiler Macht."
          }
        },
        {
          id: 'D',
          label: "Die Dreifaltigkeits-Weihe vollziehen: Priester, Krieger & Baumeister",
          description: "Lass alle drei Stände gemeinsam die Hände an das Gold legen.",
          epCost: 3,
          statChanges: { goetter: 20, volk: 20, adel: 20, priester: 20, ep: -1 },
          consequenceText: {
            unterstufe: "Als die goldene Spitze einrastet, bricht das Licht in Regenbogenfarben!",
            mittelstufe: "Niemand ist ausgeschlossen, alle haben gesiegt. Das Reich wird eins.",
            oberstufe: "Vollkommene Apotheose der Einheit: Meilenstein imperialer Staatskunst."
          }
        }
      ],
      lexiconEntry: {
        title: "Das Pyramidion – Der Urhügel Benben",
        term: "Pyramidion & Elektron-Metall",
        explanation: {
          unterstufe: "Das Pyramidion war der spitzeste Stein ganz oben auf der Pyramide aus vergoldetem Elektron, das wie Feuer glänzte.",
          mittelstufe: "Der Benben-Stein symbolisierte den ersten Erdhügel, der bei der Erschaffung der Welt aus dem Urchaos aufgetaucht war.",
          oberstufe: "Die Reflexion des Sonnenlichts war weithin über das Niltal sichtbar und verkörperte die Vereinigung mit Re."
        },
        curiosityFact: "Elektron nannten die Ägypter 'Dscham' – eine natürliche Legierung aus Gold und Silber!"
      }
    },
    branchB: {
      id: "r19_pyramidion_night_vigil",
      roundNumber: 19,
      locationKey: "pyramid_top",
      locationName: "Das Hochplateau von Gizeh – Die Nachtwache vor dem Thron",
      milestoneTitle: "Runde 19: Die Flammen der ewigen Nacht",
      imagePath: "/assets/giza_site.jpg",
      situation: {
        unterstufe: "Es ist die letzte Nacht vor der Krönung. Tausende Fackeln erhellen das Plateau von Gizeh wie ein Sternenmeer. Älteste und Schreiber treten an dein Zelt und fragen: 'Bist du bereit für die Last der Doppelkrone?'",
        mittelstufe: "Die Nachtwache der Einkehr: Am Vorabend der Thronbesteigung bittest du um letzte Ratschläge deiner Vertrauten. Wo setzt du deine Priorität für die Regentschaft?",
        oberstufe: "Moralische und staatsphilosophische Selbstprüfung: Nach 19 Etappen auf dem Nil steht dein Vermächtnis fest. Wähle deine letzte rituelle Vorbereitung."
      },
      choices: [
        {
          id: 'A',
          label: "Mit den Schreibern die Chronik der Reise versiegeln",
          description: "Lass jede Entscheidung für die Nachwelt festhalten.",
          statChanges: { ep: 3, priester: 10, adel: 10 },
          consequenceText: {
            unterstufe: "Das Siegel des Horus wird eingedrückt: Deine Taten sind unvergänglich!",
            mittelstufe: "Historische Dokumentation garantiert dir einen Ehrenplatz in den Annalen.",
            oberstufe: "Bürokratische Unsterblichkeit: Deine Reformen werden Gesetz."
          }
        },
        {
          id: 'B',
          label: "Zu den Lagern der Arbeiter gehen und am Feuer Geschichten teilen",
          description: "Verbringe deine letzte Nacht als Prinz unter dem einfachen Volk.",
          statChanges: { volk: 25, adel: -5, ep: 1 },
          consequenceText: {
            unterstufe: "Die Männer und Frauen teilen ihr Brot mit dir und singen Lieder der Hoffnung.",
            mittelstufe: "Tiefste Demut und Bürgernähe festigen deinen Ruf als 'Pharao des Volkes'.",
            oberstufe: "Populäre Verwurzelung schützt deine Herrschaft vor Palastverschwörungen."
          }
        },
        {
          id: 'C',
          label: "Die Leibgarde für den morgigen Sicherheitsschutz instruieren",
          description: "Keine Nachlässigkeit: Memphis muss morgen eine Festung des Friedens sein.",
          statChanges: { adel: 20, ep: 1 },
          consequenceText: {
            unterstufe: "Die Schilde stehen bereit. Niemand wird die feierliche Krönung stören.",
            mittelstufe: "Eiserne Disziplin garantiert einen reibungslosen zeremoniellen Ablauf.",
            oberstufe: "Militärische Wachsamkeit sichert den Übergang der Staatssouveränität."
          }
        },
        {
          id: 'D',
          label: "Die Meditation der Goldenen Waagschale der Ma'at vollziehen",
          description: "Wiege dein eigenes Herz gegen die Feder der Wahrheit.",
          epCost: 3,
          statChanges: { goetter: 25, volk: 20, adel: 20, priester: 20, ep: -1 },
          consequenceText: {
            unterstufe: "Dein Herz ist leicht wie eine Feder! Reiner Friede strömt durch deinen Geist!",
            mittelstufe: "Die Götter bestätigen deine innere Reinheit: Du bist wahrhaft würdig des Thrones.",
            oberstufe: "Vollkommene ethische Reife: Der ideale Philosoph-König der Antike ist geboren."
          }
        }
      ],
      lexiconEntry: {
        title: "Die Nachtwache des Pharaos vor dem Thron",
        term: "Sed-Fest & Königsweihe",
        explanation: {
          unterstufe: "Vor der Krönung fastete der künftige König und betete die ganze Nacht, um von allen Sünden gereinigt zu werden.",
          mittelstufe: "Beim berühmten 'Sed-Fest' (dem königlichen Jubiläum) musste der Pharao sogar einen rituellen Lauf absolvieren, um seine körperliche Fitness zu beweisen.",
          oberstufe: "Die rituelle Regeneration des Herrschers garantierte im altägyptischen Glauben das Fortbestehen der Lebenskraft (Ka) des gesamten Volkes."
        },
        curiosityFact: "Wenn ein König krank oder zu schwach für den rituellen Lauf war, durfte er ihn im Rollstuhl oder symbolisch durchführen lassen!"
      }
    }
  }
};

// Fixed End: Runde 20 (Krönungszeremonie in Memphis)
const FIXED_END_STORY: RoundStory = {
  id: "r20_coronation_finale",
  roundNumber: 20,
  locationKey: "coronation_hall",
  locationName: "Der Krönungssaal von Memphis & Gizeh",
  milestoneTitle: "Runde 20: DAS FINALE – DIE GROSSE KRÖNUNGSZEREMONIE",
  imagePath: "/assets/coronation.jpg",
  hotspots: [
    {
      id: "hs_coronation_krone",
      x: 50,
      y: 36,
      label: "Die Doppelkrone (Pschent)",
      description: "Vereinigung der weißen oberägyptischen Hedjet-Krone mit der roten unterägyptischen Descheret-Krone als Symbol des geeinten Reiches.",
      icon: "👑"
    },
    {
      id: "hs_coronation_insignien",
      x: 35,
      y: 58,
      label: "Krummstab (Heka) & Geißel (Nechaja)",
      description: "Zeichen der Herrschergewalt: Der Krummstab als Hirte des Volkes, die Geißel zur Verteidigung und Zucht.",
      icon: "🦯"
    },
    {
      id: "hs_coronation_priester",
      x: 72,
      y: 62,
      label: "Hohepriesterschaft & Salbungsöl",
      description: "Die Kleriker vollziehen die rituelle Waschung mit heiligem Nilwasser und salben den Thronfolger mit edler Myrrhe.",
      icon: "🏺"
    }
  ],
  situation: {
    unterstufe: "Der große Tag ist gekommen! Posaunen ertönen im ganzen Niltal. Du trittst vor den goldenen Thron. Volk, Priester, Adel und Götter blicken auf dich. Welches Thronversprechen gibst du der Welt?",
    mittelstufe: "Die Krönung zum Pharao von Ober- und Unterägypten: Nun wiegen deine Taten, deine Weisheit und deine Werte schwerer als alles andere. Wähle dein ewiges Regierungsmotto.",
    oberstufe: "Das Sakrament des Sed-Festes und die Vereinigung der Doppelkrone (Pschent): Deine Reise hat dein Schicksal besiegelt. Nun folgt das historische Urteil über deine Regentschaft."
  },
  choices: [
    {
      id: 'A',
      label: "Die Schwüre der Gerechtigkeit & des Friedens für alle Zeiten leisten",
      description: "Verspreche, dein Reich in Sanftmut, Wohlstand und Wahrheit zu regieren.",
      statChanges: { volk: 20, goetter: 15, priester: 10, adel: 10 },
      skillChanges: { politischeGeschicklichkeit: 2 },
      consequenceText: {
        unterstufe: "Weihrauchwolken steigen empor. Die Priester setzen dir die Doppelkrone auf das Haupt!",
        mittelstufe: "Die Doppelkrone ruht auf deinem Haupt. Die Menge jubelt: 'Leben, Heil, Gesundheit dem Pharao!'",
        oberstufe: "Du wirst als weiser Reformer und Vater des Volkes gekrönt. Dein Name erstrahlt in goldenen Kartuschen."
      }
    },
    {
      id: 'B',
      label: "Die Herrschaft der göttlichen Ordnung (Ma'at) zur Pflicht erklären",
      description: "Stelle das kosmische Gesetz über alle irdischen Wünsche.",
      statChanges: { goetter: 25, priester: 20, volk: 10, adel: 10 },
      skillChanges: { goettlicheAuserwaehltheit: 2 },
      consequenceText: {
        unterstufe: "Die Göttin Ma'at scheint ihre Schwingen über deinen Thron zu breiten!",
        mittelstufe: "Vollkommene theologische Weihe: Ein gottgleicher Pharao regiert das Reich der Ewigkeit.",
        oberstufe: "Die Priesterschaft bezeugt: Unter deiner Führung wird das Reich nie wieder in Chaos versinken."
      }
    },
    {
      id: 'C',
      label: "Die unbezwingbare Stärke und den Glanz der Krone proklamieren",
      description: "Verkünde, dass Ägypten zur mächtigsten Großmacht aufsteigt.",
      statChanges: { adel: 25, volk: 10, goetter: 10, ep: 1 },
      skillChanges: { militaerischeStaerke: 2 },
      consequenceText: {
        unterstufe: "Tausende Krieger schlagen Bronzeschilde aneinander: Ein neuer Kriegerpharao ist geboren!",
        mittelstufe: "Ehrfurcht und Respekt bei allen Nachbarvölkern von Nubien bis zum Euphrat.",
        oberstufe: "Du betrittst die Weltbühne als unanfechtbarer Herrscher eines Weltreiches."
      }
    },
    {
      id: 'D',
      label: "Das Goldene Zeitalter der Vereinigung ausrufen (Krone des Sonnengottes)",
      description: "Vollende das Meisterwerk deiner Herrschaft mit vollkommenem Segen aller Stände.",
      epCost: 3,
      statChanges: { goetter: 25, volk: 25, priester: 25, adel: 25 },
      skillChanges: { goettlicheAuserwaehltheit: 2, politischeGeschicklichkeit: 2, militaerischeStaerke: 2 },
      consequenceText: {
        unterstufe: "LEGENDÄR! Goldstaub regnet herab und das ganze Land liegt sich glücklich in den Armen!",
        mittelstufe: "Ein Krönungsfest, von dem noch in zehntausend Jahren gesungen wird: Der perfekte Pharao!",
        oberstufe: "Historischer Zenit: Die vollkommene Synthese aus sakraler Vorsehung, Adel und Volksliebe."
      }
    }
  ],
  lexiconEntry: {
    title: "Die Doppelkrone (Pschent) & der Throntitel",
    term: "Pschent & fünf Titulaturen",
    explanation: {
      unterstufe: "Der Pharao trug die Doppelkrone: Die weiße Krone für Oberägypten und die rote Krone für Unterägypten, um die Einheit zu zeigen.",
      mittelstufe: "Jeder Pharao erhielt bei der Krönung fünf offizielle Namen, darunter den Horusnamen und den Thronnamen in der Kartusche.",
      oberstufe: "Die Doppelkrone symbolisiert die Überwindung des Chaos zur ewigen kosmischen Versöhnung beider Länder."
    },
    curiosityFact: "Bis heute hat kein Archäologe eine echte Krone eines Pharaos gefunden – vermutlich waren sie zu heilig oder bestanden aus Stoff!"
  }
};

/**
 * Dynamic Station Resolver:
 * Resolves the appropriate RoundStory for a given round based on the player's current stats & skills.
 */
export function getStoryForRound(roundNumber: number, currentStats: Stats, currentSkills: Skills): RoundStory {
  // Rounds 1, 2, 3: Fixed prologue
  if (roundNumber === 1) return FIXED_START_STORIES[0];
  if (roundNumber === 2) return FIXED_START_STORIES[1];
  if (roundNumber === 3) return FIXED_START_STORIES[2];

  // Round 20: Fixed grand coronation finale
  if (roundNumber === 20) return FIXED_END_STORY;

  // Dynamic Rounds 4 to 19:
  const pair = DYNAMIC_BRANCH_STORIES[roundNumber];
  if (!pair) {
    return FIXED_START_STORIES[0]; // Fallback safety
  }

  // Branch Decision Logic:
  // If player has high priests/gods, prefer Branch A (sacred/spiritual/theocratic).
  // If player has high people/military, prefer Branch B (populist/civil/military crisis).
  const spiritualWeight = currentStats.priester + currentStats.goetter + currentSkills.goettlicheAuserwaehltheit * 5;
  const secularWeight = currentStats.volk + currentStats.adel + (currentSkills.politischeGeschicklichkeit + currentSkills.militaerischeStaerke) * 5;

  if (spiritualWeight >= secularWeight) {
    return pair.branchA;
  } else {
    return pair.branchB;
  }
}
