import React from "react";
import icon1 from "../img/sauceBg1.svg";
import icon2 from "../img/sauceBg2.svg";
import icon3 from "../img/sauceBg3.svg";
import icon4 from "../img/sauceBg4.svg";

const WhyWanderOn = () => {
  return (
    <div className="bg-white py-12 px-6">
    <h2 className="text-center font-bold text-3xl mb-12">Why Travello10?</h2>
    {/* Center the grid container with custom margin */}
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-6 "
      style={{ marginLeft: '90px', marginRight: '90px' }}
    >
      {/* Card 1 */}
      <div
        className="bg-white border rounded-lg p-6 shadow-md h-auto bg-cover bg-center"
        style={{
          backgroundImage: `url(${icon1})`,
        }}
      >
        <h3 className="text-cyan-500 font-bold text-xl mb-4">No Unnecessary Add-ons</h3>
        <p className="text-gray-600 mb-4">
        100% In-House Expertise on Every Adventure! No Outsiders, Just Quality!
        </p>
      </div>

        {/* Card 2 */}
        <div
          className="bg-white border rounded-lg p-6 shadow-md h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(${icon2})`,
          }}
        >
          <h3 className="text-cyan-500 font-bold text-xl mb-4">
          Clarity & Trust
                    </h3>
          <p className="text-gray-600 mb-4">
          Live Monitoring of All Trips—Stay Informed with Up-to-Date Routes and Weather Conditions!

          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white border rounded-lg p-6 shadow-md h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(${icon3})`,
          }}
        >
          <h3 className="text-cyan-500 font-bold text-xl mb-4">
          Custom Co-Travelers Selection
          </h3>
          <p className="text-gray-600 mb-4">
          Bringing the Right People Together with Precision Filtering—For the Perfect Trip!
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="bg-white border rounded-lg p-6 shadow-md h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(${icon4})`,
          }}
        >
          <h3 className="text-cyan-500 font-bold text-xl mb-4">
          Your Stress-Free Travel Solution
          </h3>
          <p className="text-gray-600 mb-4">
          Luxury Stays, Trained Drivers, Friendly Crew, and Experienced Trip Leaders—Crafting Unforgettable Memories!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyWanderOn;
