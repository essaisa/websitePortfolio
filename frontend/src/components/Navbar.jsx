import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-white hover:text-gray-400 transition duration-300">EI</a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <motion.a
            href="#home"
            className="hover:text-gray-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#about"
            className="hover:text-gray-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
          <motion.a
            href="#projects"
            className="hover:text-gray-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="hover:text-gray-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <motion.div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white p-4 transition-all duration-300`}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
      >
        <motion.a
          href="#home"
          onClick={closeMobileMenu}
          className="block py-2 hover:bg-gray-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </motion.a>
        <motion.a
          href="#about"
          onClick={closeMobileMenu}
          className="block py-2 hover:bg-gray-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </motion.a>
        <motion.a
          href="#projects"
          onClick={closeMobileMenu}
          className="block py-2 hover:bg-gray-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
        </motion.a>
        <motion.a
          href="#contact"
          onClick={closeMobileMenu}
          className="block py-2 hover:bg-gray-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>
      </motion.div>
    </nav>
  );
};

export default Navbar;

