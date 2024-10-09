import React, { useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";

const AddInternPackage = () => {
  const [stateName, setStateName] = useState("");
  const [tripName, setTripName] = useState("");
  const [tripPrice, setTripPrice] = useState("");
  const [tripDate, setTripDate] = useState([""]);
  const [tripInclusions, setTripInclusions] = useState([""]);
  const [tripExclusions, setTripExclusions] = useState([""]);
  const [itineraries, setItineraries] = useState([{ title: "", points: [""] }]);
  const [pdfFiles, setPdfFiles] = useState([
    { file: null, status: "inactive" },
  ]);

  const addDate = () => setTripDate([...tripDate, ""]);
  const addInclusion = () => setTripInclusions([...tripInclusions, ""]);
  const addExclusion = () => setTripExclusions([...tripExclusions, ""]);
  const addItinerary = () =>
    setItineraries([...itineraries, { title: "", points: [""] }]);

  // Handle PDF file selection
  const handleFileChange = (e, index) => {
    const files = [...pdfFiles];
    files[index].file = e.target.files[0]; // Set the file for the specific index
    setPdfFiles(files);
  };

  // Add a new PDF entry
  const addPdf = () => {
    setPdfFiles([...pdfFiles, { file: null, status: "inactive" }]);
  };

  // Handle status change (active/inactive)
  const handleStatusChange = (index) => {
    const updatedPdfs = pdfFiles.map((pdf, i) => ({
      ...pdf,
      status: i === index ? "active" : "inactive",
    }));
    setPdfFiles(updatedPdfs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("stateName", stateName);
    formData.append("tripName", tripName);
    formData.append("tripPrice", tripPrice);
    formData.append("tripDate", JSON.stringify(tripDate));
    formData.append("tripInclusions", JSON.stringify(tripInclusions));
    formData.append("tripExclusions", JSON.stringify(tripExclusions));
    formData.append("tripItinerary", JSON.stringify(itineraries));

    // Append each PDF with its status to formData
    pdfFiles.forEach((pdf, index) => {
      if (pdf.file) {
        formData.append("pdfFiles", pdf.file); // Append the PDF file itself
        formData.append(`pdfStatus_${index}`, pdf.status); // Append the status (active/inactive)
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/international-package",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Package added successfully");
    } catch (error) {
      console.error("Error adding package:", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Add New Trip Package
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        {/* State Name */}
        <div className="flex flex-col space-y-2">
          <label className="font-medium">State Name</label>
          <input
            type="text"
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter state name"
          />
        </div>

        {/* Trip Name */}
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Trip Name</label>
          <input
            type="text"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter trip name"
          />
        </div>

        {/* Trip Price */}
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Trip Price</label>
          <input
            type="number"
            value={tripPrice}
            onChange={(e) => setTripPrice(e.target.value)}
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter trip price"
          />
        </div>

        {/* Trip Dates */}
        <h3 className="text-lg font-semibold">Trip Dates</h3>
        {tripDate.map((date, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="date"
              value={date}
              onChange={(e) => {
                const newDates = [...tripDate];
                newDates[index] = e.target.value;
                setTripDate(newDates);
              }}
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() =>
                  setTripDate(tripDate.filter((_, i) => i !== index))
                }
                className="text-red-500 font-medium"
              >
                Delete
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addDate}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add Date
        </button>

        {/* PDF Upload with Active Status */}
        <h3 className="text-lg font-semibold">Upload PDFs</h3>
        {pdfFiles.map((pdf, index) => (
          <div key={index} className="space-y-2">
            <input
              type="file"
              onChange={(e) => handleFileChange(e, index)}
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="application/pdf"
            />
            <div className="flex items-center space-x-4">
              <label className="text-sm">Status: </label>
              <input
                type="radio"
                name="pdfStatus"
                checked={pdf.status === "active"}
                onChange={() => handleStatusChange(index)}
              />{" "}
              Active
              <input
                type="radio"
                name="pdfStatus"
                checked={pdf.status === "inactive"}
                onChange={() => handleStatusChange(index)}
              />{" "}
              Inactive
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addPdf}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add PDF
        </button>

        {/* Inclusions */}
        {/* Same logic for inclusions, exclusions, itineraries */}

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddInternPackage;
