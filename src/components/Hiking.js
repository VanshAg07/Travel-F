import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hiking.css"; // Ensure this file has the styles defined below
import { FaClock } from "react-icons/fa";
import { useParams } from "react-router-dom";
import bg from "../img/india.jpg";

const Hiking = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(
          `https://travel-server-iley.onrender.com/api/user/getBestActivities/${name}`
        );
        console.log(response.data); // Check if data is logged in console
        setActivities(response.data.activities || []); // Update activities state
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchActivities();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="hiking-cards-grid grid-cols-3">
      {activities.length > 0 ? (
        activities.map((activity, index) => (
          <div key={index} className="hiking-card">
            <img
              src={bg}
              // src={activity.img}
              alt={activity.title}
              className="hiking-card-img"
            />
            <div className="hiking-card-content">
              <div className="clock-text-container">
                <FaClock className="hiking-card-clock" />
                <span className="duration-text">{activity.time}</span>{" "}
                {/* Displaying time */}
              </div>
              <h1>{activity.title}</h1> {/* Displaying title */}
              <p>{activity.description}</p> {/* Displaying description */}
            </div>
          </div>
        ))
      ) : (
        <p>No activities found</p>
      )}
    </div>
  );
};

export default Hiking;
