import React, { useState } from 'react';
import { Heart, MapPin, Navigation, ExternalLink, Share2, Compass, Clock, Tag } from 'lucide-react';
import type { ActivityListing } from '../../things-to-do';
import { formatDuration, formatPrice, formatGroupLabel } from '../../things-to-do';
import { ActivityIcon } from './ActivityIcon';
import CamelRating from '../finder/CamelRating';
import thingsHeroEditorialImg from '../../assets/images/botanical_things_flat.jpg';

interface ActivityHeaderProps {
  activity: ActivityListing;
}

/**
 * Main experience hero with full-width wide editorial illustration banner,
 * unboxed title & organized metadata, plus camel rating block.
 */
export const ActivityHeader: React.FC<ActivityHeaderProps> = ({ activity }) => {
  const [isSaved, setIsSaved] = useState(false);

  const photosUrl = activity.directions_url
    || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${activity.name} ${activity.city || ''} Morocco`)}`;

  const duration = formatDuration(activity.duration_minutes);
  const price = formatPrice(activity.pricing);
  const group = formatGroupLabel(activity.capacity) || 'Flexible';

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${activity.name} — Moroccan Mate`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
    }
  };

  const ratingValue = (activity as any).rating || (activity as any).googleRating || 4.7;
  const reviewCount = (activity as any).review_count || (activity as any).reviewCount || 120;

  return (
    <section className="w-full">
      {/* ─────────────────────────────────────────────────────────────
          1. FULL-BLEED UPPER SECTION (EDGE-TO-EDGE, UNBOXED WITH DROP SHADOW)
          - Wide Things to Do Image spanning full width
          - Floating White Round Controls (Bookmark & Share)
          - Full-width Organic Curved Wave Transition
          - Unboxed, spacious title & metadata area
          - Rating with Camel Logo + Google & TripAdvisor badges
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full bg-white border-b border-stone-200/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.07),0_4px_12px_-2px_rgba(0,0,0,0.03)] relative z-20">
        
        {/* SLIM WIDE IMAGE BANNER (COMPACT 160-210px, FULL WIDTH) */}
        <div className="relative w-full h-[160px] sm:h-[185px] md:h-[210px] overflow-hidden bg-[#FAF7F2]">
          <img
            src={thingsHeroEditorialImg}
            alt={`${activity.name} Moroccan experience`}
            className="w-full h-full object-cover object-center select-none"
          />

          {/* FLOATING WHITE ROUND BUTTONS: BOOKMARK & SHARE (TOP RIGHT) */}
          <div className="absolute top-4 right-4 sm:top-5 sm:right-6 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsSaved(!isSaved)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all cursor-pointer border border-stone-200/70 hover:bg-stone-50 active:scale-95"
              title={isSaved ? 'Remove from saved' : 'Save experience'}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-500 text-red-500' : 'text-stone-700 hover:text-red-500'}`} />
            </button>
            <button
              type="button"
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

        {/* UNBOXED, OPEN TITLE & METADATA BAR */}
        <div className="w-full px-5 sm:px-8 lg:px-12 pb-8 pt-3 sm:pt-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 bg-amber-50 border border-amber-200/70 text-[#96700A] rounded-full text-[10px] font-black uppercase tracking-widest">
                {activity.activity_type}
              </span>
              <span className="px-3 py-1 bg-[#FAF3EA] text-stone-800 rounded-full text-[10px] font-bold tracking-wide border border-[#E8DAAA]">
                {activity.category}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#173042] leading-[1.1]">
              {activity.name}
            </h1>

            {/* Clean sub-header line */}
            <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base text-stone-600 font-medium">
              <span className="inline-flex items-center gap-1.5 text-stone-900 font-semibold">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  {[
                    activity.city && activity.city.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                    activity.neighborhood,
                    activity.location_descriptor,
                  ]
                    .filter(Boolean)
                    .join(' · ')}
                </span>
              </span>
              <span className="text-stone-300">·</span>
              <span className="inline-flex items-center gap-1.5 font-bold text-stone-900">
                <span>{price}</span>
              </span>
              {duration && (
                <>
                  <span className="text-stone-300">·</span>
                  <span className="inline-flex items-center gap-1 text-stone-500 font-normal text-xs sm:text-sm">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{duration}</span>
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Ratings Block with Camel Logo */}
          <div className="mt-6 bg-[#FAF7F2] border border-[#EAE2D5] rounded-2xl p-4 sm:p-5 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <CamelRating rating={ratingValue} size="md" />
                {reviewCount > 0 && (
                  <span className="text-xs sm:text-sm text-stone-500 font-medium">
                    ({reviewCount.toLocaleString()} authentic reviews)
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold bg-white text-stone-800 border border-stone-200/90 shadow-2xs">
                  <span className="text-amber-500 font-bold">★</span>
                  <span>Google {ratingValue}</span>
                  <span className="text-stone-400 font-normal">({reviewCount})</span>
                </span>

                <a
                  href={photosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-[#FAF3EA] text-stone-800 hover:text-stone-950 border border-[#E8DAAA] shadow-2xs transition-all cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C2613C]" />
                  <span>View photos on Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                {activity.directions_url && (
                  <a
                    href={activity.directions_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-[#DFAF4F] text-[#173042] hover:bg-[#d09c39] shadow-2xs transition-all cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get directions</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Short description */}
          {activity.short_description && (
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#66757D]">
              {activity.short_description}
            </p>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};
