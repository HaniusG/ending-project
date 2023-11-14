import React, { FC } from 'react'
import {auth} from '../../firebase'
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import styles from './SignIn.module.css'
import { Link } from 'react-router-dom'
import { FaGoogle, FaGithub  } from "react-icons/fa6";

const SignIn: FC = () => {

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try{
          await signInWithPopup(auth, provider);
        }catch(err){
          console.log(err);
        }
      }

      const signInWithGitHub = async () => {
        const provider = new GithubAuthProvider();
        try{
          await signInWithPopup(auth, provider);
        }catch(err){
          console.log(err);
        }
      }

  return (
    <div className={styles.authoriseDiv}>
    <button onClick={signInWithGoogle} className={styles.signIn}>
        <Link to="/user">Sign In With <FaGoogle/></Link>
    </button>
     <button onClick={signInWithGitHub} className={styles.signIn}>
      <Link to="/user">Sign In With <FaGithub/></Link>
 </button>
    </div>
    
)
  
}

export default SignIn;
