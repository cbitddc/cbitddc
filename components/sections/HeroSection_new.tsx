"use client";

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Shield, Lock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }
    
    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.save();
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [mousePosition]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Subtle animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
        style={{ background: 'transparent' }}
      />
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              DIGITAL DEFENCE
            </span>
            <br />
            <span className="text-white">CLUB</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empowering the next generation of cybersecurity professionals and blockchain innovators at 
            <span className="text-blue-400 font-semibold"> CBIT</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Join the Club
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              View Events
            </Button>
          </div>
        </div>
        
        {/* Key highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all duration-300">
            <Shield className="text-blue-400 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Cybersecurity</h3>
            <p className="text-gray-400 text-sm">Learn ethical hacking, penetration testing, and digital forensics</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all duration-300">
            <Lock className="text-blue-400 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Blockchain</h3>
            <p className="text-gray-400 text-sm">Master smart contracts, DeFi, and decentralized applications</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all duration-300">
            <Globe className="text-blue-400 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Innovation</h3>
            <p className="text-gray-400 text-sm">Build cutting-edge solutions for digital security challenges</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center">
          <ChevronDown className="text-blue-400 w-8 h-8 animate-bounce cursor-pointer hover:text-blue-300 transition-colors" />
        </div>
      </div>
    </section>
  );
}
