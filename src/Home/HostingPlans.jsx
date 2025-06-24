import React from 'react';

// --- SVG Icon Components ---

const SharedIcon = () => (
  <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 3 Servers in gray */}
    <g className="text-gray-300">
      <rect x="10" y="6" width="50" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="11" x2="36" y2="11" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="20" width="50" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="25" x2="40" y2="25" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="34" width="50" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="39" x2="30" y2="39" stroke="currentColor" strokeWidth="1.5" />
    </g>
    {/* Cloud icon on the bottom server */}
    <path d="M36 38 C 34.5 38 33 36.5 33 35 C 33 33.5 34.5 32 36 32 C 38.5 32 40 34 40 35 C 41.5 35 43 33.5 43 32 C 43 30.5 41.5 29 40 29" stroke="#a0aec0" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Blue Checkmark Circle */}
    <g className="text-blue-500">
      <circle cx="58" cy="48" r="10" fill="white" />
      <circle cx="58" cy="48" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M54 48 L 57 51 L 62 45" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

const DedicatedIcon = () => (
  <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 2 Servers in gray */}
    <g className="text-gray-300">
      <rect x="10" y="10" width="50" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="15" x2="40" y2="15" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="24" width="50" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="29" x2="36" y2="29" stroke="currentColor" strokeWidth="1.5" />
    </g>
    {/* Green Monitor and connection line */}
    <g className="text-teal-500">
      <path d="M40 34 V 40 H 50" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="42" y="40" width="16" height="10" rx="1" stroke="currentColor" strokeWidth="2"/>
      <line x1="46" y1="50" x2="54" y2="50" stroke="currentColor" strokeWidth="2" />
    </g>
  </svg>
);

const VpnIcon = () => (
  <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 2 Servers in gray with indicator lights */}
    <g className="text-gray-300">
      <rect x="10" y="10" width="50" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="15" x2="30" y2="15" stroke="currentColor" strokeWidth="1.5" />
      <path d="M45 15h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="10" y="24" width="50" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="29" x2="36" y2="29" stroke="currentColor" strokeWidth="1.5" />
      <path d="M45 29h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </g>
    {/* Green Checkmark Circle */}
    <g className="text-teal-500">
      <circle cx="58" cy="42" r="10" fill="white" />
      <circle cx="58" cy="42" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M54 42 L 57 45 L 62 39" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);


// --- Data for Hosting Plans ---

const plans = [
  {
    name: 'Shared',
    price: '1.99',
    total: '109.99',
    period: 'every two years',
    savings: '30%',
    theme: 'blue',
    icon: <SharedIcon />,
  },
  {
    name: 'Dedicated',
    price: '2.99',
    total: '299.99',
    period: 'every two years',
    savings: '20%',
    theme: 'teal',
    icon: <DedicatedIcon />,
  },
  {
    name: 'VPN',
    price: '3.99',
    total: '399.99',
    period: 'every two years',
    savings: '10%',
    theme: 'teal',
    icon: <VpnIcon />,
  },
];


// --- Reusable Plan Card Component ---

const PlanCard = ({ plan }) => {
  const colorMap = {
    blue: {
      price: 'text-teal-500',
      buttonBg: 'bg-teal-500',
      buttonHoverBg: 'hover:bg-blue-600',
    },
    teal: {
      price: 'text-teal-500',
      buttonBg: 'bg-teal-500',
      buttonHoverBg: 'hover:bg-blue-600',
    }
  };
  
  const colors = colorMap[plan.theme];

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 w-full max-w-sm flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-semibold text-gray-700">{plan.name}</h3>
      <div className="my-4">
        <span className={`text-5xl font-bold ${colors.price}`}>${plan.price}</span>
        <span className="text-gray-500 font-medium ml-1">/Mo</span>
      </div>
      <p className="text-gray-500 text-sm">Total ${plan.total} {plan.period}</p>
      <div className="w-16 border-t my-6 border-gray-200"></div>
      <p className="font-bold text-gray-800 mb-6">Save {plan.savings}</p>
      
      <div className="h-20 flex items-center justify-center mb-6">
        {plan.icon}
      </div>

      <button className={`${colors.buttonBg} ${colors.buttonHoverBg} text-white font-semibold py-3 px-10 rounded-md transition-colors duration-300`}>
        Purchase
      </button>
    </div>
  );
};


// --- Main Component ---

const HostingPlans = () => {
  return (
    <div className="font-sans antialiased">
      <div className="relative bg-white pt-16 pb-32 overflow-hidden">
        {/* Blue background section */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-blue-700"></div>
          {/* Subtle dark shape overlay for depth */}
          <div className="absolute inset-0 bg-indigo-900 opacity-25" style={{ clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)' }}></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          {/* Header Text */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Hosting Plan</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              amet amingcing elit, per sed do eiusmod tempor sittelit inunirig ut sed sittelit do eiusmod.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingPlans;