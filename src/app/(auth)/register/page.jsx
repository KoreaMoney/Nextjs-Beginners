import { register } from "@/lib/action";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={register} className={styles.form}>
          <input type="text" placeholder="socialname" name="socialname" />
          <input type="text" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input type="password" placeholder="password check" name="passwordRepeat" />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
