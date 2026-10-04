import React, { useState } from 'react';
import { NearbyPlace } from '../../../types/stay';
import { StayIcon } from './StayIcon';

interface WalkingDistanceMapProps {
  propertyName: string;
  nearbyPlaces: NearbyPlace[];
  hoveredPlaceId?: string | null;
  onHoverPlace?: (id: string | null) => void;
}

export const WalkingDistanceMap: React.FC<WalkingDistanceMapProps> = ({
  propertyName,
  nearbyPlaces,
  hoveredPlaceId,
  onHoverPlace
}) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // SVG coordinate configuration (viewBox 440 x 300)
  const width = 440;
  const height = 300;
  const centerX = width / 2;
  const centerY = height / 2 + 10;

  // Preset or dynamic spatial layout based on relative angle & distance
  const defaultPositions = [
    { x: centerX + 5, y: 70 },      // Top (e.g. Jemaa el-Fna)
    { x: 95, y: 165 },             // Left (e.g. Souks)
    { x: 350, y: 175 },            // Right (e.g. Taxi Station)
    { x: centerX + 10, y: 250 },   // Bottom (e.g. Train Station)
  ];

  // Helper to get category badge colors matching mockup
  const getCategoryTheme = (category: string, index: number) => {
    switch (category.toLowerCase()) {
      case 'square':
      case 'landmark':
        return {
          bg: '#cf8257',
          lightBg: '#f8ece4',
          border: '#bc6c3e',
          text: '#ffffff',
          dot: '#cf8257'
        };
      case 'souk / market':
      case 'market':
        return {
          bg: '#94a77e',
          lightBg: '#edf2e7',
          border: '#7c9264',
          text: '#ffffff',
          dot: '#94a77e'
        };
      case 'taxi':
      case 'transport':
      case 'activity':
        return {
          bg: '#e4a838',
          lightBg: '#fbf3de',
          border: '#cb8e1e',
          text: '#ffffff',
          dot: '#e4a838'
        };
      case 'train station':
      case 'bus station':
      case 'airport':
      case 'marina':
        return {
          bg: '#6c8fa3',
          lightBg: '#e9f1f5',
          border: '#53768a',
          text: '#ffffff',
          dot: '#6c8fa3'
        };
      default: {
        const fallbacks = [
          { bg: '#cf8257', lightBg: '#f8ece4', border: '#bc6c3e', text: '#ffffff', dot: '#cf8257' },
          { bg: '#94a77e', lightBg: '#edf2e7', border: '#7c9264', text: '#ffffff', dot: '#94a77e' },
          { bg: '#e4a838', lightBg: '#fbf3de', border: '#cb8e1e', text: '#ffffff', dot: '#e4a838' },
          { bg: '#6c8fa3', lightBg: '#e9f1f5', border: '#53768a', text: '#ffffff', dot: '#6c8fa3' }
        ];
        return fallbacks[index % fallbacks.length];
      }
    }
  };

  return (
    <div className="relative w-full h-[320px] sm:h-[350px] overflow-hidden rounded-xl border border-[#e8dfcf] bg-[#f7f2e7] shadow-inner select-none">
      {/* Background illustrated map graphic: Street grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="street-grid" width="70" height="70" patternUnits="userSpaceOnUse">
            <path
              d="M 0 20 L 70 20 M 20 0 L 20 70 M 0 55 L 70 55 M 55 0 L 55 70"
              fill="none"
              stroke="#dfd4bf"
              strokeWidth="2.5"
            />
            <circle cx="20" cy="20" r="2" fill="#d2c4ac" />
            <circle cx="55" cy="55" r="2" fill="#d2c4ac" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#street-grid)" />
        {/* Soft curving medina thoroughfares */}
        <path
          d="M -20 180 Q 140 130 220 160 T 460 140"
          fill="none"
          stroke="#fdfbf7"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          d="M 210 -20 Q 230 140 220 320"
          fill="none"
          stroke="#fdfbf7"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M 120 320 Q 160 210 320 120"
          fill="none"
          stroke="#fdfbf7"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>

      {/* Interactive Radial Graph */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connecting dotted lines from center stay to nearby places */}
        {nearbyPlaces.map((place, idx) => {
          const pos = defaultPositions[idx] || {
            x: centerX + Math.cos((idx * 2 * Math.PI) / nearbyPlaces.length) * 110,
            y: centerY + Math.sin((idx * 2 * Math.PI) / nearbyPlaces.length) * 85
          };
          const isHighlighted = hoveredPlaceId === place.id || activeTooltip === place.id;

          return (
            <g key={`line-${place.id}`}>
              <line
                x1={centerX}
                y1={centerY}
                x2={pos.x}
                y2={pos.y}
                stroke={isHighlighted ? '#735738' : '#ab9b82'}
                strokeWidth={isHighlighted ? '2.5' : '1.75'}
                strokeDasharray="4 4"
                className="transition-all duration-300"
              />
            </g>
          );
        })}

        {/* Center Property Hub */}
        <g className="cursor-default">
          <circle
            cx={centerX}
            cy={centerY}
            r="23"
            fill="#344e29"
            stroke="#ffffff"
            strokeWidth="3"
            className="shadow-md"
          />
          {/* Centered Property Icon */}
          <foreignObject x={centerX - 12} y={centerY - 12} width="24" height="24">
            <div className="flex items-center justify-center w-full h-full text-white">
              <StayIcon name="riad" size={16} className="text-white" />
            </div>
          </foreignObject>

          {/* Center Property Name Label Box */}
          <g transform={`translate(${centerX}, ${centerY + 34})`}>
            <rect
              x="-65"
              y="-12"
              width="130"
              height="24"
              rx="12"
              fill="#ffffff"
              stroke="#e2d8c6"
              strokeWidth="1"
              className="drop-shadow-xs"
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              className="text-[12px] font-semibold fill-[#1f1b16]"
            >
              {propertyName.length > 18 ? propertyName.slice(0, 16) + '…' : propertyName}
            </text>
          </g>
        </g>

        {/* Peripheral Nearby Places Nodes */}
        {nearbyPlaces.map((place, idx) => {
          const pos = defaultPositions[idx] || {
            x: centerX + Math.cos((idx * 2 * Math.PI) / nearbyPlaces.length) * 110,
            y: centerY + Math.sin((idx * 2 * Math.PI) / nearbyPlaces.length) * 85
          };
          const theme = getCategoryTheme(place.category, idx);
          const isHighlighted = hoveredPlaceId === place.id || activeTooltip === place.id;

          return (
            <g
              key={`node-${place.id}`}
              className="cursor-pointer transition-transform duration-300 group"
              onMouseEnter={() => {
                setActiveTooltip(place.id);
                onHoverPlace?.(place.id);
              }}
              onMouseLeave={() => {
                setActiveTooltip(null);
                onHoverPlace?.(null);
              }}
            >
              {/* Ripple / pulse when highlighted */}
              {isHighlighted && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="26"
                  fill={theme.lightBg}
                  opacity="0.8"
                  className="animate-pulse"
                />
              )}

              {/* Node Icon Circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isHighlighted ? '20' : '18'}
                fill={theme.bg}
                stroke="#ffffff"
                strokeWidth="2.5"
                className="drop-shadow-sm transition-all duration-200"
              />

              <foreignObject
                x={pos.x - (isHighlighted ? 12 : 10)}
                y={pos.y - (isHighlighted ? 12 : 10)}
                width={isHighlighted ? 24 : 20}
                height={isHighlighted ? 24 : 20}
              >
                <div className="flex items-center justify-center w-full h-full text-white">
                  <StayIcon
                    name={place.icon || place.category}
                    size={isHighlighted ? 15 : 13}
                    className="text-white"
                  />
                </div>
              </foreignObject>

              {/* Place Name & Time Label Pill */}
              <g transform={`translate(${pos.x}, ${pos.y > centerY ? pos.y + 26 : pos.y - 20})`}>
                <rect
                  x="-55"
                  y="-11"
                  width="110"
                  height="22"
                  rx="11"
                  fill="#ffffff"
                  stroke={isHighlighted ? theme.border : '#e2d8c6'}
                  strokeWidth={isHighlighted ? '1.5' : '1'}
                  className="drop-shadow-xs transition-colors"
                />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  className={`text-[11px] ${
                    isHighlighted ? 'font-bold fill-[#1c1917]' : 'font-medium fill-[#3a3227]'
                  }`}
                >
                  {place.name.length > 13 ? place.name.slice(0, 12) + '…' : place.name} · {place.walking_time_minutes} min
                </text>
              </g>
            </g>
          );
        })}
      </svg>

      {/* Compass Needle (Bottom Left) */}
      <div className="absolute bottom-3 left-3.5 z-10 flex flex-col items-center justify-center rounded-md bg-[#faf7f0]/90 px-2 py-1 border border-[#e5dcce] shadow-xs">
        <span className="text-[10px] font-bold text-[#b45309] leading-none">▲</span>
        <span className="text-[10px] font-bold tracking-widest text-[#5c4e3e]">N</span>
      </div>

      {/* Map Interactive Hint */}
      <div className="absolute top-3 right-3 z-10 rounded-full bg-[#faf7f0]/90 px-2.5 py-0.5 border border-[#e5dcce] text-[10px] font-medium text-[#766755]">
        Interactive radius graph
      </div>
    </div>
  );
};
