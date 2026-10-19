/**
 * [SAIDIA] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "saidiaThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { saidiaHeritageThings } from "./heritage.things";
import { saidiaNatureThings } from "./nature.things";
import { saidiaWellnessThings } from "./wellness.things";
import { saidiaSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const saidiaThings: ThingToDoListing[] = [
  ...saidiaHeritageThings,
  ...saidiaNatureThings,
  ...saidiaWellnessThings,
  ...saidiaSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const SAIDIA_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": ["saidia-souk-de-sa-dia", "saidia-sunday-open-air-souk", "saidia-sa-dia-kasbah"],
  "road-nature": [
  "saidia-plage-de-sa-dia",
  "saidia-marina-sa-dia-promenade",
  "saidia-med-sa-dia-corniche-bike-ride",
  "saidia-sunday-open-air-souk",
  "saidia-sa-dia-kasbah",
  "saidia-moulouya-estuary-birdwatching",
  "saidia-moulouya-national-park-walk",
  "saidia-eucalyptus-beachfront-walk",
  "saidia-jet-ski-session-at-sa-dia-beach",
  "saidia-sailing-lesson-from-marina-sa-dia",
  "saidia-alpamare-water-park",
  "saidia-sa-dia-golf-round",
  "saidia-beni-snassen-quad-ride",
  "saidia-kiss-river-border-viewpoint",
  "saidia-cap-de-leau-beach-trip",
  "saidia-sunset-seafood-at-the-marina",
  "saidia-parc-sa-dia-family-stroll"
],
  "road-wellness": []
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const SAIDIA_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: saidiaHeritageThings,
  nature: saidiaNatureThings,
  wellness: saidiaWellnessThings,
  sport: saidiaSportThings
};
export const SAIDIA_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 5, nature: 15, wellness: 0, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const SAIDIA_THINGS_NEIGHBORHOODS: string[] = [
  "Berkane",
  "Foothill Outskirts",
  "Kasbah Quarter",
  "Main Beachfront",
  "Main Promenade",
  "Marina",
  "Medina Edge",
  "Moulouya Mouth",
  "Moulouya National Park",
  "Oued Kiss",
  "Ras El Ma / Cap de l'Eau",
  "Resort Corniche",
  "Resort Golf Area",
  "Resort Zone",
  "Town Center",
  "Town Park",
  "Water Sports Zone"
];
export const SAIDIA_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "authentic",
  "climbing-adventure",
  "coastal",
  "cultural-tour",
  "instagrammable",
  "morning",
  "mountain",
  "nature",
  "off-the-beaten-path",
  "private",
  "relaxed",
  "shopping",
  "sunset",
  "urban",
  "walk-in"
];
