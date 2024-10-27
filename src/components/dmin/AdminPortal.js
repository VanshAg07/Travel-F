import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UserDetails from "./UserDetails";
import National from "./National";
import Bookings from "./Bookings/Bookings";
import HomeIntern from "./AddInternational/HomeIntern";
import AddHoneymoon from "./Honeymoon/AddHoneymoon";
import AddWeekend from "./Weekends/AddWeekend";
import NationalEdit from "./EditPackage/NationalEdit";
import Dashboard from "./Dashboard";
import GroupDashboard from "./Dashboard/GroupTours/GroupDashboard";
import BlogForm from "./Blogs/BlogForm";
import InternationalEdit from "./EditPackage/InternationalEdit";
import HoneymoonEdit from "./EditPackage/HoneymoonEdit";
import WeekendEdit from "./EditPackage/WeekendEdit";
import BlogsEdit from "./EditPackage/BlogsEdit";
import GroupToursEdit from "./EditPackage/GroupToursEdit";
import GroupDetailsEdit from "./EditPackage/GroupDetailsEdit";
import OffersHome from "./OffersHome";
import EditOffer from "./EditPackage/EditOffer";

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [openSubmenu, setOpenSubmenu] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post("https://api.travello10.com/api/admin/logout")
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  const handleMainTabClick = (tabName) => {
    setActiveTab(tabName);
    setOpenSubmenu(""); // Close any open submenu when a main tab is clicked
  };

  const handleSubmenuToggle = (submenuName) => {
    // Toggle the submenu or open it if not already open
    setOpenSubmenu((prev) => (prev === submenuName ? "" : submenuName));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <nav className="w-1/6 h-full bg-gray-900 text-white fixed top-0 left-0 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <ul className="space-y-2 p-4">
            <li>
              <button
                onClick={() => handleMainTabClick("home")}
                className={`block w-full text-left py-3 px-4 rounded-lg ${
                  activeTab === "home" ? "bg-red-600" : "hover:bg-gray-700"
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMainTabClick("user-details")}
                className={`block w-full text-left py-3 px-4 rounded-lg ${
                  activeTab === "user-details" ? "bg-red-600" : "hover:bg-gray-700"
                }`}
              >
                My Users
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMainTabClick("bookings")}
                className={`block w-full text-left py-3 px-4 rounded-lg ${
                  activeTab === "bookings" ? "bg-red-600" : "hover:bg-gray-700"
                }`}
              >
                My Bookings
              </button>
            </li>
            <li>
              <div>
                <button
                  onClick={() => handleSubmenuToggle("add-packages")}
                  className={`block w-full text-left py-3 px-4 rounded-lg ${
                    activeTab.startsWith("add")
                      ? "bg-red-600"
                      : "hover:bg-gray-700"
                  }`}
                >
                  Add Packages
                </button>
                {openSubmenu === "add-packages" && (
                  <ul className="pl-6 mt-2 space-y-2">
                    <li
                      onClick={() => setActiveTab("add-national")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "add-national"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      National
                    </li>
                    <li
                      onClick={() => setActiveTab("add-international")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "add-international"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      International
                    </li>
                    <li
                      onClick={() => setActiveTab("add-weekend")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "add-weekend"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      Weekend
                    </li>
                    <li
                      onClick={() => setActiveTab("add-honeymoon")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "add-honeymoon"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      Honeymoon
                    </li>
                    <li
                      onClick={() => setActiveTab("add-offers")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "add-offers"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      Offers
                    </li>
                    <li
                      onClick={() => setActiveTab("add-group-tours")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "add-group-tours"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      Group Tour
                    </li>
                    <li
                      onClick={() => setActiveTab("add-blogs")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "add-blogs"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      Blogs
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div>
                <button
                  onClick={() => handleSubmenuToggle("edit-packages")}
                  className={`block w-full text-left py-3 px-4 rounded-lg ${
                    activeTab.startsWith("edit")
                      ? "bg-red-600"
                      : "hover:bg-gray-700"
                  }`}
                >
                  Edit Packages
                </button>
                {openSubmenu === "edit-packages" && (
                  <ul className="pl-6 mt-2 space-y-2">
                    <li
                      onClick={() => setActiveTab("edit-national")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "edit-national"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      National
                    </li>
                    <li
                      onClick={() => setActiveTab("edit-international")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "edit-international"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      International
                    </li>
                    <li
                      onClick={() => setActiveTab("edit-weekend")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "edit-weekend"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      Weekend
                    </li>
                    <li
                      onClick={() => setActiveTab("edit-honeymoon")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "edit-honeymoon"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      Honeymoon
                    </li>
                    <li
                      onClick={() => setActiveTab("edit-blogs")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "edit-blogs"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      Blogs
                    </li>
                    <li
                      onClick={() => setActiveTab("edit-offer")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "edit-offer"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      Offer
                    </li>
                    <li
                      onClick={() => setActiveTab("edit-group-tours")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "edit-group-tours"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      Group Tours
                    </li>
                    <li
                      onClick={() => setActiveTab("edit-group-details")}
                      className={`py-2 px-4 rounded-lg cursor-pointer ${
                        activeTab === "edit-group-details"
                          ? "bg-gray-700"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      Group Details
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={handleLogout}
            className="block w-[85%] text-center py-4 px-4 bg-red-600 hover:bg-red-700 mt-auto mb-4 rounded-lg"
          >
            Logout
          </button>
        </div>
      </nav>
      {/* Main Content Area */}
      <div className="ml-[17%] w-[80%] p-8">
        {activeTab === "user-details" && <UserDetails />}
        {activeTab === "home" && <Dashboard />}
        {activeTab === "add-national" && <National />}
        {activeTab === "add-international" && <HomeIntern />}
        {activeTab === "bookings" && <Bookings />}
        {activeTab === "add-honeymoon" && <AddHoneymoon />}
        {activeTab === "add-offers" && <OffersHome />}
        {activeTab === "add-weekend" && <AddWeekend />}
        {activeTab === "edit-national" && <NationalEdit />}
        {activeTab === "edit-international" && <InternationalEdit />}
        {activeTab === "edit-honeymoon" && <HoneymoonEdit />}
        {activeTab === "edit-weekend" && <WeekendEdit />}
        {activeTab === "edit-offer" && <EditOffer />}
        {activeTab === "edit-group-tours" && <GroupToursEdit />}
        {activeTab === "edit-group-details" && <GroupDetailsEdit />}
        {activeTab === "edit-blogs" && <BlogsEdit />}
        {activeTab === "add-group-tours" && <GroupDashboard />}
        {activeTab === "add-blogs" && <BlogForm />}
        {/* Add additional content components as needed */}
      </div>
    </div>
  );
};

export default AdminPortal;
