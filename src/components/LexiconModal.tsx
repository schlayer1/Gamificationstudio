import React from 'react';
import { GameLogEntry, GradeLevel } from '../types/game';
import { BookOpen, X, Sparkles, ScrollText } from 'lucide-react';
import { soundFX } from '../utils/sound';

interface LexiconModalProps {
  isOpen: boolean;
  onClose: () => void;
  logs: GameLogEntry[];
  gradeLevel: GradeLevel;
}

export const LexiconModal: React.FC<LexiconModalProps> = ({
  isOpen,
  onClose,
  logs,
  gradeLevel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="papyrus-dark border-2 border-amber-600/70 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-amber-700/50 flex items-center justify-between shrink-0 bg-stone-950/80">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
              <ScrollText className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-amber-300 font-serif m-0">
                Königliches Papyrus-Archiv & Lexikon
              </h2>
              <p className="text-xs text-stone-400">
                Gesammeltes Wissen über die Geschichte, Götter und Bauwerke des Alten Reiches ({logs.length} Einträge freigeschaltet)
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="p-2 rounded-lg bg-stone-900 border border-stone-700 text-stone-400 hover:text-white hover:border-amber-500 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {logs.length === 0 ? (
            <div className="text-center py-12 text-stone-400 space-y-2">
              <BookOpen className="w-12 h-12 mx-auto text-amber-700/60" />
              <p className="text-base font-semibold text-stone-300">Das Archiv ist noch leer.</p>
              <p className="text-xs">Triff Entscheidungen auf deiner Nil-Expedition, um wertvolle Papyri und historisches Wissen freizuschalten!</p>
            </div>
          ) : (
            logs.map((log, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-xl bg-stone-900/90 border border-amber-700/40 space-y-3 relative shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    Runde {log.round}: {log.location}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-950/70 text-amber-300 border border-amber-600/40 font-serif">
                    {log.lexicon.term}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-amber-200 mb-1 flex items-center gap-1.5 font-serif">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    {log.lexicon.title}
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    {log.lexicon.content}
                  </p>
                </div>

                <div className="pt-2 text-xs text-stone-400 flex items-center justify-between border-t border-stone-800/80">
                  <span>Deine Wahl: <em className="text-amber-300 font-normal">„{log.choiceMade}“</em></span>
                  <span className="text-emerald-400 font-semibold">{log.consequence.slice(0, 60)}...</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-stone-800 shrink-0 bg-stone-950/80 flex justify-end">
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm transition-all cursor-pointer"
          >
            Zurück zur Expedition
          </button>
        </div>
      </div>
    </div>
  );
};
