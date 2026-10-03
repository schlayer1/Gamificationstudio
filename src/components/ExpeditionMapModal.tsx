import React from 'react';
import { X, MapPin, Compass, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { EraThemeConfig } from '../utils/themeManager';

export interface MapStation {
  roundNumber: number;
  locationName: string;
  milestoneTitle: string;
  completed: boolean;
  current: boolean;
}

interface ExpeditionMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  stations: MapStation[];
  currentRound: number;
  totalRounds: number;
  theme?: EraThemeConfig;
  onSelectStation?: (index: number) => void;
}

export const ExpeditionMapModal: React.FC<ExpeditionMapModalProps> = ({
  isOpen,
  onClose,
  stations,
  currentRound,
  totalRounds,
  theme,
}) => {
  if (!isOpen) return null;

  const badgeText = theme?.badgeText || 'text-amber-300';
  const badgeBorder = theme?.badgeBorder || 'border-amber-600/70';
  const vehicleIcon = theme?.vehicleIcon || '⛵';
  const destination = theme?.destinationLabel || 'Ziel: Finale';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-stone-950 border-2 border-stone-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-stone-100"
        style={{ borderColor: theme ? undefined : '#d97706' }}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-stone-800 flex items-center justify-between bg-stone-900/60">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-stone-900 border border-stone-700 flex items-center justify-center text-xl">
              🗺️
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-100 flex items-center gap-2">
                <span>Expeditions-Reisekarte</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full border ${badgeBorder} ${badgeText} font-mono`}>
                  Station {currentRound} von {totalRounds}
                </span>
              </h2>
              <p className="text-xs text-stone-400">
                Die historische Wegstrecke mit allen Etappen und Meilensteinen
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-400 hover:text-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Map Journey Track & Station Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Big Visual Trail Overview */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900 border border-stone-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-stone-400">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Startort (Station 1)</span>
            </div>
            <div className="flex-1 h-0.5 bg-stone-800 relative mx-2">
              <div 
                className="h-full bg-amber-500 transition-all"
                style={{ width: `${Math.round(((currentRound - 1) / (totalRounds - 1 || 1)) * 100)}%` }}
              />
              <div 
                className="absolute top-1/2 -translate-y-1/2 text-sm select-none"
                style={{ left: `calc(${Math.round(((currentRound - 1) / (totalRounds - 1 || 1)) * 100)}% - 8px)` }}
              >
                {vehicleIcon}
              </div>
            </div>
            <div className={`flex items-center gap-2 font-mono text-xs ${badgeText} font-bold`}>
              <span>{destination}</span>
            </div>
          </div>

          {/* Vertical Station Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {stations.map((st) => {
              const isPast = st.completed && !st.current;
              const isNow = st.current;
              const isFuture = !st.completed && !st.current;

              return (
                <div
                  key={st.roundNumber}
                  className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                    isNow
                      ? `bg-stone-900/90 ${badgeBorder} shadow-lg ring-1 ring-amber-500/30`
                      : isPast
                      ? 'bg-stone-950/60 border-stone-800/80 text-stone-400 opacity-90'
                      : 'bg-stone-950/30 border-stone-900 text-stone-500'
                  }`}
                >
                  {/* Station Marker */}
                  <div className="shrink-0 mt-0.5">
                    {isNow ? (
                      <span className="w-7 h-7 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-xs shadow-md animate-pulse">
                        {vehicleIcon}
                      </span>
                    ) : isPast ? (
                      <span className="w-7 h-7 rounded-xl bg-emerald-950/80 border border-emerald-600/60 text-emerald-400 flex items-center justify-center text-xs">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="w-7 h-7 rounded-xl bg-stone-900 border border-stone-800 text-stone-500 flex items-center justify-center font-mono text-xs">
                        {st.roundNumber}
                      </span>
                    )}
                  </div>

                  {/* Station Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isNow ? badgeText : 'text-stone-500'}`}>
                        Station {st.roundNumber}
                      </span>
                      {isNow && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono font-bold">
                          Hier bist du
                        </span>
                      )}
                    </div>
                    <h3 className={`text-sm font-semibold truncate ${isNow ? 'text-stone-100 font-serif' : isPast ? 'text-stone-300' : 'text-stone-500'}`}>
                      {st.locationName}
                    </h3>
                    <p className="text-xs text-stone-400/80 line-clamp-1 mt-0.5">
                      {st.milestoneTitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-900/60 flex items-center justify-between">
          <span className="text-xs text-stone-400 font-mono">
            Tipp: Jede getroffene Entscheidung schaltet die nächste Etappe frei.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-all"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
