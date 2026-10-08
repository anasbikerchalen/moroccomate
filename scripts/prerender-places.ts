/**
 * =========================================================================
 * PRERENDER — generates a real HTML file for every listing page
 * =========================================================================
 * The site is a JavaScript app, and search engines read JavaScript slowly
 * and unreliably at scale. This script runs AFTER `vite build` and writes
 * one static HTML file per place page and things page, containing that
 * place's own title, description, canonical URL, social preview tags and
 * structured data — readable by Google instantly, without running JS.
 *
 * Human visitors still get the full interactive app (the same shell loads
 * and React Router shows the right page). Static files take precedence
 * over the SPA fallback on Vercel, so each URL serves its prerendered file.
 *
 * Manual run (after a build):  npm run prerender
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { collectAllPages, BASE_URL } from './page-data';

const dist = resolve(process.cwd(), 'dist');
const template = readFileSync(join(dist, 'index.html'), 'utf8');

// Strip the generic head tags — each page gets its own
const stripped = template
  .replace(/<title>[\s\S]*?<\/title>/i, '')
  .replace(/<meta\s+name="description"[^>]*>/i, '')
  .replace(/<link\s+rel="canonical"[^>]*>/i, '')
  .replace(/<meta\s+property="og:[^>]*>/gi, '')
  .replace(/<meta\s+name="twitter:[^>]*>/gi, '');

const esc = (s: string) =>
  String(s).replace(/&/g, '\u0026amp;').replace(/</g, '\u0026lt;').replace(/>/g, '\u0026gt;').replace(/"/g, '\u0026quot;');
const jsonEsc = (s: string) => s.replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');

const pages = collectAllPages().filter((p) => p.path !== '/'); // '/' IS the template itself

let count = 0;
for (const page of pages) {
  const url = `${BASE_URL}${page.path}`;

  const head = [
    `<title>${esc(page.title)} | Moroccan Mate</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:site_name" content="Moroccan Mate" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:image" content="${esc(page.image)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${esc(page.image)}" />`,
    ...(page.jsonLd
      ? [`<script type="application/ld+json">${jsonEsc(JSON.stringify(page.jsonLd))}</script>`]
      : []),
    ...(page.faq && page.faq.length > 0
      ? [
          `<script type="application/ld+json">${jsonEsc(
            JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: page.faq.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.answer,
                },
              })),
            })
          )}</script>`,
        ]
      : []),
  ].join('\n    ');

  // Crawlable noscript fallback: real text + a real link into the app
  let browseUrl: string | null = null;
  if (page.path.startsWith('/place/')) {
    const parts = page.path.split('/'); // ['', 'place', city, category, slug]
    browseUrl = `/finder/${parts[2]}/${parts[3]}`;
  } else if (page.path.startsWith('/things/')) {
    const parts = page.path.split('/'); // ['', 'things', city, slug]
    browseUrl = `/finder/${parts[2]}/things-to-do`;
  }
  const faqHtml = page.faq && page.faq.length > 0
    ? `<div style="margin-top:24px;border-top:1px solid #ddd;padding-top:16px;"><h2>Frequently Asked Questions</h2>${page.faq.map(f => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`).join('')}</div>`
    : '';

  const noscript =
    `<noscript><div style="font-family:Georgia,serif;max-width:720px;margin:48px auto;padding:0 24px;">` +
    `<h1>${esc(page.h1)}</h1>` +
    `<p>${esc(page.description)}</p>` +
    faqHtml +
    (browseUrl ? `<p><a href="${esc(browseUrl)}">Browse more places in Morocco</a></p>` : '') +
    `<p><a href="/">Moroccan Mate</a></p>` +
    `</div></noscript>`;

  const html = stripped
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('</body>', `${noscript}\n</body>`);

  const file = join(dist, page.path.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  count++;
}

console.log(`[prerender] wrote ${count} pre-rendered pages into dist/`);
