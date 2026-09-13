import React from 'react';
import { Briefcase, LogIn, LogOut, Car, Globe, Phone, Wifi, Coffee, Shirt, Bell, Info, Shield, DollarSign, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface SleepLogisticsPanelProps {
  logistics: {
    checkIn: string;
    checkOut: string;
    luggageStorage: string;
    parking: string;
    airportTransfer: string;
    contact: string;
  };
  languages: string[];
  cancellationPolicy: string;
  pricePerNight: number;
  hiddenFeesNotice?: string;
}

export default function SleepLogisticsPanel({
  logistics,
  languages,
  cancellationPolicy,
  pricePerNight,
  hiddenFeesNotice
}: SleepLogisticsPanelProps) {
  return (
    <div className="space-y-6">
      {/* Logistics */}
      <section className="bg-white border border-stone-100 rounded-[40px] p-8 shadow-sm space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-stone-900 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h2 className="font-display text-2xl text-stone-900 font-black tracking-tight">Practical Logistics</h2>
        </div>
        
        <div className="grid grid-cols-1 divide-y divide-stone-100 bg-stone-50/50 rounded-[32px] border border-stone-100 overflow-hidden">
          {[
            { icon: LogIn, label: 'Check-in Time', val: logistics.checkIn },
            { icon: LogOut, label: 'Check-out Time', val: logistics.checkOut },
            { icon: Briefcase, label: 'Luggage Policy', val: logistics.luggageStorage, highlight: true },
            { icon: Car, label: 'Parking Data', val: logistics.parking },
            { icon: Globe, label: 'Host Languages', val: languages.join(' · ') },
            { icon: Phone, label: 'Contact Index', val: logistics.contact, mono: true }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-5 px-6 group hover:bg-white transition-colors">
              <span className="text-[11px] font-black uppercase tracking-widest text-stone-400 flex items-center gap-4 mb-1 sm:mb-0">
                <item.icon className="w-4 h-4 text-[#3c78d8]" /> {item.label}
              </span>
              <span className={cn(
                "text-sm font-black transition-all",
                item.highlight ? "text-emerald-700" : "text-stone-900",
                item.mono && "font-mono text-[#3c78d8]"
              )}>
                {item.val}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: Wifi, label: 'Free Wi-Fi', active: true },
            { icon: Coffee, label: 'Breakfast', active: true },
            { icon: Shirt, label: 'Laundry', active: true },
            { icon: Bell, label: '24h Front', active: true }
          ].map((serv, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-5 rounded-[24px] border border-stone-100 bg-white hover:border-[#3c78d8]/40 transition-all shadow-sm">
              <serv.icon className={cn("w-6 h-6 mb-2", serv.active ? "text-[#3c78d8]" : "text-stone-200")} />
              <span className="text-[9px] font-black text-stone-500 uppercase tracking-widest text-center">{serv.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Value Panel */}
      <section className="bg-white border border-stone-100 rounded-[40px] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="font-display text-2xl text-stone-900 font-black tracking-tight">Pricing Transparency</h2>
        </div>

        <div className="bg-stone-50/80 rounded-[32px] p-6 space-y-5 border border-stone-100 shadow-inner">
          <div className="flex justify-between text-sm">
            <span className="text-stone-500 font-bold uppercase tracking-tight">Base Room Rate</span>
            <span className="text-stone-900 font-black">{pricePerNight} MAD</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-stone-500 font-bold uppercase tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Traditional Breakfast
            </span>
            <span className="text-emerald-700 font-black uppercase tracking-tighter">Included ✓</span>
          </div>
          {hiddenFeesNotice ? (
             <div className="flex justify-between text-sm">
               <span className="text-stone-500 font-bold uppercase tracking-tight flex items-center gap-2">
                 <AlertCircle className="w-4 h-4 text-amber-500" /> Mandatory Local Fees
               </span>
               <span className="text-amber-700 font-black text-[10px] uppercase">{hiddenFeesNotice}</span>
             </div>
          ) : (
            <div className="flex justify-between text-sm">
              <span className="text-stone-500 font-bold uppercase tracking-tight">Tourist Tax Estimates</span>
              <span className="text-stone-900 font-black">~25 MAD / person</span>
            </div>
          )}
          <div className="pt-6 border-t border-stone-200 flex justify-between items-center">
            <span className="text-sm font-black text-stone-900 uppercase tracking-widest">Total Nightly Quote</span>
            <span className="text-3xl font-display font-black text-[#3c78d8]">{pricePerNight + 25} MAD</span>
          </div>
        </div>

        <div className="flex items-start gap-5 p-6 rounded-[32px] bg-blue-50/60 border border-blue-100 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-white border border-blue-100 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-black text-stone-900 uppercase tracking-widest">Cancellation Policy</p>
            <p className="text-xs text-stone-600 font-bold leading-relaxed">{cancellationPolicy}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
