import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { ThemeToggle } from "@/components/theme-toggle";

interface HeaderProps {
  activeSection?: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection: propActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Use the passed activeSection prop if available, otherwise use scrollSpy
  const scrollSpyActiveSection = useScrollSpy(
    ["hero", "about", "projects", "skills", "experience", "contact"],
    { offset: 100 }
  );
  
  // Use the activeSection from props if provided, otherwise use the one from scrollSpy
  const activeSection = propActiveSection || scrollSpyActiveSection;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "backdrop-blur-lg bg-dark-300/70 shadow-lg border-b border-gray-800/50" 
          : "backdrop-blur-sm bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 lg:py-8">
          <div className="flex items-center">
            <span className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white">
              Shivam Dwivedi
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href.substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    window.scrollTo({
                      top: targetElement.offsetTop - 80,
                      behavior: "smooth",
                    });
                    window.history.pushState(null, "", link.href);
                  }
                }}
                className="relative group"
              >
                <span className={cn(
                  "font-medium text-base md:text-lg transition-colors relative z-10",
                  activeSection === link.href.substring(1)
                    ? "text-black dark:text-white"
                    : "text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
                )}>
                  {link.label}
                </span>
                {/* Animated underline */}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transition-all duration-300 group-hover:w-full",
                  activeSection === link.href.substring(1) ? "w-full" : ""
                )}></span>
              </Link>
            ))}
          </nav>

          {/* Right-aligned elements: Theme Toggle, GitHub, LinkedIn, Contact button */}
          <div className="hidden md:flex items-center space-x-6">
            <ThemeToggle />
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <svg className="h-6 w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="h-6 w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center p-2 rounded-md text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800/50"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - slide down animation */}
      <div
        className={cn(
          "transition-all duration-300 overflow-hidden md:hidden backdrop-blur-lg bg-dark-300/90 border-t border-gray-800/50",
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const targetId = link.href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                  window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                  });
                  window.history.pushState(null, "", link.href);
                  closeMobileMenu();
                }
              }}
              className={cn(
                "block px-3 py-2 rounded-md text-lg font-medium transition-all",
                activeSection === link.href.substring(1)
                  ? "bg-gradient-to-r from-primary-900/30 to-secondary-900/30 text-black dark:text-white border-l-2 border-primary-500"
                  : "text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800/30 hover:text-blue-600 dark:hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Mobile actions: theme toggle, social links, contact */}
          <div className="flex flex-col space-y-4 px-3 py-3 mt-2 border-t border-gray-800/50">
            {/* Theme toggle and social links */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:scale-110 transition-all"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:scale-110 transition-all"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            
            {/* Contact button */}
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                  closeMobileMenu();
                }
              }}
              className="w-full py-3 rounded-md bg-white/90 border-2 border-primary-500 text-primary-600 dark:bg-primary-600/80 dark:text-white text-base font-medium hover:bg-primary-100 dark:hover:bg-primary-500 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
