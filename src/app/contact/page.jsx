import Image from "next/image";
import styles from "./contact.module.css";
import ContactForm from "@/components/contactForm/contactForm";

export const metadata = {
  title: "Contact",
  description: "Contact Description",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact" fill className={styles.img} />
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
