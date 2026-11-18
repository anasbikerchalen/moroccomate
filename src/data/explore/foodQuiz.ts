/**
 * =========================================================================
 * FOOD & DRINK — DECISION-TREE QUIZ (3 branches: Eat, Coffee & Tea, Bars)
 * =========================================================================
 * Step 1 ('food-intent') routes travelers to what they actually want right now:
 *   🍽️ branch-eat    — Eat a Meal (full dining, street food, seafood, fine dining)
 *   ☕ branch-coffee — Coffee & Tea (cafés, mint tea, juices, pastries, Wi-Fi spots)
 *   🍸 branch-bars   — Bars & Nightlife (rooftop bars, cocktail lounges, live music)
 *
 * Eat branch keeps the full culinary personalization path (budget, group,
 * meal time, dietary, cuisine, mood). Coffee & Tea and Bars & Nightlife
 * route into focused 3-step drink branches (4 steps total).
 */

import type { QuizQuestion } from './questions';

import foodBranchEatMeal from '../../assets/images/food_branch_eat_meal_1794952688400.jpg';
import foodBranchCoffeeTea from '../../assets/images/food_branch_coffee_tea_1794952688189.jpg';
import foodBranchBarsNightlife from '../../assets/images/food_branch_bars_nightlife_1794952688562.jpg';
import foodCoffeeJuices from '../../assets/images/food_coffee_juices_1794952689697.jpg';
import foodCoffeeWifi from '../../assets/images/food_coffee_wifi_1794952689884.jpg';
import foodBarsCocktails from '../../assets/images/food_bars_cocktails_1794952689402.jpg';
import foodBarsLiveMusic from '../../assets/images/food_bars_live_music_1794953254849.jpg';
import foodBarsCasualSocial from '../../assets/images/food_bars_casual_social_1794953255915.jpg';

import eatQuizCuisineCafePastry from '../../assets/images/quizzes/eat/eat_quiz_cuisine_cafe_pastry.jpg';
import eatQuizCafesTea from '../../assets/images/quizzes/eat/eat_quiz_cafes_tea_1786297431722.jpg';
import eatQuizSnacks from '../../assets/images/quizzes/eat/eat_quiz_snacks.jpg';
import eatQuizRooftop from '../../assets/images/quizzes/eat/eat_quiz_rooftop.jpg';
import eatQuizDrinks from '../../assets/images/quizzes/eat/eat_quiz_drinks.jpg';
import eatQuizFine from '../../assets/images/quizzes/eat/eat_quiz_fine.jpg';
import eatQuizFineDining from '../../assets/images/quizzes/eat/eat_quiz_fine_dining_1786297418437.jpg';
import eatLifestyleLean from '../../assets/images/quizzes/eat/eat_lifestyle_lean_1787150666212.jpg';
import eatLifestyleBalanced from '../../assets/images/quizzes/eat/eat_lifestyle_balanced_1787150679681.jpg';
import eatLifestylePremium from '../../assets/images/quizzes/eat/eat_lifestyle_premium_1787150690000.jpg';
import gardenCourtyardDining from '../../assets/images/garden_courtyard_dining_1791664460105.jpg';

export const FOOD_TREE_ROOT_ID = 'food-intent';

export const FOOD_TREE_ROOT_QUESTION: QuizQuestion = {
  id: FOOD_TREE_ROOT_ID,
  question: 'What are you in the mood for?',
  weight: 'hard',
  options: [
    {
      id: 'branch-eat',
      label: 'Eat a Meal',
      tag: 'branch-eat',
      sub: 'Tagines, street bites, fresh seafood, or fine dining',
    },
    {
      id: 'branch-coffee',
      label: 'Coffee & Tea',
      tag: 'branch-coffee',
      sub: 'Specialty cafés, mint tea terraces, pastries & fresh juices',
    },
    {
      id: 'branch-bars',
      label: 'Bars & Nightlife',
      tag: 'branch-bars',
      sub: 'Sunset rooftop bars, cocktail lounges, wine spots & live music',
    },
  ],
};

export const EAT_MEAL_QUESTIONS: QuizQuestion[] = [
  {
    id: 'base-lifestyle',
    question: "What's your spending style for this trip?",
    isContext: true,
    weight: 'hard',
    options: [
      { id: 'lean', label: 'Lean & Local', tag: 'lean', sub: 'Best value, local gems, authentic savings' },
      { id: 'balanced', label: 'Balanced & Sweet', tag: 'balanced', sub: 'Comfort meets authenticity, mid-range gems' },
      { id: 'premium', label: 'Premium & Effortless', tag: 'premium', sub: 'Hand-picked excellence, top-tier comfort' },
    ],
  },
  {
    id: 'base-group',
    question: 'Who are you exploring with?',
    isContext: true,
    weight: 'strong',
    options: [
      { id: 'solo', label: 'Solo', tag: 'solo', icon: '👤' },
      { id: 'couple', label: 'Couple', tag: 'couple', icon: '👩‍❤️‍👨' },
      { id: 'family', label: 'Family', tag: 'family', icon: '👨‍👩‍👧‍👦', sub: 'Kids with us' },
      { id: 'friends', label: 'Friends', tag: 'friends', icon: '👥' },
    ],
  },
  {
    id: 'food-time',
    question: 'When are you planning to eat?',
    options: [
      { id: 'breakfast', label: 'Morning / Breakfast', tag: 'breakfast', icon: '🍳' },
      { id: 'lunch', label: 'Mid-day / Lunch', tag: 'lunch', icon: '☀️' },
      { id: 'dinner', label: 'Evening / Dinner', tag: 'dinner', icon: '🌙' },
      { id: 'flexible', label: 'Anytime / Snacks', tag: 'flexible', icon: '🥨' },
    ],
  },
  {
    id: 'food-diet',
    question: 'Any dietary preferences?',
    multiSelect: true,
    weight: 'hard',
    options: [
      { id: 'halal', label: 'Halal Only', tag: 'halal', icon: '🥩' },
      { id: 'vegetarian', label: 'Vegetarian Friendly', tag: 'vegetarian', icon: '🥬' },
      { id: 'alcohol', label: 'Serves Alcohol', tag: 'alcohol', icon: '🍷' },
    ],
  },
  {
    id: 'food-cuisine',
    question: 'What kind of food are you craving?',
    options: [
      { id: 'moroccan-traditional', label: 'Traditional Moroccan', tag: 'moroccan-traditional', icon: '🍲', sub: 'Tagine, couscous, pastilla, the real deal' },
      { id: 'international', label: 'International & Fusion', tag: 'international', icon: '🌍', sub: 'Italian, Asian, French, or creative fusion' },
      { id: 'cafe-pastry', label: 'Café & Pastries', tag: 'cafe-pastry', icon: '☕', sub: 'Coffee spots, patisseries, and sweet treats' },
      { id: 'seafood', label: 'Fresh Seafood', tag: 'seafood', icon: '🐟', sub: 'Ocean-fresh catch and coastal dishes' },
    ],
  },
  {
    id: 'food-vibe',
    question: "What's the dining mood?",
    options: [
      { id: 'rooftop', label: 'Rooftop & Views', tag: 'rooftop', icon: '🌇' },
      { id: 'street', label: 'Authentic Street Food', tag: 'street-food', icon: '🌮' },
      { id: 'fine', label: 'Modern & Chic', tag: 'fine-dining', icon: '✨' },
      { id: 'hole', label: 'Hidden Local Gem', tag: 'hole-in-wall', icon: '🏠' },
    ],
  },
];

export const COFFEE_TEA_QUESTIONS: QuizQuestion[] = [
  {
    id: 'coffee-drink',
    question: 'What would you like to drink or enjoy?',
    weight: 'strong',
    options: [
      { id: 'specialty-coffee', label: 'Specialty Coffee & Espresso', tag: 'coffee', sub: 'Cappuccinos, pour-overs, and iced lattes' },
      { id: 'mint-tea', label: 'Traditional Mint Tea', tag: 'tea', sub: 'Moroccan à la menthe and herbal infusions' },
      { id: 'fresh-juice', label: 'Fresh Juices & Smoothies', tag: 'juice', sub: 'Pressed citrus and creamy zâazâa shakes' },
      { id: 'cafe-pastries', label: 'Pastries & Sweet Café', tag: 'cafe-pastry', sub: 'Croissants, gazelle horns, and desserts' },
    ],
  },
  {
    id: 'coffee-setting',
    question: 'What café setting fits your moment?',
    weight: 'strong',
    options: [
      { id: 'wifi-work', label: 'Laptop & Quiet Wi-Fi', tag: 'wifi', sub: 'Reliable Wi-Fi and calm tables to read or work' },
      { id: 'sunny-terrace', label: 'Sunny Street Terrace', tag: 'terrace', sub: 'People-watching and vibrant street energy' },
      { id: 'quiet-courtyard', label: 'Shaded Garden Courtyard', tag: 'courtyard', sub: 'Peaceful riad oasis away from street noise' },
      { id: 'rooftop-cafe', label: 'Rooftop Café View', tag: 'rooftop', sub: 'Skyline tea or coffee above the medina' },
    ],
  },
  {
    id: 'coffee-tier',
    question: 'What café style do you prefer?',
    options: [
      { id: 'local-cafe', label: 'Local Neighborhood Café', tag: 'lean', sub: 'Classic Moroccan spot, 15–35 MAD' },
      { id: 'boutique-cafe', label: 'Boutique Roastery & Salon', tag: 'balanced', sub: 'Curated specialty café, 40–90 MAD' },
    ],
  },
];

export const BARS_NIGHTLIFE_QUESTIONS: QuizQuestion[] = [
  {
    id: 'bars-type',
    question: 'What kind of evening spot are you looking for?',
    weight: 'strong',
    options: [
      { id: 'sunset-rooftop-bar', label: 'Sunset Rooftop Bar', tag: 'rooftop', sub: 'Panoramic terrace drinks at golden hour' },
      { id: 'cocktail-wine-lounge', label: 'Cocktail & Wine Lounge', tag: 'cocktails', sub: 'Craft mixology, Moroccan wines, and aperitifs' },
      { id: 'live-music-bar', label: 'Live Music & Jazz Bar', tag: 'live-music', sub: 'Acoustic jazz, Gnawa fusion, or DJ nights' },
      { id: 'casual-social-bar', label: 'Casual Social Bar', tag: 'drinks', sub: 'Relaxed beers, lively tables, easy walk-in' },
    ],
  },
  {
    id: 'bars-vibe',
    question: 'What atmosphere fits your night?',
    options: [
      { id: 'intimate-date', label: 'Intimate & Romantic', tag: 'couple', sub: 'Candlelit corners and easy conversation' },
      { id: 'lively-friends', label: 'Lively & Social', tag: 'friends', sub: 'Energetic crowd, great with friends' },
      { id: 'upscale-chic', label: 'Upscale & Chic', tag: 'fine-dining', sub: 'Stylish dress-up lounge or hotel bar' },
    ],
  },
  {
    id: 'bars-budget',
    question: 'What spending tier feels right?',
    weight: 'strong',
    options: [
      { id: 'accessible-bar', label: 'Accessible & Casual', tag: 'lean', sub: 'Easygoing drinks without luxury markup' },
      { id: 'stylish-mid-bar', label: 'Mid-Range & Stylish', tag: 'balanced', sub: 'Great cocktails and ambiance, balanced bill' },
      { id: 'luxury-palace-bar', label: 'Luxury Palace Lounge', tag: 'premium', sub: 'Iconic five-star bars and bespoke service' },
    ],
  },
];

export const FOOD_BRANCH_QUESTIONS: Record<string, QuizQuestion[]> = {
  'branch-eat': EAT_MEAL_QUESTIONS,
  'branch-coffee': COFFEE_TEA_QUESTIONS,
  'branch-bars': BARS_NIGHTLIFE_QUESTIONS,
};

export const FOOD_TREE_ALL_QUESTIONS: QuizQuestion[] = [
  FOOD_TREE_ROOT_QUESTION,
  ...EAT_MEAL_QUESTIONS,
  ...COFFEE_TEA_QUESTIONS,
  ...BARS_NIGHTLIFE_QUESTIONS,
];

export const getFoodTreeQuestions = (branchId?: string | null): QuizQuestion[] => [
  FOOD_TREE_ROOT_QUESTION,
  ...(branchId ? FOOD_BRANCH_QUESTIONS[branchId] || [] : []),
];

export const FOOD_TREE_OPTION_IDS: Set<string> = new Set([
  'branch-eat',
  'branch-coffee',
  'branch-bars',
  ...COFFEE_TEA_QUESTIONS.flatMap((q) => q.options.map((o) => o.id)),
  ...BARS_NIGHTLIFE_QUESTIONS.flatMap((q) => q.options.map((o) => o.id)),
]);

export const FOOD_TREE_FOLLOW_UP_QUESTION_IDS: Set<string> = new Set([
  ...EAT_MEAL_QUESTIONS.map((q) => q.id),
  ...COFFEE_TEA_QUESTIONS.map((q) => q.id),
  ...BARS_NIGHTLIFE_QUESTIONS.map((q) => q.id),
]);

export type FoodQuizMatchResult = 'match' | 'miss' | 'neutral';

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hasKeyword = (text: string, kw: string): boolean =>
  new RegExp(`\\b${escapeRe(kw)}(?:s|es)?\\b`, 'i').test(text);

function buildEatSearchablePool(item: any) {
  const tags: string[] = (Array.isArray(item?.tags) ? item.tags : []).map((t: any) => String(t).toLowerCase());
  const vibeTags: string[] = (Array.isArray(item?.vibeTags) ? item.vibeTags : []).map((t: any) => String(t).toLowerCase());
  const mealTypes: string[] = (Array.isArray(item?.mealTypes) ? item.mealTypes : []).map((t: any) => String(t).toLowerCase());
  const experienceTypes: string[] = (Array.isArray(item?.experienceTypes) ? item.experienceTypes : []).map((t: any) => String(t).toLowerCase());
  const foodStyles: string[] = (Array.isArray(item?.foodStyles) ? item.foodStyles : []).map((t: any) => String(t).toLowerCase());
  const cuisineTags: string[] = (Array.isArray(item?.cuisineTags) ? item.cuisineTags : []).map((t: any) => String(t).toLowerCase());
  const seatingTypes: string[] = (Array.isArray(item?.seatingTypes) ? item.seatingTypes : []).map((t: any) => String(t).toLowerCase());
  const groupTypes: string[] = (Array.isArray(item?.groupTypes) ? item.groupTypes : []).map((t: any) => String(t).toLowerCase());
  const lifestyle = String(item?.lifestyle || '').toLowerCase();
  const crowdLevel = String(item?.crowdLevel || '').toLowerCase();
  const text = [
    item?.name,
    item?.description,
    item?.tip,
    ...(Array.isArray(item?.bestDishes) ? item.bestDishes : []),
    ...tags,
    ...vibeTags,
    ...foodStyles,
    ...experienceTypes,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return {
    tags,
    vibeTags,
    mealTypes,
    experienceTypes,
    foodStyles,
    cuisineTags,
    seatingTypes,
    groupTypes,
    lifestyle,
    crowdLevel,
    text,
  };
}

export function evaluateFoodQuizAnswer(item: any, optionId: string): FoodQuizMatchResult {
  const p = buildEatSearchablePool(item);
  const anyKw = (kws: string[]) =>
    kws.some((k) => p.tags.includes(k) || p.vibeTags.includes(k) || hasKeyword(p.text, k));

  switch (optionId) {
    // ── Step 1: Core Intent ──
    case 'branch-eat': {
      const hasMeal =
        p.mealTypes.some((m) => ['lunch', 'dinner', 'breakfast', 'brunch'].includes(m)) ||
        p.experienceTypes.some((e) =>
          ['traditional', 'street-food', 'fine-dining', 'casual', 'market-stall'].includes(e)
        ) ||
        p.foodStyles.some((f) => !f.includes('cafe') && !f.includes('pastry'));
      return hasMeal ? 'match' : 'miss';
    }

    case 'branch-coffee': {
      const isCafeOrTea =
        p.experienceTypes.includes('cafes-tea') ||
        p.cuisineTags.includes('cafe-pastry') ||
        p.foodStyles.some((f) =>
          f.includes('cafe') || f.includes('pastry') || f.includes('bakery') || f.includes('tea') || f.includes('coffee')
        ) ||
        p.mealTypes.includes('afternoon-tea') ||
        anyKw([
          'cafe', 'café', 'coffee', 'espresso', 'latte', 'tea', 'mint tea',
          'patisserie', 'pastry', 'bakery', 'juice', 'smoothie', 'salon de the'
        ]);
      return isCafeOrTea ? 'match' : 'miss';
    }

    case 'branch-bars': {
      const isBarOrDrinks =
        item?.servesAlcohol === true ||
        String(item?.alcoholPolicy || '').toLowerCase() === 'serves-alcohol' ||
        p.mealTypes.includes('drinks') ||
        anyKw(['cocktail', 'cocktails', 'bar', 'wine', 'beer', 'lounge', 'nightlife', 'pub', 'rooftop-bar', 'wine-lounge', 'dj', 'aperitif']);
      if (isBarOrDrinks) return 'match';
      if (item?.servesAlcohol === false && String(item?.alcoholPolicy || '').toLowerCase() === 'dry') {
        return 'miss';
      }
      return 'miss';
    }

    // ── Coffee & Tea Branch ──
    case 'specialty-coffee':
      return p.experienceTypes.includes('cafes-tea') ||
        p.cuisineTags.includes('cafe-pastry') ||
        anyKw(['coffee', 'espresso', 'cappuccino', 'latte', 'roaster', 'roastery', 'cafe', 'café'])
        ? 'match'
        : 'miss';

    case 'mint-tea':
      return p.mealTypes.includes('afternoon-tea') ||
        p.experienceTypes.includes('cafes-tea') ||
        anyKw(['mint tea', 'tea', 'thé', 'atay', 'herbal', 'salon de the', 'afternoon-tea'])
        ? 'match'
        : 'miss';

    case 'fresh-juice':
      return anyKw(['juice', 'jus', 'smoothie', 'zaazaa', 'shake', 'citrus', 'orange', 'avocado']) ||
        p.mealTypes.includes('snack')
        ? 'match'
        : 'neutral';

    case 'cafe-pastries':
      return p.cuisineTags.includes('cafe-pastry') ||
        p.foodStyles.some((f) => f.includes('pastry') || f.includes('cafe')) ||
        anyKw(['pastry', 'pastries', 'patisserie', 'croissant', 'bakery', 'gazelle', 'chebakia', 'msemmen', 'sweet'])
        ? 'match'
        : 'miss';

    case 'wifi-work':
      if (item?.wiFi === true || p.tags.includes('wifi') || anyKw(['wifi', 'wi-fi', 'laptop', 'cowork', 'nomad', 'work'])) {
        return 'match';
      }
      return item?.wiFi === false ? 'miss' : 'neutral';

    case 'sunny-terrace':
      return p.seatingTypes.some((s) => ['terrace', 'outdoor', 'street-side'].includes(s)) ||
        anyKw(['terrace', 'terrasse', 'patio', 'street-side', 'outdoor', 'sunny'])
        ? 'match'
        : 'neutral';

    case 'quiet-courtyard':
      return p.seatingTypes.includes('courtyard') ||
        p.crowdLevel === 'quiet' ||
        anyKw(['courtyard', 'garden', 'riad', 'shaded', 'quiet', 'oasis', 'peaceful'])
        ? 'match'
        : 'neutral';

    case 'rooftop-cafe':
      return p.seatingTypes.includes('rooftop') ||
        p.experienceTypes.includes('rooftop') ||
        anyKw(['rooftop', 'panoramic', 'skyline', 'view'])
        ? 'match'
        : 'miss';

    case 'local-cafe':
      if (p.lifestyle === 'lean' || item?.badge === 'local' || item?.badge === 'local-favorite') return 'match';
      if (p.lifestyle === 'premium') return 'miss';
      return 'neutral';

    case 'boutique-cafe':
      if (p.lifestyle === 'balanced' || p.lifestyle === 'premium') return 'match';
      return 'neutral';

    // ── Bars & Nightlife Branch ──
    case 'sunset-rooftop-bar':
      return p.seatingTypes.includes('rooftop') ||
        p.experienceTypes.includes('rooftop') ||
        anyKw(['rooftop', 'rooftop-bar', 'sunset', 'sunset-drinks', 'terrace'])
        ? 'match'
        : 'miss';

    case 'cocktail-wine-lounge':
      return anyKw(['cocktail', 'cocktails', 'wine', 'wine-lounge', 'mixology', 'lounge', 'aperitif', 'bar']) ||
        item?.servesAlcohol === true
        ? 'match'
        : 'miss';

    case 'live-music-bar':
      return anyKw(['live-music', 'live-jazz', 'jazz', 'music', 'dj', 'gnawa', 'acoustic', 'piano', 'band', 'show'])
        ? 'match'
        : 'neutral';

    case 'casual-social-bar':
      return p.lifestyle === 'lean' ||
        p.lifestyle === 'balanced' ||
        p.crowdLevel === 'bustling' ||
        anyKw(['pub', 'beer', 'casual', 'social', 'tapas'])
        ? 'match'
        : 'neutral';

    case 'intimate-date':
      return p.groupTypes.includes('couple') ||
        p.crowdLevel === 'quiet' ||
        anyKw(['romantic', 'intimate', 'candlelit', 'date', 'cozy'])
        ? 'match'
        : 'neutral';

    case 'lively-friends':
      return p.groupTypes.includes('friends') ||
        p.groupTypes.includes('large-groups') ||
        p.crowdLevel === 'bustling' ||
        anyKw(['lively', 'dj', 'social', 'vibrant', 'bustling'])
        ? 'match'
        : 'neutral';

    case 'upscale-chic':
      return p.lifestyle === 'premium' ||
        p.experienceTypes.includes('fine-dining') ||
        anyKw(['chic', 'upscale', 'luxury', 'palace', 'refined', 'stylish', 'elegant'])
        ? 'match'
        : 'neutral';

    case 'accessible-bar':
      if (p.lifestyle === 'lean' || p.lifestyle === 'balanced') return 'match';
      if (p.lifestyle === 'premium') return 'miss';
      return 'neutral';

    case 'stylish-mid-bar':
      if (p.lifestyle === 'balanced') return 'match';
      return 'neutral';

    case 'luxury-palace-bar':
      if (p.lifestyle === 'premium') return 'match';
      if (p.lifestyle === 'lean') return 'miss';
      return 'neutral';

    default:
      return 'neutral';
  }
}

export const matchesFoodQuizAnswer = (item: any, optionId: string): boolean =>
  evaluateFoodQuizAnswer(item, optionId) !== 'miss';

export const FOOD_QUIZ_OPTION_IMAGES: Record<string, string> = {
  // Step 1 — Core Intent
  'branch-eat': foodBranchEatMeal,
  'branch-coffee': foodBranchCoffeeTea,
  'branch-bars': foodBranchBarsNightlife,

  // Coffee & Tea Branch
  'specialty-coffee': eatQuizCuisineCafePastry,
  'mint-tea': eatQuizCafesTea,
  'fresh-juice': foodCoffeeJuices,
  'cafe-pastries': eatQuizSnacks,
  'wifi-work': foodCoffeeWifi,
  'sunny-terrace': eatQuizCafesTea,
  'quiet-courtyard': gardenCourtyardDining,
  'rooftop-cafe': eatQuizRooftop,
  'local-cafe': eatLifestyleLean,
  'boutique-cafe': eatLifestyleBalanced,

  // Bars & Nightlife Branch
  'sunset-rooftop-bar': eatQuizDrinks,
  'cocktail-wine-lounge': foodBarsCocktails,
  'live-music-bar': foodBarsLiveMusic,
  'casual-social-bar': foodBarsCasualSocial,
  'intimate-date': eatQuizFine,
  'lively-friends': foodBarsCasualSocial,
  'upscale-chic': eatQuizFineDining,
  'accessible-bar': foodBarsCasualSocial,
  'stylish-mid-bar': foodBarsCocktails,
  'luxury-palace-bar': eatLifestylePremium,
};
