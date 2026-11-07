/**
 * [IFRANE_AZROU] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "ifrane_azrouThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { ifraneAzrouHeritageThings } from "./heritage.things";
import { ifraneAzrouNatureThings } from "./nature.things";
import { ifraneAzrouWellnessThings } from "./wellness.things";
import { ifraneAzrouSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const ifrane_azrouThings: ThingToDoListing[] = [
  ...ifraneAzrouHeritageThings,
  ...ifraneAzrouNatureThings,
  ...ifraneAzrouWellnessThings,
  ...ifraneAzrouSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const IFRANE_AZROU_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": ["azrou-cedre-gouraud-forest"],
  "road-nature": [
  "ifrane-lion-statue",
  "azrou-cedre-gouraud-forest",
  "ifrane-ain-vittel",
  "ifrane-michlifen-ski-resort",
  "ifrane-dayet-aoua-lake"
],
  "road-wellness": []
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const IFRANE_AZROU_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: ifraneAzrouHeritageThings,
  nature: ifraneAzrouNatureThings,
  wellness: ifraneAzrouWellnessThings,
  sport: ifraneAzrouSportThings
};
export const IFRANE_AZROU_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 1, nature: 4, wellness: 0, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const IFRANE_AZROU_THINGS_NEIGHBORHOODS: string[] = [
  "Azrou Cedar Forest",
  "Ifrane Center",
  "Ifrane Lakes Circuit",
  "Ifrane Outskirts",
  "Michlifen Mountain"
];
export const IFRANE_AZROU_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "alpine-park",
  "atlas-history",
  "barbary-macaques",
  "birdwatching",
  "cedar-forest",
  "horse-riding",
  "iconic-landmark",
  "morning",
  "mountain-lake",
  "nature-walk",
  "pedal-boating",
  "photospot",
  "picnic-spot",
  "private",
  "relaxed",
  "ski-resort",
  "snow-sledding",
  "spring-water",
  "sunset",
  "volcanic-crater",
  "walk-in",
  "waterfall",
  "wildlife-encounter",
  "winter-sports"
];
