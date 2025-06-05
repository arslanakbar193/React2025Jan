import React, { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? "maroon" : "black",
  });

  return (
    <div>
      <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">ShopMate</div>

          {/* Desktop Navigation */}
          <nav className="space-x-6 hidden md:flex">
            <NavLink to="/" className="text-gray-700 hover:text-blue-600 transition">Home</NavLink>
            <NavLink to="/about" className="text-gray-700 hover:text-blue-600 transition" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>About</NavLink>
            <NavLink to="/products" className="text-gray-700 hover:text-blue-600 transition" style={getNavLinkStyle}>Products</NavLink>
            <NavLink to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</NavLink>
            <NavLink to="/cart" className="text-gray-700 hover:text-blue-600 transition flex items-center">
              <FaShoppingCart />
              <span className="pl-1">4</span>
            </NavLink>
          </nav>

          {/* Toggle Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none z-50 relative">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-black/50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[40%] bg-white z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <nav className="mt-16 flex flex-col space-y-6 px-6 text-lg">
          <NavLink to="/" className="text-gray-700 hover:text-blue-600" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="text-gray-700 hover:text-blue-600" onClick={closeMenu}>About</NavLink>
          <NavLink to="/products" className="text-gray-700 hover:text-blue-600" onClick={closeMenu}>Products</NavLink>
          <NavLink to="/contact" className="text-gray-700 hover:text-blue-600" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/cart" className="text-gray-700 hover:text-blue-600 flex items-center" onClick={closeMenu}>
            <FaShoppingCart />
            <span className="pl-2">4</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
