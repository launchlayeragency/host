import React from 'react';

// --- Icon Components ---
// I've created these simple SVG components to match the design.

const DdosIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 1012 3a5.002 5.002 0 00-4.78 3.5M7 16h10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v9" />
    </svg>
);

const CpanelIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const RootAccessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


// --- Data for the feature cards ---
const features = [
  {
    icon: <DdosIcon />,
    bgColor: 'bg-yellow-500',
    title: 'DDOS Protection',
    description: 'Our free web hosting is powered by top of the line enterprise hardware done.'
  },
  {
    icon: <CpanelIcon />,
    bgColor: 'bg-teal-500',
    title: 'Free cPanel/WHM',
    description: 'Our free web hosting is powered by top of the line enterprise hardware done.'
  },
  {
    icon: <RootAccessIcon />,
    bgColor: 'bg-purple-500',
    title: 'Full Root Access',
    description: 'Our free web hosting is powered by top of the line enterprise hardware done.'
  }
];

const ServerIncluded = () => {
    return (
        <section className="bg-gray-100 font-sans antialiased py-16 sm:py-24">
            <div className="container mx-auto px-[100px]">

                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        All Dedicated Server Included
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        ametamingcing elit, per sed do eiusmod teimpor sittem elit inuning ut sed sittem do eiusmod.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg p-8 flex items-center gap-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                            {/* Icon Circle */}
                            <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${feature.bgColor}`}>
                                {feature.icon}
                            </div>
                            
                            {/* Text Content */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
                                <p className="mt-1 text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServerIncluded;