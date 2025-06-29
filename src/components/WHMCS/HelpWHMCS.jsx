
import { FaGlobe, FaServer, FaCreditCard, FaHeadset, FaMailBulk, FaFileDownload } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';

export default function HelpWHMCS() {
  const helpOptions = [
    { title: "Buy a Domain", icon: <FaGlobe className="w-12 h-12 md:w-16 md:h-16" /> },
    { title: "Order Hosting", icon: <FaDownload className="w-12 h-12 md:w-16 md:h-16" /> },
    { title: "Make a Payment", icon: <FaCreditCard className="w-12 h-12 md:w-16 md:h-16" /> },
    { title: "Get Support", icon: <FaMailBulk className="w-12 h-12 md:w-16 md:h-16" /> }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-[85%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16 text-center">
          How can we help you today?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {helpOptions.map((option, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 flex flex-col items-center text-center 
                         transition-transform duration-300 hover:-translate-y-2  shadow-gray-300 shadow-md hover:shadow-lg hover:shadow-gray-400"
            >
              <div className="text-blue-800 mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                {option.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


