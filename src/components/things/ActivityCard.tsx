import React from 'react';
import { ActivityIcon } from './ActivityIcon';

interface ActivityCardProps {
  icon?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Shared warm card shell used by every section of the Things To Do page:
 * white background, thin border, rounded corners, generous padding.
 */
export const ActivityCard: React.FC<ActivityCardProps> = ({ icon, title, subtitle, children, className = '' }) => {
  return (
    <section className={`rounded-2xl border border-[#ece4d5] bg-white p-6 sm:p-7 shadow-2xs ${className}`}>
      {/* Header */}
      <div className="flex items-start gap-3.5 mb-5">
        {icon && (
          <div className="flex h-8 w-8 items-center justify-center text-[#173042]">
            <ActivityIcon name={icon} className="w-6 h-6" />
          </div>
        )}
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#173042]">{title}</h2>
          {subtitle && <p className="text-xs sm:text-sm text-[#66757D] mt-0.5">{subtitle}</p>}
        </div>
      </div>
      {children}
    </section>
  );
};