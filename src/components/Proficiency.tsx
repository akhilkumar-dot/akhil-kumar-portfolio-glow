
import React from 'react';
import { 
  BarChart2, 
  Clock, 
  Blocks, 
  ChevronRight
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent
} from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TechnicalSkillProps {
  name: string;
  value: number;
  color: string;
}

const TechnicalSkill: React.FC<TechnicalSkillProps> = ({ name, value, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-foreground/80">{name}</span>
        <span className="text-sm text-foreground/60">{value}%</span>
      </div>
      <Progress value={value} className={`h-2 ${color}`} />
    </div>
  );
};

interface WorkflowStepProps {
  number: number;
  title: string;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ number, title }) => {
  return (
    <div className="flex items-center mb-3">
      <span className="text-amber-500 font-medium mr-2">{number}.</span>
      <span className="text-foreground/80">{title}</span>
    </div>
  );
};

interface TechItemProps {
  name: string;
  color: string;
}

const TechItem: React.FC<TechItemProps> = ({ name, color }) => {
  return (
    <div className="flex items-center mb-2">
      <div className={`w-2 h-2 rounded-full ${color} mr-2`}></div>
      <span className="text-foreground/80 text-sm">{name}</span>
    </div>
  );
};

const SkillBar: React.FC<{ skill: { name: string; value: number; color: string } }> = ({ skill }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="skill-bar-container">
        <div className="skill-bar-track"></div>
        <div 
          className={`skill-bar-fill ${skill.color}`} 
          style={{ height: `${skill.value}%` }}
        ></div>
      </div>
      <span className="text-xs text-foreground/70 mt-2">{skill.name}</span>
    </div>
  );
};

const Proficiency = () => {
  const technicalSkills = [
    { name: "Python", value: 90, color: "skill-expert" },
    { name: "TensorFlow", value: 85, color: "skill-expert" },
    { name: "LLMs", value: 75, color: "skill-advanced" },
    { name: "SQL", value: 80, color: "skill-expert" },
    { name: "Pandas", value: 85, color: "skill-expert" },
    { name: "Scikit-Learn", value: 80, color: "skill-expert" },
    { name: "Data Viz", value: 75, color: "skill-advanced" },
    { name: "NLP", value: 70, color: "skill-intermediate" },
  ];

  return (
    <section id="proficiency" className="py-24 bg-black/30">
      <div className="section-container">
        <div className="mb-10 text-center">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm mb-6">
            My Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Data Science <span className="text-amber-500">Proficiency</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A visual representation of my technical proficiency in various data science and machine 
            learning domains.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mx-auto mt-8 rounded-full"></div>
        </div>

        <Card className="mb-10 bg-card/30 backdrop-blur-sm border-white/5">
          <CardHeader className="border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <BarChart2 size={20} className="text-amber-500" />
              <CardTitle className="text-lg font-semibold">Technical Skills</CardTitle>
              <p className="text-sm text-foreground/60 ml-2">Proficiency breakdown by technology</p>
              
              <div className="ml-auto flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span className="text-xs text-foreground/70">Expert (80-100%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-xs text-foreground/70">Advanced (70-79%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                  <span className="text-xs text-foreground/70">Intermediate (60-69%)</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="skill-bars-wrapper">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-card bg-card/30 backdrop-blur-sm border-white/5">
            <CardHeader className="border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-amber-500" />
                <CardTitle className="text-lg font-semibold">Data Analysis Workflow</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <WorkflowStep number={1} title="Data collection and cleaning" />
                <WorkflowStep number={2} title="Exploratory data analysis (EDA)" />
                <WorkflowStep number={3} title="Feature engineering and selection" />
                <WorkflowStep number={4} title="Model selection and training" />
                <WorkflowStep number={5} title="Model evaluation and deployment" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card bg-card/30 backdrop-blur-sm border-white/5">
            <CardHeader className="border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Blocks size={20} className="text-amber-500" />
                <CardTitle className="text-lg font-semibold">Tools & Technologies</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <TechItem name="Python" color="bg-amber-500" />
                  <TechItem name="PyTorch" color="bg-orange-500" />
                  <TechItem name="Pandas" color="bg-amber-500" />
                  <TechItem name="SQL" color="bg-amber-500" />
                </div>
                <div>
                  <TechItem name="TensorFlow" color="bg-amber-500" />
                  <TechItem name="Scikit-Learn" color="bg-amber-500" />
                  <TechItem name="NumPy" color="bg-amber-500" />
                  <TechItem name="Matplotlib/Seaborn" color="bg-orange-500" />
                </div>
              </div>
              <div className="mt-4 text-right">
                <a href="#skills" className="text-amber-500 text-sm flex items-center justify-end hover:underline">
                  View all skills <ChevronRight size={16} />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Proficiency;
