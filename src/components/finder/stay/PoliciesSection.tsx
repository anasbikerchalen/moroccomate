import React from 'react';
import { Clock, UserCheck, CreditCard, CalendarCheck2, Check } from 'lucide-react';
import { PropertyPolicies } from '../../../types/stay';
import { StayIcon } from './StayIcon';

interface PoliciesSectionProps {
  policies: PropertyPolicies;
}

export const PoliciesSection: React.FC<PoliciesSectionProps> = ({ policies }) => {
  const { check_in_start, check_in_end, check_out_time, late_arrivals, payment, cancellation } = policies;

  return (
    <section className="mb-12 w-full">
      <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight text-[#1c1917]">
        Policies & payments
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {/* 1. Check-in */}
        <div className="flex flex-col justify-start rounded-xl border border-[#e8dfcf] bg-[#fdfbf7] p-4.5 shadow-xs">
          <div className="mb-3 flex items-center gap-2 text-[#463829]">
            <Clock className="w-4 h-4 text-[#463829]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#736453]">
              Check-in
            </h3>
          </div>
          <p className="text-sm font-semibold text-[#1c1917]">
            {check_in_start} – {check_in_end}
          </p>
        </div>

        {/* 2. Check-out */}
        <div className="flex flex-col justify-start rounded-xl border border-[#e8dfcf] bg-[#fdfbf7] p-4.5 shadow-xs">
          <div className="mb-3 flex items-center gap-2 text-[#463829]">
            <Clock className="w-4 h-4 text-[#463829]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#736453]">
              Check-out
            </h3>
          </div>
          <p className="text-sm font-semibold text-[#1c1917]">
            {check_out_time}
          </p>
        </div>

        {/* 3. Late arrivals */}
        <div className="flex flex-col justify-start rounded-xl border border-[#e8dfcf] bg-[#fdfbf7] p-4.5 shadow-xs">
          <div className="mb-3 flex items-center gap-2 text-[#463829]">
            <UserCheck className="w-4 h-4 text-[#463829]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#736453]">
              Late arrivals
            </h3>
          </div>
          <p className="text-sm font-semibold text-[#1c1917]">
            {late_arrivals.primary_text}
          </p>
          {late_arrivals.secondary_text && (
            <p className="mt-0.5 text-xs text-[#736554]">
              {late_arrivals.secondary_text}
            </p>
          )}
        </div>

        {/* 4. Payment */}
        <div className="flex flex-col justify-start rounded-xl border border-[#e8dfcf] bg-[#fdfbf7] p-4.5 shadow-xs">
          <div className="mb-3 flex items-center gap-2 text-[#463829]">
            <CreditCard className="w-4 h-4 text-[#463829]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#736453]">
              Payment
            </h3>
          </div>
          <div className="space-y-1 text-xs text-[#483d31]">
            <div className="flex items-center gap-1.5">
              <Check className="w-3 h-3 text-[#3e572a] shrink-0" />
              <span>Credit cards accepted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3 h-3 text-[#3e572a] shrink-0" />
              <span>
                {payment.currencies.includes('MAD') ? 'Moroccan Dirham (MAD)' : payment.currencies.join(', ')}
              </span>
            </div>
            {payment.cash_preferred && (
              <p className="pt-1 text-[11px] font-medium text-[#7a6b5a]">
                Cash preferred
              </p>
            )}
          </div>
        </div>

        {/* 5. Cancellation */}
        <div className="flex flex-col justify-start rounded-xl border border-[#e3d3b7] bg-[#fbf5e7] p-4.5 shadow-xs">
          <div className="mb-3 flex items-center gap-2 text-[#805527]">
            <CalendarCheck2 className="w-4 h-4 text-[#805527]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#805527]">
              Cancellation
            </h3>
          </div>
          <p className="text-xs font-semibold text-[#271f16] leading-snug">
            {cancellation.policy_summary}
          </p>
          {cancellation.penalty_summary && (
            <p className="mt-1 text-[11px] text-[#695846] leading-normal">
              {cancellation.penalty_summary}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
