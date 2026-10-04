import React, { useState } from 'react';
import { GameDefinition } from '../types/game';
import { soundFX } from '../utils/sound';
import { KeyRound, ArrowRight, Lock, Sparkles, BookOpen, GraduationCap, Compass, ShieldCheck, Loader2 } from 'lucide-react';
import { gameStorageService, PublishedGameRecord } from '../services/gameStorage';
import { googleDriveSyncService } from '../services/googleDriveSync';
import { detectEraTheme, ERA_THEMES } from '../utils/themeManager';

interface EntryPortalProps {
  onJoinGameWithCode: (game: GameDefinition, code: string) => void;
  onOpenTeacherStudio: () => void;
  onQuickStartDefault: (game: GameDefinition) => void;
}

export const EntryPortal: React.FC<EntryPortalProps> = ({
  onJoinGameWithCode,
  onOpenTeacherStudio,
  onQuickStartDefault,
}) => {
  const [code, setCode] = useState('');
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  // Teacher PIN Modal State
  const [showTeacherLogin, setShowTeacherLogin] = useState(false);
  const [teacherPin, setTeacherPin] = useState('');
  const [pinError, setPinError] = useState(false);

  // Available games list (for quick selection or preview)
  const publishedGames = gameStorageService.getPublishedGames();
  const defaultEgyptRecord = publishedGames.find((g) => g.shareCode === 'EGY01') || publishedGames[0];

  const [isLoadingCode, setIsLoadingCode] = useState(false);

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || isLoadingCode) return;

    soundFX.playClick();
    const clean = code.trim().toUpperCase();
    setErrorNotice(null);

    // 1. Check local storage first (instant)
    const localFound = gameStorageService.findGameByShareCode(clean);
    if (localFound) {
      soundFX.playBlessing();
      onJoinGameWithCode(localFound, clean);
      return;
    }

    // 2. Query Google Drive Cloud Storage (cross-device classroom sync)
    setIsLoadingCode(true);
    try {
      const cloudFound = await googleDriveSyncService.fetchGameByCode(clean);
      if (cloudFound) {
        soundFX.playBlessing();
        // Also cache locally for student session
        gameStorageService.publishGame(cloudFound);
        onJoinGameWithCode(cloudFound, clean);
      } else {
        soundFX.playCrisis();
        setErrorNotice(`Kein Spiel mit dem Code "${clean}" auf Google Drive gefunden. Bitte überprüfe die Schreibweise an der Tafel.`);
      }
    } catch (err) {
      soundFX.playCrisis();
      setErrorNotice(`Verbindungsfehler beim Abrufen des Codes "${clean}". Bitte Lehrkraft ansprechen.`);
    } finally {
      setIsLoadingCode(false);
    }
  };

  const handleVerifyTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    if (gameStorageService.verifyPin(teacherPin)) {
      soundFX.playBlessing();
      setShowTeacherLogin(false);
      onOpenTeacherStudio();
    } else {
      soundFX.playCrisis();
      setPinError(true);
    }
  };

  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto animate-fade-in text-stone-100">
      {/* Top Bar with Teacher Dashboard Login Button */}
      <div className="w-full flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
          <Compass className="w-4 h-4 text-amber-500 animate-spin-slow" />
          <span>Geschichts-Gamification-Studio Kahla</span>
        </div>

        <button
          onClick={() => {
            soundFX.playClick();
            setShowTeacherLogin(true);
            setPinError(false);
            setTeacherPin('');
          }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-amber-600/60 hover:border-amber-400 text-amber-300 font-bold text-xs shadow-lg transition-all cursor-pointer group"
        >
          <GraduationCap className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
          <span>Lehrkraft-Dashboard (PIN)</span>
          <Lock className="w-3.5 h-3.5 text-stone-400" />
        </button>
      </div>

      {/* Main Hero Card for Students */}
      <div className="w-full papyrus-dark rounded-3xl p-6 sm:p-10 border-2 border-amber-500/80 shadow-2xl space-y-8 text-center relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Title & Badge */}
        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/60 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Interaktive Geschichts-Expeditionen</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-serif tracking-tight">
            Willkommen zur Expedition
          </h1>

          <p className="text-stone-300 max-w-lg mx-auto text-sm sm:text-base font-light">
            Gib den Spiel-Code deiner Lehrkraft von der Tafel ein, um dein persönliches Abenteuer zu starten!
          </p>
        </div>

        {/* Giant Code Input Form */}
        <form onSubmit={handleJoinSubmit} className="max-w-md mx-auto space-y-4 relative z-10">
          <div className="relative">
            <input
              type="text"
              autoFocus
              maxLength={8}
              placeholder="Z.B. ROM24"
              value={code}
              onChange={(e) => {
                setCode(e.target.value.toUpperCase());
                setErrorNotice(null);
              }}
              className="w-full text-center text-3xl sm:text-4xl tracking-[0.25em] font-mono font-black py-4 px-6 rounded-2xl bg-stone-900/90 border-2 border-amber-500/70 text-amber-300 placeholder-stone-600 focus:outline-none focus:ring-4 focus:ring-amber-500/30 uppercase shadow-inner"
            />
            <KeyRound className="w-6 h-6 text-amber-500/50 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {errorNotice && (
            <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/70 text-red-200 text-xs text-left animate-shake">
              ⚠️ {errorNotice}
            </div>
          )}

          <button
            type="submit"
            disabled={!code.trim() || isLoadingCode}
            className={`w-full py-4 px-6 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-3 transition-all cursor-pointer shadow-xl ${
              code.trim() && !isLoadingCode
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-stone-950 scale-100 hover:scale-[1.02] active:scale-95'
                : 'bg-stone-800 text-stone-500 cursor-not-allowed opacity-60'
            }`}
          >
            {isLoadingCode ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Lade Spiel von Google Drive...</span>
              </>
            ) : (
              <>
                <span>Spiel betreten</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Quick-Start or Available Games */}
        <div className="pt-6 border-t border-stone-800/80 relative z-10 flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-widest font-mono text-stone-400">
            Oder Meisterspiel direkt starten:
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {publishedGames.map((record) => {
              const gameTheme = record.game.eraThemeId
                ? ERA_THEMES[record.game.eraThemeId]
                : detectEraTheme(record.game.era);

              return (
                <button
                  key={record.id}
                  onClick={() => {
                    soundFX.playBlessing();
                    onQuickStartDefault(record.game);
                  }}
                  className={`px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border ${gameTheme.badgeBorder} text-xs font-semibold ${gameTheme.badgeText} flex items-center gap-2 transition-all cursor-pointer hover:scale-105 shadow-sm`}
                >
                  <span>{gameTheme.icon}</span>
                  <span>{record.game.title}</span>
                  <span className="font-mono text-[10px] bg-stone-950 px-1.5 py-0.5 rounded border border-stone-700 text-amber-400">
                    Code: {record.shareCode}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Teacher PIN Login Modal */}
      {showTeacherLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm p-6 rounded-2xl bg-stone-950 border-2 border-amber-500 shadow-2xl space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-amber-200 font-serif">Lehrkraft-Dashboard</h3>
              <p className="text-xs text-stone-400 mt-1">
                Gib deine 4-stellige Lehrer-PIN ein, um das Studio zu öffnen (Standard: <strong>1234</strong>).
              </p>
            </div>

            <form onSubmit={handleVerifyTeacher} className="space-y-3">
              <input
                type="password"
                autoFocus
                placeholder="PIN eingeben (1234)"
                value={teacherPin}
                onChange={(e) => {
                  setTeacherPin(e.target.value);
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
                  onClick={() => setShowTeacherLogin(false)}
                  className="flex-1 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-bold transition-colors cursor-pointer"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition-all cursor-pointer"
                >
                  Dashboard öffnen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
