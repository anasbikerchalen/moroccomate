import type { AppLanguage } from '../../utils/localeRouting';

export type BlogDesk = 'food' | 'stays' | 'craft' | 'routes' | 'etiquette';

export type BlogImageKey =
  | 'marrakech-courtyard'
  | 'fes-craft'
  | 'riad-courtyard'
  | 'essaouira-ramparts'
  | 'chefchaouen-blue'
  | 'sahara-dunes';

export type PlaceRef =
  | {
      kind: 'place';
      city: string;
      category: 'food' | 'sleep' | 'shopping';
      slug: string;
    }
  | {
      kind: 'things';
      city: string;
      slug: string;
    };

export type InlineSegment =
  | { type: 'text'; text: string }
  | { type: 'place'; label: string; ref: PlaceRef }
  | {
      type: 'finder';
      label: string;
      city: string;
      category: 'food' | 'sleep' | 'things-to-do' | 'shopping';
    };

export type ArticleBlock =
  | { type: 'paragraph'; segments: InlineSegment[] }
  | { type: 'heading'; id: string; index: string; text: string }
  | { type: 'pullquote'; quote: string; attribution?: string }
  | { type: 'figure'; imageKey: BlogImageKey; figNumber: string; caption: string }
  | { type: 'place-dispatch'; note: string; ref: PlaceRef }
  | {
      type: 'field-ledger';
      title: string;
      tone?: 'neutral' | 'caution';
      rows: Array<{ label: string; value: string; detail?: string }>;
    };

export interface LocalizedArticleContent {
  title: string;
  deck: string;
  seoTitle: string;
  seoDescription: string;
  authorName: string;
  authorRole: string;
  kickerCityLabel: string;
  heroCaption: string;
  blocks: ArticleBlock[];
}

export interface BlogArticle {
  slug: string;
  issueNumber: string;
  desk: BlogDesk;
  cityId: string;
  publishedAt: string;
  readTimeMinutes: number;
  heroImageKey: BlogImageKey;
  featured?: boolean;
  linkedPlaces: PlaceRef[];
  translations: Record<AppLanguage, LocalizedArticleContent>;
}
