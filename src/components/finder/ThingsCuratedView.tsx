import { FINDER_CURATED_DATA } from '../../data/travel/finderCurated';
import { Sparkles, Compass, Clock, Tag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FilterChipBar from './FilterChipBar';

interface ThingsCuratedViewProps {
  cityId: string;
  onSelectActivity: (activityId: string, name: string) => void;
  onSkipToQuiz: () => void;
  isCompact?: boolean;
}

export default function ThingsCuratedView({ cityId, onSelectActivity, onSkipToQuiz, isCompact = false }: ThingsCuratedViewProps) {
  const normalizedCity = cityId.toLowerCase();
  const hasCuratedData = !!FINDER_CURATED_DATA[normalizedCity];
  const data = FINDER_CURATED_DATA[normalizedCity] || FINDER_CURATED_DATA.marrakech;
  const cityName = cityId.charAt(0).toUpperCase() + cityId.slice(1);

  if (!hasCuratedData && normalizedCity !== 'marrakech') {
    return (
      <div className="space-y-8 py-12 text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full text-xs font-black uppercase tracking-widest text-[#C9A84C]">
          <Compass className="w-3.5 h-3.5" /> Curated Experiences
        </div>
        <h2 className="text-3xl font-display uppercase tracking-tight text-stone-900">
          Must-Do in {cityName}
        </h2>
        <p className="text-stone-500 font-serif italic text-base">
          Curated experience cards for {cityName} are coming soon. In the meantime, browse all verified attractions and activities in {cityName}.
        </p>
        <button
          onClick={onSkipToQuiz}
          className="px-8 py-4 bg-stone-900 text-white hover:bg-[#C9A84C] hover:text-stone-950 rounded-2xl text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center gap-2 shadow-lg cursor-pointer"
        >
          Browse All {cityName} Things to Do <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-12 py-4">
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full text-xs font-black uppercase tracking-widest text-[#C9A84C]">
          <Compass className="w-3.5 h-3.5" /> Curated Experiences
        </div>
        <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-stone-900">
          Must-Do in {cityName}
        </h2>
        <p className="text-stone-500 font-serif italic text-lg">
          The essential landmarks, hidden corners, and local rituals that define the {cityName} experience. Select one to find local spots.
        </p>
      </div>

      {/* Grid of Activities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {data.activities.map((activity, idx) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white border border-stone-100 rounded-[32px] p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Emoji/Header */}
              <div className="flex items-center justify-between">
                <span className="text-3xl p-2 bg-stone-50 rounded-2xl group-hover:bg-[#C9A84C]/10 transition-colors">
                  {activity.emoji}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider bg-stone-50 px-2 py-0.5 rounded-md text-stone-400 font-bold">
                  #{idx + 1} Best
                </span>
              </div>

              <div>
                <h3 className="font-bold text-stone-950 text-base group-hover:text-[#C9A84C] transition-colors leading-snug">
                  {activity.name}
                </h3>
                <p className="text-xs text-stone-500 mt-2 line-clamp-4 leading-relaxed font-sans">
                  {activity.description}
                </p>
              </div>

              {/* Specs */}
              <div className="space-y-2 pt-2 border-t border-stone-50 text-[11px] text-stone-400 font-sans">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 opacity-60" />
                  <span>{activity.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 opacity-60 text-[#C9A84C]" />
                  <span className="font-medium text-stone-500">{activity.vibeTag}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectActivity(activity.id, activity.name)}
              className="mt-6 w-full py-3 bg-stone-900 text-white hover:bg-[#C9A84C] hover:text-stone-950 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Explore Spots <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Specialty Filter Chips */}
      <div className="max-w-3xl mx-auto">
        <FilterChipBar category="things" />
      </div>

      {/* Alternative option */}
      {!isCompact && (
        <div className="max-w-xl mx-auto bg-stone-50 border border-stone-100 rounded-[32px] p-8 text-center space-y-4">
          <Sparkles className="w-8 h-8 text-[#C9A84C] mx-auto" />
          <h3 className="font-bold text-stone-900 text-lg">Prefer a highly customized itinerary match?</h3>
          <p className="text-xs text-stone-500 leading-relaxed max-w-sm mx-auto">
            Take the Activities Matcher to filter by historical depth, photography interest, physical intensity, and child suitability.
          </p>
          <button
            onClick={onSkipToQuiz}
            className="px-6 py-3 bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20 text-[#C9A84C] rounded-2xl text-xs font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <Compass className="w-4 h-4" /> Start Activities Matcher
          </button>
        </div>
      )}
    </div>
  );
}
