export interface Technology {
  name: string;
  bgColor: string;
  textColor: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  demoUrl: string;
  codeUrl: string;
}

export interface TechnicalSkill {
  name: string;
  percentage: number;
}

export interface ProfessionalSkill {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}
