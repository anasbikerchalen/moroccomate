import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ChevronDown, ChevronUp, ArrowRight, Heart, Menu } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { useParameterStore } from '../state/parameterStore';
import { useExploreStore } from '../state/exploreStore';
import { useSavedStore } from '../state/savedStore';
import FavoritesDrawer from '../components/finder/FavoritesDrawer';
import { cities } from '../data/cities';
import heroIllustration from '../assets/images/finder/finder_hero_matte_1786297047661.jpg';
import logoImg from '../assets/images/logo.png';
// 🖼️ Home page circular category images (Gemini-generated, circle-safe centered subjects)
// PROMPT (Food & Dining): "Moroccan food and dining: a steaming round tagine pot with fresh bread, olives and a glass of mint tea arranged in the exact center of the frame on a zellij tile table, warm ambient light, generous empty cream-colored margin all around the subject for a safe circular crop. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."
import catFoodImg from '../assets/images/home/home_category_food_circle.jpg';
// PROMPT (Stays & Sleep): "Stays and sleep in Morocco: a beautiful traditional riad courtyard with a small mosaic fountain and hanging lanterns composed in the exact center of the frame, warm golden evening light, generous empty cream-colored margin all around the subject for a safe circular crop. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."
import catStaysImg from '../assets/images/home/home_category_sleep_circle.jpg';
// PROMPT (Things to Do): "Things to do in Morocco: a serene travel discovery scene with the Atlas mountains, a historic medina gateway and a small palm grove arranged in the exact center of the frame, warm daylight, generous empty cream-colored margin all around the subject for a safe circular crop. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."
import catThingsImg from '../assets/images/home/home_category_things_circle.jpg';
// PROMPT (Shopping): "Shopping in Morocco: a woven Berber basket with colorful ceramics, leather babouches and a folded rug arranged in the exact center of the frame on a warm market table, warm ambient light, generous empty cream-colored margin all around the subject for a safe circular crop. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."
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
  const [nudge, setNudge] = useState<'city' | null>(null);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const bookmarks = useSavedStore((state) => state.bookmarks);

  const setCityInStore = useParameterStore((state) => state.setCity);
  const setActiveCategory = useExploreStore((state) => state.setActiveCategory);
  const setExploreView = useExploreStore((state) => state.setView);

  const recommendedCities = cities.filter((c: any) => RECOMMENDED_CITY_NAMES.includes(c.name));
  const otherCities = cities.filter((c: any) => !RECOMMENDED_CITY_NAMES.includes(c.name));

  // Go directly into the quiz for the chosen category (skips the categories screen)
  const goFinder = (cityId: string, categoryId: string) => {
    setCityInStore(cityId);
    setActiveCategory(categoryId as any);
    setExploreView('quiz');
    const citySlug = cityId.toLowerCase();
    navigate(`/finder/${citySlug}/${categoryId}?start=quiz`);
  };

  // Sign system: picking a category before a city shows a gentle sign to pick a
  // city first; choosing a city first is silent (the visitor naturally picks a
  // category next). When both are chosen the visitor goes straight to the quiz.
  const handleCitySelect = (cityId: string) => {
    setLocalCity(cityId);
    if (selectedCategory) {
      goFinder(cityId, selectedCategory);
    } else {
      setNudge(null);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    const isSame = selectedCategory === categoryId;
    setLocalCategory(isSame ? null : categoryId);
    if (!isSame && selectedCity) {
      goFinder(selectedCity, categoryId);
    } else if (!isSame) {
      setNudge('city');
      window.setTimeout(() => setNudge((cur) => (cur === 'city' ? null : cur)), 4500);
    } else {
      setNudge(null);
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
            className="group relative flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#EADBCE] shadow-xs hover:shadow-md hover:border-[#C9A84C] transition-all cursor-pointer"
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
          <img src={heroIllustration} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchPriority="high" />
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
            <div className={`bg-[#FFFDF9]/90 backdrop-blur-sm border rounded-[32px] px-5 py-3 flex items-center justify-center gap-2 md:gap-2.5 flex-wrap transition-all duration-500 ${
              nudge === 'city'
                ? 'gold-breathe border-[#C9A84C]/60'
                : 'border-[#E9D8C8] shadow-[0_8px_30px_rgba(80,55,35,0.06)]'
            }`}>
              <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0" />
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#71685F] mr-1">Choose a city</span>
              {recommendedCities.map((c: any) => (
                <button
                  key={c.id}
                  onClick={() => handleCitySelect(c.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCity === c.id
                      ? 'bg-[#C9A84C] text-white shadow-sm'
                      : 'bg-transparent text-[#29231F] hover:bg-[#F5EBE1]'
                  }`}
                >
                  {c.name}
                </button>
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
                {otherCities.map((c: any) => (
                  <button
                    key={c.id}
                    onClick={() => handleCitySelect(c.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-200 cursor-pointer ${
                      selectedCity === c.id
                        ? 'bg-[#C9A84C] text-white shadow-sm'
                        : 'bg-[#FFFDF9]/80 border border-[#E9D8C8] text-[#29231F] hover:border-[#C9A84C]/40'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Sign · category chosen before a city → gentle invitation to pick a city.
              popLayout keeps the category cards from jumping when the sign fades out. */}
          <AnimatePresence mode="popLayout">
            {nudge === 'city' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6, transition: { duration: 0.35, ease: 'easeIn' } }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="mt-4 font-serif italic text-lg text-[#71685F]"
              >
                First, where are you going?
              </motion.p>
            )}
          </AnimatePresence>

          {/* ─── CATEGORIES · directly under the cities ─────────── */}
          <div className="mt-8 md:mt-10 w-full max-w-[1200px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {CATEGORIES.map((cat, i) => {
                const active = selectedCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.08, ease: 'easeOut' }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`group text-left bg-[#FFFDF9] rounded-[28px] p-4 md:p-5 flex sm:flex-col gap-4 border transition-all duration-200 cursor-pointer ${
                      active
                        ? 'border-[#C9A84C]/50 shadow-[0_8px_30px_rgba(201,168,76,0.15)]'
                        : 'border-[#E9D8C8]/70 shadow-[0_8px_30px_rgba(80,55,35,0.06)] hover:border-[#C9A84C]/30 hover:shadow-[0_12px_36px_rgba(80,55,35,0.10)]'
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      decoding="async"
                      className="w-[88px] h-[88px] sm:w-full sm:h-auto sm:aspect-square object-cover rounded-full shrink-0 transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#C85A32]">{cat.smallLabel}</p>
                      <h3 className="font-display text-lg md:text-xl font-semibold text-[#29231F] mt-1">{cat.title}</h3>
                      <p className="font-sans text-xs leading-relaxed text-[#71685F] mt-1.5">{cat.description}</p>
                      <ArrowRight className="sm:hidden w-3.5 h-3.5 text-[#C9A84C] mt-2" />
                      {active && (
                        <span className="hidden sm:inline-block mt-2 text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-[#C9A84C]">
                          Selected ✓
                        </span>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Slide-over Favorites Drawer */}
      <FavoritesDrawer isOpen={favoritesOpen} onClose={() => setFavoritesOpen(false)} />
    </div>
  );
}