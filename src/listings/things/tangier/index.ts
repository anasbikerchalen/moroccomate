/**
 * [TANGIER] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "tangierThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { tangierHeritageThings } from "./heritage.things";
import { tangierNatureThings } from "./nature.things";
import { tangierWellnessThings } from "./wellness.things";
import { tangierSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const tangierThings: ThingToDoListing[] = [
  ...tangierHeritageThings,
  ...tangierNatureThings,
  ...tangierWellnessThings,
  ...tangierSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const TANGIER_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "tangier-cap-spartel",
  "tangier-kasbah-museum",
  "tangier-legation-museum",
  "tangier-grand-socco",
  "tangier-petit-socco",
  "tangier-perdicaris-park",
  "tangier-st-andrew",
  "tangier-villa-harris",
  "tangier-dar-niaba",
  "tangier-terrasse-paresseux",
  "tangier-moshe-nahon",
  "tangier-mendoubia-gardens",
  "tangier-jewish-cemetery",
  "tangier-ibn-battouta-tomb"
],
  "road-nature": [
  "tangier-caves-hercules",
  "tangier-cap-spartel",
  "tangier-cafe-hafa",
  "tangier-petit-socco",
  "tangier-perdicaris-park",
  "tangier-phoenician-tombs",
  "tangier-st-andrew",
  "tangier-villa-harris",
  "tangier-dar-niaba",
  "tangier-terrasse-paresseux",
  "tangier-moshe-nahon",
  "tangier-mendoubia-gardens",
  "tangier-jewish-cemetery",
  "tangier-ibn-battouta-tomb",
  "tangier-achakkar-beach"
],
  "road-wellness": [
  "tangier-cap-spartel",
  "tangier-kasbah-museum",
  "tangier-villa-harris",
  "tangier-cinematheque",
  "tangier-mendoubia-gardens",
  "tangier-darna-association"
]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const TANGIER_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: tangierHeritageThings,
  nature: tangierNatureThings,
  wellness: tangierWellnessThings,
  sport: tangierSportThings
};
export const TANGIER_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 12, nature: 7, wellness: 1, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const TANGIER_THINGS_NEIGHBORHOODS: string[] = [
  "Achakkar",
  "Cap Spartel",
  "Grand Socco",
  "Kasbah",
  "Malabata",
  "Marshan",
  "Medina",
  "Rmilat",
  "Ville Nouvelle"
];
export const TANGIER_THINGS_TAG_INVENTORY: string[] = [
  "authentic",
  "coastal",
  "cultural-tour",
  "golden-hour",
  "instagrammable",
  "medina",
  "morning",
  "nature",
  "off-the-beaten-path",
  "photo-spot",
  "port-express",
  "private",
  "relaxed",
  "shopping",
  "step-free",
  "sunset",
  "sunset-view",
  "walk-in",
  "wellness",
  "workshop"
];
