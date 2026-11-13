import {
  TOURISTIC_PROFILES,
  TOURISTIC_REGIONS,
  CITY_TO_LISTING_KEY_MAP,
  type CityTouristicProfile,
  type RegionGroup
} from './touristicHierarchy';

export interface CityData {
  id: string;
  name: string;
  num: string;
  region: string;
  tier: 'touristic' | 'mid' | 'low';
  neighborhoods: string[];
  touristicNeighborhoods: string[];
  midNeighborhoods: string[];
  lowNeighborhoods: string[];
  listingKey: string;
  subRegions?: string[];
  color: string;
  lat: number;
  lon: number;
}

// Coordinate mapping for Moroccan cities
const CITY_COORDINATES: Record<string, { lat: number; lon: number }> = {
  marrakech: { lat: 31.6295, lon: -7.9811 },
  essaouira: { lat: 31.5085, lon: -9.7595 },
  safi: { lat: 32.2994, lon: -9.2372 },
  tanger: { lat: 35.7595, lon: -5.834 },
  chefchaouen: { lat: 35.1688, lon: -5.2636 },
  tetouan: { lat: 35.5889, lon: -5.3626 },
  assilah: { lat: 35.465, lon: -6.0354 },
  m_diq: { lat: 35.6858, lon: -5.3253 },
  al_hoceima: { lat: 35.2517, lon: -3.9372 },
  martil: { lat: 35.6171, lon: -5.2747 },
  larache: { lat: 35.1932, lon: -6.1557 },
  fes: { lat: 34.0181, lon: -5.0078 },
  meknes: { lat: 33.8938, lon: -5.5516 },
  ifrane: { lat: 33.5228, lon: -5.1104 },
  azrou: { lat: 33.4344, lon: -5.2213 },
  agadir: { lat: 30.4278, lon: -9.5981 },
  taroudant: { lat: 30.4703, lon: -8.877 },
  tafraout: { lat: 29.7247, lon: -8.9753 },
  tiznit: { lat: 29.6974, lon: -9.7316 },
  casablanca: { lat: 33.5731, lon: -7.5898 },
  el_jadida: { lat: 33.2316, lon: -8.5007 },
  mohammedia: { lat: 33.6866, lon: -7.3828 },
  rabat: { lat: 34.0209, lon: -6.8416 },
  sale: { lat: 34.0531, lon: -6.7985 },
  temara: { lat: 33.9264, lon: -6.9122 },
  kenitra: { lat: 34.261, lon: -6.5802 },
  ouarzazate: { lat: 30.9335, lon: -6.937 },
  tinghir: { lat: 31.5147, lon: -5.5328 },
  zagora: { lat: 30.3324, lon: -5.8384 },
  erfoud: { lat: 31.4333, lon: -4.2333 },
  dakhla: { lat: 23.6848, lon: -15.958 },
  beni_mellal: { lat: 32.3394, lon: -6.3608 },
  saidia: { lat: 35.0822, lon: -2.2289 },
  oujda: { lat: 34.6814, lon: -1.9086 },
  nador: { lat: 35.1681, lon: -2.9335 },
  sidi_ifni: { lat: 29.3797, lon: -10.173 },
  guelmim: { lat: 28.987, lon: -10.0574 },
  layoune: { lat: 27.1536, lon: -13.2033 }
};

export const cities: CityData[] = Object.values(TOURISTIC_PROFILES).map((profile) => {
  const listingKey = CITY_TO_LISTING_KEY_MAP[profile.id] || profile.id;
  const coords = CITY_COORDINATES[profile.id] || { lat: 31.7917, lon: -7.0926 };
  return {
    id: profile.id,
    name: profile.name,
    num: profile.num,
    region: profile.region,
    tier: profile.tier,
    neighborhoods: profile.neighborhoods, // strictly from touristic_organization.md
    touristicNeighborhoods: profile.touristicNeighborhoods,
    midNeighborhoods: profile.midNeighborhoods,
    lowNeighborhoods: profile.lowNeighborhoods,
    listingKey,
    subRegions: [],
    color: profile.tier === 'touristic' ? '#e07050' : profile.tier === 'mid' ? '#4ade80' : '#94a3b8',
    lat: coords.lat,
    lon: coords.lon
  };
});

export const cityMap: Record<string, CityData> = {};
for (const c of cities) {
  cityMap[c.id] = c;
  cityMap[c.name.toLowerCase()] = c;
}

// Explicit aliases for composite keys in listings database
if (cityMap['tanger']) cityMap['tangier'] = cityMap['tanger'];
if (cityMap['assilah']) cityMap['asilah'] = cityMap['assilah'];
if (cityMap['tetouan']) cityMap['tetouan_martil'] = cityMap['tetouan'];
if (cityMap['taroudant']) cityMap['taroudant_tafraoute'] = cityMap['taroudant'];
if (cityMap['ifrane']) cityMap['ifrane_azrou'] = cityMap['ifrane'];
if (cityMap['al_hoceima']) cityMap['al_hoceïma'] = cityMap['al_hoceima'];

export { TOURISTIC_REGIONS };