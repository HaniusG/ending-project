import React, { useState } from "react";
import styles from "./RegisterPage.module.css";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../../firebase";
import { FaTrello } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const  registerWithEmailPass =  async (e: React.SyntheticEvent)=> {
    e.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      await navigate('/');
    }catch(err){
      console.log(err);
    }
    
  }


  return (
    <div className={styles.mainContainer}>
      <h1>
        <FaTrello/> Trello
      </h1>
      <div className={styles.registrationContainer}>
    <h2>Registration</h2>
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>

      <label htmlFor="age">Age</label>
      <input type="age" id="age" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>

      <div className={styles.genderOptions}>
        <label htmlFor="gender">Gender</label>
        <label>
          <input
            className={styles.customRadio}
            type="radio"
            name="gender"
            value="male"
          />
          Male
        </label>

        <label>
          <input
            className={styles.customRadio}
            type="radio"
            name="gender"
            value="female"
          />
          Female
        </label>
      </div>

      <button type="button" onClick={registerWithEmailPass}>Register</button>
    </form>
  </div>
  <span className={styles.haveAnAcc}>Have an account? <Link to='/'><span>Login</span></Link></span>
  </div>
    
  );
};

export default RegisterPage;
