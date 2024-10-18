import React, { useState, useEffect } from "react";
import axios from "axios";

function HomeInternationalComponent() {
  const [internationalData, setInternationalData] = useState([]);
  const [newEntry, setNewEntry] = useState({
    state: "",
    location: "",
    duration: "",
    batches: "",
    image: [],
  });
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchInternationalData();
  }, []);

  // Fetch all entries
  const fetchInternationalData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/home/homepage-international"
      );
      setInternationalData(response.data);
    } catch (error) {
      console.error("Error fetching international data:", error);
      setError("Failed to fetch data");
    }
  };

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  // Handle image file change
  const handleImageChange = (event) => {
    setNewEntry({ ...newEntry, image: Array.from(event.target.files) }); // Updated to 'image'
  };

  // Add or update an entry
  const handleSaveEntry = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("state", newEntry.state);
    formData.append("location", newEntry.location);
    formData.append("duration", newEntry.duration);
    formData.append("batches", newEntry.batches);
    newEntry.image.forEach((img) => formData.append("image", img)); // Updated to 'image'
    try {
      if (editing) {
        await axios.put(
          `http://localhost:5000/api/home/homepage-international/${editing._id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        setEditing(null);
      } else {
        await axios.post(
          "http://localhost:5000/api/home/homepage-international",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }
      setNewEntry({
        state: "",
        location: "",
        duration: "",
        batches: "",
        image: [],
      });
      fetchInternationalData();
    } catch (error) {
      console.error("Error saving entry:", error);
      setError("Failed to save entry");
    }
  };

  // Delete an entry
  const handleDeleteEntry = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/home/homepage-international/${id}`
      );
      fetchInternationalData();
    } catch (error) {
      console.error("Error deleting entry:", error);
      setError("Failed to delete entry");
    }
  };

  // Set an entry for editing
  const handleEditEntry = (entry) => {
    setEditing(entry);
    setNewEntry({
      state: entry.state,
      location: entry.location,
      duration: entry.duration,
      batches: entry.batches,
      image: entry.image || [],
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Home International Packages
      </h2>

      {/* Form to add or update an entry */}
      <form onSubmit={handleSaveEntry} className="mb-6">
        <div className="mb-4">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={newEntry.state}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newEntry.location}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={newEntry.duration}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="batches"
            placeholder="Batches"
            value={newEntry.batches}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            name="image"
            multiple
            onChange={handleImageChange}
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editing ? "Update Entry" : "Add Entry"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

      {/* Display list of entries */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {internationalData.map((entry) => (
          <div key={entry._id} className="border border-gray-300 p-4 rounded">
            <div className="mb-4">
              {entry.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${entry.state}-${index}`}
                  className="w-full h-40 object-cover rounded mb-2"
                />
              ))}
            </div>
            <h3 className="font-bold text-lg">{entry.state}</h3>
            <p className="text-gray-600">{entry.location}</p>
            <p className="text-gray-600">{entry.duration}</p>
            <p className="text-gray-600">{entry.batches}</p>
            <button
              onClick={() => handleEditEntry(entry)}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteEntry(entry._id)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeInternationalComponent;