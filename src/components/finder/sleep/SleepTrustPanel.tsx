import React from 'react';
import { Shield, ThumbsUp, ThumbsDown, Info } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface SleepTrustPanelProps {
  trustScores: {
    cleanliness: number;
    safety: number;
    staff: number;
    value: number;
    comfort: number;
    location: number;
  };
  pros: string[];
  cons: string[];
  reviewHighlights?: {
    solo?: string;
    couples?: string;
    families?: string;
    business?: string;
  };
}

export default function SleepTrustPanel({
  trustScores,
  pros,
  cons,
  reviewHighlights
}: SleepTrustPanelProps) {
  return (
    <section className="bg-white border border-stone-100 rounded-[40px] p-8 shadow-sm space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
          <Shield className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="font-display text-2xl text-stone-900 font-black tracking-tight">Trust & Satisfaction Indicators</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 bg-stone-50/50 p-6 rounded-[32px] border border-stone-100">
        {Object.entries(trustScores).map(([key, value]) => (
          <div key={key} className="space-y-2">
            <div className="flex justify-between text-xs font-black tracking-widest uppercase">
              <span className="text-stone-400">{key}</span>
              <span className="text-stone-900 font-mono">{(value as number).toFixed(1)}</span>
            </div>
            <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
              <div 
                className={cn("h-full transition-all duration-1000", (value as number) > 9 ? "bg-emerald-500" : (value as number) > 8 ? "bg-blue-500" : "bg-amber-500")} 
                style={{ width: `${(value as number) * 10}%` }} 
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#eaf9f4] border border-[#b2e7d6] rounded-[32px] p-6 shadow-sm">
          <h4 className="flex items-center gap-2 text-[11px] font-black text-[#085041] uppercase tracking-[0.2em] mb-4">
            <ThumbsUp className="w-4 h-4 fill-current" /> High Confidence Points
          </h4>
          <ul className="space-y-3">
            {pros.map((pro, i) => (
              <li key={i} className="flex gap-3 text-xs text-[#0f6e56] font-bold leading-relaxed">
                <span className="text-[#10b478] shrink-0">•</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#fdf2f2] border border-[#fbd5d5] rounded-[32px] p-6 shadow-sm">
          <h4 className="flex items-center gap-2 text-[11px] font-black text-[#791f1f] uppercase tracking-[0.2em] mb-4">
            <ThumbsDown className="w-4 h-4 fill-current" /> Awareness Points
          </h4>
          <ul className="space-y-3">
            {cons.map((con, i) => (
              <li key={i} className="flex gap-3 text-xs text-[#a32d2d] font-bold leading-relaxed">
                <span className="text-[#e24b4a] shrink-0">•</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {reviewHighlights && (
        <div className="pt-6 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviewHighlights.solo && (
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#3c78d8] mb-1">Solo Traveler Insight</p>
              <p className="text-xs text-stone-600 italic font-medium leading-relaxed">"{reviewHighlights.solo}"</p>
            </div>
          )}
          {reviewHighlights.families && (
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#3c78d8] mb-1">Family Insight</p>
              <p className="text-xs text-stone-600 italic font-medium leading-relaxed">"{reviewHighlights.families}"</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
