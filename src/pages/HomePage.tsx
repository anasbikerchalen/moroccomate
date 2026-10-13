import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ChevronDown, ChevronUp, ArrowRight, Heart, Check } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { useParameterStore } from '../state/parameterStore';
import { useExploreStore } from '../state/exploreStore';
import { useSavedStore } from '../state/savedStore';
import FavoritesDrawer from '../components/finder/FavoritesDrawer';
import { cities } from '../data/cities';
import { isCityTouristicOrMid, getCityProfile } from '../data/touristicHierarchy';
import { getListings } from '../listings';
import heroIllustration from '../assets/images/finder/finder_hero_matte_1786297047661.jpg';
import logoImg from '../assets/images/logo.png';
// 🖼️ Home page circular category images (Gemini-generated, circle-safe centered subjects)
// PROMPT (Food & Dining): "Moroccan food and dining: a steaming round tagine pot with fresh bread, olives and a glass of mint tea arranged in the exact center of the frame on a zellij tile table,[...]
import catFoodImg from '../assets/images/home/home_category_food_circle.jpg';
// PROMPT (Stays & Sleep): "Stays and sleep in Morocco: a beautiful traditional riad courtyard with a small mosaic fountain and hanging lanterns composed in the exact center of the frame, warm gol[...]
import catStaysImg from '../assets/images/home/home_category_sleep_circle.jpg';
// PROMPT (Things to Do): "Things to do in Morocco: a serene travel discovery scene with the Atlas mountains, a historic medina gateway and a small palm grove arranged in the exact center of the f[...]
import catThingsImg from '../assets/images/home/home_category_things_circle.jpg';
// PROMPT (Shopping): "Shopping in Morocco: a woven Berber basket with colorful ceramics, leather babouches and a folded rug arranged in the exact center of the frame on a warm market table, warm [...]
import catShoppingImg from '../assets/images/home/home_category_shopping_circle.jpg';

/**
 * ─────────────────────────────────────────────────────────────
 *  HOMEPAGE — Morocco Finder
 *  Premium local travel guide. Editorial / storybook-inspired.
 *  Cream canvas #FAF7F2 · saffron gold #C9A84C (CTA only) ·
 *  serif headlines · minimal header · illustrated hero ·
 *  city selector pill · one gold CTA · 4 category cards.
 * ─────────────────────────────────────────────────────────────
 */

const RECOMMENDED_CITY_NAMES = ['Marrakech', 'Fes', 'Chefchaouen', 'Essaouira', 'Agadir'];

const CATEGORIES = [
  {
    id: 'food',
    smallLabel: 'Food & Dining',
    title: 'Food & Dining',
    description: 'Taste the real Morocco, from street food to traditional meals.',
    image: catFoodImg,
  },
  {
    id: 'sleep',
    smallLabel: 'Stays & Sleep',
    title: 'Stays & Sleep',
    description: 'From riads to beachfront stays, find your perfect spot.',
    image: catStaysImg,
  },
  {
    id: 'things-to-do',
    smallLabel: 'Things to Do',
    title: 'Things to Do',
    description: 'Explore, discover, experience the best of Morocco.',
    image: catThingsImg,
  },
  {
    id: 'shopping',
    smallLabel: 'Shopping',
    title: 'Shopping',
    description: 'Unique finds, local crafts, beautiful souvenirs.',
    image: catShoppingImg,
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedCity, setLocalCity] = useState<string>('');
  const [selectedCategory, setLocalCategory] = useState<string | null>(null);
  const [showAllCities, setShowAllCities] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const bookmarks = useSavedStore((state) => state.bookmarks);

  const setCityInStore = useParameterStore((state) => state.setCity);
  const setActiveCategory = useExploreStore((state) => state.setActiveCategory);
  const setExploreView = useExploreStore((state) => state.setView);

  // Only Touristic and Mid-Touristic cities (Low-Touristic are excluded)
  const activeCities = cities.filter((c: any) => {
    if (!isCityTouristicOrMid(c.id)) return false;
    const count = getListings(c.id).length;
    return count > 0 || c.isPrimary;
  });

  const recommendedCities = activeCities.filter((c: any) => {
    const prof = getCityProfile(c.id);
    return prof?.tier === 'touristic' || RECOMMENDED_CITY_NAMES.includes(c.name);
  });

  const topSixCities = recommendedCities.slice(0, 6);
  const visibleCities = showAllCities ? activeCities : topSixCities;

  const isAwaitingCity = Boolean(selectedCategory && !selectedCity);

  // Go directly into the quiz for the chosen category (skips the categories screen)
  const goFinder = (cityId: string, categoryId: string) => {
    setCityInStore(cityId);
    setActiveCategory(categoryId as any);
    setExploreView('quiz');
    const citySlug = cityId.toLowerCase();
    navigate(`/finder/${citySlug}/${categoryId}?start=quiz`);
  };

  // Bidirectional selection:
  // - If user clicks city first, city is chosen; next click on category starts the quiz.
  // - If user clicks category first, category is affirmed; next click on city starts the quiz.
  const handleCitySelect = (cityId: string) => {
    setLocalCity(cityId);
    if (selectedCategory) {
      goFinder(cityId, selectedCategory);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    const isSame = selectedCategory === categoryId;
    const nextCategory = isSame ? null : categoryId;
    setLocalCategory(nextCategory);
    if (!isSame && selectedCity) {
      goFinder(selectedCity, categoryId);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#29231F]">
      <SEO
        title="Moroccan Mate | Eat, Sleep, Things & Shopping — Like a Local"
        description="Pick your city, answer a short quiz, and get personalized local recommendations for food, stays, things to do, and shopping in Morocco."
      />

      {/* ─── HEADER · minimal editorial brand bar ───────────── */}
      <header className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-10 pt-5 md:pt-6 flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* Real brand logo */}
          <img
            src={logoImg}
            alt="Moroccan Mate logo"
            className="w-9 h-9 shrink-0 object-contain"
          />
          <div>
            <p className="font-display text-lg md:text-xl font-semibold leading-none text-[#29231F]">Moroccan Mate</p>
            <p className="font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-[#71685F] mt-1.5">Real places. Local vibes.</p>
          </div>
        </div>
        {/* All Right: Favorite Heart Icon & Saved Places Button */}
        <div className="flex items-center gap-3 pt-1">
          <div className="hidden md:flex items-center gap-2 mr-1">
            <span className="font-sans text-xs text-[#71685F]">Your personal Moroccan guide</span>
          </div>

          <button
            type="button"
            onClick={() => setFavoritesOpen(true)}
            className="group relative flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#EADBCE] shadow-xs hover:shadow-md hover:border-[#E1CBA2] transition-all duration-200"
            aria-label="View saved places"
            title="View saved places"
          >
            <Heart
              className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                bookmarks.length > 0 ? 'text-[#C85A32] fill-[#C85A32]' : 'text-[#71685F] group-hover:text-[#C85A32]'
              }`}
            />
            <span className="font-sans text-xs font-semibold text-[#29231F] hidden sm:inline">Saved</span>
            {bookmarks.length > 0 && (
              <span className="bg-[#C9A84C] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center leading-none">
                {bookmarks.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* ─── HERO · illustrated Moroccan landscape ──────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img src={heroIllustration} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" {...({ fetchpriority: 'high' } as any)} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/75 via-[#FAF7F2]/35 to-[#FAF7F2]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-14 md:pt-16 pb-14 md:pb-20 min-h-[420px] md:min-h-[500px] flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="font-display font-medium text-[38px] leading-[1.05] md:text-[64px] md:leading-[1.0] tracking-tight max-w-[700px] text-[#29231F]"
          >
            What are you looking<br className="hidden sm:block" /> for in Morocco?
          </motion.h1>

          {/* City selector · soft floating pill */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="mt-8 md:mt-10 w-full max-w-[680px]"
          >
            <div className={`bg-[#FFFDF9]/95 backdrop-blur-sm border rounded-[32px] px-5 py-3 flex items-center justify-center gap-2 md:gap-2.5 flex-wrap transition-all duration-300 ${
              isAwaitingCity
                ? 'gold-breathe border-[#C9A84C] ring-2 ring-[#C9A84C]/35 shadow-[0_8px_32px_rgba(201,168,76,0.22)]'
                : 'border-[#E9D8C8] shadow-[0_8px_30px_rgba(80,55,35,0.06)]'
            }`}>
              <MapPin className={`w-4 h-4 shrink-0 transition-transform ${isAwaitingCity ? 'text-[#C9A84C] scale-110' : 'text-[#C9A84C]'}`} />

              {isAwaitingCity ? (
                <span className="inline-flex items-center gap-1.5 bg-[#C9A84C] text-white text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  Step 2: Pick your city
                </span>
              ) : (
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#71685F] mr-1">Choose a city</span>
              )}

              {visibleCities.map((c: any) => (
                <a
                  key={c.id}
                  href={`/finder/${c.id.toLowerCase()}/${selectedCategory || 'sleep'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCitySelect(c.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCity === c.id
                      ? 'bg-[#C9A84C] text-white shadow-sm'
                      : isAwaitingCity
                        ? 'bg-[#FAF3E0] text-[#29231F] border border-[#C9A84C]/50 hover:bg-[#C9A84C] hover:text-white transition-all shadow-xs'
                        : 'bg-transparent text-[#29231F] hover:bg-[#F5EBE1]'
                  }`}
                >
                  {c.name}
                </a>
              ))}
              <button
                onClick={() => setShowAllCities(!showAllCities)}
                aria-label={showAllCities ? 'Hide all cities' : 'Show all cities'}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#71685F] hover:bg-[#F5EBE1] hover:text-[#C9A84C] transition-all duration-200 cursor-pointer shrink-0"
              >
                {showAllCities ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {showAllCities && (
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {activeCities.map((c: any) => (
                  <a
                    key={c.id}
                    href={`/finder/${c.id.toLowerCase()}/${selectedCategory || 'sleep'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCitySelect(c.id);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-200 cursor-pointer ${
                      selectedCity === c.id
                        ? 'bg-[#C9A84C] text-white shadow-sm'
                        : isAwaitingCity
                          ? 'bg-[#FAF3E0] text-[#29231F] border border-[#C9A84C]/50 hover:bg-[#C9A84C] hover:text-white'
                          : 'bg-[#FFFDF9]/80 border border-[#E9D8C8] text-[#29231F] hover:border-[#C9A84C]/40'
                    }`}
                  >
                    {c.name}
                  </a>
                ))}
              </div>
            )}
          </motion.div>

          {/* ─── CATEGORIES · directly under the cities ─────────── */}
          <div className="mt-8 md:mt-10 w-full max-w-[1200px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {CATEGORIES.map((cat, i) => {
                const active = selectedCategory === cat.id;
                const categoryHref = `/finder/${(selectedCity || 'marrakech').toLowerCase()}/${cat.id}`;
                return (
                  <motion.a
                    key={cat.id}
                    href={categoryHref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.08, ease: 'easeOut' }}
                    whileHover={{ y: active ? -4 : -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      if (!selectedCity) {
                        e.preventDefault();
                        handleCategoryClick(cat.id);
                      }
                    }}
                    className={`relative group text-left rounded-[28px] p-4 md:p-5 flex sm:flex-col gap-4 border transition-all duration-300 cursor-pointer ${
                      active
                        ? 'bg-white ring-2 ring-[#C9A84C] border-[#C9A84C] shadow-[0_14px_36px_rgba(201,168,76,0.22)] -translate-y-1'
                        : 'bg-[#FFFDF9] border-[#E9D8C8]/70 shadow-[0_8px_30px_rgba(80,55,35,0.06)] hover:border-[#C9A84C]/40 hover:shadow-[0_12px_36px_rgba(80,55,35,0.12)]'
                    }`}
                  >
                    {/* Visual affirmation badge on active card */}
                    {active && (
                      <span className="absolute top-3.5 right-3.5 inline-flex items-center gap-1 bg-[#C9A84C] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                        <span>Selected</span>
                      </span>
                    )}

                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      decoding="async"
                      className={`w-[88px] h-[88px] sm:w-full sm:h-auto sm:aspect-square object-cover rounded-full shrink-0 transition-transform duration-300 ${
                        active ? 'scale-[1.03] ring-2 ring-[#C9A84C]/40' : 'group-hover:scale-[1.02]'
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#C85A32]">{cat.smallLabel}</p>
                      <h3 className="font-display text-lg md:text-xl font-semibold text-[#29231F] mt-1">{cat.title}</h3>
                      <p className="font-sans text-xs leading-relaxed text-[#71685F] mt-1.5">{cat.description}</p>
                      <div className="mt-2.5 flex items-center text-xs font-semibold">
                        {active ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C9A84C]">
                            Pick a city above to start <ArrowRight className="w-3 h-3 -rotate-90 stroke-[2.5]" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[#71685F] group-hover:text-[#C9A84C] transition-colors">
                            Explore <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEO INTERNAL LINKING DIRECTORY · Explore Morocco by City & Intent ─── */}
      <section className="mt-20 border-t border-[#E9D8C8] bg-white/70 py-16 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#C85A32]">Curated Morocco Directory</p>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#29231F] mt-1.5">
                Explore Morocco by City & Category
              </h2>
            </div>
            <p className="font-sans text-xs text-[#71685F] max-w-md">
              Handpicked dining, traditional riads, verified artisan shops, and authentic experiences across all major Moroccan destinations.
            </p>
          </div>

          {/* City Hub Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {[
              { id: 'marrakech', name: 'Marrakech' },
              { id: 'fes', name: 'Fes' },
              { id: 'essaouira', name: 'Essaouira' },
              { id: 'chefchaouen', name: 'Chefchaouen' },
              { id: 'agadir', name: 'Agadir' },
              { id: 'tangier', name: 'Tangier' },
              { id: 'casablanca', name: 'Casablanca' },
              { id: 'dakhla', name: 'Dakhla' },
              { id: 'rabat', name: 'Rabat' },
              { id: 'taghazout', name: 'Taghazout' },
            ].map((cityItem) => (
              <div key={cityItem.id} className="space-y-2">
                <a
                  href={`/finder/${cityItem.id}/sleep`}
                  className="font-serif text-base font-semibold text-[#29231F] hover:text-[#C85A32] transition-colors block"
                >
                  {cityItem.name}
                </a>
                <ul className="space-y-1 text-xs text-[#71685F]">
                  <li>
                    <a href={`/finder/${cityItem.id}/food`} className="hover:text-[#C9A84C] transition-colors">
                      Food & Restaurants
                    </a>
                  </li>
                  <li>
                    <a href={`/finder/${cityItem.id}/sleep`} className="hover:text-[#C9A84C] transition-colors">
                      Stays & Riads
                    </a>
                  </li>
                  <li>
                    <a href={`/finder/${cityItem.id}/things-to-do`} className="hover:text-[#C9A84C] transition-colors">
                      Things to Do
                    </a>
                  </li>
                  <li>
                    <a href={`/finder/${cityItem.id}/shopping`} className="hover:text-[#C9A84C] transition-colors">
                      Artisan Shopping
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Popular High-Intent Search Collections (Directly covers Search Console unindexed URLs) */}
          <div className="pt-8 border-t border-[#E9D8C8]/60">
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[#71685F] mb-4">
              Popular Search Highlights & Filter Guides
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                { title: 'Hotels with Heated Pools in Agadir', url: '/finder/agadir/sleep/heated-pools' },
                { title: '5-Star Luxury Hotels in Agadir', url: '/finder/agadir/sleep/5-star' },
                { title: 'Beachfront Hotels in Essaouira', url: '/finder/essaouira/sleep/on-the-beach' },
                { title: 'Hotels with Waterslides in Marrakech', url: '/finder/marrakech/sleep/waterslides' },
                { title: '5-Star Luxury Riads in Marrakech', url: '/finder/marrakech/sleep/5-star' },
                { title: 'Kitesurf Hotels in Dakhla', url: '/finder/dakhla/sleep/kitesurf-hotels' },
                { title: 'All-Inclusive Resorts in Agadir', url: '/finder/agadir/sleep/all-inclusive' },
                { title: 'Riads in Heart of Fes Medina', url: '/finder/fes/sleep/medina-heart' },
                { title: 'Stays with Private Beach in Taghazout', url: '/finder/taghazout/sleep/private-beach' },
                { title: 'Hotels with Swim-Up Rooms in Marrakech', url: '/finder/marrakech/sleep/swim-up-rooms' },
                { title: 'Hotels with Mountain Views in Chefchaouen', url: '/finder/chefchaouen/sleep/mountain-view' },
                { title: 'Desert Camps & Stays in Merzouga', url: '/finder/merzouga/sleep/desert-camps' },
              ].map((linkItem) => (
                <a
                  key={linkItem.url}
                  href={linkItem.url}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] text-[#29231F] hover:bg-[#FAF3EA] hover:text-[#C85A32] border border-[#E9D8C8] transition-colors"
                >
                  {linkItem.title}
                </a>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-12 pt-6 border-t border-[#E9D8C8]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71685F] gap-3">
            <p>© {new Date().getFullYear()} Moroccan Mate · Independent Morocco Guide</p>
            <div className="flex items-center gap-4">
              <a href="/finder" className="hover:text-[#C9A84C] transition-colors">Browse Finder</a>
              <a href="/sitemap.xml" className="hover:text-[#C9A84C] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </section>

      {/* Slide-over Favorites Drawer */}
      <FavoritesDrawer isOpen={favoritesOpen} onClose={() => setFavoritesOpen(false)} />
    </div>
  );
}
