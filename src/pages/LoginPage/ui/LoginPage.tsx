import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import SignInWithGoogle from "features/SignIn/SignInWithGoogle";
import { FaTrello } from "react-icons/fa6";
import SignInWithGitHub from "features/SignIn/SignInWithGithub";
import {auth} from '../../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { setLogin } from "entites/user/userSlice";
import { useDispatch } from "react-redux";
const LoginPage: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const  SignInWithEmailPass =  async (e: React.SyntheticEvent)=> {
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, email, password);
      await navigate('/boards');
      await dispatch(setLogin(true));
    
    await((userCredential: any)=>{console.log(userCredential)});
    }catch(err){
      console.log(err);
    }
    
  }

  return (
    <div className={styles.loginDiv}>
      <h1>
        <FaTrello /> Trello
      </h1>
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" className={styles.login} onClick={SignInWithEmailPass}>
            Login
          </button>
        </form>
        <div className={styles.authoriseDiv}>
          <SignInWithGoogle />
          <SignInWithGitHub />
        </div>

      </div>
      <span className={styles.haveAnAcc}>Dont have an account? <Link to='/register'><span>Sign up</span></Link></span>
    </div>
  );
};

export default LoginPage;
