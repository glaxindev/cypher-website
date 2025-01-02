import React, { useEffect, useRef, useState } from 'react';
import { ParticleSystem } from './ParticleSystem';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const systemRef = useRef<ParticleSystem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Pre-render one frame before showing
    const system = new ParticleSystem(canvasRef.current);
    systemRef.current = system;
    
    // Force one frame render and then show
    system.renderFrame();
    system.start(); // Start the animation
    setIsLoaded(true);

    return () => {
      systemRef.current?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ background: '#121212' }}
    />
  );
};

export default ParticleBackground;