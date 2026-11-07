/**
 * NearbyShops.tsx
 *
 * Shows nearby shops and landmarks for the current shop detail view.
 * Data + distance come from the canonical shop module backend service
 * (single source of truth) — real spatial search by GPS coordinates.
 *
 * Shows max 3 results (anti-overload pattern).
 */

import { useMemo } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Star, ArrowRight, ShoppingBag } from 'lucide-react';
import { getShopById, getShopsNearby } from '../../shop';
import { useNavigate } from 'react-router-dom';
import { useExploreStore } from '../../state/exploreStore';
import { getListingUrl } from '../../listings/placeRoutes';

interface NearbyShopsProps {
  currentShopId: string;
  city: string;
  nearbyLandmarks?: string[];
}

export default function NearbyShops({
  currentShopId,
  city,
  nearbyLandmarks = [],
}: NearbyShopsProps) {
  const navigate = useNavigate();
  const { setActiveItem, setView } = useExploreStore();

  // Locate the current shop via the backend service
  const currentShop = useMemo(
    () => getShopById(currentShopId),
    [currentShopId],
  );

  // Find nearby shops via the backend spatial search (within ~2km, exclude self, max 3)
  const nearby = useMemo(() => {
    if (!currentShop?.coordinates) {
      return [];
    }

    const { lat, lng } = currentShop.coordinates;

    return getShopsNearby(lat, lng, 2)
      .filter((s) => s.id !== currentShopId)
      .slice(0, 3);
  }, [currentShop, currentShopId]);

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
        {nearby.map(({ distanceKm, ...shop }) => (
          <motion.button
            key={shop.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => {
              // Open the nearby shop on its own name-based page
              const url = getListingUrl(shop);
              if (url) {
                navigate(url);
                return;
              }
              setActiveItem(shop.id);
              setView('detail');
              navigate(`/finder/${shop.city || city}/${shop.id}`);
            }}
            className="w-full text-left flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-stone-100 transition-colors group cursor-pointer hover:border-[#C9A84C]/30"
          >
            {/* No-Image Tile — warm gradient with shop icon */}
            <div className="w-14 h-14 rounded-xl shrink-0 relative overflow-hidden
              bg-gradient-to-br from-[#F5EDE4] to-[#EDE0D0] border border-[#E2D4C2]
              flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#C9A84C_0.5px,transparent_0.5px)] [background-size:12px_12px] opacity-10 pointer-events-none" />
              <ShoppingBag className="w-5 h-5 text-[#C2613C] relative z-10" />
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
