import React from 'react';
import icon1 from "./img/illust.png";
import Nav from './components/Nav';
import FooterSection from './components/Footersection';
import Footer from './Footer';

const Forms = () => {
  return (
    <>
    <Nav/>
    <h1 className=" pt-32 text-4xl font-bold text-center text-gray-800">
  Get In Touch With Our Support Team
</h1>
    <div className="min-h-screen  flex items-center justify-center ">
      {/* Container for form and image */}
      <div className="flex flex-row items-center justify-center space-x-8">
        {/* Left side image */}
        <div className="flex-1 p-8">
          <img
            src={icon1}
            alt="Illustration"
            className="w-[500px] h-[500px] rounded-lg"
          />
        </div>

        {/* Right side form */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-[500px]">
          <h2 className="text-cyan-500 text-lg font-semibold mb-1">
            Travello10 Calling?
          </h2>
          <h3 className="text-lg font-semibold mb-6">Allow Us to Call You Back!</h3>

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
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 rounded-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <FooterSection/>
    <Footer/>
    </>
  );
  
};

export default Forms;

