import React from "react";
import { SiSpaceship } from "react-icons/si";
import { MdContactSupport } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Service Item */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <div className="flex items-center justify-center pb-2"><SiSpaceship size={32} /></div>
              <h3 className="text-xl font-semibold text-gray-700">
                Fast Shipping
              </h3>
              <p className="text-gray-500 mt-2">
                Get your products delivered quickly and safely.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <div className="flex items-center justify-center pb-2">
              <MdContactSupport  size={32}/>
              </div>
              <h3 className="text-xl font-semibold text-gray-700">
                24/7 Support
              </h3>
              <p className="text-gray-500 mt-2">
                We're here to help at any time, day or night.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <div className="flex items-center justify-center pb-2"><RiSecurePaymentLine size={32} /></div>
              <h3 className="text-xl font-semibold text-gray-700">
                Secure Payment
              </h3>
              <p className="text-gray-500 mt-2">
                Your transactions are protected and encrypted.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
