import React, { useState } from 'react';
import { geminiRotationService } from '../services/geminiRotation';
import { PREDEFINED_TEMPLATES, PredefinedTemplate } from '../templates/historyTemplates';
import { gameGeneratorService } from '../services/gameGenerator';
import { GameDefinition, PillarConfig } from '../types/game';
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
  Play
} from 'lucide-react';

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

  // Launch AI Generation
  const handleGenerateGame = async () => {
    soundFX.playBlessing();
    setIsGenerating(true);
    setErrorNotice(null);
    setGenerationProgress("Verbinde mit Gemini AI (Schlüssel-Rotation aktiv)...");

    try {
      setGenerationProgress("Generiere Stationen, didaktische Dilemmata und historische Lexikoneinträge...");
      const newGame = await gameGeneratorService.generateFullGame({
        title: customTitle,
        era: customEra,
        archetype: selectedTemplate.archetype,
        targetGrades,
        coreTopics,
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
          <span>{isGenerating ? "Erstelle didaktisches Spiel..." : "Neues 20-Runden Spiel jetzt generieren"}</span>
        </button>

        {isGenerating && (
          <p className="text-xs text-amber-300 animate-pulse font-mono">
            {generationProgress}
          </p>
        )}
      </div>
    </div>
  );
};
