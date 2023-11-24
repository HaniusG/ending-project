import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import SignInWithGoogle from "features/SignIn/SignInWithGoogle";
import { FaTrello } from "react-icons/fa6";
import SignInWithGitHub from "features/SignIn/SignInWithGithub";
const LoginPage: React.FC = () => {
  return (
    <div className={styles.loginDiv}>
      <h1><FaTrello/> Trello</h1>
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />

          <button type="button" className={styles.login}>
            Login
          </button>
        </form>
        <div className={styles.authoriseDiv}>
        <SignInWithGoogle />
        <SignInWithGitHub />
        </div>
     

      </div>
    </div>
  );
};

export default LoginPage;
