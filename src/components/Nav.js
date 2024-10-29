import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import travel_img from "../img/logo.png";
import "./Nav.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import SearchBar from "./Search/SearchBar";
const Nav = () => {
  const [username, setUsername] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [navOffer, setNavOffer] = useState(null);
  const [search, setSearch] = useState([]);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
  };
  useEffect(() => {
    const loggedIn = window.localStorage.getItem("loggedIn");
    const storedUsername = window.localStorage.getItem("username");
    if (loggedIn) {
      setUsername(storedUsername);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("loggedIn");
    setUsername(null);
    window.location.href = "/";
  };

  const fetchNavBar = () => {
    fetch("http://localhost:5000/api/home/nav-offer", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.navOffer && data.navOffer.length > 0) {
          const offer = data.navOffer[0];
          if (offer.status === "active") {
            setNavOffer(offer.title);
          }
        } else {
          throw new Error("Failed to fetch navigation bar data");
        }
      })
      .catch((error) =>
        console.error("Error fetching navigation bar data:", error)
      );
  };

  useEffect(() => {
    fetchNavBar();
  }, []);

  return (
    <div className="nav-wrapper">
      <div className="flex items-center">
        <Link to="/">
          <img src={travel_img} alt="Logo" className="logo" />
        </Link>
        <SearchBar />
      </div>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {!isMobile && (
          <>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/")}
            >
              <div className="flex flex-row justify-center mr-10 items-center gap-1">
                <p>Home</p>
              </div>
            </Link>
            <Link
              to="/Aboutus"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/Aboutus")}
            >
              <div className="flex flex-row justify-center mr-10 items-center gap-1">
                <p>About Us</p>
              </div>
            </Link>
            <Link
              to="/offer"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/offer")}
            >
              {navOffer && (
                <div className="mr-10">
                  <p>{navOffer}</p>
                </div>
              )}
            </Link>
            <Link
              to="/Payments"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/Payments")}
            >
              <div className="flex flex-row justify-center mr-10 items-center gap-1">
                <p>Payments</p>
              </div>
            </Link>
            <Link
              to="/Cont"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/Cont")}
            >
              <div className="flex flex-row justify-center mr-10 items-center gap-1">
                <p>Contact</p>
              </div>
            </Link>
            {/* <Link
              to="/Blog"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/Blog")}
            >
              <div className="flex flex-row justify-center mr-10 items-center gap-1">
                <p>Blogs</p>
              </div>
            </Link> */}
          </>
        )}

        {isMobile && (
          <>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/")}
            >
              <div className="flex flex-row justify-center mr-10 items-center gap-1">
                <p>Home</p>
              </div>
            </Link>
            <Link
              to="/Aboutus"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/Aboutus")}
            >
              <div className="flex flex-row justify-center mr-10 items-center gap-1">
                <p>About Us</p>
              </div>
            </Link>
            <Link to="/national" onClick={() => setIsMenuOpen(false)}>
              <div className="flex flex-row justify-center mr-10 items-center gap-1">
                <p>National</p>
              </div>
            </Link>
            <Link to="/intern" onClick={() => setIsMenuOpen(false)}>
              <div className="flex flex-row justify-center mr-10 items-center gap-1">
                <p>International</p>
              </div>
            </Link>
            <Link to="/Honeymoon" onClick={() => setIsMenuOpen(false)}>
              <div className="flex flex-row justify-center mr-10 items-center gap-1">
                <p>Honeymoon</p>
              </div>
            </Link>
            <Link to="/Corporate" onClick={() => setIsMenuOpen(false)}>
              <div className="flex flex-row justify-center mr-10 items-center gap-1">
                <p>Corporate</p>
              </div>
            </Link>
          </>
        )}
        <div className={`flex justify-center ${isMobile ? "-mt-4" : ""}`}>
          <a href="tel:+918287804197" onClick={() => setIsMenuOpen(false)}>
            <div
              className={`flex flex-row justify-center items-center gap-2 border-2 border-white rounded-full px-4 py-2 ${
                isMobile
                  ? "mr-0 font-semibold text-sm text-blue-600"
                  : "mr-10 text-xs"
              }`}
            >
              <FaPhoneAlt className="transform" />
              <p className="font-semibold">
                {isMobile ? "8287804197" : "+91-8287804197"}
              </p>
            </div>
          </a>
        </div>
        {username ? (
          <>
            <div className="username-display">
              <strong className="mr-2">{username}!</strong>
            </div>
            <button className="Btn-n" onClick={handleLogout}>
              <div className="sign-n">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>
              <div className="text-n">Logout</div>
            </button>
          </>
        ) : (
          <Link to="/Signup" onClick={() => setIsMenuOpen(false)}>
            <a className="cta">
              <span>Sign In</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
