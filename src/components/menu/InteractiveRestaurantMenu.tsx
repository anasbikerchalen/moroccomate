import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  UtensilsCrossed,
  Search,
  BookOpen,
  CalendarCheck,
  MapPin,
  ExternalLink,
  Languages,
  X
} from 'lucide-react';
import MenuItemCard from './MenuItemCard';
import MoroccanGlossaryModal from './MoroccanGlossaryModal';
import MenuReservationModal from './MenuReservationModal';
import TastingSelectionBar from './TastingSelectionBar';
import { useTastingStore, type CurrencyCode } from '../../state/tastingStore';
import { MENU_LANGUAGES } from '../../data/menuTranslations';
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
}

export default function InteractiveRestaurantMenu({
  menu,
  restaurantId,
  restaurantName,
  city,
  primaryCuisine = 'Moroccan',
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
}: InteractiveRestaurantMenuProps) {
  const { currency, setCurrency, menuLanguage, setMenuLanguage } = useTastingStore();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [glossaryEntry, setGlossaryEntry] = useState<MoroccanDishGlossaryEntry | null>(null);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const sections = menu?.sections || [];
  const hasSections = sections.length > 0;

  // Filter items based on active category, dietary preference, and search term
  const filteredSections = useMemo(() => {
    if (!hasSections) return [];

    return sections
      .map((section) => {
        if (activeCategory !== 'all' && section.id !== activeCategory) {
          return null;
        }

        const filteredItems = section.items.filter((item) => {
          if (dietaryFilter === 'signature' && !item.isSignature) return false;
          if (dietaryFilter === 'vegetarian' && !item.dietary?.includes('vegetarian')) return false;
          if (dietaryFilter === 'vegan' && !item.dietary?.includes('vegan')) return false;
          if (dietaryFilter === 'gluten-free' && !item.dietary?.includes('gluten-free')) return false;

          if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            const matchesName = item.name.toLowerCase().includes(q);
            const matchesDesc = (item.description || '').toLowerCase().includes(q);
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
  }, [sections, activeCategory, dietaryFilter, searchQuery, hasSections]);

  return (
    <section className={isStandalonePage ? 'pt-1' : 'mt-10 pt-8 border-t border-stone-200'} id="restaurant-menu-section">
      {/* Title on Main Listing Page */}
      {!isStandalonePage && (
        <div className="pb-4 mb-4 border-b border-stone-200">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-500/15 text-[#C2613C] border border-amber-500/25">
              <UtensilsCrossed className="w-3.5 h-3.5" />
              Verified Menu & Prices
            </span>
            {menu?.lastUpdated && (
              <span className="text-[11px] text-stone-500 font-medium">
                {menu.lastUpdated}
              </span>
            )}
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {restaurantName} Menu & Prices
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
            Prices in local Moroccan Dirhams (MAD). Tap <span className="font-bold text-[#D4863A]">(+)</span> on any dish to save to your personal tasting selection before reserving.
          </p>
        </div>
      )}

      {/* Sleek inline control bar: Search + Category + Currency */}
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
                onClick={() => setSearchQuery('')}
                aria-label="Clear filter"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Controls: Translation Language, Currency, & Dietary filters */}
          <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
            {/* Translation Language Selector */}
            <div className="flex items-center gap-1 bg-stone-100/90 p-0.5 rounded-full border border-stone-200/60 shadow-2xs">
              <span className="text-[10px] font-bold text-stone-500 pl-2 pr-0.5 flex items-center gap-1">
                <Languages className="w-3 h-3 text-rose-600" />
                <span className="hidden md:inline text-[9px] uppercase tracking-wider text-stone-400">Translate:</span>
              </span>
              {MENU_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setMenuLanguage(lang.code)}
                  title={`View red dish translations in ${lang.label}`}
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    menuLanguage === lang.code
                      ? 'bg-rose-600 text-white shadow-2xs'
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
                { id: 'signature', label: '★ Star' },
                { id: 'vegetarian', label: '🌱 Veg' },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setDietaryFilter(pill.id)}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
                    dietaryFilter === pill.id
                      ? 'bg-white text-stone-900 shadow-2xs font-bold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Minimalist category tab bar */}
        {hasSections && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b border-stone-100">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              All Items ({sections.reduce((acc, s) => acc + s.items.length, 0)})
            </button>
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveCategory(sec.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                  activeCategory === sec.id
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {hasSections ? (
        <div className="space-y-10">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <div key={section.id} className="space-y-1">
                {/* Editorial Section Header */}
                <div className="flex items-baseline justify-between pt-2 pb-1 border-b-2 border-stone-800">
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 uppercase">
                    {section.title}
                  </h3>
                  {section.description && (
                    <span className="text-xs text-stone-500 italic hidden sm:inline">
                      {section.description}
                    </span>
                  )}
                </div>

                {/* Printed Menu Style Item List */}
                <div className="divide-y-0">
                  {section.items.map((dish) => (
                    <MenuItemCard
                      key={dish.id}
                      dish={dish}
                      placeId={restaurantId}
                      placeName={restaurantName}
                      city={city}
                      onOpenGlossary={setGlossaryEntry}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-stone-500 text-xs">
              <p>No dishes found matching your current filter.</p>
              <button
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
