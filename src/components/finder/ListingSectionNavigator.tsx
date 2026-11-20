import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../utils/cn';
import {
  computeActiveSectionId,
  filterAvailableNavItems,
  type ListingNavSection,
} from './listingNavUtils';
import logoImg from '../../assets/images/logo.png';
import { playTactileSound, prefersReducedMotion } from '../../utils/playfulFeedback';

export interface ListingNavigatorItem extends ListingNavSection {
  icon: React.ReactNode;
}

interface ListingSectionNavigatorProps {
  items: ListingNavigatorItem[];
  /** Optional externally triggered active ID (e.g., when clicking an in-page tab button) */
  activeSectionOverride?: string;
  className?: string;
}

export const ListingSectionNavigator: React.FC<ListingSectionNavigatorProps> = ({
  items,
  activeSectionOverride,
  className,
}) => {
  const visibleItems = useMemo(() => filterAvailableNavItems(items), [items]);
  const [activeId, setActiveId] = useState<string>(() => visibleItems[0]?.id || '');
  const [stickyTopPx, setStickyTopPx] = useState<number>(0);
  const [isStuck, setIsStuck] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [camelHop, setCamelHop] = useState<boolean>(false);

  const navRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const scrollLockUntilRef = useRef<number>(0);

  // Keep activeId synced when listing changes
  useEffect(() => {
    if (visibleItems.length === 0) return;
    setActiveId((prev) => (visibleItems.some((item) => item.id === prev) ? prev : visibleItems[0].id));
  }, [visibleItems]);

  // Sync activeId when an external tab button explicitly switches sections
  useEffect(() => {
    if (!activeSectionOverride) return;
    if (visibleItems.some((item) => item.id === activeSectionOverride)) {
      setActiveId(activeSectionOverride);
    }
  }, [activeSectionOverride, visibleItems]);

  // Measure enclosing sticky <header> height so the navigator sticks directly beneath it
  useEffect(() => {
    const updateStickyTop = () => {
      const header = document.querySelector('header');
      if (!header) {
        setStickyTopPx(0);
        return;
      }
      const pos = window.getComputedStyle(header).position;
      if (pos === 'sticky' || pos === 'fixed') {
        setStickyTopPx(Math.round(header.getBoundingClientRect().height));
      } else {
        setStickyTopPx(0);
      }
    };

    updateStickyTop();

    const header = document.querySelector('header');
    let resizeObserver: ResizeObserver | null = null;
    if (header && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(updateStickyTop);
      resizeObserver.observe(header);
    }
    window.addEventListener('resize', updateStickyTop, { passive: true });
    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateStickyTop);
    };
  }, []);

  // Scroll-spy, stuck visual shadow & Camel Trail scroll progress tracking
  const syncScrollSpy = useCallback(() => {
    const navEl = navRef.current;
    if (navEl) {
      const navRect = navEl.getBoundingClientRect();
      setIsStuck(navRect.top <= stickyTopPx + 2);
    }

    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const pct = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    setScrollProgress(pct);

    if (Date.now() < scrollLockUntilRef.current) return;

    const navHeight = navEl?.getBoundingClientRect().height || 56;
    const threshold = stickyTopPx + navHeight + 36;

    const isDesktop = window.innerWidth >= 1024;
    const mountedPositions = visibleItems
      .map((item) => {
        if (isDesktop && item.isSideColumnDesktop) return null;
        const el = document.getElementById(item.targetId);
        if (!el) return null;
        return { id: item.id, top: el.getBoundingClientRect().top };
      })
      .filter((entry): entry is { id: string; top: number } => entry !== null);

    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 28;

    const nextActive = computeActiveSectionId(mountedPositions, threshold, atBottom);
    if (nextActive) {
      setActiveId((prev) => (prev === nextActive ? prev : nextActive));
    }
  }, [visibleItems, stickyTopPx]);

  useEffect(() => {
    if (visibleItems.length === 0) return;

    let rafId = 0;
    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        syncScrollSpy();
      });
    };

    syncScrollSpy();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [visibleItems.length, syncScrollSpy]);

  // Smoothly keep the active pill centered horizontally inside narrow mobile tracks
  useEffect(() => {
    const track = trackRef.current;
    const btn = buttonRefs.current[activeId];
    if (!track || !btn || track.scrollWidth <= track.clientWidth) return;

    const targetLeft = btn.offsetLeft - track.clientWidth / 2 + btn.clientWidth / 2;
    track.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
  }, [activeId]);

  if (visibleItems.length < 2) {
    return null;
  }

  const reduceMotion = prefersReducedMotion();

  const handleSelectItem = (item: ListingNavigatorItem) => {
    setActiveId(item.id);
    scrollLockUntilRef.current = Date.now() + 750;
    playTactileSound('tick');

    if (!reduceMotion) {
      setCamelHop(true);
      window.setTimeout(() => setCamelHop(false), 380);
    }

    const performScroll = () => {
      const targetEl =
        document.getElementById(item.targetId) ||
        (item.fallbackTargetId ? document.getElementById(item.fallbackTargetId) : null);
      if (!targetEl) return;

      const navHeight = navRef.current?.getBoundingClientRect().height || 56;
      const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - stickyTopPx - navHeight - 16;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    };

    if (item.onBeforeScroll) {
      item.onBeforeScroll();
      // Wait for conditional tab content to mount before measuring target top
      window.setTimeout(() => {
        window.requestAnimationFrame(performScroll);
      }, 60);
    } else {
      performScroll();
    }
  };

  return (
    <nav
      ref={navRef}
      aria-label="Section navigator"
      style={{ top: `${stickyTopPx}px` }}
      className={cn(
        'sticky z-[15] w-full border-b border-[#EAE2D5] bg-[#FAF8F4]/95 backdrop-blur-sm transition-shadow duration-200',
        isStuck && 'shadow-[0_6px_18px_-8px_rgba(28,21,16,0.10)]',
        className
      )}
      data-testid="listing-section-navigator"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-2.5 sm:px-6 lg:px-8">
        <div
          ref={trackRef}
          role="tablist"
          aria-label="Jump to listing section"
          className="inline-flex max-w-full items-center overflow-x-auto no-scrollbar rounded-full border border-[#E5DDD0] bg-[#FAF8F5] p-[3px] shadow-2xs"
        >
          {visibleItems.map((item, idx) => {
            const isActive = activeId === item.id;
            const prevActive = idx > 0 && visibleItems[idx - 1].id === activeId;
            const showDivider = idx > 0 && !isActive && !prevActive;

            return (
              <React.Fragment key={item.id}>
                {showDivider && (
                  <span
                    className="h-4 w-px bg-[#E5DDD0] shrink-0 mx-0.5"
                    aria-hidden="true"
                  />
                )}
                <button
                  ref={(el) => {
                    buttonRefs.current[item.id] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={item.targetId}
                  onClick={() => handleSelectItem(item)}
                  className={cn(
                    'relative inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-[13px] font-semibold leading-none whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B84F18]',
                    isActive
                      ? 'text-white'
                      : 'text-[#29231F] hover:text-[#B84F18] hover:bg-[#F3ECE2]/65'
                  )}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-[#B84F18] shadow-xs"
                    />
                  )}
                  <span className={cn('relative z-10 shrink-0', isActive ? 'text-white' : 'text-[#3F3329]')}>
                    {item.icon}
                  </span>
                  <span className="relative z-10">{item.label}</span>
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Camel Trail Scroll Progress Track */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-[3px] bg-[#EAE2D5]/55 overflow-visible"
      >
        <div
          className="h-full bg-gradient-to-r from-[#C9A84C] via-[#C85A32] to-[#1F4B34] origin-left rtl:origin-right will-change-transform"
          style={{
            transform: `scaleX(${Math.max(0.02, scrollProgress)})`,
          }}
        />
        {isStuck && !reduceMotion && (
          <motion.div
            animate={camelHop ? { y: [-2, -9, -2] } : { y: 0 }}
            transition={{ duration: 0.34, ease: 'easeOut' }}
            style={{
              insetInlineStart: `calc(${Math.min(97, Math.max(2, scrollProgress * 100))}% - 10px)`,
            }}
            className="hidden sm:flex absolute -top-[14px] w-5 h-5 rounded-full bg-[#FFFDF8] border border-[#C9A84C] shadow-xs items-center justify-center transition-[inset-inline-start] duration-75"
          >
            <img
              src={logoImg}
              alt=""
              className="w-3.5 h-3.5 object-contain select-none"
            />
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default ListingSectionNavigator;
