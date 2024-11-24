import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const Popup2 = ({ onClose }) => {
  const navigate = useNavigate();
  const [popupData, setPopupData] = useState(null);

  const fetchPopup = async () => {
    try {
      const res = await fetch("https://api.travello10.com/api/popup/assist-user");
      const data = await res.json();
      setPopupData(data[0]);
    } catch (error) {
      console.error("Error fetching popup data:", error);
    }
  };

  useEffect(() => {
    fetchPopup();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
      interestedPlaces: e.target.interestedPlaces.value,
    };

    try {
      const res = await axios.post(
        "https://api.travello10.com/api/popup/assist-form",
        formData
      );
      console.log("Form submitted successfully:", res);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!popupData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#ffffff7f] bg-opacity-70 z-50 p-4">
      <div className="bg-white mt-10 rounded-lg h-[70vh] shadow-lg relative flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors duration-200 z-10"
        >
          <AiOutlineClose className="h-6 w-6 text-gray-600" />
        </button>

        {/* Left side - Image */}
        <div className="md:w-1/2 h-80 md:h-auto">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${popupData.image[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Right side - Content */}
        <div className="md:w-1/2 p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-cyan-600">
            {popupData.title}
          </h2>

          <form onSubmit={submitForm} className="flex flex-col space-y-4 pt-10">
  <input
    type="text"
    name="name"
    placeholder="Name"
    className="px-4 py-2 text-sm border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Email Address"
    className="px-4 py-2 text-sm border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
    required
  />
  <input
    type="number"
    name="number"
    placeholder="Phone Number"
    className="px-4 py-2 text-sm border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
    required
  />
  <input
    type="text"
    name="interestedPlaces"
    placeholder="Interested Places"
    className="px-4 py-2 text-sm border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
    required
  />

  <button
    type="submit"
    className="mt-4 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300 shadow-md"
  >
    Submit
  </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default Popup2;