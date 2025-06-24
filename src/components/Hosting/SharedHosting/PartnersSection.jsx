import React from 'react';
import img1 from "../../../assets/brand_logo01.png";
import img2 from "../../../assets/brand_logo02.png";
import img3 from "../../../assets/brand_logo03.png";
import img4 from "../../../assets/brand_logo04.png";
import img5 from "../../../assets/brand_logo05.png";

const PartnersSection = () => {
    const partners = [
        { id: 1, logo: img1, alt: 'Partner 1' },
        { id: 2, logo: img2, alt: 'Partner 2' },
        { id: 3, logo: img3, alt: 'Partner 3' },
        { id: 4, logo: img4, alt: 'Partner 4' },
        { id: 5, logo: img5, alt: 'Partner 5' }
    ];

   


    return (
        <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="w-[80%] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Partners</h2>
                    <p className="text-base lg:text-lg text-gray-500 sm:w-[65%] xl:w-[50%] mx-auto">
                        ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut sed sittem do eiusmod.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="flex flex-col items-center">
                    {/* Large screens (W shape) */}
                    <div className="hidden lg:flex flex-col items-center w-full">
                        {/* Top row - 3 logos */}
                        <div className="flex justify-center gap-10 mb-4 w-full">
                            {partners.slice(0, 3).map(partner => (
                                <div key={`lg-top-${partner.id}`} className="w-64 h-48 flex items-center justify-center p-4 group">
                                    <img
                                        src={partner.logo}
                                        alt={partner.alt}
                                        className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                     {/* Overlay */}
                               
                                </div>
                            ))}
                        </div>
                        {/* Bottom row - 2 logos */}
                        <div className="flex justify-center gap-10 w-full">
                            {partners.slice(3, 5).map(partner => (
                                <div key={`lg-bottom-${partner.id}`} className="w-64 h-48 flex items-center justify-center p-4 group">
                                    <img
                                        src={partner.logo}
                                        alt={partner.alt}
                                        className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                     {/* Overlay */}
                               
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Medium screens (V shape) */}
                    <div className="hidden md:flex lg:hidden flex-col items-center w-full">
                        {/* Top row - 2 logos */}
                        <div className="flex justify-center gap-10 mb-4 w-full">
                            {partners.slice(0, 2).map(partner => (
                                <div key={`md-top-${partner.id}`} className="w-48 h-32 flex items-center justify-center p-4 group">
                                    <img
                                        src={partner.logo}
                                        alt={partner.alt}
                                        className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                     {/* Overlay */}
                               
                                </div>
                            ))}
                        </div>
                        {/* Middle row - 2 logos */}
                        <div className="flex justify-center gap-10 mb-4 w-full">
                            {partners.slice(2, 4).map(partner => (
                                <div key={`md-middle-${partner.id}`} className="w-48 h-32 flex items-center justify-center p-4 group">
                                    <img
                                        src={partner.logo}
                                        alt={partner.alt}
                                        className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                     {/* Overlay */}
                               
                                </div>
                            ))}
                        </div>
                        {/* Bottom row - 1 centered logo */}
                        <div className="flex justify-center w-full">
                            <div key={`md-bottom-${partners[4].id}`} className="w-48 h-32 flex items-center justify-center p-4 group">
                                <img
                                    src={partners[4].logo}
                                    alt={partners[4].alt}
                                    className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                  {/* Overlay */}
                               
                            </div>
                        </div>
                    </div>

                    {/* Small screens (Single column) */}
                    <div className="grid grid-cols-1 md:hidden gap-8 w-full max-w-md mx-auto">
                        {partners.map(partner => (
                            <div key={`sm-${partner.id}`} className="w-full h-24 flex items-center justify-center p-4 group">
                                <img
                                    src={partner.logo}
                                    alt={partner.alt}
                                    className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                  {/* Overlay */}
                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;