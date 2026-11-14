import { useCallback } from 'react';
import { useLocation, useNavigate, type NavigateOptions } from 'react-router-dom';

export const SUPPORTED_LANGS = ['en', 'fr', 'es', 'de', 'ar'] as const;
export const NON_DEFAULT_LANGS = ['fr', 'es', 'de', 'ar'] as const;

export type AppLanguage = (typeof SUPPORTED_LANGS)[number];

export interface LangMeta {
  code: AppLanguage;
  shortCode: string;
  label: string;
  nativeLabel: string;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
}

export const LANG_META: Record<AppLanguage, LangMeta> = {
  en: {
    code: 'en',
    shortCode: 'EN',
    label: 'English',
    nativeLabel: 'English',
    dir: 'ltr',
    ogLocale: 'en_US',
  },
  fr: {
    code: 'fr',
    shortCode: 'FR',
    label: 'French',
    nativeLabel: 'Français',
    dir: 'ltr',
    ogLocale: 'fr_FR',
  },
  es: {
    code: 'es',
    shortCode: 'ES',
    label: 'Spanish',
    nativeLabel: 'Español',
    dir: 'ltr',
    ogLocale: 'es_ES',
  },
  de: {
    code: 'de',
    shortCode: 'DE',
    label: 'German',
    nativeLabel: 'Deutsch',
    dir: 'ltr',
    ogLocale: 'de_DE',
  },
  ar: {
    code: 'ar',
    shortCode: 'AR',
    label: 'Arabic',
    nativeLabel: 'العربية',
    dir: 'rtl',
    ogLocale: 'ar_MA',
  },
};

export function isSupportedLang(value: string | undefined | null): value is AppLanguage {
  return Boolean(value && (SUPPORTED_LANGS as readonly string[]).includes(value.toLowerCase()));
}

/**
 * Extracts language prefix and normalized base path from any URL pathname.
 * Examples:
 *   "/fr/finder/marrakech/food" -> { lang: "fr", basePath: "/finder/marrakech/food" }
 *   "/fr"                       -> { lang: "fr", basePath: "/" }
 *   "/finder/marrakech/food"    -> { lang: "en", basePath: "/finder/marrakech/food" }
 */
export function extractLangFromPath(pathname: string): { lang: AppLanguage; basePath: string } {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const segments = normalized.split('/');
  const first = (segments[1] || '').toLowerCase();

  if ((NON_DEFAULT_LANGS as readonly string[]).includes(first)) {
    const rest = '/' + segments.slice(2).join('/');
    return {
      lang: first as AppLanguage,
      basePath: rest === '/' ? '/' : rest.replace(/\/+$/, '') || '/',
    };
  }

  return {
    lang: 'en',
    basePath: normalized === '/' ? '/' : normalized.replace(/\/+$/, '') || '/',
  };
}

/**
 * Converts an app path (e.g. "/finder/marrakech/food?start=quiz") into the localized
 * path for the target language ("/fr/finder/marrakech/food?start=quiz" or "/finder/..." for "en").
 */
export function localizePath(path: string, lang: AppLanguage): string {
  if (!path) return lang === 'en' ? '/' : `/${lang}`;
  if (/^(https?:|mailto:|tel:|#)/i.test(path)) return path;

  // Split query & hash
  const hashIndex = path.indexOf('#');
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const withoutHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path;

  const queryIndex = withoutHash.indexOf('?');
  const search = queryIndex >= 0 ? withoutHash.slice(queryIndex) : '';
  const rawPathname = queryIndex >= 0 ? withoutHash.slice(0, queryIndex) : withoutHash;

  const { basePath } = extractLangFromPath(rawPathname || '/');

  if (lang === 'en') {
    return `${basePath}${search}${hash}`;
  }

  const prefixed = basePath === '/' ? `/${lang}` : `/${lang}${basePath}`;
  return `${prefixed}${search}${hash}`;
}

/**
 * Hook returning the active language derived from the current URL pathname.
 */
export function useAppLanguage(): AppLanguage {
  const { pathname } = useLocation();
  return extractLangFromPath(pathname).lang;
}

/**
 * Hook returning a language-preserving navigate helper and path localizer.
 */
export function useLangPath() {
  const lang = useAppLanguage();
  const navigate = useNavigate();

  const lp = useCallback(
    (path: string) => localizePath(path, lang),
    [lang]
  );

  const navigateLang = useCallback(
    (to: string | number, options?: NavigateOptions) => {
      if (typeof to === 'number') {
        navigate(to);
      } else {
        navigate(localizePath(to, lang), options);
      }
    },
    [navigate, lang]
  );

  return { lang, lp, navigateLang, dir: LANG_META[lang].dir };
}
