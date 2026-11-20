import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import i18next from '../../i18n';
import { useProfileStore } from '../../state/profileStore';
import {
  SUPPORTED_LANGS,
  LANG_META,
  extractLangFromPath,
  localizePath,
  type AppLanguage,
} from '../../utils/localeRouting';

interface LanguageSwitcherProps {
  compact?: boolean;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  compact = false,
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const setStoreLanguage = useProfileStore((s) => s.setLanguage);

  const { lang: currentLang, basePath } = extractLangFromPath(location.pathname);
  const currentMeta = LANG_META[currentLang];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (nextLang: AppLanguage) => {
    setOpen(false);
    if (nextLang === currentLang) return;

    i18next.changeLanguage(nextLang);
    setStoreLanguage(nextLang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = nextLang;
      document.documentElement.dir = LANG_META[nextLang].dir;
    }

    const nextUrl = `${localizePath(basePath, nextLang)}${location.search}${location.hash}`;
    navigate(nextUrl, { replace: false });
  };

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Choose language"
        title="Language / Langue / Idioma / Sprache / اللغة"
        className={`inline-flex items-center ${compact ? 'gap-1 px-2 py-1.5 sm:gap-1.5 sm:px-3' : 'gap-1.5 px-2.5 py-1.5 sm:px-3'} rounded-full bg-white/95 hover:bg-white border border-[#EADBCE] shadow-xs hover:shadow-md hover:border-[#C9A84C] transition-all duration-200 cursor-pointer text-[#29231F]`}
      >
        <Globe className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />
        <span className="font-sans text-xs font-bold tracking-wide">{currentMeta.shortCode}</span>
        {!compact && (
          <span className="hidden lg:inline font-sans text-xs text-[#71685F] font-medium">
            · {currentMeta.nativeLabel}
          </span>
        )}
        <ChevronDown
          className={`w-3 h-3 text-[#71685F] transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Language options"
          className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-44 rounded-2xl bg-[#FFFDF9] border border-[#EADBCE] shadow-[0_16px_40px_rgba(60,40,25,0.16)] py-1.5 z-50"
        >
          {SUPPORTED_LANGS.map((code) => {
            const meta = LANG_META[code];
            const isActive = code === currentLang;
            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => handleSelect(code)}
                dir={meta.dir}
                className={`w-full px-3.5 py-2 text-left rtl:text-right flex items-center justify-between text-xs font-sans transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#FAF3E0] text-[#173042] font-bold'
                    : 'text-[#29231F] hover:bg-[#FAF7F2] font-medium'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="inline-block w-6 text-[10px] font-bold uppercase tracking-wider text-[#C9A84C]">
                    {meta.shortCode}
                  </span>
                  <span>{meta.nativeLabel}</span>
                </span>
                {isActive && <Check className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
