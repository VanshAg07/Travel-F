import React, { useState, useEffect, useRef } from 'react';
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
        <i className="fas fa-list"></i>
      </a>
      <a className={`sc-menu-item ${activeIndex === 1 ? 'sc-current' : ''}`} onClick={() => handleMenuClick(1)}>
        <i className="fas fa-plus"></i>
      </a>
      <a className={`sc-menu-item ${activeIndex === 2 ? 'sc-current' : ''}`} onClick={() => handleMenuClick(2)}>
        <i className="fas fa-plus"></i>
      </a>
      <div className="sc-nav-indicator" style={{ left: `${menuPosition}px` }}></div>
      <a className={`sc-menu-item ${activeIndex === 3 ? 'sc-current' : ''}`} onClick={() => handleMenuClick(3)}>
        <i className="fas fa-calendar-alt"></i>
      </a>
    </div>
  );
};

export default PhoneFooterr;
