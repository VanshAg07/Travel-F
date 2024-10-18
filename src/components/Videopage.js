import React from "react";
import video from "../img/bg-v.mp4";
import Mainreview from "./Mainreview";
import "../components/Videopage.css";
import Homecrd from "./Homecrd";

const Videopage = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="video-background absolute top-0 left-0 object-cover w-full h-full"
      ></video>

      {/* Text content */}
      <div className="z-100 text-white mb-20 md:mb-28 px-4 text-left">
        <h1
          className="absolute left-20 text-2xl top-40 sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[50px] font-bold"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            lineHeight: "1.2",
          }}
        >
          <span className="line1">
            <span className="text-[yellow]">EXPLORE</span> THE WORLD <br />
          </span>
          <span className="line2">
            WITH <span className="sp-1 text-[yellow]">TRAVELLO10</span>
          </span>
        </h1>
        <div className="h-10 w-full bg-white z-100"></div>
        <p
          className="videopg-p left-20 absolute uppercase top-80 text-xs sm:text-sm md:text-lg lg:text-xl tracking-wider"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
          Book trips and explore new <br /> destinations with ease <br /> from
          anywhere
        </p>
      </div>

      {/* Button for booking */}
      <div className="absolute left-20 top-[440px] z-50">
        {" "}
        {/* Adjust the positioning here */}
        <button className="bg-white text-black py-2 px-6 rounded-full text-sm font-bold sm:text-base">
          BOOK NOW
        </button>
      </div>

      {/* Mainreview component */}
      <div className="z-10 w-full absolute bottom-0">
        <Homecrd />
        <Mainreview />
      </div>
    </div>
  );
};

export default Videopage;
