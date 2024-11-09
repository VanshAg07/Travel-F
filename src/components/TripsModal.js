import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./TripsModal.css";
import axios from "axios";

function TripsModal({ isOpen, onClose }) {
  const [adventures, setAdventures] = useState([]);

  const fetchAdventures = async () => {
    try {
      const res = await axios.get(
        "https://api.travello10.com/api/home/explore-adventure"
      );
      setAdventures(res.data);
    } catch (error) {
      console.error("Error fetching adventures:", error);
    }
  };

  useEffect(() => {
    fetchAdventures();
  }, []);

  // Function to map adventure titles to corresponding routes
  const getAdventureLink = (title) => {
    switch (title) {
      case "Experience India":
        return "/national";
      case "Weekend Trips":
        return "/Weekends";
      case "Group Trips":
        return "/Grouptours";
      case "International":
        return "/intern";
      case "Romantic Escapes":
        return "/Honeymoon";
      case "Corporate Trips":
        return "/Corporate";
      case "Team Adventures":
        return "/schooltour";
      default:
        return "#";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed trip-z inset-0 flex justify-center items-end bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-t-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Choose A Trip</h2>
          <button onClick={onClose} className="text-gray-500">
            <AiOutlineClose className="text-xl" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {adventures.map((adventure) => (
            <a
              key={adventure._id}
              href={getAdventureLink(adventure.title)}
              className="flex flex-col items-center p-2 rounded"
            >
              <img
                src={adventure.image[0]} // Assuming there's only one image in the array
                alt={adventure.title}
                className="w-16 h-16 object-cover rounded-full"
              />
              <span className="text-sm mt-2">{adventure.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TripsModal;
