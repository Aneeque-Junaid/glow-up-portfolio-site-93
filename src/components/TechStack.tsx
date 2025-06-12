
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TechStack = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const technologies = [
    { name: "JavaScript", icon: "🟨", color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", icon: "🔷", color: "from-blue-400 to-blue-600" },
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-cyan-600" },
    { name: "Next.js", icon: "▲", color: "from-slate-400 to-slate-600" },
    { name: "Vue.js", icon: "💚", color: "from-green-400 to-green-600" },
    { name: "Node.js", icon: "💚", color: "from-green-500 to-green-700" },
    { name: "Express.js", icon: "🚂", color: "from-gray-400 to-gray-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-400 to-green-600" },
    { name: "SQL", icon: "🗃️", color: "from-orange-400 to-orange-600" },
    { name: "HTML", icon: "🧡", color: "from-orange-400 to-orange-600" },
    { name: "CSS", icon: "💙", color: "from-blue-400 to-blue-600" },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className={`relative overflow-hidden transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex animate-infinite-scroll space-x-8" style={{ width: 'max-content' }}>
            {/* Triple the array for seamless infinite loop */}
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div
                key={`tech-${index}`}
                className="flex-shrink-0 flex flex-col items-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border hover:bg-card/50 transition-all duration-300 min-w-[140px] hover:scale-110 hover:shadow-xl group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
                <div className={`w-full h-1 bg-gradient-to-r ${tech.color} rounded-full mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
