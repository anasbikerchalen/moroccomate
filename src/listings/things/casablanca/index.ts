/**
 * [CASABLANCA] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "casablancaThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { casablancaHeritageThings } from "./heritage.things";
import { casablancaNatureThings } from "./nature.things";
import { casablancaWellnessThings } from "./wellness.things";
import { casablancaSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const casablancaThings: ThingToDoListing[] = [
  ...casablancaHeritageThings,
  ...casablancaNatureThings,
  ...casablancaWellnessThings,
  ...casablancaSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const CASABLANCA_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "casablanca-hassan-ii-mosque",
  "casablanca-old-medina",
  "casablanca-mohammed-v-square",
  "casablanca-habous-quartier",
  "casablanca-royal-palace",
  "casablanca-sacree-coeur",
  "casablanca-jewish-museum",
  "casablanca-mosque-hassan-ii-exterior",
  "casablanca-musee-mohammed-vi",
  "casablanca-boat-tour",
  "casablanca-yacht-sunset",
  "casablanca-kayak-tour",
  "casablanca-paragliding"
],
  "road-nature": [
  "casablanca-corniche",
  "casablanca-corniche-beaches",
  "casablanca-jewish-museum",
  "casablanca-arab-league-park",
  "casablanca-port",
  "casablanca-kitesurf-corniche",
  "casablanca-camel-ride-corniche",
  "casablanca-boat-tour",
  "casablanca-quad-tour",
  "casablanca-bike-corniche",
  "casablanca-fishing-charter",
  "casablanca-surf-lesson",
  "casablanca-horse-ride",
  "casablanca-yacht-sunset",
  "casablanca-kayak-tour",
  "casablanca-desert-quad-camel",
  "casablanca-paragliding",
  "casablanca-bike-desert"
],
  "road-wellness": [
  "casablanca-habous-quartier",
  "casablanca-royal-palace",
  "casablanca-arab-league-park",
  "casablanca-bike-corniche",
  "casablanca-yoga-studio",
  "casablanca-cardio-club",
  "casablanca-resort-aqua"
]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const CASABLANCA_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: casablancaHeritageThings,
  nature: casablancaNatureThings,
  wellness: casablancaWellnessThings,
  sport: casablancaSportThings
};
export const CASABLANCA_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 12, nature: 3, wellness: 1, sport: 28
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const CASABLANCA_THINGS_NEIGHBORHOODS: string[] = [
  "Ain Diab",
  "Ancienne Médina",
  "City Center",
  "Corniche",
  "Corniche Hills",
  "Habous",
  "Hay Hassani",
  "Hay Mohammadi",
  "Maârif",
  "Port",
  "Port Area",
  "Sidi Belyout",
  "Surrounding Area",
  "Surrounding Dunes"
];
export const CASABLANCA_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "architectural",
  "authentic",
  "climbing-adventure",
  "coastal",
  "cultural-tour",
  "day-pass",
  "desert-sport",
  "family",
  "foodie",
  "golden-hour",
  "gym-fitness",
  "historical",
  "instagrammable",
  "modern",
  "morning",
  "nature",
  "off-the-beaten-path",
  "photo-spot",
  "photography",
  "port-express",
  "private",
  "relaxed",
  "shopping",
  "step-free",
  "sunset",
  "surf-kitesurf",
  "swimming-pool",
  "tripod-allowed",
  "urban",
  "walk-in",
  "water-sport",
  "women-only"
];
