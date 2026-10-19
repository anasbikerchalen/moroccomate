/**
 * =========================================================================
 * [CASABLANCA] THINGS TO DO — NATURE & ADVENTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/casablanca/index.ts
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

// ══ LISTINGS — NATURE & ADVENTURE ══
export const casablancaNatureThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-corniche",
    city: "casablanca",
    name: "La Corniche & Ain Diab Beach",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "romantic", "nomad"],
    tags: ["coastal", "nature", "relaxed", "sunset", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 4,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Casablanca's vibrant seaside promenade stretching along the Atlantic with beaches, cafes, and nightlife. Perfect for walks, people-watching, and sunset views.",
    shortValueProp: "Beautiful Atlantic promenade with beaches, cafes and lively atmosphere",
    googleRating: 4.4,
    reviewCount: 11320,
    googleReviewCount: 6850,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 3200,
    viatorRating: 4.2,
    viatorReviewCount: 850,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 420,
    tip: "Walk from the Hassan II Mosque to Ain Diab for the best experience. Great for sunset and evening strolls.",
    tips: ["not available"],
    highlights: [
      "Long scenic walkway along the ocean",
      "Public beaches and beach clubs",
      "Sunset views with the mosque in the background"
    ],
    emotionalBenefits: ["Relaxed", "Scenic", "Social"],
    bestTimeToVisit: "Late afternoon for sunset or evening",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "Free Public Access",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public promenade access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Beach club entry or drinks optional",
    address: "La Corniche, Ain Diab, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Corniche+Ain+Diab+Casablanca",
    parkingInfo: "Paid parking along the corniche",
    publicTransportInfo: "Taxi or tram (20-30 MAD from center)",
    dressCode: "Casual beachwear on the sand",
    equipmentNeeded: ["Sunscreen", "Camera"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Well-lit and popular with locals",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "Perfect for a long walk and people watching. Beautiful at sunset.",
        author: "Sophie & Lucas",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Hassan II Mosque",
        type: "visit",
        id: "casablanca-hassan-ii-mosque"
      }
    ],
    storyTitle: "The Beating Heart of Casablanca's Coast",
    history: "Developed in the 20th century as a leisure area for the growing city, now a social hub for residents and visitors.",
    culturalImportance: "Symbol of Casablanca's modern, cosmopolitan lifestyle.",
    localLegend: "Locals say the best mint tea in the city is served along the corniche at sunset.",
    funFact: "The promenade is over 5km long and a favorite for joggers and families.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I swim here?",
        a: "Yes at Ain Diab beach, but the Atlantic can be cold."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-corniche-beaches",
    city: "casablanca",
    name: "Ain Diab & Plage Lalla Meryem",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "family", "nomad"],
    tags: ["coastal", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 4.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24/7 (clubs have hours)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Popular public and semi-private beaches along the Corniche with golden sand, beach clubs, and a lively summer atmosphere.",
    shortValueProp: "Lively Atlantic beaches with clubs and golden sand",
    googleRating: 4,
    reviewCount: 2105,
    googleReviewCount: 1250,
    tripadvisorRating: 3.9,
    tripadvisorReviewCount: 580,
    viatorRating: 3.8,
    viatorReviewCount: 180,
    getyourguideRating: 3.7,
    getyourguideReviewCount: 95,
    tip: "Plage Lalla Meryem is quieter. Many beach clubs offer day passes with facilities.",
    tips: ["not available"],
    highlights: [
      "Wide sandy beaches with Atlantic views",
      "Beach clubs with pools and restaurants",
      "Great for sunset walks"
    ],
    emotionalBenefits: ["Relaxed", "Social", "Scenic"],
    bestTimeToVisit: "Afternoon or sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Free Public Beach",
        price: 0
      },
      {
        name: "Beach Club Day Pass",
        price: 150
      }
    ],
    discountsInfo: "Public beach is free",
    includedServices: ["Public beach access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Club entry or rentals optional",
    address: "Ain Diab, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ain+Diab+Beach+Casablanca",
    parkingInfo: "Paid parking along Corniche",
    publicTransportInfo: "Taxi from center",
    dressCode: "Beachwear",
    equipmentNeeded: ["Sunscreen", "Towel"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Lifeguards in season",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "Nice beach for a day. The clubs are convenient if you want facilities.",
        author: "The Rossi Family",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "La Corniche",
        type: "visit",
        id: "casablanca-corniche"
      }
    ],
    storyTitle: "Casablanca's Coastal Playground",
    history: "Developed as a leisure area in the mid-20th century and remains the city's main beach destination.",
    culturalImportance: "A place where Casablancans come to relax and socialize by the sea.",
    localLegend: "Fishermen say the best catches come from waters near the Corniche.",
    funFact: "Many beach clubs turn into vibrant nightlife spots after dark.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are the beaches clean?",
        a: "Public sections vary; clubs are better maintained."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-port",
    city: "casablanca",
    name: "Port of Casablanca",
    neighborhood: "Port Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["active", "authentic", "coastal", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 3,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "Open 24/7 (viewing areas)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Africa's largest artificial port and one of the busiest in the world. Watch massive ships, cranes, and experience the industrial maritime energy.",
    shortValueProp: "Africa's largest port with impressive ships and industrial views",
    googleRating: 4,
    reviewCount: 1450,
    googleReviewCount: 890,
    tripadvisorRating: 3.9,
    tripadvisorReviewCount: 410,
    viatorRating: 3.8,
    viatorReviewCount: 95,
    getyourguideRating: 3.7,
    getyourguideReviewCount: 55,
    tip: "Best viewed from the promenade or during a boat tour. The scale is impressive.",
    tips: ["not available"],
    highlights: [
      "Massive cranes and container ships",
      "Working industrial harbor atmosphere",
      "Great views of the city skyline"
    ],
    emotionalBenefits: ["Impressive", "Vibrant", "Authentic"],
    bestTimeToVisit: "Daytime or golden hour",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Public Viewing",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public viewing areas"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Port of Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Port+of+Casablanca",
    parkingInfo: "Limited; use nearby lots",
    publicTransportInfo: "Taxi or tram",
    dressCode: "Casual",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Stay in designated viewing areas",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Traveler",
        quote: "The sheer size of the ships is incredible. A different side of Casablanca.",
        author: "Omar S.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Hassan II Mosque",
        type: "visit",
        id: "casablanca-hassan-ii-mosque"
      }
    ],
    storyTitle: "The Economic Engine of Morocco",
    history: "Developed in the early 20th century and expanded massively, it handles over 30% of Morocco's trade.",
    culturalImportance: "The heartbeat of Casablanca's economy and connection to the world.",
    localLegend: "Old dock workers tell stories of legendary storms and giant ships.",
    funFact: "It processes over 30 million tons of cargo annually.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I take a boat tour?",
        a: "Yes, several operators offer harbor tours."
      }
    ],
    contactPhone: "",
  }
];
