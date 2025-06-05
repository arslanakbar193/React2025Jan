import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white    mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between">
        {/* Site Name */}
        <div className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
          ShopMate
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <NavLink to="/" className="text-gray-600 hover:text-blue-600">Home</NavLink>
          <NavLink to="/about" className="text-gray-600 hover:text-blue-600">About</NavLink>
          <NavLink to="/products" className="text-gray-600 hover:text-blue-600">Products</NavLink>
          <NavLink to="/contact" className="text-gray-600 hover:text-blue-600">Contact</NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-600">
          <a href="#" className="hover:text-blue-600">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-blue-700">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} ShopMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
