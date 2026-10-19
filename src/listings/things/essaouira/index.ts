/**
 * [ESSAOUIRA] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "essaouiraThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { essaouiraHeritageThings } from "./heritage.things";
import { essaouiraNatureThings } from "./nature.things";
import { essaouiraWellnessThings } from "./wellness.things";
import { essaouiraSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const essaouiraThings: ThingToDoListing[] = [
  ...essaouiraHeritageThings,
  ...essaouiraNatureThings,
  ...essaouiraWellnessThings,
  ...essaouiraSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const ESSAOUIRA_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "essaouira-sqala-ville",
  "essaouira-sqala-port",
  "essaouira-medina",
  "essaouira-borj-el-baroud",
  "essaouira-galerie-damgaard",
  "essaouira-cooking-class",
  "essaouira-slat-lkahal",
  "essaouira-mellah",
  "essaouira-hammam-mounia",
  "essaouira-bayt-dakira",
  "essaouira-had-draa-souk",
  "essaouira-patisserie-driss",
  "essaouira-dar-souiri"
],
  "road-nature": [
  "essaouira-sqala-ville",
  "essaouira-sqala-port",
  "essaouira-sidi-kaouki",
  "essaouira-beach",
  "essaouira-borj-el-baroud",
  "essaouira-horse-riding",
  "essaouira-slat-lkahal",
  "essaouira-mellah",
  "essaouira-kitesurfing",
  "essaouira-bayt-dakira",
  "essaouira-had-draa-souk",
  "essaouira-marjana-cooperative",
  "essaouira-val-d-argan",
  "essaouira-quad-attitude",
  "essaouira-dar-souiri"
],
  "road-wellness": [
  "essaouira-medina",
  "essaouira-galerie-damgaard",
  "essaouira-cooking-class",
  "essaouira-hammam-mounia",
  "essaouira-marjana-cooperative",
  "essaouira-patisserie-driss"
]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const ESSAOUIRA_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: essaouiraHeritageThings,
  nature: essaouiraNatureThings,
  wellness: essaouiraWellnessThings,
  sport: essaouiraSportThings
};
export const ESSAOUIRA_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 9, nature: 8, wellness: 3, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const ESSAOUIRA_THINGS_NEIGHBORHOODS: string[] = [
  "Diabat",
  "Essaouira Beach",
  "Had Draa",
  "Mellah",
  "Médina Ancienne",
  "Ounagha",
  "Ounara",
  "Port",
  "Sidi Kaouki"
];
export const ESSAOUIRA_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "authentic",
  "climbing-adventure",
  "coastal",
  "cultural-tour",
  "instagrammable",
  "medina",
  "morning",
  "nature",
  "off-the-beaten-path",
  "private",
  "relaxed",
  "shopping",
  "sunset",
  "walk-in",
  "wellness",
  "workshop"
];
