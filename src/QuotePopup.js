import React from "react";
import Corpoform from "./components/Corpo-form";

const QuotePopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-full overflow-y-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-4">
        <div className="text-center">
        </div>
        <div className="mb-4">
          <Corpoform />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotePopup;