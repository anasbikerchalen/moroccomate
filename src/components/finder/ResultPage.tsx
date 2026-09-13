import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExploreStore } from '../../state/exploreStore';
import { useParameterStore } from '../../state/parameterStore';
import { useSavedStore } from '../../state/savedStore';
import { usePlanStore } from '../../state/planStore';
import { getListings } from '../../listings';
import { 
  Star, 
  SlidersHorizontal, 
  Heart, 
  Compass, 
  Sparkles, 
  MapPin, 
  Search, 
  X, 
  ChevronDown, 
  ArrowLeft, 
  User, 
  Calendar,
  LayoutGrid,
  Pencil,
  Bookmark,
  ChevronRight,
  Clock,
  Utensils,
  Home,
  ShoppingBag,
  Check,
  Flame,
  Store,
  Landmark,
  Wallet,
  Map as MapIcon,
  ExternalLink
} from 'lucide-react';
import { getShopStatus } from '../../utils/timeEngine';
import FilterPanel from './modals/FilterPanel';
import { ARCHETYPE_METADATA } from '../../data/explore/archetypes';
import { getTagForOptionId } from '../../data/explore/questions';
import { cn } from '../../utils/cn';
import { useNavigate, useLocation } from 'react-router-dom';
import { TAG_REGISTRY } from '../../listings/things/tags';
import { cityMap } from '../../data/cities';
import LocationPicker from './LocationPicker';
import FilterChipBar from './FilterChipBar';
import { handleImageError } from '../../utils/imageUtils';
import { resolveListingImages, handleListingImageError } from '../../utils/imageResolver';
import { getAreasByCityBase } from '../../data/tourismAreas';
import foodHeroBg from '../../assets/images/finder/category_food_matte_1786297062095.jpg';
import shopHeroBg from '../../assets/images/finder/category_shop_matte_1786297097622.jpg';
import stayHeroBg from '../../assets/images/finder/category_stays_matte_1786297074546.jpg';
import thingsHeroBg from '../../assets/images/finder/category_things_matte_1786297086778.jpg';
import defaultHeroBg from '../../assets/images/finder/finder_hero_matte_1786297047661.jpg';

// Popular Section Images
import eat_quiz_traditional from '../../assets/images/quizzes/eat/eat_quiz_traditional_1786297388220.jpg';
import eat_quiz_rooftop from '../../assets/images/quizzes/eat/eat_quiz_rooftop.jpg';
import eat_quiz_street_food from '../../assets/images/quizzes/eat/eat_quiz_street_food_1786297402997.jpg';
import eat_quiz_fine_dining from '../../assets/images/quizzes/eat/eat_quiz_fine_dining_1786297418437.jpg';
import sleep_quiz_riad from '../../assets/images/quizzes/sleep/sleep_quiz_riad.jpg';
import sleep_quiz_hotel from '../../assets/images/quizzes/sleep/sleep_quiz_hotel.jpg';
import sleep_quiz_budget from '../../assets/images/quizzes/sleep/sleep_quiz_budget.jpg';
import sleep_quiz_quiet from '../../assets/images/quizzes/sleep/sleep_quiz_quiet.jpg';
import shop_quiz_souvenirs from '../../assets/images/quizzes/shop/shop_quiz_souvenirs_1787154837793.jpg';
import shop_quiz_leather from '../../assets/images/quizzes/shop/shop_quiz_leather_1787154876149.jpg';
import shop_quiz_ceramics from '../../assets/images/quizzes/shop/shop_quiz_ceramics_1787154903745.jpg';
import quiz_setting_medina from '../../assets/images/quizzes/shared/quiz_setting_medina_1786376080492.jpg';
import things_quiz_history from '../../assets/images/quizzes/things/things_quiz_history_1786305732379.jpg';
import quiz_relaxed from '../../assets/images/quizzes/shared/quiz_relaxed_1786203315431.jpg';
import things_quiz_culture from '../../assets/images/quizzes/things/things_quiz_culture.jpg';

const CATEGORY_OPTIONS = [
  { id: null, label: 'All Categories', icon: LayoutGrid },
  { id: 'things-to-do', label: 'Things to Do', icon: Sparkles },
  { id: 'food', label: 'Food & Dining', icon: Utensils },
  { id: 'sleep', label: 'Stays & Riads', icon: Home },
  { id: 'shopping', label: 'Souks & Shops', icon: ShoppingBag }
];

const getCategoryLabel = (cat: string | null) => {
  if (!cat) return 'All Categories';
  if (cat === 'food' || cat === 'eat') return 'Food & Dining';
  if (cat === 'sleep') return 'Stays & Riads';
  if (cat === 'shopping') return 'Souks & Shops';
  if (cat === 'things-to-do' || cat === 'things') return 'Things to Do';
  return cat.replace(/-/g, ' ');
};

const getHeroImage = (cat: string | null) => {
  if (cat === 'food' || cat === 'eat') return foodHeroBg;
  if (cat === 'sleep') return stayHeroBg;
  if (cat === 'shopping') return shopHeroBg;
  if (cat === 'things-to-do' || cat === 'things') return thingsHeroBg;
  return defaultHeroBg;
};

const POPULAR_SUGGESTIONS_MAP: Record<string, Record<string, { label: string, tag: string, image: string, icon: any, filterType: string, cat?: string }[]>> = {
  marrakech: {
    'food': [
      { label: 'Rooftop Dining', tag: 'rooftop', image: eat_quiz_rooftop, icon: MapIcon, filterType: 'vibes' },
      { label: 'Jemaa el-Fna Street Food', tag: 'street_food', image: eat_quiz_street_food, icon: Flame, filterType: 'vibes' },
      { label: 'Traditional Tagine', tag: 'authentic', image: eat_quiz_traditional, icon: Utensils, filterType: 'vibes' },
      { label: 'Fine Dining (Gueliz)', tag: 'fine_dining', image: eat_quiz_fine_dining, icon: Star, filterType: 'vibes' },
    ],
    'sleep': [
      { label: 'Medina Riads', tag: 'riad', image: sleep_quiz_riad, icon: Home, filterType: 'vibes' },
      { label: 'Palmeraie Resorts', tag: 'luxury', image: sleep_quiz_hotel, icon: Star, filterType: 'vibes' },
      { label: 'Boutique Guesthouses', tag: 'boutique', image: sleep_quiz_quiet, icon: Sparkles, filterType: 'vibes' },
      { label: 'Hostels', tag: 'budget', image: sleep_quiz_budget, icon: Wallet, filterType: 'vibes' },
    ],
    'shopping': [
      { label: 'Souk Semmarine', tag: 'souk', image: shop_quiz_souvenirs, icon: ShoppingBag, filterType: 'vibes' },
      { label: 'Leather Tanneries', tag: 'leather', image: shop_quiz_leather, icon: ShoppingBag, filterType: 'vibes' },
      { label: 'Artisan Crafts', tag: 'ceramics', image: shop_quiz_ceramics, icon: ShoppingBag, filterType: 'vibes' },
    ],
    'things-to-do': [
      { label: 'Bahia & Badi Palaces', tag: 'historic', image: things_quiz_history, icon: Landmark, filterType: 'vibes' },
      { label: 'Majorelle Garden', tag: 'museum', image: things_quiz_culture, icon: MapIcon, filterType: 'vibes' },
      { label: 'Hammam & Spa', tag: 'spa_wellness', image: quiz_relaxed, icon: Sparkles, filterType: 'vibes' },
    ],
    'default': [
      { label: 'Rooftop Cafés', tag: 'rooftop', image: eat_quiz_rooftop, icon: Utensils, filterType: 'vibes', cat: 'food' },
      { label: 'Medina Riads', tag: 'riad', image: sleep_quiz_riad, icon: Home, filterType: 'vibes', cat: 'sleep' },
      { label: 'Souk Markets', tag: 'souk', image: shop_quiz_souvenirs, icon: ShoppingBag, filterType: 'vibes', cat: 'shopping' },
      { label: 'Palace Tours', tag: 'historic', image: things_quiz_history, icon: MapIcon, filterType: 'vibes', cat: 'things-to-do' },
    ]
  },
  agadir: {
    'food': [
      { label: 'Marina Cafés', tag: 'rooftop', image: eat_quiz_rooftop, icon: MapIcon, filterType: 'vibes' },
      { label: 'Beachfront Seafood', tag: 'seafood', image: eat_quiz_fine_dining, icon: Utensils, filterType: 'vibes' },
      { label: 'International Dining', tag: 'international', image: eat_quiz_traditional, icon: Flame, filterType: 'vibes' },
    ],
    'sleep': [
      { label: 'Beachfront Resorts', tag: 'resort', image: sleep_quiz_hotel, icon: Star, filterType: 'vibes' },
      { label: 'Surf Hostels (Taghazout)', tag: 'surf', image: sleep_quiz_budget, icon: Home, filterType: 'vibes' },
      { label: 'Luxury Stays', tag: 'luxury', image: sleep_quiz_quiet, icon: Sparkles, filterType: 'vibes' },
    ],
    'shopping': [
      { label: 'Souk El Had', tag: 'souk', image: shop_quiz_souvenirs, icon: ShoppingBag, filterType: 'vibes' },
      { label: 'Marina Boutiques', tag: 'concept_store', image: quiz_setting_medina, icon: Store, filterType: 'vibes' },
    ],
    'things-to-do': [
      { label: 'Surfing (Taghazout)', tag: 'surf', image: quiz_relaxed, icon: MapIcon, filterType: 'vibes' },
      { label: 'Agadir Oufella Ruins', tag: 'historic', image: things_quiz_history, icon: Landmark, filterType: 'vibes' },
      { label: 'Paradise Valley', tag: 'nature', image: things_quiz_culture, icon: Sparkles, filterType: 'vibes' },
    ],
    'default': [
      { label: 'Marina Seafood', tag: 'seafood', image: eat_quiz_traditional, icon: Utensils, filterType: 'vibes', cat: 'food' },
      { label: 'Beach Resorts', tag: 'resort', image: sleep_quiz_hotel, icon: Home, filterType: 'vibes', cat: 'sleep' },
      { label: 'Souk El Had', tag: 'souk', image: shop_quiz_souvenirs, icon: ShoppingBag, filterType: 'vibes', cat: 'shopping' },
      { label: 'Paradise Valley', tag: 'nature', image: things_quiz_culture, icon: MapIcon, filterType: 'vibes', cat: 'things-to-do' },
    ]
  },
  fes: {
    'food': [
      { label: 'Traditional Fasi Tagine', tag: 'authentic', image: eat_quiz_traditional, icon: Utensils, filterType: 'vibes' },
      { label: 'Medina Cafés', tag: 'cafe', image: eat_quiz_rooftop, icon: MapIcon, filterType: 'vibes' },
      { label: 'Upscale Moroccan', tag: 'fine_dining', image: eat_quiz_fine_dining, icon: Star, filterType: 'vibes' },
    ],
    'sleep': [
      { label: 'Historic Riads', tag: 'riad', image: sleep_quiz_riad, icon: Home, filterType: 'vibes' },
      { label: 'Luxury Palaces', tag: 'luxury', image: sleep_quiz_hotel, icon: Star, filterType: 'vibes' },
      { label: 'Medina Guesthouses', tag: 'boutique', image: sleep_quiz_quiet, icon: Sparkles, filterType: 'vibes' },
    ],
    'shopping': [
      { label: 'Chouara Tannery Leather', tag: 'leather', image: shop_quiz_leather, icon: ShoppingBag, filterType: 'vibes' },
      { label: 'Fes Ceramics', tag: 'ceramics', image: shop_quiz_ceramics, icon: ShoppingBag, filterType: 'vibes' },
      { label: 'Traditional Souks', tag: 'souk', image: shop_quiz_souvenirs, icon: Store, filterType: 'vibes' },
    ],
    'things-to-do': [
      { label: 'Fes el-Bali Tours', tag: 'medina', image: quiz_setting_medina, icon: MapIcon, filterType: 'vibes' },
      { label: 'Al-Qarawiyyin', tag: 'historic', image: things_quiz_history, icon: Landmark, filterType: 'vibes' },
      { label: 'Traditional Hammam', tag: 'spa_wellness', image: quiz_relaxed, icon: Sparkles, filterType: 'vibes' },
    ],
    'default': [
      { label: 'Fasi Tagine', tag: 'authentic', image: eat_quiz_traditional, icon: Utensils, filterType: 'vibes', cat: 'food' },
      { label: 'Historic Riads', tag: 'riad', image: sleep_quiz_riad, icon: Home, filterType: 'vibes', cat: 'sleep' },
      { label: 'Leather Tannery', tag: 'leather', image: shop_quiz_leather, icon: ShoppingBag, filterType: 'vibes', cat: 'shopping' },
      { label: 'Medina Tours', tag: 'medina', image: quiz_setting_medina, icon: MapIcon, filterType: 'vibes', cat: 'things-to-do' },
    ]
  },
  tangier: {
    'food': [
      { label: 'Kasbah Cafés', tag: 'cafe', image: eat_quiz_rooftop, icon: MapIcon, filterType: 'vibes' },
      { label: 'Mediterranean Seafood', tag: 'seafood', image: eat_quiz_fine_dining, icon: Utensils, filterType: 'vibes' },
    ],
    'sleep': [
      { label: 'Ocean View Hotels', tag: 'ocean_view', image: sleep_quiz_hotel, icon: Star, filterType: 'vibes' },
      { label: 'Kasbah Guesthouses', tag: 'boutique', image: sleep_quiz_riad, icon: Home, filterType: 'vibes' },
    ],
    'shopping': [
      { label: 'Grand Socco', tag: 'souk', image: shop_quiz_souvenirs, icon: ShoppingBag, filterType: 'vibes' },
      { label: 'Artisan Boutiques', tag: 'concept_store', image: quiz_setting_medina, icon: Store, filterType: 'vibes' },
    ],
    'things-to-do': [
      { label: 'Caves of Hercules', tag: 'nature', image: things_quiz_culture, icon: MapIcon, filterType: 'vibes' },
      { label: 'Kasbah Museum', tag: 'museum', image: things_quiz_history, icon: Landmark, filterType: 'vibes' },
    ],
    'default': [
      { label: 'Kasbah Cafés', tag: 'cafe', image: eat_quiz_rooftop, icon: Utensils, filterType: 'vibes', cat: 'food' },
      { label: 'Ocean View Hotels', tag: 'ocean_view', image: sleep_quiz_hotel, icon: Home, filterType: 'vibes', cat: 'sleep' },
      { label: 'Grand Socco', tag: 'souk', image: shop_quiz_souvenirs, icon: ShoppingBag, filterType: 'vibes', cat: 'shopping' },
      { label: 'Caves of Hercules', tag: 'nature', image: things_quiz_culture, icon: MapIcon, filterType: 'vibes', cat: 'things-to-do' },
    ]
  },
  default: {
    'food': [
      { label: 'Traditional Tagine', tag: 'authentic', image: eat_quiz_traditional, icon: Utensils, filterType: 'vibes' },
      { label: 'Rooftop Views', tag: 'rooftop', image: eat_quiz_rooftop, icon: MapIcon, filterType: 'vibes' },
      { label: 'Street Food', tag: 'street_food', image: eat_quiz_street_food, icon: Flame, filterType: 'vibes' },
      { label: 'Fine Dining', tag: 'fine_dining', image: eat_quiz_fine_dining, icon: Star, filterType: 'vibes' },
    ],
    'sleep': [
      { label: 'Authentic Riads', tag: 'riad', image: sleep_quiz_riad, icon: Home, filterType: 'vibes' },
      { label: 'Luxury Hotels', tag: 'luxury', image: sleep_quiz_hotel, icon: Star, filterType: 'vibes' },
      { label: 'Budget Stays', tag: 'budget', image: sleep_quiz_budget, icon: Wallet, filterType: 'vibes' },
      { label: 'Boutique', tag: 'boutique', image: sleep_quiz_quiet, icon: Sparkles, filterType: 'vibes' },
    ],
    'shopping': [
      { label: 'Souks & Markets', tag: 'souk', image: shop_quiz_souvenirs, icon: ShoppingBag, filterType: 'vibes' },
      { label: 'Leather Goods', tag: 'leather', image: shop_quiz_leather, icon: ShoppingBag, filterType: 'vibes' },
      { label: 'Ceramics', tag: 'ceramics', image: shop_quiz_ceramics, icon: ShoppingBag, filterType: 'vibes' },
      { label: 'Concept Stores', tag: 'concept_store', image: quiz_setting_medina, icon: Store, filterType: 'vibes' },
    ],
    'things-to-do': [
      { label: 'Historical Palaces', tag: 'historic', image: things_quiz_history, icon: Landmark, filterType: 'vibes' },
      { label: 'Medina Tours', tag: 'medina', image: quiz_setting_medina, icon: MapIcon, filterType: 'vibes' },
      { label: 'Hammams', tag: 'spa_wellness', image: quiz_relaxed, icon: Sparkles, filterType: 'vibes' },
      { label: 'Museums', tag: 'museum', image: things_quiz_culture, icon: Landmark, filterType: 'vibes' },
    ],
    'default': [
      { label: 'Rooftop Cafés', tag: 'rooftop', image: eat_quiz_rooftop, icon: Utensils, filterType: 'vibes', cat: 'food' },
      { label: 'Hidden Riads', tag: 'riad', image: sleep_quiz_riad, icon: Home, filterType: 'vibes', cat: 'sleep' },
      { label: 'Local Markets', tag: 'souk', image: shop_quiz_souvenirs, icon: ShoppingBag, filterType: 'vibes', cat: 'shopping' },
      { label: 'Cultural Tours', tag: 'historic', image: things_quiz_history, icon: MapIcon, filterType: 'vibes', cat: 'things-to-do' },
    ]
  }
};

export default function ResultPage() {
  const { setView, activeCategory, setActiveCategory, setActiveItem, setOmitGoogleImage, addExploredCategory, filters, setFilter, resetFilters, quizAnswers, archetype, secondaryArchetype, activeSubCategory, sportIntent } = useExploreStore();
  const { city, neighborhood, setCity } = useParameterStore();
  
  const currentCityName = useMemo(() => {
    return city ? (cityMap[city]?.name || city) : 'Marrakech';
  }, [city]);

  const { toggleBookmark, isBookmarked } = useSavedStore();
  const { addCustomActivity, addCity, addCardToBoard } = usePlanStore();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const ref = query.get('ref');
  
  const [visibleCount, setVisibleCount] = useState(5);
  const [showFilters, setShowFilters] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showCategoryPopover, setShowCategoryPopover] = useState(false);
  const [sortBy, setSortBy] = useState<'smart' | 'rating' | 'verified' | 'price_low' | 'price_high'>('smart');

  // Reset pagination when category, city, or filters change
  useEffect(() => {
    setVisibleCount(5);
  }, [activeCategory, city, neighborhood, filters, quizAnswers, sortBy]);

  const nonTouristicAreas = useMemo(() => {
    return new Set(
      getAreasByCityBase(city || 'marrakech')
        .filter(a => a.tourismStatus === 'Non-touristic')
        .map(a => a.areaVillage.toLowerCase())
    );
  }, [city]);

  const handleEditVibe = (questionId?: string) => {
    if (activeCategory === 'things-to-do' && !activeSubCategory) {
      setView('subcategory');
    } else {
      setView('quiz');
    }
  };

  const handleAddToPlanner = (item: any) => {
    const timeMap: Record<string, any> = { 'food': 'evening', 'sleep': 'morning', 'things-to-do': 'afternoon' };
    const time = timeMap[activeCategory || 'things-to-do'] || 'afternoon';
    const type = (activeCategory === 'food' ? 'eat' : activeCategory === 'sleep' ? 'sleep' : 'things') as any;
    
    addCustomActivity(city || 'marrakech', time, type, item.name || item.title);
    
    let icon = '🎯';
    if (type === 'eat') icon = '🍽️';
    if (type === 'sleep') icon = '🏨';
    if (activeCategory === 'shopping') icon = '🛍️';

    const subtitleParts = [];
    if (item.sub_category || item.category) {
      subtitleParts.push(item.sub_category || item.category);
    }
    if (item.priceLevel || item.priceRange) {
      subtitleParts.push(item.priceLevel || item.priceRange);
    }

    addCardToBoard({
      sourceId: item.id || item.title || item.name,
      type: type,
      cityId: (city || 'marrakech') as any,
      title: item.title || item.name,
      subtitle: subtitleParts.join(' · ') || 'Planned Item',
      icon: icon,
      dayIndex: 0,
      rawDetails: item
    });
    
    if (ref === 'planner') {
      navigate('/planner');
    }
  };

  useEffect(() => {
    if (activeCategory) addExploredCategory(activeCategory);
  }, [activeCategory, addExploredCategory]);

  const focusMap: Record<string, string> = {
    'food': 'eat', 'things-to-do': 'things', 'experiences': 'things', 'sleep': 'sleep', 'cities': 'things', 'shopping': 'shopping'
  };
  const focusKey = focusMap[activeCategory || 'cities'] || 'things';
  
  const realListings = useMemo(() => {
    let listings = getListings(city || 'marrakech', focusKey);

    // Exclude non-touristic areas (Rule 7)
    listings = listings.filter(item => {
      if (item.neighborhood && nonTouristicAreas.has(item.neighborhood.toLowerCase())) {
        return false;
      }
      return true;
    });

    if (neighborhood) {
      listings = listings.filter(item => 
        item.neighborhood === neighborhood || 
        cityMap[item.city]?.name === neighborhood
      );
    }

    if (activeCategory === 'things-to-do' && activeSubCategory) {
      listings = listings.filter(item => {
        const tags = (item.tags || []).concat(item.vibeTags || []).map((t: string) => t.toLowerCase());
        const desc = (item.description || '').toLowerCase();
        const title = (item.name || item.title || '').toLowerCase();
        const matchesText = (keywords: string[]) => 
          keywords.some(kw => tags.includes(kw) || desc.includes(kw) || title.includes(kw));

        if (activeSubCategory === 'culture') {
          return matchesText(['culture', 'heritage', 'museum', 'palace', 'history', 'architecture', 'monument', 'historical', 'art']);
        }
        if (activeSubCategory === 'wellness') {
          return matchesText(['wellness', 'spa', 'hammam', 'massage', 'yoga', 'relaxation', 'retreat', 'bath']);
        }
        if (activeSubCategory === 'desert-nature') {
          return matchesText(['desert', 'nature', 'camel', 'dunes', 'oasis', 'gorge', 'valley', 'stargazing', 'camp']);
        }
        if (activeSubCategory === 'photography') {
          return matchesText(['photography', 'viewpoint', 'scenic', 'views', 'instagram', 'photo', 'art', 'craft']);
        }
        if (activeSubCategory === 'social') {
          return matchesText(['social', 'nightlife', 'market', 'lounge', 'music', 'live', 'cooking', 'souk', 'bar', 'drink']);
        }
        if (activeSubCategory === 'sport') {
          const isPracticalItem = matchesText(['gym', 'fitness', 'pool', 'swimming', 'workout', 'yoga', 'movement', 'running', 'combat', 'sports', 'facility']);
          const isExperienceItem = matchesText(['surf', 'kitesurf', 'hiking', 'trekking', 'climbing', 'quad', 'buggy', 'adventure', 'excursion', 'riding']);
          
          if (sportIntent === 'practical') {
            return isPracticalItem;
          } else if (sportIntent === 'experience') {
            return isExperienceItem;
          }
          return isPracticalItem || isExperienceItem;
        }
        return true;
      });
    }

    return listings;
  }, [city, neighborhood, focusKey, activeCategory, activeSubCategory, sportIntent, nonTouristicAreas]);

  const recommendations = useMemo(() => {
    const scored = realListings.map(item => {
      let matchScore = 0;
      let totalCriteria = 0;

      if (archetype) {
        totalCriteria += 2;
        if (item.archetypeAffinity?.includes(archetype)) {
          matchScore += 2;
        } else if (secondaryArchetype && item.archetypeAffinity?.includes(secondaryArchetype)) {
          matchScore += 1;
        }
      }

      if (filters.hasPool) { totalCriteria++; if (item.hasPool) matchScore++; }
      if (filters.isVegetarian) { totalCriteria++; if ((item as any).isVegetarianFriendly) matchScore++; }
      if (filters.isHalal) { totalCriteria++; if ((item as any).isHalal) matchScore++; }
      if (filters.isVerified) { totalCriteria++; if ((item as any).isVerified) matchScore++; }
      if (filters.isFixedPrice) { totalCriteria++; if ((item as any).pricingModel === 'fixed') matchScore++; }
      if (filters.isNoHassle) {
        totalCriteria++;
        const hasGoodIntel = item.id === 'sh-mar-1' || item.id === 'sh-mar-2';
        if ((item as any).pricingModel === 'fixed' || hasGoodIntel) matchScore++;
      }
      
      if (filters.vibes?.length > 0) {
        filters.vibes.forEach(vibe => {
          totalCriteria++;
          if (item.vibeTags?.includes(vibe) || item.tags?.includes(vibe)) matchScore++;
        });
      }

      Object.entries(quizAnswers).forEach(([questionId, answerValue]) => {
        if (!answerValue || (Array.isArray(answerValue) && answerValue.length === 0)) return;
        
        const answers = Array.isArray(answerValue) ? answerValue : [answerValue];
        
        answers.forEach(answerId => {
            if (!answerId) return;
            totalCriteria++;

            if (questionId === 'base-lifestyle' || questionId === 'ft-style') {
               const tag = getTagForOptionId(answerId);
               if (item.lifestyle?.includes(tag as any)) matchScore++;
               return;
            }
            if (questionId === 'base-group') {
               const tag = getTagForOptionId(answerId);
               if (item.groupTypes?.includes(tag as any)) matchScore++;
               return;
            }

            const tagMap: Record<string, string> = {
              'relaxed': 'relaxed-energy',
              'moderate': 'moderate-energy',
              'active': 'active-energy',
            };

            const answerTag = getTagForOptionId(answerId);
            const targetTag = tagMap[answerTag] || answerTag;
            
            if (item.tags?.includes(targetTag) || item.archetypeAffinity?.includes(targetTag)) {
              matchScore++;
            } else {
              const vibeTags = Array.isArray(item.vibeTags) ? item.vibeTags : [];
              const foodStyles = Array.isArray((item as any).foodStyles) ? (item as any).foodStyles : [];
              const experienceTypes = Array.isArray((item as any).experienceTypes) ? (item as any).experienceTypes : [];
              const mealTypes = Array.isArray((item as any).mealTypes) ? (item as any).mealTypes : [];
              const amenities = Array.isArray((item as any).amenities) ? (item as any).amenities : [];

              const searchableText = [
                item.name, item.title, item.description, item.type, item.category, (item as any).cuisine,
                ...vibeTags, ...foodStyles, ...experienceTypes, ...mealTypes, ...amenities
              ].filter(Boolean).map((t: any) => t.toString().toLowerCase());
              
              const answerParts = answerId.toString().toLowerCase().split('-');
              const hasMatch = answerParts.some((part: string) => 
                searchableText.some((text: string) => text.includes(part))
              );
              if (hasMatch) matchScore++;
            }
        });
      });

      const matchPercentage = totalCriteria > 0 ? Math.round((matchScore / totalCriteria) * 100) : 100;
      
      let openBoost = 0;
      if (item.openingHours) {
        const status = getShopStatus(item.openingHours, item.fridayHours, item.ramadanHours);
        const statusVal = status.status;
        if (statusVal === 'open' || statusVal === 'ramadan_day' || statusVal === 'ramadan_night') {
          openBoost = 20;
        } else if (statusVal === 'closes_soon') {
          openBoost = 10;
        } else if (statusVal === 'closed' || statusVal === 'friday_prayer' || statusVal === 'holiday') {
          openBoost = -10;
        } else {
          openBoost = 0;
        }
      } else if (item.openTime && item.closeTime) {
        const status = getShopStatus(
          [{ day: 'Daily', hours: `${item.openTime} - ${item.closeTime}` }],
          undefined,
          undefined
        );
        const statusVal = status.status;
        if (statusVal === 'open' || statusVal === 'ramadan_day' || statusVal === 'ramadan_night') {
          openBoost = 20;
        } else if (statusVal === 'closes_soon') {
          openBoost = 10;
        } else if (statusVal === 'closed' || statusVal === 'friday_prayer' || statusVal === 'holiday') {
          openBoost = -10;
        } else {
          openBoost = 0;
        }
      } else {
        openBoost = 20;
      }

      const sortedScore = matchPercentage + openBoost;
      return { ...item, matchPercentage, sortedScore };
    });

    if (sortBy === 'rating') {
      return [...scored].sort((a, b) => ((b as any).googleRating || (b as any).rating || 0) - ((a as any).googleRating || (a as any).rating || 0));
    } else if (sortBy === 'verified') {
      return [...scored].sort((a, b) => ((b as any).isVerified ? 1 : 0) - ((a as any).isVerified ? 1 : 0));
    } else if (sortBy === 'price_low') {
      return [...scored].sort((a: any, b: any) => {
        const pA = a.priceMultiplier || a.priceLevel || 1;
        const pB = b.priceMultiplier || b.priceLevel || 1;
        return pA - pB;
      });
    } else if (sortBy === 'price_high') {
      return [...scored].sort((a: any, b: any) => {
        const pA = a.priceMultiplier || a.priceLevel || 1;
        const pB = b.priceMultiplier || a.priceLevel || 1;
        return pB - pA;
      });
    }

    return scored.sort((a, b) => b.sortedScore - a.sortedScore);
  }, [realListings, filters, quizAnswers, archetype, secondaryArchetype, sortBy]);

  const handleViewDetails = (itemId: string, itemIdx?: number) => {
    setOmitGoogleImage((itemIdx !== undefined ? itemIdx : 0) >= 5);
    setActiveItem(itemId);
    setView('detail');
    navigate(`/finder/${(city || 'marrakech').toLowerCase()}/${itemId}`);
  };

  const activePrefCount = useMemo(() => {
    let count = Object.values(filters).filter(Boolean).length;
    count += Object.keys(quizAnswers).filter(k => !!quizAnswers[k]).length;
    return count || 4;
  }, [filters, quizAnswers]);

  const isCityDataEmpty = realListings.length === 0 && !filters.hasPool && !filters.isVegetarian && !filters.isHalal && !filters.isVerified;

  if (isCityDataEmpty) return (
    <div className="py-20 px-6 max-w-5xl mx-auto space-y-12">
      <div className="mb-8">
        <LocationPicker />
      </div>
      
      <div className="p-20 text-center text-stone-500 bg-white rounded-[40px] border border-stone-100 shadow-sm">
        <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
        <h3 className="text-xl font-bold text-stone-900 mb-2">Curating {(city || '').replace('_', ' ')}</h3>
        <p className="mb-8">Data for this city is being curated by our local intelligence team. Please check back later or explore another destination.</p>
        <button onClick={() => setCity('marrakech')} className="px-6 py-3 bg-[#C2613C] text-white rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#C2613C]/90">
          Explore Marrakech
        </button>
      </div>
    </div>
  );

  if (recommendations.length === 0) return (
    <div className="py-20 px-6 max-w-5xl mx-auto space-y-12">
      <div className="mb-8">
        <LocationPicker />
      </div>
      
      <div className="p-20 text-center text-stone-500 bg-white rounded-[40px] border border-stone-100 shadow-sm">
        <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
        <h3 className="text-xl font-bold text-stone-900 mb-2">No matches found</h3>
        <p className="mb-8">Try adjusting your area, vibe or filters to find more spots.</p>
        <button onClick={() => handleEditVibe()} className="px-6 py-3 bg-stone-900 text-white rounded-xl font-bold uppercase tracking-widest text-[10px]">
          Edit Vibe Choices
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-16 font-sans text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-stone-700 font-semibold text-sm hover:text-[#C2613C] transition-colors mb-4 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </button>

        {/* ─── Compact Header Zone ─────────────────────────────── */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-[#EAE1D3] shadow-sm">
            <img src={getHeroImage(activeCategory)} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <h1 className="font-serif text-xl sm:text-2xl text-stone-900 tracking-tight leading-tight truncate">
              Places we found for you in <span className="text-[#C2613C]">{currentCityName}</span>
            </h1>
            <p className="text-stone-500 text-xs font-medium mt-0.5">
              Handpicked from your quiz · <span className="font-bold text-stone-700">{recommendations.length} places</span>
            </p>
          </div>
        </div>

        {/* Preferences Control Strip Bar */}
        <div className="relative z-30 mx-4 md:mx-8 mt-5 mb-6 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-[#E7DFD3] shadow-md flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full md:flex-1 relative">
              {/* City Selector Tile */}
              <button
                type="button"
                onClick={() => {
                  setShowLocationModal(!showLocationModal);
                  setShowCategoryPopover(false);
                }}
                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#FAF7F2] transition-colors cursor-pointer border border-transparent hover:border-[#E8E0D2] text-left w-full"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF3EA] flex items-center justify-center shrink-0 text-[#C2613C]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">CITY</div>
                  <div className="font-bold text-stone-900 text-sm flex items-center justify-between gap-1 truncate">
                    <span className="truncate">{currentCityName}</span>
                    <ChevronDown className={cn("w-3.5 h-3.5 text-stone-400 shrink-0 transition-transform", showLocationModal && "rotate-180")} />
                  </div>
                </div>
              </button>

              {/* Category Tile */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setShowCategoryPopover(!showCategoryPopover);
                    setShowLocationModal(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#FAF7F2] transition-colors cursor-pointer border border-transparent hover:border-[#E8E0D2] text-left w-full"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FAF3EA] flex items-center justify-center shrink-0 text-[#C2613C]">
                    <LayoutGrid className="w-4 h-4" />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">CATEGORY</div>
                    <div className="font-bold text-stone-900 text-sm flex items-center justify-between gap-1 truncate capitalize">
                      <span className="truncate">{getCategoryLabel(activeCategory)}</span>
                      <ChevronDown className={cn("w-3.5 h-3.5 text-stone-400 shrink-0 transition-transform", showCategoryPopover && "rotate-180")} />
                    </div>
                  </div>
                </button>

                {/* Category Popover */}
                <AnimatePresence>
                  {showCategoryPopover && (
                    <>
                      <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => setShowCategoryPopover(false)} 
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white border border-stone-200 rounded-2xl shadow-xl p-2 z-50"
                      >
                        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider px-3 py-1.5">Select Category</div>
                        {CATEGORY_OPTIONS.map(opt => {
                          const Icon = opt.icon;
                          const isSel = (opt.id === null && !activeCategory) || 
                                        (opt.id === activeCategory) || 
                                        (opt.id === 'food' && activeCategory as string === 'eat') || 
                                        (opt.id === 'things-to-do' && activeCategory as string === 'things');
                          return (
                            <button
                              key={opt.id || 'all'}
                              type="button"
                              onClick={() => {
                                setActiveCategory(opt.id as any);
                                resetFilters();
                                setShowCategoryPopover(false);
                              }}
                              className={cn(
                                "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer",
                                isSel ? "bg-[#FAF3EA] text-[#C2613C]" : "text-stone-700 hover:bg-stone-50"
                              )}
                            >
                              <div className="flex items-center gap-2.5">
                                <Icon className="w-4 h-4 text-[#C2613C]" />
                                <span>{opt.label}</span>
                              </div>
                              {isSel && <Check className="w-3.5 h-3.5 text-[#C2613C]" />}
                            </button>
                          );
                        })}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Preferences Tile */}
              <button
                type="button"
                onClick={() => {
                  setShowFilters(true);
                  setShowLocationModal(false);
                  setShowCategoryPopover(false);
                }}
                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#FAF7F2] transition-colors cursor-pointer border border-transparent hover:border-[#E8E0D2] text-left w-full"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF3EA] flex items-center justify-center shrink-0 text-[#C2613C]">
                  <User className="w-4 h-4" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">YOUR PREFERENCES</div>
                  <div className="font-bold text-stone-900 text-sm flex items-center justify-between gap-1 truncate">
                    <span className="truncate">{activePrefCount} selected</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  </div>
                </div>
              </button>
            </div>

            {/* Sort (moved into the control row) */}
            <div className="w-full md:w-auto shrink-0 flex items-center gap-2 text-xs text-stone-600 bg-[#FAF7F2] border border-[#E5DDD0] rounded-xl px-4 py-2.5">
              <span className="text-stone-400 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="font-bold text-stone-900 bg-transparent outline-none cursor-pointer"
              >
                <option value="smart">Smart Match</option>
                <option value="rating">Highest Rated</option>
                <option value="verified">Verified First</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
              </select>
            </div>
          </div>

        {/* Active Filter Chips & Specialty Bar */}
        <div className="space-y-3 mb-4">
          {(filters.isKidFriendly || filters.isWheelchairAccessible) && (
            <div className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs text-amber-900 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-base">⚡</span>
                <span>
                  Auto-applied travel-mode filters: <strong>{[filters.isKidFriendly && 'Kid-Friendly', filters.isWheelchairAccessible && 'Accessible'].filter(Boolean).join(', ')}</strong>
                </span>
              </div>
              <button 
                onClick={() => {
                  if (filters.isKidFriendly) setFilter('isKidFriendly', false);
                  if (filters.isWheelchairAccessible) setFilter('isWheelchairAccessible', false);
                }}
                className="px-3 py-1 bg-white border border-amber-300 rounded-xl text-[10px] font-bold uppercase text-amber-900 hover:bg-amber-100 transition-colors cursor-pointer shadow-2xs"
              >
                Turn Off Auto-Filter
              </button>
            </div>
          )}

          {/* Active Pills List */}
          <div className="flex flex-wrap gap-2">
            {filters.isVegetarian && (
              <span className="px-3 py-1 bg-[#FAF3EA] border border-[#E2D4C2] rounded-full text-xs font-medium text-stone-800 flex items-center gap-1.5">
                <span>🥗 Vegetarian</span>
                <button onClick={() => setFilter('isVegetarian', false)} className="hover:text-[#C2613C] p-0.5 cursor-pointer"><X className="w-3 h-3" /></button>
              </span>
            )}
            {filters.isHalal && (
              <span className="px-3 py-1 bg-[#FAF3EA] border border-[#E2D4C2] rounded-full text-xs font-medium text-stone-800 flex items-center gap-1.5">
                <span>🌙 Halal</span>
                <button onClick={() => setFilter('isHalal', false)} className="hover:text-[#C2613C] p-0.5 cursor-pointer"><X className="w-3 h-3" /></button>
              </span>
            )}
            {filters.hasPool && (
              <span className="px-3 py-1 bg-[#FAF3EA] border border-[#E2D4C2] rounded-full text-xs font-medium text-stone-800 flex items-center gap-1.5">
                <span>🏊 Pool</span>
                <button onClick={() => setFilter('hasPool', false)} className="hover:text-[#C2613C] p-0.5 cursor-pointer"><X className="w-3 h-3" /></button>
              </span>
            )}
            {filters.isVerified && (
              <span className="px-3 py-1 bg-stone-900 text-white rounded-full text-xs font-medium flex items-center gap-1.5">
                <span>🛡️ Verified</span>
                <button onClick={() => setFilter('isVerified', false)} className="hover:text-[#C2613C] p-0.5 cursor-pointer"><X className="w-3 h-3" /></button>
              </span>
            )}

            {(filters.vibes || []).map((vibe: string) => {
              const tagInfo = TAG_REGISTRY[vibe];
              return (
                <span 
                  key={vibe} 
                  className="px-3 py-1 bg-white border border-[#E5DDD0] rounded-full text-xs font-medium text-stone-700 flex items-center gap-1.5 shadow-2xs"
                >
                  <span>{tagInfo?.icon} {tagInfo?.label || vibe.replace('-', ' ')}</span>
                  <button 
                    onClick={() => setFilter('vibes', (filters.vibes || []).filter((v: string) => v !== vibe))} 
                    className="hover:text-[#C2613C] p-0.5 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              );
            })}
          </div>

          <FilterChipBar category={activeCategory || 'things-to-do'} />
        </div>

        {/* Listings Grid */}
        <div className="space-y-4">
          {recommendations.slice(0, visibleCount).map((item, idx) => {
            const isBeyondFirstFive = idx >= 5;
            const resolvedImg = resolveListingImages({
              id: item.id,
              googlePlaceId: item.googlePlaceId,
              images: item.images,
              nonCopyrightImage: item.nonCopyrightImage,
              category: activeCategory as any,
              omitGooglePlaceApi: isBeyondFirstFive
            });

            const isTopPick = idx === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.3 }}
                onClick={() => handleViewDetails(item.id, idx)}
                className="group bg-[#FAF6EE] hover:bg-white border border-[#E9E1D4] hover:border-[#D9CCA8] rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-5 items-stretch">
                  {/* Left Column: Image Container */}
                  <div className="w-full md:w-[300px] lg:w-[320px] h-52 md:h-auto shrink-0 relative rounded-xl overflow-hidden bg-stone-100">
                    {isBeyondFirstFive ? (
                      <div className="w-full h-full min-h-[190px] flex flex-col items-center justify-center p-5 text-center relative overflow-hidden bg-gradient-to-br from-stone-200/90 via-stone-100/95 to-stone-200/80 backdrop-blur-md border border-stone-200/60 select-none">
                        {/* Subtle geometric & grain texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(#8C7A6B_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 via-transparent to-transparent pointer-events-none" />

                        {/* Center Category Icon & Neighborhood */}
                        <div className="relative z-10 flex flex-col items-center gap-2 mb-3">
                          <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-stone-200/80 flex items-center justify-center text-stone-500 shadow-2xs">
                            {activeCategory === 'food' ? (
                              <Utensils className="w-5 h-5 text-[#C2613C]" />
                            ) : activeCategory === 'sleep' ? (
                              <Home className="w-5 h-5 text-[#D99A30]" />
                            ) : activeCategory === 'shopping' ? (
                              <ShoppingBag className="w-5 h-5 text-[#C9A84C]" />
                            ) : (
                              <MapPin className="w-5 h-5 text-[#C2613C]" />
                            )}
                          </div>
                          <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wider line-clamp-1">
                            {item.neighborhood || (activeCategory === 'food' ? 'Dining Spot' : activeCategory === 'sleep' ? 'Stay' : activeCategory === 'shopping' ? 'Artisan Shop' : 'Attraction')}
                          </span>
                        </div>

                        {/* See on Google Maps Button */}
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${item.name || item.title} ${item.city || city || ''} Morocco`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="relative z-10 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-stone-900 text-stone-800 hover:text-white text-xs font-bold shadow-xs hover:shadow-md border border-stone-300 hover:border-stone-900 transition-all duration-200 cursor-pointer group/btn"
                        >
                          <MapPin className="w-3.5 h-3.5 text-[#C2613C] group-hover/btn:text-[#E0A96D]" />
                          <span>See images on Google Maps</span>
                          <ExternalLink className="w-3 h-3 text-stone-400 group-hover/btn:text-white/80" />
                        </a>
                      </div>
                    ) : (
                      <>
                        {resolvedImg.url ? (
                          <img
                            src={resolvedImg.url}
                            alt={item.name || item.title}
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            data-fallbacks={JSON.stringify(resolvedImg.fallbackUrls)}
                            onError={(e) => handleListingImageError(e, resolvedImg.fallbackUrls, activeCategory as any)}
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-stone-300 font-bold text-xs uppercase bg-stone-100">
                            No Image Available
                          </div>
                        )}

                        {/* Top Pick Badge */}
                        {isTopPick && (
                          <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#D99A30] text-white rounded-md text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-sm">
                            <Star className="w-3 h-3 fill-current" />
                            <span>TOP PICK</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Right Column: Content */}
                  <div className="flex-1 flex flex-col justify-between min-w-0 py-0.5">
                    <div>
                      {/* Title & Actions Row */}
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <h3 className="font-serif text-2xl font-normal text-stone-900 group-hover:text-[#C2613C] transition-colors leading-snug truncate">
                          {item.name || item.title}
                        </h3>

                        <div className="flex items-center gap-2 shrink-0">
                          {/* Rating Badge */}
                          <div className="flex items-center gap-1 bg-[#FAF2E1] border border-[#E8DAAA] px-2.5 py-1 rounded-full text-stone-800 text-xs font-bold">
                            <Star className="w-3.5 h-3.5 text-[#D99A30] fill-current" />
                            <span>{item.googleRating || item.rating || '4.8'}</span>
                          </div>

                          {/* Bookmark Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark({
                                id: item.id,
                                type: focusKey,
                                name: item.name || item.title,
                                city: city || 'marrakech',
                                category: activeCategory || 'things'
                              });
                            }}
                            className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center transition-colors border border-transparent hover:border-[#E0D5C3] cursor-pointer",
                              isBookmarked(item.id) ? "text-[#C2613C] bg-red-50/50" : "text-stone-400 hover:text-stone-700 hover:bg-stone-100/60"
                            )}
                          >
                            <Bookmark className={cn("w-4 h-4", isBookmarked(item.id) && "fill-current")} />
                          </button>
                        </div>
                      </div>

                      {/* Location Row */}
                      <div className="flex items-center gap-2 text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-3">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span>{(item.neighborhood || 'Medina').toUpperCase()}</span>
                        <span className="text-stone-300">•</span>
                        <span>0.8 KM</span>
                      </div>

                      {/* Description */}
                      <p className="text-stone-600 text-sm leading-relaxed line-clamp-2 mb-4 font-sans">
                        {item.description}
                      </p>
                    </div>

                    {/* Card Footer: Category Tags & Navigation Circle */}
                    <div className="flex items-center justify-between gap-3 pt-2 border-t border-[#EFE8DC]/80">
                      <div className="flex flex-wrap gap-1.5">
                        {/* Default Category Chip */}
                        <span className="px-3 py-1 bg-[#F1E8DB] text-stone-800 rounded-full text-xs font-medium border border-[#E3D8C6]">
                          {activeCategory === 'food' ? 'Food & Dining' : activeCategory === 'sleep' ? 'Stays & Sleep' : activeCategory === 'shopping' ? 'Shopping' : 'Things to Do'}
                        </span>

                        {/* Additional Tags */}
                        {((item.tags || item.vibeTags || []) as string[]).filter(Boolean).slice(0, 2).map((tagId: string) => {
                          const tag = TAG_REGISTRY[tagId];
                          const label = tag?.label || tagId?.replace?.('-', ' ') || '';
                          return (
                            <span
                              key={tagId}
                              className="px-3 py-1 bg-[#F1E8DB] text-stone-800 rounded-full text-xs font-medium border border-[#E3D8C6] capitalize"
                            >
                              {label}
                            </span>
                          );
                        })}
                      </div>

                      {/* Detail Arrow Circle */}
                      <div className="w-8 h-8 rounded-full bg-[#FAF3EA] group-hover:bg-[#C2613C] border border-[#E2D6C4] group-hover:border-[#C2613C] flex items-center justify-center transition-all shrink-0">
                        <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show More 5 Button */}
        {visibleCount < recommendations.length && (
          <div className="mt-8 flex flex-col items-center justify-center gap-2">
            <button
              onClick={() => setVisibleCount(prev => prev + 5)}
              className="px-8 py-3.5 bg-white border border-[#E0D5C3] hover:border-[#C2613C] text-stone-800 hover:text-[#C2613C] rounded-2xl font-bold text-sm uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center gap-2.5 cursor-pointer group"
            >
              <span>Show 5 More Places</span>
              <ChevronDown className="w-4 h-4 text-stone-500 group-hover:text-[#C2613C] transition-transform group-hover:translate-y-0.5" />
            </button>
            <p className="text-xs text-stone-500 font-medium">
              Showing {Math.min(visibleCount, recommendations.length)} of {recommendations.length} curated places
            </p>
          </div>
        )}

        {/* ─── Explore More Vibes (popular quick filters) ──────── */}
        <div className="mt-10">
          <div className="flex items-center gap-2 mb-3 px-1">
            <h3 className="font-serif text-base sm:text-lg text-stone-800 font-medium">
              Explore more vibes in {currentCityName}
            </h3>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {((POPULAR_SUGGESTIONS_MAP[city?.toLowerCase() || 'default'] || POPULAR_SUGGESTIONS_MAP['default'])[activeCategory || 'default'] || POPULAR_SUGGESTIONS_MAP['default']['default']).map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    if (item.cat) setActiveCategory(item.cat as any);
                    setFilter(item.filterType as any, [item.tag]);
                  }}
                  className="relative group w-40 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-end p-3 text-left border border-stone-200 hover:border-[#C2613C]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="relative z-10 flex items-center gap-1.5 text-white">
                    <Icon className="w-3.5 h-3.5 opacity-90" />
                    <span className="text-xs font-semibold tracking-wide drop-shadow-sm leading-tight">
                      {item.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quiz Re-engagement Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#FAF3EA] via-[#F5ECE0] to-[#FAF3EA] border border-[#E7DDD0] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-white shadow-2xs border border-[#E3D6C3] flex items-center justify-center shrink-0 text-[#C2613C]">
              <Compass className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900 mb-1">
                Not sure what to explore next?
              </h3>
              <p className="text-stone-600 text-sm">
                Take a quick quiz and we'll find more places you'll love in {currentCityName}.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-4 text-xs font-medium text-stone-600 shrink-0">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-stone-400" /> 2 min quiz</span>
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-stone-400" /> Personalized</span>
              <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-stone-400" /> Better matches</span>
            </div>

            <button
              onClick={() => handleEditVibe()}
              className="w-full sm:w-auto shrink-0 px-6 py-3 bg-[#C2613C] hover:bg-[#a8502e] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Take the Quiz</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Location Picker Modal */}
      <AnimatePresence>
        {showLocationModal && (
          <div 
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs z-[100] flex items-center justify-center p-4"
            onClick={() => setShowLocationModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-visible p-6 border border-stone-100"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2 text-stone-900 font-bold font-serif text-lg">
                  <MapPin className="w-5 h-5 text-[#C2613C]" />
                  <span>Choose Destination City</span>
                </div>
                <button 
                  onClick={() => setShowLocationModal(false)} 
                  className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500 cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <LocationPicker />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Filter Modal */}
      <AnimatePresence>
        {showFilters && (
          <FilterPanel
            category={focusKey}
            filters={filters}
            onChange={(newFilters) => {
              Object.entries(newFilters).forEach(([k, v]) => setFilter(k as any, v));
            }}
            onClose={() => setShowFilters(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
