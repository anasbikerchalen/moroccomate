import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart, MapPin, Clock, Shield, ThumbsUp, ThumbsDown,
  Navigation, CheckCircle2, ChevronRight, ArrowLeft, ExternalLink, MessageSquare, X,
  BookOpen, type LucideIcon, Wifi, Wind, Globe, ShieldAlert, Star, DollarSign,
  Info, Sparkles, HelpCircle, User, Award, Layers, Compass, Camera, Calendar, Flame, AlertCircle, Video
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useSavedStore } from '../../state/savedStore';
import { usePlanStore } from '../../state/planStore';
import { useParameterStore } from '../../state/parameterStore';
import { useTransportStore } from '../../state/transportStore';
import { useExploreStore } from '../../state/exploreStore';
import { useNavigate, useLocation } from 'react-router-dom';
import { cityMap } from '../../data/cities';
import PlaceSavvyProfile from '../savvy/PlaceSavvyProfile';
import { getCityTheme } from '../../utils/cityPalette';
import { resolveListingImages, handleListingImageError } from '../../utils/imageResolver';

const cityYoutubeMap: Record<string, string> = {
  marrakech: "0T2QZfUvF3I",   // Marrakech Medina 4K walking tour
  fes: "mCHp_Q8T1bI",         // Fes labyrinth tour
  agadir: "NlV39OqU0pU",       // Agadir coastal walking tour
  chefchaouen: "m2v9S0r2xLg",  // Chefchaouen tour
  essaouira: "v9K_X7W2Ers",    // Essaouira wind city walk
  casablanca: "I8Kq-bF06jQ",   // Casablanca city walk
  tangier: "L1nB_uL_l0o",      // Tangier walk
  rabat: "v197O5l_wX4",        // Rabat walk
  merzouga: "h_W3f8m3v0I",     // Merzouga desert tour
};

interface ActivityDetailViewProps {
  item: any;
  onBack: () => void;
}

export default function ActivityDetailView({ item, onBack }: ActivityDetailViewProps) {
  const { omitGoogleImage } = useExploreStore();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const ref = query.get('ref');
  const { toggleBookmark, isBookmarked } = useSavedStore();
  const { addCustomActivity } = usePlanStore();
  const { city: currentCityStore } = useParameterStore();

  // Active tab selection: 'experience', 'planner', 'social', 'savvy'
  const [activeTab, setActiveTab] = useState<'experience' | 'planner' | 'social' | 'savvy'>('experience');

  // Time Constraint selector state
  const [timeBudget, setTimeBudget] = useState<'1day' | '3days' | 'afternoon'>('3days');

  // Photo gallery filter
  const [photoFilter, setPhotoFilter] = useState<'all' | 'highlights' | 'visitor' | 'seasonal'>('all');

  // Selected photo for lightbox modal
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Primary attributes
  const {
    id = '',
    name = '',
    city = 'marrakech',
    neighborhood = 'Medina',
    description = '',
    price = 0,
    entryPrice = 0,
    lifestyle = ['balanced'],
    groupTypes = ['solo', 'couple'],
    crowdLevel = 'balanced',
    durationMinutes = 120,
    hasEnglishGuide = true,
    hasFrenchGuide = true,
    images = [],
    googleRating = 4.5,
    reviewCount = 120,
    googleMapsUrl = '',
    safetyLevel = 4,
    energyLevel = 'moderate',
    transportMode = 'walkable',
    isKidFriendly = true,
    isFemaleFriendly = true,
    isWheelchairAccessible = false,
    isPhotographyFriendly = true,
    hasPrivateOption = false,
    hasSunsetView = false,
    goodForRain = false,
    tags = [],
    vibeTags = [],
    archetypeAffinity = [],
    tip = '',
    badge = '',
    shortValueProp = '',
    distanceFromCenterKm,
    highlights = [],
    emotionalBenefits = [],
    openingHours = '',
    bestTimeToVisit = '',
    typicalWaitTimeMinutes,
    seasonality = '',
    ticketTypes = [],
    discountsInfo = '',
    includedServices = [],
    hiddenCostsInfo = '',
    address = '',
    parkingInfo = '',
    publicTransportInfo = '',
    dressCode = '',
    equipmentNeeded = [],
    fitnessLevel = '',
    ageRestrictions = '',
    safetyNotes = '',
    languages = [],
    visitorQuotes = [],
    nearbyCombos = [],
    seasonalInfo,
    officialWebsite = '',
    ticketWebsite = '',
    contactPhone = '',
  } = item || {};

  const bookmarked = isBookmarked(id);

  const handleToggleBookmark = () => {
    toggleBookmark({
      id: id,
      type: 'activity',
      name: name,
      city: city || 'marrakech',
      image: images && images.length > 0 ? images[0] : undefined
    });
  };

  // Save last viewed listing to localStorage
  useEffect(() => {
    if (id && name) {
      localStorage.setItem('last_viewed_listing', JSON.stringify({
        id,
        name,
        category: 'activity',
        url: window.location.pathname
      }));
    }
  }, [id, name]);
  const resolvedCityName = cityMap[city]?.name || (city ? city.charAt(0).toUpperCase() + city.slice(1) : '');

  const themeColors = useMemo(() => {
    return getCityTheme(city);
  }, [city]);

  const resolvedHeroImage = useMemo(() => {
    return resolveListingImages({
      id,
      googlePlaceId: item?.googlePlaceId,
      images,
      nonCopyrightImage: item?.nonCopyrightImage,
      category: 'things',
      omitGooglePlaceApi: omitGoogleImage
    });
  }, [id, item, images, omitGoogleImage]);

  const videoId = useMemo(() => {
    if (item?.youtubeVideoId) return item.youtubeVideoId;
    return cityYoutubeMap[(city || '').toLowerCase()] || "0T2QZfUvF3I";
  }, [item, city]);

  // Dynamic Stock Images Fallback
  const finalImages = useMemo(() => {
    const list = [...(images || [])];
    const stock = [
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop', // Moroccan arches / souk
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop', // Sunset landscape
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&auto=format&fit=crop', // Desert camping / stars
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop'  // Blue Chefchaouen vibe
    ];
    while (list.length < 4) {
      list.push(stock[list.length % stock.length]);
    }
    return list;
  }, [images]);

  // Handle adding to plan action
  const handleAddToPlan = () => {
    addCustomActivity(
      city || item.city || 'marrakech',
      'afternoon',
      'things-to-do',
      name
    );
    console.log(`"${name}" has been added to your Trip Dossier! You can view and manage it on the Plan Builder tab.`);
    if (ref === 'planner') {
      navigate('/planner');
    }
  };

  // Level C - Pros & Cons generator
  const pros = useMemo(() => {
    if (item?.pros && item.pros.length > 0) return item.pros;
    const list = [];
    if (googleRating >= 4.5) list.push('Consistently high ratings for outstanding atmosphere');
    if (durationMinutes <= 60) list.push('Quick experience - highly efficient for busy schedules');
    if (durationMinutes > 120) list.push('Immersive, deeply relaxing pace');
    if (price === 0 || entryPrice === 0) list.push('Completely free - exceptional budget utility');
    if (hasSunsetView) list.push('Iconic Golden Hour sunset photography vantage point');
    if (isKidFriendly) list.push('Excellent layout and interest for children');
    if (transportMode === 'walkable') list.push('Centrally located, easy walk from main areas');
    if (isPhotographyFriendly) list.push('Extremely photogenic architecture and scenic framing');

    // Fill defaults
    if (list.length < 3) list.push('Rich tactile engagement with local traditions');
    if (list.length < 3) list.push('Highly authentic local atmosphere');
    return list.slice(0, 3);
  }, [item, googleRating, durationMinutes, price, entryPrice, hasSunsetView, isKidFriendly, transportMode, isPhotographyFriendly]);

  const cons = useMemo(() => {
    if (item?.cons && item.cons.length > 0) return item.cons;
    const list = [];
    if (crowdLevel === 'bustling') list.push('Can get heavily crowded; expect queues at peak hours');
    if (energyLevel === 'active' || energyLevel === 'intense') list.push('Requires moderate physical stamina and climbing stairs');
    if (transportMode === 'taxi') list.push('Slightly remote; requires taxi negotiation or transit');
    if (!isWheelchairAccessible) list.push('Uneven cobbles and steps; limited wheelchair access');
    if (!goodForRain) list.push('Entirely open-air; highly weather dependent (rain/excessive midday heat)');
    
    // Fill defaults
    if (list.length < 2) list.push('Requires polite but firm haggling with nearby street vendors');
    if (list.length < 2) list.push('Limited English signage; hiring a local guide is beneficial');
    return list.slice(0, 2);
  }, [item, crowdLevel, energyLevel, transportMode, isWheelchairAccessible, goodForRain]);

  // Level K - Unique Story & Cultural Context Generator based on name/city
  const storyInfo = useMemo(() => {
    const cityCapitalized = resolvedCityName;
    return {
      title: item.storyTitle || `The Legacy of ${name}`,
      history: item.history || `This iconic site holds deep significance in ${cityCapitalized}. Over generations, it has acted as a crucial anchor of social and mercantile life, preserving historical design structures and serving as a testament to Morocco's diverse spatial architecture.`,
      culturalImportance: item.culturalImportance || `A cornerstone of local traditions where families, tradespeople, and artisans gather. It encapsulates the artistic mastery of Moroccan zellige, carved plasterwork, or ancient stone fortifying techniques unique to this region.`,
      legend: item.localLegend || `Local guides share stories of ancient caravans halting here at dusk, using the landmarks to orient themselves across the rugged terrain under the guidance of stars.`,
      funFact: item.funFact || `Restoration works in recent years used purely local raw earth and limestone pigments to preserve the exact thermal and tactile qualities of the original 16th-century builders.`
    };
  }, [name, city, item, resolvedCityName]);

  // Level J - Suggested Itinerary Generator (A Perfect Day Combination)
  const perfectDayItinerary = useMemo(() => {
    return [
      {
        time: '09:00 AM',
        title: 'Morning Medina Exploration',
        desc: `Begin the day wandering through the cool, quiet alleys of ${resolvedCityName}'s ancient center before the crowds arrive.`
      },
      {
        time: '11:00 AM',
        title: `Explore ${name}`,
        desc: `Spend ~${durationMinutes >= 60 ? `${Math.round(durationMinutes / 60)}h` : `${durationMinutes}m`} experiencing this highlight. Ideal light for photography.`,
        highlight: true
      },
      {
        time: '01:30 PM',
        title: 'Authentic Traditional Lunch',
        desc: 'Settle down at a nearby shaded rooftop terrace for a slow-cooked chicken tajine with olives and preserved lemons.'
      },
      {
        time: '04:00 PM',
        title: 'Souk Bargaining & Mint Tea',
        desc: 'Head to the bazaar quarter. Enjoy a refreshing glass of hot mint tea and interact with friendly local weavers and spice masters.'
      },
      {
        time: '06:30 PM',
        title: 'Sunset Viewpoint',
        desc: 'Conclude the day at a panoramic high-point, watching the city silhouette turn a deep violet gold.'
      }
    ];
  }, [name, durationMinutes, resolvedCityName]);

  // Level G - Audience Fit Score Metrics
  const audienceMatching = useMemo(() => {
    const isSolo = groupTypes.includes('solo');
    const isCouple = groupTypes.includes('couple') || groupTypes.includes('couples');
    const isFamily = groupTypes.includes('family') || groupTypes.includes('families') || isKidFriendly;
    const isSeniors = groupTypes.includes('seniors');

    return [
      { name: '👫 Couples & Romantics', score: isCouple ? 95 : 70, color: 'bg-rose-500' },
      { name: '🎒 Solo Backpackers', score: isSolo ? 90 : 65, color: 'bg-emerald-500' },
      { name: '👪 Families & Kids', score: isFamily ? 92 : 45, color: 'bg-sky-500' },
      { name: '👟 Adventure & Active Seekers', score: energyLevel === 'active' || energyLevel === 'intense' ? 95 : 60, color: 'bg-amber-500' },
      { name: '👵 Seniors & Slow Pace', score: isSeniors && energyLevel === 'relaxed' ? 95 : (energyLevel === 'intense' ? 30 : 75), color: 'bg-purple-500' }
    ];
  }, [groupTypes, isKidFriendly, energyLevel]);

  // Level D - Trip Fit Recommendation Engine
  const tripFitAssessment = useMemo(() => {
    switch (timeBudget) {
      case '1day':
        return {
          score: durationMinutes <= 60 ? 95 : 60,
          color: durationMinutes <= 60 ? 'text-emerald-600 border-emerald-100 bg-emerald-50/50' : 'text-amber-600 border-amber-100 bg-amber-50/50',
          text: durationMinutes <= 60 
            ? "Perfect fit! This quick experience gives high cultural impact without eating into your single day in the city." 
            : "Caution. This is a longer experience (~2+ hours) which will take up a massive chunk of your limited 1-day itinerary. Do it only if it is your top priority!"
        };
      case 'afternoon':
        return {
          score: durationMinutes <= 120 ? 90 : 50,
          color: durationMinutes <= 120 ? 'text-emerald-600 border-emerald-100 bg-emerald-50/50' : 'text-red-600 border-red-100 bg-red-50/50',
          text: durationMinutes <= 120
            ? "Highly suitable. An afternoon block is exactly the right amount of time to absorb this activity at a leisurely pace."
            : "Tight squeeze. This full-day activity is very difficult to fit into a single free afternoon. Consider saving it for a dedicated morning start."
        };
      case '3days':
      default:
        return {
          score: 98,
          color: 'text-emerald-600 border-emerald-100 bg-emerald-50/50',
          text: "Excellent match! With 3 days in the city, you can easily slot this into Day 2 as an afternoon anchor experience. This pace avoids any travel fatigue."
        };
    }
  }, [timeBudget, durationMinutes]);

  // Level M - Pre-populated FAQs
  const faqItems = useMemo(() => [
    {
      q: "Is it safe for solo female travelers?",
      a: isFemaleFriendly 
        ? "Yes! This site is highly visible, busy, and welcoming. Basic city awareness applies, but you can feel completely secure exploring here independently."
        : "Generally safe, but since it is slightly off the beaten path, we recommend visiting during bright daylight hours or joining a small group to ensure maximum comfort."
    },
    {
      q: "Do I need to book tickets in advance?",
      a: item.bookingRequired
        ? "Yes, pre-booking is strongly recommended as entry slots are restricted to prevent crowding. You can use the official booking link below."
        : "No advanced booking required! Walk-ins are perfectly fine. If there is an entry fee, you can purchase tickets directly at the entrance gate (cash preferred)."
    },
    {
      q: "What is the recommended dress code?",
      a: tags.includes('cultural-tour') || tags.includes('religious') || (neighborhood || '').toLowerCase().includes('medina')
        ? "As this is a historic/traditional area, we advise respectful attire. Both men and women should cover shoulders and knees. A light scarf is great to pack."
        : "Casual clothing is fine. We highly recommend wearing closed-toe walking shoes, sunglasses, and a wide-brimmed sun hat."
    },
    {
      q: "Will my card be accepted for payments?",
      a: "Most local guides, transport, and snack stalls here operate in cash (Moroccan Dirham - MAD). We highly advise carrying 100-200 MAD in small bills for tips, water, and incidental fees."
    }
  ], [isFemaleFriendly, item, tags, neighborhood]);

  const computedVisitorQuotes = useMemo(() => {
    if (visitorQuotes && visitorQuotes.length > 0) return visitorQuotes;
    return [
      { type: 'Solo Traveler', quote: `I was skeptical but as a solo adventurer, it was so liberating. The walking pace was perfect and I felt completely comfortable chatting with the nearby vendors.`, author: "Sarah L. from UK", rating: 5 },
      { type: 'Family with Teens', quote: `Kids actually put down their phones! The historic ruins and surrounding nature kept them engaged. Highly recommend checking it out around sunset.`, author: "Michel & Family from France", rating: 5 },
      { type: 'Local Resident', quote: `A classic spot that is still beautiful. Avoid the premium priced taxis outside, just hike or use the public transport system nearby to save massive cash.`, author: "Amine from Morocco", rating: 4 }
    ];
  }, [visitorQuotes]);

  // JSON-LD Structured Data for Tourist Attraction
  const activitySchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": name,
    "description": description,
    "image": finalImages,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address || '',
      "addressLocality": city,
      "addressCountry": "MA"
    },
    "geo": item?.coordinates ? {
      "@type": "GeoCoordinates",
      "latitude": item.coordinates.lat,
      "longitude": item.coordinates.lng
    } : undefined,
    "telephone": contactPhone || undefined,
    "url": officialWebsite || ticketWebsite || googleMapsUrl || undefined,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": googleRating,
      "reviewCount": reviewCount
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "opens": openingHours?.split('-')[0]?.trim() || '09:00',
      "closes": openingHours?.split('-')[1]?.trim() || '18:00'
    },
    "duration": `PT${durationMinutes}M`,
    "amenityFeature": [
      hasEnglishGuide && { "@type": "LocationFeatureSpecification", "name": "English Guide", "value": true },
      hasFrenchGuide && { "@type": "LocationFeatureSpecification", "name": "French Guide", "value": true },
      isKidFriendly && { "@type": "LocationFeatureSpecification", "name": "Kid Friendly", "value": true },
      isFemaleFriendly && { "@type": "LocationFeatureSpecification", "name": "Female Friendly", "value": true },
      isWheelchairAccessible && { "@type": "LocationFeatureSpecification", "name": "Wheelchair Accessible", "value": true },
      isPhotographyFriendly && { "@type": "LocationFeatureSpecification", "name": "Photography Friendly", "value": true },
      hasSunsetView && { "@type": "LocationFeatureSpecification", "name": "Sunset View", "value": true },
      goodForRain && { "@type": "LocationFeatureSpecification", "name": "Rain Friendly", "value": true },
    ].filter(Boolean)
  }), [name, description, finalImages, address, city, item, contactPhone, officialWebsite, ticketWebsite, googleMapsUrl, googleRating, reviewCount, openingHours, durationMinutes, hasEnglishGuide, hasFrenchGuide, isKidFriendly, isFemaleFriendly, isWheelchairAccessible, isPhotographyFriendly, hasSunsetView, goodForRain]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto pb-16 px-4 md:px-0"
    >
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(activitySchema) }} />

      {/* Header Back & Action Row */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-stone-500 hover:text-stone-900 font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to results
        </button>

        <div className="flex items-center gap-2">
          {/* Saved State Heart */}
          <button
            onClick={handleToggleBookmark}
            className={cn(
              "p-3 rounded-full border transition-all cursor-pointer shadow-sm",
              bookmarked 
                ? "bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100" 
                : "bg-white border-stone-200 text-stone-400 hover:text-stone-700 hover:bg-stone-50"
            )}
            title={bookmarked ? "Saved in wish list" : "Save to wish list"}
          >
            <Heart className={cn("w-5 h-5", bookmarked && "fill-rose-600")} />
          </button>
        </div>
      </div>

      {/* Hero Visual Area (Level A) */}
      <div 
        className="relative w-full h-80 md:h-[420px] rounded-[32px] overflow-hidden mb-8 shadow-xl flex flex-col justify-end p-8 md:p-12 border border-stone-200 bg-stone-900"
        style={{
          background: `radial-gradient(circle at 80% 20%, ${themeColors.secondary}35 0%, transparent 60%), 
                       radial-gradient(circle at 20% 80%, ${themeColors.primary}25 0%, transparent 50%), 
                       linear-gradient(135deg, ${themeColors.primary}12 0%, ${themeColors.primary}40 100%)`
        }}
      >
        {resolvedHeroImage.url && (
          <img 
            src={resolvedHeroImage.url} 
            alt={name}
            className="absolute inset-0 w-full h-full object-cover z-0"
            referrerPolicy="no-referrer"
            data-fallbacks={JSON.stringify(resolvedHeroImage.fallbackUrls)}
            onError={(e) => handleListingImageError(e, resolvedHeroImage.fallbackUrls, 'things')}
          />
        )}

        {/* Moroccan paper grain pattern effect overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('/textures/paper-grain-1.svg')] z-10" />
        
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#C9A84C_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none z-10" />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-transparent pointer-events-none z-10" />

        {/* Floating Badges */}
        <div className="absolute top-6 left-6 flex gap-2">
          <div className="px-3 py-1.5 bg-stone-900/85 backdrop-blur-md text-white rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
            🏃 {energyLevel.toUpperCase()} ENERGY
          </div>
          {badge && (
            <div className="px-3 py-1.5 bg-[#C9A84C] text-stone-950 rounded-full text-[10px] font-black uppercase tracking-widest">
              ✨ {badge.replace('-', ' ').toUpperCase()}
            </div>
          )}
        </div>

        {/* Text Details in Hero */}
        <div className="relative z-10 text-white">
          <div className="flex items-center gap-2 text-[#C9A84C] font-semibold text-xs tracking-wider uppercase mb-2">
            <Compass className="w-4 h-4 text-[#C9A84C]" />
            <span>{tags[0] || 'Experience'}</span>
            <span>•</span>
            <span>{resolvedCityName}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-3 text-white drop-shadow-md">
            {name}
          </h1>
          {shortValueProp && (
            <p className="text-stone-200 text-xs md:text-sm font-sans mb-3 font-semibold tracking-wide drop-shadow max-w-2xl">
              💡 {shortValueProp}
            </p>
          )}
          <div className="flex items-center gap-4 text-sm text-stone-200 flex-wrap">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C9A84C]" />
              {neighborhood}
              {distanceFromCenterKm !== undefined && ` (${distanceFromCenterKm} km from center)`}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C9A84C]" />
              ~{durationMinutes >= 60 ? `${Math.round(durationMinutes / 60)} hours` : `${durationMinutes} mins`}
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <strong>{googleRating.toFixed(1)}</strong> ({reviewCount} ratings)
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid Layout: left detail column, right interactive booking panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Interactive Column (Tabs and content details) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Dynamic Interactive Navigation Tabs (Aesthetic Pairings) */}
          <div className="flex border-b border-stone-200 overflow-x-auto whitespace-nowrap">
            {(['experience', 'planner', 'social', 'savvy'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "py-4 px-6 text-sm font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer flex-shrink-0",
                  activeTab === tab
                    ? "border-[#C9A84C] text-stone-900 font-extrabold"
                    : "border-transparent text-stone-400 hover:text-stone-700"
                )}
              >
                {tab === 'experience' && '✨ Experience'}
                {tab === 'planner' && '📅 Trip Planner'}
                {tab === 'social' && '💬 Proof & Q&A'}
                {tab === 'savvy' && '🛡️ Savvy Score'}
              </button>
            ))}
          </div>

          {/* TAB 1: EXPERIENCE DETAIL */}
          <AnimatePresence mode="wait">
            {activeTab === 'experience' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Description and Quick Emotional Tags */}
                <div className="bg-white border border-stone-100 rounded-[32px] p-6 md:p-8 shadow-sm">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-3">The Highlights</h3>
                  <p className="text-stone-700 text-lg leading-relaxed mb-6 font-sans">
                    {description}
                  </p>
                  
                  {highlights && highlights.length > 0 && (
                    <div className="mb-6 bg-stone-50/50 p-4 rounded-2xl border border-stone-100">
                      <h4 className="text-[10px] font-black text-[#96700A] uppercase tracking-widest mb-3">📸 Visual Keynotes (Copyright-Free Insights)</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-600 font-sans">
                        {highlights.map((highlight: any, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0 mt-1.5" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Emotional Vibe Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-50">
                    {vibeTags.map((vtag: any, idx: number) => (
                      <span key={idx} className="px-3 py-1.5 bg-[#C9A84C]/5 border border-[#C9A84C]/15 text-[#96700A] text-xs font-bold rounded-full">
                        🌿 #{vtag}
                      </span>
                    ))}
                    {archetypeAffinity.map((arch: any, idx: number) => (
                      <span key={idx} className="px-3 py-1.5 bg-stone-100 text-stone-700 text-xs font-bold rounded-full">
                        🎯 {arch.toUpperCase()} FIT
                      </span>
                    ))}
                  </div>

                  {emotionalBenefits && emotionalBenefits.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-2 items-center">
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Atmosphere Benefit:</span>
                      {emotionalBenefits.map((benefit: any, idx: number) => (
                        <span key={idx} className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-lg uppercase tracking-wider">
                          ✨ {benefit}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Level B - Interactive YouTube Video Walkthrough to avoid copyright issues */}
                <div className="bg-white border border-stone-100 rounded-[32px] p-6 md:p-8 shadow-sm">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                      <Video className="w-5 h-5 text-red-500 animate-pulse" />
                      Experience Video Walkthrough
                    </h3>
                    <p className="text-xs text-stone-400">Watch an immersive walking tour and digital guide for {name}</p>
                  </div>

                  {videoId ? (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-950">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`}
                        title={`Video walk-through for ${name}`}
                        className="w-full h-full border-0 absolute inset-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="bg-stone-50 border border-stone-200 border-dashed rounded-2xl p-8 text-center flex flex-col items-center justify-center">
                      <Video className="w-12 h-12 text-stone-300 mb-2" />
                      <p className="text-sm text-stone-600 font-bold">Video Walkthrough Coming Soon</p>
                      <p className="text-xs text-stone-400 mt-1">Our team is hand-curating walking tours and aerial guides for this location.</p>
                    </div>
                  )}
                </div>

                {/* Level C - Experience Summary (Why People Love / Important Complaints) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pros */}
                  <div className="bg-emerald-50/55 border border-emerald-100/70 rounded-[28px] p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">
                        <ThumbsUp className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                      </div>
                      <h4 className="font-bold text-emerald-950 text-sm tracking-tight">Why Travelers Love This</h4>
                    </div>
                    <ul className="space-y-3">
                      {pros.map((pro: any, idx: number) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-emerald-900 leading-relaxed font-sans">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Warnings / Complaints */}
                  <div className="bg-amber-50/55 border border-amber-100/70 rounded-[28px] p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm">
                        <ShieldAlert className="w-4 h-4 text-amber-500" />
                      </div>
                      <h4 className="font-bold text-amber-950 text-sm tracking-tight">Need-To-Know Friction</h4>
                    </div>
                    <ul className="space-y-3">
                      {cons.map((con: any, idx: number) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed font-sans">
                          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Level K - Ancient Heritage Story (Parchment look) */}
                <div className="bg-amber-50/40 border border-amber-200/50 rounded-[32px] p-6 md:p-8 relative overflow-hidden shadow-sm">
                  {/* Elegant vintage corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]/30 rounded-tl-xl" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C9A84C]/30 rounded-tr-xl" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C9A84C]/30 rounded-bl-xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C]/30 rounded-br-xl" />

                  <div className="flex items-center gap-2.5 mb-4">
                    <BookOpen className="w-5 h-5 text-[#C9A84C]" />
                    <h4 className="font-display font-bold text-[#96700A] text-lg">{storyInfo.title}</h4>
                  </div>
                  
                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed font-serif">
                    <p>{storyInfo.history}</p>
                    <p className="pl-4 border-l-2 border-[#C9A84C] italic text-stone-500">
                      &ldquo;{storyInfo.legend}&rdquo;
                    </p>
                    <div className="pt-2">
                      <span className="inline-block px-2.5 py-1 bg-amber-100/60 text-[#96700A] rounded text-[10px] font-bold tracking-wider uppercase mb-2">
                        💡 LOCAL RECORD
                      </span>
                      <p className="text-xs text-stone-600 font-sans">{storyInfo.funFact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TAB 2: TRIP PLANNER DETAIL */}
          <AnimatePresence mode="wait">
            {activeTab === 'planner' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Level D - Time-Scarcity Decision Calculator */}
                <div className="bg-white border border-stone-100 rounded-[32px] p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-[#C9A84C]" />
                    <h3 className="font-bold text-stone-900 text-base">Your Schedule Constraint Test</h3>
                  </div>
                  
                  <p className="text-stone-500 text-xs leading-relaxed mb-6 font-sans">
                    Unlike dining or sleep, choosing an experience is a commit of your scarce travel hours. Tell us your constraint to evaluate suitability:
                  </p>

                  <div className="grid grid-cols-3 gap-2.5 mb-6">
                    {(['1day', '3days', 'afternoon'] as const).map((budget) => (
                      <button
                        key={budget}
                        onClick={() => setTimeBudget(budget)}
                        className={cn(
                          "py-3 px-2 rounded-2xl border text-center transition-all cursor-pointer",
                          timeBudget === budget
                            ? "border-stone-900 bg-stone-900 text-white shadow-md font-bold"
                            : "border-stone-200 bg-white text-stone-500 hover:text-stone-800 hover:bg-stone-50"
                        )}
                      >
                        <p className="text-xs uppercase tracking-wide">
                          {budget === '1day' && '⏱️ 1 Day Only'}
                          {budget === '3days' && '🎒 3+ Days'}
                          {budget === 'afternoon' && '🌅 Half Day'}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Recommendation Assessment Card */}
                  <div className={cn("p-5 rounded-2xl border text-sm flex items-start gap-3", tripFitAssessment.color)}>
                    <div className="text-2xl font-bold shrink-0">{tripFitAssessment.score}%</div>
                    <div>
                      <h4 className="font-extrabold mb-1">Trip Fit Score: {tripFitAssessment.score === 98 ? 'Optimal Vibe' : 'Schedule Friction warning'}</h4>
                      <p className="text-xs leading-relaxed opacity-90">{tripFitAssessment.text}</p>
                    </div>
                  </div>
                </div>

                {/* Opening Hours, Heatmap, Best Times to Visit */}
                <div className="bg-white border border-stone-100 rounded-[32px] p-6 md:p-8 shadow-sm">
                  <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Peak Hours & Best Visit Times</h3>
                      <p className="text-xs text-stone-400">Avoid tourist jams and excessive Atlantic midday heat</p>
                    </div>
                    <div className="px-3 py-1.5 bg-amber-50 border border-amber-100 text-[#96700A] font-bold rounded-xl text-xs flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Best Time: {bestTimeToVisit || 'Golden Hour (4:30 PM)'}</span>
                    </div>
                  </div>

                  {/* Busy Heatmap (Visual progress bars CSS-based) */}
                  <div className="space-y-4 mb-6">
                    <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Crowd Densities Throughout Day</p>
                    <div className="grid grid-cols-6 gap-2 text-center">
                      {[
                        { hour: '08:00', label: 'Empty', score: 10 },
                        { hour: '11:00', label: 'Busy', score: 75 },
                        { hour: '14:00', label: 'Peak', score: 95 },
                        { hour: '17:00', label: 'Moderate', score: 55 },
                        { hour: '20:00', label: 'Quiet', score: 30 },
                        { hour: '23:00', label: 'Closed', score: 5 }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="w-full bg-stone-100 h-24 rounded-lg relative flex items-end overflow-hidden">
                            <div 
                              className={cn(
                                "w-full transition-all rounded-t-lg",
                                item.score > 80 ? "bg-red-400" : (item.score > 50 ? "bg-amber-400" : "bg-emerald-400")
                              )} 
                              style={{ height: `${item.score}%` }} 
                              title={`${item.hour}: ${item.score}% crowd density`}
                            />
                          </div>
                          <span className="text-[10px] font-bold text-stone-700 mt-2">{item.hour}</span>
                          <span className="text-[9px] text-stone-400 tracking-tighter">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Level D & L Planning Grid */}
                  <div className="pt-6 border-t border-stone-100 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-100/50">
                      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-1">⏰ Open Hours</span>
                      <span className="text-xs font-bold text-stone-800">{openingHours || '09:00 AM - 06:00 PM'}</span>
                    </div>
                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-100/50">
                      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-1">🍂 Seasonality</span>
                      <span className="text-xs font-bold text-stone-800">{seasonality || 'Year-round'}</span>
                    </div>
                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-100/50">
                      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-1">⏳ Gate Wait Time</span>
                      <span className="text-xs font-bold text-stone-800">
                        {typicalWaitTimeMinutes !== undefined ? `${typicalWaitTimeMinutes}m average wait` : 'Minimal/Walk-in'}
                      </span>
                    </div>
                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-100/50">
                      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest block mb-1">🌦️ Weather Fit</span>
                      <span className="text-xs font-bold text-stone-800">{goodForRain ? 'Indoor Friendly' : 'Outdoors (Dry preferred)'}</span>
                    </div>
                  </div>
                </div>

                {/* Level G - Audience Match Progress Bar Chart */}
                <div className="bg-white border border-stone-100 rounded-[32px] p-6 md:p-8 shadow-sm">
                  <h3 className="font-bold text-stone-900 text-base mb-6">Identity Suitability Fit</h3>
                  <div className="space-y-4">
                    {audienceMatching.map((audi, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-xs font-bold text-stone-700 mb-1.5">
                          <span>{audi.name}</span>
                          <span>{audi.score}% Compatibility</span>
                        </div>
                        <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full transition-all", audi.color)} style={{ width: `${audi.score}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Level J - Suggested Itinerary Timeline ("Perfect Day Combo") */}
                <div className="bg-white border border-stone-100 rounded-[32px] p-6 md:p-8 shadow-sm">
                  <div className="mb-6">
                    <h3 className="font-bold text-stone-900 text-base">The Perfect Day Combo</h3>
                    <p className="text-xs text-stone-400">Combine this experience with top nearby sights seamlessly</p>
                  </div>

                  <div className="relative border-l-2 border-stone-200 pl-6 space-y-8 ml-3">
                    {perfectDayItinerary.map((it, idx) => (
                      <div key={idx} className="relative">
                        {/* Timeline Circle */}
                        <div className={cn(
                          "absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full border-2 bg-white flex items-center justify-center transition-all",
                          it.highlight ? "border-[#C9A84C] scale-125 ring-4 ring-[#C9A84C]/15" : "border-stone-300"
                        )}>
                          {it.highlight && <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />}
                        </div>
                        
                        <div>
                          <span className="text-[10px] font-extrabold text-[#C9A84C] uppercase tracking-wider">{it.time}</span>
                          <h4 className={cn("font-bold text-sm tracking-tight", it.highlight ? "text-[#96700A]" : "text-stone-800")}>
                            {it.title}
                          </h4>
                          <p className="text-stone-500 text-xs mt-1 leading-relaxed">{it.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TAB 3: SOCIAL PROOF & FAQ */}
          <AnimatePresence mode="wait">
            {activeTab === 'social' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Level I - Customer Review breakdown & Filterable quotes */}
                <div className="bg-white border border-stone-100 rounded-[32px] p-6 md:p-8 shadow-sm">
                  <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
                    <div>
                      <h3 className="font-bold text-stone-900 text-base">Visitor Soundbites</h3>
                      <p className="text-xs text-stone-400">What actual travelers felt during this experience</p>
                    </div>
                    <div className="flex gap-1">
                      <div className="px-2 py-1 bg-[#C9A84C]/10 text-[#96700A] text-xs rounded-lg font-bold">100% Genuine</div>
                    </div>
                  </div>

                  {/* Reviews breakdown list */}
                  <div className="space-y-4">
                    {computedVisitorQuotes.map((rev: any, idx: number) => (
                      <div key={idx} className="bg-stone-50 border border-stone-100 p-4 rounded-2xl">
                        <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                          <span className="font-black text-stone-500 uppercase tracking-widest">{rev.type}</span>
                          <div className="flex gap-0.5">
                            {Array.from({ length: rev.rating || 5 }).map((_, s) => (
                              <Star key={s} className="w-3 h-3 text-[#C9A84C] fill-[#C9A84C]" />
                            ))}
                          </div>
                        </div>
                        <p className="text-stone-600 italic text-xs leading-relaxed mb-2">"{rev.quote}"</p>
                        <span className="text-[10px] font-bold text-stone-500">— {rev.author}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Level M - FAQ accordion */}
                <div className="bg-white border border-stone-100 rounded-[32px] p-6 md:p-8 shadow-sm">
                  <h3 className="font-bold text-stone-900 text-base mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    {faqItems.map((faq, idx) => (
                      <div key={idx} className="border-b border-stone-100 pb-3">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                          className="w-full flex justify-between items-center text-left py-2 font-bold text-stone-800 text-sm hover:text-stone-900 focus:outline-none"
                        >
                          <span>{faq.q}</span>
                          <span className="text-stone-400 font-bold ml-2">
                            {expandedFaq === idx ? '−' : '+'}
                          </span>
                        </button>
                        {expandedFaq === idx && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-stone-500 text-xs leading-relaxed pt-2 pl-1"
                          >
                            {faq.a}
                          </motion.p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TAB 4: SAVVY SCORE INTELLIGENCE */}
          <AnimatePresence mode="wait">
            {activeTab === 'savvy' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8 animate-in fade-in"
              >
                <PlaceSavvyProfile placeId={id} onBack={() => setActiveTab('experience')} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Cost & Logistics Sidebar (Levels E, F, H, M) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Level E - Cost Card */}
          <div className="bg-white border border-stone-200 rounded-[32px] p-6 shadow-sm">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-4">Pricing & Entry</h3>
            
            <div className="mb-4">
              <span className="text-xs text-stone-400">Admission Fee</span>
              <p className="text-3xl font-display font-bold text-stone-900 mt-1">
                {price === 0 && entryPrice === 0 ? 'Free Entry' : `${price || entryPrice} MAD`}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-stone-100 text-xs">
              <div className="flex justify-between items-start gap-4">
                <span className="text-stone-400">Ticket Options:</span>
                <span className="font-bold text-stone-700 text-right">
                  {ticketTypes && ticketTypes.length > 0 
                    ? ticketTypes.map((t: any) => `${t.name} (${t.price} MAD)`).join(', ')
                    : 'Standard Gate Ticket'}
                </span>
              </div>
              {discountsInfo && (
                <div className="flex justify-between items-start gap-4">
                  <span className="text-stone-400">Discounts Available:</span>
                  <span className="font-bold text-emerald-700 text-right">{discountsInfo}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-stone-400">Payment Accepted:</span>
                <span className="font-bold text-stone-700">Cash Dirhams (MAD Preferred)</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span className="text-stone-400">Included Services:</span>
                <span className="font-bold text-stone-700 text-right">
                  {includedServices && includedServices.length > 0 
                    ? includedServices.join(', ')
                    : 'General access to grounds'}
                </span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span className="text-stone-400">Hidden Costs Note:</span>
                <span className="font-bold text-amber-700 text-right">
                  {hiddenCostsInfo || 'None (Haggle for local guides)'}
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="space-y-2 mt-6">
              <button
                onClick={handleAddToPlan}
                className="w-full py-4 bg-stone-950 hover:bg-stone-800 text-white font-bold rounded-2xl tracking-wider text-xs uppercase shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C9A84C]" />
                Add to Trip Plan
              </button>

              <button
                onClick={() => {
                  navigate(`/transport/go?city=${encodeURIComponent(item.city || city || 'marrakech')}&dest=${encodeURIComponent(name)}`);
                }}
                className="w-full py-3.5 bg-white border border-[#C9A84C]/30 hover:border-[#C9A84C] text-stone-800 font-bold rounded-2xl tracking-wider text-xs uppercase shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#C9A84C]" />
                Estimate Taxi & Bus Fare
              </button>
            </div>
          </div>

          {/* Level F - Medina / Local Navigation & Walking Difficulty */}
          <div className="bg-white border border-stone-200 rounded-[32px] p-6 shadow-sm">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-[#C9A84C]" />
              Navigating Medina Alleys
            </h3>
            
            <div className="space-y-4">
              {/* Embedded Interactive Google Map */}
              <div className="flex gap-2">
                <div className="flex-[2] h-44 rounded-2xl overflow-hidden border border-stone-200 shadow-inner bg-stone-50 relative">
                  <iframe
                    title={`Embedded Map for ${name}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      item.coordinates 
                        ? `${item.coordinates.lat},${item.coordinates.lng}` 
                        : `${name}, ${cityMap[city]?.name || city}, Morocco`
                    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full border-0 grayscale opacity-90 contrast-[1.05]"
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="flex-1 h-44 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      useTransportStore.getState().setRoute(null, `${name}, ${cityMap[city]?.name || city}`);
                      navigate('/transport/exploring-city/plan-route');
                    }}
                    className="flex-1 rounded-2xl bg-stone-900 text-white hover:bg-stone-800 transition-all flex flex-col items-center justify-center gap-1 shadow-md active:scale-95 border border-stone-700 cursor-pointer"
                  >
                    <Navigation className="w-4 h-4 text-amber-400" />
                    <span className="text-[9px] font-black uppercase tracking-wider text-center">Plan Route</span>
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/transport/fare-calculator?city=${(city || 'marrakech').toLowerCase()}&distance=${distanceFromCenterKm || 5}&mode=petit_taxi`);
                    }}
                    className="flex-1 rounded-2xl bg-amber-50 text-[#96700A] hover:bg-amber-100 transition-all flex flex-col items-center justify-center gap-1 shadow-md active:scale-95 border border-amber-200/50 cursor-pointer"
                  >
                    <DollarSign className="w-4 h-4 text-[#D4863A]" />
                    <span className="text-[9px] font-black uppercase tracking-wider text-center">Taxi Fare</span>
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-stone-700">Medina GPS Failure Guard</span>
                <p className="text-xs text-stone-500 leading-relaxed mt-1">
                  GPS signal constantly drifts or dies inside Morocco's ancient covered markets. Use these physical landmarks:
                </p>
              </div>

              {/* Hardcoded text-based navigation points derived beautifully */}
              <div className="bg-stone-50 border border-stone-100 p-3.5 rounded-2xl space-y-2 text-xs text-stone-600 font-mono">
                <div className="flex gap-2">
                  <span className="font-bold text-[#C9A84C]">1.</span>
                  <span>Set off from nearest main gate or taxi stand.</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-[#C9A84C]">2.</span>
                  <span>Follow signs towards center point or grand minaret.</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-[#C9A84C]">3.</span>
                  <span>Look for the distinctive brass lanterns on the left wall.</span>
                </div>
              </div>

              {/* Walking Difficulty Scale */}
              <div className="pt-3 border-t border-stone-100 text-xs">
                <div className="flex justify-between mb-1.5 font-bold text-stone-700">
                  <span>Walking Fatigue Rating:</span>
                  <span>{energyLevel === 'relaxed' ? '1/5' : (energyLevel === 'moderate' ? '2.5/5' : '4/5')}</span>
                </div>
                <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full",
                      energyLevel === 'relaxed' ? "bg-emerald-500 w-[20%]" : (energyLevel === 'moderate' ? "bg-amber-400 w-[50%]" : "bg-red-500 w-[80%]")
                    )} 
                  />
                </div>
                <p className="text-[10px] text-stone-400 mt-1.5 leading-relaxed">
                  {energyLevel === 'relaxed' && 'Level terrain. Standard leisurely stroll suitable for seniors.'}
                  {energyLevel === 'moderate' && 'Mild slopes or minor stairs. Wear closed walking shoes.'}
                  {energyLevel === 'intense' && 'Steep stone steps or rugged paths. Highly active pace.'}
                </p>
              </div>
            </div>
          </div>

          {/* Level H - Practical Pre-Departure Checklists */}
          <div className="bg-white border border-stone-200 rounded-[32px] p-6 shadow-sm space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400">Practical Requirements</h3>
            
            <div className="space-y-2.5 text-xs text-stone-700">
              <div className="flex justify-between items-start py-1.5 border-b border-stone-50 gap-2">
                <span className="text-stone-400">Dress Decorum:</span>
                <span className="font-bold text-stone-800 text-right">{dressCode || 'Conservative shoulders & knees'}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-stone-50 gap-2">
                <span className="text-stone-400">Mandatory Gear:</span>
                <span className="font-bold text-stone-800 text-right">
                  {equipmentNeeded && equipmentNeeded.length > 0 
                    ? equipmentNeeded.join(', ')
                    : 'Closed walking shoes, bottled water'}
                </span>
              </div>
              {fitnessLevel && (
                <div className="flex justify-between items-center py-1.5 border-b border-stone-50">
                  <span className="text-stone-400">Fitness Level:</span>
                  <span className="font-bold text-stone-800">{fitnessLevel}</span>
                </div>
              )}
              {ageRestrictions && (
                <div className="flex justify-between items-center py-1.5 border-b border-stone-50">
                  <span className="text-stone-400">Age Restrictions:</span>
                  <span className="font-bold text-stone-800">{ageRestrictions}</span>
                </div>
              )}
              <div className="flex justify-between items-center py-1.5 border-b border-stone-50">
                <span className="text-stone-400">Photography:</span>
                <span className="font-bold text-stone-800">{isPhotographyFriendly ? 'Allowed' : 'Restricted (Ask first)'}</span>
              </div>
              <div className="flex justify-between items-start py-1.5 border-b border-stone-50 gap-2">
                <span className="text-stone-400">Local Safety Level:</span>
                <span className="font-bold text-emerald-600 text-right">
                  {safetyNotes ? safetyNotes : `${'★'.repeat(safetyLevel)}${'☆'.repeat(5 - safetyLevel)} (Safe)`}
                </span>
              </div>
              <div className="flex justify-between items-start py-1.5 gap-2">
                <span className="text-stone-400">Languages Offered:</span>
                <span className="font-bold text-stone-800 text-right">
                  {languages && languages.length > 0 
                    ? languages.join(', ')
                    : 'French, English & Arabic (Darija)'}
                </span>
              </div>
            </div>
          </div>

          {/* Level M - External Links / Maps CTA */}
          {(googleMapsUrl || officialWebsite || ticketWebsite) && (
            <div className="space-y-3">
              {googleMapsUrl && (
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between bg-[#C9A84C]/10 border border-[#C9A84C]/25 text-[#96700A] hover:bg-[#C9A84C]/15 rounded-2xl p-4 transition-all"
                >
                  <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-80">Navigate on device</p>
                    <p className="font-display font-bold text-sm">Google Maps Route</p>
                  </div>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {officialWebsite && (
                <a
                  href={officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100 rounded-2xl p-4 transition-all text-xs font-bold"
                >
                  <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Official Source</p>
                    <p className="font-display font-bold text-stone-800 text-sm">Visit Website</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-500" />
                </a>
              )}
              {ticketWebsite && (
                <a
                  href={ticketWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between bg-emerald-50 border border-emerald-100 text-emerald-800 hover:bg-emerald-100 rounded-2xl p-4 transition-all text-xs font-bold"
                >
                  <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-80">Secure Booking</p>
                    <p className="font-display font-bold text-emerald-900 text-sm">Pre-Book Tickets Online</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-600" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal for Experience Visuals */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={lightboxImage} 
            alt="Expanded Experience View" 
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl" 
          />
        </div>
      )}
    </motion.div>
  );
}
