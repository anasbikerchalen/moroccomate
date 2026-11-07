import { budgetStep } from './shared.params'
import type { ParameterStep } from './types'

export const sleepSteps: ParameterStep[] = [
  {
    id: 'sleep-start',
    question: 'Are you in the city now?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'here-now', label: '📍 Yes, I am here now', description: 'I am currently in the city.' },
      { id: 'planning-ahead', label: '📅 No, planning ahead', description: 'I am outside the city / planning for later.' },
    ],
  },
  {
    id: 'sleep-location-intent',
    question: 'Where exactly are you looking to stay?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'specific-area', label: '📍 Pick an area / Near me', description: 'Search within a neighborhood or landmark.' },
      { id: 'wherever', label: '🌍 Wherever', description: 'Show me the best spots across the city.' },
    ],
  },
  {
    id: 'neighborhood',
    question: 'Select your preferred neighborhood or area',
    visualType: 'neighborhood-map',
    required: false,
    showIf: (selections) => selections['sleep-location-intent'] === 'specific-area',
    options: [],
  },
  {
    id: 'group-type',
    question: "Who's coming along tonight?",
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'solo', label: '👤 Solo', icon: '👤' },
      { id: 'couple', label: '👫 Couple', icon: '👫' },
      { id: 'family', label: '👨‍👩‍👧 Family with kids', icon: '👨‍👩‍👧' },
      { id: 'friends', label: '👥 Friends group', icon: '👥' },
      { id: 'seniors', label: '🧓 Senior travelers', icon: '🧓' },
    ],
  },
  {
    id: 'accommodation-type',
    question: 'What kind of place feels like home tonight?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'riad', label: '🏰 Riad', description: 'Traditional courtyard house', icon: '🏰' },
      { id: 'dar', label: '🏠 Dar', description: 'Simpler local family home', icon: '🏠' },
      { id: 'desert-camp', label: '🏕 Desert Camp', description: 'Under the stars', icon: '🏕' },
      { id: 'kasbah', label: '🏯 Kasbah', description: 'Fortress-style mountain stay', icon: '🏯' },
      { id: 'hotel', label: '🏨 Hotel or Resort', description: 'Modern comfort and service', icon: '🏨' },
      { id: 'guesthouse', label: '🏡 Guest House', description: 'Homey and personal', icon: '🏡' },
      { id: 'hostel', label: '🛏 Hostel', description: 'Social and budget-friendly', icon: '🛏' },
    ],
  },
  {
    id: 'lifestyle',
    question: 'How do you want to travel tonight?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'lean', label: '🏷️ Budget-friendly', description: 'Hostels · basic private rooms · local feel' },
      { id: 'balanced', label: '⚖️ Comfortable', description: 'Mid-range riads · good comfort · real Morocco' },
      { id: 'premium', label: '✨ Luxury', description: 'Boutique riads · full service · curated stays' },
    ],
  },
  {
    id: 'must-haves',
    question: 'Anything you absolutely need? Pick all that matter.',
    visualType: 'toggle-grid',
    multiSelect: true,
    required: false,
    options: [
      { id: 'ensuite', label: '🚿 En-suite bathroom' },
      { id: 'ac', label: '❄️ Air conditioning' },
      { id: 'rooftop', label: '🌇 Rooftop terrace' },
      { id: 'near-medina', label: '🕌 Near the Medina' },
      { id: 'breakfast', label: '🍳 Free breakfast' },
      { id: 'pool', label: '🏊 Pool access' },
      { id: 'wifi', label: '📡 Wi-Fi that works' },
    ],
  },
  budgetStep,
  {
    id: 'call-to-prayer',
    question: 'Heads up — the call to prayer starts at 5am near the medina. How do you feel about that?',
    visualType: 'pill-choice',
    required: false,
    showIf: (selections) =>
      ['marrakech', 'fes'].includes(selections.city ?? '') &&
      selections.neighborhood !== 'gueliz' &&
      selections.neighborhood !== 'hivernage',
    options: [
      { id: 'need-quiet', label: '🔇 I need quiet — keep me away from mosques' },
      { id: 'fine', label: '🕌 Fine — it is part of the experience' },
    ],
  },
]

export const sleepMoreFilters: string[] = [
  'safety-sensitivity',
  'transport-mode',
  'language-preference',
  'budgetMax',
]
