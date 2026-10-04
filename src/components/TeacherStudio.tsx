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
  Camera,
  Palette,
  Share2,
  Eye,
  Lock,
  Unlock,
  Copy,
  X,
  Image as ImageIcon
} from 'lucide-react';
import { StationImagePromptModal } from './StationImagePromptModal';
import { gameStorageService, PublishedGameRecord } from '../services/gameStorage';
import { googleDriveSyncService } from '../services/googleDriveSync';

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
  const [gradeLevel, setGradeLevel] = useState<import('../types/game').GradeLevel>('mittelstufe');
  const [targetGrades, setTargetGrades] = useState<string>('Mittelstufe (Klasse 7–9)');
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

  // Published Games Management (Lehrer-Freigabe & geschützte Ansicht)
  const [publishedGames, setPublishedGames] = useState<PublishedGameRecord[]>(gameStorageService.getPublishedGames());
  const [createdGamePreview, setCreatedGamePreview] = useState<GameDefinition | null>(null);
  const [publishedNotice, setPublishedNotice] = useState<string | null>(null);
  const [copiedShareCode, setCopiedShareCode] = useState<string | null>(null);
  const [boardModalCode, setBoardModalCode] = useState<{ code: string; title: string } | null>(null);
  const [mobileTab, setMobileTab] = useState<'create' | 'published' | 'keys'>('create');

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
      setGenerationProgress(`Generiere ${roundCount} didaktische Stationen gezielt für ${targetGrades}...`);
      const newGame = await gameGeneratorService.generateFullGame({
        title: customTitle,
        era: customEra,
        archetype: selectedTemplate.archetype,
        gradeLevel,
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
        onProgress: (status) => setGenerationProgress(status),
      });

      setGenerationProgress("Spiel erfolgreich erstellt!");
      setTimeout(() => {
        setIsGenerating(false);
        setCreatedGamePreview(newGame);
        soundFX.playCoronation();
      }, 700);
    } catch (err: any) {
      console.error(err);
      setErrorNotice(err.message || "Fehler bei der Generierung.");
      setIsGenerating(false);
      soundFX.playCrisis();
    }
  };

  // Freigabe / Publish Game for Students & Sync to Google Drive
  const [isSyncingDrive, setIsSyncingDrive] = useState(false);

  const handlePublishGame = async (gameToPublish: GameDefinition) => {
    soundFX.playBlessing();
    const record = gameStorageService.publishGame(gameToPublish);
    setPublishedGames(gameStorageService.getPublishedGames());
    setPublishedNotice(`Spiel lokal freigegeben! Freigabe-Code: ${record.shareCode}`);
    setBoardModalCode({ code: record.shareCode, title: gameToPublish.title });

    // Sync to Google Drive in the background into dedicated subfolder
    setIsSyncingDrive(true);
    try {
      const driveRes = await googleDriveSyncService.saveGameToDrive(gameToPublish, record.shareCode);
      if (driveRes.success) {
        setPublishedNotice(`✅ Spiel erfolgreich auf Google Drive synchronisiert! (Ordner: ${driveRes.folderName})`);
      }
    } catch (err) {
      console.error("Google Drive sync failed:", err);
    } finally {
      setIsSyncingDrive(false);
    }
  };

  const handleUnpublishGame = (gameId: string) => {
    soundFX.playClick();
    gameStorageService.unpublishGame(gameId);
    setPublishedGames(gameStorageService.getPublishedGames());
  };

  const handleCopyCode = (code: string) => {
    soundFX.playClick();
    navigator.clipboard.writeText(code);
    setCopiedShareCode(code);
    setTimeout(() => setCopiedShareCode(null), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-6 sm:space-y-8 animate-fade-in text-stone-100 pb-24 sm:pb-8">
      {/* Studio Header (Mobile optimized with wrap & responsive text) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-800/60 pb-4 sm:pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 sm:p-3 rounded-2xl bg-amber-500/20 border border-amber-500/50 text-amber-300 shrink-0">
            <Wand2 className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-3xl font-extrabold text-amber-200 font-serif m-0">
                History Trail Studio
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Mobil & Desktop
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-400 mt-0.5">
              Spiele für den Unterricht auf Knopfdruck erstellen & per Code freigeben
            </p>
          </div>
        </div>

        {/* Top Actions: Wrapped & touch-optimized */}
        <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <button
            onClick={() => {
              soundFX.playClick();
              setIsGalleryOpen(true);
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900 border border-amber-700/60 hover:border-amber-400 text-xs text-amber-300 font-bold transition-all cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden xs:inline">Galerie</span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setShowKeyManager(!showKeyManager);
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900 border border-amber-700/60 hover:border-amber-400 text-xs text-amber-300 font-mono transition-all cursor-pointer"
          >
            <Key className="w-3.5 h-3.5 text-amber-400" />
            <span>{keys.length}/4 Keys</span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              onCloseStudio();
            }}
            className="px-3.5 py-2 rounded-xl bg-amber-700/70 hover:bg-amber-600 text-amber-100 text-xs font-bold transition-all cursor-pointer"
          >
            ← Zurück
          </button>
        </div>
      </div>

      {/* MOBILE SEGMENTED CONTROL: Auf Smartphones zwischen Spiel-Bau, Freigaben & Setup wechseln */}
      <div className="flex sm:hidden p-1 rounded-xl bg-stone-900/90 border border-stone-800 text-xs font-bold">
        <button
          onClick={() => {
            soundFX.playClick();
            setMobileTab('create');
          }}
          className={`flex-1 py-2 rounded-lg text-center transition-all ${
            mobileTab === 'create'
              ? 'bg-amber-600 text-stone-950 shadow-md font-black'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          ⚡ Spiel bauen
        </button>
        <button
          onClick={() => {
            soundFX.playClick();
            setMobileTab('published');
          }}
          className={`flex-1 py-2 rounded-lg text-center transition-all relative ${
            mobileTab === 'published'
              ? 'bg-amber-600 text-stone-950 shadow-md font-black'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <span>Freigaben</span>
          {publishedGames.length > 0 && (
            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-stone-950 text-amber-400 text-[10px]">
              {publishedGames.length}
            </span>
          )}
        </button>
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

      {/* Published Notice Banner */}
      {publishedNotice && (
        <div className="p-4 rounded-xl bg-emerald-950/90 border border-emerald-500 text-emerald-200 text-xs flex items-center justify-between animate-fade-in shadow-lg">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="font-semibold">{publishedNotice}</span>
          </div>
          <button
            onClick={() => setPublishedNotice(null)}
            className="text-stone-400 hover:text-white px-2"
          >
            ×
          </button>
        </div>
      )}

      {/* GESCHÜTZTE VORSCHAU DES NEU ERSTELLTEN SPIELS (Vor Freigabe durch Lehrer) */}
      {createdGamePreview && (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900 to-amber-950/60 border-2 border-amber-400 shadow-2xl space-y-5 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-700/60 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                  🔒 Geschützte Lehrer-Ansicht (Neu generiert)
                </span>
                <h3 className="text-xl font-black text-amber-200 font-serif m-0">
                  {createdGamePreview.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePublishGame(createdGamePreview)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-stone-950 text-xs font-bold shadow-lg transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Für Schüler freigeben</span>
              </button>

              <button
                onClick={() => onLoadGameToPlayer(createdGamePreview)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition-all cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>Selbst anspielen</span>
              </button>

              <button
                onClick={() => setCreatedGamePreview(null)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
                title="Vorschau schließen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-xs text-stone-300">
            Dieses Spiel ist vorerst nur in deinem Studio sichtbar. Schüler können es erst betreten, nachdem du es freigegeben hast.
          </p>

          {/* Quick Round Overview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-60 overflow-y-auto pr-1">
            {createdGamePreview.rounds.map((r, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-stone-950/80 border border-amber-900/40 text-xs space-y-1">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">
                  Station {r.roundNumber}: {r.locationName}
                </span>
                <h4 className="font-bold text-stone-200 line-clamp-1">{r.milestoneTitle}</h4>
                <p className="text-[11px] text-stone-400 line-clamp-2">{r.situation.mittelstufe}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FREIGEGEBENE SCHÜLER-SPIELE (Aktive Freigaben) */}
      {publishedGames.length > 0 && (
        <div className="p-5 rounded-2xl bg-stone-900/90 border border-emerald-600/60 shadow-xl space-y-3 animate-fade-in">
          <div className="flex items-center justify-between border-b border-stone-800 pb-2">
            <div className="flex items-center gap-2 text-emerald-300 text-sm font-bold">
              <Share2 className="w-4 h-4 text-emerald-400" />
              <span>Aktive Schüler-Freigaben ({publishedGames.length} Spiele freigeschaltet)</span>
            </div>
            <span className="text-[11px] text-stone-400">Schüler treten mit dem Freigabe-Code bei</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {publishedGames.map((pub) => (
              <div
                key={pub.id}
                className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 hover:border-emerald-500/60 transition-all space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-stone-400">{pub.publishedAt}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/60 text-[10px] font-mono font-bold">
                      Code: {pub.shareCode}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-amber-200">{pub.game.title}</h4>
                  <p className="text-[11px] text-stone-400">{pub.game.era}</p>
                </div>

                <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyCode(pub.shareCode)}
                      className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 cursor-pointer"
                      title="Code kopieren"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedShareCode === pub.shareCode ? "Kopiert!" : "Kopieren"}</span>
                    </button>

                    <button
                      onClick={() => setBoardModalCode({ code: pub.shareCode, title: pub.game.title })}
                      className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/50 text-amber-300 text-[10px] font-bold hover:bg-amber-500/30 transition-colors cursor-pointer"
                      title="Großanzeige für Beamer / Tafel"
                    >
                      📺 Tafel-Modus
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onLoadGameToPlayer(pub.game)}
                      className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 cursor-pointer"
                      title="Als Schüler starten"
                    >
                      <Play className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                    <button
                      onClick={() => handleUnpublishGame(pub.id)}
                      className="p-1.5 rounded-lg bg-stone-800 hover:bg-red-900/60 text-stone-400 hover:text-red-300 transition-colors cursor-pointer"
                      title="Freigabe beenden"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
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

      {/* STEP 2a: Grade Level Selection (Lehrkraft legt Klassenstufe für Schüler fest) */}
      <div className="papyrus-dark p-6 rounded-2xl border border-amber-700/60 space-y-4 shadow-xl">
        <div className="space-y-1">
          <h2 className="text-base font-bold text-amber-200 font-serif flex items-center gap-2">
            <span>Schritt 2a:</span> Klassenstufe festlegen (Gezieltes Sprachniveau)
          </h2>
          <p className="text-xs text-stone-300">
            Die KI generiert Texte, Stationen und historische Erklärungen <strong>ausschließlich und passgenau für deine gewählte Stufe</strong> – ohne unnötige Mehrfachgenerierung anderer Klassenstufen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {[
            {
              id: 'unterstufe' as import('../types/game').GradeLevel,
              title: 'Unterstufe',
              badge: '5.–6. Klasse',
              desc: 'Lebendige, anschauliche Sprache, klare moralische Dilemmata, einfache geschichtliche Begriffe.',
            },
            {
              id: 'mittelstufe' as import('../types/game').GradeLevel,
              title: 'Mittelstufe',
              badge: '7.–9. Klasse',
              desc: 'Ausgewogene historische Fachsprache, multiperspektivische Interessenkonflikte und Grauzonen.',
            },
            {
              id: 'oberstufe' as import('../types/game').GradeLevel,
              title: 'Oberstufe',
              badge: 'ab 10. Klasse',
              desc: 'Quellennah, anspruchsvolle Staatsphilosophie, geopolitische Kausalitäten und Abstraktionsgrad.',
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => {
                soundFX.playClick();
                setGradeLevel(item.id);
                setTargetGrades(`${item.title} (${item.badge})`);
              }}
              className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                gradeLevel === item.id
                  ? 'bg-amber-950/80 border-amber-400 ring-2 ring-amber-500/40 shadow-lg'
                  : 'bg-stone-900/80 border-stone-800 hover:border-amber-700/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-amber-200">{item.title}</h3>
                  <span className="text-[10px] font-mono text-amber-400 font-bold bg-black/50 px-2 py-0.5 rounded border border-amber-800/40">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-stone-300 leading-snug">{item.desc}</p>
              </div>

              <div className="pt-2 mt-2 border-t border-stone-800/70 flex items-center justify-between text-[11px]">
                <span className="text-stone-400">Aktiv:</span>
                <span className={gradeLevel === item.id ? 'text-amber-300 font-bold flex items-center gap-1' : 'text-stone-500'}>
                  {gradeLevel === item.id ? <CheckCircle className="w-3.5 h-3.5 text-amber-400 inline" /> : null}
                  {gradeLevel === item.id ? 'Gewählt' : 'Auswählen'}
                </span>
              </div>
            </div>
          ))}
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
                <ImageIcon className="w-4 h-4 text-amber-400" />
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
          className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-stone-950 font-black text-base sm:text-lg shadow-2xl flex items-center justify-center gap-3 cursor-pointer transition-all active:scale-98 disabled:opacity-50"
        >
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-spin-slow" />
          <span>{isGenerating ? "Erstelle didaktisches Spiel..." : `Neues ${roundCount}-Runden Spiel jetzt generieren`}</span>
        </button>

        {isGenerating && (
          <p className="text-xs text-amber-300 animate-pulse font-mono">
            {generationProgress}
          </p>
        )}
      </div>

      {/* STICKY BOTTOM QUICK ACTION BAR FOR SMARTPHONES (Handy-Schnellzugriff) */}
      <div className="fixed sm:hidden bottom-0 left-0 right-0 p-3 bg-stone-950/95 border-t border-amber-600/70 backdrop-blur-lg flex items-center justify-between gap-3 z-40 shadow-2xl">
        <div className="leading-tight">
          <span className="text-[10px] font-mono text-stone-400 uppercase block">Vorlage aktiv:</span>
          <span className="text-xs font-bold text-amber-300 truncate max-w-[150px] block">
            {selectedTemplate.title}
          </span>
        </div>

        <button
          onClick={handleGenerateGame}
          disabled={isGenerating}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 active:scale-95 text-stone-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>{isGenerating ? "Erstelle..." : "Jetzt generieren"}</span>
        </button>
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

      {/* TAFEL-MODUS GROSSANZEIGE FÜR BEAMER & SMARTBOARD */}
      {boardModalCode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fade-in text-stone-100">
          <div className="w-full max-w-2xl p-8 sm:p-12 rounded-3xl bg-stone-950 border-4 border-amber-500 shadow-2xl text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setBoardModalCode(null)}
                className="p-2.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/60 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest inline-block">
                📺 Tafel- & Beamer-Anzeige für Schüler
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-serif">
                {boardModalCode.title}
              </h2>
              <p className="text-sm text-stone-300">
                Schüler rufen die App auf und geben folgenden Code ein:
              </p>
            </div>

            {/* Giant Classroom Code */}
            <div className="py-8 px-6 rounded-3xl bg-stone-900/90 border-2 border-amber-400/80 shadow-inner flex flex-col items-center justify-center">
              <span className="text-6xl sm:text-8xl font-black font-mono tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-400 select-all">
                {boardModalCode.code}
              </span>
              <span className="text-[11px] font-mono text-emerald-400 mt-3 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Synchronisiert mit Google Drive (Heimbürgeschule / Klasse)</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleCopyCode(boardModalCode.code)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <Copy className="w-4 h-4" />
                <span>{copiedShareCode === boardModalCode.code ? "Code kopiert!" : "Code kopieren"}</span>
              </button>

              <button
                onClick={() => setBoardModalCode(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-sm transition-all cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
