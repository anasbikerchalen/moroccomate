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
import { SUPPORTED_LANGS, LANG_META, localizePath } from '../src/utils/localeRouting';
import { HOME_SEO_I18N, PRERENDER_UI_I18N } from '../src/data/seo/i18nSeo';

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
  const lang = page.lang || 'en';
  const dir = LANG_META[lang].dir;
  const ui = PRERENDER_UI_I18N[lang];
  const homeUrl = localizePath('/', lang);
  const finderUrl = localizePath('/finder', lang);
  const url = `${BASE_URL}${page.path === '/' ? '/' : page.path}`;

  const hreflangLinks = page.hasLocalizedRoutes
    ? [
        ...SUPPORTED_LANGS.map(
          (l) => `<link rel="alternate" hreflang="${l}" href="${esc(`${BASE_URL}${localizePath(page.basePath, l)}`)}" />`
        ),
        `<link rel="alternate" hreflang="x-default" href="${esc(`${BASE_URL}${localizePath(page.basePath, 'en')}`)}" />`,
      ]
    : [];

  const ogLocaleAlternates = SUPPORTED_LANGS.filter((l) => l !== lang).map(
    (l) => `<meta property="og:locale:alternate" content="${LANG_META[l].ogLocale}" />`
  );

  const head = [
    `<title>${esc(page.title)} | Moroccan Mate</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    ...hreflangLinks,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:site_name" content="Moroccan Mate" />`,
    `<meta property="og:locale" content="${LANG_META[lang].ogLocale}" />`,
    ...ogLocaleAlternates,
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
  let rawBrowseUrl: string | null = null;
  if (page.basePath.startsWith('/place/')) {
    const parts = page.basePath.split('/'); // ['', 'place', city, category, slug]
    rawBrowseUrl = `/finder/${parts[2]}/${parts[3]}`;
  } else if (page.basePath.startsWith('/things/')) {
    const parts = page.basePath.split('/'); // ['', 'things', city, slug]
    rawBrowseUrl = `/finder/${parts[2]}/things-to-do`;
  } else if (page.basePath.startsWith('/finder/')) {
    const parts = page.basePath.split('/'); // ['', 'finder', city, category, slug?]
    rawBrowseUrl = parts[4] ? `/finder/${parts[2]}/${parts[3]}` : `/finder`;
  }
  const browseUrl = rawBrowseUrl ? localizePath(rawBrowseUrl, lang) : null;
  const faqHtml = page.faq && page.faq.length > 0
    ? `<div style="margin-top:24px;border-top:1px solid #ddd;padding-top:16px;"><h2>Frequently Asked Questions</h2>${page.faq.map(f => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`).join('')}</div>`
    : '';

  let preContent = '';
  if (page.meta?.matchedPlaces && page.meta.matchedPlaces.length > 0) {
    const itemsHtml = page.meta.matchedPlaces.map(p =>
      `<li style="margin-bottom:16px;padding:14px;border:1px solid #e9e1d4;border-radius:12px;background:#fff;">` +
      `<h3 style="margin:0 0 4px;font-size:18px;"><a href="${esc(p.url)}" style="color:#173042;text-decoration:none;">${esc(p.name)}</a></h3>` +
      `<p style="margin:0;font-size:14px;color:#66757D;">${p.neighborhood ? esc(p.neighborhood) + ' · ' : ''}${p.rating ? '★ ' + p.rating : ''}${p.price ? ' · ' + esc(ui.fromPrice(p.price)) : ''}</p>` +
      `<p style="margin:8px 0 0;"><a href="${esc(p.url)}" style="color:#C9A84C;font-weight:bold;font-size:13px;">${esc(ui.viewDetails)} &rarr;</a></p>` +
      `</li>`
    ).join('');

    preContent =
      `<div dir="${dir}" style="max-width:840px;margin:32px auto;padding:0 20px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<nav style="font-size:12px;color:#71685F;margin-bottom:16px;">` +
      `<a href="${esc(homeUrl)}" style="color:#71685F;">${esc(ui.home)}</a> / <a href="${esc(browseUrl || finderUrl)}" style="color:#71685F;">${esc(page.meta.city || 'Morocco')}</a> / <span>${esc(page.h1)}</span>` +
      `</nav>` +
      `<h1 style="font-size:32px;color:#173042;margin:0 0 12px;line-height:1.2;">${esc(page.h1)}</h1>` +
      `<p style="font-size:16px;line-height:1.5;color:#555;margin:0 0 24px;">${esc(page.description)}</p>` +
      `<ul style="list-style:none;padding:0;margin:0;">${itemsHtml}</ul>` +
      `<div style="margin-top:32px;padding-top:20px;border-top:1px solid #e9e1d4;font-size:13px;">` +
      `<a href="${esc(browseUrl || finderUrl)}" style="color:#C9A84C;font-weight:bold;margin-right:16px;">${esc(ui.exploreMoreIn)} ${esc(page.meta.city || 'Morocco')}</a>` +
      `<a href="${esc(homeUrl)}" style="color:#71685F;">Moroccan Mate</a>` +
      `</div>` +
      `</div>`;
  } else if (page.path.startsWith('/place/')) {
    const m = page.meta || {};
    const amenitiesHtml = m.amenities && m.amenities.length > 0
      ? `<div style="margin:20px 0;"><h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#71685F;margin-bottom:8px;">Amenities & Features</h3><div style="display:flex;flex-wrap:wrap;gap:8px;">${m.amenities.map(a => `<span style="display:inline-block;padding:4px 10px;border-radius:20px;background:#FAF3EA;color:#8A6D1F;font-size:12px;border:1px solid #E8DAAA;">${esc(a)}</span>`).join('')}</div></div>`
      : '';

    const cuisinesHtml = m.cuisines && m.cuisines.length > 0
      ? `<div style="margin:20px 0;"><h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#71685F;margin-bottom:8px;">Cuisine & Vibe</h3><div style="display:flex;flex-wrap:wrap;gap:8px;">${m.cuisines.map(c => `<span style="display:inline-block;padding:4px 10px;border-radius:20px;background:#FAF3EA;color:#8A6D1F;font-size:12px;border:1px solid #E8DAAA;">${esc(c)}</span>`).join('')}</div></div>`
      : '';

    const bestDishesHtml = m.bestDishes && m.bestDishes.length > 0
      ? `<div style="margin:20px 0;"><h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#71685F;margin-bottom:8px;">Signature Dishes & Specialties</h3><div style="display:flex;flex-wrap:wrap;gap:8px;">${m.bestDishes.map(d => `<span style="display:inline-block;padding:4px 10px;border-radius:20px;background:#F5EDE4;color:#29231F;font-size:12px;border:1px solid #E2D4C2;">${esc(d)}</span>`).join('')}</div></div>`
      : '';

    const tipHtml = m.tip
      ? `<div style="margin:20px 0;padding:14px 18px;border-radius:12px;background:#FFFDF9;border-left:4px solid #C9A84C;border-top:1px solid #E9D8C8;border-right:1px solid #E9D8C8;border-bottom:1px solid #E9D8C8;"><h4 style="margin:0 0 4px;font-size:13px;font-weight:700;color:#8A6D1F;text-transform:uppercase;">Local Insider Tip</h4><p style="margin:0;font-size:14px;color:#29231F;line-height:1.5;">${esc(m.tip)}</p></div>`
      : '';

    preContent =
      `<div style="max-width:880px;margin:32px auto;padding:0 24px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<nav style="font-size:12px;color:#71685F;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:6px;align-items:center;">` +
      `<a href="/" style="color:#71685F;text-decoration:none;">Home</a> <span>/</span> ` +
      `<a href="${esc(browseUrl || '/finder')}" style="color:#71685F;text-decoration:none;">${esc(m.category || 'Places')} in ${esc(m.city || 'Morocco')}</a> <span>/</span> ` +
      `<span style="color:#29231F;font-weight:600;">${esc(page.h1)}</span>` +
      `</nav>` +
      `<header style="margin-bottom:20px;">` +
      `<span style="display:inline-block;padding:3px 10px;border-radius:12px;background:#FAF3EA;color:#C85A32;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">${esc(m.category || 'Spot')} · ${esc(m.city || 'Morocco')}</span>` +
      `<h1 style="font-size:32px;font-weight:800;color:#173042;margin:4px 0 10px;line-height:1.2;">${esc(page.h1)}</h1>` +
      `<div style="font-size:14px;color:#71685F;display:flex;flex-wrap:wrap;gap:12px;align-items:center;">` +
      (m.neighborhood ? `<span>📍 ${esc(m.neighborhood)}, ${esc(m.city || 'Morocco')}</span>` : '') +
      (m.rating ? `<span style="font-weight:700;color:#B45309;">★ ${m.rating}${m.reviewCount ? ' (' + m.reviewCount + ' reviews)' : ''}</span>` : '') +
      (m.price ? `<span style="font-weight:700;color:#29231F;">💰 ${esc(m.category === 'Where to Sleep' ? 'From ' + m.price + ' MAD/night' : 'Avg ' + m.price + ' MAD/person')}</span>` : '') +
      (m.openingHours ? `<span>🕒 ${esc(m.openingHours)}</span>` : '') +
      `</div>` +
      `</header>` +
      `<section style="margin:24px 0;font-size:16px;line-height:1.65;color:#374151;border-top:1px solid #E9D8C8;padding-top:20px;">` +
      `<p style="margin:0 0 16px;">${esc(page.description)}</p>` +
      (m.address ? `<p style="font-size:14px;color:#66757D;margin:0 0 16px;"><strong>Address:</strong> ${esc(m.address)}</p>` : '') +
      `</section>` +
      cuisinesHtml +
      bestDishesHtml +
      amenitiesHtml +
      tipHtml +
      faqHtml +
      `<section style="margin-top:36px;padding-top:24px;border-top:1px solid #E9D8C8;">` +
      `<h3 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#71685F;margin-bottom:12px;">Explore More in ${esc(m.city || 'Morocco')}</h3>` +
      `<div style="display:flex;flex-wrap:wrap;gap:10px;">` +
      `<a href="/finder/${esc((m.city || 'marrakech').toLowerCase().replace(/\s+/g, '_'))}/food" style="padding:6px 14px;border-radius:20px;background:#FAF7F2;border:1px solid #E9D8C8;color:#29231F;font-size:12px;font-weight:600;text-decoration:none;">🍽️ Food in ${esc(m.city || 'Morocco')}</a>` +
      `<a href="/finder/${esc((m.city || 'marrakech').toLowerCase().replace(/\s+/g, '_'))}/sleep" style="padding:6px 14px;border-radius:20px;background:#FAF7F2;border:1px solid #E9D8C8;color:#29231F;font-size:12px;font-weight:600;text-decoration:none;">🛏️ Stays in ${esc(m.city || 'Morocco')}</a>` +
      `<a href="/finder/${esc((m.city || 'marrakech').toLowerCase().replace(/\s+/g, '_'))}/things-to-do" style="padding:6px 14px;border-radius:20px;background:#FAF7F2;border:1px solid #E9D8C8;color:#29231F;font-size:12px;font-weight:600;text-decoration:none;">✨ Things to Do in ${esc(m.city || 'Morocco')}</a>` +
      `<a href="/finder/${esc((m.city || 'marrakech').toLowerCase().replace(/\s+/g, '_'))}/shopping" style="padding:6px 14px;border-radius:20px;background:#FAF7F2;border:1px solid #E9D8C8;color:#29231F;font-size:12px;font-weight:600;text-decoration:none;">🛍️ Shopping in ${esc(m.city || 'Morocco')}</a>` +
      `</div>` +
      `</section>` +
      `<footer style="margin-top:36px;padding-top:20px;border-top:1px solid #E9D8C8;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#71685F;">` +
      `<a href="/" style="color:#C9A84C;font-weight:700;text-decoration:none;">Moroccan Mate Home</a>` +
      `<span>© ${new Date().getFullYear()} Moroccan Mate Guide</span>` +
      `</footer>` +
      `</div>`;
  } else if (page.path.startsWith('/things/')) {
    const m = page.meta || {};
    const citySlug = esc((m.citySlug || m.city || 'morocco').toLowerCase().replace(/\s+/g, '_'));
    const highlightsHtml = m.highlights && m.highlights.length > 0
      ? `<div style="margin:24px 0;"><h3 style="font-size:16px;font-weight:700;color:#173042;margin-bottom:12px;">Highlights & Why Visit</h3><ul style="list-style:disc;padding-left:20px;color:#374151;line-height:1.6;">${m.highlights.map(h => `<li style="margin-bottom:6px;">${esc(h)}</li>`).join('')}</ul></div>`
      : '';

    const includedHtml = m.includedServices && m.includedServices.length > 0
      ? `<div style="margin:24px 0;"><h3 style="font-size:16px;font-weight:700;color:#173042;margin-bottom:12px;">What is Included</h3><ul style="list-style:none;padding-left:0;color:#374151;line-height:1.6;">${m.includedServices.map(inc => `<li style="margin-bottom:6px;">✓ ${esc(inc)}</li>`).join('')}</ul></div>`
      : '';

    const requirementsHtml = m.requirements && m.requirements.length > 0
      ? `<div style="margin:20px 0;padding:14px 18px;border-radius:12px;background:#FFFDF9;border-left:4px solid #C9A84C;border:1px solid #E9D8C8;"><h4 style="margin:0 0 4px;font-size:13px;font-weight:700;color:#8A6D1F;text-transform:uppercase;">What to Know / Bring</h4><p style="margin:0;font-size:14px;color:#29231F;line-height:1.5;">${m.requirements.map(r => esc(r)).join(' • ')}</p></div>`
      : '';

    preContent =
      `<div style="max-width:880px;margin:32px auto;padding:0 24px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<nav style="font-size:12px;color:#71685F;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:6px;align-items:center;">` +
      `<a href="/" style="color:#71685F;text-decoration:none;">Home</a> <span>/</span> ` +
      `<a href="${esc(browseUrl || '/finder')}" style="color:#71685F;text-decoration:none;">Things to Do in ${esc(m.city || 'Morocco')}</a> <span>/</span> ` +
      `<span style="color:#29231F;font-weight:600;">${esc(page.h1)}</span>` +
      `</nav>` +
      `<header style="margin-bottom:20px;">` +
      `<span style="display:inline-block;padding:3px 10px;border-radius:12px;background:#FAF3EA;color:#C85A32;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Experience · ${esc(m.city || 'Morocco')}</span>` +
      `<h1 style="font-size:32px;font-weight:800;color:#173042;margin:4px 0 10px;line-height:1.2;">${esc(page.h1)}</h1>` +
      `<div style="font-size:14px;color:#71685F;display:flex;flex-wrap:wrap;gap:12px;align-items:center;">` +
      (m.neighborhood ? `<span>📍 ${esc(m.neighborhood)}, ${esc(m.city || 'Morocco')}</span>` : '') +
      (m.price ? `<span style="font-weight:700;color:#29231F;">💰 ${m.price > 0 ? m.price + ' MAD / person' : 'Free Entry'}</span>` : '') +
      (m.durationMinutes ? `<span>⏱️ ~${m.durationMinutes} min</span>` : '') +
      (m.openingHours ? `<span>🕒 ${esc(m.openingHours)}</span>` : '') +
      `</div>` +
      `</header>` +
      `<section style="margin:24px 0;font-size:16px;line-height:1.65;color:#374151;border-top:1px solid #E9D8C8;padding-top:20px;">` +
      `<p style="margin:0 0 16px;font-size:16px;line-height:1.6;">${esc(m.fullDescription || page.description)}</p>` +
      (m.address ? `<p style="font-size:14px;color:#66757D;margin:0 0 16px;"><strong>Location:</strong> ${esc(m.address)}</p>` : '') +
      `</section>` +
      highlightsHtml +
      includedHtml +
      requirementsHtml +
      faqHtml +
      `<section style="margin-top:36px;padding-top:24px;border-top:1px solid #E9D8C8;">` +
      `<h3 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#71685F;margin-bottom:12px;">Explore More in ${esc(m.city || 'Morocco')}</h3>` +
      `<div style="display:flex;flex-wrap:wrap;gap:10px;">` +
      `<a href="/finder/${citySlug}/things-to-do" style="padding:6px 14px;border-radius:20px;background:#FAF7F2;border:1px solid #E9D8C8;color:#29231F;font-size:12px;font-weight:600;text-decoration:none;">✨ Things to Do in ${esc(m.city || 'Morocco')}</a>` +
      `<a href="/finder/${citySlug}/food" style="padding:6px 14px;border-radius:20px;background:#FAF7F2;border:1px solid #E9D8C8;color:#29231F;font-size:12px;font-weight:600;text-decoration:none;">🍽️ Food in ${esc(m.city || 'Morocco')}</a>` +
      `<a href="/finder/${citySlug}/sleep" style="padding:6px 14px;border-radius:20px;background:#FAF7F2;border:1px solid #E9D8C8;color:#29231F;font-size:12px;font-weight:600;text-decoration:none;">🛏️ Stays in ${esc(m.city || 'Morocco')}</a>` +
      `</div>` +
      `</section>` +
      `<footer style="margin-top:36px;padding-top:20px;border-top:1px solid #E9D8C8;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#71685F;">` +
      `<a href="/" style="color:#C9A84C;font-weight:700;text-decoration:none;">Moroccan Mate Home</a>` +
      `<span>© ${new Date().getFullYear()} Moroccan Mate Guide</span>` +
      `</footer>` +
      `</div>`;
  } else if (page.basePath === '/') {
    const homeSeo = HOME_SEO_I18N[lang];
    preContent =
      `<div dir="${dir}" style="max-width:840px;margin:32px auto;padding:0 20px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<h1 style="font-size:36px;color:#173042;margin:0 0 12px;line-height:1.2;">${esc(homeSeo.h1)}</h1>` +
      `<p style="font-size:18px;line-height:1.5;color:#555;margin:0 0 24px;">${esc(homeSeo.heroSubtitle)}</p>` +
      `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin:32px 0;">` +
      `<div style="padding:16px;border:1px solid #e9e1d4;border-radius:12px;"><h3 style="margin:0 0 8px;color:#C2613C;">${esc(ui.whereToEat)}</h3><p style="margin:0;font-size:14px;color:#666;">${esc(ui.whereToEatDesc)}</p></div>` +
      `<div style="padding:16px;border:1px solid #e9e1d4;border-radius:12px;"><h3 style="margin:0 0 8px;color:#C2613C;">${esc(ui.whereToStay)}</h3><p style="margin:0;font-size:14px;color:#666;">${esc(ui.whereToStayDesc)}</p></div>` +
      `<div style="padding:16px;border:1px solid #e9e1d4;border-radius:12px;"><h3 style="margin:0 0 8px;color:#C2613C;">${esc(ui.thingsToDo)}</h3><p style="margin:0;font-size:14px;color:#666;">${esc(ui.thingsToDoDesc)}</p></div>` +
      `<div style="padding:16px;border:1px solid #e9e1d4;border-radius:12px;"><h3 style="margin:0 0 8px;color:#C2613C;">${esc(ui.shopping)}</h3><p style="margin:0;font-size:14px;color:#666;">${esc(ui.shoppingDesc)}</p></div>` +
      `</div>` +
      `<div style="margin-top:32px;padding-top:20px;border-top:1px solid #e9e1d4;font-size:14px;">` +
      `<a href="${esc(finderUrl)}" style="color:#C9A84C;font-weight:bold;margin-right:16px;">${esc(ui.launchFinder)}</a>` +
      `<a href="${esc(localizePath('/finder/marrakech/food', lang))}" style="color:#71685F;margin-right:16px;">Marrakech</a>` +
      `<a href="${esc(localizePath('/finder/fes/sleep', lang))}" style="color:#71685F;">Fès</a>` +
      `</div>` +
      `</div>`;
  } else {
    preContent =
      `<div dir="${dir}" style="max-width:840px;margin:32px auto;padding:0 20px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<h1 style="font-size:32px;color:#173042;margin:0 0 12px;line-height:1.2;">${esc(page.h1)}</h1>` +
      `<p style="font-size:16px;line-height:1.5;color:#555;margin:0 0 24px;">${esc(page.description)}</p>` +
      faqHtml +
      `<div style="margin-top:32px;padding-top:20px;border-top:1px solid #e9e1d4;font-size:13px;">` +
      `<a href="${esc(browseUrl || finderUrl)}" style="color:#C9A84C;font-weight:bold;margin-right:16px;">${esc(ui.launchFinder)}</a>` +
      `<a href="${esc(homeUrl)}" style="color:#71685F;">${esc(ui.home)}</a>` +
      `</div>` +
      `</div>`;
  }

  // Inject real content directly inside #root so Googlebot Chromium immediately parses it on first load
  let html = stripped.replace(/<html\s+lang="[^"]*"/i, `<html lang="${lang}" dir="${dir}"`);
  const rootMatch = /<div id="root"[^>]*>[\s\S]*?<\/div>/i;
  if (rootMatch.test(html)) {
    html = html.replace(rootMatch, `<div id="root" style="min-height: 100%;">${preContent}</div>`);
  } else {
    html = html.replace('<body>', `<body>\n<div id="root">${preContent}</div>`);
  }

  html = html.replace('</head>', `    ${head}\n  </head>`);

  const file = join(dist, page.path.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);

  // Flat file for Vercel cleanUrls (e.g. /place/marrakech/food/al-fassia -> /place/marrakech/food/al-fassia.html)
  if (page.path !== '/') {
    const flatFile = join(dist, `${page.path.replace(/^\//, '')}.html`);
    mkdirSync(dirname(flatFile), { recursive: true });
    writeFileSync(flatFile, html);
  }
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
