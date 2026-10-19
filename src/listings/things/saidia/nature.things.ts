/**
 * =========================================================================
 * [SAIDIA] THINGS TO DO — NATURE & ADVENTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/saidia/index.ts
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
export const saidiaNatureThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-plage-de-sa-dia",
    city: "saidia",
    name: "Plage de Saïdia",
    neighborhood: "Main Beachfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "nomad"],
    tags: ["coastal", "instagrammable", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 150,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Morocco's longest Mediterranean beach is the obvious draw: wide sand, shallow water, and easy resort access.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 4230,
    tip: "Walk farther from the center if you want more space in peak summer.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+de+Sa%C3%AFdia%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-marina-sa-dia-promenade",
    city: "saidia",
    name: "Marina Saïdia Promenade",
    neighborhood: "Marina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["luxury", "nomad"],
    tags: ["coastal", "instagrammable", "relaxed", "sunset", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 75,
    transportMode: "walkable",
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The marina mixes boats, family strolling, cafés, and an easy polished-resort atmosphere.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 1048,
    tip: "Come at sunset when the marina lights and sea breeze improve the mood.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Marina+Sa%C3%AFdia+Promenade%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-med-sa-dia-corniche-bike-ride",
    city: "saidia",
    name: "Med-Saïdia Corniche Bike Ride",
    neighborhood: "Resort Corniche",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad", "adventure"],
    tags: ["active", "authentic", "coastal", "sunset", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 8,
    durationMinutes: 90,
    transportMode: "mixed",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Cycling the beachfront is a simple way to cover more of the resort zone without sitting in traffic.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 509,
    tip: "Go early or late to avoid the strongest sun and busiest promenade hours.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Med-Sa%C3%AFdia+Corniche+Bike+Ride%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-moulouya-estuary-birdwatching",
    city: "saidia",
    name: "Moulouya Estuary Birdwatching",
    neighborhood: "Moulouya Mouth",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "adventure"],
    tags: ["coastal", "morning", "nature", "off-the-beaten-path", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 75,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Wetlands, birds, and quieter sands make the estuary a strong nature outing beyond the resort core.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 1128,
    tip: "Bring binoculars and go in softer morning or late-day light.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Moulouya+Estuary+Birdwatching%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-moulouya-national-park-walk",
    city: "saidia",
    name: "Moulouya National Park Walk",
    neighborhood: "Moulouya National Park",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "large-groups"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["coastal", "nature", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 120,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Protected shoreline and wetland habitat give Saïdia one of the better nature escapes on the Mediterranean coast.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 1164,
    tip: "Best with your own water and sun protection because facilities are limited.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Moulouya+National+Park+Walk%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-eucalyptus-beachfront-walk",
    city: "saidia",
    name: "Eucalyptus Beachfront Walk",
    neighborhood: "Main Promenade",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "nomad"],
    tags: ["coastal", "nature", "sunset", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 90,
    transportMode: "walkable",
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The tree-lined beach edge is ideal for an easy walk with shade and sea views.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.2,
    reviewCount: 557,
    tip: "A good option in the final hour before dinner.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Eucalyptus+Beachfront+Walk%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-jet-ski-session-at-sa-dia-beach",
    city: "saidia",
    name: "Jet Ski Session at Saïdia Beach",
    neighborhood: "Water Sports Zone",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "climbing-adventure", "coastal", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 35,
    durationMinutes: 30,
    transportMode: "mixed",
    transportModes: ["not available"],
    safetyLevel: 3,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Fast water-sport fun for travelers who want more adrenaline than a simple swim.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 172,
    tip: "Choose licensed operators and confirm session length before paying.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jet+Ski+Session+at+Sa%C3%AFdia+Beach%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-sailing-lesson-from-marina-sa-dia",
    city: "saidia",
    name: "Sailing Lesson from Marina Saïdia",
    neighborhood: "Marina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "luxury"],
    tags: ["active", "climbing-adventure", "coastal", "nature", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 45,
    durationMinutes: 120,
    transportMode: "mixed",
    transportModes: ["not available"],
    safetyLevel: 3,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A beginner-friendly sailing session adds a breezy, premium-feeling way to enjoy the bay.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 194,
    tip: "Wind is usually kinder earlier or later in the day than at midday.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sailing+Lesson+from+Marina+Sa%C3%AFdia%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-alpamare-water-park",
    city: "saidia",
    name: "Alpamare Water Park",
    neighborhood: "Resort Zone",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["first-timer", "nomad"],
    tags: ["active", "climbing-adventure", "sunset", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 22,
    durationMinutes: 180,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Slides and pools make this one of the easiest family diversions when the beach feels too windy or crowded.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 1026,
    tip: "It is busiest in the hottest part of summer, so expect queues then.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Alpamare+Water+Park%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-sa-dia-golf-round",
    city: "saidia",
    name: "Saïdia Golf Round",
    neighborhood: "Resort Golf Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "friends", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["luxury", "nomad"],
    tags: ["active", "coastal", "nature", "sunset", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 55,
    durationMinutes: 180,
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
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A resort golf session fits travelers looking for a slower premium activity between beach days.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 580,
    tip: "Morning tee times are usually more comfortable than midday.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sa%C3%AFdia+Golf+Round%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-beni-snassen-quad-ride",
    city: "saidia",
    name: "Beni-Snassen Quad Ride",
    neighborhood: "Foothill Outskirts",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "climbing-adventure", "mountain", "nature", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 40,
    durationMinutes: 90,
    transportMode: "mixed",
    transportModes: ["not available"],
    safetyLevel: 3,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "An off-road quad outing shifts the focus from sea to scrubby hills and inland viewpoints.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 255,
    tip: "Wear eye protection and avoid the hottest midday slot.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Beni-Snassen+Quad+Ride%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-kiss-river-border-viewpoint",
    city: "saidia",
    name: "Kiss River Border Viewpoint",
    neighborhood: "Oued Kiss",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "culture"],
    tags: ["coastal", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 45,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "This edge-of-country viewpoint is more about geography and curiosity than classic sightseeing.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 436,
    tip: "Bring ID if you are exploring close to formal border-control areas.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kiss+River+Border+Viewpoint%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-cap-de-leau-beach-trip",
    city: "saidia",
    name: "Cap de l'Eau Beach Trip",
    neighborhood: "Ras El Ma / Cap de l'Eau",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "large-groups"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "adventure"],
    tags: ["coastal", "nature", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 8,
    durationMinutes: 180,
    transportMode: "mixed",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A nearby beach escape with a slightly different coastal mood and a good change from the main resort strip.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 623,
    tip: "Pair it with seafood rather than trying to over-schedule the day.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cap+de+l%E2%80%99Eau+Beach+Trip%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-sunset-seafood-at-the-marina",
    city: "saidia",
    name: "Sunset Seafood at the Marina",
    neighborhood: "Marina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["luxury", "nomad"],
    tags: ["authentic", "coastal", "sunset", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 18,
    durationMinutes: 90,
    transportMode: "walkable",
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A simple but worthwhile evening activity centered on fresh fish, harbor light, and resort ambience.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 328,
    tip: "Ask for the catch of the day instead of default menu staples.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sunset+Seafood+at+the+Marina%2C+saidia%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "saidia-parc-sa-dia-family-stroll",
    city: "saidia",
    name: "Parc Saïdia Family Stroll",
    neighborhood: "Town Park",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "nomad"],
    tags: ["nature", "relaxed", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 60,
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
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A gentle local park stop for families, fresh air, and a change of pace from sand and resort traffic.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Saidia_2014_04.jpg",
      "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/1032378425_Saidia.jpg"
    ],
    googleRating: 4.3,
    reviewCount: 607,
    tip: "Best used as a short evening reset, not a half-day plan.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Parc+Sa%C3%AFdia+Family+Stroll%2C+saidia%2C+Morocco",
  }
];
