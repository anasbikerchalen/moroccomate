import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { ActivityTemplateView } from '../components/things/ActivityTemplateView';
import { ActivityIcon } from '../components/things/ActivityIcon';
import { getActivityByCityAndSlug, getCityLabel, formatDuration } from '../things-to-do';
import { useSavedStore } from '../state/savedStore';
import FavoritesDrawer from '../components/finder/FavoritesDrawer';
import logoImg from '../assets/images/logo.png';

/**
 * Morocco Finder — Things To Do listing page.
 * Route: /things/:city/:slug  -> resolves the real activity from the
 * Things To Do backend and renders the reusable activity template.
 */
export default function ThingsListingPage() {
  const { city, slug } = useParams<{ city: string; slug: string }>();
  const navigate = useNavigate();
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const bookmarks = useSavedStore((state) => state.bookmarks);

  const activity = city && slug ? getActivityByCityAndSlug(city, slug) : undefined;

  // Not found fallback
  if (!activity) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] flex flex-col">
        <SEO title="Experience not found" />
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#ece4d5] text-[#66757D] mb-5">
            <ActivityIcon name="map-pin" className="w-7 h-7" />
          </div>
          <h1 className="font-display text-3xl font-bold text-[#173042]">Experience not found</h1>
          <p className="mt-2 text-sm text-[#66757D] max-w-sm">
            This experience may have been moved or removed. Discover other things to do instead.
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

  const cityLabel = getCityLabel(activity.city);

  return (
    <div className="min-h-screen bg-[#FAF9F5] flex flex-col">
      <SEO
        title={`${activity.name} — Things to Do in ${cityLabel}`}
        description={activity.short_description || activity.description}
        type="article"
        schemaType="TouristAttraction"
        schemaData={{
          name: activity.name,
          description: activity.short_description || activity.description,
          address: activity.address || cityLabel,
          ...(activity.coordinates ? { geo: { latitude: activity.coordinates.lat, longitude: activity.coordinates.lng } } : {}),
        }}
      />

      {/* Minimal header: back navigation + wordmark */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-sm border-b border-[#ece4d5]">
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
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

      {/* Main content: the complete activity listing page */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <ActivityTemplateView activity={activity} />
      </main>

      {/* Footer strip */}
      <footer className="border-t border-[#ece4d5] bg-white">
        <div className="mx-auto w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-5 sm:px-6 lg:px-8">
          <span className="flex items-center gap-1.5">
            <img src={logoImg} alt="Moroccan Mate logo" className="w-5 h-5 object-contain opacity-80" />
            <span className="font-display text-sm font-bold text-[#173042]">Moroccan Mate</span>
          </span>
          <span className="text-xs text-[#66757D]">
            {activity.activity_type} · {formatDuration(activity.duration_minutes) || cityLabel} · {cityLabel}
          </span>
        </div>
      </footer>

      {/* Favorites Drawer */}
      <FavoritesDrawer isOpen={favoritesOpen} onClose={() => setFavoritesOpen(false)} />
    </div>
  );
}
