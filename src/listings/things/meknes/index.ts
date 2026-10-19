/**
 * [MEKNES] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "meknesThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { meknesHeritageThings } from "./heritage.things";
import { meknesNatureThings } from "./nature.things";
import { meknesWellnessThings } from "./wellness.things";
import { meknesSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const meknesThings: ThingToDoListing[] = [
  ...meknesHeritageThings,
  ...meknesNatureThings,
  ...meknesWellnessThings,
  ...meknesSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const MEKNES_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "meknes-place-el-hedim",
  "meknes-dar-jamai-museum",
  "meknes-bou-inania-medersa",
  "meknes-royal-stables",
  "meknes-qara-prison",
  "meknes-meknes-medina-souk-walk",
  "meknes-lalla-aouda-and-royal-palace-gates",
  "meknes-agdal-basin",
  "meknes-borj-belkari-pottery-museum",
  "meknes-jewish-mellah-of-meknes",
  "meknes-volubilis-day-trip"
],
  "road-nature": [
  "meknes-sahrij-swani",
  "meknes-qara-prison",
  "meknes-bab-el-khemis",
  "meknes-agdal-basin",
  "meknes-volubilis-day-trip",
  "meknes-moulay-idriss-zerhoun-day-trip",
  "meknes-ch-teau-roslane-wine-tasting",
  "meknes-volubilia-domaine-de-la-zouina-tasting"
],
  "road-wellness": ["meknes-dar-jamai-museum", "meknes-borj-belkari-pottery-museum"]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const MEKNES_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: meknesHeritageThings,
  nature: meknesNatureThings,
  wellness: meknesWellnessThings,
  sport: meknesSportThings
};
export const MEKNES_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 17, nature: 3, wellness: 0, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const MEKNES_THINGS_NEIGHBORHOODS: string[] = [
  "Ain Karma",
  "Borj Belkari",
  "Imperial City",
  "Imperial Granaries",
  "Medina",
  "Mellah",
  "Moulay Idriss Zerhoun",
  "Northern Medina Edge",
  "Old Medina",
  "Place El Hedim",
  "Swani District",
  "Volubilis",
  "Zouina Vineyards"
];
export const MEKNES_THINGS_TAG_INVENTORY: string[] = [
  "authentic",
  "cultural-tour",
  "instagrammable",
  "medina",
  "mountain",
  "nature",
  "off-the-beaten-path",
  "private",
  "relaxed",
  "shopping",
  "sunset",
  "urban",
  "walk-in",
  "workshop"
];
