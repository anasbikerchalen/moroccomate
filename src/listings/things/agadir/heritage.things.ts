/**
 * =========================================================================
 * [AGADIR] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/agadir/index.ts
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
export const agadirHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-oufella-ruins",
    city: "agadir",
    name: "Agadir Oufella Ruins",
    neighborhood: "Agadir Oufella",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["authentic", "coastal", "cultural-tour", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["must-see", "historic-landmark", "panoramic-view", "sunset-spot"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 90,
    pricePerPerson: 90,
    entryPrice: 90,
    durationMinutes: 75,
    distanceFromCenterKm: 4.5,
    transportMode: "taxi",
    transportModes: ["cable-car", "taxi", "bus", "walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["step_free_interior_boardwalk", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    openingHours: "10:00 AM - 07:00 PM (Winter); 10:00 AM - 08:00 PM (Summer); Daily",
    openingHoursStructured: [
      {
        dayOfWeek: 0,
        open: "10:00",
        close: "19:00"
      },
      {
        dayOfWeek: 1,
        open: "10:00",
        close: "19:00"
      },
      {
        dayOfWeek: 2,
        open: "10:00",
        close: "19:00"
      },
      {
        dayOfWeek: 3,
        open: "10:00",
        close: "19:00"
      },
      {
        dayOfWeek: 4,
        open: "10:00",
        close: "19:00"
      },
      {
        dayOfWeek: 5,
        open: "10:00",
        close: "19:00"
      },
      {
        dayOfWeek: 6,
        open: "10:00",
        close: "19:00"
      }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: [
      "restrooms",
      "parking",
      "ticket_booth",
      "audioguide_service",
      "panoramic_viewpoint",
      "wooden_boardwalk",
      "information_desk"
    ],
    restrictions: [
      "No unauthorized drones or commercial filming equipment",
      "Stay strictly on designated raised wooden walkways to protect archaeological ruins",
      "Do not climb or lean on original Saadian stone ramparts",
      "No pets allowed on the internal archaeological boardwalk"
    ],
    healthContraindications: [
      "High wind exposure at the summit; windbreaker recommended for travelers sensitive to sudden cold",
      "Steep incline from vehicle dropoff to main gate for manual wheelchair pushers"
    ],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Perched 236 meters above sea level, this 16th-century fortress was built by Saadian Sultan Muhammad al-Shaykh. Following comprehensive state restorations, visitors can stroll elevated wooden walkways over the archaeological street grid of the pre-earthquake citadel, accompanied by panoramic views of the entire bay and modern harbor.",
    shortValueProp: "The best panoramic ocean and city views in Agadir from restored 16th-century ramparts",
    googleRating: 4.4,
    reviewCount: 13441,
    googleReviewCount: 7811,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 3500,
    viatorRating: 4.5,
    viatorReviewCount: 1250,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 880,
    tip: "Cable car tickets (Danialand) and Kasbah interior admission tickets are sold separately. Arrive 90 minutes before sunset to tour the wooden interior path before last entry at 6:30 PM, then catch golden hour over the bay.",
    tips: [
      "Danialand Cable Car and the Kasbah interior admission are operated by different entities; buying a lift ticket does not include Kasbah interior admission.",
      "The outer rampart esplanade is free, but accessing the interior historical walking circuit requires an admission ticket (90 MAD for international visitors; 20 MAD for Moroccan residents).",
      "Strong Atlantic wind gusts are common late in the afternoon; bring a windbreaker even in warm summer months.",
      "If taking a petit taxi up, negotiate a round-trip fare with waiting time, as taxis are rarely available at the summit for return rides."
    ],
    highlights: [
      "Walk the reconstructed suspended wooden walkways over the 1960 archaeological site",
      "Spectacular 360-degree views of Agadir's 10km beach crescent, port, and anti-Atlas foothills",
      "Towering illuminated hillside Arabic inscription: 'God, Homeland, King'",
      "Surviving 16th-century Saadian bastions and restored Dutch commemorative cartouche"
    ],
    emotionalBenefits: ["Reflective", "Scenic", "Historic", "Awe-inspiring"],
    bestTimeToVisit: "Golden Hour (05:00 PM - 06:30 PM)",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round (Clear winter and autumn afternoons give best visibility)",
    ticketTypes: [
      {
        name: "International Adult Entry (18+)",
        price: 90,
        currency: "MAD",
        category: "international-adult",
        conditions: "Official Kasbah interior entrance fee set by SDR Tourisme Souss Massa"
      },
      {
        name: "Moroccan Adult Entry",
        price: 20,
        currency: "MAD",
        category: "national-adult",
        conditions: "Standard national rate"
      },
      {
        name: "Moroccan Youth & Seniors Concession",
        price: 10,
        currency: "MAD",
        category: "national-concession",
        conditions: "Legacy concession rate for Moroccan youth and seniors"
      },
      {
        name: "Mediator-Led 1-Hour Tour (add-on)",
        price: 100,
        currency: "MAD",
        category: "add-on",
        conditions: "Official SDR mediator tour; base admission is self-guided"
      },
      {
        name: "Multilingual Audioguide (add-on)",
        price: 30,
        currency: "MAD",
        category: "add-on",
        conditions: "5-language audioguide add-on"
      },
      {
        name: "Cable Car Round-Trip (add-on)",
        price: 130,
        currency: "MAD",
        category: "add-on",
        conditions: "Separate cable car ticket; not required for kasbah entry"
      }
    ],
    discountsInfo: "Outer summit esplanade and viewpoints are completely free. Kasbah interior requires a ticket with substantial resident and family discounts.",
    includedServices: [
      "Access to internal wooden archaeological walkway",
      "Informational historical display access",
      "Free access to outer viewing ramparts"
    ],
    excludedServices: [
      "Danialand Cable Car transport fare (~105-130 MAD round-trip)",
      "Audio guide unit or mobile app rental (30 MAD)",
      "Official certified site guide (100 MAD)",
      "Summit vehicle parking fee (10 MAD)"
    ],
    hiddenCostsInfo: "Cable car tickets are separate from Kasbah admission; optional audio guide is 30 MAD.",
    address: "Plateau d'Agadir Oufella, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Agadir+Oufella+Kasbah+Agadir",
    parkingInfo: "Large secure paved parking area at the summit (10 MAD fee)",
    publicTransportInfo: "Danialand Cable Car from Pont Tildi base station, public bus route 22, or petit taxi",
    dressCode: "Comfortable closed walking shoes; bring a windbreaker jacket for summit ocean winds",
    equipmentNeeded: ["Windbreaker or light jacket", "Comfortable walking shoes", "Camera / smartphone"],
    fitnessLevel: "Relaxed (The interior wooden boardwalk is level and step-free)",
    ageRestrictions: "All ages welcome (Stroller and wheelchair accessible throughout the interior boardwalk)",
    safetyNotes: "Well-lit and guarded; stay on the designated boardwalk to avoid loose rubble",
    languages: ["Arabic (Darija)", "French", "English", "Tachelhit (Amazigh)", "Spanish"],
    visitorQuotes: [
      {
        type: "Couples & Sunset",
        quote: "We took the cable car up right before sunset. The view of the lights turning on across Agadir's curve is worth every single dirham.",
        author: "Marcus & Elspeth from Munich",
        rating: 5
      },
      {
        type: "Family Day Out",
        quote: "The wooden pathway is super safe for the kids and very informative. It was a nice, peaceful break from the busy beachfront resorts.",
        author: "David K. and family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Marina d'Agadir",
        type: "visit",
        id: "agadir-marina",
        distanceKm: 2.1,
        recommendedTransition: "cable-car"
      },
      {
        name: "Pure Passion Restaurant",
        type: "eat",
        id: "e-agadir-1",
        distanceKm: 2.4,
        recommendedTransition: "taxi"
      }
    ],
    storyTitle: "The Ancient Citadel of Oufella",
    history: "Built in 1540 by Saadian Sultan Muhammad al-Shaykh, this fortress successfully besieged the Portuguese colony below. Sadly, the 1960 earthquake leveled the interior, leaving the monumental walls as a poignant memorial.",
    culturalImportance: "Stands as a historic symbol of resistance and rebirth. The phrase on the hillside glows brightly at night, serving as a beacon of patriotic pride for Moroccan residents.",
    localLegend: "Locals speak of ancient secret escape tunnels snaking deep under the mountain down to the ocean cove, once used by defenders to secure fresh provisions during long sieges.",
    funFact: "The wood used for the newly restored walkways was specially treated to withstand both the intense salt air of the Atlantic and the dry desert winds.",
    officialWebsite: "https://www.agadir-oufella.ma",
    ticketWebsite: "https://www.agadir-oufella.ma/tickets",
    faq: [
      {
        q: "Can I walk up to the fortress?",
        a: "Yes, there is a dedicated zigzag hiking trail (approx. 2.8 km) from the base near Tildi, taking 45-60 minutes. Most visitors opt for the cable car or a petit taxi."
      },
      {
        q: "Is the interior boardwalk wheelchair accessible?",
        a: "Yes, the interior wooden boardwalk opened in 2024 is step-free and fully wheelchair-accessible, though the external slope from the parking lot can be steep."
      }
    ],
    contactPhone: "+212 608-505088",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-souk-el-had",
    city: "agadir",
    name: "Souk El Had",
    neighborhood: "Rue 2 Mars / Amsernat",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["culture", "first-timer"],
    tags: [
      "active",
      "authentic",
      "cultural-tour",
      "historical",
      "instagrammable",
      "morning",
      "shopping",
      "walk-in"
    ],
    badges: ["market-experience", "shopping-hub", "cultural-immersion", "foodie-paradise"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
    distanceFromCenterKm: 1.8,
    transportMode: "walkable",
    transportModes: ["taxi", "walk", "bus"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "wide_main_corridors", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: true,
    openingHours: "09:00 AM - 08:00 PM (Tuesday to Sunday; Closed Mondays)",
    openingHoursStructured: [
      {
        dayOfWeek: 0,
        open: "09:00",
        close: "20:00"
      },
      {
        dayOfWeek: 2,
        open: "09:00",
        close: "20:00"
      },
      {
        dayOfWeek: 3,
        open: "09:00",
        close: "20:00"
      },
      {
        dayOfWeek: 4,
        open: "09:00",
        close: "20:00"
      },
      {
        dayOfWeek: 5,
        open: "09:00",
        close: "20:00"
      },
      {
        dayOfWeek: 6,
        open: "09:00",
        close: "20:00"
      }
    ],
    paymentMethods: ["cash_mad"],
    amenities: [
      "restrooms",
      "parking_perimeter",
      "food_stalls",
      "fresh_juice_bars",
      "atm_nearby",
      "mosque_prayer_room"
    ],
    restrictions: [
      "No smoking in covered shopping avenues",
      "No motorized mopeds inside customer corridors",
      "Modest attire required (shoulders and knees covered)",
      "Always ask permission before filming individual stall owners"
    ],
    healthContraindications: [
      "Crowded and warm during peak weekend afternoons; travelers prone to claustrophobia should visit on weekday mornings"
    ],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Spread over 13 hectares and enclosed by a 6-meter crenelated wall, Souk El Had is one of the largest urban markets in North Africa. Behind its 13 numbered gates lie more than 6,000 stalls selling organic Souss-Massa argan oil, fragrant spices, Berber rugs, leather slippers, and local produce.",
    shortValueProp: "The vibrant 13-gate commercial heart of Agadir featuring over 6,000 authentic stalls",
    googleRating: 4.4,
    reviewCount: 9155,
    googleReviewCount: 5885,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 2200,
    viatorRating: 4.3,
    viatorReviewCount: 650,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 420,
    tip: "The souk is strictly closed on Mondays for municipal deep cleaning. Take a photo of the gate number where you enter (Gate 5/6 for spices and leather, Gate 9 for argan oil) so you can easily navigate back.",
    tips: [
      "Closed all day Monday for cleaning; do not schedule your souk visit on a Monday.",
      "Carry cash in Moroccan Dirhams (bills of 20, 50, and 100 MAD). 99% of vendors do not accept bank cards and struggle to change 200 MAD notes.",
      "Take a smartphone photo of your entry gate (numbered 1 through 13) to ensure you can find your taxi or group meeting spot easily.",
      "For certified culinary and cosmetic argan oil, head directly toward Gate 9 (Bab Imouzzar) to find cooperative vendors."
    ],
    highlights: [
      "Massive walled marketplace with 13 distinct themed entrance gates (Babs)",
      "Gate 5 and 6 spice quarter filled with saffron, ras el hanout, and mountain thyme",
      "Cooperative stalls offering pure certified cosmetic and edible argan oil and amlou",
      "Handmade leather babouches (slippers), cedar woodwork, and authentic Berber rugs"
    ],
    emotionalBenefits: ["Vibrant", "Sensory", "Bustling", "Authentic"],
    bestTimeToVisit: "Morning (09:30 AM - 11:30 AM) on Tuesday, Wednesday, or Thursday",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Covered roof sections offer rain and midday sun protection)",
    ticketTypes: [
      {
        name: "Free Public Admission",
        price: 0,
        currency: "MAD",
        category: "all",
        conditions: "No ticket required to enter any gate"
      }
    ],
    discountsInfo: "Public market with free admission; prices for goods are determined through polite bargaining.",
    includedServices: ["Full access through all 13 gates and covered shopping sectors"],
    excludedServices: [
      "Merchandise, spices, and craft purchases",
      "Public toilet attendant tip (2 MAD coin)",
      "Exterior vehicle parking guardians (5 MAD)"
    ],
    hiddenCostsInfo: "Keep 2 MAD coins on hand for municipal restroom attendants and 5 MAD for parking guardians.",
    address: "Rue 2 Mars, Agadir 80090",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Souk+El+Had+Agadir",
    parkingInfo: "Paid parking lots outside Gates 5, 8, and 10 monitored by official badge attendants (5 MAD fee)",
    publicTransportInfo: "Very easily reached by red petit taxi from anywhere in the city (15-20 MAD from beachfront)",
    dressCode: "Respectful modest dress (shoulders, chest, and knees covered)",
    equipmentNeeded: ["Cash Dirhams in small denominations", "Reusable shopping bag", "Comfortable walking shoes"],
    fitnessLevel: "Active (Expect 2-3 km of walking across level ground)",
    safetyNotes: "Very safe and friendly; keep wallet and phone zipped securely inside front pockets in dense crowds",
    languages: ["Arabic (Darija)", "French", "English", "German", "Tachelhit"],
    visitorQuotes: [
      {
        type: "Solo Shopaholic",
        quote: "Bargaining is an art form here! I got a stunning leather satchel. Start at 50% of the price and be prepared to walk away with a smile.",
        author: "Clara J. from Berlin",
        rating: 5
      },
      {
        type: "Culinary Explorer",
        quote: "The scent of wild thyme, mint, and cumin in the air is magical. Found 100% pure culinary Argan oil at cooperative prices.",
        author: "Jean-Pierre from Paris",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "La Médina d'Agadir",
        type: "visit",
        id: "agadir-medina",
        distanceKm: 3.8,
        recommendedTransition: "taxi"
      },
      {
        name: "Jardin d'Olhão",
        type: "visit",
        id: "agadir-jardin-olhao",
        distanceKm: 2.3,
        recommendedTransition: "taxi"
      }
    ],
    storyTitle: "The Sunday Market of Agadir",
    history: "Souk El Had serves as the direct historical continuation of the city's ancient markets. After the earthquake, it was constructed in its modern, wall-bound layout to restore trade and empower thousands of regional artisans.",
    culturalImportance: "It is the primary socio-economic center for Souss-Massa locals. It represents the authentic daily life and trading culture of southern Morocco.",
    localLegend: "Legend says that some rug patterns sold here carry secret Berber tribal letters that speak of long-lost mountain pathways and forgotten Souss water wells.",
    funFact: "Despite its name meaning 'Sunday Market', it is actually open six days a week, shutting down only on Mondays for a deep chemical cleaning.",
    officialWebsite: "https://www.soukelhadagadir.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Is bargaining mandatory?",
        a: "Yes, for crafts, leather, and rugs. Begin by politely countering with 50-60% of the opening quote. Fixed-price cooperative stalls exist for argan oil and honey."
      },
      {
        q: "Are credit cards accepted inside?",
        a: "Almost no vendors accept credit cards. Always bring cash in small-denomination Moroccan Dirhams (20, 50, 100 MAD)."
      }
    ],
    contactPhone: "+212 528-223456",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-medina",
    city: "agadir",
    name: "La Médina d'Agadir",
    neighborhood: "Hay Aghroud, Bensergaou",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["authentic", "cultural-tour", "instagrammable", "private", "relaxed"],
    badges: ["artisan-village", "peaceful-escape", "architectural-gem", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 40,
    entryPrice: 40,
    durationMinutes: 90,
    distanceFromCenterKm: 4.8,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["partial_wheelchair_access", "cobblestone_paths", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    openingHours: "09:00 AM - 06:00 PM (Daily; Onsite restaurant 10:00 AM - 05:00 PM, closed Tuesdays)",
    openingHoursStructured: [
      {
        dayOfWeek: 0,
        open: "09:00",
        close: "18:00"
      },
      {
        dayOfWeek: 1,
        open: "09:00",
        close: "18:00"
      },
      {
        dayOfWeek: 2,
        open: "09:00",
        close: "18:00"
      },
      {
        dayOfWeek: 3,
        open: "09:00",
        close: "18:00"
      },
      {
        dayOfWeek: 4,
        open: "09:00",
        close: "18:00"
      },
      {
        dayOfWeek: 5,
        open: "09:00",
        close: "18:00"
      },
      {
        dayOfWeek: 6,
        open: "09:00",
        close: "18:00"
      }
    ],
    paymentMethods: ["cash_mad"],
    amenities: [
      "restrooms",
      "cafe",
      "traditional_restaurant",
      "artisan_workshops",
      "parking",
      "gift_shop",
      "shaded_courtyards"
    ],
    restrictions: [
      "Commercial video or drone recording requires advance management authorization",
      "Do not climb decorative adobe structures or delicate woodwork",
      "Respect working artisans in their private open workshops"
    ],
    healthContraindications: [
      "Uneven stone cobblestones, gravel paths, and steps throughout; challenging for motorized wheelchairs or visitors with severe joint issues"
    ],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Conceived in 1992 by master Italian-Moroccan artisan Coco Polizzi, this 4.5-hectare cultural open-air village reconstructs the vanished Berber architectural soul of Agadir using local limestone, cedar, and hand-chiseled rammed earth. Quiet cobbled alleyways house working artisans specializing in pottery, zellige, and woodcraft.",
    shortValueProp: "Stroll a peaceful limestone and adobe reconstruction of pre-earthquake Agadir",
    googleRating: 4.4,
    reviewCount: 8975,
    googleReviewCount: 5885,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 2100,
    viatorRating: 4.4,
    viatorReviewCount: 580,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 410,
    tip: "Because the medina is situated 4.8 km south of the city center in Bensergaou, pre-arrange a return pickup with your taxi driver, as vacant taxis rarely pass the gates.",
    tips: [
      "Bring cash (40 MAD for adults, 20 MAD for kids) for entry; card payment machines at the ticket window are frequently offline.",
      "Pre-arrange your return petit taxi or take your driver's WhatsApp number; finding an empty taxi outside the gate for the trip back to Agadir can take 20+ minutes.",
      "Prices in the artisan workshops here are fixed and stress-free compared to Souk El Had, with zero aggressive sales pressure.",
      "The onsite restaurant is closed on Tuesdays, though the main medina gates remain open seven days a week."
    ],
    highlights: [
      "Masterfully hand-cut golden limestone archways, zellige, and cedarwood porticos",
      "Quiet working studios of potters, ironworkers, and leather artisans",
      "Open-air stone amphitheater and serene courtyards shaded by eucalyptus trees",
      "Peaceful shaded café serving authentic mint tea and Moroccan pastries"
    ],
    emotionalBenefits: ["Aesthetic", "Nostalgic", "Peaceful", "Artisan-inspired"],
    bestTimeToVisit: "Morning around 10:00 AM when the sunlight illuminates the stone arches",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Standard Adult Entry",
        price: 40,
        currency: "MAD",
        category: "adult",
        conditions: "Visitors aged 13 and above"
      },
      {
        name: "Child Entry (4–12)",
        price: 20,
        currency: "MAD",
        category: "child",
        conditions: "Children aged 4 to 12"
      },
      {
        name: "Infant Entry (Under 4)",
        price: 0,
        currency: "MAD",
        category: "infant",
        conditions: "Free admission"
      }
    ],
    discountsInfo: "Free entry for infants under 4. Admission ticket value can often be credited toward meals at the onsite traditional restaurant.",
    includedServices: ["Self-guided walking access to all alleys, courtyards, and open artisan workshops"],
    excludedServices: [
      "Artisan pottery, leather, and textile purchases",
      "Food and drinks at the café or restaurant",
      "Return transportation / taxi waiting time"
    ],
    hiddenCostsInfo: "Bring small cash change; minor voluntary tips for artisans demonstrating clay throwing or wood carving.",
    address: "Route d'Ait Melloul, Hay Aghroud, Bensergaou, Agadir 80007",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Medina+d%27Agadir+Agadir",
    parkingInfo: "Large gravel parking lot directly fronting the entrance gate (5 MAD fee)",
    publicTransportInfo: "Red petit taxi from city center or beachfront (10-15 minutes, approx. 25-30 MAD)",
    dressCode: "Comfortable footwear for cobblestones; respectful modest attire",
    equipmentNeeded: ["Comfortable flat walking shoes", "Cash Dirhams for entrance and café", "Sun protection"],
    fitnessLevel: "Moderate (Walking over cobblestone paths and climbing occasional steps)",
    ageRestrictions: "All ages welcome; kid and family friendly",
    safetyNotes: "Private, enclosed gated sanctuary with security personnel; exceptionally calm and safe",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Culture Seeker",
        quote: "A peaceful alternative to the busy souks. You can watch artists make pottery and woodcarvings without pressure.",
        author: "Hanna S.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Souk El Had",
        type: "visit",
        id: "agadir-souk-el-had",
        distanceKm: 3.8,
        recommendedTransition: "taxi"
      }
    ],
    storyTitle: "The Masterpiece of Coco Polizzi",
    history: "Designed by Italian-Moroccan architect Coco Polizzi in 1992, this project was born from his passionate dream to rebuild the historical texture of Agadir that was completely lost during the earthquake of 1960.",
    culturalImportance: "It serves as a massive living archive of traditional southern Moroccan architectural and handicraft heritage.",
    localLegend: "Local builders say that the specific mortar used for these walls contains mountain honey, a secret recipe to keep the limestone cool in summer.",
    funFact: "Every single stone in the medina was hand-cut and laid by master 'Maâlems' (master builders) brought in specially from Fes and Marrakech.",
    officialWebsite: "https://www.medina-agadir.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Is bargaining required inside La Médina?",
        a: "No. Unlike traditional souks, artisans here work with fixed, clearly labeled prices for a relaxed purchasing environment."
      },
      {
        q: "How do I get back to my hotel?",
        a: "Taxis do not routinely queue outside. Either pay your arrival driver a small supplement to wait, or ask the front ticket office to phone a local taxi."
      }
    ],
    contactPhone: "+212 666-338859",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-jardin-olhao",
    city: "agadir",
    name: "Jardin d'Olhão",
    neighborhood: "Talborjt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "culture"],
    tags: ["authentic", "cultural-tour", "nature", "off-the-beaten-path", "relaxed", "walk-in"],
    badges: ["green-oasis", "budget-friendly", "family-friendly", "quiet-retreat"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 1.2,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "bus"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "wide_flat_walkways", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    openingHours: "08:30 AM - 06:00 PM (Wednesday to Monday; Closed Tuesdays)",
    openingHoursStructured: [
      {
        dayOfWeek: 0,
        open: "08:30",
        close: "18:00"
      },
      {
        dayOfWeek: 1,
        open: "08:30",
        close: "18:00"
      },
      {
        dayOfWeek: 3,
        open: "08:30",
        close: "18:00"
      },
      {
        dayOfWeek: 4,
        open: "08:30",
        close: "18:00"
      },
      {
        dayOfWeek: 5,
        open: "08:30",
        close: "18:00"
      },
      {
        dayOfWeek: 6,
        open: "08:30",
        close: "18:00"
      }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["shaded_benches", "fountains", "children_playground", "walking_paths", "public_toilets_nearby"],
    restrictions: [
      "No bicycles, rollerblades, or electric scooters on paved garden paths",
      "No picking of flora or stepping into decorative garden beds",
      "Littering is strictly monitored by municipal groundskeepers"
    ],
    healthContraindications: [],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Also known as the 'Jardin du Portugal', this 2.4-hectare public garden was inaugurated in 1992 to honor the historical twinning between Agadir and the Portuguese maritime town of Olhão. It features terracotta stone arches, bougainvillea, shaded benches, and Amazigh architectural motifs.",
    shortValueProp: "A peaceful green escape in Talborjt celebrating the twinning of Agadir and Olhão",
    googleRating: 4.3,
    reviewCount: 595,
    googleReviewCount: 370,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 150,
    viatorRating: 4.2,
    viatorReviewCount: 45,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 30,
    tip: "The garden is closed on Tuesdays for maintenance. The southwest pavilion houses the Musée de la Mémoire d'Agadir (20 MAD entry), which can easily be combined with your garden walk.",
    tips: [
      "The park is closed every Tuesday for municipal maintenance; plan your visit between Wednesday and Monday.",
      "Look for the commemorative earthquake museum (Musée de la Mémoire) located right inside the southwestern corner of the garden grounds.",
      "A peaceful location to read or take a break from the midday sun, followed by lunch or tea in neighboring Nouveau Talborjt."
    ],
    highlights: [
      "Traditional Portuguese terracotta stonework blended with Souss Amazigh architecture",
      "Canopy of eucalyptus, date palms, and blooming magenta bougainvillea",
      "Houses the historical Musée de la Mémoire d'Agadir in its southwest pavilion",
      "Quiet shaded brick benches and gentle stone water fountains"
    ],
    emotionalBenefits: ["Peaceful", "Reflective", "Cooling", "Rejuvenating"],
    bestTimeToVisit: "Late afternoon (04:00 PM - 05:30 PM) for gentle golden light through the palm trees",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Public Admission",
        price: 0,
        currency: "MAD",
        category: "all",
        conditions: "Free access for all visitors"
      }
    ],
    discountsInfo: "Completely free public municipal garden.",
    includedServices: ["Full public access to paths, gardens, seating, and monuments"],
    excludedServices: [
      "Admission to the onsite Musée de la Mémoire d'Agadir (20 MAD adult ticket)",
      "Street parking municipal ticket on Avenue Kennedy"
    ],
    hiddenCostsInfo: "None; the park is free. Keep 2 MAD coins for on-street parking attendants.",
    address: "Avenue du President Kennedy, Talborjt, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jardin+d%27Olhao+Agadir",
    parkingInfo: "Curbside street parking spaces along Avenue du Président Kennedy (2 MAD/hr)",
    publicTransportInfo: "Easy 5-10 minute walk on foot from anywhere in the Talborjt district",
    dressCode: "Casual respectful park wear",
    equipmentNeeded: ["Water bottle", "Camera / phone", "A book or notebook"],
    fitnessLevel: "Relaxed (Entirely flat, paved brick paths)",
    ageRestrictions: "All ages welcome; stroller and toddler friendly with playground area",
    safetyNotes: "Fenced perimeter supervised by municipal park staff; very safe and family oriented",
    languages: ["Arabic (Darija)", "French", "English", "Portuguese"],
    visitorQuotes: [
      {
        type: "Quiet Mystic",
        quote: "A quiet green oasis right in Talborjt. Perfect to sit in the shade and escape the midday heat.",
        author: "Gerard M.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Musée de la Mémoire d’Agadir",
        type: "visit",
        id: "agadir-musee-memoire",
        distanceKm: 0.1,
        recommendedTransition: "walk"
      },
      {
        name: "Grande Mosquée Mohammed V",
        type: "visit",
        id: "agadir-grande-mosquee",
        distanceKm: 0.4,
        recommendedTransition: "walk"
      }
    ],
    storyTitle: "The Bridge of Friendship",
    history: "Inaugurated in 1992, the garden is a beautiful living symbol of cooperation and cultural heritage between Agadir and its Portuguese sister town, Olhão.",
    culturalImportance: "It offers locals and travelers a tangible glimpse of historical architectural elements that survived the earthquake.",
    localLegend: "Locals whisper that sitting under the central old eucalyptus tree in the garden brings deep peaceful dreams.",
    funFact: "The architecture of the stone entrance gates mimics the iconic fortress walls of Olhão in southern Portugal.",
    officialWebsite: "https://explore-agadirsoussmassa.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the garden open every day?",
        a: "It is open six days a week from 8:30 AM to 6:00 PM, and is closed on Tuesdays for upkeep."
      },
      {
        q: "Is the memorial museum in the same place?",
        a: "Yes, the Musée de la Mémoire is situated in the southwest corner of the garden grounds."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-grande-mosquee",
    city: "agadir",
    name: "Grande Mosquée Mohammed V",
    neighborhood: "Nouveau Talborjt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["authentic", "cultural-tour", "instagrammable", "relaxed", "walk-in"],
    badges: ["spiritual-hub", "architectural-landmark", "cultural-icon"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_courtyard", "perimeter_ramps", "step_free_exterior_view"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: true,
    openingHours: "Exterior perimeter viewable daily (08:00 AM - 09:00 PM); Prayer hall restricted to practicing Muslims",
    openingHoursStructured: [
      {
        dayOfWeek: 0,
        open: "08:00",
        close: "21:00"
      },
      {
        dayOfWeek: 1,
        open: "08:00",
        close: "21:00"
      },
      {
        dayOfWeek: 2,
        open: "08:00",
        close: "21:00"
      },
      {
        dayOfWeek: 3,
        open: "08:00",
        close: "21:00"
      },
      {
        dayOfWeek: 4,
        open: "08:00",
        close: "21:00"
      },
      {
        dayOfWeek: 5,
        open: "08:00",
        close: "21:00"
      },
      {
        dayOfWeek: 6,
        open: "08:00",
        close: "21:00"
      }
    ],
    paymentMethods: ["cash_mad"],
    amenities: [
      "ablution_facilities_worshippers",
      "perimeter_benches",
      "street_parking",
      "traditional_fountains"
    ],
    restrictions: [
      "Non-Muslims are strictly prohibited from entering the inner prayer hall (standard Moroccan religious law)",
      "Strict modest attire required around the perimeter (shoulders, chest, and knees fully covered)",
      "No disruptive noise or loud phone calls, particularly during the five daily prayer calls",
      "Do not aim camera flashes at worshippers engaged in prayer"
    ],
    healthContraindications: [],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Located at the junction of Avenue President Kennedy and Avenue 29 Février, Agadir's grandest mosque features modern Islamic architecture with a soaring square minaret, carved cedarwood horseshoe doors, and intricate turquoise tilework. Built following the 1960 earthquake, it serves as the spiritual heart of the rebuilt city.",
    shortValueProp: "Admire the towering minaret and elegant modern Islamic architecture of Agadir's spiritual center",
    googleRating: 4.4,
    reviewCount: 4170,
    googleReviewCount: 2640,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 1100,
    viatorRating: 4.3,
    viatorReviewCount: 250,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 180,
    tip: "In accordance with Moroccan religious regulations, non-Muslims cannot enter the interior prayer hall. Visit just before sunset to admire the exterior zellige when it is softly lit and hear the evening call to prayer echo through Talborjt.",
    tips: [
      "Non-Muslims are not permitted inside the prayer hall; the experience focuses on exterior architecture, zellige details, and courtyard views.",
      "Time your visit 15 minutes before the Maghrib (sunset) prayer to experience the call to prayer (Adhan).",
      "Dress respectfully when walking around the mosque perimeter; avoid sleeveless tops and short shorts."
    ],
    highlights: [
      "Impressive square minaret with carved stone windows dominating the Talborjt skyline",
      "Intricate turquoise and emerald zellige ceramic tilework and cedarwood exterior doors",
      "Monumental double exterior staircase leading to the grand entrance portals",
      "Atmospheric evening Call to Prayer (Adhan) echoing across the old quarter"
    ],
    emotionalBenefits: ["Spiritual", "Reflective", "Serene", "Architectural"],
    bestTimeToVisit: "Sunset (Maghrib prayer time) for dramatic exterior lighting",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Exterior & Courtyard Viewing",
        price: 0,
        currency: "MAD",
        category: "all",
        conditions: "Free access to exterior perimeter"
      }
    ],
    discountsInfo: "Free public religious monument.",
    includedServices: ["Self-guided exterior viewing from public perimeter and courtyard terraces"],
    excludedServices: [
      "Interior prayer hall entry for non-Muslims (forbidden by Moroccan law)",
      "Curbside parking fee (2 MAD/hr)"
    ],
    hiddenCostsInfo: "None; respect religious guidelines and modest dress standards.",
    address: "Angle Avenue President Kennedy et Rue 29 Février, Nouveau Talborjt, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Grande+Mosquee+Mohammed+V+Agadir",
    parkingInfo: "Curbside parking spaces along Avenue Kennedy (2 MAD/hr municipal fee)",
    publicTransportInfo: "A short 5-minute walk from the central Talborjt café quarter",
    dressCode: "Modest dress only: shoulders, chest, and knees fully covered",
    equipmentNeeded: ["Modest clothing", "Camera for exterior architectural photography"],
    fitnessLevel: "Relaxed (Paved flat sidewalks surrounding the site)",
    ageRestrictions: "All ages welcome; quiet decorum must be observed",
    safetyNotes: "Active religious site; speak quietly and avoid walking directly in front of worshippers during prayer times",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Cultural Observer",
        quote: "The call to prayer echoing from the minaret at dusk is a deeply moving local experience.",
        author: "Khalid A.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Jardin d'Olhão",
        type: "visit",
        id: "agadir-jardin-olhao",
        distanceKm: 0.4,
        recommendedTransition: "walk"
      },
      {
        name: "Musée de la Mémoire d’Agadir",
        type: "visit",
        id: "agadir-musee-memoire",
        distanceKm: 0.5,
        recommendedTransition: "walk"
      }
    ],
    storyTitle: "Rebuilding Faith",
    history: "Constructed during Agadir's modern post-1960 rebirth, the Mosque is named after Sultan Mohammed V, who led the nation's efforts to rebuild the city.",
    culturalImportance: "It serves as the main spiritual compass and central community anchor for the Souss region.",
    localLegend: "Residents say that when the first call to prayer echoed from this minaret, it symbolized the definitive rebirth of Agadir.",
    funFact: "The wood used inside the mosque was hand-selected cedar brought in from the Middle Atlas forests.",
    officialWebsite: "https://www.habous.gov.ma",
    ticketWebsite: "",
    faq: [
      {
        q: "Can non-Muslims enter the prayer hall?",
        a: "No. In Morocco, only the Hassan II Mosque in Casablanca permits non-Muslims inside the prayer hall. The Grande Mosquée Mohammed V is appreciated from its courtyard and exterior perimeter."
      },
      {
        q: "What is the dress code for walking near the mosque?",
        a: "Out of cultural and religious respect, both men and women should have their shoulders, chest, and knees covered."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-musee-memoire",
    city: "agadir",
    name: "Musée de la Mémoire d’Agadir",
    neighborhood: "Talborjt (Inside Jardin d'Olhão)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["authentic", "cultural-tour", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["historic-memorial", "hidden-gem", "moving-experience", "educational"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 45,
    distanceFromCenterKm: 1.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "level_entry_doorway", "flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: true,
    openingHours: "09:00 AM - 12:30 PM & 03:00 PM - 06:00 PM (Monday to Saturday; Closed Sundays)",
    openingHoursStructured: [
      {
        dayOfWeek: 1,
        open: "09:00",
        close: "18:00"
      },
      {
        dayOfWeek: 2,
        open: "09:00",
        close: "18:00"
      },
      {
        dayOfWeek: 3,
        open: "09:00",
        close: "18:00"
      },
      {
        dayOfWeek: 4,
        open: "09:00",
        close: "18:00"
      },
      {
        dayOfWeek: 5,
        open: "09:00",
        close: "18:00"
      },
      {
        dayOfWeek: 6,
        open: "09:00",
        close: "18:00"
      }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "restrooms", "garden_seating_access", "historical_documentation"],
    restrictions: [
      "No flash photography inside the photo exhibition galleries",
      "Maintain respectful quietness (the museum commemorates over 15,000 earthquake victims)",
      "No food or open beverages permitted inside exhibition halls"
    ],
    healthContraindications: [],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Located within the southwestern pavilion of Jardin d'Olhão, this moving memorial museum chronicles the catastrophic earthquake of February 29, 1960. It showcases archival black-and-white photography, foreign press dispatches, and documentation tracing the royal decree and international effort that rebuilt modern Agadir.",
    shortValueProp: "A deeply moving photo archive documenting the 1960 earthquake and rebirth of Agadir",
    googleRating: 4.3,
    reviewCount: 490,
    googleReviewCount: 310,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 120,
    viatorRating: 4.2,
    viatorReviewCount: 35,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 25,
    tip: "The museum operates on a split shift (closing from 12:30 PM to 3:00 PM) and is closed all day Sunday. Entry is cash-only (20 MAD for adults, 10 MAD for students).",
    tips: [
      "Plan for the split schedule: open 09:00 to 12:30 and 15:00 to 18:00; closed on Sundays.",
      "Bring cash (20 MAD bills or coins); card payment is not accepted at the museum counter.",
      "Combine this directly with a walk through the surrounding Jardin d'Olhão (access is via the corner of Avenue des FAR and Avenue Kennedy).",
      "The museum keeper often speaks French and Arabic and can offer vivid historical context regarding specific survivor photos upon request."
    ],
    highlights: [
      "Rare historical photographs of Agadir's old Talborjt and Founti quarters before 1960",
      "Heart-wrenching international news clippings from the days immediately following the 15-second disaster",
      "Architectural blueprints and royal proclamations detailing the post-earthquake reconstruction",
      "Peaceful courtyard setting inside the greenery of Jardin d'Olhão"
    ],
    emotionalBenefits: ["Reflective", "Moving", "Historical", "Educational"],
    bestTimeToVisit: "Morning around 10:00 AM before the midday closure",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Standard Adult Entry",
        price: 20,
        currency: "MAD",
        category: "adult",
        conditions: "General visitor admission"
      },
      {
        name: "Student & Child (7–17)",
        price: 10,
        currency: "MAD",
        category: "student",
        conditions: "Valid student card or ID required"
      },
      {
        name: "Child (Under 7)",
        price: 0,
        currency: "MAD",
        category: "infant",
        conditions: "Free admission"
      }
    ],
    discountsInfo: "50% discount for students with valid educational ID; children under 7 enter free.",
    includedServices: ["Admission to photo galleries, document archives, and courtyard exhibits"],
    excludedServices: [
      "Private guided tour (informal keeper commentary is welcomed with an optional tip)",
      "Transportation"
    ],
    hiddenCostsInfo: "Cash only for tickets; bring exact change (10 or 20 MAD coins/notes).",
    address: "Corner of Avenue des FAR & Avenue du Président Kennedy (Inside Jardin d'Olhão), Talborjt, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Musee+de+la+Memoire+d%27Agadir",
    parkingInfo: "Curbside parking along Avenue des FAR (2 MAD/hr)",
    publicTransportInfo: "Easy walking distance from anywhere in Talborjt; red petit taxi stop nearby",
    dressCode: "Respectful casual attire",
    equipmentNeeded: ["Camera (flash strictly off)", "Cash Dirhams for entrance fee"],
    fitnessLevel: "Relaxed (Small, flat, single-level exhibition hall)",
    ageRestrictions: "All ages welcome; highly recommended for school-aged children and history enthusiasts",
    safetyNotes: "Quiet, peaceful memorial environment; silence phones upon entering",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Culture Seeker",
        quote: "A small but deeply moving museum. It completely changed how I viewed the modern city of Agadir.",
        author: "Claire B.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Jardin d'Olhão",
        type: "visit",
        id: "agadir-jardin-olhao",
        distanceKm: 0.05,
        recommendedTransition: "walk"
      },
      {
        name: "Grande Mosquée Mohammed V",
        type: "visit",
        id: "agadir-grande-mosquee",
        distanceKm: 0.5,
        recommendedTransition: "walk"
      }
    ],
    storyTitle: "The Memory of the Phoenix",
    history: "The museum was established to preserve the visual archives of the devastating 1960 earthquake that leveled Agadir in under fifteen seconds, serving as a monument to those who were lost and those who rebuilt the city.",
    culturalImportance: "A crucial historical repository for the people of Agadir, representing the Souss region's resilience, recovery, and modern rebirth.",
    localLegend: "It is said that the old trees in the museum's courtyard were planted using seeds saved from pre-earthquake gardens, carrying the soul of the old city.",
    funFact: "The building itself is designed around a traditional courtyard, providing a quiet space of silence and contemplation in the heart of Talborjt.",
    officialWebsite: "https://explore-agadirsoussmassa.com",
    ticketWebsite: "",
    faq: [
      {
        q: "How long does a visit typically take?",
        a: "The museum is compact; you can thoroughly inspect the photographs, maps, and survivor accounts in 30 to 45 minutes."
      },
      {
        q: "Where is the entrance located?",
        a: "The entrance is situated inside the southwest corner of Jardin d'Olhão, accessible from Avenue des FAR or Avenue President Kennedy."
      }
    ],
    contactPhone: "+212 528-841122",
  }
];
