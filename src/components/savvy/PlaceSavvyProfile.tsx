import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldAlert, Smile, Sparkles, MessageSquare, AlertOctagon, HelpCircle, ArrowLeft, Heart, ThumbsDown, ThumbsUp } from 'lucide-react';
import { PlaceIntel } from '../../types/savvy';
import { SavvyScoreEngine } from '../../engine/savvyScoreEngine';
import SavvyBadge from './SavvyBadge';
import { cn } from '../../utils/cn';

interface PlaceSavvyProfileProps {
  placeId?: string;
  onBack?: () => void;
}

export default function PlaceSavvyProfile({ placeId: propPlaceId, onBack }: PlaceSavvyProfileProps) {
  const { cityId, placeType, placeId: urlPlaceId } = useParams();
  const navigate = useNavigate();
  const placeId = propPlaceId || urlPlaceId;
  
  const [intel, setIntel] = useState<PlaceIntel | null>(null);

  useEffect(() => {
    if (placeId) {
      const data = SavvyScoreEngine.getPlaceIntel(placeId);
      setIntel(data || null);
    }
  }, [placeId]);

  if (!intel) {
    return (
      <div className="bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800/80 rounded-2xl p-12 text-center text-stone-400 space-y-4 max-w-2xl mx-auto">
        <AlertOctagon className="w-12 h-12 text-[#C9A84C]/50 mx-auto" />
        <div>
          <h3 className="font-bold text-stone-900 dark:text-white">Profile Under Construction</h3>
          <p className="text-xs mt-1">Our platform researchers are currently cross-referencing reviews and social proof for this venue.</p>
        </div>
        {onBack ? (
          <button onClick={onBack} className="px-4 py-2 bg-stone-900 text-white text-xs rounded-xl cursor-pointer">
            Go Back
          </button>
        ) : (
          <button onClick={() => navigate(-1)} className="px-4 py-2 bg-stone-900 text-white text-xs rounded-xl cursor-pointer">
            Go Back
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Navigation Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack || (() => navigate(-1))}
          className="p-2 bg-white dark:bg-stone-900 hover:bg-stone-50 border border-stone-200/60 dark:border-stone-800 rounded-xl transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-stone-600 dark:text-stone-300" />
        </button>
        <div>
          <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-black">
            Local Businesses Directory
          </span>
          <h2 className="text-xl font-bold tracking-tight text-stone-900 dark:text-white">{intel.placeName}</h2>
        </div>
      </div>

      {/* Main Core Scores Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left Side: Score card */}
        <div className="md:col-span-4 bg-stone-900 text-white rounded-2xl p-6 border border-stone-800 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 bg-[#C9A84C]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-1.5 relative z-10">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C9A84C]">Overall Index</span>
            <h3 className="text-sm font-bold text-stone-300">Happiness Score</h3>
            <p className="text-[10px] text-stone-400 leading-normal font-sans">
              Our unique sentiment algorithm combining client review distribution, value transparency, and safety ratings.
            </p>
          </div>

          <div className="text-center relative z-10 py-4">
            <div className="text-6xl font-mono font-black text-[#C9A84C]">{intel.happinessScore.toFixed(1)}</div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mt-1">Out of 10</div>
          </div>

          <div className="relative z-10 border-t border-stone-800 pt-4 flex justify-between text-[10px] font-mono text-stone-400">
            <span>Updated: {intel.lastVerifiedDate}</span>
            <span>By: {intel.verifiedBy}</span>
          </div>
        </div>

        {/* Right Side: Score breakdowns */}
        <div className="md:col-span-8 bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800/80 rounded-2xl p-6 shadow-md space-y-5">
          <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-white uppercase tracking-wider">Metrics Breakdown</h3>
          
          <div className="space-y-4">
            {/* Safety Score */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-stone-700 dark:text-stone-300">Street Safety & Security</span>
                <span className="font-mono font-bold text-stone-900 dark:text-white">{intel.safetyScore}/10</span>
              </div>
              <div className="w-full bg-stone-100 dark:bg-stone-950 rounded-full h-1.5">
                <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${intel.safetyScore * 10}%` }} />
              </div>
            </div>

            {/* Value Score */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-stone-700 dark:text-stone-300">Value For Money</span>
                <span className="font-mono font-bold text-stone-900 dark:text-white">{intel.valueForMoneyScore}/10</span>
              </div>
              <div className="w-full bg-stone-100 dark:bg-stone-950 rounded-full h-1.5">
                <div className="bg-[#C9A84C] h-1.5 rounded-full" style={{ width: `${intel.valueForMoneyScore * 10}%` }} />
              </div>
            </div>

            {/* Friendliness */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-stone-700 dark:text-stone-300">Tourist Friendliness</span>
                <span className="font-mono font-bold text-stone-900 dark:text-white">{intel.touristFriendlinessScore}/10</span>
              </div>
              <div className="w-full bg-stone-100 dark:bg-stone-950 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${intel.touristFriendlinessScore * 10}%` }} />
              </div>
            </div>

            {/* Scam Risk (Lower is better, so color code green if low, red if high) */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-stone-700 dark:text-stone-300">Scam & Hustle Risk</span>
                <span className="font-mono font-bold text-stone-900 dark:text-white">{intel.scamRiskScore}/10</span>
              </div>
              <div className="w-full bg-stone-100 dark:bg-stone-950 rounded-full h-1.5">
                <div 
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    intel.scamRiskScore > 5 ? "bg-rose-500" : "bg-teal-500"
                  )} 
                  style={{ width: `${intel.scamRiskScore * 10}%` }} 
                />
              </div>
              <div className="text-[9px] text-stone-400 font-sans">
                *Risk score calculated from local pricing disputes and hidden ticket report records.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Red Flags warnings (if any exist) */}
      {intel.redFlags && intel.redFlags.length > 0 && (
        <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-5 space-y-2">
          <h4 className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-rose-500 animate-pulse" />
            Active Red Flags & Cautions
          </h4>
          <ul className="space-y-1.5 list-disc pl-5 text-xs text-stone-700 dark:text-stone-300 font-sans leading-relaxed">
            {intel.redFlags.map((flag, idx) => (
              <li key={idx}>
                <strong>[{flag.severity}]</strong> {flag.text} <span className="text-stone-400">({flag.source})</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Social Highlights & Expat Quotes */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800/80 rounded-2xl p-6 shadow-md space-y-4">
        <h3 className="text-sm font-bold tracking-tight text-stone-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
          <MessageSquare className="w-4 h-4 text-[#C9A84C]" />
          Local Business & Social Highlights
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {intel.socialHighlights.map((hl, idx) => (
            <div 
              key={idx}
              className="p-4 bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-850 rounded-xl space-y-2"
            >
              <p className="text-xs text-stone-600 dark:text-stone-300 italic leading-relaxed font-sans">
                "{hl.text}"
              </p>
              <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                <span>Platform Research ({hl.source})</span>
                <span>Harvested {hl.dateHarvested}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local Insights & Alternative options */}
      {intel.localInsight && (
        <div className="bg-[#C9A84C]/5 border border-[#C9A84C]/15 p-5 rounded-2xl space-y-2">
          <h4 className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Cultural Insight
          </h4>
          <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
            {intel.localInsight}
          </p>
        </div>
      )}

      {/* Praise vs. Complaints */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Praise */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800/80 rounded-2xl p-5 shadow-sm space-y-3">
          <h4 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-stone-100 dark:border-stone-800 pb-2">
            <ThumbsUp className="w-4 h-4 text-emerald-500" />
            Key Praise & Highlights
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300 list-disc pl-4 font-sans">
            {intel.commonPraise.map((pr, idx) => (
              <li key={idx}>{pr}</li>
            ))}
          </ul>
        </div>

        {/* Complaints */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800/80 rounded-2xl p-5 shadow-sm space-y-3">
          <h4 className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-stone-100 dark:border-stone-800 pb-2">
            <ThumbsDown className="w-4 h-4 text-amber-500" />
            Common Complaints
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300 list-disc pl-4 font-sans">
            {intel.commonComplaints.map((co, idx) => (
              <li key={idx}>{co}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Savvy Pro Tips */}
      {intel.savvyTips && intel.savvyTips.length > 0 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800/80 rounded-2xl p-6 shadow-md space-y-3">
          <h4 className="text-sm font-bold text-stone-900 dark:text-white uppercase tracking-wider">
            Venue-Specific Savvy Moves
          </h4>
          <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
            {intel.savvyTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#C9A84C]">💡</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
