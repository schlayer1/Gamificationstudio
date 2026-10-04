import { geminiRotationService } from './geminiRotation';
import { GameDefinition, PillarConfig, RoundStory, GradeLevel } from '../types/game';
import { detectEraTheme } from '../utils/themeManager';
import { PREDEFINED_HISTORY_ASSETS } from '../data/historyAssetPool';

export interface GenerationRequest {
  title: string;
  era: string;
  archetype?: import('../types/game').GameMechanicArchetype;
  artStyle?: import('../types/game').ArtStyleType;
  gradeLevel?: GradeLevel;
  targetGrades: string;
  roundCount?: number; // 5 to 26 rounds
  reflectionInterval?: number; // every 3, 4, 5 rounds
  coreTopics: string[];
  sourceMaterialText?: string; // Manually pasted worksheet / textbook text
  imageAttachment?: { mimeType: string; base64: string }; // Scanned textbook photo
  pillars: [PillarConfig, PillarConfig, PillarConfig, PillarConfig];
  specialResourceName: string;
  specialResourceEmoji: string;
  skills: { skill1: string; skill2: string; skill3: string };
  onProgress?: (status: string) => void;
}

export class GameGeneratorService {
  /**
   * Generates a complete educational game tailored specifically to ONE selected grade level,
   * avoiding redundant token usage for non-selected grades and supporting full 20-round expeditions.
   */
  async generateFullGame(req: GenerationRequest): Promise<GameDefinition> {
    const totalRounds = req.roundCount || 20;
    const archetype = req.archetype || 'reigns_balance';
    const reflectionInterval = req.reflectionInterval || 5;
    const artStyle = req.artStyle || 'pixel_art';
    const selectedGradeLevel: GradeLevel = req.gradeLevel || 'mittelstufe';

    const gradeConfig: Record<GradeLevel, { name: string; classes: string; instructions: string }> = {
      unterstufe: {
        name: 'Unterstufe',
        classes: '5.–6. Klasse',
        instructions: 'Sprache bildhaft, lebendig und emotional greifbar. Kurze, leicht verständliche Sätze. Keine verschachtelten Fremdwörter ohne direkte Erklärung. Klare, greifbare Dilemmata (z.B. Mut, Freundschaft, Vorräte teilen, Gefahren trotzen).',
      },
      mittelstufe: {
        name: 'Mittelstufe',
        classes: '7.–9. Klasse',
        instructions: 'Ausgewogene historische Fachsprache (z.B. Patrizier, Privilegien, Reformation, Handelsmonopol). Multiperspektivische Interessenkonflikte, gesellschaftliche Spannungen und ethische Grauzonen. Dilemmata über Verantwortung und Weitsicht.',
      },
      oberstufe: {
        name: 'Oberstufe',
        classes: 'ab 10. Klasse',
        instructions: 'Anspruchsvolles akademisches Sprachniveau. Staatsphilosophische, soziologische und geopolitische Kausalitäten. Quellennah, tiefe historische Dilemmata, ethische Spannungsfelder und hoher Abstraktionsgrad.',
      },
    };

    const currentGrade = gradeConfig[selectedGradeLevel];

    const artStyleDescriptions: Record<string, string> = {
      pixel_art: '16-bit pixel art retro video game style illustration, Oregon Trail aesthetic, atmospheric lighting, detailed historical pixel art',
      photorealistic: 'Photorealistic historical documentary cinematic film still, ultra realistic textures, natural lighting, highly detailed',
      comic_bd: 'Franco-Belgian comic book illustration, ligne claire style, clear ink line art with rich vibrant colors, graphic novel aesthetic',
      oil_painting: 'Classic 19th century historical oil painting, dramatic chiaroscuro lighting, rich brushwork, museum masterpiece aesthetic',
      papyrus_ink: 'Ancient historical papyrus manuscript illustration, delicate ink outlines, warm parchment and earth tone pigments',
    };

    const selectedStylePrompt = artStyleDescriptions[artStyle] || artStyleDescriptions.pixel_art;

    const systemInstruction = `
Du bist ein professioneller Didaktik-Experte für Geschichtsunterricht und Senior Game Designer.
Erstelle ein didaktisch anspruchsvolles Geschichts-Abenteuerspiel im Schulunterricht-Standard.

SPIELMECHANIK-ARCHETYP: ${archetype}
BILD-GRAFIKSTIL: ${artStyle} (${selectedStylePrompt})
GESAMTE RUNDENANZAHL: ${totalRounds} Stationen.
REFLEXIONSPHASE: Alle ${reflectionInterval} Runden eine Reflexions- und Strategiepause für den Geschichtshefter.

ZIELGRUPPE & DIDAKTISCHES SPRACHNIVEAU (EXKLUSIV):
- Zielgruppe: ${currentGrade.name} (${currentGrade.classes})
- Didaktische Sprachanweisung: ${currentGrade.instructions}
- STRENGSTE VORGABE: Generiere alle Texte (Situation, Optionen, Konsequenzen, Begriffserklärungen) AUSSCHLIESSLICH und EXAKT auf dem Niveau für ${currentGrade.classes}. Erstelle KEINE Texte für andere Jahrgangsstufen!

${archetype === 'mythology_duel' ? '- Integriere Quiz-Prüfungen (❓) mit Tipp-Button (💡), Erklärung und Belohnung (🏆) sowie mythologische Artefakte (🗡️, 🔮).' : ''}
${archetype === 'conquest_campaign' ? '- Integriere Konsequenzen-Bäume mit unmittelbaren und langfristigen Auswirkungen auf Heeresdisziplin und Eroberung.' : ''}
${archetype === 'survival_settlement' ? '- Fokussiere auf existenzielle Entscheidungen: Nahrung, Werkzeuge, Sesshaftwerdung und handwerkliche Fähigkeiten.' : ''}
${archetype === 'city_scavenger_hunt' ? '- Baue Stationen als Schnitzeljagd mit architektonischen Hinweisen und Monumenten auf.' : ''}

${req.sourceMaterialText ? `VORGEGEBENES QUELLENMATERIAL / LEHRBUCH-TEXT (Zwingend berücksichtigen):\n"""\n${req.sourceMaterialText}\n"""\n` : ''}

Regeln & didaktische Vorgaben:
1. 4 Mächtesäulen:
   - Säule 1: ${req.pillars[0].label} (${req.pillars[0].description})
   - Säule 2: ${req.pillars[1].label} (${req.pillars[1].description})
   - Säule 3: ${req.pillars[2].label} (${req.pillars[2].description})
   - Säule 4: ${req.pillars[3].label} (${req.pillars[3].description})
2. Spezialressource: ${req.specialResourceName} (${req.specialResourceEmoji}) - Start: 2 Punkte, Option D kostet 3 Punkte.
3. Fähigkeiten: ${req.skills.skill1}, ${req.skills.skill2}, ${req.skills.skill3}.
4. Verbindliche Kernthemen aus dem Lehrplan: ${req.coreTopics.join(', ')}.
5. Jede Runde enthält 4 Optionen (A, B, C und die exklusive Meister-Option D, die 3 Spezialressourcen kostet).
6. Jede Runde enthält ein didaktisches Lexikon ('lexiconEntry') mit Begriff, altersgerechter Erklärung für ${currentGrade.classes} und 'curiosityFact' ("💡 Hast du gewusst?").
7. Jede Runde enthält genau 3 bildpassende Entdecker-Hotspots ('hotspots') mit Prozent-Koordinaten (x: 0-100, y: 0-100), die reale visuelle Details des Bildes erklären (z.B. Architektur, Werkzeuge, Kleidung, Schriftzeichen, Göttersymbole).
8. Antwort MUSS zwingend als valides JSON formatiert sein.
`;

    // Helper to generate a slice of rounds (e.g. 1 to 10 or 11 to 20)
    const generateRoundBatch = async (startRound: number, endRound: number): Promise<any[]> => {
      const batchCount = endRound - startRound + 1;
      const prompt = `
Erstelle genau ${batchCount} didaktisch hochwertige Stationen (Runde ${startRound} bis ${endRound}) für das Spiel:
Titel: "${req.title}"
Epoche / Setting: "${req.era}"

ZIELGRUPPE: ${currentGrade.name} (${currentGrade.classes})!
Fokussiere Sprache, Satzkomplexität und Dilemmata ausschließlich auf diese Klassenstufe.

WICHTIGSTE FORMATIERUNGS-REGELN:
1. Halte Situationsbeschreibungen prägnant und fesselnd (1-2 kurze Sätze).
2. Keine Formatierungsfehler, keine unmaskierten Anführungszeichen innerhalb von Texten.
3. Antworte AUSSCHLIESSLICH mit reinem, validem JSON in folgendem Schema:
{
  "rounds": [
    {
      "roundNumber": ${startRound},
      "locationKey": "station_${startRound}",
      "locationName": "Name der Station",
      "milestoneTitle": "Station ${startRound}: Titel",
      "imagePrompt": "${selectedStylePrompt} of [historische Szene], atmospheric lighting, educational game visual, 16:9 aspect ratio",
      "hotspots": [
        { "id": "hs_1", "x": 30, "y": 65, "label": "Detail 1", "description": "Historische Erklärung...", "icon": "🔍" },
        { "id": "hs_2", "x": 60, "y": 45, "label": "Detail 2", "description": "Historische Erklärung...", "icon": "🏛️" },
        { "id": "hs_3", "x": 50, "y": 20, "label": "Detail 3", "description": "Historische Erklärung...", "icon": "✨" }
      ],
      "situation": "Prägnanter historischer Situations-Text für ${currentGrade.classes}...",
      "choices": [
        {
          "id": "A",
          "label": "Kurztitel Option A",
          "description": "Erklärung der Entscheidung",
          "statChanges": { "${req.pillars[0].key}": 15, "${req.pillars[1].key}": -10, "ep": 1 },
          "consequenceText": "Altersgerechte Konsequenz der Option A..."
        },
        {
          "id": "B",
          "label": "Kurztitel Option B",
          "description": "Erklärung der Entscheidung",
          "statChanges": { "${req.pillars[2].key}": 15, "${req.pillars[3].key}": -10, "ep": 1 },
          "consequenceText": "Altersgerechte Konsequenz der Option B..."
        },
        {
          "id": "C",
          "label": "Kurztitel Option C",
          "description": "Erklärung der Entscheidung",
          "statChanges": { "${req.pillars[3].key}": 15, "${req.pillars[0].key}": -10, "ep": 1 },
          "consequenceText": "Altersgerechte Konsequenz der Option C..."
        },
        {
          "id": "D",
          "label": "Meisterlösung D (🔒)",
          "description": "Erklärung der Meisteroption",
          "epCost": 3,
          "statChanges": { "${req.pillars[0].key}": 20, "${req.pillars[1].key}": 15, "${req.pillars[2].key}": 15, "${req.pillars[3].key}": 15, "ep": -1 },
          "consequenceText": "Besonders wirkungsvolle historische Konsequenz..."
        }
      ],
      "lexiconEntry": {
        "title": "Lexikon-Begriff",
        "term": "Historischer Fachbegriff",
        "explanation": "Altersgerechte Erklärung exakt für ${currentGrade.classes}...",
        "curiosityFact": "Erstaunlicher Fakt für Schüler..."
      }
    }
  ]
}
`;

      let promptPayload: any = prompt;
      if (req.imageAttachment && req.imageAttachment.base64 && startRound === 1) {
        promptPayload = [
          { text: prompt },
          {
            inlineData: {
              mimeType: req.imageAttachment.mimeType,
              data: req.imageAttachment.base64,
            },
          },
        ];
      }

      const rawJson = await geminiRotationService.generateContentWithRotation(
        promptPayload,
        systemInstruction,
        true
      );

      // Clean markdown code fences if present (```json ... ```)
      let cleanJson = rawJson.trim();
      cleanJson = cleanJson.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '');

      const firstBrace = cleanJson.indexOf('{');
      const lastBrace = cleanJson.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        cleanJson = cleanJson.substring(firstBrace, lastBrace + 1);
      }

      // Remove trailing commas before } or ]
      cleanJson = cleanJson.replace(/,\s*([\]}])/g, '$1');

      const parsed = JSON.parse(cleanJson);
      return parsed.rounds || [];
    };

    let allRawRounds: any[] = [];

    try {
      if (totalRounds <= 10) {
        req.onProgress?.(`Generiere Stationen 1 bis ${totalRounds} für ${currentGrade.name} (${currentGrade.classes})...`);
        allRawRounds = await generateRoundBatch(1, totalRounds);
      } else {
        // Safe 2-batch generation to guarantee all 20 rounds without hitting token limits
        const firstBatchEnd = Math.min(10, totalRounds);
        req.onProgress?.(`Generiere Teil 1: Stationen 1 bis ${firstBatchEnd} für ${currentGrade.name}...`);
        const batch1 = await generateRoundBatch(1, firstBatchEnd);

        req.onProgress?.(`Generiere Teil 2: Stationen ${firstBatchEnd + 1} bis ${totalRounds} für ${currentGrade.name}...`);
        const batch2 = await generateRoundBatch(firstBatchEnd + 1, totalRounds);

        allRawRounds = [...batch1, ...batch2];
      }

      if (!Array.isArray(allRawRounds) || allRawRounds.length === 0) {
        throw new Error("Keine Stationen im KI-Ergebnis gefunden.");
      }
    } catch (e: any) {
      console.error("JSON parsing error during game generation:", e);
      throw new Error(
        `Fehler beim Verarbeiten der Spieldaten (${e.message || "Unvollständige KI-Antwort"}). Bitte klicke nochmals auf "Jetzt generieren" – dank Schlüssel-Rotation startet der nächste Versuch direkt mit einer frischen Instanz.`
      );
    }

    // Normalize each round to ensure the engine always receives valid structures
    const themeId = detectEraTheme(req.era + ' ' + req.title, req.archetype).id;

    const parsedRounds: RoundStory[] = allRawRounds.map((round: any, idx: number) => {
      // 1. Situation: Extract string or object and normalize across all keys
      const situationText = typeof round.situation === 'string'
        ? round.situation
        : (round.situation?.[selectedGradeLevel] || round.situation?.mittelstufe || round.situation?.unterstufe || '');

      const situationObj = {
        unterstufe: situationText,
        mittelstufe: situationText,
        oberstufe: situationText,
        ...(typeof round.situation === 'object' ? round.situation : {}),
      };
      situationObj[selectedGradeLevel] = situationText;

      // 2. Choices: Normalize consequenceText
      const choices = (round.choices || []).map((c: any) => {
        const consText = typeof c.consequenceText === 'string'
          ? c.consequenceText
          : (c.consequenceText?.[selectedGradeLevel] || c.consequenceText?.mittelstufe || c.consequenceText?.unterstufe || '');

        return {
          ...c,
          consequenceText: {
            unterstufe: consText,
            mittelstufe: consText,
            oberstufe: consText,
            ...(typeof c.consequenceText === 'object' ? c.consequenceText : {}),
          },
        };
      });

      // 3. Lexicon Entry: Normalize explanation
      const explText = typeof round.lexiconEntry?.explanation === 'string'
        ? round.lexiconEntry.explanation
        : (round.lexiconEntry?.explanation?.[selectedGradeLevel] || round.lexiconEntry?.explanation?.mittelstufe || round.lexiconEntry?.explanation?.unterstufe || '');

      const lexiconEntry = {
        title: round.lexiconEntry?.title || round.locationName || 'Historisches Wissen',
        term: round.lexiconEntry?.term || round.locationName || 'Begriff',
        explanation: {
          unterstufe: explText,
          mittelstufe: explText,
          oberstufe: explText,
          ...(typeof round.lexiconEntry?.explanation === 'object' ? round.lexiconEntry.explanation : {}),
        },
        curiosityFact: round.lexiconEntry?.curiosityFact || 'Spannende historische Tatsache.',
      };
      lexiconEntry.explanation[selectedGradeLevel] = explText;

      // 4. Auto-assign matching historical artwork from curated asset pool
      const locText = `${round.locationName || ''} ${round.milestoneTitle || ''}`.toLowerCase();
      const eraFull = `${req.era} ${req.title}`.toLowerCase();

      // Filter assets matching the era
      const eraAssets = PREDEFINED_HISTORY_ASSETS.filter((a) => {
        const t = a.topic.toLowerCase();
        const tags = a.tags.join(' ').toLowerCase();

        if (eraFull.includes('weimar') || eraFull.includes('goldene zwanziger') || eraFull.includes('bauhaus') || eraFull.includes('1920')) {
          return t.includes('weimar') || tags.includes('weimar');
        }
        if (eraFull.includes('industrie') || eraFull.includes('dampf') || eraFull.includes('arbeiter') || eraFull.includes('schlot') || eraFull.includes('fabrik')) {
          return t.includes('industrie') || tags.includes('industrie');
        }
        if (eraFull.includes('revolution') || eraFull.includes('napoleon') || eraFull.includes('bastille') || eraFull.includes('menschenrechte')) {
          return t.includes('revolution') || tags.includes('revolution');
        }
        if (eraFull.includes('frank') || eraFull.includes('karl der große') || eraFull.includes('chlodwig') || eraFull.includes('aachen') || eraFull.includes('pfalz')) {
          return t.includes('franken') || tags.includes('franken');
        }
        if (eraFull.includes('rom') || eraFull.includes('caesar') || eraFull.includes('latein') || eraFull.includes('limes')) {
          return t.includes('rom') || tags.includes('rom');
        }
        if (eraFull.includes('luther') || eraFull.includes('reformation') || eraFull.includes('thesen')) {
          return t.includes('reformation') || tags.includes('luther');
        }
        if (eraFull.includes('steinzeit') || eraFull.includes('urzeit') || eraFull.includes('neolith')) {
          return t.includes('steinzeit') || tags.includes('steinzeit');
        }
        if (eraFull.includes('griechen') || eraFull.includes('alexander') || eraFull.includes('athen') || eraFull.includes('polis')) {
          return t.includes('griechen') || tags.includes('alexander') || tags.includes('athen');
        }
        if (eraFull.includes('mittelalter') || eraFull.includes('ritter') || eraFull.includes('burg')) {
          return t.includes('mittelalter') || tags.includes('ritter');
        }
        return t.includes('ägypten') || tags.includes('ägypten');
      });

      // Distinct station location assets (excluding the hero banner asset)
      const locationAssets = eraAssets.filter((a) => !a.tags.includes('Hero'));
      const fallbackStationAssets = locationAssets.length > 0 ? locationAssets : eraAssets;

      // Try specific location keyword match first
      const specificMatch = fallbackStationAssets.find((a) => {
        const titleL = a.title.toLowerCase();
        return a.tags.some((tag) => locText.includes(tag.toLowerCase())) || locText.includes(titleL);
      });

      let matchedImg = '';
      if (specificMatch) {
        matchedImg = specificMatch.imageUrl;
      } else if (fallbackStationAssets.length > 0) {
        // Didactic pairing: across 20 rounds, the location changes every 2 rounds (0-1: Loc 1, 2-3: Loc 2, etc.)
        const locIndex = Math.floor(idx / 2) % fallbackStationAssets.length;
        matchedImg = fallbackStationAssets[locIndex].imageUrl;
      } else {
        // Fallback to detected era theme banner
        const themeConfig = detectEraTheme(req.era + ' ' + req.title, req.archetype);
        matchedImg = themeConfig.defaultBannerUrl || '/assets/nile_banner.jpg';
      }

      return {
        ...round,
        roundNumber: idx + 1,
        situation: situationObj,
        choices,
        lexiconEntry,
        imagePath: round.imagePath || matchedImg,
      };
    });

    // Detect era Hero Banner asset if available in the pool
    const eraHeroAsset = PREDEFINED_HISTORY_ASSETS.find((a) => {
      const eraFull = `${req.era} ${req.title}`.toLowerCase();
      const isHero = a.tags.includes('Hero');
      if (!isHero) return false;
      const t = a.topic.toLowerCase();
      if (eraFull.includes('weimar') || eraFull.includes('goldene zwanziger') || eraFull.includes('bauhaus') || eraFull.includes('1920')) {
        return t.includes('weimar');
      }
      if (eraFull.includes('industrie') || eraFull.includes('dampf') || eraFull.includes('arbeiter') || eraFull.includes('schlot') || eraFull.includes('fabrik')) {
        return t.includes('industrie');
      }
      if (eraFull.includes('revolution') || eraFull.includes('napoleon') || eraFull.includes('bastille') || eraFull.includes('menschenrechte')) {
        return t.includes('revolution');
      }
      if (eraFull.includes('frank') || eraFull.includes('karl der große') || eraFull.includes('chlodwig') || eraFull.includes('aachen') || eraFull.includes('pfalz')) {
        return t.includes('franken');
      }
      if (eraFull.includes('rom')) return t.includes('rom');
      if (eraFull.includes('luther') || eraFull.includes('reformation')) return t.includes('reformation');
      if (eraFull.includes('steinzeit') || eraFull.includes('neolith')) return t.includes('steinzeit');
      if (eraFull.includes('alexander') || eraFull.includes('griechen') || eraFull.includes('athen')) return t.includes('griechen');
      if (eraFull.includes('mittelalter')) return t.includes('mittelalter');
      return t.includes('ägypten');
    });

    const heroPrompt = eraHeroAsset?.suggestedPrompt || `${selectedStylePrompt} of panoramic grand historical landscape and iconic landmarks of ${req.era} representing "${req.title}", majestic composition, cinematic lighting, 16:9 banner aspect ratio`;
    const defaultHeroImg = eraHeroAsset?.imageUrl || detectEraTheme(req.era + ' ' + req.title, req.archetype).defaultBannerUrl;

    const gameDefinition: GameDefinition = {
      id: `game_${Date.now()}`,
      title: req.title,
      subtitle: req.era,
      era: req.era,
      description: `Interaktives Geschichtsspiel zur Epoche ${req.era} (${currentGrade.name}, ${currentGrade.classes}).`,
      gradeLevel: selectedGradeLevel,
      targetGrades: req.targetGrades,
      eraThemeId: themeId,
      heroPrompt,
      heroImage: defaultHeroImg,
      coreTopics: req.coreTopics,
      pillars: req.pillars,
      specialResourceName: req.specialResourceName,
      specialResourceEmoji: req.specialResourceEmoji,
      skillNames: req.skills,
      rounds: parsedRounds,
    };

    return gameDefinition;
  }
}

export const gameGeneratorService = new GameGeneratorService();
