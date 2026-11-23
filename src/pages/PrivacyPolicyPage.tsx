import { useMemo } from 'react';
import { SEO } from '../components/ui/SEO';
import { TrustPageLayout } from '../components/layout/TrustPageLayout';
import { useLangPath } from '../utils/localeRouting';
import { TRUST_PAGES_I18N } from '../data/trustPagesI18n';
import { buildTrustPageSeo } from '../data/seo/seoEngine';
import { useConsentStore } from '../state/consentStore';

export default function PrivacyPolicyPage() {
  const { lang } = useLangPath();
  const bundle = TRUST_PAGES_I18N[lang];
  const copy = bundle.privacy;
  const openPreferences = useConsentStore((s) => s.openPreferences);
  const seo = useMemo(() => buildTrustPageSeo('privacy', lang), [lang]);

  const tocItems = copy.sections.map((s) => ({ id: s.id, title: s.title }));

  const sidebarExtra = (
    <div className="rounded-2xl border border-[#EADBCE] bg-[#FFFDF9] p-5">
      <p className="font-sans text-xs leading-relaxed text-[#625950]">
        {bundle.cookie.modalSubtitle}
      </p>
      <button
        type="button"
        onClick={openPreferences}
        className="mt-3 w-full px-4 py-2.5 rounded-lg bg-[#29231F] hover:bg-[#C85A32] text-white text-xs font-semibold transition-colors cursor-pointer"
      >
        {bundle.footer.manageCookiesCta}
      </button>
    </div>
  );

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
        sidebarExtra={sidebarExtra}
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
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="list-disc ps-5 space-y-2 pt-1 font-sans text-[15px] leading-[1.75] text-[#625950]">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </TrustPageLayout>
    </>
  );
}
