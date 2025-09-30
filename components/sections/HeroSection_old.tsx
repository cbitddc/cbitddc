"use client";

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Shield, Lock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InteractiveGrid } from '../InteractiveGrid';
import { SimpleCyberBackground } from '../SimpleCyberBackground';
import Image from 'next/image';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const matrixCanvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Simple Floating Dots Effect
  useEffect(() => {
    const canvas = matrixCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const dots: Array<{ x: number; y: number; vx: number; vy: number; opacity: number }> = [];
    
    // Initialize floating dots
    for (let i = 0; i < 30; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Wrap around edges
        if (dot.x < 0) dot.x = canvas.width;
        if (dot.x > canvas.width) dot.x = 0;
        if (dot.y < 0) dot.y = canvas.height;
        if (dot.y > canvas.height) dot.y = 0;

        // Draw dot
        ctx.globalAlpha = dot.opacity;
        ctx.fillStyle = '#60a5fa';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Simple Network Animation
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

    // Simple network nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];
    
    // Initialize fewer, simpler nodes
    for (let i = 0; i < 12; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }
    
    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Simple mouse interaction
      nodes.forEach((node, index) => {
        const dx = mousePosition.x - node.x;
        const dy = mousePosition.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150 * 0.001;
          const angle = Math.atan2(dy, dx);
          node.vx += Math.cos(angle) * force;
          node.vy += Math.sin(angle) * force;
        }

        // Update position
        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.99;
        node.vy *= 0.99;
        
        // Boundary collision
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw simple connections
        nodes.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const dist = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + 
              Math.pow(node.y - otherNode.y, 2)
            );
            
            if (dist < 120) {
              ctx.save();
              const alpha = (120 - dist) / 120 * 0.1;
              ctx.globalAlpha = alpha;
              ctx.strokeStyle = '#60a5fa';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
        
        // Draw simple node
        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = '#60a5fa';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 hero-grid-container">
      {/* Interactive Angled Grid Background */}
      <InteractiveGrid 
        gridSize={80}
        opacity={0.4}
        angle={45}
        enableHover={true}
        animated={true}
        className="z-0"
      />
      
      {/* Professional Cyber Background */}
      <SimpleCyberBackground className="z-2 opacity-30" />
      
      {/* Simple Floating Dots Background */}
      <canvas
        ref={matrixCanvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
        style={{ background: 'transparent', zIndex: 3 }}
      />
      
      {/* Simple Network Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ background: 'transparent', zIndex: 4 }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
           style={{ zIndex: 10 }}>
        <div className="mb-8">
          {/* DDC Logo */}
          <div className="flex justify-center mb-8">
            <Image 
              src="/logo.jpeg" 
              alt="Digital Defence Club Logo" 
              width={120} 
              height={120}
              className="rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-400/50 transition-all duration-300 hover:scale-105"
            />
          </div>
          
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
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <Shield className="mr-2 w-5 h-5" />
              Join the Club
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <Globe className="mr-2 w-5 h-5" />
              View Events
            </Button>
          </div>
        </div>
        
        {/* Clean Key highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group">
            <div className="mb-4">
              <Shield className="text-blue-400 w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Cybersecurity</h3>
            <p className="text-gray-400 text-sm">Learn ethical hacking, penetration testing, and digital forensics</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group">
            <div className="mb-4">
              <Lock className="text-blue-400 w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Blockchain</h3>
            <p className="text-gray-400 text-sm">Master smart contracts, DeFi, and decentralized applications</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group">
            <div className="mb-4">
              <Globe className="text-blue-400 w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Innovation</h3>
            <p className="text-gray-400 text-sm">Build cutting-edge solutions for digital security challenges</p>
          </div>
        </div>
        
        {/* Simple Scroll indicator */}
        <div className="flex justify-center">
          <ChevronDown className="text-blue-400 w-8 h-8 animate-bounce cursor-pointer hover:text-blue-300 transition-colors" />
        </div>
      </div>
    </section>
  );
}
