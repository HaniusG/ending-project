import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaBell, FaQuestion, FaSearchengin, FaChevronDown, FaTrello } from "react-icons/fa6";
import { HeaderProps } from "./Header.interface";
import React, {useState} from "react";

const Header: React.FC<HeaderProps>= ({user, handleSignOut}) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false)

  const toggleUserMenu = (): void => {
    setUserMenuOpen(!isUserMenuOpen);
  }

  
  
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <h2><FaTrello/> </h2>
        
        <h2>Trello</h2>
      </div>
      
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
        <div className={styles.userContainer} onClick={toggleUserMenu}>
        
        {
            user?.photoURL ?
              <img
              
            src={user?.photoURL}
            alt="User Avatar"
            className={styles.userImage}
          />: <div>No photo</div>
          }
          {
                  isUserMenuOpen ? (
                    <div className={styles.userMenu}>
                      <ul>
                        <li>
                          <Link to='/user'>Profile</Link>
                        </li>
                        <li>
                          <a href='#'>Settings</a>
                        </li>
                        <li onClick={handleSignOut}>
                          <Link to='/'>Sign out</Link>
                        </li>
                      </ul>
                    </div>
                  ) : null
}
        </div>
      </div>
      
    </header>
  );
};
export default Header;
