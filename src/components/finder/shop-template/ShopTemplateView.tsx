import React from 'react';
import { ShopListing } from '../../../types/shop';
import { ShopHeader } from './ShopHeader';
import { ShopProductsSection } from './ShopProductsSection';
import { ShopHighlightsSection } from './ShopHighlightsSection';
import { ShopNearbySection } from './ShopNearbySection';
import { ShopPricingCard } from './ShopPricingCard';
import { ShopPaymentCard } from './ShopPaymentCard';
import { ShopOpeningHoursCard } from './ShopOpeningHoursCard';
import { ShopLanguagesCard } from './ShopLanguagesCard';
import { ShopShippingBanner } from './ShopShippingBanner';

interface ShopTemplateViewProps {
  shop: ShopListing;
}

export const ShopTemplateView: React.FC<ShopTemplateViewProps> = ({ shop }) => {
  const v = shop.visibility || {};

  return (
    <div className="space-y-7 pb-10">
      {/* 1. Header: Hero Carousel & Shop Identity */}
      <ShopHeader shop={shop} />

      {/* 2. Row 1: "What you'll find" (Left) + "Why visit?" (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
        <div className="lg:col-span-7">
          {v.show_products !== false && (
            <ShopProductsSection categories={shop.product_categories} />
          )}
        </div>
        <div className="lg:col-span-5">
          {v.show_highlights !== false && (
            <ShopHighlightsSection highlights={shop.highlights} />
          )}
        </div>
      </div>

      {/* 3. Row 2: "Around the shop" (Left) + "Pricing & Payment" (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
        <div className="lg:col-span-7">
          {v.show_nearby !== false && (
            <ShopNearbySection
              shopName={shop.name}
              nearbyPlaces={shop.nearby_places}
            />
          )}
        </div>
        <div className="lg:col-span-5 space-y-6">
          {v.show_pricing !== false && <ShopPricingCard pricing={shop.pricing} />}
          {v.show_payment !== false && <ShopPaymentCard payment={shop.payment} />}
        </div>
      </div>

      {/* 4. Row 3: "Opening hours" (Left) + "Languages" (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
        <div className="lg:col-span-7">
          {v.show_opening_hours !== false && (
            <ShopOpeningHoursCard openingHours={shop.opening_hours} />
          )}
        </div>
        <div className="lg:col-span-5">
          {v.show_languages !== false && shop.languages && shop.languages.length > 0 && (
            <ShopLanguagesCard languages={shop.languages} />
          )}
        </div>
      </div>

      {/* 5. Row 4: "Shipping" (Full width) */}
      {v.show_shipping !== false && shop.shipping && shop.shipping.available && (
        <ShopShippingBanner shipping={shop.shipping} />
      )}
    </div>
  );
};
