import { geminiRotationService } from './geminiRotation';
import { GameDefinition, PillarConfig, RoundStory, GradeLevel, StationHotspot } from '../types/game';
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
  onProgress?: (status: string, percent?: number) => void;
}

export interface CustomSettingProposal {
  title: string;
  era: string;
  archetype: import('../types/game').GameMechanicArchetype;
  defaultGradeLevel: GradeLevel;
  defaultTargetGrades: string;
  defaultTopics: string[];
  suggestedPillars: [PillarConfig, PillarConfig, PillarConfig, PillarConfig];
  specialResource: { name: string; emoji: string };
  skills: { skill1: string; skill2: string; skill3: string };
  heroImagePrompt: string;
}

/**
 * Robust JSON Parser & Auto-Repair:
 * Handles markdown fences, trailing commas, single quotes, unescaped linebreaks,
 * and recovers valid slices from truncated AI stream responses.
 */
function parseJsonSafely(raw: string, defaultKey?: string): any {
  if (!raw || !raw.trim()) return null;

  let clean = raw.trim();
  // Strip markdown code fences
  clean = clean.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '');

  const firstBrace = clean.indexOf('{');
  if (firstBrace === -1) return null;
  clean = clean.substring(firstBrace);

  // 1. Direct parse attempt
  try {
    return JSON.parse(clean);
  } catch {}

  // 2. Remove trailing commas before } or ]
  let sanitized = clean.replace(/,\s*([\]}])/g, '$1');
  try {
    return JSON.parse(sanitized);
  } catch {}

  // 3. If array inside object was cut off (e.g. {"rounds": [{...}, {...}, {"trunc...):
  // Recover all completely closed round items up to the last "}"
  const checkKeys = defaultKey ? [defaultKey, 'rounds', 'coreQuestions', 'glossaryTerms'] : ['rounds', 'coreQuestions', 'glossaryTerms'];
  for (const key of checkKeys) {
    const keyIdx = sanitized.indexOf(`"${key}"`);
    if (keyIdx !== -1) {
      const arrStart = sanitized.indexOf('[', keyIdx);
      if (arrStart !== -1) {
        let lastGoodEnd = -1;
        let pos = arrStart;
        while ((pos = sanitized.indexOf('}', pos + 1)) !== -1) {
          const candidate = sanitized.substring(0, pos + 1).replace(/,\s*$/, '') + ']}';
          try {
            const testObj = JSON.parse(candidate);
            if (testObj[key] && Array.isArray(testObj[key]) && testObj[key].length > 0) {
              lastGoodEnd = pos;
            }
          } catch {}
        }
        if (lastGoodEnd !== -1) {
          const recoveredCandidate = sanitized.substring(0, lastGoodEnd + 1).replace(/,\s*$/, '') + ']}';
          try {
            return JSON.parse(recoveredCandidate);
          } catch {}
        }
      }
    }
  }

  // 4. Fallback: Close unclosed quotes and open curly braces
  let attempt = sanitized;
  const quoteCount = (attempt.match(/"/g) || []).length;
  if (quoteCount % 2 !== 0) {
    attempt += '"';
  }
  let openBraces = 0;
  let inString = false;
  for (let i = 0; i < attempt.length; i++) {
    if (attempt[i] === '"' && attempt[i - 1] !== '\\') inString = !inString;
    if (!inString) {
      if (attempt[i] === '{' || attempt[i] === '[') openBraces++;
      if (attempt[i] === '}' || attempt[i] === ']') openBraces--;
    }
  }
  while (openBraces > 0) {
    attempt += '}';
    openBraces--;
  }

  try {
    return JSON.parse(attempt);
  } catch (err: any) {
    console.error('All JSON repair attempts failed. Raw snippet:', clean.substring(0, 300));
    throw err;
  }
}

export class GameGeneratorService {
  /**
   * Generates a complete tailored game configuration proposal from a completely free-form
   * teacher setting description (e.g. "Seidenstraße im 13. Jahrhundert", "Antikes Japan", "Mauerfall 1989").
   */
  async analyzeAndDesignCustomSetting(
    freeformSetting: string,
    optionalWorksheetText?: string
  ): Promise<CustomSettingProposal> {
    const prompt = `
Du bist ein erfahrener Fachberater für Geschichtsdidaktik und Lead Game Designer.
Eine Lehrkraft möchte ein didaktisches Geschichtsspiel erstellen, jedoch OHNE vorgegebene Vorlage.
Hier ist das freie Thema / Setting der Lehrkraft:
"""
${freeformSetting}
"""

${optionalWorksheetText ? `Zusätzlicher Quellentext / Lehrbuchtext:\n"""\n${optionalWorksheetText}\n"""\n` : ''}

Erstelle daraus ein pädagogisch stimmiges und spielmechanisch ausgewogenes Konzept:
1. "title": Ein packender, bildhafter Spieltitel (z. B. "Händler auf der Seidenstraße – Karawanen im Reich der Mongolen").
2. "era": Präzise Epochenbezeichnung mit Jahrhundert / Zeitspanne (z. B. "13. Jahrhundert (Pax Mongolica)").
3. "archetype": Wähle den am besten passenden Spielmechanik-Archetyp aus:
   - "reigns_balance" (Politisches 4-Säulen Gleichgewicht & Staatslenkung)
   - "conquest_campaign" (Militärischer Feldzug, Disziplin & Eroberung)
   - "survival_settlement" (Überleben, Sesshaftwerdung, Handwerk, Landwirtschaft)
   - "mythology_duel" (Mythen, Götter, Prüfungen & Wissensduelle)
   - "city_scavenger_hunt" (Architektur, Entdeckungen & urbane Erkundung)
4. "defaultGradeLevel": Passendste Klassenstufe ("unterstufe" für Kl. 5/6, "mittelstufe" für Kl. 7-9, "oberstufe" ab Kl. 10).
5. "defaultTargetGrades": Ausgeschriebene Angabe (z. B. "Mittelstufe (7.–9. Klasse)").
6. "defaultTopics": Genau 5 didaktische Kernthemen aus dem Geschichtsunterricht als Array von Strings.
7. "suggestedPillars": Genau 4 spezifische Mächte- oder Ressourcensäulen mit:
   - "key": Eindeutiger englischer Key (z.B. "patricians", "supplies", "morale", "legions")
   - "label": Titel mit passendem Emoji (z.B. "🏛️ Senat", "🌾 Vorräte", "⚔️ Legionen")
   - "icon": Einzelnes Emoji
   - "description": 1 kurzer didaktischer Satz zur Bedeutung im Spiel
8. "specialResource": Name und Emoji für die besondere Ressource (z.B. { "name": "Golddinare", "emoji": "🪙" } oder { "name": "Seide & Jade", "emoji": "🧵" }).
9. "skills": 3 historische Kompetenzen (z.B. { "skill1": "Verhandlungsgeschick", "skill2": "Topografischer Weitblick", "skill3": "Kulturelle Diplomatie" }).
10. "heroImagePrompt": Ein detailreicher englischer Bild-Prompt im 16-Bit Pixel-Art SNES-Retro-Stil für das epische Titel-Banner (16:9).

Antworte STRENG als valides JSON nach diesem Schema:
{
  "title": "...",
  "era": "...",
  "archetype": "reigns_balance",
  "defaultGradeLevel": "mittelstufe",
  "defaultTargetGrades": "Mittelstufe (7.–9. Klasse)",
  "defaultTopics": ["Thema 1", "Thema 2", "Thema 3", "Thema 4", "Thema 5"],
  "suggestedPillars": [
    { "key": "p1", "label": "... Emoji", "icon": "Emoji", "description": "..." },
    { "key": "p2", "label": "... Emoji", "icon": "Emoji", "description": "..." },
    { "key": "p3", "label": "... Emoji", "icon": "Emoji", "description": "..." },
    { "key": "p4", "label": "... Emoji", "icon": "Emoji", "description": "..." }
  ],
  "specialResource": { "name": "...", "emoji": "..." },
  "skills": { "skill1": "...", "skill2": "...", "skill3": "..." },
  "heroImagePrompt": "16-bit pixel art style of ..., atmospheric retro SNES RPG aesthetic, 16:9 aspect ratio"
}
`;

    const rawJson = await geminiRotationService.generateContentWithRotation(
      prompt,
      'Du bist ein Senior Game Designer und Geschichtsdidaktiker. Antworte AUSSCHLIESSLICH mit reinem JSON.',
      true
    );

    const parsed = parseJsonSafely(rawJson);
    if (!parsed) {
      throw new Error('Die KI konnte für dieses Setting kein gültiges Datenformat erstellen. Bitte versuche es erneut.');
    }
    return {
      title: parsed.title || freeformSetting,
      era: parsed.era || 'Historische Epoche',
      archetype: parsed.archetype || 'reigns_balance',
      defaultGradeLevel: parsed.defaultGradeLevel || 'mittelstufe',
      defaultTargetGrades: parsed.defaultTargetGrades || 'Mittelstufe (7.–9. Klasse)',
      defaultTopics: Array.isArray(parsed.defaultTopics) && parsed.defaultTopics.length > 0 ? parsed.defaultTopics : [freeformSetting],
      suggestedPillars: (parsed.suggestedPillars && parsed.suggestedPillars.length === 4)
        ? parsed.suggestedPillars
        : [
            { key: 'power1', label: 'Macht I 👑', icon: '👑', description: 'Erste Säule der Ordnung' },
            { key: 'power2', label: 'Macht II ⚖️', icon: '⚖️', description: 'Zweite Säule der Ordnung' },
            { key: 'power3', label: 'Macht III 🌾', icon: '🌾', description: 'Wirtschaft und Versorgung' },
            { key: 'power4', label: 'Macht IV 😊', icon: '😊', description: 'Bevölkerung und Moral' }
          ],
      specialResource: parsed.specialResource || { name: 'Einfluss', emoji: '✨' },
      skills: parsed.skills || { skill1: 'Strategie', skill2: 'Weitsicht', skill3: 'Diplomatie' },
      heroImagePrompt: parsed.heroImagePrompt || `16-bit pixel art illustration of ${freeformSetting}, retro SNES RPG title screen, 16:9 aspect ratio`
    };
  }

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
          "skillChanges": { "skill2": 1 },
          "consequenceText": "Altersgerechte Konsequenz der Option A..."
        },
        {
          "id": "B",
          "label": "Kurztitel Option B",
          "description": "Erklärung der Entscheidung",
          "statChanges": { "${req.pillars[2].key}": 15, "${req.pillars[3].key}": -10, "ep": 1 },
          "skillChanges": { "skill3": 1 },
          "consequenceText": "Altersgerechte Konsequenz der Option B..."
        },
        {
          "id": "C",
          "label": "Kurztitel Option C",
          "description": "Erklärung der Entscheidung",
          "statChanges": { "${req.pillars[3].key}": 15, "${req.pillars[0].key}": -10, "ep": 1 },
          "skillChanges": { "skill1": 1 },
          "consequenceText": "Altersgerechte Konsequenz der Option C..."
        },
        {
          "id": "D",
          "label": "Meisterlösung D (🔒)",
          "description": "Erklärung der Meisteroption",
          "epCost": 3,
          "statChanges": { "${req.pillars[0].key}": 20, "${req.pillars[1].key}": 15, "${req.pillars[2].key}": 15, "${req.pillars[3].key}": 15, "ep": -1 },
          "skillChanges": { "skill1": 1, "skill2": 1, "skill3": 1 },
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

      try {
        const parsed = parseJsonSafely(rawJson, 'rounds');
        if (parsed && Array.isArray(parsed.rounds) && parsed.rounds.length > 0) {
          return parsed.rounds;
        }
      } catch (parseErr: any) {
        console.warn('Batch parse error:', parseErr.message);
      }

      // If parsing yielded nothing, attempt round recovery
      const recovered = parseJsonSafely(rawJson, 'rounds');
      if (recovered && Array.isArray(recovered.rounds) && recovered.rounds.length > 0) {
        return recovered.rounds;
      }

      throw new Error(`Konnte Stationen ${startRound} bis ${endRound} nicht verarbeiten. Bitte erneut versuchen.`);
    };

    let allRawRounds: any[] = [];

    try {
      // Chunk generation into safe 5-round micro-batches (e.g. 1-5, 6-10, 11-15, 16-20)
      // This completely prevents hitting the 8192 token limit and avoids Unterminated string errors!
      const CHUNK_SIZE = 5;
      const chunks: { start: number; end: number }[] = [];
      for (let i = 1; i <= totalRounds; i += CHUNK_SIZE) {
        chunks.push({ start: i, end: Math.min(i + CHUNK_SIZE - 1, totalRounds) });
      }

      for (let cIdx = 0; cIdx < chunks.length; cIdx++) {
        const chunk = chunks[cIdx];
        const progressPct = Math.round(15 + ((cIdx + 0.1) / chunks.length) * 70);
        req.onProgress?.(
          `Generiere Stationen ${chunk.start} bis ${chunk.end} von ${totalRounds} (Dilemmata, 4 Optionen & Fachlexikon)...`,
          progressPct
        );
        const batchRounds = await generateRoundBatch(chunk.start, chunk.end);
        allRawRounds = [...allRawRounds, ...batchRounds];
        const completedPct = Math.round(15 + ((cIdx + 1) / chunks.length) * 70);
        req.onProgress?.(
          `Stationen 1 bis ${chunk.end} von ${totalRounds} erfolgreich fertiggestellt.`,
          completedPct
        );
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

      // 2. Choices: Normalize consequenceText and skillChanges
      const choices = (round.choices || []).map((c: any, cIdx: number) => {
        const consText = typeof c.consequenceText === 'string'
          ? c.consequenceText
          : (c.consequenceText?.[selectedGradeLevel] || c.consequenceText?.mittelstufe || c.consequenceText?.unterstufe || '');

        // Resolve skillChanges (supports { skill1: 1 } or { goettlicheAuserwaehltheit: 1 } or auto-assigns didactically)
        const rawSkills = c.skillChanges || {};
        const skillChanges: Partial<import('../types/game').Skills> = {};
        
        const s1Val = rawSkills.skill1 ?? rawSkills.goettlicheAuserwaehltheit;
        const s2Val = rawSkills.skill2 ?? rawSkills.politischeGeschicklichkeit;
        const s3Val = rawSkills.skill3 ?? rawSkills.militaerischeStaerke;

        if (typeof s1Val === 'number') skillChanges.goettlicheAuserwaehltheit = s1Val;
        if (typeof s2Val === 'number') skillChanges.politischeGeschicklichkeit = s2Val;
        if (typeof s3Val === 'number') skillChanges.militaerischeStaerke = s3Val;

        // If AI omitted skillChanges, assign sensible educational skill growth based on option ID
        if (Object.keys(skillChanges).length === 0) {
          if (c.id === 'A') skillChanges.politischeGeschicklichkeit = 1;
          else if (c.id === 'B') skillChanges.militaerischeStaerke = 1;
          else if (c.id === 'C') skillChanges.goettlicheAuserwaehltheit = 1;
          else if (c.id === 'D') {
            skillChanges.goettlicheAuserwaehltheit = 1;
            skillChanges.politischeGeschicklichkeit = 1;
            skillChanges.militaerischeStaerke = 1;
          }
        }

        return {
          ...c,
          skillChanges,
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

        if (eraFull.includes('nsdap') || eraFull.includes('nationalsozialismus') || eraFull.includes('hitler') || eraFull.includes('diktatur') || eraFull.includes('1933')) {
          return t.includes('nationalsozialismus') || tags.includes('ns-diktatur') || tags.includes('1933');
        }
        if (eraFull.includes('weltkrieg') || eraFull.includes('ww1') || eraFull.includes('graben') || eraFull.includes('verdun') || eraFull.includes('1914')) {
          return t.includes('erster weltkrieg') || tags.includes('erster weltkrieg') || tags.includes('westfront');
        }
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
      let matchedHotspots: StationHotspot[] | undefined = undefined;

      if (specificMatch) {
        matchedImg = specificMatch.imageUrl;
        matchedHotspots = specificMatch.hotspots;
      } else if (fallbackStationAssets.length > 0) {
        // Didactic pairing: across 20 rounds, the location changes every 2 rounds (0-1: Loc 1, 2-3: Loc 2, etc.)
        const locIndex = Math.floor(idx / 2) % fallbackStationAssets.length;
        matchedImg = fallbackStationAssets[locIndex].imageUrl;
        matchedHotspots = fallbackStationAssets[locIndex].hotspots;
      } else {
        // Fallback to detected era theme banner
        const themeConfig = detectEraTheme(req.era + ' ' + req.title, req.archetype);
        matchedImg = themeConfig.defaultBannerUrl || '/assets/nile_banner.jpg';
      }

      // Preserve AI-generated hotspots if present and informative, or apply bespoke curated ones
      const finalHotspots = (round.hotspots && Array.isArray(round.hotspots) && round.hotspots.length > 0)
        ? round.hotspots
        : matchedHotspots;

      return {
        ...round,
        roundNumber: idx + 1,
        situation: situationObj,
        choices,
        lexiconEntry,
        imagePath: round.imagePath || matchedImg,
        hotspots: finalHotspots,
      };
    });

    // Detect era Hero Banner asset if available in the pool
    const eraHeroAsset = PREDEFINED_HISTORY_ASSETS.find((a) => {
      const eraFull = `${req.era} ${req.title}`.toLowerCase();
      const isHero = a.tags.includes('Hero');
      if (!isHero) return false;
      const t = a.topic.toLowerCase();
      if (eraFull.includes('nsdap') || eraFull.includes('nationalsozialismus') || eraFull.includes('hitler') || eraFull.includes('diktatur') || eraFull.includes('1933')) {
        return t.includes('nationalsozialismus');
      }
      if (eraFull.includes('weltkrieg') || eraFull.includes('ww1') || eraFull.includes('graben') || eraFull.includes('verdun') || eraFull.includes('1914')) {
        return t.includes('erster weltkrieg');
      }
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

    // Generate didactically structured worksheet & solutions
    let worksheet: import('../types/game').GameWorksheet | undefined = undefined;
    try {
      req.onProgress?.('Erstelle didaktischen Begleitbogen & Musterlösung für den Unterricht...', 92);
      worksheet = await this.generateWorksheetForGame({
        title: req.title,
        era: req.era,
        gradeLevel: selectedGradeLevel,
        targetGrades: currentGrade.classes,
        coreTopics: req.coreTopics,
        rounds: parsedRounds,
        pillars: req.pillars,
      });
    } catch (wsErr) {
      console.warn('Worksheet generation failed, using fallback template:', wsErr);
      worksheet = this.createFallbackWorksheet(req.title, req.era, currentGrade.classes, req.coreTopics, parsedRounds);
    }

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
      worksheet,
    };

    return gameDefinition;
  }

  /**
   * Generates a pedagogically rigorous DIN-A4 student worksheet and teacher solution sheet
   */
  async generateWorksheetForGame(params: {
    title: string;
    era: string;
    gradeLevel: GradeLevel;
    targetGrades: string;
    coreTopics: string[];
    rounds: RoundStory[];
    pillars: [PillarConfig, PillarConfig, PillarConfig, PillarConfig];
  }): Promise<import('../types/game').GameWorksheet> {
    const totalRounds = params.rounds.length || 20;
    const rEarly = params.rounds[Math.min(1, totalRounds - 1)];
    const rMid = params.rounds[Math.floor(totalRounds / 2)];
    const rLate = params.rounds[Math.max(0, totalRounds - 2)];

    const sampleSummary = [
      `Frühe Station: Station ${rEarly.roundNumber} (${rEarly.locationName}): ${rEarly.milestoneTitle} | Begriff: ${rEarly.lexiconEntry?.term || ''}`,
      `Mittlere Station: Station ${rMid.roundNumber} (${rMid.locationName}): ${rMid.milestoneTitle} | Begriff: ${rMid.lexiconEntry?.term || ''}`,
      `Späte Station: Station ${rLate.roundNumber} (${rLate.locationName}): ${rLate.milestoneTitle} | Begriff: ${rLate.lexiconEntry?.term || ''}`
    ].join('\n');

    const prompt = `
Du bist ein Fachberater für Geschichtsdidaktik an Thüringer Regelschulen und Gymnasien.
Erstelle ein übersichtliches, didaktisch hochwertiges DIN-A4-Arbeitsblatt für Schülerinnen und Schüler (Alter 10 bis 16 Jahre, Klasse 5 bis 10):

Spiel: "${params.title}"
Themenbereich: "${params.era}"
Lehrplan-Kernthemen: ${params.coreTopics.join(', ')}

Stations-Orientierung:
${sampleSummary}

STRENGE VORGABEN FÜR DAS ARBEITSBLATT:
1. "learningGoal": Didaktisches Stundenziel in 1 prägnanten Satz (NUR als Information für die Lehrkraft / Lösungsblatt).
2. "coreQuestions": Genau 3 didaktische Leitfragen, die sich über den GESAMTEN Verlauf des Spiels verteilen:
   - Frage 1 zu einer frühen Station (z. B. Station ${rEarly.roundNumber})
   - Frage 2 zu einer mittleren Station (z. B. Station ${rMid.roundNumber})
   - Frage 3 zu einer späten Station (z. B. Station ${rLate.roundNumber})
   Formuliere die Fragen altersgerecht, klar und verständlich (Altersgruppe 10–16 Jahre!).
   Jede Frage enthält eine fundierte Musterlösung ("sampleSolution") für die Lehrkraft.
3. "dilemmaTask": Ein echtes historisches Entscheidungsproblem aus dem Spiel.
   WICHTIG: Die Aufgabenstellung muss ganz einfach und direkt formuliert sein!
   Beispiel für den Ton: "An Station X standest du vor einer schwierigen Wahl: Sollte man ... oder lieber ...? Was hättest du damals getan und warum gab es keine leichte Lösung?"
   Enthält "title", "situationContext", "taskPrompt" und "sampleSolution".
4. "glossaryTerms": Genau SECHS (6) zentrale historische Fachbegriffe und Kerninhalte des gesamten Settings (z. B. für Ägypten: Nilflut, Pharao, Hieroglyphen, Papyrus, Pyramide, Ma'at).
   Jeder Begriff mit kurzem Such-Hinweis ("hint") und altersgerechter 1-Satz-Erklärung ("solution").
5. "reflectionCheck": Leer lassen oder kurzen Lehrer-Hinweis ("").

Antworte AUSSCHLIESSLICH als valides JSON:
{
  "subtitle": "Begleit- und Sicherungsbogen",
  "learningGoal": "...",
  "coreQuestions": [
    { "stationRef": "Station ${rEarly.roundNumber}", "question": "...", "sampleSolution": "..." },
    { "stationRef": "Station ${rMid.roundNumber}", "question": "...", "sampleSolution": "..." },
    { "stationRef": "Station ${rLate.roundNumber}", "question": "...", "sampleSolution": "..." }
  ],
  "dilemmaTask": {
    "title": "Historische Entscheidung & Dilemma",
    "situationContext": "...",
    "taskPrompt": "...",
    "sampleSolution": "..."
  },
  "glossaryTerms": [
    { "term": "Begriff 1", "hint": "...", "solution": "..." },
    { "term": "Begriff 2", "hint": "...", "solution": "..." },
    { "term": "Begriff 3", "hint": "...", "solution": "..." },
    { "term": "Begriff 4", "hint": "...", "solution": "..." },
    { "term": "Begriff 5", "hint": "...", "solution": "..." },
    { "term": "Begriff 6", "hint": "...", "solution": "..." }
  ],
  "reflectionCheck": ""
}
`;

    const rawJson = await geminiRotationService.generateContentWithRotation(
      prompt,
      'Du bist Fachberater für Geschichtsdidaktik. Antworte AUSSCHLIESSLICH mit reinem JSON.',
      true
    );

    const parsed = parseJsonSafely(rawJson);
    if (!parsed) {
      throw new Error('Arbeitsblatt-JSON konnte nicht geparst werden.');
    }
    return parsed;
  }

  /**
   * Safe didactic fallback worksheet distributed evenly across the whole game with 6 core terms
   */
  public createFallbackWorksheet(
    title: string,
    era: string,
    classes: string,
    topics: string[],
    rounds: RoundStory[]
  ): import('../types/game').GameWorksheet {
    const total = rounds.length || 20;
    const r1 = rounds[Math.min(1, total - 1)] || { roundNumber: 2, milestoneTitle: 'Frühe Station', locationName: 'Auftakt', lexiconEntry: { term: 'Start', explanation: { mittelstufe: 'Beginn' } } };
    const r2 = rounds[Math.floor(total / 2)] || { roundNumber: Math.floor(total / 2), milestoneTitle: 'Mittlere Station', locationName: 'Zentrum', lexiconEntry: { term: 'Mitte', explanation: { mittelstufe: 'Zentrum' } } };
    const r3 = rounds[Math.max(0, total - 2)] || { roundNumber: total - 1, milestoneTitle: 'Späte Station', locationName: 'Finale', lexiconEntry: { term: 'Finale', explanation: { mittelstufe: 'Ende' } } };

    // Extract up to 6 unique core terms
    const rawTerms = [
      ...topics,
      r1.lexiconEntry?.term,
      r2.lexiconEntry?.term,
      r3.lexiconEntry?.term,
      'Herrschaft',
      'Gemeinschaft',
      'Alltag'
    ].filter(Boolean) as string[];
    const uniqueTerms = [...new Set(rawTerms)].slice(0, 6);

    return {
      subtitle: `Begleit- und Sicherungsbogen`,
      learningGoal: `Die Schülerinnen und Schüler untersuchen die Lebenswelt und die Herrschaftsstrukturen in der Epoche ${era} und beurteilen historische Weichenstellungen.`,
      coreQuestions: [
        {
          stationRef: `Station ${r1.roundNumber}`,
          question: `Welche wichtige Aufgabe oder Herausforderung musste an ${r1.locationName} bewältigt werden?`,
          sampleSolution: `Es mussten erste Grundlagen für die Gemeinschaft geschaffen und wichtige Vorräte gesichert werden.`
        },
        {
          stationRef: `Station ${r2.roundNumber}`,
          question: `An ${r2.locationName} (${r2.milestoneTitle}) gab es Streit: Welche unterschiedlichen Meinungen standen sich gegenüber?`,
          sampleSolution: `Verschiedene Gruppen hatten gegensätzliche Interessen, weshalb ein gerechter Kompromiss gefunden werden musste.`
        },
        {
          stationRef: `Station ${r3.roundNumber}`,
          question: `Rückblick vor dem Ziel (${r3.locationName}): Was war rückblickend die klügste Entscheidung auf deiner Reise und warum?`,
          sampleSolution: `Besonnene und vorausschauende Entscheidungen sicherten das Überleben und den Erfolg aller Beteiligten.`
        }
      ],
      dilemmaTask: {
        title: "Schwierige Entscheidung: Was hättest du getan?",
        situationContext: `Auf deiner historischen Reise gab es Situationen, in denen jede Entscheidung auch Nachteile mit sich brachte.`,
        taskPrompt: `Wähle eine schwierige Situation aus dem Spiel: Vor welcher Wahl standest du? Wie hast du entschieden und warum gab es damals keine einfache Lösung für alle?`,
        sampleSolution: `In historischen Notlagen oder Umbrüchen gab es selten einfache Lösungen; jede Entscheidung forderte von einer Gruppe Opfer oder Verzicht.`
      },
      glossaryTerms: uniqueTerms.map((t, i) => ({
        term: t,
        hint: `Zentraler Begriff ${i + 1}`,
        solution: `Wichtiger historischer Begriff zur Epoche ${era}.`
      })),
      reflectionCheck: ""
    };
  }
}

export const gameGeneratorService = new GameGeneratorService();

