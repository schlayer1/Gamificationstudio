import React, { useState } from 'react';
import { GradeLevel, PlayerProfile } from '../types/game';
import { soundFX } from '../utils/sound';
import { Crown, Sparkles, BookCheck, Shield } from 'lucide-react';

interface SetupScreenProps {
  onStartGame: (profile: PlayerProfile) => void;
  onOpenStudio?: () => void;
}

export const SetupScreen: React.FC<SetupScreenProps> = ({ onStartGame, onOpenStudio }) => {
  const [name, setName] = useState('');
  const [gradeLevel, setGradeLevel] = useState<GradeLevel>('mittelstufe');
  const [gender, setGender] = useState<'prinz' | 'prinzessin' | 'neutral'>('prinzessin');

  // Generate regal throne name based on input
  const getPreviewThroneName = () => {
    const trimmed = name.trim() || 'Ramses';
    if (gender === 'prinzessin') {
      const titles = ['Nefertari', 'Hatschepsut', 'Meritaten', 'Cleopatra'];
      const chosen = titles[Math.abs(trimmed.length) % titles.length];
      return `Prinzessin ${chosen}-${trimmed}`;
    } else if (gender === 'prinz') {
      const titles = ['Tutanchamun', 'Thutmosis', 'Ramses', 'Amenophis'];
      const chosen = titles[Math.abs(trimmed.length) % titles.length];
      return `Prinz ${chosen}-${trimmed}`;
    } else {
      return `Herrscher/in ${trimmed} von Kemet`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    soundFX.playBlessing();
    const finalProfile: PlayerProfile = {
      name: name.trim(),
      gradeLevel,
      gender,
      throneName: getPreviewThroneName(),
    };
    onStartGame(finalProfile);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-10 flex flex-col items-center">
      {/* Top action bar: Studio link */}
      {onOpenStudio && (
        <div className="w-full flex justify-end mb-3">
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenStudio();
            }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-stone-900 border border-amber-600/60 hover:border-amber-400 text-xs font-bold text-amber-300 shadow-md transition-all cursor-pointer"
          >
            <span>🧙‍♂️</span>
            <span>Lehrer-Studio öffnen (Neue Spiele erstellen)</span>
          </button>
        </div>
      )}

      {/* Decorative Pixel Art Banner */}
      <div className="w-full relative rounded-2xl overflow-hidden border-2 border-amber-600/60 shadow-2xl mb-6 group">
        <img
          src="/assets/nile_banner.jpg"
          alt="Die große Nil-Expedition"
          className="w-full h-48 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex items-end p-4 sm:p-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-stone-950/80 px-2.5 py-1 rounded border border-amber-600/50 inline-block">
              16-Bit Retro Schulabenteuer
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-amber-200 font-serif m-0 drop-shadow-md">
              Die Nil-Expedition nach Gizeh
            </h2>
          </div>
        </div>
      </div>

      {/* Title & Introduction */}
      <div className="text-center space-y-2 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
          <Crown className="w-4 h-4 text-amber-400" />
          <span>Interaktives Geschichts-Abenteuerspiel</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-serif tracking-tight">
          Aufstieg zum Pharao
        </h1>
        <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto font-light">
          Begib dich auf die abenteuerliche Nil-Expedition von Elephantine nach Gizeh. Meistere 20 historische Runden, balanciere die 4 Mächte des Reiches und kröne dich zum Herrscher beider Länder!
        </p>
      </div>

      {/* Main Setup Card */}
      <div className="w-full papyrus-dark rounded-2xl p-6 sm:p-8 border border-amber-700/60 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative pharaoh accent */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Question 1: Name */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-amber-200 flex items-center gap-2">
              <span className="text-amber-400">1.</span> Wie lautet dein Name?
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Z. B. Sophie, Luca, Maya..."
              className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-amber-600/60 text-amber-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-400 text-base"
            />
          </div>

          {/* Question 2: Gender / Title preference */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-amber-200 flex items-center gap-2">
              <span className="text-amber-400">2.</span> Wähle deinen Throntitel:
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  soundFX.playClick();
                  setGender('prinzessin');
                }}
                className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-all ${
                  gender === 'prinzessin'
                    ? 'bg-amber-600 text-stone-950 border-amber-400 font-bold shadow-md'
                    : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-amber-600'
                }`}
              >
                👑 Prinzessin
              </button>
              <button
                type="button"
                onClick={() => {
                  soundFX.playClick();
                  setGender('prinz');
                }}
                className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-all ${
                  gender === 'prinz'
                    ? 'bg-amber-600 text-stone-950 border-amber-400 font-bold shadow-md'
                    : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-amber-600'
                }`}
              >
                👑 Prinz
              </button>
              <button
                type="button"
                onClick={() => {
                  soundFX.playClick();
                  setGender('neutral');
                }}
                className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-all ${
                  gender === 'neutral'
                    ? 'bg-amber-600 text-stone-950 border-amber-400 font-bold shadow-md'
                    : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-amber-600'
                }`}
              >
                ✨ Herrscher/in
              </button>
            </div>
          </div>

          {/* Question 3: Grade Level Adaptation */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-amber-200 flex items-center gap-2">
              <span className="text-amber-400">3.</span> In welche Klassenstufe gehst du?
            </label>
            <p className="text-xs text-stone-400">
              Die Sprache, historische Tiefe und Dilemmata passen sich exakt deiner Altersgruppe an!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {/* Unterstufe */}
              <div
                onClick={() => {
                  soundFX.playClick();
                  setGradeLevel('unterstufe');
                }}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  gradeLevel === 'unterstufe'
                    ? 'bg-amber-950/70 border-amber-400 ring-2 ring-amber-500/50'
                    : 'bg-stone-900/70 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-amber-300">Unterstufe</span>
                  <span className="text-xs text-stone-400 font-mono">5.–6. Kl.</span>
                </div>
                <p className="text-xs text-stone-300">
                  Fokus auf spannende Erzählung, klare Entscheidungen & leicht verständliche Begriffe.
                </p>
              </div>

              {/* Mittelstufe */}
              <div
                onClick={() => {
                  soundFX.playClick();
                  setGradeLevel('mittelstufe');
                }}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  gradeLevel === 'mittelstufe'
                    ? 'bg-amber-950/70 border-amber-400 ring-2 ring-amber-500/50'
                    : 'bg-stone-900/70 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-amber-300">Mittelstufe</span>
                  <span className="text-xs text-stone-400 font-mono">7.–9. Kl.</span>
                </div>
                <p className="text-xs text-stone-300">
                  Ausgewogene Sprache, historische Fachbegriffe & erste moralische Grauzonen.
                </p>
              </div>

              {/* Oberstufe */}
              <div
                onClick={() => {
                  soundFX.playClick();
                  setGradeLevel('oberstufe');
                }}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  gradeLevel === 'oberstufe'
                    ? 'bg-amber-950/70 border-amber-400 ring-2 ring-amber-500/50'
                    : 'bg-stone-900/70 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-amber-300">Oberstufe</span>
                  <span className="text-xs text-stone-400 font-mono">ab 10. Kl.</span>
                </div>
                <p className="text-xs text-stone-300">
                  Anspruchsvolle Quellentexte, komplexe Machtdynamiken & Staatsphilosophie.
                </p>
              </div>
            </div>
          </div>

          {/* Generated Royal Title Preview Box */}
          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 flex items-center justify-between">
            <div>
              <span className="text-xs text-stone-400 uppercase tracking-wider block font-semibold">
                Dein zugewiesener Thronname:
              </span>
              <strong className="text-amber-300 text-lg font-serif">
                {getPreviewThroneName()}
              </strong>
            </div>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin-slow" />
          </div>

          {/* Key Game Mechanics Reminder */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs text-stone-300">
            <div className="p-2 rounded bg-stone-900 border border-stone-800">
              <span className="block font-bold text-amber-400">⚡ 🙏 👑 😊</span>
              <span>Startwerte je 10%</span>
            </div>
            <div className="p-2 rounded bg-stone-900 border border-stone-800">
              <span className="block font-bold text-amber-400">🧠 2 Start-EP</span>
              <span>Erfahrungspunkte</span>
            </div>
            <div className="p-2 rounded bg-stone-900 border border-stone-800">
              <span className="block font-bold text-amber-400">🔒 Option D</span>
              <span>Freischaltbar ab 3 EP</span>
            </div>
            <div className="p-2 rounded bg-stone-900 border border-stone-800">
              <span className="block font-bold text-amber-400">🛡️ Gnadenfrist</span>
              <span>1x Schutz vor Aus</span>
            </div>
          </div>

          {/* Start Button */}
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-stone-950 font-bold text-lg shadow-xl hover:from-amber-400 hover:to-yellow-500 transition-all active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Expedition beginnen & Runde 1 betreten</span>
            <span className="text-xl">➔</span>
          </button>
        </form>
      </div>
    </div>
  );
};
