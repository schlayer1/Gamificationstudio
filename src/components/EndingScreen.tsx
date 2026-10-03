import React from 'react';
import { PlayerProfile, Stats, Skills } from '../types/game';
import { Crown, Sparkles, Trophy, RotateCcw, Award, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFX } from '../utils/sound';

interface EndingScreenProps {
  profile: PlayerProfile;
  stats: Stats;
  skills: Skills;
  onRestart: () => void;
}

export const EndingScreen: React.FC<EndingScreenProps> = ({
  profile,
  stats,
  skills,
  onRestart,
}) => {
  React.useEffect(() => {
    soundFX.playCoronation();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#fbbf24', '#f59e0b', '#d97706', '#ffffff', '#38bdf8'],
    });
  }, []);

  // Compute final title evaluation
  const getCoronationVerdict = () => {
    const avg = (stats.goetter + stats.priester + stats.adel + stats.volk) / 4;
    
    if (avg >= 70 && stats.volk >= 60 && stats.goetter >= 60) {
      return {
        title: "Der Goldene Sonnengott auf Erden (Perfekter Herrscher)",
        description: "Dein Name wird für 3000 Jahre in Stein gemeißelt! Du hast die vollkommene Balance der Ma'at vollbracht. Priester, Adel und das gesamte Volk verehren dich als den gerechtesten Pharao in der Geschichte Ägyptens.",
        rank: "S-Rang (Legendär)",
        color: "from-amber-400 to-yellow-500",
      };
    } else if (stats.volk >= 65) {
      return {
        title: "Der Gütige Vater / Die Große Mutter des Volkes",
        description: "Die einfachen Bauern und Handwerker weinen vor Dankbarkeit. Deine Speisungen und Fürsorge machten das Land reich und glücklich. Ein Zeitalter des inneren Friedens bricht an.",
        rank: "A-Rang (Großer Reformer)",
        color: "from-emerald-400 to-teal-500",
      };
    } else if (stats.adel >= 65 || skills.militaerischeStaerke >= 6) {
      return {
        title: "Der Unbesiegbare Kriegerpharao (Falke des Krieges)",
        description: "Deine Flotte und Truppen sind gefürchtet von Nubien bis nach Asien. Unter deiner eisernen Hand ist Ägyptens Grenze unbezwingbar und die Kassen des Adels sind randvoll.",
        rank: "A-Rang (Militärischer Eroberer)",
        color: "from-rose-500 to-red-600",
      };
    } else if (stats.goetter >= 65 || stats.priester >= 65) {
      return {
        title: "Der Heilige Hohepriester des Amun-Re",
        description: "Die Tempel glänzen in purem Gold und Myrrhe. Die Götter senden jedes Jahr die perfekte Nilflut. Dein spirituelles Vermächtnis wird die Priesterschaft für Jahrhunderte leiten.",
        rank: "A-Rang (Sakraler Mystiker)",
        color: "from-purple-400 to-indigo-500",
      };
    } else {
      return {
        title: "Pharao der Harten Prüfungen",
        description: "Du hast die gefährliche Reise über den Nil gemeistert und Gizeh erreicht. Trotz schwerer Krisen und politischer Wirren sitzt du fest auf dem Thron beider Länder.",
        rank: "B-Rang (Erfahrener Regent)",
        color: "from-amber-500 to-orange-600",
      };
    }
  };

  const verdict = getCoronationVerdict();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-10 flex flex-col items-center">
      {/* Coronation Artwork Banner */}
      <div className="w-full relative rounded-2xl overflow-hidden border-2 border-amber-500 shadow-2xl mb-6">
        <img
          src="/assets/coronation.jpg"
          alt="Die Große Krönung"
          className="w-full h-56 sm:h-80 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent flex items-end p-4 sm:p-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300 uppercase bg-stone-950/80 px-2.5 py-1 rounded border border-amber-500/50 inline-block">
              Krönungszeremonie in Memphis
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-200 font-serif m-0 drop-shadow-md">
              Die Doppelkrone von Ober- und Unterägypten
            </h2>
          </div>
        </div>
      </div>

      {/* Coronation Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/60 text-amber-300 text-sm font-semibold mb-4">
        <Crown className="w-5 h-5 text-yellow-400" />
        <span>Runde 20 abgeschlossen • Krönung vollzogen</span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-serif mb-2">
        Heil {profile.throneName}!
      </h1>

      <p className="text-stone-300 text-center max-w-xl text-sm sm:text-base mb-8">
        Die Priester haben das Salböl auf dein Haupt gegossen und die Doppelkrone von Ober- und Unterägypten aufgesetzt!
      </p>

      {/* Main Verdict Card */}
      <div className="w-full papyrus-dark rounded-2xl p-6 sm:p-8 border-2 border-amber-500/80 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-800 pb-5">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
              Dein historisches Urteil:
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-200 font-serif m-0">
              {verdict.title}
            </h2>
          </div>
          <div className="px-4 py-1.5 rounded-xl bg-amber-950 border border-amber-500 text-amber-300 font-extrabold text-sm sm:text-base flex items-center gap-1.5 shadow-md">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span>{verdict.rank}</span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-stone-300 leading-relaxed italic bg-stone-900/60 p-4 rounded-xl border border-stone-800">
          „{verdict.description}“
        </p>

        {/* Final Stats Summary */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
            Deine finalen Werte am Thron:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-stone-900/90 border border-amber-700/40 text-center">
              <span className="text-xs text-stone-400 block">⚡ Götter</span>
              <strong className="text-lg text-amber-300">{stats.goetter}%</strong>
            </div>
            <div className="p-3 rounded-xl bg-stone-900/90 border border-amber-700/40 text-center">
              <span className="text-xs text-stone-400 block">🙏 Priester</span>
              <strong className="text-lg text-purple-300">{stats.priester}%</strong>
            </div>
            <div className="p-3 rounded-xl bg-stone-900/90 border border-amber-700/40 text-center">
              <span className="text-xs text-stone-400 block">👑 Adel</span>
              <strong className="text-lg text-blue-300">{stats.adel}%</strong>
            </div>
            <div className="p-3 rounded-xl bg-stone-900/90 border border-amber-700/40 text-center">
              <span className="text-xs text-stone-400 block">😊 Volk</span>
              <strong className="text-lg text-emerald-300">{stats.volk}%</strong>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-stone-300">
          <span>🧠 Verbliebene EP: <strong className="text-amber-400">{stats.ep}</strong></span>
          <span>🌟 Göttlichkeit: <strong className="text-yellow-400">{skills.goettlicheAuserwaehltheit}</strong></span>
          <span>🗣️ Politik: <strong className="text-cyan-400">{skills.politischeGeschicklichkeit}</strong></span>
          <span>⚔️ Militär: <strong className="text-rose-400">{skills.militaerischeStaerke}</strong></span>
        </div>

        {/* Restart Button */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => {
              soundFX.playClick();
              onRestart();
            }}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-stone-950 font-bold text-base shadow-xl flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Neues Spiel beginnen</span>
          </button>
        </div>
      </div>
    </div>
  );
};
