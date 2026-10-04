import React from 'react';
import type { ActivityCancellation } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';
import { ArrowRight } from 'lucide-react';

interface ActivityCancellationCardProps {
  cancellation?: ActivityCancellation;
  title?: string;
}

/**
 * "Cancellation" — structured, not a giant paragraph.
 * Only shows cancellation information when relevant.
 */
export const ActivityCancellationCard: React.FC<ActivityCancellationCardProps> = ({
  cancellation,
  title = 'Cancellation',
}) => {
  if (!cancellation) return null;

  const hasAny =
    cancellation.free_cancellation || cancellation.non_refundable || cancellation.deadline_hours || cancellation.cancellation_type;
  if (!hasAny) return null;

  const mainLabel = cancellation.free_cancellation
    ? 'Free cancellation'
    : cancellation.non_refundable
      ? 'Non-refundable'
      : 'Partial refund possible';

  const detail = cancellation.free_cancellation && cancellation.deadline_hours
    ? `up to ${cancellation.deadline_hours} hours before`
    : null;

  return (
    <ActivityCard icon="shieldcheck" title={title}>
      <div className="flex flex-col gap-1">
        <span className="font-display text-xl sm:text-2xl font-bold text-[#173042]">{mainLabel}</span>
        {detail && <span className="text-sm text-[#66757D] font-medium">{detail}</span>}
        {cancellation.policy_url && (
          <a
            href={cancellation.policy_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 self-start text-sm font-bold text-[#b98a2e] hover:text-[#173042] transition-colors cursor-pointer"
          >
            View full policy
            <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </ActivityCard>
  );
};