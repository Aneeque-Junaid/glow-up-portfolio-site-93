
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
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className={`relative overflow-hidden transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex animate-infinite-scroll space-x-8">
            {/* First set */}
            {technologies.map((tech, index) => (
              <div
                key={`first-${tech.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 min-w-[140px] hover:scale-110 hover:shadow-xl group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-center text-slate-300 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
                <div className={`w-full h-1 bg-gradient-to-r ${tech.color} rounded-full mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {technologies.map((tech, index) => (
              <div
                key={`second-${tech.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 min-w-[140px] hover:scale-110 hover:shadow-xl group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-center text-slate-300 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
                <div className={`w-full h-1 bg-gradient-to-r ${tech.color} rounded-full mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
