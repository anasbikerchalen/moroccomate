/**
 * [TETOUAN_MARTIL] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "tetouan_martilThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { tetouanMartilHeritageThings } from "./heritage.things";
import { tetouanMartilNatureThings } from "./nature.things";
import { tetouanMartilWellnessThings } from "./wellness.things";
import { tetouanMartilSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const tetouan_martilThings: ThingToDoListing[] = [
  ...tetouanMartilHeritageThings,
  ...tetouanMartilNatureThings,
  ...tetouanMartilWellnessThings,
  ...tetouanMartilSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const TETOUAN_MARTIL_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "tetouan-martil-tetouan-medina",
  "tetouan-martil-royal-palace-and-hassan-ii-square",
  "tetouan-martil-archaeological-museum-of-tetouan",
  "tetouan-martil-ethnographic-museum",
  "tetouan-martil-dar-sanaa-craft-school",
  "tetouan-martil-ensanche-spanish-quarter-walk",
  "tetouan-martil-bab-el-okla-gate-walk",
  "tetouan-martil-tamuda-ruins",
  "tetouan-martil-tetouan-center-of-modern-art"
],
  "road-nature": [
  "tetouan-martil-tamuda-ruins",
  "tetouan-martil-ras-el-ma-spring",
  "tetouan-martil-martil-corniche",
  "tetouan-martil-martil-beach",
  "tetouan-martil-martil-port-and-fish-market",
  "tetouan-martil-cabo-negro-beach",
  "tetouan-martil-cabo-negro-golf",
  "tetouan-martil-tamuda-bay-seaside-stroll",
  "tetouan-martil-kabila-beach",
  "tetouan-martil-marina-smir-day-trip",
  "tetouan-martil-beni-hozmar-viewpoint-hike"
],
  "road-wellness": ["tetouan-martil-tetouan-medina", "tetouan-martil-dar-sanaa-craft-school"]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const TETOUAN_MARTIL_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: tetouanMartilHeritageThings,
  nature: tetouanMartilNatureThings,
  wellness: tetouanMartilWellnessThings,
  sport: tetouanMartilSportThings
};
export const TETOUAN_MARTIL_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 10, nature: 10, wellness: 0, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const TETOUAN_MARTIL_THINGS_NEIGHBORHOODS: string[] = [
  "Bab el-Okla",
  "Bab el-Okla Area",
  "Beni Hozmar",
  "Cabo Negro",
  "City Center",
  "Ensanche",
  "Feddan",
  "Hassan II Square",
  "Kabila",
  "Marina Smir",
  "Martil Beachfront",
  "Martil Port",
  "Martil Waterfront",
  "Modern District",
  "Old Medina",
  "Ras El Ma",
  "Tamuda",
  "Tamuda Bay"
];
export const TETOUAN_MARTIL_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "authentic",
  "coastal",
  "cultural-tour",
  "instagrammable",
  "medina",
  "morning",
  "mountain",
  "nature",
  "off-the-beaten-path",
  "private",
  "relaxed",
  "sunset",
  "urban",
  "walk-in",
  "workshop"
];
