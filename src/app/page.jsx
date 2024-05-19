import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Solve, Shape, Innovate Front-End Developer</h1>
        <p className={styles.desc}>
          프론트엔드 개발 과정에서 문제를 해결하고, 그 해결책을 통해 미래의 프론트엔드 형태를 만들어나가며, 이 모든 과정
          속에서 해결방향을 제시하는 개발자.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/linkedin.png" alt="brands" className={styles.brandImg} width={160} height={50} />
          <Image src="/git.png" alt="brands" className={styles.brandImg} width={190} height={50} />
          <Image src="/velog.png" alt="brands" className={styles.brandImg} width={100} height={50} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="hero" className={styles.heroImg} fill />
      </div>
    </div>
  );
};

export default Home;
