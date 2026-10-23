/**
 * =========================================================================
 * [IFRANE_AZROU] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/ifrane_azrou/index.ts
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
 *
 * LISTING SECTIONS (field grouping used in this file):
 *   CORE:       id, city, name, neighborhood, cluster
 *   1. QUIZ:    lifestyle, groupTypes, crowdLevel, energyLevel, timeOfDay,
 *               archetypeAffinity, vibeTags, tags, badges, isHiddenGem
 *   2. FILTER:  price, pricePerPerson, entryPrice, durationMinutes, distanceFromCenterKm,
 *               transportMode, transportModes, safetyLevel, bookingRequired, walkInOkay,
 *               hasLocalGuide, hasEnglishGuide, hasFrenchGuide, isKidFriendly,
 *               isFemaleFriendly, isWheelchairAccessible, accessibilityFeatures,
 *               isPhotographyFriendly, hasPrivateOption, hasSunsetView, avoidAnimals,
 *               hasIndoorRest, hasWiFi, hasAC, nearMedina, nearBeach, goodForRain,
 *               friction, openingHours, openingHoursStructured, paymentMethods, amenities,
 *               restrictions, healthContraindications, facilityType, experienceType,
 *               sportIntent, hasDayPass, hasWomenOnlyHours, hasGroupClasses, hasFullWeights,
 *               distanceFromUser, skillLevel, duration, equipmentIncluded, instructorAvailable
 *   3. UI:      description, shortValueProp, images, nonCopyrightImage, googlePlaceId,
 *               youtubeVideoId, googleRating, reviewCount, googleReviewCount,
 *               tripadvisorRating/ReviewCount, viatorRating/ReviewCount,
 *               getyourguideRating/ReviewCount, badge, tip, tips, highlights,
 *               emotionalBenefits, bestTimeToVisit, typicalWaitTimeMinutes, seasonality,
 *               ticketTypes, discountsInfo, includedServices, excludedServices,
 *               hiddenCostsInfo, address, coordinates, googleMapsUrl, parkingInfo,
 *               publicTransportInfo, dressCode, equipmentNeeded, fitnessLevel,
 *               ageRestrictions, safetyNotes, languages, visitorQuotes, nearbyCombos,
 *               storyTitle, history, culturalImportance, localLegend, funFact,
 *               seasonalInfo, officialWebsite, ticketWebsite, faq, contactPhone
 *
 * BLANK COPY-PASTE TEMPLATE FOR NEW LISTINGS:
 * {
 *   // ── CORE IDENTITY ──
 *   id: "[city]-[slug]",
 *   city: "[city]",
 *   name: "",
 *   neighborhood: "",
 *   // ── 1. QUIZ ──
 *   lifestyle: ["balanced"],
 *   groupTypes: ["solo", "couple", "family", "friends"],
 *   crowdLevel: "balanced",
 *   energyLevel: "moderate",
 *   archetypeAffinity: ["first-timer"],
 *   vibeTags: ["authentic"],
 *   tags: ["cultural-tour"],
 *   badges: ["must-see"],
 *   // ── 2. FILTER ──
 *   price: 0, pricePerPerson: 0, entryPrice: 0,
 *   durationMinutes: 90,
 *   distanceFromCenterKm: 1.0,
 *   transportMode: "walkable",
 *   transportModes: ["walk"],
 *   safetyLevel: 5,
 *   walkInOkay: true,
 *   hasEnglishGuide: false,
 *   hasFrenchGuide: false,
 *   isKidFriendly: true,
 *   isFemaleFriendly: true,
 *   isWheelchairAccessible: false,
 *   accessibilityFeatures: ["not available"],
 *   hasPrivateOption: false,
 *   hasSunsetView: false,
 *   nearMedina: false,
 *   goodForRain: false,
 *   friction: { walkingFatigue: 2, heatExposure: 2, touristCrowd: 3, noiseLevel: 2, scamRisk: 1, physicalIntensity: 2, kidSuitable: true },
 *   openingHours: "10:00 AM - 07:00 PM (Daily)",
 *   openingHoursStructured: [{ dayOfWeek: 0, open: "10:00", close: "19:00" }],
 *   paymentMethods: ["not available"],
 *   amenities: ["not available"],
 *   restrictions: ["not available"],
 *   healthContraindications: ["not available"],
 *   // ── 3. UI ──
 *   description: "",
 *   shortValueProp: "",
 *   images: [],
 *   googleRating: 4.5,
 *   reviewCount: 0,
 *   badge: "popular",
 *   tip: "",
 *   tips: ["not available"],
 *   highlights: ["", ""],
 *   emotionalBenefits: ["", ""],
 *   ticketTypes: [{ name: "General Entry", price: 20, currency: "MAD" }],
 *   includedServices: [""],
 *   excludedServices: ["not available"],
 *   address: "",
 *   coordinates: { lat: 0, lng: 0 },
 *   googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=",
 * }
 * =========================================================================
 */

import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — HERITAGE & CULTURE ══
export const ifraneAzrouHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ifrane-lion-statue",
    city: "ifrane_azrou",
    name: "Lion de Pierre (Ifrane Stone Lion)",
    neighborhood: "Centre-Ville (Chalet)",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "kids-friendly"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "family", "nature"],
    vibeTags: ["iconic", "historical", "scenic"],
    tags: ["alpine-park", "atlas-history", "iconic-landmark", "photospot", "relaxed", "walk-in"],
    badges: ["cultural-icon", "historic-landmark", "must-see"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "flat_ground", "flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["shaded_benches", "street_parking", "walking_paths", "cafe"],
    restrictions: ["Climbing on the statue is prohibited to prevent stone degradation"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "An iconic stone sculpture carved directly into natural Atlas limestone in 1930 by sculptor Henri Jean Moreau, commemorating the extinct Barbary Atlas lion. While local urban folklore often attributes the work to a WWII prisoner, historical records confirm its creation as part of Ifrane's original garden-city master plan.",
    shortValueProp: "The legendary stone lion monument carved from Atlas rock in 1930, Ifrane's most enduring landmark.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Lion_de_pierre_d%27Ifrane.jpg/1280px-Lion_de_pierre_d%27Ifrane.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 4200,
    badge: "top-pick",
    tip: "Visit early in the morning before 10:00 AM for quiet photo ops without tour bus crowds.",
    tips: [
      "Visit early in the morning before 10:00 AM for quiet photo ops without tour bus crowds.",
      "The nearby town park features benches and landscaped flowerbeds perfect for a relaxing rest."
    ],
    highlights: [
      "Sculpted in 1930 directly into bedrock by French artist Henri Jean Moreau",
      "Enduring symbol honoring the heritage of the Atlas Lion in the Middle Atlas"
    ],
    emotionalBenefits: [
      "Instant connection with Middle Atlas history and iconic alpine heritage",
      "A quintessential Moroccan travel photo opportunity"
    ],
    ticketTypes: [{ name: "Public Park Access", price: 0, currency: "MAD" }],
    includedServices: ["Public park access", "Self-guided photography"],
    excludedServices: ["Guided tours", "Professional photography gear"],
    address: "Place de la Couronne, Centre-Ville (Chalet), 53000 Ifrane, Morocco",
    coordinates: { lat: 33.528564, lng: -5.106256 },
    googleMapsUrl: "https://maps.google.com/?q=Lion+de+Pierre+Ifrane",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "azrou-cip-moyen-atlas",
    city: "ifrane_azrou",
    name: "Centre d'Interprétation du Patrimoine du Moyen Atlas (CIPMA)",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "kids-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "family", "history"],
    vibeTags: ["artistic", "historical", "serene"],
    tags: ["atlas-history", "authentic", "cultural-tour", "culture", "historical", "walk-in"],
    badges: ["cultural-immersion", "educational", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "ground_floor_access", "wide_main_corridors"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "08:30 AM - 04:30 PM (Monday to Friday)",
    openingHoursStructured: [
      { dayOfWeek: 1, open: "08:30", close: "16:30" },
      { dayOfWeek: 2, open: "08:30", close: "16:30" },
      { dayOfWeek: 3, open: "08:30", close: "16:30" },
      { dayOfWeek: 4, open: "08:30", close: "16:30" },
      { dayOfWeek: 5, open: "08:30", close: "16:30" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "restrooms", "historical_documentation", "information_desk"],
    restrictions: ["Food and beverages strictly forbidden in exhibition galleries"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "An educational cultural institution created by the Ministry of Culture inside the Azrou Cultural Center. Its three dedicated galleries display Middle Atlas biodiversity and geological formations, intangible Amazigh heritage including authentic carpet looms and silver ornaments, and prehistoric to medieval archaeological artifacts.",
    shortValueProp: "The Middle Atlas's primary heritage museum, exploring Amazigh culture, archaeology, and ecology.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Centre_Culturel_d%27Azrou.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 95,
    badge: "hidden-gem",
    tip: "Take time to study the traditional vertical weaving loom (Aztta) in the ethnography room.",
    tips: [
      "Take time to study the traditional vertical weaving loom (Aztta) in the ethnography room.",
      "Admission is completely free for all visitors."
    ],
    highlights: [
      "Interactive displays detailing indigenous Berber weaving techniques and Beni M'Guild carpets",
      "Prehistoric tools and medieval ceramics excavated from the historic fortress of Fazaz"
    ],
    emotionalBenefits: [
      "Deep educational insight into indigenous Berber traditions of the Middle Atlas",
      "A quiet, air-conditioned cultural oasis away from street bustles"
    ],
    ticketTypes: [{ name: "Free Museum Admission", price: 0, currency: "MAD" }],
    includedServices: ["Full gallery admission", "Informational brochures"],
    excludedServices: ["Personal guided tours"],
    address: "Place Hassan II, Médina Ancienne, 53100 Azrou, Morocco",
    coordinates: { lat: 33.43476, lng: -5.22288 },
    googleMapsUrl: "https://maps.google.com/?q=Centre+Culturel+Azrou",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "azrou-ensemble-artisanal",
    city: "ifrane_azrou",
    name: "Ensemble Artisanal d'Azrou",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "sensory-seeker", "first-timer"],
    vibeTags: ["artistic", "intricate", "sensory"],
    tags: ["authentic", "culture", "local-life", "shopping", "workshop", "walk-in"],
    badges: ["artisan-village", "cultural-immersion", "shopping-hub"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_walkways", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 2,
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
    amenities: ["artisan_workshops", "restrooms", "street_parking"],
    restrictions: ["Ask permission before taking close-up portraits of artisans at work"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "A government-supported crafts complex where authentic Middle Atlas artisans practice traditional skills. Visitors can watch local craftsmen carve aromatic Atlas cedarwood and women weave authentic wool Beni M'Guild and Selk Ammar rugs, with official fixed pricing and direct support to local families.",
    shortValueProp: "State-regulated artisan complex to watch live carpet weaving and cedarwood carving at fixed prices.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Ensemble_Artisanal_Azrou.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 320,
    badge: "essential",
    tip: "Great place to purchase genuine cedarwood items and Berber rugs without souk haggling.",
    tips: [
      "Great place to purchase genuine cedarwood items and Berber rugs without souk haggling.",
      "All workshop prices are officially fixed by the regional chamber of crafts."
    ],
    highlights: [
      "Live demonstrations of Berber carpet weaving on vertical wooden looms",
      "Handcrafted aromatic cedarwood boxes, bowls, and furniture direct from the carvers"
    ],
    emotionalBenefits: [
      "Ethical shopping experience directly supporting indigenous artisan cooperatives",
      "Authentic sensory delight from the natural scent of freshly carved Atlas cedarwood"
    ],
    ticketTypes: [{ name: "Free Complex Entry", price: 0, currency: "MAD" }],
    includedServices: ["Workshop browsing", "Craft demonstration viewing"],
    excludedServices: ["Shipping services"],
    address: "Boulevard Hassan II, Médina Ancienne, 53100 Azrou, Morocco",
    coordinates: { lat: 33.434409, lng: -5.222663 },
    googleMapsUrl: "https://maps.google.com/?q=Ensemble+Artisanal+Azrou",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "azrou-akchmir-rock",
    city: "ifrane_azrou",
    name: "Le Rocher d'Azrou (Akchmir)",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "nature-lover"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "culture", "first-timer", "photographer"],
    vibeTags: ["historical", "iconic", "scenic"],
    tags: ["atlas-history", "geological-wonder", "iconic-landmark", "photo-spot", "walk"],
    badges: ["historic-landmark", "must-see", "panoramic-view", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.4,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths"],
    restrictions: ["Steep staircase with uneven steps; wear sturdy footwear"],
    healthContraindications: ["Knee injury or limited mobility"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "The prominent 50-meter-high limestone-dolomitic volcanic monolith known in Tamazight as Akchmir, which gave Azrou its name (meaning 'rock' in Berber). A series of stone stairs lead to the summit platform, rewarding visitors with a panoramic vista over the city's green-roofed buildings, Ennour Mosque, and the Middle Atlas cedar forests.",
    shortValueProp: "The geological landmark that gave Azrou its name, offering 360-degree views across the Atlas valley.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Akchmir_Azrou_rock.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 650,
    badge: "top-pick",
    tip: "Climb up just before sunset for optimal lighting over the valley and medina rooftops.",
    tips: [
      "Climb up just before sunset for optimal lighting over the valley and medina rooftops.",
      "Wear trainers or shoes with good grip, as the stairs can be slick after mountain rain."
    ],
    highlights: [
      "Spectacular 360-degree panoramic lookout over Azrou and the surrounding Middle Atlas peaks",
      "Historical rock outcrop after which the ancient Berber settlement of Azrou was named"
    ],
    emotionalBenefits: [
      "Exhilarating mountain vista after a short, rewarding physical climb",
      "Heightened appreciation of Azrou's unique natural topography"
    ],
    ticketTypes: [{ name: "Free Public Lookout", price: 0, currency: "MAD" }],
    includedServices: ["Lookout trail access", "Panoramic viewpoint access"],
    excludedServices: ["Site guides"],
    address: "Derb Akchmir, Médina Ancienne, 53100 Azrou, Morocco",
    coordinates: { lat: 33.436591, lng: -5.225503 },
    googleMapsUrl: "https://maps.google.com/?q=Rocher+Azrou+Akchmir",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "azrou-grande-mosquee-ennour",
    city: "ifrane_azrou",
    name: "Grande Mosquée Ennour",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "first-timer", "history"],
    vibeTags: ["architectural", "ornate", "spiritual"],
    tags: ["architectural", "culture", "historical", "iconic-landmark", "photospot"],
    badges: ["architectural-landmark", "cultural-icon", "spiritual-hub"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_courtyard", "flat_ground", "step_free_exterior_view"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Exterior viewing; interior open during daily prayer times for Muslims)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["mosque_prayer_room", "ablution_facilities_worshippers", "shaded_benches"],
    restrictions: [
      "Interior prayer hall is reserved exclusively for practicing Muslims",
      "Modest dress code required in the esplanade and mosque perimeter"
    ],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "The spiritual and architectural heart of Azrou, commissioned by King Hassan II. The largest mosque in the Middle Atlas region, it features an emerald-green tiled roof, fine traditional cedarwood detailing, and a tall square minaret that anchors the town square overlooking Jardin Ennour.",
    shortValueProp: "The grand architectural anchor of Azrou, featuring green-tiled roofs and detailed cedar woodwork.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mosqu%C3%A9e_Nour_Azrou_2.jpg/1280px-Mosqu%C3%A9e_Nour_Azrou_2.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 890,
    badge: "essential",
    tip: "Sit by the benches of Jardin Ennour directly opposite the mosque for the best architectural photo angles.",
    tips: [
      "Sit by the benches of Jardin Ennour directly opposite the mosque for the best architectural photo angles.",
      "The call to prayer echoing across the mountain valley creates an unforgettable Middle Atlas atmosphere."
    ],
    highlights: [
      "Largest mosque in the Middle Atlas, blending traditional Islamic tilework with regional cedar craft",
      "Picturesque esplanade facing Jardin Ennour, framed by forested mountain ridges"
    ],
    emotionalBenefits: [
      "A serene, spiritual ambiance in the lively center of town",
      "Classic Moroccan architectural photography backdrop"
    ],
    ticketTypes: [{ name: "Free Public Esplanade", price: 0, currency: "MAD" }],
    includedServices: ["Esplanade access", "Exterior architectural viewing"],
    excludedServices: ["Interior tourist visits"],
    address: "Avenue Hassan II / Place Mohammed V, Médina Ancienne, 53100 Azrou, Morocco",
    coordinates: { lat: 33.43648, lng: -5.22182 },
    googleMapsUrl: "https://maps.google.com/?q=Grande+Mosquee+Ennour+Azrou",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ifrane-notre-dame-des-cedres",
    city: "ifrane_azrou",
    name: "Église Notre-Dame des Cèdres",
    neighborhood: "Centre-Ville (Chalet)",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history", "photographer"],
    vibeTags: ["architectural", "historical", "peaceful", "serene"],
    tags: ["architectural", "atlas-history", "culture", "historical", "off-the-beaten-path"],
    badges: ["architectural-gem", "hidden-gem", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.4,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
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
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "09:00 AM - 05:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 1, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "17:00" },
      { dayOfWeek: 6, open: "09:00", close: "17:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["shaded_benches", "street_parking", "walking_paths"],
    restrictions: ["Respectful silence is requested within the building and immediate gardens"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Designed in 1935 by renowned French architect Paul Tournon, this alpine stone and Atlas cedar chapel is a rare architectural treasure from the French protectorate era. Conceived with steep, snow-shedding roofs and regional cedar joinery, it illustrates Ifrane's 1930s European hill-station design.",
    shortValueProp: "A 1930s alpine stone and cedar church designed by architect Paul Tournon, showcasing Ifrane's garden-city history.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Zaouiat_Ben_Smim_1.jpg/960px-Zaouiat_Ben_Smim_1.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 160,
    badge: "hidden-gem",
    tip: "A quiet, contemplative stop surrounded by century-old cedars, just a 5-minute walk from the central park.",
    tips: [
      "A quiet, contemplative stop surrounded by century-old cedars, just a 5-minute walk from the central park.",
      "Check out the exterior stone masonry and heavy timber trusses typical of 1930s alpine architecture."
    ],
    highlights: [
      "Rare alpine church architecture designed by celebrated ecclesiastical architect Paul Tournon",
      "Serene wooded grounds nestled under mature Middle Atlas cedar canopies"
    ],
    emotionalBenefits: [
      "Quiet cultural reflection away from mainstream tourist circuits",
      "Fascinating architectural perspective on Ifrane's colonial founding"
    ],
    ticketTypes: [{ name: "Free Heritage Visit", price: 0, currency: "MAD" }],
    includedServices: ["Self-guided grounds visit"],
    excludedServices: ["Audio guides"],
    address: "Avenue de la Poste, Centre-Ville (Chalet), 53000 Ifrane, Morocco",
    coordinates: { lat: 33.52963, lng: -5.11018 },
    googleMapsUrl: "https://maps.google.com/?q=Eglise+Notre+Dame+des+Cedres+Ifrane",
  }
];