
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref: footerRef, isVisible } = useScrollAnimation();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      ref={footerRef}
      className="bg-slate-900/50 backdrop-blur-md border-t border-slate-700/50 py-12 relative z-10"
    >
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
              John Doe
            </h3>
            <p className="text-slate-400">
              Building digital experiences with passion and precision
            </p>
          </div>
          
          {/* Quick Links */}
          <div className={`text-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <div key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social Links */}
          <div className={`text-center md:text-right transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800/50 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110 border border-slate-700/50"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800/50 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110 border border-slate-700/50"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:john@example.com"
                className="p-2 rounded-full bg-slate-800/50 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110 border border-slate-700/50"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className={`pt-8 border-t border-slate-700/50 text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-slate-400 flex items-center justify-center gap-2">
            © {currentYear} John Doe. Made with <Heart className="w-4 h-4 text-red-400" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
