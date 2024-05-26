import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
//FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("https://portfolio-next14-beginner.vercel.app/api/blog", { next: { revalidatePath: 3600 } });
  if (!res.ok) throw new Error("Something went wrong");
  return res.json();
};

const BlogPage = async () => {
  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
