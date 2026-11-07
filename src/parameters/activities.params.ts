import type { ParameterStep } from './types'

export const activitySteps: ParameterStep[] = [
  {
    id: 'activityStart',
    question: 'Are you in the city right now, or planning ahead?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'here-now', label: 'Yes, I am here now', description: 'I am currently in the city.' },
      { id: 'planning-ahead', label: 'No, planning ahead', description: 'I am outside the city / planning for later.' },
    ],
  },
  {
    id: 'activityDecision',
    question: 'One specific activity or a plan?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'one-activity', label: 'One activity', description: 'I just want to do one specific thing.' },
      { id: 'multi-activity', label: 'Build me a plan', description: 'I want a scheduled sequence of activities.' },
    ],
  },
  {
    id: 'proximityPreference',
    question: 'How far do you want to go?',
    visualType: 'card-choice',
    required: true,
    showIf: (selections) => selections.activityStart === 'here-now' && selections.activityDecision === 'one-activity',
    options: [
      { id: 'walking', label: 'Walking distance', description: 'Within 10-15 minutes on foot.' },
      { id: 'short-taxi', label: 'Short taxi ride', description: 'A quick ride across the city.' },
      { id: 'wherever', label: 'Wherever', description: 'Show me the best activities, no matter the distance.' },
    ],
  },
  {
    id: 'neighborhood',
    question: 'Select your current neighborhood',
    visualType: 'neighborhood-map',
    required: false,
    showIf: (selections) => 
      selections.activityStart === 'here-now' && 
      (selections.proximityPreference === 'walking' || selections.proximityPreference === 'short-taxi'),
    options: [],
  },
  {
    id: 'lifestyle',
    question: 'What kind of traveler are you today?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'lean', label: 'Local and raw', description: 'Low cost · real experiences' },
      { id: 'balanced', label: 'Balanced', description: 'Comfort meets authenticity · best of both' },
      { id: 'premium', label: 'Premium', description: 'Curated · private · elevated experiences' },
    ],
  },
  {
    id: 'experienceCategory',
    question: 'What kind of day do you want?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'culture', label: 'Culture & History', icon: '🏛' },
      { id: 'nature', label: 'Nature & Landscape', icon: '🌿' },
      { id: 'social', label: 'Social & Nightlife', icon: '🎉' },
      { id: 'slow', label: 'Slow & Wellness', icon: '🧘' },
      { id: 'food', label: 'Food-based', icon: '🍲' },
    ],
  },
  {
    id: 'energyLevel',
    question: 'What energy are you bringing today?',
    visualType: 'energy-dial',
    required: true,
    options: [],
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
