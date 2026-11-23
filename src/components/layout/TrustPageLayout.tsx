import React, { useState, lazy, Suspense } from 'react';
import { BookOpen, Compass, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../ui/LocalizedLink';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { SiteFooter } from './SiteFooter';
import { useSavedStore } from '../../state/savedStore';
import { useLangPath } from '../../utils/localeRouting';
import { TRUST_PAGES_I18N } from '../../data/trustPagesI18n';
import logoImg from '../../assets/images/logo.png';

const FavoritesDrawer = lazy(() => import('../finder/FavoritesDrawer'));

export interface TocItem {
  id: string;
  title: string;
}

interface TrustPageLayoutProps {
  kicker: string;
  title: string;
  subtitle: string;
  metaLine: string;
  tocItems?: TocItem[];
  sidebarExtra?: React.ReactNode;
  children: React.ReactNode;
}

export const TrustPageLayout: React.FC<TrustPageLayoutProps> = ({
  kicker,
  title,
  subtitle,
  metaLine,
  tocItems,
  sidebarExtra,
  children,
}) => {
  const { t } = useTranslation();
  const { lang } = useLangPath();
  const bookmarks = useSavedStore((state) => state.bookmarks);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [hasOpenedFavorites, setHasOpenedFavorites] = useState(false);
  const footerCopy = TRUST_PAGES_I18N[lang].footer;

  const hasSidebar = Boolean((tocItems && tocItems.length > 0) || sidebarExtra);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#29231F] font-sans">
      {/* Top Bar */}
      <header className="relative z-40 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-4 md:pt-5 flex items-center justify-between gap-2">
        <LocalizedLink to="/" className="flex items-center gap-2.5 sm:gap-3 min-w-0 shrink-0 group">
          <img
            src={logoImg}
            alt="Moroccan Mate logo"
            className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 object-contain"
          />
          <span className="font-display text-base sm:text-lg md:text-xl font-semibold leading-none text-[#29231F] whitespace-nowrap group-hover:text-[#C85A32] transition-colors">
            Moroccan Mate
          </span>
        </LocalizedLink>

        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <LanguageSwitcher compact />

          <LocalizedLink
            to="/blog"
            className="group relative flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#EADBCE] shadow-xs hover:shadow-md hover:border-[#C9A84C]/50 transition-all duration-200 whitespace-nowrap shrink-0"
            title={t('common.blogTitle')}
          >
            <BookOpen className="w-4 h-4 text-[#C9A84C] shrink-0" />
            <span className="font-sans text-xs font-semibold text-[#29231F] hidden sm:inline">
              {t('common.blog')}
            </span>
          </LocalizedLink>

          <LocalizedLink
            to="/eat/marrakech/near-me"
            className="group relative flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#EADBCE] shadow-xs hover:shadow-md hover:border-[#EADBCE] transition-all duration-200 whitespace-nowrap shrink-0"
            title={t('common.nearMeTitle')}
          >
            <Compass className="w-4 h-4 text-[#C2613C] transition-transform group-hover:rotate-45 shrink-0" />
            <span className="font-sans text-xs font-semibold text-[#29231F] hidden sm:inline">
              {t('common.nearMe')}
            </span>
          </LocalizedLink>

          <button
            type="button"
            onClick={() => {
              setHasOpenedFavorites(true);
              setFavoritesOpen(true);
            }}
            className="group relative flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#EADBCE] shadow-xs hover:shadow-md hover:border-[#EADBCE] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
            aria-label={t('common.viewSaved')}
            title={t('common.viewSaved')}
          >
            <Heart
              className={`w-4 h-4 transition-transform group-hover:scale-110 shrink-0 ${
                bookmarks.length > 0
                  ? 'text-[#C85A32] fill-[#C85A32]'
                  : 'text-[#71685F] group-hover:text-[#C85A32]'
              }`}
            />
            <span className="font-sans text-xs font-semibold text-[#29231F] hidden sm:inline">
              {t('common.saved')}
            </span>
            {bookmarks.length > 0 && (
              <span className="bg-[#C9A84C] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center leading-none tabular-nums">
                {bookmarks.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-10 pt-8 sm:pt-12 pb-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#71685F] mb-6">
          <LocalizedLink to="/" className="hover:text-[#C85A32] transition-colors">
            {t('common.home')}
          </LocalizedLink>
          <span aria-hidden="true">/</span>
          <span className="text-[#29231F] font-medium">{title}</span>
        </nav>

        {/* Editorial Title Header */}
        <header className="pb-8 border-b border-[#EADBCE]">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#C85A32]">
            {kicker}
          </p>
          <h1 className="mt-2 font-display font-medium text-[32px] sm:text-[42px] md:text-[48px] leading-[1.08] tracking-tight text-[#29231F] text-balance max-w-3xl">
            {title}
          </h1>
          <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-[#625950] max-w-2xl">
            {subtitle}
          </p>
          <p className="mt-4 font-sans text-xs text-[#71685F]">{metaLine}</p>
        </header>

        {/* Reading Canvas */}
        <div
          className={`mt-8 ${
            hasSidebar
              ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start'
              : ''
          }`}
        >
          <div className={hasSidebar ? 'lg:col-span-8 min-w-0' : 'max-w-3xl'}>
            {children}
          </div>

          {hasSidebar && (
            <aside className="lg:col-span-4 lg:sticky lg:top-8 space-y-5">
              {tocItems && tocItems.length > 0 && (
                <div className="rounded-2xl border border-[#EADBCE] bg-[#FFFDF9] p-5">
                  <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#C85A32] pb-3 border-b border-[#EADBCE]/70">
                    {footerCopy.tocHeading}
                  </h2>
                  <nav aria-label={footerCopy.tocHeading} className="divide-y divide-[#EADBCE]/50">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block py-2.5 text-xs font-medium text-[#625950] hover:text-[#C85A32] transition-colors leading-snug"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
              {sidebarExtra}
            </aside>
          )}
        </div>

        <SiteFooter variant="editorial" />
      </main>

      {(favoritesOpen || hasOpenedFavorites) && (
        <Suspense fallback={null}>
          <FavoritesDrawer isOpen={favoritesOpen} onClose={() => setFavoritesOpen(false)} />
        </Suspense>
      )}
    </div>
  );
};
