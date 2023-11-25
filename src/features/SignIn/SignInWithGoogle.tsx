import React, { FC } from 'react'
import {auth} from '../../firebase'
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import styles from './SignIn.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle  } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setLogin } from 'entites/user/userSlice'

const SignInWithGoogle: FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try{
          await signInWithPopup(auth, provider);
          await navigate('/boards')
          await dispatch(setLogin(true));
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
