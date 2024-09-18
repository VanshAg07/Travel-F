import React, { useState } from "react";
import axios from "axios";

const states = [
  "Meghalaya",
  "Kashmir",
  "Spiti Valley",
  "Kerala",
  "Himachal Pradesh",
  "Rajasthan",
  "Uttrakhand",
  "Ladakh",
  "Goa",
  "Manali",
];

const BeautifulPlaces = () => {
  const [form, setForm] = useState({
    stateName: "",
    location: "",
    title: "",
    description: "",
    img: "", // Base64 image string
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prevState) => ({
          ...prevState,
          img: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      stateName: form.stateName,
      location: form.location,
      title: form.title,
      description: form.description,
      img: form.img, // Base64 image string
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/addBeautifulPlaces",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Beautiful place added successfully!");
      setForm({
        stateName: "",
        location: "",
        title: "",
        description: "",
        img: "",
      });
    } catch (error) {
      console.error("Error adding place:", error.response ? error.response.data : error.message);
      alert("Failed to add place. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Beautiful Place</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="stateName" className="block text-lg font-semibold mb-2">State Name:</label>
          <select
            id="stateName"
            name="stateName"
            value={form.stateName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        ></textarea>
        <input
          type="file"
          name="img"
          onChange={handleChange}
          accept="image/*"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg"
        >
          Add Beautiful Place
        </button>
      </form>
    </div>
  );
};

export default BeautifulPlaces;
