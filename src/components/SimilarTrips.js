import React, { useState, useEffect } from "react";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";

const TripCard = ({ trip }) => {
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const displayTripName =
    trip.tripName.length > 20
      ? `${trip.tripName.slice(0, 18)}...`
      : trip.tripName;

  const firstDate = trip.allTripDates[0];

  return (
    <div className="bg-white h-[60vh] shadow-md shadow-black rounded-lg overflow-hidden mb-4">
      <img
        src={trip.tripImages[0]}
        alt="Trip"
        className="w-full h-[300px] max-[425px]:h-[270px] object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl uppercase font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            {displayTripName}
          </h3>
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            <p className="text-sm text-black">{trip.stateName}</p>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1" />
            <p className="text-sm text-black">{trip.tripDuration}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaCalendarAlt className="mr-1" />
          <p className="text-sm text-black mr-2">{formatDate(firstDate)}</p>
          <p className="text-sm text-red-500 text-end">
            +{trip.allTripDatesCount} batches
          </p>
        </div>
      </div>
    </div>
  );
};

const SimilarTrips = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Dummy data
  const dummyTrips = {
    "November 2024": [
      {
        tripName: "Mountain Adventure Trek",
        stateName: "Himachal Pradesh",
        tripDuration: "5 Days",
        allTripDates: ["2024-11-15"],
        allTripDatesCount: 3,
        tripImages: ["/api/placeholder/400/300"]
      },
      {
        tripName: "Beach Paradise Gateway",
        stateName: "Goa",
        tripDuration: "4 Days",
        allTripDates: ["2024-11-20"],
        allTripDatesCount: 2,
        tripImages: ["/api/placeholder/400/300"]
      },
      {
        tripName: "Desert Safari Experience",
        stateName: "Rajasthan",
        tripDuration: "6 Days",
        allTripDates: ["2024-11-25"],
        allTripDatesCount: 4,
        tripImages: ["/api/placeholder/400/300"]
      },
      {
        tripName: "Backwater Cruise",
        stateName: "Kerala",
        tripDuration: "3 Days",
        allTripDates: ["2024-11-18"],
        allTripDatesCount: 5,
        tripImages: ["/api/placeholder/400/300"]
      },
      {
        tripName: "Wildlife Safari Tour",
        stateName: "Madhya Pradesh",
        tripDuration: "4 Days",
        allTripDates: ["2024-11-22"],
        allTripDatesCount: 3,
        tripImages: ["/api/placeholder/400/300"]
      },
      {
        tripName: "Valley of Flowers Trek",
        stateName: "Uttarakhand",
        tripDuration: "7 Days",
        allTripDates: ["2024-11-28"],
        allTripDatesCount: 2,
        tripImages: ["/api/placeholder/400/300"]
      }
    ]
  };

  const allTrips = dummyTrips["November 2024"];
  const tripsToShow = window.innerWidth < 425 ? 1 : window.innerWidth < 1024 ? 4 : 5;

  const checkWindowSize = () => {
    if (window.innerWidth < 768) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const nextTrips = () => {
    if (startIndex + tripsToShow < allTrips.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevTrips = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  const shouldShowArrows = allTrips.length > tripsToShow;

  return (
    <div className="min-h-screen bg-[#ffffe6] p-2 flex justify-center">
      <div className="w-[90vw]">
        <h1 className="text-3xl pl-12 font-bold mb-6">Equivalent Getaways</h1>
        <div className="flex pl-10 mb-6 w-full justify-between"></div>

        <div className="flex items-center justify-between mb-6">
          {shouldShowArrows && (
            <button
              onClick={prevTrips}
              className={`p-2 ${
                startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={startIndex === 0}
            >
              <FaChevronCircleLeft size={30} />
            </button>
          )}

          <div className="flex-grow flex justify-center">
            <div
              className={`grid ${
                tripsToShow === 1
                  ? "grid-cols-1"
                  : tripsToShow === 4
                  ? "md:grid-cols-4"
                  : "lg:grid-cols-5"
              } gap-6`}
            >
              {allTrips
                .slice(startIndex, startIndex + tripsToShow)
                .map((trip, index) => (
                  <TripCard key={index} trip={trip} />
                ))}
            </div>
          </div>

          {shouldShowArrows && (
            <button
              onClick={nextTrips}
              className={`p-2 ${
                startIndex + tripsToShow >= allTrips.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={startIndex + tripsToShow >= allTrips.length}
            >
              <FaChevronCircleRight size={30} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarTrips;