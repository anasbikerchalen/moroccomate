import React, { useState } from 'react';
import { BLOG_IMAGE_MAP } from './blogImageMap';
import type { BlogImageKey } from '../../data/blog/types';

interface BroadsheetImageProps {
  imageKey: BlogImageKey;
  alt?: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
}

export const BroadsheetImage: React.FC<BroadsheetImageProps> = ({
  imageKey,
  alt,
  className = '',
  aspectClass = 'aspect-[16/9]',
  priority = false,
}) => {
  const [failed, setFailed] = useState(false);
  const asset = BLOG_IMAGE_MAP[imageKey];
  const resolvedAlt = alt || asset.defaultAlt;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#FAF3EA] border border-[#E9D8C8]/80 ${aspectClass} ${className}`}
    >
      {!failed ? (
        <img
          src={asset.src}
          alt={resolvedAlt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#FAF3EA]">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#C85A32]">
            Moroccan Mate Blog
          </span>
          <span className="mt-2 font-display text-lg font-semibold text-[#29231F] max-w-xs text-balance">
            {resolvedAlt}
          </span>
        </div>
      )}
    </div>
  );
};
