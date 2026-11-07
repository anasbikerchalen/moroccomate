import { cn } from '../../utils/cn';
import { getScoreStyle } from '../../engine/savvyCalculator';
import { SavvyScoreEngine } from '../../engine/savvyScoreEngine';
import { Award, Sparkles, AlertTriangle } from 'lucide-react';

interface SavvyBadgeProps {
  placeId?: string;
  score?: number;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function SavvyBadge({ placeId, score, className, showLabel = true, size = 'md' }: SavvyBadgeProps) {
  let finalScore = score ?? 8.0;

  if (placeId) {
    const intel = SavvyScoreEngine.getPlaceIntel(placeId);
    if (intel) {
      finalScore = intel.happinessScore;
    }
  }

  const { bg, text, border, label } = getScoreStyle(finalScore);

  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 rounded-md gap-1',
    md: 'text-xs px-2.5 py-1 rounded-lg gap-1.5',
    lg: 'text-sm px-3 py-1.5 rounded-xl gap-2 font-semibold'
  };

  const iconSize = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4'
  };

  return (
    <div
      className={cn(
        'inline-flex items-center font-mono border select-none transition-all duration-300 shadow-sm hover:scale-[1.02]',
        bg,
        text,
        border,
        sizeClasses[size],
        className
      )}
    >
      {finalScore >= 8.0 ? (
        <Sparkles className={cn(iconSize[size], 'animate-pulse')} />
      ) : finalScore >= 5.0 ? (
        <Award className={cn(iconSize[size])} />
      ) : (
        <AlertTriangle className={cn(iconSize[size], 'animate-bounce')} />
      )}
      <span>{finalScore.toFixed(1)} Savvy Score</span>
      {showLabel && (
        <span className="opacity-80 text-[10px] font-sans border-l border-current pl-1.5 ml-0.5 hidden sm:inline">
          {label}
        </span>
      )}
    </div>
  );
}
