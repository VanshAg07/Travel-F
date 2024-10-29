import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CorporatePartners() {
  const [partners, setPartners] = useState([]);
  const [form, setForm] = useState({
    heading: "",
    description: "",
    place: "",
    people: "",
    youtubeLink: "",
    logo: null,
    image: null,
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchPartners();
  }, []);
  
  const fetchPartners = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/corporate/partners-get"
      );
      const partnersData = Array.isArray(response.data.data)
        ? response.data.data
        : [];
      setPartners(partnersData);
    } catch (error) {
      console.error("Error fetching partners:", error);
      toast.error("Failed to fetch partners.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, logo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("heading", form.heading);
    formData.append("description", form.description);
    formData.append("place", form.place);
    formData.append("people", form.people);
    formData.append("youtubeLink", form.youtubeLink);
    if (form.logo) formData.append("logo", form.logo);

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/corporate/partners-update/${editingId}`,
          formData
        );
        toast.success("Partner updated successfully!");
      } else {
        await axios.post(
          "http://localhost:5000/api/corporate/partners-create",
          formData
        );
        toast.success("Partner added successfully!");
      }
      fetchPartners();
      resetForm();
    } catch (error) {
      console.error("Error saving partner:", error);
      toast.error("Failed to save partner.");
    }
  };

  const handleEdit = (partner) => {
    setEditingId(partner._id);
    setForm({
      heading: partner.heading,
      description: partner.description,
      place: partner.place,
      people: partner.people,
      youtubeLink: partner.youtubeLink,
      logo: null,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/corporate/partners-delete/${id}`
      );
      toast.success("Partner deleted successfully!");
      fetchPartners();
    } catch (error) {
      console.error("Error deleting partner:", error);
      toast.error("Failed to delete partner.");
    }
  };

  const resetForm = () => {
    setForm({
      heading: "",
      description: "",
      place: "",
      people: "",
      youtubeLink: "",
      logo: null,
    });
    setEditingId(null);
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Corporate Partners</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="heading"
            placeholder="Heading"
            value={form.heading}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="place"
            placeholder="Place"
            value={form.place}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="people"
            placeholder="People"
            value={form.people}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="url"
            name="youtubeLink"
            placeholder="YouTube Link"
            value={form.youtubeLink}
            onChange={handleInputChange}
            className="border p-2 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleInputChange}
            className="border p-2 rounded col-span-2"
            required
          />
          <input
            type="file"
            name="logo"
            onChange={handleFileChange}
            className="border p-2 rounded col-span-2"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {editingId ? "Update" : "Add"} Partner
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-500 text-white py-2 px-4 rounded ml-2"
          >
            Cancel
          </button>
        </div>
      </form>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Heading</th>
            <th>Description</th>
            <th>Place</th>
            <th>People</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {partners.length > 0 ? (
            partners.map((partner) => (
              <tr key={partner._id}>
                <td className="text-center">
                  {partner.logo && partner.logo.length > 0 ? (
                    <img
                      src={partner.logo[0]}
                      alt={partner.heading}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    "No logo"
                  )}
                </td>
                <td className="text-center">{partner.heading}</td>
                <td className="text-center">{partner.description}</td>
                <td className="text-center">{partner.place}</td>
                <td className="text-center">{partner.people}</td>
                <td className="text-center">
                  <button
                    onClick={() => handleEdit(partner)}
                    className="bg-yellow-500 text-white py-1 px-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(partner._id)}
                    className="bg-red-500 text-white py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No partners found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CorporatePartners;
