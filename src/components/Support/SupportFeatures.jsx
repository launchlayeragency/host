import React from 'react';

export default function SupportFeatures() {
  const features = [
    {
      title: 'Hate waiting for the next available agent? So do we.',
      description: 'When you need a kickstart in your business and you have no time for coding for your website, Hostnet will take that job for you and will build great Took'
    },
    {
      title: 'Application Specific Support',
      description: 'When you need a kickstart in your business and you have no time for coding for your website, Hostnet will take that job for you and will build great Took website in minutes sed do eiusmod tempor incididunt adipisci'
    },
    {
      title: 'In-house issue tracking and load balancing',
      description: 'When you need a kickstart in your business and you have no time for coding for your website, Hostnet will take that job for you and will build great Took website in minutes sed do eiusmod tempor incididunt adipisci'
    },
    {
      title: 'The Human Side of Customer Support',
      description: 'When you need a kickstart in your business and you have no time for coding for your website, Hostnet will take that job for you and will build great Took website in minutes sed do eiusmod tempor incididunt adipisci'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="w-[85%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 md:mb-20 text-center">
            We help more than other hosting
          </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-left w-[90%] md:w-[80%]  mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 ">
                {feature.title}
              </h3>
              <p className="text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}