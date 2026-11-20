import type { AppLanguage } from '../../utils/localeRouting';

export type NonDefaultListingLang = Exclude<AppLanguage, 'en'>;

export interface TranslatableWorryOverride {
  id: string;
  title?: string;
  tag?: string;
  description?: string;
}

export interface TranslatableFaqOverride {
  question: string;
  answer: string;
}

export interface TranslatableEditorialPart {
  heading?: string;
  title?: string;
  body: string;
}

export interface ListingLocaleOverride {
  description?: string;
  short_description?: string;
  tip?: string;
  pros?: string[];
  cons?: string[];
  bestTimeToVisit?: string;
  seasonalHoursNote?: string;
  customStory?: string;
  editorialGuide?: TranslatableEditorialPart[];
  knowBeforeYouGo?: string[];
  faqs?: TranslatableFaqOverride[];
  worries?: TranslatableWorryOverride[];
  // Shared fields for Sleep / Shop / Things batches
  highlights?: string[];
  goodToKnow?: string[];
  includedItems?: string[];
  requirements?: string[];
  houseRules?: string[];
  ownerAnswer?: string;
}

export type CityCategoryLangTranslations = Record<string, ListingLocaleOverride>;

export type ListingTranslationRecord = Partial<
  Record<NonDefaultListingLang, ListingLocaleOverride>
>;
