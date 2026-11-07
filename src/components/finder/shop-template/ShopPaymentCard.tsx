import React from 'react';
import { CreditCard } from 'lucide-react';
import { ShopPayment } from '../../../types/shop';
import { ShopIcon } from './ShopIcon';

interface ShopPaymentCardProps {
  payment: ShopPayment;
}

export const ShopPaymentCard: React.FC<ShopPaymentCardProps> = ({ payment }) => {
  if (!payment) return null;

  const paymentText = `${payment.cash_currency ? `Cash (${payment.cash_currency})` : 'Cash'}${
    payment.cards_accepted ? ' · Cards accepted' : ' only'
  }`;

  return (
    <div className="rounded-2xl border border-[#ece4d5] bg-white p-6 shadow-2xs">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-7 w-7 items-center justify-center text-[#1c1917]">
          <CreditCard className="w-5 h-5 stroke-[1.75]" />
        </div>
        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1917]">
          Payment
        </h3>
      </div>

      {/* Description */}
      <div className="pl-1">
        <p className="text-sm sm:text-base font-semibold text-[#1c1917]">
          {payment.custom_note || paymentText}
        </p>

        {/* Payment Badges (VISA, Mastercard, Contactless wave) */}
        {payment.cards_accepted && (
          <div className="mt-3.5 flex items-center gap-3">
            <ShopIcon name="visa" />
            <ShopIcon name="mastercard" />
            <ShopIcon name="contactless" />
          </div>
        )}
      </div>
    </div>
  );
};
