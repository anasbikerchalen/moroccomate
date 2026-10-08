import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import DetailView from '../components/finder/DetailView';
import { useSavedStore } from '../state/savedStore';
import FavoritesDrawer from '../components/finder/FavoritesDrawer';
import {
  getPlaceBySlug,
  normalizePlaceCategory,
  PLACE_CATEGORY_LABEL,
  PLACE_SCHEMA_TYPE,
  type PlaceUrlCategory,
} from '../listings/placeRoutes';
import { getListingRating } from '../listings/utils';
import { cityMap } from '../data/cities';
import logoImg from '../assets/images/logo.png';
import { getStayOwnerAnswer } from '../engine/stayAdapter';

/**
 * Morocco Finder — individual place page.
 * Route: /place/:city/:category/:slug  -> a real, shareable, indexable page
 * for every Eat / Sleep / Shopping listing. The URL uses the place NAME
 * (e.g. /place/marrakech/food/le-jardin), never a random id.
 */
export default function PlaceListingPage() {
  const { city, category: categoryParam, slug } = useParams<{ city: string; category: string; slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const bookmarks = useSavedStore((state) => state.bookmarks);

  const category: PlaceUrlCategory | null = normalizePlaceCategory(categoryParam);
  const listing = city && category && slug ? getPlaceBySlug(city, category, slug) : undefined;

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

  const cityKey = String(city || '').toLowerCase();
  const cityLabel = cityMap[cityKey]?.name || (cityKey ? cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace(/_/g, ' ') : 'Morocco');
  const placeName = listing.name || listing.title || 'Place';
  const categoryLabel = PLACE_CATEGORY_LABEL[category!];
  const isSleep = category === 'sleep';
  const price = isSleep ? (listing.pricePerNight ?? 0) : 0;
  const ownerAnswer = isSleep ? getStayOwnerAnswer(listing) : '';
  const rawDescription = String(listing.description || listing.short_description || '');
  const description = isSleep && price > 0
    ? `Price from ${price} MAD/night. ${rawDescription.slice(0, 115)}`
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
        }
      : {}),
  };

  const handleBack = () => {
    if (window.history.length > 1 && location.key !== 'default') {
      navigate(-1);
    } else {
      // Direct visit (e.g. from Google) — send to the city browse page
      navigate(`/finder/${cityKey}/${category}`);
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#66757D] hover:text-[#173042] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <span className="flex items-center gap-2">
            <img src={logoImg} alt="Moroccan Mate logo" className="w-7 h-7 object-contain" />
            <span className="font-display text-base font-bold text-[#173042]">Moroccan Mate</span>
          </span>
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

      {/* Main content: the full place detail */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <DetailView item={listing} onBack={handleBack} category={category} />
      </main>

      {/* Footer strip */}
      <footer className="border-t border-[#ece4d5] bg-white">
        <div className="mx-auto w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-5 sm:px-6 lg:px-8">
          <span className="flex items-center gap-1.5">
            <img src={logoImg} alt="Moroccan Mate logo" className="w-5 h-5 object-contain opacity-80" />
            <span className="font-display text-sm font-bold text-[#173042]">Moroccan Mate</span>
          </span>
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
