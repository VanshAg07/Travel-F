import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Socialmedia.css'; // Import the CSS file

const SocialMediaIcons = () => {
  return (
    <div className="social-icons">
      <a href="#" className="icon facebook">
        <FaFacebook size={30} />
        <span>Chat on<br/> Facebook</span>
      </a>
      <a href="#" className="icon whatsapp">
        <FaWhatsapp size={30} />
        <span>Chat on <br/> WhatsApp</span>
      </a>
      <a href="#" className="icon instagram">
        <FaInstagram size={30} />
        <span>View on <br/> Instagram</span>
      </a>
      <a href="#" className="icon youtube">
        <FaYoutube size={30} />
        <span>Watch on <br/> YouTube</span>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
