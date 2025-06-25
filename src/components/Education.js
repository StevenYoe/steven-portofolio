import React from 'react';

const Education = ({ data }) => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800 section-animate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-lg dark:shadow-slate-800/50 p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-graduation-cap text-4xl text-primary-500"></i>
              </div>
              <span className="bg-primary-500/10 text-primary-500 text-sm font-medium px-3 py-1 rounded-full">{data.period}</span>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">{data.degree}</h3>
              <p className="font-medium text-primary-500 mb-4">{data.university}</p>
              <p className="text-slate-700 dark:text-slate-300">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;