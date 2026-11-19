/**
 * =========================================================================
 * PRERENDER — generates a real HTML file for every indexable page
 * =========================================================================
 * Runs AFTER `vite build` and writes one static HTML file per URL (across
 * all 5 languages: EN, FR, ES, DE, AR), containing that page's own
 * optimized title (<= 60 chars), meta description (<= 155 chars), canonical,
 * hreflang alternates, social preview tags, JSON-LD structured data, and
 * crawlable semantic HTML body inside #root.
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
  String(s)
    .replace(/&/g, '\u0026amp;')
    .replace(/</g, '\u0026lt;')
    .replace(/>/g, '\u0026gt;')
    .replace(/"/g, '\u0026quot;');
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

  const breadcrumbJsonLd =
    page.breadcrumbs && page.breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: page.breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: b.name,
            item: b.item.startsWith('http') ? b.item : `${BASE_URL}${localizePath(b.item, lang)}`,
          })),
        }
      : null;

  const head = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    ...hreflangLinks,
    `<meta property="og:type" content="${page.basePath === '/' ? 'website' : 'article'}" />`,
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
    ...(breadcrumbJsonLd
      ? [`<script type="application/ld+json">${jsonEsc(JSON.stringify(breadcrumbJsonLd))}</script>`]
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

  let rawBrowseUrl: string | null = null;
  if (page.basePath.startsWith('/place/')) {
    const parts = page.basePath.split('/'); // ['', 'place', city, category, slug, ...]
    rawBrowseUrl = `/finder/${parts[2]}/${parts[3]}`;
  } else if (page.basePath.startsWith('/things/')) {
    const parts = page.basePath.split('/'); // ['', 'things', city, slug]
    rawBrowseUrl = `/finder/${parts[2]}/things-to-do`;
  } else if (page.basePath.startsWith('/finder/')) {
    const parts = page.basePath.split('/'); // ['', 'finder', city, category, slug?]
    rawBrowseUrl = parts[4] ? `/finder/${parts[2]}/${parts[3]}` : `/finder`;
  }
  const browseUrl = rawBrowseUrl ? localizePath(rawBrowseUrl, lang) : null;

  const faqHtml =
    page.faq && page.faq.length > 0
      ? `<div style="margin-top:24px;border-top:1px solid #ddd;padding-top:16px;"><h2>${esc(ui.faqHeading)}</h2>${page.faq
          .map((f) => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`)
          .join('')}</div>`
      : '';

  const citySlug = esc((page.meta?.citySlug || page.meta?.city || 'marrakech').toLowerCase().replace(/\s+/g, '_'));
  const cityLabel = page.meta?.city || 'Morocco';

  const cityExploreLinks =
    `<section style="margin-top:36px;padding-top:24px;border-top:1px solid #E9D8C8;">` +
    `<h3 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#71685F;margin-bottom:12px;">${esc(ui.exploreMoreIn)} ${esc(cityLabel)}</h3>` +
    `<div style="display:flex;flex-wrap:wrap;gap:10px;">` +
    `<a href="${esc(localizePath(`/finder/${citySlug}/food`, lang))}" style="padding:6px 14px;border-radius:20px;background:#FAF7F2;border:1px solid #E9D8C8;color:#29231F;font-size:12px;font-weight:600;text-decoration:none;">🍽️ ${esc(ui.foodInCity(cityLabel))}</a>` +
    `<a href="${esc(localizePath(`/finder/${citySlug}/sleep`, lang))}" style="padding:6px 14px;border-radius:20px;background:#FAF7F2;border:1px solid #E9D8C8;color:#29231F;font-size:12px;font-weight:600;text-decoration:none;">🛏️ ${esc(ui.staysInCity(cityLabel))}</a>` +
    `<a href="${esc(localizePath(`/finder/${citySlug}/things-to-do`, lang))}" style="padding:6px 14px;border-radius:20px;background:#FAF7F2;border:1px solid #E9D8C8;color:#29231F;font-size:12px;font-weight:600;text-decoration:none;">✨ ${esc(ui.thingsInCity(cityLabel))}</a>` +
    `<a href="${esc(localizePath(`/finder/${citySlug}/shopping`, lang))}" style="padding:6px 14px;border-radius:20px;background:#FAF7F2;border:1px solid #E9D8C8;color:#29231F;font-size:12px;font-weight:600;text-decoration:none;">🛍️ ${esc(ui.shoppingInCity(cityLabel))}</a>` +
    `</div>` +
    `</section>`;

  let preContent = '';
  if (page.meta?.matchedPlaces && page.meta.matchedPlaces.length > 0) {
    const itemsHtml = page.meta.matchedPlaces
      .map(
        (p) =>
          `<li style="margin-bottom:16px;padding:14px;border:1px solid #e9e1d4;border-radius:12px;background:#fff;">` +
          `<h3 style="margin:0 0 4px;font-size:18px;"><a href="${esc(p.url)}" style="color:#173042;text-decoration:none;">${esc(p.name)}</a></h3>` +
          `<p style="margin:0;font-size:14px;color:#66757D;">${p.neighborhood ? esc(p.neighborhood) + ' · ' : ''}${p.rating ? '★ ' + p.rating : ''}${p.price ? ' · ' + esc(ui.fromPrice(p.price)) : ''}</p>` +
          `<p style="margin:8px 0 0;"><a href="${esc(p.url)}" style="color:#C9A84C;font-weight:bold;font-size:13px;">${esc(ui.viewDetails)} &rarr;</a></p>` +
          `</li>`
      )
      .join('');

    preContent =
      `<div dir="${dir}" style="max-width:840px;margin:32px auto;padding:0 20px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<nav style="font-size:12px;color:#71685F;margin-bottom:16px;">` +
      `<a href="${esc(homeUrl)}" style="color:#71685F;">${esc(ui.home)}</a> / <a href="${esc(browseUrl || finderUrl)}" style="color:#71685F;">${esc(cityLabel)}</a> / <span>${esc(page.h1)}</span>` +
      `</nav>` +
      `<h1 style="font-size:32px;color:#173042;margin:0 0 12px;line-height:1.2;">${esc(page.h1)}</h1>` +
      `<p style="font-size:16px;line-height:1.5;color:#555;margin:0 0 24px;">${esc(page.description)}</p>` +
      `<ul style="list-style:none;padding:0;margin:0;">${itemsHtml}</ul>` +
      `<div style="margin-top:32px;padding-top:20px;border-top:1px solid #e9e1d4;font-size:13px;">` +
      `<a href="${esc(browseUrl || finderUrl)}" style="color:#C9A84C;font-weight:bold;margin-right:16px;">${esc(ui.exploreMoreIn)} ${esc(cityLabel)}</a>` +
      `<a href="${esc(homeUrl)}" style="color:#71685F;">Moroccan Mate</a>` +
      `</div>` +
      `</div>`;
  } else if (page.basePath.startsWith('/place/') && page.basePath.endsWith('/menu')) {
    const m = page.meta || {};
    const sectionsHtml =
      m.menuSections && m.menuSections.length > 0
        ? m.menuSections
            .map(
              (sec) =>
                `<section style="margin:24px 0;">` +
                `<h2 style="font-size:18px;font-weight:700;color:#173042;margin:0 0 6px;">${esc(sec.title)}</h2>` +
                (sec.description ? `<p style="font-size:13px;color:#71685F;margin:0 0 10px;">${esc(sec.description)}</p>` : '') +
                `<ul style="list-style:none;padding:0;margin:0;border:1px solid #E9D8C8;border-radius:12px;background:#fff;">` +
                sec.items
                  .map(
                    (it) =>
                      `<li style="display:flex;justify-content:space-between;gap:12px;padding:10px 14px;border-bottom:1px solid #F3ECE1;font-size:14px;">` +
                      `<div><span style="font-weight:600;color:#173042;">${esc(it.name)}</span>${it.description ? `<p style="margin:3px 0 0;font-size:12px;color:#66757D;">${esc(it.description)}</p>` : ''}</div>` +
                      `<strong style="color:#8A6D1F;white-space:nowrap;">${it.price > 0 ? `${it.price} MAD` : ''}</strong>` +
                      `</li>`
                  )
                  .join('') +
                `</ul></section>`
            )
            .join('')
        : '';

    const menuPhotosHtml =
      m.menuPhotos && m.menuPhotos.length > 0
        ? `<section style="margin:28px 0;" aria-label="Menu Photos"><h2 style="font-size:18px;font-weight:700;color:#173042;margin:0 0 12px;">Printed Menu Photos (${m.menuPhotos.length})</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;">${m.menuPhotos
            .map(
              (p) =>
                `<figure style="margin:0;border:1px solid #E9D8C8;border-radius:12px;overflow:hidden;background:#fff;">` +
                `<img src="${esc(p.url)}" alt="${esc(p.alt)}"${p.title ? ` title="${esc(p.title)}"` : ''}${p.width ? ` width="${p.width}"` : ''}${p.height ? ` height="${p.height}"` : ''} loading="lazy" style="width:100%;height:auto;display:block;" />` +
                (p.caption ? `<figcaption style="padding:8px 12px;font-size:12px;color:#555;border-top:1px solid #F3ECE1;">${esc(p.caption)}</figcaption>` : '') +
                `</figure>`
            )
            .join('')}</div></section>`
        : '';

    preContent =
      `<div dir="${dir}" style="max-width:880px;margin:32px auto;padding:0 24px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<nav style="font-size:12px;color:#71685F;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:6px;align-items:center;">` +
      `<a href="${esc(homeUrl)}" style="color:#71685F;text-decoration:none;">${esc(ui.home)}</a> <span>/</span> ` +
      `<a href="${esc(browseUrl || finderUrl)}" style="color:#71685F;text-decoration:none;">${esc(m.category || 'Food')} · ${esc(cityLabel)}</a> <span>/</span> ` +
      (m.placeUrl ? `<a href="${esc(m.placeUrl)}" style="color:#71685F;text-decoration:none;">${esc(ui.backToPlaceBtn)}</a> <span>/</span> ` : '') +
      `<span style="color:#29231F;font-weight:600;">${esc(page.h1)}</span>` +
      `</nav>` +
      `<header style="margin-bottom:20px;">` +
      `<span style="display:inline-block;padding:3px 10px;border-radius:12px;background:#FAF3EA;color:#C85A32;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">${esc(ui.menuHeading)} · ${esc(cityLabel)}</span>` +
      `<h1 style="font-size:32px;font-weight:800;color:#173042;margin:4px 0 10px;line-height:1.2;">${esc(page.h1)}</h1>` +
      `<div style="font-size:14px;color:#71685F;display:flex;flex-wrap:wrap;gap:12px;align-items:center;">` +
      (m.neighborhood ? `<span>📍 ${esc(m.neighborhood)}, ${esc(cityLabel)}</span>` : '') +
      (m.rating ? `<span style="font-weight:700;color:#B45309;">★ ${m.rating}${m.reviewCount ? ` (${m.reviewCount} ${esc(ui.reviewsWord)})` : ''}</span>` : '') +
      (m.priceRangeText ? `<span style="font-weight:700;color:#29231F;">💰 ${esc(m.priceRangeText)}</span>` : '') +
      (m.openingHours ? `<span>🕒 ${esc(m.openingHours)}</span>` : '') +
      `</div></header>` +
      `<p style="font-size:16px;line-height:1.65;color:#374151;border-top:1px solid #E9D8C8;padding-top:16px;">${esc(page.description)}</p>` +
      sectionsHtml +
      menuPhotosHtml +
      faqHtml +
      cityExploreLinks +
      `</div>`;
  } else if (page.basePath.startsWith('/place/')) {
    const m = page.meta || {};
    const amenitiesHtml =
      m.amenities && m.amenities.length > 0
        ? `<div style="margin:20px 0;"><h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#71685F;margin-bottom:8px;">${esc(ui.amenitiesHeading)}</h3><div style="display:flex;flex-wrap:wrap;gap:8px;">${m.amenities
            .map((a) => `<span style="display:inline-block;padding:4px 10px;border-radius:20px;background:#FAF3EA;color:#8A6D1F;font-size:12px;border:1px solid #E8DAAA;">${esc(a)}</span>`)
            .join('')}</div></div>`
        : '';

    const cuisinesHtml =
      m.cuisines && m.cuisines.length > 0
        ? `<div style="margin:20px 0;"><h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#71685F;margin-bottom:8px;">${esc(ui.cuisinesHeading)}</h3><div style="display:flex;flex-wrap:wrap;gap:8px;">${m.cuisines
            .map((c) => `<span style="display:inline-block;padding:4px 10px;border-radius:20px;background:#FAF3EA;color:#8A6D1F;font-size:12px;border:1px solid #E8DAAA;">${esc(c)}</span>`)
            .join('')}</div></div>`
        : '';

    const bestDishesHtml =
      m.bestDishes && m.bestDishes.length > 0
        ? `<div style="margin:20px 0;"><h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#71685F;margin-bottom:8px;">${esc(ui.bestDishesHeading)}</h3><div style="display:flex;flex-wrap:wrap;gap:8px;">${m.bestDishes
            .map((d) => `<span style="display:inline-block;padding:4px 10px;border-radius:20px;background:#F5EDE4;color:#29231F;font-size:12px;border:1px solid #E2D4C2;">${esc(d)}</span>`)
            .join('')}</div></div>`
        : '';

    const tipHtml = m.tip
      ? `<div style="margin:20px 0;padding:14px 18px;border-radius:12px;background:#FFFDF9;border:1px solid #E9D8C8;"><h4 style="margin:0 0 4px;font-size:13px;font-weight:700;color:#8A6D1F;text-transform:uppercase;">${esc(ui.localTipHeading)}</h4><p style="margin:0;font-size:14px;color:#29231F;line-height:1.5;">${esc(m.tip)}</p></div>`
      : '';

    const editorialHtml =
      (m.editorialGuide && m.editorialGuide.length > 0) || (m.knowBeforeYouGo && m.knowBeforeYouGo.length > 0)
        ? `<section style="margin:24px 0;padding:20px;border:1px solid #E9D8C8;border-radius:14px;background:#fff;">` +
          `<h2 style="font-size:20px;font-weight:700;color:#173042;margin:0 0 14px;">${esc(ui.editorialHeading)}</h2>` +
          (m.editorialGuide && m.editorialGuide.length > 0
            ? m.editorialGuide
                .map(
                  (sub) =>
                    `<div style="margin-bottom:14px;"><h3 style="font-size:15px;font-weight:700;color:#173042;margin:0 0 4px;">${esc(sub.heading)}</h3><p style="margin:0;font-size:14px;line-height:1.6;color:#374151;">${esc(sub.body)}</p></div>`
                )
                .join('')
            : '') +
          (m.knowBeforeYouGo && m.knowBeforeYouGo.length > 0
            ? `<div style="margin-top:16px;padding-top:14px;border-top:1px solid #EFE6D8;"><h3 style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#8A6D1F;margin:0 0 8px;">${esc(ui.knowBeforeHeading)}</h3><ul style="margin:0;padding-left:18px;font-size:14px;color:#374151;line-height:1.6;">${m.knowBeforeYouGo
                .map((b) => `<li style="margin-bottom:4px;">${esc(b)}</li>`)
                .join('')}</ul></div>`
            : '') +
          `</section>`
        : '';

    const inlineMenuPhotosHtml =
      m.menuPhotos && m.menuPhotos.length > 0
        ? `<section style="margin:24px 0;" aria-label="Menu Photos"><h3 style="font-size:16px;font-weight:700;color:#173042;margin:0 0 10px;">Original Menu Photos (${m.menuPhotos.length})</h3><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;">${m.menuPhotos
            .map(
              (p) =>
                `<figure style="margin:0;border:1px solid #E9D8C8;border-radius:10px;overflow:hidden;background:#fff;">` +
                `<img src="${esc(p.url)}" alt="${esc(p.alt)}"${p.title ? ` title="${esc(p.title)}"` : ''}${p.width ? ` width="${p.width}"` : ''}${p.height ? ` height="${p.height}"` : ''} loading="lazy" style="width:100%;height:auto;display:block;" />` +
                (p.caption ? `<figcaption style="padding:6px 10px;font-size:11px;color:#555;border-top:1px solid #F3ECE1;">${esc(p.caption)}</figcaption>` : '') +
                `</figure>`
            )
            .join('')}</div></section>`
        : '';

    const inlineMenuHtml =
      (m.menuSections && m.menuSections.length > 0) || inlineMenuPhotosHtml
        ? `<section style="margin:28px 0;"><h2 style="font-size:22px;font-weight:700;color:#173042;margin:0 0 12px;">${esc(ui.menuHeading)}</h2>` +
          (m.menuSections || [])
            .map(
              (sec) =>
                `<details open style="margin-bottom:12px;border:1px solid #E9D8C8;border-radius:12px;background:#fff;">` +
                `<summary style="padding:12px 16px;font-size:16px;font-weight:700;color:#173042;cursor:pointer;">${esc(sec.title)}</summary>` +
                (sec.description ? `<p style="margin:0;padding:0 16px 8px;font-size:13px;color:#71685F;">${esc(sec.description)}</p>` : '') +
                `<ul style="list-style:none;padding:0;margin:0;border-top:1px solid #F3ECE1;">` +
                sec.items
                  .map(
                    (it) =>
                      `<li style="display:flex;justify-content:space-between;gap:12px;padding:10px 16px;border-bottom:1px solid #F7F1E8;font-size:14px;">` +
                      `<div><span style="font-weight:600;color:#173042;">${esc(it.name)}</span>${it.description ? `<p style="margin:2px 0 0;font-size:12px;color:#66757D;">${esc(it.description)}</p>` : ''}</div>` +
                      `<strong style="color:#8A6D1F;white-space:nowrap;">${it.price > 0 ? `${it.price} MAD` : ''}</strong>` +
                      `</li>`
                  )
                  .join('') +
                `</ul></details>`
            )
            .join('') +
          inlineMenuPhotosHtml +
          `</section>`
        : '';

    const nearbyHtml =
      m.nearbyDistances && m.nearbyDistances.length > 0
        ? `<section style="margin:24px 0;"><h3 style="font-size:15px;font-weight:700;color:#173042;margin:0 0 10px;">${esc(ui.nearbyHeading)}</h3><ul style="list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;">${m.nearbyDistances
            .map(
              (n) =>
                `<li style="padding:10px 12px;border:1px solid #E9D8C8;border-radius:10px;background:#fff;font-size:13px;">` +
                `<strong style="color:#173042;display:block;">${esc(n.name)}</strong>` +
                `<span style="color:#8A6D1F;font-weight:600;">${esc(n.travelLabel)}${n.distanceText ? ` · ${esc(n.distanceText)}` : ''}</span>` +
                `</li>`
            )
            .join('')}</ul></section>`
        : '';

    const sampleReviewsHtml =
      m.sampleReviews && m.sampleReviews.length > 0
        ? `<section style="margin:24px 0;"><h3 style="font-size:16px;font-weight:700;color:#173042;margin:0 0 10px;">Guest Reviews</h3><div style="display:grid;gap:10px;">${m.sampleReviews
            .map(
              (r) =>
                `<article style="padding:12px 14px;border:1px solid #E9D8C8;border-radius:10px;background:#fff;font-size:13px;">` +
                `<div style="font-weight:700;color:#173042;margin-bottom:4px;">${esc(r.author)} · ★ ${r.rating}</div>` +
                `<p style="margin:0;color:#374151;line-height:1.5;">${esc(r.text)}</p>` +
                `</article>`
            )
            .join('')}</div></section>`
        : '';

    const menuCtaHtml = m.menuUrl
      ? `<p style="margin:16px 0;"><a href="${esc(m.menuUrl)}" style="display:inline-block;padding:10px 18px;border-radius:10px;background:#173042;color:#fff;font-size:13px;font-weight:700;text-decoration:none;">${esc(ui.viewMenuBtn)} &rarr;</a></p>`
      : '';

    const priceLabel = page.basePath.includes('/sleep/')
      ? (m.price ? ui.fromPrice(m.price) : '')
      : (m.priceRangeText || (m.price ? ui.avgPerson(m.price) : ''));

    preContent =
      `<div dir="${dir}" style="max-width:880px;margin:32px auto;padding:0 24px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<nav style="font-size:12px;color:#71685F;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:6px;align-items:center;">` +
      `<a href="${esc(homeUrl)}" style="color:#71685F;text-decoration:none;">${esc(ui.home)}</a> <span>/</span> ` +
      `<a href="${esc(browseUrl || finderUrl)}" style="color:#71685F;text-decoration:none;">${esc(m.category || 'Places')} · ${esc(cityLabel)}</a> <span>/</span> ` +
      `<span style="color:#29231F;font-weight:600;">${esc(page.h1)}</span>` +
      `</nav>` +
      `<header style="margin-bottom:20px;">` +
      `<span style="display:inline-block;padding:3px 10px;border-radius:12px;background:#FAF3EA;color:#C85A32;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">${esc(m.category || 'Spot')} · ${esc(cityLabel)}</span>` +
      `<h1 style="font-size:32px;font-weight:800;color:#173042;margin:4px 0 10px;line-height:1.2;">${esc(page.h1)}</h1>` +
      `<div style="font-size:14px;color:#71685F;display:flex;flex-wrap:wrap;gap:12px;align-items:center;">` +
      (m.neighborhood ? `<span>📍 ${esc(m.neighborhood)}, ${esc(cityLabel)}</span>` : '') +
      (m.rating ? `<span style="font-weight:700;color:#B45309;">★ ${m.rating}${m.reviewCount ? ` (${m.reviewCount} ${esc(ui.reviewsWord)})` : ''}</span>` : '') +
      (priceLabel ? `<span style="font-weight:700;color:#29231F;">💰 ${esc(priceLabel)}</span>` : '') +
      (m.openingHours ? `<span>🕒 ${esc(m.openingHours)}</span>` : '') +
      `</div>` +
      (m.seasonalHoursNote ? `<p style="margin:8px 0 0;font-size:13px;color:#065F46;">${esc(m.seasonalHoursNote)}</p>` : '') +
      `</header>` +
      `<section style="margin:24px 0;font-size:16px;line-height:1.65;color:#374151;border-top:1px solid #E9D8C8;padding-top:20px;">` +
      `<p style="margin:0 0 16px;">${esc(page.description)}</p>` +
      (m.address ? `<p style="font-size:14px;color:#66757D;margin:0 0 16px;"><strong>${esc(ui.addressLabel)}:</strong> ${esc(m.address)}</p>` : '') +
      menuCtaHtml +
      `</section>` +
      editorialHtml +
      inlineMenuHtml +
      cuisinesHtml +
      bestDishesHtml +
      amenitiesHtml +
      nearbyHtml +
      tipHtml +
      sampleReviewsHtml +
      faqHtml +
      cityExploreLinks +
      `<footer style="margin-top:36px;padding-top:20px;border-top:1px solid #E9D8C8;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#71685F;">` +
      `<a href="${esc(homeUrl)}" style="color:#C9A84C;font-weight:700;text-decoration:none;">Moroccan Mate</a>` +
      `<span>© ${new Date().getFullYear()} Moroccan Mate</span>` +
      `</footer>` +
      `</div>`;
  } else if (page.basePath.startsWith('/things/')) {
    const m = page.meta || {};
    const highlightsHtml =
      m.highlights && m.highlights.length > 0
        ? `<div style="margin:24px 0;"><h3 style="font-size:16px;font-weight:700;color:#173042;margin-bottom:12px;">${esc(ui.highlightsHeading)}</h3><ul style="list-style:disc;padding-left:20px;color:#374151;line-height:1.6;">${m.highlights
            .map((h) => `<li style="margin-bottom:6px;">${esc(h)}</li>`)
            .join('')}</ul></div>`
        : '';

    const includedHtml =
      m.includedServices && m.includedServices.length > 0
        ? `<div style="margin:24px 0;"><h3 style="font-size:16px;font-weight:700;color:#173042;margin-bottom:12px;">${esc(ui.includedHeading)}</h3><ul style="list-style:none;padding-left:0;color:#374151;line-height:1.6;">${m.includedServices
            .map((inc) => `<li style="margin-bottom:6px;">✓ ${esc(inc)}</li>`)
            .join('')}</ul></div>`
        : '';

    const requirementsHtml =
      m.requirements && m.requirements.length > 0
        ? `<div style="margin:20px 0;padding:14px 18px;border-radius:12px;background:#FFFDF9;border-left:4px solid #C9A84C;border:1px solid #E9D8C8;"><h4 style="margin:0 0 4px;font-size:13px;font-weight:700;color:#8A6D1F;text-transform:uppercase;">${esc(ui.whatToKnowHeading)}</h4><p style="margin:0;font-size:14px;color:#29231F;line-height:1.5;">${m.requirements.map((r) => esc(r)).join(' • ')}</p></div>`
        : '';

    preContent =
      `<div dir="${dir}" style="max-width:880px;margin:32px auto;padding:0 24px;font-family:system-ui,-apple-system,sans-serif;color:#29231F;">` +
      `<nav style="font-size:12px;color:#71685F;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:6px;align-items:center;">` +
      `<a href="${esc(homeUrl)}" style="color:#71685F;text-decoration:none;">${esc(ui.home)}</a> <span>/</span> ` +
      `<a href="${esc(browseUrl || finderUrl)}" style="color:#71685F;text-decoration:none;">${esc(ui.thingsInCity(cityLabel))}</a> <span>/</span> ` +
      `<span style="color:#29231F;font-weight:600;">${esc(page.h1)}</span>` +
      `</nav>` +
      `<header style="margin-bottom:20px;">` +
      `<span style="display:inline-block;padding:3px 10px;border-radius:12px;background:#FAF3EA;color:#C85A32;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">${esc(m.category || ui.thingsToDo)} · ${esc(cityLabel)}</span>` +
      `<h1 style="font-size:32px;font-weight:800;color:#173042;margin:4px 0 10px;line-height:1.2;">${esc(page.h1)}</h1>` +
      `<div style="font-size:14px;color:#71685F;display:flex;flex-wrap:wrap;gap:12px;align-items:center;">` +
      (m.neighborhood ? `<span>📍 ${esc(m.neighborhood)}, ${esc(cityLabel)}</span>` : '') +
      (m.price !== undefined ? `<span style="font-weight:700;color:#29231F;">💰 ${m.price > 0 ? `${m.price} MAD` : esc(ui.freeEntry)}</span>` : '') +
      (m.durationMinutes ? `<span>⏱️ ~${m.durationMinutes} min</span>` : '') +
      (m.openingHours ? `<span>🕒 ${esc(m.openingHours)}</span>` : '') +
      `</div>` +
      `</header>` +
      `<section style="margin:24px 0;font-size:16px;line-height:1.65;color:#374151;border-top:1px solid #E9D8C8;padding-top:20px;">` +
      `<p style="margin:0 0 16px;font-size:16px;line-height:1.6;">${esc(m.fullDescription || page.description)}</p>` +
      (m.address ? `<p style="font-size:14px;color:#66757D;margin:0 0 16px;"><strong>${esc(ui.addressLabel)}:</strong> ${esc(m.address)}</p>` : '') +
      `</section>` +
      highlightsHtml +
      includedHtml +
      requirementsHtml +
      faqHtml +
      cityExploreLinks +
      `<footer style="margin-top:36px;padding-top:20px;border-top:1px solid #E9D8C8;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#71685F;">` +
      `<a href="${esc(homeUrl)}" style="color:#C9A84C;font-weight:700;text-decoration:none;">Moroccan Mate</a>` +
      `<span>© ${new Date().getFullYear()} Moroccan Mate</span>` +
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

  const splashOverlay =
    `<div style="position:fixed;inset:0;z-index:9999;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#FAF7F2;font-family:system-ui,-apple-system,sans-serif;">` +
    `<div class="mate-splash" style="display:flex;flex-direction:column;align-items:center;">` +
    `<img src="/logo192.png" alt="Moroccan Mate" style="width:52px;height:52px;margin-bottom:14px;object-fit:contain;" />` +
    `<span style="font-size:13px;font-weight:700;color:#173042;letter-spacing:0.14em;text-transform:uppercase;">Moroccan Mate</span>` +
    `</div>` +
    `</div>`;

  const rootReplacement =
    `<div id="root" style="height: 100%;">` +
    `<div style="height:100vh;overflow:hidden;">${preContent}</div>` +
    `${splashOverlay}` +
    `</div>`;

  let html = stripped.replace(/<html\s+lang="[^"]*"/i, `<html lang="${lang}" dir="${dir}"`);
  const markerMatch = /<!--app-root-start-->[\s\S]*?<!--app-root-end-->/i;
  const fallbackRootMatch = /<div id="root"[^>]*>[\s\S]*?(?=\s*<script\b)/i;
  if (markerMatch.test(html)) {
    html = html.replace(markerMatch, rootReplacement);
  } else if (fallbackRootMatch.test(html)) {
    html = html.replace(fallbackRootMatch, rootReplacement);
  } else {
    html = html.replace('<body>', `<body>\n${rootReplacement}`);
  }

  html = html.replace('</head>', `    ${head}\n  </head>`);

  const file = join(dist, page.path.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);

  if (page.path !== '/') {
    const flatFile = join(dist, `${page.path.replace(/^\//, '')}.html`);
    mkdirSync(dirname(flatFile), { recursive: true });
    writeFileSync(flatFile, html);
  }
  count++;
}

console.log(`[prerender] wrote ${count} pre-rendered pages into dist/`);

try {
  copyFileSync(resolve(process.cwd(), 'public', 'robots.txt'), resolve(dist, 'robots.txt'));
  copyFileSync(resolve(process.cwd(), 'public', 'sitemap.xml'), resolve(dist, 'sitemap.xml'));
} catch (e) {
  console.warn('[prerender] warning syncing robots/sitemap:', e);
}
