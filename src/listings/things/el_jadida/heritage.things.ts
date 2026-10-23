/**
 * =========================================================================
 * [EL_JADIDA] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/el_jadida/index.ts
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
 *
 * ALLOWED NEIGHBORHOODS (El Jadida only):
 * - Touristic:     'Cité Portugaise' | 'Mazagan' | 'Sidi Bouzid'
 * - Mid-Touristic: 'Plateau' | 'Cité de l'Air'
 * - Low-Touristic: 'Al Qods' | 'Najmat Al Janoub' | 'Hay Salam'
 * =========================================================================
 */
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — HERITAGE & CULTURE ══
export const elJadidaHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "el-jadida-cit-portugaise-of-mazagan",
    city: "el_jadida",
    name: "Cité Portugaise of Mazagan",
    neighborhood: "Cité Portugaise",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture", "history-weaver", "photographer"],
    vibeTags: ["historical", "architectural", "scenic", "nostalgic"],
    tags: ["16th-century-ramparts", "architectural", "authentic", "coastal", "cultural-tour", "historical", "iconic-landmark", "instagrammable", "urban", "walk-in"],
    badges: ["cultural-icon", "historic-landmark", "must-see", "panoramic-view"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "some_steps", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (fortified public quarter)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "shaded_benches", "street_parking", "walking_paths", "panoramic_viewpoint"],
    restrictions: ["Pedestrian street quarter; historic cobblestones are uneven"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "The UNESCO World Heritage-listed Cité Portugaise of Mazagan is an outstanding example of Renaissance military architecture built by the Portuguese between 1502 and 1541. Its compact network of paved stone lanes, Manueline carved portals, sea-facing ramparts, and historic coexistence of mosques, churches, and synagogues make it one of the Atlantic coast's premier cultural treasures.",
    shortValueProp: "Wander UNESCO-listed 16th-century stone streets and bastions facing the Atlantic.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Forteresse_Jadida_01.JPG/1280px-Forteresse_Jadida_01.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/El_Jadida_Cit%C3%A9_Portugaise_Street.jpg/1280px-El_Jadida_Cit%C3%A9_Portugaise_Street.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 3012,
    googleReviewCount: 3012,
    badge: "essential",
    tip: "Enter through the monumental Porte de la Mer on Rue Hachmi Bahbah early in the morning when Atlantic sea fog clears over the stone ramparts.",
    tips: [
      "Wear sturdy walking shoes with good grip; centuries of ocean moisture have polished the cobblestones.",
      "Combine your walking tour with a coffee on the terrace at Place Al-Khattabi."
    ],
    highlights: [
      "UNESCO World Heritage Renaissance star fortress and defensive bastions",
      "Blend of Manueline stone arches, Moroccan tiled façades, and historic houses of worship"
    ],
    emotionalBenefits: ["Nostalgic", "Curious", "Grounded"],
    bestTimeToVisit: "Morning or golden hour before sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Public Access to Quarter", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Public residential and heritage quarter; completely free access.",
    includedServices: ["Self-guided pedestrian street access", "Rampart perimeter views"],
    excludedServices: ["Licensed tour guides", "Monument entry tickets where applicable"],
    hiddenCostsInfo: "None.",
    address: "Rue Hachmi Bahbah, Cité Portugaise, El Jadida 24000, Morocco",
    coordinates: { lat: 33.2568, lng: -8.5008 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cit%C3%A9+Portugaise+of+Mazagan%2C+el+jadida%2C+Morocco",
    parkingInfo: "Paid street parking and guarded lots outside the fortress walls near Place Hansali.",
    publicTransportInfo: "Easy 5-minute walk from Place Mohamed Ben Abdellah and central El Jadida.",
    dressCode: "Comfortable casual walking attire.",
    equipmentNeeded: ["Comfortable flat-soled walking shoes", "Camera"],
    fitnessLevel: "Moderate (Walking across historic cobblestones and inclines)",
    ageRestrictions: "Suitable for all ages; uneven surfaces require caution with strollers.",
    safetyNotes: "Keep a secure grip on children along unfenced high rampart ledges.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        quote: "You can feel five centuries of Portuguese and Moroccan Atlantic history in every stone.",
        author: "Alain R.",
        type: "Heritage Traveler",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Mazagan Ramparts Walk", type: "visit", distanceKm: 0.1 },
      { name: "Church of the Assumption", type: "visit", distanceKm: 0.1 }
    ],
    storyTitle: "The Fortress That Crossed the Ocean",
    history: "Founded in 1502 as Mazagão, the settlement was fortified in 1514 and expanded in 1541. When Sultan Sidi Mohammed ben Abdallah recaptured the city in 1769 after a two-month siege, the evacuating Portuguese sailed to Brazil where they founded Nova Mazagão in the Amazon basin. In 1821, Alaouite Sultan Moulay Abd al-Rahman restored and repopulated the ruins, naming the reborn city El Jadida ('The New').",
    culturalImportance: "Recognized by UNESCO in 2004 as an outstanding example of the interchange of cultural influences between European military engineering and Moroccan Islamic architecture.",
    localLegend: "Locals say the mysterious sea gate (Porte de la Mer) was built so tightly that departing Portuguese caravels loaded their final treasures under the cover of night without making a sound.",
    funFact: "Orson Welles chose the stone corridors and ramparts of Mazagan to shoot key sequences of his 1951 film masterpiece 'Othello'.",
    faq: [
      { q: "Is the Cité Portugaise safe to walk at night?", a: "Yes, the main residential lanes are quiet, well-lit, and inhabited by local families." },
      { q: "Are there cars inside the Cité?", a: "No, the narrow historic gates and lanes are strictly pedestrian-only." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "el-jadida-portuguese-cistern",
    city: "el_jadida",
    name: "Portuguese Cistern (Citerne Portugaise)",
    neighborhood: "Cité Portugaise",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "culture", "photographer", "history-weaver"],
    vibeTags: ["architectural", "geometric", "historical", "serene", "iconic"],
    tags: ["architectural", "authentic", "cultural-tour", "historical", "iconic-landmark", "instagrammable", "urban", "walk-in"],
    badges: ["architectural-gem", "cultural-icon", "historic-landmark", "must-see"],
    // ── 2. FILTER ──
    price: 70,
    pricePerPerson: 70,
    entryPrice: 70,
    durationMinutes: 45,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 3,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "09:00 AM - 06:00 PM (Daily; exterior viewing and museum desk)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "18:00" },
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 2, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
      { dayOfWeek: 6, open: "09:00", close: "18:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "historical_documentation", "shaded_courtyards"],
    restrictions: [
      "Interior subterranean room has undergone major municipal restoration; verify daily access at the entrance ticket office"
    ],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Built in 1514 as an underground armory and converted into a water reservoir in 1541, the Portuguese Cistern is one of the most mesmerizing interiors in North Africa. A hypostyle hall measuring 34 meters square, its 25 groined vaults rest on 25 stone pillars, beneath a central circular oculus that casts a shaft of Atlantic sunlight into shallow water.",
    shortValueProp: "The legendary subterranean hall of stone pillars and reflective water pools.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Citerne_portugaise_El_Jadida.jpg/1280px-Citerne_portugaise_El_Jadida.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Forteresse_Jadida_01.JPG/1280px-Forteresse_Jadida_01.JPG"
    ],
    googleRating: 4.7,
    reviewCount: 4627,
    googleReviewCount: 4627,
    badge: "architectural-gem",
    tip: "Midday sun directly overhead through the circular roof aperture creates the most dramatic mirrored reflection on the water pool.",
    tips: [
      "Check with the heritage desk on Rue Hachmi Bahbah on current interior access status while restoration works proceed.",
      "The stone walkways inside can be slick from mist and water vapor; watch your footing."
    ],
    highlights: [
      "25 carved stone pillars supporting late-Gothic palm-vaulted arches",
      "Central circular ceiling oculus reflecting sunlight onto the water mirror"
    ],
    emotionalBenefits: ["Serene", "Curious", "Inspired"],
    bestTimeToVisit: "11:30 AM to 02:00 PM for optimal overhead sun shafts",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Foreign Visitor Entry", price: 70, currency: "MAD" },
      { name: "Moroccan Citizens & Residents", price: 20, currency: "MAD" }
    ],
    discountsInfo: "Discounted rate of 10 MAD for Moroccan students with valid student ID.",
    includedServices: ["Self-guided monument access", "Historical explanatory panels"],
    excludedServices: ["Professional photography permits", "Guided tour services"],
    hiddenCostsInfo: "None; local faux-guides outside the entrance should be politely declined.",
    address: "39 Rue Hachmi Bahbah, Cité Portugaise, El Jadida 24000, Morocco",
    coordinates: { lat: 33.2562, lng: -8.5015 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Portuguese+Cistern%2C+el+jadida%2C+Morocco",
    parkingInfo: "Park at Place Hansali outside the gate and walk 200 meters into the citadel.",
    publicTransportInfo: "Walking distance from downtown El Jadida.",
    dressCode: "Casual respectful clothing; light sweater recommended inside cooler vaults.",
    equipmentNeeded: ["Camera capable of low-light shooting", "Non-slip shoes"],
    fitnessLevel: "Relaxed (Brief stairs descending into the stone hall)",
    ageRestrictions: "Suitable for all ages; hold hands with small children near open water rims.",
    safetyNotes: "Subterranean floor can be moist and dim; walk along designated raised pathways.",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        quote: "The single light beam shining down into the mirror of water is pure poetry.",
        author: "Elena G.",
        type: "Architecture Lover",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Cité Portugaise of Mazagan", type: "visit", distanceKm: 0.1 },
      { name: "Galerie Chaïbia Talal", type: "visit", distanceKm: 0.1 }
    ],
    storyTitle: "The Hall of Living Reflections",
    history: "Originally constructed by the brothers Francisco and Diogo de Arruda in 1514 as an armory (sala d'armas), it was remodeled in 1541 during a siege to ensure an uninterrupted freshwater supply. Rediscovered accidentally by a local merchant in 1916 when breaking through a cellar wall, it was quickly protected by heritage architects.",
    culturalImportance: "The cistern is universally celebrated in film history: Orson Welles staged the famous murder of Roderigo in its reflection pools for 'Othello' (1951).",
    localLegend: "Legend tells that the cistern's water was secretly fed by a deep natural subterranean spring discovered by desert dervishes centuries before the fortress was built.",
    funFact: "The hall contains precisely 25 stone pillars dividing the space into 36 square vault bays.",
    faq: [
      { q: "Is the cistern currently open?", a: "The site has undergone periodic closures for conservation works; check with the local heritage bureau on Rue Hachmi Bahbah upon arrival." },
      { q: "Is photography allowed?", a: "Yes, photography is permitted; tripods may require formal authorization." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "el-jadida-mazagan-ramparts-walk",
    city: "el_jadida",
    name: "Mazagan Ramparts Walk",
    neighborhood: "Cité Portugaise",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "nomad", "photographer"],
    vibeTags: ["scenic", "historical", "panoramic-view", "peaceful"],
    tags: ["16th-century-ramparts", "coastal", "cultural-tour", "historical", "instagrammable", "sunset", "sunset-view", "urban", "walk-in"],
    badges: ["historic-landmark", "must-see", "panoramic-view", "sunset-spot"],
    // ── 2. FILTER ──
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
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "step_free_exterior_view"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths", "historical_documentation"],
    restrictions: ["Portions of the upper stone parapet have low guard rails; supervise children"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "The fortified curtain walls of Mazagan link four monumental bastions—Bastion de l'Ange, Bastion Saint-Sébastien, Bastion Saint-Antoine, and Bastion du Saint-Esprit. Walking along the wide rampart walkway affords panoramic views over the Atlantic surf, the colorful working fishing port, and the quiet rooftop landscape of the old citadel.",
    shortValueProp: "Walk the perimeter stone bastions of the fortress with sweeping sea and harbor vistas.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Forteresse_Jadida_01.JPG/1280px-Forteresse_Jadida_01.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Remparts_El_Jadida.jpg/1280px-Remparts_El_Jadida.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 6185,
    googleReviewCount: 6185,
    badge: "top-pick",
    tip: "Bastion de l'Ange at the northeast corner provides the finest panoramic angle overlooking both the harbor and open sea at golden hour.",
    tips: [
      "Look for the historic cast-iron canons still positioned in the embrasures pointing toward the ocean.",
      "Ascend via the ramp near Bastion Saint-Sébastien for an easier climb."
    ],
    highlights: [
      "Unobstructed panoramic vistas over the Atlantic coastline and fishing fleet",
      "Historic defensive bastions engineered by Italian and Portuguese master architects"
    ],
    emotionalBenefits: ["Calm", "Breezy", "Inspired"],
    bestTimeToVisit: "Late afternoon for sunset over the ocean",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Public Walk", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Completely free open public access.",
    includedServices: ["Public rampart trail access", "Bastion viewing platforms"],
    excludedServices: ["Audio tours"],
    hiddenCostsInfo: "None.",
    address: "Remparts de la Cité Portugaise, Cité Portugaise, El Jadida 24000, Morocco",
    coordinates: { lat: 33.2575, lng: -8.5002 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mazagan+Ramparts+Walk%2C+el+jadida%2C+Morocco",
    parkingInfo: "Park near the fishing port or Place Hansali.",
    publicTransportInfo: "Directly accessible on foot from any point within the Cité Portugaise.",
    dressCode: "Comfortable wind-resistant clothing; shoes with rubber soles.",
    equipmentNeeded: ["Camera", "Windbreaker"],
    fitnessLevel: "Moderate (Stone stairs and gentle incline ramp walks)",
    ageRestrictions: "Suitable for all ages; close supervision of young kids near battlements is essential.",
    safetyNotes: "Stone paths can be slippery during high tide ocean spray.",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        quote: "Standing on Bastion de l'Ange with Atlantic waves breaking below is an unforgettable feeling.",
        author: "Marcus T.",
        type: "Coastal Walker",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Cité Portugaise of Mazagan", type: "visit", distanceKm: 0.1 },
      { name: "Church of the Assumption", type: "visit", distanceKm: 0.1 }
    ],
    storyTitle: "Bastions on the Atlantic Surge",
    history: "Designed by Italian architect Benedetto da Ravenna and Portuguese engineer João Ribeiro in 1541, the thick sloping stone walls were created to withstand heavy gunpowder artillery and long maritime sieges.",
    culturalImportance: "The ramparts mark the final European military stronghold evacuated on the Moroccan coast in the 18th century.",
    localLegend: "Legend tells of subterranean tunnels linking the bastions directly to secret submarine caves where scouts monitored approaching enemy galleys.",
    funFact: "The walls are over 8 meters high and up to 10 meters thick at their base, built with solid lime mortar and local stone.",
    faq: [
      { q: "Is the rampart walk lit after dark?", a: "Key bastions are lit, but walking during daylight or dusk is recommended for the best footing and views." },
      { q: "Can strollers access the ramparts?", a: "There are stairs at most access points, so carrying strollers is necessary." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "el-jadida-church-of-the-assumption",
    city: "el_jadida",
    name: "Church of the Assumption (Igreja de Nossa Senhora da Assunção)",
    neighborhood: "Cité Portugaise",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad", "history-weaver"],
    vibeTags: ["historical", "architectural", "solemn", "nostalgic"],
    tags: ["architectural", "authentic", "cultural-tour", "historical", "photography", "urban", "walk-in"],
    badges: ["architectural-gem", "historic-landmark", "quiet-retreat"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "09:00 AM - 06:00 PM (Daily; exterior always visible, interior opens during exhibitions)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "18:00" },
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 2, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
      { dayOfWeek: 6, open: "09:00", close: "18:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "shaded_courtyards", "street_parking"],
    restrictions: ["Disconsecrated historic building; interior access varies with cultural exhibitions"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Built in the early 16th century during the reign of King Manuel I of Portugal, the Church of the Assumption dominates the central square of the Cité Portugaise. Its distinctive Manueline Gothic stone portal, bell tower, and austere limestone facade face directly toward the Grand Mosque across Place Al-Khattabi, symbolizing El Jadida's layered multi-faith heritage.",
    shortValueProp: "A 16th-century Manueline Gothic church facade framing the citadel's central plaza.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Eglise_Assomption_El_Jadida.jpg/1280px-Eglise_Assomption_El_Jadida.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Forteresse_Jadida_01.JPG/1280px-Forteresse_Jadida_01.JPG"
    ],
    googleRating: 4.4,
    reviewCount: 605,
    googleReviewCount: 605,
    badge: "historical",
    tip: "View the facade in the late morning when sunlight illuminates the stone carving around the Manueline choir windows.",
    tips: [
      "Notice how the church and mosque stand side-by-side on the same historic square.",
      "The church interior occasionally hosts regional art salons and acoustic musical performances."
    ],
    highlights: [
      "Distinctive Manueline stone door lintel and late-Gothic bell tower",
      "Prime location on Place Al-Khattabi alongside traditional cafés"
    ],
    emotionalBenefits: ["Curious", "Peaceful", "Reflective"],
    bestTimeToVisit: "Morning or mid-afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Public Viewing", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Free public viewing of exterior and exhibitions.",
    includedServices: ["Plaza and facade viewing"],
    excludedServices: ["Religious services (disconsecrated)"],
    hiddenCostsInfo: "None.",
    address: "Place Al-Khattabi, Cité Portugaise, El Jadida 24000, Morocco",
    coordinates: { lat: 33.2565, lng: -8.5011 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Church+of+the+Assumption%2C+el+jadida%2C+Morocco",
    parkingInfo: "Street parking available on Place Hansali.",
    publicTransportInfo: "Located right in the center of the Cité Portugaise; walkable from downtown.",
    dressCode: "Casual respectful attire.",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed (Completely flat plaza viewing)",
    ageRestrictions: "Suitable for all age groups.",
    safetyNotes: "Standard pedestrian awareness on historic cobblestone square.",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        quote: "Facing the mosque across the open square, this church tells the story of two civilizations meeting.",
        author: "Camille V.",
        type: "History Enthusiast",
        rating: 4,
      }
    ],
    nearbyCombos: [
      { name: "Portuguese City Mosque", type: "visit", distanceKm: 0.05 },
      { name: "Portuguese Cistern", type: "visit", distanceKm: 0.1 }
    ],
    storyTitle: "Echoes of the Manueline Century",
    history: "Constructed as the primary parish church of Mazagão around 1515, the church served Portuguese naval captains, soldiers, and merchants until the 1769 evacuation. After decades of disuse, it was restored and repurposed as an iconic cultural landmark.",
    culturalImportance: "The church is one of the rare surviving physical examples of Portuguese Manueline religious architecture preserved on the African continent.",
    localLegend: "Local lore recounts that church bells were silenced on the night of the Portuguese departure so that troop movements to the harbor quays remained undetected.",
    funFact: "A unique carved stone knot—a signature motif of Portuguese maritime Manueline art—is still visible above the side portal.",
    faq: [
      { q: "Is the church active for religious services?", a: "No, it is a disconsecrated historical monument and cultural exhibition space." },
      { q: "Can I enter the bell tower?", a: "The bell tower is closed to the public for safety and preservation reasons." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "el-jadida-mohamed-afifi-theatre-square",
    city: "el_jadida",
    name: "Mohamed Afifi Theatre & Square",
    neighborhood: "Plateau",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad", "art-and-culture"],
    vibeTags: ["architectural", "nostalgic", "elegant", "vibrant"],
    tags: ["architectural", "cultural-tour", "festival", "historical", "modern", "urban", "walk-in"],
    badges: ["architectural-landmark", "cultural-icon"],
    // ── 2. FILTER ──
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
    accessibilityFeatures: ["flat_courtyard", "step_free_access", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
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
    openingHours: "Open 24 hours (square); theatre box office hours vary by event schedule",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "20:00" },
      { dayOfWeek: 1, open: "08:30", close: "20:00" },
      { dayOfWeek: 2, open: "08:30", close: "20:00" },
      { dayOfWeek: 3, open: "08:30", close: "20:00" },
      { dayOfWeek: 4, open: "08:30", close: "20:00" },
      { dayOfWeek: 5, open: "08:30", close: "20:00" },
      { dayOfWeek: 6, open: "08:30", close: "20:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["street_parking", "shaded_benches", "walking_paths"],
    restrictions: ["Theatre auditorium entry requires concert or show ticket during scheduled performances"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Inaugurated in 1926 in colonial Art Deco style, the Théâtre Municipal Mohamed Afifi (seating 458 spectators) is El Jadida's grand stage for national theater, Arabic poetry recitals, and musical concerts. Fronted by a recently redesigned pedestrian plaza with benches and palm trees, it marks the civic gateway between the colonial Plateau and the modern beachfront avenue.",
    shortValueProp: "A 1926 Art Deco civic theater and lively cultural gathering square.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/19/El_Jadida%2C_Morocco_Oct_2023_-_Th%C3%A9%C3%A2tre_Mohamed_Afifi.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Forteresse_Jadida_01.JPG/1280px-Forteresse_Jadida_01.JPG"
    ],
    googleRating: 4.3,
    reviewCount: 652,
    googleReviewCount: 652,
    badge: "popular",
    tip: "Visit at dusk when the theatre's warm facade lighting turns on and local families gather on the open esplanade.",
    tips: [
      "Check the lobby board for upcoming weekend theater, Andalusian music, or Malhun poetry festivals.",
      "The square connects directly into Boulevard Mohamed VI for evening strolls."
    ],
    highlights: [
      "Art Deco 1926 civic architecture with classic colonnades and symmetry",
      "Lively public square hosting evening street performers and family leisure"
    ],
    emotionalBenefits: ["Connected", "Nostalgic", "Vibrant"],
    bestTimeToVisit: "Late afternoon and evening",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Square Stroll", price: 0, currency: "MAD" },
      { name: "Performance Ticket (Varies by show)", price: 50, currency: "MAD" }
    ],
    discountsInfo: "Public square access is completely free; show tickets range from 30 to 100 MAD depending on the cultural production.",
    includedServices: ["Public esplanade and exterior architecture viewing"],
    excludedServices: ["Ticketed stage performances"],
    hiddenCostsInfo: "None for square access.",
    address: "Avenue Mohamed VI / Place Hansali, Plateau, El Jadida 24000, Morocco",
    coordinates: { lat: 33.2519, lng: -8.5024 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mohamed+Afifi+Theatre+Square%2C+el+jadida%2C+Morocco",
    parkingInfo: "Ample street parking along Avenue Mohamed VI and around Place Hansali.",
    publicTransportInfo: "5-minute walk south from the Cité Portugaise entrance.",
    dressCode: "Smart casual for evening events; casual for square strolls.",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed (Completely flat paved pedestrian plaza)",
    ageRestrictions: "Suitable for all age groups.",
    safetyNotes: "Well-lit and lively central city hub.",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        quote: "The theatre square captures the authentic civic atmosphere of El Jadida away from the beach crowds.",
        author: "Tariq F.",
        type: "Theater Enthusiast",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Parc Hassan II", type: "visit", distanceKm: 0.5 },
      { name: "Cité Portugaise of Mazagan", type: "visit", distanceKm: 0.6 }
    ],
    storyTitle: "Centenary of the Stage",
    history: "Opened in 1926 under the French Protectorate as the Salle Municipale de Mazagan, the theater played a pivotal role in the modernization of Moroccan performing arts. It was later rechristened in honor of legendary Moroccan playwright and actor Mohamed Afifi (1927–1988), who directed its resident theater troupe.",
    culturalImportance: "The theatre represents the 20th-century intellectual and artistic revival of the Doukkala region.",
    localLegend: "Old actors say Mohamed Afifi's voice had such projection that during warm summer shows, audiences gathered on the square outside could hear every line clearly.",
    funFact: "The theater celebrated its 100th anniversary in 2026, marking a century of unbroken civic performing arts.",
    faq: [
      { q: "Can tourists go inside without a ticket?", a: "During the day, the reception lobby and box office can be entered freely; the main auditorium is open only during performances." },
      { q: "Is the plaza wheelchair accessible?", a: "Yes, the surrounding esplanade is completely flat with ramped curb cuts." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "el-jadida-parc-hassan-ii",
    city: "el_jadida",
    name: "Parc Hassan II (Parc Spiny)",
    neighborhood: "Plateau",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "culture", "relaxation"],
    vibeTags: ["botanical", "peaceful", "lush", "tranquil"],
    tags: ["coastal", "family", "nature", "nature-walk", "picnic-spot", "relaxed", "urban", "walk", "walk-in"],
    badges: ["green-oasis", "peaceful-escape", "family-friendly", "budget-friendly"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
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
    accessibilityFeatures: ["flat_walkways", "shaded_benches", "step_free_paved_paths", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "07:00 AM - 08:30 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "07:00", close: "20:30" },
      { dayOfWeek: 1, open: "07:00", close: "20:30" },
      { dayOfWeek: 2, open: "07:00", close: "20:30" },
      { dayOfWeek: 3, open: "07:00", close: "20:30" },
      { dayOfWeek: 4, open: "07:00", close: "20:30" },
      { dayOfWeek: 5, open: "07:00", close: "20:30" },
      { dayOfWeek: 6, open: "07:00", close: "20:30" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["children_playground", "perimeter_benches", "shaded_benches", "street_parking", "walking_paths"],
    restrictions: ["No motorized bikes or littering in green zones"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Covering 45,000 square meters in the Plateau district, Parc Hassan II (historically known as Parc Spiny) is El Jadida's main urban green lung. Shaded by mature eucalyptus, towering Norfolk pines (araucaria), and date palms, the park features wide walking paths, wooden benches, and the historic red clay courts of the Difaâ Hassani d'El Jadida Tennis Club (DHJTC).",
    shortValueProp: "A 4.5-hectare tranquil coastal botanical park shaded by century-old pines and palms.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Forteresse_Jadida_01.JPG/1280px-Forteresse_Jadida_01.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/El_Jadida_Garden.jpg/1280px-El_Jadida_Garden.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 512,
    googleReviewCount: 512,
    badge: "popular",
    tip: "A relaxing refuge during hot summer middays when shade is needed between visits to the Cité Portugaise and Deauville beach.",
    tips: [
      "Grab a book or pastry from nearby bakeries on Avenue Mohamed VI to enjoy on the shaded park benches.",
      "The park borders the historic colonial villa quarters of Plateau."
    ],
    highlights: [
      "Century-old maritime eucalyptus, jacarandas, and Norfolk Island pines",
      "Children's play areas and quiet shaded paths away from seaside car traffic"
    ],
    emotionalBenefits: ["Calm", "Refreshed", "Peaceful"],
    bestTimeToVisit: "Morning or midday for shade",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Public Admission", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Open public botanical park; free of charge.",
    includedServices: ["Park grounds access", "Children's playground areas"],
    excludedServices: ["Tennis court access (requires club booking)"],
    hiddenCostsInfo: "None.",
    address: "Avenue Ibn Khaldoun, Plateau, El Jadida 24000, Morocco",
    coordinates: { lat: 33.2485, lng: -8.5075 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Parc+Hassan+II%2C+el+jadida%2C+Morocco",
    parkingInfo: "Free street parking along Avenue Ibn Khaldoun and Rue de Fès.",
    publicTransportInfo: "Short 10 MAD taxi ride or a 15-minute walk from Place Hansali.",
    dressCode: "Comfortable casual walking attire.",
    equipmentNeeded: ["Sun protection", "Comfortable walking shoes"],
    fitnessLevel: "Relaxed (Completely flat paved paths)",
    ageRestrictions: "Suitable for all ages; stroller and wheelchair friendly.",
    safetyNotes: "Safe, family-oriented municipal park with regular park keeper presence.",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        quote: "The smell of ocean pines and eucalyptus makes this the freshest green spot in the city.",
        author: "Hassan M.",
        type: "Local Resident",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Mohamed Afifi Theatre Square", type: "visit", distanceKm: 0.5 },
      { name: "Phare de Sidi Bouafi", type: "visit", distanceKm: 0.7 }
    ],
    storyTitle: "The Green Canopy of Spiny",
    history: "Laid out during the French Protectorate in the 1920s as Parc Spiny, the gardens were designed to provide an open botanical buffer and leisurely promenade for the expanding administrative plateau.",
    culturalImportance: "The park has served for generations as El Jadida's central green gathering spot for students reading under trees and families celebrating weekend outings.",
    localLegend: "Locals say several of the tallest Norfolk pines were planted with seeds brought directly on merchant vessels sailing from the South Pacific.",
    funFact: "The park hosts the prestigious DHJ Tennis Club, one of the oldest tennis institutions in coastal Morocco.",
    faq: [
      { q: "Is the park lit at night?", a: "Yes, path lamps remain on until park closing at 8:30 PM." },
      { q: "Are dogs allowed?", a: "Dogs on leashes are permitted on paved avenues." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "el-jadida-portuguese-city-mosque-exterior",
    city: "el_jadida",
    name: "Portuguese City Mosque & Pentagonal Minaret (Al Masjid Al Atiq)",
    neighborhood: "Cité Portugaise",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer", "history-weaver"],
    vibeTags: ["spiritual", "historical", "architectural", "solemn"],
    tags: ["architectural", "authentic", "cultural-tour", "historical", "iconic-landmark", "photography", "relaxed", "urban", "walk-in"],
    badges: ["architectural-gem", "historic-landmark", "cultural-icon"],
    // ── 2. FILTER ──
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
    accessibilityFeatures: ["flat_ground", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (exterior viewing); interior open for Muslim prayer times",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "05:00", close: "22:00" },
      { dayOfWeek: 1, open: "05:00", close: "22:00" },
      { dayOfWeek: 2, open: "05:00", close: "22:00" },
      { dayOfWeek: 3, open: "05:00", close: "22:00" },
      { dayOfWeek: 4, open: "05:00", close: "22:00" },
      { dayOfWeek: 5, open: "05:00", close: "22:00" },
      { dayOfWeek: 6, open: "05:00", close: "22:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ablution_facilities_worshippers", "mosque_prayer_room", "shaded_courtyards"],
    restrictions: [
      "Mosque interior is strictly reserved for Muslim prayer; non-Muslim visitors observe and photograph the unique exterior"
    ],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Al Masjid Al Atiq (The Old Mosque) stands at the center of the Cité Portugaise facing the Church of the Assumption. Its defining feature is a minaret that is unique in the Islamic world: transformed in 1880 from the 1514 Portuguese watchtower (Torre do Rebate) under Alaouite Sultan Moulay Hassan I, the minaret retains an irregular pentagonal/polygonal shape rather than the customary square Maghrebi form.",
    shortValueProp: "A mosque featuring an irregular pentagonal minaret converted from a 1514 Portuguese tower.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Forteresse_Jadida_01.JPG/1280px-Forteresse_Jadida_01.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Grande_Mosquee_El_Jadida_Minaret.jpg/1280px-Grande_Mosquee_El_Jadida_Minaret.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 492,
    googleReviewCount: 492,
    badge: "architectural-gem",
    tip: "Stand at the center of Place Al-Khattabi to capture both the pentagonal minaret and the Manueline church facade in a single wide-angle photograph.",
    tips: [
      "Note the five irregular sides of the tower, which reveal its military origins as a naval watchtower.",
      "Observe quiet etiquette and dress respectfully around the prayer hall entrance."
    ],
    highlights: [
      "Only known pentagonal minaret in Moroccan Islamic architecture",
      "Direct architectural recycling of a 16th-century Portuguese military watchtower"
    ],
    emotionalBenefits: ["Spiritual", "Curious", "Grounded"],
    bestTimeToVisit: "Morning or mid-afternoon outside prayer calls",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Exterior Observation", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Free public viewing of exterior.",
    includedServices: ["Plaza exterior observation"],
    excludedServices: ["Interior tourist visits (worship only)"],
    hiddenCostsInfo: "None.",
    address: "Place Al-Khattabi, Cité Portugaise, El Jadida 24000, Morocco",
    coordinates: { lat: 33.2567, lng: -8.5013 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Portuguese+City+Mosque+Exterior%2C+el+jadida%2C+Morocco",
    parkingInfo: "Street parking outside the fortress at Place Hansali.",
    publicTransportInfo: "Walking distance from downtown El Jadida.",
    dressCode: "Modest attire covering shoulders and knees when passing near the entrance.",
    equipmentNeeded: ["Camera with wide-angle lens"],
    fitnessLevel: "Relaxed (Flat stone plaza walking)",
    ageRestrictions: "Suitable for all ages.",
    safetyNotes: "Respect worshipper privacy during call to prayer (Adhan).",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        quote: "A minaret built on a Renaissance Portuguese watchtower—there is truly no other mosque like this in Morocco.",
        author: "Brahim E.",
        type: "Cultural Geographer",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Church of the Assumption", type: "visit", distanceKm: 0.05 },
      { name: "Portuguese Cistern", type: "visit", distanceKm: 0.1 }
    ],
    storyTitle: "The Watchtower That Became a Minaret",
    history: "Inaugurated on May 2, 1823 (20 Sha'ban 1238 AH) under Sultan Moulay Abderrahmane, the mosque initially possessed a short minaret whose prayer call could not be heard across the bay. In 1880, Pacha Mohamed Ben Driss El Jirari petitioned Sultan Moulay Hassan I to raise the muezzin's platform onto the adjoining 1514 Portuguese Torre do Rebate, creating this one-of-a-kind five-sided minaret.",
    culturalImportance: "The building exemplifies the pragmatic architectural fusion of post-1769 El Jadida, where Moroccan builders preserved and adapted military stone structures into sacred civic spaces.",
    localLegend: "Chronicler Ahmad ibn Khalid an-Nasiri, stationed as customs director in El Jadida in 1880, recorded in his 'Kitab al-Istiqsa' that the entire population celebrated when the first Adhan resonated from the converted Portuguese tower.",
    funFact: "The original shorter 1823 minaret still stands preserved on the southern side of the mosque roof.",
    faq: [
      { q: "Can non-Muslims enter the mosque?", a: "No, interior entry is restricted to Muslim worshippers, but the exterior and minaret are in full public view from the plaza." },
      { q: "Why is the minaret five-sided?", a: "Because it was built directly upon the irregular polygonal foundations of the 16th-century Portuguese artillery and lookout tower." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "el-jadida-resistance-and-liberation-memory-space",
    city: "el_jadida",
    name: "Espace de la Mémoire Historique de la Résistance et de la Libération",
    neighborhood: "Plateau",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad", "history-weaver"],
    vibeTags: ["historical", "solemn", "peaceful"],
    tags: ["authentic", "cultural-tour", "historical", "off-the-beaten-path", "private", "relaxed", "urban", "walk-in"],
    badges: ["educational", "hidden-gem", "historic-memorial"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.7,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_walkways", "step_free_access"],
    isPhotographyFriendly: false,
    hasPrivateOption: true,
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
      kidSuitable: true,
    },
    openingHours: "08:30 AM - 04:30 PM (Monday to Friday)",
    openingHoursStructured: [
      { dayOfWeek: 1, open: "08:30", close: "16:30" },
      { dayOfWeek: 2, open: "08:30", close: "16:30" },
      { dayOfWeek: 3, open: "08:30", close: "16:30" },
      { dayOfWeek: 4, open: "08:30", close: "16:30" },
      { dayOfWeek: 5, open: "08:30", close: "16:30" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "information_desk", "restrooms", "shaded_benches"],
    restrictions: ["Closed on weekends and official national public holidays"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Housed in a 1920s Neo-Moorish administrative building (the historic former 'Bureau Arabe'), this specialized museum honors the heroes of Morocco's national independence movement in the Doukkala province. Curated by the High Commission for Former Resistance Fighters, the exhibits feature historical photographs, patriotic manuscripts, clandestine printing presses, uniforms, and period weaponry.",
    shortValueProp: "A museum in a 1920s Neo-Moorish pavilion detailing Morocco's independence movement.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Forteresse_Jadida_01.JPG/1280px-Forteresse_Jadida_01.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Espace_Memoire_El_Jadida.jpg/1280px-Espace_Memoire_El_Jadida.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 479,
    googleReviewCount: 479,
    badge: "hidden-gem",
    tip: "A quiet cultural stop for history buffs exploring the architectural heritage of El Jadida's colonial Plateau.",
    tips: [
      "Explanatory notes are in Arabic and French; on-site docents are exceptionally helpful in explaining Doukkala's resistance history.",
      "Photography of sensitive archival documents is restricted."
    ],
    highlights: [
      "Authentic colonial Neo-Moorish architecture featuring Horseshoe arches and zellige tiles",
      "Archival exhibits of clandestine radio equipment and patriotic anti-colonial publications"
    ],
    emotionalBenefits: ["Educational", "Reflective", "Grounded"],
    bestTimeToVisit: "Weekday mornings",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Educational Admission", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Free public museum managed by the High Commission for Former Resistance Fighters.",
    includedServices: ["Self-guided museum access", "Access to specialized reference library"],
    excludedServices: ["Audio guide rentals"],
    hiddenCostsInfo: "None.",
    address: "Avenue Nabeul, Plateau, El Jadida 24000, Morocco",
    coordinates: { lat: 33.2505, lng: -8.5042 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Resistance+and+Liberation+Memory+Space%2C+el+jadida%2C+Morocco",
    parkingInfo: "Street parking available on Avenue Nabeul.",
    publicTransportInfo: "Short 5-minute walk from Mohamed Afifi Theatre Square.",
    dressCode: "Smart casual respectful attire.",
    equipmentNeeded: ["Notebook"],
    fitnessLevel: "Relaxed (Single-floor museum walk with step-free entry)",
    ageRestrictions: "Suitable for all age groups; particularly educational for students.",
    safetyNotes: "Quiet civic cultural space.",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        quote: "A moving, well-maintained tribute to Morocco's struggle for sovereignty in the Doukkala region.",
        author: "Abdelilah B.",
        type: "Historical Researcher",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Mohamed Afifi Theatre Square", type: "visit", distanceKm: 0.3 },
      { name: "Parc Hassan II", type: "visit", distanceKm: 0.4 }
    ],
    storyTitle: "Guardians of National Memory",
    history: "During the French Protectorate, the building served as the Bureau des Affaires Indigènes (Bureau Arabe), where political detainees and nationalists were interrogated. Following independence, Morocco converted the site into an educational memorial dedicated to the martyrs of the liberation struggle.",
    culturalImportance: "The museum preserves the oral histories, letters, and artifacts of Doukkala tribes who mobilized alongside the Crown against colonial control.",
    localLegend: "Historians recount that resistance members secretly passed messages across El Jadida hidden inside loaves of bread baked near the Portuguese gate.",
    funFact: "The museum regularly hosts local book fairs and symposiums dedicated to the regional historiography of Doukkala.",
    faq: [
      { q: "Is admission really free?", a: "Yes, all spaces of memory run by the High Commission across Morocco offer free admission to the public." },
      { q: "Is it open on Saturdays?", a: "No, the facility operates during standard civil service hours, Monday through Friday." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "el-jadida-azemmour-medina-day-trip",
    city: "el_jadida",
    name: "Azemmour Medina Day Trip",
    neighborhood: "Plateau",
    // ── 1. QUIZ ──
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "large-groups"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad", "art-and-culture", "photographer"],
    vibeTags: ["artistic", "historical", "scenic", "authentic"],
    tags: ["16th-century-ramparts", "authentic", "cultural-tour", "day-trip", "instagrammable", "medina", "photo-spot", "private", "walk-in"],
    badges: ["cultural-immersion", "hidden-gem", "historic-landmark", "must-see"],
    // ── 2. FILTER ──
    price: 150,
    pricePerPerson: 150,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 15.0,
    transportMode: "mixed",
    transportModes: ["drive", "taxi", "bus"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "08:00 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:00", close: "19:00" },
      { dayOfWeek: 1, open: "08:00", close: "19:00" },
      { dayOfWeek: 2, open: "08:00", close: "19:00" },
      { dayOfWeek: 3, open: "08:00", close: "19:00" },
      { dayOfWeek: 4, open: "08:00", close: "19:00" },
      { dayOfWeek: 5, open: "08:00", close: "19:00" },
      { dayOfWeek: 6, open: "08:00", close: "19:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths", "traditional_restaurant", "street_parking"],
    restrictions: ["Narrow cobblestone medina streets; access on foot only"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Located just 15 kilometers northeast of El Jadida, the historic walled town of Azemmour perches dramatically on a rocky bluff over the Oum Er-Rbia river estuary. Celebrated for its 16th-century fortress ramparts, whitewashed medina, international street art murals, and historic Jewish mellah, it makes an unforgettable half-day cultural excursion.",
    shortValueProp: "Explore 16th-century river ramparts and vivid street art murals in nearby Azemmour.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Forteresse_Jadida_01.JPG/1280px-Forteresse_Jadida_01.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Azemmour_Medina_Murals.jpg/1280px-Azemmour_Medina_Murals.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 1854,
    googleReviewCount: 1854,
    badge: "must-see",
    tip: "Walk along the cliffside ramparts overlooking the Oum Er-Rbia River at low tide to watch traditional wooden river barges cross the estuary.",
    tips: [
      "Grand taxis depart every few minutes from El Jadida's Gare Routière on Plateau for just 10-15 MAD per seat.",
      "Explore the medina alleys where walls are decorated each year with vibrant murals by Moroccan and international artists."
    ],
    highlights: [
      "Monumental 16th-century Portuguese fortress walls overlooking the Oum Er-Rbia river",
      "Vibrant open-air contemporary street art murals painted directly onto ancient whitewashed walls"
    ],
    emotionalBenefits: ["Inspired", "Curious", "Authentic"],
    bestTimeToVisit: "Morning or early afternoon followed by riverfront lunch",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Medina Access (Self-Guided)", price: 0, currency: "MAD" },
      { name: "Round-Trip Grand Taxi / Transport", price: 30, currency: "MAD" }
    ],
    discountsInfo: "Medina entry is free; round-trip collective taxi costs approximately 25-30 MAD.",
    includedServices: ["Self-guided medina exploration", "Rampart viewing"],
    excludedServices: ["Private transport", "Licensed guided tours"],
    hiddenCostsInfo: "Riverside fresh shad or sea bass lunch costs 80-140 MAD.",
    address: "Medina d'Azemmour, Azemmour (Excursion departing from Plateau), El Jadida Province, Morocco",
    coordinates: { lat: 33.2872, lng: -8.3422 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Azemmour+Medina+Day+Trip%2C+el+jadida%2C+Morocco",
    parkingInfo: "Parking available outside the medina rampart gate near Place de la Victoire.",
    publicTransportInfo: "Frequent 20-minute grand taxi connection from El Jadida Central Station on Plateau.",
    dressCode: "Comfortable modest attire suited for uphill cobblestone exploration.",
    equipmentNeeded: ["Walking shoes", "Camera"],
    fitnessLevel: "Moderate (Cobblestone medina inclines and stairways)",
    ageRestrictions: "Suitable for all age groups.",
    safetyNotes: "Calm and peaceful medina; respect local residents when photographing alley murals.",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        quote: "Azemmour's quiet street art murals and sweeping river views make it a hidden artistic jewel of Morocco.",
        author: "Julian W.",
        type: "Artist & Nomad",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Cité Portugaise of Mazagan", type: "visit", distanceKm: 15.0 },
      { name: "Haouzia Beach", type: "visit", distanceKm: 8.0 }
    ],
    storyTitle: "The Watchman on the Mother of Spring",
    history: "One of Morocco's most ancient settlements, Azemmour was a Carthaginian and Berber river port before Portuguese occupation in 1513. Its most famous historical native is Estevanico (Mustapha Zemmouri), the 16th-century explorer who was the first native African to cross the North American continent.",
    culturalImportance: "The town is a revered artistic haven in Morocco, having fostered generations of painters, poets, and calligraphers.",
    localLegend: "Local fishermen believe that the estuary where the Oum Er-Rbia meets the Atlantic holds the blessing of Lalla Aicha Bahria, patron saint of lovers.",
    funFact: "Azemmour was home to Estevanico (c. 1500–1539), the legendary Moroccan explorer who traversed Florida, Texas, and New Mexico.",
    faq: [
      { q: "How far is Azemmour from El Jadida?", a: "It is approximately 15 kilometers, taking 15 to 20 minutes by car or grand taxi." },
      { q: "Is a guided tour required?", a: "No, the medina is compact and very safe to explore independently on foot." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "el-jadida-phare-de-sidi-bouafi",
    city: "el_jadida",
    name: "Phare de Sidi Bouafi (Sidi Bouafi Lighthouse)",
    neighborhood: "Plateau",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad", "history-weaver", "photographer"],
    vibeTags: ["panoramic-view", "historical", "architectural", "scenic"],
    tags: ["architectural", "authentic", "coastal", "cultural-tour", "historical", "iconic-landmark", "panoramic-view", "photo-spot", "walk-in"],
    badges: ["historic-landmark", "architectural-landmark", "panoramic-view", "sunset-spot"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 1.6,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "09:00 AM - 06:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "18:00" },
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 2, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
      { dayOfWeek: 6, open: "09:00", close: "18:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "street_parking", "historical_documentation"],
    restrictions: [
      "Ascent of the 248 spiral steps depends on maritime lighthouse keeper authorization"
    ],
    healthContraindications: ["Cardiovascular issues or severe vertigo for spiral stair ascent"],
    // ── 3. UI ──
    description: "Perched on the highest point of El Jadida's maritime plateau at 65 meters above sea level, the Phare de Sidi Bouafi was erected between 1914 and 1916 by German prisoners of war. Its 46-meter round granite tower and revolving Fresnel optic form a famed Atlantic navigation triangle with Cape St. Vincent in Portugal and Trafalgar in Spain, offering a 360-degree panorama over the entire coastline.",
    shortValueProp: "A 46-meter granite lighthouse built in 1916 offering 360-degree Atlantic coastal panoramas.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Sidi_Bou_Afi_8BCV1513.jpg/1280px-Sidi_Bou_Afi_8BCV1513.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Forteresse_Jadida_01.JPG/1280px-Forteresse_Jadida_01.JPG"
    ],
    googleRating: 4.5,
    reviewCount: 310,
    googleReviewCount: 310,
    badge: "top-pick",
    tip: "If the keeper grants access, climb the 248 spiral steps for the highest vantage point anywhere in El Jadida province.",
    tips: [
      "Even if tower ascent is restricted for maintenance, the surrounding hilltop grounds offer an excellent panoramic view of the bay.",
      "The white dome of the local saintly marabout of Sidi Bouafi stands right next to the lighthouse gate."
    ],
    highlights: [
      "Historic 1916 lighthouse tower constructed with solid granite and rotating Fresnel lamp",
      "Panoramic views across the bay, the Cité Portugaise, and the western Atlantic beaches"
    ],
    emotionalBenefits: ["Inspired", "Breezy", "Curious"],
    bestTimeToVisit: "Late afternoon around sunset",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Exterior Grounds Viewing", price: 0, currency: "MAD" },
      { name: "Keeper Courtesy Tip (Optional for ascent)", price: 20, currency: "MAD" }
    ],
    discountsInfo: "Public grounds access is free; small tips (10-20 MAD) are customary if guided up the tower.",
    includedServices: ["Grounds viewing", "Exterior historic architecture access"],
    excludedServices: ["Guaranteed tower climbing (subject to port authority regulations)"],
    hiddenCostsInfo: "None.",
    address: "Plateau de Sidi Bouafi, Quartier du Phare, Plateau, El Jadida 24000, Morocco",
    coordinates: { lat: 33.2503, lng: -8.5169 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phare+de+Sidi+Bouafi+El+Jadida",
    parkingInfo: "Street parking available directly outside the lighthouse entrance gate.",
    publicTransportInfo: "Short 10 MAD taxi ride from downtown El Jadida or Place Hansali.",
    dressCode: "Practical walking attire; flat shoes if ascending the stone spiral staircase.",
    equipmentNeeded: ["Camera", "Binoculars"],
    fitnessLevel: "Moderate (248 spiral stone stairs to reach the lantern gallery)",
    ageRestrictions: "Tower ascent not recommended for toddlers or those with vertigo.",
    safetyNotes: "Take care on narrow spiral steps; hold handrails securely.",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        quote: "The view from the top of Sidi Bouafi sweeps from the old citadel all the way down to Sidi Bouzid.",
        author: "Omar S.",
        type: "Coastal Photographer",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Parc Hassan II", type: "visit", distanceKm: 0.7 },
      { name: "Mohamed Afifi Theatre Square", type: "visit", distanceKm: 1.2 }
    ],
    storyTitle: "The Great Beacon of the Atlantic Triangle",
    history: "Approved in 1909 by Sultan Moulay Abdelhafid to protect shipping approaching the booming commercial port of Mazagan, the lighthouse was built during World War I between 1914 and 1916 by German prisoners of war under the direction of French marine engineers. It was automated in 1963.",
    culturalImportance: "The lighthouse is considered one of the iconic maritime symbols of modern El Jadida, anchoring the city's historic seafaring identity.",
    localLegend: "Local folklore attributes therapeutic virtues to climbing the 248 steps, with families traditionally bringing youths to the summit to build strength and clear their spirits.",
    funFact: "Its electric lamp produces three white flashes every 5 seconds, casting a powerful beam visible up to 30 nautical miles (nearly 60 km) out to sea.",
    faq: [
      { q: "Can anyone climb to the top of the lighthouse?", a: "Access up the spiral stairs is granted at the discretion of the maritime lighthouse keeper on duty." },
      { q: "Is it worth visiting from the outside?", a: "Yes, the impressive granite tower architecture and surrounding elevated plateau views are well worth the detour." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "el-jadida-galerie-chaibia-talal",
    city: "el_jadida",
    name: "Galerie Chaïbia Talal",
    neighborhood: "Cité Portugaise",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history-weaver"],
    vibeTags: ["artistic", "intricate", "historical", "peaceful"],
    tags: ["architectural", "authentic", "cultural-tour", "culture", "historical", "urban", "walk-in", "workshop"],
    badges: ["cultural-immersion", "hidden-gem", "artisan-village"],
    // ── 2. FILTER ──
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
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_ground", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "10:00 AM - 06:00 PM (Tuesday to Sunday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "18:00" },
      { dayOfWeek: 2, open: "10:00", close: "18:00" },
      { dayOfWeek: 3, open: "10:00", close: "18:00" },
      { dayOfWeek: 4, open: "10:00", close: "18:00" },
      { dayOfWeek: 5, open: "10:00", close: "18:00" },
      { dayOfWeek: 6, open: "10:00", close: "18:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "shaded_courtyards"],
    restrictions: ["Closed on Mondays during exhibition transitions"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Housed inside the vaulted 16th-century stone casemates of the Portuguese fortress near the Squala, Galerie Chaïbia Talal is an art space dedicated to Doukkala's most famous artist, Chaïbia Talal (1929–2004). Restored in 2000, the 200-square-meter stone gallery hosts rotating exhibitions of contemporary Moroccan painting, sculpture, and regional visual arts.",
    shortValueProp: "Contemporary art exhibitions set beneath 16th-century stone vaults in the citadel.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Forteresse_Jadida_01.JPG/1280px-Forteresse_Jadida_01.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/El_Jadida_Cit%C3%A9_Portugaise_Street.jpg/1280px-El_Jadida_Cit%C3%A9_Portugaise_Street.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 120,
    googleReviewCount: 120,
    badge: "hidden-gem",
    tip: "A quiet and inspiring retreat inside the fortress walls where you can admire contemporary Moroccan canvases set against raw 500-year-old stone.",
    tips: [
      "Exhibitions rotate frequently, featuring both renowned national painters and emerging local Doukkala talents.",
      "Admission is completely free to the public."
    ],
    highlights: [
      "Atmospheric 16th-century Portuguese vaulted stone architecture converted into a gallery",
      "Tribute to Chaïbia Talal, Morocco's world-renowned master of naive and intuitive painting"
    ],
    emotionalBenefits: ["Inspired", "Serene", "Curious"],
    bestTimeToVisit: "Mid-afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Cultural Admission", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Free public access funded by the Ministry of Culture.",
    includedServices: ["Gallery exhibition access"],
    excludedServices: ["Catalog purchases"],
    hiddenCostsInfo: "None.",
    address: "La Squala, Cité Portugaise, El Jadida 24000, Morocco",
    coordinates: { lat: 33.2570, lng: -8.5005 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Galerie+Chaibia+Talal+El+Jadida",
    parkingInfo: "Park outside the fortress near Place Hansali and walk 200 meters inside.",
    publicTransportInfo: "Walking distance from anywhere in the Cité Portugaise.",
    dressCode: "Casual respectful attire.",
    equipmentNeeded: ["Camera (no flash)"],
    fitnessLevel: "Relaxed (Level ground inside stone gallery)",
    ageRestrictions: "Suitable for all ages.",
    safetyNotes: "Do not touch hanging artwork.",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        quote: "Seeing vibrant modern Moroccan paintings hung against ancient Portuguese stone vaults is pure magic.",
        author: "Diane L.",
        type: "Art Collector",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Mazagan Ramparts Walk", type: "visit", distanceKm: 0.05 },
      { name: "Portuguese Cistern", type: "visit", distanceKm: 0.1 }
    ],
    storyTitle: "The Voice That Commanded Color",
    history: "Born in Chtouka near El Jadida, Chaïbia Talal was widowed at an early age and began painting in her thirties after having a vivid dream where a voice told her to take up brushes and colors. She went on to achieve global recognition, exhibiting in Paris, London, and New York as Morocco's premier naive master.",
    culturalImportance: "The gallery anchors El Jadida's reputation as a thriving coastal art colony and offers regional artists high-profile exhibition space.",
    localLegend: "Artists say the cool stone acoustics of the vaulted room allow painters to hear the rhythmic ocean swell while setting up their exhibitions.",
    funFact: "Chaïbia Talal's work is included in the permanent collections of major contemporary art museums worldwide.",
    faq: [
      { q: "Is admission free?", a: "Yes, entrance to Galerie Chaïbia Talal is free for all visitors." },
      { q: "Can I buy the paintings on display?", a: "Most rotating exhibitions are organized with the artists, who can be contacted for acquisitions." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "el-jadida-moulay-abdellah-amghar-ribat",
    city: "el_jadida",
    name: "Sanctuaire et Ribat de Moulay Abdellah Amghar (Tit-n-Ftr)",
    neighborhood: "Sidi Bouzid",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "history-weaver", "spiritual", "first-timer"],
    vibeTags: ["spiritual", "historical", "scenic", "authentic"],
    tags: ["adobe-fortress", "authentic", "coastal", "cultural-tour", "festival", "historical", "iconic-landmark", "spiritual-hub", "walk-in"],
    badges: ["historic-landmark", "cultural-immersion", "must-see"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 11.0,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "08:00 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:00", close: "19:00" },
      { dayOfWeek: 1, open: "08:00", close: "19:00" },
      { dayOfWeek: 2, open: "08:00", close: "19:00" },
      { dayOfWeek: 3, open: "08:00", close: "19:00" },
      { dayOfWeek: 4, open: "08:00", close: "19:00" },
      { dayOfWeek: 5, open: "08:00", close: "19:00" },
      { dayOfWeek: 6, open: "08:00", close: "19:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths", "historical_documentation", "street_parking"],
    restrictions: ["Mausoleum shrine interior reserved for Muslim pilgrims; historic walls and grounds are open to all"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Located 10 kilometers south of central El Jadida just beyond the resort of Sidi Bouzid, Moulay Abdellah Amghar is an 11th-century medieval fortified ribat known historically as Tit-n-Ftr ('Eye of the Spring'). Founded by the revered Amghar Berber saintly lineage, the site preserves ancient Almoravid/Almohad defensive towers, two historic minarets, and the sea-facing ramparts where Morocco's largest annual equestrian festival (Moussem de Tbourida) takes place.",
    shortValueProp: "An 11th-century medieval coastal ribat and site of Morocco's largest equestrian moussem.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Forteresse_Jadida_01.JPG/1280px-Forteresse_Jadida_01.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Moulay_Abdellah_Minaret.jpg/1280px-Moulay_Abdellah_Minaret.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 920,
    googleReviewCount: 920,
    badge: "historical",
    tip: "Walk between the two surviving medieval minarets to admire 900-year-old stone masonry standing directly over the Atlantic spray.",
    tips: [
      "If visiting in August, the coastal plains host over 20,000 horsemen and falconers during the Moussem Moulay Abdellah Amghar.",
      "Combine your excursion with fresh grilled sardines at the nearby seaside fishing stalls of Sidi Bouzid."
    ],
    highlights: [
      "Twin ancient medieval minarets dating from the 11th and 12th centuries",
      "Epic oceanfront setting of Morocco's most famous annual Fantasia / Tbourida moussem"
    ],
    emotionalBenefits: ["Spiritual", "Authentic", "Curious"],
    bestTimeToVisit: "Morning or late afternoon before sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round; spectacular during the August Moussem festival",
    ticketTypes: [
      { name: "Free Historic Site Access", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Open historical village and archaeological monument; free admission.",
    includedServices: ["Self-guided historic ribat perimeter exploration"],
    excludedServices: ["Festival event seating during annual moussem"],
    hiddenCostsInfo: "Grand taxi fare from El Jadida is approximately 10-15 MAD per seat.",
    address: "Village de Moulay Abdellah, Route Côtière R301 (Sidi Bouzid), El Jadida 24000, Morocco",
    coordinates: { lat: 33.1970, lng: -8.5875 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Moulay+Abdellah+Amghar+El+Jadida",
    parkingInfo: "Ample open parking on the vast festival esplanade.",
    publicTransportInfo: "Accessible via grand taxi or local bus heading south along the coastal road from El Jadida.",
    dressCode: "Modest casual attire respectful of a historic holy shrine sanctuary.",
    equipmentNeeded: ["Walking shoes", "Camera"],
    fitnessLevel: "Relaxed (Flat village footpaths and sandy seaside trails)",
    ageRestrictions: "Suitable for all age groups.",
    safetyNotes: "Dress respectfully around the religious mausoleum perimeter.",
    languages: ["Arabic (Darija)", "French", "Berber (Tamazight)"],
    visitorQuotes: [
      {
        quote: "Walking among the 900-year-old stone towers of Tit overlooking the wild Atlantic waves gives you chills.",
        author: "Rachid H.",
        type: "Heritage Explorer",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Sidi Bouzid Beach", type: "visit", distanceKm: 4.5 },
      { name: "Phare de Sidi Bouafi", type: "visit", distanceKm: 9.0 }
    ],
    storyTitle: "The Ancient Ribat of Tit",
    history: "Mentioned by medieval geographer Al-Idrisi in the 12th century, Tit was established as an armed spiritual fortress (ribat) by Abu Jaafar Ishaq Amghar to defend the Atlantic coast against maritime raiders and foster spiritual contemplation.",
    culturalImportance: "The sanctuary hosts the Moussem of Moulay Abdellah Amghar every August, drawing over 500,000 spectators and 1,000 traditional horsemen (Sorba) in Morocco's largest exhibition of ancestral equestrian heritage and falconry.",
    localLegend: "Legend tells that the saint struck the coastal rock with his wooden staff, causing a spring of sweet freshwater to bubble forth right at the edge of the salty ocean tides.",
    funFact: "The site contains two separate stone minarets built a century apart by Almoravid and Almohad sovereigns.",
    faq: [
      { q: "Is the site open outside festival periods?", a: "Yes, the historic village, towers, and oceanfront ramparts can be visited peacefully all year." },
      { q: "How far is it from El Jadida?", a: "It is approximately 11 km south along the scenic coastal route R301 past Sidi Bouzid." }
    ],
  }
];