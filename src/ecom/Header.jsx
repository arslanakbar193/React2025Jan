import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
    const getNavLinkStyle = ({isActive}) => {
        return {
            color: isActive ? "maroon" : "black",
        }
    }
  return (
    <div>
      <header className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo (Left) */}
          <div className="text-2xl font-bold text-gray-800">ShopMate</div>

          {/* Menu Links (Right) */}
          <nav className="space-x-6 hidden md:flex">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
              >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition"
              style={({isActive}) => {
                return {
                    color: isActive ? "red" : "black",
                }
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className="text-gray-700 hover:text-blue-600 transition"
              style={getNavLinkStyle}
            >
             Products
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </NavLink>
            <NavLink
              to="/cart"
              className="text-gray-700 hover:text-blue-600 transition flex items-center"
            >
              <span><FaShoppingCart /></span><span className="pl-1">4</span>
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
