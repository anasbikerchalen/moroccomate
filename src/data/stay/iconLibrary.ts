/**
 * Reusable Icon Library Registry for Morocco Finder
 * Categorized icon inventory mapping backend string identifiers to metadata and UI glyphs.
 */

export interface IconDefinition {
  id: string;
  name: string;
  category:
    | 'Accommodation'
    | 'Spaces & Features'
    | 'Room & View'
    | 'Climate'
    | 'Services'
    | 'Connectivity'
    | 'Food & Dining'
    | 'Transport & Nearby'
    | 'Policies';
  lucideFallback?: string;
  description: string;
}

export const ICON_REGISTRY: IconDefinition[] = [
  // --- Accommodation ---
  { id: 'riad', name: 'Riad', category: 'Accommodation', description: 'Traditional courtyard mansion with inward-facing gardens' },
  { id: 'hotel', name: 'Hotel', category: 'Accommodation', description: 'Standard or boutique hotel accommodation' },
  { id: 'guesthouse', name: 'Guesthouse / Dar', category: 'Accommodation', description: 'Intimate family-run Moroccan house or guesthouse' },
  { id: 'kasbah', name: 'Kasbah', category: 'Accommodation', description: 'Historic fortified earthen citadel or desert fortress' },
  { id: 'villa', name: 'Villa', category: 'Accommodation', description: 'Private freestanding luxury villa with grounds' },
  { id: 'apartment', name: 'Apartment', category: 'Accommodation', description: 'Self-contained residential flat or studio' },
  { id: 'hostel', name: 'Hostel', category: 'Accommodation', description: 'Budget-friendly shared dorms or social stay' },
  { id: 'camp', name: 'Desert Camp', category: 'Accommodation', description: 'Sahara luxury tented camp under the stars' },
  { id: 'lodge', name: 'Lodge', category: 'Accommodation', description: 'Mountain or eco-nature retreat lodge' },

  // --- Spaces / Features ---
  { id: 'central-patio', name: 'Central Patio', category: 'Spaces & Features', description: 'Open-air central courtyard with zellige tilework and fountain' },
  { id: 'shaded-courtyard', name: 'Shaded Courtyard', category: 'Spaces & Features', description: 'Covered seating colonnade sheltered from high sun' },
  { id: 'sunny-rooftop', name: 'Sunny Rooftop Terrace', category: 'Spaces & Features', description: 'Elevated rooftop terrace overlooking the medina skyline' },
  { id: 'fountain', name: 'Fountain', category: 'Spaces & Features', description: 'Carved marble or zellige running water feature' },
  { id: 'hammam', name: 'Hammam & Spa', category: 'Spaces & Features', description: 'Traditional Moroccan eucalyptus steam bath and scrub' },
  { id: 'swimming-pool', name: 'Swimming Pool', category: 'Spaces & Features', description: 'Plunge pool, heated basin, or lap pool' },
  { id: 'garden', name: 'Lush Garden', category: 'Spaces & Features', description: 'Orange blossoms, palms, bougainvillea, and fragrant herbs' },
  { id: 'traditional-salon', name: 'Traditional Salon', category: 'Spaces & Features', description: 'Moroccan majlis seating area with ornate cedar ceilings' },
  { id: 'campfire', name: 'Campfire Area', category: 'Spaces & Features', description: 'Evening gathering hearth with Berber drumming and storytelling' },
  { id: 'stargazing', name: 'Stargazing Terrace', category: 'Spaces & Features', description: 'Unpolluted night sky viewing platform' },
  { id: 'beach-access', name: 'Beach Access', category: 'Spaces & Features', description: 'Direct boardwalk or dune path to the ocean shoreline' },

  // --- Room & View ---
  { id: 'bed', name: 'Bed / Sleeping', category: 'Room & View', description: 'Bed configuration and sleeping arrangements' },
  { id: 'bathroom-private', name: 'Private Bathroom', category: 'Room & View', description: 'En-suite private tadelakt bathroom' },
  { id: 'bathroom-shared', name: 'Shared Bathroom', category: 'Room & View', description: 'Shared corridor bath/shower facilities' },
  { id: 'view-courtyard', name: 'Courtyard View', category: 'Room & View', description: 'Window or Juliet balcony opening onto the internal patio' },
  { id: 'view-street', name: 'Medina Street View', category: 'Room & View', description: 'Overlooking alleyways or historic pedestrian souks' },
  { id: 'view-city', name: 'City Panorama', category: 'Room & View', description: 'Wide cityscape view across minarets and rooftops' },
  { id: 'view-garden', name: 'Garden View', category: 'Room & View', description: 'Overlooking tranquil foliage and courtyard trees' },
  { id: 'view-mountain', name: 'Atlas Mountain View', category: 'Room & View', description: 'Snow-capped High Atlas or Anti-Atlas peaks' },
  { id: 'view-sea', name: 'Ocean / Sea View', category: 'Room & View', description: 'Atlantic coast or Mediterranean panorama' },
  { id: 'view-desert', name: 'Desert Dune View', category: 'Room & View', description: 'Endless golden erg dunes and desert horizon' },
  { id: 'view-pool', name: 'Pool View', category: 'Room & View', description: 'Direct sightline to the central swimming basin' },
  { id: 'guests', name: 'Guest Capacity', category: 'Room & View', description: 'Total sleeps capacity' },

  // --- Climate ---
  { id: 'climate-ac', name: 'Air Conditioning', category: 'Climate', description: 'Cooling climate control in guest quarters' },
  { id: 'climate-heating', name: 'Heating', category: 'Climate', description: 'Winter heating for chilly mountain or desert nights' },
  { id: 'climate-blanket', name: 'Extra Warm Blankets', category: 'Climate', description: 'Thick traditional Berber wool blankets' },
  { id: 'climate-fan', name: 'Ceiling / Floor Fan', category: 'Climate', description: 'Air circulation fan for mild breezes' },

  // --- Services ---
  { id: 'airport-shuttle', name: 'Airport Transfer', category: 'Services', description: 'Private pickup or drop-off at Marrakech Menara (RAK) etc.' },
  { id: 'guided-tours', name: 'Guided Tour Bookings', category: 'Services', description: 'Certified local guides for medina souks, palaces, or excursions' },
  { id: 'luggage-storage', name: 'Luggage Storage', category: 'Services', description: 'Secure luggage holding before check-in or after checkout' },
  { id: 'reception-24h', name: '24h Reception', category: 'Services', description: 'Around-the-clock front desk or security staff' },

  // --- Connectivity ---
  { id: 'wifi', name: 'High-Speed Wi-Fi', category: 'Connectivity', description: 'Wireless internet connectivity in rooms and common areas' },

  // --- Food & Dining ---
  { id: 'breakfast', name: 'Traditional Breakfast', category: 'Food & Dining', description: 'Moroccan pancakes (msemen, baghrir), fresh juice, olives, mint tea' },
  { id: 'moroccan-tea', name: 'Mint Tea Service', category: 'Food & Dining', description: 'Welcome Maghrebi mint tea with Moroccan pastries' },
  { id: 'restaurant-on-site', name: 'On-site Table d\'Hôte', category: 'Food & Dining', description: 'Fresh tagines and home-cooked Moroccan dinners' },

  // --- Transport & Nearby Places ---
  { id: 'square', name: 'Public Square', category: 'Transport & Nearby', description: 'Central town or medina square (e.g., Jemaa el-Fna)' },
  { id: 'souk', name: 'Souks & Markets', category: 'Transport & Nearby', description: 'Artisan craft stalls, spice markets, and bazaars' },
  { id: 'taxi-station', name: 'Taxi Station', category: 'Transport & Nearby', description: 'Petit taxi or grand taxi pickup staging point' },
  { id: 'train-station', name: 'Train Station (ONCF)', category: 'Transport & Nearby', description: 'Main rail passenger terminal' },
  { id: 'bus-station', name: 'Bus Terminal', category: 'Transport & Nearby', description: 'CTM or Supratours coach station' },
  { id: 'beach', name: 'Beach / Coast', category: 'Transport & Nearby', description: 'Coastal beach promenade or surf spot' },
  { id: 'walking', name: 'Pedestrian Walking', category: 'Transport & Nearby', description: 'Walking time indicator' },

  // --- Policies ---
  { id: 'check-in', name: 'Check-in Time', category: 'Policies', description: 'Arrival window hours' },
  { id: 'check-out', name: 'Check-out Time', category: 'Policies', description: 'Departure deadline time' },
  { id: 'late-arrivals', name: 'Late Arrivals', category: 'Policies', description: 'Night arrival support and front desk status' },
  { id: 'payment', name: 'Payment Terms', category: 'Policies', description: 'Accepted currency and card or cash options' },
  { id: 'cancellation', name: 'Cancellation Policy', category: 'Policies', description: 'Cancellation window and refund rules' }
];
