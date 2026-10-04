import { FINDER_CURATED_DATA } from '../../data/travel/finderCurated';
import { Sparkles, BedDouble, Users, HelpCircle, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import FilterChipBar from './FilterChipBar';

interface SleepCuratedViewProps {
  cityId: string;
  onSelectCohort: (cohort: 'tourist' | 'local' | 'expat', style: string) => void;
  onSkipToQuiz: () => void;
  isCompact?: boolean;
}

export default function SleepCuratedView({ cityId, onSelectCohort, onSkipToQuiz, isCompact = false }: SleepCuratedViewProps) {
  const normalizedCity = cityId.toLowerCase();
  const hasCuratedData = !!FINDER_CURATED_DATA[normalizedCity];
  const data = FINDER_CURATED_DATA[normalizedCity] || FINDER_CURATED_DATA.marrakech;
  const cityName = cityId.charAt(0).toUpperCase() + cityId.slice(1);

  if (!hasCuratedData && normalizedCity !== 'marrakech') {
    return (
      <div className="space-y-8 py-12 text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full text-xs font-black uppercase tracking-widest text-[#C9A84C]">
          <BedDouble className="w-3.5 h-3.5" /> Neighborhood Matches
        </div>
        <h2 className="text-3xl font-display uppercase tracking-tight text-stone-900">
          Where to Stay in {cityName}
        </h2>
        <p className="text-stone-500 font-serif italic text-base">
          Curated neighborhood cohort guides for {cityName} are coming soon. In the meantime, browse all verified riads, hotels, and apartments in {cityName}.
        </p>
        <button
          onClick={onSkipToQuiz}
          className="px-8 py-4 bg-stone-900 text-white hover:bg-[#C9A84C] hover:text-stone-950 rounded-2xl text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center gap-2 shadow-lg cursor-pointer"
        >
          Browse All {cityName} Stays <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-12 py-4">
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full text-xs font-black uppercase tracking-widest text-[#C9A84C]">
          <BedDouble className="w-3.5 h-3.5" /> Neighborhood Matches
        </div>
        <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-stone-900">
          Where to Stay in {cityName}
        </h2>
        <p className="text-stone-500 font-serif italic text-lg">
          We have matched {cityName}'s unique neighborhoods with distinct travel profiles. Select your cohort style below to explore listings.
        </p>
      </div>

      {/* Cohort Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.stays.map((stay, idx) => (
          <motion.div
            key={stay.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="border border-stone-200/60 bg-white rounded-[32px] p-6 relative hover:shadow-xl hover:border-[#C9A84C]/30 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Cohort badge */}
              <span className="absolute top-6 right-6 text-[9px] uppercase tracking-wider font-black bg-stone-50 border border-stone-100 px-3 py-1 rounded-full text-stone-500">
                Ideal for {stay.cohort}s
              </span>

              {/* Vibe Emoji Container */}
              <div className="w-12 h-12 bg-[#C9A84C]/10 text-[#C9A84C] text-2xl rounded-2xl flex items-center justify-center">
                {stay.vibeEmoji}
              </div>

              <div className="mt-6 space-y-2">
                <h3 className="font-bold text-stone-900 text-lg group-hover:text-[#C9A84C] transition-colors">
                  {stay.name}
                </h3>
                <p className="text-xs text-[#C9A84C] font-mono uppercase tracking-widest font-bold">
                  {stay.styleName}
                </p>
              </div>

              <p className="text-xs text-stone-500 mt-4 leading-relaxed font-sans">
                {stay.description}
              </p>

              {/* Location indicator */}
              <div className="mt-6 p-4 bg-stone-50/80 border border-stone-100 rounded-2xl text-xs flex items-center gap-2 text-stone-600 font-sans">
                <span className="text-base">📍</span>
                <span className="font-medium">{stay.locationArea}</span>
              </div>
            </div>

            <button
              onClick={() => onSelectCohort(stay.cohort, stay.styleName)}
              className="mt-8 w-full py-3.5 bg-stone-950 text-white hover:bg-[#C9A84C] hover:text-stone-950 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Explore Stays <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Specialty Filter Chips */}
      <div className="max-w-3xl mx-auto">
        <FilterChipBar category="sleep" />
      </div>

      {/* Alternative option */}
      {!isCompact && (
        <div className="max-w-xl mx-auto bg-stone-50 border border-stone-100 rounded-[32px] p-8 text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-[#C9A84C] mx-auto" />
          <h3 className="font-bold text-stone-900 text-lg">Prefer a personalized accommodation search?</h3>
          <p className="text-xs text-stone-500 leading-relaxed max-w-sm mx-auto">
            Our sleep preference helper will match you based on pool requirements, breakfast options, air conditioning, and budget ranges.
          </p>
          <button
            onClick={onSkipToQuiz}
            className="px-6 py-3 bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20 text-[#C9A84C] rounded-2xl text-xs font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <Compass className="w-4 h-4" /> Start Sleep Assistant
          </button>
        </div>
      )}
    </div>
  );
}
