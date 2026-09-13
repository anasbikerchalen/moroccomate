// src/components/finder/DetailView.tsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Star, MapPin, Clock, Users, ExternalLink, ArrowLeft, 
  Wifi, Wind, Waves, Coffee, CheckCircle2, Tag, Lightbulb,
  ChevronRight, Heart, Car
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { handleImageError } from '../../utils/imageUtils';
import { resolveListingImages, handleListingImageError } from '../../utils/imageResolver';
import { useExploreStore } from '../../state/exploreStore';
import EatDetailView from './EatDetailView';
import SleepDetailView from './SleepDetailView';
import ShopDetailView from './ShopDetailView';
import ActivityDetailView from './ActivityDetailView';
import SavvyBadge from '../savvy/SavvyBadge';

interface DetailViewProps {
  item: any;
  onBack: () => void;
}

const LIFESTYLE_LABEL: Record<string, string> = {
  lean: 'Budget-Friendly',
  balanced: 'Mid-Range',
  premium: 'Luxury',
};

const LIFESTYLE_COLOR: Record<string, string> = {
  lean: 'bg-green-100 text-green-800',
  balanced: 'bg-blue-100 text-blue-800',
  premium: 'bg-amber-100 text-amber-800',
};

const BADGE_COLOR: Record<string, string> = {
  'hidden-gem': 'bg-purple-100 text-purple-800',
  'local-favorite': 'bg-teal-100 text-teal-800',
  splurge: 'bg-amber-100 text-amber-800',
  'tourist-trap': 'bg-red-100 text-red-700',
  local: 'bg-stone-100 text-stone-700',
};

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn('w-4 h-4', star <= Math.round(rating) ? 'fill-[#C9A84C] text-[#C9A84C]' : 'fill-stone-200 text-stone-200')}
        />
      ))}
      <span className="text-sm font-bold text-stone-700 ml-1">{rating?.toFixed(1)}</span>
    </div>
  );
}

export default function DetailView({ item, onBack }: DetailViewProps) {
  const navigate = useNavigate();
  const { omitGoogleImage } = useExploreStore();

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-stone-400">
        <p className="text-lg">No listing selected.</p>
        <button onClick={onBack} className="mt-4 text-[#C9A84C] font-bold flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    );
  }

  // Check if it is an eat listing
  const isEat = item.id?.startsWith('e-') || item.id?.includes('eat') || item.mealTypes?.length > 0 || item.foodStyles?.length > 0;
  if (isEat) {
    return <EatDetailView item={item} onBack={onBack} />;
  }

  // Check if it is a sleep listing
  const isSleep = item.id?.startsWith('s-') || item.pricePerNight !== undefined || ['riad', 'hotel', 'villa', 'hostel', 'apartment'].includes(item.type);
  if (isSleep) {
    return <SleepDetailView item={item} onBack={onBack} />;
  }

  // Check if it is a shop listing
  const isShop = item.id?.startsWith('sh-') || !!item.productCategories || !!item.category;
  if (isShop) {
    return <ShopDetailView item={item} onBack={onBack} />;
  }

  // Check if it is an activity or thing-to-do listing
  const isActivity = item.id?.startsWith('t-') || item.id?.startsWith('a-') || item.id?.startsWith('v-') || item.id?.includes('ruins') || item.id?.includes('cable') || item.id?.includes('souk') || !!item.durationMinutes || !!item.energyLevel || item.entryPrice !== undefined;
  if (isActivity) {
    return <ActivityDetailView item={item} onBack={onBack} />;
  }

  const {
    name, title, description, images = [], rating, googleRating, reviewCount,
    lifestyle, neighborhood, city, tip, badge, vibeTags = [], tags = [],
    amenities = [], pricePerNight, pricePerPerson, price, googleMapsUrl,
    groupTypes = [], mealTypes = [], hasPool, hasAC, hasWiFi, hasBreakfast,
    hasRooftop, hasEnglishStaff, isVegetarianFriendly, isHalal, isKidFriendly,
    durationMinutes, hasEnglishGuide, type, bestDishes = [],
  } = item;

  const displayName = name || title || 'Unnamed Listing';
  const displayRating = googleRating || rating || 0;

  const resolvedImage = resolveListingImages({
    id: item?.id,
    googlePlaceId: item?.googlePlaceId,
    images: item?.images,
    nonCopyrightImage: item?.nonCopyrightImage,
    category: item?.category || 'things',
    omitGooglePlaceApi: omitGoogleImage
  });

  const primaryImage = resolvedImage.url;
  const finalLifestyle = Array.isArray(lifestyle) ? lifestyle[0] : lifestyle;
  const displayPrice = pricePerNight 
    ? `${pricePerNight} MAD/night` 
    : pricePerPerson 
      ? `${pricePerPerson} MAD/person` 
      : price 
        ? `${price} MAD` 
        : null;

  // Compile feature pills from booleans
  const featurePills: string[] = [
    hasPool && '🏊 Pool',
    hasAC && '❄️ AC',
    hasWiFi && '📶 WiFi',
    hasBreakfast && '🍳 Breakfast',
    hasRooftop && '🌅 Rooftop',
    hasEnglishStaff && '🗣️ English Staff',
    hasEnglishGuide && '🗣️ English Guide',
    isVegetarianFriendly && '🥗 Vegetarian',
    isHalal && '☪️ Halal',
    isKidFriendly && '👶 Kid-Friendly',
  ].filter(Boolean) as string[];

  const mealTypePills = Array.isArray(mealTypes) ? mealTypes : [];
  const groupPills = Array.isArray(groupTypes) ? groupTypes : [];
  const allTags = [...new Set([...(tags || []), ...(vibeTags || [])])];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-stone-500 hover:text-stone-900 font-bold text-sm uppercase tracking-widest transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to results
      </button>

      {/* Hero image */}
      {primaryImage && (
        <div className="relative w-full h-72 md:h-96 rounded-[32px] overflow-hidden mb-8 shadow-2xl">
          <img
            src={primaryImage}
            alt={displayName}
            className="w-full h-full object-cover"
            data-fallbacks={JSON.stringify(resolvedImage.fallbackUrls)}
            onError={(e) => handleListingImageError(e, resolvedImage.fallbackUrls, item?.category || 'things')}
            referrerPolicy="no-referrer"
          />
          {/* Image gallery row */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-4 flex gap-2">
              {images.slice(1, 4).map((img: string, i: number) => (
                <div key={i} className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/60 shadow-md">
                  <img src={img} alt="" className="w-full h-full object-cover" onError={handleImageError} referrerPolicy="no-referrer" />
                </div>
              ))}
              {images.length > 4 && (
                <div className="w-16 h-16 rounded-2xl bg-black/50 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center text-white font-bold text-sm">
                  +{images.length - 4}
                </div>
              )}
            </div>
          )}
          {/* Lifestyle badge on image */}
          {finalLifestyle && (
            <div className={cn(
              'absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest',
              LIFESTYLE_COLOR[finalLifestyle] || 'bg-stone-100 text-stone-700'
            )}>
              {LIFESTYLE_LABEL[finalLifestyle] || finalLifestyle}
            </div>
          )}
          {badge && (
            <div className={cn(
              'absolute top-4 right-4 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest',
              BADGE_COLOR[badge] || 'bg-stone-100 text-stone-700'
            )}>
              {badge.replace('-', ' ')}
            </div>
          )}
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
          <div>
            <h1 className="font-display text-4xl text-stone-900 tracking-tight leading-tight mb-2">
              {displayName}
            </h1>
            <div className="flex items-center gap-3 flex-wrap text-sm text-stone-500">
              {neighborhood && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
                  {neighborhood}
                  {city && `, ${city.charAt(0).toUpperCase() + city.slice(1)}`}
                </span>
              )}
              {type && (
                <span className="flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5" />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              )}
              {durationMinutes && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  ~{durationMinutes >= 60 ? `${Math.round(durationMinutes / 60)}h` : `${durationMinutes}min`}
                </span>
              )}
              {item.id && (
                <div 
                  onClick={() => navigate(`/savvy/${city || 'marrakech'}/activity/${item.id}`)}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <SavvyBadge placeId={item.id} size="sm" />
                </div>
              )}
            </div>
          </div>
          <div className="text-right shrink-0">
            {displayRating > 0 && <RatingStars rating={displayRating} />}
            {reviewCount && (
              <p className="text-xs text-stone-400 mt-1">{reviewCount.toLocaleString()} reviews</p>
            )}
            {displayPrice && (
              <p className="text-2xl font-display text-stone-900 mt-2">{displayPrice}</p>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="bg-white border border-stone-100 rounded-[32px] p-8 mb-6">
          <p className="text-stone-600 text-lg leading-relaxed">{description}</p>
        </div>
      )}

      {/* Best Dishes (eat) */}
      {bestDishes.length > 0 && (
        <div className="bg-amber-50 border border-amber-100 rounded-[32px] p-6 mb-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-amber-700 mb-4">Must Try Dishes</h3>
          <div className="flex flex-wrap gap-2">
            {bestDishes.map((dish: string, i: number) => (
              <span key={i} className="px-3 py-1.5 bg-white border border-amber-200 rounded-full text-sm font-medium text-amber-900">
                🍽️ {dish}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Meal Types */}
      {mealTypePills.length > 0 && (
        <div className="mb-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-3">Served For</h3>
          <div className="flex flex-wrap gap-2">
            {mealTypePills.map((m: string, i: number) => (
              <span key={i} className="px-3 py-1.5 bg-stone-100 text-stone-700 rounded-full text-xs font-bold capitalize">
                {m}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Features / Amenities */}
      {(featurePills.length > 0 || amenities.length > 0) && (
        <div className="bg-white border border-stone-100 rounded-[32px] p-8 mb-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-4">Features & Amenities</h3>
          <div className="flex flex-wrap gap-2">
            {featurePills.map((f, i) => (
              <span key={i} className="px-3 py-2 bg-stone-50 border border-stone-100 text-stone-700 rounded-2xl text-sm font-medium">
                {f}
              </span>
            ))}
            {amenities.map((a: string, i: number) => (
              <span key={i} className="flex items-center gap-1 px-3 py-2 bg-stone-50 border border-stone-100 text-stone-700 rounded-2xl text-sm font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" /> {a}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tags / Vibes */}
      {allTags.length > 0 && (
        <div className="mb-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2">
            <Tag className="w-3 h-3" /> Vibes & Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag: string, i: number) => (
              <span key={i} className="px-3 py-1.5 bg-stone-900 text-stone-100 rounded-full text-xs font-bold tracking-wide">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Who is it for */}
      {groupPills.length > 0 && (
        <div className="mb-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2">
            <Users className="w-3 h-3" /> Great For
          </h3>
          <div className="flex flex-wrap gap-2">
            {groupPills.map((g: string, i: number) => (
              <span key={i} className="px-3 py-1.5 bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#96700A] rounded-full text-xs font-bold capitalize">
                {g.replace('-', ' ')}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Insider Tip */}
      {tip && (
        <div className="bg-stone-900 text-white rounded-[32px] p-8 mb-6 flex gap-5">
          <div className="w-10 h-10 bg-[#C9A84C] rounded-2xl flex items-center justify-center shrink-0">
            <Lightbulb className="w-5 h-5 text-stone-900" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-2">Insider Tip</p>
            <p className="text-stone-300 leading-relaxed">{tip}</p>
          </div>
        </div>
      )}

      {/* Action Buttons: Transport Options & Google Maps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <button
          onClick={() => {
            navigate(`/transport/go?city=${encodeURIComponent(city || 'marrakech')}&dest=${encodeURIComponent(displayName)}`);
          }}
          className="w-full flex items-center justify-between bg-stone-900 hover:bg-[#C9A84C] text-white rounded-[32px] p-6 transition-all shadow-xl group cursor-pointer"
        >
          <div className="text-left">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] group-hover:text-stone-900 mb-1 transition-colors">Transport Hub</p>
            <p className="text-xl font-display">Get Transport Options</p>
          </div>
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-stone-900/20 transition-all shrink-0">
            <Car className="w-5 h-5 text-[#C9A84C] group-hover:text-stone-900 transition-colors" />
          </div>
        </button>

        {googleMapsUrl && (
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between bg-[#C9A84C] hover:bg-stone-900 text-white rounded-[32px] p-6 transition-all shadow-xl group cursor-pointer"
          >
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/70 mb-1">External Map</p>
              <p className="text-xl font-display">Google Maps</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all shrink-0">
              <ExternalLink className="w-5 h-5" />
            </div>
          </a>
        )}
      </div>
    </motion.div>
  );
}
