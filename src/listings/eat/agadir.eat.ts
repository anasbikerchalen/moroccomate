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
        "wagyu",
        "live-music",
        "luxury",
        "dinner",
        "breakfast",
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
      description: "Agadir's premier luxury halal steakhouse and fine-dining lounge in Hay Mohammadi, featuring dry-aged beef, tableside smoke and dry-ice presentations, 24K edible gold finishes, weekend live violin and acoustic music, and a signature non-alcoholic mixology bar.",
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
      menu: {
        currency: "MAD",
        lastUpdated: "Verified March 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: 'entrees-froides',
            title: 'Entrées Froides (Cold Starters)',
            description: 'Salades fraîches, burrata et carpaccio préparés à la minute',
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
            description: 'Soupes chaudes réconfortantes et veloutés marins',
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
            description: 'Street food néerlandais authentique et bouchées chaudes croustillantes',
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
            description: 'Cuts d’exception, dry-aged beef, bœuf wagyu certifié et or 24K comestible',
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
            description: 'Plats signatures, brochettes saté néerlandaises et volailles fermières',
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
            description: 'Pain brioché artisanal, viandes nobles et frites dorées',
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
            description: 'Pizzas au feu de bois, lasagnes maison et pâtes fraîches',
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
            description: 'Poffertjes traditionnels cuits minute, chocolat Dubaï 24K et douceurs',
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
          url: 'https://wanderlog.com/place/details/2184994/amsterdam-luxury-restaurant'
        },
        {
          source: 'Tripadvisor',
          rating: 4.5,
          maxRating: 5,
          reviewCount: 110,
          url: 'https://www.tripadvisor.com'
        },
        {
          source: 'Restaurant Guru',
          rating: 5.0,
          maxRating: 5,
          reviewCount: 3952,
          url: 'https://restaurantguru.com/Amsterdam-Luxury-Restaurant-Agadir-Agadir'
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
      tags: [
        "late-night",
        "sunset",
        "fine",
        "budget",
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
      exactAddressAndCoordinates: {
        address: "Résidence N°02 M1, Complexe Marina, Agadir 80010, Morocco",
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
      tags: [
        "late-night",
        "sunset",
        "live-music",
        "budget",
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
      exactAddressAndCoordinates: {
        address: "Marina d'Agadir, Route Marina, Agadir 80000, Morocco",
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
      tags: ["late-night", "fine", "budget", "alcohol", "dinner"],
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
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Rue de l'Oued Souss, Complexe Tamlalt, Agadir 80000, Morocco",
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
      exactAddressAndCoordinates: {
        address: "Complexe Tagadirt, Boulevard du 20 Août, Agadir 80000, Morocco",
        lat: 30.4139,
        lng: -9.600732
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Jardin+d+Eau+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528840195",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.lejardindeau.ma",
      instagram: "not-available",
      customStory: "Le Jardin d'Eau is one of Agadir's oldest dining institutions, set in a garden complex on Boulevard du 20 Août. It has long been a favorite for French-Moroccan fusion, live music, and a festive 'Bodeguita' atmosphere, pairing tagines and seafood with a lounge-style bar and cocktail program.",
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
      exactAddressAndCoordinates: {
        address: "Front de Mer, Lot N°5 Plage d'Agadir, Agadir 80000, Morocco",
        lat: 30.4189,
        lng: -9.6026
      },
      googleMapsUrl: "https://maps.google.com/?q=O+Playa+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528845867",
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
    id: "e-agadir-le20",
    city: "agadir",

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
      paymentMethods: ["credit_card", "cash"],
      tags: ["tagine", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Le 20'",
      neighborhood: "Secteur Balnéaire",
      description: "Operating in the Tagadirt complex since 1982, Le 20' is one of the oldest and most dependable addresses on Boulevard du 20 Août. It is celebrated for honest, generous Moroccan cooking alongside Mediterranean fish specialties and French bistro classics.",
      tip: "The slow-braised lamb tagine is arguably the tenderest on the strip. Excellent local Moroccan wine pairings are available.",
      badge: "local-favorite",
      bestDishes: [
        "Tender Lamb Tagine",
        "Grilled Saint-Pierre with Saffron Sauce",
        "Beef Tagine with Almonds",
        "Chocolate Mousse"
      ],
      pros: [
        "Very consistent quality and generous portions for reasonable prices in the tourist zone.",
        "Decades of reliable family-friendly service.",
        "Extensive dual Moroccan and Mediterranean menu."
      ],
      cons: [
        "No sea view (located slightly back in the commercial complex arcade).",
        "Can feel bustling and compact during peak dinner rush."
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
      exactAddressAndCoordinates: {
        address: "Complexe Tagadirt, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80012, Morocco",
        lat: 30.4146,
        lng: -9.6009
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Le+20+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528840805",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://le20.ma",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija", "German"]
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
      mealTypes: ["lunch", "dinner"],
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
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
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
      tags: ["pastilla", "couscous", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant La Pastilla",
      neighborhood: "Secteur Balnéaire",
      description: "Tucked inside Complexe Tagadirt on Boulevard du 20 Août, this dedicated Moroccan dining room is renowned for mastering Morocco's most intricate culinary specialty: sweet and savory pastillas with delicate flaky pastry, roasted almonds, and spiced fillings.",
      tip: "Arrive before 21:30 for dinner; the house-made pastillas sell out quickly on high-traffic evenings.",
      badge: "local-favorite",
      bestDishes: [
        "Chicken & Almond Pastilla",
        "Seafood Pastilla",
        "Sweet Cinnamon Seffa",
        "Chicken Couscous"
      ],
      pros: [
        "Outstanding execution of sweet and savory pastillas rarely perfected in tourist zones.",
        "Warm traditional decor with complimentary Moroccan mint tea and pastries.",
        "Exceptional value for authentic home-style Moroccan recipes."
      ],
      cons: [
        "Popular items can run out late in the evening.",
        "Small dining room that can fill quickly."
      ],
      googleRating: 4.7,
      googleReviewCount: 1430,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 280,
      theforkRating: 4.5,
      theforkReviewCount: 120,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1430,
      openTime: "09:00",
      closeTime: "00:00",
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
    id: "e-agadir-the-blacksmith",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "family", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Grill & BBQ", "Italian", "Moroccan", "International"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "nomad"],
      vibeTags: ["lively", "casual", "warm", "trendy"],
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
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "budget", "dry", "dinner", "couscous"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "The Blacksmith Agadir",
      neighborhood: "Talborjt",
      description: "A hugely popular modern grill house and smokehouse situated on Rue des Orangers in Talborjt. Celebrated for its \"Crafted by Fire\" ethos, offering wood-smoked ribs, juicy burgers, flame-baked pizzas, and traditional Friday royal couscous.",
      tip: "Try their signature smoked brisket burger or visit on Friday for their generous beef couscous.",
      badge: "local-favorite",
      bestDishes: [
        "Smoked Brisket Burger",
        "Ribeye Steak",
        "Wood-Fired Pizza",
        "Friday Royal Couscous"
      ],
      pros: [
        "Top-tier grill and wood-fired preparations with massive local following.",
        "Generous portion sizes for reasonable prices.",
        "Vibrant atmosphere and prompt kitchen turnaround."
      ],
      cons: [
        "Very busy on weekend evenings; short wait times are common.",
        "Strictly non-alcoholic venue."
      ],
      googleRating: 4.7,
      googleReviewCount: 3880,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 320,
      theforkRating: 4.6,
      theforkReviewCount: 140,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 3880,
      openTime: "12:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "2 Rue des Orangers / Avenue Hassan II, Talborjt, Agadir 80000, Morocco",
        lat: 30.4226,
        lng: -9.601
      },
      googleMapsUrl: "https://maps.google.com/?q=The+Blacksmith+Agadir+Talborjt",
      reservationMethod: ["phone"],
      reservationContact: "+212666540976",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/theblacksmi.th",
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
      description: "A luxurious Pan-Latin fine-dining beach lounge and private beach club at The View Hotel. Combines oceanfront cabanas, Nikkei ceviches, Wagyu skewers, craft mixology, and sunset DJ sessions.",
      tip: "Book ahead for sunset drinks on the oceanfront deck, or reserve a private beach cabana for day-long food and bottle service.",
      badge: "splurge",
      bestDishes: [
        "Tiradito de Saint-Pierre",
        "Nikkei Tuna Tartare",
        "Wagyu Beef Anticuchos",
        "Passion Fruit Vanilla Cocktail",
        "Churros with Dulce de Leche"
      ],
      pros: [
        "Direct private-beach access with sun loungers, cabanas, and towel service.",
        "Signature Buddha-Bar brand cocktail program and refined Pan-Latin cuisine.",
        "Complimentary valet parking at The View Hotel."
      ],
      cons: [
        "High price point aligned with 5-star palace beach lounges.",
        "Smart casual dress code strictly enforced in the evening."
      ],
      googleRating: 4.6,
      googleReviewCount: 280,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 95,
      theforkRating: 4.5,
      theforkReviewCount: 60,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 280,
      openTime: "10:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "The View Hotel, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4158,
        lng: -9.6022
      },
      googleMapsUrl: "https://maps.google.com/?q=Nazka+by+Buddha-Bar+The+View+Agadir",
      reservationMethod: ["phone", "website", "email"],
      reservationContact: "+212528294040",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://nazkaagadir.com",
      instagram: "https://instagram.com/nazkaagadir",
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
  // 2. THE BLACKSMITH AGADIR (Enriched with Complete Structured Menu)
  // =========================================================================
  {
    id: "e-agadir-the-blacksmith",
    city: "agadir",
    openTime: "08:30",
    closeTime: "01:00",
    weeklySchedule: [
      { day: "Monday", open: "08:30", close: "01:00", isClosed: false },
      { day: "Tuesday", open: "08:30", close: "01:00", isClosed: false },
      { day: "Wednesday", open: "08:30", close: "01:00", isClosed: false },
      { day: "Thursday", open: "08:30", close: "01:00", isClosed: false },
      { day: "Friday", open: "08:30", close: "01:00", isClosed: false, note: "Couscous Royal servi à midi" },
      { day: "Saturday", open: "08:30", close: "01:00", isClosed: false },
      { day: "Sunday", open: "08:30", close: "01:00", isClosed: false }
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash", "visa", "mastercard"],
      tags: ["late-night", "budget", "dry", "dinner", "couscous", "breakfast", "terrace"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "The Blacksmith Agadir",
      neighborhood: "Talborjt",
      description: "A trendy open-flame smokehouse, wood-fired pizzeria, and specialty coffee bar situated on Rue des Orangers. Celebrated for its 'Crafted by Fire' culinary philosophy: slow-smoked brisket burgers, leopard-charred pizzas, tender braised lamb shanks, and traditional Friday royal couscous.",
      tip: "Try the signature smoked brisket burger or visit on Friday for their generous beef couscous. Great spot for third-wave flat white coffees in the morning.",
      badge: "local-favorite",
      bestDishes: [
        "Smoked Brisket Burger",
        "The Blacksmith Grill Platter",
        "Wood-Fired Pizza Margherita",
        "Souris d'Agneau Confiture d'Épices",
        "Friday Royal Couscous",
        "Orange Pastilla Croustillante"
      ],
      pros: [
        "Dynamic wood-fired pizza and charcoal grill menu executed with flair",
        "Generous portions and pleasant shaded terrace on Rue des Orangers",
        "Quality specialty coffee (flat whites, cold brew) served from 08:30 AM",
        "Vibrant atmosphere popular with both international travelers and locals"
      ],
      cons: [
        "Can experience short waits during peak weekend dinner hours",
        "Strictly non-alcoholic venue"
      ],
      googleRating: 4.7,
      googleReviewCount: 3880,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 320,
      theforkRating: 4.6,
      theforkReviewCount: 140,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 3880,
      openTime: "08:30",
      closeTime: "01:00",
      weeklySchedule: [
        { day: "Monday", openTime: "08:30", closeTime: "01:00", isClosed: false },
        { day: "Tuesday", openTime: "08:30", closeTime: "01:00", isClosed: false },
        { day: "Wednesday", openTime: "08:30", closeTime: "01:00", isClosed: false },
        { day: "Thursday", openTime: "08:30", closeTime: "01:00", isClosed: false },
        { day: "Friday", openTime: "08:30", closeTime: "01:00", isClosed: false, note: "Couscous Royal servi à midi" },
        { day: "Saturday", openTime: "08:30", closeTime: "01:00", isClosed: false },
        { day: "Sunday", openTime: "08:30", closeTime: "01:00", isClosed: false }
      ],
      exactAddressAndCoordinates: {
        address: "2 Rue des Orangers, Talborjt, Agadir 80000, Morocco",
        lat: 30.4226,
        lng: -9.601
      },
      address: "2 Rue des Orangers, Talborjt, Agadir 80000, Morocco",
      coordinates: {
        lat: 30.4226,
        lng: -9.601
      },
      googleMapsUrl: "https://maps.google.com/?q=The+Blacksmith+Agadir+Talborjt",
      reservationMethod: ["phone", "website", "walk-in"],
      reservationContact: "+212666540976",
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
            id: "entrees-flamme",
            title: "Entrées & Bouchées au Feu de Bois (Starters & Small Plates)",
            description: "Bouchées saisies à la flamme, tartares et salades du chef",
            items: [
              {
                id: "bs-tartare-thon",
                name: "Tataki de Thon Rouge aux Épices Marocaines",
                localName: "تاتاكي التونة الحمراء المشوية بنكهات مغربية وعسل التوت",
                translations: {
                  ar: "تاتاكي التونة الحمراء المشوية بنكهات مغربية وعسل التوت",
                  en: "Seared red tuna tataki with Moroccan spices, sesame crust, and soy-citrus glaze",
                  es: "Tataki de atún rojo sellado a la llama con especias marroquíes y sésamo",
                  de: "Kurz angebratenes Rotes Thunfisch-Tataki mit marokkanischen Gewürzen und Sesam"
                },
                price: 95,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "bs-seafood-cazuela",
                name: "Cazuela de Fruits de Mer Sizzling",
                localName: "طاجين كازويلا فواكه البحر مع الحبار والقريدس بصلصة الطماطم",
                translations: {
                  ar: "طاجين كازويلا فواكه البحر مع الحبار والقريدس بصلصة الطماطم",
                  en: "Sizzling cast-iron skillet of calamari and prawns in a rich garlic tomato reduction",
                  es: "Cazuela chisporroteante de calamares y gambas en salsa especiada de tomate",
                  de: "Brutzelnde Meeresfrüchte-Pfanne mit Calamari und Garnelen in würziger Tomatensauce"
                },
                price: 140,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "bs-chicken-wings",
                name: "Ailes de Poulet Glacées au Miel & Piment Fumé",
                localName: "أجنحة دجاج مقرمشة مدهونة بالعسل والصلصة المدخنة الحارة",
                translations: {
                  ar: "أجنحة دجاج مقرمشة مدهونة بالعسل والصلصة المدخنة الحارة",
                  en: "Crispy chicken wings glazed in smoked chili honey BBQ sauce",
                  es: "Alitas de pollo crujientes glaseadas con miel y salsa barbacoa picante",
                  de: "Knusprige Hähnchenflügel glasiert mit Honig und rauchiger Chilisauce"
                },
                price: 75,
                isSpicy: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "grillades-braise",
            title: "La Forge : Grillades & Plats Signatures (From The Fire)",
            description: "Viandes sélectionnées fumées au bois et saisies sur braises ardentes",
            items: [
              {
                id: "bs-grill-platter",
                name: "The Blacksmith Grill Platter (Pour 2)",
                localName: "صينية مشاوي بلاك سميث الفاخرة (كفتة، ستيك، دجاج، بطاطس مقلية وسلطة)",
                translations: {
                  ar: "صينية مشاوي بلاك سميث الفاخرة (كفتة، ستيك، دجاج، بطاطس مقلية وسلطة)",
                  en: "Grand charcoal grill platter: beef fillet skewers, kefta, chicken skewers, fries & house slaw",
                  es: "Gran parrillada de carne The Blacksmith con brochetas, kefta, patatas y ensalada",
                  de: "Große Grillplatte The Blacksmith: Rinderfilet-Spieße, Kefta, Hähnchen, Pommes und Salat"
                },
                price: 185,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Plat généreux conçu pour être partagé"
              },
              {
                id: "bs-brisket-burger",
                name: "Smoked Brisket Burger Maison",
                localName: "برغر لحم البريسكت المدخن ببطء مع جبن الشيدر والبصل المكرمل",
                translations: {
                  ar: "برغر لحم البريسكت المدخن ببطء مع جبن الشيدر والبصل المكرمل",
                  en: "Brioche burger with slow-smoked pulled brisket, aged cheddar, pickles, and crispy fries",
                  es: "Hamburguesa en pan brioche con carne de brisket ahumada y queso cheddar fundido",
                  de: "Brioche-Burger mit langsam geräucherter Rinderbrust, gereiftem Cheddar und Pommes"
                },
                price: 110,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "bs-souris-agneau",
                name: "Souris d'Agneau Confite au Miel & Épices",
                localName: "ساق خروف مطهو ببطء بالعسل والتوابل الشرقية يقدم مع الأرز المتبل",
                translations: {
                  ar: "ساق خروف مطهو ببطء بالعسل والتوابل الشرقية يقدم مع الأرز المتبل",
                  en: "Slow-roasted tender lamb shank falling off the bone with honey glaze and spiced rice",
                  es: "Jarrete de cordero confitado al horno con miel y especias sobre arroz aromático",
                  de: "Butterzarte geschmorte Lammhaxe mit Honigkruste auf gewürztem Duftreis"
                },
                price: 160,
                isSignature: true,
                dietary: ["halal"]
              },
              {
                id: "bs-beef-tagliatelle",
                name: "Tagliatelle Fraîches au Ragù de Bœuf Braisé",
                localName: "باستا تالياتيلي طازجة بصلصة اللحم البقري المطهو ببطء والبارميزان",
                translations: {
                  ar: "باستا تالياتيلي طازجة بصلصة اللحم البقري المطهو ببطء والبارميزان",
                  en: "Fresh handmade ribbon pasta with slow-braised rich beef ragù and shaved parmesan",
                  es: "Tagliatelle frescos con ragú de ternera estofada y lascas de parmesano",
                  de: "Frische Tagliatelle mit langsam geschmortem Rinderragout und gehobeltem Parmesan"
                },
                price: 96,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "wood-fired-pizza",
            title: "Pizzas au Feu de Bois (Pizza Bar)",
            description: "Pâte maturée 48 heures et cuite au feu de bois dans le four à briques",
            items: [
              {
                id: "bs-pizza-margherita",
                name: "Pizza Margherita Neapolitana",
                localName: "بيتزا مارغريتا بصلصة طماطم سان مارزانو والموزاريلا والريحان",
                translations: {
                  ar: "بيتزا مارغريتا بصلصة طماطم سان مارزانو والموزاريلا والريحان",
                  en: "Wood-fired Margherita with San Marzano tomato sauce, fior di latte mozzarella & fresh basil",
                  es: "Pizza Margarita al horno de leña con salsa San Marzano, mozzarella y albahaca",
                  de: "Holzofen-Pizza Margherita mit San-Marzano-Tomatensauce, Mozzarella und frischem Basilikum"
                },
                price: 78,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "bs-pizza-blacksmith",
                name: "Pizza Blacksmith au Bœuf Fumé & Champignons",
                localName: "بيتزا بلاك سميث المميزة باللحم البقري المدخن والفطر الطازج",
                translations: {
                  ar: "بيتزا بلاك سميث المميزة باللحم البقري المدخن والفطر الطازج",
                  en: "House signature pizza topped with smoked beef brisket, sautéed wild mushrooms, and mozzarella",
                  es: "Pizza especial de la casa con ternera ahumada, champiñones silvestres y mozzarella",
                  de: "Hauspizza mit geräuchertem Rindfleisch, Waldpilzen und geschmolzenem Mozzarella"
                },
                price: 115,
                isSignature: true,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "plats-marocains",
            title: "Tradition Marocaine (Moroccan Heritage)",
            description: "Les incontournables mijotés dans les règles de l'art",
            items: [
              {
                id: "bs-couscous-royal",
                name: "Couscous Royal aux Sept Légumes (Vendredi)",
                localName: "كسكس ملكي بالسبع خضار واللحم البقري والدجاج والقرع المعسل",
                translations: {
                  ar: "كسكس ملكي بالسبع خضار واللحم البقري والدجاج والقرع المعسل",
                  en: "Traditional Friday Royal Couscous with tender beef, chicken, 7 garden vegetables, and caramelized onions",
                  es: "Cuscús real tradicional con ternera, pollo, siete verduras y tfaya caramelizada",
                  de: "Traditioneller Freitags-Couscous Royal mit Rind, Hähnchen, sieben Gemüsesorten und Tfaya"
                },
                price: 120,
                isSignature: true,
                dietary: ["halal"],
                portionNotes: "Spécialité incontournable du vendredi midi"
              },
              {
                id: "bs-tagine-boeuf-pruneaux",
                name: "Tajine de Bœuf aux Pruneaux & Amandes Dorées",
                localName: "طاجين اللحم البقري المعسل بالبرقوق واللوز المقلي والسمسم",
                translations: {
                  ar: "طاجين اللحم البقري المعسل بالبرقوق واللوز المقلي والسمسم",
                  en: "Slow-simmered beef tagine with caramelized prunes, toasted almonds, and sesame seeds",
                  es: "Tajine de ternera con ciruelas pasas caramelizadas, almendras tostadas y sésamo",
                  de: "Geschmorter Rindertagine mit karamellisierten Pflaumen, gerösteten Mandeln und Sesam"
                },
                price: 115,
                dietary: ["halal"]
              }
            ]
          },
          {
            id: "desserts-coffee",
            title: "Desserts & Specialty Coffee",
            description: "Pâtisseries maison et café d'origine fraîchement torréfié",
            items: [
              {
                id: "bs-orange-pastilla",
                name: "Pastilla Croustillante à l'Orange & Cannelle",
                localName: "بسطيلة مقرمشة بشرائح البرتقال الطازج والكريمة والقرفة",
                translations: {
                  ar: "بسطيلة مقرمشة بشرائح البرتقال الطازج والكريمة والقرفة",
                  en: "Crisp golden filo pastry layered with sweet milk cream, fresh orange slices, and cinnamon",
                  es: "Pastela crujiente de hojaldre con crema dulce, naranja fresca y canela",
                  de: "Knusprige Filoteig-Pastilla mit süßer Sahnecreme, frischen Orangen und Zimt"
                },
                price: 70,
                isSignature: true,
                dietary: ["vegetarian", "halal"]
              },
              {
                id: "bs-specialty-flatwhite",
                name: "Café Specialty Flat White",
                localName: "قهوة فلات وايت مختصة محضرة بحليب مبخر ناعم",
                translations: {
                  ar: "قهوة فلات وايت مختصة محضرة بحليب مبخر ناعم",
                  en: "Double shot of single-origin espresso with velvety micro-foam milk",
                  es: "Café de especialidad flat white con microespuma de leche",
                  de: "Specialty Coffee Flat White mit samtigem Mikroschaum"
                },
                price: 35,
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
        "Terrace can get quite breezy when ocean winds pick up in the late afternoon",
        "Service can slow down noticeably during peak sunset changeover"
      ],
      googleRating: 4.1,
      googleReviewCount: 1250,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 480,
      theforkRating: 4.1,
      theforkReviewCount: 160,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1250,
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
  }
];
