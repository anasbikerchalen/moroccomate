import { useMemo } from 'react';
import { SEO } from '../components/ui/SEO';
import { TrustPageLayout } from '../components/layout/TrustPageLayout';
import { useLangPath } from '../utils/localeRouting';
import { TRUST_PAGES_I18N } from '../data/trustPagesI18n';
import { buildTrustPageSeo } from '../data/seo/seoEngine';

export default function TermsPage() {
  const { lang } = useLangPath();
  const copy = TRUST_PAGES_I18N[lang].terms;
  const seo = useMemo(() => buildTrustPageSeo('terms', lang), [lang]);

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
        <div className="divide-y divide-[#EADBCE]">
          {copy.sections.map((section) => (
            <section key={section.id} id={section.id} className="py-7 first:pt-0 scroll-mt-8">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#29231F] mb-3.5">
                {section.title}
              </h2>
              <div className="space-y-3.5 max-w-2xl">
                {section.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="font-sans text-[15px] sm:text-base leading-[1.8] text-[#29231F]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </TrustPageLayout>
    </>
  );
}
