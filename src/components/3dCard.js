import React, { useState, useEffect } from "react";
import axios from "axios";
import "./3dCard.css";
import shi1 from "../img/1.png";

const Card = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(
          "https://travel-server-iley.onrender.com/api/admin/getTrip"
        );
        setTrips(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="cards-wrapper1">
      {trips.map((trip, index) => (
        <div key={index} className="card-container">
          {/* <img className=" absolute h-full w-full" src={shi1} alt="India" /> */}
          <div className="card-content">
            <h1 className="card-links">{trip.tripName}</h1>
            <p className="card-links">hello details</p>
            <i className="fa-solid fa-clock card-links">6N/7D</i>
            <i className="fa-solid fa-location-dot card-links">Srinagar</i>
            <i className="fa-solid fa-calendar-days card-links">
              Any date of your choice
            </i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
 