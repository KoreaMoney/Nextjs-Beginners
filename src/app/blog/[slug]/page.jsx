import Image from "next/image";
import styles from "./singlePost.module.css";
import Link from "next/link";
import { getPost } from "@/lib/data";

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img && <Image className={styles.img} src={post.img} alt="post" fill />}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src={post.img} alt="post" width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Link</span>
            <Link href={post.link} rel="noopener noreferrer" target="_blank" className={styles.detailValue}>
              view
            </Link>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
