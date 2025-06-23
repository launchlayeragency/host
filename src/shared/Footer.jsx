import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaArrowUp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../assets/logo (1).png';
const Footer = () => {
    // Function to handle scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 mt-32 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Company Info */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1">
<img src={logo} alt="" />                    <p className="text-gray-400 leading-relaxed">
                        Gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-6">Company</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">About us</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Our Team</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Our Services</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Help</a></li>
                    </ul>
                </div>

                {/* Hosting Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-6">Hosting</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">VPN Hosting</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Reseller Hosting</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">SSD Hosting</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Dedicated Server</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-200">Web Hosting</a></li>
                    </ul>
                </div>

                {/* Subscribe Section */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-6">Subscribe</h3>
                    <div className="relative mb-4">
                        <input
                            type="email"
                            placeholder="Enter your mail..."
                            className="w-full py-3 pl-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-200">
                            <HiOutlineMail className="text-2xl" />
                        </button>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200 text-gray-400 hover:text-white">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200 text-gray-400 hover:text-white">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200 text-gray-400 hover:text-white">
                            <FaGooglePlusG />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200 text-gray-400 hover:text-white">
                            <FaPinterestP />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright and Designer */}
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <p>© Copyright 2019 Hostgem. All rights reserved.</p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
                aria-label="Scroll to top"
            >
                <FaArrowUp className="text-xl" />
            </button>
        </footer>
    );
};

export default Footer;