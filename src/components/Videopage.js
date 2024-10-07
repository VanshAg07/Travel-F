import React from "react";
import video from "../img/bg-v.mp4";
import Mainreview from "./Mainreview";

const Videopage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen relative">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="video-video object-cover h-[80vh] w-full absolute"
      ></video>
      <div className="z-50 text-center text-white mb-28">
        <h1
          className="h-full text-5xl md:text-[68px]"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7" }}
        >
          <span className="line1">
            <span className="text-yellow-300">EXPLORE</span> THE WORLD <br />
          </span>
          <span className="line2">
            WITH <span className="sp-1 text-yellow-300 mt-5">TRAVELLO10</span>
          </span>
        </h1>
        <p
          className="videopg-p md:text-xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7" }}
        >
          Book trips and explore new destinations with ease from anywhere
        </p>
      </div>
      <div className="z-10 w-full absolute bottom-0">
        <Mainreview />
      </div>
    </div>
  );
};

export default Videopage;
