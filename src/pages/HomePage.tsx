import { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ChevronDown, ChevronUp, ArrowRight, Heart, Check, Search, X } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { useParameterStore } from '../state/parameterStore';
import { useExploreStore } from '../state/exploreStore';
import { useSavedStore } from '../state/savedStore';
import FavoritesDrawer from '../components/finder/FavoritesDrawer';
import { cities } from '../data/cities';
import { getCityTier } from '../data/touristicHierarchy';
import heroIllustration from '../assets/images/finder/finder_hero_matte_1786297047661.jpg';
import logoImg from '../assets/images/logo.png';
// 🖼️ Home page circular category images (Gemini-generated, circle-safe centered subjects)
import catFoodImg from '../assets/images/home/home_category_food_circle.jpg';
import catStaysImg from '../assets/images/home/home_category_sleep_circle.jpg';
import catThingsImg from '../assets/images/home/home_category_things_circle.jpg';
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

const RECOMMENDED_CITY_NAMES = ['Marrakech', 'Fes', 'Chefchaouen', 'Essaouira', 'Agadir', 'Casablanca', 'Tanger'];

// Regional classification and tags for all 31 Touristic destinations
const CITY_DESTINATIONS_META: Record<string, { region: 'imperial' | 'coast' | 'sahara' | 'atlas'; vibeLabel: string; icon: string }> = {
  marrakech: { region: 'imperial', vibeLabel: 'Red City & Medina', icon: '🏰' },
  fes: { region: 'imperial', vibeLabel: 'Old World Capital', icon: '🕌' },
  meknes: { region: 'imperial', vibeLabel: 'Imperial Gates', icon: '🏛️' },
  rabat: { region: 'imperial', vibeLabel: 'Coastal Capital', icon: '👑' },
  casablanca: { region: 'coast', vibeLabel: 'Atlantic Metropolis', icon: '🏙️' },
  essaouira: { region: 'coast', vibeLabel: 'Wind & Ramparts', icon: '🌊' },
  agadir: { region: 'coast', vibeLabel: 'Golden Bay & Sun', icon: '🏖️' },
  taghazout: { region: 'coast', vibeLabel: 'World Surf Haven', icon: '🏄' },
  imsouane: { region: 'coast', vibeLabel: 'Endless Wave Bay', icon: '🌊' },
  tanger: { region: 'coast', vibeLabel: 'Strait of Gibraltar', icon: '⛵' },
  assilah: { region: 'coast', vibeLabel: 'Art & Ocean Walls', icon: '🎨' },
  tetouan: { region: 'coast', vibeLabel: 'Andalusian Medina', icon: '🕊️' },
  m_diq: { region: 'coast', vibeLabel: 'Mediterranean Riviera', icon: '🛥️' },
  saidia: { region: 'coast', vibeLabel: 'Blue Pearl Beach', icon: '🌴' },
  el_jadida: { region: 'coast', vibeLabel: 'Portuguese Citadel', icon: '🏰' },
  dakhla: { region: 'coast', vibeLabel: 'Lagoon & Kitesurf', icon: '🪁' },
  merzouga: { region: 'sahara', vibeLabel: 'Erg Chebbi Dunes', icon: '🐪' },
  ouarzazate: { region: 'sahara', vibeLabel: 'Desert Studios', icon: '🎬' },
  zagora: { region: 'sahara', vibeLabel: 'Draa Valley Palms', icon: '🌴' },
  mhamid: { region: 'sahara', vibeLabel: 'Deep Sahara Dunes', icon: '⛺' },
  erfoud: { region: 'sahara', vibeLabel: 'Date Palm Oasis', icon: '🏜️' },
  rissani: { region: 'sahara', vibeLabel: 'Caravan Souk', icon: '🏺' },
  tinghir: { region: 'sahara', vibeLabel: 'Todra Gorge Oasis', icon: '⛰️' },
  todra_dades: { region: 'sahara', vibeLabel: 'Canyon Valleys', icon: '🏜️' },
  boumalne_dades: { region: 'sahara', vibeLabel: 'Kasbah Valley', icon: '🏰' },
  kelaat_m_gouna: { region: 'sahara', vibeLabel: 'Valley of the Roses', icon: '🌹' },
  chefchaouen: { region: 'atlas', vibeLabel: 'The Blue Pearl', icon: '💙' },
  ifrane: { region: 'atlas', vibeLabel: 'Cedar Forests', icon: '🌲' },
  taroudant: { region: 'atlas', vibeLabel: 'Souss Medina Walls', icon: '🧱' },
  tafraout: { region: 'atlas', vibeLabel: 'Granite & Almonds', icon: '⛰️' },
  tiznit: { region: 'atlas', vibeLabel: 'Silver Jewelry City', icon: '✨' },
};

const REGION_TABS = [
  { id: 'all', label: 'All (31)', count: 31 },
  { id: 'imperial', label: '🏰 Imperial & Heritage', count: 4 },
  { id: 'coast', label: '🌊 Coast & Surfing', count: 12 },
  { id: 'sahara', label: '🏜️ Sahara & Oases', count: 10 },
  { id: 'atlas', label: '🏔️ Atlas & Mountain Gems', count: 5 },
] as const;

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
  const [citySearchQuery, setCitySearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'imperial' | 'coast' | 'sahara' | 'atlas'>('all');
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const bookmarks = useSavedStore((state) => state.bookmarks);

  const setCityInStore = useParameterStore((state) => state.setCity);
  const setActiveCategory = useExploreStore((state) => state.setActiveCategory);
  const setExploreView = useExploreStore((state) => state.setView);

  // 31 Master Touristic Destinations (Rule 7)
  const touristicCities = useMemo(() => {
    const list = cities.filter((c: any) => getCityTier(c.id) === 'touristic');
    const ordered: any[] = [];
    for (const name of RECOMMENDED_CITY_NAMES) {
      const found = list.find((r: any) => r.name.toLowerCase() === name.toLowerCase());
      if (found) ordered.push(found);
    }
    const rest = list.filter((r: any) => !ordered.some((o: any) => o.id === r.id));
    return [...ordered, ...rest];
  }, []);

  // Top quick cities shown on the compact destination pill bar
  const quickBarCities = useMemo(() => {
    const top = touristicCities.slice(0, 7);
    if (selectedCity && !top.some((c: any) => c.id === selectedCity)) {
      const current = touristicCities.find((c: any) => c.id === selectedCity);
      if (current) return [...top.slice(0, 6), current];
    }
    return top;
  }, [touristicCities, selectedCity]);

  // Filtered cities inside the modern expanded destination explorer
  const filteredExplorerCities = useMemo(() => {
    return touristicCities.filter((city: any) => {
      const meta = CITY_DESTINATIONS_META[city.id] || { region: 'coast', vibeLabel: 'Morocco Destination', icon: '📍' };
      const matchesRegion = selectedRegion === 'all' || meta.region === selectedRegion;
      const q = citySearchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        city.name.toLowerCase().includes(q) ||
        meta.vibeLabel.toLowerCase().includes(q);
      return matchesRegion && matchesSearch;
    });
  }, [touristicCities, selectedRegion, citySearchQuery]);

  const isAwaitingCity = Boolean(selectedCategory && !selectedCity);

  const goFinder = (cityId: string, categoryId: string) => {
    setCityInStore(cityId);
    setActiveCategory(categoryId as any);
    setExploreView('quiz');
    const citySlug = cityId.toLowerCase();
    navigate(`/finder/${citySlug}/${categoryId}?start=quiz`);
  };

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

      <header className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-10 pt-4 md:pt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Moroccan Mate logo"
            className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 object-contain"
          />
          <div>
            <p className="font-display text-lg md:text-xl font-semibold leading-none text-[#29231F]">Moroccan Mate</p>
            <p className="font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-[#71685F] mt-1">Real places. Local vibes.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 mr-1">
            <span className="font-sans text-xs text-[#71685F]">Your personal Moroccan guide</span>
          </div>

          <button
            type="button"
            onClick={() => setFavoritesOpen(true)}
            className="group relative flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#EADBCE] shadow-xs hover:shadow-md hover:border-[#EADBCE] transition-all duration-200"
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

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img src={heroIllustration} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" {...({ fetchpriority: 'high' } as any)} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/75 via-[#FAF7F2]/35 to-[#FAF7F2]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-4 sm:pt-6 md:pt-7 pb-6 sm:pb-8 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="font-display font-medium text-[26px] leading-[1.08] sm:text-[34px] md:text-[40px] md:leading-[1.05] tracking-tight max-w-[680px] text-[#29231F]"
          >
            What are you looking<br className="hidden sm:block" /> for in Morocco?
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="mt-3.5 sm:mt-4 md:mt-5 w-full max-w-[860px]"
          >
            {/* Compact Destination Quick Bar */}
            <div className={`bg-[#FFFDF9]/95 backdrop-blur-sm border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap transition-all duration-300 ${
              isAwaitingCity
                ? 'gold-breathe border-[#C9A84C] ring-2 ring-[#C9A84C]/35 shadow-[0_8px_32px_rgba(201,168,76,0.22)]'
                : 'border-[#E9D8C8] shadow-[0_4px_20px_rgba(80,55,35,0.06)]'
            }`}>
              <MapPin className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isAwaitingCity ? 'text-[#C9A84C] scale-110' : 'text-[#C9A84C]'}`} />

              {isAwaitingCity ? (
                <span className="inline-flex items-center gap-1 bg-[#C9A84C] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                  Step 2: Pick your city
                </span>
              ) : (
                <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#71685F] mr-0.5 sm:mr-1">
                  Destination:
                </span>
              )}

              {/* Popular Destinations Quick Pills */}
              {quickBarCities.map((c: any) => {
                const isSelected = selectedCity === c.id;
                return (
                  <a
                    key={c.id}
                    href={`/finder/${c.id.toLowerCase()}/${selectedCategory || 'food'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCitySelect(c.id);
                    }}
                    className={`px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-xs font-sans transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#C9A84C] text-white shadow-xs font-semibold'
                        : isAwaitingCity
                          ? 'bg-[#FAF3E0] text-[#29231F] border border-[#C9A84C]/50 hover:bg-[#C9A84C] hover:text-white font-medium'
                          : 'text-[#29231F] hover:bg-[#F5EBE1] hover:text-[#C9A84C] font-medium'
                    }`}
                  >
                    {c.name}
                  </a>
                );
              })}

              {/* Expand all 31 cities button */}
              <button
                type="button"
                onClick={() => setShowAllCities(!showAllCities)}
                className={`inline-flex items-center gap-1 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
                  showAllCities
                    ? 'bg-[#C9A84C] text-white shadow-xs'
                    : 'bg-[#F5EBE1] hover:bg-[#EADBCE] text-[#71685F] hover:text-[#29231F] border border-[#EADBCE]'
                }`}
                aria-label={showAllCities ? 'Close destination picker' : 'Show all 31 Moroccan cities'}
              >
                <span>{showAllCities ? 'Close Cities' : '+24 More Cities'}</span>
                {showAllCities ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5 text-[#C9A84C]" />}
              </button>
            </div>

            {/* Fresh, Modern Expanded Destination Explorer */}
            <AnimatePresence>
              {showAllCities && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="mt-3.5 w-full bg-[#FFFDF9]/98 backdrop-blur-xl border border-[#EADBCE] rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 md:p-6 shadow-[0_20px_50px_rgba(60,40,25,0.14)] text-left"
                >
                  {/* Top Bar: Title, Search & Close */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-[#EADBCE]/60">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-base sm:text-lg font-semibold text-[#29231F]">
                          Choose from 31 Moroccan Destinations
                        </span>
                        <span className="bg-[#FAF3E0] text-[#C9A84C] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#C9A84C]/30 hidden sm:inline-block">
                          31 Curated Hubs
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-[#71685F] mt-0.5">
                        Handpicked imperial medinas, coastal surf bays & desert oases
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#71685F]" />
                        <input
                          type="text"
                          placeholder="Search city..."
                          value={citySearchQuery}
                          onChange={(e) => setCitySearchQuery(e.target.value)}
                          className="pl-8 pr-7 py-1.5 text-xs bg-white border border-[#EADBCE] rounded-full focus:outline-none focus:border-[#C9A84C] w-[150px] sm:w-[190px] font-sans text-[#29231F] placeholder:text-[#A89F91]"
                        />
                        {citySearchQuery && (
                          <button
                            type="button"
                            onClick={() => setCitySearchQuery('')}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#71685F] hover:text-[#29231F]"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowAllCities(false)}
                        className="w-8 h-8 rounded-full bg-white border border-[#EADBCE] hover:bg-[#F5EBE1] flex items-center justify-center text-[#71685F] hover:text-[#29231F] transition-all cursor-pointer shrink-0"
                        title="Close destination picker"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Region Filter Tabs */}
                  <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
                    {REGION_TABS.map((tab) => {
                      const isActive = selectedRegion === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setSelectedRegion(tab.id as any)}
                          className={`px-3 py-1 rounded-full text-xs font-sans whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                            isActive
                              ? 'bg-[#C9A84C] text-white font-semibold shadow-xs'
                              : 'bg-white/80 hover:bg-white text-[#71685F] hover:text-[#29231F] border border-[#EADBCE]/80'
                          }`}
                        >
                          <span>{tab.label}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                            isActive ? 'bg-white/25 text-white' : 'bg-[#F5EBE1] text-[#71685F]'
                          }`}>
                            {tab.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Fresh Destination Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5 max-h-[290px] overflow-y-auto pr-1 pt-1">
                    {filteredExplorerCities.map((c: any) => {
                      const meta = CITY_DESTINATIONS_META[c.id] || { vibeLabel: 'Morocco Hub', icon: '📍' };
                      const isSelected = selectedCity === c.id;
                      return (
                        <a
                          key={c.id}
                          href={`/finder/${c.id.toLowerCase()}/${selectedCategory || 'food'}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleCitySelect(c.id);
                            setShowAllCities(false);
                          }}
                          className={`group flex items-center justify-between p-2.5 rounded-[14px] border transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? 'bg-[#C9A84C] text-white border-[#C9A84C] shadow-sm'
                              : 'bg-white hover:bg-[#FAF7F2] border-[#EADBCE]/80 hover:border-[#C9A84C]/60 hover:shadow-xs'
                          }`}
                        >
                          <div className="min-w-0 pr-1.5">
                            <p className={`font-sans text-xs font-semibold truncate ${
                              isSelected ? 'text-white' : 'text-[#29231F] group-hover:text-[#C9A84C]'
                            }`}>
                              {c.name}
                            </p>
                            <p className={`font-sans text-[10px] truncate ${
                              isSelected ? 'text-white/85' : 'text-[#71685F]'
                            }`}>
                              {meta.vibeLabel}
                            </p>
                          </div>
                          <span className="text-sm shrink-0 transition-transform group-hover:scale-110">
                            {meta.icon}
                          </span>
                        </a>
                      );
                    })}
                  </div>

                  {filteredExplorerCities.length === 0 && (
                    <div className="text-center py-6 text-xs text-[#71685F]">
                      No destinations found matching "{citySearchQuery}".
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Category Cards (Lifted vertically & image scaled so text & CTA are fully visible at first load) */}
          <div className="mt-4 sm:mt-5 md:mt-6 w-full max-w-[1200px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5">
              {CATEGORIES.map((cat, i) => {
                const active = selectedCategory === cat.id;
                const categoryHref = `/finder/${(selectedCity || 'marrakech').toLowerCase()}/${cat.id}`;
                return (
                  <motion.a
                    key={cat.id}
                    href={categoryHref}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.35 + i * 0.07, ease: 'easeOut' }}
                    whileHover={{ y: active ? -4 : -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(cat.id);
                    }}
                    className={`relative group text-left rounded-[22px] sm:rounded-[24px] p-3.5 sm:p-4 md:p-4.5 flex sm:flex-col gap-3 sm:gap-3.5 border transition-all duration-300 cursor-pointer ${
                      active
                        ? 'bg-white ring-2 ring-[#C9A84C] border-[#C9A84C] shadow-[0_14px_36px_rgba(201,168,76,0.22)] -translate-y-1'
                        : 'bg-[#FFFDF9] border-[#E9D8C8]/70 shadow-[0_6px_24px_rgba(80,55,35,0.06)] hover:border-[#C9A84C]/40 hover:shadow-[0_10px_30px_rgba(80,55,35,0.12)]'
                    }`}
                  >
                    {active && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-[#C9A84C] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                        <span>Selected</span>
                      </span>
                    )}

                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      decoding="async"
                      className={`w-[76px] h-[76px] sm:w-[120px] sm:h-[120px] md:w-[134px] md:h-[134px] lg:w-[144px] lg:h-[144px] sm:mx-auto object-cover rounded-full shrink-0 transition-transform duration-300 ${
                        active ? 'scale-[1.03] ring-2 ring-[#C9A84C]/40' : 'group-hover:scale-[1.02]'
                      }`}
                    />
                    <div className="flex-1 min-w-0 sm:text-center">
                      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#C85A32]">{cat.smallLabel}</p>
                      <h3 className="font-display text-base sm:text-lg md:text-[19px] font-semibold text-[#29231F] mt-0.5">{cat.title}</h3>
                      <p className="font-sans text-xs leading-snug text-[#71685F] mt-1 line-clamp-2">{cat.description}</p>
                      <div className="mt-2 flex items-center sm:justify-center text-xs font-semibold">
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

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pb-10">
        <div className="pt-8 border-t border-[#E9D8C8]/60">
          <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[#71685F] mb-4">
            Featured Places to Eat, Stay & Shop in Morocco
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2613C] block">Where to Eat</span>
              <ul className="space-y-1.5 text-xs">
                <li><Link to="/place/marrakech/food/al-fassia" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Al Fassia (Marrakech)</Link></li>
                <li><Link to="/place/marrakech/food/le-jardin" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Le Jardin (Marrakech)</Link></li>
                <li><Link to="/place/casablanca/food/ricks-cafe" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Rick's Café (Casablanca)</Link></li>
                <li><Link to="/place/fes/food/dar-roumana" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Dar Roumana (Fès)</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D99A30] block">Where to Stay</span>
              <ul className="space-y-1.5 text-xs">
                <li><Link to="/place/marrakech/sleep/la-mamounia" className="text-[#29231F] hover:text-[#C85A32] transition-colors">La Mamounia (Marrakech)</Link></li>
                <li><Link to="/place/fes/sleep/riad-fes-relais-chateaux" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Riad Fès (Fès)</Link></li>
                <li><Link to="/place/chefchaouen/sleep/lina-ryad-spa" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Lina Ryad & Spa (Chefchaouen)</Link></li>
                <li><Link to="/place/fes/sleep/hotel-sahrai" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Hotel Sahrai (Fès)</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A84C] block">Local Shopping</span>
              <ul className="space-y-1.5 text-xs">
                <li><Link to="/place/marrakech/shopping/ensemble-artisanal" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Ensemble Artisanal (Marrakech)</Link></li>
                <li><Link to="/place/fes/shopping/art-naji-fes-zellige-ceramics" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Art Naji Ceramics (Fès)</Link></li>
                <li><Link to="/place/fes/shopping/terrasse-tannerie-chouara-leather-shops" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Chouara Leather (Fès)</Link></li>
                <li><Link to="/finder/marrakech/shopping" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Explore All Marrakech Shops &rarr;</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A6D1F] block">Things to Do</span>
              <ul className="space-y-1.5 text-xs">
                <li><Link to="/things/marrakech/bahia-palace" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Bahia Palace (Marrakech)</Link></li>
                <li><Link to="/things/marrakech/jardin-majorelle" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Jardin Majorelle (Marrakech)</Link></li>
                <li><Link to="/things/casablanca/hassan-ii-mosque" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Hassan II Mosque (Casablanca)</Link></li>
                <li><Link to="/finder/marrakech/things-to-do" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Explore All Activities &rarr;</Link></li>
              </ul>
            </div>
          </div>

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
              <Link
                key={linkItem.url}
                to={linkItem.url}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] text-[#29231F] hover:bg-[#FAF3EA] hover:text-[#C85A32] border border-[#E9D8C8] transition-colors"
              >
                {linkItem.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#E9D8C8]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71685F] gap-3">
          <p>© {new Date().getFullYear()} Moroccan Mate · Independent Morocco Guide</p>
          <div className="flex items-center gap-4">
            <Link to="/finder" className="hover:text-[#C9A84C] transition-colors">Browse Finder</Link>
            <a href="/sitemap.xml" className="hover:text-[#C9A84C] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      <FavoritesDrawer isOpen={favoritesOpen} onClose={() => setFavoritesOpen(false)} />
    </div>
  );
}
