import React from 'react';
import { FaSearch, FaCheckCircle } from 'react-icons/fa';
import { 
  SiVisa, 
  SiDiscover, 
  SiPaypal, 
  SiAmericanexpress 
} from 'react-icons/si';
import { FaCcMastercard } from 'react-icons/fa';

const tlds = [
  { name: '.com', price: '$1.99' },
  { name: '.net', price: '$1.50' },
  { name: '.org', price: '$5.50' },
  { name: '.biz', price: '$1.50' },
];

const paymentIcons = [
  { icon: <SiVisa className="h-6 w-6" />, name: 'Visa' },
  { icon: <SiDiscover className="h-6 w-6" />, name: 'Discover' },
  { icon: <SiPaypal className="h-6 w-6" />, name: 'PayPal' },
  { icon: <FaCcMastercard className="h-6 w-6" />, name: 'Mastercard' },
  { icon: <SiAmericanexpress className="h-6 w-6" />, name: 'American Express' },
  { icon: <FaCcMastercard className="h-6 w-6" />, name: 'Mastercard 2' },
];

const SearchDomain = () => {
  return (
    <div className="bg-sky-50 font-sans w-full">
     

      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center">
          
          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-3">
            Search Domain
          </h1>
          <p className="text-lg text-slate-500 mb-10">
            The optimal solution for fast reliable websites
          </p>

          {/* Search Form */}
          <form className="w-full max-w-2xl mx-auto mb-6">
            <div className="flex items-center bg-white rounded-xl shadow-lg p-2">
              <input
                type="text"
                placeholder="Enter your domain name here"
                className="w-full text-lg px-4 py-3 text-gray-700 placeholder-gray-400 bg-transparent border-none focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-teal-400 text-white font-bold rounded-lg px-6 py-3 transition-colors duration-300 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
              >
                <span className="hidden sm:inline">Search</span>
                <FaSearch className="h-5 w-5 sm:ml-2" />
              </button>
            </div>
          </form>

          {/* TLD Pricing */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 gap-y-3 mb-12 text-slate-700 font-medium">
            {tlds.map((tld) => (
              <div key={tld.name} className="flex items-center">
                <FaCheckCircle className="h-5 w-5 text-blue-600" />
                <span className="ml-1.5">{tld.name}</span>
                <span className="ml-1 text-slate-500">{tld.price}</span>
              </div>
            ))}
          </div>

          {/* Payment Method Icons */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {paymentIcons.map((payment, index) => (
              <div 
                key={index} 
                className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center"
                title={payment.name}
              >
                {payment.icon}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchDomain;