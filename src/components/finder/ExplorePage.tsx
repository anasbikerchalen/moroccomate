import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Sparkles } from 'lucide-react';
import { useExploreStore } from '../../state/exploreStore';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import CategoryListing from './CategoryListing';
import ResultPage from './ResultPage';
import { SEO } from '../ui/SEO';
import { cityMap } from '../../data/cities';
import { useParameterStore } from '../../state/parameterStore';
import { useProfileStore } from '../../state/profileStore';
import { getTravelModeConfig } from '../../types/modes';
import { getSubCategoryQuestions, CATEGORY_QUESTIONS } from '../../data/explore/questions';
import { ExploreCategory, ThingsToDoSubCategory } from '../../types';
import { getListings } from '../../listings';
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
  
  const { param1, param2 } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const hasRef = useMemo(() => new URLSearchParams(location.search).get('ref'), [location.search]);
  const cityId = useParameterStore((state) => state.city);
  const travelMode = useProfileStore((state) => state.travelMode);

  // Phase 2-B: Automatically apply relevant filter chips on Finder open based on active mode
  useEffect(() => {
    if (travelMode) {
      const modeConfig = getTravelModeConfig(travelMode);
      if (modeConfig && modeConfig.autoFilterTags?.length > 0) {
        const currentVibes = useExploreStore.getState().filters.vibes || [];
        const missingTags = modeConfig.autoFilterTags.filter(tag => !currentVibes.includes(tag));
        if (missingTags.length > 0) {
          useExploreStore.getState().setFilter('vibes', [...currentVibes, ...missingTags]);
        }
        if (travelMode === 'family') {
          useExploreStore.getState().setFilter('isKidFriendly', true);
          useExploreStore.getState().setFilter('isWheelchairAccessible', true);
        } else if (travelMode === 'foodie') {
          useExploreStore.getState().setFilter('isHalal', true);
        }
      }
    }
  }, [travelMode]);

  // Sync URL params with store
  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(location.search);
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
    } else {
      const activeItemId = useExploreStore.getState().activeItemId;
      if (activeItemId) {
        let cat = 'things-to-do';
        if (activeItemId.startsWith('sh-')) cat = 'shopping';
        else if (activeItemId.startsWith('e-')) cat = 'food';
        else if (activeItemId.startsWith('s-')) cat = 'sleep';
        navigate(`/finder/${cityId || 'marrakech'}/${cat}`);
      } else {
        navigate('/finder');
      }
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

  const displayCategory = (param1 || activeCategory || '').toString();

  if (view === 'free-scroll') {
    return (
      <FreeScrollView
        initialCategory={activeCategory || 'stay'}
        initialCity={cityId || 'marrakech'}
        onSelectListing={(item) => {
          setActiveItem(item.id);
          setView('detail');
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
        title={displayCategory ? `${displayCategory.charAt(0).toUpperCase() + displayCategory.slice(1).replace('-', ' ')} | Finder` : "Finder | MoroccoFriend"} 
        description={displayCategory ? `Find the best ${displayCategory.replace('-', ' ')} in Morocco with our personalized finder.` : "The definitive guide to discovering Morocco - personalized for your rhythm."}
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
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 rounded-xl transition-all flex items-center justify-center cursor-pointer"
            title="Close Finder"
            aria-label="Close Finder"
          >
            <X className="w-5 h-5" />
          </button>
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
                      setView('sport-path');
                    } else {
                      // Pre-fill interests question with selection if standard things quiz uses it
                      setQuizAnswer('interests', sub === 'culture' ? 'culture' : sub === 'wellness' ? 'slow' : sub === 'desert-nature' ? 'adventure' : sub === 'photography' ? 'photography-interest' : sub === 'social' ? 'social' : 'adventure');
                      setView('quiz');
                    }
                  }}
                  onBrowseAll={() => {
                    setActiveSubCategory(null);
                    setView('quiz');
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
                    setView('quiz');
                  }}
                  onFindNearby={() => {
                    setSportIntent('practical');
                    setView('quiz');
                  }}
                  onBookExperience={() => {
                    setSportIntent('experience');
                    setView('quiz');
                  }}
                  onBack={() => {
                    setView('subcategory');
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
                        // Skip clicked: clear all quiz answers
                        useExploreStore.setState({ quizAnswers: {} });
                      } else {
                        // Complete clicked: set the actual answers
                        Object.entries(answers).forEach(([id, val]) => setQuizAnswer(id, val));
                      }
                      setView('results');
                    }}
                  />
                </div>
              )}

              {view === 'results' && <ResultPage />}
              
              {view === 'listing' && <CategoryListing />}

              {view === 'detail' && <DetailView item={activeItem} onBack={handleBack} />}

              {view === 'gallery' && <div>Gallery view coming soon</div>}

              {view === 'decision' ? <ResultPage /> : null}

              {view === 'hub' ? <ResultPage /> : null}
            </>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
