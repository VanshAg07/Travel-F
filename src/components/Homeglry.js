import React, { useRef, useState } from "react";
import "./Homeglry.css";
import Image1 from "../img/dubai.jpg";

const images = [
  { src: Image1, alt: "Image 1" },
  { src: Image1, alt: "Image 2" },
  { src: Image1, alt: "Image 3" },
  { src: Image1, alt: "Image 4" },
  { src: Image1, alt: "Image 5" },
  { src: Image1, alt: "Image 6" },
  { src: Image1, alt: "Image 7" },
  { src: Image1, alt: "Image 8" },
  { src: Image1, alt: "Image 9" },
  { src: Image1, alt: "Image 10" },
  { src: Image1, alt: "Image 11" },
  { src: Image1, alt: "Image 12" },
  { src: Image1, alt: "Image 13" },
  { src: Image1, alt: "Image 14" },
  { src: Image1, alt: "Image 15" },
  { src: Image1, alt: "Image 16" },
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
    setRotation((prevRotation) => prevRotation + 0);
  };

  // Handle mouse wheel scroll to rotate gallery
  const handleWheel = (event) => {
    setRotation((prevRotation) => prevRotation + (event.deltaY < 0 ? -1 : 1));
  };

  return (
    <div className="gallery-wrap" onWheel={handleWheel}>
      {/* Heading */}
      <h1 className="text-center text-4xl font-bold mb-4 pt-8 text-gray-800">
        PORTALS TO ADVENTURE
      </h1>
      <p className="text-center text-xl font-bold mb-2 text-gray-800">
        Moments In Motion
      </p>

      {/* Arrow Wrapper - Positioned on the top-right corner */}
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
              transform: `translate(-50%, -50%) rotateY(${index * -30}deg) translateZ(-1000px)`,
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
