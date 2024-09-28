import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.js";
import Con from './img/C-2.png';
import './Cont.css';
import Footer from "./Footer.js";
import cont from "./img/cont-button.json";
import Lottie from "lottie-react";
import FooterSection from './components/Footersection.js';
import Dropnav from "./components/Dropnav.js"

const Cont = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNo: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'contactNo') {
            const re = /^[0-9\b]+$/;
            if (value === '' || (re.test(value) && value.length <= 10)) {
                setFormData({
                    ...formData,
                    [name]: value
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here (e.g., API call)
    };

    const whatsappMessage = "Hello, I need assistance with my issue.";

    return (
        <div>
            <Nav />
            <Dropnav/>
            <div className="heading-section">
                <h1>Get In Touch With Us</h1>
            </div>
            <div className="contact-wrapper">
                <div>
                    <img src={Con} alt="Contact Illustration" />
                </div>
                <div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h4>Facing Any Issues</h4>
                        <h2>Allow Us to Call You Back!</h2>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        
                        

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="contactNo">Contact No.:</label>
                        <input
                            type="tel"
                            id="contactNo"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleChange}
                            required
                            pattern="[0-9]{10}"
                            title="Contact number should be exactly 10 digits"
                        />

                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <FooterSection/>
            <Footer />


            <div className="fixed-button">
                <a href={`https://wa.me/918287804197?text=${encodeURIComponent(whatsappMessage)}`} 
                   target="_blank" 
                   rel="noopener noreferrer">
                    <Lottie loop={true} animationData={cont}/>
                </a>
            </div>
        </div>
    );
};

export default Cont;
