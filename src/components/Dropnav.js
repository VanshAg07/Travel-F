import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link for routing
import { FaChevronDown } from "react-icons/fa"; // Importing the dropdown arrow icon
import "./Dropnav.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownLinks = {
    indiaPackages: [
      "Spiti",
      "Kerala",
      "Rajasthan",
      "Himachal Pradesh",
      "Uttarakhand",
      "Andaman",
      "Sikkim",
      "Kashmir",
      "Ladakh",
      "Meghalaya",
    ],
    internationalPackage: [
      "Dubai",
      "Maldives",
      "Bali",
      "Thailand",
      "Vietnam",
      "Singapore",
    ],
    honeymoonPackages: [
      "Kashmir",
      "Andaman",
      "Kerala",
      "Manali",
      "Bali",
      "Thailand",
      "Maldives",
      "Vietnam",
    ],
    weekendTrips: ["Weekend Getaways"],
    groupsTours: [
      { name: "School Tours", route: "/grouptours" },
      { name: "University Tours", route: "/grouptours" },
      { name: "Sports Tours", route: "/grouptours" },
      { name: "Adventure Tours", route: "/grouptours" },
    ],
    corporatePackages: [],
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar-1">
      <ul className="nav-links-1 ">
        {Object.keys(dropdownLinks).map((key) => (
          <li
            key={key}
            className="nav-item-1"
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to={
                key === "indiaPackages"
                  ? "/national"
                  : key === "internationalPackage"
                  ? "/intern"
                  : key === "honeymoonPackages"
                  ? "/honeymoon"
                  : key === "corporatePackages"
                  ? "/corporate"
                  : key === "groupsTours"
                  ? "/grouptours" // Main link for Groups Tours
                  : key === "weekendTrips"
                  ? "/weekends"
                  : "#"
              }
            >
              {key === "indiaPackages"
                ? "India Packages"
                : key === "internationalPackage"
                ? "International Package"
                : key === "honeymoonPackages"
                ? "Honeymoon Packages"
                : key === "weekendTrips"
                ? "Weekend Trips"
                : key === "groupsTours"
                ? "Groups Tours"
                : key === "corporatePackages"
                ? "Corporate Packages"
                : key.charAt(0).toUpperCase() +
                  key.replace(/([A-Z])/g, " $1").toLowerCase()}
            </Link>
            {key !== "corporatePackages" && (
              <FaChevronDown className="dropdown-icon" />
            )}
            {activeDropdown === key && dropdownLinks[key].length > 0 && (
  <ul className="dropdown">
    {dropdownLinks[key].map((link, index) => (
      <li key={index} className="dropdown-item">
        <Link
          to={
            key === "groupsTours"
              ? link.route // Use the route for groupsTours
              : key === "honeymoonPackages"
              ? `/honeymoon-packages/${link}`
              : key === "indiaPackages"
              ? `/place/${link}`
              : key === "internationalPackage"
              ? `/places/${link}`
              : key === "weekendTrips"
              ? `/weekends`
              : `/place/${link}`
          }
        >
          {key === "groupsTours" ? link.name : link}
        </Link>
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
