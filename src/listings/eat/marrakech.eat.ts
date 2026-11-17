/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: MARRAKECH
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-marrakech-1' or 'eat-marrakech-restaurant')
 * - lifestyle:          'lean' | 'balanced' | 'premium'
 * - groupTypes:         'solo' | 'couple' | 'family' | 'friends' | 'large-groups' | 'seniors' | 'business-friendly' | 'nature-lover'
 * - mealTypes:          'breakfast' | 'lunch' | 'dinner' | 'late-night' | 'snack' | 'brunch' | 'drinks' | 'afternoon-tea' | 'flexible'
 * - experienceTypes:    'street-food' | 'fine-dining' | 'casual' | 'cafes-tea' | 'hidden-gem' | 'rooftop' | 'traditional' | 'market-stall'
 * - foodStyles:         'Moroccan' | 'Seafood' | 'Berber' | 'Tagine & Couscous' | 'French-Moroccan' | 'Italian' | 'Mediterranean' | 'Middle Eastern' | 'Cafe & Pastry' | 'Grill & BBQ' | 'Vegetarian/Vegan' | 'International'
 * - cuisineTags:        'moroccan-traditional' | 'international' | 'cafe-pastry' | 'seafood'
 * - paymentMethods:     'cash' | 'credit_card' | 'visa' | 'mastercard' | 'apple_pay' | 'google_pay'
 * - reservationMethod:  'whatsapp' | 'phone' | 'website' | 'walk-in' | 'email'
 * - closedDays:         'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
 * - seatingTypes:       'indoor' | 'outdoor' | 'rooftop' | 'terrace' | 'courtyard' | 'street-side'
 * - alcoholPolicy:      'serves-alcohol' | 'dry'
 * - halalStatus:        'likely-halal-food' | 'halal-certified' | 'unknown' | 'non-halal'
 * - verificationStatus: 'verified' | 'unverified' | 'possibly-closed' | 'wrong-city'
 * - isTemporarilyHidden: boolean (true when temporarily closed or unverified/wrong-city)
 * - ramadanFriendly:    'serves-lunch' | 'special-ftour' | 'closed'
 * - crowdLevel:         'quiet' | 'balanced' | 'bustling'
 * - badge:              'local' | 'splurge' | 'hidden-gem' | 'local-favorite' | 'tourist-trap'
 * - archetypeAffinity:  'luxury' | 'first-timer' | 'culture' | 'nomad' | 'adventure' | 'budget'
 * =========================================================================
 */

import type { EatListing } from '../types';

export const marrakechEat: EatListing[] = [
  {
    id: "e-marrakech-1",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Mediterranean", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["botanical-courtyard", "riad", "shaded"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "dinner",
        "dry",
        "live-music",
        "medina",
        "pastilla",
        "riad",
        "sunset",
        "tanjia",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Jardin",
      neighborhood: "Mouassine",
      description: "A beautifully restored 16th-century riad transformed into a lush green garden oasis in Mouassine. Serves a lovely mix of classic Moroccan dishes and light international fare in a serene, plant-filled courtyard.",
      tip: "Strictly dry (no alcohol served). Courtyard is completely shaded and cool, making it ideal to escape midday heat in the souks.",
      badge: "local-favorite",
      bestDishes: [
        "Beef Tanjia Marrakchia",
        "Chicken Pastilla with Cherries",
        "Saffron Crème Brûlée"
      ],
      menu: {
        currency: 'MAD',
        lastUpdated: 'October 2026',
        serviceChargeIncluded: true,
        sections: [
          {
            id: 'starters',
            title: 'Moroccan Mezze & Fresh Starters',
            description: 'Served with oven-warm Moroccan khobz bread and virgin olive oil',
            items: [
              {
                id: 'jardin-m-1',
                name: 'Moroccan Cooked Salad Trio',
                localName: 'ثلاثية السلطات المغربية',
                description: 'Fire-roasted Zaalouk (eggplant), sweet Taktouka (bell peppers & tomato), and cinnamon-glazed spiced carrots.',
                price: 75,
                dietary: ['vegetarian', 'vegan', 'halal'],
                portionNotes: 'Ideal for 2 to share'
              },
              {
                id: 'jardin-m-2',
                name: 'Velvety Harira Soup with Dates',
                localName: 'حريرة مغربية مع التمر والشباكية',
                description: 'Traditional slow-simmered tomato, lentil, and chickpea soup perfumed with fresh celery and ginger, served with Medjool dates.',
                price: 55,
                dietary: ['vegetarian', 'halal']
              },
              {
                id: 'jardin-m-3',
                name: 'Crispy Goat Cheese & Herb Briouates',
                localName: 'بريوات بجبن الماعز والأعشاب',
                description: 'Crisp hand-folded warqa pastry parcels filled with creamy Atlas mountain goat cheese, fresh thyme, and blossom honey.',
                price: 80,
                dietary: ['vegetarian', 'halal']
              }
            ]
          },
          {
            id: 'mains',
            title: 'Imperial Tagines & Signature Slow Roasts',
            description: 'Cooked traditionally over low embers to intensify aroma and tenderness',
            items: [
              {
                id: 'jardin-m-4',
                name: 'Beef Tanjia Marrakchia',
                localName: 'طنجية مراكشية تقليدية باللحم البقري',
                description: 'Marrakech’s legendary specialty: prime beef braised for 7 hours in a terracotta amphora with preserved Beldi lemons, cumin, and smen.',
                price: 150,
                isSignature: true,
                dietary: ['halal'],
                portionNotes: 'The definitive Marrakech culinary experience'
              },
              {
                id: 'jardin-m-5',
                name: 'Chicken Pastilla with Morello Cherries',
                localName: 'بسطيلة الدجاج بالكرز واللوز',
                description: 'Crisp warqa pastry layers filled with tender saffron shredded chicken, crunchy roasted almonds, cinnamon sugar, and sour cherry reduction.',
                price: 130,
                isSignature: true,
                dietary: ['halal']
              },
              {
                id: 'jardin-m-6',
                name: 'Berber Lamb Shank Tagine with Prunes',
                localName: 'طاجين لحم الغنم بالبرقوق المعسل واللوز',
                description: 'Melt-in-mouth lamb shank with caramelized prunes, toasted sesame seeds, and golden fried almonds in a sweet ginger reduction.',
                price: 145,
                isSignature: true,
                dietary: ['halal']
              },
              {
                id: 'jardin-m-7',
                name: 'Seven Vegetable Organic Couscous',
                localName: 'كسكس سبع خضار البلدي',
                description: 'Triple-steamed fine semolina topped with sweet pumpkin, turnips, courgettes, chickpeas, and a rich saffron-infused aromatic bouillon.',
                price: 110,
                dietary: ['vegetarian', 'vegan', 'halal'],
                portionNotes: 'Available every day (traditional Friday special)'
              }
            ]
          },
          {
            id: 'desserts',
            title: 'Sweets & Moroccan Herbal Infusions',
            description: 'Artisanal Moroccan pastries and refreshing medina garden teas',
            items: [
              {
                id: 'jardin-m-8',
                name: 'Saffron & Orange Blossom Crème Brûlée',
                localName: 'كريم بروليه بالزعفران وماء الزهر',
                description: 'Silky custard infused with pure Taliouine saffron threads, orange blossom water, and a crackling caramelized raw sugar crust.',
                price: 65,
                isSignature: true,
                dietary: ['vegetarian']
              },
              {
                id: 'jardin-m-9',
                name: 'Pastilla au Lait (Khoubzat el Halib)',
                localName: 'بسطيلة بالحليب واللوز المحمص',
                description: 'Crispy layered pastry sheets floating in an aromatic warm milk cream perfumed with orange blossom, cinnamon, and toasted almonds.',
                price: 60,
                dietary: ['vegetarian']
              },
              {
                id: 'jardin-m-10',
                name: 'Fresh Spearmint & Absinthe Herb Tea',
                localName: 'شاي مغربي أصيل بالنعناع والشيبة',
                description: 'High-poured ceremonial Moroccan green tea infused with freshly plucked garden spearmint leaves (sugar level customized to your preference).',
                price: 35,
                dietary: ['vegan', 'halal']
              },
              {
                id: 'jardin-m-11',
                name: 'Freshly Squeezed Citrus & Pomegranate',
                localName: 'عصير برتقال ورمان طازج',
                description: 'Pressed cold to order from sun-drenched Taroudant sweet oranges and ruby Marrakech pomegranates.',
                price: 40,
                dietary: ['vegan', 'halal']
              }
            ]
          }
        ]
      },
      pros: [
        "Shaded lush riad courtyard oasis with tranquil botanical plants.",
        "Authentic slow-cooked Beef Tanjia Marrakchia and Chicken Pastilla.",
        "Attentive multilingual staff and serene respite from the souk bustle."
      ],
      cons: [
        "Peak lunch and dinner rushes can result in short wait times without reservations.",
        "Strictly dry dining venue (no alcoholic beverages served)."
      ],
      googleRating: 4.1,
      googleReviewCount: 6480,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 2930,
      theforkRating: 4.1,
      theforkReviewCount: 450,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 10990,
      openTime: "10:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "32 Souk Jeld Sidi Abdelaziz, Médina, Marrakech 40000, Morocco",
        lat: 31.6315,
        lng: -7.9875
      },
      address: "32 Souk Jeld Sidi Abdelaziz, Médina, Marrakech 40000, Morocco",
      coordinates: {
        lat: 31.6315,
        lng: -7.9875
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Jardin+Marrakech",
      reservationMethod: ["website", "phone"],
      reservationContact: "+212524378295",
      whatsappNumber: "+212524378295",
      bookingUrl: "https://lejardinmarrakech.com",
      website: "https://lejardinmarrakech.com",
      instagram: "https://instagram.com/lejardinmarrakech",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      googlePlaceId: "ChIJ_1XbVGjurw0RHNXyrVPvcwc",
      nonCopyrightImage: "https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Clear Pricing",
        description: "All dishes and drinks clearly priced on the printed menu with tax included; no hidden table covers.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Filtered Water",
        description: "Uses filtered water for all kitchen preparations, juices, and ice cubes; produce thoroughly washed.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Real Tanjia",
        description: "Authentic 7-hour beef tanjia slow-cooked in traditional clay amphorae with preserved Beldi lemons.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Tucked In Medina",
        description: "Lush shaded riad courtyard away from street bustle; keep an eye out for faux guides in outer alleys.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Leisurely Pace",
        description: "Service follows an unhurried, relaxed pace during peak dinner rush; reservation advised.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    reviewsData: {
      sources: [
        {
          source: 'Google Maps',
          rating: 4.6,
          maxRating: 5,
          reviewCount: 6480,
          url: 'https://maps.google.com/?q=Le+Jardin+Marrakech'
        },
        {
          source: 'Tripadvisor',
          rating: 4.5,
          maxRating: 5,
          reviewCount: 2930,
          url: 'https://www.tripadvisor.com/Restaurant_Review-g293734-d2508871-Reviews-Le_Jardin-Marrakech_Marrakech_Safi.html'
        },
        {
          source: 'TheFork',
          rating: 8.8,
          maxRating: 10,
          reviewCount: 450,
          url: 'https://www.thefork.com'
        },
        {
          source: 'Wanderlog',
          rating: 4.7,
          maxRating: 5,
          reviewCount: 320,
          url: 'https://wanderlog.com'
        },
        {
          source: 'Reddit',
          rating: 4.4,
          maxRating: 5,
          reviewCount: 85,
          url: 'https://www.reddit.com/r/Morocco'
        }
      ],
      reviews: [
        {
          id: 'jardin-rev-1',
          author: 'Sophie M.',
          gender: 'woman',
          postedDate: '2026-09-18',
          source: 'Tripadvisor',
          rating: 5,
          sentiment: 'good',
          tags: ['Courtyard', 'Pastilla', 'Oasis'],
          text: 'An absolute garden oasis right in the heart of the frantic medina! Sitting under the banana trees sipping fresh mint tea and eating their pastilla was one of our best lunches in Marrakech. Impeccably clean and peaceful.'
        },
        {
          id: 'jardin-rev-2',
          author: 'Karim B.',
          gender: 'man',
          postedDate: '2026-08-04',
          source: 'Google Maps',
          rating: 5,
          sentiment: 'good',
          tags: ['Tanjia', 'Atmosphere'],
          text: 'The slow-cooked Beef Tanjia Marrakchia is tender beyond belief. The earthen pot cooking really locks in all the preserved lemon and cumin flavors. Book a day in advance for shaded courtyard tables.'
        },
        {
          id: 'jardin-rev-3',
          author: 'Elena D.',
          gender: 'woman',
          postedDate: '2026-06-22',
          source: 'TheFork',
          rating: 4,
          sentiment: 'good',
          tags: ['Service', 'Salads'],
          text: 'The cooked Moroccan salad trio (especially the roasted zaalouk) was fresh and flavorful. Service was polite and helpful in French and English, though it slows down when every table fills at 8 PM.'
        },
        {
          id: 'jardin-rev-4',
          author: 'David L.',
          gender: 'man',
          postedDate: '2026-04-10',
          source: 'Reddit',
          rating: 4,
          sentiment: 'good',
          tags: ['Dry Restaurant', 'Value'],
          text: 'Great escape from the souk noise. Note for travelers looking for beer or wine: Le Jardin is strictly dry. Juices and spiced mocktails are delicious though.'
        },
        {
          id: 'jardin-rev-5',
          author: 'Marcus T.',
          gender: 'man',
          postedDate: '2026-02-15',
          source: 'Tripadvisor',
          rating: 3,
          sentiment: 'bad',
          tags: ['Wait Times', 'Pricing'],
          text: 'Food was good but without a prior reservation we had to wait 25 minutes by the door. Slightly pricier than street-level eateries, though you are paying for the stunning botanical setting.'
        }
      ]
    }
  },

  {
    id: "e-marrakech-2",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["lunch", "brunch"],
      experienceTypes: ["casual", "hidden-gem", "cafes-tea"],
      foodStyles: ["Mediterranean", "Vegetarian/Vegan", "Italian"],
      cuisineTags: ["international"],
      archetypeAffinity: ["culture", "nomad", "first-timer"],
      vibeTags: ["lemon-trees", "organic", "vegetarian-oasis"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: ["sunday"],
      seatingTypes: ["courtyard", "outdoor"],
      paymentMethods: ["cash"],
      tags: ["lunch", "brunch", "vegetarian", "cafe-pastry", "dry", "medina"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Famille",
      neighborhood: "Mellah",
      description: "An incredibly popular, chic vegetarian garden lunch spot at 42 Riad Zitoun Jdid near Bahia Palace and the Mellah border. Hidden away in a quiet alley, it offers daily-changing Mediterranean menus with fresh, organic ingredients under lemon trees.",
      tip: "Lunch service only, closed on Sundays, and 100% vegetarian. Book online several days in advance as seating is scarce.",
      badge: "hidden-gem",
      bestDishes: [
        "Fresh Fig and Goat Cheese Salad",
        "Daily Homemade Pasta",
        "Organic Orange Blossom Tart"
      ],
      pros: [
        "100% vegetarian daily-changing organic menu made from scratch",
        "Tranquil lemon-tree garden oasis away from busy alleys"
      ],
      cons: [
        "Lunch only (12:00–16:00), closed Sundays, and cash only",
        "Advance online reservation is essential"
      ],
      googleRating: 4.3,
      googleReviewCount: 1650,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 550,
      theforkRating: 4.3,
      theforkReviewCount: 180,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 2200,
      openTime: "12:00",
      closeTime: "16:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Famille+Marrakech",
      reservationMethod: ["website"],
      reservationContact: "",
      bookingUrl: "https://lafamillemarrakech.com",
      whatsappNumber: "",
      website: "https://lafamillemarrakech.com",
      instagram: "https://instagram.com/lafamillemarrakech",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 0,
      googlePlaceId: "ChIJy0qZVG3urw0RGH19bK-S8m4",
      nonCopyrightImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Fixed Menu",
        description: "Transparent daily-changing chalkboard pricing; no unexpected starter fees or cover charges.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Organic Produce",
        description: "100% vegetarian kitchen with locally sourced organic produce, purified water, and pristine hygiene.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Garden Fresh",
        description: "Fresh Mediterranean-Moroccan fusion dishes crafted daily from scratch under shaded lemon trees.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Hidden Oasis",
        description: "Tucked inside a tranquil, quiet medina alleyway; serene open-air botanical garden setting.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Book Ahead",
        description: "Lunch-only service with limited seats; online advance booking is essential as walk-in space is rare.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-3",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual", "street-food"],
      foodStyles: ["Moroccan", "Grill & BBQ"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "adventure", "budget"],
      vibeTags: ["mechoui-alley", "historic", "rustic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 10,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "medina", "rooftop", "tanjia"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Chez Lamine Hadj Mustapha",
      neighborhood: "Jemaa el-Fna",
      description: "The historic reference point for traditional, slow-roasted pit lamb (Méchoui) and authentic clay-pot Tanjia Marrakchia. Run by a legendary local master chef off Jemaa el-Fna.",
      tip: "Arrive between 12:00 and 13:30. The lamb méchoui is roasted underground in the morning and frequently sells out by mid-afternoon.",
      badge: "local-favorite",
      bestDishes: [
        "Mechoui (Pit-Roasted Lamb)",
        "Tanjia Marrakchia",
        "Traditional Khobz"
      ],
      pros: [
        "Iconic Mechoui Alley institution for pit-roasted lamb and clay-pot tanjia",
        "Rich, authentic Marrakchi flavors"
      ],
      cons: [
        "Sold by weight—confirm price and portion size beforehand",
        "Best lamb cuts sell out early; cash only and rustic setting"
      ],
      googleRating: 3.7,
      googleReviewCount: 3420,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 1640,
      theforkRating: 3.7,
      theforkReviewCount: 300,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 3420,
      openTime: "11:30",
      closeTime: "21:30",
      googleMapsUrl: "https://maps.google.com/?q=Chez+Lamine+Hadj+Mustapha+Marrakech",
      reservationMethod: ["walk-in"],
      reservationContact: "+212662022080",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJc1eWcG3urw0RuX3f3qD3C9g",
      nonCopyrightImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Sold By Weight",
        description: "Pit-roasted méchoui is priced by weight; clarify your desired portion before slicing to match your budget.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Piping Hot Lamb",
        description: "Méchoui is slow-roasted in underground clay pits at high temperatures; served steaming hot with fresh cumin and salt.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Legendary Mechoui",
        description: "The definitive reference in Marrakech for authentic wood-fired pit lamb and slow-simmered amphora tanjia.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Rustic Medina Eatery",
        description: "Authentic, high-energy dining off Jemaa el-Fna; simple bench seating with bustling local and tourist foot traffic.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Sells Out Fast",
        description: "No reservations taken; best lamb cuts sell out by 13:30. Quick counter service with minimal table lingering.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-4",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "afternoon-tea", "flexible"],
      experienceTypes: ["cafes-tea", "rooftop", "casual"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe & Pastry"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      archetypeAffinity: ["first-timer", "budget", "nomad"],
      vibeTags: ["spice-square", "sunset-terrace", "people-watching"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 8,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "juice",
        "medina",
        "mountain",
        "rooftop",
        "sunset",
        "tagine",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Café des Épices",
      neighborhood: "Mouassine",
      description: "The iconic multi-story rooftop cafe in the Medina, located right on bustling Rahba Kedima (Spice Square) adjacent to Mouassine. Perfect for market views, spice stalls, and Atlas Mountains panoramas.",
      tip: "Walk-ins only. Head up to the second or top rooftop terrace just before sunset for sweeping views over Rahba Kedima.",
      badge: "local-favorite",
      bestDishes: [
        "Kefta Egg Tagine",
        "Spice Square Juice (Ginger & Orange)",
        "Saffron Spiced Coffee"
      ],
      pros: [
        "Iconic sunset terrace overlooking Rahba Kedima (Spice Square)",
        "Affordable drinks, spiced coffees, and light Moroccan cafe classics"
      ],
      cons: [
        "Walk-in only; top terrace fills quickly at sunset",
        "No air conditioning; stairs to upper decks"
      ],
      googleRating: 4.2,
      googleReviewCount: 7150,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 6680,
      theforkRating: 4.1,
      theforkReviewCount: 750,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 14000,
      openTime: "09:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "75 Rahba Kedima (Place des Épices), Médina, Marrakech 40000, Morocco",
        lat: 31.6297,
        lng: -7.9857
      },
      address: "75 Rahba Kedima (Place des Épices), Médina, Marrakech 40000, Morocco",
      coordinates: {
        lat: 31.6297,
        lng: -7.9857
      },
      googleMapsUrl: "https://maps.google.com/?q=Cafe+des+Epices+Marrakech",
      reservationMethod: ["walk-in"],
      reservationContact: "+212662564134",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://cafedesepices.ma",
      instagram: "https://instagram.com/cafedesepicesmarrakech",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJuX4rVG3urw0RD8i8J7R2B6U",
      nonCopyrightImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      languagesSpoken: ["French", "English", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "breakfast-brunch",
            title: "Breakfast on the Square (09:00–11:30)",
            description: "Freshly baked traditional breads, Beldi eggs, and morning pastries overlooking Rahba Kedima",
            items: [
              {
                id: "epices-moroccan-breakfast",
                name: "Moroccan Breakfast",
                localName: "فطور مغربي تقليدي متكامل",
                translations: {
                  ar: "فطور مغربي تقليدي متكامل",
                  en: "Hot drink, fresh orange juice, harcha, msemen, baghrir, amlou, jam, honey, and olive oil",
                  es: "Desayuno marroquí completo con bebida caliente, zumo de naranja, harcha, msemen, amlou y miel",
                  de: "Traditionelles marokkanisches Frühstück mit Orangensaft, Harcha, Msemen, Amlou und Honig"
                },
                price: 90,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "epices-beldi-plate",
                name: "Moroccan Plate (Beldi Classics)",
                localName: "طبق بلدي تقليدي مع الشاي بالنعناع",
                translations: {
                  ar: "طبق بلدي تقليدي مع الشاي بالنعناع",
                  en: "Harcha, msemen, and baghrir flatbreads served with butter, olive oil, wild honey, and mint tea",
                  es: "Plato beldi de harcha, msemen y baghrir con mantequilla, miel y té a la menta",
                  de: "Beldi-Teller mit Harcha, Msemen und Baghrir, dazu Honig, Olivenöl und Minztee"
                },
                price: 50,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "epices-avocado-toast",
                name: "Avocado Toast on Sourdough",
                localName: "توست الأفوكادو بالخبز الحرفي والبيض",
                translations: {
                  ar: "توست الأفوكادو بالخبز الحرفي والبيض",
                  en: "Artisan sourdough topped with mashed avocado, soft-poached egg, and pomegranate",
                  es: "Tostada de masa madre con aguacate, huevo escalfado y granada",
                  de: "Sauerteigtoast mit Avocado, pochiertem Ei und Granatapfelkernen"
                },
                price: 80,
                dietary: ["vegetarian", "halal"]
              }
            ]
          },
          {
            id: "mains-sandwiches",
            title: "Tagines, Salads & Cafe Classics",
            description: "All-day light Moroccan plates, freshly made burgers, and medina salads",
            items: [
              {
                id: "epices-kefta-tagine",
                name: "Kefta & Egg Tagine",
                localName: "طاجين الكفتة بالبيض وصلصة الطماطم والأعشاب",
                translations: {
                  ar: "طاجين الكفتة بالبيض وصلصة الطماطم والأعشاب",
                  en: "Spiced beef meatballs simmered in rich tomato-cumin sauce topped with farm eggs",
                  es: "Tajine tradicional de albóndigas de ternera especiadas en salsa de tomate y huevo",
                  de: "Würziger Kefta-Hackbällchen-Tagine in Tomatensauce mit pochiertem Ei"
                },
                price: 85,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "epices-vegetarian-tagine",
                name: "Seasonal Vegetable Tagine",
                localName: "طاجين الخضار الموسمية بالأعشاب والتوابل",
                translations: {
                  ar: "طاجين الخضار الموسمية بالأعشاب والتوابل",
                  en: "Slow-cooked zucchini, carrots, sweet potato, olives, and preserved lemon served with bread",
                  es: "Tajine vegetariano de verduras de temporada con aceitunas y limón confitado",
                  de: "Vegetarischer Gemüsetagine der Saison mit Oliven und Salzzitrone"
                },
                price: 60,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "epices-harira-soup",
                name: "Traditional Harira Soup",
                localName: "حريرة مغربية تقليدية بالعدس والحمص",
                translations: {
                  ar: "حريرة مغربية تقليدية بالعدس والحمص",
                  en: "Hearty tomato, lentil, and chickpea soup scented with fresh coriander and ginger",
                  es: "Sopa tradicional marroquí harira de tomates, lentejas y garbanzos",
                  de: "Traditionelle marokkanische Harira-Suppe mit Linsen, Kichererbsen und Koriander"
                },
                price: 40,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "epices-house-salad",
                name: "Café des Épices Market Salad",
                localName: "سلطة السوق المغربية الطازجة بالجبن والأعشاب",
                translations: {
                  ar: "سلطة السوق المغربية الطازجة بالجبن والأعشاب",
                  en: "Crisp market greens, roasted seasonal vegetables, goat cheese, and lemon-argan vinaigrette",
                  es: "Ensalada fresca del mercado con queso de cabra y vinagreta de argán",
                  de: "Frischer Marktsalat mit Ziegenkäse und Arganöl-Zitronen-Vinaigrette"
                },
                price: 60,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "epices-chicken-sandwich",
                name: "Spiced Chicken & Harissa Burger / Sandwich",
                localName: "ساندويتش دجاج مشوي بالأعشاب والهريسة المنزلية",
                translations: {
                  ar: "ساندويتش دجاج مشوي بالأعشاب والهريسة المنزلية",
                  en: "Grilled marinated chicken in warm khobz bread with house harissa mayo and crispy fries",
                  es: "Sándwich de pollo especiado a la parrilla con mayonesa de harissa y patatas fritas",
                  de: "Gegrilltes Gewürzhähnchen-Sandwich mit Haus-Harissa-Mayo und Pommes"
                },
                price: 60,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "spiced-drinks",
            title: "Spiced Coffees, Teas & Fresh Juices",
            description: "Freshly squeezed Taroudant citrus and signature Rahba Kedima spice blends",
            items: [
              {
                id: "epices-spiced-coffee",
                name: "Signature Spiced Coffee (Café Épicé)",
                localName: "قهوة متبلة بالبهارات المغربية والزعفران",
                translations: {
                  ar: "قهوة متبلة بالبهارات المغربية والزعفران",
                  en: "Freshly brewed coffee infused with cinnamon, nutmeg, cardamom, cloves, and black pepper",
                  es: "Café aromático especiado con canela, cardamomo y nuez moscada",
                  de: "Hausgemachter Gewürzkaffee mit Zimt, Kardamom und Muskat"
                },
                price: 20,
                isSignature: true,
                dietary: ["vegan", "halal"]
              },
              {
                id: "epices-mint-tea",
                name: "Traditional Moroccan Mint Tea",
                localName: "شاي مغربي تقليدي بالنعناع الطازج",
                translations: {
                  ar: "شاي مغربي تقليدي بالنعناع الطازج",
                  en: "Ceremonial Moroccan green tea brewed with fresh spearmint leaves",
                  es: "Té verde marroquí tradicional con hierbabuena fresca",
                  de: "Traditioneller marokkanischer grüner Tee mit frischer Nanaminze"
                },
                price: 15,
                dietary: ["vegan", "halal"]
              },
              {
                id: "epices-ginger-orange-juice",
                name: "Fresh Orange & Ginger Juice",
                localName: "عصير برتقال طازج مع الزنجبيل",
                translations: {
                  ar: "عصير برتقال طازج مع الزنجبيل",
                  en: "Cold-pressed sweet Moroccan oranges blended with fresh spicy ginger root",
                  es: "Zumo de naranja recién exprimido con jengibre fresco",
                  de: "Frisch gepresster Orangensaft mit frischem Ingwer"
                },
                price: 35,
                isSignature: true,
                dietary: ["vegan", "halal"]
              }
            ]
          }
        ]
      }
    },
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Printed Menu",
        description: "Fixed printed prices for teas, coffees, and tagines; tax included with clear receipts provided.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Fresh Press Juices",
        description: "High customer turnover ensures fresh mint and citrus; bottled water used for all preparations.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Classic Cafe Fare",
        description: "Reliable medina cafe classics, fresh Moroccan salads, kefta tagines, and spiced coffees.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Spice Square Views",
        description: "Overlooks vibrant Rahba Kedima; upper terraces provide elevated escape from square vendors.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Sunset Rush",
        description: "Walk-ins only; expect a brief wait for top terrace seating during prime golden hour sunset.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-5",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["rooftop", "fine-dining", "casual"],
      foodStyles: ["Moroccan", "Mediterranean", "French-Moroccan"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["first-timer", "culture", "nomad"],
      vibeTags: ["modern-maghrebi", "dual-rooftop", "chic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 25,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "dinner",
        "dry",
        "fine",
        "medina",
        "rooftop",
        "sunset",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Nomad",
      neighborhood: "Mouassine",
      description: "A trendy, internationally acclaimed multi-level restaurant with chic modern-Moroccan design overlooking Rahba Kedima beside Mouassine. Offers dual rooftop terraces serving inventive Maghrebi-fusion plates.",
      tip: "Book 1-2 weeks in advance for top terrace tables at sunset. Completely dry; serves signature infused mocktails.",
      badge: "local-favorite",
      bestDishes: [
        "Lamb Burger with Harissa Mayo",
        "Spiced Calamari",
        "Saffron Scented Orange Cake"
      ],
      pros: [
        "Stylish modern-Moroccan fusion menu and dual rooftop terraces",
        "Reliable service, AC indoor floors, and seamless card payment"
      ],
      cons: [
        "Must book 1–2 weeks in advance for sunset rooftop seating",
        "Strictly dry (no alcohol served)"
      ],
      googleRating: 4,
      googleReviewCount: 7530,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 6670,
      theforkRating: 4.1,
      theforkReviewCount: 880,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 14500,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "1 Derb Aarjane, Rahba Kedima, Médina, Marrakech 40000, Morocco",
        lat: 31.6298,
        lng: -7.9859
      },
      address: "1 Derb Aarjane, Rahba Kedima, Médina, Marrakech 40000, Morocco",
      coordinates: {
        lat: 31.6298,
        lng: -7.9859
      },
      googleMapsUrl: "https://maps.google.com/?q=Nomad+Marrakech",
      reservationMethod: ["website", "phone"],
      reservationContact: "+212524381609",
      bookingUrl: "https://nomadmarrakech.com",
      whatsappNumber: "",
      website: "https://nomadmarrakech.com",
      instagram: "https://instagram.com/nomadmarrakech",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 20,
      googlePlaceId: "ChIJuXAbl2Xurw0R9pfGiHPcnso",
      nonCopyrightImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      languagesSpoken: ["English", "French", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "starters-sharing",
            title: "Modern Maghrebi Starters & Salads",
            description: "Seasonal market produce reimagined with preserved citrus, fresh herbs, and Atlas cheese",
            items: [
              {
                id: "nomad-zucchini-fritters",
                name: "Zucchini & Feta Fritters with Harissa Yogurt",
                localName: "فطائر الكوسة المقرمشة بجبن الفيتا وزبادي الهريسة",
                translations: {
                  ar: "فطائر الكوسة المقرمشة بجبن الفيتا وزبادي الهريسة",
                  en: "Crisp herb-flecked zucchini and feta fritters paired with smoky harissa yogurt (4 pcs / 8 pcs)",
                  es: "Buñuelos crujientes de calabacín y feta con yogur de harissa",
                  de: "Knusprige Zucchini-Feta-Puffer mit rauchigem Harissa-Joghurt"
                },
                price: 80,
                isSignature: true,
                dietary: ["vegetarian", "halal"],
                portionNotes: "4 pcs 80 MAD • 8 pcs 140 MAD"
              },
              {
                id: "nomad-lentil-salad",
                name: "Warm Lentil & Essaouira Goat Cheese Salad",
                localName: "سلطة العدس الدافئ مع جبن الماعز الصويري",
                translations: {
                  ar: "سلطة العدس الدافئ مع جبن الماعز الصويري",
                  en: "Warm cumin-scented green lentils, creamy Essaouira goat cheese, and candied fennel vinaigrette",
                  es: "Ensalada tibia de lentejas al comino y queso de cabra de Essaouira",
                  de: "Warmer Linsensalat mit Kreuzkümmel und Ziegenkäse aus Essaouira"
                },
                price: 90,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "nomad-sardine-tart",
                name: "Agadir Sardine & Caramelized Onion Tart",
                localName: "تارت السردين الصويري بالبصل المعسل والكمون",
                translations: {
                  ar: "تارت السردين الصويري بالبصل المعسل والكمون",
                  en: "Flaky puff pastry topped with Agadir marinated sardines, sweet onions, and wild thyme",
                  es: "Hojaldre crujiente de sardinas de Agadir con cebolla caramelizada y tomillo",
                  de: "Knusprige Tarte mit marinierten Agadir-Sardinen, Schmorzwiebeln und Thymian"
                },
                price: 90,
                dietary: ["halal"]
              },
              {
                id: "nomad-tuna-tartare",
                name: "Moroccan Spiced Tuna Tartare",
                localName: "تارتار التونة المغربية المتبلة بالليمون الحامض والأفوكادو",
                translations: {
                  ar: "تارتار التونة المغربية المتبلة بالليمون الحامض والأفوكادو",
                  en: "Hand-diced Atlantic red tuna with avocado, preserved lemon zest, capers, and sesame crisp",
                  es: "Tartar de atún rojo del Atlántico con aguacate y limón confitado",
                  de: "Atlantik-Thunfischtatar mit Avocado, Salzzitrone und Sesamchip"
                },
                price: 160,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "mains-fusion",
            title: "Main Plates & Contemporary Classics",
            description: "Signature Nomad dishes balancing Moroccan pantry spices and Mediterranean techniques",
            items: [
              {
                id: "nomad-lamb-burger",
                name: "Nomad Spiced Lamb & Beef Burger",
                localName: "برغر نوماد بلحم الغنم المتبل ومايونيز الهريسة",
                translations: {
                  ar: "برغر نوماد بلحم الغنم المتبل ومايونيز الهريسة",
                  en: "Grilled spiced lamb and beef burger in brioche bun with caramelized onion, harissa mayo, and Nomad fries",
                  es: "Hamburguesa Nomad de cordero y ternera especiada con mayonesa de harissa",
                  de: "Nomad Gewürz-Lamm- und Rindfleisch-Burger mit Harissa-Mayo und Pommes"
                },
                price: 180,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "nomad-calamari-sofrito",
                name: "Pan-Roasted Calamari Sofrito",
                localName: "كالامار مشوي بصلصة السوفريتو والطماطم والأعشاب",
                translations: {
                  ar: "كالامار مشوي بصلصة السوفريتو والطماطم والأعشاب",
                  en: "Tender sautéed Atlantic calamari over roasted tomato-pepper sofrito, fresh herbs, and garlic toast",
                  es: "Calamares salteados sobre sofrito casero de tomate, pimiento y hierbas",
                  de: "Gebratener Atlantik-Tintenfisch auf Tomaten-Paprika-Sofrito mit Kräutern"
                },
                price: 180,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "nomad-cauliflower-dukkah",
                name: "Dukkah-Glazed Roasted Cauliflower",
                localName: "قرنبيط مشوي بالدوقة والسمسم واللوز المحمص",
                translations: {
                  ar: "قرنبيط مشوي بالدوقة والسمسم واللوز المحمص",
                  en: "Whole roasted cauliflower steak finished with toasted hazelnut dukkah, tahini crema, and mint",
                  es: "Coliflor asada glaseada con dukkah de avellanas y crema de tahini",
                  de: "Gerösteter Blumenkohl mit Haselnuss-Dukkah und Tahini-Creme"
                },
                price: 160,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "nomad-fish-of-day",
                name: "Pan-Seared Catch of the Day",
                localName: "فيليه سمك اليوم المشوي بصلصة الزعفران والشمر",
                translations: {
                  ar: "فيليه سمك اليوم المشوي بصلصة الزعفران والشمر",
                  en: "Crisp-skinned fresh Atlantic fish served with saffron fennel puree and preserved lemon salsa",
                  es: "Pesca fresca del día a la plancha con puré de hinojo al azafrán",
                  de: "Auf der Haut gebratener Tagesfang mit Safran-Fenchel-Püree"
                },
                price: 210,
                dietary: ["halal"]
              },
              {
                id: "nomad-lamb-confit",
                name: "5-Hour Slow-Cooked Lamb Confit",
                localName: "لحم خروف مطهو ببطء 5 ساعات مع الكسكس بالنعناع",
                translations: {
                  ar: "لحم خروف مطهو ببطء 5 ساعات مع الكسكس بالنعناع",
                  en: "Melt-in-mouth spiced lamb shoulder confit served over saffron-mint couscous and roasted shallots",
                  es: "Paletilla de cordero confitada 5 horas con cuscús al azafrán y menta",
                  de: "5 Stunden konfiertes Lamm auf Safran-Minz-Couscous"
                },
                price: 240,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "desserts-mocktails",
            title: "Artisan Sweets & Infused Mocktails",
            description: "Signature saffron desserts and alcohol-free botanical refreshers",
            items: [
              {
                id: "nomad-date-cake",
                name: "Saffron & Medjool Date Cake",
                localName: "كيك التمر المجهول بالزعفران وآيس كريم الفانيليا",
                translations: {
                  ar: "كيك التمر المجهول بالزعفران وآيس كريم الفانيليا",
                  en: "Warm spiced Medjool date cake glazed in saffron caramel with house vanilla ice cream",
                  es: "Bizcocho tibio de dátiles Medjool y azafrán con helado de vainilla",
                  de: "Warmer Safran-Medjool-Dattelkuchen mit Vanilleeis"
                },
                price: 90,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "nomad-lavender-panna-cotta",
                name: "Atlas Lavender & Honey Panna Cotta",
                localName: "بانا كوتا بالخزامى الأطلسي وعسل البرتقال",
                translations: {
                  ar: "بانا كوتا بالخزامى الأطلسي وعسل البرتقال",
                  en: "Silky cream panna cotta infused with wild Atlas lavender and orange blossom honey",
                  es: "Panna cotta sedosa aromatizada con lavanda del Atlas y miel de azahar",
                  de: "Seidige Panna Cotta mit Atlas-Lavendel und Orangenblütenhonig"
                },
                price: 80,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "nomad-chocolate-fondant",
                name: "Dark Chocolate Fondant with Spiced Ice Cream",
                localName: "فوندان الشوكولاتة الداكنة مع آيس كريم التوابل",
                translations: {
                  ar: "فوندان الشوكولاتة الداكنة مع آيس كريم التوابل",
                  en: "Warm molten chocolate fondant paired with cinnamon-cardamom gelato",
                  es: "Coulant tibio de chocolate negro con helado de canela y cardamomo",
                  de: "Warmer Schokoladen-Fondant mit Zimt-Kardamom-Eis"
                },
                price: 90,
                dietary: ["vegetarian", "halal"]
              }
            ]
          }
        ]
      }
    },
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Itemized Card Bill",
        description: "Full computerized itemized bill with tax included; credit cards accepted seamlessly without markups.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Filtered Ice & Water",
        description: "Commercial triple-filtration system used for all culinary preparation, juices, and specialty mocktails.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Modern Fusion",
        description: "Innovative modern Maghrebi cuisine (spiced calamari, lamb burgers) rather than strictly folkloric dining.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Bustle-Free Rooftop",
        description: "Multi-level restored building insulated from street pressure; stylish contemporary decor on dual terraces.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Advance Booking",
        description: "High global popularity; reserving 1 to 2 weeks ahead is recommended for sunset tables on the upper terrace.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-6",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer", "luxury"],
      vibeTags: ["refined", "authentic", "warm", "hospitable"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 28,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: ["tuesday"],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard"],
      tags: ["alcohol", "dinner", "fine", "pastilla", "tagine", "terrace", "couscous", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Al Fassia Guéliz",
      neighborhood: "Guéliz",
      description: "Marrakech's premier gastronomic sanctuary for authentic Fassi cuisine, proudly operated exclusively by women since 1987. Famed for its legendary 12-salad mezze assortment, sweet-and-savory pigeon and seafood pastillas, slow-roasted shoulder of lamb, and rich slow-simmered beef tagines.",
      tip: "Closed on Tuesdays. The signature slow-roasted shoulder of lamb for two (Épaule d'agneau M'Hammar) is a masterpiece; book a table 24–48 hours ahead as the restaurant fills quickly.",
      badge: "local-favorite",
      bestDishes: [
        "Sélection de 12 Salades Marocaines Fines",
        "Pastilla au Pigeon ou au Poulet",
        "Épaule d'Agneau Rôtie M'Hammar",
        "Tagine d'Agneau aux Pruneaux & Amandes",
        "Tagine Makfoul",
        "Mhancha Al Fassia & Glace Vanille"
      ],
      pros: [
        "Trailblazing cooperative run exclusively by women with exquisite culinary standards",
        "Arguably the most refined authentic Moroccan and Fassi cuisine in the city",
        "Licensed wine list featuring excellent Moroccan reds and crisp local gris",
        "Comfortable, tranquil dining room away from the hustle of the Medina souks"
      ],
      cons: [
        "Closed all day Tuesday",
        "Advance reservation required for dinner and for specialty dishes like whole lamb shoulder"
      ],
      googleRating: 4.5,
      googleReviewCount: 3540,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 2450,
      theforkRating: 4.5,
      theforkReviewCount: 530,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 3540,
      openTime: "12:30",
      closeTime: "23:00",
      weeklySchedule: [
        { day: "Monday", openTime: "12:30", closeTime: "23:00", isClosed: false },
        { day: "Tuesday", openTime: "12:30", closeTime: "23:00", isClosed: true, note: "Fermé le mardi" },
        { day: "Wednesday", openTime: "12:30", closeTime: "23:00", isClosed: false },
        { day: "Thursday", openTime: "12:30", closeTime: "23:00", isClosed: false },
        { day: "Friday", openTime: "12:30", closeTime: "23:00", isClosed: false },
        { day: "Saturday", openTime: "12:30", closeTime: "23:00", isClosed: false },
        { day: "Sunday", openTime: "12:30", closeTime: "23:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "55 Boulevard Mohamed Zerktouni, Guéliz, Marrakech 40000, Morocco",
        lat: 31.6342,
        lng: -8.0128
      },
      address: "55 Boulevard Mohamed Zerktouni, Guéliz, Marrakech 40000, Morocco",
      coordinates: {
        lat: 31.6342,
        lng: -8.0128
      },
      googleMapsUrl: "https://maps.google.com/?q=Al+Fassia+Gueliz+Marrakech",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212524434060",
      whatsappNumber: "",
      bookingUrl: "https://alfassia.com/gueliz/",
      website: "https://alfassia.com",
      instagram: "https://instagram.com/alfassiamarrakech",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJlWv0_m3urw0R5D-k0eQZ1xA",
      nonCopyrightImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      languagesSpoken: ["French", "Arabic/Darija", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "entrees-salades-fassies",
            title: "Salades Fines & Entrées Royales (Salads & Appetizers)",
            description: "Assortiments de salades cuisinées de Fès et potages traditionnels",
            items: [
              {
                id: "fassia-12-salades",
                name: "Sélection de 12 Salades Marocaines Fines",
                localName: "تشكيلة 12 سلطة مغربية تقليدية متبلة بالبهارات الفاسية",
                translations: {
                  ar: "تشكيلة 12 سلطة مغربية تقليدية متبلة بالبهارات الفاسية",
                  en: "Legendary tasting assortment of 12 distinct cooked Moroccan salads and dips",
                  es: "Gran surtido de degustación de 12 ensaladas marroquíes cocinadas tradicionales",
                  de: "Legendäre Auswahl von 12 verschiedenen traditionellen marokkanischen Gemüsesalaten"
                },
                price: 120,
                isSignature: true,
                dietary: ["vegetarian", "vegan", "halal"],
                portionNotes: "Idéal pour 2 personnes en entrée"
              },
              {
                id: "fassia-cocktail-briouates",
                name: "Cocktail de Briouates Al Fassia (4 pièces)",
                localName: "تشكيلة بريوات مقرمشة باللحم المفروم والسمك والسبانخ والجبن",
                translations: {
                  ar: "تشكيلة بريوات مقرمشة باللحم المفروم والسمك والسبانخ والجبن",
                  en: "Crispy filo pastry parcels filled with spiced minced beef, fish, and spinach-cheese",
                  es: "Surtido de briouats crujientes de pasta filo rellenos de carne picada, pescado y espinacas",
                  de: "Knusprige Briouats gefüllt mit Hackfleisch, Fisch und Spinat-Käse"
                },
                price: 120,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "pastillas-briouates",
            title: "Pastillas Artisanales (Handcrafted Pastillas)",
            description: "Feuilletage maison cuit à point et farces mijotées",
            items: [
              {
                id: "fassia-pastilla-pigeon",
                name: "Pastilla Traditionnelle au Pigeon",
                localName: "بسطيلة فاسية أصيلة بالحمام واللوز المحمص والقرفة",
                translations: {
                  ar: "بسطيلة فاسية أصيلة بالحمام واللوز المحمص والقرفة",
                  en: "Authentic Fassi pigeon pastilla with crushed roasted almonds, saffron, and cinnamon sugar",
                  es: "Pastela tradicional de Fès con pichón, almendras tostadas crujientes y canela",
                  de: "Authentische Fassi-Pastilla mit Taubenfleisch, gerösteten Mandeln und Zimt"
                },
                price: 165,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "fassia-pastilla-poulet",
                name: "Pastilla au Poulet & Amandes",
                localName: "بسطيلة الدجاج الكلاسيكية باللوز والسكر الصقيل",
                translations: {
                  ar: "بسطيلة الدجاج الكلاسيكية باللوز والسكر الصقيل",
                  en: "Classic sweet and savory chicken pastilla with roasted almonds and cinnamon",
                  es: "Pastela clásica de pollo con almendras crujientes y azúcar glas",
                  de: "Klassische Hähnchenpastilla mit gerösteten Mandeln und Puderzucker"
                },
                price: 150,
                dietary: ["halal"]
              },
              {
                id: "fassia-pastilla-fruits-mer",
                name: "Pastilla aux Fruits de Mer & Vermicelles",
                localName: "بسطيلة فواكه البحر والجمبري والشعرية الصينية الحارة",
                translations: {
                  ar: "بسطيلة فواكه البحر والجمبري والشعرية الصينية الحارة",
                  en: "Savory Atlantic seafood pastilla with shrimp, calamari, mushrooms, and spiced glass noodles",
                  es: "Pastela salada de mariscos del Atlántico con gambas, calamares y fideos especiados",
                  de: "Pikante Meeresfrüchte-Pastilla mit Garnelen, Tintenfisch und Glasnudeln"
                },
                price: 165,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "tagines-specialites-maison",
            title: "Tagines Mijotés & Spécialités d'Agneau (Tagines & Roasts)",
            description: "Recettes traditionnelles fassies mijotées à feu doux",
            items: [
              {
                id: "fassia-epaule-agneau",
                name: "Épaule d'Agneau Rôtie M'Hammar (Pour 2 personnes)",
                localName: "كتف خروف محمر بالفرن متبل بالأعشاب والزعفران (يكفي لشخصين)",
                translations: {
                  ar: "كتف خروف محمر بالفرن متبل بالأعشاب والزعفران (يكفي لشخصين)",
                  en: "Slow-roasted whole shoulder of lamb infused with saffron and wild herbs (for 2 guests)",
                  es: "Paletilla entera de cordero asada al horno con azafrán y hierbas (para 2 personas)",
                  de: "Langsam im Ofen geschmorte ganze Lammschulter mit Safran und Kräutern (für 2 Personen)"
                },
                price: 450,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Pour 2 personnes • Commander à l'avance"
              },
              {
                id: "fassia-tagine-agneau-pruneaux",
                name: "Tagine d'Agneau aux Pruneaux & Amandes Dorées",
                localName: "طاجين لحم الغنم بالبرقوق المعسل واللوز المقلي والسمسم",
                translations: {
                  ar: "طاجين لحم الغنم بالبرقوق المعسل واللوز المقلي والسمسم",
                  en: "Tender lamb tagine simmered with caramelized prunes, toasted almonds, and sesame seeds",
                  es: "Tajine de cordero estofado con ciruelas pasas caramelizadas y almendras doradas",
                  de: "Geschmorter Lammtagine mit karamellisierten Pflaumen und gerösteten Mandeln"
                },
                price: 185,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "fassia-tagine-makfoul",
                name: "Tagine Makfoul à la Courge Caramélisée & Oignons",
                localName: "طاجين المقفول باللحم والبصل المعسل والقرع الحلو",
                translations: {
                  ar: "طاجين المقفول باللحم والبصل المعسل والقرع الحلو",
                  en: "Traditional Makfoul tagine with tender beef or lamb, caramelized onions, and sweet pumpkin",
                  es: "Tajine tradicional Makfoul con ternera o cordero, cebollas caramelizadas y calabaza dulce",
                  de: "Traditioneller Makfoul-Tagine mit Rind oder Lamm, karamellisierten Zwiebeln und Kürbis"
                },
                price: 185,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "couscous-patisseries",
            title: "Couscous Royal & Douceurs Fassi (Couscous & Sweets)",
            description: "Plats de fête et pâtisseries raffinées faites maison",
            items: [
              {
                id: "fassia-couscous-royal",
                name: "Couscous Royal Al Fassia",
                localName: "كسكس ملكي متكامل باللحم البقري والغنم والدجاج والسبع خضار",
                translations: {
                  ar: "كسكس ملكي متكامل باللحم البقري والغنم والدجاج والسبع خضار",
                  en: "Royal couscous with lamb, beef, chicken, merguez skewers, and caramelized onion tfaya",
                  es: "Cuscús real con cordero, ternera, pollo, brochetas merguez y tfaya caramelizada",
                  de: "Königlicher Couscous mit Lamm, Rind, Hähnchen, Merguez und karamellisierter Tfaya"
                },
                price: 240,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "fassia-mhancha",
                name: "Mhancha Al Fassia & Glace Vanille",
                localName: "محنشة فاسية أصيلة باللوز المقلي وماء الزهر مع آيس كريم الفانيليا",
                translations: {
                  ar: "محنشة فاسية أصيلة باللوز المقلي وماء الزهر مع آيس كريم الفانيليا",
                  en: "Coiled almond pastry scented with orange blossom water, served with artisanal vanilla ice cream",
                  es: "Pastel en espiral mhancha relleno de pasta de almendras y azahar con helado de vainilla",
                  de: "Traditionelles gewickeltes Mandelgebäck Mhancha mit Vanilleeis"
                },
                price: 120,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              }
            ]
          }
        ]
      }
    },
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Itemized Bill",
        description: "Fully transparent printed bill with menu prices honored; no unordered starters or unexpected service surcharges.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Spotless Kitchen",
        description: "Strict professional restaurant hygiene standards; bottled mineral water, fresh premium meats, and triple-washed salads.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Fassi Mastery",
        description: "Legendary women-run cooperative preparing deeply authentic, slow-simmered Fes-style tagines and handcrafted pigeon pastilla.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Zero Touts",
        description: "Situated in upscale Guéliz with calm, dignified air-conditioned dining rooms; completely free from medina touts.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Gracious Staff",
        description: "Attentive, warm Moroccan hospitality by seasoned long-serving staff; reservation highly recommended during peak dinner hours.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-7",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch", "drinks", "late-night", "flexible"],
      experienceTypes: ["fine-dining", "cafes-tea", "casual"],
      foodStyles: ["French-Moroccan", "Mediterranean", "Cafe & Pastry", "International"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["luxury", "nomad", "first-timer"],
      vibeTags: ["1920s-brasserie", "jazz", "colonial-veranda"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 26,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "breakfast",
        "cafe-pastry",
        "dinner",
        "fine",
        "late-night",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Grand Café de la Poste",
      neighborhood: "Guéliz",
      description: "A restored 1920s French colonial brasserie in Gueliz. Features deep leather armchairs, brass fans, and a leafy veranda, serving classic French bistro meals and Mediterranean plates.",
      tip: "The ground floor and mezzanine offer vintage atmosphere with jazz in the background. Excellent wine and cocktail selection.",
      badge: "splurge",
      bestDishes: [
        "Steak Frites",
        "Oysters from Oualidia",
        "Duck Confit Parmentier"
      ],
      pros: [
        "Iconic 1920s colonial brasserie atmosphere with leafy veranda",
        "All-day hours from breakfast until 01:00 with full cocktail and wine bar"
      ],
      cons: [
        "Upscale pricing for Guéliz",
        "Weekend evenings get busy—reservations advised"
      ],
      googleRating: 4.3,
      googleReviewCount: 4500,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 2800,
      theforkRating: 4.3,
      theforkReviewCount: 650,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 5500,
      openTime: "08:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Grand+Cafe+de+la+Poste+Marrakech",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212524433038",
      bookingUrl: "https://legrandcafedelaposte.restaurant",
      whatsappNumber: "",
      website: "https://legrandcafedelaposte.restaurant",
      instagram: "https://instagram.com/legrandcafedelaposte",
      viewType: "none",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJt1m_dm3urw0R6E9vG_BfX0Q",
      nonCopyrightImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Clear Brasserie Bill",
        description: "Official Parisian-style brasserie menu with transparent wine and dining prices; itemized receipt with all taxes included.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Fresh Oualidia Oysters",
        description: "Strict French culinary hygiene standards; fresh coastal oysters refrigerated and shucked live to order.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Bistro Heritage",
        description: "Timeless French brasserie classics (steak frites, duck confit) alongside light Mediterranean fare.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Sophisticated Lounge",
        description: "Located on Place du 16 Novembre in Guéliz; leafy veranda and retro indoor salon free from medina touts.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Professional Waiters",
        description: "Prompt, dignified service by multilingual staff; table reservation recommended for Friday and Saturday dinners.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-8",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch", "afternoon-tea", "flexible"],
      experienceTypes: ["cafes-tea", "casual", "traditional", "rooftop"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe & Pastry", "Vegetarian/Vegan"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      archetypeAffinity: ["culture", "nomad", "budget", "adventure"],
      vibeTags: ["storytelling", "gnawa-music", "cultural-hub"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "medina",
        "rooftop",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Cafe Clock",
      neighborhood: "Kasbah",
      description: "A cross-cultural oasis in the historic Kasbah. Famous for camel burgers, traditional Moroccan storytelling nights (Hikayat), and calligraphy classes in a student-friendly, hybrid Moroccan setting.",
      tip: "Hosts live traditional Moroccan storytelling in English on Thursday evenings and Gnawa jams on Sundays.",
      badge: "local-favorite",
      bestDishes: [
        "Camel Burger with Spiced Wedges",
        "Spiced Date Shake",
        "Falafel & Hummus Bowl"
      ],
      pros: [
        "Unique cultural programming including Hikayat storytelling and Gnawa jams",
        "Great Kasbah rooftop and famous camel burger"
      ],
      cons: [
        "No air conditioning; stairs to rooftop terrace",
        "Strictly dry (no alcohol)"
      ],
      googleRating: 4.4,
      googleReviewCount: 2500,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 1800,
      theforkRating: 4.4,
      theforkReviewCount: 220,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 3000,
      openTime: "09:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Clock+Marrakech",
      reservationMethod: ["walk-in"],
      reservationContact: "+212524378367",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://cafeclock.com",
      instagram: "https://instagram.com/cafeclock",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJwSg88mzurw0RDh5G3N6s_10",
      nonCopyrightImage: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-9",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "seniors"],
      mealTypes: ["lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "traditional", "hidden-gem", "rooftop"],
      foodStyles: ["Moroccan", "Cafe & Pastry", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["culture", "nomad", "first-timer"],
      vibeTags: ["15th-century-riad", "literary-cafe", "quiet"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 15,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard", "rooftop"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "cafe-pastry",
        "dinner",
        "dry",
        "medina",
        "quiet",
        "riad",
        "rooftop",
        "tagine",
        "wifi"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Dar Cherifa",
      neighborhood: "Mouassine",
      description: "One of the oldest, most beautifully preserved 15th-century riads in Mouassine, operating as a quiet literary café and cultural space with museum-grade stucco and cedar woodwork.",
      tip: "One of the most tranquil architectural sanctuaries in the souks. Closes early at 19:00 on Wednesdays.",
      badge: "hidden-gem",
      bestDishes: [
        "Saffron Lamb Tagine",
        "Msemen with Orange Blossom Honey",
        "Artisanal Mint Tea with Cornes de Gazelle"
      ],
      pros: [
        "Museum-grade 15th-century Saadian architecture and quiet literary salon",
        "Serene sanctuary for afternoon tea or slow-cooked tagines"
      ],
      cons: [
        "Small side-alley location in Mouassine",
        "Closes early at 19:00 on Wednesdays"
      ],
      googleRating: 4.5,
      googleReviewCount: 2630,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 920,
      theforkRating: 4.5,
      theforkReviewCount: 150,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 2630,
      openTime: "10:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Cherifa+Marrakech",
      reservationMethod: ["phone"],
      reservationContact: "+212524426550",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 0,
      googlePlaceId: "ChIJs79A_m3urw0RwX1s6L7f3e8",
      nonCopyrightImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-10",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "afternoon-tea", "brunch", "flexible"],
      experienceTypes: ["cafes-tea", "fine-dining"],
      foodStyles: ["Cafe & Pastry", "French-Moroccan"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["luxury", "first-timer", "culture"],
      vibeTags: ["palace-salon", "specialty-coffee", "opulent"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 20,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: ["monday"],
      seatingTypes: ["indoor", "courtyard"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "cafe-pastry",
        "dry",
        "fine",
        "medina",
        "palace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Bacha Coffee",
      neighborhood: "Mouassine",
      description: "An opulent coffee salon situated inside the grand Dar El Bacha Palace in Mouassine. Features zellige mosaic tiles, tailored liveried waiters, and an unmatched catalog of over 200 single-origin Arabica coffees.",
      tip: "Closed on Mondays. Requires paid entry to Dar El Bacha museum. No reservations taken—arrive at 10:00 AM sharp to put your name on the buzzer list.",
      badge: "local-favorite",
      bestDishes: [
        "100% Arabica Specialty Coffee Pot",
        "Fresh Chantilly Croissant",
        "Pistachio Lemon Brioche"
      ],
      pros: [
        "Stunning 1910 Dar El Bacha palace setting and 200+ single-origin coffees",
        "Wheelchair accessible with AC and immaculate service"
      ],
      cons: [
        "Long walk-in queue (often 45–60+ minutes) and closed Mondays",
        "Requires separate Dar El Bacha Museum admission ticket"
      ],
      googleRating: 4.4,
      googleReviewCount: 4250,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 1250,
      theforkRating: 4.4,
      theforkReviewCount: 100,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 4500,
      openTime: "10:00",
      closeTime: "18:00",
      googleMapsUrl: "https://maps.google.com/?q=Bacha+Coffee+Marrakech",
      reservationMethod: ["walk-in"],
      reservationContact: "+212524381293",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://bachacoffee.com",
      instagram: "https://instagram.com/bachacoffee",
      viewType: "garden",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 60,
      googlePlaceId: "ChIJs2-X_23urw0Rt3e2S1x8D4Q",
      nonCopyrightImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Museum Entry Required",
        description: "Fixed menu pricing for all coffees and pastries; requires separate Dar El Bacha palace museum admission ticket to enter.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Purified Brew Water",
        description: "World-class salon hygiene standards; purified mineral water used for all single-origin coffee extractions and bakery items.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Grand Cru Coffees",
        description: "Over 200 single-origin 100% Arabica harvests served in gilded gooseneck pots with pure Chantilly cream and vanilla bean.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Palatial Tranquility",
        description: "Lavish 1910 palace setting with antique mirrors, zellige tiles, and liveried waitstaff; completely insulated from souk noise.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Buzzer Queue Wait",
        description: "No reservations taken; arrive at 10:00 AM sharp to put your name on the buzzer list as wait times can exceed 60 minutes.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-11",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: ["casual", "fine-dining"],
      foodStyles: ["Mediterranean", "French-Moroccan", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["open-kitchen", "contemporary-bistro", "brunch"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 19,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "brunch",
        "dinner",
        "dry",
        "fine",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Cantine Mouton Noir",
      neighborhood: "Guéliz",
      description: "A stylish, Montreal-inspired contemporary bistro in Gueliz. Renowned for innovative fusion cooking pairing French culinary technique with bold Moroccan and Mediterranean ingredients.",
      tip: "A favorite for weekend brunch in Gueliz. Features an open kitchen and inventive seasonal specials.",
      badge: "local-favorite",
      bestDishes: [
        "Slow-Roasted Lamb Tacos with Harissa",
        "Prawn Ravioli",
        "Gourmet French Toast"
      ],
      pros: [
        "Creative seasonal fusion dishes and standout weekend brunch",
        "Modern open kitchen, AC, Wi-Fi, and wheelchair access in Guéliz"
      ],
      cons: [
        "Strictly dry (no alcohol served)",
        "Popular weekend brunch hours fill quickly"
      ],
      googleRating: 4.7,
      googleReviewCount: 420,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 160,
      theforkRating: 4.6,
      theforkReviewCount: 80,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 420,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Cantine+Mouton+Noir+Marrakech",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212669149054",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 15,
      googlePlaceId: "ChIJ592LSmzurw0R8t5W4aB7L2k",
      nonCopyrightImage: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-12",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "solo", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Mediterranean", "Seafood", "Middle Eastern", "International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "nomad", "culture"],
      vibeTags: ["50-best-mena", "minimalist", "natural-wine"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 25,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: ["sunday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["alcohol", "dinner", "fine", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Plus61",
      neighborhood: "Guéliz",
      description: "An acclaimed Australian-inspired bistro featured on the 50 Best MENA list. Features minimalist styling and serves fresh, produce-forward plates blending Mediterranean, Middle Eastern, and Moroccan flavors.",
      tip: "Closed on Sundays. Superb natural wine selection and craft cocktails; counter seats along the kitchen pass are ideal for solo diners.",
      badge: "local-favorite",
      bestDishes: [
        "Slow-Cooked Lamb Shoulder with Flatbread",
        "Ricotta Gnocchi with Sage Butter",
        "Chargrilled Octopus with Chermoula"
      ],
      pros: [
        "50 Best MENA recognized kitchen using organic local produce",
        "Solo-friendly counter seating, natural wines, and craft cocktails"
      ],
      cons: [
        "Closed on Sundays; reservations strongly advised",
        "Indoor minimalist dining room (no outdoor terrace)"
      ],
      googleRating: 4.7,
      googleReviewCount: 940,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 340,
      theforkRating: 4.6,
      theforkReviewCount: 120,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 1050,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Plus61+Marrakech",
      reservationMethod: ["website", "phone"],
      reservationContact: "+212524207020",
      bookingUrl: "https://plus61.com",
      whatsappNumber: "",
      website: "https://plus61.com",
      instagram: "https://instagram.com/plus61marrakech",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJgU_fN2zurw0R7J05XF3o8pM",
      nonCopyrightImage: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-13",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Moroccan", "Grill & BBQ"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["budget", "adventure"],
      vibeTags: ["charcoal-grill", "late-night", "local-institution"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 5,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "late-night",
        "street-food",
        "terrace"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Chez Bejgueni",
      neighborhood: "Guéliz",
      description: "A bustling, legendary local fast-casual grill spot in Gueliz. Packed with locals day and night for sizzling charcoal-grilled kefta skewers, merguez, and fresh frites.",
      tip: "Authentic Gueliz street-grill experience. Order the mixed grill plate with fresh khobz and extra grilled tomatoes.",
      badge: "local",
      bestDishes: [
        "Charcoal Kefta Brochettes",
        "Merguez Sausage Sandwich",
        "Fresh Moroccan Fries with Harissa"
      ],
      pros: [
        "Budget-friendly charcoal grills open late until 02:00",
        "Authentic local crowd in central Guéliz"
      ],
      cons: [
        "Cash only; limited English spoken",
        "Smoky grill atmosphere and very bustling at dinner"
      ],
      googleRating: 4.3,
      googleReviewCount: 2250,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 1800,
      theforkRating: 4.2,
      theforkReviewCount: 100,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 2000,
      openTime: "11:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Chez+Bejgueni+Marrakech",
      reservationMethod: ["walk-in"],
      reservationContact: "",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5,
      googlePlaceId: "ChIJg_3qL2zurw0R4vO7R6v7D1U",
      nonCopyrightImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-14",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "French-Moroccan"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "culture", "first-timer"],
      vibeTags: ["poolside-palace", "nouvelle-marocaine", "live-lute"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 52,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "dinner",
        "fine",
        "medina",
        "palace",
        "pastilla",
        "sunset",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Dar Moha",
      neighborhood: "Mouassine",
      description: "An opulent dining room set around the mosaic pool of the former palace of Pierre Balmain on Rue Dar El Bacha in Mouassine. Helmed by Chef Moha Fedal, it is a pioneer in refined nouvelle cuisine marocaine.",
      tip: "Multi-course set menu (~530–650 MAD) accompanied by acoustic lute/Andalusian musicians. Request a poolside courtyard table.",
      badge: "splurge",
      bestDishes: [
        "14-Salad Tasting Assortment",
        "Seafood Pastilla with Bisque",
        "Slow-Braised Lamb Shank with Sweet Fruits"
      ],
      pros: [
        "Iconic mosaic-pool riad setting with live Andalusian musicians",
        "Pioneering tasting menu by celebrity Chef Moha Fedal"
      ],
      cons: [
        "Fixed multi-course tasting menu pricing (~530–650 MAD)",
        "Some diners report uneven pacing during large group seatings"
      ],
      googleRating: 4.4,
      googleReviewCount: 2500,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 2100,
      theforkRating: 4.3,
      theforkReviewCount: 350,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 2600,
      openTime: "12:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Moha+Marrakech",
      reservationMethod: ["website", "phone"],
      reservationContact: "+212524386400",
      bookingUrl: "https://darmoha.ma",
      whatsappNumber: "",
      website: "https://darmoha.ma",
      instagram: "https://instagram.com/darmohamarrakech",
      viewType: "garden",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5,
      googlePlaceId: "ChIJu_v52Gfurw0RTerhpHuxAp0",
      nonCopyrightImage: "https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-15",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "dinner", "afternoon-tea", "flexible"],
      experienceTypes: ["cafes-tea", "rooftop", "casual"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe & Pastry", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["360-rooftop", "berber-rugs", "koutoubia-sunset"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 8,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "couscous",
        "dinner",
        "dry",
        "medina",
        "rooftop",
        "sunset",
        "tagine",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Atay Cafe",
      neighborhood: "Kaat Benahid",
      description: "A rustic multi-tiered rooftop cafe at 62 Rue Amsafah in Kaat Benahid. Decorated with colorful Berber rugs and wicker lamps, it offers panoramic 360-degree views of the old city and budget-friendly Moroccan tagines.",
      tip: "Climb all the way to the top deck for sunset photos facing the Koutoubia minaret. Cash only.",
      badge: "local-favorite",
      bestDishes: [
        "Lemon Chicken Tagine with Olives",
        "Vegetarian Couscous",
        "Mint Cucumber Lemonade"
      ],
      pros: [
        "360-degree rooftop views of the Medina and Koutoubia minaret",
        "Budget-friendly tagines and refreshing juices"
      ],
      cons: [
        "Cash only; multiple steep flights of stairs to the top deck",
        "No AC in summer"
      ],
      googleRating: 4.3,
      googleReviewCount: 2850,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 1520,
      theforkRating: 4.2,
      theforkReviewCount: 100,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 3000,
      openTime: "10:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Atay+Cafe+Marrakech",
      reservationMethod: ["walk-in"],
      reservationContact: "",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5,
      googlePlaceId: "ChIJ7eXqP2furw0R6pG1vN3z0bQ",
      nonCopyrightImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-16",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "seniors"],
      mealTypes: ["breakfast", "afternoon-tea", "snack", "flexible"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Moroccan"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["botanical-palace", "quiet", "oasis"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "juice",
        "medina",
        "palace",
        "pastry",
        "quiet",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Jardin Secret - Café",
      neighborhood: "Mouassine",
      description: "A serene garden café situated within the restored 19th-century palace grounds of Le Jardin Secret on Rue Mouassine. Enjoy fresh juices, iced teas, and light pastries beside exotic botanical flora.",
      tip: "Requires purchasing standard admission to Le Jardin Secret. Perfect midday reading and cooling-off spot.",
      badge: "local-favorite",
      bestDishes: [
        "Iced Mint Tea with Fresh Lemon",
        "Almond Briouates",
        "Fresh Citrus Fruit Juice"
      ],
      pros: [
        "Peaceful botanical palace sanctuary right in Mouassine",
        "Wheelchair accessible and clean facilities"
      ],
      cons: [
        "Requires Le Jardin Secret garden admission ticket to access",
        "Light café snacks and pastries only (not a full restaurant)"
      ],
      googleRating: 4.5,
      googleReviewCount: 1350,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 850,
      theforkRating: 4.5,
      theforkReviewCount: 100,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1500,
      openTime: "09:30",
      closeTime: "18:30",
      googleMapsUrl: "https://maps.google.com/?q=Le+Jardin+Secret+Cafe+Marrakech",
      reservationMethod: ["walk-in"],
      reservationContact: "",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://lejardinsecretmarrakech.com",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5,
      googlePlaceId: "ChIJzWv6yGfurw0RQ4U4Q02T3oI",
      nonCopyrightImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-17",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "afternoon-tea", "snack", "flexible"],
      experienceTypes: ["cafes-tea", "traditional", "casual"],
      foodStyles: ["Cafe & Pastry", "Moroccan", "French-Moroccan"],
      cuisineTags: ["cafe-pastry"],
      archetypeAffinity: ["budget", "culture", "first-timer"],
      vibeTags: ["heritage-patisserie", "almond-sweets", "gelato"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 4,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "medina",
        "pastry",
        "terrace"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Pâtisserie des Princes",
      neighborhood: "Jemaa el-Fna",
      description: "Marrakech’s legendary pastry parlor operating since 1989 on Passage Prince Moulay Rachid, steps from Jemaa el-Fna. Renowned for authentic handmade almond sweets, cornets de gazelle, and ice creams.",
      tip: "Head upstairs to the air-conditioned salon for mint tea and pastries away from the street crowds. Pastries can be boxed by the kilo to take home.",
      badge: "local-favorite",
      bestDishes: [
        "Cornes de Gazelle",
        "Mhancha (Almond Serpent Cake)",
        "House Pistachio Gelato"
      ],
      pros: [
        "Historic 1989 pastry institution steps from Jemaa el-Fna",
        "Air-conditioned upstairs salon and gift boxes available by weight"
      ],
      cons: [
        "Ground-floor counter gets very busy",
        "No Wi-Fi"
      ],
      googleRating: 4.2,
      googleReviewCount: 2520,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 1100,
      theforkRating: 4.2,
      theforkReviewCount: 100,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 2600,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Patisserie+des+Princes+Marrakech",
      reservationMethod: ["walk-in"],
      reservationContact: "+212524443033",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5,
      googlePlaceId: "ChIJ22xOumuurw0RzQ0N9v6u8-0",
      nonCopyrightImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-18",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "drinks", "late-night"],
      experienceTypes: ["rooftop", "fine-dining", "casual"],
      foodStyles: ["Mediterranean", "Seafood", "International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["cocktail-bar", "dj-sets", "koutoubia-view"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 28,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "dinner",
        "fine",
        "late-night",
        "medina",
        "rooftop",
        "sunset",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Kabana",
      neighborhood: "Jemaa el-Fna",
      description: "A vibrant, botanical rooftop cocktail lounge and restaurant at Kissariat Ben Khalid R'mila overlooking the Koutoubia minaret and Jemaa el-Fna quarter. Features Mediterranean tapas, sushi, and DJ sets after dark.",
      tip: "One of the highest licensed rooftop bars in the Medina. Book a table at the railing for direct Koutoubia sunset views.",
      badge: "local-favorite",
      bestDishes: [
        "Kabana Signature Sushi Rolls",
        "Salmon Tartare with Avocado",
        "Craft Passion Fruit Cocktails"
      ],
      pros: [
        "Licensed rooftop cocktail bar with direct Koutoubia views",
        "Lively atmosphere with live DJ sets until 02:00"
      ],
      cons: [
        "Loud music at night—not suited for quiet conversation",
        "Upscale cocktail/tapas pricing; reservations needed for railing seats"
      ],
      googleRating: 4.4,
      googleReviewCount: 5650,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 1050,
      theforkRating: 4.4,
      theforkReviewCount: 350,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 6000,
      openTime: "11:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Kabana+Rooftop+Marrakech",
      reservationMethod: ["website", "phone"],
      reservationContact: "+212664464450",
      bookingUrl: "https://kabanamarrakech.com",
      whatsappNumber: "",
      website: "https://kabanamarrakech.com",
      instagram: "https://instagram.com/kabanamarrakech",
      viewType: "city",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 15,
      googlePlaceId: "ChIJK0tXvWjurw0R1s72aP5zM7c",
      nonCopyrightImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-19",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "hidden-gem"],
      foodStyles: ["Italian", "Moroccan", "Mediterranean"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["lemon-trees", "trattoria", "courtyard-fountain"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "dinner",
        "medina",
        "sunset",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Limoni",
      neighborhood: "Riad Laarous",
      description: "A charming Italian-Moroccan trattoria set in a quiet residential alley in Bab Taghzout near Riad Laarous. Guests dine on fresh handmade pasta and wood-fired pizza surrounded by lemon trees and zellige fountains.",
      tip: "Licensed to serve wine and beer. Located deeper in the northern medina, so drop a pin on your map beforehand.",
      badge: "local-favorite",
      bestDishes: [
        "Camel Burger with Rosemary Fries",
        "Homemade Tagliatelle with Lemon & Truffle",
        "Traditional Wood-Fired Pizza"
      ],
      pros: [
        "Romantic lemon-tree courtyard with zellige fountain",
        "Serves fresh handmade pasta alongside licensed wine and beer"
      ],
      cons: [
        "Tucked deeper into the northern Medina—watch out for unofficial alley guides",
        "No air conditioning in summer"
      ],
      googleRating: 4.6,
      googleReviewCount: 3950,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 1500,
      theforkRating: 4.5,
      theforkReviewCount: 400,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 4200,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Limoni+Marrakech",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212524383030",
      bookingUrl: "https://limonimarrakech.com",
      whatsappNumber: "",
      website: "https://limonimarrakech.com",
      instagram: "https://instagram.com/limonimarrakech",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJj7k_wWfurw0R8U6Q5c1s8s0",
      nonCopyrightImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-20",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends"],
      mealTypes: ["dinner", "late-night", "snack"],
      experienceTypes: ["market-stall", "street-food", "traditional"],
      foodStyles: ["Moroccan", "Grill & BBQ", "Seafood"],
      cuisineTags: ["moroccan-traditional", "seafood"],
      archetypeAffinity: ["budget", "adventure", "culture", "first-timer"],
      vibeTags: ["night-market", "open-air", "sensory"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 4,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["street-side", "outdoor"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "late-night",
        "medina",
        "street-food"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Street Food Market (Jemaa el-Fna)",
      neighborhood: "Jemaa el-Fna",
      description: "The pulsating heart of Marrakech street food culture. A massive open-air nocturnal food market featuring numbered stalls serving snails, skewers, fried seafood, sheep heads, and spiced broths.",
      tip: "Bench seating directly on the open square. Always confirm prices before sitting down. Stall 14 is favored for fried fish and Stall 31 for grilled skewers.",
      badge: "local",
      bestDishes: [
        "Babbouche (Herbal Snail Broth)",
        "Grilled Merguez & Kefta Brochettes",
        "Fried Calamari & Whiting Plate"
      ],
      pros: [
        "Unmatched sensory night-market energy and ultra-low street prices",
        "Wide variety of grilled meats, fried seafood, and traditional broths"
      ],
      cons: [
        "Aggressive stall touts and occasional surprise bread/olive extras",
        "Cash only; pick busy high-turnover stalls for freshest food"
      ],
      googleRating: 4.4,
      googleReviewCount: 5200,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 4500,
      theforkRating: 4.2,
      theforkReviewCount: 500,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 5500,
      openTime: "18:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Jemaa+el-Fna+Stalls+Marrakech",
      reservationMethod: ["walk-in"],
      reservationContact: "",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5,
      googlePlaceId: "ChIJj7m9pWuurw0R1s4_1vQe0u8",
      nonCopyrightImage: "https://images.unsplash.com/photo-1509315811355-57bd3b7771b6?auto=format&fit=crop&w=800&q=80"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-mcdonalds-gueliz",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["International", "Grill & BBQ"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["fast-food", "terrace", "mccafe"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6.5,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["street-food", "late-night", "breakfast", "budget", "terrace", "dry", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "McDonald's Gueliz",
      neighborhood: "Guéliz",
      district: "Centre Guéliz",
      description: "Iconic Guéliz branch on Avenue Mohammed V offering indoor air-conditioned seating, sidewalk café terrace, McCafé, and late-night burgers.",
      tip: "Handy late-night stop on Avenue Mohammed V open until 02:00 with air conditioning and McCafé.",
      badge: "local-favorite",
      bestDishes: [
        "Big Mac Meal",
        "McChicken",
        "McCafé Espresso & Pastries"
      ],
      pros: [
        "Central Avenue Mohammed V location open 07:00 to 02:00",
        "Halal-certified, air-conditioned, and wheelchair accessible"
      ],
      cons: [
        "Very busy during evenings and weekends",
        "Limited street parking outside"
      ],
      googleRating: 4,
      googleReviewCount: 7800,
      openTime: "07:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Boulevard Mohammed V, Guéliz, Marrakech",
        lat: 31.6348,
        lng: -8.0125
      },
      googleMapsUrl: "https://maps.google.com/?cid=1209384756192837465",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://mcdonalds.ma",
      instagram: "https://instagram.com/mcdonalds_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-kfc-gueliz",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["fast-food", "fried-chicken", "quick-bite"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["street-food", "late-night", "budget", "dry", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "KFC Gueliz",
      neighborhood: "Guéliz",
      district: "Guéliz",
      description: "Centrally located on Avenue Mohammed V in Guéliz, serving original recipe fried chicken, hot wings, and family buckets.",
      tip: "Great for quick takeaway or late-night delivery via Glovo until 01:00.",
      badge: "local-favorite",
      bestDishes: [
        "Zinger Sandwich",
        "Crispy Chicken Bucket",
        "Spicy Hot Wings"
      ],
      pros: [
        "Central Avenue Mohammed V spot open until 01:00",
        "Halal-certified with delivery and AC"
      ],
      cons: [
        "Limited vegetarian options",
        "Can experience counter queues at dinner rush"
      ],
      googleRating: 3.9,
      googleReviewCount: 2900,
      openTime: "11:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Boulevard Mohammed V, Guéliz, Marrakech",
        lat: 31.6335,
        lng: -8.0118
      },
      googleMapsUrl: "https://maps.google.com/?cid=8912304918273645123",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://kfc.ma",
      instagram: "https://instagram.com/kfc_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-burger-king-carre-eden",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["International", "Grill & BBQ"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["mall-food-court", "flame-grilled", "quick-bite"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6.5,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["street-food", "budget", "dry", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Burger King Carré Eden",
      neighborhood: "Guéliz",
      district: "Carré Eden Shopping Center",
      description: "Modern food court Burger King inside the Carré Eden shopping mall in Guéliz, serving Whoppers, crispy fries, and milkshakes.",
      tip: "Convenient stop while shopping at Carré Eden, with underground mall parking and air conditioning.",
      badge: "local-favorite",
      bestDishes: [
        "Flame-Grilled Whopper",
        "Chicken Royale",
        "King Fries & Milkshake"
      ],
      pros: [
        "Underground mall parking and cool AC inside Carré Eden",
        "Halal-certified with delivery available"
      ],
      cons: [
        "Food-court seating can feel busy at lunchtime",
        "Standard fast-food fare"
      ],
      googleRating: 4,
      googleReviewCount: 2450,
      openTime: "11:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Carré Eden, Boulevard Mohammed V, Guéliz, Marrakech",
        lat: 31.6362,
        lng: -8.0142
      },
      googleMapsUrl: "https://maps.google.com/?cid=1029384756192837465",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://burgerking.ma",
      instagram: "https://instagram.com/burgerkingmaroc",
      languagesSpoken: ["Arabic", "French", "English"]
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-pizza-hut-menara-mall",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "rooftop"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["mall-terrace", "atlas-views", "family-friendly"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 7,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["budget", "terrace", "dry", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Pizza Hut Menara Mall",
      neighborhood: "Hivernage",
      district: "Avenue Mohammed VI",
      description: "Family-friendly Pizza Hut on the top food court level of Menara Mall with views toward the Atlas Mountains and outdoor terrace seating.",
      tip: "Grab a terrace seat on the upper mall level for open-air views toward the Atlas Mountains.",
      badge: "local-favorite",
      bestDishes: [
        "Super Supreme Pan Pizza",
        "Cheesy Crust Margherita",
        "Garlic Bread & Wings"
      ],
      pros: [
        "Upper-level mall terrace with Atlas Mountain views",
        "Easy underground parking, AC, and family-friendly layout"
      ],
      cons: [
        "Standard chain pizza rather than wood-fired Neapolitan",
        "Mall food court gets noisy on weekend evenings"
      ],
      googleRating: 3.9,
      googleReviewCount: 1850,
      openTime: "11:30",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Menara Mall, Avenue Mohammed VI, Hivernage, Marrakech",
        lat: 31.6186,
        lng: -8.0162
      },
      googleMapsUrl: "https://maps.google.com/?cid=7819230491827364512",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://pizzahut.ma",
      instagram: "https://instagram.com/pizzahut_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-marrakech-dominos-gueliz",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "nomad"],
      vibeTags: ["delivery", "carryout", "quick-pizza"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["late-night", "budget", "dry", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Domino's Pizza Gueliz",
      neighborhood: "Guéliz",
      district: "Carré Eden",
      description: "Carry-out and express delivery branch at Centre Commercial Carré Eden serving freshly baked hand-tossed pizzas, stuffed cheesy bread, and lava cakes in central Guéliz.",
      tip: "Located at Carré Eden (Rue Tarik Bnou Ziad / Av. Mohammed V); great for quick takeaway or delivery to Guéliz hotels.",
      badge: "local-favorite",
      bestDishes: [
        "Pepperoni Extravaganzza Pizza",
        "Stuffed Cheesy Bread",
        "Chocolate Lava Crunch Cake"
      ],
      pros: [
        "Fast carryout and delivery right in Carré Eden, Guéliz",
        "Halal-certified with mall parking and AC"
      ],
      cons: [
        "Small seating footprint geared toward takeaway and delivery",
        "Mixed reviews on delivery speed during peak hours"
      ],
      googleRating: 3.6,
      googleReviewCount: 247,
      openTime: "11:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Centre Commercial Carré Eden, Rue Tarik Bnou Ziad / Avenue Mohammed V, Guéliz, Marrakech",
        lat: 31.6362,
        lng: -8.0142
      },
      googleMapsUrl: "https://maps.google.com/?q=Domino's+Pizza+Carre+Eden+Gueliz+Marrakech",
      reservationMethod: ["walk-in", "phone", "website"],
      reservationContact: "+212524430555",
      bookingUrl: "https://www.dominos.ma",
      whatsappNumber: "",
      website: "https://www.dominos.ma",
      instagram: "https://instagram.com/dominosmaroc",
      languagesSpoken: ["Arabic", "French", "English"]
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  // =========================================================================
  // DAR YACOUT MARRAKECH
  // =========================================================================
  {
    id: "e-marrakech-dar-yacout",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "business-friendly", "seniors"],
      mealTypes: ["dinner", "drinks"],
      experienceTypes: ["fine-dining", "traditional", "rooftop"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["luxury", "first-timer", "culture"],
      vibeTags: ["majestic", "theatrical", "romantic", "opulent"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 70,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: ["monday"],
      seatingTypes: ["indoor", "courtyard", "rooftop"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard"],
      tags: ["fine", "dinner", "alcohol", "rooftop", "medina", "palace", "pastilla", "tanjia", "couscous", "sunset"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Dar Yacout",
      neighborhood: "Bab Doukkala",
      description: "An imperial culinary institution in Bab Doukkala designed by renowned architect Bill Willis for founder Mohamed Zkhiri. Guests begin the evening with aperitifs on the rooftop terrace overlooking the Koutoubia before descending to candlelit riad salons and poolside courtyards for a legendary multi-course Moroccan gastronomic banquet with live Andalusian and Gnawa music.",
      tip: "Closed on Mondays and open for dinner only. Arrive promptly at 19:00 to enjoy an aperitif on the rooftop terrace as the sun sets over the Medina before descending to dinner.",
      badge: "splurge",
      bestDishes: [
        "Menu Dégustation Yacout",
        "Épaule d'Agneau Rôtie Mhamer au Safran",
        "Pastilla au Pigeon ou Poulet",
        "Tajine de Poulet Beldi au Citron & Olives",
        "Couscous Royal aux Sept Légumes",
        "Pastilla au Lait et Amandes"
      ],
      pros: [
        "Spectacular riad architecture by Bill Willis with open fireplaces, reflecting pool, and zellige",
        "Sunset rooftop drinks followed by a regal multi-course banquet",
        "Live Gnaoua musicians and classical Andalusian lute players during dinner",
        "Full licensed wine cellar featuring fine Moroccan and French vintages"
      ],
      cons: [
        "Fixed-price banquet menu (approx. 700 MAD per person) representing a splurge budget",
        "Closed on Mondays and closed for lunch"
      ],
      googleRating: 4.4,
      googleReviewCount: 1890,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 1340,
      theforkRating: 4.3,
      theforkReviewCount: 410,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 1890,
      openTime: "19:00",
      closeTime: "23:00",
      weeklySchedule: [
        { day: "Monday", openTime: "19:00", closeTime: "23:00", isClosed: true, note: "Fermé le lundi" },
        { day: "Tuesday", openTime: "19:00", closeTime: "23:00", isClosed: false },
        { day: "Wednesday", openTime: "19:00", closeTime: "23:00", isClosed: false },
        { day: "Thursday", openTime: "19:00", closeTime: "23:00", isClosed: false },
        { day: "Friday", openTime: "19:00", closeTime: "23:00", isClosed: false },
        { day: "Saturday", openTime: "19:00", closeTime: "23:00", isClosed: false },
        { day: "Sunday", openTime: "19:00", closeTime: "23:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "79 Derb Sidi Ahmed Soussi, Bab Doukkala, Médina, Marrakech 40000, Morocco",
        lat: 31.6366,
        lng: -7.9935
      },
      address: "79 Derb Sidi Ahmed Soussi, Bab Doukkala, Médina, Marrakech 40000, Morocco",
      coordinates: {
        lat: 31.6366,
        lng: -7.9935
      },
      googleMapsUrl: "https://maps.google.com/?q=Dar+Yacout+Marrakech",
      reservationMethod: ["phone", "website", "email"],
      reservationContact: "+212524382929",
      whatsappNumber: "",
      bookingUrl: "https://daryacout.com/reservations",
      website: "https://daryacout.com",
      instagram: "https://instagram.com/daryacoutmarrakech",
      languagesSpoken: ["French", "Arabic/Darija", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "aperitifs-salades",
            title: "Apéritif en Terrasse & Salades d'Accueil (Starters & Mezze)",
            description: "Boisson d'accueil sur le toit panoramique suivie de la ronde des salades marocaines cuisinées",
            items: [
              {
                id: "yacout-salades-assortiment",
                name: "Variété de Salades Marocaines Cuisinées",
                localName: "تشكيلة السلطات المغربية التقليدية المطهوة والمتبلة",
                translations: {
                  ar: "تشكيلة السلطات المغربية التقليدية المطهوة والمتبلة",
                  en: "Traditional tasting array of slow-cooked Moroccan spiced salads, zaalouk, and sweet taktouka",
                  es: "Surtido tradicional de ensaladas marroquíes cocinadas, zaalouk y taktouka especiada",
                  de: "Klassische Auswahl fein gewürzter marokkanischer Salate, Zaalouk und Taktouka"
                },
                price: 150,
                isSignature: true,
                dietary: ["vegetarian", "vegan", "halal"],
                portionNotes: "Compris dans le menu dégustation impérial"
              },
              {
                id: "yacout-harira-fassia",
                name: "Harira Traditionnelle au Safran & Dattes Majhoul",
                localName: "الحريرة المغربية الأصيلة بالزعفران والتمر المجهول",
                translations: {
                  ar: "الحريرة المغربية الأصيلة بالزعفران والتمر المجهول",
                  en: "Velvety imperial Moroccan harira soup scented with saffron and fresh coriander, served with dates",
                  es: "Sopa imperial marroquí harira aromatizada con azafrán, servida con dátiles",
                  de: "Feine marokkanische Harira-Suppe mit Safran, serviert mit süßen Medjool-Datteln"
                },
                price: 90,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "pastillas-plats-festifs",
            title: "Pastillas Royales & Plats de Fête (Imperial Pastilla & Roasts)",
            description: "Feuilletés croustillants et viandes nobles dorées au four",
            items: [
              {
                id: "yacout-pastilla-pigeon",
                name: "Pastilla Traditionnelle au Pigeon ou au Poulet",
                localName: "بسطيلة ملكية بالحمام أو الدجاج واللوز المحمص والقرفة",
                translations: {
                  ar: "بسطيلة ملكية بالحمام أو الدجاج واللوز المحمص والقرفة",
                  en: "Imperial sweet and savory pigeon or chicken pastilla layered with crushed roasted almonds and cinnamon",
                  es: "Pastela imperial de pichón o pollo con almendras tostadas crujientes y canela",
                  de: "Königliche Tauben- oder Hähnchenpastilla mit gerösteten Mandeln und Zimt"
                },
                price: 220,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "yacout-epaule-mhamer",
                name: "Épaule d'Agneau Rôtie Mhamer au Safran de Taliouine",
                localName: "كتف خروف محمر بالفرن مع صلصة الزعفران الحر تاليوين",
                translations: {
                  ar: "كتف خروف محمر بالفرن مع صلصة الزعفران الحر تاليوين",
                  en: "Slow-steamed and golden oven-roasted lamb shoulder glazed with Taliouine saffron sauce",
                  es: "Paletilla de cordero asada al horno dorada con salsa de azafrán de Taliouine",
                  de: "Im Ofen knusprig geröstete Lammschulter mit feiner Safranreduktion aus Taliouine"
                },
                price: 320,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Plat festif emblématique de la maison"
              }
            ]
          },
          {
            id: "tagines-couscous",
            title: "Tajines Impériaux & Couscous Royal (Tagines & Couscous)",
            description: "Plats mijotés à feu doux et semoule fine cuite à la vapeur de bouillon",
            items: [
              {
                id: "yacout-poulet-citron",
                name: "Poulet Beldi aux Citrons Confits & Olives Meslalla",
                localName: "طاجين الدجاج البلدي بالحامض المصير وزيتون المسلالة",
                translations: {
                  ar: "طاجين الدجاج البلدي بالحامض المصير وزيتون المسلالة",
                  en: "Free-range farm chicken braised with cured Beldi lemons, purple Meslalla olives, and ginger",
                  es: "Pollo campero estofado con limones confitados, aceitunas meslalla y jengibre",
                  de: "Freilandhuhn-Tagine geschmort mit eingelegten Salzzitronen und Meslalla-Oliven"
                },
                price: 240,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "yacout-couscous-sept-legumes",
                name: "Couscous Royal aux Sept Légumes de Saison",
                localName: "كسكس ملكي بسبع خضار ولحم الغنم المطهو على البخار",
                translations: {
                  ar: "كسكس ملكي بسبع خضار ولحم الغنم المطهو على البخار",
                  en: "Triple-steamed fine semolina couscous with tender lamb and seven sweet garden vegetables",
                  es: "Cuscús real marroquí de sémola fina con cordero tierno y siete verduras",
                  de: "Königlicher Couscous mit zartem Lammfleisch und sieben Gemüsesorten"
                },
                price: 260,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "douceurs-palais",
            title: "Douceurs du Palais & Thé Cérémoniel (Sweets & Tea Ritual)",
            description: "Desserts fins parfumés à l'eau de fleur d'oranger et thé à la menthe",
            items: [
              {
                id: "yacout-pastilla-lait",
                name: "Pastilla au Lait & Amandes Effilées (Khoubzat el Halib)",
                localName: "بسطيلة بالحليب المعطر بماء الزهر واللوز المحمص",
                translations: {
                  ar: "بسطيلة بالحليب المعطر بماء الزهر واللوز المحمص",
                  en: "Crisp golden pastry sheets floating in warm orange blossom milk custard with toasted almonds",
                  es: "Hojaldre crujiente bañado en crema de leche aromatizada con azahar y almendras",
                  de: "Knusprige Teigblätter in warmer Orangenblüten-Milchcreme mit gerösteten Mandeln"
                },
                price: 110,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "yacout-oranges-cannelle",
                name: "Salade d'Oranges Rafraîchissante à la Cannelle",
                localName: "سلطة البرتقال الطازج بالقرفة وماء الزهر المقطر",
                translations: {
                  ar: "سلطة البرتقال الطازج بالقرفة وماء الزهر المقطر",
                  en: "Chilled orange carpaccio dusted with Ceylon cinnamon, fresh mint, and orange blossom water",
                  es: "Rodajas de naranja fresca perfumadas con canela y agua de azahar",
                  de: "Kühler Orangensalat mit feinem Zimt, Minze und Orangenblütenwasser"
                },
                price: 75,
                dietary: ["vegan", "halal"]
              }
            ]
          }
        ]
      }
    },
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Fixed 700 MAD + Drinks",
        description: "Set multi-course banquet costs ~700 MAD per guest; bottled water, cocktails, and wine cellar selections are billed separately and raise checks fast.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Palace Kitchen",
        description: "Spotless historic palace kitchen using triple-washed herbs, purified ice, and whole-roasted cuts prepared specifically for evening reservations.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Royal Banquet Feast",
        description: "Classic imperial Moroccan feast with cooked salads, pigeon pastilla, mhamer lamb, and couscous—arrive very hungry for the generous marathon.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Escort Alley Arrival",
        description: "Candlelit Bill Willis palace courtyard with fireplaces inside, though Bab Doukkala side alleys are dark at night—arrange the riad door escort.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Theatrical Hospitality",
        description: "Ceremonial white-glove service starting with rooftop aperitifs at 19:00 and live Andalusian music; reservations are mandatory.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  // =========================================================================
  // NOBU RESTAURANT & ROOFTOP MARRAKECH
  // =========================================================================
  {
    id: "e-marrakech-nobu",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly", "large-groups"],
      mealTypes: ["lunch", "dinner", "late-night", "drinks"],
      experienceTypes: ["fine-dining", "rooftop", "casual"],
      foodStyles: ["International", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["glamorous", "cosmopolitan", "chic", "scenic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 85,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard", "apple_pay"],
      tags: ["fine", "dinner", "alcohol", "rooftop", "sushi", "late-night", "luxury"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Nobu Restaurant & Rooftop Marrakech",
      neighborhood: "Hivernage",
      description: "World-renowned Chef Nobu Matsuhisa brings his iconic Japanese-Peruvian Nikkei gastronomy to the luxury Nobu Hotel in Hivernage. Features legendary signatures like Black Cod Miso and Yellowtail Jalapeño alongside an extraordinary 360-degree circular panoramic rooftop garden lounge overlooking the Atlas Mountains and the Medina.",
      tip: "Book the indoor dining room for an intimate fine-dining experience, or head up to the Rooftop Garden & Sushi Bar around sunset for 360° views across the Atlas Mountains with craft mixology cocktails and live DJ sets.",
      badge: "splurge",
      bestDishes: [
        "Black Cod Miso",
        "Yellowtail Jalapeño",
        "Rock Shrimp Tempura Creamy Spicy",
        "Japanese Wagyu Beef A5",
        "Chilean Sea Bass Umami",
        "Nobu Style Wagyu Sliders"
      ],
      pros: [
        "World-renowned Japanese-Peruvian Nikkei signatures prepared with prime ingredients",
        "Breathtaking 360° panoramic rooftop garden with circular pool and Atlas views",
        "Sophisticated cocktail mixology bar and curated international DJ sets",
        "Valet parking and exceptional hospitality in central Hivernage"
      ],
      cons: [
        "Luxury fine-dining price range reflecting international palace standards",
        "Smart elegant dress code strictly enforced (shorts are not permitted in the evening)"
      ],
      googleRating: 4.4,
      googleReviewCount: 1160,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 380,
      theforkRating: 4.4,
      theforkReviewCount: 150,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 1160,
      openTime: "12:00",
      closeTime: "01:00",
      weeklySchedule: [
        { day: "Monday", openTime: "12:00", closeTime: "01:00", isClosed: false },
        { day: "Tuesday", openTime: "12:00", closeTime: "01:00", isClosed: false },
        { day: "Wednesday", openTime: "12:00", closeTime: "01:00", isClosed: false },
        { day: "Thursday", openTime: "12:00", closeTime: "01:00", isClosed: false },
        { day: "Friday", openTime: "12:00", closeTime: "02:00", isClosed: false, note: "Rooftop DJ set & late night service" },
        { day: "Saturday", openTime: "12:00", closeTime: "02:00", isClosed: false, note: "Rooftop DJ set & late night service" },
        { day: "Sunday", openTime: "12:00", closeTime: "01:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Avenue Echouhada et Rue du Temple, Hivernage, Marrakech 40000, Morocco",
        lat: 31.6215,
        lng: -8.0055
      },
      address: "Avenue Echouhada et Rue du Temple, Hivernage, Marrakech 40000, Morocco",
      coordinates: {
        lat: 31.6215,
        lng: -8.0055
      },
      googleMapsUrl: "https://maps.google.com/?q=Nobu+Restaurant+Marrakech",
      reservationMethod: ["website", "phone", "email"],
      reservationContact: "+212524424255",
      whatsappNumber: "",
      bookingUrl: "https://www.nobuhotels.com/marrakech/dining/nobu-restaurant/",
      website: "https://noburestaurants.com/marrakech",
      instagram: "https://instagram.com/nobumarrakech",
      languagesSpoken: ["English", "French", "Arabic/Darija", "Japanese"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "nobu-cold-starters",
            title: "Entrées Froides Nobu (Cold Dishes & Sashimi)",
            description: "Classiques froids signatures Nobu et tiraditos péruviens",
            items: [
              {
                id: "nobu-yellowtail-jalapeno",
                name: "Yellowtail Jalapeño",
                localName: "ساشيمي سمك السريولا مع شرائح الهالبينو وصلصة اليوزو",
                translations: {
                  ar: "ساشيمي سمك السريولا مع شرائح الهالبينو وصلصة اليوزو",
                  en: "Thinly sliced Pacific yellowtail sashimi with serrano jalapeño and yuzu-soy sauce",
                  es: "Sashimi de pez limón con rodajas de jalapeño y aderezo de soja y yuzu",
                  de: "Feine Gelbschwanz-Makrelen-Sashimi mit Jalapeño-Scheiben und Yuzu-Sojasauce"
                },
                price: 300,
                isSignature: true,
                isSpicy: true,
                dietary: ["halal"]
              },
              {
                id: "nobu-salmon-tataki",
                name: "Salmon Tataki Karashi Su Miso",
                localName: "تاتاكي السلمون المحمر مع صلصة الميسو والخردل الياباني",
                translations: {
                  ar: "تاتاكي السلمون المحمر مع صلصة الميسو والخردل الياباني",
                  en: "Seared Atlantic salmon tataki with sweet mustard karashi su miso dressing",
                  es: "Tataki de salmón sellado a la brasa con salsa de miso dulce y mostaza japonesa",
                  de: "Kurz angebratenes Lachs-Tataki mit süßer Karashi-Miso-Senfsauce"
                },
                price: 280,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "nobu-hot-classics",
            title: "Plats Chauds Signatures (Nobu Hot Classics)",
            description: "Les plats chauds légendaires créés par Nobu Matsuhisa",
            items: [
              {
                id: "nobu-black-cod-miso",
                name: "Black Cod Miso",
                localName: "سمك القد الأسود المكرمل في صلصة الميسو الحلوة الشهيرة",
                translations: {
                  ar: "سمك القد الأسود المكرمل في صلصة الميسو الحلوة الشهيرة",
                  en: "Iconic Alaskan black cod marinated in sweet den miso for 72 hours and caramelized",
                  es: "Bacalao negro de Alaska marinado en miso dulce caramelizado",
                  de: "Karamellisierter schwarzer Kabeljau mariniert in süßer Miso-Sauce"
                },
                price: 650,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "La signature mondiale de Nobu Matsuhisa"
              },
              {
                id: "nobu-rock-shrimp-tempura",
                name: "Rock Shrimp Tempura Creamy Spicy",
                localName: "روبيان تمبورا المقرمش بصلصة المايونيز الكريمية الحارة",
                translations: {
                  ar: "روبيان تمبورا المقرمش بصلصة المايونيز الكريمية الحارة",
                  en: "Crispy rock shrimp tempura tossed in signature creamy spicy chili sauce or ponzu",
                  es: "Tempura crujiente de gambas roca con salsa cremosa picante y cebollino",
                  de: "Knusprige Felsengarnelen-Tempura mit cremiger Chilisauce oder Ponzu"
                },
                price: 460,
                isSignature: true,
                isSpicy: true,
                dietary: ["halal"]
              },
              {
                id: "nobu-chilean-sea-bass",
                name: "Chilean Sea Bass Umami",
                localName: "سمك القاروص التشيلي المطهو بنكهة الأومامي الغنية",
                translations: {
                  ar: "سمك القاروص التشيلي المطهو بنكهة الأومامي الغنية",
                  en: "Pan-roasted melt-in-mouth Chilean sea bass in rich dashi umami glaze",
                  es: "Lubina chilena al horno glaseada con salsa umami dashi",
                  de: "Zarter chilenischer Seebarsch in reichhaltiger Umami-Dashi-Glasur"
                },
                price: 710,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "nobu-wagyu-grill",
            title: "Bœuf Wagyu A5 & Grillades (Japanese Wagyu & Robata)",
            description: "Bœuf wagyu japonais certifié A5 et découpes nobles",
            items: [
              {
                id: "nobu-wagyu-a5",
                name: "Bœuf Wagyu Japonais Grade A5 (75g)",
                localName: "لحم الواغيو الياباني الأصيل درجة A5 مشوي حسب الرغبة",
                translations: {
                  ar: "لحم الواغيو الياباني الأصيل درجة A5 مشوي حسب الرغبة",
                  en: "Certified Japanese A5 Wagyu beef prepared as Tataki, New Style, or Toban Yaki",
                  es: "Auténtico buey Wagyu japonés certificado A5 preparado a elección",
                  de: "Zertifiziertes japanisches A5 Wagyu-Rindfleisch zubereitet nach Wahl"
                },
                price: 1500,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Prix par portion de 75g"
              },
              {
                id: "nobu-ribeye-anticucho",
                name: "USDA Prime Ribeye Steak Anticucho",
                localName: "شريحة ريب آي أنجوس مشوية بصلصة الأنتيكوتشو البيروفية",
                translations: {
                  ar: "شريحة ريب آي أنجوس مشوية بصلصة الأنتيكوتشو البيروفية",
                  en: "Prime grilled ribeye steak with Peruvian anticucho red chili sauce",
                  es: "Chuletón rib eye de ternera con salsa peruana de ají anticucho",
                  de: "Gegrilltes Prime Rib-Eye-Steak mit peruanischer Anticucho-Chilisauce"
                },
                price: 870,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "nobu-sushi-sashimi",
            title: "Sushis, Makis & Rolls (Sushi Bar)",
            description: "Poissons nobles taillés minute par les maîtres sushis",
            items: [
              {
                id: "nobu-toro-tartare",
                name: "Toro Tartare with Caviar",
                localName: "تارتار التونة الزعنفية الفاخرة مع الكافيار الإمبراطوري",
                translations: {
                  ar: "تارتار التونة الزعنفية الفاخرة مع الكافيار الإمبراطوري",
                  en: "Finely diced fatty tuna belly tartare crowned with imperial caviar and wasabi soy",
                  es: "Tartar de ventresca de atún toro coronado con caviar imperial y wasabi",
                  de: "Fettes Thunfischbauch-Tatar (Toro) mit Imperial Kaviar und feiner Wasabi-Sauce"
                },
                price: 490,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "nobu-house-special-roll",
                name: "Nobu House Special Roll",
                localName: "رول نوبو الخاص بتشكيلة الأسماك النبيلة والأفوكادو",
                translations: {
                  ar: "رول نوبو الخاص بتشكيلة الأسماك النبيلة والأفوكادو",
                  en: "Signature maki roll filled with tuna, salmon, yellowtail, avocado, and tobiko",
                  es: "Rollo especial de la casa con atún, salmón, pez limón y aguacate",
                  de: "Haus-Spezialrolle gefüllt mit Thunfisch, Lachs, Gelbschwanz und Avocado"
                },
                price: 240,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "nobu-desserts",
            title: "Desserts Signatures (Sweet Delights)",
            description: "Douceurs japonaises et créations sucrées Nobu",
            items: [
              {
                id: "nobu-bento-box",
                name: "Nobu Chocolate Bento Box",
                localName: "صندوق بينتو الشوكولاتة الذائبة مع آيس كريم الشاي الأخضر",
                translations: {
                  ar: "صندوق بينتو الشوكولاتة الذائبة مع آيس كريم الشاي الأخضر",
                  en: "Warm molten Valrhona chocolate fondant served with green tea matcha ice cream",
                  es: "Coulant caliente de chocolate Valrhona en caja bento con helado de matcha",
                  de: "Warmer Valrhona-Schokoladenkuchen in der Bento-Box mit grünem Matcha-Eis"
                },
                price: 160,
                isSignature: true,
                dietary: ["vegetarian"]
              },
              {
                id: "nobu-mochi-ice-cream",
                name: "Assortiment de Mochis Glacés Artisanaux",
                localName: "تشكيلة حلوى الموتشي اليابانية المثلجة بنكهات متنوعة",
                translations: {
                  ar: "تشكيلة حلوى الموتشي اليابانية المثلجة بنكهات متنوعة",
                  en: "Trio of artisanal Japanese frozen mochi: matcha, mango, and coconut",
                  es: "Trío de mochis japoneses helados artesanos de té verde, mango y coco",
                  de: "Dreierlei hausgemachte japanische Eismochis: Matcha, Mango und Kokosnuss"
                },
                price: 130,
                dietary: ["vegetarian"]
              }
            ]
          }
        ]
      }
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  // =========================================================================
  // RESTAURANT DÉLICES FERKOUS MARRAKECH
  // =========================================================================
  {
    id: "e-marrakech-ferkous",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual", "street-food"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Grill & BBQ"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "culture", "nomad"],
      vibeTags: ["authentic", "local", "lively", "homestyle"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 10,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["tanjia", "tagine", "couscous", "budget", "dry", "dinner", "lunch", "street-food"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Délices Ferkous",
      neighborhood: "Guéliz",
      description: "Founded by celebrated Moroccan actor and Marrakech native Abdellah Ferkous, this bustling family restaurant on Avenue Hassan II near the central train station is famed for serving some of the city's best and most generous Tanjia Marrakchia, slow-simmered chicken tagines, charcoal grills, and Friday couscous at genuinely local prices.",
      tip: "Order the signature Tanjia Marrakchia (available in individual portions or by the kilo for sharing) with crusty bread and a pot of fresh hot mint tea. The Friday couscous is a big favorite with local families.",
      badge: "local-favorite",
      bestDishes: [
        "Tanjia Marrakchia au Bœuf ou Agneau",
        "Tagine de Poulet Beldi au Citron Confit",
        "Couscous du Vendredi aux Sept Légumes",
        "Brochettes de Kefta au Charbon",
        "Salade Marocaine Taktouka & Zaalouk",
        "Thé à la Menthe Fraîche"
      ],
      pros: [
        "Authentic, slow-braised Tanjia Marrakchia bursting with smen, cumin, and preserved lemon",
        "Very reasonable, local-friendly pricing directly opposite the train station in Guéliz",
        "Spacious indoor and outdoor terrace seating",
        "Welcoming, warm Marrakchi hospitality"
      ],
      cons: [
        "Strictly dry (alcohol-free)",
        "Can get extremely busy during lunch hours, especially on Fridays"
      ],
      googleRating: 4.3,
      googleReviewCount: 1520,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 310,
      theforkRating: 4.2,
      theforkReviewCount: 90,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 4650,
      openTime: "11:00",
      closeTime: "23:30",
      weeklySchedule: [
        { day: "Monday", openTime: "11:00", closeTime: "23:30", isClosed: false },
        { day: "Tuesday", openTime: "11:00", closeTime: "23:30", isClosed: false },
        { day: "Wednesday", openTime: "11:00", closeTime: "23:30", isClosed: false },
        { day: "Thursday", openTime: "11:00", closeTime: "23:30", isClosed: false },
        { day: "Friday", openTime: "11:00", closeTime: "23:30", isClosed: false, note: "Couscous traditionnel servi à midi" },
        { day: "Saturday", openTime: "11:00", closeTime: "23:30", isClosed: false },
        { day: "Sunday", openTime: "11:00", closeTime: "23:30", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Avenue Hassan II (en face de la Gare ONCF & Hôtel Ibis), Guéliz, Marrakech 40000, Morocco",
        lat: 31.6305,
        lng: -8.0175
      },
      address: "Avenue Hassan II (en face de la Gare ONCF & Hôtel Ibis), Guéliz, Marrakech 40000, Morocco",
      coordinates: {
        lat: 31.6305,
        lng: -8.0175
      },
      googleMapsUrl: "https://maps.google.com/?q=Delices+Ferkous+Marrakech",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212524434870",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["Arabic/Darija", "French"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "tanjia-marrakchia",
            title: "La Tanjia Marrakchia Artisanale (Clay-Pot Tanjia)",
            description: "Spécialité culinaire emblématique de Marrakech mijotée dans la jarre de terre cuite",
            items: [
              {
                id: "ferkous-tanjia-portion",
                name: "Tanjia Marrakchia Traditionnelle au Bœuf",
                localName: "طنجية مراكشية أصيلة بلحم العجل والكمون والسمن البلدي",
                translations: {
                  ar: "طنجية مراكشية أصيلة بلحم العجل والكمون والسمن البلدي",
                  en: "Authentic Marrakech clay-pot beef tanjia slow-cooked with cumin, smen butter, and preserved lemon",
                  es: "Auténtica tanjia marrakchí de ternera en vasija de barro cocinada a fuego lento con comino y limón",
                  de: "Echte Marrakesch-Tanjia aus dem Tonkrug mit zartem Rindfleisch, Kreuzkümmel und Salzzitrone"
                },
                price: 90,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "La spécialité vedette du restaurant"
              },
              {
                id: "ferkous-tanjia-kilo",
                name: "Tanjia Marrakchia (1 kg à partager)",
                localName: "طنجية مراكشية 1 كلغ للمشاركة مع العائلة والأصدقاء",
                translations: {
                  ar: "طنجية مراكشية 1 كلغ للمشاركة مع العائلة والأصدقاء",
                  en: "Full 1 kg sharing jar of traditional Marrakech tanjia served with warm khobz bread",
                  es: "Vasija de 1 kg de tanjia tradicional para compartir con pan marroquí",
                  de: "Großer 1-kg-Tontopf traditionelle Marrakesch-Tanjia zum Teilen mit frischem Brot"
                },
                price: 240,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Idéal pour 3 à 4 convives"
              }
            ]
          },
          {
            id: "tajines-traditionnels",
            title: "Tajines du Terroir (Slow-Cooked Tagines)",
            description: "Plats mijotés minute dans des plats traditionnels en terre cuite",
            items: [
              {
                id: "ferkous-tajine-poulet",
                name: "Tagine de Poulet Beldi au Citron Confit & Olives",
                localName: "طاجين الدجاج البلدي بالحامض المصير والزيتون المتبل",
                translations: {
                  ar: "طاجين الدجاج البلدي بالحامض المصير والزيتون المتبل",
                  en: "Farm chicken tagine simmered with preserved lemon, cured olives, and saffron ginger gravy",
                  es: "Tajine de pollo con limones confitados, aceitunas y salsa de jengibre y azafrán",
                  de: "Hähnchentagine mit Salzzitronen, Oliven und pikanter Safransauce"
                },
                price: 65,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "ferkous-tajine-kefta",
                name: "Tagine de Kefta aux Œufs & Sauce Tomate",
                localName: "طاجين كفتة اللحم المفروم بالطماطم والبيض",
                translations: {
                  ar: "طاجين كفتة اللحم المفروم بالطماطم والبيض",
                  en: "Spiced minced beef meatballs in rich tomato sauce topped with farm eggs",
                  es: "Tajine de albóndigas de kefta en salsa de tomate con huevos cuajados",
                  de: "Kefta-Tagine mit würzigen Rinderhackbällchen in Tomatensauce und pochierten Eiern"
                },
                price: 60,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "grillades-couscous",
            title: "Grillades au Charbon & Couscous (Grills & Friday Couscous)",
            description: "Brochettes cuites sur braises ardentes et semoule du vendredi",
            items: [
              {
                id: "ferkous-couscous-vendredi",
                name: "Couscous Traditionnel aux Sept Légumes (Vendredi)",
                localName: "كسكس الجمعة البلدي باللحم والسبع خضار",
                translations: {
                  ar: "كسكس الجمعة البلدي باللحم والسبع خضار",
                  en: "Traditional Friday steamed semolina couscous with beef and 7 seasonal vegetables",
                  es: "Cuscús tradicional de los viernes con ternera y siete verduras",
                  de: "Traditioneller Freitags-Couscous mit Rindfleisch und sieben Gemüsesorten"
                },
                price: 65,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Servi tous les vendredis à midi"
              },
              {
                id: "ferkous-grillades-mixtes",
                name: "Plat de Brochettes Mixtes (Kefta, Poulet, Merguez)",
                localName: "صحن مشاوي مشكلة على الفحم مع البطاطس المقلية والسلطة",
                translations: {
                  ar: "صحن مشاوي مشكلة على الفحم مع البطاطس المقلية والسلطة",
                  en: "Charcoal-grilled mixed skewer platter with kefta, chicken, merguez, and fries",
                  es: "Plato combinado de brochetas mixtas a la brasa con patatas fritas",
                  de: "Gemischte Spieße vom Holzkohlegrill mit Kefta, Hähnchen, Merguez und Pommes"
                },
                price: 70,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "salades-douceurs",
            title: "Salades Fraîches & Thé à la Menthe (Salads & Tea)",
            description: "Entrées fraîches marocaines et thé à la menthe traditionnel",
            items: [
              {
                id: "ferkous-salade-marocaine",
                name: "Duo Zaalouk & Taktouka",
                localName: "سلطة زعلوك الباذنجان وتكتوكة الفلفل الحلو الطازجة",
                translations: {
                  ar: "سلطة زعلوك الباذنجان وتكتوكة الفلفل الحلو الطازجة",
                  en: "Fresh Moroccan cooked salad duo: roasted eggplant zaalouk and bell pepper taktouka",
                  es: "Dúo de ensaladas marroquíes: zaalouk de berenjenas y taktouka de pimientos",
                  de: "Zweierlei marokkanische Salate: Auberginen-Zaalouk und Paprika-Taktouka"
                },
                price: 30,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "ferkous-the-menthe",
                name: "Thé à la Menthe Marrakchi Traditionnel",
                localName: "براد شاي مغربي بالنعناع والنعناع السوسي",
                translations: {
                  ar: "براد شاي مغربي بالنعناع والنعناع السوسي",
                  en: "Authentic pot of freshly brewed Moroccan green tea with sweet garden spearmint",
                  es: "Tetera de té verde marroquí con menta fresca",
                  de: "Traditionelle marokkanische Kanne Minztee mit frischer Minze"
                },
                price: 15,
                isSignature: true,
                dietary: ["vegan", "halal"]
              }
            ]
          }
        ]
      }
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  // =========================================================================
  // LE MAROCAIN – LA MAMOUNIA MARRAKECH
  // =========================================================================
  {
    id: "e-marrakech-la-mamounia",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "business-friendly", "seniors"],
      mealTypes: ["dinner", "drinks"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "French-Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["luxury", "first-timer", "culture"],
      vibeTags: ["palatial", "majestic", "romantic", "opulent"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 85,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "courtyard"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard", "apple_pay"],
      tags: ["fine", "dinner", "alcohol", "palace", "pastilla", "tanjia", "couscous", "luxury"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Marocain – La Mamounia",
      neighborhood: "Hivernage",
      description: "Nestled in a private three-story riad within the century-old royal gardens of Marrakech's legendary palace hotel at Avenue Bab Jdid (bordering Hivernage and Koutoubia), Le Marocain offers the pinnacle of contemporary Moroccan gastronomy with candlelight dinners, classical lute music, and reinvented palace recipes.",
      tip: "Dress code is strictly elegant (jacket or collared shirt for gentlemen, no sneakers or sportswear). Arrive 30 minutes early to take a stroll through the illuminated Mamounia gardens.",
      badge: "splurge",
      bestDishes: [
        "Pastilla Croustillante au Pigeon & Amandes",
        "Tanjia Marrakchia dans sa Jarre Traditionnelle",
        "Tajine d'Agneau de Lait aux Pruneaux Confits",
        "Loup de Mer Rôti à la Chermoula Douce",
        "Couscous d'Agneau Impérial aux Sept Légumes",
        "Pastilla au Lait Fleur d'Oranger & Amandes"
      ],
      pros: [
        "Iconic dining experience in the gardens of the world-famous La Mamounia palace",
        "Masterfully elevated imperial Moroccan gastronomy supervised by master palace chefs",
        "Live Andalusian lute and oud musicians playing softly in a candlelit riad courtyard",
        "World-class sommelier team and extensive cellar of fine Moroccan and international grand crus"
      ],
      cons: [
        "High-end luxury pricing reflecting premier palace status",
        "Strict dress code enforced at hotel gates; dinner bookings must be made well in advance"
      ],
      googleRating: 4.6,
      googleReviewCount: 1420,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 920,
      theforkRating: 4.6,
      theforkReviewCount: 310,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 1420,
      openTime: "19:00",
      closeTime: "23:30",
      weeklySchedule: [
        { day: "Monday", openTime: "19:00", closeTime: "23:30", isClosed: false },
        { day: "Tuesday", openTime: "19:00", closeTime: "23:30", isClosed: false },
        { day: "Wednesday", openTime: "19:00", closeTime: "23:30", isClosed: false },
        { day: "Thursday", openTime: "19:00", closeTime: "23:30", isClosed: false },
        { day: "Friday", openTime: "19:00", closeTime: "23:30", isClosed: false, note: "Dîner aux chandelles avec musiciens arabo-andalous" },
        { day: "Saturday", openTime: "19:00", closeTime: "23:30", isClosed: false, note: "Dîner aux chandelles avec musiciens arabo-andalous" },
        { day: "Sunday", openTime: "19:00", closeTime: "23:30", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Hôtel La Mamounia, Avenue Bab Jdid, Marrakech 40040, Morocco",
        lat: 31.6218,
        lng: -7.9989
      },
      address: "Hôtel La Mamounia, Avenue Bab Jdid, Marrakech 40040, Morocco",
      coordinates: {
        lat: 31.6218,
        lng: -7.9989
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Marocain+La+Mamounia+Marrakech",
      reservationMethod: ["website", "phone", "email"],
      reservationContact: "+212524388600",
      whatsappNumber: "",
      bookingUrl: "https://mamounia.com/fr/restaurants-bars/le-marocain/",
      website: "https://mamounia.com",
      instagram: "https://instagram.com/lamamouniamarrakech",
      languagesSpoken: ["French", "English", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "entrees-salades-palais",
            title: "Entrées Royales & Salades du Jardin (Palace Starters)",
            description: "Saveurs maraîchères des jardins de La Mamounia et pastillas traditionnelles",
            items: [
              {
                id: "mamounia-ronde-salades",
                name: "Ronde des Douze Salades Marocaines de La Mamounia",
                localName: "روند السلطات المغربية الاثنتي عشرة الخاصة بالمأمونية",
                translations: {
                  ar: "روند السلطات المغربية الاثنتي عشرة الخاصة بالمأمونية",
                  en: "Grand tasting of 12 delicate cooked Moroccan salads harvested from the palace vegetable gardens",
                  es: "Gran degustación de 12 ensaladas marroquíes cocinadas con verduras del huerto del palacio",
                  de: "Große Degustation von 12 feinen marokkanischen Salaten aus dem Palastgarten"
                },
                price: 240,
                isSignature: true,
                dietary: ["vegetarian", "vegan", "halal"],
                portionNotes: "Servi pour 2 personnes en mise en bouche royale"
              },
              {
                id: "mamounia-pastilla-pigeon",
                name: "Pastilla Croustillante au Pigeon & Amandes de l'Atlas",
                localName: "بسطيلة الحمام الملكية المقرمشة بلوز الأطلس المحمص والقرفة",
                translations: {
                  ar: "بسطيلة الحمام الملكية المقرمشة بلوز الأطلس المحمص والقرفة",
                  en: "Crisp imperial pigeon pastilla with crushed Atlas almonds, saffron, and cinnamon dust",
                  es: "Pastela crujiente de pichón con almendras tostadas del Atlas y canela",
                  de: "Knusprige Taubenpastilla mit gerösteten Atlas-Mandeln und feinem Zimt"
                },
                price: 290,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "mamounia-harira",
                name: "Harira Impériale au Safran Pur & Mignardises",
                localName: "الحريرة الإمبراطورية بالزعفران الحر والتمر والشباكية",
                translations: {
                  ar: "الحريرة الإمبراطورية بالزعفران الحر والتمر والشباكية",
                  en: "Imperial velvety harira soup with pure saffron threads, quail egg, and sweet Medjool dates",
                  es: "Sopa imperial harira con hebras de azafrán puro y dátiles Medjool",
                  de: "Königliche Harira-Suppe mit echtem Safran, serviert mit Medjool-Datteln"
                },
                price: 180,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "tajines-tanjia",
            title: "Tajines de Haute Volée & Tanjia (Tagines & Tanjia)",
            description: "Plats mijotés à basse température selon les secrets ancestraux du palais",
            items: [
              {
                id: "mamounia-tanjia",
                name: "Tanjia Marrakchia Cuite dans sa Jarre en Terre Cuite",
                localName: "طنجية مراكشية أصيلة مطهوة على الجمر في جرة الفخار التقليدية",
                translations: {
                  ar: "طنجية مراكشية أصيلة مطهوة على الجمر في جرة الفخار التقليدية",
                  en: "Traditional Marrakech clay-jar beef tanjia braised for 8 hours with preserved lemons and smen butter",
                  es: "Tanjia marrakchí tradicional de ternera estofada en vasija de barro durante 8 horas",
                  de: "Traditionelle Marrakesch-Tanjia im Tontopf 8 Stunden geschmort mit Salzzitronen"
                },
                price: 360,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "La référence gastronomique de la Tanjia à Marrakech"
              },
              {
                id: "mamounia-tajine-agneau",
                name: "Tajine d'Agneau de Lait aux Pruneaux Caramélisés",
                localName: "طاجين لحم الخروف الرضيع بالبرقوق المعسل واللوز المقلي",
                translations: {
                  ar: "طاجين لحم الخروف الرضيع بالبرقوق المعسل واللوز المقلي",
                  en: "Milk-fed lamb tagine with caramelized prunes, toasted sesame seeds, and golden almonds",
                  es: "Tajine de cordero lechal con ciruelas pasas caramelizadas y almendras doradas",
                  de: "Milchlamm-Tagine mit karamellisierten Pflaumen und gerösteten Mandeln"
                },
                price: 380,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "mamounia-loup-chermoula",
                name: "Loup de Mer Cuit Doucement à la Chermoula de Coriandre",
                localName: "سمك الدرعي الملكي مطهو ببطء بشرمولة القزبرة والطماطم المعسلة",
                translations: {
                  ar: "سمك الدرعي الملكي مطهو ببطء بشرمولة القزبرة والطماطم المعسلة",
                  en: "Wild Atlantic sea bass gently poached in fresh coriander chermoula and confit cherry tomatoes",
                  es: "Lubina salvaje confitada en chermoula de cilantro fresco y tomates cherry",
                  de: "Wilder Wolfsbarsch langsam pochiert in Koriander-Chermoula und Schmortomaten"
                },
                price: 390,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "couscous-palais",
            title: "Couscous Impériaux (Imperial Couscous)",
            description: "Graines de semoule tamisées main et bouillons aromatisés au safran",
            items: [
              {
                id: "mamounia-couscous-royal",
                name: "Couscous Impérial de La Mamounia aux Sept Légumes",
                localName: "كسكس المأمونية الإمبراطوري بلحم الضأن والدجاج والسبع خضار",
                translations: {
                  ar: "كسكس المأمونية الإمبراطوري بلحم الضأن والدجاج والسبع خضار",
                  en: "Imperial couscous with tender Atlas lamb, free-range chicken, garden vegetables, and sweet tfaya",
                  es: "Cuscús imperial de La Mamounia con cordero del Atlas, pollo campero y verduras",
                  de: "Imperialer Couscous mit Atlas-Lamm, Freilandhuhn, sieben Gemüsesorten und Tfaya"
                },
                price: 390,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "douceurs-mamounia",
            title: "Douceurs & Desserts Royaux (Pastries & Sweets)",
            description: "Pâtisseries marocaines fines et créations sucrées du chef pâtissier",
            items: [
              {
                id: "mamounia-pastilla-lait",
                name: "Pastilla au Lait Parfumée à la Fleur d'Oranger",
                localName: "بسطيلة الحليب التقليدية المعطرة بماء الزهر واللوز المحمص",
                translations: {
                  ar: "بسطيلة الحليب التقليدية المعطرة بماء الزهر واللوز المحمص",
                  en: "Crisp layered pastry floating in light orange blossom cream with toasted almond flakes",
                  es: "Pastela dulce de leche aromatizada con agua de azahar y almendras tostadas",
                  de: "Knusprige Milchpastilla verfeinert mit Orangenblütenwasser und gerösteten Mandeln"
                },
                price: 160,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "mamounia-cornes-gazelle",
                name: "Assortiment de Cornes de Gazelle de La Mamounia",
                localName: "تشكيلة كعب الغزال الملكي باللوز وماء الزهر",
                translations: {
                  ar: "تشكيلة كعب الغزال الملكي باللوز وماء الزهر",
                  en: "Artisanal gazelle horns filled with pure almond marzipan and orange blossom water",
                  es: "Surtido artesanal de cuernos de gacela rellenos de mazapán de almendra",
                  de: "Feine Gazellenhörnchen gefüllt mit Mandelmarzipan und Orangenblütenwasser"
                },
                price: 140,
                dietary: ["vegetarian", "halal"]
              }
            ]
          }
        ]
      }
    },
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Palace Luxury Tier",
        description: "Transparent à la carte palace pricing printed in MAD with full card support; starters run 180–290 MAD and mains 360–390 MAD plus wine.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "5-Star Hygiene",
        description: "Impeccable five-star culinary hygiene harvesting produce directly from La Mamounia's organic palace kitchen gardens.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Royal Fassi Craft",
        description: "Chef Rachid Agouray elevates royal Marrakech tanjia, pigeon pastilla, and lamb tagines without losing deeply traditional roots.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Strict Dress Code",
        description: "Serene candlelit three-story garden riad with live oud music; hotel security strictly enforces elegant evening dress (no shorts or flip-flops).",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Ceremonial Pacing",
        description: "Polished ceremonial palace hospitality with rosewater hand-washing rituals; peak dinner seatings can have deliberate, unhurried course pacing.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  // =========================================================================
  // PESTANA CR7 MARRAKECH (SPORTS BAR & ROOFTOP)
  // =========================================================================
  {
    id: "e-marrakech-pestana-cr7",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo", "family"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night", "drinks"],
      experienceTypes: ["casual", "rooftop"],
      foodStyles: ["International", "Mediterranean", "Grill & BBQ"],
      cuisineTags: ["international"],
      archetypeAffinity: ["nomad", "adventure", "first-timer"],
      vibeTags: ["sporty", "trendy", "lively", "scenic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 26,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard", "apple_pay"],
      tags: ["late-night", "rooftop", "terrace", "alcohol", "dinner", "lunch", "breakfast"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Pestana CR7 Marrakech – Sports Bar & Rooftop",
      neighborhood: "Hivernage",
      description: "Located on chic M Avenue in Hivernage, Cristiano Ronaldo's lifestyle hotel blends contemporary Portuguese gastronomy with energetic sports entertainment. Guests can watch live matches on giant screens in the Sports Bar or head up to the panoramic Rooftop Lounge for sunset cocktails, tapas, and Atlas Mountain vistas.",
      tip: "Head up to the CR7 Rooftop Lounge around 18:00 for golden hour cocktails facing the sunset. For big football matches, reserve a table early in the ground-floor Sports Bar.",
      badge: "local-favorite",
      bestDishes: [
        "Bacalhau à Brás Traditionnel",
        "Burger Signature CR7 Black Angus",
        "Polvo à Lagareiro (Poulpe Rôti)",
        "Croquetes de Bacalhau",
        "Pizza M Avenue Stracciatella & Truffe",
        "Pastéis de Nata Chauds Maison"
      ],
      pros: [
        "Authentic Portuguese specialties (Bacalhau, pastéis de nata) rarely found in Morocco",
        "Vibrant rooftop terrace with swimming pool, sunset views, and resident DJ sets",
        "High-definition sports screens and energetic bar atmosphere in Hivernage",
        "Prime walkable location right on the pedestrian shopping boulevard of M Avenue"
      ],
      cons: [
        "Sports bar area can get loud and rowdy during Champions League or major football derbies",
        "Pool loungers on the rooftop are primarily prioritized for hotel guests during peak midday hours"
      ],
      googleRating: 4.3,
      googleReviewCount: 1680,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 420,
      theforkRating: 4.3,
      theforkReviewCount: 180,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 1680,
      openTime: "07:30",
      closeTime: "01:00",
      weeklySchedule: [
        { day: "Monday", openTime: "07:30", closeTime: "01:00", isClosed: false },
        { day: "Tuesday", openTime: "07:30", closeTime: "01:00", isClosed: false },
        { day: "Wednesday", openTime: "07:30", closeTime: "01:00", isClosed: false },
        { day: "Thursday", openTime: "07:30", closeTime: "01:00", isClosed: false },
        { day: "Friday", openTime: "07:30", closeTime: "02:00", isClosed: false, note: "Rooftop DJ sunset session" },
        { day: "Saturday", openTime: "07:30", closeTime: "02:00", isClosed: false, note: "Rooftop DJ sunset session" },
        { day: "Sunday", openTime: "07:30", closeTime: "01:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "M Avenue, Boulevard de la Ménara, Hivernage, Marrakech 40000, Morocco",
        lat: 31.6231,
        lng: -8.0165
      },
      address: "M Avenue, Boulevard de la Ménara, Hivernage, Marrakech 40000, Morocco",
      coordinates: {
        lat: 31.6231,
        lng: -8.0165
      },
      googleMapsUrl: "https://maps.google.com/?q=Pestana+CR7+Marrakech",
      reservationMethod: ["phone", "website", "walk-in"],
      reservationContact: "+212524444850",
      whatsappNumber: "",
      bookingUrl: "https://www.pestanacr7.com/fr/hotel/pestana-cr7-marrakech",
      website: "https://www.pestanacr7.com",
      instagram: "https://instagram.com/pestanacr7marrakech",
      languagesSpoken: ["English", "French", "Arabic/Darija", "Spanish"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "tapas-petiscos",
            title: "Petiscos Portugais & Tapas (Starters & Sharing)",
            description: "Bouchées croustillantes et entrées à partager devant le match",
            items: [
              {
                id: "cr7-croquetes-bacalhau",
                name: "Croquetes de Bacalhau Artisanaus (4 pièces)",
                localName: "كروكيت سمك القد البرتغالي التقليدي المقرمش مع المايونيز بالليمون",
                translations: {
                  ar: "كروكيت سمك القد البرتغالي التقليدي المقرمش مع المايونيز بالليمون",
                  en: "Traditional Portuguese salt cod fritters with garlic-lemon mayonnaise",
                  es: "Croquetas tradicionales portuguesas de bacalao con alioli de limón",
                  de: "Traditionelle portugiesische Stockfisch-Kroketten mit Zitronenmayonnaise"
                },
                price: 90,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "cr7-gambas-ajillo",
                name: "Gambas à l'Ail Sizzling al Ajillo",
                localName: "جمبري مطهو بزيت الزيتون البكر والثوم المحمر والفلفل الحار",
                translations: {
                  ar: "جمبري مطهو بزيت الزيتون البكر والثوم المحمر والفلفل الحار",
                  en: "Sizzling garlic prawns sautéed in olive oil, chili, and fresh coriander",
                  es: "Gambas al ajillo chisporroteantes con ajo, guindilla y cilantro",
                  de: "Brutzelnde Knoblauchgarnelen in Olivenöl mit Chili und Koriander"
                },
                price: 110,
                dietary: ["halal"]
              },
              {
                id: "cr7-caesar-salad",
                name: "Salade César CR7 au Poulet Croustillant",
                localName: "سلطة سيزر سي آر سفن بالدجاج المقرمش والبارميزان",
                translations: {
                  ar: "سلطة سيزر سي آر سفن بالدجاج المقرمش والبارميزان",
                  en: "Crisp romaine salad with panko-crusted chicken, shaved parmesan, and garlic croutons",
                  es: "Ensalada César CR7 con pollo crujiente al panko y queso parmesano",
                  de: "CR7 Caesar Salad mit knusprigem Hähnchen und gehobeltem Parmesan"
                },
                price: 95,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "plats-portugais-burgers",
            title: "Spécialités Portugaises & Burgers (Mains & Burgers)",
            description: "Plats emblématiques de Lisbonne et viandes grillées",
            items: [
              {
                id: "cr7-bacalhau-bras",
                name: "Bacalhau à Brás Traditionnel",
                localName: "طبق باكالهاو أ براس البرتغالي الشهير بسمك القد والبطاطس والبيض",
                translations: {
                  ar: "طبق باكالهاو أ براس البرتغالي الشهير بسمك القد والبطاطس والبيض",
                  en: "Signature Portuguese shredded salt cod sautéed with thin straw potatoes, scrambled eggs, and black olives",
                  es: "Clásico bacalao dorado portugués à Brás con patatas paja, huevo y aceitunas negras",
                  de: "Klassischer portugiesischer Bacalhau à Brás mit Strohkartoffeln, Ei und Oliven"
                },
                price: 160,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "La recette nationale portugaise par excellence"
              },
              {
                id: "cr7-burger-signature",
                name: "Burger Signature CR7 Black Angus",
                localName: "برغر سي آر سفن الخاص بلحم البلاك أنجوس الفاخر وجبن الشيدر والصلصة السرية",
                translations: {
                  ar: "برغر سي آر سفن الخاص بلحم البلاك أنجوس الفاخر وجبن الشيدر والصلصة السرية",
                  en: "Prime Black Angus patty in toasted brioche bun with cheddar, beef bacon, caramelized onion, and fries",
                  es: "Hamburguesa CR7 de ternera Black Angus con queso cheddar, bacon de ternera y patatas",
                  de: "CR7 Signature Burger mit Black Angus Rindfleisch, Cheddar, Rinderbacon und Pommes"
                },
                price: 140,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "cr7-polvo-lagareiro",
                name: "Polvo à Lagareiro (Poulpe Rôti à l'Huile d'Olive)",
                localName: "أخطبوط مشوي بالفرن على الطريقة البرتغالية مع البطاطس المهروسة وزيت الزيتون",
                translations: {
                  ar: "أخطبوط مشوي بالفرن على الطريقة البرتغالية مع البطاطس المهروسة وزيت الزيتون",
                  en: "Oven-roasted tender octopus tentacles served over crushed baked potatoes with garlic oil",
                  es: "Pulpo asado a la portuguesa con patatas al horno aplastadas y aceite de ajo",
                  de: "Im Ofen gerösteter Oktopus nach portugiesischer Art mit Quetschkartoffeln und Knoblauchöl"
                },
                price: 180,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "desserts-portugais",
            title: "Douceurs & Desserts Lusitaniens (Desserts)",
            description: "Pâtisseries artisanales portugaises cuites minute",
            items: [
              {
                id: "cr7-pasteis-nata",
                name: "Pastéis de Nata Chauds Maison (Duo)",
                localName: "فطائر الباستيل دي ناتا البرتغالية الساخنة بالقرفة والسكر",
                translations: {
                  ar: "فطائر الباستيل دي ناتا البرتغالية الساخنة بالقرفة والسكر",
                  en: "Warm homemade Portuguese custard tarts dusted with powdered cinnamon",
                  es: "Dúo de pasteles de nata portugueses recién horneados con canela",
                  de: "Warme portugiesische Blätterteig-Puddingtörtchen (Pastéis de Nata) mit Zimt"
                },
                price: 60,
                isSignature: true,
                dietary: ["vegetarian"]
              },
              {
                id: "cr7-churros-chocolat",
                name: "Churros Croustillants & Chocolat Chaud Fondant",
                localName: "تشوروز مقرمش مع صلصة الشوكولاتة الذائبة",
                translations: {
                  ar: "تشوروز مقرمش مع صلصة الشوكولاتة الذائبة",
                  en: "Crispy fried sugar churros served with warm molten chocolate dip",
                  es: "Churros crujientes con salsa caliente de chocolate fundido",
                  de: "Knusprige Churros mit heißer Schokoladensauce"
                },
                price: 65,
                dietary: ["vegetarian"]
              }
            ]
          }
        ]
      }
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  // =========================================================================
  // MANDARIN ORIENTAL MARRAKECH (AMENSI / EX-SHIRVAN CAFÉ MÉTISSE)
  // =========================================================================
  {
    id: "e-marrakech-mandarin-oriental",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly", "large-groups"],
      mealTypes: ["dinner", "drinks"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["International", "Middle Eastern", "Mediterranean", "Moroccan"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["luxury", "first-timer", "culture"],
      vibeTags: ["glamorous", "chic", "romantic", "refined"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 75,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "outdoor"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard", "apple_pay"],
      tags: ["fine", "dinner", "alcohol", "terrace", "luxury"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Amensi (ex-Shirvan Café Métisse) – Mandarin Oriental",
      neighborhood: "Sidi Youssef Ben Ali",
      description: "Set within the olive groves and tranquil reflection pools of the 5-star Mandarin Oriental resort along Route du Golf Royal (east of the Medina near Sidi Youssef Ben Ali), the resort's signature evening dining venue has evolved from Chef Akrame Benallal's Silk Road concept (Shirvan Café Métisse) into Amensi—celebrating refined Amazigh and Moroccan-Mediterranean flavors with open-air terrace dining.",
      tip: "Request an outdoor terrace table directly beside the illuminated reflection pools for dinner (19:00–23:00). Confirm the current seasonal Amensi menu when booking directly with the Mandarin Oriental concierge.",
      badge: "splurge",
      bestDishes: [
        "Épaule d'Agneau Confite 24h aux Épices Douces",
        "Houmous Noir au Charbon Végétal",
        "Pain Tandoor Artisanal au Fromage & Zaatar",
        "Pastilla de Homard au Safran",
        "Bœuf Black Angus Croustillant à la Mangue",
        "Tarte Fine au Chocolat Fumé & Fleur de Sel"
      ],
      pros: [
        "Mesmerizing setting overlooking reflective water ponds and 20 hectares of olive groves",
        "Elevated Moroccan-Amazigh and Silk Road gastronomy in a 5-star Mandarin Oriental setting",
        "Exceptional cocktail mixology and premium international wine pairings"
      ],
      cons: [
        "Luxury palace price point aligned with Mandarin Oriental resort standards",
        "Located along Route du Golf Royal ~15 minutes southeast of the central Medina (taxi or chauffeur recommended)"
      ],
      googleRating: 4.7,
      googleReviewCount: 760,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 310,
      theforkRating: 4.6,
      theforkReviewCount: 120,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 760,
      openTime: "19:00",
      closeTime: "23:00",
      weeklySchedule: [
        { day: "Monday", openTime: "19:00", closeTime: "23:00", isClosed: false },
        { day: "Tuesday", openTime: "19:00", closeTime: "23:00", isClosed: false },
        { day: "Wednesday", openTime: "19:00", closeTime: "23:00", isClosed: false },
        { day: "Thursday", openTime: "19:00", closeTime: "23:00", isClosed: false },
        { day: "Friday", openTime: "19:00", closeTime: "23:00", isClosed: false },
        { day: "Saturday", openTime: "19:00", closeTime: "23:00", isClosed: false },
        { day: "Sunday", openTime: "19:00", closeTime: "23:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Mandarin Oriental Marrakech, Route du Golf Royal, Marrakech 40000, Morocco",
        lat: 31.5995,
        lng: -7.9452
      },
      address: "Mandarin Oriental Marrakech, Route du Golf Royal, Marrakech 40000, Morocco",
      coordinates: {
        lat: 31.5995,
        lng: -7.9452
      },
      googleMapsUrl: "https://maps.google.com/?q=Mandarin+Oriental+Marrakech",
      reservationMethod: ["website", "phone", "email"],
      reservationContact: "+212524298888",
      whatsappNumber: "",
      bookingUrl: "https://www.mandarinoriental.com/en/marrakech/marrakech/dine/amensi",
      website: "https://www.mandarinoriental.com",
      instagram: "https://instagram.com/mo_marrakech",
      languagesSpoken: ["French", "English", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "entrees-tandoor",
            title: "Pains Tandoor & Entrées de la Soie (Tandoor & Starters)",
            description: "Cuissons au four tandoor minute et mezzés inspirés de la Route de la Soie",
            items: [
              {
                id: "shirvan-houmous-noir",
                name: "Houmous Noir au Charbon Végétal & Sésame",
                localName: "حمص أسود بالفحم النباتي وزيت السمسم مع بذور الرمان",
                translations: {
                  ar: "حمص أسود بالفحم النباتي وزيت السمسم مع بذور الرمان",
                  en: "Velvety black sesame chickpea hummus infused with activated charcoal and pomegranate",
                  es: "Hummus negro de sésamo y carbón vegetal con semillas de granada y aceite virgen",
                  de: "Schwarzer Sesam-Hummus mit Aktivkohle, Granatapfelkernen und Olivenöl"
                },
                price: 130,
                isSignature: true,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "shirvan-pain-tandoor",
                name: "Pain Tandoor Chaud au Fromage Fondant & Zaatar",
                localName: "خبز التنور الساخن بالجبن الذائب والزعتر البري وزيت الزيتون",
                translations: {
                  ar: "خبز التنور الساخن بالجبن الذائب والزعتر البري وزيت الزيتون",
                  en: "Freshly baked Indian tandoor flatbread stuffed with molten cheese and Levantine zaatar",
                  es: "Pan tandoor artesanal caliente relleno de queso fundido y zaatar",
                  de: "Frisch gebackenes Tandoor-Fladenbrot gefüllt mit geschmolzenem Käse und Zaatar"
                },
                price: 85,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "shirvan-ceviche-daurade",
                name: "Ceviche de Daurade au Lait de Coco & Citron Vert",
                localName: "سيفيتشي سمك الدنيس الطازج بحليب جوز الهند والليمون الأخضر والكزبرة",
                translations: {
                  ar: "سيفيتشي سمك الدنيس الطازج بحليب جوز الهند والليمون الأخضر والكزبرة",
                  en: "Sea bream ceviche cured in fresh lime juice, coconut milk reduction, and coriander oil",
                  es: "Ceviche de dorada fresca con leche de coco, lima y aceite de cilantro",
                  de: "Goldbrassen-Ceviche mit Kokosmilch, frischer Limette und Korianderöl"
                },
                price: 180,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "plats-route-de-la-soie",
            title: "Plats Signatures du Chef (Mains)",
            description: "Grandes pièces rôties et marinades lentes aux épices voyageuses",
            items: [
              {
                id: "shirvan-epaule-agneau",
                name: "Épaule d'Agneau Confite 24h aux Épices Douces (Pour 2)",
                localName: "كتف خروف مطهو ببطء لمدة 24 ساعة بالتوابل العطرية (يكفي لشخصين)",
                translations: {
                  ar: "كتف خروف مطهو ببطء لمدة 24 ساعة بالتوابل العطرية (يكفي لشخصين)",
                  en: "24-hour slow-cooked tender lamb shoulder falling off the bone, glazed with spiced honey (for 2)",
                  es: "Paletilla de cordero confitada 24 horas con especias dulces y miel (para 2 personas)",
                  de: "24 Stunden langsam geschmorte Lammschulter mit orientalischen Gewürzen (für 2 Personen)"
                },
                price: 680,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Plat phare pour 2 convives"
              },
              {
                id: "shirvan-boeuf-mangue",
                name: "Bœuf Black Angus Croustillant à la Mangue Épicée",
                localName: "لحم بقر بلاك أنجوس مقرمش بصلصة المانجو الحارة والسمسم",
                translations: {
                  ar: "لحم بقر بلاك أنجوس مقرمش بصلصة المانجو الحارة والسمسم",
                  en: "Crispy Black Angus beef strips glazed in spicy sweet mango sauce and toasted sesame",
                  es: "Tiras de ternera Black Angus crujientes glaseadas con mango picante y sésamo",
                  de: "Knusprige Black Angus Rindfleischstreifen glasiert mit pikanter Mangosauce und Sesam"
                },
                price: 340,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "shirvan-pastilla-homard",
                name: "Pastilla de Homard Bleu au Safran Pur",
                localName: "بسطيلة الكركند الأزرق الملكي بالزعفران الحر والأعشاب العطرية",
                translations: {
                  ar: "بسطيلة الكركند الأزرق الملكي بالزعفران الحر والأعشاب العطرية",
                  en: "Luxury blue Atlantic lobster pastilla with delicate saffron bisque and wild herbs",
                  es: "Pastela de bogavante azul del Atlántico con suave reducción de azafrán puro",
                  de: "Edle Pastilla mit blauem Atlantik-Hummer und feiner Safranbisque"
                },
                price: 420,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "desserts-akrame",
            title: "Desserts Créatifs (Desserts)",
            description: "Finitions sucrées délicates associant chocolat grand cru et parfums d'Orient",
            items: [
              {
                id: "shirvan-tarte-chocolat-fume",
                name: "Tarte Fine au Chocolat Fumé & Fleur de Sel",
                localName: "تارت الشوكولاتة الداكنة المدخنة الفاخرة مع زهرة الملح وزيت الأركان",
                translations: {
                  ar: "تارت الشوكولاتة الداكنة المدخنة الفاخرة مع زهرة الملح وزيت الأركان",
                  en: "Crisp dark smoked chocolate tart with sea salt crystals and culinary argan oil",
                  es: "Tarta fina de chocolate negro ahumado con flor de sal y aceite de argán",
                  de: "Feine Tarte von geräucherter dunkler Schokolade mit Meersalz und Arganöl"
                },
                price: 140,
                isSignature: true,
                dietary: ["vegetarian"]
              },
              {
                id: "shirvan-riz-au-lait",
                name: "Riz au Lait Onctueux Fleur d'Oranger & Caramel Beurre Salé",
                localName: "أرز بالحليب الكريمي المعطر بماء الزهر مع الكراميل المملح والمكسرات",
                translations: {
                  ar: "أرز بالحليب الكريمي المعطر بماء الزهر مع الكراميل المملح والمكسرات",
                  en: "Creamy rice pudding infused with orange blossom water, salted caramel drizzle, and pistachios",
                  es: "Arroz con leche cremoso aromatizado con agua de azahar y caramelo salado",
                  de: "Cremiger Milchreis mit Orangenblütenwasser, gesalzenem Karamell und Pistazien"
                },
                price: 120,
                dietary: ["vegetarian"]
              }
            ]
          }
        ]
      }
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  // =========================================================================
  // COMPTOIR DARNA MARRAKECH
  // =========================================================================
  {
    id: "e-marrakech-comptoir-darna",
    city: "marrakech",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "large-groups", "business-friendly"],
      mealTypes: ["dinner", "late-night", "drinks"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "French-Moroccan", "Mediterranean", "International"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "first-timer", "culture"],
      vibeTags: ["glamorous", "live-show", "festive", "iconic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 45,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "courtyard"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard", "apple_pay"],
      tags: ["alcohol", "dinner", "fine", "late-night", "live-music", "pastilla", "tagine", "terrace", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Comptoir Darna",
      neighborhood: "Hivernage",
      description: "Marrakech's legendary dinner-and-show institution in Hivernage since 1999. Fuses classic Moroccan feasts (including slow-roasted 7-hour méchoui and crisp pastillas) with French-international elegance, nightly belly-dancing performances around 22:00, live Gnawa & Oriental musicians, and a lively upstairs patio lounge open until 03:00.",
      tip: "Reserve well ahead for a 21:00–21:30 table on the ground floor or terrace to catch the signature candelabrum belly-dance procession around 22:00. Smart-casual evening dress code is enforced.",
      badge: "splurge",
      bestDishes: [
        "7-Hour Oven-Roasted Lamb Méchoui",
        "Chicken & Almond Pastilla",
        "Berber Lamb Shank Tagine",
        "Miso-Glazed Atlantic Salmon",
        "Jawhara Crispy Milk Pastilla"
      ],
      pros: [
        "Electric dinner-show ambiance with live musicians and nightly belly dancers",
        "Renowned 7-hour slow-roasted lamb méchoui and Moroccan-French fusion dishes",
        "Seamless transition to upstairs cocktail lounge and club terrace until 03:00"
      ],
      cons: [
        "Upscale evening pricing; signature cocktails and bar tabs quickly raise the check",
        "High-energy music and closely spaced tables make it unsuitable for quiet conversation"
      ],
      googleRating: 4.7,
      googleReviewCount: 14200,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 4120,
      theforkRating: 4.5,
      theforkReviewCount: 680,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 14200,
      openTime: "19:00",
      closeTime: "01:00",
      weeklySchedule: [
        { day: "Monday", openTime: "19:00", closeTime: "01:00", isClosed: false, note: "Patio lounge & club open until 03:00" },
        { day: "Tuesday", openTime: "19:00", closeTime: "01:00", isClosed: false, note: "Patio lounge & club open until 03:00" },
        { day: "Wednesday", openTime: "19:00", closeTime: "01:00", isClosed: false, note: "Patio lounge & club open until 03:00" },
        { day: "Thursday", openTime: "19:00", closeTime: "01:00", isClosed: false, note: "Patio lounge & club open until 03:00" },
        { day: "Friday", openTime: "19:00", closeTime: "01:00", isClosed: false, note: "Patio lounge & club open until 03:00" },
        { day: "Saturday", openTime: "19:00", closeTime: "01:00", isClosed: false, note: "Patio lounge & club open until 03:00" },
        { day: "Sunday", openTime: "19:00", closeTime: "01:00", isClosed: false, note: "Patio lounge & club open until 03:00" }
      ],
      exactAddressAndCoordinates: {
        address: "Avenue Echouhada, Quartier Hivernage, Marrakech 40000, Morocco",
        lat: 31.62372,
        lng: -8.0031
      },
      address: "Avenue Echouhada, Quartier Hivernage, Marrakech 40000, Morocco",
      coordinates: {
        lat: 31.62372,
        lng: -8.0031
      },
      googleMapsUrl: "https://maps.google.com/?q=Comptoir+Darna+Marrakech",
      reservationMethod: ["website", "phone", "email"],
      reservationContact: "+212524437702",
      whatsappNumber: "",
      bookingUrl: "https://comptoirmarrakech.com",
      website: "https://comptoirmarrakech.com",
      instagram: "https://instagram.com/comptoirdarna",
      viewType: "garden",
      bestTimeToVisit: "21:00 for dinner and 22:00 live dance show",
      averageWaitMinutes: 15,
      languagesSpoken: ["French", "English", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "starters-pastillas",
            title: "Moroccan Starters & Handcrafted Pastillas",
            description: "Crisp warqa pastries, spiced salads, and mezze to open the evening",
            items: [
              {
                id: "darna-briouates",
                name: "Assorted Moroccan Briouates",
                localName: "تشكيلة بريوات مغربية مقرمشة",
                translations: {
                  ar: "تشكيلة بريوات مغربية مقرمشة",
                  en: "Crisp warqa pastry triangles filled with spiced minced beef, goat cheese, and herbs",
                  es: "Surtido de briouates crujientes de carne especiada y queso de cabra",
                  de: "Knusprige Briouats gefüllt mit gewürztem Rindfleisch und Ziegenkäse"
                },
                price: 180,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "darna-chicken-pastilla",
                name: "Traditional Chicken & Almond Pastilla",
                localName: "بسطيلة الدجاج باللوز المحمص والقرفة",
                translations: {
                  ar: "بسطيلة الدجاج باللوز المحمص والقرفة",
                  en: "Flaky sweet-and-savory pastilla with shredded saffron chicken, roasted almonds, and cinnamon",
                  es: "Pastela tradicional de pollo al azafrán con almendras tostadas y canela",
                  de: "Traditionelle Hähnchenpastilla mit Safran, gerösteten Mandeln und Zimt"
                },
                price: 165,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "mains-mechoui-fusion",
            title: "Signature Méchoui, Tagines & Fusion Mains",
            description: "Iconic 7-hour roasted lamb alongside classic tagines and cosmopolitan grill plates",
            items: [
              {
                id: "darna-mechoui",
                name: "7-Hour Slow-Roasted Lamb Méchoui (For 2)",
                localName: "مشوي الخروف المطهو 7 ساعات على نار هادئة (لشخصين)",
                translations: {
                  ar: "مشوي الخروف المطهو 7 ساعات على نار هادئة (لشخصين)",
                  en: "Whole oven-roasted lamb shoulder slow-cooked for 7 hours with cumin salt and garlic (for 2 guests)",
                  es: "Paletilla de cordero asada lentamente 7 horas al estilo méchoui (para 2)",
                  de: "7 Stunden langsam geschmorte Lammschulter Méchoui mit Kreuzkümmelsalz (für 2)"
                },
                price: 750,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "For 2 guests • Restaurant signature since 1999"
              },
              {
                id: "darna-lamb-tagine",
                name: "Berber Lamb Shank Tagine",
                localName: "طاجين موزة الغنم على الطريقة الأمازيغية",
                translations: {
                  ar: "طاجين موزة الغنم على الطريقة الأمازيغية",
                  en: "Melt-in-mouth lamb shank braised with seasonal root vegetables, prunes, and roasted almonds",
                  es: "Tajine bereber de jarrete de cordero con verduras y ciruelas",
                  de: "Berber-Lammhaxen-Tagine mit Wurzelgemüse, Pflaumen und Mandeln"
                },
                price: 240,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "darna-royal-couscous",
                name: "Royal Couscous",
                localName: "كسكس ملكي تقليدي بسبع خضار",
                translations: {
                  ar: "كسكس ملكي تقليدي بسبع خضار",
                  en: "Triple-steamed fine semolina couscous with tender lamb, chicken, merguez, and seven vegetables",
                  es: "Cuscús real tradicional con cordero, pollo, merguez y siete verduras",
                  de: "Königlicher Couscous mit Lamm, Hähnchen, Merguez und sieben Gemüsesorten"
                },
                price: 220,
                dietary: ["halal"]
              },
              {
                id: "darna-miso-salmon",
                name: "Miso-Glazed Atlantic Salmon",
                localName: "سلمون الأطلسي المزجج بالميسو والخضار المشوية",
                translations: {
                  ar: "سلمون الأطلسي المزجج بالميسو والخضار المشوية",
                  en: "Caramelized miso-marinated salmon fillet served with sautéed baby bok choy and sesame rice",
                  es: "Salmón glaseado al miso caramelizado con verduras salteadas",
                  de: "Karamellisierter Miso-Lachs mit sautiertem Gemüse und Sesamreis"
                },
                price: 270,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "desserts-cocktails",
            title: "Desserts & Oriental Cocktails",
            description: "Signature crispy sweets and late-night lounge infusions",
            items: [
              {
                id: "darna-jawhara",
                name: "Jawhara (Crispy Milk & Almond Pastilla)",
                localName: "جوهرة مقرمشة بالحليب المعطر بماء الزهر واللوز",
                translations: {
                  ar: "جوهرة مقرمشة بالحليب المعطر بماء الزهر واللوز",
                  en: "Delicate stacked warqa pastry sheets layered with orange blossom milk cream and toasted almonds",
                  es: "Jawhara crujiente de leche aromatizada con azahar y almendras tostadas",
                  de: "Knusprige Jawhara-Milchpastilla mit Orangenblütencreme und Mandeln"
                },
                price: 110,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "darna-macaron-tree",
                name: "Comptoir Macaron Tree (2–4 Guests)",
                localName: "شجرة الماكرون الخاصة بالمطعم (من شخصين إلى 4)",
                translations: {
                  ar: "شجرة الماكرون الخاصة بالمطعم (من شخصين إلى 4)",
                  en: "Playful sharing tower of artisan saffron, pistachio, rose, and dark chocolate macarons",
                  es: "Torre de macarons artesanales de azafrán, pistacho, rosa y chocolate (para compartir)",
                  de: "Macaron-Baum mit Safran-, Pistazien-, Rosen- und Schokoladen-Macarons"
                },
                price: 160,
                dietary: ["vegetarian", "halal"],
                portionNotes: "Ideal to share for 2–4 guests"
              }
            ]
          }
        ]
      }
    },
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Cocktails Inflate Check",
        description: "Menu prices include tax with clean itemized card receipts, though signature cocktails, wines, and lounge shisha add 300–400 MAD rapidly.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Spotless Upscale Kitchen",
        description: "High-volume luxury kitchen maintaining strict food safety, purified bar ice, and fresh meats cooked to order.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "7-Hr Méchoui & Fusion",
        description: "Blends iconic 7-hour slow-roasted Moroccan lamb méchoui and pastilla with crowd-pleasing Franco-Asian dishes like miso salmon.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Lively Show & Dress Code",
        description: "High-energy Hivernage dinner theater with belly dancing around 22:00 and loud DJ beats; tables are tight and smart-casual dress is enforced.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Book Ahead",
        description: "Well-drilled, multilingual hospitality staff handling huge nightly crowds seamlessly; advance dinner reservations are essential.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  }
];