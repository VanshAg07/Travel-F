import React, { useState, useEffect } from "react";
import video from "../img/intern1.mp4";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const TravelPackageCard = ({ pkg }) => {
  const navigate = useNavigate();

  // Format the trip dates
  const formattedDates = pkg.tripDate.map((date) =>
    new Date(date).toLocaleDateString()
  );

  // Display first two dates and count the remaining dates
  const displayedDates =
    formattedDates.length > 2
      ? `${formattedDates.slice(0, 2).join(", ")} +${
          formattedDates.length - 2
        } more`
      : formattedDates.join(", ");

  // Function to handle navigation
  const handleNavigate = () => {
    navigate(`/trip/${pkg.tripName}/${pkg.stateName}`, {
      state: { stateName: pkg.stateName, tripName: pkg.tripName },
    });
  };
  return (
    <div
      onClick={handleNavigate}
      className="border w-80 mr-2 mb-2 ml-4 rounded-md shadow-lg shadow-black overflow-hidden cursor-pointer"
    >
      <img
        src={pkg.tripImages}
        alt={pkg.tripName}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{pkg.tripName}</h3>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-black text-xs">
            <FaCalendarAlt className="mr-1" />
            {displayedDates}
          </div>
          <div className="flex items-center text-black text-sm">
            <FaClock className="mr-1" />
            {pkg.tripDuration}
          </div>
        </div>
        <div className="flex items-center text-black text-sm mt-2">
          <FaMapMarkerAlt className="mr-1" />
          {pkg.tripLocation}
        </div>
      </div>
    </div>
  );
};

const TravelPackages = () => {
  const [packages, setPackages] = useState([]); // State to store fetched packages
  const [startIndex, setStartIndex] = useState(0);

  const fetchInternationalPackages = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/home/homepage-choosen-national-display"
      );
      setPackages(res.data.chosenPackages); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching international packages:", error);
    }
  };

  useEffect(() => {
    fetchInternationalPackages();
  }, []);

  const handleNext = () => {
    if (startIndex + visiblePackages < packages.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Determine how many packages to show based on screen width
  const visiblePackages =
    window.innerWidth >= 1280 ? 5 : window.innerWidth >= 1024 ? 4 : 3;

  return (
    <div className="h-screen pt-10 bg-white flex flex-col">
      {/* Video Section */}
      <div className="relative w-full h-[32%]">
        <video
          className="w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
        />
        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl uppercase font-bold">
            Explore <span className="text-yellow-400"> India</span>{" "}
          </h1>

          <h3 className="text-lg mt-2">
            A Vibrant<span className="text-yellow-400"> Tapestry </span> of
            Culture, <span className="text-yellow-400"> Heritage, </span> and
            Adventure <span className="text-yellow-400">Awaits!</span>
          </h3>
        </div>
      </div>

      {/* Packages Section */}
      <div className="w-[95vw] h-[80%] mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto">
        {/* Heading and "See All" */}
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl pl-10 font-semibold">Indian Packages</h2>
          <a href="#" className="text-red-500 mr-12 font-bold  text-sm">
            See All
          </a>
        </div>
        {/* Packages Navigation */}
        <div className="flex items-center mt-4 relative">
          <FaChevronCircleLeft
            size={30}
            className={`absolute -left-[5px] text-black cursor-pointer ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrev}
          />
          <div className="flex overflow-x-auto">
            {packages
              .slice(startIndex, startIndex + visiblePackages)
              .map((pkg, index) => (
                <TravelPackageCard key={index} pkg={pkg} />
              ))}
          </div>
          <FaChevronCircleRight
            size={30}
            className={`absolute -right-[10px] text-black cursor-pointer ${
              startIndex + visiblePackages >= packages.length ? "invisible" : ""
            }`}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default TravelPackages;
