import React from 'react'
import styles from './LoginPage.module.css'

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
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button">
          Login
        </button>
      </form>
    </div>
    </div>
    
  )
}

export default LoginPage;
