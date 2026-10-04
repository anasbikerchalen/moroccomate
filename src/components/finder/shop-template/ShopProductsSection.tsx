import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { ProductCategory } from '../../../types/shop';
import { ShopIcon } from './ShopIcon';

interface ShopProductsSectionProps {
  categories: ProductCategory[];
  title?: string;
  subtitle?: string;
}

export const ShopProductsSection: React.FC<ShopProductsSectionProps> = ({
  categories,
  title = "What you'll find",
  subtitle = 'Discover a selection of authentic Moroccan products.'
}) => {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="rounded-2xl border border-[#ece4d5] bg-white p-6 sm:p-7 shadow-2xs">
      {/* Section Header */}
      <div className="flex items-start gap-3.5 mb-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#1c1917]">
          <ShoppingBag className="w-6 h-6 stroke-[1.75]" />
        </div>
        <div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1917]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#786b5b] mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Dynamic Product Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group flex flex-col items-center justify-center rounded-xl border border-[#ebdccb] bg-[#f5ede2] p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#eee3d3] hover:shadow-xs cursor-default"
            title={category.description}
          >
            {/* Category Icon */}
            <div className="mb-2.5 flex h-14 w-14 items-center justify-center transition-transform group-hover:scale-108">
              <ShopIcon name={category.icon || category.id} size={42} />
            </div>

            {/* Category Name */}
            <span className="text-xs sm:text-sm font-semibold capitalize text-[#382f25] leading-tight">
              {category.name}
            </span>

            {/* Optional subtle descriptor */}
            {category.description && (
              <span className="mt-1 text-[10px] text-[#867562] line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {category.description}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
