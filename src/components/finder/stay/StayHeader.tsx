import React from 'react';
import { ExternalLink, MapPin, MessageSquare, Phone } from 'lucide-react';
import { StayListing } from '../../../types/stay';
import { StayIcon } from './StayIcon';

interface StayHeaderProps {
  stay: StayListing;
}

export const StayHeader: React.FC<StayHeaderProps> = ({ stay }) => {
  const { name, type, tagline, location, contact_whatsapp, booking_url, phone } = stay;

  const photosUrl = location.directions_url
    || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${location.city}, Morocco`)}`;

  const cleanWhatsApp = contact_whatsapp ? contact_whatsapp.replace(/[^0-9]/g, '') : null;
  const cleanPhone = phone ? phone.replace(/[^0-9+]/g, '') : null;

  const handleDirectionsClick = () => {
    if (location.directions_url) {
      window.open(location.directions_url, '_blank', 'noopener,noreferrer');
    } else {
      const fallbackUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${name}, ${location.city}, Morocco`
      )}`;
      window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="mb-10 w-full">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
        {/* Left Hero Panel — decorative gradient + Google Maps photos link */}
        <div className="md:col-span-6 lg:col-span-7">
          <div className="relative overflow-hidden rounded-2xl border border-[#e4dcce]
            bg-gradient-to-br from-[#1a2e1a] to-[#344426] shadow-sm aspect-4/3 sm:aspect-16/10
            flex flex-col items-center justify-center gap-4">
            {/* Decorative Moroccan pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(245,251,240,0.08)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

            {/* Property Type Badge Pill (e.g. RIAD) */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center rounded-full bg-[#344426]/90 px-3.5 py-1 text-xs font-bold tracking-wider text-[#f5fbf0] uppercase backdrop-blur-xs shadow-xs">
                {type}
              </span>
            </div>

            {/* Center CTA */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <p className="text-[#f5fbf0]/60 text-xs font-bold uppercase tracking-widest">Photos</p>
              <a
                href={photosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                  bg-white/90 hover:bg-white text-[#1c1917] text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#3b3226]" />
                View photos on Google Maps
                <ExternalLink className="w-3.5 h-3.5 opacity-50" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Info Section: Name, Type, Location, Actions */}
        <div className="flex flex-col justify-center space-y-4 md:col-span-6 lg:col-span-5 md:pl-4">
          <div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-[#1c1917] sm:text-5xl lg:text-[46px] leading-[1.15]">
              {name}
            </h1>
            <p className="mt-2 text-lg font-normal text-[#5e5344]">
              {tagline || `Traditional ${type}`}
            </p>
          </div>

          {/* Location Summary Line */}
          <div className="flex items-center gap-2 text-base font-medium text-[#2d261e]">
            <MapPin className="w-5 h-5 text-[#3b3226]" />
            <span>
              {location.city} · {location.neighborhood}
            </span>
          </div>

          {/* Action Buttons: Directions, Direct Booking, and WhatsApp */}
          <div className="pt-2 space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              {/* 1. Directions */}
              <button
                onClick={handleDirectionsClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#dca448] px-6 py-2.5 text-sm font-semibold text-[#221c15] shadow-xs transition-all hover:bg-[#cf973b] hover:shadow-md active:scale-98 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{location.directions_label || 'Get directions'}</span>
              </button>

              {/* 2. Direct Booking CTA */}
              {booking_url && (
                <a
                  href={booking_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#221c15] px-6 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#3b3226] hover:shadow-md active:scale-98 cursor-pointer"
                  title="Official direct reservation website"
                >
                  <ExternalLink className="w-4 h-4 text-[#dca448]" />
                  <span>Direct Booking</span>
                </a>
              )}

              {/* 3. WhatsApp Host CTA */}
              {cleanWhatsApp && (
                <a
                  href={`https://wa.me/${cleanWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#20ba59] hover:shadow-md active:scale-98 cursor-pointer"
                  title="Message host directly on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Host</span>
                </a>
              )}

              {/* 4. Phone Call CTA (if phone exists without WhatsApp) */}
              {!cleanWhatsApp && cleanPhone && (
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[#e4dcce] px-5 py-2.5 text-sm font-semibold text-[#221c15] shadow-xs transition-all hover:bg-stone-50 hover:shadow-md active:scale-98 cursor-pointer"
                  title={`Call ${phone}`}
                >
                  <Phone className="w-4 h-4 text-[#3b3226]" />
                  <span>Call Host</span>
                </a>
              )}

              {/* 5. No-Color Convention Fallback when no direct contact exists */}
              {!cleanWhatsApp && !booking_url && !cleanPhone && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-stone-400 bg-stone-100/70 border border-stone-200/60 select-none">
                  Direct contact unlisted
                </span>
              )}
            </div>

            <p className="text-sm text-[#786b5b]">
              {location.exact_address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
