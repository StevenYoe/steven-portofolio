import React, { useState } from 'react';

const Experience = ({ data }) => {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowAll(false);
  };

  const filteredExperiences = data.filter(exp => {
    if (filter === 'All') {
      return true;
    }
    return exp.category.toLowerCase() === filter.toLowerCase();
  });

  const experiencesToShow = showAll ? filteredExperiences : filteredExperiences.slice(0, 2);

  return (
    <section id="experience" className="py-20 section-animate delay-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        <div className="flex justify-center mb-12 gap-2 flex-wrap">
          <button onClick={() => handleFilterChange('All')} className={`exp-filter-btn px-4 py-2 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors ${filter === 'All' ? 'active-filter bg-primary-500 text-white' : ''}`} data-filter="all">All</button>
          <button onClick={() => handleFilterChange('Organization')} className={`exp-filter-btn px-4 py-2 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors ${filter === 'Organization' ? 'active-filter bg-primary-500 text-white' : ''}`} data-filter="organization">Organization</button>
          <button onClick={() => handleFilterChange('Internship')} className={`exp-filter-btn px-4 py-2 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors ${filter === 'Internship' ? 'active-filter bg-primary-500 text-white' : ''}`} data-filter="internship">Internship</button>
          <button onClick={() => handleFilterChange('Freelance')} className={`exp-filter-btn px-4 py-2 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors ${filter === 'Freelance' ? 'active-filter bg-primary-500 text-white' : ''}`} data-filter="freelance">Freelance</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 exp-container">
          {experiencesToShow.map(exp => (
            <div key={exp.title} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md dark:shadow-lg dark:shadow-slate-800/50">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="bg-primary-500/10 text-primary-500 text-xs font-medium px-2 py-1 rounded-full">{exp.category}</span>
                  <span className="bg-primary-500/10 text-primary-500 text-xs font-medium px-2 py-1 rounded-full">{exp.period}</span>
                </div>
              </div>
              <p className="font-medium text-primary-500 mb-3">{exp.company}</p>
              <p className="text-slate-700 dark:text-slate-300">{exp.description}</p>
            </div>
          ))}
        </div>
        {filteredExperiences.length > 2 && (
          <div className="text-center mt-12">
            <button onClick={() => setShowAll(!showAll)} className="inline-block border-2 border-primary-500 text-primary-500 hover:bg-primary-100/20 dark:hover:bg-primary-800/20 font-medium py-3 px-8 rounded-lg transition-all">
              {showAll ? 'View Less' : 'View All Experiences'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;