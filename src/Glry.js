import React, { useEffect, useState } from "react";
import "./Glry.css";
import Nav from "./components/Nav";
import Dropnav from "./components/Dropnav";
import MainFooter from "./components/Footer/MainFooter";

const Glry = () => {
  const [images, setGalleryImages] = useState([]);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/gallery/home-galleries"
      );
      const data = await response.json();
      setGalleryImages(data.images[0].images || []);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };

  return (
    <div className="glry-wr">
      <Nav />
      <Dropnav />
      <h2 className="gallery-heading">Our Stunning Gallery</h2>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <MainFooter />
    </div>
  );
};

export default Glry;
