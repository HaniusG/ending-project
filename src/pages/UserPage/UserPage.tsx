import React from "react";
import styles from "./UserPage.module.css";
import { UserPageProps } from "./UserPage.interface";
import { Link } from "react-router-dom";
import Header from "widgets/Header/Header";
import SideNavBar from "widgets/SideNavBar/SideNavBar";

const UserPage: React.FC<UserPageProps> = ({ user, handleSignOut }) => {
  return (
    <div>
        <Header/>
        <div className={styles.appContainer}>
        <SideNavBar/>
        <div className={styles.user}>
      <div className={styles.userProfile}>
        <div className={styles.userAvatar}>
          {
            user?.photoURL ?
              <img
            src={user.photoURL}
            alt="User Avatar"
          />: <div>No photo</div>
          }
          
          <div className={styles.indicateCircle}></div>
        </div>
        <div className={styles.userInfo}>
          <h2>{user?.displayName}</h2>
          <p>Student</p>
        </div>

        <div className={styles.personalInfo}>
          <h1>Personal Info</h1>

          <div className={styles.infoContainer}>
            <h2 className={styles.info}>{user?.displayName}</h2>
            <span className={styles.changeBtn}>John Doe</span>
          </div>

          <div className={styles.infoContainer}>
            <h2 className={styles.info}>Job title</h2>
            <span className={styles.changeBtn}>Teacher</span>
          </div>
          
          <div className={styles.infoContainer}>
            <h2 className={styles.info}>Mail</h2>
            <span className={styles.changeBtn}>{user?.email}</span>
          </div>

          <div className={styles.infoContainer}>
            <h2 className={styles.info}>Password</h2>
            <span className={styles.changeBtn}>*********</span>
          </div>
          <button onClick={handleSignOut}><Link to="/">Sign out</Link></button>
        </div>
      </div>
    </div>
        </div>


    </div>
    
  );
};

export default UserPage;
