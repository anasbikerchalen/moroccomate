import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CheckCircle2, Shield, Heart, Star, Sparkles, Navigation } from 'lucide-react';
import { cn } from '../../../utils/cn';
import SavvyBadge from '../../savvy/SavvyBadge';
import { handleListingImageError } from '../../../utils/imageResolver';

interface SleepHeroProps {
  name: string;
  type: string;
  neighborhood: string;
  locationSummary?: string;
  availabilityText?: string;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  images: string[];
  vibeTags: string[];
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  hiddenFeesNotice?: string;
  placeId?: string;
}

export default function SleepHero({
  name,
  type,
  neighborhood,
  locationSummary,
  availabilityText,
  rating,
  reviewCount,
  pricePerNight,
  images,
  vibeTags,
  isBookmarked,
  onToggleBookmark,
  hiddenFeesNotice,
  placeId
}: SleepHeroProps) {
  return (
    <div className="space-y-6">
      <div className="relative w-full h-[320px] md:h-[400px] rounded-[40px] overflow-hidden bg-stone-100 shadow-xl border border-stone-200/50">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => handleListingImageError(e, undefined, 'sleep')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />
        
        <div className="absolute top-6 left-6 flex gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#10b478]/90 text-white shadow-sm backdrop-blur-md border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5" /> {availabilityText || "Available Tonight"}
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#3c78d8]/90 text-white shadow-sm backdrop-blur-md border border-white/10">
            <Shield className="w-3.5 h-3.5" /> Verified Listing
          </span>
        </div>

        <button
          onClick={onToggleBookmark}
          className={cn(
            "absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all bg-white/90 backdrop-blur-md shadow-lg border border-white/20 active:scale-95 hover:scale-105",
            isBookmarked ? "text-red-500" : "text-stone-600 hover:text-red-500"
          )}
        >
          <Heart className={cn("w-6 h-6", isBookmarked && "fill-current")} />
        </button>

        <div className="absolute bottom-8 left-8 right-8">
           <div className="flex flex-wrap gap-2 mb-3">
             <span className="text-[10px] px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 font-black uppercase tracking-widest">
               {type}
             </span>
             {vibeTags.slice(0, 2).map((vibe, idx) => (
                <span key={idx} className="text-[10px] px-3 py-1 rounded-full bg-black/30 text-white backdrop-blur-md border border-white/10 font-bold uppercase tracking-wider">
                  {vibe}
                </span>
             ))}
             {locationSummary && (
                <span className="text-[10px] px-3 py-1 rounded-full bg-amber-500/80 text-white backdrop-blur-md border border-white/20 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Navigation className="w-2.5 h-2.5" /> {locationSummary}
                </span>
             )}
           </div>
           <h1 className="text-4xl md:text-5xl font-display text-white leading-tight font-black drop-shadow-sm">{name}</h1>
           <div className="flex items-center gap-2 mt-4 text-white/90">
             <MapPin className="w-4 h-4 text-amber-400" />
             <span className="text-sm font-bold tracking-tight">{neighborhood}</span>
           </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-6 py-2 px-4 rounded-[32px] bg-white border border-stone-100 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-amber-600">
            <div className="flex items-center">
              {[1,2,3,4,5].map(s => <Star key={s} className={cn("w-3.5 h-3.5", s <= Math.round(rating) ? "fill-current" : "text-stone-200")} />)}
            </div>
            <span className="text-base font-black">{rating}</span>
            <span className="text-stone-400 text-sm font-medium">({reviewCount} reviews)</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-widest border border-emerald-100">
            <Sparkles className="w-3.5 h-3.5" /> High Demand
          </div>
          {placeId && (
            <div className="flex items-center">
              <SavvyBadge placeId={placeId} size="sm" />
            </div>
          )}
        </div>
        
        <div className="text-right">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-display font-black text-stone-900">{pricePerNight} MAD</span>
            <span className="text-xs font-bold text-stone-400 uppercase tracking-tighter">/ night</span>
          </div>
          <p className={cn(
            "text-[10px] font-bold uppercase mt-0.5",
            hiddenFeesNotice ? "text-amber-600" : "text-emerald-600"
          )}>
            {hiddenFeesNotice || "Breakfast & Taxes Included"}
          </p>
        </div>
      </div>
    </div>
  );
}
