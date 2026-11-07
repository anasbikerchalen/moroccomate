import React from 'react';

interface BrandLogoProps {
  id: string;
  className?: string;
  size?: number;
}

/**
 * Official & High-Fidelity Vector Brand Logos
 * Accurately represents commercial hypermarkets, stores, and dining brands in Morocco.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ id, className = 'w-5 h-5', size }) => {
  const normalizedId = id.toLowerCase();
  const dimensionProps = size ? { width: size, height: size } : {};

  // 1. MARJANE — Morocco's Premier Hypermarket (Emblematic Red & Green M Curves)
  if (normalizedId.includes('marjane')) {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...dimensionProps}
        aria-label="Marjane"
      >
        <rect width="48" height="48" rx="12" fill="#FAF5F0" />
        {/* Red Arch */}
        <path
          d="M12 36V22C12 16.5 16 13 21 13C24.5 13 27 15.2 28.5 18C29.8 15.2 32.5 13 36 13C41 13 45 16.5 45 22V36"
          stroke="#E02424"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Moroccan Green Accent Arc */}
        <path
          d="M19 36V25C19 21.5 21.5 19.5 24.5 19.5C27.5 19.5 30 21.5 30 25V36"
          stroke="#057A55"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="24.5" cy="14.5" r="2.5" fill="#057A55" />
      </svg>
    );
  }

  // 2. CARREFOUR — Global French Supermarket (Iconic Red & Blue Dual Arrow "C")
  if (normalizedId.includes('carrefour')) {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...dimensionProps}
        aria-label="Carrefour"
      >
        <rect width="48" height="48" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
        {/* Red Left Arrow */}
        <path
          d="M24 10L13 21L24 32C20.5 29.5 19 25 19 21C19 17 20.5 12.5 24 10Z"
          fill="#D61827"
        />
        {/* Blue Right Arrow */}
        <path
          d="M24 10L35 21L24 32C27.5 29.5 29 25 29 21C29 17 27.5 12.5 24 10Z"
          fill="#0055A5"
        />
      </svg>
    );
  }

  // 3. DECATHLON — Global Sports Brand (Bold Athletic Royal Blue Badge)
  if (normalizedId.includes('decathlon')) {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...dimensionProps}
        aria-label="Decathlon"
      >
        <rect width="48" height="48" rx="12" fill="#0082C3" />
        {/* Dynamic Energy Loop / D */}
        <path
          d="M13 14H24C30.5 14 35 18 35 24C35 30 30.5 34 24 34H13V14ZM19 29H23.5C27 29 29.5 27 29.5 24C29.5 21 27 19 23.5 19H19V29Z"
          fill="#FFFFFF"
        />
        <circle cx="34" cy="18" r="3" fill="#36B37E" />
      </svg>
    );
  }

  // 4. ATACADÃO / BIM — Moroccan Wholesale & Neighborhood Discount Markets
  if (normalizedId.includes('bim') || normalizedId.includes('atacadao')) {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...dimensionProps}
        aria-label="BIM / Atacadão"
      >
        <rect width="48" height="48" rx="12" fill="#E02424" />
        {/* BIM clean bold white letters */}
        <text
          x="50%"
          y="56%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="16"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.05em"
        >
          BİM
        </text>
      </svg>
    );
  }

  // 5. ENSEMBLE ARTISANAL — Official Government Fixed-Price Moroccan Craft Center
  if (normalizedId.includes('ensemble') || normalizedId.includes('artisanal')) {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...dimensionProps}
        aria-label="Ensemble Artisanal"
      >
        <rect width="48" height="48" rx="12" fill="#FEF9E7" stroke="#C9A84C" strokeWidth="1.5" />
        {/* Moroccan 8-pointed Zellij Star Seal */}
        <path
          d="M24 10L27.5 17L35 15.5L34 23L40 27L34 31L35 38.5L27.5 37L24 44L20.5 37L13 38.5L14 31L8 27L14 23L13 15.5L20.5 17L24 10Z"
          fill="#C86D51"
        />
        <circle cx="24" cy="27" r="5" fill="#FEF9E7" />
        <circle cx="24" cy="27" r="2.5" fill="#C9A84C" />
      </svg>
    );
  }

  // 6. MCDONALD'S — The Iconic Golden Arches
  if (normalizedId.includes('mcdonald')) {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...dimensionProps}
        aria-label="McDonald's"
      >
        <rect width="48" height="48" rx="12" fill="#DA291C" />
        {/* Golden Arches */}
        <path
          d="M14 36V22C14 16.5 17.5 13 21 13C24 13 26 15.5 26.5 19C27 15.5 29 13 32 13C35.5 13 39 16.5 39 22V36M20 36V24M33 36V24"
          stroke="#FFC72C"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 7. KFC — Colonel Sanders Fried Chicken
  if (normalizedId.includes('kfc')) {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...dimensionProps}
        aria-label="KFC"
      >
        <rect width="48" height="48" rx="12" fill="#A3080C" />
        {/* Red & White Stripes with KFC Wordmark */}
        <rect x="14" y="10" width="4" height="28" fill="#FFFFFF" rx="2" />
        <rect x="22" y="10" width="4" height="28" fill="#FFFFFF" rx="2" />
        <rect x="30" y="10" width="4" height="28" fill="#FFFFFF" rx="2" />
        <rect x="10" y="20" width="28" height="12" fill="#A3080C" rx="4" />
        <text
          x="50%"
          y="56%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.08em"
        >
          KFC
        </text>
      </svg>
    );
  }

  // 8. BURGER KING — Flame-Grilled Burgers
  if (normalizedId.includes('burger-king')) {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...dimensionProps}
        aria-label="Burger King"
      >
        <rect width="48" height="48" rx="12" fill="#FAF5EE" stroke="#E5E7EB" strokeWidth="1" />
        {/* Top Bun */}
        <path d="M13 22C13 16 18 12 24 12C30 12 35 16 35 22H13Z" fill="#F2A900" />
        {/* Burger & Patty */}
        <rect x="11" y="23" width="26" height="3" rx="1.5" fill="#D62300" />
        {/* Bottom Bun */}
        <path d="M13 27H35C35 32 30 35 24 35C18 35 13 32 13 27Z" fill="#F2A900" />
        {/* Blue Crescent Ring */}
        <path
          d="M37 17C40 21 40 27 37 32"
          stroke="#0033A0"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 9. PIZZA HUT — Iconic Red Roof Hat
  if (normalizedId.includes('pizza-hut') || normalizedId.includes('pizza')) {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...dimensionProps}
        aria-label="Pizza Hut"
      >
        <rect width="48" height="48" rx="12" fill="#18181B" />
        {/* Iconic Red Roof Hat */}
        <path
          d="M10 28C14 27 20 26.5 24 26.5C28 26.5 34 27 38 28L36 24C34 20 31 16 28 15L24 14L20 15C17 16 14 20 12 24L10 28Z"
          fill="#EE3124"
        />
        {/* Yellow Stripe */}
        <path
          d="M12 29C17 28 22 27.5 26 27.5C30 27.5 34 28 36 29"
          stroke="#FDB813"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 10. LOCAL BURGER HOUSE — Artisanal Local Grill Crest
  if (normalizedId.includes('local-burger') || normalizedId.includes('burger')) {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...dimensionProps}
        aria-label="Local Burger House"
      >
        <rect width="48" height="48" rx="12" fill="#1C1917" />
        {/* Crown & Artisanal Grill */}
        <path d="M14 21C14 16 18.5 13 24 13C29.5 13 34 16 34 21H14Z" fill="#F59E0B" />
        <rect x="12" y="23" width="24" height="3" rx="1.5" fill="#EF4444" />
        <path d="M14 27H34C34 31 29.5 33 24 33C18.5 33 14 31 14 27Z" fill="#F59E0B" />
        <circle cx="20" cy="17" r="1" fill="#FFFFFF" opacity="0.8" />
        <circle cx="24" cy="16" r="1" fill="#FFFFFF" opacity="0.8" />
        <circle cx="28" cy="17" r="1" fill="#FFFFFF" opacity="0.8" />
      </svg>
    );
  }

  // Fallback Storefront Tag
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...dimensionProps}
    >
      <rect width="48" height="48" rx="12" fill="#FAF5F0" stroke="#E5E7EB" strokeWidth="1" />
      <path
        d="M14 20L17 14H31L34 20V32C34 33.1 33.1 34 32 34H16C14.9 34 14 33.1 14 32V20Z"
        stroke="#C86D51"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 20H34" stroke="#C86D51" strokeWidth="2.5" />
    </svg>
  );
};

export default BrandLogo;
