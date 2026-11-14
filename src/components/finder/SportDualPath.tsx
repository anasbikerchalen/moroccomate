import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Dumbbell, Compass } from 'lucide-react';
import { SportFacilityType } from '../../types';
import { useTranslation } from 'react-i18next';
import { useLangPath } from '../../utils/localeRouting';
import { cityMap } from '../../data/cities';

interface SportDualPathProps {
  city: string;
  onQuickFilter: (facilityType: SportFacilityType) => void;
  onFindNearby: () => void;
  onBookExperience: () => void;
  onBack: () => void;
}

const QUICK_CHIPS: { id: SportFacilityType; icon: string }[] = [
  { id: 'gym-fitness', icon: '💪' },
  { id: 'running-outdoor', icon: '🏃' },
  { id: 'swimming-pool', icon: '🏊' },
  { id: 'yoga-movement', icon: '🧘' },
  { id: 'combat-sports', icon: '🥊' },
  { id: 'team-sports', icon: '👥' }
];

export default function SportDualPath({ city, onQuickFilter, onFindNearby, onBookExperience, onBack }: SportDualPathProps) {
  const { t } = useTranslation();
  const { dir } = useLangPath();
  const cityName = cityMap[city]?.name || (city.charAt(0).toUpperCase() + city.slice(1));
  const BackArrow = dir === 'rtl' ? ArrowRight : ArrowLeft;
  const expItems = t('sportPath.expItems', { returnObjects: true }) as { icon: string; label: string }[];

  return (
    <div className="space-y-10 py-6 max-w-4xl mx-auto">
      <div className="border-b border-stone-100 pb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-stone-400 hover:text-stone-900 text-xs font-black uppercase tracking-widest mb-4 transition-colors cursor-pointer"
        >
          <BackArrow className="w-3.5 h-3.5" /> {t('sportPath.backToSubcategories')}
        </button>
        <div className="flex items-center gap-2.5 mb-1.5">
          <span className="text-3xl">⚽</span>
          <h1 className="font-display text-4xl md:text-5xl text-stone-900 uppercase tracking-tight">
            {t('sportPath.title', { city: cityName })}
          </h1>
        </div>
        <p className="text-stone-500 text-lg italic mt-1">
          {t('sportPath.quote')}
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
            <h2 className="font-display text-2xl text-stone-900 mb-2">{t('sportPath.trainTitle')}</h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              {t('sportPath.trainDesc', { city: cityName })}
            </p>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-4">
              {t('sportPath.trainMeta')}
            </div>

            {/* Quick Chips Grid */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {QUICK_CHIPS.map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => onQuickFilter(chip.id)}
                  className="px-3 py-2 bg-stone-50 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C] border border-stone-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-stone-600 transition-all text-start flex items-center gap-2 cursor-pointer"
                >
                  <span>{chip.icon}</span>
                  <span className="truncate">{t(`sportPath.chips.${chip.id}`)}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={onFindNearby}
            className="w-full py-4 bg-stone-900 group-hover:bg-[#C9A84C] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-stone-200 cursor-pointer"
          >
            {t('sportPath.findNearbyBtn')}
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
            <h2 className="font-display text-2xl text-stone-900 mb-2">{t('sportPath.expTitle')}</h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              {t('sportPath.expDesc')}
            </p>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-4">
              {t('sportPath.expMeta')}
            </div>

            {/* List of sport experiences */}
            <div className="space-y-3 mb-8">
              {Array.isArray(expItems) && expItems.map((exp, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-bold text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-100/50">
                  <span>{exp.icon}</span> {exp.label}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onBookExperience}
            className="w-full py-4 bg-stone-900 group-hover:bg-[#C9A84C] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-stone-200 cursor-pointer"
          >
            {t('sportPath.browseExpBtn')}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
