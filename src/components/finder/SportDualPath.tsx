import { motion } from 'motion/react';
import { ArrowLeft, Dumbbell, Compass } from 'lucide-react';
import { SportFacilityType } from '../../types';

interface SportDualPathProps {
  city: string;
  onQuickFilter: (facilityType: SportFacilityType) => void;
  onFindNearby: () => void;
  onBookExperience: () => void;
  onBack: () => void;
}

interface QuickChip {
  id: SportFacilityType;
  label: string;
  icon: string;
}

const QUICK_CHIPS: QuickChip[] = [
  { id: 'gym-fitness', label: 'Gym & Fitness', icon: '💪' },
  { id: 'running-outdoor', label: 'Running & Outdoor', icon: '🏃' },
  { id: 'swimming-pool', label: 'Swimming Pools', icon: '🏊' },
  { id: 'yoga-movement', label: 'Yoga & Movement', icon: '🧘' },
  { id: 'combat-sports', label: 'Combat Sports', icon: '🥊' },
  { id: 'team-sports', label: 'Team Sports', icon: '👥' }
];

export default function SportDualPath({ city, onQuickFilter, onFindNearby, onBookExperience, onBack }: SportDualPathProps) {
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <div className="space-y-10 py-6 max-w-4xl mx-auto">
      <div className="border-b border-stone-100 pb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-stone-400 hover:text-stone-900 text-xs font-black uppercase tracking-widest mb-4 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to sub-categories
        </button>
        <div className="flex items-center gap-2.5 mb-1.5">
          <span className="text-3xl">⚽</span>
          <h1 className="font-display text-4xl md:text-5xl text-stone-900 uppercase tracking-tight">
            Sport & Active in {cityName}
          </h1>
        </div>
        <p className="text-stone-500 text-lg italic mt-1">
          "Stay in your zone. Choose a quick workout at a local facility, or book an epic adventure."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Path A - Practical Gym / Fitness */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-stone-100 rounded-[40px] p-8 flex flex-col justify-between hover:shadow-2xl hover:border-[#C9A84C]/20 transition-all group"
        >
          <div>
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-8 font-black shadow-sm">
              <Dumbbell className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl text-stone-900 mb-2">Find a Place to Train</h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Search gyms, running loops, public courts, and swimming pools near you. Ideal for maintaining your daily workout routine while in {cityName}.
            </p>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-4">
              Sorted by distance · Daily rates & options
            </div>

            {/* Quick Chips Grid */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {QUICK_CHIPS.map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => onQuickFilter(chip.id)}
                  className="px-3 py-2 bg-stone-50 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C] border border-stone-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-stone-600 transition-all text-left flex items-center gap-2 cursor-pointer"
                >
                  <span>{chip.icon}</span>
                  <span className="truncate">{chip.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={onFindNearby}
            className="w-full py-4 bg-stone-900 group-hover:bg-[#C9A84C] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-stone-200 cursor-pointer"
          >
            Find Nearby Places →
          </button>
        </motion.div>

        {/* Path B - Experience/Adventures */}
        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-stone-100 rounded-[40px] p-8 flex flex-col justify-between hover:shadow-2xl hover:border-[#C9A84C]/20 transition-all group"
        >
          <div>
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-8 font-black shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl text-stone-900 mb-2">Book a Sport Experience</h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Ready for something unforgettable? Book a certified surf instructor, map a guided High Atlas trek, or lock in a dune-boarding session.
            </p>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-4">
              Curated guides · Equipment included · Memorable
            </div>

            {/* List of sport experiences */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-xs font-bold text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-100/50">
                <span>🏄</span> Surf, Windsurf & Kitesurf
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-100/50">
                <span>🥾</span> Mountain Hiking & High Treks
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-100/50">
                <span>🧗</span> Rock Climbing & Via Ferratas
              </div>
            </div>
          </div>

          <button
            onClick={onBookExperience}
            className="w-full py-4 bg-stone-900 group-hover:bg-[#C9A84C] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-stone-200 cursor-pointer"
          >
            Browse Experiences →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
