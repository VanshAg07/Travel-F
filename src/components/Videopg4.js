import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Videopg4.css';
import img1 from "../img/bali.jpg";
import img2 from '../img/Uttarakhand.png';
import img3 from "../img/singapore.jpg";
import img4 from "../img/thailand.jpg";
import img5 from '../img/Kashmir.png';
import img6 from '../img/rishikesh.png';
import img7 from '../img/kerala.png';
import video from '../img/india.mp4';
import FooterSection from "./Footersection";

const images = [
  { src: img1, text: "Bali" },
  { src: img2, text: "Vietnam" },
  { src: img3, text: "Singapore" },
  { src: img4, text: "Thailand" },
  { src: img5, text: "Kashmir" },
  { src: img6, text: "Andaman" },
  { src: img7, text: "Kerala" },
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
    <div className="wrpper-4">
      <div className="video-div-4">
       <Link to="/Honeymoon"> <video className="video-4" src={video} autoPlay loop muted></video></Link>
        <h1 className="video-heading-4">  Romantic Escapes</h1>
      </div>
      <div className="slider-4">
        <button onClick={prevSlide} className="arrow-4 left-4">
          <i className="fa-solid fa-circle-left"></i>
        </button>
        <div className="slider-wrapper-4">
        {images.slice(index, index + getNumberOfImages()).map((img, i) => (
            <div key={i} className="slide-4">
              <img src={img.src} alt={`Slide ${i}`} />
              <h1>{img.text}</h1> {/* Display the corresponding text */}
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="arrow-4 right-4">
          <i className="fa-solid fa-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;