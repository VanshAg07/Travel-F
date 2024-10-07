import React, { useRef, useState } from "react";
import "./Homeglry.css";
import Img1 from "../img/homeglry1.png";
import Img2 from "../img/homeglry2.png";
import Img3 from "../img/homeglry3.png";
import Img4 from "../img/homeglry4.png";
import Img5 from "../img/homeglry5.png";
import Img6 from "../img/homeglry6.png";
import Img7 from "../img/homeglry7.png";
import Img8 from "../img/homeglry8.png";
import Img9 from "../img/homeglry9.png";
import Img10 from "../img/homeglry10.png";
import Img11 from "../img/homeglry11.png";
import Img12 from "../img/homeglry12.png";
import Img13 from "../img/homeglry13.png";
// import Img14 from "../img/homeglry14.png";

const images = [
  { src: Img1, alt: "Image 1" },
  { src: Img2, alt: "Image 2" },
  { src: Img3, alt: "Image 3" },
  { src: Img4, alt: "Image 4" },
  { src: Img5, alt: "Image 5" },
  { src: Img6, alt: "Image 6" },
  { src: Img7, alt: "Image 7" },
  { src: Img8, alt: "Image 8" },
  { src: Img9, alt: "Image 9" },
  { src: Img10, alt: "Image 10" },
  { src: Img11, alt: "Image 11" },
  { src: Img12, alt: "Image 12" },
  { src: Img13, alt: "Image 13" },
  // { src: Img14, alt: "Image 14" },
];

const Gallery = () => {
  const galleryCenterRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  // Rotate left (previous)
  const handlePrevious = () => {
    setRotation((prevRotation) => prevRotation + 30);
  };

  // Rotate right (next)
  const handleNext = () => {
    setRotation((prevRotation) => prevRotation - 30);
  };

  // Handle image click to rotate gallery
  const handleClick = () => {
    setRotation((prevRotation) => prevRotation + 30);
  };

  // Handle mouse wheel scroll to rotate gallery
  const handleWheel = (event) => {
    setRotation((prevRotation) => prevRotation + (event.deltaY < 0 ? -1 : 1));
  };

  return (
    <div className="gallery-wrap" onWheel={handleWheel}>
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold mb-4 pt-8 homeglry-h text-gray-800">
        PORTALS TO ADVENTURE
      </h1>
      <p className="text-center text-xl homeglry-p font-bold mb-2 text-gray-800">
        Moments In Motion
      </p>

      <div className="arrow-wrapper">
        <div className="arrow-glry arrow-left-glry" onClick={handlePrevious}>
          &#9664;
        </div>
        <div className="arrow-glry arrow-right-glry" onClick={handleNext}>
          &#9654;
        </div>
      </div>

      <div
        className="gallery-center"
        ref={galleryCenterRef}
        style={{
          transform: `translate(-50%, -50%) perspective(2500px) rotateY(${rotation}deg)`,
        }}
      >
        {images.map((image, index) => (
          <div
            className="gallery-box"
            key={index}
            style={{
              transform: `translate(-50%, -50%) rotateY(${index * -28}deg) translateZ(-1000px)`,
            }}
            onClick={handleClick}
          >
            <a>
              <img className="img-glry" src={image.src} alt={image.alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
