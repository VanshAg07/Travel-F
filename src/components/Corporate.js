import React, { useEffect, useState, useRef } from "react";
import Nav from "./Nav";
import "./Places.css";
import bg from "../img/india.jpg";
import Whyuss from "./Whyuss";
import Superpower from "./Superpower";
import Beyondordinary from "./Beyondordinary";
import Corpohero from "./Corpo-hero";
import Servicecorpo from "./Services-corpo";
import ClienteleHallOfFame from "./Clients-corpo";
import Image1 from "../images/corporateImage.jpg";
import Dropnav from "../components/Dropnav";
import cont from "../img/cont-button.json";
import Lottie from "lottie-react";
import Mainreview from "../components/Mainreview";
import MainFooter from "./Footer/MainFooter";
import Grouptourform from "../components/Groupform";
import axios from "axios";

const Corporate = () => {
  const [corporateData, setCorporateData] = useState([]);
  const [expandedMore, setExpandedMore] = useState(false);
  const contentRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  const toggleReadMoreText = () => {
    setExpandedMore(!expandedMore);
  };
  const whatsappMessage = "Hello, I need assistance with my issue.";

  useEffect(() => {
    fetchCorporate();
  }, []);

  useEffect(() => {
    // Check if the content overflows the image height (400px)
    if (contentRef.current && contentRef.current.scrollHeight > 400) {
      setIsOverflow(true);
    } else {
      setIsOverflow(false);
    }
  }, [corporateData]);

  const fetchCorporate = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/corporate/create-corporate-landing"
      );
      setCorporateData(res.data.data);
    } catch (error) {
      console.error("Error fetching corporate data", error);
    }
  };

  return (
    <>
      <Nav />
      <Dropnav />
      <div className="place-container">
        <div className="relative h-[83vh] flex flex-col justify-start text-left text-white px-4 sm:px-8">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover z-1"
            src={bg}
            alt="Background"
          />
          <div className="relative z-10 flex flex-col justify-center items-start h-full p-4 sm:p-8">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Corporate Tours
            </h1>
            <div className="bg-[yellow] p-3">
              <p className="text-lg sm:text-xl text-black font-semibold">
                Elevate Your Team: Uniting Business and Adventure
              </p>
            </div>
          </div>
        </div>
        <Mainreview />

        <div className="justify-center pt-10 items-center flex flex-col w-full">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center leading-tight sm:text-xl">
            Unleash the Excitement in Corporate Tours
          </h1>
          <div className="bg-[#ffff00] h-1 w-16 md:w-24 lg:w-60 mt-2"></div>
        </div>
        {corporateData.map((corporate) => (
          <div className="w-[80%] mx-auto pt-10 flex flex-col md:flex-row justify-between md:space-x-8">
            <div className="w-full md:w-[50%] md:mt-0 md:ml-0">
              <img
                src={corporate.image}
                alt="Descriptive text here"
                className="rounded-xl w-full md:w-auto transition-transform duration-300 ease-in-out transform hover:scale-105 h-[400px] mx-auto"
              />
            </div>
            <div className="w-full md:w-[50%] flex flex-col items-start justify-start md:ml-0 md:mt-0">
              <p className="text-yellow-400 text-3xl">
                {corporate.headingTitle}
              </p>
              <div
                className={`text-left mt-3 ${
                  !expandedMore && "overflow-hidden max-h-[400px]"
                }`}
                ref={contentRef}
              >
                <p>{corporate.description}</p>
                {corporate.heading.map((head, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-yellow-400 text-3xl mt-10">
                      {head.title}
                    </h3>
                    <p className="text-md mb-2 mt-2">
                      {head.headingDescription}
                    </p>
                    <h4 className="text-xl font-medium">{head.subHeading}</h4>
                    <ul className="list-disc list-inside mt-2">
                      {head.points.map((point, idx) => (
                        <li key={idx} className="text-sm">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {isOverflow && !expandedMore && (
                <button
                  onClick={toggleReadMoreText}
                  className="self-end text-right text-sky-600 mt-5"
                >
                  Read More...
                </button>
              )}
              {expandedMore && (
                <button
                  onClick={toggleReadMoreText}
                  className="self-end text-right text-sky-600 mt-5"
                >
                  Read Less
                </button>
              )}
            </div>
          </div>
        ))}

        <div>
          <Superpower />
          <Beyondordinary />
        </div>
        <Corpohero />
        <Servicecorpo />
        <ClienteleHallOfFame />
        <div className="bg-[#ffffe6]">
          <Whyuss />
          <Grouptourform />
        </div>
      </div>
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

export default Corporate;
