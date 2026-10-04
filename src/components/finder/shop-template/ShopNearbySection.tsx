import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { ShopNearbyPlace } from '../../../types/shop';
import { StayIcon } from '../stay/StayIcon';

interface ShopNearbySectionProps {
  shopName: string;
  nearbyPlaces: ShopNearbyPlace[];
  title?: string;
  subtitle?: string;
}

export const ShopNearbySection: React.FC<ShopNearbySectionProps> = ({
  shopName,
  nearbyPlaces,
  title = 'Around the shop',
  subtitle = 'Nearby places'
}) => {
  const [hoveredPlaceId, setHoveredPlaceId] = useState<string | null>(null);

  if (!nearbyPlaces || nearbyPlaces.length === 0) return null;

  // Visual Theme mapping based on category
  const getTheme = (category: string, index: number) => {
    switch (category.toLowerCase()) {
      case 'square':
      case 'landmark':
        return {
          bg: '#c97a52',
          lightBg: '#faede7',
          border: '#b86840',
          text: '#ffffff'
        };
      case 'souk':
      case 'market':
        return {
          bg: '#94a77e',
          lightBg: '#edf2e7',
          border: '#7c9264',
          text: '#ffffff'
        };
      case 'taxi':
      case 'transport':
        return {
          bg: '#e4a838',
          lightBg: '#fbf3de',
          border: '#cb8e1e',
          text: '#ffffff'
        };
      case 'cafe':
      case 'restaurant':
        return {
          bg: '#a07855',
          lightBg: '#f4ede6',
          border: '#895e3a',
          text: '#ffffff'
        };
      default: {
        const fallbacks = [
          { bg: '#c97a52', lightBg: '#faede7', border: '#b86840', text: '#ffffff' },
          { bg: '#94a77e', lightBg: '#edf2e7', border: '#7c9264', text: '#ffffff' },
          { bg: '#e4a838', lightBg: '#fbf3de', border: '#cb8e1e', text: '#ffffff' },
          { bg: '#a07855', lightBg: '#f4ede6', border: '#895e3a', text: '#ffffff' }
        ];
        return fallbacks[index % fallbacks.length];
      }
    }
  };

  // Radial Map SVG coordinates
  const width = 360;
  const height = 280;
  const centerX = width / 2;
  const centerY = height / 2;

  // Cardinal / radial positioning for the 4 surrounding points (North, West, East, South)
  const defaultPositions = [
    { x: centerX, y: 55 },        // North (Jemaa el-Fna)
    { x: 55, y: centerY + 5 },    // West (Souks)
    { x: 305, y: centerY + 5 },   // East (Taxi station)
    { x: centerX, y: height - 55 } // South (Café)
  ];

  return (
    <section className="rounded-2xl border border-[#ece4d5] bg-white p-6 sm:p-7 shadow-2xs">
      {/* Header */}
      <div className="flex items-start gap-3.5 mb-5">
        <div className="flex h-8 w-8 items-center justify-center text-[#1c1917]">
          <MapPin className="w-6 h-6 stroke-[1.75]" />
        </div>
        <div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1917]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#786b5b] mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Two-column layout: Left Interactive Map, Right List */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: SVG Radial Walking Map */}
        <div className="md:col-span-7">
          <div className="relative w-full h-[260px] sm:h-[290px] overflow-hidden rounded-xl border border-[#e8dfcf] bg-[#f8f3e8] shadow-inner select-none">
            {/* Background illustrated medina map grid */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="shop-street-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path
                    d="M 0 18 L 60 18 M 18 0 L 18 60 M 0 45 L 60 45 M 45 0 L 45 60"
                    fill="none"
                    stroke="#ded1ba"
                    strokeWidth="2"
                  />
                  <circle cx="18" cy="18" r="1.5" fill="#cfc2aa" />
                  <circle cx="45" cy="45" r="1.5" fill="#cfc2aa" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#shop-street-grid)" />
              {/* Soft curving medina alleyways */}
              <path
                d="M -20 140 Q 120 100 180 140 T 380 130"
                fill="none"
                stroke="#fffefb"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M 180 -20 Q 195 120 180 300"
                fill="none"
                stroke="#fffefb"
                strokeWidth="12"
                strokeLinecap="round"
              />
            </svg>

            {/* Interactive Nodes & Radiating Paths */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${width} ${height}`}
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Connecting dotted lines */}
              {nearbyPlaces.map((place, idx) => {
                const pos = defaultPositions[idx] || {
                  x: centerX + Math.cos((idx * 2 * Math.PI) / nearbyPlaces.length) * 95,
                  y: centerY + Math.sin((idx * 2 * Math.PI) / nearbyPlaces.length) * 75
                };
                const isHighlighted = hoveredPlaceId === place.id;

                return (
                  <line
                    key={`line-${place.id}`}
                    x1={centerX}
                    y1={centerY}
                    x2={pos.x}
                    y2={pos.y}
                    stroke={isHighlighted ? '#6b4d2e' : '#a8987f'}
                    strokeWidth={isHighlighted ? '2.5' : '1.75'}
                    strokeDasharray="4 4"
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Center Shop Hub */}
              <g className="cursor-default">
                {/* Shop circle container (dark green matching screenshot) */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="22"
                  fill="#2e4c34"
                  stroke="#ffffff"
                  strokeWidth="3"
                  className="shadow-sm"
                />
                {/* Shopping bag center icon */}
                <foreignObject x={centerX - 10} y={centerY - 10} width="20" height="20">
                  <div className="flex items-center justify-center w-full h-full text-white">
                    <StayIcon name="souk" size={14} className="text-white" />
                  </div>
                </foreignObject>
              </g>

              {/* Peripheral Nearby Nodes */}
              {nearbyPlaces.map((place, idx) => {
                const pos = defaultPositions[idx] || {
                  x: centerX + Math.cos((idx * 2 * Math.PI) / nearbyPlaces.length) * 95,
                  y: centerY + Math.sin((idx * 2 * Math.PI) / nearbyPlaces.length) * 75
                };
                const theme = getTheme(place.category, idx);
                const isHighlighted = hoveredPlaceId === place.id;

                // Adjust label position based on placement relative to center
                const labelOffsetY = pos.y > centerY + 20 ? 25 : pos.y < centerY - 20 ? -22 : 0;
                const labelOffsetX = pos.x > centerX + 40 ? 0 : pos.x < centerX - 40 ? 0 : 0;

                return (
                  <g
                    key={`node-${place.id}`}
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredPlaceId(place.id)}
                    onMouseLeave={() => setHoveredPlaceId(null)}
                  >
                    {/* Pulsing ring on hover */}
                    {isHighlighted && (
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="25"
                        fill={theme.lightBg}
                        opacity="0.8"
                        className="animate-pulse"
                      />
                    )}

                    {/* Node circle */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isHighlighted ? '19' : '17'}
                      fill={theme.bg}
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      className="drop-shadow-xs transition-transform"
                    />

                    {/* Node icon */}
                    <foreignObject
                      x={pos.x - 9}
                      y={pos.y - 9}
                      width="18"
                      height="18"
                    >
                      <div className="flex items-center justify-center w-full h-full text-white">
                        <StayIcon name={place.icon || place.category} size={13} className="text-white" />
                      </div>
                    </foreignObject>

                    {/* Text Pill */}
                    <g transform={`translate(${pos.x + labelOffsetX}, ${pos.y + labelOffsetY})`}>
                      <text
                        x="0"
                        y="0"
                        textAnchor="middle"
                        className={`text-[11px] select-none ${
                          isHighlighted ? 'font-bold fill-[#1c1917]' : 'font-semibold fill-[#342b22]'
                        }`}
                      >
                        {place.name}
                      </text>
                      <text
                        x="0"
                        y="12"
                        textAnchor="middle"
                        className="text-[10px] fill-[#786b5b] font-medium select-none"
                      >
                        {place.walking_minutes} min
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right: Companion List matching screenshot */}
        <div className="md:col-span-5 flex flex-col gap-3.5">
          {nearbyPlaces.map((place, idx) => {
            const theme = getTheme(place.category, idx);
            const isHighlighted = hoveredPlaceId === place.id;

            return (
              <div
                key={place.id}
                onMouseEnter={() => setHoveredPlaceId(place.id)}
                onMouseLeave={() => setHoveredPlaceId(null)}
                className={`flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer ${
                  isHighlighted
                    ? 'bg-[#f6efe4] ring-1 ring-[#c2842e]'
                    : 'hover:bg-[#faf5ec]'
                }`}
              >
                {/* Icon in colored circle */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-2xs"
                    style={{ backgroundColor: theme.bg }}
                  >
                    <StayIcon name={place.icon || place.category} size={18} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#1c1917]">
                    {place.name}
                  </span>
                </div>

                {/* Walking Time */}
                <span className="text-xs sm:text-sm font-medium text-[#7a6a57] whitespace-nowrap">
                  {place.walking_minutes} min
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
