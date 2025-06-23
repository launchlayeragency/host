import React from "react";

const HeroCards = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {/* Cards Section with Equal Heights */}
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 lg:gap-5 lg:absolute lg:bottom-[-120px] xl:bottom-[-250px] left-0 right-0 mx-auto z-20 max-w-[90vw]">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl w-full sm:w-[280px] text-center text-gray-800 border shadow-lg hover:shadow-xl hover:translate-y-[-10px] transition-all duration-300 flex flex-col h-[220px]">
          <div className="flex">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl shadow-md flex-shrink-0">
              ⚡
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Superior Speed Performance
            </h3>
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <p className="text-base text-gray-600 leading-relaxed">
              Our free web hosting is powered by top of the line enterprise
              hardware.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl w-full sm:w-[280px] text-center text-gray-800 border shadow-lg hover:shadow-xl hover:translate-y-[-10px] transition-all duration-300 flex flex-col h-[220px]">
        <div className="flex">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2ecc71] to-[#1abc9c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl shadow-md flex-shrink-0">
            🎛️
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Powerful Control Panel
            </h3>
        </div>
          <div className="flex-grow flex flex-col justify-between">
            
            <p className="text-base text-gray-600 leading-relaxed">
              Intuitive interface with advanced features for complete control.
            </p>
            
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl w-full sm:w-[280px] text-center text-gray-800 border shadow-lg hover:shadow-xl hover:translate-y-[-10px] transition-all duration-300 flex flex-col h-[220px]">
         <div className="flex gap-2">
             <div className="w-16 h-16 bg-gradient-to-br from-[#9b59b6] to-[#8e44ad] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl shadow-md flex-shrink-0">
            ⏱️
          </div>
           <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Guaranteed 99.9% Uptime
            </h3>
         </div>
          <div className="flex-grow flex flex-col justify-between">
           
            <p className="text-base text-gray-600 leading-relaxed">
              Reliable service with industry-leading uptime guarantee.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
