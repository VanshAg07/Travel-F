import React from 'react';
import { AiOutlineClose, AiOutlinePhone, AiOutlineMessage } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import "./ContactModal.css"

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed contact-z inset-0 flex justify-center items-end bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-t-lg w-full max-w-md">
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-gray-500">
            <AiOutlineClose className="text-xl" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-gray-100 rounded-lg">
            {/* Rotate and adjust icon positioning */}
            <AiOutlinePhone className="text-blue-500 text-2xl mr-1 transform rotate-90" />
            <span className="text-sm font-medium">Call Now</span>
          </div>
          <div className="flex items-center p-4 bg-gray-100 rounded-lg">
            {/* Rotate and adjust icon positioning */}
            <FaWhatsapp className="text-green-500 text-2xl mr-1 transform " />
            <span className="text-sm font-medium">Chat With Our Executive</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
