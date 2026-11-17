import { getEatPriceMetrics } from '../../utils/eatPrice';
import { formatDuration } from '../../things-to-do/backend';
import type { AppLanguage } from '../../utils/localeRouting';

export interface FaqEntry {
  question: string;
  answer: string;
}

interface BuildPlaceFaqsParams {
  listing: any;
  category: 'food' | 'sleep' | 'shopping' | 'things-to-do';
  cityLabel: string;
  lang?: AppLanguage;
  ownerAnswer?: string;
}

function cleanName(listing: any): string {
  const raw = String(
    listing?.ui?.name || listing?.name || listing?.title || 'this place'
  );
  return raw.replace(/\s*\(unverified\)\s*$/i, '').trim() || raw;
}

function normalizeCustomFaqs(listing: any): FaqEntry[] {
  const rawList =
    listing?.faqs ||
    listing?.ui?.faqs ||
    listing?.faq ||
    listing?.ui?.faq ||
    [];
  if (!Array.isArray(rawList)) return [];

  const result: FaqEntry[] = [];
  for (const entry of rawList) {
    if (!entry || typeof entry !== 'object') continue;
    const question = String(entry.question || entry.q || '').trim();
    const answer = String(entry.answer || entry.a || '').trim();
    if (question && answer) {
      result.push({ question, answer });
    }
  }
  return result;
}

function mergeUniqueFaqs(custom: FaqEntry[], generated: FaqEntry[], maxItems = 8): FaqEntry[] {
  const seen = new Set<string>();
  const out: FaqEntry[] = [];
  for (const item of [...custom, ...generated]) {
    const key = item.question.toLowerCase().replace(/[^a-z0-9\u0600-\u06ff]+/g, ' ').trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(item);
    if (out.length >= maxItems) break;
  }
  return out;
}

function formatPaymentList(methods: unknown): string {
  if (!Array.isArray(methods) || methods.length === 0) return '';
  return methods
    .map((m) => String(m).replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()))
    .join(', ');
}

/**
 * Generates grounded, data-backed FAQ items for any Moroccan Mate place page
 * (food, sleep, shopping, things-to-do). Always prioritizes per-listing custom
 * curated FAQs and fills remaining slots strictly from verified listing fields.
 */
export function buildPlaceFaqs({
  listing,
  category,
  cityLabel,
  lang = 'en',
  ownerAnswer,
}: BuildPlaceFaqsParams): FaqEntry[] {
  if (!listing) return [];

  const name = cleanName(listing);
  const customFaqs = normalizeCustomFaqs(listing);
  const generated: FaqEntry[] = [];

  const neighborhood = listing?.ui?.neighborhood || listing?.neighborhood || listing?.location?.neighborhood;
  const address =
    listing?.ui?.exactAddressAndCoordinates?.address ||
    listing?.ui?.address ||
    listing?.exactAddressAndCoordinates?.address ||
    listing?.address ||
    listing?.location?.address;
  const locPhrase = neighborhood && neighborhood.toLowerCase() !== cityLabel.toLowerCase()
    ? `${neighborhood}, ${cityLabel}`
    : cityLabel;

  if (category === 'food') {
    const metrics = getEatPriceMetrics(listing);
    const openTime = listing?.ui?.openTime || listing?.openTime;
    const closeTime = listing?.ui?.closeTime || listing?.closeTime;
    const seasonalNote = listing?.ui?.seasonalHoursNote || listing?.seasonalHoursNote;
    const bestTime = listing?.ui?.bestTimeToVisit || listing?.bestTimeToVisit;
    const avgWait = listing?.ui?.averageWaitMinutes ?? listing?.averageWaitMinutes;
    const menu = listing?.ui?.menu || listing?.menu;
    const isHalal = listing?.filter?.isHalal ?? listing?.isHalal;
    const halalStatus = listing?.filter?.halalStatus ?? listing?.halalStatus;
    const alcoholPolicy = listing?.filter?.alcoholPolicy ?? listing?.alcoholPolicy;
    const servesAlcohol = listing?.filter?.servesAlcohol ?? listing?.servesAlcohol;
    const isVeg = listing?.filter?.isVegetarianFriendly ?? listing?.isVegetarianFriendly;
    const reservationMethod: string[] = listing?.ui?.reservationMethod || listing?.reservationMethod || [];
    const reservationContact = listing?.ui?.reservationContact || listing?.reservationContact;
    const hasParking = listing?.filter?.hasParking ?? listing?.hasParking;
    const hasDelivery = listing?.filter?.hasDelivery ?? listing?.hasDelivery;
    const payments = formatPaymentList(listing?.filter?.paymentMethods || listing?.paymentMethods);
    const cuisines: string[] = listing?.quiz?.foodStyles || listing?.foodStyles || [];
    const dishes: string[] = listing?.ui?.bestDishes || listing?.bestDishes || [];

    // 1. Pricing
    if (metrics.perPersonRangeText || metrics.menuRangeText) {
      if (lang === 'fr') {
        generated.push({
          question: `Quels sont les prix moyens chez ${name} à ${cityLabel} ?`,
          answer: `${metrics.perPersonRangeText ? `Le budget moyen est d'environ ${metrics.perPersonRangeText} par personne.` : ''}${metrics.menuRangeText ? ` Les plats de la carte vérifiée vont de ${metrics.menuRangeText}.` : ''}${menu?.serviceChargeIncluded ? ' Le service est inclus dans les prix affichés.' : ''}`.trim(),
        });
      } else if (lang === 'es') {
        generated.push({
          question: `¿Cuánto cuesta comer en ${name} en ${cityLabel}?`,
          answer: `${metrics.perPersonRangeText ? `El gasto medio ronda los ${metrics.perPersonRangeText} por persona.` : ''}${metrics.menuRangeText ? ` Los platos de la carta verificada oscilan entre ${metrics.menuRangeText}.` : ''}`.trim(),
        });
      } else if (lang === 'de') {
        generated.push({
          question: `Wie hoch sind die Preise im ${name} in ${cityLabel}?`,
          answer: `${metrics.perPersonRangeText ? `Rechnen Sie typischerweise mit ${metrics.perPersonRangeText} pro Person.` : ''}${metrics.menuRangeText ? ` Die Gerichte auf der geprüften Speisekarte liegen zwischen ${metrics.menuRangeText}.` : ''}`.trim(),
        });
      } else if (lang === 'ar') {
        generated.push({
          question: `ما هي متوسط الأسعار في ${name} في ${cityLabel}؟`,
          answer: `${metrics.perPersonRangeText ? `يتراوح متوسط التكلفة للشخص الواحد بين ${metrics.perPersonRangeText}.` : ''}${metrics.menuRangeText ? ` تتراوح أسعار الأطباق في القائمة الموثقة بين ${metrics.menuRangeText}.` : ''}`.trim(),
        });
      } else {
        const rangeBit = metrics.perPersonRangeText
          ? `Diners typically spend around ${metrics.perPersonRangeText} per person (average ${metrics.avgPersonText}). `
          : '';
        const menuBit = metrics.menuRangeText
          ? `Verified menu items range from ${metrics.menuRangeText}${menu?.serviceChargeIncluded ? ', with service charges included in listed MAD prices' : ''}.`
          : '';
        generated.push({
          question: `What are the average meal prices at ${name} in ${cityLabel}?`,
          answer: `${rangeBit}${menuBit}`.trim(),
        });
      }
    }

    // 2. Opening hours & best time
    if (openTime && closeTime) {
      if (lang === 'fr') {
        generated.push({
          question: `Quels sont les horaires d'ouverture de ${name} ?`,
          answer: `${name} est ouvert de ${openTime} à ${closeTime}.${seasonalNote ? ` ${seasonalNote}.` : ''}${bestTime ? ` Meilleur moment conseillé : ${bestTime}.` : ''}`,
        });
      } else if (lang === 'es') {
        generated.push({
          question: `¿Cuál es el horario de apertura de ${name}?`,
          answer: `${name} abre de ${openTime} a ${closeTime}.${seasonalNote ? ` ${seasonalNote}.` : ''}${bestTime ? ` Mejor hora recomendada: ${bestTime}.` : ''}`,
        });
      } else if (lang === 'de') {
        generated.push({
          question: `Wann hat ${name} geöffnet?`,
          answer: `${name} ist von ${openTime} bis ${closeTime} Uhr geöffnet.${seasonalNote ? ` ${seasonalNote}.` : ''}${bestTime ? ` Beste Besuchszeit: ${bestTime}.` : ''}`,
        });
      } else if (lang === 'ar') {
        generated.push({
          question: `ما هي ساعات عمل ${name}؟`,
          answer: `يفتح ${name} من الساعة ${openTime} حتى ${closeTime}.${seasonalNote ? ` ${seasonalNote}.` : ''}`,
        });
      } else {
        generated.push({
          question: `What are the opening hours of ${name}?`,
          answer: `${name} is open from ${openTime} to ${closeTime}.${seasonalNote ? ` ${seasonalNote}.` : ''}${bestTime ? ` Best time to visit: ${bestTime}.` : ''}`,
        });
      }
    }

    // 3. Halal & beverage policy
    if (typeof isHalal === 'boolean' || alcoholPolicy) {
      const isDry = alcoholPolicy === 'dry' || servesAlcohol === false;
      if (lang === 'fr') {
        generated.push({
          question: `${name} propose-t-il une cuisine halal ou de l'alcool ?`,
          answer: `${isHalal ? `Oui, les viandes et préparations sont ${halalStatus === 'halal-certified' ? 'certifiées 100 % halal' : 'halal'}. ` : ''}${isDry ? "L'établissement est strictement sans alcool (boissons et mocktails sans alcool uniquement)." : 'Des boissons alcoolisées sont disponibles à la carte.'}${isVeg ? ' Des options végétariennes sont également proposées.' : ''}`.trim(),
        });
      } else if (lang === 'es') {
        generated.push({
          question: `¿La comida es halal y sirven alcohol en ${name}?`,
          answer: `${isHalal ? `Sí, los platos son ${halalStatus === 'halal-certified' ? '100% halal certificados' : 'halal'}. ` : ''}${isDry ? 'El restaurante es estrictamente libre de alcohol.' : 'También ofrece carta de bebidas con alcohol.'}${isVeg ? ' Cuenta además con opciones vegetarianas.' : ''}`.trim(),
        });
      } else if (lang === 'de') {
        generated.push({
          question: `Ist das Essen im ${name} halal und wird Alkohol serviert?`,
          answer: `${isHalal ? `Ja, alle Fleischgerichte sind ${halalStatus === 'halal-certified' ? 'zertifiziert 100 % halal' : 'halal'}. ` : ''}${isDry ? 'Es handelt sich um ein strikt alkoholfreies Restaurant.' : 'Alkoholische Getränke sind verfügbar.'}${isVeg ? ' Vegetarische Gerichte stehen ebenfalls auf der Karte.' : ''}`.trim(),
        });
      } else if (lang === 'ar') {
        generated.push({
          question: `هل الطعام حلال في ${name} وهل يقدم الكحول؟`,
          answer: `${isHalal ? `نعم، جميع اللحوم والأطباق ${halalStatus === 'halal-certified' ? 'حلال معتمد 100%' : 'حلال'}. ` : ''}${isDry ? 'المطعم خالٍ تماماً من المشروبات الكحولية ويقدم عصائر وموكتيلات طازجة.' : 'تتوفر مشروبات متنوعة في القائمة.'}`.trim(),
        });
      } else {
        generated.push({
          question: `Is ${name} halal-friendly and does it serve alcohol?`,
          answer: `${isHalal ? `Yes — meat dishes are ${halalStatus === 'halal-certified' ? '100% halal-certified' : 'halal'}. ` : ''}${isDry ? `${name} is a strictly alcohol-free (dry) venue offering non-alcoholic drinks, fresh juices, and mocktails.` : `${name} holds a license and serves alcoholic beverages alongside dining.`}${isVeg ? ' Vegetarian-friendly dishes are also available.' : ''}`.trim(),
        });
      }
    }

    // 4. Reservations & Popular Dishes
    if (reservationMethod.length > 0 || dishes.length > 0) {
      if (lang === 'en') {
        const resBits: string[] = [];
        if (reservationMethod.includes('walk-in') && reservationMethod.length === 1) {
          resBits.push(`${name} operates primarily on a walk-in basis`);
        } else if (reservationMethod.length > 0) {
          const methodsReadable = reservationMethod
            .map((m) => (m === 'whatsapp' ? 'WhatsApp' : m === 'website' ? 'online booking' : m))
            .join(', ');
          resBits.push(`Reservations can be arranged via ${methodsReadable}${reservationContact ? ` (${reservationContact})` : ''}`);
        }
        if (typeof avgWait === 'number' && avgWait > 0) {
          resBits.push(`typical table/kitchen wait time is around ${avgWait} minutes`);
        }
        if (resBits.length > 0) {
          generated.push({
            question: `Do I need a reservation at ${name}?`,
            answer: `${resBits.join('; ')}.${bestTime ? ` Arriving around ${bestTime} or booking ahead for busy weekend evenings is recommended.` : ''}`,
          });
        }
      }
    }

    // 5. Cuisine & signature dishes
    if (cuisines.length > 0 || dishes.length > 0) {
      if (lang === 'en') {
        generated.push({
          question: `What type of food is ${name} known for?`,
          answer: `${name} specializes in ${cuisines.length > 0 ? cuisines.join(', ') : 'Moroccan'} cuisine in ${locPhrase}.${dishes.length > 0 ? ` Standout signature items include ${dishes.slice(0, 4).join(', ')}.` : ''}`,
        });
      }
    }

    // 6. Location, parking & payment
    if (address || payments || typeof hasParking === 'boolean') {
      if (lang === 'en') {
        const details: string[] = [];
        if (address) details.push(`Located at ${address}`);
        if (typeof hasParking === 'boolean') {
          details.push(hasParking ? 'parking is available nearby' : 'street parking is limited so walking or a short taxi ride is easiest');
        }
        if (payments) details.push(`accepted payment methods include ${payments}`);
        if (hasDelivery) details.push('local delivery is also available');
        generated.push({
          question: `Where is ${name} located and what payment methods are accepted?`,
          answer: `${details.join('. ')}.`,
        });
      }
    }
  } else if (category === 'sleep') {
    const price = Number(listing?.pricePerNight ?? listing?.pricing?.price ?? 0);
    const amenities: string[] = Array.isArray(listing?.amenities) ? listing.amenities : [];
    const checkIn = listing?.logistics?.checkIn || listing?.policies?.check_in;
    const checkOut = listing?.logistics?.checkOut || listing?.policies?.check_out;
    const freeCancel = listing?.freeCancellation;

    if (ownerAnswer) {
      generated.push({
        question:
          lang === 'fr'
            ? `Qui est le propriétaire de ${name} ?`
            : lang === 'es'
              ? `¿Quién es el propietario de ${name}?`
              : lang === 'de'
                ? `Wer ist der Eigentümer von ${name}?`
                : lang === 'ar'
                  ? `من هو مالك ${name}؟`
                  : `Who is the owner of ${name}?`,
        answer: ownerAnswer,
      });
    }

    if (price > 0) {
      generated.push({
        question:
          lang === 'fr'
            ? `Quel est le tarif moyen par nuit à ${name} ?`
            : `How much does a stay at ${name} in ${cityLabel} cost per night?`,
        answer:
          lang === 'fr'
            ? `Les tarifs commencent généralement autour de ${price} MAD par nuit selon la saison et la catégorie de chambre.`
            : `Nightly rates typically start around ${price} MAD per night depending on season, room category, and occupancy.${listing?.hasBreakfast ? ' Breakfast is included with most stays.' : ''}`,
      });
    }

    if (checkIn || checkOut || typeof freeCancel === 'boolean') {
      generated.push({
        question: `What are the check-in times and policies at ${name}?`,
        answer: `${checkIn ? `Check-in is typically from ${checkIn}` : 'Standard Moroccan riad/hotel check-in times apply'}${checkOut ? ` and check-out is until ${checkOut}` : ''}.${typeof freeCancel === 'boolean' ? (freeCancel ? ' Flexible free-cancellation windows are available on select rates.' : ' Check rate conditions at booking for cancellation deadlines.') : ''}`,
      });
    }

    if (amenities.length > 0) {
      generated.push({
        question: `What amenities are available at ${name}?`,
        answer: `Key facilities include ${amenities.slice(0, 8).join(', ')}${amenities.length > 8 ? ', and more' : ''}.`,
      });
    }

    if (address || neighborhood) {
      generated.push({
        question: `Where is ${name} located in ${cityLabel}?`,
        answer: `${name} is situated in ${locPhrase}${address ? ` (${address})` : ''}${listing?.nearMedina ? ', giving convenient walking access to traditional souks and medina alleys' : listing?.nearBeach ? ', near the Atlantic waterfront' : ''}.`,
      });
    }
  } else if (category === 'shopping') {
    const pricingModel = listing?.pricingModel;
    const priceLevel = listing?.priceLevel;
    const workshop = listing?.workshopVisitable;
    const shipping = listing?.shipping;
    const payments = formatPaymentList(listing?.paymentMethods || listing?.payment?.methods);
    const categories: string[] = Array.isArray(listing?.productTypes)
      ? listing.productTypes
      : Array.isArray(listing?.product_categories)
        ? listing.product_categories.map((c: any) => c.title || c.name || c).filter(Boolean)
        : [];
    const bestTime = listing?.bestTimeToVisit;

    generated.push({
      question: `Are prices fixed or negotiable at ${name} in ${cityLabel}?`,
      answer: `${pricingModel === 'fixed' ? `${name} uses transparent fixed pricing` : pricingModel === 'mixed' ? `${name} has fixed tags on smaller goods and negotiable pricing on heirloom pieces` : `Traditional friendly negotiation is customary at ${name}`}.${priceLevel ? ` Price tier: ${priceLevel}.` : ''}`,
    });

    if (categories.length > 0) {
      generated.push({
        question: `What crafts and products can you buy at ${name}?`,
        answer: `${name} specializes in ${categories.slice(0, 6).join(', ')}.${workshop ? ' Visitors can also observe artisans at work in the workshop.' : ''}`,
      });
    }

    if (shipping || payments) {
      generated.push({
        question: `Does ${name} accept cards or offer international shipping?`,
        answer: `${payments ? `Accepted payments: ${payments}. ` : ''}${shipping?.available ? (shipping.international ? 'Worldwide shipping can be arranged for bulky items like rugs or ceramics.' : 'Domestic shipping is available.') : 'Ask in-store regarding courier arrangements for large items.'}`.trim(),
      });
    }

    if (address || bestTime) {
      generated.push({
        question: `When is the best time to visit ${name}?`,
        answer: `${bestTime ? `Best time to visit: ${bestTime}. ` : ''}${address ? `Located at ${address}.` : `Located in ${locPhrase}.`}`.trim(),
      });
    }
  } else if (category === 'things-to-do') {
    const price = Number(listing?.pricing?.price ?? listing?.price ?? 0);
    const pricingType = listing?.pricing?.pricing_type;
    const durationMin = Number(listing?.duration_minutes ?? listing?.durationMinutes ?? 0);
    const durationText = durationMin > 0 ? formatDuration(durationMin) : '';
    const scheduleText = listing?.schedule_text;
    const included: string[] = Array.isArray(listing?.included_items)
      ? listing.included_items.map((x: any) => (typeof x === 'string' ? x : x.title || x.name || '')).filter(Boolean)
      : [];
    const reqs: string[] = Array.isArray(listing?.requirements)
      ? listing.requirements.map((x: any) => (typeof x === 'string' ? x : x.item || x.name || '')).filter(Boolean)
      : [];
    const langs: string[] = Array.isArray(listing?.languages) ? listing.languages : [];

    generated.push({
      question: `How much does ${name} in ${cityLabel} cost and how long does it take?`,
      answer: `${price > 0 ? `Standard price is around ${price} MAD${listing?.pricing?.unit ? ` (${listing.pricing.unit})` : ''}.` : pricingType === 'free' ? `${name} is free to enter or explore.` : 'Pricing varies by group size or season.'}${durationText ? ` Plan for roughly ${durationText}.` : ''}${scheduleText ? ` Typical schedule: ${scheduleText}.` : ''}`,
    });

    if (included.length > 0) {
      generated.push({
        question: `What is included in ${name}?`,
        answer: `Included highlights: ${included.slice(0, 6).join(', ')}.`,
      });
    }

    if (reqs.length > 0 || langs.length > 0 || listing?.booking) {
      generated.push({
        question: `Do I need to book ahead or prepare anything before visiting ${name}?`,
        answer: `${listing?.booking?.reservation_required || listing?.booking?.booking_required ? 'Advance booking is recommended. ' : ''}${langs.length > 0 ? `Languages offered: ${langs.join(', ')}. ` : ''}${reqs.length > 0 ? `What to know/bring: ${reqs.slice(0, 4).join(', ')}.` : ''}`.trim(),
      });
    }

    if (address || neighborhood) {
      generated.push({
        question: `Where is the meeting point or entrance for ${name}?`,
        answer: `${name} is located in ${locPhrase}${address ? ` at ${address}` : ''}${listing?.meeting_point?.details ? ` — ${listing.meeting_point.details}` : ''}.`,
      });
    }
  }

  return mergeUniqueFaqs(customFaqs, generated, 8);
}
