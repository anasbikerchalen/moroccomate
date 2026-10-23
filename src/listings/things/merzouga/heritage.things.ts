/**
 * =========================================================================
 * [MERZOUGA] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/merzouga/index.ts
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
 *   (add ONLY with real verified hours — no placeholder fits this type)
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
 *
 * FREE-TEXT FIELDS (write clear, factual, source-verified strings):
 * - fitnessLevel:     starts with 'Relaxed' | 'Moderate' | 'Active' | 'Intense' + short detail
 * - openingHours:     human-readable, e.g. '10:00 AM - 07:00 PM (Daily)'
 * - sentence arrays:  restrictions, healthContraindications, tips, excludedServices,
 *                     highlights, emotionalBenefits, includedServices, equipmentNeeded,
 *                     languages, dressCode, ageRestrictions, safetyNotes
 * =========================================================================
 */
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — HERITAGE & CULTURE ══
export const merzougaHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-gnawa-music",
    city: "merzouga",
    name: "Gnawa Music Performance at Khamlia Village",
    neighborhood: "Khamlia (Gnawa Cultural Village)",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "art-and-culture", "first-timer"],
    vibeTags: ["spiritual", "vibrant", "sensory", "historical"],
    tags: ["authentic", "cultural-tour", "off-the-beaten-path", "relaxed", "walk-in", "workshop"],
    badges: ["cultural-immersion", "must-see", "moving-experience"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 7.2,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_ground", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "09:00 AM - 06:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "18:00" },
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 2, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
      { dayOfWeek: 6, open: "09:00", close: "18:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["restrooms", "shaded_courtyards", "parking", "gift_shop"],
    restrictions: ["Remove shoes before stepping onto communal salon carpets if requested."],
    healthContraindications: ["Loud acoustic percussion; ear protection recommended for sound-sensitive infants."],
    // ── 3. UI — presentation & social proof ───────────────
    description: "Experience the hypnotic, spiritual rhythms of traditional Gnawa music performed live by the descendants of sub-Saharan Africans inside communal cultural houses such as Dar Gnaoua Bambara and Les Pigeons du Sable.",
    shortValueProp: "Live spiritual Gnawa trance music and tea with Saharan masters.",
    images: [
      "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    ],
    googleRating: 4.8,
    reviewCount: 420,
    badge: "essential",
    tip: "Performances are free of charge and accompanied by mint tea; it is customary to leave a 20–50 MAD gratuity in the community donation box or buy a music CD.",
    tips: [
      "Arrive mid-morning or mid-afternoon between 4x4 desert circuit rushes for an intimate, unhurried performance.",
      "Bring cash in Dirhams (MAD) for musician tips or CD purchases since card terminals are unavailable in the village.",
    ],
    highlights: [
      "Hypnotic guembri lute basslines paired with rhythmic castanet qraqeb percussion",
      "Warm hospitality with freshly poured Moroccan mint tea in a desert salon",
    ],
    emotionalBenefits: [
      "Deep spiritual uplift through UNESCO-recognized intangible cultural heritage",
      "Direct connection with the desert's trans-Saharan historical roots",
    ],
    ticketTypes: [
      { name: "Free Admission (Donation Suggested)", price: 0, currency: "MAD", conditions: "Tips of 20-50 MAD per guest welcomed" },
    ],
    includedServices: ["Live musical performance", "Welcoming mint tea hospitality"],
    excludedServices: ["Musician gratuities", "CD and artisan souvenir purchases"],
    address: "Dar Gnaoua Bambara, Village Khamlia, Merzouga 52402",
    coordinates: {
      lat: 31.0351,
      lng: -4.0073,
    },
    googleMapsUrl: "https://maps.google.com/?q=31.0351,-4.0073",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-taouz-petroglyphs",
    city: "merzouga",
    name: "Prehistoric Rock Engravings of Taouz",
    neighborhood: "Taous (Administrative Centre)",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["history", "history-weaver", "adventure"],
    vibeTags: ["historical", "scenic", "solemn", "tranquil"],
    tags: ["authentic", "cultural-tour", "desert", "historical", "off-the-beaten-path", "photography"],
    badges: ["hidden-gem", "historic-landmark", "educational"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 24.5,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 3,
      heatExposure: 4,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "07:00 AM - 06:30 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "07:00", close: "18:30" },
      { dayOfWeek: 1, open: "07:00", close: "18:30" },
      { dayOfWeek: 2, open: "07:00", close: "18:30" },
      { dayOfWeek: 3, open: "07:00", close: "18:30" },
      { dayOfWeek: 4, open: "07:00", close: "18:30" },
      { dayOfWeek: 5, open: "07:00", close: "18:30" },
      { dayOfWeek: 6, open: "07:00", close: "18:30" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "panoramic_viewpoint"],
    restrictions: ["Do not touch, scratch, or chalk over the prehistoric stone surfaces."],
    healthContraindications: ["Full sun hamada terrain; bring sunscreen, hat, and ample water."],
    // ── 3. UI — presentation & social proof ───────────────
    description: "Explore the open-air archaeological site of Taouz, where millenary sandstone outcrops reveal petroglyphs of protohistoric Saharan chariots, wildlife, and early Libyco-Berber inscriptions.",
    shortValueProp: "Thousands-of-years-old desert rock carvings and ancient chariot petroglyphs.",
    images: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
      "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    ],
    googleRating: 4.4,
    reviewCount: 95,
    badge: "hidden-gem",
    tip: "A local guide from Taouz village or an experienced desert driver is highly recommended to pinpoint the etched stone slabs on the rocky ridge.",
    tips: [
      "Visit early in the morning or near golden hour when low-angled sunlight highlights the engraved lines on the dark rocks.",
      "Sturdy closed-toe hiking shoes are required to navigate the loose volcanic scree.",
    ],
    highlights: [
      "Prehistoric chariot petroglyphs (chars sahariens) dating back over 2,500 years",
      "Panoramas across the hammada desert toward the Algerian frontier ridge",
    ],
    emotionalBenefits: [
      "A profound sense of wonder at early human habitation across a green Sahara",
      "Peaceful, crowd-free exploration far removed from typical tour paths",
    ],
    ticketTypes: [
      { name: "Open Access Site", price: 0, currency: "MAD", conditions: "Free access; local guiding fee extra" },
    ],
    includedServices: ["Self-guided site access"],
    excludedServices: ["Local guide fee (typically 50-100 MAD)", "4x4 transfer"],
    address: "Jebel Tadaout / Oued Ziz Plateau, Taouz 52402",
    coordinates: {
      lat: 30.9360,
      lng: -4.0274,
    },
    googleMapsUrl: "https://maps.google.com/?q=30.9360,-4.0274",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-mfis-mines",
    city: "merzouga",
    name: "Historic M'Fis Desert Mines & Ghost Town",
    neighborhood: "Erg Chebbi (Dunes & Desert Luxury Camps)",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["history", "history-weaver", "adventure"],
    vibeTags: ["historical", "nostalgic", "scenic"],
    tags: ["authentic", "cultural-tour", "desert", "historical", "off-the-beaten-path", "photography"],
    badges: ["hidden-gem", "historic-landmark", "panoramic-view"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 11.5,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 4,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: false,
    },
    openingHours: "08:00 AM - 06:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:00", close: "18:00" },
      { dayOfWeek: 1, open: "08:00", close: "18:00" },
      { dayOfWeek: 2, open: "08:00", close: "18:00" },
      { dayOfWeek: 3, open: "08:00", close: "18:00" },
      { dayOfWeek: 4, open: "08:00", close: "18:00" },
      { dayOfWeek: 5, open: "08:00", close: "18:00" },
      { dayOfWeek: 6, open: "08:00", close: "18:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "panoramic_viewpoint"],
    restrictions: ["Keep clear of unfenced open mine shafts and unstable trench edges."],
    healthContraindications: ["Deep pits on site; close supervision essential, not suitable for unattended young children."],
    // ── 3. UI — presentation & social proof ───────────────
    description: "Venture to the eastern flank of Erg Chebbi to explore the eerie ghost town and abandoned French colonial open-pit mines of M'Fis, where miners once quarried galena, barite, and cosmetic kohl.",
    shortValueProp: "Colonial-era desert mining ghost village with panoramic dune vistas.",
    images: [
      "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
    ],
    googleRating: 4.3,
    reviewCount: 210,
    badge: "historical",
    tip: "Walk up behind the ruined adobe buildings for one of the most stunning elevated angles overlooking the golden Erg Chebbi dunes meeting the dark gravel hamada.",
    tips: [
      "Combine this stop with Khamlia and a nomad tea visit during a half-day 4x4 desert circuit.",
      "Do not attempt to descend into any shafts or walk on loose overhangs.",
    ],
    highlights: [
      "Atmospheric ruins of 1930s adobe worker settlements half-buried by desert sands",
      "Stunning geological contrast between black mineral plateaus and towering orange dunes",
    ],
    emotionalBenefits: [
      "A haunting glimpse into early 20th-century desert industrial history",
      "Exceptional photography opportunities devoid of commercial tourist infrastructure",
    ],
    ticketTypes: [
      { name: "Free Exploration", price: 0, currency: "MAD", conditions: "Public desert open site" },
    ],
    includedServices: ["Open access exploration"],
    excludedServices: ["4x4 transportation", "Private guide"],
    address: "Plateau de M'Fis, Flanc Est Erg Chebbi, Merzouga 52402",
    coordinates: {
      lat: 31.0339,
      lng: -3.9506,
    },
    googleMapsUrl: "https://maps.google.com/?q=31.0339,-3.9506",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-hassi-labied-oasis",
    city: "merzouga",
    name: "Hassi Labied Oasis & Traditional Khettara Walk",
    neighborhood: "Hassi Labied(Palmeraie & Lodges)",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nature", "quiet-mystic"],
    vibeTags: ["tranquil", "lush", "peaceful", "historical"],
    tags: ["authentic", "cultural-tour", "local-life", "nature-walk", "palm-oasis", "relaxed", "traditional-irrigation"],
    badges: ["green-oasis", "peaceful-escape", "cultural-immersion"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 4.5,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "07:30 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "07:30", close: "19:00" },
      { dayOfWeek: 1, open: "07:30", close: "19:00" },
      { dayOfWeek: 2, open: "07:30", close: "19:00" },
      { dayOfWeek: 3, open: "07:30", close: "19:00" },
      { dayOfWeek: 4, open: "07:30", close: "19:00" },
      { dayOfWeek: 5, open: "07:30", close: "19:00" },
      { dayOfWeek: 6, open: "07:30", close: "19:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["walking_paths", "shaded_benches", "parking"],
    restrictions: ["Respect farmer plots; do not pick dates, fruits, or step on sown seedlings."],
    healthContraindications: ["None."],
    // ── 3. UI — presentation & social proof ───────────────
    description: "Stroll beneath lush date palms in Hassi Labied’s village oasis, where local farmers still maintain an ancestral system of earthen canals (seguias) and underground khettara channels.",
    shortValueProp: "Ancestral gravity irrigation canals and serene palm groves at the desert's edge.",
    images: [
      "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
      "https://images.unsplash.com/photo-1540801985697-e524ddef894a",
    ],
    googleRating: 4.6,
    reviewCount: 185,
    badge: "hidden-gem",
    tip: "Take your walk in the late afternoon when village farmers tend their plots and the temperature cools down pleasantly under the palm fronds.",
    tips: [
      "Ask a passing villager to explain the rotational water clock gate system if you see water flowing in the seguias.",
      "The palmeraie directly borders the giant dunes, creating an extraordinary green-meets-gold photography backdrop.",
    ],
    highlights: [
      "Centuries-old gravity-fed irrigation channels distributing precious groundwater",
      "Quiet microclimate filled with pomegranate trees, date palms, mint, and birdsong",
    ],
    emotionalBenefits: [
      "Serene escape from harsh desert winds and intense midday sun",
      "Appreciation for traditional Saharan community resilience and water conservation",
    ],
    ticketTypes: [
      { name: "Public Community Oasis Walk", price: 0, currency: "MAD", conditions: "Free community access" },
    ],
    includedServices: ["Self-guided walking access"],
    excludedServices: ["Optional local guide gratuity"],
    address: "Palmeraie de Hassi Labied, Merzouga 52202",
    coordinates: {
      lat: 31.1350,
      lng: -4.0150,
    },
    googleMapsUrl: "https://maps.google.com/?q=31.1350,-4.0150",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-auto-museum",
    city: "merzouga",
    name: "Morocco National 4x4 Auto Museum",
    neighborhood: "Centre-Village (Auberges Strip & Craft Shops)",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "first-timer", "family"],
    vibeTags: ["nostalgic", "historical"],
    tags: ["cultural-tour", "family", "first-timer", "walk-in"],
    badges: ["hidden-gem", "family-friendly"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 45,
    distanceFromCenterKm: 3.2,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_ground", "wide_main_corridors"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "09:00 AM - 06:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "18:00" },
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 2, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
      { dayOfWeek: 6, open: "09:00", close: "18:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "exhibition_hall", "restrooms"],
    restrictions: ["Do not climb onto or touch exhibited classic vehicles."],
    healthContraindications: ["None."],
    // ── 3. UI — presentation & social proof ───────────────
    description: "Browse an unexpected desert collection of vintage and modified 4x4 vehicles established along Route N13 by Sheikh Hamad bin Hamdan, showcasing machines built to tame the Sahara.",
    shortValueProp: "Eccentric collection of vintage 4x4s, dune rovers, and Sahara-crossing machines.",
    images: [
      "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2",
      "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90",
    ],
    googleRating: 4.4,
    reviewCount: 614,
    badge: "popular",
    tip: "A quick, air-conditioned indoor detour right off the paved N13 highway before arriving in central Merzouga.",
    tips: [
      "Great quick rainy-day or midday escape when the sand dunes outside are too hot to climb.",
      "Look out for the double-wide custom Jeep and rare vintage desert service trucks.",
    ],
    highlights: [
      "Over 30 rare all-terrain vehicles spanning vintage Land Rovers to custom multi-axle creations",
      "Historical off-road vehicles that enabled modern exploration of southern Morocco",
    ],
    emotionalBenefits: [
      "Fun nostalgic diversion celebrating desert automotive heritage",
      "Delight for car and mechanical enthusiasts in an unexpected Saharan setting",
    ],
    ticketTypes: [
      { name: "General Admission", price: 20, currency: "MAD", conditions: "Payable in cash at entrance" },
    ],
    includedServices: ["Self-guided exhibition hall admission"],
    excludedServices: ["Guided tour commentary"],
    address: "Route Nationale 13 (N13), Ksar Tanamouste, Merzouga 52202",
    coordinates: {
      lat: 31.0720,
      lng: -4.0121,
    },
    googleMapsUrl: "https://maps.google.com/?q=31.0720,-4.0121",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-ksar-heritage",
    city: "merzouga",
    name: "Old Ksar Merzouga Earthen Village Walk",
    neighborhood: "Ksar Merzouga",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "culture", "photographer"],
    vibeTags: ["historical", "tranquil", "architectural"],
    tags: ["authentic", "cultural-tour", "historical", "local-life", "walk", "walk-in"],
    badges: ["historic-landmark", "hidden-gem", "cultural-immersion"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
    transportModes: ["walk", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground", "flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "08:00 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:00", close: "19:00" },
      { dayOfWeek: 1, open: "08:00", close: "19:00" },
      { dayOfWeek: 2, open: "08:00", close: "19:00" },
      { dayOfWeek: 3, open: "08:00", close: "19:00" },
      { dayOfWeek: 4, open: "08:00", close: "19:00" },
      { dayOfWeek: 5, open: "08:00", close: "19:00" },
      { dayOfWeek: 6, open: "08:00", close: "19:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["walking_paths", "mosque_prayer_room", "parking"],
    restrictions: ["Respect resident privacy; ask permission before photographing local inhabitants."],
    healthContraindications: ["None."],
    // ── 3. UI — presentation & social proof ───────────────
    description: "Wander through the authentic mud-brick alleyways of Old Ksar Merzouga, experiencing traditional desert vernacular architecture and the community oasis gardens that sustained nomadic Ait Atta families long before modern tourism arrived.",
    shortValueProp: "Sunbaked adobe walls and quiet historic alleyways of the original desert ksar.",
    images: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
      "https://images.unsplash.com/photo-1509114397022-ed747cca3f65",
    ],
    googleRating: 4.5,
    reviewCount: 140,
    badge: "historical",
    tip: "Walk through during the golden hour just before dusk when the low desert sun turns the clay and straw walls a deep fiery amber.",
    tips: [
      "Dress respectfully when strolling through residential neighborhood quarters.",
      "Look for the thick wooden lintels and natural clay plastering designed to insulate homes against 45°C summer heat.",
    ],
    highlights: [
      "Traditional pisé rammed-earth architecture crafted entirely from desert clay and straw",
      "Peaceful village lanes adjacent to community date palm enclosures at the base of the dunes",
    ],
    emotionalBenefits: [
      "Intimate perspective on authentic Saharan daily life behind the tourism facade",
      "Calm contemplative stroll with zero commercial sales pressure",
    ],
    ticketTypes: [
      { name: "Free Public Access", price: 0, currency: "MAD", conditions: "Open residential historic ksar" },
    ],
    includedServices: ["Self-guided village walk"],
    excludedServices: ["Private cultural guide"],
    address: "Ksar Merzouga Ancien, Merzouga 52202",
    coordinates: {
      lat: 31.0967,
      lng: -4.0135,
    },
    googleMapsUrl: "https://maps.google.com/?q=31.0967,-4.0135",
  },
];