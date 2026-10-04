import React, { useState } from 'react';
import { Footprints } from 'lucide-react';
import { NearbyPlace } from '../../../types/stay';
import { StayIcon } from './StayIcon';
import { WalkingDistanceMap } from './WalkingDistanceMap';

interface WalkingDistanceSectionProps {
  propertyName: string;
  nearbyPlaces: NearbyPlace[];
}

export const WalkingDistanceSection: React.FC<WalkingDistanceSectionProps> = ({
  propertyName,
  nearbyPlaces
}) => {
  const [hoveredPlaceId, setHoveredPlaceId] = useState<string | null>(null);

  // Category visual presets matching Morocco Finder design
  const getCategoryTheme = (category: string, index: number) => {
    switch (category.toLowerCase()) {
      case 'square':
      case 'landmark':
        return {
          bg: 'bg-[#cf8257]',
          text: 'text-white'
        };
      case 'souk / market':
      case 'market':
        return {
          bg: 'bg-[#94a77e]',
          text: 'text-white'
        };
      case 'taxi':
      case 'transport':
      case 'activity':
        return {
          bg: 'bg-[#e4a838]',
          text: 'text-white'
        };
      case 'train station':
      case 'bus station':
      case 'airport':
      case 'marina':
        return {
          bg: 'bg-[#6c8fa3]',
          text: 'text-white'
        };
      default: {
        const palettes = [
          { bg: 'bg-[#cf8257]', text: 'text-white' },
          { bg: 'bg-[#94a77e]', text: 'text-white' },
          { bg: 'bg-[#e4a838]', text: 'text-white' },
          { bg: 'bg-[#6c8fa3]', text: 'text-white' }
        ];
        return palettes[index % palettes.length];
      }
    }
  };

  return (
    <section className="mb-12 w-full">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Walking Distance Map Graph */}
        <div className="lg:col-span-7">
          {/* Header Title & Subtitle */}
          <div className="mb-4 flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#b45309]/10 text-[#a14006]">
              <Footprints className="w-5 h-5 text-[#a14006]" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-[#1c1917]">
                Walking distance
              </h2>
              <p className="text-sm text-[#736554]">
                Approximate walking times from the property
              </p>
            </div>
          </div>

          {/* Interactive Illustrated Map Canvas */}
          <WalkingDistanceMap
            propertyName={propertyName}
            nearbyPlaces={nearbyPlaces}
            hoveredPlaceId={hoveredPlaceId}
            onHoverPlace={setHoveredPlaceId}
          />
        </div>

        {/* Right Column: "What's nearby" List */}
        <div className="flex flex-col justify-start lg:col-span-5 lg:pl-2">
          <h3 className="mb-4 font-serif text-2xl font-bold tracking-tight text-[#1c1917]">
            What’s nearby
          </h3>

          <div className="divide-y divide-[#ece3d4] rounded-xl border border-[#e8dfcf] bg-[#fdfbf7] shadow-xs">
            {nearbyPlaces.map((place, idx) => {
              const theme = getCategoryTheme(place.category, idx);
              const isHovered = hoveredPlaceId === place.id;

              return (
                <div
                  key={place.id}
                  onMouseEnter={() => setHoveredPlaceId(place.id)}
                  onMouseLeave={() => setHoveredPlaceId(null)}
                  className={`flex items-center justify-between p-4 transition-all duration-200 cursor-pointer ${
                    isHovered ? 'bg-[#f4ece0]' : 'hover:bg-[#f8f3eb]'
                  }`}
                >
                  {/* Left: Avatar Icon + Name + Category */}
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-xs ${theme.bg} ${theme.text}`}
                    >
                      <StayIcon
                        name={place.icon || place.category}
                        size={20}
                        className="text-white"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-semibold text-[#1c1917] truncate">
                        {place.name}
                      </h4>
                      <p className="text-xs text-[#786b5b] capitalize truncate">
                        {place.category === 'Square'
                          ? 'Popular square'
                          : place.category === 'Souk / Market'
                          ? 'Traditional market'
                          : place.category === 'Taxi'
                          ? 'Local transport'
                          : place.category === 'Train Station'
                          ? 'Main station'
                          : place.category}
                      </p>
                    </div>
                  </div>

                  {/* Right: Walking Icon + Minutes */}
                  <div className="flex shrink-0 items-center gap-1.5 pl-3 text-sm font-semibold text-[#302820]">
                    <Footprints className="w-4 h-4 text-[#8a7a69]" />
                    <span>{place.walking_time_minutes} min</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
