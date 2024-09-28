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
import "./Weekends.css"
import cont from "../img/cont-button.json";
import Lottie from "lottie-react";
// import "./Grouptours.css"

const Weekends = () => {
    const whatsappMessage = "Hello, I need assistance with my issue.";

  return (
    <>
    <Nav/>
    <Dropnav/>
    <div className=' weekend-hero w-[100%] h-[100%]'>
    <img className='h-[750px] w-[100%]' src={intern} alt="India" />
        <h1 className='top-[40%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-[3.5rem]  absolute text-white text-center'>
        Weekend Getaways</h1>
        <p className='text-[1.7rem] transform -translate-x-1/2 -translate-y-1/2  top-[52%] left-[29%]  absolute bg-[yellow] text-black pt-[15px] pb-[15px] pl-[15px] pr-[15px] '> Weekend Trips from Delhi </p>
    </div>
    <div className="py-12 bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 pt-10">Weekend Getaways from Delhi</h1>
      </div>

      {/* Icon section */}
      <div className="w-4/5 mx-auto flex pr-48  space-x-16 mt-8">
        {/* First item */}
        <div className="flex flex-col pr-44 items-center">
          <FaHandHoldingHeart className="text-6xl text-blue-500 mb-4" />
          <p className="text-lg font-semibold text-gray-800 text-center">
            Top Notch <br /> Hospitality
          </p>
        </div>

        {/* Second item */}
        <div className="flex flex-col pr-44 items-center">
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
    <FooterSection/>
    <Footer/>
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
