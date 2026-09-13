import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Compass, Clock, User, Star, ArrowRight, ChevronDown, ChevronUp, X, SlidersHorizontal, Eye, HelpCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useParameterStore } from '../../state/parameterStore';
import { useExploreStore } from '../../state/exploreStore';
import { cn } from '../../utils/cn';
import { SEO } from '../ui/SEO';
import LocationPicker from './LocationPicker';

import catFoodImg from '../../assets/images/finder/category_food_matte_1786297062095.jpg';
import catStaysImg from '../../assets/images/finder/category_stays_matte_1786297074546.jpg';
import catThingsImg from '../../assets/images/finder/category_things_vector.svg';
import catShoppingImg from '../../assets/images/finder/category_shop_vector.svg';
import quizHeroBg from '../../assets/images/quizzes/shared/quiz_hero_bg_1786203201810.jpg';

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

  // ─── FULLPAGE SNAP SCROLL STATE & LOGIC ───
  const [currentZone, setCurrentZone] = useState(0); 
  const isAnimatingRef = useRef(false);
  const currentZoneRef = useRef(0);
  const touchStartRef = useRef<number | null>(null);
  const zoneContainersRef = useRef<(HTMLElement | null)[]>([]);

  const zoneData = useMemo(() => [
    { id: 'categories', label: 'Categories & Search' },
    { id: 'quiz', label: 'Personalized Quiz' },
  ], []);

  const TOTAL_ZONES = zoneData.length;
  const DEBOUNCE_MS = 800;

  useEffect(() => {
    currentZoneRef.current = currentZone;
  }, [currentZone]);

  const navigateToZone = useCallback((zoneIndex: number) => {
    if (isAnimatingRef.current) return;
    if (zoneIndex < 0 || zoneIndex >= TOTAL_ZONES) return;
    if (zoneIndex === currentZoneRef.current) return;

    isAnimatingRef.current = true;
    currentZoneRef.current = zoneIndex;
    setCurrentZone(zoneIndex);
    setTimeout(() => { isAnimatingRef.current = false; }, DEBOUNCE_MS);
  }, [TOTAL_ZONES]);

  useEffect(() => {
    let wheelPending = false;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (Math.abs(e.deltaY) < 10) return;
      if (isAnimatingRef.current) return;

      const currentEl = zoneContainersRef.current[currentZoneRef.current];
      if (currentEl) {
        const isScrollable = currentEl.scrollHeight > currentEl.clientHeight + 10;
        if (isScrollable) {
          const isAtTop = currentEl.scrollTop <= 5;
          const isAtBottom = currentEl.scrollTop + currentEl.clientHeight >= currentEl.scrollHeight - 5;

          if (e.deltaY > 0 && !isAtBottom) {
            return; // allow internal scrolling
          }
          if (e.deltaY < 0 && !isAtTop) {
            return; // allow internal scrolling
          }
        }
      }

      e.preventDefault();

      if (wheelPending) return;
      wheelPending = true;
      setTimeout(() => { wheelPending = false; }, DEBOUNCE_MS);

      const zone = currentZoneRef.current;
      if (e.deltaY > 0) navigateToZone(zone + 1);
      else navigateToZone(zone - 1);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimatingRef.current) return;

      const zone = currentZoneRef.current;
      let newIndex = zone;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        newIndex = Math.min(zone + 1, TOTAL_ZONES - 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        newIndex = Math.max(zone - 1, 0);
      } else if (e.key === 'Home') {
        e.preventDefault();
        newIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        newIndex = TOTAL_ZONES - 1;
      }

      if (newIndex !== zone) {
        navigateToZone(newIndex);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = e.touches[0]?.clientY ?? null;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartRef.current === null || isAnimatingRef.current) {
        touchStartRef.current = null;
        return;
      }
      const touchEnd = e.changedTouches[0]?.clientY ?? 0;
      const deltaY = touchStartRef.current - touchEnd;
      touchStartRef.current = null;

      if (Math.abs(deltaY) < 50) return;

      const zone = currentZoneRef.current;
      if (deltaY > 0) navigateToZone(zone + 1);
      else navigateToZone(zone - 1);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigateToZone, TOTAL_ZONES]);

  const backLabel = ref === 'planner' ? 'Return to Planner' 
    : ref === 'matchmaker' ? 'Return to Matchmaker'
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
    <div className="h-screen w-full overflow-hidden bg-[#FAFAFA] font-sans relative">
      <SEO 
        title={city ? `Find Places in ${city}` : "Finder: Find Places in Morocco"} 
        description="Search for the best places to eat, stay, and explore in any Moroccan city."
      />

      {/* Full-Page Zone Slider */}
      <div 
        className="h-full w-full transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateY(-${currentZone * 100}vh)` }}
      >
        {/* ZONE 1: CATEGORIES FIRST & LOCATION PICKER */}
        <section 
          ref={(el) => { zoneContainersRef.current[0] = el; }}
          className="h-screen w-full flex flex-col justify-between overflow-y-auto px-4 sm:px-6 lg:px-8 py-5 md:py-8 max-w-[1600px] mx-auto relative z-10"
        >
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
              {!city && (
                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1 mt-1.5 inline-block font-medium">
                  💡 Select a Base City above to enable direct category browsing
                </p>
              )}
            </div>
            <p className="text-xs text-stone-500 font-medium italic hidden sm:block">
              {city ? `Showing curated spots for ${city.charAt(0).toUpperCase() + city.slice(1)}` : 'Select a city to discover handpicked listings'}
            </p>
          </div>

          {/* 4 Primary Categories Grid (First visual element) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto w-full my-auto">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={cn(
                  "group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-200/90 text-left h-full hover:-translate-y-1 relative",
                  !city && "opacity-90"
                )}
              >
                {!city && (
                  <div 
                    onClick={() => handleCategoryClick(cat.id)}
                    className="absolute inset-0 bg-stone-900/20 backdrop-blur-[1px] z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 text-center cursor-pointer"
                  >
                    <div className="px-4 py-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                      Select a City First
                    </div>
                  </div>
                )}
                
                <div 
                  onClick={() => handleCategoryClick(cat.id)}
                  className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden bg-stone-100 cursor-pointer"
                >
                  <img 
                    src={cat.image} 
                    alt={cat.label}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = cat.fallback;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute -bottom-4 left-5 w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-md border border-stone-100 group-hover:border-[#C9A84C]/50 transition-colors z-10">
                    <span className="text-xl">{cat.icon}</span>
                  </div>
                </div>
                
                <div className="pt-6 pb-4 px-5 flex-1 flex flex-col">
                  <div onClick={() => handleCategoryClick(cat.id)} className="cursor-pointer">
                    <h3 className="text-lg md:text-xl font-display font-bold text-stone-900 mb-1">{cat.label}</h3>
                    <p className="text-stone-500 text-xs mb-3 flex-1 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  
                  {/* Quick Action Options */}
                  <div className="flex items-center gap-2 mt-auto pt-3 border-t border-stone-100">
                    {cat.id === 'things-to-do' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!city) {
                            handleCategoryClick(cat.id);
                            return;
                          }
                          handleLaunchFreeScroll(cat.id);
                        }}
                        className="flex-1 py-2 px-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-[11px] font-bold tracking-wide transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                        title="Explore all places in full-screen 3D carousel"
                      >
                        <span>Free Scroll</span>
                        <ArrowRight className="w-3 h-3 text-[#C9A84C]" />
                      </button>
                    )}

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
                      title="Take 2-min curated matchmaker quiz"
                    >
                      <span>Take Quiz</span>
                      <ArrowRight className="w-3 h-3 text-[#C2613C]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-3 md:mt-4 flex flex-col items-center justify-center text-stone-400 text-xs">
            <button 
              onClick={() => navigateToZone(1)}
              className="flex flex-col items-center gap-1 hover:text-stone-700 transition-colors cursor-pointer group"
            >
              <span className="font-semibold text-[11px] tracking-wider uppercase">Scroll to Quiz Hub</span>
              <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#C9A84C]" />
            </button>
          </div>
        </section>

        {/* ZONE 2: MATCHMAKER & PERSONALIZED QUIZ HUB */}
        <section 
          ref={(el) => { zoneContainersRef.current[1] = el; }}
          className="h-screen w-full flex flex-col justify-between overflow-y-auto px-4 sm:px-6 lg:px-8 py-8 max-w-[1600px] mx-auto relative z-10"
        >
          {/* Top Indicator to return to Zone 1 */}
          <div className="flex items-center justify-center pt-2">
            <button 
              onClick={() => navigateToZone(0)}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ChevronUp className="w-4 h-4" />
              Back to Categories
            </button>
          </div>

          {/* Quiz Hub Card with Background Hero Image */}
          <div className="bg-[#FAF7F2] rounded-[32px] p-8 lg:p-12 border border-[#E5D3B3]/60 flex flex-col items-center justify-center gap-8 text-center max-w-4xl mx-auto w-full my-auto shadow-xl relative overflow-hidden">
            <img 
              src={quizHeroBg} 
              alt="Matchmaker Quiz Background" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = catThingsImg;
              }}
              className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
            />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A84C]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E5D3B3]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
            
            <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center flex-shrink-0 border border-stone-200/60 relative z-10">
              <Compass className="w-10 h-10 text-[#C9A84C]" />
            </div>

            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5D3B3]/30 text-stone-800 text-xs font-bold uppercase tracking-wider mb-4 border border-[#C9A84C]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
                Personalized Matchmaker Quiz
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-3">
                Not sure where to go?
              </h2>
              <p className="text-stone-600 text-base md:text-lg leading-relaxed font-serif italic">
                Answer a few quick questions and we'll curate the perfect spots in Morocco customized to your exact style and energy.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-stone-600 relative z-10">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 border border-stone-200/80 shadow-xs">
                <Clock className="w-4 h-4 text-[#C9A84C]" />
                2 min quiz
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 border border-stone-200/80 shadow-xs">
                <User className="w-4 h-4 text-[#C9A84C]" />
                100% Personalized
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 border border-stone-200/80 shadow-xs">
                <Star className="w-4 h-4 text-[#C9A84C]" />
                Curated Recommendations
              </div>
            </div>

            <button 
              onClick={() => navigate('/matchmaker')}
              className="relative z-10 bg-[#b8973b] hover:bg-[#a68631] text-white px-8 py-4 rounded-[22px] font-bold text-base transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-[#b8973b]/25 hover:-translate-y-0.5 cursor-pointer"
            >
              Take the Quiz Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="pb-4" />
        </section>
      </div>

      {/* Floating Vertical Dot Navigation (ZoneNav) */}
      <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 bg-white/80 backdrop-blur-md px-2.5 py-3.5 rounded-full border border-stone-200/80 shadow-xl">
        {zoneData.map((zone, idx) => (
          <button
            key={zone.id}
            onClick={() => navigateToZone(idx)}
            className="group relative flex items-center justify-center p-1 cursor-pointer"
            aria-label={zone.label}
          >
            <div className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentZone === idx 
                ? "bg-[#C9A84C] scale-125 shadow-md shadow-[#C9A84C]/40 ring-2 ring-[#C9A84C]/30" 
                : "bg-stone-300 hover:bg-stone-500"
            )} />
            
            {/* Tooltip on Hover */}
            <span className="absolute right-8 px-3 py-1 rounded-lg bg-stone-900 text-white text-[11px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 shadow-md">
              {zone.label}
            </span>
          </button>
        ))}
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



