import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useExploreStore } from '../../state/exploreStore';
import { useParameterStore } from '../../state/parameterStore';
import { useSavedStore } from '../../state/savedStore';
import { getListings } from '../../listings';
import { getPlaceUrlById, normalizePlaceCategory } from '../../listings/placeRoutes';
import { getActivityById } from '../../things-to-do';
import {
  Star,
  Check,
  Sparkles,
  MapPin,
  X,
  ChevronDown,
  User,
  Bookmark,
  ChevronRight,
  Clock,
  Utensils,
  Home,
  ShoppingBag,
  ExternalLink,
  Shield,
  Navigation,
  SlidersHorizontal,
  Filter,
  Search
} from 'lucide-react';
import { getShopStatus } from '../../utils/timeEngine';
import FilterPanel from './modals/FilterPanel';
import { ARCHETYPE_METADATA } from '../../data/explore/archetypes';
import { getTagForOptionId, getQuizWeightForQuestionId, QUIZ_STOP_WORDS, getAllQuizQuestions, getQuizOptionLabel, type QuizQuestion } from '../../data/explore/questions';
import { cn } from '../../utils/cn';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { SEO } from '../ui/SEO';
import { getSearchIntent, getCityPopularIntents, doesListingMatchIntent } from '../../data/seo/searchIntents';
import PeopleSearchForBar from './PeopleSearchForBar';
import { TAG_REGISTRY } from '../../listings/things/tags';
import { cityMap } from '../../data/cities';
import LocationPicker from './LocationPicker';
import FilterChipBar, { getAllChipsForCategory, type FilterChipOption } from './FilterChipBar';
import { SavvyScoreEngine } from '../../engine/savvyScoreEngine';
import SavvyBadge from '../savvy/SavvyBadge';
import { getAreasByCityBase } from '../../data/tourismAreas';
import foodHeroBg from '../../assets/images/finder/category_food_matte_1786297062095.jpg';
import shopHeroBg from '../../assets/images/finder/category_shop_matte_1786297097622.jpg';
import stayHeroBg from '../../assets/images/finder/category_stays_matte_1786297074546.jpg';
import thingsHeroBg from '../../assets/images/finder/category_things_matte_1786297086778.jpg';
import defaultHeroBg from '../../assets/images/finder/finder_hero_matte_1786297047661.jpg';

const getHeroImage = (cat: string | null) => {
  if (cat === 'food' || cat === 'eat') return foodHeroBg;
  if (cat === 'sleep') return stayHeroBg;
  if (cat === 'shopping') return shopHeroBg;
  if (cat === 'things-to-do' || cat === 'things') return thingsHeroBg;
  return defaultHeroBg;
};

// Chip styles for real open-status colors (from the opening-hours engine)
const STATUS_CHIP_STYLES: Record<string, string> = {
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  purple: 'bg-purple-50 text-purple-700 border-purple-200',
  red: 'bg-red-50 text-red-700 border-red-200',
  stone: 'bg-stone-100 text-stone-600 border-stone-200'
};

// Price fields are mixed types across listing categories: shops use string
// priceLevel ('budget' | 'mid-range' | 'premium' | 'luxury') while others use a
// numeric priceMultiplier. Normalize both to a comparable rank so price sorting
// never produces NaN / garbage order.
const priceRank = (v: any): number => {
  if (typeof v === 'number' && isFinite(v)) return v;
  if (typeof v === 'string') {
    const map: Record<string, number> = { 'budget': 1, 'mid-range': 2, 'mid': 2, 'premium': 3, 'luxury': 4 };
    return map[v.trim().toLowerCase()] ?? 2;
  }
  return 2;
};

// Real "open right now" check using the existing opening-hours engine
const isItemOpenNow = (item: any): boolean => {
  try {
    let status: ReturnType<typeof getShopStatus> | null = null;
    if (item.openingHours) {
      status = getShopStatus(item.openingHours, item.fridayHours, item.ramadanHours);
    } else if (item.openTime && item.closeTime) {
      status = getShopStatus([{ day: 'Daily', hours: `${item.openTime} - ${item.closeTime}` }]);
    }
    if (!status) return false;
    const s = status.status;
    return s === 'open' || s === 'closes_soon' || s === 'ramadan_day' || s === 'ramadan_night';
  } catch {
    return false;
  }
};

// Does one quick-filter chip match a listing? Mirrors the scoring logic so the
// live counts shown on chips always reflect real matches.
const chipMatchesItem = (item: any, chip: FilterChipOption): boolean => {
  if (chip.id === 'open-now') return isItemOpenNow(item);
  if (chip.flagKey === 'isVegetarian') return item.isVegetarianFriendly === true;
  if (chip.flagKey === 'isHalal') return item.isHalal === true;
  if (chip.flagKey === 'isKidFriendly') {
    return item.isKidFriendly === true
      || (Array.isArray(item.vibeTags) && item.vibeTags.some((v: string) => v.toLowerCase().includes('family')));
  }
  if (chip.flagKey === 'isWheelchairAccessible') {
    return item.isWheelchairAccessible === true
      || (Array.isArray(item.vibeTags) && item.vibeTags.some((v: string) => v.toLowerCase().includes('step-free')));
  }
  if (chip.flagKey === 'isFixedPrice') return item.pricingModel === 'fixed';
  if (chip.flagKey === 'isWorkshop') {
    return (Array.isArray(item.tags) && item.tags.some((t: string) => t.toLowerCase().includes('workshop')))
      || (Array.isArray(item.experienceTypes) && item.experienceTypes.some((t: any) => String(t).toLowerCase().includes('workshop')));
  }
  if (chip.flagKey === 'isLocalFav') {
    return (Array.isArray(item.tags) && item.tags.some((t: string) => t.toLowerCase().includes('local-favorite')))
      || (Array.isArray(item.vibeTags) && item.vibeTags.some((v: string) => v.toLowerCase().includes('local favorite')));
  }
  // Vibe chips: word-based matching across real data fields
  const words = String(chip.tag).toLowerCase().replace(/-/g, ' ').split(' ').filter(Boolean);
  const pool = [
    ...(Array.isArray(item.vibeTags) ? item.vibeTags : []),
    ...(Array.isArray(item.tags) ? item.tags : []),
    ...(Array.isArray(item.amenities) ? item.amenities : []),
    ...(Array.isArray(item.foodStyles) ? item.foodStyles : []),
    ...(Array.isArray(item.experienceTypes) ? item.experienceTypes : []),
    ...(Array.isArray(item.mealTypes) ? item.mealTypes : []),
    ...(item.hasRooftop ? ['rooftop'] : []),
    String(item.locationSummary || ''),
    String(item.neighborhood || ''),
    item.name, item.title, item.type
  ].filter(Boolean).map((t: any) => t.toString().toLowerCase());
  return words.length > 0 && words.every(w => pool.some(t => t === w || t.includes(w)));
};

export default function ResultPage() {
  const { setView, pushView, activeCategory, setActiveItem, setOmitGoogleImage, setModalOpen, addExploredCategory, filters, setFilter, quizAnswers, archetype, secondaryArchetype, activeSubCategory, sportIntent, setQuizAnswer } = useExploreStore();
  const { city, neighborhood, setCity } = useParameterStore();
  
  const { param1, param2, param3 } = useParams<{ param1?: string; param2?: string; param3?: string }>();
  const location = useLocation();

  const activeFeatureSlug = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return param3 || params.get('feature') || params.get('intent') || params.get('tag') || null;
  }, [param3, location.search]);

  const activeSearchIntent = useMemo(() => {
    if (!activeFeatureSlug) return null;
    return getSearchIntent(activeCategory || 'sleep', activeFeatureSlug);
  }, [activeFeatureSlug, activeCategory]);

  const popularIntents = useMemo(() => {
    return getCityPopularIntents(city || 'agadir', activeCategory || 'sleep');
  }, [city, activeCategory]);

  const handleSelectIntent = (intentSlug: string | null) => {
    const currentCity = (city || 'agadir').toLowerCase();
    const currentCat = activeCategory || 'sleep';

    if (!intentSlug || intentSlug === activeFeatureSlug) {
      navigate(`/finder/${currentCity}/${currentCat}`);
    } else {
      navigate(`/finder/${currentCity}/${currentCat}/${intentSlug}`);
    }
  };

  const currentCityName = useMemo(() => {
    return city ? (cityMap[city]?.name || city) : 'Marrakech';
  }, [city]);

  const { toggleBookmark, isBookmarked } = useSavedStore();
  const navigate = useNavigate();
  
  const [visibleCount, setVisibleCount] = useState(5);
  const [showFilters, setShowFilters] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [sortBy, setSortBy] = useState<'smart' | 'rating' | 'verified' | 'price_low' | 'price_high'>('smart');
  const [expandedWhyId, setExpandedWhyId] = useState<string | null>(null);
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);

  // Hide the header close icon while any popup is open — only ONE close icon visible at a time
  useEffect(() => {
    setModalOpen(showLocationModal || showFilters);
  }, [showLocationModal, showFilters, setModalOpen]);

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
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.delete('start');
    const target = activeCategory === 'things-to-do' && !activeSubCategory ? 'subcategory' : 'quiz';
    urlParams.set('view', target);
    setView(target as any);
    navigate(`${window.location.pathname}?${urlParams.toString()}`);
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

    // Filter by high-intent search feature if selected from URL or tag bar
    if (activeSearchIntent) {
      const intentFiltered = listings.filter(item => doesListingMatchIntent(item, activeSearchIntent));
      if (intentFiltered.length > 0) {
        listings = intentFiltered;
      }
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
    // Minimum Rating (hard filter) — hides places below the chosen rating,
    // so the slider in the filter panel actually does what it promises
    const minRating = filters.rating || 0;
    let base = minRating > 0
      ? realListings.filter(item => ((item as any).googleRating || (item as any).rating || 0) >= minRating)
      : realListings;
    // Open Now (hard filter): travelers in-country RIGHT NOW need places currently open
    if (filters.isOpenNow) {
      base = base.filter(isItemOpenNow);
    }
    const scored = base.map(item => {
      let matchScore = 0;
      let totalCriteria = 0;
      // Why-this-matched transparency: pretty labels of quiz answers this place matched on
      const matchedTags: string[] = [];
      const missedTags: string[] = [];

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
        // Data-driven "low pressure" signal: fixed-price shops never haggle-hassle.
        // Replaces the old hardcoded 2-shop ID list so every city qualifies.
        if ((item as any).pricingModel === 'fixed') matchScore++;
      }

      // Must-Have Features that were previously stored but never used
      if (filters.servesAlcohol) {
        totalCriteria++;
        if ((item as any).servesAlcohol) matchScore++;
      }
      if (filters.hasAC) {
        totalCriteria++;
        if ((item as any).hasAC) matchScore++;
      }
      if (filters.isKidFriendly) {
        totalCriteria++;
        const kidOk = (item as any).isKidFriendly
          || (Array.isArray(item.vibeTags) && item.vibeTags.some((v: string) => v.toLowerCase().includes('family')));
        if (kidOk) matchScore++;
      }
      if (filters.isWheelchairAccessible) {
        totalCriteria++;
        const accessOk = (item as any).isWheelchairAccessible
          || (Array.isArray(item.vibeTags) && item.vibeTags.some((v: string) => v.toLowerCase().includes('step-free')));
        if (accessOk) matchScore++;
      }
      if (filters.isWorkshop) {
        totalCriteria++;
        const workshopOk = (Array.isArray(item.tags) && item.tags.some((t: string) => t.toLowerCase().includes('workshop')))
          || (Array.isArray((item as any).experienceTypes) && (item as any).experienceTypes.some((t: any) => String(t).toLowerCase().includes('workshop')));
        if (workshopOk) matchScore++;
      }
      if (filters.isLocalFav) {
        totalCriteria++;
        const localFavOk = (Array.isArray(item.tags) && item.tags.some((t: string) => t.toLowerCase().includes('local-favorite')))
          || (Array.isArray(item.vibeTags) && item.vibeTags.some((v: string) => v.toLowerCase().includes('local favorite')));
        if (localFavOk) matchScore++;
      }
      
      if (filters.vibes?.length > 0) {
        // Case-insensitive, word-based matching across all real data fields
        // (tags, vibeTags, amenities, foodStyles, experienceTypes, mealTypes, cuisine)
        const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        filters.vibes.forEach(vibe => {
          totalCriteria++;
          const v = String(vibe).toLowerCase().replace('a/c', 'ac').replace(/-/g, ' ');
          const words = v.split(' ').filter(Boolean);
          const pool = [
            ...(Array.isArray(item.vibeTags) ? item.vibeTags : []),
            ...(Array.isArray(item.tags) ? item.tags : []),
            ...(Array.isArray((item as any).amenities) ? (item as any).amenities : []),
            ...(Array.isArray((item as any).foodStyles) ? (item as any).foodStyles : []),
            ...(Array.isArray((item as any).experienceTypes) ? (item as any).experienceTypes : []),
            ...(Array.isArray((item as any).mealTypes) ? (item as any).mealTypes : []),
            ...(Array.isArray((item as any).cuisine) ? (item as any).cuisine : []),
            ...((item as any).hasRooftop ? ['rooftop'] : []),
            String((item as any).locationSummary || ''),
            String(item.neighborhood || ''),
            item.name, item.title, item.type, (item as any).business,
          ].filter(Boolean).map((t: any) => t.toString().toLowerCase());
          const matched = words.length > 0 && words.every(w =>
            pool.some(t => t === w || new RegExp(`\\b${escapeRe(w)}\\b`).test(t))
          );
          if (matched) matchScore++;
        });
      }

      Object.entries(quizAnswers).forEach(([questionId, answerValue]) => {
        if (!answerValue || (Array.isArray(answerValue) && answerValue.length === 0)) return;
        
        const answers = Array.isArray(answerValue) ? answerValue : [answerValue];
        // Weighted scoring tiers (declared on each question in questions.ts):
        // hard = non-negotiable (gains 3, penalizes 2 on a confirmed miss),
        // strong = 2x signal, soft = 1x normal weight (default)
        const weightTier = getQuizWeightForQuestionId(questionId);
        const weightGain = weightTier === 'hard' ? 3 : weightTier === 'strong' ? 2 : 1;
        const missPenalty = weightTier === 'hard' ? -2 : 0;
        
        answers.forEach(answerId => {
            if (!answerId) return;
            totalCriteria += weightGain;

            if (questionId === 'base-lifestyle' || questionId === 'ft-style') {
               const tag = getTagForOptionId(answerId);
               // Shops store spending style as the structured priceLevel (canonical shop
               // schema), so quiz budget answers now actually personalize shop rankings
               if ((item as any).priceLevel) {
                 const priceMap: Record<string, string[]> = {
                   'lean': ['budget'],
                   'balanced': ['mid-range'],
                   'premium': ['premium', 'luxury']
                 };
                 const spendMatch = priceMap[tag]?.includes((item as any).priceLevel);
                 if (spendMatch) {
                   matchScore += weightGain;
                   matchedTags.push(getQuizOptionLabel(questionId, answerId));
                 } else {
                   matchScore += missPenalty;
                   missedTags.push(getQuizOptionLabel(questionId, answerId));
                 }
               } else if (item.lifestyle) {
                 const lifeMatch = (item.lifestyle as any).includes(tag);
                 if (lifeMatch) {
                   matchScore += weightGain;
                   matchedTags.push(getQuizOptionLabel(questionId, answerId));
                 } else {
                   matchScore += missPenalty;
                   missedTags.push(getQuizOptionLabel(questionId, answerId));
                 }
               }
               return;
            }
            if (questionId === 'base-group') {
               const tag = getTagForOptionId(answerId);
               if (item.groupTypes?.includes(tag as any)) {
                 matchScore += weightGain;
                 matchedTags.push(getQuizOptionLabel(questionId, answerId));
               }
               return;
            }
            if (questionId === 'food-diet') {
               // Dietary needs are non-negotiable: real boolean fields first, text
               // fallback second. Only penalize when the data confirms a miss.
               const dietId = String(answerId).toLowerCase();
               const dietBool: Record<string, string> = { 'halal': 'isHalal', 'vegetarian': 'isVegetarianFriendly', 'alcohol': 'servesAlcohol' };
               const boolKey = dietBool[dietId];
               const dietValue = boolKey ? (item as any)[boolKey] : undefined;
               const dietMatch = dietValue === true
                 || (Array.isArray(item.vibeTags) && item.vibeTags.some((v: string) => v.toLowerCase().includes(dietId)));
               if (dietMatch) {
                 matchScore += weightGain;
                 matchedTags.push(getQuizOptionLabel(questionId, answerId));
               } else if (dietValue === false) {
                 matchScore += missPenalty;
                 missedTags.push(getQuizOptionLabel(questionId, answerId));
               }
               return;
            }
            if (questionId === 'food-cuisine') {
               const cuisineId = String(answerId).toLowerCase();
               // Structured cuisineTags first (canonical schema), then foodStyles as fallback
               const structuredCuisine = Array.isArray((item as any).cuisineTags)
                 ? (item as any).cuisineTags.map((s: any) => String(s).toLowerCase())
                 : null;
               if (structuredCuisine) {
                 if (structuredCuisine.includes(cuisineId)) {
                   matchScore += weightGain;
                   matchedTags.push(getQuizOptionLabel(questionId, answerId));
                 }
                 return;
               }
               const foodStylesArr = Array.isArray((item as any).foodStyles) ? (item as any).foodStyles.map((s: any) => String(s).toLowerCase()) : [];
               let cuisineMatch = false;
               if (cuisineId === 'moroccan-traditional') {
                 cuisineMatch = foodStylesArr.includes('moroccan') || foodStylesArr.includes('berber');
               } else if (cuisineId === 'international') {
                 cuisineMatch = foodStylesArr.some((s: string) => ['international', 'italian', 'french', 'spanish', 'european', 'asian', 'pizza', 'fusion'].includes(s));
               } else if (cuisineId === 'cafe-pastry') {
                 cuisineMatch = foodStylesArr.some((s: string) => ['cafe', 'bakery', 'patisserie'].includes(s));
               } else if (cuisineId === 'seafood') {
                 cuisineMatch = foodStylesArr.includes('seafood');
               }
               if (cuisineMatch) {
                 matchScore += weightGain;
                 matchedTags.push(getQuizOptionLabel(questionId, answerId));
               }
               return;
            }
            if (questionId === 'sleep-location') {
               // Location feel: match against the real location data on stay listings.
               // Structured locationFeel tag first (canonical schema), then real
               // location fields (nearMedina/locationSummary/neighborhood) as fallback.
               const locId = String(answerId).toLowerCase();
               const structuredFeel = (item as any).locationFeel ? String((item as any).locationFeel).toLowerCase() : null;
               const locSummary = String((item as any).locationSummary || '').toLowerCase();
               const hood = String((item as any).neighborhood || '').toLowerCase();
               let locMatch = false;
               if (structuredFeel) {
                 locMatch = structuredFeel === locId;
               } else {
                 const isMedinaPlace = (item as any).nearMedina === true || locSummary.includes('medina') || hood.includes('medina');
                 const isNaturePlace = ['countryside', 'nature', 'desert', 'mountain', 'oasis', 'agricultural'].some(k => locSummary.includes(k));
                 if (locId.includes('medina')) locMatch = isMedinaPlace;
                 else if (locId === 'countryside' || locId.includes('nature')) locMatch = isNaturePlace;
                 else if (locId === 'ville-nouvelle') locMatch = !isMedinaPlace && !isNaturePlace;
               }
               if (locMatch) {
                 matchScore += weightGain;
                 matchedTags.push(getQuizOptionLabel(questionId, answerId));
               }
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
              matchScore += weightGain;
              matchedTags.push(getQuizOptionLabel(questionId, answerId));
            } else {
              const vibeTags = Array.isArray(item.vibeTags) ? item.vibeTags : [];
              const foodStyles = Array.isArray((item as any).foodStyles) ? (item as any).foodStyles : [];
              const experienceTypes = Array.isArray((item as any).experienceTypes) ? (item as any).experienceTypes : [];
              const mealTypes = Array.isArray((item as any).mealTypes) ? (item as any).mealTypes : [];
              const amenities = Array.isArray((item as any).amenities) ? (item as any).amenities : [];

              const searchableText = [
                item.name, item.title, item.description, item.type, item.category, (item as any).cuisine,
                String((item as any).neighborhood || ''), String((item as any).locationSummary || ''),
                ...vibeTags, ...foodStyles, ...experienceTypes, ...mealTypes, ...amenities
              ].filter(Boolean).map((t: any) => t.toString().toLowerCase());
              
              const answerParts = answerId.toString().toLowerCase().split('-')
                .filter((part: string) => part.length >= 4 && !QUIZ_STOP_WORDS.has(part));
              const hasMatch = answerParts.length > 0
                ? answerParts.some((part: string) => searchableText.some((text: string) => text.includes(part)))
                : searchableText.some((text: string) => text.includes(answerId.toString().toLowerCase()));
              if (hasMatch) {
                matchScore += weightGain;
                matchedTags.push(getQuizOptionLabel(questionId, answerId));
              }
            }
        });
      });

      // Clamp so hard-filter penalties can never push the score below 0
      const matchPercentage = totalCriteria > 0
        ? Math.max(0, Math.min(100, Math.round((matchScore / totalCriteria) * 100)))
        : 100;
      
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
        // Unknown opening hours rank between closed and confirmed-open,
        // so "open now" places stay ahead of places with no hours data
        openBoost = 5;
      }

      const sortedScore = matchPercentage + openBoost;
      return { ...item, matchPercentage, sortedScore, matchReasons: matchedTags.slice(0, 4), matchMisses: missedTags.slice(0, 2) };
    });

    if (sortBy === 'rating') {
      return [...scored].sort((a, b) => ((b as any).googleRating || (b as any).rating || 0) - ((a as any).googleRating || (a as any).rating || 0));
    } else if (sortBy === 'verified') {
      return [...scored].sort((a, b) => ((b as any).isVerified ? 1 : 0) - ((a as any).isVerified ? 1 : 0));
    } else if (sortBy === 'price_low') {
      return [...scored].sort((a: any, b: any) => {
        const pA = a.priceMultiplier !== undefined ? priceRank(a.priceMultiplier) : priceRank(a.priceLevel);
        const pB = b.priceMultiplier !== undefined ? priceRank(b.priceMultiplier) : priceRank(b.priceLevel);
        return pA - pB;
      });
    } else if (sortBy === 'price_high') {
      return [...scored].sort((a: any, b: any) => {
        const pA = a.priceMultiplier !== undefined ? priceRank(a.priceMultiplier) : priceRank(a.priceLevel);
        const pB = b.priceMultiplier !== undefined ? priceRank(b.priceMultiplier) : priceRank(b.priceLevel);
        return pB - pA;
      });
    }

    return scored.sort((a, b) => b.sortedScore - a.sortedScore);
  }, [realListings, filters, quizAnswers, archetype, secondaryArchetype, sortBy]);

  // Live result count per quick-filter chip - prevents 0-match dead ends
  const chipResultCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const chip of getAllChipsForCategory(focusKey)) {
      counts[chip.id] = recommendations.filter(item => chipMatchesItem(item, chip)).length;
    }
    return counts;
  }, [recommendations, focusKey]);

  // Per-answer quick edit: every quiz answer as an editable pill, so adjusting
  // one answer never requires retaking the whole quiz
  const quizAnswerPills = useMemo(() => {
    const pills: { questionId: string; label: string; question: QuizQuestion; onRemove: () => void }[] = [];
    const allQuestions = getAllQuizQuestions();
    Object.entries(quizAnswers).forEach(([questionId, answerValue]) => {
      if (!answerValue || (Array.isArray(answerValue) && answerValue.length === 0)) return;
      const question = allQuestions.find(q => q.id === questionId);
      if (!question) return;
      const ids = Array.isArray(answerValue) ? answerValue : [answerValue];
      const labels = ids.map((id: any) => getQuizOptionLabel(questionId, String(id))).join(' + ');
      pills.push({
        questionId,
        label: labels,
        question,
        onRemove: () => {
          setQuizAnswer(questionId, Array.isArray(answerValue) ? [] : null);
          // Also clear auto-filters that came from this answer
          if (questionId === 'base-group') setFilter('isKidFriendly', false);
          if (questionId === 'food-diet') setFilter('isHalal', false);
        },
      });
    });
    return pills;
  }, [quizAnswers, setQuizAnswer, setFilter]);

  const handleViewDetails = (itemId: string, itemIdx?: number) => {
    setOmitGoogleImage((itemIdx !== undefined ? itemIdx : 0) >= 5);
    setActiveItem(itemId);
    // Things To Do opens the dedicated named page (/things/:city/:slug)
    if (activeCategory === 'things-to-do') {
      const activitySlug = getActivityById(itemId)?.slug || itemId;
      navigate(`/things/${(city || 'marrakech').toLowerCase()}/${activitySlug}`);
      return;
    }
    // Eat / Sleep / Shopping open their own name-based place page
    // (/place/:city/:category/:place-name) — shareable + indexable
    const placeCategory = normalizePlaceCategory(activeCategory);
    if (placeCategory) {
      const placeUrl = getPlaceUrlById(placeCategory, itemId);
      if (placeUrl) {
        navigate(placeUrl);
        return;
      }
    }
    // Fallback: legacy in-app detail view
    pushView('detail');
    navigate(`/finder/${(city || 'marrakech').toLowerCase()}/${itemId}`);
  };

  // Every active filter as a removable pill — powers the tile preview AND the pill row,
  // so no active filter can ever be invisible once the filter window closes
  const activeFilterPills = useMemo(() => {
    const pills: { key: string; label: string; onRemove: () => void }[] = [];
    if (filters.isVegetarian) pills.push({ key: 'isVegetarian', label: '🥗 Vegetarian', onRemove: () => setFilter('isVegetarian', false) });
    if (filters.isHalal) pills.push({ key: 'isHalal', label: '🌙 Halal', onRemove: () => setFilter('isHalal', false) });
    if (filters.servesAlcohol) pills.push({ key: 'servesAlcohol', label: '🍷 Serves Alcohol', onRemove: () => setFilter('servesAlcohol', false) });
    if (filters.hasPool) pills.push({ key: 'hasPool', label: '🏊 Pool', onRemove: () => setFilter('hasPool', false) });
    if (filters.hasAC) pills.push({ key: 'hasAC', label: '❄️ A/C', onRemove: () => setFilter('hasAC', false) });
    if (filters.isVerified) pills.push({ key: 'isVerified', label: '🛡️ Verified', onRemove: () => setFilter('isVerified', false) });
    if (filters.isFixedPrice) pills.push({ key: 'isFixedPrice', label: '🏷️ Fixed Price', onRemove: () => setFilter('isFixedPrice', false) });
    if (filters.isNoHassle) pills.push({ key: 'isNoHassle', label: '😌 Low Pressure', onRemove: () => setFilter('isNoHassle', false) });
    if (filters.isKidFriendly) pills.push({ key: 'isKidFriendly', label: '👶 Kid Friendly', onRemove: () => setFilter('isKidFriendly', false) });
    if (filters.isWheelchairAccessible) pills.push({ key: 'isWheelchairAccessible', label: '♿ Accessible', onRemove: () => setFilter('isWheelchairAccessible', false) });
    if (filters.isOpenNow) pills.push({ key: 'isOpenNow', label: `🕐 Open Now`, onRemove: () => setFilter('isOpenNow', false) });
    if (filters.rating > 0) pills.push({ key: 'rating', label: `⭐ ${filters.rating}★+`, onRemove: () => setFilter('rating', 0) });
    (filters.vibes || []).forEach((vibe: string) => {
      const tagInfo = TAG_REGISTRY[vibe];
      pills.push({
        key: `vibe-${vibe}`,
        label: `${tagInfo?.icon ? tagInfo.icon + ' ' : ''}${tagInfo?.label || vibe.replace(/-/g, ' ')}`,
        onRemove: () => setFilter('vibes', (filters.vibes || []).filter((v: string) => v !== vibe)),
      });
    });
    return pills;
  }, [filters, setFilter]);

  const clearAllFilters = () => {
    setFilter('isOpenNow', false);
    setFilter('vibes', []);
    setFilter('rating', 0);
    setFilter('isVegetarian', false);
    setFilter('isHalal', false);
    setFilter('servesAlcohol', false);
    setFilter('hasPool', false);
    setFilter('hasAC', false);
    setFilter('isVerified', false);
    setFilter('isFixedPrice', false);
    setFilter('isNoHassle', false);
    setFilter('isKidFriendly', false);
    setFilter('isWheelchairAccessible', false);
    useExploreStore.setState({ quizAnswers: {} });
  };

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
        <button 
          onClick={() => {
            setCity('marrakech');
            const cat = activeCategory || 'sleep';
            navigate(`/finder/marrakech/${cat}${location.search}`);
          }} 
          className="px-6 py-3 bg-[#C2613C] text-white rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#C2613C]/90 cursor-pointer"
        >
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
      <SEO
        title={activeSearchIntent ? activeSearchIntent.seoTitle(currentCityName) : `Places we found for you in ${currentCityName}`}
        description={activeSearchIntent ? activeSearchIntent.seoDescription(currentCityName) : `Handpicked places and local recommendations in ${currentCityName}.`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">

        {/* ─── Compact Header Zone ─────────────────────────────── */}
        <div className="flex items-center gap-4 mb-3">
          <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-[#EAE1D3] shadow-sm">
            <img src={getHeroImage(activeCategory)} alt="" className="w-full h-full object-cover" loading="eager" {...({ fetchpriority: 'high' } as any)} />
          </div>
          <div className="min-w-0">
            <h1 className="font-serif text-xl sm:text-2xl text-stone-900 tracking-tight leading-tight truncate">
              {activeSearchIntent ? (
                <span>{activeSearchIntent.headerTitle(currentCityName)}</span>
              ) : (
                <span>Places we found for you in <span className="text-[#C2613C]">{currentCityName}</span></span>
              )}
            </h1>
            <p className="text-stone-500 text-xs font-medium mt-0.5">
              {activeSearchIntent ? (
                <span>Handpicked for <strong className="text-stone-700">{activeSearchIntent.label}</strong> · <span className="font-bold text-stone-700">{recommendations.length} places</span></span>
              ) : (
                <span>Handpicked from your quiz · <span className="font-bold text-stone-700">{recommendations.length} places</span></span>
              )}
            </p>
          </div>
        </div>

        {/* ─── "People Also Search For" Tag Bar (Scrollable via touch & mouse drag with arrow) ─── */}
        <PeopleSearchForBar
          popularIntents={popularIntents}
          activeFeatureSlug={activeFeatureSlug}
          onSelectIntent={handleSelectIntent}
        />

        {/* Preferences Control Strip Bar */}
        <div className="relative z-30 mx-4 md:mx-8 mt-5 mb-6 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-[#E7DFD3] shadow-md flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full md:flex-1 relative">
              {/* City Selector Tile */}
              <button
                type="button"
                onClick={() => {
                  setShowLocationModal(!showLocationModal);
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

              {/* Filters Tile */}
              <button
                type="button"
                onClick={() => {
                  setShowFilters(true);
                  setShowLocationModal(false);
                }}
                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#FAF7F2] transition-colors cursor-pointer border border-transparent hover:border-[#E8E0D2] text-left w-full"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF3EA] flex items-center justify-center shrink-0 text-[#C2613C]">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">MORE FILTERS</div>
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <span>Price, Ratings & Amenities</span>
                    {(activeFilterPills.length + quizAnswerPills.length) > 0 && (
                      <span className="text-[10px] font-extrabold bg-[#C2613C] text-white px-2 py-0.5 rounded-full leading-none">
                        {activeFilterPills.length + quizAnswerPills.length} active
                      </span>
                    )}
                  </div>
                </div>
                <ChevronDown className={cn("w-3.5 h-3.5 text-stone-400 shrink-0 transition-transform", showFilters && "rotate-180")} />
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

        {/* Active Filter Chips & Explore Bar */}
        <div className="space-y-4 mb-5">
          {/* Unified Active Filters Row — only visible when active filters or quiz answers exist */}
          {(activeFilterPills.length > 0 || quizAnswerPills.length > 0) && (
            <div className="flex flex-wrap items-center gap-2 p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#EADBCE] shadow-2xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#C2613C]" />
                Active Filters:
              </span>

              {/* Quiz Answer Pills */}
              {quizAnswerPills.map((pill) => (
                <div key={pill.questionId} className="relative">
                  <span
                    onClick={() => setEditingQuestionId(editingQuestionId === pill.questionId ? null : pill.questionId)}
                    className="px-2.5 py-1 bg-[#FAF3EA] border border-[#D9CCA8] rounded-full text-xs font-bold text-stone-800 flex items-center gap-1.5 cursor-pointer hover:border-[#C2613C] transition-all"
                    title="Click to change quiz answer"
                  >
                    <span>{pill.label}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); pill.onRemove(); }}
                      className="hover:text-[#C2613C] p-0.5 cursor-pointer text-stone-400"
                      aria-label={`Remove ${pill.label}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>

                  {/* Mini-selector: switch this answer and instantly re-score */}
                  <AnimatePresence>
                    {editingQuestionId === pill.questionId && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-full left-0 mt-1 z-40 bg-white rounded-xl shadow-xl border border-[#E7DFD3] p-2 min-w-[230px] space-y-1"
                      >
                        <div className="text-[10px] font-black uppercase tracking-wider text-stone-400 px-2 pb-1">{pill.question.question}</div>
                        {pill.question.options.map(opt => {
                          const currentValue = quizAnswers[pill.questionId];
                          const currentIds = Array.isArray(currentValue) ? currentValue : [currentValue];
                          const isSelected = pill.question.multiSelect
                            ? (currentIds || []).includes(opt.id)
                            : currentValue === opt.id;
                          return (
                            <button
                              key={opt.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (pill.question.multiSelect) {
                                  const arr = Array.isArray(currentValue) ? [...currentValue] : [];
                                  const next = arr.includes(opt.id) ? arr.filter(v => v !== opt.id) : [...arr, opt.id];
                                  setQuizAnswer(pill.questionId, next);
                                } else {
                                  setQuizAnswer(pill.questionId, opt.id);
                                  setEditingQuestionId(null);
                                }
                              }}
                              className={cn(
                                "w-full text-left px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer",
                                isSelected ? "bg-[#C9A84C] text-white" : "text-stone-600 hover:bg-[#FAF3EA]"
                              )}
                            >
                              {opt.icon && <span>{opt.icon}</span>}
                              <span>{opt.label}</span>
                              {isSelected && <Check className="w-3 h-3 ml-auto" />}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Manual Active Filter Pills */}
              {activeFilterPills.map((pill) => (
                <span
                  key={pill.key}
                  className="px-2.5 py-1 bg-white border border-[#E2D4C2] rounded-full text-xs font-medium text-stone-800 flex items-center gap-1.5 shadow-2xs"
                >
                  <span>{pill.label}</span>
                  <button
                    onClick={pill.onRemove}
                    className="hover:text-[#C2613C] p-0.5 cursor-pointer text-stone-400"
                    aria-label={`Remove ${pill.label}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}

              {/* Clear All Button */}
              <button
                onClick={clearAllFilters}
                className="text-xs font-bold text-stone-400 hover:text-[#C2613C] transition-colors ml-auto px-2 py-1 cursor-pointer"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Explore By Type Chips */}
          <div className="pt-1">
            <FilterChipBar category={activeCategory || 'things-to-do'} resultCounts={chipResultCounts} />
          </div>
        </div>

        {/* Listings Grid */}
        <div className="space-y-4">
          {recommendations.slice(0, visibleCount).map((item, idx) => {
            const isTopPick = idx === 0;

            // Real stored data for this card: live open status, safety level & Savvy intel
            const placeIntel = SavvyScoreEngine.getPlaceIntel(item.id);
            let liveStatus: ReturnType<typeof getShopStatus> | null = null;
            try {
              if (item.openingHours) {
                liveStatus = getShopStatus(item.openingHours, item.fridayHours, item.ramadanHours);
              } else if (item.openTime && item.closeTime) {
                liveStatus = getShopStatus([{ day: 'Daily', hours: `${item.openTime} - ${item.closeTime}` }]);
              }
            } catch {
              liveStatus = null;
            }

            // Match quality badge (95-100 Perfect, 75-94 Great, 50-74 Good, below 50 none)
            const matchPct = (item as any).matchPercentage as number | undefined;
            const matchBadge = typeof matchPct === 'number' && matchPct >= 50
              ? matchPct >= 95
                ? { label: 'Perfect Match', emoji: '🟢', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200' }
                : matchPct >= 75
                  ? { label: 'Great Match', emoji: '🟡', cls: 'bg-[#C9A84C]/10 text-[#8A6D1F] border-[#C9A84C]/30' }
                  : { label: 'Good Match', emoji: '🟠', cls: 'bg-amber-50 text-amber-700 border-amber-200' }
              : null;

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
                  {/* Left Column: No-Image Slot — category icon + Google Maps photos link */}
                  <div className="w-full md:w-[300px] lg:w-[320px] h-52 md:h-auto shrink-0 relative rounded-xl overflow-hidden
                    bg-gradient-to-br from-[#F5EDE4] to-[#EDE0D0] border border-[#E2D4C2]
                    flex flex-col items-center justify-center gap-3 p-5 text-center min-h-[190px]">

                    {/* Subtle geometric texture */}
                    <div className="absolute inset-0 bg-[radial-gradient(#C9A84C_0.5px,transparent_0.5px)] [background-size:18px_18px] opacity-10 pointer-events-none" />

                    {/* Category Icon */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white/80 border border-[#D9C8B0] flex items-center justify-center shadow-sm">
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

                    {/* Neighborhood label */}
                    <span className="relative z-10 text-[11px] font-bold text-[#8C7A6B] uppercase tracking-wider line-clamp-1">
                      {item.neighborhood || (activeCategory === 'food' ? 'Dining Spot' : activeCategory === 'sleep' ? 'Stay' : activeCategory === 'shopping' ? 'Artisan Shop' : 'Attraction')}
                    </span>

                    {/* See photos link */}
                    <a
                      href={item.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${item.name || item.title} ${item.city || city || ''} Morocco`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#29231F] text-[11px] font-bold border border-[#D9C8B0] hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-200 cursor-pointer"
                    >
                      <MapPin className="w-3 h-3 text-[#C2613C]" />
                      <span>See photos on Google Maps</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
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
                          {/* Top Pick Badge */}
                          {isTopPick && (
                            <div className="px-2.5 py-1 bg-[#D99A30] text-white rounded-md text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-sm shrink-0">
                              <Star className="w-3 h-3 fill-current" />
                              <span>TOP PICK</span>
                            </div>
                          )}
                          {/* Rating Badge — only when a real rating exists */}
                          {(item.googleRating || item.rating) ? (
                            <div className="flex items-center gap-1 bg-[#FAF2E1] border border-[#E8DAAA] px-2.5 py-1 rounded-full text-stone-800 text-xs font-bold">
                              <Star className="w-3.5 h-3.5 text-[#D99A30] fill-current" />
                              <span>{item.googleRating || item.rating}</span>
                              {item.reviewCount ? (
                                <span className="text-stone-500 font-medium">· {item.reviewCount >= 1000 ? `${(item.reviewCount / 1000).toFixed(1)}k` : item.reviewCount}</span>
                              ) : null}
                            </div>
                          ) : null}

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

                      {/* Location & Trust Row — real stored data only */}
                      <div className="flex items-center flex-wrap gap-x-2 gap-y-1.5 text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-3">
                        {matchBadge && (
                          <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold normal-case tracking-normal border", matchBadge.cls)}>
                            {matchBadge.emoji} {matchBadge.label}
                          </span>
                        )}
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span>{(item.neighborhood || 'Medina').toUpperCase()}</span>
                        {liveStatus && liveStatus.status !== 'unknown' && (
                          <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold normal-case tracking-normal border", STATUS_CHIP_STYLES[liveStatus.color] || STATUS_CHIP_STYLES.stone)}>
                            <Clock className="w-3 h-3" />
                            {liveStatus.label}
                          </span>
                        )}
                        {/* Trust signal: one chip max - Savvy score when available, otherwise Safety level */}
                        {placeIntel ? (
                          <SavvyBadge placeId={item.id} size="sm" showLabel={false} />
                        ) : item.safetyLevel ? (
                          <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold normal-case tracking-normal border", item.safetyLevel >= 4 ? "bg-emerald-50 text-emerald-700 border-emerald-200" : item.safetyLevel === 3 ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-red-50 text-red-700 border-red-200")}>
                            <Shield className="w-3 h-3" />
                            Safety {item.safetyLevel}/5
                          </span>
                        ) : null}
                      </div>

                      {/* Description */}
                      <p className="text-stone-600 text-sm leading-relaxed line-clamp-2 mb-4 font-sans">
                        {item.description}
                      </p>

                      {/* Why this matched - expandable transparency */}
                      {((item as any).matchReasons?.length || 0) > 0 && (
                        <div className="mb-4">
                          <button
                            onClick={(e) => { e.stopPropagation(); setExpandedWhyId(expandedWhyId === item.id ? null : item.id); }}
                            className="text-[11px] font-bold text-[#C2613C] hover:text-[#A34E2F] transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <Sparkles className="w-3 h-3" />
                            Why this matched
                            <ChevronDown className={cn("w-3 h-3 transition-transform", expandedWhyId === item.id && "rotate-180")} />
                          </button>
                          <AnimatePresence>
                            {expandedWhyId === item.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-2 flex flex-wrap gap-1.5">
                                  {((item as any).matchReasons as string[]).map((r: string) => (
                                    <span key={r} className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                      ✓ {r}
                                    </span>
                                  ))}
                                  {(((item as any).matchMisses || []) as string[]).map((r: string) => (
                                    <span key={'miss-' + r} className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-stone-100 text-stone-500 border border-stone-200">
                                      ✗ {r}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
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

                      {/* Directions + Detail Navigation */}
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={item.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${item.name || item.title} ${currentCityName} Morocco`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#C2613C] text-stone-700 hover:text-white text-[11px] font-bold border border-[#E2D6C4] hover:border-[#C2613C] transition-all cursor-pointer"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>Directions</span>
                        </a>
                        <div className="w-8 h-8 rounded-full bg-[#FAF3EA] group-hover:bg-[#C2613C] border border-[#E2D6C4] group-hover:border-[#C2613C] flex items-center justify-center transition-all">
                          <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-white transition-colors" />
                        </div>
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

        {/* Quiz Re-engagement — small quiet link */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => handleEditVibe()}
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-[#C2613C] transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Not finding what you want? Retake the quiz</span>
          </button>
        </div>
      </div>

      {/* Location Picker Modal */}
      <AnimatePresence>
        {showLocationModal && (
          <div 
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs z-[100] overflow-y-auto"
            onClick={() => setShowLocationModal(false)}
          >
            <div className="min-h-full flex justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="my-auto bg-white w-full max-w-xl rounded-3xl shadow-2xl p-6 border border-stone-100"
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

                <LocationPicker onAreaSelect={() => setShowLocationModal(false)} />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Filter Modal */}
      <AnimatePresence>
        {showFilters && (
          <FilterPanel
            category={focusKey}
            filters={filters}
            items={recommendations}
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
