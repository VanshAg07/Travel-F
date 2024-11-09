import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import backgroundImage from "../img/popup.jpg";

const Popup3 = ({ onClose }) => {
  const navigate = useNavigate();
  const [popupData, setPopupData] = useState(null);

  // Fetch data for the popup
  const fetchPopup = async () => {
    try {
      const res = await fetch("https://api.travello10.com/api/popup/havent-user");
      const data = await res.json();
      setPopupData(data[0]); // Assuming the response is an array with a single object
    } catch (error) {
      console.error("Error fetching popup data:", error);
    }
  };

  useEffect(() => {
    fetchPopup();
  }, []);

  // Show loading state until popup data is fetched
  if (!popupData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
      <div
        className="bg-zinc-200 p-8 rounded-lg shadow-lg text-center relative transition-transform transform scale-105 hover:scale-100 overflow-hidden sm:max-w-[80%] w-full md:w-auto mx-4"
        style={{ marginTop: "80px" }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors duration-200 z-10"
        >
          <AiOutlineClose className="h-6 w-6 text-gray-600" />{" "}
          {/* Close icon */}
        </button>

        <h2 className="text-2xl font-bold mb-4 text-cyan-600 z-10">
          {popupData.title} {/* Dynamically display title */}
        </h2>

        {/* Background image positioned between text and button */}
        <div
          className="relative mb-6 h-64 w-full rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${popupData.image[0] || backgroundImage})`, // Dynamically load image, fallback to a default image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <p className="mb-6 text-gray-700 z-10">
          {popupData.subTitle} {/* Dynamically display subtitle */}
        </p>
      </div>
    </div>
  );
};

export default Popup3;
