import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Search,
  X,
  MapPin,
  UtensilsCrossed,
  BedDouble,
  ShoppingBag,
  Compass,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLangPath } from '../../utils/localeRouting';
import type { HomeSearchKind, HomeSearchResult } from '../../utils/homeSearch';

type SearchFn = (query: string, limit?: number) => HomeSearchResult[];
let searchLoaderPromise: Promise<SearchFn> | null = null;

function loadSearchCatalogFn(): Promise<SearchFn> {
  if (!searchLoaderPromise) {
    searchLoaderPromise = import('../../utils/homeSearch').then((mod) => mod.searchHomeCatalog);
  }
  return searchLoaderPromise;
}

interface HomeSearchBarProps {
  onSelectCity?: (cityId: string) => void;
}

const KIND_ICON: Record<HomeSearchKind, React.ReactNode> = {
  city: <MapPin className="w-4 h-4 text-[#C9A84C]" />,
  food: <UtensilsCrossed className="w-4 h-4 text-[#C2613C]" />,
  sleep: <BedDouble className="w-4 h-4 text-[#8A6D1F]" />,
  shopping: <ShoppingBag className="w-4 h-4 text-[#B84F18]" />,
  things: <Compass className="w-4 h-4 text-[#234E35]" />,
  guide: <BookOpen className="w-4 h-4 text-[#71685F]" />,
};

export const HomeSearchBar: React.FC<HomeSearchBarProps> = ({ onSelectCity }) => {
  const { t } = useTranslation();
  const { navigateLang } = useLangPath();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIdx, setHighlightedIdx] = useState<number>(0);
  const [searchFn, setSearchFn] = useState<SearchFn | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const ensureSearchLoaded = () => {
    if (searchFn) return;
    loadSearchCatalogFn().then((fn) => {
      setSearchFn(() => fn);
    }).catch(() => {
      // ignore transient chunk load errors
    });
  };

  useEffect(() => {
    if (query.trim().length > 0 && !searchFn) {
      ensureSearchLoaded();
    }
  }, [query, searchFn]);

  const results = useMemo(() => {
    if (!query.trim() || !searchFn) return [];
    return searchFn(query, 8);
  }, [query, searchFn]);
  const showDropdown = isOpen && query.trim().length > 0;

  useEffect(() => {
    setHighlightedIdx(0);
  }, [query]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const kindLabel = (kind: HomeSearchKind): string => {
    switch (kind) {
      case 'city':
        return t('home.searchKinds.city');
      case 'food':
        return t('home.searchKinds.food');
      case 'sleep':
        return t('home.searchKinds.sleep');
      case 'shopping':
        return t('home.searchKinds.shopping');
      case 'things':
        return t('home.searchKinds.things');
      case 'guide':
        return t('home.searchKinds.guide');
    }
  };

  const handleSelectResult = (item: HomeSearchResult) => {
    setIsOpen(false);
    setQuery('');
    if (item.kind === 'city' && onSelectCity) {
      onSelectCity(item.cityId);
      return;
    }
    navigateLang(item.url);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || results.length === 0) {
      if (e.key === 'Escape') setIsOpen(false);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIdx((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIdx((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = results[highlightedIdx] || results[0];
      if (target) handleSelectResult(target);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-[680px] mx-auto z-30">
      <div className="relative flex items-center bg-[#FFFDF9]/95 backdrop-blur-sm border border-[#E2D3C1] focus-within:border-[#C9A84C] focus-within:ring-2 focus-within:ring-[#C9A84C]/25 rounded-full shadow-[0_6px_24px_rgba(60,40,25,0.08)] transition-all">
        <Search className="w-4 h-4 text-[#8C6D3F] ml-4 rtl:ml-0 rtl:mr-4 shrink-0" aria-hidden="true" />
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={showDropdown}
          aria-autocomplete="list"
          aria-label={t('home.searchPlaceholder')}
          placeholder={t('home.searchPlaceholder')}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            ensureSearchLoaded();
            setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          data-testid="home-search-input"
          className="w-full bg-transparent px-3 py-2.5 sm:py-3 text-sm font-sans text-[#29231F] placeholder:text-[#8A7F73] focus:outline-none min-w-0"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            aria-label={t('common.clear', 'Clear search')}
            className="mr-3 rtl:mr-0 rtl:ml-3 p-1 rounded-full text-[#71685F] hover:text-[#29231F] hover:bg-[#F3ECE2] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {showDropdown && (
        <div
          role="listbox"
          data-testid="home-search-results"
          className="absolute left-0 right-0 mt-2 rounded-2xl border border-[#E5DDD0] bg-[#FFFDF9] shadow-[0_18px_46px_rgba(41,35,31,0.16)] overflow-hidden text-left rtl:text-right z-50"
        >
          {!searchFn ? (
            <div className="px-4 py-5 text-center text-xs text-[#71685F]">
              {t('common.loading', 'Searching Morocco places...')}
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-5 text-center text-xs text-[#71685F]">
              {t('home.searchEmpty', { query })}
            </div>
          ) : (
            <ul className="divide-y divide-[#F0E8DB] max-h-[340px] overflow-y-auto">
              {results.map((item, idx) => {
                const isActive = idx === highlightedIdx;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() => setHighlightedIdx(idx)}
                      onClick={() => handleSelectResult(item)}
                      className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-left rtl:text-right transition-colors cursor-pointer ${
                        isActive ? 'bg-[#FAF3EA]' : 'hover:bg-[#FAF7F2]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-8 h-8 rounded-full bg-white border border-[#EAE2D5] flex items-center justify-center shrink-0">
                          {KIND_ICON[item.kind]}
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[#29231F] truncate">
                            {item.title}
                          </p>
                          <p className="text-xs text-[#71685F] truncate">
                            <span>{kindLabel(item.kind)}</span>
                            <span aria-hidden="true" className="mx-1.5">·</span>
                            <span>{item.subtitle}</span>
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#9A8F82] shrink-0" aria-hidden="true" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeSearchBar;
