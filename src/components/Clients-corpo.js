import React from 'react';
import './Clients-corpo.css';

// Import images from src folder
import image1 from '../img/rishikesh.png';
import image2 from '../img/ujji.jpg';
import image3 from '../img/rishikesh.png';
import image4 from '../img/rishikesh.png';
import image5 from '../img/rishikesh.png';
import image6 from '../img/rishikesh.png';
import image7 from '../img/rishikesh.png';
import image8 from '../img/rishikesh.png';
import image9 from '../img/rishikesh.png';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  // ...add additional images here if needed
];

const ContinuousScroll = () => {
  // Repeat the images multiple times to ensure seamless scrolling
  const repeatedImages = [...images, ...images, ...images]; // Adjust repetition as needed

  return (
    <div className="scroll-container pt-8 pl-8 pr-8 pb-2 bg-white text-center">
      <h2 className="text-xl md:text-3xl mb-8 lg:text-4xl font-bold leading-tight sm:text-xl">
        Our Clientele <span className="text-gray-800">Hall of Fame</span>
      </h2>

      {/* First row */}
      <div className="animate-scroll rounded-full">
        {repeatedImages.map((image, index) => (
          <img key={index} src={image} alt="Logo" className="w-36 rounded-sm h-auto" />
        ))}
      </div>

      {/* Second row scrolling in the opposite direction */}
      <div className="animate-scroll mt-20">
        {repeatedImages.slice(5).map((image, index) => (  // Start from the second image
          <img key={index} src={image} alt="Logo" className="w-36 h-auto" />
        ))}
      </div>
    </div>
  );
};

export default ContinuousScroll;
