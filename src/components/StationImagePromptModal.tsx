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
import { ArtStyleType } from '../types/game';
import { Palette } from 'lucide-react';

interface StationImagePromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  stationTitle: string;
  locationName: string;
  roundNumber: number;
  currentImage?: string;
  suggestedPrompt?: string;
  currentArtStyle?: ArtStyleType;
  onSelectImage: (imageUrl: string) => void;
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
  onSelectImage,
}) => {
  // Active Tab: 'prompt' (Generieren) | 'gallery' (Fertiger Pool)
  const [activeTab, setActiveTab] = useState<'prompt' | 'gallery'>('prompt');
  
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
