import React, { useState } from "react";
import img1 from "../img/HimachalPradesh.png";
import img2 from "../img/Uttarakhand.png";
import img3 from "../img/Kashmir.png";
import img4 from "../img/kerala.png";
import img5 from "../img/ladakh.png";
import img6 from "../img/kedarnath.png";
import img7 from "../img/badrinath.png";
import img8 from "../img/sikkim.jpg";
import video from "../img/intern1.mp4";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";

const packages = [
  {
    destination: "Maldives",
    image: img1,
    duration: "7N/8D",
    dates: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    location: "Delhi to Delhi",
  },
  {
    destination: "Bali",
    image: img2,
    duration: "4N/5D",
    dates: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    location: "Delhi to Delhi",
  },
  {
    destination: "Singapore",
    image: img3,
    duration: "5N/6D",
    dates: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    location: "Delhi to Delhi",
  },
  {
    destination: "Dubai",
    image: img4,
    duration: "10N/11D",
    dates: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    location: "Delhi to Delhi",
  },
  {
    destination: "Kedarnath",
    image: img5,
    duration: "7N/8D",
    dates: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    location: "Delhi to Delhi",
  },
  {
    destination: "Ladakh",
    image: img6,
    duration: "4N/5D",
    dates: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    location: "Delhi to Delhi",
  },
  {
    destination: "Kerala",
    image: img7,
    duration: "5N/6D",
    dates: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    location: "Delhi to Delhi",
  },
  {
    destination: "Kashmir",
    image: img8,
    duration: "10N/11D",
    dates: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    location: "Delhi to Delhi",
  },
];

const TravelPackageCard = ({ pkg }) => (
  <div className="border w-80 mr-2 mb-2 ml-4 rounded-md shadow-lg shadow-black overflow-hidden">
    <img
      src={pkg.image}
      alt={pkg.destination}
      className="w-full h-[200px] object-cover"
    />
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{pkg.destination}</h3>
        <div className="flex items-center text-black text-sm">
          <FaClock className="mr-1" />
          {pkg.duration}
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center text-black text-xs">
          <FaCalendarAlt className="mr-1" />
          {pkg.dates}
          <span className="ml-1 text-red-600">{pkg.batches}</span>{" "}
        </div>
      </div>
      <div className="flex items-center text-black text-sm mt-2">
        <FaMapMarkerAlt className="mr-1" />
        {pkg.location}
      </div>
    </div>
  </div>
);

const TravelPackages = () => {
  const [startIndex, setStartIndex] = useState(0);

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
  const visiblePackages = window.innerWidth >= 1280 ? 5 : window.innerWidth >= 1024 ? 4 : 3;

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
            Explore <span className="text-yellow-400"> Honeymoon places</span>{" "}
          </h1>

          <h3 className="text-lg mt-2">
          Discover the<span className="text-yellow-400"> Perfect Destination </span>{" "}
          for Your {" "}
            <span className="text-yellow-400"> Honeymoon: </span> A Romantic Journey to{" "}
            <span className="text-yellow-400">Cherish Forever!</span>
          </h3>
        </div>
      </div>

      {/* Packages Section */}
      <div className="w-[95vw] h-[80%] mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto">
        {/* Heading and "See All" */}
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl pl-10 font-semibold">Honeymoon Packages</h2>
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
            {packages.slice(startIndex, startIndex + visiblePackages).map((pkg, index) => (
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
