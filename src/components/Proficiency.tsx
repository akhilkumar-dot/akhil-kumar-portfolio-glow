
import React from 'react';
import { 
  BarChart2, 
  Clock, 
  Blocks, 
  ChevronRight
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

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

const Proficiency = () => {
  const technicalSkills = [
    { name: "Python", value: 90, color: "bg-amber-500" },
    { name: "TensorFlow", value: 85, color: "bg-amber-500" },
    { name: "LLMs", value: 75, color: "bg-orange-500" },
    { name: "SQL", value: 80, color: "bg-amber-500" },
    { name: "Pandas", value: 85, color: "bg-amber-500" },
    { name: "Scikit-Learn", value: 80, color: "bg-amber-500" },
    { name: "Data Viz", value: 75, color: "bg-orange-500" },
    { name: "NLP", value: 70, color: "bg-pink-500" },
  ];

  return (
    <section id="proficiency" className="py-24 bg-black/30">
      <div className="section-container">
        <div className="mb-8">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-sm mb-6">
            My Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Data Science <span className="text-amber-500">Proficiency</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-center">
            A visual representation of my technical proficiency in various data science and machine 
            learning domains.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="glass-card rounded-xl overflow-hidden border border-white/5 backdrop-blur-sm bg-card/30 p-6 mb-8">
          <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
            <BarChart2 size={20} className="text-amber-500" />
            <h3 className="text-lg font-semibold">Technical Skills</h3>
            <p className="text-sm text-foreground/60 ml-2">Proficiency breakdown by technology</p>
            
            <div className="ml-auto flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-xs text-foreground/70">Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-xs text-foreground/70">Advanced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <span className="text-xs text-foreground/70">Intermediate</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-full pt-6">
                  <div 
                    className={`${skill.color} w-8 absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-sm`} 
                    style={{ height: `${skill.value}%` }}
                  ></div>
                  <div className="h-24 border-l border-foreground/10 absolute left-1/2 transform -translate-x-1/2 bottom-0 z-0"></div>
                  <div className="absolute bottom-0 w-full h-px bg-foreground/10"></div>
                  <div className="absolute -bottom-6 w-full text-center text-xs text-foreground/60">{skill.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-xl overflow-hidden border border-white/5 backdrop-blur-sm bg-card/30 p-6">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <Clock size={20} className="text-amber-500" />
              <h3 className="text-lg font-semibold">Data Analysis Workflow</h3>
            </div>
            <div className="space-y-2">
              <WorkflowStep number={1} title="Data collection and cleaning" />
              <WorkflowStep number={2} title="Exploratory data analysis (EDA)" />
              <WorkflowStep number={3} title="Feature engineering and selection" />
              <WorkflowStep number={4} title="Model selection and training" />
              <WorkflowStep number={5} title="Model evaluation and deployment" />
            </div>
          </div>
          
          <div className="glass-card rounded-xl overflow-hidden border border-white/5 backdrop-blur-sm bg-card/30 p-6">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <Blocks size={20} className="text-amber-500" />
              <h3 className="text-lg font-semibold">Tools & Technologies</h3>
            </div>
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
              <a href="#" className="text-amber-500 text-sm flex items-center justify-end hover:underline">
                View all skills <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proficiency;
