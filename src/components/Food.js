import React from 'react';
import './Food.css'; // Ensure this file has the styles defined below
import { FaMapMarkerAlt, FaUtensils } from 'react-icons/fa'; // Import location and food icons
import bg from "../img/india.jpg";

const foodData = [
  {
    img: bg,
    title: 'City Hut Family Dhaba',
    food: ' Cafe',
    location: 'Shillong',
  },
  {
    img: bg,
    title: 'Jiva Grill sohra',
    food: 'Indian, Asian, Grill',
    location: 'Sohra',
  },
  {
    img: bg,
    title: 'Dejavu',
    food: 'Chinese, Asian',
    location: 'Shillong',
  },
  // Add more data if needed
];

const Food = () => {
  return (
    <div className="food-cards-grid">
      {foodData.map((food, index) => (
        <div key={index} className="food-card">
          <img src={food.img} alt={food.title} className="food-card-img" />
          <div className="food-card-content">
            <h1>{food.title}</h1>
            <div className="location-info">
              <FaMapMarkerAlt className="location-icon" />
              <span className="location-text">{food.location}</span>
            </div>
            <div className="food-info">
              <FaUtensils className="food-icon" />
              <span className="food-text">{food.food}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Food;
