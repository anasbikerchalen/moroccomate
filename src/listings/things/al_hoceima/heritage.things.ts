/**
 * =========================================================================
 * [AL_HOCEIMA] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/al_hoceima/index.ts
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
export const alHoceimaHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-port",
    city: "al_hoceima",
    name: "Port of Al Hoceima",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad", "foodie"],
    vibeTags: ["authentic", "sensory", "vibrant"],
    tags: ["authentic", "coastal", "cultural-tour", "local-life", "working-port", "walk-in"],
    badges: ["market-experience", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1.2,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "drive"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 2,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open daily (fish auction and fleet returns active 06:00 - 10:00 and 15:00 - 17:00)",
    paymentMethods: ["cash_mad"],
    amenities: ["street_parking", "food_stalls", "walking_paths"],
    restrictions: ["Operational port areas and commercial docks may restrict public boarding on vessels"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "An authentic Mediterranean working harbor with blue sardine trawlers, net-mending docks, and an active wholesale fish market. Visitors can watch local fishermen land the daily catch against the limestone backdrop of Quemado cliff.",
    shortValueProp: "Experience traditional Rif maritime life at Al Hoceima's working fishing harbor",
    googleRating: 4.3,
    reviewCount: 380,
    googleReviewCount: 380,
    badge: "popular",
    tip: "Arrive around 07:00 to 09:00 to catch trawlers returning with sardine and swordfish catches.",
    tips: [
      "Wear closed shoes with solid grip as harbor stones and quays are often wet and slick.",
      "Bring cash in MAD if you wish to purchase freshly caught fish or dine at adjoining harbor grills."
    ],
    highlights: [
      "Blue wooden artisanal fishing fleets",
      "Morning fish landing and sorting along the quayside",
      "Direct views over the dramatic Quemado limestone bay"
    ],
    emotionalBenefits: ["Authentic", "Sensory", "Vibrant"],
    bestTimeToVisit: "Early morning for boat arrivals",
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
    includedServices: ["Public harbor access"],
    excludedServices: ["Fish purchases", "Vessel boarding"],
    hiddenCostsInfo: "None, except purchases from local fish stalls or cafes",
    address: "Port de Pêche / Gare Maritime, Al Hoceima 32000",
    coordinates: { lat: 35.2448, lng: -3.9265 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.2448,-3.9265",
    parkingInfo: "Paid port parking and street parking along the access road",
    publicTransportInfo: "5-minute petit taxi from Place Mohamed VI or a 15-minute downhill walk",
    dressCode: "Casual (practical footwear recommended)",
    equipmentNeeded: ["Camera", "Cash in Moroccan Dirhams (MAD)"],
    fitnessLevel: "Moderate (Steep downhill approach and uphill return to city center)",
    ageRestrictions: "All ages welcome (close adult supervision recommended near open water)",
    safetyNotes: "Active vehicle movement, forklifts, and slick harbor steps",
    languages: ["Tarifit", "Arabic (Darija)", "French", "Spanish"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Plage Quemado",
        type: "visit",
        id: "al-hoceima-quemado-beach",
        distanceKm: 0.4
      }
    ],
    storyTitle: "The Maritime Lifeline of the Bay",
    history: "Modern port facilities expanded in the late 1920s following the Rif War, developing into one of Morocco's primary Mediterranean fishing centers known for sardine and anchovy hauls.",
    culturalImportance: "The port sustains the traditional seafaring livelihood of the coastal Rif Amazigh communities.",
    localLegend: "Local fishermen consider the migratory visits of Mediterranean common dolphins in the bay an omen of a bountiful fishing season.",
    funFact: "Al Hoceima is celebrated throughout northern Morocco for its artisanal grilled sardines prepared immediately off the morning docks.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can visitors buy fish directly at the docks?",
        a: "Yes, small-scale fishermen frequently sell portions of their morning catch directly on the dock, payable in cash."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-mosquee-mohamed-vi",
    city: "al_hoceima",
    name: "Mosquée Mohamed VI",
    neighborhood: "Mirador",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history"],
    vibeTags: ["architectural", "solemn", "peaceful"],
    tags: ["architectural", "authentic", "cultural-tour", "walk-in"],
    badges: ["architectural-landmark"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 1.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
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
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Exterior viewing available daily; prayer halls open exclusively to Muslims during prayer times",
    paymentMethods: ["not available"],
    amenities: ["street_parking", "ablution_facilities_worshippers"],
    restrictions: ["Non-Muslims cannot enter the prayer halls or interior precincts under Moroccan law"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Inaugurated in 2008 by King Mohammed VI, this major religious complex features traditional Moroccan-Andalusian architectural elements, intricate zellij tilework, carved stucco, and an imposing square minaret.",
    shortValueProp: "Al Hoceima's grandest contemporary mosque showcasing Moroccan-Andalusian craftsmanship",
    googleRating: 4.4,
    reviewCount: 195,
    googleReviewCount: 195,
    badge: "historical",
    tip: "Admire the exterior architecture in late afternoon when the white stone and carved woodwork catch the golden light.",
    tips: [
      "Dress conservatively (covered knees and shoulders) when viewing the mosque grounds from the surrounding streets.",
      "Avoid photographing worshippers entering or exiting during Friday congregational prayer (Jumu'ah)."
    ],
    highlights: [
      "Tall square minaret with classic Moroccan decorative tilework",
      "Traditional green-tiled hipped roofing",
      "Modern Moroccan-Andalusian geometric exterior carvings"
    ],
    emotionalBenefits: ["Reflective", "Architectural", "Solemn"],
    bestTimeToVisit: "Late afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Exterior Viewing",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public exterior viewing",
    includedServices: ["Exterior viewing from public perimeter"],
    excludedServices: ["Interior prayer hall access for non-Muslims"],
    hiddenCostsInfo: "None",
    address: "Quartier Mirador (Near Place Mirador), Al Hoceima 32000",
    coordinates: { lat: 35.2471, lng: -3.9418 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.2471,-3.9418",
    parkingInfo: "Street parking available around Place Mirador and adjoining avenues",
    publicTransportInfo: "Short petit taxi ride from central Place Mohamed VI or 15-minute walk",
    dressCode: "Modest dress required around religious premises",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed (Gentle paved street walking)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Active place of worship; maintain quiet and respectful decorum",
    languages: ["Tarifit", "Arabic (Darija)", "French"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Maison de la Culture Prince Moulay El Hassan",
        type: "visit",
        id: "al-hoceima-maison-de-la-culture",
        distanceKm: 0.7
      }
    ],
    storyTitle: "Contemporary Faith and Moroccan Craftsmanship",
    history: "Inaugurated by King Mohammed VI on July 25, 2008, the 26-million MAD complex accommodates over 5,000 worshippers and serves as the primary scientific and religious gathering center in the province.",
    culturalImportance: "Represents the ongoing integration of classic Moroccan royal architectural heritage into modern urban development in the Rif region.",
    localLegend: "Constructed as part of the broader post-2004 earthquake urban modernization and civic rehabilitation program.",
    funFact: "The mosque complex encompasses over 6,700 square meters, including specialized centers for women's literacy and Quranic study.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can non-Muslim visitors tour the inside of the mosque?",
        a: "No. In Morocco, entry into mosque prayer halls is restricted to practicing Muslims. International visitors can view the architecture from the street."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-corniche-morro-viejo",
    city: "al_hoceima",
    name: "Corniche & Belvédère Morro Viejo",
    neighborhood: "Moroviejo",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "photographer", "history"],
    vibeTags: ["scenic", "historical", "peaceful"],
    tags: ["coastal", "historical", "iconic-landmark", "photo-spot", "sunset-view", "walk", "walk-in", "waterfront"],
    badges: ["historic-landmark", "panoramic-view", "sunset-spot"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
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
    accessibilityFeatures: ["step_free_paved_paths", "flat_walkways", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24 hours daily",
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "perimeter_benches", "street_parking", "walking_paths", "shaded_benches"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Perched atop the Morro Viejo promontory, this scenic pedestrian promenade winds along the historic cliffs separating Quemado Bay from Matadero Cove. Established along the defensive ridge of 1920s Villa Sanjurjo, it provides unhindered vistas across the harbor, the limestone headlands, and the offshore Mediterranean waters.",
    shortValueProp: "Panoramic cliffside promenade offering historic coastal vistas over the Bay of Al Hoceima",
    googleRating: 4.6,
    reviewCount: 420,
    googleReviewCount: 420,
    badge: "top-pick",
    tip: "Walk the promenade during golden hour to watch fishing trawlers return against the setting Mediterranean sun.",
    tips: [
      "Bring a light windbreaker in the evening as coastal breezes along the clifftop can be cool.",
      "The paved path connects easily downward toward Quemado Beach via stone stairways."
    ],
    highlights: [
      "Sweeping 180-degree panoramas of Quemado Bay and the fishing harbor",
      "Historical clifftop military promontory dating to the 1925 landing",
      "Paved pedestrian walkways with resting benches and street lighting"
    ],
    emotionalBenefits: ["Scenic", "Tranquil", "Reflective"],
    bestTimeToVisit: "Sunset and golden hour",
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
    includedServices: ["Public promenade access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Corniche Morro Viejo, Quartier Moroviejo, Al Hoceima 32000",
    coordinates: { lat: 35.2423, lng: -3.9242 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.2423,-3.9242",
    parkingInfo: "Street parking available along Avenue Morro Viejo",
    publicTransportInfo: "Easy 10-minute walk from Place Mohamed VI or quick petit taxi",
    dressCode: "Casual comfortable attire",
    equipmentNeeded: ["Camera", "Windbreaker"],
    fitnessLevel: "Relaxed (Paved flat walking path)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Stay behind the protective cliffside railings at all times",
    languages: ["Tarifit", "Arabic (Darija)", "French", "Spanish"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Place du Rif",
        type: "visit",
        id: "al-hoceima-place-du-rif",
        distanceKm: 0.5
      },
      {
        name: "Port of Al Hoceima",
        type: "visit",
        id: "al-hoceima-port",
        distanceKm: 0.6
      }
    ],
    storyTitle: "The Watchpoint of the Bay",
    history: "Morro Viejo was fortified as a coastal artillery station and garrison hill following the Spanish amphibious landing of September 1925. In the modern era, the municipality revitalized the headland into an open clifftop belvedere and promenade.",
    culturalImportance: "A cherished gathering place for Rifian families and travelers to appreciate the geological and maritime beauty of Al Hoceima.",
    localLegend: "Local residents claim the promontory was used by ancient Phoenician mariners as a landmark beacon navigating between the Nekor estuary and the Strait of Gibraltar.",
    funFact: "On exceptionally clear days, the distant contours of the high Rif coastal ridges are visible stretching toward Badès.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the Morro Viejo corniche stroller and wheelchair friendly?",
        a: "Yes, the main upper promenade is paved and flat with ramped entrances from the main roadway."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-place-du-rif",
    city: "al_hoceima",
    name: "Place du Rif (Ex-Plaza Florido)",
    neighborhood: "Moroviejo",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history", "social-collector"],
    vibeTags: ["historical", "nostalgic", "vibrant"],
    tags: ["architectural", "authentic", "cultural-tour", "historical", "local-life", "urban", "walk-in"],
    badges: ["historic-landmark", "architectural-gem", "cultural-immersion"],
    badge: "historical",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.2,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24 hours daily (cafes and commerce active 07:00 - 23:00)",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "perimeter_benches", "street_parking", "walking_paths", "atm_nearby"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "The historic civic and social epicenter of Al Hoceima, originally laid out as Plaza Florido during the Spanish protectorate in the late 1920s. Encircled by colonial-era Spanish-Moorish architecture, traditional open-air cafes, and pedestrian alleys, it offers an authentic window into daily Rifian town life.",
    shortValueProp: "Historic colonial square and classic social gathering center of Al Hoceima",
    googleRating: 4.2,
    reviewCount: 310,
    googleReviewCount: 310,
    tip: "Sit at a historic terrace cafe for traditional mint tea or café con leche to soak in the local atmosphere.",
    tips: [
      "The square is particularly animated in the late afternoon and early evening as families stroll after work.",
      "Most surrounding cafes operate on cash-only payments in Moroccan Dirhams."
    ],
    highlights: [
      "Preserved 1930s Spanish colonial arcades and facades",
      "Classic sidewalk café culture under shaded palm rows",
      "Direct pedestrian connection to the old commercial core and municipal gardens"
    ],
    emotionalBenefits: ["Nostalgic", "Vibrant", "Authentic"],
    bestTimeToVisit: "Late afternoon to early evening",
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
    excludedServices: ["Cafe food and drinks"],
    hiddenCostsInfo: "None",
    address: "Place du Rif (Plaza Florido), Quartier Moroviejo, Al Hoceima 32000",
    coordinates: { lat: 35.2458, lng: -3.9332 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.2458,-3.9332",
    parkingInfo: "Street parking available on adjoining side streets",
    publicTransportInfo: "Central location easily reachable on foot from any downtown hotel",
    dressCode: "Casual respectful attire",
    equipmentNeeded: ["Camera", "Cash in MAD for cafes"],
    fitnessLevel: "Relaxed (Level paved square)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Well-lit and very safe public square",
    languages: ["Tarifit", "Arabic (Darija)", "French", "Spanish"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Corniche & Belvédère Morro Viejo",
        type: "visit",
        id: "al-hoceima-corniche-morro-viejo",
        distanceKm: 0.5
      }
    ],
    storyTitle: "The Beating Heart of Old Villa Sanjurjo",
    history: "Laid out during the urbanization of Villa Sanjurjo following the 1925 landing, Plaza Florido became the colonial administrative and commercial nucleus. Over subsequent decades, it transitioned naturally into the civic and social forum of Al Hoceima.",
    culturalImportance: "Represents the everyday urban culture of the Rif, where Amazigh community elders, students, and travelers share tea and conversation.",
    localLegend: "Historic elders recount that Spanish officers and local notables once negotiated peace pacts and market treaties at the cafes along this very square.",
    funFact: "Many elder residents of Al Hoceima still refer to the plaza by its Spanish name 'Plaza Florido' rather than Place du Rif.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are the cafes around Place du Rif family-friendly?",
        a: "Yes, the open-air terraces welcome families, couples, and solo travelers alike."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-maison-de-la-culture",
    city: "al_hoceima",
    name: "Maison de la Culture Prince Moulay El Hassan",
    neighborhood: "Mirador",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture"],
    vibeTags: ["artistic", "architectural", "peaceful"],
    tags: ["authentic", "cultural-tour", "culture", "modern", "workshop"],
    badges: ["cultural-immersion", "educational"],
    badge: "essential",
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1.0,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "level_entry_doorway", "wide_main_corridors", "step_free_access"],
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
    openingHours: "09:00 AM - 07:00 PM (Monday to Friday; weekends during scheduled exhibitions and theater)",
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "information_desk", "restrooms", "street_parking"],
    restrictions: ["Photography may be restricted in specific contemporary art gallery installations"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Al Hoceima's premier cultural institution, located on Avenue Houmane El Fetouaki. Dedicated to Mediterranean arts and Rifian cultural expression, the modern multi-disciplinary facility hosts the annual Festival International du Film d'Al Hoceima, contemporary visual art expositions, Amazigh theater productions, and creative workshops.",
    shortValueProp: "Contemporary cultural center showcasing Rifian visual arts, cinema, and live performances",
    googleRating: 4.3,
    reviewCount: 140,
    googleReviewCount: 140,
    tip: "Check the entrance lobby notice board for schedules of upcoming art vernissages, Amazigh plays, and film screenings.",
    tips: [
      "Entry to gallery art exhibitions is typically free to the public.",
      "The venue is centrally situated in Hay Mirador, directly accessible on foot or by local petit taxi."
    ],
    highlights: [
      "Modern exhibition gallery featuring Rifian and Moroccan visual artists",
      "Host venue for the annual Festival International du Film d'Al Hoceima",
      "Performing arts auditorium celebrating Amazigh theatre and poetry"
    ],
    emotionalBenefits: ["Artistic", "Educational", "Inspiring"],
    bestTimeToVisit: "Weekday afternoons or during evening cultural events",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "General Gallery Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access to permanent exhibitions",
    includedServices: ["Exhibition hall access"],
    excludedServices: ["Ticketed special theatrical performances and festival passes"],
    hiddenCostsInfo: "Special film festival or theatrical shows may charge modest ticket fees (20-50 MAD)",
    address: "Avenue Houmane El Fetouaki, Hay Mirador, Al Hoceima 32000",
    coordinates: { lat: 35.2425, lng: -3.9345 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.2425,-3.9345",
    parkingInfo: "Street parking available along Avenue Houmane El Fetouaki",
    publicTransportInfo: "5-minute petit taxi ride from central Place Mohamed VI",
    dressCode: "Smart casual",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed (Step-free indoor walking)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Quiet, secure public cultural venue",
    languages: ["Tarifit", "Arabic (Darija)", "French"],
    visitorQuotes: [],
    nearbyCombos: [
      {
        name: "Mosquée Mohamed VI",
        type: "visit",
        id: "al-hoceima-mosquee-mohamed-vi",
        distanceKm: 0.7
      }
    ],
    storyTitle: "The Cultural Stage of the Rif",
    history: "Established under modern royal cultural infrastructure initiatives, the complex provides Al Hoceima with a venue dedicated to preserving regional Rif heritage while fostering contemporary artistic dialogue with Mediterranean creators.",
    culturalImportance: "Serves as the primary institutional platform for Amazigh language preservation, regional youth cinematography, and Northern Moroccan plastic arts.",
    localLegend: "Constructed on the grounds that formerly marked the civic transition between the colonial hill and the expanding Mirador heights.",
    funFact: "Al Hoceima is home to several active professional theater companies whose debut productions premier inside this building's 500-seat auditorium.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the Maison de la Culture open to international travelers?",
        a: "Yes, visitors are welcome to explore the art galleries and attend public exhibitions during operating hours."
      }
    ],
    contactPhone: ""
  }
];