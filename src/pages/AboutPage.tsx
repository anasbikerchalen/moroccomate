import { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { LocalizedLink } from '../components/ui/LocalizedLink';
import { TrustPageLayout } from '../components/layout/TrustPageLayout';
import { useLangPath } from '../utils/localeRouting';
import { TRUST_PAGES_I18N } from '../data/trustPagesI18n';
import { buildTrustPageSeo } from '../data/seo/seoEngine';

export default function AboutPage() {
  const { lang } = useLangPath();
  const copy = TRUST_PAGES_I18N[lang].about;
  const seo = useMemo(() => buildTrustPageSeo('about', lang), [lang]);

  const tocItems = copy.sections.map((s) => ({ id: s.id, title: s.title }));

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        image={seo.image}
        schemaType={seo.schemaType}
        schemaData={seo.schemaData}
        breadcrumbs={seo.breadcrumbs}
      />

      <TrustPageLayout
        kicker={copy.kicker}
        title={copy.title}
        subtitle={copy.subtitle}
        metaLine={copy.metaLine}
        tocItems={tocItems}
      >
        {/* Editorial Principles */}
        <section aria-labelledby="about-principles-heading" className="pb-8 border-b border-[#EADBCE]">
          <h2
            id="about-principles-heading"
            className="font-display text-2xl font-semibold text-[#29231F] mb-5"
          >
            {copy.principlesHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {copy.principles.map((p, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#EADBCE] bg-[#FFFDF9] p-5"
              >
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#C85A32]">
                  0{idx + 1}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-[#29231F]">
                  {p.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#625950]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Long-form Narrative */}
        <div className="divide-y divide-[#EADBCE]">
          {copy.sections.map((section) => (
            <section key={section.id} id={section.id} className="py-8 scroll-mt-8">
              <h2 className="font-display text-2xl sm:text-[26px] font-semibold text-[#29231F] mb-4">
                {section.title}
              </h2>
              <div className="space-y-4 max-w-2xl">
                {section.paragraphs.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-sans text-[15px] sm:text-base leading-[1.8] text-[#29231F]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact / Explore Callout */}
        <section className="mt-4 rounded-2xl border border-[#EADBCE] bg-[#FFFDF9] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="max-w-lg">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#29231F]">
              {copy.ctaTitle}
            </h2>
            <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#625950]">
              {copy.ctaBody}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <LocalizedLink
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#29231F] hover:bg-[#C85A32] text-white text-xs font-semibold transition-colors whitespace-nowrap"
            >
              <span>{copy.ctaPrimary}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
            </LocalizedLink>
            <LocalizedLink
              to="/blog"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#EADBCE] bg-white hover:bg-[#FAF7F2] text-[#29231F] text-xs font-semibold transition-colors whitespace-nowrap"
            >
              <span>{copy.ctaSecondary}</span>
            </LocalizedLink>
          </div>
        </section>
      </TrustPageLayout>
    </>
  );
}
