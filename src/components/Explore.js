import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"; 
import video1 from "../img/india.mp4"; 
import video2 from "../img/india.mp4"; 
import video3 from "../img/india.mp4"; 
import video4 from "../img/india.mp4"; 
import video5 from "../img/india.mp4"; 
import video6 from "../img/india.mp4"; 

const videos = [
  { src: video1, text: "Romantic Escapes", link: "/Honeymoon" },
  { src: video2, text: "Corporate Trips", link: "/corporate" },
  { src: video3, text: "Experience India", link: "/National" },
  { src: video4, text: "International Trips", link: "/intern" },
  { src: video5, text: "Team Adventures", link: "/Grouptours" },
  { src: video6, text: "Weekend Trips", link: "/weekends" },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : videos.length - getNumberOfVideos()
    );
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex < videos.length - getNumberOfVideos() ? prevIndex + 1 : 0
    );
  };

  const getNumberOfVideos = () => {
    if (window.innerWidth <= 426) {
      return 3; // Adjust if necessary
    }
    return 4; // Display 4 videos
  };

  // Adjust the number of dots to be videos.length - 3
  const getNumberOfDots = () => {
    return videos.length - 3; // Dots equal to videos minus 3
  };

  // Handler for clicking a dot
  const goToSlide = (dotIndex) => {
    setIndex(dotIndex);
  };

  return (
    <div className="relative bg-[#FDFFE2] pt-10 pb-7 h-[120%] w-full">
      <div className="w-4/5 mx-auto">
        <h2 className="text-left text-2xl lg:text-3xl mb-5 text-gray-800 font-bold">
          Explore Your Adventure
        </h2>
        <div className="flex items-center justify-center relative py-5">
          <button 
            onClick={prevSlide} 
            className="bg-transparent border-none text-2xl cursor-pointer p-2 absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 text-gray-800 hover:text-black"
          >
            <FaChevronCircleLeft size={30} />
          </button>
          <div className="flex transition-transform duration-500 ease-in-out w-full">
            {videos.slice(index, index + getNumberOfVideos()).map((video, i) => (
              <div key={i} className="w-1/4 box-border p-2 relative">
                <a href={video.link}>
                  <video 
                    src={video.src} 
                    alt={`Slide ${i}`} 
                    className="w-full h-[480px] object-cover rounded-lg shadow-md transition-opacity duration-300" 
                    loop 
                    muted
                    style={{ opacity: 0.8 }} // Set initial opacity
                    onMouseEnter={(e) => {
                      e.target.play(); // Play video on hover
                      e.target.style.opacity = 1; // Set full opacity on hover
                    }} 
                    onMouseLeave={(e) => {
                      e.target.pause(); // Pause video when not hovered
                      e.target.style.opacity = 0.8; // Reduce opacity when not hovered
                    }} 
                  />
                  <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl shadow-lg text-center p-4 rounded bg-[#000000a1]">
                    {video.text}
                  </h1>
                </a>
              </div>
            ))}
          </div>
          <button 
            onClick={nextSlide} 
            className="bg-transparent border-none text-2xl cursor-pointer p-2 absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 text-gray-800 hover:text-black"
          >
            <FaChevronCircleRight size={30} />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-1">
          {Array.from({ length: getNumberOfDots() }).map((_, dotIndex) => (
            <span
              key={dotIndex}
              onClick={() => goToSlide(dotIndex)}
              className={`h-2 w-2 mx-2 cursor-pointer rounded-full ${
                index === dotIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
