import React from 'react';
import type { ActivityPayment } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';
import { ActivityIcon } from './ActivityIcon';

interface ActivityPaymentCardProps {
  payment?: ActivityPayment;
  title?: string;
}

/**
 * "Payment" — only displays methods that actually exist for the activity.
 */
export const ActivityPaymentCard: React.FC<ActivityPaymentCardProps> = ({ payment, title = 'Payment' }) => {
  if (!payment || !Array.isArray(payment.methods) || payment.methods.length === 0) return null;

  const methodLabels: Record<string, string> = {
    cash: 'Cash',
    visa: 'Visa',
    mastercard: 'Mastercard',
    contactless: 'Contactless',
    mobile_payment: 'Mobile payment',
  };

  const summary = [
    payment.cash_currency ? `Cash (${payment.cash_currency})` : 'Cash',
    payment.cards_accepted ? 'Cards accepted' : null,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <ActivityCard icon="credit-card" title={title}>
      <p className="text-sm font-medium text-[#173042]">{summary}</p>
      <div className="mt-3 flex items-center flex-wrap gap-2">
        {payment.methods.map(method => (
          <span
            key={method}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#ece4d5] bg-[#faf6ee] px-2.5 py-1 text-xs font-semibold text-[#66757D]"
          >
            <ActivityIcon name={method === 'cash' ? 'tag' : 'credit-card'} className="w-3.5 h-3.5" />
            {methodLabels[method] || method}
          </span>
        ))}
      </div>
      {payment.custom_note && <p className="mt-3 text-xs text-[#66757D]">{payment.custom_note}</p>}
    </ActivityCard>
  );
};