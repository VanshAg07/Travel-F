import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import travel_img from "../img/logo_cropped.png";
import "./Nav.css";
import { RiHome4Line } from "react-icons/ri";
import { BsSuitcaseFill } from "react-icons/bs";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { FaBloggerB } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [username, setUsername] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const loggedIn = window.localStorage.getItem("loggedIn");
    const storedUsername = window.localStorage.getItem("username");
    if (loggedIn) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("loggedIn");
    setUsername(null);
    window.location.href = "/"; // Redirect to home after logout
  };

  return (
    <div className="nav-wrapper">
      <div>
        <Link to="/">
          <img src={travel_img} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div className={`nav-links  ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-row justify-center mr-10 items-center gap-1">
            <RiHome4Line />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/National" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-row justify-center items-center mr-10 gap-1">
            <BsSuitcaseFill />
            <p>India</p>
          </div>
        </Link>
        <Link to="/intern" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-row justify-center mr-10 items-center gap-1">
            <MdOutlineAirplanemodeActive />
            <p>International</p>
          </div>
        </Link>

        <Link to="/Review" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-row justify-center mr-10 items-center gap-1">
            <MdOutlineAirplanemodeActive />
            <p>Corporate Tours</p>
          </div>
        </Link>
        <Link to="/Cont" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-row justify-center mr-10 items-center gap-1">
            <RiContactsBook3Line />
            <p>Contact</p>
          </div>
        </Link>
        <Link to="/Blog" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-row justify-center mr-10 items-center gap-1">
          <FaBloggerB/>
            <p>Blog</p>
          </div>
        </Link>
        <Link to="/Glry" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-row justify-center mr-10 items-center gap-1">
            <GrGallery />
            <p>Gallery</p>
          </div>
        </Link>
        {username ? (
          <>
            <div className="username-display">Welcome, <strong>{username}!</strong></div>
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

