
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-16 left-0 w-full h-1 bg-slate-800/20 backdrop-blur-sm z-40">
      <div
        className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 transition-all duration-300 ease-out shadow-lg shadow-cyan-400/30"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
