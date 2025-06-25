import React from 'react';
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
    </div>
  );
}

export default App;