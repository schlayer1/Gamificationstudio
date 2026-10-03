import { geminiRotationService } from './geminiRotation';
import { GameDefinition, PillarConfig, RoundStory } from '../types/game';

export interface GenerationRequest {
  title: string;
  era: string;
  archetype?: import('../types/game').GameMechanicArchetype;
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

    const systemInstruction = `
Du bist ein professioneller Didaktik-Experte für Geschichtsunterricht und Senior Game Designer.
Erstelle ein didaktisch anspruchsvolles Geschichts-Abenteuerspiel im Schulunterricht-Standard.

SPIELMECHANIK-ARCHETYP: ${archetype}
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
8. Antwort MUSS zwingend als valides JSON formatiert sein.
   - mittelstufe: Kl. 7-9 (Fachbegriffe, ausgewogen, erste Grauzonen)
   - oberstufe: ab Kl. 10 (anspruchsvoll, staatsphilosophisch, quellennah)
6. Jede Runde enthält 4 Optionen (A, B, C, und die exklusive Option D, die 3 Spezialressourcen kostet).
7. Jede Runde enthält ein didaktisches Lexikon ('lexiconEntry') mit Begriff, Erklärung und 'curiosityFact' ("💡 Hast du gewusst?").
8. Antwort MUSS zwingend als valides JSON formatiert sein.
`;

    const prompt = `
Erstelle nun die ersten 6 Stationen (Runde 1 bis 6) für das Spiel:
Titel: "${req.title}"
Epoche / Setting: "${req.era}"

WICHTIG: Antworte AUSSCHLIESSLICH mit folgendem JSON-Format (kein Markdown drumherum, nur JSON):
{
  "rounds": [
    {
      "roundNumber": 1,
      "locationKey": "station_1",
      "locationName": "Name der Station 1",
      "milestoneTitle": "Runde 1: Titel",
      "imagePrompt": "16-bit pixel art retro video game style illustration of [historische Szene der Station], atmospheric lighting, highly detailed historical setting, educational game visual, 16:9 aspect ratio",
      "situation": {
        "unterstufe": "Text für 5.-6. Klasse...",
        "mittelstufe": "Text für 7.-9. Klasse...",
        "oberstufe": "Text ab 10. Klasse..."
      },
      "choices": [
        {
          "id": "A",
          "label": "Kurztitel Option A",
          "description": "Erklärung Option A",
          "statChanges": { "${req.pillars[0].key}": 15, "${req.pillars[1].key}": -10, "ep": 1 },
          "consequenceText": {
            "unterstufe": "...",
            "mittelstufe": "...",
            "oberstufe": "..."
          }
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
        "term": "Historischer Fachbegriff",
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
      const cleanJson = rawJson.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      parsedRounds = parsed.rounds || [];
    } catch (e) {
      console.error("JSON parsing error during game generation:", e);
      throw new Error("Fehler beim Verarbeiten der generierten Spieldaten. Bitte erneut versuchen.");
    }

    const gameDefinition: GameDefinition = {
      id: `game_${Date.now()}`,
      title: req.title,
      subtitle: req.era,
      era: req.era,
      description: `Interaktives Geschichtsspiel zur Epoche ${req.era}.`,
      targetGrades: req.targetGrades,
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
