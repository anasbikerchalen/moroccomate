import { JourneyType, ExploreCategory, ThingsToDoSubCategory, SportIntent } from '../../types';

export interface QuizOption {
  id: string;
  label: string;
  tag?: string;
  sub?: string;
  icon?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  multiSelect?: boolean;
  isContext?: boolean; // Whether this is a shared context question
  weight?: 'hard' | 'strong' | 'soft'; // Scoring priority tier: hard = non-negotiable, strong = 2x, soft = 1x (default)
}

export const BASE_QUESTIONS: QuizQuestion[] = [
  {
    id: 'base-lifestyle',
    question: "What's your spending style for this trip?",
    isContext: true,
    weight: 'hard', // Non-negotiable: a budget traveler at a luxury spot = bad match
    options: [
      { id: 'lean', label: 'Lean & Local', tag: 'lean', sub: 'Best value, local gems, authentic savings' },
      { id: 'balanced', label: 'Balanced & Sweet', tag: 'balanced', sub: 'Comfort meets authenticity, mid-range gems' },
      { id: 'premium', label: 'Premium & Effortless', tag: 'premium', sub: 'Hand-picked excellence, top-tier comfort' }
    ]
  },
  {
    id: 'base-group',
    question: "Who are you exploring with?",
    isContext: true,
    weight: 'strong', // Family needs weigh double, but less absolute than budget
    options: [
      { id: 'solo', label: 'Solo', tag: 'solo', icon: '👤' },
      { id: 'couple', label: 'Couple', tag: 'couple', icon: '👩‍❤️‍👨' },
      { id: 'family', label: 'Family', tag: 'family', icon: '👨‍👩‍👧‍👦', sub: 'Kids with us' },
      { id: 'friends', label: 'Friends', tag: 'friends', icon: '👥' }
    ]
  }
];

export const CATEGORY_QUESTIONS: Record<Exclude<ExploreCategory, 'photos'>, QuizQuestion[]> = {
  'cities': [
    ...BASE_QUESTIONS,
    {
      id: 'q1-landscape',
      question: "Which sensory landscape naturally draws you in first?",
      options: [
        { id: 'ocean-wind', label: 'Ocean & Wind', tag: 'coastal', sub: 'Infinite horizons and salt air' },
        { id: 'ancient-stone', label: 'Ancient Stone & Spices', tag: 'heritage', sub: 'Centuries of living history' },
        { id: 'desert-silence', label: 'Desert Silence & Peaks', tag: 'wilderness', sub: 'Raw, untamed majesty' }
      ]
    },
    {
      id: 'q2-energy',
      question: "How do you prefer to manage your energy?",
      options: [
        { id: 'slow-active', label: 'Slow Morning, Active Afternoon', tag: 'balanced', sub: 'Rest first, then explore' },
        { id: 'high-immersion', label: 'High-Energy & Immersive', tag: 'high', sub: 'Dive deep into the chaos' },
        { id: 'structured-calm', label: 'Structured & Calming', tag: 'slow', sub: 'Peaceful, planned rhythm' }
      ]
    }
  ],
  'things-to-do': [
    ...BASE_QUESTIONS,
    {
      id: 'setting',
      question: "Where would you like to be?",
      weight: 'strong', // Location matters a lot for activities
      options: [
        { id: 'medina', label: 'Medina', tag: 'medina', icon: '🏘️', sub: 'Historic old city centers' },
        { id: 'nature', label: 'Nature & Rural', tag: 'nature', icon: '🌿', sub: 'Mountains, oases, and countryside' },
        { id: 'desert', label: 'Desert', tag: 'desert', icon: '🏜️', sub: 'Sand dunes and rocky plateaus' },
        { id: 'coastal', label: 'Coastal', tag: 'coastal', icon: '🌊', sub: 'Beaches and port towns' }
      ]
    },
    {
      id: 'interests',
      question: "What do you want to experience?",
      multiSelect: true,
      options: [
        { id: 'culture', label: 'History & Heritage', tag: 'culture', icon: '🏛️', sub: 'Palaces, medinas, and ancient cities' },
        { id: 'food', label: 'Food & Cooking', tag: 'food', icon: '🍲', sub: 'Markets, cooking classes, tastings' },
        { id: 'adventure', label: 'Adventure & Outdoors', tag: 'adventure', icon: '🧗', sub: 'Trekking, surfing, desert trips' },
        { id: 'slow', label: 'Hammam & Wellness', tag: 'slow', icon: '🧘', sub: 'Spas, hammams, and slow relaxation' }
      ]
    },
    {
      id: 'energy-level',
      question: "How active do you want your days to be?",
      options: [
        { id: 'relaxed', label: 'Zen & Chill', tag: 'relaxed', icon: '🧘', sub: 'Low physical effort' },
        { id: 'moderate', label: 'Steady & Curious', tag: 'moderate', icon: '🚶', sub: 'Standard exploration' },
        { id: 'active', label: 'Full Send', tag: 'active', icon: '🧗', sub: 'Lots of walking/moving' }
      ]
    },
    {
      id: 'vibe',
      question: "What kind of experiences are you drawn to?",
      multiSelect: true,
      options: [
        { id: 'authentic', label: 'Local & Genuine', tag: 'authentic', icon: '🧿', sub: 'Genuine, non-touristy experiences' },
        { id: 'instagrammable', label: 'Photo-Worthy Spots', tag: 'instagrammable', icon: '✨', sub: 'Visually iconic and trendy spots' },
        { id: 'relaxed', label: 'Easy & Unhurried', tag: 'relaxed', icon: '😌', sub: 'Slow-paced and low pressure' },
        { id: 'off-the-beaten-path', label: 'Hidden Gems', tag: 'off-the-beaten-path', icon: '🗺️', sub: 'Away from the main crowds' }
      ]
    }
  ],
  'food': [
    ...BASE_QUESTIONS,
    {
      id: 'food-time',
      question: "When are you planning to eat?",
      options: [
        { id: 'breakfast', label: 'Morning / Breakfast', tag: 'breakfast', icon: '🍳' },
        { id: 'lunch', label: 'Mid-day / Lunch', tag: 'lunch', icon: '☀️' },
        { id: 'dinner', label: 'Evening / Dinner', tag: 'dinner', icon: '🌙' },
        { id: 'flexible', label: 'Anytime / Snacks', tag: 'flexible', icon: '🥨' }
      ]
    },
    {
      id: 'food-diet',
      question: "Any dietary preferences?",
      multiSelect: true,
      weight: 'hard', // Dietary needs are non-negotiable
      options: [
        { id: 'halal', label: 'Halal Only', tag: 'halal', icon: '🥩' },
        { id: 'vegetarian', label: 'Vegetarian Friendly', tag: 'vegetarian', icon: '🥬' },
        { id: 'alcohol', label: 'Serves Alcohol', tag: 'alcohol', icon: '🍷' }
      ]
    },
    {
      id: 'food-cuisine',
      question: "What kind of food are you craving?",
      options: [
        { id: 'moroccan-traditional', label: 'Traditional Moroccan', tag: 'moroccan-traditional', icon: '🍲', sub: 'Tagine, couscous, pastilla, the real deal' },
        { id: 'international', label: 'International & Fusion', tag: 'international', icon: '🌍', sub: 'Italian, Asian, French, or creative fusion' },
        { id: 'cafe-pastry', label: 'Café & Pastries', tag: 'cafe-pastry', icon: '☕', sub: 'Coffee spots, patisseries, and sweet treats' },
        { id: 'seafood', label: 'Fresh Seafood', tag: 'seafood', icon: '🐟', sub: 'Ocean-fresh catch and coastal dishes' }
      ]
    },
    {
      id: 'food-vibe',
      question: "What's the dining mood?",
      options: [
        { id: 'rooftop', label: 'Rooftop & Views', tag: 'rooftop', icon: '🌇' },
        { id: 'street', label: 'Authentic Street Food', tag: 'street-food', icon: '🌮' },
        { id: 'fine', label: 'Modern & Chic', tag: 'fine-dining', icon: '✨' },
        { id: 'hole', label: 'Hidden Local Gem', tag: 'hole-in-wall', icon: '🏠' }
      ]
    }
  ],
  'sleep': [
    ...BASE_QUESTIONS,
    {
      id: 'sleep-type',
      question: "Where do you want to wake up?",
      weight: 'strong', // Strong preference, not an absolute dealbreaker
      options: [
        { id: 'riad', label: 'Heritage Riad', tag: 'riad', icon: '🏺', sub: 'Traditional medina palace' },
        { id: 'hotel', label: 'Modern Boutique', tag: 'hotel', icon: '🏨', sub: 'Contemporary comfort' },
        { id: 'desert-camp', label: 'Desert Escape', tag: 'desert-camp', icon: '🏜️', sub: 'Under the stars' },
        { id: 'kasbah', label: 'Ancient Kasbah', tag: 'kasbah', icon: '🏰', sub: 'Fortified desert stone' }
      ]
    },
    {
      id: 'sleep-location',
      question: "Where should your stay be?",
      weight: 'strong', // Location matters a lot for where you sleep
      options: [
        { id: 'medina-heart', label: 'Heart of the Medina', tag: 'medina-heart', icon: '🏘️', sub: 'Inside the historic walls, steps from the action' },
        { id: 'ville-nouvelle', label: 'Modern City District', tag: 'ville-nouvelle', icon: '🌆', sub: 'Wide streets, familiar comfort, easy parking' },
        { id: 'countryside', label: 'Countryside & Nature', tag: 'countryside', icon: '🌿', sub: 'Peaceful, surrounded by palms or mountains' }
      ]
    },
    {
      id: 'sleep-priority',
      question: "What's your non-negotiable?",
      multiSelect: true,
      options: [
        { id: 'pool', label: 'Swimming Pool', tag: 'pool', icon: '🏊' },
        { id: 'ac', label: 'Cold A/C', tag: 'ac', icon: '❄️' },
        { id: 'rooftop', label: 'Rooftop Terrace', tag: 'rooftop', icon: '🌇' },
        { id: 'quiet', label: 'Peace & Quiet', tag: 'quiet', icon: '🤫' }
      ]
    }
  ],
  'shopping': [
    ...BASE_QUESTIONS,
    {
      id: 'shop-target',
      question: "What are you hunting for?",
      options: [
        { id: 'souvenirs', label: 'Souvenirs & Gifts', tag: 'souvenirs', icon: '🎁' },
        { id: 'leather', label: 'Leather & Textiles', tag: 'leather', icon: '👜' },
        { id: 'ceramics', label: 'Ceramics & Decor', tag: 'ceramics', icon: '🏺' },
        { id: 'spices', label: 'Spices & Oils', tag: 'spices', icon: '🌶️' }
      ]
    },
    {
      id: 'shop-style',
      question: "What kind of shopping do you enjoy?",
      options: [
        { id: 'live-workshop', label: 'Watch Artisans Work', tag: 'live-workshop', icon: '🔨', sub: 'Live craft workshops' },
        { id: 'fixed-price', label: 'Relaxed Fixed Prices', tag: 'fixed-price', icon: '🏷️', sub: 'No haggling needed' },
        { id: 'local-favorite', label: 'Local Favorites', tag: 'local-favorite', icon: '❤️', sub: 'Where locals actually shop' }
      ]
    }
  ],
  'experiences': [
    ...BASE_QUESTIONS,
    {
      id: 'exp-type',
      question: "What kind of experience excites you?",
      options: [
        { id: 'nature', label: 'Raw Nature', tag: 'nature', icon: '🏞️' },
        { id: 'cultural', label: 'Deep Culture', tag: 'immersion', icon: '🎨' },
        { id: 'adrenaline', label: 'Pure Adrenaline', tag: 'adrenaline', icon: '🚀' }
      ]
    }
  ]
};

export const PATH_SPECIFIC_QUESTIONS: Record<string, QuizQuestion[]> = {
  'first-timer': [
    {
      id: 'ft-days',
      question: "How many days is your journey?",
      options: [
        { id: '3-5', label: '3–5 Days', sub: 'The "Quick Magic" loop' },
        { id: '6-9', label: '6–9 Days', sub: 'The "Golden Triangle"' },
        { id: '10+', label: '10+ Days', sub: 'The "Grand Morocco" circuit' }
      ]
    },
    {
      id: 'ft-excitement',
      question: "What sounds most exciting to you?",
      options: [
        { id: 'cities', label: 'Colorful Cities', sub: 'Medinas & markets' },
        { id: 'beaches', label: 'Atlantic Beaches', sub: 'Salt air & relaxation' },
        { id: 'desert', label: 'Sahara Desert', sub: 'Camping & camels' },
        { id: 'everything', label: 'The Full Mix', sub: 'Don\'t let me miss anything' }
      ]
    },
    {
      id: 'ft-style',
      question: "What is your preferred travel style?",
      options: [
        { id: 'lean', label: 'Budget / Authentic', sub: 'Local gems & savings' },
        { id: 'balanced', label: 'Mid-Range / Comfort', sub: 'Best value for money' },
        { id: 'premium', label: 'Premium / Luxury', sub: 'Hand-picked excellence' }
      ]
    }
  ],
  'adventure': [
    {
      id: 'adv-type',
      question: "What kind of adventure are you seeking?",
      options: [
        { id: 'surf', label: 'Surf & Ocean', sub: 'Catch the Atlantic swell' },
        { id: 'hiking', label: 'Hiking & Peaks', sub: 'Conquer the Atlas' },
        { id: 'desert', label: 'Desert Expeditions', sub: 'Off-road & 4x4' },
        { id: 'mixed', label: 'The Mixed Thrill', sub: 'Ocean to Mountains' }
      ]
    },
    {
      id: 'adv-skill',
      question: "What is your skill level?",
      options: [
        { id: 'beginner', label: 'Beginner', sub: 'I want to learn' },
        { id: 'intermediate', label: 'Intermediate', sub: 'I know my way around' },
        { id: 'advanced', label: 'Advanced / Pro', sub: 'Show me the challenge' }
      ]
    },
    {
      id: 'adv-length',
      question: "How long is your expedition?",
      options: [
        { id: 'weekend', label: 'Weekend Trip', sub: 'Quick hit' },
        { id: '1week', label: '1 Week', sub: 'The standard flow' },
        { id: '2week', label: '2+ Weeks', sub: 'Deep immersion' }
      ]
    }
  ],
  'nomad': [
    {
      id: 'nom-stay',
      question: "How long are you staying?",
      options: [
        { id: '1month', label: '1 Month', sub: 'The teaser' },
        { id: '3month', label: '3 Months', sub: 'The seasonal shift' },
        { id: '6month', label: '6+ Months', sub: 'The lifestyle change' }
      ]
    },
    {
      id: 'nom-priority',
      question: "What's most important for your workspace?",
      options: [
        { id: 'internet', label: 'High-Speed Fiber', sub: 'Essential for calls' },
        { id: 'community', label: 'Nomad Community', sub: 'I want to network' },
        { id: 'cost', label: 'Cost of Living', sub: 'Make my money go further' },
        { id: 'vibe', label: 'Vibrant Vibe', sub: 'Coffee & rooftops' }
      ]
    },
    { id: 'nom-vibe', 
      question: "Preferred lifestyle vibe?",
      options: [
        { id: 'beach', label: 'Beachside Living', sub: 'Surf after work' },
        { id: 'city', label: 'Medina Energy', sub: 'The heart of chaos' },
        { id: 'quiet', label: 'Quiet Mountains', sub: 'Deep focus mode' }
      ]
    }
  ],
  'culture': [
    {
      id: 'cul-focus',
      question: "Primary interest?",
      options: [
        { id: 'history', label: 'History & Arch', sub: 'Imperial legacies' },
        { id: 'food', label: 'Gastronomy', sub: 'Cooking & tasting' },
        { id: 'art', label: 'Artisan Crafts', sub: 'Workshops & souks' }
      ]
    },
    {
      id: 'cul-pace',
      question: "Preferred atmosphere?",
      options: [
        { id: 'busy', label: 'Busy Markets', sub: 'The souk pulse' },
        { id: 'hidden', label: 'Hidden Streets', sub: 'Quiet medina corners' },
        { id: 'village', label: 'Traditional Villages', sub: 'Rural life' }
      ]
    },
    {
      id: 'cul-comfort',
      question: "Comfort level?",
      options: [
        { id: 'basic', label: 'Basic / Raw', sub: 'Maximum authenticity' },
        { id: 'comfort', label: 'Comfortable', sub: 'Modern amenities' },
        { id: 'luxury', label: 'Luxury Heritage', sub: 'Palace riads' }
      ]
    }
  ],
  'luxury': [
    {
      id: 'lux-purpose',
      question: "Purpose of your trip?",
      options: [
        { id: 'relax', label: 'Relaxation', sub: 'Spas & silence' },
        { id: 'romance', label: 'Romance', sub: 'Couples / Honeymoon' },
        { id: 'family', label: 'Family Luxury', sub: 'Spacious villas' }
      ]
    },
    {
      id: 'lux-budget',
      question: "Budget per night?",
      options: [
        { id: '150', label: '$150 - $300', sub: 'Premium Riad' },
        { id: '300', label: '$300 - $600', sub: 'Luxury Hotel' },
        { id: '600', label: '$600+', sub: 'World-class Palace' }
      ]
    },
    {
      id: 'lux-value',
      question: "What do you value most?",
      options: [
        { id: 'privacy', label: 'Total Privacy', sub: 'Secluded retreats' },
        { id: 'service', label: 'Bespoke Service', sub: 'Private butlers' },
        { id: 'unique', label: 'Unique Experiences', sub: 'Private desert access' }
      ]
    }
  ]
};

export const getSmartQuestion = (category: Exclude<ExploreCategory, 'photos'>, journey: JourneyType): QuizQuestion => {
  const SMART_QUESTIONS: any = {
    'cities': {
      'preparing': {
        id: 'smart-cities-prep',
        question: "How many days is your trip?",
        options: [
          { id: '3-5', label: '3-5 days', sub: '1-2 cities' },
          { id: '6-9', label: '6-9 days', sub: '2-3 cities' },
          { id: '10-14', label: '10-14 days', sub: '3-4 cities' },
          { id: '15+', label: '15+ days', sub: 'Full circuit' }
        ]
      },
      'landed': {
        id: 'smart-cities-landed',
        question: "Where did you land?",
        options: [
          { id: 'marrakech', label: 'Marrakech', sub: 'Day trips from Marrakech' },
          { id: 'casablanca', label: 'Casablanca', sub: 'Day trips from Casablanca' },
          { id: 'fes', label: 'Fes', sub: 'Day trips from Fes' },
          { id: 'other', label: 'Other', sub: 'Show all with distance' }
        ]
      },
      'already-in': {
        id: 'smart-cities-in',
        question: "What's your plan?",
        options: [
          { id: 'stay', label: 'Stay in current city', sub: 'Neighborhoods deep-dive' },
          { id: 'move', label: 'Move to another city', sub: 'Best next city + why' },
          { id: 'day-trip', label: 'Day trips only', sub: 'Nearby excursions' }
        ]
      },
      'traveling': {
        id: 'smart-cities-traveling',
        question: "Where are you now?",
        options: [
          { id: 'here-day', label: 'Day trip from here' },
          { id: 'next-city', label: 'Move to next city' },
          { id: 'multi-city', label: 'Plan multi-city route' }
        ]
      },
      'leaving': {
        id: 'smart-cities-leaving',
        question: "Did you miss any region?",
        options: [
          { id: 'yes', label: 'Yes, I missed some' },
          { id: 'no', label: 'No, I am satisfied' },
          { id: 'revisit', label: 'I want to revisit' }
        ]
      }
    },
    'things-to-do': {
      'preparing': {
        id: 'smart-todo-prep',
        question: "What's your priority?",
        options: [
          { id: 'iconic', label: 'Iconic must-dos' },
          { id: 'learn', label: 'Learn something new' },
          { id: 'connect', label: 'Connect with locals' },
          { id: 'relax', label: 'Just relax and enjoy' }
        ]
      },
      'landed': {
        id: 'smart-todo-landed',
        question: "How's your energy?",
        options: [
          { id: 'full', label: 'Full energy!' },
          { id: 'tired', label: 'Tired, light activities' },
          { id: 'moderate', label: 'Moderate' }
        ]
      },
      'already-in': {
        id: 'smart-todo-in',
        question: "What have you already done?",
        options: [
          { id: 'new', label: 'Show me new things' },
          { id: 'loved', label: 'More of what I loved' },
          { id: 'surprise', label: 'Surprise me' }
        ]
      },
      'traveling': {
        id: 'smart-todo-traveling',
        question: "How flexible is your route?",
        options: [
          { id: 'quick', label: 'Quick roadside stops' },
          { id: 'detour', label: 'Worth a detour' },
          { id: 'flexible', label: 'I\'ll adjust my route' }
        ]
      },
      'leaving': {
        id: 'smart-todo-leaving',
        question: "How much time before departure?",
        options: [
          { id: '2-3', label: '2-3 hours' },
          { id: '4-6', label: '4-6 hours' },
          { id: 'done', label: 'Just heading out' }
        ]
      }
    },
    'food': {
      'preparing': {
        id: 'smart-food-prep',
        question: "How would you describe your hunger level?",
        options: [
          { id: 'light', label: 'Light', sub: 'Just a snack' },
          { id: 'moderate', label: 'Moderate', sub: 'A good meal' },
          { id: 'hungry', label: 'Very Hungry', sub: 'A feast' }
        ]
      },
      'landed': {
        id: 'smart-food-landed',
        question: "Where are you right now?",
        options: [
          { id: 'airport', label: 'At/near airport' },
          { id: 'center', label: 'City center' },
          { id: 'hotel', label: 'At hotel' },
          { id: 'unknown', label: 'Don\'t know yet' }
        ]
      },
      'already-in': {
        id: 'smart-food-in',
        question: "What's your food mood today?",
        options: [
          { id: 'best', label: 'Best meal of my trip' },
          { id: 'quick', label: 'Quick between activities' },
          { id: 'adventure', label: 'Food adventure' },
          { id: 'comfort', label: 'Comfort/familiar' }
        ]
      },
      'traveling': {
        id: 'smart-food-traveling',
        question: "Food between cities?",
        options: [
          { id: 'restaurant', label: 'Restaurant stops' },
          { id: 'regional', label: 'Regional specialties' },
          { id: 'snacks', label: 'Quick snacks/road food' }
        ]
      },
      'leaving': {
        id: 'smart-food-leaving',
        question: "One last Moroccan meal?",
        options: [
          { id: 'untried', label: 'Best dish I haven\'t tried' },
          { id: 'favorite', label: 'Favorite again' },
          { id: 'airport', label: 'Quick near airport' }
        ]
      }
    },
    'shopping': {
      'preparing': {
        id: 'smart-shop-prep',
        question: "What's the main goal of your shopping?",
        options: [
          { id: 'discover', label: 'Discover local crafts' },
          { id: 'gift', label: 'Finding special gifts' },
          { id: 'experience', label: 'Enjoying the souk vibe' },
          { id: 'specific', label: 'Seeking specific item' }
        ]
      },
      'landed': {
        id: 'smart-shop-landed',
        question: "When do you want to shop?",
        options: [
          { id: 'now', label: 'Right now' },
          { id: 'later', label: 'Later today' },
          { id: 'trip', label: 'During my trip' },
          { id: 'last', label: 'Last day' }
        ]
      },
      'already-in': {
        id: 'smart-shop-in',
        question: "Where do you prefer to shop?",
        options: [
          { id: 'medina', label: 'In medina/souk' },
          { id: 'modern', label: 'Modern shops' },
          { id: 'coop', label: 'Artisan cooperatives' },
          { id: 'anywhere', label: 'Best quality anywhere' }
        ]
      },
      'traveling': {
        id: 'smart-shop-traveling',
        question: "Shopping across cities?",
        options: [
          { id: 'regional', label: 'Regional specialties' },
          { id: 'specific', label: 'Looking for specific item' },
          { id: 'route', label: 'Shopping route' }
        ]
      },
      'leaving': {
        id: 'smart-shop-leaving',
        question: "Last-minute shopping?",
        options: [
          { id: 'missed', label: 'Souvenirs I missed' },
          { id: 'gifts', label: 'Gifts for people home' },
          { id: 'duty-free', label: 'Duty-free' }
        ]
      }
    },
    'experiences': {
      'preparing': {
        id: 'smart-exp-prep',
        question: "Is this a must-do for you?",
        options: [
          { id: 'must', label: 'THE reason I\'m coming' },
          { id: 'one-of', label: 'One of many things' },
          { id: 'nice', label: 'Nice if it fits' }
        ]
      },
      'landed': {
        id: 'smart-exp-landed',
        question: "How soon do you want to do this?",
        options: [
          { id: 'today', label: 'Today' },
          { id: 'tomorrow', label: 'Tomorrow' },
          { id: 'later', label: 'Later in trip' }
        ]
      },
      'already-in': {
        id: 'smart-exp-in',
        question: "Experience level so far?",
        options: [
          { id: 'first', label: 'This is my first' },
          { id: 'different', label: 'Want something different' },
          { id: 'more', label: 'More like what I loved' }
        ]
      },
      'traveling': {
        id: 'smart-exp-traveling',
        question: "Can you adjust route for this?",
        options: [
          { id: 'yes', label: 'Yes, I\'ll detour' },
          { id: 'route', label: 'Only on my route' },
          { id: 'next', label: 'Only in next city' }
        ]
      },
      'leaving': {
        id: 'smart-exp-leaving',
        question: "One final experience?",
        options: [
          { id: 'quick', label: 'Quick (2-3 hours)' },
          { id: 'near', label: 'Near where I am' },
          { id: 'unforgettable', label: 'Something unforgettable' }
        ]
      }
    },
    'sleep': {
      'preparing': {
        id: 'smart-sleep-prep',
        question: "What's the main goal of your stay?",
        options: [
          { id: 'relax', label: 'Relaxation & comfort' },
          { id: 'adventure', label: 'Adventure base' },
          { id: 'culture', label: 'Cultural immersion' },
          { id: 'budget', label: 'Budget-friendly' }
        ]
      },
      'landed': {
        id: 'smart-sleep-landed',
        question: "How soon do you need to check in?",
        options: [
          { id: 'now', label: 'Right now' },
          { id: 'today', label: 'Later today' },
          { id: 'tomorrow', label: 'Tomorrow' }
        ]
      },
      'already-in': {
        id: 'smart-sleep-in',
        question: "Happy with your current stay?",
        options: [
          { id: 'loved', label: 'Love it, want more' },
          { id: 'change', label: 'Want a change of vibe' },
          { id: 'next', label: 'Planning for next city' }
        ]
      },
      'traveling': {
        id: 'smart-sleep-traveling',
        question: "Stays along the route?",
        options: [
          { id: 'stopover', label: 'Quick stopover' },
          { id: 'unique', label: 'Unique roadside stay' },
          { id: 'next-city', label: 'Best in next city' }
        ]
      },
      'leaving': {
        id: 'smart-sleep-leaving',
        question: "One final special stay?",
        options: [
          { id: 'splurge', label: 'One final splurge' },
          { id: 'airport', label: 'Near airport' },
          { id: 'repeat', label: 'Back to my favorite' }
        ]
      }
    }
  };

  return SMART_QUESTIONS[category][journey];
};

export const PRACTICAL_SPORT_QUESTIONS: QuizQuestion[] = [
  ...BASE_QUESTIONS,
  {
    id: 'sport-distance',
    question: "How far is too far for you?",
    options: [
      { id: 'walkable', label: 'Walkable (under 15 min)', tag: 'walkable', icon: '🚶', sub: 'On foot from your area' },
      { id: 'short-drive', label: 'Short Drive (15-30 min)', tag: 'short-drive', icon: '🚗', sub: 'Quick taxi or drive' },
      { id: 'anywhere', label: 'Anywhere in the city', tag: 'anywhere', icon: '🌍', sub: 'Best option regardless of distance' },
    ]
  },
  {
    id: 'sport-facility-needs',
    question: "Any must-haves for your training spot?",
    multiSelect: true,
    options: [
      { id: 'day-pass', label: 'Day Pass Available', tag: 'day-pass', icon: '🎟️', sub: 'No membership required' },
      { id: 'weights', label: 'Full Weight Area', tag: 'weights', icon: '🏋️', sub: 'Free weights & machines' },
      { id: 'pool-access', label: 'Swimming Pool', tag: 'pool', icon: '🏊', sub: 'Lap pool or leisure pool' },
      { id: 'ac', label: 'Air Conditioned', tag: 'ac', icon: '❄️', sub: 'Climate controlled' },
      { id: 'classes', label: 'Group Classes', tag: 'classes', icon: '👥', sub: 'Scheduled group sessions' },
      { id: 'women-only', label: 'Women-Only Hours', tag: 'women-only', icon: '👩', sub: 'Dedicated women sessions' },
    ]
  }
];

export const EXPERIENCE_SPORT_QUESTIONS: QuizQuestion[] = [
  ...BASE_QUESTIONS,
  {
    id: 'sport-experience-type',
    question: "What kind of sport experience excites you?",
    multiSelect: true,
    options: [
      { id: 'surf-kitesurf', label: 'Surf & Kitesurf', tag: 'surf-kitesurf', icon: '🏄', sub: 'Atlantic waves & wind' },
      { id: 'hiking-trek', label: 'Hiking & Trekking', tag: 'hiking-trek', icon: '🥾', sub: 'Atlas Mountains & trails' },
      { id: 'climbing-adventure', label: 'Climbing & Via Ferrata', tag: 'climbing-adventure', icon: '🧗', sub: 'Rock faces & adventure' },
      { id: 'desert-sport', label: 'Desert Adventures', tag: 'desert-sport', icon: '🐪', sub: 'Camel treks, quad biking, sandboard' },
      { id: 'water-sport', label: 'Water Sports', tag: 'water-sport', icon: '🚤', sub: 'Kayak, jet ski, boat' },
      { id: 'horse-ride', label: 'Horseback & Equestrian', tag: 'horse-ride', icon: '🐴', sub: 'Beach rides & ranches' },
    ]
  },
  {
    id: 'sport-skill-level',
    question: "What's your skill level?",
    options: [
      { id: 'beginner', label: 'Beginner', tag: 'beginner', icon: '🌱', sub: 'I want to learn the basics' },
      { id: 'intermediate', label: 'Intermediate', tag: 'intermediate', icon: '⚡', sub: 'I know the fundamentals' },
      { id: 'advanced', label: 'Advanced / Pro', tag: 'advanced', icon: '🏆', sub: 'Challenge me' },
    ]
  },
  {
    id: 'sport-duration',
    question: "How long should the experience be?",
    options: [
      { id: 'half-day', label: 'Half Day (2-4 hours)', tag: 'half-day', icon: '☀️', sub: 'Quick adventure' },
      { id: 'full-day', label: 'Full Day', tag: 'full-day', icon: '🌅', sub: 'The main event of the day' },
      { id: 'multi-day', label: 'Multi-Day Expedition', tag: 'multi-day', icon: '🗓️', sub: 'Overnight & deep immersion' },
    ]
  },
  {
    id: 'sport-setting',
    question: "Where should the adventure happen?",
    options: [
      { id: 'coastal', label: 'Ocean & Coast', tag: 'coastal', icon: '🌊', sub: 'Atlantic swell & beaches' },
      { id: 'mountain', label: 'Mountains & Valleys', tag: 'mountain', icon: '⛰️', sub: 'High Atlas & gorges' },
      { id: 'desert', label: 'Desert & Dunes', tag: 'desert', icon: '🏜️', sub: 'Sahara & rocky plateaus' },
    ]
  }
];

export const SUB_SPECIFIC_QUESTIONS: Record<Exclude<ThingsToDoSubCategory, 'sport'>, QuizQuestion[]> = {
  'culture': [
    {
      id: 'culture-focus',
      question: "What draws you most?",
      options: [
        { id: 'history', label: 'Imperial History', tag: 'history', icon: '🏰', sub: 'Palaces & dynasties' },
        { id: 'art-craft', label: 'Art & Crafts', tag: 'art-craft', icon: '🎨', sub: 'Workshops & galleries' },
        { id: 'spiritual', label: 'Sacred & Spiritual', tag: 'spiritual', icon: '🕌', sub: 'Mosques, shrines, meditation' },
        { id: 'architecture', label: 'Architecture & Design', tag: 'architecture', icon: '🏛️', sub: 'Zellij, plaster, woodwork' },
      ]
    },
    {
      id: 'culture-pace',
      question: "What's your exploration pace?",
      options: [
        { id: 'deep-dive', label: 'Deep Dive (slow)', tag: 'deep-dive', icon: '🔍', sub: 'Spend hours at each site' },
        { id: 'sample', label: 'Sampler (moderate)', tag: 'sample', icon: '✨', sub: 'See many, stay briefly' },
        { id: 'whirlwind', label: 'Whirlwind Tour', tag: 'whirlwind', icon: '🌪️', sub: 'Hit the highlights fast' },
      ]
    }
  ],
  'wellness': [
    {
      id: 'wellness-type',
      question: "What type of wellness experience?",
      options: [
        { id: 'hammam', label: 'Traditional Hammam', tag: 'hammam', icon: '🧼', sub: 'Moroccan bathing ritual' },
        { id: 'spa-modern', label: 'Modern Spa', tag: 'spa-modern', icon: '💆', sub: 'Group & private sessions' },
        { id: 'yoga-retreat', label: 'Yoga & Meditation', tag: 'yoga-retreat', icon: '🧘', sub: 'Classes & retreats' },
        { id: 'nature-healing', label: 'Nature Healing', tag: 'nature-healing', icon: '🌿', sub: 'Hot springs & mountain air' },
      ]
    }
  ],
  'desert-nature': [
    {
      id: 'desert-activity',
      question: "What kind of desert experience?",
      options: [
        { id: 'camel-trek', label: 'Camel Trek & Camp', tag: 'camel-trek', icon: '🐪', sub: 'Classic Sahara overnight' },
        { id: 'off-road', label: '4x4 & Off-Road', tag: 'off-road', icon: '🚙', sub: 'Motorized desert adventure' },
        { id: 'oasis-nature', label: 'Oases & Valleys', tag: 'oasis-nature', icon: 'palm', sub: 'Palmeraies & gorges' },
        { id: 'stargazing', label: 'Stargazing & Night Sky', tag: 'stargazing', icon: '🌌', sub: 'Darkest skies in Africa' },
      ]
    }
  ],
  'photography': [
    {
      id: 'photo-style',
      question: "What are you shooting?",
      options: [
        { id: 'architecture-photo', label: 'Architecture & Details', tag: 'architecture-photo', icon: '🏛️', sub: 'Zellij, arches, doorways' },
        { id: 'landscape-photo', label: 'Landscapes & Panoramas', tag: 'landscape-photo', icon: '⛰️', sub: 'Mountains, desert, coast' },
        { id: 'street-life', label: 'Street Life & People', tag: 'street-life', icon: '🧑', sub: 'Markets, artisans, daily life' },
        { id: 'golden-hour', label: 'Golden Hour Spots', tag: 'golden-hour', icon: '🌅', sub: 'Sunrise & sunset locations' },
      ]
    }
  ],
  'social': [
    {
      id: 'social-vibe',
      question: "What's your social scene?",
      options: [
        { id: 'market-chaos', label: 'Souk & Market Energy', tag: 'market-chaos', icon: '🏪', sub: 'The pulse of the medina' },
        { id: 'rooftop-drinks', label: 'Rooftops & Lounges', tag: 'rooftop-drinks', icon: '🍸', sub: 'Sunset drinks with a view' },
        { id: 'live-music', label: 'Live Music & Shows', tag: 'live-music', icon: '🎵', sub: 'Gnawa, local bands, festivals' },
        { id: 'cooking-social', label: 'Cooking & Dining Together', tag: 'cooking-social', icon: '🍳', sub: 'Shared meals & classes' },
      ]
    }
  ]
};

export function getSubCategoryQuestions(
  subCategory: ThingsToDoSubCategory | null,
  sportIntent: SportIntent | null
): QuizQuestion[] {
  if (!subCategory) {
    return CATEGORY_QUESTIONS['things-to-do'];
  }
  
  if (subCategory === 'sport') {
    if (sportIntent === 'practical') {
      return PRACTICAL_SPORT_QUESTIONS;
    } else {
      return EXPERIENCE_SPORT_QUESTIONS;
    }
  }
  
  // Return base questions + sub-category specific questions
  return [
    ...BASE_QUESTIONS,
    ...SUB_SPECIFIC_QUESTIONS[subCategory]
  ];
}

// Extra tag sources registered at runtime by auxiliary question datasets
// (e.g. the pre-quiz quick-shortcut mini-quizzes in preQuizShortcuts.ts) so
// tag lookups resolve against them without creating a circular import.
const EXTRA_TAG_SOURCES: QuizQuestion[] = [];

export function registerTagSource(questions: QuizQuestion[]): void {
  for (const q of questions) {
    if (!EXTRA_TAG_SOURCES.some(s => s.id === q.id)) EXTRA_TAG_SOURCES.push(q);
  }
}

/**
 * Helper to find the tag associated with a specific option ID across all questions
 */
export const getTagForOptionId = (optionId: string): string => {
  const allQuestions = [
    ...Object.values(CATEGORY_QUESTIONS).flat(),
    ...Object.values(PATH_SPECIFIC_QUESTIONS).flat(),
    ...BASE_QUESTIONS,
    ...PRACTICAL_SPORT_QUESTIONS,
    ...EXPERIENCE_SPORT_QUESTIONS,
    ...Object.values(SUB_SPECIFIC_QUESTIONS).flat(),
    ...EXTRA_TAG_SOURCES
  ];

  for (const q of allQuestions) {
    const option = q.options.find(o => o.id === optionId);
    if (option) return option.tag || option.id;
  }

  return optionId;
};

// Stop-words skipped when matching multi-part quiz answer IDs against listing
// data, because tiny fragments like 'off' or 'the' create false matches
// (e.g. 'off' inside 'coffee')
export const QUIZ_STOP_WORDS = new Set(['the', 'of', 'and', 'a', 'an', 'in', 'to']);

// Scoring weight tier for a quiz question (declared via the question's weight field).
// hard = non-negotiable (gains 3, penalizes 2 on a confirmed miss),
// strong = 2x signal, soft = 1x normal weight (default)
export const getQuizWeightForQuestionId = (questionId: string): 'hard' | 'strong' | 'soft' => {
  const allQuestions = [
    ...Object.values(CATEGORY_QUESTIONS).flat(),
    ...Object.values(PATH_SPECIFIC_QUESTIONS).flat(),
    ...BASE_QUESTIONS,
    ...PRACTICAL_SPORT_QUESTIONS,
    ...EXPERIENCE_SPORT_QUESTIONS,
    ...Object.values(SUB_SPECIFIC_QUESTIONS).flat(),
    ...EXTRA_TAG_SOURCES
  ];
  const question = allQuestions.find(q => q.id === questionId);
  return question?.weight || 'soft';
};

// Flat list of every quiz question across all categories (for answer pill editors
// and label lookups)
export const getAllQuizQuestions = (): QuizQuestion[] => [
  ...Object.values(CATEGORY_QUESTIONS).flat(),
  ...Object.values(PATH_SPECIFIC_QUESTIONS).flat(),
  ...BASE_QUESTIONS,
  ...PRACTICAL_SPORT_QUESTIONS,
  ...EXPERIENCE_SPORT_QUESTIONS,
  ...Object.values(SUB_SPECIFIC_QUESTIONS).flat()
];

// Pretty label for a specific quiz answer (used on result cards and answer pills)
export const getQuizOptionLabel = (questionId: string, answerId: string): string => {
  const question = getAllQuizQuestions().find(q => q.id === questionId);
  const option = question?.options.find(o => o.id === answerId);
  return option?.label || answerId;
};
