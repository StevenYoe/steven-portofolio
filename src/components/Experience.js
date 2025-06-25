import React from 'react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 section-animate delay-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 exp-container">
          {data.map(exp => (
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
      </div>
    </section>
  );
};

export default Experience;