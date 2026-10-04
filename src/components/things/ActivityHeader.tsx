import React, { useState } from 'react';
import { Heart, MapPin, Navigation, ExternalLink } from 'lucide-react';
import type { ActivityListing } from '../../things-to-do';
import { formatDuration, formatPrice, formatGroupLabel } from '../../things-to-do';
import { ActivityIcon } from './ActivityIcon';

interface ActivityHeaderProps {
  activity: ActivityListing;
}

/**
 * Main experience hero — two-column layout:
 * Left: decorative no-image panel (~58%)
 * Right: identity (favorite, title, category, location, directions, quick facts)
 */
export const ActivityHeader: React.FC<ActivityHeaderProps> = ({ activity }) => {
  const [isSaved, setIsSaved] = useState(false);

  const photosUrl = activity.directions_url
    || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${activity.name} ${activity.city || ''} Morocco`)}`;

  const duration = formatDuration(activity.duration_minutes);
  const price = formatPrice(activity.pricing);
  const group = formatGroupLabel(activity.capacity) || 'Flexible';

  const quickFacts = [
    { icon: 'clock', value: duration },
    { icon: 'tag', value: price },
    { icon: 'users', value: group },
  ].filter(f => f.value);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* LEFT COLUMN: No-Image Hero Panel */}
      <div className="lg:col-span-7">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl
          bg-gradient-to-br from-[#607B5D] to-[#2C4A3A] shadow-sm border border-[#e5dcce]
          flex flex-col items-center justify-center gap-4">
          {/* Decorative pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(223,175,79,0.14)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Activity Type Badge (Top Left) */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center rounded-full bg-[#607B5D] px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-md">
              {activity.activity_type}
            </span>
          </div>

          {/* Center CTA */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Photos</p>
            <a
              href={photosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                bg-white/90 hover:bg-white text-[#173042] text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#DFAF4F]" />
              View photos on Google Maps
              <ExternalLink className="w-3.5 h-3.5 opacity-50" />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Experience identity */}
      <div className="lg:col-span-5 flex flex-col justify-between py-1">
        <div>
          {/* Favorite button */}
          <div className="flex items-center justify-end mb-2">
            <button
              type="button"
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                isSaved
                  ? 'text-red-600 bg-red-50 hover:bg-red-100'
                  : 'text-[#66757D] hover:bg-[#efe6d8] hover:text-[#173042]'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save experience'}
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#173042] leading-[1.1]">
            {activity.name}
          </h1>

          {/* Category · Type */}
          <div className="mt-2.5 flex items-center gap-2 text-sm text-[#66757D] font-medium">
            <ActivityIcon name="leaf" className="w-4 h-4 text-[#607B5D]" />
            <span>
              {activity.category} · {activity.activity_type}
            </span>
          </div>

          {/* Location */}
          <div className="mt-2 flex items-center gap-2 text-sm text-[#173042]">
            <MapPin className="w-4 h-4 text-[#DFAF4F] shrink-0" />
            <span className="font-medium">
              {[
                activity.city && activity.city.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                activity.neighborhood,
                activity.location_descriptor,
              ]
                .filter(Boolean)
                .join(' · ')}
            </span>
          </div>

          {/* Directions CTA */}
          <div className="mt-6">
            <a
              href={activity.directions_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#DFAF4F] px-6 py-3 text-sm font-bold text-[#173042] shadow-xs transition-all hover:bg-[#d09c39] active:scale-[0.98] cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Get directions</span>
            </a>
          </div>

          {/* Short description */}
          {activity.short_description && (
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#66757D] line-clamp-4">
              {activity.short_description}
            </p>
          )}
        </div>

        {/* Hero quick facts */}
        {quickFacts.length > 0 && (
          <div className="mt-8 flex items-center flex-wrap gap-x-5 gap-y-3">
            {quickFacts.map((fact, i) => (
              <React.Fragment key={fact.icon}>
                {i > 0 && <span className="hidden sm:block h-6 w-px bg-[#e5dcce]" aria-hidden="true" />}
                <div className="flex items-center gap-2">
                  <ActivityIcon name={fact.icon} className="w-[18px] h-[18px] text-[#DFAF4F]" />
                  <span className="text-sm font-semibold text-[#173042] whitespace-nowrap">{fact.value}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};