import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hiking.css";
import { FaClock } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Hiking = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchActivities = async () => {
      console.log("Fetching activities...");
      try {
        const response = await axios.get(
          `https://travel-server-iley.onrender.com/api/user/getBestActivities/${name}`
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="hiking-cards-grid grid-cols-3">
      {activities.length > 0 ? (
        activities.map((activity, index) => (
          <div key={index} className="hiking-card">
            {/* Construct the image URL using the base URL and the image filename */}
            <img
              src={`https://travel-server-iley.onrender.com/uploads/${activity.img}`} // Assuming activity.img contains the filename
              alt={activity.title}
              className="hiking-card-img"
            />
            <div className="hiking-card-content">
              <div className="clock-text-container">
                <FaClock className="hiking-card-clock" />
                <span className="duration-text">{activity.time}</span>{" "}
              </div>
              <h1>{activity.title}</h1>
              <p>{activity.description}</p>
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
