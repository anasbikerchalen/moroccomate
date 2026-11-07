import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';

interface TagTooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  position?: 'top' | 'bottom';
}

export default function TagTooltip({
  content,
  children,
  className,
  position = 'top'
}: TagTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside touch for mobile devices
  useEffect(() => {
    function handleTouchOutside(e: TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('touchstart', handleTouchOutside);
    }
    return () => {
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={cn('relative inline-flex items-center', className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      role="button"
      aria-label="Information tooltip"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: position === 'top' ? 4 : -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: position === 'top' ? 4 : -4, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={cn(
              'absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none w-max max-w-[260px] text-left',
              position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
            )}
          >
            <div className="bg-stone-900/95 backdrop-blur-xs text-white text-[11px] leading-relaxed font-sans font-normal py-2 px-3 rounded-xl shadow-xl border border-stone-700/60 text-center">
              {content}
            </div>
            {/* Small arrow pointer */}
            <div
              className={cn(
                'absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-stone-900/95 border-stone-700/60',
                position === 'top'
                  ? 'bottom-[-4px] border-r border-b'
                  : 'top-[-4px] border-l border-t'
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
