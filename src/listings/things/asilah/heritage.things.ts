/**
 * =========================================================================
 * [ASILAH] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/asilah/index.ts
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
export const asilahHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-medina",
    city: "asilah",
    name: "Asilah Medina & Art Murals",
    neighborhood: "Médina Historique",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer", "photographer"],
    vibeTags: ["artistic", "scenic", "peaceful"],
    tags: [
      "authentic",
      "cultural-tour",
      "historical",
      "instagrammable",
      "local-life",
      "medina",
      "photo-spot",
      "relaxed",
      "sunset-view",
      "walk",
      "walk-in"
    ],
    badges: ["cultural-icon", "must-see", "photography-spot"],
    badge: "top-pick",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24 hours daily (best visited 08:30 - 20:00)",
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "cafe", "street_parking", "walking_paths"],
    restrictions: ["Respect resident privacy by not photographing through open domestic doorways"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "An impeccably maintained coastal medina defined by whitewashed houses, cobalt-blue wooden shutters, and rotating public wall murals. Founded within 15th-century Portuguese ramparts, the medina functions as an open-air art museum created during the annual Asilah Arts Festival.",
    shortValueProp: "Whitewashed Atlantic medina renowned for annual street art murals and coastal ramparts",
    googleRating: 4.6,
    reviewCount: 2450,
    googleReviewCount: 2450,
    tip: "Visit in early morning for quiet alleys and soft natural light, or in late afternoon before sunset over the ocean.",
    tips: [
      "New murals are painted every summer during the International Cultural Moussem, making each visit visually distinct.",
      "Motorized vehicles are prohibited inside the medina, making it one of the quietest old towns in Morocco."
    ],
    highlights: [
      "Rotating street art murals painted by international and Moroccan artists",
      "Pristine whitewashed alleyways with Andalusian-style wrought iron and blue shutters",
      "Direct pedestrian connection to Portuguese Atlantic bastions"
    ],
    emotionalBenefits: ["Inspired", "Tranquil", "Aesthetic"],
    bestTimeToVisit: "Golden hour or early morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (murals freshly repainted mid-summer)",
    ticketTypes: [
      {
        name: "Free Public Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Self-guided medina exploration"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Médina Historique, Asilah 90050",
    coordinates: { lat: 35.4655, lng: -6.0360 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.4655,-6.0360",
    parkingInfo: "Paid guarded parking available outside Bab Homar and Place Zellaka (10-20 MAD)",
    publicTransportInfo: "Easily walkable on foot from anywhere in central Asilah",
    dressCode: "Casual comfortable attire (modest dress appreciated)",
    equipmentNeeded: ["Camera or smartphone"],
    fitnessLevel: "Relaxed (Gentle flat stone alleys)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Exceptionally safe and pedestrianized town center",
    languages: ["Arabic (Darija)", "French", "Spanish", "English"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Portuguese Ramparts & Borj Krikia",
        type: "visit",
        id: "asilah-ramparts",
        distanceKm: 0.2
      },
      {
        name: "Palais Raissouni",
        type: "visit",
        id: "asilah-palais-raissouni",
        distanceKm: 0.2
      }
    ],
    storyTitle: "The Open-Air Canvas of the Atlantic",
    history: "In 1978, local intellectual and statesman Mohamed Benaïssa together with painter Mohamed Melehi launched the Moussem Culturel International d'Asilah to rescue the crumbling old town through art and civic restoration.",
    culturalImportance: "A pioneer model in North Africa for combining municipal urban rehabilitation with international arts diplomacy and public painting.",
    localLegend: "Residents refresh the whitewash and indigo borders before summer as a Mediterranean tradition to reflect heat and ward off insects.",
    funFact: "Every year, previous murals are painted over in white so incoming international guest artists have fresh walls to paint.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are the street murals permanent?",
        a: "No, most murals are renewed annually during the summer cultural festival, while a few signature works remain longer."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-ramparts",
    city: "asilah",
    name: "Portuguese Ramparts & Borj Krikia",
    neighborhood: "Médina Historique",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "photographer", "history"],
    vibeTags: ["historical", "scenic", "iconic"],
    tags: [
      "16th-century-ramparts",
      "coastal",
      "historical",
      "iconic-landmark",
      "photo-spot",
      "sunset-view",
      "walk",
      "walk-in",
      "waterfront"
    ],
    badges: ["historic-landmark", "must-see", "sunset-spot"],
    badge: "essential",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "step_free_exterior_view"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
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
    openingHours: "Open 24 hours daily (sunset is prime gathering time)",
    paymentMethods: ["not available"],
    amenities: ["panoramic_viewpoint", "walking_paths", "perimeter_benches"],
    restrictions: ["Do not sit or stand precariously on unrailed outer parapet walls"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Built by the Portuguese following their conquest of Asilah in 1471, these robust stone fortifications wrap around the western edge of the medina. The southwest bastion, Borj Krikia (Caraquia), juts directly into the Atlantic, offering Morocco's most celebrated coastal sunset panorama.",
    shortValueProp: "15th-century Portuguese oceanfront fortifications and the iconic Borj Krikia sunset bastion",
    googleRating: 4.5,
    reviewCount: 980,
    googleReviewCount: 980,
    tip: "Arrive at Borj Krikia 30 minutes before sunset to secure a spot overlooking the breaking Atlantic rollers.",
    tips: [
      "Look directly down from Borj Krikia to see the whitewashed dome and zellij graves of the Sidi Ahmed El Mansour marine sanctuary.",
      "Stone steps can become damp and slick from sea spray during high tide."
    ],
    highlights: [
      "Borj Krikia southwestern artillery platform projecting into the sea",
      "15th-century Portuguese stone masonry and embrasures",
      "Panoramic Atlantic sunset vistas and views over the rocky shallows"
    ],
    emotionalBenefits: ["Scenic", "Historic", "Aesthetic"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Public Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public bastion and rampart access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Remparts Maritimes / Borj Krikia, Médina Historique, Asilah 90050",
    coordinates: { lat: 35.4645, lng: -6.0385 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.4645,-6.0385",
    parkingInfo: "Street parking outside Bab Homar",
    publicTransportInfo: "Walking distance from anywhere in Asilah medina",
    dressCode: "Casual (flat shoes recommended for stone steps)",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed (Short stairway ascent to the bastion)",
    ageRestrictions: "All ages welcome (supervise children near parapets)",
    safetyNotes: "Unfenced sea-facing ledges require caution",
    languages: ["Arabic (Darija)", "French", "Spanish", "English"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Cimetière Marin Musulman & Mausolée Sidi Ahmed El Mansour",
        type: "visit",
        id: "asilah-mausolee-sidi-ahmed-mansour",
        distanceKm: 0.1
      },
      {
        name: "Palais Raissouni",
        type: "visit",
        id: "asilah-palais-raissouni",
        distanceKm: 0.3
      }
    ],
    storyTitle: "The Stone Bulwark Against the Atlantic",
    history: "Commissioned under King Afonso V of Portugal in the late 15th century, the fortified curtain wall withstood repeated Saadian sieges before the Portuguese withdrew in 1549 and 1589.",
    culturalImportance: "An enduring architectural symbol of Asilah's complex military history at the junction of Iberian and Moroccan dynasties.",
    localLegend: "Legend tells of lookout sentinels who could predict incoming Atlantic storms by the acoustic whistle of the wind through the sea-level gun embrasures.",
    funFact: "The bastion's popular name 'Krikia' (or Caraquia) is derived from the Portuguese naval *caravela* and maritime terminology from the 16th century.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is there an entry fee to walk on Borj Krikia?",
        a: "No, the bastion is open to the public free of charge around the clock."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-palais-raissouni",
    city: "asilah",
    name: "Palais Raissouni (Centre Hassan II des Rencontres Internationales)",
    neighborhood: "Médina Historique",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history"],
    vibeTags: ["architectural", "ornate", "serene"],
    tags: [
      "architectural",
      "authentic",
      "cultural-tour",
      "culture",
      "exhibition_hall",
      "historical",
      "photo-spot"
    ],
    badges: ["architectural-gem", "cultural-immersion", "historic-landmark"],
    badge: "architectural-gem",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_courtyard", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 06:00 PM (open during art exhibitions and Moussem Cultural festival sessions)",
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "shaded_courtyards", "walking_paths"],
    restrictions: ["Interior rooms may have restricted access during official diplomatic conferences"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Erected in 1909 by the legendary chieftain Pasha Moulay Ahmed er-Raissouni, this stately Arabo-Andalusian palace abuts the sea ramparts. Now preserved as the Centre Hassan II des Rencontres Internationales and home to Galerie Mohamed Benaïssa, it features marble colonnades, carved cedar woodwork, elaborate zellij, and sea-view salons.",
    shortValueProp: "Sumptuous 1909 Arabo-Andalusian palace and modern international cultural arts center",
    googleRating: 4.4,
    reviewCount: 310,
    googleReviewCount: 310,
    tip: "Visit during the summer or autumn sessions of the Moussem Culturel to view international fine art exhibitions inside the grand patio.",
    tips: [
      "Access to the interior courtyard and galleries is free during scheduled cultural exhibitions.",
      "The palace balcony offers a direct, elevated view over the Atlantic rocks."
    ],
    highlights: [
      "Classic Andalusian central courtyard with marble fountains and columns",
      "Ornate carved plasterwork (*stucco*) and painted cedar ceilings",
      "Hosting venue for the Fondation du Forum d'Assilah international colloquia"
    ],
    emotionalBenefits: ["Regal", "Artistic", "Historic"],
    bestTimeToVisit: "Morning or mid-afternoon during gallery exhibitions",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (highest activity June - October)",
    ticketTypes: [
      {
        name: "Exhibition Public Entry",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access during exhibitions",
    includedServices: ["Exhibition access", "Courtyard viewing"],
    excludedServices: ["Private conference halls"],
    hiddenCostsInfo: "None",
    address: "Rue Al Mansour, Médina Historique, Asilah 90050",
    coordinates: { lat: 35.4658, lng: -6.0378 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.4658,-6.0378",
    parkingInfo: "Park outside the ramparts; walk 5 minutes into the medina",
    publicTransportInfo: "Pedestrian access within the medina",
    dressCode: "Smart casual",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed (Gentle indoor walking)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Well-maintained municipal cultural site",
    languages: ["Arabic (Darija)", "French", "Spanish", "English"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Asilah Medina & Art Murals",
        type: "visit",
        id: "asilah-medina",
        distanceKm: 0.2
      },
      {
        name: "Portuguese Ramparts & Borj Krikia",
        type: "visit",
        id: "asilah-ramparts",
        distanceKm: 0.3
      }
    ],
    storyTitle: "The Pirate Pasha's Clifftop Palace",
    history: "Moulay Ahmed er-Raissouni, the famed northern Moroccan warrior and pasha, commissioned master craftsmen from Fes to construct this showpiece palace in 1909. Following Moroccan independence, the structure was rehabilitated as a temple to the arts and dialogue under the patronage of King Hassan II.",
    culturalImportance: "The nerve center of Asilah's intellectual and creative identity, hosting scholars, poets, and statesmen from across the globe.",
    localLegend: "Legend says Raissouni enjoyed only a single night of peace in the completed palace before being forced to flee his rivals and Spanish troops.",
    funFact: "Raissouni financed the lavish palace partly through the high-profile ransom payments he extracted from kidnapped foreign dignitaries in the early 1900s.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can anyone enter Palais Raissouni?",
        a: "Yes, the main courtyard and galleries are open to visitors whenever public exhibitions or cultural forum events are taking place."
      }
    ],
    contactPhone: "+212539417065"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-borj-al-kamra",
    city: "asilah",
    name: "Borj Al-Kamra (Portuguese Keep)",
    neighborhood: "Médina Historique",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history", "first-timer"],
    vibeTags: ["historical", "architectural", "iconic"],
    tags: ["16th-century-ramparts", "architectural", "historical", "iconic-landmark", "photo-spot", "walk-in"],
    badges: ["architectural-landmark", "historic-landmark"],
    badge: "historical",
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
    accessibilityFeatures: ["flat_ground", "step_free_exterior_view"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Exterior viewing 24 hours daily; interior open during municipal heritage expositions",
    paymentMethods: ["not available"],
    amenities: ["street_parking", "walking_paths", "perimeter_benches"],
    restrictions: ["Interior tower floors are generally restricted outside of special exhibitions"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Dominating Place Zellaka at the historic sea entrance (Bab al-Bahr), Borj Al-Kamra is a massive 1509 Portuguese military keep (*Torre de Menagem*). Built with square ashlar stonework and topped with four distinctive corner bartizans (watchturrets), it represents one of the purest examples of Manueline military architecture in North Africa.",
    shortValueProp: "Monumental 1509 Portuguese stone keep commanding the entrance to the medina",
    googleRating: 4.4,
    reviewCount: 360,
    googleReviewCount: 360,
    tip: "Photograph the tower from Place Zellaka where its limestone facade and corner turrets stand out against the white medina walls.",
    tips: [
      "Located directly beside Bab al-Bahr, making it the natural starting point for entering the old medina.",
      "The square surrounding the tower features shaded stone benches and traditional cafes."
    ],
    highlights: [
      "1509 Manueline-era Portuguese stone keep (*Torre de Menagem*)",
      "Four preserved cantilevered corner watchtowers (*échauguettes*)",
      "Historic landmark framing the Bab al-Bahr city gate"
    ],
    emotionalBenefits: ["Historic", "Aesthetic", "Nostalgic"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Exterior Viewing",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public viewing",
    includedServices: ["Exterior architectural viewing"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Place Zellaka / Bab al-Bahr, Médina Historique, Asilah 90050",
    coordinates: { lat: 35.4667, lng: -6.0352 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.4667,-6.0352",
    parkingInfo: "Paid lot on Place Zellaka right outside the gate",
    publicTransportInfo: "Prominently located at the medina's main civic entrance",
    dressCode: "Casual",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed (Level paved square)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Pedestrian plaza with mild vehicle traffic along outer perimeter",
    languages: ["Arabic (Darija)", "French", "Spanish"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Asilah Medina & Art Murals",
        type: "visit",
        id: "asilah-medina",
        distanceKm: 0.1
      }
    ],
    storyTitle: "The Royal Keep of King Manuel",
    history: "Constructed in 1509 by orders of King Manuel I of Portugal as a command headquarters and governor's residence, the keep had an audience chamber, officers' council, and lower garrison cells. It underwent comprehensive restoration in the 1990s in collaboration with the Portuguese Calouste Gulbenkian Foundation.",
    culturalImportance: "A protected Moroccan national heritage monument testifying to the intense 16th-century Atlantic naval rivalry.",
    localLegend: "Chroniclers record that King Manuel built the high tower specifically so his daughter, married to the Portuguese governor, could view the Atlantic shipping lanes toward Portugal.",
    funFact: "The tower was originally called 'Torre de Menagem' before locals named it 'Al-Kamra', likely derived from the Spanish word *cámara* or the Arabic root for 'moon/chamber'.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can visitors climb to the top of Borj Al-Kamra?",
        a: "Interior and rooftop access is only granted during specific cultural festivals or curated municipal exhibitions."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-mausolee-sidi-ahmed-mansour",
    city: "asilah",
    name: "Cimetière Marin Musulman & Mausolée Sidi Ahmed El Mansour",
    neighborhood: "Médina Historique",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "photography", "quiet-mystic"],
    vibeTags: ["spiritual", "scenic", "solemn"],
    tags: ["coastal", "cultural-tour", "historical", "photo-spot", "relaxed", "sunset-view", "walk-in"],
    badges: ["historic-landmark", "photography-spot"],
    badge: "historical",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["step_free_exterior_view"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Viewable from the ramparts 24 hours daily (sanctuary interior open to Muslim worshippers)",
    paymentMethods: ["not available"],
    amenities: ["panoramic_viewpoint", "walking_paths"],
    restrictions: ["Do not walk upon or disturb the tiled gravestones; view respectfully from the rampart path"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Nestled directly below the Portuguese ramparts at Borj Krikia, this historic seaside Muslim burial ground faces the open Atlantic. Decorated with vibrant ceramic tiles and zellij mosaics, it contains the whitewashed domed mausoleum (*qubba*) of 16th-century Sufi saint Sidi Ahmed ben Mansour and his sister Lalla Mennana.",
    shortValueProp: "Historic Atlantic marine cemetery with vibrant zellij-tiled graves beneath the ramparts",
    googleRating: 4.4,
    reviewCount: 280,
    googleReviewCount: 280,
    tip: "The finest vantage point to view the ceramic tombs and domed mausoleum is from the upper parapet of Borj Krikia at sunset.",
    tips: [
      "Maintain quiet and respectful decorum around this sacred active burial ground.",
      "The turquoise and emerald ceramic tiles create a striking contrast against the dark volcanic shoreline and Atlantic surf."
    ],
    highlights: [
      "Open-air marine graves tiled in multicolored ceramic and zellij",
      "Whitewashed domed sanctuary of Sidi Ahmed ben Mansour",
      "Dramatic ocean setting directly beneath the 15th-century Portuguese battlements"
    ],
    emotionalBenefits: ["Solemn", "Reflective", "Scenic"],
    bestTimeToVisit: "Late afternoon / Sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Exterior Viewing",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public viewing",
    includedServices: ["Viewing from ramparts"],
    excludedServices: ["Interior mausoleum access for non-Muslims"],
    hiddenCostsInfo: "None",
    address: "Sous le Borj Krikia, Médina Historique, Asilah 90050",
    coordinates: { lat: 35.4648, lng: -6.0382 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.4648,-6.0382",
    parkingInfo: "Park outside Bab Homar; walk 6 minutes through the medina",
    publicTransportInfo: "Pedestrian access within the medina",
    dressCode: "Respectful attire",
    equipmentNeeded: ["Camera (use respectfully)"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Observe graves from the paved perimeter paths; do not climb over grave borders",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Portuguese Ramparts & Borj Krikia",
        type: "visit",
        id: "asilah-ramparts",
        distanceKm: 0.1
      }
    ],
    storyTitle: "The Guardian Saint of the Seawall",
    history: "Sidi Ahmed ben Mansour was a revered 16th-century Sufi scholar and spiritual fighter who arrived from Tangier to rally resistance against Portuguese occupation. He requested burial along the sea ramparts so his spirit would continue defending the town from maritime assault.",
    culturalImportance: "A sacred pilgrimage point for northern Moroccan families and an iconic subject of Mediterranean landscape photography.",
    localLegend: "Local lore recounts that after falling in battle against colonial raiders, his body vanished into the rocks, cementing his legendary status among fishermen.",
    funFact: "The custom of covering these coastal graves in bright ceramic tiles was renewed in the 1930s by renowned master craftsman Abdeslam El Boussiri.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can visitors walk inside the cemetery?",
        a: "Visitors are asked to view the cemetery respectfully from the elevated rampart walkway to preserve the sanctity of the tombs."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-jewish-cemetery",
    city: "asilah",
    name: "Jewish Cemetery of Asilah",
    neighborhood: "Lalla Rahma",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history", "quiet-mystic"],
    vibeTags: ["solemn", "peaceful", "historical"],
    tags: ["coastal", "cultural-tour", "historical", "off-the-beaten-path", "relaxed", "sunset-view", "walk-in"],
    badges: ["historic-landmark", "quiet-retreat"],
    badge: "historical",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["step_free_exterior_view"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Daylight hours (typically 09:00 AM - 06:00 PM)",
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "street_parking"],
    restrictions: ["Maintain reverence; a small voluntary tip for the site caretaker is customary"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Perched on the Atlantic coastal bluffs of Quartier Lalla Rahma just south of the medina, this historic Jewish cemetery features hundreds of whitewashed, rounded tombs overlooking the sea. It bears witness to the once-thriving Sephardic Jewish community that coexisted in Asilah for centuries.",
    shortValueProp: "Historic Sephardic ocean-bluff cemetery reflecting Asilah's multicultural heritage",
    googleRating: 4.3,
    reviewCount: 95,
    googleReviewCount: 95,
    tip: "A guardian usually tends the grounds and can open the gate; offer a modest tip (10-20 MAD) for site maintenance.",
    tips: [
      "Wear respectful clothing when visiting this sacred memorial site.",
      "The setting sun casts long shadows over the white tombs and the Atlantic surf below."
    ],
    highlights: [
      "Historic whitewashed Sephardic tomb structures with Hebrew epigraphy",
      "Stunning oceanfront cliff setting facing the open Atlantic",
      "Tangible memorial to Asilah's centuries of Jewish-Moroccan cohabitation"
    ],
    emotionalBenefits: ["Reflective", "Historic", "Solemn"],
    bestTimeToVisit: "Late afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Access (Tip Appreciated)",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Cemetery grounds access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Small tip to the local guardian/caretaker (10-20 MAD)",
    address: "Quartier Lalla Rahma (Route de la Falaise), Asilah 90050",
    coordinates: { lat: 35.4619, lng: -6.0398 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.4619,-6.0398",
    parkingInfo: "Street parking available along the coastal lane",
    publicTransportInfo: "10-minute walk south along the coast from Bab Homar",
    dressCode: "Modest, respectful clothing",
    equipmentNeeded: ["Camera (respectful use)"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Mind the cliff edge perimeter outside the walls",
    languages: ["Arabic (Darija)", "French", "Spanish"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Portuguese Ramparts & Borj Krikia",
        type: "visit",
        id: "asilah-ramparts",
        distanceKm: 0.5
      }
    ],
    storyTitle: "Echoes of Sepharad by the Atlantic",
    history: "Following the 1492 expulsion from the Iberian Peninsula, Sephardic Jewish families settled in Asilah, playing a vital role in regional commerce, maritime trading, and metal craftsmanship. The Jewish population centered around the Lalla Rahma quarter outside Bab Homar, where this cemetery has been maintained across generations.",
    culturalImportance: "An indispensable chapter in Morocco's recognized legacy of Judeo-Islamic cultural coexistence.",
    localLegend: "Descendants of Asilah's Sephardic diaspora from France, Spain, and Latin America return annually on pilgrimage to honor family ancestors buried on this cliff.",
    funFact: "The horizontal rounded sarcophagus style is characteristic of northern Moroccan Sephardic cemeteries, built to endure harsh salty Atlantic winds.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the cemetery open every day?",
        a: "Yes, during daylight hours. If the gate is closed, the resident guardian residing nearby will usually open it for visitors."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-dar-al-khattat",
    city: "asilah",
    name: "Dar Al Khattat (Calligraphy Studio)",
    neighborhood: "Médina Historique",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture"],
    vibeTags: ["artistic", "intricate", "peaceful"],
    tags: ["authentic", "cultural-tour", "culture", "medina", "workshop"],
    badges: ["cultural-immersion", "artisan-village"],
    badge: "hidden-gem",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["level_entry_doorway"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "10:30 AM - 01:30 PM & 03:30 PM - 07:00 PM (Daily)",
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops"],
    restrictions: ["Ask permission before photographing original custom artwork"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "An authentic artisan calligraphy workshop located on Rue Borj Al Ghoula in the medina. Operated by master calligrapher Sadik Haddari, this studio displays original Arabic and Andalusian calligraphy compositions, offers personalized manuscript pieces, and provides demonstrations of traditional reed pen (*qalam*) techniques.",
    shortValueProp: "Intimate traditional Arabic calligraphy atelier and workshop in the heart of the medina",
    googleRating: 4.6,
    reviewCount: 45,
    googleReviewCount: 45,
    tip: "Request a custom personalized bookmark or name scroll handwritten in classical Maghrebi or Thuluth script as a unique souvenir.",
    tips: [
      "The master calligrapher is happy to demonstrate traditional ink preparation and reed carving for interested visitors.",
      "Small handcrafted calligraphy scrolls and bookmarks make meaningful, portable gifts."
    ],
    highlights: [
      "Live demonstrations of classical Maghrebi and Andalusian calligraphy scripts",
      "Traditional handmade paper and natural soot-based ink craft",
      "Intimate gallery setting inside an authentic medina residence"
    ],
    emotionalBenefits: ["Inspired", "Artistic", "Authentic"],
    bestTimeToVisit: "Mid-morning or late afternoon",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Studio Visit",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free studio entry; purchase of art is optional",
    includedServices: ["Atelier viewing"],
    excludedServices: ["Custom commissioned artwork"],
    hiddenCostsInfo: "None, except purchases of original artwork or calligraphy lessons",
    address: "No. 8, Rue Borj Al Ghoula, Médina Historique, Asilah 90050",
    coordinates: { lat: 35.4651, lng: -6.0366 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.4651,-6.0366",
    parkingInfo: "Park outside the medina gates (Bab Homar); 3-minute walk inside",
    publicTransportInfo: "Pedestrian access within the medina",
    dressCode: "Casual",
    equipmentNeeded: ["Cash for original artwork"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Quiet, welcoming creative studio",
    languages: ["Arabic (Darija)", "French", "Spanish"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Asilah Medina & Art Murals",
        type: "visit",
        id: "asilah-medina",
        distanceKm: 0.1
      }
    ],
    storyTitle: "The Living Grace of the Qalam",
    history: "Rooted in the long tradition of sacred and decorative script, this studio was founded to preserve classical Maghrebi and Andalusian calligraphic styles in Asilah's burgeoning contemporary arts landscape.",
    culturalImportance: "Keeps alive Morocco's centuries-old heritage of the written word and artisanal manuscript illumination.",
    localLegend: "Traditional scribes believe that writing sacred texts with a hand-carved olive reed brings peace and baraka (blessing) to the dwelling.",
    funFact: "Maghrebi script is unique among Arabic writing styles for its sweeping rounded descenders and delicate vocalization marks in red and green ink.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I commission a personalized calligraphy piece on the spot?",
        a: "Yes, small personal name pieces or verses are often completed within 15–30 minutes."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-site-archeologique-zilil",
    city: "asilah",
    name: "Site Archéologique de Zilil (Dchar Jdid)",
    neighborhood: "Zillil",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["history", "adventure", "culture"],
    vibeTags: ["historical", "peaceful", "serene"],
    tags: [
      "ancient",
      "authentic",
      "cultural-tour",
      "day-trip",
      "historical",
      "off-the-beaten-path",
      "walk-in"
    ],
    badges: ["historic-landmark", "hidden-gem", "educational"],
    badge: "hidden-gem",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 12.5,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open daylight hours daily",
    paymentMethods: ["cash_mad"],
    amenities: ["street_parking", "walking_paths"],
    restrictions: ["Unexcavated archaeological ground; do not take stones or artifacts"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "The ancient Phoenician and Roman colonial city of Iulia Constantia Zilil, located at Dchar Jdid northeast of Asilah. Founded by Emperor Augustus between 33 and 25 BC for veterans, the site preserves foundation walls of Roman thermal baths, a four-compartment reservoir, a temple complex, and a rare 4th-century paleo-Christian basilica.",
    shortValueProp: "Ruins of the Augustan Roman colony of Zilil featuring ancient baths and a paleo-Christian basilica",
    googleRating: 4.2,
    reviewCount: 40,
    googleReviewCount: 40,
    tip: "A dedicated historical detour best visited with a rental car or negotiated taxi ride from Asilah.",
    tips: [
      "Wear sturdy walking shoes as the site consists of unpaved archaeological earth and grass paths.",
      "Bring water and sun protection as there are no tourist facilities or shaded buildings on site."
    ],
    highlights: [
      "Foundations of the Augustan Roman city of Iulia Constantia Zilil",
      "Remains of a 4th-century paleo-Christian three-aisled basilica with baptistery",
      "Roman bath complex (*thermae*) and ancient water reservoir system"
    ],
    emotionalBenefits: ["Historic", "Quiet", "Educational"],
    bestTimeToVisit: "Morning or spring months",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (best October through May)",
    ticketTypes: [
      {
        name: "Free Site Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free open site access",
    includedServices: ["Archaeological site access"],
    excludedServices: ["Transportation", "On-site guides"],
    hiddenCostsInfo: "Grand taxi fare from Asilah (~50-80 MAD round-trip)",
    address: "Dchar Jdid (Zilil), Commune Had Gharbia, Asilah 90050",
    coordinates: { lat: 35.5269, lng: -5.9328 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.5269,-5.9328",
    parkingInfo: "Free dirt roadside parking near the village entrance of Dchar Jdid",
    publicTransportInfo: "Grand taxi from Asilah heading toward Had Gharbia / Dchar Jdid",
    dressCode: "Sturdy casual outdoor wear",
    equipmentNeeded: ["Walking shoes", "Water", "Sun protection"],
    fitnessLevel: "Moderate (Walking on uneven grassy terrain)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Open unexcavated terrain with low stone walls",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Asilah Medina & Art Murals",
        type: "visit",
        id: "asilah-medina",
        distanceKm: 12.5
      }
    ],
    storyTitle: "The Forgotten Roman Colony of Augustus",
    history: "Zilil was established as a Phoenician-Punic settlement before being granted the status of Roman colony (*colonia*) by Emperor Augustus around 33-25 BC. It was a primary stop on the Antonine Itinerary before its destruction during 5th-century Vandal incursions.",
    culturalImportance: "One of the most consequential archaeological sites of Mauritania Tingitana, yielding crucial numismatic and architectural evidence of early Roman-Berber integration.",
    localLegend: "Local village tradition held that ancient treasures lay buried within the subterranean channels of the Roman aqueduct.",
    funFact: "The three-aisled Christian basilica excavated at Zilil is the only paleo-Christian church of its design ever unearthed in northern Morocco.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is there an admission fee or ticket booth at Zilil?",
        a: "No, the site remains an open, rural archaeological zone without an entry fee."
      }
    ],
    contactPhone: ""
  }
];