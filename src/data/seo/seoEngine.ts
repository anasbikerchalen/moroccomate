import type { EatListing, EatMenu } from '../../listings/types';
import { getListingRating } from '../../listings/utils';
import { PLACE_SCHEMA_TYPE, type PlaceUrlCategory } from '../../listings/placeConstants';
import { localizePath, type AppLanguage } from '../../utils/localeRouting';
import {
  CATEGORY_LABELS_I18N,
  FINDER_SEO_I18N,
  HOME_SEO_I18N,
  getBrowseSeoI18n,
  type BrowseSegment,
} from './i18nSeo';
import type { SearchIntent } from './searchIntents';
import { getEatPriceMetrics } from '../../utils/eatPrice';
import { buildPlaceFaqs } from './faqEngine';
import {
  getLocalizedSectionTitle,
  getDishDisplayName,
  getDishSecondaryText,
  type MenuLanguage,
} from '../menuTranslations';

export const SITE_NAME = 'Moroccan Mate';
export const BASE_URL = 'https://www.moroccanmate.com';
export const DEFAULT_OG_IMAGE_PATH = '/assets/home/backgrounds/homepage_default_image.jpg';
export const DEFAULT_OG_IMAGE = `${BASE_URL}${DEFAULT_OG_IMAGE_PATH}`;

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SeoBundle {
  title: string;
  description: string;
  canonical: string;
  image: string;
  h1: string;
  schemaType?: string;
  schemaData?: Record<string, any>;
  jsonLd: Record<string, any> | null;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FaqItem[];
}

/**
 * Cleanly trims text at a word boundary without cutting mid-word or leaving
 * dangling punctuation/prepositions.
 */
export function smartTrim(text: string, maxLen: number): string {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;

  const sliced = clean.slice(0, maxLen + 1);
  const lastSpace = sliced.lastIndexOf(' ');
  let cut = lastSpace > Math.floor(maxLen * 0.55) ? sliced.slice(0, lastSpace) : clean.slice(0, maxLen);

  // Remove trailing punctuation or dangling connectors
  cut = cut.replace(/[\s,;:\-–—/|]+$/, '');
  cut = cut.replace(/\s+(in|at|on|for|with|and|or|to|of|by|à|en|de|et|ou|y|con|in|mit|und|في|من|و|على)$/i, '');
  return cut.trim();
}

/**
 * Composes an SEO title within Google's ~60-character SERP display budget.
 * Dynamically omits the "| Moroccan Mate" brand suffix when the core title is
 * already close to 60 characters so Google does not truncate the snippet.
 */
export function composeTitle(coreTitle: string, siteName = SITE_NAME, maxLen = 60): string {
  const clean = String(coreTitle || '').replace(/\s+/g, ' ').trim();
  if (!clean) return siteName;

  const suffix = ` | ${siteName}`;
  const lower = clean.toLowerCase();
  const brandLower = siteName.toLowerCase();

  // If title already includes brand name
  if (lower.includes(brandLower)) {
    if (clean.length <= maxLen) return clean;
    // Strip trailing "| Moroccan Mate" or "— Moroccan Mate" if present and too long
    const stripped = clean
      .replace(new RegExp(`\\s*[|\\-–—]\\s*${siteName}$`, 'i'), '')
      .trim();
    if (stripped && stripped.length < clean.length) {
      return smartTrim(stripped, maxLen);
    }
    return smartTrim(clean, maxLen);
  }

  if (clean.length + suffix.length <= maxLen) {
    return `${clean}${suffix}`;
  }

  return smartTrim(clean, maxLen);
}

/**
 * Formats a meta description cleanly to fit Google's ~130-155 char snippet window
 * without mid-word truncation.
 */
export function smartDescription(text: string, maxLen = 155): string {
  const clean = String(text || '')
    .replace(/\s+/g, ' ')
    .replace(/\.\s*\./g, '.')
    .trim();
  if (!clean) return '';
  if (clean.length <= maxLen) return clean;

  const candidate = clean.slice(0, maxLen);
  // Prefer ending on a clean sentence boundary when we already have a rich snippet
  const lastPeriod = Math.max(candidate.lastIndexOf('. '), candidate.lastIndexOf('! '), candidate.lastIndexOf('؟ '));
  if (lastPeriod >= 122) {
    return candidate.slice(0, lastPeriod + 1).trim();
  }

  // Otherwise prefer ending cleanly on a comma/clause boundary rather than mid-phrase
  const lastComma = Math.max(candidate.lastIndexOf(', '), candidate.lastIndexOf('، '), candidate.lastIndexOf(' — '));
  if (lastComma >= 115) {
    const clause = candidate.slice(0, lastComma).replace(/[\s,;:\-–—/|]+$/, '').trim();
    if (clause) return `${clause}.`;
  }

  const trimmed = smartTrim(clean, maxLen - 1);
  if (/[.!?؟]$/.test(trimmed)) return trimmed;
  return `${trimmed}.`;
}

export function resolveAbsoluteImageUrl(image?: string): string {
  if (!image || image === 'not-available') return DEFAULT_OG_IMAGE;
  if (image.startsWith('http://') || image.startsWith('https://')) return image;
  return `${BASE_URL}${image.startsWith('/') ? '' : '/'}${image}`;
}

/** Computes min/max MAD item prices from an EatMenu */
export function computeMenuPriceRange(menu?: EatMenu | null): { min: number; max: number } | null {
  if (!menu || !Array.isArray(menu.sections)) return null;
  let min = Infinity;
  let max = 0;
  for (const sec of menu.sections) {
    if (!Array.isArray(sec.items)) continue;
    for (const item of sec.items) {
      const p = Number(item?.price);
      if (Number.isFinite(p) && p > 0) {
        if (p < min) min = p;
        if (p > max) max = p;
      }
    }
  }
  if (!Number.isFinite(min) || max <= 0) return null;
  return { min: Math.round(min), max: Math.round(max) };
}

function normalizeHttpUrl(raw?: string | null): string | null {
  const s = String(raw || '').trim();
  if (!s || s === 'not-available') return null;
  if (/^https?:\/\//i.test(s)) return s;
  if (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(s) && !s.includes(' ')) {
    return `https://${s}`;
  }
  return null;
}

function normalizeInstagramUrl(raw?: string | null): string | null {
  const s = String(raw || '').trim();
  if (!s || s === 'not-available') return null;
  if (/^https?:\/\//i.test(s)) return s;
  const handle = s.replace(/^@/, '').replace(/\/+$/, '');
  if (handle && /^[a-zA-Z0-9._]{2,40}$/.test(handle)) {
    return `https://www.instagram.com/${handle}/`;
  }
  return null;
}

function isPhoneLike(raw?: string | null): string | undefined {
  const s = String(raw || '').trim();
  if (!s || s.includes('@') || /http/i.test(s)) return undefined;
  const digits = s.replace(/\D/g, '');
  if (digits.length >= 7 && digits.length <= 16) return s;
  return undefined;
}

function extractSameAsUrls(listing: any): string[] {
  const urls = new Set<string>();
  const web = normalizeHttpUrl(
    listing?.ui?.website || listing?.website || listing?.booking?.website || listing?.contact?.website
  );
  if (web) urls.add(web);
  const ig = normalizeInstagramUrl(
    listing?.ui?.instagram || listing?.instagram || listing?.contact?.instagram
  );
  if (ig) urls.add(ig);
  const fb = normalizeHttpUrl(listing?.ui?.facebook || listing?.facebook || listing?.contact?.facebook);
  if (fb) urls.add(fb);
  return Array.from(urls);
}

function extractTelephone(listing: any): string | undefined {
  const candidates = [
    listing?.ui?.phone,
    listing?.phone,
    listing?.phoneNumber,
    listing?.ui?.phoneNumber,
    listing?.contact?.phone,
    listing?.contact_whatsapp,
    listing?.ui?.reservationContact,
    listing?.reservationContact,
  ];
  for (const c of candidates) {
    const valid = isPhoneLike(c);
    if (valid) return valid;
  }
  return undefined;
}

const WEEK_DAYS_SCHEMA = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function normalizeDayName(raw: string): string {
  const lower = String(raw || '').trim().toLowerCase();
  const found = WEEK_DAYS_SCHEMA.find(
    (d) => d.toLowerCase() === lower || d.toLowerCase().startsWith(lower.slice(0, 3))
  );
  return found || raw;
}

function parseTimeRange(str: string): { opens: string; closes: string } | null {
  const m = String(str || '').match(/(\d{1,2}[:h]\d{2})\s*[-–—àto]+\s*(\d{1,2}[:h]\d{2})/i);
  if (!m) return null;
  const fmt = (t: string) => t.replace(/h/i, ':').padStart(5, '0');
  return { opens: fmt(m[1]), closes: fmt(m[2]) };
}

function extractOpeningHoursSpecification(listing: any): Record<string, any>[] | undefined {
  const schedule = listing?.ui?.weeklySchedule || listing?.weeklySchedule;
  if (Array.isArray(schedule) && schedule.length > 0) {
    const specs: Record<string, any>[] = [];
    for (const row of schedule) {
      if (!row || row.closed) continue;
      const day = row.day ? normalizeDayName(row.day) : '';
      const range =
        row.open && row.close
          ? { opens: String(row.open), closes: String(row.close) }
          : row.hours
            ? parseTimeRange(row.hours)
            : null;
      if (day && range) {
        specs.push({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: `https://schema.org/${day}`,
          opens: range.opens,
          closes: range.closes,
        });
      }
    }
    if (specs.length > 0) return specs;
  }

  const openTime = listing?.ui?.openTime || listing?.openTime || listing?.hours?.open;
  const closeTime = listing?.ui?.closeTime || listing?.closeTime || listing?.hours?.close;
  if (openTime && closeTime) {
    return [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: WEEK_DAYS_SCHEMA.map((d) => `https://schema.org/${d}`),
        opens: String(openTime),
        closes: String(closeTime),
      },
    ];
  }
  return undefined;
}

function buildMenuSectionsSchema(menu: EatMenu | undefined, lang: AppLanguage) {
  if (!menu?.sections || !Array.isArray(menu.sections)) return [];
  const menuLang: MenuLanguage | null = lang === 'fr' ? null : lang;
  return menu.sections.map((sec) => ({
    '@type': 'MenuSection',
    name: menuLang ? getLocalizedSectionTitle(sec, menuLang) : sec.title,
    hasMenuItem: (sec.items || []).map((item) => {
      const displayName = menuLang ? getDishDisplayName(item, menuLang) : item.name;
      const secText = menuLang ? getDishSecondaryText(item, menuLang) : '';
      return {
        '@type': 'MenuItem',
        name: displayName,
        ...(secText ? { description: secText } : {}),
        offers: {
          '@type': 'Offer',
          price: item.price,
          priceCurrency: 'MAD',
        },
      };
    }),
  }));
}

// ---------------------------------------------------------------------------
// Localized copy dictionaries for Place, Menu, Things-to-Do, Near Me
// ---------------------------------------------------------------------------

const PLACE_CATEGORY_SHORT: Record<AppLanguage, Record<PlaceUrlCategory, string>> = {
  en: { food: 'Dining', sleep: 'Stays', shopping: 'Shopping' },
  fr: { food: 'Restaurant', sleep: 'Hébergement', shopping: 'Boutique' },
  es: { food: 'Restaurante', sleep: 'Alojamiento', shopping: 'Tienda' },
  de: { food: 'Restaurant', sleep: 'Unterkunft', shopping: 'Geschäft' },
  ar: { food: 'مطعم', sleep: 'إقامة', shopping: 'تسوق' },
};

const PLACE_COPY: Record<
  AppLanguage,
  {
    home: string;
    dining: string;
    menuWord: string;
    inWord: string;
    fromNight: (p: number) => string;
    avgPerson: (p: number) => string;
    verifiedIn: (cat: string, loc: string) => string;
    exploreCta: Record<PlaceUrlCategory, string>;
    ownerFaqQ: (name: string) => string;
  }
> = {
  en: {
    home: 'Home',
    dining: 'Dining',
    menuWord: 'Menu',
    inWord: 'in',
    fromNight: (p) => `From ${p} MAD/night`,
    avgPerson: (p) => `Avg ${p} MAD/person`,
    verifiedIn: (cat, loc) => `${cat} in ${loc}`,
    exploreCta: {
      food: 'See menu, reviews & local tips.',
      sleep: 'Check rooms, amenities & honest reviews.',
      shopping: 'Browse crafts, prices & directions.',
    },
    ownerFaqQ: (name) => `Who is the owner of ${name}?`,
  },
  fr: {
    home: 'Accueil',
    dining: 'Restaurants',
    menuWord: 'Carte',
    inWord: 'à',
    fromNight: (p) => `Dès ${p} MAD/nuit`,
    avgPerson: (p) => `Env. ${p} MAD/pers.`,
    verifiedIn: (cat, loc) => `${cat} à ${loc}`,
    exploreCta: {
      food: 'Consultez la carte, tarifs en MAD, avis vérifiés et conseils locaux sur Moroccan Mate.',
      sleep: 'Découvrez chambres, équipements, tarifs en MAD et avis vérifiés sur Moroccan Mate.',
      shopping: 'Explorez artisanat, prix justes en MAD, horaires et accès sur Moroccan Mate.',
    },
    ownerFaqQ: (name) => `Qui est le propriétaire de ${name} ?`,
  },
  es: {
    home: 'Inicio',
    dining: 'Restaurantes',
    menuWord: 'Carta',
    inWord: 'en',
    fromNight: (p) => `Desde ${p} MAD/noche`,
    avgPerson: (p) => `Media ${p} MAD/pers.`,
    verifiedIn: (cat, loc) => `${cat} en ${loc}`,
    exploreCta: {
      food: 'Consulta la carta, precios en MAD, reseñas verificadas y consejos en Moroccan Mate.',
      sleep: 'Descubre habitaciones, servicios, tarifas en MAD y reseñas en Moroccan Mate.',
      shopping: 'Explora artesanía, precios en MAD, horarios y ubicación en Moroccan Mate.',
    },
    ownerFaqQ: (name) => `¿Quién es el propietario de ${name}?`,
  },
  de: {
    home: 'Startseite',
    dining: 'Restaurants',
    menuWord: 'Speisekarte',
    inWord: 'in',
    fromNight: (p) => `Ab ${p} MAD/Nacht`,
    avgPerson: (p) => `Ca. ${p} MAD/Pers.`,
    verifiedIn: (cat, loc) => `${cat} in ${loc}`,
    exploreCta: {
      food: 'Speisekarte, MAD-Preise, geprüfte Bewertungen & Geheimtipps auf Moroccan Mate.',
      sleep: 'Zimmer, Ausstattung, MAD-Preise & geprüfte Bewertungen auf Moroccan Mate.',
      shopping: 'Handwerk, faire MAD-Preise, Öffnungszeiten & Route auf Moroccan Mate.',
    },
    ownerFaqQ: (name) => `Wer ist der Eigentümer von ${name}?`,
  },
  ar: {
    home: 'الرئيسية',
    dining: 'المطاعم',
    menuWord: 'القائمة',
    inWord: 'في',
    fromNight: (p) => `ابتداءً من ${p} درهم/ليلة`,
    avgPerson: (p) => `متوسط ${p} درهم/شخص`,
    verifiedIn: (cat, loc) => `${cat} في ${loc}`,
    exploreCta: {
      food: 'تصفح قائمة الطعام والأسعار بالدرهم، التقييمات الموثوقة ونصائح المحليين على Moroccan Mate.',
      sleep: 'شاهد الغرف، المرافق، الأسعار بالدرهم والتقييمات الموثوقة على Moroccan Mate.',
      shopping: 'اكتشف الحرف التقليدية، الأسعار بالدرهم، أوقات العمل والاتجاهات على Moroccan Mate.',
    },
    ownerFaqQ: (name) => `من هو مالك ${name}؟`,
  },
};

const MENU_COPY: Record<
  AppLanguage,
  {
    title: (name: string, city: string) => string;
    h1: (name: string) => string;
    desc: (p: {
      name: string;
      loc: string;
      cuisine: string;
      priceText: string;
      dishes: string[];
    }) => string;
    faqPriceQ: (name: string, city: string) => string;
    faqPriceA: (name: string, min: number, max: number) => string;
    faqAlcoholQ: (name: string) => string;
    faqAlcoholYes: (name: string) => string;
    faqAlcoholNo: (name: string) => string;
  }
> = {
  en: {
    title: (name, city) => `${name} Menu & Prices — ${city}`,
    h1: (name) => `${name} Menu`,
    desc: ({ name, loc, cuisine, priceText, dishes }) => {
      const dishPart = dishes.length > 0 ? ` Try ${dishes.join(', ')}.` : '';
      return `${name} menu in ${loc}${priceText ? ` (${priceText})` : ''}. ${cuisine} cuisine.${dishPart} View prices & hours.`;
    },
    faqPriceQ: (name, city) => `What are the average prices at ${name} in ${city}?`,
    faqPriceA: (name, min, max) =>
      `Dishes at ${name} typically range from ${min} to ${max} MAD across starters, mains, and house specialties.`,
    faqAlcoholQ: (name) => `Does ${name} serve alcohol?`,
    faqAlcoholYes: (name) => `${name} serves wine, beer, and cocktails alongside its dining menu.`,
    faqAlcoholNo: (name) => `${name} is a strictly alcohol-free (dry) dining venue.`,
  },
  fr: {
    title: (name, city) => `${name} Carte & Prix — ${city}`,
    h1: (name) => `Carte de ${name}`,
    desc: ({ name, loc, cuisine, priceText, dishes }) => {
      const dishPart = dishes.length > 0 ? ` Plats : ${dishes.join(', ')}.` : '';
      return `Carte ${name}, ${loc}${priceText ? ` (${priceText})` : ''}. Cuisine ${cuisine}.${dishPart} Prix et horaires.`;
    },
    faqPriceQ: (name, city) => `Quels sont les prix moyens chez ${name} à ${city} ?`,
    faqPriceA: (name, min, max) =>
      `Les plats chez ${name} varient généralement entre ${min} et ${max} MAD selon les entrées, plats et spécialités.`,
    faqAlcoholQ: (name) => `${name} sert-il de l'alcool ?`,
    faqAlcoholYes: (name) => `${name} propose vins, bières et boissons avec sa carte de restauration.`,
    faqAlcoholNo: (name) => `${name} est un établissement sans alcool.`,
  },
  es: {
    title: (name, city) => `${name} Carta y Precios — ${city}`,
    h1: (name) => `Carta de ${name}`,
    desc: ({ name, loc, cuisine, priceText, dishes }) => {
      const dishPart = dishes.length > 0 ? ` Platos: ${dishes.join(', ')}.` : '';
      return `Carta ${name}, ${loc}${priceText ? ` (${priceText})` : ''}. Cocina ${cuisine}.${dishPart} Ver precios y horario.`;
    },
    faqPriceQ: (name, city) => `¿Cuáles son los precios medios en ${name} en ${city}?`,
    faqPriceA: (name, min, max) =>
      `Los platos en ${name} oscilan normalmente entre ${min} y ${max} MAD entre entrantes, principales y especialidades.`,
    faqAlcoholQ: (name) => `¿Sirve alcohol ${name}?`,
    faqAlcoholYes: (name) => `${name} sirve vinos, cervezas y cócteles junto con su carta.`,
    faqAlcoholNo: (name) => `${name} es un restaurante estrictamente sin alcohol.`,
  },
  de: {
    title: (name, city) => `${name} Speisekarte & Preise — ${city}`,
    h1: (name) => `${name} Speisekarte`,
    desc: ({ name, loc, cuisine, priceText, dishes }) => {
      const dishPart = dishes.length > 0 ? ` Tipps: ${dishes.join(', ')}.` : '';
      return `Menü ${name}, ${loc}${priceText ? ` (${priceText})` : ''}. ${cuisine}.${dishPart} Preise & Zeiten ansehen.`;
    },
    faqPriceQ: (name, city) => `Wie sind die Preise im ${name} in ${city}?`,
    faqPriceA: (name, min, max) =>
      `Die Gerichte im ${name} kosten je nach Vorspeise, Hauptgericht und Spezialität meist zwischen ${min} und ${max} MAD.`,
    faqAlcoholQ: (name) => `Wird im ${name} Alkohol ausgeschenkt?`,
    faqAlcoholYes: (name) => `${name} bietet Weine, Biere und Drinks zur Speisekarte an.`,
    faqAlcoholNo: (name) => `${name} ist ein strikt alkoholfreies Restaurant.`,
  },
  ar: {
    title: (name, city) => `منيو وأسعار ${name} — ${city}`,
    h1: (name) => `قائمة طعام ${name}`,
    desc: ({ name, loc, cuisine, priceText, dishes }) => {
      const dishPart = dishes.length > 0 ? ` أطباق: ${dishes.join('، ')}.` : '';
      return `منيو ${name} في ${loc}${priceText ? ` (${priceText})` : ''}. مطبخ ${cuisine}.${dishPart} الأسعار والمواعيد.`;
    },
    faqPriceQ: (name, city) => `ما هي متوسط الأسعار في ${name} في ${city}؟`,
    faqPriceA: (name, min, max) =>
      `تتراوح أسعار الأطباق في ${name} عادةً بين ${min} و ${max} درهم مغربي حسب المقبلات والأطباق الرئيسية.`,
    faqAlcoholQ: (name) => `هل يقدم ${name} المشروبات الكحولية؟`,
    faqAlcoholYes: (name) => `يقدم ${name} مشروبات متنوعة إلى جانب قائمة الطعام.`,
    faqAlcoholNo: (name) => `${name} مطعم خالٍ تماماً من المشروبات الكحولية.`,
  },
};

const THINGS_COPY: Record<
  AppLanguage,
  {
    thingsIn: (c: string) => string;
    title: (name: string, city: string) => string;
    free: string;
    minutesUnit: string;
    cta: string;
  }
> = {
  en: {
    thingsIn: (c) => `Things to Do in ${c}`,
    title: (name, city) => {
      const withGuide = `${name} — ${city} Guide`;
      return withGuide.length + 16 <= 60 ? withGuide : `${name} — ${city}`;
    },
    free: 'Free Entry',
    minutesUnit: 'min',
    cta: 'Check hours, tips & prices on Moroccan Mate.',
  },
  fr: {
    thingsIn: (c) => `Choses à Faire à ${c}`,
    title: (name, city) => {
      const withSuffix = `${name} à ${city} — Visite & Prix`;
      return withSuffix.length <= 60 ? withSuffix : `${name} à ${city}`;
    },
    free: 'Entrée gratuite',
    minutesUnit: 'min',
    cta: 'Horaires, tarifs en MAD, conseils pratiques et avis vérifiés sur Moroccan Mate.',
  },
  es: {
    thingsIn: (c) => `Qué Hacer en ${c}`,
    title: (name, city) => {
      const withSuffix = `${name} en ${city} — Guía y Precios`;
      return withSuffix.length <= 60 ? withSuffix : `${name} en ${city}`;
    },
    free: 'Entrada gratis',
    minutesUnit: 'min',
    cta: 'Horarios, precios en MAD, consejos prácticos y reseñas en Moroccan Mate.',
  },
  de: {
    thingsIn: (c) => `Aktivitäten in ${c}`,
    title: (name, city) => {
      const withSuffix = `${name} in ${city} — Tipps & Preise`;
      return withSuffix.length <= 60 ? withSuffix : `${name} in ${city}`;
    },
    free: 'Eintritt frei',
    minutesUnit: 'Min.',
    cta: 'Öffnungszeiten, MAD-Preise, Insidertipps & Bewertungen auf Moroccan Mate.',
  },
  ar: {
    thingsIn: (c) => `أنشطة في ${c}`,
    title: (name, city) => {
      const withSuffix = `${name} في ${city} — دليل وأسعار`;
      return withSuffix.length <= 60 ? withSuffix : `${name} في ${city}`;
    },
    free: 'دخول مجاني',
    minutesUnit: 'دقيقة',
    cta: 'اكتشف أوقات العمل، الأسعار بالدرهم، نصائح المحليين والتقييمات على Moroccan Mate.',
  },
};

const INTENT_DESC_SUFFIX: Record<AppLanguage, string> = {
  en: 'Compare verified ratings, MAD prices, and local tips on Moroccan Mate.',
  fr: 'Comparez avis vérifiés, tarifs en MAD et conseils locaux sur Moroccan Mate.',
  es: 'Compara reseñas verificadas, precios en MAD y consejos locales en Moroccan Mate.',
  de: 'Vergleiche geprüfte Bewertungen, MAD-Preise und Insidertipps auf Moroccan Mate.',
  ar: 'قارن التقييمات الموثوقة والأسعار بالدرهم ونصائح المحليين عبر Moroccan Mate.',
};

// ---------------------------------------------------------------------------
// Public SEO Builders (shared by React views & Node build scripts)
// ---------------------------------------------------------------------------

export function buildHomeSeo(lang: AppLanguage): SeoBundle {
  const home = HOME_SEO_I18N[lang];
  const canonical = '/';
  const localized = localizePath(canonical, lang);
  const fullUrl = `${BASE_URL}${localized === '/' ? '' : localized}`;
  const title = composeTitle(home.title, SITE_NAME, 60);
  const description = smartDescription(home.description, 155);

  return {
    title,
    description,
    canonical,
    image: DEFAULT_OG_IMAGE,
    h1: home.h1,
    schemaType: 'WebSite',
    schemaData: {
      alternateName: ['MoroccanMate'],
      inLanguage: lang,
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      alternateName: ['MoroccanMate'],
      url: fullUrl || BASE_URL,
      inLanguage: lang,
      description,
    },
  };
}

export function buildFinderHubSeo(lang: AppLanguage): SeoBundle {
  const finder = FINDER_SEO_I18N[lang];
  const canonical = '/finder';
  const title = composeTitle(finder.title, SITE_NAME, 60);
  const description = smartDescription(finder.description, 155);
  return {
    title,
    description,
    canonical,
    image: DEFAULT_OG_IMAGE,
    h1: finder.h1,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description,
      url: `${BASE_URL}${localizePath(canonical, lang)}`,
      inLanguage: lang,
    },
  };
}

export function buildBrowseSeo(params: {
  cityLabel: string;
  cityKey: string;
  segment: BrowseSegment;
  lang: AppLanguage;
  matchedPlaces?: Array<{ name: string; url: string }>;
}): SeoBundle {
  const { cityLabel, cityKey, segment, lang, matchedPlaces = [] } = params;
  const browse = getBrowseSeoI18n(cityLabel, segment, lang);
  const canonical = `/finder/${cityKey}/${segment}`;
  const title = composeTitle(browse.title, SITE_NAME, 60);
  const description = smartDescription(browse.description, 155);
  const pageUrl = `${BASE_URL}${localizePath(canonical, lang)}`;

  const itemListElements = matchedPlaces.slice(0, 12).map((p, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: p.name,
    url: `${BASE_URL}${p.url}`,
  }));

  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: browse.h1,
    description,
    url: pageUrl,
    inLanguage: lang,
    ...(itemListElements.length > 0
      ? {
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: matchedPlaces.length,
            itemListElement: itemListElements,
          },
        }
      : {}),
  };

  return {
    title,
    description,
    canonical,
    image: DEFAULT_OG_IMAGE,
    h1: browse.h1,
    schemaType: 'CollectionPage',
    schemaData: {
      name: browse.h1,
      inLanguage: lang,
    },
    jsonLd,
  };
}

export function buildSearchIntentSeo(params: {
  intent: SearchIntent;
  cityLabel: string;
  cityKey: string;
  category: string;
  lang: AppLanguage;
  matchedPlaces?: Array<{ name: string; url: string }>;
}): SeoBundle {
  const { intent, cityLabel, cityKey, category, lang, matchedPlaces = [] } = params;
  const canonical = `/finder/${cityKey}/${category}/${intent.slug}`;
  const rawTitle = intent.seoTitle(cityLabel);
  const title = composeTitle(rawTitle, SITE_NAME, 60);

  let rawDesc = String(intent.seoDescription(cityLabel) || '').trim();
  if (rawDesc.length < 115) {
    rawDesc = `${rawDesc.replace(/\.+$/, '')}. ${INTENT_DESC_SUFFIX[lang]}`;
  }
  const description = smartDescription(rawDesc, 155);
  const h1 = intent.headerTitle(cityLabel);
  const pageUrl = `${BASE_URL}${localizePath(canonical, lang)}`;

  const itemListElements = matchedPlaces.slice(0, 12).map((p, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: p.name,
    url: `${BASE_URL}${p.url}`,
  }));

  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: h1,
    description,
    url: pageUrl,
    inLanguage: lang,
    ...(itemListElements.length > 0
      ? {
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: matchedPlaces.length,
            itemListElement: itemListElements,
          },
        }
      : {}),
  };

  return {
    title,
    description,
    canonical,
    image: DEFAULT_OG_IMAGE,
    h1,
    schemaType: 'CollectionPage',
    schemaData: {
      name: h1,
      inLanguage: lang,
    },
    jsonLd,
  };
}

export function buildPlaceSeo(params: {
  listing: any;
  category: PlaceUrlCategory;
  cityKey: string;
  cityLabel: string;
  slug: string;
  lang: AppLanguage;
  ownerAnswer?: string;
}): SeoBundle {
  const { listing, category, cityKey, cityLabel, slug, lang, ownerAnswer } = params;
  const copy = PLACE_COPY[lang];
  const rawName = String(listing?.ui?.name || listing?.name || listing?.title || 'Place');
  const name = rawName.replace(/\s*\(unverified\)\s*$/i, '').trim() || rawName;
  const shortCat = PLACE_CATEGORY_SHORT[lang][category];
  const fullCatLabel = CATEGORY_LABELS_I18N[lang][category];
  const neighborhood = listing?.ui?.neighborhood || listing?.neighborhood;
  const isSleep = category === 'sleep';
  const isEat = category === 'food';
  const isShopping = category === 'shopping';

  const eatMetrics = isEat ? getEatPriceMetrics(listing) : null;
  const price = isSleep
    ? Number(listing?.pricePerNight ?? 0)
    : isEat
      ? (eatMetrics?.avgPersonMad ?? 0)
      : Number(listing?.pricePerPerson ?? listing?.filter?.pricePerPerson ?? 0);

  const rating = getListingRating(listing);
  const rawDesc = String(listing?.ui?.description || listing?.description || listing?.short_description || '');

  // Category-aware SERP title (<= 60 chars)
  let coreTitle = `${name} — ${shortCat} ${copy.inWord} ${cityLabel}`;
  if (isEat && lang === 'en') {
    const richEatTitle = `${name} ${cityLabel}: Menu, Prices & Reviews`;
    const compactEatTitle = `${name} — ${cityLabel} Menu & Reviews`;
    if (richEatTitle.length <= 60) {
      coreTitle = richEatTitle;
    } else if (compactEatTitle.length <= 60) {
      coreTitle = compactEatTitle;
    }
  }
  const title = composeTitle(coreTitle, SITE_NAME, 60);

  // Description: pack concrete SERP hooks (rating, realistic MAD price, location, summary/CTA)
  const factParts: string[] = [];
  if (rating && rating.averageRating > 0) {
    factParts.push(`★ ${rating.averageRating.toFixed(1)}`);
  }
  if (isSleep && price > 0) {
    factParts.push(copy.fromNight(price));
  } else if (isEat && eatMetrics) {
    if (eatMetrics.perPersonRangeText) {
      factParts.push(
        lang === 'en'
          ? `${eatMetrics.perPersonRangeText}/person`
          : copy.avgPerson(eatMetrics.avgPersonMad)
      );
    } else if (eatMetrics.avgPersonMad > 0) {
      factParts.push(copy.avgPerson(eatMetrics.avgPersonMad));
    }
  }
  const locText = neighborhood && neighborhood.toLowerCase() !== cityLabel.toLowerCase()
    ? `${neighborhood}, ${cityLabel}`
    : cityLabel;

  let composedDesc = '';
  if (lang === 'en' && rawDesc) {
    const prefix = factParts.length > 0 ? `${factParts.join(' · ')} in ${locText}. ` : `${locText}. `;
    composedDesc = `${prefix}${rawDesc}`;
    if (composedDesc.length < 115) {
      composedDesc = `${composedDesc.replace(/\.+$/, '')}. ${copy.exploreCta[category]}`;
    }
  } else {
    const lead = `${name} (${copy.verifiedIn(shortCat, locText)})`;
    const metrics = factParts.length > 0 ? ` · ${factParts.join(' · ')}.` : '.';
    const extra = rawDesc && lang === 'en' ? ` ${rawDesc}` : ` ${copy.exploreCta[category]}`;
    composedDesc = `${lead}${metrics}${extra}`;
  }
  const description = smartDescription(composedDesc, 155);

  const canonical = `/place/${cityKey}/${category}/${slug}`;
  const localizedCanonicalUrl = `${BASE_URL}${localizePath(canonical, lang)}`;
  const rawImage =
    listing?.ui?.nonCopyrightImage ||
    listing?.nonCopyrightImage ||
    (Array.isArray(listing?.images) && listing.images[0]) ||
    undefined;
  const image = resolveAbsoluteImageUrl(rawImage);

  const addressText =
    listing?.ui?.exactAddressAndCoordinates?.address ||
    listing?.ui?.address ||
    listing?.address ||
    `${neighborhood || cityLabel}, Morocco`;
  const coords =
    listing?.ui?.exactAddressAndCoordinates?.coordinates ||
    listing?.ui?.coordinates ||
    listing?.coordinates;
  const telephone = extractTelephone(listing);
  const sameAs = extractSameAsUrls(listing);
  const openingHoursSpecification = extractOpeningHoursSpecification(listing);
  const eatMenu: EatMenu | undefined = isEat ? (listing?.ui?.menu || listing?.menu) : undefined;
  const eatMenuSections = isEat ? buildMenuSectionsSchema(eatMenu, lang) : [];

  const schemaData: Record<string, any> = {
    name,
    description,
    url: localizedCanonicalUrl,
    image,
    inLanguage: lang,
    ...(telephone ? { telephone } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(openingHoursSpecification ? { openingHoursSpecification } : {}),
    address: {
      '@type': 'PostalAddress',
      ...(addressText ? { streetAddress: addressText } : {}),
      addressLocality: cityLabel,
      addressCountry: 'MA',
    },
    ...(coords?.lat && coords?.lng
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: coords.lat,
            longitude: coords.lng,
          },
        }
      : {}),
    ...(rating && rating.averageRating > 0 && rating.totalReviews > 0
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: rating.averageRating,
            reviewCount: rating.totalReviews,
          },
        }
      : {}),
    ...(isSleep && price > 0
      ? {
          priceRange: `${price} MAD`,
          offers: {
            '@type': 'Offer',
            price,
            priceCurrency: 'MAD',
            availability: 'https://schema.org/InStock',
          },
          ...(Array.isArray(listing?.amenities) && listing.amenities.length > 0
            ? {
                amenityFeature: listing.amenities.slice(0, 10).map((a: string) => ({
                  '@type': 'LocationFeatureSpecification',
                  name: a,
                  value: true,
                })),
              }
            : {}),
        }
      : {}),
    ...(isEat
      ? {
          ...(eatMetrics?.perPersonRangeText
            ? { priceRange: eatMetrics.perPersonRangeText }
            : price > 0
              ? { priceRange: `${price} MAD` }
              : {}),
          ...((listing?.foodStyles || listing?.quiz?.foodStyles || listing?.cuisineTags)
            ? { servesCuisine: listing.foodStyles || listing.quiz?.foodStyles || listing.cuisineTags }
            : {}),
          ...((listing?.ui?.reservationMethod || listing?.reservationMethod)?.length > 0
            ? { acceptsReservations: true }
            : {}),
          ...(eatMenu
            ? {
                hasMenu: {
                  '@type': 'Menu',
                  name: `${name} ${copy.menuWord}`,
                  url: `${BASE_URL}${localizePath(`${canonical}/menu`, lang)}`,
                  inLanguage: lang,
                  ...(eatMenuSections.length > 0 ? { hasMenuSection: eatMenuSections } : {}),
                },
              }
            : {}),
        }
      : {}),
    ...(isShopping
      ? {
          currenciesAccepted: 'MAD, EUR, USD',
          paymentAccepted: 'Cash, Credit Card',
        }
      : {}),
  };

  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': PLACE_SCHEMA_TYPE[category],
    ...schemaData,
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { name: copy.home, item: '/' },
    { name: `${fullCatLabel} · ${cityLabel}`, item: `/finder/${cityKey}/${category}` },
    { name, item: canonical },
  ];

  const computedFaqs = buildPlaceFaqs({
    listing,
    category,
    cityLabel,
    lang,
    ownerAnswer,
  });
  const faq: FaqItem[] | undefined = computedFaqs.length > 0 ? computedFaqs : undefined;

  return {
    title,
    description,
    canonical,
    image,
    h1: name,
    schemaType: PLACE_SCHEMA_TYPE[category],
    schemaData,
    jsonLd,
    breadcrumbs,
    faq,
  };
}

export function buildMenuSeo(params: {
  listing: EatListing;
  cityKey: string;
  cityLabel: string;
  slug: string;
  lang: AppLanguage;
}): SeoBundle & { placeProfileUrl: string; priceRangeText: string } {
  const { listing, cityKey, cityLabel, slug, lang } = params;
  const copy = MENU_COPY[lang];
  const pCopy = PLACE_COPY[lang];

  const rawName = String(listing.ui?.name || listing.name || 'Restaurant');
  const name = rawName.replace(/\s*\(unverified\)\s*$/i, '').trim() || rawName;
  const neighborhood = listing.ui?.neighborhood || listing.neighborhood || '';
  const loc = neighborhood && neighborhood.toLowerCase() !== cityLabel.toLowerCase()
    ? `${neighborhood}, ${cityLabel}`
    : cityLabel;

  const menu = listing.ui?.menu || listing.menu;
  const bestDishesRaw = listing.ui?.bestDishes || listing.bestDishes || [];
  // Keep 1-2 clean dishes so full menu highlight fits within 155-char description across all languages
  const dishes = bestDishesRaw
    .map((d) => String(d || '').replace(/\s*\(.*?\)\s*/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .slice(0, 2);
  const primaryCuisine =
    listing.foodStyles?.[0] || listing.quiz?.foodStyles?.[0] || 'Moroccan';
  const avgPrice = Number(listing.filter?.pricePerPerson ?? listing.pricePerPerson ?? 20);
  const computedRange = computeMenuPriceRange(menu);
  const minPrice = computedRange?.min ?? Math.round(avgPrice * 6);
  const maxPrice = computedRange?.max ?? Math.round(avgPrice * 14);
  const priceRangeText = `${minPrice}–${maxPrice} MAD`;

  const title = composeTitle(copy.title(name, cityLabel), SITE_NAME, 60);
  const description = smartDescription(
    copy.desc({
      name,
      loc,
      cuisine: primaryCuisine,
      priceText: priceRangeText,
      dishes,
    }),
    155
  );

  const canonical = `/place/${cityKey}/food/${slug}/menu`;
  const placeProfileUrl = `/place/${cityKey}/food/${slug}`;
  const localizedCanonicalUrl = `${BASE_URL}${localizePath(canonical, lang)}`;

  const rawImage =
    listing.ui?.nonCopyrightImage ||
    listing.nonCopyrightImage ||
    (Array.isArray(listing.images) && listing.images[0]) ||
    undefined;
  const image = resolveAbsoluteImageUrl(rawImage);

  const rating = getListingRating(listing);
  const servesAlcohol = Boolean(
    listing.filter?.servesAlcohol ||
      listing.servesAlcohol ||
      listing.filter?.alcoholPolicy === 'serves-alcohol' ||
      listing.alcoholPolicy === 'serves-alcohol'
  );

  const faq: FaqItem[] = [
    {
      question: copy.faqPriceQ(name, cityLabel),
      answer: copy.faqPriceA(name, minPrice, maxPrice),
    },
    {
      question: copy.faqAlcoholQ(name),
      answer: servesAlcohol ? copy.faqAlcoholYes(name) : copy.faqAlcoholNo(name),
    },
  ];

  const menuSectionsForSchema = buildMenuSectionsSchema(menu, lang);

  const coords = listing.ui?.coordinates || (listing as any).coordinates;
  const addressText = listing.ui?.address || `${loc}, Morocco`;

  const schemaData: Record<string, any> = {
    name,
    url: localizedCanonicalUrl,
    image,
    inLanguage: lang,
    address: {
      '@type': 'PostalAddress',
      streetAddress: addressText,
      addressLocality: cityLabel,
      addressCountry: 'MA',
    },
    ...(coords?.lat && coords?.lng
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: coords.lat,
            longitude: coords.lng,
          },
        }
      : {}),
    ...(rating && rating.averageRating > 0 && rating.totalReviews > 0
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: rating.averageRating,
            reviewCount: rating.totalReviews,
          },
        }
      : {}),
    servesCuisine: listing.foodStyles || listing.quiz?.foodStyles || [primaryCuisine],
    priceRange: priceRangeText,
    hasMenu: {
      '@type': 'Menu',
      name: copy.h1(name),
      url: localizedCanonicalUrl,
      inLanguage: lang,
      ...(menuSectionsForSchema.length > 0 ? { hasMenuSection: menuSectionsForSchema } : {}),
    },
  };

  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    ...schemaData,
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { name: pCopy.home, item: '/' },
    { name: cityLabel, item: `/finder/${cityKey}` },
    { name: pCopy.dining, item: `/finder/${cityKey}/food` },
    { name, item: placeProfileUrl },
    { name: pCopy.menuWord, item: canonical },
  ];

  return {
    title,
    description,
    canonical,
    placeProfileUrl,
    priceRangeText,
    image,
    h1: copy.h1(name),
    schemaType: 'Restaurant',
    schemaData,
    jsonLd,
    breadcrumbs,
    faq,
  };
}

export function buildThingsSeo(params: {
  activity: any;
  cityKey: string;
  cityLabel: string;
  lang: AppLanguage;
}): SeoBundle {
  const { activity, cityKey, cityLabel, lang } = params;
  const copy = THINGS_COPY[lang];
  const pCopy = PLACE_COPY[lang];
  const name = activity?.name || 'Experience';
  const slug = activity?.slug || activity?.id || '';
  const canonical = `/things/${cityKey}/${slug}`;
  const localizedUrl = `${BASE_URL}${localizePath(canonical, lang)}`;

  const title = composeTitle(copy.title(name, cityLabel), SITE_NAME, 60);

  const price = Number(activity?.pricing?.price ?? activity?.price ?? 0);
  const durationMin = Number(activity?.duration_minutes ?? activity?.durationMinutes ?? 0);
  const actType = activity?.activity_type || activity?.category || '';
  const rawDesc = String(activity?.short_description || activity?.description || '');

  const metaBits: string[] = [];
  if (actType) metaBits.push(actType);
  if (durationMin > 0) {
    metaBits.push(durationMin >= 60 ? `${Math.round((durationMin / 60) * 10) / 10}h` : `${durationMin} ${copy.minutesUnit}`);
  }
  if (price > 0) metaBits.push(`${price} MAD`);
  else if (activity?.pricing?.pricing_type === 'free') metaBits.push(copy.free);

  let rawComposed = '';
  if (lang === 'en' && rawDesc) {
    const prefix = metaBits.length > 0 ? `${metaBits.join(' · ')} in ${cityLabel}. ` : `${cityLabel}. `;
    rawComposed = `${prefix}${rawDesc}`;
    if (rawComposed.length < 115) {
      rawComposed = `${rawComposed.replace(/\.+$/, '')}. ${copy.cta}`;
    }
  } else {
    const prefix = metaBits.length > 0 ? `${name} (${cityLabel}) · ${metaBits.join(' · ')}. ` : `${name} (${cityLabel}). `;
    rawComposed = `${prefix}${copy.cta}`;
  }
  const description = smartDescription(rawComposed, 155);

  const hero = activity?.media?.find((m: any) => m.media_type === 'hero') || activity?.media?.[0];
  const rawImage = hero?.file_url || hero?.url || activity?.nonCopyrightImage || activity?.images?.[0];
  const image = resolveAbsoluteImageUrl(rawImage);

  const coords = activity?.coordinates || (activity?.latitude && activity?.longitude
    ? { lat: activity.latitude, lng: activity.longitude }
    : undefined);
  const ratingVal = Number(activity?.google_rating ?? activity?.googleRating ?? 0);
  const reviewCount = Number(activity?.review_count ?? activity?.googleReviewCount ?? activity?.reviewCount ?? 0);

  const telephone = extractTelephone(activity);
  const sameAs = extractSameAsUrls(activity);

  const schemaData: Record<string, any> = {
    name,
    description,
    url: localizedUrl,
    image,
    inLanguage: lang,
    ...(telephone ? { telephone } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    address: {
      '@type': 'PostalAddress',
      ...(activity?.address ? { streetAddress: activity.address } : {}),
      addressLocality: cityLabel,
      addressCountry: 'MA',
    },
    ...(coords?.lat && coords?.lng
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: coords.lat,
            longitude: coords.lng,
          },
        }
      : {}),
    ...(price > 0
      ? {
          offers: {
            '@type': 'Offer',
            price,
            priceCurrency: 'MAD',
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
    ...(ratingVal > 0 && reviewCount > 0
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: ratingVal,
            reviewCount,
          },
        }
      : {}),
  };

  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    ...schemaData,
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { name: pCopy.home, item: '/' },
    { name: copy.thingsIn(cityLabel), item: `/finder/${cityKey}/things-to-do` },
    { name, item: canonical },
  ];

  const computedFaqs = buildPlaceFaqs({
    listing: activity,
    category: 'things-to-do',
    cityLabel,
    lang,
  });

  return {
    title,
    description,
    canonical,
    image,
    h1: name,
    schemaType: 'TouristAttraction',
    schemaData,
    jsonLd,
    breadcrumbs,
    ...(computedFaqs.length > 0 ? { faq: computedFaqs } : {}),
  };
}

export function buildNearMeSeo(params: {
  categorySegment: string;
  categoryTitle: string;
  cityKey: string;
  cityLabel: string;
  spotCount: number;
  lang: AppLanguage;
}): { title: string; description: string; canonical: string } {
  const { categorySegment, categoryTitle, cityKey, cityLabel, spotCount, lang } = params;
  const canonical = `/${categorySegment}/${cityKey}/near-me`;

  const templates: Record<AppLanguage, { title: string; desc: string }> = {
    en: {
      title: `${categoryTitle} Near You in ${cityLabel}`,
      desc: `Find ${spotCount > 0 ? `${spotCount} ` : ''}verified ${categoryTitle.toLowerCase()} near your location in ${cityLabel}, Morocco—live hours, ratings, and walking directions.`,
    },
    fr: {
      title: `${categoryTitle} près de vous à ${cityLabel}`,
      desc: `Trouvez ${spotCount > 0 ? `${spotCount} ` : ''}adresses vérifiées (${categoryTitle.toLowerCase()}) près de vous à ${cityLabel}, Maroc : horaires, avis et itinéraire.`,
    },
    es: {
      title: `${categoryTitle} cerca de ti en ${cityLabel}`,
      desc: `Encuentra ${spotCount > 0 ? `${spotCount} ` : ''}sitios verificados (${categoryTitle.toLowerCase()}) cerca de ti en ${cityLabel}, Marruecos: horarios, reseñas y mapa.`,
    },
    de: {
      title: `${categoryTitle} in deiner Nähe in ${cityLabel}`,
      desc: `Finde ${spotCount > 0 ? `${spotCount} ` : ''}geprüfte Orte (${categoryTitle}) in deiner Nähe in ${cityLabel}, Marokko – Öffnungszeiten, Bewertungen & Route.`,
    },
    ar: {
      title: `${categoryTitle} بالقرب منك في ${cityLabel}`,
      desc: `اكتشف ${spotCount > 0 ? `${spotCount} ` : ''}أماكن موثوقة (${categoryTitle}) بالقرب من موقعك في ${cityLabel}، المغرب مع أوقات العمل والتقييمات والاتجاهات.`,
    },
  };

  const t = templates[lang];
  return {
    title: composeTitle(t.title, SITE_NAME, 60),
    description: smartDescription(t.desc, 155),
    canonical,
  };
}
