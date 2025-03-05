import React, { useState } from "react";
import axios from "axios";

const GroupDetails = () => {
  const [form, setForm] = useState({
    type: "",
    name: "",
    description: [""],
    duration: "",
    numberOfPax: "",
    image: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleDescriptionChange = (index, value) => {
    const newDescriptions = [...form.description];
    newDescriptions[index] = value;
    setForm({ ...form, description: newDescriptions });
  };

  const addDescription = () => {
    setForm({ ...form, description: [...form.description, ""] });
  };

  const removeDescription = (index) => {
    setForm({
      ...form,
      description: form.description.filter((_, i) => i !== index),
    });
  };

  const handleImageChange = (e) => {
    // Allow multiple file selection
    setForm({ ...form, image: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("type", form.type);
    formData.append("name", form.name);
    formData.append("duration", form.duration);
    formData.append("numberOfPax", form.numberOfPax);

    // Append each description to FormData
    form.description.forEach((desc, index) => {
      formData.append(`description[${index}]`, desc);
    });

    // Append each image file to FormData
    form.image.forEach((file) => {
      formData.append("image", file);
    });

    try {
      await axios.post(
        "https://api.travello10.com/api/group-tours/group-details",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      resetForm();
    } catch (error) {
      console.error("Error saving group details", error);
    }
  };

  const resetForm = () => {
    setForm({
      type: "",
      name: "",
      description: [""],
      duration: "",
      numberOfPax: "",
      image: [],
    });
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-5">Group Details Form</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Type</option>
            <option value="School">School</option>
            <option value="University">University</option>
            <option value="Sports">Sports</option>
            <option value="Adventure">Adventure</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            pattern="^[A-Za-z/]+$" 
            title="Only letters and '/' are allowed"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          {form.description.map((desc, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={desc}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => removeDescription(index)}
                className="bg-red-500 text-white px-3 py-1 rounded ml-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addDescription}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Description
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Duration</label>
          <input
            type="text"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Number of Pax</label>
          <input
            type="number"
            name="numberOfPax"
            value={form.numberOfPax}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Group Details
        </button>
      </form>
    </div>
  );
};

export default GroupDetails;
