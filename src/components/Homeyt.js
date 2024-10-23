import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"; // Importing icons
import "./Homeyt.css";
import Logo from "../img/Travello10logo.png";
const videos = [
  {
    id: "1",
    url: "https://www.youtube.com/embed/92d-oIsNm-Q?controls=0&modestbranding=1&rel=0",
    title: "Winter Spiti Valley | Capture a Trip",
  },
  {
    id: "2",
    url: "https://www.youtube.com/embed/lh67NT0vfnQ?controls=0&modestbranding=1&rel=0",
    title: "Summer Ladakh | Capture a Trip",
  },
  {
    id: "3",
    url: "https://www.youtube.com/embed/744ptyIyNzI?controls=0&modestbranding=1&rel=0",
    title: "Autumn Manali | Capture a Trip",
  },
];

const VideoSlider = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <div className="flex flex-col pb-14 items-center space-y-4">
      {/* Title */}
      <h2 className="text-xl md:text-3xl lg:text-4xl pt-7 font-bold text-center leading-tight sm:text-xl">Visit Our Youtube Channel</h2>

      {/* Container for Video and Buttons */}
      <div className="flex items-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-2 yt-left rounded-full z-10"
          style={{ zIndex: 10 }}
        >
          <FaChevronCircleLeft className=" yt-left text-2xl" />
        </button>

        {/* Video Display Wrapper */}
        <div className="relative w-[85vw] max-w-3xl mx-auto bg-white border-2 border-black p-4 rounded-lg overflow-hidden">
          {/* Video Display */}
          <div className="relative w-full">
            <iframe
              className="w-full h-64 sm:h-80 lg:h-[500px] rounded-md"
              src={videos[currentVideoIndex].url}
              title={videos[currentVideoIndex].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Title with Logo */}
          <div className="flex items-center justify-center mt-4 space-x-2">
            {/* Circular logo with responsive sizing */}
            <img
              src={Logo}
              alt="Logo"
              className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full"
            />

            {/* Text with responsive font size */}
            <p className="text-sm md:text-base lg:text-lg font-semibold text-center">
              {videos[currentVideoIndex].title}
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-2 rounded-full z-10"
          style={{ zIndex: 10 }}
        >
          <FaChevronCircleRight className=" yt-right text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default VideoSlider;
