import React from 'react';
import { PlayerProfile, Stats, GameDefinition } from '../types/game';
import { EraThemeConfig } from '../utils/themeManager';
import { RotateCcw, ShieldAlert } from 'lucide-react';
import { soundFX } from '../utils/sound';

interface GameOverScreenProps {
  profile: PlayerProfile;
  fallenStat: string;
  round: number;
  stats: Stats;
  onRestart: () => void;
  activeGame?: GameDefinition | null;
  theme?: EraThemeConfig;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  profile,
  fallenStat,
  round,
  stats,
  onRestart,
  activeGame,
  theme,
}) => {
  const eraLower = (activeGame?.era || '').toLowerCase();
  const titleLower = (activeGame?.title || '').toLowerCase();
  const combined = `${eraLower} ${titleLower}`;

  const isWW1 = combined.includes('weltkrieg') || combined.includes('1914') || combined.includes('1918') || combined.includes('graben') || theme?.id === 'ww1_trenches';
  const isIndustrial = combined.includes('industrie') || combined.includes('dampf') || theme?.id === 'industrial_steam';
  const isWeimar = combined.includes('weimar') || combined.includes('demokratie') || combined.includes('1920') || theme?.id === 'weimar_cabaret';
  const isNS = combined.includes('ns-') || combined.includes('nationalsozialismus') || combined.includes('widerstand') || combined.includes('1933') || theme?.id === 'nsdap_resistance';
  const isRome = combined.includes('rom') || combined.includes('caesar') || theme?.id === 'rome_imperial';
  const isLuther = combined.includes('luther') || combined.includes('reformation') || theme?.id === 'luther_ink';
  const isStoneage = combined.includes('steinzeit') || combined.includes('neolith') || theme?.id === 'stoneage_earth';
  const isAncientEgypt = combined.includes('ägypt') || combined.includes('pharao') || combined.includes('nil') || theme?.id === 'egypt_gold' || (!activeGame && !theme);

  // Get era-appropriate labels for the 4 pillars
  const p1 = activeGame?.pillars?.[0]?.label || 'Säule 1';
  const p2 = activeGame?.pillars?.[1]?.label || 'Säule 2';
  const p3 = activeGame?.pillars?.[2]?.label || 'Säule 3';
  const p4 = activeGame?.pillars?.[3]?.label || 'Säule 4';

  // Dynamic Headline
  const getHeadline = () => {
    if (isWW1) return "Die Front ist zusammengebrochen!";
    if (isIndustrial) return "Die Fabriken stehen still – Sozialer Kollaps!";
    if (isWeimar) return "Die Republik ist gestürzt!";
    if (isNS) return "Die Falle hat zugeschnappt – Verraten!";
    if (isRome) return "Rom ist gefallen!";
    if (isLuther) return "Die Reformation ist erstickt!";
    if (isStoneage) return "Die Sippe konnte nicht überleben!";
    if (isAncientEgypt) return "Das Pharaonenreich versank im Chaos!";
    return `${activeGame?.title || 'Das Vorhaben'} ist gescheitert!`;
  };

  // Dynamic Subtitle
  const getSubtitle = () => {
    if (isWW1) return `Der Grabenkrieg forderte seinen Tribut. Deine Mission an der Front endete tragisch in Station ${round}.`;
    if (isIndustrial) return `Der soziale Frieden zerbrach. Deine Leitung während des Umbruchs endete in Station ${round}.`;
    if (isWeimar) return `Die demokratische Balance wurde überwältigt. Dein Mandat endete in Station ${round}.`;
    if (isNS) return `Das Risiko war zu hoch. Dein Einsatz für den Widerstand endete jäh in Station ${round}.`;
    if (isRome) return `Die Eintracht (Concordia) ist zerbrochen. Deine Herrschaft endete in Runde ${round}.`;
    if (isLuther) return `Glaube und Gemeinde verloren den Halt in Station ${round}.`;
    if (isStoneage) return `Natur und Kälte waren unerbittlich. Die Wanderung endete in Runde ${round}.`;
    if (isAncientEgypt) return `Die kosmische Ordnung (Ma'at) ist zerbrochen. Deine Herrschaft endete jäh in Runde ${round}.`;
    return `Die historische Balance ging verloren. Dein Weg endete in Station ${round}.`;
  };

  // Dynamic Failure explanation based on fallen pillar
  const getFailureReason = () => {
    if (isWW1) {
      if (fallenStat === 'Götter') return `Munitionsnachschub & Waffen (${p1}) waren völlig erschöpft. Ohne Feuerkraft wurden deine Stellungen überrannt.`;
      if (fallenStat === 'Priester') return `Verpflegung & Sanitätsdienst (${p2}) brachen zusammen. Hunger und Wundfieber machten jeden Widerstand unmöglich.`;
      if (fallenStat === 'Adel') return `Offiziere & Heeresleitung (${p3}) verloren das Vertrauen. Der Rückzugsbefehl führte zur heillosen Flucht.`;
      if (fallenStat === 'Volk') return `Soldatenmoral & Kameradschaft (${p4}) sanken auf den Nullpunkt. Nach monatelangem Trommelfeuer meuterten die Truppen.`;
      return "Die Ressourcen der Front waren restlos erschöpft.";
    }

    if (isIndustrial) {
      if (fallenStat === 'Götter') return `Kapital & Investoren (${p1}) sprangen ab. Die Fabriken wurden zwangsversteigert.`;
      if (fallenStat === 'Priester') return `Maschinen & Rohstoffe (${p2}) fielen aus. Kohlemangel legte die Dampfkessel lahm.`;
      if (fallenStat === 'Adel') return `Fabrikbesitzer & Obrigkeit (${p3}) erließen harte Repressionen gegen dich.`;
      if (fallenStat === 'Volk') return `Arbeiterschaft & Gewerkschaften (${p4}) traten in den Generalstreik. Soziale Not führte zu Straßenschlachten.`;
      return "Der industrielle Umbruch konnte nicht aufrechterhalten werden.";
    }

    if (isWeimar) {
      if (fallenStat === 'Götter') return `Verfassungstreue & Justiz (${p1}) versagten ihren Dienst. Der Rechtsstaat löste sich auf.`;
      if (fallenStat === 'Priester') return `Währung & Wirtschaft (${p2}) wurden von der Hyperinflation vernichtet.`;
      if (fallenStat === 'Adel') return `Militär & Eliten (${p3}) verweigerten dem Kabinett die Loyalität.`;
      if (fallenStat === 'Volk') return `Wählergunst & Bevölkerung (${p4}) radikalisierten sich an den extremen Rändern.`;
      return "Die Weimarer Republik konnte die Krise nicht überstehen.";
    }

    if (isNS) {
      if (fallenStat === 'Götter') return `Geheimhaltung & Tarnung (${p1}) flogen auf. Die Gestapo stürmte dein Versteck.`;
      if (fallenStat === 'Priester') return `Flugblätter & Druckmittel (${p2}) wurden beschlagnahmt.`;
      if (fallenStat === 'Adel') return `Gefahr durch Spitzel (${p3}): Ein Verräter lieferte die Widerstandsgruppe aus.`;
      if (fallenStat === 'Volk') return `Rückhalt in der Zivilgesellschaft (${p4}) schwand durch Angst vor Repression.`;
      return "Die Untergrundtätigkeit wurde gewaltsam gestoppt.";
    }

    if (isRome) {
      if (fallenStat === 'Götter') return `Die Götter Roms wandten sich ab. Schlechtes Vorzeichen und Seuchen lähmen die Ewige Stadt.`;
      if (fallenStat === 'Priester') return `Die Schatzkammer des Senats (${p2}) war leer. Der Staatsbankrott trieb die Stadt ins Elend.`;
      if (fallenStat === 'Adel') return `Die Senatoren (${p3}) zettelten eine Verschwörung an den Iden des März an.`;
      if (fallenStat === 'Volk') return `Die Plebejer (${p4}) revoltierten mangels Getreidespenden und zündeten das Forum an.`;
      return "Das Römische Reich versank in Bürgerkriegen.";
    }

    if (isStoneage) {
      if (fallenStat === 'Götter') return `Naturgeister und Wetter (${p1}) machten eine Jagd unmöglich. Schneestürme schnitten das Tal ab.`;
      if (fallenStat === 'Priester') return `Die Vorratsgruben (${p2}) waren leer. Ohne Winterfutter verhungerte die Sippe.`;
      if (fallenStat === 'Adel') return `Die Jäger und Ältesten (${p3}) verirrten sich in den Sümpfen und kehrten nicht zurück.`;
      if (fallenStat === 'Volk') return `Der Sippenzusammenhalt (${p4}) zerbrach. Streit um das letzte Feuer spaltete die Gemeinschaft.`;
      return "Die Steinzeitsippe konnte die harte Eiszeit nicht bezwingen.";
    }

    if (isLuther) {
      if (fallenStat === 'Götter') return `Theologischer Konsens (${p1}) zerbrach. Dogmenstreit spaltete die Reformation.`;
      if (fallenStat === 'Priester') return `Kirchenleitung & Druckereien (${p2}) wurden geschlossen. Flugschriften wurden verboten.`;
      if (fallenStat === 'Adel') return `Die Reichsfürsten (${p3}) entzogen ihren Schutz. Ohne weltlichen Beistand drohte der Bann.`;
      if (fallenStat === 'Volk') return `Gemeindefrieden & Bürgerschaft (${p4}) versanken in radikalen Unruhen.`;
      return "Die reformatorische Bewegung verlor ihren Rückhalt.";
    }

    if (isAncientEgypt) {
      if (fallenStat === 'Götter') return "Die Götter zogen ihren Schutz von Ägypten ab. Sandstürme und Heuschreckenplagen verheerten die Felder.";
      if (fallenStat === 'Priester') return "Die Priesterschaft verfluchte deinen Namen und rief das Reich zum heiligen Aufstand gegen den Ketzer auf.";
      if (fallenStat === 'Adel') return "Die Fürsten und Nomarchen zettelten eine Palastrevolte an und verbannten dich aus dem Niltal.";
      if (fallenStat === 'Volk') return "Das hungernde Volk stürmte die Paläste. Ohne die Liebe deiner Untertanen fiel die Krone.";
      return "Deine Vorräte und Machtmittel waren restlos erschöpft.";
    }

    // Era-agnostic fallback for all other historical eras & freeform games:
    if (fallenStat === 'Götter') return `${p1} ist vollständig zusammengebrochen. Ohne diese fundamentale Stütze geriet die Lage außer Kontrolle.`;
    if (fallenStat === 'Priester') return `${p2} wurde völlig erschöpft. Die materiellen und organisatorischen Mittel reichten nicht mehr aus.`;
    if (fallenStat === 'Adel') return `Die Führungsebene von ${p3} verweigerte die Gefolgschaft. Interne Machtkämpfe brachten das Vorhaben zum Scheitern.`;
    if (fallenStat === 'Volk') return `${p4} sank auf den Nullpunkt. Ohne den Rückhalt der Basis war die Ordnung nicht mehr aufrechtzuerhalten.`;
    return "Die entscheidenden Ressourcen und Kräfte waren restlos aufgebraucht.";
  };

  const reasonTitle = isWW1 ? "Kriegstagebuch-Eintrag (Verlustmeldung):"
    : isIndustrial ? "Historischer Bericht über das Scheitern:"
    : isWeimar ? "Parlamentarische Niederschrift:"
    : isNS ? "Gestapo-Ermittlungsakte / Schicksal:"
    : isRome ? "Spruch des Senats:"
    : isStoneage ? "Schicksal der Sippe:"
    : isLuther ? "Eintrag in die Gemeindechronik:"
    : isAncientEgypt ? "Todesurteil des Totengerichts:"
    : "Historischer Bericht über das Scheitern:";

  const graceNotice = isAncientEgypt
    ? "Auch die Gnadenfrist der Ahnen konnte dich nicht mehr vor dem Absturz retten."
    : "Selbst die letzte Notreserve konnte den Zusammenbruch nicht mehr verhindern.";

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12 flex flex-col items-center animate-fade-in">
      <div className="p-4 rounded-full bg-red-950/80 border-2 border-red-600 text-red-500 mb-4 animate-bounce">
        <ShieldAlert className="w-12 h-12" />
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-red-400 font-serif text-center mb-2">
        {getHeadline()}
      </h1>

      <p className="text-stone-300 text-center max-w-md text-sm sm:text-base mb-8">
        {getSubtitle()}
      </p>

      <div className="w-full bg-stone-950/90 rounded-2xl p-6 border border-red-700/60 shadow-2xl space-y-5">
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-600/40 text-stone-200 text-sm leading-relaxed">
          <strong className="text-red-300 block mb-1">{reasonTitle}</strong>
          {getFailureReason()}
        </div>

        <div className="text-xs text-stone-400 text-center">
          {graceNotice}
        </div>

        <div className="pt-2 flex justify-center">
          <button
            onClick={() => {
              soundFX.playClick();
              onRestart();
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-stone-950 font-bold text-sm shadow-lg flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Erneut versuchen & Geschichte neuschreiben</span>
          </button>
        </div>
      </div>
    </div>
  );
};
