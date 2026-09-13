import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface SleepFitCheckProps {
  name: string;
  type: string;
  lifestyle: string;
}

export default function SleepFitCheck({ name, type, lifestyle }: SleepFitCheckProps) {
  const [quizStep, setQuizStep] = useState(0); 
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [customFitScore, setCustomFitScore] = useState<number | null>(null);

  const runQuizAnswer = (answer: string) => {
    const nextAnswers = [...quizAnswers, answer];
    setQuizAnswers(nextAnswers);
    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    } else {
      let score = 75;
      if (nextAnswers[0] === 'quiet' && (type === 'riad' || type === 'hotel')) score += 10;
      if (nextAnswers[1] === 'budget' && lifestyle === 'lean') score += 15;
      if (nextAnswers[2] === 'authentic' && type === 'riad') score += 10;
      setCustomFitScore(Math.min(99, Math.max(60, score)));
      setQuizStep(4);
    }
  };

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-[32px] p-6 shadow-sm space-y-5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-white border border-blue-100 flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-[#3c78d8]" />
        </div>
        <h4 className="text-sm font-black text-stone-900 uppercase tracking-widest leading-none">Diagnostic Match</h4>
      </div>

      <AnimatePresence mode="wait">
        {quizStep === 0 && (
          <motion.div key="intro" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="space-y-4">
            <p className="text-xs text-stone-600 leading-relaxed font-bold">Discover how well {name} aligns with your specific traveler psychology.</p>
            <button 
              onClick={()=>setQuizStep(1)} 
              className="w-full py-4 rounded-[20px] bg-[#3c78d8] text-white text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 group transition-all shadow-md hover:bg-[#2c68c8]"
            >
              Begin Diagnosis <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}

        {quizStep === 1 && (
          <motion.div key="q1" initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-30}} className="space-y-3">
            <p className="text-[11px] font-black text-stone-400 uppercase tracking-[0.2em] mb-4">Requirement 01/03</p>
            <p className="text-xs font-black text-stone-900 mb-4">Acoustic Preference?</p>
            <div className="grid grid-cols-1 gap-2">
              <button onClick={()=>runQuizAnswer('quiet')} className="py-4 px-5 rounded-2xl border border-blue-200 bg-white text-left text-[11px] font-black uppercase tracking-tight hover:border-[#3c78d8] hover:bg-stone-50 transition-all shadow-sm">🧘 Absolute serenity</button>
              <button onClick={()=>runQuizAnswer('vibrant')} className="py-4 px-5 rounded-2xl border border-blue-200 bg-white text-left text-[11px] font-black uppercase tracking-tight hover:border-[#3c78d8] hover:bg-stone-50 transition-all shadow-sm">✨ Central & Vibrant</button>
            </div>
          </motion.div>
        )}

        {quizStep === 2 && (
          <motion.div key="q2" initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-30}} className="space-y-3">
            <p className="text-[11px] font-black text-stone-400 uppercase tracking-[0.2em] mb-4">Requirement 02/03</p>
            <p className="text-xs font-black text-stone-900 mb-4">Budget Strategy?</p>
            <div className="grid grid-cols-1 gap-2">
              <button onClick={()=>runQuizAnswer('budget')} className="py-4 px-5 rounded-2xl border border-blue-200 bg-white text-left text-[11px] font-black uppercase tracking-tight hover:border-[#3c78d8] hover:bg-stone-50 transition-all shadow-sm">📉 Lean Explorer</button>
              <button onClick={()=>runQuizAnswer('premium')} className="py-4 px-5 rounded-2xl border border-blue-200 bg-white text-left text-[11px] font-black uppercase tracking-tight hover:border-[#3c78d8] hover:bg-stone-50 transition-all shadow-sm">💎 Full Luxury Kit</button>
            </div>
          </motion.div>
        )}

        {quizStep === 3 && (
          <motion.div key="q3" initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-30}} className="space-y-3">
            <p className="text-[11px] font-black text-stone-400 uppercase tracking-[0.2em] mb-4">Requirement 03/03</p>
            <p className="text-xs font-black text-stone-900 mb-4">Primary Destination Goal?</p>
            <div className="grid grid-cols-1 gap-2">
              <button onClick={()=>runQuizAnswer('authentic')} className="py-4 px-5 rounded-2xl border border-blue-200 bg-white text-left text-[11px] font-black uppercase tracking-tight hover:border-[#3c78d8] hover:bg-stone-50 transition-all shadow-sm">🕌 Historic Medina</button>
              <button onClick={()=>runQuizAnswer('modern')} className="py-4 px-5 rounded-2xl border border-blue-200 bg-white text-left text-[11px] font-black uppercase tracking-tight hover:border-[#3c78d8] hover:bg-stone-50 transition-all shadow-sm">🛌 New City Comfort</button>
            </div>
          </motion.div>
        )}

        {quizStep === 4 && (
          <motion.div key="result" initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="text-center space-y-5 py-4">
             <div className="relative w-24 h-24 mx-auto">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-blue-100" />
                  <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="8" fill="transparent" 
                    strokeDasharray={276}
                    strokeDashoffset={276 - (276 * customFitScore!) / 100}
                    className="text-[#10b478] transition-all duration-1000" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-black text-stone-900 font-display">
                  {customFitScore}%
                </div>
             </div>
             <div className="space-y-2">
               <p className="text-xs font-black text-stone-900 uppercase tracking-widest">Match Strength</p>
               <p className="text-[10px] text-stone-500 font-bold leading-relaxed px-2">
                 {customFitScore! > 85 
                   ? "Exceptional alignment. This property satisfies all your primary psychological drivers." 
                   : "Solid alignment with a few minor compromises in secondary preferences."}
               </p>
             </div>
             <button onClick={()=>setQuizStep(0)} className="text-[10px] font-black text-[#3c78d8] underline uppercase tracking-widest">Recalibrate Probe</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
