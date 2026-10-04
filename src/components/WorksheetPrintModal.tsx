import React, { useState } from 'react';
import { GameDefinition, GameWorksheet } from '../types/game';
import { soundFX } from '../utils/sound';
import {
  FileText,
  Printer,
  X,
  CheckCircle,
  Eye,
  Key,
  Award,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { gameGeneratorService } from '../services/gameGenerator';

interface WorksheetPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  game: GameDefinition;
}

export const WorksheetPrintModal: React.FC<WorksheetPrintModalProps> = ({
  isOpen,
  onClose,
  game,
}) => {
  const [showTeacherSolutions, setShowTeacherSolutions] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'info'>('preview');

  if (!isOpen) return null;

  // Resolve worksheet from game or generate on-the-fly fallback
  const worksheet: GameWorksheet = game.worksheet || gameGeneratorService.createFallbackWorksheet(
    game.title,
    game.era,
    game.targetGrades || 'Mittelstufe',
    game.coreTopics || [],
    game.rounds || []
  );

  const handlePrint = () => {
    soundFX.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in text-stone-900">
      <div className="relative w-full max-w-4xl max-h-[96vh] flex flex-col rounded-2xl bg-stone-900 border-2 border-amber-500 shadow-2xl overflow-hidden text-stone-100">
        
        {/* MODAL HEADER (No print) */}
        <div className="no-print flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-5 py-4 border-b border-stone-800 bg-stone-950">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300">
              <FileText className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-amber-200 font-serif m-0 flex items-center gap-2">
                <span>Begleit-Laufzettel & Sicherungsbogen</span>
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800/60">
                  DIN A4
                </span>
              </h2>
              <p className="text-xs text-stone-400 m-0">
                Für „{game.title}“ ({game.era}) • Passgenau formatiert für randlosen Druck
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto justify-end">
            {/* Toggle Student Worksheet vs Teacher Solution Key */}
            <div className="flex items-center p-1 rounded-xl bg-stone-900 border border-stone-800 text-xs font-bold">
              <button
                type="button"
                onClick={() => {
                  soundFX.playClick();
                  setShowTeacherSolutions(false);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  !showTeacherSolutions
                    ? 'bg-amber-600 text-stone-950 shadow font-black'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Schüler-Bogen (leer)
              </button>
              <button
                type="button"
                onClick={() => {
                  soundFX.playBlessing();
                  setShowTeacherSolutions(true);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  showTeacherSolutions
                    ? 'bg-emerald-600 text-white shadow font-black'
                    : 'text-emerald-400 hover:text-emerald-300'
                }`}
              >
                <Key className="w-3.5 h-3.5" />
                <span>Musterlösung (Lehrkraft)</span>
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-bold text-xs shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Jetzt drucken</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MODAL BODY (Scrollable Preview on screen) */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-stone-950/60">
          
          {/* THE ACTUAL DIN A4 WORKSHEET CONTAINER (Visible in screen preview + Print-Only Target) */}
          <div className="print-worksheet-page bg-white text-stone-900 shadow-2xl rounded-sm p-6 sm:p-8 max-w-[210mm] mx-auto text-sm leading-relaxed border border-stone-300">
            
            {/* 1. KOPFZEILE */}
            <div className="border-b-2 border-stone-800 pb-3 mb-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-stone-500 block">
                  GESCHICHTS-EXKURSION • LERNSICHERUNG
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-stone-900 font-serif tracking-tight m-0">
                  {game.title}
                </h1>
                <p className="text-xs text-stone-600 font-medium mt-0.5">
                  Themenbereich: <strong>{game.era}</strong>
                </p>
              </div>

              {/* Student Metadata Box */}
              <div className="w-full sm:w-64 border border-stone-400 p-2 rounded bg-stone-50 text-[11px] space-y-1.5 shrink-0">
                <div className="flex justify-between border-b border-stone-200 pb-0.5">
                  <span className="text-stone-500">Name:</span>
                  <span className="w-36 border-b border-dotted border-stone-400"></span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-0.5">
                  <span className="text-stone-500">Klasse / Datum:</span>
                  <span className="w-36 border-b border-dotted border-stone-400"></span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Gewählte Rolle:</span>
                  <span className="w-36 border-b border-dotted border-stone-400"></span>
                </div>
              </div>
            </div>

            {/* Teacher Solution Banner & Learning Goal (NUR BEI LEHRER-LÖSUNG sichtbar) */}
            {showTeacherSolutions && (
              <div className="mb-4 space-y-2">
                <div className="p-2.5 rounded bg-emerald-50 border border-emerald-500 text-emerald-900 text-xs font-semibold flex items-center gap-2">
                  <Key className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>LEHRKRAFT-EXEMPLAR MIT ERWARTUNGSHORIZONT UND MUSTERLÖSUNGEN</span>
                </div>
                {worksheet.learningGoal && (
                  <div className="p-2 rounded bg-stone-100 border-l-4 border-emerald-600 text-xs text-stone-800">
                    <strong className="text-stone-900 block font-bold mb-0.5">🎯 Didaktisches Stundenziel (Lehrkraft):</strong>
                    <p className="m-0 italic">{worksheet.learningGoal}</p>
                  </div>
                )}
              </div>
            )}

            {/* 2. AUFGABENBLOCK 1: STATIONEN-KOMPASS (Verteilt über das ganze Spiel) */}
            <div className="mb-5 space-y-3">
              <div className="flex items-center gap-2 border-b border-stone-300 pb-1">
                <span className="w-5 h-5 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <h3 className="font-bold text-xs sm:text-sm text-stone-900 uppercase tracking-wide m-0">
                  Stationen-Kompass: Leitfragen zu deiner Reise
                </h3>
              </div>

              <div className="space-y-3.5">
                {worksheet.coreQuestions.map((q, idx) => (
                  <div key={idx} className="space-y-1 text-xs">
                    <p className="font-bold text-stone-800 m-0 flex items-start gap-1.5">
                      <span className="text-amber-800 shrink-0 font-mono">[{q.stationRef}]</span>
                      <span>{q.question}</span>
                    </p>

                    {showTeacherSolutions ? (
                      <div className="p-2 rounded bg-emerald-50 border border-emerald-300 text-emerald-950 font-medium text-[11px] leading-relaxed">
                        <strong>Erwartungshorizont:</strong> {q.sampleSolution}
                      </div>
                    ) : (
                      <div className="pt-1 pb-1 space-y-2">
                        <div className="border-b border-stone-300 h-4 w-full"></div>
                        <div className="border-b border-stone-300 h-4 w-full"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. AUFGABENBLOCK 2: HISTORISCHE ENTSCHEIDUNG (Einfach formuliert für 10-16 Jahre) */}
            <div className="mb-5 space-y-2">
              <div className="flex items-center gap-2 border-b border-stone-300 pb-1">
                <span className="w-5 h-5 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <h3 className="font-bold text-xs sm:text-sm text-stone-900 uppercase tracking-wide m-0">
                  {worksheet.dilemmaTask.title || "Schwierige Entscheidung: Was hättest du getan?"}
                </h3>
              </div>

              {worksheet.dilemmaTask.situationContext && (
                <p className="text-[11px] text-stone-600 italic m-0">
                  {worksheet.dilemmaTask.situationContext}
                </p>
              )}

              <div className="p-2.5 rounded bg-stone-50 border border-stone-300 text-xs">
                <strong className="text-stone-900 block mb-1">Deine Aufgabe:</strong>
                <p className="m-0 text-stone-800">{worksheet.dilemmaTask.taskPrompt}</p>

                {showTeacherSolutions ? (
                  <div className="mt-2 p-2 rounded bg-emerald-50 border border-emerald-300 text-emerald-950 font-medium text-[11px]">
                    <strong>Didaktischer Erwartungshorizont:</strong> {worksheet.dilemmaTask.sampleSolution}
                  </div>
                ) : (
                  <div className="pt-2 space-y-2">
                    <div className="border-b border-stone-300 h-4 w-full"></div>
                    <div className="border-b border-stone-300 h-4 w-full"></div>
                    <div className="border-b border-stone-300 h-4 w-full"></div>
                  </div>
                )}
              </div>
            </div>

            {/* 4. AUFGABENBLOCK 3: FACHBEGRIFFS-GLOSSAR (6 ZENTRALE BEGRIFFE) */}
            <div className="mb-4 space-y-2">
              <div className="flex items-center gap-2 border-b border-stone-300 pb-1">
                <span className="w-5 h-5 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <h3 className="font-bold text-xs sm:text-sm text-stone-900 uppercase tracking-wide m-0">
                  Fachbegriffs-Glossar: Erkläre 6 wichtige Begriffe der Epoche in eigenen Worten
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1">
                {worksheet.glossaryTerms.slice(0, 6).map((term, idx) => (
                  <div key={idx} className="border border-stone-300 p-2 rounded bg-stone-50 text-[11px] flex flex-col justify-between">
                    <div>
                      <strong className="text-stone-900 block font-bold text-xs mb-0.5">
                        {idx + 1}. {term.term}
                      </strong>
                      <span className="text-[10px] text-stone-500 block mb-1">
                        ({term.hint})
                      </span>
                    </div>

                    {showTeacherSolutions ? (
                      <p className="m-0 text-emerald-900 bg-emerald-50 p-1.5 rounded border border-emerald-200 text-[10px] leading-snug">
                        {term.solution}
                      </p>
                    ) : (
                      <div className="space-y-1.5 pt-1">
                        <div className="border-b border-stone-300 h-3 w-full"></div>
                        <div className="border-b border-stone-300 h-3 w-full"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-6 pt-2 border-t border-stone-300 flex items-center justify-between text-[10px] text-stone-500">
              <span>Geschichts-Gamification-Studio • Heimbürgeschule Kahla</span>
              <span>Lernstands-Sicherung Geschichtsunterricht</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
