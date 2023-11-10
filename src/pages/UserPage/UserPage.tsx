import React from "react";
import styles from "./UserPage.module.css";
const UserPage = () => {
  return (
    <div className={styles.user}>
      <h1 className={styles.userTitle}>Trello</h1>

      <div className={styles.userProfile}>
        <div className={styles.userAvatar}>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="User Avatar"
          />
          <div className={styles.indicateCircle}></div>
        </div>
        <div className={styles.userInfo}>
          <h2>John Doe</h2>
          <p>Teacher</p>
        </div>

        <div className={styles.personalInfo}>
          <h1>Personal Info</h1>

          <div className={styles.infoContainer}>
            <h2 className={styles.info}>Full name</h2>
            <span className={styles.changeBtn}>John Doe</span>
          </div>

          <div className={styles.infoContainer}>
            <h2 className={styles.info}>Job title</h2>
            <span className={styles.changeBtn}>Teacher</span>
          </div>
          
          <div className={styles.infoContainer}>
            <h2 className={styles.info}>Mail</h2>
            <span className={styles.changeBtn}>john.doe@gmail.com</span>
          </div>

          <div className={styles.infoContainer}>
            <h2 className={styles.info}>Password</h2>
            <span className={styles.changeBtn}>*********</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserPage;
