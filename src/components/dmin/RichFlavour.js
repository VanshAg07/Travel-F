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

const RichFlavour = () => {
  const [form, setForm] = useState({
    stateName: "",
    title: "",
    foodType: "",
    img: null, // Store the file object instead of Base64 string
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img" && files.length > 0) {
      setForm((prevState) => ({
        ...prevState,
        img: files[0], // Save the file object
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

    // Create a FormData object to send the form data as multipart/form-data
    const formData = new FormData();
    formData.append("stateName", form.stateName);
    formData.append("title", form.title);
    formData.append("foodType", form.foodType);
    if (form.img) {
      formData.append("img", form.img); // Append the image file
    }

    try {
      const response = await axios.post(
        "https://travel-server-iley.onrender.com/api/admin/addRichFlavour",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Rich Flavour added successfully!");
      setForm({
        stateName: "",
        title: "",
        foodType: "",
        img: null, // Reset the image field
      });
    } catch (error) {
      console.error(
        "Error adding flavour:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to add flavour. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add New Rich Flavour
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
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="foodType"
          value={form.foodType}
          onChange={handleChange}
          placeholder="Food Type"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
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
          Add Rich Flavour
        </button>
      </form>
    </div>
  );
};

export default RichFlavour;
