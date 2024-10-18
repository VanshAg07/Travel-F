import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import Whyuss from "../components/Whyuss";
import Homeglry from "../components/Homeglry";
import Nav from "./Nav";
import Dropnav from "../components/Dropnav";
import intern from "../img/india.jpg";
import "./Weekends.css";
import cont from "../img/cont-button.json";
import Lottie from "lottie-react";
import MainFooter from "./Footer/MainFooter";
import Mainreview from "../components/Mainreview";
import weekend from "../img/weekend.json";
import AllWeekendTrips from "./User/WeekendTrips/AllWeekendTrips";

const Weekends = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";
  return (
    <>
      <Nav />
      <Dropnav />
      <div className="w-[100%] h-[100%] weekend-hero text-center justify-center items-center  ">
        <img className="h-[730px] w-[100%]" src={intern} alt="India" />
        <h1 className="top-[40%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-[3.5rem] absolute text-white text-center">
          Weekend Getaways
        </h1>
        <p className="text-xl sm:text-2xl md:text-[1.7rem] transform -translate-x-1/2 -translate-y-1/2 top-[52%] left-[29%] absolute bg-[yellow] text-black pt-4 pb-4 pl-4 pr-4">
          Weekend Trips from Delhi
        </p>
      </div>
      <Mainreview />
      <div className="lottie-wr">
        <Lottie
          animationData={weekend}
          loop={true}
          autoplay={true}
          speed={0.5}
          className="hero-lottie"
        />
      </div>
      <div className="py-12 bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800 pt-10 sm:text-3xl lg:text-4xl">
            Weekend Getaways from Delhi
          </h1>
        </div>
        {/* Icon section */}
        <div className="w-[70%] mx-auto flex justify-between items-center mt-8 flex-nowrap">
          {/* First item */}
          <div className="flex flex-col items-center mb-6">
            <FaHandHoldingHeart className="text-3xl text-blue-500 mb-4 sm:text-4xl md:text-5xl lg:text-6xl" />
            <p className="text-xs font-semibold text-gray-800 text-center sm:text-sm md:text-base lg:text-lg">
              Top Notch <br /> Hospitality
            </p>
          </div>
          {/* Second item */}
          <div className="flex flex-col items-center mb-6">
            <MdHotel className="text-3xl text-yellow-500 mb-4 sm:text-4xl md:text-5xl lg:text-6xl" />
            <p className="text-xs font-semibold text-gray-800 text-center sm:text-sm md:text-base lg:text-lg">
              Beautiful <br /> Handpicked Stays
            </p>
          </div>
          {/* Third item */}
          <div className="flex flex-col items-center mb-6">
            <FaUserFriends className="text-3xl text-red-500 mb-4 sm:text-4xl md:text-5xl lg:text-6xl" />
            <p className="text-xs font-semibold text-gray-800 text-center sm:text-sm md:text-base lg:text-lg">
              Fun <br /> Team Captains
            </p>
          </div>
        </div>
        <div>
          <AllWeekendTrips />
        </div>
      </div>
      <Whyuss />
      <Homeglry />
      <MainFooter />
      <div className="fixed-button-1">
        <a
          href={`https://wa.me/918287804197?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Lottie loop={true} animationData={cont} />
        </a>
      </div>
    </>
  );
};

export default Weekends;