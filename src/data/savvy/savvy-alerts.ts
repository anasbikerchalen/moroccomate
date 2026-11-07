import { ScamIntel } from '../../types/savvy';
import { SocialScamPost } from './social-scams-data';
import { scamIntelDB } from './scam-intel';
import { SOCIAL_SCAM_THOUGHTS } from './social-scams-data';

export type AlertSource = 'official' | 'social';
export type SituationCategory = 'street' | 'transport' | 'shopping' | 'food' | 'accommodation' | 'digital' | 'authority' | 'all';

export interface UnifiedAlert {
  id: string;
  source: AlertSource;
  title: string;
  description: string;
  cityId: string;
  category: SituationCategory;
  severity: 'low' | 'medium' | 'high' | 'critical';
  preventionTip: string;
  sourcePlatform?: string;
  originalUrl?: string;
  upvotesOrReactions?: number;
  dateAdded: string;
  imageUrl?: string;
  socialProof?: {
    text: string;
    source: string;
    author?: string;
  }[];
}

const SCAM_IMAGES: Record<string, string> = {
  'taxi-no-meter': '/assets/images/taxi_meter_trap_1786821275608.jpg',
  'argan-oil-mix': '/assets/images/fake_argan_oil_1786821289973.jpg',
  'henna-grab': '/assets/images/the_henna_grab_1786821300210.jpg',
  'overpriced-souvenir': '/assets/images/overpriced_souvenir_1786821309919.jpg',
  'fake-guide-closed-way': '/assets/images/closed_road_guide_1786821319616.jpg',
};

function mapSocialToUnified(post: SocialScamPost): UnifiedAlert {
  return {
    id: post.id,
    source: 'social',
    title: post.title,
    description: post.summaryTakeaway,
    cityId: post.cityId,
    category: post.scamCategory as SituationCategory,
    severity: post.severityLevel,
    preventionTip: post.preventionTip,
    sourcePlatform: post.sourcePlatform,
    originalUrl: post.originalUrl,
    upvotesOrReactions: post.upvotesOrReactions,
    dateAdded: post.dateAdded,
    socialProof: [{
      text: post.quoteOrContent,
      source: post.sourcePlatform,
      author: post.authorOrThread,
    }],
  };
}

function mapOfficialToUnified(scam: ScamIntel): UnifiedAlert {
  return {
    id: scam.id,
    source: 'official',
    title: scam.title,
    description: scam.description,
    cityId: Object.keys(scam.cityPriority)[0] || 'all',
    category: scam.category as SituationCategory,
    severity: scam.severity,
    preventionTip: scam.yourMove || scam.howToExit,
    dateAdded: '2024-01',
    imageUrl: SCAM_IMAGES[scam.id],
    socialProof: scam.socialProofQuotes?.map(q => ({
      text: q.text,
      source: q.source,
      author: q.author,
    })),
  };
}

export const ALL_ALERTS: UnifiedAlert[] = [
  ...scamIntelDB.map(mapOfficialToUnified),
  ...SOCIAL_SCAM_THOUGHTS.map(mapSocialToUnified),
];

export function getAlertsForCity(cityId: string): UnifiedAlert[] {
  return ALL_ALERTS.filter(a => a.cityId === cityId || a.cityId === 'all');
}

export function getAlertsBySource(cityId: string, source: AlertSource): UnifiedAlert[] {
  return getAlertsForCity(cityId).filter(a => a.source === source);
}

export function getAlertsByCategory(cityId: string, category: SituationCategory): UnifiedAlert[] {
  return getAlertsForCity(cityId).filter(a => category === 'all' || a.category === category);
}

export function getAlertCounts(cityId: string): { official: number; social: number; total: number } {
  const alerts = getAlertsForCity(cityId);
  return {
    official: alerts.filter(a => a.source === 'official').length,
    social: alerts.filter(a => a.source === 'social').length,
    total: alerts.length,
  };
}
