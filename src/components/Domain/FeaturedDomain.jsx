import React from 'react';
import img1 from "../../assets/f_features_icon01.png"
import img2 from "../../assets/f_features_icon02.png"
import img3 from "../../assets/f_features_icon03.png"

const FeaturedDomain = () => {
  const features = [
    {
      id: 1,
      icon: img1,
      title: "Easy Management",
      description: "Our free web hosting is powered by top of the line enterprise hardware done. Our robust help center."
    },
    {
      id: 2,
      icon: img2,
      title: "Auto-Renewal",
      description: "Our free web hosting is powered by top of the line enterprise hardware done. Our robust help center."
    },
    {
      id: 3,
      icon: img3,
      title: "Domain Lock",
      description: "Our free web hosting is powered by top of the line enterprise hardware done. Our robust help center."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="w-[85%] mx-auto">
        {/* Section Header............... */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Each Domains Include
          </h2>
          <p className="text-base lg:text-lg text-gray-500 sm:w-[65%] xl:w-[50%]  mx-auto">
            ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut 
            sed sittem do eiusmod.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-5">
          {features.map((feature) => (
            <div key={feature.id} className="text-center group">
              {/* img */}
              <div className="mb-4 md:mb-8 flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={feature.icon}
                    alt=""
                    className='w-16 h-16 object-contain overflow-hidden'
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-6">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-base w-[85%] sm:w-[60%] md:w-full lg:w-[80%] mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedDomain;