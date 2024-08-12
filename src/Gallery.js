import React, { useState } from "react";
import "./Gallery.css";
import img1 from "./img/dubai.jpg";
import img2 from "./img/Maldives.jpg";
import img3 from "./img/Europe.jpg";
import img4 from "./img/bali.jpg";
import img5 from "./img/singapore.jpg";
import img6 from "./img/thailand.jpg";
import img7 from "./img/kashmir.jpg";
import img8 from "./img/rajasthan.jpg";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [showMore, setShowMore] = useState(false);

  const images = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
  ];

  const visibleImages = showMore ? images : images.slice(0, 8);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="gallery">
      <div className="image-container">
        {visibleImages.map((image, index) => (
          <img key={index} src={image.src} alt={`Image ${index + 1}`} />
        ))}
      </div>
    <Link to="/Gallery">  <button className="btn-1" >View More</button></Link>
    </div>
  );
};

export default Gallery;
