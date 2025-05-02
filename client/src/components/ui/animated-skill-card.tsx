import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
  className?: string;
}

const AnimatedSkillCard: React.FC<AnimatedSkillCardProps> = ({
  title,
  description,
  icon,
  gradient,
  delay = 0,
  className
}) => {
  return (
    <div 
      className={cn(
        "relative group p-6 rounded-xl transition-all duration-300 cursor-pointer",
        "hover:shadow-xl hover:scale-105 overflow-hidden animate-scaleIn",
        "border border-gray-800/50 dark:border-gray-700/30",
        "backdrop-blur-sm bg-white/5 dark:bg-gray-900/20",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient background */}
      <div 
        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300" 
        style={{ background: gradient }} 
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          {/* Icon with gradient background */}
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg"
            style={{ background: gradient }}
          >
            <div className="text-white text-xl">
              {icon}
            </div>
          </div>
          
          {/* Title with gradient text */}
          <h3 
            className="text-xl font-bold bg-clip-text text-transparent"
            style={{ backgroundImage: gradient }}
          >
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-gray-400 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AnimatedSkillCard;