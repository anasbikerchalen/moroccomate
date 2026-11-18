/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: CASABLANCA
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-casablanca-1' or 'eat-casablanca-restaurant')
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
 *   id: 'e-casablanca-[id]',
 *   city: 'casablanca',
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

export const casablancaEat: EatListing[] = [
  {
    id: "e-casablanca-1",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["panoramic-views", "palatial", "romantic", "opulent"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 1800,
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
      ramadanFriendly: "serves-lunch",
      closedDays: ["monday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "visa", "mastercard"],
      tags: ["fine-dining", "pastilla", "royal-mansour", "ocean-view", "splurge"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Grande Table Marocaine",
      neighborhood: "Centre-Ville",
      description: "Signature 23rd-floor Moroccan gastronomic palace inside Royal Mansour Casablanca, celebrating historic royal recipes with 360-degree ocean views.",
      tip: "Reserve early for sunset and request a window table facing the Hassan II Mosque to watch the Atlantic horizon light up.",
      badge: "splurge",
      bestDishes: [
        "Pastilla royale de pigeon aux amandes",
        "Homard bleu de Oualidia cuit en carapace",
        "M'choui d'epaule d'agneau au beurre fume"
      ],
      pros: ["Exceptional 23rd-floor ocean panoramas", "Flawless palace-grade service", "Refined traditional terroir recipes"],
      cons: ["Very high price tier", "Dress code strictly enforced"],
      googleRating: 4.8,
      googleReviewCount: 140,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 95,
      theforkRating: 4.8,
      theforkReviewCount: 85,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 140,
      openTime: "12:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Grande+Table+Marocaine+Royal+Mansour+Casablanca",
      reservationMethod: ["phone", "email", "website"],
      reservationContact: "+212529900500",
      bookingUrl: "https://www.royalmansour.com/casablanca/restauration/la-grande-table-marocaine/",
      whatsappNumber: "+212630004499",
      website: "https://www.royalmansour.com/casablanca/restauration/la-grande-table-marocaine/",
      instagram: "https://instagram.com/royalmansourcasablanca"
    },
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        tag: "Palace Transparency",
        description: "Official palace fine-dining menu with fixed pricing and all taxes included; itemized billing with zero unexpected surcharges.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Royal Standards",
        description: "Impeccable palace kitchen hygiene; fresh coastal blue lobster, purified water, and strict culinary standards.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Imperial Moroccan",
        description: "Authentic royal heritage recipes, royal pigeon pastilla, and slow-braised Atlas mountain lamb shoulder.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "23rd Floor Haven",
        description: "Luxury 23rd-floor ocean views overlooking the Atlantic and Hassan II Mosque; tranquil, dignified, and completely private.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "White Glove Service",
        description: "World-class anticipatory service by seasoned sommeliers and waitstaff; smart elegant dress code strictly requested.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-casablanca-2",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Mediterranean", "Seafood", "French-Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["oceanfront", "sunset", "lively", "iconic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 650,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["oceanfront", "sunset-drinks", "seafood", "corniche", "nightlife"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Cabestan",
      neighborhood: "Phare El Hank",
      description: "Legendary oceanfront institution perched over the crashing Atlantic waves since 1926, offering prime seafood, steaks, and a lively late-night lounge.",
      tip: "Book an outdoor terrace table for 18:30 to catch golden hour over the ocean before the late-night DJ sets kick off.",
      badge: "splurge",
      bestDishes: [
        "Dakhla Oysters on Ice",
        "Wood-oven Caramelized Octopus",
        "Salt-crusted Wild Sea Bass"
      ],
      pros: ["Dramatic clifftop ocean panorama", "Vibrant evening lounge energy", "Extensive seafood raw bar"],
      cons: ["Can get noisy during weekend DJ sets", "Terrace requires advance booking in summer"],
      googleRating: 4.1,
      googleReviewCount: 3680,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 1860,
      theforkRating: 4.1,
      theforkReviewCount: 450,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 3680,
      openTime: "12:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Cabestan+Casablanca",
      reservationMethod: ["phone", "whatsapp", "website"],
      reservationContact: "+212522391190",
      bookingUrl: "https://cabestan.ma",
      whatsappNumber: "+212661448822",
      website: "https://cabestan.ma",
      instagram: "https://instagram.com/lecabestanoceanview"
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
    id: "e-casablanca-3",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "seniors"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["French-Moroccan", "International", "Seafood"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["cinematic", "live-jazz", "historic", "nostalgic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 38,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["live-jazz", "casablanca-movie", "cocktails", "medina-ramparts", "fine", "dinner", "alcohol"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Rick's Café",
      neighborhood: "Ancienne Médina",
      description: "Iconic cinematic dining salon and cocktail bar set inside a 1930s riad against the old medina walls, recreating the timeless elegance and live acoustic piano jazz of the 1942 film classic.",
      tip: "Book the second evening seating (21:00) to savor dinner while resident pianist Issam Chabaa performs 'As Time Goes By'. Strict smart-casual dress code is enforced at the door (no shorts, flip-flops, or sportswear).",
      badge: "splurge",
      bestDishes: [
        "Grilled Sea Bass with Curry Sauce",
        "Rick's Char-Grilled Ribeye",
        "Champagne Oysters",
        "Original Rick's Cheesecake"
      ],
      pros: [
        "Atmospheric live acoustic piano jazz every evening in a restored 1930s riad",
        "Faithful 1940s cinema-inspired decor with alcoves, brass lamps, and working fireplaces",
        "Complimentary valet parking at the door right outside the Ancienne Médina ramparts"
      ],
      cons: [
        "Strict smart-casual dress code strictly enforced (guests in shorts or flip-flops may be turned away)",
        "Tourist-tier fine dining prices; heavily booked for dinner without advance reservation"
      ],
      googleRating: 4.2,
      googleReviewCount: 6500,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 3820,
      theforkRating: 4.1,
      theforkReviewCount: 650,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 6500,
      openTime: "12:00",
      closeTime: "00:30",
      weeklySchedule: [
        { day: "Monday", openTime: "12:00", closeTime: "00:30", isClosed: false, note: "Lunch 12:00–15:00 • Dinner 18:30–00:30" },
        { day: "Tuesday", openTime: "12:00", closeTime: "00:30", isClosed: false, note: "Lunch 12:00–15:00 • Dinner 18:30–00:30" },
        { day: "Wednesday", openTime: "12:00", closeTime: "00:30", isClosed: false, note: "Lunch 12:00–15:00 • Dinner 18:30–00:30" },
        { day: "Thursday", openTime: "12:00", closeTime: "00:30", isClosed: false, note: "Lunch 12:00–15:00 • Dinner 18:30–00:30" },
        { day: "Friday", openTime: "12:00", closeTime: "00:30", isClosed: false, note: "Lunch 12:00–15:00 • Dinner 18:30–00:30" },
        { day: "Saturday", openTime: "12:00", closeTime: "00:30", isClosed: false, note: "Lunch 12:00–15:00 • Dinner 18:30–00:30" },
        { day: "Sunday", openTime: "12:00", closeTime: "00:30", isClosed: false, note: "Lunch 12:00–15:00 • Dinner 18:30–00:30" }
      ],
      exactAddressAndCoordinates: {
        address: "248 Boulevard Sour Jdid, Ancienne Médina, Casablanca 20110, Morocco",
        lat: 33.60523,
        lng: -7.62037
      },
      address: "248 Boulevard Sour Jdid, Ancienne Médina, Casablanca 20110, Morocco",
      coordinates: {
        lat: 33.60523,
        lng: -7.62037
      },
      googleMapsUrl: "https://maps.google.com/?q=Rick%27s+Cafe+Casablanca",
      reservationMethod: ["phone", "email", "website"],
      reservationContact: "+212522274207",
      bookingUrl: "https://www.rickscafe.ma",
      whatsappNumber: "",
      website: "https://www.rickscafe.ma",
      instagram: "https://instagram.com/rickscafe_casablanca",
      languagesSpoken: ["French", "English", "Arabic/Darija"],
      menu: {
        currency: "MAD",
        lastUpdated: "November 2026",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "starters-salads",
            title: "Starters & Crisp Salads (Entrées)",
            description: "Fresh Atlantic oysters and bistro-inspired salads prepared daily",
            items: [
              {
                id: "ricks-oysters",
                name: "Champagne Oysters (Gratinated)",
                localName: "محار مغربي غراتان بصلصة السابايون والبارميزان",
                translations: {
                  ar: "محار مغربي غراتان بصلصة السابايون والبارميزان",
                  en: "Dakhla oysters gratinated with creamy champagne sabayon and aged parmesan",
                  es: "Ostras gratinadas con crema sabayón y queso parmesano",
                  de: "Gratinierte Austern mit cremiger Sabayon und Parmesan"
                },
                price: 185,
                isSignature: true,
                dietary: ["gluten-free"]
              },
              {
                id: "ricks-goat-cheese-figs",
                name: "Goat Cheese with Figs & Arugula",
                localName: "جبن الماعز الطازج مع التين والجرجير وصلصة البلسميك",
                translations: {
                  ar: "جبن الماعز الطازج مع التين والجرجير وصلصة البلسميك",
                  en: "Warm goat cheese served over fresh figs, wild arugula, and aged balsamic vinaigrette",
                  es: "Queso de cabra tibio con higos frescos, rúcula y vinagreta balsámica",
                  de: "Ziegenkäse mit frischen Feigen, Rucola und Balsamico-Vinaigrette"
                },
                price: 130,
                dietary: ["vegetarian", "gluten-free", "halal"]
              },
              {
                id: "ricks-burrata",
                name: "Creamy Burrata Salad",
                localName: "سلطة جبنة بوراتا الإيطالية مع الطماطم الكرزية",
                translations: {
                  ar: "سلطة جبنة بوراتا الإيطالية مع الطماطم الكرزية",
                  en: "Fresh Italian burrata paired with vine-ripened tomatoes, basil oil, and sea salt",
                  es: "Burrata italiana cremosa con tomates maduros y aceite de albahaca",
                  de: "Cremige Burrata mit reifen Tomaten und Basilikumöl"
                },
                price: 140,
                dietary: ["vegetarian", "gluten-free", "halal"]
              },
              {
                id: "ricks-prawn-tropicana",
                name: "Prawn Salad Tropicana",
                localName: "سلطة القريدس الاستوائية بالأفوكادو والبابايا وزيت الأركان",
                translations: {
                  ar: "سلطة القريدس الاستوائية بالأفوكادو والبابايا وزيت الأركان",
                  en: "Atlantic prawns tossed with papaya, avocado, and culinary argan-curry dressing",
                  es: "Ensalada de gambas con papaya, aguacate y aderezo de argán al curry",
                  de: "Garnelensalat mit Papaya, Avocado und Arganöl-Curry-Dressing"
                },
                price: 145,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "ricks-smoked-salmon",
                name: "Smoked Salmon Salad",
                localName: "سلطة السلمون المدخن مع الأعشاب الطازجة",
                translations: {
                  ar: "سلطة السلمون المدخن مع الأعشاب الطازجة",
                  en: "Delicate smoked salmon ribbons over crisp greens, capers, and lemon-dill emulsion",
                  es: "Ensalada de salmón ahumado con alcaparras y emulsión de limón y eneldo",
                  de: "Räucherlachssalat mit Kapern und Zitronen-Dill-Dressing"
                },
                price: 145,
                dietary: ["gluten-free", "halal"]
              }
            ]
          },
          {
            id: "mains-steaks-seafood",
            title: "Atlantic Seafood & Prime Cuts (Plats)",
            description: "Fresh daily port catches and signature char-grilled steaks",
            items: [
              {
                id: "ricks-seabass-curry",
                name: "Grilled Sea Bass with Curry Sauce",
                localName: "سمك القاروص المشوي بصلصة الكاري والزعفران مع الأرز",
                translations: {
                  ar: "سمك القاروص المشوي بصلصة الكاري والزعفران مع الأرز",
                  en: "Atlantic sea bass fillets grilled with basmati and black rice in creamy saffron-curry sauce",
                  es: "Filetes de lubina atlántica a la parrilla con arroz y salsa cremosa de azafrán al curry",
                  de: "Gegrilltes Wolfsbarschfilet mit Basmati- und schwarzem Reis in Safran-Currysauce"
                },
                price: 215,
                isSignature: true,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "ricks-stroganoff",
                name: "Crown of Stroganoff",
                localName: "شرائح لحم ستروغانوف بالكريمة والفطر والطرخون",
                translations: {
                  ar: "شرائح لحم ستروغانوف بالكريمة والفطر والطرخون",
                  en: "Tender beef fillet strips and wild mushrooms simmered in tarragon cream sauce",
                  es: "Tiras de solomillo de ternera y champiñones en salsa cremosa al estragón",
                  de: "Zarte Rinderfiletstreifen mit Waldpilzen in Estragon-Rahmsauce"
                },
                price: 190,
                dietary: ["halal"]
              },
              {
                id: "ricks-ny-strip",
                name: "New York Strip Grilled Steak",
                localName: "شريحة لحم نيويورك ستريب مشوية",
                translations: {
                  ar: "شريحة لحم نيويورك ستريب مشوية",
                  en: "Prime char-grilled New York strip steak with roasted vegetables and herb butter",
                  es: "Entrecot New York Strip a la parrilla con verduras asadas y mantequilla de hierbas",
                  de: "Gegrilltes New-York-Strip-Steak mit Röstgemüse und Kräuterbutter"
                },
                price: 225,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "ricks-surf-turf",
                name: "Beef Steak Surf & Turf",
                localName: "ستيك اللحم البقري مع القريدس الكبير المشوي",
                translations: {
                  ar: "ستيك اللحم البقري مع القريدس الكبير المشوي",
                  en: "Tender beef medallion paired with grilled Atlantic jumbo shrimp",
                  es: "Medallón de ternera acompañado de langostinos a la parrilla",
                  de: "Zartes Rindermedaillon serviert mit gegrillten Riesengarnelen"
                },
                price: 235,
                dietary: ["gluten-free", "halal"]
              },
              {
                id: "ricks-ribeye",
                name: "Rick's Char-Grilled Ribeye (Chef's Special)",
                localName: "ستيك ريب آي مشوي على الفحم مع زبدة الأعشاب",
                translations: {
                  ar: "ستيك ريب آي مشوي على الفحم مع زبدة الأعشاب",
                  en: "Bone-in prime ribeye grilled over charcoal with herb compound butter and bistro sides",
                  es: "Chuletón ribeye a la brasa con mantequilla de hierbas y guarnición",
                  de: "Am Knochen gegrilltes Ribeye-Steak mit Kräuterbutter und Beilagen"
                },
                price: 490,
                isSignature: true,
                dietary: ["gluten-free", "halal"]
              }
            ]
          },
          {
            id: "desserts-classic",
            title: "Classic Bistro Desserts (Desserts)",
            description: "Signature house-made sweets enjoyed alongside evening piano jazz",
            items: [
              {
                id: "ricks-cheesecake",
                name: "Original Rick's Cheesecake",
                localName: "تشيز كيك ريكس كافيه الكلاسيكي الأصلي",
                translations: {
                  ar: "تشيز كيك ريكس كافيه الكلاسيكي الأصلي",
                  en: "Rick's signature New York-style baked cheesecake served with seasonal berry coulis",
                  es: "Tarta de queso horneada clásica de Rick's con coulis de frutos rojos",
                  de: "Klassischer gebackener Rick's Cheesecake mit Beeren-Coulis"
                },
                price: 70,
                isSignature: true,
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
        tag: "Tourist-Tier Pricing",
        description: "Printed menu in MAD with transparent pricing; expect upscale international prices (215–490 MAD mains) and cocktail markups.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        tag: "Spotless Riad Kitchen",
        description: "Strict international hospitality hygiene standards; fresh Casablanca port fish, bottled water, and clean bar ice.",
        tone: "good",
        tagColor: "water",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        tag: "Franco-Bistro & Seafood",
        description: "Focuses on cosmopolitan bistro steaks, Atlantic seafood, and cocktails rather than traditional tagines or couscous.",
        tone: "good",
        tagColor: "food",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        tag: "Strict Dress Code",
        description: "Iconic 1940s jazz ambiance inside a restored riad with valet parking; smart-casual dress code strictly enforced at the door.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        tag: "Book Ahead",
        description: "Polite, professional staff; advance reservations are strongly recommended for evening dinner seatings near the grand piano.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-casablanca-4",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["International", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["zen", "minimalist", "culinary-art", "sleek"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 850,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: ["sunday"],
      seatingTypes: ["indoor", "terrace", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["japanese", "omakase", "sushi", "robata", "gauthier"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Iloli",
      neighborhood: "Gauthier",
      description: "Morocco's premier Japanese culinary sanctuary pairing authentic omakase technique and Robata grill with pristine Atlantic seafood and local produce.",
      tip: "Request seating directly at the open kitchen sushi counter to watch the master chefs slice sashimi with surgical precision.",
      badge: "splurge",
      bestDishes: [
        "Dakhla Oysters with Yuzu Ponzu",
        "Truffled Robata Sea Bream",
        "Wagyu Beef Tataki"
      ],
      pros: ["Pinnacle of fine Asian dining in North Africa", "Exceptional Japanese sake and whisky cellar", "Serene patio retreat in Gauthier"],
      cons: ["High price point", "Closed on Sundays"],
      googleRating: 4.4,
      googleReviewCount: 750,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 460,
      theforkRating: 4.4,
      theforkReviewCount: 220,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 750,
      openTime: "12:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Iloli+Casablanca",
      reservationMethod: ["phone", "whatsapp", "website"],
      reservationContact: "+212608866633",
      bookingUrl: "https://www.iloli-restaurant.com",
      whatsappNumber: "+212608866633",
      website: "https://www.iloli-restaurant.com",
      instagram: "https://instagram.com/iloli.casablanca"
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
    id: "e-casablanca-5",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "solo", "seniors"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Seafood"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["historic-fortress", "lush-garden", "family-friendly", "relaxed"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 180,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["moroccan-breakfast", "garden-patio", "bastion", "dry-restaurant", "ftour"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Sqala",
      neighborhood: "Ancienne Médina",
      description: "Picturesque garden café situated inside an 18th-century fortified Portuguese bastion, famous for traditional Fassi breakfasts and courtyard tagines.",
      tip: "Arrive before 10:30 AM on weekends to secure an outdoor table by the fountains for their legendary Moroccan breakfast spread.",
      badge: "local-favorite",
      bestDishes: [
        "Ftour Sqala Traditional Breakfast Platter",
        "Tagine of Fresh Atlantic Sea Bass",
        "Sweet and Savory Pigeon Pastilla"
      ],
      pros: ["Stunning open-air garden courtyard surrounded by ancient cannons", "Generous breakfast platters", "Alcohol-free family environment"],
      cons: ["Can have weekend wait times", "No alcohol served"],
      googleRating: 4.2,
      googleReviewCount: 11600,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 3060,
      theforkRating: 4.4,
      theforkReviewCount: 1200,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 11600,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Sqala+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522260960",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://lasqala.com",
      instagram: "https://instagram.com/lasqala"
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
    id: "e-casablanca-6",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["dinner"],
      experienceTypes: ["traditional", "fine-dining"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "luxury"],
      vibeTags: ["riad", "theatrical", "candlelit", "authentic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 450,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: ["sunday"],
      seatingTypes: ["indoor", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["riad-dining", "live-music", "tagines", "medina", "romantic"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Dar Dada",
      neighborhood: "Ancienne Médina",
      description: "Enchanting traditional riad hidden within the old medina walls, blending high-end Moroccan comfort food with theatrical hospitality.",
      tip: "Order the slow-cooked lamb shoulder; it is braised for eight hours until fork-tender and served with roasted almonds.",
      badge: "splurge",
      bestDishes: [
        "Slow-Cooked Lamb Shoulder Mechoui",
        "Zaalouk and Cooked Medina Salads",
        "Pastilla au Lait with Almonds"
      ],
      pros: ["Gorgeous zellige courtyard architecture", "Warm and attentive ceremonial service", "Excellent selection of Moroccan wines"],
      cons: ["Evening dinner service only", "Slightly tucked away inside the medina alleys"],
      googleRating: 4.1,
      googleReviewCount: 2400,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 850,
      theforkRating: 4.2,
      theforkReviewCount: 400,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 2400,
      openTime: "19:30",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Dada+Casablanca",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212522262525",
      bookingUrl: "",
      whatsappNumber: "+212661332211",
      website: "https://gardencasa.com/dardada",
      instagram: "https://instagram.com/dardada_casa"
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
    id: "e-casablanca-7",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["dinner", "brunch"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["art-deco", "intimate", "refined", "quiet"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 550,
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["hotel-le-doge", "fassi-gastronomy", "art-deco", "romantic"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Jasmine",
      neighborhood: "Gauthier",
      description: "Intimate gourmet Moroccan dining room inside the Relais & Châteaux Hôtel Le Doge, serving heritage Fassi imperial recipes under stained-glass Art Deco ceilings.",
      tip: "Pair your dinner with an aperitif on Le Doge's rooftop bar before descending to the candlelit dining room.",
      badge: "splurge",
      bestDishes: [
        "Kebab Maghdour Tagine with Poached Quail Egg",
        "Imperial Fassi Lamb Couscous",
        "Traditional Harira with Zagora Dates"
      ],
      pros: ["Extremely quiet and discreet ambiance", "Refined table settings with handcrafted silver", "Exemplary Relais & Châteaux service"],
      cons: ["Limited indoor seating capacity", "Reservation mandatory well in advance"],
      googleRating: 4.8,
      googleReviewCount: 160,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 230,
      theforkRating: 4.6,
      theforkReviewCount: 125,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 160,
      openTime: "19:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Jasmine+Hotel+Le+Doge+Casablanca",
      reservationMethod: ["phone", "email", "website"],
      reservationContact: "+212522467800",
      bookingUrl: "https://www.hotelledoge.com",
      whatsappNumber: "",
      website: "https://www.hotelledoge.com",
      instagram: "https://instagram.com/hotelledogecasablanca"
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
    id: "e-casablanca-8",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "solo", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Seafood", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["nostalgic", "bistro", "authentic", "vintage"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 260,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: ["sunday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["historic-tavern", "fried-calamari", "paella", "fresh-fish"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Taverne du Dauphin",
      neighborhood: "Centre-Ville",
      description: "Endearing 1948 portside maritime tavern beloved by locals for no-nonsense fresh catches of the day, cold Casablanca beers, and Spanish paella.",
      tip: "Arrive right at 12:15 PM for lunch; this old-school tavern fills up almost instantaneously with neighborhood bankers and port captains.",
      badge: "local",
      bestDishes: [
        "Crispy Fried Squid Beignets",
        "Spanish Seafood Paella for Two",
        "Grilled Atlantic Sole Meuniere"
      ],
      pros: ["Ultra-fresh daily port catch", "Old Casablanca mid-century tavern charm", "Generous portions"],
      cons: ["Closed on Sundays", "No terrace or outdoor seating"],
      googleRating: 4.2,
      googleReviewCount: 1390,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 755,
      theforkRating: 4.2,
      theforkReviewCount: 300,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1390,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Taverne+du+Dauphin+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522221200",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/latavernedudauphin"
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
    id: "e-casablanca-9",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["friends", "couple", "large-groups"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Middle Eastern", "Mediterranean"],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["sunset-view", "trendy", "oceanfront", "dj-sets"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 520,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["levantine", "mezze", "ocean-terrace", "corniche", "sunset"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Umayya",
      neighborhood: "Phare El Hank",
      description: "Chic Levantine and Mediterranean oceanfront restaurant overlooking the Atlantic, known for stylish mezze spreads, cocktails, and sunset DJ sessions.",
      tip: "Order several cold and hot mezze to share among friends while enjoying the sea breeze from the outdoor deck.",
      badge: "local-favorite",
      bestDishes: [
        "Smoked Baba Ganoush with Pomegranate",
        "Shrimp and Herb Falafel",
        "Slow-Roasted Lamb Shank with Spiced Rice"
      ],
      pros: ["Prime sunset terrace facing the Atlantic", "Lively social crowd and music", "Exceptional shareable mezze"],
      cons: ["Valet queue can be busy on weekend evenings", "Music gets louder after 22:00"],
      googleRating: 4.1,
      googleReviewCount: 550,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 190,
      theforkRating: 4.0,
      theforkReviewCount: 120,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 550,
      openTime: "12:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Umayya+Casablanca",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212522363030",
      bookingUrl: "https://cabestan.ma/umayya",
      whatsappNumber: "+212661448822",
      website: "https://cabestan.ma/umayya",
      instagram: "https://instagram.com/umayyacasablanca"
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
    id: "e-casablanca-10",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["International", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["pan-asian", "ocean-terrace", "stylish", "romantic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 580,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["pan-asian", "sushi", "oceanfront", "cocktails", "corniche"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Lily's",
      neighborhood: "Phare El Hank",
      description: "Sophisticated Pan-Asian dining pavilion set high on the cliffs of El Hank, featuring sushi, Thai curries, and floor-to-ceiling glass windows over the ocean.",
      tip: "Request an edge-of-terrace table for an unobstructed view of waves breaking against the rocky shore.",
      badge: "splurge",
      bestDishes: [
        "Tom Kha Gai Lobster Soup",
        "Crispy Duck with Steamed Pancakes",
        "Chef's Signature Dragon Maki Roll"
      ],
      pros: ["Dramatic clifftop Atlantic perspective", "Extensive pan-Asian menu variety", "Beautiful contemporary botanical interiors"],
      cons: ["Weekend dinner reservations are essential", "Premium pricing on cocktails"],
      googleRating: 4.2,
      googleReviewCount: 1220,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 460,
      theforkRating: 4.1,
      theforkReviewCount: 185,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1220,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Lily%27s+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522361212",
      bookingUrl: "https://lilys.ma",
      whatsappNumber: "",
      website: "https://lilys.ma",
      instagram: "https://instagram.com/lilys_casablanca"
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
    id: "e-casablanca-11",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "business-friendly"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["fine-dining", "rooftop"],
      foodStyles: ["Seafood", "Mediterranean", "French-Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["lighthouse", "wave-crashing", "historic-landmark", "rooftop"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 550,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
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
      seatingTypes: ["indoor", "outdoor", "terrace", "rooftop"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["lighthouse", "seafood-bistro", "rooftop-bar", "corniche"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Petit Rocher",
      neighborhood: "Phare El Hank",
      description: "Historic 1932 lighthouse-turned-seafood bistro directly touching the Atlantic rocks, complemented by a rooftop cocktail lounge with Hassan II Mosque views.",
      tip: "Head up to the top-floor rooftop bar before lunch for an ocean cocktail before sitting down for the seafood.",
      badge: "splurge",
      bestDishes: [
        "Sole Meuniere with Roasted Baby Potatoes",
        "Atlantic Lobster Gratine",
        "Citrus Tart Meringuee"
      ],
      pros: ["Direct shoreline location with ocean spray", "Rooftop terrace overlooking the mosque", "Valet service on arrival"],
      cons: ["Can get breezy on the terrace during high tide", "Higher-tier pricing"],
      googleRating: 4.3,
      googleReviewCount: 1530,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 525,
      theforkRating: 4.2,
      theforkReviewCount: 255,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1530,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Petit+Rocher+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522362626",
      bookingUrl: "http://lepetitrochercasa.com",
      whatsappNumber: "",
      website: "http://lepetitrochercasa.com",
      instagram: "https://instagram.com/lepetitrocher_casa"
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
    id: "e-casablanca-12",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "solo", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture", "budget"],
      vibeTags: ["homestyle", "habous-arches", "welcoming", "cozy"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 130,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["habous", "couscous", "rfissa", "homestyle", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Zayna Moroccan Taste",
      neighborhood: "Habous",
      description: "Heartwarming family-run eatery nestled beneath the stone arches of Habous, celebrating authentic home-style Rfissa, Friday couscous, and slow-braised tagines.",
      tip: "Pair your visit with an afternoon exploration of the Habous olive market and pastry shopping at Pâtisserie Bennis Habous.",
      badge: "local-favorite",
      bestDishes: [
        "Traditional Chicken Rfissa with Fenugreek",
        "Friday Royal Couscous with Seven Vegetables",
        "Zaalouk and Taktouka Salad Sampler"
      ],
      pros: ["Authentic home-cooked flavors", "Very fair and accessible pricing", "Charming Habous neighborhood location"],
      cons: ["Small dining room that fills up quickly at peak lunch hours", "Alcohol-free"],
      googleRating: 4.2,
      googleReviewCount: 1330,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 710,
      theforkRating: 4.3,
      theforkReviewCount: 200,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1330,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Zayna+Moroccan+Taste+Casablanca",
      reservationMethod: ["phone", "whatsapp", "walk-in"],
      reservationContact: "+212522452020",
      bookingUrl: "",
      whatsappNumber: "+212663877715",
      website: "not-available",
      instagram: "https://instagram.com/zaynamoroccantaste"
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
    id: "e-casablanca-13",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "hidden-gem"],
      foodStyles: ["International", "Vegetarian/Vegan"],
      cuisineTags: ["international"],
      archetypeAffinity: ["nomad", "culture"],
      vibeTags: ["fusion", "artsy", "creative"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 220,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      ramadanFriendly: "closed",
      closedDays: ["sunday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["fusion", "african-fusion", "gauthier", "dry"],
      isHiddenGem: true,
      isTemporarilyHidden: true,
      verificationStatus: "possibly-closed"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "NKOA",
      neighborhood: "Gauthier",
      description: "Pioneering Afro-Asian-Latin fusion bistro in Gauthier that blended cross-continental street cuisines in an art-filled setting.",
      tip: "NOTE: This restaurant has permanently ceased operations. Preserved in database records for historical and routing reference.",
      badge: "hidden-gem",
      bestDishes: [
        "Korean Gochujang Glazed Wings",
        "Senegalese Dibi Spiced Beef",
        "Peruvian Corvina Ceviche"
      ],
      pros: ["Trailblazing cross-continental flavors", "Creative presentation", "Vibrant dining room art"],
      cons: ["Permanently closed", "Small space when active"],
      googleRating: 4.5,
      googleReviewCount: 530,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 465,
      theforkRating: 4.6,
      theforkReviewCount: 180,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 530,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=NKOA+Casablanca",
      reservationMethod: ["phone"],
      reservationContact: "+212522255050",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/nkoarestaurant"
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
    id: "e-casablanca-14",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "large-groups"],
      mealTypes: ["dinner", "late-night"],
      experienceTypes: ["traditional", "fine-dining"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture", "luxury"],
      vibeTags: ["andalusian-palace", "oriental-show", "live-oud", "dinner-spectacle"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 550,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["dinner-show", "oriental-music", "pastilla", "ain-diab", "hotel-val-danfa"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Basmane",
      neighborhood: "Ain Diab",
      description: "Sumptuous Moroccan dinner salon inside Hôtel Val d'Anfa, featuring intricately carved cedarwood ceilings, live Andalusian musicians, and authentic imperial banquets.",
      tip: "Book for 20:30 to enjoy your pastilla and tagine right as the acoustic oud and traditional violin performance begins.",
      badge: "splurge",
      bestDishes: [
        "Crispy Seafood Pastilla with Calamari and Shrimp",
        "Slow-Braised Lamb Tagine with Prunes and Roasted Almonds",
        "Mechoui-Style Braised Shoulder of Lamb"
      ],
      pros: ["Authentic live Andalusian music performance", "Exquisite sculpted Arabo-Andalusian woodwork", "Free hotel valet parking"],
      cons: ["Evening dinner only", "Can feel formal and traditional for casual dining"],
      googleRating: 4.2,
      googleReviewCount: 1080,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 510,
      theforkRating: 4.2,
      theforkReviewCount: 200,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1080,
      openTime: "19:30",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Basmane+Hotel+Val+d+Anfa+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522797070",
      bookingUrl: "https://hotel-val-danfa.com/le-basmane",
      whatsappNumber: "",
      website: "https://hotel-val-danfa.com/le-basmane",
      instagram: "https://instagram.com/lebasmane_casa"
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
    id: "e-casablanca-15",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["business-friendly", "couple", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["French-Moroccan", "Grill & BBQ", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["parisian-brasserie", "business-lunch", "aged-beef", "timeless"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 550,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: ["sunday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["parisian-bistro", "prime-steaks", "wine-cellar", "business-lunch"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Bavaroise",
      neighborhood: "Centre-Ville",
      description: "Historic 1968 Parisian brasserie and steakhouse institution in downtown Casablanca, revered for prime dry-aged steaks, fresh oysters, and elite business lunches.",
      tip: "Ask the head server for the day's dry-aged beef cuts display and pair it with their classic homemade gratin dauphinois.",
      badge: "splurge",
      bestDishes: [
        "Aged Charolais Ribeye with Homemade Béarnaise",
        "Classic Hand-Cut Beef Tartare",
        "Pan-Seared Atlantic Dover Sole Meuniere"
      ],
      pros: ["Premier steakhouse in downtown Casablanca", "Impeccable old-school French brasserie service", "Outstanding wine cellar selection"],
      cons: ["Closed on Sundays", "Meat-centric with very limited vegetarian options"],
      googleRating: 4.4,
      googleReviewCount: 840,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 715,
      theforkRating: 4.5,
      theforkReviewCount: 350,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 840,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Bavaroise+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522311760",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/labavaroise_casa"
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
    id: "e-casablanca-16",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["lush-courtyard", "fountain", "fassi-heritage", "historic-villa"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 380,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: ["sunday"],
      seatingTypes: ["indoor", "outdoor", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["patio-garden", "fassi-pastilla", "downtown", "heritage-moroccan"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Al Mounia",
      neighborhood: "Centre-Ville",
      description: "Iconic downtown garden restaurant housed in an authentic Fassi-style villa, celebrated for authentic pastillas, tagines, and an enchanting tree-shaded courtyard.",
      tip: "Request an outdoor courtyard table under the ancient rubber tree beside the fountain for a serene, romantic garden meal.",
      badge: "local-favorite",
      bestDishes: [
        "Crisp Fassi Pigeon Pastilla with Cinnamon",
        "Friday Seven-Vegetable Couscous",
        "Slow-Cooked Beef Shank Tagine with Artichokes"
      ],
      pros: ["Enchanting leafy outdoor garden hidden in the city center", "Time-tested authentic Moroccan recipes", "Full alcohol and Moroccan wine menu"],
      cons: ["Service can slow down during busy peak hours", "Closed on Sundays"],
      googleRating: 4.1,
      googleReviewCount: 1620,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 1120,
      theforkRating: 4.1,
      theforkReviewCount: 350,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 1620,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Al+Mounia+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522222669",
      bookingUrl: "",
      whatsappNumber: "",
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
    id: "e-casablanca-17",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["Seafood", "French-Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["coastal-fine-dining", "ocean-terrace", "michelin-standard", "historic"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 850,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
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
      closedDays: ["monday"],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["french-gastronomy", "lobster", "coastal-dining", "maitre-cuisinier"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "A Ma Bretagne",
      neighborhood: "Ain Diab",
      description: "Illustrious seafront gastronomic benchmark helmed by Maître Cuisinier de France André Halbert, renowned since 1957 for grand French seafood along the rocky coast.",
      tip: "Come for a long, relaxed lunch around 13:00 to watch waves crash directly below your table on the sunlit terrace.",
      badge: "splurge",
      bestDishes: [
        "Atlantic Blue Lobster Thermidor",
        "Oysters in Warm Champagne Sabayon",
        "Oven-Roasted Turbot with Beurre Blanc"
      ],
      pros: ["Unmatched fine-dining French culinary technique", "Front-row Atlantic Ocean panorama", "Extensive international grand cru wine cellar"],
      cons: ["High price tier", "Closed Mondays"],
      googleRating: 4.4,
      googleReviewCount: 390,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 335,
      theforkRating: 4.3,
      theforkReviewCount: 150,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 390,
      openTime: "12:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=A+Ma+Bretagne+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522362112",
      bookingUrl: "https://amabretagne.com",
      whatsappNumber: "",
      website: "https://amabretagne.com",
      instagram: "https://instagram.com/amabretagne_casa"
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
    id: "e-casablanca-18",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "hidden-gem"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["intimate", "family-run", "cozy", "comfort-food"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 220,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["authentic-tagine", "home-cooking", "gauthier", "dry-restaurant"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Cuistot Traditionnel",
      neighborhood: "Gauthier",
      description: "Warm, family-run Moroccan gem in Gauthier where Chef Aziz personally welcomes guests to savor slow-braised clay pot tagines and artisanal pastillas.",
      tip: "The caramelized fig and walnut lamb tagine is an extraordinary seasonal specialty—ask if it's cooking on the day of your visit.",
      badge: "hidden-gem",
      bestDishes: [
        "Slow-Cooked Lamb Tagine with Caramelized Figs and Walnuts",
        "Traditional Veau aux Pruneaux",
        "Crispy Seafood Pastilla"
      ],
      pros: ["Chef Aziz's personal and welcoming hospitality", "Deeply authentic home-style clay pot cooking", "Cozy, warm zellige decor"],
      cons: ["Compact dining room fills up fast", "No alcohol served"],
      googleRating: 4.4,
      googleReviewCount: 2120,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 650,
      theforkRating: 4.4,
      theforkReviewCount: 150,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 2120,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Cuistot+Traditionnel+Casablanca",
      reservationMethod: ["phone", "whatsapp", "website"],
      reservationContact: "+212522273911",
      bookingUrl: "https://lecuistot-traditionnel.com",
      whatsappNumber: "+212661624306",
      website: "https://lecuistot-traditionnel.com",
      instagram: "https://instagram.com/lecuistottraditionnel"
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
    id: "e-casablanca-19",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["business-friendly", "couple", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["French-Moroccan", "International", "Seafood"],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["hotel-brasserie", "business-hub", "refined", "wine-lounge"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 650,
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
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["hyatt-regency", "parisian-brasserie", "business-dinner", "hotel-dining"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Café M",
      neighborhood: "Centre-Ville",
      description: "Sophisticated contemporary French brasserie inside the Hyatt Regency overlooking Place des Nations Unies, renowned for curated wine pairings and refined continental fare.",
      tip: "Ideal for discreet corporate lunches or private dinners; book one of the high-backed banquettes in the rear dining area.",
      badge: "splurge",
      bestDishes: [
        "Pan-Seared Duck Breast with Cherry Glaze",
        "Char-Grilled Tournedos with Truffled Jus",
        "Madagascar Bourbon Vanilla Crème Brûlée"
      ],
      pros: ["Quiet, soundproofed room ideal for meetings", "Prime central Hyatt Regency location", "Sommelier-guided international wine list"],
      cons: ["Hotel brasserie atmosphere can feel formal", "Premium luxury hotel pricing"],
      googleRating: 4.3,
      googleReviewCount: 230,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 180,
      theforkRating: 4.3,
      theforkReviewCount: 90,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 230,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+M+Hyatt+Regency+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522431234",
      bookingUrl: "https://www.hyatt.com/en-US/hotel/morocco/hyatt-regency-casablanca/casar/dining/cafe-m",
      whatsappNumber: "",
      website: "https://www.hyatt.com/en-US/hotel/morocco/hyatt-regency-casablanca/casar/dining/cafe-m",
      instagram: "https://instagram.com/hyattregencycasablanca"
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
    id: "e-casablanca-20",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "hidden-gem", "casual"],
      foodStyles: ["Vegetarian/Vegan", "Cafe & Pastry"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["nomad", "culture", "budget"],
      vibeTags: ["plant-based", "botanical", "used-book-cafe", "calm"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 130,
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
      ramadanFriendly: "special-ftour",
      closedDays: ["sunday"],
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["vegan", "plant-based", "specialty-coffee", "gluten-free", "gauthier"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Niya",
      neighborhood: "Gauthier",
      description: "Casablanca's leading 100% plant-based sanctuary and book café in Gauthier, crafting seasonal organic Moroccan dishes, vegan cheeses, and gluten-free pastries.",
      tip: "Try their Friday plant-based Couscous Vert or order their cold-pressed juice infusions made with fresh Moroccan herbs.",
      badge: "hidden-gem",
      bestDishes: [
        "Sprouted Lentil Falafel with Herbed Tahini",
        "Seasonal Quinoa and Charmoula Tofu Bowl",
        "Raw Chocolate and Almond Ganache Cake"
      ],
      pros: ["100% organic and vegan menu", "Peaceful book-filled atmosphere", "Free filtered mineral water carafe for every guest"],
      cons: ["Closed on Sundays", "No alcohol served"],
      googleRating: 4.7,
      googleReviewCount: 220,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 85,
      theforkRating: 4.6,
      theforkReviewCount: 50,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 220,
      openTime: "10:00",
      closeTime: "21:00",
      googleMapsUrl: "https://maps.google.com/?q=Niya+Casablanca+Gauthier",
      reservationMethod: ["phone", "whatsapp", "walk-in"],
      reservationContact: "+212611189390",
      bookingUrl: "https://niya-casablanca.com",
      whatsappNumber: "+212611189390",
      website: "https://niya-casablanca.com",
      instagram: "https://instagram.com/niya_casablanca"
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
    id: "eat-casablanca-mcdonalds-ain-diab",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo", "large-groups"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Grill & BBQ", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["beachfront", "fast-food", "ocean-terrace", "late-night"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 65,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["fast-food", "oceanfront", "late-night", "mccafe", "drive-thru"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "McDonald's Ain Diab",
      neighborhood: "Ain Diab",
      description: "Flagship beachfront McDonald's along the Ain Diab Corniche with an ocean-view terrace, McCafé, McDrive, play area, and late-night service.",
      tip: "Head up to the upper outdoor terrace to enjoy your coffee or burger with fresh sea air looking out over the Atlantic breakers.",
      badge: "local-favorite",
      bestDishes: [
        "Big Mac Combo Meal",
        "McSpicy Chicken Burger",
        "McCafé Salted Caramel Frappé"
      ],
      pros: ["Oceanfront seating with panoramic beach views", "Open extremely late with drive-thru", "Children's playground and McCafé"],
      cons: ["Massive crowds and long queues on sunny weekends", "Standard chain fast-food menu"],
      googleRating: 4.1,
      googleReviewCount: 8950,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 220,
      theforkRating: 3.5,
      theforkReviewCount: 30,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 8950,
      openTime: "07:00",
      closeTime: "03:00",
      googleMapsUrl: "https://maps.google.com/?q=McDonald%27s+Ain+Diab+Casablanca",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://mcdonalds.ma",
      instagram: "https://instagram.com/mcdonalds_maroc",
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
    id: "eat-casablanca-kfc-maarif",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Grill & BBQ", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["quick-bite", "fried-chicken", "bustling-avenue"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 65,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["fast-food", "fried-chicken", "maarif", "late-night", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "KFC Maarif",
      neighborhood: "Maârif",
      description: "Centrally located KFC on Boulevard Al Massira Al Khadra serving original recipe chicken buckets, spicy Zinger burgers, and family combo boxes.",
      tip: "Use the self-service digital kiosks at the entrance during peak shopping hours to skip the front counter lines.",
      badge: "local-favorite",
      bestDishes: [
        "Spicy Zinger Burger Combo",
        "Original Recipe 12-Piece Chicken Bucket",
        "Crispy Chicken Tenders with BBQ Sauce"
      ],
      pros: ["Quick counter service in the heart of Maarif shopping district", "Certified halal chicken", "Reliable delivery via Glovo and web"],
      cons: ["Limited seating during lunch rush", "Parking in Maarif is notoriously tricky"],
      googleRating: 3.9,
      googleReviewCount: 3120,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 75,
      theforkRating: 3.5,
      theforkReviewCount: 20,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 3120,
      openTime: "11:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=KFC+Al+Massira+Maarif+Casablanca",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://kfc.ma",
      instagram: "https://instagram.com/kfc_maroc"
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
    id: "eat-casablanca-burger-king-maarif",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Grill & BBQ", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["flame-grilled", "quick-bite", "shopping-break"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 65,
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["burgers", "whopper", "maarif", "flame-grilled", "late-night"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Burger King Maarif",
      neighborhood: "Maârif",
      description: "Flame-grilled Whopper hub on Boulevard Al Massira Al Khadra featuring two floors of modern air-conditioned dining and touch-screen ordering.",
      tip: "Head to the upstairs seating area which is significantly quieter and has power outlets for charging your phone.",
      badge: "local-favorite",
      bestDishes: [
        "Double Whopper with Cheese Meal",
        "Steakhouse Burger with Crispy Onions",
        "King Fries with Melted Cheddar"
      ],
      pros: ["Flame-grilled beef patties", "Touch-screen ordering kiosks", "Spacious two-level seating"],
      cons: ["Can get loud on weekend afternoons", "No dedicated parking lot"],
      googleRating: 4.0,
      googleReviewCount: 2870,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 60,
      theforkRating: 3.5,
      theforkReviewCount: 15,
      restaurantguruRating: 4.0,
      restaurantguruReviewCount: 2870,
      openTime: "11:00",
      closeTime: "01:30",
      googleMapsUrl: "https://maps.google.com/?q=Burger+King+Al+Massira+Maarif+Casablanca",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://burgerking.ma",
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
    id: "eat-casablanca-pizza-hut-maarif",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["pan-pizza", "comfort-food", "family-friendly"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 75,
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["pan-pizza", "cheesy-crust", "maarif", "delivery", "family-dining"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Pizza Hut Maarif",
      neighborhood: "Maârif",
      description: "Established pizza parlor in Maârif offering signature pan pizzas, Cheesy Crust specials, and appetizers for dine-in, takeaway, and delivery.",
      tip: "Check their weekday lunchtime promotions for bundled medium pizza and drink meal deals.",
      badge: "local-favorite",
      bestDishes: [
        "Super Supreme Pan Pizza with Cheesy Crust",
        "Barbecue Chicken Pizza",
        "Garlic Bread with Melted Mozzarella"
      ],
      pros: ["Consistent signature thick pan pizza crust", "Generous cheese-stuffed crust options", "Fast neighborhood delivery"],
      cons: ["Can take 20–25 minutes for freshly baked pan pizzas", "Interior decor is somewhat dated"],
      googleRating: 3.8,
      googleReviewCount: 2210,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 90,
      theforkRating: 3.5,
      theforkReviewCount: 25,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 2210,
      openTime: "11:30",
      closeTime: "00:30",
      googleMapsUrl: "https://maps.google.com/?q=Pizza+Hut+Maarif+Casablanca",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212522989898",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://pizzahut.ma",
      instagram: "https://instagram.com/pizzahut_maroc"
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
    id: "eat-casablanca-dominos-gauthier",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["quick-delivery", "carry-out", "late-night-pizza"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 65,
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["pizza-delivery", "carryout", "gauthier", "late-night", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Domino's Pizza Gauthier",
      neighborhood: "Gauthier",
      description: "High-turnover carry-out and delivery hub on Rue Jean Jaurès in Gauthier, serving freshly baked thin-crust and pan pizzas, cheesy bread, and chicken wings.",
      tip: "Order online through the Domino's Maroc app for carry-out specials which frequently offer buy-one-get-one-free promos.",
      badge: "local-favorite",
      bestDishes: [
        "Spicy Peppercorn Beef Pizza",
        "Stuffed Cheesy Bread with Jalapeños",
        "Buffalo Chicken Wings with Ranch"
      ],
      pros: ["Rapid 30-minute delivery dispatch across Gauthier/Maarif", "Great value on multi-pizza deals", "Consistently hot and prompt delivery"],
      cons: ["Very small dining area designed primarily for carry-out", "Street parking is tough on Rue Jean Jaurès"],
      googleRating: 3.9,
      googleReviewCount: 1670,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 45,
      theforkRating: 3.5,
      theforkReviewCount: 15,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 1670,
      openTime: "11:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Domino%27s+Pizza+Gauthier+Casablanca",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212522202020",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://dominos.ma",
      instagram: "https://instagram.com/dominos_maroc"
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
    id: "eat-casablanca-table-iii",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly"],
      mealTypes: ["dinner"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["Mediterranean", "Seafood", "International"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["michelin-standard", "gastronomic", "intimate", "tasting-menu"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 1400,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
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
      closedDays: ["sunday", "monday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "visa", "mastercard"],
      tags: ["michelin-chef", "degustation", "faycal-bettioui", "best-in-morocco", "fine-dining"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Table III",
      neighborhood: "Ain Diab",
      description: "Morocco's culinary masterpiece by Michelin-starred Chef Fayçal Bettioui, voted Best Restaurant in Morocco and ranked in MENA's 50 Best for its visionary seafood-driven tasting menus.",
      tip: "Reservations must be booked several weeks in advance; opt for the full multi-course carte blanche tasting menu with sommelier wine pairings.",
      badge: "splurge",
      bestDishes: [
        "Charcoal-Kissed Oualidia Langoustine",
        "Line-Caught Atlantic Turbot with Brown Butter Sabayon",
        "A5 Wagyu with Moroccan Truffle Reduction"
      ],
      pros: ["Culinary peak of Casablanca gastronomy", "Discreet and intimate confidential setting", "Chef Fayçal personally finishes dishes tableside"],
      cons: ["High price point", "Dinner only, closed Sundays and Mondays"],
      googleRating: 4.9,
      googleReviewCount: 270,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 110,
      theforkRating: 4.9,
      theforkReviewCount: 80,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 270,
      openTime: "19:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Table+III+Casablanca+Ain+Diab",
      reservationMethod: ["phone", "website", "whatsapp"],
      reservationContact: "+212522797380",
      bookingUrl: "https://table3casablanca.com",
      whatsappNumber: "+212660112233",
      website: "https://table3casablanca.com",
      instagram: "https://instagram.com/table3casablanca"
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
    id: "eat-casablanca-bleu-four-seasons",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "family", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["Seafood", "Mediterranean", "Grill & BBQ"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["palatial-hotel", "oceanfront", "shell-mural", "fire-pit"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 750,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["four-seasons", "ocean-terrace", "fine-seafood", "sunset-views", "luxury"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Bleu",
      neighborhood: "Ain Diab",
      description: "Signature oceanfront gastronomic pavilion at Four Seasons Hotel Casablanca, designed with nautical curved wood, an open charcoal grill, and an Atlantic-facing terrace.",
      tip: "Request an outdoor terrace table adjacent to the circular fire pit for sunset drinks followed by wood-fired Atlantic lobster.",
      badge: "splurge",
      bestDishes: [
        "Wood-Fired Atlantic Sea Bass with Local Citrus",
        "Chilled Dakhla Oysters with Chermoula Mignonette",
        "Charcoal-Grilled Prime Tomahawk"
      ],
      pros: ["Unobstructed panoramic Atlantic coastline vistas", "Five-star Four Seasons service standard", "Superb open-air terrace with fire pits"],
      cons: ["High price tier", "Reservations strongly recommended on weekends"],
      googleRating: 4.4,
      googleReviewCount: 420,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 280,
      theforkRating: 4.4,
      theforkReviewCount: 110,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 420,
      openTime: "06:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Bleu+Four+Seasons+Hotel+Casablanca",
      reservationMethod: ["phone", "website", "email"],
      reservationContact: "+212529073700",
      bookingUrl: "https://www.fourseasons.com/casablanca/dining/restaurants/bleu/",
      whatsappNumber: "",
      website: "https://www.fourseasons.com/casablanca/dining/restaurants/bleu/",
      instagram: "https://instagram.com/fscasablanca"
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
    id: "eat-casablanca-le-pilotis",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "fine-dining"],
      foodStyles: ["Seafood", "Mediterranean", "French-Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["over-water", "crashing-waves", "tahiti-beach", "seafood-platter"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 480,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["tahiti-beach-club", "seafood-on-rocks", "ocean-terrace", "corniche"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Pilotis",
      neighborhood: "Ain Diab",
      description: "Iconic oceanfront seafood institution within Tahiti Beach Club, built on pilings directly suspended over the crashing waves of the Atlantic.",
      tip: "Book an ocean-edge table during high tide for the unforgettable sensation of dining directly above the surging surf.",
      badge: "local-favorite",
      bestDishes: [
        "Royal Seafood Plateau with Oysters, Crab, and Gambas",
        "Wood-Fired Whole Sea Bream with Sea Salt",
        "Spanish-Style Seafood Paella for Two"
      ],
      pros: ["Unbeatable proximity to crashing Atlantic waves", "Fresh catches selected right off the crushed-ice display", "Lively social ambiance"],
      cons: ["Sea spray can hit terrace tables on windy days", "Valet queue on sunny Sundays"],
      googleRating: 4.1,
      googleReviewCount: 980,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 420,
      theforkRating: 4.0,
      theforkReviewCount: 160,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 980,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Pilotis+Tahiti+Beach+Club+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522798025",
      bookingUrl: "",
      whatsappNumber: "+212661334455",
      website: "https://tahitibeachcasa.ma",
      instagram: "https://instagram.com/lepilotisbytbc"
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
    id: "eat-casablanca-relais-de-paris-ain-diab",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["business-friendly", "couple", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["French-Moroccan", "Grill & BBQ"],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["parisian-brasserie", "secret-sauce", "villa-blanca", "classic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 450,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["entrecote", "french-brasserie", "villa-blanca", "corniche", "steaks"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Relais de Paris",
      neighborhood: "Ain Diab",
      description: "Prestigious Parisian brasserie inside Villa Blanca Urban Hotel, renowned for its legendary sliced entrecôte served over a burner with secret herb butter sauce and frites.",
      tip: "The signature formula comes with an unlimited second serving of warm crispy shoestring fries—don't hesitate to ask for more.",
      badge: "local-favorite",
      bestDishes: [
        "Sliced Charolais Entrecôte with Signature Secret Sauce",
        "Burgundy Escargots in Parsley Garlic Butter",
        "Warm Molten Chocolate Fondant"
      ],
      pros: ["Iconic signature sauce recipe unchanged for decades", "Refined Parisian brasserie decor", "Located in the fashionable Villa Blanca complex"],
      cons: ["Menu is very focused on beef with minimal seafood", "Can feel crowded at peak dinner hours"],
      googleRating: 4.2,
      googleReviewCount: 1450,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 650,
      theforkRating: 4.2,
      theforkReviewCount: 280,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1450,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Relais+de+Paris+Villa+Blanca+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522368796",
      bookingUrl: "https://www.villablanca.ma",
      whatsappNumber: "",
      website: "https://www.villablanca.ma",
      instagram: "https://instagram.com/relaisdepariscasablanca"
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
    id: "eat-casablanca-le-loubnane",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["family", "couple", "friends", "large-groups"],
      mealTypes: ["dinner", "late-night"],
      experienceTypes: ["traditional", "fine-dining"],
      foodStyles: ["Middle Eastern", "Mediterranean"],
      cuisineTags: ["international"],
      archetypeAffinity: ["culture", "luxury"],
      vibeTags: ["oriental-elegance", "mezze-spread", "villa-blanca", "live-music"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 420,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["lebanese", "mezze", "villa-blanca", "oriental", "corniche"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Loubnane",
      neighborhood: "Ain Diab",
      description: "Casablanca's premier upscale Lebanese dining room inside Villa Blanca, serving authentic cold and warm Levantine mezzes, grilled skewers, and occasional evening oriental music.",
      tip: "Order the Mezze Dégustation platter for two to sample their creamy labneh, fresh tabbouleh, and hot sambousek.",
      badge: "local-favorite",
      bestDishes: [
        "Assorted Cold and Hot Mezze Platter",
        "Char-Grilled Lamb Mashawi Skewers",
        "Mouhalabieh with Crushed Pistachios and Orange Blossom"
      ],
      pros: ["Authentic Beirut chef recipes", "Generous shareable portions", "Sophisticated Moorish-Levantine interior design"],
      cons: ["Evening dinner only", "Atmosphere gets loud on weekend nights"],
      googleRating: 4.3,
      googleReviewCount: 890,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 380,
      theforkRating: 4.2,
      theforkReviewCount: 140,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 890,
      openTime: "19:30",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Loubnane+Villa+Blanca+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522368796",
      bookingUrl: "https://www.villablanca.ma",
      whatsappNumber: "",
      website: "https://www.villablanca.ma",
      instagram: "https://instagram.com/villablancacasablanca"
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
    id: "eat-casablanca-cafe-bianca",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo", "family"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea", "dinner"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Italian", "Mediterranean", "Cafe & Pastry"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["ocean-terrace", "fashionable", "sunlit", "all-day-dining"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 220,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["brunch", "italian", "sea-view-terrace", "corniche", "villa-blanca"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Café Bianca",
      neighborhood: "Ain Diab",
      description: "Fashionable all-day ocean-facing Italian bistro and terrace lounge at Villa Blanca, famous for scenic breakfasts, artisanal pastas, and sunset aperitifs.",
      tip: "Come between 09:00 and 11:30 for one of the most delightful coastal morning coffees and Italian breakfast platters on the Corniche.",
      badge: "local-favorite",
      bestDishes: [
        "Rigatoni all'Amatriciana with Fresh Burrata",
        "Thin-Crust Truffle Carpaccio Pizza",
        "Bianca Homemade Tiramisu"
      ],
      pros: ["Prime sun-drenched terrace overlooking the sea", "Open continuously from 07:00 to 23:00", "Lively, cosmopolitan Casablanca crowd"],
      cons: ["Peak weekend service can occasionally be slow", "Terrace fills up rapidly by noon"],
      googleRating: 4.1,
      googleReviewCount: 2350,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 890,
      theforkRating: 4.1,
      theforkReviewCount: 340,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 2350,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Bianca+Villa+Blanca+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522392510",
      bookingUrl: "https://www.villablanca.ma",
      whatsappNumber: "",
      website: "https://www.villablanca.ma",
      instagram: "https://instagram.com/cafebiancacasablanca"
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
    id: "eat-casablanca-la-paillote",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Mediterranean", "Seafood", "International"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["adventure", "nomad"],
      vibeTags: ["beach-club", "poolside", "festive", "sunset-cocktails"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 350,
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
      seatingTypes: ["outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["beach-club", "pool-dining", "cocktails", "dj-sets", "corniche"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Paillote",
      neighborhood: "Ain Diab",
      description: "Bustling seaside beach-club restaurant inside Tahiti Beach Club, pairing fresh grilled catches, refreshing salads, and cocktails with outdoor saltwater pools.",
      tip: "Ideal for warm sunny afternoons; reserve a lunch sunbed by the adult pool to combine lunch with a swim.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled King Gambas with Garlic Butter",
        "Crispy Calamari Fritti with Tartar Dip",
        "Mediterranean Caesar Salad with Chicken"
      ],
      pros: ["Direct sandy beach and pool access", "Lively weekend DJ sets and beach vibes", "Open-air sea breeze setting"],
      cons: ["Seasonal daytime/evening venue", "Can get noisy when the weekend party kicks in"],
      googleRating: 4.1,
      googleReviewCount: 1250,
      tripadvisorRating: 3.9,
      tripadvisorReviewCount: 310,
      theforkRating: 3.9,
      theforkReviewCount: 95,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 1250,
      openTime: "11:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Paillote+Tahiti+Beach+Casablanca",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212522798364",
      bookingUrl: "",
      whatsappNumber: "+212682277536",
      website: "https://tahitibeachcasa.ma",
      instagram: "https://instagram.com/tahitibeachclub"
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
    id: "eat-casablanca-anatolia-steakhouse",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["family", "friends", "large-groups", "couple"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Grill & BBQ", "Middle Eastern"],
      cuisineTags: ["international"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["dry-aged-steaks", "turkish-grill", "tableside-show", "oceanfront"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 550,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["halal-steakhouse", "tomahawk", "anfa-place", "corniche", "dry-aged"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Anatolia Premium Steakhouse",
      neighborhood: "Ain Diab",
      description: "High-end Turkish steakhouse at Anfa Place Living Resort on the Corniche, famed for premium dry-aged beef, table-side carving shows, and an alcohol-free beachfront terrace.",
      tip: "Order the signature Gold or Butter-Basted Tomahawk steak for an impressive theatrical tableside fire show.",
      badge: "local-favorite",
      bestDishes: [
        "Dry-Aged Tomahawk Steak with Herb Butter",
        "Traditional Turkish Lamb Köfte with Spiced Rice",
        "Pistachio Baklava with Maras Ice Cream"
      ],
      pros: ["Strictly 100% certified halal and family-friendly alcohol-free atmosphere", "Spectacular theatrical meat presentation", "Direct seafront terrace overlooking the beach"],
      cons: ["Strictly dry (no wine or beer served)", "Steak-focused with few vegetarian dishes"],
      googleRating: 4.2,
      googleReviewCount: 880,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 190,
      theforkRating: 4.1,
      theforkReviewCount: 75,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 880,
      openTime: "12:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Anatolia+Premium+Steakhouse+Casablanca",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212522796000",
      bookingUrl: "",
      whatsappNumber: "+212661556677",
      website: "https://anatoliasteakhouse.ma",
      instagram: "https://instagram.com/anatoliapremiumsteakhouse"
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
    id: "eat-casablanca-homu-anfa-superieur",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["International", "Seafood", "Italian"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["minimalist-villa", "japanese-italian-fusion", "serene", "garden-terrace"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 550,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["asian-fusion", "sushi", "villa-dining", "anfa-superieur", "fine-dining"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Homu",
      neighborhood: "Anfa Supérieur",
      description: "Sophisticated Japanese-Italian fusion restaurant set inside an architect-designed private villa on Avenue de Nice in Anfa Supérieur, celebrating inventive sushi, Robata, and truffle infusions.",
      tip: "Request an outdoor table in the landscaped bamboo garden and try the signature Wagyu stir-fried rice crafted by executive chef Sofia.",
      badge: "hidden-gem",
      bestDishes: [
        "Wagyu Beef Stir-Fried Rice with Asian Vegetables",
        "Salmon Tataki with Spicy Daikon and Chives",
        "Seared Scallops in Citrus Yuzu Ponzu"
      ],
      pros: ["Quiet residential villa setting in Anfa Supérieur", "Creative Japanese-Italian fusion flavors", "Minimalist marble and wood interior by Amine Mekouar"],
      cons: ["High price point", "Advance reservation required for dinner"],
      googleRating: 4.6,
      googleReviewCount: 220,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 45,
      theforkRating: 4.5,
      theforkReviewCount: 30,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 220,
      openTime: "12:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Homu+Casablanca+Avenue+de+Nice",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212522943424",
      bookingUrl: "",
      whatsappNumber: "+212616981566",
      website: "not-available",
      instagram: "https://instagram.com/homu_casablancaofficial"
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
    id: "eat-casablanca-la-pergola-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["French-Moroccan", "Mediterranean", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["art-deco-glasshouse", "glamorous", "hotel-palace", "romantic"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 650,
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
      closedDays: ["sunday"],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["le-casablanca-hotel", "art-deco", "fine-dining", "moulay-rachid", "wine-list"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Pergola",
      neighborhood: "Anfa",
      description: "Art Deco lifestyle glasshouse dining salon at Le Casablanca Hôtel, serving refined French-Mediterranean cuisine along tree-lined Boulevard Moulay Rachid.",
      tip: "Book an evening table along the glass facade for a candlelit dinner accompanied by soft jazz piano.",
      badge: "splurge",
      bestDishes: [
        "Wild Sea Bass Tartare with Yuzu",
        "Braised Veal Sweetbreads with Foie Gras Reduction",
        "House-Smoked Atlantic Salmon with Herb Blinis"
      ],
      pros: ["Atmospheric Art Deco glasshouse architecture", "Attentive 5-star hotel service standard", "Curated international wine cellar"],
      cons: ["High price point", "Closed on Sundays"],
      googleRating: 4.5,
      googleReviewCount: 310,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 160,
      theforkRating: 4.5,
      theforkReviewCount: 85,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 310,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Pergola+Le+Casablanca+Hotel",
      reservationMethod: ["phone", "website", "email"],
      reservationContact: "+212522649797",
      bookingUrl: "https://www.lecasablanca-hotel.com",
      whatsappNumber: "",
      website: "https://www.lecasablanca-hotel.com",
      instagram: "https://instagram.com/lecasablancahotel"
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
    id: "eat-casablanca-la-terrasse-jasmin-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["family", "couple", "friends", "seniors"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Mediterranean", "Cafe & Pastry", "French-Moroccan"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["palatial-garden", "poolside-terrace", "high-tea", "sunday-brunch"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 420,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["outdoor", "terrace", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["hotel-terrace", "brunch", "afternoon-tea", "pool-view", "anfa"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Terrasse Jasmin",
      neighborhood: "Anfa",
      description: "Picturesque garden and pool terrace at Le Casablanca Hôtel, renowned among Anfa residents for its lavish Sunday brunch, afternoon tea, and light Mediterranean dishes.",
      tip: "Reserve their Sunday brunch buffet ahead of time; it features over 30 hot and cold artisanal Moroccan and French delicacies.",
      badge: "local-favorite",
      bestDishes: [
        "Royal Sunday Brunch Buffet Spread",
        "High Tea with Fresh French Macarons",
        "Grilled Atlantic Salmon with Lemon Herb Butter"
      ],
      pros: ["Peaceful landscaped garden and pool setting", "Quiet respite from Casablanca traffic", "Complimentary valet parking at the hotel gate"],
      cons: ["Sunday brunch reservations book out quickly", "Outdoor seating is weather-dependent"],
      googleRating: 4.4,
      googleReviewCount: 280,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 130,
      theforkRating: 4.3,
      theforkReviewCount: 65,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 280,
      openTime: "07:30",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Terrasse+Jasmin+Le+Casablanca+Hotel",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522649797",
      bookingUrl: "https://www.lecasablanca-hotel.com",
      whatsappNumber: "",
      website: "https://www.lecasablanca-hotel.com",
      instagram: "https://instagram.com/lecasablancahotel"
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
    id: "eat-casablanca-gapi-villa-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple", "solo"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Mediterranean", "French-Moroccan"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["botanical-villa", "artisan-pastry", "garden-brunch", "chic-tea-room"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 220,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["patisserie", "villa-garden", "brunch", "moulay-rachid", "dry-restaurant"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Gapi Villa",
      neighborhood: "Anfa",
      description: "Celebrated tearoom, pastry laboratory, and garden restaurant set inside an elegant Anfa villa on Boulevard Moulay Rachid, famous for high-end pastries and brunch.",
      tip: "Try the poached Eggs Benedict on toasted brioche followed by Chef Anouar's signature choux pastry bar.",
      badge: "local-favorite",
      bestDishes: [
        "Brioche Eggs Benedict with Smoked Salmon",
        "Bar à Choux Gourmand",
        "Avocado and Burrata Garden Tartine"
      ],
      pros: ["Lush landscaped garden terrace nestled in an authentic villa", "Exceptional handcrafted French pastries", "Warm, family-friendly atmosphere"],
      cons: ["Fills up quickly on Saturday and Sunday mornings", "Alcohol-free venue"],
      googleRating: 4.1,
      googleReviewCount: 560,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 40,
      theforkRating: 3.8,
      theforkReviewCount: 25,
      restaurantguruRating: 4.0,
      restaurantguruReviewCount: 560,
      openTime: "07:30",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Gapi+Villa+Boulevard+Moulay+Rachid+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522941096",
      bookingUrl: "",
      whatsappNumber: "",
      website: "http://www.gapivilla.com",
      instagram: "https://instagram.com/gapivilla"
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
    id: "eat-casablanca-le-marly-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "business-friendly", "solo", "couple"],
      mealTypes: ["breakfast", "lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["French-Moroccan", "Mediterranean", "Cafe & Pastry"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["parisian-brasserie", "contemporary-chic", "all-day-dining", "bustling"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 240,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["bistronomy", "parisian-cafe", "breakfast", "moulay-rachid", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Marly",
      neighborhood: "Anfa",
      description: "Fashionable Parisian-style brasserie and café on Boulevard Moulay Rachid, featuring sleek contemporary interiors and dependable seasonal French bistronomy.",
      tip: "An ideal walk-in spot for a fast business lunch or an afternoon espresso with fresh French millefeuille on the covered terrace.",
      badge: "local-favorite",
      bestDishes: [
        "Char-Grilled Entrecôte with Homemade French Fries",
        "Pan-Seared Salmon with Sautéed Greens",
        "Crispy Traditional French Millefeuille"
      ],
      pros: ["Consistent all-day dining from breakfast to dinner", "Modern, comfortable street-side terrace", "Attentive and dynamic service team"],
      cons: ["Alcohol-free", "Street parking on Boulevard Moulay Rachid can be crowded"],
      googleRating: 4.2,
      googleReviewCount: 2260,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 210,
      theforkRating: 4.1,
      theforkReviewCount: 110,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 2260,
      openTime: "07:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Marly+Boulevard+Moulay+Rachid+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522946676",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/lemarlycasa"
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
    id: "eat-casablanca-roosevelt-cafe-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "couple"],
      mealTypes: ["breakfast", "lunch", "snack", "afternoon-tea", "dinner"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Mediterranean", "International"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["budget", "nomad"],
      vibeTags: ["neighborhood-cafe", "sunlit-terrace", "specialty-coffee", "relaxed"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 120,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["cafe-terrace", "breakfast", "pastries", "roosevelt-boulevard", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Roosevelt Café",
      neighborhood: "Anfa",
      description: "Casual cosmopolitan café and bistro on Boulevard Franklin Roosevelt, drawing local residents for specialty espresso, morning breakfasts, and savory crepes.",
      tip: "Grab an outdoor terrace seat in the morning for Moroccan mint tea and their popular savory tuna and cheese crepe.",
      badge: "local",
      bestDishes: [
        "Savory Tuna and Emmental Crepe",
        "Classic Club Sandwich with Golden Fries",
        "Freshly Squeezed Citrus and Ginger Juice"
      ],
      pros: ["Pleasant sidewalk terrace shaded by trees", "Reliable Wi-Fi for working or reading", "Extremely affordable by Anfa neighborhood standards"],
      cons: ["Simple café menu rather than fine dining", "Gets lively and crowded in late afternoons"],
      googleRating: 4.2,
      googleReviewCount: 530,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 30,
      theforkRating: 3.8,
      theforkReviewCount: 15,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1270,
      openTime: "07:00",
      closeTime: "00:30",
      googleMapsUrl: "https://maps.google.com/?q=Roosevelt+Cafe+Boulevard+Franklin+Roosevelt+Casablanca",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
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
    id: "eat-casablanca-koya-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["friends", "couple", "large-groups"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["International", "Seafood", "Grill & BBQ"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["asian-latin-fusion", "live-shows", "garden-party", "festive-lounge"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 580,
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
      seatingTypes: ["indoor", "outdoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["asian-fusion", "cocktail-lounge", "dj-sets", "driss-slaoui", "festive"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Kôya Restaurant Lounge",
      neighborhood: "Anfa",
      description: "High-energy Asian-Latin fusion dining destination and cocktail lounge on Boulevard Driss Slaoui in upper Anfa, showcasing Robata skewers, sushi art, and evening live entertainment.",
      tip: "Drop in for their late-afternoon Garden Party between 16:00 and 20:00 for signature cocktails and Asian tapas before the evening shows.",
      badge: "local-favorite",
      bestDishes: [
        "Black Cod with Saikyo Miso Glaze",
        "Red Tuna Tataki with Shaved Black Truffle",
        "Char-Grilled Robata Beef Skewers with Sweet Teriyaki"
      ],
      pros: ["Festive evening vibe with live artistic and musical performances", "Creative Asian-Latin fusion menu", "Spacious indoor dining room and lush garden lounge"],
      cons: ["Music volume turns up considerably after 22:00", "Dinner reservations are essential on weekends"],
      googleRating: 4.3,
      googleReviewCount: 1340,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 150,
      theforkRating: 4.1,
      theforkReviewCount: 80,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1340,
      openTime: "12:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Koya+Casablanca+Boulevard+Driss+Slaoui",
      reservationMethod: ["phone", "whatsapp", "website"],
      reservationContact: "+212662327178",
      bookingUrl: "https://koyacasablanca.com",
      whatsappNumber: "+212662327178",
      website: "https://koyacasablanca.com",
      instagram: "https://instagram.com/koyacasaofficial"
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
    id: "eat-casablanca-clubhouse-royal-golf-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["business-friendly", "seniors", "family", "couple"],
      mealTypes: ["breakfast", "lunch", "afternoon-tea"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["French-Moroccan", "Seafood", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["culture", "luxury"],
      vibeTags: ["golf-course-views", "historic-club", "verdant", "colonial-patio"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 350,
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
      closedDays: ["monday"],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["royal-golf-anfa", "clubhouse", "hippodrome", "golf-view", "peaceful"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Club-House du Royal Golf d'Anfa",
      neighborhood: "Anfa",
      description: "Historic 1942 clubhouse restaurant overlooking the fairways of the Royal Golf and Hippodrome d'Anfa, serving classic French brasserie fare and Moroccan dishes in a green setting.",
      tip: "Book an outdoor terrace table on Friday around noon to combine lunch with a view of thoroughbreds training on the neighboring track.",
      badge: "hidden-gem",
      bestDishes: [
        "Friday Couscous aux Sept Légumes",
        "Pan-Fried Atlantic Sole Meuniere with Steamed Potatoes",
        "Char-Grilled Ribeye with Herb Butter"
      ],
      pros: ["Green open-space views in the heart of Anfa", "Peaceful terrace facing the 9-hole golf course", "Historic sporting club ambiance dating back to 1942"],
      cons: ["Closes earlier in the evening (no dinner service)", "Closed on Mondays"],
      googleRating: 4.2,
      googleReviewCount: 410,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 95,
      theforkRating: 4.0,
      theforkReviewCount: 35,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 410,
      openTime: "08:00",
      closeTime: "19:00",
      googleMapsUrl: "https://maps.google.com/?q=Royal+Golf+d+Anfa+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522361026",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://www.rgam.ma",
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

  // ── 1. SOUR JDID (HASSAN II MOSQUE) ──
  {
    id: "eat-casablanca-le-gatsby-sour-jdid",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple", "solo"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Moroccan", "International", "Seafood"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["first-timer", "culture", "budget"],
      vibeTags: ["hassan-ii-mosque-view", "oceanfront", "front-row-terrace", "scenic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 160,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["hassan-ii-view", "sour-jdid", "ocean-terrace", "breakfast", "tagine"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Gatsby",
      neighborhood: "Sour Jdid",
      description: "Chic oceanfront bistro and café located directly across from the great Hassan II Mosque, offering an unparalleled panoramic view of the minaret and crashing waves.",
      tip: "Visit around 17:30 to sip Moroccan mint tea on the upper terrace while the sun sets behind the towering Hassan II Mosque.",
      badge: "local-favorite",
      bestDishes: [
        "Traditional Moroccan Tagine of Sea Bream",
        "Le Gatsby Breakfast Platter with Fresh Msemmen",
        "Gambas Pil-Pil with Garlic and Olive Oil"
      ],
      pros: ["Best unobstructed front-row view of Hassan II Mosque", "Family-friendly alcohol-free atmosphere", "Open all day from 08:00 to midnight"],
      cons: ["Terrace tables face high demand on weekend afternoons", "Tip pressure from busy terrace staff during peak hours"],
      googleRating: 4.1,
      googleReviewCount: 1680,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 190,
      theforkRating: 4.0,
      theforkReviewCount: 65,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 1680,
      openTime: "08:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Gatsby+Sour+Jdid+Casablanca",
      reservationMethod: ["phone", "whatsapp", "walk-in"],
      reservationContact: "+212700110110",
      bookingUrl: "",
      whatsappNumber: "+212661338743",
      website: "not-available",
      instagram: "https://instagram.com/legatsbycasablanca"
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

  // ── 2. ANCIENNE MÉDINA ──
  {
    id: "eat-casablanca-dar-el-kaid-medina",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "fine-dining"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer", "luxury"],
      vibeTags: ["historic-riad", "oriental-show", "thousand-and-one-nights", "zellige"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 420,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard", "rooftop"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["riad-dining", "oriental-show", "ancient-medina", "pastilla", "dry-restaurant"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Dar El Kaid",
      neighborhood: "Ancienne Médina",
      description: "Magnificent historic riad tucked deep within the alleys of the Ancienne Médina, presenting ceremonial Moroccan banquets, live Gnaoua rhythms, and oriental dance shows.",
      tip: "Book for their 20:00 dinner service to experience the full '1001 Nights' acoustic performance while dining in the carved zellige courtyard.",
      badge: "hidden-gem",
      bestDishes: [
        "Royal Seafood and Almond Pastilla",
        "Slow-Braised Lamb Shank Tagine with Caramelized Figs",
        "Medina Moroccan Salad Tasting (Zaalouk, Taktouka, Carrots)"
      ],
      pros: ["Stunning authentic riad architecture with rooftop terrace", "Live traditional Gnaoua and oriental musical performances", "Very welcoming family hospitality"],
      cons: ["Located inside narrow pedestrian medina alleyways", "No alcohol served"],
      googleRating: 4.6,
      googleReviewCount: 920,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 340,
      theforkRating: 4.6,
      theforkReviewCount: 110,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 920,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Dar+El+Kaid+Casablanca",
      reservationMethod: ["phone", "whatsapp", "website"],
      reservationContact: "+212522202384",
      bookingUrl: "https://www.darelkaid.ma",
      whatsappNumber: "+212662376930",
      website: "https://www.darelkaid.ma",
      instagram: "https://instagram.com/darelkaidcasablanca"
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

  // ── 3. CENTRE-VILLE (1 of 2) ──
  {
    id: "eat-casablanca-le-rouget-de-lisle",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["French-Moroccan", "Mediterranean", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["1930s-villa", "romantic-garden", "gastronomic", "lush-patio"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 580,
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
      seatingTypes: ["indoor", "outdoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["colonial-villa", "french-gastronomy", "garden-terrace", "fine-dining", "romantic"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Rouget de l'Isle",
      neighborhood: "Centre-Ville",
      description: "Enchanting 1930s French villa (Villa Elise) tucked away behind ancient palm trees, famed for romantic garden dining, classical French technique, and fine wines.",
      tip: "Request an outdoor garden table under the jacaranda trees for a peaceful, secluded lunch sheltered from city noise.",
      badge: "hidden-gem",
      bestDishes: [
        "Pan-Seared Red Mullet (Rouget) with Saffron Emulsion",
        "Duck Confit with Sarladaise Potatoes",
        "Crispy Sea Bass Filet with Mediterranean Vegetables"
      ],
      pros: ["Peaceful botanical garden retreat in the city center", "Exceptional classical French culinary standards", "Private parking and intimate atmosphere"],
      cons: ["High price point", "Closed on Sundays"],
      googleRating: 4.4,
      googleReviewCount: 780,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 390,
      theforkRating: 4.4,
      theforkReviewCount: 160,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 780,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Rouget+de+l%27Isle+Casablanca",
      reservationMethod: ["phone", "email"],
      reservationContact: "+212522294740",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/lerougetdelisle"
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

  // ── 4. CENTRE-VILLE (2 of 2) ──
  {
    id: "eat-casablanca-brasserie-la-tour",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["business-friendly", "couple", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["French-Moroccan", "International", "Seafood"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["hotel-palace", "sofitel", "business-hub", "refined"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 650,
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
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["sofitel", "business-lunch", "fine-dining", "sidi-belyout", "wine-list"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Brasserie La Tour",
      neighborhood: "Centre-Ville",
      description: "Sophisticated French brasserie inside the 5-star Sofitel Casablanca Tour Blanche, celebrating gourmet rotisserie specialties and business lunches beside Place Sidi Belyout.",
      tip: "Their three-course executive business lunch formula is fast, dependable, and comes with valet parking right at the hotel entrance.",
      badge: "splurge",
      bestDishes: [
        "Spit-Roasted Free-Range Chicken with Truffle Butter",
        "Char-Grilled Tournedos Rossini",
        "Delicate Grand Marnier Soufflé"
      ],
      pros: ["Impeccable Sofitel five-star service", "Quiet, sound-insulated dining room perfect for corporate discussions", "Central location near Casa-Port railway station"],
      cons: ["Formal hotel ambiance", "Higher pricing on imported wines"],
      googleRating: 4.3,
      googleReviewCount: 360,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 180,
      theforkRating: 4.2,
      theforkReviewCount: 95,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 360,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Sofitel+Casablanca+Tour+Blanche",
      reservationMethod: ["phone", "website", "email"],
      reservationContact: "+212522456200",
      bookingUrl: "https://all.accor.com/hotel/7070/index.fr.shtml",
      whatsappNumber: "",
      website: "https://all.accor.com/hotel/7070/index.fr.shtml",
      instagram: "https://instagram.com/sofitelcasablanca"
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

  // ── 5. GAUTHIER (1 of 3) ──
  {
    id: "eat-casablanca-bondi-coffee-kitchen",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Vegetarian/Vegan", "International"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["nomad", "culture", "budget"],
      vibeTags: ["aussie-cafe", "specialty-coffee", "co-working", "healthy-brunch"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 130,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["specialty-coffee", "brunch", "avocado-toast", "gauthier", "flat-white"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Bondi Coffee Kitchen",
      neighborhood: "Gauthier",
      description: "Casablanca's original Australian specialty coffee shop and brunch kitchen on Rue Sebou, crafting flat whites, artisanal sourdough toast, and nutrient-dense power bowls.",
      tip: "Pair a double-shot flat white with their Ricotta Hotcakes served with seasonal figs and pure maple syrup.",
      badge: "local-favorite",
      bestDishes: [
        "Aussie Smashed Avocado with Poached Eggs and Feta",
        "Ricotta Hotcakes with Banana and Honey",
        "Specialty Single-Origin Flat White"
      ],
      pros: ["Top-tier third-wave specialty espresso roast", "Plenty of vegetarian and plant-based breakfast bowls", "Bustling creative digital nomad hub with English-fluent staff"],
      cons: ["No table reservations (walk-in only)", "Fills up quickly on weekend mornings"],
      googleRating: 4.5,
      googleReviewCount: 1420,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 220,
      theforkRating: 4.4,
      theforkReviewCount: 70,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1420,
      openTime: "09:00",
      closeTime: "21:00",
      googleMapsUrl: "https://maps.google.com/?q=Bondi+Coffee+Kitchen+Casablanca",
      reservationMethod: ["walk-in"],
      reservationContact: "+212522480484",
      bookingUrl: "",
      whatsappNumber: "+212651687707",
      website: "https://bondicoffeekitchen.com",
      instagram: "https://instagram.com/bondicoffeekitchen"
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

  // ── 6. GAUTHIER (2 of 3) ──
  {
    id: "eat-casablanca-blend-gourmet-burger",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Grill & BBQ", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["gourmet-burgers", "industrial-chic", "comfort-food", "trendy"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 140,
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
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["craft-burgers", "brioche-bun", "gauthier", "truffle-fries", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Blend Gourmet Burger",
      neighborhood: "Gauthier",
      description: "Casablanca's craft burger pioneer on Rue Théophile Gautier, praised for in-house butchered aged patties, brioche buns, and house-made truffle sauces.",
      tip: "Try the 'Magic Truffle' burger with crispy sweet potato fries and their homemade salted caramel milkshake.",
      badge: "local-favorite",
      bestDishes: [
        "The Magic Truffle Burger with Aged Gouda",
        "Crispy Buttermilk Chicken Brioche Burger",
        "Parmesan and Truffle Hand-Cut Fries"
      ],
      pros: ["Consistently the highest-rated craft burger in Casablanca", "Homemade brioche buns baked daily", "Generous gourmet portions"],
      cons: ["Can get loud during peak evening hours", "Street parking in Gauthier can take time"],
      googleRating: 4.4,
      googleReviewCount: 2850,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 460,
      theforkRating: 4.3,
      theforkReviewCount: 150,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 2850,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Blend+Gourmet+Burger+Gauthier+Casablanca",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212522491313",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/blendgourmetburger"
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

  // ── 7. GAUTHIER (3 of 3) ──
  {
    id: "eat-casablanca-clay-oven-gauthier",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Middle Eastern", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["culture", "nomad"],
      vibeTags: ["tandoori", "curry", "exotic-spices", "warm-hospitality"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 220,
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["indian", "tandoori", "butter-chicken", "gauthier", "curry"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Clay Oven",
      neighborhood: "Gauthier",
      description: "Authentic North Indian culinary institution on Rue Taha Hussein in Gauthier, celebrated for clay-oven tandoori grills, rich butter chicken, and freshly baked garlic naans.",
      tip: "Pair the slow-simmered Lamb Rogan Josh with warm butter-brushed garlic naan directly from the tandoor.",
      badge: "hidden-gem",
      bestDishes: [
        "Creamy Murgh Makhani (Butter Chicken)",
        "Tandoori Mixed Grill Sizzler",
        "Garlic and Cheese Naan straight from the Clay Oven"
      ],
      pros: ["Authentic Indian spice blends and clay oven cooking", "Extensive vegetarian and lentil options", "Quiet and warm family ambiance"],
      cons: ["Cozy, compact dining room", "Alcohol-free venue"],
      googleRating: 4.4,
      googleReviewCount: 890,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 270,
      theforkRating: 4.2,
      theforkReviewCount: 85,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 890,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Clay+Oven+Casablanca",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212522260620",
      bookingUrl: "",
      whatsappNumber: "+212661889922",
      website: "not-available",
      instagram: "https://instagram.com/clayovencasablanca"
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

  // ── 8. MAÂRIF (1 of 2) ──
  {
    id: "eat-casablanca-luigi-maarif",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "large-groups", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Italian", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["classic-trattoria", "wood-fired-pizza", "maarif-history", "convivial"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 220,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["italian-heritage", "wood-oven-pizza", "pasta-fresca", "maarif", "wine"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Luigi",
      neighborhood: "Maârif",
      description: "Historic Italian trattoria operating on Rue de Normandie in Maârif since the neighborhood's Italian days, revered for wood-fired pizzas, seafood risotto, and generous pasta.",
      tip: "Their Risotto aux Gambas is cooked to order with rich shellfish stock—a must-order staple of the house.",
      badge: "local-favorite",
      bestDishes: [
        "Creamy Risotto with Atlantic Gambas",
        "Wood-Fired Pizza Quattro Formaggi",
        "Classic Homemade Italian Tiramisu"
      ],
      pros: ["Authentic neighborhood Italian trattoria heritage", "Full selection of Moroccan and Italian wines", "Generous portions suited for families"],
      cons: ["Gets very crowded at weekend dinner peak", "Table turnover can feel brisk"],
      googleRating: 4.3,
      googleReviewCount: 1740,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 410,
      theforkRating: 4.2,
      theforkReviewCount: 130,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1740,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Luigi+Maarif+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522254345",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/restaurant_luigi_officiel"
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

  // ── 9. MAÂRIF (2 of 2) ──
  {
    id: "eat-casablanca-the-secret-garden-maarif",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea"],
      experienceTypes: ["hidden-gem", "cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Mediterranean", "Vegetarian/Vegan"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["hidden-oasis", "lush-plants", "courtyard-cafe", "calm"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 160,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      seatingTypes: ["indoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["secret-garden", "maarif-oasis", "brunch", "coffee", "dry-restaurant"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "The Secret Garden",
      neighborhood: "Maârif",
      description: "Lush botanical courtyard café hidden behind the bustling shopping avenues of Maârif, offering specialty coffees, healthy salads, and serene alfresco breakfasts.",
      tip: "Take a seat in the inner courtyard surrounded by tropical plants to escape the urban noise of Boulevard Al Massira.",
      badge: "hidden-gem",
      bestDishes: [
        "Goat Cheese and Fig Garden Salad",
        "Avocado Salmon Tartine on Multigrain Bread",
        "House Iced Matcha Latte"
      ],
      pros: ["Surprising tranquil green courtyard in dense central Maârif", "Healthy, photogenic menu", "Great laptop-friendly atmosphere on weekdays"],
      cons: ["Hard to spot from the street without GPS", "Alcohol-free venue"],
      googleRating: 4.4,
      googleReviewCount: 680,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 90,
      theforkRating: 4.1,
      theforkReviewCount: 40,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 680,
      openTime: "08:30",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=The+Secret+Garden+Maarif+Casablanca",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212522986420",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/thesecretgardencasa"
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

  // ── 10. RACINE (1 of 2) ──
  {
    id: "eat-casablanca-boccaccio-racine",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Italian", "Mediterranean", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["sicilian-elegance", "trattoria-chic", "racine-trend", "aperitivo"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 480,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["italian-fine-dining", "pasta-fresca", "racine", "cocktails", "valet-parking"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Boccaccio",
      neighborhood: "Racine",
      description: "Fashionable, award-winning Italian trattoria in the heart of Racine, showcasing Sicilian chef-curated handmade pasta, burrata, and refined Mediterranean grills.",
      tip: "Start with an Italian Spritz on their chic terrace before ordering the Tagliolini with fresh black truffle.",
      badge: "local-favorite",
      bestDishes: [
        "Tagliolini al Tartufo Nero Fresco",
        "Pugliese Burrata with Heirloom Cherry Tomatoes",
        "Wood-Fired Lobster Linguine"
      ],
      pros: ["Ranked among Morocco's top Italian dining spots", "Stylish contemporary architecture with warm woodwork", "Valet parking available at the door"],
      cons: ["Reservations are required for dinner", "Music becomes energetic in the late evening"],
      googleRating: 4.4,
      googleReviewCount: 1650,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 520,
      theforkRating: 4.4,
      theforkReviewCount: 220,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 1650,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Boccaccio+Casablanca+Racine",
      reservationMethod: ["phone", "website", "whatsapp"],
      reservationContact: "+212522398445",
      bookingUrl: "https://boccacciocasa.com",
      whatsappNumber: "+212661554433",
      website: "https://boccacciocasa.com",
      instagram: "https://instagram.com/boccacciocasa"
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

  // ── 11. RACINE (2 of 2) ──
  {
    id: "eat-casablanca-organic-kitchen-racine",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "friends", "couple", "family"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Vegetarian/Vegan", "Mediterranean", "International"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["nomad", "culture"],
      vibeTags: ["organic-farm-to-table", "eco-chic", "wellness", "bright-natural-light"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 180,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["organic", "healthy-food", "gluten-free", "racine", "farm-to-table"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Organic Kitchen",
      neighborhood: "Racine",
      description: "Casablanca's flagship organic and farm-to-table sanctuary on Rue Ahmed El Mokri in Racine, created by designer Abla Bichara with natural raw wood and a vibrant eco-grocer.",
      tip: "Their Asian-marinated Chicken Buddha Bowl with beet hummus and cactus vinaigrette is a long-standing local favorite.",
      badge: "local-favorite",
      bestDishes: [
        "Signature Buddha Bowl with Cactus Dressing",
        "Gluten-Free Sweet Potato & Avocado Waffles",
        "Super Veggie Green Goddess Bowl"
      ],
      pros: ["Transparent 100% organic and locally sourced ingredients", "Extensive gluten-free, dairy-free, and vegan labeling", "Luminous, calm natural-material architecture"],
      cons: ["Peak lunch service can have a brief wait", "No alcohol served"],
      googleRating: 4.5,
      googleReviewCount: 1380,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 310,
      theforkRating: 4.4,
      theforkReviewCount: 90,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1380,
      openTime: "10:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Organic+Kitchen+Casablanca+Racine",
      reservationMethod: ["phone", "website", "whatsapp"],
      reservationContact: "+212522943775",
      bookingUrl: "https://organickitchen.ma",
      whatsappNumber: "+212661943775",
      website: "https://organickitchen.ma",
      instagram: "https://instagram.com/organickitchenmaroc"
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

  // ── 12. VAL D'ANFA ──
  {
    id: "eat-casablanca-olive-terrasse-val-danfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["family", "couple", "business-friendly", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["casual", "fine-dining"],
      foodStyles: ["Mediterranean", "Seafood", "French-Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["atlantic-panorama", "resort-dining", "garden-terrace", "coastal-breeze"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 380,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["val-danfa", "ocean-terrace", "mediterranean", "buffet", "corniche"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Olive Terrasse",
      neighborhood: "Val d'Anfa",
      description: "Sunlit garden-themed Mediterranean restaurant and ocean-facing terrace inside Hôtel Val d'Anfa, offering seafood buffets and coastal dining looking onto the Atlantic.",
      tip: "Ideal for a breezy seaside lunch after exploring the Corniche; sit out on the elevated deck to catch the ocean views.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Atlantic Sea Bream with Lemon Herb Butter",
        "Seafood Linguine with Fresh Calamari and Clams",
        "Val d'Anfa Mediterranean Mezze Platter"
      ],
      pros: ["Elevated Atlantic Ocean view from the garden terrace", "Full bar service and international wine menu", "Free hotel parking and resort grounds"],
      cons: ["Can get breezy on the terrace in late afternoon", "Can be busy when the hotel hosts corporate conferences"],
      googleRating: 4.2,
      googleReviewCount: 520,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 160,
      theforkRating: 4.0,
      theforkReviewCount: 55,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 520,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Hotel+Val+d+Anfa+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522797070",
      bookingUrl: "https://valdanfahotel.com",
      whatsappNumber: "",
      website: "https://valdanfahotel.com",
      instagram: "https://instagram.com/hotelclubval"
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
    id: "eat-casablanca-les-halles",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea", "dinner"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["French-Moroccan", "Mediterranean", "Seafood", "Cafe & Pastry", "Grill & BBQ", "Moroccan"],
      cuisineTags: ["international", "cafe-pastry", "seafood"],
      archetypeAffinity: ["nomad", "first-timer", "culture"],
      vibeTags: ["glass-roof", "market-hall", "artisanal-bakery", "brunch-spot"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 22,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "breakfast",
        "brunch",
        "lunch",
        "dinner",
        "afternoon-tea",
        "cafes-tea",
        "halal",
        "vegetarian",
        "dry",
        "wifi",
        "ac",
        "terrace",
        "wheelchair-accessible",
        "family",
        "couple",
        "local-favorite",
        "ramadan-friendly"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true,
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Les Halles",
      neighborhood: "CIL",
      district: "CIL / Limite Racine",
      description: "Contemporary European-style market hall, coffee roastery, artisan bakery, and brasserie under a luminous glass roof at 11 Rue d'Ifrane in Casablanca's CIL district.",
      tip: "Drop by from 08:00 for roastery espresso and complete Escapade Matinale breakfast spreads, or dine across the butcher grill and seafood stalls before the strict 23:00 closing time.",
      badge: "local-favorite",
      bestDishes: [
        "Brochettes Filet & Majhool (Façon Fondue)",
        "Le Carpaccio de Bœuf",
        "Gyozas de Poulet Croustillants",
        "Formule Petit-Déjeuner Complète"
      ],
      pros: [
        "Spacious glass-roof market architecture with in-house bakery and specialty roaster",
        "Consistent, attentive table service from morning brunch through dinner",
        "Wide culinary variety spanning grilled meats, seafood, French plates, and Moroccan tagines"
      ],
      cons: [
        "Closes promptly at 23:00 (not suited for late-night socializing)",
        "Higher check average than standard neighborhood Casablanca cafés"
      ],
      googleRating: 4.2,
      googleReviewCount: 700,
      openTime: "08:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "11 Rue d'Ifrane, CIL, Casablanca 20450, Morocco",
        lat: 33.57319,
        lng: -7.6567
      },
      googleMapsUrl: "https://maps.google.com/?q=33.57319,-7.65670",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522940698",
      bookingUrl: "https://www.leshalles.ma/",
      whatsappNumber: "",
      website: "https://www.leshalles.ma/",
      instagram: "not-available",
      languagesSpoken: ["Arabic", "French", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "breakfast-coffee",
            title: "Breakfast, Specialty Coffee & Cold-Pressed Juices",
            description: "Published morning formulas, roastery coffee, and cold-pressed juices from leshalles.ma.",
            items: [
              { id: "leshalles-bf-complete", name: "Formule Petit-Déjeuner Complète", description: "Complete morning breakfast spread with artisan breads, pastries, eggs, hot drink, and juice (varies 70–110 MAD by formula).", price: 90, isSignature: true, dietary: ["halal"] },
              { id: "leshalles-bf-kids", name: "La Petite Escale (Kids Breakfast)", description: "Children's breakfast formula with pastry and beverage.", price: 55, dietary: ["halal", "vegetarian"] },
              { id: "leshalles-juice-coldpress", name: "Cold-Pressed Fresh Juice (L'Incontournable / Détox)", description: "Freshly cold-pressed seasonal fruit and vegetable blends (35–50 MAD).", price: 42, dietary: ["halal", "vegan", "vegetarian"] },
              { id: "leshalles-coffee-latte", name: "Cappuccino / Café Latte", description: "In-house roasted specialty espresso with steamed milk (35–40 MAD).", price: 38, dietary: ["halal", "vegetarian"] },
              { id: "leshalles-coffee-espresso", name: "Espresso / Café", description: "Single specialty roast espresso brewed on site.", price: 28, dietary: ["halal", "vegan", "vegetarian"] }
            ]
          },
          {
            id: "market-starters-grill",
            title: "Market Stalls & Sharing Plates",
            description: "Signature starters and grill plates from Le Grill du Boucher and sharing counters.",
            items: [
              { id: "leshalles-brochettes", name: "Brochettes Filet & Majhool (Façon Fondue)", description: "Tender beef tenderloin skewers paired with rich fondue-style Majhool date accompaniment.", price: 120, isSignature: true, dietary: ["halal"] },
              { id: "leshalles-carpaccio", name: "Le Carpaccio de Bœuf", description: "Thinly sliced raw beef seasoned with herbs, olive oil, and aged cheese.", price: 110, dietary: ["halal"] },
              { id: "leshalles-gyozas", name: "Gyozas de Poulet Croustillants", description: "Crispy golden-seared chicken dumplings served with savory dipping sauce.", price: 85, dietary: ["halal"] }
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
        tag: "Upscale Market Pricing",
        tagColor: "money",
        tone: "good",
        description: "Printed menus list exact prices across breakfast sets (70–110 MAD), coffees (28–40 MAD), and grill/fish mains (110+ MAD) with card payment accepted.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Modern Kitchen",
        tagColor: "water",
        tone: "good",
        description: "Modern CIL market-hall kitchen and cold-pressed juice counter praised for clean presentation, fresh seafood turnover, and quality cuts.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Brasserie & Market Stalls",
        tagColor: "food",
        tone: "good",
        description: "Blends French-Mediterranean brasserie staples, artisan viennoiserie, fresh fish, and local beef tagines rather than strictly traditional street food.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Bright Glass-Roof Hall",
        tagColor: "safety",
        tone: "good",
        description: "Warm, stylish CIL interior with high glass ceilings, Wi-Fi, AC, and terrace seating away from medina street touts.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Polished, Closes at 23:00",
        tagColor: "safety",
        tone: "good",
        description: "Consistently reviewed as welcoming and professional; note the kitchen and doors close promptly at 23:00.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "eat-casablanca-le-pavillon-cfc",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly", "large-groups"],
      mealTypes: ["lunch", "afternoon-tea", "dinner", "drinks"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["French-Moroccan", "Mediterranean", "Seafood", "Grill & BBQ"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["art-deco", "hidden-garden", "historical-aero-club", "live-piano"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 60,
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
      seatingTypes: ["indoor", "outdoor", "terrace", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "fine",
        "lunch",
        "dinner",
        "afternoon-tea",
        "drinks",
        "alcohol",
        "halal",
        "vegetarian",
        "terrace",
        "courtyard",
        "parking",
        "wifi",
        "ac",
        "wheelchair-accessible",
        "couple",
        "ramadan-friendly"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true,
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Pavillon CFC",
      neighborhood: "Anfa",
      district: "Casablanca Finance City (Casa-Anfa)",
      description: "Upscale French brasserie set inside the restored 1930s Aéro-Club du Maroc pavilion at Casablanca Finance City, surrounded by a lush 1,500 m² hidden palm garden, green zellige fountains, and Parisian terraces.",
      tip: "Reserve ahead for a shaded garden terrace table at business lunch or Friday/Saturday nights when live piano and vocalists perform; smart/chic attire is advised.",
      badge: "splurge",
      bestDishes: [
        "Terrine de Foie Gras Maison",
        "Sea Bass Carpaccio with Argan Oil & Espelette",
        "Huîtres Fraîches (Oysters)",
        "Vitello Tonnato"
      ],
      pros: [
        "Historic Camp Cazes aviation building framed by a tranquil 1,500 m² palm and jacaranda garden",
        "Refined French brasserie menu featuring raw bar oysters, foie gras, and Josper-grilled cuts",
        "Live piano and vocal evenings on Fridays and Saturdays"
      ],
      cons: [
        "Fine-dining pricing averaging ~550+ MAD per person for a full meal",
        "Advance table booking is strongly recommended, especially for outdoor garden seating"
      ],
      googleRating: 4.5,
      googleReviewCount: 200,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Street Retail, 3 Rue de l'Aéropostale, Casablanca Finance City, Casablanca 20250, Morocco",
        lat: 33.5354,
        lng: -7.6631
      },
      googleMapsUrl: "https://maps.google.com/?q=33.5354,-7.6631",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212529200800",
      bookingUrl: "",
      whatsappNumber: "+212636404052",
      website: "not-available",
      instagram: "https://instagram.com/lepavilloncfc",
      languagesSpoken: ["Arabic", "French", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "oysters-caviar",
            title: "Raw Bar, Oysters & Caviar",
            description: "Fresh oysters and Lianozoff caviar service published on sam.ma.",
            items: [
              { id: "pavillon-caviar-50", name: "Siberian Caviar Lianozoff (50g)", description: "50g tin of Siberian caviar served with traditional accompaniments.", price: 1950 },
              { id: "pavillon-caviar-30", name: "Siberian Caviar Lianozoff (30g)", description: "30g tin of Siberian caviar.", price: 1200 },
              { id: "pavillon-oysters-12", name: "12 Fresh Oysters", description: "Served chilled with rye bread, salted butter, wine vinegar, and shallots.", price: 275, isSignature: true },
              { id: "pavillon-oysters-9", name: "9 Fresh Oysters", description: "Served with rye bread, salted butter, and shallot mignonette.", price: 210 },
              { id: "pavillon-oysters-6", name: "6 Fresh Oysters", description: "Half-dozen chilled oysters with classic condiments.", price: 140 }
            ]
          },
          {
            id: "brasserie-starters",
            title: "Brasserie Starters & Carpaccios",
            description: "Published French brasserie entrées (main courses and Josper grill selections change seasonally; ~550+ MAD full-meal average).",
            items: [
              { id: "pavillon-foiegras", name: "House Foie Gras Terrine", description: "Homemade duck foie gras terrine served with toasted Parisian brioche.", price: 240, isSignature: true },
              { id: "pavillon-seabass-argan", name: "Sea Bass Carpaccio (Argan Oil & Espelette)", description: "Fresh line-caught sea bass dressed with Moroccan argan oil, lemon, and Espelette pepper.", price: 160, isSignature: true, dietary: ["halal", "gluten-free"] },
              { id: "pavillon-vitello", name: "Vitello Tonnato", description: "Thinly sliced roasted veal topped with creamy tonnato sauce and caper berries.", price: 160, dietary: ["halal"] },
              { id: "pavillon-beef-carpaccio", name: "Beef Carpaccio", description: "Chilled raw beef slices topped with aged parmesan shavings, rocket, and toasted pine nuts.", price: 155, dietary: ["halal", "gluten-free"] },
              { id: "pavillon-seabass-pickles", name: "Sea Bass Carpaccio (Cucumber Pickles)", description: "Delicate sea bass slices paired with crisp cucumber pickles.", price: 150, dietary: ["halal", "gluten-free"] }
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
        tag: "Fine-Dining Budget (~550+ MAD)",
        tagColor: "money",
        tone: "caution",
        description: "High-end Casa Finance City brasserie pricing (starters 140–240 MAD, full meals ~550+ MAD/person); check wine/bar pours before ordering.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "High-End Raw Bar Standards",
        tagColor: "water",
        tone: "good",
        description: "Upmarket kitchen standards trusted for raw oysters, sea bass carpaccio, and Josper-grilled Béni Mellal beef cuts.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Classic French Brasserie",
        tagColor: "food",
        tone: "good",
        description: "Authentic French brasserie menu (Burgundy snails, foie gras, mushroom risotto, Paris-Brest) rather than traditional Moroccan dining; serves alcohol.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "1,500 m² Hidden Garden",
        tagColor: "safety",
        tone: "good",
        description: "Oasis of centenary palms, jacarandas, and Art Deco salons tucked between CFC towers; smart-chic dress code encouraged.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Book Terrace Ahead",
        tagColor: "safety",
        tone: "good",
        description: "Polished fine-dining service tailored to business lunches and evening guests; book via +212 5 29 20 08 00 for garden seating.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "eat-casablanca-baristas-almaz",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea", "dinner"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Cafe & Pastry", "International", "Grill & BBQ", "Moroccan"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["belgian-chocolate", "specialty-coffee", "gourmet-brunch", "instagrammable"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "breakfast",
        "brunch",
        "lunch",
        "dinner",
        "afternoon-tea",
        "cafes-tea",
        "halal",
        "vegetarian",
        "dry",
        "wifi",
        "ac",
        "terrace",
        "parking",
        "delivery",
        "wheelchair-accessible",
        "family",
        "couple",
        "ramadan-friendly"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true,
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Baristas",
      neighborhood: "Anfa",
      district: "Sela Park Almaz",
      description: "Popular Moroccan specialty coffee shop, Belgian chocolatier, and all-day restaurant at Sela Park Almaz (with sister Casablanca locations in Californie, Morocco Mall, and Aeria Mall), known for indulgent chocolate desserts, gourmet brunches, and steaks.",
      tip: "Great for Belgian chocolate crêpes, waffles, or Wednesday Moroccan couscous/rfissa; visit outside weekend brunch peak hours for faster kitchen turnaround.",
      badge: "local",
      bestDishes: [
        "Crêpes Sushi au Chocolat Belge",
        "Fettuccine Crêpe Oreo / Lotus",
        "Filet de Bœuf Purée",
        "Salade Baristas"
      ],
      pros: [
        "Expansive Belgian chocolate dessert menu alongside full savory grill and salad options",
        "Convenient Sela Park Almaz retail center parking, outdoor terrace, and Wi-Fi",
        "Dry, family-friendly setting with card payment and delivery support"
      ],
      cons: [
        "Service pace can feel slow or stretched during busy weekend rushes",
        "Specialty drinks and sweet plates are pricier than typical Moroccan cafés"
      ],
      googleRating: 4.3,
      googleReviewCount: 250,
      openTime: "07:00",
      closeTime: "22:00",
      exactAddressAndCoordinates: {
        address: "Sela Park Almaz, Pénétrante d'Azbane, Casablanca 20300, Morocco",
        lat: 33.50858,
        lng: -7.66996
      },
      googleMapsUrl: "https://maps.google.com/?q=33.50858,-7.66996",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212522505404",
      bookingUrl: "https://baristas.info",
      whatsappNumber: "",
      website: "https://baristas.info",
      instagram: "not-available",
      languagesSpoken: ["Arabic", "French", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "salads-starters",
            title: "Salads & Starters",
            description: "Fresh lunch bowls and signature Baristas salads (Yumlo / Casablanca menu rates).",
            items: [
              { id: "baristas-sal-exotique", name: "Salade Exotique (Seafood)", description: "Mixed fresh seafood salad with seasonal greens and house dressing.", price: 85, dietary: ["halal"] },
              { id: "baristas-sal-quinoa", name: "Quinoa Gambas", description: "Warm and chilled quinoa bowl topped with sautéed prawns.", price: 75, dietary: ["halal"] },
              { id: "baristas-sal-baristas", name: "Salade Baristas", description: "House signature composed salad.", price: 70, isSignature: true, dietary: ["halal"] },
              { id: "baristas-sal-cesar", name: "Salade César / Protéinée", description: "Classic Caesar or high-protein grilled chicken salad.", price: 65, dietary: ["halal"] }
            ]
          },
          {
            id: "mains-grill",
            title: "Main Courses, Grill & Moroccan Specials",
            description: "Steaks, grilled skewers, fish, and traditional Moroccan plates (Glovo / Yumlo rates).",
            items: [
              { id: "baristas-main-souris", name: "Souris d'Agneau (12-Hour Slow-Cooked)", description: "Braised lamb shank slow-cooked for 12 hours until tender.", price: 306, dietary: ["halal"] },
              { id: "baristas-main-filet", name: "Filet de Bœuf", description: "Grilled beef tenderloin served with creamy mashed potatoes and sauce.", price: 192, isSignature: true, dietary: ["halal"] },
              { id: "baristas-main-entrecote", name: "Entrecôte Grillée", description: "Char-grilled beef ribeye steak with sides.", price: 168, dietary: ["halal"] },
              { id: "baristas-main-saumon", name: "Pavé de Saumon Grillé", description: "Seared Atlantic salmon fillet with seasonal accompaniments.", price: 155, dietary: ["halal"] },
              { id: "baristas-main-couscous", name: "Moroccan Couscous", description: "Traditional steamed semolina couscous with vegetables and tender meat.", price: 80, dietary: ["halal"] },
              { id: "baristas-main-brochettes", name: "Brochettes (Chicken or Kefta)", description: "Grilled marinated chicken or spiced minced beef skewers.", price: 75, dietary: ["halal"] },
              { id: "baristas-main-escalope", name: "Escalope Milanaise", description: "Crispy golden breaded chicken escalope.", price: 65, dietary: ["halal"] }
            ]
          },
          {
            id: "sweets-drinks",
            title: "Belgian Chocolate Sweets & Drinks",
            description: "Signature crêpes, waffles, hot chocolates, and gourmet milkshakes.",
            items: [
              { id: "baristas-sweet-crepesushi", name: "Crêpes Sushi (Raspberry / Pistachio / Brownie)", description: "Rolled thin crêpes filled with fruit or brownie and Belgian chocolate drizzle (69–77 MAD).", price: 73, isSignature: true, dietary: ["halal", "vegetarian"] },
              { id: "baristas-sweet-fettuccine", name: "Fettuccine Crêpe (Classic / Oreo / Lotus)", description: "Ribbon-cut crêpe strips topped with warm Belgian chocolate and cookie crumble (65–72 MAD).", price: 68, isSignature: true, dietary: ["halal", "vegetarian"] },
              { id: "baristas-sweet-waffle", name: "Gaufres (Croquante / Oreo / Lotus)", description: "Crisp Belgian-style waffle with chocolate, Oreo, or Lotus Biscoff topping (65–67 MAD).", price: 66, dietary: ["halal", "vegetarian"] },
              { id: "baristas-drink-chocolat", name: "Hot Chocolates & Gourmet Milkshakes", description: "Rich Belgian hot chocolate or blended Oreo, Lotus, or Brownie milkshake.", price: 66, dietary: ["halal", "vegetarian"] }
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
        tag: "Pricier Café Chain",
        tagColor: "money",
        tone: "caution",
        description: "Prices are clearly printed (desserts/drinks ~65–77 MAD, mains 65–306 MAD), though several reviewers note sweets and shakes feel expensive for a casual café.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Mall-Center Standard",
        tagColor: "water",
        tone: "good",
        description: "Modern commercial-center cafe kitchen at Sela Park Almaz with clean prep standards and family-friendly hygiene.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Belgian Sweets & All-Day Cafe",
        tagColor: "food",
        tone: "good",
        description: "Specializes in Belgian chocolate desserts, brunch, and international grill fare (plus Wednesday Moroccan couscous/rfissa); completely dry and halal.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Chic Cafe, Busy Weekends",
        tagColor: "alert",
        tone: "caution",
        description: "Modern, Instagram-friendly interior with terrace seating, Wi-Fi, and center parking, though weekend afternoons can feel crowded.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Slower at Peak Hours",
        tagColor: "alert",
        tone: "caution",
        description: "Friendly brand hospitality during quiet weekday mornings, but customer reviews note slow waits and inconsistent service at peak rush hours.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "eat-casablanca-espressolab-maarif",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "couple", "business-friendly"],
      mealTypes: ["breakfast", "brunch", "snack", "afternoon-tea", "drinks"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "International"],
      cuisineTags: ["cafe-pastry"],
      archetypeAffinity: ["nomad", "budget", "first-timer"],
      vibeTags: ["laptop-friendly", "third-wave-coffee", "power-outlets", "specialty-matcha"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "breakfast",
        "snack",
        "afternoon-tea",
        "drinks",
        "cafes-tea",
        "halal",
        "vegetarian",
        "dry",
        "wifi",
        "ac",
        "terrace",
        "delivery",
        "wheelchair-accessible",
        "ramadan-friendly"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true,
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Espressolab",
      neighborhood: "Maârif",
      district: "Urban Square (Rue Normandie)",
      description: "Popular third-wave specialty coffee roaster and laptop-friendly café at Urban Square in Maârif (with a sister Casablanca branch at Morocco Mall), loved by freelancers and students for power outlets, specialty lattes, croissants, and San Sebastian cheesecake.",
      tip: "Arrive before late afternoon if you want a seat near a wall outlet; bring mobile data as backup in case Wi-Fi slows down when the café is packed.",
      badge: "local-favorite",
      bestDishes: [
        "Iced Spanish Latte",
        "Matcha Latte",
        "San Sebastian Cheesecake",
        "Croissant Omelette Sandwich"
      ],
      pros: [
        "Power sockets at most indoor tables, making it a top digital-nomad hub in Maârif",
        "Fair third-wave specialty coffee pricing (25–48 MAD) alongside fresh bakery & cheesecake",
        "Spacious indoor & outdoor Urban Square terrace seating with friendly staff"
      ],
      cons: [
        "Gets crowded quickly on weekday afternoons, making seats and Wi-Fi bandwidth competitive",
        "Interior lighting can feel dim in corners and chairs aren't all ergonomic for long shifts"
      ],
      googleRating: 4.1,
      googleReviewCount: 600,
      openTime: "10:00",
      closeTime: "22:00",
      exactAddressAndCoordinates: {
        address: "16 Angle Rue Normandie et Yaata El Ifrani, Urban Square, Maârif, Casablanca 20100, Morocco",
        lat: 33.5855,
        lng: -7.6322
      },
      googleMapsUrl: "https://maps.google.com/?q=33.5855,-7.6322",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212701071128",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://www.espressolab.com",
      instagram: "https://www.instagram.com/espressolab/",
      languagesSpoken: ["Arabic", "French", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "espresso-matcha",
            title: "Specialty Coffee & Matcha",
            description: "Hot and iced espresso drinks, flavored lattes, and matcha (Glovo / Pricelisto Casablanca rates).",
            items: [
              { id: "esplab-matcha", name: "Matcha Latte (Hot or Iced)", description: "Ceremonial-style green tea matcha whisked with steamed or iced milk (46–58 MAD).", price: 52, isSignature: true, dietary: ["halal", "vegetarian"] },
              { id: "esplab-spanish", name: "Spanish Latte (Hot or Iced)", description: "Signature espresso blended with textured milk and condensed milk.", price: 47, isSignature: true, dietary: ["halal", "vegetarian"] },
              { id: "esplab-caramel", name: "Caramel Salé Latte / Nutellaté", description: "Salted caramel or hazelnut-chocolate flavored espresso latte.", price: 42, dietary: ["halal", "vegetarian"] },
              { id: "esplab-latte", name: "Café Latte / Cappuccino", description: "Freshly roasted house espresso with silky micro-foam (38–46 MAD).", price: 42, dietary: ["halal", "vegetarian"] },
              { id: "esplab-americano", name: "Espresso / Americano", description: "House roast espresso shot or long black coffee (25–35 MAD).", price: 28, dietary: ["halal", "vegan", "vegetarian"] }
            ]
          },
          {
            id: "bakery-sandwiches",
            title: "Bakery, Sandwiches & Desserts",
            description: "Fresh viennoiseries, savory café sandwiches, and cheesecakes (Yumlo / Glovo rates).",
            items: [
              { id: "esplab-croissant-omelette", name: "Croissant Omelette / Batbout Dinde Fumée", description: "Flaky croissant stuffed with fresh omelette or smoked turkey batbout.", price: 55, dietary: ["halal"] },
              { id: "esplab-panini", name: "Panini Semoule / Crispy Chicken Sandwich", description: "Warm pressed semolina panini or crispy chicken sandwich (50–55 MAD).", price: 53, dietary: ["halal"] },
              { id: "esplab-sansebastian", name: "San Sebastian Cheesecake", description: "Creamy caramelized Basque-style cheesecake (46–58 MAD).", price: 52, isSignature: true, dietary: ["halal", "vegetarian"] },
              { id: "esplab-tiramisu", name: "Tiramisu", description: "Classic espresso-soaked mascarpone layered dessert.", price: 40, dietary: ["halal", "vegetarian"] },
              { id: "esplab-pain-choco", name: "Pain au Chocolat / Pain Suisse", description: "Butter pastry with dark chocolate or pastry cream.", price: 18, dietary: ["halal", "vegetarian"] },
              { id: "esplab-croissant", name: "Classic Butter Croissant", description: "Golden baked French-style butter croissant.", price: 15, dietary: ["halal", "vegetarian"] }
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
        tag: "Transparent Café Prices",
        tagColor: "money",
        tone: "good",
        description: "Clear counter prices (coffees 25–58 MAD, pastries 15–18 MAD) with no hidden service surcharges and full card support.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Franchise Coffeehouse",
        tagColor: "water",
        tone: "good",
        description: "Modern commercial espresso setup with sealed milk/bottled water and clean counter prep in Maârif's Urban Square.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Third-Wave Roastery Chain",
        tagColor: "food",
        tone: "good",
        description: "Istanbul-origin specialty coffee chain focused on single-origin espresso, Spanish lattes, and European-style pastries; completely dry.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Outlets + Wi-Fi, Busy Peak",
        tagColor: "safety",
        tone: "good",
        description: "Top Casablanca spot for laptop work with power outlets at tables, though seats fill up fast and Wi-Fi can dip at peak crowd hours.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Counter Pickup & Friendly Staff",
        tagColor: "safety",
        tone: "good",
        description: "Welcoming staff and dog-friendly terrace; counter-order model keeps turnaround fast outside afternoon rush hours.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "eat-casablanca-blaban-maarif",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "family", "couple", "solo"],
      mealTypes: ["snack", "afternoon-tea", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Cafe & Pastry", "Middle Eastern"],
      cuisineTags: ["cafe-pastry"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["viral-desserts", "egyptian-sweets", "late-night-sweet", "bustling"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 5,
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
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "street-side"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "snack",
        "afternoon-tea",
        "late-night",
        "halal",
        "vegetarian",
        "dry",
        "delivery",
        "ramadan-friendly"
      ],
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: true,
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "B.Laban",
      neighborhood: "Maârif",
      district: "Rue El Kadi Iass",
      description: "Viral Egyptian dairy and dessert shop in Maârif serving rich milk-soaked Qashtouta cakes, Roz Bel Laban rice puddings, Sweet Koshary, El Qoora spheres, and decadent pistachio, mango, and Lotus creations late into the night.",
      tip: "Carry MAD cash in small bills (card terminals can be unreliable or short on change), go on weekday mornings to avoid long evening lines, and share one bowl if you dislike very sweet desserts. Opens at 12:00 on Fridays.",
      badge: "local-favorite",
      bestDishes: [
        "Qashtouta & Lazy Cat Cake",
        "Sweet Koshary (Pistachio / Oreo Nutella)",
        "Dubai Chocolate Dessert",
        "El Qoora (The Sphere)"
      ],
      pros: [
        "Affordable viral Egyptian milk desserts (20–55 MAD) open until midnight every day",
        "Massive menu variety from mango/pistachio bowls to Sweet Koshary and Qashtouta",
        "Strictly halal and dry dessert spot ideal for late-night sweet cravings"
      ],
      cons: [
        "Very heavy queues and crowded seating during evenings and weekends",
        "Frequent customer complaints about disorganized counter service, card terminal issues, and overly sugary portions"
      ],
      googleRating: 3.2,
      googleReviewCount: 450,
      openTime: "10:00",
      closeTime: "00:00",
      seasonalHoursNote: "Opens at 12:00 on Fridays for Friday prayers (10:00–00:00 Sat–Thu).",
      exactAddressAndCoordinates: {
        address: "6 Rue El Kadi Iass, Maârif, Casablanca 20330, Morocco",
        lat: 33.58611,
        lng: -7.63538
      },
      googleMapsUrl: "https://maps.google.com/?q=33.58611,-7.63538",
      reservationMethod: ["walk-in"],
      reservationContact: "+212664448464",
      bookingUrl: "",
      whatsappNumber: "+212664448464",
      website: "not-available",
      instagram: "https://www.instagram.com/b.laban.official/",
      languagesSpoken: ["Arabic", "French"],
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "signature-cakes",
            title: "Signature Viral Cakes & Specialties",
            description: "B.Laban signature Egyptian dairy desserts (Casablanca menu rates).",
            items: [
              { id: "blaban-hopa", name: "Hopa Tito Mambo", description: "Layered sponge cake, whipped cream, and rich chocolate drizzle.", price: 55, dietary: ["halal", "vegetarian"] },
              { id: "blaban-lazy-cat", name: "Lazy Cat Cake", description: "Rich chocolate-soaked dairy cake topped with thick ganache.", price: 50, isSignature: true, dietary: ["halal", "vegetarian"] },
              { id: "blaban-dubai", name: "Dubai Chocolate Dessert", description: "Crispy kunafa-pistachio filling layered with milk chocolate sauce.", price: 50, isSignature: true, dietary: ["halal", "vegetarian"] },
              { id: "blaban-creme", name: "Creme de la Creme / Riyadh Shortcake", description: "Soft milk-soaked shortcake and cream cup.", price: 30, dietary: ["halal", "vegetarian"] },
              { id: "blaban-frawlieta", name: "Frawlieta", description: "Light strawberry and dairy cream dessert.", price: 20, dietary: ["halal", "vegetarian"] }
            ]
          },
          {
            id: "koshary-qoora-imbalya",
            title: "Sweet Koshary, El Qoora & Imbalya",
            description: "Egyptian Roz Bel Laban rice pudding, crispy kunafa layers, and ice-cream bowls.",
            items: [
              { id: "blaban-koshary-pistachio", name: "Sweet Koshary (Pistachio / Pistachio Lotus)", description: "Rice pudding, kunafa, pastry layers, and thick pistachio cream.", price: 50, isSignature: true, dietary: ["halal", "vegetarian"] },
              { id: "blaban-imbalya-pistachio", name: "Imbalya (Pistachio / Pistachio Lotus)", description: "Layered cream dessert topped with roasted pistachio and Lotus sauce.", price: 45, dietary: ["halal", "vegetarian"] },
              { id: "blaban-koshary-oreo", name: "Sweet Koshary (Oreo & Nutella)", description: "Sweet rice pudding layered with crisp kunafa, Oreo crumble, and Nutella.", price: 40, dietary: ["halal", "vegetarian"] },
              { id: "blaban-qoora", name: "El Qoora / The Sphere (Classic to Pistachio)", description: "Signature chilled cream sphere coated in chocolate, mango, Lotus, or pistachio (30–40 MAD).", price: 35, isSignature: true, dietary: ["halal", "vegetarian"] },
              { id: "blaban-imbalya-mango", name: "Imbalya (Mango / Nutella / Oreo)", description: "Fruit or chocolate-topped cream cup (30–35 MAD).", price: 32, dietary: ["halal", "vegetarian"] }
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
        tag: "Budget Sweets, Bring Cash",
        tagColor: "alert",
        tone: "caution",
        description: "Prices are affordable (20–55 MAD), though reviewers note card terminals (TPE) are sometimes unavailable or cashiers run low on small change—bring MAD cash.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "High Turnover, Busy Tables",
        tagColor: "water",
        tone: "caution",
        description: "High product turnover keeps dairy desserts fresh, though heavy evening crowds occasionally leave indoor/street tables slow to be wiped down.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Authentic Viral Egyptian Chain",
        tagColor: "food",
        tone: "good",
        description: "Official Egyptian B.Laban branch serving genuine Roz Bel Laban, Qashtouta, and Sweet Koshary; flavors skew very sweet and rich.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Long Lines & Crowded",
        tagColor: "alert",
        tone: "caution",
        description: "Noisy, high-energy viral shop with frequent queues spilling outside in the evening; best treated as a quick takeaway rather than a relaxed sit-down.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Slow & Disorganized at Peak",
        tagColor: "alert",
        tone: "caution",
        description: "Public reviews (~3.2★) frequently cite long waits and overwhelmed counter staff during peak night hours; visit midday for smoother service.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "eat-casablanca-moods-marina",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family", "business-friendly", "large-groups"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea", "dinner", "late-night"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Mediterranean", "Italian", "Cafe & Pastry", "Moroccan", "International"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["first-timer", "nomad", "luxury"],
      vibeTags: ["ocean-view", "marina-terrace", "gourmet-brunch", "wood-fired-pizza"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 15,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "breakfast",
        "brunch",
        "lunch",
        "afternoon-tea",
        "dinner",
        "late-night",
        "cafes-tea",
        "halal",
        "vegetarian",
        "dry",
        "wifi",
        "ac",
        "terrace",
        "parking",
        "delivery",
        "wheelchair-accessible",
        "couple",
        "family",
        "ramadan-friendly"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true,
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Moods Café-Restaurant",
      neighborhood: "Centre-Ville",
      district: "Casablanca Marina (Marina Shopping)",
      description: "Spacious, light-filled waterfront café-restaurant at Marina Shopping on Rue Mourabitine with panoramic Atlantic views, all-day themed brunch formulas (Tangerois, French, Italian, Lebanese), wood-fired pizzas, risottos, and valet parking.",
      tip: "Ask for a window or waterfront terrace seat overlooking the Atlantic; great spot for morning Tangerois brunch or quiet weekday laptop work with free Wi-Fi.",
      badge: "local-favorite",
      bestDishes: [
        "Formule Petit-Déjeuner Tangerois",
        "Truffle Cream Risotto",
        "Seafood Wood-Fired Pizza",
        "Tagliatelle Roquefort & Mushrooms"
      ],
      pros: [
        "Panoramic Atlantic & Casablanca Marina views with indoor and outdoor terrace seating",
        "Massive all-day menu from 08:00 to 00:00 covering Moroccan/international brunches, pizzas, pastas, and seafood",
        "High guest praise (4.8★ across 13,000+ reviews) for attentive hospitality, free Wi-Fi, and mall/valet parking"
      ],
      cons: [
        "Marina-tier pricing (~105–135 MAD breakfast sets, ~75–170 MAD mains)",
        "Popular waterfront tables fill quickly during weekend brunch and sunset hours"
      ],
      googleRating: 4.8,
      googleReviewCount: 13000,
      openTime: "08:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Marina Shopping, Rue Mourabitine, Casablanca 20000, Morocco",
        lat: 33.60699,
        lng: -7.62064
      },
      googleMapsUrl: "https://maps.google.com/?q=33.60699,-7.62064",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522202025",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://moods.ma",
      instagram: "https://www.instagram.com/moods.caferestaurant/",
      languagesSpoken: ["Arabic", "French", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "breakfast-brunch",
            title: "Breakfast & Brunch Formulas",
            description: "All-morning Moroccan and international breakfast spreads served with hot drinks and fresh juice (Pinjoy / Casablanca Marina rates).",
            items: [
              { id: "moods-brunch-tangerois", name: "Formule Tangerois (Moroccan Spread)", description: "Baghrir, msemmen, harcha, batbout, khlii with eggs, bissara, mint tea, and fresh orange juice (105–135 MAD).", price: 120, isSignature: true, dietary: ["halal"] },
              { id: "moods-brunch-intl", name: "Made in France / Italy / Healthy / Libanais Set", description: "Themed set with viennoiserie, eggs-to-order, avocado bruschetta, muesli, or Lebanese mezze (95–130 MAD).", price: 115, isSignature: true, dietary: ["halal"] },
              { id: "moods-muesli", name: "Muesli & Oats Bowl", description: "Chilled oats, yogurt, fresh fruit, and honey.", price: 60, dietary: ["halal", "vegetarian"] },
              { id: "moods-eggs-khlii", name: "Tagine d'Œufs au Khlii", description: "Traditional clay-pot baked eggs with spiced preserved beef.", price: 40, dietary: ["halal"] }
            ]
          },
          {
            id: "pizzas-pastas-mains",
            title: "Wood-Fired Pizzas, Pasta & Risotto",
            description: "Mediterranean mains, seafood pizzas, and creamy risottos (Pinjoy / Tablio rates).",
            items: [
              { id: "moods-risotto-truffle", name: "Truffle Cream or Seafood Risotto", description: "Creamy Arborio risotto finished with truffle cream or fresh Atlantic seafood (110–170 MAD).", price: 145, isSignature: true, dietary: ["halal"] },
              { id: "moods-pizza-seafood", name: "Pizza aux Fruits de Mer", description: "Wood-fired pizza topped with shrimp, calamari, tomato sauce, and mozzarella.", price: 120, isSignature: true, dietary: ["halal"] },
              { id: "moods-pizza-truffle", name: "Pizza Quatre Fromages / Truffe", description: "Four-cheese or truffle-creamed artisan pizza.", price: 110, dietary: ["halal", "vegetarian"] },
              { id: "moods-pizza-margherita", name: "Pizza Margherita / Végétarienne", description: "Classic tomato, mozzarella, and basil or roasted seasonal vegetables (75–85 MAD).", price: 80, dietary: ["halal", "vegetarian"] }
            ]
          },
          {
            id: "coffee-tea",
            title: "Coffee & Moroccan Mint Tea",
            description: "All-day café beverages.",
            items: [
              { id: "moods-cappuccino", name: "Cappuccino", description: "Espresso with rich steamed milk foam.", price: 42, dietary: ["halal", "vegetarian"] },
              { id: "moods-mint-tea", name: "Moroccan Mint Tea", description: "Freshly brewed green tea with spearmint.", price: 32, dietary: ["halal", "vegan", "vegetarian"] },
              { id: "moods-espresso", name: "Espresso", description: "Single-shot Italian-style espresso.", price: 27, dietary: ["halal", "vegan", "vegetarian"] }
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
        tag: "Marina Mid-Upper Pricing",
        tagColor: "money",
        tone: "good",
        description: "Clearly itemized menu (~100–170 MAD per meal; coffees 27–42 MAD) aligned with Casablanca Marina dining, accepting cards and cash.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Marina Kitchen Standard",
        tagColor: "water",
        tone: "good",
        description: "Well-maintained modern restaurant inside Marina Shopping with high daily volume and reliable kitchen hygiene.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Mediterranean & Moroccan Brunch",
        tagColor: "food",
        tone: "good",
        description: "Broad Mediterranean-international menu paired with traditional Tangerois breakfast spreads and khlii egg tagines; completely dry.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Ocean Views + Free Wi-Fi",
        tagColor: "safety",
        tone: "good",
        description: "Bright, panoramic oceanfront setting at Marina Shopping with valet/mall parking, outdoor terrace, and Wi-Fi suitable for casual remote work.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "4.8★ Attentive Hospitality",
        tagColor: "safety",
        tone: "good",
        description: "Consistently praised across 13,000+ Google reviews for warm, professional service from 08:00 to midnight; reserve or go early on weekends.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  }
];
