"use client";

import { useEffect, useRef } from 'react';

interface VantaNetBackgroundProps {
  className?: string;
}

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export function VantaNetBackground({ className = "" }: VantaNetBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    const initVanta = () => {
      if (window.VANTA && window.THREE) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          // Cobalt blue theme colors
          color: 0x1e40af, // Cobalt blue
          backgroundColor: 0x0f172a, // Dark slate
          points: 8.00,
          maxDistance: 25.00,
          spacing: 18.00,
          showDots: true
        });
      }
    };

    // Check if scripts are already loaded
    if (window.VANTA && window.THREE) {
      initVanta();
    } else {
      // Wait for scripts to load
      const checkForVanta = setInterval(() => {
        if (window.VANTA && window.THREE) {
          clearInterval(checkForVanta);
          initVanta();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkForVanta), 10000);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
