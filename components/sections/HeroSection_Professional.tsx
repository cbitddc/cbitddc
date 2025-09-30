"use client";

import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VantaNetBackground } from '../VantaNetBackground';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Vanta.js Network Background */}
      <VantaNetBackground className="z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left space-y-8 lg:space-y-0 lg:space-x-12">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src="/logo.jpeg" 
              alt="Digital Defence Club Logo" 
              width={200} 
              height={200}
              className="rounded-3xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-400/30 transition-all duration-500"
            />
          </div>
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Digital Defence Club
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Empowering the next generation of cybersecurity professionals at 
              <span className="text-blue-400 font-semibold"> CBIT</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 text-lg"
              >
                Join the Club
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 px-8 py-4 rounded-lg font-medium transition-all duration-300 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="text-blue-400 w-8 h-8 animate-bounce cursor-pointer hover:text-blue-300 transition-colors" />
        </div>
      </div>
    </section>
  );
}
