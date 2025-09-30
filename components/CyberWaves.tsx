"use client";

import { useEffect, useRef, useState } from 'react';

interface ProfessionalCyberBackgroundProps {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  mouseInfluence?: number;
  animationSpeed?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulsePhase: number;
}

export function CyberWaves({
  className = "",
  particleCount = 60,
  connectionDistance = 120,
  mouseInfluence = 180,
  animationSpeed = 0.3
}: ProfessionalCyberBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeParticles();
    };

    const initializeParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * animationSpeed,
          vy: (Math.random() - 0.5) * animationSpeed,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const handleMouseEnter = () => setIsMouseOver(true);
    const handleMouseLeave = () => setIsMouseOver(false);

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15;
            
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(99, 179, 237, ${opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawParticles = () => {
      particles.forEach(particle => {
        const pulse = Math.sin(time * 0.02 + particle.pulsePhase) * 0.3 + 0.7;
        const currentOpacity = particle.opacity * pulse;

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${currentOpacity})`);
        gradient.addColorStop(0.7, `rgba(99, 179, 237, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(147, 197, 253, ${currentOpacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const updateParticles = () => {
      particles.forEach(particle => {
        if (isMouseOver) {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseInfluence) {
            const force = (mouseInfluence - distance) / mouseInfluence * 0.003;
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vx *= 0.995;
        particle.vy *= 0.995;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        particle.vx += (Math.random() - 0.5) * 0.001;
        particle.vy += (Math.random() - 0.5) * 0.001;

        const maxVelocity = animationSpeed * 2;
        const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (velocity > maxVelocity) {
          particle.vx = (particle.vx / velocity) * maxVelocity;
          particle.vy = (particle.vy / velocity) * maxVelocity;
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      updateParticles();
      drawConnections();
      drawParticles();

      if (time % 200 === 0) {
        const y = Math.random() * canvas.height;
        const gradient = ctx.createLinearGradient(0, y, canvas.width, y);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, y, canvas.width, 2);
      }

      time++;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, connectionDistance, mouseInfluence, animationSpeed, mousePosition, isMouseOver]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ background: 'transparent' }}
    />
  );
}
