import React, { useState } from 'react';
import { soundFX } from '../utils/sound';
import {
  Camera,
  Maximize2,
  Minimize2,
  Sparkles,
  Info,
  MapPin,
  Eye,
  Compass,
  X,
  Volume2
} from 'lucide-react';

interface StationHeroStageProps {
  imageSrc: string;
  locationName: string;
  milestoneTitle: string;
  roundNumber: number;
  totalRounds: number;
  lastReactionChoice?: string | null;
  lastReactionType?: 'positive' | 'negative' | 'divine' | null;
  hotspots?: Array<{
    id: string;
    x: number;
    y: number;
    label: string;
    description: string;
    icon?: string;
  }>;
  onOpenImageModal?: () => void;
}

export const StationHeroStage: React.FC<StationHeroStageProps> = ({
  imageSrc,
  locationName,
  milestoneTitle,
  roundNumber,
  totalRounds,
  lastReactionChoice,
  lastReactionType,
  hotspots,
  onOpenImageModal,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<{
    label: string;
    description: string;
    icon?: string;
  } | null>(null);

  // Default atmospheric hotspots if none provided (ensures every station is interactive)
  const defaultHotspots = [
    {
      id: 'hs1',
      x: 25,
      y: 40,
      label: 'Historischer Schauplatz',
      description: `Erkunde die Details von ${locationName}. Jedes Denkmal birgt Geheimnisse der Epoche.`,
      icon: '🏛️',
    },
    {
      id: 'hs2',
      x: 75,
      y: 65,
      label: 'Zeitzeugen & Akteure',
      description: 'Hier versammeln sich Priester, Adelige, Handwerker und das einfache Volk.',
      icon: '👥',
    },
    {
      id: 'hs3',
      x: 50,
      y: 20,
      label: 'Göttliche Sphäre',
      description: 'Die Götter wachen über diesen Ort. Deine Entscheidungen beeinflussen Ma\'at und das Schicksal.',
      icon: '⚡',
    },
  ];

  const currentHotspots = hotspots && hotspots.length > 0 ? hotspots : defaultHotspots;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border-2 border-amber-600/70 shadow-2xl transition-all duration-500 group bg-stone-950 ${
        isFullscreen ? 'fixed inset-4 z-50 rounded-2xl max-h-[96vh]' : 'h-64 sm:h-80 md:h-96 lg:h-[420px]'
      }`}
    >
      {/* Background Image with Cinematic Pan / Ken Burns effect & FX reaction */}
      <img
        src={imageSrc}
        alt={milestoneTitle}
        className={`w-full h-full object-cover object-center transition-all duration-700 select-none ${
          lastReactionType === 'divine'
            ? 'scale-105 brightness-110 sepia-[0.25]'
            : lastReactionType === 'negative'
            ? 'scale-100 brightness-90 contrast-125'
            : 'group-hover:scale-105'
        }`}
      />

      {/* Atmospheric Vignette & Color Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-stone-950/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 via-transparent to-stone-950/40 pointer-events-none" />

      {/* Choice Flash Reaction FX Overlay */}
      {lastReactionChoice && (
        <div
          className={`absolute inset-0 pointer-events-none animate-pulse transition-opacity duration-1000 ${
            lastReactionType === 'divine'
              ? 'bg-amber-400/15'
              : lastReactionType === 'negative'
              ? 'bg-red-500/15'
              : 'bg-emerald-400/10'
          }`}
        />
      )}

      {/* Top Bar: Location Tag, Round Progress & Stage Controls */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-2 z-10">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-950/85 border border-amber-600/70 text-amber-300 font-mono text-xs font-bold shadow-lg backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate max-w-[200px] sm:max-w-md">{locationName}</span>
          </span>

          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-stone-950/85 border border-stone-800 text-stone-300 font-mono text-xs shadow-lg backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Station {roundNumber}/{totalRounds}</span>
          </span>
        </div>

        {/* Right Stage Controls */}
        <div className="flex items-center gap-2">
          {/* Optional Change Image & Prompt Button (Only in Teacher/Studio context) */}
          {onOpenImageModal && (
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenImageModal();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-950/85 hover:bg-stone-950 text-amber-300 hover:text-amber-200 border border-amber-600/70 shadow-lg text-xs font-bold transition-all backdrop-blur-md cursor-pointer hover:scale-102"
              title="Bildstil anpassen, KI-Prompt kopieren oder neues Bild zuweisen"
            >
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden xs:inline">Bild & Prompt</span>
            </button>
          )}

          {/* Fullscreen Toggle */}
          <button
            onClick={() => {
              soundFX.playClick();
              setIsFullscreen(!isFullscreen);
            }}
            className="p-1.5 rounded-xl bg-stone-950/85 hover:bg-stone-950 text-stone-300 hover:text-white border border-stone-800 shadow-lg text-xs transition-all backdrop-blur-md cursor-pointer"
            title={isFullscreen ? "Vollbild beenden" : "Panoramabild vergrößern"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* INTERACTIVE HOTSPOTS: Pulsing Golden Exploration Markers on Image */}
      <div className="absolute inset-0 pointer-events-none">
        {currentHotspots.map((hs) => (
          <button
            key={hs.id}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              soundFX.playClick();
              setActiveHotspot(hs);
            }}
            style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
            className="absolute pointer-events-auto -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer focus:outline-none"
            title={`Tippe für historische Details: ${hs.label}`}
          >
            {/* Outer pulsating ring */}
            <span className="absolute -inset-2 rounded-full bg-amber-400/30 animate-ping group-hover/pin:bg-amber-300/50" />
            {/* Inner golden badge */}
            <span className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-stone-950/90 border-2 border-amber-400 text-amber-300 shadow-xl group-hover/pin:scale-110 transition-transform">
              <span className="text-xs sm:text-sm">{hs.icon || '✨'}</span>
            </span>
            {/* Tooltip on hover */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 hidden group-hover/pin:block px-2 py-1 rounded bg-stone-950 border border-amber-500/80 text-[10px] font-bold text-amber-200 whitespace-nowrap shadow-xl pointer-events-none">
              {hs.label}
            </span>
          </button>
        ))}
      </div>

      {/* Active Hotspot Detail Card (Overlay Popup) */}
      {activeHotspot && (
        <div className="absolute bottom-20 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md p-4 rounded-2xl bg-stone-950/95 border-2 border-amber-500 text-stone-100 shadow-2xl backdrop-blur-lg animate-fade-in z-20 space-y-2">
          <div className="flex items-center justify-between border-b border-stone-800 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-base">{activeHotspot.icon || '🏛️'}</span>
              <h4 className="text-xs sm:text-sm font-bold text-amber-300 font-serif m-0">
                {activeHotspot.label}
              </h4>
            </div>
            <button
              onClick={() => setActiveHotspot(null)}
              className="p-1 rounded-lg text-stone-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed font-sans">
            {activeHotspot.description}
          </p>
        </div>
      )}

      {/* Bottom Hero Caption Bar */}
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 z-10 pointer-events-none">
        <div className="space-y-0.5 max-w-2xl bg-stone-950/70 p-3 sm:p-4 rounded-2xl border border-amber-900/40 backdrop-blur-md">
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase text-amber-400 block">
            {milestoneTitle}
          </span>
          <h2 className="text-sm sm:text-xl md:text-2xl font-black text-amber-100 font-serif leading-tight drop-shadow-md">
            {locationName}
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-950/80 border border-stone-800 text-[11px] text-stone-300 backdrop-blur-md pointer-events-auto">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Tippe auf die pulsierenden Marker im Bild zum Erkunden</span>
        </div>
      </div>
    </div>
  );
};
