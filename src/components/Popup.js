import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Popup1 = ({ onClose }) => {
  const [popupData, setPopupData] = useState(null);
  const navigate = useNavigate();

  // Function to handle sign-in button click
  const handleSignInClick = () => {
    navigate("/Signup");
  };

  // Fetch popup data from API
  const fetchPopup = async () => {
    try {
      const res = await fetch("https://api.travello10.com/api/popup/signin-user");
      const data = await res.json();
      setPopupData(data[0]); // Assuming the response is an array with a single object
    } catch (error) {
      console.error("Error fetching popup data:", error);
    }
  };

  useEffect(() => {
    fetchPopup();
  }, []);

  if (!popupData) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
      <div className="bg-zinc-200 p-8 rounded-lg shadow-lg text-center relative transition-transform transform scale-105 hover:scale-100 overflow-hidden sm:max-w-[80%] w-full md:w-auto mx-4 mt-2 md:mt-20">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors duration-200 z-10"
        >
          <AiOutlineClose className="h-6 w-6 text-gray-600" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-cyan-600 z-10">
          {popupData.title} {/* Display title dynamically */}
        </h2>
        <p className="mb-6 text-gray-700 z-10">
          {popupData.subTitle} {/* Display subtitle dynamically */}
        </p>

        <div
          className="relative mb-6 h-64 w-full rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${popupData.image[0]})`, // Display image dynamically
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <button
          onClick={handleSignInClick}
          className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300 shadow-md z-10"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Popup1;
