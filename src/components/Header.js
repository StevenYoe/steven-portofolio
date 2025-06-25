import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div>
            <a href="#" className="text-2xl font-bold text-primary-500">
              Steven<span className="text-slate-700 dark:text-slate-200">Portfolio</span>
            </a>
          </div>
          <div className="hidden md:flex md:space-x-4 lg:space-x-8">
            <a href="#home" className="nav-link hover:text-primary-500 active-nav">Home</a>
            <a href="#projects" className="nav-link hover:text-primary-500">Projects</a>
            <a href="#skills" className="nav-link hover:text-primary-500">Skills</a>
            <a href="#education" className="nav-link hover:text-primary-500">Education</a>
            <a href="#experience" className="nav-link hover:text-primary-500">Experience</a>
            <a href="#certification" className="nav-link hover:text-primary-500">Certification</a>
            <a href="#contact" className="nav-link hover:text-primary-500">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button id="theme-toggle" className="p-2 rounded-lg">
              <i className="fa-solid fa-moon text-xl text-slate-700 dark:text-slate-300"></i>
              <i className="fa-solid fa-sun text-xl text-slate-700 dark:text-slate-300 hidden"></i>
            </button>
            <div id="hamburger" className="hamburger md:hidden">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
        <div id="mobile-menu" className="mobile-menu md:hidden">
          <div className="flex flex-col py-4 space-y-4">
            <a href="#home" className="nav-link hover:text-primary-500 active-nav">Home</a>
            <a href="#projects" className="nav-link hover:text-primary-500">Projects</a>
            <a href="#skills" className="nav-link hover:text-primary-500">Skills</a>
            <a href="#education" className="nav-link hover:text-primary-500">Education</a>
            <a href="#experience" className="nav-link hover:text-primary-500">Experience</a>
            <a href="#certification" className="nav-link hover:text-primary-500">Certification</a>
            <a href="#contact" className="nav-link hover:text-primary-500">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;