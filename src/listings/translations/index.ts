import {
  NON_DEFAULT_LANGS,
  type AppLanguage,
} from '../../utils/localeRouting';
import type {
  CityCategoryLangTranslations,
  ListingLocaleOverride,
  ListingTranslationRecord,
  NonDefaultListingLang,
  TranslatableWorryOverride,
} from './types';

import { agadirEatFr } from './eat/agadir.eat.fr';
import { agadirEatEs } from './eat/agadir.eat.es';
import { agadirEatDe } from './eat/agadir.eat.de';
import { agadirEatAr } from './eat/agadir.eat.ar';

export type {
  NonDefaultListingLang,
  TranslatableWorryOverride,
  TranslatableFaqOverride,
  TranslatableEditorialPart,
  ListingLocaleOverride,
  CityCategoryLangTranslations,
  ListingTranslationRecord,
} from './types';

/**
 * Central sidecar translation registry keyed by listing `id`.
 * Raw English data files under `src/listings/{eat,sleep,shop,things}` stay untouched.
 * Add each completed city-category batch here via `registerCityCategory(...)`.
 */
export const LISTING_TRANSLATIONS: Record<string, ListingTranslationRecord> = {};

function registerCityCategory(
  batch: Partial<Record<NonDefaultListingLang, CityCategoryLangTranslations>>
) {
  for (const lang of NON_DEFAULT_LANGS) {
    const langMap = batch[lang];
    if (!langMap) continue;
    for (const [listingId, override] of Object.entries(langMap)) {
      if (!LISTING_TRANSLATIONS[listingId]) {
        LISTING_TRANSLATIONS[listingId] = {};
      }
      LISTING_TRANSLATIONS[listingId][lang] = override;
    }
  }
}

// Completed batches:
registerCityCategory({
  fr: agadirEatFr,
  es: agadirEatEs,
  de: agadirEatDe,
  ar: agadirEatAr,
});

function hasSubstantiveCopy(override: ListingLocaleOverride | undefined): boolean {
  if (!override) return false;
  return Boolean(
    override.description ||
      override.short_description ||
      override.tip ||
      override.customStory ||
      (override.pros && override.pros.length > 0) ||
      (override.editorialGuide && override.editorialGuide.length > 0)
  );
}

/**
 * True only when all 4 non-English locales (`fr`, `es`, `de`, `ar`) have
 * curated translations for this listing. Used to gate `hreflang` alternates,
 * sitemap URLs, and static prerendered HTML cleanly without duplicate-content issues.
 */
export function hasListingTranslations(listingId?: string | null): boolean {
  if (!listingId) return false;
  const record = LISTING_TRANSLATIONS[String(listingId)];
  if (!record) return false;
  return NON_DEFAULT_LANGS.every((lang) => hasSubstantiveCopy(record[lang]));
}

function normalizeWorryId(rawId: unknown): string {
  return String(rawId || '')
    .toLowerCase()
    .replace(/^(eat|food|sleep|stay|shop|things)[-_]/, '');
}

function mergeWorries(
  originalWorries: any,
  translatedWorries?: TranslatableWorryOverride[]
): any {
  if (!originalWorries || !Array.isArray(translatedWorries) || translatedWorries.length === 0) {
    return originalWorries;
  }

  const lookup = new Map<string, TranslatableWorryOverride>();
  for (const tw of translatedWorries) {
    if (!tw?.id) continue;
    lookup.set(String(tw.id).toLowerCase(), tw);
    lookup.set(normalizeWorryId(tw.id), tw);
  }

  const applyOne = (w: any, fallbackId?: string) => {
    if (!w || typeof w !== 'object') return w;
    const rawKey = String(w.id || fallbackId || '').toLowerCase();
    const match = lookup.get(rawKey) || lookup.get(normalizeWorryId(rawKey));
    if (!match) return w;
    return {
      ...w,
      ...(match.title ? { title: match.title } : {}),
      ...(match.tag ? { tag: match.tag } : {}),
      ...(match.description ? { description: match.description } : {}),
    };
  };

  if (Array.isArray(originalWorries)) {
    return originalWorries.map((w) => applyOne(w));
  }

  if (typeof originalWorries === 'object') {
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(originalWorries)) {
      out[k] = applyOne(v, k);
    }
    return out;
  }

  return originalWorries;
}

/**
 * Overlays translated prose fields onto a cloned listing object while
 * leaving English or untranslated listings untouched. Preserves non-text
 * metadata (tone, tagColor, icons, coordinates, images, pricing, ratings).
 */
export function localizeListing<T extends Record<string, any>>(
  listing: T,
  lang: AppLanguage
): T {
  if (!listing || lang === 'en') return listing;
  const override = LISTING_TRANSLATIONS[String(listing.id || '')]?.[lang];
  if (!override) return listing;

  const topOverlay: Record<string, any> = {};
  if (override.description) topOverlay.description = override.description;
  if (override.short_description) topOverlay.short_description = override.short_description;
  if (override.tip) topOverlay.tip = override.tip;
  if (override.pros) topOverlay.pros = override.pros;
  if (override.cons) topOverlay.cons = override.cons;
  if (override.bestTimeToVisit) topOverlay.bestTimeToVisit = override.bestTimeToVisit;
  if (override.seasonalHoursNote) topOverlay.seasonalHoursNote = override.seasonalHoursNote;
  if (override.customStory) topOverlay.customStory = override.customStory;
  if (override.editorialGuide) topOverlay.editorialGuide = override.editorialGuide;
  if (override.knowBeforeYouGo) topOverlay.knowBeforeYouGo = override.knowBeforeYouGo;
  if (override.faqs) {
    topOverlay.faqs = override.faqs;
    if (listing.faq !== undefined) topOverlay.faq = override.faqs;
  }
  if (override.highlights) topOverlay.highlights = override.highlights;
  if (override.goodToKnow) topOverlay.goodToKnow = override.goodToKnow;
  if (override.includedItems) topOverlay.includedItems = override.includedItems;
  if (override.requirements) topOverlay.requirements = override.requirements;
  if (override.houseRules) topOverlay.houseRules = override.houseRules;
  if (override.ownerAnswer) topOverlay.ownerAnswer = override.ownerAnswer;

  const nextTopWorries = listing.worries
    ? mergeWorries(listing.worries, override.worries)
    : undefined;

  let nextUi = listing.ui;
  if (listing.ui && typeof listing.ui === 'object') {
    const uiOverlay: Record<string, any> = {};
    if (override.description) uiOverlay.description = override.description;
    if (override.short_description) uiOverlay.short_description = override.short_description;
    if (override.tip) uiOverlay.tip = override.tip;
    if (override.bestTimeToVisit) uiOverlay.bestTimeToVisit = override.bestTimeToVisit;
    if (override.seasonalHoursNote) uiOverlay.seasonalHoursNote = override.seasonalHoursNote;
    if (override.customStory) uiOverlay.customStory = override.customStory;
    if (override.editorialGuide) uiOverlay.editorialGuide = override.editorialGuide;
    if (override.knowBeforeYouGo) uiOverlay.knowBeforeYouGo = override.knowBeforeYouGo;
    if (override.faqs) {
      uiOverlay.faqs = override.faqs;
      if (listing.ui.faq !== undefined) uiOverlay.faq = override.faqs;
    }
    if (listing.ui.worries) {
      uiOverlay.worries = mergeWorries(listing.ui.worries, override.worries);
    }
    nextUi = {
      ...listing.ui,
      ...uiOverlay,
    };
  }

  let nextData = listing.data;
  if (listing.data && typeof listing.data === 'object' && listing.data.worries) {
    nextData = {
      ...listing.data,
      worries: mergeWorries(listing.data.worries, override.worries),
    };
  }

  return {
    ...listing,
    ...topOverlay,
    ...(nextTopWorries !== undefined ? { worries: nextTopWorries } : {}),
    ...(nextUi !== listing.ui ? { ui: nextUi } : {}),
    ...(nextData !== listing.data ? { data: nextData } : {}),
    _localizedLang: lang,
  };
}
