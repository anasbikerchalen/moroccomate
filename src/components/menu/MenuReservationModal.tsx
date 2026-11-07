import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CalendarCheck,
  MessageSquare,
  Globe,
  PhoneCall,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  UtensilsCrossed,
  Trash2,
  Plus,
  Minus
} from 'lucide-react';
import { useTastingStore, formatPrice } from '../../state/tastingStore';
import type { MenuItem } from '../../listings/types';

interface MenuReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName: string;
  city: string;
  reservationContact?: string;
  whatsappNumber?: string;
  bookingUrl?: string;
  website?: string;
  googleMapsUrl?: string;
  bestTimeToVisit?: string;
  averageWaitMinutes?: number;
  paymentMethods?: string[];
}

export default function MenuReservationModal({
  isOpen,
  onClose,
  restaurantName,
  city,
  reservationContact = '',
  whatsappNumber = '',
  bookingUrl = '',
  website = '',
  googleMapsUrl = '',
  bestTimeToVisit = '',
  averageWaitMinutes,
  paymentMethods = [],
}: MenuReservationModalProps) {
  const [copiedText, setCopiedText] = useState(false);
  const {
    selectedDishes,
    currency,
    incrementDish,
    decrementDish,
    removeDish,
    clearDishes,
    getTotalPriceMAD,
    getTotalItemsCount,
  } = useTastingStore();

  if (!isOpen) return null;

  const dishList = Object.values(selectedDishes);
  const totalPriceMAD = getTotalPriceMAD();
  const totalCount = getTotalItemsCount();

  // Strict verification of reservation channels (No fake links or numbers!)
  const cleanPhone = (phoneStr?: string): string => {
    if (!phoneStr) return '';
    const trimmed = phoneStr.trim().toLowerCase();
    if (trimmed === 'not-available' || trimmed === 'none' || trimmed === 'n/a') return '';
    return phoneStr.replace(/[^0-9+]/g, '');
  };

  const cleanUrl = (urlStr?: string): string => {
    if (!urlStr) return '';
    const trimmed = urlStr.trim().toLowerCase();
    if (trimmed === 'not-available' || trimmed === 'none' || trimmed === 'n/a') return '';
    if (urlStr.startsWith('http://') || urlStr.startsWith('https://')) return urlStr.trim();
    return '';
  };

  const verifiedWhatsapp = cleanPhone(whatsappNumber);
  const verifiedPhone = cleanPhone(reservationContact);
  const verifiedBookingUrl = cleanUrl(bookingUrl);
  const verifiedWebsite = cleanUrl(website);
  const hasOnlineReservation = Boolean(verifiedWhatsapp || verifiedBookingUrl || verifiedPhone);

  // Compose clean WhatsApp reservation message with tasting list
  const generateOrderMessage = () => {
    let msg = `Salam! I would like to reserve a table at ${restaurantName} in ${city}.\n\n`;
    if (dishList.length > 0) {
      msg += `We have selected our preferred tasting plates:\n`;
      dishList.forEach((item) => {
        msg += `• ${item.quantity}x ${item.dish.name} (${item.dish.price * item.quantity} DH)\n`;
      });
      msg += `\nEstimated Food Total: ~${totalPriceMAD} DH.\n`;
    }
    msg += `\nPlease let us know your table availability for our party. Choukran!`;
    return msg;
  };

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(generateOrderMessage());
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const whatsappLink = verifiedWhatsapp
    ? `https://wa.me/${verifiedWhatsapp.replace('+', '')}?text=${encodeURIComponent(generateOrderMessage())}`
    : null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-5 bg-stone-900/65 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 16 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-stone-100 overflow-hidden my-6 flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/60 sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/15 flex items-center justify-center text-[#D4863A] shrink-0">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">
                  Reserve at {restaurantName}
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  {totalCount > 0 ? `${totalCount} dishes selected for your tasting visit` : 'Direct verified booking channel'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close reservation dialog"
              className="w-9 h-9 rounded-full bg-stone-200/60 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            {/* Selected Dishes Review List */}
            {dishList.length > 0 ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Your Selected Tasting Plates ({totalCount})
                  </span>
                  <button
                    onClick={clearDishes}
                    className="text-[11px] font-semibold text-rose-600 hover:text-rose-700 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" /> Clear list
                  </button>
                </div>

                <div className="divide-y divide-stone-100 border border-stone-200/80 rounded-2xl bg-stone-50/40 p-2 sm:p-3">
                  {dishList.map(({ dish, quantity }) => (
                    <div key={dish.id} className="py-2.5 flex items-center justify-between gap-3 px-2">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                          {dish.name}
                        </h4>
                        <span className="text-[11px] font-medium text-stone-500">
                          {formatPrice(dish.price, currency)} each
                        </span>
                      </div>

                      {/* Quantity control */}
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-lg p-0.5 shadow-2xs">
                          <button
                            onClick={() => decrementDish(dish.id)}
                            aria-label={`Decrease ${dish.name} quantity`}
                            className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold text-stone-800">
                            {quantity}
                          </span>
                          <button
                            onClick={() => incrementDish(dish, '', restaurantName, city)}
                            aria-label={`Increase ${dish.name} quantity`}
                            className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-bold text-[#C2613C] w-16 text-right font-mono">
                          {formatPrice(dish.price * quantity, currency)}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="pt-3 pb-1 px-2 flex items-center justify-between border-t border-stone-200">
                    <span className="text-xs font-bold text-stone-800">Estimated Total Food Cost</span>
                    <span className="text-sm font-black text-stone-900 font-mono">
                      {formatPrice(totalPriceMAD, currency)}
                      {currency !== 'MAD' && (
                        <span className="text-[10px] text-stone-400 font-normal ml-1">
                          (~{totalPriceMAD} DH)
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleCopyOrder}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedText ? 'Order Copied to Clipboard!' : 'Copy Dish List'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                <UtensilsCrossed className="w-5 h-5 text-[#D4863A] shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700 leading-relaxed">
                  <span className="font-bold text-stone-900 block mb-0.5">No specific plates pre-selected</span>
                  You can reserve your table directly through the verified channels below and order upon arrival.
                </div>
              </div>
            )}

            {/* Verified Booking Methods or Honest Walk-In Banner */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                Reservation & Booking Channels
              </span>

              {hasOnlineReservation ? (
                <div className="space-y-2.5">
                  {/* Verified WhatsApp Channel */}
                  {whatsappLink && (
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-sm cursor-pointer no-underline"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-sm">Reserve via WhatsApp</span>
                            <span className="text-[10px] bg-white/25 px-2 py-0.2 rounded-full font-semibold">
                              Verified
                            </span>
                          </div>
                          <p className="text-xs text-white/80 mt-0.5">
                            Sends your table request & selected dishes directly
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}

                  {/* Verified Online Booking URL */}
                  {verifiedBookingUrl && (
                    <a
                      href={verifiedBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#173042] hover:bg-[#122533] text-white transition-all shadow-sm cursor-pointer no-underline"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-sm">Official Booking Portal</span>
                            <span className="text-[10px] bg-white/20 px-2 py-0.2 rounded-full font-semibold">
                              Verified Official Link
                            </span>
                          </div>
                          <p className="text-xs text-white/80 mt-0.5">
                            Direct reservation on the official venue booking platform
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}

                  {/* Verified Phone Call */}
                  {verifiedPhone && (
                    <a
                      href={`tel:${verifiedPhone}`}
                      className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 hover:bg-stone-50 text-stone-800 transition-all shadow-2xs cursor-pointer no-underline"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-[#D4863A] shrink-0">
                          <PhoneCall className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-bold text-sm block">Call Venue Directly</span>
                          <span className="text-xs text-stone-500 font-mono">{verifiedPhone}</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-stone-700 bg-stone-100 px-3 py-1.5 rounded-lg group-hover:bg-stone-200 transition-colors">
                        Call Now
                      </span>
                    </a>
                  )}
                </div>
              ) : (
                /* Honest Walk-In Fallback (No Fake Links) */
                <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/90 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center text-[#D4863A] shrink-0 mt-0.5">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">
                        Online Reservation Not Available — Walk-In Only
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        This venue does not operate an advance online booking system. Seating is on a genuine first-come, first-served walk-in basis.
                      </p>
                    </div>
                  </div>

                  {bestTimeToVisit && (
                    <div className="flex items-center gap-2 text-xs text-stone-700 bg-white p-2.5 rounded-xl border border-stone-200/60">
                      <Clock className="w-4 h-4 text-[#D4863A] shrink-0" />
                      <span><strong>Best arrival time:</strong> {bestTimeToVisit}</span>
                    </div>
                  )}

                  {googleMapsUrl && (
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#234E35] hover:bg-[#1A3D29] text-white text-xs font-bold transition-all shadow-xs cursor-pointer no-underline"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Get GPS Walking Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Payment & Cash Notice */}
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 text-[11px] text-stone-600 flex items-center justify-between">
              <span>Accepted Payment Methods:</span>
              <span className="font-bold text-stone-800 capitalize">
                {paymentMethods.length > 0 ? paymentMethods.join(', ') : 'Cash (MAD) recommended'}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
