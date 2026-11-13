import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Navigation,
  ChevronDown,
  Phone,
  Heart,
  Share2,
  Check,
  Globe,
  Instagram,
  Trophy,
  Copy,
  UtensilsCrossed,
  Home,
  Compass,
  ShoppingBag,
  Clock,
  ExternalLink,
  CalendarCheck
} from 'lucide-react';
import { cn } from '../../utils/cn';
import type { PlaceReviewsData, ReviewSource } from '../../types/reviews';
import { computePlaceReviewScore, hasPopulatedReviewsData } from '../../types/reviews';
import PlatformIcon, { formatCompactCount } from '../reviews/PlatformIcon';
import TagTooltip from './TagTooltip';
import logoImg from '../../assets/images/logo.png';

export type ListingHeroCategory = 'eat' | 'sleep' | 'things' | 'shop';

export interface HeroMetadataItem {
  id: string;
  icon?: React.ReactNode;
  label: string;
  sublabel?: string;
  tone?: 'default' | 'open' | 'closed' | 'accent';
  /** Optional interactive schedule popover trigger (e.g., Eat weekly hours) */
  onClick?: () => void;
  isExpanded?: boolean;
  popoverContent?: React.ReactNode;
}

export interface HeroFeatureChip {
  id: string;
  label: string;
  icon?: React.ReactNode;
  tooltip?: string;
  tone?: 'neutral' | 'emerald' | 'amber' | 'sky' | 'purple';
}

export interface HeroActionConfig {
  /** Primary green Get Directions CTA */
  directionsUrl: string;
  directionsLabel?: string;
  onDirectionsClick?: () => void;
  /** Primary terracotta CTA (e.g. Book a Table, Direct Booking, Book Experience, Visit Website) */
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    variant?: 'terracotta' | 'whatsapp' | 'dark' | 'muted';
    title?: string;
  };
  /** Optional direct phone number */
  phone?: string;
  onCopyPhone?: () => void;
  copiedPhone?: boolean;
  /** Optional WhatsApp number (if not already used as primaryAction) */
  whatsappNumber?: string;
  /** Optional website URL */
  websiteUrl?: string;
  websiteTitle?: string;
  /** Optional Instagram URL */
  instagramUrl?: string;
  /** Bookmark state & handler */
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  /** Share handler & copied state */
  onShare?: () => void;
  copiedLink?: boolean;
  saveLabel?: string;
  savedLabel?: string;
}

export interface ListingHeroHeaderProps {
  category: ListingHeroCategory;
  categoryBadge: string;
  title: string;
  subtitle?: string;
  metadata: HeroMetadataItem[];
  /** Strictly gated on populated reviewsData — hidden when empty or absent */
  reviewsData?: PlaceReviewsData | null;
  activeReviewSource?: ReviewSource | null;
  onSelectReviewSource?: (source: ReviewSource | null) => void;
  /** Feature attribute chips row with +N more collapse */
  features?: HeroFeatureChip[];
  /** Preserved "Served For" row (Eat meal types or equivalent) */
  servedFor?: string[];
  servedForLabel?: string;
  /** Right-hand Action Hub card configuration */
  actions: HeroActionConfig;
  /** Optional secondary badge inside ratings card (e.g. "Top Rated" or "Verified") */
  highlightBadge?: string;
  /** Optional extra node under left column (e.g. SavvyBadge) */
  extraLeftNode?: React.ReactNode;
  className?: string;
}

export const WhatsAppIcon: React.FC<{
  className?: string;
  variant?: 'brand' | 'monochrome';
}> = ({ className = 'w-4 h-4', variant = 'brand' }) => {
  if (variant === 'monochrome') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 21.5l4.462-.872A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path
          d="M16.15 14.22c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.14.22-.56.71-.69.86-.13.14-.25.16-.47.05-.22-.11-.93-.34-1.76-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.25.33-.38.11-.13.15-.22.22-.37.07-.14.04-.27-.02-.38-.05-.11-.49-1.19-.68-1.63-.18-.43-.36-.37-.5-.38h-.42c-.15 0-.38.05-.58.27-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.55 2.36 3.75 3.31.52.23.93.36 1.25.46.53.17 1 .14 1.38.09.42-.06 1.3-.53 1.48-1.04.18-.52.18-.96.13-1.05-.06-.09-.2-.14-.42-.25Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 21.5l4.462-.872A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z"
        fill="#25D366"
      />
      <path
        d="M16.53 14.38c-.25-.125-1.48-.73-1.71-.813-.23-.084-.397-.125-.564.125-.167.25-.646.813-.792.98-.146.167-.292.188-.542.063-.25-.125-1.056-.39-2.012-1.242-.743-.663-1.245-1.482-1.39-1.732-.147-.25-.016-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.084-.167.042-.313-.02-.438-.063-.125-.564-1.356-.772-1.857-.204-.488-.41-.422-.564-.43l-.48-.008c-.167 0-.438.063-.668.313-.23.25-.876.856-.876 2.087s.897 2.42 1.022 2.587c.125.167 1.765 2.695 4.277 3.78.597.258 1.064.412 1.428.528.6.19 1.146.163 1.577.1.48-.072 1.48-.605 1.689-1.19.208-.584.208-1.085.146-1.19-.063-.104-.23-.167-.48-.292Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

const DEFAULT_CATEGORY_ICON: Record<ListingHeroCategory, React.ReactNode> = {
  eat: <UtensilsCrossed className="w-3.5 h-3.5 text-[#C85A32]" />,
  sleep: <Home className="w-3.5 h-3.5 text-[#C85A32]" />,
  things: <Compass className="w-3.5 h-3.5 text-[#C85A32]" />,
  shop: <ShoppingBag className="w-3.5 h-3.5 text-[#C85A32]" />,
};

export const ListingHeroHeader: React.FC<ListingHeroHeaderProps> = ({
  category,
  categoryBadge,
  title,
  subtitle,
  metadata,
  reviewsData,
  activeReviewSource,
  onSelectReviewSource,
  features = [],
  servedFor = [],
  servedForLabel = 'Served For',
  actions,
  highlightBadge,
  extraLeftNode,
  className,
}) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [localCopiedLink, setLocalCopiedLink] = useState(false);
  const [localCopiedPhone, setLocalCopiedPhone] = useState(false);

  // Strictly gate multi-platform ratings card on real populated reviewsData
  const showRatingsCard = hasPopulatedReviewsData(reviewsData);

  const { averageRating, totalCount } = useMemo(() => {
    return computePlaceReviewScore(reviewsData || undefined);
  }, [reviewsData]);

  const sources = reviewsData?.sources || [];
  const compactTotal = formatCompactCount(totalCount) || (totalCount > 0 ? String(totalCount) : '');

  const visibleFeatures = showAllFeatures ? features : features.slice(0, 4);
  const hiddenFeatureCount = Math.max(0, features.length - 4);

  const cleanPhoneForTel = actions.phone ? actions.phone.replace(/[^0-9+]/g, '') : '';
  const cleanWhatsApp = actions.whatsappNumber ? actions.whatsappNumber.replace(/[^0-9]/g, '') : '';

  const isLinkCopied = actions.copiedLink ?? localCopiedLink;
  const isPhoneCopied = actions.copiedPhone ?? localCopiedPhone;

  const handleCopyPhoneClick = () => {
    if (actions.onCopyPhone) {
      actions.onCopyPhone();
      return;
    }
    if (actions.phone && typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(actions.phone).catch(() => {});
      setLocalCopiedPhone(true);
      setTimeout(() => setLocalCopiedPhone(false), 2000);
    }
  };

  const handleShareClick = () => {
    if (actions.onShare) {
      actions.onShare();
      return;
    }
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: `${title} — Moroccan Mate`,
          url: window.location.href,
        })
        .catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
      setLocalCopiedLink(true);
      setTimeout(() => setLocalCopiedLink(false), 2000);
    }
  };

  const handlePlatformClick = (source: ReviewSource) => {
    const nextSource = activeReviewSource === source ? null : source;
    onSelectReviewSource?.(nextSource);
    const reviewsEl = document.getElementById('traveler-reviews-heading');
    if (reviewsEl) {
      reviewsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const resolvedHighlightBadge =
    highlightBadge || (showRatingsCard && averageRating >= 4.4 ? 'Top Rated' : undefined);

  return (
    <section
      className={cn(
        'relative w-full overflow-x-clip border-b border-[#EAE2D5] bg-gradient-to-b from-[#FFFDF8] via-[#FAF6EC] to-[#F6EFE2] shadow-[0_10px_30px_-8px_rgba(28,21,16,0.05)] z-20',
        className
      )}
    >
      {/* Subtle Moroccan Skyline, Atlas Ridge & Palm Silhouette Watermark (Right Side) */}
      <div
        className="pointer-events-none select-none absolute inset-y-0 right-0 w-full md:w-[58%] overflow-hidden opacity-[0.13]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 800 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full object-cover object-right-bottom"
          preserveAspectRatio="xMaxYMax slice"
        >
          {/* Distant Atlas mountain contour */}
          <path
            d="M40 320 L185 215 L295 258 L445 148 L605 228 L725 170 L820 220 L820 320 Z"
            fill="#E3D2B8"
          />
          {/* Midground Medina rooftop & arch silhouette */}
          <path
            d="M280 320 L280 262 L322 262 L322 246 L360 246 L360 268 L412 268 L412 240 L458 240 L458 272 L520 272 L520 250 L566 250 L566 266 L622 266 L622 232 L640 232 L640 210 L654 196 L668 210 L668 232 L686 232 L686 268 L748 268 L748 250 L800 250 L800 320 Z"
            fill="#D4BEA0"
          />
          {/* Koutoubia-style Minaret */}
          <g fill="#C8AF8C">
            <rect x="650" y="92" width="44" height="176" rx="2" />
            <rect x="658" y="64" width="28" height="28" rx="1" />
            <path d="M658 64 Q672 46 686 64 Z" />
            <line x1="672" y1="38" x2="672" y2="52" stroke="#C8AF8C" strokeWidth="2.5" />
            <circle cx="672" cy="44" r="3" />
            <circle cx="672" cy="38" r="2" />
            {/* Minaret decorative horseshoe arches */}
            <rect x="662" y="114" width="8" height="16" rx="4" fill="#FAF6EC" opacity="0.55" />
            <rect x="674" y="114" width="8" height="16" rx="4" fill="#FAF6EC" opacity="0.55" />
            <rect x="665" y="148" width="14" height="22" rx="7" fill="#FAF6EC" opacity="0.45" />
          </g>
          {/* Left Palm Tree */}
          <g fill="#C9B08D">
            <path d="M512 272 Q518 220 515 178 L522 178 Q526 220 520 272 Z" />
            <path d="M518 180 Q490 165 476 184 Q498 178 518 184 Z" />
            <path d="M518 180 Q498 150 486 156 Q504 166 518 180 Z" />
            <path d="M519 180 Q536 152 552 160 Q536 168 519 180 Z" />
            <path d="M519 182 Q548 172 560 190 Q538 184 519 184 Z" />
          </g>
          {/* Right Palm Tree */}
          <g fill="#C9B08D">
            <path d="M578 272 Q574 232 576 202 L582 202 Q582 232 584 272 Z" />
            <path d="M579 204 Q556 192 545 208 Q563 203 579 207 Z" />
            <path d="M579 204 Q566 180 555 186 Q570 194 579 204 Z" />
            <path d="M580 204 Q598 182 612 189 Q596 196 580 204 Z" />
            <path d="M580 206 Q604 198 614 214 Q596 208 580 208 Z" />
          </g>
        </svg>
      </div>

      {/* Inner Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-8 sm:pt-8 sm:pb-10">
        {/* 1. CATEGORY KICKER + SERIF HEADLINE + INLINE METADATA BAR */}
        <div className="space-y-3 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6E4CE]/90 border border-[#E9CFAF] text-[#9A4722] text-xs font-bold tracking-wide shadow-2xs">
            {DEFAULT_CATEGORY_ICON[category]}
            <span>{categoryBadge}</span>
          </div>

          <h1
            className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#142333] tracking-tight leading-[1.12] max-w-4xl"
            style={{ textWrap: 'balance' }}
          >
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm sm:text-base text-[#5E5448] max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Clean Inline Metadata Strip with Vertical Hairlines */}
          {metadata.length > 0 && (
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 pt-0.5 text-sm text-[#3F372E]">
              {metadata.map((item, index) => {
                const isClickable = Boolean(item.onClick);
                const textColorClass =
                  item.tone === 'open'
                    ? 'text-[#1F5A3B] font-semibold'
                    : item.tone === 'closed'
                      ? 'text-stone-600 font-medium'
                      : item.tone === 'accent'
                        ? 'text-[#142333] font-bold'
                        : 'text-[#2D261E] font-medium';

                return (
                  <React.Fragment key={item.id}>
                    {index > 0 && (
                      <span className="h-4 w-px bg-[#DFD3C1] hidden sm:inline-block" aria-hidden="true" />
                    )}
                    <div
                      className="relative inline-flex items-center"
                      data-schedule-container={item.popoverContent ? 'true' : undefined}
                    >
                      {isClickable ? (
                        <button
                          type="button"
                          onClick={item.onClick}
                          aria-expanded={item.isExpanded}
                          className={cn(
                            'inline-flex items-center gap-1.5 rounded-lg px-2 py-1 -mx-2 -my-1 hover:bg-white/80 transition-colors cursor-pointer whitespace-nowrap',
                            textColorClass
                          )}
                          title="Click to view weekly schedule"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                          {item.sublabel && (
                            <span className="text-stone-500 font-normal text-xs">{item.sublabel}</span>
                          )}
                          <ChevronDown
                            className={cn(
                              'w-3.5 h-3.5 text-stone-500 transition-transform duration-200',
                              item.isExpanded && 'rotate-180 text-[#1F5A3B]'
                            )}
                          />
                        </button>
                      ) : (
                        <span className={cn('inline-flex items-center gap-1.5', textColorClass)}>
                          {item.icon}
                          <span>{item.label}</span>
                          {item.sublabel && (
                            <span className="text-stone-500 font-normal text-xs">{item.sublabel}</span>
                          )}
                        </span>
                      )}

                      {/* Optional Schedule Popover */}
                      {item.popoverContent && (
                        <AnimatePresence>{item.isExpanded && item.popoverContent}</AnimatePresence>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>

        {/* 2. SPLIT 12-COLUMN ARCHITECTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT COLUMN (7 cols): Gated Ratings Bar + Feature Chips + Served For */}
          <div className="lg:col-span-7 space-y-4">
            {/* STRICTLY DATA-GATED MULTI-PLATFORM RATINGS & LOGOS CARD */}
            {showRatingsCard && (
              <div
                className="bg-[#F6EFE3]/95 border border-[#E5D9C5] rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 shadow-2xs"
                id={`listing-hero-ratings-${category}`}
              >
                <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                  {/* Overall Average Score + Moroccan Mate Camel Logo */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl sm:text-[34px] leading-none font-extrabold text-[#142333] tabular-nums tracking-tight">
                          {averageRating.toFixed(1)}
                        </span>
                        <img
                          src={logoImg}
                          alt="Moroccan Mate Camel Rating"
                          className="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-[0_2px_4px_rgba(201,168,76,0.35)] select-none"
                        />
                      </div>
                      {compactTotal && (
                        <span className="mt-1 text-xs font-medium text-[#5C5348] tabular-nums">
                          ({compactTotal} reviews)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Platform Ratings & Logos (Matches Bottom PlaceReviewsSection) */}
                  {sources.length > 0 && (
                    <>
                      <div className="h-10 w-px bg-[#DFD2BC] hidden sm:block shrink-0" aria-hidden="true" />
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 flex-1">
                        {sources.map((s) => {
                          const isSelected = activeReviewSource === s.source;
                          const compactCount = formatCompactCount(s.reviewCount);
                          const scoreText =
                            s.maxRating && s.maxRating !== 5
                              ? `${s.rating}/${s.maxRating}`
                              : s.rating.toFixed(1);

                          return (
                            <button
                              key={s.source}
                              type="button"
                              onClick={() => handlePlatformClick(s.source)}
                              title={`View ${s.source} reviews`}
                              className={cn(
                                'group inline-flex items-center gap-2 px-2 py-1 rounded-xl transition-all cursor-pointer text-left',
                                isSelected
                                  ? 'bg-white ring-2 ring-[#173042] shadow-2xs'
                                  : 'hover:bg-white/75'
                              )}
                            >
                              <PlatformIcon
                                source={s.source}
                                size="sm"
                                className="w-7 h-7 group-hover:scale-105 transition-transform"
                              />
                              <div className="leading-tight">
                                <div className="text-xs sm:text-sm font-bold text-[#142333] tabular-nums">
                                  {scoreText}
                                </div>
                                {compactCount && (
                                  <div className="text-[11px] text-[#6B6156] tabular-nums">
                                    ({compactCount})
                                  </div>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/* Highlight Badge (e.g. Top Rated) */}
                  {resolvedHighlightBadge && (
                    <>
                      <div className="h-10 w-px bg-[#DFD2BC] hidden xl:block shrink-0" aria-hidden="true" />
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5E3C8] border border-[#E6CA9F] text-[#7D4B16] text-xs font-bold whitespace-nowrap shrink-0">
                        <Trophy className="w-3.5 h-3.5 text-[#C87A28]" />
                        <span>{resolvedHighlightBadge}</span>
                      </span>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* FEATURE ATTRIBUTES ROW (with clean +N more expansion) */}
            {features.length > 0 && (
              <div className="flex flex-wrap items-center gap-2" id="listing-hero-features-row">
                {visibleFeatures.map((feat) => {
                  const toneClasses =
                    feat.tone === 'emerald'
                      ? 'bg-emerald-50/90 text-emerald-900 border-emerald-200/80'
                      : feat.tone === 'amber'
                        ? 'bg-amber-50/90 text-amber-900 border-amber-200/80'
                        : feat.tone === 'sky'
                          ? 'bg-sky-50/90 text-sky-900 border-sky-200/80'
                          : feat.tone === 'purple'
                            ? 'bg-purple-50/90 text-purple-900 border-purple-200/80'
                            : 'bg-white/95 text-[#2D261E] border-[#E4D9C7]';

                  const chipEl = (
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border shadow-2xs transition-colors whitespace-nowrap',
                        toneClasses,
                        feat.tooltip && 'cursor-help'
                      )}
                    >
                      {feat.icon}
                      <span>{feat.label}</span>
                    </span>
                  );

                  return feat.tooltip ? (
                    <TagTooltip key={feat.id} content={feat.tooltip}>
                      {chipEl}
                    </TagTooltip>
                  ) : (
                    <React.Fragment key={feat.id}>{chipEl}</React.Fragment>
                  );
                })}

                {hiddenFeatureCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowAllFeatures((prev) => !prev)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 hover:bg-white text-[#2D261E] border border-[#E4D9C7] shadow-2xs transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>{showAllFeatures ? 'Show less' : `+${hiddenFeatureCount} more`}</span>
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 text-stone-500 transition-transform duration-200',
                        showAllFeatures && 'rotate-180'
                      )}
                    />
                  </button>
                )}
              </div>
            )}

            {/* PRESERVED "SERVED FOR" SECTION (Eat mealTypes or equivalent) */}
            {servedFor.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5" id="eat-meal-types-row">
                <span className="text-[11px] font-bold text-[#6F6559] uppercase tracking-wider mr-1">
                  {servedForLabel}:
                </span>
                {servedFor.map((itemLabel, idx) => (
                  <span
                    key={`${itemLabel}-${idx}`}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/85 text-[#2D261E] text-xs font-semibold capitalize border border-[#E4D9C7] shadow-2xs"
                  >
                    {itemLabel.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            )}

            {extraLeftNode}
          </div>

          {/* RIGHT COLUMN (5 cols): ACTION HUB CARD */}
          <div className="lg:col-span-5 bg-[#F6EFE3]/95 border border-[#E5D9C5] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3.5">
            {/* Primary Dual CTAs: Get Directions + Category Primary CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {actions.onDirectionsClick ? (
                <button
                  type="button"
                  onClick={actions.onDirectionsClick}
                  id="listing-btn-get-directions"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1F4B34] hover:bg-[#173A28] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-98 whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4 text-emerald-200 shrink-0" />
                  <span>{actions.directionsLabel || 'Get Directions'}</span>
                </button>
              ) : (
                <a
                  href={actions.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="listing-btn-get-directions"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1F4B34] hover:bg-[#173A28] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-98 whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4 text-emerald-200 shrink-0" />
                  <span>{actions.directionsLabel || 'Get Directions'}</span>
                </a>
              )}

              {actions.primaryAction ? (
                actions.primaryAction.variant === 'muted' ? (
                  <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-stone-200/75 text-stone-500 font-bold text-xs sm:text-sm border border-stone-300/60 select-none whitespace-nowrap">
                    {actions.primaryAction.icon}
                    <span>{actions.primaryAction.label}</span>
                  </div>
                ) : actions.primaryAction.href ? (
                  <a
                    href={actions.primaryAction.href}
                    target={actions.primaryAction.href.startsWith('tel:') ? undefined : '_blank'}
                    rel={actions.primaryAction.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                    title={actions.primaryAction.title}
                    className={cn(
                      'w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-98 whitespace-nowrap',
                      actions.primaryAction.variant === 'whatsapp'
                        ? 'bg-[#25D366] hover:bg-[#20BA59] text-white'
                        : actions.primaryAction.variant === 'dark'
                          ? 'bg-[#173042] hover:bg-[#0F2230] text-white'
                          : 'bg-[#C85A32] hover:bg-[#B24B26] text-white'
                    )}
                  >
                    {actions.primaryAction.icon || <CalendarCheck className="w-4 h-4 shrink-0" />}
                    <span>{actions.primaryAction.label}</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={actions.primaryAction.onClick}
                    title={actions.primaryAction.title}
                    className={cn(
                      'w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-98 whitespace-nowrap',
                      actions.primaryAction.variant === 'whatsapp'
                        ? 'bg-[#25D366] hover:bg-[#20BA59] text-white'
                        : actions.primaryAction.variant === 'dark'
                          ? 'bg-[#173042] hover:bg-[#0F2230] text-white'
                          : 'bg-[#C85A32] hover:bg-[#B24B26] text-white'
                    )}
                  >
                    {actions.primaryAction.icon || <ExternalLink className="w-4 h-4 shrink-0" />}
                    <span>{actions.primaryAction.label}</span>
                  </button>
                )
              ) : null}
            </div>

            {/* Structured Utility Zone:
                Left -> Row 1 (Call, Copy, WhatsApp) + Row 2 (Save to Favorites, Share)
                Right -> Website & Instagram */}
            <div className="flex flex-col sm:flex-row sm:items-stretch justify-between gap-3 pt-1">
              {/* LEFT SIDE: Two logical rows */}
              <div className="flex flex-col gap-2 min-w-0">
                {/* Row 1: Direct Contact (Call, Copy, WhatsApp) */}
                {(cleanPhoneForTel || cleanWhatsApp) && (
                  <div className="flex flex-wrap items-center gap-2">
                    {cleanPhoneForTel && (
                      <>
                        <a
                          href={`tel:${cleanPhoneForTel}`}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-stone-50 text-[#1F4B34] border border-[#E2D6C3] text-xs font-semibold transition-all shadow-2xs active:scale-98 whitespace-nowrap shrink-0"
                          title={`Call ${actions.phone}`}
                        >
                          <Phone className="w-3.5 h-3.5 shrink-0" />
                          <span>Call</span>
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyPhoneClick}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-stone-50 text-[#2D261E] border border-[#E2D6C3] text-xs font-semibold transition-all shadow-2xs active:scale-98 cursor-pointer whitespace-nowrap shrink-0"
                          title={isPhoneCopied ? 'Phone number copied' : `Copy ${actions.phone}`}
                        >
                          {isPhoneCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                          )}
                          <span>{isPhoneCopied ? 'Copied' : 'Copy'}</span>
                        </button>
                      </>
                    )}

                    {cleanWhatsApp && (
                      <a
                        href={`https://wa.me/${cleanWhatsApp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-emerald-50/70 text-[#126E5B] border border-[#C8E2D4] text-xs font-semibold transition-all shadow-2xs active:scale-98 whitespace-nowrap shrink-0"
                        title="Message on WhatsApp"
                      >
                        <WhatsAppIcon className="w-4 h-4 shrink-0" />
                        <span>WhatsApp</span>
                      </a>
                    )}
                  </div>
                )}

                {/* Row 2: Save to Favorites (single save control) & Share */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={actions.onToggleBookmark}
                    id="listing-btn-save-to-list"
                    className={cn(
                      'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer shadow-2xs active:scale-98 whitespace-nowrap shrink-0',
                      actions.isBookmarked
                        ? 'bg-[#1F4B34] text-white border-[#1F4B34]'
                        : 'bg-white hover:bg-emerald-50/70 text-[#1F4B34] border-[#C2DAC6]'
                    )}
                  >
                    <Heart className={cn('w-3.5 h-3.5 shrink-0', actions.isBookmarked && 'fill-current')} />
                    <span>
                      {actions.isBookmarked
                        ? actions.savedLabel || 'Saved in Favorites'
                        : actions.saveLabel || 'Save to Favorites'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleShareClick}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-stone-50 text-[#2D261E] border border-[#E2D6C3] text-xs font-semibold transition-all shadow-2xs active:scale-98 cursor-pointer whitespace-nowrap shrink-0"
                    title={isLinkCopied ? 'Link copied!' : 'Share listing'}
                  >
                    {isLinkCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    ) : (
                      <Share2 className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                    )}
                    <span>{isLinkCopied ? 'Copied' : 'Share'}</span>
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE: Website & Instagram */}
              {(actions.websiteUrl || actions.instagramUrl) && (
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-start sm:justify-center gap-2 pt-2.5 border-t border-[#E5D9C5] sm:pt-0 sm:border-t-0 sm:border-l sm:pl-3.5 shrink-0">
                  {actions.websiteUrl && (
                    <a
                      href={actions.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-stone-50 text-[#173042] border border-[#E2D6C3] text-xs font-semibold transition-all shadow-2xs active:scale-98 whitespace-nowrap shrink-0"
                      title={actions.websiteTitle || 'Visit website'}
                    >
                      <Globe className="w-3.5 h-3.5 text-[#173042] shrink-0" />
                      <span>Website</span>
                    </a>
                  )}

                  {actions.instagramUrl && (
                    <a
                      href={actions.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-rose-50/70 text-[#9F1D48] border border-[#EED3DD] text-xs font-semibold transition-all shadow-2xs active:scale-98 whitespace-nowrap shrink-0"
                      title="Open Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#E1306C] shrink-0" />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingHeroHeader;
