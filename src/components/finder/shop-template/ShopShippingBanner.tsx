import React from 'react';
import { Plane } from 'lucide-react';
import { ShopShipping } from '../../../types/shop';

interface ShopShippingBannerProps {
  shipping: ShopShipping;
}

export const ShopShippingBanner: React.FC<ShopShippingBannerProps> = ({ shipping }) => {
  if (!shipping || !shipping.available) return null;

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#ece4d5] bg-white p-6 sm:p-8 shadow-2xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Shipping Information */}
        <div className="lg:col-span-6 z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center text-[#1c1917]">
              <Plane className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1917]">
              Shipping
            </h2>
          </div>

          <div className="pl-1">
            <p className="text-sm sm:text-base font-semibold text-[#1c1917]">
              {shipping.label || 'International shipping available'}
            </p>
            {shipping.note && (
              <p className="text-xs sm:text-sm text-[#736453] mt-0.5">
                {shipping.note}
              </p>
            )}
          </div>
        </div>

        {/* Right: Moroccan Medina Skyline Architectural Illustration & Handwritten Note */}
        <div className="lg:col-span-6 relative flex items-center justify-end min-h-[90px]">
          {/* Hand-drawn architectural skyline illustration in warm gold tones */}
          <svg
            className="w-full max-w-[340px] h-[90px] text-[#c99b66] stroke-current"
            viewBox="0 0 340 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ground baseline */}
            <line x1="10" y1="85" x2="330" y2="85" strokeWidth="1.2" strokeLinecap="round" />

            {/* Left Medina House & Crenellations */}
            <rect x="25" y="60" width="28" height="25" strokeWidth="1.2" />
            <path d="M25 60 L29 60 L29 57 L33 57 L33 60 L37 60 L37 57 L41 57 L41 60 L45 60 L45 57 L49 57 L49 60 L53 60" strokeWidth="1.2" />
            {/* Keyhole window */}
            <path d="M36 68 C36 66 42 66 42 68 V76 H36 V68 Z" strokeWidth="1" />

            {/* Small Tower */}
            <rect x="58" y="48" width="18" height="37" strokeWidth="1.2" />
            <path d="M58 48 L67 40 L76 48" strokeWidth="1.2" />

            {/* Central Moroccan Minaret (Koutoubia inspired) */}
            <rect x="85" y="24" width="26" height="61" strokeWidth="1.3" />
            {/* Minaret Dome & Finial */}
            <path d="M85 24 L98 12 L111 24" strokeWidth="1.3" />
            <line x1="98" y1="12" x2="98" y2="5" strokeWidth="1.3" />
            <circle cx="98" cy="5" r="2.2" strokeWidth="1" />
            {/* Minaret Arches / Darj w Ktef motif */}
            <path d="M91 33 C91 30 105 30 105 33 V42 H91 V33 Z" strokeWidth="1.1" />
            <path d="M93 50 C93 47 103 47 103 50 V60 H93 V50 Z" strokeWidth="1.1" />

            {/* Adjacent Medina Fortified Wall */}
            <rect x="116" y="55" width="35" height="30" strokeWidth="1.2" />
            <path d="M116 55 L120 55 L120 51 L125 51 L125 55 L130 55 L130 51 L135 51 L135 55 L140 55 L140 51 L145 51 L145 55 L151 55" strokeWidth="1.2" />
            {/* Arched gateway */}
            <path d="M127 85 V70 C127 65 140 65 140 70 V85" strokeWidth="1.2" />

            {/* Distant palm tree silhouette */}
            <path d="M158 85 Q160 65 163 52" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M163 52 Q150 48 145 54" strokeWidth="1.2" />
            <path d="M163 52 Q158 40 152 42" strokeWidth="1.2" />
            <path d="M163 52 Q168 38 174 44" strokeWidth="1.2" />
            <path d="M163 52 Q176 46 179 53" strokeWidth="1.2" />
          </svg>

          {/* Handwritten Style Note: "Take a piece of Morocco home ♡" */}
          <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col items-center select-none rotate-[-4deg]">
            <span
              className="text-sm sm:text-base text-[#46392b] font-medium tracking-wide whitespace-nowrap"
              style={{ fontFamily: 'Georgia, Cambria, serif', fontStyle: 'italic' }}
            >
              Take a piece
            </span>
            <span
              className="text-sm sm:text-base text-[#46392b] font-medium tracking-wide whitespace-nowrap -mt-0.5"
              style={{ fontFamily: 'Georgia, Cambria, serif', fontStyle: 'italic' }}
            >
              of Morocco home ♡
            </span>
            {/* Hand-drawn underline squiggle / arrow */}
            <svg width="85" height="12" viewBox="0 0 85 12" fill="none" className="text-[#64503c] stroke-current">
              <path d="M4 4 C24 10 65 1 80 8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
