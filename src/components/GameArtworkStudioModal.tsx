import React, { useState } from 'react';
import { GameDefinition } from '../types/game';
import { soundFX } from '../utils/sound';
import {
  Sparkles,
  Copy,
  Check,
  FolderOpen,
  Upload,
  X,
  ExternalLink,
  Image as ImageIcon,
  CheckCircle,
  Camera,
  Play,
  Share2
} from 'lucide-react';
import { PREDEFINED_HISTORY_ASSETS } from '../data/historyAssetPool';

interface GameArtworkStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  game: GameDefinition;
  onSaveGame: (updatedGame: GameDefinition) => void;
}

export const GameArtworkStudioModal: React.FC<GameArtworkStudioModalProps> = ({
  isOpen,
  onClose,
  game,
  onSaveGame,
}) => {
  const [localGame, setLocalGame] = useState<GameDefinition>({ ...game });
  const [copiedIndex, setCopiedIndex] = useState<number | 'hero' | null>(null);
  const [isAllCopied, setIsAllCopied] = useState<boolean>(false);
  const [dragOverTarget, setDragOverTarget] = useState<number | 'hero' | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'hero' | 'stations'>('all');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopySinglePrompt = (prompt: string, target: number | 'hero') => {
    soundFX.playClick();
    navigator.clipboard.writeText(prompt);
    setCopiedIndex(target);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAllPrompts = () => {
    soundFX.playBlessing();
    let text = `=== BILD-PROMPTS FÜR "${localGame.title}" (${localGame.era}) ===\n\n`;
    if (localGame.heroPrompt) {
      text += `[HERO COVER-BANNER]\n${localGame.heroPrompt}\n\n`;
    }
    localGame.rounds.forEach((r) => {
      text += `[STATION ${r.roundNumber}: ${r.locationName} • ${r.milestoneTitle}]\n${r.imagePrompt || 'Kein Prompt vorhanden'}\n\n`;
    });

    navigator.clipboard.writeText(text);
    setIsAllCopied(true);
    setTimeout(() => setIsAllCopied(false), 2500);
  };

  const handleFileDrop = (e: React.DragEvent, target: number | 'hero') => {
    e.preventDefault();
    e.stopPropagation();
    setDragOverTarget(null);

    const files = e.dataTransfer.files;
    if (files && files.length > 0 && files[0].type.startsWith('image/')) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        soundFX.playBlessing();
        if (target === 'hero') {
          setLocalGame((prev) => ({ ...prev, heroImage: result }));
          setSuccessToast(`Hero Cover-Bild "${file.name}" per Drag & Drop zugewiesen!`);
        } else {
          setLocalGame((prev) => {
            const updated = [...prev.rounds];
            updated[target] = { ...updated[target], imagePath: result };
            return { ...prev, rounds: updated };
          });
          setSuccessToast(`Bild "${file.name}" für Station ${target + 1} per Drag & Drop zugewiesen!`);
        }
        setTimeout(() => setSuccessToast(null), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, target: number | 'hero') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      soundFX.playBlessing();
      if (target === 'hero') {
        setLocalGame((prev) => ({ ...prev, heroImage: result }));
        setSuccessToast(`Hero Cover-Bild "${file.name}" übernommen!`);
      } else {
        setLocalGame((prev) => {
          const updated = [...prev.rounds];
          updated[target] = { ...updated[target], imagePath: result };
          return { ...prev, rounds: updated };
        });
        setSuccessToast(`Bild "${file.name}" für Station ${target + 1} übernommen!`);
      }
      setTimeout(() => setSuccessToast(null), 3000);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveAndClose = () => {
    soundFX.playBlessing();
    onSaveGame(localGame);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl max-h-[94vh] flex flex-col rounded-2xl bg-stone-950 border-2 border-amber-600/80 shadow-2xl overflow-hidden text-stone-100">
        
        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-5 py-4 border-b border-amber-800/60 bg-stone-900/90">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300">
                <Camera className="w-5 h-5 text-amber-400" />
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-amber-200 font-serif m-0">
                Bild-Studio & Prompt-Zentrale: {localGame.title}
              </h2>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              Generiere passende Bilder mit externen KIs (Midjourney, Imagen, DALL-E) und ziehe sie direkt per <strong>Drag & Drop</strong> auf die Stationen!
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleCopyAllPrompts}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition-all shadow-md cursor-pointer"
              title="Kopiert alle 20 Prompts plus Hero als formatierte Textliste"
            >
              {isAllCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isAllCopied ? "Alle Prompts kopiert!" : "Alle Prompts kopieren"}</span>
            </button>

            <a
              href="https://drive.google.com/drive/folders/1HMsm3Bl6WziQdpMZK1t3FypCsQHs22jG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-stone-900 border border-amber-700/60 hover:border-amber-400 text-xs text-amber-300 font-bold transition-all"
              title="Google Drive Cloud-Ordner öffnen"
            >
              <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden xs:inline">Drive-Ordner</span>
              <ExternalLink className="w-2.5 h-2.5 text-stone-400" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success Toast */}
        {successToast && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-emerald-950/90 border border-emerald-500 text-emerald-200 text-xs flex items-center gap-2 animate-fade-in shadow-lg">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{successToast}</span>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* SECTION 1: HERO COVER BANNER */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-950/40 to-stone-900 border-2 border-amber-600/60 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-black/60 px-2 py-0.5 rounded border border-amber-800/40">
                  Cover / Hero-Banner
                </span>
                <h3 className="text-sm sm:text-base font-bold text-amber-200 font-serif m-0">
                  Haupt-Titelbild des Spiels
                </h3>
              </div>
              <span className="text-[11px] text-stone-400">Wird im Setup & Menü prominent angezeigt</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Cover Preview & Dropzone */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOverTarget('hero');
                }}
                onDragLeave={() => setDragOverTarget(null)}
                onDrop={(e) => handleFileDrop(e, 'hero')}
                className={`md:col-span-5 relative h-44 sm:h-52 rounded-xl overflow-hidden border-2 transition-all group flex flex-col items-center justify-center cursor-pointer ${
                  dragOverTarget === 'hero'
                    ? 'border-amber-400 bg-amber-500/20 scale-102 ring-4 ring-amber-500/40'
                    : 'border-amber-700/60 hover:border-amber-400 bg-stone-950'
                }`}
              >
                {localGame.heroImage ? (
                  <>
                    <img
                      src={localGame.heroImage}
                      alt="Hero Cover"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center">
                      <Upload className="w-6 h-6 text-amber-400 mb-1" />
                      <span className="text-xs text-amber-200 font-bold">Neues Bild hierher ziehen</span>
                      <span className="text-[10px] text-stone-300">oder klicken zum Auswählen</span>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-4 space-y-1">
                    <Upload className="w-8 h-8 text-amber-400 mx-auto" />
                    <span className="text-xs font-bold text-amber-200 block">
                      Cover-Bild hierher ziehen
                    </span>
                    <span className="text-[10px] text-stone-400 block">
                      PNG / JPG (16:9 Format empfohlen)
                    </span>
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileInputChange(e, 'hero')}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  title="Bild auswählen oder hierher ziehen"
                />
              </div>

              {/* Cover Prompt & Actions */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Vorbereiteter KI-Prompt für das Titelbild:</span>
                  </span>
                  <button
                    onClick={() => handleCopySinglePrompt(localGame.heroPrompt || '', 'hero')}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-950/80 hover:bg-amber-900 border border-amber-600/60 text-amber-300 text-xs font-bold transition-all cursor-pointer"
                  >
                    {copiedIndex === 'hero' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedIndex === 'hero' ? 'Kopiert!' : 'Prompt kopieren'}</span>
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 text-xs font-mono text-stone-300 leading-relaxed max-h-24 overflow-y-auto">
                  {localGame.heroPrompt || 'Kein spezieller Cover-Prompt hinterlegt.'}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[11px] text-stone-400">
                    💡 <strong>Workflow:</strong> Prompt kopieren → In Midjourney / DALL-E / Imagen einfügen → Bild generieren → Hier per Drag & Drop reinziehen!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: ALL STATIONS (1 to 20) */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-stone-800 pb-2">
              <h3 className="text-base font-bold text-amber-200 font-serif m-0 flex items-center gap-2">
                <span>Alle {localGame.rounds.length} Stationen im Spiel</span>
                <span className="text-xs font-mono font-normal text-stone-400">
                  (Jede Station hat ihren ortsbezogenen Prompt & Dropzone)
                </span>
              </h3>
            </div>

            <div className="space-y-4">
              {localGame.rounds.map((round, idx) => {
                const isDragOver = dragOverTarget === idx;
                const hasCustomImg = !!round.imagePath;

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all ${
                      isDragOver
                        ? 'bg-amber-950/50 border-amber-400 ring-2 ring-amber-500/40 shadow-xl'
                        : 'bg-stone-900/80 border-stone-800 hover:border-amber-700/60'
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      
                      {/* Left: Station Dropzone & Thumbnail */}
                      <div
                        onDragOver={(e) => {
                          e.preventDefault();
                          setDragOverTarget(idx);
                        }}
                        onDragLeave={() => setDragOverTarget(null)}
                        onDrop={(e) => handleFileDrop(e, idx)}
                        className={`md:col-span-4 relative h-36 sm:h-40 rounded-xl overflow-hidden border-2 transition-all group flex flex-col items-center justify-center cursor-pointer ${
                          isDragOver
                            ? 'border-amber-400 bg-amber-500/20 scale-102 ring-4 ring-amber-500/40'
                            : 'border-amber-800/50 hover:border-amber-400 bg-stone-950'
                        }`}
                      >
                        {hasCustomImg ? (
                          <>
                            <img
                              src={round.imagePath}
                              alt={round.locationName}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                              <Upload className="w-5 h-5 text-amber-400 mb-1" />
                              <span className="text-xs text-amber-200 font-bold">Bild austauschen</span>
                              <span className="text-[10px] text-stone-300">Datei hierher ziehen</span>
                            </div>
                          </>
                        ) : (
                          <div className="text-center p-3 space-y-1">
                            <Upload className="w-6 h-6 text-amber-400 mx-auto" />
                            <span className="text-xs font-bold text-amber-200 block">
                              Bild hierher ziehen
                            </span>
                            <span className="text-[10px] text-stone-500 block">
                              Drag & Drop aus Explorer/Finder
                            </span>
                          </div>
                        )}

                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 text-amber-400 border border-amber-800/40">
                          Runde {round.roundNumber}
                        </span>

                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileInputChange(e, idx)}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          title="Bild per Klick wählen oder Datei hierher ziehen"
                        />
                      </div>

                      {/* Right: Station Info, Prompt & Actions */}
                      <div className="md:col-span-8 space-y-2.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <span className="text-xs font-mono font-bold text-amber-400">
                              {round.locationName}
                            </span>
                            <h4 className="text-sm font-bold text-stone-100 m-0">
                              {round.milestoneTitle}
                            </h4>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleCopySinglePrompt(round.imagePrompt || '', idx)}
                              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-950/80 hover:bg-amber-900 border border-amber-600/60 text-amber-300 text-xs font-bold transition-all cursor-pointer"
                            >
                              {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedIndex === idx ? 'Prompt kopiert!' : 'Prompt kopieren'}</span>
                            </button>
                          </div>
                        </div>

                        {/* Prompt Display */}
                        <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800 text-[11px] font-mono text-stone-300 leading-relaxed max-h-20 overflow-y-auto select-all">
                          {round.imagePrompt || 'Kein spezieller Prompt für diese Runde generiert.'}
                        </div>

                        {/* Station Situation Hint */}
                        <p className="text-[11px] text-stone-400 line-clamp-1 italic">
                          Kontext: „{round.situation?.mittelstufe || round.situation?.unterstufe || ''}“
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3.5 border-t border-stone-800 bg-stone-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-stone-400 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Alle Änderungen werden direkt in dein Spiel übernommen.</span>
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-medium transition-colors cursor-pointer"
            >
              Abbrechen
            </button>

            <button
              onClick={handleSaveAndClose}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-stone-950 font-bold shadow-lg transition-all cursor-pointer"
            >
              Speichern & Fertigstellen
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
