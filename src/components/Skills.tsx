
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { 
  Database, 
  Code, 
  BarChart4, 
  Brain, 
  MessageSquare, 
  FileSpreadsheet,
  Layers, 
  Flame, 
  Wrench,
  PanelTop, 
  Calculator, 
  LineChart
} from 'lucide-react';

interface SkillItemProps {
  name: string;
  progress: number;
  color: string;
  icon: React.ReactNode;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, progress, color, icon }) => {
  return (
    <div className="glass-card relative overflow-hidden group transition-all duration-300 hover:translate-y-[-5px]">
      <div className={`${color} absolute top-0 left-0 w-1 h-full opacity-70`}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3 p-2 rounded-lg bg-card/80 text-foreground/80 group-hover:text-primary transition-colors">
            {icon}
          </div>
          <h4 className="font-medium text-foreground/90 group-hover:text-foreground transition-colors">{name}</h4>
        </div>
        <Progress value={progress} className={`h-2 ${color}`} />
        <p className="text-right text-sm text-foreground/50 mt-2">{progress}%</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: "Python", progress: 90, color: "bg-primary", icon: <Code size={22} /> },
    { name: "Machine Learning", progress: 85, color: "bg-secondary", icon: <Brain size={22} /> },
    { name: "Data Analysis", progress: 80, color: "bg-blue-500", icon: <BarChart4 size={22} /> },
    { name: "Deep Learning", progress: 75, color: "bg-purple-500", icon: <Layers size={22} /> },
    { name: "NLP", progress: 70, color: "bg-emerald-500", icon: <MessageSquare size={22} /> },
    { name: "SQL", progress: 65, color: "bg-amber-500", icon: <Database size={22} /> },
  ];

  const libraries = [
    { name: "TensorFlow", progress: 80, color: "bg-orange-500", icon: <Flame size={22} /> },
    { name: "PyTorch", progress: 75, color: "bg-red-500", icon: <Flame size={22} /> },
    { name: "Scikit-Learn", progress: 85, color: "bg-green-500", icon: <Wrench size={22} /> },
    { name: "Pandas", progress: 90, color: "bg-blue-400", icon: <FileSpreadsheet size={22} /> },
    { name: "NumPy", progress: 85, color: "bg-yellow-500", icon: <Calculator size={22} /> },
    { name: "Matplotlib", progress: 80, color: "bg-indigo-500", icon: <LineChart size={22} /> },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <h2 className="section-title mb-16">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-xl font-semibold mb-8 text-foreground/90 inline-block">
                Technical Skills
                <div className="absolute -bottom-3 left-0 h-1 w-1/3 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {technicalSkills.map((skill, index) => (
                <SkillItem 
                  key={index}
                  name={skill.name}
                  progress={skill.progress}
                  color={skill.color}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-xl font-semibold mb-8 text-foreground/90 inline-block">
                Libraries & Frameworks
                <div className="absolute -bottom-3 left-0 h-1 w-1/3 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {libraries.map((skill, index) => (
                <SkillItem 
                  key={index}
                  name={skill.name}
                  progress={skill.progress}
                  color={skill.color}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
