import React from 'react';
import FeatureImg1 from '../../assets/about_icon01.png';
import FeatureImg2 from '../../assets/about_icon02.png';
import FeatureImg3 from '../../assets/about_icon03.png';


const FeaturesSection = () => {
    const features = [
  {
    img: FeatureImg1,
    alt: "Domain registrar",
    title: "The world's largest domain name registrar",
  },
  {
    img: FeatureImg2,
    alt: "Global facilities",
    title: "14 facilities, including: Asia, Europe & More",
  },
  {
    img: FeatureImg3,
    alt: "Customer care",
    title: "24/7 round-the-clock customer care operations",
  }
];

  return (
    <section 
      className="py-16 md:py-24  my-6"
      style={{
        background: 'linear-gradient(to left, #5194db 0%, #1a237a 49%, #2c135c 100%)'
      }}
    >
      <div className="w-[90%] mx-auto">
        {/* Heading and Description ......................*/}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Hostgem is...
          </h2>
          <p className="text-base lg:text-lg text-white opacity-90 sm:w-[65%] lg:w-[50%] mx-auto">
            ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut sed sittem do eiusmod.
          </p>
        </div>

        {/* Features Grid .................*/}
        <div className="flex flex-col md:flex-row gap-12 md:gap-3 lg:gap-6 justify-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center ">
              <img 
                src={feature.img} 
                alt={feature.alt} 
                className="w-24 h-24 object-contain mb-1 md:mb-2"
              />
              <h3 className={`text-xl lg:text-2xl ${feature.className} text-white mt-4 w-[85%] sm:w-[60%] md:w-full lg:w-[80%] mx-auto`}>
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;