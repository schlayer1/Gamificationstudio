import React from 'react';
import { Stats, Skills, PlayerProfile } from '../types/game';
import { Zap, Heart, ShieldAlert, Users, Sparkles, BookOpen, Volume2, VolumeX, Shield, Award, Sword } from 'lucide-react';
import { soundFX } from '../utils/sound';

interface DashboardHeaderProps {
  profile: PlayerProfile;
  stats: Stats;
  skills: Skills;
  round: number;
  totalRounds: number;
  graceUsed: boolean;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenLexicon: () => void;
  onOpenStudio?: () => void;
  activeGame?: import('../types/game').GameDefinition | null;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  profile,
  stats,
  skills,
  round,
  totalRounds,
  graceUsed,
  soundEnabled,
  onToggleSound,
  onOpenLexicon,
  onOpenStudio,
  activeGame,
}) => {
  // Dynamic Pillars
  const pillar1 = activeGame?.pillars?.[0] || { label: 'Götter ⚡', icon: '⚡' };
  const pillar2 = activeGame?.pillars?.[1] || { label: 'Priester 🙏', icon: '🙏' };
  const pillar3 = activeGame?.pillars?.[2] || { label: 'Adel 👑', icon: '👑' };
  const pillar4 = activeGame?.pillars?.[3] || { label: 'Volk 😊', icon: '😊' };

  const resName = activeGame?.specialResourceName || 'Erfahrung (EP)';
  const resEmoji = activeGame?.specialResourceEmoji || '🧠';

  const skill1Name = activeGame?.skillNames?.skill1 || 'Göttliche Auserwähltheit';
  const skill2Name = activeGame?.skillNames?.skill2 || 'Politische Geschicklichkeit';
  const skill3Name = activeGame?.skillNames?.skill3 || 'Militärische Stärke';

  // Stat Bar helper with color coding
  const renderStatBar = (
    label: string,
    value: number,
    icon: React.ReactNode,
    colorClass: string,
    badgeColor: string
  ) => {
    const isCritical = value <= 15;
    return (
      <div className={`flex flex-col p-2.5 rounded-lg border transition-all ${
        isCritical 
          ? 'bg-red-950/40 border-red-500/80 animate-pulse' 
          : 'bg-stone-900/80 border-amber-800/40'
      }`}>
        <div className="flex items-center justify-between text-xs font-semibold mb-1">
          <span className="flex items-center gap-1.5 text-stone-200 truncate">
            {icon}
            {label}
          </span>
          <span className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${badgeColor}`}>
            {value}%
          </span>
        </div>
        <div className="w-full h-2.5 bg-stone-950 rounded-full overflow-hidden border border-stone-800">
          <div
            className={`h-full transition-all duration-500 rounded-full ${colorClass}`}
            style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <header className="w-full bg-stone-950/90 border-b border-amber-700/50 p-3 sm:p-4 sticky top-0 z-40 backdrop-blur-md shadow-xl">
      <div className="max-w-[2100px] mx-auto flex flex-col gap-3">
        {/* Top line: Player title, round indicator & quick tools */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800/80 pb-2">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl select-none" role="img" aria-label="Krone">👑</span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-amber-300 tracking-wide font-serif m-0">
                  {profile.throneName}
                </h1>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-900/60 border border-amber-600/50 text-amber-200 uppercase font-mono">
                  {profile.gradeLevel === 'unterstufe' ? 'Klasse 5–6' : profile.gradeLevel === 'mittelstufe' ? 'Klasse 7–9' : 'Oberstufe 10+'}
                </span>
              </div>
              <p className="text-xs text-stone-400">
                Reiseabschnitt: <strong className="text-amber-400">Runde {round} von {totalRounds}</strong>
              </p>
            </div>
          </div>

          {/* Controls: Audio, Lexicon, Grace Indicator */}
          <div className="flex items-center gap-2">
            {/* Grace Status Badge */}
            <div
              className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border ${
                graceUsed
                  ? 'bg-stone-900 text-stone-500 border-stone-700 line-through'
                  : 'bg-emerald-950/70 border-emerald-500/60 text-emerald-300'
              }`}
              title={graceUsed ? "Gnadenfrist bereits verbraucht" : "Gnadenfrist bereit: Rettet dich einmalig bei 0%!"}
            >
              <Shield className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Gnadenfrist:</span>
              <span className="font-bold">{graceUsed ? 'Erloschen' : 'Aktiv (1x)'}</span>
            </div>

            {/* Studio / Lehrermodus Button */}
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenStudio && onOpenStudio();
              }}
              className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-stone-900 border border-amber-500/70 text-amber-300 hover:bg-stone-800 transition-all cursor-pointer"
              title="Lehrer-Studio öffnen"
            >
              <span>🧙‍♂️</span>
              <span className="hidden md:inline font-bold">Lehrer-Studio</span>
            </button>

            {/* Lexicon / Archiv Button */}
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenLexicon();
              }}
              className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-amber-950/60 border border-amber-600/60 text-amber-300 hover:bg-amber-900/70 active:scale-95 transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Papyrus-Archiv</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={onToggleSound}
              className={`p-1.5 rounded-md border transition-all ${
                soundEnabled
                  ? 'bg-amber-950/80 border-amber-600/80 text-amber-300 hover:bg-amber-900'
                  : 'bg-stone-900 border-stone-700 text-stone-500'
              }`}
              title={soundEnabled ? "Audio stummschalten" : "Audio aktivieren"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Core Stats Row: 4 Pillars & Special Resource */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
          {renderStatBar(
            pillar1.label,
            stats.goetter,
            <Zap className="w-3.5 h-3.5 text-yellow-400" />,
            'bg-gradient-to-r from-yellow-600 to-amber-400',
            stats.goetter <= 15 ? 'bg-red-500 text-white' : 'bg-yellow-950 text-yellow-300'
          )}
          {renderStatBar(
            pillar2.label,
            stats.priester,
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />,
            'bg-gradient-to-r from-purple-700 to-indigo-400',
            stats.priester <= 15 ? 'bg-red-500 text-white' : 'bg-purple-950 text-purple-300'
          )}
          {renderStatBar(
            pillar3.label,
            stats.adel,
            <Award className="w-3.5 h-3.5 text-blue-400" />,
            'bg-gradient-to-r from-blue-700 to-cyan-400',
            stats.adel <= 15 ? 'bg-red-500 text-white' : 'bg-blue-950 text-blue-300'
          )}
          {renderStatBar(
            pillar4.label,
            stats.volk,
            <Heart className="w-3.5 h-3.5 text-emerald-400" />,
            'bg-gradient-to-r from-emerald-600 to-green-400',
            stats.volk <= 15 ? 'bg-red-500 text-white' : 'bg-emerald-950 text-emerald-300'
          )}

          {/* Special Resource Box */}
          <div className="col-span-2 sm:col-span-1 flex items-center justify-between px-3 py-2 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-amber-700/50 transition-all">
            <div className="flex items-center gap-2">
              <span className="text-base select-none">{resEmoji}</span>
              <div className="leading-tight">
                <span className="text-[10px] block uppercase font-mono font-semibold text-stone-400 truncate max-w-[110px]">{resName}</span>
                <span className="text-[10px] text-stone-500">3 Punkte für Option D</span>
              </div>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-950 border border-amber-600/40 text-amber-300 font-mono font-bold text-xs shadow-inner">
              <span>{stats.ep}</span>
            </div>
          </div>
        </div>

        {/* Secondary Skill Ribbons: 3 Talente */}
        <div className="flex flex-wrap items-center gap-3 text-xs bg-stone-900/60 px-3 py-1.5 rounded-md border border-stone-800">
          <span className="text-stone-400 font-medium">Talente & Fertigkeiten:</span>
          <span className="flex items-center gap-1 text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            {skill1Name}: <strong>{skills.goettlicheAuserwaehltheit}</strong>
          </span>
          <span className="text-stone-600">•</span>
          <span className="flex items-center gap-1 text-cyan-300">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            {skill2Name}: <strong>{skills.politischeGeschicklichkeit}</strong>
          </span>
          <span className="text-stone-600">•</span>
          <span className="flex items-center gap-1 text-red-300">
            <Sword className="w-3.5 h-3.5 text-red-400" />
            {skill3Name}: <strong>{skills.militaerischeStaerke}</strong>
          </span>
        </div>
      </div>
    </header>
  );
};
