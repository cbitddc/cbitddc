"use client";

import { useEffect, useRef } from 'react';

interface VantaWavesBackgroundProps {
  className?: string;
}

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export function VantaWavesBackground({ className = "" }: VantaWavesBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    const initVanta = () => {
      if (window.VANTA && window.THREE) {
        vantaEffect.current = window.VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          // Enhanced cybersecurity theme colors
          color: 0x1e40af, // Cobalt blue for better contrast
          shininess: 25.00, // Further reduced shininess
          waveHeight: 10.00, // Smaller waves for subtlety
          waveSpeed: 0.45, // Slower, more professional motion
          zoom: 0.85, // Slightly more zoomed out
          // Very dark background optimized for text readability
          backgroundColor: 0x020617, // Darker slate-950 equivalent
          // Enhanced material settings
          material: {
            options: {
              wireframe: false,
              side: 2,
              opacity: 0.75, // More transparent for text visibility
              transparent: true
            }
          },
          // Additional wave configuration for cybersecurity theme
          waveDepth: 8.0, // Reduced wave depth
          camera: {
            fov: 45, // Field of view for better perspective
            near: 0.1,
            far: 1000
          }
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
