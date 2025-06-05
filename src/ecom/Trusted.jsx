import React from "react";
import { TbBrandSwift } from "react-icons/tb";
import { TbBrandSass } from "react-icons/tb";
import { TbBrandSnowflake } from "react-icons/tb";
import { TbBrandStackoverflow } from "react-icons/tb";
import { TbBrandSkype } from "react-icons/tb";

const Trusted = () => {
  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Trusted By Top Brands
          </h2>
          <div className="flex flex-wrap justify-center gap-30 items-center">
            <div>
              <TbBrandSwift size={48} color="#4a5565" className="cursor-pointer"/>
            </div>
            <div>
              <TbBrandSass  size={48} color="#4a5565" className="cursor-pointer"/>
            </div>
            <div>
              <TbBrandSnowflake  size={48} color="#4a5565" className="cursor-pointer"/>
            </div>
            <div>
              <TbBrandStackoverflow  size={48} color="#4a5565" className="cursor-pointer"/>
            </div>
            <div>
              <TbBrandSkype  size={48} color="#4a5565" className="cursor-pointer"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trusted;
