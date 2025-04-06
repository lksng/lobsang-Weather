// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 mb-10 h-16 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold"><img src="src/lkslogo2.jpg" className='w-12 h-12 object-contain justify-center ' alt="Logo"/>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-6 bg-gray-800 lg:bg-transparent absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto p-4 lg:p-0`}
        >
          <li>
            <Link
              to="/"
              className="block text-white hover:text-blue-400 transition duration-300 py-2 lg:py-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-white hover:text-blue-400 transition duration-300 py-2 lg:py-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block text-white hover:text-blue-400 transition duration-300 py-2 lg:py-0"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-white hover:text-blue-400 transition duration-300 py-2 lg:py-0"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;