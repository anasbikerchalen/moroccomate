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
import { useAppLanguage, type AppLanguage } from '../../utils/localeRouting';
import { localizePaymentMethod } from '../../data/placeUiI18n';
import type { MenuItem } from '../../listings/types';

const RES_COPY: Record<
  AppLanguage,
  {
    reserveAt: (n: string) => string;
    dishesCountSub: (c: number) => string;
    directChannelSub: string;
    closeAria: string;
    selectedPlates: (c: number) => string;
    clearList: string;
    each: string;
    estimatedTotal: string;
    copied: string;
    copyList: string;
    noPlatesTitle: string;
    noPlatesDesc: string;
    channelsHeading: string;
    reserveWhatsApp: string;
    verified: string;
    whatsappDesc: string;
    officialPortal: string;
    verifiedOfficialLink: string;
    portalDesc: string;
    callVenueDirectly: string;
    callNow: string;
    walkInTitle: string;
    walkInDesc: string;
    bestArrivalTime: string;
    getGpsDirections: string;
    acceptedPayments: string;
    cashRecommended: string;
  }
> = {
  en: {
    reserveAt: (n) => `Reserve at ${n}`,
    dishesCountSub: (c) => `${c} dishes selected for your tasting visit`,
    directChannelSub: 'Direct verified booking channel',
    closeAria: 'Close reservation dialog',
    selectedPlates: (c) => `Your Selected Tasting Plates (${c})`,
    clearList: 'Clear list',
    each: 'each',
    estimatedTotal: 'Estimated Total Food Cost',
    copied: 'Order Copied to Clipboard!',
    copyList: 'Copy Dish List',
    noPlatesTitle: 'No specific plates pre-selected',
    noPlatesDesc: 'You can reserve your table directly through the verified channels below and order upon arrival.',
    channelsHeading: 'Reservation & Booking Channels',
    reserveWhatsApp: 'Reserve via WhatsApp',
    verified: 'Verified',
    whatsappDesc: 'Sends your table request & selected dishes directly',
    officialPortal: 'Official Booking Portal',
    verifiedOfficialLink: 'Verified Official Link',
    portalDesc: 'Direct reservation on the official venue booking platform',
    callVenueDirectly: 'Call Venue Directly',
    callNow: 'Call Now',
    walkInTitle: 'Online Reservation Not Available — Walk-In Only',
    walkInDesc: 'This venue does not operate an advance online booking system. Seating is on a genuine first-come, first-served walk-in basis.',
    bestArrivalTime: 'Best arrival time:',
    getGpsDirections: 'Get GPS Walking Directions on Google Maps',
    acceptedPayments: 'Accepted Payment Methods:',
    cashRecommended: 'Cash (MAD) recommended',
  },
  fr: {
    reserveAt: (n) => `Réserver chez ${n}`,
    dishesCountSub: (c) => `${c} plats sélectionnés pour votre visite`,
    directChannelSub: 'Canal de réservation vérifié',
    closeAria: 'Fermer la fenêtre de réservation',
    selectedPlates: (c) => `Votre sélection de plats (${c})`,
    clearList: 'Tout effacer',
    each: 'l’unité',
    estimatedTotal: 'Estimation totale des plats',
    copied: 'Liste copiée !',
    copyList: 'Copier la liste des plats',
    noPlatesTitle: 'Aucun plat présélectionné',
    noPlatesDesc: 'Vous pouvez réserver directement via les canaux vérifiés ci-dessous et commander sur place.',
    channelsHeading: 'Canaux de réservation',
    reserveWhatsApp: 'Réserver via WhatsApp',
    verified: 'Vérifié',
    whatsappDesc: 'Envoie votre demande de table et vos plats choisis',
    officialPortal: 'Portail de réservation officiel',
    verifiedOfficialLink: 'Lien officiel vérifié',
    portalDesc: 'Réservation directe sur la plateforme officielle du lieu',
    callVenueDirectly: 'Appeler l’établissement',
    callNow: 'Appeler',
    walkInTitle: 'Réservation en ligne indisponible — Sans réservation',
    walkInDesc: 'Cet établissement ne propose pas de réservation en ligne. L’accueil se fait directement sur place selon l’arrivée.',
    bestArrivalTime: 'Meilleure heure d’arrivée :',
    getGpsDirections: 'Itinéraire GPS sur Google Maps',
    acceptedPayments: 'Paiements acceptés :',
    cashRecommended: 'Espèces (MAD) recommandées',
  },
  es: {
    reserveAt: (n) => `Reservar en ${n}`,
    dishesCountSub: (c) => `${c} platos elegidos para tu visita`,
    directChannelSub: 'Canal de reserva verificado',
    closeAria: 'Cerrar diálogo de reserva',
    selectedPlates: (c) => `Platos seleccionados (${c})`,
    clearList: 'Limpiar lista',
    each: 'c/u',
    estimatedTotal: 'Costo total estimado',
    copied: '¡Lista copiada!',
    copyList: 'Copiar lista de platos',
    noPlatesTitle: 'Ningún plato preseleccionado',
    noPlatesDesc: 'Puedes reservar tu mesa directamente mediante los canales verificados y pedir al llegar.',
    channelsHeading: 'Canales de reserva',
    reserveWhatsApp: 'Reservar por WhatsApp',
    verified: 'Verificado',
    whatsappDesc: 'Envía tu solicitud de mesa y platos elegidos directamente',
    officialPortal: 'Portal oficial de reservas',
    verifiedOfficialLink: 'Enlace oficial verificado',
    portalDesc: 'Reserva directa en la plataforma oficial del local',
    callVenueDirectly: 'Llamar al restaurante',
    callNow: 'Llamar',
    walkInTitle: 'Sin reserva online — Solo acceso directo',
    walkInDesc: 'Este local no dispone de sistema de reserva anticipada online. Las mesas se asignan por orden de llegada.',
    bestArrivalTime: 'Mejor hora de llegada:',
    getGpsDirections: 'Cómo llegar en Google Maps',
    acceptedPayments: 'Métodos de pago aceptados:',
    cashRecommended: 'Se recomienda efectivo (MAD)',
  },
  de: {
    reserveAt: (n) => `Reservieren bei ${n}`,
    dishesCountSub: (c) => `${c} Gerichte für deinen Besuch ausgewählt`,
    directChannelSub: 'Geprüfter Buchungskanal',
    closeAria: 'Reservierungsfenster schließen',
    selectedPlates: (c) => `Deine gewählten Gerichte (${c})`,
    clearList: 'Liste leeren',
    each: 'pro Stück',
    estimatedTotal: 'Geschätzter Gesamtpreis',
    copied: 'Liste kopiert!',
    copyList: 'Gerichteliste kopieren',
    noPlatesTitle: 'Keine bestimmten Gerichte vorausgewählt',
    noPlatesDesc: 'Du kannst direkt über die geprüften Kanäle unten reservieren und vor Ort bestellen.',
    channelsHeading: 'Reservierungs- & Buchungskanäle',
    reserveWhatsApp: 'Per WhatsApp reservieren',
    verified: 'Geprüft',
    whatsappDesc: 'Sendet Tischanfrage & gewählte Gerichte direkt',
    officialPortal: 'Offizielles Buchungsportal',
    verifiedOfficialLink: 'Geprüfter offizieller Link',
    portalDesc: 'Direkte Reservierung auf der offiziellen Plattform',
    callVenueDirectly: 'Lokal direkt anrufen',
    callNow: 'Jetzt anrufen',
    walkInTitle: 'Keine Online-Reservierung — Nur Walk-in',
    walkInDesc: 'Dieses Lokal bietet keine Online-Vorreservierung. Sitzplätze werden nach Ankunft vergeben.',
    bestArrivalTime: 'Beste Ankunftszeit:',
    getGpsDirections: 'GPS-Route in Google Maps öffnen',
    acceptedPayments: 'Akzeptierte Zahlungsmittel:',
    cashRecommended: 'Bargeld (MAD) empfohlen',
  },
  ar: {
    reserveAt: (n) => `الحجز في ${n}`,
    dishesCountSub: (c) => `${c} أطباق محددة لزيارتك`,
    directChannelSub: 'قناة حجز موثقة مباشرة',
    closeAria: 'إغلاق نافذة الحجز',
    selectedPlates: (c) => `الأطباق المختارة (${c})`,
    clearList: 'مسح القائمة',
    each: 'للقطعة',
    estimatedTotal: 'التكلفة التقديرية للأطباق',
    copied: 'تم نسخ القائمة!',
    copyList: 'نسخ قائمة الأطباق',
    noPlatesTitle: 'لم يتم تحديد أطباق مسبقاً',
    noPlatesDesc: 'يمكنك حجز طاولتك مباشرة عبر القنوات الموثقة أدناه والطلب عند الوصول.',
    channelsHeading: 'قنوات الحجز المباشر',
    reserveWhatsApp: 'الحجز عبر واتساب',
    verified: 'موثق',
    whatsappDesc: 'يرسل طلب الطاولة والأطباق المختارة مباشرة',
    officialPortal: 'بوابة الحجز الرسمية',
    verifiedOfficialLink: 'رابط رسمي موثق',
    portalDesc: 'حجز مباشر على المنصة الرسمية للمطعم',
    callVenueDirectly: 'الاتصال بالمكان مباشرة',
    callNow: 'اتصل الآن',
    walkInTitle: 'الحجز الإلكتروني غير متوفر — حضور مباشر فقط',
    walkInDesc: 'لا يعتمد هذا المكان نظام حجز إلكتروني مسبقاً، ويتم الجلوس حسب أولوية الحضور.',
    bestArrivalTime: 'أفضل وقت للوصول:',
    getGpsDirections: 'فتح المسار على خرائط جوجل',
    acceptedPayments: 'طرق الدفع المقبولة:',
    cashRecommended: 'يُنصح بالدفع نقداً (MAD)',
  },
};

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
  const lang = useAppLanguage();
  const rc = RES_COPY[lang] || RES_COPY.en;
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
                  {rc.reserveAt(restaurantName)}
                </h3>
                <p className="text-xs text-stone-500 font-medium">
                  {totalCount > 0 ? rc.dishesCountSub(totalCount) : rc.directChannelSub}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label={rc.closeAria}
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
                    {rc.selectedPlates(totalCount)}
                  </span>
                  <button
                    onClick={clearDishes}
                    className="text-[11px] font-semibold text-rose-600 hover:text-rose-700 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" /> {rc.clearList}
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
                          {formatPrice(dish.price, currency)} {rc.each}
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
                    <span className="text-xs font-bold text-stone-800">{rc.estimatedTotal}</span>
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
                    <span>{copiedText ? rc.copied : rc.copyList}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                <UtensilsCrossed className="w-5 h-5 text-[#D4863A] shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700 leading-relaxed">
                  <span className="font-bold text-stone-900 block mb-0.5">{rc.noPlatesTitle}</span>
                  {rc.noPlatesDesc}
                </div>
              </div>
            )}

            {/* Verified Booking Methods or Honest Walk-In Banner */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                {rc.channelsHeading}
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
                            <span className="font-bold text-sm">{rc.reserveWhatsApp}</span>
                            <span className="text-[10px] bg-white/25 px-2 py-0.2 rounded-full font-semibold">
                              {rc.verified}
                            </span>
                          </div>
                          <p className="text-xs text-white/80 mt-0.5">
                            {rc.whatsappDesc}
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
                            <span className="font-bold text-sm">{rc.officialPortal}</span>
                            <span className="text-[10px] bg-white/20 px-2 py-0.2 rounded-full font-semibold">
                              {rc.verifiedOfficialLink}
                            </span>
                          </div>
                          <p className="text-xs text-white/80 mt-0.5">
                            {rc.portalDesc}
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
                          <span className="font-bold text-sm block">{rc.callVenueDirectly}</span>
                          <span className="text-xs text-stone-500 font-mono">{verifiedPhone}</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-stone-700 bg-stone-100 px-3 py-1.5 rounded-lg group-hover:bg-stone-200 transition-colors">
                        {rc.callNow}
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
                        {rc.walkInTitle}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        {rc.walkInDesc}
                      </p>
                    </div>
                  </div>

                  {bestTimeToVisit && (
                    <div className="flex items-center gap-2 text-xs text-stone-700 bg-white p-2.5 rounded-xl border border-stone-200/60">
                      <Clock className="w-4 h-4 text-[#D4863A] shrink-0" />
                      <span><strong>{rc.bestArrivalTime}</strong> {bestTimeToVisit}</span>
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
                      <span>{rc.getGpsDirections}</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Payment & Cash Notice */}
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 text-[11px] text-stone-600 flex items-center justify-between gap-2">
              <span>{rc.acceptedPayments}</span>
              <span className="font-bold text-stone-800 capitalize">
                {paymentMethods.length > 0
                  ? paymentMethods.map((m) => localizePaymentMethod(m, lang)).join(', ')
                  : rc.cashRecommended}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
