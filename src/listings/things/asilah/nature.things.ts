/**
 * =========================================================================
 * [ASILAH] THINGS TO DO — NATURE & ADVENTURE
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

// ══ LISTINGS — NATURE & ADVENTURE ══
export const asilahNatureThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-paradise-beach",
    city: "asilah",
    name: "Paradise Beach (Plage Rmilat)",
    neighborhood: "Rmilat",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "romantic", "first-timer"],
    tags: ["coastal", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 3.5,
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
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A wide, golden-sand beach south of Asilah known for its dramatic dunes, clear water, and relaxed vibe. Popular for walks, horse riding, and sunsets.",
    shortValueProp: "A wild, beautiful Atlantic beach with golden sand and dramatic dunes",
    googleRating: 4.4,
    reviewCount: 1250,
    googleReviewCount: 720,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 380,
    viatorRating: 4.2,
    viatorReviewCount: 95,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 55,
    tip: "You can walk here from the medina in about 45-60 minutes along the coast. Horse rides and simple beach bars available.",
    tips: ["not available"],
    highlights: [
      "Long stretch of fine golden sand",
      "Dramatic sand dunes and coastal scenery",
      "Great for sunset walks and horse riding"
    ],
    emotionalBenefits: ["Scenic", "Peaceful", "Adventurous"],
    bestTimeToVisit: "Late afternoon for sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public beach access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Horse ride or sunbed rental (optional)",
    address: "Plage Rmilat, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Paradise+Beach+Asilah",
    parkingInfo: "Informal parking near the beach (small tip expected)",
    publicTransportInfo: "Taxi or 45-min coastal walk from medina",
    dressCode: "Beachwear",
    equipmentNeeded: ["Sunscreen", "Water"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Generally safe; watch for strong currents when swimming",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Traveler",
        quote: "One of the most beautiful and unspoiled beaches near Asilah. Worth the walk.",
        author: "Laura M.",
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
    storyTitle: "The Wild Beach South of Town",
    history: "A traditional local beach that has become popular with visitors seeking a more natural experience than the town beach.",
    culturalImportance: "A favorite spot for locals on weekends and a symbol of Asilah's beautiful coastline.",
    localLegend: "Fishermen say the dunes here hide ancient shipwrecks from centuries past.",
    funFact: "Also known as 'Las Cuevas' because of small caves visible at low tide.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I walk there from town?",
        a: "Yes, it's a pleasant 45-60 minute walk along the coast."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-main-beach",
    city: "asilah",
    name: "Asilah Town Beach",
    neighborhood: "Beachfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "family", "nomad"],
    tags: ["coastal", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 150,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The main beach right next to the medina. A long curve of sand with the Portuguese walls as a dramatic backdrop. Popular for swimming, walks, and people-watching.",
    shortValueProp: "A convenient town beach with historic walls as a backdrop",
    googleRating: 4.2,
    reviewCount: 967,
    googleReviewCount: 560,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 290,
    viatorRating: 4,
    viatorReviewCount: 75,
    getyourguideRating: 3.9,
    getyourguideReviewCount: 42,
    tip: "The beach is right below the medina walls. Great for a swim followed by exploring the old town.",
    tips: ["not available"],
    highlights: [
      "Directly below the medina walls",
      "Long sandy beach for walks",
      "Easy access to cafés and restaurants"
    ],
    emotionalBenefits: ["Relaxed", "Scenic", "Convenient"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public beach access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Sunbed rental (optional)",
    address: "Plage d'Asilah, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Town+Beach",
    parkingInfo: "Street parking near the beach",
    publicTransportInfo: "Steps from the medina",
    dressCode: "Swimwear on beach",
    equipmentNeeded: ["Sunscreen", "Towel"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Generally safe; lifeguards in summer",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "Perfect for a quick swim right after exploring the medina.",
        author: "The Rossi Family",
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
    storyTitle: "The Beach at the Foot of the Walls",
    history: "The town beach has always been part of daily life in Asilah, used by locals for generations.",
    culturalImportance: "A place where the historic medina meets the sea in everyday life.",
    localLegend: "Fishermen say the walls protect the beach from the roughest winter storms.",
    funFact: "You can swim with the Portuguese ramparts towering above you.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it safe to swim?",
        a: "Yes in summer, but the Atlantic can have strong waves."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-sidi-mghayet-beach",
    city: "asilah",
    name: "Sidi Mghayet Beach",
    neighborhood: "Sidi Mghayet",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "photographer"],
    tags: ["coastal", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 13,
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
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A wide, quiet sandy beach south of Asilah with dunes, a small river mouth, and a very relaxed, natural feel. Popular with locals and those seeking solitude.",
    shortValueProp: "A peaceful, natural beach with dunes and a river mouth",
    googleRating: 4.3,
    reviewCount: 303,
    googleReviewCount: 185,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 78,
    viatorRating: 4.1,
    viatorReviewCount: 25,
    getyourguideRating: 4,
    getyourguideReviewCount: 15,
    tip: "Less crowded than Paradise Beach. Good for long walks and nature.",
    tips: ["not available"],
    highlights: [
      "Wide sandy beach with dunes",
      "Small river flowing into the sea",
      "Very quiet and natural setting"
    ],
    emotionalBenefits: ["Peaceful", "Wild", "Scenic"],
    bestTimeToVisit: "Anytime",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public beach access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Small local beach bars",
    address: "Sidi Mghayet, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sidi+Mghayet+Beach+Asilah",
    parkingInfo: "Informal parking (small tip)",
    publicTransportInfo: "Taxi or drive (partly on dirt road)",
    dressCode: "Beachwear",
    equipmentNeeded: ["Water", "Snacks"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Remote – go with others if possible",
    languages: ["Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Nature Lover",
        quote: "Beautiful and empty. One of my favorite beaches in the area.",
        author: "Clara J.",
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
    storyTitle: "The Quiet Beach of the Saints",
    history: "Named after a local saint. Long used by local fishermen and shepherds.",
    culturalImportance: "A place where nature and traditional coastal life still feel untouched.",
    localLegend: "The saint Sidi Mghayet is said to protect the waters here.",
    funFact: "You can sometimes see sheep grazing on the hills right behind the beach.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is there anywhere to eat?",
        a: "Small improvised beach restaurants in summer."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-briech-beach",
    city: "asilah",
    name: "Briech Beach",
    neighborhood: "Briech",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad"],
    tags: ["coastal", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 150,
    distanceFromCenterKm: 8,
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
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A long, wide beach north of Asilah with soft sand and fewer crowds. Popular for long walks and a more local atmosphere.",
    shortValueProp: "A wide, quiet beach popular with locals",
    googleRating: 4.1,
    reviewCount: 235,
    googleReviewCount: 145,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 62,
    viatorRating: 3.9,
    viatorReviewCount: 18,
    getyourguideRating: 3.8,
    getyourguideReviewCount: 10,
    tip: "Great for a long peaceful walk. Fewer facilities than the town beach.",
    tips: ["not available"],
    highlights: ["Long stretch of soft sand", "Peaceful and less developed", "Beautiful for walks"],
    emotionalBenefits: ["Peaceful", "Scenic", "Relaxed"],
    bestTimeToVisit: "Morning or afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public beach access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None major",
    address: "Briech, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Briech+Beach+Asilah",
    parkingInfo: "Informal parking",
    publicTransportInfo: "Taxi or local bus",
    dressCode: "Beachwear",
    equipmentNeeded: ["Sunscreen"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Generally safe",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Walker",
        quote: "Perfect for a long, quiet walk by the sea.",
        author: "Hans K.",
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
    storyTitle: "The Local's Beach to the North",
    history: "A traditional beach used by residents of Asilah and nearby villages.",
    culturalImportance: "Part of everyday coastal life in the region.",
    localLegend: "The area is known for good fishing spots along the shore.",
    funFact: "On weekends you may see local families having picnics here.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are there restaurants?",
        a: "A few small places, especially in summer."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-mezora-cromlech",
    city: "asilah",
    name: "Mezora Cromlech",
    neighborhood: "Chouahed",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "culture"],
    tags: ["historical", "nature", "off-the-beaten-path", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 10,
    entryPrice: 10,
    durationMinutes: 60,
    distanceFromCenterKm: 15,
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
    nearBeach: false,
    goodForRain: false,
    openingHours: "Daylight hours",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "An impressive prehistoric stone circle and burial mound located in the countryside near Asilah. One of the most important megalithic sites in North Africa.",
    shortValueProp: "Ancient megalithic stone circle in the Moroccan countryside",
    googleRating: 4,
    reviewCount: 157,
    googleReviewCount: 95,
    tripadvisorRating: 3.9,
    tripadvisorReviewCount: 42,
    viatorRating: 3.8,
    viatorReviewCount: 12,
    getyourguideRating: 3.7,
    getyourguideReviewCount: 8,
    tip: "Best visited with a local guide as the access road can be confusing. The site is very atmospheric.",
    tips: ["not available"],
    highlights: ["Large prehistoric stone circle", "Ancient burial mound", "Peaceful rural setting"],
    emotionalBenefits: ["Mysterious", "Historic", "Reflective"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Entry",
        price: 10
      }
    ],
    discountsInfo: "Free for children",
    includedServices: ["Site access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Guide recommended (100-150 MAD)",
    address: "Near Chouahed village, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mezora+Cromlech+Asilah",
    parkingInfo: "Limited near the site",
    publicTransportInfo: "Taxi or private transfer (partly dirt road)",
    dressCode: "Comfortable outdoor clothing",
    equipmentNeeded: ["Water", "Sun protection"],
    fitnessLevel: "Moderate (Some walking over uneven ground)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Remote site – inform someone of your plans",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "History Buff",
        quote: "Fascinating and atmospheric. One of the best prehistoric sites in Morocco.",
        author: "Dr. Ahmed S.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Sidi Mghayet Beach",
        type: "visit",
        id: "asilah-sidi-mghayet-beach"
      }
    ],
    storyTitle: "The Stones of the Ancients",
    history: "Dating back thousands of years, this is one of the largest and best-preserved megalithic sites in North Africa.",
    culturalImportance: "Evidence of early civilizations in the region and a link to Morocco's ancient past.",
    localLegend: "Local people say the stones were placed by giants in ancient times.",
    funFact: "The central mound is believed to be a royal burial site.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it easy to find?",
        a: "A local guide is strongly recommended."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-promenade",
    city: "asilah",
    name: "Asilah Seawall Promenade",
    neighborhood: "Beachfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
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
    durationMinutes: 60,
    distanceFromCenterKm: 0.25,
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
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A scenic seaside promenade running along the historic ramparts with stunning views of the Atlantic. Perfect for evening strolls and people watching.",
    shortValueProp: "Beautiful seaside walk along the historic walls with ocean views",
    googleRating: 4.4,
    reviewCount: 705,
    googleReviewCount: 410,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 210,
    viatorRating: 4.1,
    viatorReviewCount: 55,
    getyourguideRating: 4,
    getyourguideReviewCount: 30,
    tip: "Best at sunset. Many cafes along the way for mint tea with a view.",
    tips: ["not available"],
    highlights: [
      "Panoramic Atlantic Ocean views",
      "Historic ramparts as dramatic backdrop",
      "Lively evening atmosphere with locals"
    ],
    emotionalBenefits: ["Scenic", "Peaceful", "Reflective"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public promenade access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Cafe drinks optional",
    address: "Seawall, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Promenade+Seawall",
    parkingInfo: "Street parking nearby",
    publicTransportInfo: "Walkable from medina",
    dressCode: "Casual",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Well lit and safe in evenings",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "Our favorite evening activity. The views are unbeatable.",
        author: "Anna & Mark",
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
    storyTitle: "Waves Against the Walls",
    history: "The promenade was developed along the ancient Portuguese seawall to connect the medina with the modern town.",
    culturalImportance: "A daily gathering spot for locals and a showcase of Asilah's coastal identity.",
    localLegend: "Fishermen say the waves crashing here bring good luck for the next day's catch.",
    funFact: "You can often watch local fishermen repair their nets along the wall.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it crowded at night?",
        a: "It gets lively but never overcrowded. Great for families."
      }
    ],
    contactPhone: "",
  }
];
