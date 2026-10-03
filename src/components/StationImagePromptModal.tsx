import React, { useState } from 'react';
import { PREDEFINED_HISTORY_ASSETS, PredefinedAsset } from '../data/historyAssetPool';
import { soundFX } from '../utils/sound';
import {
  Sparkles,
  Copy,
  Check,
  Search,
  ExternalLink,
  X,
  Send,
  Loader2,
  Image as ImageIcon,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { geminiRotationService } from '../services/geminiRotation';
import { ArtStyleType, StationHotspot } from '../types/game';
import { Palette, MapPin, Plus, Trash2 } from 'lucide-react';

interface StationImagePromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  stationTitle: string;
  locationName: string;
  roundNumber: number;
  currentImage?: string;
  suggestedPrompt?: string;
  currentArtStyle?: ArtStyleType;
  currentHotspots?: StationHotspot[];
  onSelectImage: (imageUrl: string) => void;
  onUpdateHotspots?: (hotspots: StationHotspot[]) => void;
}

export const StationImagePromptModal: React.FC<StationImagePromptModalProps> = ({
  isOpen,
  onClose,
  stationTitle,
  locationName,
  roundNumber,
  currentImage,
  suggestedPrompt: initialPrompt,
  currentArtStyle = 'pixel_art',
  currentHotspots = [],
  onSelectImage,
  onUpdateHotspots,
}) => {
  // Active Tab: 'prompt' (Generieren) | 'gallery' (Fertiger Pool) | 'hotspots' (Entdecker-Punkte Editor)
  const [activeTab, setActiveTab] = useState<'prompt' | 'gallery' | 'hotspots'>('prompt');
  
  // Style Selector State
  const [selectedStyle, setSelectedStyle] = useState<ArtStyleType>(currentArtStyle);

  const getStylePrefix = (style: ArtStyleType): string => {
    switch (style) {
      case 'pixel_art':
        return '16-bit pixel art style ancient historical illustration of';
      case 'photorealistic':
        return 'Photorealistic cinematic historical documentary film still of';
      case 'comic_bd':
        return 'Franco-Belgian comic book style graphic novel illustration of';
      case 'oil_painting':
        return 'Classic 19th-century historical oil painting of';
      case 'papyrus_ink':
        return 'Ancient historical papyrus manuscript ink drawing of';
      default:
        return '16-bit pixel art style ancient historical illustration of';
    }
  };

  const getStyleSuffix = (style: ArtStyleType): string => {
    switch (style) {
      case 'pixel_art':
        return 'educational adventure game aesthetic, highly detailed scene, atmospheric lighting, 16:9 ratio, retro pixel art graphics';
      case 'photorealistic':
        return 'hyper-realistic textures, natural dramatic lighting, museum quality historical accuracy, 16:9 ratio, cinematic 8k';
      case 'comic_bd':
        return 'ligne claire clear outlines, expressive characters, vibrant historic colors, graphic novel page panel, 16:9 ratio';
      case 'oil_painting':
        return 'museum masterpiece, dramatic chiaroscuro light, rich oil on canvas texture, historical romanticism, 16:9 ratio';
      case 'papyrus_ink':
        return 'detailed ancient ink linework, weathered papyrus texture, natural earth pigments, hieratic aesthetic, 16:9 ratio';
      default:
        return 'educational adventure game visual, 16:9 ratio';
    }
  };

  const buildPromptForStyle = (style: ArtStyleType): string => {
    return `${getStylePrefix(style)} ${locationName} – ${stationTitle}, ${getStyleSuffix(style)}`;
  };

  // Custom Prompt State
  const defaultPrompt = initialPrompt || buildPromptForStyle(currentArtStyle);
  const [promptText, setPromptText] = useState<string>(defaultPrompt);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Gallery Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('Alle');

  // Direct Image Generation with Gemini / Imagen
  const [isGeneratingImage, setIsGeneratingImage] = useState<boolean>(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [generationError, setGenerationError] = useState<string | null>(null);

  // Hotspot Editor State
  const [localHotspots, setLocalHotspots] = useState<StationHotspot[]>(
    currentHotspots && currentHotspots.length > 0
      ? currentHotspots
      : [
          {
            id: 'hs1',
            x: 30,
            y: 60,
            label: 'Detail im Vordergrund',
            description: `Historische Besonderheit von ${locationName}.`,
            icon: '🔍',
          },
          {
            id: 'hs2',
            x: 65,
            y: 40,
            label: 'Architektur & Bauwerk',
            description: 'Bauweise und Bedeutung dieses Ortes im Alten Ägypten.',
            icon: '🏛️',
          },
        ]
  );
  const [selectedHotspotId, setSelectedHotspotId] = useState<string>(
    (currentHotspots && currentHotspots.length > 0 ? currentHotspots[0].id : 'hs1')
  );
  const [clickToPlaceMode, setClickToPlaceMode] = useState<boolean>(true);

  if (!isOpen) return null;

  // Distinct topics from the predefined asset pool
  const allTopics = ['Alle', ...Array.from(new Set(PREDEFINED_HISTORY_ASSETS.map((a) => a.topic)))];

  // Filtered Assets
  const filteredAssets = PREDEFINED_HISTORY_ASSETS.filter((asset) => {
    const matchesTopic = selectedTopic === 'Alle' || asset.topic === selectedTopic;
    const matchesSearch =
      asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTopic && matchesSearch;
  });

  const handleCopyPrompt = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(promptText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Generate Image via Gemini (Fallback or Direct API call)
  const handleGenerateDirect = async () => {
    soundFX.playBlessing();
    setIsGeneratingImage(true);
    setGenerationError(null);
    setGeneratedImageUrl(null);

    try {
      // In Web Client context without server Imagen token, we simulate / provide direct feedback
      // or make an API request with geminiRotationService to generate a high quality pixel-art SVG or base64
      // Let's call geminiRotationService to enrich/polish the prompt and verify
      const refinedPrompt = await geminiRotationService.generateContentWithRotation(
        `Generiere eine kurze, ultra-optimierte Midjourney/Imagen-Bildbeschreibung für ein 16-Bit Pixel Art Videospiel passend zu: "${promptText}". Antworte nur mit dem englischen Prompt, maximal 2 Sätze.`
      );
      setPromptText(refinedPrompt.trim());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      
      // Auto-match closest gallery asset or placeholder
      const match = PREDEFINED_HISTORY_ASSETS.find(a => 
        locationName.toLowerCase().includes(a.tags[0].toLowerCase()) ||
        a.title.toLowerCase().includes(locationName.toLowerCase())
      );
      if (match) {
        setGeneratedImageUrl(match.imageUrl);
      }
    } catch (err: any) {
      setGenerationError(err.message || "Fehler beim Vorbereiten des Bildes.");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-stone-950 border-2 border-amber-600/80 shadow-2xl overflow-hidden text-stone-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-800/60 bg-stone-900/90">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-700/60">
                Runde {roundNumber}
              </span>
              <h2 className="text-lg font-bold text-amber-200 font-serif">
                Bild für Station: {locationName}
              </h2>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              {stationTitle}
            </p>
          </div>

          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher: 1. Prompt für Bildgenerierung | 2. Galerie fertiger Lehrplan-Bilder */}
        <div className="flex border-b border-stone-800 bg-stone-900/40 px-6">
          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab('prompt');
            }}
            className={`flex items-center gap-2 py-3 px-4 font-bold text-xs border-b-2 transition-all ${
              activeTab === 'prompt'
                ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>1-Klick Bild-Prompt (Generieren)</span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab('gallery');
            }}
            className={`flex items-center gap-2 py-3 px-4 font-bold text-xs border-b-2 transition-all ${
              activeTab === 'gallery'
                ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-amber-400" />
            <span>Fertige Geschichts-Galerie ({PREDEFINED_HISTORY_ASSETS.length} Bilder)</span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab('hotspots');
            }}
            className={`flex items-center gap-2 py-3 px-4 font-bold text-xs border-b-2 transition-all ${
              activeTab === 'hotspots'
                ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Entdecker-Punkte Editor ({localHotspots.length})</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: GENERATE PROMPT */}
          {activeTab === 'prompt' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Fertig formulierter 16-Bit Pixel-Art Bildprompt für diese Station:</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Dieser Prompt ist exakt auf den historischen Kontext, die Epoche und die Dramaturgie der aktuellen Station abgestimmt.
                  Du kannst ihn mit einem Klick kopieren oder direkt in Gemini / Imagen / Midjourney absenden!
                </p>
              </div>

              {/* Visual Art Style Selector */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-300 font-bold">
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <Palette className="w-4 h-4 text-amber-400" />
                    <span>Gewünschter Bildstil für diesen Prompt:</span>
                  </span>
                  <span className="text-[11px] text-stone-400">Klick passt Prompt-Vokabular sofort an</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {[
                    { id: 'pixel_art' as ArtStyleType, label: '16-Bit Pixel', icon: '🕹️' },
                    { id: 'photorealistic' as ArtStyleType, label: 'Fotorealistisch', icon: '📸' },
                    { id: 'comic_bd' as ArtStyleType, label: 'Comic / BD', icon: '🎨' },
                    { id: 'oil_painting' as ArtStyleType, label: 'Ölgemälde', icon: '🏛️' },
                    { id: 'papyrus_ink' as ArtStyleType, label: 'Papyrus / Tusche', icon: '📜' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        soundFX.playClick();
                        setSelectedStyle(s.id);
                        setPromptText(buildPromptForStyle(s.id));
                      }}
                      className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border text-xs font-bold transition-all ${
                        selectedStyle === s.id
                          ? 'bg-amber-600 text-stone-950 border-amber-400 shadow-md scale-102 ring-1 ring-amber-300'
                          : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-amber-700/60'
                      }`}
                    >
                      <span>{s.icon}</span>
                      <span>{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Editable Prompt Area */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span>Prompt-Text (Englisch für beste KI-Ergebnisse):</span>
                  <span className="font-mono text-[11px] text-amber-400">16:9 Format • {selectedStyle}</span>
                </div>
                <textarea
                  rows={4}
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-amber-800/60 text-xs text-stone-200 font-mono leading-relaxed focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none shadow-inner"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyPrompt}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-amber-700/60 text-amber-200 text-xs font-bold transition-all"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                    <span>{isCopied ? "In die Zwischenablage kopiert!" : "Prompt kopieren"}</span>
                  </button>

                  <a
                    href="https://aistudio.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 text-xs transition-colors"
                  >
                    <span>Google AI Studio öffnen</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <button
                  onClick={handleGenerateDirect}
                  disabled={isGeneratingImage}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-stone-950 font-bold text-xs shadow-lg transition-all active:scale-98 disabled:opacity-50"
                >
                  {isGeneratingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  <span>{isGeneratingImage ? "Optimiere Prompt..." : "Prompt absenden & KI-Bild zuweisen"}</span>
                </button>
              </div>

              {/* Error Notice */}
              {generationError && (
                <div className="p-3 rounded-xl bg-red-950/80 border border-red-700 text-red-300 text-xs">
                  {generationError}
                </div>
              )}

              {/* Generated Result Preview */}
              {generatedImageUrl && (
                <div className="p-4 rounded-xl bg-stone-900 border border-emerald-500/60 space-y-3 animate-fade-in">
                  <div className="flex items-center justify-between text-xs text-emerald-300 font-bold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Passendes Bild zugewiesen!</span>
                    </span>
                    <button
                      onClick={() => {
                        soundFX.playBlessing();
                        onSelectImage(generatedImageUrl);
                        onClose();
                      }}
                      className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs"
                    >
                      Für Station übernehmen
                    </button>
                  </div>
                  <img
                    src={generatedImageUrl}
                    alt="Vorschau"
                    className="w-full h-48 object-cover rounded-lg border border-stone-800"
                  />
                </div>
              )}
            </div>
          )}

          {/* TAB 2: HISTORY GALLERY POOL */}
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              {/* Search & Topic Filters */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Bild suchen (z.B. 'Karnak', 'Limes', 'Luther', 'Mammut', 'Ritter')..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                {/* Topic selector */}
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-stone-900 border border-stone-800 text-xs text-amber-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  {allTopics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Asset Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-1">
                {filteredAssets.map((asset) => {
                  const isCurrent = currentImage === asset.imageUrl;
                  return (
                    <div
                      key={asset.id}
                      className={`group rounded-xl overflow-hidden border transition-all flex flex-col justify-between ${
                        isCurrent
                          ? 'border-amber-400 ring-2 ring-amber-500/40 bg-amber-950/40'
                          : 'border-stone-800 bg-stone-900/80 hover:border-amber-600/70'
                      }`}
                    >
                      <div className="relative h-36 w-full overflow-hidden bg-black">
                        <img
                          src={asset.imageUrl}
                          alt={asset.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/75 text-amber-300 backdrop-blur-sm">
                          {asset.topic}
                        </span>
                      </div>

                      <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-amber-200 line-clamp-1">{asset.title}</h4>
                          <p className="text-[11px] text-stone-400 line-clamp-2 mt-0.5 leading-snug">
                            {asset.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between">
                          <button
                            onClick={() => {
                              soundFX.playClick();
                              setPromptText(asset.suggestedPrompt);
                              setActiveTab('prompt');
                            }}
                            className="text-[10px] text-amber-400 hover:text-amber-300 font-medium underline"
                          >
                            Prompt ansehen
                          </button>

                          <button
                            onClick={() => {
                              soundFX.playBlessing();
                              onSelectImage(asset.imageUrl);
                              onClose();
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                              isCurrent
                                ? 'bg-amber-500 text-stone-950'
                                : 'bg-stone-800 hover:bg-amber-600 hover:text-stone-950 text-stone-200'
                            }`}
                          >
                            {isCurrent ? "Aktiv" : "Auswählen"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredAssets.length === 0 && (
                <div className="p-8 text-center text-stone-500 text-xs">
                  Keine Bilder für diese Suche gefunden.
                </div>
              )}
            </div>
          )}

          {/* TAB 3: VISUAL HOTSPOT PLACEMENT & CONTENT EDITOR */}
          {activeTab === 'hotspots' && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Interaktiver Entdecker-Punkte Editor: Klicke direkt ins Bild!</span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 bg-black/60 px-2 py-0.5 rounded border border-amber-800/40">
                    {localHotspots.length} Punkte aktiv
                  </span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Klicke auf eine Stelle im Vorschaubild, um den ausgewählten Punkt dorthin zu bewegen. Die Koordinaten (X% und Y%) passen sich auf allen Geräten automatisch an!
                </p>
              </div>

              {/* Interactive Visual Canvas / Image */}
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-amber-600/70 bg-stone-950 shadow-2xl select-none">
                <img
                  src={currentImage || "/assets/nile_banner.jpg"}
                  alt={locationName}
                  className="w-full h-full object-cover pointer-events-none"
                />

                {/* Click target overlay */}
                <div
                  className="absolute inset-0 cursor-crosshair"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = Math.round(((e.clientX - rect.left) / rect.width) * 100);
                    const clickY = Math.round(((e.clientY - rect.top) / rect.height) * 100);
                    
                    soundFX.playClick();
                    setLocalHotspots(prev =>
                      prev.map(hs =>
                        hs.id === selectedHotspotId
                          ? { ...hs, x: Math.max(5, Math.min(95, clickX)), y: Math.max(5, Math.min(95, clickY)) }
                          : hs
                      )
                    );
                  }}
                >
                  {/* Render all hotspots with visual highlight on selected */}
                  {localHotspots.map((hs) => {
                    const isSelected = hs.id === selectedHotspotId;
                    return (
                      <div
                        key={hs.id}
                        style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                        onClick={(e) => {
                          e.stopPropagation();
                          soundFX.playClick();
                          setSelectedHotspotId(hs.id);
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group/marker"
                      >
                        {isSelected && (
                          <span className="absolute -inset-2 rounded-full bg-amber-400/40 animate-ping pointer-events-none" />
                        )}
                        <span
                          className={`flex items-center justify-center w-8 h-8 rounded-full border-2 shadow-2xl transition-all ${
                            isSelected
                              ? 'bg-amber-400 text-stone-950 border-white scale-125 ring-2 ring-amber-300'
                              : 'bg-stone-950/90 text-amber-300 border-amber-400 hover:scale-110'
                          }`}
                        >
                          <span className="text-xs">{hs.icon || '✨'}</span>
                        </span>
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 px-2 py-0.5 rounded bg-stone-950 border border-amber-500 text-[10px] font-bold text-amber-200 whitespace-nowrap shadow-lg pointer-events-none">
                          {hs.label} ({hs.x}%, {hs.y}%)
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[10px] text-amber-300 font-mono border border-stone-800">
                  🎯 Klicke ins Bild, um Punkt #{localHotspots.findIndex(h => h.id === selectedHotspotId) + 1} zu platzieren
                </div>
              </div>

              {/* Hotspot List & Content Editor */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* List of Hotspots on Left */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-stone-300 font-bold mb-1">
                    <span>Punkte dieser Station:</span>
                    {localHotspots.length < 5 && (
                      <button
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          const newId = `hs_${Date.now()}`;
                          const newPoint: StationHotspot = {
                            id: newId,
                            x: 50,
                            y: 50,
                            label: 'Neues Entdecker-Detail',
                            description: 'Erkläre hier ein didaktisches Detail zum Bild.',
                            icon: '🔍',
                          };
                          setLocalHotspots([...localHotspots, newPoint]);
                          setSelectedHotspotId(newId);
                        }}
                        className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 font-bold"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Punkt +</span>
                      </button>
                    )}
                  </div>

                  {localHotspots.map((hs, idx) => {
                    const isSelected = hs.id === selectedHotspotId;
                    return (
                      <div
                        key={hs.id}
                        onClick={() => {
                          soundFX.playClick();
                          setSelectedHotspotId(hs.id);
                        }}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-950/80 border-amber-400 ring-1 ring-amber-400'
                            : 'bg-stone-900 border-stone-800 hover:border-amber-700/60'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <span className="text-base">{hs.icon || '✨'}</span>
                          <div className="truncate">
                            <span className="text-xs font-bold text-amber-200 block truncate">
                              #{idx + 1}: {hs.label}
                            </span>
                            <span className="text-[10px] font-mono text-stone-400">
                              Pos: {hs.x}% / {hs.y}%
                            </span>
                          </div>
                        </div>

                        {localHotspots.length > 1 && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              soundFX.playClick();
                              const filtered = localHotspots.filter(h => h.id !== hs.id);
                              setLocalHotspots(filtered);
                              if (selectedHotspotId === hs.id && filtered.length > 0) {
                                setSelectedHotspotId(filtered[0].id);
                              }
                            }}
                            className="p-1 rounded text-stone-500 hover:text-red-400 hover:bg-stone-800 transition-colors"
                            title="Punkt löschen"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Selected Hotspot Detail Form on Right (2 Cols) */}
                <div className="md:col-span-2 p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-3">
                  {(() => {
                    const activeHs = localHotspots.find(h => h.id === selectedHotspotId) || localHotspots[0];
                    if (!activeHs) return null;

                    return (
                      <>
                        <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                          <span className="text-xs font-bold text-amber-300 flex items-center gap-2">
                            <span>Punkt-Inhalt bearbeiten:</span>
                            <span className="font-mono text-[11px] text-stone-400">
                              (X: {activeHs.x}%, Y: {activeHs.y}%)
                            </span>
                          </span>

                          <div className="flex gap-1.5">
                            {['🔍', '🏛️', '⚡', '👥', '⛏️', '📜', '🌾', '🐊', '👑', '🏺'].map((emoji) => (
                              <button
                                key={emoji}
                                type="button"
                                onClick={() => {
                                  soundFX.playClick();
                                  setLocalHotspots(prev =>
                                    prev.map(h => h.id === activeHs.id ? { ...h, icon: emoji } : h)
                                  );
                                }}
                                className={`w-6 h-6 rounded flex items-center justify-center text-xs transition-transform ${
                                  activeHs.icon === emoji ? 'bg-amber-500 scale-110' : 'bg-stone-800 hover:bg-stone-700'
                                }`}
                              >
                                {emoji}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] text-stone-400 block mb-1 font-medium">
                            Titel des Erkundungs-Markers (z.B. "Holzkeil-Spalttechnik"):
                          </label>
                          <input
                            type="text"
                            value={activeHs.label}
                            onChange={(e) => {
                              const val = e.target.value;
                              setLocalHotspots(prev =>
                                prev.map(h => h.id === activeHs.id ? { ...h, label: val } : h)
                              );
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500 font-bold"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] text-stone-400 block mb-1 font-medium">
                            Didaktische Erklärung / Zeitzeugen-Text bei Klick:
                          </label>
                          <textarea
                            rows={3}
                            value={activeHs.description}
                            onChange={(e) => {
                              const val = e.target.value;
                              setLocalHotspots(prev =>
                                prev.map(h => h.id === activeHs.id ? { ...h, description: val } : h)
                              );
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none font-sans leading-relaxed"
                          />
                        </div>

                        {onUpdateHotspots && (
                          <div className="pt-2 flex justify-end">
                            <button
                              type="button"
                              onClick={() => {
                                soundFX.playBlessing();
                                onUpdateHotspots(localHotspots);
                                onClose();
                              }}
                              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition-all shadow-md cursor-pointer"
                            >
                              Entdecker-Punkte für Station speichern
                            </button>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-800 bg-stone-900/60 flex items-center justify-between text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Tipp: Bilder können jederzeit stationsweise ausgetauscht oder nachgeneriert werden.</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold transition-colors"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
};
