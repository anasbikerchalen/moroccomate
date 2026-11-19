import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Compass, MapPin, Stamp, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/ui/SEO';
import { LanguageSwitcher } from '../components/ui/LanguageSwitcher';
import { LocalizedLink } from '../components/ui/LocalizedLink';
import { useLangPath } from '../utils/localeRouting';
import { buildThingsSeo } from '../data/seo/seoEngine';
import { ActivityTemplateView } from '../components/things/ActivityTemplateView';
import { getActivityByCityAndSlug, getCityLabel, formatDuration } from '../things-to-do';
import { useSavedStore } from '../state/savedStore';
import FavoritesDrawer from '../components/finder/FavoritesDrawer';
import logoImg from '../assets/images/logo.png';
import { usePassportStore } from '../state/passportStore';
import {
  getCityCategoryDeck,
  pickCompassSuggestion,
  type DeckPlaceItem,
} from '../utils/listingDeckEngine';
import { playTactileSound, prefersReducedMotion } from '../utils/playfulFeedback';
import TiltPeekCard from '../components/listing-play/TiltPeekCard';
import QuickPeekDrawer from '../components/listing-play/QuickPeekDrawer';
import CompassRouletteCard from '../components/listing-play/CompassRouletteCard';
import CityDeckNavigator from '../components/listing-play/CityDeckNavigator';
import PassportModal from '../components/listing-play/PassportModal';
import StampToast from '../components/listing-play/StampToast';

/**
 * Morocco Finder — Things To Do listing page.
 * Route: /things/:city/:slug  -> resolves the real activity from the
 * Things To Do backend and renders the reusable activity template.
 */
export default function ThingsListingPage() {
  const { city, slug } = useParams<{ city: string; slug: string }>();
  const { t } = useTranslation();
  const { lang, lp, navigateLang } = useLangPath();
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [passportOpen, setPassportOpen] = useState(false);
  const [peekPlace, setPeekPlace] = useState<DeckPlaceItem | null>(null);
  const [toastOpen, setToastOpen] = useState(false);
  const discoveryZoneRef = useRef<HTMLElement | null>(null);
  const compassRef = useRef<HTMLDivElement | null>(null);

  const bookmarks = useSavedStore((state) => state.bookmarks);
  const passportEntries = usePassportStore((s) => s.entries);
  const recordVisit = usePassportStore((s) => s.recordVisit);
  const unlockStamp = usePassportStore((s) => s.unlockStamp);

  const isNearMe = slug === 'near-me';
  const activity = !isNearMe && city && slug ? getActivityByCityAndSlug(city, slug) : undefined;
  const cityKey = String(activity?.city || city || '').toLowerCase();
  const resolvedCityLabel = activity ? getCityLabel(activity.city) : (cityKey ? getCityLabel(cityKey) : 'Morocco');
  const activeSlug = activity?.slug || slug || '';

  const totalStampsCount = useMemo(
    () => Object.values(passportEntries).filter((e) => e.stamped).length,
    [passportEntries]
  );

  const cityStampCount = useMemo(
    () =>
      Object.values(passportEntries).filter(
        (e) => e.stamped && e.city === cityKey
      ).length,
    [passportEntries, cityKey]
  );

  const sisterActivities = useMemo(() => {
    if (!cityKey || !activeSlug) return [];
    return getCityCategoryDeck(cityKey, 'things')
      .filter((item) => item.slug.toLowerCase() !== activeSlug.toLowerCase())
      .slice(0, 6);
  }, [cityKey, activeSlug]);

  // Record visit in Passport on listing load
  useEffect(() => {
    if (!activity || !cityKey || !activeSlug) return;
    recordVisit({
      id: String(activity.id || activeSlug),
      slug: activeSlug,
      city: cityKey,
      cityLabel: resolvedCityLabel,
      category: 'things',
      name: activity.name,
      neighborhood: activity.neighborhood,
      rating: activity.google_rating,
      url: `/things/${cityKey}/${activeSlug}`,
    });
    setToastOpen(false);
  }, [activity, cityKey, activeSlug, resolvedCityLabel, recordVisit]);

  // Unlock Zellige Stamp when visitor scrolls down to the discovery section
  useEffect(() => {
    if (!activity || !cityKey || !activeSlug) return;
    const target = discoveryZoneRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          const { newlyStamped } = unlockStamp({
            id: String(activity.id || activeSlug),
            slug: activeSlug,
            city: cityKey,
            cityLabel: resolvedCityLabel,
            category: 'things',
            name: activity.name,
            neighborhood: activity.neighborhood,
            rating: activity.google_rating,
            url: `/things/${cityKey}/${activeSlug}`,
          });
          if (newlyStamped) {
            playTactileSound('stamp');
            setToastOpen(true);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [activity, cityKey, activeSlug, resolvedCityLabel, unlockStamp]);

  // Auto-hide StampToast after 5.5s
  useEffect(() => {
    if (!toastOpen) return;
    const timer = window.setTimeout(() => setToastOpen(false), 5500);
    return () => window.clearTimeout(timer);
  }, [toastOpen]);

  // If URL was mistakenly routed with slug='near-me', redirect to near me immediately
  if (isNearMe) {
    return <Navigate to={lp(`/things/${city || 'marrakech'}/near-me`)} replace />;
  }

  // Not found fallback
  if (!activity) {
    const cityLabel = city ? (city.charAt(0).toUpperCase() + city.slice(1).replace('_', ' ')) : 'Morocco';
    return (
      <div className="min-h-screen bg-[#FAF7F2] text-[#29231F] flex flex-col font-sans relative">
        <SEO title={t('things.notFoundTitle')} noIndex />
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/paper-grain.svg')] bg-repeat" />
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center relative z-10 py-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#EADBCE] text-[#C2613C] mb-4 shadow-2xs">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#29231F]">{t('things.notFoundTitle')}</h1>
          <p className="mt-2 text-xs sm:text-sm text-[#71685F] max-w-sm">
            {t('things.notFoundDesc')}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                if (window.history.length > 1) {
                  navigateLang(-1);
                } else {
                  navigateLang(`/things/${city || 'marrakech'}/near-me`);
                }
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#C2613C] hover:bg-[#A84E2B] px-4 py-2 text-xs font-bold text-white shadow-xs transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
              {t('things.backToNearMe')}
            </button>
            <LocalizedLink
              to={`/things/${city || 'marrakech'}/near-me`}
              className="inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-stone-50 border border-[#EADBCE] px-4 py-2 text-xs font-semibold text-[#29231F] shadow-2xs transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C2613C]" />
              {t('things.browseCityActivities', { city: cityLabel })}
            </LocalizedLink>
            <LocalizedLink
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full bg-transparent px-3 py-2 text-xs font-semibold text-[#71685F] hover:text-[#29231F] transition-colors"
            >
              {t('place.backToHome')}
            </LocalizedLink>
          </div>
        </div>
      </div>
    );
  }

  const cityLabel = getCityLabel(activity.city);
  const seoBundle = buildThingsSeo({
    activity,
    cityKey: String(activity.city || city || '').toLowerCase(),
    cityLabel,
    lang,
  });

  return (
    <div className="min-h-screen bg-[#FAF9F5] flex flex-col">
      <SEO
        title={seoBundle.title}
        description={seoBundle.description}
        canonical={seoBundle.canonical}
        type="article"
        image={seoBundle.image}
        schemaType={seoBundle.schemaType}
        schemaData={seoBundle.schemaData}
        faq={seoBundle.faq}
        breadcrumbs={seoBundle.breadcrumbs}
      />

      {/* Minimal header: back navigation + wordmark */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-sm border-b border-[#ece4d5]">
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between gap-2 px-4 py-3.5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigateLang(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#66757D] hover:text-[#173042] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>{t('common.back')}</span>
          </button>
          <LocalizedLink to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Moroccan Mate logo" className="w-7 h-7 object-contain" />
            <span className="font-display text-base font-bold text-[#173042]">Moroccan Mate</span>
          </LocalizedLink>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher compact />
            <button
              type="button"
              onClick={() => {
                playTactileSound('tick');
                setPassportOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white hover:bg-[#FAF3EA] border border-[#ece4d5] shadow-xs hover:border-[#C9A84C] transition-all cursor-pointer text-[#173042]"
              aria-label="Open Moroccan Mate Passport"
              title="Open Moroccan Mate Passport"
            >
              <Stamp className="w-3.5 h-3.5 text-[#C85A32]" />
              <span className="font-sans text-xs font-semibold hidden md:inline">Passport</span>
              {totalStampsCount > 0 && (
                <span className="bg-[#173042] text-[#F5D782] text-[10px] font-bold px-1.5 py-0.2 rounded-full leading-none tabular-nums">
                  {totalStampsCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                playTactileSound('tick');
                setFavoritesOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white hover:bg-[#FAF3EA] border border-[#ece4d5] shadow-xs hover:border-[#C9A84C] transition-all cursor-pointer text-[#29231F]"
              aria-label={t('common.viewSaved')}
              title={t('common.viewSaved')}
            >
              <Heart className={`w-3.5 h-3.5 ${bookmarks.length > 0 ? 'text-[#C85A32] fill-[#C85A32]' : 'text-[#71685F]'}`} />
              <span className="font-sans text-xs font-semibold hidden sm:inline">{t('common.saved')}</span>
              {bookmarks.length > 0 && (
                <span className="bg-[#C9A84C] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full leading-none tabular-nums">
                  {bookmarks.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Crawlable Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8 text-xs text-[#71685F] flex items-center gap-1.5 flex-wrap">
        <LocalizedLink to="/" className="hover:text-[#C9A84C] transition-colors">{t('common.home')}</LocalizedLink>
        <span className="text-stone-400">/</span>
        <LocalizedLink to={`/finder/${activity.city.toLowerCase()}/things-to-do`} className="hover:text-[#C9A84C] transition-colors">
          {t('things.thingsIn', { city: cityLabel })}
        </LocalizedLink>
        <span className="text-stone-400">/</span>
        <span className="text-[#29231F] font-semibold truncate max-w-[240px] sm:max-w-none">{activity.name}</span>
      </nav>

      {/* Main content: the complete activity listing page */}
      <motion.main
        key={`${cityKey}-${activeSlug}`}
        initial={prefersReducedMotion() ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex-1"
      >
        <ActivityTemplateView activity={activity} />

        {/* Interactive Discovery & Crawlable City Category Cross-Links */}
        <section
          ref={discoveryZoneRef}
          id="listing-play-discovery-zone"
          className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#ece4d5] space-y-8"
        >
          {/* 1. Booklet City Deck Swipe Bar */}
          <CityDeckNavigator
            cityKey={cityKey}
            cityLabel={cityLabel}
            category="things"
            categoryLabel={t('place.thingsToDo')}
            currentSlug={activeSlug}
            onQuickPeek={setPeekPlace}
          />

          {/* 2. Interactive Moroccan Brass Compass Roulette */}
          <CompassRouletteCard
            sectionRef={compassRef}
            cityKey={cityKey}
            cityLabel={cityLabel}
            currentCategory="things"
            currentSlug={activeSlug}
            onQuickPeek={setPeekPlace}
          />

          {/* 3. Sibling Activities with 3D Tilt + Quick Peek */}
          {sisterActivities.length > 0 && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#C85A32]">
                    {t('place.discoverMore')}
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-[#173042] mt-1">
                    {t('things.moreIn', { city: cityLabel })}
                  </h2>
                </div>
                <LocalizedLink
                  to={`/finder/${cityKey}/things-to-do`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A84C] hover:text-[#b38e34] transition-colors"
                >
                  <span>{t('things.allThingsIn', { city: cityLabel })}</span>
                  <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </LocalizedLink>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sisterActivities.map((sibling) => (
                  <TiltPeekCard
                    key={sibling.slug}
                    className="rounded-xl"
                    quickPeekLabel={`Quick peek ${sibling.name}`}
                    onQuickPeek={() => setPeekPlace(sibling)}
                  >
                    <LocalizedLink
                      to={sibling.url}
                      onClick={() => playTactileSound('tick')}
                      className="h-full p-4 rounded-xl bg-white border border-[#ece4d5] hover:border-[#C9A84C] hover:shadow-xs transition-all flex flex-col justify-between group"
                    >
                      <div className="pr-14">
                        <h3 className="font-serif text-base font-semibold text-[#173042] group-hover:text-[#C85A32] transition-colors line-clamp-1">
                          {sibling.name}
                        </h3>
                        {sibling.neighborhood && (
                          <p className="text-xs text-[#71685F] mt-1 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#C85A32]" />
                            <span>{sibling.neighborhood}</span>
                          </p>
                        )}
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs">
                        {sibling.rating ? (
                          <span className="font-bold text-amber-700 tabular-nums">★ {sibling.rating}</span>
                        ) : (
                          <span className="text-[#6B6156]">{sibling.reasonTag}</span>
                        )}
                        {sibling.priceLabel && (
                          <span className="font-semibold text-[#1F4B34]">{sibling.priceLabel}</span>
                        )}
                      </div>
                    </LocalizedLink>
                  </TiltPeekCard>
                ))}
              </div>
            </div>
          )}

          {/* City category cross-links */}
          <div className="bg-white/80 rounded-2xl p-5 border border-[#ece4d5]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#66757D] mb-3">
              {t('things.moreIn', { city: cityLabel })}
            </h3>
            <div className="flex flex-wrap gap-2">
              <LocalizedLink to={`/finder/${activity.city.toLowerCase()}/things-to-do`} className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FAF3EA] text-[#8A6D1F] border border-[#E8DAAA] hover:bg-[#C9A84C] hover:text-white transition-colors">
                ✨ {t('things.allThingsIn', { city: cityLabel })}
              </LocalizedLink>
              <LocalizedLink to={`/finder/${activity.city.toLowerCase()}/food`} className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-[#29231F] border border-[#ece4d5] hover:border-[#C9A84C] transition-colors">
                🍽️ {t('place.foodIn', { city: cityLabel })}
              </LocalizedLink>
              <LocalizedLink to={`/finder/${activity.city.toLowerCase()}/sleep`} className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-[#29231F] border border-[#ece4d5] hover:border-[#C9A84C] transition-colors">
                🛏️ {t('place.staysIn', { city: cityLabel })}
              </LocalizedLink>
              <LocalizedLink to={`/finder/${activity.city.toLowerCase()}/shopping`} className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-[#29231F] border border-[#ece4d5] hover:border-[#C9A84C] transition-colors">
                🛍️ {t('place.shoppingIn', { city: cityLabel })}
              </LocalizedLink>
            </div>
          </div>
        </section>
      </motion.main>

      {/* Footer strip */}
      <footer className="border-t border-[#ece4d5] bg-white">
        <div className="mx-auto w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-5 sm:px-6 lg:px-8">
          <LocalizedLink to="/" className="flex items-center gap-1.5">
            <img src={logoImg} alt="Moroccan Mate logo" className="w-5 h-5 object-contain opacity-80" />
            <span className="font-display text-sm font-bold text-[#173042]">Moroccan Mate</span>
          </LocalizedLink>
          <span className="text-xs text-[#66757D]">
            {activity.activity_type} · {formatDuration(activity.duration_minutes) || cityLabel} · {cityLabel}
          </span>
        </div>
      </footer>

      {/* Favorites Drawer */}
      <FavoritesDrawer isOpen={favoritesOpen} onClose={() => setFavoritesOpen(false)} />

      {/* Interactive Quick-Peek Drawer */}
      <QuickPeekDrawer
        place={peekPlace}
        onClose={() => setPeekPlace(null)}
        onSpinAnother={() => {
          if (!peekPlace) return;
          const nextPick = pickCompassSuggestion({
            cityKey,
            filterCategory: peekPlace.category,
            excludeSlug: activeSlug,
            excludeCategory: 'things',
            lastPickedSlug: peekPlace.slug,
          });
          if (nextPick) setPeekPlace(nextPick);
        }}
      />

      {/* Traveler Passport Modal */}
      <PassportModal
        isOpen={passportOpen}
        onClose={() => setPassportOpen(false)}
        currentCityKey={cityKey}
        currentCityLabel={cityLabel}
        onSpinCompass={() => {
          compassRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
      />

      {/* Stamp Unlock Toast */}
      <StampToast
        visible={toastOpen}
        placeName={activity.name}
        cityLabel={cityLabel}
        cityStampCount={cityStampCount}
        onOpenPassport={() => {
          setToastOpen(false);
          setPassportOpen(true);
        }}
        onDismiss={() => setToastOpen(false)}
      />
    </div>
  );
}
