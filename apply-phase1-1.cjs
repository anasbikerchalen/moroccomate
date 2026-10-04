const fs = require('fs');
const path = require('path');
const base = 'c:/Users/viet/Downloads/morocco-journey-guide (29)/finder-website/src';

function editFile(relPath, edits) {
  const file = path.join(base, relPath);
  let c = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  for (const [search, replacement] of edits) {
    if (!c.includes(search)) {
      throw new Error('NOT FOUND in ' + relPath + ' :: ' + JSON.stringify(search.slice(0, 100)));
    }
    c = c.replace(search, () => replacement);
  }
  fs.writeFileSync(file, c.replace(/\n/g, '\r\n'), 'utf8');
  console.log('OK ' + relPath);
}

editFile('data/explore/questions.ts', [
  [
`export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  multiSelect?: boolean;
  isContext?: boolean; // Whether this is a shared context question
}`,
`export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  multiSelect?: boolean;
  isContext?: boolean; // Whether this is a shared context question
  weight?: 'hard' | 'strong' | 'soft'; // Scoring priority tier: hard = non-negotiable, strong = 2x, soft = 1x (default)
}`
  ],
  [
`    question: "What's your spending style for this trip?",
    isContext: true,`,
`    question: "What's your spending style for this trip?",
    isContext: true,
    weight: 'hard', // Non-negotiable: a budget traveler at a luxury spot = bad match`
  ],
  [
`    question: "Who are you exploring with?",
    isContext: true,`,
`    question: "Who are you exploring with?",
    isContext: true,
    weight: 'strong', // Family needs weigh double, but less absolute than budget`
  ],
  [
`      id: 'setting',
      question: "Where would you like to be?",`,
`      id: 'setting',
      question: "Where would you like to be?",
      weight: 'strong', // Location matters a lot for activities`
  ],
  [
`      id: 'food-diet',
      question: "Any dietary preferences?",
      multiSelect: true,`,
`      id: 'food-diet',
      question: "Any dietary preferences?",
      multiSelect: true,
      weight: 'hard', // Dietary needs are non-negotiable`
  ],
  [
`    {
      id: 'food-vibe',`,
`    {
      id: 'food-cuisine',
      question: "What kind of food are you craving?",
      options: [
        { id: 'moroccan-traditional', label: 'Traditional Moroccan', tag: 'moroccan-traditional', icon: '\u{1F372}', sub: 'Tagine, couscous, pastilla, the real deal' },
        { id: 'international', label: 'International & Fusion', tag: 'international', icon: '\u{1F30D}', sub: 'Italian, Asian, French, or creative fusion' },
        { id: 'cafe-pastry', label: 'Caf\u00E9 & Pastries', tag: 'cafe-pastry', icon: '\u{2615}', sub: 'Coffee spots, patisseries, and sweet treats' },
        { id: 'seafood', label: 'Fresh Seafood', tag: 'seafood', icon: '\u{1F41F}', sub: 'Ocean-fresh catch and coastal dishes' }
      ]
    },
    {
      id: 'food-vibe',`
  ],
  [
`      id: 'sleep-type',
      question: "Where do you want to wake up?",`,
`      id: 'sleep-type',
      question: "Where do you want to wake up?",
      weight: 'strong', // Strong preference, not an absolute dealbreaker`
  ],
  [
`    {
      id: 'sleep-priority',`,
`    {
      id: 'sleep-location',
      question: "Where should your stay be?",
      weight: 'strong', // Location matters a lot for where you sleep
      options: [
        { id: 'medina-heart', label: 'Heart of the Medina', tag: 'medina-heart', icon: '\u{1F3D8}\uFE0F', sub: 'Inside the historic walls, steps from the action' },
        { id: 'ville-nouvelle', label: 'Modern City District', tag: 'ville-nouvelle', icon: '\u{1F306}', sub: 'Wide streets, familiar comfort, easy parking' },
        { id: 'countryside', label: 'Countryside & Nature', tag: 'countryside', icon: '\u{1F33F}', sub: 'Peaceful, surrounded by palms or mountains' }
      ]
    },
    {
      id: 'sleep-priority',`
  ],
  [
`      question: "Who do you want to meet along the way?",`,
`      question: "What kind of experiences are you drawn to?",`
  ],
  [
`  for (const q of allQuestions) {
    const option = q.options.find(o => o.id === optionId);
    if (option) return option.tag || option.id;
  }

  return optionId;
};`,
`  for (const q of allQuestions) {
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
    ...Object.values(SUB_SPECIFIC_QUESTIONS).flat()
  ];
  const question = allQuestions.find(q => q.id === questionId);
  return question?.weight || 'soft';
};`
  ]
]);

editFile('state/exploreStore.ts', [
  [
`  setMatchmakerTree: (updates: Partial<ExploreState['matchmakerTree']>) => void;
  resetExplore: () => void;`,
`  setMatchmakerTree: (updates: Partial<ExploreState['matchmakerTree']>) => void;
  applyQuizAutoFilters: (quizAnswers: Record<string, any>) => void;
  resetExplore: () => void;`
  ],
  [
`      setMatchmakerTree: (updates) => set((state) => ({ matchmakerTree: { ...state.matchmakerTree, ...updates } })),`,
`      setMatchmakerTree: (updates) => set((state) => ({ matchmakerTree: { ...state.matchmakerTree, ...updates } })),

      // Smart auto-filters (lite): silently activate filters from quiz answers so
      // personalization kicks in without adding more quiz steps
      applyQuizAutoFilters: (quizAnswers) => set((state) => {
        const updates: Partial<FilterState> = {};
        const group = quizAnswers?.['base-group'];
        if (group !== undefined) {
          updates.isKidFriendly = group === 'family';
        }
        const diet = quizAnswers?.['food-diet'];
        if (diet !== undefined && (!Array.isArray(diet) || diet.length > 0)) {
          updates.isHalal = Array.isArray(diet) ? diet.includes('halal') : diet === 'halal';
        }
        if (Object.keys(updates).length === 0) return state;
        return { filters: { ...state.filters, ...updates } };
      }),`
  ]
]);

console.log('ALL DONE');
