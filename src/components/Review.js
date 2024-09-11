import React from "react";
import "./Review.css"; // This file will contain our styles

// Import images from your local img folder
import img1 from "../img/review1.png";
import img2 from "../img/review2.png";
import img3 from "../img/review3.png";
import img4 from "../img/review4.png";
import img5 from "../img/review5.png";
import img6 from "../img/review6.png";

const TravelerTestimonials = () => {
  // Array of imported images
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-heading">Hear From Travelers Like You</h2>
      <div className="testimonials-grid">
        {images.map((image, index) => (
          <div key={index} className="testimonial-image-container">
            <img src={image} alt={`Traveler ${index + 1}`} className="testimonial-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelerTestimonials;
