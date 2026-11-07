/**
 * [CHEFCHAOUEN] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "chefchaouenThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { chefchaouenHeritageThings } from "./heritage.things";
import { chefchaouenNatureThings } from "./nature.things";
import { chefchaouenWellnessThings } from "./wellness.things";
import { chefchaouenSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const chefchaouenThings: ThingToDoListing[] = [
  ...chefchaouenHeritageThings,
  ...chefchaouenNatureThings,
  ...chefchaouenWellnessThings,
  ...chefchaouenSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const CHEFCHAOUEN_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "chefchaouen-medina-blue-streets",
  "chefchaouen-plaza-uta-el-hammam",
  "chefchaouen-kasbah-museum",
  "chefchaouen-spanish-mosque",
  "chefchaouen-ras-el-maa",
  "chefchaouen-grand-mosque",
  "chefchaouen-bab-el-ansar",
  "chefchaouen-medina-ramparts",
  "chefchaouen-ethnographic-museum",
  "chefchaouen-souk",
  "chefchaouen-bouzafar-lookout",
  "chefchaouen-tannerie-district",
  "chefchaouen-uta-hammam-promenade",
  "chefchaouen-spanish-mosque-hike",
  "chefchaouen-mountain-bike-tour",
  "chefchaouen-cooking-class",
  "chefchaouen-photography-workshop",
  "chefchaouen-blue-city-yoga",
  "chefchaouen-medina-fitness-club",
  "chefchaouen-mandala-yoga-shala"
],
  "road-nature": [
  "chefchaouen-medina-blue-streets",
  "chefchaouen-spanish-mosque",
  "chefchaouen-ras-el-maa",
  "chefchaouen-medina-ramparts",
  "chefchaouen-ethnographic-museum",
  "chefchaouen-souk",
  "chefchaouen-bouzafar-lookout",
  "chefchaouen-tannerie-district",
  "chefchaouen-akchour-waterfalls-trek",
  "chefchaouen-gods-bridge",
  "chefchaouen-talassemtane-trek",
  "chefchaouen-jebel-kelaa-climb",
  "chefchaouen-spanish-mosque-hike",
  "chefchaouen-mountain-bike-tour",
  "chefchaouen-goat-cheese-farm",
  "chefchaouen-horseback-rif-ride",
  "chefchaouen-4x4-rif-adventure",
  "chefchaouen-cedar-forest-trek",
  "chefchaouen-atlas-fitness",
  "chefchaouen-atlas-crossfit",
  "chefchaouen-running-rif-trails",
  "chefchaouen-tislit-mountain-sports"
],
  "road-wellness": [
  "chefchaouen-plaza-uta-el-hammam",
  "chefchaouen-kasbah-museum",
  "chefchaouen-grand-mosque",
  "chefchaouen-souk",
  "chefchaouen-tannerie-district",
  "chefchaouen-uta-hammam-promenade",
  "chefchaouen-cooking-class",
  "chefchaouen-photography-workshop",
  "chefchaouen-cedar-forest-trek",
  "chefchaouen-blue-city-yoga",
  "chefchaouen-mandala-yoga-shala",
  "chefchaouen-eden-gym-spa"
]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const CHEFCHAOUEN_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: chefchaouenHeritageThings,
  nature: chefchaouenNatureThings,
  wellness: chefchaouenWellnessThings,
  sport: chefchaouenSportThings
};
export const CHEFCHAOUEN_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 11, nature: 2, wellness: 0, sport: 24
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const CHEFCHAOUEN_THINGS_NEIGHBORHOODS: string[] = [
  "Akchour",
  "Bouzafar Hill",
  "Haut Chefchaouen (New Town Hills)",
  "Medina",
  "Medina Edge",
  "New Town",
  "New Town (Avenue Hassan II)",
  "New Town (Avenue Mohammed V)",
  "New Town (Avenue des FAR)",
  "New Town (Boulevard Mohammed VI)",
  "New Town Industrial Zone",
  "New Town Sports Complex",
  "Ras El Maa",
  "Rif Foothills",
  "Rif Mountains",
  "Rural Chefchaouen",
  "Talassemtane National Park"
];
export const CHEFCHAOUEN_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "architectural",
  "authentic",
  "climbing-adventure",
  "combat-sports",
  "cooking-class",
  "cultural-tour",
  "day-pass",
  "desert-sport",
  "golden-hour",
  "gym-fitness",
  "hiking-trek",
  "historical",
  "instagrammable",
  "morning",
  "mountain",
  "nature",
  "off-the-beaten-path",
  "photo-spot",
  "photography",
  "private",
  "relaxed",
  "running-outdoor",
  "shopping",
  "sunset",
  "swimming-pool",
  "team-sports",
  "tripod-allowed",
  "urban",
  "walk-in",
  "water-sport"
];
