import React from 'react';
import { Bed, Bath, Eye, Users } from 'lucide-react';
import { RoomDetails } from '../../../types/stay';
import { StayIcon } from './StayIcon';

interface RoomDetailsSectionProps {
  room: RoomDetails;
}

export const RoomDetailsSection: React.FC<RoomDetailsSectionProps> = ({ room }) => {
  if (!room) return null;

  // Format bed string (e.g., "1 × Double bed" or "2 × Single bed, 1 × Sofa bed")
  const formattedBeds =
    room.beds && room.beds.length > 0
      ? room.beds.map((b) => `${b.quantity} × ${b.bed_type} bed`).join(', ')
      : '1 × Double bed';

  // Format bathroom label
  const bathroomDisplay =
    room.bathroom_label ||
    (room.bathroom_type === 'private'
      ? 'Private bathroom'
      : room.bathroom_type === 'shared'
      ? 'Shared bathroom'
      : 'No private bathroom');

  // Format view label
  const viewDisplay =
    room.view_label ||
    (room.view_type === 'courtyard'
      ? 'Courtyard view'
      : room.view_type === 'desert'
      ? 'Desert view'
      : room.view_type === 'sea'
      ? 'Sea view'
      : room.view_type === 'garden'
      ? 'Garden view'
      : room.view_type === 'mountain'
      ? 'Mountain view'
      : `${room.view_type} view`);

  return (
    <section className="mb-12 w-full">
      <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight text-[#1c1917]">
        Room details
      </h2>

      <div className="overflow-hidden rounded-xl border border-[#e8dfcf] bg-[#fdfbf7] p-6 shadow-xs">
        {/* Top summary row matching image: Bed Icon + Room Title + Bed Count */}
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#53412d]/10 text-[#3b2d1d]">
            <Bed className="w-6 h-6 text-[#3b2d1d]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1c1917]">
              {room.room_name}
            </h3>
            <p className="text-sm text-[#736554]">
              {formattedBeds}
            </p>
          </div>
        </div>

        {/* 4 Attributes Grid with distinct icons */}
        <div className="grid grid-cols-2 gap-4 border-t border-[#ece4d6] pt-6 sm:grid-cols-4 sm:gap-6">
          {/* 1. Bed */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-[#53412d]">
              <Bed className="w-5 h-5 text-[#53412d]" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#7e6f5e]">
                Bed
              </span>
              <span className="mt-0.5 block text-sm font-medium text-[#1c1917]">
                {formattedBeds}
              </span>
            </div>
          </div>

          {/* 2. Bathroom */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-[#53412d]">
              <Bath className="w-5 h-5 text-[#53412d]" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#7e6f5e]">
                Bathroom
              </span>
              <span className="mt-0.5 block text-sm font-medium text-[#1c1917]">
                {bathroomDisplay}
              </span>
            </div>
          </div>

          {/* 3. View */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-[#53412d]">
              <Eye className="w-5 h-5 text-[#53412d]" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#7e6f5e]">
                View
              </span>
              <span className="mt-0.5 block text-sm font-medium text-[#1c1917]">
                {viewDisplay}
              </span>
            </div>
          </div>

          {/* 4. Sleeps */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-[#53412d]">
              <Users className="w-5 h-5 text-[#53412d]" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#7e6f5e]">
                Sleeps
              </span>
              <span className="mt-0.5 block text-sm font-medium text-[#1c1917]">
                {room.max_guests} {room.max_guests === 1 ? 'guest' : 'guests'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
