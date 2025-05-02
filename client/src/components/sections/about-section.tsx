import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me
            as a developer and data analyst.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20"></div>
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop"
                alt="Workspace setup with computer and data visualization"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Hi there, I'm Shivam.
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate programmer and data analyst with over 5 years of
              experience in developing web applications and analyzing complex
              datasets. My journey in technology began with a curiosity about
              how data can drive decision-making and has evolved into a career
              focused on building efficient, user-centered solutions.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I specialize in JavaScript/TypeScript ecosystems, with expertise
              in React, Node.js, and modern data analysis tools. My approach
              combines technical excellence with a deep understanding of user
              needs and business objectives.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="text-white font-medium mb-2">Education</h4>
                <p className="text-gray-400">B.Tech in Computer Science</p>
                <p className="text-gray-500 text-sm">
                  Indian Institute of Technology
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Experience</h4>
                <p className="text-gray-400">5+ Years</p>
                <p className="text-gray-500 text-sm">
                  Web Development & Data Analysis
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Location</h4>
                <p className="text-gray-400">Bangalore, India</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Interests</h4>
                <p className="text-gray-400">Data Visualization, ML, UI/UX</p>
              </div>
            </div>

            <Button 
              onClick={() => scrollToElement('contact')}
              className="px-5 py-3 bg-primary-700 hover:bg-primary-800 shadow-lg shadow-primary-800/20 transition-all duration-300"
            >
              Let's Connect
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
