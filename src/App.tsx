import React, { useState } from 'react';
import { PlayerProfile, Stats, Skills, GameLogEntry, DecisionChoice, GameDefinition } from './types/game';
import { getStoryForRound } from './data/storyData';
import { ExpeditionProgressBar } from './components/ExpeditionProgressBar';
import { DashboardHeader } from './components/DashboardHeader';
import { SetupScreen } from './components/SetupScreen';
import { LexiconModal } from './components/LexiconModal';
import { EndingScreen } from './components/EndingScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { TeacherStudio } from './components/TeacherStudio';
import { StationImagePromptModal } from './components/StationImagePromptModal';
import { StationHeroStage } from './components/StationHeroStage';
import { ExpeditionMapModal } from './components/ExpeditionMapModal';
import { EntryPortal } from './components/EntryPortal';
import { soundFX } from './utils/sound';
import { Lock, Sparkles, BookOpen, AlertTriangle, Camera, Image as ImageIcon } from 'lucide-react';
import { detectEraTheme, ERA_THEMES } from './utils/themeManager';

export const App: React.FC = () => {
  // Game Lifecycle State: portal (Code-Eingabe / Lehrer-Login) -> setup -> playing -> gameover / ending / studio
  const [gameState, setGameState] = useState<'portal' | 'setup' | 'playing' | 'gameover' | 'ending' | 'studio'>('portal');
  const [activeGameDefinition, setActiveGameDefinition] = useState<GameDefinition | null>(null);
  const [activeShareCode, setActiveShareCode] = useState<string | null>(null);
  const [profile, setProfile] = useState<PlayerProfile>({
    name: '',
    gradeLevel: 'mittelstufe',
    gender: 'prinzessin',
    throneName: 'Prinzessin Nefertari',
  });

  // Round tracking (1-20 or custom length)
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const totalRounds = activeGameDefinition?.rounds?.length || 20;

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
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);

  // Station Image Modal & Custom Images Map (roundIndex -> imageUrl)
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [customStationImages, setCustomStationImages] = useState<Record<number, string>>({});
  const [customStationHotspots, setCustomStationHotspots] = useState<Record<number, import('./types/game').StationHotspot[]>>({});

  // Current Round Result & Feedback Banner
  const [lastConsequence, setLastConsequence] = useState<{
    text: string;
    choiceLabel: string;
    round: number;
    statChanges: Partial<Stats>;
  } | null>(null);
  const [lastReactionType, setLastReactionType] = useState<'positive' | 'negative' | 'divine' | null>(null);

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

  // Dynamic Theme according to active game era
  const currentTheme = activeGameDefinition?.eraThemeId
    ? ERA_THEMES[activeGameDefinition.eraThemeId]
    : detectEraTheme(activeGameDefinition?.era || 'Altes Ägypten', activeGameDefinition?.archetype);

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

    // Visual & Acoustic Reaction FX
    if (choice.id === 'D') {
      setLastReactionType('divine');
      soundFX.playBlessing();
    } else {
      soundFX.playSealStamp();
      const hasMajorDrop = Object.values(choice.statChanges).some((v) => typeof v === 'number' && v < -5);
      setLastReactionType(hasMajorDrop ? 'negative' : 'positive');
    }
    setTimeout(() => setLastReactionType(null), 1800);

    // Advance to next round or ending
    if (currentRoundIndex + 1 >= totalRounds) {
      setGameState('ending');
    } else {
      const nextRound = currentRoundIndex + 2;
      // Play triumphant milestone fanfare at 25%, 50%, 75%
      if (nextRound === 6 || nextRound === 11 || nextRound === 16) {
        soundFX.playMilestone();
      } else {
        soundFX.playSailing();
      }
      setCurrentRoundIndex((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setGameState('setup');
  };

  return (
    <div className={`min-h-screen flex flex-col ${currentTheme.bodyBgClass} text-stone-100 transition-colors duration-700`}>
      {/* 0. TEACHER STUDIO STATE */}
      {gameState === 'studio' && (
        <TeacherStudio
          onLoadGameToPlayer={handleLoadGameFromStudio}
          onCloseStudio={() => setGameState('setup')}
        />
      )}

      {/* 0. ENTRY PORTAL STATE (Code-Eingabe für Schüler & Lehrer-PIN-Login) */}
      {gameState === 'portal' && (
        <EntryPortal
          onJoinGameWithCode={(game, code) => {
            setActiveGameDefinition(game);
            setActiveShareCode(code);
            setGameState('setup');
          }}
          onOpenTeacherStudio={() => {
            setGameState('studio');
          }}
          onQuickStartDefault={(game) => {
            setActiveGameDefinition(game);
            setActiveShareCode('EGY01');
            setGameState('setup');
          }}
        />
      )}

      {/* 1. SETUP STATE */}
      {gameState === 'setup' && (
        <SetupScreen
          onStartGame={handleStartGame}
          onOpenStudio={() => setGameState('studio')}
          onBackToPortal={() => setGameState('portal')}
          activeGame={activeGameDefinition}
          activeCode={activeShareCode}
          onSelectGame={(game) => {
            setActiveGameDefinition(game);
          }}
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
          theme={currentTheme}
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
            activeGame={activeGameDefinition}
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

            {/* Sleek Cinematic Journey Progress Rail with Map Button */}
            <ExpeditionProgressBar
              round={currentStory.roundNumber}
              totalRounds={totalRounds}
              locationName={currentStory.locationName}
              theme={currentTheme}
              onOpenMap={() => setIsMapOpen(true)}
            />

            {/* PROMINENT STATION HERO STAGE: Panoramic 16:9 Illustration with Interactive Hotspots & Visual Reaction FX */}
            <StationHeroStage
              imageSrc={customStationImages[currentRoundIndex] || currentStory.imagePath || currentTheme.defaultBannerUrl || "/assets/nile_banner.jpg"}
              locationName={currentStory.locationName}
              milestoneTitle={currentStory.milestoneTitle}
              roundNumber={currentStory.roundNumber}
              totalRounds={totalRounds}
              lastReactionChoice={lastConsequence?.choiceLabel}
              lastReactionType={lastReactionType}
              hotspots={customStationHotspots[currentRoundIndex] || currentStory.hotspots}
              theme={currentTheme}
            />

            {/* Split Workbench: Left (Story & Decisions) | Right (Didactic Lexicon & Reaction) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
              {/* Left Column: Situation & The 4 Choices (A, B, C, D) */}
              <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-7 space-y-4">
                {/* Round Title & Milestone header */}
                <div className={`${currentTheme.cardBg} p-4 sm:p-6 rounded-2xl border-2 ${currentTheme.cardBorder} shadow-xl space-y-3`}>
                  <div className="flex items-center justify-between border-b border-stone-800/80 pb-2">
                    <span className={`text-xs uppercase font-mono tracking-widest ${currentTheme.badgeText} font-bold`}>
                      {currentStory.milestoneTitle}
                    </span>
                    <span className={`text-xs px-2.5 py-1 rounded bg-stone-900 border ${currentTheme.badgeBorder} ${currentTheme.badgeText} font-serif`}>
                      Station: {currentStory.locationName}
                    </span>
                  </div>

                  {/* Story Situation Prompt adapted to grade */}
                  <p className="text-base sm:text-lg text-stone-100 font-medium leading-relaxed font-serif">
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

                  {/* Compact Scene Explorer Hint */}
                  <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-900/30 flex items-center gap-2 text-xs text-amber-800">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Tippe auf die Station oben, um historische Zeitzeugen und Details zu erforschen.</span>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-900/10 border border-amber-900/20 text-xs text-amber-950 space-y-1">
                    <strong className="block text-amber-900 font-bold">💡 Hast du gewusst?</strong>
                    <p className="italic">{currentStory.lexiconEntry.curiosityFact}</p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Station Image & Prompt Generator Modal */}
          <StationImagePromptModal
            isOpen={isImageModalOpen}
            onClose={() => setIsImageModalOpen(false)}
            stationTitle={currentStory.milestoneTitle}
            locationName={currentStory.locationName}
            roundNumber={currentStory.roundNumber}
            currentImage={customStationImages[currentRoundIndex] || currentStory.imagePath}
            suggestedPrompt={currentStory.imagePrompt}
            currentArtStyle={activeGameDefinition?.artStyle || 'pixel_art'}
            currentHotspots={customStationHotspots[currentRoundIndex] || currentStory.hotspots}
            onSelectImage={(newUrl) => {
              setCustomStationImages((prev) => ({
                ...prev,
                [currentRoundIndex]: newUrl,
              }));
            }}
            onUpdateHotspots={(updatedHotspots) => {
              setCustomStationHotspots((prev) => ({
                ...prev,
                [currentRoundIndex]: updatedHotspots,
              }));
            }}
          />

          {/* Papyrus Lexicon Modal */}
          <LexiconModal
            isOpen={isLexiconOpen}
            onClose={() => setIsLexiconOpen(false)}
            logs={logs}
            gradeLevel={profile.gradeLevel}
          />

          {/* Collapsible Interactive Expedition Map Modal */}
          <ExpeditionMapModal
            isOpen={isMapOpen}
            onClose={() => setIsMapOpen(false)}
            stations={Array.from({ length: totalRounds }).map((_, idx) => {
              const rStory = activeGameDefinition?.rounds?.[idx] || getStoryForRound(idx + 1, stats, skills);
              return {
                roundNumber: idx + 1,
                locationName: rStory.locationName,
                milestoneTitle: rStory.milestoneTitle,
                completed: idx < currentRoundIndex,
                current: idx === currentRoundIndex,
              };
            })}
            currentRound={currentStory.roundNumber}
            totalRounds={totalRounds}
            theme={currentTheme}
          />
        </>
      )}
    </div>
  );
};

export default App;
