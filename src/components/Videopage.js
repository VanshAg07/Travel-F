import React, { useEffect, useState } from "react";
import Mainreview from "./Mainreview";
import "../components/Videopage.css";
import Homecrd from "./Homecrd";
import axios from "axios";

const Videopage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/home/home-page-video"
      );
      setVideos(response.data.video); // Assuming response.data.video is an array of video URLs
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="w-full h-screen videopg-wrpper relative overflow-hidden">
      {/* Gradient overlay from black to transparent */}
      <div className="absolute top-0 left-0 w-[60vw] h-full z-10 gradient-bg"></div>

      {/* Video background */}
      {videos.length > 0 && (
        <video
          src={videos[0]} // Use the first video URL from the fetched videos
          autoPlay
          loop
          muted
          className="video-background absolute top-0 left-0 object-cover w-full h-full z-0"
        ></video>
      )}

      {/* Text content */}
      <div className="z-20 text-white mb-20 md:mb-28 px-4 text-left relative">
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
        <div className="h-10 w-full bg-white z-20"></div>
        <p
          className="videopg-p left-20 absolute uppercase top-80 text-xs sm:text-sm md:text-lg lg:text-xl tracking-wider"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
          Book trips and explore new <br /> destinations with ease <br /> from
          anywhere
        </p>
      </div>

      {/* Button for booking */}
      <div className="absolute videopg-btn left-20 top-[440px] z-50">
        <button className="bg-white text-black py-2 px-6 rounded-full text-sm font-bold sm:text-base">
          BOOK NOW
        </button>
      </div>

      {/* Mainreview component */}
      <div className="z-20 w-full absolute bottom-0">
        <Mainreview />
      </div>

      {/* Homecrd component */}
      <div>
        <Homecrd />
      </div>
    </div>
  );
};

export default Videopage;
