/**
 * =========================================================================
 * SITEMAP GENERATOR — writes public/sitemap.xml from the REAL listing data
 * =========================================================================
 * Runs automatically on every build (`npm run build`), so the sitemap can
 * never go stale: every place, every things-to-do experience and every
 * city/category browse page is included, for every city with real data.
 *
 * Manual run:  npm run sitemap
 */
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { collectAllPages, BASE_URL } from './page-data';
import { SUPPORTED_LANGS, localizePath } from '../src/utils/localeRouting';

const today = new Date().toISOString().slice(0, 10);
const pages = collectAllPages();

const escapeXml = (s: string) =>
  s.replace(/&/g, '\u0026amp;').replace(/</g, '\u0026lt;').replace(/>/g, '\u0026gt;').replace(/"/g, '\u0026quot;');

const urls = pages
  .map((p) => {
    const loc = `${BASE_URL}${p.path}`;
    const alternates = p.hasLocalizedRoutes
      ? SUPPORTED_LANGS.map((l) => {
          const href = `${BASE_URL}${localizePath(p.basePath, l)}`;
          return `<xhtml:link rel="alternate" hreflang="${l}" href="${escapeXml(href)}" />`;
        }).join('') +
        `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${BASE_URL}${localizePath(p.basePath, 'en')}`)}" />`
      : '';
    return `  <url><loc>${escapeXml(loc)}</loc>${alternates}<lastmod>${today}</lastmod><priority>${p.priority.toFixed(1)}</priority></url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;

const target = resolve(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(target, xml);
try {
  const distTarget = resolve(process.cwd(), 'dist', 'sitemap.xml');
  writeFileSync(distTarget, xml);
} catch {
  // dist may not exist prior to vite build
}

const places = pages.filter((p) => p.basePath.startsWith('/place/')).length;
const things = pages.filter((p) => p.basePath.startsWith('/things/')).length;
const browse = pages.filter((p) => p.basePath.startsWith('/finder/')).length;
const homeAndFinder = pages.length - places - things - browse;
console.log(
  `[sitemap] ${pages.length} URLs -> ${target}\n` +
  `[sitemap]   home+finder: ${homeAndFinder} | browse+intents: ${browse} | places: ${places} | things: ${things}`
);
