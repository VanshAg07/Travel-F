import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Packagedetails.css";
import Nav from "../Nav";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { FaFileDownload } from 'react-icons/fa';
import { RxCrossCircled } from "react-icons/rx";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { useParams } from "react-router-dom";
import Review from "../Review";
import { LuCircleDotDashed } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Dropnav from "../../components/Dropnav";
import cont from "../../img/cont-button.json";
import Lottie from "lottie-react";
import MainFooter from "../Footer/MainFooter";
const PackageInternatioanl = () => {
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
          `http://localhost:5000/api/international/findStateAndTrip/${stateName}/${tripName}`
        );
        setTrip(response.data);
      } catch (error) {
        console.error("Error fetching trip details:", error);
        setError("Failed to load trip details");
      } finally {
        setLoading(false);
      }
    };
    fetchTripDetails();
  }, [name, tripName]);
  const handleDatesAndCostingClick = () => {
    
  };

  return (
    <div>
      <Nav />
      <Dropnav />
      <div className="relative">
  <img
    src={trips.tripBackgroundImg}
    alt="Descriptive Alt Text"
    className="h-screen w-full"
  />
  {trips.pdf && (
    <button 
      className="absolute rounded-3xl bottom-28 left-1/2 transform -translate-x-1/2 
                 flex items-center justify-center 
                 text-sm sm:text-base md:text-lg lg:text-xl 
                 bg-[#fee60b] text-black p-2 sm:p-3 md:p-4 lg:p-3 
                 transition-all duration-300" 
      onClick={handleDownload}
    >
      <FaFileDownload className="mr-2" /> {/* Updated icon */}
      <span>Download Itinerary</span>
    </button>
  )}
</div>

      <div className="flex w-full justify-center mb-16 m-2">

      {/* Main div responsive */}
      <div className="flex flex-col lg:flex-row w-[80vw] mx-auto"> 
    <div className="w-full lg:w-[65vw] md:mx-auto"> {/* Responsive width and center below lg (1024px) */}
        <div className="mt-10">
            <p className="text-xl md:text-3xl lg:text-4xl pt-7 font-bold sm:text-xl">{trips.tripName}</p> {/* Responsive font size */}
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5"> {/* Stack vertically on smaller screens */}
    <div className="flex flex-row items-center gap-5 bg-gray-700 rounded-lg border-2 p-4 inline-flex"> {/* Added inline-flex */}
        <FaMapMarkerAlt className="text-white" />
        <div className="flex flex-col">
            <span className="text-white text-sm md:text-base">Pickup & Drop:</span> {/* Responsive text size */}
            <span className="text-white text-sm md:text-base">{trips.pickAndDrop}</span>
        </div>
    </div>
    <div className="flex flex-row items-center gap-5 bg-gray-700 rounded-lg border-2 p-4 inline-flex"> {/* Added inline-flex */}
        <FaClock className="text-white" />
        <div className="flex flex-col">
            <span className="text-white text-sm md:text-base">Duration:</span> {/* Responsive text size */}
            <span className="text-white text-sm md:text-base">{trips && trips.tripDuration}</span>
        </div>
    </div>
</div>
   
        {/* Navigation section */}
        <div className="mt-10 mb-5">
            <nav className="flex overflow-x-auto p-6 whitespace-nowrap bg-[#03346E] text-xs sm:text-sm md:text-base lg:text-lg justify-center">
                <a href="#overview" className="flex-none text-center relative text-white mx-2" onClick={() => setActiveSection("overview")}>
                    Overview & Highlights
                    {activeSection === "overview" && <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 bg-white w-1/2"></span>}
                </a>
                <a href="#itinerary" className="flex-none text-center relative text-white mx-2 " onClick={() => setActiveSection("itinerary")}>
                    Itinerary
                    {activeSection === "itinerary" && <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 bg-white w-1/2"></span>}
                </a>
                <a href="#inclusions" className="flex-none text-center relative text-white mx-2" onClick={() => setActiveSection("inclusions")}>
                    Inclusion
                    {activeSection === "inclusions" && <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 bg-white w-1/2"></span>}
                </a>
                <a href="#exclusions" className="flex-none text-center relative text-white mx-2" onClick={() => setActiveSection("exclusions")}>
                    Exclusion
                    {activeSection === "exclusions" && <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 bg-white w-1/2"></span>}
                </a>
            </nav>
        </div>

        {/* Other content goes here (Overview, Itinerary, etc.) */}
        <div id="overview" className="p-4 sm:p-5 bg-white rounded-lg shadow-lg box-border mt-8">
        <h1 className="text-center font-bold text-base sm:text-lg md:text-2xl lg:text-4xl mb-4">Overview & Highlights</h1> {/* Responsive text size */}
        <div className="border-2 pt-2 pb-2 items-center text-center flex justify-center mb-2 font-bold bg-blue-100 border-blue-300">
    <p className="text-xs sm:text-sm md:text-base lg:text-lg">{trips.overView}</p>
</div>
        <div className="">
            <p className="text-sm md:text-base">
                {trips && trips.tripDescription}
            </p>
        </div>
    </div>
    
    <div id="itinerary" className="mt-10">
    <p className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl mb-4">
        Itinerary
    </p>

    {trips && trips.tripItinerary && trips.tripItinerary.length > 0 ? (
        trips.tripItinerary.map((itineraryItem, index) => (
            <div className="mb-5 bg-blue-100 p-3 rounded-lg shadow-md" key={index}>
                <div className="flex items-start justify-between">
                    <div className="flex items-start flex-grow">
                        <div className="border-2 p-2 rounded-md mr-5 border-blue-400 bg-white text-sm md:text-base flex-shrink-0">
                            Day {index + 1}:
                        </div>
                        <p className="text-base sm:text-lg md:text-xl lg:text-xl flex-grow overflow-hidden"> {/* Adjusted title size */}
                            {itineraryItem.title}
                        </p>
                    </div>
                    <span
                        className="cursor-pointer border-2 ml-2 border-blue-400 pl-2 pr-2 pt-[1px] pb-[1px] rounded-sm text-blue-400 hover:bg-blue-200 transition-colors duration-300"
                        onClick={() => handleToggleDay(index + 1)}
                    >
                        {expandedDays[index + 1] ? "-" : "+"}
                    </span>
                </div>

                {expandedDays[index + 1] && (
                    <ul className="mt-4 mx-10">
                        {itineraryItem.points.map((detail, i) => (
                            <div className="mt-2 flex flex-row items-center gap-3" key={i}>
                                <div className="flex-shrink-0 w-3 h-3 flex items-center justify-center">
                                    <LuCircleDotDashed className="w-full h-full" />
                                </div>
                                <li className="text-xs sm:text-sm md:text-base"> {/* Adjusted text size for points */}
                                    {detail}
                                </li>
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

    <div id="inclusions" className="p-4 sm:p-5 bg-[#F5FFF6] rounded-lg shadow-lg box-border mt-8">
    <h1 className="text-center font-bold text-base sm:text-lg md:text-2xl lg:text-4xl mb-4">Inclusions</h1> 
    <ul className="list-none p-0 m-0 rounded-lg">
        {trips && trips.tripInclusions && trips.tripInclusions.length > 0 ? (
            trips.tripInclusions.map((inclusion, index) => (
                <li
                    className="flex flex-row items-start gap-4 mt-2 text-xs sm:text-sm md:text-base"
                    key={index}
                >
                    <SiTicktick 
                        className="text-[#66bb6a] flex-none" 
                        style={{
                            fontSize: window.innerWidth <= 640 ? '12px' : '20px' // Adjust icon size based on screen width
                        }}
                    />
                    <span className="flex-1">{inclusion}</span>
                </li>
            ))
        ) : (
            <li>No Inclusions Available</li>
        )}
    </ul>
</div>

    <div id="exclusions" className="p-4 sm:p-5 bg-[#FFF4F4] rounded-lg shadow-lg box-border mt-8">
    <h1 className="text-center font-bold text-base sm:text-lg md:text-2xl lg:text-4xl mb-4">Exclusions</h1> 
    <ul className="list-none p-0 m-0 rounded-lg">
        {trips && trips.tripExclusions && trips.tripExclusions.length > 0 ? (
            trips.tripExclusions.map((exclusion, index) => (
                <li
                    className="flex flex-row items-start text-xs sm:text-sm md:text-base gap-4 mt-2" // Changed items-center to items-start
                    key={index}
                >
                    <RxCrossCircled 
                        className="text-red-500 flex-none"
                        style={{
                            fontSize: window.innerWidth <= 640 ? '12px' : '22px' // Adjust icon size based on screen width
                        }}
                    />
                    <span className="flex-1">{exclusion}</span>
                </li>
            ))
        ) : (
            <li>No Exclusions Available</li>
        )}
    </ul>
</div>
        
    </div>

    {/* Form div with a width of 35% */}
    <div className="w-[35vw] hidden lg:block"> {/* Form div is hidden below lg (1024px) */}
        <div className="ml-10 mt-20 sticky top-10">
            <div className="bg-white shadow-lg p-4 rounded-2xl">
                <p className="text-xl md:text-2xl">Starting From</p>
                <p className="text-xl md:text-2xl text-blue-500">
                    <span className="font-bold text-2xl md:text-3xl">
                        Rs.{trips.tripPrice}/-{" "}
                    </span>
                    per person
                </p>
                <div className="bg-[#03346E] items-center justify-center flex p-4 rounded-xl mt-5">
                    <button onClick={handleDatesAndCostingClick}>
                        <p className="text-white text-lg md:text-xl font-bold">Dates & Costing</p>
                    </button>
                </div>
            </div>
            <div className="border-2 border-blue-500 mt-10 rounded-lg shadow-lg max-w-lg">
                <div className="bg-blue-300 p-6 border-b-2 border-blue-400 rounded-t-lg text-center">
                    <p className="font-bold text-xl md:text-2xl text-blue-900">Travell10 Calling?</p>
                    <p className="text-md md:text-lg text-blue-700">Allow Us to Call You Back!</p>
                </div>
                <div className="p-6 bg-white rounded-b-lg">
                <form className="space-y-5">
                    <div className="flex flex-col">
                        <label className="font-semibold text-blue-700 text-sm md:text-base">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="eg. John Doe"
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm md:text-base" // Responsive input text size
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-blue-700 text-sm md:text-base">
                            Phone No
                        </label>
                        <input
                            type="text"
                            placeholder="eg. 123-456-7890"
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm md:text-base" // Responsive input text size
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-blue-700 text-sm md:text-base">
                            Email ID
                        </label>
                        <input
                            type="email"
                            placeholder="eg. johndoe@example.com"
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm md:text-base" // Responsive input text size
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm md:text-base" // Responsive button text size
                    >
                        Submit
                    </button>
                </form>
            </div>
            </div>
        </div>
    </div>

</div>

{/* mobile form footer */}
<div className="fixed bottom-0 w-full z-50 bg-white text-black p-4 flex justify-between items-center lg:hidden">
    {/* First Section: Starting Price */}
    <div className="text-lg md:text-xl font-bold">
        Starting from Rs. {trips.tripPrice}/-{" "}
    </div>

    {/* Second Section: Book Now Button */}
    <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Book Now
        </button>
    </div>
</div>


</div>
        <div className="pb-7 bg-[#ffffe6]">
      <Review />
      </div>
      <div className="mb-[100px]">
      <MainFooter />
      </div>
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

export default PackageInternatioanl;
