import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

const PostUser = async ({ id }) => {
  const social = await getUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <span className={styles.title}>Social</span>
        <span className={styles.linkname}>{social.socialname}</span>
      </div>
    </div>
  );
};

export default PostUser;
