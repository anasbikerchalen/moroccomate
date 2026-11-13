import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import type { SingleReview } from '../../types/reviews';
import { formatRelativeTime } from '../../types/reviews';
import CamelRating from '../finder/CamelRating';
import PlatformIcon from './PlatformIcon';
import { cn } from '../../utils/cn';

interface ReviewBubbleProps {
  review: SingleReview;
  reviewKey: string;
  onExpandChange?: (reviewKey: string, expanded: boolean) => void;
}

const EXPAND_CHAR_THRESHOLD = 185;

/**
 * Clean SVG avatar for Man / Woman / Neutral reviewer.
 * Uses vector icons only (no external portrait images).
 */
function GenderAvatar({ gender, tone }: { gender?: 'man' | 'woman' | 'other'; tone: 'good' | 'bad' | 'neutral' }) {
  const toneRing =
    tone === 'good'
      ? 'bg-white/90 border-[#cde4d1] text-[#225c39]'
      : tone === 'bad'
      ? 'bg-white/90 border-[#f2c8c8] text-[#9b2c2c]'
      : 'bg-white/90 border-[#e2d6be] text-[#2c4e68]';

  if (gender === 'woman') {
    return (
      <div
        className={cn(
          'w-9 h-9 rounded-full border flex items-center justify-center shrink-0 shadow-2xs',
          toneRing
        )}
        title="Woman reviewer"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
          <path d="M5.5 20c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6" />
          <path d="M7.5 12.5c-.8.8-1 2.2-1 3.5" strokeWidth="1.5" />
          <path d="M16.5 12.5c.8.8 1 2.2 1 3.5" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'w-9 h-9 rounded-full border flex items-center justify-center shrink-0 shadow-2xs',
        toneRing
      )}
      title="Man reviewer"
    >
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      </svg>
    </div>
  );
}

function resolveSentimentTone(review: SingleReview): 'good' | 'bad' | 'neutral' {
  if (review.sentiment === 'good' || review.sentiment === 'bad' || review.sentiment === 'neutral') {
    return review.sentiment;
  }
  if (typeof review.rating === 'number') {
    if (review.rating >= 4) return 'good';
    if (review.rating <= 3) return 'bad';
  }
  return 'neutral';
}

export const ReviewBubble: React.FC<ReviewBubbleProps> = ({
  review,
  reviewKey,
  onExpandChange
}) => {
  const { author, gender, text, postedDate, source, rating = 5, sourceUrl, tags = [] } = review;
  const [isExpanded, setIsExpanded] = useState(false);

  const relativeDate = formatRelativeTime(postedDate);
  const tone = resolveSentimentTone(review);
  const isLongText = text.length > EXPAND_CHAR_THRESHOLD;

  const surfaceClass =
    tone === 'good'
      ? 'bg-[#eaf6ec] border-[#d2ead6] hover:border-[#b7dec0]'
      : tone === 'bad'
      ? 'bg-[#fdecec] border-[#f6d0d0] hover:border-[#ebb3b3]'
      : 'bg-[#faf6ee] border-[#e8dfcf] hover:border-[#d8c9ae]';

  const handleToggleExpand = () => {
    const next = !isExpanded;
    setIsExpanded(next);
    onExpandChange?.(reviewKey, next);
  };

  return (
    <article
      className={cn(
        'group relative flex flex-col justify-between rounded-2xl border p-4 sm:p-5 transition-all duration-200 shadow-2xs',
        surfaceClass
      )}
    >
      {/* Top Row: Man/Woman Avatar + Author & Source/Relative Date + Camel Rating */}
      <div className="flex items-start justify-between gap-2.5 mb-2.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <GenderAvatar gender={gender} tone={tone} />
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-[#173042] truncate leading-tight">
              {author}
            </h4>
            <div className="flex items-center gap-1.5 mt-0.5 text-xs text-[#5d6870] min-w-0">
              <PlatformIcon source={source} size="xs" />
              <span className="font-medium text-[#374651] truncate">{source}</span>
              <span aria-hidden="true" className="text-[#9aa3aa]">·</span>
              <span className="whitespace-nowrap text-[#636e76]">{relativeDate}</span>
            </div>
          </div>
        </div>

        {/* Camel Logo Rating Heads (instead of stars) */}
        {typeof rating === 'number' && (
          <div className="shrink-0 flex items-center pt-0.5">
            <CamelRating rating={rating} size="xs" showScore={false} />
          </div>
        )}
      </div>

      {/* Review Text with Compact Clamp + Expand Text Toggle */}
      <div className="text-[13.5px] text-[#223442] leading-relaxed">
        <p className={cn(!isExpanded && isLongText && 'line-clamp-3')}>
          {text}
        </p>

        {isLongText && (
          <button
            type="button"
            onClick={handleToggleExpand}
            className="mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-[#173042] hover:text-[#8c6d37] underline-offset-2 hover:underline cursor-pointer transition-colors"
          >
            <span>{isExpanded ? 'Show less' : 'Expand text'}</span>
            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        )}
      </div>

      {/* Quiet Inline Tags & Optional Direct Source Link */}
      {(tags.length > 0 || sourceUrl) && (
        <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap text-[11px] font-medium text-[#5d6870]">
            {tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                {idx > 0 && <span aria-hidden="true" className="text-[#a8b0b5]">·</span>}
                <span>#{tag}</span>
              </React.Fragment>
            ))}
          </div>

          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#173042] hover:text-[#8c6d37] transition-colors"
              title={`View original review on ${source}`}
            >
              <span>Source</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ReviewBubble;
