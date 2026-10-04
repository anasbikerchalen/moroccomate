import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import type { NearbyPlace } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';
import { ActivityIcon } from './ActivityIcon';

interface ActivityNearbySectionProps {
  activityName: string;
  cityLabel?: string;
  nearbyPlaces: NearbyPlace[];
  title?: string;
  subtitle?: string;
}

/**
 * "Around the experience" — small contextual mini-map + nearby list.
 * Uses the same reusable nearby-places system as Shops and Stays.
 * The map only renders when walking-time data exists; otherwise the
 * lightweight list carries the context (no empty boxes).
 */
export const ActivityNearbySection: React.FC<ActivityNearbySectionProps> = ({
  activityName,
  cityLabel,
  nearbyPlaces,
  title = 'Around the experience',
  subtitle,
}) => {
  const [hoveredPlaceId, setHoveredPlaceId] = useState<string | null>(null);

  if (!nearbyPlaces || nearbyPlaces.length === 0) return null;

  const hasWalkingData = nearbyPlaces.some(p => p.walking_minutes && p.walking_minutes > 0);
  const sub = subtitle || (cityLabel ? `Close to popular places in ${cityLabel}.` : 'Close to popular places.');

  // Visual theme mapping based on category
  const getTheme = (category: string, index: number) => {
    switch (category.toLowerCase()) {
      case 'square':
      case 'landmark':
        return { bg: '#c97a52', border: '#b86840' };
      case 'souk':
      case 'shop':
      case 'market':
        return { bg: '#94a77e', border: '#7c9264' };
      case 'taxi':
      case 'transport':
        return { bg: '#e4a838', border: '#cb8e1e' };
      case 'cafe':
      case 'restaurant':
        return { bg: '#a07855', border: '#895e3a' };
      case 'beach':
      case 'attraction':
        return { bg: '#607B5D', border: '#4e6650' };
      default: {
        const fallbacks = [
          { bg: '#c97a52', border: '#b86840' },
          { bg: '#94a77e', border: '#7c9264' },
          { bg: '#e4a838', border: '#cb8e1e' },
          { bg: '#a07855', border: '#895e3a' },
        ];
        return fallbacks[index % fallbacks.length];
      }
    }
  };

  // Radial map SVG coordinates
  const width = 360;
  const height = 280;
  const centerX = width / 2;
  const centerY = height / 2;

  const defaultPositions = [
    { x: centerX, y: 55 },
    { x: 55, y: centerY + 5 },
    { x: 305, y: centerY + 5 },
    { x: centerX, y: height - 55 },
  ];

  return (
    <ActivityCard icon="map-pin" title={title} subtitle={sub}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: SVG Radial Walking Map */}
        {hasWalkingData && (
          <div className="md:col-span-7">
            <div className="relative w-full h-[260px]">
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" role="img" aria-label={`Map around ${activityName}`}>
                {/* Soft canvas */}
                <rect x="0" y="0" width={width} height={height} rx="16" fill="#faf6ee" />

                {/* Simple walking routes: center <-> each place */}
                {nearbyPlaces.slice(0, 4).map((place, idx) => {
                  const pos = defaultPositions[idx];
                  if (!pos) return null;
                  return (
                    <line
                      key={`route-${place.id}`}
                      x1={centerX}
                      y1={centerY}
                      x2={pos.x}
                      y2={pos.y}
                      stroke="#d9cdb8"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  );
                })}

                {/* Center: the experience */}
                <circle cx={centerX} cy={centerY} r="22" fill="#173042" stroke="#ffffff" strokeWidth="3" />
                <foreignObject x={centerX - 10} y={centerY - 10} width="20" height="20">
                  <div className="flex items-center justify-center w-full h-full text-white">
                    <ActivityIcon name="map-pin" size={12} className="text-white" />
                  </div>
                </foreignObject>
                <text x={centerX} y={centerY + 38} textAnchor="middle" className="text-[11px] font-bold fill-[#173042] select-none">
                  {activityName.length > 22 ? `${activityName.slice(0, 20)}…` : activityName}
                </text>

                {/* Nearby places */}
                {nearbyPlaces.slice(0, 4).map((place, idx) => {
                  const pos = defaultPositions[idx];
                  if (!pos) return null;
                  const theme = getTheme(place.category, idx);
                  const isHighlighted = hoveredPlaceId === place.id;
                  // Label offsets so pills sit outside the node
                  const labelOffsetX = pos.x === centerX ? 0 : pos.x < centerX ? 26 : -26;
                  const labelOffsetY = pos.y === centerY ? -14 : pos.y < centerY ? 26 : -26;
                  return (
                    <g key={place.id}>
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHighlighted ? 19 : 17}
                        fill={theme.bg}
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        className="drop-shadow-xs transition-transform"
                      />
                      <foreignObject x={pos.x - 9} y={pos.y - 9} width="18" height="18">
                        <div className="flex items-center justify-center w-full h-full text-white">
                          <ActivityIcon name={place.icon || place.category} size={13} className="text-white" />
                        </div>
                      </foreignObject>
                      <g transform={`translate(${pos.x + labelOffsetX}, ${pos.y + labelOffsetY})`}>
                        <text
                          x="0"
                          y="0"
                          textAnchor="middle"
                          className={`text-[11px] select-none ${isHighlighted ? 'font-bold fill-[#173042]' : 'font-semibold fill-[#342b22]'}`}
                        >
                          {place.name}
                        </text>
                        {place.walking_minutes && (
                          <text x="0" y="12" textAnchor="middle" className="text-[10px] fill-[#66757D] font-medium select-none">
                            {place.walking_minutes} min
                          </text>
                        )}
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        )}

        {/* Right: Nearby places list */}
        <div className={`${hasWalkingData ? 'md:col-span-5' : 'md:col-span-12'} flex flex-col gap-3.5`}>
          {nearbyPlaces.map((place, idx) => {
            const theme = getTheme(place.category, idx);
            const isHighlighted = hoveredPlaceId === place.id;

            return (
              <div
                key={place.id}
                onMouseEnter={() => setHoveredPlaceId(place.id)}
                onMouseLeave={() => setHoveredPlaceId(null)}
                className={`flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer ${
                  isHighlighted ? 'bg-[#f6efe4] ring-1 ring-[#c2842e]' : 'hover:bg-[#faf5ec]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-2xs"
                    style={{ backgroundColor: theme.bg }}
                  >
                    <ActivityIcon name={place.icon || place.category} size={18} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#173042] truncate">{place.name}</span>
                </div>

                {/* Walking Time */}
                {place.walking_minutes && (
                  <span className="text-xs sm:text-sm font-medium text-[#66757D] whitespace-nowrap">
                    {place.walking_minutes} min
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </ActivityCard>
  );
};