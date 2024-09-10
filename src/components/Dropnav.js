import React, { useState } from "react";
import { FaChevronDown } from 'react-icons/fa'; // Importing the dropdown arrow icon
import "./Dropnav.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownLinks = {
    international: ["USA", "Canada", "Australia", "France", "Germany", "Spain", "Italy", "Japan"],
    india: ["Goa", "Kerala", "Rajasthan", "Himachal Pradesh", "Uttarakhand", "Maharashtra", "Tamil Nadu", "Punjab"],
    corporate: [],
    honeymoon: []
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {Object.keys(dropdownLinks).map((key) => (
          <li
            key={key}
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Displaying the dropdown arrow icon next to "International" and "India" */}
            {key.charAt(0).toUpperCase() + key.slice(1)}
            {(key === 'international' || key === 'india') && (
              <FaChevronDown className="dropdown-icon" />
            )}
            {/* Only display the dropdown if there are links available */}
            {activeDropdown === key && dropdownLinks[key].length > 0 && (
              <ul className="dropdown">
                {dropdownLinks[key].map((link, index) => (
                  <li key={index} className="dropdown-item">
                    {link}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

