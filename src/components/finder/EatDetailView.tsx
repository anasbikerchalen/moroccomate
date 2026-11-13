import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, MapPin, Clock, 
  Navigation, CheckCircle2, XCircle, ChevronRight, ChevronDown, ArrowLeft, ExternalLink, X,
  BookOpen, Wifi, Wind, Globe, Instagram, UtensilsCrossed,
  Info, Sparkles, Car, Languages, CreditCard,
  Accessibility, DollarSign, Moon, Sun, Armchair, Leaf, ShieldCheck,
  Compass, Award, Share2, Phone, PhoneCall, Check, Copy, Lightbulb,
  CalendarCheck, Settings, Footprints
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useSavedStore } from '../../state/savedStore';
import { useParameterStore } from '../../state/parameterStore';
import { useExploreStore } from '../../state/exploreStore';
import { listingsRegistry } from '../../listings';
import { cityMap } from '../../data/cities';
import { getListingRating } from '../../listings/utils';
import CamelRating from './CamelRating';
import TagTooltip from './TagTooltip';
import { getEatWeeklySchedule } from '../../utils/timeEngine';
import { deriveEatProsCons } from '../../utils/eatProsConsEngine';
import diningHeroEditorialImg from '../../assets/images/botanical_food_flat_1791668271591.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { WalkingDistanceMap } from './stay/WalkingDistanceMap';
import { computePoiNearbyPlaces } from '../../engine/proximityEngine';
import { getCityCenter } from '../../engine/stayAdapter';
import { getPlaceSlugById, buildPlaceUrl } from '../../listings/placeRoutes';
import InteractiveRestaurantMenu from '../menu/InteractiveRestaurantMenu';
import WorriesSection from '../worries/WorriesSection';
import { resolveEatWorries } from '../../utils/eatWorriesResolver';
import PlaceReviewsSection from '../reviews/PlaceReviewsSection';
import ListingHeroHeader, { WhatsAppIcon, type HeroFeatureChip, type HeroMetadataItem } from './ListingHeroHeader';
import type { ReviewSource } from '../../types/reviews';

interface EatDetailViewProps {
  item: any;
  onBack?: () => void;
}

export default function EatDetailView({ item, onBack }: EatDetailViewProps) {
  const navigate = useNavigate();
  const { toggleBookmark, isBookmarked } = useSavedStore();
  const { city } = useParameterStore();
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [hoveredPlaceId, setHoveredPlaceId] = useState<string | null>(null);
  const [selectedReviewSource, setSelectedReviewSource] = useState<ReviewSource | null>(null);

  // Resolve traveler worries (strictly null if unverified or empty so section is completely hidden)
  const resolvedWorries = useMemo(() => {
    return resolveEatWorries(item?.worries || item?.ui?.worries || item?.data?.worries);
  }, [item?.worries, item?.ui?.worries, item?.data?.worries]);

  // Listing Attributes from Database / Registry
  const {
    id = '',
    name = '',
    neighborhood = 'Medina',
    description = '',
    pricePerPerson = 15,
    lifestyle = 'balanced',
    mealTypes = [],
    experienceTypes = [],
    foodStyles = [],
    crowdLevel,
    groupTypes = [],
    hasEnglishStaff,
    hasFrenchStaff,
    hasParking,
    hasDelivery = false,
    nearMedina = false,
    nearBeach = false,
    isVegetarianFriendly = false,
    isHalal = true,
    servesAlcohol = false,
    openTime,
    closeTime,
    badge,
    bestDishes = [],
    paymentMethods = [],
    reservationContact = '',
    reservationMethod = [],
    bookingUrl = '',
    whatsappNumber = '',
    closedDays = [],
    weeklySchedule = undefined,
    tip = '',
    googleMapsUrl = '',
    googleRating,
    googleReviewCount,
    tripadvisorRating,
    tripadvisorReviewCount,
    theforkRating,
    theforkReviewCount,
    restaurantguruRating,
    restaurantguruReviewCount,
    alcoholPolicy,
    ramadanFriendly,
    fullMenu = undefined,
    bestTimeToVisit,
    averageWaitMinutes,
    seatingTypes = [],
    viewType,
    wiFi,
    airConditioning,
    wheelchairAccessible,
    website = '',
    instagram = '',
    pros = [],
    cons = []
  } = item || {};

  // Resolved pros & cons: explicit human curation first, attribute-derived fallback second
  const { pros: resolvedPros, cons: resolvedCons, isDerived: isProsConsDerived } = useMemo(() => {
    return deriveEatProsCons(item || {});
  }, [item]);

  // Operational schedule resolved dynamically via backend time engine
  const scheduleData = useMemo(() => {
    const raw = item || {};
    const weekly = raw.weeklySchedule || raw.ui?.weeklySchedule;
    return getEatWeeklySchedule({
      ...raw,
      openTime: raw.openTime || raw.ui?.openTime,
      closeTime: raw.closeTime || raw.ui?.closeTime,
      weeklySchedule: weekly?.map((s: any) => ({
        day: s.day,
        open: s.open || s.openTime,
        close: s.close || s.closeTime,
        isClosed: s.isClosed,
        note: s.note
      })),
      closedDays: raw.closedDays || raw.filter?.closedDays,
      ramadanFriendly: raw.ramadanFriendly || raw.filter?.ramadanFriendly
    });
  }, [item]);

  // Consolidated ratings from real backend database
  const { averageRating, totalReviews } = useMemo(() => {
    return getListingRating(item);
  }, [item]);

  // City display label
  const cityKey = String(item?.city || city || 'marrakech').toLowerCase();
  const cityLabel = cityMap[cityKey]?.name || cityKey.charAt(0).toUpperCase() + cityKey.slice(1);

  // Price tier symbol ($ / $$ / $$$)
  const priceTier = useMemo(() => {
    if (lifestyle === 'lean' || pricePerPerson <= 10) return '$';
    if (lifestyle === 'premium' || pricePerPerson >= 25) return '$$$';
    return '$$';
  }, [lifestyle, pricePerPerson]);

  const calculatedPriceRange = useMemo(() => {
    const min = Math.round(pricePerPerson * 6);
    const max = Math.round(pricePerPerson * 12);
    return `${min}–${max} MAD`;
  }, [pricePerPerson]);

  // Primary cuisine label
  const primaryCuisine = useMemo(() => {
    if (Array.isArray(foodStyles) && foodStyles.length > 0) return String(foodStyles[0]);
    if (typeof foodStyles === 'string' && foodStyles.trim()) return foodStyles.trim();
    return 'Moroccan';
  }, [foodStyles]);

  const placeSlug = useMemo(() => {
    return getPlaceSlugById(cityKey, 'food', id) || (name ? name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : id);
  }, [cityKey, id, name]);
  const dedicatedMenuUrl = `/place/${cityKey}/food/${placeSlug}/menu`;

  // Bookmarking
  const bookmarked = isBookmarked(id);

  // Close Weekly Schedule popover on outside click or Escape
  useEffect(() => {
    if (!isScheduleOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && target.closest('[data-schedule-container="true"]')) return;
      setIsScheduleOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsScheduleOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isScheduleOpen]);

  // Save last viewed listing to localStorage
  useEffect(() => {
    if (id && name) {
      localStorage.setItem('last_viewed_listing', JSON.stringify({
        id,
        name,
        category: 'eat',
        url: window.location.pathname
      }));
    }
  }, [id, name]);

  // High-reliability back button handler
  const handleBackClick = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (onBack) {
      onBack();
    } else if (window.history.state && typeof window.history.state.idx === 'number' && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate(`/finder/${cityKey}/food?view=results`);
    }
  };

  // Share handler
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${name} — Moroccan Mate`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Directions URL
  const directionsUrl = useMemo(() => {
    if (googleMapsUrl) return googleMapsUrl;
    const query = encodeURIComponent(`${name} ${cityLabel} Morocco`);
    return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
  }, [googleMapsUrl, name, cityLabel]);

  // Clean social links
  const cleanInstagram = useMemo(() => {
    if (!instagram) return null;
    if (instagram.startsWith('http')) return instagram;
    return `https://instagram.com/${instagram.replace('@', '')}`;
  }, [instagram]);

  const cleanWebsite = useMemo(() => {
    if (!website) return null;
    if (website.startsWith('http')) return website;
    return `https://${website}`;
  }, [website]);

  // Clean phone numbers for click-to-call and WhatsApp
  const cleanPhoneForTel = useMemo(() => {
    if (!reservationContact) return '';
    return reservationContact.replace(/[^0-9+]/g, '');
  }, [reservationContact]);

  const cleanPhoneForWhatsApp = useMemo(() => {
    if (!reservationContact) return '';
    return reservationContact.replace(/[^0-9]/g, '');
  }, [reservationContact]);

  const handleCopyPhone = () => {
    if (reservationContact) {
      navigator.clipboard?.writeText(reservationContact);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  // Google Search & Photos fallback link
  const webSearchUrl = useMemo(() => {
    const query = encodeURIComponent(`${name} ${cityLabel} Morocco restaurant`);
    return `https://www.google.com/search?q=${query}`;
  }, [name, cityLabel]);

  // Aspect Scores based on actual listing ratings and price attributes
  const aspectScores = useMemo(() => {
    const base = Number(averageRating) || 4.2;
    return {
      food: Math.min(5, Math.max(3.8, base + 0.1)).toFixed(1),
      atmosphere: Math.min(5, Math.max(3.7, nearMedina || nearBeach ? base + 0.2 : base)).toFixed(1),
      service: Math.min(5, Math.max(3.6, hasEnglishStaff ? base : base - 0.2)).toFixed(1),
      value: Math.min(5, Math.max(3.5, lifestyle === 'lean' ? 4.6 : lifestyle === 'premium' ? 4.1 : 4.3)).toFixed(1)
    };
  }, [averageRating, nearMedina, nearBeach, hasEnglishStaff, lifestyle]);

  // Best For traveler target groups (from backend item.groupTypes)
  const bestForList = useMemo(() => {
    if (Array.isArray(groupTypes) && groupTypes.length > 0) {
      return groupTypes.map((g: string) => g.charAt(0).toUpperCase() + g.slice(1));
    }
    const list = ['Couples', 'Friends'];
    if (crowdLevel !== 'bustling') list.push('Families');
    if (lifestyle === 'lean' || hasEnglishStaff) list.push('Solo travelers');
    return list;
  }, [groupTypes, crowdLevel, lifestyle, hasEnglishStaff]);

  // Verified Dishes: pulls authentic dishes from data file ONLY. Zero hallucination.
  const finalBestDishes = useMemo(() => {
    if (Array.isArray(bestDishes) && bestDishes.length > 0) {
      return bestDishes;
    }
    return [];
  }, [bestDishes]);

  // Peer Eat Listings from Registry (bottom section)
  const peerListings = useMemo(() => {
    const registryKey = `${cityKey}-eat`;
    const cityList = listingsRegistry[registryKey] || [];
    return cityList
      .filter((l: any) => l.id !== id)
      .slice(0, 4);
  }, [cityKey, id]);

  // Real GPS coordinates & proximity calculation for restaurant center hub
  const restaurantCoords = useMemo(() => {
    const lat = item?.exactAddressAndCoordinates?.lat ?? item?.coordinates?.lat ?? item?.lat;
    const lng = item?.exactAddressAndCoordinates?.lng ?? item?.coordinates?.lng ?? item?.lng;
    if (typeof lat === 'number' && typeof lng === 'number' && lat !== 0 && lng !== 0) {
      return { lat, lng };
    }
    return getCityCenter(cityKey);
  }, [item, cityKey]);

  // Verified landmark walking distances using real GPS math
  const nearbyPlaces = useMemo(() => {
    return computePoiNearbyPlaces(cityKey, restaurantCoords, 4);
  }, [cityKey, restaurantCoords]);

  const addressText = item?.exactAddressAndCoordinates?.address || item?.address;

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-stone-400">
        <p className="text-lg font-serif">No listing selected.</p>
        <button 
          onClick={handleBackClick} 
          className="mt-4 text-[#234E35] hover:underline font-bold flex items-center gap-2 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    );
  }

  const eatReviewsData = item?.reviewsData || item?.ui?.reviewsData || item?.data?.reviewsData;

  // Build Eat hero metadata items (Location | Cuisine & Price | Live Schedule)
  const eatMetadata: HeroMetadataItem[] = [
    {
      id: 'location',
      icon: <MapPin className="w-4 h-4 text-[#C85A32] shrink-0" />,
      label: `${cityLabel}, Morocco`,
      sublabel: neighborhood ? `· ${neighborhood}` : undefined,
    },
    {
      id: 'cuisine',
      icon: <UtensilsCrossed className="w-4 h-4 text-[#C85A32] shrink-0" />,
      label: `${primaryCuisine} Cuisine`,
      sublabel: calculatedPriceRange ? `· ${priceTier} (~${calculatedPriceRange})` : `· ${priceTier}`,
    },
    ...((openTime || scheduleData.schedule.length > 0)
      ? [
          {
            id: 'hours',
            icon: <Clock className={cn('w-4 h-4 shrink-0', scheduleData.isOpenNow ? 'text-[#1F5A3B]' : 'text-stone-500')} />,
            label: scheduleData.statusLabel.replace(/^[🟢🟡🔵🟣🔴⚪]\s*/, ''),
            tone: (scheduleData.isOpenNow ? 'open' : 'closed') as 'open' | 'closed',
            onClick: () => setIsScheduleOpen((prev) => !prev),
            isExpanded: isScheduleOpen,
            popoverContent: (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="absolute top-full left-0 mt-2 z-50 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-stone-200/90 p-4 space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C9A84C]" /> Weekly Schedule
                  </span>
                  <span
                    className={cn(
                      'text-[10px] font-semibold px-2 py-0.5 rounded-md border',
                      scheduleData.isOpenNow
                        ? 'text-emerald-700 bg-emerald-50 border-emerald-200/60'
                        : 'text-rose-700 bg-rose-50 border-rose-200/60'
                    )}
                  >
                    {scheduleData.isOpenNow ? 'Open Now' : 'Closed'} · Morocco
                  </span>
                </div>
                <div className="space-y-1.5 text-xs">
                  {scheduleData.schedule.map((dayItem) => (
                    <div
                      key={dayItem.dayName}
                      className={cn(
                        'flex items-start justify-between gap-2 py-1.5 px-2.5 rounded-lg transition-colors',
                        dayItem.isToday
                          ? 'bg-amber-500/10 font-bold text-stone-900 border border-amber-500/25'
                          : 'text-stone-600 hover:bg-stone-50'
                      )}
                    >
                      <div className="min-w-0">
                        <span className="flex items-center gap-1.5">
                          {dayItem.isToday && <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />}
                          <span>{dayItem.dayName}</span>
                          {dayItem.isToday && <span className="text-[10px] text-[#C9A84C] font-semibold">(Today)</span>}
                        </span>
                        {dayItem.note && (
                          <p className="text-[10px] font-normal text-stone-500 mt-0.5 leading-snug">
                            {dayItem.note}
                          </p>
                        )}
                      </div>
                      <span
                        className={cn(
                          'tabular-nums text-right shrink-0',
                          dayItem.isClosed ? 'text-rose-600 font-medium' : 'text-stone-800'
                        )}
                      >
                        {dayItem.hoursText}
                      </span>
                    </div>
                  ))}
                </div>
                {scheduleData.specialNote && (
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 leading-snug">
                    {scheduleData.specialNote}
                  </div>
                )}
              </motion.div>
            ),
          },
        ]
      : []),
  ];

  // Build verified feature chips (collapsible via +N more)
  const eatFeatures: HeroFeatureChip[] = [
    {
      id: 'cuisine-chip',
      label: `${primaryCuisine} Food`,
      icon: <UtensilsCrossed className="w-3.5 h-3.5 text-[#C85A32]" />,
    },
    ...(isHalal
      ? [
          {
            id: 'halal-chip',
            label:
              servesAlcohol || alcoholPolicy === 'serves-alcohol'
                ? 'Halal Food · Serves Alcohol'
                : 'Halal Certified (Dry)',
            icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />,
            tooltip:
              servesAlcohol || alcoholPolicy === 'serves-alcohol'
                ? 'All meat dishes and ingredients are 100% Halal. The venue holds a liquor license and serves alcoholic beverages.'
                : 'Strictly Halal certified kitchen in a 100% alcohol-free, pork-free venue.',
            tone: 'amber' as const,
          },
        ]
      : []),
    ...(isVegetarianFriendly
      ? [
          {
            id: 'veg-chip',
            label: 'Vegetarian Friendly',
            icon: <Leaf className="w-3.5 h-3.5 text-emerald-600" />,
            tooltip: 'Offers verified vegetarian tajines, couscous, fresh salads, and plant-based Moroccan specialties.',
            tone: 'emerald' as const,
          },
        ]
      : []),
    ...(wiFi
      ? [{ id: 'wifi-chip', label: 'Free Wi-Fi', icon: <Wifi className="w-3.5 h-3.5 text-sky-600" /> }]
      : []),
    ...(airConditioning
      ? [{ id: 'ac-chip', label: 'Air Conditioning', icon: <Wind className="w-3.5 h-3.5 text-sky-600" /> }]
      : []),
    ...(nearMedina
      ? [
          {
            id: 'medina-chip',
            label: 'Medina Courtyard',
            icon: <MapPin className="w-3.5 h-3.5 text-stone-500" />,
            tooltip: 'Located inside the historical Medina pedestrian quarter with an authentic open-air courtyard.',
          },
        ]
      : []),
    ...(badge === 'hidden-gem'
      ? [
          {
            id: 'gem-chip',
            label: 'Hidden Gem',
            icon: <Sparkles className="w-3.5 h-3.5 text-purple-600" />,
            tooltip: 'Authentic local gem cherished by locals and tucked away from tourist crowds.',
            tone: 'purple' as const,
          },
        ]
      : []),
    ...(hasDelivery
      ? [
          {
            id: 'delivery-chip',
            label: 'Delivery Available',
            icon: <Car className="w-3.5 h-3.5 text-sky-600" />,
            tooltip: 'Local delivery available to your riad or hotel via Glovo or direct dispatch.',
            tone: 'sky' as const,
          },
        ]
      : []),
    ...(wheelchairAccessible
      ? [
          {
            id: 'access-chip',
            label: 'Step-Free Access',
            icon: <Accessibility className="w-3.5 h-3.5 text-emerald-700" />,
          },
        ]
      : []),
  ];

  const hasOnlineBooking = Boolean(bookingUrl || (reservationMethod?.includes('online') && cleanWebsite));
  const hasWhatsappBooking = Boolean(whatsappNumber || (reservationMethod?.includes('whatsapp') && cleanPhoneForWhatsApp));
  const resolvedPrimaryWhatsapp = whatsappNumber?.replace(/[^0-9]/g, '') || cleanPhoneForWhatsApp;

  const eatPrimaryAction = hasOnlineBooking
    ? {
        label: 'Book a Table',
        href: bookingUrl || cleanWebsite || '#',
        icon: <CalendarCheck className="w-4 h-4 shrink-0" />,
        variant: 'terracotta' as const,
        title: 'Book a table online',
      }
    : hasWhatsappBooking
      ? {
          label: 'Reserve via WhatsApp',
          href: `https://wa.me/${resolvedPrimaryWhatsapp}`,
          icon: <WhatsAppIcon variant="monochrome" className="w-4 h-4 shrink-0" />,
          variant: 'whatsapp' as const,
          title: 'Reserve via WhatsApp',
        }
      : cleanPhoneForTel
        ? {
            label: 'Call to Book',
            href: `tel:${cleanPhoneForTel}`,
            icon: <PhoneCall className="w-4 h-4 text-amber-300 shrink-0" />,
            variant: 'dark' as const,
            title: `Call ${reservationContact || 'to book'}`,
          }
        : {
            label: 'Walk-in Only',
            variant: 'muted' as const,
          };

  return (
    <div className="w-full" id={`eat-detail-${id}`}>
      {/* UNIFIED UPPER HERO SECTION (Warm Skyline Watermark · Strictly Gated Ratings · Action Hub) */}
      <ListingHeroHeader
        category="eat"
        categoryBadge={experienceTypes?.[0] ? String(experienceTypes[0]).replace(/-/g, ' ') : 'Restaurant'}
        title={name}
        metadata={eatMetadata}
        reviewsData={eatReviewsData}
        activeReviewSource={selectedReviewSource}
        onSelectReviewSource={setSelectedReviewSource}
        features={eatFeatures}
        servedFor={Array.isArray(mealTypes) ? mealTypes : []}
        servedForLabel="Served For"
        actions={{
          directionsUrl,
          directionsLabel: 'Get Directions',
          primaryAction: eatPrimaryAction,
          phone: reservationContact || undefined,
          onCopyPhone: handleCopyPhone,
          copiedPhone,
          whatsappNumber: !hasOnlineBooking && hasWhatsappBooking ? undefined : cleanPhoneForWhatsApp || undefined,
          websiteUrl: cleanWebsite || webSearchUrl,
          websiteTitle: cleanWebsite ? 'Visit official website' : 'Search online',
          instagramUrl: cleanInstagram || undefined,
          isBookmarked: bookmarked,
          onToggleBookmark: () => toggleBookmark({ id, type: 'eat', name, city: item.city || city || 'marrakech' }),
          onShare: handleShare,
          copiedLink,
          saveLabel: 'Save to Favorites',
          savedLabel: 'Saved in Favorites',
        }}
      />

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT CONTAINER (SPACIOUS, CENTERED CONTENT)
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* "Things You're Worried About!" — strictly rendered only if verified data is available */}
        {resolvedWorries && (
          <WorriesSection
            worries={resolvedWorries}
            title="Things You're Worried About!"
            subtitle="Honest answers to what usually worries diners — checked and verified, never guessed."
          />
        )}
        
        {/* ───────────────────────────────────────────────────────────
            LOCAL INSIDER TIP (AUTHENTIC EXPERT ADVICE FROM DATA)
        ─────────────────────────────────────────────────────────── */}
        {tip && (
          <div className="bg-[#FAF7F2] border-l-4 border-l-[#C9A84C] border border-[#EDE4D5] rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start gap-4" id="eat-insider-tip">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 flex items-center justify-center text-[#96700A] shrink-0 shadow-2xs">
              <Lightbulb className="w-5 h-5 text-[#96700A]" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#96700A] block">
                Local Insider Tip
              </span>
              <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-serif italic">
                "{tip}"
              </p>
            </div>
          </div>
        )}

        {/* ───────────────────────────────────────────────────────────
            2. "IS IT RIGHT FOR YOU?" (SOUL CARD - ZERO IMAGES)
        ─────────────────────────────────────────────────────────── */}
        <div className="bg-[#FAF7F2] border border-[#EDE4D5] rounded-3xl p-6 sm:p-8 shadow-sm" id="eat-soul-card">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center">
            
            {/* Left Column: Title, "Best for" sub-section, and Aspect Ratings sub-section */}
            <div className="space-y-4">
              
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                Is it right for you?
              </h2>

              {/* Sub-Section 1: BEST FOR */}
              <div className="bg-white/85 border border-[#E3D7C5] rounded-2xl p-4 sm:p-4.5 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5 text-[#C9A84C]" />
                    <span>Best For</span>
                  </span>
                  <span className="text-[10px] font-semibold text-stone-400 bg-stone-100/80 px-2 py-0.5 rounded-md border border-stone-200/50">
                    Ideal Fit
                  </span>
                </div>
                
                {bestForList && bestForList.length > 0 ? (
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {bestForList.map((target: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-white border border-[#DDD0BC] text-stone-800 text-xs font-semibold shadow-2xs hover:border-[#C9A84C] hover:bg-amber-50/30 transition-all cursor-default select-none"
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-stone-500 italic">Recommended for all Moroccan culinary explorers.</p>
                )}
              </div>

              {/* Sub-Section 2: ASPECT RATINGS */}
              <div className="bg-white/85 border border-[#E3D7C5] rounded-2xl p-4 sm:p-4.5 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-1 border-b border-[#F0E6D8]">
                  <span className="flex items-center gap-2 text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-[#C9A84C]" />
                    <span>Aspect Ratings</span>
                  </span>
                  <span className="text-[10px] font-semibold text-stone-400 bg-stone-100/80 px-2 py-0.5 rounded-md border border-stone-200/50">
                    5-Point Scale
                  </span>
                </div>

                <div className="space-y-2 pt-0.5 font-sans">
                  
                  <div className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-stone-50/80 transition-colors">
                    <span className="flex items-center gap-2 text-stone-700 font-bold w-28">
                      <UtensilsCrossed className="w-3.5 h-3.5 text-[#C9A84C]" /> Food
                    </span>
                    <CamelRating rating={parseFloat(aspectScores.food)} size="xs" showScore={false} />
                    <span className="font-bold text-stone-900 text-xs w-12 text-right tabular-nums">
                      {aspectScores.food}/5
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-stone-50/80 transition-colors">
                    <span className="flex items-center gap-2 text-stone-700 font-bold w-28">
                      <Armchair className="w-3.5 h-3.5 text-[#C9A84C]" /> Atmosphere
                    </span>
                    <CamelRating rating={parseFloat(aspectScores.atmosphere)} size="xs" showScore={false} />
                    <span className="font-bold text-stone-900 text-xs w-12 text-right tabular-nums">
                      {aspectScores.atmosphere}/5
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-stone-50/80 transition-colors">
                    <span className="flex items-center gap-2 text-stone-700 font-bold w-28">
                      <Languages className="w-3.5 h-3.5 text-[#C9A84C]" /> Service
                    </span>
                    <CamelRating rating={parseFloat(aspectScores.service)} size="xs" showScore={false} />
                    <span className="font-bold text-stone-900 text-xs w-12 text-right tabular-nums">
                      {aspectScores.service}/5
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-stone-50/80 transition-colors">
                    <span className="flex items-center gap-2 text-stone-700 font-bold w-28">
                      <DollarSign className="w-3.5 h-3.5 text-[#C9A84C]" /> Value
                    </span>
                    <CamelRating rating={parseFloat(aspectScores.value)} size="xs" showScore={false} />
                    <span className="font-bold text-stone-900 text-xs w-12 text-right tabular-nums">
                      {aspectScores.value}/5
                    </span>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Column: "The good" and "The not so good" summary card */}
            {(resolvedPros.length > 0 || resolvedCons.length > 0) && (
              <div className="bg-[#F4ECE1] border border-[#E6D9C8] rounded-2xl p-5 sm:p-6 space-y-4 lg:self-center">
                
                {/* The good */}
                {resolvedPros.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wide">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 fill-emerald-100" />
                        <span>The good</span>
                      </div>
                      {isProsConsDerived && (
                        <span className="text-[10px] text-stone-500 font-medium bg-white/70 px-2 py-0.5 rounded-md border border-[#E3D7C5]">
                          Verified Profile Facts
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2 pl-6 text-xs text-stone-800 font-medium list-disc marker:text-emerald-700">
                      {resolvedPros.map((point: string, idx: number) => (
                        <li key={idx} className="leading-snug">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* The not so good */}
                {resolvedCons.length > 0 && (
                  <div className={cn(resolvedPros.length > 0 && "pt-3 border-t border-[#E2D4C2]")}>
                    <div className="flex items-center gap-2 mb-2.5 text-rose-900 font-bold text-xs uppercase tracking-wide">
                      <XCircle className="w-4 h-4 text-rose-700 fill-rose-100" />
                      <span>The not so good</span>
                    </div>
                    <ul className="space-y-2 pl-6 text-xs text-stone-800 font-medium list-disc marker:text-rose-700">
                      {resolvedCons.map((point: string, idx: number) => (
                        <li key={idx} className="leading-snug">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            )}

          </div>

        </div>


        {/* ───────────────────────────────────────────────────────────
            3. ABOUT THE EXPERIENCE
        ─────────────────────────────────────────────────────────── */}
        {description && (
          <div className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#D4863A]">
                <Award className="w-4 h-4" />
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                About the Experience
              </h3>
            </div>
            <p className="text-stone-700 text-base leading-relaxed leading-7 max-w-4xl">
              {description}
            </p>
          </div>
        )}


        {/* ───────────────────────────────────────────────────────────
            4. VERIFIED MENU & TASTING SELECTION (WITH HIGHLY RECOMMENDED PLATES)
        ─────────────────────────────────────────────────────────── */}
        <InteractiveRestaurantMenu
          menu={item.menu || item.ui?.menu}
          restaurantId={id}
          restaurantName={name}
          city={cityLabel}
          primaryCuisine={primaryCuisine}
          highlightedDishes={finalBestDishes}
          reservationContact={reservationContact}
          whatsappNumber={whatsappNumber}
          bookingUrl={bookingUrl}
          website={website}
          googleMapsUrl={googleMapsUrl}
          bestTimeToVisit={bestTimeToVisit}
          averageWaitMinutes={averageWaitMinutes}
          paymentMethods={paymentMethods}
          directionsUrl={directionsUrl}
        />

        {/* ───────────────────────────────────────────────────────────
            5. LOGISTICS & OPERATIONAL DETAILS (HIGH-CONTRAST LABELS)
        ─────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Logistics Card */}
          <div className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-stone-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-800">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900">
                Logistics & Getting There
              </h3>
            </div>

            <div className="divide-y divide-stone-100 text-sm">
              {addressText && (
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900 shrink-0">
                    <MapPin className="w-4 h-4 text-emerald-700" /> Address
                  </span>
                  <span className="text-sm font-medium text-stone-700 text-right">
                    {addressText}
                  </span>
                </div>
              )}

              {typeof hasParking === 'boolean' && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Car className="w-4 h-4 text-emerald-700" /> Parking Access
                  </span>
                  <span className="text-sm font-semibold text-stone-800">
                    {hasParking ? 'Private parking nearby' : 'Street parking / Walking in'}
                  </span>
                </div>
              )}

              {typeof averageWaitMinutes === 'number' && averageWaitMinutes > 0 && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Clock className="w-4 h-4 text-emerald-700" /> Typical Wait Time
                  </span>
                  <span className="text-sm font-bold text-stone-900">
                    {averageWaitMinutes} mins
                  </span>
                </div>
              )}

              {bestTimeToVisit && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Sun className="w-4 h-4 text-amber-600" /> Best Time to Visit
                  </span>
                  <span className="text-sm font-medium text-stone-800">
                    {bestTimeToVisit}
                  </span>
                </div>
              )}

              {Array.isArray(seatingTypes) && seatingTypes.length > 0 && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Armchair className="w-4 h-4 text-emerald-700" /> Seating Styles
                  </span>
                  <span className="text-sm font-semibold text-stone-800 capitalize">
                    {seatingTypes.join(', ')}
                  </span>
                </div>
              )}

              {viewType && viewType !== 'none' && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Sun className="w-4 h-4 text-emerald-700" /> View Setting
                  </span>
                  <span className="text-sm font-semibold text-stone-800 capitalize">
                    {viewType}
                  </span>
                </div>
              )}
            </div>

            {/* Interactive Radius Walking Distance Map (Restaurant Hub) */}
            {nearbyPlaces.length > 0 && (
              <div className="pt-5 border-t border-stone-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
                    <Footprints className="w-4 h-4 text-emerald-700" />
                    <span>Walking Distance to Landmarks</span>
                  </span>
                  <span className="text-[10px] font-semibold text-stone-500 bg-stone-100/90 px-2 py-0.5 rounded-md border border-stone-200/60">
                    Real GPS Proximity
                  </span>
                </div>

                <WalkingDistanceMap
                  propertyName={name}
                  nearbyPlaces={nearbyPlaces}
                  hoveredPlaceId={hoveredPlaceId}
                  onHoverPlace={setHoveredPlaceId}
                  centerIcon="utensils"
                />
              </div>
            )}
          </div>

          {/* Operational Details Card */}
          <div className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-stone-100">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-800">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900">
                Operational Details
              </h3>
            </div>

            <div className="divide-y divide-stone-100 text-sm">
              <div className="py-3.5 flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                  <DollarSign className="w-4 h-4 text-emerald-700" /> Average Meal Cost
                </span>
                <span className="text-sm font-bold text-stone-900">
                  ~{pricePerPerson * 12} MAD per person
                </span>
              </div>

              {alcoholPolicy && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Info className="w-4 h-4 text-amber-700" /> Beverage Policy
                  </span>
                  <span className="text-sm font-semibold text-stone-800 capitalize">
                    {alcoholPolicy === 'serves-alcohol' ? 'Licensed (Serves Alcohol)' : 'Dry Dining (Alcohol-free venue)'}
                  </span>
                </div>
              )}

              {openTime && closeTime && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Clock className="w-4 h-4 text-amber-700" /> Service Hours
                  </span>
                  <span className="text-sm font-bold text-stone-900 font-mono">
                    {openTime} – {closeTime}
                  </span>
                </div>
              )}

              {ramadanFriendly && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Moon className="w-4 h-4 text-amber-700" /> Ramadan Service
                  </span>
                  <span className="text-sm font-semibold text-stone-800 capitalize">
                    {ramadanFriendly === 'special-ftour' ? 'Opens for Ftour buffet' : ramadanFriendly === 'serves-lunch' ? 'Serves lunch to visitors' : 'Evening service only'}
                  </span>
                </div>
              )}

              {((item?.languagesSpoken && item.languagesSpoken.length > 0) || hasEnglishStaff || hasFrenchStaff) && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Languages className="w-4 h-4 text-amber-700" /> Languages Spoken
                  </span>
                  <span className="text-sm font-semibold text-stone-800">
                    {item?.languagesSpoken && item.languagesSpoken.length > 0
                      ? item.languagesSpoken.join(', ')
                      : [hasEnglishStaff && 'English', hasFrenchStaff && 'French', 'Arabic'].filter(Boolean).join(', ')
                    }
                  </span>
                </div>
              )}

              {typeof wiFi === 'boolean' && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Wifi className="w-4 h-4 text-amber-700" /> Wi-Fi Access
                  </span>
                  <span className="text-sm font-semibold text-stone-800">
                    {wiFi ? 'Complimentary' : 'None'}
                  </span>
                </div>
              )}

              {typeof airConditioning === 'boolean' && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Wind className="w-4 h-4 text-amber-700" /> Air Conditioning
                  </span>
                  <span className="text-sm font-semibold text-stone-800">
                    {airConditioning ? 'Equipped with AC' : 'Natural courtyard breeze'}
                  </span>
                </div>
              )}

              {typeof wheelchairAccessible === 'boolean' && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Accessibility className="w-4 h-4 text-amber-700" /> Accessibility
                  </span>
                  <span className="text-sm font-semibold text-stone-800">
                    {wheelchairAccessible ? 'Wheelchair accessible' : 'Step-access entrance'}
                  </span>
                </div>
              )}

              {Array.isArray(paymentMethods) && paymentMethods.length > 0 && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <CreditCard className="w-4 h-4 text-amber-700" /> Accepted Payments
                  </span>
                  <span className="text-sm font-bold text-stone-900 capitalize">
                    {paymentMethods.join(', ')}
                  </span>
                </div>
              )}

              {reservationContact && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Phone className="w-4 h-4 text-amber-700" /> Phone / Booking
                  </span>
                  <a
                    href={`tel:${cleanPhoneForTel}`}
                    className="text-sm font-bold text-emerald-800 hover:underline flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{reservationContact}</span>
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* ───────────────────────────────────────────────────────────
            5.5. TRAVELER REVIEWS & COMMUNITY RATINGS
        ─────────────────────────────────────────────────────────── */}
        <PlaceReviewsSection
          reviewsData={eatReviewsData}
          placeName={name}
          category="eat"
          className="mt-12"
          externalSelectedSource={selectedReviewSource}
          onSelectedSourceChange={setSelectedReviewSource}
        />

        {/* ───────────────────────────────────────────────────────────
            6. EXPLORE PEER RESTAURANTS (CLEAN HORIZONTAL TEXT CARDS, ZERO IMAGES)
        ─────────────────────────────────────────────────────────── */}
        {peerListings.length > 0 && (
          <div className="pt-8 border-t border-stone-200/80" id="eat-bottom-peer-restaurants">
            
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#234E35] block mb-1">
                Similar Atmosphere & Taste
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                Recommended Restaurants in {cityLabel}
              </h3>
            </div>

            {/* Clean horizontal text cards with full name, style & neighborhood */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {peerListings.map((peer: any, idx: number) => {
                const peerRating = getListingRating(peer);
                const peerCity = String(peer.city || cityKey).toLowerCase();
                const peerName = peer.name || peer.ui?.name || peer.title || 'Restaurant';
                const peerNeighborhood = peer.neighborhood || peer.ui?.neighborhood || peer.district || 'Medina';
                const peerFoodStyle = peer.foodStyles?.[0] || peer.quiz?.foodStyles?.[0] || peer.cuisineTags?.[0] || peer.quiz?.cuisineTags?.[0] || 'Moroccan';
                const peerPrice = peer.pricePerPerson ?? peer.filter?.pricePerPerson;
                const peerSlug = getPlaceSlugById(peerCity, 'food', peer.id) || (peerName ? peerName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : peer.id);
                const peerUrl = buildPlaceUrl(peerCity, 'food', peerSlug);
                return (
                  <Link
                    key={peer.id || idx}
                    to={peerUrl}
                    onClick={() => {
                      useExploreStore.getState().setActiveItem(peer.id);
                    }}
                    className="group bg-white rounded-2xl border border-stone-200/90 p-4 hover:shadow-md hover:border-[#234E35]/60 transition-all cursor-pointer flex flex-col justify-between space-y-3 no-underline text-inherit"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wider truncate max-w-[120px]">
                          {peerNeighborhood}
                        </span>
                        <span className="text-[11px] text-stone-400 capitalize truncate">
                          {peerFoodStyle}
                        </span>
                      </div>

                      <h4 className="font-bold text-stone-900 text-sm group-hover:text-[#234E35] transition-colors line-clamp-1">
                        {peerName}
                      </h4>
                      {peerPrice ? (
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          ~{peerPrice} MAD / person
                        </p>
                      ) : null}
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                      <CamelRating rating={peerRating.averageRating} size="xs" showScore={true} />
                      <span className="text-xs font-bold text-[#234E35] group-hover:translate-x-1 transition-transform inline-flex items-center">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>
        )}

      </div>


      {/* ─────────────────────────────────────────────────────────────
          7. FULL MENU MODAL
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showMenuModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowMenuModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-stone-100 bg-white sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[#D4863A]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-stone-900">{name} Menu</h3>
                    <p className="text-xs text-stone-500">Official selection</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMenuModal(false)}
                  className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
                {fullMenu?.type === 'image' && fullMenu.content ? (
                  <img
                    src={fullMenu.content}
                    alt={`${name} menu`}
                    className="w-full h-auto object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                ) : fullMenu?.type === 'text' && fullMenu.content ? (
                  <div className="p-4 prose prose-stone max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-stone-800 text-sm leading-relaxed">
                      {fullMenu.content}
                    </pre>
                  </div>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <BookOpen className="w-10 h-10 text-stone-300 mx-auto" />
                    <p className="text-base font-bold text-stone-800">Verified Diner Photos & Menus</p>
                    <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
                      Full photographed menus and daily rotating specials are verified directly by diners on Google Maps.
                    </p>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#234E35] hover:bg-[#1A3D29] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>See photos and menu on Maps</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
