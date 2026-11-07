/**
 * PROXIMITY ENGINE — Distance + Direction calculator (Finder website)
 * -------------------------------------------------------------------
 * Pure math, no AI. Takes a stay's coordinates and the city spot database
 * (or the collected neighborhood distance data) and computes, for each spot:
 *  - Distance in meters (haversine, straight line)
 *  - Direction as a bearing number (0–360°, 0 = North) + human label
 *    (North / Northeast / East / Southeast / Southwest / West / Northwest)
 *  - Walking time (~80m per minute) or taxi/drive time for far spots
 *  - Radar position: relative_angle + relative_distance for the map graph
 *
 * Priority:
 *  1. Real GPS math — when the stay has coordinates AND the city has spots.
 *  2. Collected neighborhood distance data (real data, kept as-is).
 */
import type { NearbyPlace } from '../types/stay';
import { getCityPois } from '../data/poi';

const EARTH_RADIUS_M = 6371000;
const WALK_METERS_PER_MINUTE = 80; // ~4.8 km/h average tourist walking pace

export interface LatLng {
  lat: number;
  lng: number;
}

/** Distance between two coordinates in meters (haversine). */
export function haversineM(a: LatLng, b: LatLng): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return 2 * EARTH_RADIUS_M * Math.asin(Math.min(1, Math.sqrt(h)));
}

/** Bearing from A to B in degrees (0–360, 0 = North, 90 = East). */
export function bearingDeg(a: LatLng, b: LatLng): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const dLng = toRad(b.lng - a.lng);
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  return (Math.atan2(y, x) * 180) / Math.PI;
}

/** Human-readable direction label from a bearing number. */
export function directionFromBearing(deg: number): string {
  const dirs = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
  const normalized = ((deg % 360) + 360) % 360;
  return dirs[Math.round(normalized / 45) % 8];
}


/**
 * Compute nearby spots for a stay using real coordinates + the city spot
 * database. Returns the closest `limit` tourist-relevant spots sorted by
 * walking time, each with bearing, direction label and radar position.
 */
export function computePoiNearbyPlaces(cityId: string, origin: LatLng, limit = 6): NearbyPlace[] {
  const pois = getCityPois(cityId);
  if (!pois.length) return [];

  const measured = pois.map((poi, i) => {
    const distanceM = haversineM(origin, { lat: poi.lat, lng: poi.lng });
    const angle = ((bearingDeg(origin, { lat: poi.lat, lng: poi.lng }) % 360) + 360) % 360;
    const maxRef = Math.max(1, ...pois.map((p) => haversineM(origin, { lat: p.lat, lng: p.lng })));
    return {
      id: poi.id,
      name: poi.name,
      category: poi.category,
      walking_time_minutes: walkMinutes(distanceM),
      icon: poi.icon,
      latitude: poi.lat,
      longitude: poi.lng,
      relative_angle: Math.round(angle),
      relative_distance: Number(clamp(distanceM / maxRef, 0.3, 0.95).toFixed(2))
    };
  });

  return measured
    .sort((a, b) => a.walking_time_minutes - b.walking_time_minutes)
    .slice(0, limit);
}

/** Parse a collected distance string ('500m', '7km', 'Direct') to meters. */
export function parseDistanceToMeters(distance?: string): number | null {
  if (!distance) return null;
  const d = distance.toLowerCase().trim();
  if (d === 'direct' || d === 'central' || d === 'beachfront') return 0;
  const km = d.match(/([\d.]+)\s*km/);
  if (km) return parseFloat(km[1]) * 1000;
  const m = d.match(/([\d.]+)\s*m/);
  if (m) return parseFloat(m[1]);
  return null;
}

/** Parse a collected time string ('5 min walk', '12 min drive', '0 min') to minutes. */
export function parseTimeToMinutes(time?: string): number | null {
  if (!time) return null;
  const t = time.toLowerCase();
  if (t.includes('direct')) return 0;
  const min = t.match(/([\d.]+)\s*min/);
  if (min) return parseFloat(min[1]);
  const hour = t.match(/([\d.]+)\s*h/);
  if (hour) return parseFloat(hour[1]) * 60;
  return null;
}

/** Estimated walking time in minutes for a distance in meters. */
export function walkMinutes(meters: number): number {
  return Math.max(1, Math.round(meters / WALK_METERS_PER_MINUTE));
}

/** Clamp a value into the radar range used by the map graph. */
function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Convert the collected neighborhood distance data into radar-ready spots.
 * Angles are spread deterministically around the circle (sorted by walking
 * time) so the map stays stable and readable. No invented data.
 */
export function buildNearbyFromNeighborhoodDistances(
  distances: { label: string; distance: string; time?: string; icon?: string }[]
): NearbyPlace[] {
  if (!distances?.length) return [];

  const parsed = distances.map((d, i) => {
    const minutes =
      parseTimeToMinutes(d.time) ??
      (() => {
        const meters = parseDistanceToMeters(d.distance);
        return meters === null ? 5 : walkMinutes(meters);
      })();
    return { ...d, minutes, _order: i };
  });

  const maxMinutes = Math.max(1, ...parsed.map((p) => p.minutes));

  return parsed.map((p, i) => ({
    id: `nearby-collected-${p._order}`,
    name: p.label,
    category: 'Other' as const,
    walking_time_minutes: Math.round(p.minutes),
    icon: p.icon,
    // Even spread around the circle, rotated so the closest spot sits top-right
    relative_angle: Math.round((45 + (360 / parsed.length) * i) % 360),
    relative_distance: Number(clamp(0.35 + (p.minutes / maxMinutes) * 0.6, 0.3, 0.95).toFixed(2))
  }));
}

/**
 * MAIN ENTRY — walking-distance spots for a stay listing.
 *  1. Base layer: collected neighborhood distance data (all cities, all stays).
 *  2. Real GPS layer: when the stay has coordinates AND its city has verified
 *     spots, computed distance + direction entries are merged in (and override
 *     collected entries with the same name).
 */
export function getWalkingDistancePlaces(listing: any): NearbyPlace[] {
  if (!listing) return [];

  const collected = buildNearbyFromNeighborhoodDistances(listing.neighborhoodDistances || []);
  const hasCoords =
    listing.coordinates &&
    typeof listing.coordinates.lat === 'number' &&
    typeof listing.coordinates.lng === 'number';
  const citySpots = hasCoords ? computePoiNearbyPlaces(String(listing.city), listing.coordinates) : [];

  if (!citySpots.length) return collected;

  // Merge: real computed spots first, then collected entries not duplicated
  const computedNames = new Set(citySpots.map((p) => p.name.toLowerCase()));
  const merged = [...citySpots, ...collected.filter((p) => !computedNames.has(p.name.toLowerCase()))];
  return merged.slice(0, 8);
}

