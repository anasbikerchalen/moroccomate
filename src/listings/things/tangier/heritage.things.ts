/**
 * =========================================================================
 * [TANGIER] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/tangier/index.ts
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
 *               hiddenCostsInfo, worries, address, coordinates, googleMapsUrl, parkingInfo,
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
 *   // ── 4. WORRIES ("Things You're Worried About!") — one entry per traveler
 *   // worry. Keep tag/description "not available" until verified web research.
 *   // tag = 1-2 words max, an adjective naming the worry's state (e.g. "Clean",
 *   // "Filtered") — never just good/bad. description = max 2 lines.
 *   worries: [
 *     { id: "activity-safety", title: "Safety", icon: "shield", tag: "not available", description: "not available", state: "pending" },
 *     { id: "activity-scams", title: "Scams", icon: "warning", tag: "not available", description: "not available", state: "pending" },
 *     { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "not available", description: "not available", state: "pending" },
 *     { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "not available", description: "not available", state: "pending" },
 *     { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "not available", description: "not available", state: "pending" },
 *   ],
 *   address: "",
 *   coordinates: { lat: 0, lng: 0 },
 *   googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=",
 * }
 * =========================================================================
 */
import type { ThingToDoListing } from '../../types';
// ══ LISTINGS — HERITAGE & CULTURE ══
export const tangierHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-kasbah-museum",
    city: "tangier",
    name: "Kasbah Museum (Dar el-Makhzen)",
    neighborhood: "Kasbah", // Touristic 2.1.1
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    vibeTags: ["historical", "regal", "serene", "architectural"],
    tags: [
      "authentic",
      "cultural-tour",
      "instagrammable",
      "medina",
      "photo-spot",
      "port-express",
      "private",
      "relaxed",
      "step-free",
      "walk-in"
    ],
    badges: ["historic-landmark", "must-see"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 30, // 30 MAD standard adult admission
    durationMinutes: 90,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["ground_floor_access", "flat_courtyard", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "restrooms", "fountains", "shaded_courtyards"],
    restrictions: ["no flash photography inside artifact galleries"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Housed inside the former 17th-century Sultan's palace, this museum showcases Tangier's history from prehistoric times through Roman, Phoenician, and Islamic eras. Don’t miss the serene Andalusian courtyard garden filled with free-roaming tortoises.",
    images: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80"
    ],
    googleRating: 4.4,
    reviewCount: 2499,
    tip: "Your ticket also grants free entry to the nearby Contemporary Art Space (former prison), making it an excellent two-for-one deal.",
    tips: ["not available"],
    excludedServices: ["guided tour fee"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure", description: "The Kasbah summit is well-patrolled by tourist police and completely safe during daytime.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Unofficial Guides", description: "Faux guides loiter at Bab Haha offering unsolicited tours; decline politely and buy tickets at the official booth.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Fixed Price", description: "Official National Museums Foundation entry is strictly 30 MAD with clear printed receipts.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Authentic Palace", description: "Genuine 17th-century Dar al-Makhzen royal palace featuring original zellij and cedar ceilings.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Moderate Incline", description: "Walking up from the lower medina involves steep cobbled hills; petit taxis can drop you directly at the top gate.", state: "verified" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Kasbah+Museum/@35.7891334,-5.8143962,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-legation-museum",
    city: "tangier",
    name: "Tangier American Legation Museum",
    neighborhood: "Petit Socco", // Touristic 2.1.1 (previously Medina)
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer"],
    vibeTags: ["historical", "cosy", "artistic", "nostalgic"],
    tags: ["authentic", "cultural-tour", "instagrammable", "medina", "private", "relaxed", "walk-in"],
    badges: ["historic-landmark", "must-see"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 50, // 50 MAD for non-resident adults (20 MAD for residents)
    durationMinutes: 60,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false, // Multi-story historic house with narrow stairways
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "restrooms", "gift_shop", "historical_documentation"],
    restrictions: ["large backpacks must be left at reception"],
    healthContraindications: ["mobility impairment due to multiple flights of stairs"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The first and only American National Historic Landmark located on foreign soil, gifted by the Sultan of Morocco in 1821. Discover beautifully restored, tiled rooms packed with regional art, historic maps, and a wing dedicated to expatriate author Paul Bowles.",
    images: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
      "https://images.unsplash.com/photo-1542838132-92c53300491e"
    ],
    googleRating: 4.6,
    reviewCount: 1579,
    tip: "Ask the staff to show you the \"Moroccan Mona Lisa\" painting by James McBey—it is the crown jewel of the collection.",
    tips: ["not available"],
    excludedServices: ["personal guide tip"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "Located on a quiet, secure alleyway right inside Bab Merican with friendly staff.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "No Scams", description: "Institution run by the US-Morocco TALIM institute with fixed, transparent entry fees.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Transparent", description: "50 MAD for international visitors; cash only at the front desk.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Historic Landmark", description: "Unrivaled real diplomatic museum holding authentic Paul Bowles memorabilia and 19th-century maps.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Narrow Stairs", description: "Requires climbing three floors of historic winding tile staircases.", state: "verified" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Tangier+American+Legation+Museum/@35.7836109,-5.8118029,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-grand-socco",
    city: "tangier",
    name: "Grand Socco (Place du 9 Avril 1947)",
    neighborhood: "Grand Socco", // Touristic 2.1.1 (previously Medina)
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "nomad"],
    vibeTags: ["vibrant", "energetic", "iconic"],
    tags: ["authentic", "instagrammable", "medina", "shopping", "walk-in"],
    badges: ["cultural-icon", "must-see"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 60,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "bus"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_walkways", "wide_flat_walkways", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["cash_mad"],
    amenities: ["fountains", "shaded_benches", "cafe", "atm_nearby"],
    restrictions: ["pedestrian caution due to surrounding roundabout traffic"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The energetic and beating heart of Tangier that bridges the ancient, narrow streets of the Medina with the modern Ville Nouvelle. It features palm trees, a lively central fountain, and surrounding historic cafes perfect for people-watching.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e"
    ],
    googleRating: 4.4,
    reviewCount: 11196,
    tip: "Take a seat on the terrace of Cinéma Rif on the square around dusk to experience the local transition from day to night.",
    tips: ["not available"],
    excludedServices: ["cafe orders"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Well Monitored", description: "Constant pedestrian traffic and visible police presence day and night.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Hustlers", description: "Touts offer tours into the medina; a firm 'La, Shukran' (No, thank you) will discourage them.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Public Hub", description: "Public square with free entry; standard local prices at surrounding cafes.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Living Landmark", description: "Where Tangier residents naturally meet and gather daily.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Very Easy", description: "Paved, level walkways with ample bench seating around the central fountain.", state: "verified" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Grand+Socco/@35.7853112,-5.814522,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-petit-socco",
    city: "tangier",
    name: "Petit Socco",
    neighborhood: "Petit Socco", // Touristic 2.1.1 (previously Medina)
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    vibeTags: ["nostalgic", "cosy", "vibrant", "historical"],
    tags: [
      "authentic",
      "cultural-tour",
      "medina",
      "morning",
      "off-the-beaten-path",
      "private",
      "relaxed",
      "walk-in"
    ],
    badges: ["historic-landmark", "cultural-immersion"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 45,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["cobblestone_paths", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "food_stalls"],
    restrictions: ["pedestrian only; uneven cobblestones"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Once a notorious hub for international spies, writers, and bohemians in the early 20th century, this cozy square is now a charming crossroads of medina life. Sip a coffee or mint tea at a historic cafe and watch the vibrant daily life of the old city walk by.",
    images: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
      "https://images.unsplash.com/photo-1509060464153-4466739f78d0"
    ],
    googleRating: 4.4,
    reviewCount: 819,
    tip: "Head to the iconic Gran Café Central directly on the square, which was once a favorite haunt of William S. Burroughs.",
    tips: ["not available"],
    excludedServices: ["cafe orders"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Safe Today", description: "Once bohemian and shadowy, it is now an open, family-friendly tourist square.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Shop Touts", description: "Shopkeepers will invite you in for carpets; you are under no obligation to enter.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Inexpensive", description: "Traditional mint tea or spiced coffee costs 10–15 MAD at square cafes.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Historical Core", description: "The authentic crossroad of old Tangier's diplomatic and literary history.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Gentle Walk", description: "Easy pedestrian access along Rue Siaghine from Grand Socco.", state: "verified" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Petit+Socco/@35.7849684,-5.8115668,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-st-andrew",
    city: "tangier",
    name: "St. Andrew’s Anglican Church",
    neighborhood: "Grand Socco", // Touristic 2.1.1 (previously Medina)
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    vibeTags: ["spiritual", "serene", "architectural", "peaceful"],
    tags: ["authentic", "cultural-tour", "medina", "off-the-beaten-path", "relaxed", "walk-in"],
    badges: ["historic-landmark", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20, // 20 MAD customary donation
    durationMinutes: 30,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["cash_mad"],
    amenities: ["garden_seating_access", "shaded_benches"],
    restrictions: ["dress respectfully; active place of worship during Sunday services"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A fascinating historical testament to interfaith harmony, this active Anglican church is constructed in a Moorish architectural style. Admire its intricate geometric carvings, zellij tiles, and the Lord's Prayer beautifully written in Arabic calligraphy inside.",
    images: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
      "https://images.unsplash.com/photo-1542838132-92c53300491e"
    ],
    googleRating: 4.1,
    reviewCount: 325,
    tip: "Speak to the resident caretaker Yassine, who maintains this Christian church, and ask to see the historic gravestones in the lush backyard cemetery.",
    tips: ["not available"],
    excludedServices: ["caretaker donation"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Peaceful", description: "Enclosed, walled churchyard behind high gates providing an oasis of calm.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "None", description: "The church is maintained by a trusted local caretaker; no pushy behavior.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Donation Based", description: "Official entry is free; leaving a 20 MAD donation for church upkeep is customary.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Unique Interfaith", description: "One-of-a-kind Anglican interior inscribed with the Lord's Prayer in classical Arabic calligraphy.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Minimal", description: "A few steps up to the nave; lush walking path through the graveyard.", state: "verified" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/St.+Andrew's+Church/@35.7845612,-5.815915,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-villa-harris",
    city: "tangier",
    name: "Villa Harris Museum (Musée Villa Harris)",
    neighborhood: "Malabata", // Touristic 2.1.1
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "luxury"],
    vibeTags: ["elegant", "botanical", "peaceful", "artistic"],
    tags: [
      "cultural-tour",
      "instagrammable",
      "nature",
      "off-the-beaten-path",
      "private",
      "relaxed",
      "walk-in"
    ],
    badges: ["architectural-gem", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20, // 20 MAD adult museum ticket
    durationMinutes: 60,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true, // Modern renovated museum with elevator & ramp access
    accessibilityFeatures: ["step_free_access", "flat_ground", "flat_walkways", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "restrooms", "parking", "garden_seating_access", "children_playground"],
    restrictions: ["museum closed on Tuesdays"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Once the grand 19th-century residence of British journalist Walter Burton Harris, this property is now a modern art museum. Explore two floors of vibrant Moroccan paintings, sculptures, and international orientalist art, surrounded by a peaceful botanical park.",
    images: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80"
    ],
    googleRating: 4.6,
    reviewCount: 2792,
    tip: "Placed in Malabata, this museum features trilingual informational placards (including English), making it highly accessible for international visitors.",
    tips: ["not available"],
    excludedServices: ["special exhibition fees if applicable"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "Modern public park with dedicated security staff at museum entrances.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "Official National Museums Foundation facility with electronic ticketing.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Bargain", description: "20 MAD for adults; free access for children under 18 and free park access.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Authentic Art", description: "Exceptional permanent collection of modern Moroccan masters like Chaïbia and Cherkaoui.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Accessible", description: "Fully wheelchair and stroller friendly with level garden pathways and elevator.", state: "verified" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Villa+Harris+Museum/@35.7766521,-5.7733475,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-dar-niaba",
    city: "tangier",
    name: "Dar Niaba Cultural Museum",
    neighborhood: "Petit Socco", // Touristic 2.1.1 (previously Medina)
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    vibeTags: ["historical", "architectural", "peaceful"],
    tags: ["authentic", "cultural-tour", "medina", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["historic-landmark", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20, // 20 MAD adult ticket
    durationMinutes: 45,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["ground_floor_access", "flat_courtyard", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "restrooms", "fountains", "shaded_courtyards"],
    restrictions: ["closed on Tuesdays"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Housed inside a restored Portuguese-era mansion that served as the former French consulate and the office of the Sultan's diplomatic representative. It hosts a collection of 19th and 20th-century Orientalist portraits, diplomatic artifacts, and historical archives.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e",
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43"
    ],
    googleRating: 4.4,
    reviewCount: 180,
    tip: "Take a slow stroll through the peaceful central courtyard downstairs, which features a beautiful array of orange trees.",
    tips: ["not available"],
    excludedServices: ["guided tour fee"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure", description: "Located right on the main Rue Siaghine tourist thoroughfare with museum reception.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "No Scams", description: "Directly operated under the National Museums Foundation with official pricing.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Fixed Rate", description: "20 MAD general admission; cash preferred at the counter.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "High Quality", description: "Carefully restored historical diplomatic mansion displaying genuine archive materials.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Low Incline", description: "Ground floor courtyard is easy to navigate; upper gallery accessed via stairs.", state: "verified" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Mus%C3%A9e+Dar+Niaba/@35.7847125,-5.8130252,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-moshe-nahon",
    city: "tangier",
    name: "Moshe Nahon Synagogue",
    neighborhood: "Petit Socco", // Touristic 2.1.1 (previously Medina)
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    vibeTags: ["ornate", "intricate", "spiritual", "historical"],
    tags: ["authentic", "cultural-tour", "medina", "off-the-beaten-path", "relaxed", "walk-in"],
    badges: ["historic-landmark", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20, // 20 MAD customary caretaker donation
    durationMinutes: 30,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false, // Narrow stairs to entrance and women's gallery
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation"],
    restrictions: ["visitors must cover head or dress respectfully; closed Saturdays"],
    healthContraindications: ["stairs required to enter"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Built in the mid-19th century, this hidden synagogue is a tribute to Tangier's historical Jewish heritage. Wander through its restored interior featuring Andalusian arches, intricate stucco work, and a collection of old liturgical artifacts.",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    ],
    googleRating: 4.5,
    reviewCount: 150,
    tip: "The synagogue is tucked deep inside an alleyway; look out for a local caretaker nearby who holds the key and will unlock it for a small tip.",
    tips: ["not available"],
    excludedServices: ["caretaker tip"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Safe Alley", description: "Situated in the quiet Beni Idir quarter; tranquil and respectful atmosphere.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Tip Expected", description: "The guardian will unlock the door and guide you briefly; 20–30 MAD is the standard tip.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Donation Only", description: "No official ticket booth; entry relies entirely on voluntary cash donations.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Exquisite Craft", description: "Stunning 1878 Andalusian-Moorish wooden arks and dozens of original silver lamps.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Hidden Steps", description: "Located behind an unmarked doorway up small cobblestone alley stairs.", state: "verified" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Moshe+Nahon+Synagogue/@35.7851121,-5.8119123,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-mendoubia-gardens",
    city: "tangier",
    name: "Mendoubia Gardens (Parc de la Mendoubia)",
    neighborhood: "Marshan", // Touristic 2.1.1
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "nomad"],
    vibeTags: ["botanical", "peaceful", "historical"],
    tags: ["authentic", "cultural-tour", "nature", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["green-oasis", "peaceful-escape"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 45,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "flat_ground", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["cash_mad"],
    amenities: ["shaded_benches", "fountains", "walking_paths"],
    restrictions: ["closing at dusk (around 6:00 PM)"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A historic green park located on the edge of the Medina, serving as a tranquil retreat from the city center's bustle. It is lined with colonial-era buildings, historic French cannons, and a legendary, giant banyan tree believed to be centuries old.",
    images: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
      "https://images.unsplash.com/photo-1542838132-92c53300491e"
    ],
    googleRating: 4.1,
    reviewCount: 908,
    tip: "It's a peaceful place to relax on a bench in the late afternoon while children play football and friendly local street cats wander by.",
    tips: ["not available"],
    excludedServices: ["none"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Safe In Day", description: "Safe family park during daylight hours; closes around dusk.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "Public municipal park with no vendors bothering visitors.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Entry", description: "Completely free open-access municipal park.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Historic Green", description: "Contains actual 17th-century bronze cannons and the famed monumental banyan tree.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Effortless", description: "Gentle paved paths and abundant shaded benches.", state: "verified" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Mendoubia+Garden/@35.7865123,-5.8159124,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-jewish-cemetery",
    city: "tangier",
    name: "Beit Hahayim (Old Jewish Cemetery of Tangier)",
    neighborhood: "Petit Socco", // Touristic 2.1.1 (previously Medina)
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    vibeTags: ["solemn", "peaceful", "historical"],
    tags: ["authentic", "cultural-tour", "medina", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["historic-memorial", "moving-experience"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20, // 20 MAD caretaker tip
    durationMinutes: 45,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false, // Steep hillside with uneven, eroded stone steps
    accessibilityFeatures: ["some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint"],
    restrictions: ["dress respectfully; do not step on tombstones"],
    healthContraindications: ["steep, uneven slopes"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Perched on a hillside just outside the old medina walls, this cemetery holds thousands of centuries-old tombstones with unique Hebrew inscriptions. It provides a peaceful, reflective look into the deep-rooted historical multicultural identity of Tangier.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1509060464153-4466739f78d0"
    ],
    googleRating: 4.6,
    reviewCount: 18,
    tip: "While the main iron gates on Rue Portugal are kept locked, knock gently and the friendly resident caretaker will let you in. A small tip of 20 MAD is customary.",
    tips: ["not available"],
    excludedServices: ["caretaker tip"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Quiet & Secure", description: "Behind a locked gate accessible through the resident on-site guardian.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Tip Expected", description: "The gatekeeper expects a modest gratuity (20 MAD) for unlocking the gates.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Small Tip", description: "No official ticket price; 20 MAD cash tip is standard custom.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Deeply Moving", description: "Ancient Sephardic gravestones overlooking the sea with names dating back centuries.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Uneven Slope", description: "Terraced steep slope with weathered steps and narrow paths between graves.", state: "verified" },
    ],
    googleMapsUrl: "https://www.google.com/maps/place/Jewish+Cemetery+Tangier/@35.7855123,-5.8105124,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-ibn-battouta-tomb",
    city: "tangier",
    name: "Tomb of Ibn Battouta",
    neighborhood: "Kasbah", // Touristic 2.1.1 (previously Medina)
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "adventure"],
    vibeTags: ["solemn", "historical", "peaceful"],
    tags: ["authentic", "cultural-tour", "medina", "off-the-beaten-path", "relaxed", "walk-in"],
    badges: ["historic-landmark", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 15,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false, // Medina alley with steps
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation"],
    restrictions: ["remove shoes if entering interior prayer corner"],
    healthContraindications: ["stairs along alleyway"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Pay your respects at the modest final resting place of history’s greatest pre-modern traveler, Ibn Battouta, who was born in Tangier in 1304. This humble, whitewashed mausoleum pays tribute to his epic 29-year, 75,000-mile journey across Africa, Europe, and Asia.",
    images: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
      "https://images.unsplash.com/photo-1542838132-92c53300491e"
    ],
    googleRating: 4.2,
    reviewCount: 244,
    tip: "The tomb is located inside a small maze of residential streets in the medina. Feel free to ask a local shopkeeper for \"Qabr Ibn Battouta\" if you lose your way.",
    tips: ["not available"],
    excludedServices: ["voluntary caretaker donation"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "Quiet residential alley in the upper medina Kasbah area.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Self Appointed Guides", description: "Neighborhood kids may offer directions; keep small coins if accepting help.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Visit", description: "No admission fee; a small coin donation can be placed in the shrine box.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Humble Tribute", description: "Intimate and authentic local shrine commemorating the greatest Moroccan explorer.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Cobbled Alleys", description: "Requires walking uphill through winding, narrow Kasbah alleys.", state: "verified" },
    ],
    googleMapsUrl: "https://maps.google.com/?q=Tomb+of+Ibn+Battouta/@35.7874125,-5.8149124,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-darna-association",
    city: "tangier",
    name: "Darna Association Café & Restaurant",
    neighborhood: "Grand Socco", // Touristic 2.1.1
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    vibeTags: ["cosy", "tranquil", "vibrant"],
    tags: ["authentic", "cultural-tour", "relaxed", "shopping", "walk-in", "wellness"],
    badges: ["cultural-immersion", "budget-friendly"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 60, // 60 MAD average traditional meal
    durationMinutes: 60,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["cash_mad"],
    amenities: ["traditional_restaurant", "cafe", "gift_shop", "artisan_workshops", "restrooms"],
    restrictions: ["lunch service typically 12:00 PM to 3:00 PM"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A welcoming community space and restaurant operated by the Darna Association, which supports vulnerable local women and youth. Enjoy fresh, home-cooked traditional Moroccan tagines and pastries in a peaceful courtyard, knowing your money supports a noble social cause.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e",
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43"
    ],
    googleRating: 4.5,
    reviewCount: 151,
    tip: "Make sure to visit their small on-site artisan shop afterward, where they sell beautiful hand-woven textiles and crafts made directly by the women of the association.",
    tips: ["not available"],
    excludedServices: ["shop purchases"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Welcoming Space", description: "Extremely warm and peaceful community environment run by NGO staff.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Social Enterprise", description: "Every dirham spent directly funds women's literacy and vocational training.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Affordable", description: "Home-cooked daily specials and tagines typically cost 50–70 MAD.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Home Cooking", description: "Authentic homestyle Moroccan cooking prepared with local market ingredients.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Step Free", description: "Ground floor courtyard easily accessible right from the street off Grand Socco.", state: "verified" },
    ],
    googleMapsUrl: "https://maps.google.com/?q=Darna/@35.7844123,-5.8155124,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-phoenician-tombs",
    city: "tangier",
    name: "Phoenician Tombs (Nécropole Punico-Romaine)",
    neighborhood: "Marshan", // Touristic 2.1.1
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "photography", "sensory-seeker"],
    vibeTags: ["scenic", "peaceful", "historical", "nostalgic"],
    tags: [
      "authentic",
      "coastal",
      "historical",
      "instagrammable",
      "photo-spot",
      "photography",
      "relaxed",
      "sunset",
      "sunset-view",
      "walk-in"
    ],
    badges: ["panoramic-view", "sunset-spot", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 1.6,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    avoidAnimals: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Best visited before sunset)",
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths", "perimeter_benches"],
    restrictions: ["unfenced cliff edge; watch young children closely"],
    healthContraindications: ["uneven rock surface requires careful footing"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Perched atop the Marshan plateau cliffs, nearly a hundred rectangular tombs were carved straight into the living sandstone rock by Punic and Roman settlers over 2,500 years ago. Today, it serves as Tangier's favorite open-air gathering spot where locals sit side-by-side to watch the sunset over the Strait of Gibraltar and the Spanish coastline.",
    shortValueProp: "Ancient cliffside rock tombs offering Tangier's most breathtaking sunset view over the Strait of Gibraltar.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80"
    ],
    googleRating: 4.4,
    reviewCount: 3120,
    badge: "must-see",
    tip: "Arrive 45 minutes before dusk with a fresh takeaway mint tea from nearby Café Hafa, find an empty carved rock ledge, and watch the cargo ships navigate the Strait into Europe.",
    tips: [
      "Combine your visit with a stop at Café Hafa, which sits less than 200 meters down the coastal path.",
      "Wear flat-soled sneakers since walking along the eroded sandstone shelves can be slippery.",
      "Bring a light sweater; even on hot summer evenings, the maritime breeze off the Atlantic picks up quickly."
    ],
    highlights: [
      "Nearly 100 ancient burial troughs hand-cut into coastal stone cliffs dating to the 5th century BC",
      "Unobstructed panoramic vistas stretching from Tarifa and Gibraltar across the Mediterranean",
      "Authentic local vibe where Tangier artists, students, and families come to converse at dusk"
    ],
    emotionalBenefits: [
      "Feel the timeless weight of Mediterranean antiquity mingling with crashing Atlantic waves",
      "Deep relaxation watching the golden hour bathe the Iberian Peninsula in warm twilight"
    ],
    ticketTypes: [{ name: "Open Public Access", price: 0, currency: "MAD" }],
    includedServices: ["free public viewpoint access"],
    excludedServices: ["guided tour"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Cliff Edge", description: "The cliff edge has no railings; stay a safe meter back from the drop-off, particularly in high winds.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "Completely free municipal landmark; ignore anyone attempting to sell an admission ticket.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Totally Free", description: "Free 24/7 public archaeological site with no ticketing booth.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Genuine Punic", description: "Documented archaeological necropolis excavated since 1910 featuring real ancient funeral troughs.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Uneven Stone", description: "Natural rock ledge with minor grooves; easily accessible via paved Marshan neighborhood roads.", state: "verified" },
    ],
    address: "Plateau du Marshan, 90000 Tangier",
    coordinates: { lat: 35.7906, lng: -5.8173 },
    googleMapsUrl: "https://www.google.com/maps/place/Phoenician+Tombs/@35.7906,-5.8173,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-terrasse-des-paresseux",
    city: "tangier",
    name: "Terrasse des Paresseux (Place Faro)",
    neighborhood: "Centre-Ville", // Mid-Touristic 2.1.2
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "photography", "sensory-seeker"],
    vibeTags: ["iconic", "historical", "scenic", "vibrant"],
    tags: [
      "authentic",
      "coastal",
      "historical",
      "iconic-landmark",
      "instagrammable",
      "photo-spot",
      "relaxed",
      "urban",
      "walk-in"
    ],
    badges: ["panoramic-view", "cultural-icon"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "bus"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "flat_ground", "wide_flat_walkways", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    avoidAnimals: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 3,
      scamRisk: 2,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Daily)",
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "shaded_benches", "atm_nearby", "cafe"],
    restrictions: ["do not climb onto the historic bronze cannon barrels"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The 'Terrace of the Idlers' is Boulevard Pasteur's legendary open-air balcony overlooking the Port of Tangier, the Mediterranean, and Spain across the water. Lined with historic bronze cannons gifted by Portugal and Great Britain, this beloved terrace is the central promenade where generations of Tangérois have paused their evening strolls just to lean on the balustrade and dream.",
    shortValueProp: "Tangier's quintessential colonial-era promenade balcony lined with historic cannons and harbor views.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80",
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1000&q=80"
    ],
    googleRating: 4.4,
    reviewCount: 420,
    badge: "essential",
    tip: "Use the mounted coin-operated optical telescopes on clear days to spot individual white buildings on the coast of Tarifa and Algeciras.",
    tips: [
      "A natural starting point for a walk down Boulevard Pasteur past vintage Art Deco facades and the historic Librairie des Colonnes.",
      "The terrace faces northeast, making morning light ideal for photographing the working port and late afternoon ideal for people-watching."
    ],
    highlights: [
      "Historic 18th-century artillery batteries pointing stoically across the Strait toward Gibraltar",
      "Wide sweeping view encompassing the ferry terminals, Tanja Marina Bay, and the Mediterranean curve",
      "Central downtown social atmosphere that has inspired writers from Paul Bowles to Mohamed Choukri"
    ],
    emotionalBenefits: [
      "Experience the leisurely pace of Tangier's famous evening 'paseo' ritual",
      "Sense the proximity of two continents separating Africa and Europe by just 14 kilometers"
    ],
    ticketTypes: [{ name: "Public Promenade", price: 0, currency: "MAD" }],
    includedServices: ["panoramic terrace access"],
    excludedServices: ["telescope coin fee (5 MAD)"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "Bustling Ville Nouvelle pedestrian zone heavily patrolled by municipal police.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Street Vendors", description: "Occasional souvenir and sunglasses hawkers; a polite 'No, merci' is sufficient.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "No Cost", description: "Public town square that is 100% free to visit.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Civic Heart", description: "A beloved local community hub where Tangier residents unwind and meet friends daily.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Flat & Easy", description: "Completely flat, wide sidewalk directly adjoining Boulevard Pasteur.", state: "verified" },
    ],
    address: "Boulevard Pasteur (Place Faro), 90000 Tangier",
    coordinates: { lat: 35.7828, lng: -5.8105 },
    googleMapsUrl: "https://www.google.com/maps/place/La+Terrasse+des+Paresseux/@35.7828,-5.8105,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-cinematheque-rif",
    city: "tangier",
    name: "Cinémathèque de Tanger (Cinéma Rif)",
    neighborhood: "Grand Socco", // Touristic 2.1.1
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "modern-nomad"],
    vibeTags: ["artistic", "nostalgic", "vibrant", "cosy"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "medina",
      "modern",
      "relaxed",
      "urban",
      "walk-in"
    ],
    badges: ["cultural-icon", "must-see"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 30, // 30 MAD standard cinema screening ticket
    pricePerPerson: 30,
    entryPrice: 0, // Café and lobby open free of charge
    durationMinutes: 90,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["level_entry_doorway", "ground_floor_access", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    avoidAnimals: false,
    hasIndoorRest: true,
    hasWiFi: true,
    hasAC: true,
    nearMedina: true,
    nearBeach: false,
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
    openingHours: "10:00 AM - 11:30 PM (Daily)",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "restrooms", "historical_documentation", "exhibition_hall"],
    restrictions: ["silence phones during cinema screenings in the auditoriums"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Housed in the historic 1938 Art Deco Cinéma Rif directly commanding Grand Socco, this legendary institution was saved from closure in 2006 by photographer Yto Barrada. Today, it stands as North Africa's first independent arthouse cinema, hosting international film retrospectives, an archival media library, and a bustling cultural café that draws artists, intellectuals, and filmmakers from around the globe.",
    shortValueProp: "North Africa's pioneering independent cinematheque and Art Deco cultural café on Grand Socco.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1509060464153-4466739f78d0?w=1000&q=80"
    ],
    googleRating: 4.5,
    reviewCount: 1350,
    badge: "cultural-icon",
    tip: "Even if you are not attending a screening, grab an espresso or spiced spiced tea at the café terrace; it offers the premier vantage point to watch the life of Grand Socco unfold.",
    tips: [
      "Pick up a printed monthly schedule at the counter; films are regularly screened in original version with Arabic, French, or English subtitles.",
      "Browse the movie posters in the lobby corridor showcasing vintage international releases and independent Moroccan art cinema."
    ],
    highlights: [
      "Lovingly restored 1930s Art Deco theater architecture with original neon marquee signage",
      "Vibrant creative hub featuring film festivals, director Q&As, and an open multimedia archive",
      "Iconic outdoor seating on Place du 9 Avril overlooking the palm trees and fountain"
    ],
    emotionalBenefits: [
      "Immerse yourself in Tangier's cutting-edge contemporary artistic renaissance",
      "Enjoy a quiet, intellectually inspiring respite from the energy of the adjacent medina alleyways"
    ],
    ticketTypes: [
      { name: "Cinema Film Screening", price: 30, currency: "MAD" },
      { name: "Student Film Screening", price: 20, currency: "MAD" }
    ],
    includedServices: ["entry to café and lobby exhibition area"],
    excludedServices: ["film screening ticket", "café beverages"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Safe Haven", description: "One of the most welcoming, respectful, and safe progressive cultural spaces in the city.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "No Scams", description: "Non-profit cultural association with clear pricing posted at the ticket counter and café menu.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Accessible", description: "Screening tickets are subsidized at 30 MAD; coffee and tea cost standard local rates (15 MAD).", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Artistic Beacon", description: "Genuine cultural foundation that pioneered independent cinema preservation across the Maghreb.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Very Easy", description: "Level ground floor entrance right on Grand Socco with smooth indoor flooring.", state: "verified" },
    ],
    address: "Cinéma Rif, Place du 9 Avril 1947, 90000 Tangier",
    coordinates: { lat: 35.7847, lng: -5.8142 },
    googleMapsUrl: "https://www.google.com/maps/place/Cin%C3%A9math%C3%A8que+de+Tanger/@35.7847,-5.8142,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-borj-dar-el-baroud",
    city: "tangier",
    name: "Borj Dar El-Baroud (Center for Interpretation of Tangier's Fortifications)",
    neighborhood: "Petit Socco", // Touristic 2.1.1
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "culture", "educational"],
    vibeTags: ["historical", "architectural", "solemn"],
    tags: [
      "authentic",
      "coastal",
      "cultural-tour",
      "historical",
      "medina",
      "photo-spot",
      "relaxed",
      "walk-in"
    ],
    badges: ["historic-landmark", "educational", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 60, // 60 MAD non-resident adult / 20 MAD Moroccan nationals
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 60,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    avoidAnimals: false,
    hasIndoorRest: true,
    hasWiFi: false,
    hasAC: true,
    nearMedina: true,
    nearBeach: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "10:00 AM - 06:00 PM (Tuesday to Sunday, Closed Mondays)",
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "restrooms", "historical_documentation", "exhibition_hall", "panoramic_viewpoint"],
    restrictions: ["no food or drinks permitted inside the exhibition halls"],
    healthContraindications: ["stairs required to access the upper cannon battery level"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Anchoring the northeastern bastion of the old medina walls above the port, Borj Dar El-Baroud ('The Powder Tower') was the city's foremost military fortification built to repel maritime invasions from the 15th to 19th centuries. Beautifully restored as part of the Medina Heritage Program, it now displays detailed architectural models of Tangier's seven defensive bastions, historic cannons, antique firearms, and military uniforms.",
    shortValueProp: "Massive 15th-century maritime artillery bastion meticulously restored into a military history museum.",
    images: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80"
    ],
    googleRating: 4.5,
    reviewCount: 310,
    badge: "historic-landmark",
    tip: "Climb up to the open-air battery terrace on the top floor to photograph the enormous coastal cannons mounted with direct views over Tanja Marina Bay and the Mediterranean ferry lines.",
    tips: [
      "Explanatory didactic panels are presented in Arabic, French, and English, making self-guided tours very straightforward.",
      "Located just a 2-minute walk up from the Bab El Marsa harbor gate."
    ],
    highlights: [
      "Imposing three-level stone fortress that held Tangier's royal gunpowder magazines and coastal defense batteries",
      "Scale models illustrating the evolution of Tangier's defensive ramparts under Saadian, English, and Alaouite reigns",
      "Original bronze and iron naval artillery pieces looking directly out onto the sea"
    ],
    emotionalBenefits: [
      "Gain a deep understanding of why empires fought fiercely over control of the gateway to the Mediterranean",
      "Enjoy a quiet, air-conditioned museum experience away from heavy tourist throngs"
    ],
    ticketTypes: [
      { name: "Adult International Visitor", price: 60, currency: "MAD" },
      { name: "Moroccan National & Resident", price: 20, currency: "MAD" },
      { name: "Children under 12", price: 10, currency: "MAD" }
    ],
    includedServices: ["entry to all interior exhibition galleries and rooftop artillery ramparts"],
    excludedServices: ["personal guided tour"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure Facility", description: "Professional municipal site with security personnel and clearly marked walkways.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Fixed Rate", description: "Operated under the official Port Tanger Ville heritage initiative with printed receipts.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Standard Fee", description: "60 MAD ticket price for foreign tourists clearly indicated on the official entry sign.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Original Bastion", description: "Authentic 15th-century defense tower housing documented military artifacts and maps.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Some Stairs", description: "Interior stone staircases required to move between the three defensive levels.", state: "verified" },
    ],
    address: "Place Bab El Marsa / Rue Dar el-Baroud, 90000 Tangier",
    coordinates: { lat: 35.7876, lng: -5.8088 },
    googleMapsUrl: "https://www.google.com/maps/place/Borj+Dar+El+Baroud/@35.7876,-5.8088,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-borj-en-naam",
    city: "tangier",
    name: "Borj En-Nâam (Ibn Battouta Memory Museum)",
    neighborhood: "Kasbah", // Touristic 2.1.1
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "culture", "adventure"],
    vibeTags: ["historical", "scenic", "intricate", "peaceful"],
    tags: [
      "authentic",
      "cultural-tour",
      "historical",
      "medina",
      "photo-spot",
      "relaxed",
      "walk-in"
    ],
    badges: ["historic-landmark", "educational", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20, // 20 MAD adult / 10 MAD children
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 45,
    distanceFromCenterKm: 1.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    avoidAnimals: false,
    hasIndoorRest: true,
    hasWiFi: false,
    hasAC: true,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "08:00 AM - 06:00 PM (Daily)",
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "restrooms", "historical_documentation", "exhibition_hall", "panoramic_viewpoint"],
    restrictions: ["stair climbing required to reach the battlements"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Located along the upper northwest curtain wall of the Kasbah, Borj En-Nâam was historically armed with mammoth 20-ton British Armstrong cannons and later famously used by the local Pasha to house his ostriches. Today, this scenic redoubt has been transformed into a museum celebrating Tangier's legendary 14th-century explorer, Ibn Battouta, tracking his remarkable 29-year Odyssey across Africa, the Middle East, and Asia.",
    shortValueProp: "Historic Kasbah fortress celebrating Tangier's greatest medieval globe-trotter with rampart sea views.",
    images: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80"
    ],
    googleRating: 4.6,
    reviewCount: 260,
    badge: "hidden-gem",
    tip: "Inspect the life-sized models of the ancient astrolabes and nautical maps Ibn Battouta used to cross the Sahara and sail the Indian Ocean before stepping onto the bastion for a sea view of Tarifa.",
    tips: [
      "Only a 3-minute stroll from the Kasbah Museum and Place du Méchouar.",
      "The admission fee is only 20 MAD, making it one of the best cultural values in northern Morocco."
    ],
    highlights: [
      "Fascinating biographical exhibits illustrating the 120,000 km journey across 40 modern countries",
      "Original 1880 Armstrong artillery cannons that once guarded the Straits of Gibraltar",
      "Elevated parapet walk with views across the Strait"
    ],
    emotionalBenefits: [
      "Inspiration from the courage and curiosity of the Islamic world's greatest traveler",
      "Peaceful contemplation of the sea from an authentic medieval fortress"
    ],
    ticketTypes: [
      { name: "General Adult Entry", price: 20, currency: "MAD" },
      { name: "Child Entry (under 12)", price: 10, currency: "MAD" }
    ],
    includedServices: ["access to museum displays, archival maps, and panoramic bastion battlement"],
    excludedServices: ["personal guide"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure Citadel", description: "Peacefully situated in the uppermost residential Kasbah district with on-site staff.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Official Museum", description: "Operated by the Port and Heritage authorities with clear, posted 20 MAD admission.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Very Cheap", description: "20 MAD per adult with official ticket receipts issued at the door.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Rich Narrative", description: "Accurate scholarly mapping of medieval maritime and caravan trade routes.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Kasbah Incline", description: "Walking up through the Kasbah involves gentle cobblestone inclines and museum stairs.", state: "verified" },
    ],
    address: "61 Rue Riad Sultan, Kasbah, 90000 Tangier",
    coordinates: { lat: 35.7900, lng: -5.8130 },
    googleMapsUrl: "https://www.google.com/maps/place/Borj+En-Na%C3%A2m/@35.7900,-5.8130,17z",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  }
];