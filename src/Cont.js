import React from 'react';
import Nav from "./components/Nav.js";
import Dropnav from "./components/Dropnav.js";
import MainFooter from "./components/Footer/MainFooter.js";
import icon1 from "./img/con-bg.png";

const Forms = () => {
  return (
    <>
    <Nav />
    <Dropnav />
    <div className=' pt-[120px] pb-[50px]  bg-[#ffffe6]'>
      <h1 className="text-center text-2xl pt-4 sm:text-3xl lg:text-4xl font-bold mb-8">
      Get In Touch With Our Support Team
      </h1>
      <div className="flex items-center mb-10 justify-center px-4 h-[80%]">
        {/* Container for form and image with black shadow */}
        <div className="shadow-[0_10px_15px_rgba(0,0,0,0.5)] rounded-lg flex flex-col md:flex-row items-stretch justify-center w-[80vw] mt-4">
          {/* Left side image */}
          <div className="md:w-[40vw] flex-shrink-0 bg-white flex items-center justify-center rounded-lg hidden md:flex"> {/* Hide on mobile screens */}
            <img
              src={icon1}
              alt="Illustration"
              className="w-[90%] h-auto"
            />
          </div>

          {/* Right side form */}
          <div className="bg-[#e1feff] rounded-lg shadow-lg p-6 md:p-8 md:w-[40vw] flex-shrink-0">
            <h2 className="text-cyan-500 text-lg font-bold mb-1">
              Travello10 Calling?
            </h2>
            <h3 className="text-base font-semibold mb-6">
              Allow Us to Call You Back!
            </h3>
            <form>
              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="e.g. John Smith"
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your 10 digit number"
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email ID *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Any Message"
                  className="w-full border border-gray-300 p-2 rounded-md"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white font-bold py-2 rounded-md transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <MainFooter />
    </>
  );
};

export default Forms;
