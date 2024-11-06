import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup1 from "./Popup";
import Popup2 from "./Popup2";
import Popup3 from "./Popup3";

const PopupManager = () => {
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [startSecondTimer, setStartSecondTimer] = useState(false);
    const [startThirdTimer, setStartThirdTimer] = useState(false);

    // Timer for first popup
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup1(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    // Timer for second popup - only starts after first popup is closed
    useEffect(() => {
        if (startSecondTimer) {
            const timer = setTimeout(() => {
                setShowPopup2(true);
            }, 15000);

            return () => clearTimeout(timer);
        }
    }, [startSecondTimer]);

    // Timer for third popup - only starts after second popup is closed
    useEffect(() => {
        if (startThirdTimer) {
            const timer = setTimeout(() => {
                setShowPopup3(true);
            }, 15000);

            return () => clearTimeout(timer);
        }
    }, [startThirdTimer]);

    const handleClosePopup1 = () => {
        setShowPopup1(false);
        setStartSecondTimer(true); // Start the timer for second popup
    };

    const handleClosePopup2 = () => {
        setShowPopup2(false);
        setStartThirdTimer(true); // Start the timer for third popup
    };

    const handleClosePopup3 = () => {
        setShowPopup3(false);
    };

    return (
        <>
            {showPopup1 && <Popup1 onClose={handleClosePopup1} />}
            {showPopup2 && <Popup2 onClose={handleClosePopup2} />}
            {showPopup3 && <Popup3 onClose={handleClosePopup3} />}
        </>
    );
};

export default PopupManager;