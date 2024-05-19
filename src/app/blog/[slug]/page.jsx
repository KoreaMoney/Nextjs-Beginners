import Image from "next/image";
import styles from "./singlePost.module.css";
import Link from "next/link";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://img.freepik.com/photos-premium/icone-linkedin-fond-bleu_75891-2167.jpg"
          alt="post"
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://img.freepik.com/photos-premium/icone-linkedin-fond-bleu_75891-2167.jpg"
            alt="post"
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Social</span>
            <span className={styles.detailValue}>LinkedIn</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Link</span>
            <Link href="https://www.linkedin.com/in/dowon-kim-415646237/" rel="noopener noreferrer" target="_blank">
              view
            </Link>
            {/* <span className={styles.detailValue}>view</span> */}
          </div>
        </div>
        <div className={styles.content}>이곳은 설명이 들어갑니다.</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
