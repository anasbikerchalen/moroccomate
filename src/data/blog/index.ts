import type { AppLanguage } from '../../utils/localeRouting';
import { ARTICLES_PART_1 } from './articlesPart1';
import { ARTICLES_PART_2 } from './articlesPart2';
import type { BlogArticle, BlogDesk, LocalizedArticleContent } from './types';

export * from './types';

const ALL_BLOG_ARTICLES: BlogArticle[] = [...ARTICLES_PART_1, ...ARTICLES_PART_2];

export function getAllBlogArticles(): BlogArticle[] {
  return ALL_BLOG_ARTICLES;
}

export function getBlogArticleBySlug(slug: string | undefined | null): BlogArticle | undefined {
  if (!slug) return undefined;
  const clean = String(slug).toLowerCase().trim();
  return ALL_BLOG_ARTICLES.find((a) => a.slug.toLowerCase() === clean);
}

export function getLocalizedArticleContent(
  article: BlogArticle,
  lang: AppLanguage
): LocalizedArticleContent {
  return article.translations[lang] || article.translations.en;
}

export function getRelatedBlogArticles(article: BlogArticle, limit = 3): BlogArticle[] {
  const others = ALL_BLOG_ARTICLES.filter((a) => a.slug !== article.slug);
  const sameCityOrDesk = others.filter(
    (a) => a.cityId === article.cityId || a.desk === article.desk
  );
  const remaining = others.filter(
    (a) => a.cityId !== article.cityId && a.desk !== article.desk
  );
  return [...sameCityOrDesk, ...remaining].slice(0, limit);
}

export function getAdjacentBlogArticles(slug: string): {
  prev: BlogArticle | null;
  next: BlogArticle | null;
} {
  const idx = ALL_BLOG_ARTICLES.findIndex((a) => a.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? ALL_BLOG_ARTICLES[idx - 1] : null,
    next: idx < ALL_BLOG_ARTICLES.length - 1 ? ALL_BLOG_ARTICLES[idx + 1] : null,
  };
}

export const BLOG_DESKS: BlogDesk[] = ['food', 'stays', 'craft', 'routes', 'etiquette'];
