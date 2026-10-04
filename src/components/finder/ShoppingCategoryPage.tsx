import { SHOPPING_CATEGORIES } from '../../data/travel/finderCurated';
import { Sparkles, ShoppingBag, Leaf, Gift, Grid, ArrowRight, HelpCircle, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface ShoppingCategoryPageProps {
  onSelectCategory: (categoryId: string) => void;
  onSelectSubTag: (tag: string) => void;
  onSkipToQuiz: () => void;
  isCompact?: boolean;
}

const SPECIFIC_SUNDRIES = [
  { id: 'leather', name: 'Leather Goods', tag: 'leather', icon: ShoppingBag, desc: 'Handcrafted bags, babouches, jackets, and poufs.', color: 'text-amber-700 bg-amber-50 border-amber-100' },
  { id: 'spices', name: 'Spices & Herbs', tag: 'spices', icon: Leaf, desc: 'Aromatic cumin, saffron, ras el hanout, and herbal remedies.', color: 'text-emerald-700 bg-emerald-50 border-emerald-100' },
  { id: 'ceramics', name: 'Ceramics & Pottery', tag: 'pottery', icon: Grid, desc: 'Intricate zellige tiles, hand-painted tajines, and plates.', color: 'text-blue-700 bg-blue-50 border-blue-100' },
  { id: 'carpets', name: 'Carpets & Textiles', tag: 'carpet', icon: Compass, desc: 'Hand-woven Berber rugs, wool blankets, and caftans.', color: 'text-rose-700 bg-rose-50 border-rose-100' },
];

export default function ShoppingCategoryPage({ onSelectCategory, onSelectSubTag, onSkipToQuiz, isCompact = false }: ShoppingCategoryPageProps) {
  return (
    <div className="space-y-12 py-4">
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full text-xs font-black uppercase tracking-widest text-[#C9A84C]">
          <ShoppingBag className="w-3.5 h-3.5" /> Souk & Artisan Guide
        </div>
        <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-stone-900">
          Shopping & Local Crafts
        </h2>
        <p className="text-stone-500 font-serif italic text-lg">
          Browse by standard category or select an iconic artisan craft to directly discover verified stalls and cooperative workshops.
        </p>
      </div>

      {/* Featured Artisan Crafts (Humble, Literal Labels with Lucide Icons) */}
      <div className="space-y-6">
        <h3 className="text-xs uppercase font-mono tracking-widest text-stone-400 font-black text-center">
          ─── Featured Specialty Crafts ───
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIFIC_SUNDRIES.map((craft, idx) => {
            const IconComponent = craft.icon;
            return (
              <motion.div
                key={craft.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => onSelectSubTag(craft.tag)}
                className="group border border-stone-200/60 bg-white rounded-[28px] p-5 hover:shadow-xl hover:border-[#C9A84C]/30 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${craft.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 group-hover:text-[#C9A84C] transition-colors">
                      {craft.name}
                    </h4>
                    <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                      {craft.desc}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#C9A84C] group-hover:text-stone-950 transition-colors pt-3 border-t border-stone-50">
                  Explore Craft <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Main Categories Grid */}
      <div className="space-y-6">
        <h3 className="text-xs uppercase font-mono tracking-widest text-stone-400 font-black text-center">
          ─── Browse All Shopping Categories ───
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOPPING_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 + 0.3 }}
              onClick={() => onSelectCategory(cat.id)}
              className="border border-stone-100 bg-white p-5 rounded-[24px] hover:shadow-lg hover:border-stone-200 transition-all cursor-pointer flex gap-4 items-start group"
            >
              <span className="text-2xl p-3 bg-stone-50 rounded-xl group-hover:bg-[#C9A84C]/10 transition-colors">
                {cat.icon}
              </span>
              <div className="space-y-1">
                <h4 className="font-bold text-stone-950 text-sm group-hover:text-[#C9A84C] transition-colors">
                  {cat.title}
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Alternative helper card */}
      {!isCompact && (
        <div className="max-w-xl mx-auto bg-stone-50 border border-stone-100 rounded-[32px] p-8 text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-[#C9A84C] mx-auto" />
          <h3 className="font-bold text-stone-900 text-lg">Looking for specific haggling tips or markets?</h3>
          <p className="text-xs text-stone-500 leading-relaxed max-w-sm mx-auto">
            Our shopping quiz matches you with souk shops, fixed-price cooperatives, or modern boutiques according to your comfort level.
          </p>
          <button
            onClick={onSkipToQuiz}
            className="px-6 py-3 bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20 text-[#C9A84C] rounded-2xl text-xs font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <Compass className="w-4 h-4" /> Start Shopping Assistant
          </button>
        </div>
      )}
    </div>
  );
}
