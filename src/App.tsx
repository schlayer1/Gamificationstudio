import React, { useState } from 'react';
import { PlayerProfile, Stats, Skills, GameLogEntry, DecisionChoice, GameDefinition } from './types/game';
import { getStoryForRound } from './data/storyData';
import { NileCanvas } from './components/NileCanvas';
import { DashboardHeader } from './components/DashboardHeader';
import { SetupScreen } from './components/SetupScreen';
import { LexiconModal } from './components/LexiconModal';
import { EndingScreen } from './components/EndingScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { TeacherStudio } from './components/TeacherStudio';
import { soundFX } from './utils/sound';
import { Lock, Sparkles, BookOpen, AlertTriangle } from 'lucide-react';

export const App: React.FC = () => {
  // Game Lifecycle State
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'gameover' | 'ending' | 'studio'>('setup');
  const [activeGameDefinition, setActiveGameDefinition] = useState<GameDefinition | null>(null);
  const [profile, setProfile] = useState<PlayerProfile>({
    name: '',
    gradeLevel: 'mittelstufe',
    gender: 'prinzessin',
    throneName: 'Prinzessin Nefertari',
  });

  // Round tracking (1-20)
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const totalRounds = 20;

  // Primary Stats (Start values from user request: 10% each, EP: 2)
  const [stats, setStats] = useState<Stats>({
    goetter: 10,
    priester: 10,
    adel: 10,
    volk: 10,
    ep: 2,
  });

  // Secondary Skills
  const [skills, setSkills] = useState<Skills>({
    goettlicheAuserwaehltheit: 1,
    politischeGeschicklichkeit: 1,
    militaerischeStaerke: 1,
  });

  // Grace Period (Gnadenfrist: Einmaliger Reset bei 0% gegen Verlust aller EP)
  const [graceUsed, setGraceUsed] = useState<boolean>(false);
  const [graceTriggeredNotice, setGraceTriggeredNotice] = useState<string | null>(null);

  // Sound settings
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Logs & History for the Lexicon
  const [logs, setLogs] = useState<GameLogEntry[]>([]);
  const [isLexiconOpen, setIsLexiconOpen] = useState<boolean>(false);

  // Current Round Result & Feedback Banner
  const [lastConsequence, setLastConsequence] = useState<{
    text: string;
    choiceLabel: string;
    round: number;
    statChanges: Partial<Stats>;
  } | null>(null);

  // Failure tracking
  const [fallenStat, setFallenStat] = useState<string>('Kollaps');

  // Start new game from setup
  const handleStartGame = (newProfile: PlayerProfile) => {
    setProfile(newProfile);
    setCurrentRoundIndex(0);
    setStats({
      goetter: 10,
      priester: 10,
      adel: 10,
      volk: 10,
      ep: 2,
    });
    setSkills({
      goettlicheAuserwaehltheit: 1,
      politischeGeschicklichkeit: 1,
      militaerischeStaerke: 1,
    });
    setGraceUsed(false);
    setGraceTriggeredNotice(null);
    setLogs([]);
    setLastConsequence(null);
    setGameState('playing');
    soundFX.playSailing();
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFX.setEnabled(next);
    if (next) soundFX.playClick();
  };

  // Load a generated game from Studio
  const handleLoadGameFromStudio = (newGame: GameDefinition) => {
    setActiveGameDefinition(newGame);
    setGameState('setup');
  };

  // Current Story round data resolved dynamically based on current player state
  const currentStory = (activeGameDefinition && activeGameDefinition.rounds[currentRoundIndex])
    ? activeGameDefinition.rounds[currentRoundIndex]
    : getStoryForRound(currentRoundIndex + 1, stats, skills);

  // Making a decision in a round
  const handleChoose = (choiceId: 'A' | 'B' | 'C' | 'D') => {
    const choice = currentStory.choices.find((c) => c.id === choiceId);
    if (!choice) return;

    // Check lock for Option D (Kostet 3 EP)
    if (choice.id === 'D') {
      const cost = choice.epCost ?? 3;
      if (stats.ep < cost) {
        soundFX.playCrisis();
        alert("🔒 Option D erfordert mindestens 3 Erfahrungspunkte (EP)!");
        return;
      }
    }

    soundFX.playClick();

    // 1. Calculate new stats
    let newGoetter = stats.goetter + (choice.statChanges.goetter || 0);
    let newPriester = stats.priester + (choice.statChanges.priester || 0);
    let newAdel = stats.adel + (choice.statChanges.adel || 0);
    let newVolk = stats.volk + (choice.statChanges.volk || 0);
    let newEp = stats.ep + (choice.statChanges.ep || 0);

    // Option D cost deduction if applicable
    if (choice.id === 'D' && choice.epCost) {
      newEp -= choice.epCost;
    }
    if (newEp < 0) newEp = 0;

    // 2. Calculate skills
    let newSkills = { ...skills };
    if (choice.skillChanges) {
      newSkills.goettlicheAuserwaehltheit += choice.skillChanges.goettlicheAuserwaehltheit || 0;
      newSkills.politischeGeschicklichkeit += choice.skillChanges.politischeGeschicklichkeit || 0;
      newSkills.militaerischeStaerke += choice.skillChanges.militaerischeStaerke || 0;
    }

    // 3. Check for 0% crash condition & Gnadenfrist
    let triggeredGrace = false;
    let criticalFailStat = '';

    if (newGoetter <= 0) criticalFailStat = 'Götter';
    else if (newPriester <= 0) criticalFailStat = 'Priester';
    else if (newAdel <= 0) criticalFailStat = 'Adel';
    else if (newVolk <= 0) criticalFailStat = 'Volk';

    if (criticalFailStat !== '') {
      if (!graceUsed) {
        // TRIGGER GNADENFRIST: Einmaliger Reset bei 0% gegen Verlust aller EP!
        triggeredGrace = true;
        setGraceUsed(true);
        soundFX.playGrace();

        // Restore to 15% safety threshold, consume all EP
        if (newGoetter <= 0) newGoetter = 15;
        if (newPriester <= 0) newPriester = 15;
        if (newAdel <= 0) newAdel = 15;
        if (newVolk <= 0) newVolk = 15;
        newEp = 0;

        setGraceTriggeredNotice(
          `⚡ GNADENFRIST DER GÖTTER AKTIVIERT! ${criticalFailStat} fiel auf 0%. Durch das Opfer all deiner Erfahrungspunkte (EP) hat dich Ma'at vor dem Verderben gerettet!`
        );
      } else {
        // Gnadenfrist already spent -> Game Over!
        setFallenStat(criticalFailStat);
        soundFX.playCrisis();
        setGameState('gameover');
        return;
      }
    } else {
      setGraceTriggeredNotice(null);
    }

    // Clamp stats between 0 and 100
    const finalStats: Stats = {
      goetter: Math.min(100, Math.max(0, newGoetter)),
      priester: Math.min(100, Math.max(0, newPriester)),
      adel: Math.min(100, Math.max(0, newAdel)),
      volk: Math.min(100, Math.max(0, newVolk)),
      ep: newEp,
    };

    setStats(finalStats);
    setSkills(newSkills);

    // Consequence text based on chosen grade level
    const consequence = choice.consequenceText[profile.gradeLevel];

    // Log to Papyrus Lexicon
    const logEntry: GameLogEntry = {
      round: currentStory.roundNumber,
      location: currentStory.locationName,
      choiceMade: choice.label,
      consequence: consequence,
      statDeltas: choice.statChanges,
      lexicon: {
        term: currentStory.lexiconEntry.term,
        title: currentStory.lexiconEntry.title,
        content: currentStory.lexiconEntry.explanation[profile.gradeLevel],
      },
    };
    setLogs((prev) => [logEntry, ...prev]);

    // Consequence banner
    setLastConsequence({
      text: consequence,
      choiceLabel: choice.label,
      round: currentStory.roundNumber,
      statChanges: choice.statChanges,
    });

    // Advance to next round or ending
    if (currentRoundIndex + 1 >= totalRounds) {
      setGameState('ending');
    } else {
      setCurrentRoundIndex((prev) => prev + 1);
      soundFX.playSailing();
    }
  };

  const handleRestart = () => {
    setGameState('setup');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#120d09] text-stone-100">
      {/* 0. TEACHER STUDIO STATE */}
      {gameState === 'studio' && (
        <TeacherStudio
          onLoadGameToPlayer={handleLoadGameFromStudio}
          onCloseStudio={() => setGameState('setup')}
        />
      )}

      {/* 1. SETUP STATE */}
      {gameState === 'setup' && (
        <SetupScreen
          onStartGame={handleStartGame}
          onOpenStudio={() => setGameState('studio')}
        />
      )}

      {/* 2. GAME OVER STATE */}
      {gameState === 'gameover' && (
        <GameOverScreen
          profile={profile}
          fallenStat={fallenStat}
          round={currentStory.roundNumber}
          stats={stats}
          onRestart={handleRestart}
        />
      )}

      {/* 3. ENDING / CORONATION STATE */}
      {gameState === 'ending' && (
        <EndingScreen
          profile={profile}
          stats={stats}
          skills={skills}
          onRestart={handleRestart}
        />
      )}

      {/* 4. ACTIVE PLAYING STATE */}
      {gameState === 'playing' && (
        <>
          {/* Dashboard Header Bar */}
          <DashboardHeader
            profile={profile}
            stats={stats}
            skills={skills}
            round={currentStory.roundNumber}
            totalRounds={totalRounds}
            graceUsed={graceUsed}
            soundEnabled={soundEnabled}
            onToggleSound={handleToggleSound}
            onOpenLexicon={() => setIsLexiconOpen(true)}
            onOpenStudio={() => setGameState('studio')}
          />

          {/* Main Gameplay Screen (Responsive Standard: fluid-adaptive w-full max-w-[2100px]) */}
          <main className="w-full max-w-[2100px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6 space-y-5">
            {/* Grace Alert Banner if just triggered */}
            {graceTriggeredNotice && (
              <div className="p-3.5 rounded-xl bg-amber-950/90 border-2 border-amber-400 text-amber-200 flex items-center gap-3 animate-pulse shadow-lg text-xs sm:text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-300 shrink-0" />
                <span>{graceTriggeredNotice}</span>
              </div>
            )}

            {/* Canvas Trail Progress Animation */}
            <NileCanvas
              round={currentStory.roundNumber}
              totalRounds={totalRounds}
              locationName={currentStory.locationName}
            />

            {/* Split Workbench: Left (Story & Decisions) | Right (Didactic Lexicon & Reaction) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
              {/* Left Column: Situation & The 4 Choices (A, B, C, D) */}
              <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-7 space-y-4">
                {/* Round Title & Milestone header */}
                <div className="papyrus-dark p-4 sm:p-6 rounded-2xl border border-amber-700/60 shadow-xl space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                    <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
                      {currentStory.milestoneTitle}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded bg-stone-900 border border-stone-700 text-stone-300 font-serif">
                      Station: {currentStory.locationName}
                    </span>
                  </div>

                  {/* Story Situation Prompt adapted to grade */}
                  <p className="text-base sm:text-lg text-amber-100 font-medium leading-relaxed font-serif">
                    {currentStory.situation[profile.gradeLevel]}
                  </p>
                </div>

                {/* Choices Grid */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 px-1">
                    Triff deine königliche Entscheidung:
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentStory.choices.map((choice) => {
                      const isOptionD = choice.id === 'D';
                      const isDLocked = isOptionD && stats.ep < (choice.epCost ?? 3);

                      return (
                        <button
                          key={choice.id}
                          disabled={isDLocked}
                          onClick={() => handleChoose(choice.id)}
                          className={`text-left p-4 rounded-xl border transition-all duration-200 relative group flex flex-col justify-between cursor-pointer ${
                            isDLocked
                              ? 'bg-stone-950/80 border-stone-800 opacity-60 cursor-not-allowed'
                              : isOptionD
                              ? 'bg-gradient-to-br from-amber-950 to-stone-900 border-amber-400 hover:border-amber-300 ring-1 ring-amber-500/40 hover:shadow-amber-500/10 shadow-lg active:scale-[0.99]'
                              : 'bg-stone-900/90 border-amber-800/40 hover:border-amber-500 hover:bg-stone-800/90 active:scale-[0.99]'
                          }`}
                        >
                          <div>
                            {/* Option Header */}
                            <div className="flex items-center justify-between mb-1.5">
                              <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                                isOptionD
                                  ? 'bg-amber-500 text-stone-950 font-extrabold'
                                  : 'bg-amber-950/80 border border-amber-600/40 text-amber-300'
                              }`}>
                                Option {choice.id} {isOptionD ? '(Exklusiv)' : ''}
                              </span>

                              {isOptionD && (
                                <span className={`flex items-center gap-1 text-[11px] font-bold ${
                                  isDLocked ? 'text-red-400' : 'text-amber-300'
                                }`}>
                                  {isDLocked ? <Lock className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5 text-yellow-400" />}
                                  {choice.epCost ?? 3} EP
                                </span>
                              )}
                            </div>

                            {/* Option Label */}
                            <h4 className="text-sm sm:text-base font-bold text-amber-200 mb-1 leading-snug group-hover:text-amber-300">
                              {choice.label}
                            </h4>

                            {/* Option Description */}
                            <p className="text-xs text-stone-300 leading-relaxed mb-3">
                              {choice.description}
                            </p>
                          </div>

                          {/* Stat Preview Pills */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-stone-800/80 text-[11px]">
                            {choice.statChanges.goetter && (
                              <span className={`px-1.5 py-0.5 rounded ${choice.statChanges.goetter > 0 ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' : 'bg-red-950/80 text-red-300 border border-red-800'}`}>
                                ⚡ {choice.statChanges.goetter > 0 ? `+${choice.statChanges.goetter}` : choice.statChanges.goetter}%
                              </span>
                            )}
                            {choice.statChanges.priester && (
                              <span className={`px-1.5 py-0.5 rounded ${choice.statChanges.priester > 0 ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' : 'bg-red-950/80 text-red-300 border border-red-800'}`}>
                                🙏 {choice.statChanges.priester > 0 ? `+${choice.statChanges.priester}` : choice.statChanges.priester}%
                              </span>
                            )}
                            {choice.statChanges.adel && (
                              <span className={`px-1.5 py-0.5 rounded ${choice.statChanges.adel > 0 ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' : 'bg-red-950/80 text-red-300 border border-red-800'}`}>
                                👑 {choice.statChanges.adel > 0 ? `+${choice.statChanges.adel}` : choice.statChanges.adel}%
                              </span>
                            )}
                            {choice.statChanges.volk && (
                              <span className={`px-1.5 py-0.5 rounded ${choice.statChanges.volk > 0 ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' : 'bg-red-950/80 text-red-300 border border-red-800'}`}>
                                😊 {choice.statChanges.volk > 0 ? `+${choice.statChanges.volk}` : choice.statChanges.volk}%
                              </span>
                            )}
                            {choice.statChanges.ep && (
                              <span className="px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800 font-bold">
                                🧠 +{choice.statChanges.ep} EP
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Historical Lexicon Card & Immediate Consequence Feedback */}
              <div className="lg:col-span-5 xl:col-span-5 2xl:col-span-5 space-y-4">
                {/* Last Choice Reaction / Feedback Card */}
                {lastConsequence && (
                  <div className="p-4 rounded-xl bg-gradient-to-br from-stone-900 to-amber-950/40 border border-amber-500/60 shadow-lg space-y-2 animate-fade-in">
                    <div className="flex items-center justify-between text-xs font-mono text-amber-400 border-b border-stone-800 pb-1">
                      <span>Rückblick auf Runde {lastConsequence.round}:</span>
                      <span className="text-emerald-400 font-bold">Entscheidung gewirkt</span>
                    </div>
                    <p className="text-xs text-stone-300">
                      Du wähltest: <strong className="text-amber-200">{lastConsequence.choiceLabel}</strong>
                    </p>
                    <p className="text-xs sm:text-sm text-amber-100 italic bg-stone-950/60 p-2.5 rounded-lg border border-amber-900/50">
                      „{lastConsequence.text}“
                    </p>
                  </div>
                )}

                {/* Live Station Historical Knowledge / Didactic Card */}
                <div className="papyrus-card rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4">
                  <div className="flex items-center gap-2 border-b border-amber-900/30 pb-2">
                    <BookOpen className="w-5 h-5 text-amber-900" />
                    <h3 className="text-base font-extrabold text-amber-950 font-serif m-0">
                      Historisches Wissen: {currentStory.lexiconEntry.title}
                    </h3>
                  </div>

                  <p className="text-sm text-stone-900 leading-relaxed font-sans">
                    {currentStory.lexiconEntry.explanation[profile.gradeLevel]}
                  </p>

                  {/* Contextual Historical Illustration */}
                  <div className="rounded-xl overflow-hidden border border-amber-900/30 shadow-md">
                    <img
                      src={currentStory.imagePath || "/assets/nile_banner.jpg"}
                      alt={currentStory.lexiconEntry.title}
                      className="w-full h-40 sm:h-52 object-cover object-center transition-all duration-500"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-amber-900/10 border border-amber-900/20 text-xs text-amber-950 space-y-1">
                    <strong className="block text-amber-900 font-bold">💡 Hast du gewusst?</strong>
                    <p className="italic">{currentStory.lexiconEntry.curiosityFact}</p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Papyrus Lexicon Modal */}
          <LexiconModal
            isOpen={isLexiconOpen}
            onClose={() => setIsLexiconOpen(false)}
            logs={logs}
            gradeLevel={profile.gradeLevel}
          />
        </>
      )}
    </div>
  );
};

export default App;
