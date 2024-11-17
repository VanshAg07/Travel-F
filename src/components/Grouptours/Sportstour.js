import React, { useState, useEffect } from "react";
import { FaHandHoldingHeart, FaUserFriends } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import Homeglry from "../../components/Homeglry";
import Nav from "../Nav";
import Image1 from "../../img/kerala.png";
import Dropnav from "../../components/Dropnav";
import intern from "../../img/india.jpg";
import Lottie from "lottie-react";
import Mainreview from "../../components/Mainreview";
import MainFooter from "../Footer/MainFooter";
import weekend from "../../img/weekend.json";
import Grouptourhero from "../../components/Grouptour-hero";
import Grouptourform from "../../components/Groupform";
import SportsAllPackage from "./SportsAllPackage";

const BackpackingTrips = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";
  const [expandedDays, setExpandedDays] = useState({});
  const [trips, setTrip] = useState([]);
  const [schoolTrip, setSchoolTrip] = useState(null);
  const [groupStart, setGroupStart] = useState([]);

  const handleToggleDay = (day) => {
    setExpandedDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.travello10.com/api/group-tours/group-tours"
        );
        const data = await response.json();
        setTrip(data.data);
        const schoolData = data.data.find((item) => item.type === "School");
        if (schoolData) {
          setSchoolTrip(schoolData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [backgroundImages, setBackgroundImages] = useState([]);
  const fetchBackgroundImages = async () => {
    try {
      const response = await fetch(
        "https://api.travello10.com/api/group-tours/state"
      );
      const data = await response.json();
      setBackgroundImages(data);
    } catch (error) {
      console.error("Error fetching background images:", error);
    }
  };

  useEffect(() => {
    fetchBackgroundImages();
    fetchStart();
  }, []);
  const nationalImages = Array.isArray(backgroundImages)
    ? backgroundImages.filter((item) => item.stateName === "Sports")
    : [];

  const fetchStart = async () => {
    try {
      const response = await fetch(
        "https://api.travello10.com/api/group-tours/group-start"
      );
      const data = await response.json();
      setGroupStart(data);
    } catch (error) {
      console.error("Error fetching start data:", error);
    }
  };
  
  const adventureGroupStart = groupStart.filter(
    (item) => item.stateName === "Sports"
  );
  return (
    <>
      <div className="wrpper-inter">
        <Nav />
        <Dropnav />

        <div className="w-full">
          {nationalImages.length > 0 &&
            nationalImages.map((item) => (
              <div key={item._id} className="relative">
                {item.stateImage &&
                  item.stateImage.map((imgUrl, index) =>
                    imgUrl.endsWith(".mp4") ? (
                      <video
                        key={index}
                        className="w-full h-auto"
                        autoPlay
                        muted
                        loop
                      >
                        <source
                          src={`https://api.travello10.com/upload/${imgUrl}`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        key={index}
                        src={`https://api.travello10.com/upload/${imgUrl}`}
                        alt={`Image ${index}`}
                        className="w-full md:h-screen"
                      />
                    )
                  )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h1 className="text-white font-bold text-2xl xs:text-2xl sm:text-3xl lg:text-4xl leading-tight mt-4 sm:mt-8 text-center">
                    {item.stateName} Tour
                  </h1>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-[130px] md:mt-0">
          <Mainreview />
        </div>

        <div className="lottie-wr">
          <Lottie
            animationData={weekend}
            loop={true}
            autoplay={true}
            speed={0.5}
            className="hero-lottie"
          />
        </div>

        <div className="pt-[3rem] pb-4 bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 sm:text-3xl lg:text-4xl">
              Backpacking Trips
            </h1>
          </div>

          <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center mb-6 p-4 bg-white">
              <FaHandHoldingHeart className="text-3xl text-blue-500 mb-4" />
              <p className="font-semibold text-gray-800 text-center">
                Top Notch Hospitality
              </p>
            </div>
            <div className="flex flex-col items-center mb-6 p-4 bg-white">
              <MdHotel className="text-3xl text-yellow-500 mb-4" />
              <p className="font-semibold text-gray-800 text-center">
                Beautiful Handpicked Stays
              </p>
            </div>
            <div className="flex flex-col items-center mb-6 p-4 bg-white">
              <FaUserFriends className="text-3xl text-red-500 mb-4" />
              <p className="font-semibold text-gray-800 text-center">
                Fun Team Captains
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          {adventureGroupStart.length > 0 &&
            adventureGroupStart.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="md:w-1/2 flex justify-end mt-5">
                  {(item.tripImages || []).map((imgUrl, index) => (
                    <img
                      key={index}
                      src={`https://api.travello10.com/upload/${imgUrl}`}
                      alt={item.heading}
                      className="w-96 h-96"
                    />
                  ))}
                </div>
                <div className="p-6 md:w-1/2">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {item.heading}
                  </h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {(item.points || []).map((point) => (
                    <div key={point._id} className="mb-2">
                      <h3 className="text-lg font-semibold text-gray-700">
                        {point.subheading}
                      </h3>
                      <p className="text-gray-600">{point.des}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <Grouptourhero />
        <div className="justify-center pt-10 items-center flex flex-col w-full ">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center leading-tight sm:text-xl">
            All Packages
          </h1>
          <div className="bg-[#ffff00] h-1 w-14 md:w-20 lg:w-40 mt-2"></div>
          <div>
            <p className=" pt-2 inter-description">
              Discover Your Dream Journey with Our Best-Selling Travel Packages
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-full">
            <SportsAllPackage />
          </div>
        </div>
        <Grouptourform />
        <MainFooter />
      </div>
    </>
  );
};

export default BackpackingTrips;
