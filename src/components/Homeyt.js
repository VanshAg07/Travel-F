import React, { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import Logo from '../img/Travello10logo.png';

const videoUrls = [
  'https://www.youtube.com/embed/92d-oIsNm-Q?controls=0&modestbranding=1&rel=0', // Video 1
  'https://www.youtube.com/embed/lh67NT0vfnQ?controls=0&modestbranding=1&rel=0', // Video 2
  'https://www.youtube.com/embed/744ptyIyNzI?controls=0&modestbranding=1&rel=0', // Video 3
];

const YoutubeComponent = () => {
  const [currentIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex flex-col mb-20 items-center justify-between h-[90vh] w-[100vw] mx-auto">
      {/* Heading - No extra space */}
      <div className="h-[5vh] w-[80vw] flex items-center justify-center">
        <h1 className="text-4xl font-bold">Visit Our Youtube Channel</h1>
      </div>

      {/* white bg div with black border, equal margin, rounded corners, and 2px border */}
      <div className="m-4 w-[80vw] h-[80vh] bg-white border-2 border-black rounded-lg relative">
        <div className="mb-4 h-[65vh] mt-4">
          <iframe
            className="w-[78vw] pl-5 h-full rounded-lg" // Added rounded-lg here for curved edges
            src={videoUrls[currentIndex]} // Use the current video URL
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Footer with Logo and Text - Match width of the video */}
        <div className="h-[7vh] mt-4 w-full flex items-center justify-center bg-white space-x-4 mb-0">
          <img src={Logo} alt="Travello10 Logo" className="h-14 w-14 rounded-full" />
          <p className="text-lg">
            Let's go to Do Dham Yatra with Travello10 | TravelloTen India Pvt. Ltd.
          </p>
        </div>
      </div>

      {/* Navigation Arrows with Icons */}
      <button
        onClick={prevVideo}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-md flex items-center sm:left-4 md:left-6 lg:left-8"
      >
        <FaChevronCircleLeft size={30} className="ml-16" /> {/* Left Icon */}
      </button>
      <button
        onClick={nextVideo}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-md flex items-center sm:right-4 md:right-6 lg:right-8"
      >
        <FaChevronCircleRight size={30} className="mr-16" /> {/* Right Icon */}
      </button>
    </div>
  );
};

export default YoutubeComponent;
