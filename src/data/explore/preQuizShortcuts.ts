/**
 * =========================================================================
 * PRE-QUIZ QUICK SHORTCUTS: Architecture & Question Engine
 * =========================================================================
 *
 * Defines the complete dataset for the Top-5 Quick Choices shown above the
 * category quiz (Step 1) in the Finder.
 *
 * Two critical behaviors:
 * 1. Any choice that represents a broader concept carries its own dedicated
 *    3-question mini-quiz — super fast, high relevance, without the 6 generic
 *    questions.
 * 2. For Shopping, we present BRANDS (not specific shop addresses). Clicking a
 *    brand gives a fast 2-option choice: "Find the closest one to me" OR
 *    "Choose an area/neighborhood in this city".
 *
 * DATA INTEGRITY: every mini-quiz option `tag` references REAL listing tags
 * used by the structured place data, and brand lookups resolve against the
 * real structured shop data first. Brands that are not stored in the
 * structured data never generate fake listings — they resolve via a
 * stateless Google Maps point-of-interest lookup instead.
 */

import type { QuizQuestion } from './questions';
import { registerTagSource } from './questions';

export interface ShortcutBrand {
  id: string;
  label: string;
  icon: string;
  description: string;
  /** Keywords matched (case-insensitive) against REAL structured listing data */
  nameMatch: string[];
  /** Google Maps search term for the stateless nearest-branch lookup */
  mapsQuery: string;
}

export interface PreQuizShortcut {
  id: string;
  label: string;
  icon: string;
  description: string;
  kind: 'mini-quiz' | 'brand-locator';
  /** 3-question mini-quiz (kind: 'mini-quiz') */
  questions?: QuizQuestion[];
  /** Brands (kind: 'brand-locator') — 1 = direct 2-choice modal, >1 = brand picker first */
  brands?: ShortcutBrand[];
  /** things-to-do: the real listing id this activity shortcut represents */
  activityId?: string;
}

// ─────────────────────────────────────────────────────────────
// 🍽️ EAT CATEGORY — Top 5 Choices & their 3-question mini-quizzes
// ─────────────────────────────────────────────────────────────

// Brands for Choice 2 — the 2-click Brand Locator applies here too
const FAST_FOOD_BRANDS: ShortcutBrand[] = [
  { id: 'mcdonalds', label: "McDonald's", icon: '🍟', description: 'Fries, burgers, McFlurry — familiar for kids', nameMatch: ['mcdonald'], mapsQuery: "McDonald's" },
  { id: 'kfc', label: 'KFC', icon: '🍗', description: 'Fried chicken buckets and family meals', nameMatch: ['kfc'], mapsQuery: 'KFC' },
  { id: 'burger-king', label: 'Burger King', icon: '👑', description: 'Whoppers and quick family dinners', nameMatch: ['burger king'], mapsQuery: 'Burger King' },
  { id: 'pizza-hut', label: "Pizza Hut / Domino's", icon: '🍕', description: 'Pizza delivery and mall food courts', nameMatch: ['pizza hut', 'domino'], mapsQuery: 'Pizza Hut' },
  { id: 'local-burger', label: 'Top-Rated Local Burger House', icon: '🍔', description: 'Real local burger spots from our verified data', nameMatch: ['burger'], mapsQuery: 'best burger restaurant' },
];

export const EAT_SHORTCUTS: PreQuizShortcut[] = [
  {
    id: 'eat-quick-snacks',
    label: 'Quick Snacks & Street Bites',
    icon: '🍟',
    description: 'For hungry travelers on the go in the medina or streets',
    kind: 'mini-quiz',
    questions: [
      {
        id: 'snack-craving',
        question: 'What kind of bite are you craving?',
        options: [
          { id: 'savory-street', label: 'Savory street food', tag: 'street-food', sub: 'Bocadillos, kefta skewers, maakouda potato patties, hot Msemmen' },
          { id: 'sweet-pastry', label: 'Sweet Moroccan pastries', tag: 'pastry', sub: 'Almond cornes de gazelle, honey chebakia, hot sfenj donuts' },
          { id: 'fresh-juice', label: 'Fresh smoothies & juices', tag: 'juice', sub: 'Zâazâa avocado shake, fresh squeezed orange juice' },
          { id: 'cafe-toast', label: 'Café & toasted sandwich', tag: 'cafe-pastry', sub: 'Panini, croissant, coffee' },
        ],
      },
      {
        id: 'snack-style',
        question: 'How do you want to eat it?',
        options: [
          { id: 'grab-and-go', label: 'Grab & go while walking', tag: 'street-food', sub: 'Fastest option' },
          { id: 'quick-sit', label: 'Sit down for 15 minutes', tag: 'cafe-pastry', sub: 'Rest feet with mint tea' },
          { id: 'late-night', label: 'Late-night bite', tag: 'late-night', sub: 'Open past midnight' },
        ],
      },
      {
        id: 'snack-price',
        question: 'What price range?',
        options: [
          { id: 'street-budget', label: 'Local stall prices', tag: 'budget', sub: '10 – 30 MAD / $1 – $3' },
          { id: 'bakery-cafe', label: 'Modern bakery / café', tag: 'cafe-pastry', sub: '30 – 70 MAD / $3 – $7' },
        ],
      },
    ],
  },
  {
    id: 'eat-cafe-breakfast',
    label: 'Café, Breakfast & Mint Tea',
    icon: '☕',
    description: 'For morning breakfast, coffee work sessions, or tea pauses',
    kind: 'mini-quiz',
    questions: [
      {
        id: 'cafe-reason',
        question: 'What is the main reason for this café visit?',
        options: [
          { id: 'moroccan-breakfast', label: 'Traditional breakfast', tag: 'breakfast', sub: 'Fresh bread, amlou, honey, olives, mint tea' },
          { id: 'coffee-pastry', label: 'Good coffee & French pastries', tag: 'cafe-pastry', sub: 'Espresso, cappuccino, croissants' },
          { id: 'work-wifi', label: 'Laptop & quiet Wi-Fi spot', tag: 'wifi', sub: 'Comfortable seating, power plugs' },
        ],
      },
      {
        id: 'cafe-atmosphere',
        question: 'What atmosphere do you want?',
        options: [
          { id: 'street-terrace', label: 'Sunny street terrace', tag: 'terrace', sub: 'People-watching, local buzz' },
          { id: 'quiet-garden', label: 'Quiet courtyard / garden', tag: 'quiet', sub: 'Peaceful, green, low noise' },
          { id: 'rooftop-view', label: 'Rooftop café', tag: 'rooftop', sub: 'Views over the city' },
        ],
      },
      {
        id: 'cafe-price',
        question: 'Price comfort?',
        options: [
          { id: 'popular-local', label: 'Traditional local café', tag: 'budget', sub: '15 – 30 MAD' },
          { id: 'boutique-roastery', label: 'Specialty coffee / boutique café', tag: 'cafe-pastry', sub: '35 – 80 MAD' },
        ],
      },
    ],
  },
  {
    id: 'eat-traditional',
    label: 'Authentic Traditional Lunch/Dinner',
    icon: '🍲',
    description: 'For travelers wanting real, hearty Moroccan cooking',
    kind: 'mini-quiz',
    questions: [
      {
        id: 'signature-dish',
        question: 'Which signature dish do you want most?',
        options: [
          { id: 'slow-tagine', label: 'Slow-cooked clay Tagine', tag: 'tagine', sub: 'Lamb with prunes, lemon chicken with olives' },
          { id: 'friday-couscous', label: 'Seven-vegetable Couscous', tag: 'couscous', sub: 'Authentic grain feast' },
          { id: 'crispy-pastilla', label: 'Pastilla', tag: 'pastilla', sub: 'Sweet & savory chicken/pigeon pastry with cinnamon' },
          { id: 'local-tanjia', label: 'Tanjia Marrakchia', tag: 'tanjia', sub: 'Clay urn slow-braised in hammam embers' },
        ],
      },
      {
        id: 'traditional-setting',
        question: 'What setting do you prefer?',
        options: [
          { id: 'authentic-riad', label: 'Candlelit Riad courtyard', tag: 'riad', sub: 'Fountain, soft music, romantic' },
          { id: 'local-popular', label: 'Bustling neighborhood favorite', tag: 'budget', sub: 'Where Moroccan families eat, great prices' },
          { id: 'palace-historic', label: 'Historic dining palace', tag: 'palace', sub: 'Lavish zellij, musicians, fine-dining service' },
        ],
      },
      {
        id: 'drinks-policy',
        question: 'Drinks policy?',
        options: [
          { id: 'alcohol-ok', label: 'Serves wine / cocktails', tag: 'alcohol', sub: 'Full bar available' },
          { id: 'traditional-dry', label: 'Traditional & dry', tag: 'dry', sub: 'Mint tea, fresh juices only' },
        ],
      },
    ],
  },
  {
    id: 'eat-rooftop',
    label: 'Rooftop Dining & Sunset Drinks',
    icon: '🌅',
    description: 'For scenic dinners, date nights, and sunset photography',
    kind: 'mini-quiz',
    questions: [
      {
        id: 'rooftop-occasion',
        question: 'What is the primary occasion?',
        options: [
          { id: 'romantic-dinner', label: 'Romantic dinner for two', tag: 'dinner', sub: 'Candlelit, intimate table' },
          { id: 'sunset-drinks', label: 'Sunset drinks & tapas', tag: 'sunset', sub: 'Lounge cushions, golden hour photos' },
          { id: 'dinner-show', label: 'Dinner with music / live show', tag: 'live-music', sub: 'Gnawa musicians, oriental vibe' },
        ],
      },
      {
        id: 'rooftop-view',
        question: 'What kind of view are you looking for?',
        options: [
          { id: 'medina-minarets', label: 'Medina rooftops & illuminated minarets', tag: 'medina', sub: 'The classic skyline' },
          { id: 'mountain-horizon', label: 'Atlas Mountain silhouette or ocean horizon', tag: 'mountain', sub: 'Wide open horizon' },
        ],
      },
      {
        id: 'rooftop-budget',
        question: 'Budget expectation?',
        options: [
          { id: 'moderate-rooftop', label: 'Moderate casual rooftop', tag: 'rooftop', sub: '120 – 250 MAD / person' },
          { id: 'premium-chic', label: 'Upscale fine dining lounge', tag: 'fine', sub: '350+ MAD / person' },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// 🛏️ STAYS (SLEEP) CATEGORY — Top 5 Choices & their 3-question mini-quizzes
// ─────────────────────────────────────────────────────────────

export const SLEEP_SHORTCUTS: PreQuizShortcut[] = [
  {
    id: 'sleep-closer-stays',
    label: 'Closer Stays (No Heavy Walking)',
    icon: '📍',
    description: 'Easy access & no dragging bags through confusing medina alleys',
    kind: 'mini-quiz',
    questions: [
      {
        id: 'access-distance',
        question: 'How close to transport/car access do you need to be?',
        options: [
          { id: 'doorstep-car', label: 'Car / Taxi drops me directly at the entrance', tag: 'ville-nouvelle', sub: 'Zero luggage carrying, best for late arrivals' },
          { id: 'short-gate-walk', label: 'Short 2–3 minute walk from main gate / parking', tag: 'medina-heart', sub: 'Authentic feel, luggage helpers nearby' },
          { id: 'deep-alleys-ok', label: 'Inside the pedestrian alleys is fine', tag: 'medina-heart', sub: 'If luggage assistance is arranged' },
        ],
      },
      {
        id: 'access-style',
        question: 'What style of accommodation?',
        options: [
          { id: 'accessible-riad', label: 'Boutique Riad near a main medina gate', tag: 'riad', sub: 'Authentic courtyard close to access' },
          { id: 'modern-hotel', label: 'Modern city hotel outside the medina walls', tag: 'hotel', sub: 'Elevator, wide streets' },
        ],
      },
      {
        id: 'access-group',
        question: 'Who is traveling with you?',
        options: [
          { id: 'solo-or-couple', label: 'Solo or Couple', tag: 'couple', sub: 'Traveling light' },
          { id: 'family-kids', label: 'Family with children or elderly', tag: 'family', sub: 'Step-free / ground floor preferred' },
        ],
      },
    ],
  },
  {
    id: 'sleep-top-rated',
    label: 'Popular & Top-Rated Favorites',
    icon: '⭐',
    description: 'For travelers who only want proven, zero-disappointment stays',
    kind: 'mini-quiz',
    questions: [
      {
        id: 'rating-standard',
        question: 'What guest rating standard do you require?',
        options: [
          { id: 'superb-9plus', label: 'Superb only', tag: 'top-rated', sub: 'Google 4.8★+ or Booking 9.2+ rating' },
          { id: 'great-value', label: 'High rating with great price', tag: 'great-value', sub: 'Google 4.5★ – 4.7★' },
        ],
      },
      {
        id: 'rating-comfort',
        question: 'Which non-negotiable comfort matters most?',
        options: [
          { id: 'pool-hammam', label: 'Swimming pool & on-site spa', tag: 'pool', sub: 'Cool down after a hot day' },
          { id: 'silent-sleep', label: 'Guaranteed quiet room', tag: 'quiet', sub: 'Double glazing, away from mosques/markets' },
          { id: 'exceptional-breakfast', label: 'Gourmet rooftop breakfast included', tag: 'breakfast', sub: 'The morning highlight' },
        ],
      },
      {
        id: 'rating-price',
        question: 'Price tier?',
        options: [
          { id: 'value-gem', label: 'Budget-to-mid gem', tag: 'budget', sub: '400 – 900 MAD / night' },
          { id: 'boutique-luxury', label: 'Upscale boutique riad / palace', tag: 'luxury', sub: '1,200 – 3,000 MAD / night' },
        ],
      },
    ],
  },
  {
    id: 'sleep-heritage-riads',
    label: 'Authentic Heritage Riads',
    icon: '🏺',
    description: 'For travelers wanting historic Moroccan architecture',
    kind: 'mini-quiz',
    questions: [
      {
        id: 'heritage-highlight',
        question: 'What architectural highlight do you crave?',
        options: [
          { id: 'zellij-fountain', label: 'Traditional courtyard with mosaic fountain & orange trees', tag: 'riad', sub: 'The classic riad heart' },
          { id: 'panoramic-roof', label: 'Wide rooftop terrace overlooking medina skyline', tag: 'rooftop', sub: 'Sunrise breakfasts with a view' },
          { id: 'historic-carvings', label: 'Restored 18th-century carved cedar wood & stucco', tag: 'heritage', sub: 'Craftsmanship from another era' },
        ],
      },
      {
        id: 'heritage-size',
        question: 'Atmosphere size?',
        options: [
          { id: 'intimate-dar', label: 'Small & intimate', tag: 'intimate', sub: '4 to 6 rooms only, personalized attention' },
          { id: 'grand-riad', label: 'Grand boutique riad', tag: 'grand', sub: '10 to 15 rooms, full restaurant team' },
        ],
      },
      {
        id: 'heritage-location',
        question: 'Location feel?',
        options: [
          { id: 'medina-center', label: 'Steps from the main souks & sights', tag: 'medina-heart', sub: 'In the middle of everything' },
          { id: 'quiet-kasbah', label: 'In a quieter, residential medina quarter', tag: 'quiet', sub: 'Calm streets, local life' },
        ],
      },
    ],
  },
  {
    id: 'sleep-pool-spa',
    label: 'Pool & Spa Sanctuary',
    icon: '🏊',
    description: 'Essential for cooling down after a hot day in the city',
    kind: 'mini-quiz',
    questions: [
      {
        id: 'pool-setup',
        question: 'What kind of pool setup do you want?',
        options: [
          { id: 'sunny-outdoor', label: 'Large sunny garden pool', tag: 'pool', sub: 'Space for sun loungers and swimming' },
          { id: 'courtyard-plunge', label: 'Intimate courtyard plunge pool', tag: 'pool', sub: 'For a quick refreshing dip' },
          { id: 'heated-pool', label: 'Heated pool', tag: 'pool', sub: 'Ideal for winter/spring visits' },
        ],
      },
      {
        id: 'pool-spa-needs',
        question: 'What spa facilities do you need on-site?',
        options: [
          { id: 'full-hammam', label: 'Private traditional hammam scrub & steam room', tag: 'hammam', sub: 'The full ritual' },
          { id: 'massage-only', label: 'Massage room with natural organic argan oil', tag: 'spa', sub: 'Deep relaxation' },
          { id: 'pool-only', label: 'Pool is enough, no spa needed', tag: 'pool', sub: 'Keep it simple' },
        ],
      },
      {
        id: 'pool-location',
        question: 'Location preference?',
        options: [
          { id: 'in-the-medina', label: 'Inside the medina walls', tag: 'medina-heart', sub: 'Steps from the souks' },
          { id: 'outside-oasis', label: 'In the green outskirts / Palmeraie / valley', tag: 'countryside', sub: 'Resort space' },
        ],
      },
    ],
  },
  {
    id: 'sleep-budget-hostels',
    label: 'High-Value Budget & Social Hostels',
    icon: '🏷️',
    description: 'For solo backpackers, students, and smart budget travelers',
    kind: 'mini-quiz',
    questions: [
      {
        id: 'hostel-room',
        question: 'What room type are you looking for?',
        options: [
          { id: 'shared-dorm', label: 'Bunk bed in a clean shared dorm', tag: 'dorm', sub: 'Under 200 MAD / night' },
          { id: 'private-budget', label: 'Private room on a budget', tag: 'budget', sub: 'Clean private room under 450 MAD' },
        ],
      },
      {
        id: 'hostel-vibe',
        question: 'What vibe fits your trip?',
        options: [
          { id: 'social-events', label: 'Active & social', tag: 'social', sub: 'Rooftop dinners, pub crawls, group day trips' },
          { id: 'chill-quiet', label: 'Quiet & relaxed', tag: 'quiet', sub: 'Good sleep, calm common area, digital nomad friendly' },
        ],
      },
      {
        id: 'hostel-amenity',
        question: 'What amenity is essential?',
        options: [
          { id: 'free-breakfast', label: 'Free morning breakfast included', tag: 'breakfast', sub: 'Fuel for the day' },
          { id: 'strong-wifi', label: 'Strong reliable Wi-Fi for work', tag: 'wifi', sub: 'Video calls without drops' },
          { id: 'ac-heating', label: 'Air conditioning in the room', tag: 'ac', sub: 'Cool nights in summer' },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// 🎯 THINGS TO DO — shared 3-question tour qualifier
// ─────────────────────────────────────────────────────────────
// The 5 iconic activities per city are resolved from the REAL top-rated
// things listings at runtime (never hallucinated) via getThingsShortcuts().

export const THINGS_TOUR_QUESTIONS: QuizQuestion[] = [
  {
    id: 'tour-format',
    question: 'What tour format do you prefer?',
    options: [
      { id: 'small-group', label: 'Friendly small-group tour', tag: 'small-group', sub: 'Best balance of price and social vibe' },
      { id: 'private-vip', label: '100% Private guide / vehicle', tag: 'private', sub: 'Custom pace, personal attention' },
      { id: 'ticket-only', label: 'Self-guided ticket / walk-in only', tag: 'walk-in', sub: 'Just entry access, no guide' },
    ],
  },
  {
    id: 'tour-timing',
    question: 'When is your best time for this?',
    options: [
      { id: 'morning', label: 'Morning departure', tag: 'morning', sub: 'Beat the heat and crowds' },
      { id: 'sunset-golden', label: 'Sunset / Golden hour', tag: 'sunset', sub: 'Best photography and cooler air' },
      { id: 'full-day', label: 'Full day excursion', tag: 'full-day', sub: 'Deep immersion' },
    ],
  },
  {
    id: 'tour-energy',
    question: 'Physical energy & comfort level?',
    options: [
      { id: 'relaxed-easy', label: 'Easy & relaxed', tag: 'relaxed', sub: 'Minimal physical effort, shaded stops' },
      { id: 'thrilling-active', label: 'Thrilling & active', tag: 'active', sub: 'Adventure, moving, walking, adrenaline' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// 🛍️ SHOPPING — Brands (not specific addresses) & location choice
// ─────────────────────────────────────────────────────────────

export const SHOPPING_BRANDS: ShortcutBrand[] = [
  { id: 'marjane', label: 'Marjane', icon: '🛒', description: "Morocco's premier hypermarket — electronics, food, baby gear, toiletries", nameMatch: ['marjane'], mapsQuery: 'Marjane' },
  { id: 'carrefour', label: 'Carrefour & Carrefour Market', icon: '🥖', description: 'Global French supermarket — gourmet food, groceries, deli', nameMatch: ['carrefour'], mapsQuery: 'Carrefour' },
  { id: 'decathlon', label: 'Decathlon', icon: '⚽', description: 'Global sports brand — hiking boots, water shoes, sunscreen, luggage, camping', nameMatch: ['decathlon'], mapsQuery: 'Decathlon' },
  { id: 'atacadao-bim', label: 'Atacadão / BIM', icon: '🏬', description: 'Everyday wholesale snacks, bottled water, quick staples', nameMatch: ['atacadao', 'atacadao', 'bim'], mapsQuery: 'Atacadao' },
  { id: 'ensemble-artisanal', label: 'Ensemble Artisanal', icon: '🏷️', description: 'Government-certified fixed price artisan center — 0 haggling', nameMatch: ['ensemble artisanal', 'ensemble'], mapsQuery: 'Ensemble Artisanal' },
];

// ─────────────────────────────────────────────────────────────
// Registry & resolvers
// ─────────────────────────────────────────────────────────────

/** Every mini-quiz question in this dataset — used for tag resolution */
export const PRE_QUIZ_QUESTION_REGISTRY: QuizQuestion[] = [
  ...EAT_SHORTCUTS.filter(s => s.kind === 'mini-quiz').flatMap(s => s.questions || []),
  ...SLEEP_SHORTCUTS.filter(s => s.kind === 'mini-quiz').flatMap(s => s.questions || []),
  ...THINGS_TOUR_QUESTIONS,
];

// Register the mini-quiz questions so getTagForOptionId() and
// getQuizWeightForQuestionId() resolve their option tags (real listing tags).
registerTagSource(PRE_QUIZ_QUESTION_REGISTRY);

/**
 * Top-5 quick shortcuts for a category. For things-to-do use
 * getThingsShortcuts() instead (it resolves from real city listings).
 */
export function getShortcutsForCategory(
  categoryId: string | null,
  cityListings: any[] = []
): PreQuizShortcut[] {
  if (!categoryId) return [];
  if (categoryId === 'food' || categoryId === 'eat') return EAT_SHORTCUTS;
  if (categoryId === 'sleep' || categoryId === 'stays' || categoryId === 'stay') return SLEEP_SHORTCUTS;
  if (categoryId === 'shopping' || categoryId === 'shop') {
    // Shopping shows BRAND pills (not specific addresses) — each pill opens
    // the 2-click Brand Locator directly (single brand → location choice).
    return SHOPPING_BRANDS.map(b => ({
      id: `brand-${b.id}`,
      label: b.label,
      icon: b.icon,
      description: b.description,
      kind: 'brand-locator' as const,
      brands: [b],
    }));
  }
  void cityListings;
  return [];
}

/**
 * Top-5 iconic activities for a city, resolved from the REAL things listings
 * (rating weighted by review volume). Clicking one opens the shared
 * 3-question tour qualifier.
 */
export function getThingsShortcuts(cityListings: any[] = []): PreQuizShortcut[] {
  const popularityScore = (l: any): number => {
    const rating = Number(l?.googleRating) || 0;
    const reviews = Number(l?.reviewCount) || 0;
    return rating * Math.log10(reviews + 10);
  };

  const top5 = [...cityListings]
    .filter(l => (Number(l?.googleRating) || 0) > 0)
    .sort((a, b) => popularityScore(b) - popularityScore(a))
    .slice(0, 5);

  return top5.map(l => ({
    id: `activity-${l.id}`,
    label: l.name,
    icon: '🎯',
    description: String(l?.neighborhood || ''),
    kind: 'mini-quiz' as const,
    activityId: l.id,
    questions: THINGS_TOUR_QUESTIONS,
  }));
}