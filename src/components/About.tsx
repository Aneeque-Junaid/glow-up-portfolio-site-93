
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-95'
            }`}>
              <div className="relative group">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/10 to-blue-600/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-border/50 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <div className="text-8xl">👨‍💻</div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-blue-600/20 dark:from-indigo-500/30 dark:to-purple-500/30 rounded-full opacity-70 blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-primary/20 dark:from-cyan-500/30 dark:to-blue-500/30 rounded-full opacity-70 blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <h3 className="text-2xl font-semibold text-foreground">
                Full Stack Developer & Problem Solver
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                building scalable web applications. I love turning complex problems 
                into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className={`text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-fade-in' : ''
                }`} style={{ animationDelay: '600ms' }}>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className={`text-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-fade-in' : ''
                }`} style={{ animationDelay: '800ms' }}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
