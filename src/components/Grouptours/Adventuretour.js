import React, { useState, useEffect } from "react";
import { FaHandHoldingHeart, FaUserFriends } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import Whyuss from "../../components/Whyuss";
import Homeglry from "../../components/Homeglry";
import Nav from "../Nav";
import Image1 from "../../img/kerala.png";
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

const BackpackingTrips = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";
  const [expandedDays, setExpandedDays] = useState({});
  const [trips, setTrip] = useState([]);
  const [schoolTrip, setSchoolTrip] = useState(null);

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
          "http://localhost:5000/api/group-tours/group-tours"
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

  return (
    <>
      <div className="wrpper-inter">
        <Nav />
        <Dropnav />
        <div className="hero-section-left-1">
          <img className="hero-img" src={intern} alt="International" />
          {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0"></div>
          <div className="relative flex flex-col items-center">
            <div className="relative w-full flex items-start justify-center">
              <h1 className="ml-6 text-center text-white font-bold text-2xl xs:text-2xl sm:text3xl lg:text-4xl leading-tight mt-4 sm:mt-8">
                Backpacking Trpis
              </h1>
            </div>

            <h1 className="inline-block text-center text-black bg-[yellow] px-4 py-2 mt-4 text-xl xs:text-xl sm:text-2xl lg:text-3xl">
              Adventure Tour
            </h1>
          </div>
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

          <div className="w-[80%] mx-auto pt-3 flex flex-col md:flex-row justify-between md:space-x-8">
            <div className="w-full md:w-[50%] mt-2 md:ml-0">
              <img
                src={Image1}
                alt="Descriptive text here"
                className="rounded-xl w-full md:w-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="w-full md:w-[50%] flex flex-col items-start justify-start md:ml-0 mt-5 md:mt-0">
              <p className="text-yellow-500 font-bold text-3xl mt-10">
                How to Reach Kedarnath: Your Journey Begins Here
              </p>
              <p className="text-left mt-3">
                Reaching Kedarnath is an adventure in itself, with multiple
                modes of transport available to guide you to this sacred site.
              </p>
              <p className="font-bold mt-5 mb-2 text-left">By Air:</p>
              <p className="text-left">
                The nearest airport is Jolly Grant Airport in Dehradun,
                approximately 250 km from Kedarnath. From the airport, you can
                hire a taxi or take a bus to reach Sonprayag, the last motorable
                point.
              </p>
              <p className="font-bold mt-5 mb-2 text-left">By Rail:</p>
              <p className="text-left">
                The closest railway stations are in Rishikesh and Haridwar.
                Regular buses and taxis operate from these stations to
                Sonprayag, which is about 210 km away.
              </p>
              <p className="font-bold mt-5 mb-2 text-left">By Road:</p>
              <p className="text-left">
                Kedarnath is well-connected by road to major cities like Delhi,
                Haridwar, and Rishikesh. The journey by road is a scenic one,
                passing through the lush green valleys and along the banks of
                the Ganges. From Sonprayag, you’ll need to travel by shared jeep
                or trek to Gaurikund, the base camp for the trek to Kedarnath.{" "}
              </p>
              <div className="mt-10">
                <p className="font-bold text-2xl text-yellow-500 text-left">
                  The Trek to Kedarnath
                </p>
                <p className="mt-3 text-left">
                  The 16 km trek from Gaurikund to Kedarnath is both challenging
                  and rewarding. For those unable to undertake the trek, pony
                  rides, palanquins, and helicopter services are available. The
                  trail is lined with beautiful waterfalls, streams, and
                  mesmerizing views of snow-capped peaks, making the journey as
                  spiritual as the destination itself.
                </p>
              </div>
            </div>
          </div>
        <Grouptourhero />
        <Grouptourform />
        <MainFooter />
      </div>
    </>
  );
};

export default BackpackingTrips;