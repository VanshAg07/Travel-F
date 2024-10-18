import React from "react";
import tripImage from "../img/cloud.jpg";

const TripCard = () => {
  return (
    <div className="flex space-x-8 ml-[650px] ">
      {/* First Card */}
      <div className="bg-white h-[300px] border-4 border-white rounded-lg shadow-xl shadow-black overflow-hidden w-56">
        <img
          src={tripImage}
          alt="Trip Destination"
          className="w-full h-32 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-red-600 font-bold text-lg mb-2">
            JIBHI TIRTHAN <br /> VALLEY
          </h2>
          <p className="text-gray-700 mb-4">RS: 7,499/- PP</p>
          <button className="bg-blue-900 text-white py-2 px-6 rounded-full">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Second Card */}
      <div className="bg-white border-4 -mt-10 border-white rounded-lg shadow-xl mb-6 shadow-black overflow-hidden w-64">
        <img
          src={tripImage}
          alt="Trip Destination"
          className="w-full h-52 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-red-600 font-bold text-lg mb-2">
            JIBHI TIRTHAN <br /> VALLEY
          </h2>
          <p className="text-gray-700 mb-4">RS: 7,499/- PP</p>
          <button className="bg-blue-900 text-white py-2 px-6 rounded-full">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Third Card */}
      <div className="bg-white h-[300px] border-4 border-white rounded-lg shadow-xl shadow-black overflow-hidden w-56">
        <img
          src={tripImage}
          alt="Trip Destination"
          className="w-full h-32 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-red-600 font-bold text-lg mb-2">
            JIBHI TIRTHAN <br /> VALLEY
          </h2>
          <p className="text-gray-700 mb-4">RS: 7,499/- PP</p>
          <button className="bg-blue-900 text-white py-2 px-6 rounded-full">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;

