import React, { useState, useEffect } from "react";
import axios from "axios";

const GroupToursEdit = () => {
  const [groupTours, setGroupTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [formData, setFormData] = useState({
    type: "",
    introduction: [""],
    objectives: [""],
    itinerary: [{ title: "", points: [""] }],
    benefits: [""],
    logistics: [""],
    testimonials: [""],
    callToAction: [""],
    conclusion: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchGroupTours();
  }, []);

  const fetchGroupTours = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.travello10.com/api/group-tours/group-tours"
      );
      // console.log(response.data);
      setGroupTours(response.data.data);
      setMessage("Group tours loaded successfully!");
    } catch (error) {
      console.error("Error fetching group tours:", error);
      setMessage("Error fetching group tours.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `https://api.travello10.com/api/group-tours/group-tours/${id}`,
        formData
      );
      setSelectedTour(null);
      setMessage("Group tour updated successfully!");
      fetchGroupTours(); // Refresh the list
    } catch (error) {
      console.error("Error updating group tour:", error);
      setMessage("Error updating group tour.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(
        `https://api.travello10.com/api/group-tours/group-tours/${id}`
      );
      setMessage("Group tour deleted successfully!");
      fetchGroupTours(); // Refresh the list
    } catch (error) {
      console.error("Error deleting group tour:", error);
      setMessage("Error deleting group tour.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, field) => {
    const { value } = e.target;
    const updatedArray = [...formData[field]];
    updatedArray[e.target.dataset.index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const addArrayItem = (field) => {
    if (Array.isArray(formData[field])) {
      setFormData({ ...formData, [field]: [...formData[field], ""] });
    } else {
      console.error(`${field} is not an array.`);
    }
  };
  const removeArrayItem = (field, index) => {
    const updatedArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updatedArray });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Group Tours</h1>
      {message && <div className="mb-4 text-green-600">{message}</div>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="border rounded-lg divide-y">
          {Array.isArray(groupTours) && groupTours.length > 0 ? (
            groupTours.map((tour) => (
              <li key={tour._id} className="p-4 hover:bg-gray-100 transition">
                <h2 className="text-xl">{tour.type}</h2>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => {
                    setSelectedTour(tour);
                    setFormData({ ...tour });
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(tour._id)}
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p>No group tours available.</p>
          )}
        </ul>
      )}

      {selectedTour && (
        <div className="mt-4 border p-4 rounded-lg">
          <h2 className="text-xl font-bold">Edit Tour</h2>
          <input
            type="text"
            name="type"
            value={formData.type || ""}
            onChange={handleInputChange}
            placeholder="Tour Type"
            className="border rounded-lg px-3 py-2 mb-4 w-full"
          />
          {/* Introduction */}
          <div>
            <h3 className="font-semibold">Introduction</h3>
            {Array.isArray(formData.introduction) &&
              formData.introduction.map((intro, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    data-index={index}
                    value={intro}
                    onChange={(e) => handleArrayChange(e, "introduction")}
                    placeholder={`Introduction ${index + 1}`}
                    className="border rounded-lg px-3 py-2 mb-2 w-full"
                  />
                  <button
                    className="bg-red-500 text-white px-2 ml-2 rounded"
                    onClick={() => removeArrayItem("introduction", index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => addArrayItem("introduction")}
            >
              Add Introduction
            </button>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="font-semibold mt-4">Objectives</h3>
            {Array.isArray(formData.objectives) &&
              formData.objectives.map((objective, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    data-index={index}
                    value={objective}
                    onChange={(e) => handleArrayChange(e, "objectives")}
                    placeholder={`Objective ${index + 1}`}
                    className="border rounded-lg px-3 py-2 mb-2 w-full"
                  />
                  <button
                    className="bg-red-500 text-white px-2 ml-2 rounded"
                    onClick={() => removeArrayItem("objectives", index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => addArrayItem("objectives")}
            >
              Add Objective
            </button>
          </div>

          {/* Itinerary */}

          <div>
            <h3 className="font-semibold mt-4">Itinerary</h3>
            {Array.isArray(formData.itinerary) &&
              formData.itinerary.map((item, index) => (
                <div key={index} className="border rounded-lg p-2 mb-2">
                  <input
                    type="text"
                    placeholder="Itinerary Title"
                    value={item.title}
                    onChange={(e) => {
                      const updatedItinerary = [...formData.itinerary];
                      updatedItinerary[index].title = e.target.value;
                      setFormData({ ...formData, itinerary: updatedItinerary });
                    }}
                    className="border rounded-lg px-3 py-2 w-full mb-2"
                  />
                  {Array.isArray(item.points) &&
                    item.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex mb-2">
                        <input
                          type="text"
                          value={point}
                          onChange={(e) => {
                            const updatedPoints = [...item.points];
                            updatedPoints[pointIndex] = e.target.value;
                            const updatedItinerary = [...formData.itinerary];
                            updatedItinerary[index].points = updatedPoints;
                            setFormData({
                              ...formData,
                              itinerary: updatedItinerary,
                            });
                          }}
                          placeholder={`Point ${pointIndex + 1}`}
                          className="border rounded-lg px-3 py-2 mb-2 w-full"
                        />
                        <button
                          className="bg-red-500 text-white px-2 ml-2 rounded"
                          onClick={() => {
                            const updatedPoints = item.points.filter(
                              (_, i) => i !== pointIndex
                            );
                            const updatedItinerary = [...formData.itinerary];
                            updatedItinerary[index].points = updatedPoints;
                            setFormData({
                              ...formData,
                              itinerary: updatedItinerary,
                            });
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => {
                      const updatedItinerary = [...formData.itinerary];
                      updatedItinerary[index].points.push("");
                      setFormData({ ...formData, itinerary: updatedItinerary });
                    }}
                  >
                    Add Point
                  </button>
                </div>
              ))}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => addArrayItem("itinerary")}
            >
              Add Itinerary
            </button>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="font-semibold mt-4">Benefits</h3>
            {Array.isArray(formData.benefits) &&
              formData.benefits.map((benefit, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    data-index={index}
                    value={benefit}
                    onChange={(e) => handleArrayChange(e, "benefits")}
                    placeholder={`Benefit ${index + 1}`}
                    className="border rounded-lg px-3 py-2 mb-2 w-full"
                  />
                  <button
                    className="bg-red-500 text-white px-2 ml-2 rounded"
                    onClick={() => removeArrayItem("benefits", index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => addArrayItem("benefits")}
            >
              Add Benefit
            </button>
          </div>

          {/* Logistics */}
          <div>
            <h3 className="font-semibold mt-4">Logistics</h3>
            {Array.isArray(formData.logistics) &&
              formData.logistics.map((logistic, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    data-index={index}
                    value={logistic}
                    onChange={(e) => handleArrayChange(e, "logistics")}
                    placeholder={`Logistic ${index + 1}`}
                    className="border rounded-lg px-3 py-2 mb-2 w-full"
                  />
                  <button
                    className="bg-red-500 text-white px-2 ml-2 rounded"
                    onClick={() => removeArrayItem("logistics", index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => addArrayItem("logistics")}
            >
              Add Logistic
            </button>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="font-semibold mt-4">Testimonials</h3>
            {Array.isArray(formData.testimonials) &&
              formData.testimonials.map((testimonial, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    data-index={index}
                    value={testimonial}
                    onChange={(e) => handleArrayChange(e, "testimonials")}
                    placeholder={`Testimonial ${index + 1}`}
                    className="border rounded-lg px-3 py-2 mb-2 w-full"
                  />
                  <button
                    className="bg-red-500 text-white px-2 ml-2 rounded"
                    onClick={() => removeArrayItem("testimonials", index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => addArrayItem("testimonials")}
            >
              Add Testimonial
            </button>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="font-semibold mt-4">Call to Action</h3>
            {Array.isArray(formData.callToAction) &&
              formData.callToAction.map((cta, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    data-index={index}
                    value={cta}
                    onChange={(e) => handleArrayChange(e, "callToAction")}
                    placeholder={`Call to Action ${index + 1}`}
                    className="border rounded-lg px-3 py-2 mb-2 w-full"
                  />
                  <button
                    className="bg-red-500 text-white px-2 ml-2 rounded"
                    onClick={() => removeArrayItem("callToAction", index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => addArrayItem("callToAction")}
            >
              Add Call to Action
            </button>
          </div>

          {/* Conclusion */}
          <div>
            <h3 className="font-semibold mt-4">Conclusion</h3>
            <textarea
              name="conclusion"
              value={formData.conclusion || ""}
              onChange={handleInputChange}
              placeholder="Conclusion"
              className="border rounded-lg px-3 py-2 mb-2 w-full"
            />
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => handleUpdate(selectedTour._id)}
          >
            Update Tour
          </button>
        </div>
      )}
    </div>
  );
};

export default GroupToursEdit;
