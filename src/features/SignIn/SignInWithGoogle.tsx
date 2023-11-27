import React, { FC } from 'react'
import {auth} from '../../firebase'
import styles from './SignIn.module.css'
import { useNavigate } from 'react-router-dom'
import { FaGoogle  } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useAppDispatch } from 'hooks/useAppDispatch'
import { loginWithGoogle } from 'entites/user/userSlice'


const SignInWithGoogle: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();


    const signInWithGoogle = async () => {

      await dispatch(loginWithGoogle())
      navigate('/boards')
      }

  return (

    <button onClick={signInWithGoogle} className={styles.signInGoogle}>
      Sign In With <FaGoogle/>
    </button>
)
}

export default SignInWithGoogle;
