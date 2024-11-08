import React, { useEffect, useState } from "react";
import Mainreview from "./Mainreview";
import "../components/Videopage.css";
import Homecrd from "./Homecrd";
import axios from "axios";
import QuotePopup from "../QuotePopup";
import Socialmedia from "../components/Socialmedia.js";

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
  const [isQuotePopupVisible, setQuotePopupVisible] = useState(false);

  const handleGetQuotesClick = () => {
    setQuotePopupVisible(true); // Show the popup
  };

  const closeQuotePopup = () => {
    setQuotePopupVisible(false); // Hide the popup
  };

  return (
    <div className="w-full h-screen videopg-wrpper relative overflow-hidden">
      {/* Gradient overlay from black to transparent */}

      <div className="absolute top-0 left-0 w-[50vw] h-full z-10 gradient-bg"></div>

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
      <div className="z-20 video-text text-white mb-20 md:mb-28 px-4 text-left relative">
        <h1
          className="absolute video-hed left-20 text-2xl md:top-[200px] top-[180px] sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[50px] font-bold"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            lineHeight: "1.2",
          }}
        >
          <span className="">
            <span className="text-[yellow]">EXPLORE</span> THE WORLD <br />
          </span>
          <span className="">
            WITH <span className="sp-1 text-[yellow]">TRAVELLO10</span>
            <hr className="hidden md:block border-t-2 border-white w-[85%] md:mt-6" />
          </span>
          {/* White horizontal line below the text */}
          
        </h1>

        <div className="h-10 w-full bg-white z-20"></div>
        <p
          className="videopg-p md:mt-6 left-20 absolute uppercase md:top-[350px] top-[340px] text-xs sm:text-sm md:text-lg lg:text-xl tracking-wider"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
          Book trips and explore new <br /> destinations with ease <br /> from
          anywhere
        </p>
      </div>
      {/* Button for booking */}
      <div
        onClick={handleGetQuotesClick}
        className="absolute videopg-btn left-20 top-[460px] z-50"
      >
        <button className="bg-white md:mt-6 video-btn text-black md:py-2 md:px-6 md:rounded-full rounded-lg md:text-sm font-bold text-xs p-2">
          BOOK NOW
        </button>
      </div>

      {/* Mainreview component */}
      <div className="z-20 w-full absolute bottom-0 ">
        <Mainreview />
      </div>
      {isQuotePopupVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <QuotePopup onClose={closeQuotePopup} />
        </div>
      )}
      <Socialmedia />
      {/* Homecrd component */}
      <div>
        <Homecrd />
      </div>
    </div>
  );
};

export default Videopage;
