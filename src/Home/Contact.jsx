import React from 'react';
import BgImage from '../components/AboutUs/BgImage';
import ContactDetails from './ContactDetails';
// import BgImage from "../asset";

const Contact = () => {
    return (
        <div>
             <section id='about' className="relative h-[450px] md:min-h-[650px] w-full overflow-hidden">
      {/* Background Image */}
      <BgImage/>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-start px-6 sm:px-12 lg:px-24 w-[85%] mx-auto">
        <div className="">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-white opacity-90">The story of how Hostgem came to be.</p>
        </div>
      </div>
    </section>
   <div className='px-[200px]'>
     <ContactDetails  />
   </div>
        </div>
    );
};

export default Contact;