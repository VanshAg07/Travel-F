import React, { useState, useEffect } from "react";
import axios from "axios";

const AddBackground = () => {
  const [reload, setReload] = useState(0);
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [formData, setFormData] = useState({
    type: "",
    image: null,
    heading: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch all background images
  const fetchBackgroundImages = async () => {
    try {
      const response = await axios.get(
        "https://api.travello10.com/api/background-images/images"
      );
      setBackgroundImages(response.data);
    } catch (error) {
      console.error("Error fetching background images:", error);
      setErrorMessage("Failed to load images.");
    }
  };

  useEffect(() => {
    fetchBackgroundImages();
  }, [reload]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: e.target.files[0] }); // Capture the file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission for create/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const formDataToSend = new FormData(); // Use FormData to send files
    formDataToSend.append("type", formData.type);
    formDataToSend.append("image", formData.image); // Append file
    formDataToSend.append("heading", formData.heading);

    try {
      if (editingId) {
        // Update existing background image
        await axios.put(
          `https://api.travello10.com/api/background-images/images/${editingId}`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Specify the content type
            },
          }
        );
        setSuccessMessage("Background image updated successfully!");
      } else {
        // Create new background image
        await axios.post(
          "https://api.travello10.com/api/background-images/images",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setSuccessMessage("Background image created successfully!");
      }
      setFormData({ type: "", image: null, heading: "" });
      await fetchBackgroundImages();
      setReload((prev) => prev + 1);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error submitting form. Please try again.");
    }
  };

  // Handle deleting a background image
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://api.travello10.com/api/background-images/images/${id}`
      );
      setSuccessMessage("Background image deleted successfully!");
      await fetchBackgroundImages();
      setReload((prev) => prev + 1);
    } catch (error) {
      console.error("Error deleting background image:", error);
      setErrorMessage("Error deleting image. Please try again.");
    }
  };

  // Handle editing a background image
  const handleEdit = (image) => {
    setEditingId(image._id);
    setFormData({
      type: image.type,
      image: image.image[0], // This will need to be handled for updates
      heading: image.heading,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        Background Image Manager
      </h2>

      {successMessage && (
        <div className="bg-green-200 text-green-800 p-2 rounded mb-4">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-200 text-red-800 p-2 rounded mb-4">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <select
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select Type</option>
          <option value="National">National</option>
          <option value="International">International</option>
          <option value="Honeymoon">Honeymoon</option>
          <option value="Weekend">Weekend</option>
          <option value="Corporate">Corporate</option>
          <option value="Blogs">Blogs</option>
          <option value="Offer">Offer</option>
          <option value="About Us">About Us</option>
        </select>
        <input
          type="file"
          name="image"
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="heading"
          placeholder="Heading"
          value={formData.heading}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          {editingId ? "Update" : "Create"} Background Image
        </button>
      </form>

      <div className="space-y-4">
        {backgroundImages.map((media) => (
          <div key={media._id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{media.heading}</h3>
            <p className="text-gray-600">Type: {media.type}</p>
            {media.image[0].endsWith(".mp4") ? (
              <video controls className="w-[64%] h-64 rounded mt-2">
                <source src={media.image[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={media.image[0]}
                alt={media.heading}
                className="w-[64%] h-64 rounded mt-2"
              />
            )}
            <div className="mt-4 space-x-2">
              <button
                onClick={() => handleEdit(media)}
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(media._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBackground;
