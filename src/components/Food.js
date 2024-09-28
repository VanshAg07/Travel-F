import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Food.css"; 
import { FaMapMarkerAlt, FaUtensils } from "react-icons/fa"; 
import { useParams } from "react-router-dom";

const Food = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchActivities = async () => {
      console.log("Fetching activities..."); 
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/getRichFlavour/${name}`
        );
        console.log(response.data); 
        setActivities(response.data.activities || []); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [name]); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="food-cards-grid">
      {activities.map((food, index) => (
        <div key={index} className="food-card">
          <img src={food.img} alt={food.title} className="food-card-img" />
          <div className="food-card-content">
            <h1>{food.title}</h1>
            <div className="location-info">
              <FaMapMarkerAlt className="location-icon" />
              <span className="location-text">{food.stateName}</span>
            </div>
            <div className="food-info">
              <FaUtensils className="food-icon" />
              <span className="food-text">{food.foodType}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Food;
