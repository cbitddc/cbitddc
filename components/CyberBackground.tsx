"use client";

import { useEffect, useRef } from 'react';

interface CyberBackgroundProps {
  opacity?: number;
  nodeCount?: number;
  showMatrix?: boolean;
  interactive?: boolean;
}

export function CyberBackground({ 
  opacity = 0.3, 
  nodeCount = 25, 
  showMatrix = false,
  interactive = true 
}: CyberBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const matrixCanvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix Rain Effect
  useEffect(() => {
    if (!showMatrix) return;
    
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

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";
    const matrixArray = matrix.split("");
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    let matrixFrame: number;

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff88';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.globalAlpha = Math.random() * 0.8 + 0.2;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      matrixFrame = requestAnimationFrame(drawMatrix);
    };

    drawMatrix();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(matrixFrame);
    };
  }, [showMatrix]);

  // Network Animation
  useEffect(() => {
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

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      type: 'secure' | 'threat' | 'neutral' | 'firewall';
      pulsePhase: number;
    }> = [];
    
    for (let i = 0; i < nodeCount; i++) {
      const nodeType = Math.random();
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 2,
        type: nodeType > 0.9 ? 'threat' : 
              nodeType > 0.8 ? 'firewall' :
              nodeType > 0.7 ? 'secure' : 'neutral',
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
    
    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      nodes.forEach((node, index) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += 0.03;
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const dist = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + 
              Math.pow(node.y - otherNode.y, 2)
            );
            
            if (dist < 100) {
              ctx.save();
              let connectionColor = '#0099ff';
              let alpha = (100 - dist) / 100 * 0.3;
              
              if (node.type === 'threat' || otherNode.type === 'threat') {
                connectionColor = '#ff0066';
              } else if (node.type === 'secure' || otherNode.type === 'secure') {
                connectionColor = '#00ff88';
              } else if (node.type === 'firewall' || otherNode.type === 'firewall') {
                connectionColor = '#ffaa00';
              }

              ctx.globalAlpha = alpha;
              ctx.strokeStyle = connectionColor;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
        
        // Draw node
        ctx.save();
        let nodeColor = '#0099ff';
        
        switch (node.type) {
          case 'threat':
            nodeColor = '#ff0066';
            break;
          case 'secure':
            nodeColor = '#00ff88';
            break;
          case 'firewall':
            nodeColor = '#ffaa00';
            break;
        }

        const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7;
        const currentSize = node.size * pulse;

        ctx.shadowBlur = 10;
        ctx.shadowColor = nodeColor;
        ctx.globalAlpha = opacity;
        
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#000';
        ctx.globalAlpha = opacity * 0.6;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentSize * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [nodeCount, opacity]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {showMatrix && (
        <canvas
          ref={matrixCanvasRef}
          className="absolute inset-0 w-full h-full opacity-10"
          style={{ background: 'transparent' }}
        />
      )}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent', opacity }}
      />
    </div>
  );
}
