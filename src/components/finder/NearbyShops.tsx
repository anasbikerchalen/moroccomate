/**
 * NearbyShops.tsx
 *
 * Shows nearby shops and landmarks for the current shop detail view.
 * Uses the current shop's coordinates to find neighboring listings.
 *
 * Shows max 3 results (anti-overload pattern).
 */

import { useMemo } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Star, ArrowRight } from 'lucide-react';
import { ShopListing } from '../../listings/types';
import { getListings } from '../../listings';
import { useNavigate } from 'react-router-dom';
import { useExploreStore } from '../../state/exploreStore';

interface NearbyShopsProps {
  currentShopId: string;
  city: string;
  nearbyLandmarks?: string[];
  allShops?: ShopListing[]; // Optional: inject from parent if available
}

/**
 * Haversine distance in km between two lat/lng points.
 */
function haversineKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function NearbyShops({
  currentShopId,
  city,
  nearbyLandmarks = [],
  allShops = [],
}: NearbyShopsProps) {
  const navigate = useNavigate();
  const { setActiveItem, setView } = useExploreStore();

  // Resolve shops
  const resolvedShops = useMemo(() => {
    if (allShops && allShops.length > 0) {
      return allShops;
    }
    return (getListings(city, 'shopping') || []) as ShopListing[];
  }, [allShops, city]);

  // Locate the current shop in the list
  const currentShop = useMemo(
    () => resolvedShops.find((s) => s.id === currentShopId),
    [currentShopId, resolvedShops],
  );

  // Find nearby shops (within ~1km, exclude self, max 3)
  const nearby = useMemo(() => {
    if (!currentShop?.coordinates || resolvedShops.length === 0) {
      // Fallback: show whatever we have
      return [];
    }

    const { lat, lng } = currentShop.coordinates;

    const scored = resolvedShops
      .filter((s) => s.id !== currentShopId && s.coordinates)
      .map((s) => ({
        shop: s,
        distanceKm: haversineKm(lat, lng, s.coordinates!.lat, s.coordinates!.lng),
      }))
      .filter((s) => s.distanceKm < 2) // Within 2km
      .sort((a, b) => a.distanceKm - b.distanceKm)
      .slice(0, 3);

    return scored;
  }, [currentShop, currentShopId, resolvedShops]);

  // If no nearby shops found, show landmarks as context
  if (nearby.length === 0 && nearbyLandmarks.length === 0) {
    return null;
  }

  return (
    <section className="bg-white rounded-[40px] p-8 border border-stone-100 shadow-sm">
      <h2 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-6">
        {nearby.length > 0 ? 'Nearby Shops' : 'Nearby Landmarks'}
      </h2>

      <div className="space-y-3">
        {/* Nearby shops */}
        {nearby.map(({ shop, distanceKm }) => (
          <motion.button
            key={shop.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => {
              setActiveItem(shop.id);
              setView('detail');
              navigate(`/finder/${city}/${shop.id}`);
            }}
            className="w-full text-left flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-stone-100 transition-colors group cursor-pointer hover:border-[#C9A84C]/30"
          >
            {/* Thumbnail */}
            <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-stone-200">
              {shop.images?.[0] ? (
                <img
                  src={shop.images[0]}
                  alt={shop.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-stone-400" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-stone-900 truncate">{shop.name}</span>
                {shop.isVerified && (
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-black uppercase tracking-wider shrink-0">
                    V
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-stone-400">{shop.type.replace(/_/g, ' ')}</span>
                <span className="text-stone-200">·</span>
                <span className="flex items-center gap-1 text-xs text-stone-500">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  {shop.googleRating}
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-[10px] text-stone-400 font-medium">
                <Navigation className="w-3 h-3" />
                {distanceKm < 1
                  ? `${Math.round(distanceKm * 1000)}m`
                  : `${distanceKm.toFixed(1)} km`}
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-stone-500 transition-colors shrink-0" />
          </motion.button>
        ))}

        {/* Landmarks as fallback or supplement */}
        {nearbyLandmarks.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-stone-50">
            {nearbyLandmarks.map((lm, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C9A84C]/5 text-[#C9A84C] rounded-xl text-[10px] font-bold border border-[#C9A84C]/10"
              >
                <MapPin className="w-3 h-3" />
                {lm}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
