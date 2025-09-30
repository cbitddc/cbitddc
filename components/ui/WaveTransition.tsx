"use client";

interface WaveTransitionProps {
  fromColor?: string;
  toColor?: string;
  direction?: 'up' | 'down';
  className?: string;
}

export function WaveTransition({ 
  fromColor = "rgb(15 23 42)", // slate-900
  toColor = "rgb(255 255 255)", // white
  direction = 'down',
  className = "" 
}: WaveTransitionProps) {
  const path = direction === 'down' 
    ? "M0,0 C320,100 420,0 640,50 C860,100 960,0 1280,0 L1280,100 L0,100 Z"
    : "M0,100 C320,0 420,100 640,50 C860,0 960,100 1280,100 L1280,0 L0,0 Z";

  return (
    <div className={`relative w-full h-20 ${className}`}>
      <svg 
        viewBox="0 0 1280 100" 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`gradient-${direction}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path 
          d={path}
          fill={`url(#gradient-${direction})`}
        />
      </svg>
    </div>
  );
}
