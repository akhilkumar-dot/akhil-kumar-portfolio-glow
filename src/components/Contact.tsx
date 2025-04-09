
import React from 'react';
import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-brand-light">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-brand-dark">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-2 bg-brand-purple/10 rounded-lg text-brand-purple mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-brand-dark">Email</h4>
                  <a href="mailto:example@email.com" className="text-brand-gray hover:text-brand-purple transition-colors">
                    example@email.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-brand-teal/10 rounded-lg text-brand-teal mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-brand-dark">Location</h4>
                  <p className="text-brand-gray">Hyderabad, India</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-brand-dark mb-3">Social Media</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white text-brand-purple hover:bg-brand-purple hover:text-white rounded-full transition-colors shadow-sm"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white text-brand-purple hover:bg-brand-purple hover:text-white rounded-full transition-colors shadow-sm"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white text-brand-purple hover:bg-brand-purple hover:text-white rounded-full transition-colors shadow-sm"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-semibold text-brand-dark mb-4">Open to Opportunities</h4>
                <p className="text-brand-gray mb-4">
                  I'm currently looking for internship opportunities in data science, 
                  machine learning, and NLP. If you have a position that aligns with my 
                  skills and interests, please get in touch!
                </p>
                <div className="flex items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-600 font-medium">Available for internships</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-brand-dark">Send Me a Message</h3>
            
            <form className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can I help you?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" />
              </div>
              
              <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple/90">
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
