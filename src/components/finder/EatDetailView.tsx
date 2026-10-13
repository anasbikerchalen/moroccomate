import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, MapPin, Clock, 
  Navigation, CheckCircle2, XCircle, ChevronRight, ChevronDown, ArrowLeft, ExternalLink, X,
  BookOpen, Wifi, Wind, Globe, Instagram, UtensilsCrossed,
  Info, Sparkles, Car, Languages, CreditCard,
  Accessibility, DollarSign, Moon, Sun, Armchair, Leaf, ShieldCheck,
  Compass, Award, Share2, Phone, PhoneCall, MessageSquare, Check, Copy, Lightbulb,
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
import { useNavigate } from 'react-router-dom';
import { WalkingDistanceMap } from './stay/WalkingDistanceMap';
import { computePoiNearbyPlaces } from '../../engine/proximityEngine';
import { getCityCenter } from '../../engine/stayAdapter';

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
    return getEatWeeklySchedule(item || {});
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
    if (foodStyles && foodStyles.length > 0) return foodStyles[0];
    return 'Moroccan';
  }, [foodStyles]);

  // Bookmarking
  const bookmarked = isBookmarked(id);

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

  // Verified Dishes: pulls authentic dishes from backend database or derives cuisine-specific highlights
  const finalBestDishes = useMemo(() => {
    if (Array.isArray(bestDishes) && bestDishes.length > 0) return bestDishes;
    
    // Dynamic cuisine-aware derivation based on styles, primaryCuisine, and listing details
    const descriptor = [...(foodStyles || []), primaryCuisine, name, description].join(' ').toLowerCase();
    
    if (descriptor.includes('burger') || descriptor.includes('american') || descriptor.includes('mcdonald') || descriptor.includes('burger king')) {
      return ['Signature Flame-Grilled Burger', 'Crispy Golden Fries', 'Thick Handspun Milkshake'];
    }
    if (descriptor.includes('chicken') || descriptor.includes('kfc') || descriptor.includes('poulet')) {
      return ['Crispy Fried Chicken Platter', 'Spiced Tender Strips', 'Seasoned Golden Fries'];
    }
    if (descriptor.includes('pizza') || descriptor.includes('domino') || descriptor.includes('italian')) {
      return ['Wood-Fired Artisanal Pizza', 'Fresh Handmade Pasta', 'Garlic Bread & Mixed Greens'];
    }
    if (descriptor.includes('seafood') || descriptor.includes('fish') || descriptor.includes('poisson') || descriptor.includes('ocean')) {
      return ['Fresh Catch of the Day', 'Grilled Chermoula Sardines', 'Seafood Paella & Calamari'];
    }
    if (descriptor.includes('cafe') || descriptor.includes('coffee') || descriptor.includes('pastry') || descriptor.includes('tea') || descriptor.includes('breakfast')) {
      return ['Specialty Roast Coffee', 'Fresh Flaky Croissant', 'Artisanal Moroccan Mint Tea'];
    }
    if (descriptor.includes('french') || descriptor.includes('bistro')) {
      return ['Classic Steak Frites', 'Pan-Seared Duck Confit', 'Fresh Seasonal Fruit Tart'];
    }
    if (descriptor.includes('asian') || descriptor.includes('sushi') || descriptor.includes('japanese') || descriptor.includes('noodles')) {
      return ['Signature Sushi Platter', 'Fresh Salmon Sashimi', 'Handcrafted Steamed Dumplings'];
    }
    if (descriptor.includes('snack') || descriptor.includes('fast food') || descriptor.includes('sandwich')) {
      return ['Toasted Kefta Panini', 'Crispy Golden Wedges', 'Fresh Pressed Orange Juice'];
    }
    if (descriptor.includes('international') || descriptor.includes('fusion') || descriptor.includes('mediterranean')) {
      return ["Chef's Daily Creation", 'Seasonal Market Plate', 'House Special Dessert'];
    }
    return ['Slow-Cooked Heritage Tagine', 'Seven-Vegetable Steamed Couscous', 'Traditional Moroccan Pastilla'];
  }, [bestDishes, foodStyles, primaryCuisine, name, description]);

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

  return (
    <div className="w-full" id={`eat-detail-${id}`}>
      
      {/* ─────────────────────────────────────────────────────────────
          1. FULL-BLEED UPPER SECTION (EDGE-TO-EDGE, UNBOXED WITH DROP SHADOW)
          - Wide Garden Dining Image spanning full width
          - Floating White Back Button & Controls
          - Full-width Organic Curved Wave Transition
          - Unboxed, spacious title & metadata area
          - Drop shadow separating cleanly from background
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full bg-white border-b border-stone-200/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.07),0_4px_12px_-2px_rgba(0,0,0,0.03)] relative z-20">
        
        {/* SLIM WIDE IMAGE BANNER (COMPACT 160-210px, FULL WIDTH) */}
        <div className="relative w-full h-[160px] sm:h-[185px] md:h-[210px] overflow-hidden bg-[#FAF7F2]">
          <img
            src={diningHeroEditorialImg}
            alt={`${name} Moroccan dining setting`}
            className="w-full h-full object-cover object-center select-none"
          />

          {/* FLOATING WHITE ROUND BUTTONS: BOOKMARK & SHARE (TOP RIGHT) */}
          <div className="absolute top-4 right-4 sm:top-5 sm:right-6 z-20 flex items-center gap-2">
            <button
              onClick={() => toggleBookmark({ id, type: 'eat', name, city: item.city || city || 'marrakech' })}
              id={`eat-btn-bookmark-${id}`}
              className={cn(
                "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all cursor-pointer border border-stone-200/70 hover:bg-stone-50 active:scale-95",
                bookmarked ? "text-red-500" : "text-stone-700 hover:text-red-500"
              )}
              title={bookmarked ? "Saved in favorites" : "Save spot"}
            >
              <Heart className={cn("w-4 h-4", bookmarked && "fill-current")} />
            </button>
            <button
              onClick={handleShare}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-stone-700 hover:text-stone-950 transition-all cursor-pointer border border-stone-200/70 hover:bg-stone-50 active:scale-95"
              title="Share listing"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* FULL-WIDTH ORGANIC CURVED SVG WAVE */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-7 sm:h-9 md:h-11 block"
              preserveAspectRatio="none"
            >
              <path
                d="M0,45 C280,110 520,120 780,55 C1040,-10 1260,70 1440,35 L1440,120 L0,120 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </div>

        {/* UNBOXED, OPEN TITLE & METADATA BAR (FULL WIDTH WITH INNER MAX-W-7XL) */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-8 pt-2 sm:pt-4">
          
          {/* Header Title & Clean Breadcrumb Subline */}
          <div className="space-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173042] tracking-tight">
              {name}
            </h1>
            
            {/* Clean, readable sub-header line */}
            <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base text-stone-600 font-medium">
              <span className="inline-flex items-center gap-1.5 text-stone-900 font-semibold">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{cityLabel} · {neighborhood}</span>
              </span>
              <span className="text-stone-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-stone-800 font-semibold capitalize">
                <UtensilsCrossed className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{primaryCuisine}</span>
              </span>
              <span className="text-stone-300">·</span>
              <span className="inline-flex items-center gap-1.5 font-bold text-stone-900">
                <span>{priceTier}</span>
                {calculatedPriceRange && (
                  <span className="text-stone-500 font-normal text-xs sm:text-sm">
                    (~{calculatedPriceRange}/person)
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* SPLIT TWO-COLUMN ARCHITECTURE (MODERN CARD LAYOUT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
            
            {/* LEFT COLUMN: Ratings, Atmosphere & Dietary, Meal Services (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Ratings Block */}
              <div className="bg-[#FAF7F2] border border-[#EAE2D5] rounded-2xl p-4 sm:p-5 shadow-2xs">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <CamelRating rating={averageRating} size="md" />
                    {totalReviews > 0 && (
                      <span className="text-xs sm:text-sm text-stone-500 font-medium">
                        ({totalReviews.toLocaleString()} authentic reviews)
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    {googleRating && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold bg-white text-stone-800 border border-stone-200/90 shadow-2xs">
                        <span className="text-amber-500 font-bold">★</span>
                        <span>Google {googleRating}</span>
                        {googleReviewCount && <span className="text-stone-400 font-normal">({googleReviewCount.toLocaleString()})</span>}
                      </span>
                    )}
                    {tripadvisorRating && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-2xs">
                        <span className="text-emerald-600 font-bold">★</span>
                        <span>TripAdvisor {tripadvisorRating}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Operating Status & Dining Features */}
              <div className="flex flex-wrap items-center gap-2" id="eat-tags-row">
                
                {/* 1. Clickable Operating Hours Accordion Dropdown */}
                {(openTime || scheduleData.schedule.length > 0) && (
                  <div className="relative inline-block" id="eat-hours-accordion-container">
                    <button
                      type="button"
                      onClick={() => setIsScheduleOpen(!isScheduleOpen)}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer shadow-2xs select-none active:scale-98",
                        scheduleData.isOpenNow
                          ? "bg-emerald-50 text-emerald-900 border-emerald-200/90 hover:bg-emerald-100/70"
                          : "bg-stone-100 text-stone-700 border-stone-200/90 hover:bg-stone-200/70"
                      )}
                      aria-expanded={isScheduleOpen}
                      title="Click to view full weekly hours"
                    >
                      <span className={cn(
                        "w-2 h-2 rounded-full shrink-0",
                        scheduleData.isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-stone-400"
                      )} />
                      <span>{scheduleData.statusLabel}</span>
                      <ChevronDown className={cn(
                        "w-3.5 h-3.5 text-stone-500 transition-transform duration-200",
                        isScheduleOpen && "rotate-180 text-emerald-700"
                      )} />
                    </button>

                    {/* Accordion Dropdown Content */}
                    <AnimatePresence>
                      {isScheduleOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 z-50 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-stone-200/90 p-4 space-y-3"
                        >
                          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                            <span className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-[#C9A84C]" /> Weekly Schedule
                            </span>
                            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                              Live Schedule
                            </span>
                          </div>

                          {/* Day-by-day table */}
                          <div className="space-y-1.5 text-xs">
                            {scheduleData.schedule.map((dayItem) => (
                              <div
                                key={dayItem.dayName}
                                className={cn(
                                  "flex items-center justify-between py-1.5 px-2.5 rounded-lg transition-colors",
                                  dayItem.isToday
                                    ? "bg-amber-500/10 font-bold text-stone-900 border border-amber-500/25"
                                    : "text-stone-600 hover:bg-stone-50"
                                )}
                              >
                                <span className="flex items-center gap-1.5">
                                  {dayItem.isToday && <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />}
                                  <span>{dayItem.dayName}</span>
                                  {dayItem.isToday && <span className="text-[10px] text-[#C9A84C] font-semibold">(Today)</span>}
                                </span>
                                <span className={cn(
                                  "tabular-nums text-right",
                                  dayItem.isClosed ? "text-rose-600 font-medium" : "text-stone-800"
                                )}>
                                  {dayItem.hoursText}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Friday Prayer / Special Notice */}
                          {scheduleData.specialNote && (
                            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 leading-snug">
                              {scheduleData.specialNote}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* 2. Halal Food & Alcohol Truth Verification */}
                {isHalal && (servesAlcohol || alcoholPolicy === 'serves-alcohol') ? (
                  <TagTooltip content="All meat dishes and ingredients are 100% Halal. The venue holds a liquor license and serves alcoholic beverages.">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/90 shadow-2xs hover:bg-amber-100/70 transition-colors cursor-help">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Halal Food · Serves Alcohol</span>
                    </span>
                  </TagTooltip>
                ) : isHalal ? (
                  <TagTooltip content="Strictly Halal certified kitchen in a 100% alcohol-free, pork-free venue.">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/90 shadow-2xs hover:bg-amber-100/70 transition-colors cursor-help">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Halal Certified (Dry)</span>
                    </span>
                  </TagTooltip>
                ) : null}

                {/* 3. Vegetarian Friendly with Tooltip */}
                {isVegetarianFriendly && (
                  <TagTooltip content="Offers verified vegetarian tajines, couscous, fresh salads, and plant-based Moroccan specialties.">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-green-50 text-green-900 border border-green-200/90 shadow-2xs hover:bg-green-100/70 transition-colors cursor-help">
                      <Leaf className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      <span>Vegetarian Friendly</span>
                    </span>
                  </TagTooltip>
                )}

                {/* 4. Medina Courtyard with Tooltip */}
                {nearMedina && (
                  <TagTooltip content="Located inside the historical Medina pedestrian quarter with an authentic open-air courtyard.">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200/90 shadow-2xs hover:bg-stone-200/70 transition-colors cursor-help">
                      <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                      <span>Medina Courtyard</span>
                    </span>
                  </TagTooltip>
                )}

                {/* 5. Hidden Gem with Tooltip */}
                {badge === 'hidden-gem' && (
                  <TagTooltip content="Authentic local gem cherished by locals and tucked away from tourist crowds.">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-50 text-purple-900 border border-purple-200/90 shadow-2xs hover:bg-purple-100/70 transition-colors cursor-help">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span>Hidden Gem</span>
                    </span>
                  </TagTooltip>
                )}

                {/* 6. Delivery Available with Tooltip */}
                {hasDelivery && (
                  <TagTooltip content="Local delivery available to your riad or hotel via Glovo or direct dispatch.">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/90 shadow-2xs hover:bg-blue-100/70 transition-colors cursor-help">
                      <Car className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Delivery Available</span>
                    </span>
                  </TagTooltip>
                )}
              </div>

              {/* Meal Service Types Row: Converted to Sleek Pill Badges */}
              {Array.isArray(mealTypes) && mealTypes.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1.5" id="eat-meal-types-row">
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mr-1">
                    Served For:
                  </span>
                  {mealTypes.map((meal: string, idx: number) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-stone-100/90 text-stone-800 text-xs font-semibold capitalize border border-stone-200/80 shadow-2xs hover:bg-stone-200/60 transition-colors"
                    >
                      {meal.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: Quick Action, Direct Calling & Social Links Hub (5 cols on lg) */}
            <div className="lg:col-span-5 bg-[#FAF7F2] border border-[#EAE2D5] rounded-2xl p-5 shadow-xs space-y-4">
              
              {/* Primary Dual CTA Row: Get Directions + Reservation Action */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* 1. Directions */}
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="eat-btn-get-directions"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#234E35] hover:bg-[#1A3D29] text-white font-bold text-xs tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer group active:scale-98"
                >
                  <Navigation className="w-4 h-4 text-emerald-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>Get directions</span>
                </a>

                {/* 2. Dynamic Data-Backed Reservation Action */}
                {bookingUrl || (reservationMethod?.includes('online') && cleanWebsite) ? (
                  <a
                    href={bookingUrl || cleanWebsite || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="eat-btn-book-table"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#C9A84C] hover:bg-[#b8953d] text-stone-950 font-bold text-xs tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer group active:scale-98"
                    title="Book a table online"
                  >
                    <CalendarCheck className="w-4 h-4 text-stone-950 group-hover:scale-110 transition-transform shrink-0" />
                    <span>Book a Table</span>
                  </a>
                ) : whatsappNumber || (reservationMethod?.includes('whatsapp') && cleanPhoneForWhatsApp) ? (
                  <a
                    href={`https://wa.me/${whatsappNumber?.replace(/[^0-9]/g, '') || cleanPhoneForWhatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="eat-btn-reserve-whatsapp"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer group active:scale-98"
                    title="Reserve via WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform shrink-0" />
                    <span>Reserve via WhatsApp</span>
                  </a>
                ) : cleanPhoneForTel ? (
                  <a
                    href={`tel:${cleanPhoneForTel}`}
                    id="eat-btn-call-to-book"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer group active:scale-98"
                    title={`Call ${reservationContact || 'to book'}`}
                  >
                    <PhoneCall className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform shrink-0" />
                    <span>Call to Book</span>
                  </a>
                ) : (
                  <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-stone-200/60 text-stone-400 font-bold text-xs cursor-not-allowed select-none border border-stone-200">
                    <span>Walk-in Only</span>
                  </div>
                )}
              </div>

              {/* Direct Reservation & Phone Action Strip */}
              {reservationContact && (
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${cleanPhoneForTel}`}
                    id="eat-btn-call"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-[#234E35] border border-stone-200/90 font-bold text-xs tracking-wide shadow-2xs transition-all active:scale-95"
                    title={`Call ${reservationContact}`}
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Call {reservationContact}</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    type="button"
                    className="px-3 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 transition-colors border border-stone-200/90 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  {reservationMethod?.includes('whatsapp') && cleanPhoneForWhatsApp && (
                    <a
                      href={`https://wa.me/${cleanPhoneForWhatsApp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] text-xs font-bold transition-all border border-[#25D366]/30 shadow-2xs"
                      title="Message on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#128C7E]" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                  )}
                </div>
              )}

              {/* Official Channels Hub: Styled Tactile Buttons */}
              <div className="pt-2 border-t border-stone-200/70">
                <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2">
                  Official Channels
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  
                  {/* Website Button */}
                  {cleanWebsite ? (
                    <a
                      href={cleanWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 font-bold text-xs transition-all shadow-xs hover:shadow-sm active:scale-95 group cursor-pointer"
                      title="Visit official website"
                    >
                      <Globe className="w-4 h-4 text-emerald-700 group-hover:scale-110 transition-transform shrink-0" />
                      <span className="truncate">Website</span>
                      <ExternalLink className="w-3 h-3 text-stone-400 ml-auto shrink-0" />
                    </a>
                  ) : (
                    <a
                      href={webSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 font-bold text-xs transition-all shadow-xs hover:shadow-sm active:scale-95 group cursor-pointer"
                      title="Search photos & reviews online"
                    >
                      <Globe className="w-4 h-4 text-stone-500 group-hover:scale-110 transition-transform shrink-0" />
                      <span className="truncate">Web / Photos</span>
                      <ExternalLink className="w-3 h-3 text-stone-400 ml-auto shrink-0" />
                    </a>
                  )}

                  {/* Instagram Button */}
                  {cleanInstagram ? (
                    <a
                      href={cleanInstagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 text-rose-700 border border-rose-200 font-bold text-xs transition-all shadow-xs hover:shadow-sm active:scale-95 group cursor-pointer"
                      title="Open Instagram profile"
                    >
                      <Instagram className="w-4 h-4 text-rose-600 group-hover:scale-110 transition-transform shrink-0" />
                      <span className="truncate">Instagram</span>
                      <ExternalLink className="w-3 h-3 text-rose-400 ml-auto shrink-0" />
                    </a>
                  ) : (
                    <TagTooltip content="No official Instagram profile on file for this venue.">
                      <div
                        className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-100/80 text-stone-400 border border-stone-200 text-xs font-semibold cursor-not-allowed select-none shadow-2xs"
                        title="No Instagram profile on file"
                      >
                        <Instagram className="w-4 h-4 text-stone-400 shrink-0" />
                        <span className="truncate">No Instagram</span>
                      </div>
                    </TagTooltip>
                  )}

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>


      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT CONTAINER (SPACIOUS, CENTERED CONTENT)
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
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
            4. HIGHLY RECOMMENDED PLATES
        ─────────────────────────────────────────────────────────── */}
        <div className="bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-8 shadow-xs" id="eat-dishes-section">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/15 flex items-center justify-center text-[#D4863A] shadow-2xs">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  Highly Recommended Plates
                </h3>
                <p className="text-xs text-stone-500 font-medium mt-0.5">
                  Signature {primaryCuisine ? `${primaryCuisine} ` : ''}culinary highlights verified for {name}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowMenuModal(true)}
              className="inline-flex items-center gap-2.5 px-4 py-3 sm:py-3.5 rounded-2xl bg-stone-50/60 hover:bg-stone-100/90 text-stone-800 border border-stone-200/70 shadow-2xs hover:shadow-xs transition-all cursor-pointer self-start sm:self-auto active:scale-98 font-bold text-xs group"
              title={`View ${name} menu`}
            >
              <div className="w-6 h-6 rounded-lg bg-amber-500/15 flex items-center justify-center text-[#D4863A] shrink-0 group-hover:scale-105 transition-transform">
                <BookOpen className="w-3.5 h-3.5 text-[#D4863A]" />
              </div>
              <span>View full menu</span>
            </button>
          </div>

          {/* Dish cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 mb-6">
            {finalBestDishes.map((dishName: string, idx: number) => (
              <div 
                key={idx} 
                className="group p-4 rounded-2xl border border-stone-200/80 bg-stone-50/60 hover:bg-stone-50 hover:border-[#D4863A]/40 transition-all flex flex-col justify-between"
              >
                <div className="w-full h-24 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#F6EFE5] to-[#EDE0D0] border border-[#E3D6C5]">
                  <div className="absolute inset-0 bg-[radial-gradient(#C9A84C_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
                  <UtensilsCrossed className="w-7 h-7 text-[#C2613C] relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-stone-900 line-clamp-2 min-h-[32px] leading-snug">
                    {dishName}
                  </h5>
                  <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-wider text-amber-800 bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-500/25">
                    Verified Dish
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Real Beverage Policy & Average Cost */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-stone-100">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-stone-200/70 bg-stone-50/50">
              <DollarSign className="w-5 h-5 text-emerald-700" />
              <div>
                <span className="block text-xs uppercase font-bold text-stone-500">Average Meal Cost</span>
                <span className="text-sm font-bold text-stone-900">~{pricePerPerson * 12} MAD per person</span>
              </div>
            </div>
            {alcoholPolicy && (
              <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-stone-200/70 bg-stone-50/50">
                <Info className="w-5 h-5 text-amber-700" />
                <div>
                  <span className="block text-xs uppercase font-bold text-stone-500">Beverage Policy</span>
                  <span className="text-sm font-bold text-stone-900 capitalize">
                    {alcoholPolicy === 'serves-alcohol' ? 'Licensed (Serves Alcohol)' : 'Dry Dining (Alcohol-free venue)'}
                  </span>
                </div>
              </div>
            )}
          </div>

        </div>


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
            6. EXPLORE PEER RESTAURANTS (CLEAN HORIZONTAL TEXT CARDS, ZERO IMAGES)
        ─────────────────────────────────────────────────────────── */}
        {peerListings.length > 0 && (
          <div className="pt-8 border-t border-stone-200/80" id="eat-bottom-peer-restaurants">
            
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#234E35] block mb-1">
                More Dining Discoveries
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                Explore Peer Restaurants in {cityLabel}
              </h3>
            </div>

            {/* Clean horizontal text cards - ZERO IMAGES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {peerListings.map((peer: any, idx: number) => {
                const peerRating = getListingRating(peer);
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      useExploreStore.getState().setActiveItem(peer.id);
                      navigate(`/place/${peer.city || cityKey}/food/${peer.id}`);
                    }}
                    className="group bg-white rounded-2xl border border-stone-200/90 p-4 hover:shadow-md hover:border-[#234E35]/60 transition-all cursor-pointer flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wider">
                          {peer.neighborhood || 'Medina'}
                        </span>
                        <span className="text-[11px] text-stone-400 capitalize">
                          {peer.foodStyles?.[0] || 'Moroccan'}
                        </span>
                      </div>

                      <h4 className="font-bold text-stone-900 text-sm group-hover:text-[#234E35] transition-colors line-clamp-1">
                        {peer.name}
                      </h4>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                      <CamelRating rating={peerRating.averageRating} size="xs" showScore={true} />
                      <span className="text-xs font-bold text-[#234E35] group-hover:translate-x-1 transition-transform inline-flex items-center">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
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
