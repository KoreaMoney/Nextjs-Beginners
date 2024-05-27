import { skills } from "@/lib/skills";
import Image from "next/image";
import styles from "./tech.module.css";

export const metadata = {
  title: "Tech Stack",
  description: "Tech Description",
};

const TechStackPage = () => {
  return (
    <div className={styles.container}>
      {skills.map((skill) => (
        <div key={skill.name} className={styles.wrapper}>
          <div className={styles.imageBox} />
          <div className={styles.images}>
            <Image src={skill.imageUrl} alt={skill.name} fill className={styles.img} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStackPage;
