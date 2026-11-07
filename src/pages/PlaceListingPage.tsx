import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ChevronRight, MapPin, Compass } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import DetailView from '../components/finder/DetailView';
import { useSavedStore } from '../state/savedStore';
import FavoritesDrawer from '../components/finder/FavoritesDrawer';
import {
  getPlaceBySlug,
  getPlaceSlugById,
  getPlaceIndex,
  normalizePlaceCategory,
  PLACE_CATEGORY_LABEL,
  PLACE_SCHEMA_TYPE,
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
  const navigate = useNavigate();
  const location = useLocation();
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
      navigate(redirectUrl, { replace: true });
    }
  }, [redirectUrl, navigate]);

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
      return getCityPopularIntents(cityKey, category).slice(0, 5);
    } catch {
      return [];
    }
  }, [cityKey, category]);

  // Not found fallback
  if (!listing) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] flex flex-col">
        <SEO title="Place not found" />
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-[#173042]">Place not found</h1>
          <p className="mt-2 text-sm text-[#66757D] max-w-sm">
            This place may have been moved or removed. Discover other places in Morocco instead.
          </p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#DFAF4F] px-6 py-3 text-sm font-bold text-[#173042] shadow-xs transition-all hover:bg-[#d09c39] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const cityLabel = cityMap[cityKey]?.name || (cityKey ? cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace(/_/g, ' ') : 'Morocco');
  const placeName = listing.name || listing.title || 'Place';
  const categoryLabel = PLACE_CATEGORY_LABEL[category!];
  const isSleep = category === 'sleep';
  const isEat = category === 'food';
  const isShopping = category === 'shopping';
  const price = isSleep
    ? (listing.pricePerNight ?? 0)
    : (listing.pricePerPerson ?? (listing.filter?.pricePerPerson ?? 0));
  const ownerAnswer = isSleep ? getStayOwnerAnswer(listing) : '';
  const rawDescription = String(listing.description || listing.short_description || '');
  const description = isSleep && price > 0
    ? `Price from ${price} MAD/night. ${rawDescription.slice(0, 115)}`
    : isEat && price > 0
      ? `Avg ${price} MAD/person. ${rawDescription.slice(0, 120)}`
      : rawDescription.slice(0, 155);
  const rating = getListingRating(listing);
  const image = listing.nonCopyrightImage || listing.images?.[0] || undefined;
  const canonical = `/place/${cityKey}/${category}/${slug}`;

  // Structured data for Google rich results
  const schemaData: Record<string, any> = {
    name: placeName,
    description,
    address: listing.address || `${listing.neighborhood || cityLabel}, Morocco`,
    ...(listing.coordinates ? { geo: { latitude: listing.coordinates.lat, longitude: listing.coordinates.lng } } : {}),
    ...(rating && rating.averageRating > 0 && rating.totalReviews > 0
      ? { aggregateRating: { '@type': 'AggregateRating', ratingValue: rating.averageRating, reviewCount: rating.totalReviews } }
      : {}),
    ...(isSleep && price > 0
      ? {
          priceRange: `${price} MAD`,
          offers: {
            '@type': 'Offer',
            price,
            priceCurrency: 'MAD',
            availability: 'https://schema.org/InStock',
          },
          ...(Array.isArray(listing.amenities) && listing.amenities.length > 0
            ? {
                amenityFeature: listing.amenities.slice(0, 10).map((a: string) => ({
                  '@type': 'LocationFeatureSpecification',
                  name: a,
                  value: true,
                })),
              }
            : {}),
        }
      : {}),
    ...(isEat
      ? {
          ...(price > 0 ? { priceRange: `${price} MAD` } : {}),
          ...((listing.foodStyles || listing.quiz?.foodStyles)
            ? { servesCuisine: listing.foodStyles || listing.quiz?.foodStyles }
            : {}),
          ...(listing.reservationMethod ? { acceptsReservations: true } : {}),
        }
      : {}),
    ...(isShopping
      ? {
          currenciesAccepted: 'MAD, EUR, USD',
          paymentAccepted: 'Cash, Credit Card',
        }
      : {}),
  };

  const handleBack = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (window.history.state && typeof window.history.state.idx === 'number' && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      // Direct visit or refreshed — send to the clean city results browse page
      const targetCategory = category || 'food';
      navigate(`/finder/${cityKey}/${targetCategory}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] flex flex-col">
      <SEO
        title={`${placeName} — ${categoryLabel} in ${cityLabel}`}
        description={description}
        canonical={canonical}
        type="article"
        image={image}
        schemaType={PLACE_SCHEMA_TYPE[category!]}
        schemaData={schemaData}
        faq={isSleep && ownerAnswer ? [{ question: `Who is the owner of ${placeName}?`, answer: ownerAnswer }] : undefined}
        breadcrumbs={[
          { name: 'Moroccan Mate', item: '/' },
          { name: `${categoryLabel} in ${cityLabel}`, item: `/finder/${cityKey}/${category}` },
          { name: placeName, item: canonical },
        ]}
      />

      {/* Minimal header: back navigation + wordmark */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-sm border-b border-[#ece4d5]">
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-stone-50 border border-[#ece4d5] shadow-xs text-sm font-bold text-[#173042] hover:border-[#C9A84C] transition-all cursor-pointer active:scale-95"
            title="Back to listings"
          >
            <ArrowLeft className="w-4 h-4 text-[#173042]" />
            Back
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Moroccan Mate logo" className="w-7 h-7 object-contain" />
            <span className="font-display text-base font-bold text-[#173042]">Moroccan Mate</span>
          </Link>
          <button
            type="button"
            onClick={() => setFavoritesOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#FAF3EA] border border-[#ece4d5] shadow-xs hover:border-[#C9A84C] transition-all cursor-pointer text-[#29231F]"
            aria-label="View saved places"
            title="View saved places"
          >
            <Heart className={`w-3.5 h-3.5 ${bookmarks.length > 0 ? 'text-[#C85A32] fill-[#C85A32]' : 'text-[#71685F]'}`} />
            <span className="font-sans text-xs font-semibold hidden sm:inline">Saved</span>
            {bookmarks.length > 0 && (
              <span className="bg-[#C9A84C] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full leading-none">
                {bookmarks.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Crawlable Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8 text-xs text-[#71685F] flex items-center gap-1.5 flex-wrap">
        <Link to="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 text-stone-400" />
        <Link to={`/finder/${cityKey}/${category}`} className="hover:text-[#C9A84C] transition-colors">
          {categoryLabel} in {cityLabel}
        </Link>
        <ChevronRight className="w-3 h-3 text-stone-400" />
        <span className="text-[#29231F] font-semibold truncate max-w-[240px] sm:max-w-none">{placeName}</span>
      </nav>

      {/* Main content: the full place detail */}
      <main className="w-full flex-1">
        <DetailView item={listing} onBack={handleBack} category={category} />

        {/* Crawlable Internal Linking Network: Sibling places & City guides */}
        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 border-t border-[#ece4d5] mt-12">
          {category === 'food' ? (
            /* For Food pages: EatDetailView already showed similar dining spots.
               Here we provide complementary trip planning (Stays, Things to Do, Shopping) */
            <>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#C85A32]">Plan Your Trip</p>
                  <h2 className="font-serif text-2xl font-bold text-[#173042] mt-1">
                    Complete Your {cityLabel} Journey
                  </h2>
                </div>
                <Link
                  to={`/finder/${cityKey}/food`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A84C] hover:text-[#b38e34] transition-colors"
                >
                  <span>Explore all {cityLabel} dining</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 3 Complementary Trip Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <Link
                  to={`/finder/${cityKey}/sleep`}
                  className="p-5 rounded-2xl bg-white border border-[#ece4d5] hover:border-[#C9A84C] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-2xl mb-2 block">🛏️</span>
                    <h3 className="font-serif text-lg font-semibold text-[#173042] group-hover:text-[#C85A32] transition-colors">
                      Where to Stay
                    </h3>
                    <p className="text-xs text-[#71685F] mt-1.5 leading-relaxed">
                      Handpicked riads, boutique desert retreats, and peaceful stays in {cityLabel}.
                    </p>
                  </div>
                  <span className="mt-4 text-xs font-bold text-[#C9A84C] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Explore stays <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <Link
                  to={`/finder/${cityKey}/things-to-do`}
                  className="p-5 rounded-2xl bg-white border border-[#ece4d5] hover:border-[#C9A84C] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-2xl mb-2 block">✨</span>
                    <h3 className="font-serif text-lg font-semibold text-[#173042] group-hover:text-[#C85A32] transition-colors">
                      Things to Do
                    </h3>
                    <p className="text-xs text-[#71685F] mt-1.5 leading-relaxed">
                      Guided medina walks, hammams, day trips, and local adventures in {cityLabel}.
                    </p>
                  </div>
                  <span className="mt-4 text-xs font-bold text-[#C9A84C] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Explore activities <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>

                <Link
                  to={`/finder/${cityKey}/shopping`}
                  className="p-5 rounded-2xl bg-white border border-[#ece4d5] hover:border-[#C9A84C] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-2xl mb-2 block">🛍️</span>
                    <h3 className="font-serif text-lg font-semibold text-[#173042] group-hover:text-[#C85A32] transition-colors">
                      Artisan Shopping
                    </h3>
                    <p className="text-xs text-[#71685F] mt-1.5 leading-relaxed">
                      Authentic souks, woven rugs, ceramics, leatherwork, and spices in {cityLabel}.
                    </p>
                  </div>
                  <span className="mt-4 text-xs font-bold text-[#C9A84C] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Explore shopping <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </>
          ) : (
            /* For Sleep and Shopping pages: show real sister places in the same category */
            <>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#C85A32]">Discover More</p>
                  <h2 className="font-serif text-2xl font-bold text-[#173042] mt-1">
                    More {categoryLabel} in {cityLabel}
                  </h2>
                </div>
                <Link
                  to={`/finder/${cityKey}/${category}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A84C] hover:text-[#b38e34] transition-colors"
                >
                  <span>View all {cityLabel} {categoryLabel.toLowerCase()}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Sibling place cards */}
              {sisterPlaces.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {sisterPlaces.map((sibling) => (
                    <Link
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
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}

          {/* City category & search intent cross-links */}
          <div className="bg-white/80 rounded-2xl p-5 border border-[#ece4d5] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#66757D] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C9A84C]" />
              Explore {cityLabel} by Category & Intent
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link to={`/finder/${cityKey}/food`} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] text-[#29231F] hover:bg-[#FAF3EA] hover:text-[#C85A32] border border-[#ece4d5] transition-colors">
                🍽️ Food in {cityLabel}
              </Link>
              <Link to={`/finder/${cityKey}/sleep`} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] text-[#29231F] hover:bg-[#FAF3EA] hover:text-[#C85A32] border border-[#ece4d5] transition-colors">
                🛏️ Stays in {cityLabel}
              </Link>
              <Link to={`/finder/${cityKey}/things-to-do`} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] text-[#29231F] hover:bg-[#FAF3EA] hover:text-[#C85A32] border border-[#ece4d5] transition-colors">
                ✨ Things to Do in {cityLabel}
              </Link>
              <Link to={`/finder/${cityKey}/shopping`} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] text-[#29231F] hover:bg-[#FAF3EA] hover:text-[#C85A32] border border-[#ece4d5] transition-colors">
                🛍️ Shopping in {cityLabel}
              </Link>
              {popularIntents.map((pi) => (
                <Link
                  key={pi.slug}
                  to={`/finder/${cityKey}/${category}/${pi.slug}`}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF3EA] text-[#8A6D1F] hover:bg-[#C9A84C] hover:text-white border border-[#E8DAAA] transition-colors"
                >
                  {pi.icon} {pi.label} in {cityLabel}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer strip */}
      <footer className="border-t border-[#ece4d5] bg-white">
        <div className="mx-auto w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-5 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-1.5">
            <img src={logoImg} alt="Moroccan Mate logo" className="w-5 h-5 object-contain opacity-80" />
            <span className="font-display text-sm font-bold text-[#173042]">Moroccan Mate</span>
          </Link>
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
