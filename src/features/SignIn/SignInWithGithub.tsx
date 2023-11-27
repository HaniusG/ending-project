import React, { FC } from "react";
import { auth } from "../../firebase";
import {
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import styles from "./SignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import {  FaGithub } from "react-icons/fa6";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useDispatch } from "react-redux";
import { loginWithGithub } from "entites/user/userSlice";




const SignInWithGitHub: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  const signInWithGitHub = async () => {
    await dispatch(loginWithGithub())
    navigate('/boards')
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
