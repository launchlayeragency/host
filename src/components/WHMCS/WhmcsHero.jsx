import React, { useState } from 'react'
import BgImage from '../AboutUs/BgImage';
import { Search } from 'lucide-react';

export default function WhmcsHero() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);

    };
    return (
        <>
            <section id='whmcs' className="relative h-[450px] md:min-h-[650px] w-full overflow-hidden">
                {/* Background Image */}
                <BgImage />

                {/* Main container with proper centering */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center w-[85%] mx-auto">
                    {/* Hero Content */}
                    <div className="text-center w-full md:max-w-7xl  ">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
                            Begin the search for your perfect domain name...
                        </h1>

                        {/* Search Bar */}
                        <div className="max-w-4xl w-full mx-auto">
                            <div className="flex flex-row gap-4 bg-white rounded-lg shadow-xl px-2 py-2 md:py-2.5 items-center">
                                <div className="flex-1 relative ">
                                    <input
                                        type="text"
                                        placeholder="EX.example.com"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full  px-2 py-1 text-gray-700 text-sm sm:text-base md:text-lg focus:outline-none rounded-lg"
                                    />
                                </div>

                                <div className='flex flex-row gap-1'>
                                    <button
                                        onClick={handleSearch}
                                        className="sm:px-3 px-2 py-2 text-sm sm:text-base md:text-lg md:px-7 md:py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
                                    >
                                        Search
                                    </button>

                                    <button
                                        onClick={handleSearch}
                                        className=" sm:px-3 px-2 py-2 text-sm sm:text-base md:text-lg md:px-7 md:py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
                                    >
                                        Transfer
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
