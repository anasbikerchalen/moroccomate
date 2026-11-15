import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Heart, ChevronRight, MapPin, Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/ui/SEO';
import { LanguageSwitcher } from '../components/ui/LanguageSwitcher';
import { LocalizedLink } from '../components/ui/LocalizedLink';
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
import { getCityPopularIntents } from '../data/seo/searchIntents';

import { getActivityByCityAndSlug } from '../things-to-do';

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
  const bookmarks = useSavedStore((state) => state.bookmarks);

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

  const { category, slug, listing, redirectUrl } = resolved;

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
      for (const [s, l] of index.bySlug.entries()) {
        if (s !== slug) {
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
  }, [cityKey, category, slug]);

  // High-intent search filter links for this city
  const popularIntents = useMemo(() => {
    if (!cityKey || !category) return [];
    try {
      return getCityPopularIntents(cityKey, category, lang).slice(0, 5);
    } catch {
      return [];
    }
  }, [cityKey, category, lang]);

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

  const cityLabel = cityMap[cityKey]?.name || (cityKey ? cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace(/_/g, ' ') : 'Morocco');
  const placeName = listing.name || listing.title || 'Place';
  const categoryLabel = CATEGORY_LABELS_I18N[lang]?.[category!] || PLACE_CATEGORY_LABEL[category!];
  const isSleep = category === 'sleep';
  const ownerAnswer = isSleep ? getStayOwnerAnswer(listing) : '';

  const seoBundle = buildPlaceSeo({
    listing,
    category: category!,
    cityKey,
    cityLabel,
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
      />

      {/* Minimal header: back navigation + wordmark */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-sm border-b border-[#ece4d5]">
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between gap-2 px-4 py-3.5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-stone-50 border border-[#ece4d5] shadow-xs text-sm font-bold text-[#173042] hover:border-[#C9A84C] transition-all cursor-pointer active:scale-95"
            title={t('place.backToListings')}
          >
            <ArrowLeft className="w-4 h-4 text-[#173042] rtl:rotate-180" />
            <span>{t('common.back')}</span>
          </button>
          <LocalizedLink to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Moroccan Mate logo" className="w-7 h-7 object-contain" />
            <span className="font-display text-base font-bold text-[#173042]">Moroccan Mate</span>
          </LocalizedLink>
          <div className="flex items-center gap-2">
            <LanguageSwitcher compact />
            <button
              type="button"
              onClick={() => setFavoritesOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#FAF3EA] border border-[#ece4d5] shadow-xs hover:border-[#C9A84C] transition-all cursor-pointer text-[#29231F]"
              aria-label={t('common.viewSaved')}
              title={t('common.viewSaved')}
            >
              <Heart className={`w-3.5 h-3.5 ${bookmarks.length > 0 ? 'text-[#C85A32] fill-[#C85A32]' : 'text-[#71685F]'}`} />
              <span className="font-sans text-xs font-semibold hidden sm:inline">{t('common.saved')}</span>
              {bookmarks.length > 0 && (
                <span className="bg-[#C9A84C] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full leading-none">
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
      <main className="w-full flex-1">
        <DetailView item={listing} onBack={handleBack} category={category} />

        {/* Crawlable Internal Linking Network: Sibling places & City guides */}
        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 border-t border-[#ece4d5] mt-12">
          {category === 'food' ? (
            <>
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

              {/* 3 Complementary Trip Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <LocalizedLink
                  to={`/finder/${cityKey}/sleep`}
                  className="p-5 rounded-2xl bg-white border border-[#ece4d5] hover:border-[#C9A84C] hover:shadow-md transition-all flex flex-col justify-between group"
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

                <LocalizedLink
                  to={`/finder/${cityKey}/things-to-do`}
                  className="p-5 rounded-2xl bg-white border border-[#ece4d5] hover:border-[#C9A84C] hover:shadow-md transition-all flex flex-col justify-between group"
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

                <LocalizedLink
                  to={`/finder/${cityKey}/shopping`}
                  className="p-5 rounded-2xl bg-white border border-[#ece4d5] hover:border-[#C9A84C] hover:shadow-md transition-all flex flex-col justify-between group"
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
              </div>
            </>
          ) : (
            <>
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

              {/* Sibling place cards */}
              {sisterPlaces.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {sisterPlaces.map((sibling) => (
                    <LocalizedLink
                      key={sibling.slug}
                      to={`/place/${cityKey}/${category}/${sibling.slug}`}
                      className="p-4 rounded-xl bg-white border border-[#ece4d5] hover:border-[#C9A84C] hover:shadow-xs transition-all flex flex-col justify-between group"
                    >
                      <div>
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
                        <div className="mt-3 text-xs font-bold text-amber-700">
                          ★ {sibling.rating}
                        </div>
                      )}
                    </LocalizedLink>
                  ))}
                </div>
              )}
            </>
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
      </main>

      {/* Footer strip */}
      <footer className="border-t border-[#ece4d5] bg-white">
        <div className="mx-auto w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-5 sm:px-6 lg:px-8">
          <LocalizedLink to="/" className="flex items-center gap-1.5">
            <img src={logoImg} alt="Moroccan Mate logo" className="w-5 h-5 object-contain opacity-80" />
            <span className="font-display text-sm font-bold text-[#173042]">Moroccan Mate</span>
          </LocalizedLink>
          <span className="text-xs text-[#66757D] capitalize">
            {categoryLabel} · {listing.neighborhood || cityLabel} · {cityLabel}
          </span>
        </div>
      </footer>

      {/* Favorites Drawer */}
      <FavoritesDrawer isOpen={favoritesOpen} onClose={() => setFavoritesOpen(false)} />
    </div>
  );
}
