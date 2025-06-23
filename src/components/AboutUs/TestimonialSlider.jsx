import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    text: "Hostgem's services have transformed our online presence. Their hosting is lightning fast and their support team is available 24/7.",
    name: "Mark Anthony",
    designation: "Director, Art Media",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    text: "The migration to Hostgem was seamless. We've seen a 40% improvement in our website performance since switching.",
    name: "Sarah Johnson",
    designation: "CEO, Tech Solutions",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    text: "As a small business owner, I appreciate Hostgem's affordable plans with enterprise-level features. Their uptime is impeccable.",
    name: "David Wilson",
    designation: "Founder, Wilson Bakery",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    id: 4,
    text: "Their customer support is the best I've experienced in 15 years of running websites. Quick responses and actual solutions.",
    name: "Emily Chen",
    designation: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    id: 5,
    text: "Hostgem's security features give me peace of mind. Automatic backups and malware scanning have saved us multiple times.",
    name: "Robert Garcia",
    designation: "CTO, Startup Ventures",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 6,
    text: "The perfect balance of performance and price. We host all our client websites with Hostgem and they never disappoint.",
    name: "Lisa Wong",
    designation: "Web Developer",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
      <div className="w-[85%] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Users Say
          </h2>
          <p className="text-base lg:text-lg text-gray-500 sm:w-[65%]  mx-auto">
            ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut sed sittem do eiusmod.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative md:w-[70%] mx-auto">
          {/* Testimonial Content */}
          <div className=" p-8 sm:p-10  text-center">
            <div className="flex justify-center mb-6">
              <img 
                src={testimonials[current].avatar} 
                alt={testimonials[current].name}
                className="w-24 h-24 rounded-full object-cover border-4 border-cyan-100"
              />
            </div>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              "{testimonials[current].text}"
            </p>
            <div className="testi-avatar-info">
              <h5 className="text-base md:text-lg font-semibold text-gray-800">
                {testimonials[current].name}
              </h5>
              <span className="text-sm md:text-base text-gray-500">
                {testimonials[current].designation}
              </span>
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <div className="flex">
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-gray-700 text-xl" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-gray-700 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;