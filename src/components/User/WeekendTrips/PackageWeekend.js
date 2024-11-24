import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Packagedetails.css";
import Nav from "../../Nav";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { useParams } from "react-router-dom";
import Review from "../../Review";
import { LuCircleDotDashed } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Dropnav from "../../../components/Dropnav";
import cont from "../../../img/cont-button.json";
import Lottie from "lottie-react";
import MainFooter from "../../Footer/MainFooter";
const PackageWeekend = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");
  const [isExpanded, setIsExpanded] = useState(false);
  const { tripName, name } = useParams();
  const [trips, setTrip] = useState([]);
  const [sharing, setSharing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stateNames, setstateNames] = useState("");
  const handleDownload = () => {
    if (trips.pdf) {
      const fileUrl = `${trips.pdf}`;
      window.open(fileUrl, "_blank");
    } else {
      console.error("No PDF file available");
    }
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const [expandedDays, setExpandedDays] = useState({});

  const handleToggleDay = (day) => {
    setExpandedDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  const stateName = name;
  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.travelo10.com/api/weekends/findStateAndTrip/${stateName}/${tripName}`
        );
        setTrip(response.data);
        setSharing(response.data.sharing);
      } catch (error) {
        console.error("Error fetching trip details:", error);
        setError("Failed to load trip details");
      } finally {
        setLoading(false);
      }
    };
    fetchTripDetails();
  }, [name, tripName]);
  // console.log(sharing);
  let doubleSharing;
  let tripleSharing;
  let quadSharing;
  if (sharing && sharing.length >= 1) {
    doubleSharing = sharing[0]?.price;
    tripleSharing = sharing[1]?.price;
    quadSharing = sharing[2]?.price;
  } else {
    console.error(
      "Error: sharing array is empty or does not have enough elements"
    );
  }
  const handleDatesAndCostingClick = () => {
    if (trips && trips.tripDate) {
      navigate("/dates-and-costing", {
        state: {
          tripDates: trips.tripDate,
          tripPrice: trips.tripPrice,
          tripName: trips.tripName,
          doubleSharing,
          tripleSharing,
          quadSharing,
          stateName: stateNames.stateName,
        },
      });
    } else {
      console.error("Trip dates not available");
    }
  };

  return (
    <div>
      <Nav />
      <Dropnav />
      {trips && trips.tripBackgroundImg && (
        <img
          src={trips.tripBackgroundImg}
          alt="Descriptive Alt Text"
          className="h-screen w-[100%]"
        />
      )}
      {trips?.pdf && (
        <button className="cssbuttons-io-button" onClick={handleDownload}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
            ></path>
          </svg>
          <span>Download Itinerary</span>
        </button>
      )}
      <div className="flex  gap-0 justify-center m-2">
        <div className="max-w-[50%]">
          <div className="mt-10 ">
            <p className="text-4xl font-bold">{trips?.tripName}</p>
          </div>
          <div className="flex flex-row gap-10 mt-5">
            <div className="flex flex-row items-center gap-5 bg-gray-700 rounded-lg border-2 p-4 ">
              <FaMapMarkerAlt className="text-white" />
              <div className="flex flex-col">
                <span className="text-white">Pickup & Drop:</span>
                <span className="text-white">{trips?.pickAndDrop}</span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 bg-gray-700 rounded-lg border-2 p-4 ">
              <FaClock className="text-white" />
              <div className="flex flex-col">
                <span className="text-white">Duration:</span>
                <span className="text-white">
                  {trips && trips?.tripDuration}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-5">
            <nav className="package-nav">
              <a
                href="#overview"
                className={activeSection === "overview" ? "active" : ""}
                onClick={() => setActiveSection("overview")}
              >
                Overview & Highlights
              </a>
              <a
                href="#itinerary"
                className={activeSection === "itinerary" ? "active" : ""}
                onClick={() => setActiveSection("itinerary")}
              >
                Itinerary
              </a>
              <a
                href="#inclusions"
                className={activeSection === "inclusions" ? "active" : ""}
                onClick={() => setActiveSection("inclusions")}
              >
                Inclusion
              </a>
              <a
                href="#exclusions"
                className={activeSection === "exclusions" ? "active" : ""}
                onClick={() => setActiveSection("exclusions")}
              >
                Exclusion
              </a>
              <a
                href="#other-info"
                className={activeSection === "other-info" ? "active" : ""}
                onClick={() => setActiveSection("other-info")}
              >
                Other Info
              </a>
            </nav>
          </div>
          <div id="overview" className="overview-container">
            <h1>Overview & Highlights</h1>
            <div className="p-4 border-2 items-center text-center flex w-[75%] justify-center mb-2 font-bold bg-blue-100 border-blue-300">
              {trips?.overView}
            </div>
            <div className="">
              <p>{trips && trips?.tripDescription}</p>
            </div>
          </div>
          <div id="itinerary" className="mt-10">
            <p className="text-center font-bold text-3xl mb-4">Itinerary</p>

            {/* Ensure trip and tripItinerary exist before mapping */}
            {trips && trips.tripItinerary && trips.tripItinerary.length > 0 ? (
              trips.tripItinerary.map((itineraryItem, index) => (
                <div className="mb-5 bg-blue-100 p-3 rounded-lg" key={index}>
                  <div className="day-header flex justify-between items-center">
                    <div className="border-2 p-2 rounded-md mr-5 border-blue-400 bg-white">
                      Day {index + 1}: {/* Use index+1 for day number */}
                    </div>
                    <p className="text-xl">{itineraryItem.title}</p>
                    <span
                      className="plus-icon cursor-pointer"
                      onClick={() => handleToggleDay(index + 1)}
                    >
                      {expandedDays[index + 1] ? "-" : "+"}
                    </span>
                  </div>

                  {/* Conditionally render details when day is expanded */}
                  {expandedDays[index + 1] && (
                    <ul className="mt-4 mx-10">
                      {itineraryItem.points.map((detail, i) => (
                        <div className="mt-2" key={i}>
                          <div className="flex flex-row items-center gap-3">
                            <LuCircleDotDashed />
                            <li>{detail}</li>
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

          <div id="inclusions" className="inclusions-container">
            <h1 className="text-center font-bold text-3xl mb-4">Inclusions</h1>
            <ul className="p-2 flex flex-col">
              {trips &&
              trips.tripInclusions &&
              trips.tripInclusions.length > 0 ? (
                trips.tripInclusions.map((inclusion, index) => (
                  <li
                    className="flex flex-row items-center gap-4 mt-2 text-l"
                    key={index}
                  >
                    <SiTicktick className="text-green-500" size={20} />
                    {inclusion}
                  </li>
                ))
              ) : (
                <li>No Inclusions Available</li>
              )}
            </ul>
          </div>

          <div id="exclusions" className="Exclusion-container">
            <h1 className="text-center font-bold text-3xl mb-4">Exclusions</h1>
            <ul className="Exclusion-list p-2 flex flex-col">
              {trips &&
              trips.tripExclusions &&
              trips.tripExclusions.length > 0 ? (
                trips.tripExclusions.map((exclusion, index) => (
                  <li
                    className="flex flex-row items-center text-l gap-4 mt-2"
                    key={index}
                  >
                    <RxCrossCircled className="text-red-500" size={22} />
                    {exclusion}
                  </li>
                ))
              ) : (
                <li>No Exclusions Available</li>
              )}
            </ul>
          </div>

          <div id="other-info" className="Other-info-container">
            <h1>Other-Info</h1>
            <ul className="Other-info-list">
              <p>Must Carry</p>
              <li>
                <GoDotFill className="icon-e" />
                Authentic Government ID Card
              </li>
              <li>
                <GoDotFill className="icon-e" />
                Comfortable warm clothing
              </li>
              <li>
                <GoDotFill className="icon-e" />
                Personal Medicines (if any)
              </li>
              <li>
                <GoDotFill className="icon-e" />
                Sunscreen & lip balm
              </li>
              <p>Travel Essentials</p>

              {/* Display additional content only if expanded */}
              {isExpanded && (
                <>
                  <p>Gears</p>
                  <li>
                    <GoDot className="icon-e" />A rucksack bag and a day pack
                  </li>
                  <li>
                    <GoDot className="icon-e" />
                    3-litre water bladder or water bottle
                  </li>
                  <p>clothes</p>
                  <li>
                    <GoDot className="icon-e" />
                    One cotton long sleeves and 2 short sleeve t-shirt
                  </li>
                  <li>
                    <GoDot className="icon-e" />1 pair of gloves
                  </li>
                  <li>
                    <GoDot className="icon-e" />
                    At least 2 long pants (trek pants and cargo pants are
                    favourable)
                  </li>
                  <li>
                    <GoDot className="icon-e" />4 sets of undergarments
                  </li>
                  <li>
                    <GoDot className="icon-e" />2 pair of socks
                  </li>
                  <li>
                    <GoDot className="icon-e" />A rain jacket or a poncho
                  </li>
                  <li>
                    <GoDot className="icon-e" />A small towel
                  </li>
                  <p>Footwear</p>
                  <li>
                    <GoDot className="icon-e" />
                    Above-the-ankle waterproof and breathable hiking boots with
                    good grip
                  </li>
                  <li>
                    <GoDot className="icon-e" />
                    Flip flops/sandals
                  </li>
                  <p>Medication</p>
                  <li>
                    <GoDot className="icon-e" />
                    Glucose powder
                  </li>
                  <li>
                    <GoDot className="icon-e" />
                    Medicines for headaches, diarrhoea, motion sickness
                  </li>
                  <li>
                    <GoDot className="icon-e" />
                    Dettol
                  </li>
                  <li>
                    <GoDot className="icon-e" />
                    Bandages
                  </li>
                  <li>
                    <GoDot className="icon-e" />
                    Cotton
                  </li>
                  <p>Personal accessories</p>
                  <li>
                    <GoDot className="icon-e" />
                    Toothpaste, Toothbrush
                  </li>
                  <li>
                    <GoDot className="icon-e" />
                    Paper soap, or sanitizer
                  </li>
                  <li>
                    <GoDot className="icon-e" />
                    Sunscreen minimum of spf40 , lip balm, cold creams
                  </li>
                  <li>
                    <GoDot className="icon-e" />
                    Body spray
                  </li>
                  <li>
                    <GoDot className="icon-e" />
                    LED torch light
                  </li>
                </>
              )}

              {/* Toggle button */}
              <button onClick={handleToggle} className="toggle-button">
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </ul>
          </div>
        </div>
        <div className="relative w-[25%] top-10 mb-20">
          <div className=" ml-10 mt-20 sticky top-10">
            <div className="bg-white shadow-lg p-4 rounded-2xl">
              <p className="text-2xl text-blue-500">
                <span className="font-bold text-3xl">
                  Rs.{trips.tripOfferPrice}/-{" "}
                </span>
                per person
              </p>
              <div className="bg-blue-500 items-center justify-center flex p-4 rounded-xl mt-5">
                <button onClick={handleDatesAndCostingClick}>
                  <p className="text-white text-xl font-bold">
                    Dates & Costing
                  </p>
                </button>
              </div>
            </div>
            <div className="border-2 border-blue-500 mt-10 rounded-lg shadow-lg max-w-lg">
              <div className="bg-blue-300 p-6 border-b-2 border-blue-400 rounded-t-lg text-center">
                <p className="font-bold text-2xl text-blue-900">
                  Travell10 Calling?
                </p>
                <p className="text-lg text-blue-700">
                  Allow Us to Call You Back!
                </p>
              </div>
              <div className="p-6 bg-white rounded-b-lg">
                <form className="space-y-5">
                  <div className="flex flex-col">
                    <label className="font-semibold text-blue-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="eg. John Doe"
                      className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold text-blue-700">
                      Phone No
                    </label>
                    <input
                      type="text"
                      placeholder="eg. 123-456-7890"
                      className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold text-blue-700">
                      Email ID
                    </label>
                    <input
                      type="email"
                      placeholder="eg. johndoe@example.com"
                      className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Review />
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
    </div>
  );
};

export default PackageWeekend;
