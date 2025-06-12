import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm transition-all duration-300 hover:text-primary relative ${
                    activeSection === item.href.substring(1)
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-accent transition-colors duration-300"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`w-6 h-6 absolute inset-0 transition-all duration-300 text-foreground ${
                      isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                    }`} 
                  />
                  <X 
                    className={`w-6 h-6 absolute inset-0 transition-all duration-300 text-foreground ${
                      isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 scale-0'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-20 left-4 right-4 bg-card/90 backdrop-blur-md rounded-lg border border-border p-6 transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 hover:bg-accent ${
                  activeSection === item.href.substring(1)
                    ? "text-primary bg-accent/50 font-medium"
                    : "text-muted-foreground"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'slideInFromTop 0.3s ease-out forwards' : ''
                }}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full transition-all duration-300 hover:scale-105"
                variant="outline"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
