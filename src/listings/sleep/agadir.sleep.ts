/**
 * =========================================================================
 * MOROCCAN MATE — ACCOMMODATIONS (SLEEP) LISTINGS: AGADIR
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/sleep/template.sleep.ts
 *
 * When updating or generating new stay entries with external AI or web search,
 * you MUST strictly adhere to the following allowed array values:
 *
 * ALLOWED OPTIONS BIBLE:
 * - type:             'riad' | 'dar' | 'hotel' | 'kasbah' | 'desert-camp' | 'guesthouse' | 'hostel' | 'resort' | 'apartment' | 'villa' | 'lodge'
 * - lifestyle:        'lean' | 'balanced' | 'premium'
 * - locationFeel:     'medina-heart' | 'ville-nouvelle' | 'countryside'
 * - groupTypes:       'solo' | 'couple' | 'family' | 'friends' | 'large-groups' | 'seniors' | 'business-friendly' | 'nature-lover'
 * - safetyLevel:      1 | 2 | 3 | 4 | 5
 * - paymentMethods:   'cash' | 'credit_card' | 'visa' | 'mastercard' | 'apple_pay' | 'google_pay' | 'bank_transfer'
 * - amenities:        'pool' | 'breakfast' | 'ac' | 'heating' | 'wifi' | 'rooftop' | 'ensuite' | 'restaurant' | 'bar' | 'gym' | 'elevator' | 'laundry' | 'room-service' | 'pet-friendly'
 * - roomFeatures:     'soundproof' | 'workspace' | 'balcony' | 'fireplace' | 'courtyard-view' | 'mountain-view' | 'sea-view' | 'patio-access'
 * - languagesSpoken:  'Arabic' | 'French' | 'English' | 'Spanish' | 'German' | 'Italian' | 'Berber / Tamazight'
 * - archetypeAffinity:'first-timer' | 'culture' | 'adventure' | 'relaxed' | 'foodie' | 'budget' | 'luxury'
 *
 * BLANK COPY-PASTE TEMPLATE FOR NEW ENTRIES:
 * {
 *   id: 'stay-[city]-[slug]',
 *   city: 'agadir',
 *   name: '',
 *   neighborhood: 'Medina',
 *   description: '',
 *   price: 850,
 *   lifestyle: 'balanced',
 *   type: 'riad',
 *   locationFeel: 'medina-heart',
 *   safetyLevel: 5,
 *   groupTypes: ['solo', 'couple', 'friends'],
 *   hasPool: false,
 *   hasBreakfast: true,
 *   hasAC: true,
 *   hasHeating: true,
 *   hasRooftop: true,
 *   hasEnsuite: true,
 *   hasRestaurant: false,
 *   hasBar: false,
 *   hasGym: false,
 *   hasElevator: false,
 *   hasLaundryService: true,
 *   hasRoomService: false,
 *   petFriendly: false,
 *   taxesIncluded: true,
 *   freeCancellation: true,
 *   kidsStayFree: false,
 *   nearMedina: true,
 *   nearBeach: false,
 *   nearMosque: true,
 *   isHiddenGem: false,
 *   images: [],
 *   tip: '',
 *   archetypeAffinity: ['first-timer', 'culture'],
 *   vibeTags: ['historic', 'intimate', 'tranquil'],
 *   tags: ['riad', 'medina', 'breakfast', 'rooftop', 'ac', 'wifi'],
 *   locationSummary: 'Medina',
 *   googleMapsUrl: 'https://maps.google.com/?q=',
 *   contactWhatsApp: '',
 *   bookingUrl: '',
 *   paymentMethods: ['credit_card', 'cash'],
 *   languagesSpoken: ['Arabic', 'French', 'English'],
 *   logistics: {
 *     checkIn: '14:00',
 *     checkOut: '11:00',
 *     luggageStorage: 'Available free of charge',
 *     parking: 'Public parking available nearby',
 *     airportTransfer: 'Available upon request',
 *     contact: ''
 *   },
 *   roomFeatures: ['courtyard-view'],
 *   roomTypes: [{ name: 'Standard Double Room', view: 'Courtyard view', price: 850, beds: '1 Double bed', size: '20 sqm', available: true }],
 *   coordinates: { lat: 31.6295, lng: -7.9811 },
 *   googleRating: 4.7,
 *   googleReviewCount: 200
 * }
 * =========================================================================
 */
import type { SleepListing } from '../types'

/**
 * SLEEP LISTING DATA TEMPLATE (Copy this for your search agent)
 * -------------------------------------------------------------
 * {
 *   "id": "city-sleep-XX",
 *   "name": "",
 *   "type": "riad | hotel | villa | hostel | apartment | guesthouse",
 *   "neighborhood": "",
 *   "city": "[city]",
 *   "description": "",
 *   "pricePerNight": 0,
 *   "lifestyle": "lean | balanced | premium",
 *
 *   // ═══════════════════════════════════════════════════
 *   // IMAGES — now fetched from Google Places API via googlePlaceId
 *   // ═══════════════════════════════════════════════════
 *   // REMOVED: images: ['url1', 'url2', 'url3']
 *   // Instead, just add: // googlePlaceId: "ChIJ..."
 *   // Frontend uses googlePlaceId to call Google Places API → gets photo_reference → builds <img> URLs
 *
 *   // ═══════════════════════════════════════════════════
 *   // RATINGS — organized per source (replaces single rating/reviewCount)
 *   // ═══════════════════════════════════════════════════
 *   // Search for real ratings from Google, TripAdvisor, Booking.com, and HotelGuru.
 *   // If you cannot find a rating for a specific source, set it to the same value as
 *   // the closest available one so average calculations don't break.
 *
 *   googleRating: [4.x],
 *   googleReviewCount: [number],
 *   tripadvisorRating: [4.x],
 *   tripadvisorReviewCount: [number],
 *   bookingRating: [4.x],
 *   bookingReviewCount: [number],
 *   hotelguruRating: [4.x],
 *   hotelguruReviewCount: [number],
 *
 *   // ═══════════════════════════════════════════════════
 *   // BOOLEAN AMENITIES
 *   // ═══════════════════════════════════════════════════
 *
 *   hasPool: true | false,
 *   hasBreakfast: true | false,
 *   hasAC: true | false,
 *   hasHeating: true | false,
 *   hasRooftop: true | false,
 *   hasEnsuite: true | false,
 *   hasRestaurant: true | false,
 *   hasBar: true | false,
 *   hasGym: true | false,
 *   hasElevator: true | false,
 *   hasLaundryService: true | false,
 *   hasRoomService: true | false,
 *   petFriendly: true | false,
 *   isWheelchairAccessible: true | false,
 *   taxesIncluded: true | false,
 *   freeCancellation: true | false,
 *   kidsStayFree: true | false,
 *
 *   nearMedina: true | false,
 *   nearBeach: true | false,
 *   nearMosque: true | false,
 *   safetyLevel: 1 | 2 | 3 | 4 | 5,
 *
 *   // ═══════════════════════════════════════════════════
 *   // TRUST SCORES
 *   // ═══════════════════════════════════════════════════
 *
 *   trustScores: {
 *     cleanliness: [1-10],
 *     safety: [1-10],
 *     staff: [1-10],
 *     value: [1-10],
 *     comfort: [1-10],
 *     location: [1-10]
 *   },
 *
 *   // ═══════════════════════════════════════════════════
 *
 *   amenities: ['wifi', 'pool', 'ac', 'breakfast', 'spa', 'restaurant', 'gym', 'kitchenette', 'parking', 'bar', 'laundry', 'elevator', 'room-service'],
 *   tip: '[Short insider tip]',
 *   vibeTags: ['Authentic', 'Quiet', 'Modern'],
 *   locationSummary: 'Beachfront | City Center | Medina | Airport Area | Residential | Tourist Zone',
 *   availabilityText: 'Available tonight | Only 2 rooms left | Available on selected dates',
 *   googleMapsUrl: 'https://maps.google.com/?q=[Name]+[City]',
 *   address: '[Full street address, City, Postal Code, Morocco]',
 *
 *   paymentMethods: ['card', 'cash'],
 *   languagesSpoken: ['Arabic', 'French', 'English', 'Spanish', 'German'],
 *   groupTypes: ['solo', 'couple', 'family', 'friends', 'seniors', 'large-groups', 'business-friendly'],
 *
 *   // ═══════════════════════════════════════════════════
 *
 *   customStory: 'Brief history, owner background, or architecture notes...',
 *   neighborhoodOverview: 'Description of the local atmosphere, safety, and vibe...',
 *   hiddenFeesNotice: 'City tax of XX MAD per person/night not included...',
 *   pros: ['Pro 1', 'Pro 2'],
 *   cons: ['Con 1'],
 *
 *   // ═══════════════════════════════════════════════════
 *   // LOGISTICS
 *   // ═══════════════════════════════════════════════════
 *
 *   logistics: {
 *     checkIn: '14:00 - 22:00',
 *     checkOut: 'Before 11:00',
 *     luggageStorage: 'Free | Paid | None',
 *     parking: 'Free on-site | Nearby public | Valet',
 *     contact: '+212 XXXXXXXXX'
 *   },
 *
 *   // ═══════════════════════════════════════════════════
 *   // ROOM FEATURES & TYPES
 *   // ═══════════════════════════════════════════════════
 *
 *   roomFeatures: ['soundproof', 'workspace', 'private-balcony', 'ac', 'heating', 'balcony', 'shower-ensuite', 'sea-view', 'garden-view', 'pool-view'],
 *   roomTypes: [
 *     {
 *       name: 'Double Room',
 *       price: 500,
 *       beds: '1 Queen',
 *       size: '20m2',
 *     }
 *   ],
 *
 *   // ═══════════════════════════════════════════════════
 *   // NEIGHBORHOOD DISTANCES
 *   // ═══════════════════════════════════════════════════
 *
 *   neighborhoodDistances: [
 *     { label: 'Beach', distance: '500m', time: '5 min walk', icon: 'beach' }
 *   ],
 *
 *   // ═══════════════════════════════════════════════════
 *
 *   cancellationPolicy: 'Free cancellation up to 24h before check-in | Flexible | Non-refundable',
 *   childPolicy: 'Children welcome | Free under 6 | Extra bed 200 MAD',
 *   officialWebsite: 'https://...',
 *   instagramHandle: '@...',
 *
 *   // googlePlaceId: "PLACE_ID_HERE",
 *
 *   // ═══════════════════════════════════════════════════
 *   // REVIEW HIGHLIGHTS
 *   // ═══════════════════════════════════════════════════
 *
 *   reviewHighlights: {
 *     solo: 'Great insight for solo...',
 *     couples: 'Great for couples...',
 *     families: 'Kid-friendly details...',
 *     business: 'Wi-Fi test details...',
 *     nomad: 'Remote work specific insight...'
 *   }
 * }
 */

export const agadirSleep: SleepListing[] = [
  {
    id: 'a-sleep-1',
    name: 'Sofitel Agadir Thalassa Sea & Spa',
    type: 'hotel',
    neighborhood: 'Secteur Touristique',
    city: 'agadir',
    description: 'A haven of well-being where Berber hospitality meets French elegance, right beside a private beach. Features thalasso spa and co-working space.',
    pricePerNight: 245,
    lifestyle: 'premium',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'beach', 'restaurant', 'breakfast'],
    // ── RATINGS ──
    googleRating: 4.5,
    googleReviewCount: 4504,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 4524,
    bookingRating: 4.4,
    bookingReviewCount: 836,
    hotelguruRating: 4.5,
    hotelguruReviewCount: 850,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: true,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: false,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['solo', 'couple', 'family', 'business-friendly', 'seniors'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'The hotel has banned single-use plastic. Book the "Romantic Getaway" package for champagne and in-room breakfast at a reduced rate.',
    vibeTags: ['Luxury', 'Beachfront', 'Spa', 'Elegant', '5-Star', 'Heated Pool', 'Private Beach'],
    locationSummary: "Agadir Seaside Promenade & Marina",
    availabilityText: 'Available tonight - Only 3 rooms left',
    googleMapsUrl: 'https://www.google.com/maps/place/30.398086,-9.597577/@30.398086,-9.597577,17z',
    address: 'Baie des Palmiers, Cité Founty P5, Secteur Touristique, Agadir 80010, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'Part of the Accor Sofitel collection, this flagship property opened in 2009 and was fully renovated in 2022 with a strong focus on thalassotherapy and sustainability.',
    neighborhoodOverview: 'Situated in the exclusive southern end of the Agadir bay promenade, offering the quietest beachfront experience away from the marina crowds.',
    hiddenFeesNotice: 'City tax of 28.60 MAD per person/night not included.',
    pros: ['Private beach access', 'World-class thalasso spa', 'Excellent French-Moroccan dining'],
    cons: ['Can feel large and resort-like', 'Breakfast not always included in base rate'],

    trustScores: {
      cleanliness: 9.2,
      safety: 9.3,
      staff: 9.1,
      value: 8.4,
      comfort: 9.0,
      location: 9.4
    },
    logistics: {
      checkIn: '15:00 - 23:59',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Free on-site',
      contact: '+212528388000'
    },
    roomFeatures: ['soundproof', 'workspace', 'private-balcony', 'ac', 'heating'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: '50m', time: '1 min walk', icon: 'beach' },
      { label: 'City Centre', distance: '3.5km', time: '8 min drive', icon: 'city' },
      { label: 'Agadir Airport', distance: '25km', time: '30 min drive', icon: 'plane' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome - free under 12',
    officialWebsite: 'https://all.accor.com/hotel/5242/index.en.shtml',
    instagramHandle: '@sofitelagadirthalassa',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Perfect for a relaxing solo escape with excellent spa treatments.',
      couples: 'Romantic private beach and sunset dinners.',
      families: 'Spacious rooms and kids activities available.',
      business: 'Co-working space and fast WiFi make it ideal for work.',
      nomad: 'The quiet ocean-view balcony is the perfect workspace.'
    },
    coordinates: {
      lat: 30.391612,
      lng: -9.598192
    },
    tags: ["family-favorite", "5-star", "beachfront", "private-beach", "heated-pool"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-2',
    name: 'Sofitel Agadir Royal Bay Resort',
    type: 'hotel',
    neighborhood: 'Secteur Touristique',
    city: 'agadir',
    description: 'A blend of modern design and Moroccan artistry. Beachfront property with a spacious pool and spa offering traditional argan oil treatments.',
    pricePerNight: 310,
    lifestyle: 'premium',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'beach', 'restaurant', 'fitness', 'nightclub', 'private-beach', 'swim-up-rooms'],
    googleRating: 4.4,
    googleReviewCount: 3250,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 3100,
    bookingRating: 4.2,
    bookingReviewCount: 970,
    hotelguruRating: 4.4,
    hotelguruReviewCount: 970,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: true,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: false,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['solo', 'couple', 'family', 'business-friendly', 'seniors'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'The Sunday Brunch served poolside is world class—book it in advance as it fills up fast.',
    vibeTags: ['Modern', 'Beachfront', 'Spa', 'Family', '5-Star', 'Nightclub', 'Private Beach', 'Swim-Up'],
    locationSummary: "Agadir Seaside Promenade & Marina",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.393134,-9.596515/@30.393134,-9.596515,17z',
    address: 'Baie des Palmiers, Cité Founty, Secteur Touristique, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'Opened as part of the Sofitel Royal Bay collection, known for its elegant design and direct beach access.',
    neighborhoodOverview: 'Located in the prime tourist sector of Agadir, right on the promenade.',
    hiddenFeesNotice: 'City tax of 28.60 MAD per person/night not included.',
    pros: ['Stunning beachfront location', 'Excellent argan oil spa', 'Multiple dining options'],
    cons: ['Premium pricing', 'Some rooms need updating'],

    trustScores: {
      cleanliness: 9.0,
      safety: 9.1,
      staff: 9.0,
      value: 8.2,
      comfort: 9.1,
      location: 9.5
    },
    logistics: {
      checkIn: '15:00 - 20:00',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Free on-site',
      contact: '+212528849200'
    },
    roomFeatures: ['soundproof', 'workspace', 'balcony', 'ac', 'heating'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: 'Direct', time: '0 min', icon: 'beach' },
      { label: 'Promenade', distance: '200m', time: '3 min walk', icon: 'walk' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://all.accor.com/hotel/5707/index.en.shtml',
    instagramHandle: '@sofitelagadirroyalbay',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Great spa and peaceful beach access.',
      couples: 'Beautiful pool and romantic dinners.',
      families: 'Spacious rooms and kids club.',
      business: 'Meeting facilities and fast WiFi.',
      nomad: 'Good workspace and stable fiber internet.'
    },
    coordinates: {
      lat: 30.39325,
      lng: -9.597075
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-3',
    name: 'Fairmont Taghazout Bay',
    type: 'hotel',
    neighborhood: 'Taghazout Bay',
    city: 'agadir',
    description: 'Luxurious resort set amidst 45 acres of landscaped gardens, offering a beach-chic aesthetic with modern amenities 9 miles north of Agadir.',
    pricePerNight: 425,
    lifestyle: 'premium',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'beach', 'restaurant', 'surf', 'heated-pool', 'kids-club', 'swim-up-rooms'],
    googleRating: 4.6,
    googleReviewCount: 1120,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 607,
    bookingRating: 4.4,
    bookingReviewCount: 370,
    hotelguruRating: 4.6,
    hotelguruReviewCount: 570,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: true,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: true,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "countryside",
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['solo', 'couple', 'family', 'business-friendly', 'seniors'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Request a villa-style room for maximum privacy and garden views. Taghazout is a vibrant surf and yogi hangout.',
    vibeTags: ['Luxury', 'Surf', 'Garden', 'Eco', '5-Star', 'Beachfront', 'Heated Pool', 'Kids Club', 'Swim-Up'],
    locationSummary: "Taghazout Bay Resort",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.516127,-9.686902/@30.516127,-9.686902,17z',
    address: "Fairmont Taghazout Bay, Km 17 Route d'Essaouira, Taghazout 80007, Morocco",
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'Part of the Fairmont brand, this 5-star resort opened in 2019 focusing on wellness and surf culture.',
    neighborhoodOverview: 'Set in 45 acres of gardens in the Taghazout Bay area, a quieter upscale zone north of Agadir.',
    hiddenFeesNotice: 'City tax of 28.60 MAD per person/night not included.',
    pros: ['Stunning 45-acre gardens', 'Direct surf access', 'Multiple pools'],
    cons: ['Far from Agadir center (15-20 min drive)', 'Premium prices'],

    trustScores: {
      cleanliness: 9.3,
      safety: 9.4,
      staff: 9.2,
      value: 8.0,
      comfort: 9.3,
      location: 8.7
    },
    logistics: {
      checkIn: '15:00 - 23:59',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Free on-site',
      contact: '+212528282828'
    },
    roomFeatures: ['soundproof', 'workspace', 'balcony', 'ac', 'heating', 'sea-view'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Taghazout Beach', distance: '300m', time: '5 min walk', icon: 'beach' },
      { label: 'Agadir City', distance: '14km', time: '20 min drive', icon: 'city' }
    ],
    cancellationPolicy: 'Free cancellation up to 48h before check-in',
    childPolicy: 'Children welcome - kids club available',
    officialWebsite: 'https://www.fairmont.com/taghazout-bay/',
    instagramHandle: '@fairmonttaghazoutbay',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Ideal for surfers and wellness seekers.',
      couples: 'Romantic villas and sunset yoga.',
      families: 'Great kids club and large gardens.',
      business: 'Meeting rooms and peaceful setting.',
      nomad: 'Good for digital detox nomads.'
    },
    coordinates: {
      lat: 30.51659,
      lng: -9.686777
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-4',
    name: 'The View Agadir',
    type: 'hotel',
    neighborhood: 'City Centre',
    city: 'agadir',
    description: 'Contemporary luxury overlooking the Atlantic Ocean. Features six diverse restaurants and attracts a young, trendy crowd.',
    pricePerNight: 250,
    lifestyle: 'premium',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'restaurant', 'rooftop'],
    googleRating: 4.5,
    googleReviewCount: 1240,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 194,
    bookingRating: 4.6,
    bookingReviewCount: 840,
    hotelguruRating: 4.5,
    hotelguruReviewCount: 840,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: true,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: true,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: false,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['solo', 'couple', 'family', 'business-friendly', 'seniors'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Treat yourself to innovative fine dining at Le Sensya. Ask for a high-floor room for panoramic Atlantic views.',
    vibeTags: ['Modern', 'Trendy', 'Views', 'Nightlife', '5-Star', 'Beachfront', 'Heated Pool'],
    locationSummary: "Agadir Seaside Promenade & Marina",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.41558847,-9.60315585/@30.41558847,-9.60315585,17z',
    address: 'Boulevard du 20 Août, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'Formerly Royal Atlas, rebranded as The View. A popular 5-star with central beach location.',
    neighborhoodOverview: 'Located in the vibrant city centre, steps from the beach, restaurants and nightlife.',
    hiddenFeesNotice: 'City tax of 28.60 MAD per person/night not included.',
    pros: ['Great central location', 'Multiple restaurants', 'Rooftop pool'],
    cons: ['Can get busy with events', 'Some rooms dated'],

    trustScores: {
      cleanliness: 8.9,
      safety: 9.0,
      staff: 8.8,
      value: 8.5,
      comfort: 8.9,
      location: 9.6
    },
    logistics: {
      checkIn: '15:00 - 23:59',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Valet',
      contact: '+212529080100'
    },
    roomFeatures: ['workspace', 'balcony', 'ac', 'heating', 'sea-view'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: '100m', time: '2 min walk', icon: 'beach' },
      { label: 'Souk El Had', distance: '2km', time: '5 min drive', icon: 'market' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://theviewhotels.com/the-view-agadir',
    instagramHandle: '@theviewagadir',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Trendy vibe perfect for solo travelers.',
      couples: 'Romantic ocean views and dining.',
      families: 'Spacious rooms and activities.',
      business: 'Excellent WiFi and central position.',
      nomad: 'Great rooftop workspace with sea views.'
    },
    coordinates: {
      lat: 30.415524,
      lng: -9.603529
    },
    tags: ["family-favorite"],
    foodStyles: ['Neo-Moroccan', 'Italian Fine Dining', 'Poolside Grill & Lounge'],
    servesAlcohol: true,
    bestDishes: [
      'Chicken Pastilla',
      'Blue Lobster Pastilla',
      'Tagliolini Burro e Tartufo',
      'The View Cheeseburger',
    ],
    menu: {
      currency: 'MAD',
      lastUpdated: 'Verified Official Outlet Menus',
      serviceChargeIncluded: true,
      sections: [
        {
          id: 'mima-kitchen',
          title: 'Mima Kitchen (Neo-Moroccan Cuisine)',
          titleEn: 'Mima Kitchen — Neo-Moroccan',
          description: 'Refined Moroccan starters, signature pastillas, tagines, and couscous',
          items: [
            { id: 'view-chicken-pastilla', name: 'Chicken Pastilla', price: 180, isSignature: true, dietary: ['halal'] },
            { id: 'view-lobster-pastilla', name: 'Blue Lobster Pastilla', price: 290, isSignature: true, dietary: ['halal'] },
            { id: 'view-gambas-chrekate', name: 'Gambas Chrekate', price: 190, dietary: ['halal'] },
            { id: 'view-tanjia-scallops', name: 'Tanjia-style Scallops', price: 290, dietary: ['halal'] },
            { id: 'view-langoustine-karan', name: 'Langoustine Karan Confit', price: 280, dietary: ['halal'] },
            { id: 'view-coquelet-tagine', name: 'Tagine of Coquelet Mqalli', price: 220, dietary: ['halal'] },
            { id: 'view-beef-tagine', name: 'Beef Tagine (Berber Style)', price: 290, dietary: ['halal'] },
            { id: 'view-marrakchi-tanjia', name: 'Marrakchi Beef Shank Tanjia', price: 290, isSignature: true, dietary: ['halal'] },
            { id: 'view-lamb-mrouzia', name: 'Lamb Shank Mrouzia-style', price: 320, dietary: ['halal'] },
            { id: 'view-fish-tagine', name: 'Atlantic Fish Tagine', price: 320, dietary: ['halal'] },
            { id: 'view-seffa-medfouna', name: 'Seffa Medfouna', price: 200, dietary: ['halal'] },
            { id: 'view-veg-couscous', name: 'Vegetarian Couscous', price: 180, dietary: ['vegetarian', 'halal'] },
            { id: 'view-tfaya-couscous', name: 'Couscous Tfaya with Chicken', price: 220, dietary: ['halal'] },
            { id: 'view-lamb-couscous', name: 'Lamb Couscous with Seven Vegetables', price: 250, dietary: ['halal'] },
            { id: 'view-rfissa', name: 'Rfissa with Farm Chicken', price: 280, dietary: ['halal'] },
            { id: 'view-boulfafe-filet', name: 'Beef Filet Medallion Boulfafe Style', price: 320, dietary: ['halal'] },
            { id: 'view-charmoula-seabass', name: 'Sea Bass Crusted with Green Charmoula', price: 320, dietary: ['halal'] },
          ],
        },
        {
          id: 'le-sensya',
          title: 'Le Sensya (Italian Fine Dining)',
          titleEn: 'Le Sensya — Italian Fine Dining',
          description: 'Antipasti, handmade pasta, risottos, steaks, and Italian desserts',
          items: [
            { id: 'sensya-carciofo', name: 'Carciofo Arrosto (Roasted Artichoke)', price: 140, dietary: ['vegetarian'], portionNotes: '140–160 MAD depending on garnish' },
            { id: 'sensya-cannoli-manzo', name: 'Cannoli di Manzo (Beef Tartare Cannoli)', price: 150, portionNotes: '150–200 MAD' },
            { id: 'sensya-parmigiana', name: 'Parmigiana di Melanzane', price: 160, dietary: ['vegetarian'] },
            { id: 'sensya-burrata', name: 'Carpaccio di Pomodoro con Burrata', price: 170, dietary: ['vegetarian'] },
            { id: 'sensya-fresella', name: 'Fresella di Mare (Fish Salad)', price: 170, portionNotes: '170–260 MAD' },
            { id: 'sensya-tonno', name: 'Tonno Agli Agrumi (Marinated Tuna)', price: 180 },
            { id: 'sensya-vongole', name: 'Sauté di Vongole', price: 180 },
            { id: 'sensya-astice', name: 'Zuppa di Astice (Lobster Soup)', price: 250 },
            { id: 'sensya-nerano', name: 'Linguine alla Nerano', price: 170, dietary: ['vegetarian'], portionNotes: '170–200 MAD' },
            { id: 'sensya-caprese', name: 'Ravioli Caprese', price: 170, dietary: ['vegetarian'], portionNotes: '170–200 MAD' },
            { id: 'sensya-capelli', name: "Capelli d'Angelo (Caviar & Anchovy)", price: 180 },
            { id: 'sensya-gnocchi-seppia', name: 'Gnocchi alla Genovese di Seppia', price: 190, portionNotes: '190–220 MAD' },
            { id: 'sensya-gnocchi-mare', name: 'Gnocchi ai Frutti di Mare', price: 220 },
            { id: 'sensya-canneloni', name: 'Canneloni di Pesce Bianco', price: 240, portionNotes: '240–250 MAD' },
            { id: 'sensya-risotto', name: 'Risotto Gamberi di Mazza e Limone', price: 280 },
            { id: 'sensya-tartufo', name: 'Tagliolini Burro e Tartufo (Butter & Truffle)', price: 300, isSignature: true, dietary: ['vegetarian'] },
            { id: 'sensya-calamaro', name: 'Calamaro with Peppers & Almonds', price: 190 },
            { id: 'sensya-porchetta', name: 'Porchetta di Agnello (Rolled Lamb Belly)', price: 250 },
            { id: 'sensya-filet-mignon', name: 'Beef Fillet Mignon', price: 260 },
            { id: 'sensya-spigola', name: 'Spigola (Atlantic Sea Bass)', price: 280 },
            { id: 'sensya-tbone', name: 'T-Bone Steak', price: 360 },
            { id: 'sensya-king-prawns', name: 'King Prawns (6 pieces)', price: 380 },
            { id: 'sensya-desserts', name: 'Tiramisu, Mille-feuille, or Chocolate Delicacies', price: 120, dietary: ['vegetarian'] },
          ],
        },
        {
          id: 'dielli-pool-grill',
          title: 'Dielli (Pool Bar & Grill)',
          titleEn: 'Dielli — Pool Bar & Grill',
          description: 'Daytime tapas, poke bowls, pasta, burgers, and grilled catches by the pool',
          items: [
            { id: 'dielli-anchovy', name: 'Garden Vegetable & Anchovy Basket', price: 110 },
            { id: 'dielli-tempura', name: 'Eggplant & Zucchini Tempura', price: 120, dietary: ['vegetarian'] },
            { id: 'dielli-feta-melon', name: 'Feta & Melon Salad', price: 140, dietary: ['vegetarian'] },
            { id: 'dielli-chicken-quesadillas', name: 'Roasted Chicken Quesadillas', price: 140, dietary: ['halal'] },
            { id: 'dielli-kefta-quesadillas', name: 'Spiced Kefta Quesadillas', price: 150, dietary: ['halal'] },
            { id: 'dielli-quinoa-salad', name: 'Quinoa, Avocado & Mango Salad', price: 180, dietary: ['vegetarian'] },
            { id: 'dielli-tataki-bowl', name: 'Tataki Beef Poke Bowl', price: 190 },
            { id: 'dielli-tentation-salad', name: 'Shrimp & Crab Salad with Argan Oil', price: 200 },
            { id: 'dielli-salmon-bowl', name: 'Marinated & Smoked Salmon Poke Bowl', price: 200 },
            { id: 'dielli-rigatoni', name: 'Rigatoni (Pesto or Arrabbiata)', price: 150, dietary: ['vegetarian'] },
            { id: 'dielli-chicken-skewers', name: 'Duo of Marinated Chicken Skewers', price: 180, dietary: ['halal'] },
            { id: 'dielli-calamari', name: 'Grilled Fresh Calamari with Chorizo', price: 180 },
            { id: 'dielli-cheeseburger', name: 'The View Cheeseburger (200g Charolais)', price: 190, isSignature: true },
            { id: 'dielli-fusilli-seafood', name: 'Fusilli with Seafood', price: 200 },
            { id: 'dielli-saint-pierre', name: 'Marinated Saint-Pierre Fillet', price: 240 },
          ],
        },
        {
          id: 'chay-lounge',
          title: 'Chay Lounge (Smoothies, Mocktails & Cocktails)',
          titleEn: 'Chay Lounge — Drinks & Mixology',
          description: 'Fresh health smoothies, house mocktails, and signature oceanfront cocktails',
          items: [
            { id: 'chay-smoothies', name: 'Smoothies & Health Drinks (Red Berries, Sunny, Red Detox, The Garden)', price: 90, dietary: ['vegan', 'gluten-free'] },
            { id: 'chay-mocktails', name: 'Chay House Mocktails', price: 110, dietary: ['vegan'], portionNotes: '110–140 MAD' },
            { id: 'chay-cocktails', name: 'Signature Cocktails (The View Martini, Smoked Negroni, Barrel Aged Manhattan)', price: 180, isSignature: true },
          ],
        },
      ],
    },
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-5',
    name: 'Riad Villa Blanche',
    type: 'riad',
    neighborhood: 'Secteur Touristique',
    city: 'agadir',
    description: 'Intimate and elegant boutique hotel blending traditional Moroccan elements with modern comforts, featuring a spa with Berber rituals.',
    pricePerNight: 230,
    lifestyle: 'premium',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'breakfast', 'restaurant'],
    googleRating: 4.5,
    googleReviewCount: 850,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 850,
    bookingRating: 4.4,
    bookingReviewCount: 550,
    hotelguruRating: 4.5,
    hotelguruReviewCount: 550,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: true,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: false,
    hasGym: false,
    hasElevator: false,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['solo', 'couple', 'family', 'business-friendly', 'seniors'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Always book directly to unlock the complimentary refined sweet and savory continental breakfast.',
    vibeTags: ['Authentic', 'Boutique', 'Spa', 'Intimate', 'Heated Pool', 'Indoor Pool', 'Luxury'],
    locationSummary: "Agadir Seaside Promenade & Marina",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.39004,-9.593926/@30.39004,-9.593926,17z',
    address: 'Baie des Palmiers, Secteur Touristique, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'A boutique riad with 28 rooms offering a peaceful oasis near the beach.',
    neighborhoodOverview: 'A quiet residential pocket within the tourist zone, walking distance to the beach.',
    hiddenFeesNotice: 'City tax not included.',
    pros: ['Beautiful traditional architecture', 'Excellent spa', 'Great breakfast'],
    cons: ['Location slightly away from main promenade', 'Small pool area'],

    trustScores: {
      cleanliness: 9.1,
      safety: 9.0,
      staff: 8.8,
      value: 8.6,
      comfort: 8.9,
      location: 8.2
    },
    logistics: {
      checkIn: '15:00 - 23:59',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212528211313'
    },
    roomFeatures: ['ac', 'heating', 'balcony', 'traditional-decor'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: '400m', time: '5 min walk', icon: 'beach' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://www.riadvillablanche.com',
    instagramHandle: '@riadvillablanche',
    isWheelchairAccessible: false,

    reviewHighlights: {
      solo: 'Peaceful boutique feel perfect for relaxation.',
      couples: 'Romantic courtyard and spa rituals.',
      families: 'Spacious rooms, though best for couples.',
      business: 'Quiet environment and good WiFi.',
      nomad: 'Tranquil setting for focused remote work.'
    },
    coordinates: {
      lat: 30.389913,
      lng: -9.594137
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-6',
    name: 'Hotel Riu Palace Tikida Agadir',
    type: 'hotel',
    neighborhood: 'Secteur Touristique',
    city: 'agadir',
    description: 'Beachfront 24-hour all-inclusive resort with a promenade separating the hotel from the sand. Multiple dining options including Moroccan and Italian.',
    pricePerNight: 185,
    lifestyle: 'balanced',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'beach', 'all-inclusive', 'restaurant', 'heated-pool', 'kids-club', 'private-beach'],
    googleRating: 4.4,
    googleReviewCount: 7650,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 4500,
    bookingRating: 4.1,
    bookingReviewCount: 2100,
    hotelguruRating: 4.4,
    hotelguruReviewCount: 7650,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: true,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['solo', 'couple', 'family', 'friends', 'business-friendly', 'seniors'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Opt for a room with a balcony facing the fountain for the best views. Consider visiting in low season (January) to avoid crowds.',
    vibeTags: ['All-Inclusive', 'Beachfront', 'Family', 'Resort', '5-Star', 'Heated Pool', 'Kids Club', 'Private Beach'],
    locationSummary: "Sonaba & Tourist Zone",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.40809,-9.59907/@30.40809,-9.59907,17z',
    address: 'Chemin des Dunes, Secteur Touristique, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English', 'German'],

    customStory: 'A flagship Riu Palace property popular for its all-inclusive model and direct beach access.',
    neighborhoodOverview: 'On the main tourist strip within walking distance to the marina.',
    hiddenFeesNotice: 'City tax of 17.60 MAD per person/night not included.',
    pros: ['Excellent value all-inclusive', 'Large pool area', 'Varied dining'],
    cons: ['Can feel crowded', 'Beach separated by promenade'],

    trustScores: {
      cleanliness: 8.8,
      safety: 9.0,
      staff: 8.7,
      value: 9.2,
      comfort: 8.6,
      location: 9.3
    },
    logistics: {
      checkIn: '15:00 - 23:59',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212528388484'
    },
    roomFeatures: ['ac', 'balcony', 'shower-ensuite', 'heating'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: 'Direct (across promenade)', time: '2 min walk', icon: 'beach' }
    ],
    cancellationPolicy: 'Free cancellation up to 48h before check-in',
    childPolicy: 'Children welcome - all-inclusive covers kids',
    officialWebsite: 'https://www.riu.com/en/hotel/morocco/agadir/hotel-riu-palace-tikida-agadir/',
    instagramHandle: '@riupalacetikida',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Good value and friendly staff.',
      couples: 'Great pool and dining options.',
      families: 'Kids club and all-inclusive.',
      business: 'Meeting rooms available.',
      nomad: 'Works from lobby area.'
    },
    coordinates: {
      lat: 30.407955,
      lng: -9.600393
    },
    tags: ["family-favorite", "heritage"],
    foodStyles: ['All-Inclusive International', 'Moroccan', 'Italian', 'Fusion Gourmet'],
    servesAlcohol: true,
    bestDishes: [
      'Traditional Moroccan Tagine (Marrakech)',
      'Krystal Fusion Multi-Course Dinner',
      'Il Mare Italian & Steakhouse',
      'Le Santal Live Cooking Buffet',
    ],
    menu: {
      currency: 'MAD',
      lastUpdated: 'Verified Resort Dining Outlets',
      serviceChargeIncluded: true,
      sections: [
        {
          id: 'le-santal-buffet',
          title: 'Le Santal — Main Restaurant (Breakfast & Dinner Buffet)',
          titleEn: 'Le Santal — Main Buffet',
          description: 'Extensive daily breakfast and dinner buffets with live cooking stations and themed nights',
          items: [
            { id: 'riu-breakfast-buffet', name: 'International & Moroccan Breakfast Buffet', price: 0, portionNotes: 'Included in 24h All-Inclusive stay', dietary: ['halal'] },
            { id: 'riu-dinner-stations', name: 'Live Cooking & Themed Evening Buffet (Vegetarian & Grilled Stations)', price: 0, portionNotes: 'Included in 24h All-Inclusive stay', dietary: ['vegetarian', 'halal'] },
          ],
        },
        {
          id: 'marrakech-restaurant',
          title: 'Marrakech Restaurant — Moroccan À La Carte (Dinner)',
          titleEn: 'Marrakech — Moroccan À La Carte',
          description: 'Authentic Moroccan recipes served à la carte; advance reservation recommended via RIU app',
          items: [
            { id: 'riu-moroccan-salads', name: 'Traditional Moroccan Salads & Pastries', price: 0, portionNotes: 'Included in 24h All-Inclusive stay', dietary: ['vegetarian', 'halal'] },
            { id: 'riu-moroccan-tagines', name: 'Authentic Lamb & Chicken Tagines & Couscous', price: 0, isSignature: true, portionNotes: 'Included in 24h All-Inclusive stay (reservation required)', dietary: ['halal'] },
            { id: 'riu-mint-tea', name: 'Moroccan Mint Tea & Sweets', price: 0, portionNotes: 'Included in 24h All-Inclusive stay', dietary: ['vegan', 'halal'] },
          ],
        },
        {
          id: 'krystal-fusion',
          title: 'Krystal — Gourmet Fusion Restaurant (Lunch / Dinner)',
          titleEn: 'Krystal — Gourmet Fusion',
          description: 'Intimate signature RIU à la carte restaurant featuring multi-course fusion cuisine',
          items: [
            { id: 'riu-krystal-seafood', name: 'Fresh Atlantic Fish & Seafood Fusion Plates', price: 0, isSignature: true, portionNotes: 'Included in 24h All-Inclusive stay (reservation required)', dietary: ['halal'] },
            { id: 'riu-krystal-meats', name: 'Gourmet Meat Cuts & Tasting Desserts', price: 0, portionNotes: 'Included in 24h All-Inclusive stay (reservation required)', dietary: ['halal'] },
          ],
        },
        {
          id: 'il-mare-italian',
          title: 'Il Mare & Pool Restaurant — Italian, Steakhouse & Daytime Snacks',
          titleEn: 'Il Mare — Italian & Poolside Steakhouse',
          description: 'Daytime poolside/beach snacks transitioning into Italian and steakhouse à la carte dining in the evening',
          items: [
            { id: 'riu-ilmare-italian', name: 'Italian Starters, Fresh Pasta & Pizza', price: 0, portionNotes: 'Included in 24h All-Inclusive stay', dietary: ['vegetarian'] },
            { id: 'riu-steakhouse', name: 'Evening Steakhouse & Grilled Cuts', price: 0, portionNotes: 'Included in 24h All-Inclusive stay', dietary: ['halal'] },
          ],
        },
        {
          id: 'riu-bars',
          title: '24h Bars & Lounges (O Bar, Salon Bar, Pool Swim-Up & Plaza Terrace)',
          titleEn: 'Resort Bars & Lounges',
          description: 'Unlimited coffee, soft drinks, local and international spirits, cocktails, and beer across the resort',
          items: [
            { id: 'riu-lobby-bar', name: 'O Bar & Lobby Lounge — Specialty Coffees, Tea & Cocktails', price: 0, portionNotes: 'Included in 24h All-Inclusive program' },
            { id: 'riu-swimup-bar', name: 'Pool & Swim-Up Bar (18+) — Refreshments, Beer & Tropical Cocktails', price: 0, portionNotes: 'Included in 24h All-Inclusive program' },
            { id: 'riu-salon-bar', name: 'Salon & Plaza Terrace Bar — Evening Drinks & Live Shows', price: 0, portionNotes: 'Included in 24h All-Inclusive program' },
          ],
        },
      ],
    },
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-7',
    name: 'Iberostar Waves Founty Beach',
    type: 'hotel',
    neighborhood: 'Secteur Touristique',
    city: 'agadir',
    description: 'Relaxed beachfront resort with pools, kids clubs, and all-inclusive dining. Ideal for easy, family-friendly holidays.',
    pricePerNight: 135,
    lifestyle: 'balanced',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'beach', 'all-inclusive', 'kids-club', 'waterslides', 'water-park', 'heated-pool', 'private-beach'],
    googleRating: 4.4,
    googleReviewCount: 4500,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 4487,
    bookingRating: 4.3,
    bookingReviewCount: 2720,
    hotelguruRating: 4.3,
    hotelguruReviewCount: 2720,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: true,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: false,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['solo', 'couple', 'family', 'friends', 'business-friendly'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Each room has a terrace—request a sea-facing one at check-in as not all face the ocean by default.',
    vibeTags: ['Family', 'All-Inclusive', 'Beachfront', 'Relaxed', 'Waterslides', 'Heated Pool', 'Kids Club', 'Private Beach'],
    locationSummary: "Agadir Seaside Promenade & Marina",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.3968045,-9.5968741',
    address: 'Chemin des Dunes, Cité Founty, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English', 'German'],

    customStory: 'Part of the Iberostar family, known for family-friendly all-inclusive experiences.',
    neighborhoodOverview: 'Located on the main beach strip, safe and walkable to restaurants and shops.',
    hiddenFeesNotice: 'Tourist tax not included.',
    pros: ['Strong value all-inclusive', 'Good kids facilities', 'Beach access'],
    cons: ['Can be busy during peak season', 'Some dated areas'],

    trustScores: {
      cleanliness: 8.7,
      safety: 8.9,
      staff: 8.8,
      value: 9.0,
      comfort: 8.5,
      location: 9.1
    },
    logistics: {
      checkIn: '15:00 - 23:00',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212528844444'
    },
    roomFeatures: ['ac', 'balcony', 'heating'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: 'Direct', time: '1 min walk', icon: 'beach' }
    ],
    cancellationPolicy: 'Free cancellation up to 48h before check-in',
    childPolicy: 'Children welcome - free under 12',
    officialWebsite: 'https://www.iberostar.com/en/hotels/agadir/iberostar-waves-founty-beach/',
    instagramHandle: '@iberostaragadir',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Relaxed vibe and good value.',
      couples: 'Beach and pool time.',
      families: 'Excellent kids club and entertainment.',
      business: 'Decent WiFi and quiet corners.',
      nomad: 'Functional for basic remote work.'
    },
    coordinates: {
      lat: 30.396726,
      lng: -9.597228
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-8',
    name: 'Anezi Tower Hotel',
    type: 'hotel',
    neighborhood: 'City Centre',
    city: 'agadir',
    description: 'Centrally located tower hotel offering panoramic views of the city and beaches. Features 3 outdoor pools and tennis courts.',
    pricePerNight: 105,
    lifestyle: 'balanced',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'views', 'tennis'],
    googleRating: 3.8,
    googleReviewCount: 3500,
    tripadvisorRating: 3.4,
    tripadvisorReviewCount: 1363,
    bookingRating: 3.5,
    bookingReviewCount: 3492,
    hotelguruRating: 3.8,
    hotelguruReviewCount: 1300,

    hasPool: true,
    hasBreakfast: false,
    hasAC: true,
    hasHeating: true,
    hasRooftop: true,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: false,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: false,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: false,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['solo', 'couple', 'family', 'friends', 'business-friendly'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'The upper floors provide some of the best panoramic city-to-ocean views in Agadir at a lower price than beachfront resorts.',
    vibeTags: ['Views', 'Central', 'Budget-Friendly', 'Pool'],
    locationSummary: "Sonaba & Tourist Zone",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.416685,-9.600146/@30.416685,-9.600146,17z',
    address: 'Boulevard Mohamed V, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'A long-standing 4-star tower hotel popular with travelers seeking value and views.',
    neighborhoodOverview: 'Central location near shops and restaurants.',
    hiddenFeesNotice: 'City tax not included.',
    pros: ['Excellent panoramic views', '3 pools', 'Central location'],
    cons: ['Rooms vary in quality', 'Breakfast not included'],

    trustScores: {
      cleanliness: 8.0,
      safety: 8.5,
      staff: 8.2,
      value: 9.0,
      comfort: 7.8,
      location: 9.1
    },
    logistics: {
      checkIn: '15:00 - 17:00',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212528840940'
    },
    roomFeatures: ['ac', 'heating', 'balcony', 'city-view'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: '800m', time: '10 min walk', icon: 'beach' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://www.hotelaneziagadir.com',
    instagramHandle: '@aneziagadir',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Good value and views for solo travelers.',
      couples: 'Rooftop and pool relaxation.',
      families: 'Multiple pools and space.',
      business: 'Central and affordable.',
      nomad: 'Views inspire work.'
    },
    coordinates: {
      lat: 30.416926,
      lng: -9.600162
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-9',
    name: 'TUI SUNEO Kenzi Europa',
    type: 'hotel',
    neighborhood: 'Agadir Bay',
    city: 'agadir',
    description: 'Comfortable and affordable 4-star hotel near the beach and city centre, perfect for access to nightlife and shopping.',
    pricePerNight: 95,
    lifestyle: 'balanced',
    amenities: ['wifi', 'pool', 'ac', 'breakfast', 'beach', 'waterslides', 'water-park', 'heated-pool', 'all-inclusive', 'kids-club'],
    googleRating: 4.2,
    googleReviewCount: 2800,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 647,
    bookingRating: 4.1,
    bookingReviewCount: 580,
    hotelguruRating: 4.3,
    hotelguruReviewCount: 580,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: false,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: false,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: false,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 4,
    groupTypes: ['solo', 'couple', 'family', 'business-friendly', 'seniors'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Take advantage of TUI included excursion packages—Paradise Valley and camel treks are frequently bundled at reduced rates.',
    vibeTags: ['Value', 'Family', 'Central', 'Beach', 'Waterslides', 'Water Park', 'Heated Pool', 'All-Inclusive', 'Kids Club'],
    locationSummary: "Agadir Seaside Promenade & Marina",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.417091,-9.602951/@30.417091,-9.602951,17z',
    address: 'Boulevard 20 Août, Secteur Touristique, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'Popular TUI SUNEO property known for good value and proximity to the beach and nightlife.',
    neighborhoodOverview: 'Central location near beach and nightlife.',
    hiddenFeesNotice: 'City tax not included.',
    pros: ['Great price-to-quality', 'Beach proximity', 'Good buffet'],
    cons: ['Can be noisy from nearby areas', 'Basic decor'],

    trustScores: {
      cleanliness: 8.5,
      safety: 8.6,
      staff: 8.7,
      value: 9.1,
      comfort: 8.3,
      location: 9.0
    },
    logistics: {
      checkIn: '14:00 - 22:00',
      checkOut: 'Before 11:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212528821212'
    },
    roomFeatures: ['ac', 'heating'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: '300m', time: '4 min walk', icon: 'beach' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://www.kenzi-hotels.com/kenzi-europa',
    instagramHandle: '@kenzieuropaagadir',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Good base for exploring and value.',
      couples: 'Affordable beach holiday.',
      families: 'Good facilities and excursions.',
      business: 'Practical central location.',
      nomad: 'Affordable long-term stay.'
    },
    coordinates: {
      lat: 30.417156,
      lng: -9.602838
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-10',
    name: "Riad Les Chtis d'Agadir",
    type: 'riad',
    neighborhood: 'City Centre',
    city: 'agadir',
    description: 'Charming, traditional riad offering authentic Moroccan style and a peaceful atmosphere in a residential area.',
    pricePerNight: 100,
    lifestyle: 'balanced',
    amenities: ['wifi', 'ac', 'breakfast', 'rooftop'],
    googleRating: 4.7,
    googleReviewCount: 610,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 610,
    bookingRating: 4.4,
    bookingReviewCount: 618,
    hotelguruRating: 4.7,
    hotelguruReviewCount: 610,

    hasPool: false,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: true,
    hasEnsuite: true,
    hasRestaurant: false,
    hasBar: false,
    hasGym: false,
    hasElevator: false,
    hasLaundryService: true,
    hasRoomService: false,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    nearMosque: false,
    safetyLevel: 4,
    groupTypes: ['solo', 'couple', 'family', 'business-friendly'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Provides a deeply local, human-scale experience. Ask hosts for a guided introduction to the Souk El Had market.',
    vibeTags: ['Authentic', 'Traditional', 'Quiet', 'Local'],
    locationSummary: 'City Center - Residential',
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.4171,-9.588953/@30.4171,-9.588953,17z',
    address: '27 Rue Houmane El Fetouaki, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'A family-run riad with 8 rooms in the heart of the city, known for personal hospitality.',
    neighborhoodOverview: 'Residential area within walking distance to the market and attractions.',
    hiddenFeesNotice: 'None.',
    pros: ['Authentic Moroccan experience', 'Excellent hosts', 'Great breakfast'],
    cons: ['No pool', 'Short walk to beach'],

    trustScores: {
      cleanliness: 9.4,
      safety: 9.2,
      staff: 9.6,
      value: 9.3,
      comfort: 8.8,
      location: 8.5
    },
    logistics: {
      checkIn: '14:00 - 22:00',
      checkOut: 'Before 11:00',
      luggageStorage: 'Free',
      parking: 'Nearby public',
      contact: '+212666027962'
    },
    roomFeatures: ['ac', 'heating', 'traditional-decor'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Souk El Had', distance: '800m', time: '10 min walk', icon: 'market' },
      { label: 'Beach', distance: '1.2km', time: '15 min walk', icon: 'beach' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome - small families',
    officialWebsite: 'https://www.riadleschtisdagadir.com',
    instagramHandle: '@riadleschtis',
    isWheelchairAccessible: false,

    reviewHighlights: {
      solo: 'Warm welcome and authentic stay.',
      couples: 'Romantic and peaceful riad.',
      families: 'Cozy and welcoming for small families.',
      business: 'Quiet and central for city exploration.',
      nomad: 'Rooftop is a nice workspace.'
    },
    coordinates: {
      lat: 30.417117,
      lng: -9.588974
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-11',
    name: 'Hotel Sindibad',
    type: 'hotel',
    neighborhood: 'Talborjt',
    city: 'agadir',
    description: 'Well-regarded budget-friendly hotel in a nice part of town. Clean rooms and highly rated breakfast with fresh juice.',
    pricePerNight: 54.5,
    lifestyle: 'lean',
    amenities: ['wifi', 'pool', 'ac', 'breakfast'],
    googleRating: 4.1,
    googleReviewCount: 2700,
    tripadvisorRating: 4.0,
    tripadvisorReviewCount: 350,
    bookingRating: 4.0,
    bookingReviewCount: 2741,
    hotelguruRating: 4.1,
    hotelguruReviewCount: 155,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: false,
    hasGym: false,
    hasElevator: false,
    hasLaundryService: true,
    hasRoomService: false,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 4,
    groupTypes: ['solo', 'couple', 'family', 'business-friendly'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'A 10-minute walk from Ensemble Artisanal—your best base for authentic shopping at Souk El Had without breaking the bank.',
    vibeTags: ['Budget', 'Clean', 'Local', 'Value'],
    locationSummary: "Sonaba & Tourist Zone",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.42503,-9.592518',
    address: 'Place Lahcen Oubrahim, Talborjt, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'A trusted budget hotel in the Talborjt area, popular among travelers and locals alike.',
    neighborhoodOverview: 'Talborjt is a safe local neighborhood with easy access to the souk.',
    hiddenFeesNotice: 'None.',
    pros: ['Excellent breakfast', 'Clean rooms', 'Great value'],
    cons: ['Basic facilities', 'Small pool'],

    trustScores: {
      cleanliness: 9.0,
      safety: 8.8,
      staff: 8.9,
      value: 9.5,
      comfort: 8.0,
      location: 8.4
    },
    logistics: {
      checkIn: '12:00 - 23:00',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Nearby public',
      contact: '+212528823477'
    },
    roomFeatures: ['ac', 'heating'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Souk El Had', distance: '500m', time: '6 min walk', icon: 'market' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://hotelsindibad.ma',
    instagramHandle: '',
    isWheelchairAccessible: false,

    reviewHighlights: {
      solo: 'Perfect budget base for solo travelers.',
      couples: 'Good clean rooms and breakfast.',
      families: 'Simple but clean option.',
      business: 'Affordable central stay.',
      nomad: 'Basic but functional.'
    },
    coordinates: {
      lat: 30.424696,
      lng: -9.592979
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-12',
    name: 'Anza Surfhouse',
    type: 'hostel',
    neighborhood: 'Anza',
    city: 'agadir',
    description: 'Affordable Moroccan surf escape focused on authenticity, simplicity, and community. Taste home-cooked dishes and explore coastal breaks.',
    pricePerNight: 35,
    lifestyle: 'lean',
    amenities: ['wifi', 'surf', 'breakfast', 'rooftop'],
    googleRating: 4.7,
    googleReviewCount: 600,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 430,
    bookingRating: 4.4,
    bookingReviewCount: 600,
    hotelguruRating: 4.6,
    hotelguruReviewCount: 430,

    hasPool: false,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: true,
    hasEnsuite: true,
    hasRestaurant: false,
    hasBar: false,
    hasGym: false,
    hasElevator: false,
    hasLaundryService: true,
    hasRoomService: false,
    petFriendly: false,
    taxesIncluded: true,
    freeCancellation: true,
    kidsStayFree: false,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 4,
    groupTypes: ['solo', 'couple', 'friends', 'business-friendly'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Anza Beach has excellent waves and local art. Ask the host for local surf instructors—they are 30-50% cheaper than tourist-zone schools.',
    vibeTags: ['Surf', 'Authentic', 'Community', 'Budget'],
    locationSummary: "Sonaba & Tourist Zone",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.4472742,-9.6587784',
    address: '14 Bloc B Dallas Anza, Agadir 80000, Morocco',
    paymentMethods: ['cash', 'card'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'A surf-focused guesthouse in the authentic Anza area, popular with backpackers and wave seekers.',
    neighborhoodOverview: 'Anza is a working-class fishing village with a vibrant surf culture.',
    hiddenFeesNotice: 'None - taxes included.',
    pros: ['Great surf location', 'Friendly community', 'Excellent value'],
    cons: ['Far from city center', 'Basic amenities'],

    trustScores: {
      cleanliness: 8.8,
      safety: 8.5,
      staff: 9.2,
      value: 9.6,
      comfort: 8.0,
      location: 8.9
    },
    logistics: {
      checkIn: '14:00 - 21:00',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212678513011'
    },
    roomFeatures: ['rooftop-access'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Anza Beach', distance: '100m', time: '2 min walk', icon: 'beach' },
      { label: 'Agadir City', distance: '12km', time: '18 min drive', icon: 'city' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Not ideal for families',
    officialWebsite: 'https://anzasurfhouse.com',
    instagramHandle: '@anzasurfhouse',
    isWheelchairAccessible: false,

    reviewHighlights: {
      solo: 'Perfect for solo surfers and backpackers.',
      couples: 'Romantic surf escape.',
      families: 'Less ideal for families.',
      business: 'Not suited for business.',
      nomad: 'Surf community vibe.'
    },
    coordinates: {
      lat: 30.455,
      lng: -9.631722
    },
    tags: ["dorm", "heritage"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-13',
    name: 'Hotel Timoulay and Spa Agadir',
    type: 'hotel',
    neighborhood: 'Secteur Touristique',
    city: 'agadir',
    description: 'Boutique hotel with Art Deco and Berber influences, offering a peaceful retreat away from large resort crowds.',
    pricePerNight: 120,
    lifestyle: 'balanced',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'breakfast'],
    googleRating: 4.5,
    googleReviewCount: 2100,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 2135,
    bookingRating: 4.4,
    bookingReviewCount: 1650,
    hotelguruRating: 4.5,
    hotelguruReviewCount: 2100,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: true,
    hasEnsuite: true,
    hasRestaurant: false,
    hasBar: false,
    hasGym: false,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 4,
    groupTypes: ['solo', 'couple', 'business-friendly', 'seniors'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Enjoy the tranquil saltwater pool, a rare find in the area.',
    vibeTags: ['Boutique', 'Spa', 'Quiet', 'Peaceful', 'Heated Pool'],
    locationSummary: "Sonaba & Tourist Zone",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.3969,-9.593875',
    address: 'Chemin des Dunes, Secteur Touristique, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'A charming boutique hotel known for its Art Deco style and peaceful atmosphere.',
    neighborhoodOverview: 'Quiet street off the main tourist strip.',
    hiddenFeesNotice: 'City tax not included.',
    pros: ['Saltwater pool', 'Great spa', 'Quiet location'],
    cons: ['Smaller property', 'Limited dining'],

    trustScores: {
      cleanliness: 9.0,
      safety: 9.0,
      staff: 8.9,
      value: 8.8,
      comfort: 8.9,
      location: 8.7
    },
    logistics: {
      checkIn: '14:00 - 23:00',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212528234220'
    },
    roomFeatures: ['ac', 'heating', 'workspace'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: '500m', time: '6 min walk', icon: 'beach' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://timoulayhotel.com',
    instagramHandle: '@timoulayagadir',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Peaceful boutique experience.',
      couples: 'Romantic and relaxing.',
      families: 'Good for quiet families.',
      business: 'Tranquil work environment.',
      nomad: 'Saltwater pool break.'
    },
    coordinates: {
      lat: 30.396718,
      lng: -9.593944
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-14',
    name: 'Hotel Argana Agadir',
    type: 'hotel',
    neighborhood: 'City Centre',
    city: 'agadir',
    description: 'Vibrant hotel perfectly positioned near the beach and city center, offering extensive leisure facilities and gardens.',
    pricePerNight: 85,
    lifestyle: 'balanced',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'breakfast', 'nightclub'],
    googleRating: 3.9,
    googleReviewCount: 4130,
    tripadvisorRating: 3.6,
    tripadvisorReviewCount: 372,
    bookingRating: 3.5,
    bookingReviewCount: 11700,
    hotelguruRating: 3.9,
    hotelguruReviewCount: 4130,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: true,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: false,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: false,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 4,
    groupTypes: ['solo', 'couple', 'family', 'friends', 'business-friendly'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Great central location for exploring Agadir on foot.',
    vibeTags: ['Central', 'Vibrant', 'Value', 'Entertainment', 'Nightclub'],
    locationSummary: "Sonaba & Tourist Zone",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.413342,-9.59801',
    address: 'Boulevard Mohamed V, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'A popular 4-star with lively atmosphere and good amenities.',
    neighborhoodOverview: 'Central location near beach and attractions.',
    hiddenFeesNotice: 'City tax not included.',
    pros: ['Central location', 'Large pool and gardens', 'Good entertainment'],
    cons: ['Can be busy and noisy', 'Some rooms dated'],

    trustScores: {
      cleanliness: 8.2,
      safety: 8.5,
      staff: 8.0,
      value: 8.8,
      comfort: 7.9,
      location: 9.3
    },
    logistics: {
      checkIn: '14:00 - 22:00',
      checkOut: 'Before 11:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212528842100'
    },
    roomFeatures: ['ac', 'heating'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: '400m', time: '5 min walk', icon: 'beach' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://argana-hotel.com',
    instagramHandle: '@hotelargana',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Good location and value.',
      couples: 'Lively atmosphere.',
      families: 'Plenty of facilities.',
      business: 'Central for meetings.',
      nomad: 'Basic but central.'
    },
    coordinates: {
      lat: 30.413432,
      lng: -9.598213
    },
    tags: ["family-favorite"],
    foodStyles: ['Moroccan', 'International Buffet', 'Pool Bar & Grill'],
    servesAlcohol: true,
    bestDishes: [
      'Traditional Tagine (Le Pacha)',
      'Grilled Lamb Chops (Spagos)',
      'Spagos Special Cocktail',
      'Seafood Pasta (Spagos)',
    ],
    menu: {
      currency: 'MAD',
      lastUpdated: 'Verified Hotel & Spagos Pool Bar Menus',
      serviceChargeIncluded: true,
      sections: [
        {
          id: 'spagos-food',
          title: 'Spagos Pool Bar — Salads, Pasta & Grills (12:00–02:00)',
          titleEn: 'Spagos Pool Bar — Kitchen',
          description: 'Open to both hotel guests and walk-ins beside the main pool with live music and shisha terrace',
          items: [
            { id: 'argana-salads', name: 'Fresh Salads (Niçoise, Moroccan Tuna, Tomato-Mozzarella, Chicken Caesar, Seafood)', price: 55, portionNotes: 'Starting from 55 DH', dietary: ['halal'] },
            { id: 'argana-pasta', name: 'Pasta Dishes (Pomodoro, Bolognaise, Carbonara, 4-Cheese, Chicken & Mushroom, Seafood)', price: 60, portionNotes: 'Starting from 60 DH' },
            { id: 'argana-mains', name: 'Main Grill Courses (Chicken Skewers, Grilled Lamb Chops, Mixed Meat Grill, Beef Medallions, Fish Fillet)', price: 70, isSignature: true, portionNotes: 'Starting from 70 DH — served with two sides', dietary: ['halal'] },
          ],
        },
        {
          id: 'spagos-drinks',
          title: 'Spagos Pool Bar — Cocktails, Mocktails & Beverages',
          titleEn: 'Spagos Pool Bar — Drinks',
          description: 'Full poolside cocktail bar, mocktails, fresh juices, hot drinks (until 20:00), and wine list',
          items: [
            { id: 'argana-hot-drinks', name: 'Hot Drinks (Espresso, Cappuccino, Moroccan Tea)', price: 30, portionNotes: 'Starting from 30 DH (served until 20:00)' },
            { id: 'argana-soft-drinks', name: 'Soft Drinks, Sodas, Mineral Water & Energy Drinks', price: 40, portionNotes: 'Starting from 40 DH' },
            { id: 'argana-beers', name: 'Beers & Apéritifs', price: 40, portionNotes: 'Starting from 40–60 DH' },
            { id: 'argana-juices', name: 'Freshly Pressed Fruit Juices', price: 60, portionNotes: 'Starting from 60 DH', dietary: ['vegan'] },
            { id: 'argana-mocktails', name: 'House Mocktails (Virgin Mojito, Virgin Piña Colada, Borbora, Spagos Special)', price: 60, isSignature: true, portionNotes: 'Starting from 60 DH', dietary: ['vegan'] },
            { id: 'argana-spirits', name: 'Spirits (By the Glass)', price: 70, portionNotes: 'Starting from 70 DH' },
            { id: 'argana-classic-cocktails', name: 'Classic Cocktails (Mojito, Margarita, Negroni, Espresso Martini, Aperol Spritz)', price: 90, portionNotes: 'Starting from 90 DH' },
            { id: 'argana-signature-cocktails', name: 'Signature Cocktails, Sparkling Cocktails & Shooters', price: 100, isSignature: true, portionNotes: '100–120 DH' },
            { id: 'argana-wine-bottles', name: 'Moroccan & International Wine Bottles & Champagne', price: 180, portionNotes: 'Starting from 180 DH per bottle' },
          ],
        },
        {
          id: 'argana-restaurants',
          title: "L'Arganier (Buffet) & Le Pacha / Mille & Une Nuits (Moroccan)",
          titleEn: 'Main Buffet & Moroccan Restaurant',
          description: 'Daily hotel buffet dining and traditional Moroccan garden dinners; full printed menu cards at hotel reception',
          items: [
            { id: 'argana-larganier', name: "L'Arganier — Daily Breakfast & International Dinner Buffet", price: 0, portionNotes: 'Included for Half-Board / Full-Board guests; walk-in rates at reception', dietary: ['halal'] },
            { id: 'argana-lepacha', name: 'Le Pacha — Traditional Moroccan Tagines, Salads & Artisanal Breads', price: 0, isSignature: true, portionNotes: 'À la carte / garden dinner service at hotel', dietary: ['halal'] },
          ],
        },
      ],
    },
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-15',
    name: 'Odyssee Park Hotel',
    type: 'hotel',
    neighborhood: 'City Centre',
    city: 'agadir',
    description: 'Nestled in lush gardens, this hotel offers a serene oasis just steps away from Agadir\'s sandy beaches and shopping districts.',
    pricePerNight: 90,
    lifestyle: 'balanced',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'breakfast'],
    googleRating: 4.0,
    googleReviewCount: 3800,
    tripadvisorRating: 3.7,
    tripadvisorReviewCount: 950,
    bookingRating: 3.3,
    bookingReviewCount: 7614,
    hotelguruRating: 4.0,
    hotelguruReviewCount: 700,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: false,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: false,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 4,
    groupTypes: ['solo', 'couple', 'family', 'business-friendly', 'seniors'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Stroll through the extensive manicured gardens for a relaxing afternoon.',
    vibeTags: ['Garden', 'Peaceful', 'Value', 'Central'],
    locationSummary: "Sonaba & Tourist Zone",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.418648,-9.601664',
    address: 'Boulevard Mohamed V, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'A garden oasis hotel popular for its peaceful setting.',
    neighborhoodOverview: 'Central but set back in gardens.',
    hiddenFeesNotice: 'City tax not included.',
    pros: ['Beautiful gardens', 'Good value', 'Close to beach'],
    cons: ['Some rooms dated', 'Average food'],

    trustScores: {
      cleanliness: 8.0,
      safety: 8.3,
      staff: 8.1,
      value: 8.7,
      comfort: 7.8,
      location: 8.9
    },
    logistics: {
      checkIn: '14:00 - 23:59',
      checkOut: 'Before 11:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212528843326'
    },
    roomFeatures: ['ac', 'heating', 'garden-view'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: '350m', time: '5 min walk', icon: 'beach' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://www.odysseepark.com',
    instagramHandle: '',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Serene garden setting.',
      couples: 'Peaceful escape.',
      families: 'Space in gardens.',
      business: 'Quiet and convenient.',
      nomad: 'Garden workspace.'
    },
    coordinates: {
      lat: 30.599145,
      lng: -9.497195
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-16',
    name: 'Dar Maktoub',
    type: 'guesthouse',
    neighborhood: 'Bensergao',
    city: 'agadir',
    description: 'Charming guesthouse overlooking a nature reserve and golf courses, featuring a large garden and traditional Moroccan decor.',
    pricePerNight: 110,
    lifestyle: 'balanced',
    amenities: ['wifi', 'pool', 'ac', 'breakfast', 'garden'],
    googleRating: 4.7,
    googleReviewCount: 420,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 180,
    bookingRating: 4.3,
    bookingReviewCount: 423,
    hotelguruRating: 4.7,
    hotelguruReviewCount: 180,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: true,
    hasEnsuite: true,
    hasRestaurant: false,
    hasBar: false,
    hasGym: false,
    hasElevator: false,
    hasLaundryService: true,
    hasRoomService: false,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['solo', 'couple', 'family', 'friends', 'business-friendly', 'seniors'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Perfect for golf enthusiasts, with nearby access to premier courses.',
    vibeTags: ['Golf', 'Garden', 'Peaceful', 'Authentic'],
    locationSummary: "Sonaba & Tourist Zone",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.35853,-9.56599',
    address: 'Bensergao, BP 155, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'A charming family-run guesthouse in Bensergao with stunning views.',
    neighborhoodOverview: 'Quiet golf area, requires taxi for beach and city.',
    hiddenFeesNotice: 'None.',
    pros: ['Beautiful gardens', 'Peaceful location', 'Excellent breakfast'],
    cons: ['Far from beach', 'Limited public transport'],

    trustScores: {
      cleanliness: 9.3,
      safety: 9.1,
      staff: 9.4,
      value: 8.9,
      comfort: 9.0,
      location: 7.8
    },
    logistics: {
      checkIn: '14:00 - 22:00',
      checkOut: 'Before 11:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212661376344'
    },
    roomFeatures: ['ac', 'heating', 'garden-view'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Golf Course', distance: '300m', time: '4 min walk', icon: 'golf' },
      { label: 'Beach', distance: '6km', time: '12 min drive', icon: 'beach' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://darmaktoub.com',
    instagramHandle: '',
    isWheelchairAccessible: false,

    reviewHighlights: {
      solo: 'Peaceful retreat for reflection.',
      couples: 'Romantic garden setting.',
      families: 'Great space and nature.',
      business: 'Quiet and inspiring.',
      nomad: 'Nature-focused workspace.'
    },
    coordinates: {
      lat: 30.420516,
      lng: -9.583853
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-17',
    name: 'Paradis Plage Surf Yoga & Spa Resort',
    type: 'hotel',
    neighborhood: 'Imi Ouaddar',
    city: 'agadir',
    description: 'Eco-friendly beachfront resort dedicated to surfing, yoga, and wellness, located north of Agadir.',
    pricePerNight: 180,
    lifestyle: 'premium',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'yoga', 'surf', 'beach'],
    googleRating: 4.6,
    googleReviewCount: 3700,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 1332,
    bookingRating: 4.3,
    bookingReviewCount: 1850,
    hotelguruRating: 4.6,
    hotelguruReviewCount: 1332,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: true,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: true,
    hasElevator: false,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['solo', 'couple', 'friends', 'business-friendly'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Participate in the sunset yoga sessions facing the ocean for an unforgettable experience.',
    vibeTags: ['Surf', 'Yoga', 'Eco', 'Wellness', 'Beachfront', 'Private Beach', 'Kids Club'],
    locationSummary: "Sonaba & Tourist Zone",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.5844651,-9.75736141',
    address: "Km 26 Route d'Essaouira, Imi Ouaddar, Agadir 80000, Morocco",
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'An eco-resort focused on surf, yoga and wellness north of Agadir.',
    neighborhoodOverview: 'Remote beachfront area north of Agadir.',
    hiddenFeesNotice: 'City tax not included.',
    pros: ['Beachfront yoga and surf', 'Eco-friendly', 'Great wellness programs'],
    cons: ['Quite far from Agadir city', 'Higher prices'],

    trustScores: {
      cleanliness: 9.1,
      safety: 9.0,
      staff: 9.0,
      value: 8.3,
      comfort: 9.0,
      location: 8.8
    },
    logistics: {
      checkIn: '14:00 - 22:00',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212528200382'
    },
    roomFeatures: ['ac', 'heating', 'eco-friendly'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: 'Direct', time: '1 min', icon: 'beach' },
      { label: 'Taghazout', distance: '5km', time: '8 min drive', icon: 'surf' }
    ],
    cancellationPolicy: 'Free cancellation up to 48h before check-in',
    childPolicy: 'Children welcome - family friendly',
    officialWebsite: 'https://paradisplage.com',
    instagramHandle: '@paradisplage',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Ideal for surfers and yogis.',
      couples: 'Romantic beach wellness.',
      families: 'Good for active families.',
      business: 'Peaceful remote work.',
      nomad: 'Wellness + work balance.'
    },
    coordinates: {
      lat: 30.583867,
      lng: -9.756632
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-18',
    name: 'Blue Waves Surf House',
    type: 'hostel',
    neighborhood: 'Anza',
    city: 'agadir',
    description: 'Vibrant and welcoming hostel steps from the famous Anza surf breaks, ideal for backpackers and wave seekers.',
    pricePerNight: 25,
    lifestyle: 'lean',
    amenities: ['wifi', 'breakfast', 'surf', 'rooftop', 'shared kitchen'],
    googleRating: 4.7,
    googleReviewCount: 350,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 235,
    bookingRating: 4.4,
    bookingReviewCount: 280,
    hotelguruRating: 4.5,
    hotelguruReviewCount: 235,

    hasPool: false,
    hasBreakfast: true,
    hasAC: false,
    hasHeating: false,
    hasRooftop: true,
    hasEnsuite: false,
    hasRestaurant: false,
    hasBar: false,
    hasGym: false,
    hasElevator: false,
    hasLaundryService: true,
    hasRoomService: false,
    petFriendly: false,
    taxesIncluded: true,
    freeCancellation: true,
    kidsStayFree: false,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 4,
    groupTypes: ['solo', 'couple', 'friends', 'business-friendly'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'The rooftop terrace is the perfect place to check the morning surf conditions.',
    vibeTags: ['Surf', 'Backpacker', 'Vibrant', 'Budget'],
    locationSummary: "Sonaba & Tourist Zone",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.447465,-9.659922',
    address: 'Project Social 9, Anza, Agadir 80000, Morocco',
    paymentMethods: ['cash', 'card'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'A lively surf hostel in Anza with great community vibe.',
    neighborhoodOverview: 'Anza fishing village with authentic surf culture.',
    hiddenFeesNotice: 'None - taxes included.',
    pros: ['Excellent surf access', 'Great value', 'Friendly vibe'],
    cons: ['Shared bathrooms', 'Basic rooms'],

    trustScores: {
      cleanliness: 8.7,
      safety: 8.4,
      staff: 9.1,
      value: 9.5,
      comfort: 7.5,
      location: 9.2
    },
    logistics: {
      checkIn: '14:00 - 21:00',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212666121252'
    },
    roomFeatures: ['rooftop-access', 'shared-kitchen'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Anza Beach', distance: '50m', time: '1 min walk', icon: 'beach' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Not ideal for families',
    officialWebsite: 'https://bluewavessurfhouse.com',
    instagramHandle: '@bluewavessurfhouse',
    isWheelchairAccessible: false,

    reviewHighlights: {
      solo: 'Perfect for solo surfers.',
      couples: 'Romantic budget surf trip.',
      families: 'Not ideal for families.',
      business: 'Not suitable.',
      nomad: 'Surf community.'
    },
    coordinates: {
      lat: 30.546191,
      lng: -9.708367
    },
    tags: ["dorm"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-19',
    name: 'Agadir Beach Club',
    type: 'hotel',
    neighborhood: 'Secteur Touristique',
    city: 'agadir',
    description: 'Sprawling beachfront resort offering direct access to the promenade, lush palm gardens, and multiple dining options.',
    pricePerNight: 115,
    lifestyle: 'balanced',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'beach', 'tennis', 'private-beach', 'nightclub', 'all-inclusive'],
    googleRating: 4.0,
    googleReviewCount: 5200,
    tripadvisorRating: 3.7,
    tripadvisorReviewCount: 2900,
    bookingRating: 3.7,
    bookingReviewCount: 5208,
    hotelguruRating: 4.0,
    hotelguruReviewCount: 1800,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: false,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: false,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 4,
    groupTypes: ['solo', 'couple', 'family', 'friends', 'business-friendly'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Great value for a true beachfront location in Agadir.',
    vibeTags: ['Beachfront', 'Resort', 'Value', 'Garden', 'Private Beach', 'Nightclub', 'All-Inclusive'],
    locationSummary: "Sonaba & Tourist Zone",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.410019,-9.601746',
    address: 'Boulevard 20 Août, Secteur Touristique, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'A classic beachfront resort with great gardens and activities.',
    neighborhoodOverview: 'On the main beach strip.',
    hiddenFeesNotice: 'City tax not included.',
    pros: ['Direct beach access', 'Large gardens', 'Good value'],
    cons: ['Older property', 'Can be crowded'],

    trustScores: {
      cleanliness: 7.9,
      safety: 8.3,
      staff: 8.0,
      value: 8.6,
      comfort: 7.8,
      location: 9.4
    },
    logistics: {
      checkIn: '14:00 - 22:00',
      checkOut: 'Before 11:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212528844343'
    },
    roomFeatures: ['ac', 'heating'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Beach', distance: 'Direct', time: '1 min', icon: 'beach' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://www.beachclub-agadir.com',
    instagramHandle: '',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Great beach location.',
      couples: 'Romantic beach walks.',
      families: 'Good facilities.',
      business: 'Convenient location.',
      nomad: 'Beachside working.'
    },
    coordinates: {
      lat: 30.410423,
      lng: -9.601297
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-20',
    name: 'Riad des Golfs',
    type: 'riad',
    neighborhood: 'Bensergao',
    city: 'agadir',
    description: 'Elegant and peaceful riad nestled among eucalyptus trees, offering a luxurious retreat near Agadir\'s main golf courses.',
    pricePerNight: 140,
    lifestyle: 'premium',
    amenities: ['wifi', 'pool', 'ac', 'breakfast', 'restaurant'],
    googleRating: 4.8,
    googleReviewCount: 120,
    tripadvisorRating: 4.8,
    tripadvisorReviewCount: 80,
    bookingRating: 4.5,
    bookingReviewCount: 110,
    hotelguruRating: 4.8,
    hotelguruReviewCount: 80,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: true,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: false,
    hasGym: false,
    hasElevator: false,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    // sleep-location quiz question tag
    locationFeel: "ville-nouvelle",
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['solo', 'couple', 'business-friendly', 'seniors'],
    // googlePlaceId: "PLACE_ID_HERE",

    tip: 'Enjoy a personalized cooking class offered by the riad\'s chef.',
    vibeTags: ['Golf', 'Luxury', 'Peaceful', 'Garden'],
    locationSummary: "Sonaba & Tourist Zone",
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.369605,-9.563207',
    address: 'Bensergao, Chemin des Golfs, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'A luxury riad near the golf courses in a eucalyptus forest setting.',
    neighborhoodOverview: 'Eucalyptus forest setting near golf courses.',
    hiddenFeesNotice: 'None.',
    pros: ['Luxurious and peaceful', 'Great golf proximity', 'Excellent service'],
    cons: ['Far from beach (5km)', 'Limited nightlife'],

    trustScores: {
      cleanliness: 9.5,
      safety: 9.4,
      staff: 9.6,
      value: 8.7,
      comfort: 9.3,
      location: 8.0
    },
    logistics: {
      checkIn: '14:00 - 23:00',
      checkOut: 'Before 11:00',
      luggageStorage: 'Free',
      parking: 'Free',
      contact: '+212528337033'
    },
    roomFeatures: ['ac', 'heating', 'garden-view'],
    roomTypes: [
    ],
    neighborhoodDistances: [
      { label: 'Golf Course', distance: '200m', time: '3 min walk', icon: 'golf' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h before check-in',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://www.riaddesgolfs.com',
    instagramHandle: '@riaddesgolfs',
    isWheelchairAccessible: false,

    reviewHighlights: {
      solo: 'Luxury quiet retreat.',
      couples: 'Romantic golf escape.',
      families: 'Private and peaceful.',
      business: 'Perfect for golfing executives.',
      nomad: 'Exclusive peaceful workspace.'
    },
    coordinates: {
      lat: 30.407955,
      lng: -9.600393
    },
    tags: ["family-favorite"],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-21',
    name: 'Mabrouk Hotel and Suites',
    type: 'hotel',
    neighborhood: 'City Centre',
    city: 'agadir',
    description: '4-star adults-only boutique hotel and resort on Boulevard du 20 Août, roughly 600 meters from Agadir Beach, featuring 40 rooms and suites, an outdoor pool, shisha terrace, lounge bar, and international restaurant.',
    pricePerNight: 105,
    lifestyle: 'balanced',
    amenities: ['wifi', 'pool', 'ac', 'restaurant', 'bar', 'breakfast', 'terrace', 'room-service'],
    googleRating: 4.1,
    googleReviewCount: 480,
    bookingRating: 3.7,
    bookingReviewCount: 588,
    hotelguruRating: 3.7,
    hotelguruReviewCount: 588,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: false,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: false,

    nearMedina: false,
    nearBeach: true,
    locationFeel: 'ville-nouvelle',
    nearMosque: false,
    safetyLevel: 4,
    groupTypes: ['solo', 'couple', 'friends', 'business-friendly'],

    tip: 'Adults-only property steps from the promenade and Royal Palace; ask for a pool-facing Deluxe Suite for quiet balcony lounging.',
    vibeTags: ['Adults-Only', 'Central', 'Pool Bar', 'Lounge', '4-Star'],
    locationSummary: 'Boulevard du 20 Août, Agadir Bay',
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.4184,-9.5982/@30.4184,-9.5982,17z',
    address: 'Boulevard du 20 Août, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'An intimate 40-room adults-only hotel along Boulevard du 20 Août blending easy beach access with poolside dining and evening lounge energy.',
    neighborhoodOverview: 'Central Agadir Bay location roughly 600 meters from the beach and close to cafes, restaurants, and the promenade.',
    hiddenFeesNotice: 'City tax not included in base rate.',
    pros: ['Adults-only atmosphere', '600m walk to Agadir Beach', 'On-site restaurant, pool bar & shisha lounge'],
    cons: ['No fitness center', 'Lively boulevard outside at night'],

    trustScores: {
      cleanliness: 7.9,
      safety: 8.6,
      staff: 8.2,
      value: 8.0,
      comfort: 7.8,
      location: 8.9
    },
    logistics: {
      checkIn: '15:00 - 00:00',
      checkOut: '07:00 - 12:00',
      luggageStorage: 'Free',
      parking: 'Nearby parking available',
      contact: '+212528824020'
    },
    roomFeatures: ['ac', 'minibar', 'balcony', 'flat-screen-tv'],
    roomTypes: [
      { name: 'Standard Double Room', view: 'City or garden view', price: 105, beds: '1 Double bed', size: '24 sqm', available: true },
      { name: 'Deluxe Suite', view: 'Pool view', price: 145, beds: '1 King bed', size: '40 sqm', available: true }
    ],
    neighborhoodDistances: [
      { label: 'Agadir Beach', distance: '600m', time: '7 min walk', icon: 'beach' },
      { label: 'Agadir Marina', distance: '1.8km', time: '5 min drive', icon: 'marina' }
    ],
    cancellationPolicy: 'Free cancellation options available up to 24h–48h before check-in',
    childPolicy: 'Adults-only property (18+)',
    officialWebsite: 'https://hotelmabrouk.net',
    instagramHandle: '@mabroukhotel',
    isWheelchairAccessible: false,

    reviewHighlights: {
      solo: 'Great central adults-only base close to the beach.',
      couples: 'Relaxing poolside mornings and cozy suites.',
      business: 'Convenient central location on Boulevard du 20 Août.',
      nomad: 'Reliable Wi-Fi and coffee bar for daytime work.'
    },
    coordinates: {
      lat: 30.4184,
      lng: -9.5982
    },
    foodStyles: ['Moroccan', 'French & Italian', 'Lounge & Shisha Bar'],
    servesAlcohol: true,
    bestDishes: [
      'Traditional Moroccan Tagines',
      'Grilled Steaks & Fresh Fish',
      'Caesar Salad & Pastas',
      'Signature Mojitos & Pastries',
    ],
    menu: {
      currency: 'MAD',
      lastUpdated: 'Verified On-Site Dining Overview',
      serviceChargeIncluded: true,
      sections: [
        {
          id: 'mabrouk-breakfast',
          title: 'Daily Buffet Breakfast',
          titleEn: 'Breakfast Buffet',
          description: 'Served daily with continental bakery items, Moroccan specialties, juices, and coffee',
          items: [
            { id: 'mabrouk-bf-buffet', name: 'Continental & Moroccan Breakfast Spread (Pastries, Eggs, Juices, Coffee)', price: 0, portionNotes: 'Available with B&B rate or buffet charge at reception', dietary: ['vegetarian', 'halal'] },
          ],
        },
        {
          id: 'mabrouk-restaurant',
          title: 'On-Site Restaurant — Moroccan, French & Italian',
          titleEn: 'Main Restaurant',
          description: 'Sit-down lunch and dinner service pairing local Moroccan classics with European favorites',
          items: [
            { id: 'mabrouk-caesar-soups', name: 'Caesar Salad, Moroccan Harira & Seasonal Soups', price: 0, portionNotes: 'À la carte pricing on site', dietary: ['halal'] },
            { id: 'mabrouk-tagines', name: 'Traditional Moroccan Tagines & Couscous', price: 0, isSignature: true, portionNotes: 'À la carte pricing on site', dietary: ['halal'] },
            { id: 'mabrouk-grill-fish', name: 'Grilled Steaks & Fresh Atlantic Fish', price: 0, isSignature: true, portionNotes: 'À la carte pricing on site', dietary: ['halal'] },
            { id: 'mabrouk-pizza-pasta', name: 'Artisanal Pizzas, Pasta & Club Sandwiches', price: 0, portionNotes: 'À la carte pricing on site', dietary: ['vegetarian'] },
          ],
        },
        {
          id: 'mabrouk-lounge',
          title: 'Poolside Snack Bar, Coffee Bar & Shisha Lounge',
          titleEn: 'Pool & Lounge Bar',
          description: 'Refreshing drinks, local pastries, light snacks, and evening cocktails by the outdoor pool',
          items: [
            { id: 'mabrouk-coffee-pastries', name: 'Espresso, Moroccan Mint Tea & Fresh Local Pastries', price: 0, portionNotes: 'Available throughout the day', dietary: ['vegetarian'] },
            { id: 'mabrouk-cocktails-shisha', name: 'Classic Mojitos, Cocktails, Light Snacks & Terrace Shisha', price: 0, portionNotes: 'Served poolside and in lounge bar' },
          ],
        },
      ],
    },
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-22',
    name: 'Dominium Palace Agadir',
    type: 'hotel',
    neighborhood: 'Founty',
    city: 'agadir',
    description: '5-star luxury palace hotel in Agadir\'s Founty district near the Royal Palace, featuring fine dining at La Table Du Monde, Café Dominium, Les Terrasses Du Palace, outdoor pools, and spa.',
    pricePerNight: 145,
    lifestyle: 'premium',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'restaurant', 'bar', 'breakfast', 'parking', 'room-service'],
    googleRating: 4.4,
    googleReviewCount: 720,
    bookingRating: 4.4,
    bookingReviewCount: 740,
    hotelguruRating: 4.4,
    hotelguruReviewCount: 740,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: true,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    nearBeach: true,
    locationFeel: 'ville-nouvelle',
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['couple', 'family', 'business-friendly', 'seniors'],

    tip: 'Drop by Café Dominium for afternoon pastries and crêpes on the terrace, or reserve a table at La Table Du Monde for evening fusion dining.',
    vibeTags: ['5-Star', 'Palace', 'Fine Dining', 'Founty', 'Pool', 'Café'],
    locationSummary: 'Founty Tourist Sector, near Royal Palace',
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.406094,-9.594199/@30.406094,-9.594199,17z',
    address: 'Boulevard du 20 Août, Founty, Agadir 80010, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'Flagship Agadir address of the Dominium Hotels group, uniting grand palace hospitality with multiple culinary spaces in the peaceful Founty quarter.',
    neighborhoodOverview: 'Upscale Founty tourist sector roughly 1.3 km from Agadir Beach, close to the Royal Palace, Souk El Had, and Amazigh Culture Museum.',
    hiddenFeesNotice: 'City tax not included.',
    pros: ['Multiple signature dining & café venues', 'High staff & cleanliness scores (8.7+/10)', 'Spacious palace suites'],
    cons: ['15-minute walk to the shoreline', 'Formal resort atmosphere'],

    trustScores: {
      cleanliness: 8.9,
      safety: 9.2,
      staff: 8.9,
      value: 8.5,
      comfort: 8.8,
      location: 8.6
    },
    logistics: {
      checkIn: '15:00 - 00:00',
      checkOut: '11:00 - 12:00',
      luggageStorage: 'Free',
      parking: 'Free on-site parking',
      contact: '+212528219621'
    },
    roomFeatures: ['ac', 'heating', 'balcony', 'safe', 'seating-area'],
    roomTypes: [
      { name: 'Standard Luxury Room', view: 'Pool or garden view', price: 145, beds: '1 King or 2 Twin beds', size: '32 sqm', available: true },
      { name: 'Deluxe Family Suite', view: 'Pool view', price: 210, beds: '1 King + Sofa bed', size: '55 sqm', available: true }
    ],
    neighborhoodDistances: [
      { label: 'Agadir Beach', distance: '1.3km', time: '15 min walk', icon: 'beach' },
      { label: 'Souk El Had', distance: '2.2km', time: '6 min drive', icon: 'market' }
    ],
    cancellationPolicy: 'Free cancellation options available up to 48h before check-in',
    childPolicy: 'Children welcome; dedicated kids menu available in dining outlets',
    officialWebsite: 'https://www.dominiumpalace.com',
    instagramHandle: '@dominiumhotels',
    isWheelchairAccessible: true,

    reviewHighlights: {
      couples: 'Elegant palace setting and sunset drinks at Les Terrasses.',
      families: 'Spacious rooms and kid-friendly dining choices.',
      business: 'Refined lounges and attentive concierge.',
      nomad: 'Relaxed indoor and outdoor seating at Café Dominium.'
    },
    coordinates: {
      lat: 30.406094,
      lng: -9.594199
    },
    foodStyles: ['Moroccan & International Fusion', 'Fine Dining', 'Café & Patisserie'],
    servesAlcohol: true,
    bestDishes: [
      'La Table Du Monde Fusion Mains',
      'Café Dominium Pastries & Crêpes',
      'Grilled Atlantic Seafood & Steaks',
      'Patio Pool Signature Mocktails & Cocktails',
    ],
    menu: {
      currency: 'MAD',
      lastUpdated: 'Verified Property Outlets & Price Guide',
      serviceChargeIncluded: true,
      sections: [
        {
          id: 'dominium-table-du-monde',
          title: 'La Table Du Monde — Fine Dining & Breakfast Buffet',
          titleEn: 'La Table Du Monde',
          description: 'Flagship gourmet restaurant showcasing Moroccan ingredients, Atlantic seafood, fine cuts, and international fusion',
          items: [
            { id: 'dom-breakfast', name: 'Palace Gourmet Breakfast Buffet', price: 0, portionNotes: 'Included in B&B stays or daily breakfast supplement', dietary: ['vegetarian', 'halal'] },
            { id: 'dom-fusion-mains', name: 'Moroccan & International Fusion Mains (Atlantic Seafood & Grilled Meats)', price: 180, isSignature: true, portionNotes: 'Average casual/dinner meal ~150–200 MAD per person', dietary: ['halal'] },
            { id: 'dom-kids-menu', name: 'Dedicated Kids Menu (Pasta, Mini Burgers & Crispy Chicken)', price: 0, portionNotes: 'Available on site', dietary: ['halal'] },
          ],
        },
        {
          id: 'dominium-cafe',
          title: 'Café Dominium — Coffees, Pastries, Crêpes & Light Bites',
          titleEn: 'Café Dominium',
          description: 'Warm indoor and terrace café for breakfast sets, afternoon treats, pizzas, and pastas (~150–200 MAD meal average)',
          items: [
            { id: 'dom-coffee-pastries', name: 'Artisanal Coffees, Fresh Juices, Crêpes, Waffles & Pastries', price: 0, isSignature: true, portionNotes: 'À la carte café pricing on site', dietary: ['vegetarian'] },
            { id: 'dom-cafe-mains', name: 'Pizzas, Fresh Pastas & Grilled Light Mains', price: 165, portionNotes: 'Typical casual meal 150–200 MAD per person', dietary: ['halal'] },
          ],
        },
        {
          id: 'dominium-terrasses-pool',
          title: 'Les Terrasses Du Palace & Patio Pool Bar',
          titleEn: 'Terrasses & Pool Bar',
          description: 'Dual sunset terraces and poolside mixology bar serving mocktails, cocktails, and refreshments',
          items: [
            { id: 'dom-mixology', name: 'Specialty Cocktails, Mocktails & Fresh Smoothies', price: 0, portionNotes: 'À la carte poolside bar pricing' },
          ],
        },
      ],
    },
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-23',
    name: 'Hotel Prestige Agadir Boutique & SPA',
    type: 'hotel',
    neighborhood: 'Secteur Balnéaire',
    city: 'agadir',
    description: 'Boutique spa hotel in the heart of Agadir\'s Secteur Balnéaire (Parcelle 30B, Avenue des Dunes), just a 7-minute walk from the beach, with pool, spa, lounge, and à la carte Moroccan-international dining.',
    pricePerNight: 95,
    lifestyle: 'balanced',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'restaurant', 'bar', 'breakfast', 'room-service'],
    googleRating: 4.4,
    googleReviewCount: 320,
    bookingRating: 3.9,
    bookingReviewCount: 250,
    hotelguruRating: 4.0,
    hotelguruReviewCount: 250,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: false,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    nearBeach: true,
    locationFeel: 'ville-nouvelle',
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['couple', 'family', 'friends', 'business-friendly'],

    tip: 'Walk 7 minutes straight to Agadir Beach or unwind in the courtyard pool and spa after exploring the Corniche.',
    vibeTags: ['Boutique', 'Spa', 'Beach Proximity', 'Lounge', 'Secteur Balnéaire'],
    locationSummary: 'Avenue des Dunes, Secteur Balnéaire',
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.417086,-9.603012/@30.417086,-9.603012,17z',
    address: 'Avenue des Dunes, Secteur Balnéaire Touristique, Parcelle 30B, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'Formerly known as Khalij Agadir, now styled as Hotel Prestige Agadir Boutique & SPA offering suites, spa rituals, and relaxed à la carte dining steps from the sea.',
    neighborhoodOverview: 'Prime Secteur Balnéaire location near Avenue des Dunes, Casino Le Mirage, and a 7-minute stroll to the beachfront.',
    hiddenFeesNotice: 'Outside food and beverages are restricted in hotel dining areas; city tax extra.',
    pros: ['7-minute walk to Agadir Beach', 'Large Junior & Royale Suites', 'On-site spa, pool, and room service'],
    cons: ['Smaller boutique scale than mega-resorts', 'Menus rotate seasonally on site'],

    trustScores: {
      cleanliness: 8.4,
      safety: 8.8,
      staff: 8.6,
      value: 8.5,
      comfort: 8.4,
      location: 9.0
    },
    logistics: {
      checkIn: '14:00 - 23:59',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'On-site parking',
      contact: '+212528846184'
    },
    roomFeatures: ['ac', 'balcony', 'living-area', 'bathrobes', 'tv'],
    roomTypes: [
      { name: 'Superior Room (Double or Twin)', view: 'Garden or pool view', price: 95, beds: '1 Double or 2 Twin beds', size: '30 sqm', available: true },
      { name: 'Junior Suite', view: 'Pool view', price: 135, beds: '1 King bed', size: '45 sqm', available: true },
      { name: 'Royale Suite (Two Bedrooms)', view: 'Pool & terrace view', price: 195, beds: '2 Double beds', size: '75 sqm', available: true }
    ],
    neighborhoodDistances: [
      { label: 'Agadir Beach', distance: '500m', time: '7 min walk', icon: 'beach' },
      { label: 'Agadir Marina', distance: '2.0km', time: '6 min drive', icon: 'marina' }
    ],
    cancellationPolicy: 'Free cancellation options available before check-in depending on rate',
    childPolicy: 'Children welcome',
    officialWebsite: 'https://prestigeagadir.com',
    isWheelchairAccessible: true,

    reviewHighlights: {
      couples: 'Intimate boutique suites and relaxing spa treatments.',
      families: 'Spacious Two-Bedroom Royale Suites near the sand.',
      business: 'Calm lounge atmosphere in the tourist district.'
    },
    coordinates: {
      lat: 30.417086,
      lng: -9.603012
    },
    foodStyles: ['Moroccan', 'Mediterranean & International', 'Lounge & Snacks'],
    servesAlcohol: true,
    bestDishes: [
      'À La Carte Moroccan Tagines',
      'American & Buffet Breakfast',
      'Mediterranean Grilled Mains',
      'Lounge Snacks & Tea Service',
    ],
    menu: {
      currency: 'MAD',
      lastUpdated: 'Verified Property Dining & Price Range',
      serviceChargeIncluded: true,
      sections: [
        {
          id: 'prestige-breakfast',
          title: 'Daily Buffet & American Breakfast',
          titleEn: 'Breakfast Service',
          description: 'Served each morning with freshly brewed coffee, seasonal fruit, and baked pastries',
          items: [
            { id: 'prestige-bf', name: 'American & Continental Buffet Breakfast (Fresh Fruits, Pastries, Eggs, Coffee)', price: 0, portionNotes: 'Included on B&B rates or half-board', dietary: ['vegetarian', 'halal'] },
          ],
        },
        {
          id: 'prestige-alacarte',
          title: 'À La Carte Restaurant — Moroccan & International',
          titleEn: 'À La Carte Dining',
          description: 'Seasonal chef specials pairing traditional Moroccan dishes with European and Mediterranean mains',
          items: [
            { id: 'prestige-moroccan', name: 'Traditional Moroccan Tagines & House Specials', price: 160, isSignature: true, portionNotes: 'Typical dining/lounge spend 100–250 MAD per person', dietary: ['halal'] },
            { id: 'prestige-mediterranean', name: 'Mediterranean & European Grill Selections', price: 180, portionNotes: 'Typical dining/lounge spend 100–250 MAD per person', dietary: ['halal'] },
          ],
        },
        {
          id: 'prestige-lounge-roomservice',
          title: 'Lounge Bar & Room Service',
          titleEn: 'Lounge & Room Service',
          description: 'Casual bites, refreshments, shisha lounge service, and in-room private dining',
          items: [
            { id: 'prestige-lounge-bites', name: 'Casual Lounge Snacks, Shisha & Fresh Drinks', price: 120, portionNotes: 'Average spend 100–250 MAD per person' },
            { id: 'prestige-room-service', name: 'In-Room Dining Selection', price: 0, portionNotes: 'Available during kitchen operating hours' },
          ],
        },
      ],
    },
    reviewsData: { sources: [], reviews: [] },
  },
  {
    id: 'a-sleep-24',
    name: 'Tildi Hotel & Spa',
    type: 'hotel',
    neighborhood: 'City Centre',
    city: 'agadir',
    description: 'Established 4-star hotel on Rue Hubert Giraud offering ~116 air-conditioned rooms with balconies, a swimming pool, spa, ocean-facing terrace, and Moroccan-international restaurant close to the beach and Agadir cable car.',
    pricePerNight: 55,
    lifestyle: 'lean',
    amenities: ['wifi', 'pool', 'ac', 'spa', 'restaurant', 'bar', 'breakfast', 'balcony'],
    googleRating: 4.0,
    googleReviewCount: 1750,
    bookingRating: 4.1,
    bookingReviewCount: 1700,
    hotelguruRating: 4.0,
    hotelguruReviewCount: 1700,

    hasPool: true,
    hasBreakfast: true,
    hasAC: true,
    hasHeating: true,
    hasRooftop: false,
    hasEnsuite: true,
    hasRestaurant: true,
    hasBar: true,
    hasGym: false,
    hasElevator: true,
    hasLaundryService: true,
    hasRoomService: true,
    petFriendly: false,
    taxesIncluded: false,
    freeCancellation: true,
    kidsStayFree: true,

    nearMedina: false,
    nearBeach: true,
    locationFeel: 'ville-nouvelle',
    nearMosque: false,
    safetyLevel: 5,
    groupTypes: ['solo', 'couple', 'family', 'friends', 'business-friendly', 'seniors'],

    tip: 'Ask for an upper-floor room with a partial ocean or Kasbah hillside view, and enjoy sunset drinks on the terrace overlooking the bay.',
    vibeTags: ['4-Star', 'Value', 'Central', 'Spa', 'Ocean-View Terrace', 'Halal Dining'],
    locationSummary: 'Ville Nouvelle, near Agadir Cable Car & Beach',
    availabilityText: 'Available tonight',
    googleMapsUrl: 'https://www.google.com/maps/place/30.423425,-9.606299/@30.423425,-9.606299,17z',
    address: 'Rue Hubert Giraud, Ville Nouvelle, Agadir 80000, Morocco',
    paymentMethods: ['card', 'cash'],
    languagesSpoken: ['Arabic', 'French', 'English'],

    customStory: 'Long-standing 4-star Agadir favorite sitting on elevated ground above the Corniche, prized for generous half-board dining, spa facilities, and strong value.',
    neighborhoodOverview: 'Central Ville Nouvelle location minutes from the beach, Valley of the Birds, Marina Agadir, and the Oufella cable car base.',
    hiddenFeesNotice: 'City tax payable on arrival.',
    pros: ['Strong value 4-star pricing (~$45–$60/night)', 'Helpful staff & welcoming pool terrace', 'Halal-certified Moroccan & international kitchen'],
    cons: ['Classic decor rather than ultra-modern', 'Gentle uphill walk returning from the beach'],

    trustScores: {
      cleanliness: 8.1,
      safety: 8.7,
      staff: 8.5,
      value: 8.7,
      comfort: 8.0,
      location: 8.6
    },
    logistics: {
      checkIn: '15:00 - 23:59',
      checkOut: 'Before 12:00',
      luggageStorage: 'Free',
      parking: 'Free parking nearby',
      contact: '+212528825998'
    },
    roomFeatures: ['ac', 'balcony', 'minibar', 'walk-in-shower', 'tv'],
    roomTypes: [
      { name: 'Standard Double / Twin Room', view: 'City or pool view', price: 55, beds: '1 Double or 2 Twin beds', size: '24 sqm', available: true },
      { name: 'Triple Room', view: 'Pool or partial sea view', price: 75, beds: '3 Single beds or 1 Double + 1 Single', size: '30 sqm', available: true }
    ],
    neighborhoodDistances: [
      { label: 'Agadir Beach', distance: '650m', time: '8 min walk', icon: 'beach' },
      { label: 'Agadir Oufella Cable Car', distance: '900m', time: '11 min walk', icon: 'landmark' }
    ],
    cancellationPolicy: 'Free cancellation up to 24h–48h before check-in',
    childPolicy: 'Children welcome',
    isWheelchairAccessible: true,

    reviewHighlights: {
      solo: 'Friendly reception and safe central location.',
      couples: 'Nice pool terrace overlooking the bay and Kasbah hill.',
      families: 'Convenient triple rooms and hearty breakfast buffet.',
      business: 'Easy access to downtown Agadir.'
    },
    coordinates: {
      lat: 30.423425,
      lng: -9.606299
    },
    foodStyles: ['Moroccan Halal', 'International Buffet & À La Carte', 'Poolside Bar'],
    servesAlcohol: true,
    bestDishes: [
      'Traditional Moroccan Tagines & Couscous',
      'Grilled Meats & Fresh Calamari',
      'Freshly Made Breakfast Omelettes & Pastries',
      'Moroccan Salads',
    ],
    menu: {
      currency: 'MAD',
      lastUpdated: 'Verified Hotel Dining & Price Guide',
      serviceChargeIncluded: true,
      sections: [
        {
          id: 'tildi-breakfast',
          title: 'Daily Continental & Buffet Breakfast',
          titleEn: 'Breakfast Buffet',
          description: 'Served daily with freshly prepared omelettes, cereals, yogurt, Moroccan pastries, and juices',
          items: [
            { id: 'tildi-bf-buffet', name: 'Hot Omelettes, Fresh Pastries, Yogurt, Cereals & Juices', price: 0, portionNotes: 'Included in B&B & Half-Board rates', dietary: ['vegetarian', 'halal'] },
          ],
        },
        {
          id: 'tildi-restaurant',
          title: 'Main Restaurant — Halal Moroccan & International Dining',
          titleEn: 'Main Restaurant',
          description: 'Rotating lunch/dinner buffets and à la carte selections (~120–250 MAD main course range)',
          items: [
            { id: 'tildi-salads', name: 'Traditional Moroccan Salads & Fresh Starters', price: 0, portionNotes: 'Half-board buffet or à la carte on site', dietary: ['vegetarian', 'halal'] },
            { id: 'tildi-tagines-couscous', name: 'Traditional Moroccan Tagines & Couscous (Halal)', price: 140, isSignature: true, portionNotes: 'Typical 4-star main range 120–250 MAD', dietary: ['halal'] },
            { id: 'tildi-grill-seafood', name: 'Grilled Meats & Atlantic Seafood (Calamari, Ceviche & Catch of the Day)', price: 180, portionNotes: 'Typical 4-star main range 120–250 MAD', dietary: ['halal'] },
          ],
        },
        {
          id: 'tildi-pool-terrace',
          title: 'Poolside Bar & Kasbah-View Terrace',
          titleEn: 'Pool Bar & Terrace',
          description: 'Drinks, coffee, tea, and casual refreshments with views toward the Atlantic and Agadir Kasbah',
          items: [
            { id: 'tildi-terrace-drinks', name: 'Coffees, Mint Tea, Fresh Juices & Bar Drinks', price: 0, portionNotes: 'Available at poolside bar' },
          ],
        },
      ],
    },
    reviewsData: { sources: [], reviews: [] },
  }
]