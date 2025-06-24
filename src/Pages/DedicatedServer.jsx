import React from 'react';
import BgImage from '../components/AboutUs/BgImage';
import NewServer from './NewServer';
import OurGuarantee from './OurGuarantee';
import ReviewSharedHosting from '../components/Hosting/SharedHosting/ReviewSharedHosting';
import PricingSection from '../components/AboutUs/PricingSection';
import ServerIncluded from './ServerIncluded';

const DedicatedServer = ({ scrollToId }) => {
    return (
        <div>
                <section id='about' className="relative h-[450px] md:min-h-[650px] w-full overflow-hidden">
               {/* Background Image */}
               <BgImage/>
         
               {/* Content */}
               <div className="absolute inset-0 z-10 flex items-center justify-start px-6 sm:px-12 lg:px-24 w-[85%] mx-auto">
                 <div className="">
                   <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Dedicated Server</h1>
                   <p className="text-xl md:text-2xl text-white opacity-90">Powerful with leading-edge technology</p>
                     <div className="md:w-[50%] mt-4 flex  justify-center">
                        <button className="relative px-4 py-2 md:px-5 md:py-3 lg:px-8 lg:py-4 rounded-lg bg-teal-400 text-black font-medium overflow-hidden group transition-all duration-500"
                            onClick={() => {
                                document.getElementById(scrollToId)?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            <span className="relative z-10 font-bold group-hover:text-white transition-colors duration-500 text-lg">
                                Get Started Now
                            </span>
                            <span className="absolute inset-0 bg-blue-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in z-0 pointer-events-none"></span>
                        </button>
                    </div>
                 </div>
               </div>
             </section>
             <NewServer/>
             <OurGuarantee/>
             <ReviewSharedHosting/>
             <ServerIncluded/>
             <PricingSection/>
        </div>
    );
};

export default DedicatedServer;