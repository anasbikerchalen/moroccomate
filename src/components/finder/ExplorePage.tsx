import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Sparkles } from 'lucide-react';
import { useExploreStore } from '../../state/exploreStore';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';
import CategoryListing from './CategoryListing';
import ResultPage from './ResultPage';
import { SEO } from '../ui/SEO';
import { cityMap } from '../../data/cities';
import { useParameterStore } from '../../state/parameterStore';
import { getSubCategoryQuestions, CATEGORY_QUESTIONS } from '../../data/explore/questions';
import { ExploreCategory, ThingsToDoSubCategory } from '../../types';
import { getListings } from '../../listings';
import { getListingUrl, getPlaceUrlById, normalizePlaceCategory } from '../../listings/placeRoutes';
import { getActivityById } from '../../things-to-do';
import CategoryQuiz from './CategoryQuiz';
import DetailView from './DetailView';
import { listingsRegistry } from '../../listings';
import SubCategorySplash from './SubCategorySplash';
import SportDualPath from './SportDualPath';
import EatCuratedView from './EatCuratedView';
import SleepCuratedView from './SleepCuratedView';
import ThingsCuratedView from './ThingsCuratedView';
import ShoppingCategoryPage from './ShoppingCategoryPage';
import FreeScrollView from './FreeScrollView';
import type { ExploreView } from '../../state/exploreStore';

// Screens that can appear in the URL as ?view=... (shareable, refresh-safe, Back-friendly)
const VIEW_PARAM_VALUES: string[] = [
  'quiz', 'results', 'subcategory', 'sport-path', 'listing', 'detail',
  'free-scroll', 'curated-eat', 'curated-sleep', 'curated-things', 'shopping-categories', 'hub'
];

interface ExplorePageProps {
  onClose: () => void;
}

/**
 * HUB: Finder (Results)
 * Job: Browse listings for Eat, Sleep, and Things-to-do.
 * Warning: Consumes parameters from useParameterStore. Do not merge with Matchmaker logic.
 */
export default function ExplorePage({ onClose }: ExplorePageProps) {
  const { 
    view, 
    setView, 
    pushView, 
    popView, 
    history, 
    setActiveCategory, 
    setActiveSubCategory,
    setSportIntent,
    setSportFacilityType,
    setSportExperienceType,
    setActiveItem, 
    setQuizAnswer, 
    activeCategory, 
    quizAnswers,
    activeSubCategory,
    sportIntent
  } = useExploreStore();
  
  const modalOpen = useExploreStore((state) => state.modalOpen);
  const { param1, param2 } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Keep the URL in sync with the current screen (quiz, results, ...) so
  // refreshing or sharing restores the same screen and browser Back works
  const pendingUrlSync = useRef<ExploreView | null>(null);
  const changeView = (next: ExploreView, pushHistory = false) => {
    pendingUrlSync.current = next;
    if (pushHistory) pushView(next);
    else setView(next);
  };

  useEffect(() => {
    if (!pendingUrlSync.current || pendingUrlSync.current !== view) return;
    const params = new URLSearchParams(location.search);
    params.set('view', view);
    params.delete('start');
    navigate(`${location.pathname}?${params.toString()}`, { replace: false });
    pendingUrlSync.current = null;
  }, [view, location.pathname, location.search, navigate]);

  const hasRef = useMemo(() => new URLSearchParams(location.search).get('ref'), [location.search]);
  const cityId = useParameterStore((state) => state.city);
  // Sync URL params with store
  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(location.search);

    // A ?view= marker in the URL is authoritative (refresh / share / browser Back):
    // restore that exact screen instead of re-deriving it
    const viewParam = params.get('view');
    if (viewParam && VIEW_PARAM_VALUES.includes(viewParam)) {
      // Sync the category from the URL without wiping saved quiz answers
      const urlCategory = (param2 || param1 || '').toLowerCase();
      const mapped: any =
        urlCategory === 'food' || urlCategory === 'eat' ? 'food' :
        urlCategory === 'sleep' || urlCategory === 'stay' ? 'sleep' :
        urlCategory === 'shopping' || urlCategory === 'shop' ? 'shopping' :
        urlCategory === 'things' || urlCategory === 'things-to-do' ? 'things-to-do' :
        null;
      if (mapped && useExploreStore.getState().activeCategory !== mapped) {
        useExploreStore.setState({ activeCategory: mapped });
      }
      if (useExploreStore.getState().view !== viewParam) {
        setView(viewParam as any);
      }
      return;
    }

    const mode = params.get('mode');

    const ensureQuizView = () => { 
      if (view !== 'quiz' && view !== 'results') setView('quiz'); 
    };

    if (mode === 'matchmaker') {
      setActiveCategory('cities');
      ensureQuizView();
      return;
    }

    if (mode === 'free-scroll') {
      let targetCategory: any = 'things-to-do';
      if (param2) {
        const lower = param2.toLowerCase();
        if (lower === 'food' || lower === 'eat') targetCategory = 'food';
        else if (lower === 'sleep' || lower === 'stay') targetCategory = 'sleep';
        else if (lower === 'shopping' || lower === 'shop') targetCategory = 'shopping';
        else targetCategory = 'things-to-do';
      }
      setActiveCategory(targetCategory);

      // Free scroll is exclusive to Things to Do
      if (targetCategory === 'things-to-do') {
        setView('free-scroll');
      } else {
        // Eats, Stays, and Shops use the curated Quiz flow
        setView('quiz');
      }
      return;
    }

    if (param1) {
      if (param1.toLowerCase() === 'gems') {
        navigate(`/finder/${cityId || 'marrakech'}/things-to-do`, { replace: true });
        return;
      }
      
      const isCityId = !!cityMap[param1.toLowerCase()];
      
      if (isCityId) {
        useParameterStore.getState().setCity(param1);
        
        if (param2) {
          const isListingId = !['food', 'eat', 'sleep', 'things-to-do', 'things', 'experiences', 'cities', 'shopping', 'shop', 'photos'].includes(param2.toLowerCase());
          
          if (isListingId) {
            let categoryId: any = 'things-to-do';
            const lowerId = param2.toLowerCase();
            if (lowerId.startsWith('sh-') || lowerId.includes('shop')) {
              categoryId = 'shopping';
            } else if (lowerId.startsWith('e-') || lowerId.includes('eat') || lowerId.includes('food')) {
              categoryId = 'food';
            } else if (lowerId.startsWith('s-') || lowerId.includes('sleep')) {
              categoryId = 'sleep';
            }
            
            setActiveCategory(categoryId);
            // Named place/things URLs are canonical — redirect old id-based
            // links to the new pages so each place has exactly one URL
            if (categoryId === 'things-to-do') {
              const activitySlug = getActivityById(param2)?.slug || param2;
              navigate(`/things/${param1.toLowerCase()}/${activitySlug}`, { replace: true });
              return;
            }
            const placeCategory = normalizePlaceCategory(categoryId);
            const placeUrl = placeCategory ? getPlaceUrlById(placeCategory, param2) : null;
            if (placeUrl) {
              navigate(placeUrl, { replace: true });
              return;
            }
            setActiveItem(param2);
            setView('detail');
          } else {
            const categoryId = param2.toLowerCase();
            if (categoryId === 'gems') {
              navigate(`/finder/${param1.toLowerCase()}/things-to-do`, { replace: true });
              return;
            }
            
            // Map category names to store categoryIds
            let targetCategory: any = categoryId;
            if (categoryId === 'food' || categoryId === 'eat') {
              targetCategory = 'food';
            } else if (categoryId === 'shopping' || categoryId === 'shop') {
              targetCategory = 'shopping';
            } else if (categoryId === 'things' || categoryId === 'things-to-do') {
              targetCategory = 'things-to-do';
            }
            setActiveCategory(targetCategory);
            
            const selectedDish = params.get('dish');
            const selectedSouvenir = params.get('souvenir');
            const selectedAttraction = params.get('attraction');
            const isStartQuiz = params.get('start') === 'quiz';

            if (categoryId === 'food' || categoryId === 'eat') {
              if (selectedDish) {
                setQuizAnswer('dish-filter', selectedDish);
                setView('results');
              } else {
                setView('quiz');
              }
            } else if (categoryId === 'sleep') {
              setView('quiz');
            } else if (categoryId === 'things-to-do' || categoryId === 'things') {
              if (selectedAttraction) {
                setActiveItem(selectedAttraction);
                setView('detail');
              } else {
                const subParam = params.get('sub') as ThingsToDoSubCategory | null;
                const intentParam = params.get('intent') as any;
                const typeParam = params.get('type') as any;
                
                if (subParam) {
                  setActiveSubCategory(subParam);
                  if (subParam === 'sport') {
                    if (intentParam) {
                      setSportIntent(intentParam);
                      if (typeParam) {
                        setSportFacilityType(typeParam);
                      }
                      setView('quiz');
                    } else {
                      setView('sport-path');
                    }
                  } else {
                    setView('quiz');
                  }
                } else {
                  setView('quiz');
                }
              }
            } else if (categoryId === 'shopping' || categoryId === 'shop') {
              if (selectedSouvenir) {
                setQuizAnswer('shopping-category', 'gifts-local');
                setView('results');
              } else {
                setView('quiz');
              }
            } else {
              if (isStartQuiz) {
                setView('quiz');
              } else {
                setView('results');
              }
            }
          }
        } else {
          setView('results'); // City view
        }
      } else {
        // Handle /finder/:category
        const categoryId = param1.toLowerCase();
        setActiveCategory(categoryId as any);
        
        if (categoryId === 'things-to-do') {
          const subParam = params.get('sub') as ThingsToDoSubCategory | null;
          if (subParam) {
            setActiveSubCategory(subParam);
            if (subParam === 'sport') {
              setView('sport-path');
            } else {
              setView('quiz');
            }
          } else {
            setView('subcategory');
          }
        } else {
          if (view === 'hub') {
            ensureQuizView();
          } else if (param2) {
            setActiveItem(param2);
            setView('detail');
          } else {
            setView('listing');
          }
        }
      }
    } else if (!mode && location.pathname.startsWith('/explore')) {
       const newPath = location.pathname.replace('/explore', '/finder');
       navigate(newPath + location.search, { replace: true });
    }
  }, [param1, param2, setActiveCategory, setActiveSubCategory, setSportIntent, setSportFacilityType, setSportExperienceType, setView, setQuizAnswer, setActiveItem, location.pathname, location.search, navigate, cityId]);

  const handleBack = () => {
    if (history.length > 0) {
      popView();
      // Align the URL with the restored screen (in-app back)
      const restored = useExploreStore.getState().view;
      const backParams = new URLSearchParams(location.search);
      if (VIEW_PARAM_VALUES.includes(restored) && backParams.get('view') !== restored) {
        backParams.set('view', restored);
        navigate(`${location.pathname}?${backParams.toString()}`, { replace: true });
      }
    } else {
      // No in-app history: this standalone flow always starts at the homepage,
      // so never fall back to the old finder hub
      navigate('/');
    }
  };

  const activeQuestions = useMemo(() => {
    if (activeCategory === 'things-to-do') {
      return getSubCategoryQuestions(activeSubCategory, sportIntent);
    }
    return activeCategory ? CATEGORY_QUESTIONS[activeCategory as Exclude<ExploreCategory, 'photos'>] || [] : [];
  }, [activeCategory, activeSubCategory, sportIntent]);

  const focusMap: Record<string, string> = {
    'food': 'eat', 'things-to-do': 'things', 'experiences': 'things', 'sleep': 'sleep', 'cities': 'things', 'shopping': 'shopping'
  };
  const focusKey = focusMap[activeCategory || 'cities'] || 'things';
  const realListings = useMemo(() => getListings(cityId || 'marrakech', focusKey), [cityId, focusKey]);

  // Look up the active item across all listings for the detail view
  const { activeItemId } = useExploreStore();
  const activeItem = useMemo(() => {
    if (!activeItemId) return null;
    // Search across all listings
    for (const listings of Object.values(listingsRegistry)) {
      const found = listings.find((l: any) => l.id === activeItemId);
      if (found) return found;
    }
    return null;
  }, [activeItemId]);

  // Things To Do uses the dedicated listing page (/things/:city/:slug).
  // Any flow that requests a things detail view is redirected there,
  // so every entry point (quiz results, shared URLs, ?attraction=...) lands on the new page.
  useEffect(() => {
    if (view === 'detail' && activeCategory === 'things-to-do' && activeItemId) {
      const activitySlug = getActivityById(activeItemId)?.slug || activeItemId;
      navigate(`/things/${cityId || 'marrakech'}/${activitySlug}`, { replace: true });
    }
  }, [view, activeCategory, activeItemId, cityId, navigate]);

  const displayCategory = (param1 || activeCategory || '').toString();
  // Include the city name in the page title so search results read
  // "Food in Marrakech" instead of a generic "Food"
  const cityLabel = cityId ? (cityMap[cityId]?.name || cityId) : '';

  if (view === 'free-scroll') {
    return (
      <FreeScrollView
        initialCategory={activeCategory || 'stay'}
        initialCity={cityId || 'marrakech'}
        onSelectListing={(item) => {
          // Every listing opens on its own name-based page
          // (/place/:city/:category/:name or /things/:city/:name)
          navigate(getListingUrl(item) || `/things/${item.city || cityId || 'marrakech'}/${item.id}`);
        }}
        onSwitchToQuiz={(cat) => {
          setActiveCategory(cat as any);
          setView('quiz');
          navigate(`/finder/${cityId || 'marrakech'}/${cat}?start=quiz`);
        }}
        onClose={() => {
          navigate(`/finder?city=${cityId || 'marrakech'}`);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans relative">
      <SEO 
        title={
          displayCategory
            ? `${displayCategory.charAt(0).toUpperCase() + displayCategory.slice(1).replace('-', ' ')}${cityLabel ? ` in ${cityLabel}` : ' in Morocco'}`
            : "Finder"
        } 
        description={
          displayCategory
            ? `Find the best ${displayCategory.replace('-', ' ')} in ${cityLabel || 'Morocco'} with our personalized finder.`
            : "Pick your city, answer a short quiz, and get personalized local recommendations for food, stays, things to do, and shopping in Morocco."
        }
      />
      
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/paper-grain.svg')] bg-repeat" />

      {/* Header */}
      <header className="px-6 md:px-12 py-4 bg-white/40 backdrop-blur-md flex items-center justify-between relative z-[80] border-b border-stone-100">
        <div className="flex items-center gap-3">
          <button 
            onClick={handleBack}
            className="w-10 h-10 rounded-xl bg-stone-50 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-all cursor-pointer font-bold"
            title="Go Back"
            aria-label="Go Back"
          >
            ←
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-stone-900 rounded-xl flex items-center justify-center text-white text-lg shadow-sm">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-lg text-stone-900 tracking-tight">Finder</h2>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C9A84C]">
                {displayCategory ? `${displayCategory.replace('-', ' ')} Matchmaker` : 'Personalized Selection'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Hidden while any popup is open — only ONE close icon visible at a time */}
          {!modalOpen && (
            <button 
              onClick={onClose}
              className="w-10 h-10 bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 rounded-xl transition-all flex items-center justify-center cursor-pointer"
              title="Close Finder"
              aria-label="Close Finder"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto p-4 md:p-10 pt-16 relative z-[70]">
        <AnimatePresence mode="wait">
          <motion.div
            key={view + (displayCategory || '')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <>
              {view === 'subcategory' && (
                <SubCategorySplash
                  city={cityId || 'marrakech'}
                  onSelect={(sub) => {
                    setActiveSubCategory(sub);
                    if (sub === 'sport') {
                      changeView('sport-path');
                    } else {
                      // Pre-fill interests question with selection if standard things quiz uses it
                      setQuizAnswer('interests', sub === 'culture' ? 'culture' : sub === 'wellness' ? 'slow' : sub === 'desert-nature' ? 'adventure' : sub === 'photography' ? 'photography-interest' : sub === 'social' ? 'social' : 'adventure');
                      changeView('quiz');
                    }
                  }}
                  onBrowseAll={() => {
                    setActiveSubCategory(null);
                    changeView('quiz');
                  }}
                  onBack={handleBack}
                />
              )}

              {view === 'sport-path' && (
                <SportDualPath
                  city={cityId || 'marrakech'}
                  onQuickFilter={(type) => {
                    setSportIntent('practical');
                    setSportFacilityType(type);
                    setQuizAnswer('sport-facility-needs', [type]);
                    changeView('quiz');
                  }}
                  onFindNearby={() => {
                    setSportIntent('practical');
                    changeView('quiz');
                  }}
                  onBookExperience={() => {
                    setSportIntent('experience');
                    changeView('quiz');
                  }}
                  onBack={() => {
                    changeView('subcategory');
                  }}
                />
              )}

              {['quiz', 'curated-eat', 'curated-sleep', 'curated-things', 'shopping-categories'].includes(view) && activeCategory && (
                <div className="bg-white/60 backdrop-blur-md border border-stone-200/60 rounded-[32px] p-6 md:p-12 shadow-sm relative overflow-hidden">
                  {/* Subtle design element: elegant pattern or glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full blur-3xl -z-10 opacity-30" />
                  
                  <CategoryQuiz 
                    questions={activeQuestions}
                    listings={realListings}
                    categoryId={activeCategory}
                    onBack={handleBack}
                    onComplete={(answers) => {
                      if (Object.keys(answers).length === 0) {
                        // Skip clicked: clear all quiz answers and filters
                        useExploreStore.setState({ quizAnswers: {} });
                        useExploreStore.getState().resetFilters();
                      } else {
                        // Complete clicked: set the actual answers
                        Object.entries(answers).forEach(([id, val]) => setQuizAnswer(id, val));
                      }
                      // Go to results with a real URL + history entry (refresh-safe, Back-friendly)
                      changeView('results', true);
                    }}
                  />
                </div>
              )}

              {view === 'results' && <ResultPage />}
              
              {view === 'listing' && <CategoryListing />}

              {view === 'detail' && <DetailView item={activeItem} onBack={handleBack} />}
            </>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
