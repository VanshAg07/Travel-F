import React from 'react';
import icon1 from "../img/con-bg.png";

const Forms = () => {
  return (
    <>
      <div className='bg-[#ffffe6]'>
        <h1 className="pt-7 pb-1 text-2xl md:text-4xl font-bold text-center text-gray-800">
          Need Assistance
        </h1>
        <div className="h-[80%] flex items-center mb-10 justify-center px-4">
          {/* Container for form and image with shadow on all sides */}
          <div className="shadow-lg rounded-lg flex flex-col md:flex-row items-stretch justify-center space-y-8 md:space-y-0 mt-4">
            {/* Left side image */}
            <div className="flex-1">
              <img
                src={icon1}
                alt="Illustration"
                className="w-[300px] h-[400px] md:w-[500px] md:h-[600px] lg:w-[800px] lg:h-[550px] rounded-lg"
              />
            </div>

            {/* Right side form */}
            <div className="bg-[#e1feff] rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md md:max-w-lg">
              <h2 className="text-cyan-500 text-lg font-semibold mb-1">
                Travello10 Calling?
              </h2>
              <h3 className="text-lg font-semibold mb-6">
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
    </>
  );
};

export default Forms;
