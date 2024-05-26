import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>
            <FaGithub size={30} />
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
