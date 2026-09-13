/**
 * City-to-Area Mapping Bridge
 * Maps website cityId values to Excel cityBase values from the tourism master database.
 * This handles cases where the website groups multiple Excel cityBases under one cityId.
 */

import { TOURISM_AREAS_MASTER, type TourismArea } from './tourismAreas';

/**
 * Maps website cityId → Excel cityBase(s)
 * Some website cities (like agadir) cover multiple Excel cityBases (agadir, taghazout, tamraght, etc.)
 */
export const CITY_BASE_MAPPING: Record<string, string[]> = {
  // Primary cities (1:1 mapping)
  'marrakech': ['marrakech'],
  'fes': ['fes'],
  'casablanca': ['casablanca'],
  'chefchaouen': ['chefchaouen'],
  'essaouira': ['essaouira'],
  'tangier': ['tangier'],
  'merzouga': ['merzouga'],
  'rabat': ['rabat'],
  'meknes': ['meknes'],
  'mhamid': ['mhamid'],
  'imlil_toubkal': ['imlil_toubkal'],
  'ourika': ['ourika', 'setti_fatma'],
  'ouzoud': ['ouzoud'],
  'todra_dades': ['boumalne_dades', 'tinghir'],
  'ouarzazate': ['ouarzazate', 'skoura', 'ait_ben_haddou', 'telouet', 'ounila_valley'],
  'paradise_valley': ['paradise_valley'],
  'taghazout': ['taghazout'],
  'imsouane': ['imsouane'],
  'dakhla': ['dakhla'],
  'asilah': ['asilah'],
  'saidid': ['saidid'],
  'al_hoceima': ['al_hoceima'],
  'ifrane': ['ifrane'],
  'azrou': ['azrou'],
  'oukaimeden': ['oukaimeden'],
  'el_jadida': ['el_jadida', 'sidi_bouzid', 'haouzia', 'azemmour'],
  'tetouan': ['tetouan', 'cabo_negro', 'mdiq', 'marina_smir', 'kabila'],
  'martil': ['martil'],
  'fnideq': ['fnideq'],
  'taroudant': ['taroudant', 'taliouine', 'tiout_oasis', 'aoulouz'],
  'tafraoute': ['tafraoute'],
  'skoura_draa': ['skoura'],
  'moulay_idriss': ['moulay_idriss'],
  'kenitra': ['kenitra'],
  'nador': ['nador'],
  'oualidia': ['oualidia'],
  'moulay_bousselham': ['moulay_bousselham'],
  'tiznit': ['tiznit', 'aglou', 'rasmouka'],
  'sidi_ifni': ['sidi_ifni'],
  'mirleft': ['mirleft'],
  'zagora': ['zagora'],
  'bin_el_ouidane': ['bin_el_ouidane', 'ait_bouguemez', 'agouti', 'tabant', 'atlas_villages'],
  'mdiq': ['mdiq'],
  'kachla': ['kabila'],
  'larache': ['larache'],
  'berkane': ['berkane'],
  'beni_mellal': ['beni_mellal'],
  'midelt': ['midelt'],
  'mohammedia': ['mohammedia'],
  'harhoura': ['harhoura'],
  'temara': ['temara'],
  'skhirat': ['skhirat'],
  'sale': ['sale'],
  'asni': ['asni'],
  'moulay_brahim': ['moulay_brahim'],
  'ouirgane': ['ouirgane'],
  'lalla_takerkoust': ['lalla_takerkoust'],
  'amizmiz': ['amizmiz'],
  'tameslohte': ['tameslohte'],
  'sidi_kaouki': ['sidi_kaouki'],
  'moulay_bouzerktoun': ['moulay_bouzerktoun'],
  'aourir': ['aourir'],
  'banana_village': ['banana_village'],
  'imi_ouaddar': ['imi_ouaddar'],
  'tamri': ['tamri'],
  'tamraght': ['tamraght'],
  'setti_fatma': ['setti_fatma'],
  'aouli': ['aouli'],
  'jbel_ayachi': ['jbel_ayachi'],
  'atlas_villages': ['atlas_villages'],
};

/**
 * Reverse mapping: Excel cityBase → website cityId
 * Useful when importing from Excel to find the website's canonical cityId
 */
export const CITY_BASE_TO_CITY_ID: Record<string, string> = {};
for (const [cityId, bases] of Object.entries(CITY_BASE_MAPPING)) {
  for (const base of bases) {
    CITY_BASE_TO_CITY_ID[base] = cityId;
  }
}

/**
 * Get all Excel cityBase values that belong to a website cityId
 */
export function getCityBasesForCityId(cityId: string): string[] {
  return CITY_BASE_MAPPING[cityId] || [cityId];
}

/**
 * Get the website cityId for an Excel cityBase
 */
export function getCityIdForCityBase(cityBase: string): string | undefined {
  return CITY_BASE_TO_CITY_ID[cityBase];
}

/**
 * Get all TourismArea entries for a website cityId
 * (aggregates across all its Excel cityBases)
 */
export function getAreasForCityId(
  cityId: string, 
  filter: 'touristic' | 'touristic_and_mixed' | 'all' = 'touristic',
  allAreas: TourismArea[] = TOURISM_AREAS_MASTER
): TourismArea[] {
  const cityBases = getCityBasesForCityId(cityId);
  const areas: TourismArea[] = [];
  
  for (const base of cityBases) {
    const baseAreas = allAreas.filter(a => a.cityBase === base);
    if (filter === 'touristic') {
      areas.push(...baseAreas.filter(a => a.tourismStatus === 'Touristic'));
    } else if (filter === 'touristic_and_mixed') {
      areas.push(...baseAreas.filter(a => a.tourismStatus !== 'Non-touristic'));
    } else {
      areas.push(...baseAreas);
    }
  }
  
  return areas;
}

/**
 * Get areaVillage names for a website cityId (for legacy cities.ts sync)
 */
export function getAreaNamesForCityId(
  cityId: string,
  filter: 'touristic' | 'touristic_and_mixed' | 'all' = 'touristic',
  allAreas: TourismArea[] = TOURISM_AREAS_MASTER
): string[] {
  return getAreasForCityId(cityId, filter, allAreas).map(a => a.areaVillage);
}

/**
 * Convenience helper for tools expecting string[] area names
 */
export function getAreasForTool(
  cityId: string,
  filter: 'touristic' | 'touristic_and_mixed' | 'all' = 'touristic',
  allAreas: TourismArea[] = TOURISM_AREAS_MASTER
): string[] {
  return getAreaNamesForCityId(cityId, filter, allAreas);
}

/**
 * Website city IDs that are "primary" destinations (show on map, have landing pages)
 * These are the ones in the cities array in cities.ts
 */
export const PRIMARY_CITY_IDS = [
  'marrakech', 'fes', 'agadir', 'casablanca', 'chefchaouen', 'essaouira', 
  'tangier', 'merzouga', 'rabat', 'meknes', 'mhamid', 'imlil_toubkal', 
  'ourika', 'ouzoud', 'todra_dades', 'ouarzazate', 'paradise_valley',
  'taghazout', 'imsouane', 'dakhla', 'asilah', 'saidid', 'al_hoceima', 
  'ifrane', 'azrou', 'oukaimeden', 'el_jadida', 'tetouan', 'martil', 
  'taroudant', 'tafraoute', 'skoura_draa', 'moulay_idriss', 'kenitra',
  'nador', 'oualidia', 'moulay_bousselham', 'tiznit', 'sidi_ifni', 
  'mirleft', 'zagora', 'bin_el_ouidane', 'mdiq', 'fnideq', 'kachla', 
  'larache', 'berkane'
];

/**
 * Check if a cityId is a primary destination
 */
export function isPrimaryCityId(cityId: string): boolean {
  return PRIMARY_CITY_IDS.includes(cityId);
}

/**
 * Get all primary city IDs that have at least one touristic area
 */
export function getPrimaryCitiesWithTouristicAreas(allAreas: TourismArea[] = TOURISM_AREAS_MASTER): string[] {
  return PRIMARY_CITY_IDS.filter(cityId => {
    const areas = getAreasForCityId(cityId, 'touristic', allAreas);
    return areas.length > 0;
  });
}