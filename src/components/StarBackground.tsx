
import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const starCount = 100;
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2;
      
      // Star properties
      const starProps: Star = {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: size,
        duration: 3 + Math.random() * 7,
        delay: Math.random() * 5,
      };
      
      // Apply styles
      star.className = 'star';
      star.style.width = `${starProps.size}px`;
      star.style.height = `${starProps.size}px`;
      star.style.left = `${starProps.x}%`;
      star.style.top = `${starProps.y}%`;
      star.style.animationDuration = `${starProps.duration}s`;
      star.style.animationDelay = `${starProps.delay}s`;
      
      container.appendChild(star);
    }
  }, []);

  return <div ref={containerRef} className="stars" />;
};

export default StarBackground;
