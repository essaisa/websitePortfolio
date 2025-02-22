import React from 'react';
import githubLogo from '../assets/githubLogo.png'; 

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-12">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div className="max-w-sm mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/500"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Project One</h3>
              <p className="text-gray-700 mb-4">
                A brief description of Project One. It highlights the key features of the project.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="max-w-sm mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/500"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Project Two</h3>
              <p className="text-gray-700 mb-4">
                A brief description of Project Two. It includes important information about the tech used.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="max-w-sm mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/500"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Project Three</h3>
              <p className="text-gray-700 mb-4">
                A brief description of Project Three. It focuses on the technologies and approach used.
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Link Image */}
        <div className="mt-12">
          <a
            href="https://github.com/essaisa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo} // Use the imported logo here
              alt="GitHub Logo"
              className="w-24 mx-auto hover:opacity-80 transition-opacity duration-300"
            />
          </a>
          <p className="mt-4 text-blue-600 font-semibold">See more on GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
