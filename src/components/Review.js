import React from "react";
import "./Review.css"; // This file will contain our styles

// Import images from your local img folder
import img1 from "../img/review1.png";
import img2 from "../img/review2.png";
import img3 from "../img/review3.png";
import img4 from "../img/review4.png";
import img5 from "../img/review5.png";
import img6 from "../img/review6.png";

// Array of links for each image
const links = [
  "https://www.google.com/maps/contrib/111246981183817513719/reviews/@28.5199695,77.03285,12z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/contrib/108265947728680746954/reviews/@20.0107679,80.9364856,5z/data=!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/contrib/107576252700218379342/reviews/@28.6149537,77.024253,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/contrib/114415328720423695195/reviews/@29.7642616,75.5116957,7z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/contrib/100009953611017844363/reviews/@27.3923992,73.9578336,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  "https://www.google.com/maps/contrib/111179409308480648836/reviews/@29.4442085,77.5167109,9z/data=!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
];

const TravelerTestimonials = () => {
  // Array of imported images
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-heading">Hear From Travelers Like You</h2>
      <div className="flex flex-wrap mx-32 justify-center gap-10 ">
        {images.map((image, index) => (
          <div key={index} className="testimonial-image-container">
            <img src={image} alt={`Traveler ${index + 1}`} className="testimonial-image" />
            <a href={links[index]} target="_blank" rel="noopener noreferrer" className="continue-reading-link">Continue Reading</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelerTestimonials;
