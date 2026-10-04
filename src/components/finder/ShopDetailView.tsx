// src/components/finder/ShopDetailView.tsx
// Rebuilt from the morocco-finder-stay-template (1) design — ShopTemplateView
// with its full section set, fed by the collected shop data via the adapter.
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star } from 'lucide-react';
import { adaptToTemplateShop, getShopCityName } from '../../engine/shopTemplateAdapter';
import { getShopById } from '../../shop';
import { ShopListing as LegacyShopListing } from '../../listings/types';
import { useExploreStore } from '../../state/exploreStore';
import { useSavedStore } from '../../state/savedStore';
import { useNavigate } from 'react-router-dom';
import SavvyBadge from '../savvy/SavvyBadge';
import { ShopTemplateView } from './shop-template/ShopTemplateView';

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.3 }}
      className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8"
    >
      {/* Compact top bar: back + savvy + bookmark */}
      <div className="mb-5 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#615241] shadow-sm border border-[#e5dcce] transition-all hover:text-[#1e1b18] cursor-pointer active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="flex items-center gap-2">
          <SavvyBadge placeId={idString} />
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
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm border border-[#e5dcce] transition-all cursor-pointer active:scale-95"
          >
            <span className={bookmarked ? 'text-red-600' : 'text-[#615241]'}>
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill={bookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Trust strip: rating + verified + local favorite (one clean row) */}
      {(rating || isVerified || isLocalFavorite) && (
        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          {rating && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#e5dcce] px-3.5 py-1.5 text-xs font-bold text-[#1c1917]">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              {rating}
              <span className="text-[10px] text-[#A09880] font-medium">({reviewCount || 0} reviews)</span>
            </span>
          )}
          {isVerified && (
            <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-3.5 py-1.5 text-xs font-bold">
              Physically verified
            </span>
          )}
          {isLocalFavorite && (
            <span className="inline-flex items-center rounded-full bg-[#F4EDE4] text-[#8C6218] border border-[#e5dcce] px-3.5 py-1.5 text-xs font-bold">
              Local favorite
            </span>
          )}
        </div>
      )}

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
          onClick={() => {
            if (shop.directions_url) {
              window.open(shop.directions_url, '_blank', 'noopener,noreferrer');
            }
          }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e5a84b] px-6 py-2.5 text-sm font-bold text-[#1c1917] shadow-2xs transition-all hover:bg-[#d99738] cursor-pointer active:scale-98 self-start sm:self-auto"
        >
          Open exact location
        </button>
      </div>
    </motion.div>
  );
}

