
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-indigo-900/10 dark:via-transparent dark:to-blue-900/10" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className={`mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-blue-600 dark:from-indigo-500 dark:to-blue-600 rounded-full flex items-center justify-center text-4xl shadow-2xl">
              👨‍💻
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            John Doe
          </h1>
          
          <p className={`text-xl md:text-2xl text-muted-foreground dark:text-slate-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Full Stack Developer
          </p>
          
          <p className={`text-lg text-muted-foreground dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Passionate about creating exceptional digital experiences with modern technologies. 
            I build scalable web applications that solve real-world problems.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button 
              size="lg" 
              onClick={scrollToAbout} 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-6 border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          <div className={`flex justify-center space-x-6 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:john@example.com" }
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm text-card-foreground hover:text-primary hover:bg-card/80 transition-all duration-300 hover:scale-110 border border-border/50 relative z-20"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 z-10 ${
        isVisible ? 'opacity-100 translate-y-0 animate-bounce' : 'opacity-0 translate-y-4'
      }`}>
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
