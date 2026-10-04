import { geminiRotationService } from './geminiRotation';
import { GameDefinition, PillarConfig, RoundStory } from '../types/game';
import { detectEraTheme } from '../utils/themeManager';

export interface GenerationRequest {
  title: string;
  era: string;
  archetype?: import('../types/game').GameMechanicArchetype;
  artStyle?: import('../types/game').ArtStyleType;
  gradeLevel?: import('../types/game').GradeLevel;
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
}

export class GameGeneratorService {
  /**
   * Generates a complete educational game with customizable round count, A/B branches and source material support
   */
  async generateFullGame(req: GenerationRequest): Promise<GameDefinition> {
    const roundCount = req.roundCount || 20;
    const archetype = req.archetype || 'reigns_balance';
    const reflectionInterval = req.reflectionInterval || 5;
    const artStyle = req.artStyle || 'pixel_art';

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
RUNDENANZAHL: Genau ${roundCount} Runden/Stationen.
REFLEXIONSPHASE: Alle ${reflectionInterval} Runden eine Reflexions- und Strategiepause für den Geschichtshefter.

${archetype === 'mythology_duel' ? '- Integriere Quiz-Prüfungen (❓) mit Tipp-Button (💡), Erklärung und Belohnung (🏆) sowie mythologische Artefakte (🗡️, 🔮).' : ''}
${archetype === 'conquest_campaign' ? '- Integriere Konsequenzen-Bäume mit unmittelbaren und langfristigen Auswirkungen auf Heeresdisziplin und Eroberung.' : ''}
${archetype === 'survival_settlement' ? '- Fokussiere auf existenzielle Entscheidungen: Nahrung, Werkzeuge, Sesshaftwerdung und handwerkliche Fähigkeiten.' : ''}
${archetype === 'city_scavenger_hunt' ? '- Baue Stationen als Schnitzeljagd mit architektonischen Hinweisen und Monumenten auf.' : ''}

${req.sourceMaterialText ? `VORGEGEBENES QUELLENMATERIAL / LEHRBUCH-TEXT (Zwingend berücksichtigen):\n"""\n${req.sourceMaterialText}\n"""\n` : ''}

Regeln & Vorgaben:
1. 4 Mächtesäulen:
   - Säule 1: ${req.pillars[0].label} (${req.pillars[0].description})
   - Säule 2: ${req.pillars[1].label} (${req.pillars[1].description})
   - Säule 3: ${req.pillars[2].label} (${req.pillars[2].description})
   - Säule 4: ${req.pillars[3].label} (${req.pillars[3].description})
2. Spezialressource: ${req.specialResourceName} (${req.specialResourceEmoji}) - Start: 2 Punkte, Option D kostet 3 Punkte.
3. Fähigkeiten: ${req.skills.skill1}, ${req.skills.skill2}, ${req.skills.skill3}.
4. Verbindliche Kernthemen aus dem Lehrplan: ${req.coreTopics.join(', ')}.
5. Dreifache Sprachadaption für JEDE Station und JEDE Option:
   - unterstufe: Kl. 5-6 (lebendig, narrativ, klare Konsequenzen, einfache Begriffe)
   - mittelstufe: Kl. 7-9 (Fachbegriffe, ausgewogen, erste Grauzonen)
   - oberstufe: ab Kl. 10 (anspruchsvoll, staatsphilosophisch, quellennah)
6. Jede Runde enthält 4 Optionen (A, B, C, und die exklusive Option D, die 3 Spezialressourcen kostet).
7. Jede Runde enthält ein didaktisches Lexikon ('lexiconEntry') mit Begriff, Erklärung und 'curiosityFact' ("💡 Hast du gewusst?").
8. Jede Runde enthält genau 3 bildpassende Entdecker-Hotspots ('hotspots') mit präzisen Prozent-Koordinaten (x: 0-100, y: 0-100), die reale Details des Bildes erklären (z.B. Architektur, Werkzeuge, Kleidung, Schriftzeichen, Göttersymbole).
9. Antwort MUSS zwingend als valides JSON formatiert sein.
`;

    const prompt = `
Erstelle genau 5 packende, didaktisch hochwertige Stationen (Runde 1 bis 5) für das Spiel:
Titel: "${req.title}"
Epoche / Setting: "${req.era}"

WICHTIGSTE REGELN:
1. Halte Texte prägnant und zielgerichtet (1-2 kurze Sätze je Klassenstufe).
2. Keine Formatierungsfehler, keine unmaskierten Anführungszeichen innerhalb von Texten.
3. Antworte AUSSCHLIESSLICH mit reinem, validem JSON in folgendem Schema:
{
  "rounds": [
    {
      "roundNumber": 1,
      "locationKey": "station_1",
      "locationName": "Name der Station 1",
      "milestoneTitle": "Runde 1: Titel",
      "imagePrompt": "${selectedStylePrompt} of [historische Szene], atmospheric lighting, educational game visual, 16:9 aspect ratio",
      "hotspots": [
        { "id": "hs_1", "x": 30, "y": 65, "label": "Detail 1", "description": "Historische Erklärung...", "icon": "🔍" },
        { "id": "hs_2", "x": 60, "y": 45, "label": "Detail 2", "description": "Historische Erklärung...", "icon": "🏛️" },
        { "id": "hs_3", "x": 50, "y": 20, "label": "Detail 3", "description": "Historische Erklärung...", "icon": "✨" }
      ],
      "situation": {
        "unterstufe": "Einführender Text für Unterstufe...",
        "mittelstufe": "Einführender Text für Mittelstufe...",
        "oberstufe": "Einführender Text für Oberstufe..."
      },
      "choices": [
        {
          "id": "A",
          "label": "Kurztitel Option A",
          "description": "Erklärung Option A",
          "statChanges": { "${req.pillars[0].key}": 15, "${req.pillars[1].key}": -10, "ep": 1 },
          "consequenceText": { "unterstufe": "...", "mittelstufe": "...", "oberstufe": "..." }
        },
        {
          "id": "B",
          "label": "Kurztitel Option B",
          "description": "Erklärung Option B",
          "statChanges": { "${req.pillars[2].key}": 15, "${req.pillars[3].key}": -10, "ep": 1 },
          "consequenceText": { "unterstufe": "...", "mittelstufe": "...", "oberstufe": "..." }
        },
        {
          "id": "C",
          "label": "Kurztitel Option C",
          "description": "Erklärung Option C",
          "statChanges": { "${req.pillars[3].key}": 15, "${req.pillars[0].key}": -10, "ep": 1 },
          "consequenceText": { "unterstufe": "...", "mittelstufe": "...", "oberstufe": "..." }
        },
        {
          "id": "D",
          "label": "Meisterlösung D (🔒)",
          "description": "Erklärung Meisteroption D",
          "epCost": 3,
          "statChanges": { "${req.pillars[0].key}": 20, "${req.pillars[1].key}": 15, "${req.pillars[2].key}": 15, "${req.pillars[3].key}": 15, "ep": -1 },
          "consequenceText": { "unterstufe": "...", "mittelstufe": "...", "oberstufe": "..." }
        }
      ],
      "lexiconEntry": {
        "title": "Lexikon-Titel",
        "term": "Historischer Begriff",
        "explanation": {
          "unterstufe": "Einfache Erklärung...",
          "mittelstufe": "Detaillierte Erklärung...",
          "oberstufe": "Historischer Kontext..."
        },
        "curiosityFact": "Erstaunlicher Fakt für Schüler..."
      }
    }
  ]
}
`;

    const rawJson = await geminiRotationService.generateContentWithRotation(
      prompt,
      systemInstruction,
      true
    );

    let parsedRounds: RoundStory[] = [];
    try {
      // 1. Clean markdown code fences if present (```json ... ```)
      let cleanJson = rawJson.trim();
      cleanJson = cleanJson.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '');
      
      const firstBrace = cleanJson.indexOf('{');
      const lastBrace = cleanJson.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        cleanJson = cleanJson.substring(firstBrace, lastBrace + 1);
      }

      // 2. Remove trailing commas before } or ]
      cleanJson = cleanJson.replace(/,\s*([\]}])/g, '$1');
      
      const parsed = JSON.parse(cleanJson);
      parsedRounds = parsed.rounds || [];

      // Validate at least 1 round exists
      if (!Array.isArray(parsedRounds) || parsedRounds.length === 0) {
        throw new Error("Keine Stationen im JSON gefunden.");
      }
    } catch (e: any) {
      console.error("JSON parsing error during game generation:", e, "Raw output:", rawJson);
      throw new Error(
        `Fehler beim Verarbeiten der Spieldaten (${e.message || "Unvollständige KI-Antwort"}). Bitte klicke nochmals auf "Jetzt generieren" – dank Schlüssel-Rotation startet der Versuch direkt mit der nächsten Modell-Instanz.`
      );
    }

    const gameDefinition: GameDefinition = {
      id: `game_${Date.now()}`,
      title: req.title,
      subtitle: req.era,
      era: req.era,
      description: `Interaktives Geschichtsspiel zur Epoche ${req.era}.`,
      gradeLevel: req.gradeLevel || 'mittelstufe',
      targetGrades: req.targetGrades,
      eraThemeId: detectEraTheme(req.era + ' ' + req.title, req.archetype).id,
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
