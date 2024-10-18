import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"; // Importing the icons
import Logo from "../img/Travello10logo.png"; // Import your logo image here

const videoUrls = [
  "https://www.youtube.com/embed/lh67NT0vfnQ?controls=0&modestbranding=1&rel=0", // Video 1
  "https://www.youtube.com/embed/92d-oIsNm-Q?controls=0&modestbranding=1&rel=0", // Video 2
  "https://www.youtube.com/embed/744ptyIyNzI?controls=0&modestbranding=1&rel=0", // Video 3
  // Add more video URLs as needed
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
  };

  return (
    <div className="h-[90vh] flex flex-col pb-7 justify-center items-center bg-[#ffffe6]">
      {/* Heading Section outside of the inner container */}
      <div className="text-center mb-4">
        <h2 className="text-xl lg:text-4xl font-bold">Visit Our Youtube Channel</h2>
      </div>

      {/* Outer Container with responsive padding */}
      <div className="bg-white h-[75vh] border-2 border-black rounded-md p-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-5xl relative">
        {/* YouTube Video Section */}
        <div className="mb-4 h-full">
          <iframe
            className="w-full h-full" // Make the iframe responsive
            src={videoUrls[currentIndex]} // Use the current video URL
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Navigation Arrows with Icons */}
        <button
          onClick={prevVideo}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-md flex items-center sm:left-4 md:left-6 lg:left-8"
        >
          <FaChevronCircleLeft size={24} className="sm:size-30" /> {/* Left Icon */}
        </button>
        <button
          onClick={nextVideo}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-md flex items-center sm:right-4 md:right-6 lg:right-8"
        >
          <FaChevronCircleRight size={24} className="sm:size-30" /> {/* Right Icon */}
        </button>
      </div>
    </div>
  );
}

export default App;
