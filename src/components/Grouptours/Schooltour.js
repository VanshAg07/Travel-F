import React, { useState, useEffect } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import Whyuss from "../../components/Whyuss";
import Homeglry from "../../components/Homeglry";
import Nav from "../Nav";
import Dropnav from "../../components/Dropnav";
import intern from "../../img/india.jpg";
import cont from "../../img/cont-button.json";
import Lottie from "lottie-react";
import Mainreview from "../../components/Mainreview";
import MainFooter from "../Footer/MainFooter";
import weekend from "../../img/weekend.json";
import Grouptourhero from "../../components/Grouptour-hero";
import Grouptourform from "../../components/Groupform";
import { LuCircleDotDashed } from "react-icons/lu";

const Schooltour = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";
  const [expandedDays, setExpandedDays] = useState({});

  const handleToggleDay = (day) => {
    setExpandedDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  const [trips, setTrip] = useState([]);
  return (
    <>
      <Nav />
      <Dropnav />
      <div className="w-[100%] h-[100%] text-center justify-center items-center  ">
        <img className="h-[730px] w-[100%]" src={intern} alt="India" />
        <h1
          className="top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 absolute text-white text-center
            text-4xl sm:text-5xl md:text-[2.7rem] leading-tight pb-3"
        >
          Backpacking Trips 2024
          <br />
          <span className="block text-2xl sm:text-3xl md:text-[2rem] mt-10">
            Venture Into the Heart of Uncharted Backpacking Paradises
          </span>
        </h1>
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
            Backpacking Trips
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
      </div>

      <div className="bg-gray-100 w-[80%] min-h-screen mx-auto">
        {/* Sections */}
        <div className="container mx-auto mt-8 p-4 space-y-12">
          {/* School Section */}
          <div id="school" className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-3xl text-center font-bold mb-2">
              School Tours
            </h2>
            <h3 className="text-2xl font-semibold pt-4 text-gray-800 mb-4">
              Introduction
            </h3>
            {/* Introduction */}
            <ul className="list-disc text-lg list-inside text-gray-600">
              <li>
                School trips go beyond the classroom, offering students
                real-world experiences that enhance their learning. These
                journeys encourage students to step outside their comfort zones,
                interact with diverse environments, and apply their academic
                knowledge in practical settings. By exploring museums,
                historical sites, or engaging in cultural exchanges, students
                gain a deeper understanding of the world around them. These
                trips also teach valuable life skills such as teamwork,
                leadership, and independence, preparing them for future
                challenges both in education and in life.
              </li>
              <br />
              <li>
                Another key benefit of school group trips is the opportunity to
                connect with nature and develop a sense of environmental
                responsibility. Whether it's a science field trip to a national
                park or a geography excursion to study ecosystems, students
                become more aware of the world’s ecological issues and the
                importance of sustainable living. These experiences often ignite
                a passion for learning and may even inspire future career paths.
                Through these immersive adventures, students not only acquire
                knowledge but also build memories that will stay with them for a
                lifetime.
              </li>
            </ul>

            {/* Objectives */}
            <h3 className="text-2xl font-semibold pt-4 text-gray-800 mb-4">
              Objectives
            </h3>
            <ul className="list-disc text-lg list-inside text-gray-600">
              <li className="mb-1">
                Team Building: Discuss how the trip will foster teamwork and
                collaboration.
              </li>
              <li className="mb-1">
                Networking: Opportunities for employees to connect with peers
                and industry leaders.
              </li>
              <li className="mb-1">
                Training and Development: Workshops or sessions aimed at skill
                enhancement.
              </li>
            </ul>

            {/* Itinery */}
            <div id="itinerary" className="mt-10">
              <p className="text-center font-bold text-lg md:text-2xl mb-4">
                Itinerary
              </p>{" "}
              {/* Responsive font size */}
              {trips &&
              trips.tripItinerary &&
              trips.tripItinerary.length > 0 ? (
                trips.tripItinerary.map((itineraryItem, index) => (
                  <div className="mb-5 bg-blue-100 p-3 rounded-lg" key={index}>
                    <div className="day-header flex justify-between items-center">
                      <div className="border-2 p-2 rounded-md mr-5 border-blue-400 bg-white text-sm md:text-base">
                        Day {index + 1}:
                      </div>
                      <p className="text-xl">{itineraryItem.title}</p>
                      <span
                        className="plus-icon cursor-pointer"
                        onClick={() => handleToggleDay(index + 1)}
                      >
                        {expandedDays[index + 1] ? "-" : "+"}
                      </span>
                    </div>

                    {expandedDays[index + 1] && (
                      <ul className="mt-4 mx-10">
                        {itineraryItem.points.map((detail, i) => (
                          <div className="mt-2" key={i}>
                            <div className="flex flex-row items-center gap-3">
                              <LuCircleDotDashed />
                              <li className="text-sm md:text-base">
                                {detail}
                              </li>{" "}
                              {/* Responsive text size */}
                            </div>
                          </div>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              ) : (
                <p>No Itinerary Available</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Grouptourhero />

      <Whyuss />
      <Homeglry />
      <Grouptourform />
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

export default Schooltour;
