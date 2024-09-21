import React, { useState } from "react";
import "./Explore.css";
import img1 from "../img/dubai.jpg";
import img2 from "../img/Maldives.jpg";
import img3 from "../img/Europe.jpg";
import img4 from "../img/bali.jpg";
import img5 from "../img/singapore.jpg";
import img6 from "../img/thailand.jpg";

const images = [
  { src: img1, text: "Romantic Escapes", link: "/Honeymoon" },
  { src: img2, text: "Corporate Trips", link: "/corporate-trips" },
  { src: img3, text: "Experience India", link: "/National" },
  { src: img4, text: "International Trips", link: "/intern" },
  { src: img5, text: "Team Adventures", link: "/team-adventures" },
  { src: img6, text: "Weekend Trips", link: "/weekend-trips" },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - getNumberOfImages()
    );
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex < images.length - getNumberOfImages() ? prevIndex + 1 : 0
    );
  };

  const getNumberOfImages = () => {
    // Return 4 images by default, 3 images for screens smaller than 425px
    if (window.innerWidth <= 426) {
      return 3; // Adjust if necessary
    }
    return 4; // Display 4 images
  };

  return (
    <div className="wr-5">
      <h2 className="slider-heading">Explore Your Adventure</h2>
      <div className="slider-5">
        <button onClick={prevSlide} className="arrow-5 left-5">
          <i className="fa-solid fa-circle-left"></i>
        </button>
        <div className="slider-wrapper-5">
          {images.slice(index, index + getNumberOfImages()).map((img, i) => (
            <div key={i} className="slide-5">
              <a href={img.link}>
                <img src={img.src} alt={`Slide ${i}`} />
                <h1>{img.text}</h1>
              </a>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="arrow-5 right-5">
          <i className="fa-solid fa-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
