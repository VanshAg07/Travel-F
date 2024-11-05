import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup1 from "./Popup";
import Popup2 from "./Popup2";
import Popup3 from "./Popup3";

const SignInPopup = () => {
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer1 = setTimeout(() => setShowPopup1(true), 15000); // Show first popup after 15 seconds
        return () => clearTimeout(timer1);
    }, []);

    useEffect(() => {
        if (!showPopup1 && !showPopup2) {
            const timer2 = setTimeout(() => setShowPopup2(true), 15000); // Show second popup after 30 seconds
            return () => clearTimeout(timer2);
        }
    }, [showPopup1]);

    useEffect(() => {
        if (!showPopup2 && !showPopup3) {
            const timer3 = setTimeout(() => setShowPopup3(true), 15000); // Show third popup after 50 seconds
            return () => clearTimeout(timer3);
        }
    }, [showPopup2]);

    const handleSignInClick = () => {
        navigate("/Signup");
    };

    return (
        <>
            {showPopup1 && <Popup1 onClose={() => setShowPopup1(false)} onSignInClick={handleSignInClick} />}
            {showPopup2 && <Popup2 onClose={() => setShowPopup2(false)} onSignInClick={handleSignInClick} />}
            {showPopup3 && <Popup3 onClose={() => setShowPopup3(false)} onSignInClick={handleSignInClick} />}
        </>
    );
};

export default SignInPopup;
