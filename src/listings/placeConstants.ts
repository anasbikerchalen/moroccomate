/** URL categories for place pages (URL segment names) */
export type PlaceUrlCategory = 'food' | 'sleep' | 'shopping';

export const PLACE_URL_CATEGORIES: PlaceUrlCategory[] = ['food', 'sleep', 'shopping'];

/** Human labels used in page titles */
export const PLACE_CATEGORY_LABEL: Record<PlaceUrlCategory, string> = {
  food: 'Where to Eat',
  sleep: 'Where to Sleep',
  shopping: 'Shopping',
};

/** Schema.org type for structured data */
export const PLACE_SCHEMA_TYPE: Record<PlaceUrlCategory, string> = {
  food: 'Restaurant',
  sleep: 'Hotel',
  shopping: 'Store',
};
