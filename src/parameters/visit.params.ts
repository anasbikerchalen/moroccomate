import type { ParameterStep } from './types'

export const visitSteps: ParameterStep[] = [
  {
    id: 'visitStart',
    question: 'Are you in the city right now, or planning ahead?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'here-now', label: 'Yes, I am here now', description: 'I am currently in the city.' },
      { id: 'planning-ahead', label: 'No, planning ahead', description: 'I am outside the city / planning for later.' },
    ],
  },
  {
    id: 'visitDecision',
    question: 'One specific place or a plan?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'one-place', label: 'One specific place', description: 'I just want to visit one spot.' },
      { id: 'multi-place', label: 'Build me a plan', description: 'I want to see multiple places in a smart route.' },
    ],
  },
  {
    id: 'proximityPreference',
    question: 'How far do you want to go?',
    visualType: 'card-choice',
    required: true,
    showIf: (selections) => selections.visitStart === 'here-now' && selections.visitDecision === 'one-place',
    options: [
      { id: 'walking', label: 'Walking distance', description: 'Within 10-15 minutes on foot.' },
      { id: 'short-taxi', label: 'Short taxi ride', description: 'A quick ride across the city.' },
      { id: 'wherever', label: 'Wherever', description: 'Show me the best spots, no matter the distance.' },
    ],
  },
  {
    id: 'neighborhood',
    question: 'Select your current neighborhood',
    visualType: 'neighborhood-map',
    required: false,
    showIf: (selections) => 
      selections.visitStart === 'here-now' && 
      (selections.proximityPreference === 'walking' || selections.proximityPreference === 'short-taxi'),
    options: [],
  },
  {
    id: 'mainInterests',
    question: 'What draws you to this city?',
    visualType: 'card-choice',
    multiSelect: true,
    required: true,
    options: [
      { id: 'culture', label: 'Culture & History', icon: '🏛' },
      { id: 'nature', label: 'Nature & Landscape', icon: '🌿' },
      { id: 'shopping', label: 'Shopping & Crafts', icon: '🛍' },
      { id: 'adventure', label: 'Adventure & Sports', icon: '🧗' },
    ],
  },
  {
    id: 'lifestyle',
    question: 'How do you want to explore?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'lean', label: 'Budget-friendly', description: 'Free sites · walking · no paid guides' },
      { id: 'balanced', label: 'Comfortable', description: 'Mix of free and paid · occasional guide' },
      { id: 'premium', label: 'Luxury', description: 'Private guides · skip-the-line · exclusive access' },
    ],
  },
  {
    id: 'groupType',
    question: "Who's coming along?",
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'solo', label: 'Solo', icon: '👤' },
      { id: 'couple', label: 'Couple', icon: '👫' },
      { id: 'family', label: 'Family with kids', icon: '👨‍👩‍👧' },
      { id: 'friends', label: 'Friends group', icon: '👥' },
      { id: 'seniors', label: 'Senior travelers', icon: '🧓' },
    ],
  },
]

export const visitMoreFilters: string[] = [
  'safety-sensitivity',
  'transport-mode',
  'language-preference',
]
