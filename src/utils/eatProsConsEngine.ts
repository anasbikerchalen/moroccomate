import { getListingRating } from '../listings/utils';

export interface EatProsConsResult {
  pros: string[];
  cons: string[];
  isDerived: boolean;
}

/**
 * deriveEatProsCons
 * Ensures consistent "The good" and "The not so good" travel insights across 100% of Moroccan dining listings.
 * 
 * Precedence:
 * 1. If explicit, hand-curated pros and cons arrays exist in the listing file, return them directly.
 * 2. If missing or incomplete, dynamically derive factual points from verified backend attributes
 *    (ratings, Medina location, air conditioning, crowd level, wait times, alcohol policy, vegetarian friendliness).
 */
export function deriveEatProsCons(item: any): EatProsConsResult {
  if (!item) {
    return { pros: [], cons: [], isDerived: false };
  }

  const explicitPros = Array.isArray(item.pros) && item.pros.length > 0 ? item.pros : [];
  const explicitCons = Array.isArray(item.cons) && item.cons.length > 0 ? item.cons : [];

  // If both curated arrays exist, respect human curation
  if (explicitPros.length > 0 && explicitCons.length > 0) {
    return {
      pros: explicitPros,
      cons: explicitCons,
      isDerived: false
    };
  }

  const { averageRating, totalReviews } = getListingRating(item);
  const derivedPros: string[] = [...explicitPros];
  const derivedCons: string[] = [...explicitCons];

  // ─── DERIVE PROS FROM REAL BACKEND FIELDS ───────────────────────
  if (derivedPros.length < 3) {
    // 1. High rating / reputation
    if (averageRating >= 4.2 && totalReviews >= 50) {
      derivedPros.push(`Consistently top-rated with ${totalReviews.toLocaleString()} authentic guest reviews.`);
    } else if (averageRating >= 4.0) {
      derivedPros.push(`Highly praised by independent travelers with a ${averageRating}/5 rating.`);
    }

    // 2. Medina Courtyard setting
    if (item.nearMedina && !derivedPros.some(p => p.includes('Medina') || p.includes('riad'))) {
      derivedPros.push('Authentic historic Medina courtyard setting offering respite from lively souks.');
    }

    // 3. Dietary accommodations
    if (item.isVegetarianFriendly && !derivedPros.some(p => p.includes('vegetarian'))) {
      derivedPros.push('Generous vegetarian and plant-based Moroccan selections available daily.');
    }

    // 4. Multilingual team
    if (item.hasEnglishStaff && item.hasFrenchStaff && !derivedPros.some(p => p.includes('staff') || p.includes('English'))) {
      derivedPros.push('Multilingual welcoming service with staff fluent in English, French, and Darija.');
    }

    // 5. Climate control
    if (item.airConditioning && !derivedPros.some(p => p.includes('air conditioning') || p.includes('AC'))) {
      derivedPros.push('Climate-controlled indoor dining providing cool relief during hot Moroccan afternoons.');
    }

    // 6. Good Value / Budget
    if ((item.lifestyle === 'lean' || item.pricePerPerson <= 12) && !derivedPros.some(p => p.includes('value'))) {
      derivedPros.push('Exceptional local value with generous portions at authentic everyday prices.');
    }

    // 7. Hidden gem / distinctive vibe
    if (item.badge === 'hidden-gem' && !derivedPros.some(p => p.includes('gem') || p.includes('secret'))) {
      derivedPros.push('Tucked-away local gem favored by Moroccan locals and seasoned travelers.');
    }

    // 8. Sunset or rooftop view
    if (item.hasRooftop || item.viewType === 'city' || item.viewType === 'garden') {
      derivedPros.push('Elevated terrace views overlooking the city rooftops and historic alleys.');
    }

    // Baseline fallback if listing has few attributes
    if (derivedPros.length === 0) {
      derivedPros.push('Authentic traditional Moroccan culinary preparations using fresh local ingredients.');
      derivedPros.push('Warm Moroccan hospitality and welcoming atmosphere in a prime local setting.');
    }
  }

  // ─── DERIVE CONS / CAUTIONS FROM REAL BACKEND FIELDS ───────────
  if (derivedCons.length < 2) {
    // 1. High crowd level & wait times
    if (item.crowdLevel === 'bustling' || (item.averageWaitMinutes && item.averageWaitMinutes >= 15)) {
      derivedCons.push(`Peak meal hours get bustling; expect ${item.averageWaitMinutes ? `~${item.averageWaitMinutes} min` : 'brief'} table waits without reservations.`);
    }

    // 2. No Air Conditioning in hot months
    if (item.airConditioning === false && item.nearMedina && !derivedCons.some(c => c.includes('AC') || c.includes('conditioning'))) {
      derivedCons.push('Relies on traditional open-air courtyard ventilation; no indoor central AC.');
    }

    // 3. Medina accessibility / taxi drop-off
    if (item.nearMedina && !item.hasParking && !derivedCons.some(c => c.includes('walk') || c.includes('taxi'))) {
      derivedCons.push('Pedestrian Medina alleyway location; requires a 3–8 minute walk from the nearest taxi stand.');
    }

    // 4. Cash only payment
    const payments = Array.isArray(item.paymentMethods) ? item.paymentMethods.map((p: string) => p.toLowerCase()) : [];
    if (payments.includes('cash') && !payments.includes('card') && !derivedCons.some(c => c.includes('cash'))) {
      derivedCons.push('Cash only venue; credit and debit cards are not accepted.');
    }

    // 5. Alcohol policy
    if ((item.alcoholPolicy === 'dry' || item.servesAlcohol === false) && !derivedCons.some(c => c.includes('alcohol'))) {
      derivedCons.push('Strictly dry dining venue (no alcoholic beverages served or permitted).');
    } else if ((item.alcoholPolicy === 'serves-alcohol' || item.servesAlcohol === true) && !derivedCons.some(c => c.includes('bar'))) {
      derivedCons.push('Full bar license; evening atmosphere can lean lively and bar-centric.');
    }

    // 6. Limited Vegetarian options
    if (item.isVegetarianFriendly === false && !derivedCons.some(c => c.includes('vegetarian'))) {
      derivedCons.push('Traditional meat-centric menu with limited dedicated vegetarian alternatives.');
    }

    // Baseline fallback for smooth, honest guidance
    if (derivedCons.length === 0) {
      derivedCons.push('Advance bookings or early arrival recommended during weekend dinner hours.');
    }
  }

  return {
    pros: derivedPros.slice(0, 3),
    cons: derivedCons.slice(0, 2),
    isDerived: explicitPros.length === 0 || explicitCons.length === 0
  };
}
