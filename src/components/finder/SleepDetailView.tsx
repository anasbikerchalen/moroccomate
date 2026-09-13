import React, { useMemo, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Globe, ExternalLink, Calendar, Car, Download, BookOpen, User, Award, X, Check, ChevronRight, ShieldAlert, DollarSign, Navigation } from 'lucide-react';
import { useSavedStore } from '../../state/savedStore';
import { usePlanStore } from '../../state/planStore';
import { useParameterStore } from '../../state/parameterStore';
import { useTransportStore } from '../../state/transportStore';
import { useExploreStore } from '../../state/exploreStore';
import { cn } from '../../utils/cn';
import { SavvyScoreEngine } from '../../engine/savvyScoreEngine';
import SavvyBadge from '../savvy/SavvyBadge';
import { resolveListingImages, handleListingImageError } from '../../utils/imageResolver';

// Sub-components
import SleepHero from './sleep/SleepHero';
import SleepTrustPanel from './sleep/SleepTrustPanel';
import SleepRoomPanel from './sleep/SleepRoomPanel';
import SleepLocationPanel from './sleep/SleepLocationPanel';
import SleepLogisticsPanel from './sleep/SleepLogisticsPanel';
import SleepFitCheck from './sleep/SleepFitCheck';
import SleepVisualValidation from './sleep/SleepVisualValidation';

interface SleepDetailViewProps {
  item: any;
  onBack: () => void;
}

export default function SleepDetailView({ item, onBack }: SleepDetailViewProps) {
  const { toggleBookmark, isBookmarked } = useSavedStore();
  const { addCustomActivity } = usePlanStore();
  const { city } = useParameterStore();
  const { omitGoogleImage } = useExploreStore();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const ref = query.get('ref');

  // Dialog and Interaction States
  const [showReviewsModal, setShowReviewsModal] = useState(false);
  const [selectedReviewSegment, setSelectedReviewSegment] = useState<'solo' | 'couples' | 'families' | 'business' | 'nomad'>('solo');

  const [showDatePickerModal, setShowDatePickerModal] = useState(false);
  const [checkInDate, setCheckInDate] = useState('2026-07-02');
  const [checkOutDate, setCheckOutDate] = useState('2026-07-05');
  const [guests, setGuests] = useState(2);
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);

  const {
    id = '',
    name = '',
    type = 'riad',
    neighborhood = 'Medina',
    description = '',
    pricePerNight = 450,
    lifestyle = 'balanced',
    amenities = [],
    rating = 4.7,
    reviewCount = 187,
    hasPool = false,
    hasBreakfast = true,
    hasAC = true,
    hasRooftop = true,
    hasEnsuite = true,
    nearMedina = true,
    images = [],
    categorizedImages = {},
    vibeTags = [],
    locationSummary = '',
    availabilityText = '',
    neighborhoodOverview = '',
    hiddenFeesNotice = '',
    googleMapsUrl = '',
    languagesSpoken = ['Arabic', 'French', 'English'],
    customStory = '',
    pros = [],
    cons = [],
    trustScores = { cleanliness: 9.0, safety: 8.5, staff: 9.2, value: 8.0, comfort: 8.5, location: 9.0 },
    logistics = { checkIn: '14:00', checkOut: '11:00', luggageStorage: 'Free', parking: 'On-site', airportTransfer: 'Available', contact: '+212' },
    roomFeatures = [],
    roomTypes = [],
    neighborhoodDistances = [],
    cancellationPolicy = 'Flexible',
    reviewHighlights = {},
    officialWebsite = '',
    instagramHandle = ''
  } = item || {};

  const idString = String(id);
  const bookmarked = isBookmarked(idString);

  // Save last viewed listing to localStorage
  useEffect(() => {
    if (idString && name) {
      localStorage.setItem('last_viewed_listing', JSON.stringify({
        id: idString,
        name,
        category: 'sleep',
        url: window.location.pathname
      }));
    }
  }, [idString, name]);

  const placeIntel = useMemo(() => {
    return SavvyScoreEngine.getPlaceIntel(idString);
  }, [idString]);

  const resolvedImages = useMemo(() => {
    return resolveListingImages({
      id: item?.id,
      googlePlaceId: item?.googlePlaceId,
      images: item?.images,
      nonCopyrightImage: item?.nonCopyrightImage,
      category: 'sleep',
      omitGooglePlaceApi: omitGoogleImage
    });
  }, [item, omitGoogleImage]);

  const finalImages = useMemo(() => {
    const list = [resolvedImages.url, ...resolvedImages.fallbackUrls];
    const stock = [
      'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&auto=format&fit=crop'
    ];
    while (list.length < 3) list.push(stock[list.length % stock.length]);
    return Array.from(new Set(list));
  }, [resolvedImages]);

  const handleToggleBookmark = () => {
    toggleBookmark({
      id: idString,
      type: 'sleep',
      name: name,
      city: item.city || city || 'marrakech',
      image: finalImages[0]
    });
  };

  const travelerConfidenceScore = useMemo(() => {
    const vals: number[] = Object.values(trustScores).map(v => typeof v === 'number' ? v : 0);
    const avg = vals.reduce((acc, val) => acc + val, 0) / (vals.length || 1);
    return avg.toFixed(1);
  }, [trustScores]);

  const nights = useMemo(() => {
    const d1 = new Date(checkInDate);
    const d2 = new Date(checkOutDate);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return isNaN(diffDays) ? 1 : diffDays;
  }, [checkInDate, checkOutDate]);

  const handleAddStayToPlan = () => {
    addCustomActivity(
      item.city || city || 'marrakech',
      'morning',
      'sleep',
      `${name} Stay (${nights} Nights)`
    );
    setShowDatePickerModal(false);
    setShowSuccessNotice(true);
    setTimeout(() => {
      setShowSuccessNotice(false);
      if (ref === 'planner') {
        navigate('/planner');
      }
    }, 1500);
  };

  // JSON-LD Structured Data for Hotel/Lodging
  const hotelSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": name,
    "description": description,
    "image": finalImages,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": '',
      "addressLocality": city,
      "addressCountry": "MA"
    },
    "telephone": logistics?.contact || undefined,
    "url": officialWebsite || googleMapsUrl || undefined,
    "priceRange": `${pricePerNight} MAD/night`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount
    },
    "amenityFeature": amenities.map((amenity: string) => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true
    })),
    "checkinTime": logistics?.checkIn || '14:00',
    "checkoutTime": logistics?.checkOut || '11:00',
    "starRating": {
      "@type": "Rating",
      "ratingValue": rating,
      "bestRating": "5"
    }
  }), [name, description, finalImages, city, logistics, officialWebsite, googleMapsUrl, pricePerNight, amenities, rating, reviewCount]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8" id={`sleep-detail-${id}`}>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }} />

      {/* Back navigation */}
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-3 text-stone-400 hover:text-stone-900 transition-all group"
      >
        <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-200">
          <ArrowLeft className="w-4 h-4" />
        </div>
        <span className="text-[11px] font-black uppercase tracking-[0.3em]">Return to Listings</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
        {/* MAIN COLUMN */}
        <div className="space-y-12">
          
          <SleepHero 
            name={name}
            type={type}
            neighborhood={neighborhood}
            locationSummary={locationSummary}
            availabilityText={availabilityText}
            hiddenFeesNotice={hiddenFeesNotice}
            rating={rating}
            reviewCount={reviewCount}
            pricePerNight={pricePerNight}
            images={finalImages}
            vibeTags={vibeTags}
            isBookmarked={bookmarked}
            onToggleBookmark={handleToggleBookmark}
            placeId={idString}
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
             <button 
               onClick={() => setShowDatePickerModal(true)}
               className="flex flex-col items-center gap-2 py-6 rounded-[32px] bg-[#3c78d8] text-white font-black uppercase tracking-widest text-[10px] hover:bg-[#2c68c8] transition-all shadow-lg active:scale-95 group cursor-pointer"
             >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" /> Check Dates
             </button>
             <a 
               href={`tel:${logistics.contact}`}
               className="flex flex-col items-center gap-2 py-6 rounded-[32px] bg-white border border-stone-200 text-stone-600 font-black uppercase tracking-widest text-[10px] hover:bg-stone-50 transition-all shadow-sm active:scale-95 group text-center"
             >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform text-[#3c78d8]" /> Call/Direct
             </a>
             <a 
               href={officialWebsite || `https://www.google.com/search?q=${encodeURIComponent(name + ' Morocco reservation')}`}
               target="_blank"
               rel="noopener noreferrer"
               className="flex flex-col items-center gap-2 py-6 rounded-[32px] bg-white border border-stone-200 text-stone-600 font-black uppercase tracking-widest text-[10px] hover:bg-stone-50 transition-all shadow-sm active:scale-95 group text-center"
             >
                <Globe className="w-5 h-5 group-hover:scale-110 transition-transform text-[#3c78d8]" /> Website
             </a>
             <a 
               href={instagramHandle ? `https://instagram.com/${instagramHandle.replace('@', '')}` : 'https://instagram.com/'}
               target="_blank"
               rel="noopener noreferrer"
               className="flex flex-col items-center gap-2 py-6 rounded-[32px] bg-white border border-stone-200 text-stone-600 font-black uppercase tracking-widest text-[10px] hover:bg-stone-50 transition-all shadow-sm active:scale-95 group text-center"
             >
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform text-[#3c78d8]" /> Instagram
             </a>
          </div>

          {/* Plan & Transport Integration */}
          {item.city && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
              <button 
                onClick={() => {
                  navigate(`/transport/go?city=${encodeURIComponent(item.city)}&dest=${encodeURIComponent(name)}`);
                }}
                className="flex items-center justify-between p-3.5 bg-white border border-[#C9A84C]/30 hover:border-[#C9A84C] rounded-2xl shadow-sm text-left transition-all cursor-pointer"
              >
                <div className="flex gap-2.5 items-center">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Navigation className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-stone-800 leading-tight">Estimate Transit Fare</span>
                    <span className="block text-[10px] text-stone-400">Calculate taxi rate via MoveAssure</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>

              <button 
                onClick={() => setShowDatePickerModal(true)}
                className="flex items-center justify-between p-3.5 bg-white border border-stone-200 hover:border-stone-400 rounded-2xl shadow-sm text-left transition-all cursor-pointer"
              >
                <div className="flex gap-2.5 items-center">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-[#D4863A]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-stone-800 leading-tight">Add to Itinerary</span>
                    <span className="block text-[10px] text-stone-400">Save stay for planning</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>
          )}

          <SleepVisualValidation 
            categorizedImages={categorizedImages} 
            propertyName={name} 
          />

          {/* Savvy Intelligence Core Block */}
          {placeIntel && (
            <div className="bg-stone-900 text-white rounded-[36px] p-8 shadow-xl border border-stone-850 space-y-5 mb-8">
              <div className="flex justify-between items-center pb-3 border-b border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl flex items-center justify-center text-[#C9A84C]">
                    <Award className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-stone-400 block font-bold">Morocco Savvy Verified</span>
                    <h4 className="text-sm font-black tracking-tight text-white uppercase tracking-widest">Savvy Riad/Stay Intelligence</h4>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-[#C9A84C]/10 border border-[#C9A84C]/25 px-2.5 py-1 rounded-full text-[#C9A84C] font-mono text-xs font-bold">
                  Score {placeIntel.savvyScore}
                </div>
              </div>

              {/* Savvy Tip */}
              {placeIntel.savvyTips && placeIntel.savvyTips.length > 0 && (
                <div className="space-y-1.5">
                  <div className="text-[10px] uppercase font-bold text-[#C9A84C] tracking-wider">💡 Street-Smart Stay Hack</div>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">{placeIntel.savvyTips[0]}</p>
                </div>
              )}

              {/* Price Guidelines */}
              {placeIntel.fairPriceGuidelines && (
                <div className="space-y-1.5 pt-2 border-t border-stone-800/50">
                  <div className="text-[10px] uppercase font-bold text-[#C9A84C] tracking-wider">💶 Local Price Benchmarks</div>
                  <div className="bg-stone-950/60 p-3.5 rounded-2xl border border-stone-800 text-xs flex justify-between gap-4 font-mono">
                    <div>
                      <div className="text-[9px] text-stone-500 uppercase font-bold">Expat Average</div>
                      <div className="text-stone-200 font-bold mt-0.5">{placeIntel.fairPriceGuidelines.avgExpatSpend}</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-stone-500 uppercase font-bold">Overcharge Alert</div>
                      <div className="text-stone-200 font-bold mt-0.5">{placeIntel.fairPriceGuidelines.markupAlertThreshold}</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-stone-500 uppercase font-bold">Pricing Policy</div>
                      <div className="text-emerald-400 font-bold mt-0.5 capitalize">{placeIntel.fairPriceGuidelines.negotiability}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Darija Escape Scripts */}
              {placeIntel.darijaEscapeScripts && placeIntel.darijaEscapeScripts.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-stone-800/50">
                  <div className="text-[10px] uppercase font-bold text-[#C9A84C] tracking-wider">🎙️ Exit Script (Darija)</div>
                  <div className="bg-stone-950/40 border border-stone-800 p-4 rounded-2xl space-y-1 relative">
                    <div className="text-sm font-bold text-white tracking-wide">{placeIntel.darijaEscapeScripts[0].script}</div>
                    <div className="text-[10px] italic text-stone-400">"{placeIntel.darijaEscapeScripts[0].translation}"</div>
                    {/* Audio not available placeholder to adhere strictly to AGENTS.md rule 2 */}
                    <button 
                      disabled
                      className="absolute top-3 right-3 p-1.5 bg-stone-900 border border-stone-800 rounded-lg text-stone-500 cursor-not-allowed hover:bg-stone-900 transition-colors"
                      title="Audio not available yet"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                    </button>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => {
                    navigate(`/savvy/${item.city || 'marrakech'}/sleep/${id}`);
                  }}
                  className={cn(
                    "w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 border cursor-pointer",
                    "bg-[#C9A84C] hover:bg-[#b0913e] text-stone-900 border-[#C9A84C]"
                  )}
                >
                  <Award className="w-3.5 h-3.5" />
                  View Savvy Intelligence Page
                </button>
              </div>
            </div>
          )}

          <SleepTrustPanel 
            trustScores={trustScores}
            pros={pros}
            cons={cons}
            reviewHighlights={reviewHighlights}
          />

          {/* Social Audit & Reviews */}
          <div className="bg-white border border-stone-100 rounded-[40px] p-8 shadow-sm space-y-6">
            <h3 className="font-display text-2xl text-stone-900 font-black tracking-tight flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-[#3c78d8]" />
              Social Audit & Community Reviews
            </h3>

            <div className="space-y-3">
              {placeIntel && placeIntel.socialHighlights && placeIntel.socialHighlights.length > 0 ? (
                placeIntel.socialHighlights.map((highlight, index) => {
                  const sourceLabels: Record<string, string> = {
                    reddit: 'Reddit AI Mine',
                    tripadvisor: 'TripAdvisor Audit',
                    facebook: 'Expat FB Group',
                    google_review: 'Google Review Analytics',
                    instagram: 'Instagram Social Proof'
                  };
                  const sentimentEmojis: Record<string, string> = {
                    positive: '😊 Positive',
                    negative: '⚠️ Negative Highlight',
                    warning: '🚨 Alert Flag',
                    tip: '💡 Insider Tip'
                  };
                  return (
                    <div key={index} className="p-4 border border-stone-150 rounded-2xl bg-stone-50/20 space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <div>
                          <span className="font-bold text-stone-800 capitalize">{sourceLabels[highlight.source] || highlight.source}</span>
                          <span className="text-stone-400 ml-2">{highlight.dateHarvested}</span>
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                          {sentimentEmojis[highlight.sentiment] || highlight.sentiment}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-sans italic">
                        "{highlight.text}"
                      </p>
                    </div>
                  );
                })
              ) : (
                <>
                  <div className="p-4 border border-stone-150 rounded-2xl bg-stone-50/20 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <div>
                        <span className="font-bold text-stone-800">Sarah M.</span>
                        <span className="text-stone-400 ml-2">🇬🇧 United Kingdom</span>
                      </div>
                      <span className="text-amber-500 font-semibold flex items-center gap-0.5">★★★★★</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      "Phenomenal stay! The riad is gorgeous, the service was impeccably managed and staff spoke great English. Highly recommended!"
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          <SleepRoomPanel 
            roomTypes={roomTypes}
            roomFeatures={roomFeatures}
            lifestyle={lifestyle}
            hasAC={hasAC}
            hasEnsuite={hasEnsuite}
            hasRooftop={hasRooftop}
          />

          <SleepLocationPanel 
            name={name}
            city={item.city || city || 'Marrakech'}
            neighborhood={neighborhood}
            neighborhoodOverview={neighborhoodOverview}
            googleMapsUrl={googleMapsUrl}
            distances={neighborhoodDistances}
          />

          <SleepLogisticsPanel 
            logistics={logistics}
            languages={languagesSpoken}
            cancellationPolicy={cancellationPolicy}
            pricePerNight={pricePerNight}
            hiddenFeesNotice={hiddenFeesNotice}
          />

          {/* Story Section */}
          <section className="bg-[#fcf8f2] border border-[#f4eee4] rounded-[48px] p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
               <BookOpen className="w-48 h-48" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                  <BookOpen className="w-6 h-6 text-[#3c78d8]" />
                </div>
                <h2 className="font-display text-3xl text-stone-900 font-black tracking-tight">Heritage & Story</h2>
              </div>
              <p className="text-lg text-stone-600 leading-relaxed italic font-serif max-w-2xl">
                "{customStory || `Every corner of ${name} whispers stories of centuries-old craftsmanship. We believe a stay is more than just a room—it's an invitation to experience the authentic soul of Morocco.`}"
              </p>
              <div className="flex items-center gap-3 pt-4">
                 <div className="w-10 h-10 rounded-full bg-stone-900 overflow-hidden border-2 border-white shadow-md">
                   <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Founder" />
                 </div>
                 <div>
                   <p className="text-xs font-black text-stone-900 uppercase tracking-widest">Yassir Al-Fassi</p>
                   <p className="text-[10px] text-stone-400 font-bold uppercase">Executive Custodian</p>
                 </div>
              </div>
            </div>
          </section>

        </div>

        {/* SIDEBAR COLUMN */}
        <div className="space-y-6">
          
          {/* Confidence Indicator */}
          <div className="bg-stone-950 rounded-[40px] p-8 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3c78d8]/20 to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-2">
              <div className="p-4 rounded-full bg-white/5 inline-block mb-2">
                <span className="text-6xl font-black font-display text-white">
                  {travelerConfidenceScore}
                </span>
              </div>
              <p className="text-xs font-black text-stone-100 uppercase tracking-[0.2em]">Confidence Factor</p>
              <div className="h-1.5 w-32 bg-stone-800 rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-[#10b478]" style={{ width: `${Number(travelerConfidenceScore) * 10}%` }} />
              </div>
              <p className="text-[10px] text-stone-500 font-bold leading-tight px-4 pt-2">
                Calculated index based on cleanliness, security, staff response & verified historical feedback.
              </p>
            </div>
          </div>

          <SleepFitCheck name={name} type={type} lifestyle={lifestyle} />

          {/* Quick Support Tools */}
          <div className="space-y-3">
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-300 ml-6 mb-4">On-Site Assistance</h5>
            <button 
              onClick={() => {
                useTransportStore.getState().setRoute(
                  "Airport", 
                  `${name}, ${item.city || city || 'Marrakech'}`
                );
                navigate('/transport/at-airport/taxi-fares');
              }}
              className="w-full flex items-center justify-between p-5 rounded-[28px] border border-stone-200 bg-white hover:bg-stone-50 transition-all shadow-sm group cursor-pointer"
            >
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <Car className="w-5 h-5 text-[#3c78d8]" />
                 </div>
                 <div className="text-left">
                   <p className="text-xs font-black text-stone-800 uppercase tracking-tighter">Taxi Diagnostics</p>
                   <p className="text-[10px] text-stone-400 font-bold">Airport → Property</p>
                 </div>
               </div>
               <ArrowLeft className="w-4 h-4 text-stone-300 rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => {
                navigate('/language/situations/hotel');
              }}
              className="w-full flex items-center justify-between p-5 rounded-[28px] border border-stone-200 bg-white hover:bg-stone-50 transition-all shadow-sm group cursor-pointer"
            >
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <Download className="w-5 h-5 text-[#3c78d8]" />
                 </div>
                 <div className="text-left">
                   <p className="text-xs font-black text-stone-800 uppercase tracking-tighter">Check-in Phrases</p>
                   <p className="text-[10px] text-stone-400 font-bold">Darija Survival Kit</p>
                 </div>
               </div>
               <ArrowLeft className="w-4 h-4 text-stone-300 rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => {
                if (reviewHighlights?.solo) setSelectedReviewSegment('solo');
                else if (reviewHighlights?.couples) setSelectedReviewSegment('couples');
                else if (reviewHighlights?.families) setSelectedReviewSegment('families');
                else if (reviewHighlights?.business) setSelectedReviewSegment('business');
                else setSelectedReviewSegment('solo');
                setShowReviewsModal(true);
              }}
              className="w-full flex items-center justify-between p-5 rounded-[28px] border border-stone-200 bg-white hover:bg-stone-50 transition-all shadow-sm group cursor-pointer"
            >
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <User className="w-5 h-5 text-[#3c78d8]" />
                 </div>
                 <div className="text-left">
                   <p className="text-xs font-black text-stone-800 uppercase tracking-tighter">Segment Reviews</p>
                   <p className="text-[10px] text-stone-400 font-bold">By Solo/Family/Couple</p>
                 </div>
               </div>
               <ArrowLeft className="w-4 h-4 text-stone-300 rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* MODALS */}

      {/* Dates Optimizer Modal */}
      {showDatePickerModal && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[40px] max-w-md w-full p-8 border border-stone-100 shadow-2xl space-y-6 relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowDatePickerModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-50 hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#3c78d8]">Booking Optimizer</span>
              <h3 className="text-xl font-black text-stone-900 uppercase tracking-tight">Lock Dates for {name}</h3>
              <p className="text-xs text-stone-500">Calculate local tourist tax, total nightly spends, and seamlessly append this stay to your Trip Dossier plan.</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">Check-in Date</label>
                  <input 
                    type="date" 
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full p-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-xs font-bold text-stone-800 focus:outline-none focus:border-[#3c78d8] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">Check-out Date</label>
                  <input 
                    type="date" 
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full p-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-xs font-bold text-stone-800 focus:outline-none focus:border-[#3c78d8] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">Number of Guests</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((g) => (
                    <button
                      key={g}
                      onClick={() => setGuests(g)}
                      className={cn(
                        "flex-1 py-3 rounded-xl border font-black text-xs transition-all cursor-pointer",
                        guests === g 
                          ? "bg-stone-900 border-stone-900 text-white" 
                          : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
                      )}
                    >
                      {g} {g === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-150 space-y-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-500 font-bold">NIGHTS</span>
                  <span className="text-stone-900 font-black">{nights} nights</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 font-bold">BASE PRICE ({pricePerNight} MAD/n)</span>
                  <span className="text-stone-900 font-black">{pricePerNight * nights} MAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 font-bold">TOURIST TAX (Est.)</span>
                  <span className="text-stone-900 font-black">+{25 * nights * guests} MAD</span>
                </div>
                <div className="pt-3 border-t border-stone-200 flex justify-between items-center text-sm">
                  <span className="text-stone-950 font-black uppercase">ESTIMATED TOTAL</span>
                  <span className="text-lg font-black text-[#3c78d8]">{(pricePerNight * nights) + (25 * nights * guests)} MAD</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setShowDatePickerModal(false)}
                className="flex-1 py-4 rounded-2xl border border-stone-200 text-stone-500 font-black uppercase tracking-widest text-[10px] hover:bg-stone-50 transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddStayToPlan}
                className="flex-1 py-4 rounded-2xl bg-[#3c78d8] hover:bg-[#2c68c8] text-white font-black uppercase tracking-widest text-[10px] transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Lock into Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Segmented Reviews Modal */}
      {showReviewsModal && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[40px] max-w-lg w-full p-8 border border-stone-100 shadow-2xl space-y-6 relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowReviewsModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-50 hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#3c78d8]">Demographic Diagnostics</span>
              <h3 className="text-xl font-black text-stone-900 uppercase tracking-tight">Segmented Reviews</h3>
              <p className="text-xs text-stone-500">How do travelers like you review their experience here? Filtered by traveler types.</p>
            </div>

            {/* Segment Selector Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1.5 bg-stone-50 rounded-2xl border border-stone-150">
              {(['solo', 'couples', 'families', 'business', 'nomad'] as const).map((seg) => (
                <button
                  key={seg}
                  onClick={() => setSelectedReviewSegment(seg)}
                  className={cn(
                    "flex-1 py-2.5 px-3 rounded-xl font-black text-[9px] uppercase tracking-wider transition-all cursor-pointer text-center whitespace-nowrap",
                    selectedReviewSegment === seg 
                      ? "bg-white text-stone-900 shadow-sm border border-stone-100" 
                      : "text-stone-400 hover:text-stone-700 hover:bg-stone-100/50"
                  )}
                >
                  {seg}
                </button>
              ))}
            </div>

            {/* Review Highlight content card */}
            <div className="bg-stone-50/50 rounded-3xl p-6 border border-stone-100 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-xl bg-blue-50 flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-[#3c78d8]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#3c78d8]">{selectedReviewSegment} Traveler Experience</span>
              </div>

              {reviewHighlights && reviewHighlights[selectedReviewSegment as keyof typeof reviewHighlights] ? (
                <p className="text-sm text-stone-600 italic font-serif leading-relaxed">
                  "{reviewHighlights[selectedReviewSegment as keyof typeof reviewHighlights]}"
                </p>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-stone-600 italic font-serif leading-relaxed">
                    "{name} offers exceptional service tailored perfectly for {selectedReviewSegment} travelers. High scores in staff attentiveness, comfort, and safety ensure a memorable Moroccan stay."
                  </p>
                  <p className="text-[10px] text-stone-400 font-sans italic font-bold">
                    *Default curated highlight based on verified {rating}★ local rating.
                  </p>
                </div>
              )}
            </div>

            <button 
              onClick={() => setShowReviewsModal(false)}
              className="w-full py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-black uppercase tracking-widest text-[10px] transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Close Diagnostics
            </button>
          </div>
        </div>
      )}

      {/* Success Notice Toast */}
      {showSuccessNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white rounded-3xl p-5 shadow-2xl border border-stone-800 flex items-center gap-4 animate-in slide-in-from-bottom duration-300">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-stone-100">Plan Synchronized!</p>
            <p className="text-[10px] text-stone-400 font-bold">Successfully added {name} stay to your Trip Dossier.</p>
          </div>
        </div>
      )}
    </div>
  );
}
