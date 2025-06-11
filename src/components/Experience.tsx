
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentor junior developers and contribute to architectural decisions.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      company: "Digital Solutions Ltd.",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern JavaScript frameworks. Collaborated with design and product teams to deliver high-quality solutions.",
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced bug reports by 60%",
        "Improved code coverage to 90%"
      ]
    },
    {
      company: "StartUp Ventures",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      description: "Built responsive web applications and collaborated with backend developers to integrate APIs. Focused on user experience and performance optimization.",
      achievements: [
        "Implemented responsive designs",
        "Optimized loading times by 50%",
        "Enhanced user engagement"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-primary">{exp.position}</h3>
                          <p className="text-lg font-medium">{exp.company}</p>
                        </div>
                        <span className="text-muted-foreground font-medium">{exp.duration}</span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-primary">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
