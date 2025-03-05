import React, { useState, useEffect } from "react";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import './Signup.css'
const TripCard = ({ trip }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const displayTripName =
    trip.tripName.length > 20
      ? `${trip.tripName.slice(0, 18)}...`
      : trip.tripName;

  const firstDate = trip.tripDate;

  // Navigate to the trip details page when a user clicks the card
  const handleCardClick = (tripLocation, tripName) => {
    const sanitizedTripName = tripName.replace(/\//g, "-");
    let stateName = tripLocation;
    navigate(`/trip/${encodeURIComponent(sanitizedTripName)}/${stateName}`);
  };

  return (
    <div
      onClick={() => handleCardClick(trip.tripLocation, trip.tripName)} // Pass stateName and tripName
      className="bg-white h-[45vh] md:h-[60vh] shadow-md shadow-black rounded-lg overflow-hidden mb-4 cursor-pointer"
    >
      <img
        src={trip.tripImages[0]}
        alt="Trip"
        className="w-full h-[300px] max-[425px]:h-[270px] object-cover"
      />
      <div className="abcd absolute z-50 top-3 right-3 bg-yellow-400 pl-2 pr-2 p-1 rounded-full w-auto flex items-center justify-center">
        <span className="font-semibold text-sm ">
          {trip.customised ? (
            "Customised"
          ) : (
            <>
              <span className="relative mr-1 line-through">
                {`₹ ${trip.tripPrice}/-`}
              </span>
              {`₹${trip.tripOfferPrice}/- onwards`}
            </>
          )}
        </span>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl uppercase font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            {displayTripName}
          </h3>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            <p className="text-sm text-black">{trip.tripLocation}</p>
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
            +{trip.tripDateCount} batches
          </p>
        </div>
      </div>
    </div>
  );
};

const SimilarTrips = () => {
  const { name } = useParams();
  const [startIndex, setStartIndex] = useState(0);
  const [trips, setTrips] = useState([]);
  const [tripsToShow, setTripsToShow] = useState(5);

  useEffect(() => {
    const fetchSimilarTrips = async () => {
      try {
        const response = await fetch(
          `https://api.travello10.com//api/user/getSimilarTrips/${name}`
        );
        const data = await response.json();

        // Flatten the trips array from all state names
        const allTrips = data.flatMap((stateData) => stateData.trips);
        setTrips(allTrips); // Set all trips
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };
    fetchSimilarTrips();
  }, [name]);

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth < 768) {
        setTripsToShow(1); // Show 1 trip for smaller screens
      } else if (window.innerWidth < 1024) {
        setTripsToShow(4); // Show 4 trips for medium screens
      } else {
        setTripsToShow(5); // Show 5 trips for larger screens
      }
    };

    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const nextTrips = () => {
    if (startIndex + tripsToShow < trips.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevTrips = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  const shouldShowArrows = trips.length > tripsToShow;

  return (
    <div className="max-h-screen bg-[#ffffe6] p-2 pb-10 md:pb-1 flex justify-center">
      <div className="w-[90vw]">
        <h1 className="text-3xl pl-12 pt-7 font-bold mb-6">Equivalent Getaways</h1>
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
              {trips
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
                startIndex + tripsToShow >= trips.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={startIndex + tripsToShow >= trips.length}
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
