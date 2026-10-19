/**
 * =========================================================================
 * [ASILAH] THINGS TO DO — SPORT & ACTIVE
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

// ══ LISTINGS — SPORT & ACTIVE ══
export const asilahSportThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-surf-lesson",
    city: "asilah",
    name: "Surf Lesson with Antik Surf Club",
    neighborhood: "Beachfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "private", "surf-kitesurf"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 250,
    entryPrice: 250,
    durationMinutes: 120,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
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
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 06:00 PM",
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
    description: "Beginner-friendly surf lessons on the Atlantic waves just outside Asilah. Includes board, wetsuit, and instruction from local surfers.",
    shortValueProp: "Learn to surf on the Atlantic waves right next to the medina",
    googleRating: 4.6,
    reviewCount: 250,
    googleReviewCount: 145,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 62,
    viatorRating: 4.4,
    viatorReviewCount: 28,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 15,
    tip: "The waves here are generally good for beginners. Wetsuits are provided as the water can be cool.",
    tips: ["not available"],
    highlights: ["Good beginner waves", "Professional local instructors", "All equipment included"],
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
    discountsInfo: "Group discounts available",
    includedServices: ["Board", "Wetsuit", "Instruction"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Beachfront, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Antik+Surf+Club+Asilah",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable from the medina",
    dressCode: "Swimwear under wetsuit",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 8 and up",
    safetyNotes: "Certified instructors and safety briefing",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Beginner",
        quote: "Great instructors and perfect waves for learning. I stood up on my first try!",
        author: "Lucas M.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
      }
    ],
    storyTitle: "Riding the Atlantic Swell",
    history: "Surfing has become increasingly popular in Asilah as the town embraces water sports tourism.",
    culturalImportance: "Brings together local youth and international visitors through the shared love of the ocean.",
    localLegend: "Local surfers say the best waves come after a storm from the northwest.",
    funFact: "You can surf with the medina walls visible in the background.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need experience?",
        a: "No, lessons are designed for complete beginners."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-horseback-riding",
    city: "asilah",
    name: "Horseback Riding on Paradise Beach",
    neighborhood: "Rmilat",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "romantic", "family"],
    tags: ["climbing-adventure", "coastal", "desert-sport", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 280,
    entryPrice: 280,
    durationMinutes: 90,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 07:00 PM",
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
    description: "Guided horseback rides along the beautiful Paradise Beach and surrounding dunes. A magical way to experience the coastline.",
    shortValueProp: "Ride horses along a stunning Atlantic beach at sunset",
    googleRating: 4.5,
    reviewCount: 194,
    googleReviewCount: 112,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 48,
    viatorRating: 4.3,
    viatorReviewCount: 22,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 12,
    tip: "Sunset rides are especially beautiful. Helmets are provided.",
    tips: ["not available"],
    highlights: ["Beach and dune riding", "Gentle horses suitable for beginners", "Breathtaking coastal views"],
    emotionalBenefits: ["Serene", "Scenic", "Memorable"],
    bestTimeToVisit: "Late afternoon or sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "1-Hour Beach Ride",
        price: 280
      },
      {
        name: "Sunset Ride",
        price: 320
      }
    ],
    discountsInfo: "Children and group rates available",
    includedServices: ["Horse", "Helmet", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Paradise Beach, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Horse+Riding+Asilah+Beach",
    parkingInfo: "Informal parking",
    publicTransportInfo: "Taxi from town",
    dressCode: "Long pants recommended",
    equipmentNeeded: ["Closed shoes", "Long pants"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 6 and up",
    safetyNotes: "Experienced guides. Helmets provided",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "The sunset horse ride on Paradise Beach was the highlight of our trip.",
        author: "Isabella & Marco",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Paradise Beach",
        type: "visit",
        id: "asilah-paradise-beach"
      }
    ],
    storyTitle: "Galloping by the Sea",
    history: "Horse riding has long been part of coastal life in the Asilah region.",
    culturalImportance: "A traditional way to experience the landscape that is now shared with visitors.",
    localLegend: "Some say the horses here are descendants of the famous Barbary horses.",
    funFact: "You can sometimes ride alongside local fishermen returning with their catch.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need riding experience?",
        a: "No, the horses are calm and guides lead you."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-boat-tour",
    city: "asilah",
    name: "Coastal Boat Tour & Fishing",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["adventure", "family", "first-timer"],
    tags: ["climbing-adventure", "coastal", "private", "relaxed", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 320,
    entryPrice: 320,
    durationMinutes: 180,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
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
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 07:00 PM",
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
    description: "A scenic boat trip along the Atlantic coast with opportunities for fishing, swimming, and visiting nearby coves and caves.",
    shortValueProp: "Explore the coastline by boat with fishing and swimming stops",
    googleRating: 4.4,
    reviewCount: 165,
    googleReviewCount: 95,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 42,
    viatorRating: 4.2,
    viatorReviewCount: 18,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 10,
    tip: "Sunset cruises are very popular. Ask if they can stop for a swim.",
    tips: ["not available"],
    highlights: ["Coastal caves and cliffs", "Fishing and swimming opportunities", "Beautiful sunset views"],
    emotionalBenefits: ["Scenic", "Relaxed", "Adventurous"],
    bestTimeToVisit: "Morning or sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Half-Day Boat Tour",
        price: 320
      },
      {
        name: "Sunset Cruise",
        price: 350
      }
    ],
    discountsInfo: "Children half price",
    includedServices: ["Boat", "Life jackets", "Fishing gear", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Drinks and snacks may be extra",
    address: "Port of Asilah",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Boat+Tour+Asilah",
    parkingInfo: "Port parking",
    publicTransportInfo: "Walkable from the medina",
    dressCode: "Swimwear and light clothing",
    equipmentNeeded: ["Sunscreen", "Hat"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Life jackets provided. Experienced captains",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "The kids loved fishing and swimming from the boat. Great experience.",
        author: "The Patel Family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Port of Asilah",
        type: "visit",
        id: "asilah-port"
      }
    ],
    storyTitle: "Sailing the Atlantic Coast",
    history: "Small boat tours have been a way for locals to share the beauty of the coast with visitors for many years.",
    culturalImportance: "Supports local fishermen and boat owners while showcasing the natural environment.",
    localLegend: "Some captains know secret coves used by pirates in the past.",
    funFact: "You can often see dolphins following the boat in the morning.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can we swim?",
        a: "Yes, there are usually swimming stops."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-quad-tour",
    city: "asilah",
    name: "Quad Bike Adventure",
    neighborhood: "Surrounding Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure"],
    tags: ["active", "climbing-adventure", "desert-sport", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 380,
    entryPrice: 380,
    durationMinutes: 120,
    distanceFromCenterKm: 4,
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
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 06:00 PM",
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
    description: "Guided quad bike (ATV) tour through the countryside, dunes, and along the coast near Asilah. An exciting way to explore the landscape.",
    shortValueProp: "Explore the dunes and coast on a thrilling quad bike adventure",
    googleRating: 4.5,
    reviewCount: 158,
    googleReviewCount: 88,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 38,
    viatorRating: 4.3,
    viatorReviewCount: 20,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 12,
    tip: "Wear closed shoes and long pants. Goggles and helmets are provided.",
    tips: ["not available"],
    highlights: [
      "Ride through sand dunes and countryside",
      "Coastal views from the bikes",
      "Professional guides and safety briefing"
    ],
    emotionalBenefits: ["Thrilling", "Adventurous", "Scenic"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "1-Hour Quad Tour",
        price: 380
      },
      {
        name: "2-Hour Adventure",
        price: 550
      }
    ],
    discountsInfo: "Couple and group packages",
    includedServices: ["Quad bike", "Helmet", "Guide", "Safety briefing"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None major",
    address: "Departure points near Asilah",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Quad+Asilah+Morocco",
    parkingInfo: "At departure point",
    publicTransportInfo: "Hotel pickup often available",
    dressCode: "Long pants and closed shoes",
    equipmentNeeded: ["Sunglasses or goggles (provided)"],
    fitnessLevel: "Active",
    ageRestrictions: "Minimum 16 years (or with adult)",
    safetyNotes: "Safety briefing and helmets required",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "So much fun! The views from the dunes were incredible.",
        author: "Mark T.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Paradise Beach",
        type: "visit",
        id: "asilah-paradise-beach"
      }
    ],
    storyTitle: "Riding the Dunes",
    history: "Quad tours have become a popular adventure activity as tourism has grown in the area.",
    culturalImportance: "Provides employment for local guides while showcasing the beautiful surrounding landscape.",
    localLegend: "Some routes pass near ancient paths used by traders and nomads.",
    funFact: "You can sometimes ride right next to local shepherds and their flocks.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need a driving license?",
        a: "No, but you must be old enough and follow the guide."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-bike-tour",
    city: "asilah",
    name: "Coastal Bike Tour",
    neighborhood: "Médina Historique",
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
    pricePerPerson: 180,
    entryPrice: 180,
    durationMinutes: 120,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
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
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 06:00 PM",
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
    description: "Guided bicycle tour exploring the medina, ramparts, and coastal paths around Asilah. A relaxed and scenic way to discover the area.",
    shortValueProp: "Discover Asilah and the coast by bicycle with a local guide",
    googleRating: 4.4,
    reviewCount: 116,
    googleReviewCount: 68,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 29,
    viatorRating: 4.2,
    viatorReviewCount: 12,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 7,
    tip: "Electric bikes are often available. The coastal path to Paradise Beach is beautiful.",
    tips: ["not available"],
    highlights: [
      "Explore the medina and ramparts by bike",
      "Ride along the scenic coastline",
      "Visit beaches and viewpoints"
    ],
    emotionalBenefits: ["Energized", "Scenic", "Healthy"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "2-Hour Guided Bike Tour",
        price: 180
      },
      {
        name: "Electric Bike Tour",
        price: 240
      }
    ],
    discountsInfo: "Family and group rates",
    includedServices: ["Bike", "Helmet", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Departure from medina area",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Bike+Tour",
    parkingInfo: "At starting point",
    publicTransportInfo: "Meeting point in the medina",
    dressCode: "Comfortable sportswear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Helmets provided. Safe routes chosen",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Cyclist",
        quote: "A wonderful way to see the town and coast. Very well organized.",
        author: "Anna K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
      }
    ],
    storyTitle: "Two Wheels by the Sea",
    history: "Cycling has long been a practical way to get around Asilah and is now a popular tourist activity.",
    culturalImportance: "A low-impact way to experience the town and connect with the landscape.",
    localLegend: "Some older residents still remember when bicycles were the main form of transport.",
    funFact: "You can cycle from the medina to Paradise Beach in under 30 minutes.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are the bikes good quality?",
        a: "Yes, well-maintained bikes with helmets."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-camel-ride",
    city: "asilah",
    name: "Camel Ride on Paradise Beach",
    neighborhood: "Rmilat",
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
    pricePerPerson: 150,
    entryPrice: 150,
    durationMinutes: 60,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 07:00 PM",
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
    description: "Gentle camel rides along the golden sands and dunes of Paradise Beach. A classic Moroccan coastal experience with local handlers.",
    shortValueProp: "Classic camel trek along Paradise Beach dunes at golden hour",
    googleRating: 4.3,
    reviewCount: 141,
    googleReviewCount: 78,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 35,
    viatorRating: 4.1,
    viatorReviewCount: 18,
    getyourguideRating: 4,
    getyourguideReviewCount: 10,
    tip: "Sunset camel rides are magical. Handlers are very experienced with children.",
    tips: ["not available"],
    highlights: [
      "Gentle camels led by local experts",
      "Dune and beach scenery",
      "Perfect for photos and family memories"
    ],
    emotionalBenefits: ["Memorable", "Scenic", "Relaxed"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "30-Minute Camel Ride",
        price: 150
      },
      {
        name: "Sunset Camel Experience",
        price: 180
      }
    ],
    discountsInfo: "Children under 10 half price",
    includedServices: ["Camel", "Handler", "Photos"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Paradise Beach, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camel+Ride+Paradise+Beach+Asilah",
    parkingInfo: "Informal parking",
    publicTransportInfo: "Taxi from town",
    dressCode: "Comfortable clothing",
    equipmentNeeded: [],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages (kids ride with adult)",
    safetyNotes: "Very gentle animals; experienced handlers",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "The kids loved the camel ride. Perfect end to our beach day.",
        author: "The Martin Family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Paradise Beach",
        type: "visit",
        id: "asilah-paradise-beach"
      }
    ],
    storyTitle: "Desert Ships by the Sea",
    history: "Camels have been used for transport along Morocco's Atlantic coast for centuries.",
    culturalImportance: "Preserves traditional Berber animal husbandry while offering visitors authentic experiences.",
    localLegend: "Local handlers say the camels here have a special affinity for the sea breeze.",
    funFact: "You can combine the ride with a short stop for mint tea on the dunes.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are the camels safe for kids?",
        a: "Yes, very calm animals. Children ride with an adult or handler."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-fishing-charter",
    city: "asilah",
    name: "Traditional Fishing Charter",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "foodie", "nomad"],
    tags: ["authentic", "coastal", "private", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 300,
    entryPrice: 300,
    durationMinutes: 240,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
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
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "06:00 AM - 12:00 PM and 15:00 - 19:00",
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
    description: "Join local fishermen for a half-day traditional fishing trip on the Atlantic. Learn local techniques and enjoy the fresh catch.",
    shortValueProp: "Authentic fishing experience with local fishermen on the Atlantic",
    googleRating: 4.3,
    reviewCount: 110,
    googleReviewCount: 62,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 28,
    viatorRating: 4,
    viatorReviewCount: 12,
    getyourguideRating: 3.9,
    getyourguideReviewCount: 8,
    tip: "Morning trips are best for catching fish. Your catch can often be grilled at a nearby restaurant.",
    tips: ["not available"],
    highlights: ["Traditional fishing methods and gear", "Fresh catch opportunities", "Scenic coastal views"],
    emotionalBenefits: ["Authentic", "Accomplished", "Sensory"],
    bestTimeToVisit: "Early morning",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Half-Day Fishing Trip",
        price: 300
      },
      {
        name: "Private Charter",
        price: 450
      }
    ],
    discountsInfo: "Group discounts",
    includedServices: ["Boat", "Fishing gear", "Guide", "Life jackets"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Optional grilling of catch",
    address: "Port of Asilah",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fishing+Charter+Asilah",
    parkingInfo: "Port parking",
    publicTransportInfo: "Walkable from medina",
    dressCode: "Comfortable outdoor clothing",
    equipmentNeeded: ["Hat", "Sunscreen"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Experienced local fishermen as guides",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Foodie",
        quote: "Caught our own lunch and had it grilled fresh. Incredible experience.",
        author: "Jean & Marie",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Port of Asilah",
        type: "visit",
        id: "asilah-port"
      }
    ],
    storyTitle: "The Fishermen's Tradition",
    history: "Fishing has been the backbone of Asilah for generations. This experience shares that heritage directly.",
    culturalImportance: "Supports local fishing families and passes on traditional maritime knowledge.",
    localLegend: "Old fishermen believe certain tides bring the biggest catches.",
    funFact: "Many visitors have their catch prepared at local beach restaurants the same day.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Will I catch fish?",
        a: "Usually yes. The guides know the best local spots."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-kayak-tour",
    city: "asilah",
    name: "Coastal Kayak Adventure",
    neighborhood: "Beachfront",
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
    durationMinutes: 150,
    distanceFromCenterKm: 0.6,
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
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 06:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "water-sport",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided sea kayak tour exploring hidden coves, sea caves, and the dramatic coastline near Asilah with opportunities for swimming.",
    shortValueProp: "Paddle through sea caves and hidden coves along the Atlantic coast",
    googleRating: 4.5,
    reviewCount: 100,
    googleReviewCount: 55,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 25,
    viatorRating: 4.2,
    viatorReviewCount: 12,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 8,
    tip: "Go in the morning for calmer waters and better visibility in the caves. Life jackets provided.",
    tips: ["not available"],
    highlights: [
      "Explore dramatic sea caves by kayak",
      "Swimming stops in secluded coves",
      "Expert local guides"
    ],
    emotionalBenefits: ["Adventurous", "Scenic", "Accomplished"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "2-Hour Guided Kayak",
        price: 260
      },
      {
        name: "Sunset Kayak",
        price: 290
      }
    ],
    discountsInfo: "Group rates",
    includedServices: ["Kayak & paddle", "Life jacket", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Beachfront, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kayak+Tour+Asilah",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable from medina",
    dressCode: "Swimwear and quick-dry clothes",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 8 and up",
    safetyNotes: "Life jackets and instruction provided",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "Paddling into the caves was unforgettable. Highly recommend!",
        author: "Thomas K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
      }
    ],
    storyTitle: "Paddling the Hidden Coast",
    history: "Kayaking has grown as a gentle way to explore the dramatic Atlantic coastline traditionally known only to fishermen.",
    culturalImportance: "Promotes sustainable coastal exploration and supports local guides.",
    localLegend: "Some caves are said to have been used by smugglers centuries ago.",
    funFact: "On calm days you can hear the echo of waves deep inside the caves.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need experience?",
        a: "No. Full instruction is given before launching."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-coastal-hike",
    city: "asilah",
    name: "Guided Coastal Hike",
    neighborhood: "Surrounding Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "hiking-trek", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 180,
    entryPrice: 180,
    durationMinutes: 180,
    distanceFromCenterKm: 2,
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
    openingHours: "08:00 AM - 06:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "hiking-trek",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: false,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Scenic guided hike along the dramatic Atlantic coastline from Asilah to Paradise Beach and beyond. Includes stops for photos and local stories.",
    shortValueProp: "Hike the stunning Atlantic coastline with expert local guides",
    googleRating: 4.4,
    reviewCount: 86,
    googleReviewCount: 48,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 22,
    viatorRating: 4.1,
    viatorReviewCount: 10,
    getyourguideRating: 4,
    getyourguideReviewCount: 6,
    tip: "Wear good walking shoes. Bring water and a hat. The views are worth every step.",
    tips: ["not available"],
    highlights: [
      "Dramatic cliffs and hidden beaches",
      "Local stories and history along the way",
      "Spectacular ocean views"
    ],
    emotionalBenefits: ["Accomplished", "Scenic", "Reflective"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "3-Hour Guided Hike",
        price: 180
      },
      {
        name: "Sunset Hike",
        price: 210
      }
    ],
    discountsInfo: "Group rates available",
    includedServices: ["Guide", "Water", "Trail snacks"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Departure from medina area",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Coastal+Hike+Asilah",
    parkingInfo: "At starting point",
    publicTransportInfo: "Walkable start, taxi return option",
    dressCode: "Comfortable hiking clothes",
    equipmentNeeded: ["Good walking shoes", "Water bottle", "Hat"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Guides carry first aid and water",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Hiker",
        quote: "Beautiful trail with incredible views. Our guide was fantastic.",
        author: "Sarah P.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Paradise Beach",
        type: "visit",
        id: "asilah-paradise-beach"
      }
    ],
    storyTitle: "Paths Along the Atlantic",
    history: "These coastal paths have been used by local fishermen and shepherds for generations.",
    culturalImportance: "Connects visitors to the natural and cultural heritage of the Rif coastline.",
    localLegend: "Some trails follow ancient smuggling routes used centuries ago.",
    funFact: "You can often spot dolphins from the higher viewpoints.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "How difficult is the hike?",
        a: "Moderate with some gentle hills. Great for most fitness levels."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-sunset-sail",
    city: "asilah",
    name: "Sunset Sailing Experience",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["romantic", "adventure", "first-timer"],
    tags: ["climbing-adventure", "coastal", "relaxed", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 350,
    entryPrice: 350,
    durationMinutes: 120,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
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
    description: "Romantic sunset sail along the Atlantic coast aboard a traditional or modern boat. Includes light refreshments and stunning views.",
    shortValueProp: "Magical sunset sail along the dramatic Atlantic coastline",
    googleRating: 4.6,
    reviewCount: 129,
    googleReviewCount: 72,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 32,
    viatorRating: 4.4,
    viatorReviewCount: 15,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 10,
    tip: "Perfect for couples. Bring a light jacket as the sea breeze can be cool at sunset.",
    tips: ["not available"],
    highlights: [
      "Golden hour views of the medina and ramparts",
      "Light drinks and snacks included",
      "Peaceful and romantic atmosphere"
    ],
    emotionalBenefits: ["Romantic", "Scenic", "Memorable"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "Sunset Sail",
        price: 350
      },
      {
        name: "Private Sunset Sail",
        price: 550
      }
    ],
    discountsInfo: "Couple packages available",
    includedServices: ["Boat", "Life jackets", "Drinks", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Port of Asilah",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sunset+Sail+Asilah",
    parkingInfo: "Port parking",
    publicTransportInfo: "Walkable from medina",
    dressCode: "Smart casual",
    equipmentNeeded: ["Light jacket"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Experienced captains; life jackets provided",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "The most romantic experience of our trip. The sunset was breathtaking.",
        author: "Elena & David",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Port of Asilah",
        type: "visit",
        id: "asilah-port"
      }
    ],
    storyTitle: "Sails at Dusk",
    history: "Traditional sailing boats have plied these waters for centuries. Sunset cruises celebrate that maritime heritage.",
    culturalImportance: "Offers a peaceful way to appreciate the beauty of the coast while supporting local boat owners.",
    localLegend: "Sailors say the best sunsets happen when the wind is from the south.",
    funFact: "On clear evenings you may see the lights of Tangier in the distance.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it private?",
        a: "Group sails available or book private for couples."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-ebike-tour",
    city: "asilah",
    name: "Electric Bike Coastal Tour",
    neighborhood: "Médina Historique",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad", "first-timer"],
    tags: ["active", "climbing-adventure", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 220,
    entryPrice: 220,
    durationMinutes: 150,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
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
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 06:00 PM",
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
    description: "Easy electric bike tour along coastal paths to Paradise Beach and back. Includes stops at viewpoints and the ramparts.",
    shortValueProp: "Effortless electric bike ride to Paradise Beach with scenic stops",
    googleRating: 4.5,
    reviewCount: 94,
    googleReviewCount: 52,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 24,
    viatorRating: 4.2,
    viatorReviewCount: 11,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 7,
    tip: "Great for all fitness levels thanks to electric assist. Perfect way to reach Paradise Beach easily.",
    tips: ["not available"],
    highlights: [
      "Electric assist makes it easy for everyone",
      "Coastal paths and beach views",
      "Stops at ramparts and viewpoints"
    ],
    emotionalBenefits: ["Energized", "Scenic", "Accessible"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "2.5-Hour E-Bike Tour",
        price: 220
      },
      {
        name: "Private E-Bike Tour",
        price: 320
      }
    ],
    discountsInfo: "Family and senior rates",
    includedServices: ["E-Bike", "Helmet", "Guide", "Water"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Medina departure point",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Electric+Bike+Asilah",
    parkingInfo: "At starting point",
    publicTransportInfo: "Meeting point in medina",
    dressCode: "Comfortable sportswear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Helmets and safety briefing included",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Senior Traveler",
        quote: "Loved the electric assist. Made it to Paradise Beach without any effort.",
        author: "Robert L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Paradise Beach",
        type: "visit",
        id: "asilah-paradise-beach"
      }
    ],
    storyTitle: "Wheels with a Boost",
    history: "Electric bikes have made coastal exploration accessible to a wider range of visitors in recent years.",
    culturalImportance: "Encourages low-impact tourism and helps visitors reach more remote beaches easily.",
    localLegend: "Some locals joke that the electric bikes are 'magic carpets for the modern age'.",
    funFact: "The return trip downhill from Paradise Beach feels like flying.",
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
    id: "asilah-surf-camp",
    city: "asilah",
    name: "Full Day Surf Camp Experience",
    neighborhood: "Beachfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "private", "surf-kitesurf", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 450,
    entryPrice: 450,
    durationMinutes: 360,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
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
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 05:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "surf-kitesurf",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "full-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Comprehensive full-day surf camp including two lessons, lunch, theory session, and equipment. Perfect for beginners wanting to progress quickly.",
    shortValueProp: "Full-day surf immersion with two lessons, lunch, and theory",
    googleRating: 4.7,
    reviewCount: 72,
    googleReviewCount: 38,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 18,
    viatorRating: 4.5,
    viatorReviewCount: 10,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 6,
    tip: "Includes lunch and video analysis. Great value for a full day of learning.",
    tips: ["not available"],
    highlights: [
      "Two surf sessions with professional coaching",
      "Theory, video analysis, and lunch included",
      "All equipment and transport to best spots"
    ],
    emotionalBenefits: ["Energized", "Accomplished", "Thrilled"],
    bestTimeToVisit: "Morning start",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Full Day Surf Camp",
        price: 450
      },
      {
        name: "Private Full Day",
        price: 650
      }
    ],
    discountsInfo: "Multi-day packages available",
    includedServices: ["Board", "Wetsuit", "Lunch", "Instruction", "Video analysis"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Beachfront, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Surf+Camp+Asilah",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable from medina",
    dressCode: "Swimwear and change of clothes",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 8 and up",
    safetyNotes: "Certified instructors; small groups",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Beginner",
        quote: "Learned so much in one day. Stood up multiple times and had a blast!",
        author: "Mia S.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
      }
    ],
    storyTitle: "A Day on the Waves",
    history: "Surf camps have become popular as Asilah develops its reputation as an accessible surf destination.",
    culturalImportance: "Brings international visitors together with local youth through ocean sports.",
    localLegend: "Instructors say the best progress happens on days with consistent small waves.",
    funFact: "Many participants return for multi-day camps and become regulars.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is lunch included?",
        a: "Yes, fresh local lunch is provided between sessions."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-beach-yoga",
    city: "asilah",
    name: "Beach Sunrise Yoga & Meditation",
    neighborhood: "Beachfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["quiet-mystic", "first-timer"],
    tags: ["climbing-adventure", "coastal", "morning", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 120,
    entryPrice: 120,
    durationMinutes: 90,
    distanceFromCenterKm: 0.4,
    transportMode: "walkable",
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
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "06:30 AM - 08:00 AM",
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
    description: "Guided sunrise yoga and meditation session on the main beach with the medina walls as backdrop. Includes breathing exercises and gentle movement.",
    shortValueProp: "Peaceful sunrise yoga on the beach with historic medina backdrop",
    googleRating: 4.6,
    reviewCount: 74,
    googleReviewCount: 42,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 18,
    viatorRating: 4.3,
    viatorReviewCount: 9,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 5,
    tip: "Bring a light layer for the early morning. Mats are provided.",
    tips: ["not available"],
    highlights: ["Sunrise over the Atlantic", "Gentle yoga flow and meditation", "Mats and props provided"],
    emotionalBenefits: ["Peaceful", "Refreshed", "Centered"],
    bestTimeToVisit: "Sunrise",
    typicalWaitTimeMinutes: 5,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "Sunrise Yoga Session",
        price: 120
      },
      {
        name: "Private Yoga Session",
        price: 200
      }
    ],
    discountsInfo: "Multi-session packages",
    includedServices: ["Yoga mat", "Instruction", "Water"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Main Beach, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Beach+Yoga+Asilah",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable from medina",
    dressCode: "Comfortable yoga wear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Gentle practice suitable for all levels",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Wellness Seeker",
        quote: "The most beautiful yoga class I've ever taken. Sunrise over the walls was magical.",
        author: "Aisha K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
      }
    ],
    storyTitle: "Sunrise Flow by the Sea",
    history: "Beach yoga has become a popular wellness activity as Asilah attracts more mindful travelers.",
    culturalImportance: "Blends traditional Moroccan respect for nature with modern wellness practices.",
    localLegend: "Some practitioners say the sea air enhances breathwork and clarity.",
    funFact: "The medina walls turn golden pink in the first light of sunrise.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it suitable for beginners?",
        a: "Yes, all levels are welcome. Modifications provided."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-fitness-club",
    city: "asilah",
    name: "Asilah Fitness Club",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 40,
    entryPrice: 40,
    durationMinutes: 90,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
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
    openingHours: "07:00 AM - 10:00 PM",
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
    description: "The main local gym in Asilah with a solid selection of weights, cardio machines, and group classes. Popular with residents and visitors.",
    shortValueProp: "Reliable local gym with good equipment and classes",
    googleRating: 4.2,
    reviewCount: 86,
    googleReviewCount: 68,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 18,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "They offer daily and weekly passes. Ask about women-only hours.",
    tips: ["not available"],
    highlights: ["Full weights and cardio area", "Regular group classes", "Convenient location"],
    emotionalBenefits: ["Energized", "Accomplished"],
    bestTimeToVisit: "Morning or evening",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Day Pass",
        price: 40
      },
      {
        name: "Weekly Pass",
        price: 170
      },
      {
        name: "Monthly Membership",
        price: 320
      }
    ],
    discountsInfo: "Weekly passes are best value for visitors",
    includedServices: ["Gym access", "Showers"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel rental 10 MAD",
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Fitness+Club",
    parkingInfo: "Street parking",
    publicTransportInfo: "Short walk from the medina",
    dressCode: "Sportswear and indoor shoes",
    equipmentNeeded: ["Workout clothes", "Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Clean and well-maintained",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Digital Nomad",
        quote: "Good enough equipment and very affordable. Perfect for a week.",
        author: "Alex R.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
      }
    ],
    faq: [
      {
        q: "Do you have day passes?",
        a: "Yes, day passes are available."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-marina-golf-fitness",
    city: "asilah",
    name: "Asilah Marina Golf Fitness",
    neighborhood: "Marina Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["nomad", "luxury-curator"],
    tags: ["active", "day-pass", "gym-fitness", "sunset", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 90,
    distanceFromCenterKm: 2.5,
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
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "06:00 AM - 10:00 PM",
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
    description: "Modern fitness center inside the Asilah Marina Golf resort complex. Features good equipment, a pool, and classes in a resort setting.",
    shortValueProp: "Resort-style gym with pool access",
    googleRating: 4.4,
    reviewCount: 67,
    googleReviewCount: 52,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 15,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Day passes are available. The pool and resort facilities make it worth the price.",
    tips: ["not available"],
    highlights: ["Modern gym equipment", "Access to resort pool", "Tennis and other facilities"],
    emotionalBenefits: ["Energized", "Pampered", "Relaxed"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass (Gym + Pool)",
        price: 60
      },
      {
        name: "Weekly Pass",
        price: 280
      }
    ],
    discountsInfo: "Hotel guests often get discounts",
    includedServices: ["Gym", "Pool access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Additional resort facilities may cost extra",
    address: "Asilah Marina Golf, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Marina+Golf+Fitness",
    parkingInfo: "Large private parking",
    publicTransportInfo: "Taxi from town center",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes", "Swimwear for pool"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Professional resort standards",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Resort Guest",
        quote: "Excellent gym and the pool is great after a workout.",
        author: "Sophie D.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
      }
    ],
    faq: [
      {
        q: "Can non-guests use the facilities?",
        a: "Yes, day passes are available to the public."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-womens-gym",
    city: "asilah",
    name: "Asilah Women’s Fitness",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 42,
    entryPrice: 42,
    durationMinutes: 75,
    distanceFromCenterKm: 0.9,
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
    openingHours: "07:00 AM - 09:00 PM",
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
    description: "A dedicated women-only gym with modern equipment and a comfortable, private environment.",
    shortValueProp: "Private women-only gym with good equipment",
    googleRating: 4.5,
    reviewCount: 48,
    googleReviewCount: 38,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 10,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Excellent choice for female travelers. Very safe and supportive.",
    tips: ["not available"],
    highlights: ["Fully women-only facility", "Modern machines and free weights", "Comfortable and clean"],
    emotionalBenefits: ["Empowered", "Energized", "Safe"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 42
      },
      {
        name: "Weekly",
        price: 180
      }
    ],
    discountsInfo: "Monthly packages available",
    includedServices: ["Full access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Minimal",
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Women+Fitness+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Very secure",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Female Traveler",
        quote: "Felt very comfortable training here. Great atmosphere.",
        author: "Nadia K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
      }
    ],
    faq: [
      {
        q: "Is it 100% women only?",
        a: "Yes, completely women-only."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-crossfit-style",
    city: "asilah",
    name: "Asilah Functional Training Box",
    neighborhood: "Ville Nouvelle",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 55,
    entryPrice: 55,
    durationMinutes: 60,
    distanceFromCenterKm: 1,
    transportMode: "walkable",
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
    openingHours: "06:30 AM - 09:00 PM",
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
    description: "A modern functional training gym with CrossFit-style workouts, kettlebells, and group classes. Popular with younger athletes and fitness enthusiasts.",
    shortValueProp: "High-energy functional training gym",
    googleRating: 4.3,
    reviewCount: 53,
    googleReviewCount: 42,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 11,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Drop-in classes are welcome. All levels are accommodated.",
    tips: ["not available"],
    highlights: ["Kettlebells, ropes, and rigs", "Group HIIT and strength classes", "Supportive coaching"],
    emotionalBenefits: ["Accomplished", "Energized", "Challenged"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Drop-in Class",
        price: 55
      },
      {
        name: "Weekly Unlimited",
        price: 240
      }
    ],
    discountsInfo: "First class often discounted",
    includedServices: ["Class access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Functional+Training+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
    dressCode: "Athletic wear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Coaches supervise all sessions",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Athlete",
        quote: "Tough but fun workouts. Great community.",
        author: "Yassine B.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
      }
    ],
    faq: [
      {
        q: "Is it suitable for beginners?",
        a: "Yes, movements are scaled for all levels."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-budget-gym",
    city: "asilah",
    name: "Asilah Budget Gym",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 25,
    entryPrice: 25,
    durationMinutes: 60,
    distanceFromCenterKm: 1.1,
    transportMode: "walkable",
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
    openingHours: "07:00 AM - 09:00 PM",
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
    description: "A no-frills, affordable local gym with basic weights and cardio equipment. Good value for short stays.",
    shortValueProp: "Affordable basic gym for budget travelers",
    googleRating: 3.9,
    reviewCount: 44,
    googleReviewCount: 35,
    tripadvisorRating: 3.8,
    tripadvisorReviewCount: 9,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Very cheap. Basic but gets the job done.",
    tips: ["not available"],
    highlights: ["Low prices", "Essential weights and machines", "Local atmosphere"],
    emotionalBenefits: ["Energized"],
    bestTimeToVisit: "Early morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 25
      },
      {
        name: "Weekly",
        price: 100
      }
    ],
    discountsInfo: "Extremely affordable",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Budget+Gym+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Basic but functional",
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
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-sport-club",
    city: "asilah",
    name: "Asilah Sport Club",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 45,
    entryPrice: 45,
    durationMinutes: 90,
    distanceFromCenterKm: 1.2,
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
    openingHours: "06:30 AM - 10:00 PM",
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
    description: "Spacious multi-purpose sports club with a full gym, group classes, and outdoor training area. Popular with locals and families.",
    shortValueProp: "Large club with indoor and outdoor training options",
    googleRating: 4.1,
    reviewCount: 72,
    googleReviewCount: 58,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 14,
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
        price: 45
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
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Sport+Club",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable",
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
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-elite-fitness",
    city: "asilah",
    name: "Elite Fitness Asilah",
    neighborhood: "Ville Nouvelle",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["nomad", "luxury-curator"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 65,
    entryPrice: 65,
    durationMinutes: 90,
    distanceFromCenterKm: 0.7,
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
    openingHours: "06:00 AM - 11:00 PM",
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
    description: "Modern premium gym with the latest equipment, personal training, and a wide range of classes. Popular with expats and serious fitness enthusiasts.",
    shortValueProp: "Premium gym with top-tier equipment and classes",
    googleRating: 4.5,
    reviewCount: 60,
    googleReviewCount: 48,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 12,
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
        price: 65
      },
      {
        name: "Weekly Pass",
        price: 280
      }
    ],
    discountsInfo: "Hotel and corporate rates",
    includedServices: ["Full gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel service extra",
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Elite+Fitness+Asilah",
    parkingInfo: "Street parking",
    publicTransportInfo: "Central",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "High standards of cleanliness",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Business Traveler",
        quote: "Best gym in Asilah. Very professional and clean.",
        author: "Hassan T.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-yoga-studio",
    city: "asilah",
    name: "Asilah Yoga & Wellness Studio",
    neighborhood: "Ville Nouvelle",
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
    distanceFromCenterKm: 0.85,
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
    openingHours: "07:00 AM - 09:00 PM",
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
    description: "Peaceful yoga studio offering vinyasa, hatha, and meditation classes. Day passes available for travelers seeking mindful movement.",
    shortValueProp: "Serene yoga studio for mindful practice and wellness",
    googleRating: 4.7,
    reviewCount: 44,
    googleReviewCount: 32,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 12,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Beautiful space with sea views from some classes. Mats provided.",
    tips: ["not available"],
    highlights: [
      "Vinyasa, hatha and meditation classes",
      "Peaceful studio with natural light",
      "Experienced local and international teachers"
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
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Yoga+Studio+Asilah",
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
        quote: "Beautiful studio. The teachers are excellent and the space is peaceful.",
        author: "Lina A.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-power-gym",
    city: "asilah",
    name: "Power House Gym Asilah",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 38,
    entryPrice: 38,
    durationMinutes: 90,
    distanceFromCenterKm: 1.15,
    transportMode: "walkable",
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
    openingHours: "07:00 AM - 09:00 PM",
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
    description: "Hardcore strength-focused gym with heavy free weights, power racks, and a no-frills atmosphere. Ideal for serious lifters.",
    shortValueProp: "No-frills powerlifting and strength gym",
    googleRating: 4.2,
    reviewCount: 36,
    googleReviewCount: 28,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 8,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Best for serious strength training. Bring your own towel.",
    tips: ["not available"],
    highlights: ["Heavy free weights and racks", "Powerlifting focused", "Serious training atmosphere"],
    emotionalBenefits: ["Accomplished", "Focused", "Strong"],
    bestTimeToVisit: "Evening",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 38
      },
      {
        name: "Weekly",
        price: 165
      }
    ],
    discountsInfo: "Long-term discounts",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Power+House+Gym+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
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
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-aqua-fitness",
    city: "asilah",
    name: "Asilah Aqua Fitness Center",
    neighborhood: "Beachfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["quiet-mystic", "family"],
    tags: ["day-pass", "gym-fitness", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 48,
    entryPrice: 48,
    durationMinutes: 75,
    distanceFromCenterKm: 1.8,
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
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "08:00 AM - 08:00 PM",
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
    reviewCount: 33,
    googleReviewCount: 25,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 8,
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
        price: 48
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
    address: "Beachfront Area, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aqua+Fitness+Asilah",
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
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
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
    id: "asilah-community-gym",
    city: "asilah",
    name: "Asilah Community Fitness Center",
    neighborhood: "Ville Nouvelle",
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
    distanceFromCenterKm: 1.3,
    transportMode: "walkable",
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
    openingHours: "07:00 AM - 09:00 PM",
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
    description: "Affordable community gym with basic but functional equipment, group classes, and a friendly local atmosphere. Great value.",
    shortValueProp: "Budget community gym with essential equipment",
    googleRating: 3.8,
    reviewCount: 53,
    googleReviewCount: 42,
    tripadvisorRating: 3.7,
    tripadvisorReviewCount: 11,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Very affordable. Basic equipment but clean and welcoming.",
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
        price: 110
      }
    ],
    discountsInfo: "Very affordable",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Community+Gym+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
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
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-resort-gym",
    city: "asilah",
    name: "Asilah Beach Resort Fitness",
    neighborhood: "Beachfront",
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
    pricePerPerson: 75,
    entryPrice: 75,
    durationMinutes: 90,
    distanceFromCenterKm: 2.2,
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
    openingHours: "06:00 AM - 10:00 PM",
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
    description: "Upscale resort gym with sea views, modern equipment, pool access, and spa facilities. Day passes available for non-guests.",
    shortValueProp: "Luxury resort gym with pool and sea views",
    googleRating: 4.6,
    reviewCount: 45,
    googleReviewCount: 35,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 10,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Day pass includes pool and sauna. Excellent for a pampered workout.",
    tips: ["not available"],
    highlights: [
      "Modern equipment with ocean views",
      "Pool and sauna access",
      "Professional spa services available"
    ],
    emotionalBenefits: ["Pampered", "Energized", "Relaxed"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass (Full Access)",
        price: 75
      },
      {
        name: "Weekly",
        price: 320
      }
    ],
    discountsInfo: "Hotel packages available",
    includedServices: ["Gym", "Pool", "Sauna"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Spa treatments extra",
    address: "Beachfront Resort, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Beach+Resort+Fitness+Asilah",
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
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
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
    id: "asilah-functional-box",
    city: "asilah",
    name: "Asilah Functional Training Box",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 52,
    entryPrice: 52,
    durationMinutes: 60,
    distanceFromCenterKm: 1.05,
    transportMode: "walkable",
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
    openingHours: "06:00 AM - 09:00 PM",
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
    description: "Dedicated functional training facility with rigs, kettlebells, battle ropes, and high-intensity classes. Welcoming to all levels.",
    shortValueProp: "High-quality functional training with professional coaching",
    googleRating: 4.4,
    reviewCount: 50,
    googleReviewCount: 38,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 12,
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
        price: 52
      },
      {
        name: "Weekly Unlimited",
        price: 240
      }
    ],
    discountsInfo: "First class often discounted",
    includedServices: ["Class", "Equipment"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Functional+Box+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
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
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
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
    id: "asilah-womens-premium",
    city: "asilah",
    name: "Asilah Women’s Premium Fitness",
    neighborhood: "Ville Nouvelle",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["luxury-curator", "nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in", "women-only"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 58,
    entryPrice: 58,
    durationMinutes: 80,
    distanceFromCenterKm: 0.95,
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
    openingHours: "07:00 AM - 09:00 PM",
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
    description: "Upscale women-only fitness center with premium equipment, spa-like changing rooms, and a wide range of classes in a luxurious setting.",
    shortValueProp: "Luxury women-only gym with premium equipment and classes",
    googleRating: 4.6,
    reviewCount: 37,
    googleReviewCount: 28,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 9,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Excellent for female travelers wanting premium facilities in a safe space.",
    tips: ["not available"],
    highlights: [
      "Premium women-only facility",
      "Modern equipment and spa-like amenities",
      "Wide range of classes"
    ],
    emotionalBenefits: ["Empowered", "Pampered", "Safe"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 58
      },
      {
        name: "Weekly",
        price: 250
      }
    ],
    discountsInfo: "Monthly packages available",
    includedServices: ["Full access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Minimal",
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Women+Premium+Fitness+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Very secure and luxurious",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Female Traveler",
        quote: "Felt incredibly comfortable. The best women-only gym I've visited.",
        author: "Amina S.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-cardio-club",
    city: "asilah",
    name: "Asilah Cardio & Wellness Club",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 40,
    entryPrice: 40,
    durationMinutes: 70,
    distanceFromCenterKm: 0.9,
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
    openingHours: "06:30 AM - 10:00 PM",
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
    googleRating: 4,
    reviewCount: 42,
    googleReviewCount: 32,
    tripadvisorRating: 3.9,
    tripadvisorReviewCount: 10,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Perfect if you prefer cardio machines and recovery. Clean and bright space.",
    tips: ["not available"],
    highlights: [
      "Large cardio zone with sea views",
      "Recovery area with stretching mats",
      "Group cardio classes"
    ],
    emotionalBenefits: ["Energized", "Focused"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 40
      },
      {
        name: "Weekly",
        price: 175
      }
    ],
    discountsInfo: "Student discounts",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cardio+Club+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
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
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-strength-box",
    city: "asilah",
    name: "Asilah Strength & Conditioning",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 42,
    entryPrice: 42,
    durationMinutes: 75,
    distanceFromCenterKm: 1.1,
    transportMode: "walkable",
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
    openingHours: "07:00 AM - 09:30 PM",
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
    reviewCount: 33,
    googleReviewCount: 25,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 8,
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
        price: 42
      },
      {
        name: "Weekly",
        price: 180
      }
    ],
    discountsInfo: "Long-term discounts",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None major",
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Strength+Conditioning+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Central",
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
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
      }
    ],
    faq: [
      {
        q: "Is it good for beginners?",
        a: "Yes, but more popular with intermediate lifters."
      }
    ],
  }
];
