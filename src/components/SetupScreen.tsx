import React, { useState } from 'react';
import { GradeLevel, PlayerProfile, GameDefinition } from '../types/game';
import { soundFX } from '../utils/sound';
import { Crown, Sparkles, BookCheck, Shield, Lock, Key, ArrowRight, Share2, CheckCircle } from 'lucide-react';
import { gameStorageService, PublishedGameRecord } from '../services/gameStorage';
import { detectEraTheme, ERA_THEMES } from '../utils/themeManager';

interface SetupScreenProps {
  onStartGame: (profile: PlayerProfile) => void;
  onOpenStudio?: () => void;
  onBackToPortal?: () => void;
  activeGame?: GameDefinition | null;
  activeCode?: string | null;
  onSelectGame?: (game: GameDefinition) => void;
}

export const SetupScreen: React.FC<SetupScreenProps> = ({
  onStartGame,
  onOpenStudio,
  onBackToPortal,
  activeGame,
  activeCode,
  onSelectGame,
}) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'prinz' | 'prinzessin' | 'neutral'>('prinzessin');

  // Dynamic Theme
  const theme = activeGame?.eraThemeId
    ? ERA_THEMES[activeGame.eraThemeId]
    : detectEraTheme(activeGame?.era || 'Altes Ägypten', activeGame?.archetype);

  // Teacher PIN Protection State
  const [showPinModal, setShowPinModal] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState(false);

  // Student Share Code Input
  const [shareCodeInput, setShareCodeInput] = useState('');
  const [shareCodeNotice, setShareCodeNotice] = useState<string | null>(null);

  // Available games from teacher storage
  const [publishedGames] = useState<PublishedGameRecord[]>(gameStorageService.getPublishedGames());

  const handleOpenTeacherStudio = () => {
    soundFX.playClick();
    setShowPinModal(true);
    setPinError(false);
    setEnteredPin('');
  };

  const handleVerifyTeacherPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (gameStorageService.verifyPin(enteredPin)) {
      soundFX.playBlessing();
      setShowPinModal(false);
      onOpenStudio && onOpenStudio();
    } else {
      soundFX.playCrisis();
      setPinError(true);
    }
  };

  const handleJoinWithCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shareCodeInput.trim()) return;

    soundFX.playClick();
    const found = gameStorageService.findGameByShareCode(shareCodeInput);
    if (found && onSelectGame) {
      soundFX.playBlessing();
      onSelectGame(found);
      setShareCodeNotice(`Erfolgreich geladen: "${found.title}"!`);
      setShareCodeInput('');
    } else {
      soundFX.playCrisis();
      setShareCodeNotice(`Kein Spiel mit dem Code "${shareCodeInput.toUpperCase()}" gefunden.`);
    }
  };

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
    const resolvedGrade: GradeLevel = activeGame?.gradeLevel || 'mittelstufe';
    const finalProfile: PlayerProfile = {
      name: name.trim(),
      gradeLevel: resolvedGrade,
      gender,
      throneName: getPreviewThroneName(),
    };
    onStartGame(finalProfile);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-10 flex flex-col items-center">
      {/* Top action bar: Back to Portal & Protected Teacher Access */}
      <div className="w-full flex items-center justify-between gap-3 mb-5">
        {onBackToPortal ? (
          <button
            onClick={() => {
              soundFX.playClick();
              onBackToPortal();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
          >
            <span>← Anderes Spiel wählen</span>
          </button>
        ) : <div />}

        {activeCode && (
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300">
            Aktivierter Spiel-Code: <strong>{activeCode}</strong>
          </span>
        )}

        {/* Teacher Studio Button (PIN Protected) */}
        {onOpenStudio && (
          <button
            onClick={handleOpenTeacherStudio}
            className="flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-xl bg-stone-900 border border-amber-600/70 hover:border-amber-400 text-xs font-bold text-amber-300 shadow-md transition-all cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Lehrkraft-Baukasten</span>
          </button>
        )}
      </div>

      {/* Teacher PIN Modal */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm p-6 rounded-2xl bg-stone-950 border-2 border-amber-500 shadow-2xl space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-amber-200 font-serif">Lehrkraft-Bereich</h3>
              <p className="text-xs text-stone-400 mt-1">
                Bitte gib deine Lehrer-PIN ein, um den Baukasten und die Freigaben zu öffnen (Standard-PIN: <strong>1234</strong>).
              </p>
            </div>

            <form onSubmit={handleVerifyTeacherPin} className="space-y-3">
              <input
                type="password"
                autoFocus
                placeholder="PIN eingeben (z.B. 1234)"
                value={enteredPin}
                onChange={(e) => {
                  setEnteredPin(e.target.value);
                  setPinError(false);
                }}
                className={`w-full text-center px-4 py-2.5 rounded-xl bg-stone-900 border text-base tracking-widest font-mono text-amber-200 focus:outline-none ${
                  pinError ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-700 focus:border-amber-500'
                }`}
              />

              {pinError && (
                <p className="text-xs text-red-400">Falsche PIN. Bitte erneut versuchen.</p>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPinModal(false)}
                  className="flex-1 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-bold transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition-all cursor-pointer"
                >
                  Entsperren
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Decorative Banner (Adapts to Active Game or Default Nile) */}
      <div className="w-full relative rounded-2xl overflow-hidden border-2 border-amber-600/60 shadow-2xl mb-6 group">
        <img
          src={activeGame?.rounds[0]?.imagePath || "/assets/nile_banner.jpg"}
          alt="Banner"
          className="w-full h-48 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex items-end p-4 sm:p-6">
          <div className="space-y-1">
            <span className={`text-xs font-mono font-bold tracking-widest uppercase ${theme.badgeBg} ${theme.badgeText} px-2.5 py-1 rounded border ${theme.badgeBorder} inline-block`}>
              {activeGame ? activeGame.era : "16-Bit Retro Schulabenteuer"}
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-100 font-serif m-0 drop-shadow-md">
              {activeGame ? activeGame.title : "Die Nil-Expedition nach Gizeh"}
            </h2>
          </div>
        </div>
      </div>

      {/* Title & Introduction */}
      <div className="text-center space-y-2 mb-6">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${theme.badgeBg} border ${theme.badgeBorder} ${theme.badgeText} text-xs sm:text-sm font-semibold tracking-wide`}>
          <span>{theme.icon}</span>
          <span>Interaktives Geschichts-Abenteuerspiel</span>
        </div>
        <h1 className={`text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${theme.titleGradient} font-serif tracking-tight`}>
          {activeGame ? activeGame.title : "Aufstieg zum Pharao"}
        </h1>
        <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto font-light">
          {activeGame 
            ? activeGame.description 
            : "Begib dich auf die abenteuerliche Nil-Expedition von Elephantine nach Gizeh. Meistere 20 historische Runden, balanciere die 4 Mächte des Reiches und kröne dich zum Herrscher beider Länder!"}
        </p>
      </div>

      {/* Main Setup Card */}
      <div className={`w-full ${theme.cardBg} rounded-2xl p-6 sm:p-8 border-2 ${theme.cardBorder} shadow-2xl relative overflow-hidden`}>
        {/* Subtle decorative accent */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Question 1: Name */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-stone-200 flex items-center gap-2">
              <span className={theme.badgeText}>1.</span> Wie lautet dein Name?
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
            className={`w-full py-4 rounded-xl ${theme.primaryButton} font-bold text-lg shadow-xl transition-all active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2`}
          >
            <span>Expedition beginnen & Runde 1 betreten</span>
            <span className="text-xl">➔</span>
          </button>
        </form>
      </div>
    </div>
  );
};
