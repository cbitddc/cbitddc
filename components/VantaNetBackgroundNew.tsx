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

export function VantaNetBackgroundNew({ className = "" }: VantaNetBackgroundProps) {
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
          // Enhanced cobalt blue theme
          color: 0x2563eb, // Bright cobalt blue for connections
          backgroundColor: 0x020617, // Very dark background for contrast
          points: 10.00, // More connection points
          maxDistance: 22.00, // Optimal connection distance
          spacing: 16.00, // Closer spacing for more density
          showDots: true, // Show the connection dots
          // Additional styling for cybersecurity theme
          opacity: 0.8, // Slightly transparent for text readability
          speed: 0.5 // Slower animation for professional look
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