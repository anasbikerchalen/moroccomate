import marrakechCourtyardImg from '../../assets/images/blog_marrakech_courtyard_1795297727711.jpg';
import fesCraftImg from '../../assets/images/blog_fes_tannery_craft_1795297727609.jpg';
import riadCourtyardImg from '../../assets/images/blog_riad_courtyard_stay_1795297727755.jpg';
import essaouiraRampartsImg from '../../assets/images/blog_essaouira_ramparts_1795297728937.jpg';
import chefchaouenBlueImg from '../../assets/images/blog_chefchaouen_blue_1795297727706.jpg';
import saharaDunesImg from '../../assets/images/blog_sahara_dunes_dawn_1795297727745.jpg';
import type { BlogImageKey } from '../../data/blog/types';

export interface BlogImageAsset {
  src: string;
  publicPath: string;
  defaultAlt: string;
}

export const BLOG_IMAGE_MAP: Record<BlogImageKey, BlogImageAsset> = {
  'marrakech-courtyard': {
    src: marrakechCourtyardImg,
    publicPath: '/images/blog/marrakech-courtyard.jpg',
    defaultAlt: 'Sunlit Marrakech medina courtyard restaurant table shaded by olive trees',
  },
  'fes-craft': {
    src: fesCraftImg,
    publicPath: '/images/blog/fes-craft.jpg',
    defaultAlt: 'Master zellige artisan assembling hand-cut cobalt ceramic tiles in Fès',
  },
  'riad-courtyard': {
    src: riadCourtyardImg,
    publicPath: '/images/blog/riad-courtyard.jpg',
    defaultAlt: 'Carved cedarwood balcony and marble fountain in a historic Fès riad courtyard',
  },
  'essaouira-ramparts': {
    src: essaouiraRampartsImg,
    publicPath: '/images/blog/essaouira-ramparts.jpg',
    defaultAlt: 'Atlantic swell breaking beside Essaouira sandstone ramparts and blue fishing boats',
  },
  'chefchaouen-blue': {
    src: chefchaouenBlueImg,
    publicPath: '/images/blog/chefchaouen-blue.jpg',
    defaultAlt: 'Quiet stepped blue-washed alleyway and cedar doorway in Chefchaouen',
  },
  'sahara-dunes': {
    src: saharaDunesImg,
    publicPath: '/images/blog/sahara-dunes.jpg',
    defaultAlt: 'First dawn light dividing golden Erg Chebbi sand dunes in Merzouga',
  },
};
