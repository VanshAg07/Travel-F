import React, { useState } from "react";
import { Link} from 'react-router-dom';
import "./Videopg2.css";
import img1 from "../img/dubai.jpg";
import img2 from "../img/Maldives.jpg";
import img3 from "../img/Europe.jpg";
import img4 from "../img/bali.jpg";
import img5 from "../img/singapore.jpg";
import img6 from "../img/thailand.jpg";
import video from "../img/intern1.mp4";

const images = [
  { src: img1, text: "Dubai" },
  { src: img2, text: "Maldives" },
  { src: img3, text: "Europe" },
  { src: img4, text: "Bali" },
  { src: img5, text: "Singapore" },
  { src: img6, text: "Thailand" },
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
    // Return 5 images by default, 3 images for screens smaller than 425px
    if (window.innerWidth <= 426) {
      return 3;
    }
    return 5;
  };

  return (
    <div className="wr-1">
    <div className="wrpper-1">
      <div className="video-div-1">
      <Link to="/intern"> <video className="video-1" src={video} autoPlay loop muted></video> </Link> 
        <h1 className="video-heading">International Trips</h1>
      </div>
      <div className="slider-1">
        <button onClick={prevSlide} className="arrow-1 left-1">
          <i className="fa-solid fa-circle-left"></i>
        </button>
        <div className="slider-wrapper-1">
          {images.slice(index, index + getNumberOfImages()).map((img, i) => (
            <div key={i} className="slide-1">
              <img src={img.src} alt={`Slide ${i}`} />
              <h1>{img.text}</h1> {/* Display the corresponding text */}
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="arrow-1 right-1">
          <i className="fa-solid fa-circle-right"></i>
        </button>
      </div>
    </div>
    </div>
  );
};

export default ImageSlider;
