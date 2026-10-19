/**
 * =========================================================================
 * [RABAT] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/rabat/index.ts
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
export const rabatHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-kasbah-des-oudaias",
    city: "rabat",
    name: "Kasbah des Oudaias",
    neighborhood: "Kasbah des Oudaias",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture", "nomad"],
    tags: ["cultural-tour", "instagrammable", "private", "sunset", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 75,
    transportMode: "walkable",
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
    hasPrivateOption: true,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A blue-and-white citadel quarter with ocean views, hidden alleys, and one of Rabat's best sunset walks.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 1986,
    tip: "Go early or at golden hour for the best light and the quietest lanes.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kasbah+des+Oudaias%2C+rabat%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-hassan-tower",
    city: "rabat",
    name: "Hassan Tower",
    neighborhood: "Tour Hassan",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture"],
    tags: ["cultural-tour", "instagrammable", "sunset", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 75,
    transportMode: "walkable",
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
    description: "Rabat's unfinished Almohad minaret and its monumental esplanade are essential for first-time visitors.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 2646,
    tip: "Pair it with the nearby mausoleum before tour buses arrive.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hassan+Tower%2C+rabat%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-mausoleum-of-mohammed-v",
    city: "rabat",
    name: "Mausoleum of Mohammed V",
    neighborhood: "Tour Hassan",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture"],
    tags: ["cultural-tour", "instagrammable", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 75,
    transportMode: "walkable",
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
    description: "This ornate royal mausoleum stands beside Hassan Tower and showcases fine Moroccan craftsmanship.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 8188,
    tip: "Dress modestly and look up at the cedar and zellige details inside.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mausoleum+of+Mohammed+V%2C+rabat%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-chellah",
    city: "rabat",
    name: "Chellah",
    neighborhood: "Chellah",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["cultural-tour", "instagrammable", "nature", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 7,
    durationMinutes: 90,
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
    description: "Roman and medieval ruins, stork nests, and gardens combine into Rabat's most atmospheric heritage site.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 5008,
    tip: "Carry water; the site is partly exposed and rewards slow exploration.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chellah%2C+rabat%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-rabat-medina-and-rue-des-consuls",
    city: "rabat",
    name: "Rabat Medina & Rue des Consuls",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad", "first-timer"],
    tags: ["authentic", "medina", "private", "shopping", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 75,
    transportMode: "walkable",
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
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A manageable medina for carpets, leatherwork, and people-watching without the pressure of Morocco's biggest souks.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 2602,
    tip: "Enter from Bab El Had and drift toward Rue des Consuls for the best craft stretch.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rabat+Medina+%26+Rue+des+Consuls%2C+rabat%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-mohammed-vi-museum-of-modern-and-contemporary-art",
    city: "rabat",
    name: "Mohammed VI Museum of Modern and Contemporary Art",
    neighborhood: "Ville Nouvelle",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["cultural-tour", "private", "relaxed", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 6,
    durationMinutes: 60,
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
    isPhotographyFriendly: false,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Morocco's flagship modern art museum mixes rotating exhibitions with a polished city-center setting.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 6145,
    tip: "Check current exhibitions before you go; major shows can change the pace of the visit.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mohammed+VI+Museum+of+Modern+and+Contemporary+Art%2C+rabat%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-museum-of-history-and-civilisations",
    city: "rabat",
    name: "Museum of History and Civilisations",
    neighborhood: "Ville Nouvelle",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["cultural-tour", "morning", "private", "relaxed", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 60,
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
    isPhotographyFriendly: false,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Archaeology, mosaics, bronzes, and early Moroccan history make this museum a strong culture stop.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 2145,
    tip: "It works especially well on hot afternoons when you want an indoor visit.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Museum+of+History+and+Civilisations%2C+rabat%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-grand-theatre-de-rabat-exterior-walk",
    city: "rabat",
    name: "Grand Theatre de Rabat Exterior Walk",
    neighborhood: "Bouregreg Waterfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "first-timer"],
    tags: ["instagrammable", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 90,
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
    description: "Zaha Hadid's curving landmark is best appreciated on a short waterfront architecture walk.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 2367,
    tip: "Late afternoon gives the building softer contrast for photos.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Theatre+de+Rabat+Exterior+Walk%2C+rabat%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-royal-palace-esplanade",
    city: "rabat",
    name: "Royal Palace Esplanade",
    neighborhood: "Mechouar",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture"],
    tags: ["cultural-tour", "private", "sunset", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 30,
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
    hasPrivateOption: true,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The palace exterior and formal gates offer a quick look at Rabat's ceremonial heart.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 538,
    tip: "Security is tight; keep the visit respectful and stick to public viewpoints.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Royal+Palace+Esplanade%2C+rabat%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-st-peters-cathedral",
    city: "rabat",
    name: "St. Peter's Cathedral",
    neighborhood: "Hassan District",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["cultural-tour", "instagrammable", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 75,
    transportMode: "walkable",
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
    description: "A rare Art Deco cathedral in the capital, notable for its clean lines and quiet square.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.2,
    reviewCount: 303,
    tip: "Visit mid-morning when the façade is evenly lit.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=St.+Peter%27s+Cathedral%2C+rabat%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-villa-des-arts",
    city: "rabat",
    name: "Villa des Arts",
    neighborhood: "Ville Nouvelle",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["cultural-tour", "relaxed", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 60,
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
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A compact contemporary art venue in a handsome villa, ideal for a shorter cultural stop.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.3,
    reviewCount: 685,
    tip: "Pair it with nearby cafés or the Mohammed VI Museum for a stronger art day.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Villa+des+Arts%2C+rabat%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-tramway-rabat-sal-ride",
    city: "rabat",
    name: "Tramway Rabat-Salé Ride",
    neighborhood: "City Center",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "first-timer"],
    tags: ["authentic", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    durationMinutes: 45,
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
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A simple but effective way to see Rabat's everyday rhythm and connect major districts efficiently.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.3,
    reviewCount: 913,
    tip: "Ride in off-peak hours if you want windows and easier photography.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tramway+Rabat-Sal%C3%A9+Ride%2C+rabat%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-mega-mall-and-ice-rink",
    city: "rabat",
    name: "Mega Mall & Ice Rink",
    neighborhood: "Hay Riad",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "first-timer"],
    tags: ["relaxed", "shopping", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 6,
    durationMinutes: 120,
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
    description: "A modern mall stop for shopping, snacks, and one of the capital's most unusual indoor diversions.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 390,
    tip: "Useful on rainy or very hot days; evenings are busiest.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mega+Mall+%26+Ice+Rink%2C+rabat%2C+Morocco",
  }
];
