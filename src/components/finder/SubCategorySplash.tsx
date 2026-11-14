import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { ThingsToDoSubCategory } from '../../types';
import { cn } from '../../utils/cn';
import { useTranslation } from 'react-i18next';
import { useLangPath } from '../../utils/localeRouting';
import { cityMap } from '../../data/cities';

interface SubCategorySplashProps {
  city: string;
  onSelect: (subCategory: ThingsToDoSubCategory) => void;
  onBrowseAll: () => void;
  onBack: () => void;
}

const SUB_CATEGORY_META: { id: ThingsToDoSubCategory; icon: string }[] = [
  { id: 'culture', icon: '🏛️' },
  { id: 'sport', icon: '⚽' },
  { id: 'wellness', icon: '🧘' },
  { id: 'desert-nature', icon: '🏜️' },
  { id: 'photography', icon: '📸' },
  { id: 'social', icon: '🎉' }
];

export default function SubCategorySplash({ city, onSelect, onBrowseAll, onBack }: SubCategorySplashProps) {
  const { t } = useTranslation();
  const { dir } = useLangPath();
  const cityName = cityMap[city]?.name || (city.charAt(0).toUpperCase() + city.slice(1));
  const BackArrow = dir === 'rtl' ? ArrowRight : ArrowLeft;
  const ForwardArrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-10 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-stone-100 pb-8">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-stone-400 hover:text-stone-900 text-xs font-black uppercase tracking-widest mb-4 transition-colors cursor-pointer"
          >
            <BackArrow className="w-3.5 h-3.5" /> {t('subcategory.backToFinder')}
          </button>
          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="text-3xl">🎡</span>
            <h1 className="font-display text-4xl md:text-5xl text-stone-900 uppercase tracking-tight">
              {t('subcategory.title', { city: cityName })}
            </h1>
          </div>
          <p className="text-stone-500 text-lg italic mt-1">
            {t('subcategory.quote')}
          </p>
        </div>

        <button 
          onClick={onBrowseAll}
          className="px-6 py-3 bg-stone-900 hover:bg-[#C9A84C] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-stone-200 cursor-pointer self-stretch md:self-auto justify-center"
        >
          <Sparkles className="w-3.5 h-3.5" /> {t('subcategory.browseEverything')}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUB_CATEGORY_META.map((sub, i) => {
          const keywords = t(`subcategory.items.${sub.id}.keywords`, { returnObjects: true }) as string[];
          return (
            <motion.button
              key={sub.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onSelect(sub.id)}
              className="group p-8 bg-white border border-stone-100 rounded-[32px] text-start hover:shadow-2xl hover:border-[#C9A84C]/30 hover:-translate-y-1 transition-all flex flex-col h-full relative overflow-hidden cursor-pointer"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{sub.icon}</div>
              <h3 className="font-display text-2xl text-stone-900 mb-2">
                {t(`subcategory.items.${sub.id}.label`)}
              </h3>
              <p className="text-sm text-stone-500 mb-6 flex-1 leading-relaxed">
                {t(`subcategory.items.${sub.id}.description`)}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-6">
                {Array.isArray(keywords) && keywords.map((kw) => (
                  <span key={kw} className="px-2.5 py-1 bg-stone-50 text-stone-400 text-[9px] font-black uppercase tracking-wider rounded-lg border border-stone-100/50">
                    {kw}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-50 mt-auto">
                <span className={cn("text-[10px] font-black text-stone-300 uppercase tracking-widest group-hover:text-[#C9A84C] transition-colors")}>
                  {t('subcategory.exploreFocus')}
                </span>
                <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-[#C9A84C] group-hover:text-white transition-all">
                  <ForwardArrow className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#C9A84C]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
