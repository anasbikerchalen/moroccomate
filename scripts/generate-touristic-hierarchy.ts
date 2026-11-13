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
  num: string;
  region: string;
  tier: CityTier;
  touristicNeighborhoods: string[];
  midNeighborhoods: string[];
  lowNeighborhoods: string[];
  neighborhoods: string[];
}

export interface RegionGroup {
  name: string;
  cities: CityTouristicProfile[];
}

// Known listing database registry key mappings
const LISTING_KEY_MAP: Record<string, string> = {
  tanger: 'tangier',
  assilah: 'asilah',
  tetouan: 'tetouan_martil',
  martil: 'tetouan_martil',
  m_diq: 'tetouan_martil',
  fnideq: 'tetouan_martil',
  taroudant: 'taroudant_tafraoute',
  tafraout: 'taroudant_tafraoute',
  ifrane: 'ifrane_azrou',
  azrou: 'ifrane_azrou',
  marrakech: 'marrakech',
  essaouira: 'essaouira',
  safi: 'safi',
  chefchaouen: 'chefchaouen',
  al_hoceima: 'al_hoceima',
  fes: 'fes',
  meknes: 'meknes',
  agadir: 'agadir',
  casablanca: 'casablanca',
  el_jadida: 'el_jadida',
  rabat: 'rabat',
  ouarzazate: 'ouarzazate',
  dakhla: 'dakhla',
  saidia: 'saidia',
  tiznit: 'agadir'
};

const lines = orgContent.split('\n');
let currentRegion = '';
let currentCityTier: CityTier = 'touristic';
let currentCity: CityTouristicProfile | null = null;
const profiles: Record<string, CityTouristicProfile> = {};
const regionsMap: Record<string, CityTouristicProfile[]> = {};

function parseNeighborhoods(raw: string): string[] {
  // Strip nested parentheses details like "(Pottery Quarter)" or "(1-3)" or "(Derb Jdid, Kasbah)"
  // First replace commas inside parens so they don't get split
  const masked = raw.replace(/\([^)]*\)/g, (match) => match.replace(/,/g, ';'));
  return masked
    .split(',')
    .map((s) => s.replace(/\([^)]*\)/g, '').trim())
    .filter(Boolean);
}

for (const line of lines) {
  const regMatch = line.match(/^###\s+\d+\.\s+([^\n]+)/);
  if (regMatch) {
    currentRegion = regMatch[1].trim();
    if (!regionsMap[currentRegion]) {
      regionsMap[currentRegion] = [];
    }
    continue;
  }

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

  const cityMatch = line.match(/^\*\s+\*\*(\d+\.\d+)\s+([^*]+)\*\*/);
  if (cityMatch) {
    const num = cityMatch[1].trim();
    const name = cityMatch[2].trim();
    const idKey = name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');

    currentCity = {
      id: idKey,
      num,
      name,
      region: currentRegion,
      tier: currentCityTier,
      touristicNeighborhoods: [],
      midNeighborhoods: [],
      lowNeighborhoods: [],
      neighborhoods: []
    };

    profiles[name] = currentCity;
    if (currentRegion) {
      regionsMap[currentRegion] = regionsMap[currentRegion] || [];
      regionsMap[currentRegion].push(currentCity);
    }
    continue;
  }

  if (currentCity) {
    if (line.includes('Low-Touristic Neighborhoods:')) {
      const m = line.match(/Low-Touristic Neighborhoods:\*\*\s*(.*)/i);
      if (m) currentCity.lowNeighborhoods.push(...parseNeighborhoods(m[1]));
    } else if (line.includes('Mid-Touristic Neighborhoods:')) {
      const m = line.match(/Mid-Touristic Neighborhoods:\*\*\s*(.*)/i);
      if (m) currentCity.midNeighborhoods.push(...parseNeighborhoods(m[1]));
    } else if (line.includes('Touristic Neighborhoods:')) {
      const m = line.match(/(?:^|\s)Touristic Neighborhoods:\*\*\s*(.*)/i);
      if (m) currentCity.touristicNeighborhoods.push(...parseNeighborhoods(m[1]));
    }
  }
}

// Compute aggregate neighborhoods array strictly preserving order and uniqueness
for (const profile of Object.values(profiles)) {
  const combined = [
    ...profile.touristicNeighborhoods,
    ...profile.midNeighborhoods,
    ...profile.lowNeighborhoods
  ];
  const unique = Array.from(new Set(combined));
  profile.neighborhoods = unique;
}

const regionsList: RegionGroup[] = Object.entries(regionsMap).map(([name, cities]) => ({
  name,
  cities
}));

// Generate src/data/touristicHierarchy.ts
const tsOutput = `/**
 * AUTO-GENERATED FROM touristic_organization.md
 * Master City & Neighborhood Tiering Registry
 * Contains strictly the 102 cities and their exact neighborhoods from touristic_organization.md
 */

export type CityTier = 'touristic' | 'mid' | 'low';
export type NeighborhoodTier = 'touristic' | 'mid' | 'low';

export interface CityTouristicProfile {
  id: string;
  name: string;
  num: string;
  region: string;
  tier: CityTier;
  touristicNeighborhoods: string[];
  midNeighborhoods: string[];
  lowNeighborhoods: string[];
  neighborhoods: string[];
}

export interface RegionGroup {
  name: string;
  cities: CityTouristicProfile[];
}

export const TOURISTIC_PROFILES: Record<string, CityTouristicProfile> = ${JSON.stringify(profiles, null, 2)};

export const TOURISTIC_REGIONS: RegionGroup[] = ${JSON.stringify(regionsList, null, 2)};

export const CITY_TO_LISTING_KEY_MAP: Record<string, string> = ${JSON.stringify(LISTING_KEY_MAP, null, 2)};

export const WEBSITE_CITY_TO_PROFILE_KEY: Record<string, string> = {
  marrakech: 'Marrakech',
  fes: 'Fès',
  agadir: 'Agadir',
  chefchaouen: 'Chefchaouen',
  essaouira: 'Essaouira',
  casablanca: 'Casablanca',
  tangier: 'Tanger',
  tanger: 'Tanger',
  rabat: 'Rabat',
  meknes: 'Meknès',
  meknès: 'Meknès',
  ouarzazate: 'Ouarzazate',
  dakhla: 'Dakhla',
  al_hoceima: 'Al Hoceïma',
  assilah: 'Assilah',
  asilah: 'Assilah',
  el_jadida: 'El Jadida',
  saidia: 'Saïdia',
  saïdia: 'Saïdia',
  tetouan: 'Tétouan',
  tetouan_martil: 'Tétouan',
  martil: 'Martil',
  taroudant: 'Taroudant',
  taroudant_tafraoute: 'Taroudant',
  tafraout: 'Tafraout',
  ifrane: 'Ifrane',
  ifrane_azrou: 'Ifrane',
  azrou: 'Azrou',
  zagora: 'Zagora',
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
  const byId = Object.values(TOURISTIC_PROFILES).find((p) => p.id === norm);
  return byId || null;
}

/** Check if a city is Touristic or Mid-Touristic */
export function isCityTouristicOrMid(cityId: string): boolean {
  const profile = getCityProfile(cityId);
  if (!profile) return true;
  return profile.tier === 'touristic' || profile.tier === 'mid';
}

/** Get the tier for a given website cityId */
export function getCityTier(cityId: string): CityTier | null {
  const profile = getCityProfile(cityId);
  return profile ? profile.tier : null;
}

/** Check if a neighborhood is allowed (Touristic or Mid-Touristic, NEVER Low) */
export function isNeighborhoodAllowed(cityId: string, neighborhoodName: string): boolean {
  const profile = getCityProfile(cityId);
  if (!profile) return true;
  const n = neighborhoodName.toLowerCase().trim();
  const isLow = profile.lowNeighborhoods.some((item) => item.toLowerCase().trim() === n);
  if (isLow) return false;
  return true;
}
`;

const outputPath = path.resolve(__dirname, '../src/data/touristicHierarchy.ts');
fs.writeFileSync(outputPath, tsOutput, 'utf8');
console.log('Successfully generated src/data/touristicHierarchy.ts from touristic_organization.md');
