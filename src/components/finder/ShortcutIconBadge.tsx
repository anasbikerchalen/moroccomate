import React from 'react';
import { 
  Navigation, 
  UtensilsCrossed, 
  Coffee, 
  Soup, 
  Sunset, 
  Footprints, 
  Sparkles, 
  Landmark, 
  Waves, 
  Tag, 
  Compass,
  Store
} from 'lucide-react';
import { BrandLogo } from './BrandLogos';

interface ShortcutIconBadgeProps {
  icon: string;
  badgeColor?: 'terracotta' | 'gold' | 'amber' | 'emerald' | 'navy' | 'rose' | 'cyan';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const COLOR_MAP: Record<string, { bg: string; text: string; border: string }> = {
  terracotta: { bg: 'bg-[#FAF3F0]', text: 'text-[#C86D51]', border: 'border-[#C86D51]/20' },
  gold: { bg: 'bg-[#FEF9E7]', text: 'text-[#C9A84C]', border: 'border-[#C9A84C]/25' },
  amber: { bg: 'bg-[#FFFBEB]', text: 'text-[#D97706]', border: 'border-[#D97706]/20' },
  emerald: { bg: 'bg-[#ECFDF5]', text: 'text-[#059669]', border: 'border-[#059669]/20' },
  navy: { bg: 'bg-[#F1F5F9]', text: 'text-[#1E293B]', border: 'border-[#1E293B]/20' },
  rose: { bg: 'bg-[#FDF2F8]', text: 'text-[#BE185D]', border: 'border-[#BE185D]/20' },
  cyan: { bg: 'bg-[#ECFEFF]', text: 'text-[#0891B2]', border: 'border-[#0891B2]/20' },
};

const SIZE_MAP = {
  sm: { box: 'w-7 h-7 rounded-xl', icon: 'w-3.5 h-3.5' },
  md: { box: 'w-8 h-8 rounded-xl', icon: 'w-4 h-4' },
  lg: { box: 'w-11 h-11 rounded-2xl', icon: 'w-5 h-5' },
};

const KNOWN_BRANDS = new Set([
  'marjane',
  'carrefour',
  'decathlon',
  'atacadao-bim',
  'bim',
  'ensemble-artisanal',
  'mcdonalds',
  'kfc',
  'burger-king',
  'pizza-hut',
  'local-burger',
]);

export const ShortcutIconBadge: React.FC<ShortcutIconBadgeProps> = ({
  icon,
  badgeColor = 'terracotta',
  className = '',
  size = 'md',
}) => {
  const normIcon = icon.toLowerCase().trim();
  const sz = SIZE_MAP[size];
  const col = COLOR_MAP[badgeColor] || COLOR_MAP.terracotta;

  // 1. If it's a known commercial or dining brand, render its official vector logo!
  if (KNOWN_BRANDS.has(normIcon) || normIcon.startsWith('brand-')) {
    const brandId = normIcon.replace('brand-', '');
    return (
      <div className={`shrink-0 flex items-center justify-center ${sz.box} ${className}`}>
        <BrandLogo id={brandId} className="w-full h-full object-contain rounded-xl shadow-2xs" />
      </div>
    );
  }

  // 2. Icon lookup for stylized Moroccan palette vector icons
  const renderIcon = () => {
    switch (normIcon) {
      case 'near-me':
        return <Navigation className={`${sz.icon} fill-current`} />;
      case 'snack':
        return <UtensilsCrossed className={sz.icon} />;
      case 'cafe':
        return <Coffee className={sz.icon} />;
      case 'traditional':
        return <Soup className={sz.icon} />;
      case 'rooftop':
        return <Sunset className={sz.icon} />;
      case 'closer':
        return <Footprints className={sz.icon} />;
      case 'top-rated':
        return <Sparkles className={`${sz.icon} fill-current`} />;
      case 'riad':
        return <Landmark className={sz.icon} />;
      case 'pool':
        return <Waves className={sz.icon} />;
      case 'budget':
        return <Tag className={sz.icon} />;
      case 'activity':
      case 'things':
        return <Compass className={sz.icon} />;
      default:
        // Handle legacy emojis or strings gracefully
        if (normIcon.length <= 2) {
          return <span className="text-sm leading-none">{icon}</span>;
        }
        return <Store className={sz.icon} />;
    }
  };

  return (
    <div
      className={`shrink-0 flex items-center justify-center border transition-transform duration-200 ${sz.box} ${col.bg} ${col.text} ${col.border} ${className}`}
    >
      {renderIcon()}
    </div>
  );
};

export default ShortcutIconBadge;
