"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contactForm.module.css";
import useAlert from "@/hook/useAlert/useAlert";
import Alert from "../alert/alert";

const ContactForm = () => {
  const { alert, showAlert, hideAlert } = useAlert();

  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
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
          setIsLoading(false);
          showAlert({
            show: true,
            text: "이메일을 성공적으로 보냈습니다.",
            type: "success",
          });
          setTimeout(() => {
            hideAlert();
          }, [3000]);
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log(error);
          setIsLoading(false);
          showAlert({
            show: true,
            text: "이메일을 보내는데 실패하였습니다.",
            type: "danger",
          });
        }
      );
  };

  return (
    <div className={styles.formContainer}>
      {alert.show && <Alert {...alert} />}
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
        <button type="submit">{isLoading ? "Sending" : "Send"}</button>
      </form>
    </div>
  );
};

export default ContactForm;
