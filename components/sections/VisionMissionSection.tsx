"use client";

import { useEffect, useRef, useState } from 'react';
import { Eye, Target } from 'lucide-react';

export function VisionMissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with slide from left animation */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
          }`}>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                Vision & <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Mission</span>
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Vision Section */}
          <div className={`transform transition-all duration-1200 delay-300 ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
          }`}>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                To build a digitally secure future by fostering innovation in Cybersecurity, Blockchain, and Web 3.0.
              </p>
            </div>
          </div>
          
          {/* Mission Section */}
          <div className={`transform transition-all duration-1200 delay-600 ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
          }`}>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                To promote hands-on learning in cybersecurity and Web 3.0 applications while bridging the gap between academia and industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}