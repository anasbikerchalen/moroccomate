import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Language } from '../../../types/shop';

interface ShopLanguagesCardProps {
  languages: Language[];
}

export const ShopLanguagesCard: React.FC<ShopLanguagesCardProps> = ({ languages }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <div className="rounded-2xl border border-[#ece4d5] bg-white p-6 shadow-2xs h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-7 w-7 items-center justify-center text-[#1c1917]">
          <MessageSquare className="w-5 h-5 stroke-[1.75]" />
        </div>
        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1917]">
          Languages
        </h3>
      </div>

      {/* Spoken Languages List */}
      <div className="pl-1">
        <p className="text-sm sm:text-base font-semibold text-[#1c1917]">
          {languages.map((l) => l.name).join(' · ')}
        </p>
      </div>
    </div>
  );
};
