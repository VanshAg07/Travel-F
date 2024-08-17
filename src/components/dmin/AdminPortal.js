import React, { useState } from 'react';
import AddDetails from './AddDetails';
import UserDetails from './UserDetails';

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState('user-details');

  return (
    <div className="flex h-screen">
      {/* Left Side Navigation Bar */}
      <nav className="w-1/4 h-full bg-gray-800 text-white fixed">
        <ul className="space-y-4 p-4">
          <li>
            <button
              onClick={() => setActiveTab('user-details')}
              className="block w-full text-left py-2 px-4 hover:bg-gray-700"
            >
              User Details
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('add-details')}
              className="block w-full text-left py-2 px-4 hover:bg-gray-700"
            >
              Add Details
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      {/* <div className="ml-1/4 w-3/4 p-8">
        {activeTab === 'user-details' && <UserDetails />}
        {activeTab === 'add-details' && <AddDetails />}
      </div> */}
    </div>
  );
};

export default AdminPortal;
