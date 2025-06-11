
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a passionate full-stack developer with expertise in modern web technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Hello! I'm John Doe</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a software engineer with over 5 years of experience building web applications. 
              I specialize in React, Node.js, and modern JavaScript frameworks. I love turning 
              complex problems into simple, beautiful designs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
