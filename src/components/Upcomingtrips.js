import React, { useState, useEffect } from "react";

import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";

const TripCard = ({ trip }) => {
  return (
    <div className="bg-white h-[60vh] shadow-md shadow-black rounded-lg overflow-hidden mb-4">
      <img
        src={
          trip.tripImages.length > 0 ? trip.tripImages[0] : "defaultImage.jpg"
        } // Fallback image if none is provided
        alt="Trip"
        className="w-[100vw] h-[300px] object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{trip.tripLocation}</h3>
          <div className="flex items-center">
            <FaClock className="mr-1" />
            <p className="text-sm text-black">{trip.tripDuration}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1" />
            <p className="text-sm text-black">
              {new Date(trip.date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-1" />
          <p className="text-sm text-black">{trip.stateName}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [upcomingTrips, setUpcomingTrips] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(""); // State to track selected month
  const [startIndex, setStartIndex] = useState(0);

  // Fetch upcoming trips from the server
  const fetchUpcomingTrips = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/home/upcoming");
      const data = await response.json();
      setUpcomingTrips(data.upcomingTrips);
      if (Object.keys(data.upcomingTrips).length > 0) {
        setSelectedMonth(Object.keys(data.upcomingTrips)[0]); // Set default selected month
      }
    } catch (error) {
      console.error("Error fetching upcoming trips:", error);
    }
  };

  useEffect(() => {
    fetchUpcomingTrips();
  }, []);

  // Get trips for the selected month
  const tripsForSelectedMonth = upcomingTrips[selectedMonth] || [];
  const allTrips = tripsForSelectedMonth;

  const [isVisible, setIsVisible] = useState(true);
  const tripsToShow = window.innerWidth < 1024 ? 3 : 4; // Show 3 on small screens, 4 on larger

  // Check the window size
  const checkWindowSize = () => {
    if (window.innerWidth < 768) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  // Event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize(); // Check on mount

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  // Handle next trips
  const nextTrips = () => {
    setStartIndex((prevIndex) => (prevIndex + tripsToShow) % allTrips.length);
  };

  // Handle previous trips
  const prevTrips = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - tripsToShow + allTrips.length) % allTrips.length
    );
  };

  // Go to a specific trip
  const goToTrip = (tripIndex) => {
    setStartIndex(tripIndex);
  };
  // Handle month selection
  const handleMonthClick = (month) => {
    setSelectedMonth(month);
    setStartIndex(0); // Reset start index when month changes
  };

  const shouldShowArrows = allTrips.length > tripsToShow; // Show arrows if there are more trips than can be shown
  const shouldShowDots = allTrips.length > tripsToShow; // Show dots if there are more trips than can be shown

  // Calculate the number of dots dynamically
  const totalDots = Math.ceil(allTrips.length / tripsToShow); // Total groups of trips

  return (
    <div className="min-h-screen bg-[#ffffe6] p-2 flex justify-center">
      <div className="w-[90vw]">
        <h1 className="text-3xl pl-12 font-bold mb-6">Upcoming Trips</h1>
        <div className="flex pl-10 mb-6 w-full justify-between">
          <div className="flex flex-row w-[70%] justify-between">
            {/* Month buttons */}
            {Object.keys(upcomingTrips).map((month) => (
              <button
                key={month}
                className="p-1 w-24 h-10 flex justify-center items-center text-center bg-white border border-black rounded-xl"
                onClick={() => handleMonthClick(month)} // Update month on click
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        {/* Slider container */}
        <div className="flex items-center justify-between mb-6">
          {shouldShowArrows && ( // Render arrows conditionally
            <button onClick={prevTrips} className="p-2">
              <FaChevronCircleLeft size={30} />
            </button>
          )}

          {/* Displaying the trips */}
          <div className="flex-grow flex justify-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
              {allTrips
                .slice(startIndex, startIndex + tripsToShow)
                .map((trip, index) => (
                  <TripCard key={index} trip={trip} />
                ))}
            </div>
          </div>

          {shouldShowArrows && ( // Render arrows conditionally
            <button onClick={nextTrips} className="p-2">
              <FaChevronCircleRight size={30} />
            </button>
          )}
        </div>
        {shouldShowDots && (
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {Array.from({ length: totalDots }).map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  onClick={() => goToTrip(dotIndex * tripsToShow)} // Navigate to the first trip of the group
                  className={`w-2 h-2 cursor-pointer rounded-full ${
                    startIndex / tripsToShow === dotIndex ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default App;