import React from 'react';

// An array to hold the FAQ data. This makes it easy to add or change questions later.
const faqData = [
  {
    question: 'Is hostnet reliable?',
    answer: 'When you need a kickstart in your business and you have no time for coding for your website, Hostnet will take that job for you and will build great Took website in minutes. sed do eiusmod tempor incididunt adipisci'
  },
  {
    question: 'Can i get discount?',
    answer: 'When you need a kickstart in your business and you have no time for coding for your website, Hostnet will take that job for you and will build great Took website in minutes. sed do eiusmod tempor incididunt adipisci'
  },
  {
    question: 'How to buy this?',
    answer: 'When you need a kickstart in your business and you have no time for coding for your website, Hostnet will take that job for you and will build great Took website in minutes. sed do eiusmod tempor incididunt adipisci'
  },
  {
    question: 'How to install files?',
    answer: 'When you need a kickstart in your business and you have no time for coding for your website, Hostnet will take that job for you and will build great Took website in minutes. sed do eiusmod tempor incididunt adipisci'
  },
];


const FAQ = () => {
  return (
    <div className="bg-white font-sans antialiased py-16 sm:py-24">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            ametamingcing elit, per sed do eiusmod teimpor sittem elit inuning ut sed sittem do eiusmod.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {faqData.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-gray-900">
                  {item.question}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQ;