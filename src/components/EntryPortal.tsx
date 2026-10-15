import React, { useState, useEffect } from 'react';
import { GameDefinition } from '../types/game';
import { PortalUser } from '../types/user';
import { soundFX } from '../utils/sound';
import { 
  KeyRound, 
  ArrowRight, 
  Lock, 
  Sparkles, 
  GraduationCap, 
  Compass, 
  ShieldCheck, 
  Loader2, 
  UserCheck, 
  LogOut,
  Gamepad2,
  CheckCircle2,
  Eye,
  EyeOff
} from 'lucide-react';
import { gameStorageService, PublishedGameRecord } from '../services/gameStorage';
import { googleDriveSyncService } from '../services/googleDriveSync';
import { teacherAuthService } from '../services/teacherAuth';
import { detectEraTheme, ERA_THEMES } from '../utils/themeManager';

interface EntryPortalProps {
  onJoinGameWithCode: (game: GameDefinition, code: string) => void;
  onOpenTeacherStudio: () => void;
  onQuickStartDefault: (game: GameDefinition, code?: string) => void;
}

export const EntryPortal: React.FC<EntryPortalProps> = ({
  onJoinGameWithCode,
  onOpenTeacherStudio,
  onQuickStartDefault,
}) => {
  // Gate selection: 'student' | 'teacher'
  const [activeGate, setActiveGate] = useState<'student' | 'teacher'>('student');

  // Student Code State
  const [code, setCode] = useState('');
  const [errorNotice, setErrorNotice] = useState<string | null>(null);
  const [isLoadingCode, setIsLoadingCode] = useState(false);

  // Teacher PIN State
  const [currentTeacher, setCurrentTeacher] = useState<PortalUser | null>(teacherAuthService.getCurrentTeacher());
  const [teacherPin, setTeacherPin] = useState('');
  const [showPinText, setShowPinText] = useState(false);
  const [pinError, setPinError] = useState<string | null>(null);
  const [pinSuccessTeacher, setPinSuccessTeacher] = useState<PortalUser | null>(null);

  // Listen to auth state changes
  useEffect(() => {
    const unsub = teacherAuthService.onAuthChange((user) => {
      setCurrentTeacher(user);
    });
    return unsub;
  }, []);

  // Available games list for quick selection
  const publishedGames = gameStorageService.getPublishedGames();

  // Handle Student Game Code Submit
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
        setErrorNotice(`Kein Spiel mit dem Code "${clean}" auf Google Drive gefunden. Bitte überprüfe den Code an der Tafel.`);
      }
    } catch (err) {
      soundFX.playCrisis();
      setErrorNotice(`Verbindungsfehler beim Abrufen des Codes "${clean}". Bitte Lehrkraft ansprechen.`);
    } finally {
      setIsLoadingCode(false);
    }
  };

  // Handle Teacher PIN Validation
  const handlePinSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!teacherPin.trim()) {
      setPinError('Bitte gib deine 4-stellige PIN ein.');
      return;
    }

    setPinError(null);
    const result = teacherAuthService.loginWithPin(teacherPin);

    if (result.success && result.user) {
      soundFX.playBlessing();
      setPinSuccessTeacher(result.user);
      setTeacherPin('');
      setTimeout(() => {
        setPinSuccessTeacher(null);
        onOpenTeacherStudio();
      }, 700);
    } else {
      soundFX.playCrisis();
      setPinError(result.error || 'Ungültige PIN. Bitte erneut versuchen.');
    }
  };

  // Auto-submit PIN when 4 digits are entered
  const handlePinChange = (val: string) => {
    setTeacherPin(val);
    setPinError(null);
    // If it's a 4-digit numeric PIN, check immediately
    if (val.trim().length === 4 && /^\d{4}$/.test(val.trim())) {
      const result = teacherAuthService.loginWithPin(val);
      if (result.success && result.user) {
        soundFX.playBlessing();
        setPinSuccessTeacher(result.user);
        setTeacherPin('');
        setTimeout(() => {
          setPinSuccessTeacher(null);
          onOpenTeacherStudio();
        }, 700);
      }
    }
  };

  const handleLogout = () => {
    soundFX.playClick();
    teacherAuthService.logout();
    setCurrentTeacher(null);
    setTeacherPin('');
    setPinError(null);
  };

  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-center px-3 sm:px-6 py-6 sm:py-10 max-w-5xl mx-auto animate-fade-in text-stone-100">
      
      {/* Top School Bar & Mode Toggle */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2.5 text-xs font-mono text-stone-400">
          <Compass className="w-4 h-4 text-amber-500 animate-spin-slow" />
          <span>Heimbürgeschule Kahla • Geschichts-Gamification</span>
        </div>

        {/* Dual Gate Segmented Switch */}
        <div className="flex p-1 rounded-2xl bg-stone-900/95 border border-amber-600/40 shadow-xl">
          <button
            onClick={() => {
              soundFX.playClick();
              setActiveGate('student');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeGate === 'student'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-stone-950 shadow-md font-black'
                : 'text-stone-400 hover:text-amber-200'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Schüler-Expedition</span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setActiveGate('teacher');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeGate === 'teacher'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-stone-950 shadow-md font-black'
                : 'text-stone-400 hover:text-amber-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Lehrkraft-Studio</span>
            {currentTeacher && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            )}
          </button>
        </div>
      </div>

      {/* ===================== GATE 1: SCHÜLER-EXPEDITION ===================== */}
      {activeGate === 'student' && (
        <div className="w-full papyrus-dark rounded-3xl p-6 sm:p-10 border-2 border-amber-500/80 shadow-2xl space-y-8 text-center relative overflow-hidden animate-fade-in">
          {/* Ambient Glow */}
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
              <div className="p-3.5 rounded-xl bg-red-950/90 border border-red-500/70 text-red-200 text-xs text-left animate-shake">
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

          {/* Quick-Start Meisterspiele */}
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
                      onQuickStartDefault(record.game, record.shareCode);
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
      )}

      {/* ===================== GATE 2: LEHRKRAFT-STUDIO ===================== */}
      {activeGate === 'teacher' && (
        <div className="w-full max-w-xl papyrus-dark rounded-3xl p-6 sm:p-10 border-2 border-amber-500/80 shadow-2xl space-y-6 text-center relative overflow-hidden animate-fade-in">
          {/* Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="space-y-3 relative z-10">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 border-2 border-amber-500/60 flex items-center justify-center text-amber-300 shadow-lg">
              <GraduationCap className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-serif">
              Lehrkraft-Studio
            </h2>

            <p className="text-stone-300 text-xs sm:text-sm font-light max-w-md mx-auto">
              Eigene historische Spiele generieren, für Klassen freigeben und im Kollegiums-Archiv der Heimbürgeschule stöbern.
            </p>
          </div>

          {/* CASE A: Already Logged-In Teacher */}
          {currentTeacher ? (
            <div className="relative z-10 space-y-6 bg-stone-950/70 p-6 rounded-2xl border border-amber-500/40">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/60 flex items-center justify-center text-emerald-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-stone-400 font-mono">Angemeldet als:</span>
                    {currentTeacher.role === 'admin' && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-950 text-red-300 border border-red-700/60">
                        Schulleitung / Admin
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-amber-200">
                    {currentTeacher.name}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    soundFX.playBlessing();
                    onOpenTeacherStudio();
                  }}
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-stone-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <span>Zum Lehrkraft-Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleLogout}
                  className="px-4 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-red-500/60 text-stone-400 hover:text-red-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  title="Abmelden"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Abmelden</span>
                </button>
              </div>
            </div>
          ) : (
            /* CASE B: PIN Input Form (Direct Recognition) */
            <form onSubmit={handlePinSubmit} className="relative z-10 space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-400">
                  Persönliche 4-stellige PIN (aus Vertretungsstatistik):
                </label>

                <div className="relative max-w-xs mx-auto">
                  <input
                    type={showPinText ? 'text' : 'password'}
                    autoFocus
                    maxLength={15}
                    placeholder="••••"
                    value={teacherPin}
                    onChange={(e) => handlePinChange(e.target.value)}
                    className="w-full text-center text-3xl font-mono tracking-[0.3em] py-3.5 px-4 rounded-2xl bg-stone-900/90 border-2 border-amber-500/70 text-amber-300 placeholder-stone-600 focus:outline-none focus:ring-4 focus:ring-amber-500/30 shadow-inner"
                  />
                  <Lock className="w-5 h-5 text-amber-500/50 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <button
                    type="button"
                    onClick={() => setShowPinText(!showPinText)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 transition-colors cursor-pointer"
                  >
                    {showPinText ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                <p className="text-[11px] text-stone-400">
                  💡 Tippe deinen 4-stelligen Lehrer-PIN ein. Das System erkennt dich automatisch.
                </p>
              </div>

              {/* Success Badge Banner when PIN is recognized */}
              {pinSuccessTeacher && (
                <div className="p-3.5 rounded-xl bg-emerald-950/90 border border-emerald-500/70 text-emerald-200 text-xs flex items-center justify-center gap-2 animate-bounce">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Willkommen, <strong>{pinSuccessTeacher.name}</strong>! Studio wird geladen...</span>
                </div>
              )}

              {/* Error Banner */}
              {pinError && (
                <div className="p-3.5 rounded-xl bg-red-950/90 border border-red-500/70 text-red-200 text-xs text-center animate-shake">
                  ⚠️ {pinError}
                </div>
              )}

              <button
                type="submit"
                disabled={!teacherPin.trim()}
                className={`w-full max-w-xs mx-auto py-3 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                  teacherPin.trim()
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-stone-950 hover:scale-[1.02]'
                    : 'bg-stone-800 text-stone-500 cursor-not-allowed opacity-60'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Anmelden & Studio öffnen</span>
              </button>

              <div className="pt-2 text-[11px] text-stone-500">
                Synchronisiert mit Firebase & dem zentralen HBS Appportal.
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
