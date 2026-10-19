/**
 * [TAROUDANT_TAFRAOUTE] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "taroudant_tafraouteThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { taroudantTafraouteHeritageThings } from "./heritage.things";
import { taroudantTafraouteNatureThings } from "./nature.things";
import { taroudantTafraouteWellnessThings } from "./wellness.things";
import { taroudantTafraouteSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const taroudant_tafraouteThings: ThingToDoListing[] = [
  ...taroudantTafraouteHeritageThings,
  ...taroudantTafraouteNatureThings,
  ...taroudantTafraouteWellnessThings,
  ...taroudantTafraouteSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const TAROUDANT_TAFRAOUTE_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": ["taroudant-historic-ramparts", "tiout-oasis-kasbah"],
  "road-nature": [
  "tafraoute-painted-rocks",
  "tiout-oasis-kasbah",
  "tafraoute-napoleon-hat-head-lion",
  "tafraoute-ait-mansour-gorge"
],
  "road-wellness": []
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const TAROUDANT_TAFRAOUTE_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: taroudantTafraouteHeritageThings,
  nature: taroudantTafraouteNatureThings,
  wellness: taroudantTafraouteWellnessThings,
  sport: taroudantTafraouteSportThings
};
export const TAROUDANT_TAFRAOUTE_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 1, nature: 4, wellness: 0, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const TAROUDANT_TAFRAOUTE_THINGS_NEIGHBORHOODS: string[] = [
  "Agard Oudad Granite Valley",
  "Ameln Valley",
  "Aït Mansour Valley",
  "Médina (Derb Jdid",
  "Tiout Palmeraie"
];
export const TAROUDANT_TAFRAOUTE_THINGS_TAG_INVENTORY: string[] = [
  "16th-century-ramparts",
  "active",
  "adobe-fortress",
  "ameln-valley",
  "anti-atlas",
  "anti-atlas-hiking",
  "calèche-ride",
  "donkey-ride",
  "dramatic-gorges",
  "geological-wonder",
  "granite-peaks",
  "land-art",
  "mountain-biking",
  "napoleon-hat",
  "painted-rocks",
  "palm-canyon",
  "palm-oasis",
  "private",
  "relaxed",
  "saadian-dynasty",
  "saadian-kasbah",
  "sunset",
  "surreal-landscape",
  "traditional-irrigation",
  "walk-in"
];
