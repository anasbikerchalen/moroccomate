/**
 * PreQuizShortcutBar.tsx
 *
 * Top-5 Quick Choices bar above the category quiz (Step 1).
 * - Mini-quiz shortcuts: swap the quiz card into that choice's dedicated
 *   3-question mini-quiz (super fast, high relevance).
 * - Brand-locator shortcuts: the 2-choice engine — "Show closest branch to me"
 *   (REAL structured data first, stateless Google Maps lookup otherwise) or
 *   "Choose an area in this city" (touristic neighborhoods only).
 *
 * DATA INTEGRITY: brands that are not stored in the structured shop data never
 * generate fake listings — they resolve via a stateless Google Maps
 * point-of-interest lookup instead.
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Star, X, Zap, ExternalLink } from 'lucide-react';
import { cityMap } from '../../data/cities';
import { getAreasForTool } from '../../data/cityAreaMapping';
import { NON_TOURISTIC_AREAS } from '../../data/tourismAreas';
import type { PreQuizShortcut, ShortcutBrand } from '../../data/explore/preQuizShortcuts';

interface PreQuizShortcutBarProps {
  shortcuts: PreQuizShortcut[];
  cityId: string;
  cityListings: any[];
  onMiniQuizSelect: (shortcut: PreQuizShortcut) => void;
  onBrandLocate: (brand: ShortcutBrand, mode: 'closest' | 'area', area?: string) => void;
}

type ModalStep = 'brand' | 'location' | 'closest' | 'area';

// Haversine distance (km) between a [lat, lng] point and a listing's coordinates
const distanceKm = (a: [number, number], b: { lat: number; lng: number }): number => {
  const R = 6371;
  const dLat = ((b.lat - a[0]) * Math.PI) / 180;
  const dLng = ((b.lng - a[1]) * Math.PI) / 180;
  const lat1 = (a[0] * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

export default function PreQuizShortcutBar({
  shortcuts,
  cityId,
  cityListings,
  onMiniQuizSelect,
  onBrandLocate,
}: PreQuizShortcutBarProps) {
  const [modalShortcut, setModalShortcut] = useState<PreQuizShortcut | null>(null);
  const [modalStep, setModalStep] = useState<ModalStep>('brand');
  const [selectedBrand, setSelectedBrand] = useState<ShortcutBrand | null>(null);
  const [gpsCoords, setGpsCoords] = useState<[number, number] | null>(null);
  const [locating, setLocating] = useState(false);

  const cityName = useMemo(() => cityMap[cityId]?.name || cityId, [cityId]);
  const cityCenter = useMemo<[number, number] | null>(() => {
    const c = cityMap[cityId];
    return c && typeof c.lat === 'number' && typeof c.lon === 'number' ? [c.lat, c.lon] : null;
  }, [cityId]);

  // Real structured brand matches from the city's own listing data.
  // With coordinates → nearest first (real spatial search); otherwise → top rated.
  const getBrandMatches = (brand: ShortcutBrand, coords: [number, number] | null, limit = 3): any[] => {
    const matches = cityListings.filter(item => {
      const hay = [
        item?.name, item?.title, item?.description, item?.type, item?.category,
        ...(Array.isArray(item?.tags) ? item.tags : []),
      ].filter(Boolean).join(' ').toLowerCase();
      return brand.nameMatch.some(kw => hay.includes(kw.toLowerCase()));
    });
    if (coords) {
      const withDistance = matches
        .filter(i => i?.coordinates?.lat && i?.coordinates?.lng)
        .map(i => ({ ...i, distanceKm: distanceKm(coords, i.coordinates) }))
        .sort((a, b) => a.distanceKm - b.distanceKm);
      const rest = matches
        .filter(i => !(i?.coordinates?.lat && i?.coordinates?.lng))
        .sort((a, b) => (Number(b?.googleRating) || 0) - (Number(a?.googleRating) || 0));
      return [...withDistance, ...rest].slice(0, limit);
    }
    return [...matches]
      .sort((a, b) => (Number(b?.googleRating) || 0) - (Number(a?.googleRating) || 0))
      .slice(0, limit);
  };

  // GPS with graceful fallback to the city center reference point
  const requestGps = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGpsCoords([pos.coords.latitude, pos.coords.longitude]);
        setLocating(false);
      },
      () => setLocating(false),
      { timeout: 8000, maximumAge: 300000 }
    );
  };

  // Stateless Google Maps point-of-interest lookup — only used when the brand
  // is not stored in the structured data (never generates fake listings)
  const mapsSearchUrl = (brand: ShortcutBrand, area?: string): string => {
    const query = area
      ? `${brand.mapsQuery} ${area} ${cityName}`
      : gpsCoords ? brand.mapsQuery : `${brand.mapsQuery} ${cityName}`;
    const coords = area ? cityCenter : (gpsCoords || cityCenter);
    const encodedQuery = encodeURIComponent(query);
    if (coords) {
      return `https://www.google.com/maps/search/${encodedQuery}/@${coords[0]},${coords[1]},13z`;
    }
    return `https://www.google.com/maps/search/${encodedQuery}`;
  };

  const openBrandModal = (shortcut: PreQuizShortcut) => {
    setModalShortcut(shortcut);
    const brands = shortcut.brands || [];
    setSelectedBrand(brands.length === 1 ? brands[0] : null);
    setModalStep(brands.length > 1 ? 'brand' : 'location');
  };

  const closeBrandModal = () => {
    setModalShortcut(null);
    setSelectedBrand(null);
    setModalStep('brand');
    setLocating(false);
  };

  const handleShowClosest = () => {
    if (!selectedBrand) return;
    requestGps();
    setModalStep('closest');
  };

  // "Choose an area": in-app results only when the brand has REAL matches in
  // that area — otherwise a stateless Google Maps lookup for that brand + area
  const handleAreaSelect = (area: string) => {
    if (!selectedBrand) return;
    const inArea = getBrandMatches(selectedBrand, null, Infinity).some(m => {
      const hood = String(m?.neighborhood || '').toLowerCase();
      return hood === area.toLowerCase() || hood.includes(area.toLowerCase());
    });
    if (inArea) {
      onBrandLocate(selectedBrand, 'area', area);
    } else {
      window.open(mapsSearchUrl(selectedBrand, area), '_blank', 'noopener');
    }
    closeBrandModal();
  };

  const activeCoords = gpsCoords || cityCenter;
  const closestMatches = selectedBrand ? getBrandMatches(selectedBrand, activeCoords) : [];

  // Touristic area chips (same real sources as the LocationPicker):
  // registry touristic areas + actual listing neighborhoods, non-touristic excluded
  const areaChips = useMemo(() => {
    const touristicAreaNames = getAreasForTool(cityId, 'touristic');
    const listingNeighborhoods = [...new Set(
      cityListings
        .map(item => item?.neighborhood)
        .filter((n: any): n is string => typeof n === 'string' && Boolean(n.trim()))
    )];
    const nonTouristic = new Set(
      NON_TOURISTIC_AREAS
        .filter(a => a && typeof a.areaVillage === 'string')
        .map(a => a.areaVillage.toLowerCase())
    );
    return [...new Set([...touristicAreaNames, ...listingNeighborhoods])]
      .filter((n: string) => Boolean(n.trim()) && !nonTouristic.has(n.toLowerCase()))
      .sort()
      .slice(0, 10);
  }, [cityId, cityListings]);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5 px-1">
        <Zap className="w-3.5 h-3.5 text-[#C9A84C]" />
        <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">
          In a hurry? Quick shortcuts
        </span>
      </div>

      {/* Top 5 Quick Choices pills */}
      <div className="flex gap-2.5 overflow-x-auto pb-1 -mx-1 px-1">
        {shortcuts.map(s => (
          <button
            key={s.id}
            onClick={() => (s.kind === 'brand-locator' ? openBrandModal(s) : onMiniQuizSelect(s))}
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-stone-200/80 shadow-xs hover:border-[#C86D51]/40 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span className="text-base leading-none">{s.icon}</span>
            <span className="text-xs font-bold text-stone-700 whitespace-nowrap">{s.label}</span>
          </button>
        ))}
      </div>

      {/* Brand Locator modal */}
      <AnimatePresence>
        {modalShortcut && (
          <motion.div
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBrandModal}
          >
            <motion.div
              className="bg-white rounded-[28px] max-w-md w-full p-6 border border-stone-200 shadow-xl max-h-[85vh] overflow-y-auto"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF3F0] flex items-center justify-center text-xl shrink-0">
                    {selectedBrand ? selectedBrand.icon : modalShortcut.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C9A84C]">
                      {modalStep === 'brand' ? 'Choose brand' : 'You selected'}
                    </div>
                    <h3 className="font-display font-bold text-lg text-stone-900 leading-tight truncate">
                      {selectedBrand ? selectedBrand.label : modalShortcut.label}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={closeBrandModal}
                  className="w-8 h-8 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center cursor-pointer transition-colors shrink-0"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Step 1: brand picker (multi-brand shortcuts) */}
              {modalStep === 'brand' && (
                <div className="space-y-2">
                  {(modalShortcut.brands || []).map(b => (
                    <button
                      key={b.id}
                      onClick={() => { setSelectedBrand(b); setModalStep('location'); }}
                      className="w-full text-left flex items-center gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-[#FAF3F0] hover:border-[#C86D51]/30 transition-colors cursor-pointer"
                    >
                      <span className="text-lg">{b.icon}</span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-bold text-stone-900">{b.label}</span>
                        <span className="block text-[11px] text-stone-500 leading-snug">{b.description}</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: location preference (the 2-choice engine) */}
              {modalStep === 'location' && selectedBrand && (
                <div className="space-y-2.5">
                  <p className="text-xs text-stone-500 mb-3">How do you want to find it?</p>
                  <button
                    onClick={handleShowClosest}
                    className="w-full text-left flex items-center gap-3 p-4 rounded-2xl bg-[#FAF3F0] border-2 border-[#C86D51]/30 hover:border-[#C86D51] transition-all cursor-pointer"
                  >
                    <MapPin className="w-5 h-5 text-[#C86D51] shrink-0" />
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-bold text-stone-900">Show closest one to me right now</span>
                      <span className="block text-[11px] text-stone-500">Uses your location — instant directions</span>
                    </span>
                  </button>
                  <button
                    onClick={() => setModalStep('area')}
                    className="w-full text-left flex items-center gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-[#C86D51]/40 transition-all cursor-pointer"
                  >
                    <Navigation className="w-5 h-5 text-stone-500 shrink-0" />
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-bold text-stone-900">Choose an area in this city</span>
                      <span className="block text-[11px] text-stone-500">Neighborhoods like Medina, Gueliz, Hivernage…</span>
                    </span>
                  </button>
                </div>
              )}

              {/* Step: closest results — REAL structured data first */}
              {modalStep === 'closest' && selectedBrand && (
                <div className="space-y-3">
                  {locating ? (
                    <div className="py-6 text-center text-sm text-stone-400 italic font-serif">
                      Finding your location…
                    </div>
                  ) : closestMatches.length > 0 ? (
                    <>
                      <div className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                        Closest to you
                      </div>
                      {closestMatches.map(m => (
                        <a
                          key={m.id}
                          href={m.googleMapsUrl || mapsSearchUrl(selectedBrand)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-stone-100 transition-colors"
                        >
                          <span className="flex-1 min-w-0">
                            <span className="block text-sm font-bold text-stone-900 truncate">{m.name}</span>
                            <span className="flex items-center gap-2 text-[11px] text-stone-500">
                              <span className="truncate">{m.neighborhood}</span>
                              {m.googleRating && (
                                <span className="flex items-center gap-0.5 shrink-0">
                                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                  {m.googleRating}
                                </span>
                              )}
                            </span>
                          </span>
                          {typeof m.distanceKm === 'number' && (
                            <span className="flex items-center gap-1 text-[10px] font-bold text-[#C86D51] shrink-0">
                              <Navigation className="w-3 h-3" />
                              {m.distanceKm < 1 ? `${Math.round(m.distanceKm * 1000)}m` : `${m.distanceKm.toFixed(1)} km`}
                            </span>
                          )}
                        </a>
                      ))}
                      <button
                        onClick={() => { onBrandLocate(selectedBrand, 'closest'); closeBrandModal(); }}
                        className="w-full py-3 rounded-full bg-[#C86D51] hover:bg-[#B55C41] text-white font-bold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        See all results <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="text-xs text-stone-500 leading-relaxed">
                        No {selectedBrand.label} branch in our verified data for {cityName} yet.
                        Open Google Maps to find the nearest one right now:
                      </p>
                      <a
                        href={mapsSearchUrl(selectedBrand)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-full bg-[#C86D51] hover:bg-[#B55C41] text-white font-bold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        <MapPin className="w-4 h-4" /> Find nearest on Google Maps
                      </a>
                    </>
                  )}
                </div>
              )}

              {/* Step: area chips (touristic areas only) */}
              {modalStep === 'area' && selectedBrand && (
                <div className="space-y-3">
                  <p className="text-xs text-stone-500">Which area of {cityName}?</p>
                  <div className="flex flex-wrap gap-2">
                    {areaChips.map(area => (
                      <button
                        key={area}
                        onClick={() => handleAreaSelect(area)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200/80 text-xs font-bold text-stone-700 hover:bg-[#FAF3F0] hover:border-[#C86D51]/40 hover:text-[#C86D51] transition-colors cursor-pointer"
                      >
                        <MapPin className="w-3 h-3" /> {area}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}