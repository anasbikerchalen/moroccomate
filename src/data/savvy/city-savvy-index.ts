/**
 * ============================================================================
 * MOROCCO TRAVEL OS - CITY SAVVY INDEX DATABASE (citySavvyIndexDB)
 * ============================================================================
 * 
 * INSTRUCTIONS FOR ADDING OR MODIFYING CITY INDEX ENTRIES:
 * -------------------------------------------------------
 * When updating this file or adding new cities, you must adhere strictly
 * to the `CitySavvyIndex` TypeScript interface defined in types/savvy.ts.
 * 
 * SCHEMA SPECIFICATION:
 * 
 * interface CitySavvyIndex {
 *   cityId: string;                   // Lowercase city ID matching static lookup (e.g., 'marrakech', 'fes', 'casablanca', 'rabat')
 *   overallSavvyScore: number;        // Overall calculated safety/savviness score (0.0 to 10.0)
 *   dataCompleteness: number;         // Percentage representing how populated the city dataset is (0 to 100)
 *   communityActivityScore: number;   // Metric for active community reporting and verification (0.0 to 10.0)
 *   topScamCategories: {              // The most frequent scams reported by category and frequency count
 *     category: 'street' | 'transport' | 'shopping' | 'restaurant' | 'accommodation' | 'digital' | 'authority';
 *     count: number;
 *   }[];
 *   savviestNeighborhood: string;     // Recommended neighborhood for high safety/peace of mind
 *   trickiestNeighborhood: string;    // Area requiring high caution or situational awareness
 *   mustKnowTip: string;              // Crucial advice for new visitors arriving in the city
 *   localSecret: string;              // Off-the-beaten-path recommendation or non-touristy tip
 *   neighborhoods: NeighborhoodIntel[]; // Filtered array of neighborhoods belonging to this city
 *   scamCount: number;                // Total number of documented scam types in this city
 *   placeIntelCount: number;          // Total number of documented place intelligence profiles for this city
 *   savvyTipsTotal: number;           // Combined helpful tips compiled for visitors
 * }
 * 
 * RULES FOR EXTERNAL AI AGENTS:
 * 1. Do NOT hardcode counts that should be derived dynamically using the `.filter()` helper on other databases.
 * 2. Ensure `cityId` maps correctly and identically across other databases (`neighborhoodIntelDB`, `scamIntelDB`, `placeIntelDB`).
 * 3. Keep description, secrets, and must-know tips objective, highly professional, realistic, and respectful.
 * ============================================================================
 */

import { CitySavvyIndex } from '../../types/savvy';
import { neighborhoodIntelDB } from './neighborhood-intel';
import { scamIntelDB } from './scam-intel';
import { placeIntelDB } from './place-intel';
import { TOURISM_AREAS_MASTER } from '../tourismAreas';

function countCityScams(cityId: string): number {
  return scamIntelDB.filter(s => {
    if (s.cityPriority[cityId] !== undefined) return true;
    if (cityId === 'agadir' && s.cityPriority['taghazout'] !== undefined) return true;
    if (cityId === 'taghazout' && s.cityPriority['agadir'] !== undefined) return true;
    if (cityId === 'ifrane_azrou' && s.cityPriority['ifrane'] !== undefined) return true;
    if (cityId === 'tetouan_martil' && s.cityPriority['tetouan'] !== undefined) return true;
    // Common nationwide scams
    return (
      s.id === 'taxi-no-meter' ||
      s.id === 'unregulated-parking-guard-overcharge' ||
      s.id === 'fake-dirham-change-scam' ||
      s.id === 'fake-guide-closed-way' ||
      s.id === 'restaurant-menu-pricing-surprise' ||
      s.id === 'overpriced-tea-menus'
    );
  }).length;
}

/**
 * Whitelist of Touristic and Mid-Touristic City IDs (and sub-regions/areas) for Savvy OS
 * Dynamically derived from the Morocco Tourism Areas Master Database (tourismAreas.ts)
 */
export const SAVVY_TOURISTIC_CITY_IDS: string[] = Array.from(
  new Set(
    TOURISM_AREAS_MASTER
      .filter(a => a.tourismStatus === 'Touristic' || a.tourismStatus === 'Mixed')
      .map(a => a.cityBase)
  )
);

export const citySavvyIndexDB: CitySavvyIndex[] = [
  {
    cityId: 'marrakech',
    overallSavvyScore: 8.4,
    dataCompleteness: 92,
    communityActivityScore: 8.5,
    topScamCategories: [
      { category: 'street', count: 8 },
      { category: 'transport', count: 5 },
      { category: 'shopping', count: 4 }
    ],
    savviestNeighborhood: 'Gueliz',
    trickiestNeighborhood: 'Medina',
    mustKnowTip: 'Always walk past the first rows of sellers to buy goods, and insist on "compteur" (meter) in small taxis.',
    localSecret: 'The terrace of Maison de la Photographie offers a stunning overhead Atlas view for just the price of a small lunch.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'marrakech'),
    scamCount: countCityScams('marrakech'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'marrakech').length,
    savvyTipsTotal: 34
  },
  {
    cityId: 'fes',
    overallSavvyScore: 7.9,
    dataCompleteness: 85,
    communityActivityScore: 7.8,
    topScamCategories: [
      { category: 'street', count: 12 },
      { category: 'shopping', count: 6 },
      { category: 'restaurant', count: 3 }
    ],
    savviestNeighborhood: 'Fes el-Bali (Riad districts)',
    trickiestNeighborhood: 'Tannery Perimeter Alleys',
    mustKnowTip: 'Hire a licensed guide with a metal badge on day one to learn the labyrinth layout without pressure.',
    localSecret: 'Jnan Sbil Gardens are completely free, quiet, and filled with cooling water fountains right outside the Medina gates.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'fes'),
    scamCount: countCityScams('fes'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'fes').length,
    savvyTipsTotal: 22
  },
  {
    cityId: 'casablanca',
    overallSavvyScore: 8.6,
    dataCompleteness: 80,
    communityActivityScore: 8.0,
    topScamCategories: [
      { category: 'transport', count: 6 },
      { category: 'street', count: 3 }
    ],
    savviestNeighborhood: 'Gauthier / Maarif',
    trickiestNeighborhood: 'Port & Medina perimeter',
    mustKnowTip: 'Download taxi apps like Careem to book standard metered city rides with zero price negotiation.',
    localSecret: 'Villa des Arts holds beautiful contemporary exhibitions by local painters inside an Art Deco villa with no entrance fees.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'casablanca'),
    scamCount: countCityScams('casablanca'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'casablanca').length,
    savvyTipsTotal: 18
  },
  {
    cityId: 'agadir',
    overallSavvyScore: 8.1,
    dataCompleteness: 95,
    communityActivityScore: 8.7,
    topScamCategories: [
      { category: 'transport', count: 4 },
      { category: 'street', count: 4 },
      { category: 'shopping', count: 3 },
      { category: 'digital', count: 4 },
      { category: 'restaurant', count: 2 },
      { category: 'accommodation', count: 2 },
      { category: 'authority', count: 1 }
    ],
    savviestNeighborhood: 'Talborjt / Marina Agadir',
    trickiestNeighborhood: 'Souk El Had Gates / Beach Promenade at Night',
    mustKnowTip: 'Always insist on the meter ("compteur") in Petit Taxis or use the inDrive app for upfront, fair pricing across Agadir.',
    localSecret: 'Buy fresh argan oil and spices at the local sections near Gate 2 inside Souk El Had where residents shop, avoiding tourist-inflated gates.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'agadir'),
    scamCount: countCityScams('agadir'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'agadir' || p.cityId === 'taghazout').length,
    savvyTipsTotal: 48
  },
  {
    cityId: 'taghazout',
    overallSavvyScore: 8.3,
    dataCompleteness: 94,
    communityActivityScore: 8.9,
    topScamCategories: [
      { category: 'shopping', count: 3 },
      { category: 'transport', count: 3 },
      { category: 'street', count: 2 },
      { category: 'restaurant', count: 1 },
      { category: 'authority', count: 1 }
    ],
    savviestNeighborhood: 'Anchor Point Coast / Upper Village',
    trickiestNeighborhood: 'Panorama Beachfront & Hash Point Alleys',
    mustKnowTip: 'Always film your surfboard and quad rentals in 4K before paying, and agree on all seafood prices in writing before grilling.',
    localSecret: 'Walk north past Anchor Point at low tide to access serene natural tide pools away from beach vendors and parking touts.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'taghazout' || n.cityId === 'agadir'),
    scamCount: countCityScams('taghazout'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'taghazout').length,
    savvyTipsTotal: 32
  },
  {
    cityId: 'tangier',
    overallSavvyScore: 8.2,
    dataCompleteness: 88,
    communityActivityScore: 8.4,
    topScamCategories: [
      { category: 'transport', count: 5 },
      { category: 'street', count: 4 },
      { category: 'shopping', count: 3 }
    ],
    savviestNeighborhood: 'Marshan / Iberia',
    trickiestNeighborhood: 'Port Ferry Exit & Petit Socco perimeter',
    mustKnowTip: 'When arriving at Tanger Ville Port or Railway Station, bypass informal touts and walk straight to the official blue Petit Taxi line with meters.',
    localSecret: 'Café Hafa offers legendary mint tea perched over the Strait of Gibraltar; come before sunset for local seating without tour bus crowds.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'tangier'),
    scamCount: countCityScams('tangier'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'tangier').length,
    savvyTipsTotal: 28
  },
  {
    cityId: 'chefchaouen',
    overallSavvyScore: 8.7,
    dataCompleteness: 86,
    communityActivityScore: 8.6,
    topScamCategories: [
      { category: 'street', count: 4 },
      { category: 'shopping', count: 3 },
      { category: 'transport', count: 2 }
    ],
    savviestNeighborhood: 'Upper Medina / Ras El Ma',
    trickiestNeighborhood: 'Outa El Hammam Square Touts & Hash Point Alleyways',
    mustKnowTip: 'Say "No Shukran" firmly to street sellers offering tours or substances; Chefchaouen is extremely safe and easily navigable on foot without guides.',
    localSecret: 'Hike up to the Spanish Mosque 30 minutes before sunset for panoramic valley views, or take a shared grand taxi to Akchour Waterfalls for crisp river trails.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'chefchaouen'),
    scamCount: countCityScams('chefchaouen'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'chefchaouen').length,
    savvyTipsTotal: 25
  },
  {
    cityId: 'rabat',
    overallSavvyScore: 9.1,
    dataCompleteness: 84,
    communityActivityScore: 8.2,
    topScamCategories: [
      { category: 'transport', count: 3 },
      { category: 'street', count: 2 }
    ],
    savviestNeighborhood: 'Agdal / Hassan',
    trickiestNeighborhood: 'Old Medina Perimeter / Kasbah Gate unofficial guides',
    mustKnowTip: 'Use the modern Rabat Tramway to move seamlessly between Hassan Tower, Agdal, and Salé for just 6 MAD with zero taxi friction.',
    localSecret: 'Café des Oudaïas inside the Kasbah des Oudayas provides peaceful ocean views, traditional almond pastries, and mint tea far from commercial hassle.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'rabat'),
    scamCount: countCityScams('rabat'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'rabat').length,
    savvyTipsTotal: 20
  },
  {
    cityId: 'essaouira',
    overallSavvyScore: 8.8,
    dataCompleteness: 89,
    communityActivityScore: 8.8,
    topScamCategories: [
      { category: 'restaurant', count: 4 },
      { category: 'street', count: 3 },
      { category: 'shopping', count: 3 }
    ],
    savviestNeighborhood: 'Medina Ramparts / Bab Sbaa',
    trickiestNeighborhood: 'Port Seafood Grill Stalls (confirm prices by weight upfront)',
    mustKnowTip: 'When eating at the open-air harbor seafood grills, ask for the price per kilogram in writing before placing your order to avoid billing surprises.',
    localSecret: 'Walk south along the broad beach at low tide toward Diabat and the ruined Castle in the Sand for quiet windward walks and camel spotting.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'essaouira'),
    scamCount: countCityScams('essaouira'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'essaouira').length,
    savvyTipsTotal: 26
  },
  {
    cityId: 'dakhla',
    overallSavvyScore: 9.0,
    dataCompleteness: 82,
    communityActivityScore: 8.1,
    topScamCategories: [
      { category: 'transport', count: 3 },
      { category: 'digital', count: 2 }
    ],
    savviestNeighborhood: 'Dakhla Lagoon Resorts',
    trickiestNeighborhood: 'Airport Informal Transfer Touts',
    mustKnowTip: 'Arrange airport transfers directly with your lagoon camp or pre-book official taxis; informal airport drivers overcharge for the 30km lagoon trip.',
    localSecret: 'Visit the White Dune (Dune Blanche) at high tide when the Atlantic water completely surrounds the white sand mound inside the turquoise lagoon.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'dakhla'),
    scamCount: countCityScams('dakhla'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'dakhla').length,
    savvyTipsTotal: 19
  },
  {
    cityId: 'merzouga',
    overallSavvyScore: 8.0,
    dataCompleteness: 87,
    communityActivityScore: 8.5,
    topScamCategories: [
      { category: 'accommodation', count: 5 },
      { category: 'street', count: 4 },
      { category: 'transport', count: 3 }
    ],
    savviestNeighborhood: 'Hassilabied Village',
    trickiestNeighborhood: 'Rissani Junction & Highway Desert Camp Touts',
    mustKnowTip: 'Verify whether your desert camp is located deep in the Erg Chebbi dunes or on the flat rocky desert border before paying.',
    localSecret: 'Dayet Srji salt lake near Merzouga hosts wild pink flamingos in spring against the backdrop of towering golden sand dunes.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'merzouga'),
    scamCount: countCityScams('merzouga'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'merzouga').length,
    savvyTipsTotal: 24
  },
  {
    cityId: 'ouarzazate',
    overallSavvyScore: 8.8,
    dataCompleteness: 92,
    communityActivityScore: 8.5,
    topScamCategories: [
      { category: 'street', count: 4 },
      { category: 'transport', count: 3 }
    ],
    savviestNeighborhood: 'Centre Ville / Skoura Palmeraie',
    trickiestNeighborhood: 'Aït Benhaddou Riverbed Crossing (Self-proclaimed toll collectors)',
    mustKnowTip: 'Crossing the footbridge into Aït Benhaddou is completely free; ignore fake toll collectors along the river path.',
    localSecret: 'Explore Fint Oasis or Kasbah Amerhidil in Skoura for authentic palm groves and 17th-century earthen architecture away from tour crowds.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'ouarzazate'),
    scamCount: countCityScams('ouarzazate'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'ouarzazate').length,
    savvyTipsTotal: 25
  },
  {
    cityId: 'meknes',
    overallSavvyScore: 8.5,
    dataCompleteness: 91,
    communityActivityScore: 8.3,
    topScamCategories: [
      { category: 'street', count: 4 },
      { category: 'transport', count: 3 }
    ],
    savviestNeighborhood: 'Hamria (Ville Nouvelle) / Volubilis',
    trickiestNeighborhood: 'Place El-Hedim Evening Crowds & Unofficial Souk Guides',
    mustKnowTip: 'Negotiate Grand Taxi fares to Volubilis and Moulay Idriss Zerhoun as a round-trip package with wait time included before setting off.',
    localSecret: 'Royal Stables (Heri es-Souani) and Agdal Basin offer massive ancient architecture and cool stone vaults with minimal tourist congestion.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'meknes'),
    scamCount: countCityScams('meknes'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'meknes').length,
    savvyTipsTotal: 26
  },
  {
    cityId: 'al_hoceima',
    overallSavvyScore: 9.0,
    dataCompleteness: 94,
    communityActivityScore: 8.8,
    topScamCategories: [
      { category: 'restaurant', count: 2 },
      { category: 'transport', count: 2 }
    ],
    savviestNeighborhood: 'City Center / Place Mohammed VI',
    trickiestNeighborhood: 'Quemado Beach Summer Parking Touts',
    mustKnowTip: 'In peak summer months (July–August), agree on beach sunbed prices and parking fees beforehand at Quemado and Cala Bonita beaches.',
    localSecret: 'Take a boat trip or hike into Al Hoceima National Park to discover secluded Mediterranean coves like Bades and Cala Iris with dramatic limestone cliffs.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'al_hoceima'),
    scamCount: countCityScams('al_hoceima'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'al_hoceima').length,
    savvyTipsTotal: 22
  },
  {
    cityId: 'ifrane',
    overallSavvyScore: 9.6,
    dataCompleteness: 97,
    communityActivityScore: 9.3,
    topScamCategories: [
      { category: 'accommodation', count: 3 },
      { category: 'street', count: 2 }
    ],
    savviestNeighborhood: 'Downtown Ifrane (Centre Ville & Lion Park)',
    trickiestNeighborhood: 'Michlifen Ski Road Winter Equipment Vendors',
    mustKnowTip: 'Book chalets and ski lodges only via verified platforms (Airbnb/Booking) to avoid online advance wire fraud, and carry tire chains during winter snowstorms.',
    localSecret: 'Quiet pine trails behind Al Akhawayn University and the upper cascade trail at Ain Vittel offer serene walking away from weekend day-trippers.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'ifrane' || n.cityId === 'ifrane_azrou'),
    scamCount: countCityScams('ifrane'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'ifrane' || p.cityId === 'ifrane_azrou').length,
    savvyTipsTotal: 28
  },
  {
    cityId: 'azrou',
    overallSavvyScore: 9.4,
    dataCompleteness: 95,
    communityActivityScore: 9.1,
    topScamCategories: [
      { category: 'street', count: 3 },
      { category: 'shopping', count: 2 }
    ],
    savviestNeighborhood: 'Azrou Town Center & Cooperative Artisanale',
    trickiestNeighborhood: 'Cèdre Gouraud Monkey Feeding Parking Area',
    mustKnowTip: 'Do not accept peanut bags or let vendors place Barbary macaques on your shoulders at Cèdre Gouraud; observe wildlife peacefully from a distance.',
    localSecret: 'Visit the Tuesday Berber souk for authentic mountain honey, fresh Middle Atlas cherries (in June), and hand-woven Beni M\'guild rugs at local prices.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'azrou' || n.cityId === 'ifrane_azrou'),
    scamCount: countCityScams('azrou'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'azrou' || p.cityId === 'ifrane_azrou').length,
    savvyTipsTotal: 25
  },
  {
    cityId: 'ifrane_azrou',
    overallSavvyScore: 9.5,
    dataCompleteness: 96,
    communityActivityScore: 9.2,
    topScamCategories: [
      { category: 'street', count: 3 },
      { category: 'shopping', count: 2 }
    ],
    savviestNeighborhood: 'Downtown Ifrane (Centre Ville & Lion Park)',
    trickiestNeighborhood: 'Cèdre Gouraud Monkey Feeding Parking Area',
    mustKnowTip: 'Avoid purchasing overpriced peanut bags from pushy vendors at the Barbary Macaque forest stops in Cèdre Gouraud; observe wildlife respectfully at a distance.',
    localSecret: 'Michlifen crater, Ain Vittel, and Ras El Ma springs offer tranquil pine forest trails and crisp mountain air ideal for hiking away from highway souvenir stalls.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'ifrane_azrou' || n.cityId === 'ifrane' || n.cityId === 'azrou'),
    scamCount: countCityScams('ifrane_azrou'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'ifrane_azrou' || p.cityId === 'ifrane' || p.cityId === 'azrou').length,
    savvyTipsTotal: 26
  },
  {
    cityId: 'tetouan',
    overallSavvyScore: 8.9,
    dataCompleteness: 94,
    communityActivityScore: 8.8,
    topScamCategories: [
      { category: 'street', count: 2 },
      { category: 'transport', count: 1 }
    ],
    savviestNeighborhood: 'Ensanche (Spanish Quarter) & Place Moulay El Mehdi',
    trickiestNeighborhood: 'Bab El Okla & Bab Tout Medina Gates',
    mustKnowTip: 'Tetouan’s UNESCO Medina is raw and authentic; decline unofficial guides near Bab El Okla offering tannery visits, and enjoy authentic artisan workshops with zero hassle.',
    localSecret: 'Visit the Royal Artisan School (École des Arts et Métiers) at Bab El Okla to watch master artisans train students in authentic Andalusian zellige, plaster, and woodwork.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'tetouan' || n.cityId === 'tetouan_martil'),
    scamCount: countCityScams('tetouan'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'tetouan' || p.cityId === 'tetouan_martil').length,
    savvyTipsTotal: 25
  },
  {
    cityId: 'martil',
    overallSavvyScore: 8.8,
    dataCompleteness: 92,
    communityActivityScore: 8.6,
    topScamCategories: [
      { category: 'street', count: 2 },
      { category: 'transport', count: 1 }
    ],
    savviestNeighborhood: 'Martil Corniche & Cabo Negro Beach',
    trickiestNeighborhood: 'Summer Beach Umbrella Rentals & Informal Parking',
    mustKnowTip: 'In July–August, agree on beach umbrella/chair rates (30–50 MAD) before sitting down, and request official municipal parking tickets (3–5 MAD).',
    localSecret: 'Head to the northern end of Martil beach towards the Cabo Negro headland for cleaner water, quiet swimming, and peaceful pine mountain views.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'martil' || n.cityId === 'tetouan_martil'),
    scamCount: countCityScams('martil'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'martil' || p.cityId === 'tetouan_martil').length,
    savvyTipsTotal: 22
  },
  {
    cityId: 'mdiq',
    overallSavvyScore: 9.1,
    dataCompleteness: 93,
    communityActivityScore: 8.9,
    topScamCategories: [
      { category: 'transport', count: 1 },
      { category: 'restaurant', count: 1 }
    ],
    savviestNeighborhood: 'M\'diq Marina & Royal Port Pier',
    trickiestNeighborhood: 'Port Seafood Restaurants (Confirm fish price per kilo)',
    mustKnowTip: 'Verify fresh seafood pricing by weight (MAD per kilo) at port-side restaurants before grilling to avoid surprise charges.',
    localSecret: 'Buy fresh fish directly off the fishermen’s trawlers at the Port de Pêche at 13:00 and have neighboring port stalls grill it fresh with Moroccan salads.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'mdiq' || n.cityId === 'tetouan_martil'),
    scamCount: countCityScams('mdiq'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'mdiq' || p.cityId === 'tetouan_martil').length,
    savvyTipsTotal: 24
  },
  {
    cityId: 'fnideq',
    overallSavvyScore: 8.3,
    dataCompleteness: 88,
    communityActivityScore: 8.1,
    topScamCategories: [
      { category: 'shopping', count: 2 },
      { category: 'transport', count: 1 }
    ],
    savviestNeighborhood: 'Fnideq Seafront Promenade',
    trickiestNeighborhood: 'Souk El Massira Crowded Import Bazaars',
    mustKnowTip: 'Keep valuables secured in crowded bazaar lanes in Souk El Massira, and negotiate prices across multiple stalls when purchasing imported goods.',
    localSecret: 'Walk the newly developed coastal corniche in the evening for views across the Strait of Gibraltar to the Spanish enclave of Ceuta.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'fnideq' || n.cityId === 'tetouan_martil'),
    scamCount: countCityScams('fnideq'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'fnideq' || p.cityId === 'tetouan_martil').length,
    savvyTipsTotal: 19
  },
  {
    cityId: 'tetouan_martil',
    overallSavvyScore: 8.9,
    dataCompleteness: 95,
    communityActivityScore: 8.9,
    topScamCategories: [
      { category: 'street', count: 3 },
      { category: 'transport', count: 2 }
    ],
    savviestNeighborhood: 'Ensanche (Spanish Quarter) & Cabo Negro Resort',
    trickiestNeighborhood: 'Bab El Okla Medina Gates & Summer Beach Umbrellas',
    mustKnowTip: 'Tetouan’s UNESCO Medina is raw and authentic; decline unofficial guides near Bab El Okla who claim sections are closed, and use shared grand taxis (6–10 MAD) between towns.',
    localSecret: 'Visit the Royal Artisan School (École des Arts et Métiers) at Bab El Okla to observe masters teaching zellige and wood carving, and enjoy evening churros in the Ensanche.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'tetouan_martil' || n.cityId === 'tetouan' || n.cityId === 'martil' || n.cityId === 'mdiq' || n.cityId === 'fnideq'),
    scamCount: countCityScams('tetouan_martil'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'tetouan_martil' || p.cityId === 'tetouan' || p.cityId === 'martil' || p.cityId === 'mdiq' || p.cityId === 'fnideq').length,
    savvyTipsTotal: 28
  },
  {
    cityId: 'el_jadida',
    overallSavvyScore: 8.8,
    dataCompleteness: 94,
    communityActivityScore: 8.6,
    topScamCategories: [
      { category: 'street', count: 2 },
      { category: 'restaurant', count: 1 }
    ],
    savviestNeighborhood: 'Cité Portugaise Ramparts & Sidi Bouzid Bay',
    trickiestNeighborhood: 'Port Fish Market & Cistern Gate Touts',
    mustKnowTip: 'Buy entry tickets to the Manueline Portuguese Cistern directly at the official municipal desk inside the archway (70 MAD); refuse assistance from freelance door touts.',
    localSecret: 'Walk along the old Portuguese ramparts at sunset for uninterrupted views over Atlantic waves crashing against 16th-century stone bastions, and enjoy fresh oysters at Sidi Bouzid.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'el_jadida' || n.cityId === 'sidi_bouzid' || n.cityId === 'haouzia' || n.cityId === 'azemmour'),
    scamCount: countCityScams('el_jadida'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'el_jadida' || p.cityId === 'sidi_bouzid' || p.cityId === 'haouzia' || p.cityId === 'azemmour').length,
    savvyTipsTotal: 26
  },
  {
    cityId: 'imsouane',
    overallSavvyScore: 8.9,
    dataCompleteness: 85,
    communityActivityScore: 8.7,
    topScamCategories: [
      { category: 'shopping', count: 2 },
      { category: 'transport', count: 2 }
    ],
    savviestNeighborhood: 'Magic Bay Headland',
    trickiestNeighborhood: 'Port Fish Market & Surf Rental Alley',
    mustKnowTip: 'Inspect surfboards thoroughly and record video showing prior dings or tail cracks before taking boards out into Magic Bay.',
    localSecret: 'Buy fresh fish directly off the wooden boats returning at the port around noon, and have nearby port shacks grill it with cumin and lemon for a fraction of restaurant prices.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'imsouane'),
    scamCount: countCityScams('imsouane'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'imsouane').length,
    savvyTipsTotal: 21
  },
  {
    cityId: 'asilah',
    overallSavvyScore: 9.0,
    dataCompleteness: 84,
    communityActivityScore: 8.3,
    topScamCategories: [
      { category: 'shopping', count: 2 },
      { category: 'street', count: 2 }
    ],
    savviestNeighborhood: 'Medina Ramparts / Ocean Promenade',
    trickiestNeighborhood: 'Krikia Viewpoint (Peak Crowd Hour)',
    mustKnowTip: 'Asilah is one of Morocco’s cleanest and quietest coastal medinas; enjoy walking the mural-painted alleys without pressure or unsolicited guides.',
    localSecret: 'Visit during the annual Arts Festival (July/August) when international artists paint new murals across the whitewashed medina walls.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'asilah'),
    scamCount: countCityScams('asilah'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'asilah').length,
    savvyTipsTotal: 19
  },
  {
    cityId: 'oualidia',
    overallSavvyScore: 9.1,
    dataCompleteness: 83,
    communityActivityScore: 8.2,
    topScamCategories: [
      { category: 'restaurant', count: 2 },
      { category: 'transport', count: 1 }
    ],
    savviestNeighborhood: 'Lagoon Beachfront',
    trickiestNeighborhood: 'Oyster Farm Boat Landing',
    mustKnowTip: 'Hire a small wooden boat for a lagoon tour directly from official boatmen at the main beach slipway with agreed rates.',
    localSecret: 'Taste freshly harvested Oualidia oysters (Maison Bleue or Ostrea 21) directly at the lagoon edge while watching flamingos across the sandbar.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'oualidia'),
    scamCount: countCityScams('oualidia'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'oualidia').length,
    savvyTipsTotal: 18
  },
  {
    cityId: 'mhamid',
    overallSavvyScore: 9.1,
    dataCompleteness: 85,
    communityActivityScore: 8.4,
    topScamCategories: [
      { category: 'transport', count: 2 },
      { category: 'accommodation', count: 2 }
    ],
    savviestNeighborhood: 'Mhamid El Ghizlane Village Center',
    trickiestNeighborhood: 'Outer Desert Entry Tracks & Unofficial Guide Stations',
    mustKnowTip: 'Book 4x4 transfers to Erg Chigaga dunes only through licensed desert camp operators with registered transport permits.',
    localSecret: 'Visit the ancient library and underground kasbah in Tamegroute (just north of Mhamid) for 11th-century illuminated manuscripts and green pottery craft.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'mhamid' || n.cityId === 'zagora'),
    scamCount: countCityScams('mhamid'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'mhamid').length,
    savvyTipsTotal: 18
  },
  {
    cityId: 'zagora',
    overallSavvyScore: 9.0,
    dataCompleteness: 84,
    communityActivityScore: 8.2,
    topScamCategories: [
      { category: 'transport', count: 2 },
      { category: 'shopping', count: 2 }
    ],
    savviestNeighborhood: 'Amezrou Kasbah & Palm Grove',
    trickiestNeighborhood: 'Highway Junction Entry Touts',
    mustKnowTip: 'The iconic "Timbuktu 52 Days" signpost sits in central Zagora; take photos freely without paying self-appointed street guides.',
    localSecret: 'Explore the Jewish silver artisan quarters inside Amezrou Kasbah where local families craft traditional Berber filigree jewelry.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'zagora'),
    scamCount: countCityScams('zagora'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'zagora').length,
    savvyTipsTotal: 17
  },
  {
    cityId: 'imlil_toubkal',
    overallSavvyScore: 9.3,
    dataCompleteness: 88,
    communityActivityScore: 8.9,
    topScamCategories: [
      { category: 'transport', count: 2 },
      { category: 'street', count: 1 }
    ],
    savviestNeighborhood: 'Imlil Center & Aroumd Village',
    trickiestNeighborhood: 'Trailhead Equipment Rental Sellers',
    mustKnowTip: 'Hiring a licensed High Atlas mountain guide (Bureau des Guides in Imlil) is required for Jebel Toubkal summit climbs and ensures mountain safety.',
    localSecret: 'Walk up to Aroumd village (20 minutes above Imlil) for breathtaking panoramic stone village views and fresh walnut bread.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'imlil_toubkal'),
    scamCount: countCityScams('imlil_toubkal'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'imlil_toubkal').length,
    savvyTipsTotal: 22
  },
  {
    cityId: 'ourika',
    overallSavvyScore: 8.8,
    dataCompleteness: 86,
    communityActivityScore: 8.5,
    topScamCategories: [
      { category: 'restaurant', count: 3 },
      { category: 'street', count: 2 }
    ],
    savviestNeighborhood: 'Setti Fatma Riverbanks',
    trickiestNeighborhood: 'Waterfall Path Unofficial Guide Steps',
    mustKnowTip: 'Agree on river-table tagine prices before sitting down at the Setti Fatma stream cafes, and wear sturdy grip shoes for the rocky waterfall climb.',
    localSecret: 'Visit the Bio-Aromatic Garden of Ourika (Le Jardin du Douar) for peaceful medicinal plant walks and organic tea away from weekend river crowds.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'ourika'),
    scamCount: countCityScams('ourika'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'ourika').length,
    savvyTipsTotal: 20
  },
  {
    cityId: 'ouzoud',
    overallSavvyScore: 8.9,
    dataCompleteness: 87,
    communityActivityScore: 8.6,
    topScamCategories: [
      { category: 'street', count: 3 },
      { category: 'restaurant', count: 2 }
    ],
    savviestNeighborhood: 'Ouzoud Upper Basin Promenade',
    trickiestNeighborhood: 'Lower Boat Basin & Monkey Feeding Path',
    mustKnowTip: 'Small boat rides across the waterfall pool cost a fixed 20 MAD per person; confirm before boarding and keep small cash bills handy.',
    localSecret: 'Follow the olive grove trail past the main cascade stairs down to the lower gorge pools for quiet swimming away from tour group crowds.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'ouzoud'),
    scamCount: countCityScams('ouzoud'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'ouzoud').length,
    savvyTipsTotal: 21
  },
  {
    cityId: 'todra_dades',
    overallSavvyScore: 9.1,
    dataCompleteness: 88,
    communityActivityScore: 8.7,
    topScamCategories: [
      { category: 'shopping', count: 2 },
      { category: 'street', count: 2 }
    ],
    savviestNeighborhood: 'Todra Gorge Floor & Boumalne Dades',
    trickiestNeighborhood: 'Gorge Entry Carpet Shops & Roadside Photo Stalls',
    mustKnowTip: 'Check weather forecasts for flash flood warnings before hiking narrow canyon passes, and enjoy free walking along the sheer limestone walls.',
    localSecret: 'Drive up the famous "Tisdrine" hairpins in Dades Valley around 17:00 for golden-hour views of the serpent road and red rock formations.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'todra_dades'),
    scamCount: countCityScams('todra_dades'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'todra_dades').length,
    savvyTipsTotal: 23
  },
  {
    cityId: 'paradise_valley',
    overallSavvyScore: 8.7,
    dataCompleteness: 83,
    communityActivityScore: 8.2,
    topScamCategories: [
      { category: 'transport', count: 2 },
      { category: 'restaurant', count: 2 }
    ],
    savviestNeighborhood: 'Tamraght River Gorge Trails',
    trickiestNeighborhood: 'Parking Lot Exit & Unregulated Guide Touts',
    mustKnowTip: 'Parking at the valley entrance costs 10-20 MAD; decline pushy tour guide offers as the river trail is single-path and easy to follow.',
    localSecret: 'Hike 15 minutes beyond the first commercial pool shacks to reach deep, crystal-clear turquoise swimming holes surrounded by date palms.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'paradise_valley'),
    scamCount: countCityScams('paradise_valley'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'paradise_valley').length,
    savvyTipsTotal: 18
  },
  {
    cityId: 'saidia',
    overallSavvyScore: 8.8,
    dataCompleteness: 82,
    communityActivityScore: 8.0,
    topScamCategories: [
      { category: 'transport', count: 2 },
      { category: 'restaurant', count: 2 }
    ],
    savviestNeighborhood: 'Saidia Marina & Beachfront Resorts',
    trickiestNeighborhood: 'Summer Beach Jet Ski Rentals & Unofficial Parking',
    mustKnowTip: 'Saidia features wide Mediterranean beaches and gated resort complexes; agree on jet-ski and quad rental times/prices in writing beforehand.',
    localSecret: 'Visit the nearby Moulouya River Estuary Nature Reserve for peaceful coastal birdwatching, flamingos, and calm sunset views.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'saidia' || n.cityId === 'nador'),
    scamCount: countCityScams('saidia'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'saidia').length,
    savvyTipsTotal: 17
  },
  {
    cityId: 'taroudant_tafraoute',
    overallSavvyScore: 9.2,
    dataCompleteness: 86,
    communityActivityScore: 8.5,
    topScamCategories: [
      { category: 'shopping', count: 2 },
      { category: 'street', count: 1 }
    ],
    savviestNeighborhood: 'Taroudant Ramparts / Tafraoute Ameln Valley',
    trickiestNeighborhood: 'Tanneries Gate & Bab El Khemis Market Entry',
    mustKnowTip: 'Taroudant (the "Little Marrakech") has relaxed, unhurried souks; explore the leather and silver bazaars without aggressive merchant pressure.',
    localSecret: 'Rent a bicycle in Tafraoute to explore Jean Verame’s giant Painted Rocks in the desert landscape surrounded by granite mountains.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'taroudant_tafraoute' || n.cityId === 'taroudant'),
    scamCount: countCityScams('taroudant_tafraoute'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'taroudant_tafraoute').length,
    savvyTipsTotal: 21
  },
  {
    cityId: 'skoura_draa',
    overallSavvyScore: 9.3,
    dataCompleteness: 85,
    communityActivityScore: 8.4,
    topScamCategories: [
      { category: 'street', count: 1 },
      { category: 'transport', count: 1 }
    ],
    savviestNeighborhood: 'Skoura Palmeraie Kasbah District',
    trickiestNeighborhood: 'N9 Highway Oasis Entry Turns',
    mustKnowTip: 'Skoura’s palm grove is exceptionally tranquil; hire a local mule or bicycle guide from your eco-lodge for authentic kasbah heritage tours.',
    localSecret: 'Visit Kasbah Amerhidil, featured on the 50 Dirham banknote, for a fascinating look inside 17th-century mudbrick architectural engineering.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'skoura_draa'),
    scamCount: countCityScams('skoura_draa'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'skoura_draa').length,
    savvyTipsTotal: 19
  },
  {
    cityId: 'moulay_idriss',
    overallSavvyScore: 9.0,
    dataCompleteness: 83,
    communityActivityScore: 8.1,
    topScamCategories: [
      { category: 'street', count: 2 },
      { category: 'transport', count: 1 }
    ],
    savviestNeighborhood: 'Hillside Medina & Place Khiber',
    trickiestNeighborhood: 'Mausoleum Outer Gates (Non-Muslim entry limits)',
    mustKnowTip: 'Non-Muslims cannot enter the inner shrine of Moulay Idriss I, but the surrounding hillside terraces offer gorgeous views and welcoming cafes.',
    localSecret: 'Walk the scenic 4km countryside path connecting Moulay Idriss Zerhoun directly to the Roman ruins of Volubilis through olive groves.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'moulay_idriss'),
    scamCount: countCityScams('moulay_idriss'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'moulay_idriss').length,
    savvyTipsTotal: 18
  },
  {
    cityId: 'larache',
    overallSavvyScore: 8.6,
    dataCompleteness: 81,
    communityActivityScore: 7.9,
    topScamCategories: [
      { category: 'transport', count: 2 },
      { category: 'restaurant', count: 2 }
    ],
    savviestNeighborhood: 'Balcon d’Atlantique & Place de la Libération',
    trickiestNeighborhood: 'Port Seafood Market Stalls',
    mustKnowTip: 'Enjoy fresh Atlantic seafood at the central plaza cafes; confirm portion sizes and prices before ordering at unpriced harbor stalls.',
    localSecret: 'Visit the Phoenician and Roman ruins of Lixus perched above the Loukkos river for quiet archaeological walks with no crowds.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'larache' || n.cityId === 'kenitra'),
    scamCount: countCityScams('larache'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'larache').length,
    savvyTipsTotal: 17
  },
  {
    cityId: 'sidi_ifni',
    overallSavvyScore: 9.2,
    dataCompleteness: 84,
    communityActivityScore: 8.3,
    topScamCategories: [
      { category: 'transport', count: 1 },
      { category: 'shopping', count: 1 }
    ],
    savviestNeighborhood: 'Art Deco Town Center & Beach Esplanade',
    trickiestNeighborhood: 'Legzira Beach Arch Path (Watch tide times)',
    mustKnowTip: 'Always check ocean tide tables before walking to Legzira Beach red stone arches to ensure safe return before high tide.',
    localSecret: 'Admire the 1930s Spanish Art Deco naval architecture around Place Hassan II, including the old lighthouse and governor’s palace.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'sidi_ifni' || n.cityId === 'tiznit'),
    scamCount: countCityScams('sidi_ifni'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'sidi_ifni').length,
    savvyTipsTotal: 19
  },
  {
    cityId: 'berkane',
    overallSavvyScore: 8.8,
    dataCompleteness: 80,
    communityActivityScore: 7.8,
    topScamCategories: [
      { category: 'transport', count: 2 },
      { category: 'shopping', count: 1 }
    ],
    savviestNeighborhood: 'Central Avenue & Orange Market District',
    trickiestNeighborhood: 'Grand Taxi Station (Confirm seat fares)',
    mustKnowTip: 'Berkane is Morocco’s citrus capital; enjoy ultra-fresh clementine juices and peaceful local market walks at regional prices.',
    localSecret: 'Take a short drive into the Beni Snassen Mountains and Zegzel Gorge to visit the Grotte des Chameaux and cool mountain orchards.',
    neighborhoods: neighborhoodIntelDB.filter(n => n.cityId === 'berkane'),
    scamCount: countCityScams('berkane'),
    placeIntelCount: placeIntelDB.filter(p => p.cityId === 'berkane').length,
    savvyTipsTotal: 16
  }
];

export interface SavvyCityOption {
  id: string;
  name: string;
  emoji: string;
  region?: string;
}

const ALL_CITY_METADATA: SavvyCityOption[] = [
  { id: 'marrakech', name: 'Marrakech', emoji: '🕌', region: 'High Atlas / Central' },
  { id: 'fes', name: 'Fes', emoji: '📦', region: 'Fes-Meknes' },
  { id: 'casablanca', name: 'Casablanca', emoji: '🏙️', region: 'Coastal Capital' },
  { id: 'tangier', name: 'Tangier', emoji: '🎨', region: 'Strait of Gibraltar' },
  { id: 'chefchaouen', name: 'Chefchaouen', emoji: '🔷', region: 'Rif Mountains' },
  { id: 'agadir', name: 'Agadir', emoji: '🏖️', region: 'Souss Coast' },
  { id: 'taghazout', name: 'Taghazout', emoji: '🏄‍♂️', region: 'Surf Coast' },
  { id: 'essaouira', name: 'Essaouira', emoji: '🌊', region: 'Atlantic Coast' },
  { id: 'rabat', name: 'Rabat', emoji: '🏛️', region: 'Capital City' },
  { id: 'dakhla', name: 'Dakhla', emoji: '🪁', region: 'Sahara Lagoon' },
  { id: 'merzouga', name: 'Merzouga', emoji: '🐪', region: 'Sahara Dunes' },
  { id: 'ouarzazate', name: 'Ouarzazate', emoji: '🎬', region: 'Sahara Gateway' },
  { id: 'meknes', name: 'Meknes', emoji: '🏛️', region: 'Imperial City' },
  { id: 'al_hoceima', name: 'Al Hoceima', emoji: '🏖️', region: 'Mediterranean Coast' },
  { id: 'ifrane', name: 'Ifrane', emoji: '🌲', region: 'Middle Atlas' },
  { id: 'azrou', name: 'Azrou', emoji: '🌲', region: 'Middle Atlas Cedar Forest' },
  { id: 'tetouan', name: 'Tetouan', emoji: '🏛️', region: 'Andalusian North' },
  { id: 'martil', name: 'Martil', emoji: '🏖️', region: 'Northern Coast' },
  { id: 'fnideq', name: 'Fnideq', emoji: '🏖️', region: 'Border Coast' },
  { id: 'mdiq', name: "M'diq", emoji: '⛵', region: 'Riviera Port' },
  { id: 'el_jadida', name: 'El Jadida', emoji: '🏰', region: 'Atlantic Ramparts' },
  { id: 'imsouane', name: 'Imsouane', emoji: '🏄‍♂️', region: 'Atlantic Pointbreak' },
  { id: 'asilah', name: 'Asilah', emoji: '🎨', region: 'Arts Medina' },
  { id: 'oualidia', name: 'Oualidia', emoji: '🦩', region: 'Oyster Lagoon' },
  { id: 'mhamid', name: "M'Hamid", emoji: '🐪', region: 'Deep Sahara' },
  { id: 'imlil_toubkal', name: 'Imlil & Toubkal', emoji: '🏔️', region: 'High Atlas Peaks' },
  { id: 'ourika', name: 'Ourika Valley', emoji: '🌊', region: 'High Atlas Valley' },
  { id: 'ouzoud', name: 'Ouzoud Waterfalls', emoji: '💦', region: 'Middle Atlas Cascades' },
  { id: 'todra_dades', name: 'Todra & Dades Gorges', emoji: '🏜️', region: 'Atlas Canyons' },
  { id: 'paradise_valley', name: 'Paradise Valley', emoji: '🌴', region: 'High Atlas Oasis' },
  { id: 'saidia', name: 'Saidia', emoji: '🏖️', region: 'Mediterranean Coast' },
  { id: 'oukaimeden', name: 'Oukaimeden', emoji: '⛷️', region: 'High Atlas Ski' },
  { id: 'taroudant', name: 'Taroudant', emoji: '🏰', region: 'Souss Valley' },
  { id: 'tafraoute', name: 'Tafraoute', emoji: '🪨', region: 'Anti-Atlas Granite' },
  { id: 'skoura_draa', name: 'Skoura & Draa Valley', emoji: '🌴', region: 'Oasis Kasbahs' },
  { id: 'moulay_idriss', name: 'Moulay Idriss Zerhoun', emoji: '🕌', region: 'Holy Hilltown' },
  { id: 'kenitra', name: 'Kenitra', emoji: '🌾', region: 'Atlantic Coast' },
  { id: 'nador', name: 'Nador', emoji: '🏖️', region: 'Marchica Lagoon' },
  { id: 'moulay_bousselham', name: 'Moulay Bousselham', emoji: '🦩', region: 'Lagoon Reserve' },
  { id: 'tiznit', name: 'Tiznit', emoji: '💍', region: 'Silver Craft Coast' },
  { id: 'sidi_ifni', name: 'Sidi Ifni', emoji: '🌊', region: 'Art Deco Coast' },
  { id: 'mirleft', name: 'Mirleft', emoji: '🏄‍♂️', region: 'Coastal Cliffs' },
  { id: 'zagora', name: 'Zagora', emoji: '🐪', region: 'Draa Valley Gateway' },
  { id: 'bin_el_ouidane', name: 'Bin El Ouidane', emoji: '🏔️', region: 'Atlas Lake' },
  { id: 'larache', name: 'Larache', emoji: '🏛️', region: 'Atlantic North' },
  { id: 'berkane', name: 'Berkane', emoji: '🍊', region: 'Eastern Oasis' },
  { id: 'ifrane_azrou', name: 'Ifrane & Azrou', emoji: '🌲', region: 'Middle Atlas' },
  { id: 'tetouan_martil', name: 'Tetouan & Martil', emoji: '🏛️', region: 'Andalusian North' }
];

/**
 * FILTERED LIST: Only Touristic and Mixed tourism status cities
 * Derived from SAVVY_TOURISTIC_CITY_IDS (tourismAreas.ts)
 */
export const ALL_SAVVY_CITIES: SavvyCityOption[] = ALL_CITY_METADATA.filter(
  (city) => SAVVY_TOURISTIC_CITY_IDS.includes(city.id)
);

