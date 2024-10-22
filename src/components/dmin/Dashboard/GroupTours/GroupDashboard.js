import React, { useState } from "react";
import GroupTours from "./GroupTours";
import GroupDetails from "./GroupDetails";

const GroupDashboard = () => {
  const [activeTab, setActiveTab] = useState("GroupTours");

  return (
    <div className="p-8">
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mr-2 rounded-t-md ${
            activeTab === "GroupTours"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("GroupTours")}
        >
          Group Tours
        </button>
        <button
          className={`px-4 py-2 rounded-t-md ${
            activeTab === "GroupDetails"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("GroupDetails")}
        >
          Group Details
        </button>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        {activeTab === "GroupTours" && <GroupTours />}
        {activeTab === "GroupDetails" && <GroupDetails />}
      </div>
    </div>
  );
};

export default GroupDashboard;
