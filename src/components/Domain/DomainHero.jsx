import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import DomainCard from './DomainCard';
import img1 from "../../assets/domanin01.png"
import img2 from "../../assets/domanin02.png"
import img3 from "../../assets/domanin03.png"
import img4 from "../../assets/domanin04.png"
import BgImage from '../AboutUs/BgImage';

const DomainHero  = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExtension, setSelectedExtension] = useState('.net');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm + selectedExtension);
  
  };

  const domainData= [
  {
    id: 1,
    extension:".com", 
    img:img1,
    price: "$11.99/yr",
    isPopular: true
  },
  {
    id: 2,
    extension:".org", 
    img:img2,
    price: "$7.99/yr"
  },
  {
    id: 3,
    extension:".net", 
    img:img3,
    price: "$3.99/yr"
  },
  {
    id: 4,
    extension:".biz", 
    img:img4,
    price: "$2.99/yr"
  }
];

const domainExtensions = [
  ".net",
  ".com",
  ".org",
  ".biz",
  ".uk",
  ".info",
  ".co",
  ".io"
];

  return (
    <>
    <section id='domain' className="relative h-[450px] md:min-h-[650px] w-full overflow-hidden">
  {/* Background Image */}
  <BgImage/>

  {/* Main container with proper centering */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center w-[85%] mx-auto">
    {/* Hero Content - now properly centered */}
    <div className="text-center  ">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
        It All Starts With A Domain Name
      </h1>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-row gap-4 bg-white rounded-lg shadow-xl px-2 md:py-2 items-center">
          <div className="flex-1 relative ">
            <input
              type="text"
              placeholder="Search for your domain here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full  px-2 py-1 text-gray-700 text-lg focus:outline-none rounded-lg"
            />
          </div>
          
          {/* Domain Extension Dropdown............. */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between px-3 py-3 text-gray-700"
            >
              <span className="font-medium">{selectedExtension}</span>
              <ChevronDown className="w-5 h-5 ml-2" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border z-20">
                {domainExtensions.map((ext) => (
                  <button
                    key={ext}
                    onClick={() => {
                      setSelectedExtension(ext);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {ext}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button
            onClick={handleSearch}
            className="px-3 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
          >
            <Search className="w-5 h-5 mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Domain Cards Section - Half inside hero, half outside */}
      <section className="relative -mt-24 md:-mt-32 pb-20 w-[85%] mx-auto">
        <div className="px-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {domainData.map((domain) => (
              <DomainCard key={domain.id} domain={domain} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DomainHero;