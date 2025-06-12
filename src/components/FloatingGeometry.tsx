
const FloatingGeometry = () => {
  const shapes = [
    { type: 'circle', size: 120, x: '10%', y: '20%', duration: '20s', delay: '0s' },
    { type: 'triangle', size: 80, x: '85%', y: '15%', duration: '25s', delay: '2s' },
    { type: 'square', size: 60, x: '20%', y: '70%', duration: '30s', delay: '4s' },
    { type: 'circle', size: 100, x: '80%', y: '60%', duration: '22s', delay: '1s' },
    { type: 'triangle', size: 40, x: '50%', y: '85%', duration: '18s', delay: '3s' },
    { type: 'square', size: 90, x: '5%', y: '50%', duration: '28s', delay: '5s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute opacity-5 ${
            shape.type === 'circle' 
              ? 'rounded-full bg-gradient-to-br from-cyan-400 to-blue-500' 
              : shape.type === 'triangle'
              ? 'bg-gradient-to-br from-emerald-400 to-cyan-500'
              : 'bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg rotate-45'
          } animate-float-slow`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: shape.x,
            top: shape.y,
            animationDuration: shape.duration,
            animationDelay: shape.delay,
            clipPath: shape.type === 'triangle' 
              ? 'polygon(50% 0%, 0% 100%, 100% 100%)' 
              : undefined,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingGeometry;
