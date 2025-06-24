import React from 'react';
import img1 from "../../../assets/feature_icon01.png"
import img2 from "../../../assets/feature_icon02.png"
import img3 from "../../../assets/feature_icon03.png"

const FeatureReseller = () => {
  const features = [
    {
      id: 1,
      icon: img1,
      title: "Free Site Transfer",
      description: "Our free web hosting is powered transfering from another host? Our expert support team is standing by to transfer your site from your old host."
    },
    {
      id: 2,
      icon: img2,
      title: "Free Auto Installer",
      description: "Our free web hosting is powered transfering from another host? Our expert support team is standing by to transfer your site from your old host."
    },
    {
      id: 3,
      icon: img3,
      title: "Free Instant Setup",
      description: "Our free web hosting is powered transfering from another host? Our expert support team is standing by to transfer your site from your old host."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="w-[85%] mx-auto">
        {/* Section Header............... */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Reseller Hosting
          </h2>
          <p className="text-base lg:text-lg text-gray-500 sm:w-[65%] xl:w-[50%]  mx-auto">
           ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut sed sittem do eiusmod.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-5">
          {features.map((feature) => (
            <div key={feature.id} className="text-center group">
              {/* img */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={feature.icon}
                    alt=""
                    className='w-16 h-16 object-contain overflow-hidden'
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">
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
export default FeatureReseller;