import React from 'react';
import callIcon from '../assets/q_icon.png';
// Custom SVG component for the support agent icon to closely match the image
const SupportIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="text-blue-500">
      <path d="M40 46C48.2843 46 55 39.2843 55 31C55 22.7157 48.2843 16 40 16C31.7157 16 25 22.7157 25 31C25 39.2843 31.7157 46 40 46Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 46V54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25 54H55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 36C22 27.1634 29.1634 20 38 20H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M52 42C52 46.4183 48.4183 50 44 50H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M52 42V36H58V40C58 41.1046 57.1046 42 56 42H52Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

// Custom SVG component for the dotted world map background
const DottedWorldMap = () => (
  <svg width="100%" height="100%" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" className="fill-current text-blue-400">
    <circle cx="205" cy="180" r="1.5" /><circle cx="215" cy="185" r="1.5" /><circle cx="225" cy="183" r="1.5" /><circle cx="235" cy="180" r="1.5" />
    <circle cx="200" cy="190" r="1.5" /><circle cx="210" cy="195" r="1.5" /><circle cx="220" cy="193" r="1.5" /><circle cx="230" cy="190" r="1.5" />
    <circle cx="195" cy="200" r="1.5" /><circle cx="205" cy="205" r="1.5" /><circle cx="215" cy="203" r="1.5" /><circle cx="225" cy="200" r="1.5" />
    <circle cx="190" cy="210" r="1.5" /><circle cx="200" cy="215" r="1.5" /><circle cx="210" cy="213" r="1.5" /><circle cx="220" cy="210" r="1.5" />
    <circle cx="240" cy="215" r="1.5" /><circle cx="250" cy="218" r="1.5" /><circle cx="260" cy="220" r="1.5" />
    <circle cx="320" cy="120" r="1.5" /><circle cx="330" cy="115" r="1.5" /><circle cx="340" cy="118" r="1.5" /><circle cx="350" cy="122" r="1.5" />
    <circle cx="360" cy="125" r="1.5" /><circle cx="370" cy="128" r="1.5" /><circle cx="380" cy="130" r="1.5" /><circle cx="390" cy="132" r="1.5" />
    <circle cx="330" cy="130" r="1.5" /><circle cx="340" cy="135" r="1.5" /><circle cx="350" cy="138" r="1.5" /><circle cx="360" cy="140" r="1.5" />
    <circle cx="370" cy="142" r="1.5" /><circle cx="380" cy="145" r="1.5" /><circle cx="390" cy="150" r="1.5" /><circle cx="400" cy="155" r="1.5" />
    <circle cx="410" cy="160" r="1.5" /><circle cx="420" cy="165" r="1.5" /><circle cx="430" cy="170" r="1.5" /><circle cx="440" cy="175" r="1.5" />
    <circle cx="450" cy="180" r="1.5" /><circle cx="460" cy="185" r="1.5" /><circle cx="470" cy="190" r="1.5" /><circle cx="480" cy="195" r="1.5" />
    <circle cx="490" cy="200" r="1.5" /><circle cx="500" cy="205" r="1.5" /><circle cx="510" cy="210" r="1.5" /><circle cx="520" cy="215" r="1.5" />
    <circle cx="530" cy="220" r="1.5" /><circle cx="540" cy="225" r="1.5" /><circle cx="550" cy="230" r="1.5" /><circle cx="560" cy="235" r="1.5" />
    <circle cx="570" cy="240" r="1.5" /><circle cx="580" cy="245" r="1.5" /><circle cx="590" cy="250" r="1.5" /><circle cx="600" cy="255" r="1.5" />
    <circle cx="610" cy="260" r="1.5" /><circle cx="620" cy="265" r="1.5" /><circle cx="630" cy="270" r="1.5" /><circle cx="640" cy="275" r="1.5" />
    <circle cx="650" cy="280" r="1.5" /><circle cx="660" cy="285" r="1.5" /><circle cx="670" cy="290" r="1.5" /><circle cx="680" cy="295" r="1.5" />
    <circle cx="690" cy="300" r="1.5" /><circle cx="700" cy="305" r="1.5" /><circle cx="710" cy="310" r="1.5" /><circle cx="720" cy="315" r="1.5" />
    <circle cx="730" cy="320" r="1.5" /><circle cx="740" cy="325" r="1.5" /><circle cx="750" cy="330" r="1.5" /><circle cx="760" cy="335" r="1.5" />
    <circle cx="770" cy="340" r="1.5" /><circle cx="780" cy="345" r="1.5" /><circle cx="790" cy="350" r="1.5" /><circle cx="800" cy="355" r="1.5" />
    <circle cx="650" cy="150" r="1.5" /><circle cx="660" cy="155" r="1.5" /><circle cx="670" cy="160" r="1.5" /><circle cx="680" cy="165" r="1.5" />
    <circle cx="690" cy="170" r="1.5" /><circle cx="700" cy="175" r="1.5" /><circle cx="710" cy="180" r="1.5" /><circle cx="720" cy="185" r="1.5" />
    <circle cx="730" cy="190" r="1.5" /><circle cx="740" cy="195" r="1.5" /><circle cx="750" cy="200" r="1.5" /><circle cx="760" cy="205" r="1.5" />
    <circle cx="770" cy="210" r="1.5" /><circle cx="780" cy="215" r="1.5" /><circle cx="790" cy="220" r="1.5" /><circle cx="800" cy="225" r="1.5" />
    <circle cx="810" cy="230" r="1.5" /><circle cx="820" cy="235" r="1.5" /><circle cx="830" cy="240" r="1.5" /><circle cx="840" cy="245" r="1.5" />
  </svg>
);


const ServerWorldwide = () => {
  return (
    <section className="font-sans antialiased mb-24">
      {/* Blue gradient section with background map */}
      <div className="relative bg-gradient-to-r from-indigo-800 to-blue-700 pt-24 pb-48">
        
        {/* Background Map SVG */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <DottedWorldMap />
        </div>
        
        {/* Main Content */}
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold">
            We Have Server Worldwide
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            ametamingcing elit, per sed do eiusmod tempor sittem elit inulining ut sed sittelit do eiusmod.
          </p>
          <button className="mt-8 bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 px-10 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Overlapping cards container */}
      <div className="relative container mx-auto px-4 -mt-36">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          
          {/* Left Card: Save Big */}
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg text-center flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Save Big</h3>
              <p className="text-sm text-gray-500 mt-1">On Domains</p>
              
              <div className="flex justify-center gap-3 my-6">
                <span className="bg-gray-100 text-gray-700 font-semibold px-4 py-1.5 rounded-md">.com</span>
                <span className="bg-gray-100 text-gray-700 font-semibold px-4 py-1.5 rounded-md">.org</span>
                <span className="bg-gray-100 text-gray-700 font-semibold px-4 py-1.5 rounded-md">.net</span>
              </div>
              
              <p className="text-lg font-semibold text-gray-700 my-6">Just 7.99 Only</p>
            </div>
            
            <button className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Right Card: Have Questions? */}
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg text-center flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Have questions?</h3>
              <p className="text-gray-600 mt-2 max-w-xs mx-auto">If you have any questions, feel free to call us toll-free</p>
              
              <div className="my-6 flex justify-center">
               <img src={callIcon} alt="" />
              </div>
            </div>

            <a href="tel:1-234-567-8900" className="inline-block bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
              1-234-567-8900
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServerWorldwide;