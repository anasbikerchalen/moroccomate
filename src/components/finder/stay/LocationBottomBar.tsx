import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { PropertyLocation } from '../../../types/stay';

interface LocationBottomBarProps {
  location: PropertyLocation;
  propertyName: string;
}

export const LocationBottomBar: React.FC<LocationBottomBarProps> = ({
  location,
  propertyName
}) => {
  const handleOpenMap = () => {
    if (location.directions_url) {
      window.open(location.directions_url, '_blank', 'noopener,noreferrer');
    } else {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${propertyName}, ${location.exact_address}`
      )}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="mb-14 w-full">
      <div className="flex flex-col gap-4 rounded-xl border border-[#e8dfcf] bg-[#fdfbf7] p-5 shadow-xs sm:flex-row sm:items-center sm:justify-between">
        {/* Left Address Info */}
        <div className="flex items-center gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#53412d]/10 text-[#3b2d1d]">
            <MapPin className="w-5 h-5 text-[#3b2d1d]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#1c1917]">
              Location
            </h3>
            <p className="text-sm text-[#736554]">
              {location.exact_address}
            </p>
          </div>
        </div>

        {/* Right CTA Button */}
        <button
          onClick={handleOpenMap}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#dca448] px-6 py-2.5 text-sm font-semibold text-[#221c15] shadow-xs transition-all hover:bg-[#cf973b] hover:shadow-sm active:scale-98 cursor-pointer self-start sm:self-auto"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Open exact location</span>
        </button>
      </div>
    </section>
  );
};
