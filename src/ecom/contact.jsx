import React from "react";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 bg-white py-28 px-4 sm:px-6 lg:px-8 mt-10">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <form className="space-y-4" method="POST" action="https://formspree.io/f/mblyldzl">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
              name="username"
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
              name="email"
                type="email"
                placeholder="Your Email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Message</label>
              <textarea
              name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Google Map */}
        <div className="w-full h-80 md:h-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1428288477055!2d-122.41941548467928!3d37.774929279759455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c731bdb2f%3A0xd58d1b2a6eaa4b87!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1682735000000!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-md"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
