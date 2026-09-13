import { motion } from 'motion/react';
import { Filter, Sparkles, X, Check } from 'lucide-react';
import { useExploreStore } from '../../state/exploreStore';
import { useProfileStore } from '../../state/profileStore';
import { getTravelModeConfig } from '../../types/modes';

export interface FilterChipOption {
  id: string;
  label: string;
  icon: string;
  tag: string;
  flagKey?: 'isVegetarian' | 'isHalal' | 'isWheelchairAccessible' | 'isFixedPrice' | 'isKidFriendly';
}

const CATEGORY_CHIPS: Record<string, FilterChipOption[]> = {
  sleep: [
    { id: 'family-rooms', label: 'Family Rooms', icon: '👨‍👩‍👧', tag: 'family-friendly', flagKey: 'isKidFriendly' },
    { id: 'luxury-riad', label: 'Luxury Riad', icon: '🏰', tag: 'luxury' },
    { id: 'desert-camp', label: 'Desert Camp', icon: '🎪', tag: 'desert' },
    { id: 'mountain-gite', label: 'Mountain Gite', icon: '🏔️', tag: 'mountain' },
    { id: 'coworking-wifi', label: 'Coworking Wi-Fi', icon: '💻', tag: 'coworking' },
    { id: 'step-free', label: 'Step-Free', icon: '♿', tag: 'step-free', flagKey: 'isWheelchairAccessible' }
  ],
  things: [
    { id: 'photo-spot', label: 'Photo Spot', icon: '📷', tag: 'photo-spot' },
    { id: 'golden-hour', label: 'Golden Hour', icon: '🌅', tag: 'golden-hour' },
    { id: 'surf-break', label: 'Surf Break', icon: '🏄', tag: 'surf' },
    { id: 'trekking', label: 'Trekking', icon: '🥾', tag: 'trekking' },
    { id: 'festival-venue', label: 'Festival Venue', icon: '🎭', tag: 'festival' },
    { id: 'wellness-spa', label: 'Wellness/Spa', icon: '🌿', tag: 'wellness' },
    { id: 'step-free', label: 'Accessible', icon: '♿', tag: 'step-free', flagKey: 'isWheelchairAccessible' }
  ],
  food: [
    { id: 'vegetarian', label: 'Vegetarian/Vegan', icon: '🥗', tag: 'vegetarian', flagKey: 'isVegetarian' },
    { id: 'halal', label: 'Halal Verified', icon: '🌙', tag: 'halal', flagKey: 'isHalal' },
    { id: 'kosher', label: 'Kosher', icon: '✡️', tag: 'kosher' },
    { id: 'seafood', label: 'Seafood', icon: '🐟', tag: 'seafood' },
    { id: 'fine-dining', label: 'Fine Dining', icon: '✨', tag: 'fine-dining' },
    { id: 'street-food', label: 'Street Food', icon: '🍢', tag: 'street-food' }
  ],
  shopping: [
    { id: 'fixed-price', label: 'Fixed Price', icon: '🏷️', tag: 'fixed-price', flagKey: 'isFixedPrice' },
    { id: 'souk-stalls', label: 'Souk Stalls', icon: '🛍️', tag: 'souk' },
    { id: 'cooperatives', label: 'Cooperatives', icon: '🤝', tag: 'cooperative' },
    { id: 'artisanal', label: 'Local Crafts', icon: '🎨', tag: 'artisanal' }
  ]
};

interface FilterChipBarProps {
  category?: string;
  className?: string;
}

export default function FilterChipBar({ category = 'things', className = '' }: FilterChipBarProps) {
  const { filters, setFilter } = useExploreStore();
  const { travelMode } = useProfileStore();
  const activeModeConfig = getTravelModeConfig(travelMode);

  const normalizedCategory = 
    category === 'eat' || category === 'food' ? 'food' :
    category === 'sleep' ? 'sleep' :
    category === 'shopping' || category === 'shop' ? 'shopping' : 'things';

  const availableChips = CATEGORY_CHIPS[normalizedCategory] || CATEGORY_CHIPS.things;
  const activeVibes = filters.vibes || [];

  const handleToggleChip = (chip: FilterChipOption) => {
    const isCurrentlyActive = activeVibes.includes(chip.tag);
    let newVibes: string[];

    if (isCurrentlyActive) {
      newVibes = activeVibes.filter(v => v !== chip.tag);
    } else {
      newVibes = [...activeVibes, chip.tag];
    }

    setFilter('vibes', newVibes);

    // Toggle specific boolean flag if applicable
    if (chip.flagKey) {
      setFilter(chip.flagKey, !isCurrentlyActive);
    }
  };

  const handleClearAll = () => {
    setFilter('vibes', []);
    setFilter('isVegetarian', false);
    setFilter('isHalal', false);
    setFilter('isWheelchairAccessible', false);
    setFilter('isFixedPrice', false);
    setFilter('isKidFriendly', false);
  };

  const activeCount = availableChips.filter(chip => activeVibes.includes(chip.tag)).length;

  return (
    <div className={`w-full space-y-2 ${className}`}>
      <div className="flex items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[10px] font-black uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Specialty Filters
          </span>
          {activeCount > 0 && (
            <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-[#C9A84C] text-white">
              {activeCount}
            </span>
          )}
        </div>

        {activeModeConfig && (
          <div 
            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-2xs"
            style={{ backgroundColor: activeModeConfig.color }}
          >
            <Sparkles className="w-3 h-3" />
            <span>Mode Auto-Filters Active</span>
          </div>
        )}

        {activeCount > 0 && (
          <button
            onClick={handleClearAll}
            className="text-[10px] font-bold text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors flex items-center gap-1"
          >
            <span>Clear</span>
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Horizontal Scrollable Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        {availableChips.map((chip) => {
          const isActive = activeVibes.includes(chip.tag);

          return (
            <motion.button
              key={chip.id}
              onClick={() => handleToggleChip(chip)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-[11px] font-bold transition-all duration-200 cursor-pointer whitespace-nowrap border ${
                isActive
                  ? 'bg-stone-900 text-white border-stone-900 dark:bg-[#C9A84C] dark:text-stone-950 dark:border-[#C9A84C] shadow-md'
                  : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 border-stone-200 dark:border-stone-700 hover:border-stone-400'
              }`}
            >
              <span className="text-xs">{chip.icon}</span>
              <span>{chip.label}</span>
              {isActive && <Check className="w-3 h-3 ml-0.5" />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
