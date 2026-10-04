import React from 'react';
import { GameLogEntry, GradeLevel, GameDefinition } from '../types/game';
import { BookOpen, X, Sparkles, ScrollText } from 'lucide-react';
import { soundFX } from '../utils/sound';
import { EraThemeConfig } from '../utils/themeManager';

interface LexiconModalProps {
  isOpen: boolean;
  onClose: () => void;
  logs: GameLogEntry[];
  gradeLevel: GradeLevel;
  activeGame?: GameDefinition | null;
  theme?: EraThemeConfig;
}

export const LexiconModal: React.FC<LexiconModalProps> = ({
  isOpen,
  onClose,
  logs,
  gradeLevel,
  activeGame,
  theme,
}) => {
  if (!isOpen) return null;

  const eraTitle = `${activeGame?.title || ''} ${activeGame?.era || ''}`.toLowerCase();

  let archiveTitle = 'Königliches Papyrus-Archiv & Lexikon';
  let archiveDesc = `Gesammeltes Wissen über die Geschichte, Götter und Bauwerke des Alten Reiches (${logs.length} Einträge freigeschaltet)`;
  let emptyPrompt = 'Triff Entscheidungen auf deiner Nil-Expedition, um wertvolle Papyri und historisches Wissen freizuschalten!';

  if (eraTitle.includes('weltkrieg') || eraTitle.includes('graben') || eraTitle.includes('1914') || eraTitle.includes('1918') || eraTitle.includes('verdun') || theme?.id === 'ww1_trenches') {
    archiveTitle = 'Historisches Kriegstagebuch & Dokumentenarchiv';
    archiveDesc = `Authentische Feldpostbriefe, Depeschen, Militärberichte und historische Quellen des 1. Weltkriegs (${logs.length} Einträge freigeschaltet)`;
    emptyPrompt = 'Triff Entscheidungen an den Stationen der Front, um historische Quellen, Tagebucheinträge und Dokumente freizuschalten!';
  } else if (eraTitle.includes('industrie') || eraTitle.includes('dampf') || eraTitle.includes('fabrik') || theme?.id === 'industrial_steam') {
    archiveTitle = 'Industriearchiv & Zeitzeugnisse der Industrialisierung';
    archiveDesc = `Betriebsordnungen, Zeugenberichte, Erfindungen und Quellen des Industriezeitalters (${logs.length} Einträge freigeschaltet)`;
    emptyPrompt = 'Triff Entscheidungen im industriellen Wandel, um Dokumente über Fabriken, Erfindungen und Arbeitsbedingungen freizuschalten!';
  } else if (eraTitle.includes('weimar') || eraTitle.includes('1920') || eraTitle.includes('bauhaus') || theme?.id === 'weimar_cabaret') {
    archiveTitle = 'Reichsarchiv & Dokumente der Weimarer Republik';
    archiveDesc = `Historische Zeitungsartikel, Verfassungstexte, Kunstzeugnisse und Parteiprogramme (${logs.length} Einträge freigeschaltet)`;
    emptyPrompt = 'Triff Entscheidungen in der jungen Demokratie, um politische Dokumente und Zeitzeugnisse freizuschalten!';
  } else if (eraTitle.includes('nsdap') || eraTitle.includes('diktatur') || eraTitle.includes('widerstand') || eraTitle.includes('nationalsozialismus') || theme?.id === 'nsdap_resistance') {
    archiveTitle = 'Dokumentenarchiv & Zeugnisse der Zivilcourage (1933–1939)';
    archiveDesc = `Historische Gesetze, Zeitzeugenberichte, Flugblätter und Quellen zur NS-Diktatur (${logs.length} Einträge freigeschaltet)`;
    emptyPrompt = 'Triff mutige Entscheidungen und bewahre Haltung, um historische Dokumente und Quellen freizuschalten!';
  } else if (eraTitle.includes('rom') || eraTitle.includes('caesar') || eraTitle.includes('augustus') || eraTitle.includes('senat') || theme?.id === 'rome_imperial') {
    archiveTitle = 'Tabularium & Chronik des Imperium Romanum';
    archiveDesc = `Senatsbeschlüsse, kaiserliche Erlasse, Wachstafeln und Chroniken Roms (${logs.length} Einträge freigeschaltet)`;
    emptyPrompt = 'Triff Entscheidungen auf deinem Weg durch das Römische Reich, um Senatsakten und antikes Wissen freizuschalten!';
  } else if (eraTitle.includes('luther') || eraTitle.includes('reformation') || eraTitle.includes('mittelalter') || eraTitle.includes('ritter') || theme?.id === 'luther_ink') {
    archiveTitle = 'Gemeindechronik & Schriftensammlung';
    archiveDesc = `Flugschriften der Reformation, Urkunden, theologische Traktate und Stadtchroniken (${logs.length} Einträge freigeschaltet)`;
    emptyPrompt = 'Triff weise Entscheidungen auf deiner Reise, um Chronikeinträge und theologische Schriften freizuschalten!';
  } else if (eraTitle.includes('steinzeit') || eraTitle.includes('neolith') || eraTitle.includes('jäger') || eraTitle.includes('mammut') || theme?.id === 'stoneage_earth') {
    archiveTitle = 'Wissensfundus & Steinzeit-Chronik';
    archiveDesc = `Überlieferte Felsmalereien, Werkzeugfunde und archäologisches Wissen der Urgeschichte (${logs.length} Einträge freigeschaltet)`;
    emptyPrompt = 'Triff Entscheidungen im Überlebenskampf der Steinzeit, um Felsbilder und Urzeit-Wissen freizuschalten!';
  } else if (eraTitle.includes('revolution') || eraTitle.includes('bastille') || eraTitle.includes('frankreich') || theme?.id === 'revolution_tricolore') {
    archiveTitle = 'Archiv der Französischen Revolution';
    archiveDesc = `Proklamationen, Dekrete der Nationalversammlung, Flugschriften und Bürgerrechte (${logs.length} Einträge freigeschaltet)`;
    emptyPrompt = 'Triff Entscheidungen im Sturm der Revolution, um Dokumente und Dekrete freizuschalten!';
  } else if (eraTitle.includes('alexander') || eraTitle.includes('griechen') || eraTitle.includes('athen') || theme?.id === 'greece_aegean') {
    archiveTitle = 'Bibliothek des Wissens & Griechische Chronik';
    archiveDesc = `Philosophische Schriften, Feldzugsberichte und Zeugnisse der antiken Polis (${logs.length} Einträge freigeschaltet)`;
    emptyPrompt = 'Triff kluge Entscheidungen, um Schriftrollen und philosophische Erkenntnisse freizuschalten!';
  } else if (eraTitle.includes('frank') || eraTitle.includes('karl der große') || eraTitle.includes('aachen') || theme?.id === 'franks_charlemagne') {
    archiveTitle = 'Reichsannalen & Hofchronik';
    archiveDesc = `Kapitularien Karls des Großen, Urkunden und Chroniken der fränkischen Pfalzen (${logs.length} Einträge freigeschaltet)`;
    emptyPrompt = 'Triff Entscheidungen am Königshof, um Reichsannalen und Chronikeinträge freizuschalten!';
  } else if (!eraTitle.includes('ägypt') && !eraTitle.includes('nil') && !eraTitle.includes('pharao') && activeGame) {
    archiveTitle = `${activeGame.title} – Historisches Archiv`;
    archiveDesc = `Quellen, Dokumente und historische Fachbegriffe zur Epoche (${logs.length} Einträge freigeschaltet)`;
    emptyPrompt = 'Triff Entscheidungen auf deiner Reise, um historisches Wissen und Quellen freizuschalten!';
  }

  const borderClass = theme?.badgeBorder || 'border-amber-600/70';
  const textClass = theme?.badgeText || 'text-amber-300';
  const buttonClass = theme?.primaryButton || 'bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold';

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className={`bg-stone-950 border-2 ${borderClass} rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden`}>
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-stone-800 flex items-center justify-between shrink-0 bg-stone-900/90">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`p-2 rounded-lg bg-stone-800 ${textClass}`}>
              <ScrollText className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className={`text-lg sm:text-xl font-bold ${textClass} font-serif m-0`}>
                {archiveTitle}
              </h2>
              <p className="text-xs text-stone-400">
                {archiveDesc}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="p-2 rounded-lg bg-stone-900 border border-stone-700 text-stone-400 hover:text-white hover:border-amber-500 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {logs.length === 0 ? (
            <div className="text-center py-12 text-stone-400 space-y-2">
              <BookOpen className="w-12 h-12 mx-auto text-stone-600" />
              <p className="text-base font-semibold text-stone-300">Das Archiv ist noch leer.</p>
              <p className="text-xs">{emptyPrompt}</p>
            </div>
          ) : (
            logs.map((log, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-xl bg-stone-900/90 border border-stone-800 space-y-3 relative shadow-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-2">
                  <span className={`text-xs font-mono font-bold ${textClass}`}>
                    Runde {log.round}: {log.location}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded bg-stone-950/80 ${textClass} border ${borderClass} font-serif`}>
                    {log.lexicon.term}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-stone-100 mb-1 flex items-center gap-1.5 font-serif">
                    <Sparkles className={`w-4 h-4 ${textClass}`} />
                    {log.lexicon.title}
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    {log.lexicon.content}
                  </p>
                </div>

                <div className="pt-2 text-xs text-stone-400 flex items-center justify-between border-t border-stone-800/80">
                  <span>Deine Wahl: <em className={`${textClass} font-normal`}>„{log.choiceMade}“</em></span>
                  <span className="text-emerald-400 font-semibold">{log.consequence.slice(0, 60)}...</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-stone-800 shrink-0 bg-stone-900/90 flex justify-end">
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className={`px-5 py-2 rounded-lg ${buttonClass} text-sm transition-all cursor-pointer`}
          >
            Zurück zur Station
          </button>
        </div>
      </div>
    </div>
  );
};
