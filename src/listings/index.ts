// Auto-generated registry - do not edit manually
// Tag rules are delegated to the category controllers (src/data/controllers):
// every listing read here is enriched at read time, so global tag updates
// apply instantly to the quiz, results, and filters.
import { enrichListingTags } from '../data/controllers';
import { agadirSleep } from './sleep/agadir.sleep'
import { alHoceimaSleep } from './sleep/al_hoceima.sleep'
import { asilahSleep } from './sleep/asilah.sleep'
import { casablancaSleep } from './sleep/casablanca.sleep'
import { chefchaouenSleep } from './sleep/chefchaouen.sleep'
import { dakhlaSleep } from './sleep/dakhla.sleep'
import { el_jadidaSleep } from './sleep/el_jadida.sleep'
import { essaouiraSleep } from './sleep/essaouira.sleep'
import { fesSleep } from './sleep/fes.sleep'
import { ifrane_azrouSleep } from './sleep/ifrane_azrou.sleep'
import { imlil_toubkalSleep } from './sleep/imlil_toubkal.sleep'
import { marrakechSleep } from './sleep/marrakech.sleep'
import { meknesSleep } from './sleep/meknes.sleep'
import { merzougaSleep } from './sleep/merzouga.sleep'
import { mhamidSleep } from './sleep/mhamid.sleep'
import { ouarzazateSleep } from './sleep/ouarzazate.sleep'
import { ourikaSleep } from './sleep/ourika.sleep'
import { ouzoudSleep } from './sleep/ouzoud.sleep'
import { rabatSleep } from './sleep/rabat.sleep'
import { saidiaSleep } from './sleep/saidia.sleep'
import { tangierSleep } from './sleep/tangier.sleep'
import { todra_dadesSleep } from './sleep/todra_dades.sleep'
import { tetouan_martilSleep } from './sleep/tetouan_martil.sleep'
import { taroudant_tafraouteSleep } from './sleep/taroudant_tafraoute.sleep'
import { agadirEat } from './eat/agadir.eat'
import { al_hoceimaEat } from './eat/al_hoceima.eat'
import { asilahEat } from './eat/asilah.eat'
import { casablancaEat } from './eat/casablanca.eat'
import { chefchaouenEat } from './eat/chefchaouen.eat'
import { dakhlaEat } from './eat/dakhla.eat'
import { essaouiraEat } from './eat/essaouira.eat'
import { fesEat } from './eat/fes.eat'
import { marrakechEat } from './eat/marrakech.eat'
import { meknesEat } from './eat/meknes.eat'
import { merzougaEat } from './eat/merzouga.eat'
import { ouarzazateEat } from './eat/ouarzazate.eat'
import { rabatEat } from './eat/rabat.eat'
import { saidiaEat } from './eat/saidia.eat'
import { taghazoutEat } from './eat/taghazout.eat'
import { tangierEat } from './eat/tangier.eat'
import { tetouan_martilEat } from './eat/tetouan_martil.eat'
import { el_jadidaEat } from './eat/el_jadida.eat'
import { ifrane_azrouEat } from './eat/ifrane_azrou.eat'
import { taroudant_tafraouteEat } from './eat/taroudant_tafraoute.eat'
import { agadirThings } from './things/agadir.things'
import { al_hoceimaThings } from './things/al_hoceima.things'
import { asilahThings } from './things/asilah.things'
import { casablancaThings } from './things/casablanca.things'
import { chefchaouenThings } from './things/chefchaouen.things'
import { dakhlaThings } from './things/dakhla.things'
import { el_jadidaThings } from './things/el_jadida.things'
import { essaouiraThings } from './things/essaouira.things'
import { fesThings } from './things/fes.things'
import { marrakechThings } from './things/marrakech.things'
import { meknesThings } from './things/meknes.things'
import { merzougaThings } from './things/merzouga.things'
import { ouarzazateThings } from './things/ouarzazate.things'
import { rabatThings } from './things/rabat.things'
import { saidiaThings } from './things/saidia.things'
import { tangierThings } from './things/tangier.things'
import { tetouan_martilThings } from './things/tetouan_martil.things'
import { ifrane_azrouThings } from './things/ifrane_azrou.things'
import { taroudant_tafraouteThings } from './things/taroudant_tafraoute.things'
// Shop data — delegated to the canonical shop module backend (single source of truth)
import { SHOPS_BY_CITY } from '../shop';


export const listingsRegistry: Record<string, any[]> = {
  'agadir-sleep': agadirSleep,
  'al_hoceima-sleep': alHoceimaSleep,
  'asilah-sleep': asilahSleep,
  'casablanca-sleep': casablancaSleep,
  'chefchaouen-sleep': chefchaouenSleep,
  'dakhla-sleep': dakhlaSleep,
  'el_jadida-sleep': el_jadidaSleep,
  'essaouira-sleep': essaouiraSleep,
  'fes-sleep': fesSleep,
  'ifrane_azrou-sleep': ifrane_azrouSleep,
  'imlil_toubkal-sleep': imlil_toubkalSleep,
  'marrakech-sleep': marrakechSleep,
  'meknes-sleep': meknesSleep,
  'merzouga-sleep': merzougaSleep,
  'mhamid-sleep': mhamidSleep,
  'ouarzazate-sleep': ouarzazateSleep,
  'ourika-sleep': ourikaSleep,
  'ouzoud-sleep': ouzoudSleep,
  'rabat-sleep': rabatSleep,
  'saidia-sleep': saidiaSleep,
  'tangier-sleep': tangierSleep,
  'todra_dades-sleep': todra_dadesSleep,
  'tetouan-sleep': tetouan_martilSleep,
  'tetouan_martil-sleep': tetouan_martilSleep,
  'taroudant-sleep': taroudant_tafraouteSleep,
  'taroudant_tafraoute-sleep': taroudant_tafraouteSleep,
  'agadir-eat': agadirEat,
  'al_hoceima-eat': al_hoceimaEat,
  'asilah-eat': asilahEat,
  'casablanca-eat': casablancaEat,
  'chefchaouen-eat': chefchaouenEat,
  'dakhla-eat': dakhlaEat,
  'essaouira-eat': essaouiraEat,
  'fes-eat': fesEat,
  'marrakech-eat': marrakechEat,
  'meknes-eat': meknesEat,
  'merzouga-eat': merzougaEat,
  'ouarzazate-eat': ouarzazateEat,
  'rabat-eat': rabatEat,
  'saidia-eat': saidiaEat,
  'taghazout-eat': taghazoutEat,
  'tangier-eat': tangierEat,
  'tetouan_martil-eat': tetouan_martilEat,
  'el_jadida-eat': el_jadidaEat,
  'ifrane-eat': ifrane_azrouEat,
  'ifrane_azrou-eat': ifrane_azrouEat,
  'taroudant-eat': taroudant_tafraouteEat,
  'taroudant_tafraoute-eat': taroudant_tafraouteEat,
  'agadir-things': agadirThings,
  'al_hoceima-things': al_hoceimaThings,
  'asilah-things': asilahThings,
  'casablanca-things': casablancaThings,
  'chefchaouen-things': chefchaouenThings,
  'dakhla-things': dakhlaThings,
  'el_jadida-things': el_jadidaThings,
  'essaouira-things': essaouiraThings,
  'fes-things': fesThings,
  'marrakech-things': marrakechThings,
  'meknes-things': meknesThings,
  'merzouga-things': merzougaThings,
  'ouarzazate-things': ouarzazateThings,
  'rabat-things': rabatThings,
  'saidia-things': saidiaThings,
  'tangier-things': tangierThings,
  'tetouan-things': tetouan_martilThings,
  'tetouan_martil-things': tetouan_martilThings,
  'ifrane-things': ifrane_azrouThings,
  'ifrane_azrou-things': ifrane_azrouThings,
  'taroudant-things': taroudant_tafraouteThings,
  'taroudant_tafraoute-things': taroudant_tafraouteThings,
  // Shop data — delegated to the canonical shop module backend (single source of truth)
  'marrakech-shop': SHOPS_BY_CITY.marrakech ?? [],
  'fes-shop': SHOPS_BY_CITY.fes ?? [],
  'casablanca-shop': SHOPS_BY_CITY.casablanca ?? [],
  'tangier-shop': SHOPS_BY_CITY.tangier ?? [],
  'rabat-shop': SHOPS_BY_CITY.rabat ?? [],
  'essaouira-shop': SHOPS_BY_CITY.essaouira ?? [],
  'chefchaouen-shop': SHOPS_BY_CITY.chefchaouen ?? [],
  'agadir-shop': SHOPS_BY_CITY.agadir ?? [],
  'merzouga-shop': SHOPS_BY_CITY.merzouga ?? [],
  'ouarzazate-shop': SHOPS_BY_CITY.ouarzazate ?? [],
  'meknes-shop': SHOPS_BY_CITY.meknes ?? [],
  'dakhla-shop': SHOPS_BY_CITY.dakhla ?? [],
  'ifrane-shop': SHOPS_BY_CITY.ifrane ?? [],
  'ifrane_azrou-shop': SHOPS_BY_CITY.ifrane ?? [],
  'tetouan-shop': SHOPS_BY_CITY.tetouan ?? [],
  'tetouan_martil-shop': SHOPS_BY_CITY.tetouan ?? [],
  'asilah-shop': SHOPS_BY_CITY.asilah ?? [],
  'taroudant-shop': SHOPS_BY_CITY.taroudant ?? [],
  'taroudant_tafraoute-shop': SHOPS_BY_CITY.taroudant ?? [],
  'el_jadida-shop': SHOPS_BY_CITY.el_jadida ?? [],
  'zagora-shop': SHOPS_BY_CITY.zagora ?? [],
  'al_hoceima-shop': SHOPS_BY_CITY.al_hoceima ?? [],
  'oualidia-shop': SHOPS_BY_CITY.oualidia ?? [],
  'saidia-shop': SHOPS_BY_CITY.saidia ?? [],
  'taghazout-shop': SHOPS_BY_CITY.taghazout ?? [],
}

const hierarchy = {
  "marrakech": [
    "imlil_toubkal",
    "ourika",
    "ouzoud",
    "oukaimeden"
  ],
  "fes": [
    "ifrane_azrou"
  ],
  "meknes": [
    "moulay_idriss"
  ],
  "agadir": [
    "paradise_valley",
    "taghazout",
    "imsouane",
    "taroudant_tafraoute"
  ],
  "casablanca": [
    "el_jadida"
  ],
  "tangier": [
    "asilah",
    "tetouan_martil"
  ],
  "ouarzazate": [
    "todra_dades",
    "skoura_draa"
  ],
  "merzouga": [
    "mhamid"
  ]
};

export function getListings(city?: string, focus?: string): any[] {
  if (!city || typeof city !== 'string') return [];

  if (!focus) {
    const focusCategories = ['eat', 'sleep', 'things', 'shop'];
    const all = focusCategories.flatMap(f => getListings(city, f));
    const seen = new Set();
    return all.filter(item => {
      if (!item) return false;
      const key = item.id || item.title || item.name;
      if (!key) return true;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  let normalizedFocus = (focus || '').toLowerCase();
  if (normalizedFocus === 'activities' || normalizedFocus === 'visit' || normalizedFocus === 'things-to-do' || normalizedFocus === 'experiences') {
    normalizedFocus = 'things';
  } else if (normalizedFocus === 'food') {
    normalizedFocus = 'eat';
  } else if (normalizedFocus === 'shopping') {
    normalizedFocus = 'shop';
  }
  
  const cityKey = city.toLowerCase();
  const subDestinations = (hierarchy as any)[cityKey] || [];
  
  const keysToFetch = [cityKey, ...subDestinations].map(c => `${c}-${normalizedFocus}`);
  
  const listings = keysToFetch.flatMap(key => listingsRegistry[key] || []);
  
  return listings
    .filter(Boolean)
    .map(item => enrichListingTags({
      ...item,
      title: item.title || item.name
    }));
}
