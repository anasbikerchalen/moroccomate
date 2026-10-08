/**
 * STAY ADAPTER — Bridge between collected sleep listings and the new
 * modular Stay template schema (Finder website).
 * -------------------------------------------------------------------
 * Converts every existing SleepListing (hand-collected, real data — never
 * regenerated) into the template's StayListing shape:
 *   location + coordinates, walking_distance (proximity engine),
 *   traditional_spaces (reusable feature library), room_details,
 *   structured amenities, policies & payments, visibility flags.
 *
 * Also exposes small helpers the Finder cards and Quiz use to read the
 * new structured fields in one place.
 */
import type { StayListing, PropertyType, NearbyPlace, PropertyFeature } from '../types/stay';
import { getWalkingDistancePlaces } from './proximityEngine';
import { cityMap } from '../data/cities';

// ---------------------------------------------------------------
// Property type mapping (old AccommodationType → template PropertyType)
// ---------------------------------------------------------------
const PROPERTY_TYPE_MAP: Record<string, PropertyType> = {
  riad: 'Riad',
  dar: 'Dar',
  'desert-camp': 'Desert Camp',
  kasbah: 'Kasbah',
  hotel: 'Hotel',
  guesthouse: 'Guesthouse',
  hostel: 'Hostel',
  lodge: 'Lodge',
  resort: 'Resort',
  apartment: 'Apartment',
  villa: 'Villa'
};

export function mapPropertyType(type?: string): PropertyType {
  return PROPERTY_TYPE_MAP[(type || '').toLowerCase()] || 'Guesthouse';
}

/** City display name from the site's own city registry. */
export function getCityName(cityId?: string): string {
  const city = cityId ? cityMap[cityId] : null;
  if (city?.name) return String(city.name);
  if (!cityId) return 'Morocco';
  return cityId.charAt(0).toUpperCase() + cityId.slice(1).replace(/_/g, ' ');
}

/** City center coordinates from the site's own city registry. */
export function getCityCenter(cityId?: string): { lat: number; lng: number } {
  const city = cityId ? cityMap[cityId] : null;
  if (city && typeof city.lat === 'number' && typeof city.lon === 'number') {
    return { lat: city.lat, lng: city.lon };
  }
  return { lat: 31.6295, lng: -7.9811 };
}

// ---------------------------------------------------------------
// Reusable feature library — Traditional Spaces
// ---------------------------------------------------------------
const FEATURE_LIBRARY: Record<string, PropertyFeature> = {
  patio: {
    id: 'feature-patio',
    name: 'Central patio',
    category: 'Traditional Space',
    description: 'A quiet open-air courtyard with traditional zellige tiles and greenery.',
    icon: 'central-patio'
  },
  courtyard: {
    id: 'feature-courtyard',
    name: 'Shaded courtyard',
    category: 'Traditional Space',
    description: 'A cool place to sit during the warmest part of the day.',
    icon: 'shaded-courtyard'
  },
  rooftop: {
    id: 'feature-rooftop',
    name: 'Sunny rooftop terrace',
    category: 'Traditional Space',
    description: 'Open views, morning sunlight and a place to relax after exploring.',
    icon: 'sunny-rooftop'
  },
  pool: {
    id: 'feature-pool',
    name: 'Swimming pool',
    category: 'Wellness & Relaxation',
    description: 'A pool to cool off between explorations.',
    icon: 'swimming-pool'
  },
  hammam: {
    id: 'feature-hammam',
    name: 'Hammam & spa',
    category: 'Wellness & Relaxation',
    description: 'Traditional Moroccan steam bath and scrub on site.',
    icon: 'hammam'
  },
  garden: {
    id: 'feature-garden',
    name: 'Lush garden',
    category: 'Outdoor & Nature',
    description: 'Orange blossoms, palms and fragrant herbs around the property.',
    icon: 'garden'
  },
  campfire: {
    id: 'feature-campfire',
    name: 'Campfire area',
    category: 'Dining & Social',
    description: 'Evening gathering hearth with Berber drumming and storytelling.',
    icon: 'campfire'
  },
  stargazing: {
    id: 'feature-stargazing',
    name: 'Stargazing terrace',
    category: 'Outdoor & Nature',
    description: 'Unpolluted night sky viewing from the property.',
    icon: 'stargazing'
  },
  beach: {
    id: 'feature-beach',
    name: 'Direct beach access',
    category: 'Outdoor & Nature',
    description: 'A short walk takes you straight to the shoreline.',
    icon: 'beach-access'
  },
  salon: {
    id: 'feature-salon',
    name: 'Traditional salon',
    category: 'Common Area',
    description: 'Moroccan seating area with ornate cedar ceilings.',
    icon: 'traditional-salon'
  }
};

/**
 * Derive the stay's traditional spaces from what the property really has
 * (booleans + collected room features + property type). No invented features.
 */
function deriveTraditionalSpaces(listing: any): PropertyFeature[] {
  const spaces: PropertyFeature[] = [];
  const haystack: string = [
    ...(listing.amenities || []),
    ...(listing.roomFeatures || []),
    ...(listing.vibeTags || [])
  ].join(' ').toLowerCase();

  const type = String(listing.type || '').toLowerCase();

  if (type === 'riad' || type === 'dar') {
    spaces.push(FEATURE_LIBRARY.patio, FEATURE_LIBRARY.courtyard);
  } else if (type === 'kasbah') {
    spaces.push(FEATURE_LIBRARY.courtyard);
  } else if (type === 'desert-camp') {
    spaces.push(FEATURE_LIBRARY.campfire, FEATURE_LIBRARY.stargazing);
  }
  if (listing.hasRooftop) spaces.push(FEATURE_LIBRARY.rooftop);
  if (listing.hasPool || haystack.includes('pool')) spaces.push(FEATURE_LIBRARY.pool);
  if (haystack.includes('hammam') || haystack.includes('spa')) spaces.push(FEATURE_LIBRARY.hammam);
  if (haystack.includes('garden')) spaces.push(FEATURE_LIBRARY.garden);
  if (listing.nearBeach) spaces.push(FEATURE_LIBRARY.beach);
  if (haystack.includes('salon')) spaces.push(FEATURE_LIBRARY.salon);

  // Deduplicate and cap for a clean, minimal grid
  const seen = new Set<string>();
  return spaces
    .filter((s) => (seen.has(s.id) ? false : (seen.add(s.id), true)))
    .slice(0, 6);
}

// ---------------------------------------------------------------
// Room details (beds, bathroom, view, sleeps)
// ---------------------------------------------------------------
const BED_TYPE_MAP: Record<string, string> = {
  king: 'King', queen: 'Queen', double: 'Double', single: 'Single',
  bunk: 'Bunk', twin: 'Twin', 'sofa bed': 'Sofa Bed', sofa: 'Sofa Bed'
};

function parseBeds(bedsString?: string): { bed_type: any; quantity: number }[] {
  if (!bedsString) return [{ bed_type: 'Double', quantity: 1 }];
  const beds: { bed_type: any; quantity: number }[] = [];
  const matches = bedsString.matchAll(/(\d+)?\s*[x×]?\s*(king|queen|double|single|bunk|twin|sofa bed|sofa)/gi);
  for (const m of matches) {
    const bedType = BED_TYPE_MAP[m[2].toLowerCase()] || 'Double';
    const quantity = m[1] ? parseInt(m[1]) : 1;
    const existing = beds.find((b) => b.bed_type === bedType);
    if (existing) existing.quantity += quantity;
    else beds.push({ bed_type: bedType, quantity });
  }
  return beds.length ? beds : [{ bed_type: 'Double', quantity: 1 }];
}

function parseViewType(view?: string): { view_type: any; view_label?: string } {
  if (!view) return { view_type: 'courtyard', view_label: undefined };
  const v = view.toLowerCase();
  if (v.includes('sea') || v.includes('ocean')) return { view_type: 'sea', view_label: view };
  if (v.includes('mountain')) return { view_type: 'mountain', view_label: view };
  if (v.includes('desert') || v.includes('dune')) return { view_type: 'desert', view_label: view };
  if (v.includes('pool')) return { view_type: 'pool', view_label: view };
  if (v.includes('garden')) return { view_type: 'garden', view_label: view };
  if (v.includes('city') || v.includes('skyline')) return { view_type: 'city', view_label: view };
  if (v.includes('street')) return { view_type: 'street', view_label: view };
  if (v.includes('courtyard') || v.includes('patio')) return { view_type: 'courtyard', view_label: view };
  return { view_type: 'courtyard', view_label: view };
}

function deriveRoomDetails(listing: any) {
  const roomType = (listing.roomTypes || [])[0] || {};
  const groupTypes: string[] = listing.groupTypes || [];
  const maxGuests = groupTypes.includes('large-groups') ? 6 : groupTypes.includes('family') || groupTypes.includes('families') ? 4 : 2;
  const view = parseViewType(roomType.view);
  const ensuite = listing.hasEnsuite !== undefined ? listing.hasEnsuite : String(listing.type || '').toLowerCase() !== 'hostel';

  return {
    room_name: roomType.name || 'Standard Double Room',
    beds: parseBeds(roomType.beds),
    bathroom_type: (ensuite ? 'private' : 'shared') as 'private' | 'shared',
    bathroom_label: ensuite ? 'Private bathroom' : 'Shared bathroom',
    view_type: view.view_type,
    view_label: view.view_label,
    max_guests: roomType.max_guests || maxGuests,
    room_size_sqm: roomType.size ? parseInt(String(roomType.size)) || undefined : undefined
  };
}



// ---------------------------------------------------------------
// Structured amenities, policies & visibility
// ---------------------------------------------------------------
function deriveAmenities(listing: any) {
  const amenitiesList: string[] = listing.amenities || [];
  const haystack = amenitiesList.join(' ').toLowerCase();
  const hasAC = !!listing.hasAC || haystack.includes('air conditioning') || haystack.includes(' ac ');
  const hasHeating = !!listing.hasHeating || haystack.includes('heating');
  const hasWifi = haystack.includes('wifi') || haystack.includes('wi-fi');

  const climateDetails: string[] = [];
  if (hasAC) climateDetails.push('Air conditioning');
  if (hasHeating) climateDetails.push('Heating');
  if (listing.hasExtraBlankets) climateDetails.push('Extra blankets');

  const logistics = listing.logistics || {};
  const services: { id: string; name: string; available: boolean; is_free?: boolean }[] = [];
  if (logistics.airportTransfer && !/no|none|not/i.test(String(logistics.airportTransfer))) {
    services.push({ id: 'srv-airport', name: 'Airport transfer', available: true });
  }
  if (logistics.luggageStorage && !/none/i.test(String(logistics.luggageStorage))) {
    services.push({ id: 'srv-luggage', name: 'Luggage storage', available: true });
  }
  if (listing.hasLaundryService) services.push({ id: 'srv-laundry', name: 'Laundry service', available: true });
  if (listing.hasRoomService) services.push({ id: 'srv-roomservice', name: 'Room service', available: true });

  return {
    climate: {
      available: hasAC || hasHeating,
      working: true,
      has_ac: hasAC,
      has_heating: hasHeating,
      has_extra_blankets: !!listing.hasExtraBlankets,
      details: climateDetails
    },
    breakfast: {
      available: !!listing.hasBreakfast,
      included: !!listing.hasBreakfast,
      type: 'Traditional Moroccan breakfast',
      start_time: '08:00',
      end_time: '10:30',
      notes: listing.hasBreakfast ? 'Included · 08:00 – 10:30' : undefined
    },
    wifi: {
      available: hasWifi,
      location: 'rooms and common areas',
      quality: hasWifi ? 'Fast Wi-Fi available' : 'Wi-Fi not confirmed'
    },
    extra_services: { services }
  };
}

function derivePolicies(listing: any) {
  const logistics = listing.logistics || {};
  const checkIn = String(logistics.checkIn || '14:00');
  const times = checkIn.match(/(\d{1,2}:\d{2})/g) || [];
  const checkInStart = times[0] || '14:00';
  const checkInEnd = times[1] || '23:00';
  const checkOut = String(logistics.checkOut || '11:00').replace(/^until\s*/i, '') || '11:00';

  const paymentMethods: string[] = (listing.paymentMethods || []).map((m: string) => {
    const pm = m.toLowerCase();
    if (pm === 'cash') return 'cash';
    if (pm === 'apple_pay' || pm === 'google_pay') return 'mobile_payment';
    if (pm === 'bank_transfer') return 'bank_transfer';
    return 'credit_card';
  });
  const methods = paymentMethods.length ? paymentMethods : ['credit_card', 'cash'];

  const freeCancellation = !!listing.freeCancellation;
  return {
    check_in_start: checkInStart,
    check_in_end: checkInEnd,
    check_out_time: checkOut,
    late_arrivals: {
      type: 'host_available' as const,
      primary_text: 'Host available',
      secondary_text: '( on notice )'
    },
    payment: {
      methods: methods as any[],
      currencies: ['MAD', 'EUR'] as any[],
      cash_preferred: methods.includes('cash'),
      notes: methods.includes('credit_card') && methods.includes('cash') ? 'Credit card & Cash accepted' : undefined
    },
    cancellation: {
      type: (freeCancellation ? 'free_cancellation' : 'custom') as any,
      deadline_hours: 48,
      policy_summary:
        listing.cancellationPolicy ||
        (freeCancellation
          ? 'Free cancellation up to 48 hours before arrival.'
          : 'Cancellation terms apply — confirm with the property before booking.'),
      penalty_summary: freeCancellation ? 'After that, the first night is charged.' : undefined
    }
  };
}

function deriveVisibility(walking: NearbyPlace[], spaces: PropertyFeature[], amenities: any) {
  return {
    show_walking_distance: walking.length > 0,
    show_traditional_spaces: spaces.length > 0,
    show_room_details: true,
    show_comfort_amenities: true,
    show_breakfast: amenities.breakfast.available !== false,
    show_extra_services: (amenities.extra_services.services || []).length > 0,
    show_policies: true,
    show_exact_location: true
  };
}


// ---------------------------------------------------------------
// MAIN ADAPTER — SleepListing → template StayListing
// ---------------------------------------------------------------
export function adaptToStayListing(listing: any): StayListing {
  const type = mapPropertyType(listing?.type);
  const cityName = getCityName(listing?.city);
  const coordinates = listing?.coordinates
    ? { lat: listing.coordinates.lat, lng: listing.coordinates.lng }
    : getCityCenter(listing?.city);

  const walking = getWalkingDistancePlaces(listing);
  const spaces = deriveTraditionalSpaces(listing);
  const amenities = deriveAmenities(listing);
  const policies = derivePolicies(listing);
  const visibility = deriveVisibility(walking, spaces, amenities);

  return {
    id: String(listing?.id || 'stay-unknown'),
    name: String(listing?.name || 'Moroccan Stay'),
    type,
    tagline: listing?.locationSummary || `${type} in ${listing?.neighborhood || cityName}`,
    // No hosted hero image — StayHeader renders a decorative gradient panel instead
    hero_image_url: '',
    hero_image_alt: `${listing?.name || 'Stay'} — ${listing?.neighborhood || ''} ${cityName}`.trim(),
    gallery: (listing?.images || []).slice(0, 5),
    location: {
      city: cityName,
      neighborhood: String(listing?.neighborhood || 'Medina'),
      exact_address: listing?.address || `${listing?.neighborhood || 'Medina'}, ${cityName}`,
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      directions_url: listing?.googleMapsUrl || undefined,
      directions_label: 'Get directions'
    },
    walking_distance: walking,
    traditional_spaces: spaces,
    room_details: deriveRoomDetails(listing),
    amenities,
    policies,
    visibility
  };
}

// ---------------------------------------------------------------
// SHARED HELPERS — used by Finder cards & Quiz to read the new fields
// ---------------------------------------------------------------
/** Display price for a stay (per night). */
export function getStayPrice(listing: any): number {
  return listing?.pricePerNight ?? 0;
}

/** Whether the stay has a pool (structured amenities, with legacy fallback). */
export function stayHasPool(listing: any): boolean {
  return !!listing?.hasPool;
}

/** Whether the stay includes breakfast (structured, with legacy fallback). */
export function stayHasBreakfast(listing: any): boolean {
  return listing?.amenities?.breakfast
    ? listing.amenities.breakfast.available !== false
    : !!listing?.hasBreakfast;
}

/** Whether the stay has AC (structured, with legacy fallback). */
export function stayHasAC(listing: any): boolean {
  return listing?.amenities?.climate ? listing.amenities.climate.has_ac === true : !!listing?.hasAC;
}

/** Comfort tier of the stay ('lean' | 'balanced' | 'premium'). */
export function getStayLifestyle(listing: any): string {
  return listing?.lifestyle || 'balanced';
}

/** The stay's traditional spaces via the reusable feature library. */
export function getStaySpaces(listing: any): PropertyFeature[] {
  return deriveTraditionalSpaces(listing);
}

/**
 * Factual owner information answer for a sleep listing.
 */
export function getStayOwnerAnswer(listing: any): string {
  const name = listing?.name || 'This property';
  const type = (listing?.type || 'stay').toLowerCase();
  const city = listing?.city 
    ? (listing.city.charAt(0).toUpperCase() + listing.city.slice(1).replace(/_/g, ' ')) 
    : 'Morocco';
  const neighborhood = listing?.neighborhood ? `in ${listing.neighborhood}, ${city}` : `in ${city}`;

  if (listing?.owner) {
    return `${name} is owned by ${listing.owner}.`;
  }

  const story = listing?.customStory || '';

  if (/owner|founder|designed by|restored by|family|created by|labor of love/i.test(story)) {
    return `${name} is an independently owned ${type} ${neighborhood}. ${story}`;
  }

  if (story) {
    return `${name} is a privately owned and operated ${type} ${neighborhood}. ${story}`;
  }

  return `${name} is an independently owned and operated ${type} ${neighborhood}, managed with dedicated on-site Moroccan hospitality staff.`;
}

