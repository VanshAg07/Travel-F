import React, { useState, useEffect } from "react";
import axios from "axios";

const GroupDetailsEdit = () => {
  const [groupDetails, setGroupDetails] = useState([]);
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    description: [""],
    duration: "",
    numberOfPax: "",
    image: [""],
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchGroupDetails();
  }, []);

  const fetchGroupDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/group-tours/group-details"
      );
      console.log("API Response:", response.data);
      setGroupDetails(response.data.data);
    } catch (error) {
      console.error("Error fetching group details:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(""); // Clear error message on change
  };

  const handleDescriptionChange = (index, value) => {
    const updatedDescriptions = [...formData.description];
    updatedDescriptions[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      description: updatedDescriptions,
    }));
    setError(""); // Clear error message on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/api/group-details/${editingId}`, formData);
      } else {
        await axios.post(
          "http://localhost:5000/api/group-tours/group-details",
          formData
        );
      }
      fetchGroupDetails();
      resetForm();
    } catch (error) {
      setError("Error saving group detail. Please try again.");
      console.error("Error saving group detail", error);
    }
  };

  const resetForm = () => {
    setFormData({
      type: "",
      name: "",
      description: [""],
      duration: "",
      numberOfPax: "",
      image: [""],
    });
    setEditingId(null);
  };

  const handleEdit = (groupDetail) => {
    setFormData({
      type: groupDetail.type,
      name: groupDetail.name,
      description: groupDetail.description,
      duration: groupDetail.duration,
      numberOfPax: groupDetail.numberOfPax,
      image: groupDetail.image,
    });
    setEditingId(groupDetail._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/group-tours/group-details/${id}`);
    fetchGroupDetails();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Group Details</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form className="mb-6 p-4 border rounded shadow" onSubmit={handleSubmit}>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Type (School, University, Sports, Adventure)"
          required
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="block w-full p-2 mb-4 border rounded"
        />
        {formData.description.map((desc, index) => (
          <input
            key={index}
            type="text"
            value={desc}
            onChange={(e) => handleDescriptionChange(index, e.target.value)}
            placeholder={`Description ${index + 1}`}
            required
            className="block w-full p-2 mb-4 border rounded"
          />
        ))}
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Duration"
          required
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="number"
          name="numberOfPax"
          value={formData.numberOfPax}
          onChange={handleChange}
          placeholder="Number of Pax"
          required
          className="block w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="image"
          value={formData.image[0]} // Assuming only the first image is editable
          onChange={(e) =>
            handleChange({ target: { name: "image", value: [e.target.value] } })
          }
          placeholder="Image URL"
          required
          className="block w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingId ? "Update" : "Add"} Group Detail
        </button>
      </form>
      <h2 className="text-xl font-semibold mb-2">Existing Group Details</h2>
      <ul className="space-y-4">
        {groupDetails.map((groupDetail) => (
          <li key={groupDetail._id} className="p-4 border rounded shadow">
            <h3 className="text-lg font-bold">{groupDetail.name}</h3>
            <p>Type: {groupDetail.type}</p>
            <p>Duration: {groupDetail.duration}</p>
            <p>Number of Pax: {groupDetail.numberOfPax}</p>
            <img
              src={groupDetail.image[0]}
              alt={groupDetail.name}
              className="h-32 w-32 object-cover rounded mb-2"
            />
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(groupDetail)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(groupDetail._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupDetailsEdit;
