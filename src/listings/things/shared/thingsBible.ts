/**
 * =========================================================================
 * THINGS TO DO — SHARED BIBLE (single source of truth)
 * =========================================================================
 *
 * ONE canonical place for everything shared by every city's things-to-do data
 * files. The old per-file header bibles were outdated — this one matches the
 * real schema in src/listings/types.ts exactly.
 *
 * Data files live in:  src/listings/things/<city>/
 *   ├─ heritage.things.ts   (Heritage & Culture)
 *   ├─ nature.things.ts    (Nature & Adventure)
 *   ├─ wellness.things.ts (Wellness & Living Arts)
 *   ├─ sport.things.ts     (Sport & Active)
 *   └─ index.ts            (city connector: listings / quiz / UI / filter arrays)
 *
 * DATA INTEGRITY: this bible documents the REAL collected data — it never
 * generates or replaces listing values.
 */

// ═══════════════════════════════════════════════════════════════════
// SECTION 1 — ALLOWED VALUES (corrected to match src/listings/types.ts)
// ═══════════════════════════════════════════════════════════════════

export const THINGS_ALLOWED_OPTIONS = {
  lifestyle: ['lean', 'balanced', 'premium'] as const,
  groupTypes: [
    'solo', 'couple', 'couples', 'family', 'families', 'friends', 'seniors',
    'kids-friendly', 'large-groups', 'business-friendly', 'nature-lover'
  ] as const,
  crowdLevel: ['quiet', 'balanced', 'bustling'] as const, // NOT 'moderate' — the real data uses 'balanced'
  energyLevel: ['relaxed', 'moderate', 'active', 'intense'] as const, // NOT 'easy'/'high' — real data uses these 4
  transportMode: ['walkable', 'taxi', 'transit', 'mixed'] as const, // NOT 'walk'/'bus'/'car'/'4x4'
  safetyLevel: [1, 2, 3, 4, 5] as const,
  // Open vocabularies (core values listed; real data may extend these):
  archetypeAffinity: ['first-timer', 'culture', 'adventure', 'relaxed', 'foodie', 'budget', 'luxury', 'nomad', 'luxury-curator'] as const,
  vibeTags: ['artistic', 'botanical', 'iconic', 'vibrant', 'historic', 'panoramic', 'serene', 'authentic', 'spiritual', 'dramatic', 'active'] as const,
  badges: ['popular', 'must-visit', 'hidden-gem', 'local-favorite'] as const,
  // Sport listings only (src/listings/types.ts — Sport-specific fields):
  sportIntent: ['practical', 'experience'] as const,
} as const;

// ═══════════════════════════════════════════════════════════════════
// SECTION 2 — THE 3-SECTION FIELD MAP (QUIZ / FILTER / UI)
// ═══════════════════════════════════════════════════════════════════
// Every listing in every category file groups its fields under these
// exact comment banners, in this order. This map is the single source of
// truth for the grouping — tools and the migration verifier read it too.

export const THINGS_SECTION_FIELD_MAP = {
  core: ['id', 'city', 'name', 'neighborhood', 'cluster'],
  quiz: [
    'lifestyle', 'groupTypes', 'crowdLevel', 'energyLevel', 'timeOfDay',
    'archetypeAffinity', 'vibeTags', 'tags', 'badges', 'isHiddenGem'
  ],
  filter: [
    'price', 'pricePerPerson', 'entryPrice', 'durationMinutes', 'distanceFromCenterKm',
    'transportMode', 'transportModes', 'safetyLevel', 'bookingRequired', 'walkInOkay',
    'hasLocalGuide', 'hasEnglishGuide', 'hasFrenchGuide',
    'isKidFriendly', 'isFemaleFriendly', 'isWheelchairAccessible', 'accessibilityFeatures', 'isPhotographyFriendly',
    'hasPrivateOption', 'hasSunsetView', 'avoidAnimals', 'hasIndoorRest', 'hasWiFi', 'hasAC',
    'nearMedina', 'nearBeach', 'goodForRain', 'friction', 'openingHours', 'openingHoursStructured', 'paymentMethods',
    'amenities', 'restrictions', 'healthContraindications', 'facilityType', 'experienceType', 'sportIntent', 'hasDayPass', 'hasWomenOnlyHours',
    'hasGroupClasses', 'hasFullWeights', 'distanceFromUser', 'skillLevel', 'duration',
    'equipmentIncluded', 'instructorAvailable'
  ],
  ui: [
    'description', 'shortValueProp', 'images', 'nonCopyrightImage', 'googlePlaceId',
    'youtubeVideoId', 'googleRating', 'reviewCount', 'googleReviewCount',
    'tripadvisorRating', 'tripadvisorReviewCount', 'viatorRating', 'viatorReviewCount',
    'getyourguideRating', 'getyourguideReviewCount', 'badge', 'tip', 'tips', 'highlights',
    'emotionalBenefits', 'bestTimeToVisit', 'typicalWaitTimeMinutes', 'seasonality',
    'ticketTypes', 'discountsInfo', 'includedServices', 'excludedServices', 'hiddenCostsInfo', 'address',
    'coordinates', 'googleMapsUrl', 'parkingInfo', 'publicTransportInfo', 'dressCode',
    'equipmentNeeded', 'fitnessLevel', 'ageRestrictions', 'safetyNotes', 'languages',
    'visitorQuotes', 'nearbyCombos', 'storyTitle', 'history', 'culturalImportance',
    'localLegend', 'funFact', 'seasonalInfo', 'officialWebsite', 'ticketWebsite', 'faq',
    'contactPhone'
  ]
} as const;

export type ThingsSectionName = keyof typeof THINGS_SECTION_FIELD_MAP;

// ═══════════════════════════════════════════════════════════════════
// SECTION 3 — COPY-PASTE LISTING TEMPLATE (grouped by section)
// ═══════════════════════════════════════════════════════════════════

/**
 * {
 *   // ── CORE IDENTITY ─────────────────────────────
 *   id: '[city]-[slug]',
 *   city: '[city]',
 *   name: '',
 *   neighborhood: '',
 *
 *   // ── 1. QUIZ — matching, mood & personalization ─
 *   lifestyle: ['balanced'],
 *   groupTypes: ['solo', 'couple'],
 *   crowdLevel: 'balanced',
 *   energyLevel: 'relaxed',
 *   archetypeAffinity: ['culture'],
 *   vibeTags: ['historic'],
 *   tags: ['cultural-tour'],
 *
 *   // ── 2. FILTER — result-page filters & logistics ─
 *   price: 0,
 *   durationMinutes: 90,
 *   safetyLevel: 5,
 *   walkInOkay: true,
 *   isKidFriendly: true,
 *   friction: { walkingFatigue: 2, heatExposure: 2, touristCrowd: 3, noiseLevel: 2, scamRisk: 1, physicalIntensity: 2, kidSuitable: true },
 *
 *   // ── 3. UI — presentation & social proof ────────
 *   description: '',
 *   images: [],
 *   googleRating: 4.5,
 *   googleMapsUrl: 'https://maps.google.com/?q=',
 * }
 */
// ═══════════════════════════════════════════════════════════════════
// SECTION 4 — OPERATIONAL EXTENSION FIELDS (optional enrichment arrays)
// ═══════════════════════════════════════════════════════════════════
// These optional arrays extend every listing with richer operational data:
//   badges, transportModes, accessibilityFeatures, openingHoursStructured,
//   paymentMethods, amenities, restrictions, healthContraindications,
//   tips, excludedServices (+ enriched ticketTypes & nearbyCombos entries).
//
// PLACEHOLDER CONVENTION (owner-approved):
//   While real values are not collected yet, a field carries the explicit
//   marker ["not available"] — searchable, easy to replace, and NEVER a
//   fabricated fact. Data collection replaces these markers with real,
//   source-verified values only.
//
// EXCEPTION: openingHoursStructured holds day/time objects, so a string
//   marker cannot fit. Add it ONLY where real opening hours are known.
//
// UI/ENGINE RULE: any consumer of these fields MUST skip "not available"
//   markers — they are structure, not data.
// ====================================================================
// SECTION 5 — REAL VOCABULARY INVENTORY (computed from the dataset)
// Every value actually in use across all 19 cities (449 listings).
// The data-file headers embed the same lists for research agents.
// Extend ONLY through real, verified data — never invent values.
// ====================================================================
export const THINGS_VOCABULARIES = {
  tags: ["16th-century-ramparts", "active", "adobe-fortress", "adventure", "alpine-park", "ameln-valley", "anti-atlas", "anti-atlas-hiking", "architectural", "atlantic", "atlas-history", "authentic", "barbary-macaques", "birdwatching", "boat-tour", "calèche-ride", "camp", "cedar-forest", "climbing-adventure", "coastal", "combat-sports", "cooking-class", "cultural-tour", "culture", "day-pass", "day-trip", "desert", "desert-sport", "donkey-ride", "dramatic-gorges", "family", "festival", "first-timer", "foodie", "geological-wonder", "golden-hour", "granite-peaks", "guide-required", "gym-fitness", "hiking-trek", "historical", "horse-riding", "iconic-landmark", "instagrammable", "kitesurf", "lagoon", "land-art", "local-life", "market", "medina", "modern", "morning", "mountain", "mountain-biking", "mountain-lake", "napoleon-hat", "nature", "nature-walk", "off-the-beaten-path", "painted-rocks", "palm-canyon", "palm-oasis", "pedal-boating", "photo-spot", "photography", "photospot", "picnic-spot", "port-express", "premium", "private", "quad-bike", "relaxed", "relaxed-energy", "running-outdoor", "saadian-dynasty", "saadian-kasbah", "self-guided", "shopping", "ski-resort", "snow-sledding", "spring-water", "step-free", "street-food", "sunset", "sunset-view", "surf-culture", "surf-kitesurf", "surreal-landscape", "swimming-pool", "team-sports", "traditional-irrigation", "tripod-allowed", "urban", "volcanic-crater", "walk", "walk-in", "water-sport", "waterfall", "waterfront", "wellness", "wildlife-encounter", "wingfoil", "winter-sports", "women-only", "working-port", "workshop"],
  vibeTags: ["architectural", "artistic", "botanical", "chaotic", "cosy", "elegant", "energetic", "geometric", "historical", "iconic", "intricate", "lush", "nostalgic", "ornate", "peaceful", "regal", "scenic", "sensory", "serene", "solemn", "spiritual", "tranquil", "vibrant"],
  archetypeAffinity: ["adventure", "art-and-culture", "couple", "culture", "family", "first-timer", "foodie", "history", "history-weaver", "luxury", "luxury-curator", "modern-nomad", "nature", "nomad", "photographer", "photography", "quiet-mystic", "relaxation", "romantic", "seniors", "sensory-seeker", "social-collector", "wildlife"],
  badges: ["architectural-gem", "architectural-landmark", "artisan-village", "budget-friendly", "cultural-icon", "cultural-immersion", "educational", "family-friendly", "foodie-paradise", "green-oasis", "hidden-gem", "historic-landmark", "historic-memorial", "market-experience", "moving-experience", "must-see", "panoramic-view", "peaceful-escape", "photography-spot", "quiet-retreat", "shopping-hub", "spiritual-hub", "sunset-spot"],
  badge: ["architectural-gem", "essential", "hidden-gem", "historical", "popular", "top-pick"],
  transportModes: ["bus", "cable-car", "drive", "taxi", "walk"],
  paymentMethods: ["cash_mad", "credit_card"],
  accessibilityFeatures: ["cobblestone_paths", "flat_courtyard", "flat_ground", "flat_walkways", "ground_floor_access", "level_entry_doorway", "partial_wheelchair_access", "perimeter_ramps", "shaded_benches", "some_steps", "steep_exterior_approach", "step_free_access", "step_free_exterior_view", "step_free_interior_boardwalk", "step_free_paved_paths", "wide_flat_walkways", "wide_main_corridors"],
  amenities: ["ablution_facilities_worshippers", "artisan_workshops", "atm_nearby", "audioguide_service", "cafe", "children_playground", "exhibition_hall", "food_stalls", "fountains", "fresh_juice_bars", "garden_seating_access", "gift_shop", "historical_documentation", "information_desk", "mosque_prayer_room", "panoramic_viewpoint", "parking", "parking_perimeter", "perimeter_benches", "public_toilets_nearby", "restrooms", "shaded_benches", "shaded_courtyards", "street_parking", "ticket_booth", "traditional_fountains", "traditional_restaurant", "walking_paths", "wooden_boardwalk"],
  facilityType: ["combat-sports", "gym-fitness", "running-outdoor", "swimming-pool", "team-sports"],
  experienceType: ["climbing-adventure", "desert-sport", "hiking-trek", "surf-kitesurf", "water-sport"],
  skillLevel: ["advanced", "beginner", "intermediate"],
} as const;
