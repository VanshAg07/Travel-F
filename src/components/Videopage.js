import React from "react";
import video from "../img/bg-v.mp4";
import Mainreview from "./Mainreview";
import "../components/Videopage.css";  

const Videopage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen relative overflow-hidden">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="video-background absolute top-0 left-0 object-cover w-full"
      ></video>

      {/* Text content */}
      <div className="z-50 text-center text-white mb-20 md:mb-28 px-4">
        <h1
          className="h-full text-3xl sm:text-4xl md:text-[50px] lg:text-[68px] font-bold"
          style={{ 
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", 
            lineHeight: "1.2" // Add line height for spacing
          }}
        >
          <span className="line1">
            <span className="text-yellow-300">EXPLORE</span> THE WORLD <br />
          </span>
          <span className="line2">
            WITH <span className="sp-1 text-yellow-300">TRAVELLO10</span>
          </span>
        </h1>
        <p
          className="videopg-p text-sm sm:text-lg md:text-xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
          Book trips and explore new destinations with ease from anywhere
        </p>
      </div>

      {/* Mainreview component */}
      <div className="z-10 w-full absolute bottom-0">
        <Mainreview />
      </div>
    </div>
  );
};

export default Videopage;
