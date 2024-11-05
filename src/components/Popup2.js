import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import backgroundImage from '../img/popup.jpg';

const Popup2 = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 30000); // Show popup after 15 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleSignInClick = () => {
        navigate("/Signup");
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-2">
            <div className="bg-zinc-200 pt-4 pl-6 pr-6 pb-4 w-full max-w-md sm:w-[80%] md:w-[50%] lg:w-[45%] rounded-lg shadow-lg text-center relative transition-transform transform scale-105 hover:scale-100 overflow-hidden" style={{ marginTop: '100px' }}>
                
                {/* Close button */}
                <button
                    onClick={handleClosePopup}
                    className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors duration-200 z-10"
                >
                    <AiOutlineClose className="h-6 w-6 text-gray-600" />
                </button>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-600 z-10">May I Assist You?</h2>
                
                {/* Background image */}
                <div 
                    className="relative mb-4 h-48 sm:h-56 rounded-lg overflow-hidden" 
                    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />

                {/* New fields */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="mb-4 w-full px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                        type="number"
                        placeholder="Number"
                        className="mb-4 w-full px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                        type="text"
                        placeholder="Interested Places"
                        className="w-full px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <button 
                    onClick={handleSignInClick}
                    className="px-6 py-3 bg-cyan-500 text-white text-sm sm:text-base rounded-lg hover:bg-cyan-600 transition duration-300 shadow-md z-10 w-full sm:w-auto"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Popup2;
