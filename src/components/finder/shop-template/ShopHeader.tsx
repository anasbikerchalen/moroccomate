import React, { useState } from 'react';
import { Heart, MapPin, Navigation, ExternalLink } from 'lucide-react';
import { ShopListing } from '../../../types/shop';

interface ShopHeaderProps {
  shop: ShopListing;
}

export const ShopHeader: React.FC<ShopHeaderProps> = ({ shop }) => {
  const [isSaved, setIsSaved] = useState(false);

  const photosUrl = shop.directions_url
    || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${shop.name} ${shop.city} Morocco`)}`;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
      {/* LEFT COLUMN: No-Image Hero Panel with Badge & Google Maps photos link */}
      <div className="lg:col-span-7">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl
          bg-gradient-to-br from-[#2e4c34] to-[#1a301f] shadow-sm border border-[#e5dcce]
          flex flex-col items-center justify-center gap-4">
          {/* Decorative pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(229,168,75,0.12)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Shop Type Badge (Top Left) - e.g. "Artisan Shop" */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center rounded-full bg-[#2e4c34] px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-md">
              {shop.shop_type.name}
            </span>
          </div>

          {/* Center CTA */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Photos</p>
            <a
              href={photosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                bg-white/90 hover:bg-white text-[#1c1917] text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#3b3226]" />
              View photos on Google Maps
              <ExternalLink className="w-3.5 h-3.5 opacity-50" />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Shop Identity, Location, Directions & Story */}
      <div className="lg:col-span-5 flex flex-col justify-between py-1">
        <div>
          {/* Top Row: Favorite button */}
          <div className="flex items-center justify-end mb-2">
            <button
              type="button"
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                isSaved
                  ? 'text-red-600 bg-red-50 hover:bg-red-100'
                  : 'text-[#615241] hover:bg-[#efe6d8] hover:text-[#1e1b18]'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save shop'}
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Shop Name Title */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c1917] leading-tight">
            {shop.name}
          </h1>

          {/* Shop Type Subtitle */}
          <p className="mt-1 text-base text-[#6b5c4d] font-medium">
            {shop.shop_type.name}
          </p>

          {/* Location details */}
          <div className="mt-4 flex items-center gap-2 text-sm text-[#483d31]">
            <MapPin className="w-4 h-4 text-[#b45309] shrink-0" />
            <span className="font-medium">
              {shop.city} · {shop.neighborhood}
            </span>
          </div>

          {/* Get Directions Action Button */}
          <div className="mt-6">
            <a
              href={shop.directions_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#e5a84b] px-6 py-3 text-sm font-bold text-[#1c1917] shadow-xs transition-all hover:bg-[#d99738] active:scale-98 cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#1c1917]" />
              <span>Get directions</span>
            </a>
          </div>

          {/* Short Description */}
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#514538]">
            {shop.short_description}
          </p>
        </div>
      </div>
    </section>
  );
};
