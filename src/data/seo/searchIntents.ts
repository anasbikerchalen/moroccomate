export interface SearchIntent {
  slug: string;
  label: string;
  icon: string;
  category: 'sleep' | 'things-to-do' | 'food' | 'shopping';
  matchTags: string[];
  seoTitle: (cityLabel: string) => string;
  seoDescription: (cityLabel: string) => string;
  headerTitle: (cityLabel: string) => string;
}

export const SLEEP_SEARCH_INTENTS: Record<string, SearchIntent> = {
  'on-the-beach': {
    slug: 'on-the-beach',
    label: 'On the Beach',
    icon: '🏖️',
    category: 'sleep',
    matchTags: ['beachfront', 'beach', 'private-beach', 'direct beach access'],
    seoTitle: (city) => `Best Hotels on the Beach in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Explore handpicked beachfront hotels and oceanfront resorts in ${city}. Verified reviews, private beach spots, and live availability.`,
    headerTitle: (city) => `Hotels on the Beach in ${city}`
  },
  'all-inclusive': {
    slug: 'all-inclusive',
    label: 'All Inclusive',
    icon: '🍹',
    category: 'sleep',
    matchTags: ['all-inclusive', 'all inclusive'],
    seoTitle: (city) => `Top All-Inclusive Resorts in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Discover the best all-inclusive resorts in ${city}. Full dining, drinks, family activities, and relaxing amenities handpicked for you.`,
    headerTitle: (city) => `All-Inclusive Hotels in ${city}`
  },
  'waterslides': {
    slug: 'waterslides',
    label: 'With Waterslides',
    icon: '💦',
    category: 'sleep',
    matchTags: ['waterslides', 'water-park', 'slides', 'aqua park', 'water park'],
    seoTitle: (city) => `Hotels with Waterslides & Water Parks in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Fun family resorts with water slides and aqua parks in ${city}. Splash zones, heated pools, and verified kid-friendly facilities.`,
    headerTitle: (city) => `Hotels with Waterslides in ${city}`
  },
  'heated-pools': {
    slug: 'heated-pools',
    label: 'Heated Pools',
    icon: '🏊',
    category: 'sleep',
    matchTags: ['heated-pool', 'heated pool', 'saltwater pool', 'heated outdoor pool'],
    seoTitle: (city) => `Hotels with Heated Pools in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Find year-round swimming comfort at the top hotels with heated pools in ${city}. Tested and confirmed by real guest feedback.`,
    headerTitle: (city) => `Hotels with Heated Pools in ${city}`
  },
  '5-star': {
    slug: '5-star',
    label: '5-Star Luxury',
    icon: '👑',
    category: 'sleep',
    matchTags: ['5-star', '5 star', 'luxury', 'palace'],
    seoTitle: (city) => `Best 5-Star Luxury Hotels in ${city} | Moroccan Mate`,
    seoDescription: (city) => `The finest 5-star hotels and luxury retreats in ${city}. World-class spas, fine dining, and elite Moroccan hospitality.`,
    headerTitle: (city) => `5-Star Luxury Hotels in ${city}`
  },
  'private-beach': {
    slug: 'private-beach',
    label: 'Private Beach',
    icon: '🏝️',
    category: 'sleep',
    matchTags: ['private-beach', 'private beach'],
    seoTitle: (city) => `Hotels with Private Beach in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Relax on secluded sands with exclusive private beach hotels in ${city}. Sun loungers, ocean service, and serene views.`,
    headerTitle: (city) => `Hotels with Private Beach in ${city}`
  },
  'kids-club': {
    slug: 'kids-club',
    label: 'With Kids Club',
    icon: '👶',
    category: 'sleep',
    matchTags: ['kids-club', 'kids club', 'family-friendly', 'kids-friendly'],
    seoTitle: (city) => `Family Hotels with Kids Clubs in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Family-tested resorts in ${city} featuring supervised kids clubs, creative activities, and spacious family suites.`,
    headerTitle: (city) => `Hotels with Kids Club in ${city}`
  },
  'swim-up-rooms': {
    slug: 'swim-up-rooms',
    label: 'Swim-Up Rooms',
    icon: '🌊',
    category: 'sleep',
    matchTags: ['swim-up-rooms', 'swim-up', 'direct pool access', 'swim up'],
    seoTitle: (city) => `Hotels with Swim-Up Rooms & Pool Access in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Step straight from your terrace into the water. Discover premier resorts in ${city} offering swim-up rooms and direct pool suites.`,
    headerTitle: (city) => `Hotels with Swim-Up Rooms in ${city}`
  },
  'nightclubs': {
    slug: 'nightclubs',
    label: 'With Nightclub',
    icon: '🪩',
    category: 'sleep',
    matchTags: ['nightclub', 'nightclubs', 'nightlife', 'evening entertainment'],
    seoTitle: (city) => `Hotels with Nightclubs & Nightlife in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Lively resorts and hotels in ${city} with on-site nightclubs, DJ lounges, and vibrant evening entertainment.`,
    headerTitle: (city) => `Hotels with Nightclubs in ${city}`
  },
  'indoor-pool': {
    slug: 'indoor-pool',
    label: 'Indoor Pool',
    icon: '🏛️',
    category: 'sleep',
    matchTags: ['indoor-pool', 'indoor pool', 'thalasso pool'],
    seoTitle: (city) => `Hotels with Indoor Pools in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Unwind indoors with serene indoor pool and thalassotherapy wellness hotels in ${city}.`,
    headerTitle: (city) => `Hotels with Indoor Pools in ${city}`
  },
  'private-pool': {
    slug: 'private-pool',
    label: 'Private Pool',
    icon: '🏊',
    category: 'sleep',
    matchTags: ['private-pool', 'private pool', 'private plunge pool', 'private-rooftop-pool', 'private heated pool', 'pool villa'],
    seoTitle: (city) => `Hotels & Riads with Private Pool in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Experience supreme intimacy in ${city} with luxury villas and private riads featuring their own secluded pools.`,
    headerTitle: (city) => `Hotels & Riads with Private Pool in ${city}`
  },
  'golf-course': {
    slug: 'golf-course',
    label: 'Golf Course',
    icon: '⛳',
    category: 'sleep',
    matchTags: ['golf', 'golf-course', 'golf course', 'championship golf', 'amelkis golf', 'golf resort'],
    seoTitle: (city) => `Best Golf Resorts & Hotels in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Tee off at premier golf resorts in ${city}. Championship courses, Atlas Mountain fairways, and luxury clubhouse suites.`,
    headerTitle: (city) => `Hotels with Golf Course in ${city}`
  },
  'spa': {
    slug: 'spa',
    label: 'Luxury Spa',
    icon: '🌿',
    category: 'sleep',
    matchTags: ['spa', 'hammam', 'wellness', 'massage', 'thalasso', 'chenot spa', 'luxury spa'],
    seoTitle: (city) => `Best Luxury Spa & Hammam Hotels in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Recharge at the finest luxury spa and traditional hammam hotels in ${city}. Argan oil rituals, wellness suites, and world-class treatments.`,
    headerTitle: (city) => `Hotels with Luxury Spa in ${city}`
  },
  'airport-shuttle': {
    slug: 'airport-shuttle',
    label: 'Airport Shuttle',
    icon: '🚐',
    category: 'sleep',
    matchTags: ['airport-shuttle', 'airport shuttle', 'airport transfer', 'shuttle', 'free airport shuttle', 'airport transit'],
    seoTitle: (city) => `Hotels with Airport Shuttle in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Convenient hotels in ${city} offering direct airport shuttle and transfer services. Ideal for business, early flights, and hassle-free transit.`,
    headerTitle: (city) => `Hotels with Airport Shuttle in ${city}`
  },
  'ocean-view': {
    slug: 'ocean-view',
    label: 'Ocean View',
    icon: '🌊',
    category: 'sleep',
    matchTags: ['ocean-view', 'ocean view', 'sea view', 'corniche', 'atlantic view', 'oceanfront', 'coastline view'],
    seoTitle: (city) => `Hotels with Ocean & Sea Views in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Wake up to stunning Atlantic ocean views in ${city}. Curated coastal hotels, seaside balconies, and scenic Corniche suites.`,
    headerTitle: (city) => `Hotels with Ocean View in ${city}`
  },
  'rooftop-bar': {
    slug: 'rooftop-bar',
    label: 'Rooftop Bar',
    icon: '🍸',
    category: 'sleep',
    matchTags: ['rooftop-bar', 'rooftop bar', 'sky bar', 'skybar', 'rooftop lounge', 'panoramic bar', 'sky 28'],
    seoTitle: (city) => `Hotels with Rooftop Bars in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Sip cocktails above the city skyline. Handpicked hotels in ${city} featuring panoramic rooftop bars, lounges, and sunset terraces.`,
    headerTitle: (city) => `Hotels with Rooftop Bar in ${city}`
  },
  'pool': {
    slug: 'pool',
    label: 'With Pool',
    icon: '🏊',
    category: 'sleep',
    matchTags: ['pool', 'swimming pool', 'outdoor pool', 'swimming-pool', 'lap pool', 'heated pool'],
    seoTitle: (city) => `Hotels with Swimming Pools in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Discover top-rated hotels in ${city} with swimming pools, outdoor sun decks, and relaxing plunge pools.`,
    headerTitle: (city) => `Hotels with Pool in ${city}`
  },
  'rooftop-terrace': {
    slug: 'rooftop-terrace',
    label: 'Rooftop Terrace',
    icon: '🌇',
    category: 'sleep',
    matchTags: ['rooftop-terrace', 'rooftop terrace', 'rooftop', 'panoramic terrace', 'rooftop view', 'terrace view', 'roof terrace', 'sunset terrace'],
    seoTitle: (city) => `Hotels & Riads with Rooftop Terrace in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Enjoy panoramic views across ${city} from stunning rooftop terraces. Sunset drinks, medina vistas, and open-air lounges.`,
    headerTitle: (city) => `Hotels & Riads with Rooftop Terrace in ${city}`
  },
  'in-medina': {
    slug: 'in-medina',
    label: 'In Old Medina',
    icon: '🕌',
    category: 'sleep',
    matchTags: ['medina', 'old medina', 'fes el-bali', 'in-medina', 'medina riad', 'historic medina', 'inside medina', 'medina-heart'],
    seoTitle: (city) => `Best Hotels & Riads in the Medina of ${city} | Moroccan Mate`,
    seoDescription: (city) => `Immerse yourself in authentic Moroccan culture with top riads and hotels located inside the UNESCO-listed Medina of ${city}.`,
    headerTitle: (city) => `Hotels & Riads in Old Medina ${city}`
  },
  'mountain-view': {
    slug: 'mountain-view',
    label: 'Mountain View',
    icon: '🏔️',
    category: 'sleep',
    matchTags: ['mountain-view', 'mountain view', 'rif mountains', 'mountain vista', 'panoramic view', 'valley view', 'mountain'],
    seoTitle: (city) => `Hotels with Mountain Views in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Wake up to breathtaking Rif and Atlas mountain vistas in ${city}. Panoramic valley terraces, hillside boutique riads, and serene scenic retreats.`,
    headerTitle: (city) => `Hotels with Mountain Views in ${city}`
  },
  'surf-hotels': {
    slug: 'surf-hotels',
    label: 'Surf Hotels & Camps',
    icon: '🏄‍♂️',
    category: 'sleep',
    matchTags: ['surf', 'surf-camp', 'surf-hotel', 'surf camp', 'surfing', 'surf school', 'surf lodge', 'surf resort'],
    seoTitle: (city) => `Best Surf Hotels & Camps in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Catch world-class Atlantic waves with top-rated surf hotels, beachfront surf camps, and surf & yoga lodges in ${city}.`,
    headerTitle: (city) => `Surf Hotels & Camps in ${city}`
  },
  'lagoon-view': {
    slug: 'lagoon-view',
    label: 'Lagoon View',
    icon: '🌊',
    category: 'sleep',
    matchTags: ['lagoon-view', 'lagoon view', 'dakhla lagoon', 'lagoon front', 'lagoon', 'bay view', 'lagoon-front'],
    seoTitle: (city) => `Hotels & Eco-Lodges with Lagoon Views in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Wake up to crystal-clear turquoise waters in ${city}. Handpicked bungalows, waterfront eco-lodges, and luxury camps overlooking the lagoon.`,
    headerTitle: (city) => `Hotels & Lodges with Lagoon View in ${city}`
  },
  'kitesurf-hotels': {
    slug: 'kitesurf-hotels',
    label: 'Kitesurf Hotels & Camps',
    icon: '🪁',
    category: 'sleep',
    matchTags: ['kitesurf', 'kite camp', 'kite hotel', 'kitesurfing', 'kite school', 'kite spot', 'kitesurf hotel', 'kite-hotel', 'kite-camp'],
    seoTitle: (city) => `Best Kitesurf Hotels & Camps in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Ride world-class wind in ${city}. Top-rated kitesurfing resorts, lagoon camps, gear storage, rescue boat services, and certified IKO schools.`,
    headerTitle: (city) => `Kitesurf Hotels & Camps in ${city}`
  },
  'desert-camps': {
    slug: 'desert-camps',
    label: 'Luxury Desert Camps',
    icon: '⛺',
    category: 'sleep',
    matchTags: ['desert-camp', 'desert camp', 'luxury camp', 'glamping', 'bivouac', 'desert tent', 'canyon camp', 'desert-camps', 'luxury desert camp'],
    seoTitle: (city) => `Luxury Desert Camps & Glamping in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Sleep under the Saharan stars in ${city}. Curated luxury desert camps with private en-suite tents, dune panoramas, and traditional campfires.`,
    headerTitle: (city) => `Luxury Desert Camps in ${city}`
  },
  'dune-view': {
    slug: 'dune-view',
    label: 'Dune Views',
    icon: '🏜️',
    category: 'sleep',
    matchTags: ['dune-view', 'dune view', 'dunes view', 'erg chebbi view', 'dune views', 'sand dunes', 'desert panorama', 'dune front', 'dune-front'],
    seoTitle: (city) => `Hotels & Desert Camps with Dune Views in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Wake up to breathtaking golden Erg Chebbi sand dunes in ${city}. Kasbahs and desert camps right on the edge of the desert.`,
    headerTitle: (city) => `Hotels & Camps with Dune Views in ${city}`
  },
  'private-bathroom': {
    slug: 'private-bathroom',
    label: 'Private Bathroom',
    icon: '🚿',
    category: 'sleep',
    matchTags: ['private-bathroom', 'private bathroom', 'ensuite', 'en-suite', 'private shower', 'flush toilet', 'ensuite bathroom', 'en-suite bathroom', 'private wc'],
    seoTitle: (city) => `Desert Camps with Private En-Suite Bathrooms in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Enjoy Sahara glamping in luxury with private en-suite flush toilets and hot running showers in ${city}.`,
    headerTitle: (city) => `Desert Camps with Private Bathrooms in ${city}`
  },
  'camel-ride': {
    slug: 'camel-ride',
    label: 'Camel Trek & Tours',
    icon: '🐪',
    category: 'sleep',
    matchTags: ['camel-ride', 'camel ride', 'camel trek', 'sunset camel', 'camel safari', 'camel trekking', 'dromedary'],
    seoTitle: (city) => `Desert Camps with Camel Rides & Sunset Treks in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Experience iconic Saharan camel treks across the Erg Chebbi dunes departing directly from your luxury camp or kasbah in ${city}.`,
    headerTitle: (city) => `Desert Camps & Hotels with Camel Rides in ${city}`
  },
  'air-conditioning': {
    slug: 'air-conditioning',
    label: 'Air Conditioning',
    icon: '❄️',
    category: 'sleep',
    matchTags: ['air conditioning', 'air-conditioning', 'a/c', 'ac', 'climate control', 'heated tent', 'cooling'],
    seoTitle: (city) => `Hotels & Desert Camps with Air Conditioning in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Stay cool in the Sahara heat with climate-controlled luxury desert tents and air-conditioned kasbah rooms in ${city}.`,
    headerTitle: (city) => `Hotels & Desert Camps with Air Conditioning in ${city}`
  },
  'parking': {
    slug: 'parking',
    label: 'With Parking',
    icon: '🅿️',
    category: 'sleep',
    matchTags: ['parking', 'free parking', 'valet', 'secure parking', 'on-site parking', 'garage'],
    seoTitle: (city) => `Hotels with Parking in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Hassle-free stays in ${city} with secure on-site parking, valet service, or convenient private garages.`,
    headerTitle: (city) => `Hotels with Parking in ${city}`
  },
  'kasbah-hotels': {
    slug: 'kasbah-hotels',
    label: 'Kasbah Architecture',
    icon: '🏰',
    category: 'sleep',
    matchTags: ['kasbah', 'kasbah architecture', 'ksar', 'adobe', 'earthen', 'kasbah-hotels'],
    seoTitle: (city) => `Historic Kasbah Hotels & Lodges in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Stay in authentic earthen fortress kasbahs and restored desert ksars in ${city}. Traditional adobe architecture, palmeraie gardens, and Saharan hospitality.`,
    headerTitle: (city) => `Kasbah Hotels & Lodges in ${city}`
  },
  'desert-view': {
    slug: 'desert-view',
    label: 'Desert & Mountain Views',
    icon: '🏜️',
    category: 'sleep',
    matchTags: ['desert-view', 'desert view', 'mountain view', 'atlas view', 'palmeraie view', 'desert-panorama', 'valley view'],
    seoTitle: (city) => `Hotels with Desert & Mountain Views in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Spectacular views across desert plateaus, palm oases, and snowcapped Atlas peaks in ${city}. Panoramic terraces and scenic retreats.`,
    headerTitle: (city) => `Hotels with Desert & Mountain Views in ${city}`
  },
  'family-rooms': {
    slug: 'family-rooms',
    label: 'Family Rooms',
    icon: '👨‍👩‍👧‍👦',
    category: 'sleep',
    matchTags: ['family-rooms', 'family-friendly', 'family suite', 'kids', 'family room', 'adjoining rooms'],
    seoTitle: (city) => `Family-Friendly Hotels with Family Rooms in ${city} | Moroccan Mate`,
    seoDescription: (city) => `Comfortable and spacious family rooms and multi-bedroom suites in ${city}. Kid-friendly pools, gardens, and relaxing amenities for all ages.`,
    headerTitle: (city) => `Hotels with Family Rooms in ${city}`
  },
};

/**
 * Top high-intent search queries per city in priority order.
 * Grounded in the search volume documented in /people_search_for.md
 */
export const CITY_SEARCH_INTENTS: Record<string, Record<string, string[]>> = {
  agadir: {
    sleep: [
      'on-the-beach',
      'waterslides',
      'heated-pools',
      'all-inclusive',
      '5-star',
      'private-beach',
      'kids-club',
      'swim-up-rooms',
      'nightclubs'
    ]
  },
  marrakech: {
    sleep: [
      'heated-pools',
      'private-pool',
      'waterslides',
      'all-inclusive',
      '5-star',
      'golf-course',
      'kids-club',
      'spa',
      'swim-up-rooms'
    ]
  },
  casablanca: {
    sleep: [
      'airport-shuttle',
      'ocean-view',
      '5-star',
      'pool',
      'rooftop-bar',
      'spa'
    ]
  },
  fes: {
    sleep: [
      'pool',
      'rooftop-terrace',
      '5-star',
      'in-medina',
      'spa',
      'heated-pools',
      'airport-shuttle'
    ]
  },
  essaouira: {
    sleep: [
      'ocean-view',
      'heated-pools',
      'on-the-beach',
      'pool',
      'rooftop-terrace',
      'in-medina',
      'spa',
      '5-star'
    ]
  },
  tangier: {
    sleep: [
      'ocean-view',
      'on-the-beach',
      'pool',
      '5-star',
      'spa',
      'rooftop-terrace',
      'in-medina',
      'airport-shuttle'
    ]
  },
  chefchaouen: {
    sleep: [
      'mountain-view',
      'pool',
      'rooftop-terrace',
      'in-medina',
      'spa',
      '5-star',
      'airport-shuttle'
    ]
  },
  taghazout: {
    sleep: [
      'on-the-beach',
      'surf-hotels',
      'pool',
      'ocean-view',
      'all-inclusive',
      '5-star',
      'spa',
      'heated-pools',
      'private-beach',
      'swim-up-rooms'
    ]
  },
  dakhla: {
    sleep: [
      'on-the-beach',
      'lagoon-view',
      'kitesurf-hotels',
      'all-inclusive',
      'pool',
      'desert-camps',
      '5-star',
      'private-beach',
      'airport-shuttle',
      'spa'
    ]
  },
  merzouga: {
    sleep: [
      'desert-camps',
      'pool',
      'dune-view',
      'private-bathroom',
      'camel-ride',
      'air-conditioning',
      '5-star',
      'airport-shuttle',
      'spa',
      'family-friendly'
    ]
  },
  rabat: {
    sleep: [
      'pool',
      '5-star',
      'ocean-view',
      'in-medina',
      'airport-shuttle',
      'spa',
      'rooftop-terrace',
      'parking'
    ]
  },
  ouarzazate: {
    sleep: [
      'pool',
      'kasbah-hotels',
      '5-star',
      'desert-view',
      'spa',
      'family-rooms'
    ]
  },
};

/**
 * Resolves a search intent for a given category & slug
 */
export function getSearchIntent(category: string, slug: string): SearchIntent | undefined {
  if (category === 'sleep' || category === 'stay') {
    return SLEEP_SEARCH_INTENTS[slug];
  }
  return undefined;
}

/**
 * Retrieves the curated list of popular search intents for a city & category
 */
export function getCityPopularIntents(cityId: string, category: string): SearchIntent[] {
  const normCity = cityId.toLowerCase();
  const normCat = category === 'sleep' || category === 'stay' ? 'sleep' : category;
  
  const slugs = CITY_SEARCH_INTENTS[normCity]?.[normCat] || (
    normCat === 'sleep' ? Object.keys(SLEEP_SEARCH_INTENTS).slice(0, 7) : []
  );

  return slugs
    .map(slug => getSearchIntent(normCat, slug))
    .filter((intent): intent is SearchIntent => !!intent);
}

/**
 * Evaluates whether a listing matches a search intent
 */
export function doesListingMatchIntent(item: any, intent: SearchIntent): boolean {
  if (!item || !intent) return false;

  // Direct boolean amenity matching
    if (intent.slug === 'parking' && (item.logistics?.parking || item.amenities?.some((a: string) => a.toLowerCase().includes('parking')) || item.tags?.includes('parking'))) return true;
  if (intent.slug === 'kasbah-hotels' && (item.type === 'kasbah' || item.vibeTags?.some((v: string) => v.toLowerCase().includes('kasbah') || v.toLowerCase().includes('ksar')) || item.description?.toLowerCase().includes('kasbah') || item.tags?.includes('kasbah-hotels') || item.name?.toLowerCase().includes('kasbah') || item.name?.toLowerCase().includes('ksar'))) return true;
  if (intent.slug === 'desert-view' && (item.vibeTags?.some((v: string) => v.toLowerCase().includes('desert') || v.toLowerCase().includes('panoramic') || v.toLowerCase().includes('view')) || item.description?.toLowerCase().includes('view') || item.tags?.includes('desert-view') || item.roomFeatures?.some((r: string) => r.toLowerCase().includes('view')))) return true;
  if (intent.slug === 'family-rooms' && (item.kidsStayFree || item.groupTypes?.includes('family') || item.tags?.includes('family-favorite') || item.tags?.includes('family-rooms') || item.roomTypes?.some((r: any) => r.name?.toLowerCase().includes('family')))) return true;
  if (intent.slug === 'pool' && item.hasPool) return true;
  if (intent.slug === 'rooftop-terrace' && (item.hasRooftop || item.hasBar || item.amenities?.some((a: string) => a.toLowerCase().includes('rooftop')))) return true;
  if (intent.slug === 'in-medina' && (item.nearMedina || item.locationFeel === 'medina-heart' || item.neighborhood?.toLowerCase().includes('medina') || item.locationSummary?.toLowerCase().includes('medina') || item.type === 'riad')) return true;
  if (intent.slug === 'on-the-beach' && (item.nearBeach || item.locationSummary?.toLowerCase().includes('beach') || item.neighborhood?.toLowerCase().includes('beach'))) return true;
  if (intent.slug === 'ocean-view' && (item.vibeTags?.some((v: string) => v.toLowerCase().includes('ocean') || v.toLowerCase().includes('scenic')) || item.amenities?.some((a: string) => a.toLowerCase().includes('ocean') || a.toLowerCase().includes('sea view')))) return true;
  if (intent.slug === 'mountain-view' && (item.vibeTags?.some((v: string) => v.toLowerCase().includes('mountain') || v.toLowerCase().includes('rif') || v.toLowerCase().includes('scenic')) || item.amenities?.some((a: string) => a.toLowerCase().includes('mountain')) || item.description?.toLowerCase().includes('mountain view') || item.locationSummary?.toLowerCase().includes('mountain'))) return true;
  if (intent.slug === 'surf-hotels' && (item.vibeTags?.some((v: string) => v.toLowerCase().includes('surf')) || item.amenities?.some((a: string) => a.toLowerCase().includes('surf')) || item.tags?.some((t: string) => t.toLowerCase().includes('surf')) || item.name?.toLowerCase().includes('surf') || item.description?.toLowerCase().includes('surf'))) return true;
  if (intent.slug === 'private-beach' && (item.amenities?.some((a: string) => a.toLowerCase().includes('private beach')) || item.tags?.some((t: string) => t.toLowerCase().includes('private-beach')) || item.description?.toLowerCase().includes('private beach'))) return true;
  if (intent.slug === 'all-inclusive' && (item.amenities?.some((a: string) => a.toLowerCase().includes('all-inclusive') || a.toLowerCase().includes('all inclusive')) || item.tags?.some((t: string) => t.toLowerCase().includes('all-inclusive')) || item.name?.toLowerCase().includes('all inclusive'))) return true;
  if (intent.slug === 'swim-up-rooms' && (item.amenities?.some((a: string) => a.toLowerCase().includes('swim-up') || a.toLowerCase().includes('swim up')) || item.tags?.some((t: string) => t.toLowerCase().includes('swim-up')))) return true;
  if (intent.slug === 'lagoon-view' && (item.roomFeatures?.some((r: string) => r.toLowerCase().includes('lagoon')) || item.vibeTags?.some((v: string) => v.toLowerCase().includes('lagoon')) || item.amenities?.some((a: string) => a.toLowerCase().includes('lagoon')) || item.description?.toLowerCase().includes('lagoon') || item.neighborhood?.toLowerCase().includes('lagoon') || item.tags?.some((t: string) => t.toLowerCase().includes('lagoon')))) return true;
  if (intent.slug === 'kitesurf-hotels' && (item.vibeTags?.some((v: string) => v.toLowerCase().includes('kite')) || item.amenities?.some((a: string) => a.toLowerCase().includes('kite')) || item.tags?.some((t: string) => t.toLowerCase().includes('kite')) || item.name?.toLowerCase().includes('kite') || item.description?.toLowerCase().includes('kite') || item.description?.toLowerCase().includes('windhunter'))) return true;
  if (intent.slug === 'desert-camps' && (item.type === 'desert-camp' || item.type === 'camp' || item.vibeTags?.some((v: string) => v.toLowerCase().includes('camp') || v.toLowerCase().includes('tent') || v.toLowerCase().includes('desert')) || item.amenities?.some((a: string) => a.toLowerCase().includes('tent') || a.toLowerCase().includes('camp')) || item.tags?.some((t: string) => t.toLowerCase().includes('camp') || t.toLowerCase().includes('desert-camp')) || item.name?.toLowerCase().includes('camp') || item.description?.toLowerCase().includes('camp') || item.description?.toLowerCase().includes('glamping'))) return true;
  if (intent.slug === 'dune-view' && (item.roomFeatures?.some((r: string) => r.toLowerCase().includes('dune')) || item.vibeTags?.some((v: string) => v.toLowerCase().includes('dune') || v.toLowerCase().includes('erg chebbi')) || item.amenities?.some((a: string) => a.toLowerCase().includes('dune')) || item.description?.toLowerCase().includes('dune') || item.locationSummary?.toLowerCase().includes('dune') || item.tags?.some((t: string) => t.toLowerCase().includes('dune')))) return true;
  if (intent.slug === 'private-bathroom' && (item.hasEnsuite || item.amenities?.some((a: string) => a.toLowerCase().includes('private bathroom') || a.toLowerCase().includes('ensuite') || a.toLowerCase().includes('en-suite') || a.toLowerCase().includes('private shower')) || item.tags?.some((t: string) => t.toLowerCase().includes('private-bathroom') || t.toLowerCase().includes('ensuite')) || item.description?.toLowerCase().includes('private bathroom') || item.description?.toLowerCase().includes('en-suite'))) return true;
  if (intent.slug === 'camel-ride' && (item.amenities?.some((a: string) => a.toLowerCase().includes('camel') || a.toLowerCase().includes('trek')) || item.tags?.some((t: string) => t.toLowerCase().includes('camel')) || item.description?.toLowerCase().includes('camel') || item.vibeTags?.some((v: string) => v.toLowerCase().includes('camel')))) return true;
  if (intent.slug === 'air-conditioning' && (item.hasAC || item.amenities?.some((a: string) => a.toLowerCase().includes('air conditioning') || a.toLowerCase().includes('a/c') || a.toLowerCase().includes('ac ') || a.toLowerCase().includes('climate control')) || item.tags?.some((t: string) => t.toLowerCase().includes('air-conditioning') || t.toLowerCase().includes('ac')) || item.description?.toLowerCase().includes('air conditioning') || item.description?.toLowerCase().includes('air-conditioned'))) return true;

  const pool: string[] = [
    ...(Array.isArray(item.vibeTags) ? item.vibeTags : []),
    ...(Array.isArray(item.tags) ? item.tags : []),
    ...(Array.isArray(item.amenities) ? item.amenities : []),
    String(item.name || ''),
    String(item.description || ''),
    String(item.locationSummary || ''),
    String(item.neighborhood || '')
  ].map(s => String(s).toLowerCase());

  // Check if any match tag exists in the listing data
  return intent.matchTags.some(tag => {
    const normTag = tag.toLowerCase();
    // Direct or substring match
    return pool.some(entry => entry === normTag || entry.includes(normTag));
  });
}
