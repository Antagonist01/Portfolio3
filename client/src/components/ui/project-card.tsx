import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  isFeatured = false 
}) => {
  return (
    <div 
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-500 animate-scaleIn",
        "bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl",
        "border border-gray-100 dark:border-gray-800",
        isFeatured 
          ? "md:col-span-2 md:row-span-2" 
          : ""
      )}
    >
      {/* Image with zoom effect */}
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            FEATURED
          </div>
        )}
        
        {/* Tech tags overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full text-white"
                style={{ 
                  backgroundColor: tech.bgColor,
                  color: tech.textColor
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
          {project.title}
        </h3>
        
        <p className={cn(
          "text-gray-600 dark:text-gray-300 mb-6",
          isFeatured ? "text-base" : "text-sm line-clamp-3"
        )}>
          {project.description}
        </p>
        
        {/* Action buttons */}
        <div className="flex space-x-4">
          <a 
            href={project.demoUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-sm md:text-base font-medium rounded-lg border-2 border-primary-500 bg-black dark:bg-primary-800 text-white hover:bg-primary-900 shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Live Demo
          </a>
          
          <a 
            href={project.codeUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-sm md:text-base font-medium rounded-lg border-2 border-gray-400 bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md shadow-gray-300/20 dark:shadow-gray-900/20 hover:shadow-lg hover:shadow-gray-300/30 dark:hover:shadow-gray-900/30 transition-all duration-300"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Code
          </a>
        </div>
      </div>
      
      {/* Hover effect - subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default ProjectCard;