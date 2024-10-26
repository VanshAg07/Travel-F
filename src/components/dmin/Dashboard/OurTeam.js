import React, { useState, useEffect } from "react";
import axios from "axios";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentMember, setCurrentMember] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    image: null,
    socialMedia: [{ socialMediaImg: null, link: "" }],
    description: "",
  });

  // Fetch team members from the backend
  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/home/get-team-member"
      );
      setTeamMembers(response.data.data);
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prevData) => ({ ...prevData, image: files[0] })); // Set the file object
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  // Handle social media changes
  const handleSocialMediaChange = (index, e) => {
    const { name, value, files } = e.target;
    const updatedSocialMedia = [...formData.socialMedia];
    if (name === "socialMediaImg") {
      updatedSocialMedia[index][name] = files[0]; // Store the file object
    } else {
      updatedSocialMedia[index][name] = value;
    }
    setFormData({ ...formData, socialMedia: updatedSocialMedia });
  };

  // Handle adding/removing social media fields
  const addSocialMedia = () => {
    setFormData((prevData) => ({
      ...prevData,
      socialMedia: [
        ...prevData.socialMedia,
        { socialMediaImg: null, link: "" },
      ],
    }));
  };

  const removeSocialMedia = (index) => {
    const updatedSocialMedia = formData.socialMedia.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, socialMedia: updatedSocialMedia });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("position", formData.position);
    data.append("description", formData.description);
    if (formData.image) {
      data.append("image", formData.image); // Attach the main image
    }

    formData.socialMedia.forEach((social) => {
      if (social.socialMediaImg) {
        data.append("socialMediaImg[]", social.socialMediaImg); // Attach each social media image
      }
      data.append("socialMediaLink[]", social.link); // Attach each social media link
    });

    try {
      if (currentMember) {
        // Update existing member
        await axios.put(
          `http://localhost:5000/api/home/add-team-member/${currentMember._id}`,
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        await axios.post(
          "http://localhost:5000/api/home/add-team-member",
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }
      resetForm();
      fetchTeamMembers();
    } catch (error) {
      console.error("Error saving team member:", error);
    }
  };

  // Reset form data
  const resetForm = () => {
    setFormData({
      name: "",
      position: "",
      image: null, // Reset to null
      socialMedia: [{ socialMediaImg: null, link: "" }],
      description: "",
    });
    setCurrentMember(null);
  };

  // Handle member selection for editing
  const handleEdit = (member) => {
    setCurrentMember(member);
    setFormData({
      name: member.name,
      position: member.position,
      image: member.image, // This should point to the file or URL
      socialMedia: member.socialMedia,
      description: member.description,
    });
  };

  // Handle deleting a team member
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/home/add-team-member/${id}`
      );
      fetchTeamMembers();
    } catch (error) {
      console.error("Error deleting team member:", error);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">Our Team</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={formData.position}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            name="image"
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
          {formData.image && (
            <span className="text-gray-500">
              Selected: {formData.image.name}
            </span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded w-full p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white rounded px-4 py-2"
        >
          {currentMember ? "Update Member" : "Add Member"}
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Team Members</h2>
      <ul className="list-none">
        {teamMembers.map((member) => (
          <li
            key={member._id}
            className="bg-white shadow-md rounded p-4 mb-2 flex justify-between items-center"
          >
            <div className="flex items-center">
              {member.image && (
                <img
                  src={member.image} // Make sure this points to the correct image source
                  alt={member.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
              )}
              <strong>{member.name}</strong> - {member.position}
            </div>
            <div>
              <button
                onClick={() => handleEdit(member)}
                className="bg-yellow-500 text-white rounded px-3 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(member._id)}
                className="bg-red-500 text-white rounded px-3"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurTeam;
