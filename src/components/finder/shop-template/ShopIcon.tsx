import React from 'react';
import {
  ShoppingBag,
  Star,
  MapPin,
  Tag,
  CreditCard,
  Clock,
  MessageSquare,
  Plane,
  ChevronLeft,
  ChevronRight,
  Heart,
  Navigation,
  ExternalLink,
  Car,
  Coffee,
  Store,
  Landmark,
  Sparkles,
  Check,
  Percent,
  Coins,
  ShieldCheck,
  Scissors,
  Hammer,
  Palette,
  Layers,
  Award
} from 'lucide-react';

interface ShopIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const ShopIcon: React.FC<ShopIconProps> = ({ name, className = 'w-5 h-5', size = 24 }) => {
  const normalized = (name || '').toLowerCase().trim().replace(/[_ ]/g, '-');

  switch (normalized) {
    // ----------------------------------------------------
    // 1. PRODUCT CATEGORIES (Authentic Moroccan Items)
    // ----------------------------------------------------

    // Leather bags / satchels
    case 'leather-bags':
    case 'leather-bag':
    case 'leather':
    case 'bags':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Bag handle */}
          <path
            d="M17 18V13C17 9.134 20.134 6 24 6C27.866 6 31 9.134 31 13V18"
            stroke="#8c4e28"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Main Leather Bag Body */}
          <path
            d="M9 18H39L41 40C41 41.105 40.105 42 39 42H9C7.895 42 7 41.105 7 40L9 18Z"
            fill="#a8592d"
            stroke="#783a1a"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Flap */}
          <path
            d="M9 18H39L37 28C37 29.1 36.1 30 35 30H13C11.9 30 11 29.1 11 28L9 18Z"
            fill="#8e4620"
            stroke="#683114"
            strokeWidth="2"
          />
          {/* Center Brass Buckle Strap */}
          <rect x="22" y="24" width="4" height="10" rx="1.5" fill="#e5b452" stroke="#683114" strokeWidth="1.2" />
          <line x1="20" y1="28" x2="28" y2="28" stroke="#f6ce72" strokeWidth="1.5" />
          {/* Accent Stitching */}
          <line x1="12" y1="38" x2="36" y2="38" stroke="#d58f62" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      );

    // Babouches (Traditional Moroccan Leather Slippers)
    case 'babouches':
    case 'babouche':
    case 'slippers':
    case 'shoes':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Right Slipper (Layer behind) */}
          <path
            d="M10 26C13 22 22 17 33 19C39 20 43 23 44 26C45 28.5 40 31 34 32C23 33.5 12 31 10 26Z"
            fill="#ba2626"
            stroke="#7f1313"
            strokeWidth="2"
          />
          {/* Left / Foreground Slipper (Pointed Moroccan babouche) */}
          <path
            d="M6 31C9 26 20 21 34 23C41 24 45 27 46 30C46.8 33 41 36 34 37.5C21 39.5 8 37 6 31Z"
            fill="#db3232"
            stroke="#8d1717"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Pointed upturned toe */}
          <path
            d="M44 30C46 29 47 27.5 47 26.5C45.5 27 43 28 41 28.5"
            stroke="#8d1717"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Slipper opening lip */}
          <ellipse cx="20" cy="28.5" rx="8" ry="3.5" fill="#f4dbbd" stroke="#8d1717" strokeWidth="1.8" />
          {/* Gold embroidery on top vamp */}
          <path
            d="M27 27C30 26.5 35 27.5 38 30"
            stroke="#fbd34d"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="2 2"
          />
        </svg>
      );

    // Belts
    case 'belts':
    case 'belt':
    case 'leather-belts':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Coiled leather belt strip */}
          <path
            d="M8 24C8 16 16 10 25 10C34 10 41 16 41 24C41 32 34 38 25 38C17 38 11 33 10 26"
            stroke="#783a1a"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M8 24C8 16 16 10 25 10C34 10 41 16 41 24C41 32 34 38 25 38C17 38 11 33 10 26"
            stroke="#9a4d22"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Belt Holes */}
          <circle cx="34" cy="18" r="1.2" fill="#3e1a07" />
          <circle cx="38" cy="23" r="1.2" fill="#3e1a07" />
          <circle cx="35" cy="29" r="1.2" fill="#3e1a07" />
          {/* Brass Buckle */}
          <rect
            x="6"
            y="17"
            width="13"
            height="14"
            rx="3"
            fill="#e2af44"
            stroke="#783a1a"
            strokeWidth="2.2"
          />
          <rect x="9.5" y="20.5" width="6" height="7" rx="1.5" fill="#f8efd8" />
          {/* Prong */}
          <line x1="9" y1="24" x2="16" y2="24" stroke="#783a1a" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    // Wallets
    case 'wallets':
    case 'wallet':
    case 'leather-wallets':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Back flap */}
          <rect x="8" y="12" width="32" height="24" rx="4" fill="#6d3516" stroke="#48210c" strokeWidth="2" />
          {/* Main leather wallet folded body */}
          <rect
            x="8"
            y="16"
            width="32"
            height="20"
            rx="3.5"
            fill="#8d471f"
            stroke="#53270e"
            strokeWidth="2.2"
          />
          {/* Cash flap insert line */}
          <path d="M11 20H37" stroke="#b26332" strokeWidth="1.8" />
          {/* Snap closure strap */}
          <path
            d="M30 22H39C40.5 22 41.5 23.2 41.5 24.5V27.5C41.5 28.8 40.5 30 39 30H30V22Z"
            fill="#723717"
            stroke="#48210c"
            strokeWidth="1.8"
          />
          {/* Brass snap button */}
          <circle cx="37" cy="26" r="2" fill="#e5b452" stroke="#53270e" strokeWidth="1" />
        </svg>
      );

    // Accessories / Moroccan Berber Jewelry
    case 'accessories':
    case 'accessory':
    case 'jewelry':
    case 'jewellery':
    case 'necklace':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Beaded necklace arc */}
          <path
            d="M12 10C12 24 16 34 24 34C32 34 36 24 36 10"
            stroke="#b88339"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="4 4"
          />
          {/* Center Berber silver amulet pendant */}
          <path
            d="M24 34L20 40L24 43L28 40L24 34Z"
            fill="#d1d5db"
            stroke="#4b5563"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="38.5" r="1.5" fill="#dc2626" />
          {/* Amber beads */}
          <circle cx="16" cy="27" r="3.5" fill="#ea580c" stroke="#9a3412" strokeWidth="1.2" />
          <circle cx="32" cy="27" r="3.5" fill="#ea580c" stroke="#9a3412" strokeWidth="1.2" />
          {/* Turquoise beads */}
          <circle cx="19" cy="31" r="2.8" fill="#0d9488" stroke="#115e59" strokeWidth="1.2" />
          <circle cx="29" cy="31" r="2.8" fill="#0d9488" stroke="#115e59" strokeWidth="1.2" />
        </svg>
      );

    // Carpets / Rugs
    case 'carpets':
    case 'rugs':
    case 'carpet':
    case 'rug':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Fringe top & bottom */}
          <line x1="12" y1="6" x2="12" y2="10" stroke="#a89a85" strokeWidth="1.5" />
          <line x1="18" y1="6" x2="18" y2="10" stroke="#a89a85" strokeWidth="1.5" />
          <line x1="24" y1="6" x2="24" y2="10" stroke="#a89a85" strokeWidth="1.5" />
          <line x1="30" y1="6" x2="30" y2="10" stroke="#a89a85" strokeWidth="1.5" />
          <line x1="36" y1="6" x2="36" y2="10" stroke="#a89a85" strokeWidth="1.5" />

          <line x1="12" y1="38" x2="12" y2="42" stroke="#a89a85" strokeWidth="1.5" />
          <line x1="18" y1="38" x2="18" y2="42" stroke="#a89a85" strokeWidth="1.5" />
          <line x1="24" y1="38" x2="24" y2="42" stroke="#a89a85" strokeWidth="1.5" />
          <line x1="30" y1="38" x2="30" y2="42" stroke="#a89a85" strokeWidth="1.5" />
          <line x1="36" y1="38" x2="36" y2="42" stroke="#a89a85" strokeWidth="1.5" />

          {/* Rug Body */}
          <rect x="10" y="10" width="28" height="28" rx="2" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="2" />
          {/* Inner Berber Diamond Pattern */}
          <polygon points="24,14 32,24 24,34 16,24" fill="#fbbf24" stroke="#b45309" strokeWidth="1.8" />
          <polygon points="24,18 29,24 24,30 19,24" fill="#1e3a8a" stroke="#172554" strokeWidth="1.2" />
        </svg>
      );

    // Pottery / Ceramics
    case 'pottery':
    case 'ceramics':
    case 'tagines':
    case 'ceramic':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Moroccan Tagine Cone Lid */}
          <circle cx="24" cy="11" r="3.5" fill="#ca5c2b" stroke="#7c2d12" strokeWidth="1.8" />
          <path
            d="M24 14C22 17 14 28 11 31H37C34 28 26 17 24 14Z"
            fill="#d97706"
            stroke="#7c2d12"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Decorative geometric band */}
          <path d="M15 27H33" stroke="#fef08a" strokeWidth="2" strokeDasharray="3 2" />
          {/* Tagine base bowl */}
          <path
            d="M8 32H40C40 37 34 40 24 40C14 40 8 37 8 32Z"
            fill="#b45309"
            stroke="#7c2d12"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </svg>
      );

    // Argan Oil & Cosmetics
    case 'argan':
    case 'argan-oil':
    case 'oil':
    case 'cosmetics':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Glass dropper cap */}
          <rect x="22" y="7" width="4" height="6" rx="1" fill="#1f2937" />
          <rect x="19" y="13" width="10" height="4" rx="1.5" fill="#ca8a04" stroke="#713f12" strokeWidth="1.5" />
          {/* Golden bottle body */}
          <path
            d="M16 17H32L34 38C34 40 32 41 30 41H18C16 41 14 40 14 38L16 17Z"
            fill="#eab308"
            stroke="#854d0e"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Droplet in center */}
          <path
            d="M24 23C24 23 20 28 20 31C20 33.2 21.8 35 24 35C26.2 35 28 33.2 28 31C28 28 24 23 24 23Z"
            fill="#fef08a"
          />
        </svg>
      );

    // Spices
    case 'spices':
    case 'spice':
    case 'herbs':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Spice bowl / sack */}
          <path
            d="M10 27H38C37 37 32 41 24 41C16 41 11 37 10 27Z"
            fill="#b45309"
            stroke="#78350f"
            strokeWidth="2.2"
          />
          {/* Saffron / Paprika spice cone pyramid */}
          <path
            d="M10 27C12 21 21 12 24 10C27 12 36 21 38 27H10Z"
            fill="#dc2626"
            stroke="#78350f"
            strokeWidth="2"
          />
          {/* Curcumin / Turmeric highlight */}
          <path d="M21 16C23 18 24 25 24 27" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    // Souvenirs & Gifts
    case 'souvenirs':
    case 'souvenir':
    case 'gifts':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Moroccan lantern outline */}
          <path d="M24 7V12" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M16 16C16 13 21 12 24 12C27 12 32 13 32 16L35 30L24 38L13 30L16 16Z"
            fill="#f59e0b"
            stroke="#78350f"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="3" fill="#ffffff" />
        </svg>
      );

    // ----------------------------------------------------
    // 2. "WHY VISIT?" HIGHLIGHT ICONS (Hexagonal Badges)
    // ----------------------------------------------------
    case 'handmade-products':
    case 'handmade':
    case 'artisan-hands':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Outer Moroccan Hexagon Shield */}
          <path
            d="M20 4L34 12V28L20 36L6 28V12L20 4Z"
            fill="#fdfbf7"
            stroke="#78350f"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Inner Motif: Artisan hands / craft motif */}
          <circle cx="20" cy="20" r="5" fill="#fef3c7" stroke="#b45309" strokeWidth="1.8" />
          <path d="M20 11V15M20 25V29M11 20H15M25 20H29" stroke="#78350f" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'traditional-craft':
    case 'traditional':
    case 'craftsmanship':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M20 4L34 12V28L20 36L6 28V12L20 4Z"
            fill="#fdfbf7"
            stroke="#78350f"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Inner Motif: Geometric zellige square & chisel */}
          <rect x="14" y="14" width="12" height="12" rx="2" fill="#fef3c7" stroke="#b45309" strokeWidth="1.6" />
          <line x1="14" y1="20" x2="26" y2="20" stroke="#78350f" strokeWidth="1.5" />
          <line x1="20" y1="14" x2="20" y2="26" stroke="#78350f" strokeWidth="1.5" />
        </svg>
      );

    case 'unique-souvenirs':
    case 'unique':
    case 'souvenir-highlight':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M20 4L34 12V28L20 36L6 28V12L20 4Z"
            fill="#fdfbf7"
            stroke="#78350f"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Inner Motif: 8-pointed Moroccan star */}
          <polygon
            points="20,11 22,16 27,14 25,19 30,20 25,21 27,26 22,24 20,29 18,24 13,26 15,21 10,20 15,19 13,14 18,16"
            fill="#f59e0b"
            stroke="#92400e"
            strokeWidth="1.2"
          />
        </svg>
      );

    // ----------------------------------------------------
    // 3. PAYMENT LOGOS & BADGES
    // ----------------------------------------------------
    case 'visa':
      return (
        <span className="inline-flex items-center px-1.5 py-0.5 rounded font-black tracking-tight text-blue-700 italic text-[13px] bg-blue-50 border border-blue-200 select-none">
          VISA
        </span>
      );

    case 'mastercard':
      return (
        <span className="inline-flex items-center gap-0 px-1 py-0.5">
          <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
            <circle cx="10" cy="9" r="8" fill="#EB001B" />
            <circle cx="18" cy="9" r="8" fill="#F79E1B" fillOpacity="0.85" />
          </svg>
        </span>
      );

    case 'contactless':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2b231a" strokeWidth="2" strokeLinecap="round">
          <path d="M8 12a5 5 0 0 1 0-7" />
          <path d="M12 15a9 9 0 0 0 0-13" />
          <path d="M16 18a13 13 0 0 0 0-19" />
        </svg>
      );

    // ----------------------------------------------------
    // 4. FALLBACK / GENERAL SYSTEM
    // ----------------------------------------------------
    case 'shopping-bag':
      return <ShoppingBag size={size} className={className} />;
    case 'star':
      return <Star size={size} className={className} />;
    case 'map-pin':
      return <MapPin size={size} className={className} />;
    case 'pricing':
    case 'tag':
      return <Tag size={size} className={className} />;
    case 'payment':
    case 'credit-card':
      return <CreditCard size={size} className={className} />;
    case 'clock':
      return <Clock size={size} className={className} />;
    case 'languages':
    case 'chat':
    case 'message':
      return <MessageSquare size={size} className={className} />;
    case 'shipping':
    case 'plane':
      return <Plane size={size} className={className} />;
    case 'directions':
      return <Navigation size={size} className={className} />;
    case 'cafe':
    case 'coffee':
      return <Coffee size={size} className={className} />;
    case 'taxi':
      return <Car size={size} className={className} />;
    case 'souk':
      return <Store size={size} className={className} />;
    case 'square':
    case 'landmark':
      return <Landmark size={size} className={className} />;

    default:
      return <Sparkles size={size} className={className} />;
  }
};
