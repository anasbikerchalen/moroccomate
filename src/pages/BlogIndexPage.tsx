import React, { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, MapPin, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLangPath } from '../utils/localeRouting';
import {
  BLOG_DESKS,
  getAllBlogArticles,
  getLocalizedArticleContent,
  type BlogDesk,
} from '../data/blog';
import { BLOG_UI_I18N } from '../data/blog/blogUiI18n';
import { buildBlogIndexSeo } from '../data/seo/seoEngine';
import { SEO } from '../components/ui/SEO';
import { LocalizedLink } from '../components/ui/LocalizedLink';
import { BroadsheetHeader } from '../components/blog/BroadsheetHeader';
import { BroadsheetImage } from '../components/blog/BroadsheetImage';
import { SiteFooter } from '../components/layout/SiteFooter';

export default function BlogIndexPage() {
  const { t } = useTranslation();
  const { lang } = useLangPath();
  const ui = BLOG_UI_I18N[lang];
  const allArticles = useMemo(() => getAllBlogArticles(), []);
  const seoBundle = useMemo(() => buildBlogIndexSeo(lang), [lang]);

  const [selectedDesk, setSelectedDesk] = useState<'all' | BlogDesk>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const cityOptions = useMemo(() => {
    const seen = new Map<string, string>();
    for (const article of allArticles) {
      if (!seen.has(article.cityId)) {
        const loc = getLocalizedArticleContent(article, lang);
        seen.set(article.cityId, loc.kickerCityLabel);
      }
    }
    return Array.from(seen.entries()).map(([id, label]) => ({ id, label }));
  }, [allArticles, lang]);

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const deskMatch = selectedDesk === 'all' || article.desk === selectedDesk;
      const cityMatch = selectedCity === 'all' || article.cityId === selectedCity;
      return deskMatch && cityMatch;
    });
  }, [allArticles, selectedDesk, selectedCity]);

  const leadArticle = filteredArticles[0] || null;
  const remainingArticles = filteredArticles.slice(1);

  const deskCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allArticles.length };
    for (const d of BLOG_DESKS) {
      counts[d] = allArticles.filter((a) => a.desk === d).length;
    }
    return counts;
  }, [allArticles]);

  const hasActiveFilters = selectedDesk !== 'all' || selectedCity !== 'all';

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#29231F] font-sans">
      <SEO
        title={seoBundle.title}
        description={seoBundle.description}
        canonical={seoBundle.canonical}
        image={seoBundle.image}
        schemaType={seoBundle.schemaType}
        schemaData={seoBundle.schemaData}
        breadcrumbs={seoBundle.breadcrumbs}
      />

      <BroadsheetHeader active="blog" />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 pt-8 sm:pt-10 pb-10">
        {/* Warm Editorial Intro matching HomePage */}
        <section className="text-center max-w-3xl mx-auto pb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#FAF3E0] text-[#8A6D1F] border border-[#C9A84C]/30 rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em]">
            <BookOpen className="w-3.5 h-3.5 text-[#C9A84C]" aria-hidden="true" />
            <span>{ui.editionLabel}</span>
          </div>

          <h1 className="mt-4 font-display font-medium text-[30px] leading-[1.1] sm:text-[38px] md:text-[44px] tracking-tight text-[#29231F] text-balance">
            {ui.publicationTitle}
          </h1>

          <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-[#625950] max-w-2xl mx-auto">
            {ui.publicationSubtitle}
          </p>
        </section>

        {/* Rounded Pill Filter Bar matching HomePage Explorer */}
        <section
          aria-label="Blog filters"
          className="mb-8 rounded-[22px] border border-[#E9D8C8] bg-[#FFFDF9] p-4 sm:p-5 shadow-[0_6px_24px_rgba(80,55,35,0.06)] space-y-3"
        >
          {/* Topic Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
            <button
              type="button"
              onClick={() => setSelectedDesk('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans whitespace-nowrap shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedDesk === 'all'
                  ? 'bg-[#C9A84C] text-white font-semibold shadow-xs'
                  : 'bg-[#FAF7F2] hover:bg-[#F5EBE1] text-[#625950] hover:text-[#29231F] border border-[#EADBCE]'
              }`}
            >
              <span>{ui.allDesks}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedDesk === 'all' ? 'bg-white/25 text-white' : 'bg-[#F5EBE1] text-[#71685F]'
                }`}
              >
                {deskCounts.all}
              </span>
            </button>
            {BLOG_DESKS.map((desk) => {
              const active = selectedDesk === desk;
              return (
                <button
                  key={desk}
                  type="button"
                  onClick={() => setSelectedDesk(desk)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-sans whitespace-nowrap shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#C9A84C] text-white font-semibold shadow-xs'
                      : 'bg-[#FAF7F2] hover:bg-[#F5EBE1] text-[#625950] hover:text-[#29231F] border border-[#EADBCE]'
                  }`}
                >
                  <span>{ui.desks[desk]}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      active ? 'bg-white/25 text-white' : 'bg-[#F5EBE1] text-[#71685F]'
                    }`}
                  >
                    {deskCounts[desk] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* City Filter Row */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2.5 border-t border-[#E9D8C8]/60">
            <MapPin className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 me-1" aria-hidden="true" />
            <button
              type="button"
              onClick={() => setSelectedCity('all')}
              className={`px-3 py-1 rounded-full text-xs font-sans whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedCity === 'all'
                  ? 'bg-[#C85A32] text-white font-semibold shadow-xs'
                  : 'text-[#625950] hover:bg-[#F5EBE1] hover:text-[#29231F] font-medium'
              }`}
            >
              {ui.allCities}
            </button>
            {cityOptions.map((c) => {
              const active = selectedCity === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCity(c.id)}
                  className={`px-3 py-1 rounded-full text-xs font-sans whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    active
                      ? 'bg-[#C85A32] text-white font-semibold shadow-xs'
                      : 'text-[#625950] hover:bg-[#F5EBE1] hover:text-[#29231F] font-medium'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <section className="rounded-[24px] border border-[#E9D8C8] bg-[#FFFDF9] p-10 sm:p-14 text-center shadow-[0_6px_24px_rgba(80,55,35,0.06)]">
            <h2 className="font-display text-2xl font-semibold text-[#29231F]">
              {ui.emptyTitle}
            </h2>
            <p className="mt-2 font-sans text-sm text-[#625950] max-w-md mx-auto">
              {ui.emptyBody}
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={() => {
                  setSelectedDesk('all');
                  setSelectedCity('all');
                }}
                className="mt-5 px-5 py-2.5 rounded-full bg-[#C9A84C] hover:bg-[#B89438] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                {ui.resetFilters}
              </button>
            )}
          </section>
        )}

        {/* Featured Article + Popular Guides Sidebar */}
        {leadArticle && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {(() => {
              const loc = getLocalizedArticleContent(leadArticle, lang);
              return (
                <article className="lg:col-span-8">
                  <LocalizedLink
                    to={`/blog/${leadArticle.slug}`}
                    className="group h-full rounded-[24px] border border-[#E9D8C8] bg-[#FFFDF9] p-5 sm:p-6 shadow-[0_6px_24px_rgba(80,55,35,0.06)] hover:border-[#C9A84C]/60 hover:shadow-[0_12px_32px_rgba(80,55,35,0.12)] transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-xs">
                          <span className="inline-flex items-center gap-1 bg-[#FAF3E0] text-[#8A6D1F] border border-[#C9A84C]/30 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                            <Sparkles className="w-3 h-3 text-[#C9A84C]" aria-hidden="true" />
                            <span>{ui.leadDispatchLabel}</span>
                          </span>
                          <span className="font-bold uppercase tracking-[0.14em] text-[10px] text-[#C85A32]">
                            {ui.desks[leadArticle.desk]}
                          </span>
                          <span className="text-[#C9A84C]" aria-hidden="true">·</span>
                          <span className="text-[#71685F] font-medium">{loc.kickerCityLabel}</span>
                        </div>
                        <span className="text-xs text-[#71685F]">
                          {leadArticle.readTimeMinutes} {ui.minReadSuffix}
                        </span>
                      </div>

                      <BroadsheetImage
                        imageKey={leadArticle.heroImageKey}
                        alt={loc.heroCaption}
                        aspectClass="aspect-[16/9]"
                        priority
                      />

                      <h2 className="mt-5 font-display text-2xl sm:text-3xl font-semibold leading-tight text-[#29231F] group-hover:text-[#C85A32] transition-colors text-balance">
                        {loc.title}
                      </h2>

                      <p className="mt-2.5 font-sans text-sm sm:text-base leading-relaxed text-[#625950]">
                        {loc.deck}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#E9D8C8]/70 flex flex-wrap items-center justify-between gap-3">
                      <span className="font-sans text-xs text-[#71685F]">
                        {loc.authorName} · {leadArticle.linkedPlaces.length}{' '}
                        {ui.placesReferencedCount}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#8A6D1F] group-hover:text-[#C85A32] transition-colors">
                        <span>{ui.readDispatch}</span>
                        <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
                      </span>
                    </div>
                  </LocalizedLink>
                </article>
              );
            })()}

            {/* Side Column: Popular Articles & Finder Card */}
            <aside className="lg:col-span-4 flex flex-col gap-5">
              <div className="flex-1 rounded-[24px] border border-[#E9D8C8] bg-[#FFFDF9] p-5 sm:p-6 shadow-[0_6px_24px_rgba(80,55,35,0.06)] flex flex-col justify-between">
                <div>
                  <h2 className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#C85A32] pb-3 border-b border-[#E9D8C8]/70">
                    {ui.secondaryFeaturesLabel}
                  </h2>
                  <div className="divide-y divide-[#E9D8C8]/60">
                    {allArticles
                      .filter((a) => a.slug !== leadArticle.slug)
                      .slice(0, 4)
                      .map((item) => {
                        const itemLoc = getLocalizedArticleContent(item, lang);
                        return (
                          <article key={item.slug} className="py-3.5 first:pt-4 last:pb-1">
                            <LocalizedLink to={`/blog/${item.slug}`} className="group block">
                              <div className="flex items-center gap-2 font-sans text-[11px] text-[#71685F]">
                                <span className="font-semibold text-[#8A6D1F]">
                                  {itemLoc.kickerCityLabel}
                                </span>
                                <span aria-hidden="true">·</span>
                                <span>
                                  {item.readTimeMinutes} {ui.minReadSuffix}
                                </span>
                              </div>
                              <h3 className="mt-1 font-display text-base font-semibold leading-snug text-[#29231F] group-hover:text-[#C85A32] transition-colors text-balance">
                                {itemLoc.title}
                              </h3>
                            </LocalizedLink>
                          </article>
                        );
                      })}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-[#FAF3EA] border border-[#E9D8C8] p-4">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#C85A32]">
                    Moroccan Mate
                  </p>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-[#625950]">
                    {ui.publicationSubtitle}
                  </p>
                  <LocalizedLink
                    to="/"
                    className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#8A6D1F] hover:text-[#C85A32] transition-colors"
                  >
                    <span>{ui.navDiscover}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
                  </LocalizedLink>
                </div>
              </div>
            </aside>
          </section>
        )}

        {/* Remaining Articles Grid */}
        {remainingArticles.length > 0 && (
          <section className="mt-10 pt-8 border-t border-[#E9D8C8]/60">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#29231F] mb-5">
              {ui.archiveLedgerLabel}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {remainingArticles.map((article) => {
                const loc = getLocalizedArticleContent(article, lang);
                return (
                  <article key={article.slug}>
                    <LocalizedLink
                      to={`/blog/${article.slug}`}
                      className="group h-full rounded-[22px] border border-[#E9D8C8] bg-[#FFFDF9] p-4 sm:p-5 shadow-[0_6px_24px_rgba(80,55,35,0.06)] hover:border-[#C9A84C]/60 hover:shadow-[0_10px_30px_rgba(80,55,35,0.12)] transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <BroadsheetImage
                          imageKey={article.heroImageKey}
                          alt={loc.heroCaption}
                          aspectClass="aspect-[4/3]"
                        />
                        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-[11px] text-[#71685F]">
                          <span className="font-bold uppercase tracking-[0.14em] text-[#C85A32]">
                            {ui.desks[article.desk]}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="font-medium text-[#29231F]">{loc.kickerCityLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span>
                            {article.readTimeMinutes} {ui.minReadSuffix}
                          </span>
                        </div>
                        <h3 className="mt-2 font-display text-lg sm:text-xl font-semibold leading-snug text-[#29231F] group-hover:text-[#C85A32] transition-colors text-balance">
                          {loc.title}
                        </h3>
                        <p className="mt-2 font-sans text-xs sm:text-sm leading-relaxed text-[#625950] line-clamp-3">
                          {loc.deck}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#E9D8C8]/60 flex items-center justify-between text-xs">
                        <span className="text-[#71685F]">
                          {article.linkedPlaces.length} {ui.placesReferencedCount}
                        </span>
                        <span className="inline-flex items-center gap-1 font-semibold text-[#8A6D1F] group-hover:text-[#C85A32] transition-colors">
                          <span>{ui.readDispatch}</span>
                          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
                        </span>
                      </div>
                    </LocalizedLink>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        <SiteFooter variant="editorial" className="mt-14" />
      </main>
    </div>
  );
}
