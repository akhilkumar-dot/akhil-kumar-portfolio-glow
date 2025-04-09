
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Moon, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${isScrolled ? 'glass-card shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl md:text-2xl font-bold gradient-text">AK</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleScroll('about')} className="nav-link">About</button>
            <button onClick={() => handleScroll('skills')} className="nav-link">Skills</button>
            <button onClick={() => handleScroll('projects')} className="nav-link">Projects</button>
            <button onClick={() => handleScroll('contact')} className="nav-link">Contact</button>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-2 rounded-lg hover:bg-primary/30 border border-primary/30 transition-all"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card absolute top-16 left-0 right-0 py-4 px-4 shadow-lg animate-slide-up">
          <div className="flex flex-col space-y-4">
            <button onClick={() => handleScroll('about')} className="text-left px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">About</button>
            <button onClick={() => handleScroll('skills')} className="text-left px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">Skills</button>
            <button onClick={() => handleScroll('projects')} className="text-left px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">Projects</button>
            <button onClick={() => handleScroll('contact')} className="text-left px-4 py-2 hover:bg-primary/10 rounded-md transition-colors">Contact</button>
            <div className="pt-4 border-t border-white/5">
              <div className="flex space-x-4 px-4">
                <a href="#" aria-label="GitHub" className="text-foreground/70 hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
