
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface SkillItemProps {
  name: string;
  progress: number;
  color: string;
  icon: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, progress, color, icon }) => {
  return (
    <div className="data-card group">
      <div className="flex items-center mb-3">
        <div className="mr-3 text-xl">{icon}</div>
        <h4 className="font-medium text-foreground/80 group-hover:text-foreground transition-colors">{name}</h4>
      </div>
      <Progress value={progress} className={`h-2 ${color}`} />
      <p className="text-right text-sm text-foreground/50 mt-2">{progress}%</p>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: "Python", progress: 90, color: "bg-primary", icon: "🐍" },
    { name: "Machine Learning", progress: 85, color: "bg-secondary", icon: "🤖" },
    { name: "Data Analysis", progress: 80, color: "bg-blue-500", icon: "📊" },
    { name: "Deep Learning", progress: 75, color: "bg-purple-500", icon: "🧠" },
    { name: "NLP", progress: 70, color: "bg-emerald-500", icon: "💬" },
    { name: "SQL", progress: 65, color: "bg-amber-500", icon: "🗃️" },
  ];

  const libraries = [
    { name: "TensorFlow", progress: 80, color: "bg-orange-500", icon: "📚" },
    { name: "PyTorch", progress: 75, color: "bg-red-500", icon: "🔥" },
    { name: "Scikit-Learn", progress: 85, color: "bg-green-500", icon: "🛠️" },
    { name: "Pandas", progress: 90, color: "bg-blue-400", icon: "🐼" },
    { name: "NumPy", progress: 85, color: "bg-yellow-500", icon: "🔢" },
    { name: "Matplotlib", progress: 80, color: "bg-indigo-500", icon: "📈" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground/80">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground/80">Libraries & Frameworks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
