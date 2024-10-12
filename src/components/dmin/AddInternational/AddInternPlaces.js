import React, { useState } from "react";
import axios from "axios";

const states = [
  "Dubai",
  "Maldives",
  "Bali",
  "Thailand",
  "Vietnam",
  "Singapore",
];

const AddInternPlaces = () => {
  const [form, setForm] = useState({
    stateName: "",
    location: "",
    title: "",
    description: "",
    img: null, // Store image file directly
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img" && files.length > 0) {
      setForm((prevState) => ({
        ...prevState,
        img: files[0], // Store the file object in the state
      }));
    } else {
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle file and other data
    const formData = new FormData();
    formData.append("stateName", form.stateName);
    formData.append("location", form.location);
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("img", form.img); // Append the image file

    try {
      const response = await axios.post(
        "https://api.travello10.com/api/admin/international/addBeautifulPlaces",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the header for file upload
          },
        }
      );
      alert("Beautiful place added successfully!");
      setForm({
        stateName: "",
        location: "",
        title: "",
        description: "",
        img: null,
      });
    } catch (error) {
      console.error(
        "Error adding place:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to add place. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add New Beautiful Place
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="stateName"
            className="block text-lg font-semibold mb-2"
          >
            State Name:
          </label>
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

export default AddInternPlaces;
