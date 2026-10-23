/**
 * =========================================================================
 * [MARRAKECH] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/marrakech/index.ts
 *
 * DATA: real collected listings (never AI-generated). Optional operational
 * arrays carry ["not available"] until real data is collected.
 *
 * ──────────────────────────────────────────────────────────────────────
 * MASTER TEMPLATE & ALLOWED VALUES BIBLE (for web-research agents)
 * ──────────────────────────────────────────────────────────────────────
 * RULES FOR DATA AGENTS:
 *  1. Use ONLY the values listed in this bible. Never invent random values.
 *  2. If a genuinely new value is needed, add it to the canonical bible
 *     (src/listings/things/shared/thingsBible.ts) FIRST, then use it here.
 *  3. Replace ["not available"] markers with real, source-verified values only.
 *  4. The values you SEE in this file are NOT the full vocabulary — the
 *     lists below are. Example: lifestyle also has 'premium' even if this
 *     file only uses 'lean' and 'balanced'.
 *
 * FIXED ENUMS (exhaustive — from src/listings/types.ts):
 * - lifestyle:        'lean' | 'balanced' | 'premium'
 * - groupTypes:       'solo' | 'couple' | 'couples' | 'family' | 'families' | 'friends' |
 *                     'seniors' | 'kids-friendly' | 'large-groups' | 'business-friendly' |
 *                     'business' | 'nature-lover'
 * - crowdLevel:       'quiet' | 'balanced' | 'bustling'
 * - energyLevel:      'relaxed' | 'moderate' | 'active' | 'intense'
 * - transportMode:    'walkable' | 'taxi' | 'transit' | 'mixed'
 * - safetyLevel:      1 | 2 | 3 | 4 | 5
 * - friction:         { walkingFatigue: 1-5, heatExposure: 1-5, touristCrowd: 1-5,
 *                      noiseLevel: 1-5, scamRisk: 1-5, physicalIntensity: 1-5, kidSuitable: boolean }
 * - sportIntent:      'practical' | 'experience'   (sport listings only)
 * - facilityType:     'gym-fitness' | 'running-outdoor' | 'swimming-pool' |
 *                     'yoga-movement' | 'combat-sports' | 'team-sports'
 * - experienceType:   'surf-kitesurf' | 'hiking-trek' | 'climbing-adventure' |
 *                     'desert-sport' | 'water-sport'
 * - skillLevel:       'beginner' | 'intermediate' | 'advanced'
 * - ticketTypes:      [{ name, price, currency: 'MAD', category?, conditions? }]
 * - nearbyCombos:     [{ name, type: 'eat'|'visit'|'shop'|'sleep', id?, distanceKm?,
 *                      recommendedTransition? }]
 * - visitorQuotes:    [{ quote, author, type, rating: 1-5 }]
 * - faq:              [{ q, a }]
 * - coordinates:      { lat, lng }
 * - openingHoursStructured: [{ dayOfWeek: 0-6 (0=Sunday), open: 'HH:MM', close: 'HH:MM' }]
 *
 * OPEN VOCABULARIES (every real value in the dataset — extend via the bible only):
 * - tags (106): '16th-century-ramparts' | 'active' | 'adobe-fortress' | 'adventure' | 'alpine-park'
 *     'ameln-valley' | 'anti-atlas' | 'anti-atlas-hiking' | 'architectural' | 'atlantic'
 *     'atlas-history' | 'authentic' | 'barbary-macaques' | 'birdwatching' | 'boat-tour'
 *     'calèche-ride' | 'camp' | 'cedar-forest' | 'climbing-adventure' | 'coastal'
 *     'combat-sports' | 'cooking-class' | 'cultural-tour' | 'culture' | 'day-pass'
 *     'day-trip' | 'desert' | 'desert-sport' | 'donkey-ride' | 'dramatic-gorges'
 *     'family' | 'festival' | 'first-timer' | 'foodie' | 'geological-wonder'
 *     'golden-hour' | 'granite-peaks' | 'guide-required' | 'gym-fitness' | 'hiking-trek'
 *     'historical' | 'horse-riding' | 'iconic-landmark' | 'instagrammable' | 'kitesurf'
 *     'lagoon' | 'land-art' | 'local-life' | 'market' | 'medina'
 *     'modern' | 'morning' | 'mountain' | 'mountain-biking' | 'mountain-lake'
 *     'napoleon-hat' | 'nature' | 'nature-walk' | 'off-the-beaten-path' | 'painted-rocks'
 *     'palm-canyon' | 'palm-oasis' | 'pedal-boating' | 'photo-spot' | 'photography'
 *     'photospot' | 'picnic-spot' | 'port-express' | 'premium' | 'private'
 *     'quad-bike' | 'relaxed' | 'relaxed-energy' | 'running-outdoor' | 'saadian-dynasty'
 *     'saadian-kasbah' | 'self-guided' | 'shopping' | 'ski-resort' | 'snow-sledding'
 *     'spring-water' | 'step-free' | 'street-food' | 'sunset' | 'sunset-view'
 *     'surf-culture' | 'surf-kitesurf' | 'surreal-landscape' | 'swimming-pool' | 'team-sports'
 *     'traditional-irrigation' | 'tripod-allowed' | 'urban' | 'volcanic-crater' | 'walk'
 *     'walk-in' | 'water-sport' | 'waterfall' | 'waterfront' | 'wellness'
 *     'wildlife-encounter' | 'wingfoil' | 'winter-sports' | 'women-only' | 'working-port'
 *     'workshop'
 * - vibeTags (23): 'architectural' | 'artistic' | 'botanical' | 'chaotic' | 'cosy' | 'elegant'
 *     'energetic' | 'geometric' | 'historical' | 'iconic' | 'intricate' | 'lush'
 *     'nostalgic' | 'ornate' | 'peaceful' | 'regal' | 'scenic' | 'sensory'
 *     'serene' | 'solemn' | 'spiritual' | 'tranquil' | 'vibrant'
 * - archetypeAffinity (23): 'adventure' | 'art-and-culture' | 'couple' | 'culture' | 'family'
 *     'first-timer' | 'foodie' | 'history' | 'history-weaver' | 'luxury'
 *     'luxury-curator' | 'modern-nomad' | 'nature' | 'nomad' | 'photographer'
 *     'photography' | 'quiet-mystic' | 'relaxation' | 'romantic' | 'seniors'
 *     'sensory-seeker' | 'social-collector' | 'wildlife'
 * - badges (array) (23): 'architectural-gem' | 'architectural-landmark' | 'artisan-village' | 'budget-friendly' | 'cultural-icon'
 *     'cultural-immersion' | 'educational' | 'family-friendly' | 'foodie-paradise' | 'green-oasis'
 *     'hidden-gem' | 'historic-landmark' | 'historic-memorial' | 'market-experience' | 'moving-experience'
 *     'must-see' | 'panoramic-view' | 'peaceful-escape' | 'photography-spot' | 'quiet-retreat'
 *     'shopping-hub' | 'spiritual-hub' | 'sunset-spot'
 * - badge (single string) (6): 'architectural-gem' | 'essential' | 'hidden-gem' | 'historical' | 'popular' | 'top-pick'
 * - transportModes (5): 'bus' | 'cable-car' | 'drive' | 'taxi' | 'walk'
 * - paymentMethods (2): 'cash_mad' | 'credit_card'
 * - accessibilityFeatures (17): 'cobblestone_paths' | 'flat_courtyard' | 'flat_ground' | 'flat_walkways'
 *     'ground_floor_access' | 'level_entry_doorway' | 'partial_wheelchair_access' | 'perimeter_ramps'
 *     'shaded_benches' | 'some_steps' | 'steep_exterior_approach' | 'step_free_access'
 *     'step_free_exterior_view' | 'step_free_interior_boardwalk' | 'step_free_paved_paths' | 'wide_flat_walkways'
 *     'wide_main_corridors'
 * - amenities (29): 'ablution_facilities_worshippers' | 'artisan_workshops' | 'atm_nearby' | 'audioguide_service'
 *     'cafe' | 'children_playground' | 'exhibition_hall' | 'food_stalls'
 *     'fountains' | 'fresh_juice_bars' | 'garden_seating_access' | 'gift_shop'
 *     'historical_documentation' | 'information_desk' | 'mosque_prayer_room' | 'panoramic_viewpoint'
 *     'parking' | 'parking_perimeter' | 'perimeter_benches' | 'public_toilets_nearby'
 *     'restrooms' | 'shaded_benches' | 'shaded_courtyards' | 'street_parking'
 *     'ticket_booth' | 'traditional_fountains' | 'traditional_restaurant' | 'walking_paths'
 *     'wooden_boardwalk'
 * =========================================================================
 */
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — HERITAGE & CULTURE ══
export const marrakechHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-bahia-palace",
    city: "marrakech",
    name: "Bahia Palace",
    neighborhood: "Mellah",
    cluster: "Medina Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture"],
    vibeTags: ["historical", "regal", "artistic", "geometric"],
    tags: [
      "cultural-tour",
      "golden-hour",
      "instagrammable",
      "medina",
      "photo-spot",
      "private",
      "step-free",
      "sunset",
      "walk-in"
    ],
    badges: ["architectural-gem", "must-see"],
    isHiddenGem: false,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 100,
    pricePerPerson: 100,
    entryPrice: 100,
    durationMinutes: 90,
    distanceFromCenterKm: 1.2,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_courtyard", "step_free_access", "ground_floor_access", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasIndoorRest: true,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 3,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 1, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "17:00" },
      { dayOfWeek: 6, open: "09:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "restrooms", "shaded_courtyards", "fountains", "garden_seating_access"],
    restrictions: ["No flash photography inside decorated apartments", "No smoking"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "A mesmerizing, expansive late 19th-century palace showcasing the peak of Moroccan-Andalusian palatial design. Wander through its sun-drenched marble courtyards, intricately carved cedarwood ceilings, and colorful zellij tilework.",
    shortValueProp: "The pinnacle of 19th-century Moroccan-Andalusian architecture featuring sunlit courtyards and intricate cedarwood ceilings.",
    images: [
      "https://images.unsplash.com/photo-1599859725763-4a16c9468890?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1716460206118-4a77ad005eaf?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.3,
    reviewCount: 22374,
    badge: "top-pick",
    tip: "Arrive right at 9:00 AM to explore the spectacular Grand Courtyard in peace before the large tour groups arrive.",
    tips: [
      "Arrive at 9:00 AM sharp to see the Grand Courtyard before tour buses arrive.",
      "Rooms are mostly unfurnished; focus your gaze on the spectacular cedar ceilings and tiled floors."
    ],
    highlights: ["Sprawling Grand Courtyard with Italian Carrara marble", "Elaborately painted Zouak cedar ceilings", "Peaceful riad gardens lined with orange and banana trees"],
    emotionalBenefits: ["Regal wonder", "Calm contemplation amid Islamic geometric artistry"],
    ticketTypes: [
      { name: "Foreign Adult Entry", price: 100, currency: "MAD" },
      { name: "Foreign Child (7-13)", price: 50, currency: "MAD" },
      { name: "Moroccan Residents", price: 30, currency: "MAD" }
    ],
    includedServices: ["Access to courtyards, harem apartments, and gardens"],
    excludedServices: ["Licensed human guide fee"],
    address: "Avenue Imam El Ghazali, Mellah, Marrakech 40000",
    coordinates: {
      lat: 31.621592,
      lng: -7.982231
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.621592,-7.982231"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-ben-youssef-madrasa",
    city: "marrakech",
    name: "Ben Youssef Madrasa",
    neighborhood: "Kaat Benahid",
    cluster: "Medina Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer"],
    vibeTags: ["architectural", "historical", "serene", "spiritual"],
    tags: [
      "cultural-tour",
      "golden-hour",
      "instagrammable",
      "medina",
      "photo-spot",
      "private",
      "sunset",
      "tripod-allowed",
      "walk-in"
    ],
    badges: ["architectural-gem", "must-see"],
    isHiddenGem: false,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 50,
    pricePerPerson: 50,
    entryPrice: 50,
    durationMinutes: 60,
    distanceFromCenterKm: 0.9,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_courtyard", "ground_floor_access", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasIndoorRest: true,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "19:00" },
      { dayOfWeek: 1, open: "09:00", close: "19:00" },
      { dayOfWeek: 2, open: "09:00", close: "19:00" },
      { dayOfWeek: 3, open: "09:00", close: "19:00" },
      { dayOfWeek: 4, open: "09:00", close: "19:00" },
      { dayOfWeek: 5, open: "09:00", close: "19:00" },
      { dayOfWeek: 6, open: "09:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "restrooms", "shaded_courtyards", "traditional_fountains"],
    restrictions: ["Upper dormitories reached via narrow, steep stairs"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "A brilliant architectural masterpiece, this former 14th-century Islamic college is renowned for its spectacular central courtyard. Marvel at the stunning symmetry of its zellij mosaics, delicate stucco carvings, and historic student dormitory cells.",
    shortValueProp: "North Africa's most breathtaking Islamic theological college with symmetric zellij mosaics and carved stucco.",
    images: [
      "https://images.unsplash.com/photo-1531230689007-0b32d7a7c33e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1548018560-4cb48a8837c1?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.7,
    reviewCount: 11525,
    badge: "architectural-gem",
    tip: "Climb up to the tiny, dark student rooms on the second floor to peer down through the wooden screens for a beautiful overhead view of the courtyard.",
    tips: [
      "Climb to the second floor student cells to peer down through the wooden mashrabiya screens.",
      "Visit in late afternoon when the golden light strikes the central pool."
    ],
    highlights: ["Magnificent marble courtyard reflecting pool", "Intricate lace-like stucco plasterwork", "Over 130 historic student dormitory chambers"],
    emotionalBenefits: ["Spiritual calm", "Awe at medieval architectural precision"],
    ticketTypes: [
      { name: "Adult General Entry", price: 50, currency: "MAD" },
      { name: "Children under 12", price: 10, currency: "MAD" }
    ],
    includedServices: ["Self-guided access to the prayer hall, courtyard, and student dormitories"],
    excludedServices: ["Licensed human tour guide"],
    address: "Rue Assouel, Kaat Benahid, Marrakech 40000",
    coordinates: {
      lat: 31.63194,
      lng: -7.986194
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.63194,-7.986194"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-jemaa-el-fnaa",
    city: "marrakech",
    name: "Jemaa el-Fnaa",
    neighborhood: "Jemaa el-Fna",
    cluster: "Medina Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["first-timer", "adventure"],
    vibeTags: ["chaotic", "vibrant", "sensory", "energetic"],
    tags: [
      "active",
      "authentic",
      "cultural-tour",
      "festival",
      "golden-hour",
      "medina",
      "morning",
      "photo-spot",
      "private",
      "street-food",
      "sunset",
      "sunset-view",
      "walk-in"
    ],
    badges: ["cultural-icon", "market-experience", "must-see"],
    isHiddenGem: false,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 3,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "step_free_access", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 4,
      heatExposure: 4,
      touristCrowd: 5,
      noiseLevel: 5,
      scamRisk: 4,
      physicalIntensity: 3,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Night food stalls operate 05:00 PM - 01:00 AM)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["food_stalls", "fresh_juice_bars", "atm_nearby", "public_toilets_nearby"],
    restrictions: ["Watch out for aggressive performers; agree on payment before photographing snake charmers or street musicians"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "The beating, chaotic heart of Marrakech, this UNESCO-listed public square transforms from a daytime market to an open-air theater at night. Experience a captivating carnival of street musicians, storytellers, snake charmers, and sizzling food stalls.",
    shortValueProp: "Marrakech's historic UNESCO square alive with Gnawa musicians, snake charmers, and nighttime open-air food stalls.",
    images: [
      "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1569440703456-29b9c31765ca?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.3,
    reviewCount: 49648,
    badge: "essential",
    tip: "Head up to the terrace of Café de France around 5:30 PM, order a mint tea, and secure a spot to watch the night market setup as the sun sets.",
    tips: [
      "Head to the upper terraces around 5:30 PM to watch the night market assemble at sunset.",
      "Carry plenty of small 5, 10, and 20 MAD coins for tipping performers and ordering fresh orange juice."
    ],
    highlights: ["Sizzling open-air food stalls serving grilled meats and snail soup", "Traditional Berber storytellers and Halqa circles", "Panoramic sunset views from surrounding rooftop cafés"],
    emotionalBenefits: ["Sensory exhilaration", "Immersion in living intangible world heritage"],
    ticketTypes: [{ name: "Public Square Access", price: 0, currency: "MAD" }],
    includedServices: ["Free public access to the square"],
    excludedServices: ["Food, drinks, and tips for street performers"],
    address: "Place Jemaa el-Fnaa, Jemaa el-Fna, Marrakech 40000",
    coordinates: {
      lat: 31.625502,
      lng: -7.988936
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.625502,-7.988936"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-saadian-tombs",
    city: "marrakech",
    name: "Saadian Tombs",
    neighborhood: "Kasbah",
    cluster: "Medina Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    vibeTags: ["solemn", "historical", "intricate", "ornate"],
    tags: ["cultural-tour", "medina", "off-the-beaten-path", "relaxed", "walk-in"],
    badges: ["historic-landmark", "architectural-gem"],
    isHiddenGem: false,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 100,
    pricePerPerson: 100,
    entryPrice: 100,
    durationMinutes: 60,
    distanceFromCenterKm: 1.5,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_walkways", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasIndoorRest: true,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 04:45 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "16:45" },
      { dayOfWeek: 1, open: "09:00", close: "16:45" },
      { dayOfWeek: 2, open: "09:00", close: "16:45" },
      { dayOfWeek: 3, open: "09:00", close: "16:45" },
      { dayOfWeek: 4, open: "09:00", close: "16:45" },
      { dayOfWeek: 5, open: "09:00", close: "16:45" },
      { dayOfWeek: 6, open: "09:00", close: "16:45" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "restrooms", "shaded_courtyards"],
    restrictions: ["Narrow entrance corridor; bottleneck queue to view the central Chamber of the Twelve Columns"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "A remarkably preserved royal burial ground dating back to the late 16th century, rediscovered only in 1917. The mausoleums house members of the Saadian dynasty, with the jaw-dropping Chamber of the Twelve Columns standing as its crowning jewel.",
    shortValueProp: "The sealed 16th-century Saadian royal necropolis sheltering the peerless Chamber of the Twelve Columns.",
    images: [
      "https://images.unsplash.com/photo-1719084198651-5ac167cb3e6e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1570133435536-7ececf000ef6?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 3.9,
    reviewCount: 14777,
    badge: "historical",
    tip: "The single-file line to view the Chamber of the Twelve Columns can move very slowly. Visit in the hot midday hours when the crowd thins out slightly.",
    tips: [
      "Visit right around 12:30 PM to 1:30 PM when tour groups break for lunch to avoid the 30-minute queue.",
      "Look down into the garden graves covered in vibrant zellij tilework."
    ],
    highlights: ["Chamber of the Twelve Columns carved from Italian Carrara marble", "Gilded honeycomb muqarnas ceilings", "Peaceful walled garden tombs"],
    emotionalBenefits: ["Solemn tranquility", "Fascination with rediscovering forgotten royal secrets"],
    ticketTypes: [
      { name: "Foreign Adult Entry", price: 100, currency: "MAD" },
      { name: "Foreign Child (7-13)", price: 50, currency: "MAD" },
      { name: "Moroccan Resident", price: 30, currency: "MAD" }
    ],
    includedServices: ["Full access to the mausoleum grounds and garden cemetery"],
    excludedServices: ["Licensed human tour guide"],
    address: "Rue de la Kasbah, Kasbah, Marrakech 40000",
    coordinates: {
      lat: 31.6173,
      lng: -7.9887
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.6173,-7.9887"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-koutoubia-mosque",
    city: "marrakech",
    name: "Koutoubia Mosque",
    neighborhood: "Jemaa el-Fna",
    cluster: "Medina Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "culture"],
    vibeTags: ["historical", "spiritual", "iconic", "serene"],
    tags: ["cultural-tour", "medina", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["cultural-icon", "historic-landmark", "must-see"],
    isHiddenGem: false,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_exterior_view", "flat_ground", "step_free_paved_paths", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Gardens and Exterior Plaza); Interior Closed to Non-Muslims",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "06:00", close: "23:00" },
      { dayOfWeek: 1, open: "06:00", close: "23:00" },
      { dayOfWeek: 2, open: "06:00", close: "23:00" },
      { dayOfWeek: 3, open: "06:00", close: "23:00" },
      { dayOfWeek: 4, open: "06:00", close: "23:00" },
      { dayOfWeek: 5, open: "06:00", close: "23:00" },
      { dayOfWeek: 6, open: "06:00", close: "23:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ablution_facilities_worshippers", "fountains", "garden_seating_access", "shaded_benches", "walking_paths", "mosque_prayer_room"],
    restrictions: ["Non-Muslims cannot enter the mosque interior; respectful modest dress requested in surrounding grounds"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Dominating Marrakech's skyline since the 12th century, this majestic sandstone mosque features a legendary 77-meter-tall minaret. Non-Muslims cannot enter, but its grand exterior and surrounding gardens are open to visitors.",
    shortValueProp: "The 12th-century Almohad minaret and emblem of Marrakech surrounded by peaceful rose gardens.",
    images: [
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.5,
    reviewCount: 17678,
    badge: "essential",
    tip: "The rose-filled park behind the mosque, Parc Lalla Hasna, is one of the best spots to grab a peaceful photo of the minaret away from traffic.",
    tips: [
      "Stroll the rose-filled Parc Lalla Hasna at golden hour for clear minaret photographs.",
      "Listen for the atmospheric Call to Prayer echoing across the plaza at dusk."
    ],
    highlights: ["77-meter towering 12th-century Almohad minaret", "Parc Lalla Hasna rose and palm gardens", "Atmospheric evening call to prayer"],
    emotionalBenefits: ["Spiritual awe", "Peaceful stroll through history"],
    ticketTypes: [{ name: "Park and Exterior Visit", price: 0, currency: "MAD" }],
    includedServices: ["Free access to surrounding archaeological park and gardens"],
    excludedServices: ["Interior mosque access"],
    address: "Avenue Mohammed V, Jemaa el-Fna, Marrakech 40000",
    coordinates: {
      lat: 31.624124,
      lng: -7.993541
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.624124,-7.993541"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-el-badi-palace",
    city: "marrakech",
    name: "El Badi Palace",
    neighborhood: "Kasbah",
    cluster: "Medina Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "adventure", "history-weaver"],
    vibeTags: ["historical", "intricate", "scenic", "solemn"],
    tags: ["cultural-tour", "medina", "off-the-beaten-path", "private", "walk-in", "historical"],
    badges: ["historic-landmark", "must-see"],
    isHiddenGem: false,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 100,
    pricePerPerson: 100,
    entryPrice: 100,
    durationMinutes: 75,
    distanceFromCenterKm: 1.4,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasIndoorRest: true,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 3,
      heatExposure: 4,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 1, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "17:00" },
      { dayOfWeek: 6, open: "09:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "restrooms", "panoramic_viewpoint", "exhibition_hall", "shaded_courtyards"],
    restrictions: ["Ramparts access involves uneven steps; intense midday sun exposure across large open courtyards"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "The grand sandstone ruins of a once-magnificent 16th-century palace, constructed with gold, onyx, and marble. Today, its massive empty pools, orange orchards, and crumbling walls play host to storks that build their massive nests on the battlements.",
    shortValueProp: "The monumental 16th-century ruins of Ahmad al-Mansur's 'Incomparable' palace with nesting storks and Atlas views.",
    images: [
      "https://images.unsplash.com/photo-1592343361402-d4509fb85b36?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1672753298258-704b142b2e17?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.3,
    reviewCount: 10556,
    badge: "historical",
    tip: "Follow the signs to climb the modern metal staircase on the ramparts for a spectacular panoramic view of the entire palace footprint and the Atlas Mountains.",
    tips: [
      "Climb the ramparts staircase for panoramic views across the Medina to the snowcapped Atlas Mountains.",
      "Bring water and a sun hat; the vast central courtyard offers almost zero shade."
    ],
    highlights: ["Sunken orange orchards and giant reflecting basins", "Storks nesting atop ancient rammed-earth walls", "Underground prison chambers and historical minbar display"],
    emotionalBenefits: ["Sense of lost empire", "Atmospheric exploration of monumental history"],
    ticketTypes: [
      { name: "Foreign Adult Entry", price: 100, currency: "MAD" },
      { name: "Foreign Child (under 12)", price: 30, currency: "MAD" },
      { name: "Moroccan Resident", price: 20, currency: "MAD" }
    ],
    includedServices: ["Access to palace ruins, subterranean passageways, and ramparts viewpoint"],
    excludedServices: ["Licensed human guide fee"],
    address: "Ksibat Nhass, Kasbah, Marrakech 40000",
    coordinates: {
      lat: 31.6183,
      lng: -7.9858
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.6183,-7.9858"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-maison-de-la-photographie",
    city: "marrakech",
    name: "Maison de la Photographie",
    neighborhood: "Kaat Benahid",
    cluster: "Medina Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    vibeTags: ["nostalgic", "artistic", "cosy", "scenic"],
    tags: ["cultural-tour", "medina", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["hidden-gem", "cultural-immersion"],
    isHiddenGem: true,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 80,
    pricePerPerson: 80,
    entryPrice: 80,
    durationMinutes: 75,
    distanceFromCenterKm: 1.1,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasIndoorRest: true,
    hasWiFi: true,
    hasAC: true,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:30 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:30", close: "19:00" },
      { dayOfWeek: 1, open: "09:30", close: "19:00" },
      { dayOfWeek: 2, open: "09:30", close: "19:00" },
      { dayOfWeek: 3, open: "09:30", close: "19:00" },
      { dayOfWeek: 4, open: "09:30", close: "19:00" },
      { dayOfWeek: 5, open: "09:30", close: "19:00" },
      { dayOfWeek: 6, open: "09:30", close: "19:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["cafe", "restrooms", "gift_shop", "shaded_courtyards", "panoramic_viewpoint"],
    restrictions: ["Multi-story riad accessible only via staircases"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "A peaceful, multi-story riad housing an incredible private collection of historic photographs of Morocco spanning from 1870 to 1960. Gain a fascinating look into old nomadic life and Berber culture.",
    shortValueProp: "A beautifully restored riad curating Morocco's vintage photographic archives with a breathtaking rooftop café.",
    images: [
      "https://images.unsplash.com/photo-1570133435536-7ececf000ef6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1570133435807-5feefeb2d196?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.5,
    reviewCount: 2425,
    badge: "hidden-gem",
    tip: "Keep your entrance ticket! It is valid for multiple entries during your stay in Marrakech, making it perfect for return visits to their rooftop café.",
    tips: [
      "Retain your entrance ticket for unlimited re-entry during your Marrakech holiday.",
      "The rooftop terrace is one of the highest in the northern Medina—ideal for mint tea at sunset."
    ],
    highlights: ["Over 10,000 vintage prints from 1870 to 1960", "Documentary screenings on early Atlas tribal expeditions", "High rooftop café with panoramic Atlas views"],
    emotionalBenefits: ["Nostalgic wonder", "Intimate cultural appreciation"],
    ticketTypes: [
      { name: "General Admission", price: 80, currency: "MAD" },
      { name: "Youth under 16", price: 0, currency: "MAD" }
    ],
    includedServices: ["Permanent and temporary photography galleries and rooftop terrace access"],
    excludedServices: ["Food and beverages at the terrace café"],
    address: "46 Rue Bin Lafnadek, Kaat Benahid, Marrakech 40030",
    coordinates: {
      lat: 31.632,
      lng: -7.98424
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.632,-7.98424"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-dar-si-said-museum",
    city: "marrakech",
    name: "Dar Si Said Museum",
    neighborhood: "Mellah",
    cluster: "Medina Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad", "art-and-culture"],
    vibeTags: ["historical", "intricate", "peaceful", "serene"],
    tags: ["cultural-tour", "medina", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["hidden-gem", "architectural-gem"],
    isHiddenGem: true,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 30,
    pricePerPerson: 30,
    entryPrice: 30,
    durationMinutes: 60,
    distanceFromCenterKm: 1.0,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["ground_floor_access", "flat_courtyard", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasIndoorRest: true,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "10:00 AM - 06:00 PM (Tuesday to Sunday, Closed Monday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "18:00" },
      { dayOfWeek: 2, open: "10:00", close: "18:00" },
      { dayOfWeek: 3, open: "10:00", close: "18:00" },
      { dayOfWeek: 4, open: "10:00", close: "18:00" },
      { dayOfWeek: 5, open: "10:00", close: "18:00" },
      { dayOfWeek: 6, open: "10:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "restrooms", "shaded_courtyards", "traditional_fountains", "historical_documentation"],
    restrictions: ["Closed on Mondays", "Flash photography prohibited"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Housed in an opulent late 19th-century palatial residence, this museum showcases the rich history of Moroccan carpet-making and traditional weaving. Wander its quiet, tile-heavy courtyards and enjoy the masterfully painted domed ceilings.",
    shortValueProp: "The National Museum of Weaving and Carpets housed in a tranquil 19th-century palace.",
    images: [
      "https://images.unsplash.com/photo-1576673192796-73876467569e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1621460253850-4909b6de9021?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.3,
    reviewCount: 1323,
    badge: "hidden-gem",
    tip: "This palace is rarely crowded, making it a highly tranquil and budget-friendly alternative to the Bahia Palace.",
    tips: [
      "Head to the upper-floor wedding chamber to admire the intricate carved domed wooden ceiling.",
      "Pair with the Bahia Palace located just 5 minutes away on foot."
    ],
    highlights: ["Exquisite 19th-century painted wooden domed music reception hall", "Comprehensive collection of rural Berber and urban Moroccan carpets", "Tranquil central riad garden with trickling fountains"],
    emotionalBenefits: ["Peaceful respite", "Deep appreciation for indigenous craft traditions"],
    ticketTypes: [
      { name: "Adult General Admission", price: 30, currency: "MAD" },
      { name: "Moroccan Residents", price: 10, currency: "MAD" }
    ],
    includedServices: ["Full access to palace rooms, carpet collections, and gardens"],
    excludedServices: ["Guided tour"],
    address: "8 Rue de la Bahia, Mellah, Marrakech 40000",
    coordinates: {
      lat: 31.62331,
      lng: -7.98409
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.62331,-7.98409"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-souk-semmarine",
    city: "marrakech",
    name: "Souk Semmarine",
    neighborhood: "Mouassine",
    cluster: "Medina Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced", "lean"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["first-timer", "adventure", "sensory-seeker"],
    vibeTags: ["chaotic", "vibrant", "sensory", "energetic"],
    tags: ["active", "authentic", "medina", "morning", "shopping", "walk-in", "workshop"],
    badges: ["shopping-hub", "cultural-immersion", "must-see"],
    isHiddenGem: false,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
    distanceFromCenterKm: 0.4,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 4,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground", "cobblestone_paths"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 4,
      heatExposure: 2,
      touristCrowd: 5,
      noiseLevel: 4,
      scamRisk: 3,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:30 AM - 08:30 PM (Daily; stalls close during Friday midday prayer)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:30", close: "20:30" },
      { dayOfWeek: 1, open: "09:30", close: "20:30" },
      { dayOfWeek: 2, open: "09:30", close: "20:30" },
      { dayOfWeek: 3, open: "09:30", close: "20:30" },
      { dayOfWeek: 4, open: "09:30", close: "20:30" },
      { dayOfWeek: 5, open: "09:30", close: "20:30" },
      { dayOfWeek: 6, open: "09:30", close: "20:30" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["artisan_workshops", "atm_nearby", "public_toilets_nearby"],
    restrictions: ["Watch out for scooters and carts in narrow sections"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "The grand, covered central avenue of Marrakech's legendary markets, overflowing with color, texture, and energy. Discover a dense wonderland of soft leather slippers, hand-woven carpets, glowing brass lanterns, and aromatic spices.",
    shortValueProp: "The vibrant spine of Marrakech's labyrinthine covered bazaars, filled with leather, rugs, brass, and spices.",
    images: [
      "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1569440703456-29b9c31765ca?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.4,
    reviewCount: 2503,
    badge: "popular",
    tip: "To get the best bargains, veer off the main tourist drag of Semmarine into the side alleys where artisans actually hammer out metal and carve wood.",
    tips: [
      "Polite haggling is expected; offer roughly 40-50% of the initial quote and negotiate with a smile.",
      "Explore offshoots like Souk el Attarine (spices and brass) and Souk Nejjarine (woodcraft)."
    ],
    highlights: ["Iron-roofed covered marketplace avenue", "Handmade brass lanterns and hand-knotted wool rugs", "Vibrant scents of cedar, leather, and Moroccan spices"],
    emotionalBenefits: ["Sensory awakening", "Excitement of traditional bargaining"],
    ticketTypes: [{ name: "Free Public Access", price: 0, currency: "MAD" }],
    includedServices: ["Unrestricted market exploration"],
    excludedServices: ["Purchases and personal guide"],
    address: "Souk Semmarine, Mouassine, Marrakech 40000",
    coordinates: {
      lat: 31.62783,
      lng: -7.98811
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.62783,-7.98811"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-dar-el-bacha",
    city: "marrakech",
    name: "Dar El Bacha (Musée des Confluences)",
    neighborhood: "Mouassine",
    cluster: "Medina Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "luxury-curator"],
    vibeTags: ["regal", "ornate", "intricate", "serene"],
    tags: [
      "cultural-tour",
      "medina",
      "photo-spot",
      "historical",
      "architectural",
      "walk-in"
    ],
    badges: ["architectural-gem", "must-see"],
    isHiddenGem: false,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 60,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 75,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["level_entry_doorway", "flat_courtyard", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasIndoorRest: true,
    hasWiFi: true,
    hasAC: true,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:30 AM - 06:00 PM (Tuesday to Sunday, Closed Monday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:30", close: "18:00" },
      { dayOfWeek: 2, open: "09:30", close: "18:00" },
      { dayOfWeek: 3, open: "09:30", close: "18:00" },
      { dayOfWeek: 4, open: "09:30", close: "18:00" },
      { dayOfWeek: 5, open: "09:30", close: "18:00" },
      { dayOfWeek: 6, open: "09:30", close: "18:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["cafe", "gift_shop", "restrooms", "shaded_courtyards", "traditional_fountains"],
    restrictions: ["No flash photography in exhibition rooms", "Pets not allowed"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "The lavish early 20th-century palace of Thami El Glaoui, former Pasha of Marrakech. Famous for its dazzling zellij tilework, carved cedar ceilings, tranquil courtyard lined with bitter orange trees, and the world-renowned Bacha Coffee room.",
    shortValueProp: "Marrakech's most exquisite pasha palace featuring masterwork zellij and historic coffee culture.",
    images: [
      "https://images.unsplash.com/photo-1548018560-4cb48a8837c1?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.6,
    reviewCount: 3850,
    badge: "architectural-gem",
    tip: "If you want to visit Bacha Coffee inside the palace, register your name on the café waiting list the moment you enter the museum, then tour the galleries while waiting.",
    tips: [
      "Register on the Bacha Coffee waitlist first before exploring the rooms.",
      "Closed Mondays like many national museums."
    ],
    highlights: ["Ornate carved cedarwood ceilings", "Courtyard of bitter orange trees", "Historic Bacha Coffee salon"],
    emotionalBenefits: ["Refined tranquility", "Immersion in Moroccan royal hospitality"],
    ticketTypes: [
      { name: "Adult General Entry", price: 60, currency: "MAD" },
      { name: "Children under 12", price: 30, currency: "MAD" }
    ],
    includedServices: ["Access to all palace exhibition rooms and courtyards"],
    excludedServices: ["Food and beverage at Bacha Coffee", "Private tour guide"],
    address: "Route Sidi Abdelaziz, Rue Fatima Zohra, Mouassine, Marrakech 40000",
    coordinates: {
      lat: 31.6315,
      lng: -7.9922
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.6315,-7.9922"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-le-jardin-secret",
    city: "marrakech",
    name: "Le Jardin Secret",
    neighborhood: "Mouassine",
    cluster: "Medina Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nature", "art-and-culture", "quiet-mystic"],
    vibeTags: ["botanical", "peaceful", "tranquil", "lush", "architectural"],
    tags: [
      "medina",
      "nature-walk",
      "photo-spot",
      "relaxed",
      "traditional-irrigation",
      "walk-in"
    ],
    badges: ["peaceful-escape", "architectural-gem"],
    isHiddenGem: false,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 100,
    pricePerPerson: 100,
    entryPrice: 100,
    durationMinutes: 60,
    distanceFromCenterKm: 0.6,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_courtyard", "step_free_paved_paths", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasIndoorRest: true,
    hasWiFi: true,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:30 AM - 06:30 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:30", close: "18:30" },
      { dayOfWeek: 1, open: "09:30", close: "18:30" },
      { dayOfWeek: 2, open: "09:30", close: "18:30" },
      { dayOfWeek: 3, open: "09:30", close: "18:30" },
      { dayOfWeek: 4, open: "09:30", close: "18:30" },
      { dayOfWeek: 5, open: "09:30", close: "18:30" },
      { dayOfWeek: 6, open: "09:30", close: "18:30" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["cafe", "gift_shop", "restrooms", "shaded_benches", "fountains", "panoramic_viewpoint"],
    restrictions: ["No outside food or drinks", "No commercial tripod photography without permit"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "An elegant 19th-century palace complex resurrected as a peaceful botanical sanctuary. Features a traditional quadripartite Islamic garden, an exotic garden with flora from around the globe, and an authentic Saadian hydraulic khettara irrigation display.",
    shortValueProp: "A quiet botanical and architectural haven hidden behind high Medina walls.",
    images: [
      "https://images.unsplash.com/photo-1599859725763-4a16c9468890?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.5,
    reviewCount: 9400,
    badge: "hidden-gem",
    tip: "Add the separate 40 MAD tower ticket to climb one of the highest historical towers in the Medina for unobstructed panoramas over the rooftops to the Atlas Mountains.",
    tips: [
      "Visit early in the morning for near-complete silence and birdsong.",
      "Stop at the rooftop café for fresh mint tea looking across the gardens."
    ],
    highlights: ["Symmetrical Islamic garden with marble waterways", "17-meter panoramic Medina tower", "Exotic plant collection"],
    emotionalBenefits: ["Quiet restorative peace away from souk bustle"],
    ticketTypes: [
      { name: "Garden Entry", price: 100, currency: "MAD" },
      { name: "Tower Access Add-on", price: 40, currency: "MAD" },
      { name: "Youth (under 24)", price: 80, currency: "MAD" }
    ],
    includedServices: ["Full garden access and hydraulic exhibition"],
    excludedServices: ["Tower entrance ticket", "Café orders"],
    address: "121 Rue Mouassine, Mouassine, Marrakech 40030",
    coordinates: {
      lat: 31.6298,
      lng: -7.9898
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.6298,-7.9898"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-almoravid-koubba",
    city: "marrakech",
    name: "Almoravid Koubba (Koubba Ba'adiyin)",
    neighborhood: "Kaat Benahid",
    cluster: "Medina Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history-weaver", "culture"],
    vibeTags: ["historical", "solemn", "architectural"],
    tags: [
      "medina",
      "historical",
      "cultural-tour",
      "walk-in"
    ],
    badges: ["historic-landmark", "architectural-gem"],
    isHiddenGem: true,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 100,
    pricePerPerson: 100,
    entryPrice: 100,
    durationMinutes: 30,
    distanceFromCenterKm: 1.0,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 1, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "17:00" },
      { dayOfWeek: 6, open: "09:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "ticket_booth"],
    restrictions: ["Visitors must descend an excavated pit staircase"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Built in 1117, this is the sole surviving architectural structure of the founding Almoravid dynasty in Marrakech. Excavated from beneath centuries of accumulated street sediment in 1952, its interior dome features early muqarnas and ancient cursive Maghrebi calligraphy.",
    shortValueProp: "The oldest standing monument in Marrakech and the city's only surviving Almoravid structure.",
    images: [
      "https://images.unsplash.com/photo-1570133435536-7ececf000ef6?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.1,
    reviewCount: 920,
    badge: "historical",
    tip: "Combine this with the Ben Youssef Madrasa located just 50 meters away; stand directly under the dome to admire the intricate rib-vaulting system.",
    tips: [
      "Takes only 15–20 minutes to explore, making it an easy companion to Ben Youssef Madrasa."
    ],
    highlights: ["Over 900 years of unbroken history", "The oldest cursive Maghrebi inscription in North Africa", "Ingenious 12th-century water ablution design"],
    emotionalBenefits: ["Direct connection to medieval Marrakech foundations"],
    ticketTypes: [
      { name: "General Admission", price: 100, currency: "MAD" },
      { name: "Moroccan Residents", price: 30, currency: "MAD" }
    ],
    includedServices: ["Entrance to the excavated Koubba basin and monument"],
    excludedServices: ["Audio guide"],
    address: "Place Ben Youssef, Kaat Benahid, Marrakech 40000",
    coordinates: {
      lat: 31.6318,
      lng: -7.9871
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.6318,-7.9871"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-yves-saint-laurent-museum",
    city: "marrakech",
    name: "Musée Yves Saint Laurent Marrakech",
    neighborhood: "Majorelle",
    cluster: "Gueliz-Majorelle Cluster",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["art-and-culture", "luxury-curator", "culture"],
    vibeTags: ["artistic", "elegant", "architectural", "geometric"],
    tags: [
      "modern",
      "cultural-tour",
      "photo-spot",
      "premium",
      "step-free",
      "tripod-allowed"
    ],
    badges: ["architectural-gem", "must-see"],
    isHiddenGem: false,
    // ── 2. FILTER ───────────────────────────────────────────
    price: 140,
    pricePerPerson: 140,
    entryPrice: 140,
    durationMinutes: 75,
    distanceFromCenterKm: 2.2,
    transportMode: "taxi",
    transportModes: ["taxi", "drive", "bus"],
    safetyLevel: 5,
    bookingRequired: true,
    walkInOkay: false,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "level_entry_doorway", "flat_walkways", "wide_main_corridors"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasIndoorRest: true,
    hasWiFi: true,
    hasAC: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "10:00 AM - 06:00 PM (Thursday to Tuesday, Closed Wednesday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "18:00" },
      { dayOfWeek: 1, open: "10:00", close: "18:00" },
      { dayOfWeek: 2, open: "10:00", close: "18:00" },
      { dayOfWeek: 4, open: "10:00", close: "18:00" },
      { dayOfWeek: 5, open: "10:00", close: "18:00" },
      { dayOfWeek: 6, open: "10:00", close: "18:00" }
    ],
    paymentMethods: ["credit_card"],
    amenities: ["cafe", "gift_shop", "restrooms", "exhibition_hall", "information_desk"],
    restrictions: ["Advance online booking required; photography prohibited in main exhibition hall"],
    healthContraindications: ["not available"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "An extraordinary modern cultural museum dedicated to Yves Saint Laurent's life, haute couture, and artistic bond with Marrakech. Encased in terracotta brickwork mimicking woven fabric, it features iconic fashion archives, rotating contemporary art galleries, and a chic auditorium.",
    shortValueProp: "World-class haute couture museum showcasing Yves Saint Laurent's passion for Moroccan design and colors.",
    images: [
      "https://images.unsplash.com/photo-1548018560-4cb48a8837c1?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.4,
    reviewCount: 8120,
    badge: "top-pick",
    tip: "Tickets must be purchased strictly online in advance as no tickets are sold at the gate; pair it with the Jardin Majorelle next door.",
    tips: [
      "Book your timed ticket online at least 3-5 days in advance during high season.",
      "Visit Café Le Studio inside for a quiet coffee surrounded by Saint Laurent's sketches."
    ],
    highlights: ["Iconic haute couture pieces inspired by Morocco", "Striking contemporary terracotta brick architecture by Studio KO", "Research library and photography exhibition hall"],
    emotionalBenefits: ["Aesthetic inspiration", "Deep cultural connection between Paris haute couture and Moroccan heritage"],
    ticketTypes: [
      { name: "Museum Only Adult", price: 140, currency: "MAD" },
      { name: "Combined Garden & Museum", price: 330, currency: "MAD" },
      { name: "Students with ID", price: 70, currency: "MAD" }
    ],
    includedServices: ["Access to permanent YSL collection, temporary galleries, and auditorium"],
    excludedServices: ["Jardin Majorelle entry (unless combined pass selected)"],
    address: "Rue Yves Saint Laurent, Majorelle, Marrakech 40090",
    coordinates: {
      lat: 31.6419,
      lng: -8.0028
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.6419,-8.0028"
  }
];