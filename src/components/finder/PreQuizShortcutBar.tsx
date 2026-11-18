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
import { useTranslation } from 'react-i18next';
import { useAppLanguage } from '../../utils/localeRouting';
import { translateCityPickLabel } from '../../data/explore/quizTranslations';

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
  const { t } = useTranslation();
  const lang = useAppLanguage();

  if (!picks || picks.length === 0) return null;

  return (
    <div className="space-y-1.5 mb-2">
      {/* Quiet top kicker without distracting promotional words */}
      <div className="flex items-center gap-1.5 px-1">
        <Zap className="w-3.5 h-3.5 text-[#C9A84C]" />
        <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">
          {t('quiz.quickShortcutsTitle')}
        </span>
      </div>

      {/* Responsive grid on mobile (zero mid-word clipping) -> balanced 5-pill row on sm+ */}
      <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full">
        {picks.map((pick, idx) => (
          <button
            key={pick.id}
            onClick={() => onSelectCategory(pick)}
            type="button"
            className={`group min-h-[44px] sm:flex-1 sm:min-w-0 flex items-center justify-start gap-2 px-3 py-2 rounded-2xl sm:rounded-full border border-stone-200/80 bg-white hover:border-[#C86D51]/50 hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer text-start shadow-2xs ${
              idx === picks.length - 1 && picks.length % 2 === 1 ? 'col-span-2 sm:col-span-1' : ''
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-[#FAF3EA] flex items-center justify-center text-[#C86D51] shrink-0 group-hover:bg-[#C86D51] group-hover:text-white transition-colors">
              {renderPickIcon(pick)}
            </div>
            <span className="text-xs font-bold text-stone-800 group-hover:text-[#C86D51] transition-colors leading-tight sm:truncate">
              {translateCityPickLabel(pick.label, lang)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}