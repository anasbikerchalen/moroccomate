import React from 'react';
import type { ReviewSource } from '../../types/reviews';
import { cn } from '../../utils/cn';
import theForkLogo from '../../assets/images/reviews/the_fork_logo.png';
import wanderlogLogo from '../../assets/images/reviews/wanderlog_logo.jpg';
import restaurantGuruLogo from '../../assets/images/reviews/restaurantguru_logo.png';

interface PlatformIconProps {
  source: ReviewSource;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Formats large review counts cleanly (e.g. 3860 -> "3.9k", 5700 -> "5.7k", 842 -> "842").
 */
export function formatCompactCount(count?: number): string {
  if (typeof count !== 'number' || count <= 0) return '';
  if (count >= 1000) {
    const k = count / 1000;
    return `${k >= 10 ? Math.round(k) : k.toFixed(1).replace(/\.0$/, '')}k`;
  }
  return count.toLocaleString();
}

/**
 * Clean circular platform brand icons for review sources across all 4 categories.
 */
export const PlatformIcon: React.FC<PlatformIconProps> = ({
  source,
  size = 'md',
  className
}) => {
  const sizeClass = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-9 h-9',
    lg: 'w-10 h-10'
  }[size];

  switch (source) {
    case 'Google Maps':
    case 'Google Travel':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-white border border-[#e5e7eb] shadow-2xs shrink-0',
            sizeClass,
            className
          )}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="w-[62%] h-[62%]">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </span>
      );

    case 'Tripadvisor':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-[#34E0A1] text-[#111827] shrink-0 shadow-2xs',
            sizeClass,
            className
          )}
          aria-hidden="true"
        >
          {/* Minimalist Tripadvisor Owl Eyes */}
          <svg viewBox="0 0 24 24" className="w-[68%] h-[68%]" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 8.5c2.2-1.4 4.8-2 7-2s4.8.6 7 2" strokeLinecap="round" />
            <circle cx="8.5" cy="13" r="3.2" fill="#fff" stroke="#111827" strokeWidth="1.6" />
            <circle cx="15.5" cy="13" r="3.2" fill="#fff" stroke="#111827" strokeWidth="1.6" />
            <circle cx="8.5" cy="13" r="1.1" fill="#111827" stroke="none" />
            <circle cx="15.5" cy="13" r="1.1" fill="#111827" stroke="none" />
            <path d="M12 15l-1.3 2h2.6L12 15z" fill="#111827" stroke="none" />
          </svg>
        </span>
      );

    case 'Restaurant Guru':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full overflow-hidden bg-[#f2f2f2] border border-[#e5e7eb] shadow-2xs shrink-0',
            sizeClass,
            className
          )}
          aria-hidden="true"
        >
          <img
            src={restaurantGuruLogo}
            alt=""
            className="w-full h-full object-contain p-[6%] select-none"
            draggable={false}
          />
        </span>
      );

    case 'TheFork':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full overflow-hidden border border-[#d6f5c9] shadow-2xs shrink-0',
            sizeClass,
            className
          )}
          aria-hidden="true"
        >
          <img
            src={theForkLogo}
            alt=""
            className="w-full h-full object-cover select-none"
            draggable={false}
          />
        </span>
      );

    case 'Wanderlog':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full overflow-hidden bg-white border border-[#e5e7eb] shadow-2xs shrink-0',
            sizeClass,
            className
          )}
          aria-hidden="true"
        >
          <img
            src={wanderlogLogo}
            alt=""
            className="w-full h-full object-cover scale-[1.08] select-none"
            draggable={false}
          />
        </span>
      );

    case 'Booking.com':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-[#003580] text-white font-extrabold shrink-0 shadow-2xs',
            sizeClass,
            size === 'xs' || size === 'sm' ? 'text-[9px]' : 'text-sm',
            className
          )}
          aria-hidden="true"
        >
          B<span className="text-[#009FE3]">.</span>
        </span>
      );

    case 'Hotels.com':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-[#D32F2F] text-white font-bold shrink-0 shadow-2xs',
            sizeClass,
            size === 'xs' || size === 'sm' ? 'text-[9px]' : 'text-sm',
            className
          )}
          aria-hidden="true"
        >
          H
        </span>
      );

    case 'Expedia':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-[#1C3263] text-[#FBBF24] shrink-0 shadow-2xs',
            sizeClass,
            className
          )}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="w-[58%] h-[58%]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </span>
      );

    case 'GetYourGuide':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-[#FF5533] text-white font-extrabold shrink-0 shadow-2xs',
            sizeClass,
            size === 'xs' || size === 'sm' ? 'text-[8px]' : 'text-[11px]',
            className
          )}
          aria-hidden="true"
        >
          GYG
        </span>
      );

    case 'Viator':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-[#008768] text-white font-bold shrink-0 shadow-2xs',
            sizeClass,
            size === 'xs' || size === 'sm' ? 'text-[9px]' : 'text-sm',
            className
          )}
          aria-hidden="true"
        >
          V
        </span>
      );

    case 'Reddit':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-[#FF4500] text-white shrink-0 shadow-2xs',
            sizeClass,
            className
          )}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="w-[62%] h-[62%]" fill="currentColor">
            <circle cx="9.2" cy="13.5" r="1.3" />
            <circle cx="14.8" cy="13.5" r="1.3" />
            <path d="M12 6.5c-4.2 0-7.5 2.4-7.5 5.4s3.3 5.4 7.5 5.4 7.5-2.4 7.5-5.4-3.3-5.4-7.5-5.4zm0 9.4c-3.1 0-5.8-1.7-5.8-4s2.7-4 5.8-4 5.8 1.7 5.8 4-2.7 4-5.8 4z" />
            <path d="M13.5 4.2l1.6-1.4a1 1 0 1 1 .8 1.6l-1.3 1.1-.4 1.5-1.5-.3.8-2.5z" />
          </svg>
        </span>
      );

    case 'Trustpilot':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-[#00B67A] text-white font-bold shrink-0 shadow-2xs',
            sizeClass,
            size === 'xs' || size === 'sm' ? 'text-[9px]' : 'text-xs',
            className
          )}
          aria-hidden="true"
        >
          TP
        </span>
      );

    case 'Lonely Planet':
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-[#0057B7] text-white font-bold shrink-0 shadow-2xs',
            sizeClass,
            size === 'xs' || size === 'sm' ? 'text-[8px]' : 'text-xs',
            className
          )}
          aria-hidden="true"
        >
          LP
        </span>
      );

    default:
      return (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full bg-[#173042] text-white font-bold shrink-0 shadow-2xs',
            sizeClass,
            size === 'xs' || size === 'sm' ? 'text-[9px]' : 'text-xs',
            className
          )}
          aria-hidden="true"
        >
          {String(source).slice(0, 2).toUpperCase()}
        </span>
      );
  }
};

export default PlatformIcon;
