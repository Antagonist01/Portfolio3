import React from 'react';
import ProjectCard from '@/components/ui/project-card';
import { Project } from '@/types';

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Carbon Footprint Calculator",
    description: "An interactive web application that helps users calculate and track their carbon footprint. Features include personalized recommendations for reducing environmental impact, historical tracking, and comparison with regional averages.",
    image: "https://images.unsplash.com/photo-1569616229741-368c57e173d4?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      { name: "React", bgColor: "#61DAFB", textColor: "#000000" },
      { name: "TypeScript", bgColor: "#3178C6", textColor: "#ffffff" },
      { name: "Chart.js", bgColor: "#FF6384", textColor: "#ffffff" },
      { name: "Node.js", bgColor: "#339933", textColor: "#ffffff" }
    ],
    demoUrl: "https://example.com/carbon-calculator",
    codeUrl: "https://github.com/example/carbon-calculator"
  },
  {
    id: 2,
    title: "SEO Tag Inspector",
    description: "A developer tool that analyzes websites for SEO best practices, meta tags, and semantic HTML structure. Provides actionable recommendations for improving search engine visibility.",
    image: "https://images.unsplash.com/photo-1557838429-6f824bcc18fd?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      { name: "JavaScript", bgColor: "#F7DF1E", textColor: "#000000" },
      { name: "Express", bgColor: "#000000", textColor: "#ffffff" },
      { name: "Puppeteer", bgColor: "#40B5A4", textColor: "#ffffff" }
    ],
    demoUrl: "https://example.com/seo-inspector",
    codeUrl: "https://github.com/example/seo-inspector"
  },
  {
    id: 3,
    title: "Interactive To-Do List",
    description: "A feature-rich task management application with drag-and-drop prioritization, categories, deadline reminders, and progress tracking. Syncs across multiple devices.",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      { name: "React", bgColor: "#61DAFB", textColor: "#000000" },
      { name: "Firebase", bgColor: "#FFCA28", textColor: "#000000" },
      { name: "TailwindCSS", bgColor: "#06B6D4", textColor: "#ffffff" }
    ],
    demoUrl: "https://example.com/todo-app",
    codeUrl: "https://github.com/example/todo-app"
  },
  {
    id: 4,
    title: "Modern Chair Product Page",
    description: "A responsive e-commerce product page with 3D product visualization, color customization, and an optimized checkout process. Features accessibility considerations and internationalization.",
    image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      { name: "HTML5", bgColor: "#E34F26", textColor: "#ffffff" },
      { name: "CSS3", bgColor: "#1572B6", textColor: "#ffffff" },
      { name: "JavaScript", bgColor: "#F7DF1E", textColor: "#000000" },
      { name: "Three.js", bgColor: "#000000", textColor: "#ffffff" }
    ],
    demoUrl: "https://example.com/chair-product",
    codeUrl: "https://github.com/example/chair-product"
  },
  {
    id: 5,
    title: "Personal Finance Dashboard",
    description: "A comprehensive financial management application with expense tracking, budget planning, investment monitoring, and financial goal setting. Features data visualization and predictive analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      { name: "React", bgColor: "#61DAFB", textColor: "#000000" },
      { name: "Redux", bgColor: "#764ABC", textColor: "#ffffff" },
      { name: "D3.js", bgColor: "#F9A03C", textColor: "#000000" },
      { name: "MongoDB", bgColor: "#47A248", textColor: "#ffffff" }
    ],
    demoUrl: "https://example.com/finance-dashboard",
    codeUrl: "https://github.com/example/finance-dashboard"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my recent work and the technologies I've been working with
          </p>
        </div>
        
        {/* Projects Grid - First project is featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              isFeatured={index === 0}
            />
          ))}
        </div>
        
        {/* View more projects button */}
        <div className="text-center mt-16 animate-fadeInUp animate-delay-300">
          <a 
            href="https://github.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg rounded-full bg-black dark:bg-primary-800 text-white font-medium border-2 border-primary-500 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 transition-all duration-300 hover:bg-primary-900 hover:scale-105"
          >
            View More Projects on GitHub
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 ml-3" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;