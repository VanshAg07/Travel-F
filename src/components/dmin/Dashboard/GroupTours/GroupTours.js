import React, { useState } from "react";
import axios from "axios";

const GroupTours = () => {
  const [form, setForm] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/group-tours/group-tours",
        form
      );
      resetForm();
    } catch (error) {
      console.error("Error saving tour", error);
    }
  };

  const resetForm = () => {
    setForm({
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
  };

  const handleArrayChange = (index, value, field) => {
    const newForm = { ...form };
    if (newForm[field] && newForm[field][index] !== undefined) {
      newForm[field][index] = value;
    }
    setForm(newForm);
  };

  const addArrayPoint = (field) => {
    setForm((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayPoint = (index, field) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handlePointValueChange = (itineraryIndex, pointIndex, value) => {
    const newItinerary = [...form.itinerary];
    newItinerary[itineraryIndex].points[pointIndex] = value;
    setForm((prev) => ({ ...prev, itinerary: newItinerary }));
  };

  const addItineraryPoint = () => {
    setForm((prev) => ({
      ...prev,
      itinerary: [...prev.itinerary, { title: "", points: [""] }],
    }));
  };

  const removeItineraryPoint = (index) => {
    setForm((prev) => ({
      ...prev,
      itinerary: prev.itinerary.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-5">Group Tours</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Tour Type</label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Tour Type</option>
            <option value="School">School</option>
            <option value="University">University</option>
            <option value="Sports">Sports</option>
            <option value="Adventure">Adventure</option>
          </select>
        </div>

        {/* Introduction Section */}
        <div className="mb-4">
          <label className="block text-gray-700">Introduction</label>
          {form.introduction.map((point, index) => (
            <div key={index} className="mb-1 flex">
              <input
                type="text"
                value={point}
                onChange={(e) =>
                  handleArrayChange(index, e.target.value, "introduction")
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => removeArrayPoint(index, "introduction")}
                className="bg-red-500 text-white px-3 py-1 rounded ml-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayPoint("introduction")}
            className="bg-green-500 text-white px-3 py-1 rounded mt-2"
          >
            Add Introduction Point
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Objectives</label>
          {form.objectives.map((point, index) => (
            <div key={index} className="mb-1 flex">
              <input
                type="text"
                value={point}
                onChange={(e) =>
                  handleArrayChange(index, e.target.value, "objectives")
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => removeArrayPoint(index, "objectives")}
                className="bg-red-500 text-white px-3 py-1 rounded ml-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayPoint("objectives")}
            className="bg-green-500 text-white px-3 py-1 rounded mt-2"
          >
            Add Objectives Point
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Benefits</label>
          {form.benefits.map((point, index) => (
            <div key={index} className="mb-1 flex">
              <input
                type="text"
                value={point}
                onChange={(e) =>
                  handleArrayChange(index, e.target.value, "benefits")
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => removeArrayPoint(index, "benefits")}
                className="bg-red-500 text-white px-3 py-1 rounded ml-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayPoint("benefits")}
            className="bg-green-500 text-white px-3 py-1 rounded mt-2"
          >
            Add Benefits Point
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Logistics</label>
          {form.logistics.map((point, index) => (
            <div key={index} className="mb-1 flex">
              <input
                type="text"
                value={point}
                onChange={(e) =>
                  handleArrayChange(index, e.target.value, "logistics")
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => removeArrayPoint(index, "logistics")}
                className="bg-red-500 text-white px-3 py-1 rounded ml-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayPoint("logistics")}
            className="bg-green-500 text-white px-3 py-1 rounded mt-2"
          >
            Add Logistics Point
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Testimonials</label>
          {form.testimonials.map((point, index) => (
            <div key={index} className="mb-1 flex">
              <input
                type="text"
                value={point}
                onChange={(e) =>
                  handleArrayChange(index, e.target.value, "testimonials")
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => removeArrayPoint(index, "testimonials")}
                className="bg-red-500 text-white px-3 py-1 rounded ml-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayPoint("testimonials")}
            className="bg-green-500 text-white px-3 py-1 rounded mt-2"
          >
            Add Testimonials Point
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Call To Action</label>
          {form.callToAction.map((point, index) => (
            <div key={index} className="mb-1 flex">
              <input
                type="text"
                value={point}
                onChange={(e) =>
                  handleArrayChange(index, e.target.value, "callToAction")
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => removeArrayPoint(index, "callToAction")}
                className="bg-red-500 text-white px-3 py-1 rounded ml-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayPoint("callToAction")}
            className="bg-green-500 text-white px-3 py-1 rounded mt-2"
          >
            Add Call To Action Point
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Itinerary</label>
          {form.itinerary.map((itinerary, itineraryIndex) => (
            <div key={itineraryIndex} className="mb-2">
              <input
                type="text"
                placeholder="Title"
                value={itinerary.title}
                onChange={(e) => {
                  const newItinerary = [...form.itinerary];
                  newItinerary[itineraryIndex].title = e.target.value;
                  setForm({ ...form, itinerary: newItinerary });
                }}
                className="w-full p-2 border border-gray-300 rounded mb-1"
              />
              {itinerary.points.map((point, pointIndex) => (
                <div key={pointIndex} className="flex mb-1">
                  <input
                    type="text"
                    placeholder="Point"
                    value={point}
                    onChange={(e) =>
                      handlePointValueChange(
                        itineraryIndex,
                        pointIndex,
                        e.target.value
                      )
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addItineraryPoint}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Add Itinerary Point
              </button>
              <button
                type="button"
                onClick={() => removeItineraryPoint(itineraryIndex)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2"
              >
                Remove Itinerary
              </button>
            </div>
          ))}
        </div>
        {/* Conclusion Section */}
        <div className="mb-4">
          <label className="block text-gray-700">Conclusion</label>
          <textarea
            placeholder="Conclusion"
            value={form.conclusion}
            onChange={
              (e) => setForm({ ...form, conclusion: e.target.value }) // Directly set the conclusion
            }
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Tour
        </button>
      </form>
    </div>
  );
};

export default GroupTours;
