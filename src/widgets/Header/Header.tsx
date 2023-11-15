import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaBell, FaQuestion, FaSearchengin, FaChevronDown } from "react-icons/fa6";
import {  } from "react-icons/fa6";
import { HeaderProps } from "./Header.interface";

const Header: React.FC<HeaderProps>= ({user}) => {
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
        {
            user?.photoURL ?
              <img
            src={user.photoURL}
            alt="User Avatar"
            className={styles.userImage}
          />: <div>No photo</div>
          }

          
        </div>
      </div>
      
    </header>
  );
};
export default Header;
