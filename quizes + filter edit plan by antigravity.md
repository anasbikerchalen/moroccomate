# 🧭 Finder Website — Quiz & Filter Improvement Plan

**Role chosen:** UX Recommendation Architect — focused on making the quiz + filter pipeline deliver the *exact* results travelers hope for.

---

## Current System Summary

The Finder website has a solid foundation:
- **4 category quizzes** (Food, Sleep, Shopping, Things to Do) with 4–6 steps each
- **2 shared base questions** (spending style + group type)
- **Rich image-based option cards** with warm Moroccan illustrations
- **A scoring engine** that calculates match % using tag/field matching + open-hours boost
- **Post-quiz filters**: FilterChipBar (quick specialty chips) + FilterPanel modal (archetypes, tags, must-haves, budget, rating)

---

## 🔍 Problems Identified

### Quiz Issues

| # | Problem | Impact |
|---|---------|--------|
| Q1 | **No "WHY" explanation** — User never sees *why* a result matched | Breaks trust. Best practice says travelers need to see reasoning to trust recommendations |
| Q2 | **Flat scoring — all quiz answers weighted equally** | A family's "kid friendly" need has the same weight as their vibe preference, but one is a hard requirement and the other is a nice-to-have |
| Q3 | **No conditional branching** — Everyone sees the same questions regardless of previous answers | A solo budget traveler still sees the same flow as a premium couple. This wastes questions and misses deeper personalization |
| Q4 | **Missing "intensity of preference" signals** — single-click means "I prefer this" and "I absolutely need this" look the same | Pool is a dealbreaker for some families but just a bonus for others. The system can't tell the difference |
| Q5 | **Vibe question ("Who do you want to meet along the way?") is confusing** — The question text doesn't match the options (Local & Genuine, Photo-Worthy, etc.) | Users pause, confused. This hurts completion rates |
| Q6 | **Food quiz lacks cuisine type question** — No way to express "I want Moroccan traditional" vs "I want international/fusion" | This is the #1 deciding factor for dining yet it's entirely absent |
| Q7 | **Sleep quiz lacks location preference** — "In the medina heart" vs "Quiet and outside" is not asked | Where you sleep is as important as what type of bed |

### Filter & Results Issues

| # | Problem | Impact |
|---|---------|--------|
| F1 | **No match % or "why this matched" shown on cards** | User can't see the scoring. The engine calculates it but hides it. This kills personalization transparency |
| F2 | **FilterChipBar has too few options for Food** — Only 5 chips (Vegetarian, Halal, Seafood, Fine Dining, Street Food) | Missing major dining preferences: Rooftop, Traditional Moroccan, Alcohol, Kid Friendly |
| F3 | **FilterPanel's "Category Tags" section shows raw tag IDs** — Some tags display as `culture` or `off-the-beaten-path` instead of pretty labels | Rough UX for a premium-feeling product |
| F4 | **No "Open Now" quick filter** — The engine boosts open places in scoring but the user can't explicitly filter for them | Travelers in-country RIGHT NOW need this. It's the #1 real-time filter request |
| F5 | **No price range quick filter on results** — Budget/Mid/Premium from the quiz doesn't appear as a removable result chip | User who picked "Lean" can't easily toggle to see "Balanced" without retaking the quiz |
| F6 | **Sort dropdown is basic** — Missing "Nearest First" (proximity sorting) which is critical for in-city exploration | You found the match, now help me walk there |
| F7 | **"Not finding what you want? Retake the quiz" link is too small and buried at the bottom** | Users who want to adjust 1 answer must redo the entire quiz. Need per-question edit capability |
| F8 | **No live result count feedback** on filter changes — User toggles "Pool" but doesn't know if 12 or 0 places have it | Leads to "0 matches" dead-ends with no guidance |

---

## 🐛 Critical Bugs Found During Analysis

> [!CAUTION]
> These are real bugs in the current code that break the user experience. They should be fixed regardless of the improvement plan.

### Bug 1: Price Sort Produces Garbage Results (NaN)
In [ResultPage.tsx](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/components/finder/ResultPage.tsx#L350-L360), sorting by price does:
```ts
const pA = a.priceMultiplier ?? a.priceLevel ?? 1;
```
For shops, `priceLevel` is a **string** like `"budget"` or `"mid-range"`. JavaScript computes `"budget" - "mid-range"` = `NaN`, which completely breaks the sort order. **Users sorting by price see random results.**

### Bug 2: Shop Quiz Answers Never Match on Results Page
In `CategoryQuiz.tsx`, the quiz correctly maps `base-lifestyle` to shop `priceLevel` (lean → budget, balanced → mid-range, premium → premium/luxury). But in `ResultPage.tsx` line 261–264, the results scoring only checks `item.lifestyle?.includes(tag)`. Shops don't have a `lifestyle` field — they have `priceLevel`. **So quiz answers for spending style NEVER improve shop rankings.** The quiz appears to work but actually doesn't personalize shopping results.

### Bug 3: Hardcoded Shop IDs for "Low Pressure" Filter
In `ResultPage.tsx` line 201: `const hasGoodIntel = item.id === 'sh-mar-1' || item.id === 'sh-mar-2'` — only 2 specific Marrakech shops get the "low pressure" benefit. Shops in Fes, Essaouira, or any other city are ignored even if they qualify.

---

## 🎯 Proposed Changes

### Phase 1 — Quiz Intelligence Upgrades

---

#### 1.1 Add Weighted Scoring with Priority Tiers

**What changes:** Assign each quiz question a weight tier: **Hard Filter** (must match or heavily penalize), **Strong Signal** (2× weight), or **Soft Signal** (1× normal weight).

| Question | Current Weight | New Tier | Why |
|----------|---------------|----------|-----|
| `base-lifestyle` (spending) | 1× | **Hard Filter** | A budget traveler at a luxury restaurant = bad match |
| `base-group` (group type) | 1× | **Strong Signal (2×)** | Family at adults-only riad = bad match, but less absolute than budget |
| `food-diet` (halal/veg/alcohol) | 1× | **Hard Filter** | Dietary needs are non-negotiable |
| `sleep-type` (riad/hotel/camp) | 1× | **Strong Signal (2×)** | Strong preference, not absolute dealbreaker |
| `food-vibe`, `vibe`, `energy-level` | 1× | **Soft Signal (1×)** | Nice-to-have flavor preferences |
| `setting` (medina/desert/coastal) | 1× | **Strong Signal (2×)** | Location matters a lot for activities |

**Files to modify:**
- [ResultPage.tsx](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/components/finder/ResultPage.tsx) — Update scoring formula
- [questions.ts](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/data/explore/questions.ts) — Add `weight` field to `QuizQuestion` interface

---

#### 1.2 Add Missing High-Impact Questions

##### A. Food: Add "Cuisine Preference" question (NEW)

**New question `food-cuisine`** — *"What kind of food are you craving?"*
- **moroccan-traditional**: *Traditional Moroccan* — "Tagine, couscous, pastilla, the real deal"
- **international**: *International & Fusion* — "Italian, Asian, French, or creative fusion"
- **cafe-pastry**: *Café & Pastries* — "Coffee spots, patisseries, and sweet treats"  
- **seafood**: *Fresh Seafood* — "Ocean-fresh catch and coastal dishes"

##### B. Sleep: Add "Location Feel" question (NEW)

**New question `sleep-location`** — *"Where should your stay be?"*
- **medina-heart**: *Heart of the Medina* — "Inside the historic walls, steps from the action"
- **ville-nouvelle**: *Modern City District* — "Wide streets, familiar comfort, easy parking"
- **countryside**: *Countryside & Nature* — "Peaceful, surrounded by palms or mountains"

##### C. Things: Fix the "Vibe" question wording

**Current:** "Who do you want to meet along the way?"  
**New:** "What kind of experiences are you drawn to?"

**Files to modify:**
- [questions.ts](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/data/explore/questions.ts) — Add new questions + fix wording

---

#### 1.3 Add Smart Conditional Branching (Lite)

Instead of full conditional branching (complex), add a "smart skip" feature:
- If user selects **"Family"** group → auto-activate `isKidFriendly` filter silently
- If user selects **"Lean"** lifestyle → skip showing premium-only options in later questions
- If user selects **"Halal Only"** diet → auto-set the `isHalal` filter flag

This gives personalization benefits without adding more quiz steps.

**Files to modify:**
- [CategoryQuiz.tsx](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/components/finder/CategoryQuiz.tsx) — Add smart auto-filter logic on `onComplete`
- [exploreStore.ts](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/state/exploreStore.ts) — New action for auto-setting filters from quiz answers

---

### Phase 2 — Results Page & Filter Improvements

---

#### 2.1 Show Match Quality on Result Cards

Add a compact **match badge** to each result card showing how well it matched:
- **95–100%**: 🟢 "Perfect Match" (green badge)
- **75–94%**: 🟡 "Great Match" (gold badge)  
- **50–74%**: 🟠 "Good Match" (amber)
- **Below 50%**: No badge shown (still listed but not highlighted)

Also add a small **"Why this matched"** expandable line below the description showing which quiz answers it matched on (e.g., "✓ Lean budget · ✓ Solo friendly · ✓ Rooftop · ✗ Halal").

**Files to modify:**
- [ResultPage.tsx](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/components/finder/ResultPage.tsx) — Add match badge + why-matched section

---

#### 2.2 Add "Open Now" Quick Filter

Add an "🕐 Open Now" chip to the FilterChipBar for all categories. When active, it hard-filters to only show places currently open (using the existing `getShopStatus` engine).

**Files to modify:**
- [FilterChipBar.tsx](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/components/finder/FilterChipBar.tsx) — Add Open Now chip to all categories
- [ResultPage.tsx](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/components/finder/ResultPage.tsx) — Add hard filter for open status

---

#### 2.3 Expand FilterChipBar Per Category

**Food** (currently 5 chips → expand to 8):
Add: `🏠 Traditional Moroccan`, `🌇 Rooftop Views`, `👶 Kid Friendly`

**Sleep** (currently 6 chips → expand to 8):
Add: `🏜️ Desert Camp`, `🌿 Garden/Courtyard` → Replace: `Mountain Gite` (rare) → `🌅 Rooftop Terrace`

**Shopping** (currently 4 chips → expand to 6):
Add: `🔨 Live Workshop`, `❤️ Local Favorite`

**Things** (currently 7 chips → keep 7, rebalance):
Replace: `Festival Venue` (too niche) → `🏛️ Cultural Heritage`

**Files to modify:**
- [FilterChipBar.tsx](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/components/finder/FilterChipBar.tsx) — Update CATEGORY_CHIPS

---

#### 2.4 Add Per-Answer Quick Edit on Results Page

Instead of "Retake the quiz" (full redo), show the user's quiz answers as editable chips at the top of results. Clicking one opens a mini-selector to change just that answer and instantly re-score.

Example: `[Solo 👤 ✕] [Lean 💰 ✕] [Rooftop 🌇 ✕] [Halal 🌙 ✕]`

Removing a chip removes that filter criteria; clicking it opens a small dropdown to switch to a different option.

**Files to modify:**
- [ResultPage.tsx](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/components/finder/ResultPage.tsx) — Add quiz answer pills with edit capability

---

#### 2.5 Add Live Result Count to Filter Toggle

When a user hovers or taps a filter chip, show how many results match with that filter active (e.g., "Pool (3)" or "Halal (12)"). This prevents 0-match dead ends.

**Files to modify:**
- [FilterChipBar.tsx](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/components/finder/FilterChipBar.tsx) — Add count calculation
- [FilterPanel.tsx](file:///c:/Users/viet/Downloads/morocco-journey-guide%20(29)/finder-website/src/components/finder/modals/FilterPanel.tsx) — Show counts on toggle buttons

---

### Phase 3 — New Quiz Option Images

> [!IMPORTANT]
> Per workspace rule §4, no existing images will be regenerated. These are prompts for **NEW images only**, for the newly added quiz questions.

---

#### 3.1 Food Cuisine Preference (NEW Question)

| Option | Image Prompt |
|--------|-------------|
| **Traditional Moroccan** | `"Steaming round tagine pot with saffron chicken, preserved lemons and green olives on a zellij tile table, warm ambient light, clay walls in background. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."` |
| **International & Fusion** | `"Modern plated dish combining Moroccan spices with European presentation, edible flowers, on a white minimalist restaurant table with copper utensils. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."` |
| **Café & Pastries** | `"Sunlit Moroccan café terrace table with a latte art coffee, flaky croissant, and a plate of Moroccan cornes de gazelle pastries, bougainvillea in background. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."` |
| **Fresh Seafood** | `"Essaouira harbor-style grilled fish platter with sardines, prawns, and lemon wedges on a blue-and-white ceramic plate, fishing boats in soft background. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."` |

---

#### 3.2 Sleep Location Feel (NEW Question)

| Option | Image Prompt |
|--------|-------------|
| **Heart of the Medina** | `"View from a narrow medina alley doorway looking into a quiet Riad courtyard with mosaic fountain, hanging lanterns, and carved wooden door frames, warm golden light. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."` |
| **Modern City District** | `"Wide palm-lined Gueliz boulevard with a modern boutique hotel entrance, glass doors, a doorman, and parked vintage car. Clean, contemporary feel. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."` |
| **Countryside & Nature** | `"Peaceful Atlas mountain lodge surrounded by palm trees and terraced gardens, distant snow-capped peaks, morning mist rising from a valley. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."` |

---

## Open Questions

> [!IMPORTANT]
> **For the owner to decide:**

1. **Phase priority**: Should I implement all 3 phases at once, or start with Phase 1 (quiz improvements) first and do the results page separately?

2. **"Why this matched" transparency**: Do you want to show travelers exactly which quiz answers each place matched on? Or would you prefer keeping the scoring invisible and just showing the percentage badge?

3. **Smart auto-filters**: When a family selects "Family" in the quiz, should the app automatically turn ON the "Kid Friendly" filter (which might hide some places), or just boost kid-friendly places higher without hiding others?

4. **New images**: Should I generate the 7 new quiz option images listed above (4 cuisine + 3 location)? They don't exist in the workspace yet, so this would be NEW image generation.

5. **Proximity sorting ("Nearest First")**: This would require the user to share their browser location. Do you want this feature, or is it too intrusive for the product's personality?

---

## Verification Plan

### Automated Tests
- Build verification: `cd finder-website && npm run build` to ensure no compilation errors
- Type checking: `cd finder-website && npx tsc --noEmit` to verify TypeScript

### Manual Verification
- Walk through each category quiz (Food, Sleep, Shopping, Things to Do) to verify:
  - New questions appear correctly with images
  - Scoring produces visibly different rankings when changing answers
  - Match badges appear on result cards
  - Filter chips work and show counts
  - "Open Now" filter correctly filters
  - Quiz answer pills on results page are editable
