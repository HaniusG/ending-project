import React from "react";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.registrationContainer}>
      <h2>Register</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="age">Age</label>
        <input type="age" id="age" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

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

        <div className={styles.imageContainer}>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
          />
          <label htmlFor="imageInput">Choose an image</label>
          <img id="previewImage" src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' alt="Preview Image" />
        </div>

        <button type="button">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
