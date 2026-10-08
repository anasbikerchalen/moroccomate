import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QuizQuestion, QuizOption, getTagForOptionId, QUIZ_STOP_WORDS } from '../../data/explore/questions';
import PreQuizShortcutBar from './PreQuizShortcutBar';
import { getShortcutsForCategory, getThingsShortcuts, type PreQuizShortcut, type ShortcutBrand } from '../../data/explore/preQuizShortcuts';
import { useParameterStore } from '../../state/parameterStore';
import { 
  Check, 
  Sparkles, 
  Clock, 
  User, 
  Star, 
  Lock, 
  ArrowLeft, 
  ArrowRight, 
  Compass, 
  Mountain, 
  Utensils, 
  Flower2, 
  Landmark,
  ShieldCheck,
  Wand2,
  X
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useExploreStore } from '../../state/exploreStore';
// 🖼️ PENDING IMAGE: single placeholder (kept as a fallback pattern for future options)
import quizPlaceholderPending from '../../assets/images/quizzes/shared/quiz_placeholder_pending.svg';
// 🖼️ Quiz cuisine option images (Gemini-generated, prompts in IMAGE_TASKS.md)
import eatQuizCuisineTraditionalMoroccan from '../../assets/images/quizzes/eat/eat_quiz_cuisine_traditional_moroccan.jpg';
import eatQuizCuisineInternationalFusion from '../../assets/images/quizzes/eat/eat_quiz_cuisine_international_fusion.jpg';
import eatQuizCuisineCafePastry from '../../assets/images/quizzes/eat/eat_quiz_cuisine_cafe_pastry.jpg';
import eatQuizCuisineSeafood from '../../assets/images/quizzes/eat/eat_quiz_cuisine_seafood.jpg';
// 🖼️ Quiz sleep-location option images (Gemini-generated, prompts in IMAGE_TASKS.md)
import sleepQuizLocationMedinaHeart from '../../assets/images/quizzes/sleep/sleep_quiz_location_medina_heart.jpg';
import sleepQuizLocationVilleNouvelle from '../../assets/images/quizzes/sleep/sleep_quiz_location_ville_nouvelle.jpg';
import sleepQuizLocationCountryside from '../../assets/images/quizzes/sleep/sleep_quiz_location_countryside.jpg';

// Smart skip (lite): premium-only options hidden when the traveler chose "Lean"
const PREMIUM_ONLY_OPTION_TAGS = ['fine-dining'];

// ðŸ–¼ï¸ Traditional: multi-generational family couscous Friday in Riad courtyard
import eatQuizTraditional from '../../assets/images/quizzes/eat/eat_quiz_traditional_1786297388220.jpg';
// ðŸ–¼ï¸ Street food: night market grill â€” merguez, kefta, sardines, harissa, steam
import eatQuizStreetFood from '../../assets/images/quizzes/eat/eat_quiz_street_food_1786297402997.jpg';
// ðŸ–¼ï¸ Fine dining: white-tablecloth palace tasting menu, modern Moroccan, edible flowers
import eatQuizFineDining from '../../assets/images/quizzes/eat/eat_quiz_fine_dining_1786297418437.jpg';
// ðŸ–¼ï¸ CafÃ©s & tea: sunlit terrace, thÃ© Ã  la menthe poured high, almond pastries
import eatQuizCafesTea from '../../assets/images/quizzes/eat/eat_quiz_cafes_tea_1786297431722.jpg';
// ðŸ–¼ï¸ Breakfast: mint tea, harcha, msemmen, honey, olives, zellij table
import eatQuizBreakfast from '../../assets/images/quizzes/eat/eat_quiz_breakfast.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Steaming clay tagine with chicken, preserved lemons, and green olives. Soft matte vector style on cream canvas.
import eatQuizLunch from '../../assets/images/quizzes/eat/eat_quiz_lunch.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Rooftop dining table under twilight stars overlooking lit minarets. Soft matte vector style on cream canvas.
import eatQuizDinner from '../../assets/images/quizzes/eat/eat_quiz_dinner.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Plate of gazelle horn pastries and chebakia next to a glass of mint tea. Soft matte vector style on cream canvas.
import eatQuizSnacks from '../../assets/images/quizzes/eat/eat_quiz_snacks.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Freshly grilled kefta skewers with mint sprigs and spice bowls. Soft matte vector style on cream canvas.
import eatQuizHalal from '../../assets/images/quizzes/eat/eat_quiz_halal.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Colorful Moroccan cooked salads (zaalouk, spiced carrots) in zellij bowls. Soft matte vector style on cream canvas.
import eatQuizVeg from '../../assets/images/quizzes/eat/eat_quiz_veg.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Evening rooftop table with chilled drinks and olives facing a sunset sky. Soft matte vector style on cream canvas.
import eatQuizDrinks from '../../assets/images/quizzes/eat/eat_quiz_drinks.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Panoramic medina rooftop lounge with plush floor cushions at sunset. Soft matte vector style on cream canvas.
import eatQuizRooftop from '../../assets/images/quizzes/eat/eat_quiz_rooftop.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Lively Jemaa el-Fnaa street food stall with soft grill smoke. Soft matte vector style on cream canvas.
import eatQuizStreet from '../../assets/images/quizzes/eat/eat_quiz_street.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Ornate Riad dining room with white linen, brass lamps, and candlelight. Soft matte vector style on cream canvas.
import eatQuizFine from '../../assets/images/quizzes/eat/eat_quiz_fine.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Quiet medina alley leading to a cozy doorway menu. Soft matte vector style on cream canvas.
import eatQuizHiddenGem from '../../assets/images/quizzes/eat/eat_quiz_hidden_gem.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Serene Riad courtyard with a marble fountain, rose petals, and horseshoe arches. Soft matte vector style on cream canvas.
import sleepQuizRiad from '../../assets/images/quizzes/sleep/sleep_quiz_riad.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Sunlit boutique hotel room with an arched alcove bed and Berber rug accents. Soft matte vector style on cream canvas.
import sleepQuizHotel from '../../assets/images/quizzes/sleep/sleep_quiz_hotel.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Luxury canvas desert tent with carpets and lanterns under starry dunes. Soft matte vector style on cream canvas.
import sleepQuizDesert from '../../assets/images/quizzes/sleep/sleep_quiz_desert.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Ancient earthen Kasbah fortress nestled against palm trees and Atlas peaks. Soft matte vector style on cream canvas.
import sleepQuizKasbah from '../../assets/images/quizzes/sleep/sleep_quiz_kasbah.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Turquoise swimming pool reflecting carved wooden Riad archways. Soft matte vector style on cream canvas.
import sleepQuizPool from '../../assets/images/quizzes/sleep/sleep_quiz_pool.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Cool bedroom interior with airy white linen curtains blowing in a breeze. Soft matte vector style on cream canvas.
import sleepQuizAc from '../../assets/images/quizzes/sleep/sleep_quiz_ac.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Rooftop lounge canopy facing panoramic city views. Soft matte vector style on cream canvas.
import sleepQuizRooftop from '../../assets/images/quizzes/sleep/sleep_quiz_rooftop.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Tranquil courtyard garden with bougainvillea flowers and a stone fountain. Soft matte vector style on cream canvas.
import sleepQuizQuiet from '../../assets/images/quizzes/sleep/sleep_quiz_quiet.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Cozy daybed with plush pillows, tea tray, and soft warm lighting. Soft matte vector style on cream canvas.
import sleepQuizRelax from '../../assets/images/quizzes/sleep/sleep_quiz_relax.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Traveler backpack and hiking boots leaning against an old stone arch. Soft matte vector style on cream canvas.
import sleepQuizAdventure from '../../assets/images/quizzes/sleep/sleep_quiz_adventure.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Brass key beside an ancient carved wooden medina door. Soft matte vector style on cream canvas.
import sleepQuizCulture from '../../assets/images/quizzes/sleep/sleep_quiz_culture.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Vibrant hostel common lounge with floor cushions and a shared table. Soft matte vector style on cream canvas.
import sleepQuizBudget from '../../assets/images/quizzes/sleep/sleep_quiz_budget.jpg';
import quizCulture from '../../assets/images/quizzes/shared/quiz_culture_1786203267544.jpg';
import quizAdventure from '../../assets/images/quizzes/shared/quiz_adventure_1786203282645.jpg';
import quizRelaxed from '../../assets/images/quizzes/shared/quiz_relaxed_1786203315431.jpg';
import quizFoodie from '../../assets/images/quizzes/shared/quiz_foodie_1786203300781.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Bustling local street food stall with sizzling skewers and fresh bread. Soft matte vector style.
import eatLifestyleLean from '../../assets/images/quizzes/eat/eat_lifestyle_lean_1787150666212.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Charming mid-range Riad courtyard cafe table set with a tagine and tea. Soft matte vector style.
import eatLifestyleBalanced from '../../assets/images/quizzes/eat/eat_lifestyle_balanced_1787150679681.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Elegant fine-dining table in an ornate palace with crystal glasses and candlelight. Soft matte vector style.
import eatLifestylePremium from '../../assets/images/quizzes/eat/eat_lifestyle_premium_1787150690000.jpg';

// ðŸ–¼ï¸ IMAGE PROMPT: Cozy and vibrant backpacker hostel common room with floor cushions and a shared map. Soft matte vector style.
import sleepLifestyleLean from '../../assets/images/quizzes/sleep/sleep_lifestyle_lean_1787150699512.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Beautiful boutique Riad bedroom with carved wooden headboard and soft linens. Soft matte vector style.
import sleepLifestyleBalanced from '../../assets/images/quizzes/sleep/sleep_lifestyle_balanced_1787150709928.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Ultra-luxury palace suite with a private plunge pool and sweeping arched views. Soft matte vector style.
import sleepLifestylePremium from '../../assets/images/quizzes/sleep/sleep_lifestyle_premium_1787150719862.jpg';

// ðŸ–¼ï¸ IMAGE PROMPT: Energetic local flea market stall packed with colorful trinkets and a traveler haggling. Soft matte vector style.
import shopLifestyleLean from '../../assets/images/quizzes/shop/shop_lifestyle_lean_1787150731727.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Curated artisan boutique displaying neatly organized ceramics and leather bags. Soft matte vector style.
import shopLifestyleBalanced from '../../assets/images/quizzes/shop/shop_lifestyle_balanced_1787150742619.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: High-end Moroccan designer showroom with exclusive fashion and bespoke carpets. Soft matte vector style.
import shopLifestylePremium from '../../assets/images/quizzes/shop/shop_lifestyle_premium_1787150755619.jpg';

// ðŸ–¼ï¸ IMAGE PROMPT: Traveler happily walking through public medina streets with a camera and a free map. Soft matte vector style.
import thingsLifestyleLean from '../../assets/images/quizzes/things/things_lifestyle_lean_1787150764964.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Small group tour exploring a historic monument with a local guide pointing at zellij tiles. Soft matte vector style.
import thingsLifestyleBalanced from '../../assets/images/quizzes/things/things_lifestyle_balanced_1787150773724.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Private VIP excursion in a luxury SUV or a serene hot air balloon ride over the Atlas mountains. Soft matte vector style.
import thingsLifestylePremium from '../../assets/images/quizzes/things/things_lifestyle_premium_1787150784925.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Mosaic zellij courtyard with intricate carved cedar wood archways. Soft matte vector style.
import thingsQuizCulture from '../../assets/images/quizzes/things/things_quiz_culture.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Moroccan cooking class setup with tagines, spices, and fresh herbs. Soft matte vector style.
import thingsQuizFoodie from '../../assets/images/quizzes/things/things_quiz_foodie.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Quad bike riding dynamically across golden sand dunes. Soft matte vector style.
import thingsQuizAdventure from '../../assets/images/quizzes/things/things_quiz_adventure.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Traditional steam hammam with copper buckets, soap, and warm arch alcoves. Soft matte vector style.
import thingsQuizWellness from '../../assets/images/quizzes/things/things_quiz_wellness.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Local artisan carving cedar wood in a quiet medina workshop. Soft matte vector style.
import thingsQuizAuthentic from '../../assets/images/quizzes/things/things_quiz_authentic.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Picturesque blue-washed Chefchaouen alley with hanging flower pots. Soft matte vector style.
import thingsQuizInstagrammable from '../../assets/images/quizzes/things/things_quiz_instagrammable.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Shaded courtyard cafe garden with orange trees and cold lemonade. Soft matte vector style.
import thingsQuizRelaxed from '../../assets/images/quizzes/things/things_quiz_relaxed.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Secret wooden door framed by blooming bougainvillea vines. Soft matte vector style.
import thingsQuizHiddenGems from '../../assets/images/quizzes/things/things_quiz_hidden_gems.jpg';

// NEW Things-to-Do images (updated questions)
import thingsQuizHistoryHeritage from '../../assets/images/quizzes/things/things_quiz_history_heritage.jpg';
import thingsQuizFoodCooking from '../../assets/images/quizzes/things/things_quiz_food_cooking.jpg';
import thingsQuizAdventureOutdoors from '../../assets/images/quizzes/things/things_quiz_adventure_outdoors.jpg';
import thingsQuizHammamWellness from '../../assets/images/quizzes/things/things_quiz_hammam_wellness.jpg';
import thingsQuizZenChill from '../../assets/images/quizzes/things/things_quiz_zen_chill.jpg';
import thingsQuizSteadyCurious from '../../assets/images/quizzes/things/things_quiz_steady_curious.jpg';
import thingsQuizFullSend from '../../assets/images/quizzes/things/things_quiz_full_send.jpg';
import thingsQuizLocalGenuine from '../../assets/images/quizzes/things/things_quiz_local_genuine.jpg';
import thingsQuizPhotoWorthy from '../../assets/images/quizzes/things/things_quiz_photo_worthy.jpg';
import thingsQuizEasyUnhurried from '../../assets/images/quizzes/things/things_quiz_easy_unhurried.jpg';
import thingsQuizHiddenGemsNew from '../../assets/images/quizzes/things/things_quiz_hidden_gems.jpg';

// ðŸ–¼ï¸ IMAGE PROMPT: Peaceful courtyard fountain with subtle water ripples. Soft matte vector style.
import thingsQuizZen from '../../assets/images/quizzes/things/things_quiz_zen.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Explorers holding a map in a bustling artisan street. Soft matte vector style.
import thingsQuizModerate from '../../assets/images/quizzes/things/things_quiz_moderate.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: High energy action illustration of a quad bike riding dynamically across golden Moroccan sand dunes at golden hour. Soft matte vector style.
import thingsQuizHighEnergy from '../../assets/images/quizzes/things/things_quiz_adventure.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Historic medina archways with colorful handwoven rugs on balconies. Soft matte vector style.
import thingsQuizMedina from '../../assets/images/quizzes/things/things_quiz_medina.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Terraced green mountain valley with earthen Berber villages. Soft matte vector style.
import thingsQuizNature from '../../assets/images/quizzes/things/things_quiz_nature.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Rolling Sahara sand dunes under golden sunlight. Soft matte vector style.
import thingsQuizDesert from '../../assets/images/quizzes/things/things_quiz_desert.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Blue ocean waves breaking against sea ramparts with seagulls. Soft matte vector style.
import thingsQuizCoastal from '../../assets/images/quizzes/things/things_quiz_coastal.jpg';

// ðŸ–¼ï¸ IMAGE PROMPT: Royal palace gate (Bab Mansour) with grand arches and tilework. Soft matte vector style.
import subCultureHistory from '../../assets/images/quizzes/sub/sub_culture_history.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Black soap bowl, kessa glove, and copper pail in a steam room. Soft matte vector style.
import subWellnessHammam from '../../assets/images/quizzes/sub/sub_wellness_hammam.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Camel caravan walking across golden Erg Chebbi dunes. Soft matte vector style.
import subDesertCamel from '../../assets/images/quizzes/sub/sub_desert_camel.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Camera lens focusing on geometric zellij tile patterns. Soft matte vector style.
import subPhotoArchitecture from '../../assets/images/quizzes/sub/sub_photo_architecture.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Group of friends laughing over mint tea on a Riad terrace. Soft matte vector style.
import subSocialRooftop from '../../assets/images/quizzes/sub/sub_social_rooftop.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Surfer catching a wave in Taghazout under sunny skies. Soft matte vector style.
import subSportSurf from '../../assets/images/quizzes/sub/sub_sport_surf.jpg';

import thingsQuizHistory from '../../assets/images/quizzes/things/things_quiz_history_1786305732379.jpg';
import categoryFoodMatte from '../../assets/images/finder/category_food_matte_1786297062095.jpg';
import categoryStaysMatte from '../../assets/images/finder/category_stays_matte_1786297074546.jpg';
import categoryShopMatte from '../../assets/images/finder/category_shop_vector.svg';
import categoryThingsMatte from '../../assets/images/finder/category_things_vector.svg';

// Phase 2: Mismatched option vector image additions
// ðŸ–¼ï¸ IMAGE PROMPT: Solo traveler with a backpack under a sunny Moroccan arch holding a map. Soft matte vector style on cream canvas.
import quizGroupSolo from '../../assets/images/quizzes/shared/quiz_group_solo_1787149670138.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Family with children enjoying a desert dune excursion together. Soft matte vector style on cream canvas.
import quizGroupFamily from '../../assets/images/quizzes/shared/quiz_group_family_1787149690549.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Romantic couple walking through a lantern-lit medina alley at golden hour. Soft matte vector style on cream canvas.
import quizGroupCouple from '../../assets/images/quizzes/shared/quiz_group_couple_1787149681192.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Four friends sitting on a Riad rooftop sharing mint tea. Soft matte vector style on cream canvas.
import quizGroupFriends from '../../assets/images/quizzes/shared/quiz_group_friends_1787149700805.jpg';

// ðŸ–¼ï¸ IMAGE PROMPT: Solo explorer with a daypack standing at a Kasbah gateway, holding a sketchbook, looking out at desert horizons. Soft matte vector style on cream canvas.
import thingsQuizGroupSolo from '../../assets/images/quizzes/things/things_quiz_group_solo.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Romantic couple on a sunset camel trek, silhouetted against golden Erg Chebbi dunes, sharing a thermos of mint tea. Soft matte vector style on cream canvas.
import thingsQuizGroupCouple from '../../assets/images/quizzes/things/things_quiz_group_couple.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Family with children in a Berber mountain village, kids learning pottery from a local artisan, parents watching with tea. Warm togetherness. Soft matte vector style on cream canvas.
import thingsQuizGroupFamily from '../../assets/images/quizzes/things/things_quiz_group_family.jpg';
// ðŸ–¼ï¸ IMAGE PROMPT: Four friends laughing on a coastal cliff trail, wind in hair, ocean below, backpacks resting on rocks. Soft matte vector style on cream canvas.
import thingsQuizGroupFriends from '../../assets/images/quizzes/things/things_quiz_group_friends.jpg';

import quizSettingCoastal from '../../assets/images/quizzes/shared/quiz_setting_coastal_1786373601008.jpg';
import quizSettingNature from '../../assets/images/quizzes/shared/quiz_setting_nature_1786373613634.jpg';
import quizVibeInstagrammable from '../../assets/images/quizzes/shared/quiz_vibe_instagrammable_1786373630760.jpg';
import shopQuizCeramics from '../../assets/images/quizzes/shop/shop_quiz_ceramics_1787154903745.jpg';
import shopQuizSpices from '../../assets/images/quizzes/shop/shop_quiz_spices_1787154924433.jpg';
import quizEnergyModerate from '../../assets/images/quizzes/shared/quiz_energy_moderate_1786376049746.jpg';
import quizSettingMedina from '../../assets/images/quizzes/shared/quiz_setting_medina_1786376080492.jpg';
import shopQuizSouvenirs from '../../assets/images/quizzes/shop/shop_quiz_souvenirs_1787154837793.jpg';
import shopQuizLeather from '../../assets/images/quizzes/shop/shop_quiz_leather_1787154876149.jpg';

// NEW Shopping images
import shoppingLifestyleLean from '../../assets/images/quizzes/shop/shopping_lifestyle_lean.jpg';
import shoppingLifestyleBalanced from '../../assets/images/quizzes/shop/shopping_lifestyle_balanced.jpg';
import shoppingLifestylePremium from '../../assets/images/quizzes/shop/shopping_lifestyle_premium.jpg';
import shoppingQuizGroupSolo from '../../assets/images/quizzes/shop/shopping_quiz_group_solo.jpg';
import shoppingQuizGroupCouple from '../../assets/images/quizzes/shop/shopping_quiz_group_couple.jpg';
import shoppingQuizGroupFamily from '../../assets/images/quizzes/shop/shopping_quiz_group_family.jpg';
import shoppingQuizGroupFriends from '../../assets/images/quizzes/shop/shopping_quiz_group_friends.jpg';
import shoppingQuizSouvenirsNew from '../../assets/images/quizzes/shop/shopping_quiz_souvenirs.jpg';
import shoppingQuizLeatherNew from '../../assets/images/quizzes/shop/shopping_quiz_leather.jpg';
import shoppingQuizCeramicsNew from '../../assets/images/quizzes/shop/shopping_quiz_ceramics.jpg';
import shoppingQuizSpicesNew from '../../assets/images/quizzes/shop/shopping_quiz_spices.jpg';
import shoppingCategoryFallback from '../../assets/images/quizzes/shop/shopping_category_fallback.jpg';


// Task 5: Cities & Path-Specific Quiz Images
import citiesQuizCoastal from '../../assets/images/quizzes/cities/cities_quiz_coastal.jpg';
import citiesQuizHeritage from '../../assets/images/quizzes/cities/cities_quiz_heritage.jpg';
import citiesQuizWilderness from '../../assets/images/quizzes/cities/cities_quiz_wilderness.jpg';
import citiesQuizSlowActive from '../../assets/images/quizzes/cities/cities_quiz_slow_active.jpg';
import citiesQuizHighEnergy from '../../assets/images/quizzes/cities/cities_quiz_high_energy.jpg';
import citiesQuizStructuredCalm from '../../assets/images/quizzes/cities/cities_quiz_structured_calm.jpg';
import pathFtQuick from '../../assets/images/quizzes/path/path_ft_quick.jpg';
import pathFtGrand from '../../assets/images/quizzes/path/path_ft_grand.jpg';
import pathNomadWorkspace from '../../assets/images/quizzes/path/path_nomad_workspace.jpg';
import pathLuxuryPalace from '../../assets/images/quizzes/path/path_luxury_palace.jpg';

interface CategoryQuizProps {
  questions: QuizQuestion[];
  onComplete: (answers: Record<string, any>) => void;
  onBack?: () => void;
  matchCount?: number;
  listings?: any[];
  categoryId?: string;
}

const getOptionImage = (option: QuizOption, questionId: string, stepIndex: number, categoryId?: string) => {
  const id = (option.id || '').toLowerCase();
  const label = (option.label || '').toLowerCase();
  const tag = (option.tag || '').toLowerCase();

  // 1. Shared Context Questions (MUST be at the absolute top so categoryId doesn't intercept them!)
  if (questionId === 'base-group' || id === 'solo' || id === 'couple' || id === 'family' || id === 'friends') {
    const isThings = categoryId === 'things' || categoryId === 'things-to-do' || categoryId === 'visit' || categoryId === 'activities';
    const isShop = categoryId === 'shopping' || categoryId === 'shop';
    if (isThings) {
      if (id === 'solo' || id.includes('solo')) return thingsQuizGroupSolo;
      if (id === 'couple' || id.includes('couple')) return thingsQuizGroupCouple;
      if (id === 'family' || id.includes('family')) return thingsQuizGroupFamily;
      if (id === 'friends' || id.includes('friends')) return thingsQuizGroupFriends;
    }
    if (isShop) {
      if (id === 'solo' || id.includes('solo')) return shoppingQuizGroupSolo;
      if (id === 'couple' || id.includes('couple')) return shoppingQuizGroupCouple;
      if (id === 'family' || id.includes('family')) return shoppingQuizGroupFamily;
      if (id === 'friends' || id.includes('friends')) return shoppingQuizGroupFriends;
    }
    if (id === 'solo' || id.includes('solo')) return quizGroupSolo;
    if (id === 'couple' || id.includes('couple')) return quizGroupCouple;
    if (id === 'family' || id.includes('family')) return quizGroupFamily;
    if (id === 'friends' || id.includes('friends')) return quizGroupFriends;
  }

  if (questionId === 'base-lifestyle' || id === 'lean' || id === 'balanced' || id === 'premium' || id.includes('spending') || id.includes('style')) {
    const isFood = categoryId === 'food' || categoryId === 'eat';
    const isSleep = categoryId === 'sleep' || categoryId === 'stay';
    const isShop = categoryId === 'shopping' || categoryId === 'shop';

    if (id === 'lean' || id.includes('lean') || id.includes('budget')) {
      if (isFood) return eatLifestyleLean;
      if (isSleep) return sleepLifestyleLean;
      if (isShop) return shoppingLifestyleLean;
      return thingsLifestyleLean;
    }
    if (id === 'balanced' || id.includes('balanced')) {
      if (isFood) return eatLifestyleBalanced;
      if (isSleep) return sleepLifestyleBalanced;
      if (isShop) return shoppingLifestyleBalanced;
      return thingsLifestyleBalanced;
    }
    if (id === 'premium' || id.includes('premium') || id.includes('luxury')) {
      if (isFood) return eatLifestylePremium;
      if (isSleep) return sleepLifestylePremium;
      if (isShop) return shoppingLifestylePremium;
      return thingsLifestylePremium;
    }
  }

  // 2. Shopping Quiz Options (Question 5.1: shop-target) â€” NEW images
  if (questionId === 'shop-target' || id === 'souvenirs' || id === 'leather' || id === 'ceramics' || id === 'spices') {
    if (id === 'souvenirs' || id.includes('souvenir') || label.includes('souvenir') || label.includes('gift')) return shoppingQuizSouvenirsNew;
    if (id === 'leather' || id.includes('leather') || id.includes('textile') || label.includes('leather') || label.includes('rug')) return shoppingQuizLeatherNew;
    if (id === 'ceramics' || id.includes('ceramic') || id.includes('decor') || label.includes('pottery') || label.includes('ceramic')) return shoppingQuizCeramicsNew;
    if (id === 'spices' || id.includes('spice') || id.includes('oil') || label.includes('spice') || label.includes('argan')) return shoppingQuizSpicesNew;
  }

  // 3. Cities Quiz Options (Question 6.1: q1-landscape & Question 6.2: q2-energy)
  if (questionId === 'q1-landscape' || id === 'ocean-wind' || id === 'ancient-stone' || id === 'desert-silence' || id === 'coastal' || id === 'heritage' || id === 'wilderness') {
    if (id === 'ocean-wind' || id === 'coastal' || id.includes('coastal') || label.includes('ocean') || label.includes('coastal')) return citiesQuizCoastal;
    if (id === 'ancient-stone' || id === 'heritage' || id.includes('heritage') || label.includes('stone') || label.includes('medina')) return citiesQuizHeritage;
    if (id === 'desert-silence' || id === 'wilderness' || id.includes('wilderness') || label.includes('desert') || label.includes('peak')) return citiesQuizWilderness;
  }

  if (questionId === 'q2-energy' || id === 'slow-active' || id === 'high-immersion' || id === 'structured-calm') {
    if (id === 'slow-active' || id.includes('slow') || label.includes('slow')) return citiesQuizSlowActive;
    if (id === 'high-immersion' || id.includes('immersion') || label.includes('high')) return citiesQuizHighEnergy;
    if (id === 'structured-calm' || id.includes('calm') || label.includes('structured') || label.includes('calm')) return citiesQuizStructuredCalm;
  }

  // Path Specific Options
  if (id === 'ft-quick' || id === '1-5' || label.includes('3-5') || label.includes('Quick') || label.includes('1-5')) return pathFtQuick;
  if (id === 'ft-grand' || id === '10+' || label.includes('Grand') || label.includes('10+')) return pathFtGrand;
  if (id === 'nomad' || label.includes('Nomad') || label.includes('Workspace')) return pathNomadWorkspace;
  if (id === 'luxury' || label.includes('Luxury') || label.includes('Palace')) return pathLuxuryPalace;

  // 4. Sport & Gyms Sub-Quiz (Sub-Quiz 4.6)
  if (questionId === 'sport' || id === 'surf-kitesurf' || id === 'hiking-trek' || id === 'climbing-adventure' || id === 'desert-sport' || id === 'water-sport' || id === 'horse-ride') {
    if (id === 'surf-kitesurf' || id.includes('surf') || label.includes('surf')) return subSportSurf;
    if (id === 'hiking-trek' || id.includes('hiking') || id.includes('trek') || label.includes('hik') || label.includes('trek')) return thingsQuizHighEnergy;
    if (id === 'climbing-adventure' || id.includes('climb') || label.includes('climb')) return thingsQuizAdventure;
    if (id === 'desert-sport' || id.includes('sandboard') || id.includes('desert-sport') || label.includes('sandboard') || label.includes('dune')) return thingsQuizDesert;
    if (id === 'water-sport' || id.includes('water') || id.includes('kayak') || label.includes('water') || label.includes('kayak')) return thingsQuizCoastal;
    if (id === 'horse-ride' || id.includes('horse') || label.includes('horse') || label.includes('ride')) return thingsQuizAdventure;
  }

  // 5. Social Sub-Quiz (Sub-Quiz 4.5)
  if (questionId === 'social' || id === 'market-chaos' || id === 'rooftop-drinks' || id === 'live-music' || id === 'cooking-social') {
    if (id === 'market-chaos' || id.includes('market') || id.includes('chaos') || label.includes('souk') || label.includes('market')) return thingsQuizMedina;
    if (id === 'rooftop-drinks' || id.includes('rooftop') || label.includes('rooftop') || label.includes('tea')) return subSocialRooftop;
    if (id === 'live-music' || id.includes('music') || id.includes('live') || label.includes('music') || label.includes('show')) return thingsQuizCulture;
    if (id === 'cooking-social' || id.includes('cooking') || id.includes('dining') || label.includes('cooking') || label.includes('tagine')) return thingsQuizFoodie;
  }

  // 6. Photography Sub-Quiz (Sub-Quiz 4.4)
  if (questionId === 'photography' || id === 'architecture-photo' || id === 'landscape-photo' || id === 'street-life' || id === 'golden-hour') {
    if (id === 'architecture-photo' || id.includes('arch') || label.includes('architecture')) return subPhotoArchitecture;
    if (id === 'landscape-photo' || id.includes('landscape') || label.includes('landscape') || label.includes('panorama')) return thingsQuizNature;
    if (id === 'street-life' || id.includes('street') || label.includes('street')) return thingsQuizMedina;
    if (id === 'golden-hour' || id.includes('golden') || label.includes('golden') || label.includes('hour')) return thingsQuizDesert;
  }

  // 7. Desert & Nature Sub-Quiz (Sub-Quiz 4.3)
  if (questionId === 'desert-nature' || id === 'camel-trek' || id === 'off-road' || id === 'oasis-nature' || id === 'stargazing') {
    if (id === 'camel-trek' || id.includes('camel') || id.includes('trek') || label.includes('camel') || label.includes('camp')) return subDesertCamel;
    if (id === 'off-road' || id.includes('road') || id.includes('4x4') || label.includes('4x4') || label.includes('off-road')) return thingsQuizAdventure;
    if (id === 'oasis-nature' || id.includes('oasis') || id.includes('valley') || label.includes('oasis') || label.includes('valley')) return thingsQuizNature;
    if (id === 'stargazing' || id.includes('star') || id.includes('night') || label.includes('star') || label.includes('night')) return thingsQuizDesert;
  }

  // 8. Wellness Sub-Quiz (Sub-Quiz 4.2)
  if (questionId === 'wellness' || id === 'hammam' || id === 'spa-modern' || id === 'yoga-retreat' || id === 'nature-healing') {
    if (id === 'hammam' || id.includes('hammam') || label.includes('hammam')) return subWellnessHammam;
    if (id === 'spa-modern' || id.includes('spa') || label.includes('spa')) return thingsQuizWellness;
    if (id === 'yoga-retreat' || id.includes('yoga') || label.includes('yoga')) return thingsQuizZen;
    if (id === 'nature-healing' || id.includes('nature') || label.includes('healing') || label.includes('thermal')) return thingsQuizNature;
  }

  // 9. Culture Sub-Quiz (Sub-Quiz 4.1)
  if (questionId === 'culture' || id === 'history' || id === 'art-craft' || id === 'spiritual' || id === 'architecture') {
    if (id === 'history' || id.includes('history') || label.includes('imperial') || label.includes('history')) return subCultureHistory;
    if (id === 'art-craft' || id.includes('craft') || id.includes('art') || label.includes('craft') || label.includes('art')) return thingsQuizAuthentic;
    if (id === 'spiritual' || id.includes('spiritual') || id.includes('sacred') || label.includes('spiritual') || label.includes('sacred')) return thingsQuizCulture;
    if (id === 'architecture' || id.includes('architect') || label.includes('architecture') || label.includes('design')) return subPhotoArchitecture;
  }

  // 10. Eat / Food Specific Questions & Options
  if (questionId.startsWith('food') || questionId.startsWith('eat') || categoryId === 'food' || categoryId === 'eat') {
    // Cuisine preference (food-cuisine): PLACEHOLDER images pending AI generation
    // PROMPT (Traditional Moroccan) | FILE: eat_quiz_cuisine_traditional_moroccan.jpg: "Steaming round tagine pot with saffron chicken, preserved lemons and green olives on a zellij tile table, warm ambient light, clay walls in background. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."
    if (id === 'moroccan-traditional') return eatQuizCuisineTraditionalMoroccan;
    // PROMPT (International & Fusion) | FILE: eat_quiz_cuisine_international_fusion.jpg: "Modern plated dish combining Moroccan spices with European presentation, edible flowers, on a white minimalist restaurant table with copper utensils. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."
    if (id === 'international' || id.includes('fusion')) return eatQuizCuisineInternationalFusion;
    // PROMPT (Café & Pastries) | FILE: eat_quiz_cuisine_cafe_pastry.jpg: "Sunlit Moroccan café terrace table with a latte art coffee, flaky croissant, and a plate of Moroccan cornes de gazelle pastries, bougainvillea in background. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."
    if (id === 'cafe-pastry') return eatQuizCuisineCafePastry;
    // PROMPT (Fresh Seafood) | FILE: eat_quiz_cuisine_seafood.jpg: "Essaouira harbor-style grilled fish platter with sardines, prawns, and lemon wedges on a blue-and-white ceramic plate, fishing boats in soft background. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."
    if (id === 'seafood') return eatQuizCuisineSeafood;
    if (id === 'breakfast' || id.includes('breakfast') || label.includes('breakfast')) return eatQuizBreakfast;
    if (id === 'lunch' || id.includes('lunch') || label.includes('mid-day')) return eatQuizLunch;
    if (id === 'dinner' || id.includes('dinner') || label.includes('evening')) return eatQuizDinner;
    if (id === 'flexible' || id.includes('snack') || label.includes('snack')) return eatQuizSnacks;
    if (id === 'halal' || id.includes('halal') || label.includes('halal')) return eatQuizHalal;
    if (id.includes('veg') || label.includes('veg')) return eatQuizVeg;
    if (id.includes('alcohol') || id.includes('drink') || label.includes('alcohol')) return eatQuizDrinks;
    if (id.includes('rooftop') || label.includes('rooftop')) return eatQuizRooftop;
    if (id.includes('street') || label.includes('street')) return eatQuizStreet;
    if (id.includes('fine') || id.includes('chic') || label.includes('fine')) return eatQuizFine;
    if (id.includes('hole') || id.includes('hidden') || label.includes('gem') || label.includes('hidden')) return eatQuizHiddenGem;
    if (id.includes('tea') || id.includes('cafe') || label.includes('tea')) return eatQuizCafesTea;
    if (id.includes('traditional') || label.includes('traditional')) return eatQuizTraditional;
  }

  // 11. Sleep / Stay Specific Questions & Options
  if (questionId.startsWith('sleep') || questionId.includes('sleep') || categoryId === 'sleep' || categoryId === 'stay') {
    // Location feel (sleep-location): PLACEHOLDER images pending AI generation
    // PROMPT (Heart of the Medina) | FILE: sleep_quiz_location_medina_heart.jpg: "View from a narrow medina alley doorway looking into a quiet Riad courtyard with mosaic fountain, hanging lanterns, and carved wooden door frames, warm golden light. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."
    if (id === 'medina-heart') return sleepQuizLocationMedinaHeart;
    // PROMPT (Modern City District) | FILE: sleep_quiz_location_ville_nouvelle.jpg: "Wide palm-lined Gueliz boulevard with a modern boutique hotel entrance, glass doors, a doorman, and parked vintage car. Clean, contemporary feel. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."
    if (id === 'ville-nouvelle' || id.includes('ville') || id.includes('nouvelle') || id.includes('gueliz')) return sleepQuizLocationVilleNouvelle;
    // PROMPT (Countryside & Nature) | FILE: sleep_quiz_location_countryside.jpg: "Peaceful Atlas mountain lodge surrounded by palm trees and terraced gardens, distant snow-capped peaks, morning mist rising from a valley. Soft matte vector illustration style on cream canvas, warm Moroccan color palette."
    if (id === 'countryside') return sleepQuizLocationCountryside;
    if (id === 'riad' || id.includes('riad') || label.includes('riad')) return sleepQuizRiad;
    if (id === 'hotel' || id.includes('hotel') || id.includes('boutique') || label.includes('boutique') || label.includes('hotel')) return sleepQuizHotel;
    if (id === 'desert-camp' || id.includes('desert') || id.includes('camp') || label.includes('desert')) return sleepQuizDesert;
    if (id === 'kasbah' || id.includes('kasbah') || label.includes('kasbah')) return sleepQuizKasbah;
    if (id === 'pool' || id.includes('pool') || label.includes('pool')) return sleepQuizPool;
    if (id === 'ac' || id.includes('ac') || label.includes('a/c') || label.includes('air')) return sleepQuizAc;
    if (id === 'rooftop' || label.includes('rooftop')) return sleepQuizRooftop;
    if (id === 'quiet' || id.includes('quiet') || label.includes('peace') || label.includes('quiet')) return sleepQuizQuiet;
    if (id === 'budget' || id.includes('budget') || id.includes('hostel') || label.includes('budget') || label.includes('hostel') || label.includes('guesthouse')) return sleepQuizBudget;
    if (id === 'relax' || id.includes('relax') || label.includes('relax') || label.includes('unwind')) return sleepQuizRelax;
    if (id === 'adventure' || id.includes('adventure') || label.includes('adventure')) return sleepQuizAdventure;
    if (id === 'culture' || id.includes('culture') || label.includes('culture') || label.includes('heritage')) return sleepQuizCulture;
  }

  // 12. Things to Do / Activities Specific Questions & Options
  // 12.1 Traveler Interests (What do you want to experience?) â€” NEW labels
  if (questionId === 'interests' || questionId === 'traveler-type' || label.includes('culture seeker') || label.includes('foodie') || label.includes('adrenaline junkie') || label.includes('wellness seeker') || label.includes('history') || label.includes('heritage') || label.includes('cooking') || label.includes('outdoors') || label.includes('hammam') || label.includes('wellness')) {
    if (id === 'culture' || id.includes('culture') || label.includes('culture') || label.includes('history') || label.includes('heritage')) return thingsQuizHistoryHeritage;
    if (id === 'food' || id.includes('food') || label.includes('food') || label.includes('cooking')) return thingsQuizFoodCooking;
    if (id === 'adventure' || id.includes('adventure') || label.includes('adrenaline') || label.includes('junkie') || label.includes('outdoors')) return thingsQuizAdventureOutdoors;
    if (id === 'slow' || id.includes('wellness') || id.includes('slow') || label.includes('wellness') || label.includes('hammam')) return thingsQuizHammamWellness;
    if (id.includes('photo') || label.includes('photo')) return subPhotoArchitecture;
    if (id.includes('social') || label.includes('social')) return subSocialRooftop;
  }

  // 12.2 Who do you want to meet along the way? (Vibe) â€” NEW labels
  if (questionId === 'vibe') {
    if (id === 'authentic' || label.includes('local') || label.includes('genuine')) return thingsQuizLocalGenuine;
    if (id === 'instagrammable' || label.includes('photo') || label.includes('worthy')) return thingsQuizPhotoWorthy;
    if (id === 'relaxed' || label.includes('easy') || label.includes('unhurried')) return thingsQuizEasyUnhurried;
    if (id === 'off-the-beaten-path' || label.includes('hidden') || label.includes('gem')) return thingsQuizHiddenGemsNew;
  }

  // 12.3 How active do you want your days to be? (Energy Level) â€” NEW labels
  if (questionId === 'energy-level') {
    if (id === 'relaxed' || label.includes('Zen') || label.includes('zen') || label.includes('chill')) return thingsQuizZenChill;
    if (id === 'moderate' || label.includes('Curious') || label.includes('Moderate') || label.includes('steady')) return thingsQuizSteadyCurious;
    if (id === 'active' || id === 'high-energy' || label.includes('High Energy') || label.includes('full send')) return thingsQuizFullSend;
  }

  // 12.4 Setting (Where would you like to be?)
  if (questionId === 'setting') {
    if (id === 'medina') return thingsQuizMedina;
    if (id === 'nature') return thingsQuizNature;
    if (id === 'desert') return thingsQuizDesert;
    if (id === 'coastal') return thingsQuizCoastal;
  }

  if (categoryId === 'things' || categoryId === 'things-to-do' || questionId === 'interests' || questionId === 'vibe' || questionId === 'energy-level' || questionId === 'setting') {
    if (id === 'medina' || id.includes('medina') || label.includes('medina')) return thingsQuizMedina;
    if (id === 'nature' || id.includes('nature') || label.includes('rural') || label.includes('nature')) return thingsQuizNature;
    if (id === 'desert' || id.includes('desert') || label.includes('desert') || label.includes('sahara')) return thingsQuizDesert;
    if (id === 'coastal' || id.includes('coastal') || label.includes('coastal') || label.includes('ocean')) return thingsQuizCoastal;
    if (id === 'zen' || id.includes('zen') || label.includes('zen') || label.includes('peace')) return thingsQuizZen;
    if (id === 'moderate' || id.includes('moderate') || label.includes('curious') || label.includes('active')) return thingsQuizModerate;
    if (id === 'active' || id === 'high-energy' || id.includes('active') || label.includes('high energy') || label.includes('hiker')) return thingsQuizHighEnergy;
    if (id === 'authentic' || id.includes('authentic') || label.includes('authentic') || label.includes('local')) return thingsQuizAuthentic;
    if (id === 'instagrammable' || id.includes('insta') || label.includes('instagrammable') || label.includes('scenic')) return thingsQuizInstagrammable;
    if (id === 'relaxed' || id.includes('relax') || label.includes('relaxed') || label.includes('chill')) return thingsQuizRelaxed;
    if (id === 'off-the-beaten-path' || id.includes('hidden') || id.includes('path') || label.includes('hidden') || label.includes('secret')) return thingsQuizHiddenGems;
    if (id === 'culture' || id.includes('culture') || label.includes('culture')) return thingsQuizCulture;
    if (id === 'food' || id.includes('food') || label.includes('food')) return thingsQuizFoodie;
    if (id === 'adventure' || id.includes('adventure') || label.includes('adventure')) return thingsQuizAdventure;
    if (id === 'slow' || id.includes('slow') || id.includes('wellness') || label.includes('wellness') || label.includes('slow')) return thingsQuizWellness;
  }

  // Fallbacks by keywords
  if (id.includes('culture') || id.includes('ancient') || tag.includes('culture') || tag.includes('heritage') || label.includes('culture') || id.includes('history') || id.includes('heritage')) return thingsQuizCulture;
  if (id.includes('adventure') || id.includes('active') || id.includes('adrenaline') || id.includes('hiking') || id.includes('peak') || label.includes('adventure') || id.includes('nature') || tag.includes('nature')) return quizAdventure;
  if (id.includes('food') || id.includes('dish') || id.includes('tasting') || id.includes('dining') || label.includes('food') || id.includes('eat') || tag.includes('food')) return quizFoodie;
  if (id.includes('relaxed') || id.includes('slow') || id.includes('wellness') || id.includes('chill') || id.includes('zen') || id.includes('spa') || label.includes('relax') || id.includes('quiet')) return quizRelaxed;

  // Fallback pattern by step index
  const fallbacks = [
    categoryThingsMatte,
    categoryShopMatte,
    quizCulture,
    quizAdventure,
  ];
  return fallbacks[stepIndex % fallbacks.length];
};

export const getOptionFallback = (categoryId?: string, optionId?: string): string => {
  const opt = (optionId || '').toLowerCase();
  
  const isFood = categoryId === 'food' || categoryId === 'eat';
  const isSleep = categoryId === 'sleep' || categoryId === 'stay';
  const isShop = categoryId === 'shopping' || categoryId === 'shop';

  if (opt === 'lean' || opt.includes('lean') || opt.includes('budget') || opt.includes('savings')) {
    if (isFood) return eatLifestyleLean;
    if (isSleep) return sleepLifestyleLean;
    if (isShop) return shoppingLifestyleLean;
    return thingsLifestyleLean;
  }
  if (opt === 'balanced') {
    if (isFood) return eatLifestyleBalanced;
    if (isSleep) return sleepLifestyleBalanced;
    if (isShop) return shoppingLifestyleBalanced;
    return thingsLifestyleBalanced;
  }
  if (opt === 'premium' || opt.includes('luxury') || opt.includes('effortless')) {
    if (isFood) return eatLifestylePremium;
    if (isSleep) return sleepLifestylePremium;
    if (isShop) return shoppingLifestylePremium;
    return thingsLifestylePremium;
  }

  if (categoryId === 'food' || categoryId === 'eat') {
    return categoryFoodMatte;
  }
  if (categoryId === 'sleep' || categoryId === 'stay') {
    return categoryStaysMatte;
  }
  if (categoryId === 'shopping' || categoryId === 'shop') {
    return shoppingCategoryFallback;
  }
  return categoryThingsMatte;
};

const getOptionIcon = (option: QuizOption) => {
  if (option.icon) {
    return <span className="text-xl">{option.icon}</span>;
  }
  const id = (option.id || '').toLowerCase();
  if (id.includes('culture') || id.includes('history')) return <Landmark className="w-5 h-5 text-[#C86D51]" />;
  if (id.includes('adventure') || id.includes('active') || id.includes('hiking')) return <Mountain className="w-5 h-5 text-[#C86D51]" />;
  if (id.includes('food') || id.includes('dish') || id.includes('eat')) return <Utensils className="w-5 h-5 text-[#C86D51]" />;
  if (id.includes('slow') || id.includes('relax') || id.includes('wellness')) return <Flower2 className="w-5 h-5 text-[#C86D51]" />;
  return <Compass className="w-5 h-5 text-[#C86D51]" />;
};

export default function CategoryQuiz({ questions, onComplete, onBack, listings = [], categoryId }: CategoryQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const applyQuizAutoFilters = useExploreStore((s) => s.applyQuizAutoFilters);
  const parameterCity = useParameterStore((s) => s.city);

  // Pre-Quiz Quick Shortcuts: a mini-quiz swaps the generic questions for the
  // shortcut's dedicated 3-question quiz. savedStep restores the full quiz.
  const [activeShortcut, setActiveShortcut] = useState<PreQuizShortcut | null>(null);
  const [savedStep, setSavedStep] = useState(0);

  const isFoodQuiz = categoryId === 'food' || categoryId === 'eat' || questions.some(q => q.id.startsWith('food'));
  const isSleepQuiz = categoryId === 'sleep' || categoryId === 'stays' || questions.some(q => q.id.startsWith('sleep'));
  const isThingsQuiz = categoryId === 'things' || categoryId === 'visit' || categoryId === 'activities' || questions.some(q => q.id.startsWith('things') || q.id.startsWith('visit'));

  // Quick shortcuts per category (things-to-do resolves the city's top-5
  // REAL activities from its listings — never hallucinated)
  const shortcuts = useMemo(() => {
    if (isThingsQuiz || categoryId === 'things-to-do') {
      return getThingsShortcuts(listings);
    }
    return getShortcutsForCategory(categoryId ?? null, listings);
  }, [isThingsQuiz, categoryId, listings]);

  // In quick-shortcut mode the quiz card runs the shortcut's own mini-quiz
  const effectiveQuestions = activeShortcut?.questions?.length ? activeShortcut.questions : questions;
  const currentQuestion = effectiveQuestions[currentStep];

  // Single-answer matcher: does one quiz answer match one listing?
  // Extracted from the live match counter so the full-quiz AND-counter and the
  // quick-shortcut OR-counter share the exact same matching rules.
  const answerMatchesListing = (item: any, questionId: string, ids: string[]): boolean => {
    return ids.some(id => {
      if (questionId === 'base-lifestyle' || questionId === 'ft-style') {
        const tag = getTagForOptionId(id);
        // Shops: lifestyle maps to the structured priceLevel (canonical shop schema)
        if ((item as any).priceLevel) {
          const priceMap: Record<string, string[]> = {
            'lean': ['budget'],
            'balanced': ['mid-range'],
            'premium': ['premium', 'luxury']
          };
          return priceMap[tag]?.includes((item as any).priceLevel) ?? false;
        }
        return item.lifestyle?.includes(tag as any);
      }
      if (questionId === 'base-group') {
        const tag = getTagForOptionId(id);
        return item.groupTypes?.includes(tag as any);
      }

      const tagMap: Record<string, string> = {
        'relaxed': 'relaxed-energy',
        'moderate': 'moderate-energy',
        'active': 'active-energy',
      };
      const answerTag = getTagForOptionId(id);
      const targetTag = tagMap[answerTag] || answerTag;

      if (item.tags?.includes(targetTag) || item.archetypeAffinity?.includes(targetTag)) {
        return true;
      }

      const vibeTags = Array.isArray(item.vibeTags) ? item.vibeTags : [];
      const tags = Array.isArray(item.tags) ? item.tags : [];
      const archetypeAffinity = Array.isArray(item.archetypeAffinity) ? item.archetypeAffinity : [];
      const foodStyles = Array.isArray((item as any).foodStyles) ? (item as any).foodStyles : [];
      const experienceTypes = Array.isArray((item as any).experienceTypes) ? (item as any).experienceTypes : [];
      const mealTypes = Array.isArray((item as any).mealTypes) ? (item as any).mealTypes : [];
      const amenities = Array.isArray((item as any).amenities) ? (item as any).amenities : [];

      const searchableText = [
        item.name, item.title, item.description, item.type, item.category, (item as any).cuisine,
        String((item as any).neighborhood || ''), String((item as any).locationSummary || ''),
        ...vibeTags, ...tags, ...archetypeAffinity,
        ...foodStyles, ...experienceTypes, ...mealTypes, ...amenities,
        ...(Array.isArray((item as any).productCategories) ? (item as any).productCategories : [])
      ].filter(Boolean).map((t: any) => t.toString().toLowerCase());

      // Multi-part answer IDs: match on meaningful parts, skipping stop-words
      // and tiny fragments (e.g. 'off' inside 'coffee') that create false matches
      const parts = id.toLowerCase().split('-').filter((p: string) => p.length >= 4 && !QUIZ_STOP_WORDS.has(p));
      return parts.length > 0
        ? parts.some((part: string) => searchableText.some((text: string) => text.includes(part)))
        : searchableText.some((text: string) => text.includes(id.toLowerCase()));
    });
  };

  const matchCount = useMemo(() => {
    if (!listings.length) return 0;

    const filtered = listings.filter(item => {
      return Object.entries(answers).every(([questionId, answerId]) => {
        if (!answerId || (Array.isArray(answerId) && answerId.length === 0)) return true;
        const ids = Array.isArray(answerId) ? answerId : [answerId];
        return answerMatchesListing(item, questionId, ids);
      });
    });

    return filtered.length;
  }, [listings, answers]);

  // Quick-shortcut live matches: OR logic (any quick answer matches) so the
  // fast 3-question path never dead-ends at zero results
  const quickMatchCount = useMemo(() => {
    if (!listings.length || !activeShortcut) return 0;
    const quickEntries = Object.entries(answers).filter(([qid, a]) =>
      !!a && (!Array.isArray(a) || a.length > 0) &&
      (activeShortcut.questions?.some(q => q.id === qid) || qid === 'things-activity')
    );
    if (quickEntries.length === 0) return listings.length;
    return listings.filter(item =>
      quickEntries.some(([questionId, answerId]) => {
        const ids = Array.isArray(answerId) ? answerId : [answerId];
        return answerMatchesListing(item, questionId, ids);
      })
    ).length;
  }, [listings, answers, activeShortcut]);

  // Smart skip (lite): travelers who chose "Lean" never see premium-only options,
  // keeping every quiz step relevant to their budget
  const displayedOptions = useMemo(() => {
    if (!currentQuestion) return [];
    const lifestyle = answers['base-lifestyle'];
    if (lifestyle === 'lean') {
      const filtered = currentQuestion.options.filter(o => !PREMIUM_ONLY_OPTION_TAGS.includes(o.tag || ''));
      if (filtered.length >= 2) return filtered;
    }
    return currentQuestion.options;
  }, [currentQuestion, answers]);

  if (!currentQuestion) {
    return (
      <div className="min-h-[400px] flex items-center justify-center text-stone-400 italic font-serif">
        Loading quiz steps...
      </div>
    );
  }

  const handleOptionSelect = (questionId: string, optionId: string) => {
    if (currentQuestion.multiSelect) {
      const currentAnswers = Array.isArray(answers[questionId]) ? answers[questionId] : [];
      const updated = currentAnswers.includes(optionId)
        ? currentAnswers.filter((id: string) => id !== optionId)
        : [...currentAnswers, optionId];
      
      setAnswers({ ...answers, [questionId]: updated });
    } else {
      const updatedAnswers = { ...answers, [questionId]: optionId };
      setAnswers(updatedAnswers);
    }
  };

  const handleNext = () => {
    if (currentStep < effectiveQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      applyQuizAutoFilters(answers);
      // Full quiz: a fresh full pass replaces the category-scoped answers and
      // clears stale quick-shortcut answers. Quick shortcut: merge on top so
      // context answers from the full quiz are preserved.
      if (activeShortcut) {
        useExploreStore.setState({ quizAnswers: { ...useExploreStore.getState().quizAnswers, ...answers } });
      } else {
        useExploreStore.setState({ quizAnswers: answers });
      }
      setActiveShortcut(null);
      onComplete(answers);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else if (activeShortcut) {
      // Back from step 1 of a mini-quiz returns to the full quiz
      handleExitShortcut();
    } else if (onBack) {
      onBack();
    }
  };

  const handleSurpriseMe = () => {
    // If the traveler chooses to skip or surprise, do NOT fabricate answers for
    // unanswered questions (prevents locking down unwanted filters).
    useExploreStore.getState().resetFilters();
    if (Object.keys(answers).length > 0) {
      applyQuizAutoFilters(answers);
      if (activeShortcut) {
        useExploreStore.setState({ quizAnswers: { ...useExploreStore.getState().quizAnswers, ...answers } });
      } else {
        useExploreStore.setState({ quizAnswers: answers });
      }
    } else {
      useExploreStore.setState({ quizAnswers: {} });
    }
    setActiveShortcut(null);
    onComplete(answers);
  };

  // ── Pre-Quiz Quick Shortcuts handlers ──

  const handleShortcutSelect = (shortcut: PreQuizShortcut) => {
    setSavedStep(currentStep);
    if (shortcut.activityId) {
      // Things to Do: remember the real activity so results rank it top
      setAnswers(prev => ({ ...prev, 'things-activity': shortcut.activityId }));
    }
    setActiveShortcut(shortcut);
    setCurrentStep(0);
  };

  const handleExitShortcut = () => {
    if (!activeShortcut) return;
    // Remove the mini-quiz answers so the full quiz stays clean
    setAnswers(prev => {
      const next = { ...prev };
      activeShortcut.questions?.forEach(q => { delete next[q.id]; });
      if (activeShortcut.activityId) delete next['things-activity'];
      return next;
    });
    setActiveShortcut(null);
    setCurrentStep(savedStep);
  };

  const handleBrandLocate = (brand: ShortcutBrand, mode: 'closest' | 'area', area?: string) => {
    const nextAnswers = { ...answers, 'brand-locator': brand.id };
    if (mode === 'area' && area) {
      // Area picked: filter results to that touristic neighborhood
      useParameterStore.getState().setNeighborhood(area);
    }
    setAnswers(nextAnswers);
    applyQuizAutoFilters(nextAnswers);
    // Brand answers merge on top of existing context answers
    useExploreStore.setState({ quizAnswers: { ...useExploreStore.getState().quizAnswers, ...nextAnswers } });
    setActiveShortcut(null);
    onComplete(nextAnswers);
  };

  const isMultiSelect = !!currentQuestion.multiSelect;
  const currentAnswer = answers[currentQuestion.id];
  const hasSelection = isMultiSelect 
    ? (Array.isArray(currentAnswer) && currentAnswer.length > 0)
    : Boolean(currentAnswer);

  const progressPercentage = Math.round(((currentStep + 1) / effectiveQuestions.length) * 100);

  const stepLabels = [
    'Your Preferences',
    'Travel Style',
    'Vibe & Atmosphere',
    'Logistics & Details',
    'Final Polish'
  ];
  const currentStepLabel = stepLabels[currentStep] || `Step ${currentStep + 1}`;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-3 py-1 px-1 sm:px-4 font-sans text-stone-900">
      
      {/* 0. Pre-Quiz Quick Shortcuts (Step 1 only) */}
      {currentStep === 0 && !activeShortcut && shortcuts.length > 0 && (
        <PreQuizShortcutBar
          shortcuts={shortcuts}
          cityId={parameterCity || 'marrakech'}
          cityListings={listings}
          onMiniQuizSelect={handleShortcutSelect}
          onBrandLocate={handleBrandLocate}
        />
      )}

      {/* 1 & 2. Step Progress Bar Card & Header */}
      <div className="bg-white rounded-[24px] p-4 sm:p-5 border border-stone-200/80 shadow-xs flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C86D51]/10 border border-[#C86D51]/20 text-[#C86D51] text-[11px] font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              {activeShortcut ? 'QUICK MATCH' : 'QUIZ'}
            </span>
            {activeShortcut && (
              <button
                onClick={handleExitShortcut}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-stone-500 hover:text-[#C86D51] transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                Exit — full quiz
              </button>
            )}
          </div>

          {listings.length > 0 && (
            <div className="hidden sm:flex items-center gap-2 bg-[#FAF3F0] px-3 py-1.5 rounded-full border border-[#C86D51]/20">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Live Matches:</span>
              <span className="text-sm font-bold text-[#C86D51] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {activeShortcut ? quickMatchCount : matchCount}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold tracking-widest text-stone-400 uppercase">
              STEP {currentStep + 1} OF {effectiveQuestions.length}
            </span>
            <span className="text-base font-bold text-stone-800 font-display">
              {activeShortcut ? 'Quick Match' : currentStepLabel}
            </span>
          </div>

          {/* Progress Bar Segments */}
          <div className="flex-1 max-w-md w-full flex items-center gap-2">
            {effectiveQuestions.map((_, idx) => (
              <div 
                key={idx}
                className="h-2.5 flex-1 rounded-full bg-stone-100 overflow-hidden transition-all relative"
              >
                <div 
                  className={cn(
                    "h-full transition-all duration-500 rounded-full",
                    idx < currentStep ? "bg-[#C86D51]" : idx === currentStep ? "bg-[#C86D51] animate-pulse" : "bg-transparent"
                  )}
                />
              </div>
            ))}
          </div>

          <div className="text-right flex items-center justify-between md:justify-end gap-3">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C86D51] bg-[#FAF3F0] px-3.5 py-1.5 rounded-full border border-[#C86D51]/20">
              {progressPercentage}% Complete
            </span>
          </div>
        </div>
      </div>

      {/* 3. Main Question Container */}
      <div className="bg-[#FAF8F5] sm:bg-white rounded-[24px] p-4 sm:p-5 border border-stone-200/80 shadow-sm space-y-4">
        
        {/* Question Title & Subtitle */}
        <div className="text-center space-y-1 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-serif font-semibold text-stone-900 leading-snug">
            {currentQuestion.question}
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm">
            {isMultiSelect ? "Select one or more options that fit you best" : "Choose the option that fits you best"}
          </p>
        </div>

        {/* Options Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {displayedOptions.map((option) => {
              const isSelected = isMultiSelect 
                ? (Array.isArray(answers[currentQuestion.id]) && answers[currentQuestion.id].includes(option.id))
                : answers[currentQuestion.id] === option.id;

              const cardImg = getOptionImage(option, currentQuestion.id, currentStep, categoryId);

              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(currentQuestion.id, option.id)}
                  className={cn(
                    "group relative flex flex-col rounded-[24px] border overflow-hidden transition-all duration-300 cursor-pointer text-left h-full",
                    isSelected 
                      ? "bg-[#FAF3F0] border-2 border-[#C86D51] shadow-lg shadow-[#C86D51]/10 -translate-y-1 ring-2 ring-[#C86D51] ring-offset-2"
                      : "bg-white border-stone-200/80 hover:border-stone-300 hover:shadow-md hover:-translate-y-0.5"
                  )}
                >
                  {/* Top Image Banner */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full bg-stone-100 overflow-hidden">
                    <img 
                      src={cardImg} 
                      alt={option.label}
                      loading="lazy"
                      decoding="async" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = getOptionFallback(categoryId, option.id);
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={cn(
                      "absolute inset-0 transition-all duration-300",
                      isSelected ? "bg-[#C86D51]/20 mix-blend-multiply" : "bg-gradient-to-t from-black/40 via-transparent to-transparent"
                    )} />

                    {/* Selected Badge (Top Right) */}
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-7 h-7 bg-[#C86D51] text-white rounded-full flex items-center justify-center shadow-md z-10 animate-scale-in">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  {/* Center Floating Icon Circle */}
                  <div className="relative z-10 -mt-5 mx-auto w-10 h-10 rounded-full bg-white shadow-md border border-stone-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getOptionIcon(option)}
                  </div>

                  {/* Card Body */}
                  <div className="p-4 pt-2 flex-1 flex flex-col items-center text-center space-y-1">
                    <h3 className={cn(
                      "font-display font-semibold text-base sm:text-lg transition-colors",
                      isSelected ? "text-[#C86D51]" : "text-stone-900 group-hover:text-[#C86D51]"
                    )}>
                      {option.label}
                    </h3>

                    {option.sub && (
                      <p className="text-xs text-stone-500 leading-relaxed line-clamp-3 font-sans">
                        {option.sub}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Action Buttons Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-stone-200/60">
          <button
            onClick={handlePreviousStep}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={handleSurpriseMe}
              className="text-xs sm:text-sm font-medium text-stone-500 hover:text-[#C86D51] transition-colors flex items-center gap-1.5"
            >
              <Wand2 className="w-4 h-4" />
              Not sure? Surprise me
            </button>

            <button
              disabled={!hasSelection}
              onClick={handleNext}
              className={cn(
                "w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer",
                hasSelection 
                  ? "bg-[#C86D51] hover:bg-[#B55C41] text-white shadow-[#C86D51]/20 hover:-translate-y-0.5" 
                  : "bg-stone-200 text-stone-400 cursor-not-allowed shadow-none"
              )}
            >
              {currentStep < effectiveQuestions.length - 1 ? (
                <>
                  Next Question
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  See Matches ({activeShortcut ? quickMatchCount : matchCount})
                  <Sparkles className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* 4. Bottom Trust Strip Footer */}
      <div className="bg-white rounded-[24px] p-6 border border-stone-200/80 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FAF3F0] text-[#C86D51] flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-stone-900">Takes only 2 min</div>
            <div className="text-[11px] text-stone-500">Quick & easy</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FAF3F0] text-[#C86D51] flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-stone-900">100% Personalized</div>
            <div className="text-[11px] text-stone-500">Just for you</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FAF3F0] text-[#C86D51] flex items-center justify-center flex-shrink-0">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-stone-900">Better recommendations</div>
            <div className="text-[11px] text-stone-500">You'll love</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FAF3F0] text-[#C86D51] flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-stone-900">Private & secure</div>
            <div className="text-[11px] text-stone-500">Your data is safe</div>
          </div>
        </div>
      </div>

    </div>
  );
}

