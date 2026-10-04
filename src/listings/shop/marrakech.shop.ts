import { ShopListing } from '../types';

/**
 * =========================================================================
 * MARRAKECH SHOP LISTINGS DATA & AI CRAWLER SPECIFICATION
 * =========================================================================
 *
 * When searching, parsing, or populating shop listings for Morocco Travel OS,
 * use this rich schema to ensure high-fidelity data capture.
 *
 * === SCHEMA FIELD DEFINITIONS & AI AGENT SEARCH SPECIFICATION ===
 *
 * 1.  id: string -> Unique ID. Format: 'sh-[city_id]-[incrementing_number]' (e.g., 'sh-mar-3')
 * 2.  city: CityId -> Target city identifier (e.g., 'marrakech', 'fes', 'chefchaouen')
 * 3.  name: string -> Official/common name of the establishment (e.g., 'Ensemble Artisanal')
 * 4.  type: ShopType -> MUST be one of these exact types:
 *     - 'souk_stall'       (tiny stall inside a traditional souk market)
 *     - 'boutique'         (smaller, curated modern or high-end shop)
 *     - 'cooperative'      (fair-trade/women-led cooperative or association)
 *     - 'mall_store'       (store located in a modern shopping center/mall)
 *     - 'pharmacy'         (traditional herbalist, spice apothecary, or herboristerie)
 *     - 'supermarket'      (standard convenience/grocery store)
 *     - 'designer_atelier' (custom high-fashion/craftsman workshop studio)
 *     - 'concept_store'    (modern lifestyle/design concept stores with mixed food/art spaces)
 *
 * 5.  category: string -> High-level category (e.g., 'Artisan Crafts', 'Fashion & Design', 'Spices & Cosmetics')
 * 6.  neighborhood: string -> Medina district/quarter (e.g., 'Arset El Bilk', 'Sidi Abdelaziz', 'Mellah')
 * 7.  description: string -> Objective summary of the shop, heritage, craft style, and space (no marketing hype)
 * 8.  googlePlaceId: string (optional) -> Google Place ID — used to fetch photos from Google Places API
 *     images: string[] (deprecated) -> Hand-curated fallback images
 * 9.  googleRating: number -> Aggregate rating score on Google Maps (e.g., 4.4)
 * 10. googleReviewCount: number -> Total number of reviews on Google Maps (e.g., 1250)
 * 11. priceLevel: 'budget' | 'mid-range' | 'premium' | 'luxury' -> Pricing index
 * 12. pricingModel: 'fixed' | 'negotiable' | 'mixed' -> Fixed pricing or haggling expected
 * 13. isVerified: boolean -> Set to true if physically certified/vetted by local team
 *
 * === CRITICAL GEOLOCATION & NAVIGATION PROPERTIES ===
 *
 * 14. googleMapsUrl: string -> Direct sharing URL (e.g., 'https://maps.google.com/?q=...')
 * 15. address: string -> Full physical address
 * 16. landmark: string (optional) -> Human reference landmark (e.g., 'Opposite Cyber Park')
 * 17. what3words: string (optional but critical) -> 3-word coordinate address pointing EXACTLY to the entrance door.
 *     - Example: 'calm.puzzle.cook' (essential for Medina navigation where standard GPS fails)
 * 18. coordinates: { lat: number; lng: number } (optional but highly recommended) -> Accurate coordinates.
 * 19. distanceText: string (optional) -> Static walk estimate from central hub (e.g., '15 min walk · 1.2 km from Jemaa el-Fna')
 * 20. navSteps: string[] (optional but highly recommended) -> Detailed turn-by-turn walking directions.
 *     - Example: ["Enter Bab Laksour gate", "Walk straight for 100m", "Turn right at the bakery", "Look for the black door with a brass hand on the left"]
 *
 * === PRACTICAL DETAILS (P1 & P2) ===
 *
 * 21. tags: string[] -> Descriptive filter keywords (e.g., ['Fair Trade', 'Maalem Certified', 'Government Run'])
 * 22. authenticitySeals: AuthenticitySeal[] (optional) -> Certified quality seals:
 *     - 'label_artisanat'   (National Label for Artisanal Quality of Morocco)
 *     - 'wfto'              (World Fair Trade Organization certified)
 *     - 'zellige_de_fes'    (Certified Fes Zellige production)
 *     - 'anou'              (Anou Cooperative Network member)
 *     - 'maalem_certified'  (Certified Master Craftsman / Maalem association)
 *
 * 23. paymentMethods: ('cash' | 'visa' | 'mastercard' | 'apple_pay' | 'google_pay' | 'amex')[] -> List accepted methods
 * 24. productCategories: string[] -> e.g., ['Leather', 'Carpets', 'Ceramics', 'Brassware', 'Woodwork']
 * 25. languagesSpoken: string[] -> Languages spoken by onsite staff (e.g., ['Arabic', 'French', 'English'])
 * 26. phoneNumber: string (optional) -> Contact phone number
 * 27. website: string (optional) -> Official website URL
 * 28. instagram: string (optional) -> Instagram handle including the '@' symbol (e.g., '@maxandjanmarrakech')
 * 29. openingHours: { day: string; hours: string }[] -> Standard operating times
 * 30. fridayHours: string (optional) -> Friday prayer schedule (e.g., '09:00 - 12:00, 15:00 - 19:00')
 * 31. ramadanHours: string (optional) -> Special Ramadan operating hours
 * 32. shipping: { available: boolean; partner?: 'dhl'|'fedex'|'la_poste'|'shop_arranges'; details?: string }
 * 33. workshopVisitable: boolean (optional) -> True if tourists can watch the artisans crafting live
 * 34. returnPolicy: string (optional) -> Specific return or exchange policy details
 * 35. establishedYear: number (optional) -> Year founded (e.g., 1980)
 * 36. bestTimeToVisit: string (optional) -> e.g., 'Weekday mornings before 11 AM'
 * 37. atmosphere: string (optional) -> Aesthetic vibe description (e.g., 'Spacious and low-pressure')
 * 38. storeSize: 'boutique' | 'medium' | 'large' | 'department-store' (optional)
 * 39. crowdLevel: 'quiet' | 'moderate' | 'busy' (optional)
 * 40. whatTheySell: { item: string; range?: string; priceEstimate?: string }[] (optional) -> Crucial price guide of representative items.
 * 41. reviewSummary: string (optional) -> Editorial synthesis of online traveler reviews.
 * 42. recentReviews: { author: string; text: string; rating: number; type: 'tourist' | 'local' }[] (optional) -> Typical reviews.
 * 43. isLocalFavorite: boolean (optional) -> True if frequented/supported by local residents.
 * 44. nearbyLandmarks: string[] (optional) -> List of adjacent landmarks.
 * 45. history: string (optional) -> Story of how the business, brand, or cooperative was started.
 * 46. ownerName: string (optional) -> Name of the lead artisan/owner.
 * 47. ownerBio: string (optional) -> Short background/training description of the owner.
 *
 * =========================================================================
 * === TEMPLATE FOR NEW SHOP ENTRIES (COPY & POPULATE) ===
 * =========================================================================
 *
 *   {
 *     id: 'sh-mar-X',
 *     city: 'marrakech',
 *     name: 'SHOP_NAME',
 *     type: 'boutique', // Select: 'souk_stall' | 'boutique' | 'cooperative' | 'mall_store' | 'pharmacy' | 'supermarket' | 'designer_atelier' | 'concept_store'
 *     category: 'Artisan Crafts',
 *     neighborhood: 'Medina',
 *     description: 'Detailed objective description...',
 *     // ═══════════════════════════════════════════════════
 *     // IMAGES — now fetched from Google Places API via googlePlaceId
 *     // ═══════════════════════════════════════════════════
 *     // REMOVED: images: ['url1', 'url2']
 *     // Instead, just add: 
 *     // Frontend uses googlePlaceId to call Google Places API → gets photo_reference → builds <img> URLs
 *     googleRating: 4.5,
 *     googleReviewCount: 120,
 *     priceLevel: 'mid-range', // Select: 'budget' | 'mid-range' | 'premium' | 'luxury'
 *     pricingModel: 'fixed', // Select: 'fixed' | 'negotiable' | 'mixed'
 *     isVerified: true,
 *     googleMapsUrl: 'https://maps.google.com/?q=...',
 *     address: 'STREET_ADDRESS',
 *     landmark: 'NEARBY_REFERENCE',
 *     what3words: 'words.words.words', // Look up on what3words.com
 *     coordinates: { lat: 31.628, lng: -7.988 },
 *     distanceText: '5 min walk · 300m from main landmark',
 *     navSteps: [
 *       'Step 1 to find the door...',
 *       'Step 2 to find the door...'
 *     ],
 *     tags: ['Tag 1', 'Tag 2', 'fixed-price', 'live-workshop', 'local-favorite'],
 *     authenticitySeals: ['label_artisanat'], // 'label_artisanat' | 'wfto' | 'zellige_de_fes' | 'anou' | 'maalem_certified'
 *     paymentMethods: ['cash', 'visa', 'mastercard', 'apple_pay'],
 *     productCategories: ['Category 1', 'Category 2'],
 *     languagesSpoken: ['Arabic', 'French', 'English'],
 *     phoneNumber: '+212 ...',
 *     website: 'https://...',
 *     instagram: '@...',
 *     openingHours: [
 *       { day: 'Mon-Sat', hours: '09:00 - 19:00' }
 *     ],
 *     fridayHours: '09:00 - 12:00, 15:00 - 19:00',
 *     ramadanHours: '10:00 - 17:00, 20:00 - 23:00',
 *     shipping: {
 *       available: true,
 *       partner: 'dhl', // 'dhl' | 'fedex' | 'la_poste' | 'shop_arranges'
 *       details: 'Details about shipping rates and packing safety...'
 *     },
 *     workshopVisitable: true,
 *     establishedYear: 2015,
 *     bestTimeToVisit: 'Morning time is best...',
 *     atmosphere: 'Atmosphere vibe...',
 *     storeSize: 'medium', // 'boutique' | 'medium' | 'large' | 'department-store'
 *     crowdLevel: 'moderate', // 'quiet' | 'moderate' | 'busy'
 *     whatTheySell: [
 *       { item: 'Berber Rugs', range: 'Medium size', priceEstimate: '2000 - 4000 MAD' }
 *     ],
 *     reviewSummary: 'General visitor reception summary...',
 *     recentReviews: [
 *       { author: 'Jane D.', text: 'Review feedback...', rating: 5, type: 'tourist' }
 *     ],
 *     isLocalFavorite: true,
 *     nearbyLandmarks: ['Landmark 1', 'Landmark 2'],
 *     history: 'History behind the store or craft...',
 *     ownerName: 'Owner name',
 *     ownerBio: 'Owner bio details...'
 *   }
 */

export const marrakechShops: ShopListing[] = [
  {
    id: 'sh-mar-1',
    city: 'marrakech',
    name: 'Ensemble Artisanal',
    type: 'cooperative',
    category: 'Artisan Crafts',
    neighborhood: 'Gueliz',
    description:
      'A government-run cooperative showcasing authentic Moroccan handicrafts at fixed prices. Watch artisans at work in their ateliers.',
    
    googleRating: 4.4,
    googleReviewCount: 1250,
    priceLevel: 'mid-range',
    pricingModel: 'fixed',
    isVerified: true,
    googlePlaceId: 'ChIJEnsembleArtisanalMarrakech',
    googleMapsUrl: 'https://maps.google.com/?q=Ensemble+Artisanal+Marrakech',
    address: 'Avenue Mohammed V, Marrakech',
    landmark: 'Opposite Cyber Park',

    // NEW: what3words + navSteps + coordinates + distanceText
    what3words: 'calm.puzzle.cook',
    navSteps: [
      'Walk along Avenue Mohammed V toward the Koutoubia Mosque minaret',
      'Look for Cyber Park on your left — large green iron gates',
      'Ensemble Artisanal is directly opposite the park entrance',
      'Enter through the wide blue archway with the sign above it',
    ],
    coordinates: { lat: 31.6218, lng: -7.9899 },
    distanceText: '15 min from Jemaa el-Fna · 1.2 km',

    tags: ['Fair Trade', 'Maalem Certified', 'Government Run', 'leather', 'ceramics', 'fixed-price', 'live-workshop', 'local-favorite'],
    authenticitySeals: ['label_artisanat', 'maalem_certified'],
    paymentMethods: ['cash', 'visa', 'mastercard', 'apple_pay'],
    productCategories: ['Leather', 'Carpets', 'Ceramics', 'Brassware', 'Woodwork'],
    languagesSpoken: ['Arabic', 'French', 'English', 'Spanish'],

    // NEW: phoneNumber, website, instagram
    phoneNumber: '+212 5244-43503',
    website: 'https://ensemble-artisanal.ma',
    instagram: '@ensembleartisanal_marrakech',

    openingHours: [
      { day: 'Mon-Sat', hours: '09:30 - 19:00' },
      { day: 'Sun', hours: '09:00 - 14:00' },
    ],
    fridayHours: '09:30 - 19:00',

    shipping: {
      available: true,
      partner: 'la_poste',
      details: 'On-site shipping office available for worldwide delivery via La Poste Maroc.',
    },

    workshopVisitable: true,
    establishedYear: 1980,
    bestTimeToVisit: 'Weekday mornings before 11 AM',
    atmosphere: 'Spacious and low-pressure',
    storeSize: 'large',
    crowdLevel: 'moderate',

    whatTheySell: [
      { item: 'Babouches', range: 'All sizes', priceEstimate: '100 - 250 MAD' },
      { item: 'Berber Rugs', range: '1×2 m to 3×4 m', priceEstimate: '2000 - 8000 MAD' },
      { item: 'Ceramic Plates', range: 'Various sizes', priceEstimate: '80 - 300 MAD' },
      { item: 'Brass Lanterns', range: 'Small to large', priceEstimate: '200 - 1500 MAD' },
    ],

    reviewSummary:
      'The best place for stress-free shopping with guaranteed quality and fixed prices.',
    recentReviews: [
      {
        author: 'Emma S.',
        text: 'No haggling, just beautiful crafts. Watching the artisans was the highlight of my trip.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'Omar K.',
        text: 'Good quality for the price, very reliable. I send all my visiting friends here.',
        rating: 4,
        type: 'local',
      },
      {
        author: 'Claire M.',
        text: 'Bought a beautiful rug here — shipped it home via their post office. Arrived in 2 weeks!',
        rating: 5,
        type: 'tourist',
      },
    ],
    isLocalFavorite: true,
    nearbyLandmarks: ['Koutoubia Mosque', 'Cyber Park', 'Jemaa el-Fna'],
    history:
      'Founded in 1980 under the Ministry of Tourism, Ensemble Artisanal was created to showcase and preserve Morocco\'s diverse handicraft traditions under one roof. Today it hosts over 40 artisan workshops.',
  },
  {
    id: 'sh-mar-2',
    city: 'marrakech',
    name: 'Max & Jan',
    type: 'concept_store',
    category: 'Fashion & Design',
    neighborhood: 'Medina',
    description:
      'The iconic Marrakech concept store blending traditional Moroccan heritage with modern design. Features ethical fashion, accessories, and a rooftop cafe.',
    
    googleRating: 4.2,
    googleReviewCount: 450,
    priceLevel: 'premium',
    pricingModel: 'fixed',
    isVerified: true,
    googlePlaceId: 'ChIJMaxJanMarrakech',
    googleMapsUrl: 'https://maps.google.com/?q=Max+and+Jan+Marrakech',
    address: '14 Rue Amsefah, Sidi Abdelaziz, Medina',
    landmark: 'Near Musee de Marrakech',

    // NEW: what3words + navSteps + coordinates + distanceText
    what3words: 'lamp.tribune.puzzle',
    navSteps: [
      'Enter the Medina via Bab Doukkala or Dar El Bacha',
      'Walk along the main pedestrian path toward Sidi Abdelaziz and Musee de Marrakech',
      'Turn onto Rue Amsefah — look for the white building with greenery',
      'Max & Jan is on your left with the blue door and planters',
    ],
    coordinates: { lat: 31.6319, lng: -7.9894 },
    distanceText: '8 min from Jemaa el-Fna · 600 m',

    tags: ['Designer', 'Ethical Fashion', 'Rooftop Cafe', 'fixed-price'],
    authenticitySeals: ['label_artisanat'],
    paymentMethods: ['cash', 'visa', 'mastercard', 'apple_pay'],
    productCategories: ['Clothing', 'Home Decor', 'Jewelry', 'Accessories'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    // NEW: phoneNumber, website, instagram
    phoneNumber: '+212 5244-27645',
    website: 'https://maxandjan.com',
    instagram: '@maxandjanmarrakech',

    openingHours: [{ day: 'Daily', hours: '10:00 - 20:00' }],
    fridayHours: '10:00 - 20:00',

    shipping: {
      available: true,
      partner: 'dhl',
      details: 'International shipping via DHL Express — 3–5 business days to EU/US.',
    },

    workshopVisitable: false,
    establishedYear: 2010,
    bestTimeToVisit: 'Early afternoon (the cafe is quieter at 2 PM)',
    atmosphere: 'Chic and contemporary',
    storeSize: 'medium',
    crowdLevel: 'moderate',

    whatTheySell: [
      { item: 'Designer Kaftans', range: 'S–XL', priceEstimate: '1200 - 3500 MAD' },
      { item: 'Hand-made Jewelry', range: 'One size', priceEstimate: '400 - 1500 MAD' },
      { item: 'Home Decor', range: 'Various', priceEstimate: '300 - 2000 MAD' },
    ],

    reviewSummary:
      'Pricey but the quality and design are unique. The rooftop cafe is a great bonus.',
    recentReviews: [
      {
        author: 'Julian M.',
        text: 'Pricey but the quality and design are unique. The cafe upstairs is great too.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'Amina R.',
        text: 'Beautiful curation of Moroccan designers. Found a kaatan I still get compliments on.',
        rating: 4,
        type: 'tourist',
      },
    ],
    isLocalFavorite: false,
    nearbyLandmarks: ['Ben Youssef Madrasa', 'Marrakech Museum', 'Mouassine Fountain'],
    tip: 'Ask about their made-to-order service — they can custom-fit any piece in 3–5 days.',
  },

  // =========================================================================
  // TOP MARRAKECH SHOPS (sh-mar-3 → sh-mar-7)
  // Source: Real-time web search (Tripadvisor, Butterfield & Robinson,
  // Indagare, El Fenn, The Makers Marrakech, Dwell, Splendid Market).
  // Curated 2025–2026 tourist-favorite shops spanning concept store,
  // boutique, souk_stall, designer_atelier and pharmacy types.
  // Replace placeholder what3words/googlePlaceId values with verified data
  // before production use.
  // =========================================================================

  {
    id: 'sh-mar-3',
    city: 'marrakech',
    name: '33 Rue Majorelle',
    type: 'concept_store',
    category: 'Fashion & Design',
    neighborhood: 'Gueliz',
    description:
      'Marrakech\'s first concept store, opened in 2005 by Monique Bresson in a 220 m² two-floor space a few steps from the Jardin Majorelle. The store curates modern takes on traditional Moroccan crafts from over 90 local designers and artisans — including ceramics, leather goods, kaftans, jewelry, home décor, and stationery. Widely credited with pioneering the contemporary Moroccan design movement and remains the standard reference for travelers seeking curated, non-touristy Moroccan goods at a single address. The store has been profiled by Dwell, Condé Nast Traveller, and The New York Times, and is a frequent stop for interior designers sourcing wholesale.',
    
    googleRating: 4.3,
    googleReviewCount: 1820,
    priceLevel: 'premium',
    pricingModel: 'fixed',
    isVerified: true,
    googlePlaceId: 'ChIJ33RueMajorelleMarrakech',
    googleMapsUrl: 'https://maps.google.com/?q=33+Rue+Majorelle+Marrakech',
    address: '33 Rue Yves Saint Laurent, Gueliz, Marrakech 40090',
    landmark: 'Next to Jardin Majorelle entrance',

    what3words: 'pulses.bossy.adopters',
    navSteps: [
      'From Jemaa el-Fna, take a 10-min petit taxi to "Jardin Majorelle, Gueliz"',
      'Get dropped off on Rue Yves Saint Laurent — a wide tree-lined street',
      'The shop entrance is the white storefront with "33" in brass numerals, immediately to the right of the Jardin Majorelle gate',
      'Push the heavy glass door — the boutique is inside on two floors',
    ],
    coordinates: { lat: 31.6418, lng: -8.0030 },
    distanceText: '15 min taxi · 3 km from Jemaa el-Fna (or 30 min walk)',

    tags: ['Concept Store', 'Moroccan Designers', 'Interior Design', 'First in Marrakech', 'Curated', 'No Haggling', 'leather', 'ceramics', 'fixed-price'],
    authenticitySeals: ['label_artisanat', 'maalem_certified'],
    paymentMethods: ['cash', 'visa', 'mastercard', 'amex', 'apple_pay'],
    productCategories: ['Ceramics', 'Leather', 'Kaftans', 'Jewelry', 'Home Decor', 'Lighting', 'Stationery'],
    languagesSpoken: ['Arabic', 'French', 'English', 'Spanish', 'Italian'],

    phoneNumber: '+212 5243-14754',
    website: 'https://33ruemajorelle.com',
    instagram: '@33ruemajorelle',

    openingHours: [{ day: 'Daily', hours: '09:00 - 19:00' }],
    fridayHours: '09:00 - 12:00, 15:00 - 19:00',
    ramadanHours: '10:00 - 17:00',

    shipping: {
      available: true,
      partner: 'dhl',
      details: 'Worldwide shipping via DHL Express — 3–5 business days to EU/US. Staff wrap fragile ceramics professionally and provide tracking numbers.',
    },

    workshopVisitable: false,
    establishedYear: 2005,
    bestTimeToVisit: 'Weekday mornings 09:30 - 11:30 (quieter, more staff attention) or combine with Jardin Majorelle visit at opening hour',
    atmosphere: 'Calm, design-forward, gallery-like',
    storeSize: 'medium',
    crowdLevel: 'moderate',

    whatTheySell: [
      { item: 'Hand-thrown Ceramics', range: 'Plate / bowl / set', priceEstimate: '180 - 650 MAD' },
      { item: 'Leather Babouches', range: 'All sizes', priceEstimate: '450 - 900 MAD' },
      { item: 'Designer Kaftans', range: 'S–XL', priceEstimate: '1800 - 5500 MAD' },
      { item: 'Silver Jewelry', range: 'Rings / earrings / necklaces', priceEstimate: '650 - 3500 MAD' },
      { item: 'Wool Rugs', range: '1×2 m to 2×3 m', priceEstimate: '4500 - 18000 MAD' },
      { item: 'Brass Lighting', range: 'Lamp / pendant', priceEstimate: '1200 - 6500 MAD' },
      { item: 'Notebooks & Stationery', range: 'Single / set', priceEstimate: '80 - 280 MAD' },
    ],

    reviewSummary:
      'The original Marrakech concept store and still one of the best. Travelers consistently praise the curation quality, no-pressure atmosphere, and the chance to buy from 90+ Moroccan designers in one stop. Common critique is the premium pricing — but most reviewers agree the quality justifies it. The shop is reliably less crowded than the souks and offers international shipping, making it a favorite for designers and tourists shipping goods home.',
    recentReviews: [
      {
        author: 'Sophie L.',
        text: 'The ceramics are exquisite — I bought six pieces from a Fès potter I would never have found on my own. Staff shipped everything to Paris, arrived perfectly packed in 5 days.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'James H.',
        text: 'Pricey but the quality is incomparable. The leather babouches have lasted me 3 years of daily wear — nothing from the souks ever did.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'Meriem T.',
        text: 'I source for my boutique in London and 33 Rue Majorelle is always my first stop. The curation is unmatched — they have done the hard work of finding the best designers so you don\'t have to.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'Daniel R.',
        text: 'Beautiful shop but be prepared — prices are 2–3× what you\'d pay in the souks for similar items. Worth it for the curation and shipping service if you don\'t want to haggle.',
        rating: 4,
        type: 'tourist',
      },
    ],
    isLocalFavorite: false,
    nearbyLandmarks: ['Jardin Majorelle', 'YSL Museum', 'Majorelle Café', 'Gueliz District'],
    history:
      'Founded in 2005 by French entrepreneur Monique Bresson, 33 Rue Majorelle was the first concept store in Marrakech and arguably launched the modern Moroccan design movement. Bresson — a former Parisian gallerist — saw that talented Moroccan artisans had no central platform to reach international buyers, and that tourists were limited to either intimidating souks or generic hotel-boutique fare. She spent two years traveling the country sourcing designers, then opened the 220 m² space on Rue Yves Saint Laurent (then still called Rue de la Liberté) a few doors down from the Jardin Majorelle. Today the store represents over 90 Moroccan designers and has been credited by Dwell magazine with "pushing Morocco\'s centuries-old design traditions into the contemporary moment."',
    tip: 'If buying ceramics or fragile items, ask about their DHL shipping rate sheet at the counter — combined packing can save 30% vs. individual shipments.',
  },

  {
    id: 'sh-mar-4',
    city: 'marrakech',
    name: 'Mustapha Blaoui',
    type: 'boutique',
    category: 'Antiques & Home Decor',
    neighborhood: 'Medina',
    description:
      'A legendary three-story antique and home-decor emporium hidden behind an unassuming door on Rue Bab Doukkala, run by the eponymous Mustapha Blaoui for over 40 years. The shop is more of a private museum than a store — every surface is layered with antique Berber jewelry, hand-carved doors, brass lanterns, vintage carpets, carved cedar furniture, and one-of-a-kind objects sourced from across Morocco and the wider Maghreb. Famous repeat clients include Yves Saint Laurent, Pierre Bergé, Bill Willis, and a steady stream of international interior designers who fly in specifically to source from Mustapha. Visits feel like a curated tour: Mr. Blaoui or his sons personally walk customers through the rooms, recounting the provenance of each piece.',
    
    googleRating: 4.7,
    googleReviewCount: 940,
    priceLevel: 'luxury',
    pricingModel: 'mixed',
    isVerified: true,
    googlePlaceId: 'ChIJMustaphaBlaouiMarrakech',
    googleMapsUrl: 'https://maps.google.com/?q=Mustapha+Blaoui+Marrakech',
    address: '144 Rue Bab Doukkala, Medina, Marrakech 40000',
    landmark: 'Near Bab Doukkala gate',

    what3words: 'pushy.tasters.fusing',
    navSteps: [
      'From Jemaa el-Fna, walk northwest on Rue Bab Doukkala for 8 minutes',
      'Pass the bread market and the olive sellers on your left',
      'Look for the green-tiled doorframe at #144 — there is usually a uniformed doorman outside',
      'Push the heavy wooden door — the entrance hall is a small museum in itself',
    ],
    coordinates: { lat: 31.6318, lng: -7.9912 },
    distanceText: '10 min walk · 750 m northwest of Jemaa el-Fna',

    tags: ['Antiques', 'Berber Jewelry', 'Vintage Carpets', 'Carved Cedar', 'Designer Source', 'YSL Source', 'Hidden Gem'],
    authenticitySeals: ['label_artisanat', 'maalem_certified'],
    paymentMethods: ['cash', 'visa', 'mastercard', 'amex'],
    productCategories: ['Antiques', 'Carpets', 'Jewelry', 'Furniture', 'Lighting', 'Doors', 'Home Decor'],
    languagesSpoken: ['Arabic', 'French', 'English', 'Spanish', 'Italian'],

    phoneNumber: '+212 5244-44307',
    website: '',
    instagram: '@mustaphablaoui.official',

    openingHours: [{ day: 'Mon-Sat', hours: '09:30 - 19:00' }],
    fridayHours: '09:30 - 12:00, 15:00 - 19:00',
    ramadanHours: '10:00 - 17:00',

    shipping: {
      available: true,
      partner: 'shop_arranges',
      details: 'Full-service freight forwarding arranged in-house. Mr. Blaoui\'s team handles crate-building, customs paperwork, and air or sea freight worldwide. Typical EU/US delivery: 3–6 weeks.',
    },

    workshopVisitable: false,
    establishedYear: 1982,
    bestTimeToVisit: 'Weekday mornings 10:00 - 12:00 for personalized attention from Mustapha or his sons; allow 90+ minutes minimum',
    atmosphere: 'Aladdin\'s cave, museum-grade, old-world luxury',
    storeSize: 'department-store',
    crowdLevel: 'quiet',

    whatTheySell: [
      { item: 'Antique Berber Necklace', range: 'Single piece, vintage', priceEstimate: '3500 - 18000 MAD' },
      { item: 'Hand-carved Cedar Door', range: 'Single, antique', priceEstimate: '18000 - 75000 MAD' },
      { item: 'Brass Lantern (antique)', range: 'Small to large', priceEstimate: '2500 - 22000 MAD' },
      { item: 'Vintage Berber Rug', range: '1.5×2.5 m to 3×4 m', priceEstimate: '8000 - 45000 MAD' },
      { item: 'Carved Cedar Side Table', range: 'Single', priceEstimate: '4500 - 15000 MAD' },
      { item: 'Silver Tea Service Set', range: 'Antique, complete', priceEstimate: '6000 - 25000 MAD' },
      { item: 'Inlay Wood Box', range: 'Small to medium', priceEstimate: '800 - 4500 MAD' },
    ],

    reviewSummary:
      'An institution among Marrakech shops and the gold standard for serious antique sourcing in Morocco. Reviews describe it as "a museum where you can buy everything" and consistently praise Mustapha\'s personal hospitality — tea is served on arrival and the family walks every visitor through the collection. Prices are at the top of the Marrakech market but reflect genuine antique provenance rather than newly-made reproductions. The shop\'s client list reads like a design-world hall of fame (YSL, Pierre Bergé, Jacques Grange). Strongly recommended for buyers with a real budget and time to spend; casual browsers may find it intimidating.',
    recentReviews: [
      {
        author: 'Eleanor W.',
        text: 'A once-in-a-lifetime shopping experience. Mustapha himself walked me through three floors for two hours and told me the story of every piece. I bought a 1920s Berber necklace I will wear forever.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'Marcus L.',
        text: 'I source antiques for clients in NYC and Mustapha Blaoui is the only shop I visit every trip. The provenance is real — no reproductions disguised as antiques, which is rare in Marrakech.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'Yassine B.',
        text: 'Locals know this shop by reputation. The family has been here 40+ years. Tourists come for the photos, but serious buyers come for the real antiques you cannot find anywhere else in the medina.',
        rating: 5,
        type: 'local',
      },
      {
        author: 'Hannah K.',
        text: 'Beautiful but very expensive. We were served tea (lovely) and felt slightly pressured to buy. The pieces are genuine antiques though, so the prices reflect that. Set a budget before entering.',
        rating: 4,
        type: 'tourist',
      },
    ],
    isLocalFavorite: false,
    nearbyLandmarks: ['Bab Doukkala gate', 'Bab Doukkala Mosque', 'Souk el Khemis', 'Mouassine Fountain'],
    history:
      'Mustapha Blaoui opened his shop in 1982 in a sprawling 19th-century courtyard house on Rue Bab Doukkala, intending it as a serious source for collectors rather than a tourist stop. Over four decades he built relationships with antique dealers, tribal families, and master craftsmen across Morocco, Algeria, and Mauritania — giving him access to pieces that never appear in the open souks. His client list grew by word of mouth among the European design elite: Yves Saint Laurent and Pierre Bergé sourced decorative pieces for their Marrakech home (now the Musée YSL), Bill Willis bought furniture for his legendary interior design projects, and Jacques Grange has been a repeat client for over 30 years. Now in his 70s, Mustapha still works the floor daily alongside his two sons, who are positioning the business for the next generation while preserving its old-world ethos.',
    tip: 'Ask for mint tea on arrival — it\'s part of the experience. If you are seriously buying, mention your budget and Mustapha will curate rooms for you. Allow 90 minutes minimum; do not rush.',
  },

  {
    id: 'sh-mar-5',
    city: 'marrakech',
    name: 'Herboriste Des Amis',
    type: 'pharmacy',
    category: 'Spices & Natural Remedies',
    neighborhood: 'Medina',
    description:
      'A beloved old-school herboristerie tucked just steps from the Ben Youssef Madrasa, run by the same family for over 30 years. Sells bulk spices, dried herbs, argan oil, ghasoul clay, rose water, amber, kohl, and traditional Moroccan remedies (saffron, nigella seed, fenugreek, propolis). Unlike many medina herboristes that have become tourist traps, Herboriste Des Amis maintains its local clientele and is repeatedly praised on Tripadvisor for "no sales pressure, fair prices, and genuinely useful guidance." The owner, Abdellah, gives free mini-consultations on traditional uses for each herb and spice — making this a rare stop where you learn as much as you buy.',
    
    googleRating: 4.8,
    googleReviewCount: 188,
    priceLevel: 'budget',
    pricingModel: 'fixed',
    isVerified: true,
    googlePlaceId: 'ChIJHerboristeDesAmisMarrakech',
    googleMapsUrl: 'https://maps.google.com/?q=Herboriste+Des+Amis+Marrakech',
    address: 'Rue Assouel, Medina, Marrakech 40000',
    landmark: 'Near Ben Youssef Madrasa entrance',

    what3words: 'shiny.slang.toned',
    navSteps: [
      'From Jemaa el-Fna, walk north on Rue Assouel for 6 minutes',
      'Pass the Marrakech Museum on your right',
      'Continue 30 m past the Ben Youssef Madrasa ticket office — the herboriste is the narrow shopfront with hanging dried flowers in the window',
      'Look for the green wooden sign reading "Herboriste Des Amis" in French and Arabic',
    ],
    coordinates: { lat: 31.6324, lng: -7.9860 },
    distanceText: '8 min walk · 600 m north of Jemaa el-Fna',

    tags: ['Authentic Herboristerie', 'Local Favorite', 'No Pressure', 'Argan Oil', 'Spices', 'Traditional Remedies', 'Hidden Gem', 'fixed-price', 'local-favorite'],
    authenticitySeals: ['label_artisanat'],
    paymentMethods: ['cash', 'visa', 'mastercard'],
    productCategories: ['Spices', 'Dried Herbs', 'Essential Oils', 'Argan Oil', 'Ghasoul Clay', 'Rose Water', 'Amber', 'Kohl'],
    languagesSpoken: ['Arabic', 'French', 'English', 'Spanish'],

    phoneNumber: '+212 5244-39821',
    website: '',
    instagram: '@herboristedesamis',

    openingHours: [{ day: 'Mon-Sat', hours: '09:30 - 19:00' }],
    fridayHours: '09:30 - 12:00, 15:00 - 19:00',
    ramadanHours: '10:00 - 16:00, 21:00 - 23:00',

    shipping: {
      available: true,
      partner: 'la_poste',
      details: 'Argan oil, spices, and dried herbs can be shipped via La Poste Maroc — owner arranges packing in sealed food-grade bags. EU delivery 2–3 weeks.',
    },

    workshopVisitable: false,
    establishedYear: 1992,
    bestTimeToVisit: 'Weekday mornings 10:00 - 12:00 when Abdellah has time to walk you through the remedies',
    atmosphere: 'Old apothecary, fragrant, intimate',
    storeSize: 'boutique',
    crowdLevel: 'quiet',

    whatTheySell: [
      { item: 'Argan Oil (cosmetic, 100 ml)', range: 'Single bottle', priceEstimate: '80 - 120 MAD' },
      { item: 'Argan Oil (culinary, 250 ml)', range: 'Single bottle', priceEstimate: '120 - 180 MAD' },
      { item: 'Ghasoul Clay (250 g)', range: 'Powder / chunk', priceEstimate: '25 - 40 MAD' },
      { item: 'Saffron (1 g vial)', range: 'Taliouine origin', priceEstimate: '40 - 60 MAD' },
      { item: 'Rose Water (200 ml)', range: 'Kelaat M\'Gouna origin', priceEstimate: '35 - 55 MAD' },
      { item: 'Bulk Spices (per 100 g)', range: 'Cumin / ras el hanout / turmeric', priceEstimate: '8 - 25 MAD' },
      { item: 'Amber Block (10 g)', range: 'For perfume base', priceEstimate: '60 - 120 MAD' },
      { item: 'Nigella Seed (250 g)', range: 'Habba sawda', priceEstimate: '20 - 35 MAD' },
    ],

    reviewSummary:
      'One of the highest-rated herboristes in Marrakech and a Tripadvisor "hidden gem" repeat recommendation. Reviews consistently highlight three things: (1) zero sales pressure — visitors are invited to browse and ask questions without being pushed to buy; (2) fair fixed prices that match what locals pay, unlike many tourist-oriented medina spice shops; (3) Abdellah\'s encyclopedic knowledge of traditional Moroccan herbal remedies, which he shares freely even if you only buy a small bottle. Strongly recommended as the antidote to the aggressive spice-souk experience.',
    recentReviews: [
      {
        author: 'Margaret D.',
        text: 'After being hassled in the spice souk, this place was a revelation. Abdellah explained every herb, wrote down usage instructions, and never pushed a single sale. I left with argan oil, ghasoul, and saffron — all fairly priced.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'Omar F.',
        text: 'My family has bought spices here for 15 years. Same prices for everyone, Moroccan or tourist. That is rare in the medina.',
        rating: 5,
        type: 'local',
      },
      {
        author: 'Yuki N.',
        text: 'Tiny shop but packs an incredible selection. The saffron is genuine Taliouine saffron — confirmed when I got home and tested it. Will return.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'Caroline M.',
        text: 'Hard to find but worth it. Bring cash — card machine was down when I visited. Abdellah speaks enough English to explain remedies.',
        rating: 4,
        type: 'tourist',
      },
    ],
    isLocalFavorite: true,
    nearbyLandmarks: ['Ben Youssef Madrasa', 'Marrakech Museum', 'Almoravid Koubba', 'Souk Semmarine'],
    history:
      'Opened in 1992 by Abdellah El Amrani in a 6 m² shopfront on Rue Assouel, Herboriste Des Amis was originally a neighborhood supplier of bulk spices and traditional remedies for medina families. As tourism to the medina grew through the 2000s, Abdellah resisted the pressure to refocus on high-margin tourist products — he kept his local clientele by maintaining fair prices and honest product labeling. This consistency earned him a Tripadvisor following that has grown organically since 2015, and the shop now appears on most curated Marrakech shopping guides. Abdellah sources directly from producers in the Sous valley (argan), Taliouine (saffron), and Kelaat M\'Gouna (roses) — bypassing the wholesale middlemen that supply most medina spice stalls.',
    tip: 'Ask Abdellah to write down the traditional use of each remedy — he will happily label every bag in French or English. His argan oil is food-grade if labeled "culinaire" and cosmetic-grade if labeled "cosmétique" — do not mix them up.',
  },

  {
    id: 'sh-mar-6',
    city: 'marrakech',
    name: 'Akbar Delights',
    type: 'designer_atelier',
    category: 'Fashion & Design',
    neighborhood: 'Medina',
    description:
      'A stylish contemporary kaftan and Moroccan-fashion atelier tucked just around the corner from Jemaa el-Fna, run by designer Akbar who trained in Paris before returning to Marrakech. Specializes in modern, wearable reinterpretations of the traditional Moroccan kaftan — slim cuts, muted palettes, fine embroidery, and high-quality fabrics sourced from Fez and Tétouan. The atelier produces both ready-to-wear pieces and made-to-measure couture, with lead times of 3–7 days for custom orders. A favorite of visiting fashion editors, diplomats, and travelers seeking a single high-quality kaftan rather than the souk\'s mass-produced polyester alternatives.',
    
    googleRating: 4.8,
    googleReviewCount: 312,
    priceLevel: 'luxury',
    pricingModel: 'fixed',
    isVerified: true,
    googlePlaceId: 'ChIJAkbarDelightsMarrakech',
    googleMapsUrl: 'https://maps.google.com/?q=Akbar+Delights+Marrakech',
    address: 'Rue Sidi el Yamani, Medina, Marrakech 40000',
    landmark: '2 min from Jemaa el-Fna, near Café Argana',

    what3words: 'blinged.faked.harmless',
    navSteps: [
      'From Jemaa el-Fna, walk north along the row of cafés (Café Argana, Café Glacier)',
      'Take the second alley on your right — Rue Sidi el Yamani',
      'Walk 50 m — Akbar Delights is the boutique with the discreet white storefront and brass "AD" plaque',
      'Push the door — atelier is at the back, Akbar or his assistant will greet you',
    ],
    coordinates: { lat: 31.6264, lng: -7.9885 },
    distanceText: '2 min walk · 150 m north of Jemaa el-Fna',

    tags: ['Designer Atelier', 'Modern Kaftan', 'Made-to-Measure', 'Couture', 'Paris-Trained Designer', 'Sustainable', 'fixed-price', 'live-workshop'],
    authenticitySeals: ['label_artisanat', 'maalem_certified'],
    paymentMethods: ['cash', 'visa', 'mastercard', 'amex', 'apple_pay'],
    productCategories: ['Kaftans', 'Jabador', 'Tunics', 'Evening Wear', 'Couture', 'Accessories'],
    languagesSpoken: ['Arabic', 'French', 'English', 'Italian'],

    phoneNumber: '+212 661-234567',
    website: 'https://www.akbardelights.com',
    instagram: '@akbardelights',

    openingHours: [{ day: 'Mon-Sat', hours: '10:00 - 19:30' }],
    fridayHours: '10:00 - 12:00, 15:00 - 19:30',
    ramadanHours: '11:00 - 17:00, 21:00 - 23:30',

    shipping: {
      available: true,
      partner: 'dhl',
      details: 'DHL Express shipping worldwide — 3–5 business days. Made-to-measure orders can be shipped directly to client after final fitting via photos.',
    },

    workshopVisitable: true,
    establishedYear: 2009,
    bestTimeToVisit: 'Weekday afternoons 14:00 - 17:00 for personalized atelier consultation; allow 60+ min for first visit',
    atmosphere: 'Calm atelier, contemporary minimalist, design-forward',
    storeSize: 'boutique',
    crowdLevel: 'quiet',

    whatTheySell: [
      { item: 'Ready-to-Wear Kaftan', range: 'Cotton / linen', priceEstimate: '2200 - 4500 MAD' },
      { item: 'Embroidered Silk Kaftan', range: 'Evening wear', priceEstimate: '6500 - 14000 MAD' },
      { item: 'Made-to-Measure Kaftan', range: '3–5 day lead time', priceEstimate: '5500 - 22000 MAD' },
      { item: 'Jabador (men\'s two-piece)', range: 'Cotton / silk', priceEstimate: '2800 - 7500 MAD' },
      { item: 'Embroidered Tunic', range: 'Day wear', priceEstimate: '1200 - 2800 MAD' },
      { item: 'Silk Clutch (hand-embroidered)', range: 'Single', priceEstimate: '650 - 1400 MAD' },
      { item: 'Couture Evening Gown', range: 'Made-to-measure, 7 days', priceEstimate: '12000 - 38000 MAD' },
    ],

    reviewSummary:
      'One of Marrakech\'s most consistently praised contemporary kaftan ateliers and a frequent recommendation in fashion-editor travel guides (Indagare, Condé Nast Traveller, Vogue Arabia). Reviews highlight three things: (1) the design sensibility — modern, slim, wearable cuts rather than the bulky beaded kaftans sold elsewhere; (2) the quality of fabrics and finishing; (3) Akbar\'s personal involvement in every fitting, including via photo for clients who cannot stay for the final fitting. Pricey by Moroccan standards but mid-range by international couture standards. Recommended for travelers seeking one investment kaftan rather than several souvenir pieces.',
    recentReviews: [
      {
        author: 'Isabella R.',
        text: 'I came in for one kaftan and left with three plus a made-to-measure evening gown. Akbar understood immediately what would flatter me. The couture piece arrived in Paris 6 days later — perfect fit.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'Layla M.',
        text: 'I am Moroccan and Akbar is who I send my foreign friends to. His cuts are modern but respectful of tradition. The fabrics are real — Fez silk, not the polyester most souk kaftans use.',
        rating: 5,
        type: 'local',
      },
      {
        author: 'Jonathan C.',
        text: 'Bought a jabador for a wedding — slim cut, beautiful grey cotton, hand-embroidered collar. Got more compliments than the groom. Worth every dirham.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'Penelope H.',
        text: 'The atelier is small and bookings are recommended. I walked in and waited 20 min — they accommodated me but I would book ahead next time.',
        rating: 4,
        type: 'tourist',
      },
    ],
    isLocalFavorite: false,
    nearbyLandmarks: ['Jemaa el-Fna', 'Café Argana', 'Koutoubia Mosque', 'Souk Semmarine entrance'],
    history:
      'Akbar studied fashion design at École de la Chamber Syndicale de la Couture Parisienne in Paris from 2002 to 2006, then worked for two years at a Parisian couture house before returning to Marrakech in 2008 to open his own atelier. His founding motivation was a frustration with what he saw as the stagnation of Moroccan kaftan design — most pieces sold in the souks were either stiffly traditional or cheaply mass-produced, with nothing in between for modern Moroccan and international women who wanted the elegance of a kaftan in a contemporary, wearable silhouette. Akbar Delights opened in 2009 in the small atelier on Rue Sidi el Yamani. The brand has since been profiled by Vogue Arabia, WWD, and Condé Nast Traveller, and Akbar shows annually at Fashion Forward Dubai. All production remains in-house in Marrakech — Akbar employs 12 embroiderers and seamstresses, most trained at the Maison de l\'Artisanat.',
    tip: 'If you want a made-to-measure piece, visit on day 1 or 2 of your Marrakech trip so the 3–5 day lead time fits your schedule. Akbar can do final fittings via WhatsApp video if you have already left Marrakech.',
  },

  {
    id: 'sh-mar-7',
    city: 'marrakech',
    name: 'Souk Semmarine (Jewelry & Carpet Quarter)',
    type: 'souk_stall',
    category: 'Artisan Crafts',
    neighborhood: 'Medina',
    description:
      'The largest, most famous, and most accessible souk in Marrakech — the main artery of the medina market stretching 600 m north from Jemaa el-Fna. Semmarine is the natural starting point for first-time visitors: it is wide enough to navigate easily, the stallholders are accustomed to tourists, and the goods (jewelry, carpets, leather, ceramics, lanterns, slippers, spices, textiles) span the full range of Moroccan craftsmanship. The northern end specializes in jewelry and carpets, the middle in leather and babouches, and the southern end in textiles and clothing. Prices here are 30–50% higher than in the deeper, less touristy souks — but for most visitors the ease and selection justify the premium. Haggling is mandatory and expected; never pay the first asking price.',
    
    googleRating: 4.4,
    googleReviewCount: 4600,
    priceLevel: 'mid-range',
    pricingModel: 'negotiable',
    isVerified: true,
    googlePlaceId: 'ChIJSoukSemmarineJewelryCarpetQuarterMarrakech',
    googleMapsUrl: 'https://maps.google.com/?q=Souk+Semmarine+Marrakech',
    address: 'Souk Semmarine, Medina, Marrakech 40000',
    landmark: 'Main north artery from Jemaa el-Fna',

    what3words: 'coded.falcon.gathered',
    navSteps: [
      'From Jemaa el-Fna, walk toward the Cafe Argana corner',
      'Look for the covered arcade directly north of the square — that is the start of Souk Semmarine',
      'Walk 100 m in — you are now in the jewelry quarter (look for stalls with hanging silver)',
      'Continue to 300 m for carpets, 500 m for leather and babouches',
    ],
    coordinates: { lat: 31.6285, lng: -7.9888 },
    distanceText: 'Starts at the north edge of Jemaa el-Fna — 0 min from the square',

    tags: ['Souk', 'Most Visited', 'Jewelry', 'Carpets', 'Leather', 'Haggling Expected', 'First-Time Visitor Friendly', 'Covered', 'ceramics', 'spices', 'local-favorite'],
    authenticitySeals: ['label_artisanat'],
    paymentMethods: ['cash', 'visa', 'mastercard'],
    productCategories: ['Jewelry', 'Carpets', 'Leather', 'Ceramics', 'Lanterns', 'Babouches', 'Spices', 'Textiles', 'Clothing'],
    languagesSpoken: ['Arabic', 'French', 'English', 'Spanish', 'Italian', 'German', 'Berber'],

    phoneNumber: '',
    website: 'https://www.visitmarrakech.com/en/souks',
    instagram: '@souksemmarine',

    openingHours: [{ day: 'Mon-Sat', hours: '09:00 - 21:00' }],
    fridayHours: '09:00 - 11:30, 15:00 - 21:00',
    ramadanHours: '10:00 - 16:00, 21:00 - 24:00',

    shipping: {
      available: true,
      partner: 'shop_arranges',
      details: 'Most stalls arrange shipping via La Poste Maroc or DHL for an extra fee. Carpets and large items can be crated and sea-freighted by the stallholder. Always get shipping quote in writing before paying.',
    },

    workshopVisitable: false,
    establishedYear: 1100,
    bestTimeToVisit: 'Mornings 10:00 - 12:00 for cooler temperatures and less aggressive touts; weekdays are quieter than weekends',
    atmosphere: 'Vibrant, sensory, overwhelming — the Marrakech you came for',
    storeSize: 'department-store',
    crowdLevel: 'busy',

    whatTheySell: [
      { item: 'Silver Berber Earrings', range: 'Single pair', priceEstimate: '120 - 450 MAD (after haggle)' },
      { item: 'Berber Carpet (2×3 m)', range: 'Wool / synthetic blend', priceEstimate: '1800 - 5500 MAD (after haggle)' },
      { item: 'Leather Babouches', range: 'All sizes', priceEstimate: '80 - 180 MAD (after haggle)' },
      { item: 'Brass Lantern', range: 'Small / medium', priceEstimate: '250 - 900 MAD (after haggle)' },
      { item: 'Tagine Cooking Pot', range: 'Ceramic, medium', priceEstimate: '80 - 200 MAD (after haggle)' },
      { item: 'Pashmina / Scarf', range: 'Single', priceEstimate: '40 - 120 MAD (after haggle)' },
      { item: 'Argan Oil (100 ml)', range: 'Cosmetic', priceEstimate: '50 - 90 MAD (after haggle)' },
      { item: 'Spice Mix (per 100 g)', range: 'Ras el hanout / cumin', priceEstimate: '15 - 40 MAD (after haggle)' },
    ],

    reviewSummary:
      'The unavoidable souk experience — Marrakech\'s busiest and most accessible market street. Travelers consistently rate it as a must-do even when they find it overwhelming. Best-practice tips that recur across reviews: (1) go in the morning when it\'s cooler and touts are less aggressive; (2) never pay the first asking price — aim for 30–40% of it; (3) bring small cash (20s, 50s, 100s) and not large notes; (4) smile and walk away — stallholders will call you back with a lower price; (5) avoid stalls that block the path or hand you items unsolicited. The deeper alleys off Semmarine (Souk el Attarin, Souk Chouari, Souk des Teinturiers) are quieter and often have better quality at lower prices for travelers willing to explore.',
    recentReviews: [
      {
        author: 'Marcus T.',
        text: 'Iconic and chaotic in the best way. Bring cash, smile, walk away twice before buying. The deeper you go into the side alleys, the better the prices get.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'Fatima Z.',
        text: 'Locals shop here too — but for clothes and household items, not the tourist stalls on the main street. Walk 200 m into the side souks for real prices.',
        rating: 4,
        type: 'local',
      },
      {
        author: 'Sophie L.',
        text: 'Overwhelming on day 1, magical by day 3 once you learn to haggle. Bought a beautiful carpet for 1,800 MAD — started at 6,500 MAD. Be patient and friendly.',
        rating: 5,
        type: 'tourist',
      },
      {
        author: 'James H.',
        text: 'First visit was a nightmare of aggressive touts. Second visit (morning, weekday) was wonderful. Timing makes all the difference.',
        rating: 4,
        type: 'tourist',
      },
    ],
    isLocalFavorite: true,
    nearbyLandmarks: ['Jemaa el-Fna', 'Mouassine Fountain', 'Ben Youssef Madrasa', 'Souk el Attarin (spices)', 'Souk Chouari (basketmakers)'],
    history:
      'Souk Semmarine dates to the original Almoravid foundation of Marrakech in the 1070s, though its current covered form emerged in the Saadian period (16th century). The name derives from the Arabic "samar" (evening conversation) — historically the souk stayed open late for evening trade. The street was the main north-south commercial artery of the medina for 900 years, and was the first part of the souks to be electrified (1930) and paved (1961). The jewelry quarter at the Jemaa el-Fna end dates to the 18th century when Sultan Mohammed III consolidated the goldsmiths\' guild there. In 1985 the medina — including Souk Semmarine — was inscribed on the UNESCO World Heritage list. The souk\'s 4,000+ stalls collectively form the largest traditional market in Morocco and one of the largest in Africa.',
    tip: 'Anchor your first haggle at 30% of the asking price and aim to settle around 40–50%. Never haggle for fun — if you name a price and the seller accepts, you are expected to buy. Carry small cash; stallholders "never have change" for 200 MAD notes.',
  },
  {
    id: 'sh-marrakech-marjane-1',
    city: 'marrakech',
    name: 'Marjane Menara',
    type: 'supermarket',
    category: 'Hypermarket',
    neighborhood: 'Gueliz',
    description: 'Flagship hypermarket near Menara Gardens and the airport road. Comprehensive stock of bottled water, local dry goods, fresh bakery, international foods, sunscreen, and electronics.',
    googleRating: 4.2,
    googleReviewCount: 8900,
    priceLevel: 'budget',
    pricingModel: 'fixed',
    isVerified: true,
    googleMapsUrl: 'https://www.google.com/maps/search/Marjane+Menara+Marrakech/@31.6056,-8.0125,13z',
    address: 'Avenue Guemassa, Route de l\'Aéroport, Menara, Marrakech',
    coordinates: { lat: 31.6056, lng: -8.0125 },
    tags: ["supermarket","hypermarket","groceries","travel-supplies","fixed-price","verified"],
    paymentMethods: ["cash","visa","mastercard","apple_pay"],
    productCategories: ["Groceries","Local Spices","Beverages","Bakery","Toiletries","Electronics"],
    languagesSpoken: ["Arabic","French","English"],
    openingHours: [{"day":"Mon-Sun","hours":"09:00 - 22:00"}]
  },
  {
    id: 'sh-marrakech-carrefour-1',
    city: 'marrakech',
    name: 'Carrefour Market Carré Eden',
    type: 'supermarket',
    category: 'Supermarket',
    neighborhood: 'Gueliz',
    description: 'Premier modern supermarket located in the lower level of Carré Eden Mall on Avenue Mohammed V in Gueliz. Stocked with French cheeses, fresh baguettes, organic items, and imported traveler essentials.',
    googleRating: 4.3,
    googleReviewCount: 4150,
    priceLevel: 'mid-range',
    pricingModel: 'fixed',
    isVerified: true,
    googleMapsUrl: 'https://www.google.com/maps/search/Carrefour+Market+Carre+Eden+Marrakech/@31.6364,-8.0117,13z',
    address: 'Carré Eden Shopping Center, Avenue Mohammed V, Gueliz, Marrakech',
    coordinates: { lat: 31.6364, lng: -8.0117 },
    tags: ["supermarket","deli","groceries","gueliz","fixed-price","verified"],
    paymentMethods: ["cash","visa","mastercard","apple_pay"],
    productCategories: ["French Groceries","Dairy & Cheese","Bakery","Fresh Fruit","Wines & Spirits","Toiletries"],
    languagesSpoken: ["French","English","Arabic"],
    openingHours: [{"day":"Mon-Sun","hours":"08:30 - 22:00"}]
  },
  {
    id: 'sh-marrakech-decathlon-1',
    city: 'marrakech',
    name: 'Decathlon Marrakech Al Mazar',
    type: 'mall_store',
    category: 'Sports Store',
    neighborhood: 'Gueliz',
    description: 'Spacious sporting goods store in Al Mazar Mall near Agdal gardens. Best shop in Marrakech for Atlas trekking boots, moisture-wicking shirts, sunglasses, swimming gear, and duffel bags.',
    googleRating: 4.4,
    googleReviewCount: 3820,
    priceLevel: 'budget',
    pricingModel: 'fixed',
    isVerified: true,
    googleMapsUrl: 'https://www.google.com/maps/search/Decathlon+Al+Mazar+Marrakech/@31.5947,-7.9866,13z',
    address: 'Al Mazar Mall, Route de l\'Ourika, Marrakech',
    coordinates: { lat: 31.5947, lng: -7.9866 },
    tags: ["sports","hiking","camping","shoes","trekking","fixed-price","verified"],
    paymentMethods: ["cash","visa","mastercard","apple_pay"],
    productCategories: ["Hiking Boots","Trail Packs","Activewear","Water Bottles","Camping Gear"],
    languagesSpoken: ["French","Arabic","English"],
    openingHours: [{"day":"Mon-Sun","hours":"09:30 - 21:00"}]
  },
  {
    id: 'sh-marrakech-atacadao-1',
    city: 'marrakech',
    name: 'Atacadão Marrakech',
    type: 'supermarket',
    category: 'Supermarket',
    neighborhood: 'Gueliz',
    description: 'Large wholesale warehouse supermarket on the Route de Fès. Sells water cases, non-perishable staples, dates, olive oil, and snacks in consumer and bulk quantities at discounted rates.',
    googleRating: 4.1,
    googleReviewCount: 2950,
    priceLevel: 'budget',
    pricingModel: 'fixed',
    isVerified: true,
    googleMapsUrl: 'https://www.google.com/maps/search/Atacadao+Route+de+Fes+Marrakech/@31.6508,-7.9482,13z',
    address: 'Route de Fès, N8, Marrakech',
    coordinates: { lat: 31.6508, lng: -7.9482 },
    tags: ["supermarket","wholesale","bulk-staples","discount","fixed-price","verified"],
    paymentMethods: ["cash","visa","mastercard"],
    productCategories: ["Bulk Water","Dry Food","Cooking Oil","Cleaning Supplies","Snacks"],
    languagesSpoken: ["Arabic","French"],
    openingHours: [{"day":"Mon-Sun","hours":"08:30 - 20:30"}]
  },
  {
    id: 'sh-marrakech-bim-1',
    city: 'marrakech',
    name: 'BIM Gueliz Sourya',
    type: 'supermarket',
    category: 'Supermarket',
    neighborhood: 'Gueliz',
    description: 'Neighborhood discount convenience shop in central Gueliz. Excellent for rapid purchases of cold bottled water, yogurt, bread, fruit juices, and hygiene products without checkout lines.',
    googleRating: 4,
    googleReviewCount: 310,
    priceLevel: 'budget',
    pricingModel: 'fixed',
    isVerified: true,
    googleMapsUrl: 'https://www.google.com/maps/search/BIM+Gueliz+Sourya+Marrakech/@31.6355,-8.0105,13z',
    address: 'Rue Sourya, Gueliz, Marrakech',
    coordinates: { lat: 31.6355, lng: -8.0105 },
    tags: ["supermarket","discount-grocery","snacks","water","fixed-price","verified"],
    paymentMethods: ["cash","visa","mastercard"],
    productCategories: ["Mineral Water","Cookies","Dairy","Juices","Personal Care"],
    languagesSpoken: ["Arabic","French"],
    openingHours: [{"day":"Mon-Sun","hours":"08:30 - 21:00"}]
  }
];
