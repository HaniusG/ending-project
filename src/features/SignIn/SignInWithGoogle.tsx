import React, { FC } from 'react'
import {auth} from '../../firebase'
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import styles from './SignIn.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle  } from "react-icons/fa6";

const SignInWithGoogle: FC = () => {
  const navigate = useNavigate()

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try{
          await signInWithPopup(auth, provider);
          await navigate('/boards')
        }catch(err){
          console.log(err);
        }
      }


  return (
   
    <button onClick={signInWithGoogle} className={styles.signInGoogle}>
      Sign In With <FaGoogle/>
    </button>

    
)
  
}

export default SignInWithGoogle;
