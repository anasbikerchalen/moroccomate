import { useState, useMemo, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ChevronDown, ChevronUp, ArrowRight, Heart, Check, Search, X, Compass, ShieldCheck, Receipt, MapPinned, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/ui/SEO';
import { LanguageSwitcher } from '../components/ui/LanguageSwitcher';
import { LocalizedLink } from '../components/ui/LocalizedLink';
import { useLangPath } from '../utils/localeRouting';
import { HOME_SEO_I18N } from '../data/seo/i18nSeo';
import { buildHomeSeo } from '../data/seo/seoEngine';
import { useParameterStore } from '../state/parameterStore';
import { useExploreStore } from '../state/exploreStore';
import { useSavedStore } from '../state/savedStore';
import HomeSearchBar from '../components/home/HomeSearchBar';
import { HomeBroadsheetSection } from '../components/blog/HomeBroadsheetSection';
import { SiteFooter } from '../components/layout/SiteFooter';
import { getPopularGuidesLocalized, orderTouristicCitiesByRecommendedId } from '../utils/homeGuides';

const FavoritesDrawer = lazy(() => import('../components/finder/FavoritesDrawer'));
import { cities } from '../data/cities';
import { getCityTier } from '../data/touristicHierarchy';
import heroIllustration from '../assets/images/finder/finder_hero_matte_1786297047661.jpg';
import logoImg from '../assets/images/logo.png';
// 🖼️ Home page circular category images (Gemini-generated, circle-safe centered subjects)
import catFoodImg from '../assets/images/home/home_category_food_circle.jpg';
import catStaysImg from '../assets/images/home/home_category_sleep_circle.jpg';
import catThingsImg from '../assets/images/home/home_category_things_circle.jpg';
import catShoppingImg from '../assets/images/home/home_category_shopping_circle.jpg';

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

const REGION_TAB_DEFS = [
  { id: 'all', key: 'home.regions.all', count: 31 },
  { id: 'imperial', key: 'home.regions.imperial', count: 4 },
  { id: 'coast', key: 'home.regions.coast', count: 12 },
  { id: 'sahara', key: 'home.regions.sahara', count: 10 },
  { id: 'atlas', key: 'home.regions.atlas', count: 5 },
] as const;

const CATEGORY_DEFS = [
  { id: 'food', image: catFoodImg },
  { id: 'sleep', image: catStaysImg },
  { id: 'things-to-do', image: catThingsImg },
  { id: 'shopping', image: catShoppingImg },
] as const;

export default function HomePage() {
  const { t } = useTranslation();
  const { lang, lp, navigateLang } = useLangPath();
  const [selectedCity, setLocalCity] = useState<string>('');
  const [selectedCategory, setLocalCategory] = useState<string | null>(null);
  const [showAllCities, setShowAllCities] = useState(false);
  const [citySearchQuery, setCitySearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'imperial' | 'coast' | 'sahara' | 'atlas'>('all');
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [hasOpenedFavorites, setHasOpenedFavorites] = useState(false);
  const bookmarks = useSavedStore((state) => state.bookmarks);

  const setCityInStore = useParameterStore((state) => state.setCity);
  const setActiveCategory = useExploreStore((state) => state.setActiveCategory);
  const setExploreView = useExploreStore((state) => state.setView);

  const homeSeo = HOME_SEO_I18N[lang];

  // 31 Master Touristic Destinations (Rule 7) — matched by ID so accented Fès stays in top 7
  const touristicCities = useMemo(() => {
    const list = cities.filter((c: any) => getCityTier(c.id) === 'touristic');
    return orderTouristicCitiesByRecommendedId(list);
  }, []);

  const quickBarCities = useMemo(() => {
    const top = touristicCities.slice(0, 7);
    if (selectedCity && !top.some((c: any) => c.id === selectedCity)) {
      const current = touristicCities.find((c: any) => c.id === selectedCity);
      if (current) return [...top.slice(0, 6), current];
    }
    return top;
  }, [touristicCities, selectedCity]);

  const filteredExplorerCities = useMemo(() => {
    return touristicCities.filter((city: any) => {
      const meta = CITY_DESTINATIONS_META[city.id] || { region: 'coast', vibeLabel: 'Morocco Destination', icon: '📍' };
      const matchesRegion = selectedRegion === 'all' || meta.region === selectedRegion;
      const q = citySearchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
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
    navigateLang(`/finder/${citySlug}/${categoryId}?start=quiz`);
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

  const homeBundle = useMemo(() => buildHomeSeo(lang), [lang]);

  const popularGuideItems = useMemo(() => getPopularGuidesLocalized(lang), [lang]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#29231F]">
      <SEO
        title={homeBundle.title}
        description={homeBundle.description}
        canonical={homeBundle.canonical}
        schemaType={homeBundle.schemaType}
        schemaData={homeBundle.schemaData}
      />

      <header className="relative z-40 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-4 md:pt-5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 shrink-0">
          <img
            src={logoImg}
            alt="Moroccan Mate logo"
            className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 object-contain"
          />
          <div className="min-w-0">
            <p className="font-display text-base sm:text-lg md:text-xl font-semibold leading-none text-[#29231F] whitespace-nowrap">
              Moroccan Mate
            </p>
            <p className="hidden sm:block font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-[#71685F] mt-1">
              {t('home.brandTagline')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <div className="hidden lg:flex items-center gap-2 mr-1">
            <span className="font-sans text-xs text-[#71685F]">{t('home.personalGuide')}</span>
          </div>

          <LanguageSwitcher compact />

          {/* Blog Navigation Link */}
          <LocalizedLink
            to="/blog"
            className="group relative flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#EADBCE] shadow-xs hover:shadow-md hover:border-[#C9A84C]/50 transition-all duration-200 whitespace-nowrap shrink-0"
            title={t('common.blogTitle')}
          >
            <BookOpen className="w-4 h-4 text-[#C9A84C] shrink-0" />
            <span className="font-sans text-xs font-semibold text-[#29231F] hidden sm:inline">{t('common.blog')}</span>
          </LocalizedLink>

          {/* Near Me Navigation Link */}
          <LocalizedLink
            to={`/${selectedCategory === 'sleep' ? 'sleep' : selectedCategory === 'things-to-do' ? 'things' : selectedCategory === 'shopping' ? 'shop' : 'eat'}/${(selectedCity || 'marrakech').toLowerCase()}/near-me`}
            className="group relative flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#EADBCE] shadow-xs hover:shadow-md hover:border-[#EADBCE] transition-all duration-200 whitespace-nowrap shrink-0"
            title={t('common.nearMeTitle')}
          >
            <Compass className="w-4 h-4 text-[#C2613C] transition-transform group-hover:rotate-45 shrink-0" />
            <span className="font-sans text-xs font-semibold text-[#29231F] hidden sm:inline">{t('common.nearMe')}</span>
          </LocalizedLink>

          <button
            type="button"
            onClick={() => {
              setHasOpenedFavorites(true);
              setFavoritesOpen(true);
            }}
            className="group relative flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#EADBCE] shadow-xs hover:shadow-md hover:border-[#EADBCE] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
            aria-label={t('common.viewSaved')}
            title={t('common.viewSaved')}
          >
            <Heart
              className={`w-4 h-4 transition-transform group-hover:scale-110 shrink-0 ${
                bookmarks.length > 0 ? 'text-[#C85A32] fill-[#C85A32]' : 'text-[#71685F] group-hover:text-[#C85A32]'
              }`}
            />
            <span className="font-sans text-xs font-semibold text-[#29231F] hidden sm:inline">{t('common.saved')}</span>
            {bookmarks.length > 0 && (
              <span className="bg-[#C9A84C] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center leading-none tabular-nums">
                {bookmarks.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <section className="relative overflow-x-clip">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img src={heroIllustration} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" {...({ fetchPriority: 'high' } as any)} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/75 via-[#FAF7F2]/35 to-[#FAF7F2]" />
        </div>

        <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-7 pb-6 sm:pb-8 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="font-display font-medium text-[26px] leading-[1.08] sm:text-[34px] md:text-[40px] md:leading-[1.05] tracking-tight max-w-[680px] text-[#29231F]"
          >
            {t('home.heroTitleLine1')}
            <br className="hidden sm:block" /> {t('home.heroTitleLine2')}
          </motion.h1>

          {/* Direct Place, City & Guide Instant Search */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
            className="mt-4 sm:mt-5 w-full relative z-30"
          >
            <HomeSearchBar onSelectCity={(cityId) => handleCitySelect(cityId)} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
            className="mt-3 sm:mt-3.5 w-full max-w-[980px] relative z-20"
          >
            {/* Compact Destination Quick Bar */}
            <div className={`bg-[#FFFDF9]/95 backdrop-blur-sm border rounded-2xl lg:rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-center gap-1 sm:gap-1.5 flex-wrap lg:flex-nowrap transition-all duration-300 ${
              isAwaitingCity
                ? 'gold-breathe border-[#C9A84C] ring-2 ring-[#C9A84C]/35 shadow-[0_8px_32px_rgba(201,168,76,0.22)]'
                : 'border-[#E9D8C8] shadow-[0_4px_20px_rgba(80,55,35,0.06)]'
            }`}>
              <MapPin className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isAwaitingCity ? 'text-[#C9A84C] scale-110' : 'text-[#C9A84C]'}`} />

              {isAwaitingCity ? (
                <span className="inline-flex items-center gap-1 bg-[#C9A84C] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs whitespace-nowrap shrink-0">
                  {t('home.step2PickCity')}
                </span>
              ) : (
                <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#71685F] mr-0.5 sm:mr-1 whitespace-nowrap shrink-0">
                  {t('home.destinationLabel')}
                </span>
              )}

              {/* Popular Destinations Quick Pills */}
              {quickBarCities.map((c: any) => {
                const isSelected = selectedCity === c.id;
                return (
                  <a
                    key={c.id}
                    href={lp(`/finder/${c.id.toLowerCase()}/${selectedCategory || 'food'}`)}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCitySelect(c.id);
                    }}
                    className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-sans transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
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
                className={`inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  showAllCities
                    ? 'bg-[#C9A84C] text-white shadow-xs'
                    : 'bg-[#F5EBE1] hover:bg-[#EADBCE] text-[#71685F] hover:text-[#29231F] border border-[#EADBCE]'
                }`}
                aria-label={showAllCities ? t('home.closeCities') : t('home.chooseDestinations')}
              >
                <span>{showAllCities ? t('home.closeCities') : t('home.moreCities')}</span>
                {showAllCities ? <ChevronUp className="w-3.5 h-3.5 shrink-0" /> : <ChevronDown className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />}
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
                  className="mt-3.5 w-full bg-[#FFFDF9]/98 backdrop-blur-xl border border-[#EADBCE] rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 md:p-6 shadow-[0_20px_50px_rgba(60,40,25,0.14)] text-left rtl:text-right"
                >
                  {/* Top Bar: Title, Search & Close */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-[#EADBCE]/60">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-base sm:text-lg font-semibold text-[#29231F]">
                          {t('home.chooseDestinations')}
                        </span>
                        <span className="bg-[#FAF3E0] text-[#C9A84C] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#C9A84C]/30 hidden sm:inline-block">
                          {t('home.curatedHubs')}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-[#71685F] mt-0.5">
                        {t('home.explorerSubtitle')}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#71685F]" />
                        <input
                          type="text"
                          placeholder={t('home.searchCityPlaceholder')}
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
                        title={t('home.closeCities')}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Region Filter Tabs */}
                  <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
                    {REGION_TAB_DEFS.map((tab) => {
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
                          <span>{t(tab.key)}</span>
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
                          href={lp(`/finder/${c.id.toLowerCase()}/${selectedCategory || 'food'}`)}
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
                      {t('home.noCitiesMatch', { query: citySearchQuery })}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Category Cards */}
          <div className="mt-4 sm:mt-5 md:mt-6 w-full max-w-[1200px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5">
              {CATEGORY_DEFS.map((cat, i) => {
                const active = selectedCategory === cat.id;
                const categoryHref = lp(`/finder/${(selectedCity || 'marrakech').toLowerCase()}/${cat.id}`);
                const catSmall = t(`home.categories.${cat.id}.smallLabel`);
                const catTitle = t(`home.categories.${cat.id}.title`);
                const catDesc = t(`home.categories.${cat.id}.description`);

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
                    className={`relative group text-left rtl:text-right rounded-[22px] sm:rounded-[24px] p-3.5 sm:p-4 md:p-4.5 flex sm:flex-col gap-3 sm:gap-3.5 border transition-all duration-300 cursor-pointer ${
                      active
                        ? 'bg-white ring-2 ring-[#C9A84C] border-[#C9A84C] shadow-[0_14px_36px_rgba(201,168,76,0.22)] -translate-y-1'
                        : 'bg-[#FFFDF9] border-[#E9D8C8]/70 shadow-[0_6px_24px_rgba(80,55,35,0.06)] hover:border-[#C9A84C]/40 hover:shadow-[0_10px_30px_rgba(80,55,35,0.12)]'
                    }`}
                  >
                    {active && (
                      <span className="absolute top-3 right-3 rtl:right-auto rtl:left-3 inline-flex items-center gap-1 bg-[#C9A84C] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                        <span>{t('common.selected')}</span>
                      </span>
                    )}

                    <img
                      src={cat.image}
                      alt={catTitle}
                      loading="lazy"
                      decoding="async"
                      className={`w-[76px] h-[76px] sm:w-[120px] sm:h-[120px] md:w-[134px] md:h-[134px] lg:w-[144px] lg:h-[144px] sm:mx-auto object-cover rounded-full shrink-0 transition-transform duration-300 ${
                        active ? 'scale-[1.03] ring-2 ring-[#C9A84C]/40' : 'group-hover:scale-[1.02]'
                      }`}
                    />
                    <div className="flex-1 min-w-0 sm:text-center">
                      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#C85A32]">{catSmall}</p>
                      <h3 className="font-display text-base sm:text-lg md:text-[19px] font-semibold text-[#29231F] mt-0.5">{catTitle}</h3>
                      <p className="font-sans text-xs leading-snug text-[#71685F] mt-1 line-clamp-2">{catDesc}</p>
                      <div className="mt-2 flex items-center sm:justify-center text-xs font-semibold">
                        {active ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C9A84C]">
                            {t('home.pickCityAbove')} <ArrowRight className="w-3 h-3 -rotate-90 stroke-[2.5]" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[#71685F] group-hover:text-[#C9A84C] transition-colors">
                            {t('common.explore')} <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
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
        {/* Why Travelers Check Moroccan Mate First — Verified Value Strip */}
        <section
          aria-labelledby="home-trust-heading"
          data-testid="home-trust-strip"
          className="pt-8 pb-8 border-t border-[#E9D8C8]/60"
        >
          <h2
            id="home-trust-heading"
            className="font-display text-lg sm:text-xl font-semibold text-[#29231F] mb-5"
          >
            {t('home.trustStrip.heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                idx: 0,
                icon: <ShieldCheck className="w-5 h-5 text-[#C2613C]" aria-hidden="true" />,
                kickerColor: 'text-[#C2613C]',
              },
              {
                idx: 1,
                icon: <Receipt className="w-5 h-5 text-[#8A6D1F]" aria-hidden="true" />,
                kickerColor: 'text-[#8A6D1F]',
              },
              {
                idx: 2,
                icon: <MapPinned className="w-5 h-5 text-[#234E35]" aria-hidden="true" />,
                kickerColor: 'text-[#234E35]',
              },
            ].map(({ idx, icon, kickerColor }) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E9D8C8] bg-[#FFFDF9] p-5 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-[#FAF3EA] border border-[#E9D8C8]/80 flex items-center justify-center shrink-0">
                    {icon}
                  </span>
                  <span className={`font-sans text-xs font-bold uppercase tracking-wider ${kickerColor}`}>
                    {t(`home.trustStrip.items.${idx}.kicker`)}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-[#29231F] mt-1">
                  {t(`home.trustStrip.items.${idx}.title`)}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[#625950]">
                  {t(`home.trustStrip.items.${idx}.body`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <HomeBroadsheetSection />

        <div className="pt-8 border-t border-[#E9D8C8]/60 mt-8">
          <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[#71685F] mb-4">
            {t('home.featuredHeading')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2613C] block">{t('home.whereToEat')}</span>
              <ul className="space-y-1.5 text-xs">
                <li><LocalizedLink to="/place/marrakech/food/al-fassia" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Al Fassia (Marrakech)</LocalizedLink></li>
                <li><LocalizedLink to="/place/marrakech/food/le-jardin" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Le Jardin (Marrakech)</LocalizedLink></li>
                <li><LocalizedLink to="/place/casablanca/food/ricks-cafe" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Rick's Café (Casablanca)</LocalizedLink></li>
                <li><LocalizedLink to="/place/fes/food/dar-roumana" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Dar Roumana (Fès)</LocalizedLink></li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D99A30] block">{t('home.whereToStay')}</span>
              <ul className="space-y-1.5 text-xs">
                <li><LocalizedLink to="/place/marrakech/sleep/la-mamounia" className="text-[#29231F] hover:text-[#C85A32] transition-colors">La Mamounia (Marrakech)</LocalizedLink></li>
                <li><LocalizedLink to="/place/fes/sleep/riad-fes-relais-chateaux" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Riad Fès (Fès)</LocalizedLink></li>
                <li><LocalizedLink to="/place/chefchaouen/sleep/lina-ryad-spa" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Lina Ryad & Spa (Chefchaouen)</LocalizedLink></li>
                <li><LocalizedLink to="/place/fes/sleep/hotel-sahrai" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Hotel Sahrai (Fès)</LocalizedLink></li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A84C] block">{t('home.localShopping')}</span>
              <ul className="space-y-1.5 text-xs">
                <li><LocalizedLink to="/place/marrakech/shopping/ensemble-artisanal" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Ensemble Artisanal (Marrakech)</LocalizedLink></li>
                <li><LocalizedLink to="/place/fes/shopping/art-naji-fes-zellige-ceramics" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Art Naji Ceramics (Fès)</LocalizedLink></li>
                <li><LocalizedLink to="/place/fes/shopping/terrasse-tannerie-chouara-leather-shops" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Chouara Leather (Fès)</LocalizedLink></li>
                <li><LocalizedLink to="/finder/marrakech/shopping" className="text-[#29231F] hover:text-[#C85A32] transition-colors">{t('home.exploreAllShops')}</LocalizedLink></li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A6D1F] block">{t('home.thingsToDo')}</span>
              <ul className="space-y-1.5 text-xs">
                <li><LocalizedLink to="/things/marrakech/bahia-palace" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Bahia Palace (Marrakech)</LocalizedLink></li>
                <li><LocalizedLink to="/things/marrakech/jardin-majorelle" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Jardin Majorelle (Marrakech)</LocalizedLink></li>
                <li><LocalizedLink to="/things/casablanca/hassan-ii-mosque" className="text-[#29231F] hover:text-[#C85A32] transition-colors">Hassan II Mosque (Casablanca)</LocalizedLink></li>
                <li><LocalizedLink to="/finder/marrakech/things-to-do" className="text-[#29231F] hover:text-[#C85A32] transition-colors">{t('home.exploreAllActivities')}</LocalizedLink></li>
              </ul>
            </div>
          </div>

          <hr className="border-t border-[#E9D8C8] my-8" />

          <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[#71685F] mb-4">
            {t('home.popularGuidesHeading')}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {popularGuideItems.map((linkItem) => (
              <LocalizedLink
                key={linkItem.url}
                to={linkItem.url}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] text-[#29231F] hover:bg-[#FAF3EA] hover:text-[#C85A32] border border-[#E9D8C8] transition-colors"
              >
                {linkItem.title}
              </LocalizedLink>
            ))}
          </div>
        </div>

        <SiteFooter variant="editorial" />
      </div>

      {(favoritesOpen || hasOpenedFavorites) && (
        <Suspense fallback={null}>
          <FavoritesDrawer isOpen={favoritesOpen} onClose={() => setFavoritesOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
