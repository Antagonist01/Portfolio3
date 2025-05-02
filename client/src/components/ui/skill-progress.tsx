import React, { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface SkillProgressProps {
  name: string;
  percentage: number;
  gradient?: string;
  delay?: number;
  className?: string;
}

const SkillProgress: React.FC<SkillProgressProps> = ({
  name,
  percentage,
  gradient = "linear-gradient(to right, #3B82F6, #8B5CF6)",
  delay = 0,
  className
}) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Animation delay based on prop
    const timer = setTimeout(() => {
      // Animate the progress from 0 to the actual percentage
      setProgress(percentage);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [percentage, delay]);
  
  return (
    <div 
      className={cn(
        "mb-6 animate-fadeInUp",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
          {name}
        </span>
        <span 
          className="text-lg font-bold"
          style={{ 
            background: gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {percentage}%
        </span>
      </div>
      
      <div className="relative">
        <Progress 
          value={progress} 
          className="h-2.5 rounded-full bg-gray-200 dark:bg-gray-700"
          style={{
            '--progress-gradient': gradient
          } as React.CSSProperties}
        />
        {/* Custom styles injected via CSS variables */}
        <style dangerouslySetInnerHTML={{ __html: `
          .progress-indicator {
            background: var(--progress-gradient, linear-gradient(to right, #3B82F6, #8B5CF6)) !important;
            transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1) !important;
          }
        `}} />
      </div>
    </div>
  );
};

export default SkillProgress;