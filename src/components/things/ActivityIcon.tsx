import React from 'react';
import {
  MapPin, Clock, Users, Languages, Navigation, Calendar, ShieldCheck,
  CreditCard, Backpack, Check, Minus, Star, Utensils, Leaf, ShoppingBasket,
  Tent, Mountain, Waves, Camera, Sun, Building2, Landmark, Music, Palette,
  Fish, Bike, Car, Hotel, Plane, Footprints, Sparkles, BookOpen, Tag, User,
} from 'lucide-react';

interface ActivityIconProps {
  name?: string;
  className?: string;
  size?: number;
}

/**
 * One consistent icon library for the Things To Do page.
 * Icons are resolved dynamically from the backend icon strings.
 */
export const ActivityIcon: React.FC<ActivityIconProps> = ({ name, className = 'w-5 h-5', size = 24 }) => {
  const n = (name || '').toLowerCase().trim().replace(/[_ ]/g, '-');

  switch (n) {
    // ───────────────────────────────────────────
    // Activity types & experiences
    // ───────────────────────────────────────────
    case 'medina':
    case 'medina-walk':
    case 'museum':
    case 'museum-visit':
      return <Building2 size={size} className={className} strokeWidth={1.75} />;
    case 'monument':
    case 'monument-visit':
    case 'landmark':
    case 'square':
    case 'sleep':
    case 'historical-tour':
    case 'history':
      return <Landmark size={size} className={className} strokeWidth={1.75} />;
    case 'cooking':
    case 'cooking-class':
    case 'food':
    case 'food-tour':
    case 'meal':
    case 'eat':
      return <Utensils size={size} className={className} strokeWidth={1.75} />;
    case 'market':
    case 'market-food-experience':
    case 'shop':
    case 'souk':
    case 'souks':
      return <ShoppingBasket size={size} className={className} strokeWidth={1.75} />;
    case 'tea':
    case 'tea-experience':
    case 'drinks':
    case 'cafe':
      return <Waves size={size} className={className} strokeWidth={1.75} />;
    case 'hiking':
      return <Mountain size={size} className={className} strokeWidth={1.75} />;
    case 'leaf':
    case 'nature':
    case 'nature-walk':
    case 'wellness':
    case 'spa':
    case 'spa-experience':
    case 'massage':
    case 'spices':
      return <Leaf size={size} className={className} strokeWidth={1.75} />;
    case 'waterfall':
    case 'waterfall-visit':
      return <Waves size={size} className={className} strokeWidth={1.75} />;
    case 'mountain':
    case 'mountain-experience':
    case 'climbing':
      return <Mountain size={size} className={className} strokeWidth={1.75} />;
    case 'desert':
    case 'desert-experience':
    case 'tent':
    case 'campfire':
      return <Tent size={size} className={className} strokeWidth={1.75} />;
    case 'surf':
    case 'surfing':
    case 'kitesurfing':
    case 'water-sports':
    case 'swimming':
    case 'diving':
    case 'kayak':
    case 'kayaking':
    case 'raft':
    case 'rafting':
    case 'hammam':
    case 'hammam-experience':
    case 'boat':
    case 'boat-trip':
      return <Waves size={size} className={className} strokeWidth={1.75} />;
    case 'fish':
    case 'fishing':
      return <Fish size={size} className={className} strokeWidth={1.75} />;
    case 'atv':
    case 'quad':
    case 'car':
    case '4x4-excursion':
    case 'taxi':
    case 'transport':
      return <Car size={size} className={className} strokeWidth={1.75} />;
    case 'camel':
    case 'camel-ride':
    case 'horse':
    case 'horse-riding':
    case 'walking':
    case 'footprints':
      return <Footprints size={size} className={className} strokeWidth={1.75} />;
    case 'bike':
    case 'cycling':
      return <Bike size={size} className={className} strokeWidth={1.75} />;

    // ───────────────────────────────────────────
    // People
    // ───────────────────────────────────────────
    case 'users':
    case 'guide':
    case 'local-guide':
    case 'group':
    case 'group-size':
      return <Users size={size} className={className} strokeWidth={1.75} />;
    case 'user':
      return <User size={size} className={className} strokeWidth={1.75} />;

    // ───────────────────────────────────────────
    // Practical info
    // ───────────────────────────────────────────
    case 'star':
      return <Star size={size} className={className} strokeWidth={1.75} />;
    case 'book':
    case 'book-open':
      return <BookOpen size={size} className={className} strokeWidth={1.75} />;
    case 'camera':
      return <Camera size={size} className={className} strokeWidth={1.75} />;
    case 'sun':
    case 'sunscreen':
    case 'hat':
      return <Sun size={size} className={className} strokeWidth={1.75} />;
    case 'map-pin':
    case 'location':
    case 'meeting-point':
      return <MapPin size={size} className={className} strokeWidth={1.75} />;
    case 'clock':
    case 'duration':
      return <Clock size={size} className={className} strokeWidth={1.75} />;
    case 'languages':
    case 'language':
      return <Languages size={size} className={className} strokeWidth={1.75} />;
    case 'calendar':
    case 'schedule':
      return <Calendar size={size} className={className} strokeWidth={1.75} />;
    case 'shieldcheck':
    case 'safety':
      return <ShieldCheck size={size} className={className} strokeWidth={1.75} />;
    case 'credit-card':
    case 'payment':
      return <CreditCard size={size} className={className} strokeWidth={1.75} />;
    case 'backpack':
    case 'what-to-bring':
    case 'requirements':
      return <Backpack size={size} className={className} strokeWidth={1.75} />;
    case 'check':
      return <Check size={size} className={className} strokeWidth={2} />;
    case 'minus':
      return <Minus size={size} className={className} strokeWidth={2} />;
    case 'tag':
    case 'pricing':
    case 'price':
      return <Tag size={size} className={className} strokeWidth={1.75} />;
    case 'hotel':
      return <Hotel size={size} className={className} strokeWidth={1.75} />;
    case 'plane':
    case 'airport-pickup':
      return <Plane size={size} className={className} strokeWidth={1.75} />;
    case 'navigation':
    case 'directions':
      return <Navigation size={size} className={className} strokeWidth={1.75} />;
    case 'music':
    case 'gnawa':
    case 'traditional-music':
      return <Music size={size} className={className} strokeWidth={1.75} />;
    case 'art':
    case 'palette':
    case 'art-culture':
      return <Palette size={size} className={className} strokeWidth={1.75} />;

    default:
      return <Sparkles size={size} className={className} strokeWidth={1.75} />;
  }
};