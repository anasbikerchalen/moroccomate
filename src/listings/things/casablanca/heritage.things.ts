/**
 * =========================================================================
 * [CASABLANCA] THINGS TO DO — HERITAGE & CULTURE
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

// ══ LISTINGS — HERITAGE & CULTURE ══
export const casablancaHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-hassan-ii-mosque",
    city: "casablanca",
    name: "Hassan II Mosque",
    neighborhood: "Sour Jdid (Hassan II Mosque)",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer", "photographer", "history"],
    vibeTags: ["architectural", "regal", "solemn", "scenic"],
    tags: [
      "architectural",
      "coastal",
      "cultural-tour",
      "golden-hour",
      "historical",
      "iconic-landmark",
      "photo-spot",
      "sunset-view",
      "walk-in",
      "waterfront"
    ],
    badges: ["architectural-gem", "cultural-icon", "must-see", "sunset-spot"],
    badge: "top-pick",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 2,
    pricePerPerson: 130,
    entryPrice: 130,
    durationMinutes: 90,
    distanceFromCenterKm: 3.5,
    transportMode: "taxi",
    transportModes: ["taxi", "drive", "walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_courtyard", "ground_floor_access", "step_free_paved_paths", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Esplanade open 24/7; Guided tours for non-Muslims: Saturday-Thursday 09:00, 10:00, 11:00, 12:00, 15:00, 16:00; Friday 09:00, 10:00, 15:00, 16:00 (hours adjust during Ramadan)",
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: [
      "ablution_facilities_worshippers",
      "audioguide_service",
      "fountains",
      "information_desk",
      "mosque_prayer_room",
      "panoramic_viewpoint",
      "parking",
      "restrooms",
      "ticket_booth"
    ],
    restrictions: ["Shoes must be removed before entering the prayer hall (carry bags provided); non-Muslims may only enter with an official guided tour"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Commissioned by King Hassan II and inaugurated in 1993, this masterpiece of Moroccan-Andalusian craftsmanship rises directly over the Atlantic Ocean on a rocky promontory. Featuring a 210-meter minaret with a 30-km laser directed toward Mecca, a retractable roof, hand-carved cedar, polished marble, and zellij tilework by over 12,500 master artisans, it is one of the only active mosques in Morocco open to non-Muslim visitors.",
    shortValueProp: "The monumental oceanfront mosque with a 210m minaret and open guided interior tours",
    googleRating: 4.7,
    reviewCount: 32000,
    googleReviewCount: 32000,
    tip: "Arrive 30 minutes before your scheduled tour time to purchase tickets at the underground ticket pavilion, then stay on the marble esplanade for sunset over the ocean.",
    tips: [
      "Modest attire covering knees and shoulders is strictly required for interior access.",
      "Shoes are removed at the entrance; visitors are provided a carry bag to take their footwear along.",
      "The marble esplanade is accessible free of charge throughout the day and evening."
    ],
    highlights: [
      "210-meter minaret equipped with a green laser pointing to Mecca",
      "Prayer hall holding 25,000 worshippers with a motorized retractable titanium roof",
      "Subterranean ablution halls featuring 41 marble fountain basins carved as lotus flowers"
    ],
    emotionalBenefits: ["Awe-inspired", "Spiritual", "Scenic"],
    bestTimeToVisit: "Morning for interior tours (09:00 or 10:00) and golden hour for the outdoor esplanade",
    typicalWaitTimeMinutes: 15,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Standard Guided Tour (Adult)",
        price: 130,
        currency: "MAD"
      },
      {
        name: "Student / Moroccan Resident",
        price: 65,
        currency: "MAD"
      },
      {
        name: "Esplanade & Exterior Viewing",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Children under 12 enter free; Moroccan residents and students receive a 50% discount",
    includedServices: ["Multilingual official guide", "Shoe bag", "Ablution hall and prayer hall access"],
    excludedServices: ["Museum annex admission (separate 30 MAD ticket)"],
    hiddenCostsInfo: "None",
    address: "Boulevard Sidi Mohammed Ben Abdellah, Sour Jdid, Casablanca 20000",
    coordinates: { lat: 33.6086, lng: -7.6328 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=33.6086,-7.6328",
    parkingInfo: "Large underground paid parking garage directly beneath the esplanade (15-20 MAD)",
    publicTransportInfo: "Short petit taxi ride from Casa-Port train station or central hotels (15-20 MAD)",
    dressCode: "Modest dress required (shoulders and knees covered; headscarf optional for women)",
    equipmentNeeded: ["Camera (interior flash and tripods prohibited)"],
    fitnessLevel: "Relaxed (Expansive walking over flat marble surfaces)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Well-secured site with tourist police and security personnel",
    languages: ["Arabic (Darija)", "French", "English", "Spanish", "German", "Italian"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Casablanca Old Medina",
        type: "visit",
        id: "casablanca-old-medina",
        distanceKm: 2.1
      }
    ],
    storyTitle: "The Throne Over the Waters",
    history: "Inspired by the Quranic verse stating that the throne of God was built upon the water, French architect Michel Pinseau designed the complex to extend past the shoreline into the Atlantic. Built over six years by Bouygues and thousands of maâllems (master artisans), it stands as Morocco's greatest modern architectural achievement.",
    culturalImportance: "The preeminent national religious and architectural symbol of contemporary Morocco.",
    localLegend: "The sound of Atlantic waves breaking beneath the glass floor in the royal prayer section serves as a continuous natural accompaniment to recitations of the Quran.",
    funFact: "The mosque can accommodate a total of 105,000 worshippers: 25,000 inside the main prayer hall and 80,000 on the vast exterior esplanade.",
    officialWebsite: "https://www.fmh2.ma",
    ticketWebsite: "",
    faq: [
      {
        q: "Can non-Muslims enter the mosque without a tour?",
        a: "No, non-Muslim visitors may only enter the prayer hall as part of the scheduled official guided tours."
      }
    ],
    contactPhone: "+212522482886"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-old-medina",
    city: "casablanca",
    name: "Casablanca Old Medina",
    neighborhood: "Ancienne Médina",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["culture", "nomad", "first-timer"],
    vibeTags: ["authentic", "sensory", "historical"],
    tags: ["active", "authentic", "cultural-tour", "historical", "local-life", "medina", "shopping", "walk-in"],
    badges: ["cultural-immersion", "market-experience"],
    badge: "historical",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 1.0,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 3,
      scamRisk: 2,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24 hours daily (commerce active 09:30 - 20:00)",
    paymentMethods: ["cash_mad"],
    amenities: ["food_stalls", "street_parking", "walking_paths"],
    restrictions: ["Keep personal bags secure in crowded shopping alleyways"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Casablanca's historic walled quarter rebuilt after the devastating 1755 Lisbon earthquake by Sultan Sidi Mohammed ben Abdallah. Enclosed by stone ramparts, it features narrow residential lanes, traditional bakeries, leather workshops, and a bustling local souk untouched by heavy tourism.",
    shortValueProp: "Authentic historic walled medina offering an unvarnished glimpse of local Casawi life",
    googleRating: 4.1,
    reviewCount: 2450,
    googleReviewCount: 2450,
    tip: "Enter through the historic Bab El Marsa near the clock tower for the most picturesque starting point.",
    tips: [
      "Carry small cash denominations in MAD; market merchants do not take cards.",
      "Unlike the heavily touristified medinas of Marrakech or Fes, this is primarily a functioning working-class residential neighborhood."
    ],
    highlights: [
      "18th-century defensive stone ramparts and the historic Sqala bastion",
      "Bab El Marsa gateway and the 1908 colonial clock tower",
      "Narrow lanes with local spice stalls, produce stands, and leather cobblers"
    ],
    emotionalBenefits: ["Authentic", "Vibrant", "Sensory"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
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
    address: "Ancienne Médina (Near Place des Nations Unies), Casablanca 20000",
    coordinates: { lat: 33.6025, lng: -7.6186 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=33.6025,-7.6186",
    parkingInfo: "Paid parking lot at Place des Nations Unies and Casa-Port railway station",
    publicTransportInfo: "Immediate access from the 'Nations Unies' tramway station on Line T1",
    dressCode: "Casual respectful attire",
    equipmentNeeded: ["Cash in MAD", "Comfortable walking shoes"],
    fitnessLevel: "Moderate (Walking through uneven narrow streets)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Stay attentive in crowded lanes; avoid quiet unlit alleys late at night",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Marché Central",
        type: "visit",
        id: "casablanca-marche-central",
        distanceKm: 0.9
      }
    ],
    storyTitle: "The Fortress that Rebuilt Anfa",
    history: "Following the destruction of medieval Anfa in 1755, Sultan Mohammed ben Abdallah built defensive ramparts and a fortified seawall (*La Sqala*) in the 1770s to establish 'Dar al-Bayda' as a secure Atlantic trading port.",
    culturalImportance: "The original historic cradle from which 20th-century Casablanca expanded into Morocco's economic capital.",
    localLegend: "The cannon ramparts of La Sqala were designed to repel Portuguese and Spanish corsairs attempting coastal landings.",
    funFact: "The prominent clock tower outside the medina gate was built in 1908 by French military commander Dessigny before the official protectorate began.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is Casablanca's Old Medina safe to explore independently?",
        a: "Yes, the main commercial thoroughfares are active and welcoming during daytime; basic situational awareness is all that is required."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-mohammed-v-square",
    city: "casablanca",
    name: "Place Mohammed V",
    neighborhood: "Centre-Ville",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer", "history"],
    vibeTags: ["architectural", "historical", "regal"],
    tags: ["architectural", "historical", "iconic-landmark", "photo-spot", "relaxed", "urban", "walk-in"],
    badges: ["architectural-landmark", "historic-landmark"],
    badge: "popular",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "step_free_paved_paths", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24 hours daily (illuminated musical fountain shows in the evening)",
    paymentMethods: ["not available"],
    amenities: ["fountains", "perimeter_benches", "street_parking", "walking_paths"],
    restrictions: ["Administrative government buildings around the plaza restrict interior visitor access"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "The monumental administrative square designed in the 1920s under French urban planner Henri Prost. Ringed by landmark French Mauresque and Art Deco monuments—including the Wilaya (City Hall) with its 50m clock tower, the Palais de Justice, the Grand Théâtre de Casablanca, and the musical fountain—it forms the civic nucleus of modern Casablanca.",
    shortValueProp: "The monumental central forum framed by 1920s Neo-Mauresque and Art Deco civic palaces",
    googleRating: 4.3,
    reviewCount: 1850,
    googleReviewCount: 1850,
    tip: "Visit around 19:30 to see the grand illuminated facades and watch local families congregate around the musical dancing fountain.",
    tips: [
      "The square is flanked by the newly constructed Grand Théâtre de Casablanca designed by Christian de Portzamparc.",
      "The central fountain terrace is home to hundreds of tame pigeons, earning it the local nickname 'Pigeon Square'."
    ],
    highlights: [
      "La Wilaya (Hôtel de Ville) featuring its 50-meter square clock tower",
      "Palais de Justice showcasing classic Moroccan carved plaster and columned portals",
      "Grand modern dancing fountain synchronized to music and colored lighting"
    ],
    emotionalBenefits: ["Grand", "Historic", "Peaceful"],
    bestTimeToVisit: "Late afternoon through early evening",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Public Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Public square access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Place Mohammed V, Centre-Ville, Casablanca 20000",
    coordinates: { lat: 33.5908, lng: -7.6208 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=33.5908,-7.6208",
    parkingInfo: "Large underground parking garage located directly beneath Place Mohammed V",
    publicTransportInfo: "Tramway Line T1 station 'Place Mohammed V' directly at the plaza",
    dressCode: "Casual",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed (Level paved esplanade)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Heavily secured and patrolled civic zone",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Église du Sacré-Cœur",
        type: "visit",
        id: "casablanca-sacree-coeur",
        distanceKm: 0.4
      },
      {
        name: "Marché Central",
        type: "visit",
        id: "casablanca-marche-central",
        distanceKm: 0.8
      }
    ],
    storyTitle: "Prost's Neo-Mauresque Masterpiece",
    history: "Laid out during the French Protectorate under Resident-General Lyautey and architect Henri Prost, the plaza demonstrated the 'Neo-Mauresque' architectural policy—combining modern reinforced concrete with Islamic arches, zellij, and green-glazed tiles.",
    culturalImportance: "The civic epicenter of Casablanca where national independence celebrations and public gatherings have taken place for a century.",
    localLegend: "French architect Marius Boyer positioned the Wilaya's tower clock to be visible from ships approaching the port.",
    funFact: "During the 1920s, the plaza was named 'Place Administrative' before being renamed after the return of Sultan Mohammed V from exile.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can visitors go inside the Wilaya clock tower?",
        a: "Interior tower visits are generally closed to the general public outside of organized European Heritage Day tours."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-habous-quartier",
    city: "casablanca",
    name: "Quartier Habous (New Medina)",
    neighborhood: "Derb Sultan",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer", "photographer"],
    vibeTags: ["architectural", "peaceful", "authentic"],
    tags: [
      "architectural",
      "authentic",
      "cultural-tour",
      "historical",
      "medina",
      "photo-spot",
      "relaxed",
      "shopping",
      "walk-in"
    ],
    badges: ["architectural-gem", "artisan-village", "cultural-immersion", "must-see"],
    badge: "essential",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 2.8,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_walkways", "ground_floor_access", "shaded_courtyards"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open daily 24 hours (shops and pastry bakeries open 09:00 - 19:30)",
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "cafe", "shaded_courtyards", "street_parking", "walking_paths"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Constructed in the 1920s by French architects Albert Laprade and Auguste Cadet for the religious Habous administration, this planned 'New Medina' marries traditional Moorish urban form with modern Parisian garden-city concepts. Shaded stone arcades, pristine courtyards, artisan leather stalls, the famous Olive Souk, and heritage pastry houses like Pâtisserie Bennis make it one of Morocco's most delightful cultural quarters.",
    shortValueProp: "The elegant 1920s Neo-Moorish New Medina famed for stone arcades, artisans, and pastries",
    googleRating: 4.5,
    reviewCount: 1650,
    googleReviewCount: 1650,
    tip: "Stop at Pâtisserie Bennis Habous (operating since 1930) for authentic almond cornets de gazelle, then walk through the adjoining open-air Olive Market.",
    tips: [
      "The Habous quarter is unhurried and hassle-free compared to older imperial medinas.",
      "Most artisan shops feature fixed or reasonably flexible prices for high-quality leather and brass."
    ],
    highlights: [
      "Graceful horseshoe arches and stone pedestrian arcades",
      "Traditional Souk des Olives offering dozens of cured Moroccan olive varieties",
      "Historic Pâtisserie Bennis Habous and traditional Arabic bookstores"
    ],
    emotionalBenefits: ["Aesthetic", "Peaceful", "Authentic"],
    bestTimeToVisit: "Morning or mid-afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Public Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Public neighborhood access"],
    excludedServices: ["Bakery purchases", "Artisan crafts"],
    hiddenCostsInfo: "None",
    address: "Quartier Habous, Derb Sultan, Casablanca 20490",
    coordinates: { lat: 33.5682, lng: -7.6045 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=33.5682,-7.6045",
    parkingInfo: "Street parking available around Boulevard Victor Hugo and Place de la Grande Mosquée",
    publicTransportInfo: "10-minute petit taxi ride from city center or tramway to Derb Sultan station",
    dressCode: "Casual respectful attire",
    equipmentNeeded: ["Cash in MAD"],
    fitnessLevel: "Relaxed (Flat, paved, shaded walkways)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Extremely calm, safe, and family-friendly district",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Mahkama du Pacha",
        type: "visit",
        id: "casablanca-mahkama-du-pacha",
        distanceKm: 0.1
      }
    ],
    storyTitle: "The French-Moorish Utopia",
    history: "Faced with rapid rural migration to Casablanca in the 1910s, Sultan Moulay Youssef donated royal lands to the Habous foundation. Architects Laprade and Cadet meticulously studied the medinas of Fes and Marrakech to recreate narrow streets, courtyards, and communal ovens under modern sanitary standards.",
    culturalImportance: "Celebrated internationally as one of the most successful colonial urban experiments blending vernacular architecture with modern urban planning.",
    localLegend: "Sultan Moulay Youssef insisted that every residential courtyard have at least one orange tree to provide shade and fragrance to the inhabitants.",
    funFact: "Habous has remained Morocco's primary national publishing hub for religious, Arabic literature, and law books for nearly a century.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are the pastry shops in Habous cash only?",
        a: "Yes, historic bakeries like Pâtisserie Bennis accept only cash in Moroccan Dirhams."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-mahkama-du-pacha",
    city: "casablanca",
    name: "Mahkama du Pacha (Palais du Méchouar)",
    neighborhood: "Derb Sultan",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history"],
    vibeTags: ["architectural", "intricate", "ornate", "serene"],
    tags: ["architectural", "authentic", "cultural-tour", "historical", "photo-spot"],
    badges: ["architectural-gem", "hidden-gem", "historic-landmark"],
    badge: "architectural-gem",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 2.8,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
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
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
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
    openingHours: "Monday to Friday 09:00 AM - 04:00 PM (access subject to ongoing administrative proceedings)",
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "shaded_courtyards"],
    restrictions: ["Active government administrative facility; an on-site official guide or small tip (20-30 MAD) is typically required for entry"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Erected between 1941 and 1952 by French architect Auguste Cadet, the Mahkama du Pacha served as the courthouse, municipal jail, and reception palace for the Pasha of Casablanca. Often hailed as Morocco's modern Alhambra, the palace features over 60 sumptuous rooms, open courtyards with trickling fountains, hand-chiseled stuccowork, polychrome zellij mosaics, and carved Atlas cedar ceilings.",
    shortValueProp: "The 'Modern Alhambra' of Casablanca boasting breathtaking Hispano-Moorish courtyards",
    googleRating: 4.5,
    reviewCount: 920,
    googleReviewCount: 920,
    tip: "Because it functions as an active regional administrative building, hire an authorized local guide at the gate (20–30 MAD) to gain entry to the interior courtyards.",
    tips: [
      "Photography of the architecture and empty courtyards is permitted; avoid photographing active judicial personnel.",
      "The central patio with its Moorish fountain offers some of the most striking architectural photography in the city."
    ],
    highlights: [
      "Over 60 richly decorated salons showcasing master Moroccan stone and cedar carving",
      "Sunlit Andalusian courtyards reminiscent of Granada's Alhambra",
      "Exquisite geometric polychrome zellij and hand-chiseled calligraphic stucco"
    ],
    emotionalBenefits: ["Awe-inspired", "Aesthetic", "Regal"],
    bestTimeToVisit: "Weekday mornings (09:30 - 11:30)",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Building Access (Informal Guide Tip)",
        price: 25,
        currency: "MAD"
      }
    ],
    discountsInfo: "Official municipal entry is technically free; customary tip to official site guardian",
    includedServices: ["Interior palace courtyard access"],
    excludedServices: ["Active courtroom offices"],
    hiddenCostsInfo: "Modest tip to on-site guide (20-30 MAD)",
    address: "Boulevard Victor Hugo, Quartier Habous, Derb Sultan, Casablanca 20490",
    coordinates: { lat: 33.5678, lng: -7.6033 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=33.5678,-7.6033",
    parkingInfo: "Street parking on Boulevard Victor Hugo",
    publicTransportInfo: "Taxi from city center (15 MAD) or walk 2 minutes from Habous market square",
    dressCode: "Smart casual / modest attire",
    equipmentNeeded: ["Camera", "Cash in MAD for guide tip"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Secure administrative building",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Quartier Habous",
        type: "visit",
        id: "casablanca-habous-quartier",
        distanceKm: 0.1
      }
    ],
    storyTitle: "Casablanca's Alhambra",
    history: "Begun during World War II under strict material rationing, the building was constructed solely from local Moroccan stone, brick, cedar, and tiles without modern steel reinforcements, showcasing the timeless structural capabilities of Moroccan artisans.",
    culturalImportance: "Regarded as the pinnacle of 20th-century Neo-Moorish civic architecture in North Africa.",
    localLegend: "Architect Auguste Cadet personally interviewed dozens of elder Fassi master craftsmen to ensure that no Andalusian ornamental motif was repeated identically in any two salons.",
    funFact: "The complex still houses the regional council headquarters of Casablanca-Settat.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I enter the Mahkama du Pacha alone without a guide?",
        a: "Due to active administrative offices, guards at the door will usually only permit entry if accompanied by an on-site authorized guide."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-marche-central",
    city: "casablanca",
    name: "Marché Central",
    neighborhood: "Centre-Ville",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["foodie", "nomad", "culture"],
    vibeTags: ["authentic", "sensory", "vibrant"],
    tags: ["active", "authentic", "cultural-tour", "foodie", "local-life", "market", "morning", "walk-in"],
    badges: ["foodie-paradise", "market-experience"],
    badge: "popular",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "ground_floor_access", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 3,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "07:30 AM - 03:00 PM (Daily; seafood grills active 11:30 - 15:00)",
    paymentMethods: ["cash_mad"],
    amenities: ["food_stalls", "fresh_juice_bars", "street_parking", "traditional_restaurant", "walking_paths"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Inaugurated in 1917 on Boulevard Mohammed V, this historic covered municipal market is framed by an iconic Neo-Mauresque keyhole gateway. Celebrated for its bustling center rotunda with fresh Atlantic fish, wild oysters from Dakhla, spice pyramids, and open-air seafood grills where diners can have their freshly purchased catch cooked on the spot.",
    shortValueProp: "Historic 1917 Art Deco food market renowned for fresh Atlantic seafood and cook-to-order grills",
    googleRating: 4.2,
    reviewCount: 980,
    googleReviewCount: 980,
    tip: "Buy your fresh sea bream, calamari, or prawns directly from a fishmonger inside the pavilion, then take them to the perimeter grill stalls to have them cooked for a modest prep fee.",
    tips: [
      "Arrive around midday (12:00 - 13:30) for lunch when the fish grillers fire up their planchas.",
      "Cash in Moroccan Dirhams is necessary for both seafood purchases and grilling service."
    ],
    highlights: [
      "1917 Neo-Mauresque entrance arch and open-air colonial pavilion",
      "Pristine displays of Atlantic sea bream, red mullet, lobster, and oysters",
      "Cook-your-catch grill eateries serving fresh fried fish with tomato chermoula"
    ],
    emotionalBenefits: ["Sensory", "Authentic", "Vibrant"],
    bestTimeToVisit: "11:00 AM - 01:30 PM for the freshest market atmosphere and lunch",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Market Entry",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Market access"],
    excludedServices: ["Food and beverage purchases"],
    hiddenCostsInfo: "Grilling fee (~20-30 MAD per kilo) if cooking bought seafood at stalls",
    address: "Boulevard Mohammed V (near Rue Allal Ben Abdellah), Centre-Ville, Casablanca 20000",
    coordinates: { lat: 33.5938, lng: -7.6142 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=33.5938,-7.6142",
    parkingInfo: "Street parking and underground parking at Casa-Port / Boulevard Mohammed V",
    publicTransportInfo: "Immediately accessed at 'Marché Central' tramway station on Line T1",
    dressCode: "Casual",
    equipmentNeeded: ["Cash in MAD"],
    fitnessLevel: "Relaxed (Flat covered market stalls)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Wet surfaces around the central fish stands; walk carefully",
    languages: ["Arabic (Darija)", "French", "Spanish"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Art Deco Architecture Walk",
        type: "visit",
        id: "casablanca-art-deco-walk",
        distanceKm: 0.1
      },
      {
        name: "Place Mohammed V",
        type: "visit",
        id: "casablanca-mohammed-v-square",
        distanceKm: 0.8
      }
    ],
    storyTitle: "The Culinary Hearth of the Colonial City",
    history: "Designed by French architect Pierre Bousquet and opened during World War I, the Marché Central anchored the European commercial avenue of Boulevard de la Gare (now Boulevard Mohammed V). It quickly grew into the city's premier gourmet and wholesale market.",
    culturalImportance: "A beloved gathering place bridging Moroccan and Mediterranean food culture in the center of the metropolis.",
    localLegend: "Renowned French and international chefs visiting Casablanca have sourced Atlantic crustaceans from this market for over a century.",
    funFact: "The entrance gate was modeled directly after Moroccan imperial city gates to symbolize the blending of indigenous architecture with modern municipal amenities.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "How does the 'cook your catch' system work at Marché Central?",
        a: "Purchase your choice of raw seafood from the fish stands, then carry it to any of the surrounding grill restaurants; they will clean, season, grill, and serve it with bread and salad for a small service fee."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-sacree-coeur",
    city: "casablanca",
    name: "Église du Sacré-Cœur (Cathedral of Casablanca)",
    neighborhood: "Centre-Ville",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history"],
    vibeTags: ["architectural", "historical", "serene"],
    tags: ["architectural", "cultural-tour", "historical", "photo-spot", "relaxed", "walk-in"],
    badges: ["architectural-landmark", "historic-landmark"],
    badge: "historical",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.6,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "level_entry_doorway", "wide_main_corridors"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
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
    openingHours: "09:30 AM - 06:00 PM (Open daily; hours may adjust during temporary art exhibitions)",
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "perimeter_benches", "street_parking", "walking_paths"],
    restrictions: ["Deconsecrated building operated as a cultural center; maintain quiet decorum"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Designed in 1930 by French architect Paul Tournon (recipient of the Prix de Rome), this monumental deconsecrated church is a triumph of Neo-Gothic and Art Deco reinforced-concrete architecture. Overlooking the palm trees of Parc de la Ligue Arabe, it features striking soaring arches, geometric pierced concrete screens, and magnificent stained-glass windows, now serving as a premier municipal cultural and art exhibition pavilion.",
    shortValueProp: "Monumental 1930 Art Deco and Gothic concrete cathedral now reborn as a cultural arts center",
    googleRating: 4.3,
    reviewCount: 720,
    googleReviewCount: 720,
    tip: "Walk up the interior gallery when open for panoramic views across the nave and toward the palm allées of Parc de la Ligue Arabe.",
    tips: [
      "Following an extensive multi-year restoration, the cathedral reopened as an official cultural and contemporary art space.",
      "Pair your visit with a peaceful stroll through the adjoining palm gardens of Parc de la Ligue Arabe."
    ],
    highlights: [
      "Monumental white twin towers and soaring Art Deco concrete arches",
      "Geometric concrete claustra screens and Art Deco stained glass",
      "Serene cultural venue set along the perimeter of Parc de la Ligue Arabe"
    ],
    emotionalBenefits: ["Aesthetic", "Historic", "Peaceful"],
    bestTimeToVisit: "Morning or mid-afternoon on bright sunny days",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "General Cultural Entry",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access (special events may charge separate admission)",
    includedServices: ["Nave access", "Exhibition viewing"],
    excludedServices: ["Special evening performance tickets"],
    hiddenCostsInfo: "None",
    address: "Boulevard Rachidi (facing Parc de la Ligue Arabe), Centre-Ville, Casablanca 20070",
    coordinates: { lat: 33.5898, lng: -7.6252 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=33.5898,-7.6252",
    parkingInfo: "Street parking along Boulevard Rachidi and adjoining residential lanes",
    publicTransportInfo: "10-minute walk from Place Mohammed V or tramway station 'Place Mohammed V'",
    dressCode: "Casual respectful attire",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Well-maintained public cultural property",
    languages: ["French", "Arabic (Darija)", "English"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Place Mohammed V",
        type: "visit",
        id: "casablanca-mohammed-v-square",
        distanceKm: 0.4
      }
    ],
    storyTitle: "The White Cathedral of Concrete",
    history: "Constructed during the interwar period when Casablanca was experimenting with cutting-edge reinforced concrete engineering, the church served the city's European Catholic population until deconsecration in the 1970s. It was subsequently designated as a protected national architectural monument.",
    culturalImportance: "A premier example of early 20th-century religious Art Deco architecture and Casablanca's commitment to heritage adaptive reuse.",
    localLegend: "Architect Paul Tournon intentionally integrated Moroccan minaret proportions into the vertical profiles of the cathedral's twin bell towers.",
    funFact: "Although popularly referred to as a cathedral, the building was historically a parish sanctuary, as Casablanca's official bishopric was seated in Rabat.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the cathedral still an active church holding religious services?",
        a: "No, it was deconsecrated decades ago and operates exclusively as a municipal cultural center, exhibition hall, and architectural landmark."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-villa-des-arts",
    city: "casablanca",
    name: "Villa des Arts de Casablanca",
    neighborhood: "Maârif",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture"],
    vibeTags: ["artistic", "architectural", "peaceful", "serene"],
    tags: ["architectural", "authentic", "cultural-tour", "culture", "modern", "photo-spot", "relaxed", "walk-in"],
    badges: ["architectural-gem", "cultural-immersion", "educational"],
    badge: "essential",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 2.0,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "level_entry_doorway", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
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
    openingHours: "Tuesday to Sunday 10:00 AM - 07:00 PM (Closed Mondays)",
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "garden_seating_access", "information_desk", "restrooms", "shaded_benches"],
    restrictions: ["No flash photography or video recording inside temporary art exhibition galleries"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Built in 1934 in the pure Art Deco style on Boulevard Brahim Roudani, this restored historical residence is managed by the non-profit Fondation Al Mada. Serving as one of Casablanca's most important contemporary art spaces, it exhibits premier works by master modern Moroccan painters (Farid Belkahia, Chaïbia Talal, Jilali Gharbaoui, Mohamed Chebaa) alongside rotating international art and photography exhibitions.",
    shortValueProp: "Casablanca's flagship contemporary art museum housed in an elegant 1934 Art Deco villa",
    googleRating: 4.4,
    reviewCount: 650,
    googleReviewCount: 650,
    tip: "Take time to relax in the tranquil shaded rear sculpture garden after exploring the rotating second-floor art installations.",
    tips: [
      "Admission to the galleries and garden is completely free to the public.",
      "Check their seasonal calendar for poetry readings, artist vernissages, and weekend creative workshops."
    ],
    highlights: [
      "Preserved 1934 Art Deco villa architecture with geometric wrought iron and curved balconies",
      "Permanent collection highlighting the pioneering generation of Moroccan modern art",
      "Serene landscaped courtyard and sculpture garden"
    ],
    emotionalBenefits: ["Artistic", "Inspired", "Tranquil"],
    bestTimeToVisit: "Weekday mornings or mid-afternoons for a quiet contemplative visit",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Museum Admission",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public admission year-round",
    includedServices: ["Gallery access", "Sculpture garden access"],
    excludedServices: ["Ticketed cultural concerts"],
    hiddenCostsInfo: "None",
    address: "30 Boulevard Brahim Roudani (at corner of Bd Zerktouni), Maârif, Casablanca 20250",
    coordinates: { lat: 33.5855, lng: -7.6322 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=33.5855,-7.6322",
    parkingInfo: "Street parking available along Boulevard Brahim Roudani and Rue du Cdt Provost",
    publicTransportInfo: "5-minute petit taxi ride from central hotels or tramway to Boulevard Zerktouni",
    dressCode: "Smart casual",
    equipmentNeeded: ["Camera (no flash)"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Peaceful cultural museum with on-site security",
    languages: ["French", "Arabic (Darija)", "English"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Place Mohammed V",
        type: "visit",
        id: "casablanca-mohammed-v-square",
        distanceKm: 1.2
      }
    ],
    storyTitle: "The Sanctuary of Moroccan Modernism",
    history: "Constructed during the 1930s architectural boom as a luxurious private estate, the villa was acquired and restored by the ONA Foundation (now Fondation Al Mada) and opened in 1995 as the first multidisciplinary contemporary arts center in Casablanca.",
    culturalImportance: "Crucial institutional guardian of Morocco's post-independence visual arts revolution.",
    localLegend: "Artists of the 1960s Casablanca Art School originally gathered in neighboring salons to debate breaking away from colonial academic painting.",
    funFact: "The foundation also maintains a sister Villa des Arts in Rabat near the Chellah.",
    officialWebsite: "http://www.fondationalmada.ma",
    ticketWebsite: "",
    faq: [
      {
        q: "Is there an admission fee to enter the Villa des Arts?",
        a: "No, general admission to all permanent collections and temporary exhibitions is completely free."
      }
    ],
    contactPhone: "+212522295087"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-jewish-museum",
    city: "casablanca",
    name: "Museum of Moroccan Judaism (Musée du Judaïsme Marocain)",
    neighborhood: "Maârif",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history", "history-weaver"],
    vibeTags: ["historical", "peaceful", "solemn"],
    tags: ["authentic", "cultural-tour", "historical", "off-the-beaten-path", "relaxed", "walk-in"],
    badges: ["cultural-immersion", "educational", "historic-landmark"],
    badge: "essential",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 1,
    pricePerPerson: 50,
    entryPrice: 50,
    durationMinutes: 60,
    distanceFromCenterKm: 4.8,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "level_entry_doorway", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
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
    openingHours: "Monday to Friday 10:00 AM - 05:00 PM; Sunday 11:00 AM - 03:00 PM (Closed Saturdays for Shabbat)",
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "information_desk", "restrooms", "shaded_courtyards", "street_parking"],
    restrictions: ["Closed on Saturdays in observance of Shabbat and on major Jewish religious holidays"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Founded in 1997 by Moroccan historian Simon Levy and the Foundation of Jewish-Moroccan Cultural Heritage, this unique institution is the only museum dedicated to Jewish history and culture in the Arab world. Housed in a gracious 1948 former Jewish orphanage in the tranquil Oasis residential area, it showcases over 2,000 years of Jewish-Moroccan cohabitation through reconstructed traditional synagogues, Torah scrolls, Hanukkah menorahs, silver jewelry, and traditional Berber Jewish wedding attire.",
    shortValueProp: "The only museum dedicated to Jewish heritage and culture in the Arab world",
    googleRating: 4.5,
    reviewCount: 420,
    googleReviewCount: 420,
    tip: "Engage with the knowledgeable museum docents who provide deeply personal historical context on Morocco's historic Sephardic and Berber Jewish communities.",
    tips: [
      "Carry cash in Moroccan Dirhams (50 MAD) for the entrance fee as credit card processing can be intermittent.",
      "Bring a photo ID or passport, which security personnel may request at the entrance gate."
    ],
    highlights: [
      "Authentic reconstructed 1930s Moroccan synagogue interior with carved wooden bimah",
      "Exquisite Berber-Jewish ceremonial costumes and silver filigree craftsmanship",
      "Historical photographic archive documenting Jewish mellahs across Morocco"
    ],
    emotionalBenefits: ["Educational", "Reflective", "Moving"],
    bestTimeToVisit: "Weekday mornings (10:30 AM - 01:00 PM)",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Standard Museum Admission",
        price: 50,
        currency: "MAD"
      },
      {
        name: "Students",
        price: 25,
        currency: "MAD"
      }
    ],
    discountsInfo: "Discounted admission for students with valid student ID",
    includedServices: ["Self-guided museum access", "Synagogue reconstruction access"],
    excludedServices: ["Private customized guided tours"],
    hiddenCostsInfo: "None",
    address: "81 Rue Chasseur Jules Gros, Oasis (Arrondissement Maârif), Casablanca 20100",
    coordinates: { lat: 33.5574, lng: -7.6322 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=33.5574,-7.6322",
    parkingInfo: "Free street parking along Rue Chasseur Jules Gros",
    publicTransportInfo: "15-minute taxi ride from city center or 5-minute walk from Oasis railway / tram station",
    dressCode: "Respectful casual clothing",
    equipmentNeeded: ["Photo ID / Passport", "Cash in MAD"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Quiet, peaceful residential street with dedicated perimeter security",
    languages: ["Arabic (Darija)", "French", "English", "Hebrew"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Quartier Habous",
        type: "visit",
        id: "casablanca-habous-quartier",
        distanceKm: 3.8
      }
    ],
    storyTitle: "Two Millennia of Shared Brotherhood",
    history: "Moroccan Jews trace their roots in the kingdom over two thousand years to antiquity. Established in 1997 inside the Home d'Enfants Murdock Bengio orphanage, the museum was rededicated in 2016 in a royal ceremony led by King Mohammed VI, reaffirming the Hebrew tributary as an integral component of Moroccan national identity.",
    culturalImportance: "The preeminent institution documenting Judeo-Moroccan coexistence and the constitutionally recognized Hebrew component of Morocco's heritage.",
    localLegend: "Founder Simon Levy spent decades scouring abandoned mountain mellahs in the High Atlas and Anti-Atlas to rescue sacred Torah arks and artisanal tools.",
    funFact: "The museum houses a fully recreated traditional jewelry-making workshop of historic Essaouira silversmith Saul Cohen.",
    officialWebsite: "http://www.jewishmuseumcasa.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the museum open on weekends?",
        a: "It is closed on Saturdays for Shabbat, but opens on Sundays from 11:00 AM to 03:00 PM."
      }
    ],
    contactPhone: "+212522994940"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-notre-dame-de-lourdes",
    city: "casablanca",
    name: "Église Notre-Dame de Lourdes",
    neighborhood: "Mers Sultan",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history"],
    vibeTags: ["architectural", "spiritual", "serene", "colorful"],
    tags: ["architectural", "cultural-tour", "historical", "photo-spot", "relaxed", "walk-in"],
    badges: ["architectural-gem", "hidden-gem"],
    badge: "hidden-gem",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 1.8,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "level_entry_doorway", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
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
    openingHours: "08:30 AM - 12:00 PM & 03:00 PM - 07:00 PM (Daily)",
    paymentMethods: ["not available"],
    amenities: ["street_parking"],
    restrictions: ["Maintain silence during active prayer services; respectful clothing required"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Built in 1954 by architect Achille Dangleterre and engineer Gaston Zimmer, this landmark modernist Roman Catholic church is internationally celebrated for its awe-inspiring glass walls. Encompassing over 800 square meters of vibrant faceted stained glass (*dalle de verre*) crafted by master French artisan Gabriel Loire of Chartres, the interior glows in rich cobalt blues, scarlets, and ambers, accompanied by an open-air replica of the Lourdes Marian grotto.",
    shortValueProp: "Modernist 1950s church featuring 800 square meters of radiant stained glass by Gabriel Loire",
    googleRating: 4.4,
    reviewCount: 880,
    googleReviewCount: 880,
    tip: "Step inside on a bright sunny afternoon when natural sunlight streams directly through the south-facing stained-glass facade, casting vibrant colored reflections across the pews.",
    tips: [
      "The church remains an active house of worship serving Casablanca's international Christian community.",
      "An outdoor grotto with votive candles stands in the church courtyard."
    ],
    highlights: [
      "Over 800 m² of breathtaking chipped-glass stained-glass walls by Gabriel Loire",
      "Audacious 1950s modernist reinforced concrete parabolic roof structure",
      "Peaceful courtyard grotto honoring Our Lady of Lourdes"
    ],
    emotionalBenefits: ["Spiritual", "Aesthetic", "Serene"],
    bestTimeToVisit: "Mid-afternoon on a clear sunny day for peak light effects",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Admission",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Sanctuary and grotto access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Optional donation candle purchase",
    address: "Rond-Point d'Europe, Boulevard d'Alexandre 1er, Mers Sultan, Casablanca 20260",
    coordinates: { lat: 33.5786, lng: -7.6186 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=33.5786,-7.6186",
    parkingInfo: "Street parking on the surrounding roundabout and avenue",
    publicTransportInfo: "Short petit taxi ride from central hotels or 15-minute walk from Place Mohammed V",
    dressCode: "Respectful attire required inside sanctuary",
    equipmentNeeded: ["Camera (no flash)"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Active, serene place of worship",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Place Mohammed V",
        type: "visit",
        id: "casablanca-mohammed-v-square",
        distanceKm: 1.3
      }
    ],
    storyTitle: "The Symphony of Colored Light",
    history: "Constructed at the close of the French Protectorate era to serve European civil servants living in the Mers Sultan district, the building chose a modernist concrete arch aesthetic rather than historic revivalism.",
    culturalImportance: "A living testament to Casablanca's enduring freedom of worship and multi-faith community life.",
    localLegend: "Gabriel Loire created the thick faceted glass pieces using ancient hand-chipping techniques so each glass tile would act as an individual prism refracting North African sunlight.",
    funFact: "The stained-glass panels illustrate scenes from the life of the Virgin Mary interwoven with subtle North African botanical motifs.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are non-Christians permitted to enter and view the stained glass?",
        a: "Yes, respectful visitors of all faiths are welcome to enter quietly and admire the artwork outside of scheduled mass times."
      }
    ],
    contactPhone: "+212522861054"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-art-deco-walk",
    city: "casablanca",
    name: "Boulevard Mohammed V & Art Deco Architectural Tour",
    neighborhood: "Centre-Ville",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["art-and-culture", "culture", "photographer", "history"],
    vibeTags: ["architectural", "historical", "nostalgic"],
    tags: ["architectural", "authentic", "cultural-tour", "historical", "local-life", "photo-spot", "urban", "walk", "walk-in"],
    badges: ["architectural-gem", "historic-landmark", "must-see"],
    badge: "essential",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "step_free_paved_paths", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: false,
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
    openingHours: "Open 24 hours daily (best walked daylight hours 09:00 - 18:00)",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "street_parking", "walking_paths"],
    restrictions: ["Private residential building lobbies may restrict general entry"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Casablanca is recognized as the world's greatest living open-air laboratory of 20th-century Art Deco, Streamline Moderne, and Neo-Mauresque architecture. This self-guided walking itinerary follows the tree-lined tramway path along Boulevard Mohammed V and surrounding avenues, passing landmarks like the 1918 Hôtel Lincoln, the 17-story Immeuble Liberté (Africa's first skyscraper), the historic Grande Poste, and the domed Passage Glaoui.",
    shortValueProp: "Self-guided urban architectural safari through the world's premier 1930s Art Deco metropolis",
    googleRating: 4.4,
    reviewCount: 510,
    googleReviewCount: 510,
    tip: "Remember to look up above street-level modern shopfronts to spot the magnificent zellij friezes, wrought-iron balconies, and geometric sculpted cornices.",
    tips: [
      "The Casablanca heritage association 'Casamémoire' publishes architectural maps and conducts guided weekend walks.",
      "The Line T1 tramway runs down the middle of Boulevard Mohammed V, providing an easy hop-on hop-off experience."
    ],
    highlights: [
      "Immeuble Liberté (1950, Léonard Morandi) – Africa's first residential skyscraper",
      "Historic Hôtel Lincoln with its iconic Neo-Mauresque arcade currently under luxury restoration",
      "Neo-Mauresque Central Post Office (Grande Poste) and ornate Art Deco apartment facades"
    ],
    emotionalBenefits: ["Inspiring", "Nostalgic", "Architectural"],
    bestTimeToVisit: "Sunday mornings for quiet traffic-free streets or late afternoons for golden light on facades",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Self-Guided Walk",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public architectural route",
    includedServices: ["Self-guided urban itinerary"],
    excludedServices: ["Guided heritage tour fees if booked through local associations"],
    hiddenCostsInfo: "None",
    address: "Boulevard Mohammed V (from Place des Nations Unies to Casa-Voyageurs), Centre-Ville, Casablanca 20000",
    coordinates: { lat: 33.5938, lng: -7.6152 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=33.5938,-7.6152",
    parkingInfo: "Paid underground parking at Place des Nations Unies",
    publicTransportInfo: "Tramway Line T1 runs along the entire length of the boulevard",
    dressCode: "Comfortable urban walking shoes",
    equipmentNeeded: ["Camera with wide or zoom lens for architectural details"],
    fitnessLevel: "Moderate (2-3 km continuous paved urban walking)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Mind the quiet silent-running tramway when crossing tracks",
    languages: ["French", "Arabic (Darija)", "English"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Marché Central",
        type: "visit",
        id: "casablanca-marche-central",
        distanceKm: 0.1
      },
      {
        name: "Place Mohammed V",
        type: "visit",
        id: "casablanca-mohammed-v-square",
        distanceKm: 0.7
      }
    ],
    storyTitle: "The Experimental Playground of Modern Architecture",
    history: "During the 1920s to 1950s, leading European avant-garde architects—free from strict historic building codes in Europe—used Casablanca to experiment with reinforced concrete, bold geometric Art Deco lines, and hybrid Moroccan details, creating a unique urban identity that influenced modern architecture worldwide.",
    culturalImportance: "Casablanca's 20th-century urban core is currently nominated for UNESCO World Heritage recognition.",
    localLegend: "Renowned French architect Le Corbusier praised Casablanca's interwar urbanism as one of the few places where modern architecture truly flourished at city scale.",
    funFact: "When the 78-meter Immeuble Liberté was completed on Place de la Révolution in 1950, it was the tallest building on the entire African continent.",
    officialWebsite: "http://www.casamemoire.org",
    ticketWebsite: "",
    faq: [
      {
        q: "How long does the Art Deco walking circuit take?",
        a: "A comfortable stroll covering the main buildings along Boulevard Mohammed V, Rue Idriss Lahrizi, and Boulevard de Paris takes approximately 1.5 to 2 hours."
      }
    ],
    contactPhone: ""
  }
];