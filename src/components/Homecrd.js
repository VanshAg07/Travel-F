import React from "react";
import tripImage from "../img/cloud.jpg";
import "./Homecrd.css";

const TripCard = () => {
  return (
    <div className="hidden md:block"> {/* Hidden on small screens, visible on medium screens and larger */}
      <div className="flex homecrd-wrpper space-x-2 ml-[750px] ">
        {/* First Card */}
        <div className="bg-white h-[380px] border-4 border-white mt-10 rounded-3xl shadow-lg shadow-black overflow-hidden w-52 relative">
          <img
            src={tripImage}
            alt="Trip Destination"
            className="w-full h-52 object-cover rounded-2xl"
          />
          <div className="p-4 text-center">
            <h2 className="text-red-600 font-bold text-lg mb-2">
              MANALI KASOL <br /> KHEERGANGA TRIP
            </h2>
            <p className="text-gray-700 mb-4">Rs: 7,499/- PP</p>
            <button className="bg-[#03346e] text-white py-2 rounded-full w-full font-bold">
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white border-4 border-white mt-5 rounded-3xl shadow-lg mb-6 shadow-black overflow-hidden w-60 relative">
          <img
            src={tripImage}
            alt="Trip Destination"
            className="w-full h-64 object-cover rounded-2xl"
          />
          <div className="p-4 text-center">
            <h2 className="text-red-600 font-bold text-lg mb-2">
              JIBHI TIRTHAN <br /> VALLEY
            </h2>
            <p className="text-gray-700 mb-10 ">Rs: 7,499/- PP</p>
            <div className="absolute bottom-1 w-[215px]">
              <button className="bg-[#03346e] text-white py-2 w-full rounded-full font-bold ">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-white h-[380px] border-4 border-white mt-10 rounded-3xl shadow-lg shadow-black overflow-hidden w-52 relative">
          <img
            src={tripImage}
            alt="Trip Destination"
            className="w-full h-52 object-cover rounded-2xl"
          />
          <div className="p-4 text-center">
            <h2 className="text-red-600 font-bold text-lg mb-2">
              MUSSORRIE IN <br /> UTTRAKHAND
            </h2>
            <p className="text-gray-700 mb-4">Rs: 7,499/- PP</p>
            <button className="bg-[#03346e] text-white py-2 w-full rounded-full font-bold">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;