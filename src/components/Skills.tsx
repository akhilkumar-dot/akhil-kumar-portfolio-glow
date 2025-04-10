
import React from 'react';
import { 
  Brain, 
  Cpu, 
  BookOpen, 
  BarChart2, 
  Code, 
  Wrench
} from 'lucide-react';

interface SkillDetailProps {
  name: string;
}

const SkillDetail: React.FC<SkillDetailProps> = ({ name }) => {
  return (
    <li className="flex items-center mb-2">
      <div className="w-2 h-2 rounded-full bg-primary/70 mr-3"></div>
      <span className="text-foreground/80">{name}</span>
    </li>
  );
};

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, color, children }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] bg-card/50 backdrop-blur-sm border border-white/5 h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start mb-5">
          <div className={`p-3 rounded-lg ${color} mr-4 mb-3`}>
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
        <ul className="space-y-1 text-sm">
          {children}
        </ul>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <h2 className="section-title mb-16">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            title="Machine Learning" 
            icon={<Brain size={24} className="text-indigo-400" />}
            color="bg-indigo-950/50"
          >
            <SkillDetail name="Supervised Learning" />
            <SkillDetail name="Unsupervised Learning" />
            <SkillDetail name="Feature Engineering" />
            <SkillDetail name="Model Evaluation" />
          </SkillCard>
          
          <SkillCard 
            title="Deep Learning" 
            icon={<Cpu size={24} className="text-purple-400" />}
            color="bg-purple-950/50"
          >
            <SkillDetail name="Neural Networks" />
            <SkillDetail name="CNN" />
            <SkillDetail name="RNN/LSTM" />
            <SkillDetail name="Transfer Learning" />
          </SkillCard>
          
          <SkillCard 
            title="Natural Language Processing" 
            icon={<BookOpen size={24} className="text-emerald-400" />}
            color="bg-emerald-950/50"
          >
            <SkillDetail name="Text Classification" />
            <SkillDetail name="Sentiment Analysis" />
            <SkillDetail name="Named Entity Recognition" />
            <SkillDetail name="BERT/Transformers" />
          </SkillCard>
          
          <SkillCard 
            title="Data Analysis" 
            icon={<BarChart2 size={24} className="text-blue-400" />}
            color="bg-blue-950/50"
          >
            <SkillDetail name="Exploratory Data Analysis" />
            <SkillDetail name="Statistical Analysis" />
            <SkillDetail name="Data Visualization" />
            <SkillDetail name="Time Series Analysis" />
          </SkillCard>
          
          <SkillCard 
            title="Programming" 
            icon={<Code size={24} className="text-amber-400" />}
            color="bg-amber-950/50"
          >
            <SkillDetail name="Python" />
            <SkillDetail name="SQL" />
            <SkillDetail name="R (Basics)" />
            <SkillDetail name="Java (Basics)" />
          </SkillCard>
          
          <SkillCard 
            title="Tools & Frameworks" 
            icon={<Wrench size={24} className="text-red-400" />}
            color="bg-red-950/50"
          >
            <SkillDetail name="TensorFlow/Keras" />
            <SkillDetail name="LLMs" />
            <SkillDetail name="Scikit-Learn" />
            <SkillDetail name="Pandas/NumPy" />
          </SkillCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
