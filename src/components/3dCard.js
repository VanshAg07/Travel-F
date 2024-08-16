import React from 'react';
import './3dCard.css';
import Ind from "../img/india.jpg";
import { useMotionValue, useTransform, motion } from "framer-motion";

const Card = () => {
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

    const colors = [
        { value: "#b6a179" },
        { value: "#272425" },
        { value: "#6389cb" },
        { value: "#f2c758" },
        { value: "#ffffff" },
    ];

    return (
        <div style={{ perspective: 2000 }} className=''>
            <motion.div
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
                <h1>Kashmir Winter Expedition</h1>
                <i class="fa-solid fa-clock ">6N/7D</i>
                <i class="fa-solid fa-location-dot">Srinagar</i>
                <i class="fa-solid fa-calendar-days">Any date of your choice</i>
                <div>
                    <button className='button-card'>Button</button>
                </div>
            </motion.div>
        </div>
    );
};

export default Card;


