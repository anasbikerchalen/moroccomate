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

const today = new Date().toISOString().slice(0, 10);
const pages = collectAllPages();

const escapeXml = (s: string) =>
  s.replace(/&/g, '\u0026amp;').replace(/</g, '\u0026lt;').replace(/>/g, '\u0026gt;').replace(/"/g, '\u0026quot;');

const urls = pages
  .map(
    (p) =>
      `  <url><loc>${escapeXml(`${BASE_URL}${p.path}`)}</loc><lastmod>${today}</lastmod><priority>${p.priority.toFixed(1)}</priority></url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const target = resolve(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(target, xml);

const places = pages.filter((p) => p.path.startsWith('/place/')).length;
const things = pages.filter((p) => p.path.startsWith('/things/')).length;
const browse = pages.filter((p) => p.path.startsWith('/finder/')).length;
console.log(
  `[sitemap] ${pages.length} URLs -> ${target}\n` +
  `[sitemap]   home+finder: 2 | browse: ${browse} | places: ${places} | things: ${things}`
);
