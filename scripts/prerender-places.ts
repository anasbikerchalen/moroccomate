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
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'fs';
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

const pages = collectAllPages();

let count = 0;
for (const page of pages) {
  const url = `${BASE_URL}${page.path === '/' ? '/' : page.path}`;

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
  } else if (page.path.startsWith('/finder/')) {
    const parts = page.path.split('/'); // ['', 'finder', city, category, slug?]
    browseUrl = parts[4] ? `/finder/${parts[2]}/${parts[3]}` : `/finder`;
  }
  const faqHtml = page.faq && page.faq.length > 0
    ? `<div style="margin-top:24px;border-top:1px solid #ddd;padding-top:16px;"><h2>Frequently Asked Questions</h2>${page.faq.map(f => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`).join('')}</div>`
    : '';

  let preContent = '';
  if (page.meta?.matchedPlaces && page.meta.matchedPlaces.length > 0) {
    const itemsHtml = page.meta.matchedPlaces.map(p =>
      `<li style="margin-bottom:16px;padding:14px;border:1px solid #e9e1d4;border-radius:12px;background:#fff;">` +
      `<h3 style="margin:0 0 4px;font-size:18px;"><a href="${esc(p.url)}" style="color:#173042;text-decoration:none;">${esc(p.name)}</a></h3>` +
      `<p style="margin:0;font-size:14px;color:#66757D;">${p.neighborhood ? esc(p.neighborhood) + ' · ' : ''}${p.rating ? '★ ' + p.rating : ''}${p.price ? ' · From ' + p.price + ' MAD/night' : ''}</p>` +
      `<p style="margin:8px 0 0;"><a href="${esc(p.url)}" style="color:#C9A84C;font-weight:bold;font-size:13px;">View place details &rarr;</a></p>` +
      `</li>`
    ).join('');

    preContent =
      `<div style="max-width:840px;margin:32px auto;padding:0 20px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<nav style="font-size:12px;color:#71685F;margin-bottom:16px;">` +
      `<a href="/" style="color:#71685F;">Home</a> / <a href="${esc(browseUrl || '/finder')}" style="color:#71685F;">${esc(page.meta.city || 'Morocco')}</a> / <span>${esc(page.h1)}</span>` +
      `</nav>` +
      `<h1 style="font-size:32px;color:#173042;margin:0 0 12px;line-height:1.2;">${esc(page.h1)}</h1>` +
      `<p style="font-size:16px;line-height:1.5;color:#555;margin:0 0 24px;">${esc(page.description)}</p>` +
      `<h2 style="font-size:20px;color:#173042;margin:24px 0 16px;">Curated Recommendations in ${esc(page.meta.city || 'Morocco')}</h2>` +
      `<ul style="list-style:none;padding:0;margin:0;">${itemsHtml}</ul>` +
      `<div style="margin-top:32px;padding-top:20px;border-top:1px solid #e9e1d4;font-size:13px;">` +
      `<a href="${esc(browseUrl || '/finder')}" style="color:#C9A84C;font-weight:bold;margin-right:16px;">Explore more in ${esc(page.meta.city || 'Morocco')}</a>` +
      `<a href="/" style="color:#71685F;">Moroccan Mate Home</a>` +
      `</div>` +
      `</div>`;
  } else if (page.path.startsWith('/place/')) {
    preContent =
      `<div style="max-width:840px;margin:32px auto;padding:0 20px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<nav style="font-size:12px;color:#71685F;margin-bottom:16px;">` +
      `<a href="/" style="color:#71685F;">Home</a> / <a href="${esc(browseUrl || '/finder')}" style="color:#71685F;">${esc(page.meta?.category || 'Places')} in ${esc(page.meta?.city || 'Morocco')}</a> / <span>${esc(page.h1)}</span>` +
      `</nav>` +
      `<h1 style="font-size:32px;color:#173042;margin:0 0 8px;line-height:1.2;">${esc(page.h1)}</h1>` +
      `<p style="font-size:14px;color:#8C7A6B;margin:0 0 16px;">${esc(page.meta?.category || 'Place')} · ${esc(page.meta?.neighborhood || page.meta?.city || 'Morocco')}${page.meta?.rating ? ' · ★ ' + page.meta.rating : ''}${page.meta?.price ? ' · ' + page.meta.price + ' MAD/night' : ''}</p>` +
      `<p style="font-size:16px;line-height:1.6;color:#444;margin:0 0 24px;">${esc(page.description)}</p>` +
      (page.meta?.address ? `<p style="font-size:14px;color:#666;"><strong>Address:</strong> ${esc(page.meta.address)}</p>` : '') +
      faqHtml +
      `<div style="margin-top:32px;padding-top:20px;border-top:1px solid #e9e1d4;font-size:13px;">` +
      `<a href="${esc(browseUrl || '/finder')}" style="color:#C9A84C;font-weight:bold;margin-right:16px;">More ${esc(page.meta?.category || 'places')} in ${esc(page.meta?.city || 'Morocco')}</a>` +
      `<a href="/" style="color:#71685F;">Moroccan Mate Home</a>` +
      `</div>` +
      `</div>`;
  } else if (page.path === '/') {
    preContent =
      `<div style="max-width:840px;margin:32px auto;padding:0 20px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<h1 style="font-size:36px;color:#173042;margin:0 0 12px;line-height:1.2;">Moroccan Mate — Eat, Sleep, Things & Shopping</h1>` +
      `<p style="font-size:18px;line-height:1.5;color:#555;margin:0 0 24px;">Discover personalized, authentic recommendations across Morocco. Pick your destination city, answer a short quiz, and explore handpicked places to eat, stays, activities, and local shops.</p>` +
      `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin:32px 0;">` +
      `<div style="padding:16px;border:1px solid #e9e1d4;border-radius:12px;"><h3 style="margin:0 0 8px;color:#C2613C;">Where to Eat</h3><p style="margin:0;font-size:14px;color:#666;">Authentic Moroccan cuisines, rooftop dining, and street food gems.</p></div>` +
      `<div style="padding:16px;border:1px solid #e9e1d4;border-radius:12px;"><h3 style="margin:0 0 8px;color:#C2613C;">Where to Sleep</h3><p style="margin:0;font-size:14px;color:#666;">Charming riads, boutique hotels, kasbahs, and desert camps.</p></div>` +
      `<div style="padding:16px;border:1px solid #e9e1d4;border-radius:12px;"><h3 style="margin:0 0 8px;color:#C2613C;">Things to Do</h3><p style="margin:0;font-size:14px;color:#666;">Guided tours, mountain treks, desert safaris, and hammams.</p></div>` +
      `<div style="padding:16px;border:1px solid #e9e1d4;border-radius:12px;"><h3 style="margin:0 0 8px;color:#C2613C;">Shopping</h3><p style="margin:0;font-size:14px;color:#666;">Artisan cooperatives, spices, carpets, ceramics, and souvenirs.</p></div>` +
      `</div>` +
      `<div style="margin-top:32px;padding-top:20px;border-top:1px solid #e9e1d4;font-size:14px;">` +
      `<a href="/finder" style="color:#C9A84C;font-weight:bold;margin-right:16px;">Launch Finder</a>` +
      `<a href="/finder/marrakech/food" style="color:#71685F;margin-right:16px;">Marrakech Food</a>` +
      `<a href="/finder/fes/sleep" style="color:#71685F;">Fès Stays</a>` +
      `</div>` +
      `</div>`;
  } else {
    preContent =
      `<div style="max-width:840px;margin:32px auto;padding:0 20px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<h1 style="font-size:32px;color:#173042;margin:0 0 12px;line-height:1.2;">${esc(page.h1)}</h1>` +
      `<p style="font-size:16px;line-height:1.5;color:#555;margin:0 0 24px;">${esc(page.description)}</p>` +
      faqHtml +
      `<div style="margin-top:32px;padding-top:20px;border-top:1px solid #e9e1d4;font-size:13px;">` +
      `<a href="${esc(browseUrl || '/finder')}" style="color:#C9A84C;font-weight:bold;margin-right:16px;">Browse Morocco Guide</a>` +
      `<a href="/" style="color:#71685F;">Moroccan Mate Home</a>` +
      `</div>` +
      `</div>`;
  }

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
    .replace('<div id="root" style="height: 100%;"></div>', `<div id="root" style="height: 100%;">${preContent}</div>`)
    .replace('</body>', `${noscript}\n</body>`);

  const file = join(dist, page.path.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  count++;
}

console.log(`[prerender] wrote ${count} pre-rendered pages into dist/`);

// Ensure robots.txt and sitemap.xml are synced to dist
try {
  copyFileSync(resolve(process.cwd(), 'public', 'robots.txt'), resolve(dist, 'robots.txt'));
  copyFileSync(resolve(process.cwd(), 'public', 'sitemap.xml'), resolve(dist, 'sitemap.xml'));
} catch (e) {
  console.warn('[prerender] warning syncing robots/sitemap:', e);
}
