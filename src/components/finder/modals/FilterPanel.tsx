import { SlidersHorizontal, Star, X, Check, Sparkles, User, Shield, Zap, Heart, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useExploreStore } from '../../../state/exploreStore';
import { ARCHETYPE_METADATA } from '../../../data/explore/archetypes';
import { VIBES } from '../../../types/tags';
import { TAG_REGISTRY } from '../../../listings/things/tags';

const COMMON_VIBES = [...VIBES];

const CATEGORY_SPECIFIC_TAGS: Record<string, string[]> = {
  'food': ['Traditional', 'Street Food', 'Modern Fusion', 'Fine Dining', 'Casual', 'Rooftop', 'Hole-in-wall', 'International', 'Sweets', 'Quick Bite', 'Halal', 'Vegetarian'],
  'sleep': ['Luxury', 'Boutique', 'Authentic', 'Budget', 'Riad', 'Desert Camp', 'Kasbah', 'Hotel', 'Pool', 'A/C', 'Breakfast'],
  'things': [
    // Interests
    'culture', 'adventure', 'food', 'social', 'slow', 'shopping-interest', 'photography-interest',
    // Vibes
    'authentic', 'instagrammable', 'off-the-beaten-path', 'romantic', 'family-friendly', 'relaxed', 'bustling',
    // Activity Types
    'hiking', 'water-sports', 'cultural-tour', 'culinary', 'desert-adventure', 'wellness', 'shopping', 'workshop', 'photography'
  ],
  'shopping': ['souvenirs', 'leather', 'ceramics', 'textiles', 'spices', 'artisan'],
  'experiences': ['nature', 'water-sports', 'hiking', 'cultural-tour', 'wellness', 'adventure-sports', 'private']
};

const FilterSection = ({ label, children, icon }: { label: string, children: React.ReactNode, icon?: any }) => (
  <div className="space-y-4">
    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
      {icon} {label}
    </label>
    <div className="flex flex-wrap gap-2">
      {children}
    </div>
  </div>
);

const ToggleButton = ({ active, onClick, label, icon, count }: { active: boolean, onClick: () => void, label: string, icon?: string, count?: number }) => (
  <button
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    className={cn(
      "px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 border cursor-pointer",
      active 
        ? "bg-[#C9A84C] text-white border-[#C9A84C] shadow-lg shadow-[#C9A84C]/20" 
        : "bg-white text-stone-500 border-stone-100 hover:border-stone-200"
    )}
  >
    {icon && <span>{icon}</span>}
    {label}
    {typeof count === 'number' && (
      <span className={cn("text-[9px] font-black px-1 rounded-full", active ? "bg-white/20" : "bg-stone-100 text-stone-500")}>{count}</span>
    )}
    {active && <Check className="w-3 h-3" />}
  </button>
);

interface FilterPanelProps {
  category: string;
  filters: any;
  onChange: (newFilters: any) => void;
  onClose: () => void;
  items?: any[];
}

export default function FilterPanel({ category, filters, onChange, onClose, items }: FilterPanelProps) {
  const { archetype, setArchetype } = useExploreStore();
  const [showMore, setShowMore] = useState(false);

  // Live result counts: prevents 0-match dead ends when toggling filters
  const countFor = (predicate: (item: any) => boolean): number | undefined =>
    items ? items.filter(predicate).length : undefined;
  const flagCount = (key: string): number | undefined => {
    const predicates: Record<string, (item: any) => boolean> = {
      isVegetarian: (item: any) => item.isVegetarianFriendly === true,
      isHalal: (item: any) => item.isHalal === true,
      servesAlcohol: (item: any) => item.servesAlcohol === true,
      hasPool: (item: any) => item.hasPool === true,
      hasAC: (item: any) => item.hasAC === true,
      isKidFriendly: (item: any) => item.isKidFriendly === true || (Array.isArray(item.vibeTags) && item.vibeTags.some((v: string) => v.toLowerCase().includes('family'))),
      isWheelchairAccessible: (item: any) => item.isWheelchairAccessible === true || (Array.isArray(item.vibeTags) && item.vibeTags.some((v: string) => v.toLowerCase().includes('step-free'))),
      isVerified: (item: any) => item.isVerified === true,
      isFixedPrice: (item: any) => item.pricingModel === 'fixed',
      isNoHassle: (item: any) => item.pricingModel === 'fixed',
      isWorkshop: (item: any) => (Array.isArray(item.tags) && item.tags.some((t: string) => t.toLowerCase().includes('workshop'))) || (Array.isArray(item.experienceTypes) && item.experienceTypes.some((t: any) => String(t).toLowerCase().includes('workshop'))),
      isLocalFav: (item: any) => (Array.isArray(item.tags) && item.tags.some((t: string) => t.toLowerCase().includes('local-favorite'))) || (Array.isArray(item.vibeTags) && item.vibeTags.some((v: string) => v.toLowerCase().includes('local favorite')))
    };
    const predicate = predicates[key];
    return predicate ? countFor(predicate) : undefined;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  const normalizedCategory = category === 'eat' ? 'food' : (category === 'things-to-do' ? 'things' : category);
  
  const isSleep = normalizedCategory === 'sleep';
  const isEat = normalizedCategory === 'food';
  const isShopping = normalizedCategory === 'shopping';
  const isThings = normalizedCategory === 'things' || normalizedCategory === 'experiences' || normalizedCategory === 'cities';

  const updateFilter = (key: string, value: any) => {
    onChange({ ...filters, [key]: value });
  };

  const toggleVibe = (vibe: string) => {
    const current = filters.vibes || [];
    const updated = current.includes(vibe)
      ? current.filter((v: string) => v !== vibe)
      : [...current, vibe];
    updateFilter('vibes', updated);
  };

  const categoryVibes = CATEGORY_SPECIFIC_TAGS[normalizedCategory] || COMMON_VIBES;

  return (
    <div 
      className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-[100] flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="p-8 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-stone-900 rounded-2xl flex items-center justify-center text-[#C9A84C]">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-display text-stone-900 leading-none">Personalize Results</h2>
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">Refine your {normalizedCategory} discovery</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 bg-white border border-stone-100 rounded-xl flex items-center justify-center text-stone-400 hover:text-stone-900 transition-all shadow-sm cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 space-y-10 overflow-y-auto custom-scrollbar">
          <FilterSection label="Primary Travel Style" icon={<User className="w-3 h-3" />}>
            {Object.entries(ARCHETYPE_METADATA).map(([id, meta]) => (
              <button
                key={id}
                onClick={() => setArchetype(id as any)}
                className={cn(
                  "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border flex items-center gap-2 cursor-pointer",
                  archetype === id 
                    ? "bg-stone-900 text-white border-stone-900 shadow-md" 
                    : "bg-white text-stone-400 border-stone-100 hover:border-stone-200"
                )}
              >
                {archetype === id && <Shield className="w-3 h-3 text-[#C9A84C]" />}
                {meta.name}
              </button>
            ))}
          </FilterSection>

          <FilterSection label={`${normalizedCategory.charAt(0).toUpperCase() + normalizedCategory.slice(1)} Tags`} icon={<Sparkles className="w-3 h-3" />}>
            {categoryVibes.map(tagId => {
              const tag = TAG_REGISTRY[tagId];
              const label = tag?.label || tagId;
              const icon = tag?.icon;
              const isActive = filters.vibes?.includes(tagId);
              // Live result count: prevents 0-match dead ends
              const liveCount = items
                ? items.filter((item: any) =>
                    (Array.isArray(item.tags) && item.tags.some((t: string) => String(t).toLowerCase() === tagId.toLowerCase()))
                    || (Array.isArray(item.vibeTags) && item.vibeTags.some((t: string) => String(t).toLowerCase() === tagId.toLowerCase()))
                    || (Array.isArray(item.archetypeAffinity) && item.archetypeAffinity.some((t: string) => String(t).toLowerCase() === tagId.toLowerCase()))
                    || (item.description || '').toLowerCase().includes(tagId.toLowerCase())
                  ).length
                : undefined;

              return (
                <button
                  key={tagId}
                  onClick={() => toggleVibe(tagId)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border cursor-pointer",
                    isActive
                      ? "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/30"
                      : "bg-white text-stone-500 border-stone-100 hover:border-stone-300"
                  )}
                >
                  {isActive && <Check className="w-3.5 h-3.5" />}
                  {icon && <span>{icon}</span>}
                  {label}
                  {typeof liveCount === 'number' && (
                    <span className={cn("text-[9px] font-black px-1 rounded-full", isActive ? "bg-[#C9A84C]/20" : "bg-stone-100 text-stone-500")}>{liveCount}</span>
                  )}
                </button>
              );
            })}
          </FilterSection>

          <FilterSection label="Must-Have Features" icon={<Zap className="w-3 h-3" />}>
            {isEat && (
              <>
                <ToggleButton active={!!filters.isVegetarian} onClick={() => updateFilter('isVegetarian', !filters.isVegetarian)} label="Vegetarian" count={flagCount('isVegetarian')} icon="🥬" />
                <ToggleButton active={!!filters.isHalal} onClick={() => updateFilter('isHalal', !filters.isHalal)} label="Halal" count={flagCount('isHalal')} icon="🥩" />
                <ToggleButton active={!!filters.servesAlcohol} onClick={() => updateFilter('servesAlcohol', !filters.servesAlcohol)} label="Serves Alcohol" count={flagCount('servesAlcohol')} icon="🍷" />
              </>
            )}
            {isSleep && (
              <>
                <ToggleButton active={!!filters.hasPool} onClick={() => updateFilter('hasPool', !filters.hasPool)} label="Pool" count={flagCount('hasPool')} icon="🏊" />
                <ToggleButton active={!!filters.hasAC} onClick={() => updateFilter('hasAC', !filters.hasAC)} label="A/C" count={flagCount('hasAC')} icon="❄️" />
              </>
            )}
            {isThings && (
              <>
                <ToggleButton active={!!filters.isKidFriendly} onClick={() => updateFilter('isKidFriendly', !filters.isKidFriendly)} label="Kid Friendly" count={flagCount('isKidFriendly')} icon="👶" />
                <ToggleButton active={!!filters.isWheelchairAccessible} onClick={() => updateFilter('isWheelchairAccessible', !filters.isWheelchairAccessible)} label="Accessible" count={flagCount('isWheelchairAccessible')} icon="♿" />
              </>
            )}
            {isShopping && (
              <>
                <ToggleButton active={!!filters.isVerified} onClick={() => updateFilter('isVerified', !filters.isVerified)} label="Verified Authentic" count={flagCount('isVerified')} icon="🛡️" />
                <ToggleButton active={!!filters.isFixedPrice} onClick={() => updateFilter('isFixedPrice', !filters.isFixedPrice)} label="Fixed Price Only" count={flagCount('isFixedPrice')} icon="🏷️" />
                <ToggleButton active={!!filters.isNoHassle} onClick={() => updateFilter('isNoHassle', !filters.isNoHassle)} label="Low Pressure" count={flagCount('isNoHassle')} icon="😌" />
                <ToggleButton active={!!filters.isWorkshop} onClick={() => updateFilter('isWorkshop', !filters.isWorkshop)} label="Live Workshop" count={flagCount('isWorkshop')} icon="🔨" />
                <ToggleButton active={!!filters.isLocalFav} onClick={() => updateFilter('isLocalFav', !filters.isLocalFav)} label="Local Favorite" count={flagCount('isLocalFav')} icon="❤️" />
              </>
            )}
          </FilterSection>

          <div className="pt-2 border-t border-stone-50">
            <button 
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
            >
              {showMore ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              {showMore ? 'Fewer Filters' : 'More Filters (Logistics)'}
            </button>
            
            <AnimatePresence>
              {showMore && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden space-y-8 pt-8"
                >
                  <FilterSection label="Budget (Price Range)" icon={<Sparkles className="w-3 h-3" />}>
                    {['price-free', 'price-budget', 'price-mid', 'price-premium'].map(tagId => (
                      <button
                        key={tagId}
                        onClick={() => toggleVibe(tagId)}
                        className={cn(
                          "px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border cursor-pointer",
                          filters.vibes?.includes(tagId)
                            ? "bg-stone-900 text-white border-stone-900"
                            : "bg-white text-stone-500 border-stone-100 hover:border-stone-300"
                        )}
                      >
                        {TAG_REGISTRY[tagId]?.label}
                      </button>
                    ))}
                  </FilterSection>

                  <FilterSection label="Tour Scope" icon={<User className="w-3 h-3" />}>
                    {['private', 'small-group', 'self-guided', 'guided'].map(tagId => (
                      <button
                        key={tagId}
                        onClick={() => toggleVibe(tagId)}
                        className={cn(
                          "px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border cursor-pointer",
                          filters.vibes?.includes(tagId)
                            ? "bg-[#C9A84C] text-white border-[#C9A84C]"
                            : "bg-white text-stone-500 border-stone-100 hover:border-stone-300"
                        )}
                      >
                        {TAG_REGISTRY[tagId]?.icon} {TAG_REGISTRY[tagId]?.label}
                      </button>
                    ))}
                  </FilterSection>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-4">
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
              <Star className="w-3 h-3" /> Minimum Rating
            </label>
            <div className="flex items-center gap-6 bg-stone-50 p-6 rounded-[24px] border border-stone-100">
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={filters.rating || 0}
                onChange={(e) => updateFilter('rating', parseFloat(e.target.value))}
                className="flex-1 accent-[#C9A84C] h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-xl font-display text-stone-800 min-w-[3rem]">
                {filters.rating > 0 ? `${filters.rating}★` : 'Any'}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-stone-50/50 border-t border-stone-100 flex gap-4">
          <button
            onClick={() => {
              setArchetype(null as any);
              onChange({ 
                vibes: [], 
                rating: 0,
                isVegetarian: false,
                isHalal: false,
                servesAlcohol: false,
                hasPool: false,
                hasAC: false,
                isKidFriendly: false,
                isWheelchairAccessible: false,
                isVerified: false,
                isFixedPrice: false,
                isNoHassle: false,
                isWorkshop: false,
                isLocalFav: false,
              });
              onClose();
            }}
            className="flex-1 py-4 bg-white border border-stone-200 text-stone-400 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:text-stone-900 hover:border-stone-900 transition-all cursor-pointer"
          >
            Reset All
          </button>
          <button
            onClick={onClose}
            className="flex-[2] py-4 bg-stone-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#C9A84C] transition-all shadow-xl shadow-stone-900/10 cursor-pointer"
          >
            Show Matches →
          </button>
        </div>
      </motion.div>
    </div>
  );
}
