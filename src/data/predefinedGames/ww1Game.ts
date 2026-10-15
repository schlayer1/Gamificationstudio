import { GameDefinition, RoundStory } from '../../types/game';

export const WW1_ROUNDS: RoundStory[] = [
  // =========================================================================
  // BILD 1: Station 1 (/assets/ww1_station_01.jpg)
  // =========================================================================
  // RUNDE 1
  {
    id: "ww1_r01_sarajevo",
    roundNumber: 1,
    locationKey: "sarajevo",
    locationName: "Sarajevo & das europäische Pulverfass",
    milestoneTitle: "Runde 1: Der Schuss, der die Welt entzündete",
    imagePath: "/assets/ww1_station_01.jpg",
    hotspots: [
      { id: "hs_r1_attentat", x: 35, y: 45, label: "Das Attentat (28. Juni 1914)", description: "Gavrilo Princip von der serbischen Geheimorganisation 'Schwarze Hand' erschießt Erzherzog Franz Ferdinand.", icon: "💥" },
      { id: "hs_r1_blankoscheck", x: 68, y: 55, label: "Der deutsche 'Blankoscheck'", description: "Kaiser Wilhelm II. sichert Österreich-Ungarn bedingungslose Bündnistreue gegen Serbien und Russland zu.", icon: "📜" },
      { id: "hs_r1_presse", x: 22, y: 70, label: "Kriegsrhetorik in den Zeitungen", description: "Schlagzeilen schüren Nationalismus und Panik in Wien, Berlin, Paris, London und St. Petersburg.", icon: "📰" }
    ],
    situation: {
      unterstufe: "Sommer 1914: In Sarajevo wurde der österreichische Thronfolger erschossen. Die Herrscher Europas drohen sich gegenseitig mit Krieg. Du stehst als junger Mensch am Zeitungskiosk und musst entscheiden, wie du mit den aufgeregten Parolen umgehst.",
      mittelstufe: "Nach dem Attentat von Sarajevo löst die Julikrise eine Kettenreaktion der europäischen Bündnissysteme aus. Als Einberufungsbefehle ausgehängt werden, streiten deine Freunde über Pflicht, Vaterlandsliebe und die Angst vor einem Weltkrieg.",
      oberstufe: "Diplomatischer Automatismus im Juli 1914: Imperialistische Rivalitäten, Flottenwettrüsten und der deutsche 'Blankoscheck' eskalieren zum Kontinentalkrieg. Du musst deine Haltung inmitten chauvinistischer Massenpsychose und drohender Mobilmachung bestimmen."
    },
    choices: [
      {
        id: 'A',
        label: "Dich von der nationalen Welle mitreißen lassen und freiwillig melden",
        description: "Glaube an die Propaganda: 'Zu Weihnachten sind wir siegreich wieder zu Hause!'",
        statChanges: { adel: 15, volk: -10, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Du ziehst mit der jubelnden Menge durch die Straßen. Dein Mut wird gelobt, doch ältere Menschen blicken besorgt.",
          mittelstufe: "Die nationale Begeisterung stärkt dein Selbstbewusstsein, verstellt dir aber den Blick für die mörderische Realität des modernen Krieges.",
          oberstufe: "Du folgst dem 'Burgfrieden' und der Kriegshysterie. Deine Entschlossenheit imponiert den Offizieren, blendet aber die Zerstörungskraft moderner Rüstung aus."
        }
      },
      {
        id: 'B',
        label: "Mit Familie und Nachbarn über den Frieden und die Gefahren sprechen",
        description: "Versuche, die aufgeregten Gemüter zu beruhigen und die Bündnislogik zu hinterfragen.",
        statChanges: { volk: 15, adel: -5, ep: 2 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Deine Eltern danken dir für deine Besonnenheit. Man hört dir aufmerksam zu.",
          mittelstufe: "Du findest Zuspruch bei nachdenklichen Bürgern, wirst von fanatischen Nationalisten jedoch misstrauisch beäugt.",
          oberstufe: "Kritischer Scharfsinn in Zeiten kollektiven Taumels: Du festigst deine humanistische Haltung, gerätst jedoch ins Visier patriotischer Scharfmacher."
        }
      },
      {
        id: 'C',
        label: "Vorräte, warme Kleidung und Notfallausrüstung beschaffen",
        description: "Bereite dich und deine Nächsten pragmatisch auf lange Versorgungsengpässe vor.",
        statChanges: { priester: 15, goetter: 5, adel: -5 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Gute Vorbereitung zahlt sich aus: Du sicherst Mehl, haltbare Konserven und feste Stiefel.",
          mittelstufe: "Dein Weitblick schützt die Gruppe vor dem ersten Preisschock, als Lebensmittel rasch knapp werden.",
          oberstufe: "Logistischer Realismus: Während andere jubeln, schaffst du materielle Rücklagen für die drohende Katastrophe."
        }
      },
      {
        id: 'D',
        label: "Ein geheimes Friedensmanifest im Viertel verteilen (Einsatz: 3 Briefe)",
        description: "Riskanter Appell: 'Arbeiter aller Länder, schießt nicht aufeinander!'",
        epCost: 3,
        statChanges: { volk: 25, goetter: 10, adel: -15 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Einige Nachbarn nicken dir heimlich zu. Du hast Zivilcourage bewiesen!",
          mittelstufe: "Das Flugblatt weckt Zweifel am Kriegstaumel. Die Polizei sucht den Verfasser, aber die Kameradschaft schützt dich.",
          oberstufe: "Ein heroisches Bekenntnis zum Pazifismus der Zweiten Internationale, das dich jedoch an den Rand der Verhaftung bringt."
        }
      }
    ],
    lexiconEntry: {
      term: "Die Julikrise 1914 & Bündnissysteme",
      title: "Vom Funken zum Weltenbrand",
      explanation: {
        unterstufe: "Nach den Schüssen von Sarajevo im Juni 1914 halfen sich verbündete Länder gegenseitig: Deutschland stand zu Österreich, Russland zu Serbien, Frankreich zu Russland. So wurden aus einem Streit viele Kriege auf einmal.",
        mittelstufe: "Die Julikrise 1914 eskalierte durch feste Militärbündnisse: Dreibund (Mittelmächte) gegen Triple Entente. Mobilmachungspläne ließen der Diplomatie kaum Zeit, da die Eisenbahnfahrpläne der Armeen strikt getaktet waren.",
        oberstufe: "Imperialistische Weltmachtambitionen, deutsch-britisches Flottenwettrüsten und panslawistischer Balkan-Nationalismus bildeten die strukturelle Ursache. Die fatale Blankovollmacht Berlins beschleunigte die unausweichliche Mobilmachungsmaschinerie."
      },
      curiosityFact: "Kaiser Wilhelm II. und Zar Nikolaus II. von Russland waren Cousins und schrieben sich vor Kriegsausbruch persönliche Telegramme ('Lieber Willy', 'Lieber Nicky'), um den Krieg abzuwenden – vergebens."
    }
  },

  // RUNDE 2
  {
    id: "ww1_r02_mobilmachung",
    roundNumber: 2,
    locationKey: "bahnhof_mobilmachung",
    locationName: "Hauptbahnhof & Verladekai",
    milestoneTitle: "Runde 2: Der Abschied im August 1914",
    imagePath: "/assets/ww1_station_01.jpg",
    hotspots: [
      { id: "hs_r2_zug", x: 65, y: 55, label: "Militär-Transportzug", description: "Mit Kreide beschriftet: 'Ausflug nach Paris', 'Auf Wiedersehen auf dem Boulevard'. Täuschende Euphorie.", icon: "🚂" },
      { id: "hs_r2_kapelle", x: 45, y: 65, label: "Militärkapelle & Blumen", description: "Junge Frauen stecken Rekruten Rosen an die Pickelhaube; Marschmusik übertönt weinende Mütter.", icon: "🎺" },
      { id: "hs_r2_feldpost", x: 20, y: 70, label: "Feldpostkarten-Ausgabe", description: "Erste offizielle Postkarten für Lebenszeichen von der Front werden verteilt.", icon: "✉️" }
    ],
    situation: {
      unterstufe: "Am Bahnhof drängen sich tausende Menschen. Militärkapellen spielen, Soldaten winken aus den Fenstern. Du sitzt im Abteil und spürst das Rucken der Lokomotive. Dein Kamerad neben dir fängt plötzlich leise an zu weinen.",
      mittelstufe: "August 1914: Die Einberufenen steigen in die Waggons. Zwischen Marschmusik und patriotischen Abschiedsreden mischt sich nackte Todesangst. Dein Zugabteil wird zur Schicksalsgemeinschaft junger Rekruten, die einander noch nie gesehen haben.",
      oberstufe: "Der Mythos vom 'Augusterlebnis 1914': Während Bürgertum und Studenten euphorisch in den Krieg drängen, herrscht bei Arbeitern und Landbevölkerung tiefe Beklemmung. Im Zugabteil musst du zwischen lautem Chauvinismus und stiller Verzweiflung vermitteln."
    },
    choices: [
      {
        id: 'A',
        label: "Dem weinenden Kameraden Mut zusprechen und dein Brot mit ihm teilen",
        description: "Zeige Menschlichkeit statt militärischer Härte.",
        statChanges: { goetter: 15, volk: 10, ep: 1 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Er wischt sich die Tränen ab und lächelt dankbar. Ein starkes Band der Freundschaft entsteht.",
          mittelstufe: "Die Kameraden im Abteil merken, dass Zusammenhalt wichtiger ist als laute Parolen.",
          oberstufe: "Du begründest eine verlässliche Schicksalsgemeinschaft, die sich im kommenden Stellungskrieg als überlebenswichtig erweisen wird."
        }
      },
      {
        id: 'B',
        label: "Mit den anderen laut Kriegslieder singen, um die Angst zu betäuben",
        description: "Stärke die Kampfmoral der Truppe durch patriotischen Gesang.",
        statChanges: { adel: 15, volk: -5, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Die Musik dröhnt durch den Waggon. Für einen Moment vergisst man die Gefahr.",
          mittelstufe: "Die Disziplin und Siegeszuversicht steigen, doch die innere Beklemmung bleibt nur notdürftig verdrängt.",
          oberstufe: "Gruppenpsychologische Selbstvergewisserung: Du hebst die militärische Kampfbereitschaft, förderst aber Verdrängung."
        }
      },
      {
        id: 'C',
        label: "Ausrüstung, Notverband und Stiefelzeug akribisch überprüfen",
        description: "Nutze die stundenlange Fahrt für praktische Vorbereitung.",
        statChanges: { priester: 15, adel: 5 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Deine Ausrüstung sitzt perfekt. Nichts klappert, kein Riemen scheuert.",
          mittelstufe: "Du bemerkst fehlende Zeltnägel rechtzeitig und tauschst mit Kameraden. Gute Vorsorge schützt Leben.",
          oberstufe: "Militärische Gründlichkeit: Du sorgst dafür, dass deine Gruppe einsatzbereit und ohne Ausrüstungsverluste an der Front ankommt."
        }
      },
      {
        id: 'D',
        label: "Einen ehrlichen, unzensierten Abschiedsbrief nach Hause werfen (Einsatz: 2 Briefe)",
        description: "Schreibe die Wahrheit über deine Ängste und gib den Brief einem Bahnbeamten mit.",
        epCost: 2,
        statChanges: { volk: 20, goetter: 10, priester: -5 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Der Brief erreicht deine Eltern noch vor der Zensur. Sie beten für deine Heimkehr.",
          mittelstufe: "Ein berührendes Dokument der Aufrichtigkeit, das deiner Familie Trost spendet.",
          oberstufe: "Ein historisches Zeitdokument jenseits propagandistischer Verklärung: Du bewahrst dein seelisches Gleichgewicht."
        }
      }
    ],
    lexiconEntry: {
      term: "Das 'Augusterlebnis' 1914 & Mobilmachung",
      title: "Jubel an den Bahnhöfen",
      explanation: {
        unterstufe: "Im August 1914 glaubten viele junge Männer, der Krieg sei ein schnelles, ruhmreiches Abenteuer. Erst an der Front erkannten sie das Grauen moderner Waffen.",
        mittelstufe: "Das Schlagwort 'Augusterlebnis' beschrieb die angebliche nationale Geschlossenheit ('Burgfrieden'). Neuere Forschungen zeigen jedoch: Vor allem in Arbeiterbezirken herrschte große Angst vor Not und Verwüstung.",
        oberstufe: "Die staatliche Zensur und die Presse inszenierten eine euphorische Kriegsbereitschaft. Für Millionen Rekruten wurde der Transportzug jedoch zur Einbahnstraße in den industriellen Massentod."
      },
      curiosityFact: "Auf vielen Zügen stand mit Kreide: 'Ausflug nach Paris – auf Wiedersehen auf dem Boulevard'. Kaum ein Soldat ahnte, dass der Krieg vier lange Jahre dauern würde."
    }
  },

  // =========================================================================
  // BILD 2: Station 2 (/assets/ww1_station_02.jpg)
  // =========================================================================
  // RUNDE 3
  {
    id: "ww1_r03_schlieffen",
    roundNumber: 3,
    locationKey: "belgien_vormarsch",
    locationName: "Belgien & das Scheitern des Schlieffen-Plans",
    milestoneTitle: "Runde 3: Der Vormarsch gerät ins Stocken",
    imagePath: "/assets/ww1_station_02.jpg",
    hotspots: [
      { id: "hs_r3_karte", x: 25, y: 45, label: "Der Schlieffen-Plan", description: "Sah vor, Frankreich durch das neutrale Belgien blitzartig zu umgehen und in 6 Wochen zu besiegen.", icon: "🗺️" },
      { id: "hs_r3_bruecke", x: 50, y: 60, label: "Gischt der Maas & Festung Lüttich", description: "Belgischer Widerstand und zerstörte Eisenbahnbrücken verlangsamten den deutschen Zeitplan massiv.", icon: "💥" },
      { id: "hs_r3_brief", x: 75, y: 70, label: "Erschöpfte Infanteristen", description: "Tagesmärsche von bis zu 40 Kilometern bei sengender Hitze in voller Montur zehrten an Kräften.", icon: "🥾" }
    ],
    situation: {
      unterstufe: "Seit Wochen marschierst du mit schwerem Gepäck durch Staub und Hitze. Der Plan der Generäle sah einen schnellen Sieg vor, doch die belgischen Brücken sind gesprengt und die Truppen völlig erschöpft. Dein Vorgesetzter verlangt einen Nachtmarsch.",
      mittelstufe: "Der Schlieffen-Plan gerät aus den Fugen: Der Völkerrechtsbruch gegen das neutrale Belgien brachte Großbritannien gegen Deutschland auf. Die Versorgungskolonnen kommen den rasch vorstoßenden Spitzen nicht mehr nach. Die Soldaten hungern.",
      oberstufe: "Strategische Krise im Spätsommer 1914: Die deutsche Heeresleitung verliert den Kontakt zu den Flügelarmeen. Hunderte Kilometer Gewaltmarsch haben Mensch und Zugtiere ausgezehrt, während der Munitionsnachschub stockt. Wie führst du deine Gruppe?"
    },
    choices: [
      {
        id: 'A',
        label: "Die Männer schonen und auf einer zweistündigen Rast im Schatten bestehen",
        description: "Verhindere Hitzschläge und Zusammenbrüche unter deinen Kameraden.",
        statChanges: { goetter: 15, volk: 10, adel: -10 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Deine Kameraden kühlen ihre brennenden Füße im Bach. Niemand bricht zusammen.",
          mittelstufe: "Der Regimentsarzt lobt deine Vernunft, auch wenn der strenge Major dich wegen Verzug rügt.",
          oberstufe: "Du rettest die Kampffähigkeit deiner Kompanie auf Kosten starrer militärischer Gehorsamsdoktrin."
        }
      },
      {
        id: 'B',
        label: "Den Befehl erbarmungslos durchziehen und das Tempo antreiben",
        description: "Befolge die Marschtabelle der Obersten Heeresleitung ohne Rücksicht.",
        statChanges: { adel: 15, goetter: -15, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Ihr erreicht den Hügel pünktlich, aber mehrere Kameraden brechen mit Sonnenstich zusammen.",
          mittelstufe: "Militärisch ein Erfolg, doch das Vertrauen in deine Führung hat schwere Risse bekommen.",
          oberstufe: "Preußischer Kadavergehorsam triumphiert, während die physische Substanz der Truppe bedenklich schwindet."
        }
      },
      {
        id: 'C',
        label: "Einen verlassenen Gutshof nach Trinkwasser und Brot durchsuchen",
        description: "Beschaffe Lebensmittel für deine erschöpfte Gruppe.",
        statChanges: { priester: 15, adel: -5 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Ihr findet frisches Brunnenwasser und ein Fass Äpfel. Das gibt neue Kraft!",
          mittelstufe: "Die Vorräte heben die Laune, doch plündernde Nachzügler drohen die Zivilbevölkerung zu erbittern.",
          oberstufe: "Requirierung zur Lebenserhaltung: Du sicherst das Überleben deiner Männer vor dem ersten großen Gefecht."
        }
      },
      {
        id: 'D',
        label: "Zerstörte Fernsprechleitungen reparieren (Einsatz: 2 Briefe)",
        description: "Stelle die Funk- und Kabelverbindung zum Nachschublager wieder her.",
        epCost: 2,
        statChanges: { priester: 20, adel: 10, ep: 2 },
        skillChanges: { goettlicheAuserwaehltheit: 2 },
        consequenceText: {
          unterstufe: "Der Heeresbericht kommt durch! Noch in der Nacht rollen Munitionswagen an.",
          mittelstufe: "Du behebst den Kommunikationsabriss und sicherst lebenswichtige Artillerieunterstützung.",
          oberstufe: "Technologische Pionierleistung im Bewegungskrieg: Du schützt deinen Flügel vor der feindlichen Einkesselung."
        }
      }
    ],
    lexiconEntry: {
      term: "Der Schlieffen-Plan & Völkerrechtsbruch",
      title: "Der gescheiterte Blitzkrieg",
      explanation: {
        unterstufe: "Der Schlieffen-Plan war ein deutscher Kriegsplan. Er sah vor, ganz schnell durch Belgien nach Paris zu marschieren. Doch Belgien wehrte sich tapfer und England trat in den Krieg ein.",
        mittelstufe: "Generalfeldmarschall von Schlieffen konzipierte den Plan zur Vermeidung eines Zweifrontenkriegs. Die Missachtung der belgischen Neutralität diskreditierte das Deutsche Reich moralisch und band unerwartet starke Kräfte.",
        oberstufe: "Logistische Überdehnung, zäher belgischer Festungswiderstand und die Fehleinschätzung russischer Mobilisierungsgeschwindigkeit ließen den strategischen Plan bereits vor der Marne scheitern."
      },
      curiosityFact: "Weil die deutschen Truppen so schnell vorrückten, rissen die Kabelverbindungen ab. Befehle wurden per Brieftaube oder Motorradkurier übermittelt – oft kamen sie Tage zu spät an."
    }
  },

  // RUNDE 4
  {
    id: "ww1_r04_marne",
    roundNumber: 4,
    locationKey: "marne_taxi",
    locationName: "Das Wunder an der Marne & Erstarren der Front",
    milestoneTitle: "Runde 4: Der Schaufelstich in die Erde",
    imagePath: "/assets/ww1_station_02.jpg",
    hotspots: [
      { id: "hs_r4_taxis", x: 42, y: 62, label: "Taxis der Marne", description: "600 Pariser Renault-Taxis brachten über Nacht tausende französische Soldaten direkt an die Frontlinie.", icon: "🚕" },
      { id: "hs_r4_spaten", x: 75, y: 65, label: "Der Feldspaten", description: "Wurde zur wichtigsten Überlebenswaffe: Wer sich nicht binnen Minuten eingrub, fiel im Granathagel.", icon: "⛏️" },
      { id: "hs_r4_fluss", x: 20, y: 40, label: "Das Tal der Marne", description: "Französischer und britischer Gegenangriff stoppte den deutschen Vorstoß kurz vor den Toren von Paris.", icon: "🌊" }
    ],
    situation: {
      unterstufe: "An der Marne stoßen die Armeen aufeinander. Tausende französische Soldaten wurden mit Pariser Taxis herbeigeeilt. Ein ohrenbetäubender Granathagel zwingt dich zu Boden. Ein Leutnant schreit: 'Eingraben! Jeder gräbt sein eigenes Loch!'",
      mittelstufe: "Schlacht an der Marne, September 1914: Der deutsche Vormarsch wird zurückgeworfen. Beide Seiten können weder vor noch zurück. Wer aufrecht steht, wird vom Maschinengewehr zersiebt. Der Feldspaten wird zum lebensrettenden Werkzeug.",
      oberstufe: "Der historische Wendepunkt zum Stellungskrieg: Das operative Manöver bricht zusammen. Vom Ärmelkanal bis zur Schweizer Grenze beginnen 2 Millionen Männer, sich in den Boden einzugraben. Wie organisierst du deinen Grabenabschnitt?"
    },
    choices: [
      {
        id: 'A',
        label: "Einen zickzackförmigen Graben mit tiefem Erdschutz ausheben",
        description: "Befolge klug die Schanzregeln, um deine Gruppe vor Granatsplittern zu schützen.",
        statChanges: { goetter: 15, adel: 10, ep: 1 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Der Schaufelaushub schützt euch. Granatsplitter pfeifen harmlos über eure Köpfe hinweg.",
          mittelstufe: "Zickzackgräben verhindern Längsfeuer eindringender Feinde. Deine Pioniertaktik rettet Leben.",
          oberstufe: "Perfektes Schanzwerk nach pioniertechnischen Richtlinien: Du schaffst die Basis für einen verteidigungsfähigen Stützpunkt."
        }
      },
      {
        id: 'B',
        label: "Verwundete Kameraden aus dem offenen Feld in den Schutzgraben bergen",
        description: "Krieche unter feindlichem Feuer ins Niemandsland, um Verletzte zu retten.",
        statChanges: { volk: 20, goetter: 10, adel: -5 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Du ziehst zwei Verletzte am Koppel in den Graben. Die Sanitäter loben deinen Heldenmut.",
          mittelstufe: "Dein selbstloser Einsatz beweist, dass Menschlichkeit selbst im Granattrichter überleben kann.",
          oberstufe: "Höchste Tapferkeit im Angesicht des industriellen Tötens: Der Zusammenhalt deiner Gruppe wird unerschütterlich."
        }
      },
      {
        id: 'C',
        label: "Patronengurte und Sandsäcke vom Nachbarzug requirieren",
        description: "Sichere deinem Grabenabschnitt maximale Feuerkraft.",
        statChanges: { priester: 15, goetter: -5 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Eure Sandsackbrüstung steht stabil und die Magazine sind gefüllt.",
          mittelstufe: "Der feindliche Gegenstoß wird abgewehrt, aber die Nachbarkompanie klagt über Munitionsmangel.",
          oberstufe: "Skrupelloser materieller Eigennutz sichert deinen Sektor, schwächt aber den Gesamtzusammenhalt der Front."
        }
      },
      {
        id: 'D',
        label: "Ein französisches Lazarett per weißer Fahne zur Verwundetenruhe aufrufen (Einsatz: 3 Briefe)",
        description: "Verhandle eine einstündige Feuerpause zur Bergung aller Sterbenden.",
        epCost: 3,
        statChanges: { volk: 25, goetter: 15, adel: -10 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Die Waffen schweigen für eine Stunde. Deutsche und französische Sanitäter nicken einander zu.",
          mittelstufe: "Ein seltenes Licht des Friedens an der Marne: Dutzende Schwerverletzte beider Seiten werden gerettet.",
          oberstufe: "Ein kühner Akt gelebten Völkerrechts, der zeigt, dass der Gegner im Schlamm denselben Schmerz empfindet."
        }
      }
    ],
    lexiconEntry: {
      term: "Das 'Wunder an der Marne' (September 1914)",
      title: "Vom Sturm zum Stellungskrieg",
      explanation: {
        unterstufe: "An der Marne stoppte die französische Armee den deutschen Vormarsch. Beide Heere gruben sich in Gräben ein. Keiner konnte mehr siegen – der Grabenkrieg begann.",
        mittelstufe: "Die Schlacht an der Marne (5.–12. September 1914) beendete den deutschen Hoffnungen auf einen schnellen Sieg. Auf einer Frontlinie von 700 Kilometern erstarrte der Krieg im mörderischen Stellungskrieg.",
        oberstufe: "Das Scheitern des Bewegungskrieges zwang die Generalstäbe in eine defensive Pattsituation. Der moderne Verteidigungsvorteil (Maschinengewehr, Stacheldraht, Artillerie) übertraf fortan jede Angriffstaktik."
      },
      curiosityFact: "600 Pariser Taxis brachten rund 4.000 Soldaten an die Front. Jeder Taxifahrer schaltete pflichtbewusst sein Taxameter ein – die französische Regierung bezahlte später die offizielle Taxirechnung!"
    }
  },

  // =========================================================================
  // BILD 3: Station 3 (/assets/ww1_station_03.jpg)
  // =========================================================================
  // RUNDE 5
  {
    id: "ww1_r05_grabenalltag",
    roundNumber: 5,
    locationKey: "schuetzengraben_flandern",
    locationName: "Flandern – Schlamm, Stacheldraht & Unterstand",
    milestoneTitle: "Runde 5: Der nasse Feind unter den Stiefeln",
    imagePath: "/assets/ww1_station_03.jpg",
    hotspots: [
      { id: "hs_r5_periskop", x: 45, y: 42, label: "Grabenperiskop", description: "Spiegelglas erlaubte den Blick über den Wall; wer den Kopf herausstreckte, wurde von Scharfschützen getroffen.", icon: "🔭" },
      { id: "hs_r5_schlamm", x: 28, y: 72, label: "Morast & Grabenfuß", description: "Kaltes Stehwasser faulte die Haut an den Füßen ('Trench Foot'); Holzstege (Duckboards) waren überlebenswichtig.", icon: "🥾" },
      { id: "hs_r5_ratten", x: 75, y: 68, label: "Grabenratten & Ungeziefer", description: "Katzenstarke Ratten fraßen Vorräte an; Läuse übertrugen Fleckfieber.", icon: "🐀" }
    ],
    situation: {
      unterstufe: "Es regnet seit Wochen ununterbrochen. Der Graben steht knietief voll stinkendem Schlamm. Eure nassen Stiefel beginnen aufzuweichen und die Füße brennen vor Schmerz. Ein Kamerad neben dir hustet Blut. Du hast Nachtwache am Sehschlitz.",
      mittelstufe: "Alltag im Schützengraben: Wochenlang eingepfercht in feuchte Unterstände, bedroht von Scharfschützen, Kälte und 'Grabenfuß' (Wundbrand durch Nässe). Die Vorräte sind nass geworden und die Grabenratten fressen die Brotkrumen weg.",
      oberstufe: "Die Entmenschlichung des Alltags an der Westfront: Das Dasein reduziert sich auf das physische Überleben im nassen Erdloch. Dauerbeschuss und ständige Todesnähe zerrütten das Nervenkostüm. Wie bewahrst du Hygiene und Disziplin?"
    },
    choices: [
      {
        id: 'A',
        label: "Holzroste (Duckboards) verlegen und Sockenwechsel befehlen",
        description: "Bekämpfe die Feuchtigkeit, um Wundbrand und Ausfälle zu verhindern.",
        statChanges: { priester: 15, goetter: 10, ep: 1 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Eure Füße bleiben trocken! Niemand muss mit fauligen Wunden ins Lazarett.",
          mittelstufe: "Trockene Holzstege und Fußfett verhindern den gefürchteten Grabenfuß. Dein Trupp bleibt gesund.",
          oberstufe: "Präventive Sanitätshygiene: Mit einfachen Maßnahmen rettest du die Einsatzbereitschaft deiner Mannschaft."
        }
      },
      {
        id: 'B',
        label: "Scharfschützenwache mit dem Periskop doppelt besetzen",
        description: "Halte das Niemandsland lückenlos im Blick, um Überraschungsangriffe abzuwehren.",
        statChanges: { adel: 15, volk: -5, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Ein gegnerischer Spähtrupp wird rechtzeitig entdeckt und zieht sich zurück.",
          mittelstufe: "Wachsamkeit schützt den Abschnitt vor Handgranatenüberfällen im Morgengrauen.",
          oberstufe: "Taktische Grabenabsicherung: Deine Beobachter verhindern ein Eindringen in das Grabensystem."
        }
      },
      {
        id: 'C',
        label: "Warmen Tee kochen und Tabak gerecht unter allen aufteilen",
        description: "Ein Schluck heißer Tee und eine Pfeife gegen Kälte und Trübsinn.",
        statChanges: { goetter: 15, volk: 15, priester: -5 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Der heiße Blechbecher wärmt die klammen Finger. Die Männer schöpfen neuen Lebensmut.",
          mittelstufe: "Kleine Freuden erhalten die Moral im eisigen Regen mehr als jeder militärische Tadel.",
          oberstufe: "Psychologische Stabilisierung der Truppe: Geteilter Tabak und Wärme stärken den Überlebenswillen."
        }
      },
      {
        id: 'D',
        label: "Gedichte und Tagebuchnotizen bei Kerzenlicht verfassen (Einsatz: 2 Briefe)",
        description: "Schreibe das Erlebte auf, um deinen Verstand nicht an den Wahnsinn zu verlieren.",
        epCost: 2,
        statChanges: { volk: 20, adel: 10, ep: 2 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Deine Zeilen berühren deine Kameraden tief, als du sie leise im Unterstand vorliest.",
          mittelstufe: "Ein ergreifendes literarisches Zeugnis über das Ausharren im Dreck von Flandern entsteht.",
          oberstufe: "Kulturelle Selbstbehauptung gegen die seelische Verrohung: Dein Tagebuch wird zur unbestechlichen Chronik."
        }
      }
    ],
    lexiconEntry: {
      term: "Grabenkrieg & 'Trench Foot' (Grabenfuß)",
      title: "Leben und Leiden unter der Erde",
      explanation: {
        unterstufe: "Soldaten lebten monatelang in tiefen Erdlöchern voll Wasser und Matsch. Weil die Stiefel nie trockneten, starben Zehen ab. Das nannte man 'Grabenfuß'.",
        mittelstufe: "Das Grabensystem bestand aus vorderster Kampflinie, Unterstützungsgräben und tiefen Unterständen ('Bunkern'). Holzroste (Duckboards) sollten verhindern, dass Soldaten im Morast versanken.",
        oberstufe: "Die statische Grabenarchitektur erzwang eine permanente Hygiene- und Wachroutine. Läuse, Grabennephritis und die permanente Bedrohung durch Heckenschützen zermürbten die Physis der Truppe."
      },
      curiosityFact: "Um gegen Ratten vorzugehen, hielten sich viele Einheiten Graben-Terrier oder Katzen. Manche Ratten wurden so fett, dass die Soldaten sie spöttisch 'Kadaver-Ratten' nannten."
    }
  },

  // RUNDE 6
  {
    id: "ww1_r06_weihnachtsfrieden",
    roundNumber: 6,
    locationKey: "weihnachtsfrieden_1914",
    locationName: "Flandern – Der Weihnachtsfrieden 1914",
    milestoneTitle: "Runde 6: Stille Nacht im Niemandsland",
    imagePath: "/assets/ww1_station_03.jpg",
    hotspots: [
      { id: "hs_r6_tanne", x: 50, y: 35, label: "Kleiner Weihnachtsbaum auf der Brüstung", description: "Deutsche Soldaten stellten beleuchtete Tannenbäume auf den Grabenrand und sangen 'Stille Nacht'.", icon: "🎄" },
      { id: "hs_r6_haendedruck", x: 70, y: 60, label: "Händedruck im Niemandsland", description: "Britische und deutsche Feinde traten unbewaffnet ins Freie, umarmten sich und tauschten Schokolade gegen Tabak.", icon: "🤝" },
      { id: "hs_r6_fussball", x: 25, y: 65, label: "Das legendäre Fußballspiel", description: "Zwischen Granattrichtern wurde mit einer Blechdose oder einer Lederkugel improvisiert gekickt.", icon: "⚽" }
    ],
    situation: {
      unterstufe: "Heiligabend 1914: Über dem verschneiten Niemandsland brennen plötzlich kleine Kerzen auf dem gegnerischen Graben. Jemand singt leise 'Stille Nacht'. Ein britischer Soldat ruft auf Deutsch: 'Frohe Weihnachten! Nicht schießen!' Traust du dich unbewaffnet heraus?",
      mittelstufe: "Der legendäre Weihnachtsfrieden 1914: Spontane Verbrüderung an vielen Frontabschnitten. Soldaten legen eigenmächtig die Waffen nieder, begraben gemeinsam Tote und tauschen Konserven. Die Generäle beider Seiten drohen mit Kriegsgericht.",
      oberstufe: "Ein historisches Wunder menschlicher Emanzipation: Der unautorisierte Waffenstillstand der einfachen Soldaten untergräbt die militärische Befehlsgewalt. Die Oberste Heeresleitung stuft Verbrüderung als Hochverrat ein. Wie verhältst du dich?"
    },
    choices: [
      {
        id: 'A',
        label: "Ohne Waffe ins Niemandsland treten und dem britischen Soldaten die Hand reichen",
        description: "Ein unvergesslicher Moment des Friedens und der Menschlichkeit.",
        statChanges: { volk: 25, goetter: 15, adel: -15 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Ihr tauscht Schokolade und Zigarren. Tränen der Rührung laufen über schmutzige Gesichter.",
          mittelstufe: "Ihr zeigt der Welt, dass ihr Menschen seid und keine Feinde. Ein unvergessliches Weihnachtsfest.",
          oberstufe: "Ein revolutionärer Akt der Menschlichkeit gegen den Vernichtungswillen der Generalstäbe."
        }
      },
      {
        id: 'B',
        label: "Den Weihnachtsfrieden nutzen, um gemeinsam gefallene Kameraden würdig zu bestatten",
        description: "Vereinbare eine gemeinsame Totenruhe zwischen den Schützengräben.",
        statChanges: { goetter: 20, volk: 15, adel: 5 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Ein schottischer Pfarrer betet gemeinsam mit einem deutschen Feldgeistlichen Psalm 23.",
          mittelstufe: "Ehrfurcht vor den Toten verbindet die Kontrahenten. Holzkreuze werden errichtet.",
          oberstufe: "Würdevolles Totengedenken im Niemandsland: Die Waffen ruhen aus tiefem christlichen Respekt."
        }
      },
      {
        id: 'C',
        label: "Im Graben bleiben und auf Befehl des Hauptmanns schussbereit verharren",
        description: "Misstraue dem Gegner und fürchte disziplinarische Strafen.",
        statChanges: { adel: 15, volk: -10, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Du bleibst hinter den Sandsäcken. Der Hauptmann lobt deine Pflichterfüllung.",
          mittelstufe: "Kein Risiko eingegangen, doch im Herzen spürst du eine verpasste Chance für den Frieden.",
          oberstufe: "Militärische Räson obsiegt: Du vermeidest Repressionen der Feldgendarmerie, bleibst aber isoliert."
        }
      },
      {
        id: 'D',
        label: "Ein Fußballspiel im Granattrichter organisieren (Einsatz: 3 Briefe)",
        description: "Kicke gemeinsam mit Schotten, Engländern und Franzosen im Schlamm.",
        epCost: 3,
        statChanges: { volk: 30, goetter: 20, adel: -20 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Endstand 3:2 für die Schotten! Lachen und Jubel ertönen, wo sonst Granaten zerschellen.",
          mittelstufe: "Das Spiel wird zur weltberühmten Legende des Friedens, an die sich Generationen erinnern.",
          oberstufe: "Gelebte Utopie des Friedens: Für einen Nachmittag siegt der Sport über die Barbarei des Weltkriegs."
        }
      }
    ],
    lexiconEntry: {
      term: "Der Weihnachtsfrieden 1914 ('Christmas Truce')",
      title: "Als die Waffen für einen Tag schwiegen",
      explanation: {
        unterstufe: "An Weihnachten 1914 hörten deutsche und englische Soldaten einfach auf zu schießen. Sie trafen sich zwischen den Gräben, gaben sich die Hand und spielten sogar Fußball.",
        mittelstufe: "Rund 100.000 Soldaten an der Westfront legten spontan und gegen den Willen der Armeeführung die Waffen nieder. Sie sangen Lieder und tauschten Geschenke wie Tabak und Knöpfe.",
        oberstufe: "Der Weihnachtsfrieden 1914 bewies die Brüderlichkeit der einfachen Soldaten. Die Heeresleitungen reagierten mit drakonischen Strafen und Truppenverlegungen, um solche Verbrüderungen künftig im Keim zu ersticken."
      },
      curiosityFact: "Nach 1914 gab es nie wieder einen solchen Weihnachtsfrieden. Die Generäle drohten Soldaten, die den Graben unbewaffnet verließen, sofort mit der standrechtlichen Erschießung."
    }
  },

  // =========================================================================
  // BILD 4: Station 4 (/assets/ww1_station_04.jpg)
  // =========================================================================
  // RUNDE 7
  {
    id: "ww1_r07_giftgas_ypern",
    roundNumber: 7,
    locationKey: "ypern_giftgas",
    locationName: "Ypern 1915 – Der gelbgrüne Tod",
    milestoneTitle: "Runde 7: Die Wolke aus Chlorgas",
    imagePath: "/assets/ww1_station_04.jpg",
    hotspots: [
      { id: "hs_r7_gaswolke", x: 68, y: 40, label: "Chlorgaswolke", description: "Am 22. April 1915 öffneten deutsche Pioniere bei Ypern 6.000 Gasflaschen. Der Wind trieb das Gas in die alliierten Gräben.", icon: "☠️" },
      { id: "hs_r7_maske", x: 22, y: 68, label: "Frühe Gasmasken & Behelf", description: "Bevor es Gummimasken mit Aktivkohle gab, mussten Soldaten nasse Tücher mit Wasser oder Urin vor den Mund pressen.", icon: "🤿" },
      { id: "hs_r7_haber", x: 45, y: 55, label: "Fritz Haber & Chemiewaffen", description: "Der spätere Nobelpreisträger Haber entwickelte Chlorgas und Phosgen für das preußische Kriegsministerium.", icon: "🧪" }
    ],
    situation: {
      unterstufe: "April 1915 bei Ypern: Über das Feld rollt eine unheimliche, gelbgrüne Nebelwand heran. Ein stechender Geruch nach Chlor brennt in deinen Augen und in der Kehle. Ein Schrei ertönt: 'Gasangriff! Gasmasken auf!' Du hast nur wenige Sekunden.",
      mittelstufe: "Der erste Masseneinsatz von Giftgas der Weltgeschichte bei Ypern: Chemische Kriegführung bricht das Völkerrecht. Tausende Soldaten ersticken qualvoll mit verätzten Lungen. Dein Kamerad findet seine Gasmaske in der Panik nicht.",
      oberstufe: "Die Industrialisierung des Massenmords durch chemische Kampfstoffe: Wissenschaftler wie Fritz Haber stellen ihr Wissen in den Dienst des Krieges. Als die Gaswolke deinen Sektor einhüllt, herrscht blanke Panik. Wie reagierst du?"
    },
    choices: [
      {
        id: 'A',
        label: "Dem panischen Kameraden deine Ersatz-Gasmaske überstreifen und ihm beim Anlegen helfen",
        description: "Rette sein Leben, während du selbst mit einem feuchten Tuch die Luft anhältst.",
        statChanges: { goetter: 20, volk: 15, adel: -5 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Du drückst ihm die Maske fest aufs Gesicht. Der Filter schnappt ein – sein Leben ist gerettet!",
          mittelstufe: "Ein heroischer Rettungsakt: Dein Kamerad überlebt die ätzende Wolke dank deiner Geistesgegenwart.",
          oberstufe: "Bedingungslose Solidarität unter Lebensgefahr: Deine Tat bindet die Gruppe für immer zusammen."
        }
      },
      {
        id: 'B',
        label: "Sofort die Gasmaske aufsetzen und die Männer auf die Grabenleiter nach oben führen",
        description: "Chlorgas ist schwerer als Luft und sammelt sich am Grabenboden; oben ist die Luft reiner.",
        statChanges: { priester: 15, adel: 10, ep: 1 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Richtig reagiert! Am Grabenboden sammelt sich das tödliche Gas, oben verzieht es sich schneller.",
          mittelstufe: "Physikalisches Wissen rettet die Gruppe: Ihr entkommt der höchsten Chlorgaskonzentration.",
          oberstufe: "Taktische Schulung im ABC-Schutz: Du minimierst die Lungenverätzungen deiner Untergebenen."
        }
      },
      {
        id: 'C',
        label: "Alarmglocken schlagen und Maschinengewehre blind durch den Nebel abfeuern",
        description: "Schütze den Graben vor feindlichen Sturmtruppen, die hinter der Gaswolke folgen.",
        statChanges: { adel: 15, goetter: -5, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Die Schüsse halten den anrückenden Feind auf Distanz, doch die Munition schwindet rasch.",
          mittelstufe: "Ihr verhindert das Überrennen eures Sektors, hustet aber trotz Masken heftig im Pulverdampf.",
          oberstufe: "Militärische Schockabwehr: Trotz Gasverwirrung haltet ihr die Linie gegen den gegnerischen Infanteriestoß."
        }
      },
      {
        id: 'D',
        label: "Verletzte mit Sauerstoffflaschen und Natronlauge im Verbandsraum versorgen (Einsatz: 3 Briefe)",
        description: "Verwende medizinisches Know-how zur Neutralisation von Säureverätzungen.",
        epCost: 3,
        statChanges: { priester: 25, volk: 20, goetter: 10 },
        skillChanges: { goettlicheAuserwaehltheit: 2 },
        consequenceText: {
          unterstufe: "Die getränkten Umschläge lindern das Brennen in den Lungen. Viele können wieder atmen.",
          mittelstufe: "Dank gezielter Erster Hilfe rettest du Dutzende Soldaten vor dem qualvollen Erstickungstod.",
          oberstufe: "Herausragender Sanitätseinsatz: Du meisterst die erste toxikologische Katastrophe der Frontgeschichte."
        }
      }
    ],
    lexiconEntry: {
      term: "Der Giftgaseinsatz bei Ypern (1915)",
      title: "Der chemische Tod an der Front",
      explanation: {
        unterstufe: "Bei Ypern 1915 setzten deutsche Truppen erstmals Giftgas ein. Der gelbgrüne Chlorgasnebel fraß sich in die Lungen der Soldaten. Es war eine der grausamsten Waffen des Krieges.",
        mittelstufe: "Der Chemiker Fritz Haber entwickelte Chlorgas als 'Kriegsverkürzer'. Später folgten Phosgen und das hautzerstörende 'Senfgas' (Lost). Bald besaßen beide Seiten Gasmasken mit Aktivkohlefiltern.",
        oberstufe: "Der Einsatz verletzte die Haager Landkriegsordnung eklatant. Das Giftgas wurde zum Menetekel des totalen Krieges, in dem moderne Naturwissenschaften für die Vernichtung instrumentalisiert wurden."
      },
      curiosityFact: "Pferde und Hunde wurden ebenfalls mit speziellen Tier-Gasmasken ausgestattet, da sie unverzichtbar für den Transport von Munition und Sanitätsmaterial waren."
    }
  },

  // RUNDE 8
  {
    id: "ww1_r08_maschinengewehr_mg08",
    roundNumber: 8,
    locationKey: "mg08_stellung",
    locationName: "Das Niemandsland – Im Fadenkreuz des Maschinengewehrs",
    milestoneTitle: "Runde 8: 500 Schuss pro Minute",
    imagePath: "/assets/ww1_station_04.jpg",
    hotspots: [
      { id: "hs_r8_mg", x: 35, y: 55, label: "Maschinengewehr MG 08 (System Maxim)", description: "Wasserkühlung und Stoffgurte erlaubten Dauerfeuer. Zwei MGs konnten ein ganzes Regiment stoppen.", icon: "🔫" },
      { id: "hs_r8_draht", x: 65, y: 65, label: "Stacheldrahttrichter", description: "Verhakte Soldaten waren dem Kreuzfeuer der MGs schutzlos ausgeliefert.", icon: "⛓️" },
      { id: "hs_r8_stahlhelm", x: 50, y: 40, label: "Der neue Stahlhelm M1916", description: "Löste die Pickelhaube ab und senkte Kopfverletzungen durch Granatsplitter drastisch.", icon: "🪖" }
    ],
    situation: {
      unterstufe: "Der Angriffsbefehl ertönt: Die Trillerpfeifen schrillen! Ihr müsst über die Grabenleiter ins offene Niemandsland klettern. Doch kaum seid ihr oben, hämmert das gegnerische Maschinengewehr. Ein mörderisches Kugelblei mäht alles nieder.",
      mittelstufe: "Die Sinnlosigkeit des frontalen Sturmangriffs: Gegen befestigte Maschinengewehrnester hinter breiten Stacheldrahtverhauen ist kein Durchkommen. Hunderte Kameraden bleiben zerschossen im Draht hängen. Dein Zugführer fällt.",
      oberstufe: "Taktische Asymmetrie der Materialschlacht: Das Maschinengewehr zwingt die Infanterie zur Hilflosigkeit. Ein sinnloser Befehl der Heeresleitung fordert einen weiteren Sturmlauf über Leichenberge. Gehorchst du blind oder brichst du den Vorstoß ab?"
    },
    choices: [
      {
        id: 'A',
        label: "Den Rückzug in Deckung befehlen und die Männer in Bombentrichtern sammeln",
        description: "Brich den sinnlosen Sturmlauf ab, um das Leben deiner Kameraden zu retten.",
        statChanges: { goetter: 20, volk: 15, adel: -15 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Ihr springt in tiefe Granatlöcher. Niemand rennt ins offene MG-Feuer – ihr überlebt!",
          mittelstufe: "Der wütende General tobt über den Abbruch, doch die Männer danken dir auf Knien ihr Leben.",
          oberstufe: "Moralischer Führungsentscheid: Du verweigerst die kollektive Hinrichtung am Maschinengewehr."
        }
      },
      {
        id: 'B',
        label: "Unter Schutz von Rauchgranaten und Erdwällen das MG-Nest seitlich umgehen",
        description: "Stoßtrupptaktik: Schalte das MG durch Flankenmanöver mit Handgranaten aus.",
        statChanges: { adel: 20, priester: -10, ep: 2 },
        skillChanges: { militaerischeStaerke: 2 },
        consequenceText: {
          unterstufe: "Gezielte Handgranaten bringen das MG zum Schweigen. Der Grabenabschnitt ist gesichert.",
          mittelstufe: "Ein taktisches Bravourstück: Ihr neutralisiert das tödliche Maschinengewehr mit minimalen Verlusten.",
          oberstufe: "Frühe Stoßtrupptaktik: Beweglichkeit und Nahkampfmittel überwinden starres Grabenfeuer."
        }
      },
      {
        id: 'C',
        label: "Artilleriefeuer per Leuchtrakete anfordern, um den Stacheldraht zu zerschlagen",
        description: "Lass die schwere Artillerie den Weg für die Infanterie freischießen.",
        statChanges: { priester: 15, adel: 10, ep: 1 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Schwere Geschosse pflügen den Stacheldraht um. Der Weg wird passierbar.",
          mittelstufe: "Die Haubitzen räumen die Drahthindernisse ab, wirbeln aber gefährliche Splitter auf.",
          oberstufe: "Koordination von Artillerie und Infanterie: Notwendige Voraussetzung für jedes Überleben."
        }
      },
      {
        id: 'D',
        label: "Einem schwer verwundeten Schützen die letzte Feldflasche reichen (Einsatz: 2 Briefe)",
        description: "Krieche im Kugelhagel zu einem Sterbenden im Niemandsland.",
        epCost: 2,
        statChanges: { volk: 25, goetter: 15, adel: -5 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Er trinkt gierig und drückt deine Hand. Er stirbt nicht allein im Schlamm.",
          mittelstufe: "Ein Moment tiefer Menschlichkeit, der dich mit Stolz und bitterer Trauer erfüllt.",
          oberstufe: "Gelebte Nächstenliebe im Niemandsland: Du behauptest deine Seele gegen den industriellen Tod."
        }
      }
    ],
    lexiconEntry: {
      term: "Das Maschinengewehr & die Stacheldrahtverhaue",
      title: "Die Herrschaft der Waffentechnik",
      explanation: {
        unterstufe: "Das Maschinengewehr feuerte hunderte Kugeln in einer Minute ab. Weil die Soldaten im Stacheldraht hängenblieben, konnten die Schützen sie leicht treffen. Reitertruppen und normale Angriffe waren chancenlos.",
        mittelstufe: "Erfunden von Hiram Maxim, wurde das MG zur dominanten Defensivwaffe. 1916 führten deutsche Truppen den Stahlhelm M1916 ein, um den Kopf vor herabfallenden Granatsplittern zu schützen.",
        oberstufe: "Die Kombination aus wassergekühltem MG, gestaffelten Stacheldrahtfeldern und indirektem Artilleriefeuer schuf die sogenannte 'Verteidigungstiefe', die jeden Durchbruchsversuch in beispiellosen Blutzoll verwandelte."
      },
      curiosityFact: "Das deutsche Maschinengewehr MG 08 wog samt Schlitten und Kühlwasser über 60 Kilogramm. Es brauchte vier Mann, um es durch den Schlamm zu schleppen."
    }
  },

  // =========================================================================
  // BILD 5: Station 5 (/assets/ww1_station_05.jpg)
  // =========================================================================
  // RUNDE 9
  {
    id: "ww1_r09_verdun_douaumont",
    roundNumber: 9,
    locationKey: "verdun_douaumont",
    locationName: "Verdun 1916 – Die Blutmühle von Fort Douaumont",
    milestoneTitle: "Runde 9: Im Schlund der Zerstörung",
    imagePath: "/assets/ww1_station_05.jpg",
    hotspots: [
      { id: "hs_r9_fort", x: 48, y: 38, label: "Fort Douaumont", description: "Das stärkste Panzerfort Europas wurde Schauplatz von monatelangem Erbitterungskampf und verheerender Explosion.", icon: "🛡️" },
      { id: "hs_r9_krater", x: 25, y: 65, label: "Trommelfeuer-Kraterlandschaft", description: "Über 40 Millionen Granaten pulverisierten Bäume, Dörfer und Hügel zu einer grauen Mondlandschaft.", icon: "💥" },
      { id: "hs_r9_poilu", x: 75, y: 55, label: "Die französischen 'Poilus'", description: "Erbitterter französischer Widerstand: 'Ils ne passeront pas!' (Sie werden nicht durchkommen!).", icon: "🇫🇷" }
    ],
    situation: {
      unterstufe: "Februar 1916 vor Verdun: Tag und Nacht dröhnt die Erde. Zehntausende Granaten detonieren im Minutentakt. Der Erdboden bebt wie Wackelpudding. Dein Unterstand schwankt, Staub nimmt dir die Sicht. Ein Kamerad fängt an, unkontrollierbar am ganzen Körper zu zittern.",
      mittelstufe: "Die Hölle von Verdun: General von Falkenhayn will die französische Armee 'weißbluten' lassen. Doch beide Seiten werden in der 'Blutmühle' zermahlen. Fort Douaumont wechselt mehrfach den Besitzer. Das Trommelfeuer treibt Soldaten in den Wahnsinn.",
      oberstufe: "Industrielle Abnutzungsschlacht in Reinform: Über 700.000 Opfer auf einem winzigen Areal von wenigen Quadratkilometern. 'Kriegszitterer' leiden unter schwerstem Schocktrauma (Shell Shock). Wie hältst du die Nerven deiner Mannschaft zusammen?"
    },
    choices: [
      {
        id: 'A',
        label: "Den traumatisierten Zitterer festhalten, beruhigen und ins Lazarett schaffen",
        description: "Schütze den seelisch gebrochenen Kameraden vor der Exekution wegen 'Feigheit'.",
        statChanges: { volk: 20, goetter: 15, adel: -10 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Du legst den Arm um ihn und sprichst ihm leise zu. Die Ärzte nehmen ihn auf.",
          mittelstufe: "Du verhinderst, dass ein kranker Mann als Deserteur erschossen wird. Menschlichkeit siegt.",
          oberstufe: "Schutz von Kriegstraumatisierten gegen den Vorwurf der Simulation und militärische Schandurteile."
        }
      },
      {
        id: 'B',
        label: "Verschüttete Eingänge des Forts unter Lebensgefahr freischaufeln",
        description: "Befreie 20 Kameraden, die lebendig unter Betonmassen begraben sind.",
        statChanges: { goetter: 25, priester: 10, adel: 10 },
        skillChanges: { goettlicheAuserwaehltheit: 2 },
        consequenceText: {
          unterstufe: "Mit bloßen Händen grabt ihr die Männer frei! Jubel und Dankbarkeit erfüllen den Bunker.",
          mittelstufe: "Eine spektakuläre Rettungstat unter Artilleriebeschuss festigt deinen Ruf als Retter.",
          oberstufe: "Pioniergeist im Trümmerfeld von Douaumont: Du rettest einen ganzen Zug vor dem Ersticken."
        }
      },
      {
        id: 'C',
        label: "Munition in die Panzerkuppeln schaffen und Gegenstoß vorbereiten",
        description: "Halte die Stellung um jeden Preis gegen die anrückenden Poilus.",
        statChanges: { adel: 20, volk: -15, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Die Geschütze feuern wieder, aber der Gestank nach Pulver und Blut ist unerträglich.",
          mittelstufe: "Das Fort wird gehalten, doch der Preis an Menschenleben ist unfassbar hoch.",
          oberstufe: "Militärische Härte im Epizentrum der Blutmühle: Verdun fordert seinen grausamen Tribut."
        }
      },
      {
        id: 'D',
        label: "Eine Feldpost-Kassette mit Briefen Gefallener bergen (Einsatz: 3 Briefe)",
        description: "Rette die letzten Abschiedsbriefe der Toten für ihre Mütter und Frauen.",
        epCost: 3,
        statChanges: { volk: 25, adel: 15, ep: 2 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Du wickelst die Briefe in Wachstuch. Das Vermächtnis der Gefallenen geht nicht verloren.",
          mittelstufe: "Hunderte Familien in der Heimat werden Gewissheit über das Schicksal ihrer Söhne erhalten.",
          oberstufe: "Historische Bewahrung des Menschlichen: Du rettest unersetzliche Zeugnisse aus dem Feuersturm."
        }
      }
    ],
    lexiconEntry: {
      term: "Die Schlacht um Verdun (1916)",
      title: "Die 'Blutmühle' der Westfront",
      explanation: {
        unterstufe: "Bei Verdun in Frankreich kämpften Deutsche und Franzosen 10 Monate lang. Über 300.000 Soldaten starben. Die Granaten machten aus Wäldern eine Mondlandschaft ohne jeden Baum.",
        mittelstufe: "Die Schlacht von Verdun (Februar bis Dezember 1916) wurde zum Inbegriff des sinnlosen Massensterbens. Falkenhayns Plan, Frankreich auszubluten, scheiterte am unbändigen Abwehrwillen der Franzosen ('Ils ne passeront pas').",
        oberstufe: "Verdun markiert den Höhepunkt der industriellen Materialschlacht. Der Einsatz von über 40 Millionen Granaten führte zur psychischen Versehrung ganzer Generationen ('Shell Shock' / Kriegszittern)."
      },
      curiosityFact: "Bis heute wächst auf Teilen des Schlachtfeldes von Verdun kein Baum, und das Betreten ist wegen unzähliger Blindgänger und Giftgasrückstände lebensgefährlich (Zone Rouge)."
    }
  },

  // RUNDE 10
  {
    id: "ww1_r10_voie_sacree",
    roundNumber: 10,
    locationKey: "voie_sacree_verdun",
    locationName: "Verdun – 'La Voie Sacrée' & die Nachschubadern",
    milestoneTitle: "Runde 10: Die heilige Versorgungsstraße",
    imagePath: "/assets/ww1_station_05.jpg",
    hotspots: [
      { id: "hs_r10_lkw", x: 72, y: 55, label: "La Voie Sacrée (Heilige Straße)", description: "Alle 14 Sekunden rollte ein Lastwagen über die 60 km lange Straße nach Verdun – Tag und Nacht.", icon: "🚚" },
      { id: "hs_r10_schotter", x: 45, y: 68, label: "Steinbrecher-Kompanien", description: "Tausende Hilfsarbeiter schaufelten pausenlos Schotter unter die Lkw-Reifen, um Schlaglöcher zu stopfen.", icon: "⛏️" },
      { id: "hs_r10_friedhof", x: 20, y: 45, label: "Beinhaus von Douaumont", description: "Hier ruhen bis heute die unidentifizierten Knochen von 130.000 deutschen und französischen Gefallenen.", icon: "⛪" }
    ],
    situation: {
      unterstufe: "Halbzeit deiner Reise im Weltkrieg: Du stehst an der Straße nach Verdun. Endlose Lastwagenkolonnen bringen Verwundete nach hinten und frische Soldaten nach vorne. Die Gesichter derer, die aus der Hölle kommen, sind aschgrau und stumm. Wie verarbeitest du das Gesehene?",
      mittelstufe: "Verdun im Spätsommer 1916: Der französische General Pétain hat die 'Voie Sacrée' perfektioniert. Aus ganz Frankreich werden Divisionen im Rotationssystem durch die Hölle geschleust. Auf beiden Seiten wächst das Entsetzen über die unersättliche Kriegsmaschinerie.",
      oberstufe: "Logistische Meisterleistung und moralische Bankrotterklärung: Die moderne Transportlogistik macht das unendliche Nachschieben von 'Menschenmaterial' erst möglich. Die 10. Station markiert die Mitte des Krieges: Resignierst du oder schöpfst du Kraft zum Weitermachen?"
    },
    choices: [
      {
        id: 'A',
        label: "Verwundeten Lastwagenfahrern mit Suppe und Wasser beistehen",
        description: "Hilf den Männern, die seit 36 Stunden ununterbrochen am Steuer sitzen.",
        statChanges: { goetter: 15, volk: 15, ep: 1 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Der Fahrer trinkt die heiße Brühe und schöpft neuen Mut für die nächste Fuhre.",
          mittelstufe: "Deine Fürsorge an der Nachschubader hält die Lebensretter am Steuer wach.",
          oberstufe: "Logistische Humanität: Du stärkst das schwächste Glied in der Kette der Evakuierung."
        }
      },
      {
        id: 'B',
        label: "Schlaglöcher auf der Straße im Rekordtempo mit Bruchstein füllen",
        description: "Halte die Versorgungsader offen, damit der Konvoi nicht steckenbleibt.",
        statChanges: { priester: 20, adel: 10, ep: 1 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Die Räder rollen weiter ohne Panne. Wichtige Medikamente erreichen das Feldlazarett.",
          mittelstufe: "Pétains Maxime ('Kein Lkw darf halten') wird durch deinen unermüdlichen Schaufeldienst gesichert.",
          oberstufe: "Infrastruktureller Heldenmut: Ohne deine Straßenreparatur wäre der Verwundetentransport kollabiert."
        }
      },
      {
        id: 'C',
        label: "Einem jungen Rekruten, der panische Angst vor dem Fronteinsatz hat, Mut zusprechen",
        description: "Gib ihm Überlebenstipps: Wie man Granatengeräusche deutet und Deckung sucht.",
        statChanges: { volk: 20, goetter: 10, ep: 1 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Er hört dir aufmerksam zu. Dein Wissen nimmt ihm die lähmende Panik.",
          mittelstufe: "Deine Erfahrungen aus 10 Runden retten dem Neuling an seinem ersten Fronttag das Leben.",
          oberstufe: "Kameradschaftliche Ausbildung im Feld: Du tradierst überlebenswichtige Grabenroutine."
        }
      },
      {
        id: 'D',
        label: "Ein geheimes Bündnis mit Nachschuboffizieren schließen (Einsatz: 2 Briefe)",
        description: "Zweige trockene Decken und Schokolade für deine Frontgruppe ab.",
        epCost: 2,
        statChanges: { priester: 25, adel: -5, ep: 2 },
        skillChanges: { goettlicheAuserwaehltheit: 2 },
        consequenceText: {
          unterstufe: "Ein ganzes Paket mit dicken Wolldecken und Kakao wandert in deinen Unterstand!",
          mittelstufe: "Deine Beziehungen sichern deiner Einheit lebensnotwendige Vorräte für den kommenden Herbst.",
          oberstufe: "Frontorganisatorische Schläue: Du nutzt die chaotische Logistik zur Rettung deiner Leute."
        }
      }
    ],
    lexiconEntry: {
      term: "'La Voie Sacrée' – Die Heilige Straße",
      title: "Die Lebensader von Verdun",
      explanation: {
        unterstufe: "Weil alle Eisenbahnen zerschossen waren, transportierten tausende Lastwagen Tag und Nacht Soldaten und Essen nach Verdun. Diese Straße nannte man die 'Heilige Straße'.",
        mittelstufe: "General Philippe Pétain organisierte auf der 60 km langen Straße von Bar-le-Duc nach Verdun einen Lkw-Konvoi im 14-Sekunden-Takt. Blieb ein Fahrzeug liegen, wurde es einfach in den Graben gekippt, um den Fluss nicht zu stoppen.",
        oberstufe: "Die 'Voie Sacrée' war das organisatorische Rückgrat des französischen Durchhaltens. Durch sie durchliefen fast zwei Drittel der gesamten französischen Armee das 'Nadelöhr von Verdun'."
      },
      curiosityFact: "Das Wort 'Voie Sacrée' stammt vom Schriftsteller Maurice Barrès, der die Straße in Anlehnung an die römische Triumphstraße 'Via Sacra' benannte."
    }
  },

  // =========================================================================
  // BILD 6: Station 6 (/assets/ww1_station_06.jpg)
  // =========================================================================
  // RUNDE 11
  {
    id: "ww1_r11_ostfront_karpaten",
    roundNumber: 11,
    locationKey: "karpaten_eis",
    locationName: "Die Ostfront – Im Frost der Karpaten",
    milestoneTitle: "Runde 11: Frostbite und Weite",
    imagePath: "/assets/ww1_station_06.jpg",
    hotspots: [
      { id: "hs_r11_karpaten", x: 52, y: 45, label: "Eisige Karpatenberge", description: "Im Winter 1915 erfroren bei minus 30 Grad mehr Soldaten in Schneestürmen, als durch Geschosse fielen.", icon: "❄️" },
      { id: "hs_r11_feuer", x: 28, y: 68, label: "Lagerfeuer im Schneegraben", description: "Rauch verriet die Stellung an Scharfschützen, doch ohne Feuer erfroren die Gliedmaßen.", icon: "🔥" },
      { id: "hs_r11_kosaken", x: 75, y: 55, label: "Kosaken & Weite", description: "An der Ostfront gab es keinen starren Graben, sondern Reiterschlachten über hunderte Kilometer.", icon: "🐎" }
    ],
    situation: {
      unterstufe: "Winter an der Ostfront: Minus 28 Grad in den schneebedeckten Wäldern. Es gibt keine festen Schützengräben wie im Westen, sondern unendliche eisige Weiten. Deine Finger sind taub, der Wind schneidet wie ein Messer. Feuer machen ist gefährlich, weil Rauch den Feind anlockt.",
      mittelstufe: "Der Bewegungskrieg im Osten: Während im Westen alles im Schlamm erstarrt, tobt zwischen Ostpreußen, Galizien und den Karpaten ein mörderischer Raumkrieg. Erfrierungen, Fleckfieber und Schneeblindheit fordern unzählige Opfer. Die Versorgung bricht zusammen.",
      oberstufe: "Kriegsschauplatz Ostfront: Zarenarmee gegen Mittelmächte. Der Kampf gegen die Naturkräfte fordert mehr Verluste als das feindliche Waffenfeuer. Russische Bauernrekruten und österreichisch-ungarische Vielvölkerarmeen verbluten im Schnee. Wie schützt du deine Gruppe vor dem Kältetod?"
    },
    choices: [
      {
        id: 'A',
        label: "Ein rauchfreies Schnee-Iglu bauen und Körperwärme teilen",
        description: "Schutz gegen den arktischen Schneesturm ohne verräterischen Feuerschein.",
        statChanges: { goetter: 20, priester: 10, ep: 1 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Im Iglu steigt die Temperatur über Null. Eng aneinander gekuschelt übersteht ihr die Nacht.",
          mittelstufe: "Primitives Überleben im Eis: Niemand erfriert, und der feindliche Spähtrupp zieht ahnungslos vorbei.",
          oberstufe: "Arktische Biwak-Technik: Du bewahrst die Kampfkraft deiner Einheit unter Extrembedingungen."
        }
      },
      {
        id: 'B',
        label: "Verlassene Holzhütten nach Mehl, Fellen und Teekesseln durchkämmen",
        description: "Versorge die frierenden Männer mit heißem Wasser und warmen Pelzen.",
        statChanges: { priester: 20, adel: -5, ep: 1 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Heißer Tee und Schafsfelle retten erfrorene Hände und Füße.",
          mittelstufe: "Die Männer schöpfen neue Lebenskraft. Die wärmende Mahlzeit vertreibt die Kältestarre.",
          oberstufe: "Requirierung zur Selbsterhaltung im weiten Raum Galiziens: Lebensnotwendig für den Marsch."
        }
      },
      {
        id: 'C',
        label: "Ski-Spähtrupp aussenden, um den gegnerischen Kosaken-Überfall abzufangen",
        description: "Sichere das Biwak durch bewegliche Vorposten im Tiefschnee.",
        statChanges: { adel: 15, goetter: 5, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Der Spähtrupp schlägt Alarm. Ihr könnt den Kosakenangriff rechtzeitig abwehren.",
          mittelstufe: "Militärische Umsicht im Wintergelände: Ihr verhindert ein Massaker im Schlaf.",
          oberstufe: "Taktische Beherrschung des Geländes: Dein Trupp behauptet sich im Raumkrieg des Ostens."
        }
      },
      {
        id: 'D',
        label: "Einen russischen Gefangenen vor dem Kältetod retten und seine Wunden verbinden (Einsatz: 2 Briefe)",
        description: "Menschlichkeit kennt keine Sprachgrenzen.",
        epCost: 2,
        statChanges: { volk: 25, goetter: 15, adel: -10 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Der russische Soldat weint vor Dankbarkeit und schenkt dir ein kleines hölzernes Kreuz.",
          mittelstufe: "Du teilst dein Brot mit dem Feind. Er warnt dich vor Minen im Nachbartal.",
          oberstufe: "Völkerverbindende Barmherzigkeit im eisigen Osten: Ein Sieg des Gewissens über die Kriegshetze."
        }
      }
    ],
    lexiconEntry: {
      term: "Die Ostfront & der Karpatenwinter (1915)",
      title: "Der Krieg im Eis",
      explanation: {
        unterstufe: "Im Osten kämpften Deutsche und Österreicher gegen die russische Armee. Im Winter in den Karpatenbergen war es minus 30 Grad kalt. Viele Soldaten erfroren im Schlaf.",
        mittelstufe: "Die Ostfront war über 1.500 Kilometer lang und blieb bis 1917 ein Bewegungskrieg. Große Schlachten wie Tannenberg (1914) und Gorlice-Tarnów (1915) führten zu riesigen Gebietsgewinnen, aber keinem Frieden.",
        oberstufe: "Die österreichisch-ungarische Armee erlitt im Karpatenwinter katastrophale Verluste, von denen sie sich nie mehr erholte. Die logistische Unterversorgung der Zarenarmee legte den Keim für die spätere Revolution."
      },
      curiosityFact: "In den Karpaten mussten Wölfe gejagt werden, weil ausgehungerte Wolfsrudel nachts die Schützengräben angriffen und Verwundete attackierten."
    }
  },

  // RUNDE 12
  {
    id: "ww1_r12_bruderkrieg_meuterei",
    roundNumber: 12,
    locationKey: "ostfront_brueder",
    locationName: "Polen & Galizien – Zerrüttung der Zarenarmee",
    milestoneTitle: "Runde 12: Der Ruf nach Brot",
    imagePath: "/assets/ww1_station_06.jpg",
    hotspots: [
      { id: "hs_r12_brot", x: 28, y: 68, label: "Schimmliges Brot", description: "Russische Rekruten hungerten monatelang; auf ein Gewehr kamen oft drei Soldaten.", icon: "🍞" },
      { id: "hs_r12_flugblatt", x: 50, y: 45, label: "Revolutionäre Flugschriften", description: "Heimlich verteilte Traktate: 'Schluss mit dem Bruderkrieg! Jagt die Generäle fort!'", icon: "📄" },
      { id: "hs_r12_zug", x: 75, y: 60, label: "Deserteurszüge", description: "Tausende Bauernsoldaten warfen die Waffen weg und stiegen auf die Züge nach Hause.", icon: "🚂" }
    ],
    situation: {
      unterstufe: "1916 im Osten: Auf russischer Seite bricht die Versorgung zusammen. Russische Soldaten kommen nachts mit erhobenen Händen herüber – nicht um zu schießen, sondern um ein Stück Brot zu erbetteln. Dein Feldwebel will das Feuer eröffnen lassen.",
      mittelstufe: "Kriegsmüdigkeit und Zerfall: Millionen russische Soldaten haben keine Stiefel und keine Munition mehr. Der Unmut gegen den Zaren wächst. An vielen Frontabschnitten weigern sich ganze Regimenter, weiter anzugreifen. Wie reagierst du auf Überläufer?",
      oberstufe: "Vorboten der Revolution: Die zaristische Autokratie kollabiert unter der Kriegslast. Die einfachen Bauernsoldaten fordern 'Frieden und Land'. Als Überläufer deine Linie erreichen, steht ein ethischer Konflikt im Raum: Exekution oder Brüderlichkeit?"
    },
    choices: [
      {
        id: 'A',
        label: "Das Schießen verbieten und den Hungernden Brot und heißen Tee geben",
        description: "Nimm die Überläufer menschlich als Kriegsgefangene auf.",
        statChanges: { volk: 25, goetter: 15, adel: -15 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Die russischen Soldaten essen gierig das Brot. Keiner will mehr schießen.",
          mittelstufe: "Du beweist Zivilcourage. Die Gefangenen kooperieren vollkommen friedlich.",
          oberstufe: "Du verhinderst ein sinnloses Massaker an Wehrlosen und stärkst das völkerrechtliche Gewissen."
        }
      },
      {
        id: 'B',
        label: "Die Gefangenen sofort ins Divisions-Hauptquartier abführen",
        description: "Lass den militärischen Geheimdienst wichtige Informationen über feindliche Stellungen abschöpfen.",
        statChanges: { adel: 20, priester: 10, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Der Generalstab erfährt wertvolle Details über den Rückzug der russischen Armee.",
          mittelstufe: "Deine Disziplin wird vermerkt, aber die Männer im Graben blicken stumm zu Boden.",
          oberstufe: "Strategische Informationsgewinnung nach militärischem Lehrbuch."
        }
      },
      {
        id: 'C',
        label: "Mit den Überläufern Stiefel und Pelzmützen gegen Tabak tauschen",
        description: "Praktischer Tauschhandel im Niemandsland zur gegenseitigen Ausrüstung.",
        statChanges: { priester: 20, goetter: 5, adel: -5 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Deine Kameraden bekommen warme Filzstiefel ('Walenki'), die Russen deutschen Tabak.",
          mittelstufe: "Frontpragmatismus: Beide Seiten profitieren im eiskalten Winter.",
          oberstufe: "Tauschhandel als friedliche Interaktion inmitten des Vernichtungskrieges."
        }
      },
      {
        id: 'D',
        label: "Gemeinsam mit den russischen Soldaten ein Friedenslied anstimmen (Einsatz: 3 Briefe)",
        description: "Ein bewegender Gesang über die Gräben hinweg.",
        epCost: 3,
        statChanges: { volk: 30, goetter: 20, adel: -20 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Mächtige Stimmen hallen durch die Nacht: Der Traum vom Frieden wird greifbar nah.",
          mittelstufe: "Ein unvergesslicher Moment: Russische und deutsche Soldaten weinen gemeinsam um ihre verlorene Jugend.",
          oberstufe: "Klassensolidarität an der Ostfront: Die historische Vorwegnahme des Friedens von Brest-Litowsk."
        }
      }
    ],
    lexiconEntry: {
      term: "Die Krise der Zarenarmee & Überläufer",
      title: "Der Zusammenbruch im Osten",
      explanation: {
        unterstufe: "In Russland gab es 1916 kaum noch Waffen und Brot für die Soldaten. Viele liefen über oder weigerten sich zu kämpfen, weil sie den sinnlosen Krieg beenden wollten.",
        mittelstufe: "Die russische Wirtschaft war dem Weltkrieg nicht gewachsen. Über zwei Millionen russische Soldaten gerieten in Gefangenschaft. Die Kriegsmüdigkeit führte 1917 direkt zum Sturz des Zaren Nikolaus II.",
        oberstufe: "Die Niederlagenserie und die galoppierende Inflation entzogen der Zarenherrschaft jede Legitimation. Die Soldaten bildeten mit den Arbeitern erste Räte (Sowjets), die den sofortigen Frieden forderten."
      },
      curiosityFact: "Manche russische Soldaten wurden ohne Gewehr an die Front geschickt mit dem Befehl: 'Warte, bis dein Vordermann fällt, nimm dann sein Gewehr und schieß weiter!'"
    }
  },

  // =========================================================================
  // BILD 7: Station 7 (/assets/ww1_station_07.jpg)
  // =========================================================================
  // RUNDE 13
  {
    id: "ww1_r13_steckruebenwinter",
    roundNumber: 13,
    locationKey: "berlin_hungerwinter",
    locationName: "Die Heimatfront – Der Steckrübenwinter 1916/17",
    milestoneTitle: "Runde 13: Der Magen knurrt an der Spree",
    imagePath: "/assets/ww1_station_07.jpg",
    hotspots: [
      { id: "hs_r13_kohl", x: 25, y: 65, label: "Die Kohlrübe (Steckrübe)", description: "Weil Kartoffeln fehlten, gab es Steckrübensuppe, Steckrübenbrot und Steckrübenmarmelade.", icon: "🥔" },
      { id: "hs_r13_schlange", x: 45, y: 52, label: "Hungerschlangen vor Läden", description: "Frauen und Kinder froren stundenlang bei minus 15 Grad für 200 Gramm Sägemehlbrot an.", icon: "🚶‍♀️" },
      { id: "hs_r13_fabrik", x: 75, y: 48, label: "Frauen in der Munitionsfabrik", description: "Hunderttausende Frauen ersetzten Männer an Werkbänken, Granatpressen und Straßenbahnen.", icon: "⚙️" }
    ],
    situation: {
      unterstufe: "Blick zur Heimatfront im Winter 1916/17: In Berlin, Wien und Paris frieren und hungern die Familien. Weil England die Meere mit Kriegsschiffen blockiert, gibt es keine Kartoffeln mehr. Deine Mutter steht stundenlang in der Kälte für Kohlrüben an, während deine Schwester in der Munitionsfabrik arbeitet.",
      mittelstufe: "Der 'Steckrübenwinter': Die britische Seeblockade schnürt Deutschland von Lebensmitteln und Dünger ab. Fast 800.000 Zivilisten verhungern während des Krieges. Zivilbevölkerung und Soldaten sind gleichermaßen am Ende ihrer Kräfte.",
      oberstufe: "Der totale Krieg erfasst die Zivilgesellschaft: Die Heimatfront wird zum kriegsentscheidenden Faktor. Während Frauen in den Rüstungsfabriken der Chemiegiftgefahr ausgesetzt sind, breitet sich Rachitis und Tuberkulose unter den Kindern aus. Wie bewältigt deine Familie die Not?"
    },
    choices: [
      {
        id: 'A',
        label: "Ein Päckchen von der Front mit Militär-Dosenfleisch nach Hause schicken",
        description: "Verzichte selbst auf Rationen, um deine hungernden Geschwister zu retten.",
        statChanges: { volk: 25, priester: -15, ep: 1 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Das Dosenfleisch rettet deinen kleinen Bruder vor dem Verhungern. Freudentränen daheim!",
          mittelstufe: "Deine Selbstlosigkeit rettet die Familie durch die härtesten Wochen des Hungerwinters.",
          oberstufe: "Front-Heimat-Solidarität: Du setzt deine physische Substanz für das Überleben deiner Sippe ein."
        }
      },
      {
        id: 'B',
        label: "Auf dem Schwarzmarkt Tauschhandel betreiben (Uhr gegen Mehl)",
        description: "Beschaffe lebenswichtige Kartoffeln von Bauern auf dem Land ('Hamstern').",
        statChanges: { priester: 20, adel: -10, ep: 1 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Der Sack Kartoffeln bringt euch durch den eisigen Februar.",
          mittelstufe: "Die Wucherpreise sind bitter, aber der Ofen raucht und die Suppe nährt.",
          oberstufe: "Überlebensstrategie im Schatten der Mangelwirtschaft: Der Schwarzmarkt ersetzt den Staat."
        }
      },
      {
        id: 'C',
        label: "In der Munitionsfabrik für bessere Schutzkleidung und Milch eintreten",
        description: "Deine Schwester organisiert Proteste gegen die giftige Schwefel-Gelbsucht.",
        statChanges: { volk: 20, goetter: 10, adel: -10 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Die Werkleitung muss nachgeben: Milch und Schutzmasken werden ausgegeben.",
          mittelstufe: "Erster Erfolg der Arbeiterinnenbewegung: Die Fabrikfrauen fordern lautstark Rechte ein.",
          oberstufe: "Frühe Arbeitskämpfe im Krieg: Frauen emanzipieren sich an der Werkbank und fordern Frieden."
        }
      },
      {
        id: 'D',
        label: "Eine Suppenküche für Kriegswaisen und Ältere aufbauen (Einsatz: 3 Briefe)",
        description: "Koche nahrhafte Erbsensuppe für die Schwächsten im Viertel.",
        epCost: 3,
        statChanges: { volk: 30, goetter: 20, adel: 5 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Hundert hungrige Kinderaugen leuchten! Eine Welle der Nachbarschaftshilfe rollt an.",
          mittelstufe: "Die Suppenküche wird zum sozialen Herz des Stadtteils gegen Kälte und Resignation.",
          oberstufe: "Bürgerschaftliche Solidarität gegen das Versagen der staatlichen Kriegsernährungsämter."
        }
      }
    ],
    lexiconEntry: {
      term: "Der 'Steckrübenwinter' & die Hungerblockade",
      title: "Hunger an der Heimatfront",
      explanation: {
        unterstufe: "Weil die Engländer mit Kriegsschiffen alle Lieferungen stoppten, gab es im Winter 1916/17 in Deutschland kaum etwas zu essen. Die Menschen aßen monatelang nur noch gelbe Kohlrüben – sogar als Brot und Marmelade.",
        mittelstufe: "Die Seeblockade der britischen Royal Navy schnitt das Deutsche Reich von Salpeter (Dünger) und Nahrung ab. Eine Kartoffelfäule vernichtete die Ernte 1916. Rund 700.000 bis 800.000 Menschen starben an Unterernährung.",
        oberstufe: "Der Begriff 'Heimatfront' verdeutlicht, dass die moderne Kriegführung die gesamte Bevölkerung in Mitleidenschaft zog. Die Mangelwirtschaft delegitimierte das Kaiserreich und förderte kriegsmüde Streiks ab 1917."
      },
      curiosityFact: "Wissenschaftler erfanden damals künstlichen 'Kaffee' aus gerösteten Eicheln und Mehlersatz aus gemahlenem Holz und Sägespänen, um den Hunger zu täuschen."
    }
  },

  // RUNDE 14
  {
    id: "ww1_r14_feldpost_zensur",
    roundNumber: 14,
    locationKey: "feldpost_zensuramt",
    locationName: "Feldpostbriefe – Das Band zwischen Graben und Heimat",
    milestoneTitle: "Runde 14: Der schwarze Zensurbalken",
    imagePath: "/assets/ww1_station_07.jpg",
    hotspots: [
      { id: "hs_r14_brief", x: 45, y: 52, label: "Feldpostkarte mit Tintenspuren", description: "Fast 30 Milliarden Briefe verbanden Front und Heimat; oft das letzte Lebenszeichen eines Gefallenen.", icon: "✉️" },
      { id: "hs_r14_zensur", x: 25, y: 65, label: "Schwarze Zensurtusche", description: "Offiziere schwärzten jede Klage über Hunger, Leichengeruch und Zweifel am Endsieg.", icon: "⬛" },
      { id: "hs_r14_foto", x: 75, y: 48, label: "Zerknittertes Familienfoto", description: "Hinter dem Stahlhelm M1916 aufbewahrt: Das Bild von Frau und Kind als seelischer Halt.", icon: "🖼️" }
    ],
    situation: {
      unterstufe: "Im feuchten Unterstand schreibst du bei Kerzenlicht einen Brief nach Hause. Du möchtest deiner Mutter schreiben, wie sehr du sie vermisst, aber der Zensor streicht jedes Wort über Granaten und Trauer mit schwarzer Tinte durch. Wie verpackst du deine Gefühle?",
      mittelstufe: "Die Feldpost als Überlebensanker: Täglich wandern Millionen Karten zwischen Front und Heimat. Doch die Militärzensur verbietet jede Wahrheit über das Schlachten. Wer die Wahrheit schreibt, riskiert Haft wegen 'Wehrkraftzersetzung'.",
      oberstufe: "Zensur und Mentalitätsgeschichte: Die Feldpostbriefe spiegeln den Wandel von patriotischer Verklärung hin zu tiefer Verzweiflung und Verbitterung. Soldaten entwickeln Codes und Zwischenzeilen, um ihren Liebsten die Wahrheit mitzuteilen. Was schreibst du?"
    },
    choices: [
      {
        id: 'A',
        label: "Einen verschlüsselten Brief schreiben, der zwischen den Zeilen die Wahrheit verrät",
        description: "Umschreibe die Not so geschickt, dass der Zensor es nicht merkt.",
        statChanges: { volk: 20, goetter: 10, ep: 1 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Deine Mutter versteht sofort: 'Unser Apfelbaum hat alle Äpfel verloren' heißt: Es steht schlimm.",
          mittelstufe: "Die Botschaft kommt unzensiert an. Daheim betet man mit neuem Ernst für deine Heimkehr.",
          oberstufe: "Meisterhafte Beherrschung der doppelten Sprache: Du durchbrichst die staatliche Zensurmauer."
        }
      },
      {
        id: 'B',
        label: "Der Mutter Mut zusprechen und betonen, dass es dir den Umständen nach gut geht",
        description: "Schone ihr schwaches Herz, um ihr nicht noch mehr Sorgen aufzuhalsen.",
        statChanges: { adel: 15, volk: 10, ep: 1 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Deine Mutter weint vor Erleichterung und drückt den Brief an ihre Brust.",
          mittelstufe: "Du schützt deine Familie vor der schrecklichen Wahrheit und spendest ihr tröstende Kraft.",
          oberstufe: "Selbstlose Fürsorge: Du nimmst die seelische Last allein auf deine Schultern."
        }
      },
      {
        id: 'C',
        label: "Briefe für leseschwache Kameraden aufsetzen und ihnen beim Formulieren helfen",
        description: "Werde zum Schreiber für die Männer deiner Gruppe.",
        statChanges: { goetter: 20, volk: 15, priester: 5 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Drei Kameraden schicken heute Briefe ab! Die Dankbarkeit im Graben ist riesig.",
          mittelstufe: "Du leihst den Stummen deine Feder und schenkst Familien das letzte Zeichen ihrer Söhne.",
          oberstufe: "Kameradschaftliche Bildungshilfe: Ein unschätzbarer Dienst am seelischen Zusammenhalt."
        }
      },
      {
        id: 'D',
        label: "Einen verbotenen Frontbericht an einen mutigen Zeitungsredakteur schmuggeln (Einsatz: 3 Briefe)",
        description: "Lass die Bürger die ungeschminkte Wahrheit über das Gemetzel erfahren.",
        epCost: 3,
        statChanges: { volk: 30, adel: -20, ep: 2 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Der Artikel erscheint anonym. Ganz Berlin spricht über den schonungslosen Bericht!",
          mittelstufe: "Der Text rüttelt die Öffentlichkeit auf und entlarvt die Lügen der Heeresberichte.",
          oberstufe: "Publizistischer Widerstand gegen die Militärdiktatur der Obersten Heeresleitung."
        }
      }
    ],
    lexiconEntry: {
      term: "Feldpostbriefe & Militärzensur",
      title: "Die Stimme der Front",
      explanation: {
        unterstufe: "Feldpost war kostenlos. Fast 30 Milliarden Briefe wurden im Krieg hin- und hergeschickt. Offiziere lasen jeden Brief und schwärzten mit Tinte alles, was von Trauer oder Angst handelte.",
        mittelstufe: "Die Feldpost war das wichtigste Kommunikationsmittel zwischen Front und Heimat. Die Zensur sollte Panik und Defätismus in der Bevölkerung verhindern, zerstörte aber oft das Vertrauen in die offizielle Berichterstattung.",
        oberstufe: "Feldpostbriefe gelten heute als erstrangige historische Quellen für die Alltags- und Mentalitätsgeschichte. Sie dokumentieren die zunehmende Verrohung, Frustration und den Zerfall des Kriegsmotivs ab 1916."
      },
      curiosityFact: "Täglich wurden im Deutschen Reich rund 15 Millionen Feldpostsendungen befördert – eine unfassbare logistische Leistung der Reichspost mitten im Krieg."
    }
  },

  // =========================================================================
  // BILD 8: Station 8 (/assets/ww1_station_08.jpg)
  // =========================================================================
  // RUNDE 15
  {
    id: "ww1_r15_revolution_1917",
    roundNumber: 15,
    locationKey: "petrograd_1917",
    locationName: "Das Epochenjahr 1917 – Zarensturz in Petrograd",
    milestoneTitle: "Runde 15: Der Rote Oktober & Frieden im Osten",
    imagePath: "/assets/ww1_station_08.jpg",
    hotspots: [
      { id: "hs_r15_banner", x: 35, y: 48, label: "Rote Fahnen in Petrograd", description: "Arbeiterinnen und meuternde Soldaten stürzten im Februar 1917 den Zaren; Lenin übernahm im Oktober die Macht.", icon: "🚩" },
      { id: "hs_r15_lenin", x: 68, y: 42, label: "Lenin & Dekret über den Frieden", description: "Die Bolschewiki forderten den sofortigen, gerechten Frieden ohne Annexionen und Kontributionen.", icon: "📜" },
      { id: "hs_r15_waffenruhe", x: 22, y: 68, label: "Waffenstillstand an der Ostfront", description: "Deutsche und russische Soldaten umarmten sich im Winter 1917; der Krieg im Osten war beendet.", icon: "🕊️" }
    ],
    situation: {
      unterstufe: "1917 verändert sich alles: In Russland stürzen hungernde Arbeiter und meuternde Soldaten den Zaren! Die neue Regierung unter Lenin will keinen Krieg mehr. An der Ostfront schweigen plötzlich die Waffen. Deutsche und russische Soldaten fallen sich in die Arme. Ist der Frieden endlich greifbar?",
      mittelstufe: "Das Epochenjahr 1917: Die Russische Revolution beendet den Krieg an der Ostfront. Im Vertrag von Brest-Litowsk scheidet Russland aus. Hunderttausende deutsche Soldaten hoffen, nun endlich nach Hause zu dürfen. Doch die Generäle wollen sie an die Westfront werfen.",
      oberstufe: "Geopolitische Zäsur 1917: Das 'Dekret über den Frieden' der Bolschewiki erschüttert die imperialistische Weltordnung. Während die Mittelmächte Russland einen harten Diktatfrieden aufzwingen, keimt bei den deutschen Soldaten die Frage auf: Warum kämpfen wir noch?"
    },
    choices: [
      {
        id: 'A',
        label: "Die Verbrüderung an der Ostfront feiern und mit den russischen Soldaten feiern",
        description: "Genieße den ersten echten Frieden nach drei Jahren Gemetzel.",
        statChanges: { volk: 25, goetter: 20, adel: -15 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Akkordeonmusik erklingt im Schnee! Russische und deutsche Soldaten trinken Tee und umarmen sich.",
          mittelstufe: "Der Frieden im Osten wird Wirklichkeit. Du spürst: Die Völker wollen keinen Krieg mehr.",
          oberstufe: "Ein historisches Fanal: Der Zusammenbruch der zaristischen Front beweist die Macht des Volkswillens."
        }
      },
      {
        id: 'B',
        label: "Verlegung an die Westfront verweigern und Urlaub einfordern",
        description: "Poche auf deine Rechte nach jahrelangem Fronteinsatz im Eis.",
        statChanges: { volk: 20, adel: -20, ep: 1 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Deine Kameraden unterstützen dich lautstark. Die Heeresleitung muss vorerst nachgeben.",
          mittelstufe: "Verdeckte Streikstimmung in der Truppe: Der Gehorsam bröckelt unaufhaltsam.",
          oberstufe: "Passive Meuterei: Die Soldaten weigern sich zunehmend, als Kanonenfutter verheizt zu werden."
        }
      },
      {
        id: 'C',
        label: "Befehl zur Verlegung nach Westen widerwillig befolgen",
        description: "Halte die Disziplin aufrecht, um nicht vor das Kriegsgericht gestellt zu werden.",
        statChanges: { adel: 15, goetter: -10, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Der Güterzug rollt Richtung Frankreich. Die Hoffnung auf Frieden weicht bitterer Enttäuschung.",
          mittelstufe: "Du fügst dich der militärischen Pflicht, doch der Glaube an den Sinn des Krieges ist erloschen.",
          oberstufe: "Kadaverdisziplin im Schatten des Epochenumbruchs: Du marschierst in die letzte Katastrophe."
        }
      },
      {
        id: 'D',
        label: "Ein Exemplar des Friedensdekrets heimlich in den Westen schmuggeln (Einsatz: 3 Briefe)",
        description: "Verbreite den Ruf nach Frieden unter den Soldaten in Frankreich.",
        epCost: 3,
        statChanges: { volk: 30, goetter: 15, adel: -20 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Das Blatt wandert von Hand zu Hand: Der Funke des Friedens springt auf die Westfront über!",
          mittelstufe: "Die Männer lesen Lenins Friedensappell mit glänzenden Augen. Der Kriegswille schwindet.",
          oberstufe: "Subversiver Friedenstransfer: Du beschleunigst den Zusammenbruch der deutschen Angriffsmoral."
        }
      }
    ],
    lexiconEntry: {
      term: "Das Epochenjahr 1917 & Russische Revolution",
      title: "Der Zarensturz verändert die Welt",
      explanation: {
        unterstufe: "1917 gab es in Russland eine Revolution. Zar Nikolaus musste abdanken. Die neuen Herrscher machten sofort Frieden mit Deutschland, damit ihre Leute nicht mehr sterben mussten.",
        mittelstufe: "Die Februarrevolution beendete die Zarenherrschaft, die Oktoberrevolution brachte die Bolschewiki unter Lenin an die Macht. Im März 1918 schlossen Sowjetrussland und die Mittelmächte den Frieden von Brest-Litowsk.",
        oberstufe: "Das Jahr 1917 gilt als epochale Weichenstellung: Das Zarentum stürzte, der Kommunismus etablierte sich als Weltmacht, und die USA traten in den Krieg ein – das 20. Jahrhundert begann."
      },
      curiosityFact: "Die deutsche Heeresleitung hatte Lenin 1917 in einem plombierten Eisenbahnzug aus dem Schweizer Exil nach Russland reisen lassen – in der Hoffnung, er würde Russland aus dem Krieg werfen. Der Plan ging auf, rächte sich aber später."
    }
  },

  // RUNDE 16
  {
    id: "ww1_r16_usa_eintritt",
    roundNumber: 16,
    locationKey: "atlantik_usa",
    locationName: "Der Atlantik – U-Boot-Krieg & Kriegseintritt der USA",
    milestoneTitle: "Runde 16: Die Schiffe aus Amerika",
    imagePath: "/assets/ww1_station_08.jpg",
    hotspots: [
      { id: "hs_r16_uboot", x: 25, y: 65, label: "Deutsches U-Boot U-9", description: "Im uneingeschränkten U-Boot-Krieg versenkten deutsche Boote auch neutrale US-Handelsschiffe.", icon: "⚓" },
      { id: "hs_r16_wilson", x: 68, y: 42, label: "Präsident Woodrow Wilson", description: "Wilson erklärte im April 1917 Deutschland den Krieg: 'The world must be made safe for democracy.'", icon: "🇺🇸" },
      { id: "hs_r16_transporter", x: 50, y: 35, label: "US-Truppentransporter", description: "Monatlich landeten 200.000 frische, ausgeruhte US-Soldaten ('Doughboys') in Frankreich.", icon: "🚢" }
    ],
    situation: {
      unterstufe: "April 1917: Die deutsche Marineleitung hat den uneingeschränkten U-Boot-Krieg befohlen. Weil deutsche U-Boote amerikanische Handelsschiffe versenkten, treten die mächtigen Vereinigten Staaten von Amerika in den Krieg ein. Jeden Monat landen zehntausende frische amerikanische Soldaten in Frankreich.",
      mittelstufe: "Die Wende im Weltkrieg: US-Präsident Woodrow Wilson mobilisiert das gewaltige industrielle Potenzial der USA. Gegen die Millionen frischer 'Doughboys' und die amerikanische Rüstungsgewalt haben die ausgehungerten deutschen Truppen keine Chance mehr. Die Zuversicht bricht zusammen.",
      oberstufe: "Der fatale U-Boot-Fehlschlag der deutschen Admiralität: Die Hoffnung, England binnen fünf Monaten in die Knie zu zwingen, scheiterte am Konvoisystem. Der Kriegseintritt der USA besiegelt das Schicksal der Mittelmächte unausweichlich. Was rätst du deinen Kameraden?"
    },
    choices: [
      {
        id: 'A',
        label: "Auf Wilsons 14-Punkte-Programm hoffen und für einen Verhandlungsfrieden werben",
        description: "Unterstütze die Idee eines gerechten Friedens ohne Bestrafung der Völker.",
        statChanges: { volk: 25, goetter: 15, adel: -10 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Wilsons Botschaft von Freiheit und Völkerbund weckt die Sehnsucht nach einem Ende des Leids.",
          mittelstufe: "Die 14 Punkte geben den Soldaten die Hoffnung, dass der Krieg ohne Vernichtung enden kann.",
          oberstufe: "Diplomatische Weitsicht: Du erkennst Wilsons Programm als einzige Chance zur Schadensbegrenzung."
        }
      },
      {
        id: 'B',
        label: "Verteidigungsstellungen verstärken und auf den alliierten Stoß vorbereiten",
        description: "Verschanze dich tiefer in der Erde vor der amerikanischen Übermacht.",
        statChanges: { priester: 15, adel: 15, ep: 1 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Euer Graben wird mit Eichenbalken verstärkt. Ihr seid gerüstet für das Schlimmste.",
          mittelstufe: "Gute Pioniervorbereitung mildert die Wucht der neuen amerikanischen Angriffe ab.",
          oberstufe: "Taktischer Realismus gegen die anrollende materielle Übermacht der Alliierten."
        }
      },
      {
        id: 'C',
        label: "Verzweifelten Durchhalteparolen der Heeresleitung Glauben schenken",
        description: "Glaube an die Propaganda vom bevorstehenden Sieg im Westen.",
        statChanges: { adel: 15, goetter: -15, volk: -10 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Du versuchst stur zu bleiben, aber die Zweifel nagen immer heftiger an dir.",
          mittelstufe: "Die Realität an der Front straft die Parolen Lügen: Immer mehr US-Soldaten rücken an.",
          oberstufe: "Tragische Verblendung: Das Festhalten an der Siegesillusion beschleunigt das Verbluten."
        }
      },
      {
        id: 'D',
        label: "Ausgehungerten Zivilisten in Nordfrankreich US-Brotkarten zustecken (Einsatz: 2 Briefe)",
        description: "Teile die wenigen Nahrungsmittel mit der französischen Landbevölkerung.",
        epCost: 2,
        statChanges: { volk: 25, goetter: 15, priester: -5 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Eine französische Großmutter segnet dich unter Tränen. Feindschaft weicht Menschlichkeit.",
          mittelstufe: "Du beweist, dass Humanität über militärischen Frontlinien steht.",
          oberstufe: "Ein leuchtendes Zeugnis der Menschlichkeit im Vorfeld des europäischen Friedens."
        }
      }
    ],
    lexiconEntry: {
      term: "Kriegseintritt der USA & Wilsons 14 Punkte",
      title: "Die Wende des Weltkriegs (1917)",
      explanation: {
        unterstufe: "Weil deutsche U-Boote Schiffe aus den USA versenkten, trat Amerika 1917 in den Krieg ein. Mit frischen Soldaten, Panzern und Essen war die deutsche Niederlage besiegelt.",
        mittelstufe: "US-Präsident Woodrow Wilson verkündete im Januar 1918 sein '14-Punkte-Programm': Selbstbestimmungsrecht der Völker, Abrüstung und Gründung des Völkerbundes als Basis für dauerhaften Frieden.",
        oberstufe: "Der US-Kriegseintritt markierte den Aufstieg der Vereinigten Staaten zur globalen Supermacht. Die wirtschaftliche und militärische Überlegenheit der Alliierten machte jeden deutschen Sieg zur reinen Illusion."
      },
      curiosityFact: "Die amerikanischen Soldaten wurden in Europa 'Doughboys' (Teigmänner) genannt. Warum genau, weiß man bis heute nicht sicher – vielleicht wegen ihrer hellen Uniformknöpfe oder ihres Vorrats an weißem Backteig."
    }
  },

  // =========================================================================
  // BILD 9: Station 9 (/assets/ww1_station_09.jpg)
  // =========================================================================
  // RUNDE 17
  {
    id: "ww1_r17_somme_tanks",
    roundNumber: 17,
    locationKey: "somme_panzer",
    locationName: "Die Somme – Stählerne Monster im Stacheldraht",
    milestoneTitle: "Runde 17: Das Erscheinen der Tanks",
    imagePath: "/assets/ww1_station_09.jpg",
    hotspots: [
      { id: "hs_r17_tank", x: 48, y: 52, label: "Britischer Mark-IV-Tank", description: "Rhombusförmiger Panzerkoloss; walzte Stacheldraht nieder und überquerte bis zu drei Meter breite Gräben.", icon: "🚜" },
      { id: "hs_r17_granate", x: 25, y: 65, label: "Geballte Ladung (Handgranatenbündel)", description: "Weil panzerbrechende Waffen fehlten, banden Soldaten sechs Handgranaten zusammen.", icon: "💣" },
      { id: "hs_r17_rauch", x: 75, y: 40, label: "Qualm & Flammenwerfer", description: "Dichter Motorenqualm und Benzindämpfe machten das Innere des Tanks zu einer heißen Sauna.", icon: "🔥" }
    ],
    situation: {
      unterstufe: "Herbst 1917/18: Die Erde erzittert unter einem neuen, metallischen Dröhnen. Durch dichten Morgennebel walzen stählerne Ungetüme heran. Sie zerdrücken Stacheldraht wie Streichhölzer und rollen einfach über eure Schützengräben hinweg: Die ersten Panzer ('Tanks')!",
      mittelstufe: "Panzerschock an der Westfront: Der britische Mark-IV-Panzer beendet die Vorherrschaft des Schützengrabens. Normale Gewehrkugeln prallen funkensprühend an den Panzerplatten ab. Die deutsche Infanterie gerät in Panik. Dein Zug steht vor einem heranwalzenden Koloss.",
      oberstufe: "Technologische Revolution der Kriegführung: Mit dem massenhaften Einsatz von Panzern und Stoßtrupptaktik wird die starre Frontlinie endgültig aufgebrochen. Die deutsche Armee besitzt fast keine eigenen Panzer. Wie begegnest du dem stählernen Stoß?"
    },
    choices: [
      {
        id: 'A',
        label: "Die Gruppe in tiefe Trichter zurückziehen und den Tank passieren lassen",
        description: "Rette deine Männer vor den Ketten und bekämpfe die nachfolgende Infanterie.",
        statChanges: { goetter: 15, adel: 10, ep: 1 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Der Koloss rollt donnernd über euren Kopf hinweg. Ihr bleibt unverletzt im Trichter!",
          mittelstufe: "Taktische Klugheit: Ihr überlasst dem Panzer das leere Feld und schneidet die Begleitinfanterie ab.",
          oberstufe: "Kaltblütige Grabenführung: Du vermeidest den Panzerschock und verhinderst das Überrennen."
        }
      },
      {
        id: 'B',
        label: "Eine geballte Ladung Handgranaten unter die Ketten des Panzers werfen",
        description: "Bringe den Panzerkoloss durch Sprengung des Fahrwerks zum Stillstand.",
        statChanges: { adel: 20, priester: -10, ep: 2 },
        skillChanges: { militaerischeStaerke: 2 },
        consequenceText: {
          unterstufe: "Eine gewaltige Explosion! Die Kette reißt ab und der Panzer dreht sich hilflos im Kreis.",
          mittelstufe: "Heldentat im Niemandsland: Die britische Besatzung kapituliert und verlässt das Fahrzeug.",
          oberstufe: "Erste Panzervernichtung im Nahkampf: Dein Stoßtrupp beweist unheimlichen Mut."
        }
      },
      {
        id: 'C',
        label: "Sichtschlitze des Tanks mit Schlamm und Rauchgranaten blenden",
        description: "Nimm der Panzerbesatzung jede Orientierung im Schlammfeld.",
        statChanges: { priester: 15, goetter: 10, ep: 1 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Der Fahrer sieht nichts mehr und fährt den Panzer tief in einen Granattrichter fest!",
          mittelstufe: "Kreative Abwehr: Der geblendete Tank sitzt hilflos im Schlamm fest.",
          oberstufe: "Improvisierte Panzerabwehr: Mit Rauch und Tücke schaltest du die High-Tech-Waffe aus."
        }
      },
      {
        id: 'D',
        label: "Verwundete Panzerfahrer der Gegenseite aus dem brennenden Wrack retten (Einsatz: 3 Briefe)",
        description: "Lösche das Feuer und rette die eingeschlossene Besatzung vor dem Flammentod.",
        epCost: 3,
        statChanges: { volk: 30, goetter: 15, adel: -10 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Ihr zieht zwei junge Engländer aus dem Rauch. Sie stammeln: 'Thank you, brother!'",
          mittelstufe: "Ein überwältigender Moment der Barmherzigkeit im brutalen Panzergefecht.",
          oberstufe: "Rettungstat im Angesicht des Verbrennens: Du setzt das Völkerrecht über den Hass."
        }
      }
    ],
    lexiconEntry: {
      term: "Die Erfindung des Panzers ('Tank')",
      title: "Stahlgiganten überwinden den Graben",
      explanation: {
        unterstufe: "Die Engländer bauten im Geheimen die ersten Panzer. Um den Feind zu täuschen, sagten sie, es seien bewegliche Wassertanks ('Tanks'). Sie konnten über Schützengräben und Stacheldraht fahren.",
        mittelstufe: "Erstmals an der Somme 1916 erprobt, brachten hunderte Tanks bei Cambrai 1917 und Amiens 1918 den Durchbruch. Die deutsche Führung erkannte die Bedeutung der Panzerwaffe zu spät.",
        oberstufe: "Der Panzer revolutionierte die moderne Militärdoktrin: Er vereinte Panzerung, Feuerkraft und Mobilität. Er leitete das Ende des statischen Stellungskrieges ein und begründete die moderne Mechanisierung."
      },
      curiosityFact: "Im Inneren der ersten Tanks war es bis zu 50 Grad heiß. Die Besatzung trug Schutzmasken aus Kettenhemdgeflecht, um ihre Augen vor absplitterndem Metall im Inneren zu schützen."
    }
  },

  // RUNDE 18
  {
    id: "ww1_r18_schwarzer_tag",
    roundNumber: 18,
    locationKey: "amiens_schwarzer_tag",
    locationName: "Amiens 1918 – Der 'Schwarze Tag des deutschen Heeres'",
    milestoneTitle: "Runde 18: Die Front bricht auf",
    imagePath: "/assets/ww1_station_09.jpg",
    hotspots: [
      { id: "hs_r18_ludendorff", x: 25, y: 62, label: "Der 'Schwarze Tag' (8. August 1918)", description: "General Ludendorff gestand ein: Die Moral ist gebrochen; der Krieg kann militärisch nicht mehr gewonnen werden.", icon: "🛑" },
      { id: "hs_r18_sturm", x: 75, y: 65, label: "Kapitulierende Einheiten", description: "Zehntausende deutsche Soldaten ergaben sich kampflos – der Wille zum Durchhalten war erloschen.", icon: "🏳️" },
      { id: "hs_r18_nebel", x: 50, y: 40, label: "Alliierte Übermacht", description: "Hunderte Panzer, Flugzeuge und frische Truppen überrollten die dünn besetzten Linien.", icon: "✈️" }
    ],
    situation: {
      unterstufe: "8. August 1918: Dichter Frühnebel bei Amiens. Tausende Geschütze und hunderte Panzer der Alliierten brechen durch eure Linien. Ganze deutsche Bataillone ergeben sich kampflos. Soldaten rufen den nachrückenden Einheiten zu: 'Kriegsverlängerer! Hört auf zu kämpfen!' Die Niederlage ist besiegelt.",
      mittelstufe: "Der 'Schwarze Tag des Heeres': General Ludendorff erkennt, dass der Krieg verloren ist. Die deutsche Frühjahrsoffensive 1918 ist verpufft. Hunger, Grippe ('Spanische Grippe') und Erschöpfung haben die Truppe ausgehöhlt. Es geht nur noch um die Vermeidung des totalen Untergangs.",
      oberstufe: "Der militärische Zusammenbruch im Spätsommer 1918: Die Oberste Heeresleitung (OHL) um Hindenburg und Ludendorff fordert panisch von der Reichsregierung sofortige Waffenstillstandsverhandlungen. Auf den Straßen der Front meutern die Truppen. Wie führst du deine Männer nach Hause?"
    },
    choices: [
      {
        id: 'A',
        label: "Die Waffen strecken und sich in Gefangenschaft begeben",
        description: "Bewahre das Leben deiner Gruppe in den letzten Wochen des Gemetzels.",
        statChanges: { volk: 25, goetter: 20, adel: -20 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Ihr hebt weiße Tücher. Die britischen Soldaten behandeln euch fair – ihr werdet leben!",
          mittelstufe: "Eine mutige Entscheidung für das Überleben: Niemand muss mehr für eine verlorene Sache sterben.",
          oberstufe: "Pragmatische Kapitulation: Du rettest deine Kameraden vor dem sinnlosen Opfertod kurz vor Toresschluss."
        }
      },
      {
        id: 'B',
        label: "Einen geordneten Rückzug nach Osten organisieren und Panik verhindern",
        description: "Bringe Verwundete und Waffen diszipliniert hinter den Fluss.",
        statChanges: { adel: 15, priester: 15, ep: 1 },
        skillChanges: { militaerischeStaerke: 1 },
        consequenceText: {
          unterstufe: "Ihr erreicht das rettende Ufer, ohne aufgerieben zu werden. Niemand bleibt zurück.",
          mittelstufe: "Geordnete Nachhut: Du verhinderst ein chaotisches Blutbad unter deinen Männern.",
          oberstufe: "Verantwortungsvolle Rückzugsführung im Zusammenbruch der gesamten Heeresfront."
        }
      },
      {
        id: 'C',
        label: "Letzte Vorräte der Heereskantine plündern und an erschöpfte Soldaten verteilen",
        description: "Konserven und Schokolade retten Männer, die seit Tagen nichts gegessen haben.",
        statChanges: { priester: 25, volk: 15, adel: -10 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Ein Festmahl im Schlamm! Volle Bäuche geben neue Kraft zum Weitermarsch.",
          mittelstufe: "Gerechte Verteilung statt Offiziersprivilegien: Die Männer jubeln dir zu.",
          oberstufe: "Gerechte Selbsthilfe im Versorgungskollaps: Du stärkst die Physis deiner Abteilung."
        }
      },
      {
        id: 'D',
        label: "Einen Verwundeten über 15 Kilometer auf deinen Schultern tragen (Einsatz: 3 Briefe)",
        description: "Lass deinen besten Freund nicht im verlassenen Schlammloch sterben.",
        epCost: 3,
        statChanges: { volk: 30, goetter: 25, priester: -10 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Völlig erschöpft erreichst du das Sanitätszelt. Die Ärzte retten sein Bein. Ihr habt es geschafft!",
          mittelstufe: "Übermenschliche Kameradschaft: Du hast deinen Jugendfreund durch die Hölle heimgebracht.",
          oberstufe: "Das höchste Bekenntnis der Waffenbrüderschaft im Zusammenbruch einer ganzen Epoche."
        }
      }
    ],
    lexiconEntry: {
      term: "Der 'Schwarze Tag des Heeres' (8. August 1918)",
      title: "Der Zusammenbruch der Westfront",
      explanation: {
        unterstufe: "Am 8. August 1918 brachen hunderte englische und französische Panzer durch die deutschen Linien. Zehntausende deutsche Soldaten gaben auf. General Ludendorff wusste: Der Krieg ist verloren.",
        mittelstufe: "Die Schlacht bei Amiens markierte den moralischen Zusammenbruch der deutschen Armee. Die letzte Hoffnung auf einen Sieg war zerstört. Erstmals ergaben sich ganze Bataillone ohne Gegenwehr.",
        oberstufe: "General Erich Ludendorff prägte die Formulierung vom 'Schwarzen Tag'. Trotz der klaren militärischen Niederlage wälzte die OHL die Verantwortung später auf die zivile Politik ab (Ursprung der Dolchstoßlegende)."
      },
      curiosityFact: "Zur Niederlage trug auch die 'Spanische Grippe' bei, die 1918 weltweit wütete. Hunderttausende geschwächte Soldaten lagen mit hohem Fieber in den Unterständen und konnten kaum das Gewehr halten."
    }
  },

  // =========================================================================
  // BILD 10: Station 10 (/assets/ww1_station_10.jpg)
  // =========================================================================
  // RUNDE 19
  {
    id: "ww1_r19_kieler_matrosen",
    roundNumber: 19,
    locationKey: "kiel_novemberrevolution",
    locationName: "Kiel & Berlin – Der Matrosenaufstand im November 1918",
    milestoneTitle: "Runde 19: Das Signal zur Revolution",
    imagePath: "/assets/ww1_station_10.jpg",
    hotspots: [
      { id: "hs_r19_kiel", x: 28, y: 55, label: "Die Flotte in Kiel", description: "Matrosen löschten die Kesselfeuer, als Admirale eine sinnlose 'Todesfahrt' gegen England befahlen.", icon: "⚓" },
      { id: "hs_r19_fahne", x: 50, y: 40, label: "Rote Fahnen & Soldatenräte", description: "Binnen weniger Tage übernahmen Arbeiter- und Soldatenräte in ganz Deutschland die Macht.", icon: "🚩" },
      { id: "hs_r19_kaiser", x: 75, y: 65, label: "Abdankung Kaiser Wilhelms II.", description: "Am 9. November 1918 floh Wilhelm II. ins niederländische Exil; die Republik wurde ausgerufen.", icon: "👑" }
    ],
    situation: {
      unterstufe: "Anfang November 1918: Die Admirale der Hochseeflotte in Kiel wollen die Schiffe in eine letzte, sinnlose Seeschlacht schicken, um ihre 'Ehre' zu retten. Doch die Matrosen weigern sich! Sie löschen die Kesselfeuer, hissen rote Fahnen und fordern das sofortige Ende des Krieges. Die Revolution springt auf ganz Deutschland über.",
      mittelstufe: "Der Kieler Matrosenaufstand leitet die Novemberrevolution ein: Die einfachen Soldaten und Matrosen beenden das Schlachten aus eigener Kraft. In Berlin flieht Kaiser Wilhelm II. in die Niederlande. Philipp Scheidemann ruft die deutsche Republik aus. Der Krieg steht vor seinem letzten Tag.",
      oberstufe: "Der Zusammenbruch der Hohenzollern-Monarchie: Nach vier Jahren industriellen Schlachtens zwingt die Meuterei der Basis die Herrschenden in die Knie. Die Ausrufung der Republik markiert die Geburtsstunde der Weimarer Demokratie. Auf welcher Seite stehst du in diesen historischen Stunden?"
    },
    choices: [
      {
        id: 'A',
        label: "Dich den Matrosen und dem Soldatenrat anschließen und für die Republik eintreten",
        description: "Bekenntnis zu Demokratie, Frieden und dem Ende des militaristischen Kaiserreichs.",
        statChanges: { volk: 30, goetter: 15, adel: -20 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Die rote Schleife an deiner Mütze zeigt: Du stehst für Frieden und Freiheit!",
          mittelstufe: "Du wirst Teil des Soldatenrats. Ihr sorgt für Ordnung und verhindert Plünderungen.",
          oberstufe: "Aktives Mitwirken an der Geburtsstunde der ersten deutschen Demokratie."
        }
      },
      {
        id: 'B',
        label: "Plünderungen und Gewalt im Bahnhofsviertel verhindern",
        description: "Schütze Bäckerläden und Wohnungen, damit der Übergang friedlich bleibt.",
        statChanges: { priester: 20, adel: 10, volk: 10 },
        skillChanges: { goettlicheAuserwaehltheit: 1 },
        consequenceText: {
          unterstufe: "Die Bürger danken dir. Dank deiner Wache bleibt das Brot bezahlbar und die Stadt ruhig.",
          mittelstufe: "Besonnene Disziplin: Du verhinderst Chaos und Bürgerkrieg in den Tagen des Umbruchs.",
          oberstufe: "Ordnungspolitische Verantwortung: Du schützt die zivile Infrastruktur vor Radikalen."
        }
      },
      {
        id: 'C',
        label: "Deine Kokarde abnehmen, das Gewehr abgeben und sofort die Heimreise antreten",
        description: "Nichts wie nach Hause zu deiner Familie nach vier langen Jahren des Schreckens.",
        statChanges: { volk: 20, goetter: 10, ep: 1 },
        skillChanges: { politischeGeschicklichkeit: 1 },
        consequenceText: {
          unterstufe: "Du steigst in den Zug nach Süden. Endlich raus aus Uniform und Dreck!",
          mittelstufe: "Der Krieg ist für dich vorbei. Dein Herz schlägt nur noch für das Wiedersehen mit deinen Lieben.",
          oberstufe: "Rückkehr ins zivile Leben: Du kehrst als Überlebender der Urkatastrophe heim."
        }
      },
      {
        id: 'D',
        label: "Einen Versöhnungsappell an alle Soldaten verfassen und drucken (Einsatz: 3 Briefe)",
        description: "Aufruf: 'Nie wieder Krieg! Baut gemeinsam eine friedliche Zukunft auf!'",
        epCost: 3,
        statChanges: { volk: 35, goetter: 20, adel: -10 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Tausende Exemplare werden verteilt: Tränen und Umarmungen besiegeln den Neuanfang.",
          mittelstufe: "Dein Flugblatt wird zur moralischen Richtschnur für die junge Republik.",
          oberstufe: "Ein historisches Manifest für Demokratie, Pazifismus und Völkerverständigung."
        }
      }
    ],
    lexiconEntry: {
      term: "Der Kieler Matrosenaufstand & Novemberrevolution 1918",
      title: "Das Ende des Kaiserreichs",
      explanation: {
        unterstufe: "Als die Admirale die Schiffe in eine letzte Selbstmordschlacht schicken wollten, weigerten sich die Matrosen in Kiel. Sie löschten die Feuer in den Schiffen und machten Revolution. Der Kaiser musste fliehen.",
        mittelstufe: "Der Matrosenaufstand vom 3. November 1918 breitete sich in Windeseile über ganz Deutschland aus. Am 9. November dankte Kaiser Wilhelm II. ab und die Republik wurde ausgerufen. Der Weg zum Frieden war frei.",
        oberstufe: "Die Novemberrevolution beendete das kaiserliche Obrigkeitsregime. Arbeiter- und Soldatenräte übernahmen die Exekutive, übergaben die Macht jedoch bald an eine parlamentarische Regierung unter Friedrich Ebert."
      },
      curiosityFact: "Philipp Scheidemann (SPD) rief die Republik am 9. November 1918 gegen 14 Uhr aus einem Fenster des Berliner Reichstags aus – zwei Stunden bevor Karl Liebknecht die 'Freie Sozialistische Republik' proklamierte."
    }
  },

  // RUNDE 20
  {
    id: "ww1_r20_compiegne_frieden",
    roundNumber: 20,
    locationKey: "compiegne_waggon",
    locationName: "Compiègne – Das Schweigen der Kanonen (11.11.1918, 11 Uhr)",
    milestoneTitle: "Runde 20: Der ersehnte Frieden",
    imagePath: "/assets/ww1_station_10.jpg",
    hotspots: [
      { id: "hs_r20_waggon", x: 50, y: 48, label: "Salonwagen 2419 D", description: "Im Wald von Compiègne unterzeichneten Marschall Foch und Matthias Erzberger den Waffenstillstand.", icon: "🚂" },
      { id: "hs_r20_uhr", x: 28, y: 42, label: "11. Stunde des 11. Tages im 11. Monat", description: "Punkt 11:00 Uhr am 11. November 1918 schwiegen nach über vier Jahren die Kanonen der Westfront.", icon: "⏰" },
      { id: "hs_r20_dolchstoss", x: 72, y: 65, label: "Die Keimzelle der Dolchstoßlegende", description: "Rechte Militärs behaupteten fälschlich, die Truppe sei 'im Felde unbesiegt' von der Heimat verraten worden.", icon: "🗡️" }
    ],
    situation: {
      unterstufe: "11. November 1918, 10:59 Uhr: Du stehst im Graben. Die Taschenuhr tickt laut. Noch donnern einzelne Geschütze. Dann springt der Zeiger auf genau 11:00 Uhr. Schlagartig erstirbt jeder Laut. Eine unendliche, fast unheimliche Stille legt sich über das Niemandsland. Ein Vogel singt. Der Erste Weltkrieg ist vorbei. Du hast überlebt!",
      mittelstufe: "Der Waffenstillstand von Compiègne: Im Eisenbahnwaggon von Marschall Foch unterschreibt die deutsche Delegation unter Matthias Erzberger die harten Waffenstillstandsbedingungen. Nach vier Jahren, 17 Millionen Toten und unendlicher Zerstörung schweigen die Waffen. Die Soldaten treten die Heimreise an.",
      oberstufe: "Das historische Finale der Urkatastrophe des 20. Jahrhunderts: Punkt 11 Uhr am 11.11.1918 enden die Kampfhandlungen. Während Millionen Gefallene auf den Soldatenfriedhöfen ruhen, hinterlässt der Krieg traumatisierte Gesellschaften und die verhängnisvolle 'Dolchstoßlegende'. Welche Lehre nimmst du mit in die Zukunft?"
    },
    choices: [
      {
        id: 'A',
        label: "Aus dem Graben klettern, den Stahlhelm abnehmen und dem französischen Nachbarn zuwinken",
        description: "Ein stiller Moment der Erleichterung und des Friedens.",
        statChanges: { volk: 30, goetter: 25, adel: 15 },
        skillChanges: { politischeGeschicklichkeit: 2 },
        consequenceText: {
          unterstufe: "Der französische Soldat hebt ebenfalls die Hand. Die Stille ist der schönste Klang der Welt.",
          mittelstufe: "Gemeinsames Aufatmen zweier Völker nach vier Jahren Blutvergießen. Du hast überlebt!",
          oberstufe: "Ein historischer Moment: Du beendest den Krieg als Mensch, der seine Würde bewahrt hat."
        }
      },
      {
        id: 'B',
        label: "Ein rotes Mohnblumen-Bündel auf das Grab gefallener Kameraden legen",
        description: "'In Flanders Fields': Erinnere für immer an die Sinnlosigkeit des Krieges.",
        statChanges: { goetter: 25, volk: 25, ep: 3 },
        skillChanges: { goettlicheAuserwaehltheit: 2 },
        consequenceText: {
          unterstufe: "Die roten Mohnblumen leuchten im Schlamm. Ihr Vermächtnis lautet: Nie wieder Krieg!",
          mittelstufe: "Du schwörst dir, deinen Kindern und Enkeln die Wahrheit über das Sterben zu erzählen.",
          oberstufe: "Unvergängliches Mahnmal gegen den Krieg: Du wirst zum Botschafter der Versöhnung."
        }
      },
      {
        id: 'C',
        label: "Entschlossen gegen die aufkeimende 'Dolchstoßlegende' auftreten",
        description: "Verteidige die Wahrheit: Nicht die Heimat hat verraten, sondern die Generäle haben das Volk verheizt.",
        statChanges: { adel: -10, volk: 35, ep: 3 },
        skillChanges: { politischeGeschicklichkeit: 3 },
        consequenceText: {
          unterstufe: "Du stellst klar: Die Front war geschlagen und ausgehungert. Friede ist kein Verrat!",
          mittelstufe: "Mutige historische Aufklärung: Du bekämpfst die Lügen der antidemokratischen Scharfmacher.",
          oberstufe: "Fundamentaler Beitrag zur demokratischen Erinnerungskultur der Weimarer Republik."
        }
      },
      {
        id: 'D',
        label: "Dein Kriegstagebuch mit dem Datum '11.11.1918, 11 Uhr – Friede' schließen (Einsatz: 3 Briefe)",
        description: "Das letzte Wort gehört dem Leben und der Hoffnung auf eine gerechte Welt.",
        epCost: 3,
        statChanges: { goetter: 30, volk: 30, ep: 5 },
        skillChanges: { politischeGeschicklichkeit: 3, goettlicheAuserwaehltheit: 3 },
        consequenceText: {
          unterstufe: "Du klappst das Buch zu und steckst es an deine Brust. Du fährst heim – als Sieger des Lebens!",
          mittelstufe: "Deine Chronik schließt mit dem heiligsten Wort der Menschheit: Frieden. Du hast die 20 Runden gemeistert!",
          oberstufe: "Vollendung deines Meisterwerks: Ein unsterbliches Denkmal gegen Militarismus und für den europäischen Frieden."
        }
      }
    ],
    lexiconEntry: {
      term: "Der Waffenstillstand von Compiègne (11.11.1918)",
      title: "Das Ende der Urkatastrophe",
      explanation: {
        unterstufe: "Am 11. November 1918 um genau 11 Uhr morgens hörte der Erste Weltkrieg auf. In einem Eisenbahnwagen in Frankreich unterschrieben die Politiker den Waffenstillstand. Die Kanonen schwiegen für immer.",
        mittelstufe: "Zentrum des Waffenstillstands war der Salonwagen von Marschall Foch bei Compiègne. Matthias Erzberger unterzeichnete die harten Bedingungen der Alliierten: Abgabe aller Waffen, U-Boote und Räumung des Rheinlands.",
        oberstufe: "Der Waffenstillstand beendete den Ersten Weltkrieg nach 1.568 Tagen. Rund 10 Millionen Soldaten und 7 Millionen Zivilisten starben. Der Friede von Versailles (1919) und die 'Dolchstoßlegende' belasteten die junge Republik schwer."
      },
      curiosityFact: "Bis heute gedenken Großbritannien, Frankreich, die USA und das Commonwealth am 11. November um 11:00 Uhr mit zwei Schweigeminuten ('Remembrance Day') und tragen rote Papier-Mohnblumen ('Poppies') am Revers."
    }
  }
];

export const WW1_MASTER_GAME: GameDefinition = {
  id: 'game_ww1_official',
  title: 'Im Schützengraben – Der Erste Weltkrieg',
  subtitle: 'Von den Schüssen von Sarajevo bis zum Waffenstillstand von Compiègne',
  era: 'Erster Weltkrieg (1914–1918)',
  archetype: 'conquest_campaign',
  artStyle: 'pixel_art',
  eraThemeId: 'ww1_trenches',
  gradeLevel: 'mittelstufe',
  targetGrades: 'Klassenstufe 7–9 (Regelschule & Gymnasium)',
  coreTopics: [
    'Juli-Krise 1914 & Mobilmachung',
    'Schlieffen-Plan & Marne',
    'Grabenalltag, Schlamm & Ratten',
    'Weihnachtsfrieden 1914',
    'Materialschlacht, MG 08 & Giftgas',
    'Die Hölle von Verdun & Somme',
    'Ostfront & Hunger im Karpatenwinter',
    'Heimatfront & Steckrübenwinter 1916/17',
    'Feldpostbriefe & Zensur',
    'Epochenjahr 1917 & Russischer Zarensturz',
    'U-Boot-Krieg & USA-Kriegseintritt',
    'Tanks an der Somme & Frühjahrsoffensive 1918',
    'Kieler Matrosenaufstand 1918',
    'Waffenstillstand von Compiègne (11.11.1918)'
  ],
  description: 'Erlebe 20 dramatische, multiperspektivische Runden an den Fronten des Ersten Weltkriegs. Triff schwierige Gewissensentscheidungen zwischen Kameradschaft, Verpflegung, seelischer Standhaftigkeit und Menschlichkeit.',
  pillars: [
    { key: 'goetter', label: 'Kameradschaft', icon: '👥', description: 'Zusammenhalt der Schicksalsgemeinschaft im Schützengraben' },
    { key: 'priester', label: 'Verpflegung & Munition', icon: '🍞', description: 'Nahrung, Patronen, Gasmasken und warme Ausrüstung' },
    { key: 'adel', label: 'Seelische Standhaftigkeit', icon: '❤️', description: 'Widerstand gegen Schock, Angst und Traumatisierung' },
    { key: 'volk', label: 'Menschlichkeit & Frieden', icon: '🕊️', description: 'Bewahrung von Gewissen und Mitgefühl gegen die Verrohung' },
  ],
  specialResourceName: 'Feldpost-Briefe',
  specialResourceEmoji: '✉️',
  skillNames: {
    skill1: 'Graben-Überleben',
    skill2: 'Kameradschaftshilfe',
    skill3: 'Kritischer Scharfsinn',
  },
  heroImage: '/assets/ww1_hero.jpg',
  rounds: WW1_ROUNDS,
  shareCode: 'WW101',
};
