"use client";

interface ZigzagTransitionProps {
  fromColor?: string;
  toColor?: string;
  direction?: 'up' | 'down';
  className?: string;
}

export function ZigzagTransition({ 
  fromColor = "rgb(15 23 42)", // slate-900
  toColor = "rgb(255 255 255)", // white
  direction = 'down',
  className = "" 
}: ZigzagTransitionProps) {
  // Create a more pronounced zigzag path with sharper angles
  const path = direction === 'down' 
    ? "M0,0 L120,60 L240,0 L360,60 L480,0 L600,60 L720,0 L840,60 L960,0 L1080,60 L1200,0 L1280,30 L1280,100 L0,100 Z"
    : "M0,100 L120,40 L240,100 L360,40 L480,100 L600,40 L720,100 L840,40 L960,100 L1080,40 L1200,100 L1280,70 L1280,0 L0,0 Z";

  return (
    <div className={`relative w-full h-20 ${className}`}>
      <svg 
        viewBox="0 0 1280 100" 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`zigzag-gradient-${direction}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path 
          d={path}
          fill={`url(#zigzag-gradient-${direction})`}
        />
      </svg>
    </div>
  );
}
