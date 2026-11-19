import React, { useRef, useState } from 'react';
import { Eye } from 'lucide-react';
import { cn } from '../../utils/cn';
import { prefersReducedMotion, playTactileSound } from '../../utils/playfulFeedback';

interface TiltPeekCardProps {
  children: React.ReactNode;
  className?: string;
  onQuickPeek?: () => void;
  quickPeekLabel?: string;
}

/**
 * Tactile 3D-tilt interactive card container with warm gold radial sheen
 * and optional Quick-Peek trigger button.
 */
export const TiltPeekCard: React.FC<TiltPeekCardProps> = ({
  children,
  className,
  onQuickPeek,
  quickPeekLabel = 'Quick peek',
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState<{ rx: number; ry: number; gx: number; gy: number; active: boolean }>({
    rx: 0,
    ry: 0,
    gx: 50,
    gy: 50,
    active: false,
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || prefersReducedMotion()) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 9;
    const rx = (0.5 - py) * 9;
    setTilt({
      rx,
      ry,
      gx: Math.round(px * 100),
      gy: Math.round(py * 100),
      active: true,
    });
  };

  const handlePointerLeave = () => {
    setTilt({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        transform: tilt.active
          ? `perspective(900px) rotateX(${tilt.rx.toFixed(2)}deg) rotateY(${tilt.ry.toFixed(2)}deg) translateY(-3px)`
          : 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: tilt.active
          ? 'transform 120ms cubic-bezier(0.16, 1, 0.3, 1)'
          : 'transform 320ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={cn('relative group/tilt will-change-transform', className)}
    >
      {/* Subtle warm gold sheen following cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-200"
        style={{
          opacity: tilt.active ? 1 : 0,
          background: `radial-gradient(240px circle at ${tilt.gx}% ${tilt.gy}%, rgba(201, 168, 76, 0.14), transparent 70%)`,
        }}
      />

      {children}

      {onQuickPeek && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            playTactileSound('tick');
            onQuickPeek();
          }}
          title={quickPeekLabel}
          aria-label={quickPeekLabel}
          className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-[#FAF8F4]/95 hover:bg-[#173042] text-[#173042] hover:text-white border border-[#E2D6C3] hover:border-[#173042] px-2.5 py-1 text-[11px] font-bold shadow-2xs transition-all duration-150 cursor-pointer opacity-90 sm:opacity-0 sm:group-hover/tilt:opacity-100 focus-visible:opacity-100 whitespace-nowrap shrink-0"
        >
          <Eye className="w-3 h-3 shrink-0" />
          <span>Peek</span>
        </button>
      )}
    </div>
  );
};

export default TiltPeekCard;
