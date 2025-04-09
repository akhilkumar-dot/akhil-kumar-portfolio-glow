
import React from 'react';
import { GraduationCap, Calendar, BarChart2, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <p className="text-lg text-brand-dark/80 mb-6">
              Hello! I'm Akhil Kumar, a second-year B.Tech student with a passion for data science, 
              machine learning, and artificial intelligence. My journey in tech began with curiosity about 
              how data can be transformed into meaningful insights and intelligent systems.
            </p>
            <p className="text-lg text-brand-dark/80 mb-6">
              I enjoy tackling complex problems using data-driven approaches and developing models 
              that can learn from patterns. My interests span across various domains of AI including 
              deep learning, natural language processing, and computer vision.
            </p>
            <p className="text-lg text-brand-dark/80">
              Currently, I'm actively seeking internship opportunities to apply my skills, gain industry 
              experience, and collaborate with professionals in the field of data science and machine learning.
            </p>
          </div>
          
          <div>
            <div className="bg-brand-light rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-brand-dark">Education</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="p-2 bg-brand-purple/10 rounded-lg text-brand-purple">
                      <GraduationCap size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-brand-dark">B.Tech in Computer Science</h4>
                    <p className="text-brand-gray">University Name</p>
                    <div className="flex items-center mt-1 text-sm text-brand-gray">
                      <Calendar size={14} className="mr-1" />
                      <span>2022 - 2026</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="p-2 bg-brand-teal/10 rounded-lg text-brand-teal">
                      <BookOpen size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-brand-dark">Relevant Coursework</h4>
                    <ul className="list-disc list-inside text-brand-gray space-y-1 mt-2">
                      <li>Data Structures and Algorithms</li>
                      <li>Machine Learning Fundamentals</li>
                      <li>Database Management Systems</li>
                      <li>Statistical Analysis</li>
                      <li>Python Programming</li>
                    </ul>
                  </div>
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
