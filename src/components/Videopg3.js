import React, { useState } from 'react';
import './Videopg-3.css';
import img1 from '../img/HimachalPradesh.png';
import img2 from '../img/Uttarakhand.png';
import img3 from '../img/Kashmir.png';
import img4 from '../img/kerala.png';
import img5 from '../img/goa.png';
import img6 from '../img/karnataka.png';
import img7 from '../img/manali.png';
import img8 from '../img/ladakh.png';
import img9 from '../img/kedarnath.png';
import img10 from '../img/badrinath.png';
import img11 from '../img/rishikesh.png';
import img12 from '../img/meghalaya.png';
import img13 from '../img/rajasthan.png';
import video from '../img/intern1.mp4';

const images = [
  { src: img1, text: "Himachal Pradesh" },
  { src: img2, text: "Uttarakhand" },
  { src: img3, text: "Kashmir" },
  { src: img4, text: "kerala" },
  { src: img5, text: "Goa" },
  { src: img6, text: "Karnataka" },
  { src: img7, text: "Manali" },
  { src: img8, text: "Ladakh" },
  { src: img9, text: "Kedarnath" },
  { src: img10, text: "Badrinath" },
  { src: img11, text: "Rishikesh" },
  { src: img12, text: "Meghalaya" },
  { src: img13, text: "Rajasthan" },
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
    <div className="wrpper-2">
      <div className="video-div-2">
        <video className="video-2" src={video} autoPlay loop muted></video>
        <h1 className="video-heading-2">Explore India</h1>
      </div>
      <div className="slider-2">
        <button onClick={prevSlide} className="arrow-2 left-2">
          <i className="fa-solid fa-circle-left"></i>
        </button>
        <div className="slider-wrapper-2">
          {images.slice(index, index + 5).map((img, i) => (
            <div key={i} className="slide-2">
              <img src={img.src} alt={`Slide ${i}`} />
              <h1>{img.text}</h1> {/* Display the corresponding text */}
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="arrow-2 right-2">
          <i className="fa-solid fa-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;