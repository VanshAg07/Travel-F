import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FaClock, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
// import "./3dCard.css";

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
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, [name]);

  const getValidDate = (tripDates) => {
    if (!tripDates) return null;
    const today = new Date();
    const validDates = tripDates
      .map((date) => new Date(date))
      .filter((date) => date >= today);
    validDates.sort((a, b) => a - b);
    return validDates.length > 0 ? validDates[0] : null;
  };

  const filteredTrips = trips
    .filter((trip) => trip.stateName === name)
    .flatMap((trip) => trip.trips);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24 mx-10 md:mx-20 lg:mx-40">
      {filteredTrips.length > 0 ? (
        filteredTrips.map((trip, index) => {
          const nextDate = getValidDate(trip.tripDate);
          if (!nextDate) return null;

          return (
            <Link
              key={index}
              to={`/trip/${trip.tripName}/${name}`}
              className="w-80 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            >
              <img
                src={trip.tripImages}
                alt={trip.tripName}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4 relative">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-black">{trip.tripName}</h3>
                  <div className="flex items-center text-black text-sm">
                    <FaClock className="mr-1" />
                    {trip.tripDuration}
                  </div>
                </div>
                <div className="flex items-center text-black text-sm mt-2">
                  <FaCalendarAlt className="mr-1" />
                  {nextDate.toLocaleDateString()}
                  <span className="ml-2 text-red-500">+6 Batches</span>
                </div>
                <div className="flex items-center text-black text-sm mt-2">
                  <FaMapMarkerAlt className="mr-1" />
                  {trip.pickAndDrop}
                </div>
                <div className="absolute top-3 right-3 bg-yellow-300 border-2 border-white px-3 py-1 rounded-full flex items-center justify-center">
                  <span className="font-bold text-sm">₹ {trip.tripPrice}</span>
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
