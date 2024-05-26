"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // EmailJS에서 생성한 서비스 ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // EmailJS에서 생성한 템플릿 ID
        formData,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, // EmailJS 사용자 ID
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log(error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="name" placeholder="Names and SurName" value={formData.name} onChange={handleChange} />
        <input type="text" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
        <input
          type="text"
          name="phone"
          placeholder="Phone number (Optional)"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
