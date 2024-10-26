import React, { useEffect, useRef, useState } from "react";
import "./Homeglry.css";
import axios from "axios";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/gallery/home-galleries"
      );
      setGalleryImages(response.data.images[0].images || []);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };

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
      <h1 className="text-center text-2xl pt-4 sm:text-3xl lg:text-4xl font-bold mb-4">
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
          transform: `translate(-50%, -50%) perspective(3000px) rotateY(${rotation}deg)`,
        }}
      >
        {galleryImages.map((image, index) => (
          <div
            className="gallery-box"
            key={index}
            style={{
              transform: `translate(-50%, -50%) rotateY(${
                index * -28
              }deg) translateZ(-1000px)`,
            }}
            onClick={handleClick}
          >
            <a>
              <img className="img-glry" src={image} alt={`Image ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
