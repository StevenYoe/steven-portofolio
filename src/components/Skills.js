import React from 'react';

const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-20 section-animate delay-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {data.map(skill => (
            <div key={skill.name} className="skill-card bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md dark:shadow-lg dark:shadow-slate-800/50 flex flex-col items-center justify-center transition-all duration-300">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-3">
                {skill.icon.startsWith('fa-') ? (
                  <i className={skill.icon}></i>
                ) : (
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                )}
              </div>
              <h3 className="font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;