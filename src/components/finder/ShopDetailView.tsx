// src/components/finder/ShopDetailView.tsx
// Rebuilt from the morocco-finder-stay-template (1) design — ShopTemplateView
// with its full section set, fed by the collected shop data via the adapter.
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Heart, Share2, MapPin, ShoppingBag, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { adaptToTemplateShop, getShopCityName } from '../../engine/shopTemplateAdapter';
import { getShopById } from '../../shop';
import { ShopListing as LegacyShopListing } from '../../listings/types';
import { useExploreStore } from '../../state/exploreStore';
import { useSavedStore } from '../../state/savedStore';
import { useNavigate } from 'react-router-dom';
import { getListingRating } from '../../listings/utils';
import CamelRating from './CamelRating';
import SavvyBadge from '../savvy/SavvyBadge';
import { ShopTemplateView } from './shop-template/ShopTemplateView';
import shopHeroEditorialImg from '../../assets/images/botanical_shop_flat.jpg';
import { cn } from '../../utils/cn';

interface ShopDetailViewProps {
  item: LegacyShopListing;
  onBack: () => void;
}

export default function ShopDetailView({ item: passedItem, onBack }: ShopDetailViewProps) {
  const { omitGoogleImage } = useExploreStore();
  const navigate = useNavigate();
  const { toggleBookmark, isBookmarked } = useSavedStore();

  // Resolve through the canonical shop module backend (single source of truth)
  const legacyItem = useMemo<LegacyShopListing>(
    () => (getShopById(String(passedItem?.id)) as LegacyShopListing) || passedItem,
    [passedItem],
  );

  // Bridge: collected shop data → modular template schema
  const shop = useMemo(() => adaptToTemplateShop(legacyItem), [legacyItem]);

  const idString = String(legacyItem?.id || '');
  const bookmarked = isBookmarked(idString);
  const rating = legacyItem?.googleRating;
  const reviewCount = legacyItem?.googleReviewCount;
  const isVerified = legacyItem?.isVerified;
  const isLocalFavorite = legacyItem?.isLocalFavorite;

  // Consolidated ratings from real backend database
  const { averageRating, totalReviews } = useMemo(() => {
    return getListingRating(legacyItem);
  }, [legacyItem]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${shop.name} — Moroccan Mate`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
    }
  };

  const handleDirectionsClick = () => {
    if (shop.directions_url) {
      window.open(shop.directions_url, '_blank', 'noopener,noreferrer');
    } else {
      const fallbackUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${shop.name}, ${shop.city}, Morocco`
      )}`;
      window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.3 }}
      className="w-full pb-16 font-sans text-stone-900"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. FULL-BLEED UPPER SECTION (EDGE-TO-EDGE, UNBOXED WITH DROP SHADOW)
          - Wide Artisan Souk Image spanning full width
          - Floating White Back Button & Controls
          - Full-width Organic Curved Wave Transition
          - Unboxed, spacious title & metadata area
          - Rating with Camel Logo + Google & Verified badges
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full bg-white border-b border-stone-200/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.07),0_4px_12px_-2px_rgba(0,0,0,0.03)] relative z-20">
        
        {/* SLIM WIDE IMAGE BANNER (COMPACT 160-210px, FULL WIDTH) */}
        <div className="relative w-full h-[160px] sm:h-[185px] md:h-[210px] overflow-hidden bg-[#FAF7F2]">
          <img
            src={shopHeroEditorialImg}
            alt={`${shop.name} Moroccan artisan boutique setting`}
            className="w-full h-full object-cover object-center select-none"
          />

          {/* FLOATING WHITE ROUND BUTTONS: BOOKMARK & SHARE (TOP RIGHT) */}
          <div className="absolute top-4 right-4 sm:top-5 sm:right-6 z-20 flex items-center gap-2">
            <button
              onClick={() =>
                toggleBookmark({
                  id: idString,
                  type: 'shop',
                  name: shop.name,
                  city: shop.city,
                  category: 'shop'
                })
              }
              className={cn(
                "w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all cursor-pointer border border-stone-200/70 hover:bg-stone-50 active:scale-95",
                bookmarked ? "text-red-500" : "text-stone-700 hover:text-red-500"
              )}
              title={bookmarked ? "Saved in favorites" : "Save boutique"}
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
          <div className="space-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173042] tracking-tight">
              {shop.name}
            </h1>
            
            {/* Clean, readable sub-header line */}
            <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base text-stone-600 font-medium">
              <span className="inline-flex items-center gap-1.5 text-stone-900 font-semibold">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{shop.city} · {shop.neighborhood || legacyItem.neighborhood || 'Medina'}</span>
              </span>
              <span className="text-stone-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-stone-800 font-semibold capitalize">
                <ShoppingBag className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{(shop as any).category || (legacyItem as any).category || (legacyItem as any).type || 'Artisan Shop'}</span>
              </span>
              <span className="text-stone-300">·</span>
              <span className="inline-flex items-center gap-1.5 font-bold text-stone-900">
                <span>{legacyItem.pricingModel === 'fixed' ? 'Fixed Price' : 'Negotiable'}</span>
                {legacyItem.priceLevel && (
                  <span className="text-stone-500 font-normal text-xs sm:text-sm">
                    ({legacyItem.priceLevel})
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Ratings Block with Camel Logo */}
          <div className="mt-6 bg-[#FAF7F2] border border-[#EAE2D5] rounded-2xl p-4 sm:p-5 shadow-2xs">
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
                {rating && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold bg-white text-stone-800 border border-stone-200/90 shadow-2xs">
                    <span className="text-amber-500 font-bold">★</span>
                    <span>Google {rating}</span>
                    {reviewCount && <span className="text-stone-400 font-normal">({reviewCount})</span>}
                  </span>
                )}
                {isVerified && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold bg-emerald-100/70 text-emerald-900 border border-emerald-200 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Physically Verified</span>
                  </span>
                )}
                {isLocalFavorite && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold bg-[#F4EDE4] text-[#8C6218] border border-[#e5dcce] shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-[#8C6218]" />
                    <span>Local Favorite</span>
                  </span>
                )}
                {idString && <SavvyBadge placeId={idString} size="sm" />}
              </div>
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleDirectionsClick}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#dca448] px-5 py-2.5 text-xs font-bold text-[#221c15] shadow-xs transition-all hover:bg-[#cf973b] hover:shadow-md active:scale-98 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Get directions & location</span>
            </button>

            {(shop as any).phone && (
              <a
                href={`tel:${String((shop as any).phone).replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 shadow-2xs transition-all hover:bg-stone-50 active:scale-98"
              >
                <span>Call Shop</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. BODY CONTENT (SHOP TEMPLATE SECTIONS)
      ───────────────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 lg:px-8 space-y-10">
        
        {/* The template shop page: hero carousel, products, highlights,
            radar minimap, pricing, payment, hours, languages, shipping */}
        <ShopTemplateView shop={shop} />

        {/* Location bottom bar */}
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-[#e5dcce] bg-white p-5 shadow-2xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4EDE4] text-[#8C6218]">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1c1917]">Location</h3>
              <p className="text-sm text-[#786b5b]">{shop.address}</p>
            </div>
          </div>
          <button
            onClick={handleDirectionsClick}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e5a84b] px-6 py-2.5 text-sm font-bold text-[#1c1917] shadow-2xs transition-all hover:bg-[#d99738] cursor-pointer active:scale-98 self-start sm:self-auto"
          >
            Open exact location
          </button>
        </div>
      </div>
    </motion.div>
  );
}
