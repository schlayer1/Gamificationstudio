import React from 'react';
import { PlayerProfile, Stats } from '../types/game';
import { RotateCcw, ShieldAlert, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/sound';

interface GameOverScreenProps {
  profile: PlayerProfile;
  fallenStat: string;
  round: number;
  stats: Stats;
  onRestart: () => void;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  profile,
  fallenStat,
  round,
  stats,
  onRestart,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12 flex flex-col items-center">
      <div className="p-4 rounded-full bg-red-950/80 border-2 border-red-600 text-red-500 mb-4 animate-bounce">
        <ShieldAlert className="w-12 h-12" />
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-red-400 font-serif text-center mb-2">
        Das Reich versank im Chaos!
      </h1>

      <p className="text-stone-300 text-center max-w-md text-sm sm:text-base mb-8">
        Die kosmische Ordnung (Ma'at) ist zerbrochen. Deine Herrschaft endete jäh in Runde {round}.
      </p>

      <div className="w-full papyrus-dark rounded-2xl p-6 border border-red-700/60 shadow-2xl space-y-5">
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-600/40 text-stone-200 text-sm leading-relaxed">
          <strong className="text-red-300 block mb-1">Todesurteil des Totengerichts:</strong>
          {fallenStat === 'Götter' && "Die Götter zogen ihren Schutz von Ägypten ab. Sandstürme und Heuschreckenplagen verheerten die Felder."}
          {fallenStat === 'Priester' && "Die Priesterschaft verfluchte deinen Namen und rief das Reich zum heiligen Aufstand gegen den Ketzer auf."}
          {fallenStat === 'Adel' && "Die Fürsten und Nomarchen zettelten eine Palastrevolte an und verbannten dich aus dem Niltal."}
          {fallenStat === 'Volk' && "Das hungernde Volk stürmte die Paläste und Palastgärten. Ohne die Liebe deiner Untertanen fiel die Krone."}
          {fallenStat === 'Kollaps' && "Deine Vorräte und Machtmittel waren restlos erschöpft."}
        </div>

        <div className="text-xs text-stone-400 text-center">
          Auch die Gnadenfrist der Götter konnte dich nicht mehr vor dem Absturz retten.
        </div>

        <div className="pt-2 flex justify-center">
          <button
            onClick={() => {
              soundFX.playClick();
              onRestart();
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-stone-950 font-bold text-sm shadow-lg flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Erneut versuchen & Geschichte neuschreiben</span>
          </button>
        </div>
      </div>
    </div>
  );
};
