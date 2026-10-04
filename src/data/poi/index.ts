/**
 * CITY POINTS OF INTEREST — Master Spot Database (Finder website)
 * ---------------------------------------------------------------
 * Real, web-verified coordinates (Wikipedia / GeoHack, verified via web search).
 * These are the tourist-relevant fixed spots (squares, souks, train stations,
 * landmarks) used by the proximity engine to compute distance + direction
 * (bearing) for the stay walking-distance radar map.
 *
 * DATA INTEGRITY RULE: Only spots with verified coordinates are stored here.
 * Never add generated/hallucinated places. This data feeds the owner's
 * future ML recommendation models.
 */

export type PoiCategory =
  | 'Landmark'
  | 'Souk / Market'
  | 'Beach'
  | 'Square'
  | 'Restaurant Area'
  | 'Train Station'
  | 'Bus Station'
  | 'Taxi'
  | 'Airport'
  | 'Marina'
  | 'Nature'
  | 'Museum'
  | 'Attraction'
  | 'Activity'
  | 'Village'
  | 'Other';

export interface CityPoi {
  id: string;
  name: string;
  category: PoiCategory;
  lat: number;
  lng: number;
  /** Icon identifier from the icon library (StayIcon resolver) */
  icon?: string;
}

/**
 * Verified spots per city.
 * Sources (verified via web search):
 * - Wikipedia coordinate metadata for stations, squares, landmarks, airports.
 */
export const CITY_POIS: Record<string, CityPoi[]> = {
  marrakech: [
    { id: 'rak-jemaa-el-fna', name: 'Jemaa el-Fna', category: 'Square', lat: 31.62583, lng: -7.98944, icon: 'square' },
    { id: 'rak-koutoubia', name: 'Koutoubia Mosque', category: 'Landmark', lat: 31.624124, lng: -7.993541, icon: 'minaret' },
    { id: 'rak-bahia', name: 'Bahia Palace', category: 'Landmark', lat: 31.6215917, lng: -7.9822306, icon: 'landmark' },
    { id: 'rak-majorelle', name: 'Majorelle Garden', category: 'Museum', lat: 31.64278, lng: -8.00306, icon: 'garden' },
    { id: 'rak-train', name: 'Train Station', category: 'Train Station', lat: 31.63111, lng: -8.01722, icon: 'train' }
  ],
  fes: [
    { id: 'fes-train', name: 'Train Station', category: 'Train Station', lat: 34.047964, lng: -5.001507, icon: 'train' },
    { id: 'fes-bab-boujeloud', name: 'Bab Bou Jeloud', category: 'Landmark', lat: 34.06167, lng: -4.98389, icon: 'landmark' },
    { id: 'fes-qarawiyyin', name: 'Al-Qarawiyyin', category: 'Landmark', lat: 34.06444, lng: -4.97333, icon: 'minaret' },
    { id: 'fes-chouara', name: 'Chouara Tannery', category: 'Attraction', lat: 34.0660889, lng: -4.9709778, icon: 'souk' }
  ],
  casablanca: [
    { id: 'cas-voyageurs', name: 'Casa-Voyageurs Station', category: 'Train Station', lat: 33.589556, lng: -7.59083, icon: 'train' },
    { id: 'cas-port', name: 'Casa-Port Station', category: 'Train Station', lat: 33.599181, lng: -7.611875, icon: 'train' },
    { id: 'cas-hassan2', name: 'Hassan II Mosque', category: 'Landmark', lat: 33.6085, lng: -7.6327, icon: 'minaret' }
  ],
  chefchaouen: [
    { id: 'chef-medina', name: 'Chefchaouen Medina', category: 'Landmark', lat: 35.17139, lng: -5.26972, icon: 'landmark' }
  ],
  essaouira: [
    { id: 'ess-medina', name: 'Essaouira Medina', category: 'Landmark', lat: 31.5144, lng: -9.7689, icon: 'landmark' },
    { id: 'ess-airport', name: 'Essaouira Airport', category: 'Airport', lat: 31.3975, lng: -9.68167, icon: 'plane' }
  ],
  tangier: [
    { id: 'tng-train', name: 'Tanger Ville Station', category: 'Train Station', lat: 35.7716073, lng: -5.7862006, icon: 'train' }
  ],
  agadir: [
    { id: 'aga-center', name: 'Agadir City Center', category: 'Landmark', lat: 30.42139, lng: -9.58306, icon: 'landmark' },
    { id: 'aga-bay', name: 'Agadir Bay & Beachfront', category: 'Beach', lat: 30.4333, lng: -9.6, icon: 'beach' },
    { id: 'aga-kasbah', name: 'Agadir Oufla Kasbah', category: 'Landmark', lat: 30.43028, lng: -9.62472, icon: 'landmark' },
    { id: 'aga-airport', name: 'Agadir-Al Massira Airport', category: 'Airport', lat: 30.325, lng: -9.413056, icon: 'plane' }
  ],
  rabat: [
    { id: 'rba-hassan-tower', name: 'Hassan Tower', category: 'Landmark', lat: 34.0241611, lng: -6.822825, icon: 'minaret' },
    { id: 'rba-udayas', name: 'Kasbah of the Udayas', category: 'Landmark', lat: 34.03056, lng: -6.83556, icon: 'landmark' }
  ]
};

/** Get all verified spots for a city. Returns [] when the city has none yet. */
export function getCityPois(cityId: string): CityPoi[] {
  return CITY_POIS[cityId] || [];
}
