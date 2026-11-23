import React, { useState, lazy, Suspense } from 'react';
import { BookOpen, Compass, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../ui/LocalizedLink';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useSavedStore } from '../../state/savedStore';
import logoImg from '../../assets/images/logo.png';

const FavoritesDrawer = lazy(() => import('../finder/FavoritesDrawer'));

interface BroadsheetHeaderProps {
  active?: 'blog' | 'article';
}

export const BroadsheetHeader: React.FC<BroadsheetHeaderProps> = ({ active = 'blog' }) => {
  const { t } = useTranslation();
  const bookmarks = useSavedStore((state) => state.bookmarks);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [hasOpenedFavorites, setHasOpenedFavorites] = useState(false);

  const isBlogActive = active === 'blog' || active === 'article';

  return (
    <>
      <header className="relative z-40 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-4 md:pt-5 flex items-center justify-between gap-2">
        <LocalizedLink to="/" className="flex items-center gap-2.5 sm:gap-3 min-w-0 shrink-0 group">
          <img
            src={logoImg}
            alt="Moroccan Mate logo"
            className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 object-contain"
          />
          <div className="min-w-0">
            <p className="font-display text-base sm:text-lg md:text-xl font-semibold leading-none text-[#29231F] whitespace-nowrap group-hover:text-[#C85A32] transition-colors">
              Moroccan Mate
            </p>
            <p className="hidden sm:block font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-[#71685F] mt-1">
              {t('home.brandTagline')}
            </p>
          </div>
        </LocalizedLink>

        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <div className="hidden lg:flex items-center gap-2 mr-1">
            <span className="font-sans text-xs text-[#71685F]">{t('home.personalGuide')}</span>
          </div>

          <LanguageSwitcher compact />

          <LocalizedLink
            to="/blog"
            aria-current={active === 'blog' ? 'page' : undefined}
            className={`group relative flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full border shadow-xs hover:shadow-md transition-all duration-200 whitespace-nowrap shrink-0 ${
              isBlogActive
                ? 'bg-[#FAF3E0] border-[#C9A84C]/60'
                : 'bg-white/90 hover:bg-white border-[#EADBCE] hover:border-[#C9A84C]/50'
            }`}
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
                bookmarks.length > 0 ? 'text-[#C85A32] fill-[#C85A32]' : 'text-[#71685F] group-hover:text-[#C85A32]'
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

      {(favoritesOpen || hasOpenedFavorites) && (
        <Suspense fallback={null}>
          <FavoritesDrawer isOpen={favoritesOpen} onClose={() => setFavoritesOpen(false)} />
        </Suspense>
      )}
    </>
  );
};
