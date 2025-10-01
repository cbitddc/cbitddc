"use client";

import { ChevronDown } from 'lucide-react';
import { VantaNetBackground } from '../VantaNetBackground';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Vanta.js NET Background */}
      <VantaNetBackground className="z-0" />
      
      {/* Enhanced dark overlay with gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55 z-5"></div>
      
      {/* Additional cybersecurity theme overlay with better positioning */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-blue-900/20 z-6"></div>
      
      {/* Text readability enhancement overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/20 z-7"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Text Content with enhanced cybersecurity theme */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent font-extrabold tracking-tight drop-shadow-2xl">
                Digital Defence Club
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed text-enhanced-shadow">
              Protecting the digital frontier through 
              <span className="text-blue-300 font-semibold"> innovation</span>, 
              <span className="text-blue-200 font-semibold"> education</span>, and 
              <span className="text-blue-300 font-semibold"> collaboration</span>
            </p>
            
            <p className="text-lg md:text-xl text-gray-100 mb-8 text-enhanced-shadow leading-relaxed">
              Join CBIT's premier cybersecurity community and shape the future of digital security
            </p>
          </div>
        </div>
        
        {/* Enhanced scroll indicator with cybersecurity theme */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <ChevronDown className="text-blue-300 w-8 h-8 animate-bounce cursor-pointer hover:text-blue-200 transition-all duration-300 drop-shadow-lg hover:scale-110" />
            <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-pulse scale-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
}