/**
 * ═══════════════════════════════════════════════════════════════════════════
 * 🧪 PROTOTYPE ONLY — "Things You're Worried About!" section data.
 *
 * This file exists ONLY for the design prototype at /prototype/worries.
 * It is NOT connected to the real listing pages yet.
 *
 * ─── THE STRICT NO-HALLUCINATION RULE (READ BEFORE EDITING) ───
 *
 * Every `tag` and `description` below is a REAL, PER-PLACE answer to a
 * traveler worry. It must NEVER be invented, guessed, or AI-generated.
 *
 * RULES:
 *  1. A worry entry is either:
 *       • state: 'pending'   → description AND tag stay "(not available yet)"
 *                               until real info is gathered via web search.
 *       • state: 'verified'  → description + tag + source + tone were filled
 *                               AFTER web-search verification of THIS place.
 *  2. Above every tag in a real data file there MUST be a comment line:
 *         // ── WORRY SUMMARY: <1-2 words describing the worry>
 *  3. If the web research is not done yet, the entry stays 'pending'.
 *     Never write a "nice-sounding" tag to fill the space.
 *  4. `tone` describes the search RESULT (not the worry):
 *       • 'good'    → research shows the place handles this worry well
 *                     (the box image should show the good outcome)
 *       • 'caution' → research shows something to watch out for
 *                     (the box image should show the bad outcome)
 *  5. `tagColor` — ⚠️ THE CHIP COLOR DEPENDS ON WHAT THE TAG IS SAYING
 *     (its TOPIC), not on good/bad. Pick the key that matches the tag's
 *     meaning — never a random color:
 *       • 'water'   (light blue)  → tag talks about water / ice / drinks
 *       • 'money'   (gold)        → tag talks about prices, fees, the bill
 *       • 'hygiene' (mint)        → tag talks about cleanliness, bugs, sheets
 *       • 'safety'  (green)       → tag talks about safety, gear, security
 *       • 'noise'   (indigo)      → tag talks about noise, quiet, sleep quality
 *       • 'food'    (orange)      → tag talks about taste, cooking, food quality
 *       • 'craft'   (purple)      → tag talks about handmade / authentic products
 *       • 'alert'   (rose)        → tag talks about scams, trust, fakes
 *     Example: the tag "Filtered Water" is about water → tagColor: 'water'
 *     renders the chip LIGHT BLUE, even though the result is good.
 *  6. `image` (1:1 square) must FIT the search result — a reassuring image
 *     for 'good', a warning image for 'caution'. While an image is not
 *     chosen/collected yet, leave it undefined → the UI shows a placeholder.
 *
 * The 'verified' entries in this prototype file are MOCK EXAMPLES added
 * ONLY to review the visual design of the chips (one per topic color).
 * They are NOT real research. They must never be copied into real listing
 * data files.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export type WorryBoxState = 'verified' | 'pending';
export type WorryTone = 'good' | 'caution';

/**
 * Chip topic colors — the chip color DEPENDS ON WHAT THE TAG IS SAYING.
 * Example: a tag about water ("Filtered Water") uses 'water' → light blue.
 * Map: water (light blue) · money (gold) · hygiene (mint) · safety (green)
 *      noise (indigo) · food (orange) · craft (purple) · alert (rose)
 */
export type TagColorKey =
  | 'water' | 'money' | 'hygiene' | 'safety' | 'noise' | 'food' | 'craft' | 'alert';

/** Worry icon keys — mapped to lucide icons in WorriesSection.tsx */
export type WorryIconKey =
  | 'receipt' | 'droplets' | 'chef' | 'megaphone' | 'clock'
  | 'sparkles' | 'shield' | 'moon' | 'camera'
  | 'warning' | 'tag' | 'gem' | 'mountain' | 'award' | 'rotate';

export interface WorryBoxData {
  /** Stable id, e.g. 'food-water-safety' */
  id: string;
  /** Short title — 2-3 words max */
  title: string;
  /** Small description — 2 lines max. "(not available yet)" until web-verified. */
  description: string;
  /** Variable tag — 2 words max. "(not available yet)" until web-verified. */
  tag: string;
  /** 'pending' = web research not done yet. 'verified' = web-searched & sourced. */
  state: WorryBoxState;
  /** Result tone — required when verified. Undefined while pending. */
  tone?: WorryTone;
  /**
   * Chip color key — depends on WHAT THE TAG SAYS (its topic), not good/bad.
   * Example: "Filtered Water" → 'water' (light blue), "Menu Priced" → 'money'
   * (gold). Required when verified; the pending chip is always gray.
   */
  tagColor?: TagColorKey;
  /** Lucide icon key for this worry */
  icon: WorryIconKey;
  /** 1:1 square image fitting the result (good/bad). Undefined = placeholder. */
  image?: string;
  /** Where the verified info came from (only when state === 'verified') */
  source?: string;
}

/* ═════════════════════════════════════════════════════════════════════════
 * SAMPLE DATA — one sample listing per category, 5 worry boxes each.
 * Most entries are 'pending' (NOT web-searched yet). The clearly marked
 * MOCK EXAMPLES (state: 'verified') demo every topic chip color.
 * ═════════════════════════════════════════════════════════════════════════ */

/** 🍽 EAT — Sample listing: "Sample Eat Place" (placeholder name) */
export const SAMPLE_EAT_WORRIES: WorryBoxData[] = [
  {
    id: 'hidden-charges',
    title: 'Hidden Charges',
    icon: 'receipt',
    // ── WORRY SUMMARY: BILL — bread/olives/tea auto-added to the bill?
    // ⚠️ MOCK EXAMPLE — NOT REAL RESEARCH. Shows a MONEY-topic chip (gold):
    //    the tag "Menu Priced" talks about prices → tagColor: 'money'.
    //    In real data files this entry must be 'pending' until a web search
    //    (reviews, menus, articles about THIS place) confirms the answer.
    description: 'Every item is priced on the menu — no surprise extras at the end.',
    tag: 'Menu Priced',
    state: 'verified',
    tone: 'good',
    tagColor: 'money',
    source: 'MOCK — prototype chip design review only (not a real source)',
  },
  {
    id: 'food-water-safety',
    title: 'Food & Water Safety',
    icon: 'droplets',
    // ── WORRY SUMMARY: WATER — tap water in ice/juices, salads, seafood?
    // ⚠️ MOCK EXAMPLE — NOT REAL RESEARCH. Shows a WATER-topic chip (light
    //    blue): the tag "Filtered Water" talks about water → tagColor: 'water'.
    description:
      'Ice and juices are made with filtered water, and salads are properly washed.',
    tag: 'Filtered Water',
    state: 'verified',
    tone: 'good',
    tagColor: 'water',
    source: 'MOCK — prototype chip design review only (not a real source)',
  },
  {
    id: 'tourist-trap-food',
    title: 'Tourist Trap Food',
    icon: 'chef',
    // ── WORRY SUMMARY: AUTHENTICITY — bland tourist tagine vs real cooking?
    // ⚠️ MOCK EXAMPLE — NOT REAL RESEARCH. Shows a FOOD-topic chip (orange):
    //    the tag "Real Tagines" talks about food/taste → tagColor: 'food'.
    description: 'The kitchen cooks real, slow-made Moroccan food — not a tourist shortcut.',
    tag: 'Real Tagines',
    state: 'verified',
    tone: 'good',
    tagColor: 'food',
    source: 'MOCK — prototype chip design review only (not a real source)',
  },
  {
    id: 'pushy-touts',
    title: 'Pushy Touts',
    icon: 'megaphone',
    // ── WORRY SUMMARY: PRESSURE — aggressive touts pulling you inside?
    // ── STRICT RULE: not web-searched yet → keep "(not available yet)".
    description: '(not available yet)',
    tag: '(not available yet)',
    state: 'pending',
  },
  {
    id: 'service-pace',
    title: 'Service Pace',
    icon: 'clock',
    // ── WORRY SUMMARY: SERVICE — slow pace mistaken for neglect?
    // ── STRICT RULE: not web-searched yet → keep "(not available yet)".
    description: '(not available yet)',
    tag: '(not available yet)',
    state: 'pending',
  },
];

/** 🛏 SLEEP — Sample listing: "Sample Stay Place" (placeholder name) */
export const SAMPLE_SLEEP_WORRIES: WorryBoxData[] = [
  {
    id: 'cleanliness-bugs',
    title: 'Cleanliness & Bugs',
    icon: 'sparkles',
    // ── WORRY SUMMARY: CLEANLINESS — stained sheets, moldy bathrooms, bedbugs?
    // ⚠️ MOCK EXAMPLE — NOT REAL RESEARCH. Shows a HYGIENE-topic chip (mint):
    //    the tag "Spotless Rooms" talks about cleanliness → tagColor: 'hygiene'.
    description: 'Rooms and bathrooms are genuinely clean, with fresh sheets on every stay.',
    tag: 'Spotless Rooms',
    state: 'verified',
    tone: 'good',
    tagColor: 'hygiene',
    source: 'MOCK — prototype chip design review only (not a real source)',
  },
  {
    id: 'room-area-safety',
    title: 'Room & Area Safety',
    icon: 'shield',
    // ── WORRY SUMMARY: SAFETY — working locks, key access, safe at night?
    // ── STRICT RULE: not web-searched yet → keep "(not available yet)".
    description: '(not available yet)',
    tag: '(not available yet)',
    state: 'pending',
  },
  {
    id: 'noise-at-night',
    title: 'Noise at Night',
    icon: 'moon',
    // ── WORRY SUMMARY: NOISE — thin walls, traffic, doors slamming?
    // ⚠️ MOCK EXAMPLE — NOT REAL RESEARCH. Shows a NOISE-topic chip (indigo)
    //    on a CAUTION result: the tag "Thin Walls" talks about noise →
    //    tagColor: 'noise'. The color follows the tag's topic, not good/bad.
    description:
      'Some guests report hearing street noise and neighboring rooms at night.',
    tag: 'Thin Walls',
    state: 'verified',
    tone: 'caution',
    tagColor: 'noise',
    source: 'MOCK — prototype chip design review only (not a real source)',
  },
  {
    id: 'photo-vs-reality',
    title: 'Photo vs Reality',
    icon: 'camera',
    // ── WORRY SUMMARY: CATFISH — cramped room hidden by wide-angle photos?
    // ── STRICT RULE: not web-searched yet → keep "(not available yet)".
    description: '(not available yet)',
    tag: '(not available yet)',
    state: 'pending',
  },
  {
    id: 'hidden-fees',
    title: 'Hidden Fees',
    icon: 'receipt',
    // ── WORRY SUMMARY: FEES — surprise city tax, deposits, cleaning fees?
    // ── STRICT RULE: not web-searched yet → keep "(not available yet)".
    description: '(not available yet)',
    tag: '(not available yet)',
    state: 'pending',
  },
];

/** 🎿 THINGS TO DO — Sample listing: "Sample Activity" (placeholder name) */
export const SAMPLE_THINGS_WORRIES: WorryBoxData[] = [
  {
    id: 'activity-safety',
    title: 'Safety',
    icon: 'shield',
    // ── WORRY SUMMARY: SAFETY — activity, equipment, provider safety measures?
    // ⚠️ MOCK EXAMPLE — NOT REAL RESEARCH. Shows a SAFETY-topic chip (green):
    //    the tag "Pro Equipment" talks about gear/safety → tagColor: 'safety'.
    description: 'Harnesses, helmets and equipment are checked and maintained by the provider.',
    tag: 'Pro Equipment',
    state: 'verified',
    tone: 'good',
    tagColor: 'safety',
    source: 'MOCK — prototype chip design review only (not a real source)',
  },
  {
    id: 'activity-scams',
    title: 'Scams',
    icon: 'warning',
    // ── WORRY SUMMARY: SCAM — genuine provider, service matches promise?
    // ⚠️ MOCK EXAMPLE — NOT REAL RESEARCH. Shows an ALERT-topic chip (rose):
    //    the tag "Verified Operator" talks about trust/scams → tagColor: 'alert'.
    description: 'The operator is licensed and the service matches what was promised.',
    tag: 'Verified Operator',
    state: 'verified',
    tone: 'good',
    tagColor: 'alert',
    source: 'MOCK — prototype chip design review only (not a real source)',
  },
  {
    id: 'activity-pricing',
    title: 'Pricing',
    icon: 'tag',
    // ── WORRY SUMMARY: PRICE — total price, extras included or added later?
    // ── STRICT RULE: not web-searched yet → keep "(not available yet)".
    description: '(not available yet)',
    tag: '(not available yet)',
    state: 'pending',
  },
  {
    id: 'activity-authenticity',
    title: 'Authenticity',
    icon: 'gem',
    // ── WORRY SUMMARY: AUTHENTICITY — real experience vs staged show?
    // ── STRICT RULE: not web-searched yet → keep "(not available yet)".
    description: '(not available yet)',
    tag: '(not available yet)',
    state: 'pending',
  },
  {
    id: 'activity-difficulty',
    title: 'Difficulty',
    icon: 'mountain',
    // ── WORRY SUMMARY: DIFFICULTY — physical demands vs your abilities?
    // ── STRICT RULE: not web-searched yet → keep "(not available yet)".
    description: '(not available yet)',
    tag: '(not available yet)',
    state: 'pending',
  },
];

/** 🛍 SHOPPING — Sample listing: "Sample Shop" (placeholder name) */
export const SAMPLE_SHOP_WORRIES: WorryBoxData[] = [
  {
    id: 'shop-scams',
    title: 'Scams',
    icon: 'warning',
    // ── WORRY SUMMARY: SCAM — trustworthy seller, genuine product?
    // ── STRICT RULE: not web-searched yet → keep "(not available yet)".
    description: '(not available yet)',
    tag: '(not available yet)',
    state: 'pending',
  },
  {
    id: 'shop-pricing',
    title: 'Pricing',
    icon: 'tag',
    // ── WORRY SUMMARY: PRICE — fair price after bargaining, no overpaying?
    // ── STRICT RULE: not web-searched yet → keep "(not available yet)".
    description: '(not available yet)',
    tag: '(not available yet)',
    state: 'pending',
  },
  {
    id: 'shop-quality',
    title: 'Quality',
    icon: 'award',
    // ── WORRY SUMMARY: QUALITY — materials, craftsmanship, durability?
    // ── STRICT RULE: not web-searched yet → keep "(not available yet)".
    description: '(not available yet)',
    tag: '(not available yet)',
    state: 'pending',
  },
  {
    id: 'shop-authenticity',
    title: 'Authenticity',
    icon: 'gem',
    // ── WORRY SUMMARY: AUTHENTICITY — truly handmade vs mass-produced imports?
    // ⚠️ MOCK EXAMPLE — NOT REAL RESEARCH. Shows a CRAFT-topic chip (purple):
    //    the tag "Handmade Here" talks about handmade products → tagColor: 'craft'.
    description: 'Items are made on site by local artisans — not factory imports.',
    tag: 'Handmade Here',
    state: 'verified',
    tone: 'good',
    tagColor: 'craft',
    source: 'MOCK — prototype chip design review only (not a real source)',
  },
  {
    id: 'shop-returns',
    title: 'Returns',
    icon: 'rotate',
    // ── WORRY SUMMARY: RETURNS — return/exchange/refund policy before buying?
    // ⚠️ MOCK EXAMPLE — NOT REAL RESEARCH. Shows a MONEY-topic chip (gold) on
    //    a CAUTION result: the tag "No Refunds" talks about money →
    //    tagColor: 'money'. Same topic color as "Menu Priced" — the color
    //    follows the tag's topic, while the wording shows the bad outcome.
    description: 'Items cannot be returned once purchased — check sizes and condition before paying.',
    tag: 'No Refunds',
    state: 'verified',
    tone: 'caution',
    tagColor: 'money',
    source: 'MOCK — prototype chip design review only (not a real source)',
  },
];
