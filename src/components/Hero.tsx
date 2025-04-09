
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center bg-gradient-to-br from-brand-light to-accent/30 overflow-hidden pt-16">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-purple rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-teal rounded-full opacity-10 blur-3xl"></div>
      
      {/* Floating patterns */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-brand-purple/20 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-md bg-brand-teal/20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-10 h-10 rounded-md bg-brand-purple/10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 z-10">
          <div className="animate-fade-in">
            <p className="text-brand-purple font-mono text-lg mb-2">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-dark mb-4">
              Mutyalapati <span className="gradient-text">Akhil Kumar</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-brand-gray mb-6">
              Aspiring Data Scientist | Machine Learning | Deep Learning | NLP
            </h2>
            <p className="text-lg text-brand-dark/80 max-w-xl mb-8">
              2nd year B.Tech student passionate about extracting insights from data 
              and building intelligent systems. Open to internships and collaboration opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => handleScroll('projects')}
                className="bg-brand-purple hover:bg-brand-purple/90 text-white font-medium px-6 py-2 rounded-lg"
              >
                View My Projects
              </Button>
              <Button 
                onClick={() => handleScroll('contact')}
                variant="outline" 
                className="border-brand-purple text-brand-purple hover:bg-brand-purple/10 font-medium px-6 py-2 rounded-lg"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/5 mt-12 md:mt-0 z-10">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto overflow-hidden rounded-2xl bg-gradient-to-tr from-brand-purple to-brand-teal p-1 shadow-xl">
              <div className="bg-white h-full w-full rounded-2xl flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="relative w-36 h-36 mx-auto mb-4 rounded-full bg-gradient-to-r from-brand-purple/20 to-brand-teal/20 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                  <p className="text-brand-dark font-semibold">Data Science Enthusiast</p>
                </div>
              </div>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-teal rounded-lg rotate-12 animate-float opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-brand-purple rounded-lg -rotate-12 animate-float opacity-70" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => handleScroll('about')} 
          aria-label="Scroll down"
          className="text-brand-dark/70 hover:text-brand-purple transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
