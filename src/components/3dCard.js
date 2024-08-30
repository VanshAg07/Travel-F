import React, { useState, useEffect } from 'react';
import axios from "axios";
import './3dCard.css';
import Ind from "../img/india.jpg";

const Card = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await axios.get("https://travel-server-iley.onrender.com/api/admin/getTrip");
                setTrips(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching trips:", error);
            }
        };

        fetchTrips();
    }, []);

    return (
        <div className='cards-wrapper'>
            {trips.map((trip, index) => (
                <div key={index} className='card-container'>
                    <div className="image-container-cards">
                        <img src={Ind} alt="India" draggable="false" className='card-image' />
                    </div>
                    <h1>{trip.tripName}</h1>
                    <i className="fa-solid fa-clock">6N/7D</i>
                    <i className="fa-solid fa-location-dot">Srinagar</i>
                    <i className="fa-solid fa-calendar-days">Any date of your choice</i>
                    <div>
                        <button className='button-card'>Button</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
