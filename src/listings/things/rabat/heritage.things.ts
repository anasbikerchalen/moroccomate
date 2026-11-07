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
 * =========================================================================
 */
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — HERITAGE & CULTURE ══
export const rabatHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-kasbah-des-oudaias",
    city: "rabat",
    name: "Kasbah des Oudaïas",
    neighborhood: "Kasbah des Oudaïas",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture", "photographer"],
    vibeTags: ["historical", "scenic", "serene", "iconic"],
    tags: ["cultural-tour", "historic-landmark", "historical", "coastal", "sunset", "instagrammable", "urban", "walk-in"],
    badges: ["must-see", "historic-landmark", "panoramic-view", "sunset-spot"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 75,
    distanceFromCenterKm: 1.2,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
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
    nearMedina: true,
    goodForRain: false,
    friction: { walkingFatigue: 2, heatExposure: 2, touristCrowd: 3, noiseLevel: 2, scamRisk: 2, physicalIntensity: 2, kidSuitable: true },
    openingHours: "Open 24 hours daily (Gardens close at dusk)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:00", close: "19:00" },
      { dayOfWeek: 1, open: "08:00", close: "19:00" },
      { dayOfWeek: 2, open: "08:00", close: "19:00" },
      { dayOfWeek: 3, open: "08:00", close: "19:00" },
      { dayOfWeek: 4, open: "08:00", close: "19:00" },
      { dayOfWeek: 5, open: "08:00", close: "19:00" },
      { dayOfWeek: 6, open: "08:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "panoramic_viewpoint", "walking_paths", "shaded_courtyards", "traditional_fountains"],
    restrictions: ["Respectful quietness requested in residential alleys"],
    healthContraindications: ["Uneven cobblestones requiring sturdy walking shoes"],
    // ── 3. UI — presentation & social proof ──
    description: "A 12th-century blue-and-white clifftop citadel overlooking the Bouregreg estuary and the Atlantic Ocean, complete with Andalusian gardens and panoramic ocean terraces.",
    shortValueProp: "Rabat's premier historic ocean citadel with cobalt alleys and Atlantic sunset views.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kasbah_des_Oudayas_in_Rabat.jpg/1280px-Kasbah_des_Oudayas_in_Rabat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Porte_des_Oudayas_Rabat_Maroc.jpg/1280px-Porte_des_Oudayas_Rabat_Maroc.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 1986,
    badge: "must-see",
    tip: "Enter through the grand Almohad gate Bab Oudaïa, walk past the Andalusian Garden, and head directly to the ocean platform for golden hour.",
    tips: [
      "Visit at morning or golden hour for quieter alleys and ideal photography lighting",
      "Decline unofficial guides waiting near the main gateway",
      "Stop at Café Maure for mint tea and almond gazelle horns overlooking the river"
    ],
    highlights: [
      "Monumental 12th-century Almohad gate of Bab Oudaïa",
      "Picturesque whitewashed and indigo-blue residential alleyways",
      "Expansive ocean-view battery platform overlooking Salé and the Atlantic"
    ],
    emotionalBenefits: [
      "Peaceful coastal respite away from traffic noise",
      "Aesthetic inspiration from harmonious Andalusian-Moroccan architecture"
    ],
    ticketTypes: [{ name: "Kasbah Grounds & Gardens", price: 0, currency: "MAD" }],
    includedServices: ["Public access to citadel alleys", "Access to Andalusian Gardens and viewing platform"],
    excludedServices: ["Entry to Musée National de la Parure (separate ticket)", "Café Maure refreshments"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Safe", description: "Regularly patrolled by tourist police; very peaceful residential quarter.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Faux Guides", description: "Unlicensed guides linger at the main gate; decline politely and walk in freely.", state: "verified", tone: "caution", tagColor: "alert" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Entry", description: "Walking the kasbah alleys and ramparts costs nothing.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Authentic", description: "Living UNESCO-listed historic residential community dating to Almohad times.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Cobbled Steps", description: "Sloped alleys and smooth cobblestones; not ideal for wheelchairs or strollers.", state: "verified", tone: "caution", tagColor: "safety" }
    ],
    address: "Lotissement Al Kasbah, Rabat, Morocco",
    coordinates: { lat: 34.0328, lng: -6.8361 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kasbah+des+Oudaias%2C+rabat%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-hassan-tower",
    city: "rabat",
    name: "Hassan Tower",
    neighborhood: "Tour Hassan / Hassan",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture", "photographer"],
    vibeTags: ["historical", "architectural", "iconic", "regal"],
    tags: ["cultural-tour", "historic-landmark", "historical", "architectural", "sunset", "instagrammable", "urban", "walk-in"],
    badges: ["must-see", "historic-landmark", "architectural-landmark"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1.0,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "bus"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "flat_courtyard", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: false,
    goodForRain: false,
    friction: { walkingFatigue: 2, heatExposure: 4, touristCrowd: 3, noiseLevel: 2, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "08:30 AM - 06:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "18:00" },
      { dayOfWeek: 1, open: "08:30", close: "18:00" },
      { dayOfWeek: 2, open: "08:30", close: "18:00" },
      { dayOfWeek: 3, open: "08:30", close: "18:00" },
      { dayOfWeek: 4, open: "08:30", close: "18:00" },
      { dayOfWeek: 5, open: "08:30", close: "18:00" },
      { dayOfWeek: 6, open: "08:30", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths", "parking_perimeter"],
    restrictions: ["Respectful behavior expected; no climbing on historical pillar bases"],
    healthContraindications: ["Wide open unshaded stone esplanade with high sun exposure at midday"],
    // ── 3. UI — presentation & social proof ──
    description: "The monumental 44-meter sandstone minaret and forest of 348 stone columns left unfinished after the 1199 death of Almohad Sultan Yacoub el-Mansour.",
    shortValueProp: "Rabat's emblematic 12th-century Almohad minaret and monumental stone pillar forest.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Tour_Hassan_Rabat_2019.jpg/1280px-Tour_Hassan_Rabat_2019.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 2646,
    badge: "essential",
    tip: "Pair your visit with the adjoining Mausoleum of Mohammed V on the same plaza; early morning offers clear photo angles with fewer tour groups.",
    tips: [
      "Bring sun protection as the open stone plaza has zero shade",
      "Look closely at the carved sebka lattice patterns on each of the four tower facades"
    ],
    highlights: [
      "Imposing 12th-century reddish sandstone Almohad minaret",
      "Hypostyle forest of over 300 preserved Almohad stone pillars",
      "Panoramic views across the Bouregreg valley toward Salé"
    ],
    emotionalBenefits: [
      "Awe at medieval architectural ambition",
      "Solemn appreciation of Moroccan dynastic history"
    ],
    ticketTypes: [{ name: "Esplanade Admission", price: 0, currency: "MAD" }],
    includedServices: ["Access to the monumental esplanade and historic column grounds"],
    excludedServices: ["Interior ascent of minaret (permanently closed to public)"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Guarded", description: "Heavily guarded by ceremonial royal guards and official municipal security.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "No Scams", description: "Official national monument; no ticket hustles or unofficial vendors on the plaza.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Entry", description: "Open to the public completely free of charge.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Historic", description: "Original 12th-century Almohad masonry surviving the 1755 Lisbon earthquake.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Flat Plaza", description: "Completely flat paved plaza with step-free ramps suitable for all mobility levels.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Boulevard Mohamed Lyazidi, Tour Hassan, Rabat, Morocco",
    coordinates: { lat: 34.0241, lng: -6.8227 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hassan+Tower%2C+rabat%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-mausoleum-of-mohammed-v",
    city: "rabat",
    name: "Mausoleum of Mohammed V",
    neighborhood: "Tour Hassan / Hassan",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture", "history"],
    vibeTags: ["solemn", "regal", "intricate", "ornate"],
    tags: ["cultural-tour", "historic-landmark", "historical", "architectural", "urban", "walk-in"],
    badges: ["must-see", "cultural-icon", "historic-memorial"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 1.0,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "flat_courtyard"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: { walkingFatigue: 1, heatExposure: 2, touristCrowd: 3, noiseLevel: 1, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "08:30 AM - 06:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "18:00" },
      { dayOfWeek: 1, open: "08:30", close: "18:00" },
      { dayOfWeek: 2, open: "08:30", close: "18:00" },
      { dayOfWeek: 3, open: "08:30", close: "18:00" },
      { dayOfWeek: 4, open: "08:30", close: "18:00" },
      { dayOfWeek: 5, open: "08:30", close: "18:00" },
      { dayOfWeek: 6, open: "08:30", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "shaded_courtyards"],
    restrictions: ["Modest dress required (shoulders and knees covered); silent contemplation requested inside"],
    healthContraindications: ["Few steps up to the viewing gallery"],
    // ── 3. UI — presentation & social proof ──
    description: "A masterpiece of modern Alaouite architecture housing the white onyx tombs of King Mohammed V and his sons King Hassan II and Prince Abdallah beneath hand-carved cedar and gold leaf.",
    shortValueProp: "Exquisite Alaouite royal memorial showcasing the pinnacle of Moroccan zellige and plasterwork.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Mausoleum_of_Mohammed_V_in_Rabat.jpg/1280px-Mausoleum_of_Mohammed_V_in_Rabat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Interior_of_the_Mausoleum_of_Mohammed_V_in_Rabat%2C_Morocco.jpg/1280px-Interior_of_the_Mausoleum_of_Mohammed_V_in_Rabat%2C_Morocco.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 8188,
    badge: "essential",
    tip: "Look over the brass balcony down into the crypt where an official Quran reader chants continuously throughout the day.",
    tips: [
      "Dress respectfully with covered shoulders and knees to ensure smooth entry by the Royal Guard",
      "Photography without flash is permitted from the viewing gallery",
      "Notice the mounted Royal Guards in full ceremonial dress at every entrance portal"
    ],
    highlights: [
      "White Italian marble exterior with distinctive emerald green tiled roof",
      "Hand-carved Atlas cedar dome gilded with pure gold leaf",
      "Intricate hand-cut polychrome zellige mosaic floor and walls",
      "Soles sculpted white Pakistani onyx sarcophagus"
    ],
    emotionalBenefits: [
      "Solemn spiritual peace from the resonant Quran recitation",
      "Deep aesthetic admiration for traditional Moroccan master craftsmen (maâlems)"
    ],
    ticketTypes: [{ name: "Mausoleum Entry", price: 0, currency: "MAD" }],
    includedServices: ["Admission to interior viewing balcony and royal tomb chamber"],
    excludedServices: ["Lower crypt access (reserved for state officials and royal family)"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Royal Guard", description: "Guarded by the prestigious Moroccan Royal Guard; absolute safety standard.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "No Scams", description: "Zero commercial activity or unofficial guides permitted on site.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Entry", description: "Free public access to all visitors regardless of nationality.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Masterpiece", description: "Designed by Vietnamese architect Eric Vo Toan and built by 400 Moroccan master craftsmen.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Easy Walk", description: "Short flight of exterior stairs up to the viewing perimeter.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Boulevard Mohamed Lyazidi, Tour Hassan, Rabat, Morocco",
    coordinates: { lat: 34.0229, lng: -6.8217 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mausoleum+of+Mohammed+V%2C+rabat%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-chellah",
    city: "rabat",
    name: "Chellah Necropolis",
    neighborhood: "Tour Hassan / Hassan",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer", "photographer"],
    vibeTags: ["historical", "serene", "lush", "scenic"],
    tags: ["cultural-tour", "historic-landmark", "historical", "nature-walk", "photo-spot", "walk-in"],
    badges: ["must-see", "historic-landmark", "educational"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 70,
    pricePerPerson: 70,
    entryPrice: 70,
    durationMinutes: 90,
    distanceFromCenterKm: 2.2,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "step_free_paved_paths"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: false,
    friction: { walkingFatigue: 3, heatExposure: 3, touristCrowd: 2, noiseLevel: 1, scamRisk: 1, physicalIntensity: 2, kidSuitable: true },
    openingHours: "09:00 AM - 06:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "18:00" },
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 2, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
      { dayOfWeek: 6, open: "09:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "audioguide_service", "restrooms", "walking_paths", "shaded_benches", "fountains"],
    restrictions: ["Do not climb on fragile Roman stone foundations or medieval tombs"],
    healthContraindications: ["Terraced hillside garden path requires descending and ascending slopes"],
    // ── 3. UI — presentation & social proof ──
    description: "An ancient Roman colony (Sala Colonia) and 14th-century Marinid royal necropolis overgrown with wild fig trees, blooming bougainvillea, and resident white stork colonies.",
    shortValueProp: "Atmospheric hillside ruins blending Roman city ruins, Marinid royal tombs, and nesting storks.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Chellah_Rabat_Maroc.jpg/1280px-Chellah_Rabat_Maroc.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Chellah_Minaret_Rabat.jpg/1280px-Chellah_Minaret_Rabat.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 5008,
    badge: "essential",
    tip: "Pick up the official audio guide at the renovated ticket pavilion to understand the layered transition from Roman forum to medieval Sufi sanctuary.",
    tips: [
      "Springtime brings active nesting storks with clattering bills atop the ancient minaret",
      "Look for the sacred eel pool (Bassin des Anguilles) fed by a thermal spring",
      "The newly renovated pathways provide clear wayfinding throughout the valley"
    ],
    highlights: [
      "Monumental Marinid entrance gate built by Sultan Abu al-Hasan in 1339",
      "Excavated Roman decumanus maximus, forum, triumphal arch, and public baths",
      "Tiled minaret of the ruined Marinid mosque crowned with stork nests",
      "Lush romantic gardens with ancient aromatic flora"
    ],
    emotionalBenefits: [
      "Serene contemplation surrounded by nature and ancient stone",
      "Fascinating perspective on Morocco's pre-Islamic antiquity"
    ],
    ticketTypes: [
      { name: "General Admission (Foreigners)", price: 70, currency: "MAD" },
      { name: "Moroccan Citizens & Residents", price: 30, currency: "MAD" },
      { name: "Audio Guide Rental", price: 30, currency: "MAD" }
    ],
    includedServices: ["Full access to archaeological site, gardens, and new interpretive trail"],
    excludedServices: ["Audio guide device rental", "Guided human tour service"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure", description: "Enclosed gated national archaeological park with professional security and ticketing.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Official", description: "Fixed municipal entrance ticketing and optional verified digital audio guides.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Fixed Rate", description: "Transparent fixed pricing (70 MAD adult tourists, 30 MAD locals).", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Original", description: "Authentic multi-millennial ruins spanning Phoenician, Roman, and Marinid eras.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Gentle Slope", description: "Paved downhill slope upon entry requires modest uphill walk on return.", state: "verified", tone: "caution", tagColor: "safety" }
    ],
    address: "Boulevard Chellah, Quartier Hassan, Rabat, Morocco",
    coordinates: { lat: 34.0069, lng: -6.8216 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chellah%2C+rabat%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-rabat-medina-and-rue-des-consuls",
    city: "rabat",
    name: "Rabat Medina & Rue des Consuls",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad", "first-timer"],
    vibeTags: ["vibrant", "sensory", "historical"],
    tags: ["authentic", "medina", "shopping", "local-life", "street-food", "urban", "walk-in"],
    badges: ["market-experience", "shopping-hub", "cultural-immersion"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "transit"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: { walkingFatigue: 3, heatExposure: 1, touristCrowd: 4, noiseLevel: 3, scamRisk: 2, physicalIntensity: 2, kidSuitable: true },
    openingHours: "09:30 AM - 08:30 PM (Daily, some shops close midday Friday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:30", close: "20:30" },
      { dayOfWeek: 1, open: "09:30", close: "20:30" },
      { dayOfWeek: 2, open: "09:30", close: "20:30" },
      { dayOfWeek: 3, open: "09:30", close: "20:30" },
      { dayOfWeek: 4, open: "09:30", close: "20:30" },
      { dayOfWeek: 5, open: "09:30", close: "20:30" },
      { dayOfWeek: 6, open: "09:30", close: "20:30" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["artisan_workshops", "food_stalls", "fresh_juice_bars", "atm_nearby"],
    restrictions: ["Polite permission recommended before taking portrait photos of shopkeepers"],
    healthContraindications: ["Crowded pedestrian market thoroughfare during afternoon peak"],
    // ── 3. UI — presentation & social proof ──
    description: "A relaxed, orderly 17th-century walled medina centered on Rue des Consuls, famed for artisan leather slippers, carved woodwork, and traditional hand-knotted Rabati carpets.",
    shortValueProp: "Morocco's most relaxed medina walk with premier craft shopping and minimal vendor hassle.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Rue_des_Consuls%2C_Rabat.jpg/1280px-Rue_des_Consuls%2C_Rabat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Medina_of_Rabat_-_Rue_Souika.jpg/1280px-Medina_of_Rabat_-_Rue_Souika.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 2602,
    badge: "popular",
    tip: "Visit on Monday or Thursday mornings between 10:00 AM and noon to witness the traditional Dlala carpet auction on Rue des Consuls.",
    tips: [
      "Much calmer and less aggressive than the souks of Marrakech or Fes",
      "Enter through Bab El Had and walk down Rue Souika directly into Rue des Consuls",
      "Keep cash (MAD) on hand for street snacks and smaller craft workshops"
    ],
    highlights: [
      "Historic street of foreign ambassadors and European consuls up to 1912",
      "Authentic Rabati high-knot wool carpets with distinctive central medallions",
      "Direct artisan leather workshops producing babouches and hand-stitched bags"
    ],
    emotionalBenefits: [
      "Low-stress Moroccan market discovery with genuine merchant courtesy",
      "Sensory immersion in mint aromas, leather, cedarwood, and spices"
    ],
    ticketTypes: [{ name: "Medina Access", price: 0, currency: "MAD" }],
    includedServices: ["Self-guided access to historic streets, fondouks, and craft quarters"],
    excludedServices: ["Personal purchases and food tastings"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Safe Walk", description: "One of Morocco's calmest medinas with heavy local presence and tourist police.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Low Hassle", description: "Merchants do not aggressively pursue or hassle passing travelers.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Bargaining", description: "Prices are generally lower than Marrakech; friendly negotiation is customary.", state: "verified", tone: "caution", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Genuine Crafts", description: "Real working workshops where artisans tan leather, carve wood, and weave.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Flat Walk", description: "Relatively straight, flat paved thoroughfares with minimal stair climbs.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Rue des Consuls, Médina Ancienne, Rabat, Morocco",
    coordinates: { lat: 34.0253, lng: -6.8375 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rabat+Medina+%26+Rue+des+Consuls%2C+rabat%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-mohammed-vi-museum-of-modern-and-contemporary-art",
    city: "rabat",
    name: "Musée Mohammed VI d'Art Moderne et Contemporain (MMVI)",
    neighborhood: "Tour Hassan / Hassan",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "nomad"],
    vibeTags: ["artistic", "elegant", "architectural", "serene"],
    tags: ["cultural-tour", "modern", "relaxed", "urban", "walk-in"],
    badges: ["cultural-icon", "architectural-gem", "educational"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 60,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 75,
    distanceFromCenterKm: 0.6,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "transit"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "level_entry_doorway", "wide_main_corridors"],
    isPhotographyFriendly: false,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: { walkingFatigue: 2, heatExposure: 1, touristCrowd: 2, noiseLevel: 1, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "10:00 AM - 06:00 PM (Closed Tuesdays)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "18:00" },
      { dayOfWeek: 1, open: "10:00", close: "18:00" },
      { dayOfWeek: 3, open: "10:00", close: "18:00" },
      { dayOfWeek: 4, open: "10:00", close: "18:00" },
      { dayOfWeek: 5, open: "10:00", close: "18:00" },
      { dayOfWeek: 6, open: "10:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "gift_shop", "cafe", "restrooms", "exhibition_hall"],
    restrictions: ["No flash photography; large backpacks must be stored in free lockers at entrance"],
    healthContraindications: ["None; fully air-conditioned and step-free"],
    // ── 3. UI — presentation & social proof ──
    description: "Morocco's premier national modern art institution, presenting masterworks by Moroccan painters, sculptors, and photographers from the early 20th century to the present day alongside major international retrospectives.",
    shortValueProp: "The Kingdom's premier contemporary art museum housed in striking neo-Moorish architecture.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mus%C3%A9e_Mohammed_VI_d%27art_moderne_et_contemporain.jpg/1280px-Mus%C3%A9e_Mohammed_VI_d%27art_moderne_et_contemporain.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cath%C3%A9drale_Saint-Pierre_de_Rabat.jpg/1280px-Cath%C3%A9drale_Saint-Pierre_de_Rabat.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 6145,
    badge: "top-pick",
    tip: "Friday afternoons offer free entry for Moroccan nationals and resident card holders; plan a morning visit on Wednesday or Thursday for empty galleries.",
    tips: [
      "The museum cafe on the patio is one of the quietest coffee stops in central Rabat",
      "Check their temporary exhibitions which frequently bring masterworks from the Pompidou and Prado"
    ],
    highlights: [
      "Pioneering Moroccan modernists: Chaïbia Talal, Jilali Gharbaoui, and Ahmed Cherkaoui",
      "Solar-powered contemporary building with laser-cut arabesque motifs",
      "Dynamic rotating international exhibitions of sculpture and photography"
    ],
    emotionalBenefits: [
      "Intellectual stimulation discovering modern North African art movements",
      "Cool, tranquil indoor respite from city bustle"
    ],
    ticketTypes: [
      { name: "Foreign Visitors Entry", price: 60, currency: "MAD" },
      { name: "Moroccan Citizens & Foreign Residents", price: 30, currency: "MAD" },
      { name: "Students (under 18)", price: 15, currency: "MAD" }
    ],
    includedServices: ["Admission to permanent collections and temporary exhibitions", "Locker storage"],
    excludedServices: ["Audio guide", "Special exhibition catalog from gift shop"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure", description: "State museum security with professional baggage screening and climate control.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Official", description: "Official National Museum Foundation (FNM) facility with electronic ticketing.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Great Value", description: "Standard ticket is 60 MAD for international visitors; 50% discount for residents.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "World Class", description: "Curated directly by the Fondation Nationale des Musées du Maroc.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Accessible", description: "Elevator access to all exhibition levels and completely step-free entrances.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "2 Avenue Moulay Hassan, Tour Hassan, Rabat, Morocco",
    coordinates: { lat: 34.0158, lng: -6.8335 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mohammed+VI+Museum+of+Modern+and+Contemporary+Art%2C+rabat%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-museum-of-history-and-civilisations",
    city: "rabat",
    name: "Musée de l'Histoire et des Civilisations",
    neighborhood: "Tour Hassan / Hassan",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "culture", "first-timer"],
    vibeTags: ["historical", "peaceful", "serene", "educational" as any],
    tags: ["cultural-tour", "historical", "morning", "relaxed", "urban", "walk-in"],
    badges: ["educational", "hidden-gem", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 60,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "ground_floor_access", "wide_main_corridors"],
    isPhotographyFriendly: false,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: { walkingFatigue: 1, heatExposure: 1, touristCrowd: 1, noiseLevel: 1, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "10:00 AM - 06:00 PM (Closed Tuesdays)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "18:00" },
      { dayOfWeek: 1, open: "10:00", close: "18:00" },
      { dayOfWeek: 3, open: "10:00", close: "18:00" },
      { dayOfWeek: 4, open: "10:00", close: "18:00" },
      { dayOfWeek: 5, open: "10:00", close: "18:00" },
      { dayOfWeek: 6, open: "10:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "restrooms", "exhibition_hall", "historical_documentation"],
    restrictions: ["No flash photography; do not touch antique glass display cases"],
    healthContraindications: ["None; fully accessible ground-floor and ramped galleries"],
    // ── 3. UI — presentation & social proof ──
    description: "Morocco's premier archaeological treasury, preserving prehistoric hominid remains, Berber artifacts, and the famed world-class Roman bronzes excavated from Volubilis.",
    shortValueProp: "Morocco's finest archaeological collection featuring the legendary Roman bronzes of Volubilis.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mus%C3%A9e_de_l%27histoire_et_des_civilisations_de_Rabat_-_Buste_de_Juba_II.jpg/1280px-Mus%C3%A9e_de_l%27histoire_et_des_civilisations_de_Rabat_-_Buste_de_Juba_II.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 2145,
    badge: "hidden-gem",
    tip: "Do not miss the Bronze Room housing the exquisitely preserved bust of King Juba II, the crowned ephebe, and the Barking Dog of Volubilis.",
    tips: [
      "Very quiet and rarely crowded even on peak weekend mornings",
      "Clear chronological layout tracing Morocco from the Paleolithic to Islamic dynasties"
    ],
    highlights: [
      "Famous Volubilis Roman bronze masterpieces (Juba II, Cato, Ephebe)",
      "Cast of the ancient Jebel Irhoud skull representing the roots of Homo sapiens in Morocco",
      "Extensive collection of Mauritanian Tingitana coins and Roman mosaics"
    ],
    emotionalBenefits: [
      "Awe at classical antiquity preserved in North Africa",
      "Clear historical context connecting all Morocco's ancient ruins"
    ],
    ticketTypes: [
      { name: "Adult Admission", price: 20, currency: "MAD" },
      { name: "Youth (under 18)", price: 10, currency: "MAD" },
      { name: "Children (under 12)", price: 5, currency: "MAD" }
    ],
    includedServices: ["Admission to all permanent archaeological halls and coin gallery"],
    excludedServices: ["Private guide service"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Protected", description: "Quiet government museum with constant security surveillance.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Official", description: "Fixed state museum pricing; zero commercial third-party interference.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Very Cheap", description: "Exceptional value at only 20 MAD per adult.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Priceless", description: "Original antiquity bronzes and authentic Moroccan archaeological findings.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Easy Walk", description: "Compact, quiet, single-level indoor walking tour.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "23 Rue El Brihi, Tour Hassan, Rabat, Morocco",
    coordinates: { lat: 34.0139, lng: -6.8315 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Museum+of+History+and+Civilisations%2C+rabat%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-grand-theatre-de-rabat-exterior-walk",
    city: "rabat",
    name: "Grand Théâtre de Rabat Exterior Walk",
    neighborhood: "Tour Hassan / Hassan",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["art-and-culture", "photographer", "nomad"],
    vibeTags: ["architectural", "artistic", "scenic"],
    tags: ["architectural", "modern", "waterfront", "sunset", "instagrammable", "urban", "walk-in"],
    badges: ["architectural-gem", "architectural-landmark", "sunset-spot"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1.8,
    transportMode: "taxi",
    transportModes: ["taxi", "drive", "transit"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "wide_flat_walkways", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: false,
    goodForRain: false,
    friction: { walkingFatigue: 2, heatExposure: 3, touristCrowd: 2, noiseLevel: 2, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "Open 24 hours daily (Exterior esplanade and river promenade)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths", "parking"],
    restrictions: ["Interior theater auditoriums require performance tickets; exterior plaza freely accessible"],
    healthContraindications: ["Sun exposure along the open riverbank esplanade during midday"],
    // ── 3. UI — presentation & social proof ──
    description: "Zaha Hadid's futuristic sculptural monument in the Bouregreg valley, inspired by Arabic calligraphy and the gentle flow of the river.",
    shortValueProp: "Zaha Hadid's breathtaking sculptural masterpiece along the Bouregreg riverbank.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grand_Theatre_de_Rabat.jpg/1280px-Grand_Theatre_de_Rabat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 2367,
    badge: "architectural-gem",
    tip: "Arrive just before sunset when the soft light accentuates the curving white concrete lines and the river reflects the building's contours.",
    tips: [
      "Walk the waterfront promenade connecting the theater to the marina",
      "A must-visit for modern architecture enthusiasts and photographers"
    ],
    highlights: [
      "Iconic signature design by legendary architect Dame Zaha Hadid",
      "47,000-square-meter futuristic cultural complex",
      "Sweeping panoramas of the Hassan Tower across the river valley"
    ],
    emotionalBenefits: [
      "Inspiration from cutting-edge 21st-century architectural daring",
      "Breezy, modern riverside tranquility"
    ],
    ticketTypes: [{ name: "Exterior Esplanade Walk", price: 0, currency: "MAD" }],
    includedServices: ["Public access to riverside plaza and architectural viewpoints"],
    excludedServices: ["Performance tickets and internal auditorium access"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure", description: "Well-lit and monitored public waterfront development.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "No ticket touts or touting; completely public promenade.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free", description: "Exterior architectural walking tour costs zero dirhams.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Original Design", description: "Official posthumous masterwork of Pritzker Prize winner Zaha Hadid.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Flat Paved", description: "Smooth, wide modern walkways with total step-free stroller and wheelchair access.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Vallée du Bouregreg, Tour Hassan, Rabat, Morocco",
    coordinates: { lat: 34.027, lng: -6.8155 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Theatre+de+Rabat+Exterior+Walk%2C+rabat%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-royal-palace-esplanade",
    city: "rabat",
    name: "Royal Palace Esplanade (Dâr-al-Makhzen)",
    neighborhood: "Touarga",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture", "history"],
    vibeTags: ["regal", "solemn", "geometric", "ornate"],
    tags: ["cultural-tour", "historic-landmark", "historical", "urban", "walk-in"],
    badges: ["cultural-icon", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 1.5,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "flat_ground", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: false,
    friction: { walkingFatigue: 2, heatExposure: 3, touristCrowd: 1, noiseLevel: 1, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "08:30 AM - 05:30 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "17:30" },
      { dayOfWeek: 1, open: "08:30", close: "17:30" },
      { dayOfWeek: 2, open: "08:30", close: "17:30" },
      { dayOfWeek: 3, open: "08:30", close: "17:30" },
      { dayOfWeek: 4, open: "08:30", close: "17:30" },
      { dayOfWeek: 5, open: "08:30", close: "17:30" },
      { dayOfWeek: 6, open: "08:30", close: "17:30" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["parking_perimeter", "walking_paths"],
    restrictions: ["Must show physical passport or national ID at security gates; photographs permitted of gates only, never toward guard posts"],
    healthContraindications: ["Wide open unshaded ceremonial plaza"],
    // ── 3. UI — presentation & social proof ──
    description: "The primary official seat of the Moroccan monarchy, featuring the grand ceremonial Méchouar square, Ahl Fas mosque, and monumental brass doors.",
    shortValueProp: "The ceremonial heart of Moroccan royal governance and monumental Alaouite gates.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palais_royal_de_Rabat_-_Porte.jpg/1280px-Palais_royal_de_Rabat_-_Porte.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 538,
    badge: "historical",
    tip: "You must carry your original passport to clear the entrance checkpoint into the Touarga royal enclosure.",
    tips: [
      "Keep your camera pointed strictly at the monumental palace gates and plaza",
      "Friday midday is especially impressive when the King occasionally leads prayers at Ahl Fas mosque"
    ],
    highlights: [
      "Immense hand-carved and etched brass royal ceremonial portals",
      "Expansive ceremonial Méchouar plaza lined with manicured gardens",
      "Royal Ahl Fas mosque with green-tiled minaret"
    ],
    emotionalBenefits: [
      "Insight into Morocco's living sovereign traditions",
      "Stately, orderly calm in the capital's civic center"
    ],
    ticketTypes: [{ name: "Exterior Esplanade Access", price: 0, currency: "MAD" }],
    includedServices: ["Security-screened public access to the Méchouar exterior grounds"],
    excludedServices: ["Interior palace access (closed to public)"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Strict Security", description: "Highest security level in Morocco with Gendarmerie Royale and national police.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "Zero commercial activity or unauthorized persons permitted inside Touarga.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Entry", description: "Free public access with identity verification.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Sovereign Seat", description: "Active seat of government and royal residence since Sultan Mohammed III.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Flat Walk", description: "Vast, open, completely level ceremonial grounds.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Commune de Touarga, Rabat, Morocco",
    coordinates: { lat: 34.0125, lng: -6.8358 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Royal+Palace+Esplanade%2C+rabat%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-st-peters-cathedral",
    city: "rabat",
    name: "Cathédrale Saint-Pierre",
    neighborhood: "Tour Hassan / Hassan",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "photographer"],
    vibeTags: ["architectural", "peaceful", "serene", "geometric"],
    tags: ["architectural", "historical", "urban", "walk-in"],
    badges: ["architectural-gem", "peaceful-escape"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.4,
    transportMode: "walkable",
    transportModes: ["walk", "transit", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: { walkingFatigue: 1, heatExposure: 1, touristCrowd: 1, noiseLevel: 1, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "09:00 AM - 12:30 PM & 03:00 PM - 06:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "18:00" },
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 2, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
      { dayOfWeek: 6, open: "09:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["shaded_benches", "fountains"],
    restrictions: ["Active Roman Catholic church; respectful attire and silence required during religious services"],
    healthContraindications: ["A few entrance steps into the nave"],
    // ── 3. UI — presentation & social proof ──
    description: "An extraordinary 1920s Art Deco cathedral designed by Adrien Laforgue, featuring soaring twin white spires dominating circular Place Al-Joulane.",
    shortValueProp: "Rabat's striking 1920s Art Deco cathedral dominating Place Al-Joulane.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cath%C3%A9drale_Saint-Pierre_de_Rabat.jpg/1280px-Cath%C3%A9drale_Saint-Pierre_de_Rabat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mus%C3%A9e_Mohammed_VI_d%27art_moderne_et_contemporain.jpg/1280px-Mus%C3%A9e_Mohammed_VI_d%27art_moderne_et_contemporain.jpg"
    ],
    googleRating: 4.2,
    reviewCount: 303,
    badge: "architectural-gem",
    tip: "Step inside to view the vivid contemporary stained-glass windows throwing colorful light patterns on the austere Art Deco concrete pillars.",
    tips: [
      "Located directly opposite the Mohammed VI Modern Art Museum; visit them consecutively",
      "The palm-lined square of Place Al-Joulane provides clean geometric angles for architectural photography"
    ],
    highlights: [
      "Distinctive twin octagonal needle-spires added in the 1930s",
      "Luminous modern stained-glass window array",
      "Active symbol of Morocco's constitutional religious tolerance"
    ],
    emotionalBenefits: [
      "Quiet spiritual contemplation in an active house of worship",
      "Appreciation for Morocco's 20th-century architectural heritage"
    ],
    ticketTypes: [{ name: "Cathedral Access", price: 0, currency: "MAD" }],
    includedServices: ["Public access to interior nave and surrounding garden square"],
    excludedServices: ["Tower spire ascent"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Peaceful", description: "Quiet and respectful diplomatic district with continuous police presence.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "No Hassle", description: "Zero street solicitation or scam activity.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Entry", description: "Free admission; voluntary donation box for church upkeep.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Historic 1921", description: "Consecrated in 1921, functioning as the seat of the Archdiocese of Rabat.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Very Easy", description: "Few steps at threshold; flat interior marble floor.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Place Al Joulane, Tour Hassan, Rabat, Morocco",
    coordinates: { lat: 34.0178, lng: -6.8314 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=St.+Peter%27s+Cathedral%2C+rabat%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-villa-des-arts",
    city: "rabat",
    name: "Villa des Arts de Rabat",
    neighborhood: "Centre-Ville",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "nomad"],
    vibeTags: ["artistic", "cosy", "peaceful", "serene"],
    tags: ["cultural-tour", "modern", "relaxed", "urban", "walk-in"],
    badges: ["peaceful-escape", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "ground_floor_access", "shaded_benches"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: { walkingFatigue: 1, heatExposure: 1, touristCrowd: 1, noiseLevel: 1, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "10:00 AM - 07:00 PM (Closed Mondays)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "19:00" },
      { dayOfWeek: 2, open: "10:00", close: "19:00" },
      { dayOfWeek: 3, open: "10:00", close: "19:00" },
      { dayOfWeek: 4, open: "10:00", close: "19:00" },
      { dayOfWeek: 5, open: "10:00", close: "19:00" },
      { dayOfWeek: 6, open: "10:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["garden_seating_access", "exhibition_hall", "restrooms", "shaded_benches"],
    restrictions: ["No commercial photography or video recording in exhibition rooms"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof ──
    description: "An elegant 1929 Art Deco villa run by the ONA Foundation, showcasing avant-garde Moroccan and international contemporary visual arts with quiet shaded gardens.",
    shortValueProp: "Intimate contemporary art gallery set within a charming 1920s Art Deco villa.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Villa_des_Arts_Rabat.jpg/1280px-Villa_des_Arts_Rabat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mus%C3%A9e_Mohammed_VI_d%27art_moderne_et_contemporain.jpg/1280px-Mus%C3%A9e_Mohammed_VI_d%27art_moderne_et_contemporain.jpg"
    ],
    googleRating: 4.3,
    reviewCount: 685,
    badge: "hidden-gem",
    tip: "Take 15 minutes to sit in the small shaded sculpture garden out back after viewing the indoor exhibitions.",
    tips: [
      "Exhibitions rotate every two to three months, offering something fresh on repeat visits",
      "Completely free admission makes it an effortless culture stop"
    ],
    highlights: [
      "Beautifully restored 1929 Art Deco architecture and garden",
      "Cutting-edge installations from emerging Moroccan artists",
      "Regular program of literary talks and cultural poetry readings"
    ],
    emotionalBenefits: [
      "Gentle cultural intimacy away from crowded tourist circuits",
      "Creative rejuvenation in a calm residential garden setting"
    ],
    ticketTypes: [{ name: "Exhibition Entry", price: 0, currency: "MAD" }],
    includedServices: ["Admission to ground and upper-floor exhibitions", "Access to sculpture garden"],
    excludedServices: ["Exhibition catalogs and event workshops"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "Quiet residential embassy and administrative district with private security.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "Philanthropic non-profit foundation gallery; zero commercial traps.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Entry", description: "Exhibitions and garden are entirely free of charge.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Curated", description: "Carefully curated contemporary Moroccan visual art by the ONA Foundation.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Very Easy", description: "Ground floor and garden are flat and very comfortable to navigate.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "10 Rue Beni Mellal, Angle Av. Mohammed V, Centre-Ville, Rabat, Morocco",
    coordinates: { lat: 34.0108, lng: -6.8356 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Villa+des+Arts%2C+rabat%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-tramway-rabat-sal-ride",
    city: "rabat",
    name: "Tramway Rabat-Salé Scenic Ride",
    neighborhood: "Centre-Ville",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "first-timer", "photographer"],
    vibeTags: ["scenic", "vibrant", "architectural"],
    tags: ["authentic", "urban", "waterfront", "walk-in"],
    badges: ["budget-friendly", "panoramic-view"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 6,
    pricePerPerson: 6,
    entryPrice: 6,
    durationMinutes: 45,
    distanceFromCenterKm: 0.2,
    transportMode: "transit",
    transportModes: ["bus"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "level_entry_doorway", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: true,
    friction: { walkingFatigue: 1, heatExposure: 1, touristCrowd: 3, noiseLevel: 2, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "06:00 AM - 11:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "06:00", close: "23:00" },
      { dayOfWeek: 1, open: "06:00", close: "23:00" },
      { dayOfWeek: 2, open: "06:00", close: "23:00" },
      { dayOfWeek: 3, open: "06:00", close: "23:00" },
      { dayOfWeek: 4, open: "06:00", close: "23:00" },
      { dayOfWeek: 5, open: "06:00", close: "23:00" },
      { dayOfWeek: 6, open: "06:00", close: "23:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "public_toilets_nearby"],
    restrictions: ["Must validate paper ticket or contactless card upon boarding"],
    healthContraindications: ["Can be crowded during weekday rush hours (08:00-09:00 and 17:30-18:30)"],
    // ── 3. UI — presentation & social proof ──
    description: "A scenic ride on Rabat's modern Alstom tramway, crossing the Bouregreg river over the Hassan II Bridge with sweeping views of the Kasbah, river valley, and Salé ramparts.",
    shortValueProp: "Panoramic 6 MAD river-crossing ride linking Rabat's avenues to historic Salé.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Tramway_Rabat_Sale_Hassan_II_Bridge.jpg/1280px-Tramway_Rabat_Sale_Hassan_II_Bridge.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kasbah_des_Oudayas_in_Rabat.jpg/1280px-Kasbah_des_Oudayas_in_Rabat.jpg"
    ],
    googleRating: 4.3,
    reviewCount: 913,
    badge: "popular",
    tip: "Board Line 1 at Station Ville Nouvelle or Bab Rouah and sit on the left-hand window side for breathtaking river views when crossing the Hassan II Bridge.",
    tips: [
      "Single tickets cost 6 MAD from automated kiosks at every station",
      "Avoid morning and evening commuter peaks for unhindered window photography"
    ],
    highlights: [
      "Panoramic crossing of the Bouregreg estuary on the Hassan II Bridge",
      "Views of Kasbah des Oudaïas, fishing dhows, and the Atlantic coastline",
      "Direct transit link between Rabat medina and Salé's historic grand mosque quarter"
    ],
    emotionalBenefits: [
      "Effortless immersion into the modern daily rhythm of Moroccan capital life",
      "Panoramic cinematic vistas of ancient and contemporary Rabat"
    ],
    ticketTypes: [{ name: "Single Tram Ticket", price: 6, currency: "MAD" }],
    includedServices: ["One-way travel valid for 1 hour including line connections"],
    excludedServices: ["Reloadable plastic smart card fee (optional 15 MAD)"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "Constant security controllers and surveillance cameras on every tramcar.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Automated", description: "Automated touchscreen ticketing machines with clear multi-language prompts.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "6 MAD Flat", description: "Fixed municipal transit tariff; unbeatable cost-to-view ratio.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Real Commute", description: "Authentic local cross-river transit utilized by thousands of students and commuters.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Zero Effort", description: "Level platform boarding flush with tramcar doors; 100% step-free.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Avenue Mohammed V, Centre-Ville, Rabat, Morocco",
    coordinates: { lat: 34.0205, lng: -6.8354 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tramway+Rabat-Sal%C3%A9+Ride%2C+rabat%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-mega-mall-and-ice-rink",
    city: "rabat",
    name: "Mega Mall & Ice Rink",
    neighborhood: "Souissi",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["family", "nomad", "first-timer"],
    vibeTags: ["energetic", "cosy"],
    tags: ["relaxed", "shopping", "urban", "walk-in"],
    badges: ["family-friendly"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 80,
    pricePerPerson: 80,
    entryPrice: 80,
    durationMinutes: 120,
    distanceFromCenterKm: 5.5,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "wide_flat_walkways", "level_entry_doorway"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: { walkingFatigue: 2, heatExposure: 1, touristCrowd: 3, noiseLevel: 3, scamRisk: 1, physicalIntensity: 2, kidSuitable: true },
    openingHours: "10:00 AM - 09:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "21:00" },
      { dayOfWeek: 1, open: "10:00", close: "21:00" },
      { dayOfWeek: 2, open: "10:00", close: "21:00" },
      { dayOfWeek: 3, open: "10:00", close: "21:00" },
      { dayOfWeek: 4, open: "10:00", close: "21:00" },
      { dayOfWeek: 5, open: "10:00", close: "21:00" },
      { dayOfWeek: 6, open: "10:00", close: "21:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["parking", "cafe", "restrooms", "children_playground", "atm_nearby"],
    restrictions: ["Socks and warm sweater recommended for ice rink sessions"],
    healthContraindications: ["Fall risk on ice for inexperienced skaters"],
    // ── 3. UI — presentation & social proof ──
    description: "A contemporary commercial center in the upscale Souissi embassy quarter, hosting Morocco's first indoor ice skating rink, bowling lanes, and dining.",
    shortValueProp: "Indoor ice skating, bowling, and shopping in upscale Souissi.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Mega_Mall_Rabat.jpg/1280px-Mega_Mall_Rabat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 390,
    badge: "popular",
    tip: "A great family option on unusually rainy or hot summer afternoons in Rabat.",
    tips: [
      "Ice rink sessions run in 90-minute blocks throughout the afternoon and evening",
      "Skate rental is included with the rink ticket"
    ],
    highlights: [
      "Olympic-standard indoor ice skating rink in the heart of North Africa",
      "12-lane modern bowling alley and arcade gaming center",
      "Quiet upscale cafés and brand boutiques"
    ],
    emotionalBenefits: [
      "Playful family bonding and active physical recreation",
      "Refreshing indoor air-conditioned break from summer heat"
    ],
    ticketTypes: [
      { name: "Mall Entry", price: 0, currency: "MAD" },
      { name: "Ice Skating Session (includes skate rental)", price: 80, currency: "MAD" },
      { name: "Bowling Game", price: 50, currency: "MAD" }
    ],
    includedServices: ["Mall entry", "Ice skate rental with ice rink ticket"],
    excludedServices: ["Personal shopping and food court meals"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Mall Security", description: "Strict private security entrance checks and monitored premises.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Fixed Retail", description: "Fixed prices across all stores and leisure ticket counters.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Clear Rates", description: "Ice skating is 80 MAD per session; mall entry is free.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Modern Leisure", description: "Modern urban leisure center reflecting contemporary Rabati lifestyle.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Active Sport", description: "Ice skating requires balance; mall interior is completely step-free.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Km 4.2 Route des Zaers, Avenue Mohammed VI, Souissi, Rabat, Morocco",
    coordinates: { lat: 33.9785, lng: -6.8291 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mega+Mall+%26+Ice+Rink%2C+rabat%2C+Morocco"
  },

  // ═════════════════════════════════════════════════════════
  // 5 NEW LISTINGS — HERITAGE & CULTURE
  // ═════════════════════════════════════════════════════════
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-musee-national-de-la-parure",
    city: "rabat",
    name: "Musée National de la Parure",
    neighborhood: "Kasbah des Oudaïas",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history-weaver"],
    vibeTags: ["intricate", "ornate", "historical", "regal"],
    tags: ["cultural-tour", "historic-landmark", "historical", "authentic", "walk-in"],
    badges: ["cultural-icon", "architectural-gem", "must-see"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 60,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 75,
    distanceFromCenterKm: 1.3,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "shaded_courtyards"],
    isPhotographyFriendly: false,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: { walkingFatigue: 2, heatExposure: 1, touristCrowd: 2, noiseLevel: 1, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "10:00 AM - 06:00 PM (Closed Tuesdays)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "18:00" },
      { dayOfWeek: 1, open: "10:00", close: "18:00" },
      { dayOfWeek: 3, open: "10:00", close: "18:00" },
      { dayOfWeek: 4, open: "10:00", close: "18:00" },
      { dayOfWeek: 5, open: "10:00", close: "18:00" },
      { dayOfWeek: 6, open: "10:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "gift_shop", "exhibition_hall", "restrooms", "shaded_courtyards"],
    restrictions: ["No flash photography; security checks at palace entrance"],
    healthContraindications: ["Some steps required to move between palace rooms"],
    // ── 3. UI — presentation & social proof ──
    description: "Housed in the restored 17th-century palace of Sultan Moulay Ismaïl within the Kasbah, this museum displays 8,000 historic pieces of Moroccan jewelry and royal Amazigh adornments.",
    shortValueProp: "8,000 priceless pieces of Moroccan tribal jewelry in a 17th-century royal palace.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Musee_des_Oudayas_Rabat.jpg/1280px-Musee_des_Oudayas_Rabat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kasbah_des_Oudayas_in_Rabat.jpg/1280px-Kasbah_des_Oudayas_in_Rabat.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 420,
    badge: "must-see",
    tip: "Do not miss the royal room displaying 350 historic silver Amazigh jewelry pieces loaned directly from King Mohammed VI's personal collection.",
    tips: [
      "Directly accessed from the Andalusian Garden inside the Kasbah des Oudaïas",
      "Allow at least one full hour to appreciate the filigree metalwork and regional costume details"
    ],
    highlights: [
      "Restored 17th-century Alaouite royal residence and serene courtyard",
      "Magnificent royal collection of Moroccan Amazigh silver and amber fibulae",
      "Historical evolution of ceremonial caftans and master embroidery"
    ],
    emotionalBenefits: [
      "Deep aesthetic admiration for Moroccan feminine artisan heritage",
      "Intimate appreciation of tribal symbolism and regional identity"
    ],
    ticketTypes: [
      { name: "Foreign Visitors Entry", price: 60, currency: "MAD" },
      { name: "Moroccan Citizens & Foreign Residents", price: 30, currency: "MAD" },
      { name: "Youth (under 18)", price: 15, currency: "MAD" }
    ],
    includedServices: ["Admission to permanent jewelry collection and palace courtyard"],
    excludedServices: ["Guided audio tour"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Guarded", description: "Fondation Nationale des Musées facility with strict security.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Official Booth", description: "Official ticketing at the garden gate; ignore anyone offering tours outside.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Fixed Rate", description: "Standard 60 MAD ticket; 50% discount for Moroccan residents.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Masterpieces", description: "Authentic centuries-old Moroccan regional jewelry and royal artifacts.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Modest Steps", description: "Located inside the Kasbah; some historic stone thresholds and steps.", state: "verified", tone: "caution", tagColor: "safety" }
    ],
    address: "Palais des Oudayas, Kasbah des Oudaïas, Rabat, Morocco",
    coordinates: { lat: 34.0321, lng: -6.8368 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e+National+de+la+Parure+Rabat"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-galerie-bab-rouah",
    city: "rabat",
    name: "Galerie Bab Rouah",
    neighborhood: "Centre-Ville",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history"],
    vibeTags: ["historical", "architectural", "artistic", "serene"],
    tags: ["cultural-tour", "historic-landmark", "historical", "modern", "urban", "walk-in"],
    badges: ["architectural-gem", "historic-landmark", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.9,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "transit"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "wide_main_corridors"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: { walkingFatigue: 1, heatExposure: 1, touristCrowd: 1, noiseLevel: 1, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "10:00 AM - 06:00 PM (Closed Sundays & Mondays)",
    openingHoursStructured: [
      { dayOfWeek: 2, open: "10:00", close: "18:00" },
      { dayOfWeek: 3, open: "10:00", close: "18:00" },
      { dayOfWeek: 4, open: "10:00", close: "18:00" },
      { dayOfWeek: 5, open: "10:00", close: "18:00" },
      { dayOfWeek: 6, open: "10:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation"],
    restrictions: ["Temporary exhibition rules depend on exhibiting artist"],
    healthContraindications: ["A few steps to enter through the monumental gate portal"],
    // ── 3. UI — presentation & social proof ──
    description: "Built in 1197 by Almohad Sultan Yacoub al-Mansour, Rabat's most monumental rampart gate ('Gate of the Winds') now serves as an atmospheric national art gallery beneath vaulted brick chambers.",
    shortValueProp: "Contemporary Moroccan art exhibitions set within an imposing 12th-century Almohad gate.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bab_ar-Rouah_Rabat.jpg/1280px-Bab_ar-Rouah_Rabat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg/960px-Hassan_Tower%2C_Rabat%2C_Marocco_%28%D8%B5%D9%88%D9%85%D8%B9%D8%A9_%D8%AD%D8%B3%D8%A7%D9%86_%29.jpg"
    ],
    googleRating: 4.3,
    reviewCount: 470,
    badge: "architectural-gem",
    tip: "Inspect the ancient mason marks carved by 12th-century stonecutters into the exterior floral arch before heading inside to view the canvases.",
    tips: [
      "Exhibitions change every two to three weeks, showcasing prominent Moroccan painters and sculptors",
      "Admission is completely free as it is operated directly by the Ministry of Culture"
    ],
    highlights: [
      "Monumental 28-meter stone facade with delicate Almohad sebka carvings",
      "Vaulted medieval defensive chambers repurposed into white gallery spaces",
      "Contrast between 12th-century military masonry and modern canvases"
    ],
    emotionalBenefits: [
      "Fascination at the seamless blend of medieval fortress and contemporary art",
      "Quiet cultural contemplation in an uncrowded landmark"
    ],
    ticketTypes: [{ name: "Gallery Admission", price: 0, currency: "MAD" }],
    includedServices: ["Free access to current art exhibitions inside the gate"],
    excludedServices: ["Art sales and catalogs"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "Quiet civic location facing Avenue de la Victoire.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Free Entry", description: "State cultural venue with no fees or pushy sales.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Zero MAD", description: "Open to the public completely free of charge.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "1197 Almohad", description: "Original 12th-century gate of the monumental Almohad city walls.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Short Visit", description: "Compact two-room gallery that takes 20-30 minutes to visit.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Avenue An-Nasr (Avenue de la Victoire), Centre-Ville, Rabat, Morocco",
    coordinates: { lat: 34.0152, lng: -6.8407 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bab+Rouah+Rabat"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-musee-bank-al-maghrib",
    city: "rabat",
    name: "Musée de Bank Al-Maghrib",
    neighborhood: "Centre-Ville",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "culture", "art-and-culture"],
    vibeTags: ["regal", "historical", "intricate", "serene"],
    tags: ["cultural-tour", "historical", "modern", "urban", "walk-in"],
    badges: ["educational", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 75,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk", "transit"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "level_entry_doorway", "wide_main_corridors"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: { walkingFatigue: 1, heatExposure: 1, touristCrowd: 1, noiseLevel: 1, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "09:00 AM - 05:00 PM (Closed Mondays)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "17:00" },
      { dayOfWeek: 6, open: "09:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "gift_shop", "exhibition_hall", "restrooms", "historical_documentation"],
    restrictions: ["Strict security screening at central bank entrance; valid ID required"],
    healthContraindications: ["None; fully accessible air-conditioned halls"],
    // ── 3. UI — presentation & social proof ──
    description: "Located within the historic central bank headquarters on Avenue Mohammed V, this museum traces Morocco's 2,000-year monetary history from ancient Greek and Carthaginian coins to royal dynasty mintages, alongside an exceptional fine art gallery.",
    shortValueProp: "2,000 years of Moroccan currency, royal coins, and Orientalist art in the historic central bank.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bank_Al-Maghrib_Rabat.jpg/1280px-Bank_Al-Maghrib_Rabat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 380,
    badge: "hidden-gem",
    tip: "Head to the upper floor to admire the superb collection of Orientalist paintings by Eugène Delacroix, Jacques Majorelle, and early Moroccan masters.",
    tips: [
      "Carry your passport or ID card for quick entry through the bank security desk",
      "Combines numismatic history with one of Rabat's finest hidden fine-art collections"
    ],
    highlights: [
      "Over 1,200 ancient coins spanning Punic, Roman, Idrisid, and Alaouite eras",
      "Art gallery with rare canvases by Jacques Majorelle, Henri Pontoy, and Edy-Legrand",
      "Historic 1920s bank architecture on central Avenue Mohammed V"
    ],
    emotionalBenefits: [
      "Deep intellectual discovery of trade and commerce across Moroccan history",
      "Quiet, refined ambiance right in the center of Rabat"
    ],
    ticketTypes: [
      { name: "General Admission", price: 20, currency: "MAD" },
      { name: "Students & Youths", price: 10, currency: "MAD" }
    ],
    includedServices: ["Access to numismatic history halls and permanent art gallery"],
    excludedServices: ["Numismatic specialized publications"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Bank Security", description: "Central bank headquarters with maximum armed security and surveillance.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "Official state financial institution; strictly professional operations.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "20 MAD", description: "Very modest 20 MAD ticket price for a world-class collection.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Rare Originals", description: "Original ancient coins minted in Volubilis, Fes, and Sijilmassa.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Fully Level", description: "Modern elevators and step-free access across all exhibition floors.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Angle Avenue Mohammed V et Rue Al-Qahira, Centre-Ville, Rabat, Morocco",
    coordinates: { lat: 34.0202, lng: -6.8361 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Musee+Bank+Al-Maghrib+Rabat"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-jardin-dessais-botaniques",
    city: "rabat",
    name: "Jardin d'Essais Botaniques",
    neighborhood: "Agdal",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nature", "relaxation", "photographer"],
    vibeTags: ["botanical", "peaceful", "serene", "lush", "historical"],
    tags: ["nature-walk", "historical", "morning", "relaxed", "photo-spot", "walk-in"],
    badges: ["green-oasis", "peaceful-escape", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 75,
    distanceFromCenterKm: 1.6,
    transportMode: "transit",
    transportModes: ["walk", "taxi", "bus"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "flat_walkways", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: false,
    friction: { walkingFatigue: 2, heatExposure: 1, touristCrowd: 1, noiseLevel: 1, scamRisk: 1, physicalIntensity: 1, kidSuitable: true },
    openingHours: "08:30 AM - 06:30 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "18:30" },
      { dayOfWeek: 1, open: "08:30", close: "18:30" },
      { dayOfWeek: 2, open: "08:30", close: "18:30" },
      { dayOfWeek: 3, open: "08:30", close: "18:30" },
      { dayOfWeek: 4, open: "08:30", close: "18:30" },
      { dayOfWeek: 5, open: "08:30", close: "18:30" },
      { dayOfWeek: 6, open: "08:30", close: "18:30" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["walking_paths", "shaded_benches", "fountains", "garden_seating_access"],
    restrictions: ["No ball games or bicycles on garden footpaths"],
    healthContraindications: ["None; gentle shaded walking terrain throughout"],
    // ── 3. UI — presentation & social proof ──
    description: "Designed in 1914 by French urbanist Jean-Claude Nicolas Forestier and part of Rabat's UNESCO World Heritage listing, this 17-hectare botanical reserve preserves over 600 exotic plant and tree species.",
    shortValueProp: "Historic 1914 UNESCO botanical sanctuary with 600 plant species in central Agdal.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Jardin_d%27essais_botaniques_de_Rabat.jpg/1280px-Jardin_d%27essais_botaniques_de_Rabat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 1941,
    badge: "hidden-gem",
    tip: "Do not miss the neo-Moorish pavilion nestled in the center of the arboretum, surrounded by tranquil lily ponds and giant bamboo groves.",
    tips: [
      "Easily accessible via Tramway Line 1 (Station Jardin d'Essais)",
      "Free entry makes it Rabat's most refreshing shaded picnic and reading escape"
    ],
    highlights: [
      "UNESCO-listed modern heritage botanical garden designed in 1914",
      "Over 600 tropical, subtropical, and Mediterranean botanical species",
      "Charming neo-Moorish pavilion, lotus ponds, and ancient palm collections"
    ],
    emotionalBenefits: [
      "Deep physical relaxation beneath centuries-old shade canopies",
      "Sensory delight from birdsong and fragrant jasmine blooms"
    ],
    ticketTypes: [{ name: "Botanical Garden Access", price: 0, currency: "MAD" }],
    includedServices: ["Free public access to all 17 hectares of botanical paths and arboretum"],
    excludedServices: ["Botanical nursery purchases"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Safe Park", description: "Enclosed municipal botanical park with security gates and dedicated gardeners.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "No Scams", description: "Completely public scientific botanical garden with zero vendors.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Entry", description: "Completely free of charge for all visitors.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "UNESCO Listed", description: "Historic 1914 botanical experimentation institution listed by UNESCO.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Flat Paths", description: "Smooth gravel and paved pedestrian paths suitable for strollers and wheelchairs.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Avenue An-Nasr / Avenue de la Victoire, Agdal, Rabat, Morocco",
    coordinates: { lat: 34.0089, lng: -6.8488 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jardin+d'Essais+Botaniques+Rabat"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "rabat-bibliotheque-nationale-du-royaume-du-maroc",
    city: "rabat",
    name: "Bibliothèque Nationale du Royaume du Maroc (BNRM)",
    neighborhood: "Agdal",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "art-and-culture", "nomad"],
    vibeTags: ["architectural", "peaceful", "serene", "modern" as any],
    tags: ["cultural-tour", "architectural", "modern", "relaxed", "urban", "walk-in"],
    badges: ["architectural-gem", "cultural-icon", "quiet-retreat"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1.4,
    transportMode: "transit",
    transportModes: ["walk", "taxi", "transit"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "level_entry_doorway", "wide_main_corridors"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: { walkingFatigue: 1, heatExposure: 1, touristCrowd: 1, noiseLevel: 1, scamRisk: 1, physicalIntensity: 1, kidSuitable: false },
    openingHours: "09:00 AM - 07:00 PM (Monday-Friday), 09:00 AM - 01:00 PM (Saturday), Closed Sundays",
    openingHoursStructured: [
      { dayOfWeek: 1, open: "09:00", close: "19:00" },
      { dayOfWeek: 2, open: "09:00", close: "19:00" },
      { dayOfWeek: 3, open: "09:00", close: "19:00" },
      { dayOfWeek: 4, open: "09:00", close: "19:00" },
      { dayOfWeek: 5, open: "09:00", close: "19:00" },
      { dayOfWeek: 6, open: "09:00", close: "13:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "cafe", "restrooms", "shaded_courtyards", "historical_documentation"],
    restrictions: ["Reading rooms require researcher registration; public exhibition galleries and garden esplanade are freely accessible"],
    healthContraindications: ["Quiet environment requires silent phone mode"],
    // ── 3. UI — presentation & social proof ──
    description: "The intellectual pinnacle of Morocco, housed in a celebrated modern complex designed by Rachid Andaloussi with an illuminated glass book tower, sunken gardens, and rotating rare manuscript exhibitions.",
    shortValueProp: "Morocco's landmark National Library featuring iconic modern architecture and rare manuscript galleries.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Biblioth%C3%A8que_Nationale_du_Royaume_du_Maroc_Rabat.jpg/1280px-Biblioth%C3%A8que_Nationale_du_Royaume_du_Maroc_Rabat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Morocco_-_Rabat_%2831387775324%29.jpg/1280px-Morocco_-_Rabat_%2831387775324%29.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 1450,
    badge: "architectural-gem",
    tip: "Visit the ground-floor gallery for seasonal exhibitions showcasing illuminated Andalusian-Moroccan manuscripts and rare royal lithographs.",
    tips: [
      "The quiet sunken courtyard cafeteria is a great spot to read or work on a laptop",
      "Admire the soaring 40-meter glass and metal lantern tower which lights up at night"
    ],
    highlights: [
      "Acclaimed modern architecture combining Atlas limestone, concrete, and glass",
      "Exhibitions of antique Quranic calligraphy and medieval Moroccan cartography",
      "Peaceful landscaped garden esplanade in the university heart of Agdal"
    ],
    emotionalBenefits: [
      "Inspiring immersion into Moroccan scholarly and literary history",
      "Acoustic serenity and quiet intellectual atmosphere"
    ],
    ticketTypes: [{ name: "Public Exhibition & Esplanade", price: 0, currency: "MAD" }],
    includedServices: ["Free access to public exhibition gallery, sunken patio, and architecture walk"],
    excludedServices: ["Academic researcher reading room membership"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Academic Guard", description: "National institution with strict campus gate security.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "Government scholarly institution; completely scam-free.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Entry", description: "Public galleries and garden courtyard are free to enter.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "National Archive", description: "Guardian of Morocco's national legal deposit and historic manuscript collection.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Accessible", description: "Wide elevators, gently sloped ramps, and flat interior corridors.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Avenue Ibn Khaldoun, Agdal, Rabat, Morocco",
    coordinates: { lat: 34.0075, lng: -6.8427 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bibliotheque+Nationale+du+Royaume+du+Maroc+Rabat"
  }
];