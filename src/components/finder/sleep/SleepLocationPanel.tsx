import React from 'react';
import { MapPin, Navigation, ShoppingBag, Palmtree, Car, Building2, Route } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { useTransportStore } from '../../../state/transportStore';
import { useNavigate } from 'react-router-dom';

interface SleepLocationPanelProps {
  name: string;
  city: string;
  neighborhood: string;
  neighborhoodOverview?: string;
  googleMapsUrl: string;
  distances: {
    label: string;
    distance: string;
    time?: string;
    icon?: string;
  }[];
}

export default function SleepLocationPanel({
  name,
  city,
  neighborhood,
  neighborhoodOverview,
  googleMapsUrl,
  distances
}: SleepLocationPanelProps) {
  const navigate = useNavigate();

  return (
    <section className="bg-white border border-stone-100 rounded-[40px] p-8 shadow-sm space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center">
          <MapPin className="w-5 h-5 text-amber-600" />
        </div>
        <h2 className="font-display text-2xl text-stone-900 font-black tracking-tight">Location & Surroundings</h2>
      </div>

      <div className="flex gap-2">
        <a 
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-32 rounded-[32px] bg-stone-100 border border-stone-100 overflow-hidden relative group shadow-md"
        >
          <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors z-10" />
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" 
            alt="Map context" 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center p-4">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 border border-white/30 group-hover:scale-110 transition-transform">
              <Navigation className="w-5 h-5 text-white drop-shadow-md" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] drop-shadow-md">Open Navigation Suite</span>
          </div>
        </a>
        <button
          onClick={() => {
            useTransportStore.getState().setRoute(null, `${name}, ${city}`);
            navigate('/transport/exploring-city/plan-route');
          }}
          className="flex-1 h-32 rounded-[32px] bg-stone-900 text-white hover:bg-stone-800 transition-all flex flex-col items-center justify-center gap-1 shadow-md active:scale-95 border border-stone-700"
        >
          <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center mb-2 border border-stone-700">
            <Route className="w-5 h-5 text-amber-400" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Plan Route</span>
        </button>
      </div>

      <div className="space-y-5">
        <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-300">Proximity Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {distances.map((dist, i) => (
            <div key={i} className="flex items-center justify-between p-5 rounded-3xl bg-stone-50 border border-stone-100 hover:border-[#3c78d8]/30 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-stone-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  {dist.icon === 'bag' ? <ShoppingBag className="w-5 h-5 text-stone-400 group-hover:text-[#3c78d8]" /> : 
                   dist.icon === 'beach' || dist.icon === 'palm' ? <Palmtree className="w-5 h-5 text-stone-400 group-hover:text-[#3c78d8]" /> :
                   dist.icon === 'car' || dist.icon === 'taxi' ? <Car className="w-5 h-5 text-stone-400 group-hover:text-[#3c78d8]" /> :
                   <Building2 className="w-5 h-5 text-stone-400 group-hover:text-[#3c78d8]" />}
                </div>
                <span className="text-xs font-black text-stone-800 uppercase tracking-tight">{dist.label}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-stone-900">{dist.distance}</p>
                <p className="text-[10px] text-stone-400 font-black uppercase mt-0.5">{dist.time || 'Short Walk'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-stone-900 text-stone-100 rounded-[32px] relative overflow-hidden group shadow-xl">
         <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-[3s]">
           <MapPin className="w-32 h-32" />
         </div>
         <div className="relative z-10">
           <p className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-500 mb-4">The Neighborhood Vibe</p>
           <p className="text-sm leading-relaxed text-stone-300 font-medium">
             {neighborhoodOverview || `Tucked within the arterial alleys of ${neighborhood}, staying at ${name} places you within the literal heart of local daily life. 
             While the immediate vicinity is remarkably serene, a 5-minute walk connects you to the primary vibrant markets and communal squares. 
             Extremely safe for evening exploration.`}
           </p>
         </div>
      </div>
    </section>
  );
}
