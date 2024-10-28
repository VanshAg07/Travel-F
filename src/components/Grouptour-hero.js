import React, { useEffect, useState } from "react";
import imgcloud from "../img/cloud.jpg";
import imgcloud1 from "../img/cloud.webp";
import { MdLocationPin, MdPeople } from "react-icons/md";
import { LuCircleDotDashed } from "react-icons/lu";

const HighLevelCorporateTour = () => {
  const [expandedDays, setExpandedDays] = useState({});
  const [trips, setTrips] = useState([]);
  const [groupDetails, setGroupDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleToggleDay = (day) => {
    setExpandedDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  useEffect(() => {
    fetchGroupDetails();
  }, []);

  const fetchGroupDetails = async () => {
    try {
      const response = await fetch(`https://api.travello10.com/api/group-tours/group-details`);
      const result = await response.json();
      if (result.data) {
        setGroupDetails(result.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading group details...</div>;
  }

  return (
    <div className="bg-white mb-40">
      <div className="text-center py-8">
        <header className="w-full bg-white p-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Organizations We've <span className="text-blue-500">Empowered</span>
          </h1>
        </header>
      </div>

      <div className="relative bg-[#03346e] text-white py-10 sm:py-16 top-10 h-[800px] sm:h-[1000px] lg:h-[550px] overflow-hidden mb-20">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-6 lg:px-16">
          {/* Left Content */}
          <div className="flex-1">
            <div className="mb-4">
              <img className="h-10 sm:h-12 mb-4" src={imgcloud1} />
              <h2 className="text-xl sm:text-2xl font-bold">HighLevel</h2>
              <p className="mt-2 text-gray-300">
                A white-labeled marketing app that empowers entrepreneurs with powerful tools for marketing, sales, and automation.
              </p>
            </div>

            {/* Details */}
            <div className="mt-4">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex p-2 border border-gray-300 rounded-md items-center">
                  <MdLocationPin />
                  <span className="ml-1">Delhi</span>
                </div>
                <div className="flex p-2 border border-gray-300 rounded-md items-center">
                  <MdPeople className="text-xl" />
                  <span className="ml-1">200+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content (Responsive Image) */}
          <div className="flex-1 mt-8 lg:mt-0 lg:max-w-lg w-full overflow-hidden relative">
            <img
              src={imgcloud}
              alt="Image Description"
              className="rounded-lg shadow-lg w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[450px] object-cover max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="w-4/5"> {/* 80% width */}
          <p className="text-3xl pb-4 sm:text-4xl font-bold text-center">
            Itinerary
          </p>

          <div className="mb-5 bg-blue-100 p-3 rounded-lg shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-start flex-grow">
                <div className="border-2 p-2 rounded-md mr-5 border-blue-400 bg-white text-sm md:text-base flex-shrink-0">
                  Day 1 :
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl flex-grow overflow-hidden">
                Arrival, welcome dinner, and an introduction to the agenda
                </p>
              </div>
              <span
                className="cursor-pointer border-2 ml-2 border-blue-400 pl-2 pr-2 pt-[1px] pb-[1px] rounded-sm text-blue-400 hover:bg-blue-200 transition-colors duration-300"
                onClick={() => handleToggleDay(1)}
              >
                {expandedDays[1] ? "-" : "+"}
              </span>
            </div>

            {expandedDays[1] && (
              <ul className="mt-4 pl-4 mx-10">
                <div className="mt-2 flex flex-row items-center gap-3">
                  <div className="flex-shrink-0 w-3 h-3 flex items-center justify-center">
                    <LuCircleDotDashed className="w-full h-full" />
                  </div>
                  <li className="text-xs sm:text-sm md:text-base">
                    helloji helloji  helloji  helloji  helloji   helloji helloji  helloji  helloji  helloji   helloji helloji helloji helloji helloji 
                  </li>
                </div>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighLevelCorporateTour;