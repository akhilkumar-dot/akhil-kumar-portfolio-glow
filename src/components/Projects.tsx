
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  color: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  tags, 
  image,
  github, 
  demo,
  color
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className={`h-3 ${color} w-full`}></div>
      <CardHeader>
        <CardTitle className="font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="font-mono text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {github && (
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              Code
            </a>
          </Button>
        )}
        {demo && (
          <Button variant="default" size="sm" className="gap-2" asChild>
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
  const projects = [
    {
      title: "Sentiment Analysis Model",
      description: "Built a machine learning model to analyze sentiment in product reviews with 87% accuracy.",
      tags: ["NLP", "Python", "NLTK", "Scikit-learn"],
      github: "#",
      demo: "#",
      color: "bg-brand-purple"
    },
    {
      title: "Image Classification System",
      description: "Developed a deep learning model to classify images using convolutional neural networks.",
      tags: ["Computer Vision", "TensorFlow", "Keras", "CNN"],
      github: "#",
      demo: "#",
      color: "bg-brand-teal"
    },
    {
      title: "Sales Prediction Dashboard",
      description: "Created an interactive dashboard for forecasting sales using regression techniques.",
      tags: ["Data Visualization", "Pandas", "Plotly", "Regression"],
      github: "#",
      color: "bg-blue-500"
    },
    {
      title: "Customer Segmentation",
      description: "Applied clustering algorithms to segment customers based on purchasing behavior.",
      tags: ["Clustering", "K-means", "Data Mining", "Matplotlib"],
      github: "#",
      color: "bg-violet-500"
    },
    {
      title: "Time Series Forecasting",
      description: "Implemented ARIMA and LSTM models for predicting stock market trends.",
      tags: ["Time Series", "LSTM", "ARIMA", "Financial Data"],
      github: "#",
      color: "bg-amber-500"
    },
    {
      title: "Text Summarization Tool",
      description: "Built an extractive and abstractive text summarization system using NLP techniques.",
      tags: ["NLP", "Transformers", "BERT", "Python"],
      github: "#",
      demo: "#",
      color: "bg-emerald-500"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              github={project.github}
              demo={project.demo}
              color={project.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
