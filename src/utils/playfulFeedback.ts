import { usePassportStore } from '../state/passportStore';

export type TactileSoundKind = 'tick' | 'stamp' | 'compass' | 'sparkle';

let sharedAudioCtx: AudioContext | null = null;

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const Ctx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return null;
  if (!sharedAudioCtx) {
    try {
      sharedAudioCtx = new Ctx();
    } catch {
      return null;
    }
  }
  if (sharedAudioCtx.state === 'suspended') {
    sharedAudioCtx.resume().catch(() => {});
  }
  return sharedAudioCtx;
}

/**
 * Plays a gentle, low-volume acoustic UI cue using Web Audio API.
 * Respects both user soundEnabled preference and prefers-reduced-motion.
 */
export function playTactileSound(kind: TactileSoundKind): void {
  if (prefersReducedMotion()) return;
  if (!usePassportStore.getState().soundEnabled) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    if (kind === 'tick') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(640, now);
      osc.frequency.exponentialRampToValueAtTime(340, now + 0.035);
      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.045);
      return;
    }

    if (kind === 'compass') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.09);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
      return;
    }

    if (kind === 'stamp') {
      // Soft percussive wax-seal thud + warm brass overtone
      const thud = ctx.createOscillator();
      const thudGain = ctx.createGain();
      thud.type = 'sine';
      thud.frequency.setValueAtTime(160, now);
      thud.frequency.exponentialRampToValueAtTime(62, now + 0.11);
      thudGain.gain.setValueAtTime(0.09, now);
      thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
      thud.connect(thudGain);
      thudGain.connect(ctx.destination);
      thud.start(now);
      thud.stop(now + 0.14);

      const chime = ctx.createOscillator();
      const chimeGain = ctx.createGain();
      chime.type = 'triangle';
      chime.frequency.setValueAtTime(587.33, now + 0.05);
      chime.frequency.setValueAtTime(880, now + 0.12);
      chimeGain.gain.setValueAtTime(0.035, now + 0.05);
      chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      chime.connect(chimeGain);
      chimeGain.connect(ctx.destination);
      chime.start(now + 0.05);
      chime.stop(now + 0.34);
      return;
    }

    if (kind === 'sparkle') {
      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = now + i * 0.045;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.03, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.2);
      });
    }
  } catch {
    // Ignore audio context blocks
  }
}

const SPARK_COLORS = ['#C85A32', '#C9A84C', '#1F4B34', '#E59A38', '#173042'];

/**
 * Lightweight, compositor-only particle burst (transform + opacity)
 * around a button or coordinate without blocking clicks or causing layout shifts.
 */
export function spawnSaffronSparks(
  origin: HTMLElement | { x: number; y: number } | null,
  count = 14
): void {
  if (typeof document === 'undefined' || prefersReducedMotion() || !origin) return;

  let originX = window.innerWidth / 2;
  let originY = window.innerHeight / 2;

  if (origin instanceof HTMLElement) {
    const rect = origin.getBoundingClientRect();
    originX = rect.left + rect.width / 2;
    originY = rect.top + rect.height / 2;
  } else {
    originX = origin.x;
    originY = origin.y;
  }

  const container = document.createElement('div');
  container.setAttribute('aria-hidden', 'true');
  container.style.position = 'fixed';
  container.style.left = `${originX}px`;
  container.style.top = `${originY}px`;
  container.style.width = '0px';
  container.style.height = '0px';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '9999';
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    const spark = document.createElement('span');
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
    const distance = 28 + Math.random() * 44;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - 10;
    const size = 5 + Math.random() * 4;
    const isDiamond = i % 3 === 0;

    spark.style.position = 'absolute';
    spark.style.left = `${-size / 2}px`;
    spark.style.top = `${-size / 2}px`;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    spark.style.backgroundColor = SPARK_COLORS[i % SPARK_COLORS.length];
    spark.style.borderRadius = isDiamond ? '1px' : '9999px';
    spark.style.willChange = 'transform, opacity';

    container.appendChild(spark);

    spark.animate(
      [
        {
          transform: `translate3d(0, 0, 0) rotate(0deg) scale(0.5)`,
          opacity: 1,
        },
        {
          transform: `translate3d(${tx}px, ${ty}px, 0) rotate(${isDiamond ? 135 : 45}deg) scale(1)`,
          opacity: 0.9,
          offset: 0.55,
        },
        {
          transform: `translate3d(${tx * 1.25}px, ${ty * 1.25 + 14}px, 0) rotate(${isDiamond ? 220 : 90}deg) scale(0.2)`,
          opacity: 0,
        },
      ],
      {
        duration: 560 + Math.random() * 180,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards',
      }
    );
  }

  window.setTimeout(() => {
    container.remove();
  }, 850);
}
