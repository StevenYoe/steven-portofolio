import React from 'react';

const Hero = ({ data }) => {
  return (
    <section id="home" className="pt-32 pb-24 gradient-bg section-animate">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 px-6 md:pl-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{data.greeting} <span className="text-primary-500">{data.name}</span></h1>
            <p className="text-xl text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="CV Steven 2025.pdf" download="CV Steven 2025.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                <i className="fa-solid fa-download mr-2 text-white"></i> Download CV
              </a>
              <a href={data.contactUrl} className="border-2 border-primary-500 text-primary-500 hover:bg-primary-100/20 dark:hover:bg-primary-800/20 font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                <i className="fa-solid fa-envelope mr-2 text-primary-500"></i> Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center px-6 md:pr-12">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-primary-500 rounded-full transform rotate-12 opacity-20"></div>
              <div className="absolute inset-0 bg-primary-600 rounded-full transform -rotate-12 opacity-20"></div>
              <div className="absolute inset-4 border-4 border-primary-400 rounded-full"></div>
              <div className="relative rounded-full w-full h-full overflow-hidden">
                <img src={data.profileImage}
                     alt="Profile"
                     className="relative w-full h-full object-cover transition-opacity duration-500 hover:opacity-0" />
                <img src={data.profileImageAlt}
                     alt="Profile"
                     className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;