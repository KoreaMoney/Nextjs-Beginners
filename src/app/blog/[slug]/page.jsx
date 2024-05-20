import Image from "next/image";
import styles from "./singlePost.module.css";
import Link from "next/link";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost, getUser } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);
  const social = await getUser(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={post.img} alt="post" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src={post.img} alt="post" width={50} height={50} />
          {social && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser social={social} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Link</span>
            <Link href={post.link} rel="noopener noreferrer" target="_blank" className={styles.detailValue}>
              view
            </Link>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
