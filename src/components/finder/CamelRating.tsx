import React from 'react';
import logoImg from '../../assets/images/logo.png';
import { cn } from '../../utils/cn';

interface CamelRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showScore?: boolean;
  showCount?: boolean;
  reviewCount?: number;
  className?: string;
  scoreClassName?: string;
}

export default function CamelRating({
  rating = 4.5,
  maxRating = 5,
  size = 'sm',
  showScore = true,
  showCount = false,
  reviewCount,
  className,
  scoreClassName
}: CamelRatingProps) {
  // Safe bounds
  const clampedRating = Math.max(0, Math.min(maxRating, Number(rating) || 0));
  
  // Size mapping for the kid camel logo heads
  const sizeMap = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const textMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      {/* 5 Kid Camel Logo Heads */}
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }).map((_, index) => {
          const starValue = index + 1;
          const isFull = starValue <= Math.floor(clampedRating);
          const isPartial = !isFull && starValue - 0.75 <= clampedRating;

          return (
            <div 
              key={index} 
              className={cn(
                "relative flex items-center justify-center transition-transform hover:scale-110",
                sizeMap[size]
              )}
              title={`${starValue} of ${maxRating}`}
            >
              <img
                src={logoImg}
                alt={`Rating camel ${starValue}`}
                className={cn(
                  "w-full h-full object-contain select-none transition-all duration-200",
                  isFull 
                    ? "brightness-105 contrast-110 drop-shadow-[0_1px_2px_rgba(201,168,76,0.4)]" 
                    : isPartial
                    ? "opacity-60 saturate-50"
                    : "grayscale opacity-25 brightness-95"
                )}
              />
            </div>
          );
        })}
      </div>

      {/* Numeric Score */}
      {showScore && (
        <span className={cn("font-bold text-stone-900 tracking-tight", textMap[size], scoreClassName)}>
          {clampedRating.toFixed(1)}
          <span className="text-stone-400 font-normal text-xs ml-0.5">/{maxRating}</span>
        </span>
      )}

      {/* Review Count */}
      {showCount && typeof reviewCount === 'number' && (
        <span className="text-stone-400 text-xs">
          ({reviewCount})
        </span>
      )}
    </div>
  );
}
