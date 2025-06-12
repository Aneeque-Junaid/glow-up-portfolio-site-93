
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  color: string;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const lightColors = [
      'rgb(59, 130, 246)',   // blue-500
      'rgb(16, 185, 129)',   // emerald-500
      'rgb(6, 182, 212)',    // cyan-500
      'rgb(99, 102, 241)',   // indigo-500
      'rgb(139, 92, 246)',   // violet-500
    ];

    const darkColors = [
      'rgb(16, 185, 129)', // emerald
      'rgb(6, 182, 212)',  // cyan
      'rgb(59, 130, 246)', // blue
      'rgb(34, 197, 94)',  // green
      'rgb(20, 184, 166)', // teal
    ];

    const createParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = window.innerWidth < 768 ? 20 : 40;
      const isDark = document.documentElement.classList.contains('dark');
      const colors = isDark ? darkColors : lightColors;

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          opacity: isDark ? Math.random() * 0.3 + 0.1 : Math.random() * 0.2 + 0.05,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          const newX = particle.x + particle.speedX;
          const newY = particle.y + particle.speedY;

          return {
            ...particle,
            x: newX > window.innerWidth
              ? 0
              : newX < 0
              ? window.innerWidth
              : newX,
            y: newY > window.innerHeight
              ? 0
              : newY < 0
              ? window.innerHeight
              : newY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);

    const handleResize = () => {
      createParticles();
    };

    // Listen for theme changes
    const observer = new MutationObserver(createParticles);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
