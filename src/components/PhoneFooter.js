import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineFlag,
  AiOutlineSearch,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import TripsModal from "./TripsModal";
import ContactModal from "./ContactModal";
import SearchModal from "./SearchModal"
import "./Phonefooter.css";

function Footer() {
  const [isTripsModalOpen, setTripsModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  const openTripsModal = () => setTripsModalOpen(true);
  const closeTripsModal = () => setTripsModalOpen(false);

  const openContactModal = () => setContactModalOpen(true);
  const closeContactModal = () => setContactModalOpen(false);

  const openSearchModal = () => setSearchModalOpen(true);
  const closeSearchModal = () => setSearchModalOpen(false);

  return (
    <>
      <div className="fixed phone-z bottom-0 left-0 right-0 bg-black text-white flex justify-around items-center p-2 hide-above-425px">
        <Link to="/">
          <div className="flex flex-col items-center text-white">
            <AiOutlineHome className="text-xl" />
            <span className="text-xs">Home</span>
          </div>
        </Link>
        <div
          className="flex flex-col items-center text-white"
          onClick={openTripsModal}
        >
          <AiOutlineFlag className="text-xl" />
          <span className="text-xs">Trips</span>
        </div>
        <Link to="/reel-slider">
          <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center -mt-6">
            <FaPlay className="text-2xl" />
          </div>
        </Link>

        <div
          className="flex flex-col items-center text-white"
          onClick={openSearchModal}
        >
          <AiOutlineSearch className="text-xl" />
          <span className="text-xs">Search</span>
        </div>
        <div
          className="flex flex-col items-center text-white"
          onClick={openContactModal}
        >
          <AiOutlinePhone className="text-xl transform rotate-90" />
          <span className="text-xs">Contact</span>
        </div>
      </div>

      <TripsModal isOpen={isTripsModalOpen} onClose={closeTripsModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
    </>
  );
}

export default Footer;
