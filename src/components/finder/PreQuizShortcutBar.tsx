import React from 'react';
import { 
  Zap, 
  Palmtree, 
  Waves, 
  Landmark, 
  Building2, 
  Backpack, 
  Fish, 
  UtensilsCrossed, 
  Store, 
  Coffee, 
  Sunset, 
  Mountain, 
  Sparkles, 
  Users, 
  ShoppingBag, 
  Leaf, 
  Shirt, 
  Gem, 
  Compass,
  Tent,
  Camera
} from 'lucide-react';
import type { CityCategoryPick } from '../../data/explore/cityCategoryPicks';

interface PreQuizShortcutBarProps {
  picks: CityCategoryPick[];
  cityId: string;
  categoryLabel?: string;
  onSelectCategory: (pick: CityCategoryPick) => void;
}

const renderPickIcon = (pick: CityCategoryPick) => {
  const id = (pick.id || '').toLowerCase();
  const label = (pick.label || '').toLowerCase();
  const text = `${id} ${label}`;

  if (text.includes('surf') || text.includes('water sport')) return <Waves className="w-3.5 h-3.5" />;
  if (text.includes('resort') || text.includes('beach')) return <Palmtree className="w-3.5 h-3.5" />;
  if (text.includes('desert') || text.includes('camp') || text.includes('glamping')) return <Tent className="w-3.5 h-3.5" />;
  if (text.includes('riad') || text.includes('palace') || text.includes('kasbah') || text.includes('heritage') || text.includes('landmark') || text.includes('sightseeing')) return <Landmark className="w-3.5 h-3.5" />;
  if (text.includes('apartment') || text.includes('rental') || text.includes('serviced')) return <Building2 className="w-3.5 h-3.5" />;
  if (text.includes('hostel') || text.includes('budget') || text.includes('backpacker')) return <Backpack className="w-3.5 h-3.5" />;
  if (text.includes('seafood') || text.includes('fish') || text.includes('marina')) return <Fish className="w-3.5 h-3.5" />;
  if (text.includes('street food') || text.includes('stall')) return <Store className="w-3.5 h-3.5" />;
  if (text.includes('cafe') || text.includes('brunch') || text.includes('coffee') || text.includes('tea')) return <Coffee className="w-3.5 h-3.5" />;
  if (text.includes('lounge') || text.includes('sunset') || text.includes('promenade') || text.includes('drinks')) return <Sunset className="w-3.5 h-3.5" />;
  if (text.includes('traditional') || text.includes('cuisine') || text.includes('dining') || text.includes('gastronomy') || text.includes('tagine')) return <UtensilsCrossed className="w-3.5 h-3.5" />;
  if (text.includes('hike') || text.includes('mountain') || text.includes('trek')) return <Mountain className="w-3.5 h-3.5" />;
  if (text.includes('wellness') || text.includes('hammam') || text.includes('spa')) return <Sparkles className="w-3.5 h-3.5" />;
  if (text.includes('family') || text.includes('wildlife')) return <Users className="w-3.5 h-3.5" />;
  if (text.includes('souk') || text.includes('market') || text.includes('carpet')) return <ShoppingBag className="w-3.5 h-3.5" />;
  if (text.includes('argan') || text.includes('cooperative') || text.includes('herb') || text.includes('oil')) return <Leaf className="w-3.5 h-3.5" />;
  if (text.includes('mall') || text.includes('fashion') || text.includes('clothing')) return <Shirt className="w-3.5 h-3.5" />;
  if (text.includes('boutique') || text.includes('artisan') || text.includes('jewelry') || text.includes('gallery') || text.includes('silver')) return <Gem className="w-3.5 h-3.5" />;
  if (text.includes('photo') || text.includes('blue alley')) return <Camera className="w-3.5 h-3.5" />;

  return <Compass className="w-3.5 h-3.5" />;
};

export default function PreQuizShortcutBar({
  picks,
  onSelectCategory,
}: PreQuizShortcutBarProps) {
  if (!picks || picks.length === 0) return null;

  return (
    <div className="space-y-1.5 mb-2">
      {/* Quiet top kicker without distracting promotional words */}
      <div className="flex items-center gap-1.5 px-1">
        <Zap className="w-3.5 h-3.5 text-[#C9A84C]" />
        <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">
          In a hurry? Quick shortcuts
        </span>
      </div>

      {/* Flexible 5-pill row fitting all 5 pills on screen simultaneously without cut-off */}
      <div className="flex items-center gap-1.5 sm:gap-2 w-full overflow-x-auto sm:overflow-visible pb-1 sm:pb-0 scrollbar-none">
        {picks.map((pick) => (
          <button
            key={pick.id}
            onClick={() => onSelectCategory(pick)}
            type="button"
            className="group flex-1 min-w-[105px] sm:min-w-0 flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full border border-stone-200/80 bg-white hover:border-[#C86D51]/50 hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer text-left shadow-2xs shrink-0 sm:shrink"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FAF3EA] flex items-center justify-center text-[#C86D51] shrink-0 group-hover:bg-[#C86D51] group-hover:text-white transition-colors">
              {renderPickIcon(pick)}
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-stone-800 group-hover:text-[#C86D51] transition-colors truncate">
              {pick.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}