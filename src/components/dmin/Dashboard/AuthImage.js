import React, { useState, useEffect } from "react";
import axios from "axios";

function AuthImage() {
  const [signInData, setSignInData] = useState({
    phoneImage: null,
    image: null,
  });
  const [signInList, setSignInList] = useState([]);
  const [selectedSignIn, setSelectedSignIn] = useState(null);

  useEffect(() => {
    fetchSignIns();
  }, []);

  const fetchSignIns = async () => {
    try {
      const response = await axios.get(
        "https://api.travello10.com//api/popup/auth-image"
      );
      setSignInList(response.data);
    } catch (error) {
      console.error("Error fetching sign-ins:", error);
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setSignInData((prevData) => ({
      ...prevData,
      [name]: files[0],  // Update only the relevant field (either phoneImage or image)
    }));
  };
  
  const createSignIn = async () => {
    const formData = new FormData();
    if (signInData.image) formData.append("image", signInData.image);
    if (signInData.phoneImage)
      formData.append("phoneImage", signInData.phoneImage);

    try {
      const response = await axios.post(
        "https://api.travello10.com//api/popup/auth-image",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setSignInList((prevList) => [...prevList, response.data]);
      setSignInData({ phoneImage: null, image: null });
    } catch (error) {
      console.error("Error creating sign-in:", error);
    }
  };

  const updateSignIn = async () => {
    const formData = new FormData();
    if (signInData.image) formData.append("image", signInData.image);
    if (signInData.phoneImage)
      formData.append("phoneImage", signInData.phoneImage);

    try {
      const response = await axios.put(
        `https://api.travello10.com//api/popup/auth-image/${selectedSignIn._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setSignInList((prevList) =>
        prevList.map((item) =>
          item._id === response.data._id ? response.data : item
        )
      );
      setSelectedSignIn(null);
      setSignInData({ phoneImage: null, image: null });
    } catch (error) {
      console.error("Error updating sign-in:", error);
    }
  };

  const deleteSignIn = async (id) => {
    try {
      await axios.delete(`https://api.travello10.com//api/popup/auth-image/${id}`);
      setSignInList((prevList) => prevList.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting sign-in:", error);
    }
  };

  const loadSignIn = (signIn) => {
    setSelectedSignIn(signIn);
    setSignInData({
      phoneImage: null,
      image: null,
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Sign In Management
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          selectedSignIn ? updateSignIn() : createSignIn();
        }}
        className="space-y-4"
      >
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        <input
          type="file"
          name="phoneImage"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {selectedSignIn ? "Update" : "Create"} Sign In
          </button>
          {selectedSignIn && (
            <button
              type="button"
              onClick={() => setSelectedSignIn(null)}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">
        Existing Sign Ins
      </h3>
      <ul className="space-y-4 mt-4">
        {signInList.map((signIn) => (
          <li
            key={signIn._id}
            className="border p-4 rounded-lg shadow-sm bg-gray-50"
          >
            {signIn.image[0] && (
              <img
                src={`https://api.travello10.com//upload/${signIn.image[0]}`}
                className="mt-2 rounded-lg w-32 h-32 object-cover"
              />
            )}
            {signIn.phoneImage[0] && (
              <img
                src={`https://api.travello10.com//upload/${signIn.phoneImage[0]}`}
                className="mt-2 rounded-lg w-32 h-32 object-cover"
              />
            )}
            <div className="flex justify-end space-x-2 mt-2">
              <button
                onClick={() => loadSignIn(signIn)}
                className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteSignIn(signIn._id)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthImage;
