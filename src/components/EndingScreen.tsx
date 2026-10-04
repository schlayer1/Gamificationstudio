import React, { useState } from 'react';
import { PlayerProfile, Stats, Skills, GameDefinition } from '../types/game';
import { Crown, Trophy, RotateCcw, Printer, Eye, X, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFX } from '../utils/sound';
import { EraThemeConfig } from '../utils/themeManager';

interface EndingScreenProps {
  profile: PlayerProfile;
  stats: Stats;
  skills: Skills;
  theme?: EraThemeConfig;
  onRestart: () => void;
  activeGame?: GameDefinition | null;
}

export const EndingScreen: React.FC<EndingScreenProps> = ({
  profile,
  stats,
  skills,
  theme,
  onRestart,
  activeGame,
}) => {
  const [showCertificatePreview, setShowCertificatePreview] = useState(false);

  React.useEffect(() => {
    soundFX.playCoronation();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#fbbf24', '#f59e0b', '#d97706', '#ffffff', '#38bdf8'],
    });
  }, []);

  const eraLower = (activeGame?.era || '').toLowerCase();
  const titleLower = (activeGame?.title || '').toLowerCase();
  const combinedEra = `${eraLower} ${titleLower}`;

  const isRome = combinedEra.includes('rom') || theme?.id === 'rome_imperial';
  const isLuther = combinedEra.includes('luther') || combinedEra.includes('reformation') || theme?.id === 'luther_ink';
  const isStoneage = combinedEra.includes('steinzeit') || theme?.id === 'stoneage_earth';
  const isGreece = combinedEra.includes('griechen') || combinedEra.includes('alexander') || theme?.id === 'greece_aegean';
  const isIndustrial = combinedEra.includes('industrie') || combinedEra.includes('dampf') || combinedEra.includes('revolution 1848') || theme?.id === 'industrial_steam';
  const isWeimar = combinedEra.includes('weimar') || combinedEra.includes('demokratie') || theme?.id === 'weimar_cabaret';
  const isWW1 = combinedEra.includes('weltkrieg') || combinedEra.includes('1914') || combinedEra.includes('graben') || theme?.id === 'ww1_trenches';
  const isNS = combinedEra.includes('ns-') || combinedEra.includes('nationalsozialismus') || combinedEra.includes('widerstand') || combinedEra.includes('weiße rose') || combinedEra.includes('weisse rose') || theme?.id === 'nsdap_resistance';
  const isFrenchRev = combinedEra.includes('französisch') || combinedEra.includes('franzosisch') || combinedEra.includes('bastille') || theme?.id === 'revolution_tricolore';
  const isFranks = combinedEra.includes('frank') || combinedEra.includes('karl der gro') || theme?.id === 'franks_charlemagne';
  const isMedieval = combinedEra.includes('mittelalter') || combinedEra.includes('ritter');

  // Compute final title evaluation
  const getCoronationVerdict = () => {
    const avg = (stats.goetter + stats.priester + stats.adel + stats.volk) / 4;
    
    if (avg >= 70 && stats.volk >= 60 && stats.goetter >= 60) {
      if (isIndustrial) {
        return {
          title: "Pionier des Sozialen Fortschritts & Technischer Meister",
          description: "Du hast Fabriken modernisiert und zugleich Arbeiterrechte und Wohlstand geschaffen. Technische Innovation und Menschlichkeit brachten deine Ära zum Erblühen!",
          rank: "S-Rang (Industrieller Meister-Reformer)",
          color: "from-amber-400 to-yellow-500",
        };
      }
      if (isWeimar) {
        return {
          title: "Verfassungsvater & Unerschütterlicher Hüter der Republik",
          description: "Gegen Extremismus und Krisen hast du die junge Demokratie beschützt und geeint. Freiheit, soziale Sicherheit und Vernunft haben triumphiert!",
          rank: "S-Rang (Großer Staatsmann der Demokratie)",
          color: "from-amber-400 to-yellow-500",
        };
      }
      if (isWW1) {
        return {
          title: "Träger der Humanität & Standhafter Friedenswahrer",
          description: "Inmitten von Materialschlachten hast du Menschenleben gerettet, Moral bewahrt und den Weg aus dem Wahnsinn des Schützengrabens gewiesen.",
          rank: "S-Rang (Held der Menschlichkeit)",
          color: "from-amber-400 to-yellow-500",
        };
      }
      if (isNS) {
        return {
          title: "Lichtgestalt des Gewissens & Unbeugsamer Freiheitskämpfer",
          description: "Mit beispiellosem Mut hast du der Diktatur getrotzt, Wahrheit verbreitet und Verfolgte gerettet. Dein Vermächtnis schenkt kommenden Generationen Mut!",
          rank: "S-Rang (Historisches Vorbild der Zivilcourage)",
          color: "from-amber-400 to-yellow-500",
        };
      }
      if (isFrenchRev) {
        return {
          title: "Architekt der Freiheit & Bürgerlicher Gesetzgeber",
          description: "Freiheit, Gleichheit und Brüderlichkeit sind durch deine Klugheit nicht im Terror versunken, sondern zur lebendigen Verfassung geworden!",
          rank: "S-Rang (Aufklärer & Freiheitsheld)",
          color: "from-amber-400 to-yellow-500",
        };
      }
      if (isFranks || isMedieval) {
        return {
          title: "Großer Kaiser & Friedensbringer der Reiche",
          description: "Unter deiner weisen Krone vereinst du Bildung, Gerechtigkeit und Wohlstand. Chronisten preisen dein Zeitalter als goldenen Aufbruch!",
          rank: "S-Rang (Kaiserlicher Einiger)",
          color: "from-amber-400 to-yellow-500",
        };
      }
      if (isRome) {
        return {
          title: "Imperator Caesar & Vater des Vaterlandes",
          description: "Dein Name wird in goldenen Lettern im Senat verewigt! Du hast die vollkommene Eintracht (Concordia) geschaffen. Legionen, Senat und Volk verehren dich als den weisesten Herrscher.",
          rank: "S-Rang (Legendärer Herrscher)",
          color: "from-amber-400 to-yellow-500",
        };
      }
      if (isLuther) {
        return {
          title: "Erleuchteter Reformator & Standhafter Glaubenszeuge",
          description: "Deine Schriften verbreiten sich wie ein Lauffeuer in ganz Europa! Bürger, Fürsten und Gelehrte finden durch dich zu neuer Klarheit und Einigkeit.",
          rank: "S-Rang (Historische Lichtgestalt)",
          color: "from-amber-400 to-yellow-500",
        };
      }
      if (isStoneage) {
        return {
          title: "Großer Ältester & Unsterblicher Schutzherr der Sippe",
          description: "Unter deiner Führung blüht das ganze Tal auf! Du hast Höhlenmalereien geschaffen, die Generationen leiten werden. Vorräte, Sippe und Natur sind im vollkommenen Einklang.",
          rank: "S-Rang (Stammeslegende)",
          color: "from-amber-400 to-yellow-500",
        };
      }
      if (isGreece) {
        return {
          title: "Der Welteroberer & Philosophische Hegemon",
          description: "Von Makedonien bis an die Grenzen der bekannten Welt besingen die Dichter deinen Namen. Weisheit und Mut haben ein unvergängliches Weltreich geformt.",
          rank: "S-Rang (Hellenischer Halbgott)",
          color: "from-amber-400 to-yellow-500",
        };
      }
      return {
        title: "Der Goldene Sonnengott auf Erden (Perfekter Herrscher)",
        description: "Dein Name wird für 3000 Jahre in Stein gemeißelt! Du hast die vollkommene Balance der Ma'at vollbracht. Priester, Adel und das gesamte Volk verehren dich als den gerechtesten Regenten.",
        rank: "S-Rang (Legendär)",
        color: "from-amber-400 to-yellow-500",
      };
    } else if (stats.volk >= 65) {
      const popularTitle = isIndustrial 
        ? "Freund der Arbeiter & Wohlfahrts-Pionier"
        : isWeimar 
        ? "Tribun der Arbeiterschaft & Volksbeauftragter"
        : isWW1
        ? "Schutzengel der Kameraden & Grabenretter"
        : isNS
        ? "Stimme der Entrechteten & Retter im Geheimen"
        : isFrenchRev
        ? "Verteidiger der Sansculotten & Bürgerfreund"
        : isRome 
        ? "Tribun der Plebejer & Liebling des Volkes" 
        : isLuther 
        ? "Gütiger Hirte der Gemeinde" 
        : isStoneage 
        ? "Großherziger Versorger & Hüter des Feuers" 
        : "Der Gütige Vater / Die Große Mutter des Volkes";

      return {
        title: popularTitle,
        description: "Die einfachen Menschen schöpfen durch dich Hoffnung und Kraft. Deine Fürsorge und Solidarität machten die Gemeinschaft stark und krisenfest.",
        rank: "A-Rang (Großer Reformer & Freund des Volkes)",
        color: "from-emerald-400 to-teal-500",
      };
    } else if (stats.adel >= 65 || skills.militaerischeStaerke >= 6) {
      const strengthTitle = isIndustrial
        ? "Großindustrieller Stratege & Schienen-Magnat"
        : isWeimar
        ? "Eiserner Verfechter von Gesetz und Ordnung"
        : isWW1
        ? "Generalstabsoffizier & Meister der Taktik"
        : isNS
        ? "Todesmutiger Widerstands-Koordinator"
        : isFrenchRev
        ? "General der Revolutionsarmeen"
        : isRome 
        ? "Der Unbesiegbare Imperator der Legionen" 
        : isLuther 
        ? "Eiserner Ritter & Schützer der Burgen" 
        : isStoneage 
        ? "Tapferster Jäger & Sippenverteidiger" 
        : "Der Unbesiegbare Feldherr & Triumphator";

      return {
        title: strengthTitle,
        description: "Deine Entschlossenheit und Führungsstärke sind weithin respektiert. Unter deiner klaren Hand wurden Krisen abgewendet und Sicherheit garantiert.",
        rank: "A-Rang (Strategischer Anführer)",
        color: "from-rose-500 to-red-600",
      };
    } else if (stats.goetter >= 65 || stats.priester >= 65) {
      const spiritTitle = isIndustrial
        ? "Visionärer Denker des Dampf- und Fortschrittszeitalters"
        : isWeimar
        ? "Hüter der Weimarer Verfassung & Geistiger Freigeist"
        : isWW1
        ? "Stiller Seelsorger & Stimme des Friedens"
        : isNS
        ? "Unbeugsames Gewissen & Flugblatt-Verfasser"
        : isFrenchRev
        ? "Philosoph der Aufklärung & Menschenrechte"
        : isRome 
        ? "Pontifex Maximus & Seher der Ewigen Götter" 
        : isLuther 
        ? "Meister der Schriften & Doktor der Theologie" 
        : isStoneage 
        ? "Großer Schamane & Hüter der Ahnengeister" 
        : "Der Heilige Hüter der Tempel & Mysterien";

      return {
        title: spiritTitle,
        description: "Werte, Moral und geistige Klarheit leiten jeden deiner Schritte. Deine Prinzipientreue inspiriert Mitstreiter weit über den Moment hinaus.",
        rank: "A-Rang (Geistiger Wegweiser & Denker)",
        color: "from-purple-400 to-indigo-500",
      };
    } else {
      const survivorTitle = isIndustrial 
        ? "Gestalter des Industrie-Umbruchs"
        : isWeimar
        ? "Krisenmanager der Republik"
        : isWW1
        ? "Überlebender der Großen Krise"
        : isNS
        ? "Mutiger Überlebender im Untergrund"
        : "Erprobter Wegbereiter der Epoche";

      return {
        title: survivorTitle,
        description: "Du hast die gefährliche Reise gemeistert und das Ziel erreicht. Trotz schwerer Krisen und historischer Wirren hast du Kurs gehalten.",
        rank: "B-Rang (Erfahrener Wegbereiter)",
        color: "from-amber-500 to-orange-600",
      };
    }
  };

  const verdict = getCoronationVerdict();

  const handlePrintCertificate = () => {
    soundFX.playSealStamp();
    window.print();
  };

  const pillar1Label = activeGame?.pillars?.[0]?.label || '⚡ Götter / Gunst';
  const pillar2Label = activeGame?.pillars?.[1]?.label || '🙏 Priester / Vorräte';
  const pillar3Label = activeGame?.pillars?.[2]?.label || '👑 Adel / Truppen';
  const pillar4Label = activeGame?.pillars?.[3]?.label || '😊 Volk / Moral';

  const certificateGameTitle = activeGame?.title || 'Helfer des Pharaos';
  const certIcon = theme?.icon || '🏛️';
  const destinationText = activeGame?.subtitle || 'Erfolgreich abgeschlossen';

  /* Shared certificate component to render in print AND in preview modal */
  const renderCertificateContent = () => (
    <div className="w-full text-stone-900 bg-[#fffdfa] border-4 border-double border-[#8b5a2b] p-6 sm:p-8 rounded-lg box-border">
      {/* Certificate Header */}
      <div className="text-center space-y-2 border-b-2 border-[#8b5a2b]/30 pb-4">
        <div className="text-3xl leading-none">{certIcon} 📜 👑</div>
        <span className="text-[11px] uppercase tracking-[0.25em] font-sans font-bold text-stone-600 block">
          Offizielles Abschluss-Diplom • Geschichts-Expedition
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#5c3a21] font-serif uppercase tracking-wider m-0">
          Urkunde der Vollendung
        </h1>
        <p className="text-stone-700 italic text-xs m-0">
          {activeGame?.era ? `Zeitalter: ${activeGame.era} • ` : ''}Im Namen der Geschichte und der Weisheit der Ahnen
        </p>
      </div>

      {/* Recipient */}
      <div className="my-5 text-center space-y-2">
        <p className="text-sm text-stone-700 font-sans m-0">
          Hiermit wird feierlich bezeugt, dass
        </p>
        <div className="text-2xl sm:text-3xl font-bold font-serif text-[#78350f] border-b-2 border-stone-400 inline-block px-6 py-1">
          {profile.name} <span className="text-lg font-normal text-stone-600">({profile.throneName})</span>
        </div>
        <p className="text-xs sm:text-sm text-stone-700 font-sans max-w-lg mx-auto leading-relaxed pt-1 m-0">
          die 20-Stationen-Expedition <strong className="text-stone-900 font-semibold">„{certificateGameTitle}“</strong> bis zum Zielort erfolgreich gemeistert hat.
        </p>
      </div>

      {/* Verdict & Rank Badge */}
      <div className="my-4 p-4 rounded-lg bg-[#fbf6ed] border border-[#d4b996] text-center space-y-1.5 max-w-lg mx-auto">
        <div className="text-[10px] font-sans uppercase font-bold text-stone-500 tracking-wider">
          Verliehener Ehrenrang & Historischer Titel
        </div>
        <div className="text-xl sm:text-2xl font-bold text-[#854d0e]">
          {verdict.title}
        </div>
        <div className="text-xs font-sans font-semibold text-stone-700">
          {verdict.rank}
        </div>
        <p className="text-xs italic text-stone-600 pt-1 leading-normal m-0">
          „{verdict.description}“
        </p>
      </div>

      {/* 4 Pillars Stats Grid */}
      <div className="grid grid-cols-4 gap-2 text-center my-4 max-w-lg mx-auto font-sans">
        <div className="border border-stone-300 p-2 rounded bg-white">
          <span className="text-[10px] text-stone-600 font-medium line-clamp-1 block">{pillar1Label}</span>
          <strong className="text-base text-stone-900">{stats.goetter}%</strong>
        </div>
        <div className="border border-stone-300 p-2 rounded bg-white">
          <span className="text-[10px] text-stone-600 font-medium line-clamp-1 block">{pillar2Label}</span>
          <strong className="text-base text-stone-900">{stats.priester}%</strong>
        </div>
        <div className="border border-stone-300 p-2 rounded bg-white">
          <span className="text-[10px] text-stone-600 font-medium line-clamp-1 block">{pillar3Label}</span>
          <strong className="text-base text-stone-900">{stats.adel}%</strong>
        </div>
        <div className="border border-stone-300 p-2 rounded bg-white">
          <span className="text-[10px] text-stone-600 font-medium line-clamp-1 block">{pillar4Label}</span>
          <strong className="text-base text-stone-900">{stats.volk}%</strong>
        </div>
      </div>

      {/* Seal & Signatures Footer */}
      <div className="mt-6 pt-4 flex items-center justify-between border-t border-stone-300 text-xs text-stone-600 font-sans">
        <div className="text-center w-36 sm:w-44">
          <div className="h-8 border-b border-stone-400 mb-1 flex items-end justify-center font-serif italic text-xs text-stone-800">
            {isIndustrial
              ? 'Gewerbeaufsicht & Fabrikrat'
              : isWeimar
              ? 'Nationalversammlung Weimar'
              : isWW1
              ? 'Militärkommando & Lazarett'
              : isNS
              ? 'Widerstand & Zeitzeugen'
              : isFrenchRev
              ? 'Nationalversammlung Paris'
              : isFranks || isMedieval
              ? 'Kanzlei des Reiches'
              : isRome
              ? 'Senatus Populusque Romanus'
              : isLuther
              ? 'Wartburg & Gemeinde'
              : isStoneage
              ? 'Rat der Sippenältesten'
              : "Ma'at • Amun-Re"}
          </div>
          <span className="text-[10px]">Siegel der Autorität</span>
        </div>

        <div className="w-14 h-14 rounded-full border-2 border-[#b45309] text-[#b45309] flex flex-col items-center justify-center font-bold text-[8px] uppercase tracking-tighter shrink-0 mx-2">
          <span>★ OFFIZIELL ★</span>
          <span className="text-[7px]">{isIndustrial || isWeimar || isNS ? 'DIPLOM' : 'REGENT'}</span>
        </div>

        <div className="text-center w-36 sm:w-44">
          <div className="h-8 border-b border-stone-400 mb-1 flex items-end justify-center font-serif italic text-xs text-stone-800">
            {new Date().toLocaleDateString('de-DE')}
          </div>
          <span className="text-[10px]">Datum des Abschlusses</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ============================================================== */}
      {/* 1. PRINT-ONLY OFFICIAL CERTIFICATE (DIN A4 Portrait Standard) */}
      {/* ============================================================== */}
      <div className="hidden print:block print-certificate-container font-serif">
        {renderCertificateContent()}
      </div>

      {/* ============================================================== */}
      {/* 2. ON-SCREEN CERTIFICATE PREVIEW MODAL                         */}
      {/* ============================================================== */}
      {showCertificatePreview && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#fffdfa] rounded-2xl shadow-2xl p-4 sm:p-6 max-h-[95vh] overflow-y-auto">
            {/* Modal Close & Action Bar */}
            <div className="flex items-center justify-between border-b border-stone-300 pb-3 mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-700" />
                Vorschau der Urkunde (DIN A4 Druckformat)
              </span>
              <button
                onClick={() => setShowCertificatePreview(false)}
                className="p-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 cursor-pointer"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Render Certificate in Modal */}
            {renderCertificateContent()}

            {/* Modal Print Action */}
            <div className="mt-5 pt-3 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setShowCertificatePreview(false)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 text-sm font-semibold cursor-pointer"
              >
                Schließen
              </button>
              <button
                onClick={() => {
                  setShowCertificatePreview(false);
                  setTimeout(() => handlePrintCertificate(), 200);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-amber-50 font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Jetzt drucken / als PDF speichern</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 3. SCREEN UI (Wird am Bildschirm angezeigt)                    */}
      {/* ============================================================== */}
      <div className="no-print w-full max-w-4xl mx-auto px-4 py-6 sm:py-10 flex flex-col items-center">
        {/* Coronation / Destination Artwork Banner */}
        <div className="w-full relative rounded-2xl overflow-hidden border-2 border-amber-500 shadow-2xl mb-6">
          <img
            src={activeGame?.heroImage || theme?.defaultBannerUrl || '/assets/coronation.jpg'}
            alt="Abschluss der Expedition"
            className="w-full h-56 sm:h-80 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent flex items-end p-4 sm:p-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest text-amber-300 uppercase bg-stone-950/80 px-2.5 py-1 rounded border border-amber-500/50 inline-block">
                Expedition vollendet • {destinationText}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-200 font-serif m-0 drop-shadow-md">
                {activeGame ? activeGame.title : 'Der Thron beider Länder'}
              </h2>
            </div>
          </div>
        </div>

        {/* Completion Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/60 text-amber-300 text-sm font-semibold mb-4">
          <Crown className="w-5 h-5 text-yellow-400" />
          <span>20 Stationen gemeistert • Historische Expedition vollendet</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-serif mb-2">
          {isIndustrial || isWeimar || isWW1 || isNS || isFrenchRev ? `Glückwunsch, ${profile.throneName}!` : `Heil ${profile.throneName}!`}
        </h1>

        <p className="text-stone-300 text-center max-w-xl text-sm sm:text-base mb-6">
          Alle Stationen wurden gemeistert. Deine Entscheidungen auf der Reise formen dein geschichtliches Vermächtnis!
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
              Deine finalen Werte am Ziel:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-stone-900/90 border border-amber-700/40 text-center">
                <span className="text-xs text-stone-400 block truncate">{pillar1Label}</span>
                <strong className="text-lg text-amber-300">{stats.goetter}%</strong>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/90 border border-amber-700/40 text-center">
                <span className="text-xs text-stone-400 block truncate">{pillar2Label}</span>
                <strong className="text-lg text-purple-300">{stats.priester}%</strong>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/90 border border-amber-700/40 text-center">
                <span className="text-xs text-stone-400 block truncate">{pillar3Label}</span>
                <strong className="text-lg text-blue-300">{stats.adel}%</strong>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/90 border border-amber-700/40 text-center">
                <span className="text-xs text-stone-400 block truncate">{pillar4Label}</span>
                <strong className="text-lg text-emerald-300">{stats.volk}%</strong>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-stone-300">
            <span>🧠 Verbliebene EP: <strong className="text-amber-400">{stats.ep}</strong></span>
            <span>🌟 {activeGame?.skillNames?.skill1 || 'Stärke / Weisheit'}: <strong className="text-yellow-400">{skills.goettlicheAuserwaehltheit}</strong></span>
            <span>🗣️ {activeGame?.skillNames?.skill2 || 'Politik / Charisma'}: <strong className="text-cyan-400">{skills.politischeGeschicklichkeit}</strong></span>
            <span>⚔️ {activeGame?.skillNames?.skill3 || 'Militär / Führung'}: <strong className="text-rose-400">{skills.militaerischeStaerke}</strong></span>
          </div>

          {/* Action Buttons: Preview Certificate, Print & Restart */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setShowCertificatePreview(true)}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 border-2 border-amber-600/70 text-amber-300 font-bold text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <Eye className="w-5 h-5 text-amber-400" />
              <span>Urkunde ansehen</span>
            </button>

            <button
              onClick={handlePrintCertificate}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-950 hover:bg-amber-900 border-2 border-amber-500 text-amber-200 font-bold text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <Printer className="w-5 h-5 text-amber-400" />
              <span>Drucken / PDF speichern</span>
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                onRestart();
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-stone-950 font-bold text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Neues Spiel</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
