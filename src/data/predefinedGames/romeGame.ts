import { GameDefinition, RoundStory } from '../../types/game';

export const ROME_ROUNDS: RoundStory[] = [
  {
    "id": "rome_r01",
    "roundNumber": 1,
    "locationKey": "palatin_gruendung",
    "locationName": "Palatin-Hügel & Tiber-Biegung (753 v. Chr.)",
    "milestoneTitle": "Runde 1: Die heilige Furche am Palatin",
    "imagePath": "/assets/rome_station_01.jpg",
    "hotspots": [
      {
        "id": "hs_r1_pflug",
        "x": 48,
        "y": 55,
        "label": "Der bronzene Pflug (Sulcus Primigenius)",
        "description": "Mit einem weißen Stier und einer Kuh zieht Romulus die heilige Stadtgrenze (Pomerium).",
        "icon": "🐂"
      },
      {
        "id": "hs_r1_huetten",
        "x": 75,
        "y": 35,
        "label": "Schilfhütten der Latiner",
        "description": "Einfache Lehm- und Holzunterstände auf den geschützten Hügeln über den sumpfigen Tälern.",
        "icon": "🏕️"
      },
      {
        "id": "hs_r1_tiber",
        "x": 20,
        "y": 65,
        "label": "Tiberfurt & Tiberinsel",
        "description": "Strategischer Knotenpunkt des Salzhandels (Via Salaria) zwischen Etrurien und Kampanien.",
        "icon": "🌊"
      }
    ],
    "situation": {
      "unterstufe": "Frühling 753 v. Chr.: Auf dem Palatin-Hügel oberhalb des Tibers soll eine neue Stadt entstehen. Du stehst an der Seite von Romulus. Mit einem Pflug zieht er die heilige Grenzlinie im Boden. Doch sein Bruder Remus lacht spöttisch über den niedrigen Erdwall und will darüberspringen.",
      "mittelstufe": "Der Legende nach gründeten Romulus und Remus, die von einer Wölfin gesäugt worden waren, Rom im April 753 v. Chr. Als Romulus das Pomerium (die sakrale Stadtgrenze) pflügt, bricht ein tödlicher Streit um Rangordnung, Götterzeichen und Autorität aus.",
      "oberstufe": "Archäologisch belegt als Verschmelzung eisenzeitlicher Hirtensiedlungen auf den Hügeln über der Tiberfurt. Das Ritual des Sulcus Primigenius begründet das Pomerium – eine völkerrechtlich und sakral bindende Grenze, deren Verletzung mit dem Tod bedroht war."
    },
    "choices": [
      {
        "id": "A",
        "label": "Remus im Zorn zurückweisen und die Heiligkeit der Stadtgrenze kompromisslos durchsetzen",
        "description": "Macht unmissverständlich klar: Niemand überschreitet ungestraft Roms Mauern!",
        "statChanges": {
          "goetter": 15,
          "adel": -5,
          "volk": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Romulus' Zorn ist furchtbar: 'So möge jeder sterben, der über meine Mauern springt!' Die Siedler erstarren in Ehrfurcht.",
          "mittelstufe": "Das unerbittliche Gesetz des Pomeriums: Die Tat schockiert die Gemeinschaft, festigt jedoch Romulus' unbestrittene Führungsrolle.",
          "oberstufe": "Konstituierung sakraler Staatlichkeit: Der Brudermord symbolisiert das Primat staatlicher Grenzintegrität über familiäre Bindungen."
        }
      },
      {
        "id": "B",
        "label": "Zwischen den Brüdern vermitteln und Remus die Herrschaft über den Aventin-Hügel anbieten",
        "description": "Teilt das Land friedlich auf, um das Blutvergießen unter den Gründern zu verhindern.",
        "statChanges": {
          "adel": 15,
          "volk": 15,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Remus nickt zögernd ein. Beide Brüder opfern den Göttern und die Hirten atmen erleichtert auf.",
          "mittelstufe": "Diplomatischer Ausgleich: Du verhinderst den Fluch des Brudermordes und schaffst zwei verbündete Zentren auf den Hügeln.",
          "oberstufe": "Föderative Siedlungskonsolidierung: Ein pragmatischer Interessenausgleich dämpft zentrifugale Kräfte der frühen Stammesgruppen."
        }
      },
      {
        "id": "C",
        "label": "Die Priester bitten, den Vogelflug (Auspizien) erneut zu befragen",
        "description": "Sucht den Willen der Götter, um jeden menschlichen Streit durch göttliche Vorzeichen zu beenden.",
        "statChanges": {
          "goetter": 20,
          "priester": 10,
          "adel": 5
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Zwölf Geier kreisen majestätisch über dem Palatin! Das Volk jubelt: Die Götter haben für Romulus entschieden!",
          "mittelstufe": "Sakrale Bestätigung: Die Auspizien bringen göttliche Klarheit und beenden den Streit ohne offene Rebellion.",
          "oberstufe": "Augurale Legitimation: Die rituelle Befragung der Götter stellt den Konsens der Frühgesellschaft auf eine transzendente Basis."
        }
      },
      {
        "id": "D",
        "label": "Rom als offenes Asyl für Verstoßene, Wanderer und Hirten ausrufen",
        "description": "Setzt Wissen ein, um Roms Bevölkerung durch ein bedingungsloses Asylrecht über Nacht zu vervielfachen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 20,
          "adel": 15,
          "volk": 25,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Aus allen Richtungen strömen Menschen herbei! Hunderte Hirten und Flüchtlinge errichten neue Hütten auf den Hügeln.",
          "mittelstufe": "Der Asyl-Geniestreich: Durch die Aufnahme von Fremden wächst Rom rasant vom Weiler zur wehrhaften Kleinstadt heran.",
          "oberstufe": "Inklusive Gründungsstrategie: Das 'Asylum Romuli' begründet Roms historische Einzigartigkeit zur schnellen Integration fremder Ethnien."
        }
      }
    ],
    "lexiconEntry": {
      "term": "753 v. Chr. – Roms Gründung",
      "title": "„7-5-3 – Rom schlüpft aus dem Ei“",
      "explanation": {
        "unterstufe": "Eine alte Eselsbrücke lautet: 'Sieben-Fünf-Drei – Rom schlüpft aus dem Ei'. Die Sage erzählt von den Zwillingen Romulus und Remus, die am Tiber ausgesetzt und von einer Wölfin gesäugt wurden.",
        "mittelstufe": "Historiker wissen heute, dass Rom nicht an einem einzigen Tag gegründet wurde. Um 750 v. Chr. wuchsen mehrere Bauernsiedlungen auf den sieben Hügeln (Palatin, Aventin, Kapitol etc.) zusammen.",
        "oberstufe": "Das Pomerium war die sakrale Stadtgrenze, innerhalb derer Waffen verboten waren. Roms Lage an der Tiberfurt sicherte die Kontrolle über den antiken Salzhandel auf der Via Salaria."
      },
      "curiosityFact": "Die berühmte Bronzestatue der 'Kapitolinischen Wölfin' steht bis heute als Wahrzeichen im Museum auf dem Kapitol in Rom!"
    }
  },
  {
    "id": "rome_r02",
    "roundNumber": 2,
    "locationKey": "palatin_gruendung",
    "locationName": "Palatin-Hügel & Tiber-Biegung (753 v. Chr.)",
    "milestoneTitle": "Runde 2: Der Raub der Sabinerinnen & das erste Bündnis",
    "imagePath": "/assets/rome_station_01.jpg",
    "hotspots": [
      {
        "id": "hs_r2_consualia",
        "x": 45,
        "y": 65,
        "label": "Festspiele der Consualia",
        "description": "Pferderennen zu Ehren des Gottes Consus locken die Nachbarstämme an.",
        "icon": "🏇"
      },
      {
        "id": "hs_r2_tatius",
        "x": 75,
        "y": 55,
        "label": "Sabinerkönig Titus Tatius",
        "description": "Führt das Heer der empörten Sabiner gegen die junge Festung auf dem Kapitol.",
        "icon": "⚔️"
      },
      {
        "id": "hs_r2_frauen",
        "x": 25,
        "y": 70,
        "label": "Die sabinischen Frauen",
        "description": "Stellen sich mutig zwischen die kämpfenden Heere ihrer Väter und Ehemänner.",
        "icon": "🕊️"
      }
    ],
    "situation": {
      "unterstufe": "Rom hat viele wehrhafte Männer, aber kaum Frauen. Die Nachbarstämme verweigern den Römern die Heirat. Während eines prächtigen Festes rauben die Römer die sabinischen Frauen. Wenig später marschiert ein riesiges Sabinerheer auf Rom zu!",
      "mittelstufe": "Der 'Raub der Sabinerinnen' bedroht die Existenz der jungen Stadt. Die Sabiner belagern das Kapitol. Doch mitten in der erbitterten Schlacht stürzen die geraubten Frauen mit ihren Neugeborenen zwischen die Speere und flehen um Frieden.",
      "oberstufe": "Historischer Mythos über den Synoikismos (Zusammenschluss) von Latinern und Sabinern. Die Frauen fungieren als Friedensstifterinnen: Statt Vernichtung entsteht eine Doppelherrschaft von Romulus und Titus Tatius."
    },
    "choices": [
      {
        "id": "A",
        "label": "Auf den Ruf der Frauen hören, die Waffen senken und die Sabiner als gleichberechtigte Bürger aufnehmen",
        "description": "Macht aus Feinden Brüder: Verschmelzt beide Völker zu einem gemeinsamen Staat.",
        "statChanges": {
          "adel": 20,
          "volk": 20,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Tränen des Friedens! Väter und Schwiegersöhne umarmen sich. Rom verdoppelt seine Bürgerzahl!",
          "mittelstufe": "Der Triumph der Verständigung: Romulus und Titus Tatius herrschen gemeinsam; Roms Machtbasis wächst gewaltig.",
          "oberstufe": "Ethnische Synthese: Die Fusion von Latinern und Sabinern begründet den quirinalischen und palatinischen Doppelstamm."
        }
      },
      {
        "id": "B",
        "label": "Einen Ausfallversuch wagen und die feindlichen Anführer im Zweikampf bezwingen",
        "description": "Beweist kriegerische Stärke, um keinen Gesichtsverlust vor den Nachbarn zu erleiden.",
        "statChanges": {
          "priester": 20,
          "adel": -10,
          "goetter": 10
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Ein blutiger Kampf tobt am Forum. Zwar siegen die Römer, doch viele tapfere Krieger fallen.",
          "mittelstufe": "Pyrrhussieg am Forum: Die Sabiner weichen, doch der Hass in der Region bleibt auf Jahrzehnte glimmen.",
          "oberstufe": "Militärische Eskalation: Roms kriegerische Durchsetzung schwächt die Nachbarschaftsbeziehungen empfindlich."
        }
      },
      {
        "id": "C",
        "label": "Einen Tempel für Jupiter Stator (den Festiger) geloben, um die Reihen zu ordnen",
        "description": "Ruft die Götter an, damit fliehende römische Truppen standhalten und die Schlacht wenden.",
        "statChanges": {
          "goetter": 20,
          "priester": 15,
          "adel": 5
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Ein Donner hallt vom Himmel! Die weichenden Römer wenden ihre Schilde und formieren sich eisern neu.",
          "mittelstufe": "Göttlicher Beistand: Das Gelübde stärkt den Kampfgeist; die Schlacht endet in einem ehrenvollen Waffenstillstand.",
          "oberstufe": "Religionssoziologische Mobilisierung: Der Kult des Jupiter Stator etabliert die sakrale Verankerung von Standhaftigkeit."
        }
      },
      {
        "id": "D",
        "label": "Einen 100-köpfigen Ältestenrat (Senat) stiften, in dem sabinische Adlige gleichrangig mitentscheiden",
        "description": "Setzt Wissen ein, um die erste Senatsverfassung der Geschichte mit Mitbestimmung zu gründen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "adel": 20,
          "volk": 15,
          "priester": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Ein historischer Moment: 100 weise Väter ('Patres') beraten künftig gemeinsam über Roms Wohl!",
          "mittelstufe": "Die Geburtsstunde des Senats: Die Einbindung der sabinischen Oberschicht sichert dauerhafte politische Stabilität.",
          "oberstufe": "Institutionalisierung des Senats: Romulus' Schaffung der 'Patrizier' legt das Fundament des römischen Verfassungslebens."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Der Senat der 100 Ältesten",
      "title": "Die 'Patres' und die Geburt der Aristokratie",
      "explanation": {
        "unterstufe": "Romulus wählte 100 erfahrene Sippenoberhäupter aus, die ihn beraten sollten. Man nannte sie 'Patres' (Väter). Aus ihren Familien entstand später der adlige Stand der 'Patrizier'.",
        "mittelstufe": "Das Wort 'Senat' stammt vom lateinischen 'senex' (der Greis / Älteste). Der Senat war das Herzstück römischer Politik: Hier saßen ehemalige Beamte auf Lebenszeit.",
        "oberstufe": "Der frühe Senat besaß die 'Auctoritas Patrum' – das Recht, Beschlüsse der Volksversammlung zu bestätigen. Er verband monarchische Führung mit aristokratischem Konsens."
      },
      "curiosityFact": "Das Wort 'Patrizier' bedeutet wörtlich 'diejenigen, die Väter haben' – also die ihre vornehme Abstammung bis zu den Gründern zurückverfolgen konnten!"
    }
  },
  {
    "id": "rome_r03",
    "roundNumber": 3,
    "locationKey": "forum_res_publica",
    "locationName": "Forum Romanum & Beginn der Republik",
    "milestoneTitle": "Runde 3: Der Sturz des Tyrannen (509 v. Chr.)",
    "imagePath": "/assets/rome_station_02.jpg",
    "hotspots": [
      {
        "id": "hs_r3_brutus",
        "x": 50,
        "y": 55,
        "label": "Lucius Iunius Brutus",
        "description": "Schwört auf dem Forum: 'Nie wieder soll ein König über Rom herrschen!'",
        "icon": "🗡️"
      },
      {
        "id": "hs_r3_rostra",
        "x": 25,
        "y": 65,
        "label": "Rednerbühne der Bürger",
        "description": "Bürger lauschen den Anklagen gegen den grausamen König Tarquinius Superbus.",
        "icon": "🗣️"
      },
      {
        "id": "hs_r3_fasces",
        "x": 75,
        "y": 45,
        "label": "Liktorenbündel (Fasces)",
        "description": "Rutenbündel mit Beil als Symbol der rechtmäßigen Amtsgewalt freier Konsuln.",
        "icon": "🪓"
      }
    ],
    "situation": {
      "unterstufe": "Jahr 509 v. Chr.: Der letzte König, Tarquinius der Stolze, unterdrückt Rom mit Willkür und Grausamkeit. Nach einem Verbrechen seines Sohnes kocht die Wut des Volkes über. Der Adlige Brutus tritt auf das Forum und fordert die Verbannung des Tyrannen!",
      "mittelstufe": "Das Ende der Monarchie: Die Tyrannei des etruskischen Königs Tarquinius Superbus führt zum Aufstand der Bürger. Rom steht an einer Wegscheide: Ein neuer König oder eine völlig neue Staatsform ohne Alleinherrscher?",
      "oberstufe": "Epochenwende zur 'Res Publica': Die Verdrängung der etruskischen Hegemonie bricht mit monarchischer Machtkonzentration. Brutus und Collatinus formulieren den Bürgereid: Jeder, der nach der Krone greift, ist vogelfrei."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Volk auf dem Forum versammeln und die Verbannung des Königs auf Lebenszeit schwören",
        "description": "Jagd die Tyrannenfamilie ohne Blutbad aus Rom und beendet die Monarchie für immer.",
        "statChanges": {
          "adel": 15,
          "volk": 15,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Jubel brandet auf! Die Stadttore schlagen hinter dem König zu. Rom ist frei!",
          "mittelstufe": "Der historische Schwur: 'Res Publica' – die 'öffentliche Sache' gehört ab heute allen Bürgern.",
          "oberstufe": "Staatstheoretische Grundlegung: Der Schwur wider das Königtum wird zum unverrückbaren Dogma römischer Identität."
        }
      },
      {
        "id": "B",
        "label": "Die Tore befestigen und einen etruskischen Gegenangriff mit Lanzen abwehren",
        "description": "Macht euch gefasst: Tarquinius wird mit den verbündeten Etruskern zurückschlagen!",
        "statChanges": {
          "priester": 20,
          "goetter": 10,
          "adel": -5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Der Angriff bricht am Fluss zusammen. Horatius Cocles verteidigt die Tiberbrücke heldenhaft!",
          "mittelstufe": "Wehrhafte Freiheit: Roms Bürgerheer beweist, dass freie Männer tapferer kämpfen als Söldner eines Königs.",
          "oberstufe": "Militärische Bewährungsprobe: Die Schlacht am Pons Sublicius festigt den Mythos unbezwingbarer Bürgertugend."
        }
      },
      {
        "id": "C",
        "label": "Den Palast des Königs beschlagnahmen und seine Ländereien an arme Bürger verteilen",
        "description": "Stärkt die kleinen Bauern, damit sie treu hinter der neuen Republik stehen.",
        "statChanges": {
          "volk": 20,
          "adel": -5,
          "priester": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die einfachen Bauern danken es euch: Sie bebauen das Land und stehen bewaffnet Wache für Rom.",
          "mittelstufe": "Soziale Absicherung der Freiheit: Eigentum bindet die Plebejer fest an das Schicksal der neuen Republik.",
          "oberstufe": "Agrarpolitische Stabilisierung: Frühe Landdistribution neutralisiert royalistische Restaurationsversuche."
        }
      },
      {
        "id": "D",
        "label": "Das Doppelamt der Konsuln mit Annuität und Kollegialität stiften",
        "description": "Setzt Wissen ein, um die Macht auf zwei gewählte Konsuln für genau 1 Jahr zu begrenzen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "adel": 20,
          "volk": 20,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Geniales System! Zwei Konsuln wachen füreinander: Keiner kann mehr zum König werden!",
          "mittelstufe": "Verfassungshistorischer Meilenstein: Das Prinzip der Gewaltenteilung (Annuität & Kollegialität) ist geboren.",
          "oberstufe": "Strukturelle Institutionalisierung: Das Doppelkonsulat verhindert Diktatur und garantiert rechtsstaatliche Kontrolle."
        }
      }
    ],
    "lexiconEntry": {
      "term": "509 v. Chr. – Beginn der Republik",
      "title": "„Res Publica“ – Die Sache des Volkes",
      "explanation": {
        "unterstufe": "Nachdem die Römer ihren bösen König verjagt hatten, wollten sie nie wieder von einem Herrscher allein regiert werden. Sie wählten jedes Jahr zwei 'Konsuln', die gemeinsam regierten.",
        "mittelstufe": "Zwei Prinzipien waren heilig: 1. Kollegialität (zwei Konsuln mit gegenseitigem Veto-Recht) und 2. Annuität (Amtszeit genau ein Jahr). So konnte niemand eine Diktatur errichten.",
        "oberstufe": "Die römische Republik war keine Demokratie nach modernem Sinn, sondern eine Mischverfassung (nach Polybios) aus monarchischen (Konsuln), aristokratischen (Senat) und demokratischen (Volksversammlung) Elementen."
      },
      "curiosityFact": "Bis zum Untergang des Weströmischen Reiches zählte man die Jahre nicht nach Zahlen, sondern nach den Namen der beiden amtierenden Konsuln!"
    }
  },
  {
    "id": "rome_r04",
    "roundNumber": 4,
    "locationKey": "forum_res_publica",
    "locationName": "Forum Romanum & Beginn der Republik",
    "milestoneTitle": "Runde 4: Die Verfassung & der Cursus Honorum",
    "imagePath": "/assets/rome_station_02.jpg",
    "hotspots": [
      {
        "id": "hs_r4_curia",
        "x": 45,
        "y": 45,
        "label": "Curia Hostilia",
        "description": "Das alte Senatsgebäude, in dem Roms Nobilität Debatten führt.",
        "icon": "🏛️"
      },
      {
        "id": "hs_r4_toga",
        "x": 75,
        "y": 60,
        "label": "Toga Praetexta mit Purpursaum",
        "description": "Getragen von amtierenden Magistraten als Zeichen der Würde.",
        "icon": "👔"
      },
      {
        "id": "hs_r4_urne",
        "x": 25,
        "y": 70,
        "label": "Wahlurne der Komitien",
        "description": "Stimmabgabe der Bürger auf dem Marsfeld für Prätoren und Konsuln.",
        "icon": "🗳️"
      }
    ],
    "situation": {
      "unterstufe": "Roms neue Republik braucht feste Regeln! Junge Männer aus vornehmen Familien wollen in die Politik. Doch wer Konsul werden will, muss ganz unten anfangen. Die Ämterleiter ('Cursus Honorum') verlangt strenge Prüfungen und Dienst für den Staat.",
      "mittelstufe": "Die Ämterlaufbahn des römischen Staats: Quästor (Finanzen), Ädil (Spiele & Märkte), Prätor (Rechtsprechung) bis zum Konsulat. Nur wer sich im Krieg und bei der Rechnungsprüfung bewährt, steigt auf.",
      "oberstufe": "Die institutionelle Statik der Nobilität: Der Cursus Honorum reglementiert Ehrgeiz, minimiert Verfassungsbrüche durch Mindestalter (Leges annales) und koppelt politisches Ansehen (Dignitas) an messbare Staatsleistungen."
    },
    "choices": [
      {
        "id": "A",
        "label": "Als Quästor die Staatskasse (Aerarium) im Saturntempel penibel auf Centurien-Gelder prüfen",
        "description": "Macht euch einen Namen durch absolute Unbestechlichkeit und Finanzdisziplin.",
        "statChanges": {
          "goetter": 15,
          "adel": 15,
          "volk": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Kein Sesterz fehlt! Die Senatoren loben deine Gründlichkeit und dein Ansehen wächst.",
          "mittelstufe": "Vorbildliche Kassenführung: Deine Integrität öffnet dir die Tore für die höheren Ämter.",
          "oberstufe": "Finanzielle Glaubwürdigkeit: Als integrer Quästor erwirbst du die lebenslange Mitgliedschaft im Senat."
        }
      },
      {
        "id": "B",
        "label": "Als Ädil prachtvolle Festspiele und kostenlose Getreidespenden für das Volk organisieren",
        "description": "Investiert euer Privatvermögen, um die Gunst der einfachen Bürger zu gewinnen.",
        "statChanges": {
          "volk": 25,
          "adel": 5,
          "goetter": -10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Bürger jubeln dir auf den Straßen zu! Jeder kennt deinen Namen und wählt dich.",
          "mittelstufe": "Populäre Beliebtheit: Der Aufwand verschlingt Gold, sichert dir aber die Stimmen der Volksversammlung.",
          "oberstufe": "Klientelpolitik im Vorfeld der Wahlen: Großzügige Munifizenz legt das Fundament künftigen Wahlerfolgs."
        }
      },
      {
        "id": "C",
        "label": "Als Militärtribun mit den Legionen in Kampanien marschieren und Beute heimbringen",
        "description": "Beweist Tapferkeit im Feld, um den Respekt der Soldaten und Senatoren zu erringen.",
        "statChanges": {
          "priester": 20,
          "goetter": 10,
          "adel": 5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Mit Narben und Beutegold kehrst du heim: Das Heer feiert dich als mutigen Anführer!",
          "mittelstufe": "Militärische Lorbeeren: In Rom gilt soldatische Tapferkeit als höchste Tugend ('Virtus').",
          "oberstufe": "Martialische Bewährung: Erfolgreiches Kriegskommando erfüllt die zentrale Voraussetzung für die Prätur."
        }
      },
      {
        "id": "D",
        "label": "Ein Gesetz gegen Amtsmissbrauch und Bestechung (Leges de repetundis) einbringen",
        "description": "Setzt Wissen ein, um die Republik vor Korruption und Ämterkauf dauerhaft zu schützen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 20,
          "adel": 15,
          "volk": 20,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Ein kühnes Gesetz! Selbst reiche Patrizier müssen sich künftig vor Gerichten verantworten.",
          "mittelstufe": "Stärkung der Rechtsordnung: Dein Gesetz schützt die Provinzen vor gierigen Statthaltern.",
          "oberstufe": "Rechtsstaatliche Konsolidierung: Du schaffst ständige Gerichtshöfe (Quaestiones perpetuae) gegen Amtswillkür."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Cursus Honorum – Die Ämterleiter",
      "title": "Vom Quästor zum Konsul",
      "explanation": {
        "unterstufe": "Im antiken Rom konnte man nicht einfach Herrscher werden. Man musste eine Treppe aus Ämtern erklimmen: Zuerst Schatzmeister (Quästor), dann Marktmeister (Ädil), dann Richter (Prätor) und schließlich Staatschef (Konsul).",
        "mittelstufe": "Für jedes Amt gab es ein Mindestalter: Quästor ab 30 Jahren, Prätor ab 39, Konsul ab 42. So stellte man sicher, dass nur reife, erfahrene Männer an der Spitze des Weltreichs standen.",
        "oberstufe": "Politiker erhielten für ihre Ämter kein Gehalt; im Gegenteil: Sie zahlten Spiele und Bauten aus eigener Tasche. Politik war daher ein Privileg der wohlhabenden Oberschicht (Nobilität)."
      },
      "curiosityFact": "Römische Konsuln trugen bei Wahlen eine schneeweiß gebleichte Toga ('toga candida') – davon stammt unser heutiges deutsches Wort 'Kandidat' ab!"
    }
  },
  {
    "id": "rome_r05",
    "roundNumber": 5,
    "locationKey": "staendekaempfe_aventin",
    "locationName": "Heiliger Berg (Mons Sacer) & Zwölftafelgesetz",
    "milestoneTitle": "Runde 5: Der Streik der Plebejer (Secessio Plebis)",
    "imagePath": "/assets/rome_station_03.jpg",
    "hotspots": [
      {
        "id": "hs_r5_streik",
        "x": 40,
        "y": 65,
        "label": "Zeltlager der Plebejer",
        "description": "Bauern und Handwerker haben Rom verlassen; die Stadt liegt lahm.",
        "icon": "⛺"
      },
      {
        "id": "hs_r5_menenius",
        "x": 75,
        "y": 55,
        "label": "Menenius Agrippa",
        "description": "Erzählt das berühmte Gleichnis vom Magen und den rebellierenden Gliedern.",
        "icon": "🗣️"
      },
      {
        "id": "hs_r5_volkstribun",
        "x": 25,
        "y": 70,
        "label": "Das neue Amt: Volkstribun",
        "description": "Gewählte Schutzherren der Plebejer mit unantastbarem Status (Sacrosanctitas).",
        "icon": "🛡️"
      }
    ],
    "situation": {
      "unterstufe": "Jahr 494 v. Chr.: Das Maß ist voll! Die einfachen Bürger (Plebejer) schuften und kämpfen in allen Kriegen, haben aber keine politischen Rechte und verarmen durch Schulden. Wütend packen sie ihre Sachen und ziehen aus Rom aus auf den Heiligen Berg – der erste Generalstreik der Geschichte!",
      "mittelstufe": "Die Ständekämpfe erschüttern Rom: Ohne Plebejer gibt es kein Brot, keine Handwerker und keine Soldaten mehr. Die adligen Patrizier geraten in Panik, da feindliche Nachbarn vor den Toren stehen.",
      "oberstufe": "Die 'Secessio plebis' als revolutionäres Druckmittel: Plebejer verweigern den Wehrdienst und bilden eine Gegengesellschaft. Um den Staatskollaps zu verhindern, muss der Senat Zugeständnisse machen: Die Volkstribune mit Veto-Recht."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Volkstribunat mit dem Veto-Recht ('Ich verbiete!') und Schutz vor Verhaftung anerkennen",
        "description": "Gebt den Plebejern eigene Schutzbeamte, um den Streik friedlich zu beenden.",
        "statChanges": {
          "volk": 25,
          "adel": -5,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Großer Jubel auf dem Berg! Die Plebejer kehren nach Rom zurück und die Arbeit beginnt wieder.",
          "mittelstufe": "Historischer Sieg der Plebejer: Das 'Veto' der Tribunen wird zum schärfsten Schutzschild der Bürger.",
          "oberstufe": "Konstitutionelle Dualität: Die Volkstribune erringen die 'Sacrosanctitas' – jeder Übergriff auf sie ist todeswürdig."
        }
      },
      {
        "id": "B",
        "label": "Menenius Agrippa mit dem Gleichnis vom Magen und den Gliedern zur Versöhnung entsenden",
        "description": "Erklärt den Streikenden, dass der Adel (Magen) und das Volk (Glieder) einander brauchen.",
        "statChanges": {
          "adel": 15,
          "volk": 15,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Worte rühren die Menge: Man begreift, dass Rom nur gemeinsam überleben kann.",
          "mittelstufe": "Erfolgreiche Fabel: Der philosophische Vergleich nimmt den Zorn und öffnet Verhandlungen.",
          "oberstufe": "Organologische Staatstheorie: Agrippas Rede begründet das Bild des Staates als organische Gemeinschaft."
        }
      },
      {
        "id": "C",
        "label": "Die drückende Schuldknechtschaft sofort gesetzlich mildern und verschuldete Bauern freilassen",
        "description": "Entlastet die Ärmsten von der Angst, bei Missernten in die Sklaverei gestürzt zu werden.",
        "statChanges": {
          "volk": 20,
          "adel": -10,
          "priester": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Freudentränen bei den Familien: Hunderte Väter werden aus den Schuldkammern entlassen!",
          "mittelstufe": "Humanitäre Wende: Das Ende der brutalen Schuldknechtschaft stärkt den Mittelstand der Kleinbauern.",
          "oberstufe": "Sozialökonomische Entspannung: Schuldenerlasse sichern die Rekrutierungsbasis der Bürgermiliz."
        }
      },
      {
        "id": "D",
        "label": "Eine Plebejer-Volksversammlung (Concilium Plebis) gründen, deren Beschlüsse Staatsgesetz werden",
        "description": "Setzt Wissen ein, um den Plebejern ein eigenes Parlament für rechtsverbindliche Plebiszite zu stiften.",
        "epCost": 2,
        "statChanges": {
          "volk": 30,
          "goetter": 15,
          "adel": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Unglaublich! Ab heute gelten Gesetze des Volkes für ganz Rom – ein Triumph der Demokratie!",
          "mittelstufe": "Die Lex Hortensia im Keim: Plebiszite binden ab sofort den gesamten Staat – Patrizier wie Plebejer.",
          "oberstufe": "Demokratisierung des Gesetzeswerks: Das Concilium Plebis bricht das aristokratische Rechtsmonopol des Senats."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Ständekämpfe & das Veto",
      "title": "Der erste Generalstreik der Geschichte",
      "explanation": {
        "unterstufe": "Vor 2.500 Jahren streikten die einfachen Bürger Roms gegen die reichen Adligen. Sie zogen auf einen Hügel und weigerten sich zu kämpfen. So erstritten sie eigene Vertreter: Die 'Volkstribune'.",
        "mittelstufe": "Ein Volkstribun konnte mit einem einzigen Wort ('Veto' – lateinisch für 'Ich verbiete!') jedes Gesetz des Senats stoppen. Seine Person war heilig und unantastbar ('sacrosanct').",
        "oberstufe": "Die Ständekämpfe dauerten über 200 Jahre (ca. 500–287 v. Chr.). Sie endeten nicht im Bürgerkrieg, sondern in verfassungsrechtlichen Kompromissen – Roms größte politische Stärke."
      },
      "curiosityFact": "Das Wort 'Veto' benutzen wir bis heute: Im UN-Sicherheitsrat haben die fünf ständigen Mitglieder genau dieses uralte römische Einspruchsrecht!"
    }
  },
  {
    "id": "rome_r06",
    "roundNumber": 6,
    "locationKey": "staendekaempfe_aventin",
    "locationName": "Heiliger Berg (Mons Sacer) & Zwölftafelgesetz",
    "milestoneTitle": "Runde 6: Das Zwölftafelgesetz auf dem Forum",
    "imagePath": "/assets/rome_station_03.jpg",
    "hotspots": [
      {
        "id": "hs_r6_tafeln",
        "x": 50,
        "y": 55,
        "label": "Die Zwölf Bronzetafeln",
        "description": "Öffentlich ausgestellt auf dem Forum, damit niemand Willkür erleidet.",
        "icon": "📜"
      },
      {
        "id": "hs_r6_schueler",
        "x": 25,
        "y": 70,
        "label": "Schulkinder beim Auswendiglernen",
        "description": "Jeder römische Junge musste die Zwölf Tafeln wie ein Gedicht hersagen können.",
        "icon": "👦"
      },
      {
        "id": "hs_r6_decemvirn",
        "x": 75,
        "y": 45,
        "label": "Rat der Zehn (Decemviri)",
        "description": "Die Gesetzesverfasser, die das Recht nach griechischem Vorbild aufschrieben.",
        "icon": "⚖️"
      }
    ],
    "situation": {
      "unterstufe": "Um 450 v. Chr.: Bislang kannten nur die adligen Priester die Gesetze auswendig. Sie konnten Recht nach Belieben beugen. Nun fordern die Bürger: 'Schreibt die Gesetze für alle sichtbar auf!' Auf dem Forum werden zwölf riesige Bronzetafeln feierlich enthüllt.",
      "mittelstufe": "Das Zwölftafelgesetz (Leges Duodecim Tabularum) ist das erste geschriebene Recht Roms. Es regelt Eigentum, Erbschaften, Gerichtsverfahren, aber auch uralte Riten. Von nun an gilt: Vor dem geschriebenen Gesetz sind alle Bürger gleich.",
      "oberstufe": "Kodifizierungstransformation: Die Fixierung des Gewohnheitsrechts auf Bronze bricht die patrizische Rechtsprechungsarcanum. Obwohl teils archaisch (Talionsprinzip), markieren die Zwölf Tafeln die Wiege kontinentaleuropäischer Rechtskultur."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Bronzetafeln an den Rostra aufstellen und Schulkindern das Auswendiglernen vorschreiben",
        "description": "Rechtsbewusstsein von Kindesbeinen an verankern: Recht schützt die Freiheit!",
        "statChanges": {
          "goetter": 20,
          "adel": 15,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Ganz Rom summt: Jeder Schüler lernt die Tafeln auswendig. Willkür hat keine Chance mehr!",
          "mittelstufe": "Fundament der Zivilisation: Das geschriebene Gesetz wird zum unverrückbaren Stolz aller Römer.",
          "oberstufe": "Pädagogische Rechtsverankerung: Cicero bezeugt, dass das Memorieren der Tafeln Generationen prägte."
        }
      },
      {
        "id": "B",
        "label": "Das Heiratsverbot zwischen Patriziern und Plebejern sofort ersatzlos streichen",
        "description": "Erlaubt Ehen zwischen beiden Ständen, um die Spaltung der Gesellschaft zu überwinden.",
        "statChanges": {
          "volk": 25,
          "adel": -5,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Liebe bricht Klassenschranken: Reiche Plebejer und Adlige heiraten und versöhnen Rom.",
          "mittelstufe": "Die Lex Canuleia: Die Aufhebung des Eheverbots schafft eine neue gemeinsame Führungsschicht.",
          "oberstufe": "Elitenfusion: Konnubium zwischen Patriziern und Plebejern begründet die spätere 'Nobilitas'."
        }
      },
      {
        "id": "C",
        "label": "Klare Fristen und Zeugenvorschriften bei Gerichtsprozessen festschreiben",
        "description": "Schützt arme Bürger vor Verschleppung und korrupten Schiedsrichtern.",
        "statChanges": {
          "adel": 15,
          "volk": 20,
          "priester": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Kein Prozess ohne Zeugen! Richter müssen sich streng an den Text der Tafeln halten.",
          "mittelstufe": "Verfahrenssicherheit: Formale Prozessordnungen schützen Schwache vor Mächtigen.",
          "oberstufe": "Prozessuale Rationalisierung: Klare Ladungs- und Beweisregeln verdrängen Sippenfehden endgültig."
        }
      },
      {
        "id": "D",
        "label": "Den Grundsatz 'Im Zweifel für den Angeklagten' und Verbot von Folter an Bürgern verankern",
        "description": "Setzt Wissen ein, um universelle humanistische Rechtsprinzipien für Jahrtausende zu begründen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "volk": 25,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Ein ewiges Denkmal der Gerechtigkeit! Roms Gesetze werden zum Vorbild für die ganze Welt.",
          "mittelstufe": "Rechtsphilosophischer Meilenstein: Unschuldsvermutung und Bürgerrechte schreiben Rechtsgeschichte.",
          "oberstufe": "Pionierleistung römischer Jurisprudenz: Du legst den Grundstein für das moderne kontinentale Zivilrecht."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Das Zwölftafelgesetz",
      "title": "Das erste geschriebene Gesetzbuch Roms",
      "explanation": {
        "unterstufe": "Um 450 v. Chr. ließen die Römer ihre Gesetze auf 12 Bronzetafeln meißeln und auf dem Marktplatz aufstellen. So konnte jeder nachlesen, welche Strafe drohte – Richter konnten niemanden mehr willkürlich bestrafen.",
        "mittelstufe": "Viele Gesetze klingen heute streng (z. B. 'Wer nachts fremdes Korn stiehlt, wird den Göttern geweiht'). Doch erstmals galt gleiches Recht für Patrizier und Plebejer.",
        "oberstufe": "Das Römische Recht (Corpus Iuris Civilis) basiert auf den Zwölf Tafeln. Nahezu alle modernen europäischen Gesetzbücher (wie das deutsche BGB) nutzen bis heute römische Rechtsbegriffe!"
      },
      "curiosityFact": "Obwohl die Originaltafeln beim Galliersturm 390 v. Chr. verbrannten, kannten römische Autoren fast jeden einzelnen Paragrafen noch Jahrhunderte später auswendig!"
    }
  },
  {
    "id": "rome_r07",
    "roundNumber": 7,
    "locationKey": "karthago_cannae",
    "locationName": "Schlachtfeld von Cannae & die Punischen Kriege",
    "milestoneTitle": "Runde 7: Hannibals Elefanten & das Drama von Cannae (216 v. Chr.)",
    "imagePath": "/assets/rome_station_04.jpg",
    "hotspots": [
      {
        "id": "hs_r7_hannibal",
        "x": 45,
        "y": 50,
        "label": "Hannibal Barkas",
        "description": "Genialer Feldherr Karthagos, der mit Kriegselefanten die eisigen Alpen überquerte.",
        "icon": "🐘"
      },
      {
        "id": "hs_r7_kessel",
        "x": 25,
        "y": 65,
        "label": "Die Kesselschlacht von Cannae",
        "description": "70.000 römische Legionäre werden von Hannibals Reiterei umzingelt.",
        "icon": "⚔️"
      },
      {
        "id": "hs_r7_senat",
        "x": 75,
        "y": 60,
        "label": "Unbeugsamer Senat in Rom",
        "description": "Trotz der Katastrophe weigert sich der Senat strikt, Friedensverhandlungen zu führen.",
        "icon": "🏛️"
      }
    ],
    "situation": {
      "unterstufe": "August 216 v. Chr.: Roms schwärzeste Stunde! Hannibal von Karthago ist mit Elefanten über die Alpen gezogen und hat bei Cannae das größte römische Heer aller Zeiten vernichtend geschlagen. 70.000 Römer liegen tot im Staub. Panik bricht aus: 'Hannibal ante portas – Hannibal steht vor den Toren!'",
      "mittelstufe": "Der Zweite Punische Krieg: Karthago, die Seemacht Nordafrikas, ringt mit Rom um die Weltherrschaft. Nach Cannae scheinen die Bundesgenossen abzufallen. Doch der römische Senat tut das Unglaubliche: Statt um Gnade zu betteln, verbietet er das Weinen und rüstet zum totalen Widerstand.",
      "oberstufe": "Taktisches Lehrstück der Kesselschlacht: Hannibal gelingt durch sichelförmigen Rückzug im Zentrum und Flügelumfassung der numidischen Kavallerie die Vernichtung der zahlenmäßig überlegenen römischen Legionen. Roms stoische Widerstandskraft entscheidet den Krieg."
    },
    "choices": [
      {
        "id": "A",
        "label": "Jede Kapitulation verbieten, Staatssklaven freikaufen und neue Legionen aufstellen",
        "description": "Eisernes Durchhaltevermögen: Rom verhandelt niemals nach einer Niederlage!",
        "statChanges": {
          "goetter": 20,
          "priester": 20,
          "volk": 10,
          "adel": -5,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Rom beugt sich nicht! Sklaven erhalten Waffen und schwören den Bürgereid. Der Senat bleibt standhaft.",
          "mittelstufe": "Stoische Härte: Die Welt staunt – Rom lässt sich selbst durch die blutigste Niederlage nicht brechen.",
          "oberstufe": "Kriegswirtschaftliche Totalmobilisierung: Die Weigerung zur Kapitulation raubt Hannibal die strategische Initiative."
        }
      },
      {
        "id": "B",
        "label": "Die Taktik des 'Zauderers' (Fabius Cunctator) anwenden: Hannibal zermürben statt Feldschlachten suchen",
        "description": "Verweigert offene Schlachten, schneidet Nachschub ab und verbrennt die Ernten.",
        "statChanges": {
          "priester": 15,
          "adel": 15,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Kluge Geduld: Hannibal findet keine Beute mehr und seine Soldaten werden hungrig und müde.",
          "mittelstufe": "Der geniale Zauderer: Fabius' Guerillataktik rettet Rom, ohne eine einzige Schlacht zu wagen.",
          "oberstufe": "Strategischer Ermattungskrieg: Roms überlegene Ressourcenlogistik bricht Hannibals isoliertes Invasionsheer."
        }
      },
      {
        "id": "C",
        "label": "Die treuen Bundesgenossen in Italien belohnen und Bürgerrechte in Aussicht stellen",
        "description": "Verhindert, dass etruskische und samnitische Städte zu Hannibal überlaufen.",
        "statChanges": {
          "volk": 25,
          "adel": 10,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Italien hält zusammen: Die meisten Städte schließen ihre Tore vor Hannibal und bleiben Rom treu.",
          "mittelstufe": "Politischer Bündniserfolg: Das Bündnissystem Italiens erweist sich als unzerreißbar.",
          "oberstufe": "Föderatives Kohäsionsmanagement: Rom bindet Verbündete durch rechtliche Privilegien fest an die Republik."
        }
      },
      {
        "id": "D",
        "label": "Scipio Africanus mit einer Invasionsflotte direkt nach Karthago entsenden",
        "description": "Setzt Wissen ein, um Hannibal durch einen Gegenangriff auf seine Heimatstadt aus Italien zu zwingen.",
        "epCost": 2,
        "statChanges": {
          "priester": 25,
          "goetter": 25,
          "volk": 15,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 2
        },
        "consequenceText": {
          "unterstufe": "Schachzug des Jahrhunderts! Karthago gerät in Panik und beordert Hannibal eilig nach Hause zurück!",
          "mittelstufe": "Strategische Wende: Scipio verlagert den Krieg nach Afrika und schlägt Hannibal bei Zama vernichtend.",
          "oberstufe": "Grand Strategy des Scipio Africanus: Die offensive Bedrohung des gegnerischen Zentrums beendet den Krieg."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Hannibal & die Schlacht von Cannae",
      "title": "216 v. Chr. – Das Trauma der Kesselschlacht",
      "explanation": {
        "unterstufe": "Hannibal war der berühmteste Feind Roms. Er zog mit 37 Kriegselefanten über die Alpen nach Italien. Bei Cannae lockte er das römische Riesenheer in eine Falle und umzingelte es komplett.",
        "mittelstufe": "Cannae gilt bis heute an Militärakademien weltweit als Paradebeispiel der perfekten Umfassungsschlacht. Trotz des Verlusts von 70.000 Soldaten weigerte sich Rom aufzugeben.",
        "oberstufe": "Nach dem Sieg über Karthago im Zweiten Punischen Krieg (201 v. Chr.) gab es keine Macht mehr im westlichen Mittelmeer, die Rom trotzen konnte. Das Mittelmeer wurde zu 'Mare Nostrum' ('Unser Meer')."
      },
      "curiosityFact": "Hannibal schickte nach der Schlacht von Cannae drei Scheffel voller goldener Ringe gefallener römischer Senatoren und Ritter nach Karthago, um seinen Sieg zu beweisen!"
    }
  },
  {
    "id": "rome_r08",
    "roundNumber": 8,
    "locationKey": "karthago_cannae",
    "locationName": "Schlachtfeld von Cannae & die Punischen Kriege",
    "milestoneTitle": "Runde 8: Mare Nostrum – Das Mittelmeer wird römisch",
    "imagePath": "/assets/rome_station_04.jpg",
    "hotspots": [
      {
        "id": "hs_r8_schiff",
        "x": 30,
        "y": 65,
        "label": "Römische Kriegstrireme mit Corvus",
        "description": "Enterbrücke mit Eisendorn, die Seekämpfe in Infanteriegefechte verwandelte.",
        "icon": "⚓"
      },
      {
        "id": "hs_r8_hafen",
        "x": 60,
        "y": 45,
        "label": "Hafen von Ostia Antica",
        "description": "Roms Tor zur Welt: Getreidefrachter aus Ägypten und Sizilien versorgen die Stadt.",
        "icon": "⛵"
      },
      {
        "id": "hs_r8_beute",
        "x": 80,
        "y": 70,
        "label": "Marmor, Seide & Olivenöl",
        "description": "Reichtümer aus Griechenland, Spanien und Kleinasien strömen nach Rom.",
        "icon": "🏺"
      }
    ],
    "situation": {
      "unterstufe": "Rom hat gesiegt! Karthago ist bezwungen, Spanien und Sizilien sind römische Provinzen. Römische Kriegsschiffe patrouillieren von Gibraltar bis Alexandria. Stolz nennen die Römer das ganze Mittelmeer 'Mare Nostrum' – unser Meer. Doch der gewaltige Reichtum verändert die Stadt grundlegend.",
      "mittelstufe": "Vom Bauernstaat zum Weltreich: Durch die Eroberungen fließen Millionen Sesterzen, griechische Kunstschätze und Hunderttausende Sklaven nach Rom. Reiche Senatoren kaufen riesige Landgüter, während verarmte Bauern nach Rom fliehen.",
      "oberstufe": "Strukturelle Widersprüche des Imperialismus: Der Übergang von einer agrarischen Bürgergemeinde zur imperialen Supermacht zerstört das sozioökonomische Gleichgewicht Italiens und legt den Keim für die Bürgerkriege."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Getreideversorgung Roms über Ostia mit festen Staatslagern und Flotten sichern",
        "description": "Garantiert tägliches Brot für Hunderttausende Bürger aus Sizilien und Afrika.",
        "statChanges": {
          "volk": 20,
          "priester": 15,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Goldenes Korn füllt die Speicher! Niemand in Rom muss mehr Hunger leiden.",
          "mittelstufe": "Lebensnerv des Imperiums: Die 'Annona' (Getreideversorgung) wird zum wichtigsten Stabilitätsfaktor Roms.",
          "oberstufe": "Imperiale Logistikorganisation: Die Verstaatlichung der maritimen Getreiderouten sichert die Metropole ab."
        }
      },
      {
        "id": "B",
        "label": "Griechische Philosophen, Bibliotheken und Gelehrte nach Rom holen (Hellenisierung)",
        "description": "Verbindet römische Tatkraft mit griechischer Philosophie, Kunst und Rhetorik.",
        "statChanges": {
          "goetter": 20,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Rom erstrahlt im Glanz der Weisheit: Schüler lernen Griechisch und diskutieren Philosophie.",
          "mittelstufe": "Kulturelle Hochblüte: 'Das besiegte Griechenland besiegte seinen wilden Bezwinger' – Horaz.",
          "oberstufe": "Hellenistische Kulturassimilation: Die Verschmelzung griechischer Bildung mit römischer 'Virtus' prägt das Weltreich."
        }
      },
      {
        "id": "C",
        "label": "Die Seeräuber im östlichen Mittelmeer durch eine mobile Flottenkampagne vernichten",
        "description": "Macht die Seewege frei für Händler, Reisende und Kriegskuriere.",
        "statChanges": {
          "priester": 20,
          "volk": 15,
          "adel": 5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Die Piratennester rauchen! Händler segeln wieder friedlich von Alexandria bis Neapel.",
          "mittelstufe": "Pax Maritima: Roms Flotten säubern das Meer; die Preise für Gewürze und Öl fallen rasant.",
          "oberstufe": "Seeraumsicherung: Die Befriedung der Seewege festigt Roms wirtschaftliche Hegemonie über den Mittelmeerraum."
        }
      },
      {
        "id": "D",
        "label": "Ein Provinzialsteuer-System mit festen Zensusregistern gegen Ausbeutung etablieren",
        "description": "Setzt Wissen ein, um die Provinzen vor gierigen Steuerpächtern zu schützen und loyal zu binden.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "adel": 15,
          "volk": 20,
          "priester": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Die Provinzen jubeln: Feste, gerechte Steuern statt Plünderung! Loyalität ersetzt Hass.",
          "mittelstufe": "Weitsichtige Verwaltung: Gerechte Abgaben machen die Provinzen zu treuen Säulen des Imperiums.",
          "oberstufe": "Rechtsstaatliche Provinzialverwaltung: Du brichst das korrupte System der 'Publicani' (Steuerpächter)."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Mare Nostrum – Unser Meer",
      "title": "Das Mittelmeer als römischer Binnensee",
      "explanation": {
        "unterstufe": "Die Römer nannten das Mittelmeer 'Mare Nostrum' (Unser Meer), weil alle Küsten ringsherum zu Rom gehörten: Spanien, Frankreich, Griechenland, die Türkei, Ägypten und Nordafrika.",
        "mittelstufe": "Schiffe transportierten Getreide, Olivenöl, Wein, Marmor und Seide schneller und billiger über das Meer als Fuhrwerke über Land. Ohne das Mittelmeer hätte die Millionenstadt Rom verhungern müssen.",
        "oberstufe": "Die Eroberung des Mittelmeerraums war das erste Mal in der Geschichte, dass dieser riesige Wirtschaftsraum unter einer einheitlichen Währung (Denar), Sprache (Latein/Griechisch) und Rechtsordnung vereint war."
      },
      "curiosityFact": "Römische Handelsschiffe konnten bis zu 500 Tonnen Getreide laden – so viel wie zehn moderne Güterwaggons der Eisenbahn!"
    }
  },
  {
    "id": "rome_r09",
    "roundNumber": 9,
    "locationKey": "marius_heeresreform",
    "locationName": "Legionslager & Heeresreform des Marius",
    "milestoneTitle": "Runde 9: Die Heeresreform des Marius (107 v. Chr.)",
    "imagePath": "/assets/rome_station_05.jpg",
    "hotspots": [
      {
        "id": "hs_r9_scutum",
        "x": 45,
        "y": 65,
        "label": "Rechteckiger Schild (Scutum)",
        "description": "Aus schichtverleimtem Holz mit Eisenbuckel für die Schildkrötenformation (Testudo).",
        "icon": "🛡️"
      },
      {
        "id": "hs_r9_pack",
        "x": 25,
        "y": 70,
        "label": "Marschgepäck ('Marius-Maultiere')",
        "description": "Legionäre trugen Schanzeisen, Pfähle, Kessel und Rationen für 14 Tage selbst.",
        "icon": "🎒"
      },
      {
        "id": "hs_r9_aquila",
        "x": 75,
        "y": 45,
        "label": "Der silberne Legionsadler",
        "description": "Marius macht den Adler zum alleinigen heiligen Feldzeichen aller Legionen.",
        "icon": "🦅"
      }
    ],
    "situation": {
      "unterstufe": "Jahr 107 v. Chr.: Germanische Stämme (Kimbern und Teutonen) bedrohen Italien, doch Rom hat keine Soldaten mehr! Bisher durften nur Bauern mit eigenem Landbesitz in die Legion. Der geniale Feldherr Marius bricht mit der Tradition: Er öffnet das Heer für die ärmsten Habenichtse (Proletarier) und rüstet sie auf Staatskosten aus!",
      "mittelstufe": "Die Heeresreform des Marius: Aus dem alten Bürger-Aufgebot wird eine professionelle Berufsarmee mit 16 Jahren Dienstzeit. Die Soldaten tragen ihr Gepäck selbst ('Marius' Maultiere') und werden zur am besten gedrillten Kriegsmaschine der Antike.",
      "oberstufe": "Soziale und militärische Revolution: Marius löst den Rekrutierungsengpass, schafft aber ein enormes Verfassungsproblem: Die besitzlosen Berufssoldaten schwören nicht mehr auf den Senat, sondern binden sich persönlich an ihren siegreichen Feldherrn, der ihnen Land verspricht."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Proletarier mit standardisierter Kettenrüstung (Lorica Hamata) und Pilum ausstatten",
        "description": "Schafft einheitliche Bewaffnung und Disziplin auf Staatskosten.",
        "statChanges": {
          "priester": 25,
          "goetter": 15,
          "volk": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Wie aus einem Guss! Tausende gerüstete Legionäre marschieren im Gleichschritt über das Marsfeld.",
          "mittelstufe": "Waffentechnische Überlegenheit: Die einheitliche Ausrüstung macht die Legionen unschlagbar.",
          "oberstufe": "Militärische Standardisierung: Serienfertigung von Waffen und Rüstungen begründet Roms Vorherrschaft."
        }
      },
      {
        "id": "B",
        "label": "Die Schildkrötenformation (Testudo) und stundenlangen Schanzdrill einführen",
        "description": "Jeder Legionär muss lernen, in drei Stunden ein befestigtes Lager aus dem Boden zu stampfen.",
        "statChanges": {
          "priester": 20,
          "adel": 15,
          "goetter": 5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Pfeile prasseln harmlos ab! Die Schilde schließen sich zu einem undurchdringlichen Panzerdach.",
          "mittelstufe": "Eiserner Drill: Das Schanzen schützt die Legion vor jedem Überraschungsangriff in Feindesland.",
          "oberstufe": "Taktische Meisterschaft: Die Testudo und permanente Lagerbefestigung minimieren taktische Risiken."
        }
      },
      {
        "id": "C",
        "label": "Den silbernen Adler (Aquila) als heiliges Zentrum jeder Legion vereidigen",
        "description": "Stiftet Korpsgeist und bedingungslose Treue zu den Farben der Legion.",
        "statChanges": {
          "goetter": 20,
          "adel": 15,
          "priester": 10
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Soldaten knien vor dem Adler: Kein Legionär wird je weichen, solange die Aquila glänzt!",
          "mittelstufe": "Kult des Adlers: Die Standarte wird zum heiligsten Gut; ihr Verlust gilt als ewige Schande.",
          "oberstufe": "Militärreligiöse Bindung: Der Adlerkult ersetzt tribale Loyalitäten durch professionellen Korpsgeist."
        }
      },
      {
        "id": "D",
        "label": "Ein staatliches Versorgungsprogramm für Veteranen mit garantierten Landgütern beschließen",
        "description": "Setzt Wissen ein, um die Treue der Soldaten an die Republik statt an ehrgeizige Generäle zu binden.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "volk": 25,
          "adel": 15,
          "priester": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Große Erleichterung: Nach 16 Jahren Dienst wartet ein eigener Bauernhof auf jeden Veteranen!",
          "mittelstufe": "Geniestreich zur Rettung der Republik: Die Bindung des Veteranenlands an den Staat bannt die Putschgefahr.",
          "oberstufe": "Staatliche Veteranenversorgung: Du verhinderst die Entstehung privater Klientelarmeen der späteren Bürgerkriege."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Legionäre & 'Marius' Maultiere'",
      "title": "Die unbesiegbare Berufsarmee",
      "explanation": {
        "unterstufe": "Vor Marius mussten römische Soldaten Bauern sein. Marius erlaubte jedem Bürger, Soldat zu werden. Weil die Legionäre Schaufel, Axt, Zelt und Essen für Wochen selbst schleppten, nannte man sie spöttisch 'Marius' Maultiere'.",
        "mittelstufe": "Eine Legion bestand aus ca. 5.000 schwerbewaffneten Infanteristen, aufgeteilt in 10 Kohorten. Jeder Legionär erhielt Sold, Kleidung und nach der Dienstzeit Land oder Geld.",
        "oberstufe": "Die Kehrseite der Reform: Weil der Senat den Veteranen oft das versprochene Land verweigerte, hielten die Soldaten zu ihren Feldherren (wie Sulla, Pompeius oder Caesar) statt zur Republik. Dies führte direkt in den Bürgerkrieg."
      },
      "curiosityFact": "Das Marschgepäck eines Legionärs wog bis zu 35 Kilogramm – und damit mussten sie täglich 30 Kilometer im Eilmarsch zurücklegen!"
    }
  },
  {
    "id": "rome_r10",
    "roundNumber": 10,
    "locationKey": "marius_heeresreform",
    "locationName": "Legionslager & Heeresreform des Marius",
    "milestoneTitle": "Runde 10: Die Bundesgenossenkriege – Das Bürgerrecht für Italien",
    "imagePath": "/assets/rome_station_05.jpg",
    "hotspots": [
      {
        "id": "hs_r10_italien",
        "x": 50,
        "y": 55,
        "label": "Aufstand der Bundesgenossen (Socii)",
        "description": "Samniten und Marser fordern volles römisches Bürgerrecht oder Unabhängigkeit.",
        "icon": "⚔️"
      },
      {
        "id": "hs_r10_civitas",
        "x": 25,
        "y": 70,
        "label": "Civitas Romana (Bürgerrecht)",
        "description": "Garantiert Stimmrecht, Schutz vor Auspeitschung und freie Berufswahl.",
        "icon": "📜"
      },
      {
        "id": "hs_r10_senat",
        "x": 75,
        "y": 45,
        "label": "Der Senatsbeschluss (Lex Iulia)",
        "description": "Rom lenkt ein: Alle treuen Italiener erhalten das volle römische Bürgerrecht.",
        "icon": "🏛️"
      }
    ],
    "situation": {
      "unterstufe": "Jahr 91 v. Chr.: Rom kämpft gegen die eigenen Freunde! Die Städte Italiens stellen seit Jahrhunderten die Hälfte der Truppen für Roms Kriege, werden aber wie Menschen zweiter Klasse behandelt. Als der Senat ihnen das Bürgerrecht verweigert, gründen sie einen eigenen Staat: 'Italia'!",
      "mittelstufe": "Der Bundesgenossenkrieg (Bellum Sociale): Ein erbitterter Bruderkrieg entbrennt auf der italienischen Halbinsel. Rom wird militärisch bis an den Rand der Niederlage gedrängt. Um den Zerfall zu verhindern, muss die Republik die größte politische Entscheidung ihrer Geschichte treffen.",
      "oberstufe": "Krise der exklusiven Polis: Roms Weigerung, das Bürgerrecht über die Stadtgrenzen hinaus auszuweiten, bricht auf. Mit der 'Lex Iulia' (90 v. Chr.) und 'Lex Plautia Papiria' kapituliert Rom politisch, um militärisch zu siegen: Ganz Italien wird römisch."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das volle römische Bürgerrecht (Civitas Romana) unverzüglich an alle Völker Italiens vergeben",
        "description": "Beendet den Krieg mit einem Federstrich: Macht aus Aufständischen stolze Römer!",
        "statChanges": {
          "volk": 25,
          "adel": 15,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Waffen fallen zu Boden! Von den Alpen bis Sizilien sind ab heute alle Bewohner gleichberechtigte Römer.",
          "mittelstufe": "Der weitsichtigste Beschluss Roms: Ganz Italien wächst zu einer unzerstörbaren nationalen Einheit zusammen.",
          "oberstufe": "Integration der Halbinsel: Die Ausweitung des Bürgerrechts transformiert die Stadt Rom zum Territorialstaat Italien."
        }
      },
      {
        "id": "B",
        "label": "Zuerst einen harten militärischen Sieg erringen und erst dann Verhandlungen führen",
        "description": "Zeigt Stärke im Gefecht, damit Rom nicht erpressbar wirkt.",
        "statChanges": {
          "priester": 20,
          "goetter": 10,
          "adel": -5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Feldherr Sulla schlägt die Aufständischen nieder, doch viele blühende Landschaften liegen in Trümmern.",
          "mittelstufe": "Teurer Triumph: Rom behält die Oberhand, muss das Bürgerrecht am Ende aber dennoch gewähren.",
          "oberstufe": "Militärische Schadensbegrenzung: Trotz Härte erkennt Rom die Unausweichlichkeit des politischen Zugeständnisses."
        }
      },
      {
        "id": "C",
        "label": "Bürgerrecht nur stufenweise vergeben: Zuerst eingeschränktes Handelsrecht (Ius Latii)",
        "description": "Ein Zwischenschritt, um den Einfluss der Neuwähler in der Hauptstadt langsam zu dosieren.",
        "statChanges": {
          "adel": 20,
          "goetter": 10,
          "volk": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Ein vorsichtiger Kompromiss: Viele Städte nehmen das Angebot an, auch wenn Unruhe schwelt.",
          "mittelstufe": "Graduelle Einbindung: Das 'Latinische Recht' dient als bewährter Prüfstein für vollwertige Bürgerschaft.",
          "oberstufe": "Rechtliche Abstufungspolitik: Roms Diplomatie spaltet die Rebellen durch selektive Statusprivilegien."
        }
      },
      {
        "id": "D",
        "label": "Einen gemeinsamen italienischen Bundesrat mit ständigen Sitzen in Rom einrichten",
        "description": "Setzt Wissen ein, um die neuen Bürger mit Mitsprache direkt im Herzen der Macht zu verankern.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "adel": 20,
          "volk": 25,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Historische Einigung! Gesandte aller italienischen Regionen beraten künftig brüderlich in Rom.",
          "mittelstufe": "Vollendung der italienischen Identität: Rom wird zur echten Hauptstadt eines vereinten Vaterlandes.",
          "oberstufe": "Pannationale Verfassungsreform: Du überwindest die Polisgrenzen und schaffst das Modell des modernen Bundesstaates."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Civitas Romana (Römisches Bürgerrecht)",
      "title": "Das wertvollste Dokument der Antike",
      "explanation": {
        "unterstufe": "Wer römischer Bürger war, genoss gewaltige Vorrechte: Er durfte wählen, Verträge schließen, heiraten und durfte niemals ohne Gerichtsverhandlung verurteilt oder ausgepeitscht werden.",
        "mittelstufe": "Nach dem Bundesgenossenkrieg (91–88 v. Chr.) erhielten alle freien Einwohner Italiens das Bürgerrecht. Später, im Jahr 212 n. Chr., verlieh Kaiser Caracalla es sogar allen freien Einwohnern des gesamten Weltreichs.",
        "oberstufe": "Der berühmte Ausruf 'Civis Romanus sum!' ('Ich bin römischer Bürger!') schützte selbst in den fernsten Provinzen vor Willkür örtlicher Herrscher, wie es die Bibel über den Apostel Paulus berichtet."
      },
      "curiosityFact": "Römische Bürger trugen ein hölzernes Klappdiplom mit Wachssiegeln bei sich – der erste Personalausweis der Welt!"
    }
  },
  {
    "id": "rome_r11",
    "roundNumber": 11,
    "locationKey": "gracchen_buergerkrieg",
    "locationName": "Das Kapitol & die Reformen der Gracchen",
    "milestoneTitle": "Runde 11: Die Reformen der Brüder Gracchus (133 v. Chr.)",
    "imagePath": "/assets/rome_station_06.jpg",
    "hotspots": [
      {
        "id": "hs_r11_tiberius",
        "x": 45,
        "y": 55,
        "label": "Tiberius Gracchus",
        "description": "Volkstribun, der die Begrenzung des Großgrundbesitzes fordert: 'Gebt dem Volk das Land zurück!'",
        "icon": "🗣️"
      },
      {
        "id": "hs_r11_senat",
        "x": 75,
        "y": 40,
        "label": "Konservative Senatoren (Optimaten)",
        "description": "Fürchten um ihre Besitztümer und planen den gewaltsamen Sturz des Volkstribuns.",
        "icon": "🏛️"
      },
      {
        "id": "hs_r11_kapitol",
        "x": 25,
        "y": 70,
        "label": "Blutbad am Kapitol",
        "description": "Knüppel und zerbrochene Bänke: Der erste politische Mord in der Geschichte der Republik.",
        "icon": "🩸"
      }
    ],
    "situation": {
      "unterstufe": "Jahr 133 v. Chr.: Ungerechtigkeit spaltet Rom! Reiche Senatoren besitzen riesige Landgüter mit tausenden Sklaven. Die kleinen römischen Bauernfamilien sind verarmt und hausen in den Elendsvierteln der Großstadt. Der junge Volkstribun Tiberius Gracchus will das Staatsland an arme Bürger verteilen – doch der Senat schäumt vor Wut!",
      "mittelstufe": "Der Beginn der Römischen Bürgerkriege: Tiberius Gracchus beruft sich auf das Volk und umgeht den Senat. Als er sich für ein zweites Amtsjahr wiederwählen lassen will, greifen wütende Senatoren zu Holzknüppeln und erschlagen ihn auf den Stufen des Kapitols.",
      "oberstufe": "Die Spaltung in Optimaten (Senatsadel) und Popularen (Volkspartei): Mit dem Mord an den Gracchen verlässt die römische Aristokratie den Pfad des Rechts. Gewalt wird zum Mittel der politischen Auseinandersetzung."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Ackergesetz (Lex Sempronia Agraria) friedlich mit mäßigen Höchstgrenzen im Senat verhandeln",
        "description": "Sucht den Kompromiss mit den Patriziern, um das Blutvergießen zu verhindern.",
        "statChanges": {
          "adel": 15,
          "volk": 15,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Beide Seiten atmen auf: Tausende Bauern erhalten Land, ohne dass ein einziger Tropfen Blut fließt.",
          "mittelstufe": "Meisterhafter Reformausgleich: Du rettest die Bauern und bewahrst gleichzeitig die Einheit des Staates.",
          "oberstufe": "Pragmatischer Reformismus: Kompromissbereitschaft bannt die Radikalisierung der Ständekonflikte."
        }
      },
      {
        "id": "B",
        "label": "Das Volk auf dem Forum bewaffnen und das Ackergesetz gegen jedes Senats-Veto durchpeitschen",
        "description": "Brecht den Widerstand der reichen Grundbesitzer mit eiserner Volksmacht.",
        "statChanges": {
          "volk": 25,
          "adel": -15,
          "priester": 10
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Das Gesetz geht durch! Doch finstere Blicke im Senat künden von Rache und Verrat.",
          "mittelstufe": "Pyrrhussieg der Popularen: Das Land wird verteilt, doch die Republik ist bis ins Mark gespalten.",
          "oberstufe": "Bruch der Verfassungstradition: Die Missachtung des Senatsvetos beschleunigt die Erosion der Republik."
        }
      },
      {
        "id": "C",
        "label": "Kolonien für verarmte Bürger in Übersee (Karthago / Narbo) zur Ansiedlung gründen",
        "description": "Schafft neue Existenzen im Ausland, ohne den italienischen Adelsbesitz anzutasten.",
        "statChanges": {
          "volk": 20,
          "adel": 10,
          "priester": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Neue Hoffnung in Afrika: Schiffe bringen zehntausende Familien zu fruchtbaren Neufeldern.",
          "mittelstufe": "Kolonisationserfolg: Die Auswanderung entlastet Rom und sichert die Provinzen mit treuen Bürgern.",
          "oberstufe": "Transmarine Kolonisation: Die Gründung von Bürgerkolonien außerhalb Italiens mindert den sozialen Siedlungsdruck."
        }
      },
      {
        "id": "D",
        "label": "Ein staatliches Getreidepreis-Subventionsgesetz (Lex Frumentaria) für alle Bürger erlassen",
        "description": "Setzt Wissen ein, um Brotpreise gesetzlich zu deckeln – der Vorläufer des Wohlfahrtsstaates.",
        "epCost": 2,
        "statChanges": {
          "volk": 30,
          "adel": 10,
          "goetter": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Jubel in den Gassen! Jede Familie kann sich ab sofort sicheres Getreide zum Festpreis leisten.",
          "mittelstufe": "Soziale Revolution des Gaius Gracchus: Das staatliche Getreidemonopol bannt Hungersnöte für immer.",
          "oberstufe": "Grundlegung der staatlichen Daseinsvorsorge: Die Lex Frumentaria entkoppelt Grundnahrungsmittel von Preisspekulation."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Gracchen – Vorkämpfer der Armen",
      "title": "133 v. Chr. – Das Scheitern der Reformen",
      "explanation": {
        "unterstufe": "Tiberius und Gaius Gracchus waren zwei mutige Brüder aus edler Familie. Sie sahen, wie arme Bauern ihr Land an reiche Adlige verloren, und wollten das Staatsland gerecht aufteilen. Beide wurden von wütenden Senatoren ermordet.",
        "mittelstufe": "Die Gracchen führten die 'Popularen' an (Politiker, die sich auf das Volk stützten), während die 'Optimaten' die Vorrechte des Senats verteidigten. Nach ihrem Tod herrschte in Rom 100 Jahre lang Bürgerkrieg.",
        "oberstufe": "Die Ermordung des Tiberius Gracchus 133 v. Chr. gilt Historikern als Beginn der Krise der Römischen Republik: Erstmals wurde innenpolitischer Streit mit Mord statt mit Gesetzen gelöst."
      },
      "curiosityFact": "Ihre Mutter Cornelia war berühmt für ihren Stolz: Als eine Freundin mit Juwelen prahlte, zeigte Cornelia auf ihre beiden Söhne und sagte: 'Seht, das sind meine Juwelen!'"
    }
  },
  {
    "id": "rome_r12",
    "roundNumber": 12,
    "locationKey": "gracchen_buergerkrieg",
    "locationName": "Das Kapitol & die Reformen der Gracchen",
    "milestoneTitle": "Runde 12: Spartacus & der Sklavenaufstand (73 v. Chr.)",
    "imagePath": "/assets/rome_station_06.jpg",
    "hotspots": [
      {
        "id": "hs_r12_spartacus",
        "x": 45,
        "y": 55,
        "label": "Spartacus der Gladiator",
        "description": "Thrakischer Krieger, der mit 70 Gladiatoren aus der Fechtschule in Capua ausbrach.",
        "icon": "⚔️"
      },
      {
        "id": "hs_r12_vesuv",
        "x": 75,
        "y": 35,
        "label": "Der Vesuv als Zuflucht",
        "description": "Mit Seilen aus wilden Weinreben seilten sich die Aufständischen über steile Felswände ab.",
        "icon": "🌋"
      },
      {
        "id": "hs_r12_crassus",
        "x": 25,
        "y": 70,
        "label": "Marcus Licinius Crassus",
        "description": "Reichster Mann Roms; schlägt den Aufstand mit acht Legionen erbarmungslos nieder.",
        "icon": "💰"
      }
    ],
    "situation": {
      "unterstufe": "Jahr 73 v. Chr.: Das Fundament Roms wankt von unten! Über eine Million versklavte Kriegsgefangene schuften unter Peitschenhieben auf den Latifundien und in Bergwerken. In Capua bricht der thrakische Gladiator Spartacus mit Küchenmessern aus. Bald folgen ihm 100.000 entlaufene Sklaven – Rom zittert vor Angst!",
      "mittelstufe": "Der Dritte Sklavenkrieg: Spartacus schlägt mehrere römische Heere vernichtend. Er will keine Weltherrschaft, sondern seine Leute über die Alpen in die Freiheit ihrer Heimatländer führen. Doch die Sklavenarmee spaltet sich, verlockt von Beute in Süditalien.",
      "oberstufe": "Existenzkrise der antiken Sklavenhaltergesellschaft: Die Ausbeutung unzähliger Kriegsgefangener schafft ein explosives Pulverfass. Feldherr Crassus und Pompeius schlagen den Aufstand blutig nieder: 6.000 Sklaven werden an der Via Appia gekreuzigt."
    },
    "choices": [
      {
        "id": "A",
        "label": "Spartacus mit einer gewaltigen Zangenbewegung der Legionen von Crassus und Pompeius stellen",
        "description": "Militärische Übermacht einsetzen, um die Rebellion vor Rom endgültig zu ersticken.",
        "statChanges": {
          "priester": 25,
          "goetter": 15,
          "adel": 10,
          "volk": -10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Eine gewaltige Schlacht tobt in Lukanien: Die römischen Legionen siegen; Spartacus fällt kämpfend im Getümmel.",
          "mittelstufe": "Sieg der Ordnung: Die Rebellion ist gebrochen; Rom atmet nach zwei Jahren Todesangst auf.",
          "oberstufe": "Militärische Rekonsolidierung: Crassus und Pompeius nutzen den Sieg als Sprungbrett zum gemeinsamen Konsulat."
        }
      },
      {
        "id": "B",
        "label": "Den Sklaven freien Abzug über die Alpen anbieten, wenn sie die Waffen niederlegen",
        "description": "Vermeidet den letzten blutigen Kampf und lässt die Menschen in ihre Heimatländer ziehen.",
        "statChanges": {
          "volk": 20,
          "adel": -10,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Zehntausende Menschen wandern freudig nach Norden in die Freiheit. Das Morden hat ein Ende.",
          "mittelstufe": "Humaner Ausweg: Der Senat murrt über entgangene Arbeitskräfte, doch Italien bleibt vor weiterer Plünderung verschont.",
          "oberstufe": "Pragmatische Deeskalation: Du beendest die existenzielle Bedrohung ohne riskante Endschlacht."
        }
      },
      {
        "id": "C",
        "label": "Gesetzliche Schutzrechte für Sklaven erlassen und willkürliche Grausamkeit verbieten",
        "description": "Bessert die Arbeitsbedingungen nach, um zukünftige Verzweiflungsaufstände im Keim zu ersticken.",
        "statChanges": {
          "adel": 15,
          "volk": 15,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Gutsherren dürfen Sklaven nicht mehr grundlos töten. Die Lage auf den Feldern beruhigt sich spürbar.",
          "mittelstufe": "Rechtsreform der Sklaverei: Kluge Gesetze verhindern, dass Verzweiflung erneut zur Waffe greift.",
          "oberstufe": "Rechtliche Limitierung der 'Patria Potestas': Erste Schutzgesetze gegen willkürliche Tötung stabilisieren das System."
        }
      },
      {
        "id": "D",
        "label": "Ein geregeltes Freilassungssystem mit Bürgerrechts-Chance für treue Arbeitskräfte stiften",
        "description": "Setzt Wissen ein, um Sklaven durch Hoffnung auf ehrenhafte Freilassung ('Freigelassene') loyal zu machen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "adel": 20,
          "volk": 20,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Hoffnung statt Aufstand! Fleißige Menschen können sich freikaufen und stolze römische Bürger werden.",
          "mittelstufe": "Der Aufstieg der Freigelassenen ('Liberti'): Aus Unterdrückten werden loyale Handwerker und Kaufleute Roms.",
          "oberstufe": "Soziale Integrationstransformation: Die Manumissio mit Bürgerrechtserwerb wird zum genialen Stabilitätsanker Roms."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Spartacus & die Gladiatoren",
      "title": "73 v. Chr. – Der Ruf nach Freiheit",
      "explanation": {
        "unterstufe": "Gladiatoren waren Sklaven oder Kriegsgefangene, die in Arenen vor Publikum um Leben und Tod kämpfen mussten. Spartacus floh mit Gefährten und besiegte mit einer Sklavenarmee mehrere römische Legionen.",
        "mittelstufe": "Der Aufstand zeigte die dunkle Seite des Römischen Reiches: Der Reichtum der Patrizier baute auf der Ausbeutung von Millionen Sklaven auf, die keine Rechte besaßen und als 'sprechende Werkzeuge' galten.",
        "oberstufe": "Nach der Niederschlagung ließ Crassus 6.000 gefangene Sklaven entlang der 200 Kilometer langen Via Appia zwischen Rom und Capua kreuzigen – ein grausames Abschreckungsmahnmal des Senats."
      },
      "curiosityFact": "Spartacus stammte aus Thrakien (dem heutigen Bulgarien) und hatte früher selbst als Soldat in den römischen Hilfstruppen gedient, bevor er versklavt wurde!"
    }
  },
  {
    "id": "rome_r13",
    "roundNumber": 13,
    "locationKey": "caesar_iden_maerz",
    "locationName": "Das Theater des Pompeius & die Iden des März",
    "milestoneTitle": "Runde 13: Der Rubikon & 'Alea iacta est' (49 v. Chr.)",
    "imagePath": "/assets/rome_station_07.jpg",
    "hotspots": [
      {
        "id": "hs_r13_rubikon",
        "x": 45,
        "y": 65,
        "label": "Der Grenzfluss Rubikon",
        "description": "Die Nordgrenze Italiens; wer sie mit Soldaten überquert, begeht Hochverrat.",
        "icon": "🌊"
      },
      {
        "id": "hs_r13_caesar",
        "x": 75,
        "y": 55,
        "label": "Gaius Julius Caesar",
        "description": "Siegreicher Eroberer Galliens, bewundert von seinen Soldaten der 13. Legion.",
        "icon": "👑"
      },
      {
        "id": "hs_r13_wuerfel",
        "x": 25,
        "y": 70,
        "label": "Die gefallenen Würfel",
        "description": "'Alea iacta est' – der Schritt, der den Bürgerkrieg um die Alleinherrschaft auslöst.",
        "icon": "🎲"
      }
    ],
    "situation": {
      "unterstufe": "Januar 49 v. Chr.: Julius Caesar hat ganz Gallien erobert und riesigen Ruhm erlangt. Doch der Senat in Rom fürchtet seine Macht und befiehlt ihm: 'Entlasse deine Legionen und kehre als einfacher Bürger zurück!' Caesar weiß: In Rom droht ihm ein Schauprozess. In der Nacht reitet er an den kleinen Grenzfluss Rubikon...",
      "mittelstufe": "Der Marsch auf Rom: Überschreitet ein General mit Waffen den Rubikon, gilt er als Staatsfeind. Nach langem Zögern spricht Caesar die legendären Worte: 'Alea iacta est – Der Würfel ist gefallen!' Mit der 13. Legion überquert er den Fluss. Der Bürgerkrieg gegen Pompeius und den Senat beginnt.",
      "oberstufe": "Verfassungskrise und Charismatische Herrschaft: Das Scheitern des Ersten Triumvirats (Caesar, Pompeius, Crassus) lässt die Institutionen der Republik zusammenbrechen. Caesar instrumentalisiert die Loyalität seiner Soldaten gegen den Senat."
    },
    "choices": [
      {
        "id": "A",
        "label": "Den Rubikon überschreiten und im Eilmarsch auf Rom vorrücken",
        "description": "Wagt alles auf eine Karte: 'Alea iacta est!'",
        "statChanges": {
          "priester": 25,
          "goetter": 20,
          "adel": -15,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Der Würfel ist gefallen! Roms Senatoren fliehen in Panik nach Griechenland. Caesar nimmt Rom kampflos ein.",
          "mittelstufe": "Der Handstreich auf Rom: Caesars Schnelligkeit überrumpelt Pompeius; der Senatsadel muss fliehen.",
          "oberstufe": "Strategische Offensive: Durch das kühne Überschreiten des Rubikons sichert sich Caesar Italien und die Staatskasse."
        }
      },
      {
        "id": "B",
        "label": "Die Legionen auflösen und vor Gericht in Rom mit meisterhafter Beredsamkeit für das Recht kämpfen",
        "description": "Geht kein Risiko eines Bürgerkriegs ein und vertraut auf eure Unschuld.",
        "statChanges": {
          "adel": 20,
          "goetter": 10,
          "priester": -10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Ein mutiger Schritt vor die Richter: Deine Worte fesseln das Volk, doch feindliche Senatoren planen Verbannung.",
          "mittelstufe": "Rechtsstreit auf Messers Schneide: Die Republik bleibt intakt, doch deine Macht ist gebrochen.",
          "oberstufe": "Rückkehr in die Legalität: Du vermeidest den Bürgerkrieg, wirst von der Optimatenfraktion jedoch politisch isoliert."
        }
      },
      {
        "id": "C",
        "label": "Die besiegten Bürgerkriegsgegner begnadigen und Milde ('Clementia Caesaris') walten lassen",
        "description": "Keine Proskriptionen und keine Hinrichtungen: Versöhnt Rom durch Güte.",
        "statChanges": {
          "volk": 25,
          "adel": 15,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Menschen staunen: Caesar rächt sich an niemandem und schenkt selbst Feinden das Leben!",
          "mittelstufe": "Clementia Caesaris: Deine Milde gewinnt das Herz des Volkes, nährt aber den Verrat im Verborgenen.",
          "oberstufe": "Politische Begnadigungsstrategie: 'Clementia' als Instrument monarchischer Herrschaftsstiftung."
        }
      },
      {
        "id": "D",
        "label": "Den Julianischen Kalender (365 Tage mit Schaltjahr) und Bauprojekte stiften",
        "description": "Setzt Wissen ein, um das heillose Kalenderchaos mit ägyptischer Astronomie für immer zu ordnen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "volk": 25,
          "adel": 15,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Genial berechnet! Das Jahr hat ab sofort verlässliche 365 Tage und der Monat 'Juli' ehrt Caesar.",
          "mittelstufe": "Wissenschaftlicher Triumph: Der Julianische Kalender beendet das uralte Chaos von Mond- und Sonnenjahren.",
          "oberstufe": "Zivilisatorische Meisterleistung: Die Kalenderreform ordnet das Wirtschafts- und Verwaltungsleben des Imperiums."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Julius Caesar & der Rubikon",
      "title": "49 v. Chr. – 'Alea iacta est'",
      "explanation": {
        "unterstufe": "Gaius Julius Caesar war der berühmteste römische Feldherr. Als er den kleinen Grenzfluss Rubikon überquerte, wusste er, dass es kein Zurück mehr gab. Das Sprichwort 'Den Rubikon überschreiten' bedeutet bis heute: Eine folgenschwere Entscheidung treffen.",
        "mittelstufe": "Caesar eroberte ganz Gallien (Frankreich), landete in Britannien und besiegte seinen Rivalen Pompeius im Bürgerkrieg. In Rom ließ er sich schließlich zum 'Diktator auf Lebenszeit' ernennen.",
        "oberstufe": "Caesars Milde ('Clementia') gegenüber besiegten Senatoren war neu. Doch genau diese begnadigten Senatoren (wie Brutus und Cassius) verschworen sich später gegen ihn, um die alte Republik zu retten."
      },
      "curiosityFact": "Nach Caesar ist der Monat Juli benannt – und von seinem Namen 'Caesar' stammen sowohl der deutsche Titel 'Kaiser' als auch das russische Wort 'Zar' ab!"
    }
  },
  {
    "id": "rome_r14",
    "roundNumber": 14,
    "locationKey": "caesar_iden_maerz",
    "locationName": "Das Theater des Pompeius & die Iden des März",
    "milestoneTitle": "Runde 14: Die Iden des März – 'Auch du, mein Sohn Brutus?' (44 v. Chr.)",
    "imagePath": "/assets/rome_station_07.jpg",
    "hotspots": [
      {
        "id": "hs_r14_dolche",
        "x": 50,
        "y": 55,
        "label": "23 Dolchstöße im Senat",
        "description": "60 Senatoren umringen den goldenen Thronsessel im Theater des Pompeius.",
        "icon": "🗡️"
      },
      {
        "id": "hs_r14_brutus",
        "x": 30,
        "y": 65,
        "label": "Marcus Iunius Brutus",
        "description": "Caesars enger Vertrauter, der den Dolch führt: 'Nicht, dass ich Caesar weniger liebte, sondern Rom mehr!'",
        "icon": "👤"
      },
      {
        "id": "hs_r14_pompeius",
        "x": 75,
        "y": 40,
        "label": "Statue des Pompeius",
        "description": "Zu Füßen des Standbildes seines einstigen Rivalen bricht Caesar blutüberströmt zusammen.",
        "icon": "🏛️"
      }
    ],
    "situation": {
      "unterstufe": "15. März 44 v. Chr. (Die Iden des März): Julius Caesar regiert Rom als allmächtiger Diktator auf Lebenszeit. Im Senat wächst der Hass: Über 60 Senatoren haben Dolche unter ihren Togen versteckt. Als Caesar die Senatshalle betritt, stürzen sie auf ihn ein! Sterbend erblickt Caesar seinen Freund Brutus: 'Auch du, mein Sohn?'",
      "mittelstufe": "Das Attentat auf Caesar: Die Verschwörer um Brutus und Cassius glauben, durch den Tyrannenmord die alte Republik zu retten. Doch das Volk reagiert nicht mit Jubel, sondern mit heiligem Entsetzen. Bei Caesars Leichenfeier entflammt Marcus Antonius den Zorn der Massen.",
      "oberstufe": "Das Paradoxon des Tyrannenmordes: Die Ermordung Caesars rettet die Republik nicht, sondern besiegelt ihren endgültigen Untergang. Statt Freiheit folgen 14 Jahre noch grausamere Bürgerkriege, bis Caesars Adoptivsohn Octavian (Augustus) die Alleinherrschaft antritt."
    },
    "choices": [
      {
        "id": "A",
        "label": "Auf Caesars Totenfeier sein Testament verlesen und den Bürgern Geld vermachen",
        "description": "Entfacht die Treue der Massen: Caesar schenkt jedem Bürger 300 Sesterzen!",
        "statChanges": {
          "volk": 30,
          "adel": -15,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Wut kocht hoch! Die Bürger weinen um ihren Wohltäter und jagen die Mörder aus der Stadt.",
          "mittelstufe": "Die Wende der Stimmung: Marcus Antonius liest das Testament vor; die Mörder müssen fliehen.",
          "oberstufe": "Rhetorische Massenmobilisierung: Das Testament stürzt die Mörderbande ins politische Aus."
        }
      },
      {
        "id": "B",
        "label": "Den Mördern Amnestie gewähren, um den Frieden in Rom im Senat zu wahren",
        "description": "Verhindert den nächsten Bürgerkrieg durch Verzicht auf Rache.",
        "statChanges": {
          "adel": 20,
          "volk": -10,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Ein trügerischer Waffenstillstand: Die Senatoren atmen auf, doch die Soldaten knirschen mit den Zähnen.",
          "mittelstufe": "Pragmatische Amnestie: Ein brüchiger Kompromiss hält für wenige Wochen den Frieden.",
          "oberstufe": "Konstitutionelle Scheinlösung: Der Amnestiebeschluss kann den Zusammenprall der Bürgerkriegsparteien nicht aufhalten."
        }
      },
      {
        "id": "C",
        "label": "Das Zweite Triumvirat (Octavian, Antonius, Lepidus) zur Bestrafung der Attentäter formieren",
        "description": "Schließt ein eisernes Bündnis der Rächer, um Brutus und Cassius in Griechenland zu stellen.",
        "statChanges": {
          "priester": 25,
          "goetter": 15,
          "adel": -10
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Rache für Caesar! Bei Philippi werden die Heere der Mörder vernichtend geschlagen.",
          "mittelstufe": "Das Triumvirat siegt: Die Mörder Caesars finden den Tod; die alte Senatsherrschaft ist gebrochen.",
          "oberstufe": "Machtkonzentration im Triumvirat: Das Bündnis räumt mit den Resten der republikanischen Oberschicht auf."
        }
      },
      {
        "id": "D",
        "label": "Caesar feierlich als 'Divus Julius' zum Gott erheben und ihm einen Tempel am Forum weihen",
        "description": "Setzt Wissen ein, um die kaiserliche Legitimation durch Vergöttlichung sakral zu begründen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 30,
          "volk": 25,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Ein Komet leuchtet am Himmel! Das Volk ruft: 'Caesar ist bei den Göttern!' Erster Gott Roms!",
          "mittelstufe": "Die Geburt des Kaiserkults: Der Komet ('Sidus Iulium') wird zum unbestreitbaren Zeichen göttlicher Auserwählung.",
          "oberstufe": "Sakrale Herrschaftslegitimation: Als 'Divi Filius' (Sohn des Göttlichen) wird Octavian unantastbar."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Iden des März (15. März 44 v. Chr.)",
      "title": "Das Attentat auf Gaius Julius Caesar",
      "explanation": {
        "unterstufe": "Am 15. März 44 v. Chr. wurde Caesar im Senat mit 23 Dolchstößen ermordet. Die Senatoren glaubten, Rom damit die Freiheit zurückzugeben. Doch stattdessen brach ein neuer, furchtbarer Bürgerkrieg aus.",
        "mittelstufe": "Ein Wahrsager hatte Caesar gewarnt: 'Hüte dich vor den Iden des März!' ('Iden' bezeichnete den 15. Tag im März, Mai, Juli und Oktober). Caesar schlug die Warnung in den Wind.",
        "oberstufe": "Caesar hinterließ sein gesamtes Vermögen und seinen Namen seinem damals 18-jährigen Großneffen Octavian. Dieser nutzte das Erbe meisterhaft und wurde als 'Augustus' der erste Kaiser Roms."
      },
      "curiosityFact": "Nach Caesars Ermordung erschien sieben Tage lang ein heller Komet am Himmel – die Römer glaubten fest, dies sei Caesars Seele, die zu den Göttern aufstieg!"
    }
  },
  {
    "id": "rome_r15",
    "roundNumber": 15,
    "locationKey": "augustus_pax_romana",
    "locationName": "Der Palatin & die Pax Augusta",
    "milestoneTitle": "Runde 15: Augustus & der Beginn des Prinzipats (27 v. Chr.)",
    "imagePath": "/assets/rome_station_08.jpg",
    "hotspots": [
      {
        "id": "hs_r15_augustus",
        "x": 45,
        "y": 55,
        "label": "Kaiser Augustus (Octavian)",
        "description": "Nennt sich bescheiden 'Princeps' (Erster Bürger), besitzt aber die absolute Macht.",
        "icon": "👑"
      },
      {
        "id": "hs_r15_arapacis",
        "x": 75,
        "y": 45,
        "label": "Ara Pacis Augustae",
        "description": "Der Altar des Friedens: Marmorreliefs preisen das Ende aller Bürgerkriege.",
        "icon": "🕊️"
      },
      {
        "id": "hs_r15_pantheon",
        "x": 25,
        "y": 65,
        "label": "Marmorbauten auf dem Marsfeld",
        "description": "'Ich fand Rom aus Ziegeln vor und hinterlasse es aus Marmor!'",
        "icon": "🏛️"
      }
    ],
    "situation": {
      "unterstufe": "Jahr 27 v. Chr.: 100 Jahre Bürgerkrieg sind endlich vorbei! Caesars Erbe Octavian hat alle Rivalen besiegt. Nun gibt er scheinbar alle Macht an den Senat zurück. Aus Dankbarkeit verleiht der Senat ihm den Ehrennamen 'Augustus' (der Erhabene). Er wird der allererste römische Kaiser!",
      "mittelstufe": "Das Prinzipat des Augustus: Eine geniale politische Täuschung. Offiziell bleibt Rom eine Republik mit Senat und Konsuln. In Wahrheit bündelt Augustus als 'Princeps' (Erster unter Gleichen) alle militärischen und zivilen Vollmachten auf Lebenszeit in seiner Hand.",
      "oberstufe": "Verfassungsrechtlicher Übergang zum Prinzipat: Durch die Kombination von 'Imperium proconsulare maius' (Oberbefehl über alle Legionen) und 'Tribunicia potestas' (Vetorecht und Gesetzgebung) errichtet Augustus die Monarchie unter republikanischer Fassade."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die 'Pax Romana' (Römischer Frieden) im ganzen Weltreich verkünden und die Tore des Janustempels schließen",
        "description": "Schließt die Tempeltore als uraltes Zeichen: In ganz Rom herrscht vollkommener Frieden!",
        "statChanges": {
          "goetter": 25,
          "volk": 20,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Ein feierlicher Moment: Zum ersten Mal seit 200 Jahren schließen sich die Tore des Kriegsgottes Janus!",
          "mittelstufe": "Pax Augusta: Der Friede bringt beispiellosen Wohlstand, Handel und kulturelle Blüte hervor.",
          "oberstufe": "Ideologische Friedensstiftung: Die Pax Romana wird zum wirksamsten Legitimationsinstrument des Kaisertums."
        }
      },
      {
        "id": "B",
        "label": "Die Prätorianergarde als persönliche kaiserliche Leibwache in Rom aufstellen",
        "description": "Schützt die Person des Kaisers mit neun Elitekohorten vor Attentaten im Senat.",
        "statChanges": {
          "priester": 25,
          "adel": -5,
          "goetter": 10
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Feste Bewachung: Die Prätorianer mit ihren Purpurmänteln weichen dem Kaiser nicht von der Seite.",
          "mittelstufe": "Kaiserliche Garde: Niemand wagt mehr ein Attentat wie auf Caesar; die Macht ist gesichert.",
          "oberstufe": "Institutionalisierung der Palastgarde: Die Prätorianer sichern das Regime, werden später aber zu Kaisermachern."
        }
      },
      {
        "id": "C",
        "label": "Monumentale Bauten aus weißem Carrara-Marmor auf dem Marsfeld errichten",
        "description": "Macht Rom zur strahlenden Weltmetropole: 'Eine Stadt aus Marmor!'",
        "statChanges": {
          "volk": 20,
          "adel": 15,
          "goetter": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Rom funkelt in weißem Marmor! Besucher aus aller Welt staunen über Tempel, Theater und Foren.",
          "mittelstufe": "Architektonische Propaganda: Bauten wie das Augustusforum spiegeln die ewige Größe Roms wider.",
          "oberstufe": "Urbanistische Imperialrepräsentation: Augustus nutzt Architektur zur Manifestation der goldenen Ära."
        }
      },
      {
        "id": "D",
        "label": "Den Dichter Maecenas fördern und Vergil die Nationalhymne 'Aeneis' dichten lassen",
        "description": "Setzt Wissen ein, um die römische Geschichte durch Weltliteratur in die Ewigkeit einzubrennen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 30,
          "adel": 20,
          "volk": 20,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Unsterbliche Verse! Jeder Schüler lernt die Verse von Aeneas, der aus Troja floh und Rom gründete.",
          "mittelstufe": "Die Aeneis des Vergil: Die Dichtung gibt Rom seine nationale Seele und begründet den ewigen Mythos.",
          "oberstufe": "Kulturelle Meisterpolitik: Das Mäzenatentum schafft die unvergänglichen Meisterwerke der Goldenen Latinität."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Kaiser Augustus & die Pax Romana",
      "title": "27 v. Chr. – Roms erster Kaiser",
      "explanation": {
        "unterstufe": "Augustus regierte 40 Jahre lang und beendete die grausamen Bürgerkriege. Er nannte sich nicht König oder Diktator, sondern 'Princeps' (Erster Bürger). Unter ihm begann eine 200 Jahre lange Friedenszeit: Die 'Pax Romana'.",
        "mittelstufe": "Augustus baute Straßen, Wasserleitungen und Paläste. Berühmt ist sein Satz: 'Ich fand eine Stadt aus Ziegeln vor und hinterlasse eine aus Marmor.'",
        "oberstufe": "Das Prinzipat war eine Meisterleistung der Täuschung: Augustus ließ alle republikanischen Ämter (Konsuln, Senat, Tribune) scheinbar weiterbestehen, vereinte die entscheidende Macht aber unumstößlich in seiner Person."
      },
      "curiosityFact": "Nach Kaiser Augustus ist unser achter Monat 'August' benannt – und weil der Juli (nach Caesar) 31 Tage hatte, bekam der August ebenfalls 31 Tage!"
    }
  },
  {
    "id": "rome_r16",
    "roundNumber": 16,
    "locationKey": "augustus_pax_romana",
    "locationName": "Der Palatin & die Pax Augusta",
    "milestoneTitle": "Runde 16: Römische Straßen & die kaiserliche Post (Cursus Publicus)",
    "imagePath": "/assets/rome_station_08.jpg",
    "hotspots": [
      {
        "id": "hs_r16_strasse",
        "x": 45,
        "y": 70,
        "label": "Basaltstein-Pflasterung",
        "description": "Tief fundamentierte Heerstraße mit Entwässerungsgräben und Kiesbett.",
        "icon": "🧱"
      },
      {
        "id": "hs_r16_post",
        "x": 25,
        "y": 60,
        "label": "Reiter des Cursus Publicus",
        "description": "Kaiserliche Stafettenreiter wechselten alle 15 Kilometer die Pferde.",
        "icon": "🐎"
      },
      {
        "id": "hs_r16_meile",
        "x": 75,
        "y": 55,
        "label": "Milliarium Aureum",
        "description": "Vom goldenen Meilenstein auf dem Forum führten 80.000 Kilometer Straße in alle Provinzen.",
        "icon": "🪨"
      }
    ],
    "situation": {
      "unterstufe": "Ein Weltreich braucht schnelle Verbindungen! Von Schottland bis zum Euphrat bauen römische Legionäre ein gigantisches Straßennetz aus festen Steinquadern. Mit frischen Pferden an Wechselstationen schafft die kaiserliche Post 80 Kilometer am Tag. 'Alle Wege führen nach Rom!'",
      "mittelstufe": "Der Cursus Publicus: Das römische Straßennetz umfasst über 80.000 Kilometer gepflasterte Fernstraßen und 300.000 Kilometer Nebenwege. Truppen können in Rekordzeit verlegt werden, Händler transportieren Waren sicher vor Piraten und Räubern.",
      "oberstufe": "Infrastruktur als Herrschaftsinstrument: Das Straßennetz ermöglichte die blitzschnelle administrative Durchdringung des Riesenreiches. Meilensteine informierten über Distanzen zum Forum Romanum und dienten als kaiserliche Propagandaträger."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Via Appia und Fernstraßen mit massiven Basaltpolygonen und Drainage ausbauen",
        "description": "Baut für die Ewigkeit: Mehrschichtiger Straßenbau trotzt jedem Unwetter.",
        "statChanges": {
          "volk": 20,
          "priester": 20,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Schnurgerade zieht die Straße durchs Land! Wagen rollen staubfrei und Legionen marschieren im Eiltakt.",
          "mittelstufe": "Unverwüstliche Bauweise: Römische Straßen halten noch nach zwei Jahrtausenden festen Tritt.",
          "oberstufe": "Ingenieurtechnische Höchstleistung: Schotterbetten und gewölbte Basaltdecken garantieren dauerhafte Allwettertauglichkeit."
        }
      },
      {
        "id": "B",
        "label": "Feste Wechselstationen (Mansiones) mit Herbergen und Schmieden alle 20 Kilometer einrichten",
        "description": "Schafft Rastplätze für Kuriere, Händler und kaiserliche Beamte.",
        "statChanges": {
          "priester": 15,
          "adel": 15,
          "volk": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Reiter wechseln in Minuten das Pferd: Briefe aus Ägypten erreichen Rom in Rekordzeit!",
          "mittelstufe": "Kaiserliche Nachrichtenlogistik: Der Cursus Publicus macht Rom zum schnellsten Kommunikationszentrum der Antike.",
          "oberstufe": "Staatliche Poststafetten: Standardisierte Rasthäuser sichern reibungslose militärische und zivile Berichterstattung."
        }
      },
      {
        "id": "C",
        "label": "Kaiserliche Reise-Pässe (Diploma) ausstellen, um Missbrauch der Postpferde zu verhindern",
        "description": "Strenge Kontrollen: Nur wer ein offizielles Siegel trägt, darf kaiserliche Wagen nutzen.",
        "statChanges": {
          "adel": 20,
          "goetter": 15,
          "priester": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Ordnung siegt: Die Pferde bleiben ausgeruht für dringende Depeschen des Kaisers.",
          "mittelstufe": "Bürokratische Disziplin: Amtsanmaßung wird gestoppt; die Kuriere arbeiten hocheffizient.",
          "oberstufe": "Verwaltungskontrolle: Diplome sichern die exklusive Nutzung staatlicher Logistikressourcen."
        }
      },
      {
        "id": "D",
        "label": "Den Goldenen Meilenstein (Milliarium Aureum) auf dem Forum als Nullpunkt des Weltreichs weihen",
        "description": "Setzt Wissen ein, um alle Entfernungen der Welt exakt auf das Herz Roms auszurichten.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "adel": 20,
          "volk": 20,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Alle Wege führen nach Rom! Jeder Meilenstein im Reich zeigt stolz die Meilen zum Forum.",
          "mittelstufe": "Kartografischer Meilenstein: Das Weltreich besitzt erstmals ein einheitliches Distanz- und Vermessungssystem.",
          "oberstufe": "Geopolitische Zentralisation: Das Milliarium Aureum symbolisiert Rom als unangefochtenes Gravitationszentrum des Erdkreises."
        }
      }
    ],
    "lexiconEntry": {
      "term": "„Alle Wege führen nach Rom“",
      "title": "80.000 Kilometer Reichsstraßen",
      "explanation": {
        "unterstufe": "Das Sprichwort 'Alle Wege führen nach Rom' war in der Antike wörtlich gemeint. Kaiser Augustus stellte auf dem Forum Romanum eine vergoldete Bronzesäule auf: Den 'Goldenen Meilenstein'. Von dort aus maß man alle Entfernungen im Weltreich.",
        "mittelstufe": "Römische Straßen waren meterhoch geschichtet: Unten grobe Steine, dann Kies und Sand, oben schwere Basaltplatten. Sie waren so stabil gebaut, dass viele moderne Straßen in Europa noch heute exakt auf römischen Trassen verlaufen.",
        "oberstufe": "Das Straßennetz war vor allem für die Reichssicherheit essenziell: Eine Legion konnte bei Aufständen in einer einzigen Woche mehrere hundert Kilometer marschieren."
      },
      "curiosityFact": "Um Wasser abfließen zu lassen, bauten die Römer Straßen in der Mitte leicht gewölbt – genau das Prinzip, das bis heute im Straßenbau gilt!"
    }
  },
  {
    "id": "rome_r17",
    "roundNumber": 17,
    "locationKey": "limes_varus_schlacht",
    "locationName": "Germanischer Limes & Teutoburger Wald",
    "milestoneTitle": "Runde 17: Die Varusschlacht im Urwald (9 n. Chr.)",
    "imagePath": "/assets/rome_station_09.jpg",
    "hotspots": [
      {
        "id": "hs_r17_varus",
        "x": 45,
        "y": 60,
        "label": "Statthalter Quinctilius Varus",
        "description": "Verliert drei Elitelegionen (XVII, XVIII, XIX) in den dichten Wäldern Germaniens.",
        "icon": "⚔️"
      },
      {
        "id": "hs_r17_arminius",
        "x": 25,
        "y": 50,
        "label": "Arminius der Cherusker",
        "description": "Ehemaliger römischer Offizier, der die germanischen Stämme im Hinterhalt vereinte.",
        "icon": "🐺"
      },
      {
        "id": "hs_r17_moor",
        "x": 75,
        "y": 65,
        "label": "Kalkrieser Moor & Engpass",
        "description": "Im sumpfigen Engpass zwischen Moor und Wall zerbricht die römische Marschkolonne.",
        "icon": "🌲"
      }
    ],
    "situation": {
      "unterstufe": "Herbst 9 n. Chr.: Ein nasskalter Nebel liegt über den undurchdringlichen Eichenwäldern Germaniens. Roms Feldherr Varus zieht mit 20.000 Soldaten durch den Schlamm. Plötzlich brechen tausende germanische Krieger aus dem Dickicht hervor! Der Anführer ist Arminius – ein Fürst, den Varus für seinen besten Freund hielt. Es ist die größte Katastrophe der Kaiserzeit!",
      "mittelstufe": "Die Varusschlacht (Schlacht im Teutoburger Wald): In den engen Sümpfen können die Legionen ihre Schlachtordnung nicht formieren. Drei komplette Legionen werden vernichtet; Varus stürzt sich in sein Schwert. In Rom irrt der gealterte Augustus nachts durch seinen Palast und ruft: 'Varus, gib mir meine Legionen zurück!'",
      "oberstufe": "Geostrategischer Wendepunkt: Die Niederlage bei Kalkriese beendet Roms Expansionspläne östlich des Rheins (Germania Magna). Der Rhein und die Donau werden für Jahrhunderte zur befestigten Reichsgrenze."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Truppen sammeln, einen Verteidigungswall errichten und den geordneten Rückzug antreten",
        "description": "Rettet, wer gerettet werden kann, um die Katastrophe abzufedern.",
        "statChanges": {
          "priester": 15,
          "adel": 15,
          "goetter": 5,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Unter schwersten Verlusten kämpfen sich Überlebende durch die Sümpfe an den Rhein zurück.",
          "mittelstufe": "Bittere Rettung: Wenige Einheiten entkommen dem Kessel; die Rheingrenze kann gehalten werden.",
          "oberstufe": "Taktische Schadensbegrenzung: Die Überreste der Rheinlegionen verhindern ein Übergreifen des Aufstands nach Gallien."
        }
      },
      {
        "id": "B",
        "label": "Rachefeldzüge unter Germanicus starten und die verlorenen Legionsadler zurückerobern",
        "description": "Stellt Roms Ehre wieder her: Kein germanischer Stamm darf ungestraft Legionen vernichten!",
        "statChanges": {
          "priester": 25,
          "goetter": 20,
          "adel": -10
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Germanicus marschiert mit eisernen Legionen: Die Adler werden zurückgeholt und bestattet!",
          "mittelstufe": "Roms Rache: Die Strafexpeditionen stellen die militärische Ehre wieder her, ändern aber nichts an der Grenze.",
          "oberstufe": "Ehrenrettung des Prinzipats: Die Wiedererlangung der Adleradler neutralisiert das politische Trauma in Rom."
        }
      },
      {
        "id": "C",
        "label": "Auf weitere Eroberungen im Osten verzichten und die Grenze an Rhein und Donau festigen",
        "description": "Folgt dem Vermächtnis des Augustus: Das Imperium hat seine natürlichen Grenzen erreicht.",
        "statChanges": {
          "goetter": 20,
          "volk": 20,
          "adel": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Kluge Einsicht: Rom hört auf zu erobern und sichert das Erreichte. Wohlstand zieht an den Rhein.",
          "mittelstufe": "Strategische Konsolidierung: Der Verzicht auf Germanien stabilisiert die Staatsfinanzen dauerhaft.",
          "oberstufe": "Defensive Grenzdoktrin: 'Consilium coercendi intra terminos imperii' – Augustus' Mahnung zur Begrenzung."
        }
      },
      {
        "id": "D",
        "label": "Friedliche Handelsbeziehungen und Bündnisverträge mit den germanischen Grenzvölkern stiften",
        "description": "Setzt Wissen ein, um aus Feinden friedliche Handelspartner für Bernstein, Felle und Sklaven zu machen.",
        "epCost": 2,
        "statChanges": {
          "volk": 25,
          "adel": 20,
          "goetter": 15,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Märkte statt Krieg: An Grenzübergängen tauschen Römer und Germanen Keramik gegen feine Felle.",
          "mittelstufe": "Kultureller Austausch am Limes: Handel schafft mehr Frieden als zehntausend Speere.",
          "oberstufe": "Grenzökonomie und Akkulturation: Handelsnetzwerke integrieren die Grenzstämme friedlich in den römischen Orbit."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Varusschlacht (9 n. Chr.)",
      "title": "„Varus, gib mir meine Legionen zurück!“",
      "explanation": {
        "unterstufe": "Im Jahr 9 n. Chr. lockte der germanische Fürst Arminius drei römische Legionen im dichten Wald bei Kalkriese in eine Falle. Fast alle 20.000 Römer starben. Kaiser Augustus schlug vor Verzweiflung den Kopf gegen die Wand.",
        "mittelstufe": "Die drei vernichteten Legionen (XVII, XVIII, XIX) wurden aus Scham und Aberglauben nie wieder aufgestellt; ihre Nummern blieben für immer gelöscht.",
        "oberstufe": "Die Schlacht stoppte die römische Expansion nach Osten für immer. Der Rhein wurde zur festen Grenze zwischen dem Römischen Reich und 'Germania Magna' (dem freien Germanien)."
      },
      "curiosityFact": "Bei Ausgrabungen in Kalkriese bei Osnabrück fanden Archäologen die berühmte eiserne Gesichtsmaske eines römischen Reiterhelms – ein stummer Zeuge der Katastrophe!"
    }
  },
  {
    "id": "rome_r18",
    "roundNumber": 18,
    "locationKey": "limes_varus_schlacht",
    "locationName": "Germanischer Limes & Teutoburger Wald",
    "milestoneTitle": "Runde 18: Der Obergermanisch-Raetische Limes",
    "imagePath": "/assets/rome_station_09.jpg",
    "hotspots": [
      {
        "id": "hs_r18_wachturm",
        "x": 50,
        "y": 45,
        "label": "Steinerner Wachturm",
        "description": "Signalfeuer bei Nacht und Rauchsignale bei Tag alarmieren die Kastelle in Minutenschnelle.",
        "icon": "🗼"
      },
      {
        "id": "hs_r18_palisade",
        "x": 25,
        "y": 65,
        "label": "Palisade & Grabenwall",
        "description": "550 Kilometer langes Grenzbollwerk quer durch deutsche Wälder.",
        "icon": "🪵"
      },
      {
        "id": "hs_r18_auxiliar",
        "x": 75,
        "y": 60,
        "label": "Auxiliarkastell (Saalburg)",
        "description": "Stützpunkt der Hilfstruppen mit Verwaltung, Bad und Exerzierplatz.",
        "icon": "🛡️"
      }
    ],
    "situation": {
      "unterstufe": "550 Kilometer lang zieht sich ein Bollwerk quer durch die Wälder und Berge Deutschlands: Der Limes! Holzpalisaden, Gräben und hunderte Wachtürme bewachen die Grenze des Weltreichs. Doch der Limes ist keine eiserne Mauer, sondern eine kontrollierte Zoll- und Handelsgrenze. Hier begegnen sich Römer und Germanen jeden Tag.",
      "mittelstufe": "Der Obergermanisch-Raetische Limes: Das längste Bodendenkmal Europas nach der Chinesischen Mauer. Truppen aus Syrien, Spanien und Gallien bewachen Kastelle wie die Saalburg im Taunus. Ein ausgeklügeltes Signalsystem garantiert blitzschnelle Alarmierung.",
      "oberstufe": "Grenzsoziologie des Limes: Entgegen veralteter Bilder einer 'Abgrenzungsmauer' funktionierte der Limes als regulierte Kontaktzone. Vor den Toren der Kastelle entstanden florierende Siedlungen (Vici), in denen römische Soldaten und germanische Händlerfamilien lebten."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Signalsystem mit Fackeln und Spiegeln entlang der 500 Wachtürme perfektionieren",
        "description": "Macht die Alarmkette unüberwindbar: Alarm erreicht die Hauptlegion in wenigen Minuten.",
        "statChanges": {
          "priester": 20,
          "goetter": 15,
          "adel": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Lichtblitze jagen von Turm zu Turm! Reitertruppen rücken blitzschnell zur Grenzsicherung aus.",
          "mittelstufe": "Geniale Frühwarnung: Räuberbanden haben keine Chance, unbemerkt die Grenze zu überqueren.",
          "oberstufe": "Optische Telegrafie am Limes: Die Signalredundanz minimiert Reaktionszeiten der Eingreiftruppen."
        }
      },
      {
        "id": "B",
        "label": "Feste Markttage an den Grenzübergängen erlauben und Zölle für die Staatskasse erheben",
        "description": "Verwandelt die Grenze in einen florierenden Wirtschaftsmotor.",
        "statChanges": {
          "volk": 25,
          "adel": 15,
          "priester": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Buntes Treiben an den Toren: Germanen kaufen feine Bronzegefäße und Römer erwerben Pelze.",
          "mittelstufe": "Grenzhandel zahlt sich aus: Zolleinnahmen decken den Unterhalt der Wachtürme mühelos.",
          "oberstufe": "Fiskalische Grenzexploitation: Marktordnungen und Zollstationen generieren erhebliche Staatseinnahmen."
        }
      },
      {
        "id": "C",
        "label": "Auxiliarsoldaten nach 25 Jahren treuem Grenzdienst das volle Bürgerrecht feierlich verleihen",
        "description": "Lohnt die Treue der Hilfstruppen und bindet ihre Familien für immer an Rom.",
        "statChanges": {
          "volk": 20,
          "adel": 15,
          "goetter": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Ein stolzer Tag: Krieger aus aller Welt halten ihre bronzene Bürgerurkunde in den Händen!",
          "mittelstufe": "Erfolgreiche Integration: Das Diplom macht fremde Krieger zu leidenschaftlichen Verteidigern Roms.",
          "oberstufe": "Militärische Integrationsdynamik: Die Bürgerrechtsverleihung an Veteranen romanisiert die Grenzprovinzen nachhaltig."
        }
      },
      {
        "id": "D",
        "label": "Thermen, Theater und Schulen in den Grenzkastellen (Saalburg) für alle Bürger bauen",
        "description": "Setzt Wissen ein, um römische Lebensart und Zivilisation tief im germanischen Urwald zu verankern.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "volk": 25,
          "adel": 20,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Mitten im deutschen Tann dampfen beheizte Bäder und Kinder lernen Latein! Unglaubliche Kultur!",
          "mittelstufe": "Zivilisatorisches Leuchtfeuer: Die Grenzstädtchen entwickeln sich zu blühenden Kulturzentren.",
          "oberstufe": "Kulturelle Strahlkraft (Romanisierung): Städtische Infrastruktur am Limes macht römische Lebensweise unwiderstehlich."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Der Limes in Deutschland",
      "title": "550 Kilometer UNESCO-Welterbe",
      "explanation": {
        "unterstufe": "Der Limes war die Grenze des Römischen Reiches in Deutschland. Er verlief von Rheinbrohl am Rhein bis zur Donau bei Regensburg. Über 900 Wachtürme und 120 Kastelle sicherten die Grenze.",
        "mittelstufe": "Der Limes war keine Mauer wie in China, sondern anfangs eine Holzpalisade mit Graben. An bewachten Grenzübergängen konnten Händler ein- und ausreisen, wenn sie Zoll zahlten.",
        "oberstufe": "In den Lagersiedlungen (Vici) rings um die Kastelle (wie die berühmte Saalburg bei Bad Homburg) lebten Handwerker, Gastwirte und die Familien der Soldaten – hier fand die Verschmelzung römischer und keltisch-germanischer Kultur statt."
      },
      "curiosityFact": "Auxiliarsoldaten erhielten bei der Entlassung eine bronzene Tafel ('Militärdiplom') im Taschenformat – sie bewies, dass sie und ihre Nachkommen vollwertige römische Bürger waren!"
    }
  },
  {
    "id": "rome_r19",
    "roundNumber": 19,
    "locationKey": "trajan_triumph_epilog",
    "locationName": "Das Kolosseum & der Triumphzug zum Kapitol",
    "milestoneTitle": "Runde 19: Das Kolosseum – Brot & Spiele für das Volk",
    "imagePath": "/assets/rome_station_10.jpg",
    "hotspots": [
      {
        "id": "hs_r19_arena",
        "x": 45,
        "y": 65,
        "label": "Die Arena des Kolosseums",
        "description": "Bedeckt mit feinem Sand; fasst 50.000 tobende Zuschauer.",
        "icon": "⚔️"
      },
      {
        "id": "hs_r19_pulvinar",
        "x": 75,
        "y": 40,
        "label": "Kaiserliche Loge (Pulvinar)",
        "description": "Der Kaiser zeigt Bürgernähe und entscheidet mit Handzeichen über Gnade.",
        "icon": "👑"
      },
      {
        "id": "hs_r19_brot",
        "x": 25,
        "y": 70,
        "label": "Kostenlose Brotfladen",
        "description": "'Panem et Circenses' – wer das Volk füttert und unterhält, regiert ohne Aufstand.",
        "icon": "🍞"
      }
    ],
    "situation": {
      "unterstufe": "Jahr 80 n. Chr.: Ein gewaltiger Jubel lässt den Erdboden erzittern! Kaiser Titus eröffnet das größte Bauwerk der Welt: Das Kolosseum. 50.000 Menschen sitzen auf den Rängen. Aus den Kellern heben Aufzüge wilde Tiere und Gladiatoren empor. Mit kostenlosem Getreide und Spektakeln hält der Kaiser die Millionenstadt ruhig: 'Brot und Spiele'!",
      "mittelstufe": "Panem et Circenses (Brot und Spiele): Das Kolosseum (Amphitheatrum Flavium) ist ein Meisterwerk der römischen Ingenieurskunst aus Beton und Travertinstein. 80 Eingänge schleusen die Masse in Minuten hinein und hinaus. Unter dem Arenaboden liegt das Hypogäum – ein Labyrinth aus Seilwinden, Käfigen und Maschinerie.",
      "oberstufe": "Politische Soziologie der Massenunterhaltung: Das Kolosseum diente als Kommunikationsforum zwischen Kaiser und Volk. Das Volk artikulierte Wünsche und Unmut; der Herrscher demonstrierte Großzügigkeit und Herrschaftskontrolle."
    },
    "choices": [
      {
        "id": "A",
        "label": "100 Tage Festspiele mit Gladiatorenkämpfen und kostenlosem Brot finanzieren",
        "description": "Macht das Volk glücklich und festigt eure unangefochtene Popularität.",
        "statChanges": {
          "volk": 30,
          "goetter": 15,
          "priester": -10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "50.000 Kehlen brüllen deinen Namen! Das Kolosseum bebt vor Begeisterung und Rom feiert.",
          "mittelstufe": "Triumphale Volksgunst: Niemand zweifelt an deiner Macht; das Volk verehrt dich als gütigen Vater.",
          "oberstufe": "Perfektionierte Herrschaftssicherung: Munifizenz und Spektakel ersticken jede revolutionäre Regung."
        }
      },
      {
        "id": "B",
        "label": "Ein riesiges Segeltuch-Dach (Velarium) spannen lassen, um die Bürger vor Sommerhitze zu schützen",
        "description": "Kaiserliche Fürsorge: Römische Flottensoldaten bedienen gigantische Sonnensegel.",
        "statChanges": {
          "volk": 20,
          "adel": 15,
          "priester": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Wohliger Schatten breitet sich aus: Selbst in brennender Augusthitze sitzt das Volk kühl.",
          "mittelstufe": "Meisterhafte Ingenieurskunst: Das Velarium beweist Roms Perfektion bis ins letzte Detail.",
          "oberstufe": "Komfortorientierte Repräsentation: Selbst das Wetter wird den Annehmlichkeiten des Publikums unterworfen."
        }
      },
      {
        "id": "C",
        "label": "Gefallene Gladiatoren ehrenvoll bestatten und Verwundete von Hofärzten versorgen lassen",
        "description": "Mäßigt die Härte der Arena durch Anstand und Respekt vor tapferen Kämpfern.",
        "statChanges": {
          "adel": 15,
          "volk": 15,
          "goetter": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Ein stiller Moment des Respekts: Selbst die Fechtschulen loben deine Gerechtigkeit.",
          "mittelstufe": "Würde im Schauplatz des Todes: Die Pflege der Verwundeten beweist kaiserliche Größe.",
          "oberstufe": "Mäßigung imperialer Gewalt: Du humanisierst die Arena, ohne das populäre Spektakel zu zerstören."
        }
      },
      {
        "id": "D",
        "label": "Die Arena mit Wasser fluten lassen und eine spektakuläre Seeschlacht (Naumachie) inszenieren",
        "description": "Setzt Wissen ein, um das gigantische Amphitheater mit Aquäduktwasser in einen See zu verwandeln.",
        "epCost": 2,
        "statChanges": {
          "goetter": 30,
          "volk": 30,
          "adel": 20,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Unglaubliches Wunder! Kriegsschiffe schwimmen mitten im Kolosseum! Die Menge tobt vor Ehrfurcht!",
          "mittelstufe": "Höhepunkt der Ingenieurskunst: Die Naumachie im gefluteten Kolosseum schreibt für alle Zeiten Geschichte.",
          "oberstufe": "Apotheose imperialer Allmacht: Die Beherrschung des Elements Wasser im steinernen Rund fesselt das Imperium."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Das Kolosseum & Brot und Spiele",
      "title": "50.000 Zuschauer im Amphitheater",
      "explanation": {
        "unterstufe": "Das Kolosseum in Rom ist das größte antike Theater der Welt. Hier fanden Gladiatorenkämpfe und Tierjagden statt. Die Zuschauer bekamen oft kostenloses Brot zugeworfen – daher der Spruch 'Brot und Spiele' ('Panem et Circenses').",
        "mittelstufe": "Der Dichter Juvenal kritisierte die Bürger bitter: Sie interessierten sich nicht mehr für Politik und Freiheit, sondern wollten nur noch billiges Essen und spannende Unterhaltung im Circus und Amphitheater.",
        "oberstufe": "Das Kolosseum wurde aus dem Beton 'Opus Caementicium' und Travertinstein erbaut. Das ausgeklügelte Treppensystem ('Vomitorien') erlaubte es, die 50.000 Zuschauer in nur 15 Minuten komplett zu evakuieren."
      },
      "curiosityFact": "Das Kolosseum hieß ursprünglich gar nicht 'Kolosseum', sondern 'Amphitheatrum Flavium' – der Spitzname entstand wegen einer 35 Meter hohen Kolossalstatue des Kaisers Nero, die direkt daneben stand!"
    }
  },
  {
    "id": "rome_r20",
    "roundNumber": 20,
    "locationKey": "trajan_triumph_epilog",
    "locationName": "Das Kolosseum & der Triumphzug zum Kapitol",
    "milestoneTitle": "Runde 20: Der Triumphzug zum Kapitol – Die Ewige Stadt",
    "imagePath": "/assets/rome_station_10.jpg",
    "hotspots": [
      {
        "id": "hs_r20_titusbogen",
        "x": 45,
        "y": 55,
        "label": "Triumphbogen am Forum",
        "description": "Aus weißem Marmor gemeißelt, durch den der siegreiche Feldherr einzieht.",
        "icon": "🏛️"
      },
      {
        "id": "hs_r20_wagen",
        "x": 25,
        "y": 65,
        "label": "Goldener Triumphwagen",
        "description": "Vier weiße Hengste ziehen den Imperator im Purpurgewand mit Lorbeerkranz.",
        "icon": "👑"
      },
      {
        "id": "hs_r20_sklave",
        "x": 75,
        "y": 60,
        "label": "Der mahnende Staatssklave",
        "description": "Flüstert dem Sieger ins Ohr: 'Respice post te! Bedenke, dass du ein Mensch bist!'",
        "icon": "👤"
      }
    ],
    "situation": {
      "unterstufe": "Jahr 117 n. Chr.: Das Römische Reich hat unter Kaiser Trajan seine allergrößte Ausdehnung erreicht! Von Schottland bis zum Persischen Golf, von Spanien bis Ägypten herrscht ein einziger Kaiser über 50 Millionen Menschen. Trompeten schmettern über das Forum Romanum. Auf einem goldenen Wagen ziehst du im Purpurgewand zum Tempel des Jupiter auf dem Kapitol. Deine Reise vom einfachen Hirten am Tiber zum Herrn der Welt ist vollendet!",
      "mittelstufe": "Der kaiserliche Triumphzug (Triumphus): Die höchste Ehre, die ein Mensch im antiken Rom erringen konnte. Vor dem Wagen ziehen Musiker, Beutewagen voller Gold und gefangene Fürsten. Hinter dem Kaiser steht ein Sklave, der einen goldenen Lorbeerkranz über sein Haupt hält und mahnt: 'Bedenke, dass du sterblich bist!'",
      "oberstufe": "Epochenabschluss des Imperium Romanum: Rom hat sich aus einem latinischen Bauerndorf zum größten Weltreich der westlichen Antike gewandelt. Sprache, Recht, Straßenbau, Architektur und das Bürgerrechtsmodell prägen die europäische Zivilisation bis in unsere Gegenwart."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Siegesopfer auf dem Kapitol den Göttern weihen und ewigen Frieden schwören",
        "description": "Dankt Jupiter Optimus Maximus und besiegelt das goldene Zeitalter des Imperiums.",
        "statChanges": {
          "goetter": 30,
          "adel": 25,
          "volk": 20
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Weihrauch steigt in den Himmel! Die Menge jubelt: 'Heil dem Kaiser! Rom ist ewig!'",
          "mittelstufe": "Der vollendete Triumph: Rom steht auf dem unangefochtenen Gipfel seiner weltgeschichtlichen Macht.",
          "oberstufe": "Apotheose der Ewigen Stadt: Das Siegesopfer auf dem Kapitol besiegelt den Mythos von 'Roma Aeterna'."
        }
      },
      {
        "id": "B",
        "label": "Die riesige Kriegsbeute an die Bürger und Veteranen zur Hälfte verschenken",
        "description": "Teilt den Wohlstand mit denen, die das Reich mit ihrem Blut erbaut haben.",
        "statChanges": {
          "volk": 30,
          "priester": 20,
          "adel": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Goldstücke regnen auf die Menge! Ganz Rom feiert Tag und Nacht ein gigantisches Festmahl.",
          "mittelstufe": "Kaiserliche Großmut: Kein Bürger geht leer aus; die Dankbarkeit des Volkes kennt keine Grenzen.",
          "oberstufe": "Ökonomische Prosperität: Die Verteilung der Dakerschätze kurbelt Handel und Wohlstand im ganzen Reich an."
        }
      },
      {
        "id": "C",
        "label": "Die Mahnung des Sklaven ('Memento mori') demütig annehmen und Gesetze der Mäßigung erlassen",
        "description": "Bewahrt Bürgersinn und Weisheit: Niemand darf sich für unfehlbar halten.",
        "statChanges": {
          "adel": 25,
          "goetter": 25,
          "volk": 20
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Wahre Größe zeigt sich in Bescheidenheit: Der Senat ehrt dich als 'Optimus Princeps' – Bester Kaiser!",
          "mittelstufe": "Philosophische Tugend: Deine Mäßigung rettet Rom vor dem Hochmut tyrannischer Vorgänger.",
          "oberstufe": "Stoische Herrscherethik: Du vereinst imperiale Machtfülle mit der philosophischen Weisheit eines Philosophenkaisers."
        }
      },
      {
        "id": "D",
        "label": "Die Botschaft Roms in die Säule des Trajan und ein monumentales Weltgesetzbuch meißeln",
        "description": "Setzt alles gesammelte Wissen ein, um das Erbe Roms für alle kommenden Jahrtausende unsterblich zu machen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 35,
          "adel": 30,
          "volk": 30,
          "priester": 25,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Ein unvergängliches Erbe! Du hast deine Stadt von der Lehmhütte am Tiber zum ewigen Weltreich geführt!",
          "mittelstufe": "Kulturelle Unsterblichkeit: Roms Gesetze, Sprache und Kultur werden die Menschheit für Jahrtausende prägen.",
          "oberstufe": "Vollendung der Zivilisation: Du hast das bedeutendste Meisterspiel der Antike mit Bravour gemeistert!"
        }
      }
    ],
    "lexiconEntry": {
      "term": "Roma Aeterna – Die Ewige Stadt",
      "title": "Das Vermächtnis des Römischen Weltreichs",
      "explanation": {
        "unterstufe": "Unter Kaiser Trajan (um 117 n. Chr.) war das Römische Reich am größten. Rom nannte sich stolz 'Roma Aeterna' – die Ewige Stadt. Straßen, Wasserleitungen, Sprache und Gesetze prägen Europa bis heute.",
        "mittelstufe": "Beim Triumphzug fuhr der siegreiche Feldherr auf einem goldenen Wagen durch den Triumphbogen. Ein Staatssklave hinter ihm hielt die Lorbeerkrone und flüsterte ihm ins Ohr: 'Memento mori' – Bedenke, dass du sterblich bist!",
        "oberstufe": "Was von Rom blieb: Nahezu alle modernen europäischen Sprachen (Spanisch, Französisch, Italienisch etc.) stammen vom Lateinischen ab. Das römische Recht bildet das Fundament moderner Demokratien und der Bogenbau revolutionierte die Architektur."
      },
      "curiosityFact": "Die Trajanssäule in Rom ist 35 Meter hoch und mit einem 200 Meter langen, spiralförmigen Reliefband verziert – fast wie der längste Comicstrip der Antike!"
    }
  }
];

export const ROME_MASTER_GAME: GameDefinition = {
  id: 'game_rome_official',
  title: 'Aufstieg zum Weltreich – Das Antike Rom',
  subtitle: 'Vom Hügeldorf am Tiber zum Imperium Romanum (753 v. Chr. – 117 n. Chr.)',
  era: 'Antikes Rom (Republik bis Kaiserzeit)',
  archetype: 'conquest_campaign',
  artStyle: 'pixel_art',
  eraThemeId: 'rome_imperial',
  gradeLevel: 'mittelstufe',
  targetGrades: 'Klassenstufe 6–8 (Regelschule & Gymnasium)',
  coreTopics: [
    'Gründung Roms 753 v. Chr. & Romulus/Remus',
    'Vertreibung der Könige & Beginn der Republik (509 v. Chr.)',
    'Ständekämpfe & Zwölftafelgesetz',
    'Punische Kriege, Hannibal & Cannae',
    'Mare Nostrum & die Provinzen',
    'Heeresreform des Marius & Legionäre',
    'Bundesgenossenkriege & Bürgerrecht',
    'Die Gracchen & Krise der Republik',
    'Spartacus & Sklavenaufstand',
    'Julius Caesar, Rubikon & Iden des März',
    'Augustus & Beginn des Prinzipats (Pax Romana)',
    'Straßenbau (Via Appia) & Cursus Publicus',
    'Varusschlacht (9 n. Chr.) & Grenzen am Rhein',
    'Der Limes in Deutschland (Saalburg)',
    'Kolosseum & Brot und Spiele (Panem et Circenses)',
    'Größte Ausdehnung unter Trajan & Triumphzug'
  ],
  description: 'Erlebe 20 monumentale Runden von den ersten Schilfhütten am Palatin über das Drama von Cannae und Caesars Ermordung bis zum goldenen Triumphzug zum Kapitol. Balanciere Senat, Legionen, Volk und Provinzen.',
  pillars: [
    { key: 'goetter', label: 'Senat & Patrizier', icon: '🏛️', description: 'Aristokratische Macht, Senatsbeschlüsse und Finanzen' },
    { key: 'priester', label: 'Legionen & Feldherren', icon: '⚔️', description: 'Disziplin, Truppenloyalität, Rüstung und Schlagkraft' },
    { key: 'adel', label: 'Volk & Plebejer', icon: '🌾', description: 'Bürgerrechte, Volksversammlung, Getreidespenden und Moral' },
    { key: 'volk', label: 'Provinzen & Unterworfene', icon: '🌍', description: 'Steuern, Bundesgenossen, Romanisierung und Frieden' },
  ],
  specialResourceName: 'Triumph-Lorbeer',
  specialResourceEmoji: '🌿',
  skillNames: {
    skill1: 'Militärische Strategie',
    skill2: 'Diplomatie & Rhetorik',
    skill3: 'Rechts- & Staatskunst',
  },
  heroImage: '/assets/rome_hero.jpg',
  rounds: ROME_ROUNDS,
  shareCode: 'ROM01',
};
