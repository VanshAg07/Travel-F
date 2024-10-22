import React, { useState, useEffect } from "react";
import axios from "axios";

const Shop = () => {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    stateName: "",
    title: "",
    foodType: "",
    img: null,
  });

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/trip/states")
      .then((response) => {
        const statesList = response.data.map((state) => ({
          name: state.stateName,
          id: state._id,
        }));
        console.log("States:", statesList);
        setStates(statesList);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

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
    setLoading(true);
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
        "http://localhost:5000/api/admin/addShop",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Shop added successfully!");
      setForm({
        stateName: "",
        title: "",
        foodType: "",
        img: null, // Reset the image field
      });
      setLoading(false);
    } catch (error) {
      console.error(
        "Error adding shop:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to add shop. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Shop</h2>
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
          className={`w-full py-2 px-4 bg-blue-600 text-white font-bold rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? (
            <div className="flex justify-center">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Shop;
