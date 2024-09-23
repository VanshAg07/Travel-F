import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Visit.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Visit = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(
          `https://travel-server-iley.onrender.com/api/user/getBeautifulPlaces/${name}`
        );
        console.log(response.data);
        setPlaces(response.data.activities || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="visiting-cards-grid grid-cols-3">
      {places.length > 0 ? (
        places.map((place, index) => (
          <div key={index} className="visiting-card">
            <img src={place.img} alt={place.title} className="food-card-img" />
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