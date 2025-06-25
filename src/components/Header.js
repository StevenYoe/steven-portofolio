import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveNav(section);
    setMenuOpen(false); // Close menu on link click
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 300)) {
          current = section.getAttribute('id');
        }
      });
      setActiveNav(current || 'home');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div>
            <a href="#home" className="text-2xl font-bold text-primary-500">Steven<span className="text-slate-700 dark:text-slate-200">Portfolio</span></a>
          </div>
          <div className="hidden md:flex md:space-x-4 lg:space-x-8">
            <a href="#home" onClick={() => handleNavClick('home')} className={`nav-link hover:text-primary-500 ${activeNav === 'home' ? 'active-nav' : ''}`}>Home</a>
            <a href="#projects" onClick={() => handleNavClick('projects')} className={`nav-link hover:text-primary-500 ${activeNav === 'projects' ? 'active-nav' : ''}`}>Projects</a>
            <a href="#skills" onClick={() => handleNavClick('skills')} className={`nav-link hover:text-primary-500 ${activeNav === 'skills' ? 'active-nav' : ''}`}>Skills</a>
            <a href="#education" onClick={() => handleNavClick('education')} className={`nav-link hover:text-primary-500 ${activeNav === 'education' ? 'active-nav' : ''}`}>Education</a>
            <a href="#experience" onClick={() => handleNavClick('experience')} className={`nav-link hover:text-primary-500 ${activeNav === 'experience' ? 'active-nav' : ''}`}>Experience</a>
            <a href="#certification" onClick={() => handleNavClick('certification')} className={`nav-link hover:text-primary-500 ${activeNav === 'certification' ? 'active-nav' : ''}`}>Certification</a>
            <a href="#contact" onClick={() => handleNavClick('contact')} className={`nav-link hover:text-primary-500 ${activeNav === 'contact' ? 'active-nav' : ''}`}>Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button id="theme-toggle" onClick={toggleTheme} className="p-2 rounded-lg">
              {isDarkMode ? (
                <i className="fa-solid fa-sun text-xl text-slate-300"></i>
              ) : (
                <i className="fa-solid fa-moon text-xl text-slate-700"></i>
              )}
            </button>
            <div id="hamburger" onClick={toggleMenu} className={`hamburger md:hidden ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
        <div id="mobile-menu" className={`mobile-menu md:hidden ${isMenuOpen ? 'open' : ''}`}>
          <div className="flex flex-col py-4 space-y-4">
            <a href="#home" onClick={() => handleNavClick('home')} className={`nav-link hover:text-primary-500 ${activeNav === 'home' ? 'active-nav' : ''}`}>Home</a>
            <a href="#projects" onClick={() => handleNavClick('projects')} className={`nav-link hover:text-primary-500 ${activeNav === 'projects' ? 'active-nav' : ''}`}>Projects</a>
            <a href="#skills" onClick={() => handleNavClick('skills')} className={`nav-link hover:text-primary-500 ${activeNav === 'skills' ? 'active-nav' : ''}`}>Skills</a>
            <a href="#education" onClick={() => handleNavClick('education')} className={`nav-link hover:text-primary-500 ${activeNav === 'education' ? 'active-nav' : ''}`}>Education</a>
            <a href="#experience" onClick={() => handleNavClick('experience')} className={`nav-link hover:text-primary-500 ${activeNav === 'experience' ? 'active-nav' : ''}`}>Experience</a>
            <a href="#certification" onClick={() => handleNavClick('certification')} className={`nav-link hover:text-primary-500 ${activeNav === 'certification' ? 'active-nav' : ''}`}>Certification</a>
            <a href="#contact" onClick={() => handleNavClick('contact')} className={`nav-link hover:text-primary-500 ${activeNav === 'contact' ? 'active-nav' : ''}`}>Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;