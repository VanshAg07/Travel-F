import React, { useState, useEffect } from "react";
import axios from "axios";

function OurTeam() {
  const [teamId, setTeamId] = useState(null);
  const [reloadData, setReloadData] = useState(false);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState(null);
  const [socialMedia, setSocialMedia] = useState([
    { link: "", socialMediaImg: null },
  ]);
  const [description, setDescription] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.travello10.com/api/home/get-team-member")
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data)) {
          setTeamMembers(data);
        } else {
          console.error("Expected an array but got:", data);
          setTeamMembers([]); // Set to empty array if not an array
        }
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
        setTeamMembers([]); // Set to empty array on error as well
      });
  }, [reloadData]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSocialMediaChange = (index, event) => {
    const values = [...socialMedia];
    if (event.target.name === "socialMediaImg") {
      // Handle file input for social media image
      values[index][event.target.name] = event.target.files[0];
    } else {
      values[index][event.target.name] = event.target.value;
    }
    setSocialMedia(values);
  };

  const addSocialMedia = () => {
    setSocialMedia([...socialMedia, { link: "", socialMediaImg: null }]);
  };

  const removeSocialMedia = (index) => {
    const values = [...socialMedia];
    values.splice(index, 1);
    setSocialMedia(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("image", image); // Add the team member image as a file
    formData.append("description", description);

    // Append social media data (both link and image as file)
    socialMedia.forEach((item, index) => {
      formData.append(`socialMedia[${index}][link]`, item.link);
      if (item.socialMediaImg) {
        formData.append(
          `socialMedia[${index}][socialMediaImg]`,
          item.socialMediaImg
        );
      }
    });

    try {
      if (teamId) {
        // Update existing team member
        await axios.put(
          `https://api.travello10.com/api/home/add-team-member${teamId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        // Create new team member
        await axios.post(
          "https://api.travello10.com/api/home/add-team-member",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      // Reset form after submission
      setName("");
      setPosition("");
      setImage(null);
      setDescription("");
      setSocialMedia([{ link: "", socialMediaImg: null }]);
      setTeamId(null);
      setReloadData(!reloadData);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://api.travello10.com/api/home/add-team-member${id}`)
      .then(() => {
        setReloadData(!reloadData);
      })
      .catch((error) => {
        console.error("Error deleting team member:", error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Team Management</h1>

      {/* Form for adding/updating team members */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {teamId ? "Edit" : "Add"} Team Member
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Position</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleImageChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Social Media
            </label>
            {socialMedia.map((sm, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  name="link"
                  placeholder="Link"
                  className="w-1/2 p-2 border border-gray-300 rounded-md mr-2"
                  value={sm.link}
                  onChange={(event) => handleSocialMediaChange(index, event)}
                />
                <input
                  type="file"
                  name="socialMediaImg"
                  className="w-1/2 p-2 border border-gray-300 rounded-md mr-2"
                  onChange={(event) => handleSocialMediaChange(index, event)}
                />
                <button
                  type="button"
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                  onClick={() => removeSocialMedia(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={addSocialMedia}
            >
              Add Social Media
            </button>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-md"
          >
            {teamId ? "Update" : "Create"} Team Member
          </button>
        </form>
      </div>

      {/* List of team members */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Team Members</h2>
        <ul className="space-y-4">
          {teamMembers.map((member) => (
            <li key={member._id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={`https://api.travello10.com/${member.image[0]}`}
                  alt={member.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.position}</p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => setTeamId(member._id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OurTeam;
