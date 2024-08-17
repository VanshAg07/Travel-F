import React from 'react';
import './Glry.css';
import image1 from './img/india.jpg';
import image2 from './img/bali.jpg';
import image3 from './img/Europe.jpg';
import image4 from './img/kashmir.jpg';
import image5 from './img/kerala.jpg';
import image6 from './img/india.jpg';
import image7 from './img/bali.jpg';
import image8 from './img/Europe.jpg';
import image9 from './img/kashmir.jpg';
import image10 from './img/kerala.jpg';
import Nav from './components/Nav';
import Footer from './Footer';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const Glry = () => {
    return (
        <div className='glry-wr'>
            <Nav />
            <h2 className="gallery-heading">Our Stunning Gallery</h2>
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Gallery Image ${index + 1}`} />
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Glry;
