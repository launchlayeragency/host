import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaQuestionCircle, FaGlobe, FaServer, FaFileAlt, FaAddressBook, FaHome, FaUserFriends, FaQq, FaUser, FaSearch } from 'react-icons/fa';
import { IoMdHome } from "react-icons/io";
import logo from '../assets/logo (1).png';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-gradient-to-br from-[#1e3c72] to-[#2a5298]">
      {/* Brand/Logo */}
      <NavLink
        to="/"
        className="flex items-center"
        end
      >
        <img src={logo} alt="Logo" className="h-10" />
      </NavLink>

      {/* Navigation Items */}
      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) => 
            `flex items-center px-3 py-2 rounded-md transition-all ${
              isActive 
                ? 'bg-white text-blue-600' 
                : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
            }`
          }
        >
          <IoMdHome className="mr-2 text-lg" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => 
            `flex items-center px-3 py-2 rounded-md transition-all ${
              isActive 
                ? 'bg-white text-blue-600' 
                : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
            }`
          }
        >
          <FaUserFriends className="mr-2 text-lg" />
          <span>Aboutus</span>
        </NavLink>
        <NavLink
          to="/hosting"
          className={({ isActive }) => 
            `flex items-center px-3 py-2 rounded-md transition-all ${
              isActive 
                ? 'bg-white text-blue-600' 
                : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
            }`
          }
        >
          <FaServer className="mr-2 text-lg" />
          <span>Hostingy</span>
        </NavLink>
        <NavLink
          to="/domain"
          className={({ isActive }) => 
            `flex items-center px-3 py-2 rounded-md transition-all ${
              isActive 
                ? 'bg-white text-blue-600' 
                : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
            }`
          }
        >
          <FaGlobe className="mr-2 text-lg" />
          <span>Domain</span>
        </NavLink>
        <NavLink
          to="/pages"
          className={({ isActive }) => 
            `flex items-center px-3 py-2 rounded-md transition-all ${
              isActive 
                ? 'bg-white text-blue-600' 
                : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
            }`
          }
        >
          <FaFileAlt className="mr-2 text-lg" />
          <span>Pagesy</span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => 
            `flex items-center px-3 py-2 rounded-md transition-all ${
              isActive 
                ? 'bg-white text-blue-600' 
                : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
            }`
          }
        >
          <FaAddressBook className="mr-2 text-lg" />
          <span>Contact</span>
        </NavLink>
      </div>

      {/* Right Side Icons */}
      <div className="flex gap-6">
        <NavLink
          to="/search"
          className={({ isActive }) => 
            `p-2 rounded-full transition-all ${
              isActive 
                ? 'bg-white text-blue-600' 
                : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
            }`
          }
        >
          <FaSearch className="text-xl" />
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) => 
            `p-2 rounded-full transition-all ${
              isActive 
                ? 'bg-white text-blue-600' 
                : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
            }`
          }
        >
          <FaUser className="text-xl" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;