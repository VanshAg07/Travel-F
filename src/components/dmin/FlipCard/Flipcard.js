import React, { useState, useEffect } from "react";
import axios from "axios";

const Flipcard = () => {
  const [stateName, setStateName] = useState("");
  const [flipPrice, setFlipPrice] = useState("");
  const [flipcardImages, setFlipcardImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("national");
  const [flipcards, setFlipcards] = useState({
    national: [],
    international: [],
    honeymoon: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editFlipcardId, setEditFlipcardId] = useState(null);
  const [internationalStates, setInternationalStates] = useState([]);
  const [nationalStates, setNationalStates] = useState([]);
  const [honeymoonStates, setHoneymoonStates] = useState([]);
  const [filteredStates, setFilteredStates] = useState([]);

  useEffect(() => {
    fetchStateNames();
    fetchFlipcards();
  }, []);

  // Fetch state names from the API
  const fetchStateNames = async () => {
    try {
      const [internationalRes, nationalRes, honeymoonRes] = await Promise.all([
        axios.get("http://localhost:5000/api/admin/states"),
        axios.get("http://localhost:5000/api/trip/states"),
        axios.get("http://localhost:5000/api/honeymoon/states"),
      ]);
      setInternationalStates(internationalRes.data);
      setNationalStates(nationalRes.data);
      setHoneymoonStates(honeymoonRes.data);
      filterStatesByCategory("national"); // Set the default filtered states
    } catch (error) {
      console.error("Error fetching states", error);
    }
  };
  const fetchFlipcards = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/flip-card/flip"
      );
      const flipcardData = response.data; // Adjust based on the actual structure of the response

      // Check if response contains an array and map it correctly
      const parsedFlipcards = {
        national: flipcardData.national || [],
        international: flipcardData.international || [],
        honeymoon: flipcardData.honeymoon || [],
      };

      setFlipcards(parsedFlipcards);
    } catch (error) {
      console.error("Error fetching flipcards", error);
    }
  };
  // Handle file change
  const handleFileChange = (e) => {
    setFlipcardImages([...e.target.files]);
  };

  // Handle form submit for add/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stateName) {
      alert("Please select a state.");
      return;
    }
    const formData = new FormData();
    formData.append("stateName", stateName);
    formData.append("flipPrice", flipPrice);
    formData.append("category", selectedCategory);
    flipcardImages.forEach((image) => formData.append("flipcardImage", image));

    try {
      if (isEditing && editFlipcardId) {
        // Only proceed with editing if editFlipcardId is not null or undefined
        await axios.put(
          `http://localhost:5000/api/flip-card/flip/${selectedCategory}/${editFlipcardId}`,
          formData
        );
        setIsEditing(false);
        setEditFlipcardId(null);
      } else {
        await axios.post("http://localhost:5000/api/flip-card/flip", formData);
      }
      fetchFlipcards(); // Refresh the list
      clearForm();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  // Clear form
  const clearForm = () => {
    setStateName("");
    setFlipPrice("");
    setFlipcardImages([]);
    setSelectedCategory("national");
    filterStatesByCategory("national"); // Reset filtered states
  };

  // Filter states by category
  const filterStatesByCategory = (category) => {
    let filteredList = [];
    switch (category) {
      case "national":
        filteredList = nationalStates;
        break;
      case "international":
        filteredList = internationalStates;
        break;
      case "honeymoon":
        filteredList = honeymoonStates;
        break;
      default:
        filteredList = [];
    }
    setFilteredStates(filteredList);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterStatesByCategory(category);
    setStateName(""); // Reset state selection when category changes
  };

  const handleEdit = (category, flipcard) => {
    console.log("Editing flipcard ID:", flipcard.id); // Check the ID
    if (!flipcard._id) {
      console.error("Flipcard ID is undefined");
      return;
    }
    setStateName(flipcard.stateName);
    setFlipPrice(flipcard.flipPrice);
    setSelectedCategory(category);
    setIsEditing(true);
    setEditFlipcardId(flipcard._id);
    filterStatesByCategory(category);
  };

  const handleDelete = async (category, stateName) => {
    if (!stateName || !category) {
      console.error("State name or category is undefined");
      return; // Prevent trying to delete if stateName or category is undefined
    }
    try {
      // Send delete request with category and stateName as parameters
      await axios.delete(`http://localhost:5000/api/flip-card/flip`, {
        data: {
          category: category,
          stateName: stateName,
        },
      });
      fetchFlipcards(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting flipcard", error);
    }
  };

  return (
    <div className="flipcard-manager container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Flipcard Manager</h2>

      {/* Tabs for categories */}
      <div className="flex space-x-4 mb-6">
        {["national", "international", "honeymoon"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`p-2 rounded ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">State Name:</label>
          <select
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="">Select a state</option>
            {filteredStates.map((state) => (
              <option key={state._id} value={state.stateName}>
                {state.stateName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Flip Price:</label>
          <input
            type="number"
            value={flipPrice}
            onChange={(e) => setFlipPrice(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Flipcard Images:
          </label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {isEditing ? "Update Flipcard" : "Add Flipcard"}
          </button>
          {isEditing && (
            <button
              onClick={clearForm}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-bold mb-2">Flipcards List</h3>
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2">
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
        </h4>
        <ul className="space-y-2">
          {flipcards[selectedCategory] &&
          flipcards[selectedCategory].length > 0 ? (
            flipcards[selectedCategory].map((flipcard) => (
              <li
                key={flipcard._id}
                className="border p-2 rounded flex justify-between items-center"
              >
                <div className="flex items-center">
                  {flipcard.flipcardImage.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${flipcard.stateName} Flipcard`}
                      className="w-16 h-16 object-cover mr-2"
                    />
                  ))}
                  <div>
                    <strong>{flipcard.stateName}</strong> - $
                    {flipcard.flipPrice}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(selectedCategory, flipcard)}
                    className="bg-yellow-500 text-white p-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      handleDelete(selectedCategory, flipcard.stateName)
                    }
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li>No flipcards found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Flipcard;
