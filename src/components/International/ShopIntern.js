import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Shop.css";
import { FaClock } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ShopIntern = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get(
          `https://api.travello10.com/api/user/getInternShops/${name}`
        );
        console.log(response.data);
        setShops(response.data.shops || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="shop-cards-grid">
      {shops.map((shop, index) => (
        <div key={index} className="shop-card">
          <img src={shop.img} alt={shop.title} className="shop-card-img" />
          <div className="shop-card-content">
            <div className="clock-text-container">
              <FaClock className="shop-card-clock" />
              <span className="duration-text">{shop.duration}</span>
            </div>
            <h1>{shop.title}</h1>
            <p>{shop.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopIntern;
