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

/**
 * Safely extract valid { lat, lng } coordinates from any listing schema
 * (coordinates, exactAddressAndCoordinates, ui.*, or flat lat/lng/lon).
 */
export function extractListingCoords(item: any): LatLng | null {
  if (!item) return null;
  const candidates = [
    item.coordinates,
    item.exactAddressAndCoordinates,
    item.ui?.coordinates,
    item.ui?.exactAddressAndCoordinates,
    item,
  ];
  for (const c of candidates) {
    if (!c) continue;
    const lat = c.lat ?? c.latitude;
    const lng = c.lng ?? c.lon ?? c.longitude;
    if (
      typeof lat === 'number' &&
      typeof lng === 'number' &&
      !Number.isNaN(lat) &&
      !Number.isNaN(lng) &&
      lat !== 0 &&
      lng !== 0
    ) {
      return { lat, lng };
    }
  }
  return null;
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


const WALK_THRESHOLD_M = 2500;
const DRIVE_METERS_PER_MINUTE = 550; // ~33 km/h urban + airport road average

/** Estimated driving time in minutes for a distance in meters. */
export function driveMinutes(meters: number): number {
  return Math.max(4, Math.round(meters / DRIVE_METERS_PER_MINUTE));
}

export function formatNearbyTravelLabel(place: Pick<NearbyPlace, 'walking_time_minutes' | 'travel_mode' | 'travel_time_minutes'>): string {
  const mins = place.travel_time_minutes ?? place.walking_time_minutes;
  const mode = place.travel_mode ?? (mins > 35 ? 'drive' : 'walk');
  return mode === 'drive' ? `${mins} min drive` : `${mins} min walk`;
}

/**
 * Compute nearby spots for a stay/eat place using real coordinates + the city spot
 * database. Spots within 2.5km are labeled as walking time; further spots & airports
 * are labeled as realistic drive times.
 */
export function computePoiNearbyPlaces(cityId: string, origin: LatLng, limit = 6): NearbyPlace[] {
  const pois = getCityPois(cityId);
  if (!pois.length) return [];

  const measuredWithDist = pois.map((poi) => {
    const distanceM = haversineM(origin, { lat: poi.lat, lng: poi.lng });
    const angle = ((bearingDeg(origin, { lat: poi.lat, lng: poi.lng }) % 360) + 360) % 360;
    const isDrive = distanceM > WALK_THRESHOLD_M || poi.category === 'Airport';
    const mins = isDrive ? driveMinutes(distanceM) : walkMinutes(distanceM);
    const maxRef = Math.max(1, ...pois.map((p) => haversineM(origin, { lat: p.lat, lng: p.lng })));
    return {
      distanceM,
      place: {
        id: poi.id,
        name: poi.name,
        category: poi.category,
        walking_time_minutes: mins,
        travel_mode: (isDrive ? 'drive' : 'walk') as 'walk' | 'drive',
        travel_time_minutes: mins,
        distance_km: Number((distanceM / 1000).toFixed(1)),
        icon: poi.icon,
        latitude: poi.lat,
        longitude: poi.lng,
        relative_angle: Math.round(angle),
        relative_distance: Number(clamp(distanceM / maxRef, 0.3, 0.95).toFixed(2)),
      } satisfies NearbyPlace,
    };
  });

  return measuredWithDist
    .sort((a, b) => a.distanceM - b.distanceM)
    .slice(0, limit)
    .map((m) => m.place);
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
 * Angles are spread deterministically around the circle so the map stays
 * stable and readable. Respects drive vs walk cues.
 */
export function buildNearbyFromNeighborhoodDistances(
  distances: Array<{
    id?: string;
    label?: string;
    name?: string;
    category?: NearbyPlace['category'] | string;
    distance?: string;
    distance_km?: number;
    time?: string;
    travel_time_minutes?: number;
    walking_time_minutes?: number;
    icon?: string;
    mode?: 'walk' | 'drive';
    travel_mode?: 'walk' | 'drive';
  }>
): NearbyPlace[] {
  if (!distances?.length) return [];

  const parsed = distances
    .map((d, i) => {
      const displayName = String(d.name || d.label || '').trim();
      if (!displayName) return null;
      const meters =
        typeof d.distance_km === 'number' && Number.isFinite(d.distance_km)
          ? d.distance_km * 1000
          : parseDistanceToMeters(d.distance);
      const timeLower = String(d.time || '').toLowerCase();
      const explicitMode = d.travel_mode || d.mode;
      const isDrive =
        explicitMode === 'drive' ||
        (explicitMode !== 'walk' &&
          (timeLower.includes('drive') ||
            timeLower.includes('car') ||
            timeLower.includes('taxi') ||
            (meters !== null && meters > WALK_THRESHOLD_M)));

      const explicitMins =
        typeof d.travel_time_minutes === 'number' && Number.isFinite(d.travel_time_minutes)
          ? d.travel_time_minutes
          : typeof d.walking_time_minutes === 'number' && Number.isFinite(d.walking_time_minutes)
            ? d.walking_time_minutes
            : parseTimeToMinutes(d.time);

      const minutes =
        explicitMins ??
        (() => {
          if (meters === null) return 5;
          return isDrive ? driveMinutes(meters) : walkMinutes(meters);
        })();

      return {
        id: d.id || `nearby-collected-${i}`,
        name: displayName,
        category: (d.category || 'Other') as NearbyPlace['category'],
        icon: d.icon,
        minutes: Math.round(minutes),
        mode: (isDrive ? 'drive' : 'walk') as 'walk' | 'drive',
        distanceKm:
          typeof d.distance_km === 'number' && Number.isFinite(d.distance_km)
            ? Number(d.distance_km.toFixed(1))
            : meters !== null
              ? Number((meters / 1000).toFixed(1))
              : undefined,
      };
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);

  if (!parsed.length) return [];
  const maxMinutes = Math.max(1, ...parsed.map((p) => p.minutes));

  return parsed.map((p, i) => ({
    id: p.id,
    name: p.name,
    category: p.category,
    walking_time_minutes: p.minutes,
    travel_mode: p.mode,
    travel_time_minutes: p.minutes,
    distance_km: p.distanceKm,
    icon: p.icon,
    relative_angle: Math.round((45 + (360 / parsed.length) * i) % 360),
    relative_distance: Number(clamp(0.35 + (p.minutes / maxMinutes) * 0.6, 0.3, 0.95).toFixed(2)),
  }));
}

/**
 * MAIN ENTRY — walking & local access spots for a stay or eat listing.
 *  1. Base layer: collected neighborhood/nearby distance data.
 *  2. Real GPS layer: when the listing has coordinates AND its city has verified
 *     spots, computed distance + direction entries are merged in.
 */
export function getWalkingDistancePlaces(listing: any): NearbyPlace[] {
  if (!listing) return [];

  const rawDistances =
    listing.nearbyDistances ||
    listing.ui?.nearbyDistances ||
    listing.neighborhoodDistances ||
    [];
  const collected = buildNearbyFromNeighborhoodDistances(rawDistances);
  const coords = extractListingCoords(listing);
  const citySpots = coords ? computePoiNearbyPlaces(String(listing.city), coords) : [];

  if (!citySpots.length) return collected;
  if (!collected.length) return citySpots;

  // Prefer curated entries first when explicit nearbyDistances exist, filling with unique GPS spots
  const collectedNames = new Set(collected.map((p) => p.name.toLowerCase()));
  const merged = [...collected, ...citySpots.filter((p) => !collectedNames.has(p.name.toLowerCase()))];
  return merged.slice(0, 6);
}

