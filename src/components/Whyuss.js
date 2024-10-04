import React from "react";
import icon1 from "../img/1why.png";
import icon2 from "../img/2why.png";
import icon3 from "../img/3why.png";
import icon4 from "../img/4why.png";

const WhyWanderOn = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12">
        Why Travello10?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div
          className="bg-white border rounded-lg p-4 sm:p-6 shadow-md flex flex-col justify-between h-80 sm:h-[450px] lg:h-[500px]" // Adjust heights for different screens
        >
          <div>
            <h3 className="text-[#03346E] font-bold text-lg sm:text-xl lg:text-2xl">
              No Unnecessary Add-ons
            </h3>
            <p className="text-[#021526] text-sm sm:text-base lg:text-lg">
              100% In-House Expertise on Every Adventure! No Outsiders, Just Quality!
            </p>
          </div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url(${icon1})`,
              height: '50%', // Manually control image height
            }}
          ></div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white border rounded-lg p-4 sm:p-6 shadow-md flex flex-col justify-between h-80 sm:h-[450px] lg:h-[500px]"
        >
          <div>
            <h3 className="text-[#03346E] font-bold text-lg sm:text-xl lg:text-2xl">
              Clarity & Trust
            </h3>
            <p className="text-[#021526] text-sm sm:text-base lg:text-lg">
              Live Monitoring of All Trips—Stay Informed with Up-to-Date Routes and Weather Conditions!
            </p>
          </div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url(${icon2})`,
              height: '50%', // Manually control image height
            }}
          ></div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white border rounded-lg p-4 sm:p-6 shadow-md flex flex-col justify-between h-80 sm:h-[450px] lg:h-[500px]"
        >
          <div>
            <h3 className="text-[#03346E] font-bold text-lg sm:text-xl lg:text-2xl">
              Custom Co-Travelers Selection
            </h3>
            <p className="text-[#021526] text-sm sm:text-base lg:text-lg">
              Bringing the Right People Together with Precision Filtering—For the Perfect Trip!
            </p>
          </div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url(${icon3})`,
              height: '50%', // Manually control image height
            }}
          ></div>
        </div>

        {/* Card 4 */}
        <div
          className="bg-white border rounded-lg p-4 sm:p-6 shadow-md flex flex-col justify-between h-80 sm:h-[450px] lg:h-[500px]"
        >
          <div>
            <h3 className="text-[#03346E] font-bold text-lg sm:text-xl lg:text-2xl">
              Your Stress-Free Travel Solution
            </h3>
            <p className="text-[#021526] text-sm sm:text-base lg:text-lg">
              Luxury Stays, Trained Drivers, Friendly Crew, and Experienced Trip Leaders—Crafting Unforgettable Memories!
            </p>
          </div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url(${icon4})`,
              height: '50%', // Manually control image height
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WhyWanderOn;
