
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

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
    <section ref={sectionRef} id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            } origin-top`}></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative pl-20 transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${(index + 1) * 200}ms` : '0ms'
                  }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-slate-950 transition-all duration-500 ${
                    isVisible ? 'scale-100' : 'scale-0'
                  }`} style={{ 
                    transitionDelay: isVisible ? `${(index + 1) * 300}ms` : '0ms'
                  }}></div>
                  
                  <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-lg font-medium text-slate-200">{exp.company}</p>
                        </div>
                        <span className="text-slate-400 font-medium">{exp.duration}</span>
                      </div>
                      
                      <p className="text-slate-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-indigo-400">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-slate-400 flex items-start">
                              <span className="text-indigo-400 mr-2">•</span>
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
