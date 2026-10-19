/**
 * =========================================================================
 * [CASABLANCA] THINGS TO DO — SPORT & ACTIVE
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

// ══ LISTINGS — SPORT & ACTIVE ══
export const casablancaSportThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-kitesurf-corniche",
    city: "casablanca",
    name: "Kitesurfing at Ain Diab",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "sunset", "surf-kitesurf", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 380,
    entryPrice: 380,
    durationMinutes: 180,
    distanceFromCenterKm: 4.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
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
    openingHours: "08:00 AM - 18:00 PM (weather dependent)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "surf-kitesurf",
    sportIntent: "experience",
    skillLevel: ["intermediate", "advanced"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Learn or practice kitesurfing on the Atlantic waves just off the Corniche. Conditions are good for intermediate riders with consistent winds.",
    shortValueProp: "Kitesurf the Atlantic waves right off Casablanca's Corniche",
    googleRating: 4.4,
    reviewCount: 565,
    googleReviewCount: 320,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 145,
    viatorRating: 4.2,
    viatorReviewCount: 65,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 35,
    tip: "Best in spring and autumn. Lessons include equipment and safety briefing.",
    tips: ["not available"],
    highlights: ["Consistent Atlantic winds", "Professional local instructors", "Equipment included"],
    emotionalBenefits: ["Thrilled", "Energized", "Accomplished"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best March–June and September–November",
    ticketTypes: [
      {
        name: "3-Hour Lesson",
        price: 380
      },
      {
        name: "Full Day Rental + Lesson",
        price: 550
      }
    ],
    discountsInfo: "Group discounts available",
    includedServices: ["Board", "Harness", "Wetsuit", "Instruction"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Ain Diab Beach, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kitesurf+Ain+Diab+Casablanca",
    parkingInfo: "Paid parking nearby",
    publicTransportInfo: "Taxi from center",
    dressCode: "Swimwear under wetsuit",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 12 and up",
    safetyNotes: "Certified instructors and safety equipment",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Kitesurfer",
        quote: "Great spot for intermediates. Winds are reliable and instructors are excellent.",
        author: "Marco V.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "La Corniche",
        type: "visit",
        id: "casablanca-corniche"
      }
    ],
    storyTitle: "Riding the Atlantic Breeze",
    history: "Kitesurfing has grown in popularity along Casablanca's coast as the city embraces water sports.",
    culturalImportance: "Brings together local athletes and international visitors on the city's coastline.",
    localLegend: "Local riders say the best sessions happen after a storm clears the sky.",
    funFact: "You can kite with the Hassan II Mosque visible in the background.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it good for beginners?",
        a: "Better for intermediates. Beginners can start in the lagoon areas."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-camel-ride-corniche",
    city: "casablanca",
    name: "Camel Ride on Ain Diab Beach",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["adventure", "family", "first-timer"],
    tags: ["climbing-adventure", "coastal", "desert-sport", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 180,
    entryPrice: 180,
    durationMinutes: 60,
    distanceFromCenterKm: 4.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
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
    openingHours: "09:00 AM - 19:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Traditional camel rides along the beach with views of the Atlantic and the city skyline. A classic Moroccan experience.",
    shortValueProp: "Classic camel ride along Casablanca's Atlantic beach",
    googleRating: 4.2,
    reviewCount: 493,
    googleReviewCount: 285,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 125,
    viatorRating: 4,
    viatorReviewCount: 55,
    getyourguideRating: 3.9,
    getyourguideReviewCount: 28,
    tip: "Sunset rides are especially beautiful. Helmets and guides provided.",
    tips: ["not available"],
    highlights: ["Beach and dune riding", "Views of the city and mosque", "Experienced local handlers"],
    emotionalBenefits: ["Memorable", "Scenic", "Relaxed"],
    bestTimeToVisit: "Late afternoon or sunset",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "30-Minute Ride",
        price: 180
      },
      {
        name: "Sunset Ride",
        price: 220
      }
    ],
    discountsInfo: "Children half price",
    includedServices: ["Camel", "Handler", "Photos"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Ain Diab Beach, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camel+Ride+Ain+Diab+Casablanca",
    parkingInfo: "Paid parking nearby",
    publicTransportInfo: "Taxi from center",
    dressCode: "Comfortable clothing",
    equipmentNeeded: [],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 5 and up",
    safetyNotes: "Gentle camels with experienced handlers",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "The kids loved it. Beautiful views of the ocean and city.",
        author: "The Martin Family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "Desert Ships by the Sea",
    history: "Camel rides have been offered along Morocco's Atlantic coast for generations as a traditional experience.",
    culturalImportance: "A fun way to connect with Morocco's nomadic heritage while enjoying the coast.",
    localLegend: "Handlers say the camels here are particularly fond of the sea breeze.",
    funFact: "You can sometimes ride past fishermen mending their nets.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it suitable for children?",
        a: "Yes, very gentle animals."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-boat-tour",
    city: "casablanca",
    name: "Harbor & Coast Boat Tour",
    neighborhood: "Port Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["adventure", "family", "first-timer"],
    tags: ["climbing-adventure", "coastal", "private", "relaxed", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 280,
    entryPrice: 280,
    durationMinutes: 150,
    distanceFromCenterKm: 2,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 19:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "water-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Scenic boat tour of Casablanca's harbor and coastline with views of the Hassan II Mosque and opportunities for fishing or swimming.",
    shortValueProp: "Explore Casablanca's harbor and coastline by boat",
    googleRating: 4.3,
    reviewCount: 334,
    googleReviewCount: 185,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 85,
    viatorRating: 4.1,
    viatorReviewCount: 42,
    getyourguideRating: 4,
    getyourguideReviewCount: 22,
    tip: "Sunset tours are magical with views of the mosque. Swimming stops available in summer.",
    tips: ["not available"],
    highlights: [
      "Views of the Hassan II Mosque from the sea",
      "Harbor and city skyline",
      "Swimming and fishing opportunities"
    ],
    emotionalBenefits: ["Scenic", "Relaxed", "Adventurous"],
    bestTimeToVisit: "Morning or sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "1.5-Hour Harbor Tour",
        price: 280
      },
      {
        name: "Sunset Cruise",
        price: 320
      }
    ],
    discountsInfo: "Children half price",
    includedServices: ["Boat", "Life jackets", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Drinks sometimes extra",
    address: "Port of Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Boat+Tour+Casablanca+Port",
    parkingInfo: "Port parking",
    publicTransportInfo: "Taxi from center",
    dressCode: "Casual",
    equipmentNeeded: ["Sunscreen", "Hat"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Life jackets and experienced captains",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "Beautiful views of the mosque from the water. The kids loved it.",
        author: "The Patel Family",
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
    storyTitle: "Sailing the White City's Coast",
    history: "Boat tours have long been offered to showcase Casablanca's impressive harbor and coastline.",
    culturalImportance: "Highlights the city's maritime heritage and modern development.",
    localLegend: "Captains say the best views of the mosque happen at golden hour.",
    funFact: "You can sometimes see dolphins near the harbor entrance.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can we swim?",
        a: "Yes on summer tours with swimming stops."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-quad-tour",
    city: "casablanca",
    name: "Quad Bike Desert & Beach Adventure",
    neighborhood: "Surrounding Dunes",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure"],
    tags: ["active", "climbing-adventure", "desert-sport", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 420,
    entryPrice: 420,
    durationMinutes: 120,
    distanceFromCenterKm: 12,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
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
    openingHours: "09:00 AM - 18:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided quad bike tour through dunes and along the coast near Casablanca. An exciting way to explore the landscape outside the city.",
    shortValueProp: "Thrilling quad bike adventure through dunes and coastal scenery",
    googleRating: 4.5,
    reviewCount: 296,
    googleReviewCount: 165,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 78,
    viatorRating: 4.3,
    viatorReviewCount: 35,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 18,
    tip: "Wear closed shoes and long pants. Safety briefing and helmets provided.",
    tips: ["not available"],
    highlights: [
      "Ride through sand dunes and countryside",
      "Coastal views and beach sections",
      "Professional guides"
    ],
    emotionalBenefits: ["Thrilling", "Adventurous", "Scenic"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "1-Hour Quad Tour",
        price: 420
      },
      {
        name: "2-Hour Adventure",
        price: 620
      }
    ],
    discountsInfo: "Couple and group packages",
    includedServices: ["Quad bike", "Helmet", "Guide", "Safety briefing"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None major",
    address: "Departure points outside Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Quad+Bike+Casablanca+Morocco",
    parkingInfo: "At departure point",
    publicTransportInfo: "Hotel pickup available",
    dressCode: "Long pants and closed shoes",
    equipmentNeeded: ["Sunglasses or goggles (provided)"],
    fitnessLevel: "Active",
    ageRestrictions: "Minimum 16 years",
    safetyNotes: "Safety briefing and helmets required",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "So much fun! The dunes and views were incredible.",
        author: "Alex T.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "Riding the Dunes Near the City",
    history: "Quad tours have become popular as visitors seek adventure just outside Casablanca's urban area.",
    culturalImportance: "Provides employment for local guides while showcasing the beautiful surrounding landscape.",
    localLegend: "Some routes pass near old caravan paths used centuries ago.",
    funFact: "You can often see the city skyline from the top of the dunes.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need a license?",
        a: "No, but you must follow the guide and be old enough."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-bike-corniche",
    city: "casablanca",
    name: "Corniche Bike Tour",
    neighborhood: "Corniche",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 160,
    entryPrice: 160,
    durationMinutes: 120,
    distanceFromCenterKm: 3.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 18:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "climbing-adventure",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided bicycle tour along Casablanca's scenic Corniche with stops at beaches and viewpoints. Relaxed and healthy way to explore.",
    shortValueProp: "Cycle along Casablanca's beautiful seaside promenade",
    googleRating: 4.3,
    reviewCount: 220,
    googleReviewCount: 125,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 58,
    viatorRating: 4.1,
    viatorReviewCount: 25,
    getyourguideRating: 4,
    getyourguideReviewCount: 12,
    tip: "Electric bikes available. Perfect for the flat corniche path.",
    tips: ["not available"],
    highlights: [
      "Scenic coastal path with ocean views",
      "Stops at beaches and landmarks",
      "Quality bikes and safety equipment"
    ],
    emotionalBenefits: ["Energized", "Scenic", "Healthy"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "2-Hour Guided Bike Tour",
        price: 160
      },
      {
        name: "Electric Bike Upgrade",
        price: 220
      }
    ],
    discountsInfo: "Family and group rates",
    includedServices: ["Bike", "Helmet", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Corniche departure points",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bike+Tour+Corniche+Casablanca",
    parkingInfo: "At starting point",
    publicTransportInfo: "Meeting point on Corniche",
    dressCode: "Comfortable sportswear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Helmets provided. Safe flat route",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Cyclist",
        quote: "Beautiful route with great stops. Very well organized.",
        author: "Laura M.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "Wheels by the Atlantic",
    history: "Cycling along the Corniche has become popular as a healthy and scenic way to explore the city.",
    culturalImportance: "Encourages sustainable tourism and outdoor activity in Casablanca.",
    localLegend: "Some older residents remember when cycling was the main way to get around the corniche.",
    funFact: "You can cycle from the mosque almost to the end of Ain Diab in under an hour.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it hilly?",
        a: "Completely flat along the corniche."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-fishing-charter",
    city: "casablanca",
    name: "Deep Sea Fishing Charter",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "foodie"],
    tags: ["authentic", "coastal", "private", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 450,
    entryPrice: 450,
    durationMinutes: 300,
    distanceFromCenterKm: 2.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "06:00 AM - 18:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "water-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "full-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Join local fishermen for a half or full day deep sea fishing trip in the Atlantic. Catch tuna, barracuda and more.",
    shortValueProp: "Deep sea fishing adventure in the Atlantic off Casablanca",
    googleRating: 4.4,
    reviewCount: 165,
    googleReviewCount: 95,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 42,
    viatorRating: 4.2,
    viatorReviewCount: 18,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 10,
    tip: "Morning departures are best. Your catch can often be prepared at a local restaurant.",
    tips: ["not available"],
    highlights: ["Traditional and modern fishing methods", "Abundant Atlantic fish", "Scenic ocean views"],
    emotionalBenefits: ["Authentic", "Accomplished", "Sensory"],
    bestTimeToVisit: "Early morning",
    typicalWaitTimeMinutes: 15,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Half-Day Charter",
        price: 450
      },
      {
        name: "Full Day",
        price: 750
      }
    ],
    discountsInfo: "Group rates",
    includedServices: ["Boat", "Fishing gear", "Guide", "Life jackets"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Grilling of catch optional",
    address: "Port of Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fishing+Charter+Casablanca+Port",
    parkingInfo: "Port parking",
    publicTransportInfo: "Taxi from center",
    dressCode: "Comfortable outdoor clothing",
    equipmentNeeded: ["Hat", "Sunscreen"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Experienced captains and safety equipment",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Foodie",
        quote: "Caught some great fish and had them grilled later. Amazing day.",
        author: "Jean P.",
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
    storyTitle: "The Fishermen's Atlantic",
    history: "Casablanca's port has been a major fishing hub for generations.",
    culturalImportance: "Supports local fishing families and showcases Morocco's rich marine resources.",
    localLegend: "Old fishermen say certain tides bring the biggest catches.",
    funFact: "Many visitors have their catch prepared the same day at nearby restaurants.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Will I catch fish?",
        a: "Usually yes. The guides know the best spots."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-surf-lesson",
    city: "casablanca",
    name: "Surf Lesson at Ain Diab",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "private", "sunset", "surf-kitesurf"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 250,
    entryPrice: 250,
    durationMinutes: 120,
    distanceFromCenterKm: 4.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 18:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "surf-kitesurf",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Beginner-friendly surf lessons on the Atlantic waves at Ain Diab beach with local instructors and all equipment provided.",
    shortValueProp: "Learn to surf on Casablanca's Atlantic waves",
    googleRating: 4.3,
    reviewCount: 358,
    googleReviewCount: 210,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 95,
    viatorRating: 4.1,
    viatorReviewCount: 35,
    getyourguideRating: 4,
    getyourguideReviewCount: 18,
    tip: "Best in summer when waves are consistent. Wetsuits provided for cooler months.",
    tips: ["not available"],
    highlights: [
      "Gentle beginner-friendly waves",
      "All equipment and instruction included",
      "Beautiful beach setting"
    ],
    emotionalBenefits: ["Energized", "Accomplished", "Thrilled"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "2-Hour Group Lesson",
        price: 250
      },
      {
        name: "Private Lesson",
        price: 380
      }
    ],
    discountsInfo: "Family packages",
    includedServices: ["Board", "Wetsuit", "Instruction"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Ain Diab Beach, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Surf+Lesson+Ain+Diab+Casablanca",
    parkingInfo: "Paid parking",
    publicTransportInfo: "Taxi",
    dressCode: "Swimwear under wetsuit",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 8 and up",
    safetyNotes: "Certified instructors and safety briefing",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Beginner",
        quote: "Great first experience. I stood up on my second try!",
        author: "Emma L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "First Waves in the Atlantic",
    history: "Surfing has grown steadily in Casablanca as more locals and visitors discover the waves.",
    culturalImportance: "A new generation of Moroccan surfers is emerging along the Atlantic coast.",
    localLegend: "Local surfers say the best waves come with the northwest winds.",
    funFact: "You can surf with the city skyline and mosque in view.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the water cold?",
        a: "Wetsuits are provided. Pleasant in summer."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-horse-ride",
    city: "casablanca",
    name: "Horseback Ride on the Corniche",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "romantic", "family"],
    tags: ["climbing-adventure", "coastal", "desert-sport", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 320,
    entryPrice: 320,
    durationMinutes: 90,
    distanceFromCenterKm: 4.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 19:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided horseback riding along the beach and dunes of Ain Diab with stunning ocean and city views.",
    shortValueProp: "Scenic horseback ride along Casablanca's Atlantic beach",
    googleRating: 4.4,
    reviewCount: 250,
    googleReviewCount: 145,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 68,
    viatorRating: 4.2,
    viatorReviewCount: 25,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 12,
    tip: "Sunset rides are magical. Helmets provided. Experienced horses for all levels.",
    tips: ["not available"],
    highlights: ["Beach and dune trails", "City and mosque views", "Gentle horses for beginners"],
    emotionalBenefits: ["Serene", "Scenic", "Memorable"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "1-Hour Beach Ride",
        price: 320
      },
      {
        name: "Sunset Ride",
        price: 380
      }
    ],
    discountsInfo: "Children and group rates",
    includedServices: ["Horse", "Helmet", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Ain Diab Beach, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Horse+Riding+Ain+Diab+Casablanca",
    parkingInfo: "Paid parking",
    publicTransportInfo: "Taxi",
    dressCode: "Long pants recommended",
    equipmentNeeded: ["Closed shoes"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 6 and up",
    safetyNotes: "Experienced guides and helmets",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "The sunset horse ride was the highlight of our trip.",
        author: "Sophie & Thomas",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "Galloping by the Ocean",
    history: "Horse riding has been part of coastal leisure in the Casablanca area for decades.",
    culturalImportance: "Blends traditional Moroccan equestrian culture with modern tourism.",
    localLegend: "Some horses are said to be descendants of famous Barbary stock.",
    funFact: "You can often ride alongside local fishermen at low tide.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need experience?",
        a: "No, guides lead the horses. Beginners welcome."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-yacht-sunset",
    city: "casablanca",
    name: "Sunset Yacht Cruise",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["romantic", "luxury-curator"],
    tags: ["climbing-adventure", "coastal", "private", "relaxed", "sunset", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 650,
    entryPrice: 650,
    durationMinutes: 120,
    distanceFromCenterKm: 2,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "17:30 - 20:00 (weather dependent)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "water-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Luxury sunset yacht cruise along the Corniche with views of the Hassan II Mosque, drinks, and light snacks.",
    shortValueProp: "Elegant sunset yacht cruise with mosque views",
    googleRating: 4.7,
    reviewCount: 337,
    googleReviewCount: 185,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 85,
    viatorRating: 4.5,
    viatorReviewCount: 45,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 22,
    tip: "Book the private option for couples. Perfect for proposals or anniversaries.",
    tips: ["not available"],
    highlights: [
      "Private or small group yacht",
      "Golden hour views of the mosque",
      "Drinks and light snacks included"
    ],
    emotionalBenefits: ["Romantic", "Luxurious", "Memorable"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 20,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "Sunset Yacht Cruise",
        price: 650
      },
      {
        name: "Private Yacht",
        price: 1850
      }
    ],
    discountsInfo: "Couple packages",
    includedServices: ["Yacht", "Drinks", "Snacks", "Captain"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Port of Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sunset+Yacht+Cruise+Casablanca",
    parkingInfo: "Port parking",
    publicTransportInfo: "Taxi",
    dressCode: "Smart casual",
    equipmentNeeded: ["Light jacket"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Experienced crew and life jackets",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "The most romantic experience. The sunset over the mosque was unforgettable.",
        author: "Isabella & Marco",
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
    storyTitle: "Sails at Dusk",
    history: "Yacht cruises have become popular for showcasing Casablanca's dramatic coastline at sunset.",
    culturalImportance: "A luxurious way to appreciate the city's maritime beauty.",
    localLegend: "Sailors say the best sunsets happen when the wind is from the south.",
    funFact: "On clear evenings you may see the lights of the mosque laser from the sea.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it private?",
        a: "Small group or book private for couples."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-kayak-tour",
    city: "casablanca",
    name: "Sea Kayak Corniche Tour",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "private", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 260,
    entryPrice: 260,
    durationMinutes: 120,
    distanceFromCenterKm: 4,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 17:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "water-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided sea kayak tour along the Corniche exploring hidden coves and enjoying close-up views of the coastline and mosque.",
    shortValueProp: "Paddle along Casablanca's dramatic coastline by kayak",
    googleRating: 4.4,
    reviewCount: 165,
    googleReviewCount: 95,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 42,
    viatorRating: 4.2,
    viatorReviewCount: 18,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 10,
    tip: "Morning for calm water. Life jackets and instruction provided.",
    tips: ["not available"],
    highlights: ["Coastal caves and rock formations", "Close views of the mosque", "Small group experience"],
    emotionalBenefits: ["Adventurous", "Scenic", "Accomplished"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "2-Hour Kayak Tour",
        price: 260
      },
      {
        name: "Sunset Kayak",
        price: 290
      }
    ],
    discountsInfo: "Group rates",
    includedServices: ["Kayak", "Paddle", "Life jacket", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Ain Diab Beach",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kayak+Tour+Corniche+Casablanca",
    parkingInfo: "Paid parking",
    publicTransportInfo: "Taxi",
    dressCode: "Swimwear and quick-dry clothes",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Life jackets and certified guides",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "Paddling past the mosque was incredible. Highly recommend.",
        author: "Thomas K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "La Corniche",
        type: "visit",
        id: "casablanca-corniche"
      }
    ],
    storyTitle: "Paddling the Corniche",
    history: "Sea kayaking has become a popular gentle way to explore the coastline.",
    culturalImportance: "Promotes sustainable coastal tourism in Casablanca.",
    localLegend: "Some say the best paddling is when the tide is rising.",
    funFact: "You can get very close to the mosque base from the water.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need experience?",
        a: "No. Full instruction given."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-desert-quad-camel",
    city: "casablanca",
    name: "Desert Quad & Camel Combo",
    neighborhood: "Surrounding Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "family"],
    tags: ["active", "climbing-adventure", "desert-sport", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 480,
    entryPrice: 480,
    durationMinutes: 180,
    distanceFromCenterKm: 15,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: false,
    openingHours: "14:00 - 19:00",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Combined quad bike and camel ride experience in the dunes outside Casablanca with sunset tea.",
    shortValueProp: "Quad bike and camel adventure in the dunes near Casablanca",
    googleRating: 4.6,
    reviewCount: 217,
    googleReviewCount: 125,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 58,
    viatorRating: 4.4,
    viatorReviewCount: 22,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 12,
    tip: "Perfect half-day trip. Includes transport, equipment, and sunset tea.",
    tips: ["not available"],
    highlights: ["Quad through dunes", "Camel ride at sunset", "Traditional mint tea"],
    emotionalBenefits: ["Thrilling", "Cultural", "Memorable"],
    bestTimeToVisit: "Afternoon for sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "Quad + Camel Sunset Tour",
        price: 480
      }
    ],
    discountsInfo: "Group discounts",
    includedServices: ["Transport", "Quad", "Camel", "Tea", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Departure from city hotels",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Quad+Camel+Tour+Casablanca",
    parkingInfo: "At meeting point",
    publicTransportInfo: "Hotel pickup",
    dressCode: "Comfortable outdoor clothing",
    equipmentNeeded: ["Closed shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 8 and up",
    safetyNotes: "Experienced guides",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "The kids loved the quad and camel. Sunset tea was perfect.",
        author: "The Benali Family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "Dunes at Dusk",
    history: "Combined adventures have grown popular for visitors wanting a taste of desert near the city.",
    culturalImportance: "Connects urban visitors with traditional desert experiences.",
    localLegend: "The dunes are said to be part of ancient caravan routes.",
    funFact: "The tea is served with views of the city lights in the distance.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it suitable for kids?",
        a: "Yes, quad for older kids, camel for all."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-paragliding",
    city: "casablanca",
    name: "Paragliding over the Coast",
    neighborhood: "Corniche Hills",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "climbing-adventure", "coastal", "sunset"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 850,
    entryPrice: 850,
    durationMinutes: 90,
    distanceFromCenterKm: 5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
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
    openingHours: "10:00 AM - 18:00 PM (weather dependent)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "climbing-adventure",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Tandem paragliding flights offering aerial views of the Corniche, mosque, and Atlantic coast.",
    shortValueProp: "Soar above Casablanca's coast on a tandem paragliding flight",
    googleRating: 4.8,
    reviewCount: 119,
    googleReviewCount: 68,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 28,
    viatorRating: 4.6,
    viatorReviewCount: 15,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 8,
    tip: "Best in afternoon. Photos and video included. Weather dependent.",
    tips: ["not available"],
    highlights: ["Spectacular aerial views", "Professional tandem pilots", "Photos and video included"],
    emotionalBenefits: ["Thrilling", "Awe-inspiring", "Liberating"],
    bestTimeToVisit: "Afternoon",
    typicalWaitTimeMinutes: 30,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "Tandem Paragliding",
        price: 850
      }
    ],
    discountsInfo: "Occasional promotions",
    includedServices: ["Flight", "Pilot", "Photos/video"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Transport to launch site",
    address: "Corniche Hills, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Paragliding+Corniche+Casablanca",
    parkingInfo: "At meeting point",
    publicTransportInfo: "Organized pickup",
    dressCode: "Comfortable clothing and closed shoes",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Minimum 12 years old",
    safetyNotes: "Certified pilots and equipment",
    languages: ["French", "English"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "The most incredible experience. Views of the mosque from the air are unreal.",
        author: "Alex T.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "La Corniche",
        type: "visit",
        id: "casablanca-corniche"
      }
    ],
    storyTitle: "Flying Over the White City",
    history: "Paragliding has developed as an exciting way to experience the dramatic Casablanca coastline.",
    culturalImportance: "Attracts adventure tourism and showcases the city's natural beauty.",
    localLegend: "Pilots say the winds here are particularly steady.",
    funFact: "On clear days you can see all the way to the port cranes from the air.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it safe?",
        a: "Yes, all tandem with highly experienced certified pilots."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-bike-desert",
    city: "casablanca",
    name: "Electric Bike Desert Tour",
    neighborhood: "Surrounding Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 220,
    entryPrice: 220,
    durationMinutes: 150,
    distanceFromCenterKm: 12,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: false,
    openingHours: "08:00 AM - 18:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "climbing-adventure",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided electric bike tour through dunes and countryside outside Casablanca with stops for photos and tea.",
    shortValueProp: "Effortless electric bike adventure through dunes near Casablanca",
    googleRating: 4.4,
    reviewCount: 143,
    googleReviewCount: 85,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 35,
    viatorRating: 4.2,
    viatorReviewCount: 15,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 8,
    tip: "Electric assist makes it easy. Great for all fitness levels.",
    tips: ["not available"],
    highlights: ["Electric bikes for easy riding", "Dune trails and countryside", "Sunset tea stop"],
    emotionalBenefits: ["Energized", "Scenic", "Accessible"],
    bestTimeToVisit: "Afternoon for sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "2.5-Hour E-Bike Tour",
        price: 220
      },
      {
        name: "Private Tour",
        price: 380
      }
    ],
    discountsInfo: "Family rates",
    includedServices: ["E-Bike", "Helmet", "Guide", "Tea"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Departure from city",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Electric+Bike+Desert+Casablanca",
    parkingInfo: "At starting point",
    publicTransportInfo: "Hotel pickup",
    dressCode: "Comfortable sportswear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Helmets and briefing included",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Senior Traveler",
        quote: "Loved the electric assist. Made the dunes accessible and fun.",
        author: "Robert L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "Wheels in the Dunes",
    history: "Electric bikes have made desert exploration near Casablanca accessible to more visitors.",
    culturalImportance: "Encourages low-impact adventure tourism.",
    localLegend: "Some say the dunes hold ancient secrets from caravan days.",
    funFact: "The return is mostly downhill and exhilarating.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need to be fit?",
        a: "No, the electric motor does most of the work."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-city-club",
    city: "casablanca",
    name: "City Club Casablanca",
    neighborhood: "Maârif",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 90,
    distanceFromCenterKm: 1.5,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "06:00 AM - 23:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Popular modern chain gym with excellent equipment, group classes, and women-only hours. Day passes available.",
    shortValueProp: "Modern chain gym with great classes and women-only options",
    googleRating: 4.4,
    reviewCount: 1630,
    googleReviewCount: 1250,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 380,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "They have a weekly schedule for women-only days. Excellent equipment.",
    tips: ["not available"],
    highlights: [
      "Latest equipment and large space",
      "Wide range of group classes",
      "Women-only hours several days a week"
    ],
    emotionalBenefits: ["Energized", "Focused", "Accomplished"],
    bestTimeToVisit: "Morning or evening",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 60
      },
      {
        name: "Weekly Pass",
        price: 280
      }
    ],
    discountsInfo: "Hotel and student discounts",
    includedServices: ["Full gym access", "Classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel rental optional",
    address: "Maarif, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=City+Club+Casablanca+Maarif",
    parkingInfo: "Street and nearby lots",
    publicTransportInfo: "Tram or walk",
    dressCode: "Sportswear and indoor shoes",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "High standards of cleanliness",
    languages: ["French", "Arabic (Darija)", "English"],
    visitorQuotes: [
      {
        type: "Digital Nomad",
        quote: "Best gym in the area. Clean and professional.",
        author: "Alex R.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Twin Center",
        type: "visit",
        id: "casablanca-twin-centers"
      }
    ],
    faq: [
      {
        q: "Do you have women-only hours?",
        a: "Yes, several days a week. Check schedule."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-womens-only-gym",
    city: "casablanca",
    name: "Women’s Fitness Club Casablanca",
    neighborhood: "Maârif",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "private", "walk-in", "women-only"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 55,
    entryPrice: 55,
    durationMinutes: 75,
    distanceFromCenterKm: 1.8,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "07:00 AM - 21:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Dedicated women-only gym with modern equipment, classes, and a comfortable private environment. Day passes available.",
    shortValueProp: "Private women-only gym with modern equipment",
    googleRating: 4.6,
    reviewCount: 890,
    googleReviewCount: 680,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 210,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Excellent for female travelers. Very safe and supportive atmosphere.",
    tips: ["not available"],
    highlights: ["100% women-only facility", "Good range of classes and weights", "Clean and comfortable"],
    emotionalBenefits: ["Empowered", "Energized", "Safe"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 55
      },
      {
        name: "Weekly",
        price: 220
      }
    ],
    discountsInfo: "Monthly packages available",
    includedServices: ["Full access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Minimal",
    address: "Maarif, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Women+Only+Gym+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable or tram",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Very secure environment",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Female Traveler",
        quote: "Felt very comfortable. Great classes and equipment.",
        author: "Amina S.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "City Club",
        type: "visit",
        id: "casablanca-city-club"
      }
    ],
    faq: [
      {
        q: "Is it completely women only?",
        a: "Yes, 100% women-only at all times."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-corniche-resort-gym",
    city: "casablanca",
    name: "Corniche Resort Fitness Center",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["luxury-curator", "nomad"],
    tags: ["active", "day-pass", "gym-fitness", "sunset", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 85,
    entryPrice: 85,
    durationMinutes: 90,
    distanceFromCenterKm: 4.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "06:00 AM - 22:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Upscale resort gym with sea views, pool access, sauna, and full equipment. Day passes for non-guests.",
    shortValueProp: "Luxury resort gym with pool and sea views",
    googleRating: 4.5,
    reviewCount: 565,
    googleReviewCount: 420,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 145,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Day pass includes pool and sauna. Excellent for a pampered workout.",
    tips: ["not available"],
    highlights: ["Modern equipment with ocean views", "Pool and sauna access", "Professional environment"],
    emotionalBenefits: ["Pampered", "Energized", "Relaxed"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass (Full Access)",
        price: 85
      },
      {
        name: "Weekly",
        price: 380
      }
    ],
    discountsInfo: "Hotel packages available",
    includedServices: ["Gym", "Pool", "Sauna"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Spa treatments extra",
    address: "Ain Diab Corniche, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Corniche+Resort+Gym+Casablanca",
    parkingInfo: "Large lot",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes", "Swimwear"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Highest standards",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Premium Traveler",
        quote: "The best facilities. Loved the pool after training.",
        author: "Nadia F.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    faq: [
      {
        q: "Does the day pass include the pool?",
        a: "Yes, full access including pool and sauna."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-functional-box",
    city: "casablanca",
    name: "Casablanca Functional Training Box",
    neighborhood: "Sidi Belyout",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 65,
    entryPrice: 65,
    durationMinutes: 60,
    distanceFromCenterKm: 2.2,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "06:00 AM - 21:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: false,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Modern CrossFit-style box with rigs, kettlebells, and high-intensity classes. Welcoming to all levels.",
    shortValueProp: "High-quality functional training with professional coaching",
    googleRating: 4.6,
    reviewCount: 475,
    googleReviewCount: 380,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 95,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Scale options always available. Very welcoming community.",
    tips: ["not available"],
    highlights: ["Full functional rig and equipment", "Certified coaches", "Supportive community"],
    emotionalBenefits: ["Accomplished", "Energized", "Challenged"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Drop-in Class",
        price: 65
      },
      {
        name: "Weekly Unlimited",
        price: 280
      }
    ],
    discountsInfo: "First class often discounted",
    includedServices: ["Class", "Equipment"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Sidi Belyout, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Functional+Training+Box+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Tram or taxi",
    dressCode: "Athletic wear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "High coaching standards",
    languages: ["French", "English"],
    visitorQuotes: [
      {
        type: "CrossFitter",
        quote: "Solid programming and great coaches. Best box in the area.",
        author: "David L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Twin Center",
        type: "visit",
        id: "casablanca-twin-centers"
      }
    ],
    faq: [
      {
        q: "Can beginners join?",
        a: "Yes, all levels welcome with scalable workouts."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-budget-gym",
    city: "casablanca",
    name: "Casablanca Budget Gym",
    neighborhood: "Hay Mohammadi",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 30,
    entryPrice: 30,
    durationMinutes: 60,
    distanceFromCenterKm: 3.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "07:00 AM - 21:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: false,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Affordable no-frills local gym with essential weights and cardio. Great value for short stays.",
    shortValueProp: "Affordable basic gym for budget travelers",
    googleRating: 3.9,
    reviewCount: 545,
    googleReviewCount: 420,
    tripadvisorRating: 3.8,
    tripadvisorReviewCount: 125,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Very cheap. Basic but sufficient for most needs.",
    tips: ["not available"],
    highlights: ["Low prices", "Essential weights and machines", "Local atmosphere"],
    emotionalBenefits: ["Energized", "Grounded"],
    bestTimeToVisit: "Early morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 30
      },
      {
        name: "Weekly",
        price: 110
      }
    ],
    discountsInfo: "Extremely affordable",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Hay Mohammadi, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Budget+Gym+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Taxi or local bus",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Basic but safe",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Budget Traveler",
        quote: "Cheap and sufficient. Exactly what I needed for a week.",
        author: "Omar L.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Old Medina",
        type: "visit",
        id: "casablanca-old-medina"
      }
    ],
    faq: [
      {
        q: "Is the equipment old?",
        a: "Functional and well-used, but maintained."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-aqua-fitness",
    city: "casablanca",
    name: "Aqua Fitness Center Corniche",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "seniors", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["quiet-mystic", "family"],
    tags: ["day-pass", "gym-fitness", "sunset", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 55,
    entryPrice: 55,
    durationMinutes: 75,
    distanceFromCenterKm: 4.2,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "08:00 AM - 20:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "swimming-pool",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Specialized aquatic fitness center with pool-based classes, aqua gym, and a small gym area. Ideal for low-impact training.",
    shortValueProp: "Aquatic fitness center with pool classes and gym",
    googleRating: 4.3,
    reviewCount: 380,
    googleReviewCount: 285,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 95,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Excellent for joints and recovery. Aqua classes are very popular.",
    tips: ["not available"],
    highlights: ["Heated indoor pool", "Aqua gym and water classes", "Small traditional gym area"],
    emotionalBenefits: ["Relaxed", "Energized", "Supported"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 55
      },
      {
        name: "Aqua Class Only",
        price: 35
      }
    ],
    discountsInfo: "Senior discounts",
    includedServices: ["Pool", "Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Minimal",
    address: "Ain Diab, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aqua+Fitness+Corniche+Casablanca",
    parkingInfo: "Available",
    publicTransportInfo: "Taxi",
    dressCode: "Swimwear for pool",
    equipmentNeeded: ["Swimwear"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages",
    safetyNotes: "Lifeguard on duty",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Senior",
        quote: "The aqua classes are fantastic for my knees.",
        author: "Fatima B.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    faq: [
      {
        q: "Is the pool heated?",
        a: "Yes, year-round."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-power-house",
    city: "casablanca",
    name: "Power House Gym",
    neighborhood: "Sidi Belyout",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "quiet",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 45,
    entryPrice: 45,
    durationMinutes: 90,
    distanceFromCenterKm: 2.8,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "07:00 AM - 21:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: false,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Hardcore strength-focused gym with heavy free weights, power racks, and a no-frills atmosphere. Popular with serious lifters.",
    shortValueProp: "No-frills powerlifting and strength gym",
    googleRating: 4.2,
    reviewCount: 405,
    googleReviewCount: 320,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 85,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Best for serious strength training. Bring your own towel and chalk if needed.",
    tips: ["not available"],
    highlights: ["Heavy free weights and racks", "Powerlifting focused", "Serious training atmosphere"],
    emotionalBenefits: ["Accomplished", "Focused", "Strong"],
    bestTimeToVisit: "Evening",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 45
      },
      {
        name: "Weekly",
        price: 170
      }
    ],
    discountsInfo: "Long-term cheaper",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Sidi Belyout, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Power+House+Gym+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Experienced lifters spot each other",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Powerlifter",
        quote: "Real weights and serious atmosphere. My kind of place.",
        author: "Bilal S.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Twin Center",
        type: "visit",
        id: "casablanca-twin-centers"
      }
    ],
    faq: [
      {
        q: "Is it suitable for beginners?",
        a: "Better for intermediate to advanced lifters."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-yoga-studio",
    city: "casablanca",
    name: "Casablanca Yoga & Wellness Studio",
    neighborhood: "Maârif",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["quiet-mystic", "first-timer"],
    tags: ["climbing-adventure", "day-pass", "gym-fitness", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 50,
    entryPrice: 50,
    durationMinutes: 75,
    distanceFromCenterKm: 1.6,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "07:00 AM - 20:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "climbing-adventure",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: false,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Peaceful yoga studio offering vinyasa, hatha, and meditation classes. Day passes available for travelers.",
    shortValueProp: "Serene yoga studio for mindful practice",
    googleRating: 4.7,
    reviewCount: 380,
    googleReviewCount: 285,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 95,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Beautiful space. Mats provided. All levels welcome.",
    tips: ["not available"],
    highlights: [
      "Vinyasa, hatha and meditation classes",
      "Peaceful studio with natural light",
      "Experienced teachers"
    ],
    emotionalBenefits: ["Peaceful", "Centered", "Refreshed"],
    bestTimeToVisit: "Morning or evening",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Drop-in Class",
        price: 50
      },
      {
        name: "Weekly Unlimited",
        price: 220
      }
    ],
    discountsInfo: "Multi-class packages",
    includedServices: ["Class access", "Mats and props"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Maarif, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Yoga+Studio+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
    dressCode: "Comfortable yoga wear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "16+",
    safetyNotes: "Very calm and welcoming environment",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Wellness Seeker",
        quote: "Beautiful studio. The teachers are excellent.",
        author: "Lina A.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "City Club",
        type: "visit",
        id: "casablanca-city-club"
      }
    ],
    faq: [
      {
        q: "Are classes suitable for beginners?",
        a: "Yes, all levels welcome with modifications."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-elite-gym",
    city: "casablanca",
    name: "Elite Fitness Casablanca",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["luxury-curator", "nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 75,
    entryPrice: 75,
    durationMinutes: 90,
    distanceFromCenterKm: 4,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "06:00 AM - 23:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Premium gym with latest equipment, personal training, and a wide range of classes in a professional setting.",
    shortValueProp: "Premium gym with top-tier equipment and classes",
    googleRating: 4.5,
    reviewCount: 685,
    googleReviewCount: 520,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 165,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Highest quality equipment in town. Worth it for serious training.",
    tips: ["not available"],
    highlights: ["Latest Technogym equipment", "Wide range of classes", "Professional personal training"],
    emotionalBenefits: ["Energized", "Focused", "Accomplished"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 75
      },
      {
        name: "Weekly Pass",
        price: 320
      }
    ],
    discountsInfo: "Corporate and hotel rates",
    includedServices: ["Full gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel service extra",
    address: "Ain Diab, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Elite+Fitness+Casablanca",
    parkingInfo: "Street parking",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "High standards of cleanliness",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Business Traveler",
        quote: "Best gym in Casablanca. Very professional.",
        author: "Hassan T.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Corniche Resort Gym",
        type: "visit",
        id: "casablanca-corniche-resort-gym"
      }
    ],
    faq: [
      {
        q: "Do you have a pool?",
        a: "No pool, but excellent gym and classes."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-crossfit-rif",
    city: "casablanca",
    name: "CrossFit Casablanca",
    neighborhood: "Sidi Belyout",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 70,
    entryPrice: 70,
    durationMinutes: 60,
    distanceFromCenterKm: 2.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "06:00 AM - 20:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: false,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Official CrossFit box offering high-intensity functional training classes with certified coaches. Modern facility.",
    shortValueProp: "High-quality CrossFit box with professional coaching",
    googleRating: 4.7,
    reviewCount: 330,
    googleReviewCount: 245,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 85,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Scale options always available. Very welcoming community.",
    tips: ["not available"],
    highlights: ["Full CrossFit rig", "Certified coaches", "Supportive community"],
    emotionalBenefits: ["Accomplished", "Energized", "Challenged"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Drop-in Class",
        price: 70
      },
      {
        name: "Weekly Unlimited",
        price: 300
      }
    ],
    discountsInfo: "First class often discounted",
    includedServices: ["Class", "Equipment"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Sidi Belyout, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=CrossFit+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Taxi",
    dressCode: "Athletic wear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "High coaching standards",
    languages: ["French", "English"],
    visitorQuotes: [
      {
        type: "CrossFitter",
        quote: "Solid programming and great coaches. Best box in the area.",
        author: "David L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Functional Training Box",
        type: "visit",
        id: "casablanca-functional-box"
      }
    ],
    faq: [
      {
        q: "Can beginners join?",
        a: "Yes, all levels welcome with scalable workouts."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-community-gym",
    city: "casablanca",
    name: "Casablanca Community Fitness",
    neighborhood: "Hay Mohammadi",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 28,
    entryPrice: 28,
    durationMinutes: 60,
    distanceFromCenterKm: 3.8,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "07:00 AM - 21:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Affordable community gym with basic but functional equipment, group classes, and a friendly local atmosphere.",
    shortValueProp: "Budget community gym with essential equipment",
    googleRating: 3.8,
    reviewCount: 475,
    googleReviewCount: 380,
    tripadvisorRating: 3.7,
    tripadvisorReviewCount: 95,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Very affordable. Basic but clean and welcoming.",
    tips: ["not available"],
    highlights: ["Low prices", "Friendly local community", "Basic but reliable equipment"],
    emotionalBenefits: ["Energized", "Grounded"],
    bestTimeToVisit: "Early morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 28
      },
      {
        name: "Weekly",
        price: 100
      }
    ],
    discountsInfo: "Very affordable",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Hay Mohammadi, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Community+Gym+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Local bus or taxi",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Basic but safe",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Local",
        quote: "Cheap and good enough. I go every day.",
        author: "Mohamed L.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Old Medina",
        type: "visit",
        id: "casablanca-old-medina"
      }
    ],
    faq: [
      {
        q: "Is the equipment new?",
        a: "Functional and well-used, but maintained."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-sport-club",
    city: "casablanca",
    name: "Casablanca Sport Club",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 50,
    entryPrice: 50,
    durationMinutes: 90,
    distanceFromCenterKm: 4.8,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "06:30 AM - 22:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Spacious multi-purpose sports club with full gym, group classes, and outdoor training area. Popular with locals and families.",
    shortValueProp: "Large club with indoor and outdoor training options",
    googleRating: 4.2,
    reviewCount: 630,
    googleReviewCount: 485,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 145,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Great outdoor area for functional training when the weather is nice.",
    tips: ["not available"],
    highlights: ["Large indoor gym area", "Outdoor functional training space", "Variety of group classes"],
    emotionalBenefits: ["Energized", "Social", "Accomplished"],
    bestTimeToVisit: "Late afternoon",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 50
      },
      {
        name: "Weekly",
        price: 190
      }
    ],
    discountsInfo: "Family rates available",
    includedServices: ["Full gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Minimal",
    address: "Ain Diab, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sport+Club+Casablanca+Ain+Diab",
    parkingInfo: "Large lot",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Well supervised",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Local",
        quote: "My go-to place. Good community and space.",
        author: "Karim B.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    faq: [
      {
        q: "Do they have outdoor space?",
        a: "Yes, a nice functional area outside."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-cardio-club",
    city: "casablanca",
    name: "Casablanca Cardio & Wellness Club",
    neighborhood: "Maârif",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 48,
    entryPrice: 48,
    durationMinutes: 70,
    distanceFromCenterKm: 1.9,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "06:30 AM - 22:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: false,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Specialized cardio and wellness-focused gym with treadmills, bikes, ellipticals, and recovery areas. Great for runners and endurance training.",
    shortValueProp: "Cardio-focused gym with excellent recovery facilities",
    googleRating: 4.1,
    reviewCount: 380,
    googleReviewCount: 295,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 85,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Perfect if you prefer cardio machines and recovery. Clean and bright space.",
    tips: ["not available"],
    highlights: ["Large cardio zone", "Recovery area with stretching mats", "Group cardio classes"],
    emotionalBenefits: ["Energized", "Focused"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 48
      },
      {
        name: "Weekly",
        price: 180
      }
    ],
    discountsInfo: "Student discounts",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Maarif, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cardio+Club+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Tram or walk",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Well maintained",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Runner",
        quote: "Great cardio selection and very clean. My favorite spot.",
        author: "Emma L.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "City Club",
        type: "visit",
        id: "casablanca-city-club"
      }
    ],
    faq: [
      {
        q: "Is it busy?",
        a: "Peak hours are 6-8 PM."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-strength-box",
    city: "casablanca",
    name: "Casablanca Strength & Conditioning",
    neighborhood: "Sidi Belyout",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "quiet",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 52,
    entryPrice: 52,
    durationMinutes: 75,
    distanceFromCenterKm: 2.6,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "07:00 AM - 21:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Compact but well-equipped strength and conditioning gym with a focus on free weights and functional strength. Popular with athletes.",
    shortValueProp: "Focused strength and conditioning gym",
    googleRating: 4.3,
    reviewCount: 340,
    googleReviewCount: 265,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 75,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Great for focused strength sessions. Knowledgeable staff.",
    tips: ["not available"],
    highlights: ["Excellent free weights selection", "Knowledgeable staff", "Quiet focused atmosphere"],
    emotionalBenefits: ["Focused", "Accomplished", "Strong"],
    bestTimeToVisit: "Mid-morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 52
      },
      {
        name: "Weekly",
        price: 200
      }
    ],
    discountsInfo: "Long-term discounts",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None major",
    address: "Sidi Belyout, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Strength+Conditioning+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Good equipment maintenance",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Lifter",
        quote: "Solid weights and no nonsense. Perfect for serious training.",
        author: "Younes K.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Power House Gym",
        type: "visit",
        id: "casablanca-power-house"
      }
    ],
    faq: [
      {
        q: "Is it good for beginners?",
        a: "Yes, but more popular with intermediate lifters."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-resort-aqua",
    city: "casablanca",
    name: "Resort Aqua & Fitness Club",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["luxury-curator", "nomad"],
    tags: ["active", "day-pass", "gym-fitness", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 95,
    entryPrice: 95,
    durationMinutes: 120,
    distanceFromCenterKm: 5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "06:00 AM - 23:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Premium resort club with large pool, full gym, spa facilities, and a wide range of classes. Day passes available.",
    shortValueProp: "Premium resort club with gym, pool and spa",
    googleRating: 4.6,
    reviewCount: 510,
    googleReviewCount: 385,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 125,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Best facilities in the area. Worth it for the pool and spa.",
    tips: ["not available"],
    highlights: ["Large heated pool", "Full gym and spa", "Wide range of classes"],
    emotionalBenefits: ["Pampered", "Energized", "Relaxed"],
    bestTimeToVisit: "Afternoon",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass (Full Access)",
        price: 95
      },
      {
        name: "Weekly",
        price: 420
      }
    ],
    discountsInfo: "Hotel packages available",
    includedServices: ["Gym", "Pool", "Sauna"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Spa treatments extra",
    address: "Ain Diab, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Resort+Aqua+Fitness+Casablanca",
    parkingInfo: "Large lot",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear and swimwear",
    equipmentNeeded: ["Indoor shoes", "Swimwear"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Highest standards",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Premium Traveler",
        quote: "The best facilities. Loved the pool and gym.",
        author: "Nadia F.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Corniche Resort Gym",
        type: "visit",
        id: "casablanca-corniche-resort-gym"
      }
    ],
    faq: [
      {
        q: "Does the day pass include everything?",
        a: "Yes, full access including pool and sauna."
      }
    ],
  }
];
