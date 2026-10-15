import { GameDefinition, RoundStory } from '../../types/game';

export const ROME_CULTURE_ROUNDS: RoundStory[] = [
  {
    "id": "rome2_r01",
    "roundNumber": 1,
    "locationKey": "pantheon_goetter",
    "locationName": "Das Pantheon & die Götterversammlung",
    "milestoneTitle": "Runde 1: Der Sonnenstrahl des Opaion",
    "imagePath": "/assets/rome2_station_01.jpg",
    "hotspots": [
      {
        "id": "hs_r1_opaion",
        "x": 50,
        "y": 25,
        "label": "Das Opaion (Auge des Himmels)",
        "description": "Die 9 Meter weite Deckenöffnung; einziger Lichteinfall der freitragenden Betonkuppel.",
        "icon": "☀️"
      },
      {
        "id": "hs_r1_beton",
        "x": 30,
        "y": 55,
        "label": "Opus Caementicium",
        "description": "Römischer Gussbeton mit Puzzolanerde, der sogar unter Wasser steinhart aushärtet.",
        "icon": "🏛️"
      },
      {
        "id": "hs_r1_jupiter",
        "x": 75,
        "y": 65,
        "label": "Nische des Jupiter Optimus Maximus",
        "description": "Der höchste Himmelsgott, Vater aller Götter und Beschützer des Römischen Staates.",
        "icon": "⚡"
      }
    ],
    "situation": {
      "unterstufe": "Du stehst mitten im Pantheon, dem Tempel aller Götter! Über dir wölbt sich die größte Kuppel der antiken Welt. Durch eine runde Öffnung im Dach fällt ein goldener Lichtstrahl wie ein Scheinwerfer auf den Marmorboden. Als Gehilfe des Priesters musst du entscheiden, welchem Gott heute das erste Trankopfer dargebracht wird.",
      "mittelstufe": "Das Pantheon (geweiht allen Göttern): Ein architektonisches Wunderwerk des Kaisers Hadrian aus antikem Beton (Opus Caementicium). Die Römer glaubten an die 'Pax Deorum' (den Frieden mit den Göttern) – nur wenn alle olympischen Gottheiten regelmäßig mit Opfern geehrt wurden, blieb das Weltreich geschützt.",
      "oberstufe": "Architektonische Kosmologie und Staatsreligion: Die Rotunde des Pantheons bildet das Universum nach. Das Opaion verbindet die Götterwelt direkt mit dem sakralen Innenraum. Die Erhaltung der Pax Deorum bildete das theologische Rückgrat römischer Staatspolitik."
    },
    "choices": [
      {
        "id": "A",
        "label": "Ein Trankopfer aus Wein und Weihrauch für Jupiter Optimus Maximus weihen",
        "description": "Ehrt den Schirmherrn des Senats und obersten Hüter des Weltreichs.",
        "statChanges": {
          "goetter": 20,
          "adel": 15,
          "volk": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Der Duft von Weihrauch erfüllt die Kuppel: Der Priester nickt zufrieden und segnet Rom.",
          "mittelstufe": "Die Pax Deorum ist gewahrt: Jupiter wacht mit Blitz und Donner über das Schicksal der Stadt.",
          "oberstufe": "Traditionelle Staatsfrömmigkeit: Das Jupiteropfer bekräftigt die religiöse Legitimation senatorischer Macht."
        }
      },
      {
        "id": "B",
        "label": "Kriegsgott Mars und Weisheitsgöttin Minerva mit Waffenopfern anrufen",
        "description": "Erbittet militärischen Schutz für die Grenzlegionen und strategische Klugheit.",
        "statChanges": {
          "priester": 20,
          "goetter": 15,
          "adel": 5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Bronzene Schilde klirren an der Altarstufe! Die Soldaten im Tempel stimmen ein Siegeslied an.",
          "mittelstufe": "Segen für die Legionen: Mars Ultor verspricht Schutz an den fernen Grenzen des Reiches.",
          "oberstufe": "Kultische Kriegsmobilisierung: Die Verknüpfung von Mars und Minerva sichert Tapferkeit und taktische Umsicht."
        }
      },
      {
        "id": "C",
        "label": "Das Volk einladen und gesegnete Opferbrote an arme Bürger verteilen",
        "description": "Verbindet göttlichen Segen mit praktischer Nächstenliebe für die Plebejer.",
        "statChanges": {
          "volk": 25,
          "adel": 10,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Strahlende Kinderaugen: Hunderte Bürger teilen das frische Brot auf den Tempelstufen.",
          "mittelstufe": "Volksnahe Frömmigkeit: Religiöse Großzügigkeit stärkt das Vertrauen der einfachen Menschen.",
          "oberstufe": "Kommensalische Sakralpolitik: Die Verteilung von Opferspeisen dämpft soziale Spannungen im Keim."
        }
      },
      {
        "id": "D",
        "label": "Die Rezeptur des römischen Puzzolan-Betons im Tempelarchiv für künftige Generationen dokumentieren",
        "description": "Setzt Wissen ein, um das Geheimnis unzerstörbarer Betonkuppeln für die Ewigkeit zu bewahren.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "priester": 20,
          "volk": 20,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Ein ewiges Geheimnis: Vulkanasche vom Vesuv macht den Zement härter als jeden Naturstein!",
          "mittelstufe": "Ingenieurhistorischer Meilenstein: Das Rezept für Opus Caementicium sichert Roms monumentale Baukunst.",
          "oberstufe": "Materialwissenschaftliche Konservierung: Puzzolanische Reaktionen schenken römischen Bauten zweitausend Jahre Haltbarkeit."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Das Pantheon & Opus Caementicium",
      "title": "Die größte unbewehrte Betonkuppel der Welt",
      "explanation": {
        "unterstufe": "Das Pantheon in Rom wurde vor fast 2.000 Jahren erbaut und steht bis heute unversehrt. Seine riesige Kuppel hat keinen einzigen Stahlträger, sondern wurde aus antikem Beton gegossen. Oben ist ein 9 Meter breites Loch, durch das die Sonne (und manchmal der Regen) scheint!",
        "mittelstufe": "Das Geheimnis des römischen Betons ('Opus Caementicium') war Puzzolanerde – eine vulkanische Asche vom Golf von Neapel. Sie reagierte mit Kalkwasser und bildete Kristalle, die selbst Erdbeben und Meerwasser standhielten.",
        "oberstufe": "Der Name 'Pan-theon' bedeutet 'allen Göttern geweiht'. Um das enorme Gewicht der Kuppel (über 4.500 Tonnen) zu verringern, nutzten die römischen Architekten nach oben hin immer leichtere Zuschlagstoffe: Basalt unten, Tuffstein in der Mitte und poröser Bimsstein an der Decke."
      },
      "curiosityFact": "Wenn es im Pantheon regnet, fließt das Wasser durch 22 winzige, kaum sichtbare Löcher im leicht gewölbten Marmorboden sofort unterirdisch in die römische Kanalisation ab!"
    }
  },
  {
    "id": "rome2_r02",
    "roundNumber": 2,
    "locationKey": "pantheon_goetter",
    "locationName": "Das Pantheon & die Götterversammlung",
    "milestoneTitle": "Runde 2: Die Sibyllinischen Bücher & Omina der Vorsehung",
    "imagePath": "/assets/rome2_station_01.jpg",
    "hotspots": [
      {
        "id": "hs_r2_buecher",
        "x": 45,
        "y": 55,
        "label": "Die Sibyllinischen Spruchrollen",
        "description": "Geheime Orakeltexte in griechischen Hexametern, verwahrt im Keller des Apollotempels.",
        "icon": "📜"
      },
      {
        "id": "hs_r2_quindecimviri",
        "x": 75,
        "y": 45,
        "label": "Rat der Fünfzehn Priester",
        "description": "Nur sie durften auf Senatsbeschluss in schwersten Staatskrisen die Orakel öffnen.",
        "icon": "🧙‍♂️"
      },
      {
        "id": "hs_r2_komet",
        "x": 25,
        "y": 35,
        "label": "Himmelszeichen (Prodigien)",
        "description": "Blitzeinschläge, Kometen oder zweiköpfige Kälber galten als Warnung der Götter.",
        "icon": "☄️"
      }
    ],
    "situation": {
      "unterstufe": "Ein Erdbeben hat die Stadt erschüttert und am Himmel wurde ein seltsames Licht gesichtet! Das Volk zittert: Haben die Götter ihren Schutz entzogen? Der Senat befiehlt den Priestern, die geheimen Sibyllinischen Bücher zu befragen – uralte Schriftrollen, die über Roms Zukunft entscheiden.",
      "mittelstufe": "Orakelwesen und Staatsreligion: Die Sibyllinischen Bücher wurden der Sage nach von der Seherin von Cumae an den letzten König verkauft. Bei Seuchen, Missernten oder Kriegen suchten die Priester darin nach Ritualen, um den Götterzorn abzuwenden.",
      "oberstufe": "Religionspolitische Krisenbewältigung: Das Aufsuchen von Omina und die Befragung der 'Quindecimviri sacris faciundis' kanalisierten Massenhysterien. Durch Einführung neuer Kulte (z. B. der Magna Mater aus Kleinasien) wurde das römische Pantheon flexibel an Krisen angepasst."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Verse der Sibylle feierlich verlesen und ein zehntägiges Sühneopfer (Supplicatio) anordnen",
        "description": "Beruhigt die Bevölkerung durch gemeinsame Bittprozessionen in allen Tempeln.",
        "statChanges": {
          "goetter": 25,
          "volk": 15,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Tausende Bürger ziehen bekränzt durch die Straßen: Ruhe und Zuversicht kehren nach Rom zurück.",
          "mittelstufe": "Erfolgreiche Sühnefeier: Die kollektive Frömmigkeit bannt die Panik und stärkt den Gemeinsinn.",
          "oberstufe": "Psychologische Krisenintervention: Ritueller Konsens dämpft apokalyptische Gerüchte in der Millionenstadt."
        }
      },
      {
        "id": "B",
        "label": "Einen neuen fremden Gott aus den Provinzen (z. B. Isis oder Mithras) ins Pantheon integrieren",
        "description": "Offenheit für fremde Religionen schafft Loyalität unter Händlern und Soldaten.",
        "statChanges": {
          "volk": 20,
          "priester": 15,
          "adel": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Bunte Prozessionen am Tiberufer: Auch Einwanderer fühlen sich in Rom herzlich willkommen.",
          "mittelstufe": "Religiöser Pluralismus: Roms Toleranz gegenüber fremden Göttern wird zum Bindeglied des Weltreichs.",
          "oberstufe": "Synkretistische Integrationsstrategie: Die 'Evocatio Deorum' entwaffnet Feinde, indem Rom ihre Götter adoptiert."
        }
      },
      {
        "id": "C",
        "label": "Gefälschte Unheilsnachrichten aufdecken und Scharlatane von den Plätzen verweisen",
        "description": "Schützt die Bürger vor Betrügern, die mit Schreckensprophezeiungen Geld erpressen.",
        "statChanges": {
          "adel": 20,
          "goetter": 10,
          "volk": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Betrüger flüchten vom Forum! Roms Richter sorgen für Vernunft und klare Gesetze.",
          "mittelstufe": "Kampf dem Aberglauben: Aufklärung und staatliche Wachsamkeit schützen die Ordnung.",
          "oberstufe": "Eindämmung von 'Superstitio': Die Nobilität wahrt das Monopol über offizielle Vorzeichen gegen private Wahrsager."
        }
      },
      {
        "id": "D",
        "label": "Eine wissenschaftliche Sonnenuhr (Solarium Augusti) mit ägyptischem Obelisken am Marsfeld errichten",
        "description": "Setzt Wissen ein, um die Bewegung der Himmelskörper präzise mit Sonnenstrahlen zu messen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 30,
          "priester": 20,
          "adel": 20,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Ein gigantischer Schattenzeiger! Der Schatten des Obelisken zeigt genau die Jahreszeit an!",
          "mittelstufe": "Triumph der Sonnenastronomie: Augustus verbindet Götterglauben mit exakter Naturwissenschaft.",
          "oberstufe": "Kosmische Herrschaftsarchitektur: Das Solarium Augusti stilisiert den Kaiser als Beherrscher von Zeit und Raum."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Sibyllinischen Bücher & Omina",
      "title": "Wenn die Götter Zeichen senden",
      "explanation": {
        "unterstufe": "Die Römer waren sehr abergläubisch. Vor jedem Krieg oder Gesetz schauten Priester auf Vorzeichen ('Omina'): Flogen Vögel von links oder rechts? Fraßen die heiligen Hühner ihr Korn gierig? Wenn nicht, wurde alles verschoben!",
        "mittelstufe": "Die Sibyllinischen Bücher waren die heiligste Schriftensammlung Roms. Sie durften nur im äußersten Notfall auf Befehl des Senats aufgeschlagen werden, um nachzulesen, wie man die Götter besänftigen konnte.",
        "oberstufe": "Im Gegensatz zu monotheistischen Religionen kannte Rom keine 'Ketzer'. Jeder fremde Gott (von Isis aus Ägypten bis zu keltischen Quellgöttinnen) konnte verehrt werden, solange der traditionelle Staatskult nicht gefährdet wurde."
      },
      "curiosityFact": "Bei Feldzügen nahmen die Legionäre 'heilige Hühner' im Käfig mit: Priester streuten Körner aus – fraßen die Hühner eifrig, galt die Schlacht als gewonnen; verweigerten sie das Futter, drohte Unheil!"
    }
  },
  {
    "id": "rome2_r03",
    "roundNumber": 3,
    "locationKey": "domus_lararium",
    "locationName": "Das römische Haus (Domus) & der Hausaltar",
    "milestoneTitle": "Runde 3: Im Atrium des Patrizierhauses",
    "imagePath": "/assets/rome2_station_02.jpg",
    "hotspots": [
      {
        "id": "hs_r3_impluvium",
        "x": 45,
        "y": 65,
        "label": "Impluvium (Regenwasserbecken)",
        "description": "Sammelt kühles Regenwasser durch das offene Dachfenster (Compluvium).",
        "icon": "💧"
      },
      {
        "id": "hs_r3_lararium",
        "x": 75,
        "y": 55,
        "label": "Hausaltar (Lararium)",
        "description": "Schrein für die Hausgötter (Laren und Penaten) mit kleinen Bronzefigürchen.",
        "icon": "🏺"
      },
      {
        "id": "hs_r3_mosaik",
        "x": 25,
        "y": 75,
        "label": "Hundemosaik ('Cave Canem')",
        "description": "Warnung an der Haustür: 'Hüte dich vor dem Hund!'",
        "icon": "🐕"
      }
    ],
    "situation": {
      "unterstufe": "Du betrittst die prächtige Stadtwohnung (Domus) einer reichen römischen Familie. Von der lauten Straße gelangst du in das kühle, ruhige Atrium. In der Mitte schimmert klares Wasser in einem Marmorbecken. An der Wand steht das Lararium – der kleine Schrein der Hausgötter. Der Hausvater (Pater Familias) ruft alle Hausbewohner zum Morgengebet.",
      "mittelstufe": "Das Alltagsleben der römischen Oberschicht: Ein Domus war Schutzraum und Repräsentationsort zugleich. Hier empfing der Hausherr am frühen Morgen seine Klienten (Bittsteller), während Sklaven das Mahl im Peristyl-Garten vorbereiteten.",
      "oberstufe": "Sozialstruktur der Familia: Der 'Pater Familias' besaß absolute Autorität (Patria Potestas) über Kinder, Sklaven und Vermögen. Das Lararium symbolisierte die Ahnenkontinuität; Hauskulte waren die Keimzelle römischer Frömmigkeit (Pietas)."
    },
    "choices": [
      {
        "id": "A",
        "label": "Den Laren und Penaten Früchte, Honig und Wein auf dem Hausaltar opfern",
        "description": "Pflegt die häusliche Frömmigkeit (Pietas) für das Wohl der ganzen Familie.",
        "statChanges": {
          "goetter": 20,
          "adel": 15,
          "volk": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Kleine Flammen leuchten am Altar: Ein Gefühl von Frieden und Schutz erfüllt das ganze Haus.",
          "mittelstufe": "Gelebte Pietas: Die Pflege der Hausgötter stärkt den Zusammenhalt zwischen Familie und Dienern.",
          "oberstufe": "Kultische Sozialdisziplinierung: Das Hausopfer festigt die moralische Autorität des Pater Familias."
        }
      },
      {
        "id": "B",
        "label": "Die Klienten bei der morgendlichen Salutatio mit Getreidespenden und Rat unterstützen",
        "description": "Verbindet Reichtum mit sozialer Verantwortung gegenüber ärmeren Bürgern.",
        "statChanges": {
          "volk": 25,
          "adel": 15,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Dankbare Bürger verlassen das Atrium: Sie werden dich bei den nächsten Wahlen treu unterstützen!",
          "mittelstufe": "Das Klientelsystem in Aktion: Gegenseitige Loyalität sichert sozialen Frieden und politische Macht.",
          "oberstufe": "Patronage-Netzwerke: Das römische Klientelwesen stützt das gesellschaftliche Gleichgewicht ohne Wohlfahrtsstaat."
        }
      },
      {
        "id": "C",
        "label": "Das Peristyl mit schattigen Säulengängen, Wasserspielen und Zypressen verschönern",
        "description": "Schafft eine Oase der Ruhe und Philosophie abseits des Straßenlärms.",
        "statChanges": {
          "adel": 20,
          "priester": 15,
          "volk": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Wasser plätschert leise: Gäste bewundern die bunten Mosaike und die Statuen der Dichter.",
          "mittelstufe": "Häuschliche Baukultur: Der Peristylgarten vereint griechische Eleganz mit römischer Gemütlichkeit.",
          "oberstufe": "Privatarchitektur der Nobilität: Repräsentative Villenkultur demonstriert Bildung ('Otium') und Status."
        }
      },
      {
        "id": "D",
        "label": "Eine Fußbodenheizung (Hypokaustum) für die privaten Baderäume einbauen lassen",
        "description": "Setzt Wissen ein, um heiße Rauchgase unter Hohlziegeln für warme Winterbäder zu leiten.",
        "epCost": 2,
        "statChanges": {
          "priester": 25,
          "adel": 20,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Herrlich warm! Barfuß auf warmem Marmor laufen, während draußen der eisige Winterwind pfeift!",
          "mittelstufe": "Geniale Heiztechnik: Das Hypokaustum macht private Villen selbst im Winter behaglich warm.",
          "oberstufe": "Thermisches Wohnkomfort-Design: Hohlziegelwände (Tubuli) leiten Wärme gleichmäßig durch alle Räume."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Domus & Lararium (Hausgötter)",
      "title": "Das römische Wohnhaus und die Familie",
      "explanation": {
        "unterstufe": "Ein römisches Stadthaus der Reichen hieß 'Domus'. In der Mitte lag das Atrium mit einem Loch im Dach, durch das Regenwasser in ein Becken fiel. An der Wand stand das 'Lararium' – ein kleiner Altar mit Figürchen für die Schutzgötter des Hauses (Laren).",
        "mittelstufe": "Arme Römer konnten sich kein Domus leisten; sie wohnten in engen, dunklen Mietskasernen ('Insulae'). Im Domus gab es oft prächtige Bodenmosaike – besonders beliebt war der Wachhund mit der Aufschrift 'Cave Canem' ('Hüte dich vor dem Hund').",
        "oberstufe": "Der Hausherr ('Pater Familias') hatte enorme Rechte. Die Hausgötter teilten sich auf: Die 'Laren' schützten das Haus und Grundstück, die 'Penaten' bewachten die Vorratskammer und das Essen."
      },
      "curiosityFact": "In Pompeji fand man bei fast jedem ausgegrabenen Haus ein Lararium – oft wunderschön bemalt mit Schlangen, die als Symbole für Fruchtbarkeit und Glück galten!"
    }
  },
  {
    "id": "rome2_r04",
    "roundNumber": 4,
    "locationKey": "domus_lararium",
    "locationName": "Das römische Haus (Domus) & der Hausaltar",
    "milestoneTitle": "Runde 4: Schule, Wachstafel & der Griffel (Stilus)",
    "imagePath": "/assets/rome2_station_02.jpg",
    "hotspots": [
      {
        "id": "hs_r4_wachstafel",
        "x": 45,
        "y": 65,
        "label": "Wachstafel (Tabula cerata)",
        "description": "Holztäfelchen mit Bienenwachs; mit dem spitzen Griffel geritzt, mit der flachen Seite gelöscht.",
        "icon": "📝"
      },
      {
        "id": "hs_r4_abakus",
        "x": 75,
        "y": 60,
        "label": "Römischer Abakus (Rechenbrett)",
        "description": "Mit Bronze-Rechensteinen lösten Schüler komplizierte Multiplikationen und Divisionen.",
        "icon": "🧮"
      },
      {
        "id": "hs_r4_lehrer",
        "x": 25,
        "y": 50,
        "label": "Griechischer Hauslehrer (Grammaticus)",
        "description": "Gelehrte Sklaven oder Freigelassene unterrichteten Latein, Griechisch und Rhetorik.",
        "icon": "👨‍🏫"
      }
    ],
    "situation": {
      "unterstufe": "Morgengrauen in Rom: Schulkinder eilen mit ihren Wachstafeln und Griffeln durch die Gassen. In einer Säulenhalle am Marktplatz sitzt der Lehrer. Streng prüft er die Hausaufgaben: Rechnen mit römischen Ziffern (I, V, X, L, C, D, M) und Verse von Homer auf Griechisch. Wer trödelt, spürt das Weidenstöckchen!",
      "mittelstufe": "Bildung im antiken Rom: Es gab keine staatlichen Schulen. Reiche Familien leisteten sich gebildete griechische Hauslehrer; bürgerliche Kinder besuchten Privatschulen im Freien. Mädchen lernten oft zu Hause Weben, Lesen und Haushaltsführung.",
      "oberstufe": "Das antike Bildungssystem: Die Stufen gliederten sich in Elementarunterricht (Ludi magister: Lesen, Schreiben, Rechnen), Grammatikschule (Grammaticus: Literatur, Geografie) und Rhetorenschule (Rhetor: Redekunst als Schlüssel zu Amt und Senat)."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Schüler im Rechnen auf dem Abakus und Buchführung für den Handel drillen",
        "description": "Praktisches Wissen: Nur wer Zahlen beherrscht, kann später ein Kontor leiten.",
        "statChanges": {
          "priester": 20,
          "adel": 15,
          "volk": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Rechensteine klackern flink! Die Schüler berechnen Getreidepreise in Sekundenschnelle.",
          "mittelstufe": "Mathematische Kompetenz: Der Abakus macht römische Kaufleute zu gefürchteten Rechnern.",
          "oberstufe": "Ökonomische Grundbildung: Solide Rechenfertigkeiten sichern die kaufmännische Effizienz des Reiches."
        }
      },
      {
        "id": "B",
        "label": "Griechische Epen und die Kunst der freien Rede (Rhetorik) auf dem Forum üben",
        "description": "Schult Stimme und Argumentation für spätere Auftritte vor Gericht und Senat.",
        "statChanges": {
          "goetter": 20,
          "adel": 20,
          "volk": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Stolze Stimmen hallen über den Platz: Die jungen Redner begeistern Passanten mit Ciceros Worten.",
          "mittelstufe": "Meister der Beredsamkeit: Wer Menschen überzeugen kann, beherrscht später die Politik Roms.",
          "oberstufe": "Rhetorische Elitenausbildung: Die Beredsamkeit ('Eloquenz') ist das wichtigste Werkzeug römischer Staatsmänner."
        }
      },
      {
        "id": "C",
        "label": "Auch Töchtern und begabten Sklavenkindern vollen Zugang zum Unterricht ermöglichen",
        "description": "Fördert Talente unabhängig von Geschlecht und Stand zum Wohle der Stadt.",
        "statChanges": {
          "volk": 25,
          "adel": -5,
          "goetter": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Große Wissbegierde: Junge Mädchen schreiben fehlerfreie Briefe und verwalten Familiengüter.",
          "mittelstufe": "Bildungsoffensive: Gebildete Frauen wie Cornelia leiten Salons und prägen das Kulturleben.",
          "oberstufe": "Inklusive Bildungsförderung: Erweiterte Schriftkundigkeit stärkt das administrative Fundament."
        }
      },
      {
        "id": "D",
        "label": "Eine öffentliche Bibliothek mit Pergament- und Papyrusrollen am Trajansforum stiften",
        "description": "Setzt Wissen ein, um die gesammelten Schriften der griechisch-römischen Welt allen Bürgern zu öffnen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 30,
          "volk": 25,
          "adel": 20,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Ein Palast des Wissens! Zehntausende Schriftrollen stehen jedem Bürger kostenlos offen.",
          "mittelstufe": "Die Bibliotheca Ulpia: Zwei Abteilungen für griechische und lateinische Schriften machen Rom weltberühmt.",
          "oberstufe": "Kulturelle Enzyklopädie: Öffentliche Bibliotheken bewahren das geistige Welterbe der klassischen Antike."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Wachstafel & Römische Ziffern",
      "title": "Schule vor zweitausend Jahren",
      "explanation": {
        "unterstufe": "Papier gab es noch nicht. Die Schüler ritzten Buchstaben mit einem spitzen Eisenstab ('Stilus') in ein Holztäfelchen, das mit Bienenwachs gefüllt war. Mit dem flachen Ende des Stifts strich man das Wachs glatt – so konnte man die Tafel immer wieder neu beschreiben!",
        "mittelstufe": "Das Sprichwort 'Tabula rasa machen' (reinen Tisch machen / von vorn anfangen) stammt genau von dieser Wachstafel: Man strich das Wachs glatt, um Platz für Neues zu schaffen.",
        "oberstufe": "Römische Ziffern (I, V, X, L, C, D, M) kannten keine Null. Komplizierte Rechnungen führte man auf dem 'Abakus' durch – einem Rechenbrett mit beweglichen Metallkügelchen."
      },
      "curiosityFact": "Unser deutsches Wort 'Stil' (wie in Schreibstil oder Modestil) kommt direkt vom lateinischen 'Stilus' – dem Schreibgriffel der Römer!"
    }
  },
  {
    "id": "rome2_r05",
    "roundNumber": 5,
    "locationKey": "priester_vestalinnen",
    "locationName": "Tempel der Vesta & die heiligen Jungfrauen",
    "milestoneTitle": "Runde 5: Das ewige Feuer der Vesta",
    "imagePath": "/assets/rome2_station_03.jpg",
    "hotspots": [
      {
        "id": "hs_r5_vesta",
        "x": 50,
        "y": 55,
        "label": "Rundtempel der Vesta",
        "description": "Im Inneren brennt Tag und Nacht das heilige Staatsfeuer; kein Standbild, nur die Flamme.",
        "icon": "🔥"
      },
      {
        "id": "hs_r5_vestalin",
        "x": 75,
        "y": 65,
        "label": "Oberste Vestalin (Virgo Vestalis Maxima)",
        "description": "In weißem Gewand mit rotem Stirnband; genoss höchste Ehren und Begnadigungsrechte.",
        "icon": "👰"
      },
      {
        "id": "hs_r5_palladium",
        "x": 25,
        "y": 70,
        "label": "Das heilige Palladium",
        "description": "Geheime uralte Athenastatue aus Troja, die Rom vor jedem Untergang schützt.",
        "icon": "🛡️"
      }
    ],
    "situation": {
      "unterstufe": "Mitten auf dem Forum Romanum steht der runde Tempel der Göttin Vesta. Nur sechs auserwählte Priesterinnen – die Vestalinnen – dürfen ihn betreten. Tag und Nacht hüten sie das ewige Feuer. Die Römer glauben fest: Wenn dieses Feuer jemals erlischt, geht das gesamte Römische Reich unter! Als eine schwere Windböe die Glut bedroht, schlägt dein Herz schneller.",
      "mittelstufe": "Die Vestalinnen: Das angesehenste Priesterinnenkollegium Roms. Mit sechs bis zehn Jahren wurden adelige Mädchen für 30 Jahre in den Dienst berufen. Sie legten ein striktes Keuschheitsgelübde ab. Als Gegenleistung besaßen sie unglaubliche Privilegien: Freie Vermögensverwaltung, Ehrenplätze und das Recht, zum Tode Verurteilte zu begnadigen.",
      "oberstufe": "Sakrale Staatsordnung und Keuschheitstabu: Das Vestalinnenkollegium verkörperte die Unversehrtheit des römischen Staates. Erlosch das Feuer oder brach eine Vestalin ihr Gelübde (Incestus), drohte ihr die lebendige Einmauerung im 'Campus Sceleratus' (Feld des Frevels)."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das heilige Feuer mit trockenem Eichenholz und Gebeten behutsam neu anfachen",
        "description": "Schützt die ewige Flamme vor jedem Erlöschen durch sorgfältige Wache.",
        "statChanges": {
          "goetter": 25,
          "adel": 15,
          "volk": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Flamme lodert wieder hell und golden! Ein Seufzer der Erleichterung geht durch ganz Rom.",
          "mittelstufe": "Das Staatsfeuer brennt: Rom ist sicher; die Götter lächeln über die Treue der Priesterinnen.",
          "oberstufe": "Bewahrung des Staatsheiligtums: Du sicherst die rituelle Kontinuität der ewigen Flamme."
        }
      },
      {
        "id": "B",
        "label": "Eine zum Tode verurteilte Person begnadigen, die dem Wagen der Vestalin begegnet ist",
        "description": "Übt das uralte heilige Gnadenrecht der Vestalinnen aus.",
        "statChanges": {
          "volk": 25,
          "adel": -5,
          "goetter": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Der Verurteilte weint vor Dankbarkeit: Der bloße Blick der Vestalin schenkt ihm das Leben!",
          "mittelstufe": "Heilige Gnade: Das Volk preist die Barmherzigkeit der obersten Priesterin.",
          "oberstufe": "Ausübung sakraler Jurisdiktion: Das Begnadigungsrecht der Vestalinnen steht über jedem weltlichen Richterspruch."
        }
      },
      {
        "id": "C",
        "label": "Die Vorratskammern des Atrium Vestae mit Salzmehl (Mola Salsa) auffüllen",
        "description": "Bereitet das heilige Spelzmehl vor, mit dem jedes Staatsopfer in Rom bestreut werden muss.",
        "statChanges": {
          "priester": 20,
          "goetter": 15,
          "adel": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Reine Körner: Das Opfermehl wird nach uraltem Ritual gemahlen und geweiht.",
          "mittelstufe": "Ritueller Vorrat: Ohne Mola Salsa kann kein Konsul ein gültiges Opfer darbringen.",
          "oberstufe": "Kultische Monopolstellung: Die Zubereitung der Mola Salsa bindet die Magistrate an das Vestalinnenkollegium."
        }
      },
      {
        "id": "D",
        "label": "Das Atrium Vestae mit 50 Zimmern, Marmorstatuen und Heizung prachtvoll erweitern",
        "description": "Setzt Wissen ein, um den Wohnpalast der Vestalinnen zu einem architektonischen Juwel zu machen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 30,
          "adel": 20,
          "priester": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Prachtvoller Säulenhof! Marmorbecken spiegeln die Statuen der berühmtesten Obervestalinnen.",
          "mittelstufe": "Monumentale Ehrung: Das Haus der Vestalinnen wird zum würdigen Palast für Roms heiligste Frauen.",
          "oberstufe": "Sakrale Baupolitik: Repräsentative Architektur unterstreicht die herausragende Rolle der Priesterinnen im Staat."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Vestalinnen & das ewige Feuer",
      "title": "Roms mächtigste Priesterinnen",
      "explanation": {
        "unterstufe": "Vesta war die Göttin des Herdfeuers. Im runden Tempel der Vesta gab es keine Götterstatue, sondern nur ein brennendes Feuer. Sechs 'Vestalinnen' hüteten diese Flamme 30 Jahre lang. Erlosch das Feuer, galt das als Vorbote des Weltuntergangs.",
        "mittelstufe": "Vestalinnen genossen Rechte, von denen andere römische Frauen nur träumen konnten: Sie durften ein eigenes Testament machen, fuhren in Prunkwagen durch Rom und hatten Ehrenplätze bei Wagenrennen und Gladiatorenkämpfen.",
        "oberstufe": "Wenn eine Vestalin auf der Straße zufällig einem Verbrecher begegnete, der zur Hinrichtung geführt wurde, war dieser sofort begnadigt und frei – vorausgesetzt, die Begegnung war unabsichtlich."
      },
      "curiosityFact": "Erlosch das heilige Feuer doch einmal, durfte es niemals mit normalen Funken entzündet werden – die Priesterinnen mussten es mit zwei Hölzern oder Sonnenstrahlen durch einen Brennspiegel neu entfachen!"
    }
  },
  {
    "id": "rome2_r06",
    "roundNumber": 6,
    "locationKey": "priester_vestalinnen",
    "locationName": "Tempel der Vesta & die heiligen Jungfrauen",
    "milestoneTitle": "Runde 6: Die Priesterkollegien & der Pontifex Maximus",
    "imagePath": "/assets/rome2_station_03.jpg",
    "hotspots": [
      {
        "id": "hs_r6_pontifex",
        "x": 45,
        "y": 50,
        "label": "Pontifex Maximus",
        "description": "Der oberste Priester Roms (Brückenbauer zu den Göttern); später Titel aller Kaiser.",
        "icon": "👑"
      },
      {
        "id": "hs_r6_augur",
        "x": 75,
        "y": 60,
        "label": "Der Augur mit dem Lituus-Stab",
        "description": "Zieht den Himmelskreis (Templum) und beobachtet Flug und Rufe der Vögel.",
        "icon": "🦅"
      },
      {
        "id": "hs_r6_kalender",
        "x": 25,
        "y": 70,
        "label": "Fastenkalender (Fasti)",
        "description": "Bestimmt Gerichtstage (Fas) und Feiertage (Nefas), an denen Politik verboten war.",
        "icon": "📅"
      }
    ],
    "situation": {
      "unterstufe": "Wer regiert die Götterwelt? Der oberste Priester Roms trägt den geheimnisvollen Titel 'Pontifex Maximus' – wörtlich: der größte Brückenbauer zwischen Mensch und Göttern. Neben ihm stehen die Augurn, die mit einem gekrümmten Stab in den Himmel blicken. Kein Gesetz darf beschlossen werden, wenn die Vögel ein böses Omen kreischen!",
      "mittelstufe": "Die Organisation der römischen Staatsreligion: Priester waren keine isolierten Mönche, sondern führende Politiker und Senatoren. Religion und Politik waren untrennbar verwoben: Wer den Kalender der Glücks- und Unglückstage (Dies fasti und nefasti) kontrollierte, konnte jede Volksabstimmung verschieben.",
      "oberstufe": "Politisierung des Sakralrechts: Das Ius Sacrum als Hebel senatorischer Herrschaft. Durch die Behauptung ungünstiger Vorzeichen ('Obnuntiatio') blockierten konservative Magistrate unliebsame Reformgesetze. Caesar und Augustus eroberten das Amt des Pontifex Maximus als Fundament monarchischer Sakralmacht."
    },
    "choices": [
      {
        "id": "A",
        "label": "Den Fastenkalender unbestechlich und transparent für alle Bürger am Forum aushängen",
        "description": "Schafft Rechtssicherheit: Jeder soll wissen, an welchen Tagen Gericht gehalten werden darf.",
        "statChanges": {
          "volk": 25,
          "adel": 15,
          "goetter": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Klarheit für alle: Die Bürger blicken auf die weiße Wand und wissen genau, wann gewählt wird.",
          "mittelstufe": "Transparenz der Religion: Die Veröffentlichung der Fasti bricht die geheime Willkür der Priester.",
          "oberstufe": "Demokratisierung des Kalenders: Die Veröffentlichung des Sakralkalenders stärkt die bürgerliche Rechtsordnung."
        }
      },
      {
        "id": "B",
        "label": "Ein schlechtes Vogelzeichen (Obnuntiatio) ausrufen, um ein gefährliches Gesetz im Senat zu stoppen",
        "description": "Nutzt religiöse Vorzeichen als politisches Veto zur Bewahrung der Tradition.",
        "statChanges": {
          "adel": 20,
          "goetter": 10,
          "volk": -10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Der Blitz schlägt ein! Die Versammlung muss abgebrochen werden; das Gesetz ist vertagt.",
          "mittelstufe": "Politisches Sakralveto: Der Augur beweist die Macht der Religion über die Politik.",
          "oberstufe": "Instrumentalisierung der Auspizien: Konservative Kräfte nutzen sakrale Vorbehalte gegen Reformen."
        }
      },
      {
        "id": "C",
        "label": "Ein neues Fest für Ceres und Bacchus mit Weinproben und Fruchtbarkeitstänzen stiften",
        "description": "Ehrt die Götter des Ackerbaus und schenkt dem Volk Freude nach der harten Ernte.",
        "statChanges": {
          "volk": 25,
          "adel": 10,
          "goetter": 15
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Wein fließt und Trommeln schlagen: Fröhliches Lachen hallt bis spät in die Nacht über die Hügel.",
          "mittelstufe": "Lebendige Volksfeste: Die Cerialia und Bacchanalien verbinden Fruchtbarkeitskult mit Lebensfreude.",
          "oberstufe": "Agrarreligiöse Integration: Feste der Fruchtbarkeitsgötter stärken das Band zwischen Stadt und Land."
        }
      },
      {
        "id": "D",
        "label": "Das Priesteramt des Pontifex Maximus für alle Zeiten untrennbar mit dem Kaisertum verbinden",
        "description": "Setzt Wissen ein, um weltliche und religiöse Herrschaft für das Prinzipat zu verschmelzen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 30,
          "adel": 20,
          "priester": 20,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Oberster Kaiser und oberster Priester in einer Person: Seine Macht ist absolut heilig!",
          "mittelstufe": "Die Vollendung des Prinzipats: Augustus als Pontifex Maximus vereint Staat und Himmel.",
          "oberstufe": "Sakrale Herrschaftsmonopolisierung: Der Kaisertitel Pontifex Maximus überdauert sogar das Heidentum bis zum Papsttum."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Pontifex Maximus & die Augurn",
      "title": "Priester, Politiker & Brückenbauer",
      "explanation": {
        "unterstufe": "Der oberste Priester in Rom hieß 'Pontifex Maximus' ('der größte Brückenbauer'). Er leitete alle Priester und wachte über die Einhaltung der Rituale. Später übernahmen die römischen Kaiser dieses Amt – und bis heute nennt sich der Papst in Rom auf Latein 'Pontifex Maximus'!",
        "mittelstufe": "Die 'Augurn' waren die Wahrsager des Staates. Mit einem Krummstab ('Lituus') teilten sie den Himmel in Bezirke ein und deuteten Flugrichtung und Schreie von Adlern und Geiern. Gab es ungünstige Vorzeichen, durfte der Senat keine Gesetze beschließen.",
        "oberstufe": "Priesterämter in Rom waren keine Vollzeitberufe. Senatoren wie Cicero oder Caesar waren gleichzeitig Feldherren, Richter und Priester. Dies verhinderte die Entstehung einer eigenen, unabhängigen Priesterkaste wie in Ägypten."
      },
      "curiosityFact": "Das Wort 'Inauguration' (die feierliche Amtseinführung eines US-Präsidenten) kommt direkt vom römischen Wort 'Augur' – früher bedeutete es wörtlich: 'Die Götterzeichen für ein Amt einholen'!"
    }
  },
  {
    "id": "rome2_r07",
    "roundNumber": 7,
    "locationKey": "aqueduct_ingenieure",
    "locationName": "Das Aquädukt & Römische Ingenieurskunst",
    "milestoneTitle": "Runde 7: Wasser über Täler – Der Pont du Gard",
    "imagePath": "/assets/rome2_station_04.jpg",
    "hotspots": [
      {
        "id": "hs_r7_arkaden",
        "x": 50,
        "y": 35,
        "label": "Dreistöckige Bogenarkaden",
        "description": "Tonnenschwere Kalksteinblöcke, fugenlos ohne Mörtel meisterhaft verkeilt.",
        "icon": "🏛️"
      },
      {
        "id": "hs_r7_rinne",
        "x": 48,
        "y": 15,
        "label": "Die Wasserrinne (Specus)",
        "description": "Abgedeckter Kanal, mit Ziegelmehl und hydraulischem Mörtel wasserdicht verputzt.",
        "icon": "💧"
      },
      {
        "id": "hs_r7_groma",
        "x": 25,
        "y": 70,
        "label": "Römische Groma",
        "description": "Visierkreuz mit Lotbleien für millimetergenaues Gefälle über 50 Kilometer.",
        "icon": "📐"
      }
    ],
    "situation": {
      "unterstufe": "Aus fernen Bergen sprudelt glasklares Quellwasser – doch wie kommt es in die Millionenstadt Rom? Durch Aquädukte! Auf gewaltigen, dreistöckigen Steinbögen fließt das Wasser über tiefe Flusstäler. Das Unglaubliche: Es gibt keine Pumpen! Das Wasser fließt ganz allein durch ein minimales Gefälle – nur wenige Zentimeter auf einen Kilometer!",
      "mittelstufe": "Meisterleistung der antiken Hydraulik: Elf Aquädukte versorgten Rom täglich mit über einer Milliarde Litern frischem Gebirgswasser. Mit Vermessungsgeräten wie Groma und Chorobates berechneten römische Ingenieure Gefälle von nur 1:3000 über Strecken von 50 Kilometern.",
      "oberstufe": "Infrastruktur als zivilisatorisches Fundament: Sextus Iulius Frontinus, oberster Wasseraufseher (Curator Aquarum), beschrieb in seinem Werk 'De aquaeductu' die minutiöse Instandhaltung, Leitungsquerschnitte und Diebstahlsicherungen privater Bleirohre."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Gefälle mit der Groma auf exakt 34 Zentimeter pro Kilometer einnivellieren",
        "description": "Präzisionsarbeit: Zu steil zerreißt das Wasser den Putz, zu flach bleibt es stehen.",
        "statChanges": {
          "priester": 25,
          "volk": 15,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Es rauscht! Das kühle Gebirgswasser fließt ruhig und stetig über das Tal nach Rom.",
          "mittelstufe": "Ingenieurtechnische Perfektion: Das minimale Gefälle garantiert reißfreien Dauerfluss.",
          "oberstufe": "Hydrodynamische Meisterleistung: Präzises Gefälle verhindert Sedimentation und Kanalerosion."
        }
      },
      {
        "id": "B",
        "label": "Die Rinne mit wasserfestem 'Opus Signinum' (Ziegelmehlmörtel) abdichten",
        "description": "Verhindert jeden Tropfenverlust auf der langen Reise durch Felsen und Täler.",
        "statChanges": {
          "priester": 20,
          "adel": 15,
          "volk": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Dicht wie Glas! Nicht ein einziger Tropfen sickert durch die Fugen des mächtigen Aquädukts.",
          "mittelstufe": "Hydraulischer Mörtel: Die Kalk-Ziegelmehlmischung widersteht jahrhundertelangem Wasserabrieb.",
          "oberstufe": "Baustofftechnologische Innovation: Wasserundurchlässiger Mörtel schützt die Arkaden vor Auswaschung."
        }
      },
      {
        "id": "C",
        "label": "Öffentliche Trinkbrunnen (Lacus) an jeder Straßenecke für die armen Bürger bauen",
        "description": "Frisches Wasser ist Menschenrecht: Jeder Plebejer soll kostenlos trinken können.",
        "statChanges": {
          "volk": 30,
          "adel": 10,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Kühles Nass für alle! Kinder füllen Krüge und das Volk preist die Güte der Stadtverwaltung.",
          "mittelstufe": "Öffentliche Daseinsvorsorge: Kostenlose Laufbrunnen verhindern Seuchen und Cholera.",
          "oberstufe": "Hygienische Revolution der Metropole: Ständige Frischwasserzufuhr reinigt zugleich die Straßengräben."
        }
      },
      {
        "id": "D",
        "label": "Ein monumentales Wasserturm-Verteilsystem (Castellum Aquae) mit Bleirohren stiften",
        "description": "Setzt Wissen ein, um das Wasser nach Priorität zu steuern: Zuerst Brunnen, dann Thermen, dann Paläste.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "priester": 25,
          "volk": 20,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Geniale Schleusen: Bei Trockenheit fließen die Paläste trocken, aber die Brunnen des Volkes sprudeln weiter!",
          "mittelstufe": "Das Castellum Aquae: Frontinus' dreistufiges Verteilsystem sichert die Notversorgung der Stadt.",
          "oberstufe": "Systemische Ressourcensteuerung: Prioritäre Wassersouveränität garantiert soziale Stabilität in Dürrezeiten."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Römischen Aquädukte",
      "title": "Eine Milliarde Liter Frischwasser täglich",
      "explanation": {
        "unterstufe": "Aquädukte waren antike Wasserleitungen. Das Wort kommt von 'Aqua' (Wasser) und 'ducere' (führen). Weil es keine Pumpen gab, bauten die Römer Brücken mit leichtem Gefälle, sodass das Wasser aus bis zu 90 km Entfernung von selbst in die Stadt floss.",
        "mittelstufe": "Rom hatte über 1.200 öffentliche Brunnen, 900 Bäder und 11 große Aquädukte. Jeder Einwohner Roms verbrauchte täglich fast 1.000 Liter Wasser – mehr als ein Mensch heute in einer modernen europäischen Großstadt!",
        "oberstufe": "Der berühmteste erhaltene Aquädukt ist der 'Pont du Gard' in Südfrankreich: 49 Meter hoch, drei Bogenreihen, erbaut aus tonnenschweren Quadern ganz ohne Mörtel. Er transportierte 20.000 Kubikmeter Wasser täglich nach Nîmes."
      },
      "curiosityFact": "Um das Gefälle zu messen, nutzten römische Ingenieure ein 6 Meter langes Holzbrett mit einer Wasserrinne oben ('Chorobates') – die antike Wasserwaage!"
    }
  },
  {
    "id": "rome2_r08",
    "roundNumber": 8,
    "locationKey": "aqueduct_ingenieure",
    "locationName": "Das Aquädukt & Römische Ingenieurskunst",
    "milestoneTitle": "Runde 8: Die Cloaca Maxima – Unterirdische Wunderwelt",
    "imagePath": "/assets/rome2_station_04.jpg",
    "hotspots": [
      {
        "id": "hs_r8_cloaca",
        "x": 45,
        "y": 65,
        "label": "Cloaca Maxima am Tiber",
        "description": "Gewaltiges Tonnengewölbe aus Tuffstein; leitet Abwässer direkt in den Fluss.",
        "icon": "🌊"
      },
      {
        "id": "hs_r8_tarquinius",
        "x": 75,
        "y": 45,
        "label": "Trockenlegung der Sümpfe",
        "description": "Erst die Kanalisation machte das sumpfige Tal zum Forum Romanum bebaubar.",
        "icon": "⛏️"
      },
      {
        "id": "hs_r8_cloacina",
        "x": 25,
        "y": 70,
        "label": "Schrein der Venus Cloacina",
        "description": "Die Göttin der Reinheit schützte Rom vor Verstopfung und Gestank.",
        "icon": "✨"
      }
    ],
    "situation": {
      "unterstufe": "Unter den Straßen Roms tost ein unterirdischer Fluss! Das Forum Romanum war früher ein fauliger, mückenschwärmender Sumpf. Vor 2.500 Jahren gruben die Römer einen gewaltigen Tunnel: Die 'Cloaca Maxima' (der größte Abwasserkanal). Er war so riesig, dass ein beladener Heuwagen darin fahren konnte! Doch die Kanäle müssen gereinigt werden.",
      "mittelstufe": "Die antike Stadtentwässerung: Die Cloaca Maxima spülte Straßenabfälle, Schlammwasser und Latrinengruben mit Überschusswasser der Aquädukte direkt in den Tiber. Römische Schriftsteller nannten sie stolz eines der drei Wunderwerke Roms (neben Straßen und Aquädukten).",
      "oberstufe": "Epidemiologische Urbanistik: Ohne die permanente Spülung durch Aquädukt-Überlaufwasser wäre Rom im Schmutz versunken. Plinius der Ältere staunte, dass die Gewölbe seit Jahrhunderten Erdbeben und Fluten trotzten."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Überschusswasser aller Kaiserthermen direkt in die Cloaca zur Spülung leiten",
        "description": "Nutzt gebrauchtes Badewasser als permanente Spülflut gegen Verstopfung und Gestank.",
        "statChanges": {
          "volk": 25,
          "priester": 20,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Eine gewaltige Flut braust unterirdisch durch die Rohre! Alle Kanäle werden blitzsauber gespült.",
          "mittelstufe": "Perfektes Spülsystem: Die ständige Wasserwucht verhindert Faulgase und Seuchen.",
          "oberstufe": "Synergistisches Kanalmanagement: Kaskadennutzung von Thermalwasser optimiert die städtische Hygiene."
        }
      },
      {
        "id": "B",
        "label": "Gewölbeinspektionen mit Kähnen durchführen und eingestürzte Tuffsteine ersetzen",
        "description": "Wartung für die Ewigkeit: Risse flicken, bevor Straßen im Herzen Roms absacken.",
        "statChanges": {
          "priester": 20,
          "adel": 15,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Fackeln spiegeln sich im Kanalwasser: Steinmetze verkeilen neue Quader im Tonnengewölbe.",
          "mittelstufe": "Vorausschauende Denkmalpflege: Die Cloaca Maxima bleibt absolut tragfähig.",
          "oberstufe": "Unterirdische Bauwerkssicherung: Kontinuierliche Gewölbesanierung verhindert Bodensenkungen am Forum."
        }
      },
      {
        "id": "C",
        "label": "Öffentliche Mehrplatz-Latrinen (Foricae) mit Marmorsitzen und Spülrinnen anlegen",
        "description": "Gemeinsam auf die Toilette gehen: Treffpunkt für Neuigkeiten und Geschäfte.",
        "statChanges": {
          "volk": 25,
          "adel": 10,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Bürger sitzen gemütlich nebeneinander auf Marmorsitzen und unterhalten sich munter!",
          "mittelstufe": "Römische Toilettenkultur: Foricae mit fließendem Wasser setzen neue Maßstäbe für Sauberkeit.",
          "oberstufe": "Öffentliche Sanitärversorgung: Geruchsfreie Latrinen verdrängen Nachttöpfe aus den Gassen."
        }
      },
      {
        "id": "D",
        "label": "Eine Latrinensteuer (Vectigal urinae) erheben: 'Geld stinkt nicht!' (Pecunia non olet)",
        "description": "Setzt Wissen ein, um Urin für Gerber und Walker gewinnbringend zu besteuern.",
        "epCost": 2,
        "statChanges": {
          "adel": 20,
          "priester": 20,
          "volk": 20,
          "goetter": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Kaiser Vespasian lacht: Goldmünzen aus der Steuer riechen nach nichts – 'Geld stinkt nicht!'",
          "mittelstufe": "Fiskalischer Geniestreich: Die Urinsteuer füllt die Staatskasse und finanziert den Bau des Kolosseums.",
          "oberstufe": "Kreislaufwirtschaftliche Besteuerung: Ammoniak aus Latrinen wird zum wertvollen Industrierohstoff der Walker."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Cloaca Maxima & 'Pecunia non olet'",
      "title": "Roms unterirdische Kanalisation",
      "explanation": {
        "unterstufe": "Die 'Cloaca Maxima' war der Hauptabwasserkanal des antiken Rom. Sie wurde schon zur Königszeit vor über 2.500 Jahren gebaut und funktioniert in Teilen bis heute! Römische öffentliche Toiletten ('Foricae') hatten keine Trennwände – bis zu 40 Menschen saßen nebeneinander auf Marmorsitzen und plauderten.",
        "mittelstufe": "Als Kaiser Vespasian eine Steuer auf öffentliche Urinalsammelbecken erhob (die Gerber brauchten den Urin, um Leder und Wolle zu bleichen), rügte sein Sohn Titus ihn wegen des unappetitlichen Geldes. Vespasian hielt ihm eine Goldmünze unter die Nase und fragte: 'Riecht sie?' Daher das Sprichwort: 'Pecunia non olet' ('Geld stinkt nicht!').",
        "oberstufe": "Statt Toilettenpapier nutzten die Römer einen Meerschwamm an einem Holzstab ('Xylospongium'), der in einer mit Salzwasser oder Essig gefüllten Rinne vor den Sitzen gereinigt wurde."
      },
      "curiosityFact": "Römische Abwasserkanäle waren so heilig, dass sie sogar eine eigene Schutzgöttin hatten: 'Venus Cloacina', deren kleiner Schrein noch heute am Forum Romanum steht!"
    }
  },
  {
    "id": "rome2_r09",
    "roundNumber": 9,
    "locationKey": "thermen_badekultur",
    "locationName": "Die Kaiserthermen des Caracalla",
    "milestoneTitle": "Runde 9: Das Ritual der Thermen – Vom Kaltbad zum Heißbad",
    "imagePath": "/assets/rome2_station_05.jpg",
    "hotspots": [
      {
        "id": "hs_r9_caldarium",
        "x": 45,
        "y": 45,
        "label": "Das dampfende Caldarium",
        "description": "Heißwasserbecken mit Mosaiken, in dem man bei 40 Grad schwitzte.",
        "icon": "♨️"
      },
      {
        "id": "hs_r9_frigidarium",
        "x": 25,
        "y": 65,
        "label": "Das kühle Frigidarium",
        "description": "Großes Kaltwasserbecken mit tiefblauem Wasser zur Abhärtung.",
        "icon": "❄️"
      },
      {
        "id": "hs_r9_palaestra",
        "x": 75,
        "y": 60,
        "label": "Die Palästra (Gymnastikhof)",
        "description": "Hier stemmten Bürger Bleigewichte, rangen im Sand und warfen Disken.",
        "icon": "🏋️"
      }
    ],
    "situation": {
      "unterstufe": "Nachmittags um 14 Uhr schließen die Geschäfte in Rom: Zeit für die Thermen! Für nur eine winzige Münze (eine Quadrans) darf jeder Bürger hinein – egal ob Bettler oder Senator. Die Caracalla-Thermen sind so riesig wie ein Schloss: Beheizte Marmorbäder, Schwimmbecken, Gärten, Bibliotheken und Imbissstände. Doch der Badevorgang folgt einer strengen Reihenfolge!",
      "mittelstufe": "Thermenkultur als Mittelpunkt des sozialen Lebens: Man begann mit Sport in der Palästra, schwitzte im Heißwasserraum (Caldarium), ging über den lauwarmen Ruheraum (Tepidarium) zum eisigen Tauchbecken (Frigidarium). Männer und Frauen badeten zu getrennten Zeiten oder in getrennten Bereichen.",
      "oberstufe": "Bäder als kaiserliche Legitimationsmonumente: Die Ausstattung mit Mosaiken, Statuen (wie dem 'Herkules Farnese') und Fresken machte Hochkultur für alle Bevölkerungsschichten erlebbar. Thermen waren Wellnessresort, Bürgerclub und Diskussionsforum in einem."
    },
    "choices": [
      {
        "id": "A",
        "label": "Den Eintrittspreis auf den kleinsten Pfennig festlegen, damit jeder Bürger täglich baden kann",
        "description": "Gleiche Hygiene für alle: Arm und Reich treffen sich nackt im warmen Wasser.",
        "statChanges": {
          "volk": 30,
          "adel": 15,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Riesiger Andrang! Zehntausende Bürger genießen täglich sauberes, dampfendes Wasser.",
          "mittelstufe": "Soziale Gleichheit im Wasser: Im Bad zählen Muskeln und Klugheit, nicht Herkunft und Toga.",
          "oberstufe": "Demokratisierung des Badekultes: Fast kostenloser Zugang zu Luxusbädern stabilisiert das Stadtklima."
        }
      },
      {
        "id": "B",
        "label": "Griechische und lateinische Lesesäle sowie Vortragsräume in die Thermenflügel integrieren",
        "description": "Verbindet Körperpflege mit Geist: Erst schwitzen, dann Philosophen lauschen.",
        "statChanges": {
          "adel": 25,
          "goetter": 20,
          "volk": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Nach dem Bad lauschen Bürger Dichtern und Philosophen: Ein Fest für Körper und Geist!",
          "mittelstufe": "Kulturbäder der Antike: Die Caracalla-Thermen werden zum geistigen Treffpunkt der Welt.",
          "oberstufe": "Integration von Mens Sana in Corpore Sano: Römische Bäder verwirklichen das Bildungsideal vollkommen."
        }
      },
      {
        "id": "C",
        "label": "Schwitzräume mit trockenem Heißluftdampf (Laconicum) gegen Gelenkschmerzen ausbauen",
        "description": "Antike Sauna: Heilende Dämpfe lindern Krankheiten und Beschwerden älterer Bürger.",
        "statChanges": {
          "priester": 20,
          "volk": 20,
          "adel": 10
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Der Schweiß perlt in Bächen! Ältere Senatoren schwören auf die heilende Kraft der heißen Steine.",
          "mittelstufe": "Medizinische Balneologie: Heißluftbäder dienen der Vorbeugung von Rheuma und Erkältung.",
          "oberstufe": "Präventive Gesundheitsvorsorge: Thermen fungieren als antike Reha-Zentren für das ganze Volk."
        }
      },
      {
        "id": "D",
        "label": "Riesige unterirdische Heizzentralen mit Holzrutschen und Sklavengängen anlegen",
        "description": "Setzt Wissen ein, um die Öfen Tag und Nacht ohne Rauchbelästigung der Badegäste zu befeuern.",
        "epCost": 2,
        "statChanges": {
          "priester": 25,
          "goetter": 20,
          "adel": 20,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 2
        },
        "consequenceText": {
          "unterstufe": "Unten schuften Heizer an glühenden Öfen – oben plätschert dampfender Luxus auf ewigem Marmor!",
          "mittelstufe": "Logistische Meisterleistung: Unterirdische Schächte schlucken tonnenweise Holz völlig geräuschlos.",
          "oberstufe": "Pyrotechnische Unterflurtechnik: Ausgeklügelte Ofenzüge heizen Millionen Liter Wasser im Dauerbetrieb."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Römischen Thermen (Caracalla)",
      "title": "Wellness & Politik im antiken Rom",
      "explanation": {
        "unterstufe": "Thermen waren riesige öffentliche Badehäuser. Man ging nicht nur zum Waschen hin, sondern um Freunde zu treffen, Sport zu treiben, Schach zu spielen oder in Bibliotheken zu lesen. Für weniger als ein Stück Brot durfte jeder Bürger hinein.",
        "mittelstufe": "Der Badevorgang hatte System: Zuerst schwitzen im 'Caldarium' (Heißbad, ca. 40°C), dann abkühlen im 'Tepidarium' (Laubad) und schließlich ein Sprung ins eiskalte 'Frigidarium' (Kaltbad), um die Poren zu schließen.",
        "oberstufe": "Die Caracalla-Thermen in Rom boten Platz für 1.600 Badegäste gleichzeitig und waren mit bunten Marmorplatten, riesigen Mosaiken und Brunnenfiguren ausgestattet. Hunderte Sklaven arbeiteten in unterirdischen Katakomben, um die gigantischen Öfen mit Holz zu füttern."
      },
      "curiosityFact": "Weil es noch keine Seife gab, rieben sich die Römer vor dem Bad mit Olivenöl ein. Mit einem gekrümmten Bronzeschaber ('Strigilis') schabte ein Sklave dann den Schmutz samt Öl von der Haut!"
    }
  },
  {
    "id": "rome2_r10",
    "roundNumber": 10,
    "locationKey": "thermen_badekultur",
    "locationName": "Die Kaiserthermen des Caracalla",
    "milestoneTitle": "Runde 10: Strigilis, Olivenöl & römische Tischsitten (Convivium)",
    "imagePath": "/assets/rome2_station_05.jpg",
    "hotspots": [
      {
        "id": "hs_r10_strigilis",
        "x": 35,
        "y": 65,
        "label": "Bronzene Strigilis",
        "description": "Gebogenes Metallschabeisen, mit dem Öl, Schweiß und Sand von der Haut geschabt wurden.",
        "icon": "🗡️"
      },
      {
        "id": "hs_r10_triclinium",
        "x": 65,
        "y": 55,
        "label": "Speisesofa (Triclinium)",
        "description": "Drei u-förmig angeordnete Liegen; die Römer aßen im Liegen auf den linken Ellbogen gestützt.",
        "icon": "🛋️"
      },
      {
        "id": "hs_r10_garum",
        "x": 80,
        "y": 70,
        "label": "Garum (Würzige Fischsauce)",
        "description": "Fermentierte Fischeingeweide; das 'Ketchup' der römischen Gourmetküche.",
        "icon": "🏺"
      }
    ],
    "situation": {
      "unterstufe": "Nach dem erfrischenden Bad duftet Rom nach geröstetem Fleisch, Knoblauch und Kräutern. Ein reicher Senator lädt zum abendlichen Festmahl ('Convivium'). Doch aufgepasst: Im Speisezimmer (Triclinium) sitzt niemand auf Stühlen! Man liegt zu dritt auf breiten Sofas, stützt sich auf den linken Ellbogen und isst mit den Fingern. Sklaven reichen mit Honig glasierte Siebenschläfer und Pfauenzungen...",
      "mittelstufe": "Römische Esskultur und Gastfreundschaft: Das Mahl gliederte sich in 'Gustatio' (Vorspeise: Eier, Salat, Oliven), 'Prima Mensa' (Hauptgang: Schweinebraten, Fisch, Geflügel) und 'Secunda Mensa' (Dessert: Feigen, Nüsse, Obst). Wein wurde niemals pur getrunken, sondern stets mit warmem Wasser und Gewürzen verdünnt.",
      "oberstufe": "Soziologie des Gastmahls: Das Convivium spiegelte die soziale Hierarchie exakt wider. Auf der mittleren Liege ('Lectus medius') lag der Ehrengast ('Locus consularis'). Was serviert wurde, demonstrierte Reichtum, Beziehungen und kulinarische Exzentrik."
    },
    "choices": [
      {
        "id": "A",
        "label": "Ein Gastmahl mit erlesenen Speisen, Musikern und Dichterlesungen ausrichten",
        "description": "Gastfreundschaft nach bester Tradition: Verwöhnt Gaumen und Geist der Gäste.",
        "statChanges": {
          "adel": 20,
          "goetter": 15,
          "volk": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Begeisterte Rufe: 'Bene tibi!' (Zum Wohle!). Senatoren loben deinen feinen Geschmack in ganz Rom.",
          "mittelstufe": "Kultureller Glanz: Dein Convivium verbindet kulinarischen Genuss mit geistreicher Unterhaltung.",
          "oberstufe": "Repräsentative Gastkultur: Feine Tischsitten festigen dein Netzwerk in der senatorischen Elite."
        }
      },
      {
        "id": "B",
        "label": "Luxusgesetze (Leges sumptuariae) gegen übertriebene Völlerei und Verschwendung durchsetzen",
        "description": "Mäßigt die Sitten: Verbietet schamlose Prunksucht und teure Importe aus Asien.",
        "statChanges": {
          "goetter": 25,
          "adel": -10,
          "volk": 20
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die einfachen Bürger jubeln: Reiche dürfen ihr Geld nicht mehr sinnlos verprassen!",
          "mittelstufe": "Stoische Mäßigung: Die Begrenzung von Luxusausgaben schützt die Moral der Bürgerschaft.",
          "oberstufe": "Sittenzucht der Zensoren: Luxusgesetze bremsen den Ruin verschuldeter Adelsfamilien."
        }
      },
      {
        "id": "C",
        "label": "Tausende Fässer der berühmten Garum-Fischsauce aus Hispania für die Märkte importieren",
        "description": "Sorgt für den unverzichtbaren Lieblingsgeschmack der römischen Küche an jedem Herd.",
        "statChanges": {
          "volk": 25,
          "priester": 15,
          "adel": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Der Duft von Garum zieht durch die Straßen: Jeder Eintopf schmeckt nun herzhaft und würzig!",
          "mittelstufe": "Beliebtestes Würzmittel: Günstiges Garum macht selbst einfache Hirsesuppen schmackhaft.",
          "oberstufe": "Massenkonsumgut der Antike: Der Garum-Fernhandel verbindet spanische Fangstationen mit Rom."
        }
      },
      {
        "id": "D",
        "label": "Das Rezeptbuch des Feinschmeckers Apicius in Pergamentkodizes vervielfältigen",
        "description": "Setzt Wissen ein, um die hohe Kunst römischer Kochrezepte für alle Zeiten niederzuschreiben.",
        "epCost": 2,
        "statChanges": {
          "goetter": 30,
          "adel": 25,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Das erste Kochbuch der Welt! Von Flamencoflügeln bis Fenchelsoßen bleibt alles erhalten.",
          "mittelstufe": "Das Werk 'De re coquinaria': Apicius' Meisterrezepte überdauern Jahrtausende bis heute.",
          "oberstufe": "Gastronomisches Kulturerbe: Die Verschriftlichung antiker Kulinarik begründet die europäische Kochkunst."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Triclinium, Garum & 'Ab ovo usque ad mala'",
      "title": "Tischsitten & Gourmetküche der Römer",
      "explanation": {
        "unterstufe": "Die Römer aßen nicht auf Stühlen, sondern lagen auf Liegen ('Triclinium') rings um einen niedrigen Tisch. Weil sie mit den Fingern aßen, wuschen Sklaven ihnen zwischen den Gängen die Hände mit parfümiertem Wasser.",
        "mittelstufe": "Die wichtigste Zutat fast jedes Gerichts war 'Garum' (oder Liquamen) – eine salzige Würzsauce aus monatelang in der Sonne fermentierten Fischeingeweiden. Sie schmeckte so intensiv wie moderne asiatische Fischsauce oder Sojasauce.",
        "oberstufe": "Ein römisches Menü begann mit Eiern und endete mit Äpfeln. Daher stammt das berühmte lateinische Sprichwort: 'Ab ovo usque ad mala' ('Vom Ei bis zu den Äpfeln' – also von Anfang bis Ende)."
      },
      "curiosityFact": "Reiche Römer servierten manchmal 'Trojanische Schweine' – ein ganzes gebratenes Wildschwein, das im Bauch mit lebenden Drosseln, Würsten und Granatäpfeln gefüllt war!"
    }
  },
  {
    "id": "rome2_r11",
    "roundNumber": 11,
    "locationKey": "insulae_subura",
    "locationName": "Die Subura & das Leben in den Insulae",
    "milestoneTitle": "Runde 11: Feuersbrunst in der Mietskaserne (Insula)",
    "imagePath": "/assets/rome2_station_06.jpg",
    "hotspots": [
      {
        "id": "hs_r11_insula",
        "x": 45,
        "y": 45,
        "label": "Fünfstöckige Holz-Mietskaserne",
        "description": "Baufällig und eng; oben wohnten die Ärmsten ohne Wasseranschluss oder Kamin.",
        "icon": "🏢"
      },
      {
        "id": "hs_r11_vigiles",
        "x": 25,
        "y": 65,
        "label": "Kaiserliche Feuerwehr (Vigiles)",
        "description": "Mit Eimern, Schläuchen und Haken bekämpfen Freigelassene nächtliche Brände.",
        "icon": "🧯"
      },
      {
        "id": "hs_r11_rauch",
        "x": 75,
        "y": 35,
        "label": "Feuer auf den Dächern",
        "description": "Holzkohlebecken und Öllampen setzten die Stadt fast jede Nacht in Brand.",
        "icon": "🔥"
      }
    ],
    "situation": {
      "unterstufe": "Mitten in der Nacht schallt der Ruf durch die engen Gassen: 'Feuer! Feuer in der Subura!' Aus dem vierten Stock einer klapprigen Holz-Mietskaserne schlagen Flammen. Über eine Million Menschen leben in Rom dicht an dicht. In den oberen Stockwerken gibt es kein Wasser. Die kaiserliche Feuerwehr (Vigiles) rennt mit Ledereimern herbei!",
      "mittelstufe": "Das Leben der armen Plebejer in den 'Insulae': Während Reiche im luxuriösen Domus wohnten, hauste die Masse in bis zu sechs Stockwerke hohen Mietskasernen. Gierige Vermieter bauten billig mit Holz und Gips. Stürzte ein Haus ein oder brannte es ab, verloren die Mieter Hab und Gut.",
      "oberstufe": "Urbanes Risikomanagement der Großstadt: Kaiser Augustus gründete nach verheerenden Bränden die 'Vigiles' – 7.000 Feuerwehrleute und Nachtwächter aus Freigelassenen. Bauregulierungen begrenzten die Gebäudehöhe auf 20 Meter und schrieben Feuerschutzmauern vor."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Vigiles mit Decken, Wasserpumpen (Sipho) und Axttrupps in die brennende Gasse schicken",
        "description": "Rettet Menschenleben und reißt Nachbargebäude ab, um die Feuersbrunst zu stoppen.",
        "statChanges": {
          "volk": 30,
          "priester": 15,
          "adel": -5,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Tapfere Männer klettern durch Rauch und Flammen: Dutzende Kinder werden gerettet!",
          "mittelstufe": "Einsatz der Vigiles: Durch beherztes Einreißen des Nachbardachs erstickt das Feuer.",
          "oberstufe": "Städtische Katastrophenbekämpfung: Schnelle Breschenbildung rettet das ganze Viertel vor der Einäscherung."
        }
      },
      {
        "id": "B",
        "label": "Ein Baugesetz mit strenger Höchstgrenze für Mietshäuser (20 Meter) und Feuermauern erlassen",
        "description": "Packt die Ursache an: Zwingt gierige Spekulanten zu feuerfesten Ziegelbauten.",
        "statChanges": {
          "adel": 15,
          "volk": 25,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Schluss mit wackeligen Holztürmen: Neue Häuser werden stabil aus Stein und Ziegeln gebaut.",
          "mittelstufe": "Augusteische Bauordnung: Feste Abstände und Brandschutzwände machen Rom spürbar sicherer.",
          "oberstufe": "Bauordnungsrechtliche Prävention: Gesetzliche Höhenbegrenzungen dämmen die Einsturzgefahr ein."
        }
      },
      {
        "id": "C",
        "label": "Die obdachlos gewordenen Familien in kaiserlichen Gärten und Tempelhöfen notunterbringen",
        "description": "Menschlichkeit im Unglück: Öffnet die Parks für hungernde Mütter und Kinder.",
        "statChanges": {
          "volk": 25,
          "adel": 10,
          "goetter": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Tränen der Erleichterung: Die Bürger finden warme Decken, Suppe und Schutz unter Säulengängen.",
          "mittelstufe": "Kaiserliche Nothilfe: Schnelle Unterbringung verhindert Obdachlosigkeit und Plünderungen.",
          "oberstufe": "Staatliche Nothilfeinfrastruktur: Tempelhöfe fungieren als temporäre Schutzräume in Krisen."
        }
      },
      {
        "id": "D",
        "label": "Ein staatliches Ziegelstein-Monopol errichten und unbrennbaren Terracotta-Lehmbau fördern",
        "description": "Setzt Wissen ein, um brennbare Holzbalken durch gebrannte Tonziegel im ganzen Reich zu ersetzen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "priester": 25,
          "volk": 20,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Aus Holz wird Ziegelstein! Roms Wohnhäuser werden feuerfest und trotzen jedem Brand.",
          "mittelstufe": "Die Ziegelrevolution: Standardisierte Tonziegel machen den Bau unbrennbar, schnell und günstig.",
          "oberstufe": "Baustofftechnische Standardisierung: Gebrannte Ziegel mit kaiserlichem Siegel revolutionieren die urbane Sicherheit."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Insulae & die Vigiles",
      "title": "Feuer & Enge in der antiken Millionenstadt",
      "explanation": {
        "unterstufe": "Die meisten Römer wohnten nicht in schönen Villen, sondern in engen, bis zu sechs Stockwerke hohen Mietshäusern ('Insulae'). Weil man oben mit offenen Feuern kochte und es kein Wasser gab, brannte es fast jede Nacht. Die Feuerwehr Roms hieß 'Vigiles' (die Wächter).",
        "mittelstufe": "Die Mieten waren unten am teuersten: Im Erdgeschoss gab es Läden und Wasser. Ganz oben unter dem Dach hausten die Ärmsten – bei Feuer gab es für sie kaum eine Rettung, da die Holztreppen sofort brannten.",
        "oberstufe": "Der berühmte Große Brand von Rom im Jahr 64 n. Chr. unter Kaiser Nero zerstörte fast die halbe Stadt. Danach erließ Nero eine strenge Bauordnung: Keine gemeinsamen Wände mehr, breitere Straßen und vorgeschriebene Innenhöfe."
      },
      "curiosityFact": "Reiche Spekulanten wie Crassus verdienten mit Bränden ihr Vermögen: Seine private Löschkolonne bot an, das brennende Haus zu löschen – aber nur, wenn der Eigentümer es ihm auf der Stelle spottbillig verkaufte!"
    }
  },
  {
    "id": "rome2_r12",
    "roundNumber": 12,
    "locationKey": "insulae_subura",
    "locationName": "Die Subura & das Leben in den Insulae",
    "milestoneTitle": "Runde 12: Die Thermopolien – Antikes Street-Food & Garküchen",
    "imagePath": "/assets/rome2_station_06.jpg",
    "hotspots": [
      {
        "id": "hs_r12_theke",
        "x": 45,
        "y": 65,
        "label": "Marmortheke mit Tonkrügen (Dolia)",
        "description": "In die Theke eingelassene Töpfe hielten Linseneintopf und Würste stundenlang warm.",
        "icon": "🍲"
      },
      {
        "id": "hs_r12_wein",
        "x": 75,
        "y": 55,
        "label": "Warmer Gewürzwein (Mulsum)",
        "description": "Mit Honig, Pfeffer und Lorbeer gewürzter Wein gegen die Kälte des Winters.",
        "icon": "🍷"
      },
      {
        "id": "hs_r12_wuerfel",
        "x": 25,
        "y": 70,
        "label": "Würfelspiel im Hinterzimmer",
        "description": "Knöchelchenspiele (Alea) bei Kerzenschein, obwohl Glücksspiel offiziell verboten war.",
        "icon": "🎲"
      }
    ],
    "situation": {
      "unterstufe": "Es ist Mittag und dein Magen knurrt laut! In den oberen Stockwerken der Mietskasernen darf niemand kochen – die Brandgefahr ist viel zu groß. Also strömen Hunderttausende Römer auf die Straße zum 'Thermopolium' – der antiken Fast-Food-Bar! Aus marmornen Theken dampfen warme Linseneintöpfe, Kichererbsen, geröstete Würstchen und heißer Honigwein.",
      "mittelstufe": "Antike Gastronomie und Straßenleben: Allein in Pompeji fand man über 150 Thermopolien an jeder Straßenecke. Für wenige Münzen bekam man schnelle, warme Mahlzeiten 'To-Go'. An den Wänden hingen bunte Menü-Bilder und Preislisten für Gäste, die nicht lesen konnten.",
      "oberstufe": "Ernährungsökonomie der Plebs: Ohne eigene Küchen in den Insulae war die römische Stadtbevölkerung auf gewerbliche Verpflegung angewiesen. Thermopolien waren soziale Schmelztiegel, in denen Sklaven, Händler und Tagelöhner über Politik stritten und Würfelspiele spielten."
    },
    "choices": [
      {
        "id": "A",
        "label": "Nahrhaften Kichererbsen- und Getreideeintopf zum Festpreis für alle Arbeiter anbieten",
        "description": "Schnelle, warme Energie für ehrliche Arbeit zu fairen Konditionen.",
        "statChanges": {
          "volk": 25,
          "priester": 15,
          "adel": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Dampfende Schüsseln leeren sich blitzschnell: Gestärkt kehren die Handwerker an die Arbeit zurück.",
          "mittelstufe": "Ernährungssicherheit im Alltag: Günstige Garküchen halten die Arbeitskraft der Stadt am Laufen.",
          "oberstufe": "Städtische Nahrungsmittelpreisbindung: Gedeckelte Grundgerichte sichern das Überleben der Tagelöhner."
        }
      },
      {
        "id": "B",
        "label": "Das illegale Würfelspiel in den Hinterzimmern streng überwachen und Geldbetrug bestrafen",
        "description": "Ordnung hüten: Niemand soll im Rausch um Haus und Hof betrogen werden.",
        "statChanges": {
          "adel": 20,
          "goetter": 15,
          "volk": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Gezinkte Würfel zerschlagen! Die Wächter sorgen für Ruhe in den lauten Abendstunden.",
          "mittelstufe": "Sittliche Aufsicht der Ädilen: Das Verbot schützt Familien vor Spielsucht und Zechprellerei.",
          "oberstufe": "Ordnungspolitische Regulierung: Marktmeister (Ädilen) kontrollieren Eichmaße und Tavernensicherheit."
        }
      },
      {
        "id": "C",
        "label": "Frische Feigen, Oliven und Käse aus dem Umland zollfrei in die Garküchen liefern",
        "description": "Stärkt die italienischen Bauern und bringt vitaminreiche Kost in die Stadt.",
        "statChanges": {
          "volk": 20,
          "adel": 15,
          "priester": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Köstliche Süße: Frische Feigen und Schafskäse bereichern die Teller der Bürger.",
          "mittelstufe": "Agrarischer Warenkreislauf: Zollbefreiung kurbelt den regionalen Gartenbau rund um Rom an.",
          "oberstufe": "Regionale Marktintegration: Steuererleichterungen optimieren die Frischelogistik der Metropole."
        }
      },
      {
        "id": "D",
        "label": "Gusseiserne Wasserbad-Warmhaltebehälter (Bain-Marie) für alle Garküchentresen konstruieren",
        "description": "Setzt Wissen ein, um Speisen stundenlang ohne Anbrennen keimfrei und warm zu halten.",
        "epCost": 2,
        "statChanges": {
          "priester": 25,
          "volk": 25,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Geniale Erfindung! Der Eintopf brennt nie wieder an und bleibt bis Mitternacht kochend heiß!",
          "mittelstufe": "Antike Gastrotechnik: Das Wasserbad hält Speisen hygienisch warm – ein Vorläufer moderner Buffets.",
          "oberstufe": "Hygienische Speisenerhaltung: Thermische Pufferung minimiert Lebensmittelverderb in den Straßenküchen."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Das Thermopolium – Antikes Fast Food",
      "title": "Garküchen an jeder Straßenecke",
      "explanation": {
        "unterstufe": "Ein 'Thermopolium' war das römische Fast-Food-Restaurant. In einer L-förmigen Theke aus Marmor steckten große Tontöpfe ('Dolia'). Darin blieben heiße Speisen warm. Wer Hunger hatte, kaufte sich im Vorbeigehen eine Schüssel Linsensuppe, eine Wurst oder Brot mit Knoblauchkäse.",
        "mittelstufe": "Weil in den Holzhäusern offenes Feuer verboten war, aßen fast alle Römer der Unterschicht mittags und abends außer Haus. Man trank dazu 'Mulsum' – einen heißen, mit Honig und Gewürzen gesüßten Wein.",
        "oberstufe": "Bei Ausgrabungen in Pompeji entdeckten Archäologen 2020 ein perfekt erhaltenes Thermopolium mit bunten Wandmalereien: Abgebildet waren eine Nymphe auf einem Seepferdchen und Tiere (Enten und Hähne), die vermutlich genau auf der Speisekarte standen!"
      },
      "curiosityFact": "In den Tontöpfen pompejianischer Fast-Food-Bars fanden Archäologen noch Knochenreste von Schweinen, Ziegen, Vögeln und sogar Schnecken, die zusammen in einem deftigen Fischeintopf gekocht worden waren!"
    }
  },
  {
    "id": "rome2_r13",
    "roundNumber": 13,
    "locationKey": "circus_wagenrennen",
    "locationName": "Circus Maximus & das Wagenrennen",
    "milestoneTitle": "Runde 13: Die vier Faktionen im Circus Maximus",
    "imagePath": "/assets/rome2_station_07.jpg",
    "hotspots": [
      {
        "id": "hs_r13_faktionen",
        "x": 45,
        "y": 55,
        "label": "Die Vier Faktionen (Rennställe)",
        "description": "Rot (Russata), Weiß (Albata), Grün (Prasina) und Blau (Veneta) spalten die Stadt.",
        "icon": "🚩"
      },
      {
        "id": "hs_r13_zuschauer",
        "x": 75,
        "y": 40,
        "label": "250.000 tobende Zuschauer",
        "description": "Die größte Sportarena aller Zeiten; Männer und Frauen durften nebeneinandersitzen.",
        "icon": "👥"
      },
      {
        "id": "hs_r13_kaiser",
        "x": 25,
        "y": 65,
        "label": "Kaiserloge (Pulvinar)",
        "description": "Hier zeigte der Herrscher Bürgernähe und lauschte den Rufen des Volkes.",
        "icon": "👑"
      }
    ],
    "situation": {
      "unterstufe": "Ein Ohrenbetäubender Lärm liegt über dem Tal zwischen Palatin und Aventin: 250.000 Menschen brüllen im Circus Maximus! Ganz Rom ist im Rennfieber. Jeder Bürger – vom Bettler bis zum Kaiser – fiebert für eine der vier Farben: Grün, Blau, Rot oder Weiß! Flaggen wehen, Wetten werden abgeschlossen. Der Kaiser selbst hebt ein weißes Tuch (Mappa) empor. Wenn es fällt, öffnen sich die Starttore!",
      "mittelstufe": "Der Circus Maximus war das größte Stadion der Weltgeschichte. Wagenrennen waren noch beliebter als Gladiatorenkämpfe. Die vier Faktionen waren professionelle Großunternehmen mit Tierärzten, Züchtern und Managern. Die Rivalität zwischen 'den Grünen' und 'den Blauen' führte oft zu Straßenschlachten.",
      "oberstufe": "Politische Funktion des Circus: Im Circus Maximus konnte das Volk dem Kaiser direkt gegenübertreten. Forderungen nach Steuersenkungen oder Getreidespenden wurden im Sprechchor vorgetragen. Der Kaiser musste anwesend sein, um Volksnähe (Civilitas) zu demonstrieren."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das weiße Tuch (Mappa) feierlich fallen lassen und das 1. Rennen des Tages freigeben",
        "description": "Eröffnet das Spektakel: Viergespanne schießen mit Donnergetöse aus den Toren!",
        "statChanges": {
          "volk": 30,
          "goetter": 15,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "250.000 Menschen springen auf! Staub wirbelt auf und 16 Pferde galoppieren um die Kurve!",
          "mittelstufe": "Die Menge tobt: Die Startfreigabe entfacht unbändigen Jubel im ganzen Tal.",
          "oberstufe": "Perfekte Inszenierung: Das Fallen der Mappa demonstriert die kaiserliche Schirmherrschaft über die Spiele."
        }
      },
      {
        "id": "B",
        "label": "Die rivalisierenden Fangruppen (Grün & Blau) durch getrennte Ränge und Wachen abschirmen",
        "description": "Sicherheit zuerst: Verhindert blutige Schlägereien zwischen den Rennställen.",
        "statChanges": {
          "adel": 20,
          "priester": 15,
          "volk": 10
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Strenge Ordnung: Wächter stehen zwischen den Rängen und das Rennen verläuft friedlich.",
          "mittelstufe": "Deeskalation im Stadion: Disziplin bannt die Gefahr von Fanausschreitungen.",
          "oberstufe": "Präventive Ordnungsüberwachung: Trennung der Fanblöcke sichert den reibungslosen Festablauf."
        }
      },
      {
        "id": "C",
        "label": "Gleichberechtigte Sitzordnung: Frauen und Männer frei nebeneinander anfeuern lassen",
        "description": "Im Circus gibt es keine Schranken: Dichter Ovid empfahl ihn zum Flirten!",
        "statChanges": {
          "volk": 25,
          "adel": 15,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Rom lacht und verliebt sich: Romantische Blicke zwischen jubelnden Fans aller Stände!",
          "mittelstufe": "Gesellschaftliche Offenheit: Im Circus fallen die strengen Schranken des Alltags.",
          "oberstufe": "Freie soziale Interaktion: Ovid bezeugt den Circus als populärsten Ort antiker Anbahnung."
        }
      },
      {
        "id": "D",
        "label": "Ein automatisches Delphin- und Eierzählwerk für die sieben Runden auf der Spina stiften",
        "description": "Setzt Wissen ein, um jede der 7 Runden mit kippbaren Bronzedelphinen weithin sichtbar anzuzeigen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "priester": 25,
          "volk": 25,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Kipp! Bei jeder Runde taucht ein bronzener Delphin um: Kein Zuschauer verliert mehr den Überblick!",
          "mittelstufe": "Geniale Renn-Anzeigetafel: Die kippbaren Bronzedelphine des Agrippa werden zum Wahrzeichen der Bahn.",
          "oberstufe": "Sporttechnische Transparenz: Mechanische Rundenzähler garantieren absolute Klarheit bei Wettentscheiden."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Circus Maximus & die vier Farben",
      "title": "250.000 Fans im Rennfieber",
      "explanation": {
        "unterstufe": "Der Circus Maximus war das größte Stadion aller Zeiten – er fasste viermal so viele Zuschauer wie das größte Fußballstadion heute! Vier Rennställe traten an, benannt nach Farben: Rot, Weiß, Grün und Blau. Jeder Römer trug die Farbe seines Lieblingsstalls.",
        "mittelstufe": "Ein Rennen ging über genau sieben Runden um die Mittelrippe ('Spina') – eine Strecke von etwa fünf Kilometern. Um den Überblick zu behalten, kippte man nach jeder Runde ein riesiges Holzei oder einen bronzenen Delphin um.",
        "oberstufe": "Im Circus gab es keine Trennung nach Ständen wie im Theater: Männer und Frauen, Senatoren und Sklaven saßen bunt gemischt nebeneinander. Dichter wie Ovid empfahlen den Circus als besten Ort in ganz Rom, um eine Partnerin kennenzulernen!"
      },
      "curiosityFact": "Der berühmteste Wagenlenker der Antike, Gaius Appuleius Diocles, gewann in seiner Karriere über 35 Millionen Sesterzen – Historiker errechneten, dass er reicher war als jeder moderne Sportsuperstar!"
    }
  },
  {
    "id": "rome2_r14",
    "roundNumber": 14,
    "locationKey": "circus_wagenrennen",
    "locationName": "Circus Maximus & das Wagenrennen",
    "milestoneTitle": "Runde 14: Das Drama an der Spina – Die Quadriga im Höllentempo",
    "imagePath": "/assets/rome2_station_07.jpg",
    "hotspots": [
      {
        "id": "hs_r14_quadriga",
        "x": 45,
        "y": 65,
        "label": "Vierpferd-Quadriga",
        "description": "Leichter Korbwagen; der Wagenlenker hat die Zügel um seinen Körper gewickelt.",
        "icon": "🐎"
      },
      {
        "id": "hs_r14_metae",
        "x": 75,
        "y": 55,
        "label": "Die Wendesäulen (Metae)",
        "description": "Drei vergoldete Kegel am Ende der Spina; hier krachten Wagen bei Höllentempo ineinander.",
        "icon": "⚠️"
      },
      {
        "id": "hs_r14_messer",
        "x": 25,
        "y": 70,
        "label": "Das Krummmesser im Gürtel",
        "description": "Im Notfall musste der Lenker die Zügel durchtrennen, um nicht zu Tode geschleift zu werden.",
        "icon": "🔪"
      }
    ],
    "situation": {
      "unterstufe": "Siebte und letzte Runde! Vier Streitwagen rasen nebeneinander mit 60 km/h auf die enge Kurve der Wendesäule (Meta) zu. Der Wagenlenker der Grünen riskiert alles: Er schneidet die Kurve so eng, dass sein Rad die Steine fast berührt! Doch ein Rad bricht – Trümmer fliegen durch die Luft! Hastig greift der Lenker nach seinem Messer, um die um den Bauch gewickelten Zügel zu kappen!",
      "mittelstufe": "Todesmutige Sportstars: Wagenrennen waren extrem gefährlich. Stürzte ein Wagen ('Naufragium' – wörtlich 'Schiffbruch'), wurden Lenker oft von nachfolgenden Gespannen überrollt. Wer überlebte und siegte, wurde mit Lorbeerkränzen, Palmzweigen und Säcken voller Gold überschüttet.",
      "oberstufe": "Ökonomie des antiken Spitzensports: Star-Wagenlenker ('Aurigae') stammten meist aus der Sklavenschicht, konnten sich aber freikaufen und zu Millionären aufsteigen. Zuchtstuten und Hengste aus Hispania und Nordafrika wurden wie heutige Rennpferde über Stammbäume gehandelt."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Zügel blitzschnell mit dem Krummmesser durchschneiden und zur Seite hechten",
        "description": "Geistesgegenwart rettet Leben: Entkommt den schleifenden Pferden unverletzt.",
        "statChanges": {
          "priester": 20,
          "adel": 15,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Schnitt! Die Pferde rasen davon, doch der Lenker rollt sich geschickt im Sand ab. Er lebt!",
          "mittelstufe": "Mut im Sand: Das Kappen der Zügel rettet den Helden vor dem sicheren Tod.",
          "oberstufe": "Präzisionsreaktion: Das blitzschnelle Durchtrennen der Zügel zeugt von professioneller Meisterschaft."
        }
      },
      {
        "id": "B",
        "label": "Die Innenkurve meisterhaft halten und das Gespann mit einem Wimpernschlag über die Ziellinie peitschen",
        "description": "Alles riskieren für den ewigen Ruhm: Der Sieg der 'Grünen' vor 250.000 Zuschauern!",
        "statChanges": {
          "volk": 35,
          "adel": 15,
          "goetter": 10
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "SIEG! Um Haaresbreite saust der Wagen über die weiße Linie! Das Stadion explodiert im Jubel!",
          "mittelstufe": "Triumph des Favoriten: Palmzweige und Goldmünzen regnen auf den neuen Helden von Rom.",
          "oberstufe": "Sportliche Apotheose: Der Sieg verewigt den Wagenlenker in Gedichten und Mosaiken der Stadt."
        }
      },
      {
        "id": "C",
        "label": "Strengere Sicherheitsregeln für die Wendemale und weicheren Sand in den Kurven anordnen",
        "description": "Kaiserliche Fürsorge: Schützt die wertvollen Pferde und Sportler vor tödlichen Trümmern.",
        "statChanges": {
          "adel": 20,
          "volk": 15,
          "priester": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Bessere Bahnen: Sturzunfälle gehen zurück und spektakuläre Duelle bleiben fair.",
          "mittelstufe": "Sicherheit auf der Spina: Kluge Bahnmodifikationen schonen Leben von Ross und Reiter.",
          "oberstufe": "Reglementierung des Rennbetriebs: Technische Sicherheitsstandards erhöhen die Qualität des Wettkampfs."
        }
      },
      {
        "id": "D",
        "label": "Dem siegreichen Sklaven-Lenker vor den Augen des ganzen Volkes den goldenen Freiheitsstab (Rudis) überreichen",
        "description": "Setzt Wissen ein, um die Freilassung des Champions als bewegendes Staatsschauspiel zu inszenieren.",
        "epCost": 2,
        "statChanges": {
          "goetter": 30,
          "volk": 35,
          "adel": 20,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Frei! Der Sklave bricht in Tränen aus und schwingt den Holzstab – das ganze Volk weint vor Freude!",
          "mittelstufe": "Die Rudis der Freiheit: Aus dem rechtlosen Knecht wird ein freier, gefeierter Bürger Roms.",
          "oberstufe": "Symbolische Emanzipation: Die kaiserliche Freilassung vor den Massen beweist die Durchlässigkeit der Ordnung."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Quadriga & der 'Schiffbruch' (Naufragium)",
      "title": "Todesmut mit vier Pferden",
      "explanation": {
        "unterstufe": "Eine 'Quadriga' war ein leichter zweirädriger Streitwagen, der von vier Pferden nebeneinander gezogen wurde. Die Lenker banden sich die Lederzügel um den Bauch, um mehr Zugkraft zu haben. Stürzte der Wagen, mussten sie die Zügel sofort mit einem Krummmesser kappen, sonst wurden sie zu Tode geschleift!",
        "mittelstufe": "Unfälle in den engen Kurven nannte man 'Naufragium' (Schiffbruch). Wagen verkeilten sich, Räder brachen und Pferde stürzten. Dennoch war der Beruf heiß begehrt: Erfolgreiche Wagenlenker waren die Idole der Jugend.",
        "oberstufe": "Wenn ein versklavter Wagenlenker genug Siege errungen hatte, konnte ihm der Kaiser oder Rennstallbesitzer einen hölzernen Stab ('Rudis') überreichen – das offizielle Symbol für seine Freilassung aus der Sklaverei."
      },
      "curiosityFact": "Die vier Pferde hatten feste Aufgaben: Das wichtigste war das linke Außenpferd ('Funalis') – es musste hochintelligent sein, weil es bei Höllentempo millimetergenau die Kurve um die Wendesäule lenken musste!"
    }
  },
  {
    "id": "rome2_r15",
    "roundNumber": 15,
    "locationKey": "gladiatoren_ludus",
    "locationName": "Das Kolosseum & die Fechtschule (Ludus Magnus)",
    "milestoneTitle": "Runde 15: Die Gladiatorengattungen – Netz gegen Schwert",
    "imagePath": "/assets/rome2_station_08.jpg",
    "hotspots": [
      {
        "id": "hs_r15_retiarius",
        "x": 40,
        "y": 65,
        "label": "Der Retiarius (Netzkämpfer)",
        "description": "Kämpft fast nackt mit Dreizack und Wurfnetz gegen schwer gepanzerte Gegner.",
        "icon": "🔱"
      },
      {
        "id": "hs_r15_secutor",
        "x": 65,
        "y": 55,
        "label": "Der Secutor (Verfolger)",
        "description": "Glatter Helm ohne Kanten (damit sich kein Netz verfängt), Schild und Kurzschwert.",
        "icon": "🛡️"
      },
      {
        "id": "hs_r15_lanista",
        "x": 80,
        "y": 70,
        "label": "Der Lanista (Gladiatorenmeister)",
        "description": "Besitzer der Fechtschule, der viel Geld in Ärzte, Massagen und Ernährung investierte.",
        "icon": "🥋"
      }
    ],
    "situation": {
      "unterstufe": "Der Sand der Arena ist geharkt. Trompeten schmettern: Die Gladiatoren ziehen ein! Sie treten paarweise gegeneinander an – aber niemals planlos! Jede Gattung hat völlig unterschiedliche Waffen: Da steht der flinke Netzkämpfer (Retiarius) mit Dreizack und Netz. Ihm gegenüber steht der schwer gepanzerte 'Secutor' mit glattem Visierhelm und Kurzschwert. Wer geschickter kämpft, gewinnt!",
      "mittelstufe": "Die Kunst der Gladiatur: Entgegen Hollywood-Klischees starben Gladiatoren keineswegs in jedem Kampf. Eine Ausbildung dauerte Jahre und kostete ein Vermögen. Ausgebildete Fechter ernährten sich streng vegetarisch von Bohnen und Gerste ('Hordearii' = Gerstenmänner), um dicke Fettschichten zum Schutz der Blutgefäße aufzubauen.",
      "oberstufe": "Ritualisierte Kampfdramaturgie: Die Paarungen (z. B. Thraex gegen Murmillo oder Retiarius gegen Secutor) waren fein austarierte Duelle zwischen Beweglichkeit und Panzerung. Schiedsrichter mit Stöcken ('Summa Rudis') überwachten faire Regeln und konnten Unterbrechungen anordnen."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Duell der Gegensätze: Retiarius mit Netz gegen Secutor im Kolosseum ansetzen",
        "description": "Der Klassiker: Flinke Taktik gegen stählerne Rüstung fesselt das Publikum.",
        "statChanges": {
          "volk": 30,
          "adel": 15,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Was für ein Nervenkitzel! Das Netz fliegt durch die Luft – der Secutor weicht meisterhaft aus!",
          "mittelstufe": "Taktisches Fechtduell: Das Publikum applaudiert beiden Kämpfern für überragende Fechtkunst.",
          "oberstufe": "Klassische Kampfpaarung: Die Antithese zwischen Schnelligkeit und Schutz maximiert die Dramatik."
        }
      },
      {
        "id": "B",
        "label": "Schiedsrichter mit Stöcken (Summa Rudis) einsetzen, um unfaire Treffer sofort zu stoppen",
        "description": "Sicherheit und Anstand: Kein sinnloser Blutrausch, sondern sportlicher Ehrenkampf.",
        "statChanges": {
          "adel": 20,
          "goetter": 15,
          "volk": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Halt! Der Schiedsrichter hebt den Stab: Beide Kämpfer trennen sich diszipliniert.",
          "mittelstufe": "Faire Arenaordnung: Strenge Schiedsrichterregeln garantieren ritterliche Zweikämpfe.",
          "oberstufe": "Institutionalisierung des Duellrechts: Die Summa Rudis gewährleistet die Einhaltung formaler Kampfregeln."
        }
      },
      {
        "id": "C",
        "label": "Hofärzte und Aschetränke für die beste medizinische Versorgung der Fechtschulen bereitstellen",
        "description": "Schützt die Gesundheit: Gladiatorenärzte (wie Galen) waren die besten Chirurgen Roms.",
        "statChanges": {
          "priester": 20,
          "adel": 15,
          "volk": 15
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Wundsalben und Schienen: Selbst schwere Schnittwunden heilen dank der Ärzte schnell.",
          "mittelstufe": "Antike Sportmedizin: Der berühmte Arzt Galen lernte seine Wundchirurgie an Gladiatoren.",
          "oberstufe": "Hochleistungsmedizin der Antike: Mineralaschetränke und antiseptische Wundnähte retten Kämpferleben."
        }
      },
      {
        "id": "D",
        "label": "Den unterirdischen Verbindungstunnel vom Kolosseum zum Ludus Magnus beleuchten",
        "description": "Setzt Wissen ein, um Gladiatoren sicher und staunend durch unterirdische Gänge einzuschleusen.",
        "epCost": 2,
        "statChanges": {
          "priester": 25,
          "goetter": 25,
          "adel": 20,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Wie durch Zauberei! Die Gladiatoren marschieren unterirdisch vom Schlafsaal direkt in die Arena!",
          "mittelstufe": "Die Tunnel des Ludus Magnus: Reibungslose Logistik ohne Stau oder Gedränge auf den Straßen.",
          "oberstufe": "Unterirdische Arenainfrastruktur: Der Bogentunnel trennt Kämpferströme sicher von der Zuschauermenge."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Gladiatoren – Kämpfer der Arena",
      "title": "Retiarius, Murmillo & der Arzt Galen",
      "explanation": {
        "unterstufe": "Gladiatoren kämpften nicht alle gleich! Der 'Retiarius' hatte keinen Helm und keinen Schild, sondern nur ein Fischernetz und einen Dreizack. Sein Gegner war oft der 'Secutor' mit einem ganz runden, glatten Helm, an dem das Netz abrutschte.",
        "mittelstufe": "Gladiatoren aßen kaum Fleisch! Knochenfunde zeigen, dass sie sich hauptsächlich von Gerstenbrei, Bohnen und Trockenfrüchten ernährten. Sie tranken sogar eine Mischung aus Pflanzenasche und Wasser, um ihre Knochen mit Calcium zu stärken.",
        "oberstufe": "Der berühmteste Arzt der Antike, Galen von Pergamon, war vier Jahre lang Chefarzt der Gladiatorenschule. Bei ihm starb kaum ein verletzter Kämpfer an Wundinfektionen, weil er Wunden sorgfältig mit Wein desinfizierte."
      },
      "curiosityFact": "Gladiatoren waren die Werbestars der Antike: Töpfer verkauften Tonlampen mit ihren Porträts, und reiche Damen kauften kleine Fläschchen mit Gladiatorenschweiß als teures Schönheitsmittel!"
    }
  },
  {
    "id": "rome2_r16",
    "roundNumber": 16,
    "locationKey": "gladiatoren_ludus",
    "locationName": "Das Kolosseum & die Fechtschule (Ludus Magnus)",
    "milestoneTitle": "Runde 16: Das Urteil der Menge – 'Pollice Verso' & die Freiheit",
    "imagePath": "/assets/rome2_station_08.jpg",
    "hotspots": [
      {
        "id": "hs_r16_begnadigung",
        "x": 45,
        "y": 65,
        "label": "Der gehobene Daumen (Mitte!)",
        "description": "Das Volk winkt mit Tüchern: 'Mitte!' (Lass ihn gehen! Er hat tapfer gekämpft!).",
        "icon": "👍"
      },
      {
        "id": "hs_r16_rudis",
        "x": 75,
        "y": 45,
        "label": "Das Holzschwert der Freiheit (Rudis)",
        "description": "Überreicht vom Kaiser: Der Gladiator muss nie wieder in den Sand.",
        "icon": "🗡️"
      },
      {
        "id": "hs_r16_hypogaeum",
        "x": 25,
        "y": 75,
        "label": "Aufzüge im Hypogäum",
        "description": "Seilwinden hoben afrikanische Löwen und Tiger durch Falltüren direkt in die Arena.",
        "icon": "🦁"
      }
    ],
    "situation": {
      "unterstufe": "Ein dramatischer Zweikampf neigt sich dem Ende zu. Ein Gladiator stolpert erschöpft in den Sand, hebt den linken Zeigefinger empor und bittet um Gnade. 50.000 Menschen blicken gebannt zur Kaiserloge empor. Der Kämpfer hat wie ein Löwe gefochten! Das Volk schwenkt weiße Taschentücher und ruft: 'Mitte! Lass ihn leben!' Welches Zeichen gibst du mit deiner Hand?",
      "mittelstufe": "Das Daumenurteil ('Pollice Verso'): Entgegen der modernen Daumen-hoch/runter-Geste bedeutete der ausgestreckte Daumen im antiken Rom vermutlich das gezückte Schwert (Todesstoß), während die in der Faust verborgene Hand Gnade symbolisierte ('Pollicem premere'). Tapfere Verlierer wurden fast immer begnadigt.",
      "oberstufe": "Machtritual der Begnadigung: Der Kaiser demonstrierte seine Gnadenhoheit ('Clementia'), indem er dem Wunsch des Volkes entsprach. Ein getöteter Gladiator kostete den Veranstalter ein Vermögen, da er dem Lanista den vollen Wert des Kämpfers ersetzen musste."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Hand zur Faust schließen und Gnade gewähren ('Missio!')",
        "description": "Belohnt tapferen Mut: Wer wie ein Held kämpft, darf am Leben bleiben!",
        "statChanges": {
          "volk": 30,
          "adel": 15,
          "goetter": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Riesiger Beifall! Der verwundete Gladiator steht dankbar auf und verlässt die Arena unter Jubel.",
          "mittelstufe": "Triumph der Barmherzigkeit: Der Kaiser beweist Milde und gewinnt die Herzen aller 50.000 Zuschauer.",
          "oberstufe": "Rituelle Bestätigung der Clementia: Milde festigt die moralische Autorität des Kaisers vor der Plebs."
        }
      },
      {
        "id": "B",
        "label": "Dem Sieger den Palmzweig, ein Goldtablett und das Holzschwert (Rudis) schenken",
        "description": "Macht den Champion unsterblich: Freilassung nach fünf glorreichen Siegen!",
        "statChanges": {
          "volk": 35,
          "adel": 20,
          "goetter": 10
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Frei! Der Champion küsst das Holzschwert: Er ist ab heute ein freier Mann und Held Roms!",
          "mittelstufe": "Die Rudis der Unsterblichkeit: Der Gladiator verlässt den Sand für immer als gefeierter Star.",
          "oberstufe": "Belohnung soldatischer Tugend: Die Freilassung beweist, dass selbst Sklaven durch Ehre aufsteigen können."
        }
      },
      {
        "id": "C",
        "label": "Den Veranstaltern verbieten, Kämpfe 'sine missione' (ohne Begnadigung auf Leben und Tod) zu zeigen",
        "description": "Mäßigt die Härte: Verbietet Kämpfe, bei denen ein Fechter zwingend sterben muss.",
        "statChanges": {
          "adel": 20,
          "goetter": 20,
          "volk": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Vernunft siegt über Blutdurst: Echte Fechtkunst zählt wieder mehr als sinnloses Morden.",
          "mittelstufe": "Kaiserliches Verbot: Kämpfe auf Leben und Tod werden verbannt; Roms Sitten werden gerechter.",
          "oberstufe": "Rechtsstaatliche Humanisierung: Das Verbot von Schaukämpfen ohne Begnadigung rettet Tausende."
        }
      },
      {
        "id": "D",
        "label": "Ausgeklügelte mechanische Hebeaufzüge im Hypogäum für spektakuläre Bühnenbilder bauen",
        "description": "Setzt Wissen ein, um Wälder und Felsen wie von Geisterhand aus dem Kellerboden emporzuheben.",
        "epCost": 2,
        "statChanges": {
          "priester": 25,
          "goetter": 25,
          "volk": 25,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Klapp! Ganze Bäume und Felsberge steigen aus dem Boden empor! Das Publikum traut seinen Augen nicht!",
          "mittelstufe": "Die Bühnenmaschinerie des Kolosseums: Gegengewichte und Seilzüge schaffen atemberaubende Effekte.",
          "oberstufe": "Bühnentechnologische Perfektion: Das Hypogäum macht das Kolosseum zum wandlungsfähigsten Theater der Erde."
        }
      }
    ],
    "lexiconEntry": {
      "term": "„Pollice Verso“ & das Holzschwert (Rudis)",
      "title": "Gnade oder Tod in der Arena",
      "explanation": {
        "unterstufe": "Wenn ein Gladiator im Sand lag, entschied nicht der Sieger über sein Leben, sondern das Publikum und der Kaiser. Kämpfte er feige, riefen alle 'Iugula!' (Stich ihn ab!). Kämpfte er tapfer, winkte die Menge mit Tüchern und rief 'Mitte!' (Lass ihn leben!).",
        "mittelstufe": "Das Holzschwert ('Rudis') war der größte Traum jedes Gladiators: Wer es vom Kaiser überreicht bekam, war frei und musste nie wieder in der Arena kämpfen. Viele wurden danach berühmte Fechtlehrer oder Leibwächter.",
        "oberstufe": "Hollywood zeigt oft den gesenkten Daumen als Todeszeichen. Römische Texte deuten jedoch darauf hin, dass der Daumen ausgestreckt auf die Brust zeigte (Symbol für die Klinge) oder in der Faust verborgen wurde ('Pollicem premere' = Waffe einstecken / Gnade)."
      },
      "curiosityFact": "Wenn ein Gladiator doch getötet wurde, betrat ein Mann im Kostüm des Totengottes Charon die Arena und schlug mit einem Holzhammer auf den Körper, um sicherzustellen, dass er nicht nur tot spielte!"
    }
  },
  {
    "id": "rome2_r17",
    "roundNumber": 17,
    "locationKey": "katakomben_christen",
    "locationName": "Katakomben an der Via Appia & frühes Christentum",
    "milestoneTitle": "Runde 17: Die geheimen Zeichen in den Katakomben",
    "imagePath": "/assets/rome2_station_09.jpg",
    "hotspots": [
      {
        "id": "hs_r17_ichthys",
        "x": 45,
        "y": 65,
        "label": "Das Fischsymbol (Ichthys)",
        "description": "Geheimes Erkennungszeichen der ersten Christen: 'Jesus Christus, Gottes Sohn, Erlöser'.",
        "icon": "🐟"
      },
      {
        "id": "hs_r17_katakombe",
        "x": 25,
        "y": 55,
        "label": "Tuffstein-Gräber (Loculi)",
        "description": "Kilometerlange unterirdische Gänge mit Grabnischen für zehntausende Verstorbene.",
        "icon": "🕯️"
      },
      {
        "id": "hs_r17_guterhirt",
        "x": 75,
        "y": 45,
        "label": "Wandmalerei 'Der Gute Hirte'",
        "description": "Früheste christliche Kunst: Ein junger Hirt trägt das verlorene Schaf auf seinen Schultern.",
        "icon": "🐑"
      }
    ],
    "situation": {
      "unterstufe": "Außerhalb der Stadtmauern an der Via Appia steigst du bei flackerndem Kerzenlicht tief in den Erdboden hinab. In das weiche Tuffgestein sind kilometerlange Gänge gegraben: Die Katakomben! Hier treffen sich die ersten Christen im Verborgenen. An den Wänden siehst du geheime Ritzzeichnungen: Einen Fisch, einen Anker und einen Hirten mit einem Schaf. Die Christen weigern sich, den Kaiser wie einen Gott anzubeten.",
      "mittelstufe": "Das frühe Christentum im Römischen Reich: Anfangs galt das Christentum als kleine jüdische Sekte. Doch die Botschaft, dass vor Gott alle Menschen gleich sind – Sklaven, Frauen und Vornehme –, verbreitete sich wie ein Lauffeuer in den Armenvierteln. Da Christen die römischen Staatsopfer verweigerten, galten sie dem Senat als Staatsfeinde.",
      "oberstufe": "Der Konflikt um den Kaiserkult: Roms Religion war staatsbürgerliche Loyalitätspflicht. Die Weigerung der Christen, dem Kaiserbildnis Weihrauch zu opfern, wurde als Hochverrat interpretiert. Unter Nero (64 n. Chr.) und Diokletian kam es zu brutalen Verfolgungswellen."
    },
    "choices": [
      {
        "id": "A",
        "label": "Den Christen Glaubensfreiheit gewähren, solange sie friedlich bleiben und Steuern zahlen",
        "description": "Religiöse Toleranz: Glaube kann man nicht mit dem Schwert erzwingen.",
        "statChanges": {
          "volk": 30,
          "goetter": -10,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Erleichterung im Untergrund: Christen beten friedlich für das Wohl des Staates und der Stadt.",
          "mittelstufe": "Pionier der Toleranz: Friedliche Koexistenz nimmt den Verfolgungsdruck aus Rom.",
          "oberstufe": "Frühe Gewissensfreiheit: Die Duldung der christlichen Gemeinden befriedet die Unterschichten der Metropole."
        }
      },
      {
        "id": "B",
        "label": "Das Opfer vor dem Kaiserstandbild unerbittlich als Beweis der Staatstreue einfordern",
        "description": "Staatsräson: Niemand darf sich über die heiligen Pflichten Roms stellen!",
        "statChanges": {
          "goetter": 25,
          "adel": 20,
          "volk": -15
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Härte im Senat: Standhafte Gläubige werden verbannt; Unruhe schwelt in den Armenvierteln.",
          "mittelstufe": "Erhalt des Staatskults: Die Autorität des Kaisers wird mit eiserner Konsequenz verteidigt.",
          "oberstufe": "Konfrontative Staatsdoktrin: Der Zwang zum Kaiserkult treibt das Christentum in den Märtyrermythos."
        }
      },
      {
        "id": "C",
        "label": "Die unterirdischen Katakomben als geschützte Friedhöfe und Denkmäler deklarieren",
        "description": "Schützt die Totenruhe aller Bürger nach altem römischem Gräberrecht.",
        "statChanges": {
          "goetter": 20,
          "adel": 15,
          "volk": 20
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Heiliger Friede unter der Erde: Familien dürfen ihre Angehörigen ungestört beweinen.",
          "mittelstufe": "Schutz des Grabrechts: Roms uraltes Gräberrecht schützt die Katakomben vor Schändung.",
          "oberstufe": "Rechtskontinuität der Begräbnisvereine (Collegia funeraticia): Roms Vereinsrecht legalisiert christliche Friedhöfe."
        }
      },
      {
        "id": "D",
        "label": "Das Mailänder Toleranzedikt von 313 n. Chr. vorwegnehmen: Volle Religionsfreiheit für alle Kulte",
        "description": "Setzt Wissen ein, um die Christenverfolgung für immer zu beenden – die Wende von Kaiser Konstantin!",
        "epCost": 2,
        "statChanges": {
          "goetter": 35,
          "volk": 35,
          "adel": 20,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Glocken klingen! Verfolgung ist für immer verboten – Liebe und Toleranz triumphieren im Reich!",
          "mittelstufe": "Die Konstantinische Wende: Das Christentum steigt von der verbotenen Sekte zur anerkannten Religion auf.",
          "oberstufe": "Epochenwende des Mailänder Edikts: Konstantin und Licinius schaffen die erste allgemeine Religionsfreiheit der Welt."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Katakomben & das Fischsymbol",
      "title": "Glaube im Untergrund an der Via Appia",
      "explanation": {
        "unterstufe": "Katakomben waren unterirdische Friedhöfe außerhalb der Stadtmauern. In den finsteren Gängen trafen sich die ersten Christen heimlich. Als geheimes Erkennungszeichen ritzten sie einen Fisch in den Stein. Wenn zwei Fremde sich trafen, zeichnete einer einen Bogen in den Sand – vollendete der andere den Fisch, wussten beide: Wir sind Freunde!",
        "mittelstufe": "Warum ein Fisch? Die griechischen Anfangsbuchstaben des Wortes Fisch ('ICHTHYS') ergeben einen geheimen Satz: 'Iesous Christos Theou Yios Soter' (Jesus Christus, Gottes Sohn, Erlöser).",
        "oberstufe": "Weil römische Gesetze die Totenruhe absolut schützten, waren die Katakomben für die Polizei tabu. Erst Kaiser Konstantin beendete 313 n. Chr. mit dem Mailänder Edikt alle Verfolgungen; 380 n. Chr. wurde das Christentum unter Theodosius zur alleinigen Staatsreligion."
      },
      "curiosityFact": "Unter Rom ziehen sich über 60 verschiedene Katakomben mit mehr als 150 Kilometern Länge – manche Gänge liegen bis zu vier Stockwerke tief unter der Erde!"
    }
  },
  {
    "id": "rome2_r18",
    "roundNumber": 18,
    "locationKey": "katakomben_christen",
    "locationName": "Katakomben an der Via Appia & frühes Christentum",
    "milestoneTitle": "Runde 18: Die Basilika – Vom Gerichtssaal zur Kathedrale",
    "imagePath": "/assets/rome2_station_09.jpg",
    "hotspots": [
      {
        "id": "hs_r18_basilika",
        "x": 45,
        "y": 55,
        "label": "Die Maxentius-Basilika",
        "description": "Riesige Tonnengewölbe aus Ziegeln und Beton mit 35 Meter Deckenhöhe am Forum.",
        "icon": "🏛️"
      },
      {
        "id": "hs_r18_apsis",
        "x": 75,
        "y": 45,
        "label": "Die halbrunde Apsis",
        "description": "Hier thronte der Richter auf erhöhtem Sitz; später der Altar christlicher Kirchen.",
        "icon": "⚖️"
      },
      {
        "id": "hs_r18_koloss",
        "x": 25,
        "y": 65,
        "label": "Kolossalstatue Konstantins",
        "description": "Zwölf Meter hohe Marmorstatue des Kaisers, dessen riesiger Zeigefinger erhalten blieb.",
        "icon": "👑"
      }
    ],
    "situation": {
      "unterstufe": "Jahr 312 n. Chr.: Am Forum Romanum ragt ein gigantisches Gebäude in den Himmel: Die Basilika des Maxentius und Konstantin. Ursprünglich war eine 'Basilika' gar keine Kirche, sondern eine riesige überdachte Markthalle und ein Gerichtspalast. Doch als Kaiser Konstantin zum Christentum übertritt, schenkt er den Christen diesen Baustil für ihre ersten Kathedralen!",
      "mittelstufe": "Die Wandlung der Architektur: Heidnische Tempel waren eng, weil nur Priester das Allerheiligste betreten durften. Für die großen christlichen Gottesdienste brauchte man riesige Hallen. Die römische Basilika mit Mittelschiff, Seitenschiffen und Apsis wurde zum Grundriss aller europäischen Kathedralen des Mittelalters.",
      "oberstufe": "Typologie des Sakralbaus: Die Transformation der antiken Basilika (Königshalle, von gr. 'basileus') zum christlichen Versammlungsraum. Konstantin stiftete über dem Petrusgrab die erste Petersbasilika (Alt-St. Peter) und verband kaiserliche Monumentalität mit christlicher Liturgie."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Basilika am Forum als neutralen Gerichtspalast für gerechte Urteile weihen",
        "description": "Gewährleistet unbestechliche Rechtsprechung im Herzen der Ewigen Stadt.",
        "statChanges": {
          "adel": 25,
          "goetter": 15,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Unter den gewaltigen Ziegelbögen sprechen Richter Recht: Gerechtigkeit triumphiert!",
          "mittelstufe": "Tempel des Rechts: Die Basilika wird zum strahlenden Vorbild römischer Gerichtsbarkeit.",
          "oberstufe": "Funktionale Rechtsarchitektur: Das Apsismodell bürgt für formale Würde und richterliche Unabhängigkeit."
        }
      },
      {
        "id": "B",
        "label": "Den Grundriss der Basilika mit Mittelschiff und Apsis für neue Kathedralen im ganzen Reich übernehmen",
        "description": "Schafft den Baustil für zweitausend Jahre europäischer Kirchengeschichte.",
        "statChanges": {
          "goetter": 30,
          "volk": 25,
          "adel": 15
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Ein neuer Stil erobert die Welt: Licht strömt durch hohe Obergadenfenster auf staunende Gläubige.",
          "mittelstufe": "Geburtsstunde der Kathedrale: Vom Petersdom bis zum Kölner Dom basiert alles auf diesem römischen Saal.",
          "oberstufe": "Baugeschichtlicher Archetyp: Die Langhausbasilika wird zur dominanten Raumform des christlichen Abendlandes."
        }
      },
      {
        "id": "C",
        "label": "Riesige Bronzetüren und Marmorsäulen alter heidnischer Tempel für den Neubau recyceln (Spolien)",
        "description": "Nachhaltiger Prunk: Nutzt Schätze der Vergangenheit für die Bauten der Zukunft.",
        "statChanges": {
          "priester": 25,
          "adel": 15,
          "volk": 10
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Altes Gold funkelt neu: Antike Säulen tragen stolz die Decken der neuen Hallen.",
          "mittelstufe": "Die Kunst der Spolien: Wiederverwendung antiker Meisterwerke spart Zeit und setzt Denkmäler.",
          "oberstufe": "Spolienarchitektur: Die Integration antiker Bauglieder symbolisiert Kontinuität und Herrschaftswechsel."
        }
      },
      {
        "id": "D",
        "label": "Die Kolossalstatue Konstantins mit erhobenem Zeigefinger als Symbol ewigen Rechts enthüllen",
        "description": "Setzt Wissen ein, um die kaiserliche Autorität in Marmor für alle kommenden Jahrhunderte einzuprägen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 30,
          "adel": 25,
          "volk": 20,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Zwölf Meter Ehrfurcht! Selbst der Kopf der Statue ist so groß wie ein ganzes Zimmer – Majestät pur!",
          "mittelstufe": "Die Kolossalstatue im Konservatorenpalast: Konstantins Augen blicken weit über Rom in die Ewigkeit.",
          "oberstufe": "Spätantike Transzendenzrepräsentation: Überlebensgroße Plastik visualisiert den Herrscher als Diener Gottes."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Basilika – Vom Marktplatz zur Kirche",
      "title": "Wie ein Gerichtssaal zur Kathedrale wurde",
      "explanation": {
        "unterstufe": "Das Wort 'Basilika' kommt aus dem Griechischen und bedeutet 'Königshalle'. Für die Römer war eine Basilika keine Kirche, sondern eine riesige überdachte Halle für Gerichtsprozesse und Markthändler, wenn es draußen regnete.",
        "mittelstufe": "Als das Christentum erlaubt wurde, brauchten die Gemeinden große Hallen für tausende Gläubige. Da heidnische Tempel zu klein waren, bauten sie Basiliken nach: Ein hohes Mittelschiff, zwei niedrigere Seitenschiffe und vorne eine runde Nische (Apsis) für den Altar.",
        "oberstufe": "Die Maxentius-Basilika am Forum Romanum hatte Gewölbe von 35 Metern Höhe – höher als ein zehnstöckiges Haus! Die erhaltenen Trümmer dienten Renaissance-Künstlern wie Michelangelo als Vorbild für die Kuppel des Petersdoms."
      },
      "curiosityFact": "Vom riesigen Kolossalstandbild Kaiser Konstantins in der Basilika sind bis heute der 2,5 Meter hohe Kopf und ein zwei Meter langer Fuß im Kapitolinischen Museum in Rom zu bestaunen!"
    }
  },
  {
    "id": "rome2_r19",
    "roundNumber": 19,
    "locationKey": "saturnalien_vermaechtnis",
    "locationName": "Das Saturnalienfest & das Ewige Erbe Roms",
    "milestoneTitle": "Runde 19: Das Fest der Saturnalien – Die verkehrte Welt",
    "imagePath": "/assets/rome2_station_10.jpg",
    "hotspots": [
      {
        "id": "hs_r19_saturn",
        "x": 50,
        "y": 55,
        "label": "Der Tempel des Saturn am Forum",
        "description": "Die Fesseln der Gottesstatue werden gelöst; das Fest der goldenen Urzeit beginnt.",
        "icon": "🏛️"
      },
      {
        "id": "hs_r19_sklaven",
        "x": 25,
        "y": 65,
        "label": "Rollentausch beim Festmahl",
        "description": "Herren bedienen ihre Sklaven bei Tisch; alle tragen bunte Filzkappen der Freiheit (Pilleus).",
        "icon": "🎩"
      },
      {
        "id": "hs_r19_geschenke",
        "x": 75,
        "y": 70,
        "label": "Wachskerzen & Tonfigürchen",
        "description": "Bürger beschenken sich mit Kerzen (Cerei) und Glücksbringern – der Ursprung von Weihnachten!",
        "icon": "🕯️"
      }
    ],
    "situation": {
      "unterstufe": "Mitte Dezember: 'Io Saturnalia!' schallt es durch ganz Rom! Es ist das fröhlichste Fest des Jahres zu Ehren des Gottes Saturn. Für eine ganze Woche steht die Welt kopf: Gerichte schließen, Kriege werden verboten und die Standesunterschiede fallen! Sklaven setzen sich an die Festtafeln und lassen sich von ihren Herren bedienen. Man schenkt sich Kerzen und Tonpüppchen. Es ist das antike Vorbild unseres Weihnachtsfestes!",
      "mittelstufe": "Die Saturnalien (17.–23. Dezember): Das Fest erinnerte an das 'Goldene Zeitalter', in dem Saturn herrschte und alle Menschen gleich und frei waren. Jeder trug bunte Freizeitkleidung statt der steifen Toga und setzte die Filzkappe freigelassener Sklaven ('Pilleus') auf. Ausgelassenes Würfeln um Nüsse war überall erlaubt.",
      "oberstufe": "Kompensatorische Festkultur und Gesellschaftsventil: Die Saturnalien fungierten als institutionalisierter Ausnahmezustand. Der zeitweilige Rollentausch baute aufgestaute Aggressionen der Sklavenhaltergesellschaft friedlich ab und bekräftigte nach dem Fest die bestehende Ordnung umso stabiler."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Schürze umbinden und die Sklaven des Hauses persönlich mit Festbraten bedienen",
        "description": "Macht die Saturnalien wahr: Menschlichkeit und Gleichheit für eine Woche!",
        "statChanges": {
          "volk": 30,
          "adel": 15,
          "goetter": 20,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "'Io Saturnalia!' Lachen und Gesang: Deine Diener strahlen und bedanken sich mit Segenswünschen.",
          "mittelstufe": "Triumph des Saturnaliengeistes: Der Rollentausch stiftet tiefe Zuneigung und Loyalität im Haus.",
          "oberstufe": "Kultische Katharsis: Das Ausleben des Goldenen Zeitalters festigt den sozialen Hausfrieden für das neue Jahr."
        }
      },
      {
        "id": "B",
        "label": "Wachskerzen (Cerei) und Tonfigürchen (Sigillaria) an alle Kinder und Nachbarn verschenken",
        "description": "Bringt Licht in die dunkle Winterzeit: Schenken stiftet Freundschaft.",
        "statChanges": {
          "volk": 25,
          "adel": 20,
          "goetter": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Kerzenlicht erhellt die Fenster: Kinder packen jubelnd ihre kleinen Tonkrieger und Tiere aus.",
          "mittelstufe": "Die Ursprünge des Schenkens: Die Sigillaria-Märkte füllen Rom mit weihnachtlicher Vorfreude.",
          "oberstufe": "Gabentauschsoziologie: Rituelles Schenken von Wachslichtern überdauert im christlichen Weihnachtsfest."
        }
      },
      {
        "id": "C",
        "label": "Einen 'Saturnalicius Princeps' (König der Ausgelassenheit) durch Bohnenwurf wählen",
        "description": "Närrische Spiele: Der Spaßkönig darf für einen Tag lustige Befehle an alle erteilen.",
        "statChanges": {
          "adel": 20,
          "volk": 20,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Der Spaßkönig befiehlt: 'Jeder muss jetzt ein lustiges Lied singen!' Schallendes Gelächter!",
          "mittelstufe": "Karneval der Antike: Der Bohnenkönig bringt ausgelassene Fröhlichkeit in jeden Winkel.",
          "oberstufe": "Ritualisierter Mummenschanz: Der Saturnalicius Princeps ist der historische Ahnherr des Karnevalsprinzen."
        }
      },
      {
        "id": "D",
        "label": "Die Botschaft der Gleichheit aller Menschen als dauerhaftes Gesetzbuch festschreiben",
        "description": "Setzt Wissen ein, um die humanen Werte der Saturnalien über das Fest hinaus wirksam zu machen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 30,
          "adel": 25,
          "volk": 30,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Ein historischer Meilenstein! Menschlichkeit wird zum obersten Grundsatz des Römischen Rechts.",
          "mittelstufe": "Philosophische Stoa in Gesetzesform: Seneca lobt den Kaiser für echte Menschlichkeit.",
          "oberstufe": "Rechtsphilosophische Vollendung: Das Naturrecht ('Ius Naturale') erklärt alle Menschen von Natur aus für frei."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Saturnalien – Das römische Weihnachtsfest",
      "title": "17. bis 23. Dezember: 'Io Saturnalia!'",
      "explanation": {
        "unterstufe": "Die Saturnalien waren das beliebteste Fest Roms. Eine Woche lang im Dezember tauschten Herren und Sklaven die Rollen: Die Herren zogen Schürzen an und servierten das Essen, während die Sklaven feierten! Man schenkte sich Wachskerzen und Tonfigürchen. Viele Bräuche unseres heutigen Weihnachtsfestes stammen direkt von den Saturnalien ab!",
        "mittelstufe": "Beim Fest trugen alle die 'Pilleus' – eine runde Filzkappe, die sonst nur freigelassene Sklaven tragen durften. Niemand durfte arbeiten, Gerichte ruhten und Glücksspiele mit Würfeln waren für jedermann erlaubt.",
        "oberstufe": "Als das Christentum im 4. Jahrhundert Staatsreligion wurde, legte die Kirche die Feier der Geburt Jesu auf den 25. Dezember – genau in die Zeit der beliebten Saturnalien und des heidnischen Festes der unbesiegten Sonne ('Sol Invictus')."
      },
      "curiosityFact": "Bei den Saturnalien wählte jede Festrunde durch das Ziehen einer Bohne im Kuchen einen 'Narrenkönig' – dieser Brauch lebt bis heute im Dreikönigskuchen in Frankreich und der Schweiz weiter!"
    }
  },
  {
    "id": "rome2_r20",
    "roundNumber": 20,
    "locationKey": "saturnalien_vermaechtnis",
    "locationName": "Das Saturnalienfest & das Ewige Erbe Roms",
    "milestoneTitle": "Runde 20: Das Vermächtnis – Was von Rom blieb",
    "imagePath": "/assets/rome2_station_10.jpg",
    "hotspots": [
      {
        "id": "hs_r20_schrift",
        "x": 45,
        "y": 55,
        "label": "Das Römische Alphabet & Latein",
        "description": "Die Schrift, mit der dieser Text geschrieben ist; Wurzel von Französisch, Spanisch, Italienisch.",
        "icon": "✍️"
      },
      {
        "id": "hs_r20_recht",
        "x": 25,
        "y": 65,
        "label": "Das Römische Recht (Corpus Iuris)",
        "description": "'Im Zweifel für den Angeklagten' – Fundament aller modernen demokratischen Verfassungen.",
        "icon": "⚖️"
      },
      {
        "id": "hs_r20_kuppel",
        "x": 75,
        "y": 40,
        "label": "Bogen- & Kuppelarchitektur",
        "description": "Ob Kapitol in Washington oder Reichstag in Berlin – Roms Baukunst prägt die Welt.",
        "icon": "🏛️"
      }
    ],
    "situation": {
      "unterstufe": "Ein weiter Blick über die sieben Hügel Roms im goldenen Abendlicht: Zweitausend Jahre Geschichte ziehen an dir vorbei! Die Legionen sind verklungen, die Kaiser vergangen. Doch schau dich heute in deiner eigenen Welt um: Das Alphabet, mit dem du liest? Römisch! Die Monate Januar bis Dezember? Römisch! Wasserleitungen, Fußbodenheizung, Beton, Gesetze und Sprachen? Rom ist niemals untergegangen – es lebt in unserem Alltag jeden Tag weiter!",
      "mittelstufe": "Das unsterbliche Erbe Roms: Ob Romanische Sprachen (Italienisch, Französisch, Spanisch, Portugiesisch, Rumänisch) oder unzählige lateinische Lehnwörter im Deutschen (Fenster, Mauer, Wein, Schule, Arzt). Roms Kultur bildet das gemeinsame Fundament Europas.",
      "oberstufe": "Kulturhistorische Synthese: Das Römische Recht ('Corpus Iuris Civilis' des Justinian) begründet das Bürgerliche Gesetzbuch (BGB). Die Dreiteilung von Exekutive, Senat und Volk inspirierte die US-Verfassung und das moderne Völkerrecht. Roma Aeterna – die Idee der Ewigen Stadt bleibt das kulturelle Erbe der Menschheit."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Römische Recht als ewiges Gesetzbuch für Gerechtigkeit und Frieden der Völker weihen",
        "description": "Besiegelt das größte Erbe: Klare Gesetze schützen die Schwachen vor Willkür.",
        "statChanges": {
          "goetter": 35,
          "adel": 30,
          "volk": 25
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "In Stein gemeißelt für Jahrtausende: 'Gleiches Recht für alle' strahlt in die Welt!",
          "mittelstufe": "Triumph der Rechtskultur: Roms Paragrafen werden zur Wiege der Menschenrechte in Europa.",
          "oberstufe": "Rechtsstaatliche Unsterblichkeit: Das Römische Recht überdauert Reiche und Dynastien bis heute."
        }
      },
      {
        "id": "B",
        "label": "Die lateinische Sprache und Literatur als weltweites Band der Wissenschaft pflegen",
        "description": "Medizin, Biologie und Recht sprechen bis heute die Sprache Roms.",
        "statChanges": {
          "adel": 30,
          "goetter": 25,
          "volk": 20
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Latein verbindet Gelehrte über alle Grenzen hinweg: Von Ärzten bis zu Botanikern!",
          "mittelstufe": "Die Sprache der Wissenschaften: Latein bleibt das weltweite Band der europäischen Bildung.",
          "oberstufe": "Linguistisches Universalerbe: Lateinische Begriffe prägen Medizin, Philosophie und Völkerrecht."
        }
      },
      {
        "id": "C",
        "label": "Römische Ingenieurskunst (Wasserbau, Beton, Rundbögen) an alle Nachbarvölker weitergeben",
        "description": "Macht die Welt schöner, gesünder und dauerhafter durch zivilisatorischen Fortschritt.",
        "statChanges": {
          "volk": 35,
          "priester": 30,
          "adel": 20
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Städte erblühen mit sauberen Brunnen, gepflasterten Straßen und festen Brücken auf drei Kontinenten!",
          "mittelstufe": "Zivilisatorische Wohltat: Roms Baukunst schenkt Millionen Menschen Hygiene und Mobilität.",
          "oberstufe": "Technologietransfer der Antike: Aquädukte und Betonbau revolutionieren das Bauwesen für immer."
        }
      },
      {
        "id": "D",
        "label": "Die goldene Zusammenfassung aller 20 Runden in eine goldene Ehrenstele auf dem Forum meißeln",
        "description": "Setzt alles gesammelte Wissen ein: Meisterhafter Abschluss der Expedition durch Religion, Alltag & Kultur!",
        "epCost": 2,
        "statChanges": {
          "goetter": 40,
          "adel": 35,
          "volk": 35,
          "priester": 30,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "GLÜCKWUNSCH! Du hast die 20 Runden durch das Antike Rom mit Bravour gemeistert! Ein wahrer Meister!",
          "mittelstufe": "Historischer Meilenstein: Kultur, Götter und Alltag Roms sind nun lebendig in deinem Herzen verankert.",
          "oberstufe": "Kulturelle Krönung: Du hast das zweite offizielle Rom-Meisterspiel mit Höchstpunktzahl vollendet!"
        }
      }
    ],
    "lexiconEntry": {
      "term": "Roma Aeterna – Was von Rom blieb",
      "title": "Unser Alltag ist römisch!",
      "explanation": {
        "unterstufe": "Das Römische Reich ging vor über 1.500 Jahren unter – doch wir leben jeden Tag mitten in seinem Erbe: Unsere Buchstaben, der Kalender mit 12 Monaten, das Zählen von Stunden und Minuten, Beton für Brücken und viele Wörter (Fenster = fenestra, Mauer = murus, Wein = vinum, Straße = strata).",
        "mittelstufe": "Ohne das Römische Recht gäbe es keine moderne Demokratie. Grundsätze wie 'In dubio pro reo' ('Im Zweifel für den Angeklagten') oder 'Nemo iudex in causa sua' ('Niemand darf Richter in eigener Sache sein') stammen direkt von römischen Juristen.",
        "oberstufe": "Kultur, Recht und Architektur des Westens ruhen auf drei antiken Säulen: Der griechischen Philosophie, dem römischen Staats- und Rechtswesen und der jüdisch-christlichen Ethik."
      },
      "curiosityFact": "Selbst die 'Kaiser'-Semmel beim Bäcker heißt so, weil das Wort Kaiser von 'Caesar' abstammt – Rom steckt sogar in unserem Frühstücksbrötchen!"
    }
  }
];

export const ROME_CULTURE_MASTER_GAME: GameDefinition = {
  id: 'game_rome_culture_official',
  title: 'Brot, Götter & Spiele – Das Leben im Antiken Rom',
  subtitle: 'Kultur, Alltag, Religion & Baukunst in der Metropole des Weltreichs',
  era: 'Antikes Rom (Kultur & Alltag)',
  archetype: 'reigns_balance',
  artStyle: 'pixel_art',
  eraThemeId: 'rome_imperial',
  gradeLevel: 'unterstufe',
  targetGrades: 'Klassenstufe 5/6 & Vertiefung 7–9 (Regelschule & Gymnasium)',
  coreTopics: [
    'Das Pantheon & das römische Götterpantheon',
    'Sibyllinische Bücher & Vorzeichen (Omina)',
    'Das römische Wohnhaus (Domus) & Lararium (Hausgötter)',
    'Schule, Wachstafel & der Griffel (Stilus)',
    'Der Rundtempel der Vesta & die 6 heiligen Vestalinnen',
    'Die Priesterkollegien & der Pontifex Maximus',
    'Aquädukte & Ingenieurskunst (Pont du Gard / Groma)',
    'Die Cloaca Maxima & unterirdische Hygiene',
    'Die Kaiserthermen (Caracalla) – Caldarium bis Frigidarium',
    'Tischsitten beim Gastmahl (Triclinium & Garum)',
    'Insulae-Mietskasernen & die Feuerwehr (Vigiles)',
    'Thermopolien – Antike Fast-Food-Kultur & Garküchen',
    'Circus Maximus – Die 4 Faktionen & 250.000 Fans',
    'Quadriga-Rennen um die Spina & das Naufragium',
    'Gladiatoren im Ludus – Retiarius gegen Secutor',
    'Die Arena des Kolosseums & das Daumenurteil (Rudis)',
    'Katakomben an der Via Appia & das frühe Christentum (Ichthys)',
    'Die Basilika – Vom Gerichtssaal zur Kathedrale',
    'Das Saturnalienfest (Io Saturnalia!) & Rollentausch',
    'Roma Aeterna – Was von Rom in unserem Alltag blieb'
  ],
  description: 'Tauche ein in das pulsierende Leben der Millionenstadt Rom! Erlebe 20 faszinierende Runden vom Sonnenstrahl im Pantheon über geheimnisvolle Vestalinnen und halsbrecherische Wagenrennen bis zu den Katakomben der Via Appia.',
  pillars: [
    { key: 'goetter', label: 'Pax Deorum (Götter)', icon: '⚡', description: 'Götterfrieden, Opferrituale, Vorzeichen und Staatsfrömmigkeit' },
    { key: 'priester', label: 'Baukunst & Ingenieure', icon: '🏛️', description: 'Aquädukte, Betonkuppeln, Straßenbau und Kanalisation' },
    { key: 'adel', label: 'Patrizier & Senat', icon: '👑', description: 'Wohlstand, Gesetze, Festmahle und politische Ordnung' },
    { key: 'volk', label: 'Plebejer & Alltag', icon: '🍞', description: 'Brotversorgung, Mietshäuser, Bäder, Spiele und Freiheit' },
  ],
  specialResourceName: 'Omina-Weisheit',
  specialResourceEmoji: '📜',
  skillNames: {
    skill1: 'Göttliche Eingebung',
    skill2: 'Alltags- & Redekunst',
    skill3: 'Ingenieur- & Bauwissen',
  },
  heroImage: '/assets/rome_hero.jpg',
  rounds: ROME_CULTURE_ROUNDS,
  shareCode: 'ROM02',
};
