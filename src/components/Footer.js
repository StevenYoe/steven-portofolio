import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="py-10 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-2xl font-bold text-primary-500">Steven<span className="text-slate-700 dark:text-slate-200">Portfolio</span></a>
            <p className="text-slate-600 dark:text-slate-400 mt-2">{data.tagline}</p>
          </div>
          <div className="flex space-x-6">
            {data.social.map(socialLink => (
              <a key={socialLink.name} href={socialLink.url} target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-purple-500">
                <i className={socialLink.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 mt-10 pt-6 text-center text-slate-600 dark:text-slate-400">
          <p>{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;