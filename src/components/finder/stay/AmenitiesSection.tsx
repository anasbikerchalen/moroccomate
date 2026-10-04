import React from 'react';
import { Snowflake, Coffee, Wifi, Luggage, Check, X } from 'lucide-react';
import { PropertyAmenities, SectionVisibilityFlags } from '../../../types/stay';
import { StayIcon } from './StayIcon';

interface AmenitiesSectionProps {
  amenities: PropertyAmenities;
  visibility?: SectionVisibilityFlags;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({
  amenities,
  visibility = {}
}) => {
  const { climate, breakfast, wifi, extra_services } = amenities;

  const showBreakfast = visibility.show_breakfast !== false && breakfast?.available !== false;
  const showExtraServices = visibility.show_extra_services !== false && extra_services?.services?.length > 0;

  return (
    <section className="mb-12 w-full">
      <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight text-[#1c1917]">
        Comfort & amenities
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Climate Control */}
        <div className="flex flex-col justify-between rounded-xl border border-[#e8dfcf] bg-[#fdfbf7] p-5 shadow-xs transition-all hover:border-[#dbcbb3]">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#394d2e]/10 text-[#293d1f]">
                <Snowflake className="w-5 h-5 text-[#293d1f]" />
              </div>
              <h3 className="text-base font-bold text-[#1c1917]">
                Climate control
              </h3>
            </div>

            {/* List of climate points */}
            <ul className="space-y-2 pt-2 text-xs text-[#524639]">
              {climate.details && climate.details.length > 0 ? (
                climate.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3e572a] shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))
              ) : (
                <>
                  {climate.has_ac && (
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#3e572a] shrink-0" />
                      <span>Air conditioning ({climate.working ? 'working' : 'available'})</span>
                    </li>
                  )}
                  {climate.has_heating && (
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#3e572a] shrink-0" />
                      <span>Heating (available)</span>
                    </li>
                  )}
                  {climate.has_extra_blankets && (
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#3e572a] shrink-0" />
                      <span>Extra blankets (available)</span>
                    </li>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Card 2: Breakfast (Conditional) */}
        {showBreakfast && (
          <div className="flex flex-col justify-between rounded-xl border border-[#e8dfcf] bg-[#fdfbf7] p-5 shadow-xs transition-all hover:border-[#dbcbb3]">
            <div>
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8f4e24]/10 text-[#7c3f19]">
                  <Coffee className="w-5 h-5 text-[#7c3f19]" />
                </div>
                <h3 className="text-base font-bold text-[#1c1917]">
                  Breakfast
                </h3>
              </div>

              <div className="space-y-1.5 pt-2 text-xs">
                <p className="font-medium text-[#2d251d]">
                  {breakfast.type || 'Traditional Moroccan breakfast'}
                </p>
                <p className="font-semibold text-[#1f1b16]">
                  {breakfast.notes ||
                    `${breakfast.included ? 'Included' : 'Available'} · ${breakfast.start_time || '08:00'} – ${breakfast.end_time || '10:30'}`}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Card 3: Wi-Fi */}
        <div className="flex flex-col justify-between rounded-xl border border-[#e8dfcf] bg-[#fdfbf7] p-5 shadow-xs transition-all hover:border-[#dbcbb3]">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3a586d]/10 text-[#284457]">
                <Wifi className="w-5 h-5 text-[#284457]" />
              </div>
              <h3 className="text-base font-bold text-[#1c1917]">
                Wi-Fi
              </h3>
            </div>

            <div className="space-y-1 pt-2 text-xs text-[#524639]">
              <p className="font-medium text-[#2d251d]">
                {wifi.quality || 'Fast Wi-Fi available'}
              </p>
              <p className="text-[#786b5b]">
                {wifi.location ? `inside ${wifi.location}` : 'inside rooms and courtyard'}
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Extra Services (Conditional) */}
        {showExtraServices && (
          <div className="flex flex-col justify-between rounded-xl border border-[#e8dfcf] bg-[#fdfbf7] p-5 shadow-xs transition-all hover:border-[#dbcbb3]">
            <div>
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#53412d]/10 text-[#3b2d1d]">
                  <Luggage className="w-5 h-5 text-[#3b2d1d]" />
                </div>
                <h3 className="text-base font-bold text-[#1c1917]">
                  Extra services
                </h3>
              </div>

              <ul className="space-y-2 pt-2 text-xs text-[#524639]">
                {extra_services.services.map((svc) => (
                  <li key={svc.id} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3e572a] shrink-0" />
                    <span className="truncate">{svc.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
