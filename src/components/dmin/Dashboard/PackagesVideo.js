import React, { useEffect, useState } from "react";
import axios from "axios";

function PackagesVideo() {
  const [videoPages, setVideoPages] = useState([]);
  const [formData, setFormData] = useState({ type: "", backgroundVideo: "" });
  const [editing, setEditing] = useState(null);
  const [file, setFile] = useState(null); // New state for file upload

  const fetchVideoPages = async () => {
    try {
      const response = await axios.get(
        "https://api.travello10.com/api/home/video-page"
      );
      setVideoPages(response.data);
    } catch (error) {
      console.error("Error fetching video pages:", error);
    }
  };

  useEffect(() => {
    fetchVideoPages();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set selected file
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("type", formData.type);
    data.append("backgroundVideo", file);

    if (editing) {
      await axios.put(
        `https://api.travello10.com/api/home/video-page/${editing}`,
        data
      );
      setEditing(null);
    } else {
      await axios.post("https://api.travello10.com/api/home/video-page", data);
    }

    setFormData({ type: "", backgroundVideo: "" });
    setFile(null); // Reset file input
    fetchVideoPages();
  };

  // Handle edit button click
  const handleEdit = (videoPage) => {
    setEditing(videoPage._id);
    setFormData({
      type: videoPage.type,
      backgroundVideo: videoPage.backgroundVideo,
    });
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    await axios.delete(`https://api.travello10.com/api/home/video-page/${id}`);
    fetchVideoPages();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Video Pages
      </h1>
      <form onSubmit={handleSubmit} className="mb-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Select Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="Indian">Indian</option>
            <option value="International">International</option>
            <option value="Honeymoon">Honeymoon</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Background Video
          </label>
          <input
            type="file"
            name="backgroundVideo"
            accept="video/*" // Accept only video files
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {editing ? "Update" : "Add"} Video Page
        </button>
      </form>

      <div className="space-y-4">
        {videoPages.map((videoPage) => (
          <div
            key={videoPage._id}
            className="p-4 bg-white rounded-lg shadow-sm"
          >
            <h2 className="text-lg font-semibold">{videoPage.type}</h2>
            <video
              controls
              className="w-full h-64 rounded-lg"
              src={videoPage.backgroundVideo}
              muted
              autoPlay
            />
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => handleEdit(videoPage)}
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(videoPage._id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackagesVideo;
