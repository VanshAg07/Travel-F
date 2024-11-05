import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon from React Icons
import backgroundImage from '../img/popup.jpg'; // Adjust the path to your image

const SignInPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 50000); // Show popup after 15 seconds

        return () => clearTimeout(timer); // Clear timer on unmount
    }, []);

    const handleSignInClick = () => {
        navigate("/Signup"); // Redirect to the sign-in page
    };

    const handleClosePopup = () => {
        setShowPopup(false); // Close the popup
    };

    if (!showPopup) return null; // Don't render if popup is not shown

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
            <div className="bg-zinc-200 p-8 rounded-lg shadow-lg text-center relative transition-transform transform scale-105 hover:scale-100 overflow-hidden sm:max-w-[80%] w-full md:w-auto mx-4" style={{ marginTop: '80px' }}>
                
                {/* Close button with box styling */}
                <button
                    onClick={handleClosePopup}
                    className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors duration-200 z-10"
                >
                    <AiOutlineClose className="h-6 w-6 text-gray-600" /> {/* Close icon */}
                </button>
                
                <h2 className="text-2xl font-bold mb-4 text-cyan-600 z-10">Haven't Signed In Yet?</h2>
                
                {/* Background image positioned between text and button */}
                <div 
                    className="relative mb-6 h-64 w-full rounded-lg overflow-hidden" 
                    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />

<p className="mb-6 text-gray-700 z-10">
                    Sign in now to unlock exclusive features tailored just for you.
                </p>
            </div>
        </div>
    );
};

export default SignInPopup;
