import React from 'react';
import { PropertyFeature } from '../../../types/stay';
import { StayIcon } from './StayIcon';

interface TraditionalSpacesSectionProps {
  spaces: PropertyFeature[];
  title?: string;
  subtitle?: string;
}

export const TraditionalSpacesSection: React.FC<TraditionalSpacesSectionProps> = ({
  spaces,
  title = 'Traditional spaces',
  subtitle = 'The details that make this stay feel distinctly Moroccan.'
}) => {
  if (!spaces || spaces.length === 0) return null;

  return (
    <section className="mb-12 w-full">
      <div className="mb-5">
        <h2 className="font-serif text-2xl font-bold tracking-tight text-[#1c1917]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-[#736554]">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {spaces.map((space) => (
          <div
            key={space.id}
            className="flex flex-col justify-start rounded-xl border border-[#e8dfcf] bg-[#fdfbf7] p-5 shadow-xs transition-all hover:border-[#dbcbb3] hover:shadow-sm"
          >
            {/* Architectural Icon */}
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#3a4e2e]/10 text-[#2c3d23]">
              <StayIcon name={space.icon} size={24} className="text-[#2c3d23]" />
            </div>

            {/* Feature Name */}
            <h3 className="text-base font-bold text-[#1c1917]">
              {space.name}
            </h3>

            {/* Feature Description */}
            <p className="mt-2 text-sm leading-relaxed text-[#685c4e]">
              {space.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
