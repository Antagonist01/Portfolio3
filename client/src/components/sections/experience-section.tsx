import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar, Briefcase, MapPin, Code, FileCode, Star } from 'lucide-react';

// Experience data with type definition
interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  isCurrent: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Tech Innovations, Inc.",
    position: "Senior Frontend Developer",
    duration: "Jan 2022 - Present",
    location: "Bangalore, India",
    description: [
      "Lead the development of the company's flagship web application using React and TypeScript",
      "Implemented modern CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
      "Optimized application performance, improving load times by 30%"
    ],
    technologies: ["React", "TypeScript", "Next.js", "TailwindCSS", "GraphQL"],
    isCurrent: true
  },
  {
    id: 2,
    company: "Digital Solutions Co.",
    position: "Frontend Developer",
    duration: "Jul 2020 - Dec 2021",
    location: "Bangalore, India",
    description: [
      "Developed responsive user interfaces for multiple client projects",
      "Collaborated with UX designers to implement pixel-perfect designs",
      "Contributed to the company's component library",
      "Participated in daily stand-ups and sprint planning"
    ],
    technologies: ["React", "JavaScript", "Redux", "SCSS", "Figma"],
    isCurrent: false
  },
  {
    id: 3,
    company: "Global Web Services",
    position: "Junior Web Developer",
    duration: "Feb 2018 - June 2020",
    location: "Mumbai, India",
    description: [
      "Built and maintained websites for various clients",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Assisted in the migration of legacy PHP applications to modern frameworks",
      "Worked directly with clients to gather requirements"
    ],
    technologies: ["HTML/CSS", "JavaScript", "jQuery", "PHP", "Bootstrap"],
    isCurrent: false
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-300 via-secondary-400 to-primary-300"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id} 
                className={cn(
                  "relative flex flex-col md:flex-row items-start gap-6 md:gap-10 animate-fadeInUp",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-10 w-5 h-5 rounded-full border-4 border-white dark:border-gray-800 z-10">
                  <div className={cn(
                    "w-full h-full rounded-full",
                    experience.isCurrent 
                      ? "bg-gradient-to-r from-primary-500 to-secondary-500 animate-pulse" 
                      : "bg-gray-300 dark:bg-gray-600"
                  )}></div>
                </div>
                
                {/* Content */}
                <div className={cn(
                  "ml-10 md:ml-0 md:w-1/2 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105",
                  "border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                )}>
                  {/* Current position indicator */}
                  {experience.isCurrent && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      CURRENT
                    </div>
                  )}
                  
                  {/* Company & Position */}
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.position}
                    </h3>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mt-1">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>{experience.company}</span>
                    </div>
                  </div>
                  
                  {/* Duration & Location */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Star className="w-4 h-4 mr-2 text-secondary-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <div className="flex items-center mb-2">
                      <Code className="w-4 h-4 mr-2 text-primary-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Technologies:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;