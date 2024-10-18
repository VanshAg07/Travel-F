import React, { useState, useEffect } from "react";
import axios from "axios";

function HomeGallery() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [existingGalleryId, setExistingGalleryId] = useState(null); // Store the existing gallery ID

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/gallery/home-galleries"
      );
      setGalleryImages(response.data.images || []);
      // Assuming you get an ID for the existing gallery to update
      if (response.data.images.length > 0) {
        setExistingGalleryId(response.data.images[0]._id); // Get the ID of the first gallery item
      }
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // Handle removing an image from the selected files
  const handleRemoveImage = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
  };

  // Handle image upload
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setError("Please select at least one image to upload.");
      return;
    }

    setUploading(true);
    setError("");

    const formData = new FormData();
    for (let file of selectedFiles) {
      formData.append("images", file);
    }

    try {
      await axios.post(
        `http://localhost:5000/api/gallery/home-gallery/${existingGalleryId}`, // Include the existing ID in the URL
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setSelectedFiles([]);
      fetchGalleryImages(); // Refresh the gallery
    } catch (error) {
      console.error("Error uploading images:", error);
      setError("Failed to upload images. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Home Gallery</h2>

      <div className="mb-6 text-center">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          accept="image/*"
          className="mb-4 block mx-auto border border-gray-300 rounded-md p-2"
        />
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          {selectedFiles.length > 0 &&
            selectedFiles.map((file, index) => (
              <div key={index} className="relative w-24 h-24">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Selected ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  &times;
                </button>
              </div>
            ))}
        </div>
        <button
          onClick={handleUpload}
          disabled={uploading}
          className={`px-6 py-2 text-white rounded-md ${
            uploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {uploading ? "Uploading..." : "Upload Images"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      <div className="mt-8">
        {galleryImages.length === 0 ? (
          <p className="text-center text-gray-500">
            No images found in the gallery.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((galleryItem, index) => (
              <div key={index} className="mb-6">
                <div className="grid grid-cols-1 gap-4">
                  {galleryItem.images.map((imageUrl, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="overflow-hidden rounded-lg shadow-lg"
                    >
                      <img
                        src={imageUrl}
                        alt={`Gallery ${index} Image ${imgIndex}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeGallery;