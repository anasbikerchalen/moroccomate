import React, { useMemo } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useLangPath } from '../../utils/localeRouting';
import { getAllBlogArticles, getLocalizedArticleContent } from '../../data/blog';
import { BLOG_UI_I18N } from '../../data/blog/blogUiI18n';
import { LocalizedLink } from '../ui/LocalizedLink';
import { BroadsheetImage } from './BroadsheetImage';

export const HomeBroadsheetSection: React.FC = () => {
  const { lang } = useLangPath();
  const ui = BLOG_UI_I18N[lang];

  const { lead, secondary } = useMemo(() => {
    const all = getAllBlogArticles();
    return {
      lead: all[0],
      secondary: all.slice(1, 4),
    };
  }, []);

  if (!lead) return null;

  const leadLocalized = getLocalizedArticleContent(lead, lang);

  return (
    <section
      aria-labelledby="home-blog-heading"
      className="pt-8 pb-8 border-t border-[#E9D8C8]/60"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#C85A32]">
            <BookOpen className="w-3.5 h-3.5 text-[#C9A84C]" aria-hidden="true" />
            <span>{ui.homePreviewKicker}</span>
          </span>
          <h2
            id="home-blog-heading"
            className="mt-1 font-display text-xl sm:text-2xl font-semibold text-[#29231F]"
          >
            {ui.homePreviewTitle}
          </h2>
          <p className="mt-1 font-sans text-sm text-[#625950] max-w-2xl">
            {ui.homePreviewSubtitle}
          </p>
        </div>

        <LocalizedLink
          to="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9] hover:bg-[#C9A84C] text-[#29231F] hover:text-white border border-[#EADBCE] hover:border-[#C9A84C] font-sans text-xs font-semibold shadow-xs transition-all duration-200 whitespace-nowrap shrink-0 self-start sm:self-end"
        >
          <span>{ui.allDispatchesCta}</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
        </LocalizedLink>
      </div>

      {/* Blog Preview Grid matching Moroccan Mate card style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Featured Article Card */}
        <article className="lg:col-span-7">
          <LocalizedLink
            to={`/blog/${lead.slug}`}
            className="group block h-full rounded-[24px] border border-[#E9D8C8] bg-[#FFFDF9] p-4 sm:p-5 shadow-[0_6px_24px_rgba(80,55,35,0.06)] hover:border-[#C9A84C]/60 hover:shadow-[0_10px_30px_rgba(80,55,35,0.12)] transition-all duration-200"
          >
            <BroadsheetImage
              imageKey={lead.heroImageKey}
              alt={leadLocalized.heroCaption}
              aspectClass="aspect-[16/9]"
            />
            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-[11px] text-[#71685F]">
              <span className="font-bold uppercase tracking-[0.14em] text-[#C85A32]">
                {ui.desks[lead.desk]}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-[#29231F]">{leadLocalized.kickerCityLabel}</span>
              <span aria-hidden="true">·</span>
              <span>
                {lead.readTimeMinutes} {ui.minReadSuffix}
              </span>
            </div>
            <h3 className="mt-2 font-display text-xl sm:text-2xl font-semibold leading-snug text-[#29231F] group-hover:text-[#C85A32] transition-colors text-balance">
              {leadLocalized.title}
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-[#625950]">
              {leadLocalized.deck}
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#8A6D1F] group-hover:text-[#C9A84C] transition-colors">
              <span>{ui.readDispatch}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
            </div>
          </LocalizedLink>
        </article>

        {/* Secondary Blog Cards */}
        <div className="lg:col-span-5 flex flex-col gap-3.5">
          {secondary.map((article) => {
            const loc = getLocalizedArticleContent(article, lang);
            return (
              <article key={article.slug} className="flex-1">
                <LocalizedLink
                  to={`/blog/${article.slug}`}
                  className="group h-full rounded-2xl border border-[#E9D8C8] bg-[#FFFDF9] p-4 sm:p-5 shadow-[0_4px_16px_rgba(80,55,35,0.04)] hover:border-[#C9A84C]/60 hover:shadow-[0_8px_24px_rgba(80,55,35,0.10)] transition-all duration-200 flex flex-col justify-center"
                >
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-[11px] text-[#71685F]">
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
                  <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-[#29231F] group-hover:text-[#C85A32] transition-colors text-balance">
                    {loc.title}
                  </h3>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-[#625950] line-clamp-2">
                    {loc.deck}
                  </p>
                </LocalizedLink>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
