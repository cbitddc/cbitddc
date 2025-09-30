"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

interface InteractiveGridProps {
  gridSize?: number;
  opacity?: number;
  className?: string;
  enableHover?: boolean;
  animated?: boolean;
  angle?: number;
}

export function InteractiveGrid({ 
  gridSize = 60, 
  opacity = 0.3, 
  className = "",
  enableHover = true,
  animated = false,
  angle = 45
}: InteractiveGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCell, setHoveredCell] = useState<{x: number, y: number} | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const calculateGridCell = useCallback((x: number, y: number) => {
    // For simplicity, let's use a simpler grid calculation for angled grids
    const cellX = Math.floor(x / gridSize) * gridSize + gridSize / 2;
    const cellY = Math.floor(y / gridSize) * gridSize + gridSize / 2;
    
    return { x: cellX, y: cellY };
  }, [gridSize]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !enableHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const cellPos = calculateGridCell(x, y);
      setHoveredCell(cellPos);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setHoveredCell(null);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enableHover, calculateGridCell]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `
          linear-gradient(${angle}deg, rgba(59, 130, 246, ${opacity * 0.4}) 1px, transparent 1px),
          linear-gradient(${angle - 90}deg, rgba(59, 130, 246, ${opacity * 0.4}) 1px, transparent 1px)
        `,
        backgroundSize: `${gridSize}px ${gridSize}px`,
        opacity: isHovering ? 0.8 : 0.4,
        transition: 'opacity 0.3s ease'
      }}
    >
      {/* Individual cell highlight */}
      {hoveredCell && isHovering && (
        <div
          className="absolute pointer-events-none z-10 transition-all duration-200"
          style={{
            left: hoveredCell.x,
            top: hoveredCell.y,
            width: gridSize,
            height: gridSize,
            background: `
              radial-gradient(circle, 
                rgba(59, 130, 246, 0.4) 0%, 
                rgba(59, 130, 246, 0.2) 50%, 
                transparent 100%
              )
            `,
            border: '1px solid rgba(59, 130, 246, 0.6)',
            borderRadius: '8px',
            transform: `translate(-50%, -50%) rotate(${angle}deg) scale(1.1)`,
            boxShadow: `
              0 0 20px rgba(59, 130, 246, 0.5),
              inset 0 0 15px rgba(59, 130, 246, 0.2)
            `,
            animation: animated ? 'gridCellPulse 1s ease-in-out infinite' : 'none'
          }}
        />
      )}
      
      {/* Enhanced grid overlay on hover */}
      {isHovering && (
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `
              linear-gradient(${angle}deg, rgba(59, 130, 246, ${opacity * 0.6}) 2px, transparent 2px),
              linear-gradient(${angle - 90}deg, rgba(59, 130, 246, ${opacity * 0.6}) 2px, transparent 2px)
            `,
            backgroundSize: `${gridSize * 2}px ${gridSize * 2}px`,
            opacity: 0.6
          }}
        />
      )}
    </div>
  );
}
