import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaQuestionCircle, FaGlobe, FaServer, FaFileAlt, FaAddressBook, FaHome, FaUserFriends, FaQq, FaUser, FaSearch, FaBars } from 'react-icons/fa';
import { IoMdHome } from "react-icons/io";
import logo from '../assets/logo (1).png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white">
      {/* Mobile Menu Button */}
      <div className="container flex items-center justify-between px-4 py-4 md:hidden">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </NavLink>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#1e3c72] bg-opacity-95 z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md w-full text-center transition-all ${
                isActive ? 'bg-white text-blue-600' : 'hover:bg-blue-700 hover:bg-opacity-30'
              }`
            }
            onClick={toggleMenu}
          >
            <IoMdHome className="mr-2 text-lg" />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md w-full text-center transition-all ${
                isActive ? 'bg-white text-blue-600' : 'hover:bg-blue-700 hover:bg-opacity-30'
              }`
            }
            onClick={toggleMenu}
          >
            <FaUserFriends className="mr-2 text-lg" />
            <span>Aboutus</span>
          </NavLink>
          <NavLink
            to="/hosting"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md w-full text-center transition-all ${
                isActive ? 'bg-white text-blue-600' : 'hover:bg-blue-700 hover:bg-opacity-30'
              }`
            }
            onClick={toggleMenu}
          >
            <FaServer className="mr-2 text-lg" />
            <span>Hostingy</span>
          </NavLink>
          <NavLink
            to="/domain"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md w-full text-center transition-all ${
                isActive ? 'bg-white text-blue-600' : 'hover:bg-blue-700 hover:bg-opacity-30'
              }`
            }
            onClick={toggleMenu}
          >
            <FaGlobe className="mr-2 text-lg" />
            <span>Domain</span>
          </NavLink>
          <NavLink
            to="/pages"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md w-full text-center transition-all ${
                isActive ? 'bg-white text-blue-600' : 'hover:bg-blue-700 hover:bg-opacity-30'
              }`
            }
            onClick={toggleMenu}
          >
            <FaFileAlt className="mr-2 text-lg" />
            <span>Pagesy</span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md w-full text-center transition-all ${
                isActive ? 'bg-white text-blue-600' : 'hover:bg-blue-700 hover:bg-opacity-30'
              }`
            }
            onClick={toggleMenu}
          >
            <FaAddressBook className="mr-2 text-lg" />
            <span>Contact</span>
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `p-2 rounded-full w-full text-center transition-all ${
                isActive ? 'bg-white text-blue-600' : 'hover:bg-blue-700 hover:bg-opacity-30'
              }`
            }
            onClick={toggleMenu}
          >
            <FaSearch className="text-xl mx-auto" />
          </NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              `p-2 rounded-full w-full text-center transition-all ${
                isActive ? 'bg-white text-blue-600' : 'hover:bg-blue-700 hover:bg-opacity-30'
              }`
            }
            onClick={toggleMenu}
          >
            <FaUser className="text-xl mx-auto" />
          </NavLink>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:items-center md:justify-between px-8 py-6">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </NavLink>
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md transition-all ${
                isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
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
                isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
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
                isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
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
                isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
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
                isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
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
                isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
              }`
            }
          >
            <FaAddressBook className="mr-2 text-lg" />
            <span>Contact</span>
          </NavLink>
        </div>
        <div className="flex gap-6">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `p-2 rounded-full transition-all ${
                isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
              }`
            }
          >
            <FaSearch className="text-xl" />
          </NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              `p-2 rounded-full transition-all ${
                isActive ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-700 hover:bg-opacity-30'
              }`
            }
          >
            <FaUser className="text-xl" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;