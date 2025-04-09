
import React from 'react';
import { Github, ExternalLink, Code, BarChart4, Image, LineChart, Users, Database, MessageSquare, PanelTop } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  color: string;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  tags, 
  image,
  github, 
  demo,
  color,
  icon
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] bg-card/50 backdrop-blur-sm border border-white/5 h-full flex flex-col">
      <div className={`${color} h-1 w-full`}></div>
      <CardHeader>
        <div className="flex items-center space-x-2 mb-2">
          <div className={`p-2 rounded-lg ${color}/20 text-foreground/80`}>
            {icon}
          </div>
          <CardTitle className="font-bold text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-foreground/60">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="font-mono text-xs bg-card/80 text-foreground/70 border border-white/5">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-white/5 pt-4">
        {github && (
          <Button variant="outline" size="sm" className="gap-2 bg-transparent border-white/10 hover:bg-primary/10 hover:border-primary/30" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              Code
            </a>
          </Button>
        )}
        {demo && (
          <Button variant="default" size="sm" className={`gap-2 ${color}/20 hover:${color}/30 border border-white/10`} asChild>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const featuredProjects = [
    {
      title: "Sentiment Analysis Model",
      description: "Built a machine learning model to analyze sentiment in product reviews with 87% accuracy.",
      tags: ["NLP", "Python", "NLTK", "Scikit-learn"],
      github: "#",
      demo: "#",
      color: "bg-primary",
      icon: <MessageSquare size={20} />
    },
    {
      title: "Image Classification System",
      description: "Developed a deep learning model to classify images using convolutional neural networks.",
      tags: ["Computer Vision", "TensorFlow", "Keras", "CNN"],
      github: "#",
      demo: "#",
      color: "bg-secondary",
      icon: <Image size={20} />
    },
    {
      title: "Sales Prediction Dashboard",
      description: "Created an interactive dashboard for forecasting sales using regression techniques.",
      tags: ["Data Visualization", "Pandas", "Plotly", "Regression"],
      github: "#",
      color: "bg-blue-500",
      icon: <LineChart size={20} />
    },
  ];
  
  const otherProjects = [
    {
      title: "Customer Segmentation",
      description: "Applied clustering algorithms to segment customers based on purchasing behavior.",
      tags: ["Clustering", "K-means", "Data Mining", "Matplotlib"],
      github: "#",
      color: "bg-violet-500",
      icon: <Users size={20} />
    },
    {
      title: "Time Series Forecasting",
      description: "Implemented ARIMA and LSTM models for predicting stock market trends.",
      tags: ["Time Series", "LSTM", "ARIMA", "Financial Data"],
      github: "#",
      color: "bg-amber-500",
      icon: <BarChart4 size={20} />
    },
    {
      title: "Text Summarization Tool",
      description: "Built an extractive and abstractive text summarization system using NLP techniques.",
      tags: ["NLP", "Transformers", "BERT", "Python"],
      github: "#",
      demo: "#",
      color: "bg-emerald-500",
      icon: <PanelTop size={20} />
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <h2 className="section-title mb-16">My Projects</h2>
        
        <div className="space-y-16">
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-xl font-semibold mb-8 text-foreground/90 inline-block">
                Featured Projects
                <div className="absolute -bottom-3 left-0 h-1 w-1/3 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  github={project.github}
                  demo={project.demo}
                  color={project.color}
                  icon={project.icon}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-xl font-semibold mb-8 text-foreground/90 inline-block">
                Other Projects
                <div className="absolute -bottom-3 left-0 h-1 w-1/3 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  github={project.github}
                  demo={project.demo}
                  color={project.color}
                  icon={project.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
