import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard built with React and D3.js for visualizing complex datasets with real-time updates and customizable views.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    technologies: [
      {
        name: "React",
        bgColor: "bg-primary-900/60",
        textColor: "text-primary-300",
      },
      {
        name: "D3.js",
        bgColor: "bg-secondary-900/60",
        textColor: "text-secondary-300",
      },
      {
        name: "TypeScript",
        bgColor: "bg-gray-800",
        textColor: "text-gray-300",
      },
    ],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Analytics Platform",
    description:
      "A full-stack e-commerce platform with advanced analytics for product performance, customer behavior, and sales forecasting.",
    image: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=1470&auto=format&fit=crop",
    technologies: [
      {
        name: "Node.js",
        bgColor: "bg-primary-900/60",
        textColor: "text-primary-300",
      },
      {
        name: "Express",
        bgColor: "bg-secondary-900/60",
        textColor: "text-secondary-300",
      },
      {
        name: "PostgreSQL",
        bgColor: "bg-gray-800",
        textColor: "text-gray-300",
      },
    ],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Predictive Analysis Tool",
    description:
      "A machine learning application that uses historical data to predict future trends and provide actionable insights for business decisions.",
    image: "https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?q=80&w=1376&auto=format&fit=crop",
    technologies: [
      {
        name: "Python",
        bgColor: "bg-primary-900/60",
        textColor: "text-primary-300",
      },
      {
        name: "TensorFlow",
        bgColor: "bg-secondary-900/60",
        textColor: "text-secondary-300",
      },
      {
        name: "Pandas",
        bgColor: "bg-gray-800",
        textColor: "text-gray-300",
      },
    ],
    demoUrl: "#",
    codeUrl: "#",
  },
];
