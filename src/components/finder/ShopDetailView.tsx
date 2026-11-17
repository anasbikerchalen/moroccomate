// src/components/finder/ShopDetailView.tsx
// Rebuilt from the morocco-finder-stay-template (1) design — ShopTemplateView
// with its full section set, fed by the collected shop data via the adapter.
import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  Award,
  Globe,
  Phone,
  Truck,
  Accessibility,
  Hammer,
  Tag,
  Clock,
  Map,
  MessageSquareText,
  HelpCircle,
} from 'lucide-react';
import { adaptToTemplateShop } from '../../engine/shopTemplateAdapter';
import { getShopById } from '../../shop';
import { ShopListing as LegacyShopListing } from '../../listings/types';
import { useSavedStore } from '../../state/savedStore';
import { ShopTemplateView } from './shop-template/ShopTemplateView';
import { buildPlaceFaqs } from '../../data/seo/faqEngine';
import { useAppLanguage } from '../../utils/localeRouting';
import ListingHeroHeader, { type HeroFeatureChip, type HeroMetadataItem } from './ListingHeroHeader';
import ListingSectionNavigator, { type ListingNavigatorItem } from './ListingSectionNavigator';
import { hasVerifiedReviews, hasVerifiedWorries } from './listingNavUtils';
import type { ReviewSource } from '../../types/reviews';

interface ShopDetailViewProps {
  item: LegacyShopListing;
  onBack: () => void;
}

export default function ShopDetailView({ item: passedItem }: ShopDetailViewProps) {
  const lang = useAppLanguage();
  const { toggleBookmark, isBookmarked } = useSavedStore();
  const [selectedReviewSource, setSelectedReviewSource] = useState<ReviewSource | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Resolve through the canonical shop module backend (single source of truth)
  const legacyItem = useMemo<LegacyShopListing>(
    () => (getShopById(String(passedItem?.id)) as LegacyShopListing) || passedItem,
    [passedItem],
  );

  // Bridge: collected shop data → modular template schema
  const shop = useMemo(() => adaptToTemplateShop(legacyItem), [legacyItem]);

  const shopFaqs = useMemo(
    () => buildPlaceFaqs({ listing: legacyItem, category: 'shopping', cityLabel: shop.city, lang }),
    [legacyItem, shop.city, lang]
  );

  const idString = String(legacyItem?.id || '');
  const bookmarked = isBookmarked(idString);
  const isVerified = legacyItem?.isVerified;
  const isLocalFavorite = legacyItem?.isLocalFavorite;

  const shopReviewsData = shop.reviewsData || legacyItem?.reviewsData;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${shop.name} — Moroccan Mate`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const directionsUrl = useMemo(() => {
    if (shop.directions_url) return shop.directions_url;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${shop.name}, ${shop.city}, Morocco`
    )}`;
  }, [shop.directions_url, shop.name, shop.city]);

  const handleDirectionsClick = () => {
    window.open(directionsUrl, '_blank', 'noopener,noreferrer');
  };

  const rawTypeLabel =
    shop.shop_type?.name ||
    legacyItem?.category ||
    legacyItem?.type?.replace(/-/g, ' ') ||
    'Artisan Shop';

  const categoryBadge = rawTypeLabel
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const pricingLabel =
    legacyItem?.pricingModel === 'fixed'
      ? 'Fixed Price'
      : legacyItem?.pricingModel === 'mixed'
        ? 'Mixed Pricing'
        : 'Negotiable';

  const cleanWebsite = useMemo(() => {
    if (!legacyItem?.website || legacyItem.website === 'not-available') return undefined;
    return legacyItem.website.startsWith('http')
      ? legacyItem.website
      : `https://${legacyItem.website}`;
  }, [legacyItem?.website]);

  const cleanInstagram = useMemo(() => {
    if (!legacyItem?.instagram || legacyItem.instagram === 'not-available') return undefined;
    return legacyItem.instagram.startsWith('http')
      ? legacyItem.instagram
      : `https://instagram.com/${legacyItem.instagram.replace('@', '')}`;
  }, [legacyItem?.instagram]);

  const cleanPhoneForTel = legacyItem?.phoneNumber
    ? legacyItem.phoneNumber.replace(/[^0-9+]/g, '')
    : '';

  const shopMetadata: HeroMetadataItem[] = [
    {
      id: 'location',
      icon: <MapPin className="w-4 h-4 text-[#C85A32] shrink-0" />,
      label: `${shop.city}, Morocco`,
      sublabel: shop.neighborhood ? `· ${shop.neighborhood}` : undefined,
    },
    {
      id: 'category',
      icon: <ShoppingBag className="w-4 h-4 text-[#C85A32] shrink-0" />,
      label: categoryBadge,
      sublabel: legacyItem?.priceLevel ? `· ${pricingLabel} (${legacyItem.priceLevel})` : `· ${pricingLabel}`,
    },
    ...(legacyItem?.bestTimeToVisit
      ? [
          {
            id: 'best-time',
            icon: <Clock className="w-4 h-4 text-[#1F5A3B] shrink-0" />,
            label: `Best: ${legacyItem.bestTimeToVisit}`,
            tone: 'open' as const,
          },
        ]
      : []),
  ];

  const shopFeatures: HeroFeatureChip[] = [
    {
      id: 'pricing-model',
      label: pricingLabel,
      icon: <Tag className="w-3.5 h-3.5 text-[#C85A32]" />,
      tone: legacyItem?.pricingModel === 'fixed' ? 'emerald' : 'neutral',
    },
    ...(isVerified
      ? [
          {
            id: 'verified',
            label: 'Physically Verified',
            icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />,
            tone: 'emerald' as const,
          },
        ]
      : []),
    ...(isLocalFavorite
      ? [
          {
            id: 'local-favorite',
            label: 'Local Favorite',
            icon: <Award className="w-3.5 h-3.5 text-amber-700" />,
            tone: 'amber' as const,
          },
        ]
      : []),
    ...(legacyItem?.workshopVisitable
      ? [
          {
            id: 'workshop',
            label: 'Workshop Visitable',
            icon: <Hammer className="w-3.5 h-3.5 text-[#C85A32]" />,
          },
        ]
      : []),
    ...(shop.shipping?.available
      ? [
          {
            id: 'shipping',
            label: shop.shipping.international ? 'Worldwide Shipping' : 'Shipping Available',
            icon: <Truck className="w-3.5 h-3.5 text-sky-600" />,
            tone: 'sky' as const,
          },
        ]
      : []),
    ...(legacyItem?.isWheelchairAccessible
      ? [
          {
            id: 'accessible',
            label: 'Wheelchair Accessible',
            icon: <Accessibility className="w-3.5 h-3.5 text-emerald-700" />,
          },
        ]
      : []),
  ];

  const shopPrimaryAction = cleanWebsite
    ? {
        label: 'Visit Website',
        href: cleanWebsite,
        icon: <Globe className="w-4 h-4 shrink-0" />,
        variant: 'terracotta' as const,
        title: 'Visit official shop website',
      }
    : cleanPhoneForTel
      ? {
          label: 'Call Shop',
          href: `tel:${cleanPhoneForTel}`,
          icon: <Phone className="w-4 h-4 shrink-0" />,
          variant: 'terracotta' as const,
        }
      : {
          label: 'View on Maps',
          href: directionsUrl,
          icon: <ExternalLink className="w-4 h-4 shrink-0" />,
          variant: 'dark' as const,
        };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.3 }}
      className="w-full pb-16 font-sans text-stone-900"
    >
      {/* 1. UNIFIED UPPER HERO SECTION */}
      <ListingHeroHeader
        category="shop"
        categoryBadge={categoryBadge}
        title={shop.name}
        subtitle={shop.short_description}
        metadata={shopMetadata}
        reviewsData={shopReviewsData}
        activeReviewSource={selectedReviewSource}
        onSelectReviewSource={setSelectedReviewSource}
        features={shopFeatures}
        highlightBadge={isVerified ? 'Verified Shop' : undefined}
        actions={{
          directionsUrl,
          directionsLabel: 'Get Directions',
          primaryAction: shopPrimaryAction,
          phone: legacyItem?.phoneNumber,
          websiteUrl: undefined,
          instagramUrl: cleanInstagram,
          isBookmarked: bookmarked,
          onToggleBookmark: () =>
            toggleBookmark({
              id: idString,
              type: 'shop',
              name: shop.name,
              city: shop.city,
              category: 'shop',
            }),
          onShare: handleShare,
          copiedLink,
          saveLabel: 'Save to Favorites',
          savedLabel: 'Saved in Favorites',
        }}
      />

      {/* Sticky Section Navigator */}
      <ListingSectionNavigator
        items={[
          {
            id: 'worries',
            label: 'Worries',
            targetId: 'shop-worries-section',
            icon: <ShieldCheck className="w-4 h-4" />,
            available: shop.visibility?.show_worries !== false && hasVerifiedWorries(shop.worries),
          },
          {
            id: 'items',
            label: 'What to Buy',
            targetId: 'shop-items-section',
            icon: <ShoppingBag className="w-4 h-4" />,
            available:
              (shop.visibility?.show_products !== false && Array.isArray(shop.product_categories) && shop.product_categories.length > 0) ||
              (shop.visibility?.show_highlights !== false && Array.isArray(shop.highlights) && shop.highlights.length > 0),
          },
          {
            id: 'price-guide',
            label: 'Price Guide',
            targetId: 'shop-price-guide-section',
            icon: <Tag className="w-4 h-4" />,
            available: shop.visibility?.show_price_guide !== false && Array.isArray(shop.price_guide) && shop.price_guide.length > 0,
          },
          {
            id: 'nearby-pay',
            label: 'Map & Pay',
            targetId: 'shop-nearby-pay-section',
            icon: <Map className="w-4 h-4" />,
            available:
              (shop.visibility?.show_nearby !== false && Array.isArray(shop.nearby_places) && shop.nearby_places.length > 0) ||
              shop.visibility?.show_pricing !== false ||
              shop.visibility?.show_payment !== false,
          },
          {
            id: 'hours',
            label: 'Hours',
            targetId: 'shop-hours-section',
            icon: <Clock className="w-4 h-4" />,
            available: shop.visibility?.show_opening_hours !== false && Boolean(shop.opening_hours),
          },
          {
            id: 'faq',
            label: 'FAQ',
            targetId: 'shop-faq-section',
            icon: <HelpCircle className="w-4 h-4" />,
            available: shop.visibility?.show_faq !== false && shopFaqs.length > 0,
          },
          {
            id: 'reviews',
            label: 'Reviews',
            targetId: 'shop-reviews-section',
            icon: <MessageSquareText className="w-4 h-4" />,
            available: shop.visibility?.show_reviews !== false && hasVerifiedReviews(shopReviewsData || (shop as any).reviews),
          },
        ] satisfies ListingNavigatorItem[]}
      />

      {/* ─────────────────────────────────────────────────────────────
          2. BODY CONTENT (SHOP TEMPLATE SECTIONS)
      ───────────────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 lg:px-8 space-y-10">
        {/* The template shop page: products, highlights,
            radar minimap, pricing, payment, hours, languages, shipping */}
        <ShopTemplateView
          shop={shop}
          faqs={shopFaqs}
          externalSelectedSource={selectedReviewSource}
          onSelectedSourceChange={setSelectedReviewSource}
        />

        {/* Location bottom bar */}
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-[#e5dcce] bg-white p-5 shadow-2xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4EDE4] text-[#8C6218]">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1c1917]">Location</h3>
              <p className="text-sm text-[#786b5b]">{shop.address}</p>
            </div>
          </div>
          <button
            onClick={handleDirectionsClick}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e5a84b] px-6 py-2.5 text-sm font-bold text-[#1c1917] shadow-2xs transition-all hover:bg-[#d99738] cursor-pointer active:scale-98 self-start sm:self-auto"
          >
            Open exact location
          </button>
        </div>
      </div>
    </motion.div>
  );
}
