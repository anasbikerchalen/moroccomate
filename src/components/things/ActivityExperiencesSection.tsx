import React from 'react';
import type { ActivityExperience } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';
import { ActivityIcon } from './ActivityIcon';

interface ActivityExperiencesSectionProps {
  title?: string;
  description?: string;
  experiences?: ActivityExperience[];
}

/**
 * "What you'll experience" — one of the most important dynamic sections.
 * Elements come from the activity's experiences library (never hardcoded).
 */
export const ActivityExperiencesSection: React.FC<ActivityExperiencesSectionProps> = ({
  title = "What you'll experience",
  description,
  experiences,
}) => {
  if (!experiences || experiences.length === 0) return null;

  return (
    <ActivityCard icon="sun" title={title} subtitle={description}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {experiences.map(exp => (
          <div
            key={exp.id}
            className="flex flex-col items-center text-center gap-2 rounded-xl border border-[#ece4d5] bg-[#faf6ee] px-3 py-4 transition-all hover:border-[#DFAF4F] hover:bg-[#fbf3de]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#ece4d5] text-[#607B5D] shadow-2xs">
              <ActivityIcon name={exp.icon || exp.name} className="w-5 h-5" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#173042] leading-snug">{exp.name}</span>
            {exp.description && (
              <span className="text-[11px] text-[#66757D] leading-snug">{exp.description}</span>
            )}
          </div>
        ))}
      </div>
    </ActivityCard>
  );
};