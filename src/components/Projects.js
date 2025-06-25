import React from 'react';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800 section-animate delay-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 project-container">
          {data.map(project => (
            <div key={project.id} className="project-card rounded-xl overflow-hidden shadow-lg dark:shadow-lg dark:shadow-slate-800/50" data-type={project.category.toLowerCase()}>
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="project-image w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="bg-primary-500/10 text-primary-500 text-xs font-medium px-2 py-1 rounded-full">{project.category}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a href={project.detailsUrl} className="text-primary-500 hover:text-primary-600 flex items-center">
                    View Details <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                  </a>
                  <div className="flex space-x-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-slate-200 dark:bg-slate-700 rounded-md px-2 py-1 text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;