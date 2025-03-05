import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExploreAdventure = () => {
  const [adventures, setAdventures] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    image: [],
    video: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch all adventures
  const fetchAdventures = async () => {
    try {
      const res = await axios.get(
        "https://api.travello10.com/api/home/explore-adventure"
      );
      setAdventures(res.data);
    } catch (error) {
      console.error("Error fetching adventures:", error);
      toast.error("Error fetching adventures.");
    }
  };

  useEffect(() => {
    fetchAdventures();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload changes
  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files });
  };

  // Create or Update Adventure
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("title", formData.title);
    for (let file of formData.image) {
      formDataObj.append("image", file);
    }
    for (let file of formData.video) {
      formDataObj.append("video", file);
    }

    try {
      if (isEditing) {
        await axios.put(
          `https://api.travello10.com/api/home/explore-adventure/${editId}`,
          formDataObj
        );
        setIsEditing(false);
        setEditId(null);
        toast.success("Adventure updated successfully.");
      } else {
        await axios.post(
          "https://api.travello10.com/api/home/explore-adventure",
          formDataObj
        );
        toast.success("Adventure added successfully.");
      }
      fetchAdventures();
      setFormData({ title: "", image: [], video: [] });
    } catch (error) {
      console.error("Error saving adventure:", error);
      toast.error("Error saving adventure.");
    }
  };

  // Delete Adventure
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://api.travello10.com/api/home/explore-adventure/${id}`
      );
      fetchAdventures();
      toast.success("Adventure deleted successfully.");
    } catch (error) {
      console.error("Error deleting adventure:", error);
      toast.error("Error deleting adventure.");
    }
  };

  // Edit Adventure
  const handleEdit = (adventure) => {
    setIsEditing(true);
    setEditId(adventure._id);
    setFormData({
      title: adventure.title,
      image: adventure.image,
      video: adventure.video,
    });
  };

  return (
    <div className="p-6">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Explore Adventure</h2>

      {/* Form for Adding/Updating Adventure */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block mb-2">Title</label>
          <select
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          >
            <option value="">Select Title</option>
            {[
              "International",
              "Team Adventures",
              "Weekend Trips",
              "Romantic Escapes",
              "Corporate Trips",
              "Experience India",
            ].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2">Image</label>
          <input
            type="file"
            name="image"
            multiple
            onChange={handleFileChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Video</label>
          <input
            type="file"
            name="video"
            multiple
            onChange={handleFileChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {isEditing ? "Update Adventure" : "Add Adventure"}
        </button>
      </form>

      {/* Display the List of Adventures */}
      <div className="space-y-4">
        {adventures.map((adventure) => (
          <div
            key={adventure._id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div className="flex gap-5">
              <h3 className="font-bold">{adventure.title}</h3>
              <div className="flex space-x-2 mt-2">
                {adventure.image.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Adventure"
                    className="w-64 h-64 object-cover"
                  />
                ))}
              </div>
              <div className="mt-2">
                {adventure.video.map((vid, index) => (
                  <video
                    key={index}
                    className="w-64 h-64"
                    controls
                    autoPlay
                    muted
                  >
                    <source src={vid} type="video/mp4" />
                  </video>
                ))}
              </div>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(adventure)}
                className="text-blue-500"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(adventure._id)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreAdventure;
