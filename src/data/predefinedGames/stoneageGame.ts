import { GameDefinition, RoundStory } from '../../types/game';

export const STONEAGE_ROUNDS: RoundStory[] = [
  {
    "id": "stoneage_r01",
    "roundNumber": 1,
    "locationKey": "tundra_eiszeit",
    "locationName": "Mammuttundra am Gletscherrand",
    "milestoneTitle": "Runde 1: Spurensuche im Permafrost",
    "imagePath": "/assets/stoneage_station_01.jpg",
    "hotspots": [
      {
        "id": "hs_r1_spuren",
        "x": 45,
        "y": 70,
        "label": "Frische Mammutfährte",
        "description": "Riesige Trittsiegel im Schnee zeigen eine kleine Herde, die nach Süden zieht.",
        "icon": "🐾"
      },
      {
        "id": "hs_r1_gletscher",
        "x": 75,
        "y": 35,
        "label": "Eiszeitlicher Gletscher",
        "description": "Kilometerdicke Eismassen prägen das raue Klima der letzten Eiszeit (Weichsel/Würm).",
        "icon": "🏔️"
      },
      {
        "id": "hs_r1_speer",
        "x": 25,
        "y": 65,
        "label": "Feuergehärteter Wurfspeer",
        "description": "Aus zähem Fichtenholz mit feiner Feuersteinspitze, gebunden mit Tiersehnen.",
        "icon": "🏹"
      }
    ],
    "situation": {
      "unterstufe": "Der Winter ist eisig und die Vorräte der Sippe schwinden. Am Rand der Tundra entdeckt ihr tiefe Spuren im Schnee: Eine Gruppe Wollhaarmammuts ist ganz in der Nähe. Doch ein Fehler bei der Jagd kann tödlich sein.",
      "mittelstufe": "Vor 20.000 Jahren im eiszeitlichen Mitteleuropa: Schneestürme und Kälte fordern ihren Tribut. Deine Sippe benötigt dringend Fleisch, Fett und wärmende Felle. Späher sichten eine Mammutkuh mit Kalb.",
      "oberstufe": "Pleistozäne Tundra-Ökologie: Das Überleben der paläolithischen Jäger- und Sammlergemeinschaft hängt von Großsäugern ab. Die Jagd auf ein ausgewachsenes Wollhaarmammut erfordert höchste Koordination und birgt extremes Risiko."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Fährte vorsichtig verfolgen und das Terrain für eine Fallgrube erkunden",
        "description": "Nutzt natürliche Felsspalten und Schluchten, um das Tier ohne Frontalangriff einzukesseln.",
        "statChanges": {
          "goetter": 15,
          "volk": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Geduld zahlt sich aus: Ihr findet eine enge Senke, die sich ideal für einen Hinterhalt eignet.",
          "mittelstufe": "Taktischer Scharfsinn: Durch das Auskundschaften des Geländes minimiert ihr das Verletzungsrisiko für die Jäger.",
          "oberstufe": "Strategische Jagdplanung im Paläolithikum: Ihr nutzt die Geländetopographie perfekt aus, um die Kräfte der Gruppe zu bündeln."
        }
      },
      {
        "id": "B",
        "label": "Einen sofortigen Überraschungsangriff mit Wurfspeeren und Fackeln wagen",
        "description": "Nutzt den Schneesturm als Deckung, um die Tiere in Panik zu versetzen.",
        "statChanges": {
          "goetter": 20,
          "priester": -10,
          "adel": -5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Der Vorstoß ist riskant! Ihr erbeutet Fleisch, aber zwei Speere zerbrechen und ein Jäger verstaucht sich den Knöchel.",
          "mittelstufe": "Hohes Risiko: Die Panik treibt ein Tier in eure Richtung. Die Jagdbeute ist riesig, doch die Ausrüstung leidet schwer.",
          "oberstufe": "Frontale Jagdtaktik: Trotz des Überraschungsmoments zeigt sich die Verwundbarkeit der Jäger gegen wehrhafte eiszeitliche Megafauna."
        }
      },
      {
        "id": "C",
        "label": "Vorerst auf Schneehühner und Rentiere ausweichen, um kein Risiko einzugehen",
        "description": "Kleinere Beute sichert das tägliche Überleben ohne Lebensgefahr für die Sippe.",
        "statChanges": {
          "goetter": 5,
          "adel": 15,
          "volk": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Alle kehren unverletzt ins Lager zurück. Der Eintopf schmeckt, auch wenn die Mägen bald wieder knurren.",
          "mittelstufe": "Besonnenheit wahrt den Frieden: Die Sippe dankt dir für die Sicherheit, auch wenn Fettvorräte knapp bleiben.",
          "oberstufe": "Risikoaverse Subsistenzstrategie: Ihr sichert das kurzfristige Überleben und vermeidet demoralisierende Verluste."
        }
      },
      {
        "id": "D",
        "label": "Mit der Speerschleuder (Atlatl) aus sicherer Distanz präzise zuschlagen",
        "description": "Setzt Wissen über Hebelwirkung ein, um Speere mit doppelter Durchschlagskraft zu werfen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "priester": 15,
          "adel": 10,
          "volk": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Genialer Wurf! Das Atlatl schleudert den Speer mit unglaublicher Wucht. Die Jagd gelingt ohne jede Verletzung!",
          "mittelstufe": "Meisterhafte Hebeltechnik: Die Speerschleuder erweist sich als technologische Revolution der Eiszeitjäger.",
          "oberstufe": "Technologischer Innovationsvorsprung: Der Atlatl revolutioniert die Reichweite und Tötungseffizienz ballistischer Waffen im Jungpaläolithikum."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Wollhaarmammut & Eiszeitjäger",
      "title": "Überleben in der Tundra vor 20.000 Jahren",
      "explanation": {
        "unterstufe": "Mammuts waren bis zu 3,5 Meter hoch und hatten dickes Fell gegen den Frost. Sie lieferten Fleisch für Wochen, Fett für Lampen und Knochen für Zelte.",
        "mittelstufe": "Das Mammut (Mammuthus primigenius) war die wichtigste Jagdbeute der Altsteinzeit. Nichts wurde verschwendet: Sehnen wurden zu Nähfaden, Stoßzähne zu Kunstwerken und Knochen zu Brennmaterial.",
        "oberstufe": "Die eiszeitliche Tundrensteppe (Mammutsteppe) bot reichlich proteinreiche Gräser. Der Mensch des Jungpaläolithikums (Cro-Magnon) perfektionierte kooperative Treibjagden und komplexe Werkzeugkombinate."
      },
      "curiosityFact": "Mammut-Stoßzähne konnten über 4 Meter lang werden und bis zu 100 Kilogramm wiegen!"
    }
  },
  {
    "id": "stoneage_r02",
    "roundNumber": 2,
    "locationKey": "tundra_eiszeit",
    "locationName": "Mammuttundra am Gletscherrand",
    "milestoneTitle": "Runde 2: Die Teilung der Jagdbeute",
    "imagePath": "/assets/stoneage_station_01.jpg",
    "hotspots": [
      {
        "id": "hs_r2_zerlegung",
        "x": 40,
        "y": 65,
        "label": "Beinernes Zerlegemesser",
        "description": "Mit scharfen Feuersteinklingen wird das Mammutfleisch zügig von Sehnen und Knochen getrennt.",
        "icon": "🔪"
      },
      {
        "id": "hs_r2_feuer",
        "x": 65,
        "y": 70,
        "label": "Rauchfeuer zum Dörren",
        "description": "Über Wacholder- und Kiefernzweigen wird Fleischstreifen die Feuchtigkeit entzogen.",
        "icon": "💨"
      },
      {
        "id": "hs_r2_aelteste",
        "x": 20,
        "y": 50,
        "label": "Rat der Ältesten",
        "description": "Erfahrene Großmütter und Schamanen wachen über gerechte Verteilung und Brauchtum.",
        "icon": "👵"
      }
    ],
    "situation": {
      "unterstufe": "Das riesige Mammut ist erlegt! Nun liegt ein gewaltiger Berg Fleisch, Fett und dicke Häute vor euch. Alle haben Hunger, aber wer bekommt was? Die Verteilung muss gerecht sein, damit kein Streit entsteht.",
      "mittelstufe": "Ein erfolgreicher Jagdzug bindet die Gemeinschaft: Tonnen von Fleisch müssen vor Raubtieren geschützt und haltbar gemacht werden. Gleichzeitig fordern verletzte Jäger und schwache Sippenmitglieder ihren Anteil.",
      "oberstufe": "Egalitäre Sozialstrukturen im Paläolithikum: Die Verteilung von Großwildbeute ist der Prüfstein für den inneren Zusammenhalt. Prestige, reziproker Altruismus und Überlebenssicherung müssen austariert werden."
    },
    "choices": [
      {
        "id": "A",
        "label": "Alle Anteile streng gleichmäßig an jede Familie verteilen",
        "description": "Jeder Kopf der Sippe erhält exakt dieselbe Menge Fleisch und Fett.",
        "statChanges": {
          "adel": 15,
          "volk": 15,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Große Freude im Lager: Niemand fühlt sich benachteiligt und alle feiern gemeinsam am Feuer.",
          "mittelstufe": "Egalitäre Harmonie: Die bedingungslose Gleichbehandlung stärkt das Vertrauen in die Sippenführung.",
          "oberstufe": "Reziproke Subsistenzethik: Du bekräftigst das Urprinzip paläolithischer Jägergesellschaften, in denen Teilen Überlebensversicherung bedeutet."
        }
      },
      {
        "id": "B",
        "label": "Den mutigsten Jägern die besten Stücke und Stoßzähne zusprechen",
        "description": "Belohnt besonderen Mut, um den Ehrgeiz zukünftiger Jagdzüge zu steigern.",
        "statChanges": {
          "priester": 15,
          "adel": -10,
          "goetter": 10
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Die Jäger sind stolz, doch einige Mütter murren, weil ihre Kinder magere Stücke bekommen.",
          "mittelstufe": "Leistungsprinzip sorgt für Unruhe: Die Krieger fühlen sich geehrt, doch der Sippenzusammenhalt bekommt Risse.",
          "oberstufe": "Hierarchisierungsimpuls: Begünstigung erzeugt Statusunterschiede, die in nomadischen Bandengesellschaften traditionell Misstrauen säen."
        }
      },
      {
        "id": "C",
        "label": "Das meiste Fleisch sofort räuchern und als Notreserve im Permafrost vergraben",
        "description": "Sichert die kommenden harten Frostwochen ab, auch wenn heute weniger geschlemmt wird.",
        "statChanges": {
          "goetter": 20,
          "priester": 10,
          "adel": -5
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Kluge Vorsorge: Als ein Schneesturm das Lager tagelang einschneit, rettet das Dörrfleisch die Sippe.",
          "mittelstufe": "Nachhaltiges Vorratsmanagement: Durch das Konservieren im Permafrostboden bannt ihr das Hungergespenst für Monate.",
          "oberstufe": "Konservierungsinnovation: Die Kombination aus Räucherung und Frostlagerung beweist vorausschauende Ressourcensicherung."
        }
      },
      {
        "id": "D",
        "label": "Ein Dankbarkeits-Ritual mit den Ältesten abhalten und Knochenwerkzeuge fertigen",
        "description": "Nutzt Wissenspunkte, um Sehnen, Knochen und Elfenbein restlos in Werkzeuge zu verwandeln.",
        "epCost": 2,
        "statChanges": {
          "goetter": 15,
          "priester": 20,
          "adel": 15,
          "volk": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 2
        },
        "consequenceText": {
          "unterstufe": "Wunderbar! Aus den Rippen entstehen Nadeln, aus den Sehnen Bogensehnen und aus dem Elfenbein Schutzamulette.",
          "mittelstufe": "Kulturelle Meisterleistung: Das Ritual stiftet tiefen Sinn und die neuen Knochenwerkzeuge erleichtern den Sippenalltag enorm.",
          "oberstufe": "Ganzheitliche Rohstoffnutzung & spirituelle Integration: Du verknüpfst sakrale Verehrung des Beutetiers mit technologischer Wertschöpfung."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Teilen als Überlebensstrategie",
      "title": "Das Gesetz der Sippe in der Altsteinzeit",
      "explanation": {
        "unterstufe": "In der Steinzeit gab es kein Geld. Wenn jemand Beute machte, teilte er sie mit allen. Nur wer teilte, bekam auch etwas ab, wenn er selbst einmal Pech bei der Jagd hatte.",
        "mittelstufe": "Anthropologen nennen dies 'reziproken Altruismus': In mobilen Jägergruppen ohne Lagermöglichkeiten war das Teilen mit Kranken und Alten die beste Versicherung gegen den eigenen Hungertod.",
        "oberstufe": "Egalitäre Verteilungsmechanismen verhinderten soziale Spaltungen. Fleischverteilung folgte präzisen traditionellen Verhaltenskodizes, die den sozialen Frieden innerhalb der Horde stabilisierten."
      },
      "curiosityFact": "Fleisch wurde in tiefen Gruben im gefrorenen Boden vergraben – der erste natürliche Gefrierschrank der Menschheit!"
    }
  },
  {
    "id": "stoneage_r03",
    "roundNumber": 3,
    "locationKey": "hoehle_lascaux",
    "locationName": "Kultgrotte & Felsenhallen",
    "milestoneTitle": "Runde 3: Die Erleuchtung im Felsendom",
    "imagePath": "/assets/stoneage_station_02.jpg",
    "hotspots": [
      {
        "id": "hs_r3_fettlampe",
        "x": 30,
        "y": 68,
        "label": "Sandstein-Fettlampe",
        "description": "Brennt rußarm mit Tierfett und Moosdocht tief im Felseninneren.",
        "icon": "🪔"
      },
      {
        "id": "hs_r3_bison",
        "x": 60,
        "y": 40,
        "label": "Laufender Wisent",
        "description": "Mit Holzkohle und Rötel auf den natürlichen Felswulst gemalt, wirkt die Zeichnung lebendig.",
        "icon": "🦬"
      },
      {
        "id": "hs_r3_pigment",
        "x": 75,
        "y": 70,
        "label": "Ocker-Mörserstein",
        "description": "Hier werden gelbe und rote Eisenoxide zu feinstem Puder zermahlen.",
        "icon": "🎨"
      }
    ],
    "situation": {
      "unterstufe": "Tief im Inneren der Höhle ist es stockdunkel und kühl. Nur eure kleinen Fettlampen flackern. Der Schamane bittet dich, an der heiligen Wand das erste Tierbild zu beginnen, um den Geist der Tiere um Beute zu bitten.",
      "mittelstufe": "Vor 17.000 Jahren: Die Höhlen von Lascaux und Chauvet sind keine Wohnorte, sondern sakrale Weihestätten. Im Licht des Feuers scheinen die gemalten Pferde und Rinder über die gewölbten Felswände zu laufen.",
      "oberstufe": "Paläolithischer Schamanismus und Höhlenkunst: Die Ausgestaltung der Tiefenkavitäten erfordert planvolle Beleuchtungslogistik, Farbpigmentaufbereitung und die Beherrschung perspektivischer Täuschungen."
    },
    "choices": [
      {
        "id": "A",
        "label": "Einen gewaltigen Ur-Bison mit Holzkohle und Rötel an die Felsrippe zeichnen",
        "description": "Nutzt die natürliche Wölbung des Steins, um dem Tier plastische Tiefe zu verleihen.",
        "statChanges": {
          "adel": 15,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Eindrucksvoll! Im Schein der Flamme scheint der Bison förmlich aus der Felswand zu springen.",
          "mittelstufe": "Künstlerische Meisterschaft: Das Bild fesselt die Sippe und verleiht den Jägern neuen seelischen Mut.",
          "oberstufe": "Parietale Meisterkunst: Die Nutzung des Reliefs zur Erzeugung dreidimensionaler Illusionen zeugt von hoher kognitiver Abstraktion."
        }
      },
      {
        "id": "B",
        "label": "Gemeinsam mit den Kindern Handschablonen mit Pfeifröhrchen anblasen",
        "description": "Jedes Sippenmitglied verewigt seinen Handabdruck mit rotem Ockerpulver.",
        "statChanges": {
          "adel": 20,
          "volk": 15,
          "goetter": -5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Viele Hände leuchten an der Wand! Die Kinder jubeln: 'Wir sind hier, wir leben!'",
          "mittelstufe": "Ein ewiges Band: Die Handabdrücke symbolisieren die Zusammengehörigkeit und Identität der Gemeinschaft.",
          "oberstufe": "Kollektive Identitätsstiftung: Das Handnegativ ist das universale Zeugnis des 'Ich war hier' im Aurignacien und Magdalénien."
        }
      },
      {
        "id": "C",
        "label": "Bessere Fettlampen mit getrocknetem Wacholder herstellen",
        "description": "Konzentriert euch auf die Beleuchtung, damit man tiefer in unbekannte Gänge vordringen kann.",
        "statChanges": {
          "priester": 15,
          "goetter": 10,
          "adel": 5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Das Licht brennt heller und riecht wunderbar nach Wald. Niemand muss mehr im Dunkeln stolpern.",
          "mittelstufe": "Praktischer Fortschritt: Rauchfreie Fettlampen ermöglichen längere Aufenthalte in den tiefen Kultgrotte.",
          "oberstufe": "Beleuchtungstechnologie: Schiefer- und Kalksteinlampen mit Moosdochten waren essenziell für die Erschließung unwegsamer Höhlensysteme."
        }
      },
      {
        "id": "D",
        "label": "Schamanische Trancezeremonie mit Musikbögen und Knochenflöten leiten",
        "description": "Setzt Wissen ein, um die Höhlenakustik für ein überwältigendes Klangerlebnis zu nutzen.",
        "epCost": 2,
        "statChanges": {
          "adel": 20,
          "priester": 15,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Töne hallen wie Donnergrollen durch die Höhle! Alle lauschen ergriffen und spüren eine tiefe Ruhe.",
          "mittelstufe": "Archäoakustik im Einsatz: An Stellen mit maximalem Hall entfalten Schwanenknochenflöten eine magische Wirkung.",
          "oberstufe": "Kultisch-aurale Rauminszenierung: Höhlenforscher belegen, dass Malereien gezielt an resonanzstarken Knotenpunkten platziert wurden."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Höhlenmalerei & Schamanismus",
      "title": "Die Geburtsstunde der menschlichen Kunst",
      "explanation": {
        "unterstufe": "Vor 15.000 bis 30.000 Jahren malten Steinzeitmenschen Tiere wie Pferde, Hirsche und Mammuts an Höhlenwände. Die Farben mischten sie aus Erde, Kohle und Fett.",
        "mittelstufe": "Orte wie Lascaux (Frankreich) oder Altamira (Spanien) waren keine Höhlenwohnungen, sondern Kulträume. Schamanen führten rituelle Handlungen durch, um Jagdglück und Fruchtbarkeit zu beschwören.",
        "oberstufe": "Die parietale Kunst des Jungpaläolithikums zeigt ein hochentwickeltes Symbolsystem. Neueste Forschungen deuten auf Punkt- und Strichmarkierungen hin, die als Vorläufer eines Mondkalenders dienten."
      },
      "curiosityFact": "In der Höhle 'Hohle Fels' auf der Schwäbischen Alb fand man eine 40.000 Jahre alte Flöte aus Gänsegeierknochen – das älteste Musikinstrument der Welt!"
    }
  },
  {
    "id": "stoneage_r04",
    "roundNumber": 4,
    "locationKey": "hoehle_lascaux",
    "locationName": "Kultgrotte & Felsenhallen",
    "milestoneTitle": "Runde 4: Das Hüten des heiligen Feuers",
    "imagePath": "/assets/stoneage_station_02.jpg",
    "hotspots": [
      {
        "id": "hs_r4_zunder",
        "x": 50,
        "y": 65,
        "label": "Zunderschwamm & Pyrit",
        "description": "Aus getrockneten Baumpilzen und Feuerstein entstehen glimmende Funken.",
        "icon": "✨"
      },
      {
        "id": "hs_r4_holz",
        "x": 20,
        "y": 70,
        "label": "Trockenes Kiefernholz",
        "description": "Sorgfältig geschichtet, um auch bei feuchtem Wetter rauchfrei zu brennen.",
        "icon": "🪵"
      },
      {
        "id": "hs_r4_windschutz",
        "x": 80,
        "y": 45,
        "label": "Windschutz aus Schieferplatten",
        "description": "Hält eisige Windböen vom Vorplatz der Höhle ab.",
        "icon": "🛡️"
      }
    ],
    "situation": {
      "unterstufe": "Draußen zieht ein eisiger Schneeregen auf. Das Lagerfeuer am Höhleneingang droht zu erlöschen! Ohne Feuer erfriert die Sippe und gefährliche Höhlenbären könnten sich nähern. Wer übernimmt die Feuerwache?",
      "mittelstufe": "Feuer ist Leben: Wärme, Schutz vor Raubtieren, Desinfektion und gegartes Essen hängen von der Glut ab. Als der Wind auffrischt und Nässe in den Höhleneingang peitscht, bricht Hektik aus.",
      "oberstufe": "Thermisches Management im Pleistozän: Das Erlöschen des Herdfeuers war eine existenzielle Bedrohung, da das Neuentfachen mit Pyrit und Feuerstein bei Nässe extrem zeit- und kräfteraubend war."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Feuer mit Fellen und Rindenabdeckungen abschirmen und trockenes Hartholz nachlegen",
        "description": "Schützt die Glut pragmatisch mit vereinten Kräften gegen Regen und Wind.",
        "statChanges": {
          "volk": 15,
          "priester": 10,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Gerettet! Die Flammen züngeln wieder hoch und wohlige Wärme breitet sich aus.",
          "mittelstufe": "Erfolgreicher Schutz: Durch den schnellen Windschutz bleibt die Glut trocken und die Sippe sicher.",
          "oberstufe": "Pragmatische Herdsicherung: Du verhinderst den Verlust der lebenswichtigen thermischen Energiequelle."
        }
      },
      {
        "id": "B",
        "label": "Glühende Kohlen in ausgehöhlte Baumpilze und Hornbehälter für den Notfall sichern",
        "description": "Bereitet tragbare Feuerbüchsen vor, falls das Hauptfeuer doch erlischt.",
        "statChanges": {
          "priester": 15,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Schlaue Idee: In den Baumschwämmen glimmt die Kohle stundenlang sicher weiter.",
          "mittelstufe": "Tragbare Glutreserven: Der Zunderschwamm ('Fomes fomentarius') beweist seinen enormen Nutzen als Gluthüter.",
          "oberstufe": "Feuertransport-Technologie: Die Konservierung von Glutnestern in organischen Behältern war Standard eiszeitlicher Mobilität."
        }
      },
      {
        "id": "C",
        "label": "Eine feste Wachschicht aus jungen Sippenmitgliedern einteilen",
        "description": "Jeder wacht abwechselnd zwei Stunden, um Brennholz kontinuierlich nachzulegen.",
        "statChanges": {
          "adel": 15,
          "volk": 10,
          "priester": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Niemand schläft ein. Disziplin schützt die Gemeinschaft die ganze Nacht hindurch.",
          "mittelstufe": "Verantwortung stärkt die Jugend: Die jungen Jäger wachsen an ihrer ernsten Pflichtaufgabe.",
          "oberstufe": "Soziale Kohäsionsbildung: Geteilte Wachtdienste festigen Pflichtgefühl und Verantwortungsbewusstsein in der Horde."
        }
      },
      {
        "id": "D",
        "label": "Mit Pyrit, Feuerstein und Reibebogen eine Funkenstation im Höhlentrockenen aufbauen",
        "description": "Setzt Wissen ein, um das Feuer jederzeit unabhängig vom Wetter blitzschnell neu entzünden zu können.",
        "epCost": 2,
        "statChanges": {
          "priester": 20,
          "goetter": 15,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Großartig! Ein Schlag auf Pyrit und Zunder – schon lodert im Trockenen ein zweites Sicherheitsfeuer!",
          "mittelstufe": "Pioniertechnik: Wer die Funkenbildung mit Schwefelkies beherrscht, ist nie mehr auf fremde Glut angewiesen.",
          "oberstufe": "Autonome Pyrotechnologie: Die Kombination aus Silex, Markasit/Pyrit und verkoktem Zunder befreit die Sippe von der Feuersklaverei."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Beherrschung des Feuers",
      "title": "Der größte Sprung der Menschheitsgeschichte",
      "explanation": {
        "unterstufe": "Vor rund 400.000 Jahren lernte der Mensch, das Feuer zu nutzen. Es gab Licht, Wärme, hielt Säbelzahntiger fern und machte Fleisch bekömmlicher.",
        "mittelstufe": "Feuer veränderte den menschlichen Körper: Durch gekochtes Fleisch und Knollen brauchte der Darm weniger Energie; das Gehirn konnte wachsen. Zudem verlängerte das Lagerfeuer den Tag für Sprache und Kultur.",
        "oberstufe": "Die Beherrschung von Pyrotechnologien war Voraussetzung für alle späteren Kulturstufen – von der Keramikbrennung bis zur Kupfer- und Eisenverhüttung."
      },
      "curiosityFact": "Ötzi trug vor 5.300 Jahren ein komplettes 'Feuerzeug' bei sich: Feuerstein, Pyritkrümel und Zunderschwamm in einem Lederbeutel!"
    }
  },
  {
    "id": "stoneage_r05",
    "roundNumber": 5,
    "locationKey": "feuerstein_werkstatt",
    "locationName": "Silex-Klippen & Steinmetzplatz",
    "milestoneTitle": "Runde 5: Das Schlagen des Feuersteins",
    "imagePath": "/assets/stoneage_station_03.jpg",
    "hotspots": [
      {
        "id": "hs_r5_knolle",
        "x": 45,
        "y": 65,
        "label": "Feuersteinknolle (Silex)",
        "description": "Aus Kreidefelsen geborgen, besitzt sie glasartige Bruchkanten.",
        "icon": "💎"
      },
      {
        "id": "hs_r5_geweih",
        "x": 70,
        "y": 60,
        "label": "Geweihschlägel",
        "description": "Für den weichen Schlag zur feinen Retusche messerscharfer Klingen.",
        "icon": "🦌"
      },
      {
        "id": "hs_r5_faustkeil",
        "x": 25,
        "y": 55,
        "label": "Symmetrischer Faustkeil",
        "description": "Beidseitig behauen – das Schweizer Taschenmesser der Urzeit.",
        "icon": "🪓"
      }
    ],
    "situation": {
      "unterstufe": "Ihr seid an einem Felsband angekommen, an dem glänzende Feuersteinknollen im Kalkstein stecken. Dein alter Faustkeil ist stumpf geworden. Ein erfahrener Werkzeugmacher zeigt dir, wie man mit gezielten Schlägen scharfe Klingen abspaltet.",
      "mittelstufe": "Silex war das 'Hightech-Material' der Steinzeit. Ein falscher Schlag im falschen Winkel und der wertvolle Kern zerspringt in unbrauchbaren Schotter. Du brauchst Geduld, einen guten Schlagstein und Fingerspitzengefühl.",
      "oberstufe": "Lithische Technologie im Jungpaläolithikum: Die Levallois-Technik und die Klingenkerngewinnung erforderten dreidimensionale Vorplanung. Ein erfahrener Handwerker fertigte aus einem einzigen Kern Dutzende standardisierte Klingen."
    },
    "choices": [
      {
        "id": "A",
        "label": "Einen massiven, vielseitigen Faustkeil zweiseitig aus dem Kern schlagen",
        "description": "Robustes Universalwerkzeug zum Schneiden, Hacken, Graben und Zertrümmern von Knochen.",
        "statChanges": {
          "priester": 15,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Ein wunderschöner Faustkeil! Er liegt perfekt in der Hand und schneidet Leder wie Butter.",
          "mittelstufe": "Klassisches Universalwerkzeug: Der Faustkeil erweist sich bei allen schweren Arbeiten als unersetzlich.",
          "oberstufe": "Bifaziale Meisterform: Perfekte Symmetrie und scharfe Schneidkanten zeugen von vollendeter Schlagkontrolle."
        }
      },
      {
        "id": "B",
        "label": "Feine, rasiermesserscharfe Klingen und Schaber für die Fellbearbeitung herstellen",
        "description": "Spezialwerkzeuge, um Tierhäute zu säubern und zarte Nähriemen zu schneiden.",
        "statChanges": {
          "volk": 15,
          "priester": 10,
          "adel": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Klingen sind schärfer als jedes moderne Küchenmesser. Die Lederverarbeitung gelingt mühelos.",
          "mittelstufe": "Spezialisierte Klingen: Mit den Schabern lassen sich Fleischreste sauber von empfindlichen Pelzen entfernen.",
          "oberstufe": "Standardisierte Klingentechnologie: Maximale Kantenlänge pro Gramm Rohmaterial optimiert die Ressourcenausbeute."
        }
      },
      {
        "id": "C",
        "label": "Gemeinsam mit den Lernenden Schutzkleidung aus Leder gegen Splitterflug anlegen",
        "description": "Sicherheit geht vor: Schützt Augen und Hände der Lehrlinge vor messerscharfen Abschlägen.",
        "statChanges": {
          "adel": 15,
          "volk": 10,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Gute Vorsicht: Ein scharfer Splitter prallt harmlos am Lederschild ab. Niemand wird verletzt.",
          "mittelstufe": "Unfallfreies Handwerk: Deine Fürsorge verhindert Schnittwunden, die sich in der Wildnis leicht entzünden könnten.",
          "oberstufe": "Arbeitsschutz in Urgesellschaften: Prävention von Infektionen schützt die fragile Arbeitskraft der Gruppe."
        }
      },
      {
        "id": "D",
        "label": "Mit Geweih-Drucktechnik fein gezahnte Projektilspitzen retuschieren",
        "description": "Nutzt Wissenspunkte, um mikrofeine Widerhaken für Jagdpfeile und Harpunen zu drücken.",
        "epCost": 2,
        "statChanges": {
          "priester": 25,
          "goetter": 15,
          "adel": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Unglaublich präzise Spitzen! Sie dringen tief ein und machen eure Jagdwaffen dreimal treffsicherer.",
          "mittelstufe": "Druckretusche in Perfektion: Mit Geweihspitzen drückt ihr winzige Schuppen ab und schafft aerodynamische Spitzen.",
          "oberstufe": "Spätpaläolithische Präzisionslithik: Die Druckretusche markiert den Höhepunkt steinzeitlicher Handwerkskunst."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Feuerstein (Silex)",
      "title": "Der 'Stahl' der Urgeschichte",
      "explanation": {
        "unterstufe": "Feuerstein ist extrem hart und bricht mit messerscharfen Kanten. Wenn man zwei Steine aneinanderschlägt, fliegen Funken – daher hat er seinen Namen.",
        "mittelstufe": "Silex besteht aus mikrokristallinem Quarz, der sich vor Jahrmillionen auf dem Meeresgrund aus Kieselalgenskeletten bildete. Seine Bruchkanten sind schärfer als moderne chirurgische Skalpelle aus Stahl.",
        "oberstufe": "Feuerstein war das erste überregional gehandelte Wirtschaftsgut Europas. Silex aus berühmten Vorkommen (z.B. Grand-Pressigny) wurde über Hunderte von Kilometern durch Tauschketten distribuiert."
      },
      "curiosityFact": "Moderne Augenchirurgen nutzen manchmal Klingen aus Obsidian (Vulkanglas), weil deren Schnittkante nur wenige Moleküle dick ist – genau wie in der Steinzeit!"
    }
  },
  {
    "id": "stoneage_r06",
    "roundNumber": 6,
    "locationKey": "feuerstein_werkstatt",
    "locationName": "Silex-Klippen & Steinmetzplatz",
    "milestoneTitle": "Runde 6: Der Schaftbau mit Birkenpech",
    "imagePath": "/assets/stoneage_station_03.jpg",
    "hotspots": [
      {
        "id": "hs_r6_pech",
        "x": 48,
        "y": 70,
        "label": "Schweltopf mit Birkenrinde",
        "description": "Unter Luftabschluss erhitzt, destilliert klebriges, schwarzes Birkenpech.",
        "icon": "🏺"
      },
      {
        "id": "hs_r6_sehnen",
        "x": 75,
        "y": 55,
        "label": "Trockene Tiersehnen",
        "description": "Werden mit Speichel angefeuchtet und wickeln sich bombenfest um den Schaft.",
        "icon": "🧵"
      },
      {
        "id": "hs_r6_speerschaft",
        "x": 25,
        "y": 45,
        "label": "Eschenholz-Schaft",
        "description": "Geradlinig über dem Feuer gerichtet und mit Sandstein glattgeschliffen.",
        "icon": "🪵"
      }
    ],
    "situation": {
      "unterstufe": "Eine scharfe Feuersteinklinge nützt wenig, wenn man sie nicht festhalten kann. Um eine Axt oder Speerspitze sicher mit einem Holzstiel zu verbinden, braucht man den ersten Superkleber der Menschheit: Birkenpech!",
      "mittelstufe": "Die Kunst des Komposit-Werkzeugs: Holz, Stein, Tiersehnen und Birkenpech müssen perfekt zusammenwirken. Bei falscher Temperatur verbrennt das Pech zu Asche; bei richtiger Hitze wird es steinhart und wasserdicht.",
      "oberstufe": "Organische Verbundtechnologie im Paläolithikum: Die Trockendestillation von Birkenrinde bei ca. 350 °C unter Sauerstoffabschluss beweist profundes chemisches Erfahrungswissen der eiszeitlichen Jäger."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Birkenpech in einer Erdkuhle langsam ausschwelen und die Klingen fest einkleben",
        "description": "Geduldige Hitzezufuhr verhindert, dass der wertvolle Teerkleber verbrennt.",
        "statChanges": {
          "priester": 15,
          "goetter": 10,
          "volk": 5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Der Kleber hält bombenfest! Selbst schwere Schläge können die Klinge nicht mehr lösen.",
          "mittelstufe": "Perfekte Destillation: Das Birkenpech härtet glänzend aus und widersteht Kälte und Feuchtigkeit.",
          "oberstufe": "Syntheseerfolg: Du stellst hochwertiges Pech her und schaffst hochbelastbare Schäftungen für Jagdwaffen."
        }
      },
      {
        "id": "B",
        "label": "Die Schäftung zusätzlich mit feuchten Hirschsehnen kreuzweise umwickeln",
        "description": "Beim Trocknen ziehen sich die Sehnen zusammen und klemmen das Holz unlösbar fest.",
        "statChanges": {
          "priester": 10,
          "volk": 15,
          "adel": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Sehnen wickeln sich wie Draht um den Stiel. Eine absolut unzerstörbare Verbindung!",
          "mittelstufe": "Doppelte Sicherung: Sehne und Pech ergänzen sich ideal zu einem unverwüstlichen Kompositwerkzeug.",
          "oberstufe": "Biomaterial-Spannkraft: Das Schrumpfungsverhalten kollagenhaltiger Sehnen garantiert maximale Zugfestigkeit."
        }
      },
      {
        "id": "C",
        "label": "Werkzeugstiele für die ganze Sippe auf Vorrat aus elastischem Eschenholz schnitzen",
        "description": "Schafft Reserven im Lager, damit zerbrochene Schäfte sofort ersetzt werden können.",
        "statChanges": {
          "adel": 15,
          "priester": 10,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Gute Vorbereitung: Im Lager stapeln sich glatte, gerade Schäfte für Beile und Speere.",
          "mittelstufe": "Effiziente Arbeitsteilung: Während andere jagen, sicherst du den Ausrüstungsnachschub.",
          "oberstufe": "Logistische Lagerhaltung: Ausreichend Ersatzschäfte verhindern Verzögerungen bei künftigen Unternehmungen."
        }
      },
      {
        "id": "D",
        "label": "Einen Prototyp einer Querschneiden-Axt mit Knieholz-Holm konstruieren",
        "description": "Setzt Wissen ein, um die Hebelkraft beim Holzhacken durch eine L-förmige Astgabel zu verdoppeln.",
        "epCost": 2,
        "statChanges": {
          "priester": 20,
          "goetter": 15,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Genial! Durch die Knieform spaltet das Beil dicke Äste mit der halben Muskelkraft!",
          "mittelstufe": "Ergonomischer Meilenstein: Das Knieholzaxt-Design revolutioniert die Holzbearbeitung grundlegend.",
          "oberstufe": "Biomechanische Werkzeugoptimierung: Knieholmschäftungen optimieren die Schlagenergieübertragung erheblich."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Birkenpech – Der erste Klebstoff",
      "title": "Chemie vor 50.000 Jahren",
      "explanation": {
        "unterstufe": "Birkenpech ist ein zäher schwarzer Teer, den man gewinnt, wenn man Birkenrinde ohne Luft erhitzt. Er klebt stärker als moderner Alleskleber und ist absolut wasserfest.",
        "mittelstufe": "Archäologen fanden Birkenpechstücke, die sogar Zahnabdrücke von Steinzeitmenschen trugen – man kaute Pech wie Kaugummi, vermutlich gegen Zahnschmerzen, da es desinfizierende Stoffe enthält.",
        "oberstufe": "Bereits der Neandertaler vor über 100.000 Jahren beherrschte die kontrollierte Pyrolyse von Birkenrinde. Dies widerlegt endgültig das überholte Bild vom primitiven Urmenschen."
      },
      "curiosityFact": "Ötzis berühmtes Kupferbeil war genau mit diesem uralten Birkenpech und Lederbändern im Eibenholzschaft verklebt!"
    }
  },
  {
    "id": "stoneage_r07",
    "roundNumber": 7,
    "locationKey": "fluss_sammler",
    "locationName": "Schmelzwasserfluss & Auwälder",
    "milestoneTitle": "Runde 7: Die Schätze der Sammlerinnen",
    "imagePath": "/assets/stoneage_station_04.jpg",
    "hotspots": [
      {
        "id": "hs_r7_korb",
        "x": 35,
        "y": 65,
        "label": "Geflochtener Weidenkorb",
        "description": "Gefüllt mit Haselnüssen, Hagebutten, Bärlauch und wilden Brombeeren.",
        "icon": "🧺"
      },
      {
        "id": "hs_r7_wurzel",
        "x": 60,
        "y": 70,
        "label": "Essbare Rohrkolbenwurzel",
        "description": "Stärkereich und nahrhaft, lässt sich getrocknet zu nahrhaftem Mehl zerstoßen.",
        "icon": "🌿"
      },
      {
        "id": "hs_r7_weide",
        "x": 20,
        "y": 40,
        "label": "Weidenrinde für Heilsud",
        "description": "Enthält Salicylsäure (natürliches Aspirin) gegen Schmerzen und Fieber.",
        "icon": "🍃"
      }
    ],
    "situation": {
      "unterstufe": "Der Frühling taut die Auen auf! Während die Jäger fernab unterwegs sind, streifen Frauen, Großmütter und Kinder durch das Uferdickicht. Sie wissen genau, welche Beeren süß sind, welche Pilze nähren und welche Pflanzen tödlich giftig sind.",
      "mittelstufe": "Die stille Kraft der Sammler: Jagden scheitern oft, doch die gesammelten Wald- und Flussfrüchte sichern Tag für Tag über 70 % der Kalorien der Sippe. Zudem fungiert die Pflanzenkunde als einzige Apotheke der Steinzeit.",
      "oberstufe": "Geschlechtsspezifische Arbeitsteilung und botanisches Tiefenwissen: Das Sammeln wilder Poaceen, Wurzeln und Hülsenfrüchte legte die kognitive Basis für die spätere Domestikation von Kulturpflanzen."
    },
    "choices": [
      {
        "id": "A",
        "label": "Körbeweise energiereiche Haselnüsse und Bucheckern für den Winter einlagern",
        "description": "Fett- und proteinreiche Nüsse halten monatelang ohne zu verderben.",
        "statChanges": {
          "goetter": 15,
          "volk": 15,
          "adel": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Köstlich und gesund: Die Nüsse füllen die Vorratsgruben und retten vor Mangelernährung.",
          "mittelstufe": "Optimale Kaloriendichte: Haselnüsse waren das Superfood der Mittelsteinzeit; die Sippe ist bestens versorgt.",
          "oberstufe": "Effizientes Vorratsmanagement: Nüsse bieten maximale Energiedichte bei minimalem Konservierungsaufwand."
        }
      },
      {
        "id": "B",
        "label": "Heilkräuter, Weidenrinde und Wundmoos für verletzte Sippenmitglieder sammeln",
        "description": "Bereitet Wickel und Tees vor, um Entzündungen und Wundfieber zu behandeln.",
        "statChanges": {
          "adel": 15,
          "priester": 15,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Ein Jäger mit eiternder Schürfwunde wird schnell wieder gesund. Dein Wissen rettet Leben!",
          "mittelstufe": "Naturmedizin mit Erfolg: Der Weidenrindensud senkt das Fieber und lindert Schmerzen verlässlich.",
          "oberstufe": "Phytotherapeutische Versorgung: Pflanzenwirkstoffe stabilisieren die Gesundheit der Arbeitskräfte signifikant."
        }
      },
      {
        "id": "C",
        "label": "Den Kindern das Erkennen giftiger Pilze und Beeren spielerisch beibringen",
        "description": "Traditionswissen sichern, damit die nächste Generation sicher überlebt.",
        "statChanges": {
          "volk": 20,
          "adel": 10,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Kleinen lernen eifrig und unterscheiden Knollenblätterpilze sicher von Champignons.",
          "mittelstufe": "Didaktische Weitergabe: Mündliche Überlieferung sichert das Überleben der Gruppe über Generationen.",
          "oberstufe": "Kulturelle Tradierung von Überlebenswissen: Wissensweitergabe minimiert fatale Vergiftungsrisiken."
        }
      },
      {
        "id": "D",
        "label": "Rohrkolbenmehl mit Wasser und heißen Steinen in Rindentöpfen zu Brei kochen",
        "description": "Setzt Wissen ein, um unverdauliche Stärke durch Heißstein-Kochen in nahrhafte Energie umzuwandeln.",
        "epCost": 2,
        "statChanges": {
          "goetter": 20,
          "priester": 15,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Was für ein Festmahl! Der warme, süßliche Brei stärkt selbst die zahnlosen Ältesten.",
          "mittelstufe": "Thermische Stärkeaufspaltung: Das Kochen mit erhitzten Flusskieseln in wasserdichten Rindentöpfen gelingt perfekt.",
          "oberstufe": "Kochstein-Technologie: Durch thermische Hydrolyse werden pflanzliche Polysaccharide optimal bioverfügbar."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Rolle der Sammlerinnen",
      "title": "Das wahre Fundament der Ernährung",
      "explanation": {
        "unterstufe": "In Filmen sieht man fast nur Mammutjäger. Doch die meiste Nahrung brachten die Frauen und Kinder ins Lager: Nüsse, Wurzeln, Beeren, Eier und Kräuter.",
        "mittelstufe": "Sammeln war keineswegs Zufall, sondern erforderte exaktes Wissen über Jahreszeiten, Reifezyklen und Gifte. Ohne die pflanzliche Kost wäre die Sippe an Skorbut und Mangelkrankheiten gestorben.",
        "oberstufe": "Neuere bioarchäologische Isotopenanalysen an menschlichen Knochen zeigen, dass pflanzliche Nahrung bis zu 80 % der Gesamtkalorien im Mesolithikum ausmachte."
      },
      "curiosityFact": "Haselnussschalen findet man bei fast jeder steinzeitlichen Ausgrabung in riesigen Mengen – die Steinzeitmenschen rösteten sie in Gruben, um sie jahrelang haltbar zu machen!"
    }
  },
  {
    "id": "stoneage_r08",
    "roundNumber": 8,
    "locationKey": "fluss_sammler",
    "locationName": "Schmelzwasserfluss & Auwälder",
    "milestoneTitle": "Runde 8: Der Lachsfang an den Stromschnellen",
    "imagePath": "/assets/stoneage_station_04.jpg",
    "hotspots": [
      {
        "id": "hs_r8_harpune",
        "x": 65,
        "y": 60,
        "label": "Geweihharpune mit Widerhaken",
        "description": "Löst sich beim Einstich vom Schaft, bleibt aber an einer Schnur gesichert.",
        "icon": "🐟"
      },
      {
        "id": "hs_r8_lachs",
        "x": 40,
        "y": 75,
        "label": "Springender Atlantischer Lachs",
        "description": "Zieht zu Tausenden flussaufwärts zu den kiesigen Laichplätzen.",
        "icon": "🌊"
      },
      {
        "id": "hs_r8_reuse",
        "x": 80,
        "y": 65,
        "label": "Fischreuse aus Haselruten",
        "description": "Trichterförmige Reuse, aus der einmal hineingeschwommene Fische nicht entkommen.",
        "icon": "🧺"
      }
    ],
    "situation": {
      "unterstufe": "Der Fluss schäumt weiß über Felsblöcke. Plötzlich blitzen silberne Leiber auf: Die Lachse ziehen stromaufwärts! Es sind so viele, dass man sie fast mit den Händen greifen kann. Jetzt entscheidet die richtige Fangmethode über die Vorräte.",
      "mittelstufe": "Saisonale Ressourcenspitzen: Der Lachs- und Forellenzug bietet für wenige Wochen eine gigantische Protein- und Fettquelle. Wer nun versagt, verpasst die beste Gelegenheit, Vorräte für den Herbst anzulegen.",
      "oberstufe": "Aquatische Ressourcennutzung: Der Übergang zum Mesolithikum führte durch Harpunentechnologie, Weidenreusen und Einbäume zu einer massiven Diversifizierung des Nahrungsspektrums (Broad Spectrum Revolution)."
    },
    "choices": [
      {
        "id": "A",
        "label": "Auf Felsblöcken im Strom lauern und Lachse mit der Knochenharpune stechen",
        "description": "Präzise Jagd mit Widerhakenharpunen, gesichert durch feste Flachsschnüre.",
        "statChanges": {
          "goetter": 15,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Treffer! Ein gewaltiger Lachs zappelt an der Harpune. Die Jäger jubeln am Ufer.",
          "mittelstufe": "Geschickte Harpunenjagd: Durch die bewegliche Widerhakenspitze kann sich kein Fisch mehr losreißen.",
          "oberstufe": "Balistische Harpuneneffizienz: Die Entkopplung von Spitze und Schaft verhindert Hebelbrüche im reißenden Wasser."
        }
      },
      {
        "id": "B",
        "label": "Ein Wehr aus Steinen und geflochtenen Weidenreusen im Nebenarm errichten",
        "description": "Leitet das Wasser so um, dass die Fische direkt in Reusenkörbe schwimmen.",
        "statChanges": {
          "volk": 20,
          "goetter": 15,
          "adel": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Am nächsten Morgen zappeln Dutzende Fische in den Reusen! Die ganze Sippe hat genug zu essen.",
          "mittelstufe": "Passive Fangtechnik: Die Reusen arbeiten Tag und Nacht ohne ständige Anwesenheit der Fischer.",
          "oberstufe": "Stationäre Fischwehr-Architektur: Reusen und Querwehre markieren früheste Formen kollektiver Landschaftsgestaltung."
        }
      },
      {
        "id": "C",
        "label": "Fische sofort filetieren und über rauchigen Erlenzweigen haltbar räuchern",
        "description": "Verhindert Madenbefall und sichert wohlschmeckende Eiweißrationen für Wochen.",
        "statChanges": {
          "goetter": 20,
          "adel": 10,
          "priester": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Der Rauch steigt auf: Goldbraune Räucherlachse hängen in Reihen an Gestellen.",
          "mittelstufe": "Konservierungserfolg: Geräucherter Fisch bleibt über Monate nahrhaft und aromatisch.",
          "oberstufe": "Räucherkonservierung: Entzug freier Feuchtigkeit und antimikrobielle Rauchphenole sichern Dauerproviant."
        }
      },
      {
        "id": "D",
        "label": "Mit einem ausgehöhlten Einbaum und Stellnetz die tiefe Flussmündung abfischen",
        "description": "Setzt Wissen ein, um Bootsbau und Netzknüpfkunst für Rekordfänge zu kombinieren.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "priester": 15,
          "volk": 15,
          "adel": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Unglaublich! Das Boot gleitet lautlos über den Fluss und das Netz fängt körbeweise Hechte und Lachse!",
          "mittelstufe": "Pionierleistung der Schifffahrt: Der Einbaum verleiht der Sippe enorme Mobilität auf Flüssen und Seen.",
          "oberstufe": "Nautisch-limnologische Exploitation: Netzknoten- und Einbaumtechnologie erschließen das pelagische Flusspotenzial vollkommen."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Harpunen & der Einbaum",
      "title": "Meister der Binnengewässer",
      "explanation": {
        "unterstufe": "Die Steinzeitmenschen bauten Boote aus einem einzigen dicken Baumstamm. Mit Feuer und Steinbeilen höhlten sie das Holz aus. Dazu nutzten sie Knochenharpunen mit Widerhaken.",
        "mittelstufe": "Der Einbaum von Pesse (Niederlande) ist über 9.000 Jahre alt – das älteste erhaltene Boot der Welt. Fischfang war risikoärmer als die Großwildjagd und lieferte lebenswichtige Omega-3-Fettsäuren.",
        "oberstufe": "Im Mesolithikum (Mittelsteinzeit) bildeten Flussauen und Küstenlinie die primären Siedlungsachsen. Fischfangreusen und Netzreste aus Lindenbast belegen hochentwickelte Flecht- und Knotentechniken."
      },
      "curiosityFact": "Fischharpunen aus Hirschgeweih hatten oft eine Schnuröse: Nach dem Einstich löste sich die Spitze vom Schaft, damit der zappelnde Fisch den Holzstab nicht zerbrach!"
    }
  },
  {
    "id": "stoneage_r09",
    "roundNumber": 9,
    "locationKey": "nacheiszeit_wald",
    "locationName": "Urwälder des Holozäns",
    "milestoneTitle": "Runde 9: Das Ende der Eiszeit & der neue Wald",
    "imagePath": "/assets/stoneage_station_05.jpg",
    "hotspots": [
      {
        "id": "hs_r9_eichenwald",
        "x": 55,
        "y": 35,
        "label": "Dichter Eichenmischwald",
        "description": "Birken, Kiefern, Ulmen und Eichen überwuchern die einstige Kältesteppe.",
        "icon": "🌳"
      },
      {
        "id": "hs_r9_hirsch",
        "x": 25,
        "y": 65,
        "label": "Flüchtiger Rothirsch",
        "description": "Viel scheuer und schneller als die alten eiszeitlichen Riesen.",
        "icon": "🦌"
      },
      {
        "id": "hs_r9_bogen",
        "x": 75,
        "y": 60,
        "label": "Flachbogen aus Eibenholz",
        "description": "Die neue Fernwaffe für lautlose Pirschjagden im dichten Unterholz.",
        "icon": "🏹"
      }
    ],
    "situation": {
      "unterstufe": "Das Klima hat sich erwärmt! Die großen Gletscher schmelzen ab, das Mammut ist verschwunden. Statt offener Tundra umgibt euch nun ein riesiger, geheimnisvoller Urwald. Zwischen den dichten Bäumen nützen schwere Speere nichts mehr – ihr braucht neue Waffen!",
      "mittelstufe": "Vor rund 11.500 Jahren beginnt das Holozän: Ein dramatischer ökologischer Wandel. Die Großsäuger der Eiszeit sterben aus oder wandern nach Norden ab. Schnelle Einzeltiere wie Rothirsch, Reh und Wildschwein verlangen neue Jagdstrategien: Pfeil und Bogen.",
      "oberstufe": "Klimatransformation und mesolithische Adaption: Der dramatische Vegetationswechsel zur dichten Bewaldung erforderte die Entwicklung von Mikrolithen, Recurvebögen und flexibler Einzel- oder Kleingruppenpirsch."
    },
    "choices": [
      {
        "id": "A",
        "label": "Einen elastischen Flachbogen aus feinjährigem Eibenholz schnitzen",
        "description": "Präzise Fernwaffe, mit der man ein Reh auf 40 Meter lautlos erlegen kann.",
        "statChanges": {
          "priester": 15,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Der Pfeil zischt lautlos durchs Geäst und trifft ins Schwarze! Eine fantastische neue Waffe.",
          "mittelstufe": "Revolution des Bogenbaus: Eibenholz vereint Zug- und Druckfestigkeit perfekt; eure Reichweite verdoppelt sich.",
          "oberstufe": "Ballistische Meisterleistung: Holmegård- und Stellmoor-Bogenfunde beweisen hochentwickeltes Wissen um Holzelastizität."
        }
      },
      {
        "id": "B",
        "label": "Auf Fährtenlesung und Pirsch im Unterholz umschulen",
        "description": "Lernt, leise wie ein Luchs zu schleichen, den Wind zu prüfen und Knackgeräusche zu vermeiden.",
        "statChanges": {
          "adel": 15,
          "volk": 10,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Geduld siegt: Ihr kommt bis auf wenige Schritte an ein ruhendes Wildschwein heran.",
          "mittelstufe": "Perfektionierte Pirsch: Die Jäger lernen den dichten Wald zu lesen wie ein offenes Buch.",
          "oberstufe": "Habitatanpassung im Mesolithikum: Geräuschlose Annäherung ersetzt die großflächige Treibjagd der Eiszeitsteppe."
        }
      },
      {
        "id": "C",
        "label": "Waldfrüchte, Pilze und Waldhonig systematisch kartieren",
        "description": "Erkundet Lichtungen und Bienenbäume, um süße Energiequellen zu erschließen.",
        "statChanges": {
          "goetter": 15,
          "volk": 15,
          "priester": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Goldener Honig! Die ganze Sippe schleckt begeistert die süßen Waben.",
          "mittelstufe": "Reiche Waldressourcen: Die Vielfalt des Eichenmischwaldes bietet Nahrung im Überfluss.",
          "oberstufe": "Ökologische Nischennutzung: Honigjagd und Waldbeerenkompilation erweitern das nutritive Profil substanziell."
        }
      },
      {
        "id": "D",
        "label": "Pfeilschäfte mit winzigen Mikrolithen und Federn aerodynamisch beflügeln",
        "description": "Setzt Wissen ein, um mit geometrischen Feuersteinen messerscharfe Pfeilschneiden zu kleben.",
        "epCost": 2,
        "statChanges": {
          "priester": 20,
          "goetter": 15,
          "adel": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Die Pfeile fliegen pfeifengerade und rotieren stabil im Flug. Kein Schuss verfehlt das Ziel!",
          "mittelstufe": "Mikrolithen-Technologie: Winzige Silexdreiecke bilden rasiermesserscharfe Schneiden mit verheerender Wirkung.",
          "oberstufe": "Projektilinnovation: Geometrische Mikrolithen mit radialer Dreifachbefiederung maximieren Flugstabilität und Drall."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Erfindung von Pfeil und Bogen",
      "title": "Die lautlose Fernwaffe des Waldes",
      "explanation": {
        "unterstufe": "Als die dichten Wälder wuchsen, war kein Platz mehr für weite Speerwürfe. Der Bogen ermöglichte es, blitzschnell und lautlos aus dem Versteck zu schießen.",
        "mittelstufe": "Bögen wurden meist aus Eibe oder Ulme gebaut. Die ältesten erhaltenen Bögen (z.B. von Stellmoor bei Hamburg) sind über 11.000 Jahre alt und bewiesen eine enorme Durchschlagskraft.",
        "oberstufe": "Der Bogen war die erste mechanische Fernwaffe des Menschen, die gespeicherte Muskelkraft schlagartig freisetzte. Er veränderte Jagd und kriegerische Konflikte bis ins späte Mittelalter."
      },
      "curiosityFact": "Steinzeitliche Pfeile flogen mit bis zu 150 km/h – schnell genug, um selbst dicke Hirschknochen sauber zu durchschlagen!"
    }
  },
  {
    "id": "stoneage_r10",
    "roundNumber": 10,
    "locationKey": "nacheiszeit_wald",
    "locationName": "Urwälder des Holozäns",
    "milestoneTitle": "Runde 10: Der erste Hund am Lagerfeuer",
    "imagePath": "/assets/stoneage_station_05.jpg",
    "hotspots": [
      {
        "id": "hs_r10_wolf",
        "x": 45,
        "y": 65,
        "label": "Zahmer Wolf / Urhund",
        "description": "Nähert sich vorsichtig, wedelt mit dem Schwanz und nimmt Fleischreste an.",
        "icon": "🐺"
      },
      {
        "id": "hs_r10_knochen",
        "x": 25,
        "y": 70,
        "label": "Hundeknochen mit Nagespuren",
        "description": "Hunde fraßen Reste, die der Mensch nicht mehr verdauen konnte.",
        "icon": "🦴"
      },
      {
        "id": "hs_r10_schlaf",
        "x": 70,
        "y": 55,
        "label": "Schlafplatz am Zeltrand",
        "description": "Als lebende Alarmanlage schlug der Urhund bei Fremden sofort an.",
        "icon": "⛺"
      }
    ],
    "situation": {
      "unterstufe": "Seit Wochen schleicht ein junger Wolf um euer Lager. Statt zu knurren, blickt er euch neugierig mit klugen Augen an. Als die Kinder ihm Fleischabfälle zuwerfen, fasst er Vertrauen. Einige Sippenmitglieder fürchten sich vor ihm – andere wollen ihn zähmen.",
      "mittelstufe": "Der Beginn einer einzigartigen Partnerschaft: Der Wolf war das allererste Tier, das der Mensch domestizierte – lange vor Schafen, Ziegen oder Rindern. Ein zahmer Wolfshund ist Jagdhelfer, Wächter gegen Bären und treuer Begleiter.",
      "oberstufe": "Domestikation des Wolfes (Canis lupus familiaris): Koevolutionäre Symbiose von Mensch und Canide. Wölfe profitierten von Schlachtabfällen, während Menschen von überlegener Geruchs- und Gehörsensorik profitierten."
    },
    "choices": [
      {
        "id": "A",
        "label": "Den jungen Wolf mit Fleischresten füttern und ihn behutsam an Menschen gewöhnen",
        "description": "Geduld und Sanftmut verwandeln das Raubtier in einen treuen Freund.",
        "statChanges": {
          "adel": 15,
          "volk": 15,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Er wedelt mit dem Schwanz! Der junge Hund schläft friedlich zu euren Füßen und lässt sich kraulen.",
          "mittelstufe": "Erfolgreiche Zahmung: Der Wolfshund integriert sich in die Sippe und beschützt die Kinder liebevoll.",
          "oberstufe": "Verhaltensbiologische Habituation: Die Reduktion von Flucht- und Angriffsdistanz begründet die Wolfsdomestikation."
        }
      },
      {
        "id": "B",
        "label": "Den Hund sofort darauf trainieren, Spuren von Rehen und Hirschen im Dickicht anzuzeigen",
        "description": "Nutzt seinen überlegenen Geruchssinn gezielt für künftige Jagdzüge.",
        "statChanges": {
          "goetter": 15,
          "priester": 10,
          "adel": 5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Unglaublich! Seine feine Nase spürt ein verwundetes Reh kilometerweit gegen den Wind auf.",
          "mittelstufe": "Hervorragender Jagdhund: Verlorene Beute gehört ab sofort der Vergangenheit an.",
          "oberstufe": "Funktionale Jagdkooperation: Die Kombination menschlicher Fernwaffen mit canider Spürnase revolutioniert die Effizienz."
        }
      },
      {
        "id": "C",
        "label": "Ihm eine Schlafstelle am Eingang zuweisen, damit er nachts bei Gefahr anschlägt",
        "description": "Macht ihn zum Wachposten gegen Raubtiere und fremde Stammesgruppen.",
        "statChanges": {
          "volk": 15,
          "adel": 10,
          "priester": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Mitten in der Nacht schlägt er laut an! Ein hungriger Bär dreht erschrocken ab. Alle sind gerettet.",
          "mittelstufe": "Zuverlässiger Wachhund: Das Lager schläft ab sofort ruhig und geschützt.",
          "oberstufe": "Sensorische Frühwarnung: Der Hund kompensiert die schwache nächtliche Sinneswahrnehmung des Menschen."
        }
      },
      {
        "id": "D",
        "label": "Ein rituelles Bündnis stiften und dem Tier ein Lederhalsband mit Schutzamulett umlegen",
        "description": "Setzt Wissen ein, um die geistige Verbindung zwischen Mensch und Tier feierlich zu besiegeln.",
        "epCost": 2,
        "statChanges": {
          "adel": 20,
          "goetter": 15,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Ein magischer Moment: Der Hund blickt in eure Augen und ist ab heute ein vollwertiges Sippenmitglied!",
          "mittelstufe": "Tiefes Band: Steinzeitliche Hundebestattungen mit Beigaben belegen, wie sehr Hunde damals geliebt wurden.",
          "oberstufe": "Symbolische Inklusion: Grabfunde (z.B. Bonn-Oberkassel) beweisen individuelle Fürsorge und emotionale Bindung."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Der Hund – Der älteste Freund des Menschen",
      "title": "Das erste Haustier der Geschichte",
      "explanation": {
        "unterstufe": "Der Hund stammt vom Wolf ab. Schon vor über 15.000 Jahren schlossen sich Wölfe den Menschen an. Sie halfen bei der Jagd und wachten nachts über das Schlaflager.",
        "mittelstufe": "Genetische Studien belegen, dass die Domestikation vor 15.000 bis 30.000 Jahren stattfand. Zahmere Wölfe näherten sich den Lagern, um Knochenreste zu fressen, und passten sich schrittweise an.",
        "oberstufe": "Das Doppelgrab von Bonn-Oberkassel (ca. 14.000 v. Chr.) enthielt einen Hund, der zusammen mit einem Mann und einer Frau feierlich bestattet wurde – ein klares Indiz für tiefe Gefühle."
      },
      "curiosityFact": "Hunde haben gelernt, die Mimik des Menschen zu lesen: Sie können erkennen, ob ein Gesicht fröhlich oder verärgert blickt!"
    }
  },
  {
    "id": "stoneage_r11",
    "roundNumber": 11,
    "locationKey": "sesshaftwerdung_langhaus",
    "locationName": "Flussterrasse & Langhausdorf",
    "milestoneTitle": "Runde 11: Der Bau des ersten Langhauses",
    "imagePath": "/assets/stoneage_station_06.jpg",
    "hotspots": [
      {
        "id": "hs_r11_pfosten",
        "x": 45,
        "y": 55,
        "label": "Eichene Spaltbohlen",
        "description": "Meterweit in den Lössboden eingegraben, tragen sie das tonnenschwere Dach.",
        "icon": "🪵"
      },
      {
        "id": "hs_r11_lehm",
        "x": 25,
        "y": 65,
        "label": "Lehmbewurf auf Flechtwerk",
        "description": "Gemischt mit Stroh und Mist, dichtet er die Wände wind- und wetterfest ab.",
        "icon": "🧱"
      },
      {
        "id": "hs_r11_schilfdach",
        "x": 60,
        "y": 35,
        "label": "Reet- und Schilfdach",
        "description": "Steil geneigt, damit Regen und Schnee rasch ablaufen.",
        "icon": "🌾"
      }
    ],
    "situation": {
      "unterstufe": "Schluss mit dem ewigen Wandern von Höhle zu Zeltlager! Eure Sippe hat fruchtbaren Boden gefunden und beschließt zu bleiben. Gemeinsam fällt ihr riesige Eichenstämme, um das allererste Haus eures Lebens zu bauen: Ein gewaltiges Langhaus!",
      "mittelstufe": "Die Neolithische Revolution erreicht Mitteleuropa vor rund 7.500 Jahren: Die Linienbandkeramiker errichten die ersten festen Siedlungen. Ein Langhaus ist bis zu 40 Meter lang und beherbergt Großfamilie, Getreidevorräte und Tiere unter einem Dach.",
      "oberstufe": "Neolithisierung und Architektur: Der Übergang von mobiler Zeltsubsistenz zu monumentaler Holzpfostenarchitektur erforderte kollektive Arbeitsorganisation, geplante Waldrodung und statisches Konstruktionswissen."
    },
    "choices": [
      {
        "id": "A",
        "label": "Massive Eichenstämme mit Dechsel-Steinbeilen fällen und spalten",
        "description": "Schwerstarbeit im Wald, um das stabile Pfostengerüst für Jahrzehnte zu errichten.",
        "statChanges": {
          "volk": 15,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Stamm um Stamm fällt! Mit vereinten Kräften richtet ihr die gewaltigen Tragpfosten auf.",
          "mittelstufe": "Perfekte Holzverbindung: Die Zapfen greifen nahtlos ineinander; das Gebälk steht wie eine Festung.",
          "oberstufe": "Zimmermannskunst des Frühneolithikums: Spaltbohlentechnik und Querverbände widerstehen extremen Dachlasten."
        }
      },
      {
        "id": "B",
        "label": "Wände aus Weidengeflecht mit Lehm, Mist und Häcksel isolieren",
        "description": "Schafft winddichte, warme Wände, die im Sommer kühlen und im Winter wärmen.",
        "statChanges": {
          "adel": 15,
          "volk": 15,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Der Lehm trocknet in der Sonne steinhart. Drinnen zieht kein Lüftchen mehr durch die Ritzen!",
          "mittelstufe": "Hervorragende Thermoisolierung: Flechtwerkwände mit Kalk-Lehmputz trotzen Frost und Feuchtigkeit.",
          "oberstufe": "Verbundbaustofflehre: Tonminerale, Strohfasern und Dung binden zu dauerhaften Fachwerkstrukturen ab."
        }
      },
      {
        "id": "C",
        "label": "Einen getrennten Vorrats- und Stallbereich im hinteren Hausteil einplanen",
        "description": "Trennt Schlafplätze hygienisch von Getreidespeichern und Tierbuchten.",
        "statChanges": {
          "goetter": 15,
          "adel": 10,
          "priester": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Alles hat seinen Platz: Vorräte bleiben trocken und die Wärme der Tiere wärmt das Haus.",
          "mittelstufe": "Kluge Raumaufteilung: Vorratssilos sind vor Mäusen geschützt und die Tiere stehen sicher.",
          "oberstufe": "Funktionale Dreiteilung: Die typisch bandkeramische Grundrissgliederung optimiert Hygiene und Arbeitsabläufe."
        }
      },
      {
        "id": "D",
        "label": "Den Dachstuhl nach der Himmelsrichtung der Sommersonnenwende ausrichten",
        "description": "Setzt Wissen ein, um maximale Sonneneinstrahlung im Winter und Schutz vor Westwinden zu nutzen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 20,
          "adel": 15,
          "volk": 15,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Das Haus liegt perfekt im Wind! Der Rauch zieht ideal ab und das Sonnenlicht wärmt die Stube.",
          "mittelstufe": "Klimagerechte Architektur: Die Südost-Ausrichtung minimiert Sturmschäden der vorherrschenden Westwinde.",
          "oberstufe": "Geoastronomische Siedlungsplanung: Bandkeramische Langhäuser zeigen eine verblüffend einheitliche Orientierung."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Das Langhaus der Bandkeramiker",
      "title": "Das erste feste Dach über dem Kopf",
      "explanation": {
        "unterstufe": "Vor 7.500 Jahren bauten die Menschen in Deutschland erstmals riesige Holzhäuser. Bis zu 30 Menschen wohnten darin gemeinsam. Zelte brauchte man nun nicht mehr.",
        "mittelstufe": "Die Häuser waren bis zu 8 Meter breit und 40 Meter lang. Das Dach bestand aus Reet oder Stroh. Ohne Nägel wurden die Balken mit Holzzapfen und Weidenbändern verbunden.",
        "oberstufe": "Das Langhaus symbolisiert die 'Neolithische Revolution'. Mit festen Häusern entstanden Grundbesitz, Dorfgemeinschaften, aber auch neue Konflikte um Ackerland und Vorräte."
      },
      "curiosityFact": "Bandkeramische Langhäuser waren so stabil gebaut, dass sie 30 bis 50 Jahre lang Wind und Wetter trotzten!"
    }
  },
  {
    "id": "stoneage_r12",
    "roundNumber": 12,
    "locationKey": "sesshaftwerdung_langhaus",
    "locationName": "Flussterrasse & Langhausdorf",
    "milestoneTitle": "Runde 12: Dorfgemeinschaft & das Lösen von Streit",
    "imagePath": "/assets/stoneage_station_06.jpg",
    "hotspots": [
      {
        "id": "hs_r12_platz",
        "x": 50,
        "y": 65,
        "label": "Dorfplatz mit Feuerstelle",
        "description": "Zentraler Treffpunkt für Versammlungen, Feste und Rechtsurteile.",
        "icon": "🔥"
      },
      {
        "id": "hs_r12_zaun",
        "x": 20,
        "y": 55,
        "label": "Palisade & Flechtwerkzaun",
        "description": "Hält streunende Wildtiere und Wölfe fern vom Dorfinneren.",
        "icon": "🪵"
      },
      {
        "id": "hs_r12_mahlstein",
        "x": 75,
        "y": 70,
        "label": "Gemeinsamer Sattelmahlstein",
        "description": "Hier mahlen Frauen stundenlang Körner zu Mehl und tauschen Neuigkeiten aus.",
        "icon": "🌾"
      }
    ],
    "situation": {
      "unterstufe": "Das Dorf wächst: Schon vier Langhäuser stehen nebeneinander. Doch enges Zusammenleben bringt Probleme mit sich! Die Ziegen der Nachbarn haben das frisch gesäte Kornfeld abgefressen. Wütendes Geschrei hallt über den Dorfplatz.",
      "mittelstufe": "Sesshaftigkeit erfordert völlig neue soziale Spielregeln: Nomaden konnten bei Streit einfach weiterziehen. Im festen Dorf müssen Konflikte um Besitz, Feldfrevel und Tiere friedlich gelöst werden, sonst droht Blutfehde.",
      "oberstufe": "Entstehung sozialer Rechtsnormen: Eigentumsbegriff an Boden, Vieh und Gebäuden erzeugt im Frühneolithikum erstmals zivilrechtliche Konflikte, die durch Ältestenräte moderiert werden müssen."
    },
    "choices": [
      {
        "id": "A",
        "label": "Einen Ältestenrat einberufen und eine Schadensersatz-Regelung beschließen",
        "description": "Die Ziegenbesitzer müssen den Schaden durch zwei Krüge getrocknetes Korn und Arbeitsleistung ausgleichen.",
        "statChanges": {
          "adel": 15,
          "volk": 15,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Gerecht gelöst: Die Nachbarn reichen sich die Hand und der Schaden wird gemeinsam behoben.",
          "mittelstufe": "Konstruktiver Rechtsfrieden: Das Prinzip der Wiedergutmachung verhindert böses Blut in der Gemeinschaft.",
          "oberstufe": "Restorative Justice im Frühneolithikum: Kompensation statt Rache festigt das friedliche Zusammenleben."
        }
      },
      {
        "id": "B",
        "label": "Alle Familien verpflichten, gemeinsam einen festen Weidezaun um das Vieh zu bauen",
        "description": "Packt die Ursache an der Wurzel, damit so etwas nie wieder passieren kann.",
        "statChanges": {
          "volk": 20,
          "adel": 10,
          "priester": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Der Zaun steht vor Sonnenuntergang! Das Vieh bleibt eingesperrt und die Felder sind sicher.",
          "mittelstufe": "Gemeinschaftsarbeit stiftet Einigkeit: Zusammen anpacken schweißt das neue Dorf enger zusammen.",
          "oberstufe": "Kollektive Infrastruktur: Gemeinschaftliche Einfriedungen schützen privates Eigentum wirksam."
        }
      },
      {
        "id": "C",
        "label": "Feste Grenzen zwischen den Familienfeldern mit Markierungssteinen abstecken",
        "description": "Klarheit über Grund und Boden schafft Ordnung für künftige Generationen.",
        "statChanges": {
          "priester": 15,
          "adel": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Jeder weiß genau, wo sein Feld aufhört. Niemand streitet mehr über Grenzfurchen.",
          "mittelstufe": "Grenzmarkierung: Sichtbare Landmarken verhindern Missverständnisse bei der Feldbearbeitung.",
          "oberstufe": "Katastervorläufer: Territoriale Demarkationslinien strukturieren das neolithische Ackerland."
        }
      },
      {
        "id": "D",
        "label": "Ein Versöhnungsfest mit gemeinsamem Mahl und Musik am Dorfplatz stiften",
        "description": "Setzt Wissen ein, um gekochten Getreidebrei und Kräutergetränke für alle zur Einigung bereitzustellen.",
        "epCost": 2,
        "statChanges": {
          "adel": 20,
          "volk": 20,
          "goetter": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Aus Streit wird Freundschaft! Bei Gesang und Brei lachen alle wieder gemeinsam.",
          "mittelstufe": "Kulturelle Versöhnung: Das gemeinsame Festessen bekräftigt den Sippeneid und die Dorfgemeinschaft.",
          "oberstufe": "Rituelle Konflikttransformation: Kommensalität (gemeinsames Speisen) neutralisiert Aggressionen im Keim."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Vom Nomaden zum Dorfbewohner",
      "title": "Die Erfindung der Nachbarschaft",
      "explanation": {
        "unterstufe": "Früher zogen die Menschen weiter, wenn es Streit gab. Als sie feste Häuser bauten, ging das nicht mehr. Sie mussten lernen, miteinander zu reden, Zäune zu bauen und Regeln einzuhalten.",
        "mittelstufe": "Mit der Sesshaftigkeit entstand erstmals persönliches Eigentum an Grundstücken und Getreidespeichern. Dies erforderte neue Regeln, Schiedsgerichte und Anführer, die für Ordnung sorgten.",
        "oberstufe": "Die Sesshaftwerdung führte zu tiefergehenden sozialen Transformationen: Bevölkerungswachstum, Spezialisierung von Handwerken, aber auch zu ersten Befestigungsanlagen und kriegerischen Überfällen."
      },
      "curiosityFact": "Ausgrabungen zeigen, dass bandkeramische Dörfer oft 100 bis 200 Meter Abstand zueinander hielten – genug Platz für Weideland!"
    }
  },
  {
    "id": "stoneage_r13",
    "roundNumber": 13,
    "locationKey": "ackerbau_feldfrucht",
    "locationName": "Gerodete Waldlichtung & Kornfelder",
    "milestoneTitle": "Runde 13: Die Rodung & das erste Korn",
    "imagePath": "/assets/stoneage_station_07.jpg",
    "hotspots": [
      {
        "id": "hs_r13_brandrodung",
        "x": 50,
        "y": 45,
        "label": "Brandrodung im Urwald",
        "description": "Feuer wandelt dichten Wald in fruchtbares, aschedurchtränktes Ackerland um.",
        "icon": "🔥"
      },
      {
        "id": "hs_r13_grabstock",
        "x": 25,
        "y": 70,
        "label": "Grabstock mit Steingewicht",
        "description": "Der Vorläufer des Pflugs: Zieht feine Rillen in die weiche Schwarzerde.",
        "icon": "⛏️"
      },
      {
        "id": "hs_r13_emmer",
        "x": 75,
        "y": 60,
        "label": "Ähren von Emmer & Einkorn",
        "description": "Widerstandsfähiges Urgetreide mit harten Spelzen gegen Frost und Schädlinge.",
        "icon": "🌾"
      }
    ],
    "situation": {
      "unterstufe": "Um Korn anpflanzen zu können, braucht ihr Platz und Sonnenlicht! Dichte Eichen und Buchen bedecken das Land. Mit Feuer und geschliffenen Steinbeilen brennt ihr eine Lichtung in den Wald. In die fruchtbare Asche streut ihr eure ersten kostbaren Weizenkörner.",
      "mittelstufe": "Der Beginn des Ackerbaus: Emmer und Einkorn stammen ursprünglich aus dem Vorderen Orient (Fruchtbarer Halbmond). Die Linienbandkeramiker brachten diese Kulturpflanzen mit nach Europa. Brandrodung liefert Nährstoffe für die ersten Ernten.",
      "oberstufe": "Neolithische Agrarinnovation: Brandrodungsfeldbau (Slash-and-burn) erschließt nährstoffreiche Lössböden. Die Domestikation von Triticum dicoccum (Emmer) markiert den Übergang von passiver Entnahme zu aktiver Nahrungsproduktion."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Unterholz kontrolliert abbrennen und die Asche als Dünger einarbeiten",
        "description": "Reichert den Boden mit Mineralstoffen und Kalium für kräftiges Ährenwachstum an.",
        "statChanges": {
          "goetter": 15,
          "volk": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Das Feuer erlischt rechtzeitig. In der schwarzen Asche keimen nach wenigen Tagen grüne Hälmchen!",
          "mittelstufe": "Erfolgreiche Brandrodung: Die Nährstoffe der Asche verwandeln den Waldboden in üppiges Ackerland.",
          "oberstufe": "Mineralischer Bodenschub: Aschedüngung neutralisiert Humussäuren und liefert essenzielle Phosphate."
        }
      },
      {
        "id": "B",
        "label": "Die Saatkörner mit gewichteten Grabstöcken tief in die feuchte Erde drücken",
        "description": "Schützt die kostbaren Körner vor Vögeln und Austrocknung durch Sommersonne.",
        "statChanges": {
          "volk": 15,
          "adel": 10,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Schlaue Technik: Die Krähen suchen vergeblich; die Saat sprießt sicher aus dem Erdreich.",
          "mittelstufe": "Präzise Saatbettanlage: Durch gleichmäßige Saattiefe schlagen die Getreidehalme feste Wurzeln.",
          "oberstufe": "Bodenmechanische Saatkonsolidierung: Grabstöcke verhindern Vogelfraß und Wurzelaustrocknung."
        }
      },
      {
        "id": "C",
        "label": "Einen Zaun aus Dornengestrüpp um das Ackerfeld ziehen",
        "description": "Hält hungrige Wildschweine und Rehe davon ab, die jungen Triebe niederzutrampeln.",
        "statChanges": {
          "adel": 15,
          "priester": 10,
          "volk": 5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Sicher ist sicher: Die Wildschweine prallen am Dornenverhau ab und das Getreide bleibt heil.",
          "mittelstufe": "Umfassender Feldschutz: Ohne Schutzhecken wäre die Ernte durch Waldfraß verloren gewesen.",
          "oberstufe": "Kultivierungsperimeter: Einfriedungen schützen das agrarische Investitionsgut vor Wildschäden."
        }
      },
      {
        "id": "D",
        "label": "Einen Hakenpflug (Arl) bauen und von Sippenmitgliedern durch den Boden ziehen lassen",
        "description": "Setzt Wissen ein, um die Erdoberfläche im Team zehnmal schneller aufzulockern als von Hand.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "volk": 20,
          "adel": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Ein revolutionäres Gerät! Der Pflug reißt tiefe, gerade Furchen. Ihr schafft das dreifache Feld!",
          "mittelstufe": "Agrarische Mechanisierung: Der Hakenpflug vervielfacht die bearbeitbare Fläche enorm.",
          "oberstufe": "Technologische Agrarrevolution: Der Übergang von Hortikultur zu Pflugbau steigert den Flächenertrag drastisch."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Emmer & Einkorn – Das Urgetreide",
      "title": "Die Ahnen unseres Brotes",
      "explanation": {
        "unterstufe": "Vor Jahrtausenden gab es noch kein Weizenmehl wie heute. Die Menschen bauten Einkorn und Emmer an. Ihre Körner waren von harten Spelzen geschützt und schmeckten nussig.",
        "mittelstufe": "Urgetreide war extrem widerstandsfähig gegen Pilzbefall und Trockenheit. Allerdings musste das Korn nach der Ernte mühsam gedroschen und entspelzt werden, bevor man es mahlen konnte.",
        "oberstufe": "Die Selektion von Getreidemutationen mit nicht-zerbrechender Ährenspindel war die wichtigste genetische Anpassung der Domestikation: Reife Körner fielen nicht mehr zu Boden, sondern warteten auf den Ernteschnitt."
      },
      "curiosityFact": "Einkorn hat nur ein einziges Körnchen pro Spindelglied – moderner Hochleistungsweizen hat heute bis zu fünf!"
    }
  },
  {
    "id": "stoneage_r14",
    "roundNumber": 14,
    "locationKey": "ackerbau_feldfrucht",
    "locationName": "Gerodete Waldlichtung & Kornfelder",
    "milestoneTitle": "Runde 14: Die Goldene Ernte & die Feuersteinsichel",
    "imagePath": "/assets/stoneage_station_07.jpg",
    "hotspots": [
      {
        "id": "hs_r14_sichel",
        "x": 40,
        "y": 65,
        "label": "Sichel mit Glanzpatina",
        "description": "Feuersteinklingen im Holzgriff; Getreidesilikate schleifen den Stein spiegelglatt.",
        "icon": "🌾"
      },
      {
        "id": "hs_r14_garben",
        "x": 70,
        "y": 55,
        "label": "Getreidegarben",
        "description": "Zu Kegeln aufgestellt, damit die Ähren im warmen Spätsommerwind nachtrocknen.",
        "icon": "☀️"
      },
      {
        "id": "hs_r14_speicher",
        "x": 20,
        "y": 40,
        "label": "Pfahlspeicher (Horreum)",
        "description": "Auf Stelzen erhöht, damit Feuchtigkeit und Mäuse nicht an die Ernte gelangen.",
        "icon": "🏠"
      }
    ],
    "situation": {
      "unterstufe": "Spätsommer: Das Feld schimmert im schönsten Goldgelb! Die Ähren hängen schwer voller Körner. Nun zählt jeder Tag, denn wenn der Herbstregen einsetzt, verfault die Ernte. Mit gebogenen Sicheln schneidet ihr Halm für Halm.",
      "mittelstufe": "Die Ernte ist der Höhepunkt des neolithischen Jahreszyklus: Gelingt sie, hat das Dorf für den ganzen Winter Brot und Getreidebrei. Versagt sie durch Unwetter oder Schädlinge, droht unbarmherziger Hunger.",
      "oberstufe": "Erntelogistik und Getreidesilierung: Der Einsatz von Sichelklingen mit 'Sichelglanz' (Kieselsäurepolitur) und stelzengebauten Vorratsspeichern sicherte die Ernährung der wachsenden dörflichen Population."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Halme knapp unter den Ähren mit der Feuersteinsichel abschneiden",
        "description": "Schont die Klingen und spart wertvollen Platz beim Transport ins Dorf.",
        "statChanges": {
          "goetter": 15,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Die Klingen gleiten raschelnd durchs Korn! Korb für Korb voller goldener Ähren wandert ins Dorf.",
          "mittelstufe": "Effizienter Ernteschnitt: Das Abschneiden der Ähren spart Kraft und erleichtert das anschließende Trocknen.",
          "oberstufe": "Selektive Ährenernte: Maximale Körnerausbeute bei minimalem Stroh-Ballast optimiert die Lagerung."
        }
      },
      {
        "id": "B",
        "label": "Einen Stelzenspeicher mit Mäuseschutz-Steinplatten bauen",
        "description": "Hält Feuchtigkeit und hungrige Nager zuverlässig von den Getreidevorräten fern.",
        "statChanges": {
          "volk": 20,
          "goetter": 15,
          "adel": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Keine Maus kommt an das Korn heran! Die Vorräte bleiben den ganzen Winter über staubtrocken.",
          "mittelstufe": "Meisterhafte Vorratslagerung: Glatte Schieferplatten an den Stelzenfüßen bilden unüberwindliche Barrieren.",
          "oberstufe": "Post-Harvest-Sicherung: Pilz- und Nagetierschutz sichert das Reproduktions- und Saatgutkontingent."
        }
      },
      {
        "id": "C",
        "label": "Die besten, dicksten Ähren als Saatgut für das nächste Frühjahr beiseitelegen",
        "description": "Niemals das ganze Korn aufessen: Nur wer Saatgut schont, kann im nächsten Jahr wieder ernten.",
        "statChanges": {
          "adel": 15,
          "goetter": 10,
          "priester": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Kluge Vorsorge: Das Saatgut wird feierlich in Tonkrügen versiegelt und sicher verwahrt.",
          "mittelstufe": "Künstliche Selektion: Durch die Auslese der kräftigsten Körner wird die Ernte Jahr für Jahr ertragreicher.",
          "oberstufe": "Züchterische Selektionsarbeit: Die Bewahrung genetisch vitalen Saatguts stabilisiert künftige agrarische Erträge."
        }
      },
      {
        "id": "D",
        "label": "Ein Dankbarkeits-Erntefest mit Bierbrauen und rituellen Brotfladen feiern",
        "description": "Setzt Wissen ein, um gekeimtes Korn zu süßlichem Ur-Bier zu vergären und Fladen auf heißen Steinen zu backen.",
        "epCost": 2,
        "statChanges": {
          "adel": 20,
          "goetter": 20,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Was für ein himmlischer Duft! Frisches Fladenbrot und schäumender Gerstensaft – das ganze Dorf tanzt!",
          "mittelstufe": "Kulturelle Krönung: Bier und Brot sind die ersten fermentierten Lebensmittel der Menschheit.",
          "oberstufe": "Fermentationsbiotechnologie: Gärungsprozesse machten Getreide nährstoffreicher, haltbarer und stifteten kultische Gemeinschaft."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Erfindung von Brot und Bier",
      "title": "Fermentation in der Jungsteinzeit",
      "explanation": {
        "unterstufe": "Vor 7.000 Jahren aßen die Menschen Getreidebrei oder buken dünne Fladen auf heißen Steinen am Feuer. Auch das erste Bier wurde zufällig erfunden, als nasses Getreide zu gären begann.",
        "mittelstufe": "Getreidekörner wurden auf schweren Mahlsteinen von Hand zu grobem Mehl zerrieben. Durch den Steinabrieb nutzten sich die Zähne der Steinzeitmenschen stark ab.",
        "oberstufe": "Einige Archäologen vertreten die 'Bier-Hypothese': Der Wunsch nach berauschenden Festgetränken für Kulthandlungen sei ein ebenso starker Motor für den Getreideanbau gewesen wie der reine Hunger."
      },
      "curiosityFact": "Unter dem Mikroskop glänzen alte Feuersteinsicheln wie Gold – das liegt an mikroskopischen Kieselsäurekristallen in den Weizenhalmen!"
    }
  },
  {
    "id": "stoneage_r15",
    "roundNumber": 15,
    "locationKey": "domestikation_vieh",
    "locationName": "Viehpferche & Dorfweiden",
    "milestoneTitle": "Runde 15: Die Zähmung der Wildtiere",
    "imagePath": "/assets/stoneage_station_08.jpg",
    "hotspots": [
      {
        "id": "hs_r15_auerochse",
        "x": 30,
        "y": 65,
        "label": "Zahme Hausrinder",
        "description": "Nachfahren des gewaltigen Auerochsen; liefern Milch, Fleisch, Leder und Zugkraft.",
        "icon": "🐂"
      },
      {
        "id": "hs_r15_schaf",
        "x": 65,
        "y": 60,
        "label": "Primitivschafe & Ziegen",
        "description": "Genügsame Weidetiere; liefern Wolle zum Filzen und tägliche Ziegenmilch.",
        "icon": "🐑"
      },
      {
        "id": "hs_r15_pferch",
        "x": 50,
        "y": 45,
        "label": "Flechtzaun-Pferch",
        "description": "Dornenverhau und Haselzäune hindern Wölfe am Eindringen in die Herde.",
        "icon": "🪵"
      }
    ],
    "situation": {
      "unterstufe": "Nicht mehr jeden Tag jagen müssen! Im Dorf meckern die Ziegen und Schafe kauen friedlich im Pferch. Sie fressen Gras, das Menschen nicht verdauen können, und verwandeln es in Milch, Wolle und Fleisch. Doch die wilden Auerochsen sind noch gefährlich und ungestüm.",
      "mittelstufe": "Die Domestikation der Nutztiere: Neben Schafen, Ziegen und Schweinen ist das Rind das wichtigste Haustier. Aus dem riesigen, angriffslustigen Auerochsen züchten die Neolithiker schrittweise kleinere, gutmütigere Tiere.",
      "oberstufe": "Sekundärproduktrevolution: Tiere dienten anfangs nur als Fleischlieferanten. Im Lauf der Jungsteinzeit lernte der Mensch, 'lebende Ressourcen' zu nutzen: Milch, Käse, Schurwolle, Dung als Dünger und Muskelkraft zum Pflügen."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die sanftmütigsten Kälber und Lämmer für die Weiterzucht auswählen",
        "description": "Wählt gezielt friedliche Tiere aus, um die Herde zahmer und lenkbarer zu machen.",
        "statChanges": {
          "volk": 15,
          "adel": 10,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Es klappt: Schon die nächste Generation lässt sich von den Kindern am Kopf streicheln.",
          "mittelstufe": "Gezielte Zuchtwahl: Die Aggressivität nimmt ab; die Herde wird friedlich und leicht zu hüten.",
          "oberstufe": "Domestikationsselektion: Gezielte Reduktion von Fluchtreaktionen transformiert den Phänotyp nachhaltig."
        }
      },
      {
        "id": "B",
        "label": "Einen wehrhaften Dornenpferch mit Graben gegen Wolfsrudel verstärken",
        "description": "Schützt die wertvollen Tiere nachts vor den Raubtieren des dichten Urwaldes.",
        "statChanges": {
          "priester": 15,
          "goetter": 10,
          "volk": 5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Die Wölfe heulen enttäuscht am Waldrand. Keine einzige Ziege wird gerissen!",
          "mittelstufe": "Perfekter Herdenschutz: Die befestigte Hürde sichert das wertvolle Lebendkapital der Sippe.",
          "oberstufe": "Sicherheitsinfrastruktur: Gehegebau minimiert Raubtierverluste in waldreicher Neolithlandschaft."
        }
      },
      {
        "id": "C",
        "label": "Heu und getrocknetes Laub auf Gestellen als Winterfutter anlegen",
        "description": "Verhindert, dass die Tiere im frostigen Winter verhungern oder notgeschlachtet werden müssen.",
        "statChanges": {
          "goetter": 20,
          "adel": 10,
          "volk": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Schlaue Vorsorge: Im eisigen Januar fressen die Kühe trockenes Laub und bleiben wohlgenährt.",
          "mittelstufe": "Schneitelwirtschaft: Getrocknete Eschen- und Ulmenzweige sichern das Überleben der Herde im Winter.",
          "oberstufe": "Laubheunutzung: Die Schneitelwirtschaft war das primäre Winterfütterungssystem vor der Anlage von Wiesen."
        }
      },
      {
        "id": "D",
        "label": "Zwei kräftigen Ochsen ein hölzernes Stirnjoch anpassen und Pflüge ziehen lassen",
        "description": "Setzt Wissen ein, um die tierische Muskelkraft vor den Pflug zu spannen – ein Sprung für die Menschheit!",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "volk": 20,
          "priester": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Unglaubliche Kraft! Die Ochsen ziehen den Pflug mühelos durch die schwerste Schwarzerde!",
          "mittelstufe": "Nutzung tierischer Zugkraft: Das Joch vervielfacht die landwirtschaftliche Kraft der Menschen um das Zehnfache.",
          "oberstufe": "Energiehistorischer Meilenstein: Das Gespann aus Rind und Hakenpflug begründet die agrarische Hochleistungsproduktion."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Zähmung des Auerochsen",
      "title": "Vom wilden Ur zum braven Hausrind",
      "explanation": {
        "unterstufe": "Der Auerochse war ein riesiges Wildrind mit gewaltigen Hörnern, fast zwei Meter hoch. Die Menschen zähmten seine Kälber, bis daraus unsere heutigen sanften Kühe wurden.",
        "mittelstufe": "Aus dem Nahen Osten stammten die ersten zahmen Rinder. Sie gaben Milch, Fleisch und lieferten Leder für Kleidung. Vor allem aber halfen sie bald beim Ziehen schwerer Lasten.",
        "oberstufe": "Alle heutigen Hausrinder Eurasiens stammen genetisch von nur etwa 80 urzeitlichen weiblichen Auerochsen ab, die vor 10.500 Jahren im Nahen Osten domestiziert wurden."
      },
      "curiosityFact": "Der letzte wilde Auerochse der Welt starb im Jahr 1627 in einem polnischen Wald aus!"
    }
  },
  {
    "id": "stoneage_r16",
    "roundNumber": 16,
    "locationKey": "domestikation_vieh",
    "locationName": "Viehpferche & Dorfweiden",
    "milestoneTitle": "Runde 16: Das Geheimnis der Milch & Käseherstellung",
    "imagePath": "/assets/stoneage_station_08.jpg",
    "hotspots": [
      {
        "id": "hs_r16_melken",
        "x": 35,
        "y": 65,
        "label": "Tontopf mit Frischmilch",
        "description": "Frisch gemolken von Ziegen und Kühen; reich an Eiweiß, Fett und Calcium.",
        "icon": "🥛"
      },
      {
        "id": "hs_r16_sieb",
        "x": 65,
        "y": 55,
        "label": "Tonsieb zur Käseherstellung",
        "description": "Keramikgefäß mit vielen kleinen Löchern, um die Molke vom Quark zu trennen.",
        "icon": "🧀"
      },
      {
        "id": "hs_r16_lager",
        "x": 80,
        "y": 70,
        "label": "Kühler Lehmkeller",
        "description": "Hier reifen gesalzene Käselaibe über Wochen zu haltbarem Proviant heran.",
        "icon": "🏺"
      }
    ],
    "situation": {
      "unterstufe": "Ihr melkt eure Ziegen und Kühe in Tonkrüge. Doch frische Milch wird bei Sommerhitze blitzschnell sauer und ungenießbar! Außerdem bekommen viele Erwachsene Bauchschmerzen davon. Die Lösung: Die Erfindung von Joghurt, Quark und Käse!",
      "mittelstufe": "Die Laktosetoleranz-Mutation: Ursprünglich konnten erwachsene Menschen keine Frischmilch verdauen (Laktoseintoleranz). Durch Fermentation in Käse und Quark bauten die Steinzeitbauern den Milchzucker ab und schufen ein revolutionäres Dauernahrungsmittel.",
      "oberstufe": "Gen-Kultur-Koevolution: Der Milchkonsum förderte die Verbreitung des Laktase-Persistenz-Gens in Mitteleuropa. Tonsiebe mit Milchfettspuren belegen die früheste Käserei der Menschheit bereits um 5.500 v. Chr."
    },
    "choices": [
      {
        "id": "A",
        "label": "Die Milch gerinnen lassen und die Dickmilch durch gelochte Tonsiebe abseihen",
        "description": "Trennung von flüssiger Molke und festem Käsebruch ergibt bekömmlichen Frischkäse.",
        "statChanges": {
          "goetter": 15,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Der Käse schmeckt herrlich! Selbst wer früher Bauchweh hatte, verträgt ihn problemlos.",
          "mittelstufe": "Perfekte Entmolkung: Der feste Bruch lässt sich formen und ist ohne Bauchschmerzen genießbar.",
          "oberstufe": "Frühe Käsereitechnologie: Durch das Abtrennen der laktosereichen Molke entsteht laktosearmer Käse."
        }
      },
      {
        "id": "B",
        "label": "Käselaibe salzen und in tiefen, kühlen Erdlöchern monatelang reifen lassen",
        "description": "Schafft haltbare, schnittfeste Käselaibe als eiserne Reserve für harte Winterwochen.",
        "statChanges": {
          "goetter": 20,
          "adel": 10,
          "priester": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Nach zwei Monaten ist der Käse fest, gelb und aromatisch. Ein perfekter Wintervorrat!",
          "mittelstufe": "Konservierungserfolg: Die Salzrinde schützt das Innere vor Fäulnis; der Käse hält monatelang.",
          "oberstufe": "Härtungs- und Reifeprozesse: Salzhemmung und kühle Lagerung schaffen unverderbliche Kalorienreserven."
        }
      },
      {
        "id": "C",
        "label": "Die saure Molke an die Schweine verfüttern, um nichts zu verschwenden",
        "description": "Kreislaufwirtschaft im Dorf: Abfallprodukte der Käserei mästen die dörflichen Nutztiere.",
        "statChanges": {
          "volk": 15,
          "adel": 10,
          "priester": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Schweine quieken glücklich und wachsen prächtig heran. Nichts wird weggeworfen!",
          "mittelstufe": "Geschlossener Nahrungskreislauf: Molkeverwertung optimiert die Tierhaltung ohne Zusatzaufwand.",
          "oberstufe": "Agro-pastorale Kreislaufwirtschaft: Sekundäre Reststoffe maximieren die Gesamtenergiebilanz der Siedlung."
        }
      },
      {
        "id": "D",
        "label": "Aus Rahm in Tonkrügen durch Schütteln die erste Butter schlagen",
        "description": "Setzt Wissen ein, um reines Milchfett mechanisch abzuscheiden – reich an Vitaminen und Energie.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "adel": 15,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Goldgelbe Butter! Auf warmem Fladenbrot schmilzt sie zart dahin – die Sippe ist selig!",
          "mittelstufe": "Geniale Erfindung: Durch das Buttern entsteht hochkonzentriertes, energiereiches Streichfett.",
          "oberstufe": "Emulsionsphasenumkehr: Das Buttern trennt Lipide von Wasser und schafft ein hochkalorisches Dauerfett."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Erfindung des Käses",
      "title": "Wie der Käse unsere Gene veränderte",
      "explanation": {
        "unterstufe": "Bevor es Kühlschränke gab, wurde Milch in Stunden sauer. Vor 7.500 Jahren fanden die Menschen heraus: Wenn man Milch gerinnen lässt und das Wasser abpresst, entsteht Käse, der Monate hält!",
        "mittelstufe": "Fast alle Säugetiere vertragen als Erwachsene keine Milch. Erst durch das Trinken von Milch und Essen von Käse entwickelte sich bei den Europäern eine Genveränderung, die Laktose verträglich machte.",
        "oberstufe": "In Polen fanden Archäologen bandkeramische Tonscherben mit vielen Löchern aus der Zeit um 5.500 v. Chr. Chemische Analysen bewiesen: Darin klebten noch heute Fettsäuren von geronnenem Käse!"
      },
      "curiosityFact": "Käse war die 'Lebensversicherung' der ersten Bauern: Eine einzige Milchkuh lieferte über die Jahre mehr Kalorien als zehn geschlachtete Rinder!"
    }
  },
  {
    "id": "stoneage_r17",
    "roundNumber": 17,
    "locationKey": "toepferei_brennofen",
    "locationName": "Lehmgrube & Feldbrandöfen",
    "milestoneTitle": "Runde 17: Die Kunst der Bandkeramik",
    "imagePath": "/assets/stoneage_station_09.jpg",
    "hotspots": [
      {
        "id": "hs_r17_wulst",
        "x": 30,
        "y": 65,
        "label": "Tongefäß in Wulsttechnik",
        "description": "Ohne Töpferscheibe von Hand aus feuchten Tonwürsten schichtweise aufgebaut.",
        "icon": "🏺"
      },
      {
        "id": "hs_r17_ritzung",
        "x": 50,
        "y": 55,
        "label": "Eingeritzte Bandmuster",
        "description": "Wellen- und Zickzackbänder mit Knochenstempeln; das Markenzeichen der Kultur.",
        "icon": "✍️"
      },
      {
        "id": "hs_r17_grube",
        "x": 75,
        "y": 70,
        "label": "Feldbrandgrube mit Glut",
        "description": "Unter Holzkohle und Rasenabdeckung bei ca. 700 Grad gebrannt.",
        "icon": "🔥"
      }
    ],
    "situation": {
      "unterstufe": "Aus nasser Erde wird harter Stein! Am Flussufer habt ihr feinen, grauen Ton gegraben. Mit den Händen rollt ihr Tonwürste und baut Schicht für Schicht Töpfe, Schüsseln und Krüge auf. Mit einem spitzen Knochen ritzt ihr schöne Wellenmuster ein.",
      "mittelstufe": "Die Erfindung der Töpferei revolutioniert den Alltag: Erstmals kann man Flüssigkeiten lagern, transportieren und kochen! Die typischen Band- und Spiralmuster gaben der Kultur ihren Namen: Linienbandkeramik (LBK).",
      "oberstufe": "Keramische Pyrotechnologie des Altneolithikums: Magerung des Tons mit Sand oder Schamotte verhinderte Rissbildung beim Trocknen. Das Brennen in offenen Feldbrandgruben bei 600–800 °C erforderte präzise Temperaturführung."
    },
    "choices": [
      {
        "id": "A",
        "label": "Den Ton sorgfältig mit Quarzsand magern, damit er beim Brennen nicht springt",
        "description": "Verhindert Schwindungsrisse und sorgt für bruchfeste, robuste Vorratsgefäße.",
        "statChanges": {
          "priester": 15,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Perfekt gelungen! Die Töpfe klingen hell beim Anklopfen und haben keinen einzigen Riss.",
          "mittelstufe": "Fachgerechte Magerung: Der Quarzsand fängt die Spannungen ab; die Töpfe halten selbst offenem Feuer stand.",
          "oberstufe": "Keramologische Materialkunde: Schamotte- und Sandmagerung optimiert die Temperaturwechselbeständigkeit."
        }
      },
      {
        "id": "B",
        "label": "Traditionelle Sippensymbole und Fruchtbarkeitsmuster in die Tonwand ritzen",
        "description": "Dekoration und Erkennungszeichen, das Geschichten und Herkunft der Familie erzählt.",
        "statChanges": {
          "adel": 15,
          "volk": 10,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Wunderschön! Die Spiralen und Bänder glänzen und jeder im Dorf bewundert deine Kunst.",
          "mittelstufe": "Kulturelles Erkennungszeichen: Die Bandmuster stiften ästhetische und soziale Identität.",
          "oberstufe": "Stilchronologie der Bandkeramik: Ritzverzierungen dienten als semiotisches Kommunikationsmedium zwischen Siedlungen."
        }
      },
      {
        "id": "C",
        "label": "Wasserdichte Kugelamphoren mit Ösen für den Tragriemen formen",
        "description": "Ermöglicht den bequemen Wassertransport von der Quelle ins hochgelegene Dorf.",
        "statChanges": {
          "goetter": 15,
          "priester": 10,
          "volk": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Kein Tropfen geht verloren! Mit den Trageösen lässt sich der Krug mühelos über der Schulter tragen.",
          "mittelstufe": "Funktionale Gefäßformen: Amphoren mit Schnurösen erleichtern die Wasserlogistik immens.",
          "oberstufe": "Ergonomische Keramiktypologie: Trageösen und Kugelböden optimieren den Transport im hügeligen Gelände."
        }
      },
      {
        "id": "D",
        "label": "Einen abgedeckten Lehm-Kuppelofen bauen, um 800 °C Brenntemperatur zu erreichen",
        "description": "Setzt Wissen ein, um die Hitze im Ofen zu stauen – für steinhartes, klingendes Geschirr.",
        "epCost": 2,
        "statChanges": {
          "priester": 20,
          "goetter": 15,
          "volk": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Unglaubliche Glut! Die Töpfe kommen feuerrot glühend heraus – hart wie Basaltstein!",
          "mittelstufe": "Pionierofen: Durch den geschlossenen Kuppelbrand entsteht extrem dichte, wetterfeste Qualitätskeramik.",
          "oberstufe": "Ofenbautechnische Innovation: Kuppelöfen ebnen den Weg zur späteren Metallverhüttung durch gezielte Zugluftlenkung."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Linienbandkeramik",
      "title": "Europas erste Bauernkultur",
      "explanation": {
        "unterstufe": "Vor 7.500 Jahren lebten die ersten Bauern in Deutschland. Archäologen nennen sie 'Bandkeramiker', weil sie ihre Töpfe mit eingeritzten Bändern und Spiralen verzierten.",
        "mittelstufe": "Ohne Töpferscheibe formten sie Gefäße in Wulsttechnik. Erstmals konnte Getreidebrei gekocht und Mehl trocken vor Mäusen gelagert werden – eine Revolution für den Haushalt.",
        "oberstufe": "Die Bandkeramische Kultur (LBK) breitete sich in nur wenigen Jahrhunderten von Ungarn bis an den Rhein aus. Sie besiedelte ausschließlich die extrem fruchtbaren Lössböden entlang der Flüsse."
      },
      "curiosityFact": "Bis heute datieren Archäologen steinzeitliche Siedlungen anhand der Ritzmuster auf Tonscherben – fast wie ein Barcode der Urgeschichte!"
    }
  },
  {
    "id": "stoneage_r18",
    "roundNumber": 18,
    "locationKey": "toepferei_brennofen",
    "locationName": "Lehmgrube & Feldbrandöfen",
    "milestoneTitle": "Runde 18: Fernhandel & der Tausch von Silex und Muscheln",
    "imagePath": "/assets/stoneage_station_09.jpg",
    "hotspots": [
      {
        "id": "hs_r18_muschel",
        "x": 35,
        "y": 65,
        "label": "Spondylus-Muschelschmuck",
        "description": "Aus dem warmen Mittelmeer über Alpen und Flüsse nach Norden getauscht.",
        "icon": "🦪"
      },
      {
        "id": "hs_r18_feuerstein",
        "x": 65,
        "y": 55,
        "label": "Schokoladen-Feuerstein",
        "description": "Hochbegehrter Silex aus polnischen Bergwerken; extrem homogen und scharf.",
        "icon": "💎"
      },
      {
        "id": "hs_r18_haendler",
        "x": 80,
        "y": 45,
        "label": "Fremde Händlergruppe",
        "description": "Reisen mit Rindergespannen und Einbäumen entlang der Flusstäler.",
        "icon": "🛶"
      }
    ],
    "situation": {
      "unterstufe": "Fremde Reisende betreten euer Dorf! Sie tragen bunte Kleidung und sprechen eine seltsame Sprache. Doch was sie aus ihren Ledersäcken holen, lässt allen den Atem stocken: Glänzende rosa Muschelarmreife aus dem fernen Meer und honigfarbener Wunder-Feuerstein!",
      "mittelstufe": "Die Steinzeit war keineswegs isoliert: Über Tausende Kilometer erstreckten sich neolithische Fernhandelsnetze. Das begehrteste Prestigeobjekt waren Schmuckstücke aus der Mittelmeer-Stachelauster (Spondylus gaederopus).",
      "oberstufe": "Prähistorische Fernnetzwerke und Gabentausch: Down-the-line-Tauschsysteme transportierten Spondylusmuscheln, Amphibolitbeile und Karpaten-Obsidian quer durch Europa. Handel diente primär politischer Bündnissicherung."
    },
    "choices": [
      {
        "id": "A",
        "label": "Hochwertiges Getreide und getrockneten Käse gegen Spondylus-Muschelarmreife tauschen",
        "description": "Agrarüberschüsse eintauschen gegen den wertvollsten Statusschmuck der Epoche.",
        "statChanges": {
          "adel": 20,
          "goetter": -10,
          "volk": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Der Armreif schimmert wie Perlmutt! Im ganzen Umland besitzt niemand so kostbaren Schmuck.",
          "mittelstufe": "Erfolgreicher Prestigetausch: Der Spondylusschmuck verleiht der Sippenführung enorme Autorität.",
          "oberstufe": "Prestigeökonomie: Exotische Güter festigen den Elitestatus in einer sich differenzierenden Gesellschaft."
        }
      },
      {
        "id": "B",
        "label": "Überschüssige Tongefäße gegen Rohknollen aus feinstem Karpaten-Feuerstein eintauschen",
        "description": "Tauscht handwerkliche Fertigwaren gegen erstklassiges Rohmaterial für neue Waffen und Beile.",
        "statChanges": {
          "priester": 20,
          "volk": 10,
          "adel": 5
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Ein fantastischer Tausch! Der neue Feuerstein lässt sich ohne jeden Bruch bearbeiten.",
          "mittelstufe": "Rohstoffsicherung: Erstklassiger Silex sichert die handwerkliche Überlegenheit des Dorfes.",
          "oberstufe": "Strategische Rohstoffallokation: Hochwertiger Importhornstein substituiert mürben lokalen Geröllsilex."
        }
      },
      {
        "id": "C",
        "label": "Gastfreundschaft gewähren und ein festes Tauschbündnis für die Zukunft schwören",
        "description": "Bewirtet die Fremden, um als sicherer Rastplatz für alle künftigen Karawanen zu gelten.",
        "statChanges": {
          "adel": 15,
          "volk": 15,
          "goetter": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Händler danken gerührt und versprechen, im nächsten Frühjahr wiederzukommen.",
          "mittelstufe": "Friedliche Diplomatie: Euer Dorf wird zum geschätzten Handelsknotenpunkt der Region.",
          "oberstufe": "Institutionalisierung von Handelsrouten: Gastfreundschaftsethik senkt Transaktionskosten prähistorischen Tauschs."
        }
      },
      {
        "id": "D",
        "label": "Ein Schiedsgericht mit Maßsteinen leiten, um faire Tauschkurse für alle festzulegen",
        "description": "Setzt Wissen ein, um Betrug zu verhindern und allen Sippenmitgliedern gerechten Tausch zu sichern.",
        "epCost": 2,
        "statChanges": {
          "adel": 20,
          "volk": 20,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Niemand wird übervorteilt! Jeder Tausch ist fair und beide Seiten ziehen hochzufrieden ab.",
          "mittelstufe": "Gerechte Handelsaufsicht: Präzise Tauschäquivalente stärken das Vertrauen fremder Händler.",
          "oberstufe": "Frühformen standardisierter Wertäquivalente: Normierte Gewichtseinheiten kündigen die Geldwirtschaft an."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Spondylus & Steinzeit-Fernhandel",
      "title": "Europas erste Autobahnen ohne Straßen",
      "explanation": {
        "unterstufe": "Schon vor 7.000 Jahren reiste Ware quer durch Europa! Muscheln aus dem warmen Mittelmeer fand man bei Gräbern an Rhein und Elbe. Man trug sie stolz als Armreife und Halsketten.",
        "mittelstufe": "Es gab keine Straßen und kein Geld. Güter wanderten von Dorf zu Dorf als Geschenke und Tauschware (Gabentausch). Wer Schmuck verschenkte, knüpfte Bündnisse und sicherte den Frieden.",
        "oberstufe": "Der Spondylus-Handel erstreckte sich über mehr als 2.000 Kilometer. Er beweist, dass neolithische Gesellschaften über ein engmaschiges Kommunikations- und Informationsnetzwerk verfügten."
      },
      "curiosityFact": "Spondylus-Muscheln waren damals so wertvoll wie heute Diamanten – zerbrochene Armreife wurden sorgfältig mit Drähten geflickt!"
    }
  },
  {
    "id": "stoneage_r19",
    "roundNumber": 19,
    "locationKey": "megalith_steinkreis",
    "locationName": "Sonnenhügel & Megalithkreis",
    "milestoneTitle": "Runde 19: Der Zug der Kolosse",
    "imagePath": "/assets/stoneage_station_10.jpg",
    "hotspots": [
      {
        "id": "hs_r19_monolith",
        "x": 45,
        "y": 55,
        "label": "Tonnenschwerer Findling",
        "description": "Auf Holzrollen gelegt; Seile aus Lindenbast ziehen den Koloss im Gleichschritt.",
        "icon": "🪨"
      },
      {
        "id": "hs_r19_rollen",
        "x": 25,
        "y": 70,
        "label": "Geölte Baumstamm-Rollen",
        "description": "Hartholzstämme werden vorne wieder eingelegt, wenn der Stein darüberrollt.",
        "icon": "🪵"
      },
      {
        "id": "hs_r19_trommel",
        "x": 75,
        "y": 40,
        "label": "Schamanentrommel zum Takt",
        "description": "Gibt den rhythmischen Ruck-Takt vor: 'Hau-Ruck! Eins, zwei, zieh!'",
        "icon": "🥁"
      }
    ],
    "situation": {
      "unterstufe": "Das größte Bauwerk eurer Geschichte soll entstehen! Zehn Dörfer haben sich versammelt. Vor euch liegt ein gewaltiger Felsblock, so schwer wie vier Elefanten. Gemeinsam wollt ihr ihn auf den Hügel schaffen, um einen ewigen Steinkreis zu errichten. Nur wenn hunderte Menschen im gleichen Takt ziehen, bewegt sich der Koloss!",
      "mittelstufe": "Die Megalithkultur (Großsteinbauten) im Jungneolithikum: Tonnenschwere Findlinge werden kilometerweit über unwegsames Gelände transportiert. Dies verlangt geniale physikalische Hebelgesetze, Rollbahnen und überregionale Friedensbündnisse.",
      "oberstufe": "Megalithische Monumentalökonomie: Der Bau von Dolmen, Ganggräbern und Steinkreisen (wie Stonehenge oder Carnac) erforderte Millionen Arbeitsstunden. Monumentalbauten fungierten als sichtbare Ahnenlegitimation und territoriales Zeichen."
    },
    "choices": [
      {
        "id": "A",
        "label": "Den Transportweg mit feuchtem Lehm und geölten Holzrollen präparieren",
        "description": "Minimiert die Reibung, sodass der Riesenstein fast wie auf Schienen gleitet.",
        "statChanges": {
          "volk": 15,
          "priester": 15,
          "ep": 1
        },
        "skillChanges": {
          "militaerischeStaerke": 1
        },
        "consequenceText": {
          "unterstufe": "Der Koloss setzt sich in Bewegung! Wie von Geisterhand rollt er gleichmäßig vorwärts.",
          "mittelstufe": "Physikalische Meisterleistung: Durch Verringerung der Gleitreibung wird der Kraftaufwand halbiert.",
          "oberstufe": "Tribologische Optimierung: Die Kombination von Rollenlagern mit Schmiermitteln löst das Massenproblem."
        }
      },
      {
        "id": "B",
        "label": "Starke Seile aus geflochtenem Lindenbast und Lederriemen doppelt spannen",
        "description": "Verhindert gefährliches Reißen der Zugseile unter der extremen Zugspannung.",
        "statChanges": {
          "priester": 15,
          "adel": 10,
          "volk": 5
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Seile halten eisern stand! Hunderte Menschen ziehen ohne Unfall im Rhythmus der Trommel.",
          "mittelstufe": "Sicherheit durch Reißfestigkeit: Lindenbastseile beweisen ihre legendäre Belastbarkeit.",
          "oberstufe": "Fasertechnologische Hochleistung: Mehrsträngige Kordeln absorbieren enorme Zugkräfte schadlos."
        }
      },
      {
        "id": "C",
        "label": "Alle zehn Nachbardörfer mit Rindern und Vorräten für die Baustelle versorgen",
        "description": "Gemeinsame Verpflegung sichert gute Laune und Durchhaltevermögen hunderter Helfer.",
        "statChanges": {
          "adel": 20,
          "goetter": 10,
          "volk": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Rauch steigt von den Bratfeuern auf: Gut gestärkt singen und ziehen alle gemeinsam weiter.",
          "mittelstufe": "Logistischer Triumph: Ausreichend Kalorien garantieren die Kooperationsbereitschaft aller Sippen.",
          "oberstufe": "Festessen als Arbeitsmotor (Feasting theory): Monumentalbau wurde durch rituelle Kommensalität angetrieben."
        }
      },
      {
        "id": "D",
        "label": "Hebelgesetze mit mächtigen Hebebäumen nutzen, um den Stein in die Fundamentgrube zu kippen",
        "description": "Setzt Wissen ein, um die Hebelwirkung mit Gegengewichten für das punktgenaue Aufrichten zu nutzen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "adel": 15,
          "volk": 15,
          "priester": 10,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "RUMMS! Der Megalith gleitet in die Grube und richtet sich senkrecht in den Himmel auf! Jubelgeschrei!",
          "mittelstufe": "Statische Perfektion: Über Erdrampe und Hebel fällt der Monolith exakt ins vorbereitete Keilbett.",
          "oberstufe": "Hebelmechanik und Fundamentierung: Das Zusammenspiel von Hangrampen und Stützhebeln meistert die Schwerkraft."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Megalithen – Bauten für die Ewigkeit",
      "title": "Wie bewegte man 30-Tonnen-Steine?",
      "explanation": {
        "unterstufe": "Megalith heißt auf Griechisch 'großer Stein'. Vor 5.000 Jahren bauten die Menschen riesige Steingräber und Steinkreise. Ohne Kräne rollten sie tonnenschwere Felsen auf Baumstämmen Hügel hinauf.",
        "mittelstufe": "In Norddeutschland nennt man Megalithgräber auch 'Hünengräber' – weil die Menschen später glaubten, nur Riesen ('Hünen') hätten solche Kolosse bewegen können. In Wahrheit war es geniale Teamarbeit.",
        "oberstufe": "Megalithbauten erforderten eine feste Organisation und einen enormen Überschuss an Lebensmitteln, um die Bauarbeiter monatelang freizustellen. Sie markieren den Beginn hierarchischerer Gesellschaften."
      },
      "curiosityFact": "Der größte transportierte Megalithstein der Jungsteinzeit wog über 300 Tonnen – der 'Grand Menhir Brisé' in der Bretagne!"
    }
  },
  {
    "id": "stoneage_r20",
    "roundNumber": 20,
    "locationKey": "megalith_steinkreis",
    "locationName": "Sonnenhügel & Megalithkreis",
    "milestoneTitle": "Runde 20: Die Sommersonnenwende & das Vermächtnis",
    "imagePath": "/assets/stoneage_station_10.jpg",
    "hotspots": [
      {
        "id": "hs_r20_sonne",
        "x": 50,
        "y": 35,
        "label": "Aufgehende Mittsommersonne",
        "description": "Ihre Strahlen fallen am längsten Tag des Jahres exakt durch die Portalsteine.",
        "icon": "☀️"
      },
      {
        "id": "hs_r20_kreis",
        "x": 25,
        "y": 60,
        "label": "Der Heilige Steinkreis",
        "description": "Monumentales Zeugnis menschlicher Gemeinschaft, Astronomie und Ewigkeit.",
        "icon": "🏛️"
      },
      {
        "id": "hs_r20_erbe",
        "x": 75,
        "y": 65,
        "label": "Die neue Generation",
        "description": "Kinder blicken in das Licht – die Reise vom Eiszeitjäger zum Ackerbauern ist vollendet.",
        "icon": "🌱"
      }
    ],
    "situation": {
      "unterstufe": "Der längste Tag des Jahres ist angebrochen. Ein feierliches Schweigen liegt über dem Hügel. Als die Sonne am Horizont emporsteigt, fällt ihr erster goldener Strahl exakt durch das steinerne Tor des Steinkreises! Eure Reise vom frierenden Jäger in der Eiszeittundra bis zum sesshaften Baumeister ist vollbracht.",
      "mittelstufe": "Die Vollendung der Neolithischen Revolution: Der Steinkreis ist Kalender, Heiligtum und Denkmal zugleich. Er zeigt präzise an, wann Saat und Ernte beginnen müssen. Die Menschheit hat die Natur nicht mehr nur erduldet, sondern gestaltet.",
      "oberstufe": "Kultureller Epochenabschluss: Die Neolithische Revolution veränderte Demografie, Ökologie, Spiritualität und Technologie für immer. Aus isolierten Jägerhorden wurden vernetzte Agrargesellschaften – das Fundament moderner Zivilisation."
    },
    "choices": [
      {
        "id": "A",
        "label": "Das Sonnenwendfest mit dem feierlichen Schwur ewigen Friedens zwischen den Sippen weihen",
        "description": "Besiegelt das Bündnis aller teilnehmenden Stämme vor dem heiligen Sonnenlicht.",
        "statChanges": {
          "adel": 20,
          "goetter": 20,
          "volk": 15
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Die Hände reichen sich im Kreis! Friede und Wohlstand leuchten über eurem Land.",
          "mittelstufe": "Bündnisschluss für Generationen: Der Steinkreis besiegelt den ewigen Friedenspakt der Region.",
          "oberstufe": "Sakrale Friedensordnung: Der Sonnenkult stiftet überregionale institutionelle Stabilität."
        }
      },
      {
        "id": "B",
        "label": "Das astronomische Kalenderwissen als Gesetz für Saat- und Erntezeiten festschreiben",
        "description": "Stellt sicher, dass das Dorf nie wieder durch verfrühte Saat von Frost überrascht wird.",
        "statChanges": {
          "goetter": 25,
          "priester": 15,
          "adel": 10
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 1
        },
        "consequenceText": {
          "unterstufe": "Von nun an irrt sich niemand mehr: Die Steine sagen euch auf den Tag genau, wann gesät wird!",
          "mittelstufe": "Wissenschaftlicher Triumph: Der Steinkreis fungiert als unverrückbarer astronomischer Kalender.",
          "oberstufe": "Archaeoastronomische Kalendrierung: Die exakte Fixierung von Solstitien garantiert agrarische Planungssicherheit."
        }
      },
      {
        "id": "C",
        "label": "Ein monumentales Gemeinschaftsgrab (Dolmen) für die Ahnen und Erbauer errichten",
        "description": "Verankert die Erinnerung an die Pioniere, die das Land urbar machten, für immer im Stein.",
        "statChanges": {
          "adel": 15,
          "volk": 20,
          "priester": 10
        },
        "skillChanges": {
          "politischeGeschicklichkeit": 1
        },
        "consequenceText": {
          "unterstufe": "Ein ewiges Denkmal: Noch nach Jahrtausenden werden Nachfahren die Steine ehrfürchtig berühren.",
          "mittelstufe": "Ahnenverehrung und Identität: Der Dolmen schlägt die Brücke zwischen Vergangenheit und Zukunft.",
          "oberstufe": "Kollektives Gedächtnis im Megalithikum: Das Grabmonument legitimiert Territorialansprüche der Nachkommen."
        }
      },
      {
        "id": "D",
        "label": "Die Botschaft der Sesshaftwerdung in gebrannte Tontafeln und Felsbilder meißeln",
        "description": "Setzt alles gesammelte Wissen ein, um die Errungenschaften der Menschheit der Ewigkeit zu hinterlassen.",
        "epCost": 2,
        "statChanges": {
          "goetter": 25,
          "adel": 20,
          "volk": 20,
          "priester": 15,
          "ep": 1
        },
        "skillChanges": {
          "goettlicheAuserwaehltheit": 2
        },
        "consequenceText": {
          "unterstufe": "Die Legende ist vollendet! Du hast deine Sippe aus der Eiszeit in ein goldenes Zeitalter geführt!",
          "mittelstufe": "Epochemachender Erfolg: Die Neolithische Revolution ist abgeschlossen – ein Meilenstein der Menschheitsgeschichte.",
          "oberstufe": "Kulturelle Apotheose: Du hast den Wandel vom Jäger und Sammler zum gestaltenden Architekten der Zivilisation vollendet."
        }
      }
    ],
    "lexiconEntry": {
      "term": "Die Neolithische Revolution",
      "title": "Der größte Wandel aller Zeiten",
      "explanation": {
        "unterstufe": "Vom Jäger zum Bauern: In der Steinzeit veränderte sich alles. Menschen bauten feste Häuser, pflanzten Weizen, hielten Kühe und töpferten Geschirr. So entstand das Leben, wie wir es heute kennen.",
        "mittelstufe": "Der Begriff 'Neolithische Revolution' stammt vom Archäologen Gordon Childe. Er beschreibt den Wandel von aneignender Wirtschaft (Jagen, Sammeln) zu produzierender Wirtschaft (Ackerbau, Viehzucht).",
        "oberstufe": "Dieser Wandel legte das Fundament für die gesamte Menschheitsgeschichte: Städte, Gesetze, Schrift, Wissenschaft, aber auch Seuchen, Kriege und soziale Ungleichheit nahmen hier ihren Anfang."
      },
      "curiosityFact": "Stonehenge in England ist so präzise gebaut, dass am 21. Juni die Sonne genau über dem 'Heel Stone' aufgeht und den Mittelpunkt des Kreises erleuchtet!"
    }
  }
];

export const STONEAGE_MASTER_GAME: GameDefinition = {
  id: 'game_stoneage_official',
  title: 'Die Reise in die Steinzeit',
  subtitle: 'Vom Eiszeit-Jäger zum ersten Ackerbauern (Neolithische Revolution)',
  era: 'Steinzeit & Neolithische Revolution',
  archetype: 'conquest_campaign',
  artStyle: 'pixel_art',
  eraThemeId: 'stoneage_earth',
  gradeLevel: 'unterstufe',
  targetGrades: 'Klassenstufe 5/6 (Regelschule & Gymnasium)',
  coreTopics: [
    'Altsteinzeit & Mammutjagd',
    'Höhlenmalerei & Schamanismus (Lascaux)',
    'Feuerstein-Werkzeuge & Silex-Spalttechnik',
    'Sammlerinnen & Heilkräuterkunde',
    'Klimawandel & Ende der Eiszeit',
    'Die Erfindung von Pfeil und Bogen',
    'Domestikation des Wolfes (Erster Hund)',
    'Sesshaftwerdung & Langhausbau (Bandkeramik)',
    'Ackerbau: Emmer, Einkorn & Grabstock',
    'Goldene Ernte, Mahlstein & Broterfindung',
    'Viehzucht: Auerochse, Schaf & Ziege',
    'Erfindung von Käse & Milchverarbeitung',
    'Bandkeramik-Töpferei & Feldbrandöfen',
    'Fernhandel: Spondylus-Muscheln & Silex',
    'Megalithkultur: Menhire, Dolmen & Steinkreise',
    'Die Neolithische Revolution als Meilenstein'
  ],
  description: 'Erlebe 20 faszinierende, multiperspektivische Runden von der eiszeitlichen Mammuttundra bis zum monumentalen Sonnenwend-Steinkreis. Balanciere Nahrung, Werkzeuge, Sippenzusammenhalt und Siedlungsbau.',
  pillars: [
    { key: 'goetter', label: 'Nahrung & Vorrat', icon: '🍖', description: 'Jagdbeute, Getreideernte, Vorratshaltung und Schutz vor Hungersnöten' },
    { key: 'priester', label: 'Werkzeuge & Wissen', icon: '🛠️', description: 'Feuersteinklingen, Bogenbau, Töpferkunst und technologischer Fortschritt' },
    { key: 'adel', label: 'Sippenzusammenhalt', icon: '❤️', description: 'Harmonie, Fürsorge für Schwache, Rat der Ältesten und Sippenfrieden' },
    { key: 'volk', label: 'Siedlung & Schutz', icon: '🏠', description: 'Langhausbau, Weidenzäune, Herdenhüten und Sicherheit vor Raubtieren' },
  ],
  specialResourceName: 'Wissenspunkte',
  specialResourceEmoji: '🧠',
  skillNames: {
    skill1: 'Jagdgeschick & Naturkunde',
    skill2: 'Gemeinschaftsorganisation',
    skill3: 'Werkzeug- & Handwerkskunst',
  },
  heroImage: '/assets/stoneage_hero.jpg',
  rounds: STONEAGE_ROUNDS,
  shareCode: 'STN01',
};
