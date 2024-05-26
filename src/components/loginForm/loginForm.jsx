"use client";

import { useFormState } from "react-dom";
import styles from "./loginForm.module.css";
import { login } from "@/lib/action";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, formActive] = useFormState(login, undefined);

  // const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/");
  //   }, [state?.success, router]);

  return (
    <form action={formActive} className={styles.form}>
      <input type="text" placeholder="socialname" name="socialname" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"}
        <b className={styles.loginBtn}>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
