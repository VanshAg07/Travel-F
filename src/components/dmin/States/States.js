import React, { useEffect, useState } from "react";
import axios from "axios";

const States = () => {
  const [weekendStates, setWeekendStates] = useState([]);
  const [internationalStates, setInternationalStates] = useState([]);
  const [nationalStates, setNationalStates] = useState([]);
  const [honeymoonStates, setHoneymoonStates] = useState([]);

  const [newWeekendState, setNewWeekendState] = useState({ name: "" });
  const [newInternationalState, setNewInternationalState] = useState({
    name: "",
  });
  const [newNationalState, setNewNationalState] = useState({ name: "" });
  const [newHoneymoonState, setNewHoneymoonState] = useState({ name: "" });

  const [newState, setNewState] = useState({ name: "" });

  // Fetch states for each category
  const fetchStates = async () => {
    try {
      const [weekendsRes, internationalRes, nationalRes, honeymoonRes] =
        await Promise.all([
          axios.get("http://localhost:5000/api/weekends/states"),
          axios.get("http://localhost:5000/api/admin/states"),
          axios.get("http://localhost:5000/api/trip/states"),
          axios.get("http://localhost:5000/api/honeymoon/states"),
        ]);
      setWeekendStates(weekendsRes.data);
      setInternationalStates(internationalRes.data);
      setNationalStates(nationalRes.data);
      setHoneymoonStates(honeymoonRes.data);
    } catch (error) {
      console.error("Error fetching states", error);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  // Add state functions for each category
  const addWeekendState = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/weekends/states`,
        { stateName: newWeekendState.name }
      );
      if (response.status === 201) {
        setNewWeekendState({ name: "" });
        fetchStates();
      }
    } catch (error) {
      console.error(`Error adding international state`, error);
    }
  };

  const addInternationalState = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/admin/international-state`,
        { stateName: newInternationalState.name }
      );
      if (response.status === 201) {
        setNewInternationalState({ name: "" });
        fetchStates();
      }
    } catch (error) {
      console.error(`Error adding international state`, error);
    }
  };

  const addNationalState = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/trip/state`,
        { stateName: newNationalState.name }
      );
      if (response.status === 201) {
        setNewNationalState({ name: "" });
        fetchStates();
      }
    } catch (error) {
      console.error(`Error adding international state`, error);
    }
  };

  const addHoneymoonState = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/honeymoon/states`,
        { stateName: newHoneymoonState.name }
      );
      if (response.status === 201) {
        setNewHoneymoonState({ name: "" });
        fetchStates();
      }
    } catch (error) {
      console.error(`Error adding international state`, error);
    }
  };

  // Common function to add state
  const addState = async (type, setState) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/${type}/states`,
        { name: newState.name }
      );
      if (response.status === 201) {
        setNewState({ name: "" });
        fetchStates();
      }
    } catch (error) {
      console.error(`Error adding ${type} state`, error);
    }
  };

  // Delete state functions for each category
  const deleteWeekendState = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/weekends/state/${_id}`);
      fetchStates();
    } catch (error) {
      console.error(`Error deleting international state`, error);
    }
  };

  const deleteInternationalState = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/state/${_id}`);
      fetchStates();
    } catch (error) {
      console.error(`Error deleting international state`, error);
    }
  };

  const deleteNationalState = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/trip/state/${_id}`);
      fetchStates();
    } catch (error) {
      console.error(`Error deleting international state`, error);
    }
  };

  const deleteHoneymoonState = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/honeymoon/state/${_id}`);
      fetchStates();
    } catch (error) {
      console.error(`Error deleting international state`, error);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-blue-600">
        Manage States
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* State Category Cards */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Weekends
          </h2>
          <input
            type="text"
            placeholder="Add Weekend State"
            value={newWeekendState.name}
            onChange={(e) => setNewWeekendState({ name: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            onClick={addWeekendState}
            className="bg-blue-500 text-white font-medium rounded-lg p-3 mb-4 w-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Add Place
          </button>
          <h3 className="font-semibold text-gray-700 mb-2">States:</h3>
          <ul className="space-y-2">
            {weekendStates.length > 0 ? (
              weekendStates.map((state) => (
                <li
                  key={state._id}
                  className="flex justify-between items-center bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-colors duration-200 shadow-sm"
                >
                  <span className="text-gray-800">{state.stateName}</span>
                  <button
                    onClick={() => deleteWeekendState(state._id)}
                    className="text-red-500 hover:text-red-600 transition-colors duration-200"
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No states available.</p>
            )}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            National
          </h2>
          <input
            type="text"
            placeholder="Add National State"
            value={newNationalState.name}
            onChange={(e) => setNewNationalState({ name: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            onClick={addNationalState}
            className="bg-blue-500 text-white font-medium rounded-lg p-3 mb-4 w-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Add Place
          </button>
          <h3 className="font-semibold text-gray-700 mb-2">States:</h3>
          <ul className="space-y-2">
            {nationalStates.length > 0 ? (
              nationalStates.map((state) => (
                <li
                  key={state._id}
                  className="flex justify-between items-center bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-colors duration-200 shadow-sm"
                >
                  <span className="text-gray-800">{state.stateName}</span>
                  <button
                    onClick={() => deleteNationalState(state._id)}
                    className="text-red-500 hover:text-red-600 transition-colors duration-200"
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No states available.</p>
            )}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            International
          </h2>
          <input
            type="text"
            placeholder="Add International State"
            value={newInternationalState.name}
            onChange={(e) => setNewInternationalState({ name: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            onClick={addInternationalState}
            className="bg-blue-500 text-white font-medium rounded-lg p-3 mb-4 w-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Add Place
          </button>
          <h3 className="font-semibold text-gray-700 mb-2">States:</h3>
          <ul className="space-y-2">
            {internationalStates.length > 0 ? (
              internationalStates.map((state) => (
                <li
                  key={state._id}
                  className="flex justify-between items-center bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-colors duration-200 shadow-sm"
                >
                  <span className="text-gray-800">{state.stateName}</span>
                  <button
                    onClick={() => deleteInternationalState(state._id)}
                    className="text-red-500 hover:text-red-600 transition-colors duration-200"
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No states available.</p>
            )}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Honeymoon
          </h2>
          <input
            type="text"
            placeholder="Add Honeymoon Places"
            value={newHoneymoonState.name}
            onChange={(e) => setNewHoneymoonState({ name: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            onClick={addHoneymoonState}
            className="bg-blue-500 text-white font-medium rounded-lg p-3 mb-4 w-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Add Place
          </button>
          <h3 className="font-semibold text-gray-700 mb-2">States:</h3>
          <ul className="space-y-2">
            {honeymoonStates.length > 0 ? (
              honeymoonStates.map((state) => (
                <li
                  key={state._id}
                  className="flex justify-between items-center bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-colors duration-200 shadow-sm"
                >
                  <span className="text-gray-800">{state.stateName}</span>
                  <button
                    onClick={() => deleteHoneymoonState(state._id)}
                    className="text-red-500 hover:text-red-600 transition-colors duration-200"
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No states available.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default States;
