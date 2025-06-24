import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FaGlobe, FaServer, FaFileAlt, FaAddressBook, FaUserFriends, FaUser, FaSearch, FaBars, FaChevronDown } from 'react-icons/fa';
import { IoMdHome } from "react-icons/io";
import logo from '../assets/logo (1).png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [openMobileDropdown, setOpenMobileDropdown] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileDropdown = (dropdownName) => {
    setOpenMobileDropdown(openMobileDropdown === dropdownName ? '' : dropdownName);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white">
      {/* Mobile Menu Button (Unchanged) */}
      <div className="container flex items-center justify-between px-4 py-4 md:hidden">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </NavLink>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu (Updated with dropdown logic) */}
      <div
        className={`fixed inset-0 bg-[#1e3c72] bg-opacity-95 z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 p-4">
          {/* Unchanged Links */}
          <NavLink to="/" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md w-full text-left transition-all ${ isActive ? 'bg-white text-blue-600' : 'hover:bg-blue-700 hover:bg-opacity-30' }`} onClick={toggleMenu} >
            <IoMdHome className="mr-2 text-lg" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md w-full text-left transition-all ${ isActive ? 'bg-white text-blue-600' : 'hover:bg-blue-700 hover:bg-opacity-30' }`} onClick={toggleMenu} >
            <FaUserFriends className="mr-2 text-lg" />
            <span>About Us</span>
          </NavLink>

          {/* Hosting Mobile Accordion */}
          <div className="w-full">
            <button onClick={() => handleMobileDropdown('hosting')} className="flex items-center justify-between px-3 py-2 rounded-md w-full text-left transition-all hover:bg-blue-700 hover:bg-opacity-30" >
              <span className="flex items-center">
                <FaServer className="mr-2 text-lg" />
                <span>Hosting</span>
              </span>
              <FaChevronDown className={`transition-transform duration-200 ${openMobileDropdown === 'hosting' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileDropdown === 'hosting' && (
              <div className="pl-10 pt-2 flex flex-col space-y-3">
                <NavLink to="/hosting/shared" onClick={toggleMenu} className="hover:text-blue-300">Shared Hosting</NavLink>
                <NavLink to="/hosting/reseller" onClick={toggleMenu} className="hover:text-blue-300">Reseller Hosting</NavLink>
                <NavLink to="/hosting/vps" onClick={toggleMenu} className="hover:text-blue-300">VPS Hosting</NavLink>
              </div>
            )}
          </div>
          
          <NavLink to="/domain" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md w-full text-left transition-all ${ isActive ? 'bg-white text-blue-600' : 'hover:bg-blue-700 hover:bg-opacity-30' }`} onClick={toggleMenu}>
            <FaGlobe className="mr-2 text-lg" />
            <span>Domain</span>
          </NavLink>

          {/* Pages Mobile Accordion */}
           <div className="w-full">
            <button onClick={() => handleMobileDropdown('pages')} className="flex items-center justify-between px-3 py-2 rounded-md w-full text-left transition-all hover:bg-blue-700 hover:bg-opacity-30" >
              <span className="flex items-center">
                <FaFileAlt className="mr-2 text-lg" />
                <span>Pages</span>
              </span>
              <FaChevronDown className={`transition-transform duration-200 ${openMobileDropdown === 'pages' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileDropdown === 'pages' && (
              <div className="pl-10 pt-2 flex flex-col space-y-3">
                <NavLink to="/pages/dedicated-server" onClick={toggleMenu} className="hover:text-blue-300">Dedicated Server</NavLink>
                <NavLink to="/pages/whmcs" onClick={toggleMenu} className="hover:text-blue-300">WHMCS Page</NavLink>
                <NavLink to="/pages/support" onClick={toggleMenu} className="hover:text-blue-300">Support Page</NavLink>
                <NavLink to="/pages/news" onClick={toggleMenu} className="hover:text-blue-300">News Page</NavLink>
                <NavLink to="/pages/news-details" onClick={toggleMenu} className="hover:text-blue-300">News Details</NavLink>
              </div>
            )}
          </div>
          
          {/* Unchanged Links */}
          <NavLink to="/contact" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md w-full text-left transition-all ${ isActive ? 'bg-white text-blue-600' : 'hover:bg-blue-700 hover:bg-opacity-30' }`} onClick={toggleMenu}>
            <FaAddressBook className="mr-2 text-lg" />
            <span>Contact</span>
          </NavLink>
          <NavLink to="/search" className="p-2 rounded-full w-full text-center transition-all hover:bg-blue-700 hover:bg-opacity-30" onClick={toggleMenu}>
            <FaSearch className="text-xl mx-auto" />
          </NavLink>
          <NavLink to="/account" className="p-2 rounded-full w-full text-center transition-all hover:bg-blue-700 hover:bg-opacity-30" onClick={toggleMenu}>
            <FaUser className="text-xl mx-auto" />
          </NavLink>
        </div>
      </div>

      {/* Desktop Navigation (Updated with dropdown logic) */}
      <div className="hidden md:flex md:items-center md:justify-between px-8 py-6">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </NavLink>
        <div className="flex gap-4">
          <NavLink to="/" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md transition-all ${ isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700 hover:bg-opacity-30' }`}>
            <IoMdHome className="mr-2 text-lg" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md transition-all ${ isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700 hover:bg-opacity-30' }`}>
            <FaUserFriends className="mr-2 text-lg" />
            <span>About Us</span>
          </NavLink>

          {/* Hosting Desktop Dropdown */}
          <div className="relative group">
            <button className="flex items-center px-3 py-2 rounded-md transition-all text-white hover:bg-blue-700 hover:bg-opacity-30">
              <FaServer className="mr-2 text-lg" />
              <span>Hosting</span>
              <FaChevronDown className="ml-1 text-xs" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-xl py-2 z-10 hidden group-hover:block">
              <NavLink to="/hosting/shared" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">Shared Hosting</NavLink>
              <NavLink to="/hosting/reseller" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">Reseller Hosting</NavLink>
              <NavLink to="/hosting/vps" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">VPS Hosting</NavLink>
            </div>
          </div>
          
          <NavLink to="/domain" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md transition-all ${ isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700 hover:bg-opacity-30' }`}>
            <FaGlobe className="mr-2 text-lg" />
            <span>Domain</span>
          </NavLink>

          {/* Pages Desktop Dropdown */}
          <div className="relative group">
            <button className="flex items-center px-3 py-2 rounded-md transition-all text-white hover:bg-blue-700 hover:bg-opacity-30">
              <FaFileAlt className="mr-2 text-lg" />
              <span>Pages</span>
              <FaChevronDown className="ml-1 text-xs" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-xl py-2 z-10 hidden group-hover:block">
              <NavLink to="/pages/dedicated-server" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">Dedicated Server</NavLink>
              <NavLink to="/pages/whmcs" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">WHMCS Page</NavLink>
              <NavLink to="/pages/support" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">Support Page</NavLink>
              <NavLink to="/pages/news" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">News Page</NavLink>
              <NavLink to="/pages/news-details" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">News Details</NavLink>
            </div>
          </div>

          <NavLink to="/contact" className={({ isActive }) => `flex items-center px-3 py-2 rounded-md transition-all ${ isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700 hover:bg-opacity-30' }`}>
            <FaAddressBook className="mr-2 text-lg" />
            <span>Contact</span>
          </NavLink>
        </div>
        <div className="flex gap-6">
          <NavLink to="/search" className="p-2 rounded-full transition-all text-white hover:bg-blue-700 hover:bg-opacity-30">
            <FaSearch className="text-xl" />
          </NavLink>
          <NavLink to="/account" className="p-2 rounded-full transition-all text-white hover:bg-blue-700 hover:bg-opacity-30">
            <FaUser className="text-xl" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;