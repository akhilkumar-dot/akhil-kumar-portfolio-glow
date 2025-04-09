
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text mb-2">Akhil Kumar</h2>
            <p className="text-gray-400">Aspiring Data Scientist | Machine Learning Enthusiast</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:example@email.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 my-8"></div>
        
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Mutyalapati Akhil Kumar. All rights reserved.
          </p>
          
          <button 
            onClick={handleScrollToTop}
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
