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
  const coords = activity.coordinates || (activity.latitude && activity.longitude ? { lat: activity.latitude, lng: activity.longitude } : undefined);
  const point = activity.meeting_point || activity.address || (activity.neighborhood ? `${activity.neighborhood}, ${activity.city}` : undefined);
  if (!point && !coords) return null;

  const displayPoint = point || `${coords!.lat.toFixed(5)}, ${coords!.lng.toFixed(5)}`;
  const mapUrl = coords
    ? `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`
    : activity.directions_url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${activity.name}, ${point || activity.city}`)}`;

  return (
    <section className="rounded-2xl border border-[#dfe5d5] bg-[#f2f5ee] p-6 sm:p-7 shadow-2xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        {/* Left: title + meeting point */}
        <div className="flex items-start gap-3.5 min-w-0">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[#173042]">
            <MapPin className="w-6 h-6 stroke-[1.75]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#173042]">{title}</h2>
              {coords ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#1b4332]/10 px-2.5 py-0.5 text-xs font-semibold text-[#1b4332]">
                  GPS Verified
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#66757d]/10 px-2.5 py-0.5 text-xs font-medium text-[#66757d]">
                  Neighborhood landmark
                </span>
              )}
            </div>
            <p className="text-sm text-[#66757D] font-medium mt-1 truncate">{displayPoint}</p>
            {coords && (
              <p className="text-xs text-[#8a99a1] font-mono mt-0.5">
                {coords.lat.toFixed(5)}° N, {Math.abs(coords.lng).toFixed(5)}° W
              </p>
            )}
            <a
              href={mapUrl}
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
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#DFAF4F] px-6 py-3 text-sm font-bold text-[#173042] shadow-xs transition-all hover:bg-[#d09c39] active:scale-[0.98] cursor-pointer shrink-0"
        >
          {coords ? 'Open GPS pinpoint' : 'Open location'}
        </a>
      </div>
    </section>
  );
};