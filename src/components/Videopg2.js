import React, { useState } from 'react';
import './Videopg2.css';
import img1 from '../img/dubai.jpg';
import img2 from '../img/Maldives.jpg';
import img3 from '../img/Europe.jpg';
import img4 from '../img/bali.jpg';
import img5 from '../img/singapore.jpg';
import img6 from '../img/thailand.jpg';
import img7 from '../img/kashmir.jpg';
import img8 from '../img/rajasthan.jpg';
import img9 from '../img/meghalaya.jpg';
import img10 from '../img/kerala.jpg';
import img11 from '../img/leh.jpg';
import img12 from '../img/sikkim.jpg';
import video from '../img/intern1.mp4';

const images = [
  { src: img1, text: "Dubai" },
  { src: img2, text: "Maldives" },
  { src: img3, text: "Europe" },
  { src: img4, text: "Bali" },
  { src: img5, text: "Singapore" },
  { src: img6, text: "Tokyo" },
  { src: img7, text: "New York" },
  { src: img8, text: "Sydney" },
  { src: img9, text: "Paris" },
  { src: img10, text: "Rome" },
  { src: img11, text: "London" },
  { src: img12, text: "Bangkok" },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 5));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex < images.length - 5 ? prevIndex + 1 : 0));
  };

  return (
    <div className="wrpper-1">
      <div className="video-div-1">
        <video className="video-1" src={video} autoPlay loop muted></video>
      </div>
      <div className="slider-1">
        <button onClick={prevSlide} className="arrow-1 left-1">
          <i className="fa-solid fa-circle-left"></i>
        </button>
        <div className="slider-wrapper-1">
          {images.slice(index, index + 5).map((img, i) => (
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
  );
};

export default ImageSlider;
