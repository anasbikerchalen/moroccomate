/**
 * 🌳 THINGS TO DO — DECISION-TREE QUIZ (5 questions, 3 roads)
 * ------------------------------------------------------------------
 * Question 1 ("The Core Intent") determines the traveler's ROAD:
 *   🕌 ROAD A — Heritage, Old Towns & Culture      (road-heritage)
 *   🏜️ ROAD B — Wild Nature & Open Landscapes      (road-nature)
 *   🌿 ROAD C — Wellness, Living Arts & Calm      (road-wellness)
 * Questions 2–5 live inside each road and narrow down the exact matching
 * criteria (atmosphere, energy, timing, companions, activity parameters).
 *
 * This file is organized in three clearly separated sections:
 *   1. QUIZ ARRAYS   — the questions & options shown in the quiz UI
 *   2. FILTER ARRAYS — every option mapped to REAL structured listing
 *                      criteria (tags, crowdLevel, duration, groups, ...)
 *   3. UI ARRAYS     — option images (only existing images that truly fit;
 *                      options without a fitting image are intentionally
 *                      left empty — never a fake or unrelated image)
 */
import type { QuizQuestion } from './questions';

// ═══════════════════════════════════════════════════════════════════
// 🗂️ SECTION 1 — QUIZ ARRAYS (decision-tree questions & options)
// ═══════════════════════════════════════════════════════════════════

export const THINGS_TREE_ROOT_ID = 'things-road';

/** Question 1 — The Core Intent (determines the traveler's Road) */
export const THINGS_TREE_ROOT_QUESTION: QuizQuestion = {
  id: THINGS_TREE_ROOT_ID,
  question: "What's calling you on this trip?",
  weight: 'hard', // The Road is non-negotiable: it defines every following question
  options: [
    { id: 'road-heritage', label: 'Heritage & Old Towns', icon: '🕌', sub: 'Monuments, ancient medinas, and living history' },
    { id: 'road-nature', label: 'Wild Nature & Adventure', icon: '🏜️', sub: 'Coast, canyons, dunes, and open landscapes' },
    { id: 'road-wellness', label: 'Wellness, Living Arts & Calm', icon: '🌿', sub: 'Hammams, workshops, gardens, and slow living' }
  ]
};

/** Questions 2–5 per road — appended live by CategoryQuiz after Question 1 */
export const THINGS_ROAD_QUESTIONS: Record<string, QuizQuestion[]> = {
  // 🕌 ROAD A — Heritage, Old Towns & Culture
  'road-heritage': [
    {
      id: 'a2-atmosphere',
      question: 'What kind of atmosphere are you looking for?',
      weight: 'strong',
      options: [
        { id: 'quiet-history', label: 'Quiet History & Architecture', icon: '🏛️', sub: 'Ramparts, palaces, restored medinas, ruins, and quiet museums' },
        { id: 'souk-pulse', label: 'The Vibrant Pulse of the Souks', icon: '🏺', sub: 'Spice alleys, artisan leathercraft, bargaining, and street life' }
      ]
    },
    {
      id: 'a3-walking-appetite',
      question: 'What is your time and walking appetite?',
      options: [
        { id: 'quick-highlight', label: 'Quick Highlight (1–2 Hours)', icon: '⏱️', sub: 'Compact site, minimal steps, close to the city center' },
        { id: 'halfday-immersion', label: 'Half-Day Deep Immersion (3–4 Hours)', icon: '👟', sub: 'Extensive walking through stone labyrinths and multiple quarters' }
      ]
    },
    {
      id: 'a4-companions',
      question: 'Who is exploring with you?',
      weight: 'strong',
      options: [
        { id: 'solo-explorer', label: 'Solo Explorer', icon: '🎒', sub: 'Own pace, own decisions' },
        { id: 'romantic-couple', label: 'Romantic / Couple', icon: '🕯️', sub: 'Serene corners and panoramic views' },
        { id: 'family-seniors', label: 'Family with Kids or Seniors', icon: '👨\u200d👩\u200d👧', sub: 'Easy walking, kid-friendly comfort' },
        { id: 'friends-group', label: 'Group of Friends', icon: '👥', sub: 'Shared laughs and group energy' }
      ]
    },
    {
      id: 'a5-navigation',
      question: 'How do you prefer to navigate?',
      options: [
        { id: 'independent-wander', label: 'Independent Free-Wandering', icon: '🗺️', sub: 'Self-guided, my own pace, walk-in ticket' },
        { id: 'storyteller-insider', label: 'Storyteller & Local Insider', icon: '🗣️', sub: 'A licensed guide for secret history and hidden corners' }
      ]
    }
  ],  // 🏜️ ROAD B — Wild Nature & Open Landscapes
  'road-nature': [
    {
      id: 'b2-terrain',
      question: 'Which Moroccan terrain calls to you?',
      weight: 'strong',
      options: [
        { id: 'coastal-waves', label: 'Waves & Atlantic Coastal Cliffs', icon: '🌊', sub: 'Surf breaks, sea caves, prehistoric footprints, fishing villages' },
        { id: 'canyon-oasis', label: 'Canyons, Springs & Palm Oases', icon: '🌴', sub: 'Rock canyons, freshwater pools, Atlas foothill trails' },
        { id: 'dunes-wheels', label: 'Dunes, Wheels & Desert Trails', icon: '🐪', sub: 'Sunset camel caravans, dunes, quad biking, estuary wildlife' }
      ]
    },
    {
      id: 'b3-energy-mood',
      question: 'What energy level fits your mood?',
      options: [
        { id: 'scenic-chill', label: 'Scenic, Chill & Low-Stamina', icon: '🌅', sub: 'Gentle walking, viewpoints, photo stops, sunset strolls' },
        { id: 'high-action', label: 'High-Action & Sweaty', icon: '🧗', sub: 'Catching waves, scrambling canyon rocks, quad riding' }
      ]
    },
    {
      id: 'b4-day-commitment',
      question: 'How much of your day do you want to commit?',
      options: [
        { id: 'half-day-trip', label: 'Half-Day Trip (2–4 Hours)', icon: '⛅', sub: 'Just the city outskirts, back for lunch or dinner' },
        { id: 'full-day-outpost', label: 'Full-Day Outpost Expedition (5+ Hours)', icon: '🚐', sub: 'National parks, deep valleys, hidden coastal villages' }
      ]
    },
    {
      id: 'b5-party',
      question: 'Who is in your travel party?',
      weight: 'strong',
      options: [
        { id: 'adventure-solo-friends', label: 'Solo / Friends Seeking Adventure', icon: '🎒', sub: 'Beginner-friendly thrills together' },
        { id: 'couple-scenic-memories', label: 'Couple Seeking Scenic Memories', icon: '🕯️', sub: 'Golden-hour views and quiet moments' },
        { id: 'family-children', label: 'Family with Children', icon: '👨\u200d👩\u200d👧', sub: 'Safe, gentle fun for the little ones' }
      ]
    }
  ],

  // 🌿 ROAD C — Wellness, Living Arts & Calm
  'road-wellness': [
    {
      id: 'c2-unwind',
      question: 'How would you like to unwind?',
      weight: 'strong',
      options: [
        { id: 'hammam-steam', label: 'The Traditional Hammam & Steam Bath', icon: '🧖\u200d♀️', sub: 'Heated marble, black eucalyptus soap scrub, argan oil massage' },
        { id: 'artisan-masterclass', label: 'Hands-On Artisan Masterclasses', icon: '🏺', sub: 'Pottery, tagine cooking, or leathercraft with master artisans' },
        { id: 'botanical-sanctuary', label: 'Botanical Sanctuaries & Quiet Nature', icon: '🦩', sub: 'Shaded gardens, exotic aviary valleys, conservation parks' }
      ]
    },
    {
      id: 'c3-tier',
      question: 'What tier of experience do you prefer?',
      options: [
        { id: 'authentic-local', label: 'Authentic & Traditional (Local Style)', icon: '🪙', sub: 'Neighborhood prices, genuine culture, no luxury markup' },
        { id: 'premium-pampered', label: 'Premium & Pampered Sanctuary', icon: '✨', sub: 'Private cabins, plush robes, organic argan infusions' }
      ]
    },
    {
      id: 'c4-dedication',
      question: 'How much time do you want to dedicate?',
      options: [
        { id: 'express-reset', label: 'An Express Reset (1–2 Hours)', icon: '⏱️', sub: 'A focused scrub & massage, or a quick garden stroll' },
        { id: 'unrushed-halfday', label: 'An Unrushed Half-Day (3–4 Hours)', icon: '🍵', sub: 'Full multi-step body ritual with a mint tea lounge' }
      ]
    },
    {
      id: 'c5-privacy',
      question: 'What is your privacy preference?',
      weight: 'strong',
      options: [
        { id: 'private-exclusive', label: 'Private & Exclusive Retreat', icon: '🔒', sub: 'Private treatment rooms, no group mixing' },
        { id: 'social-family-friendly', label: 'Social, Open & Family-Friendly', icon: '👨\u200d👩\u200d👧', sub: 'Shared workshops, open gardens, fun for small groups' }
      ]
    }
  ]
};

// ── Tree helpers (used by CategoryQuiz, ResultPage and questions.ts) ──

/** The full tree (root + every road question) — for label/tag/weight lookups */
export const THINGS_TREE_ALL_QUESTIONS: QuizQuestion[] = [
  THINGS_TREE_ROOT_QUESTION,
  ...Object.values(THINGS_ROAD_QUESTIONS).flat()
];

/** Root + the chosen road's questions — the live 5-question quiz path */
export const getThingsTreeQuestions = (roadId?: string | null): QuizQuestion[] => [
  THINGS_TREE_ROOT_QUESTION,
  ...(roadId ? THINGS_ROAD_QUESTIONS[roadId] || [] : [])
];

/** Every option id in the tree (image resolution & match interception) */
export const THINGS_TREE_OPTION_IDS: Set<string> = new Set(
  THINGS_TREE_ALL_QUESTIONS.flatMap(q => q.options.map(o => o.id))
);

/** Question ids that belong to a road (NOT the root) — cleared when the road changes */
export const THINGS_TREE_FOLLOW_UP_QUESTION_IDS: Set<string> = new Set(
  Object.values(THINGS_ROAD_QUESTIONS).flat().map(q => q.id)
);
// ═══════════════════════════════════════════════════════════════════
// 🧮 SECTION 2 — FILTER ARRAYS (quiz answers → real listing criteria)
// Every option id is mapped to structured criteria on the REAL listings
// (no hallucinated data). One shared evaluator powers both the live
// "See Matches" counter and the results page scoring.
// ═══════════════════════════════════════════════════════════════════

export interface ThingsQuizFilter {
  // ── Hard criteria — a confirmed miss in the listing data eliminates the match ──
  tags?: string[];               // ANY keyword hits tags/vibeTags/name/description
  groupTypes?: string[];         // ANY overlap with the listing groupTypes
  lifestyles?: string[];        // ANY overlap with the listing lifestyle
  crowdLevels?: string[];       // crowdLevel must be one of these
  energyLevels?: string[];      // energyLevel must be one of these
  durationMaxMinutes?: number;  // durationMinutes <= max
  durationMinMinutes?: number;  // durationMinutes >= min
  walkInSelfGuided?: boolean;   // walkInOkay === true
  guideRequired?: boolean;      // hasLocalGuide or hasEnglishGuide
  hasPrivateOption?: boolean;   // hasPrivateOption === true
  walkingFatigueMax?: number;   // friction.walkingFatigue <= max
  physicalIntensityMax?: number;// friction.physicalIntensity <= max
  // ── Soft criteria — only add match signals, never eliminate on their own ──
  energySoft?: string[];        // energyLevel overlap → bonus signal
  isKidFriendlySoft?: boolean;  // true → signal; explicitly false → still a miss
  archetypeAffinity?: string[];// overlap → bonus signal
  vibeTags?: string[];          // overlap → bonus signal
  hasSunsetView?: boolean;      // true → bonus signal
  hasPrivateOptionSoft?: boolean;
  distanceFromCenterKmMax?: number; // within range → bonus signal
  fitnessKeywords?: string[];   // fitnessLevel text overlap → bonus signal
  sportIntentExperience?: boolean; // 'experience' → signal; 'practical' → miss
}

export const THINGS_QUIZ_FILTERS: Record<string, ThingsQuizFilter> = {
  // ── Question 1 — The Core Intent (Roads) ──
  'road-heritage': {
    tags: ['monument', 'monuments', 'historical', 'history', 'historic', 'museum', 'museums', 'heritage', 'medina', 'kasbah', 'fortress', 'palace', 'palaces', 'ruins', 'souk', 'souks', 'architecture', 'ramparts', 'bastion', 'old town', 'archaeology', 'zellij', 'mosque']
  },
  'road-nature': {
    tags: ['coastal', 'surf-kitesurf', 'surf', 'surfing', 'nature', 'mountain', 'mountains', 'hiking-trek', 'hiking', 'desert-sport', 'camel-ride', 'camel', 'camels', 'desert', 'oasis', 'canyon', 'canyons', 'valley', 'valleys', 'water-sports', 'adventure-sports', 'off-the-beaten-path', 'dune', 'dunes', 'beach', 'beaches', 'atlas', 'waterfall', 'waterfalls', 'kitesurf', 'ocean', 'cliffs', 'waves']
  },
  'road-wellness': {
    tags: ['hammam', 'wellness', 'spa', 'spas', 'cooking-class', 'cooking class', 'workshop', 'workshops', 'garden', 'gardens', 'botanical', 'yoga', 'massage', 'cooking', 'artisan', 'relax', 'relaxing', 'steam bath']
  },

  // ── ROAD A — Heritage, Old Towns & Culture ──
  'quiet-history': {
    tags: ['monument', 'monuments', 'historical', 'history', 'historic', 'museum', 'museums', 'heritage', 'palace', 'palaces', 'ruins', 'architecture', 'ramparts', 'kasbah', 'fortress', 'archaeology', 'medina', 'mosque', 'zellij', 'restored'],
    crowdLevels: ['quiet', 'balanced']
  },
  'souk-pulse': {
    tags: ['shopping', 'souk', 'souks', 'market', 'markets', 'bazaar', 'artisan', 'leather', 'spice', 'spices', 'haggle', 'bargain', 'stall', 'stalls', 'craft', 'crafts', 'authentic'],
    crowdLevels: ['bustling']
  },
  'quick-highlight': { durationMaxMinutes: 120, energySoft: ['relaxed'] },
  'halfday-immersion': { durationMinMinutes: 180, energySoft: ['active', 'moderate'] },
  'solo-explorer': { groupTypes: ['solo'], archetypeAffinity: ['nomad', 'culture'] },
  'romantic-couple': { groupTypes: ['couple', 'couples'], vibeTags: ['serene', 'panoramic', 'romantic', 'sunset', 'golden'] },
  'family-seniors': { groupTypes: ['family', 'families', 'seniors', 'kids-friendly'], walkingFatigueMax: 2, isKidFriendlySoft: true },
  'friends-group': { groupTypes: ['friends', 'large-groups'] },
  'independent-wander': { walkInSelfGuided: true },
  'storyteller-insider': { guideRequired: true },
  // ── ROAD B — Wild Nature & Open Landscapes ──
  'coastal-waves': {
    tags: ['coastal', 'surf-kitesurf', 'surf', 'surfing', 'water-sports', 'wave', 'waves', 'beach', 'beaches', 'atlantic', 'ocean', 'kitesurf', 'fishing', 'cliff', 'cliffs', 'sea cave', 'caves']
  },
  'canyon-oasis': {
    tags: ['mountain', 'mountains', 'hiking-trek', 'hiking', 'canyon', 'canyons', 'oasis', 'valley', 'valleys', 'waterfall', 'waterfalls', 'spring', 'springs', 'palm', 'palms', 'trek', 'trekking', 'river', 'pool', 'pools', 'foothills']
  },
  'dunes-wheels': {
    tags: ['desert-sport', 'camel-ride', 'camel', 'camels', 'dune', 'dunes', 'desert', 'quad', 'sahara', 'estuary', 'off-the-beaten-path', 'buggy', 'sandboarding', 'sand']
  },
  'scenic-chill': { energyLevels: ['relaxed'], fitnessKeywords: ['relaxed', 'easy', 'low', 'gentle'] },
  'high-action': { energyLevels: ['active', 'intense'], sportIntentExperience: true },
  'half-day-trip': { durationMaxMinutes: 240, distanceFromCenterKmMax: 20 },
  'full-day-outpost': { durationMinMinutes: 300 },
  'adventure-solo-friends': { groupTypes: ['solo', 'friends'] },
  'couple-scenic-memories': { groupTypes: ['couple', 'couples'], hasSunsetView: true },
  'family-children': { groupTypes: ['family', 'families', 'kids-friendly'], physicalIntensityMax: 2, isKidFriendlySoft: true },

  // ── ROAD C — Wellness, Living Arts & Calm ──
  'hammam-steam': {
    tags: ['hammam', 'wellness', 'spa', 'spas', 'steam', 'massage', 'massages', 'bath', 'baths', 'scrub', 'scrubs', 'exfoliation', 'exfoliating', 'argan']
  },
  'artisan-masterclass': {
    tags: ['cooking-class', 'cooking class', 'workshop', 'workshops', 'cooking', 'pottery', 'craft', 'crafts', 'artisan', 'artisans', 'culinary', 'masterclass', 'leathercraft', 'weaving']
  },
  'botanical-sanctuary': {
    tags: ['garden', 'gardens', 'botanical', 'aviary', 'crocodile', 'crocodiles', 'zoo', 'flora', 'conservation', 'birds'],
    crowdLevels: ['quiet']
  },
  'authentic-local': { lifestyles: ['lean', 'balanced'] },
  'premium-pampered': { lifestyles: ['premium'], hasPrivateOptionSoft: true },
  'express-reset': { durationMaxMinutes: 120 },
  'unrushed-halfday': { durationMinMinutes: 180 },
  'private-exclusive': { hasPrivateOption: true },
  'social-family-friendly': { groupTypes: ['family', 'families', 'friends'], isKidFriendlySoft: true }
};

export type ThingsQuizMatchResult = 'match' | 'miss' | 'neutral';

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Word-boundary keyword test against free text (also accepts a simple plural "s") */
const textHitsKeyword = (text: string, keyword: string): boolean =>
  new RegExp('\\b' + escapeRe(keyword) + '(?:s|es|ing|ed)?\\b', 'i').test(text);

/**
 * Evaluates one decision-tree quiz answer against a real listing:
 *  - 'match'   : the listing data confirms the criteria
 *  - 'miss'    : the listing data confirms the criteria are NOT met
 *  - 'neutral' : the listing data cannot confirm or deny (field missing)
 * Hard criteria eliminate on a confirmed miss; soft criteria only add
 * bonus signals so sparse-but-real data never over-penalizes a place.
 */
export function evaluateThingsQuizAnswer(item: any, optionId: string): ThingsQuizMatchResult {
  const filter = THINGS_QUIZ_FILTERS[optionId];
  if (!filter) return 'neutral';

  const name = String(item?.name || item?.title || '').toLowerCase();
  const description = String(item?.description || '').toLowerCase();
  const text = name + ' ' + description;
  const tags = [
    ...(Array.isArray(item?.tags) ? item.tags : []),
    ...(Array.isArray(item?.vibeTags) ? item.vibeTags : [])
  ].map((t: any) => String(t).toLowerCase());

  let matched = false;

  // ── Hard criteria ──
  if (filter.tags) {
    const hit = filter.tags.some(k => tags.includes(k) || textHitsKeyword(text, k));
    if (!hit) return 'miss';
    matched = true;
  }

  if (filter.groupTypes) {
    const groups = (Array.isArray(item?.groupTypes) ? item.groupTypes : []).map((g: any) => String(g).toLowerCase());
    if (groups.length === 0) return matched ? 'match' : 'neutral';
    if (!filter.groupTypes.some(g => groups.includes(g))) return 'miss';
    matched = true;
  }

  if (filter.lifestyles) {
    const lifestyles = (Array.isArray(item?.lifestyle) ? item.lifestyle : []).map((l: any) => String(l).toLowerCase());
    if (lifestyles.length === 0) return matched ? 'match' : 'neutral';
    if (!filter.lifestyles.some(l => lifestyles.includes(l))) return 'miss';
    matched = true;
  }

  if (filter.crowdLevels) {
    const crowd = item?.crowdLevel ? String(item.crowdLevel).toLowerCase() : null;
    if (!crowd) return matched ? 'match' : 'neutral';
    if (!filter.crowdLevels.includes(crowd)) return 'miss';
    matched = true;
  }

  if (filter.energyLevels) {
    const energy = item?.energyLevel ? String(item.energyLevel).toLowerCase() : null;
    if (!energy) return matched ? 'match' : 'neutral';
    if (!filter.energyLevels.includes(energy)) return 'miss';
    matched = true;
  }

  if (typeof filter.durationMaxMinutes === 'number') {
    if (typeof item?.durationMinutes !== 'number') return matched ? 'match' : 'neutral';
    if (item.durationMinutes > filter.durationMaxMinutes) return 'miss';
    matched = true;
  }

  if (typeof filter.durationMinMinutes === 'number') {
    if (typeof item?.durationMinutes !== 'number') return matched ? 'match' : 'neutral';
    if (item.durationMinutes < filter.durationMinMinutes) return 'miss';
    matched = true;
  }

  if (filter.walkInSelfGuided) {
    if (item?.walkInOkay === true) matched = true;
    else if (item?.walkInOkay === false) return 'miss';
    else return matched ? 'match' : 'neutral';
  }

  if (filter.guideRequired) {
    if (item?.hasLocalGuide === true || item?.hasEnglishGuide === true) matched = true;
    else if (item?.hasLocalGuide === false && item?.hasEnglishGuide === false) return 'miss';
    else return matched ? 'match' : 'neutral';
  }

  if (filter.hasPrivateOption) {
    if (item?.hasPrivateOption === true) matched = true;
    else if (item?.hasPrivateOption === false) return 'miss';
    else return matched ? 'match' : 'neutral';
  }

  if (typeof filter.walkingFatigueMax === 'number') {
    const friction = item?.friction;
    if (!friction || typeof friction.walkingFatigue !== 'number') return matched ? 'match' : 'neutral';
    if (friction.walkingFatigue > filter.walkingFatigueMax) return 'miss';
    matched = true;
  }

  if (typeof filter.physicalIntensityMax === 'number') {
    const friction = item?.friction;
    if (!friction || typeof friction.physicalIntensity !== 'number') return matched ? 'match' : 'neutral';
    if (friction.physicalIntensity > filter.physicalIntensityMax) return 'miss';
    matched = true;
  }

  // ── Soft criteria (bonus signals only) ──
  if (filter.energySoft && item?.energyLevel && filter.energySoft.includes(String(item.energyLevel).toLowerCase())) matched = true;

  if (filter.isKidFriendlySoft) {
    if (item?.isKidFriendly === true) matched = true;
    else if (item?.isKidFriendly === false) return 'miss';
  }

  if (filter.archetypeAffinity) {
    const affinity = (Array.isArray(item?.archetypeAffinity) ? item.archetypeAffinity : []).map((a: any) => String(a).toLowerCase());
    if (filter.archetypeAffinity.some(a => affinity.includes(a))) matched = true;
  }

  if (filter.vibeTags) {
    const vibes = (Array.isArray(item?.vibeTags) ? item.vibeTags : []).map((v: any) => String(v).toLowerCase());
    if (filter.vibeTags.some(v => vibes.some((lv: string) => lv.includes(v)) || textHitsKeyword(text, v))) matched = true;
  }

  if (filter.hasSunsetView && item?.hasSunsetView === true) matched = true;
  if (filter.hasPrivateOptionSoft && item?.hasPrivateOption === true) matched = true;

  if (typeof filter.distanceFromCenterKmMax === 'number' && typeof item?.distanceFromCenterKm === 'number' && item.distanceFromCenterKm <= filter.distanceFromCenterKmMax) matched = true;

  if (filter.fitnessKeywords && item?.fitnessLevel) {
    const fitness = String(item.fitnessLevel).toLowerCase();
    if (filter.fitnessKeywords.some(k => fitness.includes(k))) matched = true;
  }

  if (filter.sportIntentExperience) {
    const sportIntent = item?.sportIntent ? String(item.sportIntent).toLowerCase() : null;
    if (sportIntent === 'experience') matched = true;
    else if (sportIntent === 'practical') return 'miss';
  }

  return matched ? 'match' : 'neutral';
}

/** Simple boolean variant used by the live "See Matches" counter */
export const matchesThingsQuizAnswer = (item: any, optionId: string): boolean =>
  evaluateThingsQuizAnswer(item, optionId) !== 'miss';
// ═══════════════════════════════════════════════════════════════════
// 🖼️ SECTION 3 — UI ARRAYS (option images)
// Only existing workspace images that genuinely fit the option are mapped.
// Options without a fitting image are intentionally LEFT EMPTY so the quiz
// shows the pending placeholder — never a fake or unrelated image.
// ═══════════════════════════════════════════════════════════════════

import thingsQuizCulture from '../../assets/images/quizzes/things/things_quiz_culture.jpg';
import thingsQuizAdventureOutdoors from '../../assets/images/quizzes/things/things_quiz_adventure_outdoors.jpg';
import thingsQuizWellness from '../../assets/images/quizzes/things/things_quiz_wellness.jpg';
import thingsQuizHistoryHeritage from '../../assets/images/quizzes/things/things_quiz_history_heritage.jpg';
import thingsQuizMedina from '../../assets/images/quizzes/things/things_quiz_medina.jpg';
import thingsQuizGroupSolo from '../../assets/images/quizzes/things/things_quiz_group_solo.jpg';
import thingsQuizGroupCouple from '../../assets/images/quizzes/things/things_quiz_group_couple.jpg';
import thingsQuizGroupFamily from '../../assets/images/quizzes/things/things_quiz_group_family.jpg';
import thingsQuizGroupFriends from '../../assets/images/quizzes/things/things_quiz_group_friends.jpg';
import thingsQuizLocalGenuine from '../../assets/images/quizzes/things/things_quiz_local_genuine.jpg';
import thingsQuizCoastal from '../../assets/images/quizzes/things/things_quiz_coastal.jpg';
import thingsQuizNature from '../../assets/images/quizzes/things/things_quiz_nature.jpg';
import thingsQuizDesert from '../../assets/images/quizzes/things/things_quiz_desert.jpg';
import thingsQuizRelaxed from '../../assets/images/quizzes/things/things_quiz_relaxed.jpg';
import thingsQuizHighEnergy from '../../assets/images/quizzes/things/things_quiz_high_energy.jpg';
import thingsQuizAdventure from '../../assets/images/quizzes/things/things_quiz_adventure.jpg';
import thingsQuizHammamWellness from '../../assets/images/quizzes/things/things_quiz_hammam_wellness.jpg';
import thingsQuizFoodCooking from '../../assets/images/quizzes/things/things_quiz_food_cooking.jpg';
import thingsQuizZen from '../../assets/images/quizzes/things/things_quiz_zen.jpg';
import thingsQuizAuthentic from '../../assets/images/quizzes/things/things_quiz_authentic.jpg';
import thingsLifestylePremium from '../../assets/images/quizzes/things/things_lifestyle_premium_1787150784925.jpg';
import thingsQuizEasyUnhurried from '../../assets/images/quizzes/things/things_quiz_easy_unhurried.jpg';

/** Option id → existing image that fits (unmapped ids render the pending placeholder) */
export const THINGS_QUIZ_OPTION_IMAGES: Record<string, string> = {
  // Question 1 — The Core Intent
  'road-heritage': thingsQuizCulture,
  'road-nature': thingsQuizAdventureOutdoors,
  'road-wellness': thingsQuizWellness,

  // ROAD A — Heritage, Old Towns & Culture
  'quiet-history': thingsQuizHistoryHeritage,
  'souk-pulse': thingsQuizMedina,
  // 'quick-highlight' — no fitting image yet (intentionally left empty)
  // 'halfday-immersion' — no fitting image yet (intentionally left empty)
  'solo-explorer': thingsQuizGroupSolo,
  'romantic-couple': thingsQuizGroupCouple,
  'family-seniors': thingsQuizGroupFamily,
  'friends-group': thingsQuizGroupFriends,
  // 'independent-wander' — no fitting image yet (intentionally left empty)
  'storyteller-insider': thingsQuizLocalGenuine,

  // ROAD B — Wild Nature & Open Landscapes
  'coastal-waves': thingsQuizCoastal,
  'canyon-oasis': thingsQuizNature,
  'dunes-wheels': thingsQuizDesert,
  'scenic-chill': thingsQuizRelaxed,
  'high-action': thingsQuizHighEnergy,
  // 'half-day-trip' — no fitting image yet (intentionally left empty)
  // 'full-day-outpost' — no fitting image yet (intentionally left empty)
  'adventure-solo-friends': thingsQuizAdventure,
  'couple-scenic-memories': thingsQuizGroupCouple,
  'family-children': thingsQuizGroupFamily,

  // ROAD C — Wellness, Living Arts & Calm
  'hammam-steam': thingsQuizHammamWellness,
  'artisan-masterclass': thingsQuizFoodCooking,
  'botanical-sanctuary': thingsQuizZen,
  'authentic-local': thingsQuizAuthentic,
  'premium-pampered': thingsLifestylePremium,
  // 'express-reset' — no fitting image yet (intentionally left empty)
  'unrushed-halfday': thingsQuizEasyUnhurried,
  // 'private-exclusive' — no fitting image yet (intentionally left empty)
  'social-family-friendly': thingsQuizGroupFamily
};