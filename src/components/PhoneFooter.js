import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaPlane, FaSearch, FaPhoneAlt } from 'react-icons/fa'; // Importing icons
import './Phonefooter.css'; // Ensure you have the CSS in this file

const PhoneFooterr = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default active item
  const [menuPosition, setMenuPosition] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    // Update the position of the indicator when the component mounts or activeIndex changes
    const menuItems = menuRef.current.querySelectorAll('.sc-menu-item');
    const currentElement = menuItems[activeIndex];

    if (currentElement) {
      const newPosition = currentElement.offsetLeft - 16;
      setMenuPosition(newPosition);
    }
  }, [activeIndex]);

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="sc-bottom-bar" ref={menuRef} style={{ backgroundPosition: `${menuPosition - 8}px` }}>
      <a className={`sc-menu-item ${activeIndex === 0 ? 'sc-current' : ''}`} onClick={() => handleMenuClick(0)}>
         <FaPlane />{/* Home Icon */}
        <span className="sc-menu-label">Trips</span> {/* Label for Home */}
      </a>
      <a className={`sc-menu-item ${activeIndex === 1 ? 'sc-current' : ''}`} onClick={() => handleMenuClick(1)}>
      <FaHome /> {/* Trip Icon */}
        <span className="sc-menu-label">Home</span> {/* Label for Trips */}
      </a>
      <a className={`sc-menu-item ${activeIndex === 2 ? 'sc-current' : ''}`} onClick={() => handleMenuClick(2)}>
        <FaSearch /> {/* Search Icon */}
        <span className="sc-menu-label">Search</span> {/* Label for Search */}
      </a>
      <div className="sc-nav-indicator" style={{ left: `${menuPosition}px` }}></div>
      <a className={`sc-menu-item ${activeIndex === 3 ? 'sc-current' : ''}`} onClick={() => handleMenuClick(3)}>
        <FaPhoneAlt /> {/* Contact Icon */}
        <span className="sc-menu-label">Contact</span> {/* Label for Contact */}
      </a>
    </div>
  );
};

export default PhoneFooterr;
