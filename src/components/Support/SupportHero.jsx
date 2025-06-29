import React, { useState } from 'react'
import BgImage from '../AboutUs/BgImage';

export default function SupportHero() {
    const [searchTerm, setSearchTerm] = useState('');
 
    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
    };
    
    return (
        <>
            <section id='whmcs' className="relative h-[450px] md:min-h-[650px] w-full overflow-hidden">
                {/* Background Image */}
                <BgImage />

                {/* Main container with 85% width */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center w-[85%] mx-auto">
                    {/* Hero Content */}
                    <div className="text-center w-full md:max-w-7xl">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                           How can we help?
                        </h1>

                        {/* Search Bar - now full width within max-w-7xl */}
                        <div className="w-full max-w-4xl mx-auto">
                            <div className="flex bg-white rounded-lg shadow-xl px-2 md:px-3 py-2 items-center w-full">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="Search Support Knowledge base"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full px-3 py-2 md:px-4 md:py-3 text-gray-700 text-sm sm:text-base md:text-lg focus:outline-none"
                                    />
                                </div>
                               
                                <button
                                    onClick={handleSearch}
                                    className="ml-4 sm:px-3 px-2 py-2 text-sm sm:text-base md:text-lg md:px-7 md:py-3 bg-teal-400 hover:bg-teal-500  text-white font-bold rounded-lg transition-all duration-300 whitespace-nowrap"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}