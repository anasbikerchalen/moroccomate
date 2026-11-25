import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  UtensilsCrossed,
  Search,
  BookOpen,
  CalendarCheck,
  MapPin,
  ExternalLink,
  Languages,
  LayoutList,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  ZoomIn,
  X,
} from 'lucide-react';
import MenuItemCard from './MenuItemCard';
import ClassicalMenuBooklet from './ClassicalMenuBooklet';
import MoroccanGlossaryModal from './MoroccanGlossaryModal';
import MenuReservationModal from './MenuReservationModal';
import TastingSelectionBar from './TastingSelectionBar';
import { useTastingStore, type CurrencyCode } from '../../state/tastingStore';
import {
  MENU_LANGUAGES,
  getLocalizedSectionTitle,
  getLocalizedSectionDescription,
  type MenuLanguage,
} from '../../data/menuTranslations';
import { useAppLanguage } from '../../utils/localeRouting';
import { getPlaceUiCopy } from '../../data/placeUiI18n';
import type { EatMenu, MenuItem, MenuPhoto } from '../../listings/types';
import type { MoroccanDishGlossaryEntry } from '../../data/culinaryGlossary';

interface InteractiveRestaurantMenuProps {
  menu?: EatMenu;
  restaurantId: string;
  restaurantName: string;
  city: string;
  primaryCuisine?: string;
  reservationContact?: string;
  whatsappNumber?: string;
  bookingUrl?: string;
  website?: string;
  googleMapsUrl?: string;
  bestTimeToVisit?: string;
  averageWaitMinutes?: number;
  paymentMethods?: string[];
  directionsUrl?: string;
  isStandalonePage?: boolean;
  highlightedDishes?: string[];
}

const isDishHighlighted = (dish: MenuItem, highlightedDishes: string[] = []) => {
  if (dish.isSignature) return true;
  if (!highlightedDishes || highlightedDishes.length === 0) return false;
  const nameLower = dish.name.toLowerCase().trim();
  return highlightedDishes.some((h) => {
    const hLower = h.toLowerCase().trim();
    return nameLower.includes(hLower) || hLower.includes(nameLower);
  });
};

export default function InteractiveRestaurantMenu({
  menu,
  restaurantId,
  restaurantName,
  city,
  reservationContact = '',
  whatsappNumber = '',
  bookingUrl = '',
  website = '',
  googleMapsUrl = '',
  bestTimeToVisit = '',
  averageWaitMinutes,
  paymentMethods = [],
  directionsUrl = '',
  isStandalonePage = false,
  highlightedDishes = [],
}: InteractiveRestaurantMenuProps) {
  const { currency, setCurrency, menuLanguage, setMenuLanguage } = useTastingStore();
  const routeLang = useAppLanguage();
  const ui = getPlaceUiCopy(routeLang);
  const [hasManualLang, setHasManualLang] = useState(false);

  const sections = menu?.sections || [];
  const hasSections = sections.length > 0;

  const menuPhotos: MenuPhoto[] = useMemo(() => {
    const structured = Array.isArray(menu?.menuPhotos) ? menu.menuPhotos : [];
    if (structured.length > 0) return structured;
    const legacy = Array.isArray(menu?.scannedMenuPhotos) ? menu.scannedMenuPhotos : [];
    return legacy.map((url, idx) => ({
      url,
      pageNumber: idx + 1,
      title: `${restaurantName} — ${ui.menu.menuPageFallback(idx + 1)}`,
      alt: `${restaurantName} (${city}) — ${ui.menu.menuPageFallback(idx + 1)}`,
      caption: ui.menu.menuPageFallback(idx + 1),
    }));
  }, [menu?.menuPhotos, menu?.scannedMenuPhotos, restaurantName, city, ui]);
  const hasMenuPhotos = menuPhotos.length > 0;

  const [viewMode, setViewMode] = useState<'accordion' | 'booklet' | 'images'>(() =>
    (Array.isArray(menu?.menuPhotos) && menu.menuPhotos.length > 0) ||
    (Array.isArray(menu?.scannedMenuPhotos) && menu.scannedMenuPhotos.length > 0)
      ? 'images'
      : 'accordion'
  );
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [glossaryEntry, setGlossaryEntry] = useState<MoroccanDishGlossaryEntry | null>(null);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAllSections, setShowAllSections] = useState(false);

  // All sections start expanded so visitors & search engines read every item inline
  const [collapsedIds, setCollapsedIds] = useState<Set<string>>(() => new Set());

  // Sync menu language with route language when navigating (/en -> en, /es -> es, /de -> de, /ar -> ar)
  useEffect(() => {
    if (hasManualLang) return;
    const mapped: MenuLanguage =
      routeLang === 'es' || routeLang === 'de' || routeLang === 'ar' ? routeLang : 'en';
    if (menuLanguage !== mapped) {
      setMenuLanguage(mapped);
    }
  }, [routeLang, menuLanguage, setMenuLanguage, hasManualLang]);

  // Reset collapsed accordion sections when switching restaurants
  useEffect(() => {
    setCollapsedIds(new Set());
    setActiveCategory('all');
    setViewMode(hasMenuPhotos ? 'images' : 'accordion');
    setLightboxIndex(null);
    setShowAllSections(false);
  }, [restaurantId, hasMenuPhotos]);

  // Lightbox keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null || menuPhotos.length === 0) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      else if (e.key === 'ArrowRight') setLightboxIndex((i) => (i === null ? null : (i + 1) % menuPhotos.length));
      else if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i === null ? null : (i - 1 + menuPhotos.length) % menuPhotos.length));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, menuPhotos.length]);

  const toggleSectionOpen = (sectionId: string) => {
    setCollapsedIds((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) next.delete(sectionId);
      else next.add(sectionId);
      return next;
    });
  };

  const expandAll = () => setCollapsedIds(new Set());
  const collapseAll = () => setCollapsedIds(new Set(sections.map((s) => s.id)));

  // Count how many dishes are marked as signature or in the recommended plates list
  const recommendedCount = useMemo(() => {
    return sections.reduce((acc, sec) => {
      return acc + sec.items.filter((item) => isDishHighlighted(item, highlightedDishes)).length;
    }, 0);
  }, [sections, highlightedDishes]);

  // Total dish count across all sections
  const totalDishCount = useMemo(() => {
    return sections.reduce((acc, s) => acc + s.items.length, 0);
  }, [sections]);

  const keepFrenchHeadings = routeLang === 'fr' && !hasManualLang && menuLanguage === 'en';

  // Booklet filtered sections
  const bookletSections = useMemo(() => {
    if (!hasSections) return [];
    return sections
      .map((section) => {
        const filteredItems = section.items.filter((item) => {
          if (dietaryFilter === 'signature' && !isDishHighlighted(item, highlightedDishes)) return false;
          if (dietaryFilter === 'vegetarian' && !item.dietary?.includes('vegetarian')) return false;
          if (dietaryFilter === 'vegan' && !item.dietary?.includes('vegan')) return false;
          if (dietaryFilter === 'gluten-free' && !item.dietary?.includes('gluten-free')) return false;

          if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            const matchesName = item.name.toLowerCase().includes(q) || (item.nameEn || '').toLowerCase().includes(q);
            const matchesDesc =
              (item.description || '').toLowerCase().includes(q) ||
              (item.translations?.en || '').toLowerCase().includes(q);
            const matchesLocal = (item.localName || '').toLowerCase().includes(q);
            if (!matchesName && !matchesDesc && !matchesLocal) return false;
          }
          return true;
        });
        if (filteredItems.length === 0) return null;
        return {
          ...section,
          title: keepFrenchHeadings ? section.title : getLocalizedSectionTitle(section, menuLanguage),
          description: keepFrenchHeadings
            ? section.description || ''
            : getLocalizedSectionDescription(section, menuLanguage),
          items: filteredItems,
        };
      })
      .filter(Boolean) as typeof sections;
  }, [sections, dietaryFilter, searchQuery, hasSections, highlightedDishes, menuLanguage, keepFrenchHeadings]);

  // Inline Accordion filtered sections
  const filteredSections = useMemo(() => {
    if (!hasSections) return [];
    return sections
      .map((section) => {
        if (activeCategory !== 'all' && section.id !== activeCategory) {
          return null;
        }
        const filteredItems = section.items.filter((item) => {
          if (dietaryFilter === 'signature' && !isDishHighlighted(item, highlightedDishes)) return false;
          if (dietaryFilter === 'vegetarian' && !item.dietary?.includes('vegetarian')) return false;
          if (dietaryFilter === 'vegan' && !item.dietary?.includes('vegan')) return false;
          if (dietaryFilter === 'gluten-free' && !item.dietary?.includes('gluten-free')) return false;

          if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            const matchesName = item.name.toLowerCase().includes(q) || (item.nameEn || '').toLowerCase().includes(q);
            const matchesDesc =
              (item.description || '').toLowerCase().includes(q) ||
              (item.translations?.en || '').toLowerCase().includes(q);
            const matchesLocal = (item.localName || '').toLowerCase().includes(q);
            if (!matchesName && !matchesDesc && !matchesLocal) return false;
          }
          return true;
        });
        if (filteredItems.length === 0) return null;
        return {
          ...section,
          items: filteredItems,
        };
      })
      .filter(Boolean) as typeof sections;
  }, [sections, activeCategory, dietaryFilter, searchQuery, hasSections, highlightedDishes]);

  return (
    <section className={isStandalonePage ? 'pt-1' : 'mt-10 pt-8 border-t border-stone-200'} id="restaurant-menu-section">
      {/* Title on Main Listing Page */}
      {!isStandalonePage && (
        <div className="pb-4 mb-4 border-b border-stone-200">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-500/15 text-[#C2613C] border border-amber-500/25">
              <UtensilsCrossed className="w-3.5 h-3.5" />
              {ui.menu.verifiedMenuPrices}
            </span>
            {recommendedCount > 0 && (
              <button
                type="button"
                onClick={() => setDietaryFilter(dietaryFilter === 'signature' ? 'all' : 'signature')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer border ${
                  dietaryFilter === 'signature'
                    ? 'bg-[#C2613C] text-white border-[#C2613C] shadow-2xs'
                    : 'bg-amber-500/10 hover:bg-amber-500/20 text-[#A0522D] border-amber-500/25'
                }`}
                title={ui.menu.highlyRecommendedFilterTitle}
              >
                <span>{ui.menu.highlyRecommendedCount(recommendedCount)}</span>
              </button>
            )}
            {menu?.lastUpdated && (
              <span className="text-[11px] text-stone-500 font-medium ms-auto">
                {menu.lastUpdated}
              </span>
            )}
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {ui.menu.menuAndPricesTitle(restaurantName)}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
            {ui.menu.menuIntroPrefix(totalDishCount)}
            <span className="font-bold text-[#C2613C]">{ui.menu.recommendedCue}</span>
            {ui.menu.menuIntroMiddle}
            <span className="font-bold text-[#D4863A]">(+)</span>
            {ui.menu.menuIntroSuffix}
          </p>
        </div>
      )}

      {/* Sleek inline control bar: Search + View Mode + Language + Currency + Dietary */}
      <div className="space-y-3 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          {/* Quick Search */}
          <div className="relative flex-1 max-w-xs">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={ui.menu.filterDishesPlaceholder}
              className="w-full pl-8 pr-7 py-1.5 rounded-full bg-stone-100/70 border border-transparent hover:border-stone-200 focus:bg-white focus:border-stone-300 text-xs text-stone-800 placeholder-stone-400 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label={ui.menu.clearFilter}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Controls - Side-scrollable horizontally */}
          <div
            onWheel={(e) => {
              if (e.currentTarget && e.deltaY !== 0) {
                e.currentTarget.scrollLeft += e.deltaY;
                e.preventDefault();
              }
            }}
            className="flex items-center gap-2 self-start sm:self-auto overflow-x-auto whitespace-nowrap flex-nowrap scrollbar-none py-1 max-w-full touch-pan-x overscroll-x-contain"
          >
            {/* View Mode Switcher: Full Accordion vs Classical Booklet vs Menu Images */}
            <div className="flex items-center bg-stone-100/90 p-0.5 rounded-full border border-stone-200/60 shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode('accordion')}
                title={ui.menu.fullMenuTitle}
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  viewMode === 'accordion'
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <LayoutList className="w-3 h-3" />
                <span>{ui.menu.fullMenu}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('booklet')}
                title={ui.menu.bookletTitle}
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  viewMode === 'booklet'
                    ? 'bg-amber-900 text-amber-50 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <BookOpen className="w-3 h-3 text-amber-400" />
                <span>{ui.menu.booklet}</span>
              </button>
              {hasMenuPhotos && (
                <button
                  type="button"
                  onClick={() => setViewMode('images')}
                  title={ui.menu.imagesTitle}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    viewMode === 'images'
                      ? 'bg-[#C2613C] text-white shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <ImageIcon className="w-3 h-3" />
                  <span>{ui.menu.imagesCount(menuPhotos.length)}</span>
                </button>
              )}
            </div>

            {/* Translation Language Selector */}
            <div className="flex items-center gap-1 bg-stone-100/90 p-0.5 rounded-full border border-stone-200/60 shadow-2xs">
              <span className="text-[10px] font-bold text-stone-500 pl-2 pr-0.5 flex items-center gap-1">
                <Languages className="w-3 h-3 text-rose-600" />
                <span className="hidden md:inline text-[9px] uppercase tracking-wider text-stone-400">{ui.menu.langLabel}</span>
              </span>
              {MENU_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setHasManualLang(true);
                    setMenuLanguage(lang.code);
                  }}
                  title={ui.menu.displayDishInLang(lang.label)}
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    menuLanguage === lang.code
                      ? lang.code === 'en'
                        ? 'bg-stone-900 text-white shadow-2xs'
                        : 'bg-rose-600 text-white shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {lang.nativeLabel}
                </button>
              ))}
            </div>

            {/* Currency switcher */}
            <div className="flex items-center bg-stone-100/80 p-0.5 rounded-full border border-stone-200/50">
              {(['MAD', 'EUR', 'USD'] as CurrencyCode[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCurrency(c)}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                    currency === c
                      ? 'bg-stone-900 text-white shadow-2xs'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Dietary quick filter */}
            <div className="flex items-center gap-0.5 bg-stone-100/80 p-0.5 rounded-full border border-stone-200/50">
              {[
                { id: 'all', label: ui.menu.all },
                {
                  id: 'signature',
                  label: ui.menu.recommendedShort(recommendedCount),
                },
                { id: 'vegetarian', label: ui.menu.vegShort },
              ].map((pill) => (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => setDietaryFilter(pill.id)}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
                    dietaryFilter === pill.id
                      ? 'bg-amber-900 text-amber-50 shadow-2xs font-bold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section Jump Pills + Expand/Collapse All (shown in Full Menu accordion view) */}
        {hasSections && viewMode === 'accordion' && (
          <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-stone-200/70">
            <div
              onWheel={(e) => {
                if (e.currentTarget && e.deltaY !== 0) {
                  e.currentTarget.scrollLeft += e.deltaY;
                  e.preventDefault();
                }
              }}
              className="flex items-center gap-1.5 overflow-x-auto flex-nowrap pb-1 scrollbar-none touch-pan-x overscroll-x-contain"
            >
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                {ui.menu.allSections(totalDishCount)}
              </button>
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setActiveCategory(sec.id)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                    activeCategory === sec.id
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {keepFrenchHeadings ? sec.title : getLocalizedSectionTitle(sec, menuLanguage)} ({sec.items.length})
                </button>
              ))}
            </div>
            {sections.length > 1 && (
              <div className="hidden sm:flex items-center gap-2 shrink-0 text-[11px] font-semibold text-stone-500">
                <button
                  type="button"
                  onClick={collapsedIds.size > 0 ? expandAll : collapseAll}
                  className="hover:text-stone-900 underline-offset-2 hover:underline cursor-pointer"
                >
                  {collapsedIds.size > 0 ? ui.menu.expandAll : ui.menu.collapseAll}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {hasMenuPhotos && viewMode === 'images' ? (
        <div className="space-y-6" aria-label={ui.menu.printedMenuPages(restaurantName, menuPhotos.length)}>
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#E8DFCF] bg-[#FAF6EE]/80 px-4 py-3">
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                {ui.menu.printedMenuPages(restaurantName, menuPhotos.length)}
              </h3>
              <p className="text-xs text-stone-600">
                {ui.menu.tapPageCard}
              </p>
            </div>
            <span className="text-[11px] font-mono font-bold text-amber-900 bg-amber-500/15 border border-amber-500/30 px-2.5 py-1 rounded-full">
              {ui.menu.pricesInMad}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuPhotos.map((photo, idx) => (
              <figure
                key={photo.url}
                className="group rounded-2xl border border-[#E8DFCF] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className="relative block w-full bg-stone-100 overflow-hidden cursor-zoom-in text-left"
                  aria-label={ui.menu.zoomPageAria(photo.title || ui.menu.menuPageFallback(idx + 1))}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    title={photo.title}
                    width={photo.width}
                    height={photo.height}
                    loading={idx < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-900/85 text-white text-[11px] font-bold backdrop-blur-xs">
                    {ui.menu.pageOf(photo.pageNumber || idx + 1, menuPhotos.length)}
                  </span>
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-stone-900 text-[11px] font-bold shadow-xs opacity-90 group-hover:opacity-100">
                    <ZoomIn className="w-3.5 h-3.5 text-[#C2613C]" />
                    <span>{ui.menu.zoom}</span>
                  </span>
                </button>
                {(photo.title || photo.caption) && (
                  <figcaption className="px-4 py-3 border-t border-[#F0E8DA] bg-[#FDFBF7]">
                    {photo.title && (
                      <div className="text-xs font-bold text-stone-900">{photo.title}</div>
                    )}
                    {photo.caption && (
                      <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                        {photo.caption}
                      </p>
                    )}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      ) : hasSections ? (
        <>
          {viewMode === 'booklet' ? (
            bookletSections.length > 0 ? (
              <ClassicalMenuBooklet
                sections={bookletSections}
                restaurantName={restaurantName}
                restaurantId={restaurantId}
                city={city}
                highlightedDishes={highlightedDishes}
                onOpenGlossary={setGlossaryEntry}
              />
            ) : (
              <div className="py-12 text-center text-stone-500 text-xs bg-[#FAF6EF]/60 rounded-2xl border border-stone-200/80 p-6">
                <p>{ui.menu.noDishesFound}</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setDietaryFilter('all');
                  }}
                  className="mt-2 text-[#D4863A] hover:underline font-bold cursor-pointer"
                >
                  {ui.menu.resetFilters}
                </button>
              </div>
            )
          ) : (() => {
            const isUnfiltered = activeCategory === 'all' && !searchQuery.trim() && dietaryFilter === 'all';
            const isTruncatedOnListing = !isStandalonePage && !showAllSections && isUnfiltered && filteredSections.length > 2;
            const visibleSections = isTruncatedOnListing ? filteredSections.slice(0, 2) : filteredSections;
            const hiddenSectionsCount = isTruncatedOnListing ? filteredSections.length - 2 : 0;
            const hiddenDishesCount = isTruncatedOnListing
              ? filteredSections.slice(2).reduce((sum, s) => sum + s.items.length, 0)
              : 0;
            const canShowLess = !isStandalonePage && showAllSections && isUnfiltered && filteredSections.length > 2;

            return (
              <div className="space-y-4">
                {visibleSections.length > 0 ? (
                  <>
                    {visibleSections.map((section) => {
                      const isOpen = !collapsedIds.has(section.id);
                      const sectionTitle = keepFrenchHeadings
                        ? section.title
                        : getLocalizedSectionTitle(section, menuLanguage);
                      const sectionDesc = keepFrenchHeadings
                        ? section.description || ''
                        : getLocalizedSectionDescription(section, menuLanguage);
                      return (
                        <div
                          key={section.id}
                          id={`menu-section-${section.id}`}
                          className="rounded-2xl border border-[#E8DFCF] bg-[#FDFBF7]/75 overflow-hidden"
                        >
                          {/* Collapsible Section Header */}
                          <button
                            type="button"
                            onClick={() => toggleSectionOpen(section.id)}
                            aria-expanded={isOpen}
                            className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 text-left bg-[#FAF6EE]/80 hover:bg-[#F5EFE2] transition-colors cursor-pointer border-b border-[#E8DFCF]/70"
                          >
                            <div className="min-w-0">
                              <div className="flex items-center gap-2.5 flex-wrap">
                                <h3 className="font-serif text-base sm:text-lg font-bold tracking-tight text-stone-900">
                                  {sectionTitle}
                                </h3>
                                <span className="text-[11px] font-semibold text-stone-500 tabular-nums">
                                  ({ui.menu.itemCount(section.items.length)})
                                </span>
                              </div>
                              {sectionDesc && (
                                <p className="text-xs text-stone-600 mt-0.5 line-clamp-2">
                                  {sectionDesc}
                                </p>
                              )}
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {/* Dishes always remain mounted in DOM for instant search/crawlability, hidden visually when collapsed */}
                          <div className={isOpen ? 'px-4 sm:px-5 py-1.5 bg-white' : 'hidden'}>
                            <div className="divide-y-0">
                              {section.items.map((dish) => (
                                <MenuItemCard
                                  key={dish.id}
                                  dish={dish}
                                  placeId={restaurantId}
                                  placeName={restaurantName}
                                  city={city}
                                  highlightedDishes={highlightedDishes}
                                  onOpenGlossary={setGlossaryEntry}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {(isTruncatedOnListing || canShowLess) && (
                      <div className="pt-2 flex justify-center">
                        <button
                          type="button"
                          onClick={() => setShowAllSections((prev) => !prev)}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
                        >
                          {isTruncatedOnListing ? (
                            <>
                              <span>
                                {ui.menu.showMoreParts(hiddenSectionsCount, hiddenDishesCount)}
                              </span>
                              <ChevronDown className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              <span>{ui.menu.showLess}</span>
                              <ChevronDown className="w-4 h-4 rotate-180" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="py-12 text-center text-stone-500 text-xs">
                    <p>{ui.menu.noDishesFound}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        setDietaryFilter('all');
                        setActiveCategory('all');
                      }}
                      className="mt-2 text-[#D4863A] hover:underline font-bold cursor-pointer"
                    >
                      {ui.menu.resetFilters}
                    </button>
                  </div>
                )}
              </div>
            );
          })()}

          {/* Crawlable & Interactive Menu Photos Preview Strip */}
          {hasMenuPhotos && (
            <div className="mt-8 pt-6 border-t border-[#E8DFCF]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#C2613C]" />
                  <h3 className="font-serif text-base font-bold text-stone-900">
                    {ui.menu.originalMenuCardPhotos(menuPhotos.length)}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setViewMode('images')}
                  className="text-xs font-bold text-[#C2613C] hover:underline cursor-pointer"
                >
                  {ui.menu.openFullGallery}
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {menuPhotos.map((photo, idx) => (
                  <button
                    key={photo.url}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-[#E8DFCF] bg-stone-100 cursor-zoom-in text-left"
                    title={photo.title || ui.menu.menuPageFallback(idx + 1)}
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      title={photo.title}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-full bg-stone-900/80 text-white text-[10px] font-bold">
                      {ui.menu.pageShort(photo.pageNumber || idx + 1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        /* Honest Fallback for venues where menu digitization is pending */
        <div className="py-12 text-center space-y-3">
          <BookOpen className="w-6 h-6 text-stone-400 mx-auto" />
          <h3 className="font-serif text-base font-bold text-stone-800">
            {ui.menu.digitalMenuPending}
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            {ui.menu.pendingVerificationDesc}
          </p>

          <div className="flex items-center justify-center gap-2 pt-2">
            {directionsUrl && (
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer no-underline"
              >
                <MapPin className="w-3 h-3 text-amber-400" />
                <span>{ui.menu.photosOnGoogleMaps}</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>
            )}
            <button
              type="button"
              onClick={() => setIsReservationOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold hover:bg-stone-200 transition-colors cursor-pointer"
            >
              <CalendarCheck className="w-3 h-3 text-[#D4863A]" />
              <span>{ui.menu.reservations}</span>
            </button>
          </div>
        </div>
      )}

      {/* Menu Photo Lightbox Modal */}
      {lightboxIndex !== null && menuPhotos[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={menuPhotos[lightboxIndex].title || `${restaurantName} — ${ui.menu.menuPageFallback(lightboxIndex + 1)}`}
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-xs flex flex-col items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between gap-3 text-white mb-2 px-1">
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold truncate">
                  {menuPhotos[lightboxIndex].title || `${restaurantName} — ${ui.menu.pageShort(lightboxIndex + 1)}`}
                </p>
                {menuPhotos[lightboxIndex].caption && (
                  <p className="text-[11px] text-stone-300 truncate">
                    {menuPhotos[lightboxIndex].caption}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-mono text-stone-300">
                  {lightboxIndex + 1} / {menuPhotos.length}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  aria-label={ui.menu.closeImageViewer}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative w-full flex items-center justify-center">
              {menuPhotos.length > 1 && (
                <button
                  type="button"
                  onClick={() => setLightboxIndex((lightboxIndex - 1 + menuPhotos.length) % menuPhotos.length)}
                  aria-label={ui.menu.previousMenuPage}
                  className="absolute left-2 z-10 p-2 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white border border-white/15 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              <img
                src={menuPhotos[lightboxIndex].url}
                alt={menuPhotos[lightboxIndex].alt}
                className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl bg-white"
              />

              {menuPhotos.length > 1 && (
                <button
                  type="button"
                  onClick={() => setLightboxIndex((lightboxIndex + 1) % menuPhotos.length)}
                  aria-label={ui.menu.nextMenuPage}
                  className="absolute right-2 z-10 p-2 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white border border-white/15 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Tasting Selection Bar */}
      <TastingSelectionBar
        onOpenReservation={() => setIsReservationOpen(true)}
        restaurantName={restaurantName}
      />

      {/* Cultural Heritage Explainer Modal */}
      <MoroccanGlossaryModal
        entry={glossaryEntry}
        onClose={() => setGlossaryEntry(null)}
      />

      {/* Verified Reservation Dialog */}
      <MenuReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        restaurantName={restaurantName}
        city={city}
        reservationContact={reservationContact}
        whatsappNumber={whatsappNumber}
        bookingUrl={bookingUrl}
        website={website}
        googleMapsUrl={googleMapsUrl}
        bestTimeToVisit={bestTimeToVisit}
        averageWaitMinutes={averageWaitMinutes}
        paymentMethods={paymentMethods}
      />
    </section>
  );
}
