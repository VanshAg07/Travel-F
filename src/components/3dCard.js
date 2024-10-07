import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { GiClockwork } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import "./3dCard.css"; // Ensure you have relevant styles here

const Card = () => {
  const [trips, setTrips] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/getTripDetails/${name}`
        );
        setTrips(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, [name]);

  const getValidDate = (tripDates) => {
    if (!tripDates) return null;
    const today = new Date();
    // Filter out past dates
    const validDates = tripDates
      .map((date) => new Date(date))
      .filter((date) => date >= today);
    // Sort dates to get the nearest upcoming date
    validDates.sort((a, b) => a - b);
    // Return the first valid date or null if no future dates
    return validDates.length > 0 ? validDates[0] : null;
  };

  const filteredTrips = trips
    .filter((trip) => trip.stateName === name)
    .flatMap((trip) => trip.trips);

  const nextDate = Array.isArray(trips.tripDate)
    ? getValidDate(trips.tripDate)
    : null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-24 mx-40">
      {filteredTrips.length > 0 ? (
        filteredTrips?.map((trip, index) => {
          const nextDate = getValidDate(trip.tripDate); // Get the next valid trip date
          // Skip trips with no future dates
          if (!nextDate) return null;
          return (
            <Link
              key={index}
              to={`/trip/${trip.tripName}/${name}`}
              className="h-[450px] relative shadow-lg rounded-lg mb-20 flex justify-center items-center cursor-pointer"
            >
              <img
                src={`http://localhost:5000/upload/${trip.tripImages}`}
                alt={trip.tripName}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-3 right-3 bg-yellow-300 border-2 border-white pl-2 pr-2 p-1 rounded-full w-auto flex items-center justify-center">
                <span className="font-bold text-sm">₹ {trip.tripPrice}</span>
              </div>
              <div className="w-full p-2 rounded-lg flex flex-col md:flex-row absolute bottom-0 bg-black">
                <div className="w-full">
                  <h2 className="text-xs font-bold text-white mb-10">
                    {trip.tripName}
                  </h2>
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex items-center text-gray-600 mb-2">
                      <GiClockwork className="mr-2 text-blue-500" />
                      <span className="text-white text-xs">
                        {trip.tripDuration}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-2 text-blue-500" />
                      <span className="text-white text-xs">
                        {nextDate.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MdLocationOn className="mr-2 text-blue-500" />
                    <span className="text-white text-xs">
                      {trip.pickAndDrop}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <p>No trips found for the selected state.</p>
      )}
    </div>
  );
};

export default Card;
