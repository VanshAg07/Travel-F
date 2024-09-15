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
        <h3 className="text-cyan-500 font-bold text-xl mb-4">No Third Party Mess</h3>
        <p className="text-gray-600 mb-4">
          100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!
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
            Transparency & Security
          </h3>
          <p className="text-gray-600 mb-4">
            Real-time monitoring of all trips by ground team! All routes and
            weather conditions are accurately updated!
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
            Co-Travelers Filtering
          </h3>
          <p className="text-gray-600 mb-4">
            Multi-step filtering to bring only like-minded people together!
            That’s our key to have fuss-free trips!
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
            One Stop Hassle Free Experience
          </h3>
          <p className="text-gray-600 mb-4">
            Comfortable stays, trained drivers, hospitable staff, and friendly
            trip leaders put together that one memorable trip for you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyWanderOn;
