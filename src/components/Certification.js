import React from 'react';

const Certification = ({ data }) => {
  return (
    <section id="certification" className="py-20 bg-slate-50 dark:bg-slate-800 section-animate delay-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cert-container">
          {data.map(cert => (
            <div key={cert.title} className="project-card rounded-xl overflow-hidden shadow-lg dark:shadow-lg dark:shadow-slate-800/50">
              <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                <i className="fa-solid fa-certificate text-7xl text-primary-500"></i>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <span className="bg-primary-500/10 text-primary-500 text-xs font-medium px-2 py-1 rounded-full">{cert.category}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6">{cert.description}</p>
                <a href={cert.url} className="text-primary-500 hover:text-primary-600 flex items-center">
                  View Certificate <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;