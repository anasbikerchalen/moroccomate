/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: AGADIR
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-agadir-1' or 'eat-agadir-restaurant')
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
 *
 * 3-SECTION COPY-PASTE TEMPLATE (QUIZ, FILTER, UI):
 * {
 *   id: 'e-agadir-[id]',
 *   city: 'agadir',
 *
 *   // ── 1. QUIZ (personalization, mood & matching) ──
 *   quiz: {
 *     lifestyle: 'balanced',
 *     groupTypes: ['solo', 'couple', 'family', 'friends'],
 *     mealTypes: ['lunch', 'dinner'],
 *     experienceTypes: ['casual', 'traditional'],
 *     foodStyles: ['Moroccan'],
 *     cuisineTags: ['moroccan-traditional'],
 *     archetypeAffinity: ['first-timer'],
 *     vibeTags: ['authentic'],
 *     crowdLevel: 'balanced'
 *   },
 *
 *   // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
 *   filter: {
 *     pricePerPerson: 15,
 *     isHalal: true,
 *     halalStatus: 'likely-halal-food',
 *     isVegetarianFriendly: false,
 *     servesAlcohol: false,
 *     alcoholPolicy: 'dry',
 *     hasDelivery: false,
 *     hasParking: false,
 *     nearMedina: true,
 *     nearBeach: false,
 *     nearCenter: true,
 *     hasEnglishStaff: true,
 *     hasFrenchStaff: true,
 *     ramadanFriendly: 'serves-lunch',
 *     closedDays: [],
 *     seatingTypes: ['indoor'],
 *     paymentMethods: ['cash'],
 *     tags: ['moroccan', 'halal', 'lunch', 'dinner'],
 *     isHiddenGem: false,
 *     isTemporarilyHidden: false,
 *     verificationStatus: 'verified'
 *   },
 *
 *   // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
 *   ui: {
 *     name: '',
 *     neighborhood: '',
 *     description: '',
 *     tip: '',
 *     badge: 'local-favorite',
 *     bestDishes: [],
 *     pros: [],
 *     cons: [],
 *     googleRating: 4.5,
 *     googleReviewCount: 100,
 *     tripadvisorRating: 4.5,
 *     tripadvisorReviewCount: 100,
 *     theforkRating: 4.5,
 *     theforkReviewCount: 50,
 *     restaurantguruRating: 4.5,
 *     restaurantguruReviewCount: 100,
 *     openTime: '11:00',
 *     closeTime: '23:00',
 *     googleMapsUrl: 'https://maps.google.com/?q=',
 *     reservationMethod: ['walk-in'],
 *     reservationContact: '',
 *     bookingUrl: '',
 *     whatsappNumber: '',
 *     website: 'not-available',
 *     instagram: 'not-available'
 *   }
 * }
 * =========================================================================
 */

import type { EatListing } from '../types';

export const agadirEat: EatListing[] = [
 {
    id: "e-agadir-amsterdam-luxury",
    city: "agadir",
    openTime: "07:00",
    closeTime: "00:00",
    weeklySchedule: [
      { day: "Monday", open: "07:00", close: "00:00", isClosed: false },
      { day: "Tuesday", open: "07:00", close: "00:00", isClosed: false },
      { day: "Wednesday", open: "07:00", close: "00:00", isClosed: false },
      { day: "Thursday", open: "07:00", close: "00:00", isClosed: false },
      { day: "Friday", open: "07:00", close: "00:00", isClosed: false, note: "Live Violin & Acoustic Show (from 20:30)" },
      { day: "Saturday", open: "07:00", close: "00:00", isClosed: false, note: "Live Violin & Acoustic Show (from 20:30)" },
      { day: "Sunday", open: "07:00", close: "00:00", isClosed: false },
    ],

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "family", "business-friendly"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner", "drinks"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: [
        "International",
        "Grill & BBQ",
        "Seafood",
        "Mediterranean"
      ],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["chic", "theatrical", "luxurious", "intimate"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 38,
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
      seatingTypes: ["indoor", "outdoor"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard"],
      tags: [
        "fine-dining",
        "halal",
        "steaks",
        "steakhouse",
        "wagyu",
        "live-music",
        "dinner-show",
        "romantic",
        "luxury",
        "dinner",
        "breakfast",
        "brunch",
        "seafood",
        "mocktails"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Amsterdam Luxury Restaurant",
      neighborhood: "Hay Mohammadi",
      description: "Halal luxury steakhouse & all-day lounge in Hay Mohammadi—dry-aged cuts, 24K gold presentations, Dutch comfort food, weekend live violin, and dry-ice mocktails.",
      tip: "Weekend dinner slots fill up rapidly due to the live violin performances. Reserve 24–48 hours in advance via WhatsApp.",
      badge: "splurge",
      bestDishes: [
        "Côte de Bœuf 24K Gold",
        "Filet de Bœuf 24K Gold",
        "Golden Burger 24K",
        "Patatje Oorlog (Frites Guerre)",
        "Poffertjes Amsterdam",
        "Chocolat Dubaï 24K Gold"
      ],
      pros: [
        "Theatrical tableside presentations with smoke, cloches and 24K edible gold finishes",
        "Exceptional dry-aged beef, certified A5 Japanese Wagyu / Kobe beef",
        "Live acoustic violin and guitar performances on Friday and Saturday evenings",
        "Strictly 100% halal with an inventive artisanal mocktail mixology bar"
      ],
      cons: [
        "Dry establishment (strictly alcohol-free venue)",
        "Luxury fine-dining price range for gold and certified Wagyu cuts"
      ],
      googleRating: 4.8,
      googleReviewCount: 3860,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 110,
      restaurantguruRating: 5.0,
      restaurantguruReviewCount: 3952,
      openTime: "07:00",
      closeTime: "00:00",
      weeklySchedule: [
        { day: "Monday", openTime: "07:00", closeTime: "00:00", isClosed: false },
        { day: "Tuesday", openTime: "07:00", closeTime: "00:00", isClosed: false },
        { day: "Wednesday", openTime: "07:00", closeTime: "00:00", isClosed: false },
        { day: "Thursday", openTime: "07:00", closeTime: "00:00", isClosed: false },
        { day: "Friday", openTime: "07:00", closeTime: "00:00", isClosed: false, note: "Live Violin & Acoustic Show (from 20:30)" },
        { day: "Saturday", openTime: "07:00", closeTime: "00:00", isClosed: false, note: "Live Violin & Acoustic Show (from 20:30)" },
        { day: "Sunday", openTime: "07:00", closeTime: "00:00", isClosed: false },
      ],
      exactAddressAndCoordinates: {
        address: "Résidence Islane GH14, N6, Hay Mohammadi, Agadir, Morocco",
        lat: 30.4358,
        lng: -9.5786
      },
      address: "Résidence Islane GH14, N6, Hay Mohammadi, Agadir, Morocco",
      coordinates: {
        lat: 30.4358,
        lng: -9.5786
      },
      googleMapsUrl: "https://maps.google.com/?q=Amsterdam+Luxury+Restaurant+Agadir",
      reservationMethod: ["whatsapp", "phone", "website"],
      reservationContact: "+212 5282-01799",
      whatsappNumber: "+212609070598",
      bookingUrl: "https://amsterdamagadir.com",
      website: "https://amsterdamagadir.com",
      instagram: "https://instagram.com/amsterdamagadir",
      customStory: "Agadir's premier luxury halal steakhouse featuring dry-aged beef, tableside smoke and dry-ice presentations, 24K edible gold finishes, weekend live violin and acoustic music, and a signature non-alcoholic mixology bar.",
      viewType: "Interior Design Lounge",
      bestTimeToVisit: "20:00 for the weekend live violin and acoustic dinner show",
      averageWaitMinutes: 15,
      seasonalHoursNote: "Open daily 07:00 – 00:00 (Summer extended evening service until 01:00 AM)",
      nearbyDistances: [
        {
          id: "near-agadir-beach",
          name: "Agadir Beach & Marina",
          category: "Beach & Waterfront",
          distance_km: 5.5,
          travel_time_minutes: 15,
          travel_mode: "drive",
          note: "Short taxi or drive west via Avenue Mohammed V"
        },
        {
          id: "near-souk-el-had",
          name: "Souk El Had",
          category: "Traditional Market",
          distance_km: 4.0,
          travel_time_minutes: 12,
          travel_mode: "drive",
          note: "Direct taxi ride along Boulevard Abderrahim Bouabid"
        },
        {
          id: "near-crocoparc",
          name: "Crocoparc Agadir",
          category: "Attraction",
          distance_km: 11.0,
          travel_time_minutes: 18,
          travel_mode: "drive",
          note: "Eastbound via RN8 toward Drarga"
        },
        {
          id: "near-aga-airport",
          name: "Agadir–Al Massira Airport (AGA)",
          category: "Airport",
          distance_km: 20.0,
          travel_time_minutes: 25,
          travel_mode: "drive",
          note: "Direct boulevard access from N1 / Hay Mohammadi"
        }
      ],
      editorialGuide: [
        {
          heading: "Breakfast & Brunch (07:00 – 12:00)",
          body: "Moroccan spreads, fresh juices, specialty coffees, and hot Dutch poffertjes with butter, Nutella, or Biscoff."
        },
        {
          heading: "Lunch & Dutch Favorites",
          body: "Patatje Oorlog satay fries, grilled chicken satay, wood-fired pizzas, seafood pasta, and brioche burgers."
        },
        {
          heading: "Halal Steaks & Live Music",
          body: "Dry-aged Côte de Bœuf, A5 Kobe Wagyu, optional 24K gold leaf, plus Fri–Sat live violin/guitar (from 20:30)."
        },
        {
          heading: "Dry-Ice Mocktail Bar",
          body: "100% halal & alcohol-free—virgin mojitos and botanical mocktails served in theatrical dry-ice cabinets."
        }
      ],
      knowBeforeYouGo: [
        "Live violin & guitar: Fri–Sat from 20:30",
        "100% halal kitchen & strictly alcohol-free (dry)",
        "Book 24–48h ahead via WhatsApp (+212 609-070598)",
        "Parking near Résidence Islane (~15 min from Marina)",
        "Service charge included in listed MAD prices"
      ],
      faqs: [
        {
          question: "How do I book a table at Amsterdam Luxury Restaurant in Agadir?",
          answer: "You can reserve a table via WhatsApp (+212 609-070598), by calling +212 5282-01799, or through amsterdamagadir.com. Booking 24 to 48 hours ahead is strongly recommended for Friday and Saturday evening dinner slots."
        },
        {
          question: "When does the live violin and dinner music take place?",
          answer: "Live acoustic violin and guitar performances take place on Friday and Saturday evenings starting from 20:30. Arrive around 20:00 if you want settled seating before the first set begins."
        },
        {
          question: "Is Amsterdam Luxury Restaurant Agadir halal, and does it serve alcohol?",
          answer: "Yes, the kitchen is 100% halal-certified across all meats—including dry-aged cuts and Japanese A5 Kobe Beef. It is a strictly alcohol-free (dry) restaurant featuring an artisanal mocktail mixology bar."
        },
        {
          question: "Does the restaurant serve breakfast, lunch, and Dutch specialties?",
          answer: "Yes. Doors open at 07:00 daily for breakfast and brunch alongside coffee, gourmet burgers, wood-fired pizzas, Dutch Patatje Oorlog fries, chicken satay, and traditional Dutch poffertjes pancakes."
        },
        {
          question: "How much does a meal cost at Amsterdam Luxury Restaurant?",
          answer: "Most diners spend between 230 and 460 MAD per person for regular starters, burgers, pasta, or classic steaks (poultry and pasta mains start around 95–185 MAD; classic steaks 235–485 MAD). Specialty 24K gold cuts and certified A5 Kobe Beef range from 900 to 3,700 MAD for sharing or special occasions."
        },
        {
          question: "Are the 24K gold steaks and A5 Kobe Wagyu always available?",
          answer: "Yes, signature 24K edible gold steaks (Filet de Bœuf 24K Gold, Côte de Bœuf 24K Gold), Golden Burger 24K, Dubai 24K Gold Chocolate, and certified A5 Kobe Beef are featured on the verified house menu with tableside cloche and smoke presentation."
        },
        {
          question: "Is Amsterdam Luxury Restaurant family-friendly, and is parking available?",
          answer: "Yes, families are welcome throughout breakfast, lunch, and dinner, with burgers, pizzas, desserts, and spacious indoor/outdoor seating. Parking is available nearby at Résidence Islane in Hay Mohammadi."
        },
        {
          question: "How far is Amsterdam Luxury Restaurant from Agadir Beach and Marina?",
          answer: "Located in Hay Mohammadi (Résidence Islane GH14, N6), the restaurant is approximately 5.5 km from Agadir Beach and the Marina—around a 15-minute taxi or car ride (~60–70 MAD by petit taxi)."
        }
      ],
      menu: {
        currency: "MAD",
        lastUpdated: "Verified March 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: 'entrees-froides',
            title: 'Entrées Froides (Cold Starters)',
            titleEn: 'Cold Starters & Carpaccio',
            description: 'Salades fraîches, burrata et carpaccio préparés à la minute',
            descriptionEn: 'Fresh salads, creamy Italian burrata, and aged beef carpaccio prepared to order',
            items: [
              {
                id: 'amst-burrata',
                name: 'Burrata',
                localName: 'جبنة بوراتا الإيطالية الطازجة مع الطماطم الكرزية والريحان',
                translations: {
                  ar: 'جبنة بوراتا الإيطالية الطازجة مع الطماطم الكرزية والريحان',
                  en: 'Fresh Italian burrata with cherry tomatoes and basil',
                  es: 'Burrata italiana fresca con tomates cherry y albahaca',
                  de: 'Frische italienische Burrata mit Kirschtomaten und Basilikum',
                },
                price: 90,
                dietary: ['vegetarian', 'halal'],
                isSignature: true,
              },
              {
                id: 'amst-tartare-avocat-crevettes',
                name: 'Tartare Avocat & Crevettes',
                localName: 'تارتار الأفوكادو والروبيان بصلصة الحمضيات',
                translations: {
                  ar: 'تارتار الأفوكادو والروبيان بصلصة الحمضيات',
                  en: 'Avocado & shrimp tartare with citrus vinaigrette',
                  es: 'Tartar de aguacate y gambas con vinagreta de cítricos',
                  de: 'Avocado-Garnelen-Tatar mit Zitrus-Vinaigrette',
                },
                price: 80,
                dietary: ['halal'],
              },
              {
                id: 'amst-salade-fruits-de-mer',
                name: 'Salade de Fruits de Mer',
                localName: 'سلطة فواكه البحر مع الحبار والروبيان الطازج',
                translations: {
                  ar: 'سلطة فواكه البحر مع الحبار والروبيان الطازج',
                  en: 'Atlantic seafood salad with shrimp, squid, and herbs',
                  es: 'Ensalada de mariscos con gambas, calamares y hierbas',
                  de: 'Meeresfrüchtesalat mit Garnelen, Tintenfisch und Kräutern',
                },
                price: 80,
                dietary: ['halal'],
              },
              {
                id: 'amst-salade-cesar-poulet',
                name: 'Salade César au Poulet',
                localName: 'سلطة سيزر الكلاسيكية بالدجاج المشوي وجبن البارميزان',
                translations: {
                  ar: 'سلطة سيزر الكلاسيكية بالدجاج المشوي وجبن البارميزان',
                  en: 'Classic Caesar salad with grilled chicken and parmesan shavings',
                  es: 'Ensalada César clásica con pollo a la parrilla y parmesano',
                  de: 'Klassischer Caesar-Salat mit gegrilltem Hähnchen und Parmesan',
                },
                price: 75,
                dietary: ['halal'],
              },
              {
                id: 'amst-salade-exotique-poulet',
                name: 'Salade Exotique au Poulet',
                localName: 'سلطة الدجاج الاستوائية مع الفواكه الطازجة',
                translations: {
                  ar: 'سلطة الدجاج الاستوائية مع الفواكه الطازجة',
                  en: 'Exotic chicken salad with tropical fruits and mixed greens',
                  es: 'Ensalada exótica de pollo con frutas tropicales y brotes',
                  de: 'Exotischer Hähnchensalat mit tropischen Früchten und Blattsalaten',
                },
                price: 75,
                dietary: ['halal'],
              },
              {
                id: 'amst-carpaccio-boeuf',
                name: 'Carpaccio de Bœuf',
                localName: 'كارباتشيو اللحم البقري المعتق مع زيت الزيتون وجبن البارميزان',
                translations: {
                  ar: 'كارباتشيو اللحم البقري المعتق مع زيت الزيتون وجبن البارميزان',
                  en: 'Aged beef carpaccio with extra virgin olive oil, rocket, and parmesan',
                  es: 'Carpaccio de ternera curada con aceite de oliva, rúcula y parmesano',
                  de: 'Rinder-Carpaccio mit nativem Olivenöl, Rucola und Parmesan',
                },
                price: 160,
                isSignature: true,
                dietary: ['halal'],
              },
            ],
          },
          {
            id: 'soupes',
            title: 'Soupes (Soups)',
            titleEn: 'Warm Soups & Seafood Bisques',
            description: 'Soupes chaudes réconfortantes et veloutés marins',
            descriptionEn: 'Comforting warm vegetable veloutés and rich Atlantic seafood soups',
            items: [
              {
                id: 'amst-soupe-royale-fruits-mer',
                name: 'Soupe Royale de Fruits de Mer',
                localName: 'حساء فواكه البحر الملكي الغني بالأسماك والقريدس',
                translations: {
                  ar: 'حساء فواكه البحر الملكي الغني بالأسماك والقريدس',
                  en: 'Royal seafood soup with Atlantic fish and prawns',
                  es: 'Sopa real de mariscos con pescado del Atlántico y gambas',
                  de: 'Königliche Meeresfrüchtesuppe mit Atlantikfisch und Garnelen',
                },
                price: 100,
                isSignature: true,
                dietary: ['halal'],
              },
              {
                id: 'amst-soupe-lentilles',
                name: 'Soupe de Lentilles',
                localName: 'شوربة العدس المتبلة بالأعشاب',
                translations: {
                  ar: 'شوربة العدس المتبلة بالأعشاب',
                  en: 'Spiced velvet lentil soup',
                  es: 'Sopa cremosa de lentejas especiadas',
                  de: 'Cremige gewürzte Linsensuppe',
                },
                price: 70,
                dietary: ['vegetarian', 'vegan', 'halal'],
              },
              {
                id: 'amst-soupe-legumes',
                name: 'Soupe de Légumes',
                localName: 'حساء الخضار الطازجة موسمي',
                translations: {
                  ar: 'حساء الخضار الطازجة موسمي',
                  en: 'Fresh seasonal vegetable soup',
                  es: 'Sopa de verduras frescas de temporada',
                  de: 'Frische saisonale Gemüsesuppe',
                },
                price: 70,
                dietary: ['vegetarian', 'vegan', 'halal'],
              },
            ],
          },
          {
            id: 'entrees-chaudes-hollandaises',
            title: 'Entrées Chaudes & Spécialités Hollandaises (Warm Starters & Dutch Street Food)',
            titleEn: 'Warm Starters & Dutch Street Food',
            description: 'Street food néerlandais authentique et bouchées chaudes croustillantes',
            descriptionEn: 'Authentic Dutch street food fries, crispy potato croquettes, and sizzling starters',
            items: [
              {
                id: 'amst-crevettes-pili-pili',
                name: 'Crevettes Pili-Pili',
                localName: 'روبيان مطهو في زيت الزيتون الحار مع الثوم والفلفل',
                translations: {
                  ar: 'روبيان مطهو في زيت الزيتون الحار مع الثوم والفلفل',
                  en: 'Sizzling garlic and chili prawns in virgin olive oil',
                  es: 'Gambas al pil-pil chisporroteantes con ajo y guindilla',
                  de: 'Brutzelnde Knoblauch-Chili-Garnelen in Olivenöl',
                },
                price: 85,
                isSpicy: true,
                dietary: ['halal'],
              },
              {
                id: 'amst-patatje-oorlog',
                name: 'Patatje Oorlog (Frites Hollandaises "Guerre")',
                localName: 'بطاطس مقلية هولندية شهيرة بصلصة الساتيه والمايونيز والبصل المفروم',
                translations: {
                  ar: 'بطاطس مقلية هولندية شهيرة بصلصة الساتيه (الفول السوداني) والمايونيز والبصل المفروم',
                  en: 'Traditional Dutch "War Fries" with satay peanut sauce, mayonnaise, and diced raw onions',
                  es: 'Patatas holandesas estilo "guerra" con salsa satay de cacahuete, mayonesa y cebolla picada',
                  de: 'Holländische "Patatje Oorlog" Pommes mit Erdnuss-Saté-Sauce, Mayonnaise und Zwiebeln',
                },
                price: 60,
                isSignature: true,
                dietary: ['vegetarian', 'halal'],
              },
              {
                id: 'amst-patatje-speciaal',
                name: 'Patatje Speciaal (Frites Hollandaises Spéciales)',
                localName: 'بطاطس مقلية هولندية بصلصة الكاري كاتشب والمايونيز والبصل الطازج',
                translations: {
                  ar: 'بطاطس مقلية هولندية بصلصة الكاري كاتشب والمايونيز والبصل الطازج',
                  en: 'Traditional Dutch "Special Fries" with curry ketchup, mayonnaise, and chopped onions',
                  es: 'Patatas holandesas especiales con kétchup de curry, mayonesa y cebolla',
                  de: 'Holländische Spezial-Pommes mit Curry-Ketchup, Mayonnaise und Zwiebeln',
                },
                price: 60,
                dietary: ['vegetarian', 'halal'],
              },
              {
                id: 'amst-frites-truffe-parmesan',
                name: 'Frites à la Truffe & Parmesan',
                localName: 'بطاطس مقلية بصلصة الكمأة الإيطالية وجبن البارميزان المبشور',
                translations: {
                  ar: 'بطاطس مقلية بصلصة الكمأة الإيطالية وجبن البارميزان المبشور',
                  en: 'Crispy fries drizzled with truffle oil and shaved parmesan',
                  es: 'Patatas fritas crujientes con aceite de trufa y parmesano rallado',
                  de: 'Knusprige Pommes mit Trüffelöl und gehobeltem Parmesan',
                },
                price: 70,
                dietary: ['vegetarian', 'halal'],
              },
              {
                id: 'amst-croquettes-pdt-fromage',
                name: 'Croquettes de Pommes de Terre & Fromage',
                localName: 'كروكيت البطاطس المحشوة بالجبن الذائب',
                translations: {
                  ar: 'كروكيت البطاطس المحشوة بالجبن الذائب',
                  en: 'Golden potato croquettes with a molten cheese center',
                  es: 'Croquetas crujientes de patata con corazón de queso fundido',
                  de: 'Goldene Kartoffelkroketten mit schmelzendem Käsekern',
                },
                price: 55,
                dietary: ['vegetarian', 'halal'],
              },
            ],
          },
          {
            id: 'viandes-grills',
            title: 'Viandes de Qualité & Grills (Steaks & Charcoal Cuts)',
            titleEn: 'Prime Dry-Aged Steaks, A5 Wagyu & 24K Gold Cuts',
            description: 'Cuts d’exception, dry-aged beef, bœuf wagyu certifié et or 24K comestible',
            descriptionEn: 'Himalayan salt dry-aged steaks, charcoal grills, certified Japanese A5 Kobe beef, and 24K gold leaf cuts',
            items: [
              {
                id: 'amst-filet-boeuf-200g',
                name: 'Filet de Bœuf (200g / 400g)',
                localName: 'فيليه لحم بقري طري مشوي على الفحم (200غ / 400غ)',
                translations: {
                  ar: 'فيليه لحم بقري طري مشوي على الفحم (200غ / 400غ)',
                  en: 'Charcoal-grilled tender beef fillet (200g / 400g)',
                  es: 'Solomillo de ternera a la parrilla de carbón (200g / 400g)',
                  de: 'Zartes Rinderfilet vom Holzkohlegrill (200g / 400g)',
                },
                price: 235,
                dietary: ['halal'],
                portionNotes: 'Option 400g: 405 MAD'
              },
              {
                id: 'amst-filet-boeuf-gold',
                name: 'Filet de Bœuf 24K Gold (400g)',
                localName: 'فيليه بقري فاخر (400غ) مغطى بأوراق ذهب عيار 24 قيراط صالحة للأكل',
                translations: {
                  ar: 'فيليه بقري فاخر (400غ) مغطى بأوراق ذهب عيار 24 قيراط صالحة للأكل',
                  en: 'Prime beef fillet (400g) completely draped in edible 24K gold leaf',
                  es: 'Solomillo de ternera (400g) bañado en láminas de oro comestible de 24 quilates',
                  de: 'Rinderfilet (400g) vollständig umhüllt von essbarem 24-Karat-Blattgold',
                },
                price: 900,
                isSignature: true,
                dietary: ['halal'],
                portionNotes: 'Présentation théâtrale cloche dorée'
              },
              {
                id: 'amst-entrecote-grillee',
                name: 'Entrecôte Grillée (300g)',
                localName: 'شريحة إنتركوت بقري معتقة ومشوية على الفحم',
                translations: {
                  ar: 'شريحة إنتركوت بقري معتقة ومشوية على الفحم',
                  en: 'Charcoal-grilled dry-aged ribeye steak (300g)',
                  es: 'Entrecot de ternera madurada a la parrilla (300g)',
                  de: 'Am Knochen gereiftes Rib-Eye / Entrecôte-Steak vom Grill (300g)',
                },
                price: 340,
                dietary: ['halal'],
              },
              {
                id: 'amst-cote-de-boeuf-1kg',
                name: 'Côte de Bœuf (1 kg)',
                localName: 'ضلع بقري تيشربت (1 كغ) معتق على ملح الهيمالايا ومشوي على الحطب',
                translations: {
                  ar: 'ضلع بقري تيشربت (1 كغ) معتق على ملح الهيمالايا ومشوي على الحطب',
                  en: '1 kg Himalayan salt dry-aged prime bone-in rib of beef',
                  es: 'Chuletón de buey con hueso de 1 kg madurado en sal del Himalaya',
                  de: '1 kg Rinderkotelett am Knochen, gereift in Himalaya-Salzsteinkammern',
                },
                price: 485,
                isSignature: true,
                dietary: ['halal'],
                portionNotes: 'Idéal pour 2 à 3 personnes'
              },
              {
                id: 'amst-cote-de-boeuf-gold',
                name: 'Côte de Bœuf 24K Gold (1 kg)',
                localName: 'ضلع بقري (1 كغ) مغلف بالكامل بأوراق الذهب عيار 24 قيراط',
                translations: {
                  ar: 'ضلع بقري (1 كغ) مغلف بالكامل بأوراق الذهب عيار 24 قيراط',
                  en: '1 kg imperial bone-in rib of beef draped in 24K edible gold leaf',
                  es: 'Chuletón de 1 kg cubierto completamente con oro comestible de 24 quilates',
                  de: '1 kg Rinderkotelett umhüllt mit 24-Karat-Blattgold',
                },
                price: 1005,
                isSignature: true,
                dietary: ['halal'],
                portionNotes: 'Servi avec rituel de fumée à table'
              },
              {
                id: 'amst-cotelettes-agneau',
                name: 'Côtelettes d\'Agneau (250g / 500g)',
                localName: 'ريش لحم الضأن المشوية بالأعشاب البرية',
                translations: {
                  ar: 'ريش لحم الضأن المشوية بالأعشاب البرية',
                  en: 'Tender lamb chops seared with wild Mediterranean herbs',
                  es: 'Chuletillas de cordero lechal a la brasa con hierbas aromáticas',
                  de: 'Zarte Lammkoteletts mit mediterranen Kräutern gegrillt',
                },
                price: 265,
                dietary: ['halal'],
                portionNotes: 'Option 500g: 355 MAD'
              },
              {
                id: 'amst-spare-ribs',
                name: 'Spare Ribs de Bœuf Glacés (500g / 1 kg)',
                localName: 'أضلاع بقرية مطهوة ببطء ومدهونة بصلصة الباربكيو المدخنة والسمسم',
                translations: {
                  ar: 'أضلاع بقرية مطهوة ببطء ومدهونة بصلصة الباربكيو المدخنة والسمسم',
                  en: 'Slow-cooked beef short ribs glazed in house BBQ sauce and toasted sesame',
                  es: 'Costillas de ternera confitadas y glaseadas con salsa barbacoa y sésamo',
                  de: 'Zart gegarte Rinderrippchen, glasiert mit BBQ-Sauce und geröstetem Sesam',
                },
                price: 290,
                dietary: ['halal'],
                portionNotes: 'Option 1 kg: 525 MAD'
              },
              {
                id: 'amst-ribeye-black-angus',
                name: 'Rib Eye Black Angus (250g / 500g)',
                localName: 'شريحة ريب آي من لحم البلاك أنجوس الأمريكي الفاخر المعتق',
                translations: {
                  ar: 'شريحة ريب آي من لحم البلاك أنجوس الأمريكي الفاخر المعتق',
                  en: 'Prime grain-fed Black Angus rib eye aged up to 60 days',
                  es: 'Ojo de bife Black Angus de grano curado hasta 60 días',
                  de: 'Getreidegefüttertes Black Angus Rib-Eye, bis zu 60 Tage gereift',
                },
                price: 1000,
                isSignature: true,
                dietary: ['halal'],
                portionNotes: 'Option 500g: 1 600 MAD'
              },
              {
                id: 'amst-kobe-beef-a5',
                name: 'Entrecôte Kobe Beef A5 (250g)',
                localName: 'لحم بقر كوبي ياباني أصيل معتمد حلال بدرجة رخامية A5',
                translations: {
                  ar: 'لحم بقر كوبي ياباني أصيل معتمد حلال بدرجة رخامية A5',
                  en: 'Certified authentic Japanese A5 Wagyu / Kobe beef entrecôte',
                  es: 'Entrecot de auténtico buey Wagyu japonés certificado A5 Kobe',
                  de: 'Zertifiziertes echtes japanisches A5 Wagyu / Kobe-Rind Entrecôte',
                },
                price: 2700,
                isSignature: true,
                dietary: ['halal'],
                portionNotes: 'Origine Japon certifiée Halal'
              },
              {
                id: 'amst-kobe-beef-gold',
                name: 'Entrecôte Kobe Beef A5 24K Gold (250g)',
                localName: 'لحم كوبي ياباني A5 مكسو بأوراق الذهب عيار 24 قيراط ومقدم بطقوس الدخان',
                translations: {
                  ar: 'لحم كوبي ياباني A5 مكسو بأوراق الذهب عيار 24 قيراط ومقدم بطقوس الدخان',
                  en: 'A5 Kobe beef steak draped in 24K gold leaf, presented with tableside smoke ritual',
                  es: 'Entrecot Kobe A5 bañado en oro de 24 quilates con ritual de humo en mesa',
                  de: 'A5 Kobe-Steak mit 24K Blattgold und theatralischer Rauchinzenierung am Tisch',
                },
                price: 3700,
                isSignature: true,
                dietary: ['halal'],
                portionNotes: 'Le plat d\'exception ultime de la maison'
              },
            ],
          },
          {
            id: 'specialites-volailles',
            title: 'Spécialités Maison & Volailles (House Specialties & Poultry)',
            titleEn: 'House Specialties, Chicken Satay & Mixed Grills',
            description: 'Plats signatures, brochettes saté néerlandaises et volailles fermières',
            descriptionEn: 'Amsterdam Luxe Grill platters, Dutch peanut chicken satay, meatballs, and tender poultry dishes',
            items: [
              {
                id: 'amst-luxe-grill',
                name: 'Amsterdam Luxe Grill',
                localName: 'تشكيلة مشويات أمستردام الفاخرة (قطع لحم فاخرة، كفتة، كباب، خضار مشوية)',
                translations: {
                  ar: 'تشكيلة مشويات أمستردام الفاخرة (قطع لحم فاخرة، كفتة، كباب، خضار مشوية)',
                  en: 'Amsterdam luxury mixed grill platter with assorted prime meats and sides',
                  es: 'Gran parrillada de carnes selectas Amsterdam Luxe con guarniciones',
                  de: 'Amsterdam Luxe Gemischte Grillplatte mit erlesenen Fleischsorten und Beilagen',
                },
                price: 365,
                isSignature: true,
                dietary: ['halal'],
              },
              {
                id: 'amst-brochettes-sate',
                name: 'Brochettes Saté de Poulet (Chicken Satay)',
                localName: 'أسياخ دجاج مشوية بصلصة الفول السوداني الهولندية التقليدية والسمسم',
                translations: {
                  ar: 'أسياخ دجاج مشوية بصلصة الفول السوداني الهولندية التقليدية والسمسم',
                  en: 'Char-grilled chicken skewers smothered in traditional Dutch peanut satay sauce',
                  es: 'Brochetas de pollo a la brasa con salsa satay holandesa de cacahuete',
                  de: 'Gegrillte Hähnchenspieße mit traditioneller holländischer Erdnuss-Saté-Sauce',
                },
                price: 185,
                isSignature: true,
                dietary: ['halal'],
              },
              {
                id: 'amst-emince-boeuf',
                name: 'Émincé de Bœuf Crème & Champignons',
                localName: 'شرائح لحم بقري طرية بكريمة الفطر الطازج',
                translations: {
                  ar: 'شرائح لحم بقري طرية بكريمة الفطر الطازج',
                  en: 'Sautéed beef tenderloin strips in creamy wild mushroom sauce',
                  es: 'Tiras de solomillo de ternera salteadas con crema de champiñones',
                  de: 'Rindergeschnetzeltes in cremiger Waldpilzsauce',
                },
                price: 180,
                dietary: ['halal'],
              },
              {
                id: 'amst-filet-poulet-risotto',
                name: 'Filet de Poulet & Risotto de Légumes',
                localName: 'صدر دجاج طري مطهو ببطء يقدم مع ريزوتو الخضار',
                translations: {
                  ar: 'صدر دجاج طري مطهو ببطء يقدم مع ريزوتو الخضار',
                  en: 'Slow-cooked tender chicken breast served over creamy vegetable risotto',
                  es: 'Pechuga de pollo cocinada a baja temperatura con risotto de verduras',
                  de: 'Zart gegarte Hähnchenbrust auf cremigem Gemüserisotto',
                },
                price: 165,
                dietary: ['halal'],
              },
              {
                id: 'amst-boulette-hollandaise',
                name: 'Boulette Hollandaise Traditionnelle (Gehaktbal)',
                localName: 'كرة اللحم الهولندية التقليدية المحضرة يدوياً بمرق اللحم الكثيف',
                translations: {
                  ar: 'كرة اللحم الهولندية التقليدية المحضرة يدوياً بمرق اللحم الكثيف',
                  en: 'Traditional Dutch homemade spiced meatball served in rich pan gravy',
                  es: 'Albóndiga tradicional holandesa casera con salsa de carne',
                  de: 'Traditionelle hausgemachte holländische Frikadelle in herzhafter Bratensauce',
                },
                price: 125,
                dietary: ['halal'],
              },
            ],
          },
          {
            id: 'burgers-gourmets',
            title: 'Burgers Gourmets (Gourmet Burgers)',
            titleEn: 'Gourmet Wagyu & Brioche Burgers',
            description: 'Pain brioché artisanal, viandes nobles et frites dorées',
            descriptionEn: 'Artisan brioche buns, 24K gold Wagyu burgers, halal double cheeseburgers, and crispy fries',
            items: [
              {
                id: 'amst-golden-burger-24k',
                name: 'Golden Burger 24K',
                localName: 'برغر لحم الواغيو الفاخر المزين بغبار وأوراق الذهب عيار 24، جبن الشيدر، وصلصة الكمأة',
                translations: {
                  ar: 'برغر لحم الواغيو الفاخر المزين بغبار وأوراق الذهب عيار 24، جبن الشيدر، وصلصة الكمأة',
                  en: 'Artisan brioche burger with premium Wagyu patty, 24K edible gold, melted cheddar & truffle glaze',
                  es: 'Hamburguesa de carne Wagyu cubierta de oro de 24 quilates, queso cheddar fundido y trufa',
                  de: 'Wagyu-Burger im Brioche-Bun mit essbarem 24K-Gold, gereiftem Cheddar und Trüffelsauce',
                },
                price: 170,
                isSignature: true,
                dietary: ['halal'],
              },
              {
                id: 'amst-west-side-burger',
                name: 'West Side Burger',
                localName: 'برغر اللحم البقري المضاعف مع شرائح اللحم المقدد، البصل المكرمل، وصلصة الشواء',
                translations: {
                  ar: 'برغر اللحم البقري المضاعف مع شرائح اللحم المقدد، البصل المكرمل، وصلصة الشواء',
                  en: 'Double beef burger with halal bacon, caramelized onions, cheddar, and BBQ sauce',
                  es: 'Hamburguesa doble de ternera con panceta halal, cebolla caramelizada y salsa barbacoa',
                  de: 'Doppelter Rindfleischburger mit Halal-Bacon, karamellisierten Zwiebeln und BBQ-Sauce',
                },
                price: 125,
                dietary: ['halal'],
              },
              {
                id: 'amst-amsterdam-cheeseburger',
                name: 'Amsterdam Cheeseburger',
                localName: 'تشيز برغر كلاسيكي بلحم بقري ممتاز وجبن الشيدر والصلصة المنزلية',
                translations: {
                  ar: 'تشيز برغر كلاسيكي بلحم بقري ممتاز وجبن الشيدر والصلصة المنزلية',
                  en: 'Classic Amsterdam prime beef burger with melted cheddar, pickles, and house relish',
                  es: 'Hamburguesa clásica Amsterdam con ternera selecta, queso cheddar y salsa casera',
                  de: 'Klassischer Amsterdam Cheeseburger mit Rindfleisch, Cheddar und Haussauce',
                },
                price: 110,
                dietary: ['halal'],
              },
              {
                id: 'amst-fish-burger',
                name: 'Fish Burger',
                localName: 'برغر فيليه السمك المقرمش مع الجبن الذائب وصلصة التارتار',
                translations: {
                  ar: 'برغر فيليه السمك المقرمش مع الجبن الذائب وصلصة التارتار',
                  en: 'Crispy fried white fish fillet burger with cheddar and homemade tartar sauce',
                  es: 'Hamburguesa de filete de pescado crujiente con cheddar y salsa tártara',
                  de: 'Knuspriger Weißfischfilet-Burger mit Cheddar und hausgemachter Remoulade',
                },
                price: 110,
                dietary: ['halal'],
              },
              {
                id: 'amst-crispy-chicken-burger',
                name: 'Crispy Chicken Burger',
                localName: 'برغر صدر الدجاج المقرمش بالبانكو مع سلطة الكولسلو والصلصة الخاصة',
                translations: {
                  ar: 'برغر صدر الدجاج المقرمش بالبانكو مع سلطة الكولسلو والصلصة الخاصة',
                  en: 'Panko-crusted crispy chicken breast burger with crunchy coleslaw and spicy mayo',
                  es: 'Hamburguesa de pechuga de pollo crujiente al panko con ensalada de col',
                  de: 'Knusprig panierter Hähnchenbrust-Burger mit Coleslaw und würziger Mayonnaise',
                },
                price: 100,
                dietary: ['halal'],
              },
            ],
          },
          {
            id: 'pizzas-pates-gratins',
            title: 'Pizzas, Pâtes & Gratins (Pizzas, Pastas & Bakes)',
            titleEn: 'Wood-Fired Pizzas, Fresh Pastas & Oven Gratins',
            description: 'Pizzas au feu de bois, lasagnes maison et pâtes fraîches',
            descriptionEn: 'Wood-fired halal pizzas, Atlantic seafood pastas, homemade beef lasagna, and baked gratins',
            items: [
              {
                id: 'amst-pizza-fruits-de-mer',
                name: 'Pizza Fruits de Mer',
                localName: 'بيتزا فواكه البحر (روبيان، حبار، جبن الموزاريلا، صلصة طماطم سان مارزانو)',
                translations: {
                  ar: 'بيتزا فواكه البحر (روبيان، حبار، جبن الموزاريلا، صلصة طماطم سان مارزانو)',
                  en: 'Seafood pizza with Atlantic prawns, calamari, mozzarella, and San Marzano sauce',
                  es: 'Pizza de mariscos con gambas, calamares, mozzarella y salsa de tomate',
                  de: 'Meeresfrüchte-Pizza mit Atlantik-Garnelen, Tintenfisch, Mozzarella und Tomatensauce',
                },
                price: 100,
                dietary: ['halal'],
              },
              {
                id: 'amst-pizza-pepperoni',
                name: 'Pizza Pepperoni',
                localName: 'بيتزا بيبروني بقري حار وموزاريلا وأوريغانو',
                translations: {
                  ar: 'بيتزا بيبروني بقري حار وموزاريلا وأوريغانو',
                  en: 'Pepperoni pizza with spicy beef salami, mozzarella, and oregano',
                  es: 'Pizza de pepperoni con salami picante de ternera y mozzarella',
                  de: 'Pepperoni-Pizza mit scharfer Rindersalami, Mozzarella und Oregano',
                },
                price: 95,
                isSpicy: true,
                dietary: ['halal'],
              },
              {
                id: 'amst-pizza-viande-hachee',
                name: 'Pizza Viande Hachée',
                localName: 'بيتزا اللحم البقري المفروم مع الفلفل المشوي والجبن الذائب',
                translations: {
                  ar: 'بيتزا اللحم البقري المفروم مع الفلفل المشوي والجبن الذائب',
                  en: 'Spiced minced beef pizza with roasted bell peppers and melted mozzarella',
                  es: 'Pizza de carne picada sazonada con pimientos asados y mozzarella',
                  de: 'Hackfleisch-Pizza mit gewürztem Rinderhack, gegrillter Paprika und Mozzarella',
                },
                price: 90,
                dietary: ['halal'],
              },
              {
                id: 'amst-pizza-margherita',
                name: 'Pizza Margherita',
                localName: 'بيتزا مارغريتا الكلاسيكية بصلصة الطماطم وجبن الموزاريلا والريحان الطازج',
                translations: {
                  ar: 'بيتزا مارغريتا الكلاسيكية بصلصة الطماطم وجبن الموزاريلا والريحان الطازج',
                  en: 'Classic Margherita pizza with San Marzano tomatoes, mozzarella, and fresh basil',
                  es: 'Pizza Margarita clásica con salsa de tomate, mozzarella y albahaca fresca',
                  de: 'Klassische Pizza Margherita mit Tomatensauce, Mozzarella und frischem Basilikum',
                },
                price: 65,
                dietary: ['vegetarian', 'halal'],
              },
              {
                id: 'amst-pates-fruits-de-mer',
                name: 'Pâtes aux Fruits de Mer',
                localName: 'معكرونة بفواكه البحر الطازجة في صلصة الطماطم والثوم الخفيفة',
                translations: {
                  ar: 'معكرونة بفواكه البحر الطازجة في صلصة الطماطم والثوم الخفيفة',
                  en: 'Seafood pasta tossed with prawns, calamari, and garlic herb reduction',
                  es: 'Pasta con mariscos, gambas y calamares en suave salsa de ajo y hierbas',
                  de: 'Meeresfrüchte-Pasta mit Garnelen, Tintenfisch und feiner Knoblauch-Kräutersauce',
                },
                price: 100,
                dietary: ['halal'],
              },
              {
                id: 'amst-lasagne-maison',
                name: 'Lasagne Maison à la Bolognaise',
                localName: 'لازانيا إيطالية تقليدية باللحم البقري المطهو ببطء وصلصة البشاميل',
                translations: {
                  ar: 'لازانيا إيطالية تقليدية باللحم البقري المطهو ببطء وصلصة البشاميل',
                  en: 'Traditional oven-baked lasagna with rich beef Bolognese and creamy béchamel',
                  es: 'Lasaña tradicional al horno con boloñesa de ternera y bechamel',
                  de: 'Hausgemachte Ofenlasagne mit Rinderbolognese und cremiger Béchamelsauce',
                },
                price: 95,
                dietary: ['halal'],
              },
              {
                id: 'amst-gratin-fruits-de-mer',
                name: 'Gratin de Fruits de Mer',
                localName: 'غراتان فواكه البحر والقريدس المخبوز بالفرن مع الجبن الذائب',
                translations: {
                  ar: 'غراتان فواكه البحر والقريدس المخبوز بالفرن مع الجبن الذائب',
                  en: 'Oven-baked Atlantic seafood gratin under a golden melted cheese crust',
                  es: 'Gratén de mariscos al horno con costra de queso dorado',
                  de: 'Überbackener Meeresfrüchte-Gratin mit goldener Käsekruste',
                },
                price: 100,
                dietary: ['halal'],
              },
            ],
          },
          {
            id: 'poffertjes-desserts',
            title: 'Poffertjes Hollandais & Desserts (Dutch Poffertjes & Sweets)',
            titleEn: 'Traditional Dutch Poffertjes & Luxury Desserts',
            description: 'Poffertjes traditionnels cuits minute, chocolat Dubaï 24K et douceurs',
            descriptionEn: 'Fluffy Dutch mini-pancakes cooked fresh to order, 24K Dubai chocolate, tiramisu, and molten lava cake',
            items: [
              {
                id: 'amst-poffertjes-amsterdam',
                name: 'Poffertjes Amsterdam',
                localName: 'بانكيك هولندي صغير منتفخ يقدم بالزبدة الفاخرة وسكر البودرة وصلصات المحل المميزة',
                translations: {
                  ar: 'بانكيك هولندي صغير منتفخ يقدم بالزبدة الفاخرة وسكر البودرة وصلصات المحل المميزة',
                  en: 'Amsterdam signature fluffy mini Dutch pancakes with melted farm butter and toppings',
                  es: 'Mini tortitas esponjosas holandesas Amsterdam servidas con mantequilla y azúcar glas',
                  de: 'Typische Amsterdamer Mini-Pfannkuchen (Poffertjes) mit zerlassener Butter und Puderzucker',
                },
                price: 85,
                isSignature: true,
                dietary: ['vegetarian', 'halal'],
              },
              {
                id: 'amst-poffertjes-nutella',
                name: 'Poffertjes Nutella',
                localName: 'بانكيك هولندي صغير مغطى بشوكولاتة النوتيلا الذائبة',
                translations: {
                  ar: 'بانكيك هولندي صغير مغطى بشوكولاتة النوتيلا الذائبة',
                  en: 'Warm mini Dutch pancakes smothered in rich melted Nutella',
                  es: 'Poffertjes holandeses cubiertos de Nutella caliente',
                  de: 'Warme holländische Poffertjes mit reichlich Nutella',
                },
                price: 65,
                dietary: ['vegetarian', 'halal'],
              },
              {
                id: 'amst-poffertjes-speculoos',
                name: 'Poffertjes Spéculoos (Lotus Biscoff)',
                localName: 'بانكيك هولندي صغير بصلصة وبسكويت اللوتس سبيكولوس',
                translations: {
                  ar: 'بانكيك هولندي صغير بصلصة وبسكويت اللوتس سبيكولوس',
                  en: 'Mini Dutch pancakes drizzled with Lotus Biscoff speculoos cream and crumbs',
                  es: 'Poffertjes con crema y galleta Lotus Biscoff especiada',
                  de: 'Poffertjes mit flüssiger Lotus-Biscoff-Karamellkekscreme und Keksbröseln',
                },
                price: 60,
                dietary: ['vegetarian', 'halal'],
              },
              {
                id: 'amst-poffertjes-classique',
                name: 'Poffertjes Classique (Beurre & Sucre Glace)',
                localName: 'البانكيك الهولندي التقليدي بالزبدة الذائبة ورشة سكر البودرة',
                translations: {
                  ar: 'البانكيك الهولندي التقليدي بالزبدة الذائبة ورشة سكر البودرة',
                  en: 'Classic traditional Dutch poffertjes served with melting butter and icing sugar',
                  es: 'Poffertjes tradicionales holandeses con mantequilla fundida y azúcar glas',
                  de: 'Traditionelle holländische Poffertjes mit zerlassener Butter und feinem Puderzucker',
                },
                price: 45,
                dietary: ['vegetarian', 'halal'],
              },
              {
                id: 'amst-chocolat-dubai-gold',
                name: 'Chocolat Dubaï 24K Gold',
                localName: 'لوح شوكولاتة دبي الشهير المحشو بكريمة الفستق والكنافة المقرمشة ومزين بالذهب عيار 24',
                translations: {
                  ar: 'لوح شوكولاتة دبي الشهير المحشو بكريمة الفستق والكنافة المقرمشة ومزين بالذهب عيار 24',
                  en: 'Viral Dubai chocolate bar filled with pistachio cream and crisp kunafa, finished with 24K gold',
                  es: 'Barra de chocolate viral de Dubai rellena de pistacho y knafeh crujiente con oro de 24K',
                  de: 'Dubai-Schokolade gefüllt mit Pistaziencreme und knusprigem Kunafa, veredelt mit 24K Gold',
                },
                price: 120,
                isSignature: true,
                dietary: ['vegetarian', 'halal'],
              },
              {
                id: 'amst-fondant-chocolat-coeur',
                name: 'Fondant au Chocolat Cœur Coulant',
                localName: 'كعكة فوندان الشوكولاتة الساخنة ذات القلب الذائب مع آيس كريم الفانيليا',
                translations: {
                  ar: 'كعكة فوندان الشوكولاتة الساخنة ذات القلب الذائب مع آيس كريم الفانيليا',
                  en: 'Warm molten chocolate lava cake with a flowing center, served with vanilla ice cream',
                  es: 'Coulant de chocolate caliente con centro líquido y helado de vainilla',
                  de: 'Warmer Schokoladenkuchen mit flüssigem Kern, serviert mit Vanilleeis',
                },
                price: 50,
                dietary: ['vegetarian', 'halal'],
              },
              {
                id: 'amst-tiramisu-maison',
                name: 'Tiramisu Maison',
                localName: 'تيراميسو إيطالي منزلي بجبن الماسكاربوني ونكهة القهوة المركزة',
                translations: {
                  ar: 'تيراميسو إيطالي منزلي بجبن الماسكاربوني ونكهة القهوة المركزة',
                  en: 'Homemade Italian espresso tiramisu layered with whipped mascarpone',
                  es: 'Tiramisú casero italiano con café espresso y suave crema de mascarpone',
                  de: 'Hausgemachtes italienisches Tiramisu mit Espresso und Mascarpone-Creme',
                },
                price: 50,
                dietary: ['vegetarian', 'halal'],
              },
              {
                id: 'amst-plateau-fruits',
                name: 'Plateau de Fruits Amsterdam Luxury',
                localName: 'طبق فواكه موسمية طازجة فاخر للمشاركة بتنسيق استعراضي',
                translations: {
                  ar: 'طبق فواكه موسمية طازجة فاخر للمشاركة بتنسيق استعراضي',
                  en: 'Grand luxury platter of fresh carved seasonal and exotic fruits for sharing',
                  es: 'Gran bandeja de frutas frescas exóticas y de temporada estilo Amsterdam Luxury',
                  de: 'Große Luxus-Platte mit frischen exotischen Saisonfrüchten zum Teilen',
                },
                price: 140,
                isSignature: true,
                dietary: ['vegan', 'halal'],
                portionNotes: 'Pour 2 à 4 personnes'
              },
            ],
          },
        ],
      }
    },
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Clear Luxury Pricing",
        tagColor: "money",
        tone: "good",
        description: "All steaks, certified Wagyu, and 24K gold items have clearly printed menu prices with service and tax included.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "100% Halal Standards",
        tagColor: "water",
        tone: "good",
        description: "Strict halal-certified dry-aging processes and spotless open kitchen hygiene; purified water used for all preparations.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Steakhouse & Dutch",
        tagColor: "food",
        tone: "good",
        description: "Upscale international steakhouse featuring genuine dry-aged Himalayan salt beef, Wagyu cuts, and traditional Dutch poffertjes.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Modern Hay Mohammadi",
        tagColor: "safety",
        tone: "good",
        description: "Located in Résidence Islane away from beachfront street touts; plush climate-controlled dining lounge with weekend live violin.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Theatrical & Busy",
        tagColor: "alert",
        tone: "caution",
        description: "Theatrical tableside smoke cloche presentations; weekend dinner slots fill quickly, making 24h advance reservation recommended.",
        state: "verified"
      }
    ],
    // ── 5. REVIEWS (Multi-platform aggregated traveler reviews) ──
    // Place-specific dynamic tags are extracted from these reviews
    // (Steak & Beef, Live Violin, Service, Presentation, Mocktails, Wait Time, Pricing, Desserts, Atmosphere)
    reviewsData: {
      sources: [
        {
          source: 'Google Maps',
          rating: 4.8,
          maxRating: 5,
          reviewCount: 3860,
          url: 'https://maps.google.com/?q=Amsterdam+Luxury+Restaurant+Agadir'
        },
        {
          source: 'Wanderlog',
          rating: 4.9,
          maxRating: 5,
          reviewCount: 14,
          url: 'https://wanderlog.com/place/details/5847486/amsterdam-luxury-restaurant-agadir'
        },
        {
          source: 'Tripadvisor',
          rating: 4.5,
          maxRating: 5,
          reviewCount: 110,
          url: 'https://www.tripadvisor.fr/Restaurant_Review-g293731-d23814855-Reviews-Amsterdam_Luxury_Restaurant-Agadir_Souss_Massa.html'
        },
        {
          source: 'Restaurant Guru',
          rating: 5.0,
          maxRating: 5,
          reviewCount: 3952,
          url: 'https://fr.restaurantguru.com/Cafe-Amsterdam-Agadir'
        }
      ],
      reviews: [
        {
          id: 'amst-rev-1',
          author: 'Google Maps Guest',
          gender: 'man',
          postedDate: '2026-06-15',
          source: 'Google Maps',
          rating: 3,
          sentiment: 'bad',
          tags: ['Wait Time', 'Steak & Beef', 'Pricing'],
          text: "Aesthetic of the restaurant is beautiful. You can clearly see that the restaurant is presented in a way to attract people in. I would have rated more stars but the wait for the food was way too long. The entire family had their food arrive before myself and had eaten whilst i still waited for mine. When mine did come it was rare whilst i ordered medium well. So had to go back for a second round on the grill. When i did get the food the sides were already cold. Staff missed the 2x portions of fries we ordered and the family had already eaten so just asked for the one. The steak was nothing special and especially after paying the for the most expensive one. It was chewy and lacked any flavour. This was the same with the fillets the family ordered. The sauce that accompanied the food was really good and made up for the lack of flavour of the meat. The spaghetti was actually really good, full of flavour. Had to nibble on it whilst i waited on my dish. The experience was good but I wouldn't be returning, I've had better steaks in agadir from much cheaper places. The owner and staff were very friendly and even the waiter could tell the steak wasn't to the level i ordered and said he'll take it back to put back on. They did make it up with offering a free portion of dutch pancakes for the inconvenience and only the dutch pancakes which didn't make up for the price we paid considering the bill was around 1300-1500 dirhams for 4 people."
        },
        {
          id: 'amst-rev-2',
          author: 'Wanderlog Traveler',
          gender: 'man',
          postedDate: '2026-02-15',
          source: 'Wanderlog',
          rating: 4,
          sentiment: 'neutral',
          tags: ['Pricing', 'Live Music', 'Atmosphere'],
          text: "Tutti dicono che è il miglior ristorante di Agadir ma io avrei qualcosa da ridire... Cibo discreto e prezzi folli! Do 4 stelle solo perché è elegante e c'è musica dal vivo."
        },
        {
          id: 'amst-rev-3',
          author: 'Google Maps Guest',
          gender: 'woman',
          postedDate: '2026-04-19',
          source: 'Google Maps',
          rating: 5,
          sentiment: 'good',
          tags: ['Atmosphere', 'Service'],
          text: "We visited Amsterdam Luxury Restaurant today after my daughter saw it on social media and it came highly recommended by a friend. Although we didn't have a reservation, the staff were very accommodating and managed to find us a table straight away. The restaurant had a lovely mix of tourists and locals, which always feels like a good sign. I took my daughter and niece there to celebrate her birthday, and it was definitely worth the 20-minute taxi ride from the Agadir beach area (around £6). The restaurant itself is beautifully designed—modern, stylish, and very clean. The atmosphere is warm and inviting."
        },
        {
          id: 'amst-rev-4',
          author: 'Google Maps Guest',
          gender: 'woman',
          postedDate: '2026-05-15',
          source: 'Google Maps',
          rating: 5,
          sentiment: 'good',
          tags: ['Steak & Beef', 'Service', 'Pricing'],
          text: "Visited Amsterdam Restaurant in Agadir and had a great experience. The restaurant has a beautiful atmosphere, stylish decor, and a welcoming vibe. The food was well presented, fresh, and full of flavour. I especially enjoyed the steak, which was cooked perfectly. The staff were friendly and attentive, making the experience even better. Prices are a little on the higher side, but the quality and ambiance make it worthwhile. Overall, a lovely place for dinner and I would happily visit again."
        },
        {
          id: 'amst-rev-5',
          author: 'Google Maps Guest',
          gender: 'man',
          postedDate: '2026-05-20',
          source: 'Google Maps',
          rating: 5,
          sentiment: 'good',
          tags: ['Steak & Beef', 'Service', 'Presentation'],
          text: "Amsterdam Luxury Restaurant in Agadir does not welcome you like a restaurant. It receives you like an elegant promise. A place where you do not come simply to eat, but to understand what refinement looks like when it no longer needs to prove anything. We began exactly as we should have: with a guacamole tartare with prawns — fresh, clean, precise, and seductive. A start that does not raise its voice, yet captures your full attention from the very first second. Fine, balanced, with perfect texture and that kind of freshness that impresses not through excess, but through control. Then came the beef rib. And this is where things became serious. Cooked impeccably, deep, succulent, with that rare balance between strength and elegance. A cut with character, treated with respect, served without unnecessary theatre and left to speak exactly as it should: clearly, maturely, and memorably. Everything was elevated by fresh juices with the taste of paradise — vibrant, refreshing, and chosen with the same precision as the food itself, bringing brightness, balance, and a tropical lift to the table. And the service… the service was imperial. Rarely do you find that kind of attention that never suffocates, that kind of presence that never interrupts, that kind of class that cannot be taught from a manual. Elegant, precise, natural. Exactly as it should be in a place that knows exactly what it is. Amsterdam Luxury Restaurant Agadir is not simply a good restaurant. It is the kind of place that reminds you that true fine dining is not about opulence. It is about control, taste, atmosphere, and dignity."
        },
        {
          id: 'amst-rev-6',
          author: 'Wanderlog Traveler',
          gender: 'woman',
          postedDate: '2026-03-15',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Presentation', 'Mocktails', 'Steak & Beef', 'Live Music'],
          text: "What a place, travelled 30 mins from Taghazout to get here but it was worth every penny. No alcohol in this restaurant so we opted for the cocktails - Mojito. Arrived in a display cabinet with liquid ice - unreal. We were given bread and olives to start and we ordered Spicy Prawns and Pil Pil Garlic Prawns as a starter and both were delicious. Onto the mains we ordered the gold cote de boeuf which came with 2 sides and 2 sauces. The edible gold was a rare treat and I've never ate this before. The cut was lovely, very tasty and suitable for 2 to share. What blew me away was the presentation as it arrived in a contained box with liquid ice. It also had live music who was unreal too. Safe to say we were impressed and would certainly recommend this place. Special mention to our server Abdul who went above and beyond."
        },
        {
          id: 'amst-rev-7',
          author: 'Wanderlog Traveler',
          gender: 'woman',
          postedDate: '2026-02-18',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Service', 'Live Music', 'Atmosphere'],
          text: "If you visit Agadir and need a place for fine dining, Amsterdam luxury restaurant is the perfect place to be. Rachid and his entire team were so warm and receptive. The food was excellent. Portion was great. They performed a little birthday surprise for my husband and it was beautiful. Every experience from walking in to the end was perfect. The ambience and music was so soft and beautiful. There's a gentleman who played lovely jazz musics on the background. It's worth every penny and I highly recommend them."
        },
        {
          id: 'amst-rev-8',
          author: 'Google Maps Guest',
          gender: 'woman',
          postedDate: '2026-08-15',
          source: 'Google Maps',
          rating: 5,
          sentiment: 'good',
          tags: ['Live Music', 'Atmosphere'],
          text: "Une superbe découverte ! Le restaurant est magnifique, avec une décoration élégante et soignée qui crée une ambiance vraiment agréable. Les plats étaient excellents, savoureux et préparés avec beaucoup de goût. Mention spéciale au violoniste, qui a apporté une touche unique à la soirée. Sa musique a créé une ambiance chaleureuse et raffinée, rendant ce moment encore plus mémorable. Je recommande cet endroit sans hésiter. Si vous cherchez un restaurant où l'on mange très bien, dans un cadre magnifique avec une ambiance exceptionnelle, vous ne serez pas déçus !"
        },
        {
          id: 'amst-rev-9',
          author: 'Google Maps Guest',
          gender: 'man',
          postedDate: '2026-09-10',
          source: 'Google Maps',
          rating: 5,
          sentiment: 'good',
          tags: ['Presentation', 'Service', 'Atmosphere'],
          text: "Une expérience exceptionnelle à tous les niveaux ! Le restaurant 'Amsterdam' place la barre très haut et offre une expérience digne des grands restaurants européens. La propreté des lieux est irréprochable dès le premier instant, et le service est d'un grand raffinement grâce à une équipe très professionnelle et chaleureuse. Quant aux plats, ce sont de véritables œuvres d'art avec une présentation éblouissante, et le goût est tout simplement incroyable. Un endroit qui vaut vraiment le détour, je le recommande vivement à tous ceux qui recherchent la qualité et une ambiance unique. 5 étoiles bien méritées !"
        },
        {
          id: 'amst-rev-10',
          author: 'Google Maps Guest',
          gender: 'man',
          postedDate: '2026-09-14',
          source: 'Google Maps',
          rating: 5,
          sentiment: 'good',
          tags: ['Service', 'Steak & Beef', 'Wait Time'],
          text: "Excellente expérience à Amsterdam Luxury Restaurant Agadir ! Tous les plats que nous avons goûtés étaient vraiment très bons, avec des produits de qualité et des assiettes généreuses, la viande tendre et les accompagnements de bonne qualité. Le service était également très agréable. Nous avons eu un léger retard lié au changement d'équipe entre les deux services, mais cela a été parfaitement rattrapé. Un grand merci à la gérante Mme Leila pour son accueil, son professionnalisme et surtout pour son geste commercial, que nous avons beaucoup apprécié. Une très bonne adresse à Agadir que nous recommandons sans hésiter."
        },
        {
          id: 'amst-rev-11',
          author: 'Google Maps Guest',
          gender: 'man',
          postedDate: '2026-09-22',
          source: 'Google Maps',
          rating: 5,
          sentiment: 'good',
          tags: ['Steak & Beef', 'Desserts', 'Service', 'Wait Time'],
          text: "I've wanted to leave this review for a long time because I come here often. Between breakfast, and lunch, I've been here more than 25 times. Sometimes I even eat lunch somewhere else and still come here after just for a café crème and the homemade tiramisu, which is really good. I travel a lot for work, so I eat in restaurants hundreds of times per year. That's why I feel I can compare. For me, this is one of the best restaurants in Agadir. What makes it stand out is consistency of the food quality. The service is good, the staff are friendly, and the ingredients are high quality. You notice that when you come back many times. My favorite is the beef fillet — I've had it more than 10 times. I've also tried the chicken satay, the sliced chicken with mushrooms, and the Amsterdam burger. All of them were good. The place is clean and well organized. When it's full, there can be a little confusion and you wait a bit longer, which is normal. What matters most to me is that the quality stays the same every visit. Here it does, and that is rare. In Morocco many restaurants are good one day and not as good the next. This one stays consistent. I hope they keep the same service, the same ingredients, and the same taste. If they do, I will keep coming."
        },
        {
          id: 'amst-rev-12',
          author: 'Google Maps Guest',
          gender: 'man',
          postedDate: '2026-08-20',
          source: 'Google Maps',
          rating: 5,
          sentiment: 'good',
          tags: ['Atmosphere', 'Service'],
          text: "Excellentes expérience. Food: 5 Service: 5 Atmosphere: 5."
        },
        {
          id: 'amst-rev-13',
          author: 'Google Maps Guest',
          gender: 'man',
          postedDate: '2026-08-22',
          source: 'Google Maps',
          rating: 5,
          sentiment: 'good',
          tags: ['Atmosphere', 'Service'],
          text: "Amazing restaurant! Food: 5 Service: 5 Atmosphere: 5."
        },
        {
          id: 'amst-rev-14',
          author: 'Wanderlog Traveler',
          gender: 'woman',
          postedDate: '2026-01-12',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Service', 'Atmosphere'],
          text: "Buon cibo in una tranquilla location ad Agadir. Consiglio gli hamburger. Lo staff è stato molto gentile e disponibile, in particolare Abderrahmane. Ristorante consigliato."
        },
        {
          id: 'amst-rev-15',
          author: 'Wanderlog Traveler',
          gender: 'man',
          postedDate: '2026-01-15',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Live Music', 'Service'],
          text: "Locale molto bello con musica dal vivo precisamente un violinista e anche molto bravo, siamo stati accolti e coccolati da yassin Consigliato."
        },
        {
          id: 'amst-rev-16',
          author: 'Wanderlog Traveler',
          gender: 'woman',
          postedDate: '2026-02-10',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Service', 'Atmosphere'],
          text: "Uno de los mejores restaurantes de Agadir!!!! instalaciones preciosas,La comida deliciosa,el servicio rápido y sobre todo la amabilidad de Leila y las recomendaciónes fueron de 5 estrellas!!! Recomiendo al 100 x 100!!!! Volveré seguro!!!! Gracias Leila."
        },
        {
          id: 'amst-rev-17',
          author: 'Wanderlog Traveler',
          gender: 'woman',
          postedDate: '2026-01-18',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Service', 'Atmosphere'],
          text: "Un bellissimo ristorante ci siamo trovati bene anche con il staff ."
        },
        {
          id: 'amst-rev-18',
          author: 'Wanderlog Traveler',
          gender: 'man',
          postedDate: '2026-01-20',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Atmosphere'],
          text: "Bella esperienza."
        },
        {
          id: 'amst-rev-19',
          author: 'Wanderlog Traveler',
          gender: 'man',
          postedDate: '2026-02-22',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Service'],
          text: "Tout était vraiment parfait."
        },
        {
          id: 'amst-rev-20',
          author: 'Wanderlog Traveler',
          gender: 'man',
          postedDate: '2026-10-12',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Service'],
          text: "We had a great experience at Agadir Restaurant in Amsterdam! The food was delicious, and everything was enjoyable from start to finish. A special shout-out to our waiter, Rashid, who provided amazing service. He was attentive, friendly, and made sure we felt welcome throughout our visit. Excellent service really makes a difference, and Rashid definitely made our experience extra special. Highly recommended, and we would definitely visit again!"
        },
        {
          id: 'amst-rev-21',
          author: 'Wanderlog Traveler',
          gender: 'man',
          postedDate: '2026-10-18',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Service', 'Atmosphere'],
          text: "A wonderful restaurant with good food and Aesthetic. Moreover. The main reasoning for this very positive review is because of the waiter Samad. A true representation of quality service. Best service i have ever experienced!"
        },
        {
          id: 'amst-rev-22',
          author: 'Wanderlog Traveler',
          gender: 'man',
          postedDate: '2026-09-25',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Steak & Beef', 'Presentation', 'Atmosphere'],
          text: "Absolutely excellent experience at Amsterdam Luxury Restaurant in Agadir. The beef fillet was cooked perfectly, tender, flavorful, and beautifully presented. Everything about the dish was on point, and the atmosphere topped it off."
        },
        {
          id: 'amst-rev-23',
          author: 'Wanderlog Traveler',
          gender: 'man',
          postedDate: '2026-08-26',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Service', 'Atmosphere'],
          text: "Lekker gegeten bij Restaurant Amsterdam. We zijn goed ontvangen. De sfeer was goed, personeel was vriendelijk en het eten was ook erg lekker. We waren 'vroeg' dus het was nog rustig. De man van de eigenaresse was ook aanwezig en daar hebben we een tijdje mee staan praten. Erg vriendelijke man. Wij hadden chicken with mushroom en een entrecote. Voor onze dochter hadden we een pasta met roomsaus en kip. Alles was smaakvol en goed geserveerd. Een aanrader in Agadir."
        },
        {
          id: 'amst-rev-24',
          author: 'Wanderlog Traveler',
          gender: 'woman',
          postedDate: '2026-07-15',
          source: 'Wanderlog',
          rating: 5,
          sentiment: 'good',
          tags: ['Live Music', 'Atmosphere'],
          text: "Leurs plats sont délicieux, l'accueil est très chaleureux, et l'ambiance est agréable avec un violoniste. Je vous recommande cet endroit pour une soirée romantique, un anniversaire ou même une soirée entre amis."
        },
        {
          id: 'amst-rev-25',
          author: 'Google Maps Guest',
          gender: 'man',
          postedDate: '2026-09-19',
          source: 'Google Maps',
          rating: 5,
          sentiment: 'good',
          tags: ['Steak & Beef', 'Pricing'],
          text: "The steak was cooked really well, flavor was on point. Meat quality surprised me for the price. Solid spot if you're in Agadir and want a proper dinner."
        }
      ]
    }
  },
  {
    id: "e-agadir-1",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: [
        "French-Moroccan",
        "Seafood",
        "Mediterranean",
        "International"
      ],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["chic", "scenic", "polished", "cosmopolitan"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 40,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: [
        "late-night",
        "sunset",
        "fine",
        "terrace",
        "alcohol",
        "dinner"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pure Passion Restaurant",
      neighborhood: "Marina Agadir",
      description: "An elegant waterfront fine-dining jewel overlooking the serene marina yachts. Celebrated for its exquisite French and international fusion, meticulous plating of local seafood, and a refined cosmopolitan terrace.",
      tip: "Book at least 1–2 days ahead. For sunset views without major crowds, arrive around 18:30–19:00.",
      badge: "splurge",
      bestDishes: [
        "Grilled Squid / Calamari",
        "Ribeye Steak",
        "Moroccan Lamb",
        "Sea Bass",
        "Prawns with Peanut Mayo",
        "Tiramisu"
      ],
      pros: [
        "Beautiful marina terrace with sunset views and polished presentation.",
        "Attentive, professional service and generous portions.",
        "Wide menu covering seafood, steaks and dietary options."
      ],
      cons: [
        "Premium prices and highly popular — reservations are essential.",
        "Some diners report inconsistent pacing on very busy nights."
      ],
      googleRating: 4.6,
      googleReviewCount: 2390,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 2823,
      theforkRating: 4.5,
      theforkReviewCount: 800,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 2823,
      openTime: "12:00",
      closeTime: "00:00",
      weeklySchedule: [
        { day: "Monday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Tuesday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Wednesday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Thursday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Friday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Saturday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Sunday", openTime: "12:00", closeTime: "00:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Résidence N°02 M1, Complexe Marina, Agadir 80010, Morocco",
        lat: 30.422686,
        lng: -9.618676
      },
      address: "Résidence N°02 M1, Complexe Marina, Agadir 80010, Morocco",
      coordinates: {
        lat: 30.422686,
        lng: -9.618676
      },
      googleMapsUrl: "https://maps.google.com/?q=Pure+Passion+Restaurant+Agadir",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212528840120",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.purepassion.ma",
      instagram: "https://instagram.com/pure_passion_marina",
      customStory: "Pure Passion was founded around a 'love and passion for food' philosophy and has become one of Agadir Marina's most popular restaurants. It pairs a European-style fine-dining menu with Moroccan hospitality, beachfront views, and an extensive wine and cocktail list.",
      languagesSpoken: ["French", "Arabic/Darija", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "starters-seafood",
            title: "Marina Starters & Atlantic Raw Bar",
            description: "Fresh Dakhla oysters, Atlantic crab, and refined French starters",
            items: [
              {
                id: "pure-oysters",
                name: "Six Huîtres Natures de Dakhla",
                localName: "ست حبات محار طازج من الداخلة",
                translations: {
                  ar: "ست حبات محار طازج من الداخلة",
                  en: "Half dozen fresh Dakhla Atlantic oysters served over crushed ice with shallot mignonette",
                  es: "Media docena de ostras frescas de Dakhla con vinagreta de chalota",
                  de: "Sechs frische Dakhla-Austern auf Eis mit Schalotten-Vinaigrette"
                },
                price: 150,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "pure-crab-croquettes",
                name: "Croquettes de Crabe & Gambas",
                localName: "كروكيت السلطعون والجمبري المقرمش",
                translations: {
                  ar: "كروكيت السلطعون والجمبري المقرمش",
                  en: "Crisp golden crab and prawn croquettes served with house peanut-herb mayo",
                  es: "Croquetas crujientes de cangrejo y gambas con mayonesa de cacahuete",
                  de: "Knusprige Krabben-Garnelen-Kroketten mit Erdnuss-Kräuter-Mayo"
                },
                price: 140,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "pure-millefeuille",
                name: "Mille-feuille Crabe & Saumon Fumé",
                localName: "ميل فوي السلطعون والسلمون المدخن بالأفوكادو",
                translations: {
                  ar: "ميل فوي السلطعون والسلمون المدخن بالأفوكادو",
                  en: "Layered smoked salmon, sweet Atlantic crab, avocado mousse, and citrus vinaigrette",
                  es: "Milhojas de salmón ahumado, cangrejo y aguacate con cítricos",
                  de: "Mille-feuille von Räucherlachs, Krabbenfleisch und Avocado-Mousse"
                },
                price: 150,
                dietary: ["halal"]
              },
              {
                id: "pure-garlic-seafood",
                name: "Poêlée de Fruits de Mer à l'Ail",
                localName: "مقلاة فواكه البحر بالثوم والزبدة والأعشاب",
                translations: {
                  ar: "مقلاة فواكه البحر بالثوم والزبدة والأعشاب",
                  en: "Sizzling pan-seared Atlantic prawns, calamari, and clams with garlic herb butter",
                  es: "Sartén de mariscos salteados al ajillo con mantequilla de hierbas",
                  de: "Gebratene Meeresfrüchte-Pfanne mit Knoblauch-Kräuterbutter"
                },
                price: 150,
                dietary: ["gluten-free", "halal"]
              }
            ]
          },
          {
            id: "mains-turf-surf",
            title: "Fine Cuts, Scallops & Fresh Catch",
            description: "Signature beef fillets, honey-thyme braised lamb, and Agadir port fish",
            items: [
              {
                id: "pure-tigre-qui-pleure",
                name: "Filet de Bœuf 'Tigre qui Pleure'",
                localName: "فيليه لحم بقري طري بصلصة التوابل الآسيوية",
                translations: {
                  ar: "فيليه لحم بقري طري بصلصة التوابل الآسيوية",
                  en: "Signature seared beef tenderloin sliced over Thai-inspired chili-lime-garlic glaze",
                  es: "Solomillo de ternera 'Tigre que Llora' con glaseado picante de lima",
                  de: "Rinderfilet 'Tigre qui Pleure' mit pikanter Limetten-Chili-Glasur"
                },
                price: 260,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "pure-belle-sole",
                name: "La Belle Sole Meunière ou Grillée",
                localName: "سمك موسى الطازج مشوي بالزبدة والليمون",
                translations: {
                  ar: "سمك موسى الطازج مشوي بالزبدة والليمون",
                  en: "Whole fresh Atlantic Dover sole grilled or pan-meunière with browned lemon butter",
                  es: "Lenguado fresco del Atlántico a la meunière o a la parrilla",
                  de: "Frische Atlantik-Seezunge Müllerin Art oder vom Grill"
                },
                price: 260,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "pure-scallops-gambas",
                name: "Noix de Saint-Jacques & Gambas Poêlées",
                localName: "اسكالوب البحر والجمبري المشوي بصلصة الزعفران",
                translations: {
                  ar: "اسكالوب البحر والجمبري المشوي بصلصة الزعفران",
                  en: "Seared king scallops and jumbo Atlantic prawns over creamy leek fondue",
                  es: "Vieiras salteadas y langostinos sobre crema suave de puerros",
                  de: "Gebratene Jakobsmuscheln und Riesengarnelen auf Lauch-Creme"
                },
                price: 260,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "pure-lamb-shank",
                name: "Souris d'Agneau Confite Miel & Thym",
                localName: "موزة غنم مطهوة ببطء بالعسل والزعتر",
                translations: {
                  ar: "موزة غنم مطهوة ببطء بالعسل والزعتر",
                  en: "Slow-braised Moroccan lamb shank glazed with Atlas mountain honey and wild thyme",
                  es: "Jarrete de cordero confitado a baja temperatura con miel y tomillo",
                  de: "Geschmorte Lammhaxe glasiert mit Atlas-Honig und Thymian"
                },
                price: 220,
                dietary: ["gluten-free", "halal"]
              }
            ]
          },
          {
            id: "desserts-signature",
            title: "Desserts Maison",
            description: "Artisanal French patisserie finished overlooking the marina yachts",
            items: [
              {
                id: "pure-signature-dessert",
                name: "Dessert Signature Pure Passion",
                localName: "حلوى التوقيع الخاصة بمطعم بيور باشن",
                translations: {
                  ar: "حلوى التوقيع الخاصة بمطعم بيور باشن",
                  en: "Chef's decadent grand cru chocolate and passionfruit creation served chilled",
                  es: "Creación especial del chef con chocolate grand cru y fruta de la pasión",
                  de: "Chef-Kreation aus dunkler Schokolade und Passionsfrucht"
                },
                price: 140,
                isSignature: true,
                dietary: ["vegetarian"]
              },
              {
                id: "pure-fondant",
                name: "Fondant au Chocolat Noir & Glace Vanille",
                localName: "فوندان الشوكولاتة الساخن مع آيس كريم الفانيليا",
                translations: {
                  ar: "فوندان الشوكولاتة الساخن مع آيس كريم الفانيليا",
                  en: "Warm molten dark chocolate cake served with Bourbon vanilla bean ice cream",
                  es: "Coulant tibio de chocolate negro con helado de vainilla Bourbon",
                  de: "Warmer Schokoladen-Fondant mit Bourbon-Vanilleeis"
                },
                price: 110,
                dietary: ["vegetarian"]
              },
              {
                id: "pure-panna-cotta",
                name: "Panna Cotta aux Fruits Rouges",
                localName: "بانا كوتا بالفواكه الحمراء الطازجة",
                translations: {
                  ar: "بانا كوتا بالفواكه الحمراء الطازجة",
                  en: "Silky vanilla bean panna cotta topped with fresh berry compote",
                  es: "Panna cotta de vainilla con compota fresca de frutos rojos",
                  de: "Vanille-Panna-Cotta mit frischem Beerenkompott"
                },
                price: 90,
                dietary: ["vegetarian", "gluten-free"]
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Upscale Marina Bill",
        description: "Printed MAD prices with itemized card billing and zero tourist scams; expect splurge rates (220–260 MAD mains plus marina wine prices).",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Spotless Kitchen",
        description: "High European-standard hygiene across oysters, raw tuna, and fresh marina catches; purified bar ice and bottled mineral water.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Euro-Moroccan Fine Dining",
        description: "Focuses on French fine-dining seafood, Tiger Cry beef, and Atlantic sole rather than street-style Moroccan tagines.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Yacht Marina Views",
        description: "Polished waterfront terrace right along the Marina yachts, breezy and peaceful compared to the noisy beach boulevard.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Book 1–2 Days Ahead",
        description: "Attentive bilingual team, though sunset marina tables require booking 1–2 days ahead and courses can pace slower at full dinner capacity.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-2",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Mediterranean", "Seafood", "International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["chic", "scenic", "polished", "lively"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 34,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: [
        "late-night",
        "sunset",
        "live-music",
        "alcohol",
        "dinner"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Les Blancs Agadir",
      neighborhood: "Marina Agadir",
      description: "A high-energy Spanish-Moroccan beachfront lounge at the marina entrance. Famous for authentic paella, white-on-white aesthetic, and a lively atmosphere with sunset views and sea breezes.",
      tip: "No reservation needed for lunch, but dinner fills quickly. Best at 18:30–19:30 for a sunset table.",
      badge: "local-favorite",
      bestDishes: [
        "Seafood paella",
        "Spanish tapas",
        "Garlic prawns",
        "Fillet steak",
        "Sangria"
      ],
      menu: {
        currency: 'MAD',
        lastUpdated: 'October 2026',
        serviceChargeIncluded: true,
        sections: [
          {
            id: 'tapas',
            title: 'Tapas Españolas & Entrées à Partager',
            description: 'Tapas espagnoles authentiques préparées minute face à la mer',
            items: [
              {
                id: 'blancs-t1',
                name: 'Gambas al Ajillo (Crevettes à l’Ail)',
                localName: 'كروفيت بالثوم وزيت الزيتون',
                description: 'Crevettes fraîches de l’Atlantique saisies à l’huile d’olive extra vierge, ail doré et piment doux.',
                price: 120,
                isSignature: true,
                portionNotes: 'Idéal à partager en entrée'
              },
              {
                id: 'blancs-t2',
                name: 'Chipirones à la Plancha',
                localName: 'كالمار صغير مشوي على البلانشا',
                description: 'Petits calamars frais sautés à la plancha avec persillade et quartier de citron frais.',
                price: 130,
                isSignature: true
              },
              {
                id: 'blancs-t3',
                name: 'Poulpe à la Galicienne (Pulpo a la Gallega)',
                localName: 'أخطبوط على الطريقة الجاليكية',
                description: 'Poulpe tendre sur lit de pommes de terre vapeur, fleur de sel et paprika fumé de la Vera.',
                price: 130
              },
              {
                id: 'blancs-t4',
                name: 'Patatas Bravas Traditionnelles',
                localName: 'بطاطس برافاس مع صلصة حارة',
                description: 'Pommes de terre croustillantes nappées de sauce brava épicée maison et aïoli crémeux.',
                price: 60,
                dietary: ['vegetarian']
              },
              {
                id: 'blancs-t5',
                name: 'Gaspacho Andalou Frais',
                localName: 'حساء الكاسباتشو الأندلسي البارد',
                description: 'Soupe froide traditionnelle de tomates mûres, poivrons et concombre, servie bien glacée.',
                price: 70,
                dietary: ['vegetarian', 'vegan']
              },
              {
                id: 'blancs-t6',
                name: 'Croquettes Maison au Poulet & Fromage',
                localName: 'كروكيت مقرمش بالجبن والدجاج',
                description: 'Croquettes croustillantes dorées au cœur fondant de béchamel maison et parmesan.',
                price: 65
              }
            ]
          },
          {
            id: 'paellas',
            title: 'Paellas & Riz Ibériques (Spécialités de la Maison)',
            description: 'Cuites à la commande selon la tradition espagnole (minimum 25-30 min de préparation)',
            items: [
              {
                id: 'blancs-p1',
                name: 'Paella Poissons & Fruits de Mer',
                localName: 'بايلا فواكه البحر والأسماك الطازجة',
                description: 'Riz bomba mijoté au bouillon safrané, gambas royales, calamars, moules fraîches et filets de poisson.',
                price: 210,
                isSignature: true,
                portionNotes: 'Prix par personne • Cuisson minute'
              },
              {
                id: 'blancs-p2',
                name: 'Arroz Negro (Riz Noir à l’Encre de Seiche)',
                localName: 'الأرز الأسود بحبر السيبيا والكالمار',
                description: 'Riz ibérique mijoté à l’encre de seiche naturelle, lamelles de seiche fondantes et aïoli à part.',
                price: 190,
                isSignature: true
              },
              {
                id: 'blancs-p3',
                name: 'Paella Valencienne Classique',
                localName: 'بايلا فالنسيا بالدجاج والخضار',
                description: 'Recette valencienne authentique au poulet fermier doré, haricots plats, romarin et safran.',
                price: 170
              },
              {
                id: 'blancs-p4',
                name: 'Fideuà de la Mer aux Fruits de Mer',
                localName: 'فيديووا البحر بالشعرية الإسبانية',
                description: 'Plat côtier catalan aux vermicelles dorés dans un fumet de roche concentré, gambas et calamars.',
                price: 190
              }
            ]
          },
          {
            id: 'poissons-viandes',
            title: 'Poissons Nobles & Grillades',
            description: 'Arrivages quotidiens du port de pêche d’Agadir et viandes sélectionnées',
            items: [
              {
                id: 'blancs-m1',
                name: 'Loup de Mer (Bar) à la Sauce à l’Ail',
                localName: 'سمك الدرعي الطازج بصلصة الثوم والليمون',
                description: 'Filet de bar grillé à la plancha, émulsion d’huile d’olive vierge, ail doré et légumes sautés.',
                price: 250,
                isSignature: true
              },
              {
                id: 'blancs-m2',
                name: 'Lotte Sautée aux Crevettes & Champignons',
                localName: 'سمك الصول واللوط مع الجمبري',
                description: 'Médaillons de lotte fraîche poêlés, crevettes roses et champignons de Paris au vin blanc doux.',
                price: 250
              },
              {
                id: 'blancs-m3',
                name: 'Filet de Bœuf Grillé au Poivre Vert',
                localName: 'فيليه لحم بقري مشوي بصلصة الفلفل',
                description: 'Cœur de filet tendre façon bistrot, sauce crémeuse au poivre vert et pommes grenailles.',
                price: 210
              }
            ]
          },
          {
            id: 'desserts',
            title: 'Desserts Maison',
            description: 'Douceurs ibériques et classiques rafraîchissants',
            items: [
              {
                id: 'blancs-d1',
                name: 'Crème Catalane Caramélisée',
                localName: 'كريم كاتالانا مكرمل بالقرفة والليمون',
                description: 'Crème onctueuse infusée aux zestes d’orange et cannelle avec sa coque de sucre croquante au fer rouge.',
                price: 75,
                dietary: ['vegetarian']
              },
              {
                id: 'blancs-d2',
                name: 'Tarte de Santiago aux Amandes',
                localName: 'تارت سانتياغو التقليدية باللوز',
                description: 'Gâteau traditionnel galicien aux amandes douces broyées, saupoudré de sucre glace.',
                price: 75,
                dietary: ['vegetarian']
              },
              {
                id: 'blancs-d3',
                name: 'Fondant au Chocolat Noir Coulant',
                localName: 'فوندان الشوكولاتة الساخن',
                description: 'Cœur coulant au chocolat noir intense 70% servi avec une boule de glace vanille artisanale.',
                price: 100,
                dietary: ['vegetarian']
              }
            ]
          }
        ]
      },
      pros: [
        "Prime beach-and-marina location with strong sunset atmosphere.",
        "Authentic Spanish menu (paella, tapas, sangria) in a tourist city.",
        "Live music and late-night lounge vibe."
      ],
      cons: [
        "Mixed reviews on service consistency during peak hours.",
        "Can be crowded, noisy, and windy on the open terrace."
      ],
      googleRating: 3.8,
      googleReviewCount: 1330,
      tripadvisorRating: 3.7,
      tripadvisorReviewCount: 463,
      theforkRating: 3.7,
      theforkReviewCount: 100,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 463,
      openTime: "10:00",
      closeTime: "00:00",
      weeklySchedule: [
        { day: "Monday", openTime: "10:00", closeTime: "00:00", isClosed: false },
        { day: "Tuesday", openTime: "10:00", closeTime: "00:00", isClosed: false },
        { day: "Wednesday", openTime: "10:00", closeTime: "00:00", isClosed: false },
        { day: "Thursday", openTime: "10:00", closeTime: "00:00", isClosed: false },
        { day: "Friday", openTime: "10:00", closeTime: "00:00", isClosed: false },
        { day: "Saturday", openTime: "10:00", closeTime: "00:00", isClosed: false },
        { day: "Sunday", openTime: "10:00", closeTime: "00:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Marina d'Agadir, Route Marina, Agadir 80000, Morocco",
        lat: 30.42385,
        lng: -9.615373
      },
      address: "Marina d'Agadir, Route Marina, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.42385,
        lng: -9.615373
      },
      googleMapsUrl: "https://maps.google.com/?q=Les+Blancs+Agadir",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212528828368",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.lesblancsagadir.com",
      instagram: "https://instagram.com/lesblancsagadir",
      customStory: "Les Blancs has established itself as the go-to Spanish beachfront venue at the entrance of Agadir Marina, offering a feet-in-the-sand atmosphere with white-on-white decor, live music, and a menu built around Spanish tapas and seafood.",
      languagesSpoken: ["French", "Arabic/Darija", "English", "Spanish"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Marina Tourist Pricing",
        description: "Printed menus in MAD with card payments accepted; expect waterfront prices (170–250 MAD mains, plus sangria/cocktails) compared to town.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Fresh Seafood Kitchen",
        description: "Clean high-turnover waterfront kitchen cooking seafood paellas to order with fresh Atlantic catches and bottled water.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Spanish Tapas & Paella",
        description: "Authentic Spanish-style seafood paella, arroz negro, and garlic tapas cooked to order (allow 25–30 minutes for paella).",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Breezy & Lively Lounge",
        description: "Chic white beachfront terrace with sunset ocean views, though it gets windy in the evening and loud when live DJ/music plays.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Peak Rush Delays",
        description: "Relaxed daytime lunch service, while busy sunset and weekend dinner rushes frequently cause slow wait times and mixed table attention.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-3",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["hidden-gem", "casual"],
      foodStyles: ["Seafood", "French-Moroccan", "Italian", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["authentic", "maritime", "polished"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 32,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["fine", "budget", "alcohol", "dinner"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Yacht Club Agadir",
      neighborhood: "Fishing Port",
      description: "A refined seafood institution directly in Agadir's working fishing harbor. Celebrated for ultra-fresh fish sourced directly from the morning catch, prepared with French and Italian culinary expertise.",
      tip: "Reserve ahead for lunch to get the freshest catch of the day. The oysters gratinées are a standout specialty.",
      badge: "hidden-gem",
      bestDishes: [
        "Grilled or baked sea bream",
        "Oysters gratinées",
        "Fish soup",
        "Sole meunière"
      ],
      menu: {
        currency: 'MAD',
        lastUpdated: 'October 2026',
        serviceChargeIncluded: true,
        sections: [
          {
            id: 'entrees-maritimes',
            title: 'Entrées du Port & Coquillages',
            description: 'Fraîcheur absolue issue de la criée matinale du port de pêche d’Agadir',
            items: [
              {
                id: 'yacht-e1',
                name: 'Soupe de Poisson Traditionnelle du Port',
                localName: 'شوربة السمك الطازج مع الخبز المحمص والروي',
                description: 'Fumet corsé de poissons de roche de l’Atlantique, croûtons dorés, aïoli rouille et emmental râpé.',
                price: 65,
                isSignature: true
              },
              {
                id: 'yacht-e2',
                name: 'Huîtres Gratinées au Sabayon Marin',
                localName: 'محار مغربي غراتان بالفرن',
                description: 'Huîtres fraîches de Oualidia gratinées au four sur lit de poireaux fondants et sabayon crémeux.',
                price: 95,
                isSignature: true
              },
              {
                id: 'yacht-e3',
                name: 'Salade du Pêcheur Gadiri',
                localName: 'سلطة الصياد بالجمبري والكالمار الطازج',
                description: 'Gambas roses fraîches décortiquées, calamars sautés, avocat du Souss et vinaigrette aux agrumes.',
                price: 85
              },
              {
                id: 'yacht-e4',
                name: 'Carpaccio de Poisson Blanc aux Baies Roses',
                localName: 'كارباتشيو سمك أبيض بزيت الزيتون والليمون',
                description: 'Fines lamelles de loup de mer cru mariné au citron vert, fleur de sel et huile d’olive extra vierge.',
                price: 90
              }
            ]
          },
          {
            id: 'peche-du-jour',
            title: 'Arrivage de la Pêche du Jour & Spécialités',
            description: 'Poissons sauvages débarqués au quai et préparés entiers au four ou à la plancha',
            items: [
              {
                id: 'yacht-p1',
                name: 'Loup de Mer (Bar) Entier Grillé aux Herbes',
                localName: 'سمك الدرعي الملكي المشوي على الفحم',
                description: 'Bar sauvage entier levé en salle, arrosé d’un filet d’huile d’argan culinaire et légumes vapeur.',
                price: 160,
                isSignature: true,
                portionNotes: 'Pêche sauvage du jour'
              },
              {
                id: 'yacht-p2',
                name: 'Sole Meunière Poêlée au Beurre Blanc',
                localName: 'سمك الصول بالزبدة والليمون والبقدونس',
                description: 'Belle sole de l’Atlantique dorée au beurre noisette, persil frais et jus de citron jaune.',
                price: 170,
                isSignature: true
              },
              {
                id: 'yacht-p3',
                name: 'Choucroute de la Mer aux Poissons Nobles',
                localName: 'طبق أسماك الميناء المتنوعة مع الجمبري',
                description: 'Spécialité maritime généreuse : médaillons de lotte, bar, saumon et gambas sur lit de chou confit.',
                price: 180,
                isSignature: true
              },
              {
                id: 'yacht-p4',
                name: 'Friture Panachée du Port de Pêche',
                localName: 'تشكيلة أسماك مقلية طازجة من الميناء',
                description: 'Assortiment croustillant de petits rougets, soles, calamars et merlans frits à la minute.',
                price: 140
              },
              {
                id: 'yacht-p5',
                name: 'Gambas Royales Grillées au Gros Sel',
                localName: 'جمبري ملكي كبير مشوي بالملح البحري',
                description: 'Grosses gambas entières grillées à la plancha avec leur jus iodé et quartier de citron.',
                price: 190
              }
            ]
          },
          {
            id: 'desserts',
            title: 'Desserts & Gourmandises du Yacht Club',
            description: 'Fin de repas douce avec vue sur les chalutiers et les bassins',
            items: [
              {
                id: 'yacht-d1',
                name: 'Tiramisù Traditionnel Maison aux Framboises',
                localName: 'تيراميسو إيطالي أصيل بالتوت',
                description: 'Recette italienne onctueuse au mascarpone frais, biscuit cuillère imbibé au café doux et coulis de framboises.',
                price: 55,
                dietary: ['vegetarian']
              },
              {
                id: 'yacht-d2',
                name: 'Tarte Fine aux Pommes Caramélisées',
                localName: 'تارت التفاح المقرمش بالكراميل',
                description: 'Pâte feuilletée croustillante garnie de fines tranches de pommes dorées au four, glace vanille.',
                price: 50,
                dietary: ['vegetarian']
              },
              {
                id: 'yacht-d3',
                name: 'Café Gourmand du Port',
                localName: 'قهوة مع تشكيلة حلويات مصغرة',
                description: 'Expresso serré accompagné de trois mignardises maison du chef pâtissier.',
                price: 60,
                dietary: ['vegetarian']
              }
            ]
          }
        ]
      },
      pros: [
        "Ultra-fresh seafood sourced directly from Agadir's fishing port.",
        "Authentic harbor atmosphere away from the main tourist promenade.",
        "Strong French and Italian seafood preparation."
      ],
      cons: [
        "The industrial port area can be intimidating for some visitors.",
        "Premium pricing for specific fish by weight; reservations are essential."
      ],
      googleRating: 4.2,
      googleReviewCount: 200,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 306,
      theforkRating: 4.2,
      theforkReviewCount: 306,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 306,
      openTime: "12:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Port de Pêche, Yacht Club, Agadir 80000, Morocco",
        lat: 30.4240313,
        lng: -9.6199724
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Yacht+Club+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212525090528",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      customStory: "Restaurant Yacht Club Agadir — also known as Restaurant du Port de Pêche — sits inside the Agadir fishing harbor, one of the busiest in Africa. The venue is built around the daily catch: fishermen unload sardines and shellfish in the morning, which are then transformed into French- and Italian-influenced plates.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-4",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "brunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "traditional", "casual"],
      foodStyles: ["French-Moroccan", "Moroccan", "Cafe & Pastry"],
      cuisineTags: ["international", "moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["culture", "first-timer", "nomad"],
      vibeTags: ["traditional", "homestyle", "lively", "authentic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["pastry", "cafe-pastry", "breakfast", "budget", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Tafarnout",
      neighborhood: "Ville Nouvelle",
      description: "An Agadir institution since 1984. This legendary bakery-patisserie, café, and breakfast room serves the city's finest viennoiseries, traditional breads, and Moroccan pastries.",
      tip: "Best between 07:00–09:00 for the freshest baked goods. Try the traditional Souss breakfast sets.",
      badge: "local-favorite",
      bestDishes: [
        "Fresh Croissants",
        "Lemon Tart",
        "Traditional Moroccan breakfast set",
        "Mint tea"
      ],
      pros: [
        "Excellent quality-to-price ratio for fresh pastries and breakfast.",
        "Long-established local institution with a central location.",
        "Wide selection of breads, cakes, and breakfast set menus."
      ],
      cons: [
        "Can be crowded and noisy during the morning rush.",
        "Service is efficient rather than leisurely."
      ],
      googleRating: 4.2,
      googleReviewCount: 400,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 672,
      theforkRating: 4.2,
      theforkReviewCount: 672,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 672,
      openTime: "06:00",
      closeTime: "22:30",
      exactAddressAndCoordinates: {
        address: "Avenue Hassan II, Agadir 80000, Morocco",
        lat: 30.417381,
        lng: -9.596071
      },
      googleMapsUrl: "https://maps.google.com/?q=Tafarnout+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "+212528844450",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      customStory: "Pâtisserie Tafarnout has been an Agadir institution since 1984, starting as a traditional bakery and evolving into a full-service patisserie, café, and breakfast room. It remains a morning ritual for locals and visitors seeking fresh baguettes, croissants, and Moroccan pastries.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-6",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: [
        "French-Moroccan",
        "Seafood",
        "International",
        "Mediterranean"
      ],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["elegant", "romantic", "refined", "upscale"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 40,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "fine", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Scala Restaurant Agadir",
      neighborhood: "Secteur Touristique",
      description: "An upscale romantic institution famous for its refined French-Mediterranean seafood. Features a live lobster tank and a polished, classic dining room perfect for special occasions.",
      tip: "Complimentary shuttle service is available for guests in nearby hotels. Perfect for a refined dinner with high-quality service.",
      badge: "splurge",
      bestDishes: [
        "Grilled Sole",
        "Lobster Thermidor",
        "Prime Rib",
        "Crème Brûlée"
      ],
      pros: [
        "Consistently refined French-Mediterranean seafood in a polished setting.",
        "Strong value for the tourist-zone quality and large portions.",
        "Free shuttle service and attentive staff."
      ],
      cons: [
        "Premium pricing compared to main streets.",
        "Music can become loud later in the evening."
      ],
      googleRating: 4.2,
      googleReviewCount: 946,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 1348,
      theforkRating: 4.1,
      theforkReviewCount: 1348,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1348,
      openTime: "12:00",
      closeTime: "01:30",
      weeklySchedule: [
        { day: "Monday", openTime: "12:00", closeTime: "01:30", isClosed: false, note: "Lunch 12:00–16:00 • Dinner 19:00–01:30" },
        { day: "Tuesday", openTime: "12:00", closeTime: "01:30", isClosed: false, note: "Lunch 12:00–16:00 • Dinner 19:00–01:30" },
        { day: "Wednesday", openTime: "12:00", closeTime: "01:30", isClosed: false, note: "Lunch 12:00–16:00 • Dinner 19:00–01:30" },
        { day: "Thursday", openTime: "12:00", closeTime: "01:30", isClosed: false, note: "Lunch 12:00–16:00 • Dinner 19:00–01:30" },
        { day: "Friday", openTime: "12:00", closeTime: "01:30", isClosed: false, note: "Lunch 12:00–16:00 • Dinner 19:00–01:30" },
        { day: "Saturday", openTime: "12:00", closeTime: "01:30", isClosed: false, note: "Lunch 12:00–16:00 • Dinner 19:00–01:30" },
        { day: "Sunday", openTime: "12:00", closeTime: "01:30", isClosed: false, note: "Lunch 12:00–16:00 • Dinner 19:00–01:30" }
      ],
      exactAddressAndCoordinates: {
        address: "Rue de l'Oued Souss, Complexe Tamlalt, Agadir 80000, Morocco",
        lat: 30.40857,
        lng: -9.598747
      },
      address: "Rue de l'Oued Souss, Complexe Tamlalt, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.40857,
        lng: -9.598747
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Scala+Restaurant+Agadir",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212528846773",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://lascalaagadir.com",
      instagram: "https://instagram.com/lascalaagadir",
      customStory: "La Scala has been a fixture of Agadir's tourist-zone dining scene for decades. It built its reputation on a French-influenced menu and a live lobster tank, attracting couples and families seeking a polished evening.",
      languagesSpoken: ["French", "Arabic/Darija", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "starters-raw",
            title: "Entrées Fraîches & Vivier",
            description: "Fresh Dakhla oysters, red tuna marinades, and Mediterranean bistro starters",
            items: [
              {
                id: "lascala-oysters",
                name: "6 Huîtres de Dakhla Fraîches",
                localName: "ست حبات محار الداخلة الطازج",
                translations: {
                  ar: "ست حبات محار الداخلة الطازج",
                  en: "Half dozen fresh Dakhla Atlantic oysters served chilled on crushed ice",
                  es: "Media docena de ostras frescas de Dakhla sobre hielo",
                  de: "Sechs frische Austern aus Dakhla auf Eis serviert"
                },
                price: 140,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "lascala-tuna-marinade",
                name: "Marinade de Thon Rouge aux Agrumes",
                localName: "سمك التونة الحمراء المتبل بالحمضيات",
                translations: {
                  ar: "سمك التونة الحمراء المتبل بالحمضيات",
                  en: "Thinly sliced fresh Atlantic red tuna cured with olive oil, capers, and citrus",
                  es: "Marinada de atún rojo fresco del Atlántico con cítricos y alcaparras",
                  de: "Marinierter Atlantik-Roter-Thunfisch mit Zitrusfrüchten und Kapern"
                },
                price: 140,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "lascala-avocado-prawns",
                name: "Salade Avocat & Gambas Royales",
                localName: "سلطة الأفوكادو مع القريدس الملكي",
                translations: {
                  ar: "سلطة الأفوكادو مع القريدس الملكي",
                  en: "Ripe avocado fans paired with chilled royal prawns and classic cocktail sauce",
                  es: "Ensalada clásica de aguacate y langostinos con salsa rosa",
                  de: "Avocado-Salat mit Riesengarnelen und Cocktailsauce"
                },
                price: 150,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "lascala-grilled-octopus",
                name: "Poulpe Grillé aux Herbes de Provence",
                localName: "أخطبوط مشوي بأعشاب بروفانس",
                translations: {
                  ar: "أخطبوط مشوي بأعشاب بروفانس",
                  en: "Char-grilled tender Atlantic octopus dressed with olive oil, garlic, and herbs",
                  es: "Pulpo a la brasa con aceite de oliva y hierbas provenzales",
                  de: "Gegrillter Atlantik-Oktopus mit Kräutern der Provence"
                },
                price: 160,
                isSignature: true,
                dietary: ["gluten-free", "halal"]
              }
            ]
          },
          {
            id: "mains-fish-meats",
            title: "Poissons Nobles, Paella & Viandes",
            description: "Daily port catches, Agadir sole, and tender beef tenderloin classics",
            items: [
              {
                id: "lascala-paella",
                name: "Paella aux Fruits de Mer La Scala",
                localName: "بايلا فواكه البحر على طريقة لا سكالا",
                translations: {
                  ar: "بايلا فواكه البحر على طريقة لا سكالا",
                  en: "Saffron rice cooked with royal prawns, calamari rings, mussels, and fresh catch",
                  es: "Paella marinera de arroz al azafrán con gambas, calamares y mejillones",
                  de: "Meeresfrüchte-Paella mit Safranreis, Garnelen, Tintenfisch und Muscheln"
                },
                price: 220,
                isSignature: true,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "lascala-sole",
                name: "Sole d'Agadir Meunière ou Grillée",
                localName: "سمك موسى الطازج من ميناء أكادير",
                translations: {
                  ar: "سمك موسى الطازج من ميناء أكادير",
                  en: "Whole fresh Agadir Dover sole sautéed in browned butter or simply grilled with lemon",
                  es: "Lenguado entero de Agadir a la meunière o a la parrilla",
                  de: "Frische Seezunge aus Agadir Müllerin Art oder gegrillt"
                },
                price: 300,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "lascala-beef-mushroom",
                name: "Émincé de Filet de Bœuf Sauce Champignons",
                localName: "شرائح فيليه اللحم البقري بصلصة الفطر",
                translations: {
                  ar: "شرائح فيليه اللحم البقري بصلصة الفطر",
                  en: "Sautéed prime beef tenderloin strips simmered in rich wild mushroom cream sauce",
                  es: "Tiras de solomillo de ternera en salsa cremosa de champiñones",
                  de: "Rinderfiletstreifen in cremiger Waldpilzsauce"
                },
                price: 240,
                dietary: ["halal"]
              },
              {
                id: "lascala-fish-tagine",
                name: "Tagine de Poisson du Port à la Chermoula",
                localName: "طاجين السمك الطازج بالشرمولة المغربية",
                translations: {
                  ar: "طاجين السمك الطازج بالشرمولة المغربية",
                  en: "Fresh Atlantic white fish slow-braised in clay pot with coriander chermoula and sweet peppers",
                  es: "Tajine de pescado fresco del Atlántico con chermoula y pimientos",
                  de: "Frischer Atlantikfisch-Tagine mit Koriander-Chermoula und Paprika"
                },
                price: 320,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "desserts-classic",
            title: "Desserts Classiques",
            description: "Traditional French bistro sweets prepared in house",
            items: [
              {
                id: "lascala-creme-brulee",
                name: "Crème Brûlée à la Vanille",
                localName: "كريم بروليه بالفانيليا الطبيعية",
                translations: {
                  ar: "كريم بروليه بالفانيليا الطبيعية",
                  en: "Classic vanilla bean custard with caramelized crisp sugar crust",
                  es: "Crema catalana clásica de vainilla con azúcar caramelizado",
                  de: "Klassische Vanille-Crème-brûlée mit knuspriger Karamellkruste"
                },
                price: 80,
                dietary: ["vegetarian", "gluten-free"]
              },
              {
                id: "lascala-profiteroles",
                name: "Profiteroles au Chocolat Chaud",
                localName: "بروفيترول محشو بالآيس كريم وصلصة الشوكولاتة",
                translations: {
                  ar: "بروفيترول محشو بالآيس كريم وصلصة الشوكولاتة",
                  en: "Crisp choux pastry puffs filled with vanilla ice cream under warm dark chocolate sauce",
                  es: "Profiteroles rellenos de helado de vainilla con salsa caliente de chocolate",
                  de: "Profiteroles gefüllt mit Vanilleeis und heißer Schokoladensauce"
                },
                price: 110,
                isSignature: true,
                dietary: ["vegetarian"]
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Verify Lobster Weight",
        description: "Printed MAD prices are clear for mains (220–320 MAD), but live tank lobster and langoustines are priced by weight—confirm exact weight and total price before ordering.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Clean Lobster Tank",
        description: "Well-maintained live seafood tank and disciplined Franco-Mediterranean kitchen with fresh daily Agadir port fish and crisp cold starters.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Classic French Seafood",
        description: "Old-school French brasserie presentation focusing on Dover sole meunière, lobster thermidor, and paella with attentive tableside service.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Complimentary Shuttle",
        description: "Polished romantic dining room with complimentary hotel shuttle pickup in the tourist zone; evening background music can get lively later.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Formal White-Tablecloth",
        description: "Seasoned French-style waiters providing attentive pacing and hotel-shuttle coordination; confirm reservation times for Friday–Saturday dinner.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-7",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night", "flexible"],
      experienceTypes: ["casual"],
      foodStyles: ["International", "Moroccan", "Italian"],
      cuisineTags: ["international", "moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["adventure", "first-timer"],
      vibeTags: ["lively", "casual", "coastal"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 12,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "pastry",
        "cafe-pastry",
        "late-night",
        "breakfast",
        "budget",
        "dry",
        "dinner"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Jour et Nuit",
      neighborhood: "Corniche",
      description: "An iconic, sprawling beachfront café and brasserie operating until late night. Highly beloved by families and beachgoers for international comfort food, wood-fired pizzas, local pastries, and oceanfront people-watching.",
      tip: "Great stop for a late-night snack or a refreshing mint tea after walking along the beach promenade.",
      badge: "local-favorite",
      bestDishes: [
        "Pizza Jour et Nuit",
        "Beef Kefta Brochettes",
        "Traditional Harira Soup"
      ],
      pros: [
        "Central location in the Agadir tourist zone",
        "Wide selection of breakfast and coffee sets",
        "Generous terrace seating open late"
      ],
      cons: [
        "Service can be slow during peak evening rush",
        "Can get bustling and loud outdoors"
      ],
      googleRating: 4,
      googleReviewCount: 1050,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 305,
      theforkRating: 3.5,
      theforkReviewCount: 305,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 305,
      openTime: "06:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Jour+et+Nuit+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528840610",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-8",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["hidden-gem", "casual", "traditional"],
      foodStyles: [
        "French-Moroccan",
        "Moroccan",
        "Seafood",
        "International",
        "Vegetarian/Vegan"
      ],
      cuisineTags: ["moroccan-traditional", "international", "seafood"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["charming", "relaxed", "melodic", "festive"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "live-music", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Jardin d'Eau",
      neighborhood: "Tourist Zone",
      description: "One of Agadir's oldest dining institutions, set in a lush garden complex on Boulevard du 20 Août. It is beloved for its French-Moroccan fusion cuisine, calming water fountains, and live acoustic music performances most evenings.",
      tip: "Reservations are highly recommended for dinner, particularly on live acoustic music and traditional Bodeguita theme nights.",
      badge: "local-favorite",
      bestDishes: [
        "7-hour slow-braised lamb",
        "Seafood / fish platter",
        "Lobster fricassee with king prawns",
        "Tiramisu",
        "Crème brûlée",
        "Chocolate moelleux"
      ],
      pros: [
        "Long-established Agadir institution with reliable French-Moroccan food.",
        "Live music and festive garden atmosphere.",
        "Good value for the location and generous portions."
      ],
      cons: [
        "Can get crowded and noisy during peak dinner / live-music hours.",
        "Service speed and English fluency vary during busy nights."
      ],
      googleRating: 4.3,
      googleReviewCount: 1124,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 1299,
      theforkRating: 4.3,
      theforkReviewCount: 1299,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1299,
      openTime: "10:00",
      closeTime: "01:30",
      weeklySchedule: [
        { day: "Monday", openTime: "10:00", closeTime: "01:30", isClosed: false },
        { day: "Tuesday", openTime: "10:00", closeTime: "01:30", isClosed: false },
        { day: "Wednesday", openTime: "10:00", closeTime: "01:30", isClosed: false },
        { day: "Thursday", openTime: "10:00", closeTime: "01:30", isClosed: false },
        { day: "Friday", openTime: "10:00", closeTime: "01:30", isClosed: false },
        { day: "Saturday", openTime: "10:00", closeTime: "01:30", isClosed: false },
        { day: "Sunday", openTime: "10:00", closeTime: "01:30", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Complexe Tagadirt, Boulevard du 20 Août, Agadir 80000, Morocco",
        lat: 30.4139,
        lng: -9.600732
      },
      address: "Complexe Tagadirt, Boulevard du 20 Août, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.4139,
        lng: -9.600732
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Jardin+d+Eau+Agadir",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212528840195",
      whatsappNumber: "+212528840195",
      bookingUrl: "",
      website: "https://www.lejardindeau.ma",
      instagram: "not-available",
      customStory: "Le Jardin d'Eau is one of Agadir's oldest dining institutions, set in a garden complex on Boulevard du 20 Août. It has long been a favorite for French-Moroccan fusion, live music, and a festive 'Bodeguita' atmosphere, pairing tagines and seafood with a lounge-style bar and cocktail program.",
      languagesSpoken: ["French", "Arabic/Darija", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "starters-garden",
            title: "Entrées & Salades du Jardin",
            description: "Fresh seafood carpaccios, Moroccan salads, and crispy briouates",
            items: [
              {
                id: "jde-salade-marocaine",
                name: "Assiette de Salades Marocaines Cuisinées",
                localName: "تشكيلة سلطات مغربية تقليدية دافئة",
                translations: {
                  ar: "تشكيلة سلطات مغربية تقليدية دافئة",
                  en: "Tasting platter of smoky zaalouk eggplant, sweet taktouka peppers, and spiced carrots",
                  es: "Plato degustación de ensaladas marroquíes cocinadas",
                  de: "Auswahl gekochter marokkanischer Salate (Zaalouk, Taktouka)"
                },
                price: 65,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "jde-calamars-plancha",
                name: "Calamars Grillés à la Persillade",
                localName: "كالامار مشوي بالثوم والبقدونس",
                translations: {
                  ar: "كالامار مشوي بالثوم والبقدونس",
                  en: "Fresh Atlantic squid seared on the plancha with garlic parsley oil and lemon",
                  es: "Calamares frescos a la plancha con ajo y perejil",
                  de: "Gegrillter Tintenfisch mit Knoblauch-Petersilienöl"
                },
                price: 110,
                dietary: ["gluten-free", "halal"]
              }
            ]
          },
          {
            id: "mains-lamb-fish",
            title: "Spécialités Marocaines & Poissons de l'Atlantique",
            description: "Slow-braised lamb, royal couscous, and port-fresh seafood plates",
            items: [
              {
                id: "jde-souris-agneau",
                name: "Souris d'Agneau Confite 7 Heures",
                localName: "موزة غنم مطهوة لمدة 7 ساعات",
                translations: {
                  ar: "موزة غنم مطهوة لمدة 7 ساعات",
                  en: "7-hour slow-braised Moroccan lamb shank melting off the bone with roasted vegetables",
                  es: "Jarrete de cordero confitado a fuego lento durante 7 horas",
                  de: "7 Stunden langsam geschmorte marokkanische Lammhaxe"
                },
                price: 155,
                isSignature: true,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "jde-couscous-royal",
                name: "Couscous Royal du Jardin",
                localName: "كسكس ملكي تقليدي بسبع خضار",
                translations: {
                  ar: "كسكس ملكي تقليدي بسبع خضار",
                  en: "Steamed fine semolina with lamb, chicken, merguez sausage, chickpeas, and 7 vegetables",
                  es: "Cuscús real completo con cordero, pollo, merguez y siete verduras",
                  de: "Königlicher Couscous mit Lamm, Hähnchen, Merguez und sieben Gemüsesorten"
                },
                price: 150,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "jde-fricassee-fruits-mer",
                name: "Fricassée de Poissons & Gambas Royales",
                localName: "مقلاة فواكه البحر والأسماك الطازجة",
                translations: {
                  ar: "مقلاة فواكه البحر والأسماك الطازجة",
                  en: "Saffron cream fricassee of Atlantic white fish fillets, king prawns, and mussels",
                  es: "Fricasé cremosa al azafrán de pescado atlántico y langostinos",
                  de: "Safran-Frikassee von Atlantikfisch und Riesengarnelen"
                },
                price: 185,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "jde-tajine-poulet",
                name: "Tajine de Poulet au Citron Confit & Olives",
                localName: "طاجين الدجاج بالحامض المصير والزيتون",
                translations: {
                  ar: "طاجين الدجاج بالحامض المصير والزيتون",
                  en: "Classic braised chicken tagine with preserved Beldi lemons, saffron, and green olives",
                  es: "Tajine clásico de pollo con limones confitados y aceitunas",
                  de: "Klassischer Hähnchen-Tagine mit Salzzitronen und Oliven"
                },
                price: 125,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "desserts-garden",
            title: "Douceurs & Desserts Maison",
            description: "House-baked pastries and classic French-Moroccan sweets",
            items: [
              {
                id: "jde-creme-brulee",
                name: "Crème Brûlée Maison",
                localName: "كريم بروليه منزلي",
                translations: {
                  ar: "كريم بروليه منزلي",
                  en: "Creamy vanilla custard topped with caramelized crackling sugar",
                  es: "Crema catalana casera de vainilla caramelizada",
                  de: "Hausgemachte Vanille-Crème-brûlée"
                },
                price: 55,
                dietary: ["vegetarian", "gluten-free"]
              },
              {
                id: "jde-moelleux-chocolat",
                name: "Moelleux au Chocolat & Glace Vanille",
                localName: "كيك الشوكولاتة الذائبة مع الآيس كريم",
                translations: {
                  ar: "كيك الشوكولاتة الذائبة مع الآيس كريم",
                  en: "Warm molten dark chocolate cake served with vanilla ice cream",
                  es: "Coulant tibio de chocolate negro con helado de vainilla",
                  de: "Warmer Schokoladenkuchen mit Vanilleeis"
                },
                price: 70,
                isSignature: true,
                dietary: ["vegetarian"]
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Fair Tourist-Strip Value",
        description: "Honest printed MAD prices (125–185 MAD mains) with generous portions and itemized card receipts right on Boulevard du 20 Août.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Clean Garden Kitchen",
        description: "Long-standing Tagadirt institution using fresh daily Agadir fish, bottled mineral water, and well-cooked braised meats.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Reliable Bistro Fusion",
        description: "Consistent French-Moroccan menu excelling at 7-hour braised lamb, couscous, and seafood fricassees rather than experimental cuisine.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Lush Garden & Live Music",
        description: "Atmospheric fountain courtyard shaded by tropical trees; evening acoustic and Bodeguita live music becomes loud and festive after 21:00.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Peak Rush Pacing",
        description: "Warm veteran staff, though French fluency is stronger than English and food delivery can slow noticeably during crowded live-music nights.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-11",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["casual"],
      foodStyles: ["International", "Grill & BBQ", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["adventure", "luxury"],
      vibeTags: ["breezy", "casual", "coastal"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 19,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "sunset", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Mimi La Brochette",
      neighborhood: "Corniche",
      description: "An iconic beachfront culinary landmark in Agadir. Known for its breezy ocean views, historic Agadir connection, exceptional charcoal grills, and fantastic fresh squid.",
      tip: "Sit on the upper tier terrace to get the most majestic, uninterrupted breeze and coastal sunset views.",
      badge: "local-favorite",
      bestDishes: [
        "Charcoal Beef Fillet Skewers",
        "Fried Calamari Platter",
        "Chocolate Moelleux"
      ],
      pros: [
        "Direct seaside marina atmosphere and outdoor tables",
        "Fresh grilled brochettes and seafood skewers",
        "Friendly multilingual service staff"
      ],
      cons: [
        "Slightly higher marina tourist pricing",
        "Outdoor tables can get windy in late afternoon"
      ],
      googleRating: 4.3,
      googleReviewCount: 300,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 435,
      theforkRating: 4.3,
      theforkReviewCount: 435,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 435,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Rue La Plage, Agadir, Morocco",
        lat: 30.4218682,
        lng: -9.6098178
      },
      googleMapsUrl: "https://maps.google.com/?q=Mimi+La+Brochette+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212691339036",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-12",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly", "seniors"],
      mealTypes: ["dinner", "late-night"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["Moroccan", "International", "Seafood"],
      cuisineTags: ["moroccan-traditional", "international", "seafood"],
      archetypeAffinity: ["luxury"],
      vibeTags: ["stylish", "chic", "oriental-chic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 28,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "fine", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Mauresque",
      neighborhood: "Secteur Touristique",
      description: "A stylish Moroccan restaurant in Agadir's tourist zone, known for refined Moroccan dishes, attentive service, and an elegant evening lounge atmosphere.",
      tip: "The ocean fusion dishes like seafood tagine with modern saffron-infused risotto are highly unique.",
      badge: "splurge",
      bestDishes: [
        "Saffron Risotto with Tiger Prawns",
        "Slow-cooked Lamb Tanjia",
        "Traditional Souss Salad"
      ],
      pros: [
        "Refined Moroccan lounge ambiance with warm interior lighting",
        "Richly flavored lamb tagines and traditional pastilla",
        "Full bar and cocktail selection available"
      ],
      cons: [
        "Pricier than medina street dining",
        "Reservations strongly recommended on weekends"
      ],
      googleRating: 4.2,
      googleReviewCount: 670,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 402,
      theforkRating: 4,
      theforkReviewCount: 393,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 393,
      openTime: "18:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "12 Complexe Valtur - Chemin de Oued Souss, Agadir 80000, Morocco",
        lat: 30.406393,
        lng: -9.598389
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Mauresque+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528820444",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.lemauresque.ma",
      instagram: "https://instagram.com/restaurant_lemauresque_agadir"
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-15",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional"],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["cozy", "homestyle", "friendly"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["tagine", "couscous", "budget", "dry", "dinner"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Cafe Restaurant Ibtissam",
      neighborhood: "Talborjt",
      description: "An exceptional restaurant in historic Talborjt dedicated to authentic Berber and traditional Moroccan Souss-region culinary heritage. Celebrated for slow-simmered tajines inside real clay pots and rich couscous.",
      tip: "Their vegetable tagine cooked strictly in clay pots over embers is deeply flavorful and perfect for vegetarians.",
      badge: "local",
      bestDishes: [
        "Slow-cooked Vegetable Tagine",
        "Beef Tagine with Almonds",
        "Friday Souss Couscous"
      ],
      pros: [
        "Affordable local Moroccan dishes and mint tea",
        "Welcoming family-run atmosphere",
        "Popular spot for casual breakfast and quick lunches"
      ],
      cons: [
        "Modest indoor dining area with basic seating",
        "Cash-only payment preferred"
      ],
      googleRating: 4.2,
      googleReviewCount: 452,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 166,
      theforkRating: 4.3,
      theforkReviewCount: 166,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 166,
      openTime: "11:30",
      closeTime: "22:30",
      exactAddressAndCoordinates: {
        address: "Place Tamri, Talborjt, Agadir, Morocco",
        lat: 30.4244,
        lng: -9.593001
      },
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Restaurant+Ibtissam+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212670128435",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-16",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "Mediterranean"],
      cuisineTags: ["international"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["casual", "lively", "festive"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["late-night", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Mezzo Mezzo",
      neighborhood: "Ville Nouvelle",
      description: "A lively evening Italian restaurant and lounge bistro in the city center, famed for authentic wood-fired pizzas, creamy pastas, wine, and festive dinner Tarab music.",
      tip: "Try the Calzone or any pizza topped with local fresh-cured meats. Great choice for a late dinner with musical ambiance.",
      badge: "local-favorite",
      bestDishes: [
        "Wood-Fired Pizza Regina",
        "Spaghetti Frutti di Mare",
        "Homemade Tiramisu"
      ],
      pros: [
        "Authentic wood-fired Italian pizzas and pasta dishes",
        "Pleasant terrace seating on Boulevard Hassan II",
        "Generous portions suitable for sharing"
      ],
      cons: [
        "Limited Moroccan food choices",
        "Busy during peak weekend dinner hours"
      ],
      googleRating: 4,
      googleReviewCount: 133,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 381,
      theforkRating: 4,
      theforkReviewCount: 381,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 381,
      openTime: "19:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "19 Avenue Hassan II, Agadir 80000, Morocco",
        lat: 30.415997,
        lng: -9.595236
      },
      googleMapsUrl: "https://maps.google.com/?q=Mezzo+Mezzo+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212666828055",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-17",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: ["hidden-gem"],
      foodStyles: ["Mediterranean", "French-Moroccan", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "luxury", "nomad"],
      vibeTags: ["peaceful", "verdant", "refined"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 17.5,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["budget", "alcohol", "dinner", "quiet"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Cote' Court",
      neighborhood: "City Center",
      description: "A peaceful, lush garden restaurant located inside the Agadir Royal Tennis Club. Offers a serene, shaded escape from the beach crowds, serving excellent Mediterranean, French-style, and Moroccan plates.",
      tip: "Perfect choice for a quiet business lunch or a relaxed Sunday afternoon brunch under the tall eucalyptus trees.",
      badge: "hidden-gem",
      bestDishes: ["Grilled Monkfish Brochette", "Steak Tartare", "Lemon Tart"],
      pros: [
        "Relaxed sports club setting amidst lush greenery",
        "High quality French-Mediterranean brasserie menu",
        "Spacious shaded terrace away from street noise"
      ],
      cons: [
        "Tucked away location inside the tennis club complex",
        "Car or taxi recommended for access"
      ],
      googleRating: 4.1,
      googleReviewCount: 370,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 270,
      theforkRating: 4.1,
      theforkReviewCount: 270,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 270,
      openTime: "11:30",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Avenue Hassan II, Royal Tennis Club Agadir, Agadir 80020, Morocco",
        lat: 30.417606,
        lng: -9.597778
      },
      googleMapsUrl: "https://maps.google.com/?q=Cote+Court+Agadir+Royal+Tennis+Club",
      reservationMethod: ["phone"],
      reservationContact: "+212616070760",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-19",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional"],
      foodStyles: ["Moroccan", "Mediterranean", "Middle Eastern"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["warm", "lively", "traditional", "authentic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["tagine", "couscous", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Daffy",
      neighborhood: "Talborjt",
      description: "A legendary family-run diner tucked away in the authentic Talborjt quarter. Highly celebrated for over 45 years of home-style Moroccan cooking, offering rich tagines and fresh local salads in a warm, Amazigh-infused environment.",
      tip: "Famous for Friday couscous and their slow-cooked beef tagines. Pair it with their signature freshly-brewed hot mint tea.",
      badge: "local-favorite",
      bestDishes: [
        "Beef tagine",
        "Kefta tagine",
        "Chicken tagine",
        "Couscous",
        "Harira soup",
        "Grilled sardines",
        "Mint tea"
      ],
      pros: [
        "Authentic, affordable Moroccan home cooking in a friendly family setting.",
        "Consistently praised mint tea and traditional harira soup.",
        "Great value and central Talborjt location."
      ],
      cons: [
        "Small, simple decor and limited seating can mean waits at peak times.",
        "Service can be slow when busy; English menu/communication may be limited."
      ],
      googleRating: 4.3,
      googleReviewCount: 809,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 45,
      theforkRating: 4.5,
      theforkReviewCount: 45,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 45,
      openTime: "10:00",
      closeTime: "22:30",
      exactAddressAndCoordinates: {
        address: "2 Rue des Orangers, Talborjt, Agadir 80000, Morocco",
        lat: 30.422903,
        lng: -9.601278
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Daffy+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212661091614",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/daffy_restaurant",
      customStory: "Restaurant Daffy is a family-run institution in the Talborjt quarter, celebrated for more than 45 years of home-style Moroccan cooking. The dining room features traditional Amazigh decor, and the menu changes with the market, focusing on fresh tagines, couscous, grilled meats and a justly famous mint tea.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-21",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "nomad"],
      vibeTags: ["casual", "friendly", "cozy", "warm"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Siciliana",
      neighborhood: "Ville Nouvelle",
      description: "A downtown Agadir fixture since 1996, operating a Moroccan-run Italian pizzeria built around a cozy wood-fired oven. Renowned for thin, crispy, and authentic wood-baked crusts paired with highly hospitable service.",
      tip: "Make sure to order pizza baked natively in the wood-fired brick oven. They are thin, crispy, and baked fresh on order.",
      badge: "local-favorite",
      bestDishes: [
        "Wood-fired pizza",
        "Calzone",
        "Lasagna",
        "Tiramisu",
        "Crème brûlée"
      ],
      pros: [
        "Excellent value: authentic wood-fired pizzas at low prices.",
        "Friendly, welcoming staff and quick service.",
        "Halal and vegetarian-friendly Italian menu."
      ],
      cons: [
        "Menu and staff primarily in French; English communication may be basic.",
        "Alcohol-free, which may disappoint some tourists expecting wine with pizza."
      ],
      googleRating: 4.2,
      googleReviewCount: 850,
      tripadvisorRating: 3.7,
      tripadvisorReviewCount: 126,
      theforkRating: 3.7,
      theforkReviewCount: 126,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 126,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "65 bis & 67 Avenue Hassan II, Ville Nouvelle, Agadir 80020, Morocco",
        lat: 30.421875,
        lng: -9.601104
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Siciliana+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528820973",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.lasiciliana.ma",
      instagram: "https://instagram.com/lasicilianaagadir",
      customStory: "La Siciliana has been a downtown Agadir fixture since 1996, operating a Moroccan-run Italian pizzeria built around a wood-fired oven. It is known for thin, crispy pizzas, friendly service, and very reasonable prices, making it a reliable local favorite for casual lunches and dinners.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-darzitoune",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "hidden-gem", "traditional"],
      foodStyles: [
        "Moroccan",
        "French-Moroccan",
        "Mediterranean",
        "International"
      ],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["romantic", "peaceful", "verdant", "refined"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 40,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: [
        "couscous",
        "pastilla",
        "fine",
        "budget",
        "alcohol",
        "dinner",
        "quiet"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Zitoune",
      neighborhood: "Taroudant (Region Souss)",
      description: "Located in nearby Taroudant (around 80 km east of Agadir), Dar Zitoune is an exceptional garden riad restaurant set in a one-and-a-half-hectare garden with citrus, papaya, and olive trees. Celebrated as one of the Souss region's finest gourmet tables.",
      tip: "A beautiful gourmet stop on a day-excursion from Agadir. It is recommended to book in advance and request specialty dishes.",
      badge: "splurge",
      bestDishes: [
        "Charolais Beef Tartare",
        "Smoked Duck-Breast Tatin",
        "Traditional Mechoui Lamb",
        "Royal Couscous",
        "Moroccan Pastilla"
      ],
      pros: [
        "Stunning garden oasis and Riad-setting with organic estate fruit groves.",
        "High-end gastronomy marrying Moroccan traditional cooking with refined French classics.",
        "Impeccable multilingual hospitality and quiet, romantic ambiance."
      ],
      cons: [
        "Requires a 1-hour drive east from Agadir (not situated inside Agadir city).",
        "Dinner frequently shifts to a fixed-price set menu, offering less individual menu flexibility."
      ],
      googleRating: 4.5,
      googleReviewCount: 289,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 246,
      theforkRating: 4.5,
      theforkReviewCount: 246,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 246,
      openTime: "12:30",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Boutarial El Berrania (N10), Taroudant 83000, Morocco",
        lat: 30.452158,
        lng: -8.880196
      },
      googleMapsUrl: "https://maps.google.com/?q=Dar+Zitoune+Taroudant",
      reservationMethod: ["phone"],
      reservationContact: "+212528551141",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://darzitoune.com",
      instagram: "not-available",
      customStory: "Dar Zitoune ('House of the Olives') opened as a 4-star boutique hotel in 2005, built in traditional Berber style on the edge of Taroudant. Its restaurant is set in a garden of olive, citrus and papaya trees, and is celebrated as one of the finest tables in the Souss region, blending refined European cuisine with Moroccan classics.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-kounouz",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["traditional", "cozy", "authentic"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 0,
      isHalal: true,
      halalStatus: "unknown",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: false,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["late-night", "budget", "dinner", "quiet"],
      isHiddenGem: true,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Kounouz (Unverified)",
      neighborhood: "Talborjt",
      description: "Unverified entry: In Talborjt, Kounouz corresponds to an artisan and textile boutique, not a restaurant.",
      tip: "Call ahead to confirm operating hours and inquire about the daily slow-cooked tagine special.",
      badge: "local",
      bestDishes: [
        "Traditional Chicken Pastilla",
        "Slow-Cooked Beef Tagine with Prunes",
        "Seven Vegetables Couscous"
      ],
      pros: [
        "Authentic Moroccan home-style culinary recipes",
        "Charming traditional dining room decor"
      ],
      cons: [
        "Pending on-site verification",
        "Operating hours may vary seasonally"
      ],
      googleRating: 0,
      googleReviewCount: 0,
      tripadvisorRating: 0,
      tripadvisorReviewCount: 0,
      theforkRating: 0,
      theforkReviewCount: 0,
      restaurantguruRating: 0,
      restaurantguruReviewCount: 0,
      openTime: "00:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Kounouz+Agadir",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-obleu",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["first-timer", "budget"],
      vibeTags: ["breezy", "casual", "coastal"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 0,
      isHalal: true,
      halalStatus: "unknown",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: false,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["late-night", "budget", "dinner", "quiet"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "O'Bleu (Unverified)",
      neighborhood: "Marina",
      description: "Unverified entry: O'Bleu is located in Essaouira (O'Bleu Mogador) rather than Agadir Marina.",
      tip: "A great casual stop for grilled Mediterranean fish platters after a walk along the promenade.",
      badge: "local",
      bestDishes: [
        "Grilled Sea Bass Fillet",
        "Seafood Paella",
        "Mediterranean Calamari Platter"
      ],
      pros: [
        "Fresh coastal seafood and Mediterranean specialties",
        "Pleasant relaxed dining environment"
      ],
      cons: [
        "Pending on-site verification",
        "Peak summer season waits possible"
      ],
      googleRating: 0,
      googleReviewCount: 0,
      tripadvisorRating: 0,
      tripadvisorReviewCount: 0,
      theforkRating: 0,
      theforkReviewCount: 0,
      restaurantguruRating: 0,
      restaurantguruReviewCount: 0,
      openTime: "00:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=OBleu+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-snackfounty",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["International"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["budget"],
      vibeTags: ["fast", "casual", "local"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 0,
      isHalal: true,
      halalStatus: "unknown",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: false,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["street-food", "late-night", "budget", "dinner", "quiet"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Snack Founty (Unverified)",
      neighborhood: "Founty",
      description: "Unverified entry for Snack Founty. Operational status and location are currently unconfirmed.",
      tip: "Opt for the spiced kefta panini with homemade harissa and fresh avocado shake.",
      badge: "local",
      bestDishes: [
        "Moroccan Spiced Kefta Panini",
        "Chicken Tacos with Cheese Sauce",
        "Fresh Avocado Milkshake"
      ],
      pros: [
        "Quick and inexpensive casual fast-food bites",
        "Convenient neighborhood location in Founty"
      ],
      cons: [
        "Casual snack counter with limited indoor seating",
        "Pending on-site verification"
      ],
      googleRating: 0,
      googleReviewCount: 0,
      tripadvisorRating: 0,
      tripadvisorReviewCount: 0,
      theforkRating: 0,
      theforkReviewCount: 0,
      restaurantguruRating: 0,
      restaurantguruReviewCount: 0,
      openTime: "00:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Snack+Founty+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-mcdonalds-corniche",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["lively", "familiar", "oceanfront"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
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
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "street-food",
        "late-night",
        "breakfast",
        "budget",
        "terrace",
        "dry",
        "dinner"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "McDonald's Front de Mer",
      neighborhood: "Secteur Touristique",
      description: "Agadir's premier beachfront McDonald's featuring an outdoor terrace facing the ocean promenade, McCafé, and late-night opening hours.",
      tip: "Grab a terrace seat on the upper level for elevated views across Agadir bay.",
      badge: "local-favorite",
      bestDishes: [
        "Big Mac Meal",
        "McFlurry with Speculoos",
        "Moroccan Mint Tea & Coffee"
      ],
      pros: [
        "Prime oceanfront location on Agadir corniche",
        "Reliable air conditioning and familiar global menu"
      ],
      cons: [
        "Standard international fast food rather than local cuisine",
        "Very crowded during holiday weekends"
      ],
      googleRating: 4.1,
      googleReviewCount: 6900,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 180,
      theforkRating: 3.5,
      theforkReviewCount: 180,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 6900,
      openTime: "07:00",
      closeTime: "03:00",
      exactAddressAndCoordinates: {
        address: "Passage Tawada, Boulevard du 20 Août, Secteur Touristique, Agadir",
        lat: 30.4182,
        lng: -9.6015
      },
      googleMapsUrl: "https://maps.google.com/?q=McDonalds+Front+de+Mer+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://mcdonalds.ma",
      instagram: "https://instagram.com/mcdonalds_maroc",
      languagesSpoken: ["Arabic/Darija", "French", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "menus-best-of",
            title: "Best Of™ Meals (Burger + Fries + Drink)",
            description: "Indicative McDonald's Morocco combo pricing in MAD (counter and delivery app rates vary slightly by ~2–5 MAD).",
            items: [
              { id: "mcd-bo-bigtasty", name: "Menu Best Of™ Big Tasty", description: "Grilled 100% halal beef patty, Emmental cheese, lettuce, tomato, onions, and smoky Tasty sauce with medium fries and drink.", price: 83, isSignature: true, dietary: ["halal"] },
              { id: "mcd-bo-bigtastychicken", name: "Menu Best Of™ Big Tasty Chicken", description: "Crispy breaded halal chicken breast with Emmental cheese and smoky Tasty sauce, fries, and drink.", price: 81, dietary: ["halal"] },
              { id: "mcd-bo-mythic", name: "Menu Best Of™ Chicken Mythic®", description: "Crunchy chicken fillet with cheddar, crispy onions, and savory sauce in a toasted bun, served with fries and drink.", price: 81, dietary: ["halal"] },
              { id: "mcd-bo-mccrispy", name: "Menu Best Of™ McCrispy®", description: "Golden crispy chicken breast fillet with lettuce and creamy sauce on a brioche-style bun, plus fries and drink.", price: 73, dietary: ["halal"] },
              { id: "mcd-bo-bigmac", name: "Menu Best Of™ Big Mac®", description: "Double 100% halal beef patties, iconic Big Mac® sauce, lettuce, cheddar, pickles, and onions with fries and drink.", price: 68, isSignature: true, dietary: ["halal"] },
              { id: "mcd-bo-triplecheese", name: "Menu Best Of™ Triple Cheese", description: "Three halal beef patties layered with melted cheddar, pickles, onions, ketchup, and mustard with fries and drink.", price: 68, dietary: ["halal"] },
              { id: "mcd-bo-grandmcwrap", name: "Menu Best Of™ Grand McWrap®", description: "Grilled tortilla wrap with chicken or beef, crisp greens, tomato, and signature sauce, plus fries and drink.", price: 68, dietary: ["halal"], portionNotes: "Choice of Beef Tasty Sauce or Chicken (Honey Mustard / Algerian)" },
              { id: "mcd-bo-mcchicken", name: "Menu Best Of™ McChicken®", description: "Breaded halal chicken patty, shredded lettuce, and classic McChicken® sauce with fries and drink.", price: 66, dietary: ["halal"] },
              { id: "mcd-bo-royalcheese", name: "Menu Best Of™ Royal Cheese", description: "Quarter-pound halal beef patty with double cheddar, pickles, onions, ketchup, and mustard with fries and drink.", price: 65, dietary: ["halal"] },
              { id: "mcd-bo-doublecheese", name: "Menu Best Of™ Double Cheeseburger", description: "Two halal beef patties with double melted cheddar, pickles, and onions, served with fries and drink.", price: 63, dietary: ["halal"] },
              { id: "mcd-bo-filetofish", name: "Menu Best Of™ Filet-O-Fish®", description: "Crispy white fish fillet with cheddar and tartar sauce on a steamed bun, served with fries and drink.", price: 62, dietary: ["halal"] },
              { id: "mcd-bo-nuggets6", name: "Menu Best Of™ Chicken McNuggets® (6 pcs)", description: "Six golden halal chicken breast McNuggets with dipping sauce, medium fries, and drink.", price: 62, dietary: ["halal"] }
            ]
          },
          {
            id: "burgers-wraps",
            title: "Burgers & Wraps (À la Carte)",
            description: "Single halal-certified burgers and wraps available without the combo.",
            items: [
              { id: "mcd-alacarte-bigtasty", name: "Big Tasty", description: "Single Big Tasty beef burger with smoky sauce and Emmental cheese.", price: 71, dietary: ["halal"] },
              { id: "mcd-alacarte-grandwrap", name: "Grand McWrap®", description: "Full-size toasted tortilla wrap with beef or chicken and fresh vegetables.", price: 58, dietary: ["halal"] },
              { id: "mcd-alacarte-bigmac", name: "Big Mac®", description: "Classic double-patty halal Big Mac® burger.", price: 55, isSignature: true, dietary: ["halal"] },
              { id: "mcd-alacarte-mcchicken", name: "McChicken®", description: "Crispy breaded halal chicken burger with lettuce and mayo.", price: 54, dietary: ["halal"] },
              { id: "mcd-alacarte-royalcheese", name: "Royal Cheese", description: "Single halal beef patty with double cheddar cheese.", price: 53, dietary: ["halal"] },
              { id: "mcd-alacarte-doublecheese", name: "Double Cheeseburger", description: "Two halal beef patties and two slices of melted cheddar.", price: 50, dietary: ["halal"] },
              { id: "mcd-alacarte-ptitwrap", name: "P'tit Wrap", description: "Snack-sized chicken wrap with honey mustard sauce and lettuce.", price: 30, dietary: ["halal"] },
              { id: "mcd-alacarte-chickenburger", name: "Chickenburger", description: "Classic value crispy chicken sandwich.", price: 23, dietary: ["halal"] },
              { id: "mcd-alacarte-cheeseburger", name: "Cheeseburger", description: "Halal beef patty with cheddar, pickles, ketchup, and mustard.", price: 22, dietary: ["halal"] },
              { id: "mcd-alacarte-hamburger", name: "Hamburger", description: "Classic single halal beef patty burger.", price: 19, dietary: ["halal"] }
            ]
          },
          {
            id: "nuggets-sides-kids",
            title: "McNuggets®, Fries & Happy Meal®",
            description: "Crispy chicken bites, share boxes, fries, and kids meals.",
            items: [
              { id: "mcd-side-chickenbox21", name: "Chicken Box (21 pcs)", description: "Large sharing box of crispy halal chicken pieces and nuggets.", price: 116, dietary: ["halal"] },
              { id: "mcd-side-nuggets9", name: "Chicken McNuggets® (9 pcs)", description: "Nine halal chicken McNuggets served with two dipping sauces.", price: 57, dietary: ["halal"] },
              { id: "mcd-side-nuggets6", name: "Chicken McNuggets® (6 pcs)", description: "Six halal chicken McNuggets served with dipping sauce.", price: 49, dietary: ["halal"] },
              { id: "mcd-side-nuggets4", name: "Chicken McNuggets® (4 pcs)", description: "Four halal chicken McNuggets served with dipping sauce.", price: 35, dietary: ["halal"] },
              { id: "mcd-kids-happymeal", name: "Happy Meal®", description: "Kids meal with choice of burger or 4 McNuggets, small fries or fruit, drink, and toy.", price: 36, dietary: ["halal"] },
              { id: "mcd-side-mcflavorfries", name: "McFlavor Fries", description: "Loaded fries topped with melted cheddar and crispy onions or Algerian sauce.", price: 27, dietary: ["halal", "vegetarian"] },
              { id: "mcd-side-mediumfries", name: "Medium Fries / Crinkle Fries", description: "Medium portion of golden salted fries or crinkle-cut potatoes.", price: 20, dietary: ["halal", "vegan", "vegetarian"] },
              { id: "mcd-side-smallfries", name: "Small Fries", description: "Classic small golden French fries.", price: 16, dietary: ["halal", "vegan", "vegetarian"] }
            ]
          },
          {
            id: "desserts-drinks",
            title: "McFlurry®, Drinks & Cold Treats",
            description: "Soft-serve ice cream cups and chilled soft drinks.",
            items: [
              { id: "mcd-dessert-mcflurry-special", name: "Golden / Special Edition McFlurry®", description: "Creamy vanilla soft serve swirled with seasonal toppings.", price: 32, dietary: ["halal", "vegetarian"] },
              { id: "mcd-dessert-mcflurry", name: "McFlurry® (Oreo, KitKat, or M&M's)", description: "Vanilla soft-serve ice cream blended with classic chocolate or cookie mix-ins.", price: 30, isSignature: true, dietary: ["halal", "vegetarian"] },
              { id: "mcd-drink-mcfizz", name: "McFizz®", description: "Sparkling fruit refresher available in Passion Fruit or Mojito flavor.", price: 22, dietary: ["halal", "vegan", "vegetarian"] },
              { id: "mcd-drink-hawaii", name: "Small Hawaii™", description: "Iconic Moroccan tropical soda served ice-cold.", price: 18, dietary: ["halal", "vegan", "vegetarian"] },
              { id: "mcd-drink-soda", name: "Small Coca-Cola® / Zero / Fanta / Sprite", description: "Chilled 25cl fountain soft drink.", price: 16, dietary: ["halal", "vegan", "vegetarian"] }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "Fixed Digital Kiosk Pricing", tagColor: "money", tone: "good", description: "Transparent menu-board and digital kiosk pricing in MAD (Best Of combos ~62–83 MAD); pricier than local Moroccan street snacks, card and contactless accepted.", state: "verified" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "Standardized, Busy Rush Cleanups", tagColor: "water", tone: "caution", description: "Global chain food-safety standards, though high beachfront foot traffic during peak evenings and weekends can temporarily strain table and restroom upkeep.", state: "verified" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "100% Halal Certified Chain", tagColor: "food", tone: "good", description: "All beef and chicken served at McDonald's Morocco is 100% halal-certified; international fast-food menu rather than Moroccan dishes, completely dry.", state: "verified" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "Bustling Oceanfront Terrace", tagColor: "alert", tone: "caution", description: "Air-conditioned dining room and upper-level ocean-view terrace on Agadir corniche; expect busy holiday weekend crowds.", state: "verified" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "Kiosks Speed Up Ordering", tagColor: "safety", tone: "good", description: "Self-order touchscreen kiosks streamline queues; peak-hour waits and occasional takeaway bag mix-ups can occur during rush periods.", state: "verified" }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-kfc-corniche",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["quick", "bustling", "casual"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
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
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["street-food", "late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "KFC Boulevard du 20 Aout",
      neighborhood: "Secteur Balnéaire",
      description: "Beachside KFC restaurant near the Agadir seaside promenade offering spicy chicken buckets, crispy strips, and fries.",
      tip: "Convenient central location on Boulevard du 20 Août for a fast meal on the go.",
      badge: "local-favorite",
      bestDishes: [
        "Original Recipe Fried Chicken Bucket",
        "Zinger Burger",
        "Crispy Tenders with Dip"
      ],
      pros: [
        "Quick hot meals located right on Boulevard du 20 Août",
        "Familiar international chicken fast-food standards"
      ],
      cons: [
        "Not a local culinary experience",
        "Can get noisy with peak tourist foot traffic"
      ],
      googleRating: 3.9,
      googleReviewCount: 2200,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 80,
      theforkRating: 3.5,
      theforkReviewCount: 80,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 2200,
      openTime: "11:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Boulevard du 20 Août, Secteur Balnéaire, Agadir",
        lat: 30.4175,
        lng: -9.6022
      },
      googleMapsUrl: "https://maps.google.com/?q=KFC+Boulevard+du+20+Aout+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://kfc.ma",
      instagram: "https://instagram.com/kfc_maroc",
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-burger-king-corniche",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["casual", "fast", "late-night"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 0,
      isHalal: true,
      halalStatus: "unknown",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: false,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["street-food", "late-night", "budget", "dinner", "quiet"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Burger King (Unverified)",
      neighborhood: "Secteur Touristique",
      description: "Unverified / Non-operational entry: Burger King does not currently operate a branch on the Agadir beachfront.",
      tip: "Standard flame-grilled options with convenient proximity to the beach hotels.",
      badge: "local",
      bestDishes: [
        "Whopper Burger Meal",
        "Crispy Chicken Sandwich",
        "Onion Rings with BBQ Sauce"
      ],
      pros: [
        "Flame-grilled burgers close to the corniche promenade",
        "Fast service for late-night quick bites"
      ],
      cons: [
        "International fast-food chain",
        "Pending on-site verification"
      ],
      googleRating: 0,
      googleReviewCount: 0,
      tripadvisorRating: 0,
      tripadvisorReviewCount: 0,
      theforkRating: 0,
      theforkReviewCount: 0,
      restaurantguruRating: 0,
      restaurantguruReviewCount: 0,
      openTime: "00:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Burger+King+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://burgerkingmaroc.ma",
      instagram: "https://instagram.com/burgerkingmaroc"
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-pizza-hut-ait-souss",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["family-friendly", "casual"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
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
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pizza Hut Complexe Aït Souss",
      neighborhood: "Centre Ville",
      description: "Centrally situated at Complexe Aït Souss by Place Al Amal in Agadir, offering classic Pan pizzas, stuffed crusts, and takeaway combos.",
      tip: "Family meal deals and takeout combos available in central Complexe Aït Souss.",
      badge: "local-favorite",
      bestDishes: [
        "Pan Pizza Supreme",
        "Pepperoni Pan Pizza",
        "Garlic Bread with Cheese"
      ],
      pros: [
        "Consistent pan pizzas and family-sized combo deals",
        "Convenient central location in Complexe Aït Souss"
      ],
      cons: [
        "Commercial pizza chain with little local identity",
        "Pending on-site verification"
      ],
      googleRating: 3.8,
      googleReviewCount: 1500,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 110,
      theforkRating: 3.5,
      theforkReviewCount: 110,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 1500,
      openTime: "11:30",
      closeTime: "00:30",
      exactAddressAndCoordinates: {
        address: "Place Al Amal, Complexe Aït Souss, Avenue Hassan II, Agadir",
        lat: 30.4215,
        lng: -9.5988
      },
      googleMapsUrl: "https://maps.google.com/?q=Pizza+Hut+Complexe+Ait+Souss+Agadir",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://pizzahut.ma",
      instagram: "https://instagram.com/pizzahut_maroc",
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-dominos-talborjt",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["quick", "takeaway", "neighborhood"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6,
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
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Domino's Pizza Talborjt",
      neighborhood: "Talborjt",
      description: "Takeaway, delivery, and casual dining counter in Les Galeries de Talborjt, serving freshly baked pizzas and chocolate lava cakes.",
      tip: "Fast takeaway and local delivery across the Talborjt neighborhood.",
      badge: "local-favorite",
      bestDishes: [
        "Classic Hand-Tossed Margherita",
        "Barbecue Chicken Pizza",
        "Cheesy Stuffed Cheesy Bread"
      ],
      pros: [
        "Speedy pizza takeaway and delivery in Talborjt",
        "Affordable value specials and combo deals"
      ],
      cons: [
        "Standard takeout pizza shop with limited dine-in charm",
        "Pending on-site verification"
      ],
      googleRating: 3.4,
      googleReviewCount: 200,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 20,
      theforkRating: 3.5,
      theforkReviewCount: 20,
      restaurantguruRating: 3.4,
      restaurantguruReviewCount: 200,
      openTime: "11:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Les Galeries de Talborjt, Agadir 80000, Morocco",
        lat: 30.4225,
        lng: -9.5962
      },
      googleMapsUrl: "https://maps.google.com/?q=Dominos+Pizza+Talborjt+Agadir",
      reservationMethod: ["walk-in", "phone", "website"],
      reservationContact: "+212528842606",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://dominos.ma",
      instagram: "https://instagram.com/dominos_maroc",
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-oplaya",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "fine-dining"],
      foodStyles: ["Seafood", "Moroccan", "Mediterranean", "International"],
      cuisineTags: ["seafood", "international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["coastal", "breezy", "scenic", "romantic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 22,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["sunset", "terrace", "alcohol", "dinner", "seafood"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Ô Playa",
      neighborhood: "Secteur Balnéaire",
      description: "A vibrant seafront institution situated directly on the Agadir beach promenade. Known for panoramic bay views, fresh grilled fish, seafood pastas, and a relaxed, breezy terrace that transitions from sunny lunches to romantic candlelit dinners.",
      tip: "Book ahead for a frontline terrace table between 18:30 and 19:30 to catch the sunset directly across the bay.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Royal Sea Bass",
        "Seafood Paella",
        "Lamb Tagine with Prunes",
        "Grilled Calamari Platter"
      ],
      pros: [
        "Prime location directly facing the beach promenade.",
        "Extensive menu catering to both seafood lovers and traditional Moroccan cravings.",
        "Full wine and cocktail selection."
      ],
      cons: [
        "Can get very crowded during peak holiday sunsets, leading to slower service.",
        "Wind can be brisk on the outdoor terrace during early spring and late autumn."
      ],
      googleRating: 4.2,
      googleReviewCount: 2750,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 1430,
      theforkRating: 4.3,
      theforkReviewCount: 380,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1430,
      openTime: "09:00",
      closeTime: "00:00",
      weeklySchedule: [
        { day: "Monday", openTime: "09:00", closeTime: "00:00", isClosed: false },
        { day: "Tuesday", openTime: "09:00", closeTime: "00:00", isClosed: false },
        { day: "Wednesday", openTime: "09:00", closeTime: "00:00", isClosed: false },
        { day: "Thursday", openTime: "09:00", closeTime: "00:00", isClosed: false },
        { day: "Friday", openTime: "09:00", closeTime: "00:00", isClosed: false },
        { day: "Saturday", openTime: "09:00", closeTime: "00:00", isClosed: false },
        { day: "Sunday", openTime: "09:00", closeTime: "00:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Front de Mer, Lot N°5 Plage d'Agadir, Agadir 80000, Morocco",
        lat: 30.4189,
        lng: -9.6026
      },
      address: "Front de Mer, Lot N°5 Plage d'Agadir, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.4189,
        lng: -9.6026
      },
      googleMapsUrl: "https://maps.google.com/?q=O+Playa+Agadir",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212528845867",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://oplayamenu.com",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "starters-pizzas",
            title: "Beachfront Starters & Wood-Fired Pizzas",
            description: "Light seafront salads, crispy calamari, and stone-baked pizzas",
            items: [
              {
                id: "oplaya-salade-marocaine",
                name: "Salade Marocaine Fraîche",
                localName: "سلطة مغربية طازجة بالطماطم والخيار",
                translations: {
                  ar: "سلطة مغربية طازجة بالطماطم والخيار",
                  en: "Finely diced ripe tomatoes, cucumber, red onion, and olive-lemon dressing",
                  es: "Ensalada marroquí tradicional picada con tomate y pepino",
                  de: "Frischer marokkanischer Salat mit Tomaten, Gurke und Zwiebeln"
                },
                price: 55,
                dietary: ["vegetarian", "vegan", "gluten-free", "halal"]
              },
              {
                id: "oplaya-calamars-frits",
                name: "Friture de Calamars à la Andalouse",
                localName: "كالامار مقلي مقرمش مع الليمون",
                translations: {
                  ar: "كالامار مقلي مقرمش مع الليمون",
                  en: "Golden crispy fried Atlantic squid rings served with tartar sauce and lemon",
                  es: "Calamares fritos crujientes a la andaluza con salsa tártara",
                  de: "Knusprig frittierte Tintenfischringe mit Tartarsauce"
                },
                price: 85,
                dietary: ["halal"]
              },
              {
                id: "oplaya-pizza-fruits-mer",
                name: "Pizza Fruits de Mer",
                localName: "بيتزا فواكه البحر الطازجة",
                translations: {
                  ar: "بيتزا فواكه البحر الطازجة",
                  en: "Thin-crust stone-baked pizza topped with prawns, calamari, tomato sauce, and mozzarella",
                  es: "Pizza fina horneada con mariscos frescos, tomate y mozzarella",
                  de: "Knusprige Steinofenpizza mit Meeresfrüchten und Mozzarella"
                },
                price: 90,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "mains-grill-paella",
            title: "Grilled Atlantic Fish, Paella & Tagines",
            description: "Bayfront catches, saffron seafood paella, and slow-cooked Moroccan favorites",
            items: [
              {
                id: "oplaya-seabass-grill",
                name: "Loup de Mer Grillé (Royal Sea Bass)",
                localName: "سمك الدرعي الملكي مشوي",
                translations: {
                  ar: "سمك الدرعي الملكي مشوي",
                  en: "Whole grilled Atlantic sea bass served with sautéed vegetables and herb potatoes",
                  es: "Lubina salvaje a la parrilla con verduras salteadas",
                  de: "Gegrillter Atlantik-Wolfsbarsch mit Saisongemüse"
                },
                price: 185,
                isSignature: true,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "oplaya-paella",
                name: "Paella aux Fruits de Mer Ô Playa",
                localName: "بايلا فواكه البحر أوبلايا",
                translations: {
                  ar: "بايلا فواكه البحر أوبلايا",
                  en: "Traditional saffron rice paella loaded with prawns, mussels, calamari, and fresh fish",
                  es: "Paella tradicional de mariscos con arroz al azafrán",
                  de: "Traditionelle Meeresfrüchte-Paella mit Safranreis"
                },
                price: 160,
                isSignature: true,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "oplaya-lamb-tagine",
                name: "Tajine d'Agneau aux Pruneaux",
                localName: "طاجين لحم الغنم بالبرقوق المعسل",
                translations: {
                  ar: "طاجين لحم الغنم بالبرقوق المعسل",
                  en: "Tender lamb tagine simmered with caramelized prunes, roasted almonds, and sesame",
                  es: "Tajine de cordero con ciruelas pasas y almendras tostadas",
                  de: "Zarter Lammtagine mit karamellisierten Pflaumen und Mandeln"
                },
                price: 135,
                dietary: ["halal"]
              },
              {
                id: "oplaya-spaghetti-frutti",
                name: "Spaghetti aux Fruits de Mer",
                localName: "سباغيتي بفواكه البحر الطازجة",
                translations: {
                  ar: "سباغيتي بفواكه البحر الطازجة",
                  en: "Al dente spaghetti tossed in garlic tomato bisque with prawns and clams",
                  es: "Espaguetis con mariscos en salsa suave de tomate y ajo",
                  de: "Spaghetti mit Meeresfrüchten in leichter Knoblauch-Tomatensauce"
                },
                price: 110,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "desserts-drinks",
            title: "Desserts & Promenade Refreshers",
            description: "Beachfront ice creams, warm chocolate cake, and cold drinks",
            items: [
              {
                id: "oplaya-fondant",
                name: "Fondant au Chocolat Noir",
                localName: "فوندان الشوكولاتة الساخن",
                translations: {
                  ar: "فوندان الشوكولاتة الساخن",
                  en: "Warm chocolate lava cake served with vanilla ice cream scoop",
                  es: "Volcán tibio de chocolate negro con helado de vainilla",
                  de: "Warmer Schokoladen-Fondant mit Vanilleeis"
                },
                price: 65,
                dietary: ["vegetarian"]
              },
              {
                id: "oplaya-mint-tea",
                name: "Thé à la Menthe ou Citronnade Fraîche",
                localName: "شاي بالنعناع أو عصير ليمون طازج",
                translations: {
                  ar: "شاي بالنعناع أو عصير ليمون طازج",
                  en: "Freshly brewed Moroccan mint tea or chilled fresh-squeezed house lemonade",
                  es: "Té verde marroquí a la menta o limonada fresca casera",
                  de: "Marokkanischer Minztee oder hausgemachte Zitronenlimonade"
                },
                price: 30,
                dietary: ["vegan", "halal"]
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Fair Seafront Prices",
        description: "Printed menu prices right on the beach promenade (65–185 MAD mains) with clear bills and card acceptance—rare value for oceanfront seating.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Clean Tourist-Strip Kitchen",
        description: "High beachfront turnover keeps seafood and salad ingredients fresh; grilled whole sea bass and bottled water are dependable choices.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Crowd-Pleasing Mix",
        description: "Broad international-seafood menu (paella, grilled sea bass, pastas, pizza, and tagines) geared toward holiday groups rather than purist dining.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Windy & Busy Walk",
        description: "Unbeatable sunset bay views directly on the promenade; exposed seafront tables get brisk coastal winds and lively pedestrian foot traffic.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Sunset Rush Wait",
        description: "Friendly multilingual staff, though peak sunset dinner hours (18:30–20:30) can cause slow kitchen pacing without an advance table request.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-le-sensya",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Italian", "International", "Mediterranean"],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury"],
      vibeTags: ["elegant", "refined", "chic", "romantic"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 42,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["fine", "alcohol", "dinner", "quiet"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Sensya",
      neighborhood: "Secteur Balnéaire",
      description: "An elite modern Italian fine-dining jewel inside the 5-star The View Hotel on Avenue du 20 Août. Signed by Michelin-starred chef Francesco Franzese, it showcases reinvented haute-cuisine pasta, seafood risottos, and world-class desserts.",
      tip: "Stick to the artisanal handmade pastas and signature truffle dishes, followed by their standout authentic Italian tiramisu.",
      badge: "splurge",
      bestDishes: [
        "Handmade Truffle Ravioli",
        "Acquerello Seafood Risotto",
        "Eggplant Parmigiana",
        "Deconstructed Tiramisu"
      ],
      pros: [
        "Highest standard of Italian gastronomy in Agadir.",
        "Impeccable hotel service and sophisticated coastal interior design.",
        "Sublime wine list with top Italian and international vintages."
      ],
      cons: [
        "High-end pricing reflecting luxury resort standards.",
        "Closed on Sundays; split hours (12:30–15:00, 19:30–23:00)."
      ],
      googleRating: 4.7,
      googleReviewCount: 200,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 45,
      theforkRating: 4.6,
      theforkReviewCount: 45,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 200,
      openTime: "12:30",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "The View Hotel, Avenue du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4158,
        lng: -9.6022
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Sensya+The+View+Agadir",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212528294040",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://theviewhotels.com",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Italian", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-la-pastilla",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "friends", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner", "afternoon-tea", "snack", "drinks"],
      experienceTypes: ["traditional"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["traditional", "cozy", "homestyle", "authentic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["pastilla", "couscous", "tagine", "breakfast", "budget", "halal", "no-alcohol", "dinner", "lunch", "mint-tea"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant La Pastilla",
      neighborhood: "Secteur Balnéaire",
      description: "Tucked inside Complexe Tagadirt on Boulevard du 20 Août, this dedicated Moroccan dining room is renowned for mastering Morocco's most intricate culinary specialty: sweet and savory pastillas with delicate flaky pastry, roasted almonds, and spiced fillings.",
      tip: "Arrive before 21:30 for dinner; the house-made pastillas sell out quickly on high-traffic evenings. Bring MAD cash as backup in case the card terminal is offline.",
      badge: "local-favorite",
      bestDishes: [
        "Pastilla au poulet",
        "Pastilla au fruit de mer",
        "Seffa Medfouna",
        "Couscous Royale"
      ],
      pros: [
        "Outstanding execution of sweet and savory pastillas rarely perfected in tourist zones.",
        "Warm traditional decor with complimentary Moroccan mint tea and pastries.",
        "Transparent mid-range MAD pricing across full breakfast (08:00–13:00), tagines, and couscous."
      ],
      cons: [
        "Popular items like house-made pastillas can run out late in the evening.",
        "Compact dining room fills quickly during peak dinner hours; bring cash as backup for card issues."
      ],
      googleRating: 4.7,
      googleReviewCount: 1430,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 280,
      theforkRating: 4.5,
      theforkReviewCount: 120,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1430,
      openTime: "08:00",
      closeTime: "00:00",
      seasonalHoursNote: "Breakfast served daily 08:00–13:00; full traditional Moroccan lunch & dinner service until 00:00.",
      exactAddressAndCoordinates: {
        address: "Complexe Tagadirt, Boulevard du 20 Août, Agadir 80000, Morocco",
        lat: 30.4144,
        lng: -9.6008
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+la+Pastilla+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528820544",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "Arabic/Darija", "English"],
      knowBeforeYouGo: [
        "Breakfast formulas (45–95 MAD) are served daily from 08:00 to 13:00.",
        "Specialties on order (Seffa Medfouna, Tanjia Marrakchia, Rfissa) and house pastillas are prepared fresh—arrive before 21:30.",
        "Strictly alcohol-free venue offering fresh juices, Moroccan mint tea, and virgin cocktails (Virgin mojito, N/A mangue, Cojak).",
        "Keep Moroccan Dirham cash on hand as backup, as card terminal connectivity can occasionally vary."
      ],
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        menuPhotos: [
          {
            url: "/images/menus/restaurant-la-pastilla/page-1.jpg",
            pageNumber: 1,
            width: 1792,
            height: 2400,
            title: "Restaurant La Pastilla Agadir Menu Page 1 — Breakfast & Starters",
            alt: "Restaurant La Pastilla Agadir menu photo page 1: Breakfast served 08:00 to 13:00 (Quick 55 Dh, Fassi 85 Dh, Berber 85 Dh, Jebli 85 Dh, Wellness 95 Dh, Kids 45 Dh) and Starters & Soups (Fresh Mixed Salad 60 Dh, Moroccan Salad Assortment 80 Dh, Harira 60 Dh, Vegetable Soup 60 Dh)",
            caption: "Page 1: Breakfast sets (08:00–13:00) and Moroccan Starters & Soups with MAD prices."
          },
          {
            url: "/images/menus/restaurant-la-pastilla/page-2.jpg",
            pageNumber: 2,
            width: 1792,
            height: 2400,
            title: "Restaurant La Pastilla Agadir Menu Page 2 — Briouats, Pastilla, Couscous & Tagines",
            alt: "Restaurant La Pastilla Agadir menu photo page 2: Briouats (Cheese 45 Dh, Chicken 60 Dh, Seafood 70 Dh, Kefta 60 Dh, Vegetarian 45 Dh, Assorted Platter 230 Dh), Chicken Pastilla (150 Dh), Seafood Pastilla (150 Dh), Couscous (90–150 Dh), and Traditional Tagines (90–120 Dh)",
            caption: "Page 2: Crispy Briouates, signature Chicken & Seafood Pastillas, Couscous, and Moroccan Tagines."
          },
          {
            url: "/images/menus/restaurant-la-pastilla/page-3.jpg",
            pageNumber: 3,
            width: 1792,
            height: 2400,
            title: "Restaurant La Pastilla Agadir Menu Page 3 — Made to Order, Sandwiches & Kids Menu",
            alt: "Restaurant La Pastilla Agadir menu photo page 3: Dishes Made to Order (Seffa Medfouna 90 Dh, Marrakchi Tanjia 150 Dh, Rfissa Beldi Chicken 120 Dh), Homemade Batbout Sandwiches with fries (65–80 Dh), and Kids Menu (50–65 Dh)",
            caption: "Page 3: Specialties made to order (Seffa Medfouna, Tanjia, Rfissa), Batbout sandwiches, and Kids Menu."
          },
          {
            url: "/images/menus/restaurant-la-pastilla/page-4.jpg",
            pageNumber: 4,
            width: 1792,
            height: 2400,
            title: "Restaurant La Pastilla Agadir Menu Page 4 — Desserts, Hot Drinks, Juices & Mocktails",
            alt: "Restaurant La Pastilla Agadir menu photo page 4: Desserts & Crêpes (Moroccan Pastries 35 Dh, Amlou Twist 40 Dh, Orange Cinnamon 30 Dh, Hliwa wa Atay 60 Dh, Crêpes 25–40 Dh), Hot Drinks & Moroccan Mint Tea (15–20 Dh), Fresh Juices & Non-Alcoholic Mocktails (25–35 Dh)",
            caption: "Page 4: Moroccan pastries, crêpes, mint tea & coffee, fresh juices, and zero-proof mocktails."
          },
          {
            url: "/images/menus/restaurant-la-pastilla/page-5.jpg",
            pageNumber: 5,
            width: 1792,
            height: 2400,
            title: "Restaurant La Pastilla Agadir Menu Page 5 — Water & Soda",
            alt: "Restaurant La Pastilla Agadir menu photo page 5: Water & Soda prices in MAD (Soda 20 Dh, Still Water 33cl 10 Dh, Still Water 1L 25 Dh, Oulmes Sparkling Water 50cl 15 Dh, Oulmes Sparkling Water 1L 25 Dh)",
            caption: "Page 5: Mineral water, Oulmès sparkling water, and soft drinks menu."
          }
        ],
        sections: [
          {
            id: "petit-dejeuner",
            title: "Petit Déjeuner (08h00 – 13h00)",
            titleEn: "Breakfast (08:00 – 13:00)",
            description: "Formules petit-déjeuner marocaines et classiques servies de 08h00 à 13h00",
            descriptionEn: "Moroccan and classic breakfast sets served from 08:00 to 13:00",
            items: [
              {
                id: "lp-pdj-rapide",
                name: "Rapide",
                nameEn: "Quick Breakfast",
                localName: "فطور سريع (مشروب ساخن، حرشة، عصير برتقال، زبدة، مربى، مسمن، ماء 33 سل)",
                translations: {
                  ar: "فطور سريع (مشروب ساخن، حرشة، عصير برتقال، زبدة، مربى، مسمن، ماء 33 سل)",
                  en: "Quick Breakfast (Hot drink, Harcha, Orange juice, Butter, Jam, Msemen, 33cl Water)",
                  es: "Desayuno Rápido (Bebida caliente, Harcha, Zumo de naranja, Mantequilla, Mermelada, Msemen, Agua 33cl)",
                  de: "Schnelles Frühstück (Heißgetränk, Harcha, Orangensaft, Butter, Marmelade, Msemen, Wasser 33cl)"
                },
                description: "Boisson chaude au choix, Harcha, Jus d'Orange, Beurre, Confiture, Msmen, Eau 33cl",
                price: 55,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "lp-pdj-fassi",
                name: "Fassi",
                nameEn: "Fassi Breakfast",
                localName: "فطور فاسي (مشروب ساخن، عصير برتقال، بيض بالخليع الفاسي، زيت زيتون، جبن، زيتون أسود، مسمن، ماء 33 سل)",
                translations: {
                  ar: "فطور فاسي (مشروب ساخن، عصير برتقال، بيض بالخليع الفاسي، زيت زيتون، جبن، زيتون أسود، مسمن، ماء 33 سل)",
                  en: "Fassi Breakfast (Hot drink, Orange juice, Eggs with Fassi Khlii cured meat, Olive oil, Jben cheese, Black olives, Msemen, 33cl Water)",
                  es: "Desayuno Fassi (Bebida caliente, Zumo de naranja, Huevos con Khlii fassi, Aceite de oliva, Queso Jben, Aceitunas negras, Msemen, Agua 33cl)",
                  de: "Fassi-Frühstück (Heißgetränk, Orangensaft, Eier mit Fassi-Khlii, Olivenöl, Jben-Käse, schwarze Oliven, Msemen, Wasser 33cl)"
                },
                description: "Boisson chaude, Jus d'Orange, Œuf khlii fassi, Huile d'olive, Jben, Olive noire, Msemen, Eau 33cl",
                price: 85,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "lp-pdj-berbere",
                name: "Berbère",
                nameEn: "Berber Breakfast",
                localName: "فطور أمازيغي (مشروب ساخن، عصير برتقال، زيت زيتون، أملو، عسل، زيتون أسود، أومليت سادة/بالطماطم، مسمن، ماء 33 سل)",
                translations: {
                  ar: "فطور أمازيغي (مشروب ساخن، عصير برتقال، زيت زيتون، أملو، عسل، زيتون أسود، أومليت سادة/بالطماطم، مسمن، ماء 33 سل)",
                  en: "Berber Breakfast (Hot drink, Orange juice, Olive oil, Amlou, Honey, Black olives, Plain/tomato omelette, Msemen, 33cl Water)",
                  es: "Desayuno Bereber (Bebida caliente, Zumo de naranja, Aceite de oliva, Amlou, Miel, Aceitunas negras, Tortilla natural/tomate, Msemen, Agua 33cl)",
                  de: "Berber-Frühstück (Heißgetränk, Orangensaft, Olivenöl, Amlou, Honig, schwarze Oliven, Omelett natur/Tomate, Msemen, Wasser 33cl)"
                },
                description: "Boisson chaude, Jus d'Orange, Huile d'olive, Amlou, Miel, Olive noire, Omelette nature/tomate, Msemen, Eau 33cl",
                price: 85,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "lp-pdj-jebli",
                name: "Jebli",
                nameEn: "Jebli Breakfast",
                localName: "فطور جبلي (مشروب ساخن، عصير برتقال، أومليت سادة/بالطماطم، عسل، جبن، زيتون أسود، مسمن، بطبوط، ماء 33 سل)",
                translations: {
                  ar: "فطور جبلي (مشروب ساخن، عصير برتقال، أومليت سادة/بالطماطم، عسل، جبن، زيتون أسود، مسمن، بطبوط، ماء 33 سل)",
                  en: "Jebli Breakfast (Hot drink, Orange juice, Plain/tomato omelette, Honey, Jben cheese, Black olives, Msemen, Batbout, 33cl Water)",
                  es: "Desayuno Jebli (Bebida caliente, Zumo de naranja, Tortilla natural/tomate, Miel, Queso Jben, Aceitunas negras, Msemen, Batbout, Agua 33cl)",
                  de: "Jebli-Frühstück (Heißgetränk, Orangensaft, Omelett natur/Tomate, Honig, Jben-Käse, schwarze Oliven, Msemen, Batbout, Wasser 33cl)"
                },
                description: "Boisson chaude, Jus d'Orange, Omelette nature/tomate, Miel, Jben, Olive noire, Msemen, Batboute, Eau 33cl",
                price: 85,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "lp-pdj-bien-etre",
                name: "Bien-être",
                nameEn: "Wellness Breakfast",
                localName: "فطور العافية (مشروب ساخن، عصير برتقال، حرشة، أومليت بياض البيض بالسبانخ واللحوم الباردة، زبدة، عسل، أملو، مسمن، ماء 33 سل)",
                translations: {
                  ar: "فطور العافية (مشروب ساخن، عصير برتقال، حرشة، أومليت بياض البيض بالسبانخ واللحوم الباردة، زبدة، عسل، أملو، مسمن، ماء 33 سل)",
                  en: "Wellness Breakfast (Hot drink, Orange juice, Harcha, Egg-white omelette with spinach & cold cuts, Butter, Honey, Amlou, Msemen, 33cl Water)",
                  es: "Desayuno Bienestar (Bebida caliente, Zumo de naranja, Harcha, Tortilla de claras con espinacas y embutido, Mantequilla, Miel, Amlou, Msemen, Agua 33cl)",
                  de: "Wellness-Frühstück (Heißgetränk, Orangensaft, Harcha, Eiweiß-Omelett mit Spinat & Aufschnitt, Butter, Honig, Amlou, Msemen, Wasser 33cl)"
                },
                description: "Boisson chaude, Jus d'Orange, Harcha, Omelette au blanc d'œuf aux épinards et charcuterie, Beurre, Miel, Amlou, Msemen, Eau 33cl",
                price: 95,
                dietary: ["halal"]
              },
              {
                id: "lp-pdj-kids",
                name: "Kids",
                nameEn: "Kids Breakfast",
                localName: "فطور الأطفال (شوكولاتة ساخنة، كريب نوتيلا، عصير برتقال، ماء 33 سل)",
                translations: {
                  ar: "فطور الأطفال (شوكولاتة ساخنة، كريب نوتيلا، عصير برتقال، ماء 33 سل)",
                  en: "Kids Breakfast (Hot chocolate, Nutella crêpe, Orange juice, 33cl Water)",
                  es: "Desayuno Infantil (Chocolate caliente, Crepe de Nutella, Zumo de naranja, Agua 33cl)",
                  de: "Kinderfrühstück (Heiße Schokolade, Nutella-Crêpe, Orangensaft, Wasser 33cl)"
                },
                description: "Chocolat chaud, Crêpe Nutella, Jus d'Orange, Eau 33cl",
                price: 45,
                dietary: ["vegetarian", "halal"]
              }
            ]
          },
          {
            id: "entrees-soupes",
            title: "Les Entrées & Soupes",
            titleEn: "Starters & Soups",
            description: "Salades fraîches, assortiment marocain et soupes traditionnelles",
            descriptionEn: "Fresh salads, Moroccan salad platter, and traditional soups",
            items: [
              {
                id: "lp-salade-crudite",
                name: "Salade crudité",
                nameEn: "Fresh Mixed Salad",
                localName: "سلطة الخضار الطازجة (خس، طماطم كرزية، فاصوليا خضراء، بطاطس، أرز، شمندر، خيار، تونة، ذرة)",
                translations: {
                  ar: "سلطة الخضار الطازجة (خس، طماطم كرزية، فاصوليا خضراء، بطاطس، أرز، شمندر، خيار، تونة، ذرة)",
                  en: "Fresh Mixed Salad (green salad, cherry tomato, green beans, potato, rice, beetroot, cucumber, tuna, corn)",
                  es: "Ensalada de crudités (lechuga, tomate cherry, judías verdes, patata, arroz, remolacha, pepino, atún, maíz)",
                  de: "Rohkostsalat (grüner Salat, Kirschtomaten, grüne Bohnen, Kartoffeln, Reis, Rote Bete, Gurke, Thunfisch, Mais)"
                },
                description: "Salade verte, tomate cerise, haricot vert, pomme de terre, riz, betterave, concombre, thon, maïs",
                price: 60,
                dietary: ["halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-assortiment-salade-marocaine",
                name: "Assortiment Salade Marocaine",
                nameEn: "Moroccan Salad Assortment",
                localName: "تشكيلة سلطات مغربية (باذنجان، بطاطس، جزر، قرع، فلفل على الطريقة المغربية، شكشوكة)",
                translations: {
                  ar: "تشكيلة سلطات مغربية (باذنجان، بطاطس، جزر، قرع، فلفل على الطريقة المغربية، شكشوكة)",
                  en: "Moroccan Salad Assortment (eggplant, potato, carrot, pumpkin, Moroccan-style pepper, chackchouka)",
                  es: "Surtido de ensaladas marroquíes (berenjena, patata, zanahoria, calabaza, pimiento al estilo marroquí, chackchouka)",
                  de: "Marokkanische Salatauswahl (Aubergine, Kartoffel, Karotte, Kürbis, Paprika nach marokkanischer Art, Chakchouka)"
                },
                description: "Aubergine, pomme de terre, carotte, potiron, poivron façon marocaine, chekchouka",
                price: 80,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-harira-marocain",
                name: "Harira marocain",
                nameEn: "Moroccan Harira",
                localName: "حريرة مغربية (حساء مغربي، عدس، حمص، بصل، بقدونس، تمر، شباكية، بيض مسلوق، بطبوط)",
                translations: {
                  ar: "حريرة مغربية (حساء مغربي، عدس، حمص، بصل، بقدونس، تمر، شباكية، بيض مسلوق، بطبوط)",
                  en: "Moroccan Harira (Moroccan soup, lentils, chickpeas, onion, parsley, dates, chebakia, boiled egg, batbout)",
                  es: "Harira marroquí (sopa marroquí, lentejas, garbanzos, cebolla, perejil, dátiles, chebakia, huevo duro, batbout)",
                  de: "Marokkanische Harira (Suppe, Linsen, Kichererbsen, Zwiebel, Petersilie, Datteln, Chebakia, gekochtes Ei, Batbout)"
                },
                description: "Soupe marocaine, lentilles, pois chiche, oignon, persil, dattes, chabakia, œuf dur, batboute",
                price: 60,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "lp-soupe-legumes",
                name: "Soupe de légumes",
                nameEn: "Vegetable Soup",
                localName: "حساء الخضر (قرع أخضر، كراث، بطاطس، جزر، لفت، تمر، بطبوط)",
                translations: {
                  ar: "حساء الخضر (قرع أخضر، كراث، بطاطس، جزر، لفت، تمر، بطبوط)",
                  en: "Vegetable Soup (zucchini, leeks, potato, carrots, turnip, dates, batbout)",
                  es: "Sopa de verduras (calabacín, puerros, patata, zanahorias, nabo, dátiles, batbout)",
                  de: "Gemüsesuppe (Zucchini, Lauch, Kartoffeln, Karotten, Rüben, Datteln, Batbout)"
                },
                description: "Courgette, poireaux, pomme de terre, carottes, navet, dattes, batboute",
                price: 60,
                dietary: ["vegetarian", "vegan", "halal", "dairy-free"]
              }
            ]
          },
          {
            id: "briouates-pastilla",
            title: "Sélection Briouates & Pastilla",
            titleEn: "Briouats & Pastilla Selection",
            description: "Spécialités feuilletées maison préparées avec soin",
            descriptionEn: "House-made crispy pastries and signature traditional pastillas",
            items: [
              {
                id: "lp-briouate-fromage",
                name: "Briouate Fromage",
                nameEn: "Cheese Briouats",
                localName: "بريوات بالجبن (جبن أبيض على الطريقة المغربية)",
                translations: {
                  ar: "بريوات بالجبن (جبن أبيض على الطريقة المغربية)",
                  en: "Cheese Briouats (Moroccan-style white cheese)",
                  es: "Briouats de queso (queso fresco al estilo marroquí)",
                  de: "Käse-Briouates (Frischkäse nach marokkanischer Art)"
                },
                description: "Fromage blanc à la marocaine",
                price: 45,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "lp-briouate-poulet",
                name: "Briouate poulet",
                nameEn: "Chicken Briouats",
                localName: "بريوات بالدجاج (دجاج متبل على الطريقة المغربية)",
                translations: {
                  ar: "بريوات بالدجاج (دجاج متبل على الطريقة المغربية)",
                  en: "Chicken Briouats (Moroccan marinated chicken)",
                  es: "Briouats de pollo (pollo marinado al estilo marroquí)",
                  de: "Hähnchen-Briouates (mariniertes Hähnchen nach marokkanischer Art)"
                },
                description: "Au poulet mariné à la marocaine",
                price: 60,
                dietary: ["halal"]
              },
              {
                id: "lp-briouate-fruit-de-mer",
                name: "Briouate fruit de mer",
                nameEn: "Seafood Briouats",
                localName: "بريوات بفواكه البحر (فواكه البحر، شعرية صينية، فطر أسود)",
                translations: {
                  ar: "بريوات بفواكه البحر (فواكه البحر، شعرية صينية، فطر أسود)",
                  en: "Seafood Briouats (seafood, vermicelli, black mushroom)",
                  es: "Briouats de marisco (marisco, fideos de arroz, seta negra)",
                  de: "Meeresfrüchte-Briouates (Meeresfrüchte, Glasnudeln, Mu-Err-Pilze)"
                },
                description: "Fruits de mer, vermicelle, champignon noir",
                price: 70,
                dietary: ["halal"]
              },
              {
                id: "lp-briouate-kefta",
                name: "Briouate Kefta",
                nameEn: "Kefta Briouats",
                localName: "بريوات بالكفتة (لحم مفروم، زيتون)",
                translations: {
                  ar: "بريوات بالكفتة (لحم مفروم، زيتون)",
                  en: "Kefta Briouats (minced meat, olives)",
                  es: "Briouats de Kefta (carne picada, aceitunas)",
                  de: "Kefta-Briouates (Hackfleisch, Oliven)"
                },
                description: "Viande hachée, olives",
                price: 60,
                dietary: ["halal"]
              },
              {
                id: "lp-briouate-vegetarienne",
                name: "Briouate Végétarienne",
                nameEn: "Vegetarian Briouats",
                localName: "بريوات نباتية (خضر موسمية)",
                translations: {
                  ar: "بريوات نباتية (خضر موسمية)",
                  en: "Vegetarian Briouats (seasonal vegetables)",
                  es: "Briouats vegetarianos (verduras de temporada)",
                  de: "Vegetarische Briouates (Gemüse der Saison)"
                },
                description: "Légumes de saison",
                price: 45,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "lp-assortiment-briouate",
                name: "Assortiment Briouate",
                nameEn: "Assorted Briouats Platter",
                localName: "تشكيلة بريوات مشكلة",
                translations: {
                  ar: "تشكيلة بريوات مشكلة",
                  en: "Assorted Briouats Platter",
                  es: "Surtido de Briouats",
                  de: "Gemischte Briouates-Platte"
                },
                price: 230,
                dietary: ["halal"],
                portionNotes: "Assortiment idéal à partager"
              },
              {
                id: "lp-pastilla-poulet",
                name: "Pastilla au poulet",
                nameEn: "Chicken Pastilla",
                localName: "بسطيلة بالدجاج (دجاج متبل، لوز، بيض)",
                translations: {
                  ar: "بسطيلة بالدجاج (دجاج متبل، لوز، بيض)",
                  en: "Chicken Pastilla (marinated chicken, almonds, eggs)",
                  es: "Pastela de pollo (pollo marinado, almendras, huevos)",
                  de: "Hähnchen-Pastilla (mariniertes Hähnchen, Mandeln, Eier)"
                },
                description: "Poulet mariné, amande, œufs",
                price: 150,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "lp-pastilla-fruit-de-mer",
                name: "Pastilla au fruit de mer",
                nameEn: "Seafood Pastilla",
                localName: "بسطيلة بفواكه البحر (فواكه البحر، شعرية صينية، فطر أسود، جبن)",
                translations: {
                  ar: "بسطيلة بفواكه البحر (فواكه البحر، شعرية صينية، فطر أسود، جبن)",
                  en: "Seafood Pastilla (seafood, vermicelli, black mushroom, cheese)",
                  es: "Pastela de marisco (marisco, fideos, seta negra, queso)",
                  de: "Meeresfrüchte-Pastilla (Meeresfrüchte, Glasnudeln, Mu-Err-Pilze, Käse)"
                },
                description: "Fruits de mer, vermicelle, champignon noir, fromage",
                price: 150,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "couscous-tagines",
            title: "Couscous & Tagines",
            titleEn: "Couscous & Tagines",
            description: "Couscous roulé à la main et tajines mijotés à la marocaine",
            descriptionEn: "Traditional Moroccan couscous and slow-simmered clay pot tagines",
            items: [
              {
                id: "lp-couscous-vegetarien",
                name: "Couscous Végétarien",
                nameEn: "Vegetarian Couscous",
                localName: "كسكس بالخضار (نباتي)",
                translations: {
                  ar: "كسكس بالخضار (نباتي)",
                  en: "Vegetarian Couscous",
                  es: "Cuscús vegetariano",
                  de: "Vegetarischer Couscous"
                },
                price: 90,
                dietary: ["vegetarian", "vegan", "halal", "dairy-free"]
              },
              {
                id: "lp-couscous-poulet",
                name: "Couscous Poulet",
                nameEn: "Chicken Couscous",
                localName: "كسكس بالدجاج",
                translations: {
                  ar: "كسكس بالدجاج",
                  en: "Chicken Couscous",
                  es: "Cuscús de pollo",
                  de: "Hähnchen-Couscous"
                },
                price: 100,
                dietary: ["halal"]
              },
              {
                id: "lp-couscous-viande",
                name: "Couscous Viande",
                nameEn: "Meat Couscous",
                localName: "كسكس باللحم",
                translations: {
                  ar: "كسكس باللحم",
                  en: "Meat Couscous",
                  es: "Cuscús de carne",
                  de: "Fleisch-Couscous"
                },
                price: 120,
                dietary: ["halal"]
              },
              {
                id: "lp-couscous-royale",
                name: "Couscous Royale",
                nameEn: "Royal Couscous",
                localName: "كسكس ملكي",
                translations: {
                  ar: "كسكس ملكي",
                  en: "Royal Couscous",
                  es: "Cuscús real",
                  de: "Couscous Royal"
                },
                price: 150,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "lp-tagine-poulet",
                name: "Tagine de poulet",
                nameEn: "Chicken Tagine",
                localName: "طاجين الدجاج (بالحامض، نصف دجاجة)",
                translations: {
                  ar: "طاجين الدجاج (بالحامض، نصف دجاجة)",
                  en: "Chicken Tagine (Preserved lemon, 1/2 chicken)",
                  es: "Tajín de pollo (Limón, 1/2 pollo)",
                  de: "Hähnchen-Tajine (Zitrone, 1/2 Hähnchen)"
                },
                description: "Citron, 1/2 poulet",
                price: 110,
                dietary: ["halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-tagine-poulet-raisin",
                name: "Tagine de poulet au Raisin",
                nameEn: "Chicken Tagine with Raisins",
                localName: "طاجين الدجاج بالزبيب",
                translations: {
                  ar: "طاجين الدجاج بالزبيب",
                  en: "Chicken Tagine with Raisins",
                  es: "Tajín de pollo con pasas",
                  de: "Hähnchen-Tajine mit Rosinen"
                },
                price: 110,
                dietary: ["halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-tagine-boeuf-pruneau",
                name: "Tagine de Bœuf au Pruneau",
                nameEn: "Beef Tagine with Prunes",
                localName: "طاجين اللحم البقري بالبرقوق",
                translations: {
                  ar: "طاجين اللحم البقري بالبرقوق",
                  en: "Beef Tagine with Prunes",
                  es: "Tajín de ternera con ciruelas pasas",
                  de: "Rindfleisch-Tajine mit Pflaumen"
                },
                price: 120,
                dietary: ["halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-tagine-agneau-abricot",
                name: "Tagine d'agneau au abricot",
                nameEn: "Lamb Tagine with Apricots",
                localName: "طاجين لحم الغنم بالمشمش",
                translations: {
                  ar: "طاجين لحم الغنم بالمشمش",
                  en: "Lamb Tagine with Apricots",
                  es: "Tajín de cordero con albaricoques",
                  de: "Lamm-Tajine mit Aprikosen"
                },
                price: 120,
                dietary: ["halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-tagine-kefta-oeufs",
                name: "Tagine Kefta au œufs",
                nameEn: "Kefta & Egg Tagine",
                localName: "طاجين الكفتة بالبيض",
                translations: {
                  ar: "طاجين الكفتة بالبيض",
                  en: "Kefta & Egg Tagine",
                  es: "Tajín de Kefta con huevos",
                  de: "Kefta-Tajine mit Eiern"
                },
                price: 120,
                dietary: ["halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-tagine-poisson-charmoula",
                name: "Tagine poisson au charmoula marocaine",
                nameEn: "Fish Tagine with Moroccan Chermoula",
                localName: "طاجين السمك بالشرمولة المغربية",
                translations: {
                  ar: "طاجين السمك بالشرمولة المغربية",
                  en: "Fish Tagine with Moroccan Chermoula",
                  es: "Tajín de pescado con chermoula marroquí",
                  de: "Fisch-Tajine mit marokkanischer Chermoula"
                },
                price: 120,
                dietary: ["halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-tagine-vegetarien",
                name: "Tagine végétarien",
                nameEn: "Vegetarian Tagine",
                localName: "طاجين نباتي بالخضار",
                translations: {
                  ar: "طاجين نباتي بالخضار",
                  en: "Vegetarian Tagine",
                  es: "Tajín vegetariano",
                  de: "Vegetarische Tajine"
                },
                price: 90,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              }
            ]
          },
          {
            id: "plats-sur-commande",
            title: "Plats sur Commande",
            titleEn: "Dishes Made to Order",
            description: "Grands classiques marocains préparés sur commande",
            descriptionEn: "Heritage Moroccan dishes prepared fresh to order",
            items: [
              {
                id: "lp-seffa-medfouna",
                name: "Seffa Medfouna",
                nameEn: "Seffa Medfouna",
                localName: "السفة المدفونة",
                translations: {
                  ar: "السفة المدفونة",
                  en: "Seffa Medfouna (Sweet vermicelli with hidden spiced chicken)",
                  es: "Seffa Medfouna (fideos dulces con pollo especiado)",
                  de: "Seffa Medfouna (süße Fadennudeln mit verstecktem Hähnchen)"
                },
                price: 90,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "lp-tanjia-marrakchia",
                name: "Tanjia Marrakchia (1/2 kg)",
                nameEn: "Marrakchi Tanjia (1/2 kg)",
                localName: "الطنجية المراكشية (نصف كيلو)",
                translations: {
                  ar: "الطنجية المراكشية (نصف كيلو)",
                  en: "Marrakchi Tanjia (1/2 kg slow-cooked meat)",
                  es: "Tanjia de Marrakech (1/2 kg)",
                  de: "Tanjia nach Marrakesch-Art (1/2 kg)"
                },
                price: 150,
                dietary: ["halal", "gluten-free", "dairy-free"],
                portionNotes: "Portion 1/2 kg sur commande"
              },
              {
                id: "lp-rfissa-poulet-beldi",
                name: "Rfissa au poulet beldi",
                nameEn: "Rfissa with Beldi Free-Range Chicken",
                localName: "الرفيسة بالدجاج البلدي",
                translations: {
                  ar: "الرفيسة بالدجاج البلدي",
                  en: "Rfissa with Beldi Free-Range Chicken",
                  es: "Rfissa con pollo de corral (beldi)",
                  de: "Rfissa mit Beldi-Freilandhähnchen"
                },
                price: 120,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "sandwiches-menu-kids",
            title: "Sandwiches & Menu Kids",
            titleEn: "Sandwiches & Kids Menu",
            description: "Tous les sandwiches sont accompagnés de frites",
            descriptionEn: "All sandwiches are served in homemade batbout bread with fries",
            items: [
              {
                id: "lp-sandwich-poulet",
                name: "Sandwich poulet",
                nameEn: "Chicken Sandwich",
                localName: "ساندويتش دجاج (خبز البطبوط المنزلي، دجاج، طماطم، زعتر، خس، بقدونس، زيتون + بطاطس مقلية)",
                translations: {
                  ar: "ساندويتش دجاج (خبز البطبوط المنزلي، دجاج، طماطم، زعتر، خس، بقدونس، زيتون + بطاطس مقلية)",
                  en: "Chicken Sandwich (2 homemade batbout breads, chicken, tomato, oregano, lettuce, parsley, olives + fries)",
                  es: "Sándwich de pollo (2 panes batbout caseros, pollo, tomate, orégano, lechuga, perejil, aceitunas + patatas fritas)",
                  de: "Hähnchen-Sandwich (2 hausgemachte Batbout-Brote, Hähnchen, Tomate, Oregano, Salat, Petersilie, Oliven + Pommes)"
                },
                description: "2 pains batboute maison, poulet, tomate, origan, salade verte, persil, olives + frites",
                price: 65,
                dietary: ["halal", "dairy-free"]
              },
              {
                id: "lp-sandwich-viande-hachee",
                name: "Sandwich viande hachée",
                nameEn: "Minced Meat Sandwich",
                localName: "ساندويتش لحم مفروم (خبز البطبوط، لحم مفروم، طماطم، زعتر، خس، بقدونس، زيتون + بطاطس مقلية)",
                translations: {
                  ar: "ساندويتش لحم مفروم (خبز البطبوط، لحم مفروم، طماطم، زعتر، خس، بقدونس، زيتون + بطاطس مقلية)",
                  en: "Minced Meat Sandwich (2 homemade batbout breads, minced beef, tomato, oregano, lettuce, parsley, olives + fries)",
                  es: "Sándwich de carne picada (2 panes batbout, carne picada, tomate, orégano, lechuga, perejil, aceitunas + patatas fritas)",
                  de: "Hackfleisch-Sandwich (2 Batbout-Brote, Hackfleisch, Tomate, Oregano, Salat, Petersilie, Oliven + Pommes)"
                },
                description: "2 pains batboute maison, viande hachée, tomate, origan, salade verte, persil, olives + frites",
                price: 75,
                dietary: ["halal", "dairy-free"]
              },
              {
                id: "lp-sandwich-mixte",
                name: "Sandwich mixte",
                nameEn: "Mixed Sandwich",
                localName: "ساندويتش ميكست (دجاج + لحم مفروم، طماطم، زعتر، خس، بقدونس، زيتون + بطاطس مقلية)",
                translations: {
                  ar: "ساندويتش ميكست (دجاج + لحم مفروم، طماطم، زعتر، خس، بقدونس، زيتون + بطاطس مقلية)",
                  en: "Mixed Sandwich (2 homemade batbout breads, minced beef + chicken, tomato, oregano, lettuce, parsley, olives + fries)",
                  es: "Sándwich mixto (carne picada + pollo, tomate, orégano, lechuga, perejil, aceitunas + patatas fritas)",
                  de: "Gemischtes Sandwich (Hackfleisch + Hähnchen, Tomate, Oregano, Salat, Petersilie, Oliven + Pommes)"
                },
                description: "2 pains batboute maison, viande hachée + poulet, tomate, origan, salade verte, persil, olives + frites",
                price: 80,
                dietary: ["halal", "dairy-free"]
              },
              {
                id: "lp-kids-tajine-poulet",
                name: "Menu Kids : Tajine poulet",
                nameEn: "Kids Menu: Chicken Tagine",
                localName: "قائمة الأطفال: طاجين الدجاج",
                translations: {
                  ar: "قائمة الأطفال: طاجين الدجاج",
                  en: "Kids Menu: Chicken Tagine",
                  es: "Menú Infantil: Tajín de pollo",
                  de: "Kindermenü: Hähnchen-Tajine"
                },
                price: 65,
                dietary: ["halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-kids-tajine-vegetarien",
                name: "Menu Kids : Tajine végétarien",
                nameEn: "Kids Menu: Vegetarian Tagine",
                localName: "قائمة الأطفال: طاجين نباتي",
                translations: {
                  ar: "قائمة الأطفال: طاجين نباتي",
                  en: "Kids Menu: Vegetarian Tagine",
                  es: "Menú Infantil: Tajín vegetariano",
                  de: "Kindermenü: Vegetarische Tajine"
                },
                price: 50,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-kids-couscous-poulet",
                name: "Menu Kids : Couscous Poulet",
                nameEn: "Kids Menu: Chicken Couscous",
                localName: "قائمة الأطفال: كسكس بالدجاج",
                translations: {
                  ar: "قائمة الأطفال: كسكس بالدجاج",
                  en: "Kids Menu: Chicken Couscous",
                  es: "Menú Infantil: Cuscús de pollo",
                  de: "Kindermenü: Hähnchen-Couscous"
                },
                price: 65,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "desserts-crepes",
            title: "Desserts & Crêpes",
            titleEn: "Desserts & Crêpes",
            description: "Pâtisseries marocaines, desserts fruités et crêpes (portion de 2 crêpes)",
            descriptionEn: "Moroccan almond pastries, traditional sweets, and crêpes (2 pieces)",
            items: [
              {
                id: "lp-patisserie-marocain",
                name: "Pâtisserie marocain",
                nameEn: "Moroccan Pastries",
                localName: "حلويات مغربية تقليدية",
                translations: {
                  ar: "حلويات مغربية تقليدية",
                  en: "Moroccan Pastries",
                  es: "Pastelería marroquí",
                  de: "Marokkanisches Gebäck"
                },
                price: 35,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "lp-amlou-twist",
                name: "Amlou twist",
                nameEn: "Amlou Twist Dessert",
                localName: "تحلية أملو تويست",
                translations: {
                  ar: "تحلية أملو تويست",
                  en: "Amlou Twist Dessert",
                  es: "Postre Amlou Twist",
                  de: "Amlou-Twist-Dessert"
                },
                price: 40,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "lp-orange-canelle",
                name: "Orange canelle",
                nameEn: "Orange with Cinnamon",
                localName: "برتقال بالقرفة",
                translations: {
                  ar: "برتقال بالقرفة",
                  en: "Orange with Cinnamon",
                  es: "Naranja con canela",
                  de: "Orange mit Zimt"
                },
                price: 30,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-hliwa-wa-atay",
                name: "Hliwa wa Atay",
                nameEn: "Hliwa wa Atay",
                localName: "حلوى وأتاي (تشكيلة حلويات مغربية باللوز مع شاي بالنعناع)",
                translations: {
                  ar: "حلوى وأتاي (تشكيلة حلويات مغربية باللوز مع شاي بالنعناع)",
                  en: "Hliwa wa Atay (Assorted Moroccan almond pastries + mint tea)",
                  es: "Hliwa wa Atay (Surtido de dulces de almendra marroquíes + té a la menta)",
                  de: "Hliwa wa Atay (Marokkanisches Mandelgebäck + Minztee)"
                },
                description: "Assortiment pâtisseries marocaines amandes, thé à la menthe",
                price: 60,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "lp-crepe-nature",
                name: "Crêpe nature",
                nameEn: "Plain Crêpes",
                localName: "كريب سادة (قطعتان)",
                translations: {
                  ar: "كريب سادة (قطعتان)",
                  en: "Plain Crêpes (2 Crêpes)",
                  es: "Crepe natural (2 crepes)",
                  de: "Crêpe natur (2 Stück)"
                },
                price: 25,
                dietary: ["vegetarian", "halal"],
                portionNotes: "2 Crêpes"
              },
              {
                id: "lp-crepe-miel",
                name: "Crêpe miel",
                nameEn: "Honey Crêpes",
                localName: "كريب بالعسل (قطعتان)",
                translations: {
                  ar: "كريب بالعسل (قطعتان)",
                  en: "Honey Crêpes (2 Crêpes)",
                  es: "Crepe con miel (2 crepes)",
                  de: "Crêpe mit Honig (2 Stück)"
                },
                price: 30,
                dietary: ["vegetarian", "halal"],
                portionNotes: "2 Crêpes"
              },
              {
                id: "lp-crepe-nutella",
                name: "Crêpe nutella",
                nameEn: "Nutella Crêpes",
                localName: "كريب بالنوتيلا (قطعتان)",
                translations: {
                  ar: "كريب بالنوتيلا (قطعتان)",
                  en: "Nutella Crêpes (2 Crêpes)",
                  es: "Crepe de Nutella (2 crepes)",
                  de: "Crêpe mit Nutella (2 Stück)"
                },
                price: 35,
                dietary: ["vegetarian", "halal"],
                portionNotes: "2 Crêpes"
              },
              {
                id: "lp-crepe-nutella-banane",
                name: "Crêpe nutella banane",
                nameEn: "Nutella & Banana Crêpes",
                localName: "كريب بالنوتيلا والموز (قطعتان)",
                translations: {
                  ar: "كريب بالنوتيلا والموز (قطعتان)",
                  en: "Nutella & Banana Crêpes (2 Crêpes)",
                  es: "Crepe de Nutella y plátano (2 crepes)",
                  de: "Crêpe mit Nutella & Banane (2 Stück)"
                },
                price: 40,
                dietary: ["vegetarian", "halal"],
                portionNotes: "2 Crêpes"
              }
            ]
          },
          {
            id: "boissons",
            title: "Boissons Chaudes, Jus, Cocktails, Eau & Soda",
            titleEn: "Hot Drinks, Juices, Mocktails, Water & Soda",
            description: "Thés, cafés, jus pressés frais, cocktails sans alcool et eaux minérales",
            descriptionEn: "Moroccan mint tea, coffee, fresh pressed juices, non-alcoholic mocktails, water, and soft drinks",
            items: [
              {
                id: "lp-cafe-noir",
                name: "Café noir",
                nameEn: "Black Coffee / Espresso",
                localName: "قهوة سوداء",
                translations: {
                  ar: "قهوة سوداء",
                  en: "Black Coffee / Espresso",
                  es: "Café solo",
                  de: "Schwarzer Kaffee / Espresso"
                },
                price: 20,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-cafe-noss-noss",
                name: "Café noss noss",
                nameEn: "Noss Noss (Half Coffee, Half Milk)",
                localName: "قهوة نص نص",
                translations: {
                  ar: "قهوة نص نص",
                  en: "Noss Noss (Half Coffee, Half Milk)",
                  es: "Café con leche (Mitad y mitad)",
                  de: "Milchkaffee (Noss Noss)"
                },
                price: 20,
                dietary: ["vegetarian", "halal", "gluten-free"]
              },
              {
                id: "lp-chocolat-chaud",
                name: "Chocolat chaud",
                nameEn: "Hot Chocolate",
                localName: "شوكولاتة ساخنة",
                translations: {
                  ar: "شوكولاتة ساخنة",
                  en: "Hot Chocolate",
                  es: "Chocolate caliente",
                  de: "Heiße Schokolade"
                },
                price: 20,
                dietary: ["vegetarian", "halal", "gluten-free"]
              },
              {
                id: "lp-cappucino",
                name: "Cappucino",
                nameEn: "Cappuccino",
                localName: "كابتشينو",
                translations: {
                  ar: "كابتشينو",
                  en: "Cappuccino",
                  es: "Capuchino",
                  de: "Cappuccino"
                },
                price: 20,
                dietary: ["vegetarian", "halal", "gluten-free"]
              },
              {
                id: "lp-the-menthe-petit",
                name: "Thé à la menthe petit",
                nameEn: "Small Moroccan Mint Tea",
                localName: "شاي بالنعناع (صغير)",
                translations: {
                  ar: "شاي بالنعناع (صغير)",
                  en: "Small Moroccan Mint Tea",
                  es: "Té a la menta pequeño",
                  de: "Kleiner Minztee"
                },
                price: 15,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-the-menthe-moyen",
                name: "Thé à la menthe moyen",
                nameEn: "Medium Moroccan Mint Tea",
                localName: "شاي بالنعناع (متوسط)",
                translations: {
                  ar: "شاي بالنعناع (متوسط)",
                  en: "Medium Moroccan Mint Tea",
                  es: "Té a la menta mediano",
                  de: "Mittlerer Minztee"
                },
                price: 20,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-the-noir",
                name: "Thé noir",
                nameEn: "Black Tea",
                localName: "شاي أسود",
                translations: {
                  ar: "شاي أسود",
                  en: "Black Tea",
                  es: "Té negro",
                  de: "Schwarzer Tee"
                },
                price: 20,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-verveine",
                name: "Verveine",
                nameEn: "Verbena Tea",
                localName: "لويزة (شاي اللويزة)",
                translations: {
                  ar: "لويزة (شاي اللويزة)",
                  en: "Verbena Tea",
                  es: "Infusión de hierba luisa",
                  de: "Eisenkrauttee (Verveine)"
                },
                price: 20,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-jus-orange",
                name: "Jus d'orange",
                nameEn: "Fresh Orange Juice",
                localName: "عصير برتقال",
                translations: {
                  ar: "عصير برتقال",
                  en: "Fresh Orange Juice",
                  es: "Zumo de naranja",
                  de: "Orangensaft"
                },
                price: 25,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-jus-pomme",
                name: "Jus de pomme",
                nameEn: "Apple Juice",
                localName: "عصير تفاح",
                translations: {
                  ar: "عصير تفاح",
                  en: "Apple Juice",
                  es: "Zumo de manzana",
                  de: "Apfelsaft"
                },
                price: 25,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-jus-banane",
                name: "Jus de banane",
                nameEn: "Banana Smoothie / Juice",
                localName: "عصير موز",
                translations: {
                  ar: "عصير موز",
                  en: "Banana Smoothie / Juice",
                  es: "Batido de plátano",
                  de: "Bananensaft"
                },
                price: 25,
                dietary: ["vegetarian", "halal", "gluten-free"]
              },
              {
                id: "lp-jus-avocat",
                name: "Jus d'avocat",
                nameEn: "Avocado Smoothie",
                localName: "عصير أفوكادو",
                translations: {
                  ar: "عصير أفوكادو",
                  en: "Avocado Smoothie",
                  es: "Batido de aguacate",
                  de: "Avocado-Shake"
                },
                price: 30,
                dietary: ["vegetarian", "halal", "gluten-free"]
              },
              {
                id: "lp-jus-avocat-fruits-secs",
                name: "Jus avocat fruits secs",
                nameEn: "Avocado & Dried Fruits Smoothie",
                localName: "عصير أفوكادو بالفواكه الجافة",
                translations: {
                  ar: "عصير أفوكادو بالفواكه الجافة",
                  en: "Avocado & Dried Fruits Smoothie",
                  es: "Batido de aguacate y frutos secos",
                  de: "Avocado-Trockenfrüchte-Shake"
                },
                price: 35,
                isSignature: true,
                dietary: ["vegetarian", "halal", "gluten-free"]
              },
              {
                id: "lp-jus-mangue",
                name: "Jus de mangue",
                nameEn: "Mango Juice",
                localName: "عصير مانجو",
                translations: {
                  ar: "عصير مانجو",
                  en: "Mango Juice",
                  es: "Zumo de mango",
                  de: "Mangosaft"
                },
                price: 30,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-jus-fruits-exotic",
                name: "Jus de fruits exotic",
                nameEn: "Exotic Fruit Juice",
                localName: "عصير فواكه استوائية",
                translations: {
                  ar: "عصير فواكه استوائية",
                  en: "Exotic Fruit Juice",
                  es: "Zumo de frutas exóticas",
                  de: "Exotischer Fruchtsaft"
                },
                price: 35,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-virgin-mojito",
                name: "Virgin mojito",
                nameEn: "Virgin Mojito",
                localName: "فيرجن موخيتو (نعناع، ليمون، سبرايت)",
                translations: {
                  ar: "فيرجن موخيتو (نعناع، ليمون، سبرايت)",
                  en: "Virgin Mojito (mint, lemon, Sprite)",
                  es: "Mojito sin alcohol (menta, limón, Sprite)",
                  de: "Virgin Mojito (Minze, Zitrone, Sprite)"
                },
                description: "Menthe, Citron, Sprite",
                price: 35,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-na-mangue",
                name: "N/A mangue",
                nameEn: "N/A Mango",
                localName: "كوكتيل مانجو غازي (هريس مانجو، ثلج مجروش، ماء غازي)",
                translations: {
                  ar: "كوكتيل مانجو غازي (هريس مانجو، ثلج مجروش، ماء غازي)",
                  en: "N/A Mango (mango purée, crushed ice, sparkling water)",
                  es: "Cóctel de mango (puré de mango, hielo picado, agua con gas)",
                  de: "Alkoholfreier Mango-Cocktail (Mangopüree, Crushed Ice, Sprudelwasser)"
                },
                description: "Purée mangue, glaçon pilé, eau gazeuse",
                price: 35,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-cojak",
                name: "Cojak",
                nameEn: "Cojak",
                localName: "كوكتيل كوجاك (برتقال، هريس الفراولة)",
                translations: {
                  ar: "كوكتيل كوجاك (برتقال، هريس الفراولة)",
                  en: "Cojak (orange, strawberry purée)",
                  es: "Cojak (naranja, puré de fresa)",
                  de: "Cojak (Orange, Erdbeerpüree)"
                },
                description: "Orange, purée de fraise",
                price: 35,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-soda",
                name: "Soda",
                nameEn: "Soda / Soft Drink",
                localName: "مشروب غازي",
                translations: {
                  ar: "مشروب غازي",
                  en: "Soda / Soft Drink",
                  es: "Refresco",
                  de: "Limonade / Softdrink"
                },
                price: 20,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-eau-33cl",
                name: "Eau 33 cl",
                nameEn: "Still Water 33cl",
                localName: "ماء معدني 33 سل",
                translations: {
                  ar: "ماء معدني 33 سل",
                  en: "Still Water 33cl",
                  es: "Agua mineral 33cl",
                  de: "Stilles Wasser 33cl"
                },
                price: 10,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-eau-1l",
                name: "Eau 1 L",
                nameEn: "Still Water 1L",
                localName: "ماء معدني 1 لتر",
                translations: {
                  ar: "ماء معدني 1 لتر",
                  en: "Still Water 1L",
                  es: "Agua mineral 1L",
                  de: "Stilles Wasser 1L"
                },
                price: 25,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-oulmes-50cl",
                name: "Oulmes 50cl",
                nameEn: "Oulmes Sparkling Water 50cl",
                localName: "ماء غازي والماس 50 سل",
                translations: {
                  ar: "ماء غازي والماس 50 سل",
                  en: "Oulmes Sparkling Water 50cl",
                  es: "Agua con gas Oulmes 50cl",
                  de: "Oulmes Sprudelwasser 50cl"
                },
                price: 15,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              },
              {
                id: "lp-oulmes-1l",
                name: "Oulmes 1L",
                nameEn: "Oulmes Sparkling Water 1L",
                localName: "ماء غازي والماس 1 لتر",
                translations: {
                  ar: "ماء غازي والماس 1 لتر",
                  en: "Oulmes Sparkling Water 1L",
                  es: "Agua con gas Oulmes 1L",
                  de: "Oulmes Sprudelwasser 1L"
                },
                price: 25,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free", "dairy-free"]
              }
            ]
          }
        ]
      }
    },
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Clear Menu / Cash Backup",
        description: "Printed MAD prices (breakfasts 45–95 MAD, tagines 90–120 MAD, pastillas 150 MAD) with no surprise markups. Cards are listed, though several recent diners advise bringing MAD cash due to occasional card-machine issues.",
        tone: "caution",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Fresh Kitchen & Halal",
        description: "Dishes are cooked fresh to order in a well-regarded kitchen (4.7/5 Google across 1,430+ reviews); 100% halal meats, strictly alcohol-free dining, and sealed bottled water (10–25 MAD) available.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Pastilla Specialist",
        description: "Celebrated on TripAdvisor and Restaurant Guru for flaky sweet-and-savory chicken pastilla, seafood pastilla, homemade batbout sandwiches, Harira, and made-to-order Seffa Medfouna, Tanjia, and Rfissa.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Cozy Interior + Terrace",
        description: "Warm traditional Moroccan decor with indoor tables, street-side terrace seating inside Complexe Tagadirt on Boulevard du 20 Août, and Wi-Fi; the small dining room fills up quickly at dinner.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Warm Host / Early Sell-Outs",
        description: "Staff consistently earn praise for attentive hospitality—often serving complimentary mint tea and pastries—but popular pastillas are prepared in daily batches and can sell out after 21:30.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-beldi-fusion",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo", "family"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["hidden-gem", "traditional", "casual"],
      foodStyles: [
        "Moroccan",
        "Vegetarian/Vegan",
        "International",
        "Cafe & Pastry"
      ],
      cuisineTags: ["moroccan-traditional", "cafe-pastry", "international"],
      archetypeAffinity: ["nomad", "first-timer", "culture"],
      vibeTags: ["bohemian", "lively", "stylish", "trendy"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 13,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["breakfast", "terrace", "dry", "budget", "live-music"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Beldi Fusion Kitchen",
      neighborhood: "Secteur Balnéaire",
      description: "A trendy, high-energy dining concept and rooftop terrace on Boulevard du 20 Août. Famous for inventive Moroccan breakfast spreads, vibrant bowls, signature burgers, and evening Gnawa acoustic music in a chic bohemian atmosphere.",
      tip: "Head upstairs to the rooftop terrace for the Beldi breakfast spread in the morning, or during dinner for live Gnawa musical vibes.",
      badge: "local-favorite",
      bestDishes: [
        "Royal Beldi Breakfast Platter",
        "Rfissa Fusion",
        "Tacos Fo9 Shwaya",
        "San Sebastian Cheesecake",
        "Fresh Detox Juices"
      ],
      pros: [
        "Sensational modern Moroccan breakfast and brunch options.",
        "Lively rooftop ambiance with Gnawa musicians in the evenings.",
        "Extensive mocktail and fresh juice menu."
      ],
      cons: [
        "Wait times can reach 15–25 minutes during Sunday morning brunch rush.",
        "Alcohol-free venue (may not fit visitors seeking wine with dinner)."
      ],
      googleRating: 4.6,
      googleReviewCount: 4080,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 65,
      theforkRating: 4.3,
      theforkReviewCount: 65,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 4080,
      openTime: "08:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4162,
        lng: -9.6014
      },
      googleMapsUrl: "https://maps.google.com/?q=Beldi+Fusion+Kitchen+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212648030390",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://beldifusionkitchen.ma",
      instagram: "https://instagram.com/beldifusionkitchen.ma",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-da-celsi",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "hidden-gem"],
      foodStyles: ["Italian", "Seafood", "Mediterranean"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["cozy", "homestyle", "charming", "relaxed"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 20,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["terrace", "alcohol", "dinner", "budget"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Da Celsi Ristorante Italiano",
      neighborhood: "Secteur Balnéaire",
      description: "An intimate, highly regarded Italian trattoria tucked into Complexe Tawada on the beachfront corniche. Dedicated to homemade fresh pasta, coastal clam casseroles, and authentic sauces accompanied by generous Italian hospitality.",
      tip: "Ask for the daily homemade ravioli special and a glass of chilled Moroccan Vin Gris or Italian Pinot Grigio.",
      badge: "hidden-gem",
      bestDishes: [
        "Homemade Spinach & Ricotta Ravioli",
        "Fresh Clam Casserole",
        "Filetto di Pesce",
        "Classic Tiramisu"
      ],
      pros: [
        "Genuinely authentic fresh pasta prepared to order.",
        "Cozy, welcoming hospitality far removed from tourist-trap assembly lines.",
        "Direct walking distance from the beachfront hotels."
      ],
      cons: [
        "Closed on Mondays; small footprint requires booking on weekend nights.",
        "Split service hours (12:00–15:30 and 19:30–23:00)."
      ],
      googleRating: 4.6,
      googleReviewCount: 285,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 220,
      theforkRating: 4.5,
      theforkReviewCount: 110,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 285,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "La Corniche - Front de Mer N°7, Complexe Commercial Tawada, Agadir 80000, Morocco",
        lat: 30.4223,
        lng: -9.6095
      },
      googleMapsUrl: "https://maps.google.com/?q=Da+Celsi+Ristorante+Italiano+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528848744",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "Italian", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-lez",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "solo", "couple"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Mediterranean", "French-Moroccan", "Grill & BBQ"],
      cuisineTags: ["international"],
      archetypeAffinity: ["adventure", "nomad"],
      vibeTags: ["lively", "casual", "friendly", "festive"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 17,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "terrace", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Z Restaurant Bar Tapas",
      neighborhood: "Secteur Balnéaire",
      description: "A relaxed Spanish-style bistro and tapas terrace on Boulevard du 20 Août. A favorite hangout for drinks, savory tapas boards, juicy steaks, and watching football matches in a sociable, laid-back atmosphere.",
      tip: "Ideal for an informal late afternoon drink and tapas board on the patio before moving on to Agadir nightlife.",
      badge: "local-favorite",
      bestDishes: [
        "Gambas al Ajillo",
        "Charcuterie & Cheese Board",
        "Grilled Ribeye Steak",
        "Sangria Pitcher"
      ],
      pros: [
        "Generous tapas portions and reasonable drink prices for the tourist zone.",
        "Casual, unpretentious atmosphere with sports broadcasts.",
        "Continuous service from morning until late night."
      ],
      cons: [
        "Can get noisy on major football match nights.",
        "Smoking is permitted in open sections of the terrace."
      ],
      googleRating: 4.4,
      googleReviewCount: 985,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 350,
      theforkRating: 4.3,
      theforkReviewCount: 120,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 985,
      openTime: "10:00",
      closeTime: "01:30",
      exactAddressAndCoordinates: {
        address: "Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4141,
        lng: -9.6011
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Z+Restaurant+Bar+Tapas+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528828290",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Spanish", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-buddha-bar",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["friends", "couple", "business-friendly"],
      mealTypes: ["dinner", "late-night"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury"],
      vibeTags: ["glamorous", "chic", "cosmopolitan", "festive"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 65,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "closed",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "fine", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Buddha-Bar Agadir",
      neighborhood: "Secteur Balnéaire",
      description: "The world-famous luxury Asian-fusion lounge concept set on the seaside of Boulevard du 20 Août. Combines Pacific Rim culinary artistry, theatrical mixology, lavish decor, and high-energy dinner-show performances with resident DJs.",
      tip: "Dress code is strictly smart-chic. A minimum spend of 650 MAD (~€60) per person applies during weekends and special events.",
      badge: "splurge",
      bestDishes: [
        "Signature Black Cod Miso",
        "Crispy Duck Salad",
        "Dragon Roll Sushi Platter",
        "Buddha-Bar Signature Cocktails"
      ],
      pros: [
        "Top nightlife destination for international dinner-and-show entertainment.",
        "World-class Asian-fusion dishes and cocktail mixology.",
        "Lavish and immersive Pacific Rim decor."
      ],
      cons: [
        "Strict minimum spend policy (650 MAD / ~€60 per person).",
        "Age restricted (16+ accompanied for dinner, 21+ for bar area); music is loud late at night."
      ],
      googleRating: 4,
      googleReviewCount: 610,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 150,
      theforkRating: 4.2,
      theforkReviewCount: 100,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 610,
      openTime: "20:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4138,
        lng: -9.6006
      },
      googleMapsUrl: "https://maps.google.com/?q=Buddha+Bar+Agadir",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212661380208",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://buddhabaragadir.com",
      instagram: "https://instagram.com/buddhabar_agadir",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-mamma-caterina",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "Seafood", "Mediterranean"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "nomad"],
      vibeTags: ["authentic", "charming", "relaxed", "coastal"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["terrace", "alcohol", "dinner", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Mamma Caterina",
      neighborhood: "Marina Agadir",
      description: "An authentic Italian trattoria and pizzeria positioned directly on the western quay of Agadir Marina. Known for handmade pastas, genuine Italian-style pizzas, and relaxed quayside dining overlooking the boats.",
      tip: "Order the seafood pasta (Frutti di Mare) and pair it with an Italian Pinot Grigio or chilled Moroccan rosé.",
      badge: "local-favorite",
      bestDishes: [
        "Pasta Frutti di Mare",
        "Authentic Spaghetti Carbonara",
        "Pizza 4 Formaggi",
        "Ossobuco",
        "Homemade Tiramisu"
      ],
      menu: {
        currency: 'MAD',
        lastUpdated: 'October 2026',
        serviceChargeIncluded: true,
        sections: [
          {
            id: 'antipasti',
            title: 'Antipasti & Insalate',
            description: 'Entrées fraîches italiennes et produits du soleil importés',
            items: [
              {
                id: 'caterina-a1',
                name: 'Insalata Caprese alla Burrata',
                localName: 'سلطة كابريزي بجبن البوراتا الإيطالي',
                description: 'Cœur crémeux de burrata fraîche, tomates cerises mûres, basilic frais et réduction balsamique de Modène.',
                price: 95,
                isSignature: true,
                dietary: ['vegetarian']
              },
              {
                id: 'caterina-a2',
                name: 'Carpaccio di Manzo al Parmigiano',
                localName: 'كارباتشيو لحم بقري بجبن البارميزان',
                description: 'Fines tranches de filet de bœuf mariné, roquette poivrée, copeaux de Grana Padano 24 mois et filet d’huile d’olive.',
                price: 90
              },
              {
                id: 'caterina-a3',
                name: 'Focaccia all’Aglio e Rosmarino',
                localName: 'فوكاتشيا إيطالية بالثوم وإكليل الجبل',
                description: 'Pain plat croustillant cuit au four à pizza, badigeonné d’huile d’olive extra vierge, ail et romarin frais.',
                price: 50,
                dietary: ['vegetarian', 'vegan']
              }
            ]
          },
          {
            id: 'pizze',
            title: 'Le Pizze Tradizionali (33 cm)',
            description: 'Pâte levée 48 heures, sauce tomate San Marzano et mozzarella fior di latte',
            items: [
              {
                id: 'caterina-pz1',
                name: 'Pizza Frutti di Mare',
                localName: 'بيتزا فواكه البحر والجمبري والكالمار',
                description: 'Sauce tomate italienne, fruits de mer frais de l’Atlantique, ail doux, persil et mozzarella fondante.',
                price: 135,
                isSignature: true
              },
              {
                id: 'caterina-pz2',
                name: 'Pizza Quattro Formaggi (4 Fromages)',
                localName: 'بيتزا الأجبان الأربعة الإيطالية',
                description: 'Mozzarella fior di latte, gorgonzola crémeux, edam et scamorza fumée fondue.',
                price: 115,
                dietary: ['vegetarian']
              },
              {
                id: 'caterina-pz3',
                name: 'Pizza Quattro Stagioni (4 Saisons)',
                localName: 'بيتزا الفصول الأربعة',
                description: 'Tomates italiennes, mozzarella, champignons frais de Paris, cœurs d’artichauts, jambon de dinde et olives.',
                price: 110
              },
              {
                id: 'caterina-pz4',
                name: 'Pizza Campagnola Vegetariana',
                localName: 'بيتزا الخضار المشوية الإيطالية',
                description: 'Sauce tomate, mozzarella, aubergines et courgettes grillées, poivrons marinés et origan sauvage.',
                price: 100,
                dietary: ['vegetarian']
              }
            ]
          },
          {
            id: 'paste',
            title: 'Le Paste Fresche & Specialità della Nonna',
            description: 'Pâtes faites maison préparées selon les recettes traditionnelles',
            items: [
              {
                id: 'caterina-ps1',
                name: 'Spaghetti Frutti di Mare alla Marinara',
                localName: 'سباغيتي فواكه البحر على الطريقة الإيطالية',
                description: 'Spaghetti al dente sautés avec gambas fraîches, calamars, palourdes et sauce tomate cerise au basilic.',
                price: 135,
                isSignature: true
              },
              {
                id: 'caterina-ps2',
                name: 'Tagliatelle Nordica al Salmone Fresco',
                localName: 'تاغلياتيللي بالصلصة البيضاء والسلمون',
                description: 'Tagliatelles fraîches liées à la crème fraîche douce, saumon frais poêlé et aneth.',
                price: 135
              },
              {
                id: 'caterina-ps3',
                name: 'Spaghetti alla Carbonara Autentica',
                localName: 'سباغيتي كاربونارا الإيطالية الأصلية',
                description: 'Véritable recette romaine : émulsion de jaunes d’œufs frais, pecorino romano, bacon croustillant et poivre noir concassé.',
                price: 115,
                isSignature: true
              },
              {
                id: 'caterina-ps4',
                name: 'Penne alla Norma Catanese',
                localName: 'بيني بالباذنجان وصلصة الطماطم والريحان',
                description: 'Sauce tomate mijotée à l’ail doré, dés d’aubergines frites croustillantes et ricotta râpée.',
                price: 90,
                dietary: ['vegetarian']
              }
            ]
          },
          {
            id: 'dolci',
            title: 'I Dolci della Casa',
            description: 'Desserts italiens authentiques confectionnés chaque matin',
            items: [
              {
                id: 'caterina-d1',
                name: 'Tiramisù Tradizionale della Nonna',
                localName: 'تيراميسو ماسكاربوني إيطالي تقليدي',
                description: 'La recette signature de Mamma Caterina : mascarpone léger, savoyards imbibés d’expresso et cacao amer.',
                price: 60,
                isSignature: true,
                dietary: ['vegetarian']
              },
              {
                id: 'caterina-d2',
                name: 'Panna Cotta ai Frutti di Bosco',
                localName: 'بانا كوتا بالفواكه الحمراء',
                description: 'Crème cuite vanillée onctueuse nappée d’un coulis acidulé de fruits des bois frais.',
                price: 55,
                dietary: ['vegetarian']
              }
            ]
          }
        ]
      },
      pros: [
        "Genuine Italian chef and authentic recipes rarely found on the coast.",
        "Lovely quayside seating away from heavy pedestrian congestion.",
        "Great wine and beer selection."
      ],
      cons: [
        "Service can be slow during busy summer evenings.",
        "Outdoor seating can be breezy later at night."
      ],
      googleRating: 4.3,
      googleReviewCount: 370,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 250,
      theforkRating: 4.4,
      theforkReviewCount: 80,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 370,
      openTime: "09:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Quai Ouest, Résidence 4 Local NM9, Complexe Marina, Agadir 80000, Morocco",
        lat: 30.4231,
        lng: -9.6175
      },
      googleMapsUrl: "https://maps.google.com/?q=Mamma+Caterina+Marina+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528847061",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/mamma.caterina",
      languagesSpoken: ["French", "Italian", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-ocomptoir-marina",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe & Pastry", "Italian"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["lively", "casual", "coastal", "scenic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 10,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["breakfast", "late-night", "terrace", "dry", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "O'Comptoir Marina",
      neighborhood: "Marina Agadir",
      description: "A bustling, contemporary waterfront brasserie and café facing the moored luxury yachts. A popular gathering spot for hearty Moroccan breakfast sets, freshly blended fruit smoothies, and relaxed sunset coffee breaks.",
      tip: "Visit in the morning between 08:30 and 11:00 for the traditional Tamazirt breakfast platter directly facing the yachts.",
      badge: "local-favorite",
      bestDishes: [
        "Tamazirt Moroccan Breakfast Platter",
        "Gourmet Beef Burger",
        "Seafood Pizza",
        "Fresh Avocado Smoothie"
      ],
      menu: {
        currency: 'MAD',
        lastUpdated: 'October 2026',
        serviceChargeIncluded: true,
        sections: [
          {
            id: 'breakfast',
            title: 'Petits-Déjeuners & Brunch Face aux Bateaux',
            description: 'Servis tous les matins dès 07:00 en terrasse face au port de plaisance',
            items: [
              {
                id: 'comptoir-b1',
                name: 'Formule Tamazirt Beldi Traditionnelle',
                localName: 'فطور تمازيرت البلدي التقليدي',
                description: 'Œufs brouillés au khlii (viande séchée) ou à l’huile d’argan, amlou artisanal, miel de thym, fromage frais jben, olives et thé à la menthe.',
                price: 65,
                isSignature: true,
                portionNotes: 'Le grand classique matinal'
              },
              {
                id: 'comptoir-b2',
                name: 'Formule Continental Marina Express',
                localName: 'فطور كونتيننتال مع الكرواسون والعصير',
                description: 'Croissant pur beurre, pain au chocolat, baguette croustillante, confitures, beurre doux, jus d’orange frais et café au choix.',
                price: 55,
                dietary: ['vegetarian']
              },
              {
                id: 'comptoir-b3',
                name: 'Pancakes Moelleux aux Fruits Frais & Miel',
                localName: 'بان كيك بالفواكه الطازجة والعسل',
                description: 'Trois pancakes dorés minute, banane, fraises fraîches, amandes effilées et filet de miel de fleurs.',
                price: 50,
                dietary: ['vegetarian']
              }
            ]
          },
          {
            id: 'brasserie',
            title: 'Brasserie, Burgers & Salades Gourmandes',
            description: 'Plats décontractés pour déjeuner ou dîner au soleil',
            items: [
              {
                id: 'comptoir-m1',
                name: 'Burger Gourmet Marina au Bœuf Frais',
                localName: 'برغر لحم بقري فاخر مع البطاطس المقلية',
                description: 'Steak haché de bœuf frais 180g, cheddar affiné fondu, oignons caramélisés, sauce barbecue maison et frites croustillantes.',
                price: 85,
                isSignature: true
              },
              {
                id: 'comptoir-m2',
                name: 'Salade César au Poulet Croustillant',
                localName: 'سلطة سيزر بالدجاج المقرمش والبارميزان',
                description: 'Cœur de romaine, aiguillettes de poulet panées dorées, croûtons à l’ail, copeaux de parmesan et sauce césar onctueuse.',
                price: 75
              },
              {
                id: 'comptoir-m3',
                name: 'Club Sandwich O’Comptoir & Frites',
                localName: 'كلوب ساندويتش بالدجاج والبيض',
                description: 'Pain de mie toasté à trois étages, filet de poulet grillé, œuf poêlé, tomate, mayonnaise légère et salade.',
                price: 70
              },
              {
                id: 'comptoir-m4',
                name: 'Tagliatelle au Saumon Frais & Crème d’Aneth',
                localName: 'معكرونة بالكريمة وقطع السلمون الطازج',
                description: 'Pâtes tagliatelles fraîches enrobées d’une crème onctueuse au poivre blanc et dés de saumon atlantique.',
                price: 95
              }
            ]
          },
          {
            id: 'douceurs-boissons',
            title: 'Bar à Jus, Crêpes & Pâtisseries',
            description: 'Cocktails vitaminés pressés à froid et douceurs d’après-midi',
            items: [
              {
                id: 'comptoir-d1',
                name: 'Cocktail Signature Zaazaa d’Agadir',
                localName: 'عصير زعزع السوسي بالفواكه الجافة',
                description: 'Onctueuse purée d’avocat frais, lait, amandes, dattes Medjool, raisins secs, chocolat et chantilly.',
                price: 45,
                isSignature: true
              },
              {
                id: 'comptoir-d2',
                name: 'Crêpe Croustillante Nutella & Banane',
                localName: 'كريب بالشوكولاتة والموز والمكسرات',
                description: 'Crêpe fine dorée garnie de Nutella fondant, rondelles de banane fraîche et amandes grillées concassées.',
                price: 45,
                dietary: ['vegetarian']
              },
              {
                id: 'comptoir-d3',
                name: 'Jus d’Orange de Taroudant Pressé Minute',
                localName: 'عصير برتقال طبيعي معصور طازج',
                description: 'Pressé à la minute à partir d’oranges gorgées de soleil de la plaine du Souss.',
                price: 30,
                dietary: ['vegetarian', 'vegan']
              }
            ]
          }
        ]
      },
      pros: [
        "Prime waterfront location with broad yacht-basin views.",
        "Very generous and affordable traditional breakfast menus.",
        "Open continuous hours from early morning until 02:00."
      ],
      cons: [
        "Service can be slow during peak afternoon and brunch rushes.",
        "Strictly non-alcoholic venue."
      ],
      googleRating: 3.2,
      googleReviewCount: 310,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 110,
      theforkRating: 3.4,
      theforkReviewCount: 60,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 310,
      openTime: "07:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "N°4, Résidence 15, Route Marina, Complexe Marina, Agadir 80000, Morocco",
        lat: 30.4228,
        lng: -9.6171
      },
      googleMapsUrl: "https://maps.google.com/?q=O+Comptoir+Marina+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212808567024",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/ocomptoiragadir",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-ardoise-gourmande",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["French-Moroccan", "Seafood", "International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["romantic", "refined", "intimate", "charming"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 24,
      isHalal: false,
      halalStatus: "unknown",
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
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["fine", "alcohol", "dinner", "quiet"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "L'Ardoise Gourmande",
      neighborhood: "Secteur Résidentiel",
      description: "An acclaimed French bistronomic jewel operated by Sandrine and Fabrice near the Cité Suisse border. Celebrated for high-precision cooking of fresh Atlantic fish, Burgundy escargots, fine cheeses, and expertly paired French wines.",
      tip: "Book in advance for dinner. Allow Fabrice to select the wine pairing for your Saint-Pierre or beef tenderloin.",
      badge: "splurge",
      bestDishes: [
        "Saint-Pierre aux Noix de Saint-Jacques",
        "Filet de Bœuf Chimichurri",
        "Tartare Asiatique au Guacamole",
        "Escargots de Bourgogne"
      ],
      pros: [
        "Authentic French market-fresh cooking executed with great skill.",
        "Exceptional wine recommendations and hospitality by the hosts.",
        "Calm residential setting away from tourist noise."
      ],
      cons: [
        "Closed on Sundays and Wednesday evenings.",
        "Kitchen closes early (no orders after 22:00)."
      ],
      googleRating: 4.8,
      googleReviewCount: 575,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 220,
      theforkRating: 4.7,
      theforkReviewCount: 90,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 575,
      openTime: "12:00",
      closeTime: "22:00",
      exactAddressAndCoordinates: {
        address: "Immeuble Hasna, Boulevard Hassan II (Face Tribunal Administratif), Agadir 80000, Morocco",
        lat: 30.4229,
        lng: -9.6027
      },
      googleMapsUrl: "https://maps.google.com/?q=L+Ardoise+Gourmande+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528848855",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-ma-poele",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "couple", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Grill & BBQ", "Italian", "International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["casual", "warm", "lively", "friendly"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9,
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
      paymentMethods: ["cash", "credit_card"],
      tags: ["late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Ma Poêle Smoke House",
      neighborhood: "Secteur Résidentiel",
      description: "A popular wood-fired smokehouse tucked into a quiet square near Avenue des FAR. Famed for its house-smoked meats, tender grilled octopus, artisanal pizzas, and handmade pasta drizzled with herb-infused olive oil.",
      tip: "Try the smoked octopus or the mixed grill platter accompanied by their fragrant spiced rice.",
      badge: "local-favorite",
      bestDishes: [
        "Smoked Octopus",
        "Wood-Fired Pizza Ma Poêle",
        "Char-Grilled Kefta Skewers",
        "Herb Oil Pasta"
      ],
      pros: [
        "Unbeatable value for money on slow-smoked and grilled specialties.",
        "Friendly, hardworking staff and quick turnaround.",
        "Open until 01:00 AM daily."
      ],
      cons: [
        "Simple outdoor street terrace without luxury decor.",
        "Strictly non-alcoholic."
      ],
      googleRating: 4.8,
      googleReviewCount: 1190,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 180,
      theforkRating: 4.6,
      theforkReviewCount: 80,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1190,
      openTime: "11:30",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Local 18 Immeuble F, Rue de l'Hôtel de Ville, Agadir 80000, Morocco",
        lat: 30.4208,
        lng: -9.5992
      },
      googleMapsUrl: "https://maps.google.com/?q=Ma+Poele+Smoke+House+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212679523257",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://mapoelesmokehouse.com",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-saykouk-rooftop",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["rooftop", "traditional", "hidden-gem"],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["bohemian", "cozy", "melodic", "authentic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
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
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "terrace",
        "budget",
        "dry",
        "dinner",
        "live-music",
        "tagine",
        "couscous"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Saykouk Rooftop",
      neighborhood: "Talborjt",
      description: "A charming bohemian-chic rooftop restaurant nestled in an authentic Talborjt townhouse. Famous for traditional Moroccan family recipes, sunset views toward the Agadir mountains, and acoustic live Gnawa evenings.",
      tip: "Book a rooftop table before sunset to enjoy the mountain view, and ask if a Gnawa acoustic session is scheduled for the night.",
      badge: "hidden-gem",
      bestDishes: [
        "Chicken Rfissa with Msemmen",
        "Lamb Tagine with Prunes",
        "Seafood Pastilla",
        "Friday Couscous"
      ],
      pros: [
        "One of the only authentic rooftop dining spaces inside historic Talborjt.",
        "Warm bohemian ambiance with regular Gnawa musical performances.",
        "Delicious home-cooked Moroccan recipes crafted with fresh spices."
      ],
      cons: [
        "Multi-story staircase climb required to reach the rooftop terrace.",
        "Alcohol-free venue."
      ],
      googleRating: 4.6,
      googleReviewCount: 450,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 80,
      theforkRating: 4.5,
      theforkReviewCount: 40,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 450,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "29 Rue Yacoub El Mansour, Talborjt, Agadir 80000, Morocco",
        lat: 30.4239,
        lng: -9.5947
      },
      googleMapsUrl: "https://maps.google.com/?q=Saykouk+Rooftop+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212660548273",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/saykouk_rooftop",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-yuzaki",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["hidden-gem", "casual"],
      foodStyles: ["International", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["stylish", "chic", "trendy", "lively"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["sushi", "fusion", "dry", "dinner", "lunch"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "YUZAKI",
      neighborhood: "Founty",
      description: "A contemporary Japanese sushi and Asian fusion destination in Agadir Bay. Celebrated for inventive sushi tacos, tempura rolls, and fresh sashimi served in a sleek, vibrant dining room.",
      tip: "Try their signature crispy salmon sushi tacos and rock shrimp tempura rolls.",
      badge: "local-favorite",
      bestDishes: [
        "Salmon Sushi Tacos",
        "Rock Shrimp Rolls",
        "Dragon Roll",
        "Tuna Tartare"
      ],
      pros: [
        "Fresh and innovative Japanese and Asian fusion options.",
        "Sleek, stylish atmosphere in Agadir Bay / Founty.",
        "Prompt service and good delivery coverage."
      ],
      cons: [
        "Can get crowded and noisy during weekend dinner hours.",
        "Alcohol-free establishment."
      ],
      googleRating: 4.3,
      googleReviewCount: 738,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 120,
      theforkRating: 4.4,
      theforkReviewCount: 80,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 738,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Agadir Bay, Founty, Agadir 80000, Morocco",
        lat: 30.4085,
        lng: -9.5682
      },
      googleMapsUrl: "https://maps.google.com/?q=YUZAKI+Agadir+Bay",
      reservationMethod: ["phone"],
      reservationContact: "+212528238389",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/yuzaki_restaurant",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-la-madrague",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "seniors", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Seafood", "French-Moroccan", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["elegant", "maritime", "scenic", "romantic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 32,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["terrace", "alcohol", "dinner", "fine", "seafood"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Madrague",
      neighborhood: "Marina Agadir",
      description: "An upscale French and Mediterranean seafood landmark perched right on the northern quay of Agadir Marina. Renowned for its live lobster pool, ocean-facing terrace overlooking luxury yachts, and masterfully prepared fresh Atlantic fish.",
      tip: "Book a quayside terrace table around 19:00 for the sunset glow over the yachts, and ask for the catch of the day from the live seawater tanks.",
      badge: "splurge",
      bestDishes: [
        "Grilled Sea Bass in Herb Crust",
        "Live Atlantic Lobster from the Tank",
        "Sole Meunière",
        "Gratinated Oysters",
        "Classic Chocolate Fondant"
      ],
      menu: {
        currency: 'MAD',
        lastUpdated: 'Historical Reference & Marina Archive',
        serviceChargeIncluded: true,
        sections: [
          {
            id: 'crustaces-entrees',
            title: 'Entrées Nobles, Vivier & Coquillages',
            description: 'Produits d’exception issus du vivier marin d’eau de mer et de la criée',
            items: [
              {
                id: 'madrague-e1',
                name: 'Huîtres Fraîches de Oualidia N°2',
                localName: 'محار الوليدية الطازج على الثلج',
                description: 'Douzaine d’huîtres fraîches ouvertes à la minute sur glace pilée, vinaigre d’échalote et citron.',
                price: 140,
                isSignature: true,
                portionNotes: 'Servies par 6 ou 12'
              },
              {
                id: 'madrague-e2',
                name: 'Bisque de Homard Safranée aux Croûtons',
                localName: 'حساء الكركند الملكي بالزعفران الحر',
                description: 'Bisque onctueuse mijotée aux carapaces de homard bleu, crème fraîche fermière et rouille.',
                price: 95,
                isSignature: true
              },
              {
                id: 'madrague-e3',
                name: 'Tartare de Loup de Mer aux Baies Roses & Yuzu',
                localName: 'تارتار سمك الدرعي الطازج بالحمضيات',
                description: 'Dés de bar sauvage taillés au couteau, émulsion d’huile d’olive vierge, ciboulette et fleur de sel.',
                price: 120
              }
            ]
          },
          {
            id: 'poissons-nobles',
            title: 'Poissons Nobles & Homards du Vivier',
            description: 'Crustacés vivants et poissons sauvages préparés selon les règles de la haute cuisine française',
            items: [
              {
                id: 'madrague-p1',
                name: 'Homard Royal Grillé à l’Armoricaine',
                localName: 'كركند أطلسي حي مشوي مع صلصة الأرموريكان',
                description: 'Homard bleu sélectionné vivant du vivier, grillé aux herbes fraîches et flambé au cognac.',
                price: 380,
                isSignature: true,
                portionNotes: 'Pêché vivant du vivier'
              },
              {
                id: 'madrague-p2',
                name: 'Loup de Mer (Bar) Sauvage en Croûte de Sel',
                localName: 'سمك الدرعي الملكي في قشرة الملح البحري',
                description: 'Bar entier cuit à l’étouffée dans sa coque de gros sel marin pour préserver tout son moelleux naturel.',
                price: 240,
                isSignature: true
              },
              {
                id: 'madrague-p3',
                name: 'Sole Meunière Dorée au Beurre d’Isigny',
                localName: 'سمك الصول الكبير بالزبدة والليمون',
                description: 'Belle sole de ligne poêlée au beurre noisette, jus de citron jaune et pommes vapeur persillées.',
                price: 230
              },
              {
                id: 'madrague-p4',
                name: 'Poêlée de Langoustines & Noix de Saint-Jacques',
                localName: 'جمبري لانغوستين محمر مع القواقع البحرية',
                description: 'Saisies à vif à la fleur de thym, tombée d’épinards frais et velouté coraillé.',
                price: 290,
                isSignature: true
              }
            ]
          },
          {
            id: 'desserts',
            title: 'Desserts Fins & Pâtisseries Françaises',
            description: 'Créations sucrées classiques réalisées par la brigade pâtissière',
            items: [
              {
                id: 'madrague-d1',
                name: 'Soufflé Chaud Traditionnel au Grand Marnier',
                localName: 'سوفليه فرنسي ساخن بالبرتقال',
                description: 'Soufflé aérien servi minute à la sortie du four, cœur fondant parfumé à l’orange amère.',
                price: 90,
                isSignature: true,
                dietary: ['vegetarian']
              },
              {
                id: 'madrague-d2',
                name: 'Mille-Feuille Croustillant Vanille Bourbon',
                localName: 'ميل فوي كلاسيكي مقرمش بكريمة الفانيليا',
                description: 'Feuilletage caramélisé inversé, crème mousseline légère aux gousses de vanille de Madagascar.',
                price: 80,
                dietary: ['vegetarian']
              }
            ]
          }
        ]
      },
      pros: [
        "Unobstructed, tranquil view over the moored yachts and marina basin.",
        "Outstanding seafood freshness thanks to live lobster and shellfish tanks on-site.",
        "Refined French wine selection and attentive service."
      ],
      cons: [
        "Premium pricing reflecting its marina waterfront location.",
        "Can get breezy on the terrace during spring and late autumn evenings."
      ],
      googleRating: 4.4,
      googleReviewCount: 980,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 620,
      theforkRating: 4.3,
      theforkReviewCount: 210,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 980,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Quai Nord, Complexe Marina d'Agadir, Agadir 80000, Morocco",
        lat: 30.4233,
        lng: -9.6178
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Madrague+Marina+Agadir",
      reservationMethod: ["phone", "email"],
      reservationContact: "+212528842424",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/la_madrague_ag",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-nazka",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner", "drinks", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["International", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "adventure"],
      vibeTags: ["glamorous", "coastal", "chic", "trendy"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
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
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "closed",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["terrace", "alcohol", "dinner", "sunset", "late-night"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Nazka by Buddha-Bar",
      neighborhood: "Secteur Balnéaire",
      description: "A luxurious Pan-Latin and Nikkei beachfront lounge at The View Agadir hotel along Boulevard du 20 Août. Combines oceanfront cabanas, Peruvian-Japanese ceviches, anticucho skewers, signature botanical cocktails, and sunset DJ sessions.",
      tip: "Reserve ahead for sunset drinks on the beachfront deck, and expect 5-star hotel pricing (205–265 MAD mains, 180 MAD signature cocktails) with a smart-casual evening dress code.",
      badge: "splurge",
      bestDishes: [
        "Peruvian Carretillero Ceviche",
        "Taquito Nikkei",
        "Empanada de Carne",
        "Pulpo Anticuchero",
        "Churros"
      ],
      pros: [
        "Chic open-air beachfront terrace and cabanas at The View Agadir with sunset DJ sets.",
        "Creative Nikkei ceviches, Peruvian anticuchos, and botanical mixology program.",
        "Valet parking and private hotel access completely free from beach touts."
      ],
      cons: [
        "High 5-star luxury hotel pricing relative to portion sizes (200+ MAD plates, 180 MAD cocktails).",
        "Strict smart-casual dress code and occasional slow service during busy sunset hours."
      ],
      googleRating: 4.1,
      googleReviewCount: 280,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 95,
      theforkRating: 4.3,
      theforkReviewCount: 60,
      restaurantguruRating: 4.0,
      restaurantguruReviewCount: 280,
      openTime: "10:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "The View Hotel, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4101,
        lng: -9.5976
      },
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+View+Agadir+Boulevard+du+20+Aout",
      reservationMethod: ["phone", "website", "email"],
      reservationContact: "+212 5282-94040",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://nazkaagadir.com",
      instagram: "https://instagram.com/nazkaagadir",
      languagesSpoken: ["French", "English", "Spanish", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "Verified 2026 (The View Agadir)",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "cold-bites",
            title: "Cold Bites & Ceviches (Entrées Froides)",
            description: "Fresh Atlantic seafood ceviches, Nikkei bites, and guacamole",
            items: [
              {
                id: "nazka-guacamole",
                name: "Classic Guacamole",
                localName: "غواكامولي كلاسيكي طازج مع رقائق التورتيلا",
                translations: {
                  ar: "غواكامولي الأفوكادو الكلاسيكي مع رقائق الذرة المقرمشة",
                  en: "Freshly mashed avocado guacamole with lime, cilantro, and crispy tortilla chips",
                  es: "Guacamole clásico recién hecho con lima, cilantro y totopos crujientes",
                  de: "Klassische frische Guacamole mit Limette, Koriander und Tortilla-Chips"
                },
                price: 180,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free"]
              },
              {
                id: "nazka-ceviche",
                name: "Peruvian Carretillero Ceviche",
                localName: "سيفيتشي بيروفي تقليدي بصلصة ليتشي دي تيغري",
                translations: {
                  ar: "سيفيتشي السمك البيروفي بصلصة الحمضيات والفلفل الحار",
                  en: "Line-caught Atlantic white fish cured in leche de tigre with sweet potato and cancha",
                  es: "Ceviche carretillero peruano en leche de tigre con camote y maíz cancha",
                  de: "Peruanische Ceviche Carretillero in Leche de Tigre mit Süßkartoffel und Cancha-Mais"
                },
                price: 210,
                isSignature: true,
                isSpicy: true,
                dietary: ["halal", "gluten-free"]
              },
              {
                id: "nazka-taquito-nikkei",
                name: "Taquito Nikkei",
                localName: "تاكيتو نيكي مقرمش بالتونة وصلصة البونزو",
                translations: {
                  ar: "تاكيتو نيكي بالتونة الطازجة وصلصة البونزو اليابانية",
                  en: "Crispy nori tacos filled with seasoned tuna tartare, avocado, and Nikkei ponzu glaze",
                  es: "Taquitos crujientes estilo Nikkei con tartar de atún, aguacate y glaseado ponzu",
                  de: "Knusprige Nikkei-Taquitos mit Thunfisch-Tatar, Avocado und Ponzu-Glasur"
                },
                price: 215,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "nazka-ostras-chalaca",
                name: "Ostras a la Chalaca",
                localName: "محار أ لا تشالاكا بالبصل والطماطم والليمون",
                translations: {
                  ar: "محار طازج على الطريقة البيروفية بالبصل والطماطم والليمون",
                  en: "Fresh Moroccan oysters topped with Peruvian chalaca salsa of red onion, tomato, and lime",
                  es: "Ostras frescas a la chalaca con cebolla roja, tomate, maíz y lima",
                  de: "Frische Austern a la Chalaca mit roter Zwiebel-Tomaten-Limetten-Salsa"
                },
                price: 225,
                dietary: ["halal", "gluten-free"]
              },
              {
                id: "nazka-quinoa-poke",
                name: "Quinoa Poke",
                localName: "بوكي بول بالكينوا والأفوكادو والخضار الطازجة",
                translations: {
                  ar: "طبق الكينوا الصحي بالأفوكادو وصلصة السمسم",
                  en: "Andean quinoa bowl with avocado, edamame, crispy vegetables, and sesame dressing",
                  es: "Bowl de quinoa andina con aguacate, edamame y aliño de sésamo",
                  de: "Quinoa-Poke-Bowl mit Avocado, Edamame und Sesam-Dressing"
                },
                price: 230,
                dietary: ["vegetarian", "vegan", "halal"]
              }
            ]
          },
          {
            id: "hot-bites",
            title: "Hot Bites (Entrées Chaudes)",
            description: "Warm Pan-Latin street food bites to share by the beach",
            items: [
              {
                id: "nazka-taco-pastor",
                name: "Taco al Pastor",
                localName: "تاكو أل باستور متبل مع الأناناس المشوي",
                translations: {
                  ar: "تاكو لحم متبل على الطريقة اللاتينية مع الأناناس والكزبرة",
                  en: "Spiced marinated meat tacos topped with charred pineapple, cilantro, and salsa verde",
                  es: "Tacos al pastor especiados con piña asada, cilantro y salsa verde",
                  de: "Würzige Tacos al Pastor mit gegrillter Ananas, Koriander und Salsa Verde"
                },
                price: 205,
                isSpicy: true,
                dietary: ["halal"]
              },
              {
                id: "nazka-banana-tostones",
                name: "Banana Tostones",
                localName: "توستونيس الموز المقرمش مع صلصة الأفوكادو",
                translations: {
                  ar: "رقائق الموز الأخضر المقلية والمقرمشة مع التوابل اللاتينية",
                  en: "Twice-fried crispy green plantain medallions served with zesty Latin dips",
                  es: "Tostones crujientes de plátano verde frito con salsas latinas",
                  de: "Knusprige zweifach frittierte Kochbananen-Tostones mit Dips"
                },
                price: 215,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free"]
              },
              {
                id: "nazka-empanada-carne",
                name: "Empanada de Carne",
                localName: "إمبانادا اللحم البقري المتبل والمخبوزة حتى القرمشة",
                translations: {
                  ar: "فطائر إمبانادا محشوة باللحم البقري المتبل والأعشاب",
                  en: "Golden baked pastry turnovers filled with slow-braised spiced beef and olives",
                  es: "Empanadas doradas rellenas de carne braseada con especias y aceitunas",
                  de: "Goldbraun gebackene Empanadas gefüllt mit geschmortem gewürztem Rindfleisch"
                },
                price: 240,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "mains-grill",
            title: "Mains & Anticuchos (Plats & Brochettes)",
            description: "Charcoal-grilled Peruvian skewers and Pan-Latin mains",
            items: [
              {
                id: "nazka-chicken-pollada",
                name: "Chicken Pollada",
                localName: "دجاج بويادا متبل ومشوي على الفحم بصلصة الفلفل البيروفي",
                translations: {
                  ar: "دجاج مشوي بتتبيلة البويادا البيروفية بالأعشاب والحمضيات",
                  en: "Peruvian-style marinated charcoal chicken served with aji amarillo cream",
                  es: "Pollo a la pollada peruana marinado a la brasa con crema de ají amarillo",
                  de: "Peruanisches Pollada-Hähnchen vom Holzkohlegrill mit Ají-Amarillo-Creme"
                },
                price: 245,
                dietary: ["halal", "gluten-free"]
              },
              {
                id: "nazka-pulpo-anticuchero",
                name: "Pulpo Anticuchero",
                localName: "أخطبوط أنتيكوتشيرو مشوي بصلصة الفلفل البيروفي",
                translations: {
                  ar: "أخطبوط أطلسي مشوي بتتبيلة أنتيكوتشيرو البيروفية",
                  en: "Char-grilled Atlantic octopus glazed in smoky Peruvian anticuchera chili marinade",
                  es: "Pulpo a la brasa glaseado en salsa anticuchera peruana ahumada",
                  de: "Gegrillter Atlantik-Oktopus in rauchiger peruanischer Anticuchero-Marinade"
                },
                price: 255,
                isSignature: true,
                isSpicy: true,
                dietary: ["halal", "gluten-free"]
              },
              {
                id: "nazka-mixed-anticuchos",
                name: "Mixed Anticuchos",
                localName: "تشكيلة أسياخ أنتيكوتشوس المشوية على الفحم",
                translations: {
                  ar: "تشكيلة أسياخ لحم ودجاج مشوية على الطريقة البيروفية",
                  en: "Assorted charcoal-grilled Peruvian anticucho skewers with smoky chili dips",
                  es: "Brochetas mixtas de anticuchos peruanos a la parrilla con salsas picantes",
                  de: "Gemischte peruanische Anticucho-Grillspieße mit rauchigen Chili-Saucen"
                },
                price: 265,
                dietary: ["halal", "gluten-free"]
              }
            ]
          },
          {
            id: "sides-desserts",
            title: "Sides & Desserts (Accompagnements & Douceurs)",
            description: "Crisp sides and Latin American desserts",
            items: [
              {
                id: "nazka-potatoes-chimichurri",
                name: "Potatoes al Chimichurri",
                localName: "بطاطس مشوية بصلصة الشيميشوري بالأعشاب",
                translations: {
                  ar: "بطاطس ذهبية بصلصة الشيميشوري الخضراء",
                  en: "Crispy roasted baby potatoes tossed in herbaceous garlic chimichurri",
                  es: "Patatas crujientes salteadas con chimichurri fresco de hierbas",
                  de: "Knusprige Kartoffeln geschwenkt in frischem Kräuter-Chimichurri"
                },
                price: 60,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free"]
              },
              {
                id: "nazka-truffle-fries",
                name: "Truffle French Fries",
                localName: "بطاطس مقلية بالكمأة السوداء وجبن البارميزان",
                translations: {
                  ar: "بطاطس مقلية فاخرة بنكهة الكمأة",
                  en: "Crispy hand-cut fries finished with truffle oil and parmesan",
                  es: "Patatas fritas crujientes con aceite de trufa y parmesano",
                  de: "Knusprige Pommes Frites mit Trüffelöl und Parmesan"
                },
                price: 90,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "nazka-tiramisu",
                name: "Tiramisù Classico",
                localName: "تيراميسو كلاسيكي بجبن الماسكاربوني والقهوة",
                translations: {
                  ar: "تيراميسو إيطالي كلاسيكي",
                  en: "Classic espresso-soaked mascarpone tiramisu",
                  es: "Tiramisú clásico con mascarpone y café espresso",
                  de: "Klassisches Tiramisu mit Espresso und Mascarpone"
                },
                price: 49,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "nazka-churros",
                name: "Churros",
                localName: "تشوروس مقرمش مع صلصة الشوكولاتة والدولسي دي ليتشي",
                translations: {
                  ar: "تشوروس لاتيني ساخن مع صلصة الكراميل والشوكولاتة",
                  en: "Warm cinnamon-sugar churros served with dulce de leche and dark chocolate sauce",
                  es: "Churros calientes con azúcar y canela, dulce de leche y chocolate",
                  de: "Warme Zimt-Zucker-Churros mit Dulce de Leche und Schokoladensauce"
                },
                price: 80,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "nazka-tres-leches",
                name: "Tres Leches",
                localName: "كيك تريس ليتشيس اللاتيني بالحليب المكثف والفانيليا",
                translations: {
                  ar: "كعكة الحليب الثلاثية اللاتينية بالكريمة المخفوقة",
                  en: "Latin American sponge cake soaked in three milks and topped with whipped cream",
                  es: "Bizcocho tradicional de tres leches con crema batida de vainilla",
                  de: "Lateinamerikanischer Tres-Leches-Kuchen mit Vanille-Schlagsahne"
                },
                price: 90,
                dietary: ["vegetarian", "halal"]
              }
            ]
          },
          {
            id: "cocktails-drinks",
            title: "Signature Cocktails & Drinks (Bar & Lounge)",
            description: "Buddha-Bar mixology, Agua Fresca mocktails, and soft drinks",
            items: [
              {
                id: "nazka-signature-cocktails",
                name: "Signature Cocktails (Smoked Negroni, The View Mai Tai, Strawberry Basil)",
                localName: "كوكتيلات نازكا المبتكرة (مع الكحول)",
                translations: {
                  ar: "كوكتيلات نازكا المميزة المحضرة يدوياً (يحتوي على الكحول)",
                  en: "Craft house cocktails — Smoked Negroni, The View Mai Tai, or Strawberry Basil Lemonade",
                  es: "Cócteles de autor — Smoked Negroni, The View Mai Tai o Strawberry Basil Lemonade",
                  de: "Signature-Cocktails — Smoked Negroni, The View Mai Tai oder Strawberry Basil Lemonade"
                },
                price: 180,
                isSignature: true,
                portionNotes: "Contains alcohol"
              },
              {
                id: "nazka-agua-fresca",
                name: "Agua Fresca Mocktails (Lima, Playa Caribe, Tulum)",
                localName: "موكتيلات أغوا فريسكا المنعشة الخالية من الكحول",
                translations: {
                  ar: "موكتيلات الفواكه الطازجة والأعشاب (خالية من الكحول)",
                  en: "Botanical alcohol-free Agua Fresca mocktails crafted with tropical fruits and citrus",
                  es: "Mocktails botánicos Agua Fresca sin alcohol de frutas tropicales",
                  de: "Alkoholfreie Agua-Fresca-Mocktails mit tropischen Früchten und Zitrus"
                },
                price: 120,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free"]
              },
              {
                id: "nazka-soft-drinks",
                name: "Soft Drinks & Mineral Water",
                localName: "مشروبات غازية ومياه معدنية",
                translations: {
                  ar: "مشروبات غازية ومياه معدنية",
                  en: "Chilled soft drinks (55 MAD) and still or sparkling mineral water (45–100 MAD)",
                  es: "Refrescos (55 MAD) y agua mineral con o sin gas (45–100 MAD)",
                  de: "Erfrischungsgetränke (55 MAD) und Mineralwasser (45–100 MAD)"
                },
                price: 55,
                dietary: ["vegetarian", "vegan", "halal", "gluten-free"],
                portionNotes: "Mineral water from 45 MAD"
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        // ── WORRY SUMMARY: BILL — luxury 5-star hotel menu prices?
        tag: "Luxury Hotel",
        tagColor: "money",
        tone: "caution",
        description: "Prices are printed on the menu, but expect high 5-star resort rates (205–265 MAD mains, 180 MAD cocktails) for modest portions.",
        state: "verified",
        source: "The View Hotels / Restaurant Guru"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        // ── WORRY SUMMARY: HYGIENE — 5-star resort seafood & ice standards?
        tag: "5-Star Standards",
        tagColor: "hygiene",
        tone: "good",
        description: "Operated inside The View Agadir luxury hotel with strict international cold-chain standards for raw ceviches and cocktails.",
        state: "verified",
        source: "The View Agadir / Buddha-Bar standards"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        // ── WORRY SUMMARY: FOOD — authentic Nikkei/Peruvian vs Moroccan?
        tag: "Nikkei Fusion",
        tagColor: "food",
        tone: "good",
        description: "Serves genuine Peruvian-Japanese (Nikkei) ceviches, empanadas, and anticuchos rather than traditional Moroccan cuisine.",
        state: "verified",
        source: "Nazka Agadir / Sam.ma"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        // ── WORRY SUMMARY: ATMOSPHERE — private beachfront terrace?
        tag: "Beachfront Deck",
        tagColor: "safety",
        tone: "good",
        description: "Chic private beachfront lounge with sunset DJs and hotel valet parking, completely sheltered from boardwalk street touts.",
        state: "verified",
        source: "Nazka Agadir / Visitor reviews"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        // ── WORRY SUMMARY: SERVICE — dress code & peak-hour delays?
        tag: "Formal & Busy",
        tagColor: "alert",
        tone: "caution",
        description: "Enforces a smart-casual evening dress code; while many staff are warm, reviews note occasional slow or stiff service at sunset.",
        state: "verified",
        source: "Restaurant Guru / Visitor reviews"
      }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-coup-de-foudre",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner", "drinks", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Seafood", "Mediterranean", "International"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "adventure"],
      vibeTags: ["glamorous", "festive", "scenic", "chic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 35,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "terrace", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Coup de Foudre",
      neighborhood: "Secteur Balnéaire",
      description: "A stylish oceanfront restaurant and dinner-show lounge right on the Front de Mer. Blends Mediterranean seafood platters and French gastronomy with an energetic cabaret atmosphere, resident DJs, and late-night service until 02:00.",
      tip: "Book in advance on WhatsApp for the weekend cabaret dinner-show; save room for their creative house desserts.",
      badge: "splurge",
      bestDishes: [
        "Royal Atlantic Seafood Platter",
        "Grilled Tiger Prawns",
        "Slow-Braised Beef Ribs",
        "House Gourmet Pastries"
      ],
      pros: [
        "Vibrant dinner-show entertainment right on the Atlantic promenade.",
        "Open continuously from 11:00 AM until 02:00 AM.",
        "Attentive, guest-oriented floor team."
      ],
      cons: [
        "Music volume turns up significantly later in the evening.",
        "Higher pricing reflecting the dinner-show entertainment package."
      ],
      googleRating: 4.7,
      googleReviewCount: 440,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 180,
      theforkRating: 4.5,
      theforkReviewCount: 85,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 440,
      openTime: "11:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Front de Mer, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4172,
        lng: -9.6028
      },
      googleMapsUrl: "https://maps.google.com/?q=Coup+de+Foudre+Agadir",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212662575711",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://coupdefoudre.ma",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-tapis-rouge",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "seniors", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["French-Moroccan", "Seafood", "International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["cosmopolitan", "refined", "warm", "romantic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 28,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["fine", "alcohol", "dinner", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Tapis Rouge by Little Norway",
      neighborhood: "Secteur Balnéaire",
      description: "A celebrated dining institution set within Complexe Tamlalt opposite Casino Mirage. Blends Nordic and French culinary precision with Moroccan flavors, serving monkfish in mango-coconut sauce, prime beef cuts, and delicate pastillas.",
      tip: "The monkfish in coconut-mango sauce is their signature standout. Make a dinner reservation as it fills up with hotel concierges recommendations.",
      badge: "splurge",
      bestDishes: [
        "Monkfish in Mango-Coconut Sauce",
        "Beef Fillet with Truffle Sauce",
        "Norwegian Trio of Seafood",
        "Seafood Pastilla"
      ],
      pros: [
        "Original fusion of Scandinavian culinary technique and Moroccan seafood.",
        "Consistently polite, long-tenured staff and welcoming owners.",
        "Extensive and thoughtful wine list."
      ],
      cons: [
        "Closed on Mondays.",
        "Located back within the complex arcade rather than having direct beach views."
      ],
      googleRating: 4.5,
      googleReviewCount: 800,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 560,
      theforkRating: 4.4,
      theforkReviewCount: 190,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 800,
      openTime: "12:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Complexe Tamlalt, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4128,
        lng: -9.6002
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Tapis+Rouge+by+Little+Norway+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528840848",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-el-toro",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Grill & BBQ", "Seafood", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["first-timer", "adventure"],
      vibeTags: ["lively", "breezy", "casual", "coastal"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 22,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["terrace", "alcohol", "dinner", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "El Toro",
      neighborhood: "Secteur Balnéaire",
      description: "A renowned Spanish and Mediterranean beachfront steakhouse on Lot N°7 Front de Mer. Celebrated for dry-aged beef cuts grilled over charcoal embers, genuine seafood paellas, and front-row Atlantic promenade seating.",
      tip: "Order the Valencian seafood paella (cooked fresh to order, takes ~25 mins) while sharing tapas on the terrace.",
      badge: "local-favorite",
      bestDishes: [
        "Dry-Aged T-Bone Steak",
        "Authentic Seafood Paella",
        "Crispy Calamari Platter",
        "Garlic Gambas"
      ],
      pros: [
        "Prime location directly facing the open sandy beach promenade.",
        "Exceptional meat-aging program rarely found in beachfront spots.",
        "Very generous portion sizes for hearty family dinners."
      ],
      cons: [
        "Service can slow down noticeably during peak summer sunset hours.",
        "Terrace can feel breezy when Atlantic winds pick up."
      ],
      googleRating: 4.3,
      googleReviewCount: 2200,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 1100,
      theforkRating: 4.2,
      theforkReviewCount: 350,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 2200,
      openTime: "11:30",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Lot N°7, Front de Mer, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4184,
        lng: -9.6025
      },
      googleMapsUrl: "https://maps.google.com/?q=El+Toro+Agadir+Front+de+Mer",
      reservationMethod: ["phone"],
      reservationContact: "+212626469374",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://eltoroagadir.com",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Spanish", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-le-flore",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Seafood", "French-Moroccan", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["friendly", "casual", "coastal", "warm"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["terrace", "alcohol", "dinner", "budget", "seafood"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Le Flore",
      neighborhood: "Secteur Balnéaire",
      description: "A beloved, long-established seafood bistro positioned on Promenade Tawada facing the beach. Famed for its generous ocean platters, fresh Saint-Pierre, tender steaks, and attentive personal hospitality from the owner.",
      tip: "Request an outdoor table right on the promenade railings for prime people-watching and cool ocean breezes during lunch or sunset.",
      badge: "local-favorite",
      bestDishes: [
        "Atlantic Seafood Platter",
        "Grilled Saint-Pierre Fish",
        "Traditional Fish Soup with Rouille",
        "Pepper Steak"
      ],
      pros: [
        "Authentic seaside bistro feel with front-row view of the beach promenade.",
        "Fresh daily seafood catches cooked simply and cleanly.",
        "Full licensed bar serving cold beer and Moroccan wines."
      ],
      cons: [
        "Compact terrace with tables set fairly close together.",
        "Can get busy and bustling around lunch and dinner changeovers."
      ],
      googleRating: 4.4,
      googleReviewCount: 680,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 1350,
      theforkRating: 4.1,
      theforkReviewCount: 320,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 680,
      openTime: "11:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Promenade Tawada, Front de Mer, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.422,
        lng: -9.6085
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Le+Flore+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528848839",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-clay-oven",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["International", "Vegetarian/Vegan"],
      cuisineTags: ["international"],
      archetypeAffinity: ["first-timer", "nomad"],
      vibeTags: ["warm", "hospitable", "cozy", "flavorful"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["budget", "dry", "dinner", "lunch"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Clay Oven Agadir",
      neighborhood: "Founty (Baie des Palmiers)",
      description: "Agadir's premier authentic Indian table, situated within the Atlantic Ocean View Hotel in Founty. Renowned for its genuine tandoor oven cooking, aromatic butter chicken, garlic cheese naans, and rich biryanis.",
      tip: "Portions are very generous and meant for sharing. The kitchen happily dials the spice heat up or down upon request, making it ideal for families.",
      badge: "local-favorite",
      bestDishes: [
        "Butter Chicken",
        "Chicken Tikka Masala",
        "Garlic Cheese Naan",
        "Lamb Biryani",
        "Tandoori Mixed Grill Platter"
      ],
      pros: [
        "Uncompromising authentic Indian flavors and tandoor-baked flatbreads.",
        "Extensive vegetarian menu options.",
        "Clean, tastefully decorated interior with friendly, attentive staff."
      ],
      cons: [
        "Strictly alcohol-free establishment.",
        "Located inside a hotel premises slightly back from the beachfront strip."
      ],
      googleRating: 4.8,
      googleReviewCount: 540,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 140,
      theforkRating: 4.5,
      theforkReviewCount: 90,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 540,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Hôtel Atlantic Ocean View, Boulevard de Oued Souss, Founty (Baie des Palmiers), Agadir 80000, Morocco",
        lat: 30.4042,
        lng: -9.5895
      },
      googleMapsUrl: "https://maps.google.com/?q=Clay+Oven+Agadir+Founty",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212642100010",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://clayoven.ma",
      instagram: "https://instagram.com/clayoven.agadir",
      languagesSpoken: ["English", "French", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-vanisca",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["French-Moroccan", "Seafood", "Italian", "Mediterranean"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["stylish", "chic", "romantic", "refined"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "budget", "dry", "dinner", "seafood"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Vanisca",
      neighborhood: "Founty (Baie des Palmiers)",
      description: "A stylish and romantic culinary favorite located in the Sonaba sector of Agadir Bay / Founty. Celebrated for slow-braised lamb shank with orange glaze, fresh Saint-Pierre in bisque, seafood risotto, and an upscale contemporary decor.",
      tip: "The 7-hour confit lamb shank with orange sauce is the house signature. Open without break until 01:30 AM, making it great for late-night quality dinners.",
      badge: "local-favorite",
      bestDishes: [
        "Confit Lamb Shank with Orange Glaze",
        "Seafood Risotto",
        "Saint-Pierre Fillet in Prawn Bisque",
        "Gambas Pil-Pil",
        "San Sebastian Cheesecake"
      ],
      pros: [
        "Flawless culinary presentation and high-tier cooking technique.",
        "Warm and polite floor staff who take time to explain each dish.",
        "Late-night kitchen operating smoothly until 01:30 AM."
      ],
      cons: [
        "Alcohol-free venue.",
        "Popular with locals and tourists alike; peak dinner hours can require short waits."
      ],
      googleRating: 4.8,
      googleReviewCount: 2220,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 310,
      theforkRating: 4.6,
      theforkReviewCount: 150,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 2220,
      openTime: "12:00",
      closeTime: "01:30",
      exactAddressAndCoordinates: {
        address: "Imm. Mimosas, Avenue El Houssine Achengli, Sonaba, Founty (Baie des Palmiers), Agadir 80000, Morocco",
        lat: 30.4068,
        lng: -9.5855
      },
      googleMapsUrl: "https://maps.google.com/?q=Vanisca+Agadir+Bay",
      reservationMethod: ["phone"],
      reservationContact: "+212528237777",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-little-italy",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "Seafood", "Mediterranean"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["authentic", "charming", "relaxed", "friendly"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 17,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["terrace", "alcohol", "dinner", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Little Italy",
      neighborhood: "Secteur Résidentiel (Suisse)",
      description: "Agadir's reference Italian trattoria since 2004, situated on Avenue Hassan II facing Place Al Amal. Chef Fabrizio Anzini cooks authentic thin-crust wood-fired pizzas, handmade pastas, vitello tonnato, and an acclaimed pistachio tiramisu.",
      tip: "Save room for their signature pistachio tiramisu; pair your meal with a crisp Italian Pinot Grigio or chilled Moroccan gris wine.",
      badge: "local-favorite",
      bestDishes: [
        "Wood-Fired Pizza Regina",
        "Spaghetti alle Vongole",
        "Trio del Mare",
        "Vitello Tonnato",
        "Pistachio Tiramisu"
      ],
      pros: [
        "Genuinely authentic Italian cuisine supervised by Italian chef-owner Fabrizio Anzini.",
        "Thin, crispy crust pizzas baked in a true wood-fired brick oven.",
        "Full wine and beer license with pleasant indoor and shaded terrace seating."
      ],
      cons: [
        "Parking right along Avenue Hassan II can be tricky during rush hours.",
        "Split service rush during weekend evenings."
      ],
      googleRating: 4.3,
      googleReviewCount: 760,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 420,
      theforkRating: 4.3,
      theforkReviewCount: 180,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 760,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Avenue Hassan II (En face de Place Al Amal), Secteur Résidentiel (Suisse), Agadir 80000, Morocco",
        lat: 30.4208,
        lng: -9.5998
      },
      googleMapsUrl: "https://maps.google.com/?q=Little+Italy+Agadir",
      reservationMethod: ["phone", "email"],
      reservationContact: "+212528820039",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.littleitalyagadir.com",
      instagram: "https://instagram.com/littleitaly_agadir",
      languagesSpoken: ["French", "Italian", "English", "Arabic/Darija"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-agadir-rafiq",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "family", "friends", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Berber", "Grill & BBQ"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer", "nomad"],
      vibeTags: ["authentic", "homestyle", "bustling", "hospitable"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["tagine", "couscous", "budget", "dry", "dinner", "breakfast"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Rafiq",
      neighborhood: "Nouveau Talborjt",
      description: "A beloved local Moroccan culinary institution located in Immeuble Assoulil on Boulevard Hassan II. Cherished for honest, deeply authentic Souss cooking, sizzling kefta tagines with eggs, Friday royal couscous, and traditional rfissa.",
      tip: "Unmatched value for money in downtown Agadir. Visit on Friday for their famous couscous, or order the bubbling kefta tagine with a fresh pot of mint tea.",
      badge: "local-favorite",
      bestDishes: [
        "Kefta Tagine with Egg",
        "Chicken Rfissa with Trid",
        "Friday Souss Couscous",
        "Charcoal Kefta Brochettes",
        "Traditional Harira Soup"
      ],
      pros: [
        "Consistently authentic and affordable home-style Moroccan recipes.",
        "Welcoming, fast, and hardworking service staff with great local following.",
        "Open non-stop from 07:00 AM breakfast through late dinner."
      ],
      cons: [
        "Cash only; cards are not accepted.",
        "Dining room fills quickly at lunchtime during Friday couscous."
      ],
      googleRating: 4.5,
      googleReviewCount: 1960,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 380,
      theforkRating: 4.4,
      theforkReviewCount: 110,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 1960,
      openTime: "07:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Immeuble Assoulil, Boulevard Hassan II, Nouveau Talborjt, Agadir 80000, Morocco",
        lat: 30.4221,
        lng: -9.5975
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Rafiq+Agadir",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212528842537",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/restaurant_rafiq",
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  // =========================================================================
  // 1. KABAB ERBIL AGADIR (Brand New Entry)
  // =========================================================================
  {
    id: "e-agadir-kabab-erbil",
    city: "agadir",
    openTime: "11:30",
    closeTime: "01:00",
    weeklySchedule: [
      { day: "Monday", open: "11:30", close: "01:00", isClosed: false },
      { day: "Tuesday", open: "11:30", close: "01:00", isClosed: false },
      { day: "Wednesday", open: "11:30", close: "01:00", isClosed: false },
      { day: "Thursday", open: "11:30", close: "01:00", isClosed: false },
      { day: "Friday", open: "11:30", close: "01:00", isClosed: false },
      { day: "Saturday", open: "11:30", close: "01:00", isClosed: false },
      { day: "Sunday", open: "11:30", close: "01:00", isClosed: false }
    ],

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family", "couple"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Middle Eastern", "Grill & BBQ", "Vegetarian/Vegan"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "culture", "nomad"],
      vibeTags: ["authentic", "warm", "casual", "hospitable"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 10,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["street-food", "late-night", "budget", "dry", "dinner", "lunch"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Kabab Erbil",
      neighborhood: "Centre Ville",
      description: "An authentic Iraqi grill and Middle Eastern diner on Avenue du Prince Moulay Abdallah. Celebrated for genuine Erbil-style minced lamb and beef kebabs grilled over open coals (no rotating spits), sizzling tikka skewers, freshly baked Iraqi flatbread (khubz), complimentary spiced lentil soup, and generous mezze platters.",
      tip: "Every meal begins with a complimentary bowl of comforting lentil soup and warm bread. The mixed grill platter easily feeds 2 to 3 people.",
      badge: "hidden-gem",
      bestDishes: [
        "Assiette Kabab Erbil",
        "Mixed Grill 2 Personnes",
        "Meat Tikka (Brochettes d'Agneau)",
        "Mix Mezzés Froids",
        "Plat Falafel Maison",
        "Baklawa aux Pistaches"
      ],
      pros: [
        "Authentic Iraqi charcoal grilling with hand-skewered seasoned minced meat",
        "Complimentary hot lentil soup and freshly baked tandoor bread with each meal",
        "Exceptional value-for-money and generous portions in central Agadir",
        "Broad vegetarian and vegan-friendly selection (falafel, hummus, tabbouleh, fattoush)"
      ],
      cons: [
        "Cash only (credit cards are not accepted)",
        "Modest diner interior without an outdoor terrace"
      ],
      googleRating: 4.6,
      googleReviewCount: 240,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 80,
      theforkRating: 4.5,
      theforkReviewCount: 50,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 180,
      openTime: "11:30",
      closeTime: "01:00",
      weeklySchedule: [
        { day: "Monday", openTime: "11:30", closeTime: "01:00", isClosed: false },
        { day: "Tuesday", openTime: "11:30", closeTime: "01:00", isClosed: false },
        { day: "Wednesday", openTime: "11:30", closeTime: "01:00", isClosed: false },
        { day: "Thursday", openTime: "11:30", closeTime: "01:00", isClosed: false },
        { day: "Friday", openTime: "11:30", closeTime: "01:00", isClosed: false },
        { day: "Saturday", openTime: "11:30", closeTime: "01:00", isClosed: false },
        { day: "Sunday", openTime: "11:30", closeTime: "01:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Avenue du Prince Moulay Abdallah, Centre Ville, Agadir 80000, Morocco",
        lat: 30.4202,
        lng: -9.5989
      },
      address: "Avenue du Prince Moulay Abdallah, Centre Ville, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.4202,
        lng: -9.5989
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Kabab+Erbil+Agadir",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212528825202",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      customStory: "Restaurant Kabab Erbil brings authentic Iraqi Mesopotamian culinary traditions to Agadir. Instead of standard fast-food shawarma spits, the kitchen focuses on charcoal ember grilling, hand-kneaded tandoor bread, and fragrant Middle Eastern spices.",
      languagesSpoken: ["Arabic/Darija", "French", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "entrees-mezzes",
            title: "Mezzés & Entrées Orientales (Appetizers & Mezze)",
            description: "Mezzés traditionnels préparés maison, accompagnés de pain chaud cuit minute",
            items: [
              {
                id: "erbil-soup-lentilles",
                name: "Soupe de Lentilles Irakienne (Shorbat Adas)",
                localName: "شوربة العدس العراقية المتبلة بالكمون والليمون",
                translations: {
                  ar: "شوربة العدس العراقية المتبلة بالكمون والليمون",
                  en: "Traditional Iraqi spiced velvet lentil soup with cumin and lemon",
                  es: "Sopa tradicional iraquí de lentejas con comino y limón",
                  de: "Traditionelle irakische Linsensuppe mit Kreuzkümmel und Zitrone"
                },
                price: 35,
                isSignature: true,
                dietary: ["vegetarian", "vegan", "halal"],
                portionNotes: "Régulièrement offerte en mise en bouche de bienvenue"
              },
              {
                id: "erbil-mix-mezzes",
                name: "Grand Mix Mezzés Froids",
                localName: "صحن مقبلات مشكلة (حمص، بابا غنوج، تبولة، فتوش، لبنة)",
                translations: {
                  ar: "صحن مقبلات مشكلة (حمص، بابا غنوج، تبولة، فتوش، لبنة)",
                  en: "Assorted cold mezze platter: hummus, baba ghanoush, tabbouleh, fattoush & yogurt",
                  es: "Plato variado de mezzes fríos: hummus, baba ganush, tabulé, fattoush y yogur",
                  de: "Gemischte kalte Vorspeisenplatte: Hummus, Baba Ghanoush, Tabouleh, Fattoush und Joghurt"
                },
                price: 145,
                isSignature: true,
                dietary: ["vegetarian", "halal"],
                portionNotes: "Idéal pour 2 à 3 personnes avec pain chaud"
              },
              {
                id: "erbil-hummus",
                name: "Houmous Tahina",
                localName: "حمص ناعم بالطحينة وزيت الزيتون البكر",
                translations: {
                  ar: "حمص ناعم بالطحينة وزيت الزيتون البكر",
                  en: "Silky smooth chickpea dip with tahini, extra virgin olive oil, and sumac",
                  es: "Hummus suave con tahini, aceite de oliva virgen extra y zumaque",
                  de: "Cremiger Kichererbsen-Dip mit Tahini, Olivenöl und Sumach"
                },
                price: 45,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "erbil-baba-ghanouj",
                name: "Baba Ghanouj (Moutabal)",
                localName: "بابا غنوج الباذنجان المشوي على الفحم مع الطحينة",
                translations: {
                  ar: "بابا غنوج الباذنجان المشوي على الفحم مع الطحينة",
                  en: "Smoked eggplant dip with tahini, garlic, and pomegranate reduction",
                  es: "Berenjena ahumada al carbón con tahini, ajo y granada",
                  de: "Geräucherte Auberginencreme mit Tahini, Knoblauch und Granatapfelsirup"
                },
                price: 50,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "erbil-tabbouleh",
                name: "Taboulé Oriental",
                localName: "تبولة الأعشاب الطازجة مع البقدونس والبرغل والليمون",
                translations: {
                  ar: "تبولة الأعشاب الطازجة مع البقدونس والبرغل والليمون",
                  en: "Fresh parsley salad with fine bulgur, mint, diced tomatoes, and lemon juice",
                  es: "Ensalada libanesa de perejil fresco, bulgur fino, tomate y limón",
                  de: "Petersiliensalat mit feinem Bulgur, Minze, Tomaten und Zitronendressing"
                },
                price: 50,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "erbil-fattoush",
                name: "Salade Fattouche",
                localName: "سلطة فتوش المقرمشة مع الخبز المحمص والسماق",
                translations: {
                  ar: "سلطة فتوش المقرمشة مع الخبز المحمص والسماق",
                  en: "Crisp garden salad with toasted pita chips, radishes, sumac, and pomegranate molasses",
                  es: "Ensalada crujiente fattoush con pan de pita tostado, rábanos y zumaque",
                  de: "Knackiger Fattoush-Salat mit geröstetem Fladenbrot, Radieschen und Sumach"
                },
                price: 50,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "erbil-falafel-plat",
                name: "Assiette Falafel Croustillant",
                localName: "صحن فلافل مقرمش مع الطحينة والمخللات",
                translations: {
                  ar: "صحن فلافل مقرمش مع الطحينة والمخللات",
                  en: "Golden crispy homemade falafel patties served with tahini and pickles",
                  es: "Falafel casero crujiente servido con salsa tahini y encurtidos",
                  de: "Knusprige hausgemachte Falafel mit Tahini-Sauce und eingelegtem Gemüse"
                },
                price: 70,
                isSignature: true,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "erbil-batata-harra",
                name: "Batata Harra (Pommes de Terre Épicées)",
                localName: "بطاطا حرة مقلية بالثوم والكزبرة والفلفل الحار",
                translations: {
                  ar: "بطاطا حرة مقلية بالثوم والكزبرة والفلفل الحار",
                  en: "Sautéed spicy potato cubes with garlic, fresh coriander, and chili flakes",
                  es: "Patatas picantes salteadas con ajo, cilantro fresco y guindilla",
                  de: "Würzige Röstkartoffelwürfel mit Knoblauch, frischem Koriander und Chili"
                },
                price: 60,
                isSpicy: true,
                dietary: ["vegetarian", "vegan", "halal"]
              }
            ]
          },
          {
            id: "grillades-charbon",
            title: "Grillades au Charbon de Bois d'Erbil (Charcoal-Grilled Specialties)",
            description: "Viandes fraîches marinées et cuites sur braise vive selon la méthode irakienne",
            items: [
              {
                id: "erbil-plat-kabab",
                name: "Assiette Kabab Erbil Traditionnelle",
                localName: "صحن كباب أربيل المشوي على الفحم مع الخبز الحار والأرز",
                translations: {
                  ar: "صحن كباب أربيل المشوي على الفحم مع الخبز الحار والأرز",
                  en: "Signature Erbil spiced minced lamb & beef kebab skewers with grilled tomato, onion, and rice",
                  es: "Pinchos de kebab Erbil de carne picada sazonada al carbón con arroz y verduras",
                  de: "Erbil Hackfleisch-Kebabspieße vom Holzkohlegrill mit Reis, Grillgemüse und Fladenbrot"
                },
                price: 140,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Accompagné de pain chaud khubz et sauces maison"
              },
              {
                id: "erbil-mixed-grills-2p",
                name: "Grand Mix Grill Erbil (2 Personnes)",
                localName: "مشاوي مشكلة لشخصين (كباب أربيل، شيش طاووق، شقف غنم، جوانح دجاج)",
                translations: {
                  ar: "مشاوي مشكلة لشخصين (كباب أربيل، شيش طاووق، شقف غنم، جوانح دجاج)",
                  en: "Grand mixed grill for two: 2 Kabab Erbil, 2 Chicken Tikka, 1 Lamb Tikka, chicken wings, rice & salad",
                  es: "Gran parrillada mixta para dos: 2 kebab Erbil, 2 pollo tikka, 1 cordero tikka, alitas, arroz y ensalada",
                  de: "Große Grillplatte für zwei: 2 Erbil Kebab, 2 Hähnchen-Tikka, 1 Lamm-Tikka, Hähnchenflügel, Reis und Salat"
                },
                price: 380,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Plat généreux pour 2 à 3 personnes"
              },
              {
                id: "erbil-meat-tikka",
                name: "Meat Tikka (Brochettes d'Agneau Tendre)",
                localName: "أشياخ شقف لحم الغنم الطري المشوي على الجمر",
                translations: {
                  ar: "أشياخ شقف لحم الغنم الطري المشوي على الجمر",
                  en: "Tender marinated lamb cubes grilled over embers, served with sumac onions and rice",
                  es: "Dados de cordero marinado a la brasa con cebollas al zumaque y arroz",
                  de: "Zarte marinierte Lammfleischspieße vom Holzkohlegrill mit Sumach-Zwiebeln und Reis"
                },
                price: 150,
                dietary: ["halal"]
              },
              {
                id: "erbil-chicken-tikka",
                name: "Chicken Tikka (Shish Taouk)",
                localName: "شيش طاووق الدجاج المتبل بالزبادي والثوم والليمون",
                translations: {
                  ar: "شيش طاووق الدجاج المتبل بالزبادي والثوم والليمون",
                  en: "Charcoal-grilled chicken breast skewers marinated in yogurt, garlic, and citrus spices",
                  es: "Brochetas de pechuga de pollo marinadas con yogur, ajo y limón a la brasa",
                  de: "Gegrillte Hähnchenbrustspieße mariniert in Knoblauch-Joghurt und Zitrusgewürzen"
                },
                price: 130,
                dietary: ["halal"]
              },
              {
                id: "erbil-chicken-jalfrezi",
                name: "Chicken Jalfrezi Épicé",
                localName: "دجاج جلفريزي المطهو بصلصة الطماطم والفلفل الحار مع الأرز",
                translations: {
                  ar: "دجاج جلفريزي المطهو بصلصة الطماطم والفلفل الحار مع الأرز",
                  en: "Sautéed chicken strips simmered in rich spiced tomato, onion and bell pepper gravy over rice",
                  es: "Pollo jalfrezi salteado con pimientos y salsa especiada de tomate con arroz",
                  de: "Pikantes Hähnchen Jalfrezi in Tomaten-Paprika-Sauce serviert auf duftendem Reis"
                },
                price: 120,
                isSpicy: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "sandwiches-streetfood",
            title: "Sandwiches & Street Food (Wraps & Saj)",
            description: "Servis dans du pain chaud avec frites croustillantes et sauces maison",
            items: [
              {
                id: "erbil-sand-shawarma-poulet",
                name: "Sandwich Shawarma Poulet Khubz",
                localName: "سندويش شاورما دجاج بخبز الصاج مع الثومية والمخلل",
                translations: {
                  ar: "سندويش شاورما دجاج بخبز الصاج مع الثومية والمخلل",
                  en: "Marinated chicken shawarma rolled in fresh khubz bread with toum garlic sauce and pickles",
                  es: "Shawarma de pollo enrollado en pan khubz caliente con salsa toum de ajo",
                  de: "Hähnchen-Shawarma im frisch gebackenen Khubz-Brot mit Knoblauchsauce und Pickles"
                },
                price: 65,
                dietary: ["halal"]
              },
              {
                id: "erbil-sand-kabab",
                name: "Sandwich Brochette Kabab Erbil",
                localName: "سندويش كباب أربيل بخبز التنور مع البصل والسماق",
                translations: {
                  ar: "سندويش كباب أربيل بخبز التنور مع البصل والسماق",
                  en: "Charcoal-grilled minced kebab wrapped in tandoor bread with sumac onions and tahini",
                  es: "Kebab a la brasa envuelto en pan tradicional con cebolla al zumaque y salsa tahini",
                  de: "Kebabspieß vom Grill im Tandoor-Brot mit Sumach-Zwiebeln und Tahini"
                },
                price: 70,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "erbil-sand-falafel",
                name: "Sandwich Falafel Végétarien",
                localName: "سندويش فلافل بالخبز العربي وسلطة الطحينة",
                translations: {
                  ar: "سندويش فلافل بالخبز العربي وسلطة الطحينة",
                  en: "Crispy falafel wrap with tomatoes, mint, crunchy pickles, and tahini drizzle",
                  es: "Wrap de falafel crujiente con tomate, menta fresca y salsa tahini",
                  de: "Knuspriger Falafel-Wrap mit Tomaten, Minze, eingelegtem Gemüse und Tahini"
                },
                price: 45,
                dietary: ["vegetarian", "vegan", "halal"]
              }
            ]
          },
          {
            id: "douceurs-the",
            title: "Douceurs & Boissons (Sweets & Beverages)",
            description: "Pâtisseries orientales au miel et thés traditionnels infusés",
            items: [
              {
                id: "erbil-baklawa",
                name: "Baklawa Croustillante aux Pistaches",
                localName: "بقلاوة شرقية مقرمشة بالفستق الحلبي والقطر",
                translations: {
                  ar: "بقلاوة شرقية مقرمشة بالفستق الحلبي والقطر",
                  en: "Layered flaky filo pastry filled with roasted pistachios and orange blossom syrup",
                  es: "Baklava de hojaldre crujiente relleno de pistachos y almíbar de azahar",
                  de: "Knuspriges Baklava aus feinstem Filoteig gefüllt mit Pistazien und Zuckersirup"
                },
                price: 35,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "erbil-the-cardamome",
                name: "Thé Noir Irakien à la Cardamome",
                localName: "شاي عراقي مخدر بالهيل مع السكر",
                translations: {
                  ar: "شاي عراقي مخدر بالهيل مع السكر",
                  en: "Slow-brewed strong Iraqi black tea infused with whole cardamom pods",
                  es: "Té negro tradicional iraquí aromatizado con cardamomo",
                  de: "Starker traditioneller irakischer Schwarztee mit Kardamom verfeinert"
                },
                price: 20,
                dietary: ["vegetarian", "vegan", "halal"]
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  // =========================================================================
  // 2. THE BLACKSMITH AGADIR (Verified Info, Complete Menu & 5 Worries)
  // =========================================================================
  {
    id: "e-agadir-the-blacksmith",
    city: "agadir",
    openTime: "08:00",
    closeTime: "01:00",
    weeklySchedule: [
      { day: "Monday", open: "08:00", close: "01:00", isClosed: false },
      { day: "Tuesday", open: "08:00", close: "01:00", isClosed: false },
      { day: "Wednesday", open: "08:00", close: "01:00", isClosed: false },
      { day: "Thursday", open: "08:00", close: "01:00", isClosed: false },
      { day: "Friday", open: "08:00", close: "01:00", isClosed: false, note: "Couscous Royal servi à midi" },
      { day: "Saturday", open: "08:00", close: "01:00", isClosed: false },
      { day: "Sunday", open: "08:00", close: "01:00", isClosed: false }
    ],

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "family", "solo"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Grill & BBQ", "Italian", "Moroccan", "International", "Cafe & Pastry"],
      cuisineTags: ["international", "moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["first-timer", "nomad", "culture"],
      vibeTags: ["lively", "casual", "warm", "trendy"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard"],
      tags: ["late-night", "dry", "dinner", "couscous", "breakfast", "terrace"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "The Blacksmith Agadir",
      neighborhood: "Talborjt",
      storefrontBanner: {
        logoUrl: "/assets/aistudio/image_64090477.png",
        backgroundColor: "#000000",
        accentColor: "#E3C55E",
        alt: "The Blacksmith Coffee Restaurant storefront logo",
        logoZoom: 2.6,
      },
      description: "An all-day coffee house, wood-fired pizza bar, and modern fusion grill on Rue des Orangers near Avenue Hassan II and Talborjt. Celebrated for its 'Crafted by Fire' ethos: wood-fired Margherita and Burrata pizzas, smoked brisket & kefta burgers, slow-cooked lamb shanks, traditional tagines & Friday royal couscous, plus specialty coffee, mocktails, and pastries from 8:00 AM until 1:00 AM.",
      tip: "Stick to their strongest suits: smoked burgers, wood-fired Margherita or Burrata pizza, slow-cooked lamb shank, and specialty coffees or virgin mojitos. Arrive a little early on weekend evenings or call +212 808-600401 / +212 666-540976 to avoid waiting for a terrace table.",
      badge: "local-favorite",
      bestDishes: [
        "Smoked Brisket Burger",
        "Wood-Fired Pizza Burrata",
        "Souris d'Agneau Confite",
        "The Blacksmith Grill Platter",
        "Friday Royal Couscous",
        "Tiramisu & Crêpes Maison"
      ],
      pros: [
        "All-day versatility from 08:00 AM coffee & sweet crêpes to 01:00 AM wood-fired pizzas and grills",
        "Standout burgers, wood-fired pizzas, slow-braised lamb shank, tiramisu, and crème brûlée",
        "Chic industrial-modern interior and lively outdoor terrace with easy street parking along Rue des Orangers",
        "Welcoming, multilingual staff and strictly non-alcoholic menu rich in specialty coffees, smoothies, and mocktails"
      ],
      cons: [
        "Very popular on weekend evenings, leading to short waits and slower kitchen pacing at peak rush",
        "Mid-to-upper Agadir bistro pricing (~120–250 MAD per person) rather than budget street-snack rates",
        "Seafood and mixed skewer dishes can occasionally be less consistent than pizzas, burgers, and lamb shank",
        "Strictly non-alcoholic (dry) venue"
      ],
      googleRating: 4.7,
      googleReviewCount: 3880,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 320,
      theforkRating: 4.6,
      theforkReviewCount: 140,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 3880,
      openTime: "08:00",
      closeTime: "01:00",
      weeklySchedule: [
        { day: "Monday", openTime: "08:00", closeTime: "01:00", isClosed: false },
        { day: "Tuesday", openTime: "08:00", closeTime: "01:00", isClosed: false },
        { day: "Wednesday", openTime: "08:00", closeTime: "01:00", isClosed: false },
        { day: "Thursday", openTime: "08:00", closeTime: "01:00", isClosed: false },
        { day: "Friday", openTime: "08:00", closeTime: "01:00", isClosed: false, note: "Couscous Royal servi à midi" },
        { day: "Saturday", openTime: "08:00", closeTime: "01:00", isClosed: false },
        { day: "Sunday", openTime: "08:00", closeTime: "01:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "2 Rue des Orangers (near Avenue Hassan II), Talborjt, Agadir 80000, Morocco",
        lat: 30.4109,
        lng: -9.5964
      },
      address: "2 Rue des Orangers (near Avenue Hassan II), Talborjt, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.4109,
        lng: -9.5964
      },
      googleMapsUrl: "https://maps.google.com/?q=The+Blacksmith+2+Rue+des+Orangers+Agadir",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212808600401",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/theblacksmi.th",
      languagesSpoken: ["French", "English", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "coffee-breakfast",
            title: "Café de Spécialité & Petit-Déjeuner (Coffee, Breakfast & Crêpes)",
            description: "Servi dès 08h00 : cafés slow-brew, crêpes sucrées, smoothies et mocktails maison",
            items: [
              {
                id: "bs-specialty-flatwhite",
                name: "Café Specialty Flat White / Slow-Brew",
                localName: "قهوة فلات وايت مختصة محضرة بحليب مبخر ناعم",
                translations: {
                  ar: "قهوة فلات وايت مختصة محضرة بحليب مبخر ناعم",
                  en: "Double shot of specialty espresso or slow-brewed coffee with velvety steamed milk",
                  es: "Café de especialidad flat white o slow-brew con microespuma de leche",
                  de: "Specialty Coffee Flat White oder Slow-Brew mit samtigem Mikroschaum"
                },
                price: 35,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "bs-crepes-maison",
                name: "Crêpes Sucrées Maison (Chocolat, Amandes & Miel)",
                localName: "كريب حلو منزلي بالشوكولاتة واللوز المحمص أو العسل",
                translations: {
                  ar: "كريب حلو منزلي بالشوكولاتة واللوز المحمص أو العسل",
                  en: "Warm sweet French crêpes finished with melted chocolate, toasted almonds, or honey",
                  es: "Crepes dulces caseros con chocolate fundido, almendras tostadas o miel",
                  de: "Warme hausgemachte Crêpes mit geschmolzener Schokolade, Mandeln oder Honig"
                },
                price: 55,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "bs-virgin-mojito-smoothie",
                name: "Virgin Mojito & Smoothies / Milkshakes",
                localName: "موهيتو بدون كحول بالنعناع الطازج أو سموذي الفواكه",
                translations: {
                  ar: "موهيتو بدون كحول بالنعناع الطازج أو سموذي الفواكه",
                  en: "Fresh mint & lime virgin mojitos, layered fruit smoothies, or creamy house milkshakes (zero alcohol)",
                  es: "Mojitos sin alcohol con hierbabuena fresca, smoothies naturales o batidos cremosos",
                  de: "Alkoholfreie Virgin Mojitos mit frischer Minze, Fruchtsmoothies oder Milchshakes"
                },
                price: 45,
                dietary: ["vegetarian", "vegan", "halal"]
              }
            ]
          },
          {
            id: "entrees-flamme",
            title: "Entrées & Tapas au Feu de Bois (Starters & Small Plates)",
            description: "Bouchées saisies à la flamme, ailes glacées et cassolettes marines",
            items: [
              {
                id: "bs-tartare-thon",
                name: "Tataki de Thon Rouge aux Épices Marocaines",
                localName: "تاتاكي التونة الحمراء المشوية بنكهات مغربية والسمسم",
                translations: {
                  ar: "تاتاكي التونة الحمراء المشوية بنكهات مغربية والسمسم",
                  en: "Seared red tuna tataki with Moroccan spices, sesame crust, and citrus glaze",
                  es: "Tataki de atún rojo sellado con especias marroquíes, sésamo y cítricos",
                  de: "Kurz angebratenes Thunfisch-Tataki mit marokkanischen Gewürzen und Sesam"
                },
                price: 95,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "bs-gambas-pilpil",
                name: "Gambas Pil-Pil & Calamars à l'Ail",
                localName: "كازويلا قريدس بيل بيل والحبار بالثوم والطماطم المتبلة",
                translations: {
                  ar: "كازويلا قريدس بيل بيل والحبار بالثوم والطماطم المتبلة",
                  en: "Sizzling garlic prawns pil-pil and Atlantic calamari in spiced olive oil and tomato",
                  es: "Gambas al pil-pil chisporroteantes con calamares al ajo y aceite picante",
                  de: "Brutzelnde Gambas Pil-Pil und Calamari in Knoblauch-Chili-Öl"
                },
                price: 130,
                dietary: ["halal"]
              },
              {
                id: "bs-chicken-wings",
                name: "Ailes de Poulet Glacées BBQ & Miel Fumé",
                localName: "أجنحة دجاج مقرمشة مدهونة بالعسل وصلصة الشواء المدخنة",
                translations: {
                  ar: "أجنحة دجاج مقرمشة مدهونة بالعسل وصلصة الشواء المدخنة",
                  en: "Crispy chicken wings glazed in smoked honey BBQ chili sauce",
                  es: "Alitas de pollo crujientes glaseadas con miel y salsa barbacoa ahumada",
                  de: "Knusprige Chicken Wings glasiert mit rauchiger Honig-BBQ-Sauce"
                },
                price: 75,
                isSpicy: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "grillades-braise",
            title: "La Forge : Burgers, Grillades & Pâtes (Grills & Mains)",
            description: "Viandes halal fumées au bois, burgers fusion kefta/brisket, souris d'agneau et pâtes au four",
            items: [
              {
                id: "bs-brisket-burger",
                name: "Blacksmith Smoked Brisket & Kefta Fusion Burger",
                localName: "برغر بلاك سميث باللحم المدخن أو الكفتة المتبلة مع جبن الشيدر",
                translations: {
                  ar: "برغر بلاك سميث باللحم المدخن أو الكفتة المتبلة مع جبن الشيدر",
                  en: "House brioche burger with slow-smoked beef brisket or spiced kefta, aged cheddar, pickles & fries",
                  es: "Hamburguesa brioche de brisket ahumado o kefta especiada con cheddar y patatas",
                  de: "Brioche-Burger mit geräuchertem Rinder-Brisket oder gewürzter Kefta und Cheddar"
                },
                price: 110,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "bs-souris-agneau",
                name: "Souris d'Agneau Confite (Slow-Cooked Lamb Shank)",
                localName: "ساق خروف مطهو ببطء بالعسل والتوابل يقدم مع الأرز",
                translations: {
                  ar: "ساق خروف مطهو ببطء بالعسل والتوابل يقدم مع الأرز",
                  en: "Melt-in-the-mouth slow-roasted lamb shank with aromatic glaze and seasoned rice",
                  es: "Jarrete de cordero asado a fuego lento con glaseado aromático y arroz",
                  de: "Butterzart geschmorte Lammhaxe mit aromatischer Glasur und gewürztem Reis"
                },
                price: 160,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "bs-grill-platter",
                name: "The Blacksmith Grill Platter (À Partager)",
                localName: "صينية مشاوي بلاك سميث الفاخرة (ستيك، كفتة، دجاج، بطاطس وسلطة)",
                translations: {
                  ar: "صينية مشاوي بلاك سميث الفاخرة (ستيك، كفتة، دجاج، بطاطس وسلطة)",
                  en: "Flame-grilled platter with beef cuts, kefta, chicken skewers, crispy fries, and house slaw",
                  es: "Parrillada mixta de carne, kefta y brochetas de pollo con patatas fritas y ensalada",
                  de: "Flammgegrillte Platte mit Rindfleisch, Kefta, Hähnchenspießen und Pommes"
                },
                price: 185,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Portion généreuse idéale pour 2 personnes"
              },
              {
                id: "bs-lasagne-stroganoff",
                name: "Lasagnes Bœuf Maison / Beef Stroganoff",
                localName: "لازانيا اللحم البقري بالفرن أو ستروغونوف اللحم بالكريمة",
                translations: {
                  ar: "لازانيا اللحم البقري بالفرن أو ستروغونوف اللحم بالكريمة",
                  en: "Baked layered beef lasagna with béchamel & mozzarella, or creamy tender beef stroganoff",
                  es: "Lasaña de carne al horno con bechamel o stroganoff cremoso de ternera",
                  de: "Hausgemachte Rindfleisch-Lasagne oder cremiges Beef Stroganoff"
                },
                price: 105,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "wood-fired-pizza",
            title: "Pizzas au Feu de Bois (Wood-Fired Pizza Bar)",
            description: "Pâte artisanale cuite au feu de bois — Margherita classique, Burrata et garnitures fumées",
            items: [
              {
                id: "bs-pizza-margherita",
                name: "Pizza Margherita au Feu de Bois",
                localName: "بيتزا مارغريتا بصلصة الطماطم والموزاريلا الطازجة والريحان",
                translations: {
                  ar: "بيتزا مارغريتا بصلصة الطماطم والموزاريلا الطازجة والريحان",
                  en: "Wood-fired Margherita with rich tomato sauce, fior di latte mozzarella, and fresh basil",
                  es: "Pizza Margarita al horno de leña con salsa de tomate, mozzarella fresca y albahaca",
                  de: "Holzofen-Pizza Margherita mit Tomatensauce, Mozzarella und frischem Basilikum"
                },
                price: 78,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "bs-pizza-burrata",
                name: "Pizza Burrata Crémeuse & Roquette",
                localName: "بيتزا بوراتا الإيطالية الطازجة مع الجرجير والطماطم الكرزية",
                translations: {
                  ar: "بيتزا بوراتا الإيطالية الطازجة مع الجرجير والطماطم الكرزية",
                  en: "Leopard-charred wood-fired pizza topped with whole creamy burrata, cherry tomatoes, and rocket",
                  es: "Pizza artesanal al horno de leña coronada con burrata fresca cremosa y rúcula",
                  de: "Holzofen-Pizza mit ganzer cremiger Burrata, Kirschtomaten und frischem Rucola"
                },
                price: 115,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "bs-pizza-blacksmith",
                name: "Pizza Blacksmith au Bœuf Fumé & Champignons",
                localName: "بيتزا بلاك سميث المميزة باللحم البقري المدخن والفطر الطازج",
                translations: {
                  ar: "بيتزا بلاك سميث المميزة باللحم البقري المدخن والفطر الطازج",
                  en: "Signature wood-fired pizza with smoked beef brisket, wild mushrooms, and mozzarella",
                  es: "Pizza especial de la casa con brisket ahumado, champiñones y mozzarella",
                  de: "Hauspizza mit geräuchertem Rindfleisch, Waldpilzen und Mozzarella"
                },
                price: 118,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "plats-marocains",
            title: "Tradition Marocaine (Tagines & Friday Couscous)",
            description: "Grands classiques marocains mijotés dans les règles de l'art",
            items: [
              {
                id: "bs-couscous-royal",
                name: "Couscous Royal aux Sept Légumes (Vendredi)",
                localName: "كسكس ملكي بالسبع خضار واللحم البقري والدجاج والقرع المعسل",
                translations: {
                  ar: "كسكس ملكي بالسبع خضار واللحم البقري والدجاج والقرع المعسل",
                  en: "Traditional Friday Royal Couscous with tender beef, chicken, 7 garden vegetables, and tfaya onions",
                  es: "Cuscús real tradicional del viernes con ternera, pollo, siete verduras y tfaya",
                  de: "Traditioneller Freitags-Couscous Royal mit Rind, Hähnchen, sieben Gemüsesorten und Tfaya"
                },
                price: 120,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Spécialité du vendredi midi"
              },
              {
                id: "bs-tagine-boeuf-pruneaux",
                name: "Tajine de Bœuf aux Pruneaux & Amandes",
                localName: "طاجين اللحم البقري المعسل بالبرقوق واللوز المقلي والسمسم",
                translations: {
                  ar: "طاجين اللحم البقري المعسل بالبرقوق واللوز المقلي والسمسم",
                  en: "Slow-simmered beef tagine with caramelized prunes, toasted almonds, and sesame seeds",
                  es: "Tajine de ternera con ciruelas pasas caramelizadas, almendras tostadas y sésamo",
                  de: "Geschmorter Rindertagine mit karamellisierten Pflaumen, Mandeln und Sesam"
                },
                price: 115,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "desserts-maison",
            title: "Desserts Maison (Tiramisu, Crème Brûlée & Pastilla)",
            description: "Desserts préparés sur place plébiscités par les clients",
            items: [
              {
                id: "bs-tiramisu",
                name: "Tiramisu Classique Maison",
                localName: "تيراميسو كلاسيكي منزلي بكريمة الماسكربوني والإسبريسو",
                translations: {
                  ar: "تيراميسو كلاسيكي منزلي بكريمة الماسكربوني والإسبريسو",
                  en: "Velvety house-made mascarpone tiramisu soaked in fresh espresso & cocoa dust (alcohol-free)",
                  es: "Tiramisú casero de mascarpone con espresso recién hecho y cacao (sin alcohol)",
                  de: "Hausgemachtes Mascarpone-Tiramisu mit frischem Espresso und Kakao (alkoholfrei)"
                },
                price: 58,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "bs-creme-brulee",
                name: "Crème Brûlée Caramélisée à la Vanille",
                localName: "كريم بروليه بالفانيليا وسطح الكراميل المقرمش",
                translations: {
                  ar: "كريم بروليه بالفانيليا وسطح الكراميل المقرمش",
                  en: "Silky vanilla custard topped with a crisp torch-caramelized sugar crust",
                  es: "Crème brûlée de vainilla con costra crujiente de azúcar caramelizado",
                  de: "Cremige Vanille-Crème-Brûlée mit knuspriger Karamellkruste"
                },
                price: 55,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "bs-orange-pastilla",
                name: "Pastilla Croustillante à l'Orange & Cannelle",
                localName: "بسطيلة مقرمشة بشرائح البرتقال الطازج والكريمة والقرفة",
                translations: {
                  ar: "بسطيلة مقرمشة بشرائح البرتقال الطازج والكريمة والقرفة",
                  en: "Crisp golden filo pastry layered with sweet milk cream, fresh oranges, and cinnamon",
                  es: "Pastela crujiente de hojaldre con crema dulce, naranja fresca y canela",
                  de: "Knusprige Filoteig-Pastilla mit süßer Sahnecreme, Orangen und Zimt"
                },
                price: 70,
                dietary: ["vegetarian", "halal"]
              }
            ]
          }
        ]
      }
    },
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Mid-Upper Bistro Pricing",
        description: "Printed & QR menus show clear prices with zero tout surprises, though mains and grills run noticeably higher (~120–250 MAD/person) than casual Talborjt snack spots.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Ousortir / Restaurant Guru traveler reviews"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Modern Kitchen",
        description: "Modern high-turnover café-kitchen with reliable hygiene standards; wood-fired pizzas, burgers, and slow-cooked lamb shank are consistently fresh, safe choices.",
        tone: "good",
        tagColor: "hygiene",
        state: "verified",
        source: "Google Maps / Ousortir / TripAdvisor reviews"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Best for Grills & Pizzas",
        description: "Contemporary fusion bistro rather than traditional Medina cooking—burgers, pizzas, lamb shank & desserts excel, while seafood or mixed skewer sides can occasionally be uneven.",
        tone: "caution",
        tagColor: "food",
        state: "verified",
        source: "Ousortir / VisitAgadir diner feedback"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Chic Zero-Tout Terrace",
        description: "No street touts—stylish industrial-chic dining room, lively shaded terrace with music, strictly alcohol-free (dry), and hassle-free street parking along Rue des Orangers.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Ousortir / Majourneys / Moroccan Mate verified profile"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Weekend Dinner Rush",
        description: "Warm, multilingual staff (Arabic, French, English), but peak weekend evenings get very busy and can bring short waits for terrace tables or slower kitchen pacing.",
        tone: "caution",
        tagColor: "alert",
        state: "verified",
        source: "Google Maps / Restaurant Guru reviews"
      }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  // =========================================================================
  // 3. RESTAURANT LE 20' (Enriched with Complete Structured Menu)
  // =========================================================================
  {
    id: "e-agadir-le20",
    city: "agadir",
    openTime: "12:00",
    closeTime: "00:00",
    weeklySchedule: [
      { day: "Monday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Tuesday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Wednesday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Thursday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Friday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Saturday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Sunday", open: "12:00", close: "00:00", isClosed: false }
    ],

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Mediterranean", "French-Moroccan", "Seafood"],
      cuisineTags: ["moroccan-traditional", "international", "seafood"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["warm", "authentic", "hospitable", "classic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard"],
      tags: ["tagine", "budget", "alcohol", "dinner", "terrace", "seafood"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Le 20'",
      neighborhood: "Secteur Balnéaire",
      description: "Operating in the Tagadirt complex since 1982, Le 20' is one of the oldest and most dependable culinary landmarks on Boulevard du 20 Août. It is celebrated for its slow-simmered lamb and fish tagines, chicken pastillas, grilled Atlantic Saint-Pierre, and a full licensed bar offering fine Moroccan wines.",
      tip: "The slow-braised lamb tagine with prunes is among the tenderest on the strip. Book an evening table to enjoy a glass of Moroccan Vin Gris on the patio.",
      badge: "local-favorite",
      bestDishes: [
        "Tajine d'Agneau aux Pruneaux & Amandes",
        "Saint-Pierre Grillé Sauce Safran",
        "Pastilla au Poulet & Amandes",
        "Tajine de Poisson du Port",
        "Calamars Sautés Sauce Champignons",
        "Mousse au Chocolat Maison"
      ],
      pros: [
        "Decades of consistent quality and warm, attentive family-friendly service",
        "Extensive menu balancing Moroccan traditional cooking and fresh coastal seafood",
        "Licensed bar featuring a quality selection of chilled Moroccan and French wines",
        "Great value for money situated directly in the primary hotel strip"
      ],
      cons: [
        "Located inside the Tagadirt complex arcade without direct beach views",
        "Can fill quickly at peak dinner rush between 20:00 and 21:30"
      ],
      googleRating: 4.5,
      googleReviewCount: 865,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 320,
      theforkRating: 4.4,
      theforkReviewCount: 150,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 865,
      openTime: "12:00",
      closeTime: "00:00",
      weeklySchedule: [
        { day: "Monday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Tuesday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Wednesday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Thursday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Friday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Saturday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Sunday", openTime: "12:00", closeTime: "00:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Complexe Tagadirt, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80012, Morocco",
        lat: 30.4146,
        lng: -9.6009
      },
      address: "Complexe Tagadirt, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80012, Morocco",
      coordinates: {
        lat: 30.4146,
        lng: -9.6009
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Le+20+Agadir",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212528840805",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://le20.ma",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija", "German"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "entrees-marocaines",
            title: "Entrées Fraîches & Saveurs Marocaines (Starters & Pastilla)",
            description: "Spécialités traditionnelles marocaines et fraîcheurs de l'Atlantique",
            items: [
              {
                id: "le20-pastilla-poulet",
                name: "Pastilla Traditionnelle au Poulet & Amandes",
                localName: "بسطيلة الدجاج الفاسية باللوز المقلي والقرفة والسكر الصقيل",
                translations: {
                  ar: "بسطيلة الدجاج الفاسية باللوز المقلي والقرفة والسكر الصقيل",
                  en: "Traditional sweet and savory chicken pastilla with crushed roasted almonds and cinnamon",
                  es: "Pastela tradicional de pollo con almendras tostadas crujientes y canela",
                  de: "Traditionelle süß-würzige Hähnchenpastilla mit gerösteten Mandeln und Zimt"
                },
                price: 85,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "le20-assortiment-salades",
                name: "Trio de Salades Marocaines Cuisinées",
                localName: "تشكيلة مقبلات مغربية دافئة (زعلوك، تكتوكة، جزر متبل)",
                translations: {
                  ar: "تشكيلة مقبلات مغربية دافئة (زعلوك، تكتوكة، جزر متبل)",
                  en: "Trio of cooked Moroccan salads: smoky zaalouk eggplant, taktouka peppers & spiced carrots",
                  es: "Trío de ensaladas marroquíes cocinadas: zaalouk de berenjena, taktouka y zanahoria",
                  de: "Trio gekochter marokkanischer Salate: Zaalouk Auberginen, Taktouka Paprika und Gewürzmöhren"
                },
                price: 55,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "le20-bricks-viande",
                name: "Bricks Croustillantes à la Viande Hachée",
                localName: "بريوات مقرمشة باللحم المفروم والبيض والتوابل المغربية",
                translations: {
                  ar: "بريوات مقرمشة باللحم المفروم والبيض والتوابل المغربية",
                  en: "Golden crispy filo rolls stuffed with spiced minced beef, fresh herbs, and egg",
                  es: "Rollitos crujientes de pasta filo rellenos de carne picada especiada y hierbas",
                  de: "Knusprige Briouats gefüllt mit gewürztem Rinderhackfleisch und Kräutern"
                },
                price: 60,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "tajines-miroites",
            title: "Tajines Traditionnels Mijotés (Slow-Cooked Tagines)",
            description: "Cuits lentement à l'étouffée dans des plats en terre cuite selon la tradition du Souss",
            items: [
              {
                id: "le20-tajine-agneau",
                name: "Tajine d'Agneau aux Pruneaux & Amandes",
                localName: "طاجين لحم الغنم الطري بالبرقوق المعسل واللوز المحمص",
                translations: {
                  ar: "طاجين لحم الغنم الطري بالبرقوق المعسل واللوز المحمص",
                  en: "Slow-braised tender lamb tagine with sweet caramelized prunes, toasted almonds, and saffron sauce",
                  es: "Tajine de cordero estofado con ciruelas pasas caramelizadas y almendras tostadas",
                  de: "Geschmorter zarter Lammtagine mit karamellisierten Pflaumen und gerösteten Mandeln"
                },
                price: 125,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "le20-tajine-poulet-citron",
                name: "Tajine de Poulet Fermier au Citron Confit & Olives",
                localName: "طاجين الدجاج البلدي بالحامض المصير والزيتون الأحمر",
                translations: {
                  ar: "طاجين الدجاج البلدي بالحامض المصير والزيتون الأحمر",
                  en: "Free-range chicken tagine braised with preserved lemons, red olives, ginger, and saffron",
                  es: "Tajine de pollo de corral con limones confitados, aceitunas rojas y azafrán",
                  de: "Hähnchentagine mit eingelegten Salzzitronen, roten Oliven und Safran"
                },
                price: 105,
                dietary: ["halal"]
              },
              {
                id: "le20-tajine-saint-pierre",
                name: "Tajine de Saint-Pierre aux Épices Douces & Tomates",
                localName: "طاجين سمك سان بيير الطازج بالطماطم والشرمولة السوسية",
                translations: {
                  ar: "طاجين سمك سان بيير الطازج بالطماطم والشرمولة السوسية",
                  en: "Atlantic John Dory (Saint-Pierre) fish fillet simmered with fresh tomato chermoula and bell peppers",
                  es: "Tajine de pez de San Pedro con chermoula de tomate fresco y pimientos",
                  de: "Tagine vom Atlantik-Petersfisch (Saint-Pierre) mit frischer Tomaten-Chermoula"
                },
                price: 145,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "le20-tajine-vegetarien",
                name: "Tajine Berbère Végétarien du Souss",
                localName: "طاجين الخضار الموسمية بالأعشاب وزيت الزيتون البكر",
                translations: {
                  ar: "طاجين الخضار الموسمية بالأعشاب وزيت الزيتون البكر",
                  en: "Vegetarian Berber tagine loaded with seasonal garden vegetables, peas, and wild herbs",
                  es: "Tajine bereber vegetariano de verduras de temporada con hierbas aromáticas",
                  de: "Vegetarischer Berber-Tagine mit saisonalem Marktgemüse und frischen Kräutern"
                },
                price: 80,
                dietary: ["vegetarian", "vegan", "halal"]
              }
            ]
          },
          {
            id: "poissons-grillades",
            title: "Poissons Nobles & Grillades de l'Atlantique (Fish & Steaks)",
            description: "Arrivages quotidiens du port de pêche d'Agadir et découpes de boucherie",
            items: [
              {
                id: "le20-saint-pierre-safran",
                name: "Saint-Pierre Grillé Sauce Safran & Pommes Vapeur",
                localName: "فيليه سمك سان بيير المشوي بصلصة الزعفران الحر والخضار",
                translations: {
                  ar: "فيليه سمك سان بيير المشوي بصلصة الزعفران الحر والخضار",
                  en: "Grilled Saint-Pierre fillet served over a delicate saffron sauce with steamed potatoes",
                  es: "Filete de pez de San Pedro a la plancha con salsa de azafrán y patatas al vapor",
                  de: "Gegrilltes Petersfischfilet an feiner Safransauce mit Dampfkartoffeln"
                },
                price: 160,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "le20-calamars-champignons",
                name: "Calamars Sautés à la Crème de Champignons",
                localName: "حبار طازج مقلي مع كريمة الفطر الأبيض والثوم",
                translations: {
                  ar: "حبار طازج مقلي مع كريمة الفطر الأبيض والثوم",
                  en: "Tender sautéed Atlantic calamari finished in a rich garlic wild mushroom cream",
                  es: "Calamares atlánticos salteados con crema suave de champiñones y ajo",
                  de: "Zart gebratener Atlantik-Tintenfisch in cremiger Knoblauch-Pilzsauce"
                },
                price: 135,
                dietary: ["halal"]
              },
              {
                id: "le20-entrecote-poivre",
                name: "Entrecôte de Bœuf Grillée au Poivre Vert",
                localName: "شريحة لحم إنتركوت بقري مشوية بصلصة الفلفل الأخضر",
                translations: {
                  ar: "شريحة لحم إنتركوت بقري مشوية بصلصة الفلفل الأخضر",
                  en: "Prime grilled ribeye steak with Madagascar green peppercorn cream sauce and fries",
                  es: "Entrecot de ternera a la parrilla con salsa de pimienta verde y patatas fritas",
                  de: "Gegrilltes Rib-Eye-Steak mit grüner Pfeffersauce und knusprigen Pommes"
                },
                price: 160,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "couscous-desserts",
            title: "Couscous Royal & Douceurs (Couscous & Sweets)",
            description: "Plats de fête et douceurs fraîches maison",
            items: [
              {
                id: "le20-couscous-royal",
                name: "Couscous Royal aux Sept Légumes (Bœuf, Agneau, Poulet)",
                localName: "كسكس ملكي متكامل باللحم البقري والغنم والدجاج والسبع خضار",
                translations: {
                  ar: "كسكس ملكي متكامل باللحم البقري والغنم والدجاج والسبع خضار",
                  en: "Royal Moroccan couscous platter with tender beef, lamb, chicken, merguez, and 7 garden vegetables",
                  es: "Cuscús real marroquí completo con ternera, cordero, pollo y siete verduras frescas",
                  de: "Königlicher marokkanischer Couscous mit Rind, Lamm, Hähnchen und sieben Gemüsesorten"
                },
                price: 140,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "le20-salade-oranges",
                name: "Salade d'Oranges à la Cannelle & Fleur d'Oranger",
                localName: "سلطة البرتقال بالماء الزهر والقرفة",
                translations: {
                  ar: "سلطة البرتقال بالماء الزهر والقرفة",
                  en: "Refreshing sliced oranges dusted with cinnamon, mint, and orange blossom water",
                  es: "Rodajas de naranja refrescantes con canela y agua de azahar",
                  de: "Erfrischender Orangensalat mit Zimt, Minze und Orangenblütenwasser"
                },
                price: 45,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "le20-mousse-chocolat",
                name: "Mousse au Chocolat Noir Intense Maison",
                localName: "موس الشوكولاتة الداكنة المنزلية الفاخرة",
                translations: {
                  ar: "موس الشوكولاتة الداكنة المنزلية الفاخرة",
                  en: "Homemade rich dark chocolate mousse with roasted almond flakes",
                  es: "Mousse casera de chocolate negro intenso con almendras laminadas",
                  de: "Hausgemachte dunkle Schokoladenmousse mit gerösteten Mandeln"
                },
                price: 50,
                dietary: ["vegetarian", "halal"]
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Transparent Since 1982",
        description: "Honest printed MAD prices (85–160 MAD mains) with zero tourist markups or hidden bread/olive surprises.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Spotless Veteran Kitchen",
        description: "Reputable 40-year establishment serving fresh daily Agadir Saint-Pierre, thoroughly cooked tagines, and sealed bottled water.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Authentic Souss Tagines",
        description: "Generous traditional Moroccan cooking—tender lamb prune tagine, crisp pastilla, and fresh coastal fish without watered-down tourist recipes.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "No Sea View / Lively Arcade",
        description: "Tucked inside the Tagadirt arcade rather than on the beach; casual warm patio with evening background music and nearby arcade sound.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Warm Veteran Team",
        description: "Attentive multilingual servers (English, French, German, Arabic); popular terrace tables fill quickly between 20:00 and 21:30.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  // =========================================================================
  // 1. RESTAURANT PLAGE BLEUE AGADIR
  // =========================================================================
  {
    id: "e-agadir-plage-bleue",
    city: "agadir",
    openTime: "07:00",
    closeTime: "02:00",
    weeklySchedule: [
      { day: "Monday", open: "07:00", close: "02:00", isClosed: false },
      { day: "Tuesday", open: "07:00", close: "02:00", isClosed: false },
      { day: "Wednesday", open: "07:00", close: "02:00", isClosed: false },
      { day: "Thursday", open: "07:00", close: "02:00", isClosed: false },
      { day: "Friday", open: "07:00", close: "02:00", isClosed: false, note: "Live music in the evening" },
      { day: "Saturday", open: "07:00", close: "02:00", isClosed: false, note: "Live music in the evening" },
      { day: "Sunday", open: "07:00", close: "02:00", isClosed: false }
    ],

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night", "drinks"],
      experienceTypes: ["casual"],
      foodStyles: ["Seafood", "Mediterranean", "Moroccan", "International"],
      cuisineTags: ["seafood", "international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "adventure"],
      vibeTags: ["coastal", "breezy", "scenic", "lively"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard"],
      tags: ["sunset", "terrace", "alcohol", "dinner", "late-night", "seafood", "breakfast"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Plage Bleue",
      neighborhood: "Secteur Balnéaire",
      description: "An oceanfront culinary staple situated at 2 Front de Mer along the coastal promenade. Beloved for panoramic views of Agadir Bay, generous seafood platters, whole grilled sea bass, Moroccan tagines, and evening acoustic live music with a chilled glass of local wine.",
      tip: "Secure a frontline terrace table between 18:30 and 19:30 to catch the sunset directly across the Atlantic horizon while sharing their Atlantic seafood platter.",
      badge: "local-favorite",
      bestDishes: [
        "Plateau Royal de Fruits de Mer",
        "Loup de Mer (Bar) Entier Grillé",
        "Gambas al Pil-Pil",
        "Tajine d'Agneau aux Pruneaux",
        "Salade Avocat & Crevettes",
        "Pizza 4 Saisons"
      ],
      pros: [
        "Direct Front de Mer location with uninterrupted Atlantic bay panoramas",
        "Continuous service from 07:00 AM breakfast to 02:00 AM late-night dining",
        "Licensed restaurant serving cold beer, Moroccan rosé, and cocktails",
        "Live musical performances on weekend evenings"
      ],
      cons: [
        "Terrace can get breezy in the late afternoon and loud near weekend live music",
        "Service pacing slows noticeably during busy sunset and weekend dinner hours",
        "Cream-based pastas and mixed grills receive more mixed feedback than whole sea bass or tagines"
      ],
      googleRating: 3.5,
      googleReviewCount: 1420,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 480,
      theforkRating: 4.1,
      theforkReviewCount: 160,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 2350,
      openTime: "07:00",
      closeTime: "02:00",
      weeklySchedule: [
        { day: "Monday", openTime: "07:00", closeTime: "02:00", isClosed: false },
        { day: "Tuesday", openTime: "07:00", closeTime: "02:00", isClosed: false },
        { day: "Wednesday", openTime: "07:00", closeTime: "02:00", isClosed: false },
        { day: "Thursday", openTime: "07:00", closeTime: "02:00", isClosed: false },
        { day: "Friday", openTime: "07:00", closeTime: "02:00", isClosed: false, note: "Live music in the evening" },
        { day: "Saturday", openTime: "07:00", closeTime: "02:00", isClosed: false, note: "Live music in the evening" },
        { day: "Sunday", openTime: "07:00", closeTime: "02:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "2 Front de Mer, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4182,
        lng: -9.6025
      },
      address: "2 Front de Mer, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.4182,
        lng: -9.6025
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Plage+Bleue+Agadir",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212528842092",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.plagebleue.com",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "entrees-marines",
            title: "Entrées Marines & Salades Fraîches (Starters & Seafood Salads)",
            description: "Produits de la criée d'Agadir et fraîcheurs du potager",
            items: [
              {
                id: "pb-gambas-pilpil",
                name: "Gambas Sautées au Pil-Pil",
                localName: "جمبري مطهو بزيت الزيتون الحار والثوم والبقدونس",
                translations: {
                  ar: "جمبري مطهو بزيت الزيتون الحار والثوم والبقدونس",
                  en: "Sizzling prawns in chili-garlic olive oil with fresh parsley",
                  es: "Gambas al pil-pil chisporroteantes con ajo, guindilla y perejil",
                  de: "Brutzelnde Garnelen in scharfem Knoblauch-Olivenöl"
                },
                price: 90,
                isSignature: true,
                isSpicy: true,
                dietary: ["halal"]
              },
              {
                id: "pb-salade-avocat-crevettes",
                name: "Salade Fraîcheur Avocat & Crevettes",
                localName: "سلطة الأفوكادو والروبيان الطازج مع صلصة الكوكتيل الخفيفة",
                translations: {
                  ar: "سلطة الأفوكادو والروبيان الطازج مع صلصة الكوكتيل الخفيفة",
                  en: "Crisp salad with fresh local avocado, Atlantic pink shrimp, and light cocktail dressing",
                  es: "Ensalada fresca de aguacate y gambas del Atlántico con salsa cóctel",
                  de: "Frischer Avocadosalat mit Atlantik-Garnelen und feiner Cocktailsauce"
                },
                price: 85,
                dietary: ["halal"]
              },
              {
                id: "pb-soupe-poisson",
                name: "Soupe de Poissons de l'Atlantique & Rouille",
                localName: "شوربة السمك التقليدية مع الخبز المحمص والصلصة الثومية",
                translations: {
                  ar: "شوربة السمك التقليدية مع الخبز المحمص والصلصة الثومية",
                  en: "Rich Atlantic rockfish soup served with golden garlic croutons, rouille, and grated cheese",
                  es: "Sopa de pescado de roca atlántico con picatostes y salsa rouille",
                  de: "Aromatische Atlantik-Fischsuppe mit Knoblauch-Croutons und Rouille"
                },
                price: 65,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "poissons-fruits-de-mer",
            title: "Poissons Nobles & Fruits de Mer (Fresh Catch & Shellfish)",
            description: "Arrivage quotidien des chalutiers du port d'Agadir",
            items: [
              {
                id: "pb-plateau-royal",
                name: "Plateau Royal de Fruits de Mer Plage Bleue",
                localName: "صينية فواكه البحر الملكية (حبار مقلي، سمك الصول، روبيان مشوي، محار)",
                translations: {
                  ar: "صينية فواكه البحر الملكية (حبار مقلي، سمك الصول، روبيان مشوي، محار)",
                  en: "Grand Atlantic seafood platter: grilled sea bass, fried calamari, king prawns, and sides",
                  es: "Gran bandeja marinera real: lubina a la plancha, calamares fritos, gambas y guarnición",
                  de: "Königliche Atlantik-Meeresfrüchteplatte mit Wolfsbarsch, Calamari, Garnelen und Beilagen"
                },
                price: 220,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Idéal pour 1 à 2 personnes face à la mer"
              },
              {
                id: "pb-loup-grille",
                name: "Loup de Mer (Bar) Entier Grillé aux Herbes",
                localName: "سمك الدرعي الملكي مشوي على الفحم مع الخضار المشوية",
                translations: {
                  ar: "سمك الدرعي الملكي مشوي على الفحم مع الخضار المشوية",
                  en: "Charcoal-grilled whole sea bass served with steamed potatoes and roasted vegetables",
                  es: "Lubina salvaje entera a la brasa con patatas y verduras salteadas",
                  de: "Gegrillter ganzer Wolfsbarsch mit Dampfkartoffeln und Marktgemüse"
                },
                price: 160,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "pb-calamars-frits",
                name: "Friture de Calamars Croustillants & Sauce Tartare",
                localName: "حبار مقلي مقرمش مع شرائح الليمون وصلصة التارتار",
                translations: {
                  ar: "حبار مقلي مقرمش مع شرائح الليمون وصلصة التارتار",
                  en: "Golden crispy fried calamari rings served with lemon wedges and house tartar sauce",
                  es: "Calamares fritos crujientes servidos con limón y salsa tártara casera",
                  de: "Knusprig frittierte Calamari-Ringe mit Zitrone und Remouladensauce"
                },
                price: 110,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "tajines-marocains",
            title: "Tajines & Saveurs du Maroc (Moroccan Specialties)",
            description: "Plats mijotés à feu doux dans des plats en terre cuite",
            items: [
              {
                id: "pb-tajine-agneau-pruneaux",
                name: "Tajine d'Agneau aux Pruneaux & Amandes",
                localName: "طاجين لحم الغنم المعسل بالبرقوق واللوز والسمسم",
                translations: {
                  ar: "طاجين لحم الغنم المعسل بالبرقوق واللوز والسمسم",
                  en: "Slow-simmered tender lamb tagine with sweet prunes, toasted almonds, and sesame seeds",
                  es: "Tajine de cordero estofado con ciruelas pasas caramelizadas y almendras tostadas",
                  de: "Geschmorter Lammtagine mit karamellisierten Pflaumen und gerösteten Mandeln"
                },
                price: 120,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "pb-tajine-poulet-citron",
                name: "Tajine de Poulet au Citron Confit & Olives",
                localName: "طاجين الدجاج البلدي بالحامض المصير والزيتون",
                translations: {
                  ar: "طاجين الدجاج البلدي بالحامض المصير والزيتون",
                  en: "Chicken tagine simmered with cured preserved lemons, red olives, and saffron sauce",
                  es: "Tajine de pollo con limones confitados, aceitunas y salsa de azafrán",
                  de: "Hähnchentagine mit Salzzitronen, roten Oliven und Safransauce"
                },
                price: 100,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "pizzas-desserts",
            title: "Pizzas au Four & Desserts (Pizzas & Sweets)",
            description: "Pizzas cuites au four et desserts rafraîchissants",
            items: [
              {
                id: "pb-pizza-4saisons",
                name: "Pizza 4 Saisons",
                localName: "بيتزا الفصول الأربعة بالجبن والفطر والخرشوف والزيتون",
                translations: {
                  ar: "بيتزا الفصول الأربعة بالجبن والفطر والخرشوف والزيتون",
                  en: "Four seasons pizza with mozzarella, mushrooms, bell peppers, turkey ham, and olives",
                  es: "Pizza cuatro estaciones con mozzarella, champiñones, pimientos y aceitunas",
                  de: "Pizza Vier Jahreszeiten mit Mozzarella, Pilzen, Paprika und Oliven"
                },
                price: 75,
                dietary: ["halal"]
              },
              {
                id: "pb-pizza-saumon",
                name: "Pizza au Saumon Fumé & Crème",
                localName: "بيتزا السلمون المدخن والكريمة وجبن الموزاريلا",
                translations: {
                  ar: "بيتزا السلمون المدخن والكريمة وجبن الموزاريلا",
                  en: "White pizza with smoked salmon, dill cream, and melted mozzarella",
                  es: "Pizza blanca con salmón ahumado, crema de eneldo y mozzarella",
                  de: "Weiße Pizza mit Räucherlachs, Dillcreme und Mozzarella"
                },
                price: 80,
                dietary: ["halal"]
              },
              {
                id: "pb-parfait-glace",
                name: "Parfait Glacé Maison aux Fruits Rouges",
                localName: "حلوى بارفيه مثلجة منزلية بصلصة التوت البري",
                translations: {
                  ar: "حلوى بارفيه مثلجة منزلية بصلصة التوت البري",
                  en: "House frozen parfait drizzled with fresh red berry coulis",
                  es: "Parfait helado casero con coulis de frutos rojos",
                  de: "Hausgemachtes Halbgefrorenes (Parfait) mit Waldbeeren-Coulis"
                },
                price: 50,
                dietary: ["vegetarian", "halal"]
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Printed Prices",
        tagColor: "money",
        tone: "good",
        description: "Printed beachfront menu prices with service charge included; mains average ~180 MAD, though coffees and bar drinks carry a Front de Mer markup over inland spots.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Fresh Catch",
        tagColor: "water",
        tone: "good",
        description: "Busy Front de Mer turnover keeps grilled sea bass, shellfish, and bubbling tagines hot and fresh; sensitive stomachs may prefer bottled water over milky blended juices.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Mixed Kitchen",
        tagColor: "food",
        tone: "caution",
        description: "Whole grilled sea bass, paella, and lamb tagines earn strong praise, while heavy cream pastas and bony fish fillets in mixed platters split diner opinions.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Lively Terrace",
        tagColor: "noise",
        tone: "caution",
        description: "Direct oceanfront sunset terrace with cold beer and cocktails; weekend live singers can feel loud near the speakers, and Corniche street parking fills quickly.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Uneven Pacing",
        tagColor: "alert",
        tone: "caution",
        description: "Long-time regulars praise warm family hospitality, yet peak sunset hours often bring slow course intervals, overlooked drink refills, or occasional tip-seeking rounds.",
        state: "verified"
      }
    ],
    // ── 5. REVIEWS (Multi-platform aggregated traveler reviews) ──
    reviewsData: {
      sources: [
        {
          source: 'Google Maps',
          rating: 3.5,
          maxRating: 5,
          reviewCount: 1420,
          url: 'https://maps.google.com/?q=Restaurant+Plage+Bleue+Agadir'
        },
        {
          source: 'Tripadvisor',
          rating: 4.0,
          maxRating: 5,
          reviewCount: 480,
          url: 'https://www.tripadvisor.com/Search?q=Restaurant+Plage+Bleue+Agadir'
        },
        {
          source: 'Restaurant Guru',
          rating: 4.8,
          maxRating: 5,
          reviewCount: 2350,
          url: 'https://restaurantguru.com'
        }
      ],
      reviews: [
        {
          id: 'pb-rev-1',
          author: 'Tripadvisor Traveler',
          gender: 'man',
          postedDate: '2026-09-18',
          source: 'Tripadvisor',
          rating: 5,
          sentiment: 'good',
          tags: ['Ocean View', 'Seafood', 'Drinks', 'Service'],
          text: "Stopped in along the Front de Mer promenade just before sunset and ended up staying all evening. Having an ice-cold Casablanca beer overlooking the waves is unbeatable here, and our whole grilled sea bass arrived piping hot and flaking off the bone. Staff checked on us nicely without rushing the table."
        },
        {
          id: 'pb-rev-2',
          author: 'Google Maps Guest',
          gender: 'woman',
          postedDate: '2026-08-29',
          source: 'Google Maps',
          rating: 2,
          sentiment: 'bad',
          tags: ['Wait Time', 'Service', 'Drinks'],
          text: "Great beachfront location right near the big resorts, unfortunately the service completely fell behind once the terrace filled up around 8pm. Waited over 40 minutes between starters and mains, our second round of drinks was forgotten twice, and the white wine could have been chilled much colder."
        },
        {
          id: 'pb-rev-3',
          author: 'Restaurant Guru Diner',
          gender: 'man',
          postedDate: '2026-10-04',
          source: 'Restaurant Guru',
          rating: 5,
          sentiment: 'good',
          tags: ['Seafood', 'Tagine', 'Live Music'],
          text: "Came back twice during our week in Agadir. The lamb tagine with prunes and almonds was rich and comforting, and on the second night we shared the seafood platter with crispy calamari. Friendly family-run vibe and live acoustic music gave the terrace a wonderful holiday atmosphere."
        },
        {
          id: 'pb-rev-4',
          author: 'Google Maps Guest',
          gender: 'woman',
          postedDate: '2026-07-14',
          source: 'Google Maps',
          rating: 3,
          sentiment: 'neutral',
          tags: ['Seafood', 'Pasta', 'Pricing'],
          text: "You really come here for the ocean breeze and people-watching along Boulevard du 20 Août. My husband loved his paella and grilled sardines, while my salmon cream pasta was a bit heavy. Prices for food are fair for the boardwalk, though coffee and cocktails are noticeably higher than in town."
        },
        {
          id: 'pb-rev-5',
          author: 'Tripadvisor Traveler',
          gender: 'woman',
          postedDate: '2026-06-21',
          source: 'Tripadvisor',
          rating: 5,
          sentiment: 'good',
          tags: ['Ocean View', 'Service', 'Seafood'],
          text: "Front-row table watching the Atlantic sunset turned this into our favorite dinner in Agadir. The gambas al pil-pil still arrived bubbling in garlic olive oil and the Moroccan rosé paired nicely with it. Our waiter was attentive and honest about which fresh catch was best that day."
        },
        {
          id: 'pb-rev-6',
          author: 'Google Maps Guest',
          gender: 'man',
          postedDate: '2026-05-11',
          source: 'Google Maps',
          rating: 2,
          sentiment: 'bad',
          tags: ['Live Music', 'Atmosphere', 'Seafood'],
          text: "If you sit close to the evening singer, the speakers are way too loud to hold a normal conversation, and there were a couple of awkward moments with tip requests between songs. Also felt the mixed grilled fish had too many small bones compared to the sea bass my friend ordered."
        },
        {
          id: 'pb-rev-7',
          author: 'Wanderlog Traveler',
          gender: 'man',
          postedDate: '2026-09-02',
          source: 'Wanderlog',
          rating: 4,
          sentiment: 'good',
          tags: ['Drinks', 'Ocean View', 'Tagine'],
          text: "One of the easier spots on the strip to grab a cold beer or cocktail without formal hotel prices. We shared fish soup, olives, and a chicken preserved lemon tagine while watching families stroll the corniche. Relaxed boardwalk dining—just ask for a corner table if you want it quieter."
        },
        {
          id: 'pb-rev-8',
          author: 'Restaurant Guru Diner',
          gender: 'woman',
          postedDate: '2026-10-16',
          source: 'Restaurant Guru',
          rating: 5,
          sentiment: 'good',
          tags: ['Breakfast', 'Ocean View', 'Service'],
          text: "Discovered it opens early at 7am for breakfast facing the beach before the crowds arrive. Fresh orange juice, warm msemen, and good strong coffee right by the sea—peaceful morning contrast to the lively dinner crowd."
        },
        {
          id: 'pb-rev-9',
          author: 'Tripadvisor Traveler',
          gender: 'man',
          postedDate: '2026-04-19',
          source: 'Tripadvisor',
          rating: 3,
          sentiment: 'neutral',
          tags: ['Parking', 'Atmosphere', 'Wait Time'],
          text: "Solid holiday dinner option if you stay near Tikida Beach or Riu, since you can walk straight off the promenade. Driving in during weekend evenings is frustrating because street parking along the corniche is tight and managed by informal attendants. Once seated, the lamb chops and fries hit the spot."
        },
        {
          id: 'pb-rev-10',
          author: 'Google Maps Guest',
          gender: 'woman',
          postedDate: '2026-03-08',
          source: 'Google Maps',
          rating: 4,
          sentiment: 'good',
          tags: ['Seafood', 'Pricing', 'Drinks'],
          text: "Unpretentious beachfront staple—clear menu prices with no surprise extras added at the end. Loved the avocado shrimp salad and crispy calamari with a cold beer, and the staff gladly brought a blanket when the Atlantic breeze cooled down after dark."
        },
        {
          id: 'pb-rev-11',
          author: 'Tripadvisor Traveler',
          gender: 'woman',
          postedDate: '2025-12-22',
          source: 'Tripadvisor',
          rating: 2,
          sentiment: 'bad',
          tags: ['Drinks', 'Service', 'Wait Time'],
          text: "The ocean terrace view cannot be faulted, but our visit felt disorganized. My fruit smoothie came out overly milky rather than fresh-pressed, and flagging down someone for the bill took fifteen minutes even when three waiters stood by the bar."
        },
        {
          id: 'pb-rev-12',
          author: 'Restaurant Guru Diner',
          gender: 'man',
          postedDate: '2026-08-05',
          source: 'Restaurant Guru',
          rating: 5,
          sentiment: 'good',
          tags: ['Seafood', 'Live Music', 'Service'],
          text: "Classic Agadir boardwalk institution. The royal seafood platter was plenty for two of us after a long beach day, everything tasted freshly off the grill, and the warm welcome made us stay for mint tea listening to the evening band."
        }
      ]
    },
  },

  // =========================================================================
  // 2. RESTAURANT TAM TAM AGADIR (TamTam Brunch & Food)
  // =========================================================================
  {
    id: "e-agadir-tam-tam",
    city: "agadir",
    openTime: "08:00",
    closeTime: "00:00",
    weeklySchedule: [
      { day: "Monday", open: "08:00", close: "00:00", isClosed: false },
      { day: "Tuesday", open: "08:00", close: "00:00", isClosed: false },
      { day: "Wednesday", open: "08:00", close: "00:00", isClosed: false },
      { day: "Thursday", open: "08:00", close: "00:00", isClosed: false },
      { day: "Friday", open: "08:00", close: "00:00", isClosed: false },
      { day: "Saturday", open: "08:00", close: "00:00", isClosed: false },
      { day: "Sunday", open: "08:00", close: "00:00", isClosed: false }
    ],

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "family", "couple", "solo"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner", "snack"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Mediterranean", "Moroccan", "International", "Cafe & Pastry", "Italian"],
      cuisineTags: ["international", "cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["nomad", "first-timer", "budget"],
      vibeTags: ["trendy", "lively", "modern", "stylish"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard"],
      tags: ["breakfast", "brunch", "pastry", "budget", "dry", "dinner", "terrace"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant TamTam Brunch & Food",
      neighborhood: "Hay Mohammadi",
      description: "A trendy urban brunch destination and contemporary restaurant in Hay Mohammadi. Renowned for its lavish all-day brunch platters, crispy shrimp Caesar salads, artisan smash burgers, creamy salmon tagliatelle, and artisanal mocktails.",
      tip: "Visit between 09:30 and 12:00 for the signature TamTam Brunch board, or stop by in the late afternoon for their molten San Sebastian cheesecake and signature iced teas.",
      badge: "local-favorite",
      bestDishes: [
        "Brunch TamTam Signature",
        "César aux Gambas Croustillantes",
        "Fraîcheur d'Avocat & Crevettes",
        "Burger Gourmet Black Angus",
        "Tagliatelles au Saumon Frais",
        "San Sebastian Cheesecake"
      ],
      pros: [
        "Outstanding brunch, breakfast, and specialty coffee options",
        "Modern, beautifully designed interior with cozy terrace seating",
        "Strictly 100% halal with an inventive non-alcoholic mixology bar",
        "Prompt, courteous service and active local delivery service"
      ],
      cons: [
        "Can experience short wait times during Sunday brunch rush hours",
        "Strictly non-alcoholic venue"
      ],
      googleRating: 4.4,
      googleReviewCount: 850,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 190,
      theforkRating: 4.4,
      theforkReviewCount: 95,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 850,
      openTime: "08:00",
      closeTime: "00:00",
      weeklySchedule: [
        { day: "Monday", openTime: "08:00", closeTime: "00:00", isClosed: false },
        { day: "Tuesday", openTime: "08:00", closeTime: "00:00", isClosed: false },
        { day: "Wednesday", openTime: "08:00", closeTime: "00:00", isClosed: false },
        { day: "Thursday", openTime: "08:00", closeTime: "00:00", isClosed: false },
        { day: "Friday", openTime: "08:00", closeTime: "00:00", isClosed: false },
        { day: "Saturday", openTime: "08:00", closeTime: "00:00", isClosed: false },
        { day: "Sunday", openTime: "08:00", closeTime: "00:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Essada 3, 28 Rdc Immeuble 11 GH T2, Hay Mohammadi, Agadir 80000, Morocco",
        lat: 30.4365,
        lng: -9.5815
      },
      address: "Essada 3, 28 Rdc Immeuble 11 GH T2, Hay Mohammadi, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.4365,
        lng: -9.5815
      },
      googleMapsUrl: "https://maps.google.com/?q=Tam+Tam+Restaurant+Agadir+Hay+Mohammadi",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212525237688",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/tamtam.agadir",
      languagesSpoken: ["French", "English", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "brunch-matinal",
            title: "Brunch & Formules Matinales (Brunch & Morning Spreads)",
            description: "Servis dès 08h00 : viennoiseries, œufs pochés et douceurs",
            items: [
              {
                id: "tt-brunch-signature",
                name: "Grand Brunch TamTam Signature",
                localName: "برانش طمطم الملكي الشامل (بيض، أفوكادو، سلمون، بانكيك، عصير طازج وقهوة)",
                translations: {
                  ar: "برانش طمطم الملكي الشامل (بيض، أفوكادو، سلمون، بانكيك، عصير طازج وقهوة)",
                  en: "Signature TamTam brunch board: eggs benedict, smoked salmon, avocado toast, fluffy pancakes, fresh juice & coffee",
                  es: "Gran brunch TamTam: huevos benedictinos, salmón ahumado, tostada de aguacate, tortitas y café",
                  de: "TamTam Signature Brunchplatte: Eier Benedict, Räucherlachs, Avocado-Toast, Pancakes, frischer Saft und Kaffee"
                },
                price: 85,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Formule complète très copieuse"
              },
              {
                id: "tt-avocado-toast",
                name: "Toast Avocat & Œufs Pochés au Saumon",
                localName: "توست الأفوكادو المهروس مع البيض المسلوق وشرائح السلمون المدخن",
                translations: {
                  ar: "توست الأفوكادو المهروس مع البيض المسلوق وشرائح السلمون المدخن",
                  en: "Sourdough toast topped with smashed avocado, poached farm eggs, Norwegian smoked salmon & seeds",
                  es: "Tostada de pan de masa madre con aguacate, huevos poché y salmón ahumado",
                  de: "Sauerteigtoast mit zerdrückter Avocado, pochierten Eiern und Räucherlachs"
                },
                price: 75,
                dietary: ["halal"]
              },
              {
                id: "tt-pancakes-fruits",
                name: "Pancakes Fluffy aux Fruits Rouges & Sirop d'Érable",
                localName: "بانكيك قطني منفوش بالفواكه الحمراء الطازجة وشراب القيقب",
                translations: {
                  ar: "بانكيك قطني منفوش بالفواكه الحمراء الطازجة وشراب القيقب",
                  en: "Fluffy stacked pancakes with mixed fresh berries, whipped cream, and pure maple syrup",
                  es: "Tortitas esponjosas con frutos rojos frescos, nata montada y sirope de arce",
                  de: "Fluffige Pfannkuchen mit frischen Beeren, Schlagsahne und Ahornsirup"
                },
                price: 55,
                dietary: ["vegetarian", "halal"]
              }
            ]
          },
          {
            id: "salades-fraicheurs",
            title: "Salades Gourmandes & Entrées (Salads & Appetizers)",
            description: "Bols colorés et recettes signatures élaborées minute",
            items: [
              {
                id: "tt-cesar-gambas",
                name: "Salade César aux Gambas Croustillantes",
                localName: "سلطة سيزر بالجمبري المقرمش والبارميزان وصلصة السيزر المنزلية",
                translations: {
                  ar: "سلطة سيزر بالجمبري المقرمش والبارميزان وصلصة السيزر المنزلية",
                  en: "Crispy panko prawns on romaine hearts with shaved parmesan, garlic croutons, and house Caesar dressing",
                  es: "Ensalada César con langostinos crujientes al panko, parmesano y picatostes",
                  de: "Caesar Salad mit knusprigen Panko-Garnelen, gehobeltem Parmesan und Knoblauch-Croutons"
                },
                price: 79,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "tt-avocat-crevettes",
                name: "Fraîcheur d'Avocat & Crevettes Roses",
                localName: "سلطة الأفوكادو اللذيذة والروبيان مع الحمضيات والريحان",
                translations: {
                  ar: "سلطة الأفوكادو اللذيذة والروبيان مع الحمضيات والريحان",
                  en: "Fresh local avocado diced with Atlantic pink shrimp, citrus vinaigrette, and fresh basil",
                  es: "Tartar fresco de aguacate con gambas rosas, vinagreta de cítricos y albahaca",
                  de: "Avocado-Garnelen-Salat mit Zitrusschmand und frischem Basilikum"
                },
                price: 79,
                dietary: ["halal"]
              },
              {
                id: "tt-burrata",
                name: "Burrata Crémeuse aux Tomates Cerises Rôties",
                localName: "جبنة بوراتا الإيطالية الطازجة مع الطماطم الكرزية والبيستو",
                translations: {
                  ar: "جبنة بوراتا الإيطالية الطازجة مع الطماطم الكرزية والبيستو",
                  en: "Fresh Italian burrata with blistered cherry tomatoes, basil pesto, and balsamic glaze",
                  es: "Burrata cremosa con tomates cherry asados, pesto de albahaca y reducción balsámica",
                  de: "Cremige Burrata mit geschmorten Kirschtomaten, Basilikumpesto und Balsamico"
                },
                price: 85,
                dietary: ["vegetarian", "halal"]
              }
            ]
          },
          {
            id: "plats-burgers-pates",
            title: "Burgers Gourmets, Pâtes & Plats (Mains & Pasta)",
            description: "Viandes sélectionnées et pâtes fraîches préparées minute",
            items: [
              {
                id: "tt-burger-angus",
                name: "Burger Gourmet Black Angus TamTam",
                localName: "برغر لحم البلاك أنجوس الفاخر بالجبن الذائب والصلصة الخاصة والبطاطس المقرمشة",
                translations: {
                  ar: "برغر لحم البلاك أنجوس الفاخر بالجبن الذائب والصلصة الخاصة والبطاطس المقرمشة",
                  en: "Prime Black Angus patty in brioche bun with cheddar, caramelized onions, house relish & fries",
                  es: "Hamburguesa de ternera Black Angus con queso cheddar, cebolla caramelizada y patatas",
                  de: "Black Angus Burger im Brioche-Bun mit geschmolzenem Cheddar, Röstzwiebeln und Pommes"
                },
                price: 95,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "tt-tagliatelle-saumon",
                name: "Tagliatelles au Saumon Frais & Crème d'Aneth",
                localName: "معكرونة تالياتيلي بالسلمون الطازج وكريمة الشبت والليمون",
                translations: {
                  ar: "معكرونة تالياتيلي بالسلمون الطازج وكريمة الشبت والليمون",
                  en: "Fresh tagliatelle ribbon pasta tossed with fresh salmon chunks, lemon-dill cream, and parmesan",
                  es: "Tagliatelle frescos con dados de salmón fresco, crema de eneldo y parmesano",
                  de: "Frische Tagliatelle mit Lachsfiletstücken in Zitronen-Dill-Rahmsauce"
                },
                price: 90,
                dietary: ["halal"]
              },
              {
                id: "tt-filet-boeuf",
                name: "Filet de Bœuf Grillé Sauce Champignons Sauvages",
                localName: "فيليه لحم بقري مشوي بصلصة الفطر البري يقدم مع الخضار الموسمية",
                translations: {
                  ar: "فيليه لحم بقري مشوي بصلصة الفطر البري يقدم مع الخضار الموسمية",
                  en: "Tender grilled beef fillet served with wild mushroom sauce, potato purée, and seasonal vegetables",
                  es: "Solomillo de ternera a la parrilla con salsa de setas silvestres y puré de patatas",
                  de: "Zartes Rinderfilet vom Grill mit Waldpilzsauce und feinem Kartoffelpüree"
                },
                price: 140,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "desserts-mocktails",
            title: "Mocktails & Pâtisseries (Drinks & Sweets)",
            description: "Boissons signatures pressées à froid et desserts maison",
            items: [
              {
                id: "tt-san-sebastian",
                name: "San Sebastian Cheesecake Coulant",
                localName: "تشيز كيك سان سيباستيان الإسباني الشهير المحروق مع شوكولاتة بلجيكية ذائبة",
                translations: {
                  ar: "تشيز كيك سان سيباستيان الإسباني الشهير المحروق مع شوكولاتة بلجيكية ذائبة",
                  en: "Molten creamy Basque burnt cheesecake served with warm Belgian chocolate drizzle",
                  es: "Tarta de queso estilo San Sebastián con centro cremoso y chocolate belga caliente",
                  de: "San Sebastian Cheesecake mit cremig-weichem Kern und warmer belgischer Schokolade"
                },
                price: 55,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "tt-virgin-mojito-passion",
                name: "Virgin Mojito Fruit de la Passion",
                localName: "موهيتو باشن فروت المنعش بالنعناع والليمون",
                translations: {
                  ar: "موهيتو باشن فروت المنعش بالنعناع والليمون",
                  en: "Refreshing non-alcoholic passion fruit mojito with fresh mint and sparkling soda",
                  es: "Mojito virgen refrescante de fruta de la pasión con menta fresca y lima",
                  de: "Erfrischender alkoholfreier Passionsfrucht-Mojito mit frischer Minze"
                },
                price: 45,
                dietary: ["vegan", "halal"]
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  // =========================================================================
  // 3. RESTAURANT CASA DE ESPAÑA AGADIR
  // =========================================================================
  {
    id: "e-agadir-casa-de-espana",
    city: "agadir",
    openTime: "12:00",
    closeTime: "02:00",
    weeklySchedule: [
      { day: "Monday", open: "12:00", close: "02:00", isClosed: false },
      { day: "Tuesday", open: "12:00", close: "02:00", isClosed: false },
      { day: "Wednesday", open: "12:00", close: "02:00", isClosed: false },
      { day: "Thursday", open: "12:00", close: "02:00", isClosed: false },
      { day: "Friday", open: "12:00", close: "02:00", isClosed: false },
      { day: "Saturday", open: "12:00", close: "02:00", isClosed: false },
      { day: "Sunday", open: "12:00", close: "02:00", isClosed: false }
    ],

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "family", "solo"],
      mealTypes: ["lunch", "dinner", "late-night", "drinks"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Mediterranean", "Seafood", "International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "culture", "adventure"],
      vibeTags: ["lively", "authentic", "festive", "convivial"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 20,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard"],
      tags: ["late-night", "terrace", "alcohol", "dinner", "lunch"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Casa de España",
      neighborhood: "Centre Ville",
      description: "Agadir's historic Spanish tavern and restaurant located at N° 19 Avenue Hassan II near Cinéma Rialto. Famous for traditional Spanish tapas (gambas al ajillo, pulpo a la gallega, homemade tortilla), genuine seafood paellas, Spanish wines, house sangria, and live football broadcasts in a warm, authentic atmosphere.",
      tip: "The seafood paella takes about 25–30 minutes to cook fresh from scratch; order a pitcher of homemade sangria with patatas bravas and garlic prawns while you wait.",
      badge: "local-favorite",
      bestDishes: [
        "Paella Tradicional de Mariscos",
        "Pulpo a la Gallega",
        "Gambas al Ajillo (Crevettes à l'Ail)",
        "Tortilla Española Casera",
        "Patatas Bravas",
        "Crème Catalane Caramélisée"
      ],
      pros: [
        "Authentic Iberian tapas and paellas prepared to order with fresh Atlantic seafood",
        "Licensed venue with Spanish wines, cold draft beer, and homemade sangria",
        "Welcoming Iberian bodega ambiance with live football broadcasts",
        "Continuous service from noon until 02:00 AM"
      ],
      cons: [
        "Can become loud and very crowded during major European football nights",
        "Smoking is permitted in certain indoor/covered sections"
      ],
      googleRating: 4.2,
      googleReviewCount: 785,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 310,
      theforkRating: 4.2,
      theforkReviewCount: 120,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 785,
      openTime: "12:00",
      closeTime: "02:00",
      weeklySchedule: [
        { day: "Monday", openTime: "12:00", closeTime: "02:00", isClosed: false },
        { day: "Tuesday", openTime: "12:00", closeTime: "02:00", isClosed: false },
        { day: "Wednesday", openTime: "12:00", closeTime: "02:00", isClosed: false },
        { day: "Thursday", openTime: "12:00", closeTime: "02:00", isClosed: false },
        { day: "Friday", openTime: "12:00", closeTime: "02:00", isClosed: false },
        { day: "Saturday", openTime: "12:00", closeTime: "02:00", isClosed: false },
        { day: "Sunday", openTime: "12:00", closeTime: "02:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "N° 19, Immeuble A, Avenue Hassan II, Centre Ville, Agadir 80000, Morocco",
        lat: 30.4212,
        lng: -9.5985
      },
      address: "N° 19, Immeuble A, Avenue Hassan II, Centre Ville, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.4212,
        lng: -9.5985
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Casa+de+Espana+Agadir",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212528828211",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://casadeespanaagadir.com",
      instagram: "not-available",
      languagesSpoken: ["Spanish", "French", "English", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "tapas-raciones",
            title: "Tapas Españolas & Raciones (Spanish Tapas & Starters)",
            description: "Plats et tapas authentiques à partager selon la tradition ibérique",
            items: [
              {
                id: "cde-gambas-ajillo",
                name: "Gambas al Ajillo (Crevettes à l'Ail)",
                localName: "جمبري مطهو بزيت الزيتون البكر والثوم المحمر والفلفل الحار",
                translations: {
                  ar: "جمبري مطهو بزيت الزيتون البكر والثوم المحمر والفلفل الحار",
                  en: "Sizzling garlic prawns sautéed in extra virgin olive oil and dried chili",
                  es: "Gambas al ajillo chisporroteantes con ajo dorado, guindilla y aceite virgen extra",
                  de: "Brutzelnde Knoblauchgarnelen in nativem Olivenöl mit Chili"
                },
                price: 95,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "cde-pulpo-gallega",
                name: "Pulpo a la Gallega (Poulpe à la Galicienne)",
                localName: "أخطبوط طري على الطريقة الجاليكية مع البطاطس وزيت الزيتون والبابريكا المدخنة",
                translations: {
                  ar: "أخطبوط طري على الطريقة الجاليكية مع البطاطس وزيت الزيتون والبابريكا المدخنة",
                  en: "Tender Galician-style octopus over sliced potatoes with sea salt and smoked paprika",
                  es: "Pulpo a la gallega sobre patatas cocidas con pimentón de la Vera y flor de sal",
                  de: "Galicischer Oktopus auf Kartoffelscheiben mit geräuchertem Paprikapulver und Meersalz"
                },
                price: 130,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "cde-tortilla-espanola",
                name: "Tortilla Española Casera",
                localName: "تورتيلا إسبانية منزلية تقليدية بالبطاطس والبيض والبصل المكرمل",
                translations: {
                  ar: "تورتيلا إسبانية منزلية تقليدية بالبطاطس والبيض والبصل المكرمل",
                  en: "Classic homemade Spanish potato and caramelized onion omelet",
                  es: "Tortilla española clásica casera de patatas y cebolla pochada",
                  de: "Klassisches hausgemachtes spanisches Kartoffel-Omelett mit Zwiebeln"
                },
                price: 45,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "cde-patatas-bravas",
                name: "Patatas Bravas Tradicionales",
                localName: "بطاطس برافاس مقرمشة مع الصلصة الحارة والمايونيز بالثوم",
                translations: {
                  ar: "بطاطس برافاس مقرمشة مع الصلصة الحارة والمايونيز بالثوم",
                  en: "Crispy fried potato chunks smothered in spicy brava sauce and creamy garlic aïoli",
                  es: "Patatas bravas crujientes con salsa brava picante casera y alioli suave",
                  de: "Knusprige Patatas Bravas mit pikanter Bravasauce und cremigem Knoblauch-Aioli"
                },
                price: 50,
                isSpicy: true,
                dietary: ["vegetarian", "halal"]
              }
            ]
          },
          {
            id: "paellas-arroces",
            title: "Paellas & Riz Ibériques (Paellas & Rice)",
            description: "Cuites minute au bouillon de poisson safrané (temps d'attente : ~25 min)",
            items: [
              {
                id: "cde-paella-mariscos",
                name: "Paella Tradicional de Mariscos",
                localName: "بايلا فواكه البحر الإسبانية التقليدية بالجمبري والكالمار وبلح البحر والزعفران",
                translations: {
                  ar: "بايلا فواكه البحر الإسبانية التقليدية بالجمبري والكالمار وبلح البحر والزعفران",
                  en: "Authentic saffron seafood paella with king prawns, calamari, fresh mussels, and white fish",
                  es: "Paella marinera tradicional con gambas, calamares, mejillones y fumet de pescado",
                  de: "Traditionelle Meeresfrüchte-Paella mit Garnelen, Tintenfisch, Muscheln und Safranreis"
                },
                price: 180,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Prix par personne • Préparation minute"
              },
              {
                id: "cde-paella-mixta",
                name: "Paella Valenciana Mixta",
                localName: "بايلا فالنسيا المشكلة بالدجاج وفواكه البحر والخضار",
                translations: {
                  ar: "بايلا فالنسيا المشكلة بالدجاج وفواكه البحر والخضار",
                  en: "Classic mixed Valencian paella with chicken, calamari, shrimp, and green beans",
                  es: "Paella mixta valenciana con pollo dorado, mariscos y judías verdes",
                  de: "Gemischte valencianische Paella mit Hähnchen, Meeresfrüchten und grünen Bohnen"
                },
                price: 160,
                dietary: ["halal"]
              },
              {
                id: "cde-arroz-negro",
                name: "Arroz Negro con Calamares y Alioli",
                localName: "أرز أسود بحبر السيبيا الطبيعي وقطع الحبار مع صلصة الأليولي",
                translations: {
                  ar: "أرز أسود بحبر السيبيا الطبيعي وقطع الحبار مع صلصة الأليولي",
                  en: "Black squid ink rice simmered with tender cuttlefish chunks, served with garlic aïoli",
                  es: "Arroz negro tradicional en tinta de sepia con calamares y alioli casero",
                  de: "Schwarzer Tintenfisch-Reis mit Calamari-Stücken und feinem Knoblauch-Aioli"
                },
                price: 170,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "carnes-pescados",
            title: "Plats Principaux & Poissons (Meats & Fish)",
            description: "Grillades de poissons frais de l'Atlantique et viandes sélectionnées",
            items: [
              {
                id: "cde-solomillo-ternera",
                name: "Solomillo de Ternera al Vino Tinto",
                localName: "فيليه لحم بقري مشوي بصلصة النبيذ الأحمر والبطاطس المحمرة",
                translations: {
                  ar: "فيليه لحم بقري مشوي بصلصة النبيذ الأحمر والبطاطس المحمرة",
                  en: "Tender grilled beef fillet served with a rich red wine reduction and roasted potatoes",
                  es: "Solomillo de ternera a la plancha con reducción de vino tinto y patatas panaderas",
                  de: "Zartes Rinderfilet mit Rotweinreduktion und Röstkartoffeln"
                },
                price: 160,
                dietary: ["halal"]
              },
              {
                id: "cde-lubina-plancha",
                name: "Lubina a la Plancha con Ajo y Perejil",
                localName: "سمك الدرعي الطازج مشوي على البلانشا بزيت الزيتون والثوم والليمون",
                translations: {
                  ar: "سمك الدرعي الطازج مشوي على البلانشا بزيت الزيتون والثوم والليمون",
                  en: "Fresh sea bass fillet seared à la plancha with extra virgin olive oil, garlic, and parsley",
                  es: "Filete de lubina fresca a la plancha con ajo frito, perejil y verduras",
                  de: "Frisches Wolfsbarschfilet von der Plancha mit Knoblauch-Kräuter-Öl"
                },
                price: 150,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "postres-caseros",
            title: "Postres Caseros (Desserts)",
            description: "Douceurs espagnoles traditionnelles faites maison",
            items: [
              {
                id: "cde-crema-catalana",
                name: "Crema Catalana Caramelizada al Momento",
                localName: "كريم كاتالانا الإسباني المكرمل بالسكر المحروق والقرفة",
                translations: {
                  ar: "كريم كاتالانا الإسباني المكرمل بالسكر المحروق والقرفة",
                  en: "Traditional rich Catalan cream scented with lemon and cinnamon under a crisp caramelized sugar crust",
                  es: "Crema catalana artesanal caramelizada al momento con costra de azúcar crujiente",
                  de: "Katalanische Creme mit karamellisierter Zuckerkruste und Zitrusschale"
                },
                price: 65,
                isSignature: true,
                dietary: ["vegetarian"]
              },
              {
                id: "cde-flan-casa",
                name: "Flan Tradicional con Nata y Caramelo",
                localName: "فلان إسباني تقليدي بالكراميل والكريمة المخفوقة",
                translations: {
                  ar: "فلان إسباني تقليدي بالكراميل والكريمة المخفوقة",
                  en: "Classic baked Spanish egg flan with amber caramel syrup and whipped cream",
                  es: "Flan de huevo casero tradicional con caramelo líquido y nata",
                  de: "Klassischer spanischer Eierflan mit Karamellsirup und Sahne"
                },
                price: 65,
                dietary: ["vegetarian"]
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  // =========================================================================
  // 4. RESTAURANT AL WALIMA AGADIR
  // =========================================================================
  {
    id: "e-agadir-al-walima",
    city: "agadir",
    openTime: "12:00",
    closeTime: "00:00",
    weeklySchedule: [
      { day: "Monday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Tuesday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Wednesday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Thursday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Friday", open: "12:00", close: "00:00", isClosed: false, note: "Couscous Royal servi à midi" },
      { day: "Saturday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Sunday", open: "12:00", close: "00:00", isClosed: false }
    ],

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Berber", "Grill & BBQ"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["authentic", "hospitable", "warm", "traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 12,
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
      paymentMethods: ["credit_card", "cash", "visa", "mastercard"],
      tags: ["tagine", "couscous", "budget", "dry", "dinner", "pastilla"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Al Walima",
      neighborhood: "Centre Ville",
      description: "An authentic Moroccan culinary establishment situated at Jardin Lalla Meryem on Rue de Marrakech. Renowned for genuine Moroccan banquet cooking: slow-simmered lamb and monkfish tagines, fragrant Friday royal couscous, authentic chicken rfissa, tender charcoal brochettes, and signature herbal mint tea.",
      tip: "Order the traditional Tanjia Marrakchia or the monkfish (lotte) tagine with chermoula, and finish your meal with their signature Thé Al Walima infused with Souss herbs.",
      badge: "local-favorite",
      bestDishes: [
        "Tajine d'Agneau aux Pruneaux & Amandes",
        "Tajine de Lotte (Monkfish) à la Chermoula",
        "Rfissa Traditionnelle au Poulet Beldi",
        "Couscous Royal aux Sept Légumes",
        "Pastilla au Poulet & Amandes",
        "Thé Al Walima Signature"
      ],
      pros: [
        "Deeply authentic, homestyle Moroccan recipes prepared with market-fresh spices",
        "Attentive and hospitable family management led by team manager Malak",
        "Exceptional price-to-portion ratio located right in central Agadir",
        "Beautifully decorated dining room combining Moroccan zellige tilework with modern comfort"
      ],
      cons: [
        "Strictly non-alcoholic venue",
        "Kitchen prepares certain slow-braised specialties from scratch, which may involve modest waits during peak dining hours"
      ],
      googleRating: 4.8,
      googleReviewCount: 1230,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 220,
      theforkRating: 4.6,
      theforkReviewCount: 90,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1230,
      openTime: "12:00",
      closeTime: "00:00",
      weeklySchedule: [
        { day: "Monday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Tuesday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Wednesday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Thursday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Friday", openTime: "12:00", closeTime: "00:00", isClosed: false, note: "Couscous Royal servi à midi" },
        { day: "Saturday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Sunday", openTime: "12:00", closeTime: "00:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "N° 9, Jardin Lalla Meryem, Bloc 1, Rue de Marrakech, Centre Ville, Agadir 80000, Morocco",
        lat: 30.423,
        lng: -9.5995
      },
      address: "N° 9, Jardin Lalla Meryem, Bloc 1, Rue de Marrakech, Centre Ville, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.423,
        lng: -9.5995
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Al+Walima+Agadir+Jardin+Lalla+Meryem",
      reservationMethod: ["phone", "website", "walk-in"],
      reservationContact: "+212627711514",
      whatsappNumber: "+212627711514",
      bookingUrl: "https://www.restaurantalwalima.com",
      website: "https://www.restaurantalwalima.com",
      instagram: "not-available",
      languagesSpoken: ["Arabic/Darija", "French", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "entrees-terroir",
            title: "Entrées du Terroir & Pastillas (Starters & Pastilla)",
            description: "Saveurs d'accueil marocaines et salades cuisinées aux épices douces",
            items: [
              {
                id: "walima-pastilla-poulet",
                name: "Pastilla Traditionnelle au Poulet & Amandes",
                localName: "بسطيلة الدجاج الفاسية باللوز المقلي والقرفة والسكر الصقيل",
                translations: {
                  ar: "بسطيلة الدجاج الفاسية باللوز المقلي والقرفة والسكر الصقيل",
                  en: "Traditional chicken pastilla with layers of flaky warka pastry, roasted almonds, and cinnamon",
                  es: "Pastela tradicional de pollo y almendras tostadas con canela y azúcar glas",
                  de: "Traditionelle Hähnchenpastilla im feinen Filoteig mit gerösteten Mandeln und Zimt"
                },
                price: 75,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "walima-trio-salades",
                name: "Trio de Salades Marocaines Cuisinées (Zaalouk & Taktouka)",
                localName: "تشكيلة مقبلات مغربية أصيلة (زعلوك الباذنجان، تكتوكة الفلفل، جزر مشرمل)",
                translations: {
                  ar: "تشكيلة مقبلات مغربية أصيلة (زعلوك الباذنجان، تكتوكة الفلفل، جزر مشرمل)",
                  en: "Trio of cooked Moroccan mezze salads: smoky eggplant zaalouk, roasted pepper taktouka, and spiced carrots",
                  es: "Trío de ensaladas cocinadas marroquíes: zaalouk de berenjenas, taktouka y zanahorias especiadas",
                  de: "Trio marokkanischer Salate: Auberginen-Zaalouk, Paprika-Taktouka und Gewürzkarotten"
                },
                price: 50,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "walima-harira",
                name: "Harira Fassie Traditionnelle aux Dattes",
                localName: "حريرة فاسية أصيلة بالحمص والعدس واللحم تقدم مع التمر والشباكية",
                translations: {
                  ar: "حريرة فاسية أصيلة بالحمص والعدس واللحم تقدم مع التمر والشباكية",
                  en: "Traditional slow-simmered rich Moroccan tomato and lentil soup served with dates and sweet chebbakia",
                  es: "Sopa tradicional marroquí harira servida con dátiles y chebbakia",
                  de: "Traditionelle marokkanische Harira-Suppe mit Kichererbsen, Linsen, Datteln und Gebäck"
                },
                price: 40,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "tajines-plats-anciennes",
            title: "Tajines Cuisinés à l'Ancienne (Authentic Tagines & Tanjia)",
            description: "Mijotés patiemment en plats de terre cuite sur braises douces",
            items: [
              {
                id: "walima-tajine-agneau",
                name: "Tajine d'Agneau aux Pruneaux & Amandes Dorées",
                localName: "طاجين لحم الغنم الطري بالبرقوق المعسل واللوز المقلي والسمسم",
                translations: {
                  ar: "طاجين لحم الغنم الطري بالبرقوق المعسل واللوز المقلي والسمسم",
                  en: "Tender slow-braised lamb tagine with caramelized prunes, toasted golden almonds, and sesame seeds",
                  es: "Tajine de cordero estofado con ciruelas pasas caramelizadas, almendras doradas y sésamo",
                  de: "Geschmorter Lammtagine mit karamellisierten Pflaumen, Mandeln und Sesam"
                },
                price: 110,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "walima-tajine-lotte",
                name: "Tajine de Lotte (Monkfish) à la Chermoula Soussia",
                localName: "طاجين سمك اللوط بالخضار وشرمولة سوسية أصيلة",
                translations: {
                  ar: "طاجين سمك اللوط بالخضار وشرمولة سوسية أصيلة",
                  en: "Monkfish fillet tagine simmered in traditional Souss chermoula marinade, tomatoes, and bell peppers",
                  es: "Tajine de rape fresco con chermoula tradicional del Souss, tomate y pimientos",
                  de: "Seeteufeltagine (Lotte) geschmort in traditioneller Souss-Chermoula mit Gemüse"
                },
                price: 125,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "walima-tanjia",
                name: "Tanjia Marrakchia Cuite à l'Étouffée",
                localName: "طنجية مراكشية أصيلة بلحم العجل والكمون الصوفي والليمون المصير",
                translations: {
                  ar: "طنجية مراكشية أصيلة بلحم العجل والكمون الصوفي والليمون المصير",
                  en: "Traditional Marrakesh clay-pot veal tanjia braised for hours with preserved lemon, cumin, and smen butter",
                  es: "Tanjia tradicional marrakchí de ternera cocinada a fuego lento en vasija de barro",
                  de: "Traditionelle Tanjia Marrakchia aus dem Tonkrug mit geschmortem Kalbfleisch und Salzzitrone"
                },
                price: 120,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "walima-tajine-poulet",
                name: "Tajine de Poulet Beldi au Citron Confit & Olives Rouges",
                localName: "طاجين الدجاج البلدي بالحامض المصير والزيتون الأحمر والزعفران الحر",
                translations: {
                  ar: "طاجين الدجاج البلدي بالحامض المصير والزيتون الأحمر والزعفران الحر",
                  en: "Free-range chicken tagine cooked with cured lemons, red olives, and saffron ginger gravy",
                  es: "Tajine de pollo de corral con limones confitados, aceitunas rojas y azafrán",
                  de: "Hähnchentagine vom Freilandhuhn mit eingelegten Zitronen und roten Oliven"
                },
                price: 95,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "couscous-rfissa",
            title: "Couscous, Rfissa & Plats de Fête (Feast Specialties)",
            description: "Plats emblématiques de banquet marocain préparés selon les rituels familiaux",
            items: [
              {
                id: "walima-couscous-royal",
                name: "Couscous Royal aux Sept Légumes (Bœuf, Agneau, Poulet)",
                localName: "كسكس ملكي فاخر بالسبع خضار واللحم البقري والغنم والدجاج والبصل المعسل",
                translations: {
                  ar: "كسكس ملكي فاخر بالسبع خضار واللحم البقري والغنم والدجاج والبصل المعسل",
                  en: "Grand Royal Couscous with tender beef, lamb, chicken, 7 seasonal vegetables, and caramelized tfaya",
                  es: "Cuscús real marroquí completo con ternera, cordero, pollo, siete verduras y tfaya",
                  de: "Königlicher marokkanischer Couscous mit Rind, Lamm, Hähnchen, sieben Gemüsesorten und Tfaya"
                },
                price: 115,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Incontournable du vendredi midi et des repas de fête"
              },
              {
                id: "walima-rfissa",
                name: "Rfissa Traditionnelle au Poulet Beldi & Trid",
                localName: "رفيسة تقليدية بالدجاج البلدي والتريد والعدس والحلبة ورأس الحانوت",
                translations: {
                  ar: "رفيسة تقليدية بالدجاج البلدي والتريد والعدس والحلبة ورأس الحانوت",
                  en: "Traditional celebration rfissa: shredded trid crepes soaked in spiced chicken broth with lentils and fenugreek",
                  es: "Rfissa tradicional de pollo campero con finas láminas de trid, lentejas y especias",
                  de: "Traditionelle Festtags-Rfissa mit Hähnchen, Trid-Teigblättern, Linsen und Gewürzbrühe"
                },
                price: 95,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "walima-grill-mix",
                name: "Mixte Grillé Al Walima (Brochettes & Merguez)",
                localName: "مشاوي مشكلة الوليمة (كباب كفتة، كباب دجاج، نقانق مرقاز)",
                translations: {
                  ar: "مشاوي مشكلة الوليمة (كباب كفتة، كباب دجاج، نقانق مرقاز)",
                  en: "Charcoal-grilled skewer platter: seasoned minced kefta, chicken skewers, and artisanal merguez with fries",
                  es: "Parrillada mixta de brochetas de kefta, pollo y merguez artesanal al carbón",
                  de: "Gemischte Grillplatte vom Holzkohlegrill mit Kefta, Hähnchen und Merguez"
                },
                price: 70,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "douceurs-the-walima",
            title: "Douceurs & Thé Al Walima (Desserts & Tea Ritual)",
            description: "Touches sucrées parfumées à l'eau de fleur d'oranger et thé du Souss",
            items: [
              {
                id: "walima-the-signature",
                name: "Thé Al Walima aux Herbes du Souss",
                localName: "شاي الوليمة الملكي بالأعشاب الطبية والنعناع السوسي",
                translations: {
                  ar: "شاي الوليمة الملكي بالأعشاب الطبية والنعناع السوسي",
                  en: "Signature royal Moroccan green mint tea slow-brewed with wild Souss aromatic herbs and absinthe (chiba)",
                  es: "Té verde tradicional Al Walima con menta fresca y hierbas aromáticas del Souss",
                  de: "Königlicher Al Walima Minztee verfeinert mit aromatischen Wildkräutern aus dem Souss"
                },
                price: 25,
                isSignature: true,
                dietary: ["vegan", "halal"]
              },
              {
                id: "walima-salade-oranges",
                name: "Salade d'Oranges à la Cannelle & Eau de Fleur d'Oranger",
                localName: "سلطة البرتقال الطازج بالقرفة وماء الزهر المقطر والنعناع",
                translations: {
                  ar: "سلطة البرتقال الطازج بالقرفة وماء الزهر المقطر والنعناع",
                  en: "Freshly sliced Moroccan oranges dusted with ground cinnamon and pure distilled orange blossom water",
                  es: "Ensalada de naranjas frescas con canela molida y agua de azahar",
                  de: "Frischer Orangensalat mit gemahlenem Zimt und Orangenblütenwasser"
                },
                price: 35,
                dietary: ["vegan", "halal"]
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  // =========================================================================
  // 1. RESTAURANT JADE | ASIAN FUSION
  // =========================================================================
  {
    id: "e-agadir-jade-asian-fusion",
    city: "agadir",
    openTime: "12:00",
    closeTime: "00:00",
    weeklySchedule: [
      { day: "Monday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Tuesday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Wednesday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Thursday", open: "11:00", close: "00:00", isClosed: false },
      { day: "Friday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Saturday", open: "12:00", close: "00:00", isClosed: false },
      { day: "Sunday", open: "12:00", close: "00:00", isClosed: false }
    ],

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner", "late-night", "drinks"],
      experienceTypes: ["casual", "fine-dining"],
      foodStyles: ["International", "Seafood", "Vegetarian/Vegan"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "adventure", "nomad"],
      vibeTags: ["trendy", "coastal", "breezy", "modern"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 22,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard"],
      tags: ["sunset", "terrace", "alcohol", "dinner", "lunch", "seafood", "late-night"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Jade Asian Fusion",
      neighborhood: "Secteur Balnéaire",
      description: "A chic Asian-fusion jewel on Agadir's seaside promenade (Lot N° 6, right next to Ô Playa). Renowned for breaking the coastal grill-and-pizza monotony with creative sushi rolls, crispy dynamite shrimp, Cantonese sizzling beef, authentic Pad Thai, and glass-enclosed oceanfront terrace dining.",
      tip: "Request an outdoor table behind the glass panels on the terrace: you get sweeping Atlantic sunset panoramas protected from the sea breeze. Don't skip the signature Dynamite Shrimp starter.",
      badge: "local-favorite",
      bestDishes: [
        "Dynamite Shrimps",
        "Dragon Roll Sushi",
        "Pad Thaï Royal aux Crevettes",
        "Poulet Général Tso Caramélisé",
        "Bœuf Sizzling aux 5 Épices",
        "Matcha Lava Cake & Glace Framboise"
      ],
      pros: [
        "One of the rare high-quality Asian fusion and sushi venues directly on the beach promenade",
        "Stunning oceanfront terrace protected from wind by elegant glass screens",
        "Extensive menu accommodating meat-lovers, pescatarians, and vegans (Panang curry, poke bowls)",
        "Licensed bar serving cold draft beers, cocktails, and chilled Moroccan wines"
      ],
      cons: [
        "Inside dining room can feel slightly noisy when the open kitchen is operating at peak volume",
        "Prices are slightly higher than average promenade cafés, reflecting specialized ingredients"
      ],
      googleRating: 4.3,
      googleReviewCount: 1380,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 325,
      theforkRating: 4.3,
      theforkReviewCount: 140,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 1380,
      openTime: "12:00",
      closeTime: "00:00",
      weeklySchedule: [
        { day: "Monday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Tuesday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Wednesday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Thursday", openTime: "11:00", closeTime: "00:00", isClosed: false },
        { day: "Friday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Saturday", openTime: "12:00", closeTime: "00:00", isClosed: false },
        { day: "Sunday", openTime: "12:00", closeTime: "00:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Front de Mer, Lot N° 6, Plage d'Agadir, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4187,
        lng: -9.6026
      },
      address: "Front de Mer, Lot N° 6, Plage d'Agadir, Secteur Balnéaire, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.4187,
        lng: -9.6026
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Jade+Asian+Fusion+Agadir",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212528820507",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://menu.restaurant-jade.com",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "entrees-dimsum",
            title: "Entrées Croustillantes & Petites Assiettes (Small Plates & Starters)",
            description: "Spécialités panées, vapeurs et bouchées de street food asiatique",
            items: [
              {
                id: "jade-dynamite-shrimp",
                name: "Dynamite Shrimps",
                localName: "جمبري مقرمش بصلصة الديناميت الحارة ومايونيز السيراتشا",
                translations: {
                  ar: "جمبري مقرمش بصلصة الديناميت الحارة ومايونيز السيراتشا",
                  en: "Crispy tempura prawns tossed in signature spicy sriracha glaze and scallions",
                  es: "Langostinos crujientes bañados en salsa picante dinamita y cebolleta",
                  de: "Knusprige Tempura-Garnelen in pikanter Dynamite-Sriracha-Sauce"
                },
                price: 95,
                isSignature: true,
                isSpicy: true,
                dietary: ["halal"],
                portionNotes: "Le grand favori incontournable des habitués"
              },
              {
                id: "jade-spring-rolls",
                name: "Rouleaux de Printemps Croustillants au Poulet",
                localName: "لفائف السبرينغ رولز المقرمشة بالدجاج والخضار",
                translations: {
                  ar: "لفائف السبرينغ رولز المقرمشة بالدجاج والخضار",
                  en: "Golden crispy fried chicken spring rolls served with sweet chili dipping sauce",
                  es: "Rollitos de primavera crujientes de pollo servidos con salsa agridulce picante",
                  de: "Knusprige Frühlingsrollen mit Hähnchenfüllung und süßer Chilisauce"
                },
                price: 65,
                dietary: ["halal"]
              },
              {
                id: "jade-calamars-tempura",
                name: "Calamars Tempura & Aïoli au Wasabi",
                localName: "حبار مقلي مقرمش بتتبيلة التمبورا وصلصة الواسابي",
                translations: {
                  ar: "حبار مقلي مقرمش بتتبيلة التمبورا وصلصة الواسابي",
                  en: "Light tempura-battered tender calamari rings served with zesty wasabi dip",
                  es: "Calamares en tempura ligera con alioli suave de wasabi y lima",
                  de: "Zarte Calamari im leichten Tempurateig mit feinem Wasabi-Dip"
                },
                price: 85,
                dietary: ["halal"]
              },
              {
                id: "jade-tacos-crabe",
                name: "Crispy Asian Tacos au Crabe & Avocat",
                localName: "تاكوس آسيوي مقرمش بلحم السلطعون والأفوكادو الحار",
                translations: {
                  ar: "تاكوس آسيوي مقرمش بلحم السلطعون والأفوكادو الحار",
                  en: "Mini crispy taco shells filled with seasoned crab meat, creamy avocado, and spicy mayo",
                  es: "Mini tacos crujientes rellenos de carne de cangrejo, aguacate y mayonesa especiada",
                  de: "Knusprige Mini-Tacos gefüllt mit Krabbenfleisch, Avocado und scharfer Mayonnaise"
                },
                price: 85,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "sushis-rolls",
            title: "Sushis, Makis & Rolls Signatures (Sushi Bar)",
            description: "Préparés à la commande à partir de poissons frais de l'Atlantique",
            items: [
              {
                id: "jade-dragon-roll",
                name: "Dragon Roll Signature (8 pièces)",
                localName: "دراجون رول بالجمبري تمبورا وشرائح الأفوكادو وصلصة الترياكي",
                translations: {
                  ar: "دراجون رول بالجمبري تمبورا وشرائح الأفوكادو وصلصة الترياكي",
                  en: "Signature roll with tempura prawn, avocado drape, unagi glaze, and tobiko",
                  es: "Rollo dragón relleno de langostino tempura, cubierto de aguacate y salsa unagi",
                  de: "Dragon Roll mit Tempura-Garnele, feinen Avocadoscheiben und Teriyaki-Glasur"
                },
                price: 110,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "jade-california-salmon",
                name: "California Salmon & Cheese Roll (8 pièces)",
                localName: "كاليفورنيا رول بالسلمون الطازج والجبن الكريمي والأفوكادو",
                translations: {
                  ar: "كاليفورنيا رول بالسلمون الطازج والجبن الكريمي والأفوكادو",
                  en: "Fresh Atlantic salmon, cream cheese, and avocado roll coated in roasted sesame seeds",
                  es: "California roll de salmón fresco, queso crema y aguacate con sésamo tostado",
                  de: "California Roll mit frischem Lachs, Frischkäse, Avocado und geröstetem Sesam"
                },
                price: 85,
                dietary: ["halal"]
              },
              {
                id: "jade-sashimi-duo",
                name: "Sashimi Duo Saumon & Thon Rouge",
                localName: "قطع ساشيمي طازجة من السلمون والتونة الحمراء",
                translations: {
                  ar: "قطع ساشيمي طازجة من السلمون والتونة الحمراء",
                  en: "Delicate slices of fresh Atlantic salmon and red tuna with pickled ginger and wasabi",
                  es: "Sashimi selecto de salmón atlántico y atún rojo con jengibre encurtido",
                  de: "Feine Sashimi-Scheiben von frischem Atlantiklachs und rotem Thunfisch"
                },
                price: 120,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "jade-vegan-maki",
                name: "Maki Végétal Avocat & Concombre",
                localName: "ماكي نباتي بالأفوكادو والخيار الطازج والسمسم",
                translations: {
                  ar: "ماكي نباتي بالأفوكادو والخيار الطازج والسمسم",
                  en: "Refreshing plant-based maki roll with creamy avocado and crisp cucumber",
                  es: "Maki vegano refrescante con aguacate cremoso y pepino fresco",
                  de: "Erfrischende vegane Maki-Rolle mit cremiger Avocado und Gurke"
                },
                price: 60,
                dietary: ["vegetarian", "vegan", "halal"]
              }
            ]
          },
          {
            id: "wok-currys",
            title: "Wok, Currys & Plats Chauds (Hot Dishes & Noodles)",
            description: "Plats emblématiques sautés à feu vif et mijotés aux herbes thaïes",
            items: [
              {
                id: "jade-pad-thai",
                name: "Pad Thaï Royal aux Crevettes & Cacahuètes",
                localName: "باد تاي ملكي بالنودلز التايلاندية والروبيان وصلصة التمر الهندي والمكسرات",
                translations: {
                  ar: "باد تاي ملكي بالنودلز التايلاندية والروبيان وصلصة التمر الهندي والمكسرات",
                  en: "Stir-fried Thai rice noodles with prawns, egg, bean sprouts, tamarind, and crushed peanuts",
                  es: "Fideos de arroz tailandeses salteados con gambas, tamarindo, brotes y cacahuetes",
                  de: "Gebratene thailändische Reisnudeln mit Garnelen, Tamarindensauce und Erdnüssen"
                },
                price: 125,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "jade-general-tso",
                name: "Poulet Général Tso Caramélisé",
                localName: "دجاج الجنرال تسو المقرمش بصلصة السمسم الحلوة والحارة مع الأرز",
                translations: {
                  ar: "دجاج الجنرال تسو المقرمش بصلصة السمسم الحلوة والحارة مع الأرز",
                  en: "Crispy chicken chunks glazed in sweet-tangy General Tso sauce, sesame seeds & jasmine rice",
                  es: "Pollo crujiente glaseado con salsa agridulce picante General Tso y arroz jazmín",
                  de: "Knuspriges Hähnchen in süß-scharfer General-Tso-Glasur mit Duftreis"
                },
                price: 110,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "jade-sizzling-beef",
                name: "Bœuf Sizzling aux Cinq Épices",
                localName: "لحم بقري سوتيه بالبهارات الخمس والخضار المقرمشة يقدم على صفيح ساخن",
                translations: {
                  ar: "لحم بقري سوتيه بالبهارات الخمس والخضار المقرمشة يقدم على صفيح ساخن",
                  en: "Sizzling cast-iron skillet of tender marinated beef, bell peppers, onions, and five-spice gravy",
                  es: "Tiras de ternera marinada salteadas con cinco especias servidas en plancha caliente",
                  de: "Brutzelnde Rindfleischstreifen in Fünf-Gewürze-Sauce mit knackigem Gemüse"
                },
                price: 135,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "jade-panang-curry",
                name: "Panang Curry Végétalien au Lait de Coco",
                localName: "كاري بانانج نباتي تايلاندي بحليب جوز الهند والخضار الطازجة والتوفو",
                translations: {
                  ar: "كاري بانانج نباتي تايلاندي بحليب جوز الهند والخضار الطازجة والتوفو",
                  en: "Rich Thai red Panang curry with coconut milk, crispy tofu, seasonal vegetables, and lime leaves",
                  es: "Curry rojo tailandés Panang con leche de coco, tofu crujiente y hojas de lima kaffir",
                  de: "Thailändisches Panang-Curry mit Kokosmilch, Tofu und frischem Gemüse"
                },
                price: 95,
                dietary: ["vegetarian", "vegan", "halal"]
              }
            ]
          },
          {
            id: "desserts-fusion",
            title: "Desserts Asiatiques & Créations Sucrées (Desserts)",
            description: "Douceurs créatives au thé vert matcha et fruits exotiques",
            items: [
              {
                id: "jade-matcha-lava",
                name: "Matcha Lava Cake & Glace Framboise",
                localName: "كعكة فوندان الشاي الأخضر ماتشا بقلب ذائب يقدم مع آيس كريم التوت",
                translations: {
                  ar: "كعكة فوندان الشاي الأخضر ماتشا بقلب ذائب يقدم مع آيس كريم التوت",
                  en: "Warm molten green tea matcha lava cake served with tart raspberry ice cream",
                  es: "Volcán caliente de té verde matcha con corazón fundente y helado de frambuesa",
                  de: "Warmer Matcha-Grüntee-Lavakuchen mit flüssigem Kern und Himbeereis"
                },
                price: 65,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "jade-banana-tempura",
                name: "Beignets de Banane Tempura au Caramel & Sésame",
                localName: "موز تمبورا مقلي مقرمش بصلصة الكراميل والسمسم المحمص",
                translations: {
                  ar: "موز تمبورا مقلي مقرمش بصلصة الكراميل والسمسم المحمص",
                  en: "Crispy banana tempura fritters drizzled with warm caramel and roasted sesame seeds",
                  es: "Plátano frito en tempura crujiente con caramelo caliente y sésamo",
                  de: "Bananen-Tempura im Backteig mit flüssigem Karamell und Sesam"
                },
                price: 50,
                dietary: ["vegetarian", "halal"]
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  // =========================================================================
  // 2. RESTAURANT LA PLAGE | SOFITEL THALASSA SEA & SPA
  // =========================================================================
  {
    id: "e-agadir-la-plage-sofitel",
    city: "agadir",
    openTime: "10:00",
    closeTime: "01:00",
    weeklySchedule: [
      { day: "Monday", open: "10:00", close: "01:00", isClosed: false },
      { day: "Tuesday", open: "10:00", close: "01:00", isClosed: false },
      { day: "Wednesday", open: "10:00", close: "01:00", isClosed: false },
      { day: "Thursday", open: "10:00", close: "01:00", isClosed: false },
      { day: "Friday", open: "10:00", close: "01:00", isClosed: false },
      { day: "Saturday", open: "10:00", close: "01:00", isClosed: false, note: "Saturday Beachfront Seafood Brunch (12:30–16:30)" },
      { day: "Sunday", open: "10:00", close: "01:00", isClosed: false }
    ],

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "family", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner", "brunch", "drinks"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Mediterranean", "Seafood", "French-Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["chic", "coastal", "scenic", "romantic", "refined"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 38,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "outdoor"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard"],
      tags: ["fine", "sunset", "terrace", "alcohol", "dinner", "seafood", "brunch"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Plage (Sofitel Thalassa Sea & Spa)",
      neighborhood: "Baie des Palmiers (Founty)",
      description: "An upscale oceanfront beach club and restaurant set directly on the private sand dunes of the 5-star Sofitel Agadir Thalassa Sea & Spa. Reviewed by Gault & Millau for its refined Mediterranean cuisine, whole wild sea bass carved tableside in a sea-salt crust, fresh Atlantic lobster, chilled champagne, and celebrated Saturday beach brunches.",
      tip: "Book the Saturday Seafood Brunch (12:30–16:30) for an unforgettable beachfront buffet with live acoustic music, or reserve an ocean-facing cabana table for a romantic sunset dinner.",
      badge: "splurge",
      bestDishes: [
        "Bar de Ligne en Croûte de Sel",
        "Homard Bleu Grillé aux Herbes",
        "Carpaccio de Saint-Jacques & Yuzu",
        "Gambas Royales à la Plancha",
        "Saturday Beachfront Seafood Brunch",
        "Tarte Fine aux Figues Rôties"
      ],
      pros: [
        "Unrivaled barefoot luxury location directly on the private sand dunes of the Sofitel palace",
        "Signature salt-crusted wild line-caught sea bass carved right before you at table",
        "Lavish Saturday seafood buffet brunch with live jazz and acoustic performers",
        "Top-shelf French wines, champagnes, and handcrafted mixology cocktails"
      ],
      cons: [
        "Palace resort pricing aligned with 5-star luxury standards",
        "Advance reservations are essential for frontline sunset tables and Saturday brunch"
      ],
      googleRating: 4.4,
      googleReviewCount: 530,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 290,
      theforkRating: 4.5,
      theforkReviewCount: 110,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 530,
      openTime: "10:00",
      closeTime: "01:00",
      weeklySchedule: [
        { day: "Monday", openTime: "10:00", closeTime: "01:00", isClosed: false },
        { day: "Tuesday", openTime: "10:00", closeTime: "01:00", isClosed: false },
        { day: "Wednesday", openTime: "10:00", closeTime: "01:00", isClosed: false },
        { day: "Thursday", openTime: "10:00", closeTime: "01:00", isClosed: false },
        { day: "Friday", openTime: "10:00", closeTime: "01:00", isClosed: false },
        { day: "Saturday", openTime: "10:00", closeTime: "01:00", isClosed: false, note: "Saturday Beachfront Seafood Brunch (12:30–16:30)" },
        { day: "Sunday", openTime: "10:00", closeTime: "01:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Hôtel Sofitel Agadir Thalassa Sea & Spa, Baie des Palmiers, Cité Founty P5, Secteur Touristique, Agadir 80010, Morocco",
        lat: 30.3986,
        lng: -9.5965
      },
      address: "Hôtel Sofitel Agadir Thalassa Sea & Spa, Baie des Palmiers, Cité Founty P5, Secteur Touristique, Agadir 80010, Morocco",
      coordinates: {
        lat: 30.3986,
        lng: -9.5965
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Plage+Sofitel+Agadir+Thalassa+Sea+and+Spa",
      reservationMethod: ["phone", "website", "email"],
      reservationContact: "+212528820000",
      whatsappNumber: "",
      bookingUrl: "https://all.accor.com/hotel/5234/index.fr.shtml",
      website: "https://all.accor.com",
      instagram: "not-available",
      customStory: "La Plage at the Sofitel Thalassa embodies the spirit of relaxed Atlantic refinement. Designed with natural teak wood, white linen, and open-air decking right on the sand, it merges French seaside gastronomy with pristine seafood brought directly from the morning catch.",
      languagesSpoken: ["French", "English", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "tapas-entrees-marines",
            title: "Tapas Marines & Entrées Fraîches (Seafood Starters & Crudo)",
            description: "Coquillages, carpaccios et fraîcheurs iodées les pieds dans le sable",
            items: [
              {
                id: "lp-carpaccio-saint-jacques",
                name: "Carpaccio de Saint-Jacques aux Perles de Yuzu",
                localName: "كارباتشيو قواقع السان جاك الطازجة مع لؤلؤ اليوزو وزيت الزيتون البكر",
                translations: {
                  ar: "كارباتشيو قواقع السان جاك الطازجة مع لؤلؤ اليوزو وزيت الزيتون البكر",
                  en: "Atlantic scallop carpaccio finished with yuzu pearls, fleur de sel, and pink peppercorns",
                  es: "Carpaccio de vieiras del Atlántico con perlas de yuzu, flor de sal y aceite virgen",
                  de: "Jakobsmuschel-Carpaccio mit Yuzu-Perlen, Meersalz und feinem Olivenöl"
                },
                price: 140,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "lp-gambas-plancha",
                name: "Gambas Royales Saisies à la Plancha",
                localName: "جمبري ملكي كبير مشوي على البلانشا بالثوم والليمون والأعشاب",
                translations: {
                  ar: "جمبري ملكي كبير مشوي على البلانشا بالثوم والليمون والأعشاب",
                  en: "Seared Atlantic king prawns with virgin olive oil, garlic slivers, and citrus zest",
                  es: "Langostinos reales a la plancha con aceite de oliva virgen, ajo y limón",
                  de: "Königsgarnelen von der Plancha mit nativem Olivenöl, Knoblauch und Zitrone"
                },
                price: 130,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "lp-calamars-safran",
                name: "Friture de Petits Calamars & Aïoli au Safran de Taliouine",
                localName: "حبار صغير مقلي ومقرمش يقدم مع صلصة الأليولي بزعفران تاليوين",
                translations: {
                  ar: "حبار صغير مقلي ومقرمش يقدم مع صلصة الأليولي بزعفران تاليوين",
                  en: "Golden baby calamari fritto misto served with homemade Taliouine saffron aïoli",
                  es: "Calamares fritos crujientes servidos con alioli suave de azafrán de Taliouine",
                  de: "Knusprig frittierte Baby-Calamari mit Safran-Aioli aus Taliouine"
                },
                price: 95,
                dietary: ["halal"]
              },
              {
                id: "lp-salade-riviera",
                name: "Salade Riviera aux Agrumes & Avocat du Souss",
                localName: "سلطة الريفييرا المنعشة بالحمضيات وأفوكادو سوس الطازج والرمان",
                translations: {
                  ar: "سلطة الريفييرا المنعشة بالحمضيات وأفوكادو سوس الطازج والرمان",
                  en: "Riviera green salad with local Souss avocado, citrus segments, and pomegranate vinaigrette",
                  es: "Ensalada Riviera con aguacate del Souss, cítricos frescos y vinagreta de granada",
                  de: "Riviera-Salat mit Souss-Avocado, Zitrusfilets und Granatapfel-Vinaigrette"
                },
                price: 85,
                dietary: ["vegetarian", "vegan", "halal"]
              }
            ]
          },
          {
            id: "poissons-nobles-vivier",
            title: "Poissons Nobles & Vivier de l'Atlantique (Wild Fish & Lobster)",
            description: "Pêche du jour débarquée au port et cuissons haute précision",
            items: [
              {
                id: "lp-bar-croute-sel",
                name: "Bar de Ligne Cuit en Croûte de Sel Marin",
                localName: "سمك الدرعي البري المطهو في قشرة الملح البحري ويقدم على المائدة",
                translations: {
                  ar: "سمك الدرعي البري المطهو في قشرة الملح البحري ويقدم على المائدة",
                  en: "Wild line-caught sea bass baked in an aromatic sea-salt crust, carved tableside",
                  es: "Lubina salvaje al horno en costra de sal marina, desespinada en mesa",
                  de: "Wolfsbarsch in Meersalzkruste am Tisch filetiert mit marktfrischem Gemüse"
                },
                price: 240,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Plat signature distingué par Gault & Millau"
              },
              {
                id: "lp-sole-meuniere",
                name: "Belle Sole de Ligne Façon Meunière",
                localName: "سمك الصول الكبير محمر بالزبدة والليمون والبقدونس الطازج",
                translations: {
                  ar: "سمك الصول الكبير محمر بالزبدة والليمون والبقدونس الطازج",
                  en: "Classic pan-seared whole Atlantic Dover sole in brown lemon butter and parsley",
                  es: "Lenguado entero del Atlántico a la meunière con mantequilla noisette y limón",
                  de: "Ganze Atlantik-Seezunge 'Meunière' in nussiger Zitronenbutter gebraten"
                },
                price: 230,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "lp-homard-grille",
                name: "Homard Bleu de l'Atlantique Grillé aux Herbes",
                localName: "كركند أطلسي أزرق مشوي بالأعشاب البحرية والزبدة المذابة",
                translations: {
                  ar: "كركند أطلسي أزرق مشوي بالأعشاب البحرية والزبدة المذابة",
                  en: "Charcoal-grilled whole blue Atlantic lobster with clarified herb butter and roasted vegetables",
                  es: "Bogavante azul del Atlántico a la brasa con mantequilla de finas hierbas",
                  de: "Gegrillter blauer Atlantik-Hummer mit feiner Kräuterbutter und Beilagen"
                },
                price: 390,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "lp-paella-royale",
                name: "Paella Royale aux Fruits de Mer La Plage",
                localName: "بايلا فاخرة بفواكه البحر والأرز الإسباني الممتاز والزعفران",
                translations: {
                  ar: "بايلا فاخرة بفواكه البحر والأرز الإسباني الممتاز والزعفران",
                  en: "Luxury saffron seafood paella with king prawns, scallops, mussels, and calamari",
                  es: "Paella marinera de lujo con gambas reales, vieiras, mejillones y calamares",
                  de: "Edle Meeresfrüchte-Paella mit Riesen-Garnelen, Jakobsmuscheln und Safranreis"
                },
                price: 220,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "viandes-grills",
            title: "Viandes Grillées & Plats du Chef (Prime Meats)",
            description: "Cuts d'exception saisis à la flamme et accompagnements gourmets",
            items: [
              {
                id: "lp-filet-boeuf-truffe",
                name: "Filet de Bœuf Grillé & Émulsion à la Truffe",
                localName: "فيليه لحم بقري فاخر مشوي مع هريس البطاطس بصلصة الكمأة",
                translations: {
                  ar: "فيليه لحم بقري فاخر مشوي مع هريس البطاطس بصلصة الكمأة",
                  en: "Char-grilled prime beef fillet with creamy truffle mousseline and red wine jus",
                  es: "Solomillo de ternera a la parrilla con puré trufado y reducción de vino tinto",
                  de: "Gegrilltes Rinderfilet mit cremigem Trüffelpüree und Rotweinjus"
                },
                price: 210,
                dietary: ["halal"]
              },
              {
                id: "lp-supreme-volaille",
                name: "Suprême de Volaille Fermière Rôti au Romarin",
                localName: "صدر دجاج بلدي محمر بإكليل الجبل مع الخضار المطهوة ببطء",
                translations: {
                  ar: "صدر دجاج بلدي محمر بإكليل الجبل مع الخضار المطهوة ببطء",
                  en: "Pan-roasted free-range chicken breast infused with fresh rosemary and glazed baby vegetables",
                  es: "Pechuga de pollo de corral asada con romero fresco y verduritas glaseadas",
                  de: "Gebratene Freiland-Hähnchenbrust mit frischem Rosmarin und Babygemüse"
                },
                price: 160,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "brunch-douceurs",
            title: "Saturday Beach Brunch & Douceurs (Brunch & Pastries)",
            description: "Buffet gastronomique du samedi et pâtisseries fines de palace",
            items: [
              {
                id: "lp-saturday-brunch",
                name: "Grand Brunch Seafood du Samedi Face à la Mer",
                localName: "بوفيه البرانش الفاخر ليوم السبت على الشاطئ مع فواكه البحر والموسيقى الحية",
                translations: {
                  ar: "بوفيه البرانش الفاخر ليوم السبت على الشاطئ مع فواكه البحر والموسيقى الحية",
                  en: "Saturday beachfront luxury seafood buffet with live music, oyster bar, carvings, and desserts",
                  es: "Gran brunch buffet marinero de los sábados frente al mar con música en vivo",
                  de: "Exklusiver Samstags-Meeresfrüchtebrunch am Strand mit Live-Musik"
                },
                price: 380,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Servi tous les samedis de 12:30 à 16:30 face aux vagues"
              },
              {
                id: "lp-tarte-figues",
                name: "Tarte Fine aux Figues Rôties & Glace Vanille Bourbon",
                localName: "تارت مقرمش بالتين المشوي وعسل السوس وآيس كريم الفانيليا الطبيعية",
                translations: {
                  ar: "تارت مقرمش بالتين المشوي وعسل السوس وآيس كريم الفانيليا الطبيعية",
                  en: "Crisp puff pastry tart with warm roasted figs, local Souss honey, and Bourbon vanilla ice cream",
                  es: "Tarta fina crujiente de higos asados con miel del Souss y helado de vainilla Bourbon",
                  de: "Knusprige Tarte mit ofengerösteten Feigen, Honig und Bourbon-Vanilleeis"
                },
                price: 80,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "lp-moelleux-chocolat",
                name: "Moelleux au Chocolat Grand Cru & Cœur Praliné",
                localName: "كعكة الشوكولاتة الفاخرة بقلب الشوكولاتة الذائبة والكراميل المقرمش",
                translations: {
                  ar: "كعكة الشوكولاتة الفاخرة بقلب الشوكولاتة الذائبة والكراميل المقرمش",
                  en: "Warm molten grand cru dark chocolate cake with a molten praline center",
                  es: "Volcán tibio de chocolate negro grand cru con corazón cremoso de praliné",
                  de: "Warmes Schokoladensoufflé aus Grand-Cru-Schokolade mit flüssigem Praliné-Kern"
                },
                price: 85,
                dietary: ["vegetarian", "halal"]
              }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  // =========================================================================
  // CAFÉ MAURO AGADIR
  // =========================================================================
  {
    id: "e-agadir-cafe-mauro",
    city: "agadir",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family", "couple"],
      mealTypes: ["breakfast", "lunch", "dinner", "snack", "afternoon-tea", "flexible"],
      experienceTypes: ["casual", "cafes-tea", "traditional", "hidden-gem"],
      foodStyles: ["Moroccan", "Cafe & Pastry", "Tagine & Couscous", "Seafood"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["budget", "nomad", "culture"],
      vibeTags: ["local-hangout", "relaxed", "authentic", "friendly"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "street-side"],
      paymentMethods: ["cash"],
      tags: ["breakfast", "budget", "cafe-pastry", "dry", "juice", "tagine", "wifi"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Café Mauro",
      neighborhood: "Centre-Ville",
      description: "A beloved local-favorite neighborhood café on Rue de l'Hôtel de Ville in central Agadir, tucked well away from the beachfront tourist strip. Celebrated for extraordinarily generous traditional Moroccan breakfasts, slow-cooked sea bream and beef tagines, fresh cold-pressed avocado and citrus juices, and famously warm hospitality.",
      tip: "Cash only. Come before 11:00 for the complete Moroccan breakfast spread or drop in at lunch for daily sea bream tagine at true local prices.",
      badge: "local",
      bestDishes: [
        "Traditional Moroccan Breakfast (Msemen & Harcha)",
        "Sea Bream & Vegetable Tagine",
        "Kefta & Egg Tagine",
        "Fresh Avocado & Almond Smoothie"
      ],
      pros: [
        "Genuine neighborhood prices (half the cost of the beach promenade) with complimentary extras",
        "Freshly squeezed juices, authentic msemen/harcha, and hearty local tagines",
        "Relaxed downtown terrace free from beachfront touts and sales pressure"
      ],
      cons: [
        "Cash only; card terminal is not available",
        "Simple local café decor with football screens rather than beachfront views"
      ],
      googleRating: 4.6,
      googleReviewCount: 245,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 48,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 245,
      openTime: "07:00",
      closeTime: "23:00",
      weeklySchedule: [
        { day: "Monday", openTime: "07:00", closeTime: "23:00", isClosed: false },
        { day: "Tuesday", openTime: "07:00", closeTime: "23:00", isClosed: false },
        { day: "Wednesday", openTime: "07:00", closeTime: "23:00", isClosed: false },
        { day: "Thursday", openTime: "07:00", closeTime: "23:00", isClosed: false },
        { day: "Friday", openTime: "07:00", closeTime: "23:00", isClosed: false },
        { day: "Saturday", openTime: "07:00", closeTime: "23:00", isClosed: false },
        { day: "Sunday", openTime: "07:00", closeTime: "23:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Rue de l'Hôtel de Ville, Centre-Ville, Agadir 80000, Morocco",
        lat: 30.4210,
        lng: -9.5910
      },
      address: "Rue de l'Hôtel de Ville, Centre-Ville, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.4210,
        lng: -9.5910
      },
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Mauro+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Morning 08:30–10:30 for Beldi breakfast",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "breakfast-pastries",
            title: "Moroccan Breakfast & Griddle Flatbreads",
            description: "Fresh morning msemen, harcha, Beldi omelettes, and warm pastries",
            items: [
              {
                id: "mauro-foul-beldi",
                name: "Formule Petit-Déjeuner Marocain Complet",
                localName: "فطور مغربي تقليدي متكامل",
                translations: {
                  ar: "فطور مغربي تقليدي متكامل",
                  en: "Warm msemen, semolina harcha, eggs, olive oil, amlou almond butter, honey, fresh orange juice, and hot drink",
                  es: "Desayuno marroquí completo con msemen, harcha, huevo, amlou, miel y zumo natural",
                  de: "Komplettes marokkanisches Frühstück mit Msemen, Harcha, Ei, Amlou und Orangensaft"
                },
                price: 38,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "mauro-khlii-eggs",
                name: "Omelette Beldi aux Fines Herbes & Fromage",
                localName: "أومليت بلدي بالأعشاب والجبن",
                translations: {
                  ar: "أومليت بلدي بالأعشاب والجبن",
                  en: "Fluffy farm-egg omelette folded with cumin, coriander, melted cheese, and warm khobz",
                  es: "Tortilla beldi con hierbas frescas, comino y queso fundido",
                  de: "Bauernomelett mit frischen Kräutern, Kreuzkümmel und geschmolzenem Käse"
                },
                price: 25,
                dietary: ["vegetarian", "halal"]
              }
            ]
          },
          {
            id: "tagines-lunch",
            title: "Daily Homestyle Tagines",
            description: "Prepared fresh every morning in clay pots for downtown regulars",
            items: [
              {
                id: "mauro-dorade-tagine",
                name: "Tajine de Daurade aux Légumes du Souss",
                localName: "طاجين سمك الدنيس بخضار السوس",
                translations: {
                  ar: "طاجين سمك الدنيس بخضار السوس",
                  en: "Fresh Atlantic sea bream simmered with potatoes, tomatoes, bell peppers, preserved lemon, and olives",
                  es: "Tajine de dorada fresca del Atlántico con verduras del Souss y limón confitado",
                  de: "Atlantik-Goldbrassen-Tagine mit Souss-Gemüse und Salzzitrone"
                },
                price: 65,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "mauro-kefta-tagine",
                name: "Tajine de Kefta aux Œufs",
                localName: "طاجين الكفتة بالبيض وصلصة الطماطم",
                translations: {
                  ar: "طاجين الكفتة بالبيض وصلصة الطماطم",
                  en: "Spiced minced beef meatballs simmered in rich tomato-garlic sauce topped with poached eggs",
                  es: "Tajine de albóndigas especiadas en salsa de tomate y huevo",
                  de: "Würziger Kefta-Hackbällchen-Tagine in Tomatensauce mit Ei"
                },
                price: 55,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "drinks-juices",
            title: "Coffee, Mint Tea & Fresh Juices",
            description: "Espresso classics, ceremonial mint tea, and fresh cold-pressed fruit smoothies",
            items: [
              {
                id: "mauro-noss-noss",
                name: "Café Noss-Noss ou Thé à la Menthe",
                localName: "قهوة نص نص أو شاي بالنعناع",
                translations: {
                  ar: "قهوة نص نص أو شاي بالنعناع",
                  en: "Classic Moroccan half-espresso half-steamed milk coffee or fresh spearmint green tea",
                  es: "Café mitad leche marroquí (noss-noss) o té verde tradicional con menta",
                  de: "Klassischer marokkanischer Noss-Noss-Milchkaffee oder Minztee"
                },
                price: 12,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "mauro-avocado-juice",
                name: "Jus d'Avocat Maison aux Dattes & Amandes",
                localName: "عصير الأفوكادو بالتمر واللوز",
                translations: {
                  ar: "عصير الأفوكادو بالتمر واللوز",
                  en: "Creamy blended Moroccan avocado smoothie sweetened with dates and crushed almonds",
                  es: "Batido cremoso de aguacate fresco con dátiles y almendras",
                  de: "Cremiger Avocado-Smoothie mit Datteln und gerösteten Mandeln"
                },
                price: 25,
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
        tag: "True Local Cash Prices",
        description: "Remarkably affordable neighborhood rates (12 MAD teas, 38 MAD full breakfast, 55–65 MAD tagines) with generous complimentary bread; cash only.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Fresh Press & Hot Tagines",
        description: "Busy local café ensuring fast ingredient turnover; hot cooked tagines, eggs, and cold-pressed citrus/avocado juices are freshly made to order.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Authentic Downtown Café",
        description: "Zero tourist compromise—honest Moroccan msemen, harcha, amlou, Beldi eggs, and home-style sea bream tagines loved by Agadir locals.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Relaxed & Tout-Free",
        description: "Calm downtown terrace near City Hall away from beachfront hasslers; casual café vibe with sports TVs popular among local families and regulars.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Warm & Generous",
        description: "Exceptionally friendly, hospitable neighborhood waiters eager to help non-Arabic speakers feel welcome; walk-in service all day.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  // =========================================================================
  // BABAKOUL TAMRAGHT (NORTH AGADIR)
  // =========================================================================
  {
    id: "e-agadir-babakoul",
    city: "agadir",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "dinner", "snack", "afternoon-tea", "flexible"],
      experienceTypes: ["casual", "cafes-tea", "hidden-gem", "traditional"],
      foodStyles: ["Moroccan", "Cafe & Pastry", "Vegetarian/Vegan", "Berber"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["nomad", "budget", "culture", "adventure"],
      vibeTags: ["bohemian", "surf-village", "garden-oasis", "laid-back"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["courtyard", "terrace", "indoor"],
      paymentMethods: ["cash"],
      tags: ["breakfast", "budget", "cafe-pastry", "dry", "juice", "tagine", "wifi"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Babakoul",
      neighborhood: "Tamraght (North Coast)",
      description: "An iconic bohemian garden-café and culinary institution nestled inside a shaded fruit-tree courtyard in Tamraght (just north of Agadir on the road to Taghazout). Famous among surfers, digital nomads, and road-trippers for traditional Berber breakfasts with homemade amlou, crisp Moroccan crêpes, hearty tagines, and legendary avocado-date-nut smoothies.",
      tip: "Cash only (bring small MAD notes). Pick a shaded table under the bougainvillea and banana trees, and don't leave without trying the famous avocado-date-nut juice and warm amlou.",
      badge: "hidden-gem",
      bestDishes: [
        "Berber Breakfast with Homemade Amlou",
        "Legendary Avocado, Date & Nut Smoothie",
        "Vegetable & Chickpea Tagine",
        "Moroccan Msemen & Honey Crêpes"
      ],
      pros: [
        "Serene shaded courtyard filled with fruit trees and laid-back surf-village charm",
        "Ultra-affordable prices (20–80 MAD) for generous, freshly prepared Berber meals",
        "World-famous fresh smoothies and homemade Souss valley amlou & olive oil"
      ],
      cons: [
        "Cash only; located 20 minutes north of central Agadir in Tamraght",
        "Laid-back, unhurried pace during busy post-surf brunch hours"
      ],
      googleRating: 4.6,
      googleReviewCount: 310,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 95,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 310,
      openTime: "08:30",
      closeTime: "22:30",
      weeklySchedule: [
        { day: "Monday", openTime: "08:30", closeTime: "22:30", isClosed: false },
        { day: "Tuesday", openTime: "08:30", closeTime: "22:30", isClosed: false },
        { day: "Wednesday", openTime: "08:30", closeTime: "22:30", isClosed: false },
        { day: "Thursday", openTime: "08:30", closeTime: "22:30", isClosed: false },
        { day: "Friday", openTime: "08:30", closeTime: "22:30", isClosed: false },
        { day: "Saturday", openTime: "08:30", closeTime: "22:30", isClosed: false },
        { day: "Sunday", openTime: "08:30", closeTime: "22:30", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "Km 14, Route d'Essaouira, Rue Ait Soual, Tamraght, Agadir 80750, Morocco",
        lat: 30.5110,
        lng: -9.6773
      },
      address: "Km 14, Route d'Essaouira, Rue Ait Soual, Tamraght, Agadir 80750, Morocco",
      coordinates: {
        lat: 30.5110,
        lng: -9.6773
      },
      googleMapsUrl: "https://maps.google.com/?q=Babakoul+Tamraght+Agadir",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212623752748",
      whatsappNumber: "+212623752748",
      bookingUrl: "",
      website: "https://babakoul.com",
      instagram: "https://instagram.com/babakoul_tamraght",
      viewType: "garden",
      bestTimeToVisit: "10:00–12:00 for sunlit garden brunch or post-surf afternoon",
      averageWaitMinutes: 10,
      languagesSpoken: ["Arabic/Darija", "Amazigh", "French", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "berber-breakfast",
            title: "Berber Breakfasts & Crêpes",
            description: "Sunlit garden breakfasts featuring Souss valley amlou, wild honey, and fresh flatbreads",
            items: [
              {
                id: "babakoul-berber-breakfast",
                name: "Grand Petit-Déjeuner Berbère",
                localName: "فطور أمازيغي تقليدي بالأملو والعسل",
                translations: {
                  ar: "فطور أمازيغي تقليدي بالأملو والعسل",
                  en: "Fresh msemen, baghrir honeycomb crêpes, homemade argan amlou, wild honey, olive oil, eggs, juice, and tea",
                  es: "Gran desayuno bereber con msemen, baghrir, amlou casero de argán, miel, huevo y zumo",
                  de: "Großes Berber-Frühstück mit Msemen, Baghrir, hausgemachtem Amlou, Honig und Ei"
                },
                price: 55,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "babakoul-crepes-amlou",
                name: "Crêpes Marocaines au Miel & Amlou",
                localName: "فطائر مغربية بالعسل الحر والأملو",
                translations: {
                  ar: "فطائر مغربية بالعسل الحر والأملو",
                  en: "Warm golden crêpes drizzled with artisanal roasted-almond argan amlou and mountain blossom honey",
                  es: "Crepes marroquíes tibias con miel de montaña y amlou artesanal de argán",
                  de: "Warme marokkanische Crêpes mit Berghonig und geröstetem Mandel-Amlou"
                },
                price: 35,
                dietary: ["vegetarian", "halal"]
              }
            ]
          },
          {
            id: "garden-tagines-pizzas",
            title: "Garden Tagines & Wood-Baked Plates",
            description: "Slow-simmered vegetarian and meat tagines made fresh in the courtyard kitchen",
            items: [
              {
                id: "babakoul-veg-tagine",
                name: "Tajine Berbère aux Légumes & Pois Chiches",
                localName: "طاجين أمازيغي بالخضار والحمص",
                translations: {
                  ar: "طاجين أمازيغي بالخضار والحمص",
                  en: "Hearty slow-cooked clay-pot tagine of seasonal vegetables, chickpeas, olives, and argan oil",
                  es: "Tajine bereber de verduras frescas de temporada y garbanzos",
                  de: "Herzhafter Berber-Gemüsetagine mit Kichererbsen, Oliven und Arganöl"
                },
                price: 65,
                isSignature: true,
                dietary: ["vegetarian", "vegan", "halal"]
              },
              {
                id: "babakoul-chicken-tagine",
                name: "Tajine de Poulet au Citron Confit",
                localName: "طاجين الدجاج بالحامض المصير والزيتون",
                translations: {
                  ar: "طاجين الدجاج بالحامض المصير والزيتون",
                  en: "Free-range chicken simmered with cured lemons, caramelized onions, and green olives",
                  es: "Tajine de pollo campero con limones confitados y aceitunas verdes",
                  de: "Freilandhuhn-Tagine mit eingelegten Zitronen und grünen Oliven"
                },
                price: 80,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "smoothies-juices",
            title: "Famous Garden Smoothies & Infusions",
            description: "Pressed fresh to order from local Souss orchards",
            items: [
              {
                id: "babakoul-avocado-smoothie",
                name: "Smoothie Signature Avocat, Dattes & Noix",
                localName: "سموذي الأفوكادو الشهير بالتمر والمكسرات",
                translations: {
                  ar: "سموذي الأفوكادو الشهير بالتمر والمكسرات",
                  en: "Rich post-surf blend of creamy ripe avocado, Medjool dates, walnuts, and roasted almonds",
                  es: "Batido famoso de aguacate maduro con dátiles Medjool y frutos secos",
                  de: "Berühmter Avocado-Smoothie mit Medjool-Datteln, Walnüssen und Mandeln"
                },
                price: 30,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "babakoul-mandarin-juice",
                name: "Jus de Mandarine ou Orange Fraîchement Pressé",
                localName: "عصير مندرين وبرتقال طازج معصور للتو",
                translations: {
                  ar: "عصير مندرين وبرتقال طازج معصور للتو",
                  en: "Cold-pressed sweet Souss valley mandarins and Taroudant oranges",
                  es: "Zumo recién exprimido de mandarinas y naranjas del valle del Souss",
                  de: "Frisch gepresster Souss-Mandarinen- und Orangensaft"
                },
                price: 20,
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
        tag: "Budget Surf-Village Pricing",
        description: "Honest printed menu rates (20–80 MAD) with clear bills; strictly cash-only so bring dirham notes before heading up from the beach.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Fresh Orchard Juices",
        description: "Freshly pressed juices, homemade amlou, and hot clay-pot tagines prepared in an open-view garden kitchen popular with long-stay surfers.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Berber Soul & Vegan Note",
        description: "Authentic Berber breakfasts and tagines; vegan guests should confirm crêpes and pastries contain no dairy or eggs before ordering.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Lush Courtyard Oasis",
        description: "Shaded fruit-tree garden terrace and adjacent Moroccan rug/craft boutique offering a peaceful oasis off Tamraght's main coastal road.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Unhurried Surf Pace",
        description: "Warm, laid-back Berber hospitality matching Tamraght's surf culture; expect relaxed kitchen pacing during busy mid-morning brunch.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  }
];
