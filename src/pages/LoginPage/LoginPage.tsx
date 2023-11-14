import React, { useState } from 'react'
import styles from './LoginPage.module.css'
import { LoginPageProps } from './LoginPage.interface';
import SignIn from 'features/SignIn/SignIn';

const LoginPage:React.FC = () => {



 



  return (
    <div className={styles.loginDiv}>
      <h1>Trello</h1>
      <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password" 
        />

        <button type="button" className={styles.login}>
          Login
        </button>
        
      </form>
      <SignIn/>
    </div>
    </div>
    
  )
}

export default LoginPage;
