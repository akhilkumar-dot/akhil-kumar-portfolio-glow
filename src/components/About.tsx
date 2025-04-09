
import React from 'react';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-xl">
            <p className="text-lg text-foreground/80 mb-6">
              Hello! I'm Akhil Kumar, a second-year B.Tech student with a passion for data science, 
              machine learning, and artificial intelligence. My journey in tech began with curiosity about 
              how data can be transformed into meaningful insights and intelligent systems.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              I enjoy tackling complex problems using data-driven approaches and developing models 
              that can learn from patterns. My interests span across various domains of AI including 
              deep learning, natural language processing, and computer vision.
            </p>
            <p className="text-lg text-foreground/80">
              Currently, I'm actively seeking internship opportunities to apply my skills, gain industry 
              experience, and collaborate with professionals in the field of data science and machine learning.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 gradient-text">Education & Experience</h3>
              
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    <GraduationCap size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium">B.Tech in Computer Science</h4>
                  <p className="text-foreground/60">University Name</p>
                  <div className="flex items-center mt-1 text-sm text-foreground/60">
                    <Calendar size={14} className="mr-1" />
                    <span>2022 - 2026</span>
                  </div>
                </div>
              </div>
                
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
                    <BookOpen size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Relevant Coursework</h4>
                  <ul className="list-disc list-inside text-foreground/60 space-y-1 mt-2">
                    <li>Data Structures and Algorithms</li>
                    <li>Machine Learning Fundamentals</li>
                    <li>Database Management Systems</li>
                    <li>Statistical Analysis</li>
                    <li>Python Programming</li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    <Award size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Certifications</h4>
                  <ul className="list-disc list-inside text-foreground/60 space-y-1 mt-2">
                    <li>Machine Learning Specialization</li>
                    <li>Deep Learning with PyTorch</li>
                    <li>Data Science with Python</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
