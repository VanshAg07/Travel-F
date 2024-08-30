import React, { useState } from "react";
import "./Form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contactNo") {
      const re = /^[0-9\b]+$/;
      if (value === "" || (re.test(value) && value.length <= 10)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
    <div>
    <h1 className="form-heading">Contact Form</h1>
      <h2 className="form-subheading">
        Not sure what to do? <br /> We will give you a call back!
      </h2>
    </div>
      <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="contactNo">Contact No.:</label>
        <input
          type="tel"
          id="contactNo"
          name="contactNo"
          placeholder="Enter Your Phone Number"
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
          placeholder="Enter Your Message (Optional)"
          value={formData.message}
          onChange={handleChange}
        />
        <button className="btn-forms" type="submit">
          Submit
        </button>
      </form>
     </div>
    </>
  );
};

export default ContactForm;
