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
import type { EatMenu, MenuItem } from '../../listings/types';
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
  const hasManualLangRef = useRef(false);

  // Default to 'accordion' so ALL menu sections & dishes render inline in HTML DOM
  const [viewMode, setViewMode] = useState<'accordion' | 'booklet'>('accordion');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [glossaryEntry, setGlossaryEntry] = useState<MoroccanDishGlossaryEntry | null>(null);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const sections = menu?.sections || [];
  const hasSections = sections.length > 0;

  // All sections start expanded so visitors & search engines read every item inline
  const [collapsedIds, setCollapsedIds] = useState<Set<string>>(() => new Set());

  // Sync menu language with route language when navigating (/en -> en, /es -> es, /de -> de, /ar -> ar)
  useEffect(() => {
    if (hasManualLangRef.current) return;
    const mapped: MenuLanguage =
      routeLang === 'es' || routeLang === 'de' || routeLang === 'ar' ? routeLang : 'en';
    if (menuLanguage !== mapped) {
      setMenuLanguage(mapped);
    }
  }, [routeLang, menuLanguage, setMenuLanguage]);

  // Reset collapsed accordion sections when switching restaurants
  useEffect(() => {
    setCollapsedIds(new Set());
    setActiveCategory('all');
  }, [restaurantId]);

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
          title: getLocalizedSectionTitle(section, menuLanguage),
          description: getLocalizedSectionDescription(section, menuLanguage),
          items: filteredItems,
        };
      })
      .filter(Boolean) as typeof sections;
  }, [sections, dietaryFilter, searchQuery, hasSections, highlightedDishes, menuLanguage]);

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
              Verified Menu &amp; Prices
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
                title="Filter by Highly Recommended Plates"
              >
                <span>★ {recommendedCount} Highly Recommended</span>
              </button>
            )}
            {menu?.lastUpdated && (
              <span className="text-[11px] text-stone-500 font-medium ml-auto">
                {menu.lastUpdated}
              </span>
            )}
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {restaurantName} Menu &amp; Prices
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
            All {totalDishCount} dishes listed inline with verified Moroccan Dirham (MAD) prices. Signature favorites are marked <span className="font-bold text-[#C2613C]">★ Recommended</span>. Tap <span className="font-bold text-[#D4863A]">(+)</span> to build your tasting list.
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
              placeholder="Filter dishes..."
              className="w-full pl-8 pr-7 py-1.5 rounded-full bg-stone-100/70 border border-transparent hover:border-stone-200 focus:bg-white focus:border-stone-300 text-xs text-stone-800 placeholder-stone-400 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear filter"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
            {/* View Mode Switcher: Full Accordion (default) vs Classical Booklet */}
            <div className="flex items-center bg-stone-100/90 p-0.5 rounded-full border border-stone-200/60 shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode('accordion')}
                title="Full expandable menu list view"
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  viewMode === 'accordion'
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <LayoutList className="w-3 h-3" />
                <span>Full Menu</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('booklet')}
                title="Classical printed menu booklet view"
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  viewMode === 'booklet'
                    ? 'bg-amber-900 text-amber-50 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <BookOpen className="w-3 h-3 text-amber-400" />
                <span>Booklet</span>
              </button>
            </div>

            {/* Translation Language Selector */}
            <div className="flex items-center gap-1 bg-stone-100/90 p-0.5 rounded-full border border-stone-200/60 shadow-2xs">
              <span className="text-[10px] font-bold text-stone-500 pl-2 pr-0.5 flex items-center gap-1">
                <Languages className="w-3 h-3 text-rose-600" />
                <span className="hidden md:inline text-[9px] uppercase tracking-wider text-stone-400">Lang:</span>
              </span>
              {MENU_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    hasManualLangRef.current = true;
                    setMenuLanguage(lang.code);
                  }}
                  title={`Display dish descriptions in ${lang.label}`}
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
                { id: 'all', label: 'All' },
                {
                  id: 'signature',
                  label: `★ Recommended${recommendedCount > 0 ? ` (${recommendedCount})` : ''}`,
                },
                { id: 'vegetarian', label: '🌱 Veg' },
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
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                All Sections ({totalDishCount})
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
                  {getLocalizedSectionTitle(sec, menuLanguage)} ({sec.items.length})
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
                  {collapsedIds.size > 0 ? 'Expand all' : 'Collapse all'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {hasSections ? (
        viewMode === 'booklet' ? (
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
              <p>No dishes found matching your current filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setDietaryFilter('all');
                }}
                className="mt-2 text-[#D4863A] hover:underline font-bold cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )
        ) : (
          <div className="space-y-4">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => {
                const isOpen = !collapsedIds.has(section.id);
                const sectionTitle = getLocalizedSectionTitle(section, menuLanguage);
                const sectionDesc = getLocalizedSectionDescription(section, menuLanguage);
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
                            ({section.items.length} {section.items.length === 1 ? 'item' : 'items'})
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
              })
            ) : (
              <div className="py-12 text-center text-stone-500 text-xs">
                <p>No dishes found matching your current filter.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setDietaryFilter('all');
                    setActiveCategory('all');
                  }}
                  className="mt-2 text-[#D4863A] hover:underline font-bold cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        )
      ) : (
        /* Honest Fallback for venues where menu digitization is pending */
        <div className="py-12 text-center space-y-3">
          <BookOpen className="w-6 h-6 text-stone-400 mx-auto" />
          <h3 className="font-serif text-base font-bold text-stone-800">
            Digital Menu Pending Verification
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            We confirm live prices before publishing. View diner photos of the printed menu on Google Maps.
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
                <span>Photos on Google Maps</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>
            )}
            <button
              type="button"
              onClick={() => setIsReservationOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold hover:bg-stone-200 transition-colors cursor-pointer"
            >
              <CalendarCheck className="w-3 h-3 text-[#D4863A]" />
              <span>Reservations</span>
            </button>
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
