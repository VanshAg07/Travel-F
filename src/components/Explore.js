import React, { useEffect, useRef, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import axios from "axios";
import "./Explore.css";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [adventures, setAdventures] = useState([]);
  const videoRefs = useRef([]);

  const fetchAdventures = async () => {
    try {
      const res = await axios.get(
        "https://api.travello10.com/api/home/explore-adventure"
      );
      setAdventures(res.data);
    } catch (error) {
      console.error("Error fetching adventures:", error);
    }
  };

  useEffect(() => {
    fetchAdventures();
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : adventures.length - getNumberOfVideos()
    );
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex < adventures.length - getNumberOfVideos() ? prevIndex + 1 : 0
    );
  };

  const getNumberOfVideos = () => {
    return window.innerWidth <= 426 ? 3 : 4;
  };

  const getNumberOfDots = () => {
    return Math.max(adventures.length - getNumberOfVideos() + 1, 0);
  };

  const goToSlide = (dotIndex) => {
    setIndex(dotIndex);
  };

  return (
    <div className="relative bg-[#FDFFE2] pb-96 h-[120%] w-full">
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
            {adventures.length > 0 &&
              adventures.slice(index, index + getNumberOfVideos()).map((adventure, i) => (
                <div
                  key={adventure._id}
                  onMouseEnter={() => {
                    const video = videoRefs.current[i];
                    if (video) {
                      video.play().catch((err) =>
                        console.error("Autoplay blocked:", err)
                      );
                      video.style.opacity = "1";
                    }
                  }}
                  onMouseLeave={() => {
                    const video = videoRefs.current[i];
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                      video.style.opacity = "0.8";
                    }
                  }}
                  className="w-1/4 p-2 relative"
                >
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={adventure.video[0]}
                    className="w-full h-[680px] object-cover shadow-lg shadow-black transition-opacity duration-300 cursor-pointer pointer-events-auto"
                    loop
                    muted
                    preload="auto"
                  />
                  <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl shadow-lg text-center p-4 w-32 h-32 rounded-full bg-[#00000082] flex items-center justify-center custom-dashed-border">
                    {adventure.title}
                  </h1>
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
