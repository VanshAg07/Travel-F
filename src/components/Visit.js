import React from 'react';
import './Visit.css'; // Ensure this file has the styles defined below
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon
import bg from "../img/india.jpg";

const visitData = [
  {
    img: bg,
    title: 'Umiam Lake',
    description: 'Umiam Lake in Meghalaya is a serene waterbody, surrounded by hills and lush greenery, offering boating, water sports, and picturesque views.',
    location: 'Umiam Lake'
  },
  {
    img: bg,
    title: 'Balpakram National Park',
    description: 'Balpakram National Park in Meghalaya is a biodiversity hotspot, with diverse flora and fauna, picturesque landscapes, and cultural significance.',
    
    location: 'Garo Hills'
  },
  {
    img: bg,
    title: 'Elephant Falls',
    description: 'Elephant Falls in Meghalaya is a popular tourist attraction, featuring a three-tiered waterfall, surrounded by lush greenery and scenic beauty.',

    location: 'Meghalaya'
  },
  // Add more hiking data here if needed
];

const Visit = () => {
  return (
    <div className="visiting-cards-grid">
      {visitData.map((visit, index) => (
        <div key={index} className="visiting-card">
          <img src={visit.img} alt={visit.title} className="visiting-card-img" />
          <div className="visiting-card-content">
            <h1>{visit.title}</h1>
            <p>{visit.description}</p>
            <div className="location-info">
              <FaMapMarkerAlt className="location-icon" />
              <span className="location-text">{visit.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Visit;
