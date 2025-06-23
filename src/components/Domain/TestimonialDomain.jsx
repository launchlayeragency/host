import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialDomain = () => {

const testimonialsData = [
  {
    id: 1,
    name: "JONATHON DOE",
    position: "Director",
    company: "art media",
    content: "Hostent offers the best hosting and customer support I have ever seen in the world, I believe everyone with a website should use their services.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "MARK ANTHONY",
    position: "Director",
    company: "art media",
    content: "Hostent offers the best hosting and customer support I have ever seen in the world, I believe everyone with a website should use their services.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "LANKU JESIA",
    position: "Director",
    company: "art media",
    content: "Hostent offers the best hosting and customer support I have ever seen in the world, I believe everyone with a website should use their services.",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "SARAH WILSON",
    position: "CEO",
    company: "tech solutions",
    content: "Outstanding service quality and reliability. Their hosting platform has exceeded all our expectations and helped our business grow significantly.",
    avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 5,
    name: "DAVID CHEN",
    position: "CTO",
    company: "startup hub",
    content: "Incredible uptime and performance. We've been using Hostent for over two years and haven't experienced a single major outage.",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 6,
    name: "EMILY RODRIGUEZ",
    position: "Marketing Director",
    company: "creative agency",
    content: "The customer support team is absolutely phenomenal. They respond quickly and always provide helpful, detailed solutions.",
    avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 7,
    name: "MICHAEL BROWN",
    position: "Founder",
    company: "digital ventures",
    content: "Seamless migration process and excellent performance optimization. Our website speed improved dramatically after switching to Hostent.",
    avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 8,
    name: "JESSICA TAYLOR",
    position: "Product Manager",
    company: "innovation labs",
    content: "Professional service with attention to detail. The hosting infrastructure is robust and perfectly suits our enterprise needs.",
    avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 9,
    name: "ALEX THOMPSON",
    position: "Lead Developer",
    company: "web studio",
    content: "Excellent development tools and staging environments. The control panel is intuitive and makes managing multiple sites effortless.",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 10,
    name: "SOPHIA GARCIA",
    position: "Business Owner",
    company: "retail solutions",
    content: "Cost-effective hosting with premium features. The security measures and backup systems give us complete peace of mind.",
    avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 11,
    name: "RYAN MITCHELL",
    position: "Operations Manager",
    company: "logistics corp",
    content: "Reliable hosting partner that scales with our business. The server resources are perfectly optimized for our application requirements.",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 12,
    name: "NATALIE JONES",
    position: "Creative Director",
    company: "design collective",
    content: "Superior hosting experience with outstanding technical support. Their team goes above and beyond to ensure everything runs smoothly.",
    avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];
    return (
        <section className="py-20 ">
            <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        Users Review About Us
                    </h2>
                    <p className="text-base lg:text-lg text-gray-500 sm:w-[65%] xl:w-[50%]  mx-auto">
                        ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut
                        sed sittem do eiusmod.
                    </p>
                </div>

                {/* Testimonials Slider */}
                <div className="relative bg-gradient-to-b from-white via-gray-100 to-white py-12 px-4 md:px-8">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.testimonial-prev',
                            nextEl: '.testimonial-next',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className="testimonials-swiper"
                    >
                        {testimonialsData.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>

                                <div className="transition-all duration-300 hover:-translate-y-2 md:min-h-80 lg:min-h-96 xl:min-h-72 flex flex-col">
                                    {/* Review Text - White Background */}
                                    <div className="bg-white rounded-lg shadow-lg p-6 xl:p-8 flex-1 mb-4">
                                        <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
                                            "{testimonial.content}"
                                        </p>
                                    </div>

                                    {/* Author Info - Transparent Background */}
                                    <div className="flex items-center px-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-gray-800 font-semibold text-sm uppercase tracking-wide">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                {testimonial.position}, {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white hover:bg-teal-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg border group">
                        <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </button>
                    <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white hover:bg-teal-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg border group">
                        <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialDomain;