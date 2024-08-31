import React from 'react';
import './Shop.css'; // Ensure this file has the styles defined below
import { FaClock } from 'react-icons/fa'; // Import FontAwesome clock icon
import bg from "../img/india.jpg";

const shopData = [
  {
    img: bg, // Replace with your actual image path
    title: 'Polo Bazaar',
    description: 'Shop For: Local fruits, clothes, and Jadoh',
    duration: '08:00 AM - 09:00 PM',
  },
  {
    img: bg, // Replace with your actual image path
    title: 'OB Shopping Mall',
    description: 'Shop For: Modern clothes & food',
    duration: '09:00 AM - 09:00 PM',
  },
  {
    img: bg, // Replace with your actual image path
    title: 'Glory’s Plaza',
    description: 'Shop For: Apparels',
    duration: '11:00 AM - 08:30 PM',
  },
  // Add more hiking data here if needed
];

const Shop = () => {
  return (
    <div className="shop-cards-grid">
      {shopData.map((hike, index) => (
        <div key={index} className="shop-card">
          <img src={hike.img} alt={hike.title} className="shop-card-img" />
          <div className="shop-card-content">
            <div className="clock-text-container">
              <FaClock className="shop-card-clock" />
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

export default Shop;
