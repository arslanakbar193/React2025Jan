import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = ({mydata}) => {
    const {name} = mydata
  return (
    <>
      <div className="max-w-7xl mx-auto hero-section flex flex-col md:flex-row items-center justify-between px-4 lg:px-8 py-28 bg-gray-50">
        {/* Left Side */}
        <div className="left-side md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="text-1xl  text-gray-800">Welcome To</h3>
          <h1 className="text-5xl font-bold text-blue-600">{name}</h1>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 cursor-pointer">
           <NavLink to="/products">Shop Now</NavLink> 
          </button>
        </div>

        {/* Right Side */}
        <div className="right-side md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/undraw_stepping-up.svg"
            alt="Stepping Up"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
