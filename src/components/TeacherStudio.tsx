import React, { useState } from 'react';
import { geminiRotationService } from '../services/geminiRotation';
import { PREDEFINED_TEMPLATES, PredefinedTemplate } from '../templates/historyTemplates';
import { gameGeneratorService } from '../services/gameGenerator';
import { GameDefinition, PillarConfig, ArtStyleType } from '../types/game';
import { soundFX } from '../utils/sound';
import {
  Sparkles,
  Key,
  Plus,
  Trash2,
  CheckCircle,
  AlertCircle,
  Wand2,
  BookOpen,
  ArrowRight,
  Shield,
  Layers,
  FileCode,
  Download,
  Upload,
  Play,
  FileText,
  Image,
  X,
  Camera,
  Palette
} from 'lucide-react';
import { StationImagePromptModal } from './StationImagePromptModal';

interface TeacherStudioProps {
  onLoadGameToPlayer: (game: GameDefinition) => void;
  onCloseStudio: () => void;
}

export const TeacherStudio: React.FC<TeacherStudioProps> = ({
  onLoadGameToPlayer,
  onCloseStudio,
}) => {
  // Key Manager State
  const [keys, setKeys] = useState<string[]>(geminiRotationService.loadKeys());
  const [newKeyInput, setNewKeyInput] = useState<string>('');
  const [showKeyManager, setShowKeyManager] = useState<boolean>(false);

  // Selected Template / Creation State
  const [selectedTemplate, setSelectedTemplate] = useState<PredefinedTemplate>(PREDEFINED_TEMPLATES[0]);
  const [customTitle, setCustomTitle] = useState<string>(selectedTemplate.title);
  const [customEra, setCustomEra] = useState<string>(selectedTemplate.era);
  const [targetGrades, setTargetGrades] = useState<string>('Alle Stufen (Differenziert 5–12)');
  const [coreTopics, setCoreTopics] = useState<string[]>(selectedTemplate.defaultTopics);
  const [newTopicInput, setNewTopicInput] = useState<string>('');

  // 4 Pillars
  const [pillars, setPillars] = useState<[PillarConfig, PillarConfig, PillarConfig, PillarConfig]>([
    selectedTemplate.suggestedPillars[0],
    selectedTemplate.suggestedPillars[1],
    selectedTemplate.suggestedPillars[2],
    selectedTemplate.suggestedPillars[3],
  ]);

  // Special Resource
  const [specialResourceName, setSpecialResourceName] = useState<string>(selectedTemplate.specialResource.name);
  const [specialResourceEmoji, setSpecialResourceEmoji] = useState<string>(selectedTemplate.specialResource.emoji);

  // Skills
  const [skills, setSkills] = useState<{ skill1: string; skill2: string; skill3: string }>({
    skill1: selectedTemplate.skills.skill1,
    skill2: selectedTemplate.skills.skill2,
    skill3: selectedTemplate.skills.skill3,
  });

  // Game Customization (Rounds, Reflection, Source Material, Scanned Textbook Photo, Art Style)
  const [roundCount, setRoundCount] = useState<number>(20);
  const [reflectionInterval, setReflectionInterval] = useState<number>(5);
  const [artStyle, setArtStyle] = useState<ArtStyleType>('pixel_art');
  const [sourceMaterialText, setSourceMaterialText] = useState<string>('');
  const [imageAttachment, setImageAttachment] = useState<{ mimeType: string; base64: string } | null>(null);
  const [imageFileName, setImageFileName] = useState<string>('');
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);

  // Generator Process State
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationProgress, setGenerationProgress] = useState<string>('');
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  // Switch template
  const handleSelectTemplate = (tpl: PredefinedTemplate) => {
    soundFX.playClick();
    setSelectedTemplate(tpl);
    setCustomTitle(tpl.title);
    setCustomEra(tpl.era);
    setCoreTopics(tpl.defaultTopics);
    setPillars([
      tpl.suggestedPillars[0],
      tpl.suggestedPillars[1],
      tpl.suggestedPillars[2],
      tpl.suggestedPillars[3],
    ]);
    setSpecialResourceName(tpl.specialResource.name);
    setSpecialResourceEmoji(tpl.specialResource.emoji);
    setSkills(tpl.skills);
  };

  // Add teacher topic
  const handleAddTopic = () => {
    if (!newTopicInput.trim()) return;
    soundFX.playClick();
    setCoreTopics([...coreTopics, newTopicInput.trim()]);
    setNewTopicInput('');
  };

  // Remove teacher topic
  const handleRemoveTopic = (index: number) => {
    soundFX.playClick();
    setCoreTopics(coreTopics.filter((_, idx) => idx !== index));
  };

  // Key operations
  const handleAddKey = () => {
    if (!newKeyInput.trim() || keys.length >= 4) return;
    const updated = [...keys, newKeyInput.trim()];
    geminiRotationService.saveKeys(updated);
    setKeys(geminiRotationService.getKeys());
    setNewKeyInput('');
    soundFX.playClick();
  };

  const handleRemoveKey = (index: number) => {
    const updated = keys.filter((_, idx) => idx !== index);
    geminiRotationService.saveKeys(updated);
    setKeys(geminiRotationService.getKeys());
    soundFX.playClick();
  };

  // Handle textbook image upload to base64
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorNotice("Bitte lade eine Bilddatei hoch (z.B. JPG oder PNG).");
      return;
    }

    setImageFileName(file.name);
    soundFX.playClick();

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64Data = result.split(',')[1];
      setImageAttachment({
        mimeType: file.type,
        base64: base64Data,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImageAttachment(null);
    setImageFileName('');
    soundFX.playClick();
  };

  // Launch AI Generation
  const handleGenerateGame = async () => {
    soundFX.playBlessing();
    setIsGenerating(true);
    setErrorNotice(null);
    setGenerationProgress("Verbinde mit Gemini AI (Schlüssel-Rotation aktiv)...");

    try {
      setGenerationProgress(`Generiere ${roundCount} didaktische Stationen, Dilemmata und Quellenlexikon...`);
      const newGame = await gameGeneratorService.generateFullGame({
        title: customTitle,
        era: customEra,
        archetype: selectedTemplate.archetype,
        targetGrades,
        roundCount,
        reflectionInterval,
        artStyle,
        coreTopics,
        sourceMaterialText: sourceMaterialText.trim() || undefined,
        imageAttachment: imageAttachment || undefined,
        pillars,
        specialResourceName,
        specialResourceEmoji,
        skills,
      });

      setGenerationProgress("Spiel erfolgreich erstellt!");
      setTimeout(() => {
        setIsGenerating(false);
        onLoadGameToPlayer(newGame);
      }, 800);
    } catch (err: any) {
      console.error(err);
      setErrorNotice(err.message || "Fehler bei der Generierung.");
      setIsGenerating(false);
      soundFX.playCrisis();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fade-in text-stone-100">
      {/* Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-800/60 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/50 text-amber-300">
            <Wand2 className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-200 font-serif m-0">
              History Trail Studio
            </h1>
            <p className="text-xs sm:text-sm text-stone-400">
              Lehrer-Baukasten: Erstelle didaktisch geführte 20-Runden Geschichts-Abenteuer mit automatischer Differenzierung
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Lehrplan-Bildergalerie Button */}
          <button
            onClick={() => {
              soundFX.playClick();
              setIsGalleryOpen(true);
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-900 border border-amber-700/60 hover:border-amber-400 text-xs text-amber-300 font-bold transition-all cursor-pointer"
          >
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Geschichts-Galerie & Prompts</span>
          </button>

          {/* 4-Key Rotation Status Pill */}
          <button
            onClick={() => {
              soundFX.playClick();
              setShowKeyManager(!showKeyManager);
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-900 border border-amber-700/60 hover:border-amber-400 text-xs text-amber-300 font-mono transition-all"
          >
            <Key className="w-4 h-4 text-amber-400" />
            <span>Gemini Keys: <strong>{keys.length}/4 aktiv</strong></span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              onCloseStudio();
            }}
            className="px-4 py-2 rounded-xl bg-amber-700/60 hover:bg-amber-600 text-amber-100 text-xs font-bold transition-all"
          >
            Zurück zum Spiel
          </button>
        </div>
      </div>

      {/* Optional: 4 API Key Manager Modal / Accordion */}
      {showKeyManager && (
        <div className="p-5 rounded-2xl bg-stone-950 border-2 border-amber-500/80 shadow-2xl space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
              <Shield className="w-5 h-5 text-amber-400" />
              <span>Multi-Key Load Balancing (Kostenloses Gemini Free-Tier)</span>
            </div>
            <span className="text-xs text-stone-400">Automatische Umschaltung bei 429 Rate-Limits</span>
          </div>

          <p className="text-xs text-stone-300 leading-relaxed">
            Hinterlege bis zu 4 kostenlose API-Schlüssel von <strong className="text-amber-400">aistudio.google.com</strong>.
            Die App verteilt die Anfragen und schaltet bei einem temporären Limit sofort unterbrechungsfrei auf den nächsten Schlüssel um!
          </p>

          <div className="space-y-2">
            {keys.map((k, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-xs">
                <span className="font-mono text-stone-300">
                  Schlüssel {idx + 1}: {k.slice(0, 8)}••••••••••••••••{k.slice(-4)}
                </span>
                <button
                  onClick={() => handleRemoveKey(idx)}
                  className="text-red-400 hover:text-red-300 p-1"
                  title="Schlüssel entfernen"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {keys.length < 4 && (
            <div className="flex gap-2">
              <input
                type="password"
                placeholder="Neuen Gemini API-Key einfügen (AIzaSy...)"
                value={newKeyInput}
                onChange={(e) => setNewKeyInput(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg bg-stone-900 border border-stone-700 text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono"
              />
              <button
                onClick={handleAddKey}
                disabled={!newKeyInput.trim()}
                className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition-all disabled:opacity-40 cursor-pointer"
              >
                Hinzufügen
              </button>
            </div>
          )}
        </div>
      )}

      {/* STEP 1: Choose Template or Start Blank */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <span>Schritt 1:</span> Wähle eine historische Vorlage oder passe sie an
          </h2>
          <span className="text-xs text-stone-400">Aus deinen Prompt-Klassikern</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PREDEFINED_TEMPLATES.map((tpl) => (
            <div
              key={tpl.id}
              onClick={() => handleSelectTemplate(tpl)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedTemplate.id === tpl.id
                  ? 'bg-amber-950/70 border-amber-400 ring-2 ring-amber-500/40 shadow-lg'
                  : 'bg-stone-900/80 border-stone-800 hover:border-amber-700/60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-amber-400">{tpl.era}</span>
                {selectedTemplate.id === tpl.id && <CheckCircle className="w-4 h-4 text-amber-400" />}
              </div>
              <h3 className="text-base font-bold text-amber-200 mb-1">{tpl.title}</h3>
              <p className="text-xs text-stone-300 leading-snug">{tpl.tagline}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STEP 2: Core Curriculum Topics (Teacher Requirements) */}
      <div className="papyrus-dark p-6 rounded-2xl border border-amber-700/60 space-y-5 shadow-xl">
        <div className="space-y-1">
          <h2 className="text-base font-bold text-amber-200 font-serif flex items-center gap-2">
            <span>Schritt 2:</span> Verbindliche Lehrplan-Schwerpunkte & Kernthemen vorgeben
          </h2>
          <p className="text-xs text-stone-300">
            Diese Begriffe und didaktischen Stationen fließen zwingend in die automatische Spielgenerierung und das Schüler-Lexikon ein.
          </p>
        </div>

        {/* Core Topics Pills */}
        <div className="flex flex-wrap gap-2">
          {coreTopics.map((topic, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/60 text-xs text-amber-200"
            >
              <span>{topic}</span>
              <button
                onClick={() => handleRemoveTopic(idx)}
                className="hover:text-red-400 transition-colors ml-1"
                title="Thema entfernen"
              >
                ×
              </button>
            </span>
          ))}
        </div>

        {/* Add Topic Input */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Neues Kernthema hinzufügen (z. B. 'Ablasshandel', 'Kanalbau', 'Domestikation von Tieren')..."
            value={newTopicInput}
            onChange={(e) => setNewTopicInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTopic()}
            className="flex-1 px-4 py-2.5 rounded-xl bg-stone-900 border border-amber-800/60 text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
          <button
            onClick={handleAddTopic}
            className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Hinzufügen</span>
          </button>
        </div>
      </div>

      {/* STEP 2b: Game Length & Reflection Intervals */}
      <div className="papyrus-dark p-6 rounded-2xl border border-amber-700/60 space-y-4 shadow-xl">
        <div className="space-y-1">
          <h2 className="text-base font-bold text-amber-200 font-serif flex items-center gap-2">
            <span>Schritt 2b:</span> Spieldauer & Reflexions-Intervalle festlegen
          </h2>
          <p className="text-xs text-stone-300">
            Passe die Rundenzahl an deine Unterrichtsstunde (z.B. 10 Runden für 45 Min., 20 Runden für Doppelstunde) an.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {/* Round count slider */}
          <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-stone-300 font-medium">Anzahl der Spielrunden:</span>
              <span className="font-mono font-bold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-lg border border-amber-700/60 text-sm">
                {roundCount} Runden
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={26}
              value={roundCount}
              onChange={(e) => setRoundCount(parseInt(e.target.value, 10))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-stone-500 font-mono">
              <span>5 (Schnellrunde)</span>
              <span>10–15 (Einzelstunde)</span>
              <span>20 (Standard)</span>
              <span>26 (Projekt)</span>
            </div>
          </div>

          {/* Reflection interval selector */}
          <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-stone-300 font-medium">Reflexions- & Hefterphase:</span>
              <span className="font-mono font-bold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-lg border border-amber-700/60 text-sm">
                alle {reflectionInterval} Runden
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[3, 4, 5].map((interval) => (
                <button
                  key={interval}
                  type="button"
                  onClick={() => {
                    soundFX.playClick();
                    setReflectionInterval(interval);
                  }}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    reflectionInterval === interval
                      ? 'bg-amber-600 text-stone-950 shadow'
                      : 'bg-stone-950 text-stone-300 border border-stone-800 hover:border-amber-700'
                  }`}
                >
                  Alle {interval}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-stone-400">
              Schüler sichern ihre Erkenntnisse im Schulheft und besprechen Dilemmata.
            </p>
          </div>
        </div>
      </div>

      {/* STEP 2c: Source Material & Scanned Textbook Page */}
      <div className="papyrus-dark p-6 rounded-2xl border border-amber-700/60 space-y-4 shadow-xl">
        <div className="space-y-1">
          <h2 className="text-base font-bold text-amber-200 font-serif flex items-center gap-2">
            <span>Schritt 2c:</span> Eigenes Quellenmaterial oder Lehrbuchseite übergeben (Multimodal)
          </h2>
          <p className="text-xs text-stone-300">
            Füge einen Arbeitsblatt-Text ein oder lade ein Foto einer Schulbuchseite hoch. Gemini extrahiert daraus automatisch die historischen Dilemmata und Fakten!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-1">
          {/* Textarea for pasted text */}
          <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Infotext, Quelle oder Arbeitsblatt (Text)</span>
            </div>
            <textarea
              rows={4}
              placeholder="Füge hier z.B. einen Textauszug aus dem Geschichtsbuch, einen Quellentext oder Arbeitsblattfragen ein..."
              value={sourceMaterialText}
              onChange={(e) => setSourceMaterialText(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500 font-sans resize-none"
            />
            <p className="text-[10px] text-stone-500">
              Wird direkt in den Systemprompt eingespeist, um stationsgetreue Aufgaben zu generieren.
            </p>
          </div>

          {/* Photo upload for scanned textbook page */}
          <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 space-y-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-2">
                <Image className="w-4 h-4 text-amber-400" />
                <span>Foto einer Lehrbuchseite hochladen (Multimodal)</span>
              </div>
              
              {!imageAttachment ? (
                <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-stone-700 hover:border-amber-500 rounded-xl cursor-pointer bg-stone-950/60 hover:bg-stone-950 transition-all text-center">
                  <Upload className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-xs text-stone-300 font-medium">Foto oder Scan auswählen (JPG / PNG)</span>
                  <span className="text-[10px] text-stone-500 mt-0.5">Gemini Flash analysiert Bild & Text direkt</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="flex items-center justify-between p-3 rounded-xl bg-amber-950/60 border border-amber-600/70 text-xs">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                    <span className="font-mono text-amber-200 truncate">{imageFileName}</span>
                  </div>
                  <button
                    onClick={handleRemoveImage}
                    className="p-1 rounded hover:bg-stone-800 text-stone-400 hover:text-red-400 transition-colors shrink-0"
                    title="Bild entfernen"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <p className="text-[10px] text-stone-500 mt-2">
              Ideal für spontane Vorbereitung: Buchseite abfotografieren und fertiges Spiel generieren lassen.
            </p>
          </div>
        </div>
      </div>

      {/* STEP 2d: Art Style Selection (Stilabfrage für Bilder) */}
      <div className="papyrus-dark p-6 rounded-2xl border border-amber-700/60 space-y-4 shadow-xl">
        <div className="space-y-1">
          <h2 className="text-base font-bold text-amber-200 font-serif flex items-center gap-2">
            <Palette className="w-5 h-5 text-amber-400" />
            <span>Schritt 2d:</span> Bild- & Grafikstil für die Stationen festlegen
          </h2>
          <p className="text-xs text-stone-300">
            Wähle die visuelle Ästhetik für die Illustrationen und Bildprompts passend zur Altersstufe und Stimmung deines Geschichtsprojekts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {[
            {
              id: 'pixel_art' as ArtStyleType,
              title: '16-Bit Pixel Art',
              badge: 'Klassiker / Retro',
              desc: 'Charmante Videospiel-Ästhetik à la Oregon Trail & LucasArts. Klare Formen, hoher Identifikationsfaktor für Schüler.',
              icon: '🕹️',
            },
            {
              id: 'photorealistic' as ArtStyleType,
              title: 'Fotorealistisch',
              badge: 'Dokumentar-Film',
              desc: 'Cinematische, kinoreife Bildsprache wie in einer Terra-X- oder BBC-Geschichtsdokumentation.',
              icon: '📸',
            },
            {
              id: 'comic_bd' as ArtStyleType,
              title: 'Comic & Graphic Novel',
              badge: 'Ligne Claire / Franko-Belgisch',
              desc: 'Dynamischer Comic-Stil (à la Asterix & Alix) mit klaren Tuschelinien und expressiven Charakteren.',
              icon: '🎨',
            },
            {
              id: 'oil_painting' as ArtStyleType,
              title: 'Historien-Ölgemälde',
              badge: 'Klassik / Museum',
              desc: 'Dramatische Meisterschaft des 19. Jahrhunderts mit feiner Pinselführung und meisterhaftem Hell-Dunkel.',
              icon: '🏛️',
            },
            {
              id: 'papyrus_ink' as ArtStyleType,
              title: 'Papyrus & Tuschezeichnung',
              badge: 'Antike Handschrift',
              desc: 'Historische Manuskript-Optik auf vergilbtem Papyrus oder Pergament mit feiner Buchmalerei.',
              icon: '📜',
            },
          ].map((style) => (
            <div
              key={style.id}
              onClick={() => {
                soundFX.playClick();
                setArtStyle(style.id);
              }}
              className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                artStyle === style.id
                  ? 'bg-amber-950/80 border-amber-400 ring-2 ring-amber-500/40 shadow-lg'
                  : 'bg-stone-900/80 border-stone-800 hover:border-amber-700/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-lg">{style.icon}</span>
                  <span className="text-[10px] font-mono font-bold text-amber-400 bg-black/50 px-2 py-0.5 rounded border border-amber-800/40">
                    {style.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-amber-200 mb-1">{style.title}</h3>
                <p className="text-[11px] text-stone-300 leading-snug">{style.desc}</p>
              </div>

              <div className="pt-2 mt-2 border-t border-stone-800/70 flex items-center justify-between text-[11px]">
                <span className="text-stone-400">Status:</span>
                <span className={artStyle === style.id ? 'text-amber-300 font-bold flex items-center gap-1' : 'text-stone-500'}>
                  {artStyle === style.id ? <CheckCircle className="w-3.5 h-3.5 text-amber-400 inline" /> : null}
                  {artStyle === style.id ? 'Ausgewählt' : 'Aktivieren'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STEP 3: The 4 Pillars & Resources */}
      <div className="papyrus-dark p-6 rounded-2xl border border-amber-700/60 space-y-4 shadow-xl">
        <h2 className="text-base font-bold text-amber-200 font-serif">
          Schritt 3: Das 4-Säulen-Modell & Spezialressourcen anpassen
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-stone-900/90 border border-amber-800/40 space-y-2">
              <span className="text-[11px] font-mono uppercase text-amber-400 block">Säule {idx + 1}</span>
              <input
                type="text"
                value={p.label}
                onChange={(e) => {
                  const copy = [...pillars] as [PillarConfig, PillarConfig, PillarConfig, PillarConfig];
                  copy[idx].label = e.target.value;
                  setPillars(copy);
                }}
                className="w-full px-2.5 py-1.5 rounded bg-stone-950 border border-stone-700 text-xs font-bold text-amber-200"
              />
              <input
                type="text"
                value={p.description}
                onChange={(e) => {
                  const copy = [...pillars] as [PillarConfig, PillarConfig, PillarConfig, PillarConfig];
                  copy[idx].description = e.target.value;
                  setPillars(copy);
                }}
                className="w-full px-2.5 py-1 rounded bg-stone-950 border border-stone-800 text-[11px] text-stone-400"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 flex items-center justify-between">
            <span className="text-xs text-stone-300">Spezialressource (Option D):</span>
            <div className="flex items-center gap-1.5">
              <input
                type="text"
                value={specialResourceEmoji}
                onChange={(e) => setSpecialResourceEmoji(e.target.value)}
                className="w-10 px-2 py-1 text-center rounded bg-stone-950 border border-stone-700 text-xs"
              />
              <input
                type="text"
                value={specialResourceName}
                onChange={(e) => setSpecialResourceName(e.target.value)}
                className="px-2.5 py-1 rounded bg-stone-950 border border-stone-700 text-xs text-amber-200"
              />
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 flex items-center justify-between">
            <span className="text-xs text-stone-300">Klassenstufen-Fokus:</span>
            <span className="text-xs font-bold text-amber-300">Dreifach-Adaption (5/6, 7–9, 10+)</span>
          </div>
        </div>
      </div>

      {/* Error Notice */}
      {errorNotice && (
        <div className="p-4 rounded-xl bg-red-950/90 border border-red-500 text-red-200 text-xs flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <span>{errorNotice}</span>
        </div>
      )}

      {/* GENERATE BUTTON */}
      <div className="pt-2 flex flex-col items-center gap-3">
        <button
          onClick={handleGenerateGame}
          disabled={isGenerating}
          className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-stone-950 font-black text-lg shadow-2xl flex items-center justify-center gap-3 cursor-pointer transition-all active:scale-98 disabled:opacity-50"
        >
          <Sparkles className="w-6 h-6 animate-spin-slow" />
          <span>{isGenerating ? "Erstelle didaktisches Spiel..." : `Neues ${roundCount}-Runden Spiel jetzt generieren`}</span>
        </button>

        {isGenerating && (
          <p className="text-xs text-amber-300 animate-pulse font-mono">
            {generationProgress}
          </p>
        )}
      </div>

      {/* Lehrplan-Bildergalerie & Prompt Modal */}
      <StationImagePromptModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        stationTitle={selectedTemplate.title}
        locationName={customEra}
        roundNumber={1}
        currentArtStyle={artStyle}
        suggestedPrompt={`16-bit pixel art style ancient historical illustration for ${customTitle} (${customEra}), educational adventure game visual, highly detailed, 16:9 aspect ratio`}
        onSelectImage={(url) => {
          setIsGalleryOpen(false);
        }}
      />
    </div>
  );
};
