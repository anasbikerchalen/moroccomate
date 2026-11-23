import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Clock, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLangPath } from '../utils/localeRouting';
import {
  getAdjacentBlogArticles,
  getAllBlogArticles,
  getBlogArticleBySlug,
  getLocalizedArticleContent,
  getRelatedBlogArticles,
  type ArticleBlock,
  type InlineSegment,
} from '../data/blog';
import { BLOG_UI_I18N } from '../data/blog/blogUiI18n';
import { resolveBlogPlace } from '../data/blog/placeResolver';
import { buildBlogArticleSeo, buildBlogIndexSeo } from '../data/seo/seoEngine';
import { SEO } from '../components/ui/SEO';
import { LocalizedLink } from '../components/ui/LocalizedLink';
import { BroadsheetHeader } from '../components/blog/BroadsheetHeader';
import { BroadsheetImage } from '../components/blog/BroadsheetImage';
import { InlinePlaceCard } from '../components/blog/InlinePlaceCard';
import { SiteFooter } from '../components/layout/SiteFooter';

function renderInlineSegments(segments: InlineSegment[], lang: ReturnType<typeof useLangPath>['lang']) {
  return segments.map((seg, i) => {
    if (seg.type === 'text') {
      return <React.Fragment key={i}>{seg.text}</React.Fragment>;
    }
    if (seg.type === 'place') {
      const resolved = resolveBlogPlace(seg.ref, lang);
      return (
        <LocalizedLink
          key={i}
          to={resolved.url}
          className="text-[#C85A32] font-semibold underline decoration-[#C85A32]/40 underline-offset-4 hover:decoration-[#C85A32] hover:text-[#9E4222] transition-colors"
        >
          {seg.label}
        </LocalizedLink>
      );
    }
    return (
      <LocalizedLink
        key={i}
        to={`/finder/${seg.city}/${seg.category}`}
        className="text-[#C85A32] font-semibold underline decoration-[#C85A32]/40 underline-offset-4 hover:decoration-[#C85A32] hover:text-[#9E4222] transition-colors"
      >
        {seg.label}
      </LocalizedLink>
    );
  });
}

export default function BlogArticlePage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLangPath();
  const ui = BLOG_UI_I18N[lang];
  const [readProgress, setReadProgress] = useState(0);

  const article = useMemo(() => getBlogArticleBySlug(slug), [slug]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      if (maxScroll <= 0) {
        setReadProgress(0);
        return;
      }
      setReadProgress(Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);

  if (!article) {
    const fallbackSeo = buildBlogIndexSeo(lang);
    const fallbackArticles = getAllBlogArticles().slice(0, 3);
    return (
      <div className="min-h-screen bg-[#FAF7F2] text-[#29231F] font-sans">
        <SEO title={ui.notFoundTitle} description={ui.notFoundBody} canonical={fallbackSeo.canonical} noIndex />
        <BroadsheetHeader active="blog" />
        <main className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-10 py-14">
          <div className="rounded-[24px] border border-[#E9D8C8] bg-[#FFFDF9] p-8 sm:p-10 shadow-[0_6px_24px_rgba(80,55,35,0.06)]">
            <span className="inline-flex items-center gap-1.5 bg-[#FAF3E0] text-[#8A6D1F] border border-[#C9A84C]/30 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
              404 · {ui.publicationTitle}
            </span>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-[#29231F]">
              {ui.notFoundTitle}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#625950] max-w-lg">{ui.notFoundBody}</p>
            <LocalizedLink
              to="/blog"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C9A84C] hover:bg-[#B89438] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
              <span>{ui.backToDispatches}</span>
            </LocalizedLink>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {fallbackArticles.map((item) => {
              const itemLoc = getLocalizedArticleContent(item, lang);
              return (
                <LocalizedLink
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="group block rounded-2xl border border-[#E9D8C8] bg-[#FFFDF9] p-5 shadow-[0_4px_16px_rgba(80,55,35,0.05)] hover:border-[#C9A84C]/60 transition-all"
                >
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#C85A32]">
                    {itemLoc.kickerCityLabel}
                  </span>
                  <h2 className="mt-1.5 font-display text-lg font-semibold text-[#29231F] group-hover:text-[#C85A32] transition-colors">
                    {itemLoc.title}
                  </h2>
                </LocalizedLink>
              );
            })}
          </div>
        </main>
      </div>
    );
  }

  const localized = getLocalizedArticleContent(article, lang);
  const seoBundle = useMemo(
    () =>
      buildBlogArticleSeo({
        slug: article.slug,
        heroImageKey: article.heroImageKey,
        publishedAt: article.publishedAt,
        seoTitle: localized.seoTitle,
        seoDescription: localized.seoDescription,
        title: localized.title,
        authorName: localized.authorName,
        lang,
      }),
    [article, localized, lang]
  );

  const chapters = useMemo(
    () =>
      localized.blocks.filter(
        (b): b is Extract<ArticleBlock, { type: 'heading' }> => b.type === 'heading'
      ),
    [localized.blocks]
  );

  const mentionedPlaces = useMemo(
    () => article.linkedPlaces.map((ref) => resolveBlogPlace(ref, lang)),
    [article.linkedPlaces, lang]
  );

  const { prev, next } = useMemo(() => getAdjacentBlogArticles(article.slug), [article.slug]);
  const related = useMemo(() => getRelatedBlogArticles(article, 3), [article]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#29231F] font-sans">
      <SEO
        title={seoBundle.title}
        description={seoBundle.description}
        canonical={seoBundle.canonical}
        type="article"
        image={seoBundle.image}
        schemaType={seoBundle.schemaType}
        schemaData={seoBundle.schemaData}
        breadcrumbs={seoBundle.breadcrumbs}
      />

      {/* Reading Progress Gold Bar */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent pointer-events-none"
      >
        <div
          className="h-full bg-[#C9A84C] transition-[width] duration-75"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <BroadsheetHeader active="article" />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 pb-10">
        {/* Clean Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#E9D8C8]/70">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#71685F]">
            <LocalizedLink
              to="/blog"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCE] text-[#29231F] hover:border-[#C9A84C] hover:text-[#C85A32] font-medium shadow-xs transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
              <span>{ui.backToDispatches}</span>
            </LocalizedLink>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-[#C85A32]">{ui.desks[article.desk]}</span>
            <span aria-hidden="true">/</span>
            <span className="inline-flex items-center gap-1 text-[#29231F] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" aria-hidden="true" />
              <span>{localized.kickerCityLabel}</span>
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs text-[#71685F] bg-[#FAF3EA] border border-[#E9D8C8] rounded-full px-3 py-1">
            <Clock className="w-3.5 h-3.5 text-[#C9A84C]" aria-hidden="true" />
            <span>
              {article.readTimeMinutes} {ui.minReadSuffix}
            </span>
          </span>
        </div>

        {/* Article Header Card */}
        <header className="mt-6 rounded-[24px] border border-[#E9D8C8] bg-[#FFFDF9] p-5 sm:p-8 shadow-[0_6px_24px_rgba(80,55,35,0.06)]">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-1.5 bg-[#FAF3E0] text-[#8A6D1F] border border-[#C9A84C]/30 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]">
              <BookOpen className="w-3 h-3 text-[#C9A84C]" aria-hidden="true" />
              <span>{ui.desks[article.desk]}</span>
            </div>

            <h1 className="mt-4 font-display text-[28px] sm:text-[38px] md:text-[44px] font-semibold leading-[1.1] tracking-tight text-[#29231F] text-balance">
              {localized.title}
            </h1>

            <p className="mt-3.5 font-sans text-base sm:text-lg leading-relaxed text-[#625950] max-w-3xl">
              {localized.deck}
            </p>

            <div className="mt-5 pt-4 border-t border-[#E9D8C8]/70 flex flex-wrap items-center justify-between gap-4 text-xs text-[#71685F]">
              <div>
                <span className="text-[#29231F] font-semibold">{localized.authorName}</span>
                <span aria-hidden="true"> · </span>
                <span>{localized.authorRole}</span>
              </div>
              <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            </div>
          </div>

          <figure className="mt-6">
            <BroadsheetImage
              imageKey={article.heroImageKey}
              alt={localized.heroCaption}
              aspectClass="aspect-[16/9]"
              priority
            />
            <figcaption className="mt-2.5 font-sans text-xs text-[#71685F]">
              {localized.heroCaption}
            </figcaption>
          </figure>
        </header>

        {/* Main Reading Layout: Article Body + Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-8 gap-8 items-start">
          {/* Primary Prose Column */}
          <article className="lg:col-span-8 rounded-[24px] border border-[#E9D8C8] bg-[#FFFDF9] p-6 sm:p-8 md:p-10 shadow-[0_6px_24px_rgba(80,55,35,0.05)]">
            {localized.blocks.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p
                    key={index}
                    className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-[#29231F] mb-6"
                  >
                    {renderInlineSegments(block.segments, lang)}
                  </p>
                );
              }

              if (block.type === 'heading') {
                return (
                  <h2
                    key={index}
                    id={block.id}
                    className="scroll-mt-10 mt-10 mb-4 pt-6 border-t border-[#E9D8C8]/70 font-display text-2xl sm:text-[26px] font-semibold leading-snug text-[#29231F] flex items-baseline gap-2.5 text-balance"
                  >
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-[#FAF3E0] border border-[#C9A84C]/35 font-sans text-xs font-bold text-[#8A6D1F] shrink-0">
                      {block.index}
                    </span>
                    <span>{block.text}</span>
                  </h2>
                );
              }

              if (block.type === 'pullquote') {
                return (
                  <blockquote
                    key={index}
                    className="my-8 rounded-2xl bg-[#FAF3EA] border-s-4 border-[#C9A84C] p-6"
                  >
                    <p className="font-display italic text-xl sm:text-2xl leading-snug text-[#29231F]">
                      “{block.quote}”
                    </p>
                    {block.attribution && (
                      <footer className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6D1F]">
                        {block.attribution}
                      </footer>
                    )}
                  </blockquote>
                );
              }

              if (block.type === 'figure') {
                return (
                  <figure key={index} className="my-8">
                    <BroadsheetImage
                      imageKey={block.imageKey}
                      alt={block.caption}
                      aspectClass="aspect-[4/3]"
                    />
                    <figcaption className="mt-2 font-sans text-xs text-[#71685F]">
                      {block.caption}
                    </figcaption>
                  </figure>
                );
              }

              if (block.type === 'place-dispatch') {
                return (
                  <InlinePlaceCard
                    key={index}
                    placeRef={block.ref}
                    note={block.note}
                  />
                );
              }

              if (block.type === 'field-ledger') {
                const isCaution = block.tone === 'caution';
                return (
                  <section
                    key={index}
                    className="my-8 rounded-2xl border border-[#E9D8C8] bg-[#FAF7F2] overflow-hidden"
                  >
                    <div
                      className={`px-5 py-3.5 border-b border-[#E9D8C8] flex items-center justify-between gap-3 ${
                        isCaution ? 'bg-[#FDF1EC]' : 'bg-[#FAF3E0]'
                      }`}
                    >
                      <h3 className="font-display text-base sm:text-lg font-semibold text-[#29231F]">
                        {block.title}
                      </h3>
                      <span
                        className={`font-sans text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-0.5 rounded-full ${
                          isCaution
                            ? 'bg-[#C85A32]/15 text-[#C85A32]'
                            : 'bg-[#C9A84C]/20 text-[#8A6D1F]'
                        }`}
                      >
                        {isCaution ? ui.noteCautionLabel : ui.noteFieldLabel}
                      </span>
                    </div>
                    <dl className="divide-y divide-[#E9D8C8]/70 bg-[#FFFDF9]">
                      {block.rows.map((row, rIdx) => (
                        <div
                          key={rIdx}
                          className="px-5 py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-baseline"
                        >
                          <dt className="sm:col-span-5 font-sans text-xs font-semibold text-[#29231F]">
                            {row.label}
                          </dt>
                          <dd className="sm:col-span-7">
                            <span className="font-sans text-xs font-bold text-[#C85A32] block">
                              {row.value}
                            </span>
                            {row.detail && (
                              <span className="font-sans text-xs text-[#625950] block mt-0.5">
                                {row.detail}
                              </span>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                );
              }

              return null;
            })}
          </article>

          {/* Sticky Sidebar Cards */}
          <aside className="lg:col-span-4 lg:sticky lg:top-6 space-y-5">
            {/* Chapters Card */}
            {chapters.length > 0 && (
              <div className="rounded-2xl border border-[#E9D8C8] bg-[#FFFDF9] p-5 shadow-[0_4px_20px_rgba(80,55,35,0.05)]">
                <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#C85A32] pb-3 border-b border-[#E9D8C8]/70">
                  {ui.chaptersHeading}
                </h2>
                <nav aria-label="Article chapters" className="divide-y divide-[#E9D8C8]/50">
                  {chapters.map((ch) => (
                    <a
                      key={ch.id}
                      href={`#${ch.id}`}
                      className="py-2.5 flex items-baseline gap-2.5 text-xs font-sans text-[#625950] hover:text-[#C85A32] transition-colors"
                    >
                      <span className="font-semibold text-[#8A6D1F] shrink-0">
                        {ch.index}
                      </span>
                      <span className="font-medium leading-snug">{ch.text}</span>
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Mentioned Places Card */}
            <div className="rounded-2xl border border-[#E9D8C8] bg-[#FFFDF9] p-5 shadow-[0_4px_20px_rgba(80,55,35,0.05)]">
              <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#C85A32] pb-3 border-b border-[#E9D8C8]/70">
                {ui.mentionedHeading}
              </h2>
              <div className="divide-y divide-[#E9D8C8]/50">
                {mentionedPlaces.map((place) => (
                  <LocalizedLink
                    key={place.key}
                    to={place.url}
                    className="group py-3 flex items-start justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#71685F] block">
                        {place.categoryLabel} · {place.neighborhood}
                      </span>
                      <span className="font-sans text-sm font-semibold text-[#29231F] group-hover:text-[#C85A32] transition-colors block mt-0.5">
                        {place.name}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#C9A84C] group-hover:text-[#C85A32] shrink-0 mt-1 rtl:-scale-x-100"
                      aria-hidden="true"
                    />
                  </LocalizedLink>
                ))}
              </div>
            </div>

            {/* Explore City Finder Card */}
            <div className="rounded-2xl border border-[#E9D8C8] bg-[#FAF3EA] p-5 shadow-[0_4px_20px_rgba(80,55,35,0.05)]">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A6D1F]">
                {localized.kickerCityLabel}
              </p>
              <h2 className="mt-1 font-display text-lg font-semibold text-[#29231F]">
                {ui.exploreCityHeading}
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {(['food', 'sleep', 'things-to-do', 'shopping'] as const).map((cat) => (
                  <LocalizedLink
                    key={cat}
                    to={`/finder/${article.cityId}/${cat}`}
                    className="px-3 py-2 rounded-xl bg-[#FFFDF9] border border-[#E9D8C8] hover:border-[#C9A84C] hover:text-[#C85A32] text-xs font-semibold text-[#29231F] shadow-xs transition-all text-center"
                  >
                    {ui.exploreCategories[cat]}
                  </LocalizedLink>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Previous / Next Article Cards */}
        {(prev || next) && (
          <nav
            aria-label="Adjacent articles"
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              {prev && (
                <LocalizedLink
                  to={`/blog/${prev.slug}`}
                  className="group block h-full rounded-2xl border border-[#E9D8C8] bg-[#FFFDF9] p-5 shadow-[0_4px_16px_rgba(80,55,35,0.05)] hover:border-[#C9A84C]/60 transition-all"
                >
                  <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#71685F]">
                    <ArrowLeft className="w-3.5 h-3.5 text-[#C9A84C] rtl:rotate-180" aria-hidden="true" />
                    <span>{ui.previousDispatch}</span>
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-[#29231F] group-hover:text-[#C85A32] transition-colors text-balance">
                    {getLocalizedArticleContent(prev, lang).title}
                  </h3>
                </LocalizedLink>
              )}
            </div>
            <div className="md:text-end">
              {next && (
                <LocalizedLink
                  to={`/blog/${next.slug}`}
                  className="group block h-full rounded-2xl border border-[#E9D8C8] bg-[#FFFDF9] p-5 shadow-[0_4px_16px_rgba(80,55,35,0.05)] hover:border-[#C9A84C]/60 transition-all"
                >
                  <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#71685F]">
                    <span>{ui.nextDispatch}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C] rtl:rotate-180" aria-hidden="true" />
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-[#29231F] group-hover:text-[#C85A32] transition-colors text-balance">
                    {getLocalizedArticleContent(next, lang).title}
                  </h3>
                </LocalizedLink>
              )}
            </div>
          </nav>
        )}

        {/* Related Articles Grid */}
        <section className="mt-12 pt-8 border-t border-[#E9D8C8]/60">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#29231F] mb-5">
            {ui.relatedDispatches}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((item) => {
              const itemLoc = getLocalizedArticleContent(item, lang);
              return (
                <article key={item.slug}>
                  <LocalizedLink
                    to={`/blog/${item.slug}`}
                    className="group block h-full rounded-[22px] border border-[#E9D8C8] bg-[#FFFDF9] p-4 shadow-[0_6px_24px_rgba(80,55,35,0.06)] hover:border-[#C9A84C]/60 hover:shadow-[0_10px_28px_rgba(80,55,35,0.10)] transition-all"
                  >
                    <BroadsheetImage
                      imageKey={item.heroImageKey}
                      alt={itemLoc.heroCaption}
                      aspectClass="aspect-[4/3]"
                    />
                    <div className="mt-3.5 flex items-center gap-2 font-sans text-[11px] text-[#71685F]">
                      <span className="font-bold uppercase tracking-[0.12em] text-[#C85A32]">
                        {itemLoc.kickerCityLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>
                        {item.readTimeMinutes} {ui.minReadSuffix}
                      </span>
                    </div>
                    <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-[#29231F] group-hover:text-[#C85A32] transition-colors text-balance">
                      {itemLoc.title}
                    </h3>
                  </LocalizedLink>
                </article>
              );
            })}
          </div>
        </section>

        <SiteFooter variant="editorial" className="mt-14" />
      </main>
    </div>
  );
}
