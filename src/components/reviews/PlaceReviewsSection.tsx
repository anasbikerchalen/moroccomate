import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Pause,
  Play
} from 'lucide-react';
import type { PlaceReviewsData, ReviewSource, SingleReview, SourceRatingSummary } from '../../types/reviews';
import { computePlaceReviewScore } from '../../types/reviews';
import logoImg from '../../assets/images/logo.png';
import ReviewBubble from './ReviewBubble';
import PlatformIcon, { formatCompactCount } from './PlatformIcon';
import { cn } from '../../utils/cn';

interface PlaceReviewsSectionProps {
  reviewsData?: PlaceReviewsData;
  placeName?: string;
  category?: 'eat' | 'sleep' | 'things-to-do' | 'shopping';
  className?: string;
  externalSelectedSource?: ReviewSource | null;
  onSelectedSourceChange?: (source: ReviewSource | null) => void;
}

function getSourceDefaultDomain(source: ReviewSource): string {
  switch (source) {
    case 'Google Maps':
      return 'https://www.google.com/maps';
    case 'Google Travel':
      return 'https://www.google.com/travel';
    case 'Tripadvisor':
      return 'https://www.tripadvisor.com';
    case 'Booking.com':
      return 'https://www.booking.com';
    case 'Restaurant Guru':
      return 'https://restaurantguru.com';
    case 'TheFork':
      return 'https://www.thefork.com';
    case 'Wanderlog':
      return 'https://wanderlog.com';
    case 'GetYourGuide':
      return 'https://www.getyourguide.com';
    case 'Viator':
      return 'https://www.viator.com';
    case 'Reddit':
      return 'https://www.reddit.com';
    case 'Trustpilot':
      return 'https://www.trustpilot.com';
    case 'Lonely Planet':
      return 'https://www.lonelyplanet.com';
    case 'Hotels.com':
      return 'https://www.hotels.com';
    case 'Expedia':
      return 'https://www.expedia.com';
    default:
      return 'https://www.google.com/maps';
  }
}

function isGoodReview(review: { sentiment?: string; rating?: number }) {
  if (review.sentiment) return review.sentiment === 'good';
  return typeof review.rating === 'number' && review.rating >= 4;
}

function isBadReview(review: { sentiment?: string; rating?: number }) {
  if (review.sentiment) return review.sentiment === 'bad';
  return typeof review.rating === 'number' && review.rating <= 3;
}

interface FlowingColumnProps {
  items: { review: SingleReview; key: string }[];
  direction: 'up' | 'down';
  speedPxPerSec?: number;
  globalPaused?: boolean;
}

/**
 * Independent vertical flowing column.
 * - Continuously glides up or down at a gentle pace when enough reviews exist.
 * - Pauses ONLY this column when hovered or when any review inside it has "Expand text" open,
 *   allowing the neighboring column to keep flowing smoothly.
 * - Supports full native wheel / touch / button scrolling at all times.
 */
const FlowingColumn: React.FC<FlowingColumnProps> = ({
  items,
  direction,
  speedPxPerSec = 22,
  globalPaused = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstPassRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(() => new Set());
  const [manualCooldownUntil, setManualCooldownUntil] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const shouldLoop = items.length >= 3 && !prefersReducedMotion;
  const isPaused = globalPaused || isHovered || expandedKeys.size > 0;

  // Respect OS reduced motion setting
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Reset expanded tracking & initial scroll offset when filtered item list changes
  useEffect(() => {
    setExpandedKeys(new Set());
    const el = containerRef.current;
    const passEl = firstPassRef.current;
    if (!el || !passEl) return;

    if (shouldLoop && direction === 'down') {
      // Position at the seam so downward drift has immediate headroom
      requestAnimationFrame(() => {
        if (containerRef.current && firstPassRef.current) {
          containerRef.current.scrollTop = firstPassRef.current.offsetHeight;
        }
      });
    } else {
      el.scrollTop = 0;
    }
  }, [items, direction, shouldLoop]);

  const handleExpandChange = useCallback((reviewKey: string, expanded: boolean) => {
    setExpandedKeys((prev) => {
      const next = new Set(prev);
      if (expanded) {
        next.add(reviewKey);
      } else {
        next.delete(reviewKey);
      }
      return next;
    });
  }, []);

  // Continuous gentle scroll animation loop
  useEffect(() => {
    if (!shouldLoop) return;

    let rafId = 0;
    let lastTime = performance.now();
    let carry = 0;

    const tick = (now: number) => {
      const dt = Math.min(0.08, (now - lastTime) / 1000);
      lastTime = now;

      const el = containerRef.current;
      const passEl = firstPassRef.current;

      if (el && passEl && !isPaused && now > manualCooldownUntil) {
        const passHeight = passEl.offsetHeight;
        if (passHeight > el.clientHeight * 0.85) {
          carry += speedPxPerSec * dt;
          const wholePx = Math.trunc(carry);
          if (wholePx !== 0) {
            carry -= wholePx;
            if (direction === 'up') {
              el.scrollTop += wholePx;
              if (el.scrollTop >= passHeight) {
                el.scrollTop -= passHeight;
              }
            } else {
              el.scrollTop -= wholePx;
              if (el.scrollTop <= 1) {
                el.scrollTop += passHeight;
              }
            }
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [shouldLoop, isPaused, direction, speedPxPerSec, manualCooldownUntil]);

  const handleManualWheel = () => {
    setManualCooldownUntil(performance.now() + 1400);
  };

  const nudgeScroll = (delta: number) => {
    setManualCooldownUntil(performance.now() + 1800);
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ top: delta, behavior: 'smooth' });
  };

  return (
    <div
      className="relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Quick manual up/down scroll buttons */}
      {shouldLoop && (
        <div className="flex items-center justify-end gap-1 px-1 mb-1.5">
          <button
            type="button"
            onClick={() => nudgeScroll(-220)}
            aria-label="Scroll column up"
            className="p-1 rounded-md border border-[#e5dcce] bg-white/90 text-[#665b4f] hover:text-[#173042] hover:bg-white transition-colors cursor-pointer"
            title="Scroll up"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => nudgeScroll(220)}
            aria-label="Scroll column down"
            className="p-1 rounded-md border border-[#e5dcce] bg-white/90 text-[#665b4f] hover:text-[#173042] hover:bg-white transition-colors cursor-pointer"
            title="Scroll down"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Scrollable flowing viewport */}
      <div className="relative">
        {/* Soft edge fades */}
        {shouldLoop && (
          <>
            <div className="pointer-events-none absolute top-0 left-0 right-2 h-5 bg-gradient-to-b from-[#fdfbf7] to-transparent z-10 rounded-t-2xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-2 h-6 bg-gradient-to-t from-[#fdfbf7] to-transparent z-10 rounded-b-2xl" />
          </>
        )}

        <div
          ref={containerRef}
          onWheel={handleManualWheel}
          onTouchStart={handleManualWheel}
          className={cn(
            'overflow-y-auto pr-1.5 [scrollbar-width:thin] [scrollbar-color:#d8cbb5_transparent] rounded-2xl',
            shouldLoop ? 'max-h-[480px]' : 'max-h-[540px]'
          )}
        >
          {/* Pass 1 */}
          <div ref={firstPassRef} className="space-y-4 pb-4">
            {items.map(({ review, key }) => (
              <ReviewBubble
                key={`p1-${key}`}
                review={review}
                reviewKey={`p1-${key}`}
                onExpandChange={handleExpandChange}
              />
            ))}
          </div>

          {/* Pass 2 (seamless duplicate loop only when flowing) */}
          {shouldLoop && (
            <div aria-hidden="true" className="space-y-4 pb-4">
              {items.map(({ review, key }) => (
                <ReviewBubble
                  key={`p2-${key}`}
                  review={review}
                  reviewKey={`p2-${key}`}
                  onExpandChange={handleExpandChange}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const PlaceReviewsSection: React.FC<PlaceReviewsSectionProps> = ({
  reviewsData,
  placeName = 'this place',
  className,
  externalSelectedSource,
  onSelectedSourceChange
}) => {
  const rawReviews = reviewsData?.reviews || [];
  const rawSources = reviewsData?.sources || [];

  // Filter & flow state
  const [selectedSource, setSelectedSourceState] = useState<ReviewSource | null>(externalSelectedSource ?? null);
  const [selectedSentiment, setSelectedSentiment] = useState<'all' | 'good' | 'bad'>('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [globalPaused, setGlobalPaused] = useState(false);

  useEffect(() => {
    if (externalSelectedSource !== undefined) {
      setSelectedSourceState(externalSelectedSource);
    }
  }, [externalSelectedSource]);

  const setSelectedSource = useCallback((next: ReviewSource | null) => {
    setSelectedSourceState(next);
    onSelectedSourceChange?.(next);
  }, [onSelectedSourceChange]);

  // Aggregate average rating & total review count across all listed sources
  const { averageRating, totalCount } = useMemo(() => {
    return computePlaceReviewScore(reviewsData);
  }, [reviewsData]);

  /**
   * Place-Specific Dynamic Review Tags:
   * Tags are NOT a strict/hardcoded global enum. Each listing derives its own
   * filter tags dynamically from the `tags` found inside its collected reviews.
   */
  const availableTags = useMemo(() => {
    const set = new Set<string>();
    rawReviews.forEach((r) => {
      (r.tags || []).forEach((t) => set.add(t));
    });
    return Array.from(set);
  }, [rawReviews]);

  const filteredReviews = useMemo(() => {
    return rawReviews
      .map((review, idx) => ({
        review,
        key: review.id || `${review.author}-${review.postedDate}-${idx}`
      }))
      .filter(({ review }) => {
        if (selectedSource && review.source !== selectedSource) return false;
        if (selectedSentiment === 'good' && !isGoodReview(review)) return false;
        if (selectedSentiment === 'bad' && !isBadReview(review)) return false;
        if (selectedTag && (!review.tags || !review.tags.includes(selectedTag))) return false;
        return true;
      });
  }, [rawReviews, selectedSource, selectedSentiment, selectedTag]);

  // Split into two balanced columns for desktop dual-column flow
  const { leftItems, rightItems } = useMemo(() => {
    const left: { review: SingleReview; key: string }[] = [];
    const right: { review: SingleReview; key: string }[] = [];
    filteredReviews.forEach((entry, idx) => {
      if (idx % 2 === 0) left.push(entry);
      else right.push(entry);
    });
    return { leftItems: left, rightItems: right };
  }, [filteredReviews]);

  // Active or primary source for the outbound "See reviews on [Source]" button
  const activeSourceSummary: SourceRatingSummary | undefined = useMemo(() => {
    if (selectedSource) {
      return rawSources.find((s) => s.source === selectedSource);
    }
    return rawSources[0];
  }, [selectedSource, rawSources]);

  const ctaSource: ReviewSource = selectedSource || activeSourceSummary?.source || 'Google Maps';
  const destinationUrl =
    activeSourceSummary?.url ||
    `${getSourceDefaultDomain(ctaSource)}/search?q=${encodeURIComponent(placeName + ' Morocco')}`;

  const resetFilters = () => {
    setSelectedSource(null);
    setSelectedSentiment('all');
    setSelectedTag(null);
  };

  const hasActiveFilters = Boolean(selectedSource || selectedSentiment !== 'all' || selectedTag);

  // CRITICAL RULE: Hidden completely on UI if no reviews data exists for this listing
  if (!reviewsData || (rawReviews.length === 0 && rawSources.length === 0)) {
    return null;
  }

  const goodCount = rawReviews.filter(isGoodReview).length;
  const badCount = rawReviews.filter(isBadReview).length;
  const compactTotal = formatCompactCount(totalCount) || String(totalCount);

  return (
    <section
      aria-labelledby="traveler-reviews-heading"
      className={cn(
        'rounded-3xl border border-[#e8dfcf] bg-[#fdfbf7] px-5 pt-7 pb-10 sm:px-8 sm:pt-9 sm:pb-12 shadow-xs relative overflow-hidden',
        className
      )}
    >
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER & PLATFORM ICONS + LARGE AVERAGE RATING
         ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 mb-6">
        {/* Title with warm burst strokes matching reference mockup */}
        <div className="relative inline-flex items-start gap-2 mb-5">
          <svg
            viewBox="0 0 28 28"
            className="w-6 h-6 text-[#de6b48] -ml-1 -mt-2 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M12 4L14 10" />
            <path d="M5 10L10 13" />
            <path d="M4 19L9 18" />
          </svg>
          <h2
            id="traveler-reviews-heading"
            className="font-display text-3xl sm:text-4xl font-extrabold text-[#142333] tracking-tight"
          >
            Reviews
          </h2>
        </div>

        {/* DESKTOP HEADER ROW: Platform icons on left | Vertical Divider | Large Overall Score on right */}
        <div className="hidden md:flex items-center justify-between gap-6 pb-6 border-b border-[#ece3d3]">
          {/* Clickable circular platform icon badges */}
          <div className="flex items-center flex-wrap gap-x-5 gap-y-3">
            {rawSources.map((s) => {
              const isSelected = selectedSource === s.source;
              const compactCount = formatCompactCount(s.reviewCount);
              const scoreText = s.maxRating && s.maxRating !== 5 ? `${s.rating}/${s.maxRating}` : s.rating.toFixed(1);

              return (
                <button
                  key={s.source}
                  type="button"
                  onClick={() => setSelectedSource(isSelected ? null : s.source)}
                  title={`Filter reviews from ${s.source}`}
                  className={cn(
                    'group flex items-center gap-2.5 px-2.5 py-1.5 rounded-2xl transition-all cursor-pointer text-left',
                    isSelected
                      ? 'bg-white ring-2 ring-[#173042] shadow-xs'
                      : 'hover:bg-white/80'
                  )}
                >
                  <PlatformIcon source={s.source} size="md" className="group-hover:scale-105 transition-transform" />
                  <div className="leading-tight">
                    <div className="text-sm font-extrabold text-[#142333] tabular-nums">
                      {scoreText}
                    </div>
                    {compactCount && (
                      <div className="text-[11px] font-medium text-[#6f685f] tabular-nums">
                        ({compactCount})
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Vertical separator + Large Prominent Average Rating with Camel Logo */}
          <div className="flex items-center gap-6 shrink-0 pl-6 border-l border-[#e3d9c7]">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2.5">
                <span className="text-[40px] leading-none font-extrabold text-[#142333] tabular-nums tracking-tight">
                  {averageRating.toFixed(1)}
                </span>
                <img
                  src={logoImg}
                  alt="MoroccoMate Camel Rating"
                  className="w-9 h-9 object-contain drop-shadow-[0_2px_4px_rgba(201,168,76,0.35)] select-none"
                />
              </div>
              <span className="mt-1.5 text-xs font-medium text-[#5c554c] tabular-nums">
                Total · <strong className="font-bold text-[#142333]">{compactTotal}</strong> reviews
              </span>
            </div>
          </div>
        </div>

        {/* MOBILE HEADER STACK: Source icons grid -> Hairline divider -> Centered Large Average Rating */}
        <div className="flex md:hidden flex-col gap-5 pb-5 border-b border-[#ece3d3]">
          {rawSources.length > 0 && (
            <div className="flex items-start justify-center flex-wrap gap-4">
              {rawSources.map((s) => {
                const isSelected = selectedSource === s.source;
                const compactCount = formatCompactCount(s.reviewCount);
                const scoreText = s.maxRating && s.maxRating !== 5 ? `${s.rating}/${s.maxRating}` : s.rating.toFixed(1);

                return (
                  <button
                    key={s.source}
                    type="button"
                    onClick={() => setSelectedSource(isSelected ? null : s.source)}
                    className={cn(
                      'flex flex-col items-center px-2 py-1.5 rounded-xl transition-all cursor-pointer',
                      isSelected ? 'bg-white ring-2 ring-[#173042] shadow-xs' : 'hover:bg-white/70'
                    )}
                  >
                    <PlatformIcon source={s.source} size="md" />
                    <span className="mt-1.5 text-xs font-extrabold text-[#142333] tabular-nums">
                      {scoreText}
                    </span>
                    {compactCount && (
                      <span className="text-[11px] font-medium text-[#6f685f] tabular-nums">
                        ({compactCount})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          <div className="h-px w-full bg-[#ece3d3]" />

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span className="text-4xl leading-none font-extrabold text-[#142333] tabular-nums">
                {averageRating.toFixed(1)}
              </span>
              <img
                src={logoImg}
                alt="MoroccoMate Camel Rating"
                className="w-8 h-8 object-contain drop-shadow-[0_2px_4px_rgba(201,168,76,0.35)] select-none"
              />
            </div>
            <span className="mt-1 text-xs font-medium text-[#5c554c] tabular-nums">
              Total · <strong className="font-bold text-[#142333]">{compactTotal}</strong> reviews
            </span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. FILTER BAR: SENTIMENT TOGGLE + DYNAMIC TOPIC TAGS + FLOW CONTROL
         ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-3.5">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Good / Bad / All Sentiment Filter */}
          <div className="inline-flex items-center gap-1 p-1 bg-[#f3ece0] rounded-xl border border-[#e4d9c7]">
            <button
              type="button"
              onClick={() => setSelectedSentiment('all')}
              className={cn(
                'px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer',
                selectedSentiment === 'all'
                  ? 'bg-white text-[#142333] shadow-2xs border border-[#ded2be]'
                  : 'text-[#6c6155] hover:text-[#142333]'
              )}
            >
              All ({rawReviews.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedSentiment('good')}
              className={cn(
                'px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer',
                selectedSentiment === 'good'
                  ? 'bg-[#eaf6ec] text-[#1f5c35] shadow-2xs border border-[#cbe6cf]'
                  : 'text-[#6c6155] hover:text-[#1f5c35]'
              )}
            >
              Good ({goodCount})
            </button>
            <button
              type="button"
              onClick={() => setSelectedSentiment('bad')}
              className={cn(
                'px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer',
                selectedSentiment === 'bad'
                  ? 'bg-[#fdecec] text-[#9b2c2c] shadow-2xs border border-[#f5cbcb]'
                  : 'text-[#6c6155] hover:text-[#9b2c2c]'
              )}
            >
              Bad ({badCount})
            </button>
          </div>

          {/* Dynamic place-specific topic tags */}
          {availableTags.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 max-w-full">
              {availableTags.map((tag) => {
                const isTagActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(isTagActive ? null : tag)}
                    className={cn(
                      'px-2.5 py-1 rounded-lg text-xs font-medium transition-all shrink-0 border cursor-pointer',
                      isTagActive
                        ? 'bg-[#142333] text-white border-[#142333]'
                        : 'bg-white/80 text-[#5c554c] border-[#e5dcce] hover:border-[#c9b99c] hover:text-[#142333]'
                    )}
                  >
                    #{tag}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#8c6d37] hover:text-[#5a431c] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}

          {filteredReviews.length >= 3 && (
            <button
              type="button"
              onClick={() => setGlobalPaused((p) => !p)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-[#e5dcce] bg-white/85 text-xs font-medium text-[#5c554c] hover:text-[#142333] hover:bg-white transition-colors cursor-pointer"
              title={globalPaused ? 'Resume flowing reviews' : 'Pause flowing reviews'}
            >
              {globalPaused ? (
                <>
                  <Play className="w-3 h-3" />
                  <span>Resume flow</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3" />
                  <span>Pause flow</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. FLOWING REVIEW BUBBLES (DUAL INDEPENDENT COLUMNS ON DESKTOP)
         ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10">
        {filteredReviews.length > 0 ? (
          <>
            {/* Desktop: Two independent flowing vertical columns (hovering one stops ONLY that column) */}
            <div
              className={cn(
                'hidden md:grid gap-5 items-start',
                rightItems.length > 0 ? 'md:grid-cols-2' : 'md:grid-cols-1'
              )}
            >
              <FlowingColumn
                items={leftItems}
                direction="up"
                speedPxPerSec={22}
                globalPaused={globalPaused}
              />
              {rightItems.length > 0 ? (
                <FlowingColumn
                  items={rightItems}
                  direction="down"
                  speedPxPerSec={22}
                  globalPaused={globalPaused}
                />
              ) : null}
            </div>

            {/* Mobile: Single flowing vertical column with manual scroll */}
            <div className="md:hidden">
              <FlowingColumn
                items={filteredReviews}
                direction="up"
                speedPxPerSec={20}
                globalPaused={globalPaused}
              />
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#d9ccb6] bg-[#faf6ee] p-8 text-center">
            <p className="text-sm font-medium text-[#736554]">
              No reviews match the selected filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-3 text-xs font-semibold text-[#8c6d37] hover:underline cursor-pointer"
            >
              Show all reviews
            </button>
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. CENTERED OUTBOUND SOURCE BUTTON (WITH SOURCE ICON)
         ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 mt-8 flex justify-center">
        <a
          href={destinationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full border border-[#d4cab7] bg-white text-[#142333] hover:bg-[#142333] hover:text-white hover:border-[#142333] font-bold text-sm transition-all shadow-2xs cursor-pointer group"
        >
          <PlatformIcon source={ctaSource} size="sm" />
          <span>{`See all reviews on ${ctaSource}`}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Subtle Moroccan skyline & palm silhouette along bottom matching reference layout */}
      <svg
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 w-full h-14 sm:h-16 text-[#ede1cd] opacity-80"
        fill="currentColor"
      >
        <path d="M0,90 L0,72 L36,72 L36,56 L58,56 L58,44 L76,44 L76,56 L102,56 L102,68 L145,68 L145,52 L168,52 L168,66 L210,66 L210,74 L265,74 L265,58 L286,58 L286,42 L308,42 L308,58 L335,58 L335,70 L420,70 L420,78 L540,78 L540,68 L620,68 L620,76 L740,76 L740,62 L768,62 L768,38 L784,26 L800,38 L800,62 L836,62 L836,72 L910,72 L910,54 L942,54 L942,68 L1015,68 L1015,48 L1042,48 L1042,64 L1110,64 L1110,52 L1145,52 L1145,70 L1200,70 L1200,90 Z" />
      </svg>
    </section>
  );
};

export default PlaceReviewsSection;
