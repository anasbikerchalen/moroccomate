import React from 'react';
import type { ActivityBooking } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';
import { ArrowRight } from 'lucide-react';

interface ActivityBookingCardProps {
  booking?: ActivityBooking;
  title?: string;
}

/**
 * "Booking" — the UI changes depending on the booking configuration:
 * No booking required / Reservation recommended / Reservation required.
 */
export const ActivityBookingCard: React.FC<ActivityBookingCardProps> = ({ booking, title = 'Booking' }) => {
  if (!booking) return null;

  const hasAny = booking.booking_required || booking.reservation_required || booking.instant_booking || booking.booking_url;
  if (!hasAny) return null;

  const state = booking.instant_booking
    ? 'Instant booking available'
    : booking.reservation_required
      ? 'Reservation required'
      : booking.booking_required
        ? 'Booking recommended'
        : 'No booking required';

  return (
    <ActivityCard icon="calendar" title={title}>
      <div className="flex flex-col gap-3">
        <span className="font-display text-xl sm:text-2xl font-bold text-[#173042]">{state}</span>
        {booking.booking_contact && (
          <span className="text-sm text-[#66757D] font-medium">Contact: {booking.booking_contact}</span>
        )}
        {booking.booking_url && (
          <a
            href={booking.booking_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start text-sm font-bold text-[#b98a2e] hover:text-[#173042] transition-colors cursor-pointer"
          >
            View booking options
            <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </ActivityCard>
  );
};