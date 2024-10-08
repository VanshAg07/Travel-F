import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Videopg-3.css';
import img1 from '../img/HimachalPradesh.png';
import img2 from '../img/Uttarakhand.png';
import img3 from '../img/Kashmir.png';
import img4 from '../img/kerala.png';
import img5 from '../img/ladakh.png';
import img6 from '../img/kedarnath.png';
import img7 from '../img/badrinath.png';
import img8 from '../img/sikkim.jpg';
import img9 from '../img/meghalaya.png';
import img10 from '../img/rajasthan.png';
import video from '../img/india.mp4';

const images = [
  { src: img1, text: "Himachal Pradesh", route: "/place/Himachal%20Pradesh" },
  { src: img2, text: "Uttarakhand", route: "/place/Uttarakhand" },
  { src: img3, text: "Kashmir" , route: "/place/Kashmir"},
  { src: img4, text: "kerala", route: "/place/Kerala" },
  { src: img5, text: "Ladakh", route: "/place/Ladakh" },
  { src: img6, text: "Andaman", route: "/place/Andaman" },
  { src: img7, text: "Spiti" , route: "/place/Spiti"},
  { src: img8, text: "Sikkim", route: "/place/Sikkim" },
  { src: img9, text: "Meghalaya", route: "/place/Meghalaya" },
  { src: img10, text: "Rajasthan", route: "/place/Rajasthan" },
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
    <div className="wrpper-2">
      <div className="video-div-2">
       <Link to="/National"> <video className="video-2" src={video} autoPlay loop muted></video></Link>
        <h1 className="video-heading-2">Explore India</h1>
      </div>
      <div className="slider-2">
        <button onClick={prevSlide} className="arrow-2 left-2">
          <i className="fa-solid fa-circle-left"></i>
        </button>
        <div className="slider-wrapper-2">
        {images.slice(index, index + getNumberOfImages()).map((img, i) => (
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