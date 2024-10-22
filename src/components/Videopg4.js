import React, { useState, useEffect } from "react";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TravelPackageCard = ({ pkg }) => {
  const navigate = useNavigate();

  const formattedDates = pkg.tripDate
    ? pkg.tripDate.map((date) => new Date(date).toLocaleDateString())
    : [];

  const displayedDates =
    formattedDates.length > 2
      ? `${formattedDates.slice(0, 2).join(", ")} +${
          formattedDates.length - 2
        } more`
      : formattedDates.join(", ");

  const handleNavigate = () => {
    navigate(`/honeymoon/${pkg.tripName}/${pkg.stateName}`, {
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
  const [packages, setPackages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visiblePackages, setVisiblePackages] = useState(3);
  const [videoSrc, setVideoSrc] = useState("");

  const fetchVideoPages = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/home/video-page"
      );
      const internationalVideo = response.data.find(
        (video) => video.type === "Honeymoon"
      );
      if (internationalVideo) {
        setVideoSrc(internationalVideo.backgroundVideo); // Set video source
      } else {
        console.error("No video found");
      }
    } catch (error) {
      console.error("Error fetching video pages:", error);
    }
  };

  const fetchInternationalPackages = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/home/homepage-choosen-honeymoon-display"
      );
      setPackages(res.data.chosenPackages);
    } catch (error) {
      console.error("Error fetching international packages:", error);
    }
  };

  useEffect(() => {
    fetchInternationalPackages();
    fetchVideoPages();

    const updateVisiblePackages = () => {
      if (window.innerWidth >= 1280) {
        setVisiblePackages(5);
      } else if (window.innerWidth >= 1024) {
        setVisiblePackages(4);
      } else {
        setVisiblePackages(3);
      }
    };

    updateVisiblePackages();
    window.addEventListener("resize", updateVisiblePackages);

    return () => {
      window.removeEventListener("resize", updateVisiblePackages);
    };
  }, []);

  const handleNext = () => {
    if (startIndex + visiblePackages < packages.length) {
      setStartIndex((prevIndex) =>
        Math.min(prevIndex + 1, packages.length - visiblePackages)
      );
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <div className="h-screen pt-10 bg-white flex flex-col">
      {/* Video Section */}
      <div className="relative w-full h-[32%]">
        {videoSrc ? (
          <video
            className="w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            onError={() => console.error("Error loading video")}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-600">Video not available</span>
          </div>
        )}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl uppercase font-bold">
            Explore <span className="text-yellow-400"> Honeymoon places</span>{" "}
          </h1>
          <h3 className="text-lg mt-2">
            Discover the
            <span className="text-yellow-400"> Perfect Destination </span> for
            Your <span className="text-yellow-400"> Honeymoon: </span> A
            Romantic Journey to{" "}
            <span className="text-yellow-400">Cherish Forever!</span>
          </h3>
        </div>
      </div>

      {/* Packages Section */}
      <div className="w-[95vw] h-[80%] mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl pl-10 font-semibold">Honeymoon Packages</h2>
          <a href="/honeymoon" className="text-red-500 mr-12 font-bold text-sm">
            See All
          </a>
        </div>
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
              .map((pkg) => (
                <TravelPackageCard key={pkg.tripName} pkg={pkg} />
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
