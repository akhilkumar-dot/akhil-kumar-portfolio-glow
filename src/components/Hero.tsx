
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
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
    <section className="min-h-screen relative flex items-center overflow-hidden pt-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 cube-pattern opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full filter blur-3xl opacity-20 blob-animation"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full filter blur-3xl opacity-20 blob-animation"></div>
      
      <div className="section-container flex flex-col-reverse md:flex-row items-center relative z-10">
        <div className="md:w-3/5 mt-12 md:mt-0">
          <div>
            <p className="text-secondary font-mono text-lg mb-2">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Mutyalapati <span className="gradient-text">Akhil Kumar</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-foreground/70 mb-6">
              Aspiring Data Scientist | Machine Learning | Deep Learning | NLP
            </h2>
            <p className="text-lg text-foreground/60 max-w-xl mb-8">
              2nd year B.Tech student passionate about extracting insights from data 
              and building intelligent systems. Open to internships and collaboration opportunities.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                onClick={() => handleScroll('projects')}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-lg"
              >
                View My Projects
              </Button>
              <Button 
                onClick={() => handleScroll('contact')}
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10 font-medium px-6 py-2 rounded-lg"
              >
                Contact Me
              </Button>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 glass-card text-foreground/70 hover:text-primary hover:border-primary/30 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 glass-card text-foreground/70 hover:text-primary hover:border-primary/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:example@email.com" 
                className="p-2 glass-card text-foreground/70 hover:text-primary hover:border-primary/30 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/5 relative glow-effect">
          <div className="floating">
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-20 blur-xl"></div>
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary to-secondary p-1 relative z-10">
                <Avatar className="w-full h-full border-2 border-white/10">
                  <AvatarImage 
                    src="/lovable-uploads/9f288676-d123-4aad-8461-7b9e4880686b.png" 
                    alt="Akhil Kumar" 
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-card text-5xl">AK</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute top-5 -right-5 w-3 h-3 bg-secondary rounded-full"></div>
              <div className="absolute -bottom-2 left-10 w-2 h-2 bg-primary rounded-full"></div>
              <div className="absolute bottom-10 -right-3 w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => handleScroll('about')} 
          aria-label="Scroll down"
          className="text-foreground/50 hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
