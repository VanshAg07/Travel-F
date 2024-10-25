import React, { useState, useEffect } from "react";
import { FaHandHoldingHeart, FaUserFriends } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
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

  return (
    <>
       <div className="wrpper-inter">
      <Nav />
      <Dropnav />
      <div className="hero-section-left-1">
        <img className="hero-img" src={intern} alt="International" />
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
      <div className="mt-[100px] md:mt-0">
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

      <div className="py-12 bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800 sm:text-3xl lg:text-4xl">
            Backpacking Trips
          </h1>
        </div>

        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center mb-6 p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <FaHandHoldingHeart className="text-3xl text-blue-500 mb-4" />
            <p className="font-semibold text-gray-800 text-center">
              Top Notch Hospitality
            </p>
          </div>
          <div className="flex flex-col items-center mb-6 p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <MdHotel className="text-3xl text-yellow-500 mb-4" />
            <p className="font-semibold text-gray-800 text-center">
              Beautiful Handpicked Stays
            </p>
          </div>
          <div className="flex flex-col items-center mb-6 p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <FaUserFriends className="text-3xl text-red-500 mb-4" />
            <p className="font-semibold text-gray-800 text-center">
              Fun Team Captains
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 w-[90%] min-h-screen mx-auto p-6">
        {schoolTrip ? (
          <div className="container mx-auto mt-8 p-4 space-y-12">
            <div id="school" className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-3xl text-center font-bold mb-2">
                School Tours
              </h2>
              <h3 className="text-2xl font-semibold pt-4 text-gray-800 mb-4">
                Introduction
              </h3>
              <ul className="list-disc text-lg list-inside text-gray-600">
                {Array.isArray(schoolTrip.introduction) &&
                  schoolTrip.introduction.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>

              <h3 className="text-2xl font-semibold pt-4 text-gray-800 mb-4">
                Objectives
              </h3>
              <ul className="list-disc text-lg list-inside text-gray-600">
                {Array.isArray(schoolTrip.objectives) &&
                  schoolTrip.objectives.map((objective, index) => (
                    <li key={index} className="mb-1">
                      {objective}
                    </li>
                  ))}
              </ul>

              <div id="itinerary" className="mt-10">
                <p className="text-center font-bold text-lg md:text-2xl mb-4">
                  Itinerary
                </p>
                {Array.isArray(schoolTrip.itinerary) &&
                schoolTrip.itinerary.length > 0 ? (
                  schoolTrip.itinerary.map((itineraryItem, index) => (
                    <div
                      className="mb-5 bg-blue-100 p-3 rounded-lg"
                      key={index}
                    >
                      <div className="day-header flex justify-between items-center">
                        <div className="border-2 p-2 rounded-md mr-5 border-blue-400 bg-white text-sm md:text-base">
                          Day {index + 1}:
                        </div>
                        <p className="text-xl">{itineraryItem.title}</p>
                        <span
                          className="plus-icon cursor-pointer text-lg font-bold"
                          onClick={() => handleToggleDay(index + 1)}
                        >
                          {expandedDays[index + 1] ? "−" : "+"}
                        </span>
                      </div>

                      {expandedDays[index + 1] && (
                        <ul className="mt-4 mx-10">
                          {Array.isArray(itineraryItem.points) &&
                            itineraryItem.points.map((detail, i) => (
                              <li
                                className="mt-2 flex flex-row items-center gap-3"
                                key={i}
                              >
                                <LuCircleDotDashed />
                                <span className="text-sm md:text-base">
                                  {detail}
                                </span>
                              </li>
                            ))}
                        </ul>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No Itinerary Available</p>
                )}
              </div>

              <h3 className="text-2xl font-semibold pt-4 text-gray-800 mb-4">
                Benefits
              </h3>
              <ul className="list-disc text-lg list-inside text-gray-600">
                {Array.isArray(schoolTrip.benefits) &&
                  schoolTrip.benefits.map((benefit, index) => (
                    <li key={index} className="mb-1">
                      {benefit}
                    </li>
                  ))}
              </ul>

              <h3 className="text-2xl font-semibold pt-4 text-gray-800 mb-4">
                Logistics
              </h3>
              <ul className="list-disc text-lg list-inside text-gray-600">
                {Array.isArray(schoolTrip.logistics) &&
                  schoolTrip.logistics.map((logistic, index) => (
                    <li key={index} className="mb-1">
                      {logistic}
                    </li>
                  ))}
              </ul>

              <h3 className="text-2xl font-semibold pt-4 text-gray-800 mb-4">
                Testimonials
              </h3>
              <ul className="list-disc text-lg list-inside text-gray-600">
                {Array.isArray(schoolTrip.testimonials) &&
                  schoolTrip.testimonials.map((testimonial, index) => (
                    <li key={index} className="mb-1">
                      {testimonial}
                    </li>
                  ))}
              </ul>

              <h3 className="text-2xl font-semibold pt-4 text-gray-800 mb-4">
                Call to Action
              </h3>
              <ul className="list-disc text-lg list-inside text-gray-600">
                {Array.isArray(schoolTrip.callToAction) &&
                  schoolTrip.callToAction.map((action, index) => (
                    <li key={index} className="mb-1">
                      {action}
                    </li>
                  ))}
              </ul>

              <h3 className="text-2xl font-semibold pt-4 text-gray-800 mb-4">
                Conclusion
              </h3>
              <ul className="list-disc text-lg list-inside text-gray-600">
                {Array.isArray(schoolTrip.conclusion) &&
                  schoolTrip.conclusion.map((conclusion, index) => (
                    <li key={index} className="mb-1">
                      {conclusion}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ) : (
          <div>Loading school trip details...</div>
        )}
      </div>

      <Grouptourhero />
      <Grouptourform />
      <MainFooter />
      </div>
    </>
  );
};

export default Schooltour;

