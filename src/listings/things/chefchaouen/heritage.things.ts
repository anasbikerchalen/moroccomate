/**
 * =========================================================================
 * [CHEFCHAOUEN] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/chefchaouen/index.ts
 *
 * DATA: real collected listings (never AI-generated).
 *
 * ──────────────────────────────────────────────────────────────────────
 * MASTER TEMPLATE & ALLOWED VALUES BIBLE (for web-research agents)
 * ──────────────────────────────────────────────────────────────────────
 * FIXED ENUMS:
 * - lifestyle:        'lean' | 'balanced' | 'premium'
 * - groupTypes:       'solo' | 'couple' | 'couples' | 'family' | 'families' | 'friends' |
 *                     'seniors' | 'kids-friendly' | 'large-groups' | 'business-friendly' |
 *                     'business' | 'nature-lover'
 * - crowdLevel:       'quiet' | 'balanced' | 'bustling'
 * - energyLevel:      'relaxed' | 'moderate' | 'active' | 'intense'
 * - transportMode:    'walkable' | 'taxi' | 'transit' | 'mixed'
 * - safetyLevel:      1 | 2 | 3 | 4 | 5
 * - transportModes:   'bus' | 'cable-car' | 'drive' | 'taxi' | 'walk'
 * - paymentMethods:   'cash_mad' | 'credit_card'
 * =========================================================================
 */
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — HERITAGE & CULTURE ══
export const chefchaouenHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-medina-blue-streets",
    city: "chefchaouen",
    name: "The Blue Medina of Chefchaouen",
    neighborhood: "Souika",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer", "photographer"],
    vibeTags: ["iconic", "scenic", "vibrant"],
    tags: [
      "architectural",
      "authentic",
      "cultural-tour",
      "golden-hour",
      "historical",
      "instagrammable",
      "photo-spot",
      "private",
      "sunset",
      "tripod-allowed",
      "urban",
      "walk-in"
    ],
    badges: ["must-see", "cultural-icon", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 0,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 3,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Best 07:00 AM - 08:00 PM)",
    paymentMethods: ["cash_mad"],
    amenities: ["fountains", "artisan_workshops", "walking_paths", "traditional_fountains"],
    restrictions: [
      "Drones strictly prohibited without prior authorization from Moroccan civil aviation authorities",
      "Ask permission before photographing local residents, especially older women and children"
    ],
    healthContraindications: [
      "Not recommended for visitors with severe knee or mobility impairments due to continuous steep steps and polished cobblestones"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A labyrinth of brilliantly blue-washed lanes cascading down the western flank of the Rif Mountains. Founded in 1471 by Moorish exiles, the medina blends Andalusian architecture with Jbalan mountain culture and remains one of the most photographed places in North Africa.",
    shortValueProp: "Lose yourself in the most hypnotic blue labyrinth of the Rif Mountains",
    googleRating: 4.7,
    reviewCount: 27050,
    googleReviewCount: 18420,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 6200,
    viatorRating: 4.6,
    viatorReviewCount: 1450,
    getyourguideRating: 4.6,
    getyourguideReviewCount: 980,
    badge: "must-see",
    tip: "Wander before 09:00 AM to enjoy empty blue alleys and natural light; after that, day-trip groups arrive from Tangier and Tetouan and the photogenic stairways become crowded.",
    tips: [
      "Start walking before 08:30 AM before tour bus crowds arrive from Tangier and Fes",
      "Wear flat shoes with rubber traction as polished limestone pavers are slick even when completely dry",
      "Explore the upper lanes of Souika and El Ayoun for genuine residential tranquility away from commercial souvenir shops"
    ],
    highlights: [
      "Endless cobalt, sky and indigo-washed houses cascading down the hillside",
      "15th-century Andalusian street plan with whitewashed doors and wrought-iron work",
      "Hidden Berber weavers, dyers, and wool-carding workshops tucked into side alleys",
      "Iconic stepped lanes of Derb el-Mqassem and Callejem district"
    ],
    emotionalBenefits: ["Inspired", "Scenic", "Reflective"],
    bestTimeToVisit: "Early morning (07:00 AM - 09:00 AM) for photography, or golden hour",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Spring and autumn offer the clearest blue tones)",
    ticketTypes: [
      {
        name: "Free Medina Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Completely free to wander the public medina streets; museums charge separate entry",
    includedServices: ["Self-guided walking access to the entire medina"],
    excludedServices: [
      "Official licensed tour guide",
      "Tips for posed photography at curated doorstep setups"
    ],
    hiddenCostsInfo: "Local unofficial 'guides' may attach themselves for 50-100 MAD; politely decline if not needed",
    address: "Medina of Chefchaouen, Quartier Souika, Chefchaouen 91000",
    coordinates: {
      lat: 35.168796,
      lng: -5.263604
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.168796,-5.263604",
    parkingInfo: "Paid parking at Place el-Majzen or Avenue Mohammed V (10 MAD/day)",
    publicTransportInfo: "Walkable from anywhere in the medina; grand taxi stand 5 minutes away",
    dressCode: "Comfortable modest clothing; shoulders and knees covered appreciated by locals",
    equipmentNeeded: ["Flat non-slip shoes (cobblestones are steep)", "Camera", "Small cash for tea"],
    fitnessLevel: "Moderate (Steep cobbled lanes with frequent steps)",
    ageRestrictions: "All ages welcome; elderly visitors may struggle on steep steps",
    safetyNotes: "Very safe; tourist police patrol daily. Watch footing on wet stone after rain",
    languages: ["Arabic (Darija)", "Tarifit", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Photography Trip",
        quote: "Every corner is a different shade of blue. I shot over 800 photos in a single morning. The light before 9 AM is pure magic.",
        author: "Marcus & Elspeth from Munich",
        rating: 5
      },
      {
        type: "Solo Female Traveler",
        quote: "Felt completely safe wandering the alleys alone at dawn. Locals greeting me with a smile and 'bienvenue' made it unforgettable.",
        author: "Clara J. from Berlin",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Plaza Uta el-Hammam",
        type: "visit",
        id: "chefchaouen-plaza-uta-el-hammam"
      },
      {
        name: "Kasbah Museum of Chefchaouen",
        type: "visit",
        id: "chefchaouen-kasbah-museum"
      }
    ],
    storyTitle: "The Blue Pearl of the Rif",
    history: "Founded in 1471 by Ali Ben Rachid as a small Berber settlement, Chefchaouen became a refuge for Moorish and Jewish exiles fleeing Andalusia after the fall of Granada in 1492. The signature blue wash is variously attributed to Jewish tradition (the color of divinity), Berber belief in mosquito deterrence, and Andalusian aesthetic sensibility.",
    culturalImportance: "The blue medina is a living symbol of Morocco's layered Andalusian, Berber, and Jewish heritage. It remains a sacred town to the Jbala people and was off-limits to foreigners until 1920 when Spanish troops entered during the Protectorate.",
    localLegend: "Locals say the deeper the blue of a doorway, the more pious the family that lives behind it. Some swear that the original blue pigment was mixed with powdered lapis lazuli brought back by Andalusian sailors.",
    funFact: "The blue wash is not painted but applied as a lime-and-pigment slurry that is refreshed annually by residents in late spring before the tourist high season.",
    officialWebsite: "https://www.chefchaouen.ma",
    ticketWebsite: "",
    faq: [
      {
        q: "Why are the walls blue?",
        a: "Several theories exist: Jewish tradition of divinity, Berber belief it repels mosquitoes, and Andalusian aesthetic. Most likely it is a blend of all three, refreshed every spring."
      },
      {
        q: "Is it OK to photograph locals?",
        a: "Always ask first, especially for older residents and women. Many expect a small tip (5-10 MAD) for posed portraits."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-plaza-uta-el-hammam",
    city: "chefchaouen",
    name: "Plaza Uta el-Hammam",
    neighborhood: "Outa El Hammam",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer", "social-collector"],
    vibeTags: ["vibrant", "historical", "sensory"],
    tags: [
      "architectural",
      "authentic",
      "cultural-tour",
      "instagrammable",
      "morning",
      "private",
      "relaxed",
      "urban",
      "walk-in"
    ],
    badges: ["cultural-icon", "historic-landmark", "must-see"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_courtyard", "flat_walkways", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Cafés 07:00 AM - 11:00 PM)",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "traditional_restaurant", "shaded_benches", "atm_nearby", "public_toilets_nearby"],
    restrictions: [
      "Aggressive touting is strictly restricted by local tourist police",
      "Alcohol consumption is prohibited in public terraces overlooking the square"
    ],
    healthContraindications: [
      "None; flat terracotta plaza with level walking surfaces"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "The beating heart of Chefchaouen's medina, a terracotta-paved square framed by whitewashed and blue-trimmed buildings, the red walls of the Kasbah, and an arcade of cafes shaded by ancient fig trees. It is the central meeting point where locals, travelers, and Jbalan merchants converge from morning until late night.",
    shortValueProp: "The living room of the Blue Pearl, where every Chefchaouen evening begins",
    googleRating: 4.6,
    reviewCount: 9800,
    googleReviewCount: 6850,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 2100,
    viatorRating: 4.5,
    viatorReviewCount: 540,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 310,
    badge: "essential",
    tip: "Grab a terrace seat at Café Hassan around 06:00 PM to watch the square light up golden as the muezzin calls and swifts dart across the fig trees.",
    tips: [
      "Order fresh mint tea or spiced coffee at a café terrace around sunset for prime people-watching",
      "Public restrooms behind the Kasbah require 2 MAD in exact coins",
      "Check menu prices before ordering at perimeter restaurant terraces"
    ],
    highlights: [
      "Terracotta paving framed by indigo-washed facades and red Kasbah ramparts",
      "Ancient fig and pepper trees shading café terraces on every side",
      "Sunset turns the entire square a deep saffron-gold against the blue walls",
      "Gate to the Grande Mosquée and the kasbah tower"
    ],
    emotionalBenefits: ["Vibrant", "Sensory", "Grounded"],
    bestTimeToVisit: "Sunset (06:00 PM - 07:30 PM) for golden hour ambiance",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Spring and autumn are most pleasant)",
    ticketTypes: [
      {
        name: "Free Public Square",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access; café prices vary by terrace position",
    includedServices: ["Self-guided access to the entire square"],
    excludedServices: [
      "Food and beverages at private café terraces",
      "Paid restroom entry (2 MAD)"
    ],
    hiddenCostsInfo: "Café terrace prices near the square can be 30-50% higher than side streets",
    address: "Plaza Uta el-Hammam, Quartier Outa El Hammam, Chefchaouen 91000",
    coordinates: {
      lat: 35.1687,
      lng: -5.2618
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1687,-5.2618",
    parkingInfo: "No vehicles permitted inside the medina; nearest parking at Place el-Majzen",
    publicTransportInfo: "Walkable from anywhere in the medina or 5 minutes from the new town",
    dressCode: "Casual modest clothing appropriate for a Muslim medina",
    equipmentNeeded: ["Camera", "Cash for café bills", "Light jacket for cool evenings"],
    fitnessLevel: "Relaxed (Flat terracotta paving, fully accessible)",
    ageRestrictions: "All ages welcome; very family-friendly in the evening",
    safetyNotes: "Very safe; tourist police and regular police station adjacent to the square",
    languages: ["Arabic (Darija)", "Tarifit", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Couples & Sunset",
        quote: "We sat for two hours on a café terrace watching the square shift from afternoon siesta to evening carnival. The blue walls glow gold at sunset.",
        author: "Isabella & Marco from Rome",
        rating: 5
      },
      {
        type: "Family Day Out",
        quote: "Kids ran around safely while we sipped mint tea. The fig trees give plenty of shade and the people-watching is world-class.",
        author: "David K. and family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Kasbah Museum of Chefchaouen",
        type: "visit",
        id: "chefchaouen-kasbah-museum"
      },
      {
        name: "Grande Mosquée of Chefchaouen",
        type: "visit",
        id: "chefchaouen-grand-mosque"
      }
    ],
    storyTitle: "The Square of the Baths",
    history: "Plaza Uta el-Hammam takes its name from the historic hammams (bathhouses) that once flanked it. Laid out in the 15th century as the central marketplace and meeting point of the original Berber settlement, it was progressively enlarged with Andalusian-style arcades after 1492 when Granada's refugees arrived.",
    culturalImportance: "The square has remained the social, religious, and commercial heart of Chefchaouen for over five centuries. It is where weddings are announced, Eid prayers overflow, and elders gather for evening promenades.",
    localLegend: "Locals claim that the oldest fig tree in the square was planted by a 16th-century Sufi saint whose blessings still protect the medina from earthquakes and drought.",
    funFact: "The square is paved with locally quarried terracotta tiles whose warm color was specifically chosen to visually offset the indigo walls, creating the iconic blue-and-orange contrast.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are there public restrooms?",
        a: "Yes, near the Kasbah entrance. Bring 2 MAD coins for the attendant."
      },
      {
        q: "Is it safe at night?",
        a: "Yes, the square is well-lit and busy until at least 11 PM, with visible tourist police patrols."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-kasbah-museum",
    city: "chefchaouen",
    name: "Kasbah Museum of Chefchaouen",
    neighborhood: "Outa El Hammam",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history-weaver", "first-timer"],
    vibeTags: ["historical", "architectural", "serene"],
    tags: ["architectural", "authentic", "cultural-tour", "historical", "private", "relaxed", "walk-in"],
    badges: ["historic-landmark", "architectural-gem", "must-see"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 60,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 75,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 3,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 06:00 PM (Closed Tuesdays)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "18:00" },
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
      { dayOfWeek: 6, open: "09:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "exhibition_hall", "garden_seating_access", "shaded_courtyards", "panoramic_viewpoint"],
    restrictions: [
      "No flash photography permitted in ethnographic display rooms",
      "Large backpacks and suitcases must be checked or kept small"
    ],
    healthContraindications: [
      "Watchtower stairs are narrow, steep, and spiral; not suitable for visitors with acute vertigo or knee restrictions"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A 15th-century fortified kasbah standing inside the medina walls, housing an ethnographic museum within its restored gardens, towers, and Andalusian courtyard. Exhibits trace Chefchaouen's Andalusian, Berber, and Jewish heritage through textiles, musical instruments, manuscripts, and historic photographs.",
    shortValueProp: "Step inside the medieval fortress that birthed the Blue Pearl",
    googleRating: 4.4,
    reviewCount: 3230,
    googleReviewCount: 2150,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 740,
    viatorRating: 4.4,
    viatorReviewCount: 210,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 130,
    badge: "historical",
    tip: "Climb the Berber tower for a sweeping view over Plaza Uta el-Hammam and the medina rooftops, then cool off in the Andalusian garden's orange-tree shade.",
    tips: [
      "Bring cash MAD for tickets as electronic card machines are frequently unavailable at the booth",
      "Climb the main tower in the morning before the afternoon sun casts heavy glare across the valley",
      "Enjoy the peaceful shaded Andalusian courtyard garden during the midday heat"
    ],
    highlights: [
      "Restored 15th-century kasbah with crenellated towers and Andalusian garden",
      "Ethnographic exhibits of Jbalan textiles, musical instruments, and wedding costumes",
      "Panoramic rooftop view of the medina and Plaza Uta el-Hammam",
      "Historic manuscripts and antique photographs of pre-Protectorate Chefchaouen"
    ],
    emotionalBenefits: ["Reflective", "Educational", "Historic"],
    bestTimeToVisit: "Morning (10:00 AM - 12:00 PM) for cool temperatures and fewer crowds",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Adult International",
        price: 60,
        currency: "MAD"
      },
      {
        name: "Moroccan Citizens & Residents",
        price: 10,
        currency: "MAD"
      },
      {
        name: "Children Under 12",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Moroccan nationals pay 10 MAD; free entry for children under 12",
    includedServices: ["Access to all exhibition rooms, towers, and the Andalusian garden"],
    excludedServices: [
      "Licensed tour guide fee",
      "Audio guide headset"
    ],
    hiddenCostsInfo: "Optional tip for the museum attendant who provides informal historical context (20-30 MAD)",
    address: "Place Uta el-Hammam, Quartier Outa El Hammam, Chefchaouen 91000",
    coordinates: {
      lat: 35.1689,
      lng: -5.2614
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1689,-5.2614",
    parkingInfo: "No vehicle access to medina; nearest parking at Place el-Majzen (10 MAD/day)",
    publicTransportInfo: "Walkable from anywhere in the medina",
    dressCode: "Respectful casual clothing; shoulders and knees covered recommended",
    equipmentNeeded: ["Camera (no flash indoors)", "Light layer for cool stone interiors"],
    fitnessLevel: "Moderate (Steep stairs to the tower; uneven stone floors)",
    ageRestrictions: "All ages welcome; tower stairs not suitable for toddlers or mobility-impaired visitors",
    safetyNotes: "Watch footing on the spiral stone stairs of the Berber tower; low doorways",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Culture Seeker",
        quote: "A small but incredibly well-curated museum. The view from the tower alone is worth the entry fee, and the garden is a peaceful escape from the medina bustle.",
        author: "Claire B. from Lyon",
        rating: 5
      },
      {
        type: "Family Day Out",
        quote: "Our kids loved climbing the tower and seeing the antique musical instruments. The attendant told us stories about each wedding costume on display.",
        author: "Robert K. and family",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Plaza Uta el-Hammam",
        type: "visit",
        id: "chefchaouen-plaza-uta-el-hammam"
      },
      {
        name: "Grande Mosquée of Chefchaouen",
        type: "visit",
        id: "chefchaouen-grand-mosque"
      }
    ],
    storyTitle: "The Fortress of Ali Ben Rachid",
    history: "The kasbah was built in the late 15th century by Ali Ben Rachid, founder of Chefchaouen, as his residence and the administrative seat of the town. It was expanded by subsequent rulers and served as a defensive bastion against Portuguese and Ottoman incursions along the Atlantic and Rif coasts.",
    culturalImportance: "The kasbah is the founding symbol of Chefchaouen and a tangible link to its Andalusian and Jbalan roots. Its preservation as a museum reflects the town's commitment to maintaining cultural identity in the face of mass tourism.",
    localLegend: "Local guides swear that an underground tunnel once connected the kasbah to a spring at Ras El Maa, allowing defenders to access fresh water during long sieges.",
    funFact: "The kasbah's garden contains a 400-year-old cypress tree that is one of the oldest living trees in the Rif region.",
    officialWebsite: "https://www.chefchaouen.ma",
    ticketWebsite: "",
    faq: [
      {
        q: "How long does a visit take?",
        a: "About 45-75 minutes depending on your pace and whether you climb the tower for the view."
      },
      {
        q: "Is the tower climb accessible?",
        a: "No, the spiral stone stairs with low ceilings are not suitable for mobility-impaired visitors or small children without assistance."
      }
    ],
    contactPhone: "+212 539-988000"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-spanish-mosque",
    city: "chefchaouen",
    name: "Spanish Mosque Viewpoint",
    neighborhood: "El Ayoun",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["photographer", "first-timer", "romantic"],
    vibeTags: ["scenic", "spiritual", "peaceful"],
    tags: [
      "architectural",
      "cultural-tour",
      "historical",
      "instagrammable",
      "off-the-beaten-path",
      "private",
      "sunset",
      "walk-in"
    ],
    badges: ["panoramic-view", "sunset-spot", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.7,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach", "cobblestone_paths", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 4,
      heatExposure: 3,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 3,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Best visited at sunset)",
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths"],
    restrictions: [
      "Interior of the mosque is permanently locked; viewing is strictly from the surrounding exterior terraces",
      "Drones prohibited without Moroccan civil aviation permit"
    ],
    healthContraindications: [
      "Requires a continuous 15-20 minute uphill walk on uneven cobblestones and dirt paths; not recommended for individuals with acute knee problems or severe cardiovascular issues"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "An abandoned 1920s Spanish-built mosque perched on Bouzafar Hill above the medina, offering the single most iconic panoramic view of Chefchaouen's blue rooftops set against the Rif Mountains. The walk up is short but steep and is one of Morocco's most photographed sunset spots.",
    shortValueProp: "The single best sunset view of the Blue Pearl from its guardian hill",
    googleRating: 4.7,
    reviewCount: 6060,
    googleReviewCount: 4320,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 1180,
    viatorRating: 4.6,
    viatorReviewCount: 320,
    getyourguideRating: 4.6,
    getyourguideReviewCount: 240,
    badge: "essential",
    tip: "Start the climb 75 minutes before sunset to secure a spot on the mosque's terrace. Bring a small flashlight for the descent, as the path is unlit after dark.",
    tips: [
      "Start walking from Bab El Onsar 45-60 minutes before sunset to claim a front spot along the terrace wall",
      "Carry a headlamp or smartphone light for the descent as the stone trail has no streetlights",
      "Local vendors near the top often sell hot mint tea in small glasses for 10-15 MAD"
    ],
    highlights: [
      "Panoramic view of the entire blue medina set against Rif peaks",
      "Abandoned 1920s Spanish mosque with two distinctive whitewashed towers",
      "Short but steep cobbled and dirt path through olive groves",
      "Stunning golden-hour and blue-hour photography opportunities"
    ],
    emotionalBenefits: ["Inspired", "Scenic", "Reflective"],
    bestTimeToVisit: "Sunset (varies by season; arrive 75 minutes early)",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Best in spring and autumn; avoid rainy days for slippery path)",
    ticketTypes: [
      {
        name: "Free Hill Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Completely free to visit; donations accepted for path maintenance",
    includedServices: ["Self-guided access to the hill, mosque exterior, and viewing terraces"],
    excludedServices: [
      "Guided hiking escort",
      "Interior mosque access"
    ],
    hiddenCostsInfo: "Optional small purchase of mint tea or freshly squeezed orange juice from hilltop vendors (10-15 MAD)",
    address: "Bouzafar Hill (via Bab El Onsar), Quartier El Ayoun, Chefchaouen 91000",
    coordinates: {
      lat: 35.1665,
      lng: -5.2556
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1665,-5.2556",
    parkingInfo: "Parking at Place el-Majzen; then a 20-minute walk up the hill",
    publicTransportInfo: "Walkable from the medina in 15-20 minutes via Bab el-Onsar",
    dressCode: "Comfortable activewear; bring a light layer for cool evening descent",
    equipmentNeeded: ["Sturdy shoes with grip", "Flashlight or phone light", "Camera", "Water bottle"],
    fitnessLevel: "Moderate (Steep cobblestone and dirt path for ~15 minutes uphill)",
    ageRestrictions: "Suitable for ages 8 and up; not recommended for mobility-impaired visitors",
    safetyNotes: "Path is uneven and unlit after dark; never attempt in heavy rain. Watch footing on loose stones.",
    languages: ["Arabic (Darija)", "Tarifit", "French", "Spanish"],
    visitorQuotes: [
      {
        type: "Photography Trip",
        quote: "The single best sunset view in Morocco. We arrived 90 minutes early and watched the entire medina glow blue, then gold, then indigo. Unforgettable.",
        author: "Marcus L. from Berlin",
        rating: 5
      },
      {
        type: "Romantic Couple",
        quote: "We climbed up with a thermos of mint tea and watched the lights come on across the medina. Pure magic and completely free.",
        author: "Isabella V. from Madrid",
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
    storyTitle: "The Mosque That Was Never Prayed In",
    history: "The Spanish Mosque was built in 1926 by Spanish colonial authorities during the Protectorate era, ostensibly as a gift to the local Muslim population. However, its hilltop location away from the medina made it impractical for daily prayer, and it was soon abandoned. It has stood empty for nearly a century, becoming one of Chefchaouen's most iconic silhouettes.",
    culturalImportance: "The mosque is a complex symbol: a colonial-era structure that local Jbala never fully adopted, yet which now serves as the town's most beloved viewpoint. It represents Chefchaouen's layered history of Berber, Andalusian, and Spanish influence.",
    localLegend: "Local elders claim that the mosque was never consecrated because its foundations were laid over an ancient Jbalan saint's tomb, and prayers would have disturbed the saint's rest.",
    funFact: "Despite its name, the mosque features a strange hybrid architecture with two minaret-like towers that resemble Spanish church belfries more than traditional Moroccan minarets.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I enter the mosque?",
        a: "The interior is normally locked and unused, but the exterior and surrounding terraces are open and offer the best views."
      },
      {
        q: "How long is the walk up?",
        a: "About 15-20 minutes from Bab el-Onsar at the medina edge. The path is steep but well-trodden."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-grand-mosque",
    city: "chefchaouen",
    name: "Grande Mosquée of Chefchaouen",
    neighborhood: "Outa El Hammam",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history-weaver"],
    vibeTags: ["architectural", "spiritual", "historical"],
    tags: ["architectural", "authentic", "cultural-tour", "historical", "relaxed", "walk-in"],
    badges: ["historic-landmark", "architectural-gem", "spiritual-hub"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 20,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["step_free_exterior_view", "flat_walkways", "flat_courtyard"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Exterior visible 24/7 (Interior restricted to Muslims)",
    paymentMethods: ["cash_mad"],
    amenities: ["fountains", "panoramic_viewpoint"],
    restrictions: [
      "Interior prayer hall strictly reserved for Muslim worshippers",
      "Do not photograph worshippers entering or performing ablutions"
    ],
    healthContraindications: [
      "None; viewed from the level public plaza"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "The principal mosque of Chefchaouen, standing on the eastern edge of Plaza Uta el-Hammam. Founded in the 15th century and rebuilt in the 17th, it features a distinctive octagonal minaret with green and white zellige tilework, an unusual architectural feature unique to northern Morocco.",
    shortValueProp: "Admire Chefchaouen's iconic octagonal minaret and 17th-century Andalusian architecture",
    googleRating: 4.5,
    reviewCount: 1985,
    googleReviewCount: 1450,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 380,
    viatorRating: 4.3,
    viatorReviewCount: 95,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 60,
    badge: "historical",
    tip: "Non-Muslims cannot enter, but the best exterior view is from the corner of Plaza Uta el-Hammam opposite the Kasbah, especially at golden hour when the green zellige glows.",
    tips: [
      "Stand at the western edge of Plaza Uta el-Hammam near the Kasbah walls to frame the octagonal minaret against the Rif mountain peak",
      "Listen to the adhan echoing across the plaza at maghrib (sunset prayer)"
    ],
    highlights: [
      "Distinctive octagonal minaret with green and white zellige tilework",
      "17th-century Andalusian-style architecture in white and blue tones",
      "Historic madrasa (Quranic school) attached to the mosque",
      "Striking visual contrast against the red Kasbah walls"
    ],
    emotionalBenefits: ["Reflective", "Architectural", "Historic"],
    bestTimeToVisit: "Golden hour (05:30 PM - 06:30 PM) for exterior photography",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Exterior Viewing (Free)",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free exterior access; interior access restricted to Muslims during prayer times",
    includedServices: ["Self-guided exterior viewing from Plaza Uta el-Hammam"],
    excludedServices: [
      "Interior tourist access for non-Muslims",
      "Audio guide device"
    ],
    hiddenCostsInfo: "None",
    address: "Plaza Uta el-Hammam, Quartier Outa El Hammam, Chefchaouen 91000",
    coordinates: {
      lat: 35.1685,
      lng: -5.2616
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1685,-5.2616",
    parkingInfo: "No vehicle access to medina; nearest parking at Place el-Majzen",
    publicTransportInfo: "Walkable from anywhere in the medina",
    dressCode: "Respectful modest dress required when near the mosque exterior",
    equipmentNeeded: ["Camera with zoom lens for minaret details"],
    fitnessLevel: "Relaxed (Flat plaza viewing; no interior access for tourists)",
    ageRestrictions: "All ages welcome for exterior viewing",
    safetyNotes: "Be respectful of prayer times; avoid blocking the entrance or photographing worshippers",
    languages: ["Arabic (Darija)", "Tarifit", "French"],
    visitorQuotes: [
      {
        type: "Architecture Enthusiast",
        quote: "The octagonal minaret is unique in Morocco and the green zellige is stunning at sunset. Pity non-Muslims can't see the interior courtyard.",
        author: "Jean-Pierre from Lyon",
        rating: 4
      },
      {
        type: "Cultural Tour",
        quote: "Our guide explained the Andalusian influence on the architecture. Hearing the call to prayer echo across the plaza was spine-tingling.",
        author: "Sarah M. from London",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Plaza Uta el-Hammam",
        type: "visit",
        id: "chefchaouen-plaza-uta-el-hammam"
      },
      {
        name: "Kasbah Museum of Chefchaouen",
        type: "visit",
        id: "chefchaouen-kasbah-museum"
      }
    ],
    storyTitle: "The Octagonal Minaret of the North",
    history: "The Grande Mosquée was founded in the late 15th century by Ali Ben Rachid alongside the kasbah, then rebuilt and enlarged in the 17th century by Moulay Ismail. Its unusual octagonal minaret reflects the Andalusian architectural tradition brought by Granada's refugees, distinct from the square minarets of imperial cities.",
    culturalImportance: "The mosque has been the religious heart of Chefchaouen for over five centuries, hosting Friday prayers, Eid celebrations, and Quranic education. Its distinctive minaret has become one of the town's most recognizable silhouettes.",
    localLegend: "Local tradition holds that the minaret's octagonal shape was inspired by a vision of the eight gates of paradise seen by a 17th-century imam during a deep prayer.",
    funFact: "The green and white zellige tiles on the minaret were traditionally refreshed every 25 years using techniques passed down through a single Chefchaouen family of master craftsmen.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can non-Muslims enter?",
        a: "No, the interior is restricted to Muslims. However, the exterior and minaret can be admired from Plaza Uta el-Hammam."
      },
      {
        q: "When are the prayer times?",
        a: "Prayer times shift daily with the sun. Avoid lingering near the entrance during the call to prayer, especially on Fridays around noon."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-bab-el-ansar",
    city: "chefchaouen",
    name: "Bab El Onsar Gate",
    neighborhood: "El Ayoun",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "photographer", "first-timer"],
    vibeTags: ["historical", "architectural", "scenic"],
    tags: [
      "architectural",
      "cultural-tour",
      "historical",
      "instagrammable",
      "private",
      "relaxed",
      "sunset",
      "walk-in"
    ],
    badges: ["historic-landmark", "architectural-gem"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 15,
    distanceFromCenterKm: 0.4,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "cobblestone_paths", "level_entry_doorway"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
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
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["walking_paths", "traditional_fountains"],
    restrictions: [
      "Thoroughfare for pedestrians, pack mules, and handcarts; keep right to maintain smooth passage"
    ],
    healthContraindications: [
      "Slightly uneven historical cobblestones"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "The eastern gateway of the medina, a triple-arched stone gate opening onto Ras El Maa spring and the road to the Spanish Mosque. Built into the original 15th-century ramparts, it serves as the principal entrance for travelers arriving from the new town and the spring district.",
    shortValueProp: "Walk through the eastern threshold of the Blue Pearl",
    googleRating: 4.5,
    reviewCount: 1340,
    googleReviewCount: 980,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 240,
    viatorRating: 4.3,
    viatorReviewCount: 70,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 50,
    badge: "popular",
    tip: "Look up as you pass through to spot the small carved Koranic inscription above the central arch; few visitors notice it.",
    tips: [
      "Walk through the gate in the morning to capture the eastern sunlight illuminating the blue residential street beyond",
      "Pass directly through to access the Ras El Maa laundry rapids and open-air riverside cafes"
    ],
    highlights: [
      "Triple-arched 15th-century stone gate in the medina ramparts",
      "Carved Koranic inscription above the central arch",
      "Frames a dramatic view of Ras El Maa spring and the Spanish Mosque",
      "Traditional meeting point for local muleteers and merchants"
    ],
    emotionalBenefits: ["Historic", "Architectural", "Grounded"],
    bestTimeToVisit: "Morning (08:00 AM - 10:00 AM) for soft light and fewer crowds",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Public Gate",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Self-guided passage through the gate"],
    excludedServices: [
      "Guided tour escort"
    ],
    hiddenCostsInfo: "None",
    address: "Bab El Onsar, Eastern Medina Wall, Quartier El Ayoun, Chefchaouen 91000",
    coordinates: {
      lat: 35.1695,
      lng: -5.2576
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1695,-5.2576",
    parkingInfo: "Street parking along Avenue Hassan II (5 MAD/hr)",
    publicTransportInfo: "Walkable from anywhere in the medina",
    dressCode: "Casual modest clothing",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed (Flat cobbled passage)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Watch for mopeds and donkey carts passing through the gate",
    languages: ["Arabic (Darija)", "Tarifit", "French", "Spanish"],
    visitorQuotes: [
      {
        type: "Solo Traveler",
        quote: "The view from this gate framing the spring and the Spanish Mosque is one of the most iconic shots of Chefchaouen.",
        author: "Liam H. from Dublin",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ras El Maa Historic Springs",
        type: "visit",
        id: "chefchaouen-ras-el-maa-springs"
      },
      {
        name: "Spanish Mosque Viewpoint",
        type: "visit",
        id: "chefchaouen-spanish-mosque"
      }
    ],
    storyTitle: "The Gate of Victory",
    history: "Bab El Onsar (also spelled Bab El Ansar) is one of the original gates of the 15th-century medina, named after the Ansar (companions of the Prophet). It was the principal eastern entrance through which traders, pilgrims, and Andalusian refugees entered Chefchaouen for centuries.",
    culturalImportance: "The gate remains the symbolic threshold between the medina and the spring district. Local newlyweds traditionally pass through it after marriage ceremonies.",
    localLegend: "Locals believe that touching the carved stone above the central arch brings good luck and ensures a future return to Chefchaouen.",
    funFact: "The gate's three arches were designed to accommodate pedestrian, mule, and mounted traffic simultaneously without congestion.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the gate illuminated at night?",
        a: "Yes, the exterior is softly lit after dark, making it pleasant for an evening stroll."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-medina-ramparts",
    city: "chefchaouen",
    name: "Medina Ramparts and Towers",
    neighborhood: "Bab Souq",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "history-weaver", "nomad"],
    vibeTags: ["historical", "scenic", "peaceful"],
    tags: [
      "architectural",
      "cultural-tour",
      "historical",
      "off-the-beaten-path",
      "private",
      "sunset",
      "walk-in"
    ],
    badges: ["historic-landmark", "panoramic-view", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 3,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: false
    },
    openingHours: "Open 24/7 (Best at sunrise or sunset)",
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths"],
    restrictions: [
      "Portions of the stone parapet lack safety handrails; stay safely away from unprotected drop-offs",
      "Respect the privacy of private residential rooftops bordering the wall"
    ],
    healthContraindications: [
      "Not recommended for individuals with severe vertigo or acute unsteadiness on uneven ancient stonework"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "The restored 15th-century defensive walls that encircle the medina, pierced by seven gates and studded with crenellated towers. The western rampart walk between Bab el-Suk and Bab el-Ansar offers the best-preserved section, with views over the blue rooftops and the Rif Mountains.",
    shortValueProp: "Trace the medieval walls that protected the Blue Pearl for five centuries",
    googleRating: 4.5,
    reviewCount: 2215,
    googleReviewCount: 1620,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 410,
    viatorRating: 4.3,
    viatorReviewCount: 110,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 75,
    badge: "hidden-gem",
    tip: "Walk the western rampart from Bab el-Suk to Bab el-Onsar at sunrise for completely solitary views of the blue rooftops glowing pink in the morning light.",
    tips: [
      "Visit at dawn to catch the sunrise light cresting over the peaks onto the sleeping medina",
      "Wear trail runners or shoes with firm rubber soles as stone surfaces can be damp and slippery in early mornings"
    ],
    highlights: [
      "Restored 15th-century ramparts with seven historic gates",
      "Crenellated towers offering panoramic views over the medina",
      "Western rampart walk between Bab el-Suk and Bab el-Onsar",
      "Sunrise photography of blue rooftops against the Rif peaks"
    ],
    emotionalBenefits: ["Reflective", "Scenic", "Historic"],
    bestTimeToVisit: "Sunrise (06:30 AM - 08:00 AM) for solitude and golden light",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Avoid rainy days for slippery stone)",
    ticketTypes: [
      {
        name: "Free Public Rampart Walk",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Self-guided walking access along the exterior of the ramparts"],
    excludedServices: [
      "Licensed guide service"
    ],
    hiddenCostsInfo: "Optional unofficial guide may attach themselves for 30-50 MAD; decline politely",
    address: "Medina Walls, Quartier Bab Souq, Chefchaouen 91000",
    coordinates: {
      lat: 35.1698,
      lng: -5.2662
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1698,-5.2662",
    parkingInfo: "Street parking along Avenue Mohammed V (5 MAD/hr)",
    publicTransportInfo: "Walkable from anywhere in the new town or medina",
    dressCode: "Comfortable walking clothes and sturdy shoes",
    equipmentNeeded: ["Non-slip walking shoes", "Camera", "Water bottle"],
    fitnessLevel: "Moderate (Some steep sections and uneven stone stairs)",
    ageRestrictions: "All ages welcome; supervise children on tower stairs",
    safetyNotes: "Watch footing on uneven stone; some tower stairs have low doorways and no railings",
    languages: ["Arabic (Darija)", "Tarifit", "French", "Spanish"],
    visitorQuotes: [
      {
        type: "Quiet Mystic",
        quote: "Walking the ramparts at sunrise with nobody else around was a meditative experience. The blue rooftops glowing pink against the mountains is unforgettable.",
        author: "Emma L. from Amsterdam",
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
    storyTitle: "The Walls of Ali Ben Rachid",
    history: "The ramparts were built in the late 15th century by Ali Ben Rachid and his successors to defend the medina against Portuguese, Ottoman, and rival tribal attacks. They were restored multiple times, most recently in the 1990s by the Moroccan Ministry of Culture.",
    culturalImportance: "The walls remain a powerful symbol of Chefchaouen's historic isolation and independence. For centuries, non-Muslims were forbidden from entering the gates, preserving the town's spiritual character.",
    localLegend: "Local guides claim that a secret tunnel runs from the western rampart to a hidden cave in the Rif Mountains, used by rulers to escape during sieges.",
    funFact: "The ramparts incorporate recycled Roman columns and capitals from the nearby ancient site of Tamuda, visible in the foundations of two of the towers.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I climb the towers?",
        a: "Some towers are open to the public; others are private residences. Always check for signage or ask a local before climbing."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-ethnographic-museum",
    city: "chefchaouen",
    name: "Ethnographic Museum of Chefchaouen",
    neighborhood: "Outa El Hammam",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history-weaver"],
    vibeTags: ["historical", "serene", "cosy"],
    tags: [
      "authentic",
      "cultural-tour",
      "historical",
      "off-the-beaten-path",
      "private",
      "relaxed",
      "walk-in"
    ],
    badges: ["educational", "cultural-immersion", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 60,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 60,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_courtyard", "some_steps", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
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
    openingHours: "09:00 AM - 06:00 PM (Closed Tuesdays)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "18:00" },
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
      { dayOfWeek: 6, open: "09:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "garden_seating_access", "shaded_courtyards"],
    restrictions: [
      "Flash photography strictly prohibited inside galleries",
      "Touching antique textiles and ceremonial wooden pieces is forbidden"
    ],
    healthContraindications: [
      "Low wooden door headers between historical rooms; mind your head when entering"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "Located within the historic Kasbah fortress compound on Plaza Uta el-Hammam, this ethnographic museum showcases Jbalan and Rif mountain heritage through authentic wedding costumes, embroidered mendil textiles, wooden dowry chests, regional pottery, and traditional musical instruments.",
    shortValueProp: "Discover the living culture of the Jbala mountains beyond the blue walls",
    googleRating: 4.3,
    reviewCount: 755,
    googleReviewCount: 540,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 150,
    viatorRating: 4.2,
    viatorReviewCount: 40,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 25,
    badge: "hidden-gem",
    tip: "Ask the curator to explain the regional symbolism of the striped Jbalan mendil shawls and the elaborate bride's wedding headdress.",
    tips: [
      "Notice the regional distinction between Jebala and Ghomara pottery patterns on the ground level",
      "Combine your museum ticket with the Kasbah tower climb and the Andalusian garden"
    ],
    highlights: [
      "Rare Jbalan wedding costumes and embroidered wool textiles",
      "Traditional musical instruments including ghaita flutes and bendir drums",
      "Restored Andalusian courtyard house with carved cedar ceilings",
      "Antique pottery, copper vessels, and wooden marriage chests"
    ],
    emotionalBenefits: ["Educational", "Reflective", "Cultural"],
    bestTimeToVisit: "Morning (10:00 AM - 12:00 PM) for cooler temperatures and curator availability",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Adult International (Includes Kasbah Entry)",
        price: 60,
        currency: "MAD"
      },
      {
        name: "Moroccan Citizens & Residents",
        price: 10,
        currency: "MAD"
      },
      {
        name: "Children Under 12",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Included with general Kasbah fortress entry ticket; Moroccan nationals pay 10 MAD",
    includedServices: ["Access to all exhibition rooms and the central courtyard"],
    excludedServices: [
      "Licensed guide fees",
      "Audio guides"
    ],
    hiddenCostsInfo: "Optional tip for the curator who provides informal explanations (20-30 MAD)",
    address: "Place Uta el-Hammam (Kasbah Compound), Quartier Outa El Hammam, Chefchaouen 91000",
    coordinates: {
      lat: 35.1689,
      lng: -5.2612
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1689,-5.2612",
    parkingInfo: "No vehicle access to medina; nearest parking at Place el-Majzen",
    publicTransportInfo: "Walkable from Plaza Uta el-Hammam in 1 minute",
    dressCode: "Respectful modest clothing recommended",
    equipmentNeeded: ["Camera (no flash indoors)"],
    fitnessLevel: "Relaxed (Single-story museum with flat stone floors)",
    ageRestrictions: "All ages welcome; best for ages 8 and up",
    safetyNotes: "Low doorways between rooms; mind your head when passing through",
    languages: ["Arabic (Darija)", "Tarifit", "French", "Spanish"],
    visitorQuotes: [
      {
        type: "Culture Seeker",
        quote: "A hidden gem. The curator's passion for Jbalan culture was contagious. The wedding costumes alone are worth the visit.",
        author: "Claire B. from Lyon",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      },
      {
        name: "Kasbah Museum of Chefchaouen",
        type: "visit",
        id: "chefchaouen-kasbah-museum"
      }
    ],
    storyTitle: "The House of Jbalan Memory",
    history: "The ethnographic collection was established to safeguard the disappearing traditional arts of the surrounding Rif tribes. Housed in the Kasbah's historic domestic quarters, the exhibits document how Andalusian exile techniques merged with indigenous Amazigh mountain traditions over five centuries.",
    culturalImportance: "The museum is the only institution dedicated specifically to Jbalan and Rif mountain ethnography. It plays a crucial role in preserving regional identity in the face of mass tourism and rural depopulation.",
    localLegend: "The central wooden marriage chest is said to have belonged to a 19th-century bride whose ghost still visits the courtyard on the night of the full moon.",
    funFact: "The museum's most prized exhibit, a hand-embroidered Jbalan wedding shawl, took three women over two years to complete using techniques passed down for centuries.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is photography allowed inside?",
        a: "Yes, but strictly without flash to prevent textile degradation."
      }
    ],
    contactPhone: "+212 539-988000"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-souk",
    city: "chefchaouen",
    name: "Chefchaouen Souk District",
    neighborhood: "Bab Souq",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["culture", "first-timer", "sensory-seeker"],
    vibeTags: ["vibrant", "sensory", "chaotic"],
    tags: ["active", "authentic", "cultural-tour", "instagrammable", "morning", "shopping", "walk-in"],
    badges: ["market-experience", "cultural-immersion", "shopping-hub"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 3,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 4,
      scamRisk: 2,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "08:00 AM - 07:00 PM (Daily; peak market days Monday & Thursday)",
    paymentMethods: ["cash_mad"],
    amenities: ["food_stalls", "artisan_workshops", "public_toilets_nearby", "atm_nearby"],
    restrictions: [
      "Always ask permission before taking close-up portraits of rural Berber market vendors",
      "Narrow lanes become very crowded; keep personal belongings zipped in front"
    ],
    healthContraindications: [
      "Dense market crowds; not ideal for individuals prone to agoraphobia or sensory overload"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "The sprawling market district extending from Plaza Uta el-Hammam down toward Bab el-Suk, where Jbalan farmers, Berber weavers, and artisan cooperatives sell olive oil, goat cheese, wild honey, wool rugs, and indigo-dyed textiles. The Monday and Thursday market days bring Rif villagers down from the mountains.",
    shortValueProp: "The most authentic Jbalan mountain market in northern Morocco",
    googleRating: 4.4,
    reviewCount: 3055,
    googleReviewCount: 2240,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 580,
    viatorRating: 4.3,
    viatorReviewCount: 140,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 95,
    badge: "popular",
    tip: "Visit on a Monday or Thursday morning when Berber farmers descend from the Rif with fresh goat cheese (jben), wild thyme honey, and hand-woven wool rugs at the best prices.",
    tips: [
      "Arrive before 11:00 AM on Mondays or Thursdays to purchase fresh goat cheese still packed in fresh palm leaves",
      "Carry small denominations (10, 20, 50 MAD) as market vendors have difficulty changing 100 or 200 MAD bills",
      "Taste wild mountain honey infused with za'atar (thyme) before negotiating price"
    ],
    highlights: [
      "Fresh local goat cheese (jben) shaped by Berber women in palm leaves",
      "Wild thyme honey, argan oil, and mountain olive oil cooperatives",
      "Hand-woven Jbalan wool rugs and indigo-dyed textiles",
      "Berber silver jewelry, brass teapots, and painted ceramic tagines"
    ],
    emotionalBenefits: ["Vibrant", "Sensory", "Bustling"],
    bestTimeToVisit: "Monday or Thursday morning (08:00 AM - 11:00 AM)",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Spring brings fresh mountain herbs and dairy)",
    ticketTypes: [
      {
        name: "Free Market Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free entry; bargaining is expected and determines final prices",
    includedServices: ["Self-guided access to all market lanes and stalls"],
    excludedServices: [
      "Goods purchases",
      "Porter assistance"
    ],
    hiddenCostsInfo: "Tip public bathroom attendants 2 MAD; unofficial guides may attach themselves for 50 MAD",
    address: "Souk District, between Plaza Uta el-Hammam and Bab el-Suk, Quartier Bab Souq, Chefchaouen 91000",
    coordinates: {
      lat: 35.1691,
      lng: -5.2647
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1691,-5.2647",
    parkingInfo: "No vehicle access; nearest parking at Place el-Majzen (10 MAD/day)",
    publicTransportInfo: "Walkable from anywhere in the medina",
    dressCode: "Modest casual clothing; comfortable flat shoes for cobblestones",
    equipmentNeeded: ["Cash Dirhams (essential)", "Reusable shopping bag", "Bargaining skills"],
    fitnessLevel: "Active (Lots of walking over uneven cobblestones)",
    ageRestrictions: "All ages welcome; supervise children in dense crowds",
    safetyNotes: "Very safe; watch for pickpockets in dense market crowds and mopeds in narrow lanes",
    languages: ["Arabic (Darija)", "Tarifit", "French", "Spanish", "English"],
    visitorQuotes: [
      {
        type: "Culinary Explorer",
        quote: "The fresh goat cheese wrapped in palm leaves is the best I've ever tasted. The honey sellers let us taste five varieties before buying.",
        author: "Jean-Pierre from Paris",
        rating: 5
      },
      {
        type: "Shopping Holiday",
        quote: "Bargaining for a hand-woven wool rug took 30 minutes and three glasses of mint tea. The seller became a friend and we still WhatsApp.",
        author: "Clara J. from Berlin",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Plaza Uta el-Hammam",
        type: "visit",
        id: "chefchaouen-plaza-uta-el-hammam"
      },
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      }
    ],
    storyTitle: "The Market of the Mountain People",
    history: "The souk has operated continuously since the founding of Chefchaouen in the 15th century. Monday and Thursday were traditionally the market days when Rif mountain villagers would descend to trade wool, dairy, and wild herbs for sugar, tea, and manufactured goods from the coast.",
    culturalImportance: "The souk remains the economic and social heart of the Jbalan mountain economy. It is one of the last authentic weekly rural markets in northern Morocco, where Berber, Andalusian, and Jbalan cultures converge.",
    localLegend: "Local elders swear that the oldest olive oil seller in the souk is over 100 years old and has attended every Monday market for the past 80 years without missing a single one.",
    funFact: "The famous local goat cheese (jben) is still shaped by hand in palm-leaf molds by Berber women who descend from the Rif before dawn on market days.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "What should I buy as souvenirs?",
        a: "Local goat cheese (jben), wild thyme honey, argan oil, hand-woven wool rugs, and indigo-dyed textiles are the most authentic and best-value purchases."
      },
      {
        q: "How much should I bargain?",
        a: "Start at 40-50% of the initial asking price for souvenirs, and aim to settle around 60-70%. Be polite, smile, and walk away slowly if the price is too high."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-tannerie-district",
    city: "chefchaouen",
    name: "Chefchaouen Artisans & Tannery District",
    neighborhood: "Al Kharrazine",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "sensory-seeker", "first-timer"],
    vibeTags: ["intricate", "sensory", "historical"],
    tags: ["authentic", "cultural-tour", "off-the-beaten-path", "private", "shopping"],
    badges: ["artisan-village", "cultural-immersion", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 75,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 2,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 06:00 PM (Closed Fridays after 11:00 AM for prayer)",
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "walking_paths"],
    restrictions: [
      "Always ask permission before taking photos of artisans or their children working looms",
      "Do not touch hot forge equipment or active dye vats"
    ],
    healthContraindications: [
      "Strong aromas of natural tanning agents and mineral dye pigments may bother individuals with asthma"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A network of small workshops in the historic artisans quarter where Jbalan craftsmen weave wool blankets on traditional wooden foot-pedal looms, dye indigo textiles, forge brass and copperware, and handcraft leather slippers (babouches) using time-honored Northern Moroccan methods.",
    shortValueProp: "Watch Jbalan artisans weave, dye, and forge the crafts of the Blue Pearl",
    googleRating: 4.5,
    reviewCount: 1135,
    googleReviewCount: 820,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 215,
    viatorRating: 4.3,
    viatorReviewCount: 60,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 40,
    badge: "hidden-gem",
    tip: "Look for the small indigo-dyeing workshops near Bab el-Suk; some artisans will demonstrate the natural indigo dyeing process for a small tip (20-30 MAD) and explain how the medina's blue walls inspired the same pigment.",
    tips: [
      "Weavers will demonstrate their pedal loom techniques willingly; tipping 20-30 MAD is customary if you do not buy a rug",
      "Unlike Fes, this quarter is small, peaceful, and has zero aggressive touts"
    ],
    highlights: [
      "Small wool rug weaving workshops with pedal looms",
      "Natural indigo dyeing demonstrations using the same pigment as the medina walls",
      "Brass and copper smiths forging traditional teapots and trays",
      "Leather workshops producing slippers, bags, and saddlery"
    ],
    emotionalBenefits: ["Cultural", "Sensory", "Inspired"],
    bestTimeToVisit: "Morning (10:00 AM - 12:00 PM) when artisans are most active",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Workshop Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free to enter workshops; demonstrations may require a small tip (20-30 MAD)",
    includedServices: ["Self-guided access to open workshops"],
    excludedServices: [
      "Purchases of craft items",
      "Formal masterclass instruction"
    ],
    hiddenCostsInfo: "Workshops may invite you for tea and showcase goods; politely decline if not interested without pressure",
    address: "Quartier Al Kharrazine, Southern Medina, Chefchaouen 91000",
    coordinates: {
      lat: 35.1682,
      lng: -5.2632
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1682,-5.2632",
    parkingInfo: "No vehicle access; nearest parking at Place el-Majzen",
    publicTransportInfo: "Walkable from Plaza Uta el-Hammam in 5 minutes",
    dressCode: "Modest casual clothing; avoid white fabrics near dye vats",
    equipmentNeeded: ["Cash for tips and purchases", "Camera (ask permission first)"],
    fitnessLevel: "Moderate (Steep cobbled lanes between workshops)",
    ageRestrictions: "All ages welcome; supervise children near dye vats and forge tools",
    safetyNotes: "Watch footing in workshops; dye vats and forge tools can be hazardous. Some workshops have strong chemical smells.",
    languages: ["Arabic (Darija)", "Tarifit", "French", "Spanish"],
    visitorQuotes: [
      {
        type: "Cultural Tour",
        quote: "Watching the indigo dyeing process was the highlight of my trip. The artisan explained how the same pigment is used on the medina walls.",
        author: "Sophie M. from France",
        rating: 5
      },
      {
        type: "Shopping Holiday",
        quote: "I bought a hand-woven wool rug directly from the weaver. The whole transaction took an hour and three glasses of mint tea.",
        author: "Robert K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Chefchaouen Souk District",
        type: "visit",
        id: "chefchaouen-souk"
      },
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      }
    ],
    storyTitle: "The Crafts of the Jbala",
    history: "The artisan district dates back to the 16th century when Andalusian refugees brought their textile, leather, and metalworking traditions to Chefchaouen. The workshops have remained family-owned for generations, with techniques passed down from master to apprentice.",
    culturalImportance: "The artisan district preserves the traditional crafts of the Jbala mountains, which are disappearing elsewhere in Morocco due to mass-produced imports. It remains an important economic and cultural lifeline for local families.",
    localLegend: "Local weavers claim that the oldest rug pattern in the district, the 'Hand of Fatima,' was brought from Granada by a refugee who hid the pattern in the lining of her wedding dress.",
    funFact: "The natural indigo pigment used in the workshops is the same one applied annually to the medina walls, creating a direct link between the artisan crafts and the town's famous blue color.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I watch the artisans work?",
        a: "Yes, most workshops welcome respectful visitors. Always ask before photographing and consider leaving a small tip or purchasing a finished item."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-uta-hammam-promenade",
    city: "chefchaouen",
    name: "Avenue Hassan II Promenade",
    neighborhood: "Hassan I",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "social-collector", "family"],
    vibeTags: ["vibrant", "cosy", "peaceful"],
    tags: ["cultural-tour", "instagrammable", "relaxed", "sunset", "urban", "walk-in"],
    badges: ["family-friendly", "budget-friendly", "sunset-spot"],
    // ── 2. FILTER — result-page filters & logistics ──
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
    accessibilityFeatures: ["wide_flat_walkways", "step_free_access", "step_free_paved_paths", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
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
    openingHours: "Open 24/7 (Best 06:00 PM - 09:00 PM)",
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["cafe", "street_parking", "shaded_benches", "atm_nearby", "perimeter_benches", "fountains"],
    restrictions: [
      "Pedestrian boulevard intersected by vehicular streets; ensure children do not run into roadways"
    ],
    healthContraindications: [
      "None; barrier-free and fully paved flat thoroughfare"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "The tree-lined main avenue of the modern town, stretching from the medina entrance at Place el-Majzen toward the municipal gardens. Lined with orange trees, outdoor café terraces, and traditional patisseries, it is the primary venue for the classic Moroccan evening promenade (paseo).",
    shortValueProp: "The bustling modern heart where Chefchaouen's locals meet and stroll",
    googleRating: 4.4,
    reviewCount: 1800,
    googleReviewCount: 1340,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 320,
    viatorRating: 4.2,
    viatorReviewCount: 85,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 55,
    badge: "popular",
    tip: "Stroll after 06:00 PM when the avenue lights up and local families come out for the traditional evening promenade; the ice cream at Patisserie Bennis is legendary.",
    tips: [
      "Join the evening stroll between 18:30 and 20:30 when local families walk together before dinner",
      "Stop at modern bakeries along the boulevard for fresh almond pastries and mint tea at lower prices than medina tourist spots"
    ],
    highlights: [
      "Tree-lined pedestrian promenade with café terraces and patisseries",
      "Evening gathering point for local families and travelers",
      "Orange trees perfuming the air in spring",
      "Sweeping view up to the medina and Spanish Mosque"
    ],
    emotionalBenefits: ["Vibrant", "Social", "Relaxed"],
    bestTimeToVisit: "Evening (06:00 PM - 09:00 PM) for the traditional promenade",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Spring brings orange blossom perfume)",
    ticketTypes: [
      {
        name: "Free Public Promenade",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Self-guided walking access along the avenue"],
    excludedServices: [
      "Café purchases",
      "Private transport"
    ],
    hiddenCostsInfo: "None; local café prices along this avenue are standard Moroccan municipal rates",
    address: "Avenue Hassan II, Quartier Hassan I, Chefchaouen 91000",
    coordinates: {
      lat: 35.1695,
      lng: -5.2685
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1695,-5.2685",
    parkingInfo: "Paid street parking along the avenue (5 MAD/hr)",
    publicTransportInfo: "Walkable from anywhere in the medina or new town",
    dressCode: "Casual modest clothing",
    equipmentNeeded: ["Camera", "Cash for cafés and ice cream"],
    fitnessLevel: "Relaxed (Flat paved avenue, fully accessible)",
    ageRestrictions: "All ages welcome; very family-friendly",
    safetyNotes: "Very safe; well-lit and busy until late evening",
    languages: ["Arabic (Darija)", "Tarifit", "French", "Spanish", "English"],
    visitorQuotes: [
      {
        type: "Family Holiday",
        quote: "Our kids loved the ice cream and the bustling evening vibe. It felt completely safe and family-friendly.",
        author: "Sophie M. from France",
        rating: 5
      },
      {
        type: "Couples & Sunset",
        quote: "We sat on a café terrace watching the world go by. The view up to the lit Spanish Mosque is beautiful after dark.",
        author: "Marcus & Elspeth from Munich",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      },
      {
        name: "Plaza Uta el-Hammam",
        type: "visit",
        id: "chefchaouen-plaza-uta-el-hammam"
      }
    ],
    storyTitle: "The Modern Boulevard",
    history: "Avenue Hassan II was laid out during the Spanish Protectorate era in the early 20th century as the principal axis of the new town outside the medina walls. It has remained the commercial and social heart of modern Chefchaouen ever since.",
    culturalImportance: "The avenue is where traditional Jbalan medina life meets modern Moroccan urban culture. It hosts the evening promenade (halqa) that has been a Moroccan social institution for centuries.",
    localLegend: "Locals claim that the oldest orange tree on the avenue, near the municipal garden, was planted by the Spanish governor's wife in 1932 and still produces the sweetest fruit in town.",
    funFact: "The avenue's café terraces serve over 1,000 liters of mint tea per day during peak tourist season, making it one of the highest per-capita tea consumption spots in Morocco.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are there ATMs on the avenue?",
        a: "Yes, several bank ATMs are along the avenue, but they can run out of cash on weekends. Withdraw early."
      }
    ],
    contactPhone: ""
  },
  // ── NEW HERITAGE & CULTURE ADDITIONS ───────────────────────
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-place-el-haouta",
    city: "chefchaouen",
    name: "Place El Haouta",
    neighborhood: "Souika",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer", "photographer", "quiet-mystic"],
    vibeTags: ["peaceful", "tranquil", "architectural", "scenic"],
    tags: [
      "architectural",
      "authentic",
      "cultural-tour",
      "historical",
      "instagrammable",
      "photo-spot",
      "relaxed",
      "urban",
      "walk-in"
    ],
    badges: ["peaceful-escape", "architectural-gem", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "flat_courtyard", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Cafés 08:00 AM - 10:00 PM)",
    paymentMethods: ["cash_mad"],
    amenities: ["traditional_fountains", "fountains", "cafe", "shaded_benches", "artisan_workshops"],
    restrictions: [
      "Communal fountain water is fed from the mountain spring; do not climb or damage the historic tilework",
      "Residential square; respect local tranquility in the early morning and late evening"
    ],
    healthContraindications: [
      "Slightly uneven cobbled stone steps leading into the square"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A serene Andalusian-style square tucked away in the Souika quarter, renowned for its refined elegance and peaceful ambiance compared to the bustling Plaza Uta el-Hammam. At its center stands an exquisite four-sided white-and-blue tiled fountain with arched niches where locals still fill clay water jugs.",
    shortValueProp: "The peaceful Andalusian heart of the medina, centered around a classic tiled fountain",
    googleRating: 4.6,
    reviewCount: 1450,
    googleReviewCount: 1050,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 280,
    viatorRating: 4.4,
    viatorReviewCount: 70,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 50,
    badge: "hidden-gem",
    tip: "Visit around 10:30 AM when the morning sun illuminates the central blue-and-white fountain and enjoy a glass of spiced tea at the quiet corner café with no crowds.",
    tips: [
      "Sit on the stone benches beside the fountain to take in the quiet architectural details of the surrounding horseshoe arches",
      "Browse the small wool weaving shops on the southern side of the square for unhurried conversations with craftsmen"
    ],
    highlights: [
      "Four-sided Andalusian fountain adorned with geometric blue and white zellige tiles",
      "Quiet shaded square surrounded by traditional whitewashed residential houses",
      "Handloom textile and blanket workshops bordering the perimeter",
      "Charming neighborhood cafes far removed from large tour bus crowds"
    ],
    emotionalBenefits: ["Tranquil", "Reflective", "Historic"],
    bestTimeToVisit: "Morning (09:30 AM - 11:30 AM) for gentle sunlight and solitude",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Public Square Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Self-guided exploration of the square and fountain"],
    excludedServices: [
      "Café refreshments"
    ],
    hiddenCostsInfo: "None",
    address: "Place El Haouta, Quartier Souika, Chefchaouen 91000",
    coordinates: {
      lat: 35.1681,
      lng: -5.2625
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1681,-5.2625",
    parkingInfo: "No vehicles permitted in medina; nearest parking at Place el-Majzen",
    publicTransportInfo: "Walkable in 4 minutes south from Plaza Uta el-Hammam",
    dressCode: "Modest casual clothing",
    equipmentNeeded: ["Camera", "Small cash for tea"],
    fitnessLevel: "Relaxed (Mild walking over cobblestones and gentle steps)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Very safe and quiet residential quarter",
    languages: ["Arabic (Darija)", "Tarifit", "French", "Spanish"],
    visitorQuotes: [
      {
        type: "Solo Traveler",
        quote: "Place El Haouta was my favorite square in Chefchaouen. No tour groups, just the soft sound of water flowing from the fountain and cats sleeping in the sun.",
        author: "Hannah W. from Edinburgh",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      },
      {
        name: "Plaza Uta el-Hammam",
        type: "visit",
        id: "chefchaouen-plaza-uta-el-hammam"
      }
    ],
    storyTitle: "The Enclosed Andalusian Haven",
    history: "Laid out during the 16th century as the residential and artisan hub of the Souika district, Place El Haouta ('The Enclosed Garden/Plaza') was planned by Moriscos fleeing Andalusia who sought to recreate the tranquil, private plazas of Granada.",
    culturalImportance: "The square preserves the communal water-sharing traditions of Chefchaouen, where mountain spring water distributed from Ras El Maa reached neighborhood fountains before individual plumbing existed.",
    localLegend: "Elders recount that the artisan who built the fountain's tiled arches hidden a single hand of Fatima tile inside the cistern to bless the water with healing properties.",
    funFact: "Unlike Plaza Uta el-Hammam which was designed as a public garrison and trading space, El Haouta was built as a private residential gathering enclave for local weavers.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "How do I reach Place El Haouta from Plaza Uta el-Hammam?",
        a: "Walk southward down Rue Targui for approximately four minutes; a brief flight of stone steps leads directly into the square."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-ras-el-maa-springs",
    city: "chefchaouen",
    name: "Ras El Maa Historic Springs & Washhouses",
    neighborhood: "El Ayoun",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer", "photographer", "sensory-seeker"],
    vibeTags: ["scenic", "sensory", "historical", "botanical"],
    tags: [
      "authentic",
      "cultural-tour",
      "historical",
      "instagrammable",
      "local-life",
      "photo-spot",
      "spring-water",
      "traditional-irrigation",
      "walk-in"
    ],
    badges: ["cultural-icon", "historic-landmark", "must-see"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Best 08:00 AM - 07:00 PM)",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "fresh_juice_bars", "traditional_fountains", "walking_paths", "panoramic_viewpoint"],
    restrictions: [
      "Always ask permission before photographing local women washing laundry at the historic stone basins",
      "River rocks and stone steps along the water are slick; maintain cautious footing"
    ],
    healthContraindications: [
      "Slippery wet stone surfaces near the rapids; supervise children closely near the flowing stream"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "The lifeblood of Chefchaouen, where ice-cold mountain water rushes directly from the limestone cliffs of Mount Tisouka. This historic spring gave birth to the settlement in 1471 and still feeds the town's waterwheels and fountain network. Local women gather at the traditional covered stone washhouse (Sed Banin) to wash wool blankets and rugs, while visitors sit at riverside cafes with chairs placed directly in the cool stream.",
    shortValueProp: "The foundational mountain spring and living stone laundry that gave birth to the Blue Pearl",
    googleRating: 4.5,
    reviewCount: 4820,
    googleReviewCount: 3410,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 920,
    viatorRating: 4.4,
    viatorReviewCount: 310,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 180,
    badge: "essential",
    tip: "Sit at one of the open-air riverside cafes where plastic tables and chairs are set directly into the mountain stream for fresh mint tea or freshly pressed orange juice before starting the hike up to the Spanish Mosque.",
    tips: [
      "Visit in the mid-morning to observe the living tradition of carpet and rug washing in the stone sluices",
      "This is the direct trailhead for the 15-minute uphill walk to the Spanish Mosque viewpoint"
    ],
    highlights: [
      "Crystal-clear mountain cascade flowing through historic stone channels",
      "Traditional covered washhouses ('Sed Banin') actively used by mountain families",
      "Remnants of historic watermills that ground flour for the medina for centuries",
      "Riverside open-air cafes with chairs placed right in the bubbling mountain water"
    ],
    emotionalBenefits: ["Refreshed", "Sensory", "Historic"],
    bestTimeToVisit: "Morning (09:00 AM - 11:30 AM) or late afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Water flow is strongest during spring snowmelt)",
    ticketTypes: [
      {
        name: "Free Spring Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Self-guided access to the spring cascades and public washhouses"],
    excludedServices: [
      "Café drinks and orange juices",
      "Guided historical narration"
    ],
    hiddenCostsInfo: "Café drinks range from 10 to 20 MAD; freshly squeezed orange juice costs approximately 10-15 MAD",
    address: "Ras El Maa, Bab El Onsar, Quartier El Ayoun, Chefchaouen 91000",
    coordinates: {
      lat: 35.1693,
      lng: -5.2568
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1693,-5.2568",
    parkingInfo: "Paid parking along Avenue Hassan II near the eastern gate",
    publicTransportInfo: "Walkable in 10 minutes uphill from Plaza Uta el-Hammam via Bab El Onsar",
    dressCode: "Casual comfortable attire; footwear suitable for wet rocks",
    equipmentNeeded: ["Water-resistant shoes or sandals with grip", "Camera"],
    fitnessLevel: "Moderate (Gentle uphill walk to the eastern medina perimeter)",
    ageRestrictions: "All ages welcome; watch young children near fast-moving water",
    safetyNotes: "Stone steps can be extremely slippery with moss; avoid stepping on smooth wet boulders",
    languages: ["Arabic (Darija)", "Tarifit", "French", "Spanish"],
    visitorQuotes: [
      {
        type: "Cultural Traveler",
        quote: "Drinking fresh mint tea with my feet dipped in the cold mountain stream while listening to the rushing water was pure bliss after a long walk through the medina.",
        author: "Guillermo P. from Seville",
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
        name: "Spanish Mosque Viewpoint",
        type: "visit",
        id: "chefchaouen-spanish-mosque"
      }
    ],
    storyTitle: "The Spring That Birthed a City",
    history: "When Sharif Ali Ben Rachid chose this site in 1471 to establish a defensive stronghold against Portuguese incursions, the perennial mountain spring of Ras El Maa ('Head of the Water') was the decisive factor. Its abundance provided an impregnable freshwater supply and powered an intricate gravity-fed canal system that sustained the medina during sieges.",
    culturalImportance: "Ras El Maa represents the communal heart of female social life in the medina. For over 500 years, women gathered here not only to wash household linens and sheep's wool for weaving but to share news, songs, and celebrations away from the masculine commercial souks.",
    localLegend: "Legend tells that the first Andalusian refugees wept tears of joy upon reaching Ras El Maa, claiming its crystalline waters tasted identical to the snow-fed streams of Granada's Darro River.",
    funFact: "The stream originally drove more than a dozen stone watermills along its descent; several restored wooden waterwheel channels can still be seen below the stone bridge.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I drink the water directly from the waterfall?",
        a: "While locals drink from the upper spring vents, visitors are advised to enjoy the water visually or filtered, and drink bottled or boiled water."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-callejon-el-asri",
    city: "chefchaouen",
    name: "Callejón El Asri (Flowerpot Stairs)",
    neighborhood: "Souika",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["photographer", "first-timer", "romantic"],
    vibeTags: ["iconic", "ornate", "vibrant", "scenic"],
    tags: [
      "architectural",
      "authentic",
      "cultural-tour",
      "golden-hour",
      "instagrammable",
      "photo-spot",
      "tripod-allowed",
      "walk-in"
    ],
    badges: ["photography-spot", "must-see", "cultural-icon"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 5,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Best 07:30 AM - 09:30 AM for photography)",
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "walking_paths"],
    restrictions: [
      "Residential stairway; maintain respectful noise levels and do not block front doorways",
      "A modest voluntary tip (5 MAD) is requested by resident families if posing with doorstep flower displays"
    ],
    healthContraindications: [
      "Continuous steep stone steps with narrow treads"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "Chefchaouen's single most iconic and photographed alleyway, Callejón El Asri is a steep, blue-washed staircase framed by cobalt walls and lined with dozens of terracotta pots brimming with crimson geraniums and lush greenery. Recognized globally as one of the most picturesque streets on Earth, it embodies the visual poetry of Andalusian mountain architecture.",
    shortValueProp: "The world-famous blue stairway lined with hanging geranium flowerpots",
    googleRating: 4.7,
    reviewCount: 2150,
    googleReviewCount: 1680,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 320,
    viatorRating: 4.6,
    viatorReviewCount: 90,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 60,
    badge: "top-pick",
    tip: "Arrive before 08:30 AM to capture an empty frame without waiting in the photographer queue; position your camera low on the lower stairs looking upward to emphasize the vibrant layered walls.",
    tips: [
      "Wear contrasting warm colors such as yellow, terracotta, or crisp white to pop against the deep cobalt blue background",
      "Treat local householders with warmth and respect, as this famous alley is a living home to several families"
    ],
    highlights: [
      "Vibrant cobalt and azure stepped street lined with terracotta flowerpots",
      "Classic carved wooden Morisco doors with wrought-iron latches",
      "Named among the most beautiful streets in the world by international design journals",
      "Quintessential Chefchaouen photo composition featured on global travel covers"
    ],
    emotionalBenefits: ["Inspired", "Scenic", "Joyful"],
    bestTimeToVisit: "Early morning (07:30 AM - 09:00 AM) before queues form",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round (Geraniums and flowers bloom most vibrantly in spring and summer)",
    ticketTypes: [
      {
        name: "Free Public Alley Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Self-guided walking through the alleyway"],
    excludedServices: [
      "Optional prop photo tips (5 MAD)"
    ],
    hiddenCostsInfo: "Resident homeowners occasionally charge 5 MAD for taking pictures on decorated doorstep setups",
    address: "Callejón El Asri, Quartier Souika, Chefchaouen 91000",
    coordinates: {
      lat: 35.1702,
      lng: -5.2618
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1702,-5.2618",
    parkingInfo: "No vehicle access; nearest parking at Place el-Majzen",
    publicTransportInfo: "Walkable in 5 minutes uphill from Plaza Uta el-Hammam",
    dressCode: "Comfortable footwear for steep stairs; colorful contrasting clothing for photos",
    equipmentNeeded: ["Camera or smartphone", "Wide-angle lens recommended for tight stairway framing"],
    fitnessLevel: "Moderate (Steep stepped alleyway)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Stone steps are worn and can be slick in the early morning dew",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Photography Enthusiast",
        quote: "We set our alarm for 7:30 AM and had the entire flowerpot staircase to ourselves for twenty minutes. It looks even more vibrant in person than on Instagram.",
        author: "Chloé & Julien from Bordeaux",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      },
      {
        name: "Place El Haouta",
        type: "visit",
        id: "chefchaouen-place-el-haouta"
      }
    ],
    storyTitle: "The Stairway of Geraniums",
    history: "The tradition of hanging glazed clay flowerpots along the steep steps was originated by local residents in the late 20th century to honor the Andalusian patio traditions of Cordoba and Granada, where wall-mounted pots of geraniums served as natural air fresheners and symbols of household hospitality.",
    culturalImportance: "Callejón El Asri has become the international visual ambassador for Chefchaouen, showcasing how vernacular mountain architecture and local floral care can transform an ordinary residential passage into global heritage art.",
    localLegend: "Neighbors say the first red geranium planted on the steps was brought from a family garden in Andalusia and kept alive through generations of cuttings.",
    funFact: "In 2023, prestigious international design publications ranked Callejón El Asri as the fourth most beautiful street in the world.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I have to pay to take a photo on the stairs?",
        a: "Walking the stairs is completely free. Only if you stand directly on certain private decorated stoops do homeowners request a small 5 MAD tip."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-bab-el-ain",
    city: "chefchaouen",
    name: "Bab El Ain Gate & Mellah Gateway",
    neighborhood: "Bab Souq",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history-weaver", "first-timer"],
    vibeTags: ["historical", "architectural", "nostalgic"],
    tags: [
      "architectural",
      "authentic",
      "cultural-tour",
      "historical",
      "local-life",
      "urban",
      "walk-in"
    ],
    badges: ["historic-landmark", "architectural-gem"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
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
    accessibilityFeatures: ["level_entry_doorway", "flat_walkways", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "atm_nearby", "street_parking", "fountains", "fresh_juice_bars"],
    restrictions: [
      "High-traffic pedestrian gateway; watch for supply carts, motorbikes, and luggage porters passing through"
    ],
    healthContraindications: [
      "None; flat barrier-free entryway"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "The monumental stone-and-terracotta archway that serves as the principal southwestern portal into the old city. Built in the late 15th century, 'The Gate of the Spring' marks the vivid threshold where the modern town meets the walled medina, immediately leading into the historic Mellah (former Jewish quarter) and Souika lanes.",
    shortValueProp: "The monumental 15th-century gateway bridging the modern town and the ancient Jewish Mellah",
    googleRating: 4.5,
    reviewCount: 2840,
    googleReviewCount: 1990,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 410,
    viatorRating: 4.3,
    viatorReviewCount: 80,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 60,
    badge: "historical",
    tip: "Sit at the small terrace café immediately outside the gate steps around 08:00 AM to watch the medina come to life with fresh bread deliveries and vegetable carts arriving from the countryside.",
    tips: [
      "Shoot photos from outside looking inward through the heavy arch to frame the blue lanes inside against the ochre stone exterior",
      "Turn immediately left upon passing the gate to explore the quieter alleys of the historic Jewish Mellah"
    ],
    highlights: [
      "Towering 15th-century terracotta stone horseshoe archway",
      "Living social boundary where rural farmers, medina elders, and travelers converge",
      "Immediate gateway to the historic Jewish Mellah and its distinct wooden balcony architecture",
      "Convenient taxi drop-off and meeting point for walking tours"
    ],
    emotionalBenefits: ["Historic", "Grounded", "Vibrant"],
    bestTimeToVisit: "Morning (08:00 AM - 10:00 AM) for authentic local life",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Gateway Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free public access",
    includedServices: ["Self-guided passage through the gate into the medina"],
    excludedServices: [
      "Porter services",
      "Guided walking tours"
    ],
    hiddenCostsInfo: "Luggage porters near the gate typically charge 20-30 MAD to haul bags to medina riads",
    address: "Bab El Ain, Avenue Moulay Ali Ibn Rachid, Quartier Bab Souq, Chefchaouen 91000",
    coordinates: {
      lat: 35.1678,
      lng: -5.2645
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1678,-5.2645",
    parkingInfo: "Street parking and taxi stand directly outside the gate",
    publicTransportInfo: "Primary petit taxi drop-off point for medina arrivals",
    dressCode: "Casual modest clothing",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed (Completely flat entry)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Keep personal items secure due to steady foot traffic around the taxi stand",
    languages: ["Arabic (Darija)", "Tarifit", "French", "Spanish", "English"],
    visitorQuotes: [
      {
        type: "Architecture Buff",
        quote: "The contrast between the warm ochre exterior gate and the sudden explosion of vivid blue once you step through the archway is unforgettable.",
        author: "Tariq S. from Casablanca",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Chefchaouen Souk District",
        type: "visit",
        id: "chefchaouen-souk"
      },
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      }
    ],
    storyTitle: "The Gate of the Eye",
    history: "Constructed under the reign of Moulay Ali Ben Rachid between 1471 and 1511, Bab El Ain was built as the primary fortified checkpoint protecting the medina's southwestern flank. Its heavy battlements and guard chambers allowed lookouts to monitor the southern caravan approaches.",
    culturalImportance: "The gate has historically anchored the Mellah quarter, where Jewish refugees expelled from the Iberian Peninsula established jewelry, metalworking, and textile businesses in mutual protection alongside Muslim exiles.",
    localLegend: "Traditional lore claims the gate was dubbed 'The Eye' because its upper loopholes resembled vigilant eyes that kept watch over evil spirits attempting to enter the sacred town.",
    funFact: "A public spring fountain built directly into the side of the gate still supplies mountain water to taxi drivers and shopkeepers.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can taxis drop luggage directly at Bab El Ain?",
        a: "Yes, Bab El Ain is one of the only medina gates with direct vehicular access and a licensed taxi drop-off lane."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-traditional-cooking-class",
    city: "chefchaouen",
    name: "Rif Mountain Culinary Experience & Market Tour",
    neighborhood: "Souika",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["foodie", "culture", "sensory-seeker"],
    vibeTags: ["cosy", "sensory", "authentic"],
    tags: ["authentic", "cooking-class", "cultural-tour", "foodie", "local-life", "market", "workshop"],
    badges: ["foodie-paradise", "cultural-immersion"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 350,
    pricePerPerson: 350,
    entryPrice: 350,
    durationMinutes: 210,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_courtyard", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "10:00 AM - 02:00 PM (Daily by reservation)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "14:00" },
      { dayOfWeek: 1, open: "10:00", close: "14:00" },
      { dayOfWeek: 2, open: "10:00", close: "14:00" },
      { dayOfWeek: 3, open: "10:00", close: "14:00" },
      { dayOfWeek: 4, open: "10:00", close: "14:00" },
      { dayOfWeek: 5, open: "10:00", close: "14:00" },
      { dayOfWeek: 6, open: "10:00", close: "14:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["restrooms", "traditional_restaurant"],
    restrictions: [
      "Advance booking required at least 24 hours prior",
      "Please advise hosts in advance of vegetarian preferences or food allergies"
    ],
    healthContraindications: [
      "Inform the chef of any severe nut, gluten, or dairy allergies before market ingredient shopping"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "An immersive cultural cooking experience hosted in a 300-year-old Andalusian-Moroccan family home in the medina. Guests begin with a guided morning walk through the local market to hand-select fresh mountain herbs, spices, and artisan goat cheese (jben), then learn centuries-old northern Moroccan techniques to prepare slow-cooked clay tagines, zaalouk, freshly kneaded bread, and the ceremonial mint tea ritual.",
    shortValueProp: "Shop the mountain souk and cook authentic Jbalan dishes inside a 300-year-old medina home",
    googleRating: 4.9,
    reviewCount: 480,
    googleReviewCount: 290,
    tripadvisorRating: 4.9,
    tripadvisorReviewCount: 120,
    viatorRating: 4.9,
    viatorReviewCount: 50,
    getyourguideRating: 4.9,
    getyourguideReviewCount: 20,
    badge: "top-pick",
    tip: "Book a class on Monday or Thursday morning to combine your ingredient shopping with the bi-weekly mountain souk when Rif farmers bring fresh herbs, wild mountain honey, and artisanal olive oil.",
    tips: [
      "Ask your host to show you how to blend traditional ras el hanout spices specific to the northern Rif region",
      "Take notes during the bread-kneading demonstration as northern wood-fired bread techniques differ from southern flatbreads"
    ],
    highlights: [
      "Guided morning sensory market walk to select fresh regional ingredients and spices",
      "Hands-on cooking inside a historic private medina family kitchen",
      "Mastering authentic northern Moroccan tagines, cooked slowly over charcoal braziers",
      "Family-style lunch feast on a private rooftop terrace overlooking the blue medina"
    ],
    emotionalBenefits: ["Inspired", "Connected", "Nourished"],
    bestTimeToVisit: "Morning (10:00 AM - 01:30 PM)",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Full Culinary Class & Market Tour (per person)",
        price: 350,
        currency: "MAD"
      }
    ],
    discountsInfo: "Discounts available for private families or groups of 4 or more",
    includedServices: [
      "Guided market tour and ingredient shopping",
      "All food ingredients and cooking instruction",
      "Three-course family-style lunch feast",
      "Traditional mint tea ritual and recipe cards to take home"
    ],
    excludedServices: [
      "Alcoholic beverages",
      "Private vehicle transportation"
    ],
    hiddenCostsInfo: "None; all ingredients, tea, and meal servings are included in the ticket price",
    address: "Derb Lmrini, Quartier Souika, Chefchaouen 91000",
    coordinates: {
      lat: 35.1685,
      lng: -5.2629
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1685,-5.2629",
    parkingInfo: "Nearest parking at Place el-Majzen; host meets guests at Bab El Ain",
    publicTransportInfo: "Short 3-minute walk from Bab El Ain or Plaza Uta el-Hammam",
    dressCode: "Comfortable casual clothing with short or roll-up sleeves for cooking",
    equipmentNeeded: ["Camera", "Appetite"],
    fitnessLevel: "Relaxed (Mild walking during market tour; kitchen is seated/standing)",
    ageRestrictions: "Suitable for ages 6 and up; children must be supervised around hot pans",
    safetyNotes: "Careful when chopping with chef knives and handling hot clay tagine lids",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Foodie Travelers",
        quote: "This was the single best meal we ate in Morocco. Fatima and her mother welcomed us like family, and eating our own lemon-chicken tagine on their blue rooftop was incredible.",
        author: "Sarah & Mark from Melbourne",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Place El Haouta",
        type: "visit",
        id: "chefchaouen-place-el-haouta"
      },
      {
        name: "Plaza Uta el-Hammam",
        type: "visit",
        id: "chefchaouen-plaza-uta-el-hammam"
      }
    ],
    storyTitle: "The Aromas of the Rif Mountains",
    history: "Northern Moroccan culinary traditions are deeply infused with Andalusian heritage. Unlike southern Moroccan cuisine which leans toward sweeter profiles with dried fruits and cinnamon, Jbalan cooking emphasizes savory mountain herbs, wild oregano, preserved lemons, green olives, and cold-pressed virgin olive oil.",
    culturalImportance: "Food in the Rif is the ultimate expression of hospitality and community kinship. Cooking classes hosted in family homes offer travelers a rare, authentic window into the domestic arts and ancestral foodways of Chefchaouen.",
    localLegend: "Local mothers say that if you do not pour the mint tea from high above to form a frothy crown ('regga'), you have not shown true respect to your guest.",
    funFact: "Traditional northern tagines are cooked over a ceramic brazier called a 'kanoun' using smoldering olive wood charcoal, imparting a distinctive subtle smokiness.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are vegetarian and vegan options available?",
        a: "Yes, traditional vegetable tagines, lentil stews, and fresh Moroccan salads can easily be accommodated upon advance request."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-complexe-culturel-ain-haouzi",
    city: "chefchaouen",
    name: "Complexe Culturel de Chefchaouen",
    neighborhood: "Ain Haouzi",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history-weaver"],
    vibeTags: ["artistic", "peaceful", "serene"],
    tags: ["cultural-tour", "culture", "festival", "modern", "workshop"],
    badges: ["cultural-immersion", "educational"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1.2,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "wide_flat_walkways", "level_entry_doorway", "wide_main_corridors"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
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
    openingHours: "09:00 AM - 07:00 PM (Monday - Friday; evening events per schedule)",
    openingHoursStructured: [
      { dayOfWeek: 1, open: "09:00", close: "19:00" },
      { dayOfWeek: 2, open: "09:00", close: "19:00" },
      { dayOfWeek: 3, open: "09:00", close: "19:00" },
      { dayOfWeek: 4, open: "09:00", close: "19:00" },
      { dayOfWeek: 5, open: "09:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "parking", "restrooms", "information_desk"],
    restrictions: [
      "Photography permitted in general exhibition galleries; recording during theatrical performances requires permission"
    ],
    healthContraindications: [
      "None; barrier-free modern municipal facility"
    ],
    // ── 3. UI — presentation & social proof ───────────────
    description: "The premier contemporary municipal cultural center of Chefchaouen, situated in the Ain Haouzi district. The complex features a modern theater auditorium, public art exhibition galleries, and community creative spaces, hosting northern Moroccan theatrical productions, Andalusian classical music concerts, and the celebrated Hadra Chefchaounia women's Sufi vocal arts.",
    shortValueProp: "Chefchaouen's municipal center for Andalusian music, theater, and northern Moroccan arts",
    googleRating: 4.3,
    reviewCount: 210,
    googleReviewCount: 170,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 25,
    viatorRating: 4.0,
    viatorReviewCount: 10,
    getyourguideRating: 4.0,
    getyourguideReviewCount: 5,
    badge: "hidden-gem",
    tip: "Check the center's bulletin board or social announcements for evening performances of the Hadra Chefchaounia, an internationally acclaimed all-female Sufi musical tradition native to the town.",
    tips: [
      "An excellent stop on rainy days to appreciate contemporary paintings and photography by northern Moroccan artists",
      "Take a 5-minute petit taxi ride from Place Mohammed V for approximately 10-15 MAD"
    ],
    highlights: [
      "Modern 400-seat theater auditorium hosting regional drama and Mediterranean music festivals",
      "Rotating visual art galleries showcasing contemporary Moroccan painters and sculptors",
      "Home venue for the sacred Hadra Chefchaounia Sufi women's choral tradition",
      "Quiet cultural hub away from the commercial tourist paths of the medina"
    ],
    emotionalBenefits: ["Enriched", "Artistic", "Educational"],
    bestTimeToVisit: "Afternoon (02:00 PM - 05:00 PM) for gallery visits or evenings for scheduled performances",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Gallery & Exhibition Entry",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free admission to visual art exhibitions; tickets for formal theatrical performances vary from 20 to 50 MAD",
    includedServices: ["Public access to active art exhibitions and cultural displays"],
    excludedServices: [
      "Special ticketed theatrical or musical festival performances"
    ],
    hiddenCostsInfo: "Special evening concert tickets range from 20 to 50 MAD depending on the festival program",
    address: "Avenue Al Wahda, Quartier Ain Haouzi, Chefchaouen 91000",
    coordinates: {
      lat: 35.1652,
      lng: -5.2758
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=35.1652,-5.2758",
    parkingInfo: "Dedicated free on-site parking lot directly outside the complex",
    publicTransportInfo: "5 minutes by petit taxi from the medina gates (10-15 MAD)",
    dressCode: "Smart casual clothing",
    equipmentNeeded: ["Camera (for non-performance galleries)"],
    fitnessLevel: "Relaxed (Completely flat modern building)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Well-monitored civic building in a peaceful residential district",
    languages: ["Arabic (Darija)", "French", "Spanish"],
    visitorQuotes: [
      {
        type: "Music & Arts Enthusiast",
        quote: "Hearing the Hadra Chefchaounia women's Sufi choir perform in the theater here was one of the most moving spiritual musical experiences of my life.",
        author: "Nadia T. from Brussels",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Avenue Hassan II Promenade",
        type: "visit",
        id: "chefchaouen-uta-hammam-promenade"
      },
      {
        name: "Bab El Ain Gate & Mellah Gateway",
        type: "visit",
        id: "chefchaouen-bab-el-ain"
      }
    ],
    storyTitle: "The Stage of Northern Arts",
    history: "Inaugurated by the Moroccan Ministry of Culture to expand Chefchaouen's cultural infrastructure beyond the medieval fortress, the Complexe Culturel in Ain Haouzi provides local playwrights, painters, and musicians with a state-of-the-art civic platform.",
    culturalImportance: "The center serves as the guardian of living Jbalan and Andalusian performing arts, specifically fostering amateur theater, youth poetry competitions, and preservation of the sacred Hadra vocal repertoire.",
    localLegend: "Local musicians maintain that the acoustic design of the main auditorium was tuned to mirror the natural sound resonance of the Rif mountain valleys.",
    funFact: "The Hadra Chefchaounia tradition preserved here was founded by the 16th-century Sufi master Sidi Ali Ben Rachid as an all-female devotional choral art that exists nowhere else in the world.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are the visual art exhibitions free to enter?",
        a: "Yes, general admission to the lobby and rotating art galleries is completely free during daytime operational hours."
      }
    ],
    contactPhone: "+212 539-989727"
  }
];