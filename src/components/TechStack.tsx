
const TechStack = () => {
  const technologies = [
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Vue.js", icon: "💚" },
    { name: "Node.js", icon: "💚" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "SQL", icon: "🗃️" },
    { name: "HTML", icon: "🧡" },
    { name: "CSS", icon: "💙" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {duplicatedTech.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:bg-accent transition-colors min-w-[120px]"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <span className="text-sm font-medium text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
