import { useState } from 'react';
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Heart, Compass, MapPin } from 'lucide-react';
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

  // If URL was mistakenly routed with slug='near-me', redirect to near me immediately
  if (slug === 'near-me') {
    return <Navigate to={`/things/${city || 'marrakech'}/near-me`} replace />;
  }

  const activity = city && slug ? getActivityByCityAndSlug(city, slug) : undefined;

  // Not found fallback
  if (!activity) {
    const cityLabel = city ? (city.charAt(0).toUpperCase() + city.slice(1).replace('_', ' ')) : 'Morocco';
    return (
      <div className="min-h-screen bg-[#FAF7F2] text-[#29231F] flex flex-col font-sans relative">
        <SEO title="Experience not found | Moroccan Mate" />
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/paper-grain.svg')] bg-repeat" />
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center relative z-10 py-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-[#EADBCE] text-[#C2613C] mb-4 shadow-2xs">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#29231F]">Experience Not Found</h1>
          <p className="mt-2 text-xs sm:text-sm text-[#71685F] max-w-sm">
            This activity may have been updated or moved. Discover other verified activities nearby.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate(`/things/${city || 'marrakech'}/near-me`);
                }
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#C2613C] hover:bg-[#A84E2B] px-4 py-2 text-xs font-bold text-white shadow-xs transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Near Me
            </button>
            <Link
              to={`/things/${city || 'marrakech'}/near-me`}
              className="inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-stone-50 border border-[#EADBCE] px-4 py-2 text-xs font-semibold text-[#29231F] shadow-2xs transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C2613C]" />
              Browse {cityLabel} Activities
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full bg-transparent px-3 py-2 text-xs font-semibold text-[#71685F] hover:text-[#29231F] transition-colors"
            >
              Back to Home
            </Link>
          </div>
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

      {/* Crawlable Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8 text-xs text-[#71685F] flex items-center gap-1.5 flex-wrap">
        <Link to="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
        <span className="text-stone-400">/</span>
        <Link to={`/finder/${activity.city.toLowerCase()}/things-to-do`} className="hover:text-[#C9A84C] transition-colors">
          Things to Do in {cityLabel}
        </Link>
        <span className="text-stone-400">/</span>
        <span className="text-[#29231F] font-semibold truncate max-w-[240px] sm:max-w-none">{activity.name}</span>
      </nav>

      {/* Main content: the complete activity listing page */}
      <main className="w-full flex-1">
        <ActivityTemplateView activity={activity} />

        {/* Crawlable City Category Cross-Links */}
        <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#ece4d5]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#66757D] mb-3">
            More in {cityLabel}
          </h3>
          <div className="flex flex-wrap gap-2">
            <Link to={`/finder/${activity.city.toLowerCase()}/things-to-do`} className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FAF3EA] text-[#8A6D1F] border border-[#E8DAAA] hover:bg-[#C9A84C] hover:text-white transition-colors">
              ✨ All Things to Do in {cityLabel}
            </Link>
            <Link to={`/finder/${activity.city.toLowerCase()}/food`} className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-[#29231F] border border-[#ece4d5] hover:border-[#C9A84C] transition-colors">
              🍽️ Where to Eat in {cityLabel}
            </Link>
            <Link to={`/finder/${activity.city.toLowerCase()}/sleep`} className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-[#29231F] border border-[#ece4d5] hover:border-[#C9A84C] transition-colors">
              🛏️ Where to Stay in {cityLabel}
            </Link>
            <Link to={`/finder/${activity.city.toLowerCase()}/shopping`} className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-[#29231F] border border-[#ece4d5] hover:border-[#C9A84C] transition-colors">
              🛍️ Shopping in {cityLabel}
            </Link>
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
