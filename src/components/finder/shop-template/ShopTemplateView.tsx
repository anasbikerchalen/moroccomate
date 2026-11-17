import React from 'react';
import { ShopListing } from '../../../types/shop';
import type { ReviewSource } from '../../../types/reviews';
import { ShopProductsSection } from './ShopProductsSection';
import { ShopPriceGuideSection } from './ShopPriceGuideSection';
import { ShopHighlightsSection } from './ShopHighlightsSection';
import { ShopNearbySection } from './ShopNearbySection';
import { ShopPricingCard } from './ShopPricingCard';
import { ShopPaymentCard } from './ShopPaymentCard';
import { ShopOpeningHoursCard } from './ShopOpeningHoursCard';
import { ShopLanguagesCard } from './ShopLanguagesCard';
import { ShopShippingBanner } from './ShopShippingBanner';
import PlaceReviewsSection from '../../reviews/PlaceReviewsSection';
import WorriesSection from '../../worries/WorriesSection';
import PlaceFAQSection from '../../common/PlaceFAQSection';
import { buildPlaceFaqs, type FaqEntry } from '../../../data/seo/faqEngine';
import { useAppLanguage } from '../../../utils/localeRouting';
import { hasVerifiedReviews, hasVerifiedWorries } from '../listingNavUtils';

interface ShopTemplateViewProps {
  shop: ShopListing;
  faqs?: FaqEntry[];
  externalSelectedSource?: ReviewSource | null;
  onSelectedSourceChange?: (source: ReviewSource | null) => void;
}

export const ShopTemplateView: React.FC<ShopTemplateViewProps> = ({
  shop,
  faqs,
  externalSelectedSource,
  onSelectedSourceChange,
}) => {
  const lang = useAppLanguage();
  const v = shop.visibility || {};
  const shopReviewsData = shop.reviewsData || (shop as any).reviews;
  const resolvedFaqs =
    faqs && faqs.length > 0
      ? faqs
      : buildPlaceFaqs({ listing: shop, category: 'shopping', cityLabel: shop.city, lang });

  return (
    <div className="space-y-7 pb-10">
      {/* 1. "Things You're Worried About!" — strictly rendered when verified shop worries exist */}
      {v.show_worries !== false && hasVerifiedWorries(shop.worries) && shop.worries && (
        <div id="shop-worries-section">
          <WorriesSection
            worries={shop.worries}
            title="Things You're Worried About!"
            subtitle="Honest answers to what usually worries shoppers — checked and verified, never guessed."
          />
        </div>
      )}

      {/* 2. Row 1: "What you'll find" (Left) + "Why visit?" (Right) */}
      <div id="shop-items-section" className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
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

      {/* 2b. Typical items & verified MAD price guide */}
      {v.show_price_guide !== false && shop.price_guide && shop.price_guide.length > 0 && (
        <div id="shop-price-guide-section">
          <ShopPriceGuideSection items={shop.price_guide} />
        </div>
      )}

      {/* 3. Row 2: "Around the shop" (Left) + "Pricing & Payment" (Right) */}
      <div id="shop-nearby-pay-section" className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
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
      <div id="shop-hours-section" className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
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

      {/* 5b. Frequently Asked Questions */}
      {v.show_faq !== false && resolvedFaqs.length > 0 && (
        <div id="shop-faq-section">
          <PlaceFAQSection
            faqs={resolvedFaqs}
            placeName={shop.name}
            subtitle="Verified answers on pricing policy, payment methods, shipping, and craft authenticity"
          />
        </div>
      )}

      {/* 6. Multi-platform Traveler Reviews & Community Intelligence */}
      {v.show_reviews !== false && hasVerifiedReviews(shopReviewsData) && (
        <div id="shop-reviews-section">
          <PlaceReviewsSection
            reviewsData={shopReviewsData}
            placeName={shop.name}
            category="shopping"
            externalSelectedSource={externalSelectedSource}
            onSelectedSourceChange={onSelectedSourceChange}
          />
        </div>
      )}
    </div>
  );
};
