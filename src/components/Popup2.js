import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const Popup2 = ({ onClose }) => {
  const navigate = useNavigate();
  const [popupData, setPopupData] = useState(null);

  // Handle sign-in button click
  const handleSignInClick = () => {
    navigate("/Signup");
  };

  // Fetch popup data from API
  const fetchPopup = async () => {
    try {
      const res = await fetch("https://api.travello10.com/api/popup/assist-user");
      const data = await res.json();
      setPopupData(data[0]); // Assuming the response is an array with a single object
    } catch (error) {
      console.error("Error fetching popup data:", error);
    }
  };

  useEffect(() => {
    fetchPopup();
  }, []);

  // Form submission handler
  const submitForm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = {
      name: e.target.name.value,
      number: e.target.number.value,
      interestedPlaces: e.target.interestedPlaces.value,
    };

    try {
      const res = await axios.post(
        "https://api.travello10.com/api/popup/assist-form",
        formData
      );

      // Close the popup after successful form submission
      onClose(); // Trigger onClose to close the popup
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Show loading message while popup data is being fetched
  if (!popupData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed popup-wr inset-0 md:pb-0 pb-28 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-2">
      <div
        className="bg-zinc-200 pt-4 pl-6 pr-6 pb-4 sm:max-w-[80%] w-[80%] md:w-[30%] rounded-lg shadow-lg text-center relative transition-transform transform scale-105 hover:scale-100 overflow-hidden"
        style={{ marginTop: "100px" }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors duration-200 z-10"
        >
          <AiOutlineClose className="h-6 w-6 text-gray-600" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-cyan-600 z-10">
          {popupData.title} {/* Display dynamic title */}
        </h2>

        {/* Background image */}
        <div
          className="relative mb-4 h-48 sm:h-56 rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${popupData.image[0]})`, // Display dynamic image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Form fields */}
        <form onSubmit={submitForm}>
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="mb-4 w-full px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="number"
              name="number"
              placeholder="Number"
              className="mb-4 w-full px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="text"
              name="interestedPlaces"
              placeholder="Interested Places"
              className="w-full px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-cyan-500 text-white text-sm sm:text-base rounded-lg hover:bg-cyan-600 transition duration-300 shadow-md z-10 w-full sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup2;
