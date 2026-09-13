import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Bath, Bed, Image as ImageIcon, Map, Waves, Utensils, Users } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface SleepVisualValidationProps {
  categorizedImages?: {
    rooms?: string[];
    bathrooms?: string[];
    exterior?: string[];
    commonAreas?: string[];
    views?: string[];
    pool?: string[];
    restaurant?: string[];
    guests?: string[];
  };
  propertyName: string;
}

export default function SleepVisualValidation({ categorizedImages, propertyName }: SleepVisualValidationProps) {
  const [activeCategory, setActiveCategory] = useState<string>('rooms');

  if (!categorizedImages || Object.keys(categorizedImages).length === 0) return null;

  const categories = [
    { id: 'rooms', label: 'The Bedrooms', icon: Bed, images: categorizedImages.rooms },
    { id: 'bathrooms', label: 'The Bathrooms', icon: Bath, images: categorizedImages.bathrooms },
    { id: 'exterior', label: 'Architecture', icon: ImageIcon, images: categorizedImages.exterior },
    { id: 'views', label: 'The View', icon: Map, images: categorizedImages.views },
    { id: 'pool', label: 'Leisure', icon: Waves, images: categorizedImages.pool },
    { id: 'restaurant', label: 'Dining', icon: Utensils, images: categorizedImages.restaurant },
    { id: 'commonAreas', label: 'Common Areas', icon: Users, images: categorizedImages.commonAreas },
    { id: 'guests', label: 'Guest Vibe', icon: Camera, images: categorizedImages.guests },
  ].filter(c => c.images && c.images.length > 0);

  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <section className="bg-[#f8f9fa] border border-stone-100 rounded-[48px] p-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
              <Camera className="w-6 h-6 text-[#3c78d8]" />
            </div>
            <h2 className="font-display text-3xl text-stone-900 font-black tracking-tight">Visual Validation</h2>
          </div>
          <p className="text-stone-500 font-medium max-w-lg leading-relaxed">
            Travelers evaluate bathrooms and bedrooms first. Explore the dedicated galleries of {propertyName} to visualize your stay.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 p-1.5 bg-stone-200/50 backdrop-blur-sm rounded-3xl overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                  activeCategory === cat.id 
                    ? "bg-white text-stone-900 shadow-sm" 
                    : "text-stone-500 hover:text-stone-700 hover:bg-stone-50"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[40px] overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-2 p-2"
          >
            {currentCategory?.images?.slice(0, 4).map((img, i) => (
              <div 
                key={i} 
                className={cn(
                  "relative rounded-3xl overflow-hidden shadow-sm",
                  i === 0 ? "col-span-2 row-span-2" : ""
                )}
              >
                <img 
                  src={img} 
                  alt={`${currentCategory.label} ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-8 pt-4">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center gap-1.5 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-white border border-stone-100 flex items-center justify-center shadow-sm">
              <cat.icon className="w-4 h-4 text-stone-900" />
            </div>
            <span className="text-[8px] font-bold uppercase tracking-tighter text-stone-500">{cat.id}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
