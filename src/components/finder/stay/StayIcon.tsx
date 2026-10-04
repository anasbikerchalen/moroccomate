import React from 'react';
import {
  Wifi,
  Coffee,
  Snowflake,
  Luggage,
  Clock,
  UserCheck,
  CreditCard,
  CalendarCheck2,
  MapPin,
  Bed,
  Bath,
  Eye,
  Users,
  Footprints,
  Compass,
  ArrowRight,
  Check,
  X,
  ExternalLink,
  ChevronRight,
  Waves,
  Flame,
  Sparkles,
  Mountain,
  Palmtree,
  Car,
  Train,
  Store,
  Landmark,
  Sun,
  ShieldCheck,
  Building2,
  Hotel,
  Tent,
  Home,
  Fan,
  Navigation,
  Utensils,
  Plane,
  Tv,
  Shirt,
  Sunrise,
  DollarSign,
  Layers,
  ThermometerSun,
  Bike
} from 'lucide-react';

interface StayIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const StayIcon: React.FC<StayIconProps> = ({ name, className = 'w-5 h-5', size = 20 }) => {
  const normalized = (name || '').toLowerCase().trim().replace(/[_ ]/g, '-');

  // Custom Moroccan architectural & decorative SVG icons + comprehensive lucide mappings
  switch (normalized) {
    // ----------------------------------------------------
    // 1. TRADITIONAL ARCHITECTURAL SPACES (Moroccan Motifs)
    // ----------------------------------------------------
    case 'central-patio':
    case 'patio':
    case 'zellige':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <path d="M12 6a6 6 0 0 0 6 6 6 6 0 0 0-6 6 6 6 0 0 0-6-6 6 6 0 0 0 6-6z" strokeDasharray="1 1" />
        </svg>
      );

    case 'shaded-courtyard':
    case 'courtyard':
    case 'arch':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M4 21V11C4 6.58 7.58 3 12 3s8 3.58 8 8v10" />
          <path d="M7 21v-9c0-2.76 2.24-5 5-5s5 2.24 5 5v9" />
          <line x1="3" y1="21" x2="21" y2="21" />
        </svg>
      );

    case 'sunny-rooftop':
    case 'sunny-rooftop-terrace':
    case 'rooftop':
    case 'terrace':
    case 'sun':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      );

    case 'fountain':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12 3v8" />
          <path d="M12 7c-2 0-4-1.5-4-3.5" />
          <path d="M12 7c2 0 4-1.5 4-3.5" />
          <path d="M6 14h12l-1 5H7l-1-5z" />
          <path d="M4 19h16v2H4z" />
        </svg>
      );

    case 'hammam':
    case 'spa':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M8 4c0 2-2 3-2 5s2 3 2 5" />
          <path d="M12 2c0 2-2 3-2 5s2 3 2 5" />
          <path d="M16 4c0 2-2 3-2 5s2 3 2 5" />
          <path d="M3 17a9 9 0 0 0 18 0H3z" />
        </svg>
      );

    case 'traditional-salon':
    case 'majlis':
    case 'lounge':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M3 14h18v4H3z" />
          <path d="M5 14V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6" />
          <path d="M4 18v3M20 18v3" />
        </svg>
      );

    // ----------------------------------------------------
    // 2. ACCOMMODATION TYPES
    // ----------------------------------------------------
    case 'riad':
    case 'dar':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" />
          <path d="M9 21V12h6v9" />
        </svg>
      );

    case 'camp':
    case 'desert-camp':
    case 'tent':
      return <Tent size={size} className={className} />;

    case 'hotel':
    case 'boutique-hotel':
      return <Hotel size={size} className={className} />;

    case 'villa':
    case 'apartment':
    case 'guesthouse':
      return <Home size={size} className={className} />;

    case 'kasbah':
      return <Building2 size={size} className={className} />;

    case 'swimming-pool':
    case 'pool':
      return <Waves size={size} className={className} />;

    case 'garden':
    case 'oasis':
      return <Palmtree size={size} className={className} />;

    case 'campfire':
      return <Flame size={size} className={className} />;

    case 'stargazing':
    case 'stars':
      return <Sparkles size={size} className={className} />;

    case 'beach-access':
    case 'beach':
      return <Waves size={size} className={className} />;

    // ----------------------------------------------------
    // 3. ROOM & VIEW
    // ----------------------------------------------------
    case 'bed':
    case 'double-bed':
    case 'king-bed':
    case 'queen-bed':
    case 'single-bed':
    case 'bunk':
    case 'twin':
      return <Bed size={size} className={className} />;

    case 'bathroom-private':
    case 'private-bathroom':
    case 'bathroom':
    case 'bath':
    case 'shower':
      return <Bath size={size} className={className} />;

    case 'bathroom-shared':
    case 'shared-bathroom':
      return (
        <div className="relative inline-flex items-center">
          <Bath size={size} className={className} />
          <Users size={size * 0.55} className="absolute -bottom-1 -right-1 text-[#8b7964]" />
        </div>
      );

    case 'view-courtyard':
    case 'courtyard-view':
    case 'view':
      return <Eye size={size} className={className} />;

    case 'view-mountain':
    case 'mountain':
      return <Mountain size={size} className={className} />;

    case 'view-sea':
    case 'sea-view':
    case 'ocean':
      return <Waves size={size} className={className} />;

    case 'view-desert':
    case 'desert':
    case 'dunes':
      return <Sunrise size={size} className={className} />;

    case 'view-city':
    case 'city':
      return <Building2 size={size} className={className} />;

    case 'view-garden':
      return <Palmtree size={size} className={className} />;

    case 'view-street':
      return <Store size={size} className={className} />;

    case 'guests':
    case 'sleeps':
    case 'capacity':
      return <Users size={size} className={className} />;

    // ----------------------------------------------------
    // 4. CLIMATE & COMFORT
    // ----------------------------------------------------
    case 'climate-ac':
    case 'air-conditioning':
    case 'ac':
    case 'climate-control':
      return <Snowflake size={size} className={className} />;

    case 'climate-heating':
    case 'heating':
      return <ThermometerSun size={size} className={className} />;

    case 'climate-blanket':
    case 'blanket':
      return <Layers size={size} className={className} />;

    case 'climate-fan':
    case 'fan':
      return <Fan size={size} className={className} />;

    // ----------------------------------------------------
    // 5. FOOD & DINING
    // ----------------------------------------------------
    case 'breakfast':
    case 'breakfast-included':
    case 'tea':
    case 'coffee':
    case 'moroccan-tea':
      return <Coffee size={size} className={className} />;

    case 'restaurant':
    case 'dinner':
    case 'tagine':
    case 'dining':
      return <Utensils size={size} className={className} />;

    // ----------------------------------------------------
    // 6. CONNECTIVITY & ENTERTAINMENT
    // ----------------------------------------------------
    case 'wifi':
    case 'fiber-wifi':
    case 'internet':
      return <Wifi size={size} className={className} />;

    case 'tv':
    case 'television':
      return <Tv size={size} className={className} />;

    // ----------------------------------------------------
    // 7. SERVICES & ACTIVITIES
    // ----------------------------------------------------
    case 'extra-services':
    case 'luggage':
    case 'luggage-storage':
      return <Luggage size={size} className={className} />;

    case 'airport-shuttle':
    case 'transfer':
      return <Plane size={size} className={className} />;

    case 'guided-tours':
    case 'tour':
    case 'excursion':
      return <Compass size={size} className={className} />;

    case 'laundry':
      return <Shirt size={size} className={className} />;

    case 'camel-trekking':
    case 'activity':
      return <Footprints size={size} className={className} />;

    // ----------------------------------------------------
    // 8. TRANSPORT & NEARBY POINTS
    // ----------------------------------------------------
    case 'minaret':
    case 'jemaa-el-fna':
    case 'square':
    case 'landmark':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12 2l2 3h-4l2-3z" />
          <path d="M8 5h8v4H8z" />
          <path d="M7 9h10v12H7z" />
          <path d="M10 13a2 2 0 0 1 4 0v8h-4v-8z" />
          <line x1="5" y1="21" x2="19" y2="21" />
        </svg>
      );

    case 'souk':
    case 'souks':
    case 'market':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" />
          <path d="M3 10a4 4 0 0 0 6 0 4 4 0 0 0 6 0 4 4 0 0 0 6 0" />
          <path d="M9 21v-7a3 3 0 0 1 6 0v7" />
        </svg>
      );

    case 'taxi':
    case 'taxi-station':
      return <Car size={size} className={className} />;

    case 'train':
    case 'train-station':
      return <Train size={size} className={className} />;

    case 'walking':
    case 'walk':
      return <Footprints size={size} className={className} />;

    // ----------------------------------------------------
    // 9. POLICIES & PAYMENTS
    // ----------------------------------------------------
    case 'check-in':
    case 'check-out':
    case 'clock':
      return <Clock size={size} className={className} />;

    case 'late-arrivals':
    case 'host':
    case 'reception-24h':
      return <UserCheck size={size} className={className} />;

    case 'payment':
    case 'credit-card':
      return <CreditCard size={size} className={className} />;

    case 'cash':
      return <DollarSign size={size} className={className} />;

    case 'cancellation':
      return <CalendarCheck2 size={size} className={className} />;

    case 'location':
    case 'map-pin':
      return <MapPin size={size} className={className} />;

    case 'directions':
      return <Navigation size={size} className={className} />;

    // Fallback
    default:
      return <Sparkles size={size} className={className} />;
  }
};
