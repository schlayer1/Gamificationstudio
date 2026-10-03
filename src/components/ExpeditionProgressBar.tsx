import React from 'react';
import { Compass, MapPin, Flag } from 'lucide-react';
import { EraThemeConfig } from '../utils/themeManager';

interface ExpeditionProgressBarProps {
  round: number;
  totalRounds: number;
  locationName: string;
  theme?: EraThemeConfig;
}

export const ExpeditionProgressBar: React.FC<ExpeditionProgressBarProps> = ({
  round,
  totalRounds,
  locationName,
  theme,
}) => {
  const progressPercent = Math.min(100, Math.max(0, Math.round(((round - 1) / (totalRounds - 1 || 1)) * 100)));

  // Key milestones across the journey (e.g. 25%, 50%, 75%, 100%)
  const milestoneRounds = [
    { pct: 0, label: 'Start' },
    { pct: 25, label: 'Etappe I' },
    { pct: 50, label: 'Halbzeit' },
    { pct: 75, label: 'Etappe III' },
    { pct: 100, label: 'Finale' },
  ];

  const primaryAccent = theme?.accentGlow || 'amber-400';
  const badgeBorder = theme?.badgeBorder || 'border-amber-600/70';
  const badgeText = theme?.badgeText || 'text-amber-300';

  return (
    <div className="w-full px-4 py-2.5 rounded-2xl bg-stone-950/90 border border-stone-800 shadow-xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3">
      {/* Left: Station info badge */}
      <div className="flex items-center gap-2.5 shrink-0">
        <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-stone-900 border border-stone-800 text-stone-200">
          <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
        </span>
        <div className="leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`text-[11px] font-mono font-bold ${badgeText}`}>
              Station {round} von {totalRounds}
            </span>
            <span className="text-[10px] text-stone-500 font-mono">({progressPercent}%)</span>
          </div>
          <span className="text-xs text-stone-300 font-medium truncate max-w-[200px] sm:max-w-xs block">
            {locationName}
          </span>
        </div>
      </div>

      {/* Middle: Slim cinematic journey rail */}
      <div className="flex-1 w-full max-w-xl px-2">
        <div className="relative w-full flex items-center">
          {/* Track background */}
          <div className="w-full h-1.5 rounded-full bg-stone-900 border border-stone-800 overflow-hidden">
            <div
              style={{ width: `${progressPercent}%` }}
              className="h-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400 rounded-full transition-all duration-700 shadow-sm"
            />
          </div>

          {/* Traveling Marker Icon (Mini Sail / Banner) positioned along the track */}
          <div
            style={{ left: `calc(${progressPercent}% - 10px)` }}
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-stone-950 border-2 border-amber-400 flex items-center justify-center shadow-lg transition-all duration-700 z-10"
            title={`Aktueller Fortschritt: ${progressPercent}%`}
          >
            <span className="text-[9px]">⛵</span>
          </div>
        </div>

        {/* Milestone Tick Labels */}
        <div className="flex justify-between items-center text-[9px] font-mono text-stone-500 mt-1 px-1">
          {milestoneRounds.map((m) => (
            <span
              key={m.pct}
              className={progressPercent >= m.pct ? 'text-amber-400/80 font-bold' : 'text-stone-600'}
            >
              {m.label}
            </span>
          ))}
        </div>
      </div>

      {/* Right: Target finish marker */}
      <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-stone-900/80 border border-stone-800 text-[11px] text-stone-400 shrink-0 font-mono">
        <Flag className="w-3 h-3 text-amber-500" />
        <span>Ziel: Krönung</span>
      </div>
    </div>
  );
};
