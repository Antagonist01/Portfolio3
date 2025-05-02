import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const isInitializedRef = useRef(false);
  
  const colors = ['#4A90E2', '#9B51E0', '#F06292', '#00B4D8'];

  // Initialize particles
  const initializeParticles = () => {
    if (!dimensionsRef.current.width || !dimensionsRef.current.height) return;
    
    const particleCount = Math.floor((dimensionsRef.current.width * dimensionsRef.current.height) / 15000);
    particlesRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * dimensionsRef.current.width,
        y: Math.random() * dimensionsRef.current.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  };
  
  // Animation loop
  const animate = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, dimensionsRef.current.width, dimensionsRef.current.height);
    
    // Draw connecting lines first to create a DNA/Web pattern
    for (let i = 0; i < particlesRef.current.length; i++) {
      const p1 = particlesRef.current[i];
      
      // Find the closest 3 particles to connect (creates a web-like structure)
      const connections = [];
      
      for (let j = 0; j < particlesRef.current.length; j++) {
        if (i !== j) {
          const p2 = particlesRef.current[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) { // Increase connection distance for web effect
            connections.push({ particle: p2, distance });
          }
        }
      }
      
      // Sort by distance and take closest 3
      connections.sort((a, b) => a.distance - b.distance);
      const closestConnections = connections.slice(0, 3);
      
      // Draw connections with gradient color
      for (const connection of closestConnections) {
        const p2 = connection.particle;
        const distance = connection.distance;
        
        // Create a gradient for the line
        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        gradient.addColorStop(0, p1.color.replace(')', ', 0.2)').replace('rgb', 'rgba'));
        gradient.addColorStop(1, p2.color.replace(')', ', 0.2)').replace('rgb', 'rgba'));
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        
        // Make lines fade out with distance
        ctx.globalAlpha = 1 - distance / 150;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.8; // Slightly thicker lines
        ctx.stroke();
        ctx.globalAlpha = 1;
        
        // Draw small connecting node in the middle (DNA-like structure)
        if (Math.random() > 0.7) { // Only for some connections
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          
          ctx.beginPath();
          ctx.arc(midX, midY, 1, 0, Math.PI * 2);
          ctx.fillStyle = '#9B51E0';
          ctx.fill();
        }
      }
    }
    
    // Update and draw particles
    for (let i = 0; i < particlesRef.current.length; i++) {
      const p = particlesRef.current[i];
      
      // React to mouse position - particles move away from cursor with improved sensitivity
      if (mousePositionRef.current.x && mousePositionRef.current.y) {
        const dx = p.x - mousePositionRef.current.x;
        const dy = p.y - mousePositionRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Increased sensitivity with 150px radius and stronger force
        if (distance < 150) {
          const force = (150 - distance) / 300; // Stronger force (was /500)
          p.speedX += dx * force;
          p.speedY += dy * force;
          
          // Add a subtle repulsion effect with color change for nearby particles
          if (distance < 50) {
            // Temporarily change color for particles very close to cursor
            const originalColor = p.color;
            p.color = '#F06292'; // Add a pop of color
            
            // Restore original color after a short delay
            setTimeout(() => {
              if (particlesRef.current[i]) {
                particlesRef.current[i].color = originalColor;
              }
            }, 500);
          }
        }
      }
      
      // Apply speed limits - allow faster movement
      p.speedX = Math.max(-2, Math.min(2, p.speedX)); // Increased from -1.5/1.5
      p.speedY = Math.max(-2, Math.min(2, p.speedY)); // Increased from -1.5/1.5
      
      // Update position
      p.x += p.speedX;
      p.y += p.speedY;
      
      // Apply friction
      p.speedX *= 0.98;
      p.speedY *= 0.98;
      
      // Boundary check with wrapping
      if (p.x < 0) p.x = dimensionsRef.current.width;
      if (p.x > dimensionsRef.current.width) p.x = 0;
      if (p.y < 0) p.y = dimensionsRef.current.height;
      if (p.y > dimensionsRef.current.height) p.y = 0;
      
      // Draw the particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
    
    animationFrameId.current = requestAnimationFrame(animate);
  };

  // Setup and initialize
  useEffect(() => {
    // Handle canvas resize
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect();
        dimensionsRef.current = { width, height };
        
        if (canvasRef.current) {
          canvasRef.current.width = width;
          canvasRef.current.height = height;
        }
        
        initializeParticles();
      }
    };
    
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        mousePositionRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }
    };
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial setup
    handleResize();
    
    if (!isInitializedRef.current) {
      isInitializedRef.current = true;
      animationFrameId.current = requestAnimationFrame(animate);
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full -z-10"
    />
  );
};

export default ParticleBackground;