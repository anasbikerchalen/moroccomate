import { budgetStep } from './shared.params'
import type { ParameterStep } from './types'

export const thingsToDoSteps: ParameterStep[] = [
  {
    id: 'todo-start',
    question: 'Are you in the city now?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'here-now', label: '📍 Yes, I am here now', description: 'I am currently in the city.' },
      { id: 'planning-ahead', label: '📅 No, planning ahead', description: 'I am outside the city / planning for later.' },
    ],
  },
  {
    id: 'todo-location-intent',
    question: 'Where exactly are you looking to explore?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'specific-area', label: '📍 Pick an area / Near me', description: 'Search within a neighborhood or landmark.' },
      { id: 'wherever', label: '🌍 Wherever', description: 'Show me the best spots across the city.' },
    ],
  },
  {
    id: 'neighborhood',
    question: 'Select your current neighborhood or area',
    visualType: 'neighborhood-map',
    required: false,
    showIf: (selections) => selections['todo-location-intent'] === 'specific-area',
    options: [],
  },
  {
    id: 'exploration-mode',
    question: 'How would you like to explore today?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'one-specific', label: '📍 One specific thing', description: 'I just want to do or see one thing.' },
      { id: 'build-plan', label: '🗺️ Build me a plan', description: 'I want a smart route or a scheduled sequence.' },
    ],
  },
  {
    id: 'lifestyle',
    question: 'How do you want to explore?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'lean', label: '🏷️ Budget-friendly', description: 'Free sites · walking · no paid guides' },
      { id: 'balanced', label: '⚖️ Comfortable', description: 'Mix of free and paid · occasional guide' },
      { id: 'premium', label: '✨ Luxury', description: 'Private guides · skip-the-line · exclusive access' },
    ],
  },
  {
    id: 'exploration-style',
    question: 'How would you like to experience it?',
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'self-guided', label: '🧭 Self-guided', description: 'Explore at my own pace using a map or route.' },
      { id: 'guided-planned', label: '🗺️ Guided / Organized', description: 'Join a tour, workshop, or let an expert lead.' },
    ],
  },
  {
    id: 'interests',
    question: 'What kind of traveler are you?',
    visualType: 'card-choice',
    multiSelect: true,
    required: true,
    options: [
      { id: 'culture', label: '🏛️ Culture Seeker', description: 'History, heritage, and local traditions.' },
      { id: 'food', label: '🍲 Foodie', description: 'Cooking classes, street food, and tastings.' },
      { id: 'adventure', label: '🧗 Adrenaline Junkie', description: 'Thrills, sports, and outdoor adventures.' },
      { id: 'slow', label: '🧘 Wellness Seeker', description: 'Hammams, yoga, and relaxation.' },
      { id: 'photography-interest', label: '📷 Photographer', description: 'Visually stunning spots and photo tours.' },
      { id: 'social', label: '🎉 Social & Fun', description: 'Nightlife, markets, and lively spots.' },
    ],
  },
  {
    id: 'vibe',
    question: 'What kind of atmosphere are you looking for?',
    visualType: 'card-choice',
    multiSelect: true,
    required: false,
    options: [
      { id: 'authentic', label: '🧿 Authentic Local', description: 'Genuine, non-touristy experiences.' },
      { id: 'instagrammable', label: '✨ Instagrammable', description: 'Visually iconic and trendy spots.' },
      { id: 'relaxed', label: '😌 Chill & Relaxed', description: 'Slow-paced and low pressure.' },
      { id: 'off-the-beaten-path', label: '🗺️ Hidden Gems', description: 'Away from the main crowds.' },
      { id: 'romantic', label: '🌙 Romantic', description: 'Couples-friendly and sunset vibes.' },
    ],
  },
  {
    id: 'energy-level',
    question: 'What energy are you bringing today?',
    visualType: 'energy-dial',
    required: true,
    options: [
      { id: 'relaxed', label: '😌 Relaxed', description: 'Low exertion, lots of sitting/standing.' },
      { id: 'moderate', label: '🚶 Moderate', description: 'Light walking, active pace.' },
      { id: 'active', label: '🔥 Active', description: 'Strenuous or long-duration activity.' }
    ]
  },
  {
    id: 'setting',
    question: 'Where would you like to be?',
    visualType: 'card-choice',
    multiSelect: true,
    required: false,
    options: [
      { id: 'medina', label: '🏘️ Medina', description: 'Historic old city centers.' },
      { id: 'nature', label: '🌿 Nature', description: 'Mountains, oases, and countryside.' },
      { id: 'desert', label: '🏜️ Desert', description: 'Sand dunes and rocky plateaus.' },
      { id: 'coastal', label: '🌊 Coastal', description: 'Beaches and port towns.' },
      { id: 'urban', label: '🏙️ Modern City', description: 'New towns and modern neighborhoods.' },
    ],
  },
  {
    id: 'activity-type',
    question: 'Specific activity types',
    visualType: 'card-choice',
    multiSelect: true,
    required: false,
    options: [
      { id: 'hiking', label: '🥾 Hiking', description: 'Mountain & nature treks.' },
      { id: 'water-sports', label: '🏄 Water Sports', description: 'Surfing, windsurfing, etc.' },
      { id: 'cultural-tour', label: '🏛️ Cultural Tour', description: 'Guided history & heritage.' },
      { id: 'culinary', label: '🍲 Culinary', description: 'Cooking classes & food tours.' },
      { id: 'desert-adventure', label: '🐪 Desert Adventure', description: 'Camel treks & dunes.' },
      { id: 'wellness', label: '🧘 Wellness', description: 'Hammams & relaxation.' },
      { id: 'shopping', label: '🛍️ Shopping', description: 'Souks & artisan crafts.' },
      { id: 'adventure-sports', label: '🧗 Adventure Sports', description: 'Rock climbing & active thrills.' },
    ],
  },
  {
    id: 'scope',
    question: 'Group size & style',
    visualType: 'card-choice',
    multiSelect: true,
    required: false,
    options: [
      { id: 'private', label: '🔒 Private Group', description: 'Just you and your companions.' },
      { id: 'small-group', label: '👥 Small Group', description: 'Shared with a few others.' },
      { id: 'guided', label: '🗺️ Guided', description: 'Led by a professional.' },
      { id: 'self-guided', label: '🧭 Self-Guided', description: 'Explore at your own pace.' },
    ],
  },
  {
    id: 'price-range',
    question: 'Budget level',
    visualType: 'card-choice',
    required: false,
    options: [
      { id: 'price-free', label: 'Free', description: 'No entry fee.' },
      { id: 'price-budget', label: 'Budget', description: 'Under 200 MAD.' },
      { id: 'price-mid', label: 'Mid-Range', description: '200-600 MAD.' },
      { id: 'price-premium', label: 'Premium', description: 'Over 600 MAD.' },
    ],
  },
  {
    id: 'group-type',
    question: "Who's coming along today?",
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
    id: 'must-haves',
    question: 'Anything you absolutely need? Pick all that matter.',
    visualType: 'toggle-grid',
    multiSelect: true,
    required: false,
    options: [
      { id: 'skip-line', label: '🎟️ Skip-the-line access' },
      { id: 'local-guide', label: '🗺️ Local expert guide' },
      { id: 'accessible', label: '♿ Wheelchair accessible' },
      { id: 'kid-friendly', label: '👶 Kid friendly' },
      { id: 'transport-included', label: '🚐 Transport included' },
      { id: 'small-group', label: '👥 Small group only' },
      { id: 'outdoor', label: '☀️ Mostly outdoors' },
    ],
  },
  budgetStep,
]

export const thingsToDoMoreFilters: string[] = [
  'safety-sensitivity',
  'transport-mode',
  'language-preference',
  'budgetMax',
]
