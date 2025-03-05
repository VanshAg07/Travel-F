import React, { useState, useEffect } from "react";
import axios from "axios";

function GroupBlogs() {
  const [formData, setFormData] = useState({
    stateName: "",
    heading: "",
    description: "",
    points: [{ subheading: "", des: "" }],
  });
  const [images, setImages] = useState([]);
  const [groupBlogs, setGroupBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchGroupBlogs();
  }, []);

  const fetchGroupBlogs = async () => {
    try {
      const response = await axios.get(
        "https://api.travello10.com//api/group-tours/group-start"
      );
      setGroupBlogs(response.data);
    } catch (error) {
      console.error("Failed to fetch group blogs", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("stateName", formData.stateName);
    data.append("heading", formData.heading);
    data.append("description", formData.description);
    formData.points.forEach((point, index) => {
      data.append(`points[${index}][subheading]`, point.subheading);
      data.append(`points[${index}][des]`, point.des);
    });
    images.forEach((image) => data.append("tripImages", image));

    try {
      if (editingId) {
        await axios.put(
          `https://api.travello10.com//api/group-tours/group-start/${editingId}`,
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        alert("GroupStart updated successfully!");
        setEditingId(null);
      } else {
        await axios.post(
          "https://api.travello10.com//api/group-tours/group-start",
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        alert("GroupStart created successfully!");
      }
      resetForm();
      fetchGroupBlogs();
    } catch (error) {
      console.error("Failed to save GroupStart", error);
      alert("Failed to save GroupStart.");
    }
  };

  const resetForm = () => {
    setFormData({
      stateName: "",
      heading: "",
      description: "",
      points: [{ subheading: "", des: "" }],
    });
    setImages([]);
    setEditingId(null);
  };

  const handleEdit = (groupBlog) => {
    setFormData({
      stateName: groupBlog.stateName,
      heading: groupBlog.heading,
      description: groupBlog.description,
      points: groupBlog.points,
    });
    setEditingId(groupBlog._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this Group Blog?")) {
      try {
        await axios.delete(
          `https://api.travello10.com//api/group-tours/group-start/${id}`
        );
        alert("GroupStart deleted successfully!");
        fetchGroupBlogs();
      } catch (error) {
        console.error("Failed to delete GroupStart", error);
        alert("Failed to delete GroupStart.");
      }
    }
  };

  const addPoint = () => {
    setFormData({
      ...formData,
      points: [...formData.points, { subheading: "", des: "" }],
    });
  };

  const removePoint = (index) => {
    const newPoints = formData.points.filter((_, i) => i !== index);
    setFormData({ ...formData, points: newPoints });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          {editingId ? "Edit Group Blog" : "Create Group Blog"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">
              State Name
            </label>
            <select
              name="stateName"
              value={formData.stateName}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md text-gray-700"
              required
            >
              <option value="">Select</option>
              <option value="School">School</option>
              <option value="University">University</option>
              <option value="Adventure">Adventure</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Heading</label>
            <input
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Images</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>

          <div className="mt-4">
            <h3 className="text-gray-700 font-medium">Points</h3>
            {formData.points.map((point, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <div>
                  <label className="block text-gray-600 font-medium">
                    Subheading
                  </label>
                  <input
                    type="text"
                    value={point.subheading}
                    onChange={(e) => {
                      const newPoints = [...formData.points];
                      newPoints[index].subheading = e.target.value;
                      setFormData({ ...formData, points: newPoints });
                    }}
                    className="w-full mt-2 p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium">
                    Description
                  </label>
                  <input
                    type="text"
                    value={point.des}
                    onChange={(e) => {
                      const newPoints = [...formData.points];
                      newPoints[index].des = e.target.value;
                      setFormData({ ...formData, points: newPoints });
                    }}
                    className="w-full mt-2 p-2 border rounded-md"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removePoint(index)}
                  className="text-red-500 mt-2 self-start hover:underline"
                >
                  Remove Point
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addPoint}
              className="mt-4 bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
            >
              Add Point
            </button>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              {editingId ? "Update Group Blog" : "Create Group Blog"}
            </button>
            {editingId && (
              <button
                onClick={resetForm}
                type="button"
                className="text-red-500 hover:underline"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 text-center">
        Group Blogs
      </h2>
      {groupBlogs.length === 0 ? (
        <p className="text-gray-500 text-center">No Group Blogs found.</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {groupBlogs.map((groupBlog) => (
            <div
              key={groupBlog._id}
              className="bg-white m-4 p-4 w-72 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {groupBlog.heading}
              </h3>
              <p className="text-gray-600 mt-2 mb-4">{groupBlog.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {groupBlog.tripImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={`https://api.travello10.com//upload/${img}`}
                    alt="trip"
                    className="h-20 w-20 rounded-md object-cover"
                  />
                ))}
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => handleEdit(groupBlog)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(groupBlog._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GroupBlogs;
