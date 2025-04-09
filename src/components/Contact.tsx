
import React from 'react';
import { Mail, MapPin, Linkedin, Github, Twitter, SendIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground/80">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-2 bg-primary/20 rounded-lg text-primary mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a href="mailto:example@email.com" className="text-foreground/60 hover:text-primary transition-colors">
                    example@email.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-secondary/20 rounded-lg text-secondary mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-foreground/60">Hyderabad, India</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Social Media</h4>
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
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 glass-card text-foreground/70 hover:text-primary hover:border-primary/30 transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <div className="p-6 glass-card">
                <h4 className="font-semibold text-foreground mb-4">Open to Opportunities</h4>
                <p className="text-foreground/60 mb-4">
                  I'm currently looking for internship opportunities in data science, 
                  machine learning, and NLP. If you have a position that aligns with my 
                  skills and interests, please get in touch!
                </p>
                <div className="flex items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 font-medium">Available for internships</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground/80">Send Me a Message</h3>
            
            <form className="space-y-6 glass-card p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground/70">Your Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-card border-white/10 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/70">Your Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-card border-white/10 focus:border-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground/70">Subject</Label>
                <Input id="subject" placeholder="How can I help you?" className="bg-card border-white/10 focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground/70">Message</Label>
                <Textarea id="message" placeholder="Your message here..." className="min-h-[150px] bg-card border-white/10 focus:border-primary" />
              </div>
              
              <Button type="submit" className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/30 text-white flex items-center gap-2 justify-center">
                <SendIcon size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
