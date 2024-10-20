import React, { useState } from "react";
import { product_card_2 } from "./Product_data";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Bali from "../img/bali-mob.png";
import Thailand from "../img/thailand-mob.png";
import Maldives from "../img/Maldives-mob.png";
import Vietnam from "../img/vietnam-mob.png";
import Manali from "../img/manali-mob.png";
import Dubai from "../img/dubai-mob.png";
import "./Explore-mob.css";

const TravelOptions = () => {
  const options = [
    {
      name: "Maldives",
      imgSrc: Maldives,
      price: "Starting Price: ₹8,499",
      duration: "4D 3N",
      dates: "Oct 20, Oct 27, Nov 03",
      link: "/Grouptours",
    },
    {
      name: "Vietnam",
      imgSrc: Vietnam,
      price: "Starting Price: ₹10,999",
      duration: "5D 4N",
      dates: "Nov 15, Nov 22, Dec 01",
      link: "/intern",
    },
    {
      name: "Manali",
      imgSrc: Manali,
      price: "Starting Price: ₹9,499",
      duration: "6D 5N",
      dates: "Nov 10, Nov 17, Nov 24",
      link: "/Honeymoon",
    },
    {
      name: "Bali",
      imgSrc: Bali,
      price: "Starting Price: ₹7,999",
      duration: "3D 2N",
      dates: "Oct 24, Oct 31, Nov 07",
      link: "/national",
    },
    {
      name: "Dubai",
      imgSrc: Dubai,
      price: "Starting Price: ₹15,999",
      duration: "7D 6N",
      dates: "Dec 01, Dec 08, Dec 15",
      link: "/Corporate",
    },
    {
      name: "Thailand",
      imgSrc: Thailand,
      price: "Starting Price: ₹7,999",
      duration: "2D 1N",
      dates: "Nov 14, Nov 21, Nov 28",
      link: "/Weekends",
    },
  ];

  // State to track the current package
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to show the next package
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === options.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to show the previous package
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? options.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-[60vh] px-2 mb-12 relative">
      {/* Heading with custom underline */}
      <div className="flex justify-between items-center mb-4 h-[10vh]">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">International Packages</h1>
          <div className="w-32 border-b-4 border-blue-400 mt-1" />
        </div>
        <a
          href="/all-packages"
          className="text-red-500 text-sm"
        >
          See All
        </a>
      </div>

      {/* Slider */}
      <div className="relative h-[50vh] flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 text-xl"
        >
          <FaChevronCircleLeft />
        </button>

        {/* Single package display */}
        <div className="w-[250px] border-2 border-black rounded-lg shadow-md overflow-hidden">
          {/* Image */}
          <div className="h-[35vh]">
            <img
              src={options[currentIndex].imgSrc}
              alt={options[currentIndex].name}
              className="w-full h-full object-cover" // changed to object-contain
            />
          </div>

          {/* Content with rounded bottom */}
          <div className="h-[15vh] p-4 bg-white flex flex-col justify-between">
            <h2 className="font-bold text-lg mb-2">
              {options[currentIndex].name}
            </h2>
            <p className="text-base font-medium text-black">
              {options[currentIndex].price}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 text-xl"
        >
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
};

export default TravelOptions;
