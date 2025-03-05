import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomeVideo() {
  const [videos, setVideos] = useState([]);
  const [newVideoFile, setNewVideoFile] = useState(null);
  const [editVideo, setEditVideo] = useState(null);
  const [editValue, setEditValue] = useState(null);

  // Fetch all videos
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "https://api.travello10.com//api/home/home-page-video"
      );
      setVideos(response.data.video); // Assuming the response structure is { video: [] }
    } catch (error) {
      toast.error("Error fetching videos.");
      console.error("Error fetching videos:", error);
    }
  };

  // Create a new video
  const handleAddVideo = async () => {
    if (!newVideoFile) return;

    try {
      const formData = new FormData();
      formData.append("video", newVideoFile);

      const response = await axios.post(
        "https://api.travello10.com//api/home/create-home-page-video",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setVideos([...videos, ...response.data.video]); // Adding new videos to the list
      setNewVideoFile(null);
      document.getElementById("fileInput").value = ""; // Clear the file input
      toast.success("Video added successfully!");
    } catch (error) {
      toast.error("Error adding video.");
      console.error("Error adding video:", error);
    }
  };

  // Update a video
  const handleEditVideo = async (id) => {
    if (!editValue) return;

    try {
      const formData = new FormData();
      formData.append("video", editValue);

      const response = await axios.put(
        `https://api.travello10.com//api/home/home-page-video/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setVideos(
        videos.map((video, index) =>
          index === id ? response.data.video : video
        )
      );
      setEditVideo(null);
      setEditValue(null);
      toast.success("Video updated successfully!");
    } catch (error) {
      toast.error("Error updating video.");
      console.error("Error updating video:", error);
    }
  };

  // Delete a video
  const handleDeleteVideo = async (id) => {
    try {
      await axios.delete(
        `https://api.travello10.com//api/home/home-page-video/${id}`
      );
      setVideos(videos.filter((_, index) => index !== id));
      toast.success("Video deleted successfully!");
    } catch (error) {
      toast.error("Error deleting video.");
      console.error("Error deleting video:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer /> {/* Toast container for displaying toasts */}
      <h1 className="text-2xl font-bold mb-4">Home Videos</h1>
      <div className="mb-4">
        <input
          type="file"
          id="fileInput"
          className="border p-2 mr-2"
          accept="video/*"
          onChange={(e) => setNewVideoFile(e.target.files[0])}
        />
        <button
          onClick={handleAddVideo}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Video
        </button>
      </div>
      <div>
        {Array.isArray(videos) &&
          videos.map((video, index) => (
            <div key={index} className="mb-2">
              {editVideo === index ? (
                <>
                  <input
                    type="file"
                    className="border p-2 mr-2"
                    accept="video/*"
                    onChange={(e) => setEditValue(e.target.files[0])}
                  />
                  <button
                    onClick={() => handleEditVideo(index)}
                    className="bg-green-500 text-white p-2 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditVideo(null)}
                    className="bg-gray-500 text-white p-2 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <video src={video} controls className="mr-2" width="300" />
                  <button
                    onClick={() => {
                      setEditVideo(index);
                    }}
                    className="bg-yellow-500 text-white p-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteVideo(index)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomeVideo;