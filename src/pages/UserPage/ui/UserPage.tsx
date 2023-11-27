import React from "react";
import styles from "./UserPage.module.css";

import { useSelector } from "react-redux";
import { profile } from "console";
import { RootState } from "entites/store";

const UserPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.profile);
  
  return (
    <>
       <div className={styles.userProfile}>
        <div className={styles.userAvatar}>
          {user?.photoUrl ? (
            <img src={user.photoUrl} alt="" />
          ) : (
            <div>No image</div>
          )}
          <div className={styles.userInfo}>
          <h2>{user?.displayName}</h2>
          <p>Student</p>
        </div>

  
        </div>
        

        <div className={styles.personalInfo}>
          <h1>Personal Info</h1>

          <div className={styles.infoContainer}>
            <span className={styles.info}>Username</span>
            <h2 className={styles.changeBtn}>{user?.displayName}</h2>
          </div>

          <div className={styles.infoContainer}>
            <span className={styles.info}>Job title</span>
            <h2 className={styles.changeBtn}>Teacher</h2>
          </div>

          <div className={styles.infoContainer}>
            <span className={styles.info}>Mail</span>
            <h2 className={styles.changeBtn}>{user?.email ? user?.email:<span>No email</span>}</h2>
          </div>

          <div className={styles.infoContainer}>
            <span className={styles.info}>Password</span>
            <h2 className={styles.changeBtn}>*********</h2>
          </div>
         
        </div>
        
      </div>
   
    </>
     
  );
};

export default UserPage;
