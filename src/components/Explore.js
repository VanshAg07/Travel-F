import React from 'react';
import Slider from 'react-slick';
import './Explore.css'; 

import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';

const carouselData = [
  { src: img1, title: 'Corporate Trips' },
  { src: img2, title: 'Romantic Escapes' },
  { src: img3, title: 'International Trips' },
  { src: img4, title: 'Explore India' },
  { src: img5, title: 'Adventure Trails' }
];

const ReflectionCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <h2>Explore</h2>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="image-container">
              <img src={item.src} alt={item.title} />
              <div className="overlay">
                <div className="overlay-text">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReflectionCarousel;