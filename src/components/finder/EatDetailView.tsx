import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, MapPin, Clock, 
  Navigation, CheckCircle2, XCircle, ChevronRight, ChevronDown, ArrowLeft, ExternalLink, X,
  BookOpen, Wifi, Wind, Globe, Instagram, UtensilsCrossed,
  Info, Sparkles, Car, Languages, CreditCard,
  Accessibility, DollarSign, Moon, Sun, Armchair, Leaf, ShieldCheck,
  Compass, Award, Share2, Phone, PhoneCall, Check, Copy, Lightbulb,
  CalendarCheck, Settings, Footprints, MessageSquareText, HelpCircle
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
import { getEatPriceMetrics } from '../../utils/eatPrice';
import diningHeroEditorialImg from '../../assets/images/botanical_food_flat_1791668271591.jpg';
import camelInsiderPointerImg from '../../assets/images/camel_insider_pointer.png';
import { prefersReducedMotion } from '../../utils/playfulFeedback';
import { useNavigate } from 'react-router-dom';
import { WalkingDistanceMap } from './stay/WalkingDistanceMap';
import {
  computePoiNearbyPlaces,
  formatNearbyTravelLabel,
  getWalkingDistancePlaces,
} from '../../engine/proximityEngine';
import { getCityCenter } from '../../engine/stayAdapter';
import { getPlaceSlugById, buildPlaceUrl } from '../../listings/placeRoutes';
import InteractiveRestaurantMenu from '../menu/InteractiveRestaurantMenu';
import WorriesSection from '../worries/WorriesSection';
import { resolveEatWorries } from '../../utils/eatWorriesResolver';
import PlaceReviewsSection from '../reviews/PlaceReviewsSection';
import PlaceFAQSection from '../common/PlaceFAQSection';
import { buildPlaceFaqs } from '../../data/seo/faqEngine';
import ListingHeroHeader, { WhatsAppIcon, type HeroFeatureChip, type HeroMetadataItem } from './ListingHeroHeader';
import ListingSectionNavigator, { type ListingNavigatorItem } from './ListingSectionNavigator';
import { hasVerifiedReviews, hasVerifiedWorries } from './listingNavUtils';
import type { ReviewSource } from '../../types/reviews';
import { useAppLanguage, useLangPath } from '../../utils/localeRouting';
import LocalizedLink from '../ui/LocalizedLink';
import {
  getPlaceUiCopy,
  localizeCityName,
  localizeCuisineLabel,
  localizeExperienceBadge,
  localizeGroupType,
  localizeSeatingType,
  localizeViewType,
  localizePaymentMethod,
  localizeLanguageSpoken,
  localizeDayName,
} from '../../data/placeUiI18n';
import { localizeListing } from '../../listings/translations';

interface EatDetailViewProps {
  item: any;
  onBack?: () => void;
}

export default function EatDetailView({ item, onBack }: EatDetailViewProps) {
  const navigate = useNavigate();
  const lang = useAppLanguage();
  const ui = getPlaceUiCopy(lang);
  const { navigateLang } = useLangPath();
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
    return getEatWeeklySchedule(
      {
        ...raw,
        openTime: raw.openTime || raw.ui?.openTime,
        closeTime: raw.closeTime || raw.ui?.closeTime,
        weeklySchedule: weekly?.map((s: any) => ({
          day: s.day,
          open: s.open || s.openTime,
          close: s.close || s.closeTime,
          isClosed: s.isClosed,
          note: s.note,
        })),
        closedDays: raw.closedDays || raw.filter?.closedDays,
        ramadanFriendly: raw.ramadanFriendly || raw.filter?.ramadanFriendly,
      },
      new Date(),
      lang
    );
  }, [item, lang]);

  // Consolidated ratings from real backend database
  const { averageRating, totalReviews } = useMemo(() => {
    return getListingRating(item);
  }, [item]);

  // City display label
  const cityKey = String(item?.city || city || 'marrakech').toLowerCase();
  const cityLabel = cityMap[cityKey]?.name || cityKey.charAt(0).toUpperCase() + cityKey.slice(1);
  const localizedCityLabel = localizeCityName(cityKey, cityLabel, lang);

  // Price tier symbol ($ / $$ / $$$) & normalized MAD price metrics
  const priceTier = useMemo(() => {
    if (lifestyle === 'lean' || pricePerPerson <= 10) return '$';
    if (lifestyle === 'premium' || pricePerPerson >= 25) return '$$$';
    return '$$';
  }, [lifestyle, pricePerPerson]);

  const eatPriceMetrics = useMemo(() => getEatPriceMetrics(item), [item]);
  const calculatedPriceRange = eatPriceMetrics.perPersonRangeText;
  const seasonalHoursNote: string | undefined =
    item?.seasonalHoursNote || item?.ui?.seasonalHoursNote;
  const editorialGuide: Array<{ heading?: string; title?: string; body: string }> = Array.isArray(
    item?.editorialGuide || item?.ui?.editorialGuide
  )
    ? (item?.editorialGuide || item?.ui?.editorialGuide)
    : [];
  const knowBeforeYouGo: string[] = Array.isArray(
    item?.knowBeforeYouGo || item?.ui?.knowBeforeYouGo
  )
    ? (item?.knowBeforeYouGo || item?.ui?.knowBeforeYouGo)
    : [];

  // Primary cuisine label
  const primaryCuisine = useMemo(() => {
    if (Array.isArray(foodStyles) && foodStyles.length > 0) return String(foodStyles[0]);
    if (typeof foodStyles === 'string' && foodStyles.trim()) return foodStyles.trim();
    return 'Moroccan';
  }, [foodStyles]);
  const localizedCuisine = localizeCuisineLabel(primaryCuisine, lang);

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
      navigateLang(`/finder/${cityKey}/food?view=results`);
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
    if (!instagram || instagram === 'not-available') return null;
    if (instagram.startsWith('http')) return instagram;
    return `https://instagram.com/${instagram.replace('@', '')}`;
  }, [instagram]);

  const cleanWebsite = useMemo(() => {
    if (!website || website === 'not-available') return null;
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

  // Verified landmark proximity distances (curated nearbyDistances first, GPS math fallback)
  const nearbyPlaces = useMemo(() => {
    const curated = getWalkingDistancePlaces(item);
    if (curated.length > 0) return curated;
    return computePoiNearbyPlaces(cityKey, restaurantCoords, 4);
  }, [item, cityKey, restaurantCoords]);

  const hasDriveLandmarks = useMemo(
    () =>
      nearbyPlaces.some(
        (p) =>
          p.travel_mode === 'drive' ||
          (p.travel_time_minutes ?? p.walking_time_minutes ?? 0) > 25
      ),
    [nearbyPlaces]
  );

  const eatFaqs = useMemo(
    () =>
      buildPlaceFaqs({
        listing: item,
        category: 'food',
        cityLabel,
        lang,
      }),
    [item, cityLabel, lang]
  );

  const addressText = item?.exactAddressAndCoordinates?.address || item?.address;

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-stone-400">
        <p className="text-lg font-serif">{ui.logistics.noListingSelected}</p>
        <button 
          onClick={handleBackClick} 
          className="mt-4 text-[#234E35] hover:underline font-bold flex items-center gap-2 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180" /> {ui.logistics.goBack}
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
      label: `${localizedCityLabel}, ${ui.hero.morocco}`,
      sublabel: neighborhood ? `· ${neighborhood}` : undefined,
    },
    {
      id: 'cuisine',
      icon: <UtensilsCrossed className="w-4 h-4 text-[#C85A32] shrink-0" />,
      label: ui.hero.cuisineLabel(localizedCuisine),
      sublabel: calculatedPriceRange ? `· ${priceTier} (~${calculatedPriceRange})` : `· ${priceTier}`,
    },
    ...((openTime || scheduleData.schedule.length > 0)
      ? [
          {
            id: 'hours',
            icon: <Clock className={cn('w-4 h-4 shrink-0', scheduleData.isOpenNow ? 'text-[#1F5A3B]' : 'text-stone-500')} />,
            label: scheduleData.statusLabel.replace(/^[🟢🟡🔵🟣🔴⚪]\s*/u, ''),
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
                    <Clock className="w-3.5 h-3.5 text-[#C9A84C]" /> {ui.hero.weeklySchedule}
                  </span>
                  <span
                    className={cn(
                      'text-[10px] font-semibold px-2 py-0.5 rounded-md border',
                      scheduleData.isOpenNow
                        ? 'text-emerald-700 bg-emerald-50 border-emerald-200/60'
                        : 'text-rose-700 bg-rose-50 border-rose-200/60'
                    )}
                  >
                    {scheduleData.isOpenNow ? ui.hero.openNow : ui.hero.closed} · {ui.hero.morocco}
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
                          <span>{localizeDayName(dayItem.dayName, lang)}</span>
                          {dayItem.isToday && <span className="text-[10px] text-[#C9A84C] font-semibold">({ui.hero.today})</span>}
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
                {seasonalHoursNote && (
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[11px] text-emerald-900 leading-snug">
                    {seasonalHoursNote}
                  </div>
                )}
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
      label: ui.hero.foodChipLabel(localizedCuisine),
      icon: <UtensilsCrossed className="w-3.5 h-3.5 text-[#C85A32]" />,
    },
    ...(isHalal
      ? [
          {
            id: 'halal-chip',
            label:
              servesAlcohol || alcoholPolicy === 'serves-alcohol'
                ? ui.features.halalAlcohol
                : ui.features.halalDry,
            icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />,
            tooltip:
              servesAlcohol || alcoholPolicy === 'serves-alcohol'
                ? ui.features.halalAlcoholTip
                : ui.features.halalDryTip,
            tone: 'amber' as const,
          },
        ]
      : []),
    ...(isVegetarianFriendly
      ? [
          {
            id: 'veg-chip',
            label: ui.features.vegFriendly,
            icon: <Leaf className="w-3.5 h-3.5 text-emerald-600" />,
            tooltip: ui.features.vegFriendlyTip,
            tone: 'emerald' as const,
          },
        ]
      : []),
    ...(wiFi
      ? [{ id: 'wifi-chip', label: ui.features.freeWifi, icon: <Wifi className="w-3.5 h-3.5 text-sky-600" /> }]
      : []),
    ...(airConditioning
      ? [{ id: 'ac-chip', label: ui.features.ac, icon: <Wind className="w-3.5 h-3.5 text-sky-600" /> }]
      : []),
    ...(nearMedina
      ? [
          {
            id: 'medina-chip',
            label: ui.features.medinaCourtyard,
            icon: <MapPin className="w-3.5 h-3.5 text-stone-500" />,
            tooltip: ui.features.medinaCourtyardTip,
          },
        ]
      : []),
    ...(badge === 'hidden-gem'
      ? [
          {
            id: 'gem-chip',
            label: ui.features.hiddenGem,
            icon: <Sparkles className="w-3.5 h-3.5 text-purple-600" />,
            tooltip: ui.features.hiddenGemTip,
            tone: 'purple' as const,
          },
        ]
      : []),
    ...(hasDelivery
      ? [
          {
            id: 'delivery-chip',
            label: ui.features.delivery,
            icon: <Car className="w-3.5 h-3.5 text-sky-600" />,
            tooltip: ui.features.deliveryTip,
            tone: 'sky' as const,
          },
        ]
      : []),
    ...(wheelchairAccessible
      ? [
          {
            id: 'access-chip',
            label: ui.features.stepFree,
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
        label: ui.hero.bookTable,
        href: bookingUrl || cleanWebsite || '#',
        icon: <CalendarCheck className="w-4 h-4 shrink-0" />,
        variant: 'terracotta' as const,
        title: ui.hero.bookTableTitle,
      }
    : hasWhatsappBooking
      ? {
          label: ui.hero.reserveWhatsApp,
          href: `https://wa.me/${resolvedPrimaryWhatsapp}`,
          icon: <WhatsAppIcon variant="monochrome" className="w-4 h-4 shrink-0" />,
          variant: 'whatsapp' as const,
          title: ui.hero.reserveWhatsAppTitle,
        }
      : cleanPhoneForTel
        ? {
            label: ui.hero.callToBook,
            href: `tel:${cleanPhoneForTel}`,
            icon: <PhoneCall className="w-4 h-4 text-amber-300 shrink-0" />,
            variant: 'dark' as const,
            title: ui.hero.callTargetTitle(reservationContact || ui.hero.callToBook),
          }
        : {
            label: ui.hero.walkInOnly,
            variant: 'muted' as const,
          };

  return (
    <div className="w-full" id={`eat-detail-${id}`}>
      {/* UNIFIED UPPER HERO SECTION (Warm Skyline Watermark · Strictly Gated Ratings · Action Hub) */}
      <ListingHeroHeader
        category="eat"
        categoryBadge={
          experienceTypes?.[0]
            ? localizeExperienceBadge(String(experienceTypes[0]), lang)
            : ui.hero.restaurantFallback
        }
        title={name}
        storefrontBanner={item?.storefrontBanner || item?.ui?.storefrontBanner}
        metadata={eatMetadata}
        reviewsData={eatReviewsData}
        activeReviewSource={selectedReviewSource}
        onSelectReviewSource={setSelectedReviewSource}
        features={eatFeatures}
        servedFor={Array.isArray(mealTypes) ? mealTypes : []}
        servedForLabel={ui.hero.servedFor}
        actions={{
          directionsUrl,
          directionsLabel: ui.hero.getDirections,
          primaryAction: eatPrimaryAction,
          phone: reservationContact || undefined,
          onCopyPhone: handleCopyPhone,
          copiedPhone,
          whatsappNumber: !hasOnlineBooking && hasWhatsappBooking ? undefined : cleanPhoneForWhatsApp || undefined,
          websiteUrl: cleanWebsite || webSearchUrl,
          websiteTitle: cleanWebsite ? ui.hero.visitWebsiteTitle : ui.hero.searchOnlineTitle,
          instagramUrl: cleanInstagram || undefined,
          isBookmarked: bookmarked,
          onToggleBookmark: () => toggleBookmark({ id, type: 'eat', name, city: item.city || city || 'marrakech' }),
          onShare: handleShare,
          copiedLink,
          saveLabel: ui.hero.saveFavorites,
          savedLabel: ui.hero.savedFavorites,
        }}
      />

      {/* Sticky Section Navigator */}
      <ListingSectionNavigator
        items={[
          {
            id: 'worries',
            label: ui.nav.worries,
            targetId: 'eat-worries-section',
            icon: <ShieldCheck className="w-4 h-4" />,
            available: hasVerifiedWorries(resolvedWorries),
          },
          {
            id: 'about',
            label: ui.nav.about,
            targetId: 'eat-soul-card',
            icon: <Info className="w-4 h-4" />,
            available: true,
          },
          {
            id: 'menu',
            label: ui.nav.menu,
            targetId: 'restaurant-menu-section',
            icon: <UtensilsCrossed className="w-4 h-4" />,
            available: Boolean((item?.menu?.sections?.length || item?.ui?.menu?.sections?.length || 0) > 0),
          },
          {
            id: 'logistics',
            label: ui.nav.hoursMap,
            targetId: 'eat-logistics-section',
            icon: <Clock className="w-4 h-4" />,
            available: true,
          },
          {
            id: 'faq',
            label: ui.nav.faq,
            targetId: 'eat-faq-section',
            icon: <HelpCircle className="w-4 h-4" />,
            available: eatFaqs.length > 0,
          },
          {
            id: 'reviews',
            label: ui.nav.reviews,
            targetId: 'eat-reviews-section',
            icon: <MessageSquareText className="w-4 h-4" />,
            available: hasVerifiedReviews(eatReviewsData),
          },
        ] satisfies ListingNavigatorItem[]}
      />

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT CONTAINER (SPACIOUS, CENTERED CONTENT)
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* "Things You're Worried About!" — strictly rendered only if verified data is available */}
        {hasVerifiedWorries(resolvedWorries) && resolvedWorries && (
          <div id="eat-worries-section">
            <WorriesSection
              worries={resolvedWorries}
              title={ui.worries.title}
              subtitle={ui.worries.subtitleEat}
            />
          </div>
        )}
        
        {/* ───────────────────────────────────────────────────────────
            LOCAL INSIDER TIP (AUTHENTIC EXPERT ADVICE FROM DATA)
        ─────────────────────────────────────────────────────────── */}
        {tip && (
          <div
            className="relative flex flex-row items-center sm:items-end gap-0"
            id="eat-insider-tip"
          >
            <motion.div
              initial={prefersReducedMotion() ? false : { opacity: 0, x: -10, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              whileHover={prefersReducedMotion() ? undefined : { rotate: [0, -3, 3, 0], scale: 1.04 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 shrink-0 -mr-2.5 sm:-mr-4 sm:mb-0.5 select-none"
            >
              <img
                src={camelInsiderPointerImg}
                alt={ui.insiderTip.camelAlt}
                referrerPolicy="no-referrer"
                className="w-[74px] h-[76px] sm:w-[112px] sm:h-[116px] object-contain drop-shadow-[0_6px_14px_rgba(23,48,66,0.14)]"
              />
            </motion.div>

            <div className="flex-1 min-w-0 bg-[#FAF7F2] border-l-4 border-l-[#C9A84C] border border-[#EDE4D5] rounded-3xl p-4 sm:p-7 pl-5 sm:pl-8 shadow-xs flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-500/15 flex items-center justify-center text-[#96700A] shrink-0 shadow-2xs">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-[#96700A]" />
              </div>
              <div className="space-y-1 min-w-0">
                <span className="text-xs font-bold uppercase tracking-wider text-[#96700A] block">
                  {ui.insiderTip.title}
                </span>
                <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-serif italic">
                  "{tip}"
                </p>
              </div>
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
                {ui.soul.title}
              </h2>

              {/* Sub-Section 1: BEST FOR */}
              <div className="bg-white/85 border border-[#E3D7C5] rounded-2xl p-4 sm:p-4.5 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5 text-[#C9A84C]" />
                    <span>{ui.soul.bestFor}</span>
                  </span>
                  <span className="text-[10px] font-semibold text-stone-400 bg-stone-100/80 px-2 py-0.5 rounded-md border border-stone-200/50">
                    {ui.soul.idealFit}
                  </span>
                </div>
                
                {bestForList && bestForList.length > 0 ? (
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {bestForList.map((target: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-white border border-[#DDD0BC] text-stone-800 text-xs font-semibold shadow-2xs hover:border-[#C9A84C] hover:bg-amber-50/30 transition-all cursor-default select-none"
                      >
                        {localizeGroupType(target, lang)}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-stone-500 italic">{ui.soul.bestForFallback}</p>
                )}
              </div>

              {/* Sub-Section 2: ASPECT RATINGS */}
              <div className="bg-white/85 border border-[#E3D7C5] rounded-2xl p-4 sm:p-4.5 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-1 border-b border-[#F0E6D8]">
                  <span className="flex items-center gap-2 text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-[#C9A84C]" />
                    <span>{ui.soul.aspectRatings}</span>
                  </span>
                  <span className="text-[10px] font-semibold text-stone-400 bg-stone-100/80 px-2 py-0.5 rounded-md border border-stone-200/50">
                    {ui.soul.fivePointScale}
                  </span>
                </div>

                <div className="space-y-2 pt-0.5 font-sans">
                  
                  <div className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-stone-50/80 transition-colors">
                    <span className="flex items-center gap-2 text-stone-700 font-bold w-28">
                      <UtensilsCrossed className="w-3.5 h-3.5 text-[#C9A84C]" /> {ui.soul.food}
                    </span>
                    <CamelRating rating={parseFloat(aspectScores.food)} size="xs" showScore={false} />
                    <span className="font-bold text-stone-900 text-xs w-12 text-right tabular-nums">
                      {aspectScores.food}/5
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-stone-50/80 transition-colors">
                    <span className="flex items-center gap-2 text-stone-700 font-bold w-28">
                      <Armchair className="w-3.5 h-3.5 text-[#C9A84C]" /> {ui.soul.atmosphere}
                    </span>
                    <CamelRating rating={parseFloat(aspectScores.atmosphere)} size="xs" showScore={false} />
                    <span className="font-bold text-stone-900 text-xs w-12 text-right tabular-nums">
                      {aspectScores.atmosphere}/5
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-stone-50/80 transition-colors">
                    <span className="flex items-center gap-2 text-stone-700 font-bold w-28">
                      <Languages className="w-3.5 h-3.5 text-[#C9A84C]" /> {ui.soul.service}
                    </span>
                    <CamelRating rating={parseFloat(aspectScores.service)} size="xs" showScore={false} />
                    <span className="font-bold text-stone-900 text-xs w-12 text-right tabular-nums">
                      {aspectScores.service}/5
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-stone-50/80 transition-colors">
                    <span className="flex items-center gap-2 text-stone-700 font-bold w-28">
                      <DollarSign className="w-3.5 h-3.5 text-[#C9A84C]" /> {ui.soul.value}
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
                        <span>{ui.soul.theGood}</span>
                      </div>
                      {isProsConsDerived && (
                        <span className="text-[10px] text-stone-500 font-medium bg-white/70 px-2 py-0.5 rounded-md border border-[#E3D7C5]">
                          {ui.soul.verifiedProfileFacts}
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
                      <span>{ui.soul.theNotSoGood}</span>
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
            3. ABOUT THE EXPERIENCE + EDITORIAL DINING GUIDE
        ─────────────────────────────────────────────────────────── */}
        {(description || editorialGuide.length > 0 || knowBeforeYouGo.length > 0) && (
          <div className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#D4863A]">
                  <Award className="w-4 h-4" />
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                  {ui.about.title}
                </h3>
              </div>
              {description && (
                <p className="text-stone-700 text-base leading-relaxed max-w-4xl">
                  {description}
                </p>
              )}
            </div>

            {editorialGuide.length > 0 && (
              <div className="pt-5 border-t border-[#EDE4D5] grid grid-cols-1 md:grid-cols-2 gap-6">
                {editorialGuide.map((part, idx) => (
                  <div key={`${part.heading || part.title || 'section'}-${idx}`} className="space-y-1.5">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#142333]">
                      {part.heading || part.title}
                    </h4>
                    <p className="text-sm text-stone-700 leading-relaxed">
                      {part.body}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {knowBeforeYouGo.length > 0 && (
              <div className="pt-5 border-t border-[#EDE4D5]">
                <div className="rounded-2xl border border-[#E8DFCF] bg-[#FAF7F2] p-5 space-y-3">
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8A6D1F]">
                    <Info className="w-4 h-4" /> {ui.about.knowBeforeYouGo}
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-stone-800">
                    {knowBeforeYouGo.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#1F5A3B] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}


        {/* ───────────────────────────────────────────────────────────
            4. VERIFIED MENU & TASTING SELECTION (WITH HIGHLY RECOMMENDED PLATES)
        ─────────────────────────────────────────────────────────── */}
        <InteractiveRestaurantMenu
          menu={item.menu || item.ui?.menu}
          restaurantId={id}
          restaurantName={name}
          city={localizedCityLabel}
          primaryCuisine={localizedCuisine}
          highlightedDishes={finalBestDishes}
          reservationContact={reservationContact}
          whatsappNumber={whatsappNumber}
          bookingUrl={bookingUrl}
          website={cleanWebsite || ''}
          googleMapsUrl={googleMapsUrl}
          bestTimeToVisit={bestTimeToVisit}
          averageWaitMinutes={averageWaitMinutes}
          paymentMethods={paymentMethods}
          directionsUrl={directionsUrl}
        />

        {/* ───────────────────────────────────────────────────────────
            5. LOGISTICS & OPERATIONAL DETAILS (HIGH-CONTRAST LABELS)
        ─────────────────────────────────────────────────────────── */}
        <div id="eat-logistics-section" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Logistics Card */}
          <div className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-stone-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-800">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900">
                {ui.logistics.title}
              </h3>
            </div>

            <div className="divide-y divide-stone-100 text-sm">
              {addressText && (
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900 shrink-0">
                    <MapPin className="w-4 h-4 text-emerald-700" /> {ui.logistics.address}
                  </span>
                  <span className="text-sm font-medium text-stone-700 text-right">
                    {addressText}
                  </span>
                </div>
              )}

              {typeof hasParking === 'boolean' && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Car className="w-4 h-4 text-emerald-700" /> {ui.logistics.parkingAccess}
                  </span>
                  <span className="text-sm font-semibold text-stone-800">
                    {hasParking ? ui.logistics.privateParking : ui.logistics.streetParking}
                  </span>
                </div>
              )}

              {typeof averageWaitMinutes === 'number' && averageWaitMinutes > 0 && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Clock className="w-4 h-4 text-emerald-700" /> {ui.logistics.typicalWaitTime}
                  </span>
                  <span className="text-sm font-bold text-stone-900">
                    {ui.logistics.minsSuffix(averageWaitMinutes)}
                  </span>
                </div>
              )}

              {bestTimeToVisit && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Sun className="w-4 h-4 text-amber-600" /> {ui.logistics.bestTimeToVisit}
                  </span>
                  <span className="text-sm font-medium text-stone-800">
                    {bestTimeToVisit}
                  </span>
                </div>
              )}

              {Array.isArray(seatingTypes) && seatingTypes.length > 0 && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Armchair className="w-4 h-4 text-emerald-700" /> {ui.logistics.seatingStyles}
                  </span>
                  <span className="text-sm font-semibold text-stone-800 capitalize">
                    {seatingTypes.map((s: string) => localizeSeatingType(s, lang)).join(', ')}
                  </span>
                </div>
              )}

              {viewType && viewType !== 'none' && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Sun className="w-4 h-4 text-emerald-700" /> {ui.logistics.viewSetting}
                  </span>
                  <span className="text-sm font-semibold text-stone-800 capitalize">
                    {localizeViewType(String(viewType), lang)}
                  </span>
                </div>
              )}
            </div>

            {/* Interactive Radius Proximity Map (Restaurant Hub) */}
            {nearbyPlaces.length > 0 && (
              <div className="pt-5 border-t border-stone-100 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
                    {hasDriveLandmarks ? (
                      <Car className="w-4 h-4 text-[#C85A32]" />
                    ) : (
                      <Footprints className="w-4 h-4 text-emerald-700" />
                    )}
                    <span>
                      {hasDriveLandmarks
                        ? ui.logistics.nearbyLandmarks
                        : ui.logistics.walkingDistance}
                    </span>
                  </span>
                  <span className="text-[10px] font-semibold text-stone-500 bg-stone-100/90 px-2 py-0.5 rounded-md border border-stone-200/60 shrink-0">
                    {hasDriveLandmarks ? ui.logistics.walkDriveTimes : ui.logistics.realGpsProximity}
                  </span>
                </div>

                <WalkingDistanceMap
                  propertyName={name}
                  nearbyPlaces={nearbyPlaces}
                  hoveredPlaceId={hoveredPlaceId}
                  onHoverPlace={setHoveredPlaceId}
                  centerIcon="utensils"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {nearbyPlaces.map((place) => {
                    const isDrive =
                      place.travel_mode === 'drive' ||
                      (place.travel_time_minutes ?? place.walking_time_minutes ?? 0) > 25;
                    const travelLabel = formatNearbyTravelLabel(place, lang);
                    const isHovered = hoveredPlaceId === place.id;
                    return (
                      <div
                        key={place.id}
                        onMouseEnter={() => setHoveredPlaceId(place.id)}
                        onMouseLeave={() => setHoveredPlaceId(null)}
                        className={cn(
                          'flex items-center justify-between gap-2 px-3 py-2 rounded-xl border text-xs transition-colors',
                          isHovered
                            ? 'bg-[#FAF3EA] border-[#C9A84C]'
                            : 'bg-[#FAF7F2]/70 border-[#EDE4D5]'
                        )}
                      >
                        <div className="min-w-0">
                          <p className="font-semibold text-stone-900 truncate">{place.name}</p>
                          {typeof place.distance_km === 'number' && place.distance_km > 0 && (
                            <p className="text-[10px] text-stone-500 tabular-nums">
                              {place.distance_km} km
                            </p>
                          )}
                        </div>
                        <span className="inline-flex items-center gap-1 font-bold text-stone-800 shrink-0 tabular-nums">
                          {isDrive ? (
                            <Car className="w-3.5 h-3.5 text-[#C85A32]" />
                          ) : (
                            <Footprints className="w-3.5 h-3.5 text-emerald-700" />
                          )}
                          <span>{travelLabel}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
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
                {ui.logistics.operationalTitle}
              </h3>
            </div>

            <div className="divide-y divide-stone-100 text-sm">
              {(eatPriceMetrics.perPersonRangeText || eatPriceMetrics.avgPersonText) && (
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <DollarSign className="w-4 h-4 text-emerald-700" /> {ui.logistics.averageMealCost}
                  </span>
                  <div className="text-right tabular-nums">
                    <span className="text-sm font-bold text-stone-900 block">
                      {eatPriceMetrics.perPersonRangeText
                        ? `${eatPriceMetrics.perPersonRangeText} ${ui.logistics.perPersonSuffix}`
                        : ui.logistics.avgPersonApprox(eatPriceMetrics.avgPersonMad || 0)}
                    </span>
                    {eatPriceMetrics.menuRangeText && (
                      <span className="text-[11px] font-medium text-stone-500 block">
                        {ui.logistics.menuDishesLabel} {eatPriceMetrics.menuRangeText}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {alcoholPolicy && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Info className="w-4 h-4 text-amber-700" /> {ui.logistics.beveragePolicy}
                  </span>
                  <span className="text-sm font-semibold text-stone-800 capitalize">
                    {alcoholPolicy === 'serves-alcohol' ? ui.logistics.servesAlcohol : ui.logistics.dryDining}
                  </span>
                </div>
              )}

              {openTime && closeTime && (
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Clock className="w-4 h-4 text-amber-700" /> {ui.logistics.serviceHours}
                  </span>
                  <div className="text-right">
                    <span className="text-sm font-bold text-stone-900 font-mono tabular-nums block">
                      {openTime} – {closeTime}
                    </span>
                    {seasonalHoursNote && (
                      <span className="text-[11px] font-medium text-emerald-800 block mt-0.5">
                        {seasonalHoursNote}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {ramadanFriendly && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Moon className="w-4 h-4 text-amber-700" /> {ui.logistics.ramadanService}
                  </span>
                  <span className="text-sm font-semibold text-stone-800 capitalize">
                    {ramadanFriendly === 'special-ftour'
                      ? ui.logistics.ramadanFtour
                      : ramadanFriendly === 'serves-lunch'
                        ? ui.logistics.ramadanLunch
                        : ui.logistics.ramadanEvening}
                  </span>
                </div>
              )}

              {((item?.languagesSpoken && item.languagesSpoken.length > 0) || hasEnglishStaff || hasFrenchStaff) && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Languages className="w-4 h-4 text-amber-700" /> {ui.logistics.languagesSpoken}
                  </span>
                  <span className="text-sm font-semibold text-stone-800">
                    {item?.languagesSpoken && item.languagesSpoken.length > 0
                      ? item.languagesSpoken.map((l: string) => localizeLanguageSpoken(l, lang)).join(', ')
                      : [hasEnglishStaff && 'English', hasFrenchStaff && 'French', 'Arabic']
                          .filter(Boolean)
                          .map((l) => localizeLanguageSpoken(String(l), lang))
                          .join(', ')
                    }
                  </span>
                </div>
              )}

              {typeof wiFi === 'boolean' && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Wifi className="w-4 h-4 text-amber-700" /> {ui.logistics.wifiAccess}
                  </span>
                  <span className="text-sm font-semibold text-stone-800">
                    {wiFi ? ui.logistics.complimentary : ui.logistics.none}
                  </span>
                </div>
              )}

              {typeof airConditioning === 'boolean' && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Wind className="w-4 h-4 text-amber-700" /> {ui.logistics.airConditioning}
                  </span>
                  <span className="text-sm font-semibold text-stone-800">
                    {airConditioning ? ui.logistics.equippedAc : ui.logistics.naturalBreeze}
                  </span>
                </div>
              )}

              {typeof wheelchairAccessible === 'boolean' && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Accessibility className="w-4 h-4 text-amber-700" /> {ui.logistics.accessibility}
                  </span>
                  <span className="text-sm font-semibold text-stone-800">
                    {wheelchairAccessible ? ui.logistics.wheelchairAccessible : ui.logistics.stepAccess}
                  </span>
                </div>
              )}

              {Array.isArray(paymentMethods) && paymentMethods.length > 0 && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <CreditCard className="w-4 h-4 text-amber-700" /> {ui.logistics.acceptedPayments}
                  </span>
                  <span className="text-sm font-bold text-stone-900 capitalize">
                    {paymentMethods.map((m: string) => localizePaymentMethod(m, lang)).join(', ')}
                  </span>
                </div>
              )}

              {reservationContact && (
                <div className="py-3.5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Phone className="w-4 h-4 text-amber-700" /> {ui.logistics.phoneBooking}
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
            5.4. FREQUENTLY ASKED QUESTIONS
        ─────────────────────────────────────────────────────────── */}
        {eatFaqs.length > 0 && (
          <div id="eat-faq-section">
            <PlaceFAQSection
              faqs={eatFaqs}
              placeName={name}
              subtitle={ui.faq.eatSubtitle}
            />
          </div>
        )}

        {/* ───────────────────────────────────────────────────────────
            5.5. TRAVELER REVIEWS & COMMUNITY RATINGS
        ─────────────────────────────────────────────────────────── */}
        {hasVerifiedReviews(eatReviewsData) && (
          <div id="eat-reviews-section">
            <PlaceReviewsSection
              reviewsData={eatReviewsData}
              placeName={name}
              category="eat"
              className="mt-12"
              externalSelectedSource={selectedReviewSource}
              onSelectedSourceChange={setSelectedReviewSource}
            />
          </div>
        )}

        {/* ───────────────────────────────────────────────────────────
            6. EXPLORE PEER RESTAURANTS (CLEAN HORIZONTAL TEXT CARDS, ZERO IMAGES)
        ─────────────────────────────────────────────────────────── */}
        {peerListings.length > 0 && (
          <div className="pt-8 border-t border-stone-200/80" id="eat-bottom-peer-restaurants">
            
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#234E35] block mb-1">
                {ui.peers.kicker}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                {ui.peers.heading(localizedCityLabel)}
              </h3>
            </div>

            {/* Clean horizontal text cards with full name, style & neighborhood */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {peerListings.map((rawPeer: any, idx: number) => {
                const peer = localizeListing(rawPeer, lang);
                const peerRating = getListingRating(peer);
                const peerCity = String(peer.city || cityKey).toLowerCase();
                const peerName = peer.name || peer.ui?.name || peer.title || ui.hero.restaurantFallback;
                const peerNeighborhood = peer.neighborhood || peer.ui?.neighborhood || peer.district || 'Medina';
                const peerFoodStyle = peer.foodStyles?.[0] || peer.quiz?.foodStyles?.[0] || peer.cuisineTags?.[0] || peer.quiz?.cuisineTags?.[0] || 'Moroccan';
                const peerMetrics = getEatPriceMetrics(peer);
                const peerSlug = getPlaceSlugById(peerCity, 'food', peer.id) || (peerName ? peerName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : peer.id);
                const peerUrl = buildPlaceUrl(peerCity, 'food', peerSlug);
                return (
                  <LocalizedLink
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
                          {localizeCuisineLabel(peerFoodStyle, lang)}
                        </span>
                      </div>

                      <h4 className="font-bold text-stone-900 text-sm group-hover:text-[#234E35] transition-colors line-clamp-1">
                        {peerName}
                      </h4>
                      {peerMetrics.avgPersonMad ? (
                        <p className="text-[11px] text-stone-500 mt-0.5 tabular-nums">
                          {ui.logistics.avgPersonApprox(peerMetrics.avgPersonMad)}
                        </p>
                      ) : null}
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                      <CamelRating rating={peerRating.averageRating} size="xs" showScore={true} />
                      <span className="text-xs font-bold text-[#234E35] group-hover:translate-x-1 transition-transform inline-flex items-center">
                        <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                      </span>
                    </div>
                  </LocalizedLink>
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
                    <h3 className="font-display text-xl font-bold text-stone-900">{ui.menuModal.menuTitle(name)}</h3>
                    <p className="text-xs text-stone-500">{ui.menuModal.officialSelection}</p>
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
                    alt={ui.menuModal.menuTitle(name)}
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
                    <p className="text-base font-bold text-stone-800">{ui.menuModal.verifiedDinerPhotos}</p>
                    <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
                      {ui.menuModal.verifiedDinerPhotosDesc}
                    </p>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#234E35] hover:bg-[#1A3D29] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{ui.menuModal.seePhotosOnMaps}</span>
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
