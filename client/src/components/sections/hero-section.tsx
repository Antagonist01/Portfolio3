import React from "react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";
import ParticleBackground from "@/components/backgrounds/particle-background";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>
      
      {/* Gradient mesh background */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-2/3 bg-gradient-radial from-primary-600/10 via-secondary-600/5 to-transparent rounded-full blur-3xl -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-full md:w-2/3 h-2/3 bg-gradient-radial from-secondary-600/10 via-primary-600/5 to-transparent rounded-full blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary-600/10 blur-3xl animate-[float_8s_ease-in-out_infinite] -z-10"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-secondary-600/10 blur-3xl animate-[float_10s_ease-in-out_infinite_1s] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:max-w-full 2xl:px-32 flex flex-col md:flex-row items-center z-10">
        <div className="md:w-1/2 md:pr-10 lg:pr-16 xl:pr-24">
          <div className="mb-8">
            <p className="text-black dark:text-accent font-medium mb-4 text-xl md:text-2xl lg:text-3xl">Hi, I'm</p>
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold leading-tight mb-8 text-black dark:text-white relative z-10">
              <span className="relative">
                Shivam Dwivedi
              </span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-5xl text-black dark:text-gray-300 mb-10">
              Programmer & Data Analyst
            </p>
            <p className="text-black dark:text-gray-400 text-xl md:text-2xl mb-8 leading-relaxed max-w-xl font-medium">
              I specialize in creating sustainable solutions with modern web
              technologies and turning complex data into actionable insights.
              Let's build something amazing together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToElement('projects')}
                className="px-6 py-3 text-lg bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-blue-400 hover:to-blue-500 shadow-lg shadow-primary-700/20 transition-all duration-300"
              >
                View Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
              <Button
                onClick={() => scrollToElement('contact')}
                variant="outline"
                className="px-6 py-3 text-lg border-gray-700 hover:bg-blue-400/20 hover:text-white transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-6 mt-8">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 hover:scale-110 transition-all"
            >
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary-400 hover:scale-110 transition-all"
            >
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent hover:scale-110 transition-all"
            >
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        {/* Replace floating icon with code-themed visual */}
        <div className="md:w-1/2 flex justify-center mt-16 md:mt-0">
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-accent/20 to-secondary-500/20 rounded-lg opacity-80 blur-3xl transform scale-110"></div>
            
            {/* Code block container */}
            <div className="relative w-[400px] md:w-[500px] lg:w-[550px] xl:w-[600px] h-auto p-8 md:p-10 bg-gray-900/90 backdrop-blur-md rounded-lg border border-gray-700 shadow-xl animate-[float_6s_ease-in-out_infinite] filter drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">
              {/* Terminal-style header */}
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-base text-gray-300 font-mono">developer-profile.js</div>
              </div>
              
              {/* Code content */}
              <div className="font-mono text-base md:text-lg leading-relaxed overflow-hidden">
                <div className="mb-3">
                  <span className="text-blue-400">const</span> <span className="text-green-400">developer</span> <span className="text-white">=</span> <span className="text-yellow-300">{'{'}</span>
                </div>
                
                <div className="mb-1 pl-4">
                  <span className="text-purple-400">name</span><span className="text-white">:</span> <span className="text-green-300">'Shivam Dwivedi'</span><span className="text-white">,</span>
                </div>
                
                <div className="mb-1 pl-4">
                  <span className="text-purple-400">title</span><span className="text-white">:</span> <span className="text-green-300">'Programmer & Data Analyst'</span><span className="text-white">,</span>
                </div>
                
                <div className="mb-1 pl-4">
                  <span className="text-purple-400">skills</span><span className="text-white">:</span> <span className="text-yellow-300">{'['}</span>
                </div>
                
                <div className="mb-1 pl-8">
                  <span className="text-green-300">'JavaScript'</span><span className="text-white">,</span> <span className="text-green-300">'React'</span><span className="text-white">,</span> <span className="text-green-300">'Node.js'</span><span className="text-white">,</span>
                </div>
                
                <div className="mb-1 pl-8">
                  <span className="text-green-300">'Python'</span><span className="text-white">,</span> <span className="text-green-300">'Data Analysis'</span><span className="text-white">,</span> <span className="text-green-300">'SQL'</span>
                </div>
                
                <div className="mb-1 pl-4">
                  <span className="text-yellow-300">{']'}</span><span className="text-white">,</span>
                </div>
                
                <div className="mb-1 pl-4">
                  <span className="text-purple-400">experience</span><span className="text-white">:</span> <span className="text-orange-400">5</span><span className="text-white">,</span> <span className="text-gray-400">// years</span>
                </div>
                
                <div className="mb-1 pl-4">
                  <span className="text-purple-400">passions</span><span className="text-white">:</span> <span className="text-yellow-300">{'['}</span><span className="text-green-300">'Web Dev'</span><span className="text-white">,</span> <span className="text-green-300">'Data Science'</span><span className="text-white">,</span> <span className="text-green-300">'AI'</span><span className="text-yellow-300">{']'}</span>
                </div>
                
                <div className="mb-3">
                  <span className="text-yellow-300">{'}'}</span><span className="text-white">;</span>
                </div>
                
                <div className="mb-3">
                  <span className="text-blue-400">function</span> <span className="text-cyan-400">startAwesomeProject</span><span className="text-yellow-100">()</span> <span className="text-yellow-300">{'{'}</span>
                </div>
                
                <div className="mb-1 pl-4">
                  <span className="text-blue-400">return</span> <span className="text-green-300">'Let\'s collaborate!'</span><span className="text-white">;</span>
                </div>
                
                <div>
                  <span className="text-yellow-300">{'}'}</span>
                </div>
              </div>
              
              {/* Blinking cursor animation */}
              <div className="absolute bottom-[26px] right-8 h-4 w-2 bg-white animate-[blink_1s_step-end_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
