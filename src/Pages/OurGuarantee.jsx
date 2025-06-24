import React from 'react';
import guaranteeIllustration from '../assets/inner_guarantee.png';
// --- ACTION REQUIRED ---
// 1. Place your illustration image in a folder like `src/assets`.
// 2. Uncomment the line below and ensure the path is correct.
// import guaranteeIllustration from '../assets/guarantee-illustration.png';

const OurGuarantee = () => {
    // This uses your imported image if available, otherwise it falls back to a placeholder.
    // I've used a placeholder that closely resembles the one in your design.
    const imageSrc = typeof guaranteeIllustration !== 'undefined' 
        ? guaranteeIllustration 
        : 'https://i.ibb.co/L5BwzGJ/server-illustration.png';

    return (
        // Main section with a light, off-white/cyan background
        <section className="bg-gray-50 font-sans antialiased py-16 sm:py-24">
            <div className="container mx-auto px-[100px]">
                {/* Responsive grid for the two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text Content */}
                    <div className="text-left">
                        {/* Heading with a vertical accent line on the left */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4 mb-6">
                            Our Guarantee
                        </h2>
                        
                        <p className="text-gray-600 leading-relaxed">
                            All of our web hosting services are backed by Namecheap's Hosting Guarantee.
                        </p>

                        <p className="text-gray-600 leading-relaxed mt-4">
                            Please be aware that the sales of Dedicated Servers are only refundable within 7 days of first-time purchases (not including add-ons and licenses). All other sales of Dedicated Servers are final and non-refundable.
                        </p>

                        <button className="mt-8 bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-3 px-10 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            Add Now
                        </button>
                    </div>

                    {/* Right Column: Illustration Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img 
                            src={imageSrc} 
                            alt="Hosting Guarantee Illustration" 
                            className="w-full max-w-xl h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurGuarantee;