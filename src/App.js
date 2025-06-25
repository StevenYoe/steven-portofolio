import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolioData.json';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);
  
  // Animate on scroll effect
  useEffect(() => {
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('.section-animate');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('section-visible');
            }
        });
    };
    
    // Run once on page load
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('home').classList.add('section-visible');
        setTimeout(() => {
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll();
        }, 1000);
    });
    // Fallback for React's lifecycle
    setTimeout(() => {
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll();
    }, 1000);

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <main>
        <Hero data={portfolioData.personalInfo} />
        <Projects data={portfolioData.projects} />
        <Skills data={portfolioData.skills} />
        <Education data={portfolioData.education} />
        <Experience data={portfolioData.experiences} />
        <Certification data={portfolioData.certifications} />
        <Contact data={portfolioData.contact} />
      </main>
      <Footer data={portfolioData.footer} />
      
      <button id="scroll-top" onClick={scrollTop}
        className={`fixed bottom-8 right-8 bg-primary-500 text-white p-3 rounded-full shadow-lg transition-all 
                   ${showScroll ? 'opacity-100 visible' : 'opacity-0 invisible'} hover:bg-primary-600`}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

    </div>
  );
}

export default App;