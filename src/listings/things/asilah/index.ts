/**
 * [ASILAH] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "asilahThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { asilahHeritageThings } from "./heritage.things";
import { asilahNatureThings } from "./nature.things";
import { asilahWellnessThings } from "./wellness.things";
import { asilahSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const asilahThings: ThingToDoListing[] = [
  ...asilahHeritageThings,
  ...asilahNatureThings,
  ...asilahWellnessThings,
  ...asilahSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const ASILAH_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "asilah-medina",
  "asilah-ramparts",
  "asilah-church-san-bartholomew",
  "asilah-main-beach",
  "asilah-mezora-cromlech",
  "asilah-jewish-cemetery",
  "asilah-dar-al-khattat",
  "asilah-hammam-al-alba",
  "asilah-promenade",
  "asilah-thursday-market",
  "asilah-seawall-cemetery",
  "asilah-bike-tour",
  "asilah-ebike-tour",
  "asilah-beach-yoga"
],
  "road-nature": [
  "asilah-ramparts",
  "asilah-paradise-beach",
  "asilah-port",
  "asilah-main-beach",
  "asilah-sidi-mghayet-beach",
  "asilah-briech-beach",
  "asilah-mezora-cromlech",
  "asilah-jewish-cemetery",
  "asilah-promenade",
  "asilah-seawall-cemetery",
  "asilah-surf-lesson",
  "asilah-horseback-riding",
  "asilah-boat-tour",
  "asilah-quad-tour",
  "asilah-bike-tour",
  "asilah-camel-ride",
  "asilah-fishing-charter",
  "asilah-kayak-tour",
  "asilah-coastal-hike",
  "asilah-sunset-sail",
  "asilah-ebike-tour",
  "asilah-surf-camp",
  "asilah-beach-yoga",
  "asilah-resort-gym"
],
  "road-wellness": [
  "asilah-medina",
  "asilah-paradise-beach",
  "asilah-church-san-bartholomew",
  "asilah-sidi-mghayet-beach",
  "asilah-dar-al-khattat",
  "asilah-hammam-al-alba",
  "asilah-bike-tour",
  "asilah-beach-yoga",
  "asilah-yoga-studio",
  "asilah-resort-gym",
  "asilah-womens-premium",
  "asilah-cardio-club"
]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const ASILAH_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: asilahHeritageThings,
  nature: asilahNatureThings,
  wellness: asilahWellnessThings,
  sport: asilahSportThings
};
export const ASILAH_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 8, nature: 6, wellness: 1, sport: 29
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const ASILAH_THINGS_NEIGHBORHOODS: string[] = [
  "Beachfront",
  "Briech",
  "Chouahed",
  "Marina Area",
  "Médina Historique",
  "Port",
  "Rmilat",
  "Sidi Mghayet",
  "Surrounding Area",
  "Ville Nouvelle"
];
export const ASILAH_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "architectural",
  "authentic",
  "climbing-adventure",
  "coastal",
  "cultural-tour",
  "day-pass",
  "desert-sport",
  "gym-fitness",
  "hiking-trek",
  "historical",
  "instagrammable",
  "morning",
  "nature",
  "off-the-beaten-path",
  "private",
  "relaxed",
  "shopping",
  "sunset",
  "surf-kitesurf",
  "swimming-pool",
  "urban",
  "walk-in",
  "water-sport",
  "wellness",
  "women-only"
];
