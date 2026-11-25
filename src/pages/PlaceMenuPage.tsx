import React, { useMemo, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, MapPin, ExternalLink, Globe, Instagram, Clock } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { LanguageSwitcher } from '../components/ui/LanguageSwitcher';
import { LocalizedLink } from '../components/ui/LocalizedLink';
import { useLangPath } from '../utils/localeRouting';
import InteractiveRestaurantMenu from '../components/menu/InteractiveRestaurantMenu';
import { getPlaceBySlug, getPlaceSlugById, type PlaceUrlCategory } from '../listings/placeRoutes';
import { cityMap } from '../data/cities';
import { buildMenuSeo } from '../data/seo/seoEngine';
import logoImg from '../assets/images/logo.png';
import { hasListingTranslations, localizeListing } from '../listings/translations';

export default function PlaceMenuPage() {
  const { city, slug: rawSlug } = useParams<{
    city: string;
    slug: string;
  }>();
  const { pathname } = useLocation();
  const { lang, navigateLang } = useLangPath();
  const cityKey = String(city || '').toLowerCase();
  const placeCategory: Extract<PlaceUrlCategory, 'food' | 'sleep'> = useMemo(
    () => (/\/(sleep|stay)\//i.test(pathname) ? 'sleep' : 'food'),
    [pathname]
  );

  // Scroll to top immediately on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [cityKey, rawSlug, placeCategory]);

  const rawListing: any = useMemo(() => {
    if (!cityKey || !rawSlug) return undefined;
    let found = getPlaceBySlug(cityKey, placeCategory, rawSlug);
    if (!found) {
      const mappedSlug = getPlaceSlugById(cityKey, placeCategory, rawSlug);
      if (mappedSlug) {
        found = getPlaceBySlug(cityKey, placeCategory, mappedSlug);
      }
    }
    if (!found) {
      const fallbackCat: 'food' | 'sleep' = placeCategory === 'sleep' ? 'food' : 'sleep';
      found = getPlaceBySlug(cityKey, fallbackCat, rawSlug);
    }
    return found;
  }, [cityKey, rawSlug, placeCategory]);

  const listing: any = useMemo(
    () => (rawListing ? localizeListing(rawListing, lang) : undefined),
    [rawListing, lang]
  );

  if (!listing) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] flex flex-col">
        <SEO title="Menu Not Found" noIndex />
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-[#173042]">Menu Not Found</h1>
          <p className="mt-2 text-sm text-[#66757D] max-w-sm">
            We could not find the menu for this venue. It may have moved or been updated.
          </p>
          <button
            type="button"
            onClick={() => navigateLang(`/finder/${cityKey}/${placeCategory}`)}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#DFAF4F] px-6 py-3 text-sm font-bold text-[#173042] shadow-xs hover:bg-[#d09c39] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            Explore {placeCategory === 'sleep' ? 'Stays' : 'Dining'} in {cityKey}
          </button>
        </div>
      </div>
    );
  }

  const name = listing.ui?.name || listing.name || (placeCategory === 'sleep' ? 'Hotel' : 'Restaurant');
  const cityLabel = cityMap[cityKey]?.name || (cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace(/_/g, ' '));
  const neighborhood = listing.ui?.neighborhood || listing.neighborhood || (placeCategory === 'sleep' ? 'City Centre' : 'Marina');
  const menu = listing.ui?.menu || listing.menu;
  const bestDishes = listing.ui?.bestDishes || listing.bestDishes || [];
  const primaryCuisine = listing.foodStyles?.[0] || listing.quiz?.foodStyles?.[0] || 'Moroccan & International';
  const canonicalSlug = getPlaceSlugById(cityKey, placeCategory, listing.id) || rawSlug || '';
  const placeProfileUrl = `/place/${cityKey}/${placeCategory}/${canonicalSlug}`;

  // External verified links
  const googleMapsUrl = listing.ui?.googleMapsUrl || listing.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(name + ' ' + cityLabel)}`;
  const rawWebsite = listing.ui?.website || listing.officialWebsite;
  const website = rawWebsite && rawWebsite !== 'not-available' ? rawWebsite : '';
  const rawInstagram = listing.ui?.instagram || listing.instagramHandle;
  const instagram = rawInstagram && rawInstagram !== 'not-available' ? rawInstagram : '';

  const menuSeo = buildMenuSeo({
    listing,
    category: placeCategory,
    cityKey,
    cityLabel,
    slug: canonicalSlug,
    lang,
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 flex flex-col font-sans">
      <SEO
        title={menuSeo.title}
        description={menuSeo.description}
        canonical={menuSeo.canonical}
        type="article"
        image={menuSeo.image}
        schemaType={menuSeo.schemaType}
        schemaData={menuSeo.schemaData}
        breadcrumbs={menuSeo.breadcrumbs}
        faq={menuSeo.faq}
        disableHreflang={!hasListingTranslations(listing.id)}
      />

      {/* Slim, Minimal Top Bar */}
      <header className="sticky top-0 z-30 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200/70 px-4 sm:px-6 py-2.5">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <LocalizedLink
            to={placeProfileUrl}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform rtl:rotate-180" />
            <span>{name}</span>
          </LocalizedLink>

          <div className="flex items-center gap-2.5">
            <LanguageSwitcher compact />
            <LocalizedLink to="/" className="flex items-center gap-1.5 text-stone-900 no-underline">
              <img src={logoImg} alt="Moroccan Mate" className="w-5 h-5 object-contain" />
              <span className="font-serif text-xs font-bold tracking-wide">Moroccan Mate</span>
            </LocalizedLink>
          </div>
        </div>
      </header>

      {/* Main Container - Immediate Menu presentation */}
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 pt-4 pb-24 flex-1">
        {/* Compact Header: 1-2 lines maximum, zero visual bloat */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 mb-2 border-b border-stone-200/80">
          <div className="flex items-baseline gap-2.5 flex-wrap">
            <h1 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
              {name}
            </h1>
            <span className="text-xs text-stone-600 font-medium">
              {neighborhood} • {primaryCuisine}
            </span>
            {listing.ui?.openTime && listing.ui?.closeTime && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-stone-600 font-mono">
                <Clock className="w-3 h-3 text-stone-600" />
                {listing.ui.openTime}–{listing.ui.closeTime}
              </span>
            )}
          </div>

          {/* Quick link pills */}
          <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
            {googleMapsUrl && (
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer no-underline"
              >
                <MapPin className="w-3 h-3 text-amber-600" />
                <span>Maps Photos</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer no-underline"
              >
                <Globe className="w-3 h-3 text-stone-600" />
                <span>Site</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>
            )}
            {instagram && (
              <a
                href={instagram.startsWith('http') ? instagram : `https://instagram.com/${instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer no-underline"
              >
                <Instagram className="w-3 h-3 text-pink-600" />
                <span>IG</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>
            )}
          </div>
        </div>

        {/* The Menu starts right here - no wall of text! */}
        <InteractiveRestaurantMenu
          menu={menu}
          restaurantId={listing.id}
          restaurantName={name}
          city={cityLabel}
          primaryCuisine={primaryCuisine}
          highlightedDishes={bestDishes}
          reservationContact={listing.ui?.reservationContact || listing.reservationContact}
          whatsappNumber={listing.ui?.whatsappNumber || listing.whatsappNumber}
          bookingUrl={listing.ui?.bookingUrl || listing.bookingUrl}
          website={website}
          googleMapsUrl={googleMapsUrl}
          bestTimeToVisit={listing.ui?.bestTimeToVisit || listing.bestTimeToVisit}
          averageWaitMinutes={listing.ui?.averageWaitMinutes || listing.averageWaitMinutes}
          paymentMethods={listing.filter?.paymentMethods || listing.paymentMethods}
          directionsUrl={googleMapsUrl}
          isStandalonePage={true}
        />
      </main>

      {/* Understated Footer */}
      <footer className="border-t border-stone-200/60 bg-[#FDFBF7] py-4 px-4 text-center text-[11px] text-stone-600">
        <p>© {new Date().getFullYear()} Moroccan Mate • Local Dirhams (MAD)</p>
      </footer>
    </div>
  );
}
