import { SlidersHorizontal, Star, X, Check, Sparkles, User, Shield, Zap, DollarSign, Compass, Layers } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { motion } from 'motion/react';
import { useEffect, useMemo } from 'react';
import { useExploreStore } from '../../../state/exploreStore';
import { ARCHETYPE_METADATA } from '../../../data/explore/archetypes';
import { TAG_REGISTRY } from '../../../listings/things/tags';

interface FilterItemOption {
  id: string;
  label: string;
  icon: string;
  type: 'flag' | 'vibe' | 'archetype' | 'price';
  flagKey?: string;
  tagKey?: string;
}

interface FilterPanelProps {
  category: string;
  filters: any;
  onChange: (newFilters: any) => void;
  onClose: () => void;
  items?: any[];
}

export default function FilterPanel({ category, filters, onChange, onClose, items = [] }: FilterPanelProps) {
  const { archetype, setArchetype } = useExploreStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const normalizedCategory =
    category === 'eat' || category === 'food' ? 'food' :
    category === 'sleep' || category === 'stay' ? 'sleep' :
    category === 'shopping' || category === 'shop' ? 'shopping' : 'things';

  const isSleep = normalizedCategory === 'sleep';
  const isEat = normalizedCategory === 'food';
  const isShopping = normalizedCategory === 'shopping';
  const isThings = normalizedCategory === 'things';

  const updateFilter = (key: string, value: any) => {
    onChange({ ...filters, [key]: value });
  };

  const toggleVibe = (tagId: string) => {
    const current = filters.vibes || [];
    const updated = current.includes(tagId)
      ? current.filter((v: string) => v !== tagId)
      : [...current, tagId];
    updateFilter('vibes', updated);
  };

  // Live item count calculator
  const countForFilter = (predicate: (item: any) => boolean): number => {
    return items.filter(predicate).length;
  };

  const tagMatchesItem = (item: any, tagId: string): boolean => {
    const target = tagId.toLowerCase();
    const tags = Array.isArray(item.tags) ? item.tags : [];
    const vibeTags = Array.isArray(item.vibeTags) ? item.vibeTags : [];
    const affinities = Array.isArray(item.archetypeAffinity) ? item.archetypeAffinity : [];
    const foodStyles = Array.isArray(item.foodStyles) ? item.foodStyles : [];
    const amenities = Array.isArray(item.amenities) ? item.amenities : [];
    const experienceTypes = Array.isArray(item.experienceTypes) ? item.experienceTypes : [];

    const pool = [
      ...tags, ...vibeTags, ...affinities, ...foodStyles, ...amenities, ...experienceTypes,
      item.type, item.category, item.cuisine, item.neighborhood, item.locationSummary
    ].filter(Boolean).map((t: any) => String(t).toLowerCase());

    return pool.some(t => t === target || t.includes(target)) ||
      (item.description && String(item.description).toLowerCase().includes(target));
  };

  // Compute live match count for current filter selection
  const liveMatchCount = useMemo(() => {
    return items.filter(item => {
      if (filters.isVegetarian && !item.isVegetarianFriendly) return false;
      if (filters.isHalal && !item.isHalal) return false;
      if (filters.servesAlcohol && !item.servesAlcohol) return false;
      if (filters.hasPool && !item.hasPool) return false;
      if (filters.hasAC && !item.hasAC) return false;
      if (filters.isKidFriendly && !(item.isKidFriendly || (item.vibeTags && item.vibeTags.includes('family')))) return false;
      if (filters.isWheelchairAccessible && !(item.isWheelchairAccessible || (item.vibeTags && item.vibeTags.includes('step-free')))) return false;
      if (filters.isVerified && !item.isVerified) return false;
      if (filters.isFixedPrice && item.pricingModel !== 'fixed') return false;
      if (filters.isNoHassle && item.pricingModel !== 'fixed') return false;
      if (filters.isWorkshop && !tagMatchesItem(item, 'workshop')) return false;
      if (filters.isLocalFav && !tagMatchesItem(item, 'local-favorite')) return false;

      if (filters.rating > 0) {
        const r = item.googleRating || item.rating || 0;
        if (r < filters.rating) return false;
      }

      if (filters.vibes && filters.vibes.length > 0) {
        const matchesAll = filters.vibes.every((v: string) => tagMatchesItem(item, v));
        if (!matchesAll) return false;
      }

      if (archetype && item.archetypeAffinity && !item.archetypeAffinity.includes(archetype)) {
        return false;
      }

      return true;
    }).length;
  }, [items, filters, archetype]);

  // ── Column 1: Must-Have Amenities by Category ──
  const amenityOptions = useMemo(() => {
    if (isSleep) {
      return [
        { id: 'hasPool', label: 'Swimming Pool', icon: '🏊', isFlag: true, active: !!filters.hasPool, count: countForFilter(i => i.hasPool === true), toggle: () => updateFilter('hasPool', !filters.hasPool) },
        { id: 'hasAC', label: 'Air Conditioning', icon: '❄️', isFlag: true, active: !!filters.hasAC, count: countForFilter(i => i.hasAC === true), toggle: () => updateFilter('hasAC', !filters.hasAC) },
        { id: 'wifi', label: 'Coworking Wi-Fi', icon: '💻', isFlag: false, active: (filters.vibes || []).includes('coworking'), count: countForFilter(i => tagMatchesItem(i, 'coworking') || tagMatchesItem(i, 'wifi')), toggle: () => toggleVibe('coworking') },
        { id: 'rooftop', label: 'Rooftop Terrace', icon: '🌅', isFlag: false, active: (filters.vibes || []).includes('rooftop'), count: countForFilter(i => i.hasRooftop || tagMatchesItem(i, 'rooftop')), toggle: () => toggleVibe('rooftop') },
        { id: 'breakfast', label: 'Breakfast Included', icon: '🍳', isFlag: false, active: (filters.vibes || []).includes('breakfast'), count: countForFilter(i => tagMatchesItem(i, 'breakfast')), toggle: () => toggleVibe('breakfast') },
        { id: 'isKidFriendly', label: 'Family Rooms', icon: '👨‍👩‍👧', isFlag: true, active: !!filters.isKidFriendly, count: countForFilter(i => i.isKidFriendly || tagMatchesItem(i, 'family')), toggle: () => updateFilter('isKidFriendly', !filters.isKidFriendly) },
        { id: 'isWheelchairAccessible', label: 'Step-Free Access', icon: '♿', isFlag: true, active: !!filters.isWheelchairAccessible, count: countForFilter(i => i.isWheelchairAccessible || tagMatchesItem(i, 'step-free')), toggle: () => updateFilter('isWheelchairAccessible', !filters.isWheelchairAccessible) },
        { id: 'quiet', label: 'Quiet Courtyard', icon: '🤫', isFlag: false, active: (filters.vibes || []).includes('quiet'), count: countForFilter(i => tagMatchesItem(i, 'quiet')), toggle: () => toggleVibe('quiet') },
      ];
    }
    if (isEat) {
      return [
        { id: 'isVegetarian', label: 'Vegetarian Options', icon: '🥬', isFlag: true, active: !!filters.isVegetarian, count: countForFilter(i => i.isVegetarianFriendly === true), toggle: () => updateFilter('isVegetarian', !filters.isVegetarian) },
        { id: 'isHalal', label: 'Halal Certified', icon: '🥩', isFlag: true, active: !!filters.isHalal, count: countForFilter(i => i.isHalal === true), toggle: () => updateFilter('isHalal', !filters.isHalal) },
        { id: 'servesAlcohol', label: 'Serves Alcohol', icon: '🍷', isFlag: true, active: !!filters.servesAlcohol, count: countForFilter(i => i.servesAlcohol === true), toggle: () => updateFilter('servesAlcohol', !filters.servesAlcohol) },
        { id: 'rooftop', label: 'Rooftop Dining', icon: '🌇', isFlag: false, active: (filters.vibes || []).includes('rooftop'), count: countForFilter(i => i.hasRooftop || tagMatchesItem(i, 'rooftop')), toggle: () => toggleVibe('rooftop') },
        { id: 'breakfast', label: 'Breakfast / Brunch', icon: '🥐', isFlag: false, active: (filters.vibes || []).includes('breakfast'), count: countForFilter(i => tagMatchesItem(i, 'breakfast')), toggle: () => toggleVibe('breakfast') },
        { id: 'isKidFriendly', label: 'Kid Friendly', icon: '👶', isFlag: true, active: !!filters.isKidFriendly, count: countForFilter(i => i.isKidFriendly || tagMatchesItem(i, 'family')), toggle: () => updateFilter('isKidFriendly', !filters.isKidFriendly) },
        { id: 'isWheelchairAccessible', label: 'Step-Free Access', icon: '♿', isFlag: true, active: !!filters.isWheelchairAccessible, count: countForFilter(i => i.isWheelchairAccessible || tagMatchesItem(i, 'step-free')), toggle: () => updateFilter('isWheelchairAccessible', !filters.isWheelchairAccessible) },
        { id: 'isVerified', label: 'Verified Quality', icon: '🛡️', isFlag: true, active: !!filters.isVerified, count: countForFilter(i => i.isVerified === true), toggle: () => updateFilter('isVerified', !filters.isVerified) },
      ];
    }
    if (isShopping) {
      return [
        { id: 'isFixedPrice', label: 'Fixed Price (No Haggling)', icon: '🏷️', isFlag: true, active: !!filters.isFixedPrice, count: countForFilter(i => i.pricingModel === 'fixed'), toggle: () => updateFilter('isFixedPrice', !filters.isFixedPrice) },
        { id: 'isVerified', label: 'Verified Authentic', icon: '🛡️', isFlag: true, active: !!filters.isVerified, count: countForFilter(i => i.isVerified === true), toggle: () => updateFilter('isVerified', !filters.isVerified) },
        { id: 'isNoHassle', label: 'Low Pressure Experience', icon: '😌', isFlag: true, active: !!filters.isNoHassle, count: countForFilter(i => i.pricingModel === 'fixed'), toggle: () => updateFilter('isNoHassle', !filters.isNoHassle) },
        { id: 'isWorkshop', label: 'Live Master Craftsman', icon: '🔨', isFlag: true, active: !!filters.isWorkshop, count: countForFilter(i => tagMatchesItem(i, 'workshop')), toggle: () => updateFilter('isWorkshop', !filters.isWorkshop) },
        { id: 'isLocalFav', label: 'Local Favorite', icon: '❤️', isFlag: true, active: !!filters.isLocalFav, count: countForFilter(i => tagMatchesItem(i, 'local-favorite')), toggle: () => updateFilter('isLocalFav', !filters.isLocalFav) },
        { id: 'cooperative', label: 'Women Cooperative', icon: '🤝', isFlag: false, active: (filters.vibes || []).includes('cooperative'), count: countForFilter(i => tagMatchesItem(i, 'cooperative')), toggle: () => toggleVibe('cooperative') },
      ];
    }
    // Things to do
    return [
      { id: 'guided', label: 'Guided Excursion', icon: '🗺️', isFlag: false, active: (filters.vibes || []).includes('guided'), count: countForFilter(i => tagMatchesItem(i, 'guided')), toggle: () => toggleVibe('guided') },
      { id: 'self-guided', label: 'Self-Guided Exploration', icon: '🧭', isFlag: false, active: (filters.vibes || []).includes('self-guided'), count: countForFilter(i => tagMatchesItem(i, 'self-guided')), toggle: () => toggleVibe('self-guided') },
      { id: 'private', label: 'Private VIP Group', icon: '🔒', isFlag: false, active: (filters.vibes || []).includes('private'), count: countForFilter(i => tagMatchesItem(i, 'private')), toggle: () => toggleVibe('private') },
      { id: 'small-group', label: 'Small Group', icon: '👥', isFlag: false, active: (filters.vibes || []).includes('small-group'), count: countForFilter(i => tagMatchesItem(i, 'small-group')), toggle: () => toggleVibe('small-group') },
      { id: 'isKidFriendly', label: 'Kid & Family Friendly', icon: '👶', isFlag: true, active: !!filters.isKidFriendly, count: countForFilter(i => i.isKidFriendly || tagMatchesItem(i, 'family')), toggle: () => updateFilter('isKidFriendly', !filters.isKidFriendly) },
      { id: 'isWheelchairAccessible', label: 'Step-Free Accessible', icon: '♿', isFlag: true, active: !!filters.isWheelchairAccessible, count: countForFilter(i => i.isWheelchairAccessible || tagMatchesItem(i, 'step-free')), toggle: () => updateFilter('isWheelchairAccessible', !filters.isWheelchairAccessible) },
      { id: 'isVerified', label: 'Verified Experience', icon: '🛡️', isFlag: true, active: !!filters.isVerified, count: countForFilter(i => i.isVerified === true), toggle: () => updateFilter('isVerified', !filters.isVerified) },
      { id: 'day-pass', label: 'Day Pass Available', icon: '🎟️', isFlag: false, active: (filters.vibes || []).includes('day-pass'), count: countForFilter(i => tagMatchesItem(i, 'day-pass')), toggle: () => toggleVibe('day-pass') },
    ];
  }, [normalizedCategory, filters, items]);

  // ── Column 2: Property Type / Specialties & Vibe ──
  const vibeOptions = useMemo(() => {
    if (isSleep) {
      return [
        { id: 'riad', label: 'Heritage Riad', icon: '🏺' },
        { id: 'hotel', label: 'Boutique Hotel', icon: '🏨' },
        { id: 'desert-camp', label: 'Desert Escape', icon: '🏜️' },
        { id: 'kasbah', label: 'Ancient Kasbah', icon: '🏰' },
        { id: 'coastal', label: 'Coastal & Beach', icon: '🌊' },
        { id: 'mountain', label: 'Mountain Lodge', icon: '⛰️' },
        { id: 'luxury', label: 'Luxury & 5-Star', icon: '✨' },
        { id: 'off-the-beaten-path', label: 'Hidden Gem', icon: '🗺️' },
      ];
    }
    if (isEat) {
      return [
        { id: 'traditional', label: 'Traditional Moroccan', icon: '🍲' },
        { id: 'street-food', label: 'Street Food & Night Stalls', icon: '🍢' },
        { id: 'fine-dining', label: 'Fine Dining Palace', icon: '✨' },
        { id: 'seafood', label: 'Fresh Catch Seafood', icon: '🐟' },
        { id: 'cafe-pastry', label: 'Café Terrace & Pastries', icon: '☕' },
        { id: 'hole-in-wall', label: 'Hidden Local Gem', icon: '🏠' },
        { id: 'authentic', label: 'Authentic Neighborhood Spot', icon: '🧿' },
        { id: 'sunset-view', label: 'Panoramic Views', icon: '🌅' },
      ];
    }
    if (isShopping) {
      return [
        { id: 'ceramics', label: 'Ceramics & Zellij Tiles', icon: '🏺' },
        { id: 'leather', label: 'Leather Babouches & Bags', icon: '👞' },
        { id: 'textiles', label: 'Handwoven Berber Rugs', icon: '🧶' },
        { id: 'spices', label: 'Spices & Pure Argan', icon: '🌶️' },
        { id: 'souvenirs', label: 'Souks & Souvenirs', icon: '🛍️' },
        { id: 'artisanal', label: 'Artisan Workshop', icon: '🎨' },
      ];
    }
    // Things to do
    return [
      { id: 'culture', label: 'Culture & Heritage', icon: '🏛️' },
      { id: 'desert-adventure', label: 'Dunes & Camel Safari', icon: '🐪' },
      { id: 'water-sports', label: 'Surf & Watersports', icon: '🏄' },
      { id: 'wellness', label: 'Hammam & Spa Rituals', icon: '🧖' },
      { id: 'culinary', label: 'Cooking Class & Tasting', icon: '🍲' },
      { id: 'hiking', label: 'Mountain & Gorge Treks', icon: '🥾' },
      { id: 'photography', label: 'Scenic Photo Vantage', icon: '📸' },
      { id: 'adventure-sports', label: 'Adrenaline & Quad', icon: '🧗' },
    ];
  }, [normalizedCategory]);

  const activeVibes = filters.vibes || [];

  const handleResetAll = () => {
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
  };

  return (
    <div 
      className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-[999] flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-5xl lg:max-w-6xl rounded-[28px] sm:rounded-[36px] shadow-2xl overflow-hidden flex flex-col max-h-[88vh] border border-stone-200/80"
      >
        {/* ── Modal Header (Pinned) ── */}
        <div className="px-6 py-4 sm:px-8 sm:py-5 border-b border-stone-100 flex justify-between items-center bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FAF3EA] border border-[#EADBCE] rounded-2xl flex items-center justify-center text-[#C2613C] shadow-2xs">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-display font-bold text-stone-900 leading-none">Personalize Results</h2>
                <span className="hidden sm:inline-block bg-[#FAF3EA] text-[#C2613C] border border-[#EADBCE] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  16:9 Widescreen
                </span>
              </div>
              <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mt-1">
                Refine {normalizedCategory} selection · <span className="text-[#C2613C]">{liveMatchCount} places match</span>
              </p>
            </div>
          </div>

          <button 
            onClick={onClose} 
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white border border-stone-200 rounded-xl flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-400 transition-all shadow-xs cursor-pointer"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── 3-Column Scrollable Body ── */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-1 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* ── COLUMN 1: Essential Amenities / Must-Haves ── */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                <Zap className="w-4 h-4 text-[#C2613C]" />
                <h3 className="text-xs font-black uppercase tracking-wider text-stone-800">Must-Have Amenities</h3>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {amenityOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={opt.toggle}
                    className={cn(
                      "w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between border cursor-pointer text-left",
                      opt.active
                        ? "bg-[#FAF3EA] text-stone-900 border-[#C2613C] shadow-2xs font-bold"
                        : "bg-white text-stone-600 border-stone-200/80 hover:border-stone-300 hover:bg-[#FAF8F5]"
                    )}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-base shrink-0">{opt.icon}</span>
                      <span className="truncate">{opt.label}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className={cn(
                        "text-[10px] font-bold px-1.5 py-0.5 rounded-md",
                        opt.active ? "bg-[#C2613C] text-white" : "bg-stone-100 text-stone-400"
                      )}>
                        {opt.count}
                      </span>
                      {opt.active && <Check className="w-3.5 h-3.5 text-[#C2613C] stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* ── COLUMN 2: Property Type & Atmosphere ── */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                <Layers className="w-4 h-4 text-[#C9A84C]" />
                <h3 className="text-xs font-black uppercase tracking-wider text-stone-800">Property Type & Vibe</h3>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {vibeOptions.map((vibe) => {
                  const isActive = activeVibes.includes(vibe.id);
                  const count = countForFilter(i => tagMatchesItem(i, vibe.id));
                  return (
                    <button
                      key={vibe.id}
                      onClick={() => toggleVibe(vibe.id)}
                      className={cn(
                        "w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between border cursor-pointer text-left",
                        isActive
                          ? "bg-[#FFF9EA] text-stone-900 border-[#C9A84C] shadow-2xs font-bold"
                          : "bg-white text-stone-600 border-stone-200/80 hover:border-stone-300 hover:bg-[#FAF8F5]"
                      )}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-base shrink-0">{vibe.icon}</span>
                        <span className="truncate">{vibe.label}</span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        <span className={cn(
                          "text-[10px] font-bold px-1.5 py-0.5 rounded-md",
                          isActive ? "bg-[#C9A84C] text-white" : "bg-stone-100 text-stone-400"
                        )}>
                          {count}
                        </span>
                        {isActive && <Check className="w-3.5 h-3.5 text-[#C9A84C] stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── COLUMN 3: Budget, Style & Quality ── */}
            <div className="space-y-5">
              
              {/* Budget Tier */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 pb-1 border-b border-stone-100">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-stone-800">Budget Tier</h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'price-free', label: 'Free Access', icon: '🎟️' },
                    { id: 'price-budget', label: 'Budget ($)', icon: '💵' },
                    { id: 'price-mid', label: 'Balanced ($$)', icon: '💳' },
                    { id: 'price-premium', label: 'Luxury ($$$)', icon: '💎' },
                  ].map((p) => {
                    const isSelected = activeVibes.includes(p.id);
                    const count = countForFilter(i => tagMatchesItem(i, p.id));
                    return (
                      <button
                        key={p.id}
                        onClick={() => toggleVibe(p.id)}
                        className={cn(
                          "px-3 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center justify-between gap-1 cursor-pointer",
                          isSelected
                            ? "bg-emerald-50 text-emerald-900 border-emerald-500 font-bold shadow-2xs"
                            : "bg-white text-stone-600 border-stone-200/80 hover:bg-[#FAF8F5]"
                        )}
                      >
                        <span className="truncate">{p.icon} {p.label}</span>
                        <span className="text-[9px] text-stone-400">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Travel Style Archetype */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 pb-1 border-b border-stone-100">
                  <User className="w-4 h-4 text-purple-600" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-stone-800">Travel Style</h3>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  {Object.entries(ARCHETYPE_METADATA).map(([id, meta]) => {
                    const isSelected = archetype === id;
                    const icons: Record<string, string> = {
                      culture: '🏛️',
                      adventure: '🧗',
                      foodie: '🍲',
                      relaxed: '😌'
                    };
                    return (
                      <button
                        key={id}
                        onClick={() => setArchetype(isSelected ? (null as any) : (id as any))}
                        className={cn(
                          "px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all border flex items-center justify-between cursor-pointer",
                          isSelected
                            ? "bg-purple-50 text-purple-900 border-purple-500 font-bold"
                            : "bg-white text-stone-600 border-stone-200/80 hover:bg-[#FAF8F5]"
                        )}
                      >
                        <span className="truncate">{icons[id] || '✨'} {meta.name}</span>
                        {isSelected && <Check className="w-3 h-3 text-purple-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Minimum Google Rating */}
              <div className="space-y-2.5 bg-[#FAF8F5] p-3.5 rounded-2xl border border-stone-200/80">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-stone-800">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    Minimum Rating
                  </span>
                  <span className="text-sm font-display font-bold text-stone-900">
                    {filters.rating > 0 ? `${filters.rating}★ & above` : 'Any Rating'}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1 pt-1">
                  {[0, 4.0, 4.5, 4.8].map((score) => (
                    <button
                      key={score}
                      onClick={() => updateFilter('rating', score === filters.rating ? 0 : score)}
                      className={cn(
                        "py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer text-center",
                        (filters.rating || 0) === score
                          ? "bg-[#C9A84C] text-white border-[#C9A84C] shadow-xs"
                          : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                      )}
                    >
                      {score === 0 ? 'Any' : `${score}★+`}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ── Modal Footer (Pinned) ── */}
        <div className="px-6 py-4 sm:px-8 sm:py-4.5 bg-[#FAF8F5] border-t border-stone-100 flex items-center justify-between gap-4">
          <button
            onClick={handleResetAll}
            className="px-4 py-2.5 bg-white border border-stone-200 text-stone-500 rounded-xl font-bold uppercase tracking-wider text-xs hover:text-stone-900 hover:border-stone-400 transition-all cursor-pointer shadow-2xs"
          >
            Reset All
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 sm:px-8 sm:py-3 bg-stone-900 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-[#C2613C] transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Show {liveMatchCount} Matches</span>
            <span>→</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
