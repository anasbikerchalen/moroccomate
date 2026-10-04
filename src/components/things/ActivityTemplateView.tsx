import React from 'react';
import type { ActivityListing } from '../../things-to-do';
import { getCityLabel } from '../../things-to-do';
import { ActivityHeader } from './ActivityHeader';
import { ActivityExperiencesSection } from './ActivityExperiencesSection';
import { ActivityHighlightsSection } from './ActivityHighlightsSection';
import { ActivityNearbySection } from './ActivityNearbySection';
import { ActivityPricingCard } from './ActivityPricingCard';
import { ActivityPaymentCard } from './ActivityPaymentCard';
import { ActivityDurationCard } from './ActivityDurationCard';
import { ActivityGroupSizeCard } from './ActivityGroupSizeCard';
import { ActivityLanguagesCard } from './ActivityLanguagesCard';
import { ActivityIncludedSection } from './ActivityIncludedSection';
import { ActivityExcludedSection } from './ActivityExcludedSection';
import { ActivityWhatToBringSection } from './ActivityWhatToBringSection';
import { ActivityScheduleCard } from './ActivityScheduleCard';
import { ActivityBookingCard } from './ActivityBookingCard';
import { ActivityCancellationCard } from './ActivityCancellationCard';
import { ActivityMeetingPointBanner } from './ActivityMeetingPointBanner';
import { ActivityReviewsSection } from './ActivityReviewsSection';

interface ActivityTemplateViewProps {
  activity: ActivityListing;
}

/**
 * The complete Things To Do listing page — one reusable, data-driven
 * activity template. A cooking class, desert trip, surf lesson or museum
 * visit all render from this same structure without changing the design.
 *
 * Conditional rendering: sections without data never show (no empty boxes).
 */
export const ActivityTemplateView: React.FC<ActivityTemplateViewProps> = ({ activity }) => {
  const v = activity.visibility || {};
  const cityLabel = getCityLabel(activity.city);

  return (
    <div className="space-y-7 pb-10">
      {/* 1. Header: Hero Carousel & Experience Identity */}
      <ActivityHeader activity={activity} />

      {/* 2. Row 1: "What you'll experience" (Left) + "Why visit?" (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
        <div className="lg:col-span-7">
          {v.show_experiences !== false && (
            <ActivityExperiencesSection experiences={activity.experiences} />
          )}
        </div>
        <div className="lg:col-span-5">
          {v.show_highlights !== false && <ActivityHighlightsSection highlights={activity.highlights} />}
        </div>
      </div>

      {/* 3. Row 2: "Around the experience" (Left) + "Price & Payment" (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
        <div className="lg:col-span-7">
          {v.show_nearby !== false && (
            <ActivityNearbySection
              activityName={activity.name}
              cityLabel={cityLabel}
              nearbyPlaces={activity.nearby_places || []}
            />
          )}
        </div>
        <div className="lg:col-span-5 space-y-6">
          {v.show_pricing !== false && <ActivityPricingCard pricing={activity.pricing} />}
          {v.show_payment !== false && <ActivityPaymentCard payment={activity.payment} />}
        </div>
      </div>

      {/* 4. Row 3: Practical info cards — Duration, Group size, Languages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {v.show_duration !== false && <ActivityDurationCard durationMinutes={activity.duration_minutes} />}
        {v.show_group_size !== false && (
          <ActivityGroupSizeCard capacity={activity.capacity} suitability={activity.suitability} />
        )}
        {v.show_languages !== false && (
          <ActivityLanguagesCard
            languages={activity.languages}
            note={activity.languages && activity.languages.length > 0 ? 'guide available' : undefined}
          />
        )}
      </div>

      {/* 5. Row 4: Included / Not included / What to bring */}
      <div className="space-y-7">
        {v.show_included !== false && <ActivityIncludedSection includedItems={activity.included_items} />}
        {v.show_excluded !== false && <ActivityExcludedSection excludedItems={activity.excluded_items} />}
        {v.show_requirements !== false && <ActivityWhatToBringSection requirements={activity.requirements} />}
      </div>

      {/* 6. Row 5: Schedule / Booking / Cancellation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-start">
        {v.show_schedule !== false && (
          <ActivityScheduleCard schedule={activity.schedule} scheduleText={activity.schedule_text} />
        )}
        {v.show_booking !== false && <ActivityBookingCard booking={activity.booking} />}
        {v.show_cancellation !== false && <ActivityCancellationCard cancellation={activity.cancellation} />}
      </div>

      {/* 7. Meeting point (Full width) */}
      {v.show_meeting_point !== false && <ActivityMeetingPointBanner activity={activity} />}

      {/* 8. Reviews */}
      {v.show_reviews !== false && <ActivityReviewsSection reviews={activity.reviews} />}
    </div>
  );
};