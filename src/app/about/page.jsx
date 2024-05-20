import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About",
  description: "About Description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Me</h2>
        <h1 className={styles.title}>
          단순히 코드를 작성하는 개발자가 아니라, 성장과 문제 해결, 소통을 중시하며 능동적으로 활동하는 개발자
        </h1>
        <p className={styles.desc}>
          지속적인 성장과 효과적인 커뮤니케이션에 전념하는 적극적인 프론트엔드 개발자로서, 저는 학습은 제한이 없는
          평생의 여정이라고 믿습니다. 저는 끊임없이 제 기술을 향상시키기 위해 노력하고 있으며, 도움이 필요한 사람에게
          도움을 줄 준비가 된 더 나은 사람이 되기 위해 노력합니다.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>1Y +</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>5P +</h1>
            <p>Developed projects count</p>
          </div>
          <div className={styles.box}>
            <h1>400 +</h1>
            <p>Year of contributions</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
