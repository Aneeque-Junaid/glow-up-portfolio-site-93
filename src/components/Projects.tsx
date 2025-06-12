
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github, Play, Pause } from "lucide-react";

const Projects = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [playingDemo, setPlayingDemo] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      demoFrames: ["🏪", "🛍️", "💳", "📊"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
      github: "#",
      live: "#",
      demoFrames: ["📋", "✅", "👥", "🔄"]
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides real-time weather data, forecasts, and location-based services using external APIs.",
      image: "🌤️",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "API Integration"],
      github: "#",
      live: "#",
      demoFrames: ["🌤️", "🌧️", "📍", "📈"]
    }
  ];

  const toggleDemo = (index: number) => {
    setPlayingDemo(playingDemo === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-muted/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border hover:bg-card/90 hover:border-border/70 flex flex-col h-full ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <CardHeader className="flex-shrink-0">
                <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 dark:group-hover:from-primary/30 dark:group-hover:to-secondary/30 transition-all duration-300 border border-border/30 overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {playingDemo === index ? (
                      <div className="animate-pulse">
                        {project.demoFrames[Math.floor(Date.now() / 1000) % project.demoFrames.length]}
                      </div>
                    ) : (
                      project.image
                    )}
                  </div>
                  
                  <button
                    onClick={() => toggleDemo(index)}
                    className="absolute top-3 right-3 p-2 bg-background/90 backdrop-blur-sm rounded-full border border-border/50 hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100"
                    title={playingDemo === index ? "Stop demo" : "Play demo"}
                  >
                    {playingDemo === index ? (
                      <Pause className="w-4 h-4 text-foreground" />
                    ) : (
                      <Play className="w-4 h-4 text-foreground" />
                    )}
                  </button>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-card-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 transition-all duration-300 hover:scale-105 border-border hover:bg-accent hover:text-accent-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
