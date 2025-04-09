
import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Mail } from 'lucide-react';
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
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl md:text-2xl font-bold gradient-text">Akhil Kumar</a>
          
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
              className="inline-flex items-center gap-2 bg-brand-purple text-white px-4 py-2 rounded-lg hover:bg-brand-purple/90 transition-colors"
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
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 py-4 px-4 shadow-lg animate-slide-up">
          <div className="flex flex-col space-y-4">
            <button onClick={() => handleScroll('about')} className="text-left px-4 py-2 hover:bg-gray-100 rounded-md">About</button>
            <button onClick={() => handleScroll('skills')} className="text-left px-4 py-2 hover:bg-gray-100 rounded-md">Skills</button>
            <button onClick={() => handleScroll('projects')} className="text-left px-4 py-2 hover:bg-gray-100 rounded-md">Projects</button>
            <button onClick={() => handleScroll('contact')} className="text-left px-4 py-2 hover:bg-gray-100 rounded-md">Contact</button>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex space-x-4 px-4">
                <a href="#" aria-label="GitHub" className="text-brand-dark hover:text-brand-purple">
                  <Github size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-brand-dark hover:text-brand-purple">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:example@email.com" aria-label="Email" className="text-brand-dark hover:text-brand-purple">
                  <Mail size={20} />
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
