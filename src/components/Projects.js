import React, { useState, useLayoutEffect, useRef } from 'react';

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef(null);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowAll(false);
  };

  const filteredProjects = data.filter(project => {
    if (filter === 'All') return true;
    return project.category.toLowerCase() === filter.toLowerCase();
  });

  const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  useLayoutEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.children;
      if (cards.length === 0) return;

      // Reset heights before recalculating
      for (const card of cards) {
        const titleContainer = card.querySelector('.title-container');
        if (titleContainer) {
            titleContainer.style.minHeight = '';
        }
      }
      
      let maxHeight = 0;
      for (const card of cards) {
        const titleContainer = card.querySelector('.title-container');
        if (titleContainer && titleContainer.offsetHeight > maxHeight) {
          maxHeight = titleContainer.offsetHeight;
        }
      }

      for (const card of cards) {
        const titleContainer = card.querySelector('.title-container');
        if (titleContainer) {
            titleContainer.style.minHeight = `${maxHeight}px`;
        }
      }
    }
  }, [projectsToShow]);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800 section-animate delay-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div className="flex justify-center mb-12 gap-2 flex-wrap">
          <button onClick={() => handleFilterChange('All')} className={`filter-btn px-4 py-2 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors ${filter === 'All' ? 'active-filter bg-primary-500 text-white' : ''}`}>All</button>
          <button onClick={() => handleFilterChange('Web App')} className={`filter-btn px-4 py-2 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors ${filter === 'Web App' ? 'active-filter bg-primary-500 text-white' : ''}`}>Web App</button>
          <button onClick={() => handleFilterChange('Mobile')} className={`filter-btn px-4 py-2 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors ${filter === 'Mobile' ? 'active-filter bg-primary-500 text-white' : ''}`}>Mobile</button>
          <button onClick={() => handleFilterChange('IoT')} className={`filter-btn px-4 py-2 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors ${filter === 'IoT' ? 'active-filter bg-primary-500 text-white' : ''}`}>IoT</button>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map(project => (
            <div key={project.id} className="project-card flex flex-col rounded-xl overflow-hidden shadow-lg dark:shadow-lg dark:shadow-slate-800/50 bg-white dark:bg-slate-800" data-type={project.category.toLowerCase()}>
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="project-image w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="title-container flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="bg-primary-500/10 text-primary-500 text-xs font-medium px-2 py-1 rounded-full flex-shrink-0">{project.category}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex justify-between items-center mt-auto">
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
        {filteredProjects.length > 3 && (
          <div className="text-center mt-12">
            <button onClick={() => setShowAll(!showAll)} className="inline-block border-2 border-primary-500 text-primary-500 hover:bg-primary-100/20 dark:hover:bg-primary-800/20 font-medium py-3 px-8 rounded-lg transition-all">
              {showAll ? 'View Less' : 'View All Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;