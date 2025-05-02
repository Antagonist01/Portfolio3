import Header from "@/components/header";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/backgrounds/particle-background";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

const Home = () => {
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Handle smooth scrolling with URL hash
  useEffect(() => {
    // Check if there's a hash in the URL on initial load
    if (location.includes("#")) {
      const id = location.split("#")[1];
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          
          setActiveSection(id);
        }
      }, 100);
    }
  }, [location]);
  
  // Intersection Observer for scroll animations and active section detection
  useEffect(() => {
    // Setup intersection observer for animations
    const animationObserverOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleAnimationIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          animationObserver.unobserve(entry.target);
        }
      });
    };
    
    const animationObserver = new IntersectionObserver(handleAnimationIntersect, animationObserverOptions);
    
    // Target all animation elements
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.remove('animate-fadeInUp');
      animationObserver.observe(el);
    });
    
    // Setup intersection observer for section detection
    const sectionObserverOptions = {
      root: null,
      rootMargin: '-80px 0px -20% 0px',
      threshold: 0.1
    };
    
    const handleSectionIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const sectionObserver = new IntersectionObserver(handleSectionIntersect, sectionObserverOptions);
    
    // Observe all sections
    const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        sectionObserver.observe(element);
      }
    });
    
    return () => {
      animationObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-dark-300 text-gray-200 font-sans relative min-h-screen">
      {/* Background particles */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>
      
      <div className="relative z-10">
        <Header activeSection={activeSection} />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
