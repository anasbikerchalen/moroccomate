import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import type { ActivityListing } from '../../things-to-do';

interface ActivityMeetingPointBannerProps {
  activity: ActivityListing;
  title?: string;
}

/**
 * "Meeting point" — full-width horizontal location card with a light
 * green background. Adapts to any meeting configuration: a fixed
 * meeting point, hotel pickup, or self-arrival.
 */
export const ActivityMeetingPointBanner: React.FC<ActivityMeetingPointBannerProps> = ({
  activity,
  title = 'Meeting point',
}) => {
  const point = activity.meeting_point || activity.address;
  if (!point) return null;

  return (
    <section className="rounded-2xl border border-[#dfe5d5] bg-[#f2f5ee] p-6 sm:p-7 shadow-2xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        {/* Left: title + meeting point */}
        <div className="flex items-start gap-3.5 min-w-0">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[#173042]">
            <MapPin className="w-6 h-6 stroke-[1.75]" />
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#173042]">{title}</h2>
            <p className="text-sm text-[#66757D] font-medium mt-1 truncate">{point}</p>
            <a
              href={activity.directions_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-[#b98a2e] hover:text-[#173042] transition-colors cursor-pointer"
            >
              View on map
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right: open exact location */}
        <a
          href={activity.directions_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#DFAF4F] px-6 py-3 text-sm font-bold text-[#173042] shadow-xs transition-all hover:bg-[#d09c39] active:scale-[0.98] cursor-pointer shrink-0"
        >
          Open exact location
        </a>
      </div>
    </section>
  );
};