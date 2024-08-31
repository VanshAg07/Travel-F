import React from 'react';
import './Hiking.css'; // Ensure this file has the styles defined below
import { FaClock } from 'react-icons/fa'; // Import FontAwesome clock icon
import bg from "../img/india.jpg";

const hikingData = [
  {
    img: bg, // Replace with your actual image path
    title: 'Hiking',
    description: 'Meghalaya offers stunning hiking opportunities, with its scenic hills, waterfalls, and living root bridges, making for a memorable outdoor adventure.',
    duration: '4 hours approx',
  },
  {
    img: bg, // Replace with your actual image path
    title: 'Golfing',
    description: 'Golfing in Meghalaya offers a unique experience with its picturesque courses set amidst rolling hills and refreshing weather.',
    duration: '30 minutes approx',
  },
  {
    img: bg, // Replace with your actual image path
    title: 'River Canyoning',
    description: 'River canyoning in Meghalaya is an exhilarating adventure, exploring hidden gorges and waterfalls while rappelling, sliding, and jumping into natural pools.',
    duration: '8 hours approx',
  },
  // Add more hiking data here if needed
];

const Hiking = () => {
  return (
    <div className="hiking-cards-grid">
      {hikingData.map((hike, index) => (
        <div key={index} className="hiking-card">
          <img src={hike.img} alt={hike.title} className="hiking-card-img" />
          <div className="hiking-card-content">
            <div className="clock-text-container">
              <FaClock className="hiking-card-clock" />
              <span className="duration-text">{hike.duration}</span>
            </div>
            <h1>{hike.title}</h1>
            <p>{hike.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hiking;
