"use client";

import { useFormState } from "react-dom";
import styles from "./registerForm.module.css";
import { register } from "@/lib/action";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formActive] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formActive} className={styles.form}>
      <input type="text" placeholder="socialname" name="socialname" />
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input type="password" placeholder="password check" name="passwordRepeat" />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b className={styles.loginBtn}>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
