import { FINDER_CURATED_DATA } from '../../data/travel/finderCurated';
import { Sparkles, Utensils, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import FilterChipBar from './FilterChipBar';

interface EatCuratedViewProps {
  cityId: string;
  onSelectDish: (dishId: string, name: string) => void;
  onSkipToQuiz: () => void;
  onBack: () => void;
  isCompact?: boolean;
}

export default function EatCuratedView({ cityId, onSelectDish, onSkipToQuiz, onBack, isCompact = false }: EatCuratedViewProps) {
  const normalizedCity = cityId.toLowerCase();
  const hasCuratedData = !!FINDER_CURATED_DATA[normalizedCity];
  const data = FINDER_CURATED_DATA[normalizedCity] || FINDER_CURATED_DATA.marrakech;
  const cityName = cityId.charAt(0).toUpperCase() + cityId.slice(1);

  if (!hasCuratedData && normalizedCity !== 'marrakech') {
    return (
      <div className="space-y-8 py-12 text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full text-xs font-black uppercase tracking-widest text-[#C9A84C]">
          <Utensils className="w-3.5 h-3.5" /> Culinary Discovery
        </div>
        <h2 className="text-3xl font-display uppercase tracking-tight text-stone-900">
          Eat & Drink in {cityName}
        </h2>
        <p className="text-stone-500 font-serif italic text-base">
          Curated dish cards for {cityName} are coming soon. In the meantime, browse all verified food spots and local dining recommendations in {cityName}.
        </p>
        <button
          onClick={onSkipToQuiz}
          className="px-8 py-4 bg-stone-900 text-white hover:bg-[#C9A84C] hover:text-stone-950 rounded-2xl text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center gap-2 shadow-lg cursor-pointer"
        >
          Browse All {cityName} Listings <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-12 py-4">
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full text-xs font-black uppercase tracking-widest text-[#C9A84C]">
          <Utensils className="w-3.5 h-3.5" /> Culinary Discovery
        </div>
        <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-stone-900">
          Iconic Dishes of {cityName}
        </h2>
        <p className="text-stone-500 font-serif italic text-lg">
          Taste the heritage of the city. Select a specialty to find authentic local venues serving it, or let the culinary guide narrow down your choices.
        </p>
      </div>

      {/* Grid of Dishes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {data.dishes.map((dish, idx) => (
          <motion.div
            key={dish.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white border border-stone-100 rounded-[32px] p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* No-Image Tile — warm gradient with the dish's emoji */}
              <div className="relative aspect-video sm:aspect-square overflow-hidden rounded-[24px]
                bg-gradient-to-br from-[#F5EDE4] to-[#EDE0D0] border border-[#E2D4C2]
                flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#C9A84C_0.5px,transparent_0.5px)] [background-size:18px_18px] opacity-10 pointer-events-none" />
                <span className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-3xl shadow-sm">
                  {dish.emoji}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-stone-950 text-base group-hover:text-[#C9A84C] transition-colors">
                  {dish.name}
                </h3>
                <p className="text-xs text-stone-500 mt-2 line-clamp-4 leading-relaxed font-sans">
                  {dish.description}
                </p>
              </div>
            </div>

            <button
              onClick={() => onSelectDish(dish.id, dish.name)}
              className="mt-6 w-full py-3 bg-stone-900 text-white hover:bg-[#C9A84C] hover:text-stone-950 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Find Places <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Specialty Filter Chips */}
      <div className="max-w-3xl mx-auto">
        <FilterChipBar category="food" />
      </div>

      {/* Bottom helper card */}
      {!isCompact && (
        <div className="max-w-xl mx-auto bg-stone-50 border border-stone-100 rounded-[32px] p-8 text-center space-y-4">
          <Sparkles className="w-8 h-8 text-[#C9A84C] mx-auto" />
          <h3 className="font-bold text-stone-900 text-lg">Looking for a specific dietary need or vibe?</h3>
          <p className="text-xs text-stone-500 leading-relaxed max-w-sm mx-auto">
            Take our customized culinary matcher quiz to find vegetarian-friendly spots, alcohol policies, and budget-friendly street corners.
          </p>
          <button
            onClick={onSkipToQuiz}
            className="px-6 py-3 bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20 text-[#C9A84C] rounded-2xl text-xs font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <Compass className="w-4 h-4" /> Take Culinary Quiz
          </button>
        </div>
      )}
    </div>
  );
}
