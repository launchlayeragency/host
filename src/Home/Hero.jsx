import React from 'react';
import heroImage from '../assets/slider_img.png';

const Hero = () => {
  return (
    <div className="relative h-[100vh] min-h-[800px] bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white flex items-center justify-between px-12 mb-24">
      {/* Content Section */}
      <div className="z-10 max-w-[600px]">
        <h1 className="text-5xl mb-4 leading-tight">
          Perfect Hosting Service For You
        </h1>
        <p className="text-xl mb-12 opacity-90">
          Get your domain from $1.25/month
        </p>
        <div className="flex gap-6">
          <button className="px-8 py-3 bg-[#2ecc71] text-white rounded-lg hover:bg-[#27ae60] transition-all duration-300">
            Get Started Now
          </button>
          <button className="px-8 py-3 bg-white/20 text-white rounded-lg backdrop-blur-md hover:bg-white/30 transition-all duration-300">
            Read More
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex gap-5 absolute bottom-[-120px] left-12 z-20">
        <div className="bg-white p-6 rounded-xl w-[280px] text-center text-gray-800 shadow-lg hover:translate-y-[-10px] transition-transform duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full mx-auto mb-5 flex items-center justify-center text-white text-3xl shadow-lg">
            ⚡
          </div>
          <h3 className="text-xl mb-4 text-gray-700">Superior Speed Performance</h3>
          <p className="text-base text-gray-500 leading-relaxed">
            Our free web hosting is powered by top of the line enterprise
            hardware done.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl w-[280px] text-center text-gray-800 shadow-lg hover:translate-y-[-10px] transition-transform duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-[#2ecc71] to-[#1abc9c] rounded-full mx-auto mb-5 flex items-center justify-center text-white text-3xl shadow-lg">
            🎛️
          </div>
          <h3 className="text-xl mb-4 text-gray-700">Powerful Control Panel</h3>
          <p className="text-base text-gray-500 leading-relaxed">
            Our free web hosting is powered by top of the line enterprise
            hardware done.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl w-[280px] text-center text-gray-800 shadow-lg hover:translate-y-[-10px] transition-transform duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-[#9b59b6] to-[#8e44ad] rounded-full mx-auto mb-5 flex items-center justify-center text-white text-3xl shadow-lg">
            ⏱️
          </div>
          <h3 className="text-xl mb-4 text-gray-700">Guaranteed 99.9% Uptime</h3>
          <p className="text-base text-gray-500 leading-relaxed">
            Our free web hosting is powered by top of the line enterprise
            hardware done.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Hosting Illustration"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] max-h-[480px]  object-contain z-10"
      />
    </div>
  );
};

export default Hero;