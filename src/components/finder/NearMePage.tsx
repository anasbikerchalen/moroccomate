import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Navigation,
  Star,
  Bookmark,
  ChevronRight,
  Clock,
  ExternalLink,
  Shield,
  Heart,
  ChevronDown,
  Check,
  Home,
  ArrowLeft
} from 'lucide-react';
import { cities, TOURISTIC_REGIONS } from '../../data/cities';
import { getListings } from '../../listings';
import { getListingUrl, normalizePlaceCategory } from '../../listings/placeRoutes';
import { haversineM, extractListingCoords } from '../../engine/proximityEngine';
import { getListingLiveStatus } from '../../utils/timeEngine';
import { useSavedStore } from '../../state/savedStore';
import FavoritesDrawer from './FavoritesDrawer';
import { SEO } from '../ui/SEO';
import logoImg from '../../assets/images/logo.png';
import { cn } from '../../utils/cn';

const STATUS_CHIP_STYLES: Record<string, string> = {
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  purple: 'bg-purple-50 text-purple-700 border-purple-200',
  red: 'bg-red-50 text-red-700 border-red-200',
  stone: 'bg-stone-100 text-stone-600 border-stone-200'
};

interface PlaceTypeOption {
  id: string;
  label: string;
  singularTitle: string;
  filterFn?: (item: any) => boolean;
}

const CATEGORY_PLACE_TYPES: Record<string, PlaceTypeOption[]> = {
  eat: [
    { id: 'all', label: 'All Places', singularTitle: 'Restaurants & Food' },
    {
      id: 'resto',
      label: 'Restaurants',
      singularTitle: 'Restaurants',
      filterFn: (l) => !/cafe|bakery|snack|street/i.test(String(l.type || l.category || ''))
    },
    {
      id: 'snack',
      label: 'Snacks & Street Food',
      singularTitle: 'Snacks & Street Food',
      filterFn: (l) => /snack|street|sandwich|fast|stall/i.test([l.name, l.description, l.type, ...(l.foodStyles || [])].join(' ').toLowerCase())
    },
    {
      id: 'cafe',
      label: 'Cafés & Pastries',
      singularTitle: 'Cafés',
      filterFn: (l) => /cafe|coffee|pastry|patisserie|bakery|tea/i.test([l.name, l.description, l.type, ...(l.foodStyles || [])].join(' ').toLowerCase())
    },
    {
      id: 'rooftop',
      label: 'Rooftops & Views',
      singularTitle: 'Rooftops',
      filterFn: (l) => /rooftop|terrace|terrasse|panoramic/i.test([l.name, l.description, l.viewType, l.atmosphere, ...(l.tags || [])].join(' ').toLowerCase())
    },
    {
      id: 'traditional',
      label: 'Traditional Tagines',
      singularTitle: 'Traditional Food',
      filterFn: (l) => /traditional|moroccan|tagine|couscous|berber/i.test([l.name, l.description, ...(l.foodStyles || []), ...(l.bestDishes || [])].join(' ').toLowerCase())
    }
  ],
  sleep: [
    { id: 'all', label: 'All Stays', singularTitle: 'Stays & Riads' },
    {
      id: 'riad',
      label: 'Riads',
      singularTitle: 'Riads',
      filterFn: (l) => /riad/i.test([l.name, l.type, l.description].join(' ').toLowerCase())
    },
    {
      id: 'hotel',
      label: 'Hotels',
      singularTitle: 'Hotels',
      filterFn: (l) => /hotel/i.test([l.name, l.type, l.description].join(' ').toLowerCase())
    },
    {
      id: 'kasbah',
      label: 'Kasbahs & Desert',
      singularTitle: 'Kasbahs',
      filterFn: (l) => /kasbah|desert|camp|lodge/i.test([l.name, l.type, l.description].join(' ').toLowerCase())
    },
    {
      id: 'luxury',
      label: 'Luxury & Palaces',
      singularTitle: 'Luxury Stays',
      filterFn: (l) => l.lifestyle === 'premium' || /palace|luxury|5-star|resort/i.test([l.name, l.description].join(' ').toLowerCase())
    }
  ],
  things: [
    { id: 'all', label: 'All Activities', singularTitle: 'Things to Do' },
    {
      id: 'heritage',
      label: 'Monuments & Heritage',
      singularTitle: 'Monuments',
      filterFn: (l) => /heritage|palace|museum|monument|tomb|medina|history/i.test([l.name, l.description, ...(l.tags || [])].join(' ').toLowerCase())
    },
    {
      id: 'tours',
      label: 'Guided Tours',
      singularTitle: 'Guided Tours',
      filterFn: (l) => /tour|guided|excursion|day trip/i.test([l.name, l.description, ...(l.tags || [])].join(' ').toLowerCase())
    },
    {
      id: 'wellness',
      label: 'Hammam & Spa',
      singularTitle: 'Hammams & Spas',
      filterFn: (l) => /hammam|spa|massage|wellness|baths/i.test([l.name, l.description, ...(l.tags || [])].join(' ').toLowerCase())
    },
    {
      id: 'outdoor',
      label: 'Desert & Nature',
      singularTitle: 'Adventures',
      filterFn: (l) => /desert|camel|quad|dune|surf|hike|valley|waterfall/i.test([l.name, l.description, ...(l.tags || [])].join(' ').toLowerCase())
    }
  ],
  shop: [
    { id: 'all', label: 'All Shops', singularTitle: 'Artisans & Shops' },
    {
      id: 'souk',
      label: 'Souks & Stalls',
      singularTitle: 'Souks',
      filterFn: (l) => l.type === 'souk_stall' || /souk|bazaar|market/i.test([l.name, l.description].join(' ').toLowerCase())
    },
    {
      id: 'coop',
      label: 'Cooperatives',
      singularTitle: 'Cooperatives',
      filterFn: (l) => l.type === 'cooperative' || /cooperative|association|women/i.test([l.name, l.description].join(' ').toLowerCase())
    },
    {
      id: 'carpets',
      label: 'Carpet & Rug Guilds',
      singularTitle: 'Carpet Shops',
      filterFn: (l) => /carpet|rug|tapis|weaving/i.test([l.name, l.description, ...(l.productCategories || [])].join(' ').toLowerCase())
    },
    {
      id: 'ceramics',
      label: 'Ceramics & Pottery',
      singularTitle: 'Ceramics Shops',
      filterFn: (l) => /ceramic|pottery|zellige|tajine/i.test([l.name, l.description, ...(l.productCategories || [])].join(' ').toLowerCase())
    }
  ]
};

export default function NearMePage() {
  const { category: rawCategory, city: rawCity } = useParams<{ category?: string; city?: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Saved bookmarks store
  const { bookmarks, toggleBookmark, isBookmarked } = useSavedStore();
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  // Normalize category accurately: check pathname first so hardcoded paths like /things/:city/near-me are never missed
  const category = useMemo(() => {
    const path = location.pathname.toLowerCase();
    if (path.startsWith('/things') || path.includes('/things/') || path.includes('/things-to-do')) return 'things';
    if (path.startsWith('/sleep') || path.includes('/sleep/') || path.startsWith('/stay')) return 'sleep';
    if (path.startsWith('/shop') || path.includes('/shop/')) return 'shop';
    if (path.startsWith('/eat') || path.includes('/eat/') || path.startsWith('/food')) return 'eat';

    const c = (rawCategory || '').toLowerCase();
    if (c === 'things' || c === 'activities' || c === 'tours' || c === 'things-to-do') return 'things';
    if (c === 'stay' || c === 'sleep' || c === 'hotels' || c === 'hotel') return 'sleep';
    if (c === 'shop' || c === 'shopping' || c === 'souks') return 'shop';
    if (c === 'food' || c === 'eat' || c === 'restaurants' || c === 'resto') return 'eat';
    return 'eat';
  }, [rawCategory, location.pathname]);

  // Initial city from route param or pathname segments
  const initialCity = useMemo(() => {
    const candidate = (rawCity || '').toLowerCase();
    if (candidate && cities.some((c) => c.id === candidate)) {
      return candidate;
    }
    if (candidate === 'tangier') return 'tanger';
    if (candidate === 'asilah') return 'assilah';
    if (candidate === 'tetouan_martil') return 'tetouan';
    if (candidate === 'taroudant_tafraoute') return 'taroudant';
    if (candidate === 'ifrane_azrou') return 'ifrane';

    const segments = location.pathname.toLowerCase().split('/').filter(Boolean);
    for (const seg of segments) {
      if (cities.some((c) => c.id === seg)) {
        return seg;
      }
      if (seg === 'tangier') return 'tanger';
      if (seg === 'asilah') return 'assilah';
      if (seg === 'tetouan_martil') return 'tetouan';
      if (seg === 'taroudant_tafraoute') return 'taroudant';
      if (seg === 'ifrane_azrou') return 'ifrane';
    }
    return 'marrakech';
  }, [rawCity, location.pathname]);

  // State
  const [selectedCityId, setSelectedCityId] = useState<string>(initialCity);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');
  const [locationMode, setLocationMode] = useState<'manual' | 'gps'>('manual');
  const [selectedPlaceTypeId, setSelectedPlaceTypeId] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(8);

  // Sync city state when route city changes
  useEffect(() => {
    if (initialCity && initialCity !== selectedCityId) {
      setSelectedCityId(initialCity);
      setSelectedNeighborhood('all');
    }
  }, [initialCity]);

  // Reset place type filter when category switches
  useEffect(() => {
    setSelectedPlaceTypeId('all');
    setVisibleCount(8);
  }, [category]);

  // GPS states
  const [gpsStatus, setGpsStatus] = useState<'idle' | 'locating' | 'success' | 'error'>('idle');
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [gpsStatusText, setGpsStatusText] = useState<string>('');

  const currentCityObj = useMemo(() => {
    return cities.find((c) => c.id === selectedCityId) || cities.find((c) => c.id === 'marrakech') || cities[0];
  }, [selectedCityId]);

  const availableNeighborhoods = useMemo(() => {
    return currentCityObj?.neighborhoods || [];
  }, [currentCityObj]);

  const placeTypes = useMemo(() => {
    return CATEGORY_PLACE_TYPES[category] || CATEGORY_PLACE_TYPES.eat;
  }, [category]);

  const currentPlaceType = useMemo(() => {
    return placeTypes.find((p) => p.id === selectedPlaceTypeId) || placeTypes[0];
  }, [placeTypes, selectedPlaceTypeId]);

  // Big Tagline Title: e.g. "RESTAURANTS NEAR ME" or "SNACKS NEAR ME"
  const bigTagline = useMemo(() => {
    const typeLabel = currentPlaceType.singularTitle.toUpperCase();
    return `${typeLabel} NEAR ME`;
  }, [currentPlaceType]);

  // Fetch all listings for this city and category
  const rawListings = useMemo(() => {
    return getListings(selectedCityId, category) || [];
  }, [selectedCityId, category]);

  // Filter & sort listings
  const filteredListings = useMemo(() => {
    let list = [...rawListings];

    // Filter by place type (e.g. snack, resto, cafe)
    if (currentPlaceType.filterFn) {
      const filtered = list.filter(currentPlaceType.filterFn);
      if (filtered.length > 0) {
        list = filtered;
      }
    }

    if (locationMode === 'manual') {
      if (selectedNeighborhood !== 'all') {
        const lowerH = selectedNeighborhood.toLowerCase();
        list = list.filter((item) => {
          const n = String(item.neighborhood || '').toLowerCase();
          const addr = String(item.address || '').toLowerCase();
          const tags = Array.isArray(item.tags) ? item.tags.join(' ').toLowerCase() : '';
          return n.includes(lowerH) || lowerH.includes(n) || addr.includes(lowerH) || tags.includes(lowerH);
        });
      }
    } else if (locationMode === 'gps' && userCoords) {
      list = list
        .map((item) => {
          const itemCoords = extractListingCoords(item);
          const dist = itemCoords ? haversineM(userCoords, itemCoords) : 999999;
          return { ...item, _distMeters: dist };
        })
        .sort((a, b) => a._distMeters - b._distMeters);
    }

    return list;
  }, [rawListings, currentPlaceType, locationMode, selectedNeighborhood, userCoords]);

  // Handle GPS detection
  const handleActivateGPS = () => {
    if (!navigator.geolocation) {
      setGpsStatus('error');
      setGpsStatusText('Geolocation is not supported by your browser.');
      return;
    }

    setGpsStatus('locating');
    setGpsStatusText('Locating your position in Morocco...');
    setLocationMode('gps');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setUserCoords({ lat, lng });
        setGpsStatus('success');
        setGpsStatusText(`GPS active · Calibrated (${lat.toFixed(3)}, ${lng.toFixed(3)})`);
      },
      (err) => {
        setGpsStatus('error');
        setGpsStatusText('Could not access GPS. Switched back to city center.');
        setLocationMode('manual');
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const handleCityChange = (newCityId: string) => {
    setSelectedCityId(newCityId);
    setSelectedNeighborhood('all');
    navigate(`/${category}/${newCityId}/near-me`, { replace: true });
  };

  const handleBack = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();

    // 1. Try to return to the last page outside of Near Me
    try {
      const prevUrl = sessionStorage.getItem('mm_last_visited_page');
      if (prevUrl && !prevUrl.includes('/near-me') && prevUrl !== location.pathname) {
        navigate(prevUrl);
        return;
      }
    } catch {
      // ignore
    }

    // 2. If React Router has history in this app session and referrer is internal
    if (window.history.state && typeof window.history.state.idx === 'number' && window.history.state.idx > 0) {
      if (document.referrer && document.referrer.includes(window.location.host)) {
        navigate(-1);
        return;
      }
    }

    // 3. Fallback to homepage
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#29231F] font-sans relative selection:bg-[#C9A84C]/20">
      <SEO
        title={`${bigTagline} in ${currentCityObj.name} | Moroccan Mate`}
        description={`Find top-rated ${currentPlaceType.singularTitle} near you in ${currentCityObj.name}, Morocco. Browse verified local spots, ratings, and directions.`}
      />

      {/* Website Paper Texture Background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/paper-grain.svg')] bg-repeat" />

      {/* ─────────────────────────────────────────────────────────────
          1. WEBSITE HEADER — Identical theme to HomePage & ExplorePage
          ───────────────────────────────────────────────────────────── */}
      <header className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-4 md:pt-5 pb-3 flex items-center justify-between border-b border-[#EADBCE]/60">
        {/* Left Side: Back Button + Moroccan Mate Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white hover:bg-stone-50 border border-[#EADBCE] text-xs font-semibold text-[#29231F] transition-all shadow-2xs hover:shadow-xs cursor-pointer shrink-0 group"
            title="Go back"
            aria-label="Go back"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#C2613C] transition-transform group-hover:-translate-x-0.5" />
            <span>Back</span>
          </button>

          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <img
              src={logoImg}
              alt="Moroccan Mate logo"
              className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <p className="font-display text-base sm:text-lg md:text-xl font-semibold leading-none text-[#29231F]">Moroccan Mate</p>
              <p className="font-sans text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.22em] text-[#71685F] mt-1">Real places. Local vibes.</p>
            </div>
          </Link>
        </div>

        {/* Center: Categories Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-white/70 backdrop-blur-xs border border-[#EADBCE] rounded-full">
          <Link
            to={`/eat/${selectedCityId}/near-me`}
            className={cn(
              "px-3.5 py-1 rounded-full text-xs font-semibold transition-all",
              category === 'eat' ? "bg-[#C2613C] text-white shadow-xs" : "text-[#71685F] hover:text-[#29231F]"
            )}
          >
            Eat
          </Link>
          <Link
            to={`/sleep/${selectedCityId}/near-me`}
            className={cn(
              "px-3.5 py-1 rounded-full text-xs font-semibold transition-all",
              category === 'sleep' ? "bg-[#C2613C] text-white shadow-xs" : "text-[#71685F] hover:text-[#29231F]"
            )}
          >
            Sleep
          </Link>
          <Link
            to={`/things/${selectedCityId}/near-me`}
            className={cn(
              "px-3.5 py-1 rounded-full text-xs font-semibold transition-all",
              category === 'things' ? "bg-[#C2613C] text-white shadow-xs" : "text-[#71685F] hover:text-[#29231F]"
            )}
          >
            Things to Do
          </Link>
          <Link
            to={`/shop/${selectedCityId}/near-me`}
            className={cn(
              "px-3.5 py-1 rounded-full text-xs font-semibold transition-all",
              category === 'shop' ? "bg-[#C2613C] text-white shadow-xs" : "text-[#71685F] hover:text-[#29231F]"
            )}
          >
            Shopping
          </Link>
        </nav>

        {/* Right Side: Home Button & Saved Places */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#EADBCE] text-xs font-semibold text-[#29231F] transition-all duration-200 shadow-2xs hover:shadow-xs"
            title="Go to Homepage"
          >
            <Home className="w-3.5 h-3.5 text-[#C2613C]" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          {/* Saved Places button */}
          <button
            type="button"
            onClick={() => setFavoritesOpen(true)}
            className="group relative flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#EADBCE] shadow-2xs hover:shadow-md hover:border-[#EADBCE] transition-all duration-200"
            aria-label="View saved places"
          >
            <Heart
              className={cn(
                "w-4 h-4 transition-transform group-hover:scale-110",
                bookmarks.length > 0 ? "text-[#C85A32] fill-[#C85A32]" : "text-[#71685F] group-hover:text-[#C85A32]"
              )}
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

      {/* ─────────────────────────────────────────────────────────────
          2. SIMPLE TITLE & OPTIONS SECTION
          (..... NEAR ME)
          city/neighborhood / GPS
          ───────────────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-16 relative z-10">
        {/* Editorial Breadcrumbs & Quick Back */}
        <div className="flex items-center justify-between mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#71685F]">
            <Link to="/" className="hover:text-[#C2613C] transition-colors flex items-center gap-1 font-medium">
              <Home className="w-3.5 h-3.5 text-[#C2613C]" />
              <span>Home</span>
            </Link>
            <span className="text-stone-300">/</span>
            <span className="capitalize font-medium text-stone-600">{currentCityObj.name}</span>
            <span className="text-stone-300">/</span>
            <span className="font-bold text-[#29231F]">{currentPlaceType.singularTitle} Near Me</span>
          </nav>

          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#71685F] hover:text-[#29231F] px-2.5 py-1 rounded-full bg-white/80 hover:bg-white border border-[#EADBCE] transition-all cursor-pointer shadow-2xs group"
            title="Go back"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#C2613C] transition-transform group-hover:-translate-x-0.5" />
            <span>Back</span>
          </button>
        </div>

        <div className="text-center mb-8">
          {/* Main 4 Categories Switcher Tabs */}
          <div className="mb-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-1 p-1 bg-white/80 backdrop-blur-xs border border-[#EADBCE] rounded-full shadow-2xs">
              <Link
                to={`/eat/${selectedCityId}/near-me`}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all",
                  category === 'eat'
                    ? "bg-[#C2613C] text-white shadow-xs"
                    : "text-[#71685F] hover:text-[#29231F]"
                )}
              >
                Eat
              </Link>
              <Link
                to={`/sleep/${selectedCityId}/near-me`}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all",
                  category === 'sleep'
                    ? "bg-[#C2613C] text-white shadow-xs"
                    : "text-[#71685F] hover:text-[#29231F]"
                )}
              >
                Sleep
              </Link>
              <Link
                to={`/things/${selectedCityId}/near-me`}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all",
                  category === 'things'
                    ? "bg-[#C2613C] text-white shadow-xs"
                    : "text-[#71685F] hover:text-[#29231F]"
                )}
              >
                Things to Do
              </Link>
              <Link
                to={`/shop/${selectedCityId}/near-me`}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all",
                  category === 'shop'
                    ? "bg-[#C2613C] text-white shadow-xs"
                    : "text-[#71685F] hover:text-[#29231F]"
                )}
              >
                Shopping
              </Link>
            </div>
          </div>

          {/* Big Text Title: (..... NEAR ME) */}
          <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-[#29231F] tracking-tight uppercase mb-3">
            {bigTagline}
          </h1>
          <p className="font-sans text-sm text-[#71685F] max-w-xl mx-auto">
            Discover verified spots in <span className="font-bold text-[#29231F]">{currentCityObj.name}</span> sorted by proximity to your chosen location.
          </p>

          {/* Quick Place Type Selector Chips (Resto, Snack, Cafe, Traditional...) */}
          <div className="mt-5 flex items-center justify-center flex-wrap gap-2">
            {placeTypes.map((pt) => {
              const active = pt.id === selectedPlaceTypeId;
              return (
                <button
                  key={pt.id}
                  onClick={() => setSelectedPlaceTypeId(pt.id)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border",
                    active
                      ? "bg-[#29231F] text-white border-[#29231F] shadow-xs"
                      : "bg-white/80 hover:bg-white text-stone-700 border-[#EADBCE] hover:border-[#D9CCA8]"
                  )}
                >
                  {pt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Two Simple Options: City/Neighborhood vs GPS ── */}
        <div className="bg-[#FAF6EE] border border-[#E9E1D4] rounded-2xl p-4 sm:p-5 mb-10 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-4 border-b border-[#E9E1D4]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71685F]">
              Select Location Method:
            </span>
            <div className="flex items-center gap-1.5 p-1 bg-white/90 border border-[#EADBCE] rounded-full self-start sm:self-auto">
              <button
                onClick={() => setLocationMode('manual')}
                className={cn(
                  "px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer",
                  locationMode === 'manual'
                    ? "bg-[#C2613C] text-white shadow-2xs"
                    : "text-[#71685F] hover:text-[#29231F]"
                )}
              >
                City & Neighborhood
              </button>
              <button
                onClick={handleActivateGPS}
                className={cn(
                  "px-3.5 py-1 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer",
                  locationMode === 'gps'
                    ? "bg-[#C2613C] text-white shadow-2xs"
                    : "text-[#71685F] hover:text-[#29231F]"
                )}
              >
                <Navigation className="w-3 h-3" />
                Use GPS
              </button>
            </div>
          </div>

          <div className="pt-4">
            {locationMode === 'manual' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#71685F] uppercase tracking-wider mb-1.5">
                    City
                  </label>
                  <select
                    value={selectedCityId}
                    onChange={(e) => handleCityChange(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-semibold text-[#29231F] focus:outline-none focus:border-[#C2613C]"
                  >
                    {TOURISTIC_REGIONS.map((region) => (
                      <optgroup key={region.name} label={region.name}>
                        {region.cities.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#71685F] uppercase tracking-wider mb-1.5">
                    Neighborhood
                  </label>
                  <select
                    value={selectedNeighborhood}
                    onChange={(e) => setSelectedNeighborhood(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-semibold text-[#29231F] focus:outline-none focus:border-[#C2613C]"
                  >
                    <option value="all">All Neighborhoods in {currentCityObj.name}</option>

                    {currentCityObj.touristicNeighborhoods && currentCityObj.touristicNeighborhoods.length > 0 && (
                      <optgroup label="Touristic Neighborhoods">
                        {currentCityObj.touristicNeighborhoods.map((n: string) => (
                          <option key={`tour-${n}`} value={n}>
                            {n}
                          </option>
                        ))}
                      </optgroup>
                    )}

                    {currentCityObj.midNeighborhoods && currentCityObj.midNeighborhoods.length > 0 && (
                      <optgroup label="Mid-Touristic Neighborhoods">
                        {currentCityObj.midNeighborhoods.map((n: string) => (
                          <option key={`mid-${n}`} value={n}>
                            {n}
                          </option>
                        ))}
                      </optgroup>
                    )}

                    {currentCityObj.lowNeighborhoods && currentCityObj.lowNeighborhoods.length > 0 && (
                      <optgroup label="Low-Touristic Neighborhoods">
                        {currentCityObj.lowNeighborhoods.map((n: string) => (
                          <option key={`low-${n}`} value={n}>
                            {n}
                          </option>
                        ))}
                      </optgroup>
                    )}
                  </select>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-[#EADBCE]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF3EA] text-[#C2613C] flex items-center justify-center shrink-0">
                    <Navigation className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#29231F]">
                      {gpsStatus === 'locating' ? 'Locating coordinates...' : gpsStatus === 'success' ? 'Live GPS Location Active' : 'GPS Ready'}
                    </p>
                    <p className="text-[11px] text-[#71685F]">
                      {gpsStatusText || 'Listing results calculated using your live coordinates.'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleActivateGPS}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#C2613C] hover:bg-[#A84E2B] transition-colors cursor-pointer shrink-0"
                >
                  Recalibrate GPS
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. RESULTS WITH SAME DESIGN FROM RESULT PAGES OF LISTINGS
            (without image space / full width card)
            ───────────────────────────────────────────────────────────── */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-wider text-[#71685F]">
            {filteredListings.length} places found
          </p>
          <span className="text-xs text-stone-500">
            {locationMode === 'gps' ? 'Sorted by GPS distance' : `Filtered by ${currentCityObj.name}`}
          </span>
        </div>

        {filteredListings.length === 0 ? (
          <div className="bg-[#FAF6EE] border border-[#E9E1D4] rounded-2xl p-12 text-center">
            <MapPin className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <h3 className="font-serif text-lg text-stone-800 mb-1">No places found in this area</h3>
            <p className="text-xs text-stone-500 mb-4">Try choosing all neighborhoods or resetting the filter.</p>
            <button
              onClick={() => {
                setSelectedNeighborhood('all');
                setSelectedPlaceTypeId('all');
              }}
              className="px-4 py-2 bg-[#29231F] text-white rounded-full text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredListings.slice(0, visibleCount).map((item, idx) => {
              const isTopPick = idx === 0;

              // Live open/closed status
              let liveStatus: ReturnType<typeof getListingLiveStatus> = null;
              try {
                liveStatus = getListingLiveStatus(item);
              } catch {
                liveStatus = null;
              }

              const cardHref = getListingUrl(item) || `/finder/${selectedCityId}/${item.id}`;
              const distanceM = item._distMeters;

              return (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03, duration: 0.25 }}
                  onClick={() => navigate(cardHref)}
                  className="group bg-[#FAF6EE] hover:bg-white border border-[#E9E1D4] hover:border-[#D9CCA8] rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Title & Actions Row */}
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900 group-hover:text-[#C2613C] transition-colors leading-snug truncate">
                      <a
                        href={cardHref}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(cardHref);
                        }}
                        className="hover:underline focus:outline-hidden text-stone-900 group-hover:text-[#C2613C] transition-colors"
                      >
                        {item.name || item.title}
                      </a>
                    </h3>

                    <div className="flex items-center gap-2 shrink-0">
                      {/* Top Pick Badge */}
                      {isTopPick && (
                        <div className="px-2.5 py-1 bg-[#D99A30] text-white rounded-md text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-xs shrink-0">
                          <Star className="w-3 h-3 fill-current" />
                          <span>TOP PICK</span>
                        </div>
                      )}

                      {/* Rating Badge */}
                      {(item.googleRating || item.rating) ? (
                        <div className="flex items-center gap-1 bg-[#FAF2E1] border border-[#E8DAAA] px-2.5 py-1 rounded-full text-stone-800 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 text-[#D99A30] fill-current" />
                          <span>{item.googleRating || item.rating}</span>
                          {item.reviewCount ? (
                            <span className="text-stone-500 font-medium">· {item.reviewCount >= 1000 ? `${(item.reviewCount / 1000).toFixed(1)}k` : item.reviewCount}</span>
                          ) : null}
                        </div>
                      ) : null}

                      {/* Bookmark Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark({
                            id: item.id,
                            type: category,
                            name: item.name || item.title,
                            city: selectedCityId,
                            category
                          });
                        }}
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center transition-colors border border-transparent hover:border-[#E0D5C3] cursor-pointer",
                          isBookmarked(item.id) ? "text-[#C2613C] bg-red-50/50" : "text-stone-400 hover:text-stone-700 hover:bg-stone-100/60"
                        )}
                        aria-label="Save place"
                      >
                        <Bookmark className={cn("w-4 h-4", isBookmarked(item.id) && "fill-current")} />
                      </button>
                    </div>
                  </div>

                  {/* Location & Trust Row */}
                  <div className="flex items-center flex-wrap gap-x-2 gap-y-1.5 text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-3">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>{(item.neighborhood || currentCityObj.name).toUpperCase()}</span>

                    {/* Proximity / Distance Badge */}
                    {distanceM !== undefined && distanceM < 999999 && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold normal-case tracking-normal border bg-[#FAF3F0] text-[#C86D51] border-[#C86D51]/30">
                        <Navigation className="w-2.5 h-2.5 fill-current" />
                        {distanceM < 1000
                          ? `${Math.round(distanceM)}m away`
                          : `${(distanceM / 1000).toFixed(1)} km away`}
                      </span>
                    )}

                    {/* Live Open Status */}
                    {liveStatus && liveStatus.status !== 'unknown' && (
                      <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold normal-case tracking-normal border", STATUS_CHIP_STYLES[liveStatus.color] || STATUS_CHIP_STYLES.stone)}>
                        <Clock className="w-3 h-3" />
                        {liveStatus.label}
                      </span>
                    )}

                    {/* Safety Signal */}
                    {item.safetyLevel ? (
                      <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold normal-case tracking-normal border", item.safetyLevel >= 4 ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200")}>
                        <Shield className="w-3 h-3" />
                        Safety {item.safetyLevel}/5
                      </span>
                    ) : null}
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 text-sm leading-relaxed line-clamp-2 mb-4 font-sans">
                    {item.description || item.subtitle || 'Authentic local spot in Morocco with verified atmosphere and curated offerings.'}
                  </p>

                  {/* Card Footer: Category Tags & Directions */}
                  <div className="flex items-center justify-between gap-3 pt-2.5 border-t border-[#EFE8DC]/80">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-3 py-1 bg-[#F1E8DB] text-stone-800 rounded-full text-xs font-medium border border-[#E3D8C6]">
                        {category === 'eat' ? 'Food & Dining' : category === 'sleep' ? 'Stays & Sleep' : category === 'shop' ? 'Shopping' : 'Things to Do'}
                      </span>

                      {((item.tags || item.foodStyles || item.vibeTags || []) as string[]).filter(Boolean).slice(0, 2).map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#F1E8DB] text-stone-800 rounded-full text-xs font-medium border border-[#E3D8C6] capitalize"
                        >
                          {tag.replace('-', ' ')}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={item.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${item.name || item.title} ${currentCityObj.name} Morocco`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#C2613C] text-stone-700 hover:text-white text-[11px] font-bold border border-[#E2D6C4] hover:border-[#C2613C] transition-all cursor-pointer"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Directions</span>
                      </a>
                      <div className="w-8 h-8 rounded-full bg-[#FAF3EA] group-hover:bg-[#C2613C] border border-[#E2D6C4] group-hover:border-[#C2613C] flex items-center justify-center transition-all">
                        <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Load More Places button */}
        {visibleCount < filteredListings.length && (
          <div className="mt-8 flex flex-col items-center justify-center gap-2">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-3 bg-white border border-[#E0D5C3] hover:border-[#C2613C] text-stone-800 hover:text-[#C2613C] rounded-2xl font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow-md flex items-center gap-2 cursor-pointer group"
            >
              <span>Show More Places</span>
              <ChevronDown className="w-4 h-4 text-stone-500 group-hover:text-[#C2613C] transition-transform group-hover:translate-y-0.5" />
            </button>
            <p className="text-xs text-stone-500 font-medium">
              Showing {Math.min(visibleCount, filteredListings.length)} of {filteredListings.length} places
            </p>
          </div>
        )}
      </main>

      {/* Favorites Drawer Component */}
      <FavoritesDrawer
        isOpen={favoritesOpen}
        onClose={() => setFavoritesOpen(false)}
      />
    </div>
  );
}
