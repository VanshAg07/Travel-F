import React from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa'; 
import { MdHotel } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa'; 
import Whyuss from "../components/Whyuss"
import Homeglry from '../components/Homeglry';
import Footer from '../Footer';
import FooterSection from './Footersection';
import Nav from './Nav';
import Dropnav from "../components/Dropnav";
import intern from "../img/india.jpg";
import cont from "../img/cont-button.json";
import Lottie from "lottie-react";
import  Mainreview from "../components/Mainreview";
import MainFooter from './Footer/MainFooter';
// import "./Grouptours.css"

const BackpackingTrips = () => {
    const whatsappMessage = "Hello, I need assistance with my issue.";
  return (
    <>
    <Nav/>
    <Dropnav/>
    <div className='w-[100%] h-[100%] text-center justify-center items-center  '>
    <img className='h-[730px] w-[100%]' src={intern} alt="India" />
        <h1 className='top-[40%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-[2.7rem]  absolute text-white text-center'>
        Backpacking Trips 2024 <br /> <span className='text-[2rem]'>Venture Into the Heart of Uncharted Backpacking Paradises</span>
        </h1>
    </div>
    <Mainreview />
    <div className="py-12 bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 pt-20">Backpacking Trips</h1>
      </div>

      {/* Icon section */}
      <div className="w-[70%] mx-auto flex mt-8">
        {/* First item */}
        <div className="flex flex-col pr-72 items-center">
          <FaHandHoldingHeart className="text-6xl text-blue-500 mb-4" />
          <p className="text-lg font-semibold text-gray-800 text-center">
            Top Notch <br /> Hospitality
          </p>
        </div>

        {/* Second item */}
        <div className="flex flex-col pr-72 items-center">
          <MdHotel className="text-6xl text-yellow-500 mb-4" />
          <p className="text-lg font-semibold text-gray-800 text-center">
            Beautiful <br /> Handpicked Stays
          </p>
        </div>

        {/* Third item */}
        <div className="flex flex-col items-center">
          <FaUserFriends className="text-6xl text-red-500 mb-4" />
          <p className="text-lg font-semibold text-gray-800 text-center">
            Fun <br /> Team Captains
          </p>
        </div>
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

export default BackpackingTrips;
