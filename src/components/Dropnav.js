import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Importing Link for routing
import { FaChevronDown } from 'react-icons/fa'; // Importing the dropdown arrow icon
import "./Dropnav.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownLinks = {
    indiaPackages: ["Goa", "Kerala", "Rajasthan", "Himachal Pradesh", "Uttarakhand", "Maharashtra", "Tamil Nadu", "Punjab"],
    internationalPackage: ["USA", "Canada", "Australia", "France", "Germany", "Spain", "Italy", "Japan"],
    weekendTrips: [],
    groupsTours: [],
    corporatePackages: [],
    honeymoonPackages: []
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar-1">
      <ul className="nav-links-1">
        {Object.keys(dropdownLinks).map((key) => (
          <li
            key={key}
            className="nav-item-1"
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
          >
           
            <Link to={key === 'indiaPackages' ? "/national" : key === 'internationalPackage' ? "/intern" : key === 'honeymoonPackages' ? "/Honeymoon" : key === 'corporatePackages' ? "/Corporate" :"#" }>
              {/* Displaying the dropdown arrow icon for all except "Honeymoon Packages" and "Corporate Packages" */}
              {key === 'indiaPackages' ? "India Packages" : 
              key === 'internationalPackage' ? "International Package" : 
              key === 'weekendTrips' ? "Weekend Trips" : 
              key === 'groupsTours' ? "Groups Tours" :
              key === 'corporatePackages' ? "Corporate Packages" :
              key === 'honeymoonPackages' ? "Honeymoon Packages" :
              key.charAt(0).toUpperCase() + key.replace(/([A-Z])/g, ' $1').toLowerCase()}
            </Link>
            {key !== 'honeymoonPackages' && key !== 'corporatePackages' && (
              <FaChevronDown className="dropdown-icon" />
            )}
            {/* Only display the dropdown if there are links available */}
            {activeDropdown === key && dropdownLinks[key].length > 0 && (
              <ul className="dropdown">
                {dropdownLinks[key].map((link, index) => (
                  <li key={index} className="dropdown-item">
                    <Link to={`/place/${link}`}>{link}</Link>
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
