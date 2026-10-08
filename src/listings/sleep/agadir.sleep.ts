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
 *   groupTypes: ['solo', 'couple', 'family', 'friends', 'seniors', 'kids-friendly', 'large-groups', 'business-friendly'],
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
    tags: ["family-favorite", "5-star", "beachfront", "private-beach", "heated-pool"]
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
    tags: ["family-favorite"]
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
    tags: ["family-favorite"]
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
    tags: ["family-favorite"]
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
    tags: ["family-favorite"]
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
    tags: ["family-favorite", "heritage"]
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
    tags: ["family-favorite"]
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
    tags: ["family-favorite"]
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
    tags: ["family-favorite"]
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
    tags: ["family-favorite"]
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
    tags: ["family-favorite"]
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
    tags: ["dorm", "heritage"]
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
    tags: ["family-favorite"]
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
    officialWebsite: 'https://hotelargana.ma',
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
    tags: ["family-favorite"]
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
    tags: ["family-favorite"]
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
    tags: ["family-favorite"]
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
    tags: ["family-favorite"]
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
    tags: ["dorm"]
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
    tags: ["family-favorite"]
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
    tags: ["family-favorite"]
  }
]