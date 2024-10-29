import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { GiClockwork } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import "../../3dCard.css"; // Ensure you have relevant styles here

const StateWeekend = () => {
  const [trips, setTrips] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(
          `https://api.travello10.com/api/weekends/get-all-weekend/${name}`
        );
        setTrips(response.data);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, [name]);

  const filteredTrips = trips
    .filter((trip) => trip.stateName === name)
    .flatMap((trip) => trip.trips);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24 mx-10 md:mx-20 lg:mx-40">
      {filteredTrips.length > 0 ? (
        filteredTrips.map((trip, index) => {
          return (
            <Link
              key={index}
              to={`/honeymoon/${trip.tripName}/${name}`}
              className="h-[400px] sm:h-[450px] relative shadow-lg rounded-lg mb-10 flex justify-center items-center cursor-pointer"
            >
              <img
                src={`${trip.tripImages}`}
                alt={trip.tripName}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-3 right-3 bg-yellow-300 border-2 border-white px-3 py-1 rounded-full flex items-center justify-center">
                <span className="font-bold text-sm">Customised</span>
              </div>
              <div className="w-full p-3 rounded-lg flex flex-col absolute bottom-0 bg-black bg-opacity-75">
                <h2 className="text-xs md:text-sm lg:text-base font-bold text-white mb-2">
                  {trip.tripName}
                </h2>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center text-gray-600">
                    <GiClockwork className="mr-2 text-blue-500" />
                    <span className="text-xs md:text-sm text-white">
                      {trip.tripDuration}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <MdLocationOn className="mr-2 text-blue-500" />
                  <span className="text-xs md:text-sm text-white">
                    {trip.pickAndDrop}
                  </span>
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

export default StateWeekend;
