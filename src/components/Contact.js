import React from 'react';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="py-20 section-animate">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl text-white p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-3/5 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h2>
              <p className="text-primary-100 max-w-xl">{data.description}</p>
            </div>
            <div className="lg:w-2/5 w-full">
              <div className="flex gap-4">
                <a href={data.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm py-3 px-4 rounded-lg flex items-center justify-center transition-all">
                  <i className="fa-brands fa-whatsapp text-xl mr-2 text-white"></i>
                  <span className="truncate">WhatsApp</span>
                </a>
                <a href={data.email} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm py-3 px-4 rounded-lg flex items-center justify-center transition-all">
                  <i className="fa-solid fa-envelope text-xl mr-2 text-white"></i>
                  <span className="truncate">Gmail</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;