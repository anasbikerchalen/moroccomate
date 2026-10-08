import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, ArrowRight, X, SlidersHorizontal, Eye, HelpCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useParameterStore } from '../../state/parameterStore';
import { useExploreStore } from '../../state/exploreStore';
import { SEO } from '../ui/SEO';
import LocationPicker from './LocationPicker';

import catFoodImg from '../../assets/images/finder/category_food_matte_1786297062095.jpg';
import catStaysImg from '../../assets/images/finder/category_stays_matte_1786297074546.jpg';
import catThingsImg from '../../assets/images/finder/category_things_vector.svg';
import catShoppingImg from '../../assets/images/finder/category_shop_vector.svg';

const CATEGORIES = [
  { 
    id: 'food', 
    label: 'Food & Dining', 
    icon: '🍲',
    image: catFoodImg,
    fallback: catThingsImg,
    badge: 'Curated with ❤️',
    description: 'Street food, local eats, fine dining & hidden gems' 
  },
  { 
    id: 'sleep', 
    label: 'Stays & Sleep', 
    icon: '🛌',
    image: catStaysImg,
    fallback: catThingsImg,
    badge: 'Handpicked stays',
    description: 'Riads, boutique hotels, desert camps & more' 
  },
  { 
    id: 'things-to-do', 
    label: 'Things to Do', 
    icon: '🎡',
    image: catThingsImg,
    fallback: catShoppingImg,
    badge: 'Unforgettable moments',
    hasSubCategories: true,
    description: 'Cultural sites, adventures, tours & local experiences' 
  },
  { 
    id: 'shopping', 
    label: 'Shopping', 
    icon: '🛍️',
    image: catShoppingImg,
    fallback: catThingsImg,
    badge: 'Authentic finds',
    description: 'Markets, artisan crafts, souks & boutiques' 
  },
];

export default function FinderPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { city } = useParameterStore();
  const { setActiveCategory, setView } = useExploreStore();

  const query = new URLSearchParams(location.search);
  const ref = query.get('ref');

  const backLabel = ref === 'planner' ? 'Return to Planner' 
    : ref === 'safety' ? 'Return to Safety'
    : ref === 'explore' ? 'Return to Explore'
    : 'Back';

  const [choiceCategory, setChoiceCategory] = useState<typeof CATEGORIES[0] | null>(null);

  const handleLaunchFreeScroll = (categoryId: string) => {
    const citySlug = city?.toLowerCase() || 'marrakech';
    setActiveCategory(categoryId as any);
    setView('free-scroll');
    navigate(`/finder/${citySlug}/${categoryId}?mode=free-scroll`);
  };

  const handleStartQuiz = (categoryId: string) => {
    const category = CATEGORIES.find(c => c.id === categoryId);
    setActiveCategory(categoryId as any);
    const citySlug = city?.toLowerCase() || 'morocco';
    const searchStr = location.search ? `${location.search}` : '';

    if (category?.hasSubCategories) {
      setView('subcategory');
      navigate(`/finder/${citySlug}/${categoryId}${searchStr}`);
    } else {
      setView('quiz');
      const startParam = location.search ? `${location.search}&start=quiz` : '?start=quiz';
      navigate(`/finder/${citySlug}/${categoryId}${startParam}`);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    if (!city) {
      const picker = document.querySelector('[data-location-picker]');
      if (picker) {
        picker.scrollIntoView({ behavior: 'smooth', block: 'center' });
        picker.classList.add('ring-4', 'ring-[#C9A84C]/20', 'shadow-2xl', 'rounded-[28px]');
        setTimeout(() => {
          picker.classList.remove('ring-4', 'ring-[#C9A84C]/20', 'shadow-2xl', 'rounded-[28px]');
        }, 2000);
      }
      return;
    }
    
    if (categoryId === 'things-to-do') {
      const cat = CATEGORIES.find(c => c.id === categoryId);
      if (cat) {
        setChoiceCategory(cat);
      }
    } else {
      handleStartQuiz(categoryId);
    }
  };

  const handleClose = () => {
    if (ref) {
      navigate(`/${ref}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] font-sans relative flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-5 md:py-8 max-w-[1600px] mx-auto">
      <SEO 
        title={city ? `Find Places in ${city}` : "Finder: Find Places in Morocco"} 
        description="Search for the best places to eat, stay, and explore in any Moroccan city."
      />

      <div className="w-full flex flex-col flex-1">
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-white text-sm font-medium shadow-md">
            <Search className="w-4 h-4 text-[#C9A84C]" />
            <span className="font-bold tracking-wide uppercase text-xs">FINDER HUB</span>
          </div>
          
          {ref && (
            <button 
              onClick={handleClose}
              className="px-4 py-2 bg-stone-200/80 hover:bg-stone-300 rounded-full text-stone-800 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
            >
              ← {backLabel}
            </button>
          )}
        </div>

        {/* Top Bar: Location Picker Strip & City Notice */}
        <div className="mb-4 md:mb-6 max-w-5xl mx-auto w-full">
          <div className="bg-white rounded-[24px] shadow-lg border border-stone-200/90 p-2.5 flex flex-col md:flex-row items-center gap-2" data-location-picker>
            <div className="flex-1 w-full">
              <LocationPicker />
            </div>
          </div>
        </div>

        {/* Primary Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-2 max-w-7xl mx-auto w-full">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#C9A84C]" />
              Explore by Category
            </h1>
            <p className="text-stone-500 text-sm mt-0.5">
              Select what you're looking for in {city || 'Morocco'} to discover handpicked local recommendations.
            </p>
          </div>

          {city && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E5D3B3] text-[#A34E36] text-xs font-bold self-start sm:self-auto">
              <span>Browsing {city}</span>
            </div>
          )}
        </div>

        {/* 4 Primary Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-7xl mx-auto w-full pb-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              onClick={() => handleCategoryClick(cat.id)}
              className="group relative bg-white rounded-[28px] overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Category Image Header */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img 
                  src={cat.image} 
                  alt={cat.label} 
                  onError={(e) => {
                    if (cat.fallback) {
                      (e.target as HTMLImageElement).src = cat.fallback;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Category Icon & Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-2xl bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-sm">
                    {cat.icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md px-2.5 py-1 rounded-full">
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 md:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#C9A84C] transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-stone-500 text-xs mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Card Action Strip */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!city) {
                        handleCategoryClick(cat.id);
                        return;
                      }
                      handleLaunchFreeScroll(cat.id);
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-bold tracking-wide transition-all flex items-center justify-center gap-1 cursor-pointer"
                    title="Browse all places directly"
                  >
                    <Eye className="w-3.5 h-3.5 text-stone-500" />
                    <span>Browse</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!city) {
                        handleCategoryClick(cat.id);
                        return;
                      }
                      handleStartQuiz(cat.id);
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-[#F5EDE4] hover:bg-[#EBDDCF] text-[#4A2411] text-[11px] font-bold tracking-wide transition-all flex items-center justify-center gap-1 cursor-pointer border border-[#D5C2B1]"
                    title="Take 2-min curated quiz"
                  >
                    <span>Take Quiz</span>
                    <ArrowRight className="w-3 h-3 text-[#C2613C]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DISCOVERY MODE SELECTION MODAL (Free Scroll vs Quiz) */}
      <AnimatePresence>
        {choiceCategory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setChoiceCategory(null)}
              className="absolute inset-0 bg-stone-950/70 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl border border-stone-200/90 overflow-hidden z-10 p-6 md:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setChoiceCategory(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3.5 mb-6 pr-10">
                <div className="w-12 h-12 rounded-2xl bg-stone-900 text-white flex items-center justify-center text-2xl shadow-sm">
                  <span>{choiceCategory.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#C9A84C]">
                      {city ? city.toUpperCase() : 'MOROCCO'}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="text-[11px] font-bold text-stone-500">{choiceCategory.badge}</span>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-stone-900">
                    Explore {choiceCategory.label}
                  </h2>
                </div>
              </div>

              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                Choose how you'd like to discover curated {choiceCategory.label.toLowerCase()} in {city || 'Morocco'}:
              </p>

              {/* 2 Choice Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* OPTION 1: FREE SCROLL (3D Cover Flow Reel) */}
                <button
                  onClick={() => {
                    const catId = choiceCategory.id;
                    setChoiceCategory(null);
                    handleLaunchFreeScroll(catId);
                  }}
                  className="group relative flex flex-col justify-between p-5 rounded-2xl border-2 border-stone-900 bg-stone-950 text-white text-left transition-all duration-300 hover:scale-[1.02] shadow-lg cursor-pointer"
                >
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#C9A84C] text-stone-950 text-[10px] font-black tracking-wider uppercase">
                    3D Visual Flow
                  </div>

                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C9A84C] mb-3">
                      <SlidersHorizontal className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-1.5">
                      Free Scroll
                    </h3>
                    <p className="text-stone-400 text-xs leading-relaxed mb-4">
                      Browse all curated spots instantly in a smooth horizontal card carousel with filter pills and detail popups.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C9A84C] group-hover:translate-x-1 transition-transform">
                    <span>Launch Free Scroll</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                {/* OPTION 2: PERSONALIZED QUIZ */}
                <button
                  onClick={() => {
                    const catId = choiceCategory.id;
                    setChoiceCategory(null);
                    handleStartQuiz(catId);
                  }}
                  className="group relative flex flex-col justify-between p-5 rounded-2xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-900 text-left transition-all duration-300 hover:scale-[1.02] hover:border-[#C9A84C]/60 shadow-xs cursor-pointer"
                >
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#E5D3B3]/40 text-stone-800 text-[10px] font-bold tracking-wider uppercase border border-[#C9A84C]/20">
                    2-Min Match
                  </div>

                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] mb-3">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      Take the Quiz
                    </h3>
                    <p className="text-stone-600 text-xs leading-relaxed mb-4">
                      Answer 3-4 quick questions about your budget, style, and vibes for laser-targeted recommendations.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs font-bold text-stone-900 group-hover:translate-x-1 transition-transform">
                    <span>Start Quiz</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
