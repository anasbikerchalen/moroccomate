import { budgetStep } from './shared.params'
import type { ParameterStep } from './types'

export const experienceTypeByLifestyle: Record<string, string[]> = {
  lean: ['street-food', 'hidden-gems', 'hyper-local', 'cafe'],
  balanced: ['authentic-moroccan', 'hidden-gems', 'mix', 'healthy', 'seafood'],
  premium: ['luxury', 'instagrammable', 'familiar', 'traditional-breakfast'],
}

export const experienceTypeByMeal: Record<string, string[]> = {
  breakfast: ['traditional-breakfast', 'cafe', 'healthy'],
  lunch: ['authentic-moroccan', 'street-food', 'hidden-gems', 'healthy', 'seafood'],
  dinner: ['authentic-moroccan', 'luxury', 'hidden-gems', 'mix', 'seafood'],
  latenight: ['street-food', 'night-food', 'hyper-local'],
  flexible: ['authentic-moroccan', 'hidden-gems', 'street-food', 'luxury', 'cafe', 'seafood', 'hyper-local', 'mix', 'familiar'],
}

export const eatSteps: ParameterStep[] = [
  {
    id: 'eat-start',
    question: 'Are you in the city now?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'here-now', label: '📍 Yes, I am here now', description: 'I am currently in the city.' },
      { id: 'planning-ahead', label: '📅 No, planning ahead', description: 'I am outside the city / planning for later.' },
    ],
  },
  {
    id: 'eat-location-intent',
    question: 'Where exactly are you looking to eat?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'specific-area', label: '📍 Pick an area / Near me', description: 'Search within a neighborhood or landmark.' },
      { id: 'wherever', label: '🌍 Wherever', description: 'Show me the best spots across the city.' },
    ],
  },
  {
    id: 'neighborhood',
    question: 'Select your neighborhood or area',
    visualType: 'neighborhood-map',
    required: false,
    showIf: (selections) => selections['eat-location-intent'] === 'specific-area',
    options: [],
  },
  {
    id: 'meal',
    question: 'What meal are we talking about?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'breakfast', label: '☕ Breakfast', description: 'Start the day right.' },
      { id: 'lunch', label: '☀️ Lunch', description: 'Midday fuel.' },
      { id: 'dinner', label: '🌙 Dinner', description: 'The main event.' },
      { id: 'latenight', label: '🦉 Late night', description: 'After-dark cravings.' },
      { id: 'afternoon-tea', label: '🫖 Afternoon Tea', description: 'Kaskrout time.' },
      { id: 'brunch', label: '🍳 Brunch', description: 'Lazy weekend treat.' },
      { id: 'flexible', label: '🎲 Flexible', description: 'Surprise me.' },
    ],
  },
  {
    id: 'experience-type',
    question: 'What vibe are you craving?',
    visualType: 'card-choice',
    required: false,
    options: [
      { id: 'authentic-moroccan', label: '🇲🇦 Authentic Moroccan food' },
      { id: 'hidden-gems', label: '💎 Local hidden gems' },
      { id: 'luxury', label: '✨ Fine dining' },
      { id: 'street-food', label: '🥙 Street food' },
      { id: 'cafe', label: '☕ Cafes and chill places' },
      { id: 'healthy', label: '🥗 Healthy food' },
      { id: 'seafood', label: '🐟 Seafood' },
      { id: 'night-food', label: '🌃 Night food' },
      { id: 'rooftop', label: '🌇 Rooftop with a view' },
      { id: 'riad-dining', label: '🏡 Riad courtyard dining' },
      { id: 'hyper-local', label: '🏠 Where locals actually eat' },
      { id: 'mix', label: '⚖️ Local spots with some comfort' },
      { id: 'familiar', label: '🗺️ Tourist-friendly options' },
    ],
  },
  {
    id: 'food-style',
    question: 'Any food rules we should know about?',
    visualType: 'pill-choice',
    multiSelect: true,
    required: false,
    options: [
      { id: 'moroccan', label: '🇲🇦 Moroccan' },
      { id: 'berber', label: '🏔️ Amazigh / Berber' },
      { id: 'mediterranean', label: '🌊 Mediterranean' },
      { id: 'international', label: '🌐 International' },
      { id: 'vegetarian', label: '🥦 Vegetarian' },
      { id: 'vegan', label: '🌿 Vegan' },
      { id: 'halal', label: '🌙 Halal only' },
      { id: 'pescatarian', label: '🐟 Pescatarian' },
      { id: 'seafood', label: '🦐 Seafood' },
      { id: 'no-pork', label: '🚫 No pork' },
      { id: 'gluten-free', label: '🌾 Gluten-free' },
    ],
  },
  {
    id: 'lifestyle',
    question: 'How do you want to eat today?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'lean', label: '🏷️ Street-side and casual', description: 'Cheap, authentic, no fuss.' },
      { id: 'balanced', label: '⚖️ Comfortable and cozy', description: 'Nice setting, fair price.' },
      { id: 'premium', label: '✨ Fine dining', description: 'The best the city offers.' },
    ],
  },
  {
    id: 'group-type',
    question: "Who's joining you at the table?",
    visualType: 'pill-choice',
    required: false,
    options: [
      { id: 'solo', label: '👤 Solo' },
      { id: 'couple', label: '👫 Couple' },
      { id: 'family', label: '👨‍👩‍👧 Family with kids' },
      { id: 'kids-friendly', label: '🧸 Kids-friendly' },
      { id: 'friends', label: '👥 Friends group' },
      { id: 'large-groups', label: '🐘 Large groups' },
      { id: 'business-friendly', label: '💼 Business-friendly' },
      { id: 'seniors', label: '🧓 Senior travelers' },
    ],
  },
  budgetStep,
  {
    id: 'reservationMethod',
    question: 'How do you prefer to handle reservations?',
    visualType: 'card-choice',
    required: false,
    options: [
      { id: 'walk-in', label: '🚶 Walk-in', description: 'No planning needed.' },
      { id: 'phone', label: '📞 Phone Call', description: 'Quick call to secure a table.' },
      { id: 'online', label: '💻 Online / WhatsApp', description: 'Digital booking preferred.' },
      { id: 'required', label: '⚠️ Required Only', description: 'Show me places where I MUST book.' },
    ],
  },
]

export const eatMoreFilters: string[] = [
  'group-type', 
  'food-style', 
  'lifestyle', 
  'budgetMax',
  'alcoholPolicy',
  'paymentMethods',
  'reservationMethod'
]
