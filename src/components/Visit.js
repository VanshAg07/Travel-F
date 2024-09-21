import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Visit.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import bg from "../img/india.jpg";

const Visit = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const { name } = useParams(); 

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(`https://travel-server-iley.onrender.com/api/user/getBeautifulPlaces/${name}`);
        setPlaces(response.data.places || []); 
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPlaces();
  }, [name]);

  // Logging the state after it's been updated
  useEffect(() => {
    console.log(places); // This will log the updated places array
  }, [places]);

  return (
    <div className="visiting-cards-grid grid-cols-3">
      {places.length > 0 ? (
        places.map((place, index) => (
          <div key={index} className="visiting-card">
            <img src={bg} alt={place.title} className="visiting-card-img" />
            <div className="visiting-card-content">
              <h1>{place.title}</h1>
              <p>{place.description}</p>
              <div className="location-info">
                <FaMapMarkerAlt className="location-icon" />
                <span className="location-text">{place.location}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No places found</p>
      )}
    </div>
  );
};

export default Visit;
