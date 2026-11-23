import React from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../ui/LocalizedLink';
import { useLangPath } from '../../utils/localeRouting';
import { TRUST_PAGES_I18N } from '../../data/trustPagesI18n';
import { useConsentStore } from '../../state/consentStore';
import logoImg from '../../assets/images/logo.png';

interface SiteFooterProps {
  variant?: 'editorial' | 'compact';
  contextLabel?: string;
  className?: string;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  variant = 'editorial',
  contextLabel,
  className = '',
}) => {
  const { t } = useTranslation();
  const { lang } = useLangPath();
  const openPreferences = useConsentStore((s) => s.openPreferences);
  const footerCopy = TRUST_PAGES_I18N[lang].footer;
  const year = new Date().getFullYear();

  const linkClass =
    'text-[#625950] hover:text-[#C85A32] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 py-1';

  if (variant === 'compact') {
    return (
      <footer className={`border-t border-[#ece4d5] bg-white ${className}`}>
        <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8 space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <LocalizedLink to="/" className="flex items-center gap-1.5">
              <img
                src={logoImg}
                alt="Moroccan Mate logo"
                className="w-5 h-5 object-contain opacity-80"
              />
              <span className="font-display text-sm font-bold text-[#173042]">
                Moroccan Mate
              </span>
            </LocalizedLink>
            {contextLabel && (
              <span className="text-xs text-[#66757D] capitalize">
                {contextLabel}
              </span>
            )}
          </div>

          <nav
            aria-label="Legal and site links"
            className="pt-2.5 border-t border-[#ece4d5]/70 flex flex-wrap items-center justify-center sm:justify-between gap-x-5 gap-y-1 text-xs text-[#71685F]"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <LocalizedLink to="/about" className={linkClass}>
                {footerCopy.about}
              </LocalizedLink>
              <LocalizedLink to="/contact" className={linkClass}>
                {footerCopy.contact}
              </LocalizedLink>
              <LocalizedLink to="/privacy" className={linkClass}>
                {footerCopy.privacy}
              </LocalizedLink>
              <LocalizedLink to="/terms" className={linkClass}>
                {footerCopy.terms}
              </LocalizedLink>
              <button
                type="button"
                onClick={openPreferences}
                className={`${linkClass} cursor-pointer bg-transparent border-0 p-0 font-inherit`}
              >
                {footerCopy.cookieSettings}
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <LocalizedLink to="/blog" className={linkClass}>
                {t('common.blog')}
              </LocalizedLink>
              <a href="/sitemap.xml" className={linkClass}>
                {t('common.sitemap')}
              </a>
            </div>
          </nav>
        </div>
      </footer>
    );
  }

  return (
    <footer
      className={`mt-12 pt-6 border-t border-[#E9D8C8]/70 flex flex-col lg:flex-row items-center justify-between text-xs text-[#71685F] gap-4 ${className}`}
    >
      <p className="text-center lg:text-start">
        © {year} Moroccan Mate · {t('common.independentGuide')}
      </p>

      <nav
        aria-label="Footer navigation"
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5"
      >
        <LocalizedLink to="/about" className={linkClass}>
          {footerCopy.about}
        </LocalizedLink>
        <LocalizedLink to="/contact" className={linkClass}>
          {footerCopy.contact}
        </LocalizedLink>
        <LocalizedLink to="/privacy" className={linkClass}>
          {footerCopy.privacy}
        </LocalizedLink>
        <LocalizedLink to="/terms" className={linkClass}>
          {footerCopy.terms}
        </LocalizedLink>
        <button
          type="button"
          onClick={openPreferences}
          className={`${linkClass} cursor-pointer bg-transparent border-0 p-0 font-inherit`}
        >
          {footerCopy.cookieSettings}
        </button>
        <span aria-hidden="true" className="text-[#D6CEBE] hidden sm:inline">
          ·
        </span>
        <LocalizedLink to="/blog" className={linkClass}>
          {t('common.blog')}
        </LocalizedLink>
        <LocalizedLink to="/eat/marrakech/near-me" className={linkClass}>
          {t('common.nearMe')}
        </LocalizedLink>
        <a href="/sitemap.xml" className={linkClass}>
          {t('common.sitemap')}
        </a>
      </nav>
    </footer>
  );
};
