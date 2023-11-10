import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaBell, FaQuestion, FaSearchengin, FaChevronDown } from "react-icons/fa6";
import {  } from "react-icons/fa6";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Trello</h1>
      <nav>
        <a href="#">Workspaces  <FaChevronDown/></a>
        <a href="#">Recent  <FaChevronDown/></a>
        <a href="#">Starred  <FaChevronDown/></a>
        <a href="#">Templates  <FaChevronDown/></a>
      </nav>
    

      <div className={styles.searchContainer}>
        <input type="text"  placeholder="Search..." />
        <button ><FaSearchengin/></button>
      </div>
      <div className={styles.headerRight}>
        <button><FaBell/></button>
        <button><FaQuestion/></button>
        <div className={styles.userContainer}>
          <img
            src="https://avatars.githubusercontent.com/u/98681?v=4"
            alt="user name"
            className={styles.userImage}
          />

          
        </div>
      </div>
      
    </header>
  );
};
export default Header;
