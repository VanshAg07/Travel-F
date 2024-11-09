import React, { useEffect, useRef, useState } from "react";
import "./MobileHomeGallery.css";
import axios from "axios";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"; // Import icons

const MobileHomeGallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const galleryCenterRef = useRef(null);
  const [rotation, setRotation] = useState(0);

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

  const handlePrevious = () => {
    setRotation((prevRotation) => prevRotation - 30);
  };

  const handleNext = () => {
    setRotation((prevRotation) => prevRotation + 30);
  };

  const handleWheel = (event) => {
    setRotation((prevRotation) => prevRotation + (event.deltaY < 0 ? -10 : 10));
  };

  return (
    <div className="relative">
      <div className="flex relative flex-row">
        <div className="arrow-wrapper">
          <div className="arrow-glry arrow-left-glry" onClick={handlePrevious}>
            <FaChevronCircleLeft className="text-lg" /> {/* Use left icon */}
          </div>
          <div className="gallery-wrap" onWheel={handleWheel}>
            {/* Heading */}
            <h1 className="text-center md:text-2xl pt-4 text-xl lg:text-4xl font-bold mb-4">
              PORTALS TO ADVENTURE
            </h1>
            <p className="text-center md:text-xl text-lg homeglry-p font-semibold mb-2 text-gray-800">
              Moments In Motion
            </p>
            <div
              className="gallery-center"
              ref={galleryCenterRef}
              style={{
                transform: `translate(-50%, -50%) perspective(1200px) rotateY(${rotation}deg)`,
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  className="gallery-box"
                  key={index}
                  style={{
                    transform: `translate(-50%, -50%) rotateY(${
                      index * -30
                    }deg) translateZ(-1000px)`,
                  }}
                >
                  <a>
                    <img
                      className="img-glry"
                      src={image}
                      alt={`Image ${index + 1}`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="arrow-wrapper">
          <div className="arrow-glry arrow-right-glry" onClick={handleNext}>
            <FaChevronCircleRight className="text-lg" /> {/* Use right icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHomeGallery;
