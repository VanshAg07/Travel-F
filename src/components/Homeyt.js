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

      {/* Outer Container */}
      <div className="bg-white h-[75vh] border-2 border-black rounded-md p-4 w-full max-w-5xl relative">
        {/* YouTube Video Section */}
        <div className="mb-4">
          <iframe
            width="100%" // Make the iframe responsive
            height="500" // Increased height of the video
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
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-l-md flex items-center"
        >
          <FaChevronCircleLeft size={30} /> {/* Left Icon */}
        </button>
        <button
          onClick={nextVideo}
          className="absolute -ml-40 right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-r-md flex items-center"
        >
          <FaChevronCircleRight size={30} /> {/* Right Icon */}
        </button>
      </div>
    </div>
  );
}

export default App;