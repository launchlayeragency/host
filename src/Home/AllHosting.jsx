import React, { useState } from "react";

// SVG Icons
const CloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    />
  </svg>
);

const SharedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const VpsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
);

const BuilderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const hostingData = {
  cloud: {
    icon: <CloudIcon />,
    title: "Cloud Hosting",
    description:
      "Our managed cloud hosting platform takes away all the technical complexities, letting you focus on the growth and success.",
    features: [
      "Technical complexities, letting you focus",
      "Powered by top of the line enterprise",
      "Manage web apps more collaboratively",
      "We are committed to deliver fast",
      "Apps more collaboratively.",
    ],
    image: "https://i.ibb.co/Xx2T4JgS/chosting-img01-removebg-preview.png",
  },
  shared: {
    icon: <SharedIcon />,
    title: "Shared Hosting",
    description:
      "Affordable, reliable, and easy-to-use. Our shared hosting is perfect for personal websites and small businesses.",
    features: [
      "Free Domain & SSL Certificate",
      "99.9% Uptime Guarantee",
      "One-Click App Installer",
      "User-Friendly Control Panel",
      "24/7 Expert Support",
    ],
    image: "https://i.ibb.co/Xx2T4JgS/chosting-img01-removebg-preview.png",
  },
  vps: {
    icon: <VpsIcon />,
    title: "VPS Hosting",
    description:
      "Gain more power, control, and flexibility with dedicated resources in a scalable environment.",
    features: [
      "Full Root Access",
      "Dedicated IP Address",
      "Scalable RAM and Storage",
      "High-Performance SSDs",
      "Managed Options Available",
    ],
    image: "https://i.ibb.co/Xx2T4JgS/chosting-img01-removebg-preview.png",
  },
  builder: {
    icon: <BuilderIcon />,
    title: "Website Builder",
    description:
      "Create a professional website without any coding using our drag-and-drop builder.",
    features: [
      "Intuitive Drag-and-Drop Interface",
      "Hundreds of Professional Templates",
      "Built-in SEO Tools",
      "E-commerce Ready",
      "Mobile-Responsive Designs",
    ],
    image: "https://i.ibb.co/Xx2T4JgS/chosting-img01-removebg-preview.png",
  },
};

const AllHosting = () => {
  const [activeTab, setActiveTab] = useState("cloud");
  const activeContent = hostingData[activeTab];

  return (
    <div className="bg-white font-sans ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hostgem Cover All Hosting
          </h1>
          <p className="text-base sm:text-lg text-gray-500">
            ametamngcing elit, per sed do eiusmod tempor sittem elit inuring ut
            sed sittem do eiusmod.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-12 md:mb-16">
          {Object.keys(hostingData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200
                ${
                  activeTab === key
                    ? "bg-teal-500 text-white shadow-lg transform -translate-y-1"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:shadow-md"
                }`}
            >
              <div className="flex gap-2" >
                <span className="mb-2">{hostingData[key].icon}</span>
                <span className="text-sm md:text-base font-medium">
                  {hostingData[key].title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className=" rounded-2xl  overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="p-6 md:p-8 lg:p-10 order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {activeContent.title}
              </h2>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                {activeContent.description}
              </p>
              <ul className="space-y-3">
                {activeContent.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon />
                    <span className="text-gray-700 text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-full flex items-center justify-center p-4 bg-gradient-to-br from-teal-50 to-blue-50">
              <img
                src={activeContent.image}
                alt={`${activeContent.title} illustration`}
                className="max-w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllHosting;
