/**
 * ReviewCard.tsx
 *
 * A single review card for the Shop Detail View.
 * Renders author, rating stars, text, and badge (tourist/local).
 *
 * Usage:
 *   <ReviewCard review={{ author: 'Emma S.', text: '...', rating: 5, type: 'tourist' }} />
 */

import { motion } from 'motion/react';
import { Star, User, MapPin } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface ReviewData {
  author: string;
  text: string;
  rating: number;
  type: 'tourist' | 'local';
}

interface ReviewCardProps {
  review: ReviewData;
  index?: number; // for staggered animation
}

export default function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  const { author, text, rating, type } = review;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="bg-stone-50 rounded-2xl p-5 border border-stone-100"
    >
      {/* Author row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          {/* Avatar circle */}
          <div className="w-8 h-8 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
            <User className="w-4 h-4 text-[#C9A84C]" />
          </div>
          <div>
            <span className="text-sm font-bold text-stone-900">{author}</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={cn(
                    'w-3 h-3',
                    star <= rating ? 'text-amber-400 fill-amber-400' : 'text-stone-200',
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Type badge */}
        <span
          className={cn(
            'text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-lg',
            type === 'local'
              ? 'bg-emerald-50 text-emerald-600'
              : 'bg-blue-50 text-blue-600',
          )}
        >
          {type === 'local' ? (
            <span className="flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5" /> Local
            </span>
          ) : (
            'Tourist'
          )}
        </span>
      </div>

      {/* Review text */}
      <p className="text-sm text-stone-600 leading-relaxed">&ldquo;{text}&rdquo;</p>
    </motion.div>
  );
}
