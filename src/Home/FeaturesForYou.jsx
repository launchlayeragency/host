import React from 'react';

// --- SVG Icon Components ---
// I've created these to closely match the icons in the image.

const SsdDriveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h.01M8 16h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l-2 2m0 0l-2-2m2 2V8" />
  </svg>
);

const SecureDriveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2v-4a2 2 0 00-2-2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h.01M8 16h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 12l2 2m0 0l2-2m-2 2V9.5a2.5 2.5 0 00-5 0V12h5z" />
  </svg>
);

const SslCertificateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    <text x="12" y="11" fontFamily="sans-serif" fontSize="5" fontWeight="bold" textAnchor="middle" fill="currentColor">SSL</text>
  </svg>
);

const CloudProvidedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    <rect x="7" y="13" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
    <rect x="13" y="13" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const EasyInstallIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    <text x="8" y="13" fontFamily="monospace" fontSize="3" fontWeight="bold" textAnchor="middle" fill="currentColor">101</text>
    <text x="16" y="13" fontFamily="monospace" fontSize="3" fontWeight="bold" textAnchor="middle" fill="currentColor">010</text>
  </svg>
);


// --- Features Data ---

const featuresData = [
  {
    icon: <SsdDriveIcon />,
    title: 'SSD Drive',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt adipisci.',
  },
  {
    icon: <SecureDriveIcon />,
    title: 'Secure Drive',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt adipisci.',
  },
  {
    icon: <SslCertificateIcon />,
    title: 'Free SSL Certificate',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt adipisci.',
  },
  {
    icon: <CloudProvidedIcon />,
    title: 'Cloud Provided',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt adipisci.',
  },
  {
    icon: <SupportIcon />,
    title: '24/7 Support',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt adipisci.',
  },
  {
    icon: <EasyInstallIcon />,
    title: 'Easy Install',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt adipisci.',
  },
];


// --- Main Component ---

const FeaturesForYou = () => {
  return (
    <div className="bg-white py-16 sm:py-24 font-sans antialiased">
      <div className="container mx-auto px-[100px]">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Unlimited Features For You
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            amet amingcing elit, per sed do eiusmod teimpor sittem elit inuning ut sed sittem do eiusmod.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <div className="text-indigo-600">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-1 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeaturesForYou;