import { useMemo, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Star,
  MapPin,
  Clock,
  ArrowLeft,
  ShoppingBag,
  ShieldCheck,
  Navigation,
  Phone,
  Globe,
  Instagram,
  History,
  Award,
  Leaf,
  UserCheck,
  Sparkles,
  Info,
  CreditCard,
  Wallet,
  MessageSquare,
  Eye,
  Users,
  Sun,
  Moon,
  ArrowLeftRight,
  User,
  Copy,
  Check,
  ExternalLink,
  DollarSign,
  ChevronRight,
  Calendar,
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { getShopStatus } from '../../utils/timeEngine';
import { ShopListing, AuthenticitySeal } from '../../listings/types';
import { useExploreStore } from '../../state/exploreStore';
import ReviewCard from './ReviewCard';
import NearbyShops from './NearbyShops';
import { SavvyScoreEngine } from '../../engine/savvyScoreEngine';
import { useTransportStore } from '../../state/transportStore';
import { useNavigate } from 'react-router-dom';
import { useSavedStore } from '../../state/savedStore';
import { usePlanStore } from '../../state/planStore';
import SavvyBadge from '../savvy/SavvyBadge';
import { resolveListingImages, handleListingImageError } from '../../utils/imageResolver';

/* ========== METADATA LOOKUPS ========== */

const SEAL_METADATA: Record<
  AuthenticitySeal,
  { label: string; icon: any; color: string; desc: string }
> = {
  label_artisanat: {
    label: 'Label Artisanat',
    icon: Award,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
    desc: 'Official Moroccan government certification for quality and origin.',
  },
  wfto: {
    label: 'WFTO Fair Trade',
    icon: Leaf,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    desc: 'Certified by the World Fair Trade Organization.',
  },
  zellige_de_fes: {
    label: 'Zellige de Fès',
    icon: ShieldCheck,
    color: 'text-blue-600 bg-blue-50 border-blue-100',
    desc: 'Geographic certification for authentic Fes tile work.',
  },
  anou: {
    label: 'Anou Platform',
    icon: Globe,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    desc: 'Direct-to-artisan platform ensuring fair wages.',
  },
  maalem_certified: {
    label: 'Maalem Certified',
    icon: UserCheck,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
    desc: 'Run by a Master Artisan with decades of experience.',
  },
};

const PRICING_MODEL_METADATA = {
  fixed: { label: 'Fixed Price', color: 'bg-emerald-500 text-white' },
  negotiable: { label: 'Negotiable', color: 'bg-amber-500 text-white' },
  mixed: { label: 'Mixed Pricing', color: 'bg-indigo-500 text-white' },
  market_price: { label: 'Market Price', color: 'bg-stone-500 text-white' },
};

const PRICE_LEVEL_DISPLAY = {
  budget: '€',
  'mid-range': '€€',
  premium: '€€€',
  luxury: '€€€€',
} as const;

const CROWD_LABEL: Record<string, string> = {
  quiet: 'Low traffic — relaxed browsing',
  moderate: 'Moderate foot traffic',
  busy: 'Busy — expect crowds',
};

const STORE_SIZE_LABEL: Record<string, string> = {
  boutique: 'Boutique Store',
  medium: 'Medium-sized Store',
  large: 'Large Cooperative/Showroom',
  'department-store': 'Department Store',
};

/* ========== PROPS ========== */

interface ShopDetailViewProps {
  item: ShopListing;
  onBack: () => void;
}

/* ========== COMPONENT ========== */

export default function ShopDetailView({ item, onBack }: ShopDetailViewProps) {
  const { omitGoogleImage } = useExploreStore();
  const navigate = useNavigate();
  const { addCustomActivity } = usePlanStore();
  const [showPlanSuccess, setShowPlanSuccess] = useState(false);

  const handleAddShopToPlan = () => {
    addCustomActivity(
      item.city || 'marrakech',
      'afternoon',
      'shopping' as any,
      name
    );
    setShowPlanSuccess(true);
    setTimeout(() => {
      setShowPlanSuccess(false);
    }, 2000);
  };

  const {
    name,
    type,
    category,
    description,
    images = [],
    googleRating,
    googleReviewCount,
    priceLevel,
    pricingModel,
    isVerified,
    neighborhood,
    address,
    landmark,
    what3words,
    navSteps,
    distanceText,
    tags = [],
    authenticitySeals = [],
    paymentMethods = [],
    productCategories = [],
    languagesSpoken = [],
    phoneNumber,
    website,
    instagram,
    openingHours = [],
    fridayHours,
    ramadanHours,
    shipping,
    returnPolicy,
    workshopVisitable,
    establishedYear,
    atmosphere,
    storeSize,
    crowdLevel,
    bestTimeToVisit,
    whatTheySell = [],
    reviewSummary,
    recentReviews = [],
    isLocalFavorite,
    nearbyLandmarks = [],
    history,
    ownerName,
    ownerBio,
    tip,
    googleMapsUrl,
  } = item;

  // Save last viewed listing to localStorage
  useEffect(() => {
    if (item.id && name) {
      localStorage.setItem('last_viewed_listing', JSON.stringify({
        id: item.id,
        name,
        category: 'shop',
        url: window.location.pathname
      }));
    }
  }, [item.id, name]);

  const placeIntel = useMemo(() => {
    return SavvyScoreEngine.getPlaceIntel(item.id);
  }, [item.id]);

  const resolvedImages = useMemo(() => {
    return resolveListingImages({
      id: item?.id,
      googlePlaceId: item?.googlePlaceId,
      images: item?.images,
      nonCopyrightImage: item?.nonCopyrightImage,
      category: 'shop',
      omitGooglePlaceApi: omitGoogleImage
    });
  }, [item, omitGoogleImage]);

  const displayImages = useMemo(() => {
    const list = [resolvedImages.url, ...resolvedImages.fallbackUrls];
    return Array.from(new Set(list));
  }, [resolvedImages]);

  const { toggleBookmark, isBookmarked } = useSavedStore();
  const idString = String(item.id);
  const bookmarked = isBookmarked(idString);

  const handleToggleBookmark = () => {
    toggleBookmark({
      id: idString,
      type: 'shop',
      name: name,
      city: item.city || 'marrakech',
      image: images[0]
    });
  };

  const [copied, setCopied] = useState(false);

  const handleCopyWhat3words = () => {
    if (!what3words) return;
    navigator.clipboard.writeText(`///${what3words}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // --- Compute live open status ---
  const shopStatus = useMemo(
    () => getShopStatus(openingHours, fridayHours, undefined, new Date()),
    [openingHours, fridayHours],
  );

  // --- Status color mapping for the dot ---
  const statusDotColor: Record<string, string> = {
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
    stone: 'bg-stone-400',
  };

  // JSON-LD Structured Data for LocalBusiness/CraftStore
  const shopSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "image": images,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address || '',
      "addressLocality": item.city || 'Marrakech',
      "addressCountry": "MA"
    },
    "geo": item?.coordinates ? {
      "@type": "GeoCoordinates",
      "latitude": item.coordinates.lat,
      "longitude": item.coordinates.lng
    } : undefined,
    "telephone": phoneNumber || undefined,
    "url": website || googleMapsUrl || undefined,
    "priceRange": PRICE_LEVEL_DISPLAY[priceLevel as keyof typeof PRICE_LEVEL_DISPLAY] || '€€',
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": googleRating,
      "reviewCount": googleReviewCount
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "opens": openingHours?.[0]?.hours?.split('-')[0] || '09:00',
      "closes": openingHours?.[0]?.hours?.split('-')[1] || '19:00'
    },
    "paymentAccepted": paymentMethods.join(', ') || 'Cash',
    "currenciesAccepted": "MAD",
    "knowsAbout": productCategories.join(', ') || category
  }), [name, description, images, address, item, phoneNumber, website, googleMapsUrl, priceLevel, googleRating, googleReviewCount, openingHours, paymentMethods, productCategories, category]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto pb-32 md:pb-20"
    >
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(shopSchema) }} />

      {/* ========== BACK BUTTON ========== */}
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-stone-500 hover:text-stone-900 font-bold text-sm uppercase tracking-widest transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to results
      </button>

      {/* ===================================================== */}
      {/* HERO SECTION (P0 — Instant Decision Triggers)         */}
      {/* ===================================================== */}
      <div className="relative h-72 md:h-[400px] rounded-[40px] overflow-hidden mb-8 shadow-2xl group">
        {displayImages && displayImages.length > 0 ? (
          <img
            src={displayImages[0]}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
            data-fallbacks={JSON.stringify(resolvedImages.fallbackUrls)}
            onError={(e) => handleListingImageError(e, resolvedImages.fallbackUrls, 'shop')}
          />
        ) : (
          <div className="w-full h-full bg-stone-900 flex items-center justify-center text-[#C9A84C]/60 flex-col gap-2">
            <ShoppingBag className="w-16 h-16 opacity-30 animate-pulse" />
            <span className="font-display uppercase tracking-widest text-xs font-bold">MoroccoFriend Authentic Shop</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Quick bookmark action */}
        <button
          onClick={handleToggleBookmark}
          className={cn(
            "absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all bg-white/90 backdrop-blur-md shadow-lg z-10 cursor-pointer",
            bookmarked ? "text-rose-500 scale-110" : "text-stone-600 hover:text-rose-500 hover:scale-105"
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={bookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        </button>

        {/* --- Top Badges --- */}
        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
          {isVerified && (
            <span className="px-4 py-2 rounded-full bg-white text-stone-900 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-[#C9A84C]" /> Verified
            </span>
          )}
          <span
            className={cn(
              'px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg',
              PRICING_MODEL_METADATA[pricingModel as keyof typeof PRICING_MODEL_METADATA]?.color || '',
            )}
          >
            {PRICING_MODEL_METADATA[pricingModel as keyof typeof PRICING_MODEL_METADATA]?.label || ''}
          </span>
          {isLocalFavorite && (
            <span className="px-4 py-2 rounded-full bg-rose-500 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              Local Favorite
            </span>
          )}
          {/* NEW: Workshop badge */}
          {workshopVisitable && (
            <span className="px-4 py-2 rounded-full bg-sky-500 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg flex items-center gap-1">
              <Eye className="w-3 h-3" /> Workshop Open
            </span>
          )}
        </div>

        {/* --- Floating Info Card --- */}
        <div className="absolute bottom-6 left-6 right-6 p-6 md:p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#C9A84C] text-[10px] font-black uppercase tracking-widest">
              <ShoppingBag className="w-3.5 h-3.5" />
              {type.replace(/_/g, ' ')} · {category}
            </div>
            <h1 className="text-3xl md:text-5xl font-display text-white">{name}</h1>

            {/* --- Meta row: rating + price + distance + status --- */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/80 text-sm">
              {/* Rating */}
              <span className="flex items-center gap-1.5 font-bold">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                {googleRating}{' '}
                <span className="opacity-60">({googleReviewCount} reviews)</span>
              </span>

              <span className="opacity-40">|</span>

              {/* Price level */}
              <span className="text-white font-mono uppercase tracking-tighter">
                {PRICE_LEVEL_DISPLAY[priceLevel as keyof typeof PRICE_LEVEL_DISPLAY] || ''}
              </span>

              {/* NEW: Distance + walking time */}
              {distanceText && (
                <>
                  <span className="opacity-40">|</span>
                  <span className="flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5" />
                    {distanceText}
                  </span>
                </>
              )}

              {/* NEW: Open status */}
              <span className="opacity-40">|</span>
              <span className="flex items-center gap-1.5">
                <span
                  className={cn(
                    'w-2 h-2 rounded-full inline-block',
                    statusDotColor[shopStatus.color],
                  )}
                />
                <span className="text-white font-medium">{shopStatus.label}</span>
              </span>

              {placeIntel && (
                <>
                  <span className="opacity-40">|</span>
                  <SavvyBadge placeId={item.id} size="sm" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ==================================================== */}
        {/* MAIN CONTENT — Left column (2/3)                    */}
        {/* ==================================================== */}
        <div className="lg:col-span-2 space-y-8">
          {/* --- PRIMARY CTA (NEW — Above fold) --- */}
          <div className="flex flex-wrap gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-6 py-4 rounded-2xl font-bold hover:bg-[#C9A84C] transition-all shadow-lg hover:shadow-xl"
            >
              <Navigation className="w-5 h-5" />
              Navigate Here
            </a>
            {phoneNumber && (
              <a
                href={`https://wa.me/${phoneNumber.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
            )}
          </div>

          {/* Plan & Transport Integration */}
          {item.city && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-stone-50 p-4 border border-stone-200/50 rounded-3xl relative overflow-hidden">
              <button 
                onClick={() => {
                  navigate(`/transport/go?city=${encodeURIComponent(item.city)}&dest=${encodeURIComponent(name)}`);
                }}
                className="flex items-center justify-between p-3 bg-white border border-[#C9A84C]/30 hover:border-[#C9A84C] rounded-2xl shadow-sm text-left transition-all cursor-pointer"
              >
                <div className="flex gap-2.5 items-center">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Navigation className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-stone-800 leading-tight">Estimate Transit Fare</span>
                    <span className="block text-[10px] text-stone-400">Calculate taxi rate via MoveAssure</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>

              <button 
                onClick={handleAddShopToPlan}
                className="flex items-center justify-between p-3 bg-white border border-stone-200 hover:border-stone-400 rounded-2xl shadow-sm text-left transition-all cursor-pointer"
              >
                <div className="flex gap-2.5 items-center">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 text-[#D4863A]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-stone-800 leading-tight">
                      {showPlanSuccess ? "Added Successfully! ✨" : "Add to Itinerary"}
                    </span>
                    <span className="block text-[10px] text-stone-400">
                      {showPlanSuccess ? "Check your Plan Builder" : "Save shop for planning"}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>
          )}

          {/* --- Trust Signals (P1) --- */}
          {authenticitySeals.length > 0 && (
            <section className="flex flex-wrap gap-3">
              {authenticitySeals.map((sealId: AuthenticitySeal) => {
                const seal = SEAL_METADATA[sealId as keyof typeof SEAL_METADATA];
                return (
                  <div
                    key={sealId}
                    className={cn(
                      'px-4 py-3 rounded-2xl border flex items-center gap-3 group cursor-help transition-all',
                      seal.color,
                    )}
                    title={seal.desc}
                  >
                    <seal.icon className="w-5 h-5 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                        Quality Mark
                      </span>
                      <span className="text-xs font-bold leading-none">{seal.label}</span>
                    </div>
                  </div>
                );
              })}
            </section>
          )}

          {/* Savvy Intelligence Core Block */}
          {placeIntel && (
            <div className="bg-stone-900 text-white rounded-[40px] p-8 shadow-xl border border-stone-850 space-y-5">
              <div className="flex justify-between items-center pb-3 border-b border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl flex items-center justify-center text-[#C9A84C]">
                    <Award className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-stone-400 block font-bold">Morocco Savvy Verified</span>
                    <h4 className="text-sm font-black tracking-tight text-white uppercase tracking-widest">Savvy Souk/Shop Intelligence</h4>
                  </div>
                </div>
                {placeIntel.savvyScore !== undefined ? (
                  <div className="flex flex-col items-end gap-1">
                    <div className={`flex items-center gap-1.5 border px-3 py-1 rounded-full font-mono text-xs font-bold ${
                      placeIntel.savvyScore >= 80 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                        : placeIntel.savvyScore >= 60 
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                        : 'bg-red-500/10 border-red-500/30 text-red-400'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        placeIntel.savvyScore >= 80 
                          ? 'bg-emerald-400' 
                          : placeIntel.savvyScore >= 60 
                          ? 'bg-amber-400' 
                          : 'bg-red-400'
                      }`}></span>
                      Score {placeIntel.savvyScore}/100 · {
                        placeIntel.savvyScore >= 80 
                          ? 'Very Safe' 
                          : placeIntel.savvyScore >= 60 
                          ? 'Minor Caution' 
                          : 'Caution Advised'
                      }
                    </div>
                    <span className="text-[9px] text-stone-500 font-medium">Higher = safer, better value, less hassle</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 bg-[#C9A84C]/10 border border-[#C9A84C]/25 px-2.5 py-1 rounded-full text-[#C9A84C] font-mono text-xs font-bold">
                    No Savvy Score
                  </div>
                )}
              </div>

              {/* Savvy Tip */}
              {placeIntel.savvyTips && placeIntel.savvyTips.length > 0 && (
                <div className="space-y-1.5">
                  <div className="text-[10px] uppercase font-bold text-[#C9A84C] tracking-wider">💡 Souk Shopping Hack</div>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">{placeIntel.savvyTips[0]}</p>
                </div>
              )}

              {/* Price Guidelines */}
              {placeIntel.fairPriceGuidelines && (
                <div className="space-y-1.5 pt-2 border-t border-stone-800/50">
                  <div className="text-[10px] uppercase font-bold text-[#C9A84C] tracking-wider">💶 Price Verification Table</div>
                  <div className="bg-stone-950/60 p-3.5 rounded-2xl border border-stone-800 text-xs flex justify-between gap-4 font-mono">
                    <div>
                      <div className="text-[9px] text-stone-500 uppercase font-bold">Expat Benchmark</div>
                      <div className="text-stone-200 font-bold mt-0.5">{placeIntel.fairPriceGuidelines.avgExpatSpend}</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-stone-500 uppercase font-bold">Overcharge Limit</div>
                      <div className="text-stone-200 font-bold mt-0.5">{placeIntel.fairPriceGuidelines.markupAlertThreshold}</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-stone-500 uppercase font-bold">Negotiability</div>
                      <div className="text-emerald-400 font-bold mt-0.5 capitalize">{placeIntel.fairPriceGuidelines.negotiability}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Darija Escape Scripts */}
              {placeIntel.darijaEscapeScripts && placeIntel.darijaEscapeScripts.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-stone-800/50">
                  <div className="text-[10px] uppercase font-bold text-[#C9A84C] tracking-wider">🎙️ Exit & Escape Scripts (Darija Pronunciation Guide)</div>
                  <div className="grid grid-cols-1 gap-3">
                    {placeIntel.darijaEscapeScripts.map((esc, idx) => (
                      <div key={idx} className="bg-stone-950/40 border border-stone-800 p-4 rounded-2xl space-y-2 relative">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="text-[8px] font-black uppercase tracking-widest text-amber-500/80 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                              Situation: {esc.situation}
                            </span>
                            <div className="text-base font-bold text-white tracking-wide mt-1.5">{esc.script}</div>
                          </div>
                          {/* Audio not available placeholder to adhere strictly to AGENTS.md rule 2 */}
                          <div className="group/audio relative shrink-0">
                            <button 
                              disabled
                              className="p-1.5 bg-stone-900 border border-stone-800 rounded-lg text-stone-500 cursor-not-allowed hover:bg-stone-900 transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                            </button>
                            <span className="absolute bottom-full right-0 mb-2 w-40 p-2 bg-stone-950 text-stone-300 text-[9px] rounded-lg shadow-xl border border-stone-800 opacity-0 pointer-events-none group-hover/audio:opacity-100 transition-opacity z-10 leading-normal text-center font-bold">
                              Audio not available yet
                            </span>
                          </div>
                        </div>
                        <div className="space-y-1 pt-1 border-t border-stone-800/30">
                          <div className="text-[11px] text-stone-300 font-medium">
                            🗣️ Pronunciation: <span className="font-mono text-amber-400 font-bold">{(esc as any).pronunciation}</span>
                          </div>
                          <div className="text-[11px] text-stone-400 italic">
                            Meaning: "{esc.translation}"
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => {
                    navigate(`/savvy/${item.city || 'marrakech'}/shop/${item.id}`);
                  }}
                  className={cn(
                    "w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 border cursor-pointer",
                    "bg-[#C9A84C] hover:bg-[#b0913e] text-stone-900 border-[#C9A84C]"
                  )}
                >
                  <Award className="w-3.5 h-3.5" />
                  View Savvy Intelligence Page
                </button>
              </div>
            </div>
          )}

          {/* --- Description + Categories --- */}
          <section className="bg-white rounded-[40px] p-10 border border-stone-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Info className="w-24 h-24" />
            </div>
            <h2 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-6">
              About the Store
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed font-sans">{description}</p>

            {productCategories.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {productCategories.map((pc: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-stone-50 text-stone-500 rounded-lg text-xs font-bold uppercase tracking-tight border border-stone-100"
                  >
                    {pc}
                  </span>
                ))}
              </div>
            )}

            {tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-stone-50">
                {tags.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-[#C9A84C]/5 text-[#C9A84C] rounded-lg text-[10px] font-black uppercase tracking-wider border border-[#C9A84C]/10"
                  >
                    #{tag.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* --- MEDINA NAVIGATION (REORDERED — now 2nd section) --- */}
          {navSteps && navSteps.length > 0 && (
            <section className="bg-stone-900 text-white rounded-[40px] p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Navigation className="w-32 h-32 rotate-12" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#C9A84C] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-stone-900" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C]">
                      Medina Navigation
                    </h3>
                    <p className="text-lg font-display">{neighborhood}</p>
                  </div>
                </div>

                {/* Turn-by-turn steps */}
                <ol className="space-y-4 mb-8">
                  {navSteps.map((step: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-stone-300 text-sm leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>

                {/* what3words */}
                {what3words && (
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 mb-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">
                          what3words Address
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                      </div>
                      <button
                        onClick={handleCopyWhat3words}
                        className="text-stone-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"
                        title="Copy what3words address"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                      <a
                        href={`https://what3words.com/${what3words}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm font-bold text-[#C9A84C] hover:underline flex items-center gap-1"
                        title="Open on what3words.com"
                      >
                        ///{what3words}
                        <ExternalLink className="w-3 h-3 text-stone-400 shrink-0" />
                      </a>
                    </div>

                    <p className="text-[11px] text-stone-400 leading-relaxed font-sans">
                      💡 <strong className="text-stone-300">Medina Navigation Trick:</strong> The alleys inside the historic Medina are a labyrinth with no street signs where standard GPS struggles. This 3-word coordinate acts like a precise digital tag pointing directly to the <strong className="text-stone-200">exact entrance door</strong>. Click to open it or copy it into your navigation tool!
                    </p>
                  </div>
                )}

                {/* Embedded Interactive Map */}
                {item.coordinates && (
                  <div className="w-full h-52 rounded-2xl overflow-hidden border border-white/10 mb-4 relative shadow-inner bg-stone-800">
                    <iframe
                      title={`Embedded Map for ${item.name}`}
                      src={`https://maps.google.com/maps?q=${item.coordinates.lat},${item.coordinates.lng}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                      className="w-full h-full border-0 grayscale opacity-80 contrast-[1.1] invert-[0.9] hue-rotate-[180deg]"
                      allowFullScreen={true}
                      loading="lazy"
                    ></iframe>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-stone-900 px-4 py-3 rounded-2xl font-bold hover:bg-[#C9A84C]/20 transition-all justify-center border border-stone-200"
                  >
                    <MapPin className="w-4 h-4 text-stone-500" /> Google Maps
                  </a>
                  <button
                    onClick={() => {
                      useTransportStore.getState().setRoute(null, `${item.name}, ${item.city}`);
                      navigate('/transport/exploring-city/plan-route');
                    }}
                    className="inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-3 rounded-2xl font-bold hover:bg-stone-800 transition-all justify-center cursor-pointer border border-stone-700"
                  >
                    <Navigation className="w-4 h-4 text-amber-400" /> Plan Route
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/transport/fare-calculator?city=${(item.city || 'marrakech').toLowerCase()}&distance=4&mode=petit_taxi`);
                    }}
                    className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/50 text-[#96700A] px-4 py-3 rounded-2xl font-bold hover:bg-amber-100 transition-all justify-center cursor-pointer"
                  >
                    <DollarSign className="w-4 h-4 text-[#D4863A]" /> Taxi Fare
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* --- What They Sell + Pricing Guide --- */}
          <section className="bg-[#C9A84C]/5 border border-[#C9A84C]/10 rounded-[40px] p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className={cn('p-3 rounded-2xl', PRICING_MODEL_METADATA[pricingModel as keyof typeof PRICING_MODEL_METADATA]?.color || '')}>
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                  Pricing Model
                </h3>
                <p className="text-xl font-display text-stone-900">
                  {PRICING_MODEL_METADATA[pricingModel as keyof typeof PRICING_MODEL_METADATA]?.label || ''}
                </p>
              </div>
            </div>
            <p className="text-stone-600 mb-8">
              {pricingModel === 'fixed'
                ? 'Price tags attached, no haggling needed.'
                : pricingModel === 'negotiable'
                  ? 'Haggling is expected. Start at ~50% of the asking price and negotiate from there.'
                  : pricingModel === 'mixed'
                    ? 'Some items are tagged, others are negotiable. Ask the seller.'
                    : 'Prices fluctuate based on daily market rates.'}
            </p>

            {whatTheySell.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-stone-400">
                  Typical Pricing Guide
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {whatTheySell.map((sellItem: any, i: number) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-2xl border border-stone-100 flex flex-wrap justify-between items-center gap-2"
                    >
                      <div>
                        <span className="text-sm font-bold text-stone-900">{sellItem.item}</span>
                        {sellItem.range && (
                          <span className="text-xs text-stone-400 ml-2">· {sellItem.range}</span>
                        )}
                      </div>
                      {sellItem.priceEstimate && (
                        <span className="text-sm font-mono text-[#C9A84C] font-bold">
                          {sellItem.priceEstimate}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* --- REVIEWS (NEW — was completely missing) --- */}
          {recentReviews.length > 0 && (
            <section className="bg-white rounded-[40px] p-8 border border-stone-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">
                    What Travelers Say
                  </h2>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="text-2xl font-bold text-stone-900">{googleRating}</span>
                    <span className="text-stone-400 text-sm">
                      ({googleReviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {reviewSummary && (
                <p className="text-stone-500 italic mb-6 border-l-4 border-[#C9A84C] pl-4">
                  &ldquo;{reviewSummary}&rdquo;
                </p>
              )}

              <div className="space-y-4">
                {placeIntel && placeIntel.socialHighlights && placeIntel.socialHighlights.length > 0 ? (
                  placeIntel.socialHighlights.map((highlight, index) => {
                    const sourceLabels: Record<string, string> = {
                      reddit: 'Reddit AI Mine',
                      tripadvisor: 'TripAdvisor Audit',
                      facebook: 'Expat FB Group',
                      google_review: 'Google Review Analytics',
                      instagram: 'Instagram Social Proof'
                    };
                    const sentimentEmojis: Record<string, string> = {
                      positive: '😊 Positive',
                      negative: '⚠️ Negative Highlight',
                      warning: '🚨 Alert Flag',
                      tip: '💡 Insider Tip'
                    };
                    return (
                      <div key={index} className="p-4 border border-stone-150 rounded-2xl bg-stone-50/20 space-y-1.5 animate-fade-in">
                        <div className="flex justify-between items-center text-xs">
                          <div>
                            <span className="font-bold text-stone-800 capitalize">{sourceLabels[highlight.source] || highlight.source}</span>
                            <span className="text-stone-400 ml-2">{highlight.dateHarvested}</span>
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                            {sentimentEmojis[highlight.sentiment] || highlight.sentiment}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed font-sans italic">
                          "{highlight.text}"
                        </p>
                      </div>
                    );
                  })
                ) : (
                  recentReviews.slice(0, 3).map((review: any, i: number) => (
                    <ReviewCard key={i} review={review} />
                  ))
                )}
              </div>
            </section>
          )}

          {/* --- History --- */}
          {history && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <History className="w-5 h-5 text-stone-400" />
                <h2 className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                  Our Story
                </h2>
              </div>
              <p className="text-lg text-stone-600 leading-relaxed italic border-l-4 border-stone-100 pl-6">
                &ldquo;{history}&rdquo;
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {establishedYear && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-stone-50 rounded-lg text-xs font-bold text-stone-500">
                    EST. {establishedYear}
                  </div>
                )}
              </div>
              {ownerName && (
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 flex items-start gap-4 mt-4">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] font-bold font-display uppercase shrink-0">
                    <User className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 block mb-1">
                      Meet the Owner / Artisan
                    </span>
                    <h4 className="font-display font-bold text-stone-900 mb-1">{ownerName}</h4>
                    {ownerBio && <p className="text-stone-600 text-xs leading-relaxed">{ownerBio}</p>}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* --- NearbyShops (NEW) --- */}
          {(nearbyLandmarks.length > 0 || item.coordinates) && (
            <section>
              <NearbyShops 
                currentShopId={item.id} 
                city={item.city} 
                nearbyLandmarks={nearbyLandmarks}
              />
            </section>
          )}
        </div>

        {/* ==================================================== */}
        {/* SIDEBAR — Right column (1/3)                        */}
        {/* ==================================================== */}
        <div className="space-y-6">
          {/* --- Quick Contact (Secondary — WhatsApp moved below) --- */}
          {phoneNumber && (
            <div className="bg-white rounded-[32px] p-6 border border-stone-100 shadow-xl space-y-4">
              <div className="space-y-3">
                {/* FIXED: template literal syntax — removed stray } */}
                <a
                  href={`https://wa.me/${phoneNumber.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> Message WhatsApp
                </a>

                <div className="space-y-3 pt-2">
                  {/* FIXED: template literal syntax */}
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-3 text-sm text-stone-600 hover:text-[#C9A84C] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C9A84C]" /> {phoneNumber}
                  </a>
                  {website && (
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-stone-600 hover:text-[#C9A84C] transition-colors"
                    >
                      <Globe className="w-4 h-4 text-[#C9A84C]" /> Official Website
                    </a>
                  )}
                  {instagram && (
                    <a
                      // FIXED: template literal syntax
                      href={`https://instagram.com/${instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-stone-600 hover:text-[#C9A84C] transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-[#C9A84C]" /> {instagram}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* --- Opening Hours with Smart Status --- */}
          <div className="bg-stone-50 rounded-[32px] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-stone-400" />
              <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                Opening Hours
              </h3>
            </div>
            {/* Status chip */}
            <div
              className={cn(
                'mb-4 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2',
                shopStatus.color === 'emerald' && 'bg-emerald-50 text-emerald-700',
                shopStatus.color === 'amber' && 'bg-amber-50 text-amber-700',
                shopStatus.color === 'blue' && 'bg-blue-50 text-blue-700',
                shopStatus.color === 'purple' && 'bg-purple-50 text-purple-700',
                shopStatus.color === 'red' && 'bg-red-50 text-red-700',
                shopStatus.color === 'stone' && 'bg-stone-100 text-stone-500',
              )}
            >
              <span
                className={cn(
                  'w-2 h-2 rounded-full',
                  statusDotColor[shopStatus.color],
                )}
              />
              {shopStatus.label}
            </div>

            <div className="space-y-2 mb-4">
              {openingHours.map((oh: { day: string; hours: string }, i: number) => (
                <div key={i} className="flex justify-between text-xs">
                  <span className="text-stone-500 font-medium">{oh.day}</span>
                  <span className="text-stone-900 font-bold">{oh.hours}</span>
                </div>
              ))}
            </div>
            {fridayHours && (
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-[10px] text-blue-700 font-bold leading-tight flex items-start gap-2">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <div>
                  FRIDAY PRAYER PAUSE:
                  <div className="opacity-70 mt-1 font-medium">{fridayHours}</div>
                </div>
              </div>
            )}
            {ramadanHours && (
              <div className="mt-2.5 p-3 bg-amber-50/50 border border-amber-100 rounded-xl text-[10px] text-amber-800 font-bold leading-tight flex items-start gap-2">
                <Moon className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600 animate-pulse" />
                <div>
                  RAMADAN HOURS:
                  <div className="opacity-80 mt-1 font-medium text-stone-700">{ramadanHours}</div>
                </div>
              </div>
            )}
          </div>

          {/* --- Payment & Shipping --- */}
          <div className="bg-white rounded-[32px] p-6 border border-stone-100 shadow-sm space-y-6">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-3">
                Accepted Payments
              </h3>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((pm: string, i: number) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-stone-50 text-[10px] font-bold rounded-lg border border-stone-100 uppercase flex items-center gap-1"
                  >
                    {pm === 'cash' ? <Wallet className="w-3 h-3" /> : <CreditCard className="w-3 h-3" />}
                    {pm.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            </div>

            {shipping?.available && (
              <div className="pt-4 border-t border-stone-50">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-900">
                    International Shipping
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 leading-relaxed">{shipping.details}</p>
                {shipping.partner && (
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-lg border border-emerald-100 uppercase">
                    Partner: {shipping.partner.replace(/_/g, ' ')}
                  </div>
                )}
              </div>
            )}

            {returnPolicy && (
              <div className="pt-4 border-t border-stone-50">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowLeftRight className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-900">
                    Return Policy
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 leading-relaxed">{returnPolicy}</p>
              </div>
            )}
          </div>

          {/* --- Languages --- */}
          {languagesSpoken.length > 0 && (
            <div className="bg-stone-900 text-white rounded-[32px] p-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-4">
                Languages Spoken
              </h3>
              <div className="flex flex-wrap gap-2">
                {languagesSpoken.map((lang: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold border border-white/10"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* --- Best Time + Crowd Level + Store Size (NEW — surfaced from data) --- */}
          {(bestTimeToVisit || crowdLevel || storeSize) && (
            <div className="bg-white rounded-[32px] p-6 border border-stone-100 shadow-sm space-y-4">
              {bestTimeToVisit && (
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 block">
                      Best Time to Visit
                    </span>
                    <span className="text-sm font-bold text-stone-900">{bestTimeToVisit}</span>
                  </div>
                </div>
              )}
              {crowdLevel && (
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 block">
                      Crowd Level
                    </span>
                    <span className="text-sm font-bold text-stone-900">
                      {CROWD_LABEL[crowdLevel] ?? crowdLevel}
                    </span>
                  </div>
                </div>
              )}
              {storeSize && (
                <div className="flex items-start gap-3">
                  <ShoppingBag className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 block">
                      Store Size
                    </span>
                    <span className="text-sm font-bold text-stone-900">
                      {STORE_SIZE_LABEL[storeSize] ?? storeSize}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* --- Atmopshere (if available) --- */}
          {atmosphere && (
            <div className="px-6 py-4 bg-stone-50 rounded-[32px]">
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 block mb-1">
                Atmosphere
              </span>
              <span className="text-sm font-bold text-stone-900">{atmosphere}</span>
            </div>
          )}

          {/* --- Insider Tip --- */}
          {tip && (
            <div className="bg-amber-100 rounded-[32px] p-6 border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <h3 className="text-[10px] font-black uppercase tracking-widest text-amber-600">
                  Insider Tip
                </h3>
              </div>
              <p className="text-xs font-medium text-amber-800 leading-relaxed italic">
                &ldquo;{tip}&rdquo;
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ==================================================== */}
      {/* STICKY BOTTOM BAR (Mobile — NEW)                    */}
      {/* ==================================================== */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/90 backdrop-blur-xl border-t border-stone-100 p-4 z-50">
        <div className="flex gap-3 max-w-4xl mx-auto">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-4 py-3 rounded-2xl font-bold text-sm"
          >
            <Navigation className="w-4 h-4" />
            Navigate
          </a>
          {phoneNumber && (
            <a
              href={`https://wa.me/${phoneNumber.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-2xl font-bold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
          )}
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center gap-2 bg-stone-100 text-stone-900 px-4 py-3 rounded-2xl font-bold text-sm"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
