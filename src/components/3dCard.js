import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { GiClockwork } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import img1 from "../img/goa.png";
import "./3dCard.css"; // Make sure to adjust the CSS file accordingly

const Card = () => {
  const [trips, setTrips] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(`https://travel-server-iley.onrender.com/api/user/getTripDetails`);
        setTrips(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, []);

  const filteredTrips = trips
    .filter((trip) => trip.stateName === name)
    .flatMap((trip) => trip.trips);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-24 mx-40  ">
      {filteredTrips.length > 0 ? (
        filteredTrips.map((trip, index) => (
          <Link 
            key={index} 
            to={`/trip/${trip.tripName}/${name}`} 
            className="h-[450px] relative shadow-lg rounded-lg mb-20 flex justify-center items-center cursor-pointer"
          >
            <img
              src={img1}
              alt={trip.tripName}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-3 right-3 bg-yellow-300 border-2 border-white pl-2 pr-2 p-1 rounded-full w-auto flex items-center justify-center">
              <span className="font-bold text-sm ">₹ {trip.tripPrice}</span>
            </div>
            <div className="w-full p-2 rounded-lg flex flex-col md:flex-row absolute bottom-0 bg-black">
              <div className="w-full">
                <h2 className="text-xs font-bold text-white mb-10">{trip.tripName}</h2>
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex items-center text-gray-600 mb-2">
                    <GiClockwork className="mr-2 text-blue-500" />
                    <span className="text-white text-xs">{trip.tripDuration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 text-blue-500" />
                    <span className="text-white text-xs">{trip.tripDate}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MdLocationOn className="mr-2 text-blue-500" />
                  <span className="text-white text-xs">{trip.tripLocation}</span>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>No trips found for the selected state.</p>
      )}
    </div>
  );
};

export default Card;
