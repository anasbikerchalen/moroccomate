/**
 * =========================================================================
 * [CHEFCHAOUEN] THINGS TO DO — NATURE & ADVENTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/chefchaouen/index.ts
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
export const chefchaouenNatureThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-ras-el-maa",
    city: "chefchaouen",
    name: "Ras El Maa Spring",
    neighborhood: "Ras El Maa",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "quiet-mystic", "nomad"],
    tags: [
      "authentic",
      "instagrammable",
      "nature",
      "off-the-beaten-path",
      "private",
      "relaxed",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
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
    hasWiFi: false,
    nearMedina: true,
    goodForRain: true,
    openingHours: "Open 24/7 (Best 08:00 AM - 06:00 PM)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A crystal-clear mountain spring at the eastern edge of the medina where icy water cascades from the Rif into stone channels lined with washing stones, women doing laundry, and small waterfalls shaded by weeping willows. It is the lifeline of Chefchaouen and a serene counterpoint to the busy blue alleys.",
    shortValueProp: "The icy mountain spring that breathes life into the Blue Pearl",
    googleRating: 4.6,
    reviewCount: 4000,
    googleReviewCount: 2980,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 720,
    viatorRating: 4.4,
    viatorReviewCount: 180,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 120,
    tip: "Sit on the stones near the lower waterfall at 09:00 AM to watch local women wash wool and rugs in the traditional way. Always ask before photographing people.",
    tips: ["not available"],
    highlights: [
      "Crystal-clear spring water cascading from the Rif Mountains",
      "Traditional stone washing platforms used daily by local women",
      "Small waterfalls shaded by weeping willows and fig trees",
      "Stone bridge crossing with medina rooftops as backdrop"
    ],
    emotionalBenefits: ["Peaceful", "Grounded", "Sensory"],
    bestTimeToVisit: "Morning (08:00 AM - 10:00 AM) to see traditional washing activity",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Spring water is strongest; summer offers cool respite)",
    ticketTypes: [
      {
        name: "Free Public Spring",
        price: 0
      }
    ],
    discountsInfo: "Completely free public access",
    includedServices: ["Self-guided access to the spring, waterfalls, and walking paths"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None; bring small cash if you want to buy mint tea from the small kiosk nearby",
    address: "Ras El Maa, Eastern edge of Medina, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20El%20Maa%20Spring%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Parking at the eastern medina entrance; then a 5-minute walk",
    publicTransportInfo: "Walkable from Plaza Uta el-Hammam in 10 minutes",
    dressCode: "Comfortable casual clothing; modest dress appreciated near local washing activity",
    equipmentNeeded: ["Non-slip shoes (wet stones)", "Camera", "Light jacket (cool microclimate)"],
    fitnessLevel: "Relaxed (Flat paved and stone path along the spring)",
    ageRestrictions: "All ages welcome; supervise children near water edges",
    safetyNotes: "Stones are slippery when wet; do not drink untreated spring water despite its clarity",
    languages: ["Arabic (Darija)", "Tarifit", "French", "Spanish"],
    visitorQuotes: [
      {
        type: "Quiet Mystic",
        quote: "The sound of the spring and the women singing while they wash wool was the most peaceful moment of my entire Morocco trip.",
        author: "Guillaume L. from Paris",
        rating: 5
      },
      {
        type: "Photography Trip",
        quote: "Late afternoon light filtering through the willows onto the cascading water is a photographer's dream. Bring a polarizing filter.",
        author: "Nadia F. from Berlin",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Bab El Onsar Gate",
        type: "visit",
        id: "chefchaouen-bab-el-ansar"
      },
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      }
    ],
    storyTitle: "The Source of Life",
    history: "Ras El Maa (literally 'Head of the Water') is the spring that has sustained Chefchaouen since its founding in 1471. Ali Ben Rachid chose this precise location because of the spring's reliability, and for five centuries it has supplied drinking water, laundry, and irrigation to the medina.",
    culturalImportance: "The spring is the spiritual and practical heart of Jbalan daily life. Local women still gather here daily to wash wool, rugs, and clothing, preserving a thousand-year-old social ritual that no modern laundromat has replaced.",
    localLegend: "Locals believe the spring was discovered by a Sufi saint who struck the rock with his staff and water gushed forth. The largest stone by the lower waterfall is said to bear his footprint.",
    funFact: "The water temperature stays at a near-constant 14°C (57°F) year-round, making it the coolest spot in Chefchaouen during summer heatwaves and the coldest in winter frost.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the water safe to drink?",
        a: "Locals do drink from the upper spring, but travelers with sensitive stomachs should treat or boil it first. Bottled water is safer for short-term visitors."
      },
      {
        q: "Can I swim in the waterfalls?",
        a: "There are no formal rules against it, but the pools are shallow and the water is icy cold. Local women use the upper platforms for washing, so swim modestly and only in the lower pools."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-bouzafar-lookout",
    city: "chefchaouen",
    name: "Bouzafar Hill Lookout",
    neighborhood: "Bouzafar Hill",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["photographer", "quiet-mystic", "nomad"],
    tags: ["instagrammable", "mountain", "nature", "off-the-beaten-path", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.6,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
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
    hasWiFi: false,
    nearMedina: true,
    goodForRain: false,
    openingHours: "Open 24/7 (Best 06:00 AM - 08:00 PM)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The hillside path and series of small terraces above the medina leading to the Spanish Mosque, lined with olive groves, cacti, and a few small cafés. The lookout points along the way offer progressively wider views of the blue medina and the Rif peaks beyond.",
    shortValueProp: "A peaceful hillside walk above the Blue Pearl with cascading viewpoints",
    googleRating: 4.6,
    reviewCount: 1605,
    googleReviewCount: 1180,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 290,
    viatorRating: 4.4,
    viatorReviewCount: 80,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 55,
    tip: "Stop at the small café halfway up for a mint tea with a view; it's the perfect spot to wait for the sunset crowds to thin at the Spanish Mosque.",
    tips: ["not available"],
    highlights: [
      "Progressively widening panoramic views of the medina and Rif peaks",
      "Olive groves and cacti lining the stone path up the hill",
      "Small terraced cafés with mint tea and almond pastries",
      "Quieter alternative to the Spanish Mosque itself for sunset"
    ],
    emotionalBenefits: ["Scenic", "Peaceful", "Reflective"],
    bestTimeToVisit: "Sunset (05:30 PM - 07:00 PM)",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Spring brings wildflowers; winter offers snow-capped Rif peaks)",
    ticketTypes: [
      {
        name: "Free Hill Path",
        price: 0
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Self-guided walking access along the hillside path"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Mint tea at hillside cafés costs 10-15 MAD",
    address: "Bouzafar Hill, above the Medina, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bouzafar%20Hill%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Parking at Place el-Majzen; then a 15-minute walk up",
    publicTransportInfo: "Walkable from the medina via Bab el-Onsar",
    dressCode: "Comfortable activewear; light layer for cool evenings",
    equipmentNeeded: ["Sturdy shoes with grip", "Camera", "Water bottle"],
    fitnessLevel: "Moderate (Steep cobblestone and dirt path for ~15 minutes)",
    ageRestrictions: "Suitable for ages 8 and up",
    safetyNotes: "Path is unlit after dark; bring a flashlight for the descent",
    languages: ["Arabic (Darija)", "Tarifit", "French", "Spanish"],
    visitorQuotes: [
      {
        type: "Photography Trip",
        quote: "The intermediate viewpoints along the path are actually better than the Spanish Mosque itself, with fewer crowds and cleaner framing.",
        author: "Marcus L. from Berlin",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Spanish Mosque Viewpoint",
        type: "visit",
        id: "chefchaouen-spanish-mosque"
      },
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      }
    ],
    storyTitle: "The Olive Grove Path",
    history: "Bouzafar Hill has been planted with olive trees and cacti since the founding of Chefchaouen. The hillside path was the traditional route for farmers tending the groves and for worshippers walking to the Spanish Mosque before its abandonment.",
    culturalImportance: "The hillside remains an important agricultural zone, with several families still harvesting olives and almonds each autumn. It also serves as the town's principal sunset-viewing promenade.",
    localLegend: "Local elders say that an ancient olive tree halfway up the path marks the grave of a Sufi saint whose blessings make the medina immune to earthquakes.",
    funFact: "The cacti lining the path were originally planted as a natural livestock fence to keep goats out of the olive groves; their fruit (karmus en-Nshala) is harvested in late summer.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the path safe at night?",
        a: "It is generally safe, but unlit. Bring a flashlight and walk with a companion for the descent after sunset."
      }
    ],
    contactPhone: "",
  }
];
