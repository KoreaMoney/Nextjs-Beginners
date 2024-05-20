import styles from "./postUser.module.css";

// FETCH DATA WITH AN API
// const getData = async (linkId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${linkId}`, { cache: "no-store" });
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ social }) => {
  // const user = await getData(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Social</span>
      <span className={styles.linkname}>{social?.name}</span>
    </div>
  );
};

export default PostUser;
