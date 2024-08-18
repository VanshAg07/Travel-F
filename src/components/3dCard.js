import React, { useState, useEffect } from 'react';
import axios from "axios";
import './3dCard.css';
import Ind from "../img/india.jpg";
import { useMotionValue, useTransform, motion } from "framer-motion";

const Card = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await axios.get("https://travel-server-iley.onrender.com/api/admin/getTrip");
                setTrips(response.data);
                console.log(response.data); // Updated to log the fetched data
            } catch (error) {
                console.error("Error fetching trips:", error);
            }
        };

        fetchTrips();
    }, []);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div style={{ perspective: 2000 }} className=''>
            {trips.map((trip, index) => (
                <motion.div
                    key={index}
                    style={{
                        x,
                        y,
                        rotateX,
                        rotateY,
                        z: 100,
                        transition: "transform 0.3s ease"
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className='card-container'
                >
                    <div className="image-container-card">
                        <img src={Ind} alt="India" draggable="false" className='card-image' />
                    </div>
                    <h1>{trip.tripName}</h1>
                    <i className="fa-solid fa-clock">6N/7D</i>
                    <i className="fa-solid fa-location-dot">Srinagar</i>
                    <i className="fa-solid fa-calendar-days">Any date of your choice</i>
                    <div>
                        <button className='button-card'>Button</button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Card;
