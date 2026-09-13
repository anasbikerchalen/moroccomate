// src/utils/imageUtils.ts

export const DEFAULT_PLACEHOLDER_IMAGE = '/assets/home/backgrounds/homepage_default_image.jpg';

export * from './imageResolver';

/**
 * Fallback handler for <img> onError event
 */
export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackUrl = DEFAULT_PLACEHOLDER_IMAGE) {
  const target = e.currentTarget;
  if (target.src !== fallbackUrl) {
    target.src = fallbackUrl;
  }
}
