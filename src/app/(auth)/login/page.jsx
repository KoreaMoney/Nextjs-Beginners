import { handleGithubLogin, login } from "@/lib/action";
import React from "react";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="socialname" name="socialname" />
        <input type="password" placeholder="password" name="password" />
        <button>Login with Credentials</button>
      </form>
    </div>
  );
};

export default LoginPage;
