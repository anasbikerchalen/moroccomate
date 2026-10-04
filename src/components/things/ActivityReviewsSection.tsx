import React from 'react';
import { Star } from 'lucide-react';
import type { ActivityReview } from '../../things-to-do';

interface ActivityReviewsSectionProps {
  reviews?: ActivityReview[];
  title?: string;
}

/**
 * "Reviews" — large editorial heading with review cards.
 * Only displays when reviews exist for the activity.
 */
export const ActivityReviewsSection: React.FC<ActivityReviewsSectionProps> = ({ reviews, title = 'Reviews' }) => {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="rounded-2xl border border-[#ece4d5] bg-white p-6 sm:p-7 shadow-2xs">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-[#173042]">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review, i) => (
          <div key={`${review.author}-${i}`} className="rounded-xl border border-[#ece4d5] bg-[#faf6ee] p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className={`w-3.5 h-3.5 ${starIdx < Math.round(review.rating) ? 'fill-[#DFAF4F] text-[#DFAF4F]' : 'text-[#e5dcce]'}`}
                  />
                ))}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#66757D]">
                {review.type === 'local' ? 'Local' : 'Traveler'}
              </span>
            </div>
            <p className="text-sm text-[#173042] leading-relaxed">“{review.text}”</p>
            <span className="mt-2 block text-xs font-semibold text-[#66757D]">— {review.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
};