// src/components/finder/StayDetailView.tsx
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Heart, Share2, MapPin, Home, ExternalLink, Phone, MessageSquare } from 'lucide-react';
import { cn } from '../../utils/cn';
import { adaptToStayListing, getStayPrice, getStayLifestyle, getStayOwnerAnswer } from '../../engine/stayAdapter';
import { useSavedStore } from '../../state/savedStore';
import { getListingRating } from '../../listings/utils';
import CamelRating from './CamelRating';
import SavvyBadge from '../savvy/SavvyBadge';
import { WalkingDistanceSection } from './stay/WalkingDistanceSection';
import { TraditionalSpacesSection } from './stay/TraditionalSpacesSection';
import { RoomDetailsSection } from './stay/RoomDetailsSection';
import { AmenitiesSection } from './stay/AmenitiesSection';
import { PoliciesSection } from './stay/PoliciesSection';
import { StayFAQSection } from './stay/StayFAQSection';
import { LocationBottomBar } from './stay/LocationBottomBar';
import staysHeroEditorialImg from '../../assets/images/botanical_stays_flat.jpg';

interface StayDetailViewProps {
  item: any;
  onBack: () => void;
}

const LIFESTYLE_LABEL: Record<string, string> = {
  lean: 'Budget-Friendly',
  balanced: 'Mid-Range',
  premium: 'Luxury'
};

export default function StayDetailView({ item, onBack }: StayDetailViewProps) {
  const { toggleBookmark, isBookmarked } = useSavedStore();

  // Bridge: collected sleep listing → new modular stay template schema
  const stay = useMemo(() => adaptToStayListing(item), [item]);

  const price = getStayPrice(item);
  const lifestyle = getStayLifestyle(item);
  const idString = String(item?.id || '');
  const bookmarked = isBookmarked(idString);

  // Consolidated ratings from real backend database
  const { 
    averageRating, 
    totalReviews, 
    googleRating, 
    googleReviewCount, 
    tripadvisorRating, 
    bookingRating 
  } = useMemo(() => {
    return getListingRating(item);
  }, [item]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${stay.name} — Moroccan Mate`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
    }
  };

  const handleDirectionsClick = () => {
    if (stay.location?.directions_url) {
      window.open(stay.location.directions_url, '_blank', 'noopener,noreferrer');
    } else {
      const fallbackUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${stay.name}, ${stay.location.city}, Morocco`
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
          - Wide Garden Stays Image spanning full width
          - Floating White Back Button & Controls
          - Full-width Organic Curved Wave Transition
          - Unboxed, spacious title & metadata area
          - Rating with Camel Logo + Google/TripAdvisor/Booking badges
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full bg-white border-b border-stone-200/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.07),0_4px_12px_-2px_rgba(0,0,0,0.03)] relative z-20">
        
        {/* SLIM WIDE IMAGE BANNER (COMPACT 160-210px, FULL WIDTH) */}
        <div className="relative w-full h-[160px] sm:h-[185px] md:h-[210px] overflow-hidden bg-[#FAF7F2]">
          <img
            src={staysHeroEditorialImg}
            alt={`${stay.name} Moroccan stay setting`}
            className="w-full h-full object-cover object-center select-none"
          />

          {/* FLOATING WHITE ROUND BUTTONS: BOOKMARK & SHARE (TOP RIGHT) */}
          <div className="absolute top-4 right-4 sm:top-5 sm:right-6 z-20 flex items-center gap-2">
            <button
              onClick={() =>
                toggleBookmark({
                  id: idString,
                  type: 'sleep',
                  name: stay.name,
                  city: stay.location.city,
                  category: 'sleep'
                })
              }
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
          <div className="space-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173042] tracking-tight">
              {stay.name}
            </h1>
            
            {/* Clean, readable sub-header line */}
            <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base text-stone-600 font-medium">
              <span className="inline-flex items-center gap-1.5 text-stone-900 font-semibold">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{stay.location.city} · {stay.location.neighborhood}</span>
              </span>
              <span className="text-stone-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-stone-800 font-semibold capitalize">
                <Home className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{stay.type}</span>
              </span>
              <span className="text-stone-300">·</span>
              <span className="inline-flex items-center gap-1.5 font-bold text-stone-900">
                <span>{price} MAD/night</span>
                <span className="text-stone-500 font-normal text-xs sm:text-sm">
                  ({LIFESTYLE_LABEL[lifestyle] || lifestyle})
                </span>
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
                {bookingRating && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200 shadow-2xs">
                    <span className="text-blue-600 font-bold">★</span>
                    <span>Booking.com {bookingRating}</span>
                  </span>
                )}
                {item?.isVerified && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold bg-emerald-100/70 text-emerald-900 border border-emerald-200 shadow-2xs">
                    <span>🛡️ Verified Stay</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions Bar: Directions / Photos, Check Availability, WhatsApp / Phone */}
          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleDirectionsClick}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#dca448] px-5 py-2.5 text-xs font-bold text-[#221c15] shadow-xs transition-all hover:bg-[#cf973b] hover:shadow-md active:scale-98 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Get directions & photos</span>
            </button>

            {stay.booking_url && (
              <a
                href={stay.booking_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-all hover:bg-stone-800 hover:shadow-md active:scale-98 cursor-pointer"
              >
                <span>Direct booking</span>
              </a>
            )}

            {stay.contact_whatsapp && (
              <a
                href={`https://wa.me/${stay.contact_whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-xs font-bold text-emerald-800 shadow-2xs transition-all hover:bg-emerald-50 active:scale-98"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            )}

            {stay.phone && (
              <a
                href={`tel:${stay.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 shadow-2xs transition-all hover:bg-stone-50 active:scale-98"
              >
                <Phone className="w-3.5 h-3.5 text-stone-500" />
                <span>Call Riad</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. BODY CONTENT (WARM, WELL-SPACED SECTIONS)
      ───────────────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 lg:px-8 space-y-10">
        
        {/* Walking distance radar map + what's nearby (the minimap) */}
        {stay.visibility.show_walking_distance !== false && (
          <WalkingDistanceSection propertyName={stay.name} nearbyPlaces={stay.walking_distance} />
        )}

        {/* Traditional spaces / property features */}
        {stay.visibility.show_traditional_spaces !== false && (
          <TraditionalSpacesSection spaces={stay.traditional_spaces} />
        )}

        {/* Room configuration */}
        {stay.visibility.show_room_details !== false && (
          <RoomDetailsSection room={stay.room_details} />
        )}

        {/* Comfort & amenities */}
        {stay.visibility.show_comfort_amenities !== false && (
          <AmenitiesSection amenities={stay.amenities} visibility={stay.visibility} />
        )}

        {/* Policies & payments */}
        {stay.visibility.show_policies !== false && <PoliciesSection policies={stay.policies} />}

        {/* Frequently Asked Questions (FAQ) */}
        <StayFAQSection propertyName={stay.name} ownerAnswer={getStayOwnerAnswer(item)} />

        {/* Exact location bottom bar */}
        {stay.visibility.show_exact_location !== false && (
          <LocationBottomBar location={stay.location} propertyName={stay.name} />
        )}
      </div>
    </motion.div>
  );
}
