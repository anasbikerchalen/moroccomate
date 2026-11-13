import React, { useMemo, useState } from 'react';
import {
  MapPin,
  ExternalLink,
  Compass,
  Clock,
  Users,
  Languages,
  ShieldCheck,
  Accessibility,
  CalendarCheck,
  Phone,
  Sparkles,
} from 'lucide-react';
import type { ActivityListing } from '../../things-to-do';
import { formatDuration, formatPrice, formatGroupLabel, getCityLabel } from '../../things-to-do';
import { useSavedStore } from '../../state/savedStore';
import ListingHeroHeader, { type HeroFeatureChip, type HeroMetadataItem } from '../finder/ListingHeroHeader';
import type { ReviewSource } from '../../types/reviews';

interface ActivityHeaderProps {
  activity: ActivityListing;
  activeReviewSource?: ReviewSource | null;
  onSelectReviewSource?: (source: ReviewSource | null) => void;
}

/**
 * Unified Things to Do hero header using the warm editorial skyline backdrop,
 * split action hub, and strictly data-gated multi-platform ratings card.
 */
export const ActivityHeader: React.FC<ActivityHeaderProps> = ({
  activity,
  activeReviewSource,
  onSelectReviewSource,
}) => {
  const { toggleBookmark, isBookmarked } = useSavedStore();
  const [copiedLink, setCopiedLink] = useState(false);

  const bookmarked = isBookmarked(activity.id);

  const cityLabel = getCityLabel(activity.city);
  const directionsUrl =
    activity.directions_url ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${activity.name} ${cityLabel || ''} Morocco`
    )}`;

  const duration = formatDuration(activity.duration_minutes);
  const price = formatPrice(activity.pricing);
  const groupLabel = formatGroupLabel(activity.capacity);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${activity.name} — Moroccan Mate`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const metadata: HeroMetadataItem[] = useMemo(() => {
    const locationParts = [
      cityLabel ? `${cityLabel}, Morocco` : undefined,
      activity.neighborhood,
      activity.location_descriptor,
    ].filter(Boolean);

    return [
      {
        id: 'location',
        icon: <MapPin className="w-4 h-4 text-[#C85A32] shrink-0" />,
        label: locationParts[0] || 'Morocco',
        sublabel: locationParts.length > 1 ? `· ${locationParts.slice(1).join(' · ')}` : undefined,
      },
      {
        id: 'type-price',
        icon: <Compass className="w-4 h-4 text-[#C85A32] shrink-0" />,
        label: activity.activity_type || activity.category,
        sublabel: price ? `· ${price}` : undefined,
        tone: 'accent',
      },
      ...(duration
        ? [
            {
              id: 'duration',
              icon: <Clock className="w-4 h-4 text-[#1F5A3B] shrink-0" />,
              label: duration,
              tone: 'open' as const,
            },
          ]
        : []),
    ];
  }, [cityLabel, activity.neighborhood, activity.location_descriptor, activity.activity_type, activity.category, price, duration]);

  const features: HeroFeatureChip[] = useMemo(() => {
    const chips: HeroFeatureChip[] = [];

    if (activity.category) {
      chips.push({
        id: 'category',
        label: activity.category,
        icon: <Compass className="w-3.5 h-3.5 text-[#C85A32]" />,
      });
    }

    if (groupLabel) {
      chips.push({
        id: 'group',
        label: groupLabel,
        icon: <Users className="w-3.5 h-3.5 text-stone-600" />,
      });
    }

    if (activity.languages && activity.languages.length > 0) {
      chips.push({
        id: 'languages',
        label: activity.languages.map((l) => l.name).slice(0, 3).join(' / '),
        icon: <Languages className="w-3.5 h-3.5 text-sky-600" />,
      });
    }

    if (activity.cancellation?.free_cancellation || activity.cancellation?.cancellation_type === 'free') {
      chips.push({
        id: 'free-cancel',
        label: 'Free Cancellation',
        icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />,
        tone: 'emerald',
      });
    }

    if (activity.accessibility?.wheelchair_accessible) {
      chips.push({
        id: 'accessible',
        label: 'Wheelchair Accessible',
        icon: <Accessibility className="w-3.5 h-3.5 text-emerald-700" />,
      });
    }

    if (activity.badge) {
      chips.push({
        id: 'badge',
        label: activity.badge.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        icon: <Sparkles className="w-3.5 h-3.5 text-amber-600" />,
        tone: 'amber',
      });
    }

    return chips;
  }, [activity.category, activity.languages, activity.cancellation, activity.accessibility, activity.badge, groupLabel]);

  const bookingUrl = activity.booking?.booking_url;
  const rawContact = activity.booking?.booking_contact;
  const phoneContact = rawContact && /^[+0-9\s()-]{6,}$/.test(rawContact.trim()) ? rawContact.trim() : undefined;

  const primaryAction = bookingUrl
    ? {
        label: activity.booking?.instant_booking ? 'Book Experience' : 'Reserve Spot',
        href: bookingUrl,
        icon: <CalendarCheck className="w-4 h-4 shrink-0" />,
        variant: 'terracotta' as const,
        title: 'Open official booking page',
      }
    : phoneContact
      ? {
          label: 'Book by Phone',
          href: `tel:${phoneContact.replace(/[^0-9+]/g, '')}`,
          icon: <Phone className="w-4 h-4 shrink-0" />,
          variant: 'terracotta' as const,
        }
      : {
          label: 'View Photos & Map',
          href: directionsUrl,
          icon: <ExternalLink className="w-4 h-4 shrink-0" />,
          variant: 'dark' as const,
        };

  return (
    <ListingHeroHeader
      category="things"
      categoryBadge={activity.activity_type || activity.category || 'Experience'}
      title={activity.name}
      subtitle={activity.short_description}
      metadata={metadata}
      reviewsData={activity.reviewsData}
      activeReviewSource={activeReviewSource}
      onSelectReviewSource={onSelectReviewSource}
      features={features}
      actions={{
        directionsUrl,
        directionsLabel: 'Get Directions',
        primaryAction,
        phone: phoneContact,
        isBookmarked: bookmarked,
        onToggleBookmark: () =>
          toggleBookmark({
            id: activity.id,
            type: 'activity',
            name: activity.name,
            city: activity.city,
            category: 'things',
          }),
        onShare: handleShare,
        copiedLink,
        saveLabel: 'Save to Favorites',
        savedLabel: 'Saved in Favorites',
      }}
    />
  );
};
