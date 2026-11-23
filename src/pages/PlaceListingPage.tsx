import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, ChevronRight, MapPin, Compass, Stamp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/ui/SEO';
import { LanguageSwitcher } from '../components/ui/LanguageSwitcher';
import { LocalizedLink } from '../components/ui/LocalizedLink';
import { SiteFooter } from '../components/layout/SiteFooter';
import { useLangPath } from '../utils/localeRouting';
import { CATEGORY_LABELS_I18N } from '../data/seo/i18nSeo';
import { buildPlaceSeo } from '../data/seo/seoEngine';
import DetailView from '../components/finder/DetailView';
import { useSavedStore } from '../state/savedStore';
import FavoritesDrawer from '../components/finder/FavoritesDrawer';
import {
  getPlaceBySlug,
  getPlaceSlugById,
  getPlaceIndex,
  normalizePlaceCategory,
  PLACE_CATEGORY_LABEL,
  type PlaceUrlCategory,
} from '../listings/placeRoutes';
import { getListingRating } from '../listings/utils';
import { cityMap } from '../data/cities';
import logoImg from '../assets/images/logo.png';
import { getStayOwnerAnswer } from '../engine/stayAdapter';
import { getCityPopularIntents, doesListingMatchIntent } from '../data/seo/searchIntents';
import { hasListingTranslations, localizeListing } from '../listings/translations';
import { getPlaceUiCopy, localizeCityName } from '../data/placeUiI18n';

import { getActivityByCityAndSlug } from '../things-to-do';
import { usePassportStore } from '../state/passportStore';
import {
  getDeckPlaceBySlug,
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
 * Morocco Finder — individual place page.
 * Route: /place/:city/:category/:slug  -> a real, shareable, indexable page
 * for every Eat / Sleep / Shopping listing. The URL uses the place NAME
 * (e.g. /place/marrakech/food/le-jardin), never a random id.
 */
export default function PlaceListingPage() {
  const { city, category: categoryParam, slug: rawSlug, categoryOrSlug } = useParams<{
    city: string;
    category?: string;
    slug?: string;
    categoryOrSlug?: string;
  }>();
  const { t } = useTranslation();
  const { lang, navigateLang } = useLangPath();
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

  const cityKey = String(city || '').toLowerCase();

  // Synchronous resolution of category, slug, listing, and any needed canonical redirect
  const resolved = useMemo(() => {
    if (!cityKey) return { category: null, slug: undefined, listing: undefined, redirectUrl: null };

    // Case 1: 3-segment URL (/place/:city/:category/:slug)
    if (categoryParam && rawSlug) {
      const normalizedCat = normalizePlaceCategory(categoryParam);
      if (normalizedCat) {
        let found = getPlaceBySlug(cityKey, normalizedCat, rawSlug);
        let canonicalSlug = rawSlug;

        // If not found by slug, check if rawSlug was an internal listing ID
        if (!found) {
          const mappedSlug = getPlaceSlugById(cityKey, normalizedCat, rawSlug);
          if (mappedSlug) {
            found = getPlaceBySlug(cityKey, normalizedCat, mappedSlug);
            canonicalSlug = mappedSlug;
          }
        }

        const needsCanonicalRedirect =
          categoryParam.toLowerCase() !== normalizedCat || canonicalSlug !== rawSlug;

        return {
          category: normalizedCat,
          slug: canonicalSlug,
          listing: found,
          redirectUrl: needsCanonicalRedirect
            ? `/place/${cityKey}/${normalizedCat}/${canonicalSlug}`
            : null,
        };
      }
    }

    // Case 2: 2-segment URL (/place/:city/:categoryOrSlug)
    if (categoryOrSlug && !rawSlug) {
      // 2a. If it's a category synonym (e.g. /place/marrakech/sleep)
      const maybeCat = normalizePlaceCategory(categoryOrSlug);
      if (maybeCat) {
        return {
          category: maybeCat,
          slug: undefined,
          listing: undefined,
          redirectUrl: `/finder/${cityKey}/${maybeCat}`,
        };
      }

      // 2b. Search across all place categories synchronously for this slug or id
      const categories: PlaceUrlCategory[] = ['food', 'sleep', 'shopping'];
      for (const cat of categories) {
        let found = getPlaceBySlug(cityKey, cat, categoryOrSlug);
        let canonicalSlug = categoryOrSlug;
        if (!found) {
          const mappedSlug = getPlaceSlugById(cityKey, cat, categoryOrSlug);
          if (mappedSlug) {
            found = getPlaceBySlug(cityKey, cat, mappedSlug);
            canonicalSlug = mappedSlug;
          }
        }
        if (found) {
          return {
            category: cat,
            slug: canonicalSlug,
            listing: found,
            redirectUrl: `/place/${cityKey}/${cat}/${canonicalSlug}`,
          };
        }
      }

      // 2c. Check if it's a Things to Do activity
      const activity = getActivityByCityAndSlug(cityKey, categoryOrSlug);
      if (activity) {
        return {
          category: null,
          slug: activity.slug || categoryOrSlug,
          listing: undefined,
          redirectUrl: `/things/${cityKey}/${activity.slug || categoryOrSlug}`,
        };
      }
    }

    return { category: null, slug: undefined, listing: undefined, redirectUrl: null };
  }, [cityKey, categoryParam, rawSlug, categoryOrSlug]);

  const { category, slug, listing: rawListing, redirectUrl } = resolved;

  const listing = useMemo(
    () => (rawListing ? localizeListing(rawListing, lang) : undefined),
    [rawListing, lang]
  );

  // Execute canonical URL replacement in history without flashing "Place not found"
  useEffect(() => {
    if (redirectUrl) {
      navigateLang(redirectUrl, { replace: true });
    }
  }, [redirectUrl, navigateLang]);

  // Sibling places in the same city for crawlable internal linking
  const sisterPlaces = useMemo(() => {
    if (!cityKey || !category) return [];
    try {
      const index = getPlaceIndex(cityKey, category);
      const siblings: Array<{ slug: string; name: string; neighborhood?: string; rating?: number }> = [];
      for (const [s, rawEntry] of index.bySlug.entries()) {
        if (s !== slug) {
          const l = localizeListing(rawEntry, lang);
          const r = getListingRating(l);
          siblings.push({
            slug: s,
            name: l.name || l.title || 'Place',
            neighborhood: l.neighborhood,
            rating: r?.averageRating,
          });
          if (siblings.length >= 6) break;
        }
      }
      return siblings;
    } catch {
      return [];
    }
  }, [cityKey, category, slug, lang]);

  // High-intent search filter links for this city (only intents backed by >=3 places)
  const popularIntents = useMemo(() => {
    if (!cityKey || !category) return [];
    try {
      const candidates = getCityPopularIntents(cityKey, category, lang);
      const index = getPlaceIndex(cityKey, category);
      const allListings = Array.from(index.bySlug.values());
      return candidates
        .filter((intent) => {
          let matches = 0;
          for (const l of allListings) {
            if (doesListingMatchIntent(l, intent)) matches++;
            if (matches >= 3) return true;
          }
          return false;
        })
        .slice(0, 6);
    } catch {
      return [];
    }
  }, [cityKey, category, lang]);

  const totalStampsCount = useMemo(
    () => Object.values(passportEntries).filter((e) => e.stamped).length,
    [passportEntries]
  );

  const rawCityLabel = cityMap[cityKey]?.name || (cityKey ? cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace(/_/g, ' ') : 'Morocco');
  const cityLabel = localizeCityName(cityKey, rawCityLabel, lang);
  const ui = getPlaceUiCopy(lang);
  const placeName = listing ? (listing.name || listing.title || 'Place') : '';

  // Record visit in Passport on listing load
  useEffect(() => {
    if (!listing || !category || !slug) return;
    const r = getListingRating(listing);
    recordVisit({
      id: String(listing.id || slug),
      slug,
      city: cityKey,
      cityLabel,
      category,
      name: placeName,
      neighborhood: listing.neighborhood,
      rating: r?.averageRating,
      url: `/place/${cityKey}/${category}/${slug}`,
    });
    setToastOpen(false);
  }, [listing, category, slug, cityKey, cityLabel, placeName, recordVisit]);

  // Unlock Zellige Stamp when visitor scrolls down to the discovery section
  useEffect(() => {
    if (!listing || !category || !slug) return;
    const target = discoveryZoneRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          const r = getListingRating(listing);
          const { newlyStamped } = unlockStamp({
            id: String(listing.id || slug),
            slug,
            city: cityKey,
            cityLabel,
            category,
            name: placeName,
            neighborhood: listing.neighborhood,
            rating: r?.averageRating,
            url: `/place/${cityKey}/${category}/${slug}`,
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
  }, [listing, category, slug, cityKey, cityLabel, placeName, unlockStamp]);

  // Auto-hide StampToast after 5.5s
  useEffect(() => {
    if (!toastOpen) return;
    const timer = window.setTimeout(() => setToastOpen(false), 5500);
    return () => window.clearTimeout(timer);
  }, [toastOpen]);

  const cityStampCount = useMemo(
    () =>
      Object.values(passportEntries).filter(
        (e) => e.stamped && e.city === cityKey
      ).length,
    [passportEntries, cityKey]
  );

  // Not found fallback
  if (!listing) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] flex flex-col">
        <SEO title={t('place.notFoundTitle')} noIndex />
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-[#173042]">{t('place.notFoundTitle')}</h1>
          <p className="mt-2 text-sm text-[#66757D] max-w-sm">
            {t('place.notFoundDesc')}
          </p>
          <button
            type="button"
            onClick={() => navigateLang('/')}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#DFAF4F] px-6 py-3 text-sm font-bold text-[#173042] shadow-xs transition-all hover:bg-[#d09c39] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {t('place.backToHome')}
          </button>
        </div>
      </div>
    );
  }

  const categoryLabel = CATEGORY_LABELS_I18N[lang]?.[category!] || PLACE_CATEGORY_LABEL[category!];
  const isSleep = category === 'sleep';
  const ownerAnswer = isSleep ? getStayOwnerAnswer(listing) : '';

  const seoBundle = buildPlaceSeo({
    listing,
    category: category!,
    cityKey,
    cityLabel: rawCityLabel,
    slug: slug!,
    lang,
    ownerAnswer,
  });

  const handleBack = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (window.history.state && typeof window.history.state.idx === 'number' && window.history.state.idx > 0) {
      navigateLang(-1);
    } else {
      // Direct visit or refreshed — send to the clean city results browse page
      const targetCategory = category || 'food';
      navigateLang(`/finder/${cityKey}/${targetCategory}`);
    }
  };

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
        disableHreflang={!hasListingTranslations(listing.id)}
      />

      {/* Minimal header: back navigation + wordmark */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-sm border-b border-[#ece4d5]">
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between gap-2 px-3 py-2.5 sm:px-6 sm:py-3.5 lg:px-8">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-white hover:bg-stone-50 border border-[#ece4d5] shadow-xs text-xs sm:text-sm font-bold text-[#173042] hover:border-[#C9A84C] transition-all cursor-pointer active:scale-95 shrink-0"
            title={t('place.backToListings')}
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#173042] rtl:rotate-180 shrink-0" />
            <span>{t('common.back')}</span>
          </button>
          <LocalizedLink to="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0 min-w-0">
            <img src={logoImg} alt="Moroccan Mate logo" className="w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0" />
            <span className="font-display text-sm sm:text-base font-bold text-[#173042] whitespace-nowrap">Moroccan Mate</span>
          </LocalizedLink>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <LanguageSwitcher compact />
            <button
              type="button"
              onClick={() => {
                playTactileSound('tick');
                setPassportOpen(true);
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#FAF3EA] border border-[#ece4d5] shadow-xs hover:border-[#C9A84C] transition-all cursor-pointer text-[#173042]"
              aria-label={ui.play.openPassportAria}
              title={ui.play.openPassportAria}
            >
              <Stamp className="w-3.5 h-3.5 text-[#C85A32]" />
              <span className="font-sans text-xs font-semibold">{ui.play.passport}</span>
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
        <ChevronRight className="w-3 h-3 text-stone-400 rtl:rotate-180" />
        <LocalizedLink to={`/finder/${cityKey}/${category}`} className="hover:text-[#C9A84C] transition-colors">
          {categoryLabel} · {cityLabel}
        </LocalizedLink>
        <ChevronRight className="w-3 h-3 text-stone-400 rtl:rotate-180" />
        <span className="text-[#29231F] font-semibold truncate max-w-[240px] sm:max-w-none">{placeName}</span>
      </nav>

      {/* Main content: the full place detail */}
      <motion.main
        key={`${cityKey}-${category}-${slug}`}
        initial={prefersReducedMotion() ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex-1"
      >
        <DetailView item={listing} onBack={handleBack} category={category} />

        {/* Interactive Discovery & Crawlable Internal Linking Network */}
        <section
          ref={discoveryZoneRef}
          id="listing-play-discovery-zone"
          className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 border-t border-[#ece4d5] mt-12 space-y-8"
        >
          {/* Mobile Traveler Passport Entry (kept out of crowded mobile top bar) */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => {
                playTactileSound('tick');
                setPassportOpen(true);
              }}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white border border-[#E5D9C5] hover:border-[#C9A84C] shadow-2xs transition-all cursor-pointer text-start"
              aria-label={ui.play.openPassportAria}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-9 h-9 rounded-xl bg-[#FAF3EA] border border-[#EADBCE] flex items-center justify-center shrink-0">
                  <Stamp className="w-4 h-4 text-[#C85A32]" />
                </span>
                <div className="min-w-0">
                  <span className="block font-serif text-sm font-bold text-[#173042]">{ui.play.travelerPassport}</span>
                  <span className="block text-[11px] text-[#71685F] truncate">
                    {totalStampsCount > 0
                      ? ui.play.placesStamped(totalStampsCount)
                      : ui.play.collectStamps}
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#173042] text-[#F5D782] text-[11px] font-bold shrink-0 tabular-nums">
                {totalStampsCount > 0 ? `${totalStampsCount} ★` : ui.play.openLabel}
              </span>
            </button>
          </div>

          {/* 1. Booklet City Deck Swipe Bar (Prev / Next in City) */}
          {category && slug && (
            <CityDeckNavigator
              cityKey={cityKey}
              cityLabel={cityLabel}
              category={category}
              categoryLabel={categoryLabel}
              currentSlug={slug}
              onQuickPeek={setPeekPlace}
            />
          )}

          {/* 2. Interactive Moroccan Brass Compass Roulette */}
          {category && slug && (
            <CompassRouletteCard
              sectionRef={compassRef}
              cityKey={cityKey}
              cityLabel={cityLabel}
              currentCategory={category}
              currentSlug={slug}
              onQuickPeek={setPeekPlace}
            />
          )}

          {category === 'food' ? (
            <div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#C85A32]">{t('place.planYourTrip')}</p>
                  <h2 className="font-serif text-2xl font-bold text-[#173042] mt-1">
                    {t('place.completeJourney', { city: cityLabel })}
                  </h2>
                </div>
                <LocalizedLink
                  to={`/finder/${cityKey}/food`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A84C] hover:text-[#b38e34] transition-colors"
                >
                  <span>{t('place.exploreAllDining', { city: cityLabel })}</span>
                  <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </LocalizedLink>
              </div>

              {/* 3 Complementary Trip Pillars with 3D Tilt + Quick Peek */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <TiltPeekCard
                  className="rounded-2xl"
                  quickPeekLabel={ui.play.peekStay(cityLabel)}
                  onQuickPeek={() => {
                    const pick = pickCompassSuggestion({ cityKey, filterCategory: 'sleep', lang });
                    if (pick) setPeekPlace(pick);
                  }}
                >
                  <LocalizedLink
                    to={`/finder/${cityKey}/sleep`}
                    className="h-full p-5 rounded-2xl bg-white border border-[#ece4d5] hover:border-[#C9A84C] hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-2xl mb-2 block">🛏️</span>
                      <h3 className="font-serif text-lg font-semibold text-[#173042] group-hover:text-[#C85A32] transition-colors">
                        {t('place.whereToStay')}
                      </h3>
                      <p className="text-xs text-[#71685F] mt-1.5 leading-relaxed">
                        {t('place.whereToStayDesc', { city: cityLabel })}
                      </p>
                    </div>
                    <span className="mt-4 text-xs font-bold text-[#C9A84C] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {t('place.exploreStays')} <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </span>
                  </LocalizedLink>
                </TiltPeekCard>

                <TiltPeekCard
                  className="rounded-2xl"
                  quickPeekLabel={ui.play.peekActivity(cityLabel)}
                  onQuickPeek={() => {
                    const pick = pickCompassSuggestion({ cityKey, filterCategory: 'things', lang });
                    if (pick) setPeekPlace(pick);
                  }}
                >
                  <LocalizedLink
                    to={`/finder/${cityKey}/things-to-do`}
                    className="h-full p-5 rounded-2xl bg-white border border-[#ece4d5] hover:border-[#C9A84C] hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-2xl mb-2 block">✨</span>
                      <h3 className="font-serif text-lg font-semibold text-[#173042] group-hover:text-[#C85A32] transition-colors">
                        {t('place.thingsToDo')}
                      </h3>
                      <p className="text-xs text-[#71685F] mt-1.5 leading-relaxed">
                        {t('place.thingsToDoDesc', { city: cityLabel })}
                      </p>
                    </div>
                    <span className="mt-4 text-xs font-bold text-[#C9A84C] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {t('place.exploreActivities')} <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </span>
                  </LocalizedLink>
                </TiltPeekCard>

                <TiltPeekCard
                  className="rounded-2xl"
                  quickPeekLabel={ui.play.peekShop(cityLabel)}
                  onQuickPeek={() => {
                    const pick = pickCompassSuggestion({ cityKey, filterCategory: 'shopping', lang });
                    if (pick) setPeekPlace(pick);
                  }}
                >
                  <LocalizedLink
                    to={`/finder/${cityKey}/shopping`}
                    className="h-full p-5 rounded-2xl bg-white border border-[#ece4d5] hover:border-[#C9A84C] hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-2xl mb-2 block">🛍️</span>
                      <h3 className="font-serif text-lg font-semibold text-[#173042] group-hover:text-[#C85A32] transition-colors">
                        {t('place.artisanShopping')}
                      </h3>
                      <p className="text-xs text-[#71685F] mt-1.5 leading-relaxed">
                        {t('place.artisanShoppingDesc', { city: cityLabel })}
                      </p>
                    </div>
                    <span className="mt-4 text-xs font-bold text-[#C9A84C] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {t('place.exploreShopping')} <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </span>
                  </LocalizedLink>
                </TiltPeekCard>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#C85A32]">{t('place.discoverMore')}</p>
                  <h2 className="font-serif text-2xl font-bold text-[#173042] mt-1">
                    {t('place.moreInCategory', { category: categoryLabel, city: cityLabel })}
                  </h2>
                </div>
                <LocalizedLink
                  to={`/finder/${cityKey}/${category}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A84C] hover:text-[#b38e34] transition-colors"
                >
                  <span>{t('place.viewAllInCity', { city: cityLabel, category: categoryLabel.toLowerCase() })}</span>
                  <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </LocalizedLink>
              </div>

              {/* Sibling place cards with 3D Tilt + Quick Peek */}
              {sisterPlaces.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sisterPlaces.map((sibling) => (
                    <TiltPeekCard
                      key={sibling.slug}
                      className="rounded-xl"
                      quickPeekLabel={ui.play.quickPeekAria(sibling.name)}
                      onQuickPeek={() => {
                        const full = category ? getDeckPlaceBySlug(cityKey, category, sibling.slug, lang) : null;
                        if (full) setPeekPlace(full);
                      }}
                    >
                      <LocalizedLink
                        to={`/place/${cityKey}/${category}/${sibling.slug}`}
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
                        {sibling.rating && (
                          <div className="mt-3 text-xs font-bold text-amber-700 tabular-nums">
                            ★ {sibling.rating}
                          </div>
                        )}
                      </LocalizedLink>
                    </TiltPeekCard>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* City category & search intent cross-links */}
          <div className="bg-white/80 rounded-2xl p-5 border border-[#ece4d5] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#66757D] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C9A84C]" />
              {t('place.exploreByCategory', { city: cityLabel })}
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              <LocalizedLink to={`/finder/${cityKey}/food`} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] text-[#29231F] hover:bg-[#FAF3EA] hover:text-[#C85A32] border border-[#ece4d5] transition-colors">
                🍽️ {t('place.foodIn', { city: cityLabel })}
              </LocalizedLink>
              <LocalizedLink to={`/finder/${cityKey}/sleep`} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] text-[#29231F] hover:bg-[#FAF3EA] hover:text-[#C85A32] border border-[#ece4d5] transition-colors">
                🛏️ {t('place.staysIn', { city: cityLabel })}
              </LocalizedLink>
              <LocalizedLink to={`/finder/${cityKey}/things-to-do`} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] text-[#29231F] hover:bg-[#FAF3EA] hover:text-[#C85A32] border border-[#ece4d5] transition-colors">
                ✨ {t('place.thingsIn', { city: cityLabel })}
              </LocalizedLink>
              <LocalizedLink to={`/finder/${cityKey}/shopping`} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] text-[#29231F] hover:bg-[#FAF3EA] hover:text-[#C85A32] border border-[#ece4d5] transition-colors">
                🛍️ {t('place.shoppingIn', { city: cityLabel })}
              </LocalizedLink>
              {popularIntents.map((pi) => (
                <LocalizedLink
                  key={pi.slug}
                  to={`/finder/${cityKey}/${category}/${pi.slug}`}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF3EA] text-[#8A6D1F] hover:bg-[#C9A84C] hover:text-white border border-[#E8DAAA] transition-colors"
                >
                  {pi.icon} {pi.label} · {cityLabel}
                </LocalizedLink>
              ))}
            </div>
          </div>
        </section>
      </motion.main>

      <SiteFooter
        variant="compact"
        contextLabel={`${categoryLabel} · ${listing.neighborhood || cityLabel} · ${cityLabel}`}
      />

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
            excludeSlug: slug,
            excludeCategory: category || undefined,
            lastPickedSlug: peekPlace.slug,
            lang,
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
        placeName={placeName}
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
