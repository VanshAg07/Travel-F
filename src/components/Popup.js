import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./Popup2.css"
const Popup1 = ({ onClose }) => {
  const [popupData, setPopupData] = useState(null);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/Signup");
  };

  const fetchPopup = async () => {
    try {
      const res = await fetch("https://api.travelo10.com/api/popup/signin-user");
      const data = await res.json();
      setPopupData(data[0]);
    } catch (error) {
      console.error("Error fetching popup data:", error);
    }
  };

  useEffect(() => {
    fetchPopup();
  }, []);

  if (!popupData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed popup-wr inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
      <div className="rounded-lg md:mt-0 -mt-7 relative z-50 transition-transform transform scale-105 hover:scale-100 overflow-hidden w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute mt-28 md:mt-40  top-2 right-2 rounded-full p-2 transition-colors duration-200 z-10"
        >
          <AiOutlineClose className="h-6 w-6 text-black" />
        </button>

        <div className="flex flex-col sm:flex-row">
          {/* Image Section */}
          <div className="w-full mt-28 sm:w-1/2">
            <div
              className="w-full h-80 rounded-3xl sm:h-[350px]"
              style={{
                backgroundImage: `url(${popupData.image[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:rounded-r-3xl sm:w-1/2 p-8 bg-white bg-opacity-95 flex -mt-14 md:mt-40 flex-col justify-start h-[200px] md:h-[250px]">
            <h2 className="text-2xl font-bold mb-4 text-cyan-600">
              {popupData.title}
            </h2>
            <p className="mb-6 text-gray-700">{popupData.subTitle}</p>
            <button
              onClick={handleSignInClick}
              className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300 shadow-md w-full sm:w-auto"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup1;
