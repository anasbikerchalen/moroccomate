import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const orgPath = path.resolve(__dirname, '../touristic_organization.md');
const orgContent = fs.readFileSync(orgPath, 'utf8');

export type CityTier = 'touristic' | 'mid' | 'low';
export type NeighborhoodTier = 'touristic' | 'mid' | 'low';

export interface CityTouristicProfile {
  id: string;
  name: string;
  tier: CityTier;
  touristicNeighborhoods: string[];
  midNeighborhoods: string[];
  lowNeighborhoods: string[];
}

const cityMapping: Record<string, string> = {
  'marrakech': 'Marrakech',
  'essaouira': 'Essaouira',
  'safi': 'Safi',
  'tahannaout': 'Tahannaout',
  'tanger': 'Tanger',
  'tangier': 'Tanger',
  'chefchaouen': 'Chefchaouen',
  'tetouan': 'Tétouan',
  'assilah': 'Assilah',
  'asilah': 'Assilah',
  'm’diq': 'M’diq',
  'mdiq': 'M’diq',
  'al hoceïma': 'Al Hoceïma',
  'al_hoceima': 'Al Hoceïma',
  'martil': 'Martil',
  'fnideq': 'Fnideq',
  'larache': 'Larache',
  'ouezzane': 'Ouezzane',
  'fes': 'Fès',
  'meknes': 'Meknès',
  'meknès': 'Meknès',
  'ifrane': 'Ifrane',
  'azrou': 'Azrou',
  'rabat': 'Rabat',
  'salé': 'Salé',
  'casablanca': 'Casablanca',
  'el jadida': 'El Jadida',
  'el_jadida': 'El Jadida',
  'agadir': 'Agadir',
  'taghazout': 'Taghazout',
  'taroudant': 'Taroudant',
  'tafraout': 'Tafraout',
  'tiznit': 'Tiznit',
  'ouarzazate': 'Ouarzazate',
  'zagora': 'Zagora',
  'dakhla': 'Dakhla',
  'saidia': 'Saïdia',
  'saïdia': 'Saïdia',
  'merzouga': 'Merzouga',
  'mhamid': 'M’hamid',
  'oualidia': 'Oualidia'
};

// We will generate the TypeScript registry code
const lines = orgContent.split('\n');
let currentCityTier: CityTier = 'touristic';
let currentCityName: string | null = null;
const profiles: Record<string, CityTouristicProfile> = {};

for (const line of lines) {
  if (line.includes('#### Touristic Cities')) {
    currentCityTier = 'touristic';
    continue;
  }
  if (line.includes('#### Mid-Touristic Cities')) {
    currentCityTier = 'mid';
    continue;
  }
  if (line.includes('#### Low-Touristic Cities')) {
    currentCityTier = 'low';
    continue;
  }

  const cityMatch = line.match(/^\*\s+\*\*\d+\.\d+\s+([^*]+)\*\*/);
  if (cityMatch) {
    currentCityName = cityMatch[1].trim();
    const idKey = currentCityName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
    
    profiles[currentCityName] = {
      id: idKey,
      name: currentCityName,
      tier: currentCityTier,
      touristicNeighborhoods: [],
      midNeighborhoods: [],
      lowNeighborhoods: []
    };
    continue;
  }

  if (currentCityName && profiles[currentCityName]) {
    const tourNeigh = line.match(/^\s+\*\s+\*\*\d+\.\d+\.\d+\s+Touristic Neighborhoods:\*\*\s*(.*)/i);
    if (tourNeigh) {
      const items = tourNeigh[1].split(',').map(s => s.replace(/\([^)]*\)/g, '').trim()).filter(Boolean);
      profiles[currentCityName].touristicNeighborhoods.push(...items);
    }
    const midNeigh = line.match(/^\s+\*\s+\*\*\d+\.\d+\.\d+\s+Mid-Touristic Neighborhoods:\*\*\s*(.*)/i);
    if (midNeigh) {
      const items = midNeigh[1].split(',').map(s => s.replace(/\([^)]*\)/g, '').trim()).filter(Boolean);
      profiles[currentCityName].midNeighborhoods.push(...items);
    }
    const lowNeigh = line.match(/^\s+\*\s+\*\*\d+\.\d+\.\d+\s+Low-Touristic Neighborhoods:\*\*\s*(.*)/i);
    if (lowNeigh) {
      const items = lowNeigh[1].split(',').map(s => s.replace(/\([^)]*\)/g, '').trim()).filter(Boolean);
      profiles[currentCityName].lowNeighborhoods.push(...items);
    }
  }
}

// Generate src/data/touristicHierarchy.ts
const tsOutput = `/**
 * AUTO-GENERATED FROM touristic_organization.md
 * Master City & Neighborhood Tiering Registry
 */

export type CityTier = 'touristic' | 'mid' | 'low';
export type NeighborhoodTier = 'touristic' | 'mid' | 'low';

export interface CityTouristicProfile {
  id?: string;
  name: string;
  tier: CityTier;
  touristicNeighborhoods: string[];
  midNeighborhoods: string[];
  lowNeighborhoods: string[];
}

export const TOURISTIC_PROFILES: Record<string, CityTouristicProfile> = ${JSON.stringify(profiles, null, 2)};

export const WEBSITE_CITY_TO_PROFILE_KEY: Record<string, string> = {
  marrakech: 'Marrakech',
  fes: 'Fès',
  agadir: 'Agadir',
  chefchaouen: 'Chefchaouen',
  essaouira: 'Essaouira',
  casablanca: 'Casablanca',
  tangier: 'Tanger',
  rabat: 'Rabat',
  meknes: 'Meknès',
  ouarzazate: 'Ouarzazate',
  taghazout: 'Taghazout',
  dakhla: 'Dakhla',
  al_hoceima: 'Al Hoceïma',
  asilah: 'Assilah',
  el_jadida: 'El Jadida',
  saidia: 'Saïdia',
  tetouan: 'Tétouan',
  tetouan_martil: 'Tétouan',
  taroudant: 'Taroudant',
  taroudant_tafraoute: 'Taroudant',
  ifrane: 'Ifrane',
  ifrane_azrou: 'Ifrane',
  zagora: 'Zagora',
  oualidia: 'Oualidia',
  merzouga: 'Merzouga',
  mhamid: 'M’hamid',
  safi: 'Safi',
  tiznit: 'Tiznit'
};

/** Get the profile for a given website cityId */
export function getCityProfile(cityId: string): CityTouristicProfile | null {
  const norm = String(cityId || '').toLowerCase().trim();
  const profileKey = WEBSITE_CITY_TO_PROFILE_KEY[norm];
  if (profileKey && TOURISTIC_PROFILES[profileKey]) {
    return TOURISTIC_PROFILES[profileKey];
  }
  return null;
}

/** Check if a city is Touristic or Mid-Touristic (exclude Low) */
export function isCityTouristicOrMid(cityId: string): boolean {
  const profile = getCityProfile(cityId);
  if (!profile) return true; // keep if undefined to prevent breaking
  return profile.tier === 'touristic' || profile.tier === 'mid';
}

/** Check if a neighborhood is allowed (Touristic or Mid-Touristic, NEVER Low) */
export function isNeighborhoodAllowed(cityId: string, neighborhoodName: string): boolean {
  const profile = getCityProfile(cityId);
  if (!profile) return true;
  const n = neighborhoodName.toLowerCase().trim();
  const isLow = profile.lowNeighborhoods.some(item => item.toLowerCase().trim() === n);
  if (isLow) return false;
  return true;
}
`;

const outputPath = path.resolve(__dirname, '../src/data/touristicHierarchy.ts');
fs.writeFileSync(outputPath, tsOutput, 'utf8');
console.log('Successfully generated src/data/touristicHierarchy.ts');
