
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center bg-background overflow-hidden pt-16">
      {/* Decorative Elements */}
      <div className="absolute top-0 -right-24 w-96 h-96 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 -left-24 w-96 h-96 bg-secondary rounded-full opacity-10 blur-3xl"></div>
      
      {/* Floating patterns */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-primary/20 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-md bg-secondary/20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-10 h-10 rounded-md bg-primary/10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 z-10">
          <div className="animate-fade-in">
            <p className="text-primary font-mono text-lg mb-2">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
              Mutyalapati <span className="gradient-text">Akhil Kumar</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">
              Aspiring Data Scientist | Machine Learning | Deep Learning | NLP
            </h2>
            <p className="text-lg text-foreground/80 max-w-xl mb-8">
              2nd year B.Tech student passionate about extracting insights from data 
              and building intelligent systems. Open to internships and collaboration opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => handleScroll('projects')}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-lg"
              >
                View My Projects
              </Button>
              <Button 
                onClick={() => handleScroll('contact')}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 font-medium px-6 py-2 rounded-lg"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/5 mt-12 md:mt-0 z-10">
          <div className="relative glow">
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto overflow-hidden rounded-full bg-gradient-to-tr from-primary to-secondary p-1 shadow-xl">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="/lovable-uploads/9f288676-d123-4aad-8461-7b9e4880686b.png" 
                  alt="Akhil Kumar" 
                  className="object-cover"
                />
                <AvatarFallback className="bg-muted text-5xl">AK</AvatarFallback>
              </Avatar>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-lg rotate-12 animate-float opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-lg -rotate-12 animate-float opacity-70" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => handleScroll('about')} 
          aria-label="Scroll down"
          className="text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
