import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import AddDetails from "./AddDetails";
import UserDetails from "./UserDetails";
import BeautifulPlaces from "./BeautifulPlaces";
import BestActivities from "./BestActivities";
import RichFlavour from "./RichFlavour";
import Shop from "./Shop";
import National from "./National";
import Bookings from "./Bookings/Bookings";

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState("user-details");
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post("http://localhost:5000/api/admin/logout")
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  return (
    <div className="flex h-screen">
      <nav className="w-1/6 h-full bg-black text-white fixed top-0 left-0 flex flex-col">
        <ul className="flex-1 space-y-4 p-4">
          <li>
            <button
              onClick={() => setActiveTab("user-details")}
              className={`block w-full text-left py-4 px-4 ${
                activeTab === "user-details"
                  ? "bg-red-600"
                  : "hover:bg-gray-700"
              }`}
            >
              User Details
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("national-packages")}
              className={`block w-full text-left py-4 px-4 ${
                activeTab === "national-packages"
                  ? "bg-red-600"
                  : "hover:bg-gray-700"
              }`}
            >
              National Packages
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("add-user")}
              className={`block w-full text-left py-4 px-4 ${
                activeTab === "add-user" ? "bg-red-600" : "hover:bg-gray-700"
              }`}
            >
              Add User
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("bookings")}
              className={`block w-full text-left py-4 px-4 ${
                activeTab === "bookings"
                  ? "bg-red-600"
                  : "hover:bg-gray-700"
              }`}
            >
              Bookings
            </button>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className={`block w-full text-left mt-auto mb-4 py-4 px-4 ${
            activeTab === "logout" ? "bg-red-600" : "hover:bg-gray-700"
          }`}
        >
          Logout
        </button>
      </nav>
      <div className="ml-[25%] w-[75%] p-8">
        {activeTab === "user-details" && <UserDetails />}
        {activeTab === "national-packages" && <National />}
        {activeTab === "bookings" && <Bookings />}
        {activeTab === "add-user" && <div>Add User Content</div>}
      </div>
    </div>
  );
};

export default AdminPortal;