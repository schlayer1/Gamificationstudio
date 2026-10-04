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
  
  const getInitialHeroOrigin = (): import('../types/game').PlayerProfile['heroOrigin'] => {
    const eraLower = (activeGame?.era || '').toLowerCase();
    const titleLower = (activeGame?.title || '').toLowerCase();
    if (eraLower.includes('german') || titleLower.includes('germanen') || activeGame?.archetype === 'mythology_duel') {
      return 'germanisch';
    }
    if (eraLower.includes('weltkrieg') || eraLower.includes('graben') || titleLower.includes('weltkrieg')) {
      return 'deutscher_soldat';
    }
    if (eraLower.includes('nsdap') || eraLower.includes('nationalsozialismus') || titleLower.includes('diktatur')) {
      return 'zivilist_buerger';
    }
    return 'germanisch';
  };

  const [selectedHeroOrigin, setSelectedHeroOrigin] = useState<import('../types/game').PlayerProfile['heroOrigin']>(getInitialHeroOrigin());

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

  // Generate era-specific title and character name based on active game era
  const getPreviewThroneName = () => {
    const trimmed = name.trim() || 'Alex';
    const eraLower = (activeGame?.era || '').toLowerCase();
    const titleLower = (activeGame?.title || '').toLowerCase();

    // 1. Steinzeit
    if (eraLower.includes('steinzeit') || eraLower.includes('neolith') || titleLower.includes('steinzeit')) {
      if (gender === 'prinzessin') {
        const titles = ['Sippenführerin Ayla', 'Jägerin Tara', 'Schamanin Kaya', 'Hüterin Sola'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} (${trimmed})`;
      } else if (gender === 'prinz') {
        const titles = ['Sippenanführer Torak', 'Großwildjäger Orok', 'Spurenleser Baran', 'Werkzeugmacher Keno'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} (${trimmed})`;
      } else {
        return `Sippenältester/e ${trimmed}`;
      }
    }

    // 2. Römer vs. Germanen (Götterdämmerung am Limes / Mythologie)
    if (eraLower.includes('german') || titleLower.includes('germanen') || activeGame?.archetype === 'mythology_duel') {
      if (selectedHeroOrigin === 'germanisch') {
        if (gender === 'prinzessin') {
          const titles = ['Seherin Veleda', 'Schildmaid Thusnelda', 'Hüterin Freya', 'Stammesfürstin Alruna'];
          const chosen = titles[Math.abs(trimmed.length) % titles.length];
          return `${chosen} (${trimmed} vom Stamm der Cherusker)`;
        } else if (gender === 'prinz') {
          const titles = ['Häuptling Arminius', 'Krieger Segimer', 'Späher Wulf', 'Bärenjäger Bodo'];
          const chosen = titles[Math.abs(trimmed.length) % titles.length];
          return `${chosen} (${trimmed} vom Stamm der Chatten)`;
        } else {
          return `Waldhüter/in ${trimmed} von Germanien`;
        }
      } else {
        // Römischer Legionär / Tribun
        if (gender === 'prinzessin') {
          const titles = ['Präfektin Valeria', 'Patrizierin Julia', 'Senatorin Livia', 'Gelehrte Claudia'];
          const chosen = titles[Math.abs(trimmed.length) % titles.length];
          return `${chosen} (${trimmed} am Limes)`;
        } else if (gender === 'prinz') {
          const titles = ['Centurio Marcus', 'Legat Lucius', 'Tribun Flavius', 'Feldherr Drusus'];
          const chosen = titles[Math.abs(trimmed.length) % titles.length];
          return `${chosen} (${trimmed} der XIX. Legion)`;
        } else {
          return `Grenzoffizier ${trimmed} von Rom`;
        }
      }
    }

    // 2b. Antikes Rom (Aufstieg zum Caesar)
    if (eraLower.includes('rom') || eraLower.includes('caesar') || titleLower.includes('rom')) {
      if (gender === 'prinzessin') {
        const titles = ['Patrizierin Julia', 'Senatorin Livia', 'Augusta Octavia', 'Cornelia'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} ${trimmed}`;
      } else if (gender === 'prinz') {
        const titles = ['Konsul Marcus', 'Tribun Gaius', 'Legat Lucius', 'Senator Flavius'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} ${trimmed}`;
      } else {
        return `Magistrat ${trimmed} von Rom`;
      }
    }

    // 3. Reformation / Mittelalter
    if (eraLower.includes('reformation') || eraLower.includes('luther') || eraLower.includes('mittelalter') || eraLower.includes('stamm')) {
      if (gender === 'prinzessin') {
        const titles = ['Burgfräulein Katharina', 'Gelehrte Elisabeth', 'Magistra Anna', 'Fürstin Sophie'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} ${trimmed}`;
      } else if (gender === 'prinz') {
        const titles = ['Magister Johannes', 'Ritter Friedrich', 'Gelehrter Heinrich', 'Reformer Lucas'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} ${trimmed}`;
      } else {
        return `Chronist/in ${trimmed}`;
      }
    }

    // 4. Antikes Griechenland / Alexander
    if (eraLower.includes('alexander') || eraLower.includes('griechen') || titleLower.includes('alexander') || titleLower.includes('athen')) {
      if (gender === 'prinzessin') {
        const titles = ['Strategin Helena', 'Priesterin Kassandra', 'Prinzessin Roxane', 'Gelehrte Sophia'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} ${trimmed}`;
      } else if (gender === 'prinz') {
        const titles = ['Hetairos Leonidas', 'Feldherr Nikostratos', 'Stratege Lysander', 'Reiterführer Perikles'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} ${trimmed}`;
      } else {
        return `Archon ${trimmed} von Hellas`;
      }
    }

    // 5. Frankenreich & Karl der Große
    if (eraLower.includes('frank') || titleLower.includes('karl der große') || titleLower.includes('frankenreich')) {
      if (gender === 'prinzessin') {
        const titles = ['Pfalzgräfin Fastrada', 'Gelehrte Bertha', 'Hofmagistra Gisela'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} (${trimmed})`;
      } else if (gender === 'prinz') {
        const titles = ['Pfalzgraf Einhard', 'Königsbote Gerold', 'Ritter Roland'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} (${trimmed})`;
      } else {
        return `Reichsgesandte/r ${trimmed}`;
      }
    }

    // 6. Französische Revolution & Napoleon
    if (eraLower.includes('revolution') || eraLower.includes('napoleon') || titleLower.includes('revolution')) {
      if (gender === 'prinzessin') {
        const titles = ['Citoyenne Olympe', 'Abgeordnete Madame Roland', 'Patriotin Sophie'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} (${trimmed})`;
      } else if (gender === 'prinz') {
        const titles = ['Citoyen Camille', 'Volksvertreter Jean', 'Deputierter Henri'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} (${trimmed})`;
      } else {
        return `Repräsentant/in ${trimmed} der Nation`;
      }
    }

    // 7. Industrielle Revolution & 19. Jahrhundert
    if (eraLower.includes('industrie') || eraLower.includes('dampf') || titleLower.includes('industrie') || titleLower.includes('schlot') || titleLower.includes('arbeiter')) {
      if (gender === 'prinzessin') {
        const titles = ['Fabrikinspektorin Ada', 'Sozialreformerin Bertha', 'Ingenieurin Clara', 'Betriebsärztin Elisabeth'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} (${trimmed})`;
      } else if (gender === 'prinz') {
        const titles = ['Fabrikinspektor James', 'Chefingenieur Friedrich', 'Gewerkschafter August', 'Eisenbahnpionier Robert'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} (${trimmed})`;
      } else {
        return `Gewerbeinspektor/in ${trimmed}`;
      }
    }

    // 8. Weimarer Republik
    if (eraLower.includes('weimar') || titleLower.includes('weimar') || eraLower.includes('1920')) {
      if (gender === 'prinzessin') {
        const titles = ['Reichstagsabgeordnete Marie', 'Bauhaus-Gestalterin Marianne', 'Journalistin Gabriele'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} (${trimmed})`;
      } else if (gender === 'prinz') {
        const titles = ['Abgeordneter Friedrich', 'Bauhaus-Architekt Walter', 'Verfassungsexperte Hugo'];
        const chosen = titles[Math.abs(trimmed.length) % titles.length];
        return `${chosen} (${trimmed})`;
      } else {
        return `Demokratie-Verteidiger/in ${trimmed}`;
      }
    }

    // 9. Erster Weltkrieg: Soldaten-Perspektiven (Multiperspektivität)
    if (eraLower.includes('weltkrieg') || eraLower.includes('graben') || titleLower.includes('weltkrieg')) {
      if (selectedHeroOrigin === 'franzoesischer_soldat') {
        return `Soldat de 1re classe ${trimmed} ('Poilu')`;
      } else if (selectedHeroOrigin === 'russischer_soldat') {
        return `Infanterist ${trimmed} (Kaiserlich-Russische Armee)`;
      } else {
        return `Musketier / Landser ${trimmed} (Deutsches Heer)`;
      }
    }

    // 10. Nationalsozialismus & Vorkriegszeit 1933–1939: Zivilisten-Perspektive
    if (eraLower.includes('nsdap') || eraLower.includes('nationalsozialismus') || titleLower.includes('diktatur') || titleLower.includes('schatten über deutschland')) {
      if (selectedHeroOrigin === 'zivilist_arbeiter') {
        return `Werkmeister / Dreher ${trimmed} (Siemens-Werke Berlin)`;
      } else if (selectedHeroOrigin === 'zivilist_jugend') {
        return `Jugendliche/r ${trimmed} (Swing-Jugend / Freidenker)`;
      } else {
        return `Bürger/in & Chronist/in ${trimmed} (Zivilcourage)`;
      }
    }

    // 11. Altes Ägypten (oder Standard Pharaonen-Expedition)
    if (eraLower.includes('ägypten') || eraLower.includes('nil') || titleLower.includes('pharao') || titleLower.includes('nil') || !activeGame) {
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
    }

    // 12. Allgemeiner historischer Fallback für völlig freie Spiele
    if (gender === 'prinzessin') {
      return `Historische Akteurin ${trimmed}`;
    } else if (gender === 'prinz') {
      return `Historischer Akteur ${trimmed}`;
    } else {
      return `Expeditionsleiter/in ${trimmed}`;
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
      heroOrigin: selectedHeroOrigin,
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

      {/* Decorative Banner (Adapts to Active Game Era Theme) */}
      <div className="w-full relative rounded-2xl overflow-hidden border-2 border-amber-600/60 shadow-2xl mb-6 group">
        <img
          src={activeGame?.rounds[0]?.imagePath || theme.defaultBannerUrl || "/assets/nile_banner.jpg"}
          alt="Banner"
          className="w-full h-48 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex items-end p-4 sm:p-6">
          <div className="space-y-1">
            <span className={`text-xs font-mono font-bold tracking-widest uppercase ${theme.badgeBg} ${theme.badgeText} px-2.5 py-1 rounded border ${theme.badgeBorder} inline-block`}>
              {activeGame ? activeGame.era : (theme.id === 'egypt_gold' ? "Altes Ägypten (2600 v. Chr.)" : theme.name)}
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-100 font-serif m-0 drop-shadow-md">
              {activeGame ? activeGame.title : (theme.id === 'egypt_gold' ? "Die Nil-Expedition nach Gizeh" : theme.name)}
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
          {activeGame ? activeGame.title : (theme.id === 'egypt_gold' ? "Aufstieg zum Pharao" : theme.name)}
        </h1>
        <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto font-light">
          {activeGame 
            ? activeGame.description 
            : (theme.id === 'egypt_gold'
                ? "Begib dich auf die abenteuerliche Nil-Expedition von Elephantine nach Gizeh. Meistere 20 historische Runden, balanciere die 4 Mächte des Reiches und kröne dich zum Herrscher beider Länder!"
                : "Meistere 20 historische Runden, balanciere die 4 Mächte und gestalte die Geschichte dieser Epoche!")}
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

          {/* Question 2: Perspective or Gender selection depending on game era */}
          {(() => {
            const eraLower = (activeGame?.era || '').toLowerCase();
            const titleLower = (activeGame?.title || '').toLowerCase();
            const isWW1 = eraLower.includes('weltkrieg') || eraLower.includes('graben') || titleLower.includes('weltkrieg');
            const isNS = eraLower.includes('nsdap') || eraLower.includes('nationalsozialismus') || titleLower.includes('diktatur') || titleLower.includes('schatten über deutschland');
            const isMythologyRomeGermanen = eraLower.includes('german') || titleLower.includes('germanen') || activeGame?.archetype === 'mythology_duel';

            if (isMythologyRomeGermanen) {
              return (
                <div className="space-y-4">
                  {/* Step A: Wähle deine Fraktion (Römer oder Germane) */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-stone-200 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-amber-400">2.</span> Wähle dein Volk & Fraktion am Limes:
                      </span>
                      <span className="text-[11px] font-mono text-amber-400">Freie Wahlfreiheit</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          setSelectedHeroOrigin('roemisch');
                        }}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          selectedHeroOrigin === 'roemisch'
                            ? 'bg-amber-950/80 border-amber-400 ring-2 ring-amber-500/40 shadow-lg text-amber-200'
                            : 'bg-stone-900/90 border-stone-800 hover:border-amber-700/60 text-stone-300'
                        }`}
                      >
                        <div className="text-sm font-bold flex items-center gap-2">
                          <span>🏛️</span> Römischer Offizier / Tribun
                        </div>
                        <div className="text-xs text-stone-400 mt-1 leading-snug">
                          Verteidige das Imperium Romanum, halte den Limes und diene den Göttern Jupiter und Mars.
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          setSelectedHeroOrigin('germanisch');
                        }}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          selectedHeroOrigin === 'germanisch'
                            ? 'bg-emerald-950/80 border-emerald-400 ring-2 ring-emerald-500/40 shadow-lg text-emerald-200'
                            : 'bg-stone-900/90 border-stone-800 hover:border-emerald-700/60 text-stone-300'
                        }`}
                      >
                        <div className="text-sm font-bold flex items-center gap-2">
                          <span>🌳</span> Germanischer Krieger / Stammesheld
                        </div>
                        <div className="text-xs text-stone-400 mt-1 leading-snug">
                          Kämpfe für die Freiheit deines Stammes in den Urwäldern, verehre Donar und hüte die heiligen Haine.
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Step B: Titel / Anrede */}
                  <div className="space-y-2 pt-1">
                    <label className="block text-xs font-semibold text-stone-300">
                      Anrede & Rang:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          setGender('prinzessin');
                        }}
                        className={`py-2 px-2.5 rounded-lg border text-xs font-medium transition-all ${
                          gender === 'prinzessin'
                            ? 'bg-amber-600 text-stone-950 border-amber-400 font-bold shadow-md'
                            : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-amber-600'
                        }`}
                      >
                        {selectedHeroOrigin === 'germanisch' ? '⚔️ Schildmaid / Seherin' : '🏛️ Patrizierin / Präfektin'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          setGender('prinz');
                        }}
                        className={`py-2 px-2.5 rounded-lg border text-xs font-medium transition-all ${
                          gender === 'prinz'
                            ? 'bg-amber-600 text-stone-950 border-amber-400 font-bold shadow-md'
                            : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-amber-600'
                        }`}
                      >
                        {selectedHeroOrigin === 'germanisch' ? '🪓 Krieger / Häuptling' : '🛡️ Centurio / Tribun'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          setGender('neutral');
                        }}
                        className={`py-2 px-2.5 rounded-lg border text-xs font-medium transition-all ${
                          gender === 'neutral'
                            ? 'bg-amber-600 text-stone-950 border-amber-400 font-bold shadow-md'
                            : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-amber-600'
                        }`}
                      >
                        ✨ Held/in
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            if (isWW1) {
              return (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-stone-200 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="text-amber-400">2.</span> Wähle deine Soldaten-Perspektive:
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">Historische Multiperspektivität</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'deutscher_soldat' as const, label: '🇩🇪 Deutscher Landser', sub: 'Westfront & Schützengraben' },
                      { id: 'franzoesischer_soldat' as const, label: '🇫🇷 Französischer Poilu', sub: 'Verdun & Heimatverteidigung' },
                      { id: 'russischer_soldat' as const, label: '🇷🇺 Russischer Infanterist', sub: 'Ostfront & Hungerwinter 1917' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          setSelectedHeroOrigin(opt.id);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          selectedHeroOrigin === opt.id
                            ? 'bg-amber-950/80 border-amber-400 ring-2 ring-amber-500/40 shadow-lg text-amber-200'
                            : 'bg-stone-900/90 border-stone-800 hover:border-amber-700/60 text-stone-300'
                        }`}
                      >
                        <div className="text-xs font-bold">{opt.label}</div>
                        <div className="text-[10px] text-stone-400 mt-0.5">{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            if (isNS) {
              return (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-stone-200 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="text-amber-400">2.</span> Wähle deine Zivilisten-Rolle im Alltag:
                    </span>
                    <span className="text-[11px] font-mono text-amber-400">Zivilcourage & Zeitzeuge</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'zivilist_buerger' as const, label: '🕯️ Bürger/in & Chronist/in', sub: 'Nachbarschaft, Zivilcourage & Haltung' },
                      { id: 'zivilist_arbeiter' as const, label: '⚙️ Industriearbeiter/in', sub: 'Fabrikalltag & verbotene Gewerkschaft' },
                      { id: 'zivilist_jugend' as const, label: '📻 Jugendlicher Andersdenkender', sub: 'Swing-Jugend & Geheimsender' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          setSelectedHeroOrigin(opt.id);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          selectedHeroOrigin === opt.id
                            ? 'bg-red-950/80 border-red-400 ring-2 ring-red-500/40 shadow-lg text-red-200'
                            : 'bg-stone-900/90 border-stone-800 hover:border-red-700/60 text-stone-300'
                        }`}
                      >
                        <div className="text-xs font-bold">{opt.label}</div>
                        <div className="text-[10px] text-stone-400 mt-0.5">{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            // Determine appropriate labels for Question 2 and character role
            const isModernOrIndustrial = eraLower.includes('industrie') || eraLower.includes('dampf') || titleLower.includes('industrie') || eraLower.includes('weimar') || eraLower.includes('revolution');
            const isAncientEgypt = eraLower.includes('ägypt') || titleLower.includes('pharao') || titleLower.includes('nil') || !activeGame;

            const femaleLabel = isModernOrIndustrial ? '👩 Dame / Bürgerin' : isAncientEgypt ? '👑 Prinzessin' : '👑 Dame / Anführerin';
            const maleLabel = isModernOrIndustrial ? '👨 Herr / Bürger' : isAncientEgypt ? '👑 Prinz' : '👑 Herr / Anführer';
            const neutralLabel = isModernOrIndustrial ? '✨ Person / Pionier' : '✨ Herrscher/in';
            const roleBoxLabel = isModernOrIndustrial ? 'Deine historische Identität im Spiel:' : isAncientEgypt ? 'Dein zugewiesener Thronname:' : 'Dein historischer Rollenname:';

            return (
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-amber-200 flex items-center gap-2">
                  <span className="text-amber-400">2.</span> Wähle deinen Charakter & Anrede:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      soundFX.playClick();
                      setGender('prinzessin');
                    }}
                    className={`py-2.5 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                      gender === 'prinzessin'
                        ? 'bg-amber-600 text-stone-950 border-amber-400 font-bold shadow-md'
                        : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-amber-600'
                    }`}
                  >
                    {femaleLabel}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      soundFX.playClick();
                      setGender('prinz');
                    }}
                    className={`py-2.5 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                      gender === 'prinz'
                        ? 'bg-amber-600 text-stone-950 border-amber-400 font-bold shadow-md'
                        : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-amber-600'
                    }`}
                  >
                    {maleLabel}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      soundFX.playClick();
                      setGender('neutral');
                    }}
                    className={`py-2.5 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                      gender === 'neutral'
                        ? 'bg-amber-600 text-stone-950 border-amber-400 font-bold shadow-md'
                        : 'bg-stone-900 text-stone-300 border-stone-700 hover:border-amber-600'
                    }`}
                  >
                    {neutralLabel}
                  </button>
                </div>
              </div>
            );
          })()}

          {/* Generated Royal/Character Title Preview Box */}
          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 flex items-center justify-between">
            <div>
              <span className="text-xs text-stone-400 uppercase tracking-wider block font-semibold">
                {(() => {
                  const el = (activeGame?.era || '').toLowerCase();
                  const tl = (activeGame?.title || '').toLowerCase();
                  if (el.includes('industrie') || el.includes('weimar') || el.includes('revolution') || el.includes('weltkrieg') || el.includes('nsdap')) {
                    return 'Deine historische Rolle im Spiel:';
                  }
                  if (el.includes('ägypt') || tl.includes('pharao') || tl.includes('nil') || !activeGame) {
                    return 'Dein zugewiesener Thronname:';
                  }
                  return 'Dein historischer Rollenname:';
                })()}
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
              <span className="block font-bold text-amber-400">
                {activeGame?.pillars ? activeGame.pillars.map(p => p.icon).join(' ') : '⚡ 🙏 👑 😊'}
              </span>
              <span>Startwerte je 10%</span>
            </div>
            <div className="p-2 rounded bg-stone-900 border border-stone-800">
              <span className="block font-bold text-amber-400">
                {activeGame?.specialResourceEmoji || '🧠'} 2 Start-Punkte
              </span>
              <span className="truncate block max-w-[120px] mx-auto">{activeGame?.specialResourceName || 'Erfahrungspunkte'}</span>
            </div>
            <div className="p-2 rounded bg-stone-900 border border-stone-800">
              <span className="block font-bold text-amber-400">🔒 Option D</span>
              <span>Freischaltbar ab 3 {activeGame?.specialResourceEmoji || 'EP'}</span>
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
