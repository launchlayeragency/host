import React from 'react';
import heroImage from '../assets/slider_img.png';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] sm:min-h-[500px] bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 sm:px-8 md:px-12 mb-24 overflow-hidden">
      {/* Glowing Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-blue-500 opacity-20 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 sm:w-80 sm:h-80 rounded-full bg-indigo-500 opacity-15 filter blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Content Section */}
      <div className="z-10 w-full sm:max-w-[600px] relative mt-16 sm:mt-0 px-4 sm:px-0">
        {/* Animated Text Glow */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight font-bold text-white drop-shadow-lg hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500">
          Perfect Hosting Service For You
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 opacity-90 relative inline-block">
          <span className="relative z-10">Get your domain from <span className='font-bold text-2xl sm:text-3xl text-green-300'>$1.25/</span> month</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-[pulse_3s_ease-in-out_infinite]"></span>
        </p>

        {/* Enhanced Buttons - Stack on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto">
          <button className="relative px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-[#2ecc71] text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-[#27ae60] hover:shadow-lg hover:shadow-[#27ae60]/50 text-sm sm:text-base">
            <span className="relative z-10">Get Started Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-lg border-2 border-white/20 group-hover:border-white/40 transition-all duration-500"></span>
          </button>
          
          <button className="relative px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-white/10 text-white rounded-lg overflow-hidden group transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-white/20 text-sm sm:text-base">
            <span className="relative z-10">Read More</span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-lg border-2 border-white/10 group-hover:border-white/30 transition-all duration-500"></span>
            <span className="absolute inset-0 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-300"></span>
          </button>
        </div>
      </div>

      {/* Hero Image with Enhanced Animation - Centered on mobile, right-aligned on sm+ */}
      <div className="relative sm:absolute w-full sm:w-auto right-0 top-auto sm:top-1/2 mt-8 sm:mt-0 sm:-translate-y-1/2 h-[40vh] sm:h-[50%] md:h-[70%] max-h-[300px] sm:max-h-[400px] md:max-h-[500px] z-10 px-4 sm:px-0">
        <div className="relative h-full w-full flex justify-center sm:justify-end">
          <img
            src={heroImage}
            alt="Hosting Illustration"
            className="h-full w-auto object-contain animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_15px_40px_rgba(255,255,255,0.4)] transition-all duration-500"
          />
          {/* Glow effect around image */}
          <div className="absolute inset-0 bg-blue-400/10 rounded-full filter blur-xl -z-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;