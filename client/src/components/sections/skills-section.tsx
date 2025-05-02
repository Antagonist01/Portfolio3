import React, { useState } from 'react';
import SkillProgress from "@/components/ui/skill-progress";
import AnimatedSkillCard from "@/components/ui/animated-skill-card";

// Icons
import { 
  Code, Database, LineChart, BrainCircuit, Leaf, Award,
  Globe, LayoutGrid, Smartphone, Paintbrush, Figma, Github
} from 'lucide-react';

// Category definitions
const skillCategories = [
  {
    id: "programming",
    label: "Programming & Database",
    icon: <Code className="w-5 h-5" />,
    gradient: "linear-gradient(to right, #2563EB, #4F46E5)",
    description: "Core programming languages and database technologies I work with daily."
  },
  {
    id: "frontend",
    label: "Frontend Development",
    icon: <LayoutGrid className="w-5 h-5" />,
    gradient: "linear-gradient(to right, #EC4899, #8B5CF6)",
    description: "Creating beautiful, responsive user interfaces with modern frameworks."
  },
  {
    id: "data",
    label: "Data Analysis",
    icon: <LineChart className="w-5 h-5" />,
    gradient: "linear-gradient(to right, #10B981, #3B82F6)",
    description: "Tools and techniques for processing and visualizing complex data."
  },
  {
    id: "ai",
    label: "AI Tools",
    icon: <BrainCircuit className="w-5 h-5" />,
    gradient: "linear-gradient(to right, #8B5CF6, #EC4899)",
    description: "Experience with artificial intelligence and machine learning frameworks."
  },
  {
    id: "sustainability",
    label: "Sustainability",
    icon: <Leaf className="w-5 h-5" />,
    gradient: "linear-gradient(to right, #059669, #84CC16)",
    description: "Applying sustainable development principles to technical projects."
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: <Award className="w-5 h-5" />,
    gradient: "linear-gradient(to right, #F59E0B, #EF4444)",
    description: "Professional certifications and specialized training."
  }
];

// Define skill interface
interface Skill {
  name: string;
  percentage: number;
}

// Define the skills by category with proper typing
const skillsByCategory: Record<string, Skill[]> = {
  programming: [
    { name: "JavaScript", percentage: 95 },
    { name: "TypeScript", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "Node.js", percentage: 92 },
    { name: "PostgreSQL", percentage: 88 },
    { name: "MongoDB", percentage: 85 }
  ],
  frontend: [
    { name: "React", percentage: 95 },
    { name: "Next.js", percentage: 90 },
    { name: "HTML5/CSS3", percentage: 92 },
    { name: "TailwindCSS", percentage: 95 },
    { name: "Responsive Design", percentage: 94 },
    { name: "UI/UX Principles", percentage: 88 }
  ],
  data: [
    { name: "Data Visualization", percentage: 85 },
    { name: "SQL Analysis", percentage: 90 },
    { name: "Pandas", percentage: 82 },
    { name: "Data Cleaning", percentage: 88 },
    { name: "Tableau", percentage: 78 },
    { name: "Excel Advanced", percentage: 85 }
  ],
  ai: [
    { name: "Machine Learning", percentage: 80 },
    { name: "Natural Language Processing", percentage: 75 },
    { name: "TensorFlow", percentage: 70 },
    { name: "PyTorch", percentage: 65 },
    { name: "OpenAI APIs", percentage: 85 },
    { name: "AI Ethics", percentage: 80 }
  ],
  sustainability: [
    { name: "Carbon Footprint Analysis", percentage: 85 },
    { name: "Sustainable Web Design", percentage: 88 },
    { name: "Energy Efficiency", percentage: 80 },
    { name: "Green Hosting", percentage: 75 },
    { name: "Circular Economy", percentage: 78 },
    { name: "ESG Reporting", percentage: 70 }
  ],
  certifications: [
    { name: "AWS Certified Developer", percentage: 95 },
    { name: "Google Cloud Professional", percentage: 90 },
    { name: "Microsoft Azure Fundamentals", percentage: 92 },
    { name: "Certified ScrumMaster", percentage: 98 },
    { name: "Sustainability Leadership", percentage: 85 },
    { name: "ISO 14001 Internal Auditor", percentage: 80 }
  ]
};

// Professional skills data
const professionalSkills = [
  {
    title: "Web Development",
    description: "Creating responsive, accessible, and performant web applications using modern frameworks and best practices.",
    icon: <Globe className="w-6 h-6" />,
    gradient: "linear-gradient(135deg, #3B82F6, #8B5CF6)"
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces with a focus on user experience, accessibility, and modern aesthetic.",
    icon: <Paintbrush className="w-6 h-6" />,
    gradient: "linear-gradient(135deg, #EC4899, #8B5CF6)"
  },
  {
    title: "Mobile Development",
    description: "Building cross-platform mobile applications with React Native for iOS and Android devices.",
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "linear-gradient(135deg, #10B981, #3B82F6)"
  },
  {
    title: "Figma Design",
    description: "Creating wireframes, prototypes and design systems using Figma's collaborative interface.",
    icon: <Figma className="w-6 h-6" />,
    gradient: "linear-gradient(135deg, #F87171, #F59E0B)"
  },
  {
    title: "Version Control",
    description: "Expert in Git workflows, continuous integration and deployment for team collaboration.",
    icon: <Github className="w-6 h-6" />,
    gradient: "linear-gradient(135deg, #4B5563, #1F2937)"
  },
  {
    title: "Database Design",
    description: "Creating efficient database schemas, designing data models and optimizing queries.",
    icon: <Database className="w-6 h-6" />,
    gradient: "linear-gradient(135deg, #059669, #84CC16)"
  }
];

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  
  return (
    <section id="skills" className="py-[var(--section-padding)] bg-[var(--cultured)] dark:bg-[var(--raisin-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--raisin-black)] dark:text-[var(--white)]">
            <span className="text-[var(--raisin-black)] dark:text-[var(--white)]">My</span> <span className="text-[var(--cinnamon-satin)] px-2 border-b-4 border-[var(--cinnamon-satin)]/50 pb-2">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--cinnamon-satin)] mx-auto mb-6"></div>
          <p className="text-xl text-[var(--black-coral)] dark:text-[var(--manatee)] max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional skills
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-24 animate-fadeInUp animate-delay-200">
          <h3 className="text-2xl md:text-3xl font-bold mb-16 pt-10 text-center text-[var(--raisin-black)] dark:text-[var(--white)]">
            <span className="text-[var(--cinnamon-satin)] lg:border-b-2 lg:border-[var(--cinnamon-satin)]/50 pb-1 font-bold">Technical</span> <span className="text-[var(--raisin-black)] dark:text-[var(--white)]">Skills</span>
          </h3>
          
          <div className="w-full">
            <div className="flex justify-center mb-12 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-2 w-full max-w-5xl bg-[var(--cultured)] dark:bg-[var(--gunmetal)] rounded-[var(--radius-8)] shadow-[var(--shadow-1)]">
                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`relative group px-4 py-3 rounded-[var(--radius-6)] text-base font-medium transition-all ${
                      activeTab === category.id 
                        ? "bg-[var(--cinnamon-satin)] text-[var(--white)] shadow-md" 
                        : "bg-[var(--white)] dark:bg-[var(--charcoal)] text-[var(--gunmetal)] dark:text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--cinnamon-satin)] dark:hover:bg-[var(--gunmetal)] dark:hover:text-[var(--cinnamon-satin)]"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="whitespace-nowrap">{category.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Active category description */}
            <div className="text-center mb-8 max-w-2xl mx-auto">
              <p className="text-[var(--black-coral)] dark:text-[var(--manatee)]">
                {skillCategories.find(cat => cat.id === activeTab)?.description}
              </p>
            </div>
            
            {/* Skills content for active category */}
            <div className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillsByCategory[activeTab].map((skill, index) => (
                  <SkillProgress
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    gradient={skillCategories.find(cat => cat.id === activeTab)?.gradient || ""}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Professional Skills */}
        <div className="animate-fadeInUp animate-delay-300">
          <h3 className="text-2xl md:text-3xl font-bold mb-16 pt-10 text-center text-[var(--raisin-black)] dark:text-[var(--white)]">
            <span className="text-[var(--cinnamon-satin)] lg:border-b-2 lg:border-[var(--cinnamon-satin)]/50 pb-1 font-bold">Professional</span> <span className="text-[var(--raisin-black)] dark:text-[var(--white)]">Skills</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {professionalSkills.map((skill, index) => (
              <AnimatedSkillCard
                key={skill.title}
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
                gradient={skill.gradient}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;