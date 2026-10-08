// src/components/finder/StayDetailView.tsx
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Heart } from 'lucide-react';
import { cn } from '../../utils/cn';
import { adaptToStayListing, getStayPrice, getStayLifestyle, getStayOwnerAnswer } from '../../engine/stayAdapter';
import { useSavedStore } from '../../state/savedStore';
import SavvyBadge from '../savvy/SavvyBadge';
import { StayHeader } from './stay/StayHeader';
import { WalkingDistanceSection } from './stay/WalkingDistanceSection';
import { TraditionalSpacesSection } from './stay/TraditionalSpacesSection';
import { RoomDetailsSection } from './stay/RoomDetailsSection';
import { AmenitiesSection } from './stay/AmenitiesSection';
import { PoliciesSection } from './stay/PoliciesSection';
import { StayFAQSection } from './stay/StayFAQSection';
import { LocationBottomBar } from './stay/LocationBottomBar';

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
  const rating = item?.googleRating || item?.rating;
  const reviewCount = item?.googleReviewCount || item?.reviewCount;
  const idString = String(item?.id || '');
  const bookmarked = isBookmarked(idString);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.3 }}
      className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8"
    >
      {/* Compact top bar: back + bookmark */}
      <div className="mb-5 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-500 shadow-sm border border-stone-100 transition-all hover:text-stone-900 cursor-pointer active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="flex items-center gap-2">
          <SavvyBadge placeId={idString} />
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
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm border border-stone-100 transition-all cursor-pointer active:scale-95"
          >
            <Heart
              className={cn('w-4 h-4', bookmarked ? 'fill-red-500 text-red-500' : 'text-stone-400')}
            />
          </button>
        </div>
      </div>

      {/* 1. FIXED: Hero photo, type badge, name, location, directions */}
      <StayHeader stay={stay} />

      {/* Price & booking bar (compact, single row) */}
      <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-[#e8dfcf] bg-[#fdfbf7] p-5 shadow-xs sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#7e6f5e]">Per night</span>
            <span className="font-serif text-2xl font-bold text-[#1c1917]">{price} MAD</span>
          </div>
          <span className="rounded-full bg-stone-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-600">
            {LIFESTYLE_LABEL[lifestyle] || lifestyle}
          </span>
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
              <span className="text-sm font-bold text-stone-700">{Number(rating).toFixed(1)}</span>
              {reviewCount ? <span className="text-xs text-stone-400">({reviewCount})</span> : null}
            </div>
          )}
        </div>
        {item?.googleMapsUrl && (
          <a
            href={item.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#dca448] px-7 py-3 text-sm font-semibold text-[#221c15] shadow-sm transition-all hover:bg-[#cf973b] cursor-pointer active:scale-98"
          >
            Check availability
          </a>
        )}
      </div>

      {/* 2. Walking distance radar map + what's nearby (the minimap) */}
      {stay.visibility.show_walking_distance !== false && (
        <WalkingDistanceSection propertyName={stay.name} nearbyPlaces={stay.walking_distance} />
      )}

      {/* 3. Traditional spaces / property features */}
      {stay.visibility.show_traditional_spaces !== false && (
        <TraditionalSpacesSection spaces={stay.traditional_spaces} />
      )}

      {/* 4. Room configuration */}
      {stay.visibility.show_room_details !== false && (
        <RoomDetailsSection room={stay.room_details} />
      )}

      {/* 5. Comfort & amenities */}
      {stay.visibility.show_comfort_amenities !== false && (
        <AmenitiesSection amenities={stay.amenities} visibility={stay.visibility} />
      )}

      {/* 6. Policies & payments */}
      {stay.visibility.show_policies !== false && <PoliciesSection policies={stay.policies} />}

      {/* 7. Frequently Asked Questions (FAQ) */}
      <StayFAQSection propertyName={stay.name} ownerAnswer={getStayOwnerAnswer(item)} />

      {/* 8. Exact location bottom bar */}
      {stay.visibility.show_exact_location !== false && (
        <LocationBottomBar location={stay.location} propertyName={stay.name} />
      )}
    </motion.div>
  );
}
