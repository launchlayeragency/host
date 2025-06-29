import React from 'react';
import { FaTicketAlt, FaComments, FaPhoneAlt, FaCommentDots, FaEdit } from 'react-icons/fa';

export default function SupportCards() {
  const supportChannels = [
    {
      title: "Tickets 24/7",
      description: "First Reply: 10 Minutes",
      icon: <FaEdit className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
      title: "Live Chat 24/7",
      description: "Reply Time: Instantly",
      icon: <FaCommentDots className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
      title: "Phone 24/7",
      description: "Reply Time: Instantly",
      icon: <FaPhoneAlt className="w-12 h-12 md:w-16 md:h-16" />,
    },
    {
      title: "Leave Feedback",
      description: "Reply Time: Instantly",
      icon: <FaComments className="w-12 h-12 md:w-16 md:h-16" />,
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-[85%] mx-auto">
       
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We do not keep you waiting!
          </h2>
          <p className="text-base lg:text-lg text-gray-500 sm:w-[65%] xl:w-[50%]  mx-auto">
            ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut sed sittem do eiusmod.
          </p>
        </div>

        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => (
            <div 
              key={index}
              className="bg-slate-100 rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-blue-800 mb-6">
                {channel.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {channel.title}
              </h3>
              <p className="text-gray-600">
                {channel.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}