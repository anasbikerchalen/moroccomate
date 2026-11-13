// src/components/finder/StayDetailView.tsx
import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Home, ExternalLink, Phone, Wifi, Wind, Coffee, Waves, ShieldCheck, Clock, Sun, Accessibility, Sparkles } from 'lucide-react';
import { adaptToStayListing, getStayPrice, getStayLifestyle, getStayOwnerAnswer } from '../../engine/stayAdapter';
import { useSavedStore } from '../../state/savedStore';
import { WalkingDistanceSection } from './stay/WalkingDistanceSection';
import { TraditionalSpacesSection } from './stay/TraditionalSpacesSection';
import { RoomDetailsSection } from './stay/RoomDetailsSection';
import { AmenitiesSection } from './stay/AmenitiesSection';
import { PoliciesSection } from './stay/PoliciesSection';
import { StayFAQSection } from './stay/StayFAQSection';
import { LocationBottomBar } from './stay/LocationBottomBar';
import PlaceReviewsSection from '../reviews/PlaceReviewsSection';
import ListingHeroHeader, { WhatsAppIcon, type HeroFeatureChip, type HeroMetadataItem } from './ListingHeroHeader';
import type { ReviewSource } from '../../types/reviews';

interface StayDetailViewProps {
  item: any;
  onBack: () => void;
}

const LIFESTYLE_LABEL: Record<string, string> = {
  lean: 'Budget-Friendly',
  balanced: 'Mid-Range',
  premium: 'Luxury'
};

export default function StayDetailView({ item }: StayDetailViewProps) {
  const { toggleBookmark, isBookmarked } = useSavedStore();
  const [selectedReviewSource, setSelectedReviewSource] = useState<ReviewSource | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Bridge: collected sleep listing → new modular stay template schema
  const stay = useMemo(() => adaptToStayListing(item), [item]);

  const price = getStayPrice(item);
  const lifestyle = getStayLifestyle(item);
  const idString = String(item?.id || '');
  const bookmarked = isBookmarked(idString);

  const stayReviewsData = stay.reviewsData || item?.reviewsData || item?.ui?.reviewsData;

  const directionsUrl = stay.location?.directions_url
    || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${stay.name}, ${stay.location.city}, Morocco`)}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${stay.name} — Moroccan Mate`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const stayTypeLabel = stay.type
    ? stay.type.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : 'Moroccan Stay';

  const stayMetadata: HeroMetadataItem[] = [
    {
      id: 'location',
      icon: <MapPin className="w-4 h-4 text-[#C85A32] shrink-0" />,
      label: `${stay.location.city}, Morocco`,
      sublabel: stay.location.neighborhood ? `· ${stay.location.neighborhood}` : undefined,
    },
    {
      id: 'type-price',
      icon: <Home className="w-4 h-4 text-[#C85A32] shrink-0" />,
      label: price > 0 ? `${price} MAD/night` : stayTypeLabel,
      sublabel: `· ${LIFESTYLE_LABEL[lifestyle] || lifestyle}`,
      tone: 'accent',
    },
    ...(item?.logistics?.checkIn
      ? [
          {
            id: 'checkin',
            icon: <Clock className="w-4 h-4 text-[#1F5A3B] shrink-0" />,
            label: `Check-in ${item.logistics.checkIn}`,
            tone: 'open' as const,
          },
        ]
      : []),
  ];

  const stayFeatures: HeroFeatureChip[] = [
    ...(item?.hasBreakfast || stay.amenities?.breakfast?.included || stay.amenities?.breakfast?.available
      ? [{ id: 'breakfast', label: 'Breakfast Included', icon: <Coffee className="w-3.5 h-3.5 text-amber-700" />, tone: 'amber' as const }]
      : []),
    ...(item?.hasPool || stay.traditional_spaces?.some((s) => s.id.includes('pool') || s.name.toLowerCase().includes('pool'))
      ? [{ id: 'pool', label: 'Swimming Pool', icon: <Waves className="w-3.5 h-3.5 text-sky-600" />, tone: 'sky' as const }]
      : []),
    ...(stay.amenities?.wifi?.available || item?.amenities?.includes('wifi')
      ? [{ id: 'wifi', label: 'Free Wi-Fi', icon: <Wifi className="w-3.5 h-3.5 text-sky-600" /> }]
      : []),
    ...(item?.hasAC || stay.amenities?.climate?.has_ac
      ? [{ id: 'ac', label: 'Air Conditioning', icon: <Wind className="w-3.5 h-3.5 text-sky-600" /> }]
      : []),
    ...(item?.hasRooftop || stay.traditional_spaces?.some((s) => s.id.includes('rooftop') || s.name.toLowerCase().includes('rooftop'))
      ? [{ id: 'rooftop', label: 'Rooftop Terrace', icon: <Sun className="w-3.5 h-3.5 text-amber-600" /> }]
      : []),
    ...(item?.freeCancellation
      ? [{ id: 'cancel', label: 'Free Cancellation', icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />, tone: 'emerald' as const }]
      : []),
    ...(item?.isWheelchairAccessible
      ? [{ id: 'access', label: 'Accessible', icon: <Accessibility className="w-3.5 h-3.5 text-emerald-700" /> }]
      : []),
    ...(item?.isHiddenGem
      ? [{ id: 'gem', label: 'Hidden Gem', icon: <Sparkles className="w-3.5 h-3.5 text-purple-600" />, tone: 'purple' as const }]
      : []),
  ];

  const cleanWhatsapp = stay.contact_whatsapp ? stay.contact_whatsapp.replace(/[^0-9]/g, '') : '';
  const cleanPhone = stay.phone ? stay.phone.replace(/[^0-9+]/g, '') : '';

  const stayPrimaryAction = stay.booking_url
    ? {
        label: 'Direct Booking',
        href: stay.booking_url,
        icon: <ExternalLink className="w-4 h-4 shrink-0" />,
        variant: 'terracotta' as const,
        title: 'Official direct reservation website',
      }
    : cleanWhatsapp
      ? {
          label: 'WhatsApp Host',
          href: `https://wa.me/${cleanWhatsapp}`,
          icon: <WhatsAppIcon variant="monochrome" className="w-4 h-4 shrink-0" />,
          variant: 'whatsapp' as const,
          title: 'Message host directly on WhatsApp',
        }
      : cleanPhone
        ? {
            label: 'Call Riad',
            href: `tel:${cleanPhone}`,
            icon: <Phone className="w-4 h-4 shrink-0" />,
            variant: 'dark' as const,
          }
        : {
            label: 'View Photos',
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
        category="sleep"
        categoryBadge={stayTypeLabel}
        title={stay.name}
        subtitle={stay.tagline}
        metadata={stayMetadata}
        reviewsData={stayReviewsData}
        activeReviewSource={selectedReviewSource}
        onSelectReviewSource={setSelectedReviewSource}
        features={stayFeatures}
        highlightBadge={item?.isVerified ? 'Verified Stay' : undefined}
        actions={{
          directionsUrl,
          directionsLabel: 'Get Directions',
          primaryAction: stayPrimaryAction,
          phone: stay.phone,
          whatsappNumber: stay.booking_url ? stay.contact_whatsapp : undefined,
          websiteUrl: item?.officialWebsite || undefined,
          websiteTitle: 'Visit property website',
          isBookmarked: bookmarked,
          onToggleBookmark: () =>
            toggleBookmark({
              id: idString,
              type: 'sleep',
              name: stay.name,
              city: stay.location.city,
              category: 'sleep'
            }),
          onShare: handleShare,
          copiedLink,
          saveLabel: 'Save to Favorites',
          savedLabel: 'Saved in Favorites',
        }}
      />

      {/* ─────────────────────────────────────────────────────────────
          2. BODY CONTENT (WARM, WELL-SPACED SECTIONS)
      ───────────────────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 lg:px-8 space-y-10">
        
        {/* Walking distance radar map + what's nearby (the minimap) */}
        {stay.visibility.show_walking_distance !== false && (
          <WalkingDistanceSection propertyName={stay.name} nearbyPlaces={stay.walking_distance} />
        )}

        {/* Traditional spaces / property features */}
        {stay.visibility.show_traditional_spaces !== false && (
          <TraditionalSpacesSection spaces={stay.traditional_spaces} />
        )}

        {/* Room configuration */}
        {stay.visibility.show_room_details !== false && (
          <RoomDetailsSection room={stay.room_details} />
        )}

        {/* Comfort & amenities */}
        {stay.visibility.show_comfort_amenities !== false && (
          <AmenitiesSection amenities={stay.amenities} visibility={stay.visibility} />
        )}

        {/* Policies & payments */}
        {stay.visibility.show_policies !== false && <PoliciesSection policies={stay.policies} />}

        {/* Frequently Asked Questions (FAQ) */}
        <StayFAQSection propertyName={stay.name} ownerAnswer={getStayOwnerAnswer(item)} />

        {/* Multi-platform Traveler Reviews */}
        {stay.visibility?.show_reviews !== false && (
          <PlaceReviewsSection
            reviewsData={stayReviewsData}
            placeName={stay.name}
            category="sleep"
            externalSelectedSource={selectedReviewSource}
            onSelectedSourceChange={setSelectedReviewSource}
          />
        )}

        {/* Exact location bottom bar */}
        {stay.visibility.show_exact_location !== false && (
          <LocationBottomBar location={stay.location} propertyName={stay.name} />
        )}
      </div>
    </motion.div>
  );
}
