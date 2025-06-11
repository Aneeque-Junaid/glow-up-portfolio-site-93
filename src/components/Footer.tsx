
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/10 backdrop-blur-md border-t border-border/20 py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-2">
              John Doe
            </h3>
            <p className="text-muted-foreground">
              Building digital experiences with passion and precision
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <div key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/20 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/20 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:john@example.com"
                className="p-2 rounded-full bg-background/20 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} John Doe. Made with <Heart className="w-4 h-4 text-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
