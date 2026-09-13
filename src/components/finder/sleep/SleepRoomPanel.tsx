import React from 'react';
import { Bed, ChevronRight, Wind, Wifi, VolumeX, Tv, Bath, Sun, CheckCircle2 } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface SleepRoomPanelProps {
  roomTypes: {
    name: string;
    view?: string;
    price: number;
    beds: string;
    size: string;
    available?: boolean;
    urgentText?: string;
    image?: string;
  }[];
  lifestyle: string;
  hasAC: boolean;
  hasEnsuite: boolean;
  hasRooftop: boolean;
  roomFeatures?: string[];
}

export default function SleepRoomPanel({
  roomTypes,
  lifestyle,
  hasAC,
  hasEnsuite,
  hasRooftop,
  roomFeatures = []
}: SleepRoomPanelProps) {
  return (
    <section className="bg-white border border-stone-100 rounded-[40px] p-8 shadow-sm space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-stone-50 flex items-center justify-center">
          <Bed className="w-5 h-5 text-stone-900" />
        </div>
        <h2 className="font-display text-2xl text-stone-900 font-black tracking-tight">Rooms & Sleeping Arrangements</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {roomTypes.map((room, idx) => (
          <div key={idx} className="group cursor-pointer rounded-[32px] border border-stone-100 overflow-hidden bg-stone-50/30 hover:border-blue-200 hover:shadow-xl transition-all active:scale-[0.98]">
            <div className="relative h-40 overflow-hidden bg-stone-200">
              <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              {room.available && (
                <span className="absolute top-4 right-4 flex items-center px-3 py-1 rounded-full bg-black/80 text-[10px] font-black text-white uppercase backdrop-blur-md border border-white/10">
                  {room.urgentText || 'Available'}
                </span>
              )}
            </div>
            <div className="p-5">
              <h4 className="text-base font-black text-stone-900 mb-1">{room.name}</h4>
              <div className="flex items-center gap-4 text-[11px] text-stone-400 font-bold uppercase mb-4">
                <span>{room.beds}</span>
                <span className="w-1 h-1 rounded-full bg-stone-200" />
                <span>{room.size}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-black text-stone-900">{room.price} MAD</span>
                  <span className="text-[10px] text-stone-400 font-bold ml-1 uppercase">/ unit</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white border border-stone-100 flex items-center justify-center group-hover:bg-[#3c78d8] group-hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-5 pt-4">
        <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-300">Standard Room Standards</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { icon: Wind, label: 'Air Conditioning', active: hasAC },
            { icon: Wifi, label: 'Fiber Wi-Fi', active: true },
            { icon: VolumeX, label: 'Soundproofing', active: roomFeatures.includes('soundproof') },
            { icon: Tv, label: 'Digital Nomad Hub', active: roomFeatures.includes('workspace') || lifestyle === 'premium' },
            { icon: Bath, label: 'Ensuite Bathroom', active: hasEnsuite },
            { icon: Sun, label: 'Private Balcony', active: roomFeatures.includes('balcony') || hasRooftop }
          ].map((feat, i) => (
            <div key={i} className={cn(
              "flex items-center gap-3 p-4 rounded-2xl border text-[11px] font-black uppercase tracking-tight transition-all",
              feat.active ? "bg-stone-50 border-stone-200 text-stone-800" : "bg-stone-50/50 border-stone-100 text-stone-300 pointer-events-none opacity-60"
            )}>
              <feat.icon className={cn("w-4 h-4", feat.active ? "text-[#3c78d8]" : "text-stone-200")} />
              <span>{feat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
