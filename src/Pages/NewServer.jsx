import React, { useState } from 'react';

// Data for the server plans. Using an array of objects makes the component clean and easy to manage.
const serverPlans = [
  {
    name: 'Intel Xeon E3-1270 v4',
    price: '7.99',
    specs: [
      'Intel Xeon E3-1240',
      '4 x 3.5 GHz',
      '16 GB DDR4 ECC',
      '2x500 GB SSD',
      '10 TB'
    ],
    featured: false,
    theme: 'blue',
  },
  {
    name: 'Intel Xeon E3-1230 v5',
    price: '1.99',
    specs: [
      'Intel Xeon E3-1240',
      '4 x 3.5 GHz',
      '16 GB DDR4 ECC',
      '2x500 GB SSD',
      '10 TB'
    ],
    featured: true,
    theme: 'green',
  },
  {
    name: 'Intel Xeon E3-1270 v3',
    price: '2.99',
    specs: [
      'Intel Xeon E3-1240',
      '4 x 3.5 GHz',
      '16 GB DDR4 ECC',
      '2x500 GB SSD',
      '10 TB'
    ],
    featured: false,
    theme: 'blue',
  },
];

const NewServer = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Color mapping to easily switch themes for cards/buttons
  const colorMap = {
    blue: {
      name: 'text-blue-600',
      buttonBg: 'bg-blue-600',
      buttonHoverBg: 'hover:bg-blue-700',
      border: 'border-gray-200'
    },
    green: {
      name: 'text-green-500',
      buttonBg: 'bg-green-500',
      buttonHoverBg: 'hover:bg-green-600',
      border: 'border-green-500'
    }
  };

  return (
    <section className="bg-white font-sans antialiased py-16 sm:py-24">
      <div className="container mx-auto px-[100px]">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
            Choose Your New Server
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            ametamingcing elit, per sed do eiusmod teimpor sittem elit inuning ut sed sittem do eiusmod.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="bg-gray-100 rounded-lg p-1 flex space-x-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                billingCycle === 'monthly' ? 'bg-blue-600 text-white shadow' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                billingCycle === 'quarterly' ? 'bg-blue-600 text-white shadow' : 'text-gray-600'
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                billingCycle === 'yearly' ? 'bg-blue-600 text-white shadow' : 'text-gray-600'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {serverPlans.map((plan, index) => {
            const themeColors = colorMap[plan.theme];
            return (
              <div 
                key={index}
                className={`bg-white rounded-lg p-8 text-center shadow-lg transition-transform duration-300
                  ${plan.featured ? `border-2 ${themeColors.border} transform lg:scale-110 z-10` : `border ${themeColors.border}`}`
                }
              >
                <h3 className={`text-lg font-bold ${themeColors.name}`}>{plan.name}</h3>
                <div className="my-5">
                  <span className="text-5xl font-extrabold text-gray-800">${plan.price}</span>
                  <span className="text-gray-500 font-medium ml-1">/Mo</span>
                </div>
                
                <ul className="space-y-3 text-gray-600 mb-8">
                  {plan.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>

                <button 
                  className={`w-full ${themeColors.buttonBg} ${themeColors.buttonHoverBg} text-white font-bold py-3 px-10 rounded-lg shadow-md transition-colors`}
                >
                  Purchase
                </button>
              </div>
            );
          })}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-12 space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
        
      </div>
    </section>
  );
};

export default NewServer;