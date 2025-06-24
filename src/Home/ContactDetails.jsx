import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser, FaPencilAlt } from 'react-icons/fa';

// Data for the top info cards to keep the code clean
const contactInfoCards = [
  {
    icon: <FaEnvelope className="text-blue-500 text-2xl" />,
    title: 'Email Address',
    lines: ['info@example.com', 'webinfo@webmail.com'],
  },
  {
    icon: <FaPhoneAlt className="text-blue-500 text-2xl" />,
    title: 'Phone Number',
    lines: ['+8907 8765 0909', '+(987) 567 890 8'],
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-500 text-2xl" />,
    title: 'Office Location',
    lines: ['Bigenza yellow park, 12/a,', 'Newyork, USA'],
  },
];

const ContactDetails = () => {
  return (
    <section className="py-16 sm:py-24 bg-white font-sans">
      <div className="container mx-auto px-4">
        
        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 sm:mb-24">
          {contactInfoCards.map((card, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-lg border transition-shadow hover:shadow-xl">
              <div className="flex-shrink-0 mr-5">
                {card.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                <div className="mt-1 text-gray-600">
                  {card.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Map */}
          <div className="w-full h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
            {/* Using a static image of a map as in the design. You can replace the src with your own map image. */}
            <img 
              src="https://www.mapquestapi.com/staticmap/v5/map?key=YOUR_API_KEY¢er=40.7128,-74.0060&zoom=12&size=600,600&type=light"
              alt="Map of New York"
              className="w-full h-full object-cover filter grayscale"
              onError={(e) => { e.target.onerror = null; e.target.src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
            />
          </div>

          {/* Contact Form */}
          <div>
            <p className="font-semibold text-blue-600">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">We Are Here For You</h2>
            <form className="mt-8 space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Enter your name here..."
                  className="w-full bg-gray-100 p-4 pl-6 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email here..."
                  className="w-full bg-gray-100 p-4 pl-6 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <textarea 
                  placeholder="Enter your message here..."
                  rows="5"
                  className="w-full bg-gray-100 p-4 pl-6 pr-12 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <FaPencilAlt className="absolute right-4 top-5 text-gray-400" />
              </div>
              <button 
                type="submit" 
                className="w-full md:w-auto bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-3 px-10 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Submit Now
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactDetails;