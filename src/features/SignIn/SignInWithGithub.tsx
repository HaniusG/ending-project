import React, { FC } from "react";
import { auth } from "../../firebase";
import {
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import styles from "./SignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import {  FaGithub } from "react-icons/fa6";



const SignInWithGitHub: FC = () => {

  const navigate = useNavigate();

  const signInWithGitHub = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      await navigate('/boards');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.authoriseDiv}>
      <button onClick={signInWithGitHub} className={styles.signInGithub}>
          Sign In With <FaGithub />
      </button>
    </div>
  );
};

export default SignInWithGitHub;
